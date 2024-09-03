import { omnipool } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeOmnipoolCallsArgs(call: Call): any {
  switch (call.name) {
    case omnipool.initializePool.name:
      if (omnipool.initializePool.v115.is(call)) {
        return omnipool.initializePool.v115.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.addToken.name:
      if (omnipool.addToken.v115.is(call)) {
        return omnipool.addToken.v115.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.addLiquidity.name:
      if (omnipool.addLiquidity.v115.is(call)) {
        return omnipool.addLiquidity.v115.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.removeLiquidity.name:
      if (omnipool.removeLiquidity.v115.is(call)) {
        return omnipool.removeLiquidity.v115.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.sacrificePosition.name:
      if (omnipool.sacrificePosition.v115.is(call)) {
        return omnipool.sacrificePosition.v115.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.sell.name:
      if (omnipool.sell.v115.is(call)) {
        return omnipool.sell.v115.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.buy.name:
      if (omnipool.buy.v115.is(call)) {
        return omnipool.buy.v115.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.setAssetTradableState.name:
      if (omnipool.setAssetTradableState.v115.is(call)) {
        return omnipool.setAssetTradableState.v115.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.refundRefusedAsset.name:
      if (omnipool.refundRefusedAsset.v115.is(call)) {
        return omnipool.refundRefusedAsset.v115.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.setAssetWeightCap.name:
      if (omnipool.setAssetWeightCap.v115.is(call)) {
        return omnipool.setAssetWeightCap.v115.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.setTvlCap.name:
      if (omnipool.setTvlCap.v125.is(call)) {
        return omnipool.setTvlCap.v125.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.withdrawProtocolLiquidity.name:
      if (omnipool.withdrawProtocolLiquidity.v185.is(call)) {
        return omnipool.withdrawProtocolLiquidity.v185.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.removeToken.name:
      if (omnipool.removeToken.v185.is(call)) {
        return omnipool.removeToken.v185.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.addLiquidityWithLimit.name:
      if (omnipool.addLiquidityWithLimit.v244.is(call)) {
        return omnipool.addLiquidityWithLimit.v244.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case omnipool.removeLiquidityWithLimit.name:
      if (omnipool.removeLiquidityWithLimit.v244.is(call)) {
        return omnipool.removeLiquidityWithLimit.v244.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
