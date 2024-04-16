import {
  normalizeBalancesEventsArgs,
  normalizeContractsEventsArgs,
  normalizeSystemEventsArgs,
  normalizeDappsStakingEventsArgs,
  normalizeDappStakingEventsArgs,
} from "./events";
import {
  normalizeContractsCallsArgs,
  normalizeDappStakingCallsArgs,
  normalizeBalancesCallsArgs,
  normalizeDappsStakingCallsArgs,
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
    DappsStaking: normalizeDappsStakingEventsArgs,
    DappStaking: normalizeDappStakingEventsArgs,
  },
  wrapEventNormalizationWithFormatting
);

export const callNormalizationHandlers: { [key: string]: (call: Call) => any } =
  wrapHandlers(
    {
      Balances: normalizeBalancesCallsArgs,
      Contracts: normalizeContractsCallsArgs,
      DappsStaking: normalizeDappsStakingCallsArgs,
      DappStaking: normalizeDappStakingCallsArgs,
    },
    wrapCallNormalizationWithFormatting
  );
