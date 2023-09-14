import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Transaction } from "./model";
import { processor } from "./processor";

processor.run(new TypeormDatabase({ supportHotBlocks: false }), async (ctx) => {
  const transactions: Transaction[] = [];
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
          v: txn.v,
          r: txn.r,
          s: txn.s,
          yParity: txn.yParity,
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
  }
  await ctx.store.upsert(transactions);
});
