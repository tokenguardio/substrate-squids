import {
  BalancesForceTransferCall,
  BalancesForceUnreserveCall,
  BalancesSetBalanceCall,
  BalancesTransferCall,
  BalancesTransferAllCall,
  BalancesTransferKeepAliveCall,
} from "../../../types/calls";
import { ChainContext, Call } from "../../../types/support";
import { UnknownVersionError, UnknownCallError } from "../../../utils/errors";

export function normalizeBalancesCallsArgs(ctx: ChainContext, call: Call) {
  let e;
  switch (call.name) {
    case "Balances.force_transfer":
      e = new BalancesForceTransferCall(ctx, call);
      if (e.isV3) {
        return call.args;
      } else if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "Balances.force_unreserve":
      e = new BalancesForceUnreserveCall(ctx, call);
      if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "Balances.set_balance":
      e = new BalancesSetBalanceCall(ctx, call);
      if (e.isV3) {
        return call.args;
      } else if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "Balances.transfer":
      e = new BalancesTransferCall(ctx, call);
      if (e.isV3) {
        return call.args;
      } else if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "Balances.transfer_all":
      e = new BalancesTransferAllCall(ctx, call);
      if (e.isV3) {
        return call.args;
      } else if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }
    case "Balances.transfer_keep_alive":
      e = new BalancesTransferKeepAliveCall(ctx, call);
      if (e.isV3) {
        return call.args;
      } else if (e.isV12) {
        return call.args;
      } else {
        throw new UnknownVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
