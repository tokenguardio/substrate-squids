import { balances } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeBalancesCallsArgs(call: Call): any {
  switch (call.name) {
    case balances.forceSetBalance.name:
      if (balances.forceSetBalance.v64.is(call)) {
        return balances.forceSetBalance.v64.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case balances.forceTransfer.name:
      if (balances.forceTransfer.v1.is(call)) {
        return balances.forceTransfer.v1.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case balances.forceUnreserve.name:
      if (balances.forceUnreserve.v1.is(call)) {
        return balances.forceUnreserve.v1.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case balances.setBalance.name:
      if (balances.setBalance.v1.is(call)) {
        return balances.setBalance.v1.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case balances.setBalanceDeprecated.name:
      if (balances.setBalanceDeprecated.v64.is(call)) {
        return balances.setBalanceDeprecated.v64.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case balances.transfer.name:
      if (balances.transfer.v1.is(call)) {
        return balances.transfer.v1.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case balances.transferAll.name:
      if (balances.transferAll.v1.is(call)) {
        return balances.transferAll.v1.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case balances.transferAllowDeath.name:
      if (balances.transferAllowDeath.v64.is(call)) {
        return balances.transferAllowDeath.v64.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case balances.transferKeepAlive.name:
      if (balances.transferKeepAlive.v1.is(call)) {
        return balances.transferKeepAlive.v1.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case balances.upgradeAccounts.name:
      if (balances.upgradeAccounts.v64.is(call)) {
        return balances.upgradeAccounts.v64.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case balances.burn.name:
      if (balances.burn.v87.is(call)) {
        return balances.burn.v87.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
