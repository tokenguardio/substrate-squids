import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeSystemEventsArgs } from "./events/system";
import { normalizeNominationPoolsEventsArgs } from "./events/nomination-pools";
import { normalizeStakingEventsArgs } from "./events/staking";

import { normalizeNominationPoolsCallsArgs } from "./calls/nomination-pools";

export const eventNormalizationHandlers: { [key: string]: any } = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
  NominationPools: normalizeNominationPoolsEventsArgs,
  Staking: normalizeStakingEventsArgs,
};

export const callNormalizationHandlers: { [key: string]: any } = {
  NominationPools: normalizeNominationPoolsCallsArgs,
};
