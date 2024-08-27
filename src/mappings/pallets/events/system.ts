import { system } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeSystemEventsArgs(event: Event): any {
  switch (event.name) {
    case system.codeUpdated.name:
      if (system.codeUpdated.v1.is(event)) {
        return system.codeUpdated.v1.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case system.extrinsicFailed.name:
      if (system.extrinsicFailed.v1.is(event)) {
        const [error, info] = system.extrinsicFailed.v1.decode(event);
        return { dispatchError: error, dispatchInfo: info };
      } else if (system.extrinsicFailed.v9.is(event)) {
        return event.args;
      } else if (system.extrinsicFailed.v15.is(event)) {
        return event.args;
      } else if (system.extrinsicFailed.v43.is(event)) {
        return event.args;
      } else if (system.extrinsicFailed.v49.is(event)) {
        return event.args;
      } else if (system.extrinsicFailed.v64.is(event)) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case system.extrinsicSuccess.name:
      if (system.extrinsicSuccess.v1.is(event)) {
        const decoded = system.extrinsicSuccess.v1.decode(event);
        const newDecoded: any = decoded;
        newDecoded.weight = { refTime: decoded.weight, proofSize: null };
        return { dispatchInfo: newDecoded };
      } else if (system.extrinsicSuccess.v9.is(event)) {
        const decoded = system.extrinsicSuccess.v9.decode(event);
        const newDecoded: any = decoded;
        newDecoded.dispatchInfo.weight = {
          refTime: decoded.dispatchInfo.weight,
          proofSize: null,
        };
        return newDecoded;
      } else if (system.extrinsicSuccess.v43.is(event)) {
        const decoded = system.extrinsicSuccess.v43.decode(event);
        const newDecoded: any = decoded;
        newDecoded.dispatchInfo.weight.proofSize = null;
        return newDecoded;
      } else if (system.extrinsicSuccess.v49.is(event)) {
        return system.extrinsicSuccess.v49.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case system.killedAccount.name:
      if (system.killedAccount.v1.is(event)) {
        const account = system.killedAccount.v1.decode(event);
        return { account };
      } else if (system.killedAccount.v9.is(event)) {
        return system.killedAccount.v9.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case system.newAccount.name:
      if (system.newAccount.v1.is(event)) {
        const account = system.newAccount.v1.decode(event);
        return { account };
      } else if (system.newAccount.v9.is(event)) {
        return system.newAccount.v9.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case system.remarked.name:
      if (system.remarked.v1.is(event)) {
        const [origin, remarkHash] = system.remarked.v1.decode(event);
        return { sender: origin, hash: remarkHash };
      } else if (system.remarked.v9.is(event)) {
        return system.remarked.v9.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case system.upgradeAuthorized.name:
      if (system.upgradeAuthorized.v91.is(event)) {
        return system.upgradeAuthorized.v91.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    default:
      throw new UnknownEventError(event.name);
  }
}
