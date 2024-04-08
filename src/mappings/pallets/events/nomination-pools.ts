import { nominationPools } from "../../../types/events";
import { Event } from "./../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeNominationPoolsEventsArgs(event: Event): any {
  switch (event.name) {
    case nominationPools.bonded.name:
      if (nominationPools.bonded.v9280.is(event)) {
        return nominationPools.bonded.v9280.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.created.name:
      if (nominationPools.created.v9280.is(event)) {
        return nominationPools.created.v9280.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.destroyed.name:
      if (nominationPools.destroyed.v9280.is(event)) {
        return nominationPools.destroyed.v9280.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.memberRemoved.name:
      if (nominationPools.memberRemoved.v9280.is(event)) {
        return nominationPools.memberRemoved.v9280.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.minBalanceDeficitAdjusted.name:
      if (nominationPools.minBalanceDeficitAdjusted.v1001002.is(event)) {
        return nominationPools.minBalanceDeficitAdjusted.v1001002.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.minBalanceExcessAdjusted.name:
      if (nominationPools.minBalanceExcessAdjusted.v1001002.is(event)) {
        return nominationPools.minBalanceExcessAdjusted.v1001002.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.paidOut.name:
      if (nominationPools.paidOut.v9280.is(event)) {
        return nominationPools.paidOut.v9280.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.poolSlashed.name:
      if (nominationPools.poolSlashed.v9280.is(event)) {
        return nominationPools.poolSlashed.v9280.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.rolesUpdated.name:
      if (nominationPools.rolesUpdated.v9280.is(event)) {
        return {
          ...nominationPools.rolesUpdated.v9280.decode(event),
          bouncer: null,
        };
      } else if (nominationPools.rolesUpdated.v9420.is(event)) {
        return {
          ...nominationPools.rolesUpdated.v9420.decode(event),
          stateToggler: null,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.stateChanged.name:
      if (nominationPools.stateChanged.v9280.is(event)) {
        return nominationPools.stateChanged.v9280.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.unbonded.name:
      if (nominationPools.unbonded.v9280.is(event)) {
        return nominationPools.unbonded.v9280.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.unbondingPoolSlashed.name:
      if (nominationPools.unbondingPoolSlashed.v9280.is(event)) {
        return nominationPools.unbondingPoolSlashed.v9280.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.withdrawn.name:
      if (nominationPools.withdrawn.v9280.is(event)) {
        return nominationPools.withdrawn.v9280.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.poolCommissionChangeRateUpdated.name:
      if (nominationPools.poolCommissionChangeRateUpdated.v9420.is(event)) {
        return nominationPools.poolCommissionChangeRateUpdated.v9420.decode(
          event
        );
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.poolCommissionClaimed.name:
      if (nominationPools.poolCommissionClaimed.v9420.is(event)) {
        return nominationPools.poolCommissionClaimed.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.poolCommissionUpdated.name:
      if (nominationPools.poolCommissionUpdated.v9420.is(event)) {
        return nominationPools.poolCommissionUpdated.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.poolMaxCommissionUpdated.name:
      if (nominationPools.poolMaxCommissionUpdated.v9420.is(event)) {
        return nominationPools.poolMaxCommissionUpdated.v9420.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
