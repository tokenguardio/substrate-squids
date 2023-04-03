import type {Result, Option} from './support'

export type Forcing = Forcing_NotForcing | Forcing_ForceNew | Forcing_ForceNone | Forcing_ForceAlways

export interface Forcing_NotForcing {
    __kind: 'NotForcing'
}

export interface Forcing_ForceNew {
    __kind: 'ForceNew'
}

export interface Forcing_ForceNone {
    __kind: 'ForceNone'
}

export interface Forcing_ForceAlways {
    __kind: 'ForceAlways'
}

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface MultiAddress_Index {
    __kind: 'Index'
    value: null
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type Determinism = Determinism_Deterministic | Determinism_AllowIndeterminism

export interface Determinism_Deterministic {
    __kind: 'Deterministic'
}

export interface Determinism_AllowIndeterminism {
    __kind: 'AllowIndeterminism'
}

export interface Timepoint {
    height: number
    index: number
}

export type Call = Call_System | Call_Scheduler | Call_Timestamp | Call_Balances | Call_Staking | Call_Session | Call_Aleph | Call_Elections | Call_Treasury | Call_Vesting | Call_Utility | Call_Multisig | Call_Sudo | Call_Contracts | Call_NominationPools | Call_Identity

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Aleph {
    __kind: 'Aleph'
    value: AlephCall
}

export interface Call_Elections {
    __kind: 'Elections'
    value: ElectionsCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Call_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export type OriginCaller = OriginCaller_system | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * Set the new runtime code.
 * 
 * # <weight>
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
 *   expensive).
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime, but generally this is very
 * expensive. We will treat this as a full block.
 * # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * # <weight>
 * - `O(C)` where `C` length of `code`
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime. We will treat this as a full
 * block. # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Uint8Array
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

/**
 * Anonymously schedule a task after a delay.
 * 
 * # <weight>
 * Same as [`schedule`].
 * # </weight>
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Schedule a named task after a delay.
 * 
 * # <weight>
 * Same as [`schedule_named`](Self::schedule_named).
 * # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Uint8Array
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 * 
 * The dispatch origin for this call must be `Inherent`.
 * 
 * # <weight>
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 * # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * # <weight>
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    newFree: bigint
    newReserved: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_nominate | StakingCall_chill | StakingCall_set_payee | StakingCall_set_controller | StakingCall_set_validator_count | StakingCall_increase_validator_count | StakingCall_scale_validator_count | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash | StakingCall_payout_stakers | StakingCall_rebond | StakingCall_reap_stash | StakingCall_kick | StakingCall_set_staking_configs | StakingCall_chill_other | StakingCall_force_apply_min_commission | StakingCall_set_min_commission

/**
 * Take the origin account as a stash and lock up `value` of its balance. `controller` will
 * be the account that controls it.
 * 
 * `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 * The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 * Emits `Bonded`.
 * # <weight>
 * - Independent of the arguments. Moderate complexity.
 * - O(1).
 * - Three extra DB entries.
 * 
 * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 * unless the `origin` falls below _existential deposit_ and gets removed as dust.
 * ------------------
 * # </weight>
 */
export interface StakingCall_bond {
    __kind: 'bond'
    controller: MultiAddress
    value: bigint
    payee: RewardDestination
}

/**
 * Add some extra amount that have appeared in the stash `free_balance` into the balance up
 * for staking.
 * 
 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 * Use this if there are additional funds in your stash account that you wish to bond.
 * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
 * any limitation on the amount that can be added.
 * 
 * Emits `Bonded`.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - O(1).
 * # </weight>
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 * period ends. If this leaves an amount actively bonded less than
 * T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 * the funds out of management ready for transfer.
 * 
 * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
 * can co-exists at the same time. If there are no unlocking chunks slots available
 * [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
 * 
 * If a user encounters the `InsufficientBond` error when calling this extrinsic,
 * they should call `chill` first in order to free up their bonded funds.
 * 
 * Emits `Unbonded`.
 * 
 * See also [`Call::withdraw_unbonded`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 * This essentially frees up that balance to be used by the stash account to do
 * whatever it wants.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller.
 * 
 * Emits `Withdrawn`.
 * 
 * See also [`Call::unbond`].
 * 
 * # <weight>
 * Complexity O(S) where S is the number of slashing spans to remove
 * NOTE: Weight annotation is the kill scenario, we refund otherwise.
 * # </weight>
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 * Declare the desire to validate for the origin controller.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 * Declare the desire to nominate `targets` for the origin controller.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * # <weight>
 * - The transaction's complexity is proportional to the size of `targets` (N)
 * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
 * - Both the reads and writes follow a similar pattern.
 * # </weight>
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: MultiAddress[]
}

/**
 * Declare no desire to either validate or nominate.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - Contains one read.
 * - Writes are limited to the `origin` account key.
 * # </weight>
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 * (Re-)set the payment target for a controller.
 * 
 * Effects will be felt instantly (as soon as this function is completed successfully).
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - Contains a limited number of reads.
 * - Writes are limited to the `origin` account key.
 * ---------
 * - Weight: O(1)
 * - DB Weight:
 *     - Read: Ledger
 *     - Write: Payee
 * # </weight>
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 * (Re-)set the controller of a stash.
 * 
 * Effects will be felt instantly (as soon as this function is completed successfully).
 * 
 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - Contains a limited number of reads.
 * - Writes are limited to the `origin` account key.
 * ----------
 * Weight: O(1)
 * DB Weight:
 * - Read: Bonded, Ledger New Controller, Ledger Old Controller
 * - Write: Bonded, Ledger New Controller, Ledger Old Controller
 * # </weight>
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
    controller: MultiAddress
}

/**
 * Sets the ideal number of validators.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Weight: O(1)
 * Write: Validator Count
 * # </weight>
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * Increments the ideal number of validators upto maximum of
 * `ElectionProviderBase::MaxWinners`.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Same as [`Self::set_validator_count`].
 * # </weight>
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * Scale up the ideal number of validators by a factor upto maximum of
 * `ElectionProviderBase::MaxWinners`.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Same as [`Self::set_validator_count`].
 * # </weight>
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: number
}

/**
 * Force there to be no new eras indefinitely.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * Thus the election process may be ongoing when this is called. In this case the
 * election will continue until the next era is triggered.
 * 
 * # <weight>
 * - No arguments.
 * - Weight: O(1)
 * - Write: ForceEra
 * # </weight>
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 * Force there to be a new era at the end of the next session. After this, it will be
 * reset to normal (non-forced) behaviour.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * If this is called just before a new era is triggered, the election process may not
 * have enough blocks to get a result.
 * 
 * # <weight>
 * - No arguments.
 * - Weight: O(1)
 * - Write ForceEra
 * # </weight>
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * Set the validators who cannot be slashed (if any).
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: Uint8Array[]
}

/**
 * Force a current staker to become completely unstaked, immediately.
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 * Force there to be a new era at the end of sessions indefinitely.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * If this is called just before a new era is triggered, the election process may not
 * have enough blocks to get a result.
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * Cancel enactment of a deferred slash.
 * 
 * Can be called by the `T::AdminOrigin`.
 * 
 * Parameters: era and indices of the slashes for that era to kill.
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 * Pay out all the stakers behind a single validator for a single era.
 * 
 * - `validator_stash` is the stash account of the validator. Their nominators, up to
 *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
 * - `era` may be any era between `[current_era - history_depth; current_era]`.
 * 
 * The origin of this call must be _Signed_. Any account can call this function, even if
 * it is not one of the stakers.
 * 
 * # <weight>
 * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
 * - Contains a limited number of reads and writes.
 * -----------
 * N is the Number of payouts for the validator (including the validator)
 * Weight:
 * - Reward Destination Staked: O(N)
 * - Reward Destination Controller (Creating): O(N)
 * 
 *   NOTE: weights are assuming that payouts are made to alive stash account (Staked).
 *   Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
 * # </weight>
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: Uint8Array
    era: number
}

/**
 * Rebond a portion of the stash scheduled to be unlocked.
 * 
 * The dispatch origin must be signed by the controller.
 * 
 * # <weight>
 * - Time complexity: O(L), where L is unlocking chunks
 * - Bounded by `MaxUnlockingChunks`.
 * - Storage changes: Can't increase storage, only decrease it.
 * # </weight>
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * Remove all data structures concerning a staker/stash once it is at a state where it can
 * be considered `dust` in the staking system. The requirements are:
 * 
 * 1. the `total_balance` of the stash is below existential deposit.
 * 2. or, the `ledger.total` of the stash is below existential deposit.
 * 
 * The former can happen in cases like a slash; the latter when a fully unbonded account
 * is still receiving staking rewards in `RewardDestination::Staked`.
 * 
 * It can be called by anyone, as long as `stash` meets the above requirements.
 * 
 * Refunds the transaction fees upon successful execution.
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 * Remove the given nominations from the calling validator.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * - `who`: A list of nominator stash accounts who are nominating this validator which
 *   should no longer be nominating this validator.
 * 
 * Note: Making this call only makes sense if you first set the validator preferences to
 * block any further nominations.
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: MultiAddress[]
}

/**
 * Update the various staking configurations .
 * 
 * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
 * * `min_validator_bond`: The minimum active bond needed to be a validator.
 * * `max_nominator_count`: The max number of users who can be a nominator at once. When
 *   set to `None`, no limit is enforced.
 * * `max_validator_count`: The max number of users who can be a validator at once. When
 *   set to `None`, no limit is enforced.
 * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
 *   should be filled in order for the `chill_other` transaction to work.
 * * `min_commission`: The minimum amount of commission that each validators must maintain.
 *   This is checked only upon calling `validate`. Existing validators are not affected.
 * 
 * RuntimeOrigin must be Root to call this function.
 * 
 * NOTE: Existing nominators and validators will not be affected by this update.
 * to kick people under the new limits, `chill_other` should be called.
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_112
    maxValidatorCount: Type_112
    chillThreshold: Type_113
    minCommission: Type_114
}

/**
 * Declare a `controller` to stop participating as either a validator or nominator.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_, but can be called by anyone.
 * 
 * If the caller is the same as the controller being targeted, then no further checks are
 * enforced, and this function behaves just like `chill`.
 * 
 * If the caller is different than the controller being targeted, the following conditions
 * must be met:
 * 
 * * `controller` must belong to a nominator who has become non-decodable,
 * 
 * Or:
 * 
 * * A `ChillThreshold` must be set and checked which defines how close to the max
 *   nominators or validators we must reach before users can start chilling one-another.
 * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
 *   how close we are to the threshold.
 * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
 *   if this is a person that should be chilled because they have not met the threshold
 *   bond required.
 * 
 * This can be helpful if bond requirements are updated, and we need to remove old users
 * who do not satisfy these requirements.
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: Uint8Array
}

/**
 * Force a validator to have at least the minimum commission. This will not affect a
 * validator who already has a commission greater than or equal to the minimum. Any account
 * can call this.
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: Uint8Array
}

/**
 * Sets the minimum amount of commission that each validators must maintain.
 * 
 * This call has lower privilege requirements than `set_staking_config` and can be called
 * by the `T::AdminOrigin`. Root can always call this.
 */
export interface StakingCall_set_min_commission {
    __kind: 'set_min_commission'
    new: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be signed.
 * 
 * # <weight>
 * - Complexity: `O(1)`. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 * - DbWrites: `origin account`, `NextKeys`
 * - DbReads per key id: `KeyOwner`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Uint8Array
}

/**
 * Removes any session key(s) of the function caller.
 * 
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 * 
 * # <weight>
 * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
 *   of `T::Keys::key_ids()` which is fixed.
 * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 * - DbWrites: `NextKeys`, `origin account`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AlephCall = AlephCall_set_emergency_finalizer | AlephCall_schedule_finality_version_change

/**
 * Sets the emergency finalization key. If called in session `N` the key can be used to
 * finalize blocks from session `N+2` onwards, until it gets overridden.
 */
export interface AlephCall_set_emergency_finalizer {
    __kind: 'set_emergency_finalizer'
    emergencyFinalizer: Uint8Array
}

/**
 * Schedules a finality version change for a future session. If such a scheduled future
 * version is already set, it is replaced with the provided one.
 * Any rescheduling of a future version change needs to occur at least 2 sessions in
 * advance of the provided session of the version change.
 * In order to cancel a scheduled version change, a new version change should be scheduled
 * with the same version as the current one.
 */
export interface AlephCall_schedule_finality_version_change {
    __kind: 'schedule_finality_version_change'
    versionIncoming: number
    session: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ElectionsCall = ElectionsCall_change_validators | ElectionsCall_set_ban_config | ElectionsCall_ban_from_committee | ElectionsCall_cancel_ban | ElectionsCall_set_elections_openness

export interface ElectionsCall_change_validators {
    __kind: 'change_validators'
    reservedValidators: (Uint8Array[] | undefined)
    nonReservedValidators: (Uint8Array[] | undefined)
    committeeSize: (CommitteeSeats | undefined)
}

/**
 * Sets ban config, it has an immediate effect
 */
export interface ElectionsCall_set_ban_config {
    __kind: 'set_ban_config'
    minimalExpectedPerformance: (number | undefined)
    underperformedSessionCountThreshold: (number | undefined)
    cleanSessionCounterDelay: (number | undefined)
    banPeriod: (number | undefined)
}

/**
 * Schedule a non-reserved node to be banned out from the committee at the end of the era
 */
export interface ElectionsCall_ban_from_committee {
    __kind: 'ban_from_committee'
    banned: Uint8Array
    banReason: Uint8Array
}

/**
 * Schedule a non-reserved node to be banned out from the committee at the end of the era
 */
export interface ElectionsCall_cancel_ban {
    __kind: 'cancel_ban'
    banned: Uint8Array
}

/**
 * Set openness of the elections
 */
export interface ElectionsCall_set_elections_openness {
    __kind: 'set_elections_openness'
    openness: ElectionOpenness
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal | TreasuryCall_spend | TreasuryCall_remove_approval

/**
 * Put forward a suggestion for spending. A deposit proportional to the value
 * is reserved and slashed if the proposal is rejected. It is returned once the
 * proposal is awarded.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `ProposalCount`, `origin account`
 * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 * # </weight>
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * Reject a proposed spend. The original deposit will be slashed.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `Proposals`, `rejected proposer account`
 * - DbWrites: `Proposals`, `rejected proposer account`
 * # </weight>
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1).
 * - DbReads: `Proposals`, `Approvals`
 * - DbWrite: `Approvals`
 * # </weight>
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * Propose and approve a spend of treasury funds.
 * 
 * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The destination account for the transfer.
 * 
 * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
 * beneficiary.
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Force a previously approved proposal to be removed from the approval queue.
 * The original deposit will no longer be returned.
 * 
 * May only be called from `T::RejectOrigin`.
 * - `proposal_id`: The index of a proposal
 * 
 * # <weight>
 * - Complexity: O(A) where `A` is the number of approvals
 * - Db reads and writes: `Approvals`
 * # </weight>
 * 
 * Errors:
 * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
 * i.e., the proposal has not been approved. This could also mean the proposal does not
 * exist altogether, thus there is no way it would have been approved in the first place.
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer | VestingCall_merge_schedules

/**
 * Unlock any vested funds of the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 2 Reads, 2 Writes
 *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
 *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
 * # </weight>
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 * Unlock any vested funds of a `target` account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account whose vested funds should be unlocked. Must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 3 Reads, 3 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account
 *     - Writes: Vesting Storage, Balances Locks, Target Account
 * # </weight>
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: MultiAddress
}

/**
 * Create a vested transfer.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account receiving the vested funds.
 * - `schedule`: The vesting schedule attached to the transfer.
 * 
 * Emits `VestingCreated`.
 * 
 * NOTE: This will unlock all schedules through the current block.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 3 Reads, 3 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 * # </weight>
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * Force a vested transfer.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The account whose funds should be transferred.
 * - `target`: The account that should be transferred the vested funds.
 * - `schedule`: The vesting schedule attached to the transfer.
 * 
 * Emits `VestingCreated`.
 * 
 * NOTE: This will unlock all schedules through the current block.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 4 Reads, 4 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
 *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
 * # </weight>
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: MultiAddress
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
 * the highest possible start and end blocks. If both schedules have already started the
 * current block will be used as the schedule start; with the caveat that if one schedule
 * is finished by the current block, the other will be treated as the new merged schedule,
 * unmodified.
 * 
 * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
 * NOTE: This will unlock all schedules through the current block prior to merging.
 * NOTE: If both schedules have ended by the current block, no new schedule will be created
 * and both will be removed.
 * 
 * Merged schedule attributes:
 * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
 *   current_block)`.
 * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
 * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `schedule1_index`: index of the first schedule to merge.
 * - `schedule2_index`: index of the second schedule to merge.
 */
export interface VestingCall_merge_schedules {
    __kind: 'merge_schedules'
    schedule1Index: number
    schedule2Index: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 * 
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * Send a call through an indexed pseudonym of the sender.
 * 
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 * 
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 * 
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * Dispatches a function call with a provided origin.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
 * # </weight>
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * Unlike `batch`, it allows errors and won't interrupt.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatch without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * Dispatch a function call with a specified weight.
 * 
 * This function does not check the weight of the call, and instead allows the
 * Root origin to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Root_.
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 * 
 * Result is equivalent to the dispatched result.
 * 
 * # <weight>
 * O(Z + C) where Z is the length of the call and C its execution weight.
 * -------------------------------
 * - DB Weight: None
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Call
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * If there are enough, then dispatch the call.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 * 
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 * 
 * # <weight>
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * -------------------------------
 * - DB Weight:
 *     - Reads: Multisig Storage, [Caller Account]
 *     - Writes: Multisig Storage, [Caller Account]
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account]
 *     - Write: Multisig Storage, [Caller Account]
 * # </weight>
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: Weight
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account], Refund Account
 *     - Write: Multisig Storage, [Caller Account], Refund Account
 * # </weight>
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - The weight of this call is defined by the caller.
 * # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
}

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB change.
 * # </weight>
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ContractsCall = ContractsCall_call_old_weight | ContractsCall_instantiate_with_code_old_weight | ContractsCall_instantiate_old_weight | ContractsCall_upload_code | ContractsCall_remove_code | ContractsCall_set_code | ContractsCall_call | ContractsCall_instantiate_with_code | ContractsCall_instantiate

/**
 * Deprecated version if [`Self::call`] for use in an in-storage `Call`.
 */
export interface ContractsCall_call_old_weight {
    __kind: 'call_old_weight'
    dest: MultiAddress
    value: bigint
    gasLimit: bigint
    storageDepositLimit: (bigint | undefined)
    data: Uint8Array
}

/**
 * Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
 */
export interface ContractsCall_instantiate_with_code_old_weight {
    __kind: 'instantiate_with_code_old_weight'
    value: bigint
    gasLimit: bigint
    storageDepositLimit: (bigint | undefined)
    code: Uint8Array
    data: Uint8Array
    salt: Uint8Array
}

/**
 * Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
 */
export interface ContractsCall_instantiate_old_weight {
    __kind: 'instantiate_old_weight'
    value: bigint
    gasLimit: bigint
    storageDepositLimit: (bigint | undefined)
    codeHash: Uint8Array
    data: Uint8Array
    salt: Uint8Array
}

/**
 * Upload new `code` without instantiating a contract from it.
 * 
 * If the code does not already exist a deposit is reserved from the caller
 * and unreserved only when [`Self::remove_code`] is called. The size of the reserve
 * depends on the instrumented size of the the supplied `code`.
 * 
 * If the code already exists in storage it will still return `Ok` and upgrades
 * the in storage version to the current
 * [`InstructionWeights::version`](InstructionWeights).
 * 
 * - `determinism`: If this is set to any other value but [`Determinism::Deterministic`]
 *   then the only way to use this code is to delegate call into it from an offchain
 *   execution. Set to [`Determinism::Deterministic`] if in doubt.
 * 
 * # Note
 * 
 * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
 * To avoid this situation a constructor could employ access control so that it can
 * only be instantiated by permissioned entities. The same is true when uploading
 * through [`Self::instantiate_with_code`].
 */
export interface ContractsCall_upload_code {
    __kind: 'upload_code'
    code: Uint8Array
    storageDepositLimit: (bigint | undefined)
    determinism: Determinism
}

/**
 * Remove the code stored under `code_hash` and refund the deposit to its owner.
 * 
 * A code can only be removed by its original uploader (its owner) and only if it is
 * not used by any contract.
 */
export interface ContractsCall_remove_code {
    __kind: 'remove_code'
    codeHash: Uint8Array
}

/**
 * Privileged function that changes the code of an existing contract.
 * 
 * This takes care of updating refcounts and all other necessary operations. Returns
 * an error if either the `code_hash` or `dest` do not exist.
 * 
 * # Note
 * 
 * This does **not** change the address of the contract in question. This means
 * that the contract address is no longer derived from its code hash after calling
 * this dispatchable.
 */
export interface ContractsCall_set_code {
    __kind: 'set_code'
    dest: MultiAddress
    codeHash: Uint8Array
}

/**
 * Makes a call to an account, optionally transferring some balance.
 * 
 * # Parameters
 * 
 * * `dest`: Address of the contract to call.
 * * `value`: The balance to transfer from the `origin` to `dest`.
 * * `gas_limit`: The gas limit enforced when executing the constructor.
 * * `storage_deposit_limit`: The maximum amount of balance that can be charged from the
 *   caller to pay for the storage consumed.
 * * `data`: The input data to pass to the contract.
 * 
 * * If the account is a smart-contract account, the associated code will be
 * executed and any value will be transferred.
 * * If the account is a regular account, any value will be transferred.
 * * If no account exists and the call value is not less than `existential_deposit`,
 * a regular account will be created and any value will be transferred.
 */
export interface ContractsCall_call {
    __kind: 'call'
    dest: MultiAddress
    value: bigint
    gasLimit: Weight
    storageDepositLimit: (bigint | undefined)
    data: Uint8Array
}

/**
 * Instantiates a new contract from the supplied `code` optionally transferring
 * some balance.
 * 
 * This dispatchable has the same effect as calling [`Self::upload_code`] +
 * [`Self::instantiate`]. Bundling them together provides efficiency gains. Please
 * also check the documentation of [`Self::upload_code`].
 * 
 * # Parameters
 * 
 * * `value`: The balance to transfer from the `origin` to the newly created contract.
 * * `gas_limit`: The gas limit enforced when executing the constructor.
 * * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
 *   from the caller to pay for the storage consumed.
 * * `code`: The contract code to deploy in raw bytes.
 * * `data`: The input data to pass to the contract constructor.
 * * `salt`: Used for the address derivation. See [`Pallet::contract_address`].
 * 
 * Instantiation is executed as follows:
 * 
 * - The supplied `code` is instrumented, deployed, and a `code_hash` is created for that
 *   code.
 * - If the `code_hash` already exists on the chain the underlying `code` will be shared.
 * - The destination address is computed based on the sender, code_hash and the salt.
 * - The smart-contract account is created at the computed address.
 * - The `value` is transferred to the new account.
 * - The `deploy` function is executed in the context of the newly-created account.
 */
export interface ContractsCall_instantiate_with_code {
    __kind: 'instantiate_with_code'
    value: bigint
    gasLimit: Weight
    storageDepositLimit: (bigint | undefined)
    code: Uint8Array
    data: Uint8Array
    salt: Uint8Array
}

/**
 * Instantiates a contract from a previously deployed wasm binary.
 * 
 * This function is identical to [`Self::instantiate_with_code`] but without the
 * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
 * must be supplied.
 */
export interface ContractsCall_instantiate {
    __kind: 'instantiate'
    value: bigint
    gasLimit: Weight
    storageDepositLimit: (bigint | undefined)
    codeHash: Uint8Array
    data: Uint8Array
    salt: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NominationPoolsCall = NominationPoolsCall_join | NominationPoolsCall_bond_extra | NominationPoolsCall_claim_payout | NominationPoolsCall_unbond | NominationPoolsCall_pool_withdraw_unbonded | NominationPoolsCall_withdraw_unbonded | NominationPoolsCall_create | NominationPoolsCall_create_with_pool_id | NominationPoolsCall_nominate | NominationPoolsCall_set_state | NominationPoolsCall_set_metadata | NominationPoolsCall_set_configs | NominationPoolsCall_update_roles | NominationPoolsCall_chill

/**
 * Stake funds with a pool. The amount to bond is transferred from the member to the
 * pools account and immediately increases the pools bond.
 * 
 * # Note
 * 
 * * An account can only be a member of a single pool.
 * * An account cannot join the same pool multiple times.
 * * This call will *not* dust the member account, so the member must have at least
 *   `existential deposit + amount` in their account.
 * * Only a pool with [`PoolState::Open`] can be joined
 */
export interface NominationPoolsCall_join {
    __kind: 'join'
    amount: bigint
    poolId: number
}

/**
 * Bond `extra` more funds from `origin` into the pool to which they already belong.
 * 
 * Additional funds can come from either the free balance of the account, of from the
 * accumulated rewards, see [`BondExtra`].
 * 
 * Bonding extra funds implies an automatic payout of all pending rewards as well.
 */
export interface NominationPoolsCall_bond_extra {
    __kind: 'bond_extra'
    extra: BondExtra
}

/**
 * A bonded member can use this to claim their payout based on the rewards that the pool
 * has accumulated since their last claimed payout (OR since joining if this is there first
 * time claiming rewards). The payout will be transferred to the member's account.
 * 
 * The member will earn rewards pro rata based on the members stake vs the sum of the
 * members in the pools stake. Rewards do not "expire".
 */
export interface NominationPoolsCall_claim_payout {
    __kind: 'claim_payout'
}

/**
 * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
 * implicitly collects the rewards one last time, since not doing so would mean some
 * rewards would be forfeited.
 * 
 * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 * account).
 * 
 * # Conditions for a permissionless dispatch.
 * 
 * * The pool is blocked and the caller is either the root or state-toggler. This is
 *   refereed to as a kick.
 * * The pool is destroying and the member is not the depositor.
 * * The pool is destroying, the member is the depositor and no other members are in the
 *   pool.
 * 
 * ## Conditions for permissioned dispatch (i.e. the caller is also the
 * `member_account`):
 * 
 * * The caller is not the depositor.
 * * The caller is the depositor, the pool is destroying and no other members are in the
 *   pool.
 * 
 * # Note
 * 
 * If there are too many unlocking chunks to unbond with the pool account,
 * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks.
 * The [`StakingInterface::unbond`] will implicitly call [`Call::pool_withdraw_unbonded`]
 * to try to free chunks if necessary (ie. if unbound was called and no unlocking chunks
 * are available). However, it may not be possible to release the current unlocking chunks,
 * in which case, the result of this call will likely be the `NoMoreChunks` error from the
 * staking system.
 */
export interface NominationPoolsCall_unbond {
    __kind: 'unbond'
    memberAccount: MultiAddress
    unbondingPoints: bigint
}

/**
 * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
 * 
 * This is useful if their are too many unlocking chunks to call `unbond`, and some
 * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
 * would probably see an error like `NoMoreChunks` emitted from the staking system when
 * they attempt to unbond.
 */
export interface NominationPoolsCall_pool_withdraw_unbonded {
    __kind: 'pool_withdraw_unbonded'
    poolId: number
    numSlashingSpans: number
}

/**
 * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
 * error is returned.
 * 
 * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 * account).
 * 
 * # Conditions for a permissionless dispatch
 * 
 * * The pool is in destroy mode and the target is not the depositor.
 * * The target is the depositor and they are the only member in the sub pools.
 * * The pool is blocked and the caller is either the root or state-toggler.
 * 
 * # Conditions for permissioned dispatch
 * 
 * * The caller is the target and they are not the depositor.
 * 
 * # Note
 * 
 * If the target is the depositor, the pool will be destroyed.
 */
export interface NominationPoolsCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    memberAccount: MultiAddress
    numSlashingSpans: number
}

/**
 * Create a new delegation pool.
 * 
 * # Arguments
 * 
 * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
 *   deposit since the pools creator cannot fully unbond funds until the pool is being
 *   destroyed.
 * * `index` - A disambiguation index for creating the account. Likely only useful when
 *   creating multiple pools in the same extrinsic.
 * * `root` - The account to set as [`PoolRoles::root`].
 * * `nominator` - The account to set as the [`PoolRoles::nominator`].
 * * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].
 * 
 * # Note
 * 
 * In addition to `amount`, the caller will transfer the existential deposit; so the caller
 * needs at have at least `amount + existential_deposit` transferrable.
 */
export interface NominationPoolsCall_create {
    __kind: 'create'
    amount: bigint
    root: MultiAddress
    nominator: MultiAddress
    stateToggler: MultiAddress
}

/**
 * Create a new delegation pool with a previously used pool id
 * 
 * # Arguments
 * 
 * same as `create` with the inclusion of
 * * `pool_id` - `A valid PoolId.
 */
export interface NominationPoolsCall_create_with_pool_id {
    __kind: 'create_with_pool_id'
    amount: bigint
    root: MultiAddress
    nominator: MultiAddress
    stateToggler: MultiAddress
    poolId: number
}

/**
 * Nominate on behalf of the pool.
 * 
 * The dispatch origin of this call must be signed by the pool nominator or the pool
 * root role.
 * 
 * This directly forward the call to the staking pallet, on behalf of the pool bonded
 * account.
 */
export interface NominationPoolsCall_nominate {
    __kind: 'nominate'
    poolId: number
    validators: Uint8Array[]
}

/**
 * Set a new state for the pool.
 * 
 * If a pool is already in the `Destroying` state, then under no condition can its state
 * change again.
 * 
 * The dispatch origin of this call must be either:
 * 
 * 1. signed by the state toggler, or the root role of the pool,
 * 2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and
 *    then the state of the pool can be permissionlessly changed to `Destroying`.
 */
export interface NominationPoolsCall_set_state {
    __kind: 'set_state'
    poolId: number
    state: PoolState
}

/**
 * Set a new metadata for the pool.
 * 
 * The dispatch origin of this call must be signed by the state toggler, or the root role
 * of the pool.
 */
export interface NominationPoolsCall_set_metadata {
    __kind: 'set_metadata'
    poolId: number
    metadata: Uint8Array
}

/**
 * Update configurations for the nomination pools. The origin for this call must be
 * Root.
 * 
 * # Arguments
 * 
 * * `min_join_bond` - Set [`MinJoinBond`].
 * * `min_create_bond` - Set [`MinCreateBond`].
 * * `max_pools` - Set [`MaxPools`].
 * * `max_members` - Set [`MaxPoolMembers`].
 * * `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].
 */
export interface NominationPoolsCall_set_configs {
    __kind: 'set_configs'
    minJoinBond: ConfigOp
    minCreateBond: ConfigOp
    maxPools: Type_145
    maxMembers: Type_145
    maxMembersPerPool: Type_145
}

/**
 * Update the roles of the pool.
 * 
 * The root is the only entity that can change any of the roles, including itself,
 * excluding the depositor, who can never change.
 * 
 * It emits an event, notifying UIs of the role change. This event is quite relevant to
 * most pool members and they should be informed of changes to pool roles.
 */
export interface NominationPoolsCall_update_roles {
    __kind: 'update_roles'
    poolId: number
    newRoot: Type_146
    newNominator: Type_146
    newStateToggler: Type_146
}

/**
 * Chill on behalf of the pool.
 * 
 * The dispatch origin of this call must be signed by the pool nominator or the pool
 * root role, same as [`Pallet::nominate`].
 * 
 * This directly forward the call to the staking pallet, on behalf of the pool bonded
 * account.
 */
export interface NominationPoolsCall_chill {
    __kind: 'chill'
    poolId: number
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 * 
 * # <weight>
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 * - One storage mutation (codec `O(R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * Set an account's identity information and reserve the appropriate deposit.
 * 
 * If the account already has identity information, the deposit is taken as part payment
 * for the new deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `info`: The identity information.
 * 
 * Emits `IdentitySet` if successful.
 * 
 * # <weight>
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
 * - One balance reserve operation.
 * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * Set the sub-accounts of the sender.
 * 
 * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * - `subs`: The identity's (new) sub-accounts.
 * 
 * # <weight>
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 * - At most one balance operations.
 * - DB:
 *   - `P + S` storage mutations (codec complexity `O(1)`)
 *   - One storage read (codec complexity `O(P)`).
 *   - One storage write (codec complexity `O(S)`).
 *   - One storage-exists (`IdentityOf::contains_key`).
 * # </weight>
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [Uint8Array, Data][]
}

/**
 * Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 * Payment: All reserved balances on the account are returned.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * Emits `IdentityCleared` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 * - One balance-unreserve operation.
 * - `2` storage reads and `S + 2` storage deletions.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * Request a judgement from a registrar.
 * 
 * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 * given.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is requested.
 * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 * ```nocompile
 * Self::registrars().get(reg_index).unwrap().fee
 * ```
 * 
 * Emits `JudgementRequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * Cancel a previous request.
 * 
 * Payment: A previously reserved deposit is returned on success.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 * Emits `JudgementUnrequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - One storage mutation `O(R + X)`.
 * - One event
 * # </weight>
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * Change the account associated with a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * Set the field information for a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 * Provide a judgement for an account's identity.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `reg_index`.
 * 
 * - `reg_index`: the index of the registrar whose judgement is being made.
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
 * 
 * Emits `JudgementGiven` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-transfer operation.
 * - Up to one account-lookup operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: Uint8Array
}

/**
 * Remove an account's identity and sub-account information and slash the deposits.
 * 
 * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 * `Slash`. Verification request deposits are not returned; they should be cancelled
 * manually using `cancel_request`.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * 
 * Emits `IdentityKilled` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`.
 * - One balance-reserve operation.
 * - `S + 2` storage mutations.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * Add the given account to the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * Alter the associated name of the given sub-account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * Remove the given account from the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * Remove the sender as a sub-account.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender (*not* the original depositor).
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * super-identity.
 * 
 * NOTE: This should not normally be used, but is provided in the case that the non-
 * controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface RawOrigin_None {
    __kind: 'None'
}

export type Void = never

export type RewardDestination = RewardDestination_Staked | RewardDestination_Stash | RewardDestination_Controller | RewardDestination_Account | RewardDestination_None

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_Account {
    __kind: 'Account'
    value: Uint8Array
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export type ConfigOp = ConfigOp_Noop | ConfigOp_Set | ConfigOp_Remove

export interface ConfigOp_Noop {
    __kind: 'Noop'
}

export interface ConfigOp_Set {
    __kind: 'Set'
    value: bigint
}

export interface ConfigOp_Remove {
    __kind: 'Remove'
}

export type Type_112 = Type_112_Noop | Type_112_Set | Type_112_Remove

export interface Type_112_Noop {
    __kind: 'Noop'
}

export interface Type_112_Set {
    __kind: 'Set'
    value: number
}

export interface Type_112_Remove {
    __kind: 'Remove'
}

export type Type_113 = Type_113_Noop | Type_113_Set | Type_113_Remove

export interface Type_113_Noop {
    __kind: 'Noop'
}

export interface Type_113_Set {
    __kind: 'Set'
    value: number
}

export interface Type_113_Remove {
    __kind: 'Remove'
}

export type Type_114 = Type_114_Noop | Type_114_Set | Type_114_Remove

export interface Type_114_Noop {
    __kind: 'Noop'
}

export interface Type_114_Set {
    __kind: 'Set'
    value: number
}

export interface Type_114_Remove {
    __kind: 'Remove'
}

export interface SessionKeys {
    aura: Uint8Array
    aleph: Uint8Array
}

export interface CommitteeSeats {
    reservedSeats: number
    nonReservedSeats: number
}

export type ElectionOpenness = ElectionOpenness_Permissioned | ElectionOpenness_Permissionless

export interface ElectionOpenness_Permissioned {
    __kind: 'Permissioned'
}

export interface ElectionOpenness_Permissionless {
    __kind: 'Permissionless'
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

export type BondExtra = BondExtra_FreeBalance | BondExtra_Rewards

export interface BondExtra_FreeBalance {
    __kind: 'FreeBalance'
    value: bigint
}

export interface BondExtra_Rewards {
    __kind: 'Rewards'
}

export type PoolState = PoolState_Open | PoolState_Blocked | PoolState_Destroying

export interface PoolState_Open {
    __kind: 'Open'
}

export interface PoolState_Blocked {
    __kind: 'Blocked'
}

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export type Type_145 = Type_145_Noop | Type_145_Set | Type_145_Remove

export interface Type_145_Noop {
    __kind: 'Noop'
}

export interface Type_145_Set {
    __kind: 'Set'
    value: number
}

export interface Type_145_Remove {
    __kind: 'Remove'
}

export type Type_146 = Type_146_Noop | Type_146_Set | Type_146_Remove

export interface Type_146_Noop {
    __kind: 'Noop'
}

export interface Type_146_Set {
    __kind: 'Set'
    value: Uint8Array
}

export interface Type_146_Remove {
    __kind: 'Remove'
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: (Uint8Array | undefined)
    image: Data
    twitter: Data
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Uint8Array
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Uint8Array
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Uint8Array
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Uint8Array
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Uint8Array
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Uint8Array
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Uint8Array
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Uint8Array
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Uint8Array
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Uint8Array
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Uint8Array
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Uint8Array
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Uint8Array
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Uint8Array
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Uint8Array
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Uint8Array
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Uint8Array
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Uint8Array
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Uint8Array
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Uint8Array
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Uint8Array
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Uint8Array
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Uint8Array
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Uint8Array
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Uint8Array
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Uint8Array
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Uint8Array
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Uint8Array
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Uint8Array
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Uint8Array
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Uint8Array
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Uint8Array
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Uint8Array
}

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Uint8Array
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Uint8Array
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Uint8Array
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Uint8Array
}

export type Judgement = Judgement_Unknown | Judgement_FeePaid | Judgement_Reasonable | Judgement_KnownGood | Judgement_OutOfDate | Judgement_LowQuality | Judgement_Erroneous

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}
