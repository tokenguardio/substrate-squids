import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeContractsEventsArgs } from "./events/contracts";
import { normalizeSystemEventsArgs } from "./events/system";
import { normalizeStakingEventsArgs } from "./events/staking";

import { normalizeContractsCallsArgs } from "./calls/contracts";

export const eventNormalizationHandlers: { [key: string]: any } = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
  Contracts: normalizeContractsEventsArgs,
  Staking: normalizeStakingEventsArgs,
};

export const callNormalizationHandlers: { [key: string]: any } = {
  Contracts: normalizeContractsCallsArgs,
};
