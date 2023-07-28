import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeContractsEventsArgs } from "./events/contracts";
import { normalizeSystemEventsArgs } from "./events/system";
import { normalizeNominationPoolsEventsArgs } from "./events/nomination-pools";
import { normalizeStakingEventsArgs } from "./events/staking";

import { normalizeContractsCallsArgs } from "./calls/contracts";
import { normalizeNominationPoolsCallsArgs } from "./calls/nomination-pools";
import { normalizeBalancesCallsArgs } from "./calls/balances";

export const eventNormalizationHandlers: { [key: string]: any } = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
  Contracts: normalizeContractsEventsArgs,
  NominationPools: normalizeNominationPoolsEventsArgs,
  Staking: normalizeStakingEventsArgs,
};

export const callNormalizationHandlers: { [key: string]: any } = {
  Contracts: normalizeContractsCallsArgs,
  NominationPools: normalizeNominationPoolsCallsArgs,
  Balances: normalizeBalancesCallsArgs,
};
