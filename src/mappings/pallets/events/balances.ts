import {
  BalancesBalanceSetEvent,
  BalancesBurnedEvent,
  BalancesDepositEvent,
  BalancesDustLostEvent,
  BalancesEndowedEvent,
  BalancesNewAccountEvent,
  BalancesReapedAccountEvent,
  BalancesReserveRepatriatedEvent,
  BalancesReservedEvent,
  BalancesSlashedEvent,
  BalancesTransferEvent,
  BalancesUnreservedEvent,
  BalancesWithdrawEvent,
  BalancesFrozenEvent,
  BalancesIssuedEvent,
  BalancesLockedEvent,
  BalancesMintedEvent,
  BalancesRescindedEvent,
  BalancesRestoredEvent,
  BalancesSuspendedEvent,
  BalancesThawedEvent,
  BalancesUnlockedEvent,
  BalancesUpgradedEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import { bufferToHex } from "../../../utils/utils";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeBalancesEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Balances.BalanceSet":
      e = new BalancesBalanceSetEvent(ctx, event);
      if (e.isV1031) {
        let [who, free, reserved] = e.asV1031;
        return {
          who: bufferToHex(who),
          free,
          reserved,
        };
      } else if (e.isV9130) {
        return event.args;
      } else if (e.isV9420) {
        return {
          ...event.args,
          reserved: null,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Burned":
      e = new BalancesBurnedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Deposit":
      e = new BalancesDepositEvent(ctx, event);
      if (e.isV1032) {
        let [who, deposit] = e.asV1032;
        return {
          who: bufferToHex(who),
          amount: deposit,
        };
      } else if (e.isV9130) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.DustLost":
      e = new BalancesDustLostEvent(ctx, event);
      if (e.isV1050) {
        let [account, balance] = e.asV1050;
        return {
          account: bufferToHex(account),
          amount: balance,
        };
      } else if (e.isV9130) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Endowed":
      e = new BalancesEndowedEvent(ctx, event);
      if (e.isV1050) {
        let [account, freeBalance] = e.asV1050;
        return {
          account: bufferToHex(account),
          freeBalance,
        };
      } else if (e.isV9130) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Frozen":
      e = new BalancesFrozenEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Issued":
      e = new BalancesIssuedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Locked":
      e = new BalancesLockedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Minted":
      e = new BalancesMintedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.NewAccount":
      e = new BalancesNewAccountEvent(ctx, event);
      if (e.isV1020) {
        let [account, balance] = e.asV1020;
        return {
          account: bufferToHex(account),
          balance,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.ReapedAccount":
      e = new BalancesReapedAccountEvent(ctx, event);
      if (e.isV1020) {
        let account = e.asV1020;
        return {
          account: bufferToHex(account),
          balance: null,
        };
      } else if (e.isV1031) {
        let [account, balance] = e.asV1031;
        return {
          account: bufferToHex(account),
          balance,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Rescinded":
      e = new BalancesRescindedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.ReserveRepatriated":
      e = new BalancesReserveRepatriatedEvent(ctx, event);
      if (e.isV2008) {
        let [from, to, balance, destinationStatus] = e.asV2008;
        return {
          from: bufferToHex(from),
          to: bufferToHex(to),
          amount: balance,
          destinationStatus,
        };
      } else if (e.isV9130) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Reserved":
      e = new BalancesReservedEvent(ctx, event);
      if (e.isV2008) {
        let [who, value] = e.asV2008;
        return {
          who: bufferToHex(who),
          amount: value,
        };
      } else if (e.isV9130) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Restored":
      e = new BalancesRestoredEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Slashed":
      e = new BalancesSlashedEvent(ctx, event);
      if (e.isV9122) {
        let [who, amountSlashed] = e.asV9122;
        return {
          who: bufferToHex(who),
          amount: amountSlashed,
        };
      } else if (e.isV9130) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Suspended":
      e = new BalancesSuspendedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Thawed":
      e = new BalancesThawedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Transfer":
      e = new BalancesTransferEvent(ctx, event);
      if (e.isV1020) {
        let [from, to, value] = e.asV1020;
        return {
          from: bufferToHex(from),
          to: bufferToHex(to),
          amount: value,
        };
      } else if (e.isV1050) {
        let [from, to, value] = e.asV1050;
        return {
          from: bufferToHex(from),
          to: bufferToHex(to),
          amount: value,
        };
      } else if (e.isV9130) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Unlocked":
      e = new BalancesUnlockedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Unreserved":
      e = new BalancesUnreservedEvent(ctx, event);
      if (e.isV2008) {
        let [who, amount] = e.asV2008;
        return {
          who: bufferToHex(who),
          amount: amount,
        };
      } else if (e.isV9130) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Upgraded":
      e = new BalancesUpgradedEvent(ctx, event);
      if (e.isV9420) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "Balances.Withdraw":
      e = new BalancesWithdrawEvent(ctx, event);
      if (e.isV9122) {
        let [who, value] = e.asV9122;
        return {
          who: bufferToHex(who),
          amount: value,
        };
      } else if (e.isV9130) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
