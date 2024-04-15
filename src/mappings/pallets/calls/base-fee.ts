import { baseFee } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeBaseFeeCallsArgs(call: Call): any {
  switch (call.name) {
    case baseFee.setBaseFeePerGas.name:
      if (baseFee.setBaseFeePerGas.v9.is(call)) {
        return baseFee.setBaseFeePerGas.v9.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case baseFee.setElasticity.name:
      if (baseFee.setElasticity.v9.is(call)) {
        return baseFee.setElasticity.v9.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case baseFee.setIsActive.name:
      if (baseFee.setIsActive.v9.is(call)) {
        return baseFee.setIsActive.v9.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
