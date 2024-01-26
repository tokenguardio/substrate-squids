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
import { UnknownVersionError, UnknownEventError } from "../../../utils/errors";

export function normalizeSystemEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "System.CodeUpdated":
      e = new SystemCodeUpdatedEvent(ctx, event);
      if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isV3) {
        let [error, info] = e.asV3;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV12) {
        let [error, info] = e.asV12;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV39) {
        return event.args;
      } else if (e.isV58) {
        return event.args;
      } else if (event.args) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isV3) {
        let dispatchInfo = e.asV3;
        return { dispatchInfo };
      } else if (e.isV39) {
        return event.args;
      } else if (e.isV58) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isV3) {
        let account = e.asV3;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV39) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isV3) {
        let account = e.asV3;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV39) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isV3) {
        let [origin, remarkHash] = e.asV3;
        return {
          sender: bufferToHex(origin),
          hash: bufferToHex(remarkHash),
        };
      } else if (e.isV39) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
