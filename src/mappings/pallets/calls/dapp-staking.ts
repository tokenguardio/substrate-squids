import { dappStaking } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeDappStakingCallsArgs(call: Call): any {
  switch (call.name) {
    case dappStaking.claimBonusReward.name:
      if (dappStaking.claimBonusReward.v79.is(call)) {
        return dappStaking.claimBonusReward.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.claimDappReward.name:
      if (dappStaking.claimDappReward.v79.is(call)) {
        return dappStaking.claimDappReward.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.claimStakerRewards.name:
      if (dappStaking.claimStakerRewards.v79.is(call)) {
        return dappStaking.claimStakerRewards.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.claimUnlocked.name:
      if (dappStaking.claimUnlocked.v79.is(call)) {
        return dappStaking.claimUnlocked.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.cleanupExpiredEntries.name:
      if (dappStaking.cleanupExpiredEntries.v79.is(call)) {
        return dappStaking.cleanupExpiredEntries.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.force.name:
      if (dappStaking.force.v79.is(call)) {
        return dappStaking.force.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.lock.name:
      if (dappStaking.lock.v79.is(call)) {
        return dappStaking.lock.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.maintenanceMode.name:
      if (dappStaking.maintenanceMode.v79.is(call)) {
        return dappStaking.maintenanceMode.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.register.name:
      if (dappStaking.register.v79.is(call)) {
        return dappStaking.register.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.relockUnlocking.name:
      if (dappStaking.relockUnlocking.v79.is(call)) {
        return dappStaking.relockUnlocking.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.setDappOwner.name:
      if (dappStaking.setDappOwner.v79.is(call)) {
        return dappStaking.setDappOwner.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.setDappRewardBeneficiary.name:
      if (dappStaking.setDappRewardBeneficiary.v79.is(call)) {
        return dappStaking.setDappRewardBeneficiary.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.stake.name:
      if (dappStaking.stake.v79.is(call)) {
        return dappStaking.stake.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.unbondAndUnstake.name:
      if (dappStaking.unbondAndUnstake.v79.is(call)) {
        return dappStaking.unbondAndUnstake.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.unlock.name:
      if (dappStaking.unlock.v79.is(call)) {
        return dappStaking.unlock.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.unregister.name:
      if (dappStaking.unregister.v79.is(call)) {
        return dappStaking.unregister.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.unstake.name:
      if (dappStaking.unstake.v79.is(call)) {
        return dappStaking.unstake.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.unstakeFromUnregistered.name:
      if (dappStaking.unstakeFromUnregistered.v79.is(call)) {
        return dappStaking.unstakeFromUnregistered.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.withdrawUnbonded.name:
      if (dappStaking.withdrawUnbonded.v79.is(call)) {
        return dappStaking.withdrawUnbonded.v79.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappStaking.fixAccount.name:
      if (dappStaking.fixAccount.v90.is(call)) {
        return dappStaking.fixAccount.v90.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
