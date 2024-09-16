import { xyk } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeXykCallsArgs(call: Call): any {
  switch (call.name) {
    case xyk.createPool.name:
      if (xyk.createPool.v183.is(call)) {
        return xyk.createPool.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xyk.addLiquidity.name:
      if (xyk.addLiquidity.v183.is(call)) {
        return xyk.addLiquidity.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xyk.removeLiquidity.name:
      if (xyk.removeLiquidity.v183.is(call)) {
        return xyk.removeLiquidity.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xyk.sell.name:
      if (xyk.sell.v183.is(call)) {
        return xyk.sell.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case xyk.buy.name:
      if (xyk.buy.v183.is(call)) {
        return xyk.buy.v183.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
