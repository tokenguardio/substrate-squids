import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeContractsEventsArgs } from "./events/contracts";
import { normalizeSystemEventsArgs } from "./events/system";
import { normalizeEthereumEventsArgs } from "./events/ethereum";
import { normalizeEVMEventsArgs } from "./events/evm";

import { normalizeContractsCallsArgs } from "./calls/contracts";
import { normalizeEthereumCallsArgs } from "./calls/ethereum";
import { normalizeEVMCallsArgs } from "./calls/evm";

export const eventNormalizationHandlers: { [key: string]: any } = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
  Contracts: normalizeContractsEventsArgs,
  EVM: normalizeEVMEventsArgs,
  Ethereum: normalizeEthereumEventsArgs,
};

export const callNormalizationHandlers: { [key: string]: any } = {
  Contracts: normalizeContractsCallsArgs,
  EVM: normalizeEVMCallsArgs,
  Ethereum: normalizeEthereumCallsArgs,
};
