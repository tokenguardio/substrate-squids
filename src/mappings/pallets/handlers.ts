import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeContractsEventsArgs } from "./events/contracts";
import { normalizeSystemEventsArgs } from "./events/system";
import { normalizeNominationPoolsEventsArgs } from "./events/nomination-pools";
import { normalizeStakingEventsArgs } from "./events/staking";

import { normalizeContractsCallsArgs } from "./calls/contracts";
import { normalizeNominationPoolsCallsArgs } from "./calls/nomination-pools";
import { normalizeBalancesCallsArgs } from "./calls/balances";
import { Event, Call } from "./../../processor";

export const eventNormalizationHandlers: {
  [key: string]: (event: Event) => any;
} = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
  Contracts: normalizeContractsEventsArgs,
  NominationPools: normalizeNominationPoolsEventsArgs,
  Staking: normalizeStakingEventsArgs,
};

export const callNormalizationHandlers: {
  [key: string]: (call: Call) => any;
} = {
  Contracts: normalizeContractsCallsArgs,
  NominationPools: normalizeNominationPoolsCallsArgs,
  Balances: normalizeBalancesCallsArgs,
};
