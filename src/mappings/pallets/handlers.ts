import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeSystemEventsArgs } from "./events/system";
import { Event, Call } from "./../../processor";

export const eventNormalizationHandlers: {
  [key: string]: (event: Event) => any;
} = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
};

export const callNormalizationHandlers: {
  [key: string]: (call: Call) => any;
} = {};
