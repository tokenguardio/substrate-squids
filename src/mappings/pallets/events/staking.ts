import { staking } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeStakingEventsArgs(event: Event): any {
  switch (event.name) {
    case staking.bonded.name:
      if (staking.bonded.v12.is(event)) {
        let [stash, amount] = staking.bonded.v12.decode(event);
        return { stash, amount };
      } else if (staking.bonded.v58.is(event)) {
        return staking.bonded.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case staking.chilled.name:
      if (staking.chilled.v12.is(event)) {
        return { stash: staking.chilled.v12.decode(event) };
      } else if (staking.chilled.v58.is(event)) {
        return staking.chilled.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case staking.eraPaid.name:
      if (staking.eraPaid.v12.is(event)) {
        let [eraIndex, validatorPayout, remainder] =
          staking.eraPaid.v12.decode(event);
        return { eraIndex, validatorPayout, remainder };
      } else if (staking.eraPaid.v58.is(event)) {
        return staking.eraPaid.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.forceEra.name:
      if (staking.forceEra.v59.is(event)) {
        return staking.forceEra.v59.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.kicked.name:
      if (staking.kicked.v12.is(event)) {
        const [nominator, stash] = staking.kicked.v12.decode(event);
        return { nominator, stash };
      } else if (staking.kicked.v58.is(event)) {
        return staking.kicked.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.oldSlashingReportDiscarded.name:
      if (staking.oldSlashingReportDiscarded.v12.is(event)) {
        const sessionIndex =
          staking.oldSlashingReportDiscarded.v12.decode(event);
        return { sessionIndex };
      } else if (staking.oldSlashingReportDiscarded.v58.is(event)) {
        return staking.oldSlashingReportDiscarded.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.payoutStarted.name:
      if (staking.payoutStarted.v12.is(event)) {
        const [eraIndex, validatorStash] =
          staking.payoutStarted.v12.decode(event);
        return { eraIndex, validatorStash };
      } else if (staking.payoutStarted.v58.is(event)) {
        return staking.payoutStarted.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.rewarded.name:
      if (staking.rewarded.v12.is(event)) {
        const [stash, amount] = staking.rewarded.v12.decode(event);
        return { stash, amount, dest: null };
      } else if (staking.rewarded.v58.is(event)) {
        return { dest: null, ...staking.rewarded.v58.decode(event) };
      } else if (staking.rewarded.v73.is(event)) {
        return staking.rewarded.v73.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.slashReported.name:
      if (staking.slashReported.v59.is(event)) {
        return staking.slashReported.v59.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.slashed.name:
      if (staking.slashed.v12.is(event)) {
        const [validator, amount] = staking.slashed.v12.decode(event);
        return { validator, amount };
      } else if (staking.slashed.v58.is(event)) {
        return staking.slashed.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.stakersElected.name:
      if (staking.stakersElected.v12.is(event)) {
        return staking.stakersElected.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case staking.stakingElectionFailed.name:
      if (staking.stakingElectionFailed.v12.is(event)) {
        return staking.stakingElectionFailed.v12.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.unbonded.name:
      if (staking.unbonded.v12.is(event)) {
        const [stash, amount] = staking.unbonded.v12.decode(event);
        return { stash, amount };
      } else if (staking.unbonded.v58.is(event)) {
        return staking.unbonded.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.validatorPrefsSet.name:
      if (staking.validatorPrefsSet.v39.is(event)) {
        const [stash, prefs] = staking.validatorPrefsSet.v39.decode(event);
        return { stash, prefs };
      } else if (staking.validatorPrefsSet.v58.is(event)) {
        return staking.validatorPrefsSet.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.withdrawn.name:
      if (staking.withdrawn.v12.is(event)) {
        const [stash, amount] = staking.withdrawn.v12.decode(event);
        return { stash, amount };
      } else if (staking.withdrawn.v58.is(event)) {
        return staking.withdrawn.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.snapshotVotersSizeExceeded.name:
      if (staking.snapshotVotersSizeExceeded.v73.is(event)) {
        return staking.snapshotVotersSizeExceeded.v73.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.snapshotTargetsSizeExceeded.name:
      if (staking.snapshotTargetsSizeExceeded.v73.is(event)) {
        return staking.snapshotTargetsSizeExceeded.v73.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
