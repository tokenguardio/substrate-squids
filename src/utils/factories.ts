import { Block, Event, Call } from "../processor";
import { EventNorm, CallNorm, AddressMapping } from "../model";
import { MappedAddress } from "../interfaces/mappings/specific";

export function createEventNorm(
  block: Block,
  event: Event,
  args: any
): EventNorm {
  return new EventNorm({
    id: event.id,
    blockHash: block.hash,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    name: event.name,
    args,
    extrinsicSuccess: event.extrinsic?.success,
  });
}

export function createCallNorm(block: Block, call: Call, args: any): CallNorm {
  return new CallNorm({
    id: call.id,
    blockHash: block.hash,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
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
