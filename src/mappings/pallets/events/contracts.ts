import {
  ContractsCodeRemovedEvent,
  ContractsCodeStoredEvent,
  ContractsContractCodeUpdatedEvent,
  ContractsContractEmittedEvent,
  ContractsContractExecutionEvent,
  ContractsDispatchedEvent,
  ContractsEvictedEvent,
  ContractsInstantiatedEvent,
  ContractsRestoredEvent,
  ContractsScheduleUpdatedEvent,
  ContractsTerminatedEvent,
  ContractsTransferEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import { bufferToHex } from "../../../utils/utils";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeContractsEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Contracts.CodeRemoved":
      e = new ContractsCodeRemovedEvent(ctx, event);
      if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.CodeStored":
      e = new ContractsCodeStoredEvent(ctx, event);
      if (e.isV31) {
        let codeHash = e.asV31;
        return {
          codeHash: bufferToHex(codeHash),
        };
      } else if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.ContractCodeUpdated":
      e = new ContractsContractCodeUpdatedEvent(ctx, event);
      if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.ContractEmitted":
      e = new ContractsContractEmittedEvent(ctx, event);
      if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.ContractExecution":
      e = new ContractsContractExecutionEvent(ctx, event);
      if (e.isV31) {
        let [account, vec] = e.asV31;
        return {
          account: bufferToHex(account),
          vec: bufferToHex(vec),
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.Dispatched":
      e = new ContractsDispatchedEvent(ctx, event);
      if (e.isV31) {
        let [account, success] = e.asV31;
        return {
          account: bufferToHex(account),
          success,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.Evicted":
      e = new ContractsEvictedEvent(ctx, event);
      if (e.isV31) {
        let [contract, tombstone] = e.asV31;
        return {
          contract: bufferToHex(contract),
          tombstone,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.Instantiated":
      e = new ContractsInstantiatedEvent(ctx, event);
      if (e.isV31) {
        let [deployer, contract] = e.asV31;
        return {
          deployer: bufferToHex(deployer),
          contract: bufferToHex(contract),
        };
      } else if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.Restored":
      e = new ContractsRestoredEvent(ctx, event);
      if (e.isV31) {
        let [donor, dest, codeHash, rentAllowance] = e.asV31;
        return {
          donor: bufferToHex(donor),
          dest: bufferToHex(dest),
          codeHash: bufferToHex(codeHash),
          rentAllowance,
        };
      } else if (e.isV38) {
        let [donor, dest, codeHash, rentAllowance] = e.asV38;
        return {
          donor: bufferToHex(donor),
          dest: bufferToHex(dest),
          codeHash: bufferToHex(codeHash),
          rentAllowance,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.ScheduleUpdated":
      e = new ContractsScheduleUpdatedEvent(ctx, event);
      if (e.isV31) {
        let n = e.asV31;
        return { n };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.Terminated":
      e = new ContractsTerminatedEvent(ctx, event);
      if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Contracts.Transfer":
      e = new ContractsTransferEvent(ctx, event);
      if (e.isV31) {
        let [from, to, value] = e.asV31;
        return {
          from: bufferToHex(from),
          to: bufferToHex(to),
          value,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
