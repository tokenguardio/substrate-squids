import { Store } from "@subsquid/typeorm-store";
import { In } from "typeorm";
import {
  Contract,
  Transaction,
  TraceCreate,
  TraceCall,
  EvmLabel,
  AddressType,
} from "../model";
import { ProcessorContext } from "../processor";

export async function assignAddressLabels(
  newContracts: Contract[],
  transactions: Transaction[],
  traceCreates: TraceCreate[],
  traceCalls: TraceCall[],
  ctx: ProcessorContext<Store>
): Promise<void> {
  const allAddresses = await collectAllAddresses(
    transactions,
    traceCreates,
    traceCalls
  );
  const existingContractAddresses = await fetchContractsFromDb(
    ctx,
    allAddresses
  );

  // Combine new and existing contracts for a complete set of contract addresses
  const newContractAddresses = new Set(
    newContracts.map((contract) => contract.id)
  );
  const contractAddressSet = new Set([
    ...existingContractAddresses,
    ...newContractAddresses,
  ]);

  // Assign labels to transactions and types to traces
  labelTransactions(transactions, contractAddressSet);
  assignTraceTypes(traceCreates, traceCalls, contractAddressSet);
}

// Functions for specific tasks within address labeling
function collectAllAddresses(
  transactions: Transaction[],
  traceCreates: TraceCreate[],
  traceCalls: TraceCall[]
): Set<string> {
  const allAddresses = new Set<string>();

  transactions.forEach((txn) => txn.to && allAddresses.add(txn.to));
  traceCalls.forEach((trace) => {
    allAddresses.add(trace.to);
    allAddresses.add(trace.from);
  });
  traceCreates.forEach((trace) => allAddresses.add(trace.from));

  return allAddresses;
}

async function fetchContractsFromDb(
  ctx: ProcessorContext<Store>,
  addresses: Set<string>
): Promise<Set<string>> {
  const contracts = await ctx.store.findBy(Contract, {
    id: In([...addresses]),
  });
  return new Set(contracts.map((contract) => contract.id));
}

function labelTransactions(
  transactions: Transaction[],
  contractAddressSet: Set<string>
): void {
  transactions.forEach((txn) => {
    if (!txn.to) {
      txn.label = EvmLabel.CONTRACT_DEPLOY;
    } else {
      txn.label = contractAddressSet.has(txn.to)
        ? EvmLabel.CONTRACT_CALL
        : EvmLabel.NATIVE_TRANSFER;
    }
  });
}

function assignTraceTypes(
  traceCreates: TraceCreate[],
  traceCalls: TraceCall[],
  contractAddressSet: Set<string>
): void {
  const assignType = (address: string) =>
    contractAddressSet.has(address) ? AddressType.CONTRACT : AddressType.EOA;

  traceCalls.forEach((trace) => {
    trace.fromType = assignType(trace.from);
    trace.toType = assignType(trace.to);
  });

  traceCreates.forEach((trace) => {
    trace.fromType = assignType(trace.from);
  });
}
