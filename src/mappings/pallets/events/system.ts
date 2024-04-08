import { system } from "../../../types/events";
import { Event } from "./../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeSystemEventsArgs(event: Event): any {
  switch (event.name) {
    case system.codeUpdated.name:
      if (system.codeUpdated.v0.is(event)) {
        return system.codeUpdated.v0.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.extrinsicFailed.name:
      if (system.extrinsicFailed.v0.is(event)) {
        const [error, info] = system.extrinsicFailed.v0.decode(event);
        return { dispatchError: error, dispatchInfo: info };
      } else if (system.extrinsicFailed.v9110.is(event)) {
        const [error, info] = system.extrinsicFailed.v9110.decode(event);
        return { dispatchError: error, dispatchInfo: info };
      } else if (system.extrinsicFailed.v9170.is(event)) {
        return system.extrinsicFailed.v9170.decode(event);
      } else if (system.extrinsicFailed.v9190.is(event)) {
        return system.extrinsicFailed.v9190.decode(event);
      } else if (system.extrinsicFailed.v9291.is(event)) {
        return system.extrinsicFailed.v9291.decode(event);
      } else if (system.extrinsicFailed.v9340.is(event)) {
        return system.extrinsicFailed.v9340.decode(event);
      } else if (system.extrinsicFailed.v9420.is(event)) {
        return system.extrinsicFailed.v9420.decode(event);
      } else if (system.extrinsicFailed.v9430.is(event)) {
        return system.extrinsicFailed.v9430.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.extrinsicSuccess.name:
      if (system.extrinsicSuccess.v0.is(event)) {
        return { dispatchInfo: system.extrinsicSuccess.v0.decode(event) };
      } else if (system.extrinsicSuccess.v9170.is(event)) {
        return system.extrinsicSuccess.v9170.decode(event);
      } else if (system.extrinsicSuccess.v9291.is(event)) {
        return system.extrinsicSuccess.v9291.decode(event);
      } else if (system.extrinsicSuccess.v9340.is(event)) {
        return system.extrinsicSuccess.v9340.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.killedAccount.name:
      if (system.killedAccount.v0.is(event)) {
        const account = system.killedAccount.v0.decode(event);
        return { account };
      } else if (system.killedAccount.v9170.is(event)) {
        return system.killedAccount.v9170.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.newAccount.name:
      if (system.newAccount.v0.is(event)) {
        return { account: system.newAccount.v0.decode(event) };
      } else if (system.newAccount.v9170.is(event)) {
        return system.newAccount.v9170.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case system.remarked.name:
      if (system.remarked.v30.is(event)) {
        const [origin, remarkHash] = system.remarked.v30.decode(event);
        return { sender: origin, hash: remarkHash };
      } else if (system.remarked.v9170.is(event)) {
        return system.remarked.v9170.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
