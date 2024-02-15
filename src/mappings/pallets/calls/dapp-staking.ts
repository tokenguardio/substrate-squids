import {
  DappStakingClaimBonusRewardCall,
  DappStakingClaimDappRewardCall,
  DappStakingClaimStakerRewardsCall,
  DappStakingClaimUnlockedCall,
  DappStakingCleanupExpiredEntriesCall,
  DappStakingForceCall,
  DappStakingLockCall,
  DappStakingMaintenanceModeCall,
  DappStakingRegisterCall,
  DappStakingRelockUnlockingCall,
  DappStakingSetDappOwnerCall,
  DappStakingSetDappRewardBeneficiaryCall,
  DappStakingStakeCall,
  DappStakingUnbondAndUnstakeCall,
  DappStakingUnlockCall,
  DappStakingUnregisterCall,
  DappStakingUnstakeCall,
  DappStakingUnstakeFromUnregisteredCall,
  DappStakingWithdrawUnbondedCall,
} from "../../../types/calls";
import { ChainContext, Call } from "../../../types/support";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeDappStakingCallsArgs(ctx: ChainContext, call: Call) {
  let e;
  switch (call.name) {
    case "DappStaking.claim_bonus_reward":
      e = new DappStakingClaimBonusRewardCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.claim_dapp_reward":
      e = new DappStakingClaimDappRewardCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.claim_staker_rewards":
      e = new DappStakingClaimStakerRewardsCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.claim_unlocked":
      e = new DappStakingClaimUnlockedCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.cleanup_expired_entries":
      e = new DappStakingCleanupExpiredEntriesCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.force":
      e = new DappStakingForceCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.lock":
      e = new DappStakingLockCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.maintenance_mode":
      e = new DappStakingMaintenanceModeCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.register":
      e = new DappStakingRegisterCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.relock_unlocking":
      e = new DappStakingRelockUnlockingCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.set_dapp_owner":
      e = new DappStakingSetDappOwnerCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.set_dapp_reward_beneficiary":
      e = new DappStakingSetDappRewardBeneficiaryCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.stake":
      e = new DappStakingStakeCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.unbond_and_unstake":
      e = new DappStakingUnbondAndUnstakeCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.unlock":
      e = new DappStakingUnlockCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.unregister":
      e = new DappStakingUnregisterCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.unstake":
      e = new DappStakingUnstakeCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.unstake_from_unregistered":
      e = new DappStakingUnstakeFromUnregisteredCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappStaking.withdraw_unbonded":
      e = new DappStakingWithdrawUnbondedCall(ctx, call);
      if (e.isV79) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
