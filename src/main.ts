import { TypeormDatabase } from "@subsquid/typeorm-store";
import { readFileSync } from "fs";
import { In } from "typeorm";
import {
  Trace,
  Transaction,
  CreateAction,
  CallAction,
  SuicideAction,
  RewardAction,
  CreateResult,
  CallResult,
  Contract,
  TraceType,
  EvmLabel,
  AddressType,
} from "./model";
import {
  convertToTraceType,
  convertToTransactionType,
  calculateFee,
} from "./utils/utils";
import { processor } from "./processor";

const precompiles = JSON.parse(readFileSync("assets/precompiles.json", "utf8"));
let precompilesAdded = false;

processor.run(
  new TypeormDatabase({ stateSchema: "evm_processor" }),
  async (ctx) => {
    const transactions: Transaction[] = [];
    const traces: Trace[] = [];
    const contracts: Contract[] = [];

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
              txn.gasUsed !== undefined
                ? calculateFee(txn.gasPrice, txn.gasUsed)
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
        let action:
          | CreateAction
          | CallAction
          | SuicideAction
          | RewardAction
          | null = null;
        let result: CreateResult | CallResult | null = null;

        switch (trc.type) {
          case "create":
            if (
              trc.result?.address != null &&
              trc.transaction?.hash !== undefined &&
              trc.transaction?.status !== 0 &&
              trc.error === null
            ) {
              contracts.push(
                new Contract({
                  id: trc.result.address,
                  createdBy: trc.action.from,
                  transactionHash: trc.transaction?.hash,
                  createdTimestamp: new Date(block.header.timestamp),
                })
              );
            }
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
                address: trc.result.address || null,
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

    await ctx.store.upsert(contracts);
    await assignAddressLabels(transactions, traces, ctx);
    await ctx.store.upsert(transactions);
    await ctx.store.upsert(traces);
  }
);

async function assignAddressLabels(
  transactions: Transaction[],
  traces: Trace[],
  ctx: any
): Promise<void> {
  const allAddresses: Set<string> = new Set();

  transactions.forEach((txn) => {
    if (txn.to) {
      allAddresses.add(txn.to);
    }
  });

  traces.forEach((trace) => {
    if (trace.type === TraceType.CALL && trace.action instanceof CallAction) {
      allAddresses.add(trace.action.to);
      allAddresses.add(trace.action.from);
    }
  });

  const contractObjectsInDb: Contract[] = await ctx.store.findBy(Contract, {
    id: In([...allAddresses]),
  });

  const contractAddressSet: Set<string> = new Set(
    contractObjectsInDb.map((contract) => contract.id)
  );

  transactions.forEach((txn) => {
    if (!txn.to && txn.deployedAddress) {
      txn.label = EvmLabel.CONTRACT_DEPLOY;
    } else if (txn.to) {
      txn.label = contractAddressSet.has(txn.to)
        ? EvmLabel.CONTRACT_CALL
        : EvmLabel.NATIVE_TRANSFER;
    }
  });

  traces.forEach((trace) => {
    if (trace.type === TraceType.CALL && trace.action instanceof CallAction) {
      trace.action.fromType = contractAddressSet.has(trace.action.from)
        ? AddressType.CONTRACT
        : AddressType.EOA;
      trace.action.toType = contractAddressSet.has(trace.action.to)
        ? AddressType.CONTRACT
        : AddressType.EOA;
    }
  });
}
