import { AddressArgs } from "../../interfaces/mappings/specific";

const Balances: AddressArgs = {
  "Balances.BalanceSet": ["who"],
  "Balances.Deposit": ["who"],
  "Balances.DustLost": ["account"],
  "Balances.Endowed": ["account"],
  "Balances.NewAccount": ["account"],
  "Balances.ReapedAccount": ["account"],
  "Balances.ReserveRepatriated": ["from", "to"],
  "Balances.Reserved": ["who"],
  "Balances.Slashed": ["who"],
  "Balances.Transfer": ["from", "to"],
  "Balances.Unreserved": ["who"],
  "Balances.Withdraw": ["who"],
};

const Contracts: AddressArgs = {
  "Contracts.ContractCodeUpdated": ["contract"],
  "Contracts.ContractEmitted": ["contract"],
  "Contracts.ContractExecution": ["account"],
  "Contracts.Dispatched": ["account"],
  "Contracts.Evicted": ["contract"],
  "Contracts.Restored": ["donor", "dest"],
  "Contracts.Instantiated": ["deployer", "contract"],
  "Contracts.Terminated": ["contract", "beneficiary"],
  "Contracts.Transfer": ["from", "to"],
};

const System: AddressArgs = {
  "System.KilledAccount": ["account"],
  "System.NewAccount": ["account"],
  "System.Remarked": ["sender"],
};

const Staking: AddressArgs = {
  "Staking.Bonded": ["stash"],
  "Staking.Chilled": ["stash"],
  "Staking.Kicked": ["nominator", "stash"],
  "Staking.PayoutStarted": ["validatorStash"],
  "Staking.Reward": ["stash"],
  "Staking.Rewarded": ["stash"],
  "Staking.Slash": ["validator"],
  "Staking.Slashed": ["validator"],
  "Staking.Unbonded": ["stash"],
  "Staking.Withdrawn": ["stash"],
};

export const eventsAddressArgs: AddressArgs = {
  ...Balances,
  ...Contracts,
  ...System,
  ...Staking,
};
