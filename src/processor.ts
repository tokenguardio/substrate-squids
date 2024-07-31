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
import { getEnvBoolean, getEnvNumber } from "./utils/misc";

export const processor = new EvmBatchProcessor()
  .setGateway(assertNotNull(process.env.GATEWAY_URL))
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    capacity: getEnvNumber(process.env.RPC_CAPACITY),
    maxBatchCallSize: getEnvNumber(process.env.RPC_MAX_BATCH_CALL_SIZE),
    rateLimit: getEnvNumber(process.env.RPC_RATE_LIMIT),
  })
  .setRpcDataIngestionSettings({
    disabled: getEnvBoolean(process.env.RPC_INGESTION_DISABLED, true),
  })
  .setFinalityConfirmation(
    process.env.FINALITY_CONFIRMATION
      ? Number(process.env.FINALITY_CONFIRMATION)
      : 75
  )
  .includeAllBlocks()
  .setBlockRange({
    from: getEnvNumber(process.env.BLOCK_RANGE_FROM, 1) as number,
    to: getEnvNumber(process.env.BLOCK_RANGE_TO),
  })
  .addTrace({
    type: ["create", "call", "reward", "suicide"],
    // need transaction id for traces id and traceTree
    transaction: true,
  })
  .setFields({
    transaction: {
      status: true,
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
