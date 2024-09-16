import { omnipool } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeOmnipoolEventsArgs(event: Event): any {
  switch (event.name) {
    case omnipool.tokenAdded.name:
      if (omnipool.tokenAdded.v115.is(event)) {
        return omnipool.tokenAdded.v115.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.liquidityAdded.name:
      if (omnipool.liquidityAdded.v115.is(event)) {
        return omnipool.liquidityAdded.v115.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.liquidityRemoved.name:
      if (omnipool.liquidityRemoved.v115.is(event)) {
        return omnipool.liquidityRemoved.v115.decode(event);
      } else if (omnipool.liquidityRemoved.v148.is(event)) {
        return omnipool.liquidityRemoved.v148.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.sellExecuted.name:
      if (omnipool.sellExecuted.v115.is(event)) {
        return omnipool.sellExecuted.v115.decode(event);
      } else if (omnipool.sellExecuted.v170.is(event)) {
        return omnipool.sellExecuted.v170.decode(event);
      } else if (omnipool.sellExecuted.v201.is(event)) {
        return omnipool.sellExecuted.v201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.buyExecuted.name:
      if (omnipool.buyExecuted.v115.is(event)) {
        return omnipool.buyExecuted.v115.decode(event);
      } else if (omnipool.buyExecuted.v170.is(event)) {
        return omnipool.buyExecuted.v170.decode(event);
      } else if (omnipool.buyExecuted.v201.is(event)) {
        return omnipool.buyExecuted.v201.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.positionCreated.name:
      if (omnipool.positionCreated.v115.is(event)) {
        return omnipool.positionCreated.v115.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.positionDestroyed.name:
      if (omnipool.positionDestroyed.v115.is(event)) {
        return omnipool.positionDestroyed.v115.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.positionUpdated.name:
      if (omnipool.positionUpdated.v115.is(event)) {
        return omnipool.positionUpdated.v115.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.tradableStateUpdated.name:
      if (omnipool.tradableStateUpdated.v115.is(event)) {
        return omnipool.tradableStateUpdated.v115.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.assetRefunded.name:
      if (omnipool.assetRefunded.v115.is(event)) {
        return omnipool.assetRefunded.v115.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.assetWeightCapUpdated.name:
      if (omnipool.assetWeightCapUpdated.v115.is(event)) {
        return omnipool.assetWeightCapUpdated.v115.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.tvlCapUpdated.name:
      if (omnipool.tvlCapUpdated.v125.is(event)) {
        return omnipool.tvlCapUpdated.v125.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.tokenRemoved.name:
      if (omnipool.tokenRemoved.v185.is(event)) {
        return omnipool.tokenRemoved.v185.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case omnipool.protocolLiquidityRemoved.name:
      if (omnipool.protocolLiquidityRemoved.v185.is(event)) {
        return omnipool.protocolLiquidityRemoved.v185.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
