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
        // YOUR CODE HERE
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isEfinityV1) {
        // YOUR CODE HERE
      } else if (e.isEfinityV2) {
        // YOUR CODE HERE
      } else if (e.isEfinityV3) {
        // YOUR CODE HERE
      } else if (e.isEfinityV3000) {
        // YOUR CODE HERE
      } else if (e.isEfinityV3012) {
        // YOUR CODE HERE
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isEfinityV1) {
        // YOUR CODE HERE
      } else if (e.isEfinityV2) {
        // YOUR CODE HERE
      } else if (e.isEfinityV3000) {
        // YOUR CODE HERE
      } else if (e.isEfinityV3012) {
        // YOUR CODE HERE
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isEfinityV1) {
        // YOUR CODE HERE
      } else if (e.isEfinityV2) {
        // YOUR CODE HERE
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isEfinityV1) {
        // YOUR CODE HERE
      } else if (e.isEfinityV2) {
        // YOUR CODE HERE
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isEfinityV1) {
        // YOUR CODE HERE
      } else if (e.isEfinityV2) {
        // YOUR CODE HERE
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
