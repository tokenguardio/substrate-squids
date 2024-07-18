import { readFileSync } from "fs";
import * as ethers from "ethers";
import { processor } from "./processor";
import { Block, Transaction, Contract, FtTransfer } from "./interfaces/models";
import * as erc20Abi from "./abi/erc20";
import {
  createTransaction,
  createBlock,
  createNewContract,
  createDestroyedContract,
  createFtTransfer,
} from "./utils/factories";
import { Precompiles } from "./interfaces/models";
import {
  upsertContract,
  synchronizeContracts,
} from "./processing/contractCreation";
import { db } from "./db";
import { isInFlushWindow, shouldForceFlush } from "./utils/force-flush";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const precompiles: Precompiles = JSON.parse(
  readFileSync("assets/precompiles.json", "utf8")
);
let precompilesAdded = false;

let blockCount = 0;

processor.run(db, async (ctx) => {
  const transactions: Transaction[] = [];
  const newContracts: Contract[] = [];
  const destroyedContracts: Contract[] = [];
  const ftTransfers: FtTransfer[] = [];
  const blocks: Block[] = [];

  if (!precompilesAdded) {
    newContracts.push(
      ...Object.values(precompiles).map((precompile) => ({
        id: ethers.getAddress(precompile),
      }))
    );
    precompilesAdded = true;
  }

  for (let block of ctx.blocks) {
    blocks.push(createBlock(block.header));
    for (let txn of block.transactions) {
      transactions.push(createTransaction(block.header, txn));
    }
    for (let trc of block.traces) {
      switch (trc.type) {
        case "create":
          if (
            trc.result?.address != null &&
            trc.transaction?.hash !== undefined &&
            trc.transaction?.status !== 0 &&
            trc.error == null
          ) {
            // CREATE2 opcode - contract can be created more than once in one batch
            // if that's the case take the latest created and remove previous one from newContracts list
            const newContract = createNewContract(block.header, trc);
            upsertContract(newContracts, newContract);
          }
          break;
        case "suicide":
          if (
            trc.transaction?.hash !== undefined &&
            trc.transaction?.status !== 0 &&
            trc.error == null
          ) {
            // CREATE2 opcode - contract can be destroyed more than once in one batch
            // if that's the case take the latest destroyed contract and remove previous one from destroyedContracts list
            const destroyedContract = createDestroyedContract(
              block.header,
              trc
            );
            upsertContract(destroyedContracts, destroyedContract);
          }
          break;
      }
    }
    for (let log of block.logs) {
      if (log.topics[0] === erc20Abi.events.Transfer.topic) {
        try {
          // this will throw errors for Transfer events that do not have exactly the same parameters marked as indexed as in ERC20 standard
          const { from, to, value } = erc20Abi.events.Transfer.decode(log);
          ftTransfers.push(
            createFtTransfer(block.header, log, from, to, value)
          );
        } catch (err) {}
      }
    }
  }

  // // synchronize contracts created by CREATE2
  synchronizeContracts(newContracts, destroyedContracts);

  await ctx.store.Block.writeMany(blocks);
  await ctx.store.Transaction.writeMany(transactions);
  await ctx.store.Contract.writeMany(newContracts);
  await ctx.store.Contract.writeMany(destroyedContracts);
  await ctx.store.FtTransfer.writeMany(ftTransfers);

  const lastBlock = ctx.blocks[ctx.blocks.length - 1];
  if (lastBlock && typeof lastBlock.header.timestamp === "number") {
    if (isInFlushWindow(lastBlock.header.timestamp)) {
      blockCount += ctx.blocks.length;
      if (shouldForceFlush(blockCount)) {
        ctx.store.setForceFlush(true);
        blockCount = 0;
      }
    }
  }
});
