import {
  EventNorm,
  CallNorm,
  Block,
  SubstrateTransaction,
  SubstrateLabel,
} from "../interfaces/models";
import {
  Block as _BlockHeader,
  Event as _Event,
  Call as _Call,
  Extrinsic as _Extrinsic,
} from "./../processor";

export function createEventNorm(
  block: _BlockHeader,
  event: _Event,
  args: any
): EventNorm {
  return {
    id: event.id,
    blockHash: block.hash,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    name: event.name,
    args,
    extrinsicSuccess: event.extrinsic?.success,
  };
}

export function createCallNorm(
  block: _BlockHeader,
  call: _Call,
  args: any
): CallNorm {
  return {
    id: call.id,
    blockHash: block.hash,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    name: call.name,
    args,
    success: call.success,
    origin: call.origin,
  };
}

export function createBlock(block: _BlockHeader): Block {
  return {
    id: block.id,
    hash: block.hash,
    height: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
  };
}

export function createSubstrateTransaction(
  call: _Call,
  extrinsic: _Extrinsic,
  block: _BlockHeader,
  label: SubstrateLabel | undefined,
  from: string | null,
  to: string | null
): SubstrateTransaction {
  return {
    id: extrinsic.id,
    blockHash: block.hash,
    extrinsicHash: extrinsic.hash,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    name: call.name,
    args: call.args,
    label: label,
    fee: extrinsic.fee,
    tip: extrinsic.tip,
    from: from,
    to: to,
    success: call.success,
  };
}
