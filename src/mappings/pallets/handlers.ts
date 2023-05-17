import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeSystemEventsArgs } from "./events/system";
import { normalizeEVMEventsArgs } from "./events/evm";
import { normalizeStakingEventsArgs } from "./events/staking";

import { normalizeEVMCallsArgs } from "./calls/evm";

export const eventNormalizationHandlers: { [key: string]: any } = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
  EVM: normalizeEVMEventsArgs,
  Staking: normalizeStakingEventsArgs,
};

export const callNormalizationHandlers: { [key: string]: any } = {
  EVM: normalizeEVMCallsArgs,
};
