import { dappsStaking } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeDappsStakingCallsArgs(call: Call): any {
  switch (call.name) {
    case dappsStaking.bondAndStake.name:
      if (dappsStaking.bondAndStake.v4.is(call)) {
        return dappsStaking.bondAndStake.v4.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.burnStaleReward.name:
      if (dappsStaking.burnStaleReward.v49.is(call)) {
        return dappsStaking.burnStaleReward.v49.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.claim.name:
      if (dappsStaking.claim.v4.is(call)) {
        return dappsStaking.claim.v4.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.claimDapp.name:
      if (dappsStaking.claimDapp.v12.is(call)) {
        return dappsStaking.claimDapp.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.claimStaker.name:
      if (dappsStaking.claimStaker.v12.is(call)) {
        return dappsStaking.claimStaker.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.claimStakerFor.name:
      if (dappsStaking.claimStakerFor.v77.is(call)) {
        return dappsStaking.claimStakerFor.v77.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.decommission.name:
      if (dappsStaking.decommission.v77.is(call)) {
        return dappsStaking.decommission.v77.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.developerPreApproval.name:
      if (dappsStaking.developerPreApproval.v4.is(call)) {
        return dappsStaking.developerPreApproval.v4.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.doUpgrade.name:
      if (dappsStaking.doUpgrade.v12.is(call)) {
        return dappsStaking.doUpgrade.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.enableDeveloperPreApproval.name:
      if (dappsStaking.enableDeveloperPreApproval.v4.is(call)) {
        return dappsStaking.enableDeveloperPreApproval.v4.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.forceNewEra.name:
      if (dappsStaking.forceNewEra.v4.is(call)) {
        return dappsStaking.forceNewEra.v4.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.maintenanceMode.name:
      if (dappsStaking.maintenanceMode.v12.is(call)) {
        return dappsStaking.maintenanceMode.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.nominationTransfer.name:
      if (dappsStaking.nominationTransfer.v17.is(call)) {
        return dappsStaking.nominationTransfer.v17.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.register.name:
      if (dappsStaking.register.v4.is(call)) {
        return { ...dappsStaking.register.v4.decode(call), developer: null };
      } else if (dappsStaking.register.v33.is(call)) {
        return dappsStaking.register.v33.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.setContractStakeInfo.name:
      if (dappsStaking.setContractStakeInfo.v16.is(call)) {
        return dappsStaking.setContractStakeInfo.v16.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.setRewardDestination.name:
      if (dappsStaking.setRewardDestination.v16.is(call)) {
        return dappsStaking.setRewardDestination.v16.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.setRewardDestinationFor.name:
      if (dappsStaking.setRewardDestinationFor.v77.is(call)) {
        return dappsStaking.setRewardDestinationFor.v77.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.unbondAndUnstake.name:
      if (dappsStaking.unbondAndUnstake.v12.is(call)) {
        return dappsStaking.unbondAndUnstake.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.unbondUnstakeAndWithdraw.name:
      if (dappsStaking.unbondUnstakeAndWithdraw.v4.is(call)) {
        return dappsStaking.unbondUnstakeAndWithdraw.v4.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.unregister.name:
      if (dappsStaking.unregister.v4.is(call)) {
        return dappsStaking.unregister.v4.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.withdrawFromUnregistered.name:
      if (dappsStaking.withdrawFromUnregistered.v12.is(call)) {
        return dappsStaking.withdrawFromUnregistered.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case dappsStaking.withdrawUnbonded.name:
      if (dappsStaking.withdrawUnbonded.v12.is(call)) {
        return dappsStaking.withdrawUnbonded.v12.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
