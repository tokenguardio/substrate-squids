import {
  SubstrateBlock,
  SubstrateExtrinsic,
  SubstrateCall,
} from "@subsquid/substrate-processor";
import {
  EventNorm,
  CallNorm,
  AddressMapping,
  SubstrateTransaction,
  SubstrateLabel,
} from "../model";
import { MappedAddress } from "../interfaces/mappings/specific";

export function createSubstrateTransaction(
  call: SubstrateCall,
  extrinsic: SubstrateExtrinsic,
  block: SubstrateBlock,
  label: SubstrateLabel | undefined,
  from: string | null,
  to: string | null
): SubstrateTransaction {
  return new SubstrateTransaction({
    id: call.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    name: call.name,
    args: call.args,
    label: label,
    fee: extrinsic.fee,
    tip: extrinsic.tip,
    from: from,
    to: to,
    success: call.success,
  });
}

export function createEventNorm(
  block: SubstrateBlock,
  event: any,
  args: any
): EventNorm {
  return new EventNorm({
    id: event.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    name: event.name,
    args,
    extrinsicSuccess: event.extrinsic?.success,
  });
}

export function createCallNorm(
  block: SubstrateBlock,
  call: SubstrateCall,
  args: any
): CallNorm {
  return new CallNorm({
    id: call.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    name: call.name,
    args,
    success: call.success,
    origin: call.origin,
  });
}

export function createAddressMapping(
  mappedAddress: MappedAddress
): AddressMapping {
  return new AddressMapping({
    id: mappedAddress.hex,
    ss58: mappedAddress.ss58,
  });
}
