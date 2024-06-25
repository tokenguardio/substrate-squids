import axios from "axios";
import https from "https";
import axiosRetry from "axios-retry";
import { processor } from "./processor";
import {
  EventNorm,
  CallNorm,
  Block,
  SubstrateTransaction,
  FtTransfer,
} from "./interfaces/models";
import {
  createCallNorm,
  createEventNorm,
  createBlock,
  createFtTransfer,
} from "./utils/factories";
import {
  ExtrinsicResponse,
  Extrinsic as SidecarExtrinsic,
} from "./interfaces/sidecar-extrinsic";
import {
  eventNormalizationHandlers,
  callNormalizationHandlers,
} from "./mappings";
import { db } from "./db";
import { handleSubstrateTransaction } from "./processing/substrate-transaction";
import { isInFlushWindow, shouldForceFlush } from "./utils/force-flush";
import {
  psp22v4CardinalAbi,
  psp22v4InkWhaleAbi,
  psp22v5CardinalAbi,
} from "./abi/psp22";
import { isDecodedDataFtTransfer } from "./utils/misc";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const client = axios.create({
  baseURL: process.env.SIDECAR_URL || "http://127.0.0.1:8080",
  headers: { "Content-Type": "application/json" },
  httpsAgent: new https.Agent({ keepAlive: true }),
});

axiosRetry(client, {
  retries: 5,
  retryDelay: axiosRetry.exponentialDelay,
});

client.interceptors.response.use((response) => {
  if (response.config.url?.startsWith("/blocks/")) {
    const data = response.data;
    const transformedData: ExtrinsicResponse = {
      extrinsics: data.extrinsics.map((e: any) => ({
        method: e.method,
        signature: e.signature,
        tip: e.tip,
        hash: e.hash,
        info: e.info,
        success: e.success,
        paysFee: e.paysFee,
      })),
    };
    return transformedData;
  }
  return response.data;
});

let blockCount = 0;

processor.run(db, async (ctx) => {
  const events: EventNorm[] = [];
  const calls: CallNorm[] = [];
  const blocks: Block[] = [];
  const substrateTransactions: SubstrateTransaction[] = [];
  const ftTransfers: FtTransfer[] = [];
  let fetchedBlockHash: string = "";
  let fetchedExtrinsics: SidecarExtrinsic[] = [];

  for (let block of ctx.blocks) {
    blocks.push(createBlock(block.header));
    for (const event of block.events) {
      const pallet = event.name.split(".")[0];
      if (block.header.height >= 0 && block.header.height < 14505447) {
        if (
          ["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
            event.name
          )
        ) {
          const args = eventNormalizationHandlers[pallet](event);
          if (
            event.extrinsic?.signature &&
            args.dispatchInfo.paysFee.__kind === "Yes" &&
            args.dispatchInfo.class.__kind === "Normal"
          ) {
            if (fetchedBlockHash !== block.header.hash) {
              const response: ExtrinsicResponse = await client.get(
                `/blocks/${block.header.hash}`
              );
              fetchedExtrinsics = response.extrinsics;
              fetchedBlockHash = block.header.hash;
            }
            let currentExtrinsic = fetchedExtrinsics.find(
              (extrinsic) => extrinsic.hash === event.extrinsic?.hash
            );

            if (!currentExtrinsic) {
              throw new Error(
                `Extrinsic ${event.extrinsic.index} from block ${block.header.height} not found in sidecar response`
              );
            }

            // There are cases when sidecar is unable to fetch information
            if (!currentExtrinsic.info.partialFee) {
              console.log(
                `Incomplete data on sidecar side for block ${block.header.height}, moving on...`
              );
              continue;
            }

            event.extrinsic.fee = BigInt(currentExtrinsic.info.partialFee);
            event.extrinsic.tip = currentExtrinsic.tip
              ? BigInt(currentExtrinsic.tip)
              : undefined;

            handleSubstrateTransaction(
              event.extrinsic,
              substrateTransactions,
              block.header
            );
          }
        }
      } else if (
        block.header.height >= 14505447 &&
        block.header.height < 33235255
      ) {
        if (
          ["Treasury.Deposit"].includes(event.name) &&
          event.extrinsic?.signature
        ) {
          if (event.extrinsic.tip != BigInt(event.args)) {
            event.extrinsic.fee = BigInt(event.args);
          } else {
            continue;
          }

          handleSubstrateTransaction(
            event.extrinsic,
            substrateTransactions,
            block.header
          );
        }
      } else if (block.header.height >= 33235255) {
        if (
          ["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
            event.name
          )
        ) {
          const args = eventNormalizationHandlers[pallet](event);
          if (
            event.extrinsic?.signature &&
            args.dispatchInfo.paysFee.__kind === "Yes" &&
            args.dispatchInfo.class.__kind === "Normal"
          ) {
            handleSubstrateTransaction(
              event.extrinsic,
              substrateTransactions,
              block.header
            );
          }
        }
      }
      if (
        eventNormalizationHandlers[pallet] &&
        !["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
          event.name
        )
      ) {
        const args = eventNormalizationHandlers[pallet](event);
        const eventNorm = createEventNorm(block.header, event, args);
        events.push(eventNorm);
      }
      if (event.name === "Contracts.ContractEmitted") {
        let decodedData;
        let success = false;

        try {
          decodedData = psp22v4InkWhaleAbi.decodeEvent(event.args.data);
          if (isDecodedDataFtTransfer(decodedData)) {
            ftTransfers.push(
              createFtTransfer(
                block.header,
                event,
                decodedData.from,
                decodedData.to,
                decodedData.value,
                event.args.contract
              )
            );
            success = true;
          }
        } catch (err) {
          console.error("Error decoding with psp22v4InkWhaleAbi: ", err);
        }

        if (!success) {
          try {
            decodedData = psp22v4CardinalAbi.decodeEvent(event.args.data);
            if (isDecodedDataFtTransfer(decodedData)) {
              ftTransfers.push(
                createFtTransfer(
                  block.header,
                  event,
                  decodedData.from,
                  decodedData.to,
                  decodedData.value,
                  event.args.contract
                )
              );
            }
          } catch (err) {
            console.error("Error decoding with psp22v4CardinalAbi: ", err);
          }
        }
      }
    }
    for (const call of block.calls) {
      const pallet = call.name.split(".")[0];
      if (callNormalizationHandlers[pallet]) {
        const args = callNormalizationHandlers[pallet](call);
        const callNorm = createCallNorm(block.header, call, args);
        calls.push(callNorm);
      }
    }
  }

  await ctx.store.Block.writeMany(blocks);
  await ctx.store.SubstrateTransaction.writeMany(substrateTransactions);
  await ctx.store.EventNorm.writeMany(events);
  await ctx.store.CallNorm.writeMany(calls);
  await ctx.store.FtTransfer.writeMany(ftTransfers);

  const lastBlock = ctx.blocks[ctx.blocks.length - 1];
  if (lastBlock && typeof lastBlock.header.timestamp === "number") {
    if (isInFlushWindow(lastBlock.header.timestamp)) {
      blockCount += ctx.blocks.length;
      if (shouldForceFlush(blockCount)) {
        ctx.store.setForceFlush(true);
        blockCount = 0;
      }
    }
  }
});
