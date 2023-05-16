import {
  EvmBalanceDepositEvent,
  EvmBalanceWithdrawEvent,
  EvmCreatedEvent,
  EvmCreatedFailedEvent,
  EvmExecutedEvent,
  EvmExecutedFailedEvent,
  EvmLogEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeEVMEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "EVM.BalanceDeposit":
      e = new EvmBalanceDepositEvent(ctx, event);
      if (e.isV1) {
        let [sender, address, value] = event.args;
        return {
          sender,
          address,
          value,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.BalanceWithdraw":
      e = new EvmBalanceWithdrawEvent(ctx, event);
      if (e.isV1) {
        let [sender, address, value] = event.args;
        return {
          sender,
          address,
          value,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.Created":
      e = new EvmCreatedEvent(ctx, event);
      if (e.isV1) {
        let address = event.args;
        return {
          address,
        };
      } else if (e.isV33) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.CreatedFailed":
      e = new EvmCreatedFailedEvent(ctx, event);
      if (e.isV1) {
        let address = event.args;
        return {
          address,
        };
      } else if (e.isV33) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.Executed":
      e = new EvmExecutedEvent(ctx, event);
      if (e.isV1) {
        let address = event.args;
        return {
          address,
        };
      } else if (e.isV33) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.ExecutedFailed":
      e = new EvmExecutedFailedEvent(ctx, event);
      if (e.isV1) {
        let address = event.args;
        return {
          address,
        };
      } else if (e.isV33) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.Log":
      e = new EvmLogEvent(ctx, event);
      if (e.isV1) {
        let log = event.args;
        return {
          log,
        };
      } else if (e.isV33) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
