import { dappsStaking } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeDappsStakingEventsArgs(event: Event): any {
  switch (event.name) {
    case dappsStaking.bondAndStake.name:
      if (dappsStaking.bondAndStake.v4.is(event)) {
        const [account, contract, amount] =
          dappsStaking.bondAndStake.v4.decode(event);
        return { account, contract, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.contractRemoved.name:
      if (dappsStaking.contractRemoved.v4.is(event)) {
        const [account, contract] =
          dappsStaking.contractRemoved.v4.decode(event);
        return { account, contract };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.decommission.name:
      if (dappsStaking.decommission.v77.is(event)) {
        return dappsStaking.decommission.v77.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.maintenanceMode.name:
      if (dappsStaking.maintenanceMode.v12.is(event)) {
        return { enabled: dappsStaking.maintenanceMode.v12.decode(event) };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.newContract.name:
      if (dappsStaking.newContract.v4.is(event)) {
        const [account, contract] = dappsStaking.newContract.v4.decode(event);
        return { account, contract };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.newDappStakingEra.name:
      if (dappsStaking.newDappStakingEra.v4.is(event)) {
        return { era: dappsStaking.newDappStakingEra.v4.decode(event) };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.nominationTransfer.name:
      if (dappsStaking.nominationTransfer.v17.is(event)) {
        const [staker, originContract, amount, targetContract] =
          dappsStaking.nominationTransfer.v17.decode(event);
        return { staker, originContract, amount, targetContract };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.reward.name:
      if (dappsStaking.reward.v4.is(event)) {
        const [account, contract, num, amount] =
          dappsStaking.reward.v4.decode(event);
        return { account, contract, num, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.rewardDestination.name:
      if (dappsStaking.rewardDestination.v16.is(event)) {
        const [account, rewardDestination] =
          dappsStaking.rewardDestination.v16.decode(event);
        return { account, rewardDestination };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.staleRewardBurned.name:
      if (dappsStaking.staleRewardBurned.v49.is(event)) {
        const [developer, contract, era, amount] =
          dappsStaking.staleRewardBurned.v49.decode(event);
        return { developer, contract, era, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.unbondAndUnstake.name:
      if (dappsStaking.unbondAndUnstake.v12.is(event)) {
        const [account, contract, amount] =
          dappsStaking.unbondAndUnstake.v12.decode(event);
        return { account, contract, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.unbondUnstakeAndWithdraw.name:
      if (dappsStaking.unbondUnstakeAndWithdraw.v4.is(event)) {
        const [account, contract, amount] =
          dappsStaking.unbondUnstakeAndWithdraw.v4.decode(event);
        return { account, contract, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.withdrawFromUnregistered.name:
      if (dappsStaking.withdrawFromUnregistered.v12.is(event)) {
        const [account, contract, amount] =
          dappsStaking.withdrawFromUnregistered.v12.decode(event);
        return { account, contract, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case dappsStaking.withdrawn.name:
      if (dappsStaking.withdrawn.v12.is(event)) {
        const [account, amount] = dappsStaking.withdrawn.v12.decode(event);
        return { account, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
