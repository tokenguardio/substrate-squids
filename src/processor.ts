import { lookupArchive } from "@subsquid/archive-registry";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";

export const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive("eth-mainnet"),
    chain: "https://eth.api.onfinality.io/public",
  })
  .setBlockRange({ from: 16962349, to: 16962349 })
  .setFinalityConfirmation(75)
  .addTransaction({
    traces: true,
  })
  .setFields({
    transaction: {
      gas: true,
      gasPrice: true,
      maxFeePerGas: true,
      maxPriorityFeePerGas: true,
      input: true,
      nonce: true,
      value: true,
      chainId: true,
      gasUsed: true,
      cumulativeGasUsed: true,
      effectiveGasPrice: true,
      contractAddress: true,
      type: true,
      status: true,
      sighash: true,
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
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
