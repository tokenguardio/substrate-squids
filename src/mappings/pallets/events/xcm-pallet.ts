import { xcmPallet } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeXcmPalletEventsArgs(event: Event): any {
  switch (event.name) {
    case xcmPallet.attempted.name:
      if (xcmPallet.attempted.v9140.is(event)) {
        const outcome = xcmPallet.attempted.v9140.decode(event);
        return { outcome };
      } else if (xcmPallet.attempted.v9170.is(event)) {
        const outcome = xcmPallet.attempted.v9170.decode(event);
        return { outcome };
      } else if (xcmPallet.attempted.v9420.is(event)) {
        const outcome = xcmPallet.attempted.v9420.decode(event);
        return { outcome };
      } else if (xcmPallet.attempted.v1000001.is(event)) {
        return xcmPallet.attempted.v1000001.decode(event);
      } else if (xcmPallet.attempted.v1002000.is(event)) {
        return xcmPallet.attempted.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.sent.name:
      if (xcmPallet.sent.v9140.is(event)) {
        const [origin, destination, message] =
          xcmPallet.sent.v9140.decode(event);
        return { origin, destination, message };
      } else if (xcmPallet.sent.v9170.is(event)) {
        const [origin, destination, message] =
          xcmPallet.sent.v9170.decode(event);
        return { origin, destination, message };
      } else if (xcmPallet.sent.v9370.is(event)) {
        const [origin, destination, message] =
          xcmPallet.sent.v9370.decode(event);
        return { origin, destination, message };
      } else if (xcmPallet.sent.v9420.is(event)) {
        const [origin, destination, message] =
          xcmPallet.sent.v9420.decode(event);
        return { origin, destination, message };
      } else if (xcmPallet.sent.v1000001.is(event)) {
        return xcmPallet.sent.v1000001.decode(event);
      } else if (xcmPallet.sent.v1002000.is(event)) {
        return xcmPallet.sent.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.unexpectedResponse.name:
      if (xcmPallet.unexpectedResponse.v9140.is(event)) {
        const [originLocation, id] =
          xcmPallet.unexpectedResponse.v9140.decode(event);
        return { originLocation, id };
      } else if (xcmPallet.unexpectedResponse.v9370.is(event)) {
        const [originLocation, id] =
          xcmPallet.unexpectedResponse.v9370.decode(event);
        return { originLocation, id };
      } else if (xcmPallet.unexpectedResponse.v9420.is(event)) {
        const [originLocation, id] =
          xcmPallet.unexpectedResponse.v9420.decode(event);
        return { originLocation, id };
      } else if (xcmPallet.unexpectedResponse.v1000001.is(event)) {
        return xcmPallet.unexpectedResponse.v1000001.decode(event);
      } else if (xcmPallet.unexpectedResponse.v1002000.is(event)) {
        return xcmPallet.unexpectedResponse.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.responseReady.name:
      if (xcmPallet.responseReady.v9140.is(event)) {
        const [id, response] = xcmPallet.responseReady.v9140.decode(event);
        return { id, response };
      } else if (xcmPallet.responseReady.v9170.is(event)) {
        const [id, response] = xcmPallet.responseReady.v9170.decode(event);
        return { id, response };
      } else if (xcmPallet.responseReady.v9370.is(event)) {
        const [id, response] = xcmPallet.responseReady.v9370.decode(event);
        return { id, response };
      } else if (xcmPallet.responseReady.v9420.is(event)) {
        const [id, response] = xcmPallet.responseReady.v9420.decode(event);
        return { id, response };
      } else if (xcmPallet.responseReady.v1000001.is(event)) {
        return xcmPallet.responseReady.v1000001.decode(event);
      } else if (xcmPallet.responseReady.v1002000.is(event)) {
        return xcmPallet.responseReady.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.notified.name:
      if (xcmPallet.notified.v9140.is(event)) {
        const [id, palletIndex, callIndex] =
          xcmPallet.notified.v9140.decode(event);
        return { id, palletIndex, callIndex };
      } else if (xcmPallet.notified.v1000001.is(event)) {
        return xcmPallet.notified.v1000001.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.notifyOverweight.name:
      if (xcmPallet.notifyOverweight.v9140.is(event)) {
        const [id, palletIndex, callIndex, actualWeight, maxBudgetedWeight] =
          xcmPallet.notifyOverweight.v9140.decode(event);
        return { id, palletIndex, callIndex, actualWeight, maxBudgetedWeight };
      } else if (xcmPallet.notifyOverweight.v9291.is(event)) {
        const [id, palletIndex, callIndex, actualWeight, maxBudgetedWeight] =
          xcmPallet.notifyOverweight.v9291.decode(event);
        return { id, palletIndex, callIndex, actualWeight, maxBudgetedWeight };
      } else if (xcmPallet.notifyOverweight.v9340.is(event)) {
        const [id, palletIndex, callIndex, actualWeight, maxBudgetedWeight] =
          xcmPallet.notifyOverweight.v9340.decode(event);
        return { id, palletIndex, callIndex, actualWeight, maxBudgetedWeight };
      } else if (xcmPallet.notifyOverweight.v1000001.is(event)) {
        return xcmPallet.notifyOverweight.v1000001.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.notifyDispatchError.name:
      if (xcmPallet.notifyDispatchError.v9140.is(event)) {
        const [id, palletIndex, callIndex] =
          xcmPallet.notifyDispatchError.v9140.decode(event);
        return { id, palletIndex, callIndex };
      } else if (xcmPallet.notifyDispatchError.v1000001.is(event)) {
        return xcmPallet.notifyDispatchError.v1000001.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.notifyDecodeFailed.name:
      if (xcmPallet.notifyDecodeFailed.v9140.is(event)) {
        const [id, palletIndex, callIndex] =
          xcmPallet.notifyDecodeFailed.v9140.decode(event);
        return { id, palletIndex, callIndex };
      } else if (xcmPallet.notifyDecodeFailed.v1000001.is(event)) {
        return xcmPallet.notifyDecodeFailed.v1000001.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.invalidResponder.name:
      if (xcmPallet.invalidResponder.v9140.is(event)) {
        const [originLocation, id, expectedLocation] =
          xcmPallet.invalidResponder.v9140.decode(event);
        return { originLocation, id, expectedLocation };
      } else if (xcmPallet.invalidResponder.v9370.is(event)) {
        const [originLocation, id, expectedLocation] =
          xcmPallet.invalidResponder.v9370.decode(event);
        return { originLocation, id, expectedLocation };
      } else if (xcmPallet.invalidResponder.v9420.is(event)) {
        const [originLocation, id, expectedLocation] =
          xcmPallet.invalidResponder.v9420.decode(event);
        return { originLocation, id, expectedLocation };
      } else if (xcmPallet.invalidResponder.v1000001.is(event)) {
        return xcmPallet.invalidResponder.v1000001.decode(event);
      } else if (xcmPallet.invalidResponder.v1002000.is(event)) {
        return xcmPallet.invalidResponder.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.invalidResponderVersion.name:
      if (xcmPallet.invalidResponderVersion.v9140.is(event)) {
        const [originLocation, id] =
          xcmPallet.invalidResponderVersion.v9140.decode(event);
        return { originLocation, id };
      } else if (xcmPallet.invalidResponderVersion.v9370.is(event)) {
        const [originLocation, id] =
          xcmPallet.invalidResponderVersion.v9370.decode(event);
        return { originLocation, id };
      } else if (xcmPallet.invalidResponderVersion.v9420.is(event)) {
        const [originLocation, id] =
          xcmPallet.invalidResponderVersion.v9420.decode(event);
        return { originLocation, id };
      } else if (xcmPallet.invalidResponderVersion.v1000001.is(event)) {
        return xcmPallet.invalidResponderVersion.v1000001.decode(event);
      } else if (xcmPallet.invalidResponderVersion.v1002000.is(event)) {
        return xcmPallet.invalidResponderVersion.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.responseTaken.name:
      if (xcmPallet.responseTaken.v9140.is(event)) {
        const id = xcmPallet.responseTaken.v9140.decode(event);
        return { id };
      } else if (xcmPallet.responseTaken.v1000001.is(event)) {
        return xcmPallet.responseTaken.v1000001.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.assetsTrapped.name:
      if (xcmPallet.assetsTrapped.v9140.is(event)) {
        const [hash, origin, assets] =
          xcmPallet.assetsTrapped.v9140.decode(event);
        return { hash, origin, assets };
      } else if (xcmPallet.assetsTrapped.v9370.is(event)) {
        const [hash, origin, assets] =
          xcmPallet.assetsTrapped.v9370.decode(event);
        return { hash, origin, assets };
      } else if (xcmPallet.assetsTrapped.v9420.is(event)) {
        const [hash, origin, assets] =
          xcmPallet.assetsTrapped.v9420.decode(event);
        return { hash, origin, assets };
      } else if (xcmPallet.assetsTrapped.v1000001.is(event)) {
        return xcmPallet.assetsTrapped.v1000001.decode(event);
      } else if (xcmPallet.assetsTrapped.v1002000.is(event)) {
        return xcmPallet.assetsTrapped.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.versionChangeNotified.name:
      if (xcmPallet.versionChangeNotified.v9140.is(event)) {
        const [destination, result] =
          xcmPallet.versionChangeNotified.v9140.decode(event);
        return { destination, result };
      } else if (xcmPallet.versionChangeNotified.v9370.is(event)) {
        const [destination, result] =
          xcmPallet.versionChangeNotified.v9370.decode(event);
        return { destination, result };
      } else if (xcmPallet.versionChangeNotified.v9420.is(event)) {
        const [destination, result, cost] =
          xcmPallet.versionChangeNotified.v9420.decode(event);
        return { destination, result, cost };
      } else if (xcmPallet.versionChangeNotified.v1000001.is(event)) {
        return xcmPallet.versionChangeNotified.v1000001.decode(event);
      } else if (xcmPallet.versionChangeNotified.v1002000.is(event)) {
        return xcmPallet.versionChangeNotified.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.supportedVersionChanged.name:
      if (xcmPallet.supportedVersionChanged.v9140.is(event)) {
        const [location, version] =
          xcmPallet.supportedVersionChanged.v9140.decode(event);
        return { location, version };
      } else if (xcmPallet.supportedVersionChanged.v9370.is(event)) {
        const [location, version] =
          xcmPallet.supportedVersionChanged.v9370.decode(event);
        return { location, version };
      } else if (xcmPallet.supportedVersionChanged.v9420.is(event)) {
        const [location, version] =
          xcmPallet.supportedVersionChanged.v9420.decode(event);
        return { location, version };
      } else if (xcmPallet.supportedVersionChanged.v1000001.is(event)) {
        return xcmPallet.supportedVersionChanged.v1000001.decode(event);
      } else if (xcmPallet.supportedVersionChanged.v1002000.is(event)) {
        return xcmPallet.supportedVersionChanged.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.notifyTargetSendFail.name:
      if (xcmPallet.notifyTargetSendFail.v9140.is(event)) {
        const [location, queryId, error] =
          xcmPallet.notifyTargetSendFail.v9140.decode(event);
        return { location, queryId, error };
      } else if (xcmPallet.notifyTargetSendFail.v9170.is(event)) {
        const [location, queryId, error] =
          xcmPallet.notifyTargetSendFail.v9170.decode(event);
        return { location, queryId, error };
      } else if (xcmPallet.notifyTargetSendFail.v9370.is(event)) {
        const [location, queryId, error] =
          xcmPallet.notifyTargetSendFail.v9370.decode(event);
        return { location, queryId, error };
      } else if (xcmPallet.notifyTargetSendFail.v9420.is(event)) {
        const [location, queryId, error] =
          xcmPallet.notifyTargetSendFail.v9420.decode(event);
        return { location, queryId, error };
      } else if (xcmPallet.notifyTargetSendFail.v1000001.is(event)) {
        return xcmPallet.notifyTargetSendFail.v1000001.decode(event);
      } else if (xcmPallet.notifyTargetSendFail.v1002000.is(event)) {
        return xcmPallet.notifyTargetSendFail.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.notifyTargetMigrationFail.name:
      if (xcmPallet.notifyTargetMigrationFail.v9140.is(event)) {
        const [location, queryId] =
          xcmPallet.notifyTargetMigrationFail.v9140.decode(event);
        return { location, queryId };
      } else if (xcmPallet.notifyTargetMigrationFail.v9370.is(event)) {
        const [location, queryId] =
          xcmPallet.notifyTargetMigrationFail.v9370.decode(event);
        return { location, queryId };
      } else if (xcmPallet.notifyTargetMigrationFail.v9420.is(event)) {
        const [location, queryId] =
          xcmPallet.notifyTargetMigrationFail.v9420.decode(event);
        return { location, queryId };
      } else if (xcmPallet.notifyTargetMigrationFail.v1000001.is(event)) {
        return xcmPallet.notifyTargetMigrationFail.v1000001.decode(event);
      } else if (xcmPallet.notifyTargetMigrationFail.v1002000.is(event)) {
        return xcmPallet.notifyTargetMigrationFail.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.assetsClaimed.name:
      if (xcmPallet.assetsClaimed.v9340.is(event)) {
        const [hash, origin, assets] =
          xcmPallet.assetsClaimed.v9340.decode(event);
        return { hash, origin, assets };
      } else if (xcmPallet.assetsClaimed.v9370.is(event)) {
        const [hash, origin, assets] =
          xcmPallet.assetsClaimed.v9370.decode(event);
        return { hash, origin, assets };
      } else if (xcmPallet.assetsClaimed.v9420.is(event)) {
        const [hash, origin, assets] =
          xcmPallet.assetsClaimed.v9420.decode(event);
        return { hash, origin, assets };
      } else if (xcmPallet.assetsClaimed.v1000001.is(event)) {
        return xcmPallet.assetsClaimed.v1000001.decode(event);
      } else if (xcmPallet.assetsClaimed.v1002000.is(event)) {
        return xcmPallet.assetsClaimed.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.invalidQuerierVersion.name:
      if (xcmPallet.invalidQuerierVersion.v9420.is(event)) {
        const [origin, queryId] =
          xcmPallet.invalidQuerierVersion.v9420.decode(event);
        return { origin, queryId };
      } else if (xcmPallet.invalidQuerierVersion.v1000001.is(event)) {
        return xcmPallet.invalidQuerierVersion.v1000001.decode(event);
      } else if (xcmPallet.invalidQuerierVersion.v1002000.is(event)) {
        return xcmPallet.invalidQuerierVersion.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.invalidQuerier.name:
      if (xcmPallet.invalidQuerier.v9420.is(event)) {
        const [origin, queryId, expectedQuerier, maybeActualQuerier] =
          xcmPallet.invalidQuerier.v9420.decode(event);
        return { origin, queryId, expectedQuerier, maybeActualQuerier };
      } else if (xcmPallet.invalidQuerier.v1000001.is(event)) {
        return xcmPallet.invalidQuerier.v1000001.decode(event);
      } else if (xcmPallet.invalidQuerier.v1002000.is(event)) {
        return xcmPallet.invalidQuerier.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.versionNotifyStarted.name:
      if (xcmPallet.versionNotifyStarted.v9420.is(event)) {
        const [destination, cost] =
          xcmPallet.versionNotifyStarted.v9420.decode(event);
        return { destination, cost };
      } else if (xcmPallet.versionNotifyStarted.v1000001.is(event)) {
        return xcmPallet.versionNotifyStarted.v1000001.decode(event);
      } else if (xcmPallet.versionNotifyStarted.v1002000.is(event)) {
        return xcmPallet.versionNotifyStarted.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.versionNotifyRequested.name:
      if (xcmPallet.versionNotifyRequested.v9420.is(event)) {
        const [destination, cost] =
          xcmPallet.versionNotifyRequested.v9420.decode(event);
        return { destination, cost };
      } else if (xcmPallet.versionNotifyRequested.v1000001.is(event)) {
        return xcmPallet.versionNotifyRequested.v1000001.decode(event);
      } else if (xcmPallet.versionNotifyRequested.v1002000.is(event)) {
        return xcmPallet.versionNotifyRequested.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.versionNotifyUnrequested.name:
      if (xcmPallet.versionNotifyUnrequested.v9420.is(event)) {
        const [destination, cost] =
          xcmPallet.versionNotifyUnrequested.v9420.decode(event);
        return { destination, cost };
      } else if (xcmPallet.versionNotifyUnrequested.v1000001.is(event)) {
        return xcmPallet.versionNotifyUnrequested.v1000001.decode(event);
      } else if (xcmPallet.versionNotifyUnrequested.v1002000.is(event)) {
        return xcmPallet.versionNotifyUnrequested.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.feesPaid.name:
      if (xcmPallet.feesPaid.v9420.is(event)) {
        const [paying, fees] = xcmPallet.feesPaid.v9420.decode(event);
        return { paying, fees };
      } else if (xcmPallet.feesPaid.v1000001.is(event)) {
        return xcmPallet.feesPaid.v1000001.decode(event);
      } else if (xcmPallet.feesPaid.v1002000.is(event)) {
        return xcmPallet.feesPaid.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xcmPallet.versionMigrationFinished.name:
      if (xcmPallet.versionMigrationFinished.v1002000.is(event)) {
        return xcmPallet.versionMigrationFinished.v1002000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
