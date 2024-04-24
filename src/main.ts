import { processor } from "./processor";
import { Block, Transaction, FtTransfer } from "./interfaces/models";
import * as erc20Abi from "./abi/erc20";
import {
  createTransaction,
  createBlock,
  createFtTransfer,
} from "./utils/factories";
import { db } from "./db";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

processor.run(db, async (ctx) => {
  const transactions: Transaction[] = [];
  const ftTransfers: FtTransfer[] = [];
  const fTokenAddresses: Set<string> = new Set();
  const blocks: Block[] = [];

  for (let block of ctx.blocks) {
    blocks.push(createBlock(block.header));
    for (let txn of block.transactions) {
      transactions.push(createTransaction(block.header, txn));
    }
    for (let log of block.logs) {
      if (log.topics[0] === erc20Abi.events.Transfer.topic) {
        try {
          // this will throw errors for Transfer events that do not have exactly the same parameters marked as indexed as in ERC20 standard
          const { from, to, value } = erc20Abi.events.Transfer.decode(log);
          ftTransfers.push(
            createFtTransfer(block.header, log, from, to, value)
          );
          fTokenAddresses.add(log.address);
        } catch (err) {}
      }
    }
  }

  await ctx.store.Block.writeMany(blocks);
  await ctx.store.Transaction.writeMany(transactions);
  await ctx.store.FtTransfer.writeMany(ftTransfers);
});
