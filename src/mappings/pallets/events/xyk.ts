import { xyk } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeXykEventsArgs(event: Event): any {
  switch (event.name) {
    case xyk.liquidityAdded.name:
      if (xyk.liquidityAdded.v183.is(event)) {
        return xyk.liquidityAdded.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xyk.liquidityRemoved.name:
      if (xyk.liquidityRemoved.v183.is(event)) {
        return xyk.liquidityRemoved.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xyk.poolCreated.name:
      if (xyk.poolCreated.v183.is(event)) {
        return xyk.poolCreated.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xyk.poolDestroyed.name:
      if (xyk.poolDestroyed.v183.is(event)) {
        return xyk.poolDestroyed.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xyk.sellExecuted.name:
      if (xyk.sellExecuted.v183.is(event)) {
        return xyk.sellExecuted.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case xyk.buyExecuted.name:
      if (xyk.buyExecuted.v183.is(event)) {
        return xyk.buyExecuted.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
