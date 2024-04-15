import { ethereum } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeEthereumEventsArgs(event: Event): any {
  switch (event.name) {
    case ethereum.executed.name:
      if (ethereum.executed.v1.is(event)) {
        const [from, to, transactionHash, exitReason] =
          ethereum.executed.v1.decode(event);
        return { from, to, transactionHash, exitReason };
      } else if (ethereum.executed.v9.is(event)) {
        const [from, to, transactionHash, exitReason] =
          ethereum.executed.v9.decode(event);
        return { from, to, transactionHash, exitReason };
      } else if (ethereum.executed.v23.is(event)) {
        const [from, to, transactionHash, exitReason] =
          ethereum.executed.v23.decode(event);
        return { from, to, transactionHash, exitReason };
      } else if (ethereum.executed.v30.is(event)) {
        const [from, to, transactionHash, exitReason] =
          ethereum.executed.v30.decode(event);
        return { from, to, transactionHash, exitReason };
      } else if (ethereum.executed.v33.is(event)) {
        return ethereum.executed.v33.decode(event);
      } else if (ethereum.executed.v43.is(event)) {
        return ethereum.executed.v43.decode(event);
      } else if (ethereum.executed.v64.is(event)) {
        return ethereum.executed.v64.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
