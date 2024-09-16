import { vtokenVoting } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeVtokenVotingEventsArgs(event: Event): any {
  switch (event.name) {
    case vtokenVoting.voted.name:
      if (vtokenVoting.voted.v982.is(event)) {
        return vtokenVoting.voted.v982.decode(event);
      } else if (vtokenVoting.voted.v990.is(event)) {
        return vtokenVoting.voted.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.unlocked.name:
      if (vtokenVoting.unlocked.v982.is(event)) {
        return vtokenVoting.unlocked.v982.decode(event);
      } else if (vtokenVoting.unlocked.v990.is(event)) {
        return vtokenVoting.unlocked.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.delegatorVoteRemoved.name:
      if (vtokenVoting.delegatorVoteRemoved.v982.is(event)) {
        return vtokenVoting.delegatorVoteRemoved.v982.decode(event);
      } else if (vtokenVoting.delegatorVoteRemoved.v990.is(event)) {
        return vtokenVoting.delegatorVoteRemoved.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.delegatorRoleSet.name:
      if (vtokenVoting.delegatorRoleSet.v982.is(event)) {
        return vtokenVoting.delegatorRoleSet.v982.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.referendumInfoCreated.name:
      if (vtokenVoting.referendumInfoCreated.v982.is(event)) {
        return vtokenVoting.referendumInfoCreated.v982.decode(event);
      } else if (vtokenVoting.referendumInfoCreated.v990.is(event)) {
        return vtokenVoting.referendumInfoCreated.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.referendumInfoSet.name:
      if (vtokenVoting.referendumInfoSet.v982.is(event)) {
        return vtokenVoting.referendumInfoSet.v982.decode(event);
      } else if (vtokenVoting.referendumInfoSet.v990.is(event)) {
        return vtokenVoting.referendumInfoSet.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.voteLockingPeriodSet.name:
      if (vtokenVoting.voteLockingPeriodSet.v982.is(event)) {
        return vtokenVoting.voteLockingPeriodSet.v982.decode(event);
      } else if (vtokenVoting.voteLockingPeriodSet.v990.is(event)) {
        return vtokenVoting.voteLockingPeriodSet.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.undecidingTimeoutSet.name:
      if (vtokenVoting.undecidingTimeoutSet.v982.is(event)) {
        return vtokenVoting.undecidingTimeoutSet.v982.decode(event);
      } else if (vtokenVoting.undecidingTimeoutSet.v990.is(event)) {
        return vtokenVoting.undecidingTimeoutSet.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.referendumKilled.name:
      if (vtokenVoting.referendumKilled.v982.is(event)) {
        return vtokenVoting.referendumKilled.v982.decode(event);
      } else if (vtokenVoting.referendumKilled.v990.is(event)) {
        return vtokenVoting.referendumKilled.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.voteNotified.name:
      if (vtokenVoting.voteNotified.v982.is(event)) {
        return vtokenVoting.voteNotified.v982.decode(event);
      } else if (vtokenVoting.voteNotified.v990.is(event)) {
        return vtokenVoting.voteNotified.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.delegatorVoteRemovedNotified.name:
      if (vtokenVoting.delegatorVoteRemovedNotified.v982.is(event)) {
        return vtokenVoting.delegatorVoteRemovedNotified.v982.decode(event);
      } else if (vtokenVoting.delegatorVoteRemovedNotified.v990.is(event)) {
        return vtokenVoting.delegatorVoteRemovedNotified.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.responseReceived.name:
      if (vtokenVoting.responseReceived.v982.is(event)) {
        return vtokenVoting.responseReceived.v982.decode(event);
      } else if (vtokenVoting.responseReceived.v10000.is(event)) {
        return vtokenVoting.responseReceived.v10000.decode(event);
      } else if (vtokenVoting.responseReceived.v11000.is(event)) {
        return vtokenVoting.responseReceived.v11000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.delegatorAdded.name:
      if (vtokenVoting.delegatorAdded.v990.is(event)) {
        return vtokenVoting.delegatorAdded.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case vtokenVoting.voteCapRatioSet.name:
      if (vtokenVoting.voteCapRatioSet.v990.is(event)) {
        return vtokenVoting.voteCapRatioSet.v990.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
