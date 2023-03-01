import {
  StakingBondedEvent,
  StakingChilledEvent,
  StakingEraPaidEvent,
  StakingKickedEvent,
  StakingOldSlashingReportDiscardedEvent,
  StakingPayoutStartedEvent,
  StakingRewardedEvent,
  StakingSlashedEvent,
  StakingStakersElectedEvent,
  StakingStakingElectionFailedEvent,
  StakingUnbondedEvent,
  StakingValidatorPrefsSetEvent,
  StakingWithdrawnEvent,
} from "../../types/events";
import { ChainContext, Event } from "../../types/support";
import { bufferToHex } from "../../utils/utils";
import { UnknownVersionError, UnknownEventError } from "../../utils/errors";

export function normalizeStakingEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Staking.Bonded":
      e = new StakingBondedEvent(ctx, event);
      if (e.isV12) {
        let [stash, amount] = e.asV12;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Chilled":
      e = new StakingChilledEvent(ctx, event);
      if (e.isV12) {
        let stash = e.asV12;
        return {
          stash: bufferToHex(stash),
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.EraPaid":
      e = new StakingEraPaidEvent(ctx, event);
      if (e.isV12) {
        let [eraIndex, validatorPayout, remainder] = e.asV12;
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
      if (e.isV12) {
        let [nominator, stash] = e.asV12;
        return {
          nominator: bufferToHex(nominator),
          stash: bufferToHex(stash),
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.OldSlashingReportDiscarded":
      e = new StakingOldSlashingReportDiscardedEvent(ctx, event);
      if (e.isV12) {
        let sessionIndex = e.asV12;
        return {
          sessionIndex,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.PayoutStarted":
      e = new StakingPayoutStartedEvent(ctx, event);
      if (e.isV12) {
        let [eraIndex, validatorStash] = e.asV12;
        return {
          eraIndex,
          validatorStash: bufferToHex(validatorStash),
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Rewarded":
      e = new StakingRewardedEvent(ctx, event);
      if (e.isV12) {
        let [stash, amount] = e.asV12;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Slashed":
      e = new StakingSlashedEvent(ctx, event);
      if (e.isV12) {
        let [validator, amount] = e.asV12;
        return {
          validator: bufferToHex(validator),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.StakersElected":
      e = new StakingStakersElectedEvent(ctx, event);
      if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.StakingElectionFailed":
      e = new StakingStakingElectionFailedEvent(ctx, event);
      if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Unbonded":
      e = new StakingUnbondedEvent(ctx, event);
      if (e.isV12) {
        let [stash, amount] = e.asV12;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.ValidatorPrefsSet":
      e = new StakingValidatorPrefsSetEvent(ctx, event);
      if (e.isV39) {
        let [stash, prefs] = e.asV39;
        return {
          stash: bufferToHex(stash),
          prefs,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Withdrawn":
      e = new StakingWithdrawnEvent(ctx, event);
      if (e.isV12) {
        let [stash, amount] = e.asV12;
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
