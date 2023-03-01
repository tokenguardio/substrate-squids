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
      if (e.isV23) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isV23) {
        // YOUR CODE HERE
      } else if (e.isV32) {
        // YOUR CODE HERE
      } else if (e.isV34) {
        // YOUR CODE HERE
      } else if (e.isV35) {
        // YOUR CODE HERE
      } else if (e.isV36) {
        // YOUR CODE HERE
      } else if (e.isV42) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isV23) {
        // YOUR CODE HERE
      } else if (e.isV34) {
        // YOUR CODE HERE
      } else if (e.isV42) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isV23) {
        // YOUR CODE HERE
      } else if (e.isV34) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isV23) {
        // YOUR CODE HERE
      } else if (e.isV34) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isV23) {
        // YOUR CODE HERE
      } else if (e.isV34) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
