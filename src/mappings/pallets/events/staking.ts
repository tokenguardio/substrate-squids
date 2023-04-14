import {
  StakingBondedEvent,
  StakingChilledEvent,
  StakingEraPaidEvent,
  StakingEraPayoutEvent,
  StakingKickedEvent,
  StakingOldSlashingReportDiscardedEvent,
  StakingPayoutStartedEvent,
  StakingRewardEvent,
  StakingRewardedEvent,
  StakingSlashEvent,
  StakingSlashedEvent,
  StakingSolutionStoredEvent,
  StakingStakersElectedEvent,
  StakingStakingElectionEvent,
  StakingStakingElectionFailedEvent,
  StakingUnbondedEvent,
  StakingWithdrawnEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import { bufferToHex } from "../../../utils/utils";
import { UnknownVersionError, UnknownEventError } from "../../../utils/errors";

export function normalizeStakingEventArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Staking.Bonded":
      e = new StakingBondedEvent(ctx, event);
      if (e.isV5) {
        let [stash, amount] = e.asV5;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Chilled":
      e = new StakingChilledEvent(ctx, event);
      if (e.isV8) {
        let stash = e.asV8;
        return {
          stash: bufferToHex(stash),
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.EraPaid":
      e = new StakingEraPaidEvent(ctx, event);
      if (e.isV8) {
        let [eraIndex, validatorPayout, remainder] = e.asV8;
        return {
          eraIndex,
          validatorPayout,
          remainder,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.EraPayout":
      e = new StakingEraPayoutEvent(ctx, event);
      if (e.isV5) {
        let [eraIndex, validatorPayout, remainder] = e.asV5;
        return {
          eraIndex,
          validatorPayout,
          remainder,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Kicked":
      e = new StakingKickedEvent(ctx, event);
      if (e.isV5) {
        let [nominator, stash] = e.asV5;
        return {
          nominator: bufferToHex(nominator),
          stash: bufferToHex(stash),
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.OldSlashingReportDiscarded":
      e = new StakingOldSlashingReportDiscardedEvent(ctx, event);
      if (e.isV5) {
        let sessionIndex = e.asV5;
        return {
          sessionIndex,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.PayoutStarted":
      e = new StakingPayoutStartedEvent(ctx, event);
      if (e.isV8) {
        let [eraIndex, validatorStash] = e.asV8;
        return {
          eraIndex,
          validatorStash: bufferToHex(validatorStash),
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Reward":
      e = new StakingRewardEvent(ctx, event);
      if (e.isV5) {
        let [stash, amount] = e.asV5;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Rewarded":
      e = new StakingRewardedEvent(ctx, event);
      if (e.isV8) {
        let [stash, amount] = e.asV8;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Slash":
      e = new StakingSlashEvent(ctx, event);
      if (e.isV5) {
        let [validator, amount] = e.asV5;
        return {
          validator: bufferToHex(validator),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Slashed":
      e = new StakingSlashedEvent(ctx, event);
      if (e.isV8) {
        let [validator, amount] = e.asV8;
        return {
          validator: bufferToHex(validator),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.SolutionStored":
      e = new StakingSolutionStoredEvent(ctx, event);
      if (e.isV5) {
        let compute = e.asV5;
        return {
          compute,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.StakersElected":
      e = new StakingStakersElectedEvent(ctx, event);
      if (e.isV8) {
        return null;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.StakingElection":
      e = new StakingStakingElectionEvent(ctx, event);
      if (e.isV5) {
        let compute = e.asV5;
        return {
          compute,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.StakingElectionFailed":
      e = new StakingStakingElectionFailedEvent(ctx, event);
      if (e.isV8) {
        return null;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Unbonded":
      e = new StakingUnbondedEvent(ctx, event);
      if (e.isV5) {
        let [stash, amount] = e.asV5;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Withdrawn":
      e = new StakingWithdrawnEvent(ctx, event);
      if (e.isV5) {
        let [stash, amount] = e.asV5;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}