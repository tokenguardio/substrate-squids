import {
  SystemCodeUpdatedEvent,
  SystemExtrinsicFailedEvent,
  SystemExtrinsicSuccessEvent,
  SystemKilledAccountEvent,
  SystemNewAccountEvent,
  SystemRemarkedEvent,
} from "../../types/events";
import { ChainContext, Event } from "../../types/support";
import { bufferToHex } from "../../utils/utils";
import { UnknownVersionError, UnknownEventError } from "../../utils/errors";

export function normalizeSystemEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "System.CodeUpdated":
      e = new SystemCodeUpdatedEvent(ctx, event);
      if (e.isV1) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isV1) {
        let [dispatchError, dispatchInfo] = e.asV1;
        return { dispatchError, dispatchInfo };
      } else if (e.isV6) {
        return e.asV6;
      } else if (e.isV10) {
        return e.asV10;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isV1) {
        let dispatchInfo = e.asV1;
        return { dispatchInfo };
      } else if (e.isV6) {
        return e.asV6;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isV1) {
        let account = e.asV1;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV6) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isV1) {
        let account = e.asV1;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV6) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isV1) {
        let [origin, remark_hash] = e.asV1;
        return {
          sender: bufferToHex(origin),
          hash: bufferToHex(remark_hash),
        };
      } else if (e.isV6) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
