import { readFileSync } from "fs";
import * as ethers from "ethers";
import { processor } from "./processor";
import {
  TraceCreate,
  TraceReward,
  TraceCall,
  TraceSuicide,
  Contract,
  Block,
} from "./interfaces/models";
import {
  createTraceCall,
  createTraceCreate,
  createTraceReward,
  createTraceSuicide,
  createNewContract,
  createDestroyedContract,
  createBlock,
} from "./utils/factories";
import { TraceTree } from "./utils/trace";
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

let currentTransactionId: string | null = null;
let traceTree: TraceTree = new TraceTree("");

let blockCount = 0;

processor.run(db, async (ctx) => {
  const traceCreates: TraceCreate[] = [];
  const traceCalls: TraceCall[] = [];
  const traceSuicides: TraceSuicide[] = [];
  const traceRewards: TraceReward[] = [];
  const newContracts: Contract[] = [];
  const destroyedContracts: Contract[] = [];
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
    for (let trc of block.traces) {
      // create new TraceTree for each transaction
      if (currentTransactionId !== trc.transaction?.id) {
        traceTree = new TraceTree(trc.transaction?.id || "");
        currentTransactionId = trc.transaction?.id || null;
      }

      if (traceTree) {
        traceTree.addTrace(trc);
      }

      switch (trc.type) {
        case "create":
          if (
            trc.result?.address != null &&
            trc.transaction?.hash !== undefined &&
            trc.transaction?.status !== 0 &&
            trc.error == null &&
            !traceTree.parentHasError(trc)
          ) {
            // CREATE2 opcode - contract can be created more than once in one batch
            // if that's the case take the latest created and remove previous one from newContracts list
            const newContract = createNewContract(block.header, trc);
            upsertContract(newContracts, newContract);
          }
          traceCreates.push(createTraceCreate(block.header, trc, traceTree));
          break;
        case "call":
          traceCalls.push(createTraceCall(block.header, trc, traceTree));
          break;
        case "suicide":
          if (
            trc.transaction?.hash !== undefined &&
            trc.transaction?.status !== 0 &&
            trc.error === null &&
            !traceTree.parentHasError(trc)
          ) {
            // CREATE2 opcode - contract can be destroyed more than once in one batch
            // if that's the case take the latest destroyed contract and remove previous one from destroyedContracts list
            const destroyedContract = createDestroyedContract(
              block.header,
              trc
            );
            upsertContract(destroyedContracts, destroyedContract);
          }
          traceSuicides.push(createTraceSuicide(block.header, trc, traceTree));
          break;
        case "reward":
          traceRewards.push(createTraceReward(block.header, trc, traceTree));
          break;
      }
    }
  }

  // synchronize contracts created by CREATE2
  synchronizeContracts(newContracts, destroyedContracts);

  await ctx.store.Block.writeMany(blocks);
  await ctx.store.Contract.writeMany(newContracts);
  await ctx.store.Contract.writeMany(destroyedContracts);
  await ctx.store.TraceCreate.writeMany(traceCreates);
  await ctx.store.TraceCall.writeMany(traceCalls);
  await ctx.store.TraceSuicide.writeMany(traceSuicides);
  await ctx.store.TraceReward.writeMany(traceRewards);

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
