import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
  Trace as _Trace,
} from "@subsquid/evm-processor";
import * as erc20Abi from "./abi/erc20";

export const processor = new EvmBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/avalanche-mainnet")
  .setRpcEndpoint({
    url: process.env.RPC_ETH_HTTP ?? "https://api.avax.network/ext/bc/C/rpc",
    rateLimit: 10,
  })
  .setRpcDataIngestionSettings({ disabled: true })
  .setFinalityConfirmation(75)
  .setBlockRange({
    from: process.env.BLOCK_RANGE_FROM
      ? Number(process.env.BLOCK_RANGE_FROM)
      : 0,
    to: process.env.BLOCK_RANGE_TO
      ? Number(process.env.BLOCK_RANGE_TO)
      : undefined,
  })
  .addTransaction({ traces: true })
  .addLog({
    topic0: [erc20Abi.events.Transfer.topic],
  })
  .setFields({
    transaction: {
      input: true,
      value: true,
      gasUsed: true,
      contractAddress: true,
      type: true,
      status: true,
      sighash: true,
      effectiveGasPrice: true,
    },
    trace: {
      subtraces: true,
      // 'create' type related fields
      createFrom: true,
      createValue: true,
      createGas: true,
      createInit: true,
      createResultGasUsed: true,
      createResultCode: true,
      createResultAddress: true,
      // 'call' type related fields
      callFrom: true,
      callTo: true,
      callValue: true,
      callGas: true,
      callSighash: true,
      callInput: true,
      callResultGasUsed: true,
      callResultOutput: true,
      // 'suicide' type related fields
      suicideAddress: true,
      suicideRefundAddress: true,
      suicideBalance: true,
      // 'reward' type related fields
      rewardAuthor: true,
      rewardValue: true,
      rewardType: true,
    },
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type Trace = _Trace<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
