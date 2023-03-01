import type {Result, Option} from './support'

export type Asset = Asset_CategoricalOutcome | Asset_ScalarOutcome | Asset_CombinatorialOutcome | Asset_PoolShare | Asset_Ztg

export interface Asset_CategoricalOutcome {
    __kind: 'CategoricalOutcome'
    value: [bigint, number]
}

export interface Asset_ScalarOutcome {
    __kind: 'ScalarOutcome'
    value: [bigint, ScalarPosition]
}

export interface Asset_CombinatorialOutcome {
    __kind: 'CombinatorialOutcome'
}

export interface Asset_PoolShare {
    __kind: 'PoolShare'
    value: bigint
}

export interface Asset_Ztg {
    __kind: 'Ztg'
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type Call = Call_System | Call_Timestamp | Call_Balances | Call_Treasury | Call_Vesting | Call_AdvisoryCommitteeCollective | Call_AdvisoryCommitteeMembership | Call_Identity | Call_Sudo | Call_Utility | Call_Currency | Call_Authorized | Call_Court | Call_LiquidityMining | Call_Swaps | Call_PredictionMarkets | Call_ParachainSystem | Call_ParachainStaking | Call_AuthorInherent | Call_AuthorMapping | Call_DmpQueue | Call_PolkadotXcm | Call_XcmpQueue | Call_Crowdloan

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_AdvisoryCommitteeCollective {
    __kind: 'AdvisoryCommitteeCollective'
    value: AdvisoryCommitteeCollectiveCall
}

export interface Call_AdvisoryCommitteeMembership {
    __kind: 'AdvisoryCommitteeMembership'
    value: AdvisoryCommitteeMembershipCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Currency {
    __kind: 'Currency'
    value: CurrencyCall
}

export interface Call_Authorized {
    __kind: 'Authorized'
    value: AuthorizedCall
}

export interface Call_Court {
    __kind: 'Court'
    value: CourtCall
}

export interface Call_LiquidityMining {
    __kind: 'LiquidityMining'
    value: LiquidityMiningCall
}

export interface Call_Swaps {
    __kind: 'Swaps'
    value: SwapsCall
}

export interface Call_PredictionMarkets {
    __kind: 'PredictionMarkets'
    value: PredictionMarketsCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_ParachainStaking {
    __kind: 'ParachainStaking'
    value: ParachainStakingCall
}

export interface Call_AuthorInherent {
    __kind: 'AuthorInherent'
    value: AuthorInherentCall
}

export interface Call_AuthorMapping {
    __kind: 'AuthorMapping'
    value: AuthorMappingCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Call_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
    __kind: 'V0'
    value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
    __kind: 'V1'
    value: V1MultiLocation
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
    __kind: 'V0'
    value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
    __kind: 'V1'
    value: V1MultiAsset[]
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
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

export type ScalarPosition = ScalarPosition_Long | ScalarPosition_Short

export interface ScalarPosition_Long {
    __kind: 'Long'
}

export interface ScalarPosition_Short {
    __kind: 'Short'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: number
}

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
 * 
 * # <weight>
 * - `O(1)`
 * - 1 storage write.
 * - Base Weight: 1.405 µs
 * - 1 write to HEAP_PAGES
 * - 1 digest item
 * # </weight>
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
 * Set the new changes trie configuration.
 * 
 * # <weight>
 * - `O(1)`
 * - 1 storage write or delete (codec `O(1)`).
 * - 1 call to `deposit_log`: Uses `append` API, so O(1)
 * - Base Weight: 7.218 µs
 * - DB Weight:
 *     - Writes: Changes Trie, System Digest
 * # </weight>
 */
export interface SystemCall_set_changes_trie_config {
    __kind: 'set_changes_trie_config'
    changesTrieConfig: (ChangesTrieConfiguration | undefined)
}

/**
 * Set some items of storage.
 * 
 * # <weight>
 * - `O(I)` where `I` length of `items`
 * - `I` storage writes (`O(1)`).
 * - Base Weight: 0.568 * i µs
 * - Writes: Number of items
 * # </weight>
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 * 
 * # <weight>
 * - `O(IK)` where `I` length of `keys` and `K` length of one key
 * - `I` storage deletions.
 * - Base Weight: .378 * i µs
 * - Writes: Number of items
 * # </weight>
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
 * 
 * # <weight>
 * - `O(P)` where `P` amount of keys with prefix `prefix`
 * - `P` storage deletions.
 * - Base Weight: 0.834 * P µs
 * - Writes: Number of subkeys + 1
 * # </weight>
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 * 
 * # <weight>
 * - `O(b)` where b is the length of the remark.
 * - 1 event.
 * # </weight>
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
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
 * It will decrease the total issuance of the system by the `TransferFee`.
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
 * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 * - DB Weight: 1 Read and 1 Write to destination account
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
 * also decrease the total issuance of the system (`TotalIssuance`).
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 * 
 * # <weight>
 * - Independent of the arguments.
 * - Contains a limited number of reads and writes.
 * ---------------------
 * - Base Weight:
 *     - Creating: 27.56 µs
 *     - Killing: 35.11 µs
 * - DB Weight: 1 Read, 1 Write to `who`
 * # </weight>
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
 * # <weight>
 * - Cheaper than transfer because account cannot be killed.
 * - Base Weight: 51.4 µs
 * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 * #</weight>
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
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

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
export type AdvisoryCommitteeCollectiveCall = AdvisoryCommitteeCollectiveCall_set_members | AdvisoryCommitteeCollectiveCall_execute | AdvisoryCommitteeCollectiveCall_propose | AdvisoryCommitteeCollectiveCall_vote | AdvisoryCommitteeCollectiveCall_close | AdvisoryCommitteeCollectiveCall_disapprove_proposal

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AdvisoryCommitteeMembershipCall = AdvisoryCommitteeMembershipCall_add_member | AdvisoryCommitteeMembershipCall_remove_member | AdvisoryCommitteeMembershipCall_swap_member | AdvisoryCommitteeMembershipCall_reset_members | AdvisoryCommitteeMembershipCall_change_key | AdvisoryCommitteeMembershipCall_set_prime | AdvisoryCommitteeMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_add_member {
    __kind: 'add_member'
    who: Uint8Array
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_remove_member {
    __kind: 'remove_member'
    who: Uint8Array
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface AdvisoryCommitteeMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: Uint8Array
    add: Uint8Array
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface AdvisoryCommitteeMembershipCall_change_key {
    __kind: 'change_key'
    new: Uint8Array
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_set_prime {
    __kind: 'set_prime'
    who: Uint8Array
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_clear_prime {
    __kind: 'clear_prime'
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
    account: Uint8Array
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
    new: Uint8Array
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
    weight: bigint
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
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
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
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CurrencyCall = CurrencyCall_transfer | CurrencyCall_transfer_native_currency | CurrencyCall_update_balance

/**
 * Transfer some balance to another account under `currency_id`.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrencyCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    currencyId: Asset
    amount: bigint
}

/**
 * Transfer some native currency to another account.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrencyCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: MultiAddress
    amount: bigint
}

/**
 * update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface CurrencyCall_update_balance {
    __kind: 'update_balance'
    who: MultiAddress
    currencyId: Asset
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorizedCall = AuthorizedCall_authorize_market_outcome

/**
 * Overwrites already provided outcomes for the same market and account.
 */
export interface AuthorizedCall_authorize_market_outcome {
    __kind: 'authorize_market_outcome'
    outcome: OutcomeReport
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CourtCall = CourtCall_exit_court | CourtCall_join_court | CourtCall_vote

export interface CourtCall_exit_court {
    __kind: 'exit_court'
}

export interface CourtCall_join_court {
    __kind: 'join_court'
}

export interface CourtCall_vote {
    __kind: 'vote'
    marketId: bigint
    outcome: OutcomeReport
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LiquidityMiningCall = LiquidityMiningCall_set_per_block_distribution

export interface LiquidityMiningCall_set_per_block_distribution {
    __kind: 'set_per_block_distribution'
    perBlockDistribution: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SwapsCall = SwapsCall_admin_set_pool_as_stale | SwapsCall_pool_exit | SwapsCall_pool_exit_subsidy | SwapsCall_pool_exit_with_exact_asset_amount | SwapsCall_pool_exit_with_exact_pool_amount | SwapsCall_pool_join | SwapsCall_pool_join_subsidy | SwapsCall_pool_join_with_exact_asset_amount | SwapsCall_pool_join_with_exact_pool_amount | SwapsCall_swap_exact_amount_in | SwapsCall_swap_exact_amount_out

export interface SwapsCall_admin_set_pool_as_stale {
    __kind: 'admin_set_pool_as_stale'
    marketType: MarketType
    poolId: bigint
    outcomeReport: OutcomeReport
}

/**
 * Pool - Exit
 * 
 * Retrieves a given set of assets from `pool_id` to `origin`.
 * 
 * # Arguments
 * 
 * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 * * `pool_id`: Unique pool identifier.
 * * `pool_amount`: The amount of LP shares of this pool being burned based on the
 * retrieved assets.
 * * `min_assets_out`: List of asset lower bounds. No asset should be lower than the
 * provided values.
 */
export interface SwapsCall_pool_exit {
    __kind: 'pool_exit'
    poolId: bigint
    poolAmount: bigint
    minAssetsOut: bigint[]
}

/**
 * Pool - Remove subsidty from a pool that uses the Rikiddo scoring rule.
 * 
 * Unreserves `pool_amount` of the base currency from being used as subsidy.
 * If `amount` is greater than the amount reserved for subsidy by `origin`,
 * then the whole amount reserved for subsidy will be unreserved.
 * 
 * # Arguments
 * 
 * * `origin`: Liquidity Provider (LP). The account whose assets should be unreserved.
 * * `pool_id`: Unique pool identifier.
 * * `amount`: The amount of base currency that should be removed from subsidy.
 */
export interface SwapsCall_pool_exit_subsidy {
    __kind: 'pool_exit_subsidy'
    poolId: bigint
    amount: bigint
}

/**
 * Pool - Exit with exact pool amount
 * 
 * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
 * this method injects the exactly amount of `asset_amount` to `origin`.
 * 
 * # Arguments
 * 
 * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 * * `pool_id`: Unique pool identifier.
 * * `asset`: Asset leaving the pool.
 * * `asset_amount`: Asset amount that is leaving the pool.
 * * `max_pool_amount`: The calculated amount of assets for the pool must be equal or
 * greater than the given value.
 */
export interface SwapsCall_pool_exit_with_exact_asset_amount {
    __kind: 'pool_exit_with_exact_asset_amount'
    poolId: bigint
    asset: Asset
    assetAmount: bigint
    maxPoolAmount: bigint
}

/**
 * Pool - Exit with exact pool amount
 * 
 * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
 * this method injects the exactly amount of `pool_amount` to `pool_id`.
 * 
 * # Arguments
 * 
 * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 * * `pool_id`: Unique pool identifier.
 * * `asset`: Asset leaving the pool.
 * * `pool_amount`: Pool amount that is entering the pool.
 * * `min_asset_amount`: The calculated amount for the asset must the equal or less
 * than the given value.
 */
export interface SwapsCall_pool_exit_with_exact_pool_amount {
    __kind: 'pool_exit_with_exact_pool_amount'
    poolId: bigint
    asset: Asset
    poolAmount: bigint
    minAssetAmount: bigint
}

/**
 * Pool - Join
 * 
 * Joins a given set of assets provided from `origin` to `pool_id`.
 * 
 * # Arguments
 * 
 * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
 * * `pool_id`: Unique pool identifier.
 * * `pool_amount`: The amount of LP shares for this pool that should be minted to the provider.
 * * `max_assets_in`: List of asset upper bounds. No asset should be greater than the
 * provided values.
 */
export interface SwapsCall_pool_join {
    __kind: 'pool_join'
    poolId: bigint
    poolAmount: bigint
    maxAssetsIn: bigint[]
}

/**
 * Pool - Add subsidy to a pool that uses the Rikiddo scoring rule.
 * 
 * Reserves `pool_amount` of the base currency to be added as subsidy on pool activation.
 * 
 * # Arguments
 * 
 * * `origin`: Liquidity Provider (LP). The account whose assets should be reserved.
 * * `pool_id`: Unique pool identifier.
 * * `amount`: The amount of base currency that should be added to subsidy.
 */
export interface SwapsCall_pool_join_subsidy {
    __kind: 'pool_join_subsidy'
    poolId: bigint
    amount: bigint
}

/**
 * Pool - Join with exact asset amount
 * 
 * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
 * this method transfers the exactly amount of `asset_amount` to `pool_id`.
 * 
 * # Arguments
 * 
 * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 * * `pool_id`: Unique pool identifier.
 * * `asset_in`: Asset entering the pool.
 * * `asset_amount`: Asset amount that is entering the pool.
 * * `min_pool_amount`: The calculated amount for the pool must be equal or greater
 * than the given value.
 */
export interface SwapsCall_pool_join_with_exact_asset_amount {
    __kind: 'pool_join_with_exact_asset_amount'
    poolId: bigint
    assetIn: Asset
    assetAmount: bigint
    minPoolAmount: bigint
}

/**
 * Pool - Join with exact pool amount
 * 
 * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
 * this method injects the exactly amount of `pool_amount` to `origin`.
 * 
 * # Arguments
 * 
 * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 * * `pool_id`: Unique pool identifier.
 * * `asset`: Asset entering the pool.
 * * `pool_amount`: Asset amount that is entering the pool.
 * * `max_asset_amount`: The calculated amount of assets for the pool must be equal or
 * less than the given value.
 */
export interface SwapsCall_pool_join_with_exact_pool_amount {
    __kind: 'pool_join_with_exact_pool_amount'
    poolId: bigint
    asset: Asset
    poolAmount: bigint
    maxAssetAmount: bigint
}

/**
 * Swap - Exact amount in
 * 
 * Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
 * 
 * # Arguments
 * 
 * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
 * * `pool_id`: Unique pool identifier.
 * * `asset_in`: Asset entering the pool.
 * * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
 * * `asset_out`: Asset leaving the pool.
 * * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
 * * `max_price`: Market price must be equal or less than the provided value.
 */
export interface SwapsCall_swap_exact_amount_in {
    __kind: 'swap_exact_amount_in'
    poolId: bigint
    assetIn: Asset
    assetAmountIn: bigint
    assetOut: Asset
    minAssetAmountOut: bigint
    maxPrice: bigint
}

/**
 * Swap - Exact amount out
 * 
 * Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
 * 
 * # Arguments
 * 
 * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 * * `pool_id`: Unique pool identifier.
 * * `asset_in`: Asset entering the pool.
 * * `max_amount_asset_in`: Maximum asset amount that can enter the pool.
 * * `asset_out`: Asset leaving the pool.
 * * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
 * * `max_price`: Market price must be equal or less than the provided value.
 */
export interface SwapsCall_swap_exact_amount_out {
    __kind: 'swap_exact_amount_out'
    poolId: bigint
    assetIn: Asset
    maxAmountAssetIn: bigint
    assetOut: Asset
    assetAmountOut: bigint
    maxPrice: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PredictionMarketsCall = PredictionMarketsCall_admin_destroy_market | PredictionMarketsCall_admin_move_market_to_closed | PredictionMarketsCall_admin_move_market_to_resolved | PredictionMarketsCall_approve_market | PredictionMarketsCall_buy_complete_set | PredictionMarketsCall_dispute | PredictionMarketsCall_cancel_pending_market | PredictionMarketsCall_create_categorical_market | PredictionMarketsCall_create_cpmm_market_and_deploy_assets | PredictionMarketsCall_create_scalar_market | PredictionMarketsCall_deploy_swap_pool_and_additional_liquidity | PredictionMarketsCall_deploy_swap_pool_for_market | PredictionMarketsCall_global_dispute | PredictionMarketsCall_redeem_shares | PredictionMarketsCall_reject_market | PredictionMarketsCall_report | PredictionMarketsCall_sell_complete_set

/**
 * Allows the `ApprovalOrigin` to immediately destroy a market.
 * 
 * todo: this should check if there's any outstanding funds reserved if it stays
 * in for production
 */
export interface PredictionMarketsCall_admin_destroy_market {
    __kind: 'admin_destroy_market'
    marketId: bigint
}

/**
 * Allows the `ApprovalOrigin` to immediately move an open market to closed.
 */
export interface PredictionMarketsCall_admin_move_market_to_closed {
    __kind: 'admin_move_market_to_closed'
    marketId: bigint
}

/**
 * Allows the `ApprovalOrigin` to immediately move a reported or disputed
 * market to resolved.
 */
export interface PredictionMarketsCall_admin_move_market_to_resolved {
    __kind: 'admin_move_market_to_resolved'
    marketId: bigint
}

/**
 * Approves a market that is waiting for approval from the
 * advisory committee.
 * 
 * NOTE: Returns the proposer's bond since the market has been
 * deemed valid by an advisory committee.
 * 
 * NOTE: Can only be called by the `ApprovalOrigin`.
 * 
 */
export interface PredictionMarketsCall_approve_market {
    __kind: 'approve_market'
    marketId: bigint
}

/**
 * Buys the complete set of outcome shares of a market. For example, when calling this
 * function on a categorical market with five different outcomes, five different shares
 * will be transferred to the callee.
 * 
 * The amount of each share will equal the provided `amount` parameter.
 * 
 * NOTE: This is the only way to create new shares.
 */
export interface PredictionMarketsCall_buy_complete_set {
    __kind: 'buy_complete_set'
    marketId: bigint
    amount: bigint
}

export interface PredictionMarketsCall_dispute {
    __kind: 'dispute'
    marketId: bigint
    outcome: OutcomeReport
}

/**
 * NOTE: Only for PoC probably - should only allow rejections
 * in a production environment since this better aligns incentives.
 * See also: Polkadot Treasury
 * 
 */
export interface PredictionMarketsCall_cancel_pending_market {
    __kind: 'cancel_pending_market'
    marketId: bigint
}

export interface PredictionMarketsCall_create_categorical_market {
    __kind: 'create_categorical_market'
    oracle: Uint8Array
    period: MarketPeriod
    metadata: MultiHash
    creation: MarketCreation
    categories: number
    mdm: MarketDisputeMechanism
    scoringRule: ScoringRule
}

/**
 * This function combines the creation of a market, the buying of a complete set of
 * outcome assets, the deployment of the minimum amount of outcome assets and
 * the optional deployment of additional outcome asset.
 * 
 * # Arguments
 * 
 * * `oracle`: The oracle of the market who will report the correct outcome.
 * * `period`: The active period of the market.
 * * `metadata`: A hash pointer to the metadata of the market.
 * * `creation`: The creation type of the market (permissionless or advised).
 * * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
 * * `mdm`: The market dispute mechanism.
 * * `amount_base_asset`: The amount of the base asset that should be deployed.
 * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
 *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
 *     asset will be bought in quantities specified by the highest value in this vector.
 *     Any value that is lower than the highest value in the vector signals that not
 *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
 *     means, that after deployment 30 of the first outcome asset will be kept.
 * * `weights`: The relative denormalized weight of each asset price.
 * * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
 *     assets that are specified as zero in this vector are sold. Must have the same
 *     length as `amount_outcome_assets`.
 */
export interface PredictionMarketsCall_create_cpmm_market_and_deploy_assets {
    __kind: 'create_cpmm_market_and_deploy_assets'
    oracle: Uint8Array
    period: MarketPeriod
    metadata: MultiHash
    creation: MarketCreation
    assets: MarketType
    mdm: MarketDisputeMechanism
    amountBaseAsset: bigint
    amountOutcomeAssets: bigint[]
    weights: bigint[]
    keepOutcomeAssets: bigint[]
}

export interface PredictionMarketsCall_create_scalar_market {
    __kind: 'create_scalar_market'
    oracle: Uint8Array
    period: MarketPeriod
    metadata: MultiHash
    creation: MarketCreation
    outcomeRange: RangeInclusive
    mdm: MarketDisputeMechanism
    scoringRule: ScoringRule
}

/**
 * This function combines the creation of a market, the buying of a complete set of
 * outcome assets, the deployment of the minimum amount of outcome assets and
 * the optional deployment of additional outcome asset.
 * 
 * # Arguments
 * 
 * * `market_id`: Id of the market for that the pool should be created and populated.
 * * `amount_base_asset`: The amount of the base asset that should be deployed.
 * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
 *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
 *     asset will be bought in quantities specified by the highest value in this vector.
 *     Any value that is lower than the highest value in the vector signals that not
 *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]
 *     means, that after deployment 30 of the first outcome asset will be kept.
 * * `weights`: The relative denormalized weight of each asset price.
 * * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
 *     assets that are specified as zero in this vector are sold. Must have the same
 *     length as `amount_outcome_assets`.
 */
export interface PredictionMarketsCall_deploy_swap_pool_and_additional_liquidity {
    __kind: 'deploy_swap_pool_and_additional_liquidity'
    marketId: bigint
    amountBaseAsset: bigint
    amountOutcomeAssets: bigint[]
    weights: bigint[]
    keepOutcomeAssets: bigint[]
}

/**
 * Deploys a new pool for the market. This pallet keeps track of a single
 * canonical swap pool for each market in `market_to_swap_pool`.
 * 
 * The sender should have enough funds to cover all of the required
 * shares to seed the pool.
 */
export interface PredictionMarketsCall_deploy_swap_pool_for_market {
    __kind: 'deploy_swap_pool_for_market'
    marketId: bigint
    weights: bigint[]
}

/**
 * Starts a global dispute.
 * 
 * NOTE: Requires the market to be already disputed `MaxDisputes` amount of times.
 * 
 */
export interface PredictionMarketsCall_global_dispute {
    __kind: 'global_dispute'
    marketId: bigint
}

/**
 * Redeems the winning shares of a prediction market.
 * 
 */
export interface PredictionMarketsCall_redeem_shares {
    __kind: 'redeem_shares'
    marketId: bigint
}

/**
 * Rejects a market that is waiting for approval from the advisory
 * committee.
 * 
 * NOTE: Will slash the reserved `AdvisoryBond` from the market creator.
 * 
 */
export interface PredictionMarketsCall_reject_market {
    __kind: 'reject_market'
    marketId: bigint
}

/**
 * Reports the outcome of a market.
 * 
 */
export interface PredictionMarketsCall_report {
    __kind: 'report'
    marketId: bigint
    outcome: OutcomeReport
}

/**
 * Destroys a complete set of outcomes shares for a market.
 * 
 */
export interface PredictionMarketsCall_sell_complete_set {
    __kind: 'sell_complete_set'
    marketId: bigint
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 * Set the current validation data.
 * 
 * This should be invoked exactly once per block. It will panic at the finalization
 * phase if the call was not invoked.
 * 
 * The dispatch origin for this call must be `Inherent`
 * 
 * As a side effect, this function upgrades the current validation function
 * if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Uint8Array
}

export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: Uint8Array
}

export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainStakingCall = ParachainStakingCall_set_staking_expectations | ParachainStakingCall_set_inflation | ParachainStakingCall_set_parachain_bond_account | ParachainStakingCall_set_parachain_bond_reserve_percent | ParachainStakingCall_set_total_selected | ParachainStakingCall_set_collator_commission | ParachainStakingCall_set_blocks_per_round | ParachainStakingCall_join_candidates | ParachainStakingCall_leave_candidates | ParachainStakingCall_go_offline | ParachainStakingCall_go_online | ParachainStakingCall_candidate_bond_more | ParachainStakingCall_candidate_bond_less | ParachainStakingCall_nominate | ParachainStakingCall_leave_nominators | ParachainStakingCall_revoke_nomination | ParachainStakingCall_nominator_bond_more | ParachainStakingCall_nominator_bond_less

/**
 * Set the expectations for total staked. These expectations determine the issuance for
 * the round according to logic in `fn compute_issuance`
 */
export interface ParachainStakingCall_set_staking_expectations {
    __kind: 'set_staking_expectations'
    expectations: Type_261
}

/**
 * Set the annual inflation rate to derive per-round inflation
 */
export interface ParachainStakingCall_set_inflation {
    __kind: 'set_inflation'
    schedule: Type_262
}

/**
 * Set the account that will hold funds set aside for parachain bond
 */
export interface ParachainStakingCall_set_parachain_bond_account {
    __kind: 'set_parachain_bond_account'
    new: Uint8Array
}

/**
 * Set the percent of inflation set aside for parachain bond
 */
export interface ParachainStakingCall_set_parachain_bond_reserve_percent {
    __kind: 'set_parachain_bond_reserve_percent'
    new: number
}

/**
 * Set the total number of collator candidates selected per round
 * - changes are not applied until the start of the next round
 */
export interface ParachainStakingCall_set_total_selected {
    __kind: 'set_total_selected'
    new: number
}

/**
 * Set the commission for all collators
 */
export interface ParachainStakingCall_set_collator_commission {
    __kind: 'set_collator_commission'
    new: number
}

/**
 * Set blocks per round
 * - if called with `new` less than length of current round, will transition immediately
 * in the next block
 * - also updates per-round inflation config
 */
export interface ParachainStakingCall_set_blocks_per_round {
    __kind: 'set_blocks_per_round'
    new: number
}

/**
 * Join the set of collator candidates
 */
export interface ParachainStakingCall_join_candidates {
    __kind: 'join_candidates'
    bond: bigint
    candidateCount: number
}

/**
 * Request to leave the set of candidates. If successful, the account is immediately
 * removed from the candidate pool to prevent selection as a collator, but unbonding is
 * executed with a delay of `T::LeaveCandidates` rounds.
 */
export interface ParachainStakingCall_leave_candidates {
    __kind: 'leave_candidates'
    candidateCount: number
}

/**
 * Temporarily leave the set of collator candidates without unbonding
 */
export interface ParachainStakingCall_go_offline {
    __kind: 'go_offline'
}

/**
 * Rejoin the set of collator candidates if previously had called `go_offline`
 */
export interface ParachainStakingCall_go_online {
    __kind: 'go_online'
}

/**
 * Bond more for collator candidates
 */
export interface ParachainStakingCall_candidate_bond_more {
    __kind: 'candidate_bond_more'
    more: bigint
}

/**
 * Bond less for collator candidates
 */
export interface ParachainStakingCall_candidate_bond_less {
    __kind: 'candidate_bond_less'
    less: bigint
}

/**
 * If caller is not a nominator, then join the set of nominators
 * If caller is a nominator, then makes nomination to change their nomination state
 */
export interface ParachainStakingCall_nominate {
    __kind: 'nominate'
    collator: Uint8Array
    amount: bigint
    collatorNominatorCount: number
    nominationCount: number
}

/**
 * Request to leave the set of nominators. If successful, the nominator is scheduled
 * to exit
 */
export interface ParachainStakingCall_leave_nominators {
    __kind: 'leave_nominators'
    nominationCount: number
}

/**
 * Request to revoke an existing nomination. If successful, the nomination is scheduled
 * to exit
 */
export interface ParachainStakingCall_revoke_nomination {
    __kind: 'revoke_nomination'
    collator: Uint8Array
}

/**
 * Bond more for nominators with respect to a specific collator candidate
 */
export interface ParachainStakingCall_nominator_bond_more {
    __kind: 'nominator_bond_more'
    candidate: Uint8Array
    more: bigint
}

/**
 * Bond less for nominators with respect to a specific nominator candidate
 */
export interface ParachainStakingCall_nominator_bond_less {
    __kind: 'nominator_bond_less'
    candidate: Uint8Array
    less: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorInherentCall = AuthorInherentCall_set_author

/**
 * Inherent to set the author of a block
 */
export interface AuthorInherentCall_set_author {
    __kind: 'set_author'
    author: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorMappingCall = AuthorMappingCall_add_association | AuthorMappingCall_update_association | AuthorMappingCall_clear_association

/**
 * Register your AuthorId onchain so blocks you author are associated with your account.
 * 
 * Users who have been (or will soon be) elected active collators in staking,
 * should submit this extrinsic to have their blocks accepted and earn rewards.
 */
export interface AuthorMappingCall_add_association {
    __kind: 'add_association'
    authorId: Uint8Array
}

/**
 * Change your AuthorId.
 * 
 * This is useful for normal key rotation or for when switching from one physical collator
 * machine to another. No new security deposit is required.
 */
export interface AuthorMappingCall_update_association {
    __kind: 'update_association'
    oldAuthorId: Uint8Array
    newAuthorId: Uint8Array
}

/**
 * Clear your AuthorId.
 * 
 * This is useful when you are no longer an author and would like to re-claim your security
 * deposit.
 */
export interface AuthorMappingCall_clear_association {
    __kind: 'clear_association'
    authorId: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * Service a single overweight message.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight message to service.
 * - `weight_limit`: The amount of weight that message execution may take.
 * 
 * Errors:
 * - `Unknown`: Message of `index` is unknown.
 * - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets

export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than the
 * maximum amount of weight that the message could take to be executed, then no execution
 * attempt will be made.
 * 
 * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 * to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_278
    maxWeight: bigint
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be Root.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V1MultiLocation
    xcmVersion: number
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V2WeightLimit
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V2WeightLimit
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CrowdloanCall = CrowdloanCall_associate_native_identity | CrowdloanCall_change_association_with_relay_keys | CrowdloanCall_claim | CrowdloanCall_update_reward_address | CrowdloanCall_complete_initialization | CrowdloanCall_initialize_reward_vec

/**
 * Associate a native rewards_destination identity with a crowdloan contribution.
 * 
 * The caller needs to provide the unassociated relay account and a proof to succeed
 * with the association
 * The proof is nothing but a signature over the reward_address using the relay keys
 */
export interface CrowdloanCall_associate_native_identity {
    __kind: 'associate_native_identity'
    rewardAccount: Uint8Array
    relayAccount: Uint8Array
    proof: MultiSignature
}

/**
 * Change reward account by submitting proofs from relay accounts
 * 
 * The number of valid proofs needs to be bigger than 'RewardAddressRelayVoteThreshold'
 * The account to be changed needs to be submitted as 'previous_account'
 * Origin must be RewardAddressChangeOrigin
 */
export interface CrowdloanCall_change_association_with_relay_keys {
    __kind: 'change_association_with_relay_keys'
    rewardAccount: Uint8Array
    previousAccount: Uint8Array
    proofs: [Uint8Array, MultiSignature][]
}

/**
 * Collect whatever portion of your reward are currently vested.
 */
export interface CrowdloanCall_claim {
    __kind: 'claim'
}

/**
 * Update reward address, proving that the caller owns the current native key
 */
export interface CrowdloanCall_update_reward_address {
    __kind: 'update_reward_address'
    newRewardAccount: Uint8Array
}

/**
 * This extrinsic completes the initialization if some checks are fullfiled. These checks are:
 *  -The reward contribution money matches the crowdloan pot
 *  -The end vesting block is higher than the init vesting block
 *  -The initialization has not complete yet
 */
export interface CrowdloanCall_complete_initialization {
    __kind: 'complete_initialization'
    leaseEndingBlock: number
}

/**
 * Initialize the reward distribution storage. It shortcuts whenever an error is found
 * This does not enforce any checks other than making sure we dont go over funds
 * complete_initialization should perform any additional
 */
export interface CrowdloanCall_initialize_reward_vec {
    __kind: 'initialize_reward_vec'
    rewards: [Uint8Array, (Uint8Array | undefined), bigint][]
}

export type V0MultiLocation = V0MultiLocation_Null | V0MultiLocation_X1 | V0MultiLocation_X2 | V0MultiLocation_X3 | V0MultiLocation_X4 | V0MultiLocation_X5 | V0MultiLocation_X6 | V0MultiLocation_X7 | V0MultiLocation_X8

export interface V0MultiLocation_Null {
    __kind: 'Null'
}

export interface V0MultiLocation_X1 {
    __kind: 'X1'
    value: V0Junction
}

export interface V0MultiLocation_X2 {
    __kind: 'X2'
    value: [V0Junction, V0Junction]
}

export interface V0MultiLocation_X3 {
    __kind: 'X3'
    value: [V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X4 {
    __kind: 'X4'
    value: [V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X5 {
    __kind: 'X5'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X6 {
    __kind: 'X6'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X7 {
    __kind: 'X7'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X8 {
    __kind: 'X8'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V1MultiLocation {
    parents: number
    interior: V1Junctions
}

export type V0MultiAsset = V0MultiAsset_None | V0MultiAsset_All | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible

export interface V0MultiAsset_None {
    __kind: 'None'
}

export interface V0MultiAsset_All {
    __kind: 'All'
}

export interface V0MultiAsset_AllFungible {
    __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
    __kind: 'AllNonFungible'
}

export interface V0MultiAsset_AllAbstractFungible {
    __kind: 'AllAbstractFungible'
    id: Uint8Array
}

export interface V0MultiAsset_AllAbstractNonFungible {
    __kind: 'AllAbstractNonFungible'
    class: Uint8Array
}

export interface V0MultiAsset_AllConcreteFungible {
    __kind: 'AllConcreteFungible'
    id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
    __kind: 'AllConcreteNonFungible'
    class: V0MultiLocation
}

export interface V0MultiAsset_AbstractFungible {
    __kind: 'AbstractFungible'
    id: Uint8Array
    amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
    __kind: 'AbstractNonFungible'
    class: Uint8Array
    instance: V1AssetInstance
}

export interface V0MultiAsset_ConcreteFungible {
    __kind: 'ConcreteFungible'
    id: V0MultiLocation
    amount: bigint
}

export interface V0MultiAsset_ConcreteNonFungible {
    __kind: 'ConcreteNonFungible'
    class: V0MultiLocation
    instance: V1AssetInstance
}

export interface V1MultiAsset {
    id: V1AssetId
    fun: V1Fungibility
}

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: bigint
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

export type OutcomeReport = OutcomeReport_Categorical | OutcomeReport_Scalar

export interface OutcomeReport_Categorical {
    __kind: 'Categorical'
    value: number
}

export interface OutcomeReport_Scalar {
    __kind: 'Scalar'
    value: bigint
}

export type MarketType = MarketType_Categorical | MarketType_Scalar

export interface MarketType_Categorical {
    __kind: 'Categorical'
    value: number
}

export interface MarketType_Scalar {
    __kind: 'Scalar'
    value: RangeInclusive
}

export type MarketPeriod = MarketPeriod_Block | MarketPeriod_Timestamp

export interface MarketPeriod_Block {
    __kind: 'Block'
    value: Range
}

export interface MarketPeriod_Timestamp {
    __kind: 'Timestamp'
    value: Range
}

export type MultiHash = MultiHash_Sha3_384

export interface MultiHash_Sha3_384 {
    __kind: 'Sha3_384'
    value: Uint8Array
}

export type MarketCreation = MarketCreation_Permissionless | MarketCreation_Advised

export interface MarketCreation_Permissionless {
    __kind: 'Permissionless'
}

export interface MarketCreation_Advised {
    __kind: 'Advised'
}

export type MarketDisputeMechanism = MarketDisputeMechanism_Authorized | MarketDisputeMechanism_Court | MarketDisputeMechanism_SimpleDisputes

export interface MarketDisputeMechanism_Authorized {
    __kind: 'Authorized'
    value: Uint8Array
}

export interface MarketDisputeMechanism_Court {
    __kind: 'Court'
}

export interface MarketDisputeMechanism_SimpleDisputes {
    __kind: 'SimpleDisputes'
}

export type ScoringRule = ScoringRule_CPMM | ScoringRule_RikiddoSigmoidFeeMarketEma

export interface ScoringRule_CPMM {
    __kind: 'CPMM'
}

export interface ScoringRule_RikiddoSigmoidFeeMarketEma {
    __kind: 'RikiddoSigmoidFeeMarketEma'
}

export interface RangeInclusive {
    start: bigint
    end: bigint
}

export interface ParachainInherentData {
    validationData: V1PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
}

export interface Type_261 {
    min: bigint
    ideal: bigint
    max: bigint
}

export interface Type_262 {
    min: number
    ideal: number
    max: number
}

export type VersionedXcm = VersionedXcm_V0 | VersionedXcm_V1 | VersionedXcm_V2

export interface VersionedXcm_V0 {
    __kind: 'V0'
    value: V0Xcm
}

export interface VersionedXcm_V1 {
    __kind: 'V1'
    value: V1Xcm
}

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export type Type_278 = Type_278_V0 | Type_278_V1 | Type_278_V2

export interface Type_278_V0 {
    __kind: 'V0'
    value: Type_279
}

export interface Type_278_V1 {
    __kind: 'V1'
    value: Type_284
}

export interface Type_278_V2 {
    __kind: 'V2'
    value: Type_290[]
}

export type MultiSignature = MultiSignature_Ed25519 | MultiSignature_Sr25519 | MultiSignature_Ecdsa

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export type V0Junction = V0Junction_Parent | V0Junction_Parachain | V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_PalletInstance | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_Plurality

export interface V0Junction_Parent {
    __kind: 'Parent'
}

export interface V0Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V0Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Uint8Array
}

export interface V0Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V0Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Uint8Array
}

export interface V0Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V0Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V0Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V0Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V0Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
    __kind: 'Here'
}

export interface V1Junctions_X1 {
    __kind: 'X1'
    value: V1Junction
}

export interface V1Junctions_X2 {
    __kind: 'X2'
    value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
    __kind: 'X3'
    value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
    __kind: 'X4'
    value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
    __kind: 'X5'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
    __kind: 'X6'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
    __kind: 'X7'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
    __kind: 'X8'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export type V1AssetInstance = V1AssetInstance_Undefined | V1AssetInstance_Index | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Blob

export interface V1AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V1AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V1AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V1AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V1AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V1AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface V1AssetInstance_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type V1AssetId = V1AssetId_Concrete | V1AssetId_Abstract

export interface V1AssetId_Concrete {
    __kind: 'Concrete'
    value: V1MultiLocation
}

export interface V1AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V1Fungibility = V1Fungibility_Fungible | V1Fungibility_NonFungible

export interface V1Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V1Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V1AssetInstance
}

export interface Range {
    start: bigint
    end: bigint
}

export interface V1PersistedValidationData {
    parentHead: Uint8Array
    relayParentNumber: number
    relayParentStorageRoot: Uint8Array
    maxPovSize: number
}

export interface StorageProof {
    trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
    sentAt: number
    msg: Uint8Array
}

export interface InboundHrmpMessage {
    sentAt: number
    data: Uint8Array
}

export type V0Xcm = V0Xcm_WithdrawAsset | V0Xcm_ReserveAssetDeposit | V0Xcm_TeleportAsset | V0Xcm_QueryResponse | V0Xcm_TransferAsset | V0Xcm_TransferReserveAsset | V0Xcm_Transact | V0Xcm_HrmpNewChannelOpenRequest | V0Xcm_HrmpChannelAccepted | V0Xcm_HrmpChannelClosing | V0Xcm_RelayedFrom

export interface V0Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface V0Xcm_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface V0Xcm_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Xcm_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V0Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V0Xcm_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V0Xcm_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V0Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: V0Xcm
}

export type V1Xcm = V1Xcm_WithdrawAsset | V1Xcm_ReserveAssetDeposited | V1Xcm_ReceiveTeleportedAsset | V1Xcm_QueryResponse | V1Xcm_TransferAsset | V1Xcm_TransferReserveAsset | V1Xcm_Transact | V1Xcm_HrmpNewChannelOpenRequest | V1Xcm_HrmpChannelAccepted | V1Xcm_HrmpChannelClosing | V1Xcm_RelayedFrom | V1Xcm_SubscribeVersion | V1Xcm_UnsubscribeVersion

export interface V1Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface V1Xcm_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface V1Xcm_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Xcm_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V1Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V1Xcm_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V1Xcm_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V1Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: V1Xcm
}

export interface V1Xcm_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V1Xcm_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V2Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_279 = Type_279_WithdrawAsset | Type_279_ReserveAssetDeposit | Type_279_TeleportAsset | Type_279_QueryResponse | Type_279_TransferAsset | Type_279_TransferReserveAsset | Type_279_Transact | Type_279_HrmpNewChannelOpenRequest | Type_279_HrmpChannelAccepted | Type_279_HrmpChannelClosing | Type_279_RelayedFrom

export interface Type_279_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: Type_281[]
}

export interface Type_279_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: Type_281[]
}

export interface Type_279_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: Type_281[]
}

export interface Type_279_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface Type_279_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_279_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_279_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_279_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_279_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_279_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_279_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: Type_279
}

export type Type_284 = Type_284_WithdrawAsset | Type_284_ReserveAssetDeposited | Type_284_ReceiveTeleportedAsset | Type_284_QueryResponse | Type_284_TransferAsset | Type_284_TransferReserveAsset | Type_284_Transact | Type_284_HrmpNewChannelOpenRequest | Type_284_HrmpChannelAccepted | Type_284_HrmpChannelClosing | Type_284_RelayedFrom | Type_284_SubscribeVersion | Type_284_UnsubscribeVersion

export interface Type_284_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: Type_286[]
}

export interface Type_284_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: Type_286[]
}

export interface Type_284_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: Type_286[]
}

export interface Type_284_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface Type_284_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_284_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_284_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_284_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_284_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_284_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_284_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: Type_284
}

export interface Type_284_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_284_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_290 = Type_290_WithdrawAsset | Type_290_ReserveAssetDeposited | Type_290_ReceiveTeleportedAsset | Type_290_QueryResponse | Type_290_TransferAsset | Type_290_TransferReserveAsset | Type_290_Transact | Type_290_HrmpNewChannelOpenRequest | Type_290_HrmpChannelAccepted | Type_290_HrmpChannelClosing | Type_290_ClearOrigin | Type_290_DescendOrigin | Type_290_ReportError | Type_290_DepositAsset | Type_290_DepositReserveAsset | Type_290_ExchangeAsset | Type_290_InitiateReserveWithdraw | Type_290_InitiateTeleport | Type_290_QueryHolding | Type_290_BuyExecution | Type_290_RefundSurplus | Type_290_SetErrorHandler | Type_290_SetAppendix | Type_290_ClearError | Type_290_ClaimAsset | Type_290_Trap | Type_290_SubscribeVersion | Type_290_UnsubscribeVersion

export interface Type_290_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface Type_290_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface Type_290_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface Type_290_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_290_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_290_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_290_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_290_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_290_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_290_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_290_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_290_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface Type_290_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface Type_290_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_290_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_290_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_290_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_290_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_290_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_290_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_290_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_290_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_290[]
}

export interface Type_290_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_290[]
}

export interface Type_290_ClearError {
    __kind: 'ClearError'
}

export interface Type_290_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface Type_290_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_290_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_290_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Named | V0NetworkId_Polkadot | V0NetworkId_Kusama

export interface V0NetworkId_Any {
    __kind: 'Any'
}

export interface V0NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V0NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V0NetworkId_Kusama {
    __kind: 'Kusama'
}

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial

export interface V0BodyId_Unit {
    __kind: 'Unit'
}

export interface V0BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V0BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V0BodyId_Executive {
    __kind: 'Executive'
}

export interface V0BodyId_Technical {
    __kind: 'Technical'
}

export interface V0BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V0BodyId_Judicial {
    __kind: 'Judicial'
}

export type V0BodyPart = V0BodyPart_Voice | V0BodyPart_Members | V0BodyPart_Fraction | V0BodyPart_AtLeastProportion | V0BodyPart_MoreThanProportion

export interface V0BodyPart_Voice {
    __kind: 'Voice'
}

export interface V0BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V0BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V0BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V0BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type V1Junction = V1Junction_Parachain | V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_PalletInstance | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_Plurality

export interface V1Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V1Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Uint8Array
}

export interface V1Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V1Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Uint8Array
}

export interface V1Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V1Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V1Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V1Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V1Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V0Order = V0Order_Null | V0Order_DepositAsset | V0Order_DepositReserveAsset | V0Order_ExchangeAsset | V0Order_InitiateReserveWithdraw | V0Order_InitiateTeleport | V0Order_QueryHolding | V0Order_BuyExecution

export interface V0Order_Null {
    __kind: 'Null'
}

export interface V0Order_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface V0Order_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface V0Order_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

export interface V0Order_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: V0Xcm[]
}

export type V0Response = V0Response_Assets

export interface V0Response_Assets {
    __kind: 'Assets'
    value: V0MultiAsset[]
}

export type V0OriginKind = V0OriginKind_Native | V0OriginKind_SovereignAccount | V0OriginKind_Superuser | V0OriginKind_Xcm

export interface V0OriginKind_Native {
    __kind: 'Native'
}

export interface V0OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V0OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V0OriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncoded {
    encoded: Uint8Array
}

export type V1Order = V1Order_Noop | V1Order_DepositAsset | V1Order_DepositReserveAsset | V1Order_ExchangeAsset | V1Order_InitiateReserveWithdraw | V1Order_InitiateTeleport | V1Order_QueryHolding | V1Order_BuyExecution

export interface V1Order_Noop {
    __kind: 'Noop'
}

export interface V1Order_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface V1Order_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface V1Order_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export interface V1Order_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: V1Xcm[]
}

export type V1Response = V1Response_Assets | V1Response_Version

export interface V1Response_Assets {
    __kind: 'Assets'
    value: V1MultiAsset[]
}

export interface V1Response_Version {
    __kind: 'Version'
    value: number
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V1MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V1MultiAsset[]
}

export interface V1MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V1WildMultiAsset
}

export type Type_281 = Type_281_Null | Type_281_DepositAsset | Type_281_DepositReserveAsset | Type_281_ExchangeAsset | Type_281_InitiateReserveWithdraw | Type_281_InitiateTeleport | Type_281_QueryHolding | Type_281_BuyExecution

export interface Type_281_Null {
    __kind: 'Null'
}

export interface Type_281_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_281_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_281_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface Type_281_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface Type_281_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_281_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

export interface Type_281_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: Type_279[]
}

export type Type_286 = Type_286_Noop | Type_286_DepositAsset | Type_286_DepositReserveAsset | Type_286_ExchangeAsset | Type_286_InitiateReserveWithdraw | Type_286_InitiateTeleport | Type_286_QueryHolding | Type_286_BuyExecution

export interface Type_286_Noop {
    __kind: 'Noop'
}

export interface Type_286_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_286_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_286_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_286_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface Type_286_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_286_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export interface Type_286_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: Type_284[]
}

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_TooMuchWeightRequired | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_TooMuchWeightRequired {
    __kind: 'TooMuchWeightRequired'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V1WildMultiAsset = V1WildMultiAsset_All | V1WildMultiAsset_AllOf

export interface V1WildMultiAsset_All {
    __kind: 'All'
}

export interface V1WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V1AssetId
    fun: V1WildFungibility
}

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
    __kind: 'NonFungible'
}
