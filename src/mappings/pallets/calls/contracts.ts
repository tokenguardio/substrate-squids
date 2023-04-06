import {
  ContractsCallCall,
  ContractsClaimSurchargeCall,
  ContractsInstantiateCall,
  ContractsInstantiateWithCodeCall,
  ContractsPutCodeCall,
  ContractsRemoveCodeCall,
  ContractsUpdateScheduleCall,
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
      if (e.isV31) {
        return { ...call.args, storageDepositLimit: null };
      } else if (e.isV45) {
        return { ...call.args, storageDepositLimit: null };
      } else if (e.isV53) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.claim_surcharge":
      e = new ContractsClaimSurchargeCall(ctx, call);
      if (e.isV31) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.instantiate":
      e = new ContractsInstantiateCall(ctx, call);
      if (e.isV31) {
        return {
          value: call.args.endowment,
          gasLimit: call.args.gasLimit,
          codeHash: call.args.codeHash,
          data: call.args.data,
          salt: null,
          storageDepositLimit: null,
        };
      } else if (e.isV45) {
        return {
          value: call.args.endowment,
          gasLimit: call.args.gasLimit,
          codeHash: call.args.codeHash,
          data: call.args.data,
          salt: call.args.salt,
          storageDepositLimit: null,
        };
      } else if (e.isV53) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.instantiate_with_code":
      e = new ContractsInstantiateWithCodeCall(ctx, call);
      if (e.isV53) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.put_code":
      e = new ContractsPutCodeCall(ctx, call);
      if (e.isV31) {
        return {
          code: call.args.code,
        };
      } else if (e.isV38) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.remove_code":
      e = new ContractsRemoveCodeCall(ctx, call);
      if (e.isV53) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.update_schedule":
      e = new ContractsUpdateScheduleCall(ctx, call);
      if (e.isV31) {
        return call.args;
      } else if (e.isV38) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case "Contracts.upload_code":
      e = new ContractsUploadCodeCall(ctx, call);
      if (e.isV53) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
