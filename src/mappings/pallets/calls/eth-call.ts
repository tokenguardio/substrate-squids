import { EthCallCallCall } from "../../../types/calls";
import { ChainContext, Call } from "../../../types/support";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeEthCallCallsArgs(ctx: ChainContext, call: Call) {
  let e;
  switch (call.name) {
    case "EthCall.call":
      e = new EthCallCallCall(ctx, call);
      if (e.isV1) {
        return call.args;
      } else if (e.isV3) {
        return call.args;
      } else if (e.isV4) {
        return call.args;
      } else if (e.isV9) {
        return call.args;
      } else if (e.isV12) {
        return call.args;
      } else if (e.isV13) {
        return call.args;
      } else if (e.isV15) {
        return call.args;
      } else if (e.isV16) {
        return call.args;
      } else if (e.isV17) {
        return call.args;
      } else if (e.isV23) {
        return call.args;
      } else if (e.isV30) {
        return call.args;
      } else if (e.isV33) {
        return call.args;
      } else if (e.isV43) {
        return call.args;
      } else if (e.isV49) {
        return call.args;
      } else if (e.isV52) {
        return call.args;
      } else if (e.isV55) {
        return call.args;
      } else if (e.isV61) {
        return call.args;
      } else if (e.isV64) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
