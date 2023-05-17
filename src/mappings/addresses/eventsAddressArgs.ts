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

const System: AddressArgs = {
  "System.KilledAccount": ["account"],
  "System.NewAccount": ["account"],
  "System.Remarked": ["sender"],
};

const NominationPools: AddressArgs = {
  "NominationPools.Bonded": ["member"],
  "NominationPools.Created": ["depositor"],
  "NominationPools.MemberRemoved": ["member"],
  "NominationPools.PaidOut": ["member"],
  "NominationPools.RolesUpdated": ["root", "stateToggler", "nominator"],
  "NominationPools.Unbonded": ["member"],
  "NominationPools.Withdrawn": ["member"],
};

const Staking: AddressArgs = {
  "Staking.Bonded": ["stash"],
  "Staking.Chilled": ["stash"],
  "Staking.Kicked": ["nominator", "stash"],
  "Staking.PayoutStarted": ["validatorStash"],
  "Staking.Reward": ["stash"],
  "Staking.Rewarded": ["stash"],
  "Staking.Slash": ["validator"],
  "Staking.SlashReported": ["validator"],
  "Staking.Slashed": ["staker"],
  "Staking.Unbonded": ["stash"],
  "Staking.ValidatorPrefsSet": ["stash"],
  "Staking.Withdrawn": ["stash"],
};

export const eventsAddressArgs: AddressArgs = {
  ...Balances,
  ...System,
  ...NominationPools,
  ...Staking,
};
