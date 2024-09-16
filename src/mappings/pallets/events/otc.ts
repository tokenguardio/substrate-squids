import { otc } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeOtcEventsArgs(event: Event): any {
  switch (event.name) {
    case otc.cancelled.name:
      if (otc.cancelled.v138.is(event)) {
        return otc.cancelled.v138.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case otc.filled.name:
      if (otc.filled.v138.is(event)) {
        return otc.filled.v138.decode(event);
      } else if (otc.filled.v253.is(event)) {
        return otc.filled.v253.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case otc.partiallyFilled.name:
      if (otc.partiallyFilled.v138.is(event)) {
        return otc.partiallyFilled.v138.decode(event);
      } else if (otc.partiallyFilled.v253.is(event)) {
        return otc.partiallyFilled.v253.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case otc.placed.name:
      if (otc.placed.v138.is(event)) {
        return otc.placed.v138.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
