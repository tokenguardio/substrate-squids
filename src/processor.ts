import {
  SubstrateBatchProcessor,
  SubstrateBlock,
} from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import {
  WasmContractMessage,
  WasmContractEvent,
  WasmContractMetadata,
} from "./model";
import { toHex } from "@subsquid/substrate-processor";
import { Abi as SubsquidAbi } from "@subsquid/ink-abi";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};
const FROM_BLOCK = parseInt(process.env.FROM_BLOCK as string);
// const FROM_BLOCK = 36067813;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS as string;
// const CONTRACT_ADDRESS =
//   "0x37792006014f0566478c7bc33c1f0f8f80dacc715a74670bf9867da5e4db69f0";

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive:
      process.env.GATEWAY_URL ??
      "https://aleph-zero-testnet.archive.subsquid.io/graphql",
  })
  .addContractsContractEmitted(CONTRACT_ADDRESS, {
    data: {
      event: true,
    },
  })
  .addCall("Contracts.call", {
    data: {
      call: true,
      extrinsic: {
        success: true,
      },
    },
  })
  .setBlockRange({
    // Contracts pallet was added in block 3613802
    from: isNaN(FROM_BLOCK) ? 3613802 : FROM_BLOCK,
  });

let abiInit = false;
let metadata;
let contractAbi: SubsquidAbi;

processor.run(new TypeormDatabase(), async (ctx) => {
  if (!abiInit) {
    try {
      metadata = await ctx.store.get(WasmContractMetadata, CONTRACT_ADDRESS);
      if (!metadata) {
        throw new Error("Could not fetch metadata");
      }
    } catch (err) {
      console.error(`Failed to fetch metadata: ${err}`);
      throw err;
    }
    try {
      contractAbi = new SubsquidAbi(metadata.metadata);
      abiInit = true;
    } catch (err) {
      console.error(`Failed to create ABI: ${err}`);
      throw err;
    }
  }

  const wasmContractEvents: WasmContractEvent[] = [];
  const wasmContractMessages: WasmContractMessage[] = [];

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.kind === "event" &&
        item.event.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const contractEvent = contractAbi.decodeEvent(item.event.args.data);
        for (let prop in contractEvent) {
          if (contractEvent[prop] instanceof Uint8Array) {
            contractEvent[prop] = toHex(contractEvent[prop]);
          }
        }
        const wasmContractEvent = createWasmContractEvent(
          block.header,
          item.event,
          contractEvent
        );
        wasmContractEvents.push(wasmContractEvent);
      } else if (
        item.kind === "call" &&
        item.call.name === "Contracts.call" &&
        item.call.args.dest.value === CONTRACT_ADDRESS
      ) {
        const contractMessage = contractAbi.decodeMessage(item.call.args.data);
        for (let prop in contractMessage) {
          if (contractMessage[prop] instanceof Uint8Array) {
            contractMessage[prop] = toHex(contractMessage[prop]);
          }
        }
        const wasmContractMessage = createWasmContractMessage(
          block.header,
          item.call,
          contractMessage
        );
        wasmContractMessages.push(wasmContractMessage);
      }
    }
  }
  await ctx.store.save(wasmContractEvents);
  await ctx.store.save(wasmContractMessages);
});

function createWasmContractEvent(
  block: SubstrateBlock,
  event: any,
  args: any
): WasmContractEvent {
  return new WasmContractEvent({
    id: event.id,
    callId: event.call.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    contract: event.args.contract,
    eventName: args.__kind,
    eventArgs: args,
  });
}

function createWasmContractMessage(
  block: SubstrateBlock,
  call: any,
  args: any
): WasmContractMessage {
  return new WasmContractMessage({
    id: call.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    callArgs: call.args,
    dest: call.args.dest.value,
    value: call.args.value,
    methodName: args.__kind,
    messageArgs: args,
    callSuccess: call.success,
  });
}
