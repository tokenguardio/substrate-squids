import { ethCall } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeEthCallEventsArgs(event: Event): any {
  switch (event.name) {
    case ethCall.executed.name:
      if (ethCall.executed.v1.is(event)) {
        const [from, result] = ethCall.executed.v1.decode(event);
        return { from, result };
      } else if (ethCall.executed.v9.is(event)) {
        const [from, result] = ethCall.executed.v9.decode(event);
        return { from, result };
      } else if (ethCall.executed.v15.is(event)) {
        const [from, result] = ethCall.executed.v15.decode(event);
        return { from, result };
      } else if (ethCall.executed.v49.is(event)) {
        const [from, result] = ethCall.executed.v49.decode(event);
        return { from, result };
      } else if (ethCall.executed.v64.is(event)) {
        const [from, result] = ethCall.executed.v64.decode(event);
        return { from, result };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
