import { referrals } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeReferralsEventsArgs(event: Event): any {
  switch (event.name) {
    case referrals.codeRegistered.name:
      if (referrals.codeRegistered.v201.is(event)) {
        return referrals.codeRegistered.v201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case referrals.codeLinked.name:
      if (referrals.codeLinked.v201.is(event)) {
        return referrals.codeLinked.v201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case referrals.converted.name:
      if (referrals.converted.v201.is(event)) {
        return referrals.converted.v201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case referrals.claimed.name:
      if (referrals.claimed.v201.is(event)) {
        return referrals.claimed.v201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case referrals.assetRewardsUpdated.name:
      if (referrals.assetRewardsUpdated.v201.is(event)) {
        return referrals.assetRewardsUpdated.v201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case referrals.levelUp.name:
      if (referrals.levelUp.v201.is(event)) {
        return referrals.levelUp.v201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
