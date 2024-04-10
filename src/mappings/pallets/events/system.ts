import { system } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeSystemEventsArgs(event: Event): any {
  switch (event.name) {
    case system.codeUpdated.name:
      if (system.codeUpdated.v3.is(event)) {
        return system.codeUpdated.v3.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.extrinsicFailed.name:
      if (system.extrinsicFailed.v3.is(event)) {
        const [dispatchError, dispatchInfo] =
          system.extrinsicFailed.v3.decode(event);
        return { dispatchError, dispatchInfo };
      } else if (system.extrinsicFailed.v12.is(event)) {
        const [dispatchError, dispatchInfo] =
          system.extrinsicFailed.v12.decode(event);
        return { dispatchError, dispatchInfo };
      } else if (system.extrinsicFailed.v39.is(event)) {
        return system.extrinsicFailed.v39.decode(event);
      } else if (system.extrinsicFailed.v58.is(event)) {
        return system.extrinsicFailed.v58.decode(event);
      } else if (system.extrinsicFailed.v68.is(event)) {
        return system.extrinsicFailed.v68.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.extrinsicSuccess.name:
      if (system.extrinsicSuccess.v3.is(event)) {
        return { dispatchInfo: system.extrinsicSuccess.v3.decode(event) };
      } else if (system.extrinsicSuccess.v39.is(event)) {
        return system.extrinsicSuccess.v39.decode(event);
      } else if (system.extrinsicSuccess.v58.is(event)) {
        return system.extrinsicSuccess.v58.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.killedAccount.name:
      if (system.killedAccount.v3.is(event)) {
        return { account: system.killedAccount.v3.decode(event) };
      } else if (system.killedAccount.v39.is(event)) {
        return system.killedAccount.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.newAccount.name:
      if (system.newAccount.v3.is(event)) {
        return { account: system.newAccount.v3.decode(event) };
      } else if (system.newAccount.v39.is(event)) {
        return system.newAccount.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.remarked.name:
      if (system.remarked.v3.is(event)) {
        const [sender, hash] = system.remarked.v3.decode(event);
        return { sender, hash };
      } else if (system.remarked.v39.is(event)) {
        return system.remarked.v39.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
