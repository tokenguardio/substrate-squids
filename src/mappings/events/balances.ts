import {
  BalancesBalanceSetEvent,
  BalancesDepositEvent,
  BalancesDustLostEvent,
  BalancesEndowedEvent,
  BalancesReserveRepatriatedEvent,
  BalancesReservedEvent,
  BalancesSlashedEvent,
  BalancesTransferEvent,
  BalancesUnreservedEvent,
  BalancesWithdrawEvent,
} from "../../types/events";
import { ChainContext, Event } from "../../types/support";
import { bufferToHex } from "../../utils/utils";
import { UnknownVersionError, UnknownEventError } from "../../utils/errors";

export function normalizeBalancesEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Balances.BalanceSet":
      e = new BalancesBalanceSetEvent(ctx, event);
      if (e.isV3) {
        // YOUR CODE HERE
      } else if (e.isV12) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Deposit":
      e = new BalancesDepositEvent(ctx, event);
      if (e.isV3) {
        // YOUR CODE HERE
      } else if (e.isV12) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.DustLost":
      e = new BalancesDustLostEvent(ctx, event);
      if (e.isV3) {
        // YOUR CODE HERE
      } else if (e.isV12) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Endowed":
      e = new BalancesEndowedEvent(ctx, event);
      if (e.isV3) {
        // YOUR CODE HERE
      } else if (e.isV12) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.ReserveRepatriated":
      e = new BalancesReserveRepatriatedEvent(ctx, event);
      if (e.isV3) {
        // YOUR CODE HERE
      } else if (e.isV12) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Reserved":
      e = new BalancesReservedEvent(ctx, event);
      if (e.isV3) {
        // YOUR CODE HERE
      } else if (e.isV12) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Slashed":
      e = new BalancesSlashedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Transfer":
      e = new BalancesTransferEvent(ctx, event);
      if (e.isV3) {
        // YOUR CODE HERE
      } else if (e.isV12) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Unreserved":
      e = new BalancesUnreservedEvent(ctx, event);
      if (e.isV3) {
        // YOUR CODE HERE
      } else if (e.isV12) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Withdraw":
      e = new BalancesWithdrawEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}