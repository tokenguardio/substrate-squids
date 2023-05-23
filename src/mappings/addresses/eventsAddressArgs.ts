import { AddressArgs } from "../../interfaces/mappings/specific";

const Balances: AddressArgs = {
  "Balances.BalanceSet": ["who"],
  "Balances.Deposit": ["who"],
  "Balances.DustLost": ["account"],
  "Balances.Endowed": ["account"],
  "Balances.ReserveRepatriated": ["from", "to"],
  "Balances.Reserved": ["who"],
  "Balances.Slashed": ["who"],
  "Balances.Transfer": ["from", "to"],
  "Balances.Unreserved": ["who"],
  "Balances.Withdraw": ["who"],
};

const Contracts: AddressArgs = {
  "Contracts.Called": ["caller", "contract"],
  "Contracts.ContractCodeUpdated": ["contract"],
  "Contracts.ContractEmitted": ["contract"],
  "Contracts.DelegateCalled": ["contract"],
  "Contracts.Instantiated": ["deployer", "contract"],
  "Contracts.Terminated": ["contract", "beneficiary"],
};

const System: AddressArgs = {
  "System.KilledAccount": ["account"],
  "System.NewAccount": ["account"],
  "System.Remarked": ["sender"],
};

const DappsStaking: AddressArgs = {
  "DappsStaking.BondAndStake": ["account"],
  "DappsStaking.ContractRemoved": ["account"],
  "DappsStaking.NewContract": ["account"],
  "DappsStaking.NominationTransfer": ["staker"],
  "DappsStaking.Reward": ["account"],
  "DappsStaking.RewardDestination": ["account"],
  "DappsStaking.StaleRewardBurned": ["developer"],
  "DappsStaking.UnbondAndUnstake": ["account"],
  "DappsStaking.UnbondUnstakeAndWithdraw": ["account"],
  "DappsStaking.WithdrawFromUnregistered": ["account"],
  "DappsStaking.Withdrawn": ["account"],
};

export const eventsAddressArgs: AddressArgs = {
  ...Balances,
  ...Contracts,
  ...System,
  ...DappsStaking,
};
