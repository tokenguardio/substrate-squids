import { stablePool } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeStablePoolCallsArgs(call: Call): any {
  switch (call.name) {
    case stablePool.createPool.name:
      if (stablePool.createPool.v982.is(call)) {
        return stablePool.createPool.v982.decode(call);
      } else if (stablePool.createPool.v990.is(call)) {
        return stablePool.createPool.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.addLiquidity.name:
      if (stablePool.addLiquidity.v982.is(call)) {
        return stablePool.addLiquidity.v982.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.swap.name:
      if (stablePool.swap.v982.is(call)) {
        return stablePool.swap.v982.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.redeemProportion.name:
      if (stablePool.redeemProportion.v982.is(call)) {
        return stablePool.redeemProportion.v982.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.redeemSingle.name:
      if (stablePool.redeemSingle.v982.is(call)) {
        return stablePool.redeemSingle.v982.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.redeemMulti.name:
      if (stablePool.redeemMulti.v982.is(call)) {
        return stablePool.redeemMulti.v982.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.modifyA.name:
      if (stablePool.modifyA.v982.is(call)) {
        return stablePool.modifyA.v982.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.modifyFees.name:
      if (stablePool.modifyFees.v982.is(call)) {
        return stablePool.modifyFees.v982.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.modifyRecipients.name:
      if (stablePool.modifyRecipients.v982.is(call)) {
        return stablePool.modifyRecipients.v982.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.editTokenRate.name:
      if (stablePool.editTokenRate.v982.is(call)) {
        return stablePool.editTokenRate.v982.decode(call);
      } else if (stablePool.editTokenRate.v990.is(call)) {
        return stablePool.editTokenRate.v990.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.configVtokenAutoRefresh.name:
      if (stablePool.configVtokenAutoRefresh.v994.is(call)) {
        return stablePool.configVtokenAutoRefresh.v994.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case stablePool.removeVtokenAutoRefresh.name:
      if (stablePool.removeVtokenAutoRefresh.v994.is(call)) {
        return stablePool.removeVtokenAutoRefresh.v994.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    default:
      throw new UnknownCallError(call.name);
  }
}
