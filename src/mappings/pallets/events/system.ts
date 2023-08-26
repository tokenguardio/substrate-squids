import {
  SystemCodeUpdatedEvent,
  SystemExtrinsicFailedEvent,
  SystemExtrinsicSuccessEvent,
  SystemKilledAccountEvent,
  SystemNewAccountEvent,
  SystemRemarkedEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import { toHex } from "@subsquid/util-internal-hex";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeSystemEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "System.CodeUpdated":
      e = new SystemCodeUpdatedEvent(ctx, event);
      if (e.isV1) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isV1) {
        let [error, info] = e.asV1;
        return {
          dispatchError: error,
          dispatchInfo: info,
        };
      } else if (e.isV9) {
        return event.args;
      } else if (e.isV15) {
        return event.args;
      } else if (e.isV43) {
        return event.args;
      } else if (e.isV49) {
        return event.args;
      } else if (e.isV64) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isV1) {
        let originalWeight = event.args.weight;
        event.args.weight = {
          refTime: originalWeight,
          proofSize: null,
        };
        return { dispatchInfo: event.args };
      } else if (e.isV9) {
        let originalWeight = event.args.dispatchInfo.weight;
        event.args.dispatchInfo.weight = {
          refTime: originalWeight,
          proofSize: null,
        };
        return event.args;
      } else if (e.isV43) {
        event.args.dispatchInfo.weight.proofSize = null;
        return event.args;
      } else if (e.isV49) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isV1) {
        let account = e.asV1;
        return {
          account: toHex(account),
        };
      } else if (e.isV9) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isV1) {
        let account = e.asV1;
        return {
          account: toHex(account),
        };
      } else if (e.isV9) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isV1) {
        let [origin, remarkHash] = e.asV1;
        return {
          sender: toHex(origin),
          hash: toHex(remarkHash),
        };
      } else if (e.isV9) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
