import { lendMarket } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeLendMarketCallsArgs(call: Call): any {
  switch (call.name) {
    case lendMarket.addMarket.name:
      if (lendMarket.addMarket.v990.is(call)) {
        return lendMarket.addMarket.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.activateMarket.name:
      if (lendMarket.activateMarket.v990.is(call)) {
        return lendMarket.activateMarket.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.updateRateModel.name:
      if (lendMarket.updateRateModel.v990.is(call)) {
        return lendMarket.updateRateModel.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.updateMarket.name:
      if (lendMarket.updateMarket.v990.is(call)) {
        return lendMarket.updateMarket.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.forceUpdateMarket.name:
      if (lendMarket.forceUpdateMarket.v990.is(call)) {
        return lendMarket.forceUpdateMarket.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.addReward.name:
      if (lendMarket.addReward.v990.is(call)) {
        return lendMarket.addReward.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.withdrawMissingReward.name:
      if (lendMarket.withdrawMissingReward.v990.is(call)) {
        return lendMarket.withdrawMissingReward.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.updateMarketRewardSpeed.name:
      if (lendMarket.updateMarketRewardSpeed.v990.is(call)) {
        return lendMarket.updateMarketRewardSpeed.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.claimReward.name:
      if (lendMarket.claimReward.v990.is(call)) {
        return lendMarket.claimReward.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.claimRewardForMarket.name:
      if (lendMarket.claimRewardForMarket.v990.is(call)) {
        return lendMarket.claimRewardForMarket.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.mint.name:
      if (lendMarket.mint.v990.is(call)) {
        return lendMarket.mint.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.redeem.name:
      if (lendMarket.redeem.v990.is(call)) {
        return lendMarket.redeem.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.redeemAll.name:
      if (lendMarket.redeemAll.v990.is(call)) {
        return lendMarket.redeemAll.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.borrow.name:
      if (lendMarket.borrow.v990.is(call)) {
        return lendMarket.borrow.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.repayBorrow.name:
      if (lendMarket.repayBorrow.v990.is(call)) {
        return lendMarket.repayBorrow.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.repayBorrowAll.name:
      if (lendMarket.repayBorrowAll.v990.is(call)) {
        return lendMarket.repayBorrowAll.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.collateralAsset.name:
      if (lendMarket.collateralAsset.v990.is(call)) {
        return lendMarket.collateralAsset.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.liquidateBorrow.name:
      if (lendMarket.liquidateBorrow.v990.is(call)) {
        return lendMarket.liquidateBorrow.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.addReserves.name:
      if (lendMarket.addReserves.v990.is(call)) {
        return lendMarket.addReserves.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.reduceReserves.name:
      if (lendMarket.reduceReserves.v990.is(call)) {
        return lendMarket.reduceReserves.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.reduceIncentiveReserves.name:
      if (lendMarket.reduceIncentiveReserves.v990.is(call)) {
        return lendMarket.reduceIncentiveReserves.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.updateLiquidationFreeCollateral.name:
      if (lendMarket.updateLiquidationFreeCollateral.v990.is(call)) {
        return lendMarket.updateLiquidationFreeCollateral.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lendMarket.addMarketBond.name:
      if (lendMarket.addMarketBond.v12001.is(call)) {
        return lendMarket.addMarketBond.v12001.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
