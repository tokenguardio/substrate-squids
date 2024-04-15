import { evm } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeEVMEventsArgs(event: Event): any {
  switch (event.name) {
    case evm.balanceDeposit.name:
      if (evm.balanceDeposit.v1.is(event)) {
        const [sender, address, value] = evm.balanceDeposit.v1.decode(event);
        return { sender, address, value };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case evm.balanceWithdraw.name:
      if (evm.balanceWithdraw.v1.is(event)) {
        const [sender, address, value] = evm.balanceWithdraw.v1.decode(event);
        return { sender, address, value };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case evm.created.name:
      if (evm.created.v1.is(event)) {
        const address = evm.created.v1.decode(event);
        return { address };
      } else if (evm.created.v33.is(event)) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case evm.createdFailed.name:
      if (evm.createdFailed.v1.is(event)) {
        const address = evm.createdFailed.v1.decode(event);
        return { address };
      } else if (evm.createdFailed.v33.is(event)) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case evm.executed.name:
      if (evm.executed.v1.is(event)) {
        const address = evm.executed.v1.decode(event);
        return { address };
      } else if (evm.executed.v33.is(event)) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case evm.executedFailed.name:
      if (evm.executedFailed.v1.is(event)) {
        const address = evm.executedFailed.v1.decode(event);
        return { address };
      } else if (evm.executedFailed.v33.is(event)) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case evm.log.name:
      if (evm.log.v1.is(event)) {
        const log = evm.log.v1.decode(event);
        return { log };
      } else if (evm.log.v33.is(event)) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    default:
      throw new UnknownEventError(event.name);
  }
}
