import { balances } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeBalancesEventsArgs(event: Event): any {
  switch (event.name) {
    case balances.endowed.name:
      if (balances.endowed.v100.is(event)) {
        const [account, freeBalance] = balances.endowed.v100.decode(event);
        return { account, freeBalance };
      } else if (balances.endowed.v104.is(event)) {
        return balances.endowed.v104.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.dustLost.name:
      if (balances.dustLost.v100.is(event)) {
        const [account, amount] = balances.dustLost.v100.decode(event);
        return { account, amount };
      } else if (balances.dustLost.v104.is(event)) {
        return balances.dustLost.v104.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.transfer.name:
      if (balances.transfer.v100.is(event)) {
        const [from, to, amount] = balances.transfer.v100.decode(event);
        return { from, to, amount };
      } else if (balances.transfer.v104.is(event)) {
        return balances.transfer.v104.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.balanceSet.name:
      if (balances.balanceSet.v100.is(event)) {
        const [who, free, reserved] = balances.balanceSet.v100.decode(event);
        return { who, free, reserved };
      } else if (balances.balanceSet.v104.is(event)) {
        return balances.balanceSet.v104.decode(event);
      } else if (balances.balanceSet.v205.is(event)) {
        return balances.balanceSet.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserved.name:
      if (balances.reserved.v100.is(event)) {
        const [who, amount] = balances.reserved.v100.decode(event);
        return { who, amount };
      } else if (balances.reserved.v104.is(event)) {
        return balances.reserved.v104.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unreserved.name:
      if (balances.unreserved.v100.is(event)) {
        const [who, amount] = balances.unreserved.v100.decode(event);
        return { who, amount };
      } else if (balances.unreserved.v104.is(event)) {
        return balances.unreserved.v104.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserveRepatriated.name:
      if (balances.reserveRepatriated.v100.is(event)) {
        const [from, to, balance, destinationStatus] =
          balances.reserveRepatriated.v100.decode(event);
        return { from, to, balance, destinationStatus };
      } else if (balances.reserveRepatriated.v104.is(event)) {
        return balances.reserveRepatriated.v104.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.deposit.name:
      if (balances.deposit.v100.is(event)) {
        const [who, amount] = balances.deposit.v100.decode(event);
        return { who, amount };
      } else if (balances.deposit.v104.is(event)) {
        return balances.deposit.v104.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.withdraw.name:
      if (balances.withdraw.v100.is(event)) {
        const [who, amount] = balances.withdraw.v100.decode(event);
        return { who, amount };
      } else if (balances.withdraw.v104.is(event)) {
        return balances.withdraw.v104.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.slashed.name:
      if (balances.slashed.v100.is(event)) {
        const [who, amount] = balances.slashed.v100.decode(event);
        return { who, amount };
      } else if (balances.slashed.v104.is(event)) {
        return balances.slashed.v104.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.minted.name:
      if (balances.minted.v205.is(event)) {
        return balances.minted.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.burned.name:
      if (balances.burned.v205.is(event)) {
        return balances.burned.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.suspended.name:
      if (balances.suspended.v205.is(event)) {
        return balances.suspended.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.restored.name:
      if (balances.restored.v205.is(event)) {
        return balances.restored.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.upgraded.name:
      if (balances.upgraded.v205.is(event)) {
        return balances.upgraded.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.issued.name:
      if (balances.issued.v205.is(event)) {
        return balances.issued.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.rescinded.name:
      if (balances.rescinded.v205.is(event)) {
        return balances.rescinded.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.locked.name:
      if (balances.locked.v205.is(event)) {
        return balances.locked.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unlocked.name:
      if (balances.unlocked.v205.is(event)) {
        return balances.unlocked.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.frozen.name:
      if (balances.frozen.v205.is(event)) {
        return balances.frozen.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.thawed.name:
      if (balances.thawed.v205.is(event)) {
        return balances.thawed.v205.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.totalIssuanceForced.name:
      if (balances.totalIssuanceForced.v244.is(event)) {
        return balances.totalIssuanceForced.v244.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
