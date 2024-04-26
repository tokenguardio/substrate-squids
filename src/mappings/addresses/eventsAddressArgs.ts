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
  "Contracts.CodeStored": ["uploader"],
  "Contracts.CodeRemoved": ["remover"],
  "Contracts.StorageDepositTransferredAndHeld": ["from", "to"],
  "Contracts.StorageDepositTransferredAndReleased": ["from", "to"],
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
  "Staking.Rewarded": ["stash"],
  "Staking.SlashReported": ["validator"],
  "Staking.Slashed": ["staker"],
  "Staking.Unbonded": ["stash"],
  "Staking.ValidatorPrefsSet": ["stash"],
  "Staking.Withdrawn": ["stash"],
};

export const eventsAddressArgs: AddressArgs = {
  ...Balances,
  ...Contracts,
  ...System,
  ...NominationPools,
  ...Staking,
};
