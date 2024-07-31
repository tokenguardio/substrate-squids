import { assertNotNull } from "@subsquid/util-internal";
import {
  BlockHeader,
  DataHandlerContext,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
  Event as _Event,
  Call as _Call,
  Extrinsic as _Extrinsic,
} from "@subsquid/substrate-processor";
import {
  balances as balancesEvents,
  nominationPools as nominationPoolsEvents,
  contracts as contractsEvents,
  staking,
  system,
  treasury,
} from "./types/events";
import { extractNamesFromObjects } from "./utils/misc";

const eventNames = extractNamesFromObjects([
  balancesEvents,
  nominationPoolsEvents,
  contractsEvents,
  staking,
  system,
  treasury,
]);
import { getEnvBoolean, getEnvNumber } from "./utils/misc";

export const processor = new SubstrateBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/aleph-zero")
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    capacity: getEnvNumber(process.env.RPC_CAPACITY),
    maxBatchCallSize: getEnvNumber(process.env.RPC_MAX_BATCH_CALL_SIZE),
    rateLimit: getEnvNumber(process.env.RPC_RATE_LIMIT),
  })
  .setRpcDataIngestionSettings({
    disabled: getEnvBoolean(process.env.RPC_INGESTION_DISABLED, true),
  })
  .includeAllBlocks()
  .addEvent({ name: eventNames, extrinsic: true })
  // Ask for all calls to identify parent call name in substrate transaction
  .addCall({ extrinsic: true })
  .setFields({
    event: { topics: true },
    block: {
      timestamp: true,
    },
    extrinsic: {
      success: true,
      signature: true,
      hash: true,
      fee: true,
      tip: true,
    },
    call: {
      origin: true,
      success: true,
      name: true,
    },
  })
  .setBlockRange({
    from: getEnvNumber(process.env.BLOCK_RANGE_FROM, 1) as number,
    to: getEnvNumber(process.env.BLOCK_RANGE_TO),
  })
  .setTypesBundle(process.env.TYPES_BUNDLE_FILE ?? "assets/typesBundle.json");

export type Fields = SubstrateBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Event = _Event<Fields>;
export type Call = _Call<Fields>;
export type Extrinsic = _Extrinsic<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
