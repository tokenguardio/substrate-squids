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
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../utils/errors";

export function normalizeSystemEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "System.CodeUpdated":
      e = new SystemCodeUpdatedEvent(ctx, event);
      if (e.isV1045) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isV1020) {
        let [error, info] = e.asV1020;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV1032) {
        let [error, info] = e.asV1032;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV1058) {
        let [error, info] = e.asV1058;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV1062) {
        let [error, info] = e.asV1062;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV9111) {
        let [error, info] = e.asV9111;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV9160) {
        return event.args;
      } else if (e.isV9170) {
        return event.args;
      } else if (e.isV9190) {
        return event.args;
      } else if (e.isV9291) {
        return event.args;
      } else if (e.isV9320) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isV1020) {
        let dispatchInfo = e.asV1020;
        return { dispatchInfo };
      } else if (e.isV1058) {
        let dispatchInfo = e.asV1058;
        return { dispatchInfo };
      } else if (e.isV1062) {
        let dispatchInfo = e.asV1062;
        return { dispatchInfo };
      } else if (e.isV9160) {
        return event.args;
      } else if (e.isV9291) {
        return event.args;
      } else if (e.isV9320) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isV1050) {
        let account = e.asV1050;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV9160) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isV1050) {
        let account = e.asV1050;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isV9160) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isV2030) {
        let [origin, remarkHash] = e.asV2030;
        return {
          sender: bufferToHex(origin),
          hash: bufferToHex(remarkHash),
        };
      } else if (e.isV9160) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
