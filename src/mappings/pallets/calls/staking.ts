import { staking } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeStakingCallsArgs(call: Call): any {
  switch (call.name) {
    case staking.initializeStaking.name:
      if (staking.initializeStaking.v176.is(call)) {
        return staking.initializeStaking.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case staking.stake.name:
      if (staking.stake.v176.is(call)) {
        return staking.stake.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case staking.increaseStake.name:
      if (staking.increaseStake.v176.is(call)) {
        return staking.increaseStake.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case staking.claim.name:
      if (staking.claim.v176.is(call)) {
        return staking.claim.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case staking.unstake.name:
      if (staking.unstake.v176.is(call)) {
        return staking.unstake.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
