import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeSystemEventsArgs } from "./events/system";
import { normalizeNominationPoolsEventsArgs } from "./events/nomination-pools";
import { normalizeStakingEventsArgs } from "./events/staking";

import { normalizeNominationPoolsCallsArgs } from "./calls/nomination-pools";
import { Event, Call } from "@src/processor";

export const eventNormalizationHandlers: {
  [key: string]: (event: Event) => any;
} = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
  NominationPools: normalizeNominationPoolsEventsArgs,
  Staking: normalizeStakingEventsArgs,
};

export const callNormalizationHandlers: { [key: string]: (call: Call) => any } =
  {
    NominationPools: normalizeNominationPoolsCallsArgs,
  };
