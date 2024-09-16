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
    callId: event.call?.id,
    transactionHash: event.extrinsic?.hash,
    blockNumber: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    dappId: dappId,
    caller: fromHexToSs58(event.call?.origin?.value?.value),
    contract: event.name.split(".")[0],
    success: event.call?.success,
    type: DappActivityType.event,
    name: event.name,
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
    callId: call.id,
    transactionHash: call.extrinsic?.hash,
    blockNumber: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    dappId: dappId,
    caller: fromHexToSs58(call.origin?.value?.value),
    contract: call.name.split(".")[0],
    success: call.success,
    type: DappActivityType.call,
    name: call.name,
    value: null,
    decodedArgs: args,
  });
}
