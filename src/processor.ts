import {
  SubstrateBatchProcessor,
  SubstrateBlock,
  SubstrateCall,
  SubstrateEvent,
} from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import {
  WasmContractMessage,
  WasmContractEvent,
  WasmContractConstructor,
  WasmContractMetadata,
} from "./model";
import { Abi as SubsquidAbi } from "@subsquid/ink-abi";
import { convertUint8ArrayPropsToHex } from "./utils/utils";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const FROM_BLOCK = parseInt(process.env.FROM_BLOCK as string);
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS as string;

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
  const wasmContractConstructors: WasmContractConstructor[] = [];

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
          }
        }
      } else if (
        item.kind === "call" &&
        item.call.name === "Contracts.call" &&
        item.call.args.dest.value === CONTRACT_ADDRESS
      ) {
        try {
          let contractMessage = contractAbi.decodeMessage(item.call.args.data);
          contractMessage = convertUint8ArrayPropsToHex(contractMessage);
          const wasmContractMessage = createWasmContractMessage(
            block.header,
            item.call,
            contractMessage
          );
          wasmContractMessages.push(wasmContractMessage);
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  await ctx.store.save(wasmContractEvents);
  await ctx.store.save(wasmContractMessages);
  await ctx.store.save(wasmContractConstructors);
});

function createWasmContractEvent(
  block: SubstrateBlock,
  event: SubstrateEvent,
  args: { [key: string]: any }
): WasmContractEvent {
  return new WasmContractEvent({
    id: event.id,
    callId: event.call?.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    contract: event.args.contract,
    eventName: args.__kind,
    eventArgs: args,
  });
}

function createWasmContractMessage(
  block: SubstrateBlock,
  call: SubstrateCall,
  args: { [key: string]: any }
): WasmContractMessage {
  return new WasmContractMessage({
    id: call.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    callArgs: call.args,
    callSuccess: call.success,
    dest: call.args.dest.value,
    value: call.args.value,
    methodName: args.__kind,
    messageArgs: args,
  });
}

function createWasmContractConstructor(
  block: SubstrateBlock,
  call: SubstrateCall,
  event: SubstrateEvent,
  args: { [key: string]: any }
): WasmContractConstructor {
  return new WasmContractConstructor({
    id: call.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    callName: call.name,
    callArgs: call.args,
    callSuccess: call.success,
    deployer: event.args.deployer,
    contract: event.args.contract,
    value: call.args.value,
    methodName: args.__kind,
    constructorArgs: args,
  });
}
