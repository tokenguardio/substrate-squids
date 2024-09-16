import { otc } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeOtcCallsArgs(call: Call): any {
  switch (call.name) {
    case otc.placeOrder.name:
      if (otc.placeOrder.v138.is(call)) {
        return otc.placeOrder.v138.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case otc.partialFillOrder.name:
      if (otc.partialFillOrder.v138.is(call)) {
        return otc.partialFillOrder.v138.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case otc.fillOrder.name:
      if (otc.fillOrder.v138.is(call)) {
        return otc.fillOrder.v138.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case otc.cancelOrder.name:
      if (otc.cancelOrder.v138.is(call)) {
        return otc.cancelOrder.v138.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
