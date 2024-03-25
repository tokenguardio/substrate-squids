import {
  ContractsCalledEvent,
  ContractsCodeRemovedEvent,
  ContractsCodeStoredEvent,
  ContractsContractCodeUpdatedEvent,
  ContractsContractEmittedEvent,
  ContractsDelegateCalledEvent,
  ContractsInstantiatedEvent,
  ContractsStorageDepositTransferredAndHeldEvent,
  ContractsStorageDepositTransferredAndReleasedEvent,
  ContractsTerminatedEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeContractsEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Contracts.Called":
      e = new ContractsCalledEvent(ctx, event);
      if (e.isV55) {
        return { ...event.args, __kind: null };
      } else if (e.isV64) {
        return {
          caller: event.args.caller?.value,
          __kind: event.args.caller.__kind,
          contract: event.args.contract,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.CodeRemoved":
      e = new ContractsCodeRemovedEvent(ctx, event);
      if (e.isV55) {
        return event.args;
      } else if (e.isV82) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.CodeStored":
      e = new ContractsCodeStoredEvent(ctx, event);
      if (e.isV55) {
        return event.args;
      } else if (e.isV82) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.ContractCodeUpdated":
      e = new ContractsContractCodeUpdatedEvent(ctx, event);
      if (e.isV55) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.ContractEmitted":
      e = new ContractsContractEmittedEvent(ctx, event);
      if (e.isV55) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.DelegateCalled":
      e = new ContractsDelegateCalledEvent(ctx, event);
      if (e.isV55) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.Instantiated":
      e = new ContractsInstantiatedEvent(ctx, event);
      if (e.isV55) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.StorageDepositTransferredAndHeld":
      e = new ContractsStorageDepositTransferredAndHeldEvent(ctx, event);
      if (e.isV82) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.StorageDepositTransferredAndReleased":
      e = new ContractsStorageDepositTransferredAndReleasedEvent(ctx, event);
      if (e.isV82) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.Terminated":
      e = new ContractsTerminatedEvent(ctx, event);
      if (e.isV55) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
