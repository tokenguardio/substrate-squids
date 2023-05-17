import { AddressArgs } from "../../interfaces/mappings/specific";

const Balances: AddressArgs = {
  "Balances.BalanceSet": ["who"],
  "Balances.Deposit": ["who"],
  "Balances.DustLost": ["account"],
  "Balances.Endowed": ["account"],
  "Balances.ReserveRepatriated": ["from", "to"],
  "Balances.Reserved": ["who"],
  "Balances.Transfer": ["from", "to"],
  "Balances.Unreserved": ["who"],
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

const System: AddressArgs = {
  "System.KilledAccount": ["account"],
  "System.NewAccount": ["account"],
  "System.Remarked": ["origin"],
};

export const eventsAddressArgs: AddressArgs = {
  ...Balances,
  ...Staking,
  ...System,
};
