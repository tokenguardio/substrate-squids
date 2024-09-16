import { stableswap } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeStableswapCallsArgs(call: Call): any {
  switch (call.name) {
    case stableswap.createPool.name:
      if (stableswap.createPool.v183.is(call)) {
        return stableswap.createPool.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case stableswap.updatePoolFee.name:
      if (stableswap.updatePoolFee.v183.is(call)) {
        return stableswap.updatePoolFee.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case stableswap.updateAmplification.name:
      if (stableswap.updateAmplification.v183.is(call)) {
        return stableswap.updateAmplification.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case stableswap.addLiquidity.name:
      if (stableswap.addLiquidity.v183.is(call)) {
        return stableswap.addLiquidity.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case stableswap.addLiquidityShares.name:
      if (stableswap.addLiquidityShares.v183.is(call)) {
        return stableswap.addLiquidityShares.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case stableswap.removeLiquidityOneAsset.name:
      if (stableswap.removeLiquidityOneAsset.v183.is(call)) {
        return stableswap.removeLiquidityOneAsset.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case stableswap.withdrawAssetAmount.name:
      if (stableswap.withdrawAssetAmount.v183.is(call)) {
        return stableswap.withdrawAssetAmount.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case stableswap.sell.name:
      if (stableswap.sell.v183.is(call)) {
        return stableswap.sell.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case stableswap.buy.name:
      if (stableswap.buy.v183.is(call)) {
        return stableswap.buy.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case stableswap.setAssetTradableState.name:
      if (stableswap.setAssetTradableState.v183.is(call)) {
        return stableswap.setAssetTradableState.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
