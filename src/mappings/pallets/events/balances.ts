import { balances } from "../../../types/events";
import { Event } from "./../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeBalancesEventsArgs(event: Event): any {
  switch (event.name) {
    case balances.balanceSet.name:
      if (balances.balanceSet.v0.is(event)) {
        const [who, free, reserved] = balances.balanceSet.v0.decode(event);
        return { who, free, reserved };
      } else if (balances.balanceSet.v9140.is(event)) {
        return balances.balanceSet.v9140.decode(event);
      } else if (balances.balanceSet.v9420.is(event)) {
        return {
          ...balances.balanceSet.v9420.decode(event),
          reserved: null,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.deposit.name:
      if (balances.deposit.v0.is(event)) {
        const [who, deposit] = balances.deposit.v0.decode(event);
        return { who, amount: deposit };
      } else if (balances.deposit.v9140.is(event)) {
        return balances.deposit.v9140.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.dustLost.name:
      if (balances.dustLost.v0.is(event)) {
        const [account, balance] = balances.dustLost.v0.decode(event);
        return { account, amount: balance };
      } else if (balances.dustLost.v9140.is(event)) {
        return balances.dustLost.v9140.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.endowed.name:
      if (balances.endowed.v0.is(event)) {
        const [account, freeBalance] = balances.endowed.v0.decode(event);
        return { account, freeBalance };
      } else if (balances.endowed.v9140.is(event)) {
        return balances.endowed.v9140.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserveRepatriated.name:
      if (balances.reserveRepatriated.v8.is(event)) {
        const [from, to, balance, destinationStatus] =
          balances.reserveRepatriated.v8.decode(event);
        return { from, to, amount: balance, destinationStatus };
      } else if (balances.reserveRepatriated.v9140.is(event)) {
        return balances.reserveRepatriated.v9140.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserved.name:
      if (balances.reserved.v8.is(event)) {
        const [who, value] = balances.reserved.v8.decode(event);
        return { who, amount: value };
      } else if (balances.reserved.v9140.is(event)) {
        return balances.reserved.v9140.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.slashed.name:
      if (balances.slashed.v9122.is(event)) {
        const [who, amountSlashed] = balances.slashed.v9122.decode(event);
        return { who, amount: amountSlashed };
      } else if (balances.slashed.v9140.is(event)) {
        return balances.slashed.v9140.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.transfer.name:
      if (balances.transfer.v0.is(event)) {
        const [from, to, value] = balances.transfer.v0.decode(event);
        return { from, to, amount: value };
      } else if (balances.transfer.v9140.is(event)) {
        return balances.transfer.v9140.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unreserved.name:
      if (balances.unreserved.v8.is(event)) {
        const [who, value] = balances.unreserved.v8.decode(event);
        return { who, amount: value };
      } else if (balances.unreserved.v9140.is(event)) {
        return balances.unreserved.v9140.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case balances.withdraw.name:
      if (balances.withdraw.v9122.is(event)) {
        const [who, value] = balances.withdraw.v9122.decode(event);
        return { who, amount: value };
      } else if (balances.withdraw.v9140.is(event)) {
        return balances.withdraw.v9140.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.burned.name:
      if (balances.burned.v9420.is(event)) {
        return balances.burned.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.frozen.name:
      if (balances.frozen.v9420.is(event)) {
        return balances.frozen.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.issued.name:
      if (balances.issued.v9420.is(event)) {
        return balances.issued.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.locked.name:
      if (balances.locked.v9420.is(event)) {
        return balances.locked.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.minted.name:
      if (balances.minted.v9420.is(event)) {
        return balances.minted.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.rescinded.name:
      if (balances.rescinded.v9420.is(event)) {
        return balances.rescinded.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.restored.name:
      if (balances.restored.v9420.is(event)) {
        return balances.restored.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.suspended.name:
      if (balances.suspended.v9420.is(event)) {
        return balances.suspended.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.thawed.name:
      if (balances.thawed.v9420.is(event)) {
        return balances.thawed.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unlocked.name:
      if (balances.unlocked.v9420.is(event)) {
        return balances.unlocked.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.upgraded.name:
      if (balances.upgraded.v9420.is(event)) {
        return balances.upgraded.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
