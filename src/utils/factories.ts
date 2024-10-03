import { TraceCall } from "@subsquid/evm-processor";
import * as ethers from "ethers";
import { Block, Log, Transaction, Trace } from "./../processor";
import { DappActivity, DappActivityType } from "./../model";
import { traceParentHasError } from "./trace";
import { processArgs } from "./misc";

export function createDappActivityEvent(
  block: Block,
  log: Log,
  args: ethers.LogDescription | null,
  dappId: string
): DappActivity {
  return new DappActivity({
    id: `e-${log.id}`,
    transactionHash: log.transactionHash,
    blockNumber: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    dappId: dappId,
    caller: log.transaction?.from
      ? ethers.getAddress(log.transaction?.from)
      : undefined,
    contract: ethers.getAddress(log.address),
    success: log.transaction?.status ? true : false,
    type: DappActivityType.event,
    name: args?.name,
    value: null,
    decodedArgs: args?.args ? processArgs(args?.args) : undefined,
  });
}

export function createDappActivityCallFromTx(
  block: Block,
  txn: Transaction,
  args: ethers.TransactionDescription | null,
  dappId: string
): DappActivity {
  return new DappActivity({
    id: `c-${txn.id}`,
    transactionHash: txn.hash,
    blockNumber: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    dappId: dappId,
    caller: ethers.getAddress(txn.from),
    contract: txn.to ? ethers.getAddress(txn.to) : undefined,
    success: txn.status ? true : false,
    type: DappActivityType.call,
    name: args?.name,
    value: txn.value,
    decodedArgs: args?.args ? processArgs(args?.args) : undefined,
  });
}

export function createDappActivityCallFromTrace(
  block: Block,
  trc: Extract<Trace, TraceCall>,
  args: ethers.TransactionDescription | null,
  dappId: string
): DappActivity {
  return new DappActivity({
    //@ts-ignore
    id: `c-${trc.id}`,
    transactionHash: trc.transaction?.hash,
    blockNumber: block.height,
    timestamp: block.timestamp ? new Date(block.timestamp) : undefined,
    dappId: dappId,
    caller: ethers.getAddress(trc.action.from),
    contract: trc.action.to ? ethers.getAddress(trc.action.to) : undefined,
    success: !(trc.error || traceParentHasError(trc)),
    type: DappActivityType.call,
    name: args?.name,
    value: trc.action.value,
    decodedArgs: args?.args ? processArgs(args?.args) : undefined,
  });
}
