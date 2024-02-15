import {
  DappStakingBonusRewardEvent,
  DappStakingClaimedUnlockedEvent,
  DappStakingDAppOwnerChangedEvent,
  DappStakingDAppRegisteredEvent,
  DappStakingDAppRewardEvent,
  DappStakingDAppRewardDestinationUpdatedEvent,
  DappStakingDAppUnregisteredEvent,
  DappStakingExpiredEntriesRemovedEvent,
  DappStakingForceEvent,
  DappStakingLockedEvent,
  DappStakingMaintenanceModeEvent,
  DappStakingNewEraEvent,
  DappStakingNewSubperiodEvent,
  DappStakingRelockEvent,
  DappStakingRewardEvent,
  DappStakingStakeEvent,
  DappStakingUnlockingEvent,
  DappStakingUnstakeEvent,
  DappStakingUnstakeFromUnregisteredEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeDappStakingEventsArgs(
  ctx: ChainContext,
  event: Event
) {
  let e;
  switch (event.name) {
    case "DappStaking.BonusReward":
      e = new DappStakingBonusRewardEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.ClaimedUnlocked":
      e = new DappStakingClaimedUnlockedEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.DAppOwnerChanged":
      e = new DappStakingDAppOwnerChangedEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.DAppRegistered":
      e = new DappStakingDAppRegisteredEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.DAppReward":
      e = new DappStakingDAppRewardEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.DAppRewardDestinationUpdated":
      e = new DappStakingDAppRewardDestinationUpdatedEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.DAppUnregistered":
      e = new DappStakingDAppUnregisteredEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.ExpiredEntriesRemoved":
      e = new DappStakingExpiredEntriesRemovedEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.Force":
      e = new DappStakingForceEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.Locked":
      e = new DappStakingLockedEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.MaintenanceMode":
      e = new DappStakingMaintenanceModeEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.NewEra":
      e = new DappStakingNewEraEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.NewSubperiod":
      e = new DappStakingNewSubperiodEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.Relock":
      e = new DappStakingRelockEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.Reward":
      e = new DappStakingRewardEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.Stake":
      e = new DappStakingStakeEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.Unlocking":
      e = new DappStakingUnlockingEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.Unstake":
      e = new DappStakingUnstakeEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappStaking.UnstakeFromUnregistered":
      e = new DappStakingUnstakeFromUnregisteredEvent(ctx, event);
      if (e.isV79) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
