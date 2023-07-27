import { SubstrateBatchProcessor } from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import {
  WasmContractMessage,
  WasmContractEvent,
  WasmContractConstructor,
  WasmContractMetadata,
  WasmContractDecodingError,
  WasmContractObjectType,
} from "./model";
import { Abi as SubsquidAbi } from "@subsquid/ink-abi";
import { convertUint8ArrayPropsToHex } from "./utils/utils";
import {
  createWasmContractEvent,
  createWasmContractMessage,
  createWasmContractConstructor,
  createWasmContractDecodingError,
} from "./utils/dbEntityCreators";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};
//const FROM_BLOCK = parseInt(process.env.FROM_BLOCK as string);
const FROM_BLOCK = 36495408;
// const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS as string;
const CONTRACT_ADDRESS =
  "0xa825d3ee80b1d06aaf7d90220e1668d441f35610dcf3a81359f16d292ef850b8";

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
  .addEvent("Contracts.Instantiated", {
    data: {
      event: true,
    },
  })
  .addCall("Contracts.call", {
    data: {
      call: true,
    },
  })
  .addCall("Contracts.call_old_weight", {
    data: {
      call: true,
    },
  })
  .setBlockRange({
    // Contracts pallet was added in block 3613802
    from: isNaN(FROM_BLOCK) ? 3613802 : FROM_BLOCK,
  });

let abiInit = false;
let metadata: WasmContractMetadata | undefined;
let contractAbi: SubsquidAbi;

processor.run(
  new TypeormDatabase({
    stateSchema: process.env.STATE_SCHEMA ?? "squid_processor",
  }),
  async (ctx) => {
    if (!abiInit) {
      //console.log("fdjkdfk");
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
    const wasmContractConstructors: WasmContractConstructor[] = [];
    const wasmContractDecodingErrors: WasmContractDecodingError[] = [];

    for (const block of ctx.blocks) {
      for (const item of block.items) {
        if (item.kind === "event") {
          if (
            item.event.name === "Contracts.ContractEmitted" &&
            item.event.args.contract === CONTRACT_ADDRESS
          ) {
            try {
              let contractEvent = contractAbi.decodeEvent(item.event.args.data);
              contractEvent = convertUint8ArrayPropsToHex(contractEvent);
              const wasmContractEvent = createWasmContractEvent(
                block.header,
                item.event,
                contractEvent
              );
              wasmContractEvents.push(wasmContractEvent);
            } catch (err) {
              console.error(err);
              const wasmContractDecodingError = createWasmContractDecodingError(
                block.header,
                item.event,
                WasmContractObjectType.event,
                item.event.args.contract,
                (err as Error)?.message
              );
              wasmContractDecodingErrors.push(wasmContractDecodingError);
            }
          } else if (
            item.event.name === "Contracts.Instantiated" &&
            item.event.args.contract === CONTRACT_ADDRESS &&
            item.event.call
          ) {
            try {
              const instantiateCall = item.event.call;
              let contractConstructor = contractAbi.decodeConstructor(
                instantiateCall.args.data
              );
              contractConstructor =
                convertUint8ArrayPropsToHex(contractConstructor);
              const wasmContractConstructor = createWasmContractConstructor(
                block.header,
                instantiateCall,
                item.event,
                contractConstructor
              );
              wasmContractConstructors.push(wasmContractConstructor);
            } catch (err) {
              console.error(err);
              const wasmContractDecodingError = createWasmContractDecodingError(
                block.header,
                item.event,
                WasmContractObjectType.constructor,
                item.event.args.contract,
                (err as Error)?.message
              );
              wasmContractDecodingErrors.push(wasmContractDecodingError);
            }
          }
        } else if (
          item.kind === "call" &&
          item.call.name === "Contracts.call" &&
          item.call.args.dest.value === CONTRACT_ADDRESS
        ) {
          try {
            let contractMessage = contractAbi.decodeMessage(
              item.call.args.data
            );
            contractMessage = convertUint8ArrayPropsToHex(contractMessage);
            const wasmContractMessage = createWasmContractMessage(
              block.header,
              item.call,
              contractMessage
            );
            wasmContractMessages.push(wasmContractMessage);
          } catch (err) {
            console.error(err);
            const wasmContractDecodingError = createWasmContractDecodingError(
              block.header,
              item.call,
              WasmContractObjectType.message,
              item.call.args.dest.value,
              (err as Error)?.message
            );
            wasmContractDecodingErrors.push(wasmContractDecodingError);
          }
        }
      }
    }
    await ctx.store.save(wasmContractEvents);
    await ctx.store.save(wasmContractMessages);
    await ctx.store.save(wasmContractConstructors);
    await ctx.store.save(wasmContractDecodingErrors);
  }
);
