import { Event } from "../../../processor";
import { lendMarket } from "../../../types/events";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeLendMarketEventsArgs(event: Event): any {
  switch (event.name) {
    case lendMarket.collateralAssetAdded.name:
      if (lendMarket.collateralAssetAdded.v990.is(event)) {
        const [sender, assetId] =
          lendMarket.collateralAssetAdded.v990.decode(event);
        return { sender, assetId };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.collateralAssetRemoved.name:
      if (lendMarket.collateralAssetRemoved.v990.is(event)) {
        const [sender, assetId] =
          lendMarket.collateralAssetRemoved.v990.decode(event);
        return { sender, assetId };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.deposited.name:
      if (lendMarket.deposited.v990.is(event)) {
        const [sender, assetId, amount] =
          lendMarket.deposited.v990.decode(event);
        return { sender, assetId, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.redeemed.name:
      if (lendMarket.redeemed.v990.is(event)) {
        const [sender, assetId, amount] =
          lendMarket.redeemed.v990.decode(event);
        return { sender, assetId, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.borrowed.name:
      if (lendMarket.borrowed.v990.is(event)) {
        const [sender, assetId, amount] =
          lendMarket.borrowed.v990.decode(event);
        return { sender, assetId, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.repaidBorrow.name:
      if (lendMarket.repaidBorrow.v990.is(event)) {
        const [sender, assetId, amount] =
          lendMarket.repaidBorrow.v990.decode(event);
        return { sender, assetId, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.liquidatedBorrow.name:
      if (lendMarket.liquidatedBorrow.v990.is(event)) {
        const [
          liquidator,
          borrower,
          liquidationAssetId,
          collateralAssetId,
          repayAmount,
          collateralAmount,
        ] = lendMarket.liquidatedBorrow.v990.decode(event);
        return {
          liquidator,
          borrower,
          liquidationAssetId,
          collateralAssetId,
          repayAmount,
          collateralAmount,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.reservesReduced.name:
      if (lendMarket.reservesReduced.v990.is(event)) {
        const [admin, assetId, reducedAmount, totalReserves] =
          lendMarket.reservesReduced.v990.decode(event);
        return { admin, assetId, reducedAmount, totalReserves };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.reservesAdded.name:
      if (lendMarket.reservesAdded.v990.is(event)) {
        const [admin, assetId, addedAmount, totalReserves] =
          lendMarket.reservesAdded.v990.decode(event);
        return { admin, assetId, addedAmount, totalReserves };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.newMarket.name:
      if (lendMarket.newMarket.v990.is(event)) {
        const [newInterestRateModel] = lendMarket.newMarket.v990.decode(event);
        return { newInterestRateModel };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.activatedMarket.name:
      if (lendMarket.activatedMarket.v990.is(event)) {
        const assetId = lendMarket.activatedMarket.v990.decode(event);
        return { assetId };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.updatedMarket.name:
      if (lendMarket.updatedMarket.v990.is(event)) {
        const [assetId, market] = lendMarket.updatedMarket.v990.decode(event);
        return { assetId, market };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.rewardAdded.name:
      if (lendMarket.rewardAdded.v990.is(event)) {
        const [sender, amount] = lendMarket.rewardAdded.v990.decode(event);
        return { sender, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.rewardWithdrawn.name:
      if (lendMarket.rewardWithdrawn.v990.is(event)) {
        const [sender, amount] = lendMarket.rewardWithdrawn.v990.decode(event);
        return { sender, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.marketRewardSpeedUpdated.name:
      if (lendMarket.marketRewardSpeedUpdated.v990.is(event)) {
        const [assetId, rewardSpeedPerBlock, totalSupply] =
          lendMarket.marketRewardSpeedUpdated.v990.decode(event);
        return { assetId, rewardSpeedPerBlock, totalSupply };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.distributedSupplierReward.name:
      if (lendMarket.distributedSupplierReward.v990.is(event)) {
        const [assetId, supplier, supplyIndex, totalSupply] =
          lendMarket.distributedSupplierReward.v990.decode(event);
        return { assetId, supplier, supplyIndex, totalSupply };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.distributedBorrowerReward.name:
      if (lendMarket.distributedBorrowerReward.v990.is(event)) {
        const [assetId, borrower, borrowIndex, totalBorrow] =
          lendMarket.distributedBorrowerReward.v990.decode(event);
        return { assetId, borrower, borrowIndex, totalBorrow };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.rewardPaid.name:
      if (lendMarket.rewardPaid.v990.is(event)) {
        const [sender, amount] = lendMarket.rewardPaid.v990.decode(event);
        return { sender, amount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.incentiveReservesReduced.name:
      if (lendMarket.incentiveReservesReduced.v990.is(event)) {
        const [receiveAccountId, assetId, reducedAmount] =
          lendMarket.incentiveReservesReduced.v990.decode(event);
        return { receiveAccountId, assetId, reducedAmount };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.liquidationFreeCollateralsUpdated.name:
      if (lendMarket.liquidationFreeCollateralsUpdated.v990.is(event)) {
        const updatedCollaterals =
          lendMarket.liquidationFreeCollateralsUpdated.v990.decode(event);
        return { updatedCollaterals };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lendMarket.marketBonded.name:
      if (lendMarket.marketBonded.v12001.is(event)) {
        return lendMarket.marketBonded.v12001.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
