import { dappStaking as dsEvents } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeDappStakingEventsArgs(event: Event): any {
  switch (event.name) {
    case dsEvents.bonusReward.name:
      if (dsEvents.bonusReward.v79.is(event)) {
        return dsEvents.bonusReward.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.claimedUnlocked.name:
      if (dsEvents.claimedUnlocked.v79.is(event)) {
        return dsEvents.claimedUnlocked.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.dAppOwnerChanged.name:
      if (dsEvents.dAppOwnerChanged.v79.is(event)) {
        return dsEvents.dAppOwnerChanged.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.dAppRegistered.name:
      if (dsEvents.dAppRegistered.v79.is(event)) {
        return dsEvents.dAppRegistered.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.dAppReward.name:
      if (dsEvents.dAppReward.v79.is(event)) {
        return dsEvents.dAppReward.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.dAppRewardDestinationUpdated.name:
      if (dsEvents.dAppRewardDestinationUpdated.v79.is(event)) {
        return dsEvents.dAppRewardDestinationUpdated.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.dAppUnregistered.name:
      if (dsEvents.dAppUnregistered.v79.is(event)) {
        return dsEvents.dAppUnregistered.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.expiredEntriesRemoved.name:
      if (dsEvents.expiredEntriesRemoved.v79.is(event)) {
        return dsEvents.expiredEntriesRemoved.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.force.name:
      if (dsEvents.force.v79.is(event)) {
        return dsEvents.force.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.locked.name:
      if (dsEvents.locked.v79.is(event)) {
        return dsEvents.locked.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.maintenanceMode.name:
      if (dsEvents.maintenanceMode.v79.is(event)) {
        return dsEvents.maintenanceMode.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.newEra.name:
      if (dsEvents.newEra.v79.is(event)) {
        return dsEvents.newEra.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.newSubperiod.name:
      if (dsEvents.newSubperiod.v79.is(event)) {
        return dsEvents.newSubperiod.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.relock.name:
      if (dsEvents.relock.v79.is(event)) {
        return dsEvents.relock.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.reward.name:
      if (dsEvents.reward.v79.is(event)) {
        return dsEvents.reward.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.stake.name:
      if (dsEvents.stake.v79.is(event)) {
        return dsEvents.stake.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.unlocking.name:
      if (dsEvents.unlocking.v79.is(event)) {
        return dsEvents.unlocking.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.unstake.name:
      if (dsEvents.unstake.v79.is(event)) {
        return dsEvents.unstake.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dsEvents.unstakeFromUnregistered.name:
      if (dsEvents.unstakeFromUnregistered.v79.is(event)) {
        return dsEvents.unstakeFromUnregistered.v79.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
