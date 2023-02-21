import {
  BalancesBalanceSetEvent,
  BalancesDepositEvent,
  BalancesDustLostEvent,
  BalancesEndowedEvent,
  BalancesReserveRepatriatedEvent,
  BalancesReservedEvent,
  BalancesTransferEvent,
  BalancesUnreservedEvent,
} from "../types/events";
import { ChainContext, Event } from "../types/support";
import { bufferToHex } from "../utils/utils";
import { UnknownVersionError, UnknownEventError } from "../utils/errors";

export function normalizeBalancesArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Balances.BalanceSet":
      e = new BalancesBalanceSetEvent(ctx, event);
      if (e.isV5) {
        let [who, free, reserved] = e.asV5;
        return {
          who: bufferToHex(who),
          free,
          reserved,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Deposit":
      e = new BalancesDepositEvent(ctx, event);
      if (e.isV5) {
        let [who, deposit] = e.asV5;
        return {
          who: bufferToHex(who),
          deposit,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.DustLost":
      e = new BalancesDustLostEvent(ctx, event);
      if (e.isV5) {
        let [account, balance] = e.asV5;
        return {
          account: bufferToHex(account),
          balance,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Endowed":
      e = new BalancesEndowedEvent(ctx, event);
      if (e.isV5) {
        let [account, free_balance] = e.asV5;
        return {
          account: bufferToHex(account),
          free_balance,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.ReserveRepatriated":
      e = new BalancesReserveRepatriatedEvent(ctx, event);
      if (e.isV5) {
        let [from, to, balance, destination_status] = e.asV5;
        return {
          from: bufferToHex(from),
          to: bufferToHex(to),
          balance,
          destination_status,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Reserved":
      e = new BalancesReservedEvent(ctx, event);
      if (e.isV5) {
        let [who, value] = e.asV5;
        return {
          who: bufferToHex(who),
          value,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Transfer":
      e = new BalancesTransferEvent(ctx, event);
      if (e.isV5) {
        let [from, to, value] = e.asV5;
        return {
          from: bufferToHex(from),
          to: bufferToHex(to),
          value,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Unreserved":
      e = new BalancesUnreservedEvent(ctx, event);
      if (e.isV5) {
        let [who, value] = e.asV5;
        return {
          who: bufferToHex(who),
          value,
        };
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
