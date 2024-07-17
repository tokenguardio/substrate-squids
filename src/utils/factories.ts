import * as ethers from "ethers";
import { Block, Log, Transaction } from "./../processor";
import { DappActivity, DappActivityType } from "./../model";

export function createDappActivityEvent(
  block: Block,
  log: Log,
  args: ethers.LogDescription,
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
    name: args.name,
    value: null,
    decodedArgs: args.args.toObject(),
  });
}

export function createDappActivityCall(
  block: Block,
  txn: Transaction,
  args: ethers.TransactionDescription,
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
    name: args.name,
    value: txn.value,
    decodedArgs: args.args.toObject(),
  });
}
