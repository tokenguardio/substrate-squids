import {
  NominationPoolsBondedEvent,
  NominationPoolsCreatedEvent,
  NominationPoolsDestroyedEvent,
  NominationPoolsMemberRemovedEvent,
  NominationPoolsPaidOutEvent,
  NominationPoolsPoolSlashedEvent,
  NominationPoolsRolesUpdatedEvent,
  NominationPoolsStateChangedEvent,
  NominationPoolsUnbondedEvent,
  NominationPoolsUnbondingPoolSlashedEvent,
  NominationPoolsWithdrawnEvent,
  NominationPoolsPoolCommissionChangeRateUpdatedEvent,
  NominationPoolsPoolCommissionClaimedEvent,
  NominationPoolsPoolCommissionUpdatedEvent,
  NominationPoolsPoolMaxCommissionUpdatedEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import { bufferToHex } from "../../../utils/utils";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeNominationPoolsEventsArgs(
  ctx: ChainContext,
  event: Event
) {
  let e;
  switch (event.name) {
    case "NominationPools.Bonded":
      e = new NominationPoolsBondedEvent(ctx, event);
      if (e.isV9220) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.Created":
      e = new NominationPoolsCreatedEvent(ctx, event);
      if (e.isV9220) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.Destroyed":
      e = new NominationPoolsDestroyedEvent(ctx, event);
      if (e.isV9220) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.MemberRemoved":
      e = new NominationPoolsMemberRemovedEvent(ctx, event);
      if (e.isV9220) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.PaidOut":
      e = new NominationPoolsPaidOutEvent(ctx, event);
      if (e.isV9220) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.PoolSlashed":
      e = new NominationPoolsPoolSlashedEvent(ctx, event);
      if (e.isV9250) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.RolesUpdated":
      e = new NominationPoolsRolesUpdatedEvent(ctx, event);
      if (e.isV9220) {
        return { ...event.args, bouncer: null };
      } else if (e.isV9230) {
        return { ...event.args, bouncer: null };
      } else if (e.isV9420) {
        return { ...event.args, stateToggler: null };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.StateChanged":
      e = new NominationPoolsStateChangedEvent(ctx, event);
      if (e.isV9220) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.Unbonded":
      e = new NominationPoolsUnbondedEvent(ctx, event);
      if (e.isV9220) {
        const args = e.asV9220;
        return {
          member: bufferToHex(args.member),
          poolId: args.poolId,
          balance: args.amount,
          points: null,
          era: null,
        };
      } else if (e.isV9250) {
        const args = e.asV9250;
        return {
          ...event.args,
          member: bufferToHex(args.member),
          era: null,
        };
      } else if (e.isV9271) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.PoolCommissionChangeRateUpdated":
      e = new NominationPoolsPoolCommissionChangeRateUpdatedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.PoolCommissionClaimed":
      e = new NominationPoolsPoolCommissionClaimedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.PoolCommissionUpdated":
      e = new NominationPoolsPoolCommissionUpdatedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.PoolMaxCommissionUpdated":
      e = new NominationPoolsPoolMaxCommissionUpdatedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.UnbondingPoolSlashed":
      e = new NominationPoolsUnbondingPoolSlashedEvent(ctx, event);
      if (e.isV9250) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "NominationPools.Withdrawn":
      e = new NominationPoolsWithdrawnEvent(ctx, event);
      if (e.isV9220) {
        const args = e.asV9220;
        return {
          member: bufferToHex(args.member),
          poolId: args.poolId,
          balance: args.amount,
          points: null,
        };
      } else if (e.isV9250) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
