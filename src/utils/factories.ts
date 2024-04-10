import { Block, Extrinsic, Call, Event } from "../processor";
import {
  EventNorm,
  CallNorm,
  AddressMapping,
  SubstrateTransaction,
  SubstrateLabel,
} from "../model";
import { MappedAddress } from "../interfaces/mappings/specific";

export function createSubstrateTransaction(
  call: Call,
  extrinsic: Extrinsic,
  block: Block,
  label: SubstrateLabel | undefined,
  from: string | null,
  to: string | null
): SubstrateTransaction {
  return new SubstrateTransaction({
    id: extrinsic.id,
    blockHash: block.hash,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
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
    call: new CallNorm({ id: event.call?.id }),
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
