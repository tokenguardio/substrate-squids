import { assertNotNull } from "@subsquid/util-internal";
import { lookupArchive } from "@subsquid/archive-registry";
import {
  BlockHeader,
  DataHandlerContext,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
  Event as _Event,
  Call as _Call,
  Extrinsic as _Extrinsic,
} from "@subsquid/substrate-processor";
import { getEnvBoolean } from "./utils/misc";

export const processor = new SubstrateBatchProcessor()
  .setGateway(assertNotNull(process.env.GATEWAY_URL))
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    rateLimit: 10,
  })
  .setRpcDataIngestionSettings({
    disabled: getEnvBoolean(process.env.RPC_INGESTION_DISABLED, true),
  })
  .addEvent({
    name: ["Contracts.ContractEmitted"],
    extrinsic: true,
  })
  .addCall({
    name: ["Contracts.call"],
    extrinsic: true,
  })
  .setFields({
    block: {
      timestamp: true,
    },
    extrinsic: {
      hash: true,
      fee: true,
      tip: true,
      success: true,
    },
    call: {
      origin: true,
      success: true,
      name: true,
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

export type Fields = SubstrateBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Event = _Event<Fields>;
export type Call = _Call<Fields>;
export type Extrinsic = _Extrinsic<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
