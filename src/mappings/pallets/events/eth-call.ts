import { EthCallExecutedEvent } from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeEthCallEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "EthCall.Executed":
      e = new EthCallExecutedEvent(ctx, event);
      if (e.isV1) {
        let [from, result] = event.args;
        return {
          from,
          result,
        };
      } else if (e.isV9) {
        let [from, result] = event.args;
        return {
          from,
          result,
        };
      } else if (e.isV15) {
        let [from, result] = event.args;
        return {
          from,
          result,
        };
      } else if (e.isV49) {
        let [from, result] = event.args;
        return {
          from,
          result,
        };
      } else if (e.isV64) {
        let [from, result] = event.args;
        return {
          from,
          result,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
