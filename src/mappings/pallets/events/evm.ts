import {
  EvmAddStorageQuotaEvent,
  EvmBalanceDepositEvent,
  EvmBalanceWithdrawEvent,
  EvmCanceledTransferMaintainerEvent,
  EvmConfirmedTransferMaintainerEvent,
  EvmContractDeployedEvent,
  EvmContractDevelopmentDisabledEvent,
  EvmContractDevelopmentEnabledEvent,
  EvmContractSelfdestructedEvent,
  EvmContractSetCodeEvent,
  EvmCreatedEvent,
  EvmCreatedFailedEvent,
  EvmExecutedEvent,
  EvmExecutedFailedEvent,
  EvmLogEvent,
  EvmRejectedTransferMaintainerEvent,
  EvmRemoveStorageQuotaEvent,
  EvmTransferredMaintainerEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeEVMEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "EVM.AddStorageQuota":
      e = new EvmAddStorageQuotaEvent(ctx, event);
      if (e.isV5) {
        let [address, bytes] = event.args;
        return {
          address,
          bytes,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.BalanceDeposit":
      e = new EvmBalanceDepositEvent(ctx, event);
      if (e.isV5) {
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
      if (e.isV5) {
        let [sender, address, value] = event.args;
        return {
          sender,
          address,
          value,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.CanceledTransferMaintainer":
      e = new EvmCanceledTransferMaintainerEvent(ctx, event);
      if (e.isV5) {
        let [contract, address] = event.args;
        return {
          contract,
          address,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.ConfirmedTransferMaintainer":
      e = new EvmConfirmedTransferMaintainerEvent(ctx, event);
      if (e.isV5) {
        let [contract, address] = event.args;
        return {
          contract,
          address,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.ContractDeployed":
      e = new EvmContractDeployedEvent(ctx, event);
      if (e.isV5) {
        let contract = event.args;
        return {
          contract,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.ContractDevelopmentDisabled":
      e = new EvmContractDevelopmentDisabledEvent(ctx, event);
      if (e.isV5) {
        let who = event.args;
        return {
          who,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.ContractDevelopmentEnabled":
      e = new EvmContractDevelopmentEnabledEvent(ctx, event);
      if (e.isV5) {
        let who = event.args;
        return {
          who,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.ContractSelfdestructed":
      e = new EvmContractSelfdestructedEvent(ctx, event);
      if (e.isV5) {
        let contract = event.args;
        return {
          caller: null,
          contract,
        };
      } else if (e.isV10) {
        let [caller, contract] = event.args;
        return {
          caller,
          contract,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.ContractSetCode":
      e = new EvmContractSetCodeEvent(ctx, event);
      if (e.isV5) {
        let contract = event.args;
        return {
          contract,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.Created":
      e = new EvmCreatedEvent(ctx, event);
      if (e.isV5) {
        let contract = event.args;
        return {
          maintainer: null,
          contract,
          gasUsed: null,
          storageUsed: null,
        };
      } else if (e.isV10) {
        let [maintainer, contract, [gasUsed, storageUsed]] = event.args;
        return {
          maintainer,
          contract,
          gasUsed,
          storageUsed,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.CreatedFailed":
      e = new EvmCreatedFailedEvent(ctx, event);
      if (e.isV5) {
        let [contract, exitReason, output] = event.args;
        return {
          maintainer: null,
          contract,
          exitReason,
          output,
          gasUsed: null,
          storageUsed: null,
        };
      } else if (e.isV10) {
        let [maintainer, contract, exitReason, output, [gasUsed, storageUsed]] =
          event.args;
        return {
          maintainer,
          contract,
          exitReason,
          output,
          gasUsed,
          storageUsed,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.Executed":
      e = new EvmExecutedEvent(ctx, event);
      if (e.isV5) {
        let contract = event.args;
        return {
          caller: null,
          contract,
          gasUsed: null,
          storageUsed: null,
        };
      } else if (e.isV10) {
        let [caller, contract, [gasUsed, storageUsed]] = event.args;
        return {
          caller,
          contract,
          gasUsed,
          storageUsed,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.ExecutedFailed":
      e = new EvmExecutedFailedEvent(ctx, event);
      if (e.isV5) {
        let [contract, exitReason, output] = event.args;
        return {
          caller: null,
          contract,
          exitReason,
          output,
          gasUsed: null,
          storageUsed: null,
        };
      } else if (e.isV10) {
        let [caller, contract, exitReason, output, [gasUsed, storageUsed]] =
          event.args;
        return {
          caller,
          contract,
          exitReason,
          output,
          gasUsed,
          storageUsed,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.Log":
      e = new EvmLogEvent(ctx, event);
      if (e.isV5) {
        let log = event.args;
        return {
          log,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.RejectedTransferMaintainer":
      e = new EvmRejectedTransferMaintainerEvent(ctx, event);
      if (e.isV5) {
        let [contract, address] = event.args;
        return {
          contract,
          address,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.RemoveStorageQuota":
      e = new EvmRemoveStorageQuotaEvent(ctx, event);
      if (e.isV5) {
        let [address, bytes] = event.args;
        return {
          address,
          bytes,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "EVM.TransferredMaintainer":
      e = new EvmTransferredMaintainerEvent(ctx, event);
      if (e.isV5) {
        let [contract, address] = event.args;
        return {
          contract,
          address,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
