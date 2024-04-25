import { balances } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeBalancesCallsArgs(call: Call): any {
  switch (call.name) {
    case balances.forceSetBalance.name:
      if (balances.forceSetBalance.v68.is(call)) {
        return balances.forceSetBalance.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceTransfer.name:
      if (balances.forceTransfer.v3.is(call)) {
        return balances.forceTransfer.v3.decode(call);
      } else if (balances.forceTransfer.v12.is(call)) {
        return balances.forceTransfer.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceUnreserve.name:
      if (balances.forceUnreserve.v12.is(call)) {
        return balances.forceUnreserve.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.setBalance.name:
      if (balances.setBalance.v3.is(call)) {
        return balances.setBalance.v3.decode(call);
      } else if (balances.setBalance.v12.is(call)) {
        return balances.setBalance.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.setBalanceDeprecated.name:
      if (balances.setBalanceDeprecated.v68.is(call)) {
        return balances.setBalanceDeprecated.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transfer.name:
      if (balances.transfer.v3.is(call)) {
        return balances.transfer.v3.decode(call);
      } else if (balances.transfer.v12.is(call)) {
        return balances.transfer.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferAll.name:
      if (balances.transferAll.v3.is(call)) {
        return balances.transferAll.v3.decode(call);
      } else if (balances.transferAll.v12.is(call)) {
        return balances.transferAll.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferAllowDeath.name:
      if (balances.transferAllowDeath.v68.is(call)) {
        return balances.transferAllowDeath.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferKeepAlive.name:
      if (balances.transferKeepAlive.v3.is(call)) {
        return balances.transferKeepAlive.v3.decode(call);
      } else if (balances.transferKeepAlive.v12.is(call)) {
        return balances.transferKeepAlive.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.upgradeAccounts.name:
      if (balances.upgradeAccounts.v68.is(call)) {
        return balances.upgradeAccounts.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
