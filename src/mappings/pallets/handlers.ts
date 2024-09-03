import {
  normalizeBalancesEventsArgs,
  normalizeLbcEventsArgs,
  normalizeOmnipoolEventsArgs,
  normalizeOtcEventsArgs,
  normalizeReferralsEventsArgs,
  normalizeStableswapEventsArgs,
  normalizeStakingEventsArgs,
  normalizeXTokensEventsArgs,
  normalizeXykEventsArgs,
} from "./events";
import {
  normalizeBalancesCallsArgs,
  normalizeLbpCallsArgs,
  normalizeOtcCallsArgs,
  normalizeOmnipoolCallsArgs,
  normalizeReferralsCallsArgs,
  normalizeStableswapCallsArgs,
  normalizeStakingCallsArgs,
  normalizeXTokensCallsArgs,
  normalizeXykCallsArgs,
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
    LBP: normalizeLbcEventsArgs,
    OTC: normalizeOtcEventsArgs,
    Omnipool: normalizeOmnipoolEventsArgs,
    Referrals: normalizeReferralsEventsArgs,
    Stableswap: normalizeStableswapEventsArgs,
    Staking: normalizeStakingEventsArgs,
    XTokens: normalizeXTokensEventsArgs,
    XYK: normalizeXykEventsArgs,
  },
  wrapEventNormalizationWithFormatting
);

export const callNormalizationHandlers: { [key: string]: (call: Call) => any } =
  wrapHandlers(
    {
      Balances: normalizeBalancesCallsArgs,
      LBP: normalizeLbpCallsArgs,
      OTC: normalizeOtcCallsArgs,
      Omnipool: normalizeOmnipoolCallsArgs,
      Referrals: normalizeReferralsCallsArgs,
      Stableswap: normalizeStableswapCallsArgs,
      Staking: normalizeStakingCallsArgs,
      XTokens: normalizeXTokensCallsArgs,
      XYK: normalizeXykCallsArgs,
    },
    wrapCallNormalizationWithFormatting
  );
