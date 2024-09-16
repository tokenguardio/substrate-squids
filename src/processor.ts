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
  balances as balancesEvent,
  lbp as lbpEvent,
  otc as otcEvent,
  omnipool as omnipoolEvent,
  referrals as referralsEvent,
  stableswap as stableswapEvent,
  staking as stakingEvent,
  xTokens as xTokensEvent,
  xyk as xykEvent,
} from "./types/events";
import {
  balances as balancesCall,
  lbp as lbpCall,
  otc as otcCall,
  omnipool as omnipoolCall,
  referrals as referralsCall,
  stableswap as stableswapCall,
  staking as stakingCall,
  xTokens as xTokensCall,
  xyk as xykCall,
} from "./types/calls";
import {
  getEnvBoolean,
  getEnvNumber,
  extractNamesFromObjects,
} from "./utils/misc";

const eventNames = extractNamesFromObjects([
  balancesEvent,
  lbpEvent,
  otcEvent,
  omnipoolEvent,
  referralsEvent,
  stableswapEvent,
  stakingEvent,
  xTokensEvent,
  xykEvent,
]);

const callNames = extractNamesFromObjects([
  balancesCall,
  lbpCall,
  otcCall,
  omnipoolCall,
  referralsCall,
  stableswapCall,
  stakingCall,
  xTokensCall,
  xykCall,
]);

export const processor = new SubstrateBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/hydradx")
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    capacity: getEnvNumber(process.env.RPC_CAPACITY),
    maxBatchCallSize: getEnvNumber(process.env.RPC_MAX_BATCH_CALL_SIZE),
    rateLimit: getEnvNumber(process.env.RPC_RATE_LIMIT),
  })
  .setRpcDataIngestionSettings({
    disabled: getEnvBoolean(process.env.RPC_INGESTION_DISABLED, true),
  })
  .addEvent({ name: eventNames, extrinsic: true, call: true })
  .addCall({ name: callNames, extrinsic: true })
  .setFields({
    block: {
      timestamp: true,
    },
    extrinsic: {
      hash: true,
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
  });

export type Fields = SubstrateBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Event = _Event<Fields>;
export type Call = _Call<Fields>;
export type Extrinsic = _Extrinsic<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
