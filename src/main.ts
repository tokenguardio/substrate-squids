import axios from "axios";
import https from "https";
import axiosRetry from "axios-retry";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm, CallNorm, SubstrateTransaction } from "./model";
import {
  eventNormalizationHandlers,
  callNormalizationHandlers,
} from "./mappings";
import { createEventNorm, createCallNorm } from "./utils/factories";
import {
  ExtrinsicResponse,
  Extrinsic as SidecarExtrinsic,
} from "./interfaces/sidecar-extrinsic";
import { nullifyNonexistentCalls } from "./utils/misc";
import { processor } from "./processor";
import { handleSubstrateTransaction } from "./processing/substrate-transaction";

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

processor.run(
  new TypeormDatabase({
    stateSchema: process.env.STATE_SCHEMA,
  }),
  async (ctx) => {
    const events: EventNorm[] = [];
    const calls: CallNorm[] = [];
    const substrateTransactions: SubstrateTransaction[] = [];
    let fetchedBlockHash: string = "";
    let fetchedExtrinsics: SidecarExtrinsic[] = [];

    for (const block of ctx.blocks) {
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

    await ctx.store.save(substrateTransactions);

    nullifyNonexistentCalls(events, calls);

    await ctx.store.save(calls);
    await ctx.store.save(events);
  }
);
