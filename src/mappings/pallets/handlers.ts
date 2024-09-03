import {
  normalizeBalancesEventsArgs,
  normalizeHrmpEventsArgs,
  normalizeXcmPalletEventsArgs,
} from "./events";
import {
  normalizeBalancesCallsArgs,
  normalizeXcmPalletCallsArgs,
  normalizeHrmpCallsArgs,
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
    Hrmp: normalizeHrmpEventsArgs,
    XcmPallet: normalizeXcmPalletEventsArgs,
  },
  wrapEventNormalizationWithFormatting
);

export const callNormalizationHandlers: { [key: string]: (call: Call) => any } =
  wrapHandlers(
    {
      Balances: normalizeBalancesCallsArgs,
      Hrmp: normalizeHrmpCallsArgs,
      XcmPallet: normalizeXcmPalletCallsArgs,
    },
    wrapCallNormalizationWithFormatting
  );
