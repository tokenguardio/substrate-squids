import { EthereumExecutedEvent } from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeEthereumEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Ethereum.Executed":
      e = new EthereumExecutedEvent(ctx, event);
      if (e.isV1) {
        let [from, to, transactionHash, exitReason] = event.args;
        return {
          from,
          to,
          transactionHash,
          exitReason,
        };
      } else if (e.isV9) {
        let [from, to, transactionHash, exitReason] = event.args;
        return {
          from,
          to,
          transactionHash,
          exitReason,
        };
      } else if (e.isV15) {
        let [from, to, transactionHash, exitReason] = event.args;
        return {
          from,
          to,
          transactionHash,
          exitReason,
        };
      } else if (e.isV23) {
        let [from, to, transactionHash, exitReason] = event.args;
        return {
          from,
          to,
          transactionHash,
          exitReason,
        };
      } else if (e.isV30) {
        let [from, to, transactionHash, exitReason] = event.args;
        return {
          from,
          to,
          transactionHash,
          exitReason,
        };
      } else if (e.isV33) {
        return event.args;
      } else if (e.isV43) {
        return event.args;
      } else if (e.isV64) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
