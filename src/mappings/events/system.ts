import {
  SystemCodeUpdatedEvent,
  SystemExtrinsicFailedEvent,
  SystemExtrinsicSuccessEvent,
  SystemKilledAccountEvent,
  SystemNewAccountEvent,
  SystemRemarkedEvent,
} from "@src/types/events";
import { ChainContext, Event } from "@src/types/support";
import { bufferToHex } from "@src/utils/utils";
import { UnknownVersionError, UnknownEventError } from "@src/utils/errors";

export function normalizeSystemEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "System.CodeUpdated":
      e = new SystemCodeUpdatedEvent(ctx, event);
      if (e.isV1) {
        return e.asV1;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isV1) {
        return e.asV1;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isV1) {
        return e.asV1;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isV1) {
        const args = e.asV1;
        return {
          account: bufferToHex(args.account),
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isV1) {
        const args = e.asV1;
        return {
          account: bufferToHex(args.account),
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isV1) {
        const args = e.asV1;
        return {
          sender: bufferToHex(args.sender),
          hash: bufferToHex(args.hash),
        };
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
