import { balances } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeBalancesEventsArgs(event: Event): any {
  switch (event.name) {
    case balances.endowed.name:
      if (balances.endowed.v932.is(event)) {
        return balances.endowed.v932.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.dustLost.name:
      if (balances.dustLost.v932.is(event)) {
        return balances.dustLost.v932.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.transfer.name:
      if (balances.transfer.v932.is(event)) {
        return balances.transfer.v932.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.balanceSet.name:
      if (balances.balanceSet.v932.is(event)) {
        return balances.balanceSet.v932.decode(event);
      } else if (balances.balanceSet.v978.is(event)) {
        return balances.balanceSet.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserved.name:
      if (balances.reserved.v932.is(event)) {
        return balances.reserved.v932.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unreserved.name:
      if (balances.unreserved.v932.is(event)) {
        return balances.unreserved.v932.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.reserveRepatriated.name:
      if (balances.reserveRepatriated.v932.is(event)) {
        return balances.reserveRepatriated.v932.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.deposit.name:
      if (balances.deposit.v932.is(event)) {
        return balances.deposit.v932.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.withdraw.name:
      if (balances.withdraw.v932.is(event)) {
        return balances.withdraw.v932.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.slashed.name:
      if (balances.slashed.v932.is(event)) {
        return balances.slashed.v932.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.minted.name:
      if (balances.minted.v978.is(event)) {
        return balances.minted.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.burned.name:
      if (balances.burned.v978.is(event)) {
        return balances.burned.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.suspended.name:
      if (balances.suspended.v978.is(event)) {
        return balances.suspended.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.restored.name:
      if (balances.restored.v978.is(event)) {
        return balances.restored.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.upgraded.name:
      if (balances.upgraded.v978.is(event)) {
        return balances.upgraded.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.issued.name:
      if (balances.issued.v978.is(event)) {
        return balances.issued.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.rescinded.name:
      if (balances.rescinded.v978.is(event)) {
        return balances.rescinded.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.locked.name:
      if (balances.locked.v978.is(event)) {
        return balances.locked.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.unlocked.name:
      if (balances.unlocked.v978.is(event)) {
        return balances.unlocked.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.frozen.name:
      if (balances.frozen.v978.is(event)) {
        return balances.frozen.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.thawed.name:
      if (balances.thawed.v978.is(event)) {
        return balances.thawed.v978.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case balances.totalIssuanceForced.name:
      if (balances.totalIssuanceForced.v11000.is(event)) {
        return balances.totalIssuanceForced.v11000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
