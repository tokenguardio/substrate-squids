import { balances } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeBalancesEventsArgs(event: Event): any {
  switch (event.name) {
    case balances.balanceSet.name:
      if (balances.balanceSet.v1.is(event)) {
        let [who, free, reserved] = balances.balanceSet.v1.decode(event);
        return {
          who,
          free,
          reserved,
        };
      } else if (balances.balanceSet.v3.is(event)) {
        return balances.balanceSet.v3.decode(event);
      } else if (balances.balanceSet.v64.is(event)) {
        return { ...balances.balanceSet.v64.decode(event), reserved: null };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.burned.name:
      if (balances.burned.v64.is(event)) {
        return balances.burned.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.deposit.name:
      if (balances.deposit.v1.is(event)) {
        let [who, deposit] = balances.deposit.v1.decode(event);
        return {
          who,
          amount: deposit,
        };
      } else if (balances.deposit.v3.is(event)) {
        return balances.deposit.v3.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.dustLost.name:
      if (balances.dustLost.v1.is(event)) {
        let [account, balance] = balances.dustLost.v1.decode(event);
        return {
          account,
          amount: balance,
        };
      } else if (balances.dustLost.v3.is(event)) {
        return balances.dustLost.v3.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.endowed.name:
      if (balances.endowed.v1.is(event)) {
        let [account, freeBalance] = balances.endowed.v1.decode(event);
        return {
          account,
          freeBalance,
        };
      } else if (balances.endowed.v3.is(event)) {
        return balances.endowed.v3.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.frozen.name:
      if (balances.frozen.v64.is(event)) {
        return balances.frozen.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.issued.name:
      if (balances.issued.v64.is(event)) {
        return balances.issued.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.locked.name:
      if (balances.locked.v64.is(event)) {
        return balances.locked.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.minted.name:
      if (balances.minted.v64.is(event)) {
        return balances.minted.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.rescinded.name:
      if (balances.rescinded.v64.is(event)) {
        return balances.rescinded.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserveRepatriated.name:
      if (balances.reserveRepatriated.v1.is(event)) {
        let [from, to, amount, destinationStatus] =
          balances.reserveRepatriated.v1.decode(event);
        return {
          from,
          to,
          amount,
          destinationStatus,
        };
      } else if (balances.reserveRepatriated.v3.is(event)) {
        return balances.reserveRepatriated.v3.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserved.name:
      if (balances.reserved.v1.is(event)) {
        let [who, value] = balances.reserved.v1.decode(event);
        return {
          who,
          amount: value,
        };
      } else if (balances.reserved.v3.is(event)) {
        return balances.reserved.v3.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.restored.name:
      if (balances.restored.v64.is(event)) {
        return balances.restored.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.slashed.name:
      if (balances.slashed.v3.is(event)) {
        return balances.slashed.v3.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.suspended.name:
      if (balances.suspended.v64.is(event)) {
        return balances.suspended.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.thawed.name:
      if (balances.thawed.v64.is(event)) {
        return balances.thawed.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.transfer.name:
      if (balances.transfer.v1.is(event)) {
        let [from, to, value] = balances.transfer.v1.decode(event);
        return {
          from,
          to,
          amount: value,
        };
      } else if (balances.transfer.v3.is(event)) {
        return balances.transfer.v3.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unlocked.name:
      if (balances.unlocked.v64.is(event)) {
        return balances.unlocked.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unreserved.name:
      if (balances.unreserved.v1.is(event)) {
        let [who, value] = balances.unreserved.v1.decode(event);
        return {
          who,
          amount: value,
        };
      } else if (balances.unreserved.v3.is(event)) {
        return balances.unreserved.v3.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.upgraded.name:
      if (balances.upgraded.v64.is(event)) {
        return balances.upgraded.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.withdraw.name:
      if (balances.withdraw.v3.is(event)) {
        return balances.withdraw.v3.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
