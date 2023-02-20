import {
  ElectionsChangeValidatorsEvent,
  MultisigMultisigExecutedEvent,
  NominationPoolsUnbondedEvent,
  NominationPoolsWithdrawnEvent,
  SchedulerCanceledEvent,
  SchedulerDispatchedEvent,
  SchedulerScheduledEvent,
  StakingBondedEvent,
  StakingChilledEvent,
  StakingEraPaidEvent,
  StakingKickedEvent,
  StakingOldSlashingReportDiscardedEvent,
  StakingPayoutStartedEvent,
  StakingRewardedEvent,
  StakingSlashedEvent,
  StakingUnbondedEvent,
  StakingValidatorPrefsSetEvent,
  StakingWithdrawnEvent,
  SudoKeyChangedEvent,
  SudoSudidEvent,
  SudoSudoAsDoneEvent,
  SystemExtrinsicFailedEvent,
  SystemExtrinsicSuccessEvent,
  SystemKilledAccountEvent,
  SystemNewAccountEvent,
  SystemRemarkedEvent,
  TreasuryAwardedEvent,
  TreasuryBurntEvent,
  TreasuryDepositEvent,
  TreasuryProposedEvent,
  TreasuryRejectedEvent,
  TreasuryRolloverEvent,
  TreasurySpendingEvent,
  UtilityBatchInterruptedEvent,
  UtilityDispatchedAsEvent,
  UtilityItemFailedEvent,
} from "../types/events";
import { ChainContext, Event } from "../types/support";
import { bufferToHex } from "../utils/utils";
import { UnknownVersionError } from "../utils/errors";

export function normalizeEventArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "Elections.ChangeValidators":
      e = new ElectionsChangeValidatorsEvent(ctx, event);
      if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV24) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Multisig.MultisigExecuted":
      e = new MultisigMultisigExecutedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.Unbonded":
      e = new NominationPoolsUnbondedEvent(ctx, event);
      if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV30) {
        // YOUR CODE HERE
      } else if (e.isV38) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "NominationPools.Withdrawn":
      e = new NominationPoolsWithdrawnEvent(ctx, event);
      if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV30) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Scheduler.Canceled":
      e = new SchedulerCanceledEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Scheduler.Dispatched":
      e = new SchedulerDispatchedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Scheduler.Scheduled":
      e = new SchedulerScheduledEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Bonded":
      e = new StakingBondedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Chilled":
      e = new StakingChilledEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.EraPaid":
      e = new StakingEraPaidEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Kicked":
      e = new StakingKickedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.OldSlashingReportDiscarded":
      e = new StakingOldSlashingReportDiscardedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.PayoutStarted":
      e = new StakingPayoutStartedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Rewarded":
      e = new StakingRewardedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Slashed":
      e = new StakingSlashedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Unbonded":
      e = new StakingUnbondedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.ValidatorPrefsSet":
      e = new StakingValidatorPrefsSetEvent(ctx, event);
      if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Staking.Withdrawn":
      e = new StakingWithdrawnEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Sudo.KeyChanged":
      e = new SudoKeyChangedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Sudo.Sudid":
      e = new SudoSudidEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Sudo.SudoAsDone":
      e = new SudoSudoAsDoneEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicFailed":
      e = new SystemExtrinsicFailedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.ExtrinsicSuccess":
      e = new SystemExtrinsicSuccessEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.KilledAccount":
      e = new SystemKilledAccountEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.NewAccount":
      e = new SystemNewAccountEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "System.Remarked":
      e = new SystemRemarkedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Treasury.Awarded":
      e = new TreasuryAwardedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Treasury.Burnt":
      e = new TreasuryBurntEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Treasury.Deposit":
      e = new TreasuryDepositEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Treasury.Proposed":
      e = new TreasuryProposedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Treasury.Rejected":
      e = new TreasuryRejectedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Treasury.Rollover":
      e = new TreasuryRolloverEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Treasury.Spending":
      e = new TreasurySpendingEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Utility.BatchInterrupted":
      e = new UtilityBatchInterruptedEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Utility.DispatchedAs":
      e = new UtilityDispatchedAsEvent(ctx, event);
      if (e.isV12) {
        // YOUR CODE HERE
      } else if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }
    case "Utility.ItemFailed":
      e = new UtilityItemFailedEvent(ctx, event);
      if (e.isV20) {
        // YOUR CODE HERE
      } else if (e.isV45) {
        // YOUR CODE HERE
      } else {
        throw new UnknownVersionError(event.name);
      }

    default:
      return event.args;
  }
}
