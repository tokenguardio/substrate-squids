import { staking } from "../../../types/events";
import { Event } from "./../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeStakingEventsArgs(event: Event): any {
  switch (event.name) {
    case staking.bonded.name:
      if (staking.bonded.v0.is(event)) {
        const [stash, amount] = staking.bonded.v0.decode(event);
        return { stash, amount };
      } else if (staking.bonded.v9300.is(event)) {
        return staking.bonded.v9300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.chilled.name:
      if (staking.chilled.v9090.is(event)) {
        return { stash: staking.chilled.v9090.decode(event) };
      } else if (staking.chilled.v9300.is(event)) {
        return staking.chilled.v9300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.eraPaid.name:
      if (staking.eraPaid.v9090.is(event)) {
        const [eraIndex, validatorPayout, remainder] =
          staking.eraPaid.v9090.decode(event);
        return { eraIndex, validatorPayout, remainder };
      } else if (staking.eraPaid.v9300.is(event)) {
        return staking.eraPaid.v9300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.eraPayout.name:
      if (staking.eraPayout.v0.is(event)) {
        const [eraIndex, validatorPayout, remainder] =
          staking.eraPayout.v0.decode(event);
        return { eraIndex, validatorPayout, remainder };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.forceEra.name:
      if (staking.forceEra.v9370.is(event)) {
        return staking.forceEra.v9370.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.kicked.name:
      if (staking.kicked.v28.is(event)) {
        const [nominator, stash] = staking.kicked.v28.decode(event);
        return { nominator, stash };
      } else if (staking.kicked.v9300.is(event)) {
        return staking.kicked.v9300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.oldSlashingReportDiscarded.name:
      if (staking.oldSlashingReportDiscarded.v0.is(event)) {
        return {
          sessionIndex: staking.oldSlashingReportDiscarded.v0.decode(event),
        };
      } else if (staking.oldSlashingReportDiscarded.v9300.is(event)) {
        return staking.oldSlashingReportDiscarded.v9300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.payoutStarted.name:
      if (staking.payoutStarted.v9090.is(event)) {
        const [eraIndex, validatorStash] =
          staking.payoutStarted.v9090.decode(event);
        return { eraIndex, validatorStash };
      } else if (staking.payoutStarted.v9300.is(event)) {
        return staking.payoutStarted.v9300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.reward.name:
      if (staking.reward.v0.is(event)) {
        const [stash, amount] = staking.reward.v0.decode(event);
        return { stash, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.rewarded.name:
      if (staking.rewarded.v9090.is(event)) {
        const [stash, amount] = staking.rewarded.v9090.decode(event);
        return { stash, amount };
      } else if (staking.rewarded.v9300.is(event)) {
        return staking.rewarded.v9300.decode(event);
      } else if (staking.rewarded.v1001002.is(event)) {
        return staking.rewarded.v1001002.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case staking.slash.name:
      if (staking.slash.v0.is(event)) {
        const [validator, amount] = staking.slash.v0.decode(event);
        return { validator, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.slashReported.name:
      if (staking.slashReported.v9360.is(event)) {
        return staking.slashReported.v9360.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.slashed.name:
      if (staking.slashed.v9090.is(event)) {
        const [validator, amount] = staking.slashed.v9090.decode(event);
        return { staker: validator, amount };
      } else if (staking.slashed.v9300.is(event)) {
        return staking.slashed.v9300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.snapshotTargetsSizeExceeded.name:
      if (staking.snapshotTargetsSizeExceeded.v1000001.is(event)) {
        return staking.snapshotTargetsSizeExceeded.v1000001.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.snapshotVotersSizeExceeded.name:
      if (staking.snapshotVotersSizeExceeded.v1000001.is(event)) {
        return staking.snapshotVotersSizeExceeded.v1000001.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.solutionStored.name:
      if (staking.solutionStored.v0.is(event)) {
        return { electionCompute: staking.solutionStored.v0.decode(event) };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.stakersElected.name:
      if (staking.stakersElected.v9090.is(event)) {
        return staking.stakersElected.v9090.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.stakingElection.name:
      if (staking.stakingElection.v0.is(event)) {
        return staking.stakingElection.v0.decode(event);
      } else if (staking.stakingElection.v30.is(event)) {
        return staking.stakingElection.v30.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.stakingElectionFailed.name:
      if (staking.stakingElectionFailed.v9050.is(event)) {
        return staking.stakingElectionFailed.v9050.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.unbonded.name:
      if (staking.unbonded.v0.is(event)) {
        const [stash, amount] = staking.unbonded.v0.decode(event);
        return { stash, amount };
      } else if (staking.unbonded.v9300.is(event)) {
        return staking.unbonded.v9300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.validatorPrefsSet.name:
      if (staking.validatorPrefsSet.v9200.is(event)) {
        const [stash, prefs] = staking.validatorPrefsSet.v9200.decode(event);
        return { stash, prefs };
      } else if (staking.validatorPrefsSet.v9300.is(event)) {
        return staking.validatorPrefsSet.v9300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.withdrawn.name:
      if (staking.withdrawn.v0.is(event)) {
        const [stash, amount] = staking.withdrawn.v0.decode(event);
        return { stash, amount };
      } else if (staking.withdrawn.v9300.is(event)) {
        return staking.withdrawn.v9300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
