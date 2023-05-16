import {
  EvmCallCall,
  EvmCreateCall,
  EvmCreate2Call,
  EvmHotfixIncAccountSufficientsCall,
  EvmWithdrawCall,
} from "../../../types/calls";
import { ChainContext, Call } from "../../../types/support";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeEVMCallsArgs(ctx: ChainContext, call: Call) {
  let e;
  switch (call.name) {
    case "EVM.call":
      e = new EvmCallCall(ctx, call);
      if (e.isV1) {
        return {
          ...call.args,
          maxFeePerGas: null,
          maxPriorityFeePerGas: null,
          accessList: null,
        };
      } else if (e.isV9) {
        return {
          ...call.args,
          gasPrice: null,
        };
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.create":
      e = new EvmCreateCall(ctx, call);
      if (e.isV1) {
        return {
          ...call.args,
          maxFeePerGas: null,
          maxPriorityFeePerGas: null,
          accessList: null,
        };
      } else if (e.isV9) {
        return {
          ...call.args,
          gasPrice: null,
        };
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.create2":
      e = new EvmCreate2Call(ctx, call);
      if (e.isV1) {
        return {
          ...call.args,
          maxFeePerGas: null,
          maxPriorityFeePerGas: null,
          accessList: null,
        };
      } else if (e.isV9) {
        return {
          ...call.args,
          gasPrice: null,
        };
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.hotfix_inc_account_sufficients":
      e = new EvmHotfixIncAccountSufficientsCall(ctx, call);
      if (e.isV15) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.withdraw":
      e = new EvmWithdrawCall(ctx, call);
      if (e.isV1) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
