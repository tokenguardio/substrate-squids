import {
  DappsStakingBondAndStakeEvent,
  DappsStakingContractRemovedEvent,
  DappsStakingMaintenanceModeEvent,
  DappsStakingNewContractEvent,
  DappsStakingNewDappStakingEraEvent,
  DappsStakingNominationTransferEvent,
  DappsStakingRewardEvent,
  DappsStakingRewardDestinationEvent,
  DappsStakingStaleRewardBurnedEvent,
  DappsStakingUnbondAndUnstakeEvent,
  DappsStakingUnbondUnstakeAndWithdrawEvent,
  DappsStakingWithdrawFromUnregisteredEvent,
  DappsStakingWithdrawnEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeDappsStakingEventsArgs(
  ctx: ChainContext,
  event: Event
) {
  let e;
  switch (event.name) {
    case "DappsStaking.BondAndStake":
      e = new DappsStakingBondAndStakeEvent(ctx, event);
      if (e.isV4) {
        const [account, contract, amount] = event.args;
        return {
          account,
          contract,
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.ContractRemoved":
      e = new DappsStakingContractRemovedEvent(ctx, event);
      if (e.isV4) {
        const [account, contract] = event.args;
        return {
          account,
          contract,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.MaintenanceMode":
      e = new DappsStakingMaintenanceModeEvent(ctx, event);
      if (e.isV12) {
        const enabled = event.args;
        return { enabled };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.NewContract":
      e = new DappsStakingNewContractEvent(ctx, event);
      if (e.isV4) {
        const [account, contract] = event.args;
        return {
          account,
          contract,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.NewDappStakingEra":
      e = new DappsStakingNewDappStakingEraEvent(ctx, event);
      if (e.isV4) {
        const era = event.args;
        return { era };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.NominationTransfer":
      e = new DappsStakingNominationTransferEvent(ctx, event);
      if (e.isV17) {
        const [staker, originContract, amount, targetContract] = event.args;
        return {
          staker,
          originContract,
          amount,
          targetContract,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.Reward":
      e = new DappsStakingRewardEvent(ctx, event);
      if (e.isV4) {
        const [account, contract, num, amount] = event.args;
        return {
          account,
          contract,
          num,
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.RewardDestination":
      e = new DappsStakingRewardDestinationEvent(ctx, event);
      if (e.isV16) {
        const [account, rewardDestination] = event.args;
        return {
          account,
          rewardDestination,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.StaleRewardBurned":
      e = new DappsStakingStaleRewardBurnedEvent(ctx, event);
      if (e.isV49) {
        const [developer, contract, era, amount] = event.args;
        return {
          developer,
          contract,
          era,
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.UnbondAndUnstake":
      e = new DappsStakingUnbondAndUnstakeEvent(ctx, event);
      if (e.isV12) {
        const [account, contract, amount] = event.args;
        return {
          account,
          contract,
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.UnbondUnstakeAndWithdraw":
      e = new DappsStakingUnbondUnstakeAndWithdrawEvent(ctx, event);
      if (e.isV4) {
        const [account, contract, amount] = event.args;
        return {
          account,
          contract,
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.WithdrawFromUnregistered":
      e = new DappsStakingWithdrawFromUnregisteredEvent(ctx, event);
      if (e.isV12) {
        const [account, contract, amount] = event.args;
        return {
          account,
          contract,
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "DappsStaking.Withdrawn":
      e = new DappsStakingWithdrawnEvent(ctx, event);
      if (e.isV12) {
        const [account, amount] = event.args;
        return {
          account,
          amount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
