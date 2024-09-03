import { balances } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeBalancesCallsArgs(call: Call): any {
  switch (call.name) {
    case balances.transfer.name:
      if (balances.transfer.v100.is(call)) {
        return balances.transfer.v100.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.setBalance.name:
      if (balances.setBalance.v100.is(call)) {
        return balances.setBalance.v100.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceTransfer.name:
      if (balances.forceTransfer.v100.is(call)) {
        return balances.forceTransfer.v100.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferKeepAlive.name:
      if (balances.transferKeepAlive.v100.is(call)) {
        return balances.transferKeepAlive.v100.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferAll.name:
      if (balances.transferAll.v100.is(call)) {
        return balances.transferAll.v100.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceUnreserve.name:
      if (balances.forceUnreserve.v100.is(call)) {
        return balances.forceUnreserve.v100.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.transferAllowDeath.name:
      if (balances.transferAllowDeath.v205.is(call)) {
        return balances.transferAllowDeath.v205.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.setBalanceDeprecated.name:
      if (balances.setBalanceDeprecated.v205.is(call)) {
        return balances.setBalanceDeprecated.v205.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.upgradeAccounts.name:
      if (balances.upgradeAccounts.v205.is(call)) {
        return balances.upgradeAccounts.v205.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceSetBalance.name:
      if (balances.forceSetBalance.v205.is(call)) {
        return balances.forceSetBalance.v205.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case balances.forceAdjustTotalIssuance.name:
      if (balances.forceAdjustTotalIssuance.v244.is(call)) {
        return balances.forceAdjustTotalIssuance.v244.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
