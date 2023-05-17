import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeSystemEventsArgs } from "./events/system";

export const eventNormalizationHandlers: { [key: string]: any } = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
};

export const callNormalizationHandlers: { [key: string]: any } = {};
