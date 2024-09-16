import { balances } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeBalancesCallsArgs(call: Call): any {
  switch (call.name) {
    case balances.transfer.name:
      if (balances.transfer.v932.is(call)) {
        return balances.transfer.v932.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.setBalance.name:
      if (balances.setBalance.v932.is(call)) {
        return balances.setBalance.v932.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceTransfer.name:
      if (balances.forceTransfer.v932.is(call)) {
        return balances.forceTransfer.v932.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferKeepAlive.name:
      if (balances.transferKeepAlive.v932.is(call)) {
        return balances.transferKeepAlive.v932.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferAll.name:
      if (balances.transferAll.v932.is(call)) {
        return balances.transferAll.v932.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceUnreserve.name:
      if (balances.forceUnreserve.v932.is(call)) {
        return balances.forceUnreserve.v932.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferAllowDeath.name:
      if (balances.transferAllowDeath.v978.is(call)) {
        return balances.transferAllowDeath.v978.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.setBalanceDeprecated.name:
      if (balances.setBalanceDeprecated.v978.is(call)) {
        return balances.setBalanceDeprecated.v978.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.upgradeAccounts.name:
      if (balances.upgradeAccounts.v978.is(call)) {
        return balances.upgradeAccounts.v978.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceSetBalance.name:
      if (balances.forceSetBalance.v978.is(call)) {
        return balances.forceSetBalance.v978.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceAdjustTotalIssuance.name:
      if (balances.forceAdjustTotalIssuance.v11000.is(call)) {
        return balances.forceAdjustTotalIssuance.v11000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.burn.name:
      if (balances.burn.v12001.is(call)) {
        return balances.burn.v12001.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
