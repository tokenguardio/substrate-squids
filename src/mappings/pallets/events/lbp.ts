import { lbp } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeLbcEventsArgs(event: Event): any {
  switch (event.name) {
    case lbp.poolCreated.name:
      if (lbp.poolCreated.v176.is(event)) {
        return lbp.poolCreated.v176.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lbp.poolUpdated.name:
      if (lbp.poolUpdated.v176.is(event)) {
        return lbp.poolUpdated.v176.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lbp.liquidityAdded.name:
      if (lbp.liquidityAdded.v176.is(event)) {
        return lbp.liquidityAdded.v176.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lbp.liquidityRemoved.name:
      if (lbp.liquidityRemoved.v176.is(event)) {
        return lbp.liquidityRemoved.v176.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lbp.sellExecuted.name:
      if (lbp.sellExecuted.v176.is(event)) {
        return lbp.sellExecuted.v176.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case lbp.buyExecuted.name:
      if (lbp.buyExecuted.v176.is(event)) {
        return lbp.buyExecuted.v176.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
