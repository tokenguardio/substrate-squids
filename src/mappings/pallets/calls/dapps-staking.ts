import {
  DappsStakingBondAndStakeCall,
  DappsStakingBurnStaleRewardCall,
  DappsStakingClaimCall,
  DappsStakingClaimDappCall,
  DappsStakingClaimStakerCall,
  DappsStakingDeveloperPreApprovalCall,
  DappsStakingDoUpgradeCall,
  DappsStakingEnableDeveloperPreApprovalCall,
  DappsStakingForceNewEraCall,
  DappsStakingMaintenanceModeCall,
  DappsStakingNominationTransferCall,
  DappsStakingRegisterCall,
  DappsStakingSetContractStakeInfoCall,
  DappsStakingSetRewardDestinationCall,
  DappsStakingUnbondAndUnstakeCall,
  DappsStakingUnbondUnstakeAndWithdrawCall,
  DappsStakingUnregisterCall,
  DappsStakingWithdrawFromUnregisteredCall,
  DappsStakingWithdrawUnbondedCall,
} from "../../../types/calls";
import { ChainContext, Call } from "../../../types/support";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeDappsStakingCallsArgs(ctx: ChainContext, call: Call) {
  let e;
  switch (call.name) {
    case "DappsStaking.bond_and_stake":
      e = new DappsStakingBondAndStakeCall(ctx, call);
      if (e.isV4) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.burn_stale_reward":
      e = new DappsStakingBurnStaleRewardCall(ctx, call);
      if (e.isV49) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.claim":
      e = new DappsStakingClaimCall(ctx, call);
      if (e.isV4) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.claim_dapp":
      e = new DappsStakingClaimDappCall(ctx, call);
      if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.claim_staker":
      e = new DappsStakingClaimStakerCall(ctx, call);
      if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.developer_pre_approval":
      e = new DappsStakingDeveloperPreApprovalCall(ctx, call);
      if (e.isV4) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.do_upgrade":
      e = new DappsStakingDoUpgradeCall(ctx, call);
      if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.enable_developer_pre_approval":
      e = new DappsStakingEnableDeveloperPreApprovalCall(ctx, call);
      if (e.isV4) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.force_new_era":
      e = new DappsStakingForceNewEraCall(ctx, call);
      if (e.isV4) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.maintenance_mode":
      e = new DappsStakingMaintenanceModeCall(ctx, call);
      if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.nomination_transfer":
      e = new DappsStakingNominationTransferCall(ctx, call);
      if (e.isV17) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.register":
      e = new DappsStakingRegisterCall(ctx, call);
      if (e.isV4) {
        return {
          ...call.args,
          developer: null,
        };
      } else if (e.isV33) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.set_contract_stake_info":
      e = new DappsStakingSetContractStakeInfoCall(ctx, call);
      if (e.isV16) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.set_reward_destination":
      e = new DappsStakingSetRewardDestinationCall(ctx, call);
      if (e.isV16) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.unbond_and_unstake":
      e = new DappsStakingUnbondAndUnstakeCall(ctx, call);
      if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.unbond_unstake_and_withdraw":
      e = new DappsStakingUnbondUnstakeAndWithdrawCall(ctx, call);
      if (e.isV4) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.unregister":
      e = new DappsStakingUnregisterCall(ctx, call);
      if (e.isV4) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.withdraw_from_unregistered":
      e = new DappsStakingWithdrawFromUnregisteredCall(ctx, call);
      if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "DappsStaking.withdraw_unbonded":
      e = new DappsStakingWithdrawUnbondedCall(ctx, call);
      if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
