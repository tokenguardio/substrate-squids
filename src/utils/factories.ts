import { Block, Event, Call, Extrinsic } from "./../processor";
import { DappActivity, DappActivityType, SubstrateExtrinsic } from "./../model";
import * as ss58 from "@subsquid/ss58";
import { SS58_NETWORK } from "../processor";

export function createDappActivityEvent(
  block: Block,
  event: Event,
  args: { [key: string]: any },
  dappName: string
): DappActivity {
  return new DappActivity({
    id: `e-${event.id}`,
    callId: event.call?.id,
    extrinsic: new SubstrateExtrinsic({ id: event.extrinsic?.id }),
    extrinsicHash: event.extrinsic?.hash,
    blockNumber: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    dappName: dappName,
    caller: ss58.codec(SS58_NETWORK).encode(event.call?.origin?.value?.value),
    contract: ss58.codec(SS58_NETWORK).encode(event.args.contract),
    success: event.call?.success,
    type: DappActivityType.event,
    name: args.__kind,
    value: null,
    decodedArgs: args,
  });
}

export function createDappActivityCall(
  block: Block,
  call: Call,
  args: { [key: string]: any },
  dappName: string
): DappActivity {
  return new DappActivity({
    id: `c-${call.id}`,
    callId: call.id,
    extrinsic: new SubstrateExtrinsic({ id: call.extrinsic?.id }),
    extrinsicHash: call.extrinsic?.hash,
    blockNumber: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    dappName: dappName,
    caller: ss58.codec(SS58_NETWORK).encode(call.origin?.value?.value),
    contract: ss58.codec(SS58_NETWORK).encode(call.args.dest.value),
    success: call.success,
    type: DappActivityType.event,
    name: args.__kind,
    value: call.args.value,
    decodedArgs: args,
  });
}

export function createSubstrateExtrinsic(
  item: Call | Event,
  block: Block
): SubstrateExtrinsic {
  return new SubstrateExtrinsic({
    id: item.extrinsic?.id,
    blockNumber: block.height,
    extrinsicHash: item.extrinsic?.hash,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    fee: item.extrinsic?.fee,
    tip: item.extrinsic?.tip,
    success: item.extrinsic?.success,
  });
}
