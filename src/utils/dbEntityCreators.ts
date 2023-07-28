import { SubstrateBlock } from "@subsquid/substrate-processor";
import { EventNorm, CallNorm, AddressMapping } from "../model";
import { MappedAddress } from "../interfaces/mappings/specific";

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
  call: any,
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
