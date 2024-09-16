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
    caller: event.call?.origin?.value?.value
      ? fromHexToSs58(event.call?.origin?.value?.value)
      : undefined,
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
    transactionHash: call.extrinsic?.hash,
    blockNumber: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    dappId: dappId,
    caller: call.origin?.value?.value
      ? fromHexToSs58(call.origin?.value?.value)
      : undefined,
    contract: call.name.split(".")[0],
    success: call.success,
    type: DappActivityType.call,
    name: call.name,
    value: null,
    decodedArgs: args,
  });
}
