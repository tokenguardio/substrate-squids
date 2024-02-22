import { TypeormDatabase } from "@subsquid/typeorm-store";
import { readFileSync } from "fs";
import * as ethers from "ethers";
import { processor } from "./processor";
import {
  TraceCreate,
  TraceReward,
  TraceCall,
  TraceSuicide,
  Transaction,
  Contract,
  FtTransfer,
} from "./model";
import * as erc20Abi from "./abi/erc20";
import {
  createTransaction,
  createTraceCall,
  createTraceCreate,
  createTraceReward,
  createTraceSuicide,
  createNewContract,
  createDestroyedContract,
  createFtTransfer,
} from "./utils/factories";
import { TraceTree } from "./utils/trace";
import { Precompiles } from "./interfaces/main";
import { createNewFTokens } from "./processing/fTokenCreation";
import { assignAddressLabels } from "./processing/addressLabeling";
import {
  upsertContract,
  synchronizeContracts,
} from "./processing/contractCreation";

const precompiles: Precompiles = JSON.parse(
  readFileSync("assets/precompiles.json", "utf8")
);
let precompilesAdded = false;

let currentTransactionId: string | null = null;
let traceTree: TraceTree = new TraceTree("");

processor.run(
  new TypeormDatabase({ stateSchema: "evm_processor" }),
  async (ctx) => {
    const transactions: Transaction[] = [];
    const traceCreates: TraceCreate[] = [];
    const traceCalls: TraceCall[] = [];
    const traceSuicides: TraceSuicide[] = [];
    const traceRewards: TraceReward[] = [];
    const newContracts: Contract[] = [];
    const destroyedContracts: Contract[] = [];
    const ftTransfers: FtTransfer[] = [];
    const fTokenAddresses: Set<string> = new Set();

    if (!precompilesAdded) {
      newContracts.push(
        ...Object.values(precompiles).map(
          (precompile) => new Contract({ id: ethers.getAddress(precompile) })
        )
      );
      precompilesAdded = true;
    }

    for (let block of ctx.blocks) {
      for (let txn of block.transactions) {
        transactions.push(createTransaction(block.header, txn));
      }
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
            traceSuicides.push(
              createTraceSuicide(block.header, trc, traceTree)
            );
            break;
          case "reward":
            traceRewards.push(createTraceReward(block.header, trc, traceTree));
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
            fTokenAddresses.add(log.address);
          } catch (err) {}
        }
      }
    }

    if (fTokenAddresses.size > 0) {
      const fTokens = await createNewFTokens(fTokenAddresses, ctx);
      await ctx.store.upsert(fTokens);
    }

    await assignAddressLabels(
      newContracts,
      transactions,
      traceCreates,
      traceCalls,
      ctx
    );

    // synchronize contracts created by CREATE2
    synchronizeContracts(newContracts, destroyedContracts);

    await ctx.store.upsert(transactions);
    await ctx.store.upsert(newContracts);
    await ctx.store.upsert(destroyedContracts);
    await ctx.store.upsert(traceCreates);
    await ctx.store.upsert(traceCalls);
    await ctx.store.upsert(traceSuicides);
    await ctx.store.upsert(traceRewards);
    await ctx.store.upsert(ftTransfers);
  }
);
