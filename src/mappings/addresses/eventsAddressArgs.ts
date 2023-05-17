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

const System: AddressArgs = {
  "System.KilledAccount": ["account"],
  "System.NewAccount": ["account"],
  "System.Remarked": ["sender"],
};

export const eventsAddressArgs: AddressArgs = {
  ...Balances,
  ...System,
};
