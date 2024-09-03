import { balances } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeBalancesCallsArgs(call: Call): any {
  switch (call.name) {
    case balances.transfer.name:
      if (balances.transfer.v0.is(call)) {
        return balances.transfer.v0.decode(call);
      } else if (balances.transfer.v28.is(call)) {
        return balances.transfer.v28.decode(call);
      } else if (balances.transfer.v9110.is(call)) {
        return balances.transfer.v9110.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.setBalance.name:
      if (balances.setBalance.v0.is(call)) {
        return balances.setBalance.v0.decode(call);
      } else if (balances.setBalance.v28.is(call)) {
        return balances.setBalance.v28.decode(call);
      } else if (balances.setBalance.v9110.is(call)) {
        return balances.setBalance.v9110.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceTransfer.name:
      if (balances.forceTransfer.v0.is(call)) {
        return balances.forceTransfer.v0.decode(call);
      } else if (balances.forceTransfer.v28.is(call)) {
        return balances.forceTransfer.v28.decode(call);
      } else if (balances.forceTransfer.v9110.is(call)) {
        return balances.forceTransfer.v9110.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferKeepAlive.name:
      if (balances.transferKeepAlive.v0.is(call)) {
        return balances.transferKeepAlive.v0.decode(call);
      } else if (balances.transferKeepAlive.v28.is(call)) {
        return balances.transferKeepAlive.v28.decode(call);
      } else if (balances.transferKeepAlive.v9110.is(call)) {
        return balances.transferKeepAlive.v9110.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferAll.name:
      if (balances.transferAll.v9050.is(call)) {
        return balances.transferAll.v9050.decode(call);
      } else if (balances.transferAll.v9110.is(call)) {
        return balances.transferAll.v9110.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceUnreserve.name:
      if (balances.forceUnreserve.v9110.is(call)) {
        return balances.forceUnreserve.v9110.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferAllowDeath.name:
      if (balances.transferAllowDeath.v9420.is(call)) {
        return balances.transferAllowDeath.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.setBalanceDeprecated.name:
      if (balances.setBalanceDeprecated.v9420.is(call)) {
        return balances.setBalanceDeprecated.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.upgradeAccounts.name:
      if (balances.upgradeAccounts.v9420.is(call)) {
        return balances.upgradeAccounts.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceSetBalance.name:
      if (balances.forceSetBalance.v9420.is(call)) {
        return balances.forceSetBalance.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceAdjustTotalIssuance.name:
      if (balances.forceAdjustTotalIssuance.v1002000.is(call)) {
        return balances.forceAdjustTotalIssuance.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
