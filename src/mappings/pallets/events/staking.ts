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
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeStakingEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Staking.Bonded":
      e = new StakingBondedEvent(ctx, event);
      if (e.isV38) {
        let [stash, amount] = e.asV38;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Chilled":
      e = new StakingChilledEvent(ctx, event);
      if (e.isV53) {
        let stash = e.asV53;
        return {
          stash: bufferToHex(stash),
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.EraPaid":
      e = new StakingEraPaidEvent(ctx, event);
      if (e.isV53) {
        let [eraIndex, validatorPayout, remainder] = e.asV53;
        return {
          eraIndex,
          validatorPayout,
          remainder,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.EraPayout":
      e = new StakingEraPayoutEvent(ctx, event);
      if (e.isV38) {
        let [eraIndex, validatorPayout, remainder] = e.asV38;
        return {
          eraIndex,
          validatorPayout,
          remainder,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Kicked":
      e = new StakingKickedEvent(ctx, event);
      if (e.isV53) {
        let [nominator, stash] = e.asV53;
        return {
          nominator: bufferToHex(nominator),
          stash: bufferToHex(stash),
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.OldSlashingReportDiscarded":
      e = new StakingOldSlashingReportDiscardedEvent(ctx, event);
      if (e.isV31) {
        let sessionIndex = e.asV31;
        return {
          sessionIndex,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.PayoutStarted":
      e = new StakingPayoutStartedEvent(ctx, event);
      if (e.isV53) {
        let [eraIndex, validatorStash] = e.asV53;
        return {
          eraIndex,
          validatorStash: bufferToHex(validatorStash),
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Reward":
      e = new StakingRewardEvent(ctx, event);
      if (e.isV31) {
        let [balance, remainder] = e.asV38;
        return {
          balance,
          remainder,
          stash: null,
          amount: null,
        };
      } else if (e.isV38) {
        let [stash, amount] = e.asV38;
        return {
          balance: null,
          remainder: null,
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Rewarded":
      e = new StakingRewardedEvent(ctx, event);
      if (e.isV53) {
        let [stash, amount] = e.asV53;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Slash":
      e = new StakingSlashEvent(ctx, event);
      if (e.isV31) {
        let [validator, amount] = e.asV31;
        return {
          validator: bufferToHex(validator),
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Slashed":
      e = new StakingSlashedEvent(ctx, event);
      if (e.isV53) {
        let [validator, amount] = e.asV53;
        return {
          validator: bufferToHex(validator),
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.SolutionStored":
      e = new StakingSolutionStoredEvent(ctx, event);
      if (e.isV38) {
        let electionCompute = e.asV38;
        return {
          electionCompute,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.StakersElected":
      e = new StakingStakersElectedEvent(ctx, event);
      if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.StakingElection":
      e = new StakingStakingElectionEvent(ctx, event);
      if (e.isV38) {
        let electionCompute = e.asV38;
        return {
          electionCompute,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.StakingElectionFailed":
      e = new StakingStakingElectionFailedEvent(ctx, event);
      if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Unbonded":
      e = new StakingUnbondedEvent(ctx, event);
      if (e.isV38) {
        let [stash, amount] = e.asV38;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Staking.Withdrawn":
      e = new StakingWithdrawnEvent(ctx, event);
      if (e.isV38) {
        let [stash, amount] = e.asV38;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
