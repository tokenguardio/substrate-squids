import {
  ContractsCalledEvent,
  ContractsCodeRemovedEvent,
  ContractsCodeStoredEvent,
  ContractsContractCodeUpdatedEvent,
  ContractsContractEmittedEvent,
  ContractsDelegateCalledEvent,
  ContractsInstantiatedEvent,
  ContractsTerminatedEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import { UnknownVersionError, UnknownEventError } from "../../../utils/errors";

export function normalizeContractsEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Contracts.Called":
      e = new ContractsCalledEvent(ctx, event);
      if (e.isV59) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Contracts.CodeRemoved":
      e = new ContractsCodeRemovedEvent(ctx, event);
      if (e.isV59) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Contracts.CodeStored":
      e = new ContractsCodeStoredEvent(ctx, event);
      if (e.isV59) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Contracts.ContractCodeUpdated":
      e = new ContractsContractCodeUpdatedEvent(ctx, event);
      if (e.isV59) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Contracts.ContractEmitted":
      e = new ContractsContractEmittedEvent(ctx, event);
      if (e.isV59) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Contracts.DelegateCalled":
      e = new ContractsDelegateCalledEvent(ctx, event);
      if (e.isV59) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Contracts.Instantiated":
      e = new ContractsInstantiatedEvent(ctx, event);
      if (e.isV59) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Contracts.Terminated":
      e = new ContractsTerminatedEvent(ctx, event);
      if (e.isV59) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
