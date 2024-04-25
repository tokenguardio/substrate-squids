import { EventNorm, CallNorm, Block } from "../interfaces/models";
import {
  Block as _BlockHeader,
  Event as _Event,
  Call as _Call,
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
