import {
  BalancesBalanceSetEvent,
  BalancesBurnedEvent,
  BalancesDepositEvent,
  BalancesDustLostEvent,
  BalancesEndowedEvent,
  BalancesFrozenEvent,
  BalancesIssuedEvent,
  BalancesLockedEvent,
  BalancesMintedEvent,
  BalancesRescindedEvent,
  BalancesReserveRepatriatedEvent,
  BalancesReservedEvent,
  BalancesRestoredEvent,
  BalancesSlashedEvent,
  BalancesSuspendedEvent,
  BalancesThawedEvent,
  BalancesTransferEvent,
  BalancesUnlockedEvent,
  BalancesUnreservedEvent,
  BalancesUpgradedEvent,
  BalancesWithdrawEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import { bufferToHex } from "../../../utils/utils";
import { UnknownVersionError, UnknownEventError } from "../../../utils/errors";

export function normalizeBalancesEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Balances.BalanceSet":
      e = new BalancesBalanceSetEvent(ctx, event);
      if (e.isV3) {
        let [who, free, reserved] = e.asV3;
        return {
          who: bufferToHex(who),
          free,
          reserved,
        };
      } else if (e.isV12) {
        return event.args;
      } else if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Burned":
      e = new BalancesBurnedEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Deposit":
      e = new BalancesDepositEvent(ctx, event);
      if (e.isV3) {
        let [who, deposit] = e.asV3;
        return {
          who: bufferToHex(who),
          amount: deposit,
        };
      } else if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.DustLost":
      e = new BalancesDustLostEvent(ctx, event);
      if (e.isV3) {
        let [account, balance] = e.asV3;
        return {
          account: bufferToHex(account),
          amount: balance,
        };
      } else if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Endowed":
      e = new BalancesEndowedEvent(ctx, event);
      if (e.isV3) {
        let [account, freeBalance] = e.asV3;
        return {
          account: bufferToHex(account),
          freeBalance,
        };
      } else if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Frozen":
      e = new BalancesFrozenEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Issued":
      e = new BalancesIssuedEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Locked":
      e = new BalancesLockedEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Minted":
      e = new BalancesMintedEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Rescinded":
      e = new BalancesRescindedEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.ReserveRepatriated":
      e = new BalancesReserveRepatriatedEvent(ctx, event);
      if (e.isV3) {
        let [from, to, balance, destinationStatus] = e.asV3;
        return {
          from: bufferToHex(from),
          to: bufferToHex(to),
          amount: balance,
          destinationStatus,
        };
      } else if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Reserved":
      e = new BalancesReservedEvent(ctx, event);
      if (e.isV3) {
        let [who, value] = e.asV3;
        return {
          who: bufferToHex(who),
          amount: value,
        };
      } else if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Restored":
      e = new BalancesRestoredEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Slashed":
      e = new BalancesSlashedEvent(ctx, event);
      if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Suspended":
      e = new BalancesSuspendedEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Thawed":
      e = new BalancesThawedEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Transfer":
      e = new BalancesTransferEvent(ctx, event);
      if (e.isV3) {
        let [from, to, value] = e.asV3;
        return {
          from: bufferToHex(from),
          to: bufferToHex(to),
          amount: value,
        };
      } else if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Unlocked":
      e = new BalancesUnlockedEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Unreserved":
      e = new BalancesUnreservedEvent(ctx, event);
      if (e.isV3) {
        let [who, value] = e.asV3;
        return {
          who: bufferToHex(who),
          amount: value,
        };
      } else if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Upgraded":
      e = new BalancesUpgradedEvent(ctx, event);
      if (e.isV68) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Balances.Withdraw":
      e = new BalancesWithdrawEvent(ctx, event);
      if (e.isV12) {
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
