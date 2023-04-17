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
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import { bufferToHex } from "../../../utils/utils";
import { UnknownVersionError, UnknownEventError } from "../../../utils/errors";

export function normalizeNominationPoolsEventsArgs(
  ctx: ChainContext,
  event: Event
) {
  let e;
  switch (event.name) {
    case "NominationPools.Bonded":
      e = new NominationPoolsBondedEvent(ctx, event);
      if (e.isV20) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.Created":
      e = new NominationPoolsCreatedEvent(ctx, event);
      if (e.isV20) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.Destroyed":
      e = new NominationPoolsDestroyedEvent(ctx, event);
      if (e.isV20) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.MemberRemoved":
      e = new NominationPoolsMemberRemovedEvent(ctx, event);
      if (e.isV20) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.PaidOut":
      e = new NominationPoolsPaidOutEvent(ctx, event);
      if (e.isV20) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.PoolSlashed":
      e = new NominationPoolsPoolSlashedEvent(ctx, event);
      if (e.isV30) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.RolesUpdated":
      e = new NominationPoolsRolesUpdatedEvent(ctx, event);
      if (e.isV20) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.StateChanged":
      e = new NominationPoolsStateChangedEvent(ctx, event);
      if (e.isV20) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.Unbonded":
      e = new NominationPoolsUnbondedEvent(ctx, event);
      if (e.isV20) {
        const args = e.asV20;
        return {
          member: bufferToHex(args.member),
          poolId: args.poolId,
          balance: args.amount,
          points: null,
          era: null,
        };
      } else if (e.isV30) {
        const args = e.asV30;
        return {
          ...event.args,
          member: bufferToHex(args.member),
          era: null,
        };
      } else if (e.isV38) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.UnbondingPoolSlashed":
      e = new NominationPoolsUnbondingPoolSlashedEvent(ctx, event);
      if (e.isV30) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.Withdrawn":
      e = new NominationPoolsWithdrawnEvent(ctx, event);
      if (e.isV20) {
        const args = e.asV20;
        return {
          member: bufferToHex(args.member),
          poolId: args.poolId,
          balance: args.amount,
          points: null,
        };
      } else if (e.isV30) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
