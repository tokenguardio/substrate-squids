import {
  SubstrateBatchProcessor,
  SubstrateBlock,
} from "@subsquid/substrate-processor";
import { getTransactionResult, TransactionResult } from "@subsquid/frontier";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { In } from "typeorm";
import {
  EventNorm,
  CallNorm,
  AddressMapping,
  EvmTransaction,
  EvmLabel,
  EvmTransactionType,
  SubstrateTransaction,
  SubstrateLabel,
  EvmContract,
} from "./model";
import {
  eventNormalizationHandlers,
  callNormalizationHandlers,
  eventsAddressArgs,
  callsAddressArgs,
  mapAddresses,
} from "./mappings";
import { MappedAddress, AddressArgs } from "./interfaces/mappings/specific";
import * as ss58 from "@subsquid/ss58";
import { decodeHex } from "@subsquid/util-internal-hex";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive:
      process.env.GATEWAY_URL ?? "https://astar.archive.subsquid.io/graphql",
  })
  .addEvent("*", {
    data: {
      event: true,
    },
  })
  .addCall("*", {
    data: {
      call: true,
      extrinsic: true,
    },
  });

processor.run(new TypeormDatabase(), async (ctx) => {
  const events: EventNorm[] = [];
  const calls: CallNorm[] = [];
  const evmTransactions: EvmTransaction[] = [];
  const substrateTransactions: SubstrateTransaction[] = [];
  const evmContracts: EvmContract[] = [];
  const addressMappings: Map<string, AddressMapping> = new Map();

  for (const block of ctx.blocks) {
    const ethereumTransactEventsPerBlock: Map<
      string,
      Map<string, any>
    > = new Map();
    for (const item of block.items) {
      const pallet = item.name.split(".")[0];
      if (item.kind === "event") {
        if (eventNormalizationHandlers[pallet]) {
          if (
            ["System.ExtrinsicSuccess", "Ethereum.Executed"].includes(
              item.event.name
            )
          ) {
            if (item.event.extrinsic?.call.name === "Ethereum.transact") {
              assignEventToExtrinsic(
                ethereumTransactEventsPerBlock,
                item.event.extrinsic.id,
                item.event
              );
            }
          }

          if (
            !["System.ExtrinsicFailed", "System.ExtrinsicSuccess"].includes(
              item.event.name
            )
          ) {
            const args = eventNormalizationHandlers[pallet](ctx, item.event);
            const event = createEventNorm(block.header, item.event, args);
            events.push(event);
            addAddressesToMap(
              item.event.name,
              args,
              eventsAddressArgs,
              addressMappings
            );
          }
        }
      } else if (item.kind === "call") {
        if (item.extrinsic.fee && !item.call.parent) {
          handleSubstrateTransaction(
            item.extrinsic,
            substrateTransactions,
            ctx,
            block.header,
            addressMappings
          );
        }
        if (callNormalizationHandlers[pallet]) {
          const args = callNormalizationHandlers[pallet](ctx, item.call);
          const call = createCallNorm(block.header, item.call, args);
          calls.push(call);
          addAddressesToMap(
            item.call.name,
            args,
            callsAddressArgs,
            addressMappings
          );
        }
      }
    }
    handleEvmTransactions(
      ethereumTransactEventsPerBlock,
      evmTransactions,
      evmContracts,
      ctx,
      block.header
    );
  }

  await assignLabelsToEvmTransactions(evmContracts, evmTransactions, ctx);

  await ctx.store.save(evmContracts);
  await ctx.store.save(evmTransactions);
  await ctx.store.save(substrateTransactions);

  nullifyNonexistentCalls(events, calls);

  await ctx.store.save(calls);
  await ctx.store.save(events);
  await ctx.store.save(Array.from(addressMappings.values()));
});

function createEventNorm(
  block: SubstrateBlock,
  event: any,
  args: any
): EventNorm {
  return new EventNorm({
    id: event.id,
    call: event.call?.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    name: event.name,
    args,
    extrinsicSuccess: event.extrinsic?.success,
  });
}

function createCallNorm(block: SubstrateBlock, call: any, args: any): CallNorm {
  return new CallNorm({
    id: call.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    name: call.name,
    args,
    success: call.success,
    origin: call.origin,
  });
}

function createAddressMapping(mappedAddress: MappedAddress): AddressMapping {
  return new AddressMapping({
    id: mappedAddress.hex,
    ss58: mappedAddress.ss58,
  });
}

function addAddressesToMap(
  itemName: string,
  args: any,
  addressArgs: AddressArgs,
  addressMappings: Map<string, AddressMapping>
): void {
  const mappedAddresses = mapAddresses(itemName, args, addressArgs);
  mappedAddresses.forEach((mappedAddress) => {
    const addressMapping = createAddressMapping(mappedAddress);
    addressMappings.set(mappedAddress.hex, addressMapping);
  });
}

function createEvmTransaction(
  block: SubstrateBlock,
  ethereumTransactCall: any,
  transactionResult: TransactionResult,
  ethereumTransactCallArgs: any,
  label: EvmLabel | undefined,
  fee: bigint
): EvmTransaction {
  return new EvmTransaction({
    id: ethereumTransactCall.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    args: ethereumTransactCallArgs,
    transactionType: ethereumTransactCallArgs.transaction.__kind.toLowerCase(),
    label: label,
    fee,
    from: transactionResult.from,
    to: transactionResult.to,
    transactionHash: transactionResult.transactionHash,
    status: transactionResult.status,
    statusReason: transactionResult.statusReason,
  });
}

function createEvmContract(transactionResult: TransactionResult): EvmContract {
  return new EvmContract({
    id: transactionResult.to,
    creator: transactionResult.from,
    transactionHash: transactionResult.transactionHash,
  });
}

function createSubstrateTransaction(
  call: any,
  extrinsic: any,
  block: SubstrateBlock,
  label: SubstrateLabel | undefined,
  from: string | null,
  to: string | null
): SubstrateTransaction {
  return new SubstrateTransaction({
    id: call.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    name: call.name,
    args: call.args,
    label: label,
    fee: extrinsic.fee,
    tip: extrinsic.tip,
    from: from,
    to: to,
  });
}

function nullifyNonexistentCalls(events: EventNorm[], calls: CallNorm[]): void {
  let callIds = new Set(calls.map((call) => call.id));

  events.forEach((event) => {
    let callId = event.call instanceof CallNorm ? event.call.id : event.call;
    if (callId && !callIds.has(callId)) {
      event.call = null;
    }
  });
}

function assignEventToExtrinsic(
  ethereumTransactEventsPerBlock: Map<string, Map<string, any>>,
  extrinsicId: string,
  event: any
) {
  if (ethereumTransactEventsPerBlock.has(extrinsicId)) {
    // If the callId exists, add the event to the existing inner map
    let innerMap = ethereumTransactEventsPerBlock.get(extrinsicId);
    innerMap?.set(event.name, event);
  } else {
    // If the callId does not exist, create a new inner map and add the event to it
    let innerMap = new Map<string, any>();
    innerMap.set(event.name, event);
    ethereumTransactEventsPerBlock.set(extrinsicId, innerMap);
  }
}

async function assignLabelsToEvmTransactions(
  evmContracts: EvmContract[],
  evmTransactions: EvmTransaction[],
  ctx: any
): Promise<void> {
  if (evmTransactions.length === 0) {
    return;
  }

  const contractIds = new Set(evmContracts.map((contract) => contract.id));
  let remainingTransactions: EvmTransaction[] = [];

  for (const transaction of evmTransactions) {
    if (transaction.label !== undefined) {
      continue;
    }
    if (contractIds.has(transaction.to)) {
      transaction.label = EvmLabel.contract_call;
    } else {
      remainingTransactions.push(transaction);
    }
  }

  const tos = Array.from(
    new Set(remainingTransactions.map((transaction) => transaction.to))
  );

  const contractObjectsInDb: EvmContract[] = await ctx.store.findBy(
    EvmContract,
    {
      id: In([...tos]),
    }
  );

  const contractIdsInDb = new Set(
    contractObjectsInDb.map((contract) => contract.id)
  );

  for (const transaction of remainingTransactions) {
    if (contractIdsInDb.has(transaction.to)) {
      transaction.label = EvmLabel.contract_call;
    } else {
      transaction.label = EvmLabel.native_transfer;
    }
  }
}

function handleEvmTransactions(
  ethereumTransactEventsPerBlock: Map<string, Map<string, any>>,
  evmTransactions: EvmTransaction[],
  evmContracts: EvmContract[],
  ctx: any,
  block: SubstrateBlock
) {
  ethereumTransactEventsPerBlock.forEach((events, extrinsicId) => {
    if (events.size > 2) {
      throw new Error(
        `Extrinsic with id ${extrinsicId} has more than two events`
      );
    }

    const extSuccessEvent = events.get("System.ExtrinsicSuccess");
    const ethereumExecutedEvent = events.get("Ethereum.Executed");
    const ethereumTransactCall = ethereumExecutedEvent.extrinsic?.call;
    const extrinsic = ethereumExecutedEvent.extrinsic;

    if (!extSuccessEvent || !ethereumExecutedEvent) {
      throw new Error(
        `Extrinsic with id ${extrinsicId} is missing one or both required events`
      );
    }

    const normalizedEthereumExecutedEvent = getTransactionResult(
      ctx,
      ethereumExecutedEvent
    );
    const normalizedEthereumTransactionCallArgs = callNormalizationHandlers[
      "Ethereum"
    ](ctx, ethereumTransactCall);
    const normalizedExtrinsicSuccessEventArgs = eventNormalizationHandlers[
      "System"
    ](ctx, extSuccessEvent);

    const extrinsicWeight =
      normalizedExtrinsicSuccessEventArgs.dispatchInfo.weight.refTime;
    const tx_type = normalizedEthereumTransactionCallArgs.transaction.__kind;

    let tx_fee: bigint;
    let gasPrice: bigint;
    let transactionWeight: bigint;
    let maxPriorityFeePerGas: bigint;
    let maxFeePerGas: bigint;
    let baseFee: bigint = 1000000000n;
    switch (tx_type) {
      case "Legacy":
        gasPrice = BigInt(
          normalizedEthereumTransactionCallArgs.transaction.value.gasPrice
        );
        transactionWeight = BigInt(extrinsicWeight);
        tx_fee = calculateLegacyTransactionFee(gasPrice, transactionWeight);
        break;
      case "EIP1559":
        maxPriorityFeePerGas = BigInt(
          normalizedEthereumTransactionCallArgs.transaction.value
            .maxPriorityFeePerGas
        );
        maxFeePerGas = BigInt(
          normalizedEthereumTransactionCallArgs.transaction.value.maxFeePerGas
        );
        transactionWeight = BigInt(extrinsicWeight);
        tx_fee = calculateEIP1559TransactionFee(
          baseFee,
          maxPriorityFeePerGas,
          maxFeePerGas,
          transactionWeight
        );
        break;
      case "EIP2930":
        gasPrice = BigInt(
          normalizedEthereumTransactionCallArgs.transaction.value.gasPrice
        );
        transactionWeight = BigInt(extrinsicWeight);
        tx_fee = calculateEIP2390TransactionFee(gasPrice, transactionWeight);
        break;
      default:
        throw new Error(`Unrecognized transaction type: ${tx_type}`);
    }

    let evmTransaction: EvmTransaction;
    let evmContract: EvmContract;
    const action =
      normalizedEthereumTransactionCallArgs.transaction.value.action.__kind;

    if (!["Create", "Call"].includes(action)) {
      throw new Error(`Unrecognized action type: ${action}`);
    }

    evmTransaction = createEvmTransaction(
      block,
      ethereumTransactCall,
      normalizedEthereumExecutedEvent,
      normalizedEthereumTransactionCallArgs,
      action === "Create" ? EvmLabel.contract_deploy : undefined,
      tx_fee
    );

    evmTransactions.push(evmTransaction);

    if (
      action === "Create" &&
      normalizedEthereumExecutedEvent.status === "Succeed"
    ) {
      evmContract = createEvmContract(normalizedEthereumExecutedEvent);
      evmContracts.push(evmContract);
    }
  });
}

function calculateLegacyTransactionFee(
  gasPrice: bigint,
  transactionWeight: bigint
): bigint {
  const fee = (gasPrice * transactionWeight) / BigInt(25000);
  return fee;
}

function calculateEIP1559TransactionFee(
  baseFee: bigint,
  maxPriorityFeePerGas: bigint,
  maxFeePerGas: bigint,
  transactionWeight: bigint
): bigint {
  let gasPrice = baseFee + maxPriorityFeePerGas;
  gasPrice = gasPrice < maxFeePerGas ? gasPrice : maxFeePerGas;
  const fee = (gasPrice * transactionWeight) / BigInt(25000);
  return fee;
}

function calculateEIP2390TransactionFee(
  gasPrice: bigint,
  transactionWeight: bigint
): bigint {
  const fee = (gasPrice * transactionWeight) / BigInt(25000);
  return fee;
}

function handleSubstrateTransaction(
  extrinsic: any,
  substrateTransactions: SubstrateTransaction[],
  ctx: any,
  block: SubstrateBlock,
  addressMappings: Map<string, AddressMapping>
) {
  const call = extrinsic.call;
  let label;
  let to;
  let normalizedCallArgs;
  switch (call.name) {
    case "Contracts.call":
    case "Contracts.call_old_weight":
      normalizedCallArgs = callNormalizationHandlers["Contracts"](ctx, call);
      if (normalizedCallArgs.dest?.__kind === "Id") {
        to = normalizedCallArgs.dest.value;
        addSingleToAddressMapping(to, addressMappings);
      }
      label = SubstrateLabel.contract_call;
      break;
    case "Contracts.instantiate":
    case "Contracts.instantiate_old_weight":
    case "Contracts.instantiate_with_code":
    case "Contracts.instantiate_with_code_old_weight":
      to = null;
      label = SubstrateLabel.contract_deploy;
      break;
    case "Balances.transfer":
    case "Balances.transfer_all":
    case "Balances.transfer_keep_alive":
      normalizedCallArgs = callNormalizationHandlers["Balances"](ctx, call);
      if (normalizedCallArgs.dest?.__kind === "Id") {
        to = normalizedCallArgs.dest.value;
        addSingleToAddressMapping(to, addressMappings);
      }
      label = SubstrateLabel.other;
      break;
    default:
      to = null;
      label = SubstrateLabel.other;
      break;
  }

  let from = null;
  if (extrinsic.signature?.address?.__kind === "Id") {
    from = extrinsic.signature?.address?.value;
  }
  addSingleToAddressMapping(from, addressMappings);

  const substrateTransaction = createSubstrateTransaction(
    call,
    extrinsic,
    block,
    label,
    from,
    to
  );
  substrateTransactions.push(substrateTransaction);
}

function addSingleToAddressMapping(
  address: string,
  addressMappings: Map<string, AddressMapping>
) {
  const mappedAddress = {
    hex: address,
    ss58: ss58.codec("astar").encode(decodeHex(address)),
  };
  const addressMapping = createAddressMapping(mappedAddress);
  addressMappings.set(mappedAddress.hex, addressMapping);
}
