import { lbp } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeLbpCallsArgs(call: Call): any {
  switch (call.name) {
    case lbp.createPool.name:
      if (lbp.createPool.v176.is(call)) {
        return lbp.createPool.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lbp.updatePoolData.name:
      if (lbp.updatePoolData.v176.is(call)) {
        return lbp.updatePoolData.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lbp.addLiquidity.name:
      if (lbp.addLiquidity.v176.is(call)) {
        return lbp.addLiquidity.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lbp.removeLiquidity.name:
      if (lbp.removeLiquidity.v176.is(call)) {
        return lbp.removeLiquidity.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lbp.sell.name:
      if (lbp.sell.v176.is(call)) {
        return lbp.sell.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case lbp.buy.name:
      if (lbp.buy.v176.is(call)) {
        return lbp.buy.v176.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
