import { zenlinkProtocol } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeZenlinkProtocolCallsArgs(call: Call): any {
  switch (call.name) {
    case zenlinkProtocol.setFeeReceiver.name:
      if (zenlinkProtocol.setFeeReceiver.v954.is(call)) {
        return zenlinkProtocol.setFeeReceiver.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.setFeePoint.name:
      if (zenlinkProtocol.setFeePoint.v954.is(call)) {
        return zenlinkProtocol.setFeePoint.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.transfer.name:
      if (zenlinkProtocol.transfer.v954.is(call)) {
        return zenlinkProtocol.transfer.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.transferToParachain.name:
      if (zenlinkProtocol.transferToParachain.v954.is(call)) {
        return zenlinkProtocol.transferToParachain.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.createPair.name:
      if (zenlinkProtocol.createPair.v954.is(call)) {
        return zenlinkProtocol.createPair.v954.decode(call);
      } else if (zenlinkProtocol.createPair.v11000.is(call)) {
        return zenlinkProtocol.createPair.v11000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.addLiquidity.name:
      if (zenlinkProtocol.addLiquidity.v954.is(call)) {
        return zenlinkProtocol.addLiquidity.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.removeLiquidity.name:
      if (zenlinkProtocol.removeLiquidity.v954.is(call)) {
        return zenlinkProtocol.removeLiquidity.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.swapExactAssetsForAssets.name:
      if (zenlinkProtocol.swapExactAssetsForAssets.v954.is(call)) {
        return zenlinkProtocol.swapExactAssetsForAssets.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.swapAssetsForExactAssets.name:
      if (zenlinkProtocol.swapAssetsForExactAssets.v954.is(call)) {
        return zenlinkProtocol.swapAssetsForExactAssets.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.bootstrapCreate.name:
      if (zenlinkProtocol.bootstrapCreate.v954.is(call)) {
        return zenlinkProtocol.bootstrapCreate.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.bootstrapContribute.name:
      if (zenlinkProtocol.bootstrapContribute.v954.is(call)) {
        return zenlinkProtocol.bootstrapContribute.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.bootstrapClaim.name:
      if (zenlinkProtocol.bootstrapClaim.v954.is(call)) {
        return zenlinkProtocol.bootstrapClaim.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.bootstrapEnd.name:
      if (zenlinkProtocol.bootstrapEnd.v954.is(call)) {
        return zenlinkProtocol.bootstrapEnd.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.bootstrapUpdate.name:
      if (zenlinkProtocol.bootstrapUpdate.v954.is(call)) {
        return zenlinkProtocol.bootstrapUpdate.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.bootstrapRefund.name:
      if (zenlinkProtocol.bootstrapRefund.v954.is(call)) {
        return zenlinkProtocol.bootstrapRefund.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.bootstrapChargeReward.name:
      if (zenlinkProtocol.bootstrapChargeReward.v954.is(call)) {
        return zenlinkProtocol.bootstrapChargeReward.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.bootstrapWithdrawReward.name:
      if (zenlinkProtocol.bootstrapWithdrawReward.v954.is(call)) {
        return zenlinkProtocol.bootstrapWithdrawReward.v954.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case zenlinkProtocol.setNewFeeReceiver.name:
      if (zenlinkProtocol.setNewFeeReceiver.v11000.is(call)) {
        return zenlinkProtocol.setNewFeeReceiver.v11000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
