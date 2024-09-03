import { staking } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeStakingEventsArgs(event: Event): any {
  switch (event.name) {
    case staking.positionCreated.name:
      if (staking.positionCreated.v176.is(event)) {
        return staking.positionCreated.v176.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.stakeAdded.name:
      if (staking.stakeAdded.v176.is(event)) {
        return staking.stakeAdded.v176.decode(event);
      } else if (staking.stakeAdded.v183.is(event)) {
        return staking.stakeAdded.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.rewardsClaimed.name:
      if (staking.rewardsClaimed.v176.is(event)) {
        return staking.rewardsClaimed.v176.decode(event);
      } else if (staking.rewardsClaimed.v183.is(event)) {
        return staking.rewardsClaimed.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.unstaked.name:
      if (staking.unstaked.v176.is(event)) {
        return staking.unstaked.v176.decode(event);
      } else if (staking.unstaked.v183.is(event)) {
        return staking.unstaked.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.stakingInitialized.name:
      if (staking.stakingInitialized.v176.is(event)) {
        return staking.stakingInitialized.v176.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case staking.accumulatedRpsUpdated.name:
      if (staking.accumulatedRpsUpdated.v176.is(event)) {
        return staking.accumulatedRpsUpdated.v176.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
