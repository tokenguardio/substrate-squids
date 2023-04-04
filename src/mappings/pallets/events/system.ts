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
      if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isV12) {
        let [error, info] = e.asV12;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV20) {
        return event.name;
      } else if (e.isV45) {
        return event.name;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isV12) {
        let dispatchInfo = e.asV12;
        return { dispatchInfo };
      } else if (e.isV20) {
        return event.args;
      } else if (e.isV45) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isV12) {
        let account = e.asV12;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV20) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isV12) {
        let account = e.asV12;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV20) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isV12) {
        let [origin, remarkHash] = e.asV12;
        return {
          sender: bufferToHex(origin),
          hash: bufferToHex(remarkHash),
        };
      } else if (e.isV20) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
