import { nominationPools } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeNominationPoolsEventsArgs(event: Event): any {
  switch (event.name) {
    case nominationPools.bonded.name:
      if (nominationPools.bonded.v39.is(event)) {
        return nominationPools.bonded.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.created.name:
      if (nominationPools.created.v39.is(event)) {
        return nominationPools.created.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.destroyed.name:
      if (nominationPools.destroyed.v39.is(event)) {
        return nominationPools.destroyed.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.memberRemoved.name:
      if (nominationPools.memberRemoved.v39.is(event)) {
        return nominationPools.memberRemoved.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.paidOut.name:
      if (nominationPools.paidOut.v39.is(event)) {
        return nominationPools.paidOut.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.poolCommissionChangeRateUpdated.name:
      if (nominationPools.poolCommissionChangeRateUpdated.v68.is(event)) {
        return nominationPools.poolCommissionChangeRateUpdated.v68.decode(
          event
        );
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.poolCommissionClaimed.name:
      if (nominationPools.poolCommissionClaimed.v68.is(event)) {
        return nominationPools.poolCommissionClaimed.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.poolCommissionUpdated.name:
      if (nominationPools.poolCommissionUpdated.v68.is(event)) {
        return nominationPools.poolCommissionUpdated.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.poolMaxCommissionUpdated.name:
      if (nominationPools.poolMaxCommissionUpdated.v68.is(event)) {
        return nominationPools.poolMaxCommissionUpdated.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.poolSlashed.name:
      if (nominationPools.poolSlashed.v39.is(event)) {
        return nominationPools.poolSlashed.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.rolesUpdated.name:
      if (nominationPools.rolesUpdated.v39.is(event)) {
        return nominationPools.rolesUpdated.v39.decode(event);
      } else if (nominationPools.rolesUpdated.v68.is(event)) {
        return nominationPools.rolesUpdated.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.stateChanged.name:
      if (nominationPools.stateChanged.v39.is(event)) {
        return nominationPools.stateChanged.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.unbonded.name:
      if (nominationPools.unbonded.v39.is(event)) {
        return nominationPools.unbonded.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.unbondingPoolSlashed.name:
      if (nominationPools.unbondingPoolSlashed.v39.is(event)) {
        return nominationPools.unbondingPoolSlashed.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case nominationPools.withdrawn.name:
      if (nominationPools.withdrawn.v39.is(event)) {
        return nominationPools.withdrawn.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
