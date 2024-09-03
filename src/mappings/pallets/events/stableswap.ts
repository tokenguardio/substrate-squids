import { stableswap } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeStableswapEventsArgs(event: Event): any {
  switch (event.name) {
    case stableswap.poolCreated.name:
      if (stableswap.poolCreated.v183.is(event)) {
        return stableswap.poolCreated.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case stableswap.feeUpdated.name:
      if (stableswap.feeUpdated.v183.is(event)) {
        return stableswap.feeUpdated.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case stableswap.liquidityAdded.name:
      if (stableswap.liquidityAdded.v183.is(event)) {
        return stableswap.liquidityAdded.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case stableswap.liquidityRemoved.name:
      if (stableswap.liquidityRemoved.v183.is(event)) {
        return stableswap.liquidityRemoved.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case stableswap.sellExecuted.name:
      if (stableswap.sellExecuted.v183.is(event)) {
        return stableswap.sellExecuted.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case stableswap.buyExecuted.name:
      if (stableswap.buyExecuted.v183.is(event)) {
        return stableswap.buyExecuted.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case stableswap.tradableStateUpdated.name:
      if (stableswap.tradableStateUpdated.v183.is(event)) {
        return stableswap.tradableStateUpdated.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case stableswap.amplificationChanging.name:
      if (stableswap.amplificationChanging.v183.is(event)) {
        return stableswap.amplificationChanging.v183.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
