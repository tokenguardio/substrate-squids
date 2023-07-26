import {
  SubstrateBlock,
  SubstrateCall,
  SubstrateEvent,
} from "@subsquid/substrate-processor";
import {
  WasmContractMessage,
  WasmContractEvent,
  WasmContractConstructor,
  WasmContractObjectType,
  WasmContractDecodingError,
} from "./../model";

export function createWasmContractEvent(
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

export function createWasmContractMessage(
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

export function createWasmContractConstructor(
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

export function createWasmContractDecodingError(
  block: SubstrateBlock,
  item: SubstrateCall | SubstrateEvent,
  type: WasmContractObjectType,
  contract: string,
  error: string
): WasmContractDecodingError {
  return new WasmContractDecodingError({
    id: item.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    contract: contract,
    type: type,
    name: item.name,
    args: item.args,
    errorMessage: error,
  });
}
