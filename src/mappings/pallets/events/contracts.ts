import { contracts } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeContractsEventsArgs(event: Event): any {
  switch (event.name) {
    case contracts.called.name:
      if (contracts.called.v59.is(event)) {
        return contracts.called.v59.decode(event);
      } else if (contracts.called.v68.is(event)) {
        const { contract, caller } = contracts.called.v68.decode(event);
        return {
          contract,
          caller: caller.__kind === "Signed" ? caller.value : caller.__kind,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case contracts.codeRemoved.name:
      if (contracts.codeRemoved.v59.is(event)) {
        return contracts.codeRemoved.v59.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.codeStored.name:
      if (contracts.codeStored.v59.is(event)) {
        return contracts.codeStored.v59.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.contractCodeUpdated.name:
      if (contracts.contractCodeUpdated.v59.is(event)) {
        return contracts.contractCodeUpdated.v59.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.contractEmitted.name:
      if (contracts.contractEmitted.v59.is(event)) {
        return contracts.contractEmitted.v59.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.delegateCalled.name:
      if (contracts.delegateCalled.v59.is(event)) {
        return contracts.delegateCalled.v59.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.instantiated.name:
      if (contracts.instantiated.v59.is(event)) {
        return contracts.instantiated.v59.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case contracts.terminated.name:
      if (contracts.terminated.v59.is(event)) {
        return contracts.terminated.v59.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
