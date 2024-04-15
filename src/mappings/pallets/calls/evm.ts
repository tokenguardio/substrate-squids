import { evm } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeEVMCallsArgs(call: Call): any {
  switch (call.name) {
    case evm.call.name:
      if (evm.call.v1.is(call)) {
        return {
          ...evm.call.v1.decode(call),
          maxFeePerGas: null,
          maxPriorityFeePerGas: null,
          accessList: null,
        };
      } else if (evm.call.v9.is(call)) {
        return {
          ...evm.call.v9.decode(call),
          gasPrice: null,
        };
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case evm.create.name:
      if (evm.create.v1.is(call)) {
        return {
          ...evm.create.v1.decode(call),
          maxFeePerGas: null,
          maxPriorityFeePerGas: null,
          accessList: null,
        };
      } else if (evm.create.v9.is(call)) {
        return {
          ...evm.create.v9.decode(call),
          gasPrice: null,
        };
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case evm.create2.name:
      if (evm.create2.v1.is(call)) {
        return {
          ...evm.create2.v1.decode(call),
          maxFeePerGas: null,
          maxPriorityFeePerGas: null,
          accessList: null,
        };
      } else if (evm.create2.v9.is(call)) {
        return {
          ...evm.create2.v9.decode(call),
          gasPrice: null,
        };
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case evm.hotfixIncAccountSufficients.name:
      if (evm.hotfixIncAccountSufficients.v15.is(call)) {
        return evm.hotfixIncAccountSufficients.v15.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case evm.withdraw.name:
      if (evm.withdraw.v1.is(call)) {
        return evm.withdraw.v1.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
