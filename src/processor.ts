import { readFileSync } from "fs";
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

const dapps: string[] = JSON.parse(readFileSync("assets/dapps.json", "utf8"));
const dappsLower = dapps.map((address) => address.toLowerCase());

export const processor = new EvmBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/arbitrum-one ")
  .setRpcEndpoint(process.env.RPC_ETH_HTTP)
  .setRpcDataIngestionSettings({ disabled: true })
  .setBlockRange({
    from: process.env.BLOCK_RANGE_FROM
      ? Number(process.env.BLOCK_RANGE_FROM)
      : 0,
    to: process.env.BLOCK_RANGE_TO
      ? Number(process.env.BLOCK_RANGE_TO)
      : undefined,
  })
  .setFinalityConfirmation(75)
  // .addTransaction({ traces: true })
  .addLog({
    topic0: [erc20Abi.events.Transfer.topic],
  })
  .addTrace({
    callFrom: dappsLower,
    type: ["call"],
    transaction: true,
    subtraces: false,
  })
  .addTrace({
    callTo: dappsLower,
    type: ["call"],
    transaction: true,
    subtraces: false,
  })
  .addTrace({
    // createFrom: dappsLower,
    type: ["create"],
    transaction: true,
    subtraces: false,
  })
  .addTrace({
    type: ["suicide", "reward"],
    transaction: true,
    subtraces: false,
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
      error: true,
      subtraces: true,
      // 'create' type related fields
      createFrom: true,
      createValue: true,
      createGas: true,
      createResultGasUsed: true,
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
