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
import { nominationPools as nominationPoolsCalls } from "./types/calls";
import {
  balances,
  nominationPools as nominationPoolsEvents,
  staking,
  system,
} from "./types/events";
import { extractNamesFromObjects } from "./utils/misc";

const callNames = extractNamesFromObjects([nominationPoolsCalls]);
const eventNames = extractNamesFromObjects([
  balances,
  nominationPoolsEvents,
  staking,
  system,
]);

export const processor = new SubstrateBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/polkadot")
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    rateLimit: 10,
  })
  .setRpcDataIngestionSettings({ disabled: true })
  .addEvent({ name: eventNames, extrinsic: true })
  .addCall({ name: callNames })
  .setFields({
    block: {
      timestamp: true,
    },
    extrinsic: {
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
