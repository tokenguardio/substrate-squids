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
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import { toHex } from "@subsquid/util-internal-hex";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeBalancesEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Balances.BalanceSet":
      e = new BalancesBalanceSetEvent(ctx, event);
      if (e.isV1) {
        let [who, free, reserved] = e.asV1;
        return {
          who: toHex(who),
          free,
          reserved,
        };
      } else if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Deposit":
      e = new BalancesDepositEvent(ctx, event);
      if (e.isV1) {
        let [who, deposit] = e.asV1;
        return {
          who: toHex(who),
          amount: deposit,
        };
      } else if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.DustLost":
      e = new BalancesDustLostEvent(ctx, event);
      if (e.isV1) {
        let [account, balance] = e.asV1;
        return {
          account: toHex(account),
          amount: balance,
        };
      } else if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Endowed":
      e = new BalancesEndowedEvent(ctx, event);
      if (e.isV1) {
        let [account, freeBalance] = e.asV1;
        return {
          account: toHex(account),
          freeBalance,
        };
      } else if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.ReserveRepatriated":
      e = new BalancesReserveRepatriatedEvent(ctx, event);
      if (e.isV1) {
        let [from, to, balance, destinationStatus] = e.asV1;
        return {
          from: toHex(from),
          to: toHex(to),
          amount: balance,
          destinationStatus,
        };
      } else if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Reserved":
      e = new BalancesReservedEvent(ctx, event);
      if (e.isV1) {
        let [who, value] = e.asV1;
        return {
          who: toHex(who),
          amount: value,
        };
      } else if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Slashed":
      e = new BalancesSlashedEvent(ctx, event);
      if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Transfer":
      e = new BalancesTransferEvent(ctx, event);
      if (e.isV1) {
        let [from, to, value] = e.asV1;
        return {
          from: toHex(from),
          to: toHex(to),
          amount: value,
        };
      } else if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Unreserved":
      e = new BalancesUnreservedEvent(ctx, event);
      if (e.isV1) {
        let [who, value] = e.asV1;
        return {
          who: toHex(who),
          amount: value,
        };
      } else if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Withdraw":
      e = new BalancesWithdrawEvent(ctx, event);
      if (e.isV3) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
