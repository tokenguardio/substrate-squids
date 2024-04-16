import { balances } from "../../../types/events";
import { Event } from "./../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";
import { evmAddressToMixedCase } from "../../../utils/misc";

export function normalizeBalancesEventsArgs(event: Event): any {
  switch (event.name) {
    case balances.balanceSet.name:
      if (balances.balanceSet.v900.is(event)) {
        const [who, free, reserved] = balances.balanceSet.v900.decode(event);
        return {
          who: evmAddressToMixedCase(who),
          free,
          reserved,
        };
      } else if (balances.balanceSet.v1201.is(event)) {
        const decoded = balances.balanceSet.v1201.decode(event);
        return {
          ...decoded,
          who: evmAddressToMixedCase(decoded.who),
        };
      } else if (balances.balanceSet.v2501.is(event)) {
        return {
          ...balances.balanceSet.v2501.decode(event),
          reserved: null,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case balances.burned.name:
      if (balances.burned.v2501.is(event)) {
        return balances.burned.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case balances.deposit.name:
      if (balances.deposit.v900.is(event)) {
        let [who, deposit] = balances.deposit.v900.decode(event);
        return {
          who: who,
          amount: deposit,
        };
      } else if (balances.deposit.v1201.is(event)) {
        return balances.deposit.v1201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case balances.dustLost.name:
      if (balances.dustLost.v900.is(event)) {
        let [account, balance] = balances.dustLost.v900.decode(event);
        return {
          account: account,
          amount: balance,
        };
      } else if (balances.dustLost.v1201.is(event)) {
        return balances.dustLost.v1201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.endowed.name:
      if (balances.endowed.v900.is(event)) {
        let [account, freeBalance] = balances.endowed.v900.decode(event);
        return { account, freeBalance };
      } else if (balances.endowed.v1201.is(event)) {
        return balances.endowed.v1201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.frozen.name:
      if (balances.frozen.v2501.is(event)) {
        return balances.frozen.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.issued.name:
      if (balances.issued.v2501.is(event)) {
        return balances.issued.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.locked.name:
      if (balances.locked.v2501.is(event)) {
        return balances.locked.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.minted.name:
      if (balances.minted.v2501.is(event)) {
        return balances.minted.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.rescinded.name:
      if (balances.rescinded.v2501.is(event)) {
        return balances.rescinded.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserveRepatriated.name:
      if (balances.reserveRepatriated.v900.is(event)) {
        let [from, to, amount, destinationStatus] =
          balances.reserveRepatriated.v900.decode(event);
        return {
          from,
          to,
          amount,
          destinationStatus,
        };
      } else if (balances.reserveRepatriated.v1201.is(event)) {
        return balances.reserveRepatriated.v1201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserved.name:
      if (balances.reserved.v900.is(event)) {
        let [who, amount] = balances.reserved.v900.decode(event);
        return { who, amount };
      } else if (balances.reserved.v1201.is(event)) {
        return balances.reserved.v1201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.restored.name:
      if (balances.restored.v2501.is(event)) {
        return balances.restored.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.slashed.name:
      if (balances.slashed.v1001.is(event)) {
        let [who, amount] = balances.slashed.v1001.decode(event);
        return { who, amount };
      } else if (balances.slashed.v1201.is(event)) {
        return balances.slashed.v1201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.suspended.name:
      if (balances.suspended.v2501.is(event)) {
        return balances.suspended.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.thawed.name:
      if (balances.thawed.v2501.is(event)) {
        return balances.thawed.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.transfer.name:
      if (balances.transfer.v900.is(event)) {
        let [from, to, amount] = balances.transfer.v900.decode(event);
        return { from, to, amount };
      } else if (balances.transfer.v1201.is(event)) {
        return balances.transfer.v1201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unlocked.name:
      if (balances.unlocked.v2501.is(event)) {
        return balances.unlocked.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unreserved.name:
      if (balances.unreserved.v900.is(event)) {
        let [who, amount] = balances.unreserved.v900.decode(event);
        return { who, amount };
      } else if (balances.unreserved.v1201.is(event)) {
        return balances.unreserved.v1201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.upgraded.name:
      if (balances.upgraded.v2501.is(event)) {
        return balances.upgraded.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.withdraw.name:
      if (balances.withdraw.v1001.is(event)) {
        let [who, amount] = balances.withdraw.v1001.decode(event);
        return { who, amount };
      } else if (balances.withdraw.v1201.is(event)) {
        return balances.withdraw.v1201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
