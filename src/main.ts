import { TypeormDatabase } from "@subsquid/typeorm-store";
import {
  Trace,
  TraceType,
  Transaction,
  CreateAction,
  CallAction,
  SuicideAction,
  RewardAction,
  CreateResult,
  CallResult,
} from "./model";
import { processor } from "./processor";

processor.run(new TypeormDatabase(), async (ctx) => {
  const transactions: Transaction[] = [];
  const traces: Trace[] = [];
  for (let block of ctx.blocks) {
    for (let txn of block.transactions) {
      transactions.push(
        new Transaction({
          id: txn.id,
          transactionIndex: txn.transactionIndex,
          blockHash: block.header.hash,
          timestamp: new Date(block.header.timestamp),
          from: txn.from,
          to: txn.to,
          hash: txn.hash,
          gas: txn.gas,
          gasPrice: txn.gasPrice,
          maxFeePerGas: txn.maxFeePerGas,
          maxPriorityFeePerGas: txn.maxPriorityFeePerGas,
          input: txn.input,
          nonce: txn.nonce,
          value: txn.value,
          chainId: txn.chainId,
          gasUsed: txn.gasUsed,
          cumulativeGasUsed: txn.cumulativeGasUsed,
          effectiveGasPrice: txn.effectiveGasPrice,
          contractAddress: txn.contractAddress,
          type: txn.type,
          status: txn.status,
          sighash: txn.sighash,
        })
      );
    }
    for (let trc of block.traces) {
      let action:
        | CreateAction
        | CallAction
        | SuicideAction
        | RewardAction
        | null = null;
      let result: CreateResult | CallResult | null = null;

      // Handle 'action' and 'result' based on 'type'
      switch (trc.type) {
        case "create":
          action = new CreateAction({
            from: trc.action.from,
            value: trc.action.value,
            gas: trc.action.gas,
            init: trc.action.init,
          });
          if (trc.result) {
            result = new CreateResult({
              gasUsed: trc.result.gasUsed,
              code: trc.result.code,
              address: trc.result.address || null, // Check for null/undefined
            });
          }
          break;
        case "call":
          action = new CallAction({
            from: trc.action.from,
            to: trc.action.to,
            value: trc.action.value,
            gas: trc.action.gas,
            sighash: trc.action.sighash,
            input: trc.action.input,
          });
          if (trc.result) {
            result = new CallResult({
              gasUsed: trc.result.gasUsed,
              output: trc.result.output,
            });
          }
          break;
        case "suicide":
          action = new SuicideAction({
            address: trc.action.address,
            refundAddress: trc.action.refundAddress,
            balance: trc.action.balance,
          });
          break;
        case "reward":
          action = new RewardAction({
            author: trc.action.author,
            value: trc.action.value,
            rewardType: trc.action.type,
          });
          break;
      }

      traces.push(
        new Trace({
          id: trc.transaction
            ? `${trc.transaction.id}_${trc.traceAddress.join("_")}`
            : trc.traceAddress.join("_"),
          transaction: trc.transaction
            ? new Transaction({ id: trc.transaction.id })
            : undefined,
          transactionIndex: trc.transactionIndex,
          type: convertToTraceType(trc.type),
          subtraces: trc.subtraces,
          error: trc.error,
          action: action,
          result: result,
        })
      );
    }
  }
  await ctx.store.upsert(transactions);
  await ctx.store.upsert(traces);
});

function convertToTraceType(type: string): TraceType {
  switch (type.toUpperCase()) {
    case "CREATE":
      return TraceType.CREATE;
    case "CALL":
      return TraceType.CALL;
    case "SUICIDE":
      return TraceType.SUICIDE;
    case "REWARD":
      return TraceType.REWARD;
    default:
      throw new Error(`Unknown trace type: ${type}`);
  }
}
