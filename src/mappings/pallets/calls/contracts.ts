import { contracts } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeContractsCallsArgs(call: Call): any {
  switch (call.name) {
    case contracts.call.name:
      if (contracts.call.v59.is(call)) {
        return contracts.call.v59.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case contracts.callOldWeight.name:
      if (contracts.callOldWeight.v59.is(call)) {
        return contracts.callOldWeight.v59.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case contracts.instantiate.name:
      if (contracts.instantiate.v59.is(call)) {
        return contracts.instantiate.v59.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case contracts.instantiateOldWeight.name:
      if (contracts.instantiateOldWeight.v59.is(call)) {
        return contracts.instantiateOldWeight.v59.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case contracts.instantiateWithCode.name:
      if (contracts.instantiateWithCode.v59.is(call)) {
        return contracts.instantiateWithCode.v59.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case contracts.instantiateWithCodeOldWeight.name:
      if (contracts.instantiateWithCodeOldWeight.v59.is(call)) {
        return contracts.instantiateWithCodeOldWeight.v59.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case contracts.migrate.name:
      if (contracts.migrate.v68.is(call)) {
        return contracts.migrate.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case contracts.removeCode.name:
      if (contracts.removeCode.v59.is(call)) {
        return contracts.removeCode.v59.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case contracts.setCode.name:
      if (contracts.setCode.v59.is(call)) {
        return contracts.setCode.v59.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case contracts.uploadCode.name:
      if (contracts.uploadCode.v59.is(call)) {
        return contracts.uploadCode.v59.decode(call);
      } else if (contracts.uploadCode.v68.is(call)) {
        return contracts.uploadCode.v68.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
