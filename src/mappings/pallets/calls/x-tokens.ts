import { xTokens } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeXTokensCallsArgs(call: Call): any {
  switch (call.name) {
    case xTokens.transfer.name:
      if (xTokens.transfer.v108.is(call)) {
        return xTokens.transfer.v108.decode(call);
      } else if (xTokens.transfer.v160.is(call)) {
        return xTokens.transfer.v160.decode(call);
      } else if (xTokens.transfer.v244.is(call)) {
        return xTokens.transfer.v244.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xTokens.transferMultiasset.name:
      if (xTokens.transferMultiasset.v108.is(call)) {
        return xTokens.transferMultiasset.v108.decode(call);
      } else if (xTokens.transferMultiasset.v160.is(call)) {
        return xTokens.transferMultiasset.v160.decode(call);
      } else if (xTokens.transferMultiasset.v244.is(call)) {
        return xTokens.transferMultiasset.v244.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xTokens.transferWithFee.name:
      if (xTokens.transferWithFee.v108.is(call)) {
        return xTokens.transferWithFee.v108.decode(call);
      } else if (xTokens.transferWithFee.v160.is(call)) {
        return xTokens.transferWithFee.v160.decode(call);
      } else if (xTokens.transferWithFee.v244.is(call)) {
        return xTokens.transferWithFee.v244.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xTokens.transferMultiassetWithFee.name:
      if (xTokens.transferMultiassetWithFee.v108.is(call)) {
        return xTokens.transferMultiassetWithFee.v108.decode(call);
      } else if (xTokens.transferMultiassetWithFee.v160.is(call)) {
        return xTokens.transferMultiassetWithFee.v160.decode(call);
      } else if (xTokens.transferMultiassetWithFee.v244.is(call)) {
        return xTokens.transferMultiassetWithFee.v244.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xTokens.transferMulticurrencies.name:
      if (xTokens.transferMulticurrencies.v108.is(call)) {
        return xTokens.transferMulticurrencies.v108.decode(call);
      } else if (xTokens.transferMulticurrencies.v160.is(call)) {
        return xTokens.transferMulticurrencies.v160.decode(call);
      } else if (xTokens.transferMulticurrencies.v244.is(call)) {
        return xTokens.transferMulticurrencies.v244.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xTokens.transferMultiassets.name:
      if (xTokens.transferMultiassets.v108.is(call)) {
        return xTokens.transferMultiassets.v108.decode(call);
      } else if (xTokens.transferMultiassets.v160.is(call)) {
        return xTokens.transferMultiassets.v160.decode(call);
      } else if (xTokens.transferMultiassets.v244.is(call)) {
        return xTokens.transferMultiassets.v244.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
