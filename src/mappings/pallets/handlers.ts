import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeContractsEventsArgs } from "./events/contracts";
import { normalizeSystemEventsArgs } from "./events/system";
import { normalizeDappsStakingEventsArgs } from "./events/dapps-staking";
import { normalizeDappStakingEventsArgs } from "./events/dapp-staking";

import { normalizeContractsCallsArgs } from "./calls/contracts";
import { normalizeDappsStakingCallsArgs } from "./calls/dapps-staking";
import { normalizeBalancesCallsArgs } from "./calls/balances";
import { normalizeDappStakingCallsArgs } from "./calls/dapp-staking";
import { Event, Call } from "./../../processor";

export const eventNormalizationHandlers: {
  [key: string]: (event: Event) => any;
} = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
  Contracts: normalizeContractsEventsArgs,
  DappsStaking: normalizeDappsStakingEventsArgs,
  DappStaking: normalizeDappStakingEventsArgs,
};

export const callNormalizationHandlers: { [key: string]: (call: Call) => any } =
  {
    Balances: normalizeBalancesCallsArgs,
    Contracts: normalizeContractsCallsArgs,
    DappsStaking: normalizeDappsStakingCallsArgs,
    DappStaking: normalizeDappStakingCallsArgs,
  };
