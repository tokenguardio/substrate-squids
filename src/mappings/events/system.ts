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
      if (e.isEfinityV1) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isEfinityV1) {
        let [error, info] = e.asEfinityV1;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isEfinityV2) {
        return event.args;
      } else if (e.isEfinityV3) {
        return event.args;
      } else if (e.isEfinityV3000) {
        return event.args;
      } else if (e.isEfinityV3012) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isEfinityV1) {
        let dispatchInfo = e.asEfinityV1;
        return { dispatchInfo };
      } else if (e.isEfinityV2) {
        return event.args;
      } else if (e.isEfinityV3000) {
        return event.args;
      } else if (e.isEfinityV3012) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isEfinityV1) {
        let account = e.asEfinityV1;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isEfinityV2) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isEfinityV1) {
        let account = e.asEfinityV1;
        return {
          account: bufferToHex(account),
        };
      } else if (e.isEfinityV2) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isEfinityV1) {
        let [origin, remarkHash] = e.asEfinityV1;
        return {
          sender: bufferToHex(origin),
          hash: bufferToHex(remarkHash),
        };
      } else if (e.isEfinityV2) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
