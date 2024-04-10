import { balances } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeBalancesEventsArgs(event: Event): any {
  switch (event.name) {
    case balances.balanceSet.name:
      if (balances.balanceSet.v3.is(event)) {
        const [who, free, reserved] = balances.balanceSet.v3.decode(event);
        return { who, free, reserved };
      } else if (balances.balanceSet.v12.is(event)) {
        return balances.balanceSet.v12.decode(event);
      } else if (balances.balanceSet.v68.is(event)) {
        return balances.balanceSet.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.burned.name:
      if (balances.burned.v68.is(event)) {
        return balances.burned.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.deposit.name:
      if (balances.deposit.v3.is(event)) {
        const [who, deposit] = balances.deposit.v3.decode(event);
        return { who, amount: deposit };
      } else if (balances.deposit.v12.is(event)) {
        return balances.deposit.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.dustLost.name:
      if (balances.dustLost.v3.is(event)) {
        const [account, balance] = balances.dustLost.v3.decode(event);
        return { account, amount: balance };
      } else if (balances.dustLost.v12.is(event)) {
        return balances.dustLost.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.endowed.name:
      if (balances.endowed.v3.is(event)) {
        const [account, freeBalance] = balances.endowed.v3.decode(event);
        return { account, freeBalance };
      } else if (balances.endowed.v12.is(event)) {
        return balances.endowed.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.frozen.name:
      if (balances.frozen.v68.is(event)) {
        return balances.frozen.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.issued.name:
      if (balances.issued.v68.is(event)) {
        return balances.issued.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.locked.name:
      if (balances.locked.v68.is(event)) {
        return balances.locked.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.minted.name:
      if (balances.minted.v68.is(event)) {
        return balances.minted.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.rescinded.name:
      if (balances.rescinded.v68.is(event)) {
        return balances.rescinded.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case balances.reserveRepatriated.name:
      if (balances.reserveRepatriated.v3.is(event)) {
        const [from, to, amount, destinationStatus] =
          balances.reserveRepatriated.v3.decode(event);
        return { from, to, amount, destinationStatus };
      } else if (balances.reserveRepatriated.v12.is(event)) {
        return balances.reserveRepatriated.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserved.name:
      if (balances.reserved.v3.is(event)) {
        const [who, value] = balances.reserved.v3.decode(event);
        return { who, amount: value };
      } else if (balances.reserved.v12.is(event)) {
        return balances.reserved.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case balances.restored.name:
      if (balances.restored.v68.is(event)) {
        return balances.restored.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.slashed.name:
      if (balances.slashed.v12.is(event)) {
        return balances.slashed.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.suspended.name:
      if (balances.suspended.v68.is(event)) {
        return balances.suspended.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.thawed.name:
      if (balances.thawed.v68.is(event)) {
        return balances.thawed.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.transfer.name:
      if (balances.transfer.v3.is(event)) {
        const [from, to, amount] = balances.transfer.v3.decode(event);
        return { from, to, amount };
      } else if (balances.transfer.v12.is(event)) {
        return balances.transfer.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unlocked.name:
      if (balances.unlocked.v68.is(event)) {
        return balances.unlocked.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unreserved.name:
      if (balances.unreserved.v3.is(event)) {
        const [who, amount] = balances.unreserved.v3.decode(event);
        return { who, amount };
      } else if (balances.unreserved.v12.is(event)) {
        return balances.unreserved.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.upgraded.name:
      if (balances.upgraded.v68.is(event)) {
        return balances.upgraded.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.withdraw.name:
      if (balances.withdraw.v12.is(event)) {
        return balances.withdraw.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
