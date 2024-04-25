import { system } from "../../../types/events";
import { Event } from "./../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeSystemEventsArgs(event: Event): any {
  switch (event.name) {
    case system.codeUpdated.name:
      if (system.codeUpdated.v900.is(event)) {
        return system.codeUpdated.v900.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.extrinsicFailed.name:
      if (system.extrinsicFailed.v900.is(event)) {
        let [dispatchError, dispatchInfo] =
          system.extrinsicFailed.v900.decode(event);
        return { dispatchError, dispatchInfo };
      } else if (system.extrinsicFailed.v1300.is(event)) {
        return system.extrinsicFailed.v1300.decode(event);
      } else if (system.extrinsicFailed.v1401.is(event)) {
        return system.extrinsicFailed.v1401.decode(event);
      } else if (system.extrinsicFailed.v1606.is(event)) {
        return system.extrinsicFailed.v1606.decode(event);
      } else if (system.extrinsicFailed.v1901.is(event)) {
        return system.extrinsicFailed.v1901.decode(event);
      } else if (system.extrinsicFailed.v2000.is(event)) {
        return system.extrinsicFailed.v2000.decode(event);
      } else if (system.extrinsicFailed.v2501.is(event)) {
        return system.extrinsicFailed.v2501.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.extrinsicSuccess.name:
      if (system.extrinsicSuccess.v900.is(event)) {
        return { dispatchInfo: system.extrinsicSuccess.v900.decode(event) };
      } else if (system.extrinsicSuccess.v1300.is(event)) {
        return system.extrinsicSuccess.v1300.decode(event);
      } else if (system.extrinsicSuccess.v1901.is(event)) {
        return system.extrinsicSuccess.v1901.decode(event);
      } else if (system.extrinsicSuccess.v2000.is(event)) {
        return system.extrinsicSuccess.v2000.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.killedAccount.name:
      if (system.killedAccount.v900.is(event)) {
        return { account: system.killedAccount.v900.decode(event) };
      } else if (system.killedAccount.v1300.is(event)) {
        return system.killedAccount.v1300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.newAccount.name:
      if (system.newAccount.v900.is(event)) {
        return { account: system.newAccount.v900.decode(event) };
      } else if (system.newAccount.v1300.is(event)) {
        return system.newAccount.v1300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.remarked.name:
      if (system.remarked.v900.is(event)) {
        let [sender, hash] = system.remarked.v900.decode(event);
        return { sender, hash };
      } else if (system.remarked.v1300.is(event)) {
        return system.remarked.v1300.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
