import {
  StakingBondedEvent,
  StakingChilledEvent,
  StakingEraPaidEvent,
  StakingEraPayoutEvent,
  StakingForceEraEvent,
  StakingKickedEvent,
  StakingOldSlashingReportDiscardedEvent,
  StakingPayoutStartedEvent,
  StakingRewardEvent,
  StakingRewardedEvent,
  StakingSlashEvent,
  StakingSlashReportedEvent,
  StakingSlashedEvent,
  StakingSolutionStoredEvent,
  StakingStakersElectedEvent,
  StakingStakingElectionEvent,
  StakingStakingElectionFailedEvent,
  StakingUnbondedEvent,
  StakingValidatorPrefsSetEvent,
  StakingWithdrawnEvent,
} from "../../types/events";
import { ChainContext, Event } from "../../types/support";
import { bufferToHex } from "../../utils/utils";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../utils/errors";

export function normalizeStakingEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Staking.Bonded":
      e = new StakingBondedEvent(ctx, event);
      if (e.isV1051) {
        let [stash, amount] = e.asV1051;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Chilled":
      e = new StakingChilledEvent(ctx, event);
      if (e.isV9090) {
        let stash = e.asV9090;
        return {
          stash: bufferToHex(stash),
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.EraPaid":
      e = new StakingEraPaidEvent(ctx, event);
      if (e.isV9090) {
        let [eraIndex, validatorPayout, remainder] = e.asV9090;
        return {
          eraIndex,
          validatorPayout,
          remainder,
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.EraPayout":
      e = new StakingEraPayoutEvent(ctx, event);
      if (e.isV1062) {
        let [eraIndex, validatorPayout, remainder] = e.asV1062;
        return {
          eraIndex,
          validatorPayout,
          remainder,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.ForceEra":
      e = new StakingForceEraEvent(ctx, event);
      if (e.isV9370) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Kicked":
      e = new StakingKickedEvent(ctx, event);
      if (e.isV2028) {
        let [nominator, stash] = e.asV2028;
        return {
          nominator: bufferToHex(nominator),
          stash: bufferToHex(stash),
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.OldSlashingReportDiscarded":
      e = new StakingOldSlashingReportDiscardedEvent(ctx, event);
      if (e.isV1020) {
        let sessionIndex = e.asV1020;
        return {
          sessionIndex,
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.PayoutStarted":
      e = new StakingPayoutStartedEvent(ctx, event);
      if (e.isV9090) {
        let [eraIndex, validatorStash] = e.asV9090;
        return {
          eraIndex,
          validatorStash: bufferToHex(validatorStash),
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Reward":
      e = new StakingRewardEvent(ctx, event);
      if (e.isV1020) {
        let [reward, remainder] = e.asV1020;
        return {
          reward,
          remainder,
        };
      } else if (e.isV1050) {
        let [stash, amount] = e.asV1050;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Rewarded":
      e = new StakingRewardedEvent(ctx, event);
      if (e.isV9090) {
        let [stash, amount] = e.asV9090;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Slash":
      e = new StakingSlashEvent(ctx, event);
      if (e.isV1020) {
        let [validator, amount] = e.asV1020;
        return {
          validator: bufferToHex(validator),
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.SlashReported":
      e = new StakingSlashReportedEvent(ctx, event);
      if (e.isV9350) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Slashed":
      e = new StakingSlashedEvent(ctx, event);
      if (e.isV9090) {
        let [validator, amount] = e.asV9090;
        return {
          staker: bufferToHex(validator),
          amount,
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.SolutionStored":
      e = new StakingSolutionStoredEvent(ctx, event);
      if (e.isV2005) {
        let electionCompute = e.asV2005;
        return {
          electionCompute,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.StakersElected":
      e = new StakingStakersElectedEvent(ctx, event);
      if (e.isV9090) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.StakingElection":
      e = new StakingStakingElectionEvent(ctx, event);
      if (e.isV1058) {
        let electionCompute = e.asV1058;
        return {
          electionCompute,
        };
      } else if (e.isV2030) {
        return {
          electionCompute: null,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.StakingElectionFailed":
      e = new StakingStakingElectionFailedEvent(ctx, event);
      if (e.isV9050) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Unbonded":
      e = new StakingUnbondedEvent(ctx, event);
      if (e.isV1051) {
        let [stash, amount] = e.asV1051;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.ValidatorPrefsSet":
      e = new StakingValidatorPrefsSetEvent(ctx, event);
      if (e.isV9200) {
        let [stash, prefs] = e.asV9200;
        return {
          stash: bufferToHex(stash),
          prefs,
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Withdrawn":
      e = new StakingWithdrawnEvent(ctx, event);
      if (e.isV1051) {
        let [stash, amount] = e.asV1051;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else if (e.isV9300) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
