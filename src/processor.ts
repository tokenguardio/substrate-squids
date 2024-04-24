import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
  Trace as _Trace,
} from "@subsquid/evm-processor";
import { assertNotNull } from "@subsquid/util-internal";
import * as erc20Abi from "./abi/erc20";

export const processor = new EvmBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/arbitrum-one")
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ETH_HTTP),
    rateLimit: 10,
  })
  .setRpcDataIngestionSettings({ disabled: true })
  .setBlockRange({
    from: process.env.BLOCK_RANGE_FROM
      ? Number(process.env.BLOCK_RANGE_FROM)
      : 0,
    to: process.env.BLOCK_RANGE_TO
      ? Number(process.env.BLOCK_RANGE_TO)
      : undefined,
  })
  .addTransaction({})
  .addTrace({ type: ["create", "suicide"] })
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
      createResultAddress: true,
      // 'suicide' type related fields
      suicideAddress: true,
    },
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type Trace = _Trace<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
