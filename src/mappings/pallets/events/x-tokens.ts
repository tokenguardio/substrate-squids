import { xTokens } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeXTokensEventsArgs(event: Event): any {
  switch (event.name) {
    case xTokens.transferred.name:
      if (xTokens.transferred.v108.is(event)) {
        return xTokens.transferred.v108.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xTokens.transferredWithFee.name:
      if (xTokens.transferredWithFee.v108.is(event)) {
        return xTokens.transferredWithFee.v108.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xTokens.transferredMultiAsset.name:
      if (xTokens.transferredMultiAsset.v108.is(event)) {
        return xTokens.transferredMultiAsset.v108.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xTokens.transferredMultiAssetWithFee.name:
      if (xTokens.transferredMultiAssetWithFee.v108.is(event)) {
        return xTokens.transferredMultiAssetWithFee.v108.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xTokens.transferredMultiCurrencies.name:
      if (xTokens.transferredMultiCurrencies.v108.is(event)) {
        return xTokens.transferredMultiCurrencies.v108.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xTokens.transferredMultiAssets.name:
      if (xTokens.transferredMultiAssets.v108.is(event)) {
        return xTokens.transferredMultiAssets.v108.decode(event);
      } else if (xTokens.transferredMultiAssets.v115.is(event)) {
        return xTokens.transferredMultiAssets.v115.decode(event);
      } else if (xTokens.transferredMultiAssets.v160.is(event)) {
        return xTokens.transferredMultiAssets.v160.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xTokens.transferredAssets.name:
      if (xTokens.transferredAssets.v244.is(event)) {
        return xTokens.transferredAssets.v244.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
