import {
  SystemCodeUpdatedEvent,
  SystemExtrinsicFailedEvent,
  SystemExtrinsicSuccessEvent,
  SystemKilledAccountEvent,
  SystemNewAccountEvent,
  SystemRemarkedEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import { bufferToHex } from "../../../utils/utils";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeSystemEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "System.CodeUpdated":
      e = new SystemCodeUpdatedEvent(ctx, event);
      if (e.isV0) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isV0) {
        let [error, info] = e.asV0;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV9110) {
        let [error, info] = e.asV0;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV9170) {
        return event.args;
      } else if (e.isV9190) {
        return event.args;
      } else if (e.isV9291) {
        return event.args;
      } else if (e.isV9340) {
        return event.args;
      } else if (e.isV9420) {
        return event.args;
      } else if (e.isV9430) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isV0) {
        let dispatchInfo = e.asV0;
        return { dispatchInfo };
      } else if (e.isV9170) {
        return event.args;
      } else if (e.isV9291) {
        return event.args;
      } else if (e.isV9340) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isV0) {
        let account = e.asV0;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV9170) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isV0) {
        let account = e.asV0;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV9170) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isV30) {
        let [origin, remarkHash] = e.asV30;
        return {
          sender: bufferToHex(origin),
          hash: bufferToHex(remarkHash),
        };
      } else if (e.isV9170) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
