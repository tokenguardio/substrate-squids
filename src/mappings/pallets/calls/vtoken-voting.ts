import { vtokenVoting } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeVtokenVotingCallsArgs(call: Call): any {
  switch (call.name) {
    case vtokenVoting.vote.name:
      if (vtokenVoting.vote.v982.is(call)) {
        return vtokenVoting.vote.v982.decode(call);
      } else if (vtokenVoting.vote.v990.is(call)) {
        return vtokenVoting.vote.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.unlock.name:
      if (vtokenVoting.unlock.v982.is(call)) {
        return vtokenVoting.unlock.v982.decode(call);
      } else if (vtokenVoting.unlock.v990.is(call)) {
        return vtokenVoting.unlock.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.removeDelegatorVote.name:
      if (vtokenVoting.removeDelegatorVote.v982.is(call)) {
        return vtokenVoting.removeDelegatorVote.v982.decode(call);
      } else if (vtokenVoting.removeDelegatorVote.v990.is(call)) {
        return vtokenVoting.removeDelegatorVote.v990.decode(call);
      } else if (vtokenVoting.removeDelegatorVote.v12001.is(call)) {
        return vtokenVoting.removeDelegatorVote.v12001.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.killReferendum.name:
      if (vtokenVoting.killReferendum.v982.is(call)) {
        return vtokenVoting.killReferendum.v982.decode(call);
      } else if (vtokenVoting.killReferendum.v990.is(call)) {
        return vtokenVoting.killReferendum.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.setDelegatorRole.name:
      if (vtokenVoting.setDelegatorRole.v982.is(call)) {
        return vtokenVoting.setDelegatorRole.v982.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.setReferendumStatus.name:
      if (vtokenVoting.setReferendumStatus.v982.is(call)) {
        return vtokenVoting.setReferendumStatus.v982.decode(call);
      } else if (vtokenVoting.setReferendumStatus.v990.is(call)) {
        return vtokenVoting.setReferendumStatus.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.setVoteLockingPeriod.name:
      if (vtokenVoting.setVoteLockingPeriod.v982.is(call)) {
        return vtokenVoting.setVoteLockingPeriod.v982.decode(call);
      } else if (vtokenVoting.setVoteLockingPeriod.v990.is(call)) {
        return vtokenVoting.setVoteLockingPeriod.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.setUndecidingTimeout.name:
      if (vtokenVoting.setUndecidingTimeout.v982.is(call)) {
        return vtokenVoting.setUndecidingTimeout.v982.decode(call);
      } else if (vtokenVoting.setUndecidingTimeout.v990.is(call)) {
        return vtokenVoting.setUndecidingTimeout.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.notifyVote.name:
      if (vtokenVoting.notifyVote.v982.is(call)) {
        return vtokenVoting.notifyVote.v982.decode(call);
      } else if (vtokenVoting.notifyVote.v10000.is(call)) {
        return vtokenVoting.notifyVote.v10000.decode(call);
      } else if (vtokenVoting.notifyVote.v11000.is(call)) {
        return vtokenVoting.notifyVote.v11000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.notifyRemoveDelegatorVote.name:
      if (vtokenVoting.notifyRemoveDelegatorVote.v982.is(call)) {
        return vtokenVoting.notifyRemoveDelegatorVote.v982.decode(call);
      } else if (vtokenVoting.notifyRemoveDelegatorVote.v10000.is(call)) {
        return vtokenVoting.notifyRemoveDelegatorVote.v10000.decode(call);
      } else if (vtokenVoting.notifyRemoveDelegatorVote.v11000.is(call)) {
        return vtokenVoting.notifyRemoveDelegatorVote.v11000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.addDelegator.name:
      if (vtokenVoting.addDelegator.v990.is(call)) {
        return vtokenVoting.addDelegator.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case vtokenVoting.setVoteCapRatio.name:
      if (vtokenVoting.setVoteCapRatio.v990.is(call)) {
        return vtokenVoting.setVoteCapRatio.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
