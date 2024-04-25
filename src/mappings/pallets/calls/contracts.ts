import { contracts } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeContractsCallsArgs(call: Call): any {
  switch (call.name) {
    case contracts.call.name:
      if (contracts.call.v55.is(call)) {
        return contracts.call.v55.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case contracts.callOldWeight.name:
      if (contracts.callOldWeight.v55.is(call)) {
        return contracts.callOldWeight.v55.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case contracts.instantiate.name:
      if (contracts.instantiate.v55.is(call)) {
        return contracts.instantiate.v55.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case contracts.instantiateOldWeight.name:
      if (contracts.instantiateOldWeight.v55.is(call)) {
        return contracts.instantiateOldWeight.v55.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case contracts.instantiateWithCode.name:
      if (contracts.instantiateWithCode.v55.is(call)) {
        return contracts.instantiateWithCode.v55.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case contracts.instantiateWithCodeOldWeight.name:
      if (contracts.instantiateWithCodeOldWeight.v55.is(call)) {
        return contracts.instantiateWithCodeOldWeight.v55.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case contracts.migrate.name:
      if (contracts.migrate.v64.is(call)) {
        return contracts.migrate.v64.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case contracts.removeCode.name:
      if (contracts.removeCode.v55.is(call)) {
        return contracts.removeCode.v55.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case contracts.setCode.name:
      if (contracts.setCode.v55.is(call)) {
        return contracts.setCode.v55.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }
    case contracts.uploadCode.name:
      if (contracts.uploadCode.v55.is(call)) {
        return contracts.uploadCode.v55.decode(call);
      } else if (contracts.uploadCode.v64.is(call)) {
        return contracts.uploadCode.v64.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
