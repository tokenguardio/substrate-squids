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
    archive: lookupArchive("arbitrum"),
    chain: "https://rpc.ankr.com/arbitrum",
  })
  .setFinalityConfirmation(50)
  .addTransaction({})
  .setFields({
    transaction: {
      gas: true,
      gasPrice: true,
      maxFeePerGas: true,
      maxPriorityFeePerGas: true,
      input: true,
      nonce: true,
      value: true,
      v: true,
      r: true,
      s: true,
      yParity: true,
      chainId: true,
      gasUsed: true,
      cumulativeGasUsed: true,
      effectiveGasPrice: true,
      contractAddress: true,
      type: true,
      status: true,
      sighash: true,
    },
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
