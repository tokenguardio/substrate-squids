import {
  SubstrateBatchProcessor,
  SubstrateBlock,
  BatchContext,
  BatchProcessorItem,
  EvmLogEvent,
} from "@subsquid/substrate-processor";
import { getTransactionResult, TransactionResult } from "@subsquid/frontier";
import { TypeormDatabase, Store } from "@subsquid/typeorm-store";
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
  FToken,
  FtTransfer,
  TransferType,
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
import * as erc20 from "./abi/erc20";
import { Contract as Erc20Contract } from "./abi/erc20";
import assert from "assert";
import { addTimeout } from "@subsquid/util-timeout";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

type Item = BatchProcessorItem<typeof processor>;
type Context = BatchContext<Store, Item>;

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive:
      process.env.GATEWAY_URL ?? "https://astar.archive.subsquid.io/graphql",
    chain: process.env.CHAIN_NODE ?? "wss://astar.api.onfinality.io/public-ws",
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
// .addEvmLog("*", {
//   filter: [erc20.events.Transfer.topic],
// })
// .setBlockRange({ from: 3000000, to: 3010000 });

processor.run(new TypeormDatabase(), async (ctx) => {
  const events: EventNorm[] = [];
  const calls: CallNorm[] = [];
  const evmTransactions: EvmTransaction[] = [];

  const substrateTransactions: SubstrateTransaction[] = [];
  const evmContracts: EvmContract[] = [];
  const addressMappings: Map<string, AddressMapping> = new Map();
  const ftTransfers: FtTransfer[] = [];
  const fTokens: FToken[] = [];

  for (const block of ctx.blocks) {
    const ethereumTransactEventsPerBlock: Map<
      string,
      Map<string, any>
    > = new Map();
    for (const item of block.items) {
      const pallet = item.name.split(".")[0];
      if (item.kind === "event") {
        if (eventNormalizationHandlers[pallet]) {
          if (["EVM.Log"].includes(item.event.name)) {
            switch ((item.event.args.log || item.event.args).topics[0]) {
              case erc20.events.Transfer.topic:
                try {
                  const parsedEvent = parseEvmLog(item.event);
                  const {
                    from,
                    to,
                    value: amount,
                  } = erc20.events.Transfer.decode(parsedEvent.args);
                  const ftTransfer = createFtTransfer(
                    block.header,
                    item.event,
                    from,
                    to,
                    amount
                  );
                  ftTransfers.push(ftTransfer);
                } catch (err) {}

                let fToken = await handleFToken(
                  ctx,
                  block.header,
                  item.event.args.address,
                  fTokens
                );
                if (fToken) {
                  fTokens.push(fToken);
                }
                break;
            }
          }
          if (
            item.event.extrinsic?.call.name === "Ethereum.transact" &&
            item.event.extrinsic?.call.success &&
            ["System.ExtrinsicSuccess", "Ethereum.Executed"].includes(
              item.event.name
            )
          ) {
            assignEventToExtrinsic(
              ethereumTransactEventsPerBlock,
              item.event.extrinsic.id,
              item.event
            );
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

  await ctx.store.save(ftTransfers);
  await ctx.store.save(fTokens);

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

function parseEvmLog(event: any): EvmLogEvent {
  assert(event, "Current event is not available");
  const eventDecorated = event;
  if ("log" in eventDecorated.args && !("topics" in eventDecorated.args))
    eventDecorated.args = {
      ...event.args,
      ...event.args.log,
    };
  return eventDecorated;
}

function createFtTransfer(
  block: SubstrateBlock,
  event: any,
  from: any,
  to: any,
  amount: any
): FtTransfer {
  return new FtTransfer({
    id: event.id,
    callId: event.call?.id,
    blockNumber: BigInt(block.height),
    timestamp: new Date(block.timestamp),
    eventIndex: event.indexInBlock,
    txnHash: event.evmTxHash,
    from: from,
    to: to,
    token: event.args.address,
    amount: BigInt(amount.toString()),
    transferType: getTransferType(from, to),
  });
}

async function handleFToken(
  ctx: any,
  block: any,
  tokenAddress: string,
  fTokens: FToken[]
): Promise<FToken | undefined> {
  if (!fTokens.some((token) => token.id === tokenAddress)) {
    let token = await ctx.store.get(FToken, tokenAddress);

    if (!token) {
      const { name, symbol, decimals } = await getTokenDetails(
        tokenAddress,
        "ERC20",
        ctx,
        block
      );

      return new FToken({
        id: tokenAddress,
        name,
        symbol,
        decimals,
      });
    }
  }
}

const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";

function isMint(from: string, to: string): boolean {
  return from === EMPTY_ADDRESS && to !== EMPTY_ADDRESS;
}

function isBurn(from: string, to: string): boolean {
  return to === EMPTY_ADDRESS && from !== EMPTY_ADDRESS;
}

function getTransferType(from: string, to: string): TransferType {
  if (isMint(from, to)) {
    return TransferType.MINT;
  }
  if (isBurn(from, to)) {
    return TransferType.BURN;
  }

  return TransferType.TRANSFER;
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
    value: BigInt(ethereumTransactCallArgs.transaction.value.value),
    transactionHash: transactionResult.transactionHash,
    status: transactionResult.status,
    statusReason: transactionResult.statusReason,
  });
}

function createEvmContract(
  transactionResult: TransactionResult,
  block: any
): EvmContract {
  return new EvmContract({
    id: transactionResult.to,
    creator: transactionResult.from,
    transactionHash: transactionResult.transactionHash,
    createdTimestamp: new Date(block.timestamp),
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
    id: extrinsic.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    name: call.name,
    args: call.args,
    label: label,
    fee: extrinsic.fee,
    tip: extrinsic.tip,
    from: from,
    to: to,
    success: call.success,
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
      evmContract = createEvmContract(normalizedEthereumExecutedEvent, block);
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

export type TokenDetails = {
  name: string | null;
  symbol: string | null;
  decimals: number | null;
};

function clearNullBytes(rawStr: string): string {
  /**
   * We need replace null byte in string value to prevent error:
   * "QueryFailedError: invalid byte sequence for encoding \"UTF8\": 0x00\n    at PostgresQueryRunner.query ..."
   */
  return rawStr ? rawStr.replace(/\0/g, "") : rawStr;
}

function getDecoratedCallResult(rawValue: string | null): string | null {
  const decoratedValue: string | null = rawValue;

  if (!rawValue || typeof rawValue !== "string") return null;

  const regex = new RegExp(/^\d{10}\.[\d|\w]{4}$/);

  /**
   * This test is required for contract call results
   * like this - "0006648936.1ec7" which must be saved as null
   */
  if (regex.test(rawValue)) return null;

  return decoratedValue ? clearNullBytes(decoratedValue) : decoratedValue;
}

export async function getTokenDetails(
  contractAddress: string,
  contractStandard: string,
  ctx: Context,
  block: any
): Promise<TokenDetails> {
  const contractCallTimeout = 5000;
  let contractInst = null;
  switch (contractStandard) {
    case "ERC20":
      contractInst = getContractErc20(ctx, contractAddress, block);
      break;
  }

  if (!contractInst) throw new Error("contractInst is null");

  let name: string | null = null;
  let symbol: string | null = null;
  let decimals: number | null = null;

  try {
    name =
      "name" in contractInst
        ? await addTimeout(contractInst.name(), contractCallTimeout)
        : null;
  } catch (e) {
    console.log(e);
  }
  try {
    symbol =
      "symbol" in contractInst
        ? await addTimeout(contractInst.symbol(), contractCallTimeout)
        : null;
  } catch (e) {
    console.log(e);
  }
  try {
    decimals =
      "decimals" in contractInst
        ? await addTimeout(contractInst.decimals(), contractCallTimeout)
        : null;
  } catch (e) {
    console.log(e);
  }
  return {
    symbol: getDecoratedCallResult(symbol),
    name: getDecoratedCallResult(name),
    decimals,
  };
}

function getContractErc20(
  ctx: any,
  contractAddress: any,
  block: any
): Erc20Contract {
  return new Erc20Contract(
    { _chain: ctx._chain, block: { height: block.height } },
    contractAddress
  );
}
