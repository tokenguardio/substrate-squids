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
      if (e.isV31) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isV31) {
        let [error, info] = e.asV31;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV38) {
        let [error, info] = e.asV38;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isV31) {
        let dispatchInfo = e.asV31;
        return { dispatchInfo };
      } else if (e.isV38) {
        let dispatchInfo = e.asV38;
        return { dispatchInfo };
      } else if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isV38) {
        let account = e.asV38;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isV38) {
        let account = e.asV38;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isV53) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
