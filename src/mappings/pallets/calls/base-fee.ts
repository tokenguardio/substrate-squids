import {
  BaseFeeSetBaseFeePerGasCall,
  BaseFeeSetElasticityCall,
  BaseFeeSetIsActiveCall,
} from "../../../types/calls";
import { ChainContext, Call } from "../../../types/support";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeBaseFeeCallsArgs(ctx: ChainContext, call: Call) {
  let e;
  switch (call.name) {
    case "BaseFee.set_base_fee_per_gas":
      e = new BaseFeeSetBaseFeePerGasCall(ctx, call);
      if (e.isV9) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "BaseFee.set_elasticity":
      e = new BaseFeeSetElasticityCall(ctx, call);
      if (e.isV9) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "BaseFee.set_is_active":
      e = new BaseFeeSetIsActiveCall(ctx, call);
      if (e.isV9) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
