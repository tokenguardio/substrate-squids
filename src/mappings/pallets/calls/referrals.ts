import { referrals } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeReferralsCallsArgs(call: Call): any {
  switch (call.name) {
    case referrals.registerCode.name:
      if (referrals.registerCode.v201.is(call)) {
        return referrals.registerCode.v201.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case referrals.linkCode.name:
      if (referrals.linkCode.v201.is(call)) {
        return referrals.linkCode.v201.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case referrals.convert.name:
      if (referrals.convert.v201.is(call)) {
        return referrals.convert.v201.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case referrals.claimRewards.name:
      if (referrals.claimRewards.v201.is(call)) {
        return referrals.claimRewards.v201.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case referrals.setRewardPercentage.name:
      if (referrals.setRewardPercentage.v201.is(call)) {
        return referrals.setRewardPercentage.v201.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
