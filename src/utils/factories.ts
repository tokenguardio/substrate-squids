import { Block, Event, Call } from "./../processor";
import { DappActivity, DappActivityType } from "./../model";
import { fromHexToSs58 } from "./misc";

export function createDappActivityEvent(
  block: Block,
  event: Event,
  args: { [key: string]: any },
  dappId: string
): DappActivity {
  return new DappActivity({
    id: `e-${event.id}`,
    transactionHash: event.extrinsic?.hash,
    blockNumber: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    dappId: dappId,
    caller: fromHexToSs58(event.call?.origin?.value?.value),
    contract: fromHexToSs58(event.args.contract),
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
  dappId: string
): DappActivity {
  return new DappActivity({
    id: `c-${call.id}`,
    transactionHash: call.extrinsic?.hash,
    blockNumber: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    dappId: dappId,
    caller: fromHexToSs58(call.origin?.value?.value),
    contract: fromHexToSs58(call.args.dest.value),
    success: call.success,
    type: DappActivityType.call,
    name: args.__kind,
    value: call.args.value,
    decodedArgs: args,
  });
}
