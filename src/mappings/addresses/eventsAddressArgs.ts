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
  "Balances.Burned": ["who"],
  "Balances.Frozen": ["who"],
  "Balances.Locked": ["who"],
  "Balances.Minted": ["who"],
  "Balances.Restored": ["who"],
  "Balances.Suspended": ["who"],
  "Balances.Thawed": ["who"],
  "Balances.Unlocked": ["who"],
  "Balances.Upgraded": ["who"],
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

const DappStaking: AddressArgs = {
  "DappStaking.BonusReward": ["account"],
  "DappStaking.ClaimedUnlocked": ["account"],
  "DappStaking.DAppOwnerChanged": ["newOwner"],
  "DappStaking.DAppRegistered": ["owner"],
  "DappStaking.DAppReward": ["beneficiary"],
  "DappStaking.DAppRewardDestinationUpdated": ["beneficiary"],
  "DappStaking.ExpiredEntriesRemoved": ["account"],
  "DappStaking.Locked": ["account"],
  "DappStaking.Relock": ["account"],
  "DappStaking.Reward": ["account"],
  "DappStaking.Stake": ["account"],
  "DappStaking.Unlocking": ["account"],
  "DappStaking.Unstake": ["account"],
  "DappStaking.UnstakeFromUnregistered": ["account"],
};

const EthCall: AddressArgs = {
  "EthCall.Executed": ["from"],
};

export const eventsAddressArgs: AddressArgs = {
  ...Balances,
  ...Contracts,
  ...System,
  ...DappsStaking,
  ...EthCall,
  ...DappStaking,
};
