import {
  normalizeBalancesEventsArgs,
  normalizeNominationPoolsEventsArgs,
  normalizeSystemEventsArgs,
  normalizeStakingEventsArgs,
} from "./events";
import { normalizeNominationPoolsCallsArgs } from "./calls";
import { Event, Call } from "@src/processor";
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
    NominationPools: normalizeNominationPoolsEventsArgs,
    Staking: normalizeStakingEventsArgs,
  },
  wrapEventNormalizationWithFormatting
);

export const callNormalizationHandlers: { [key: string]: (call: Call) => any } =
  wrapHandlers(
    {
      NominationPools: normalizeNominationPoolsCallsArgs,
    },
    wrapCallNormalizationWithFormatting
  );
