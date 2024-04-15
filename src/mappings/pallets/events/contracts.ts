import { contracts } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeContractsEventsArgs(event: Event): any {
  switch (event.name) {
    case contracts.called.name:
      if (contracts.called.v55.is(event)) {
        return { ...contracts.called.v55.decode(event), __kind: null };
      } else if (contracts.called.v64.is(event)) {
        let decoded = contracts.called.v64.decode(event);
        return {
          caller:
            decoded.caller.__kind === "Signed" ? decoded.caller.value : null,
          __kind: decoded.caller.__kind,
          contract: decoded.contract,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.codeRemoved.name:
      if (contracts.codeRemoved.v55.is(event)) {
        return contracts.codeRemoved.v55.decode(event);
      } else if (contracts.codeRemoved.v82.is(event)) {
        return contracts.codeRemoved.v82.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.codeStored.name:
      if (contracts.codeStored.v55.is(event)) {
        return contracts.codeStored.v55.decode(event);
      } else if (contracts.codeStored.v82.is(event)) {
        return contracts.codeStored.v82.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.contractCodeUpdated.name:
      if (contracts.contractCodeUpdated.v55.is(event)) {
        return contracts.contractCodeUpdated.v55.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.contractEmitted.name:
      if (contracts.contractEmitted.v55.is(event)) {
        return contracts.contractEmitted.v55.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.delegateCalled.name:
      if (contracts.delegateCalled.v55.is(event)) {
        return contracts.delegateCalled.v55.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.instantiated.name:
      if (contracts.instantiated.v55.is(event)) {
        return contracts.instantiated.v55.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.storageDepositTransferredAndHeld.name:
      if (contracts.storageDepositTransferredAndHeld.v82.is(event)) {
        return contracts.storageDepositTransferredAndHeld.v82.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.storageDepositTransferredAndReleased.name:
      if (contracts.storageDepositTransferredAndReleased.v82.is(event)) {
        return contracts.storageDepositTransferredAndReleased.v82.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.terminated.name:
      if (contracts.terminated.v55.is(event)) {
        return contracts.terminated.v55.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
