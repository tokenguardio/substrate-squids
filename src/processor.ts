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

export const processor = new SubstrateBatchProcessor()
  .setGateway(
    lookupArchive("aleph-zero", {
      release: "ArrowSquid",
      type: "Substrate",
    })
  )
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    rateLimit: 10,
  })
  .setRpcDataIngestionSettings({ disabled: true })
  .addEvent({ name: eventNames, extrinsic: true })
  // Ask for all calls to identify parent call name in substrate transaction
  .addCall({ extrinsic: true })
  .setFields({
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
    from: process.env.BLOCK_RANGE_FROM
      ? Number(process.env.BLOCK_RANGE_FROM)
      : 1,
    to: process.env.BLOCK_RANGE_TO
      ? Number(process.env.BLOCK_RANGE_TO)
      : undefined,
  })
  .setTypesBundle(process.env.TYPES_BUNDLE_FILE ?? "typesBundle.json");

export type Fields = SubstrateBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Event = _Event<Fields>;
export type Call = _Call<Fields>;
export type Extrinsic = _Extrinsic<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
