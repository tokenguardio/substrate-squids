import {
  ContractsCallCall,
  ContractsCallOldWeightCall,
  ContractsInstantiateCall,
  ContractsInstantiateOldWeightCall,
  ContractsInstantiateWithCodeCall,
  ContractsInstantiateWithCodeOldWeightCall,
  ContractsRemoveCodeCall,
  ContractsSetCodeCall,
  ContractsUploadCodeCall,
} from "../../../types/calls";
import { ChainContext, Call } from "../../../types/support";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeContractsCallsArgs(ctx: ChainContext, call: Call) {
  let e;
  switch (call.name) {
    case "Contracts.call":
      e = new ContractsCallCall(ctx, call);
      if (e.isV55) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.call_old_weight":
      e = new ContractsCallOldWeightCall(ctx, call);
      if (e.isV55) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.instantiate":
      e = new ContractsInstantiateCall(ctx, call);
      if (e.isV55) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.instantiate_old_weight":
      e = new ContractsInstantiateOldWeightCall(ctx, call);
      if (e.isV55) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.instantiate_with_code":
      e = new ContractsInstantiateWithCodeCall(ctx, call);
      if (e.isV55) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.instantiate_with_code_old_weight":
      e = new ContractsInstantiateWithCodeOldWeightCall(ctx, call);
      if (e.isV55) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.remove_code":
      e = new ContractsRemoveCodeCall(ctx, call);
      if (e.isV55) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.set_code":
      e = new ContractsSetCodeCall(ctx, call);
      if (e.isV55) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.upload_code":
      e = new ContractsUploadCodeCall(ctx, call);
      if (e.isV55) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
