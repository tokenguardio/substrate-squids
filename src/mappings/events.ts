import {
  EvmContractSelfdestructedEvent,
  EvmCreatedEvent,
  EvmCreatedFailedEvent,
  EvmExecutedEvent,
  EvmExecutedFailedEvent,
  OffencesOffenceEvent,
  TokensDustLostEvent,
} from "../types/events";
import { ChainContext, Event } from "../types/support";

export function normalizeEventArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "EVM.ContractSelfdestructed":
      e = new EvmContractSelfdestructedEvent(ctx, event);
      if (e.isV5) {
        return { contract: bufferToHex(e.asV5), caller: null };
      } else if (e.isV10) {
        let [caller, contract] = e.asV10;
        return { contract: bufferToHex(contract), caller: bufferToHex(caller) };
      } else {
        throw new UknownVersionError();
      }
    case "EVM.Created":
      e = new EvmCreatedEvent(ctx, event);
      if (e.isV5) {
        return {
          maintainer: null,
          contract: bufferToHex(e.asV5),
          gasUsed: null,
          storageUsed: null,
        };
      } else if (e.isV10) {
        let [maintainer, contract, [gasUsed, storageUsed]] = e.asV10;
        return {
          maintainer: bufferToHex(maintainer),
          contract: bufferToHex(contract),
          gasUsed,
          storageUsed,
        };
      } else {
        throw new UknownVersionError();
      }
    case "EVM.CreatedFailed":
      e = new EvmCreatedFailedEvent(ctx, event);
      if (e.isV5) {
        let [contract, exitReason, output] = e.asV5;
        return {
          maintainer: null,
          contract: bufferToHex(contract),
          exitReason: exitReason,
          output: bufferToHex(output),
          gasUsed: null,
          storageUsed: null,
        };
      } else if (e.isV10) {
        let [maintainer, contract, exitReason, output, [gasUsed, storageUsed]] =
          e.asV10;
        return {
          maintainer: bufferToHex(maintainer),
          contract: bufferToHex(contract),
          exitReason,
          output: bufferToHex(output),
          gasUsed,
          storageUsed,
        };
      } else {
        throw new UknownVersionError();
      }
    case "EVM.Executed":
      e = new EvmExecutedEvent(ctx, event);
      if (e.isV5) {
        return {
          caller: null,
          contract: bufferToHex(e.asV5),
          gasUsed: null,
          storageUsed: null,
        };
      } else if (e.isV10) {
        let [caller, contract, [gasUsed, storageUsed]] = e.asV10;
        return {
          caller: bufferToHex(caller),
          contract: bufferToHex(contract),
          gasUsed,
          storageUsed,
        };
      } else {
        throw new UknownVersionError();
      }
    case "EVM.ExecutedFailed":
      e = new EvmExecutedFailedEvent(ctx, event);
      if (e.isV5) {
        let [contract, exitReason, output] = e.asV5;
        return {
          caller: null,
          contract: bufferToHex(contract),
          exitReason,
          output: bufferToHex(output),
          gasUsed: null,
          storageUsed: null,
        };
      } else if (e.isV10) {
        let [caller, contract, exitReason, output, [gasUsed, storageUsed]] =
          e.asV10;
        return {
          caller: bufferToHex(caller),
          contract: bufferToHex(contract),
          exitReason,
          output: bufferToHex(output),
          gasUsed,
          storageUsed,
        };
      } else {
        throw new UknownVersionError();
      }
    case "Offences.Offence":
      e = new OffencesOffenceEvent(ctx, event);
      if (e.isV5) {
        let [kind, timeslot, applied] = e.asV5;
        return {
          kind: bufferToHex(kind),
          timeslot: bufferToHex(timeslot),
          applied,
        };
      } else if (e.isV8) {
        let [kind, timeslot] = e.asV8;
        return {
          kind: bufferToHex(kind),
          timeslot: bufferToHex(timeslot),
          applied: null,
        };
      } else {
        throw new UknownVersionError();
      }
    case "Tokens.DustLost":
      e = new TokensDustLostEvent(ctx, event);
      if (e.isV5) {
        let [account, currencyId, amount] = e.asV5;
        return {
          account: bufferToHex(account),
          currencyId,
          balance: amount,
        };
      } else if (e.isV8) {
        let [currencyId, account, balance] = e.asV8;
        return {
          account: bufferToHex(account),
          currencyId,
          balance,
        };
      } else {
        throw new UknownVersionError();
      }
    default:
      return event.args;
  }
}

function bufferToHex(buffer: Uint8Array) {
  const hexString =
    "0x" +
    Array.from(buffer, (byte) => {
      return ("0" + byte.toString(16)).slice(-2);
    }).join("");
  return hexString;
}

class UknownVersionError extends Error {
  constructor() {
    super("Uknown version");
  }
}
