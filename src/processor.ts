import { assertNotNull } from "@subsquid/util-internal";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
  Trace as _Trace,
} from "@subsquid/evm-processor";
import { getEnvBoolean } from "./utils/misc";

const dappAddressesEnv = assertNotNull(process.env.DAPP_ADDRESSES);
const dappAddresses = dappAddressesEnv.split(",");

export const processor = new EvmBatchProcessor()
  .setGateway(assertNotNull(process.env.GATEWAY_URL))
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    rateLimit: 10,
  })
  .setRpcDataIngestionSettings({
    disabled: getEnvBoolean(process.env.RPC_INGESTION_DISABLED, true),
  })
  .addLog({ address: dappAddresses, transaction: true })
  .setFields({
    block: {
      timestamp: true,
    },
    transaction: {
      input: true,
      value: true,
      status: true,
    },
    log: {
      transactionHash: true,
    },
    trace: {
      callFrom: true,
      callTo: true,
      callValue: true,
      callInput: true,
    },
  })
  .setBlockRange({
    from: process.env.BLOCK_RANGE_FROM
      ? Number(process.env.BLOCK_RANGE_FROM)
      : 1,
    to: process.env.BLOCK_RANGE_TO
      ? Number(process.env.BLOCK_RANGE_TO)
      : undefined,
  });

if (getEnvBoolean(process.env.TRACES, false)) {
  processor.addTrace({
    callTo: dappAddresses,
    type: ["call"],
    transaction: true,
    parents: true,
  });
} else {
  processor.addTransaction({ to: dappAddresses });
}

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type Trace = _Trace<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
