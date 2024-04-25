import {
  normalizeBalancesEventsArgs,
  normalizeContractsEventsArgs,
  normalizeNominationPoolsEventsArgs,
  normalizeStakingEventsArgs,
  normalizeSystemEventsArgs,
} from "./events";
import {
  normalizeBalancesCallsArgs,
  normalizeContractsCallsArgs,
  normalizeNominationPoolsCallsArgs,
} from "./calls";
import { Event, Call } from "./../../processor";
import {
  wrapCallNormalizationWithFormatting,
  wrapEventNormalizationWithFormatting,
} from "../addresses/mapAddresses";

function wrapHandlers<T>(
  handlers: { [key: string]: (input: T) => any },
  wrapper: (normalizer: (input: T) => any) => (input: T) => any
) {
  const wrappedHandlers: { [key: string]: (input: T) => any } = {};
  Object.keys(handlers).forEach((key) => {
    wrappedHandlers[key] = wrapper(handlers[key]);
  });
  return wrappedHandlers;
}

export const eventNormalizationHandlers: {
  [key: string]: (event: Event) => any;
} = wrapHandlers(
  {
    Balances: normalizeBalancesEventsArgs,
    System: normalizeSystemEventsArgs,
    Contracts: normalizeContractsEventsArgs,
    NominationPools: normalizeNominationPoolsEventsArgs,
    Staking: normalizeStakingEventsArgs,
  },
  wrapEventNormalizationWithFormatting
);

export const callNormalizationHandlers: {
  [key: string]: (call: Call) => any;
} = wrapHandlers(
  {
    Contracts: normalizeContractsCallsArgs,
    NominationPools: normalizeNominationPoolsCallsArgs,
    Balances: normalizeBalancesCallsArgs,
  },
  wrapCallNormalizationWithFormatting
);
