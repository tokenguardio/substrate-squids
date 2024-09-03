import { xcmPallet } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeXcmPalletCallsArgs(call: Call): any {
  switch (call.name) {
    case xcmPallet.send.name:
      if (xcmPallet.send.v9140.is(call)) {
        return xcmPallet.send.v9140.decode(call);
      } else if (xcmPallet.send.v9170.is(call)) {
        return xcmPallet.send.v9170.decode(call);
      } else if (xcmPallet.send.v9370.is(call)) {
        return xcmPallet.send.v9370.decode(call);
      } else if (xcmPallet.send.v9420.is(call)) {
        return xcmPallet.send.v9420.decode(call);
      } else if (xcmPallet.send.v1002000.is(call)) {
        return xcmPallet.send.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.teleportAssets.name:
      if (xcmPallet.teleportAssets.v9140.is(call)) {
        return xcmPallet.teleportAssets.v9140.decode(call);
      } else if (xcmPallet.teleportAssets.v9370.is(call)) {
        return xcmPallet.teleportAssets.v9370.decode(call);
      } else if (xcmPallet.teleportAssets.v9420.is(call)) {
        return xcmPallet.teleportAssets.v9420.decode(call);
      } else if (xcmPallet.teleportAssets.v1002000.is(call)) {
        return xcmPallet.teleportAssets.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.reserveTransferAssets.name:
      if (xcmPallet.reserveTransferAssets.v9140.is(call)) {
        return xcmPallet.reserveTransferAssets.v9140.decode(call);
      } else if (xcmPallet.reserveTransferAssets.v9370.is(call)) {
        return xcmPallet.reserveTransferAssets.v9370.decode(call);
      } else if (xcmPallet.reserveTransferAssets.v9420.is(call)) {
        return xcmPallet.reserveTransferAssets.v9420.decode(call);
      } else if (xcmPallet.reserveTransferAssets.v1002000.is(call)) {
        return xcmPallet.reserveTransferAssets.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.execute.name:
      if (xcmPallet.execute.v9140.is(call)) {
        return xcmPallet.execute.v9140.decode(call);
      } else if (xcmPallet.execute.v9170.is(call)) {
        return xcmPallet.execute.v9170.decode(call);
      } else if (xcmPallet.execute.v9291.is(call)) {
        return xcmPallet.execute.v9291.decode(call);
      } else if (xcmPallet.execute.v9340.is(call)) {
        return xcmPallet.execute.v9340.decode(call);
      } else if (xcmPallet.execute.v9370.is(call)) {
        return xcmPallet.execute.v9370.decode(call);
      } else if (xcmPallet.execute.v9420.is(call)) {
        return xcmPallet.execute.v9420.decode(call);
      } else if (xcmPallet.execute.v1002000.is(call)) {
        return xcmPallet.execute.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.forceXcmVersion.name:
      if (xcmPallet.forceXcmVersion.v9140.is(call)) {
        return xcmPallet.forceXcmVersion.v9140.decode(call);
      } else if (xcmPallet.forceXcmVersion.v9370.is(call)) {
        return xcmPallet.forceXcmVersion.v9370.decode(call);
      } else if (xcmPallet.forceXcmVersion.v9420.is(call)) {
        return xcmPallet.forceXcmVersion.v9420.decode(call);
      } else if (xcmPallet.forceXcmVersion.v1000001.is(call)) {
        return xcmPallet.forceXcmVersion.v1000001.decode(call);
      } else if (xcmPallet.forceXcmVersion.v1002000.is(call)) {
        return xcmPallet.forceXcmVersion.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.forceDefaultXcmVersion.name:
      if (xcmPallet.forceDefaultXcmVersion.v9140.is(call)) {
        return xcmPallet.forceDefaultXcmVersion.v9140.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.forceSubscribeVersionNotify.name:
      if (xcmPallet.forceSubscribeVersionNotify.v9140.is(call)) {
        return xcmPallet.forceSubscribeVersionNotify.v9140.decode(call);
      } else if (xcmPallet.forceSubscribeVersionNotify.v9370.is(call)) {
        return xcmPallet.forceSubscribeVersionNotify.v9370.decode(call);
      } else if (xcmPallet.forceSubscribeVersionNotify.v9420.is(call)) {
        return xcmPallet.forceSubscribeVersionNotify.v9420.decode(call);
      } else if (xcmPallet.forceSubscribeVersionNotify.v1002000.is(call)) {
        return xcmPallet.forceSubscribeVersionNotify.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.forceUnsubscribeVersionNotify.name:
      if (xcmPallet.forceUnsubscribeVersionNotify.v9140.is(call)) {
        return xcmPallet.forceUnsubscribeVersionNotify.v9140.decode(call);
      } else if (xcmPallet.forceUnsubscribeVersionNotify.v9370.is(call)) {
        return xcmPallet.forceUnsubscribeVersionNotify.v9370.decode(call);
      } else if (xcmPallet.forceUnsubscribeVersionNotify.v9420.is(call)) {
        return xcmPallet.forceUnsubscribeVersionNotify.v9420.decode(call);
      } else if (xcmPallet.forceUnsubscribeVersionNotify.v1002000.is(call)) {
        return xcmPallet.forceUnsubscribeVersionNotify.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.limitedReserveTransferAssets.name:
      if (xcmPallet.limitedReserveTransferAssets.v9140.is(call)) {
        return xcmPallet.limitedReserveTransferAssets.v9140.decode(call);
      } else if (xcmPallet.limitedReserveTransferAssets.v9370.is(call)) {
        return xcmPallet.limitedReserveTransferAssets.v9370.decode(call);
      } else if (xcmPallet.limitedReserveTransferAssets.v9420.is(call)) {
        return xcmPallet.limitedReserveTransferAssets.v9420.decode(call);
      } else if (xcmPallet.limitedReserveTransferAssets.v1002000.is(call)) {
        return xcmPallet.limitedReserveTransferAssets.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.limitedTeleportAssets.name:
      if (xcmPallet.limitedTeleportAssets.v9140.is(call)) {
        return xcmPallet.limitedTeleportAssets.v9140.decode(call);
      } else if (xcmPallet.limitedTeleportAssets.v9370.is(call)) {
        return xcmPallet.limitedTeleportAssets.v9370.decode(call);
      } else if (xcmPallet.limitedTeleportAssets.v9420.is(call)) {
        return xcmPallet.limitedTeleportAssets.v9420.decode(call);
      } else if (xcmPallet.limitedTeleportAssets.v1002000.is(call)) {
        return xcmPallet.limitedTeleportAssets.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.forceSuspension.name:
      if (xcmPallet.forceSuspension.v9420.is(call)) {
        return xcmPallet.forceSuspension.v9420.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.transferAssets.name:
      if (xcmPallet.transferAssets.v1002000.is(call)) {
        return xcmPallet.transferAssets.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.claimAssets.name:
      if (xcmPallet.claimAssets.v1002000.is(call)) {
        return xcmPallet.claimAssets.v1002000.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xcmPallet.transferAssetsUsingTypeAndThen.name:
      if (xcmPallet.transferAssetsUsingTypeAndThen.v1002004.is(call)) {
        return xcmPallet.transferAssetsUsingTypeAndThen.v1002004.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
