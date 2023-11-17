import { TypeormDatabase } from "@subsquid/typeorm-store";
import { readFileSync } from "fs";
import { In } from "typeorm";
import {
  TraceCreate,
  TraceReward,
  TraceCall,
  TraceSuicide,
  Transaction,
  Contract,
  EvmLabel,
  AddressType,
} from "./model";
import { convertToTransactionType, calculateFee } from "./utils/utils";
import { TraceTree } from "./utils/trace";
import { CommonTraceFields } from "./interfaces/main";
import { processor } from "./processor";

const precompiles = JSON.parse(readFileSync("assets/precompiles.json", "utf8"));
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
    const contracts: Contract[] = [];
    const destroyedContracts: Contract[] = [];

    if (!precompilesAdded) {
      contracts.push(
        ...Object.values(precompiles).map(
          (precompile) => new Contract({ id: precompile as string })
        )
      );
      precompilesAdded = true;
    }

    for (let block of ctx.blocks) {
      for (let txn of block.transactions) {
        transactions.push(
          new Transaction({
            id: txn.id,
            blockHash: block.header.hash,
            timestamp: new Date(block.header.timestamp),
            hash: txn.hash,
            type:
              txn.type !== undefined
                ? convertToTransactionType(txn.type)
                : undefined,
            from: txn.from,
            to: txn.to,
            fee:
              txn.gasUsed !== undefined && txn.effectiveGasPrice !== undefined
                ? calculateFee(txn.effectiveGasPrice, txn.gasUsed)
                : undefined,
            value: txn.value,
            input: txn.input,
            deployedAddress: txn.contractAddress,
            success: txn.status !== undefined ? Boolean(txn.status) : undefined,
            sighash: txn.sighash,
            transactionIndex: txn.transactionIndex,
          })
        );
      }
      for (let trc of block.traces) {
        if (currentTransactionId !== trc.transaction?.id) {
          traceTree = new TraceTree(trc.transaction?.id || "");
          currentTransactionId = trc.transaction?.id || null;
        }

        if (traceTree) {
          traceTree.addTrace(trc);
        }

        const commonTraceFields: CommonTraceFields = {
          id: trc.transaction
            ? `${trc.transaction.id}_${trc.traceAddress.join("_")}`
            : "",
          transaction: trc.transaction
            ? new Transaction({ id: trc.transaction.id })
            : undefined,
          timestamp: new Date(block.header.timestamp),
          transactionIndex: trc.transactionIndex,
          subtraces: trc.subtraces,
          error: trc.error,
          parentHasError:
            trc.traceAddress.length === 0
              ? null // means it's root trace
              : traceTree.parentHasError(trc),
        };

        switch (trc.type) {
          case "create":
            if (
              trc.result?.address != null &&
              trc.transaction?.hash !== undefined &&
              trc.transaction?.status !== 0 &&
              trc.error === null &&
              !traceTree.parentHasError(trc)
            ) {
              contracts.push(
                new Contract({
                  id: trc.result.address,
                  createdBy: trc.action.from,
                  createTransaction: trc.transaction
                    ? new Transaction({ id: trc.transaction.id })
                    : undefined,
                  createTimestamp: new Date(block.header.timestamp),
                  destroyTimestamp: null,
                  destroyTransaction: null,
                })
              );
            }
            const createTrace = new TraceCreate({
              ...commonTraceFields,
              from: trc.action.from,
              value: trc.action.value,
              gas: trc.action.gas,
              init: trc.action.init,
              gasUsed: trc.result?.gasUsed,
              code: trc.result?.code,
              address: trc.result?.address,
            });
            traceCreates.push(createTrace);
            break;
          case "call":
            const callTrace = new TraceCall({
              ...commonTraceFields,
              from: trc.action.from,
              to: trc.action.to,
              value: trc.action.value,
              gas: trc.action.gas,
              sighash: trc.action.sighash,
              input: trc.action.input,
              gasUsed: trc.result?.gasUsed,
              output: trc.result?.output,
            });
            traceCalls.push(callTrace);
            break;
          case "suicide":
            if (
              trc.transaction?.hash !== undefined &&
              trc.transaction?.status !== 0 &&
              trc.error === null &&
              !traceTree.parentHasError(trc)
            ) {
              destroyedContracts.push(
                new Contract({
                  id: trc.action.address,
                  destroyTransaction: trc.transaction
                    ? new Transaction({ id: trc.transaction.id })
                    : undefined,
                  destroyTimestamp: new Date(block.header.timestamp),
                })
              );
            }
            const suicideTrace = new TraceSuicide({
              ...commonTraceFields,
              address: trc.action.address,
              refundAddress: trc.action.refundAddress,
              balance: trc.action.balance,
            });
            traceSuicides.push(suicideTrace);
            break;
          case "reward":
            const traceReward = new TraceReward({
              ...commonTraceFields,
              author: trc.action.author,
              value: trc.action.value,
              rewardType: trc.action.type,
            });
            traceRewards.push(traceReward);
            break;
        }
      }
    }

    await assignAddressLabels(
      contracts,
      transactions,
      traceCreates,
      traceCalls,
      ctx
    );
    await ctx.store.upsert(transactions);
    await ctx.store.upsert(contracts);
    await ctx.store.upsert(destroyedContracts);
    await ctx.store.upsert(traceCreates);
    await ctx.store.upsert(traceCalls);
    await ctx.store.upsert(traceSuicides);
    await ctx.store.upsert(traceRewards);
  }
);

async function assignAddressLabels(
  newContracts: Contract[],
  transactions: Transaction[],
  traceCreates: TraceCreate[],
  traceCalls: TraceCall[],
  ctx: any
): Promise<void> {
  const allAddresses: Set<string> = new Set();

  transactions.forEach((txn) => {
    if (txn.to) {
      allAddresses.add(txn.to);
    }
  });

  traceCalls.forEach((trace) => {
    allAddresses.add(trace.to);
    allAddresses.add(trace.from);
  });

  traceCreates.forEach((trace) => {
    allAddresses.add(trace.from);
  });

  const contractObjectsInDb: Contract[] = await ctx.store.findBy(Contract, {
    id: In([...allAddresses]),
  });

  const contractIdsFromDb = contractObjectsInDb.map((contract) => contract.id);
  const contractIdsFromNewContracts = newContracts.map(
    (contract) => contract.id
  );
  const combinedContractIds = [
    ...contractIdsFromDb,
    ...contractIdsFromNewContracts,
  ];
  const contractAddressSet: Set<string> = new Set(combinedContractIds);

  transactions.forEach((txn) => {
    if (!txn.to) {
      txn.label = EvmLabel.CONTRACT_DEPLOY;
    } else if (txn.to) {
      txn.label = contractAddressSet.has(txn.to)
        ? EvmLabel.CONTRACT_CALL
        : EvmLabel.NATIVE_TRANSFER;
    }
  });

  traceCalls.forEach((trace) => {
    trace.fromType = contractAddressSet.has(trace.from)
      ? AddressType.CONTRACT
      : AddressType.EOA;
    trace.toType = contractAddressSet.has(trace.to)
      ? AddressType.CONTRACT
      : AddressType.EOA;
  });

  traceCreates.forEach((trace) => {
    trace.fromType = contractAddressSet.has(trace.from)
      ? AddressType.CONTRACT
      : AddressType.EOA;
  });
}
