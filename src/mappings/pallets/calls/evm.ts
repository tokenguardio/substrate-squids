import {
  EvmCallCall,
  EvmCreateCall,
  EvmCreate2Call,
  EvmCreateNetworkContractCall,
  EvmDeployCall,
  EvmDeployFreeCall,
  EvmDisableContractDevelopmentCall,
  EvmEnableContractDevelopmentCall,
  EvmScheduledCallCall,
  EvmSelfdestructCall,
  EvmSetCodeCall,
  EvmTransferMaintainerCall,
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
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.create":
      e = new EvmCreateCall(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.create2":
      e = new EvmCreate2Call(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.create_network_contract":
      e = new EvmCreateNetworkContractCall(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.deploy":
      e = new EvmDeployCall(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.deploy_free":
      e = new EvmDeployFreeCall(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.disable_contract_development":
      e = new EvmDisableContractDevelopmentCall(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.enable_contract_development":
      e = new EvmEnableContractDevelopmentCall(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.scheduled_call":
      e = new EvmScheduledCallCall(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.selfdestruct":
      e = new EvmSelfdestructCall(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.set_code":
      e = new EvmSetCodeCall(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "EVM.transfer_maintainer":
      e = new EvmTransferMaintainerCall(ctx, call);
      if (e.isV5) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
