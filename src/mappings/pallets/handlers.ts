import { normalizeBalancesEventsArgs } from "./events/balances";
import { normalizeContractsEventsArgs } from "./events/contracts";
import { normalizeSystemEventsArgs } from "./events/system";
import { normalizeEthereumEventsArgs } from "./events/ethereum";
import { normalizeEVMEventsArgs } from "./events/evm";
import { normalizeDappsStakingEventsArgs } from "./events/dapps-staking";
import { normalizeBaseFeeEventsArgs } from "./events/base-fee";
import { normalizeEthCallEventsArgs } from "./events/eth-call";

import { normalizeContractsCallsArgs } from "./calls/contracts";
import { normalizeEthereumCallsArgs } from "./calls/ethereum";
import { normalizeEVMCallsArgs } from "./calls/evm";
import { normalizeDappsStakingCallsArgs } from "./calls/dapps-staking";
import { normalizeBalancesCallsArgs } from "./calls/balances";
import { normalizeBaseFeeCallsArgs } from "./calls/base-fee";
import { normalizeEthCallCallsArgs } from "./calls/eth-call";

export const eventNormalizationHandlers: { [key: string]: any } = {
  Balances: normalizeBalancesEventsArgs,
  System: normalizeSystemEventsArgs,
  Contracts: normalizeContractsEventsArgs,
  EVM: normalizeEVMEventsArgs,
  Ethereum: normalizeEthereumEventsArgs,
  DappsStaking: normalizeDappsStakingEventsArgs,
  BaseFee: normalizeBaseFeeEventsArgs,
  EthCall: normalizeEthCallEventsArgs,
};

export const callNormalizationHandlers: { [key: string]: any } = {
  Balances: normalizeBalancesCallsArgs,
  Contracts: normalizeContractsCallsArgs,
  EVM: normalizeEVMCallsArgs,
  Ethereum: normalizeEthereumCallsArgs,
  DappsStaking: normalizeDappsStakingCallsArgs,
  BaseFee: normalizeBaseFeeCallsArgs,
  EthCall: normalizeEthCallCallsArgs,
};
