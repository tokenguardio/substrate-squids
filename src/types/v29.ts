import type {Result, Option} from './support'

export type MarketStatus = MarketStatus_Proposed | MarketStatus_Active | MarketStatus_Suspended | MarketStatus_Closed | MarketStatus_CollectingSubsidy | MarketStatus_InsufficientSubsidy | MarketStatus_Reported | MarketStatus_Disputed | MarketStatus_Resolved

export interface MarketStatus_Proposed {
    __kind: 'Proposed'
}

export interface MarketStatus_Active {
    __kind: 'Active'
}

export interface MarketStatus_Suspended {
    __kind: 'Suspended'
}

export interface MarketStatus_Closed {
    __kind: 'Closed'
}

export interface MarketStatus_CollectingSubsidy {
    __kind: 'CollectingSubsidy'
}

export interface MarketStatus_InsufficientSubsidy {
    __kind: 'InsufficientSubsidy'
}

export interface MarketStatus_Reported {
    __kind: 'Reported'
}

export interface MarketStatus_Disputed {
    __kind: 'Disputed'
}

export interface MarketStatus_Resolved {
    __kind: 'Resolved'
}

export interface Market {
    creator: Uint8Array
    creation: MarketCreation
    creatorFee: number
    oracle: Uint8Array
    metadata: Uint8Array
    marketType: MarketType
    period: MarketPeriod
    scoringRule: ScoringRule
    status: MarketStatus
    report: (Report | undefined)
    resolvedOutcome: (Outcome | undefined)
    mdm: MarketDisputeMechanism
}

export interface MarketDispute {
    at: bigint
    by: Uint8Array
    outcome: OutcomeReport
}

export interface Report {
    at: bigint
    by: Uint8Array
    outcome: OutcomeReport
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

export type Proposal = Proposal_System | Proposal_Timestamp | Proposal_Balances | Proposal_Treasury | Proposal_Vesting | Proposal_AdvisoryCommitteeCollective | Proposal_AdvisoryCommitteeMembership | Proposal_Identity | Proposal_Sudo | Proposal_Utility | Proposal_Currency | Proposal_Authorized | Proposal_Court | Proposal_LiquidityMining | Proposal_Swaps | Proposal_PredictionMarkets | Proposal_ParachainSystem | Proposal_ParachainStaking | Proposal_AuthorInherent | Proposal_AuthorMapping | Proposal_DmpQueue | Proposal_PolkadotXcm | Proposal_XcmpQueue | Proposal_Crowdloan

export interface Proposal_System {
    __kind: 'System'
    value: SystemCall
}

export interface Proposal_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Proposal_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Proposal_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Proposal_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Proposal_AdvisoryCommitteeCollective {
    __kind: 'AdvisoryCommitteeCollective'
    value: AdvisoryCommitteeCollectiveCall
}

export interface Proposal_AdvisoryCommitteeMembership {
    __kind: 'AdvisoryCommitteeMembership'
    value: AdvisoryCommitteeMembershipCall
}

export interface Proposal_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Proposal_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Proposal_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Proposal_Currency {
    __kind: 'Currency'
    value: CurrencyCall
}

export interface Proposal_Authorized {
    __kind: 'Authorized'
    value: AuthorizedCall
}

export interface Proposal_Court {
    __kind: 'Court'
    value: CourtCall
}

export interface Proposal_LiquidityMining {
    __kind: 'LiquidityMining'
    value: LiquidityMiningCall
}

export interface Proposal_Swaps {
    __kind: 'Swaps'
    value: SwapsCall
}

export interface Proposal_PredictionMarkets {
    __kind: 'PredictionMarkets'
    value: PredictionMarketsCall
}

export interface Proposal_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Proposal_ParachainStaking {
    __kind: 'ParachainStaking'
    value: ParachainStakingCall
}

export interface Proposal_AuthorInherent {
    __kind: 'AuthorInherent'
    value: AuthorInherentCall
}

export interface Proposal_AuthorMapping {
    __kind: 'AuthorMapping'
    value: AuthorMappingCall
}

export interface Proposal_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Proposal_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Proposal_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Proposal_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export type MarketPeriod = MarketPeriod_Block | MarketPeriod_Timestamp

export interface MarketPeriod_Block {
    __kind: 'Block'
    value: [bigint, bigint]
}

export interface MarketPeriod_Timestamp {
    __kind: 'Timestamp'
    value: [bigint, bigint]
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

export type MarketType = MarketType_Categorical | MarketType_Scalar

export interface MarketType_Categorical {
    __kind: 'Categorical'
    value: number
}

export interface MarketType_Scalar {
    __kind: 'Scalar'
    value: [bigint, bigint]
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

export type Type_64 = Type_64_System | Type_64_Timestamp | Type_64_Balances | Type_64_Treasury | Type_64_Vesting | Type_64_AdvisoryCommitteeCollective | Type_64_AdvisoryCommitteeMembership | Type_64_Identity | Type_64_Sudo | Type_64_Utility | Type_64_Currency | Type_64_Authorized | Type_64_Court | Type_64_LiquidityMining | Type_64_Swaps | Type_64_PredictionMarkets | Type_64_ParachainSystem | Type_64_ParachainStaking | Type_64_AuthorInherent | Type_64_AuthorMapping | Type_64_DmpQueue | Type_64_PolkadotXcm | Type_64_XcmpQueue | Type_64_Crowdloan

export interface Type_64_System {
    __kind: 'System'
    value: SystemCall
}

export interface Type_64_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Type_64_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Type_64_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Type_64_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Type_64_AdvisoryCommitteeCollective {
    __kind: 'AdvisoryCommitteeCollective'
    value: AdvisoryCommitteeCollectiveCall
}

export interface Type_64_AdvisoryCommitteeMembership {
    __kind: 'AdvisoryCommitteeMembership'
    value: AdvisoryCommitteeMembershipCall
}

export interface Type_64_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Type_64_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Type_64_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Type_64_Currency {
    __kind: 'Currency'
    value: CurrencyCall
}

export interface Type_64_Authorized {
    __kind: 'Authorized'
    value: AuthorizedCall
}

export interface Type_64_Court {
    __kind: 'Court'
    value: CourtCall
}

export interface Type_64_LiquidityMining {
    __kind: 'LiquidityMining'
    value: LiquidityMiningCall
}

export interface Type_64_Swaps {
    __kind: 'Swaps'
    value: SwapsCall
}

export interface Type_64_PredictionMarkets {
    __kind: 'PredictionMarkets'
    value: PredictionMarketsCall
}

export interface Type_64_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Type_64_ParachainStaking {
    __kind: 'ParachainStaking'
    value: ParachainStakingCall
}

export interface Type_64_AuthorInherent {
    __kind: 'AuthorInherent'
    value: AuthorInherentCall
}

export interface Type_64_AuthorMapping {
    __kind: 'AuthorMapping'
    value: AuthorMappingCall
}

export interface Type_64_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Type_64_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Type_64_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Type_64_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export type LookupSource = LookupSource_Id | LookupSource_Index | LookupSource_Raw | LookupSource_Address32 | LookupSource_Address20

export interface LookupSource_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface LookupSource_Index {
    __kind: 'Index'
    value: number
}

export interface LookupSource_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface LookupSource_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface LookupSource_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export type ScoringRule = ScoringRule_CPMM | ScoringRule_RikiddoSigmoidFeeMarketEma

export interface ScoringRule_CPMM {
    __kind: 'CPMM'
}

export interface ScoringRule_RikiddoSigmoidFeeMarketEma {
    __kind: 'RikiddoSigmoidFeeMarketEma'
}

export type Outcome = Outcome_Complete | Outcome_Incomplete | Outcome_Error

export interface Outcome_Complete {
    __kind: 'Complete'
    value: bigint
}

export interface Outcome_Incomplete {
    __kind: 'Incomplete'
    value: [bigint, XcmErrorV0]
}

export interface Outcome_Error {
    __kind: 'Error'
    value: XcmErrorV0
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: number
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write.
 *  - Base Weight: 1.405 µs
 *  - 1 write to HEAP_PAGES
 *  # </weight>
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 *  Set the new runtime code.
 * 
 *  # <weight>
 *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime, but generally this is very expensive.
 *  We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 *  Set the new runtime code without doing any checks of the given `code`.
 * 
 *  # <weight>
 *  - `O(C)` where `C` length of `code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime. We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 *  Set the new changes trie configuration.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write or delete (codec `O(1)`).
 *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
 *  - Base Weight: 7.218 µs
 *  - DB Weight:
 *      - Writes: Changes Trie, System Digest
 *  # </weight>
 */
export interface SystemCall_set_changes_trie_config {
    __kind: 'set_changes_trie_config'
    changesTrieConfig: (ChangesTrieConfiguration | undefined)
}

/**
 *  Set some items of storage.
 * 
 *  # <weight>
 *  - `O(I)` where `I` length of `items`
 *  - `I` storage writes (`O(1)`).
 *  - Base Weight: 0.568 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 *  Kill some items from storage.
 * 
 *  # <weight>
 *  - `O(IK)` where `I` length of `keys` and `K` length of one key
 *  - `I` storage deletions.
 *  - Base Weight: .378 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 * 
 *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 *  the prefix we are removing to accurately calculate the weight of this function.
 * 
 *  # <weight>
 *  - `O(P)` where `P` amount of keys with prefix `prefix`
 *  - `P` storage deletions.
 *  - Base Weight: 0.834 * P µs
 *  - Writes: Number of subkeys + 1
 *  # </weight>
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 *  Make some on-chain remark and emit event.
 * 
 *  # <weight>
 *  - `O(b)` where b is the length of the remark.
 *  - 1 event.
 *  # </weight>
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

export type TimestampCall = TimestampCall_set

/**
 *  Set the current time.
 * 
 *  This call should be invoked exactly once per block. It will panic at the finalization
 *  phase, if this call hasn't been invoked by that time.
 * 
 *  The timestamp should be greater than the previous one by the amount specified by
 *  `MinimumPeriod`.
 * 
 *  The dispatch origin for this call must be `Inherent`.
 * 
 *  # <weight>
 *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
 *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 *  # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all

/**
 *  Transfer some liquid free balance to another account.
 * 
 *  `transfer` will set the `FreeBalance` of the sender and receiver.
 *  It will decrease the total issuance of the system by the `TransferFee`.
 *  If the sender's account is below the existential deposit as a result
 *  of the transfer, the account will be reaped.
 * 
 *  The dispatch origin for this call must be `Signed` by the transactor.
 * 
 *  # <weight>
 *  - Dependent on arguments but not critical, given proper implementations for
 *    input config types. See related functions below.
 *  - It contains a limited number of reads and writes internally and no complex computation.
 * 
 *  Related functions:
 * 
 *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *    - Transferring balances to accounts that did not exist before will cause
 *       `T::OnNewAccount::on_new_account` to be called.
 *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 *  ---------------------------------
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: LookupSource
    value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  ---------------------
 *  - Base Weight:
 *      - Creating: 27.56 µs
 *      - Killing: 35.11 µs
 *  - DB Weight: 1 Read, 1 Write to `who`
 *  # </weight>
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: LookupSource
    newFree: bigint
    newReserved: bigint
}

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 *  # <weight>
 *  - Same as transfer, but additional read and write because the source account is
 *    not assumed to be in the overlay.
 *  # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: LookupSource
    dest: LookupSource
    value: bigint
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
 *  origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  [`transfer`]: struct.Pallet.html#method.transfer
 *  # <weight>
 *  - Cheaper than transfer because account cannot be killed.
 *  - Base Weight: 51.4 µs
 *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 *  #</weight>
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: LookupSource
    value: bigint
}

/**
 *  Transfer the entire transferable balance from the caller account.
 * 
 *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 *  transferred by this function. To ensure that this function results in a killed account,
 *  you might need to prepare the account by removing any reference counters, storage
 *  deposits, etc...
 * 
 *  The dispatch origin of this call must be Signed.
 * 
 *  - `dest`: The recipient of the transfer.
 *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *    of the funds the account has, causing the sender account to be killed (false), or
 *    transfer everything except at least the existential deposit, which will guarantee to
 *    keep the sender account alive (true).
 *    # <weight>
 *  - O(1). Just like transfer, but reading the user's transferable balance first.
 *    #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: LookupSource
    keepAlive: boolean
}

export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

/**
 *  Put forward a suggestion for spending. A deposit proportional to the value
 *  is reserved and slashed if the proposal is rejected. It is returned once the
 *  proposal is awarded.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `ProposalCount`, `origin account`
 *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 *  # </weight>
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: LookupSource
}

/**
 *  Reject a proposed spend. The original deposit will be slashed.
 * 
 *  May only be called from `T::RejectOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `Proposals`, `rejected proposer account`
 *  - DbWrites: `Proposals`, `rejected proposer account`
 *  # </weight>
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 *  and the original deposit will be returned.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1).
 *  - DbReads: `Proposals`, `Approvals`
 *  - DbWrite: `Approvals`
 *  # </weight>
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer

/**
 *  Unlock any vested funds of the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have funds still
 *  locked under this pallet.
 * 
 *  Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 2 Reads, 2 Writes
 *      - Reads: Vesting Storage, Balances Locks, [Sender Account]
 *      - Writes: Vesting Storage, Balances Locks, [Sender Account]
 *  # </weight>
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 *  Unlock any vested funds of a `target` account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `target`: The account whose vested funds should be unlocked. Must have funds still
 *  locked under this pallet.
 * 
 *  Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 3 Reads, 3 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account
 *      - Writes: Vesting Storage, Balances Locks, Target Account
 *  # </weight>
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: LookupSource
}

/**
 *  Create a vested transfer.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `target`: The account that should be transferred the vested funds.
 *  - `amount`: The amount of funds to transfer and will be vested.
 *  - `schedule`: The vesting schedule attached to the transfer.
 * 
 *  Emits `VestingCreated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 3 Reads, 3 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *      - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *  # </weight>
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: LookupSource
    schedule: VestingInfo
}

/**
 *  Force a vested transfer.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `source`: The account whose funds should be transferred.
 *  - `target`: The account that should be transferred the vested funds.
 *  - `amount`: The amount of funds to transfer and will be vested.
 *  - `schedule`: The vesting schedule attached to the transfer.
 * 
 *  Emits `VestingCreated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 4 Reads, 4 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
 *      - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
 *  # </weight>
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: LookupSource
    target: LookupSource
    schedule: VestingInfo
}

export type AdvisoryCommitteeCollectiveCall = AdvisoryCommitteeCollectiveCall_set_members | AdvisoryCommitteeCollectiveCall_execute | AdvisoryCommitteeCollectiveCall_propose | AdvisoryCommitteeCollectiveCall_vote | AdvisoryCommitteeCollectiveCall_close | AdvisoryCommitteeCollectiveCall_disapprove_proposal

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_execute {
    __kind: 'execute'
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface AdvisoryCommitteeCollectiveCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

export type AdvisoryCommitteeMembershipCall = AdvisoryCommitteeMembershipCall_add_member | AdvisoryCommitteeMembershipCall_remove_member | AdvisoryCommitteeMembershipCall_swap_member | AdvisoryCommitteeMembershipCall_reset_members | AdvisoryCommitteeMembershipCall_change_key | AdvisoryCommitteeMembershipCall_set_prime | AdvisoryCommitteeMembershipCall_clear_prime

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_add_member {
    __kind: 'add_member'
    who: Uint8Array
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_remove_member {
    __kind: 'remove_member'
    who: Uint8Array
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface AdvisoryCommitteeMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: Uint8Array
    add: Uint8Array
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface AdvisoryCommitteeMembershipCall_change_key {
    __kind: 'change_key'
    new: Uint8Array
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_set_prime {
    __kind: 'set_prime'
    who: Uint8Array
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface AdvisoryCommitteeMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 *  Add a registrar to the system.
 * 
 *  The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 *  - `account`: the account of the registrar.
 * 
 *  Emits `RegistrarAdded` if successful.
 * 
 *  # <weight>
 *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 *  - One storage mutation (codec `O(R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: Uint8Array
}

/**
 *  Set an account's identity information and reserve the appropriate deposit.
 * 
 *  If the account already has identity information, the deposit is taken as part payment
 *  for the new deposit.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `info`: The identity information.
 * 
 *  Emits `IdentitySet` if successful.
 * 
 *  # <weight>
 *  - `O(X + X' + R)`
 *    - where `X` additional-field-count (deposit-bounded and code-bounded)
 *    - where `R` judgements-count (registrar-count-bounded)
 *  - One balance reserve operation.
 *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 *  Set the sub-accounts of the sender.
 * 
 *  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 *  and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  - `subs`: The identity's (new) sub-accounts.
 * 
 *  # <weight>
 *  - `O(P + S)`
 *    - where `P` old-subs-count (hard- and deposit-bounded).
 *    - where `S` subs-count (hard- and deposit-bounded).
 *  - At most one balance operations.
 *  - DB:
 *    - `P + S` storage mutations (codec complexity `O(1)`)
 *    - One storage read (codec complexity `O(P)`).
 *    - One storage write (codec complexity `O(S)`).
 *    - One storage-exists (`IdentityOf::contains_key`).
 *  # </weight>
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [Uint8Array, Data][]
}

/**
 *  Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 *  Payment: All reserved balances on the account are returned.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  Emits `IdentityCleared` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`
 *    - where `R` registrar-count (governance-bounded).
 *    - where `S` subs-count (hard- and deposit-bounded).
 *    - where `X` additional-field-count (deposit-bounded and code-bounded).
 *  - One balance-unreserve operation.
 *  - `2` storage reads and `S + 2` storage deletions.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 *  Request a judgement from a registrar.
 * 
 *  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 *  given.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is requested.
 *  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 *  ```nocompile
 *  Self::registrars().get(reg_index).unwrap().fee
 *  ```
 * 
 *  Emits `JudgementRequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 *  Cancel a previous request.
 * 
 *  Payment: A previously reserved deposit is returned on success.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 *  Emits `JudgementUnrequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - One storage mutation `O(R + X)`.
 *  - One event
 *  # </weight>
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 *  Set the fee required for a judgement to be requested from a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fee`: the new fee.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 *  Change the account associated with a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `new`: the new account ID.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: Uint8Array
}

/**
 *  Set the field information for a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fields`: the fields that the registrar concerns themselves with.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 *  Provide a judgement for an account's identity.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `reg_index`.
 * 
 *  - `reg_index`: the index of the registrar whose judgement is being made.
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 *  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 *  Emits `JudgementGiven` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-transfer operation.
 *  - Up to one account-lookup operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: LookupSource
    judgement: IdentityJudgement
}

/**
 *  Remove an account's identity and sub-account information and slash the deposits.
 * 
 *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 *  `Slash`. Verification request deposits are not returned; they should be cancelled
 *  manually using `cancel_request`.
 * 
 *  The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 * 
 *  Emits `IdentityKilled` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`.
 *  - One balance-reserve operation.
 *  - `S + 2` storage mutations.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: LookupSource
}

/**
 *  Add the given account to the sender's subs.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: LookupSource
    data: Data
}

/**
 *  Alter the associated name of the given sub-account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: LookupSource
    data: Data
}

/**
 *  Remove the given account from the sender's subs.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: LookupSource
}

/**
 *  Remove the sender as a sub-account.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender (*not* the original depositor).
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  super-identity.
 * 
 *  NOTE: This should not normally be used, but is provided in the case that the non-
 *  controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Type_64
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 *  This function does not check the weight of the call, and instead allows the
 *  Sudo user to specify the weight of the call.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - The weight of this call is defined by the caller.
 *  # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Type_64
    weight: bigint
}

/**
 *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: LookupSource
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
 *  a given account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: LookupSource
    call: Type_64
}

export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all

/**
 *  Send a batch of dispatch calls.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 * 
 *  This will return `Ok` in all circumstances. To determine the success of the batch, an
 *  event is deposited. If a call failed and the batch was interrupted, then the
 *  `BatchInterrupted` event is deposited, along with the number of successful calls made
 *  and the error of the failed call. If all were successful, then the `BatchCompleted`
 *  event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Type_64[]
}

/**
 *  Send a call through an indexed pseudonym of the sender.
 * 
 *  Filter from origin are passed along. The call will be dispatched with an origin which
 *  use the same filter as the origin of this call.
 * 
 *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 *  because you expect `proxy` to have been used prior in the call stack and you do not want
 *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 *  in the Multisig pallet instead.
 * 
 *  NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Type_64
}

/**
 *  Send a batch of dispatch calls and atomically execute them.
 *  The whole transaction will rollback and fail if any of the calls failed.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Type_64[]
}

export type CurrencyCall = CurrencyCall_transfer | CurrencyCall_transfer_native_currency | CurrencyCall_update_balance

/**
 *  Transfer some balance to another account under `currency_id`.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 */
export interface CurrencyCall_transfer {
    __kind: 'transfer'
    dest: LookupSource
    currencyId: CurrencyIdOf
    amount: bigint
}

/**
 *  Transfer some native currency to another account.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 */
export interface CurrencyCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: LookupSource
    amount: bigint
}

/**
 *  update amount of account `who` under `currency_id`.
 * 
 *  The dispatch origin of this call must be _Root_.
 */
export interface CurrencyCall_update_balance {
    __kind: 'update_balance'
    who: LookupSource
    currencyId: CurrencyIdOf
    amount: bigint
}

export type AuthorizedCall = AuthorizedCall_authorize_market_outcome

/**
 *  Overwrites already provided outcomes for the same market and account.
 */
export interface AuthorizedCall_authorize_market_outcome {
    __kind: 'authorize_market_outcome'
    outcome: OutcomeReport
}

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

export type LiquidityMiningCall = LiquidityMiningCall_set_per_block_distribution

export interface LiquidityMiningCall_set_per_block_distribution {
    __kind: 'set_per_block_distribution'
    perBlockDistribution: bigint
}

export type SwapsCall = SwapsCall_admin_set_pool_as_stale | SwapsCall_pool_exit | SwapsCall_pool_exit_subsidy | SwapsCall_pool_exit_with_exact_asset_amount | SwapsCall_pool_exit_with_exact_pool_amount | SwapsCall_pool_join | SwapsCall_pool_join_subsidy | SwapsCall_pool_join_with_exact_asset_amount | SwapsCall_pool_join_with_exact_pool_amount | SwapsCall_swap_exact_amount_in | SwapsCall_swap_exact_amount_out

export interface SwapsCall_admin_set_pool_as_stale {
    __kind: 'admin_set_pool_as_stale'
    marketType: MarketType
    poolId: bigint
    outcomeReport: OutcomeReport
}

/**
 *  Pool - Exit
 * 
 *  Retrieves a given set of assets from `pool_id` to `origin`.
 * 
 *  # Arguments
 * 
 *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 *  * `pool_id`: Unique pool identifier.
 *  * `pool_amount`: The amount of LP shares of this pool being burned based on the
 *  retrieved assets.
 *  * `min_assets_out`: List of asset lower bounds. No asset should be lower than the
 *  provided values.
 */
export interface SwapsCall_pool_exit {
    __kind: 'pool_exit'
    poolId: bigint
    poolAmount: bigint
    minAssetsOut: bigint[]
}

/**
 *  Pool - Remove subsidty from a pool that uses the Rikiddo scoring rule.
 * 
 *  Unreserves `pool_amount` of the base currency from being used as subsidy.
 *  If `amount` is greater than the amount reserved for subsidy by `origin`,
 *  then the whole amount reserved for subsidy will be unreserved.
 * 
 *  # Arguments
 * 
 *  * `origin`: Liquidity Provider (LP). The account whose assets should be unreserved.
 *  * `pool_id`: Unique pool identifier.
 *  * `amount`: The amount of base currency that should be removed from subsidy.
 */
export interface SwapsCall_pool_exit_subsidy {
    __kind: 'pool_exit_subsidy'
    poolId: bigint
    amount: bigint
}

/**
 *  Pool - Exit with exact pool amount
 * 
 *  Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
 *  this method injects the exactly amount of `asset_amount` to `origin`.
 * 
 *  # Arguments
 * 
 *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 *  * `pool_id`: Unique pool identifier.
 *  * `asset`: Asset leaving the pool.
 *  * `asset_amount`: Asset amount that is leaving the pool.
 *  * `max_pool_amount`: The calculated amount of assets for the pool must be equal or
 *  greater than the given value.
 */
export interface SwapsCall_pool_exit_with_exact_asset_amount {
    __kind: 'pool_exit_with_exact_asset_amount'
    poolId: bigint
    asset: Asset
    assetAmount: bigint
    maxPoolAmount: bigint
}

/**
 *  Pool - Exit with exact pool amount
 * 
 *  Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
 *  this method injects the exactly amount of `pool_amount` to `pool_id`.
 * 
 *  # Arguments
 * 
 *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 *  * `pool_id`: Unique pool identifier.
 *  * `asset`: Asset leaving the pool.
 *  * `pool_amount`: Pool amount that is entering the pool.
 *  * `min_asset_amount`: The calculated amount for the asset must the equal or less
 *  than the given value.
 */
export interface SwapsCall_pool_exit_with_exact_pool_amount {
    __kind: 'pool_exit_with_exact_pool_amount'
    poolId: bigint
    asset: Asset
    poolAmount: bigint
    minAssetAmount: bigint
}

/**
 *  Pool - Join
 * 
 *  Joins a given set of assets provided from `origin` to `pool_id`.
 * 
 *  # Arguments
 * 
 *  * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
 *  * `pool_id`: Unique pool identifier.
 *  * `pool_amount`: The amount of LP shares for this pool that should be minted to the provider.
 *  * `max_assets_in`: List of asset upper bounds. No asset should be greater than the
 *  provided values.
 */
export interface SwapsCall_pool_join {
    __kind: 'pool_join'
    poolId: bigint
    poolAmount: bigint
    maxAssetsIn: bigint[]
}

/**
 *  Pool - Add subsidy to a pool that uses the Rikiddo scoring rule.
 * 
 *  Reserves `pool_amount` of the base currency to be added as subsidy on pool activation.
 * 
 *  # Arguments
 * 
 *  * `origin`: Liquidity Provider (LP). The account whose assets should be reserved.
 *  * `pool_id`: Unique pool identifier.
 *  * `amount`: The amount of base currency that should be added to subsidy.
 */
export interface SwapsCall_pool_join_subsidy {
    __kind: 'pool_join_subsidy'
    poolId: bigint
    amount: bigint
}

/**
 *  Pool - Join with exact asset amount
 * 
 *  Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
 *  this method transfers the exactly amount of `asset_amount` to `pool_id`.
 * 
 *  # Arguments
 * 
 *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 *  * `pool_id`: Unique pool identifier.
 *  * `asset_in`: Asset entering the pool.
 *  * `asset_amount`: Asset amount that is entering the pool.
 *  * `min_pool_amount`: The calculated amount for the pool must be equal or greater
 *  than the given value.
 */
export interface SwapsCall_pool_join_with_exact_asset_amount {
    __kind: 'pool_join_with_exact_asset_amount'
    poolId: bigint
    assetIn: Asset
    assetAmount: bigint
    minPoolAmount: bigint
}

/**
 *  Pool - Join with exact pool amount
 * 
 *  Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
 *  this method injects the exactly amount of `pool_amount` to `origin`.
 * 
 *  # Arguments
 * 
 *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 *  * `pool_id`: Unique pool identifier.
 *  * `asset`: Asset entering the pool.
 *  * `pool_amount`: Asset amount that is entering the pool.
 *  * `max_asset_amount`: The calculated amount of assets for the pool must be equal or
 *  less than the given value.
 */
export interface SwapsCall_pool_join_with_exact_pool_amount {
    __kind: 'pool_join_with_exact_pool_amount'
    poolId: bigint
    asset: Asset
    poolAmount: bigint
    maxAssetAmount: bigint
}

/**
 *  Swap - Exact amount in
 * 
 *  Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
 * 
 *  # Arguments
 * 
 *  * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
 *  * `pool_id`: Unique pool identifier.
 *  * `asset_in`: Asset entering the pool.
 *  * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
 *  * `asset_out`: Asset leaving the pool.
 *  * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
 *  * `max_price`: Market price must be equal or less than the provided value.
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
 *  Swap - Exact amount out
 * 
 *  Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
 * 
 *  # Arguments
 * 
 *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
 *  * `pool_id`: Unique pool identifier.
 *  * `asset_in`: Asset entering the pool.
 *  * `max_amount_asset_in`: Maximum asset amount that can enter the pool.
 *  * `asset_out`: Asset leaving the pool.
 *  * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
 *  * `max_price`: Market price must be equal or less than the provided value.
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

export type PredictionMarketsCall = PredictionMarketsCall_admin_destroy_market | PredictionMarketsCall_admin_move_market_to_closed | PredictionMarketsCall_admin_move_market_to_resolved | PredictionMarketsCall_approve_market | PredictionMarketsCall_buy_complete_set | PredictionMarketsCall_dispute | PredictionMarketsCall_cancel_pending_market | PredictionMarketsCall_create_categorical_market | PredictionMarketsCall_create_cpmm_market_and_deploy_assets | PredictionMarketsCall_create_scalar_market | PredictionMarketsCall_deploy_swap_pool_and_additional_liquidity | PredictionMarketsCall_deploy_swap_pool_for_market | PredictionMarketsCall_global_dispute | PredictionMarketsCall_redeem_shares | PredictionMarketsCall_reject_market | PredictionMarketsCall_report | PredictionMarketsCall_sell_complete_set

/**
 *  Allows the `ApprovalOrigin` to immediately destroy a market.
 * 
 *  todo: this should check if there's any outstanding funds reserved if it stays
 *  in for production
 */
export interface PredictionMarketsCall_admin_destroy_market {
    __kind: 'admin_destroy_market'
    marketId: bigint
}

/**
 *  Allows the `ApprovalOrigin` to immediately move an open market to closed.
 */
export interface PredictionMarketsCall_admin_move_market_to_closed {
    __kind: 'admin_move_market_to_closed'
    marketId: bigint
}

/**
 *  Allows the `ApprovalOrigin` to immediately move a reported or disputed
 *  market to resolved.
 */
export interface PredictionMarketsCall_admin_move_market_to_resolved {
    __kind: 'admin_move_market_to_resolved'
    marketId: bigint
}

/**
 *  Approves a market that is waiting for approval from the
 *  advisory committee.
 * 
 *  NOTE: Returns the proposer's bond since the market has been
 *  deemed valid by an advisory committee.
 * 
 *  NOTE: Can only be called by the `ApprovalOrigin`.
 * 
 */
export interface PredictionMarketsCall_approve_market {
    __kind: 'approve_market'
    marketId: bigint
}

/**
 *  Buys the complete set of outcome shares of a market. For example, when calling this
 *  function on a categorical market with five different outcomes, five different shares
 *  will be transferred to the callee.
 * 
 *  The amount of each share will equal the provided `amount` parameter.
 * 
 *  NOTE: This is the only way to create new shares.
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
 *  NOTE: Only for PoC probably - should only allow rejections
 *  in a production environment since this better aligns incentives.
 *  See also: Polkadot Treasury
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
 *  This function combines the creation of a market, the buying of a complete set of
 *  outcome assets, the deployment of the minimum amount of outcome assets and
 *  the optional deployment of additional outcome asset.
 * 
 *  # Arguments
 * 
 *  * `oracle`: The oracle of the market who will report the correct outcome.
 *  * `period`: The active period of the market.
 *  * `metadata`: A hash pointer to the metadata of the market.
 *  * `creation`: The creation type of the market (permissionless or advised).
 *  * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
 *  * `mdm`: The market dispute mechanism.
 *  * `amount_base_asset`: The amount of the base asset that should be deployed.
 *  * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
 *      deployed. The highest value will be used to buy a complete set, i.e. every outcome
 *      asset will be bought in quantities specified by the highest value in this vector.
 *      Any value that is lower than the highest value in the vector signals that not
 *      all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
 *      means, that after deployment 30 of the first outcome asset will be kept.
 *  * `weights`: The relative denormalized weight of each asset price.
 *  * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
 *      assets that are specified as zero in this vector are sold. Must have the same
 *      length as `amount_outcome_assets`.
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
    outcomeRange: [bigint, bigint]
    mdm: MarketDisputeMechanism
    scoringRule: ScoringRule
}

/**
 *  This function combines the creation of a market, the buying of a complete set of
 *  outcome assets, the deployment of the minimum amount of outcome assets and
 *  the optional deployment of additional outcome asset.
 * 
 *  # Arguments
 * 
 *  * `market_id`: Id of the market for that the pool should be created and populated.
 *  * `amount_base_asset`: The amount of the base asset that should be deployed.
 *  * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
 *      deployed. The highest value will be used to buy a complete set, i.e. every outcome
 *      asset will be bought in quantities specified by the highest value in this vector.
 *      Any value that is lower than the highest value in the vector signals that not
 *      all assets should be deployed. For example, `amount_outcome_assets = [120, 150]
 *      means, that after deployment 30 of the first outcome asset will be kept.
 *  * `weights`: The relative denormalized weight of each asset price.
 *  * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
 *      assets that are specified as zero in this vector are sold. Must have the same
 *      length as `amount_outcome_assets`.
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
 *  Deploys a new pool for the market. This pallet keeps track of a single
 *  canonical swap pool for each market in `market_to_swap_pool`.
 * 
 *  The sender should have enough funds to cover all of the required
 *  shares to seed the pool.
 */
export interface PredictionMarketsCall_deploy_swap_pool_for_market {
    __kind: 'deploy_swap_pool_for_market'
    marketId: bigint
    weights: bigint[]
}

/**
 *  Starts a global dispute.
 * 
 *  NOTE: Requires the market to be already disputed `MaxDisputes` amount of times.
 * 
 */
export interface PredictionMarketsCall_global_dispute {
    __kind: 'global_dispute'
    marketId: bigint
}

/**
 *  Redeems the winning shares of a prediction market.
 * 
 */
export interface PredictionMarketsCall_redeem_shares {
    __kind: 'redeem_shares'
    marketId: bigint
}

/**
 *  Rejects a market that is waiting for approval from the advisory
 *  committee.
 * 
 *  NOTE: Will slash the reserved `AdvisoryBond` from the market creator.
 * 
 */
export interface PredictionMarketsCall_reject_market {
    __kind: 'reject_market'
    marketId: bigint
}

/**
 *  Reports the outcome of a market.
 * 
 */
export interface PredictionMarketsCall_report {
    __kind: 'report'
    marketId: bigint
    outcome: OutcomeReport
}

/**
 *  Destroys a complete set of outcomes shares for a market.
 * 
 */
export interface PredictionMarketsCall_sell_complete_set {
    __kind: 'sell_complete_set'
    marketId: bigint
    amount: bigint
}

export type ParachainSystemCall = ParachainSystemCall_set_upgrade_block | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 *  Force an already scheduled validation function upgrade to happen on a particular block.
 * 
 *  Note that coordinating this block for the upgrade has to happen independently on the
 *  relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
 *  and this bypasses all checks and and normal protocols. Very easy to brick your chain
 *  if done wrong.
 */
export interface ParachainSystemCall_set_upgrade_block {
    __kind: 'set_upgrade_block'
    relayChainBlock: number
}

/**
 *  Set the current validation data.
 * 
 *  This should be invoked exactly once per block. It will panic at the finalization
 *  phase if the call was not invoked.
 * 
 *  The dispatch origin for this call must be `Inherent`
 * 
 *  As a side effect, this function upgrades the current validation function
 *  if the appropriate time has come.
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

export type ParachainStakingCall = ParachainStakingCall_set_staking_expectations | ParachainStakingCall_set_inflation | ParachainStakingCall_set_parachain_bond_account | ParachainStakingCall_set_parachain_bond_reserve_percent | ParachainStakingCall_set_total_selected | ParachainStakingCall_set_collator_commission | ParachainStakingCall_set_blocks_per_round | ParachainStakingCall_join_candidates | ParachainStakingCall_leave_candidates | ParachainStakingCall_go_offline | ParachainStakingCall_go_online | ParachainStakingCall_candidate_bond_more | ParachainStakingCall_candidate_bond_less | ParachainStakingCall_nominate | ParachainStakingCall_leave_nominators | ParachainStakingCall_revoke_nomination | ParachainStakingCall_nominator_bond_more | ParachainStakingCall_nominator_bond_less

/**
 *  Set the expectations for total staked. These expectations determine the issuance for
 *  the round according to logic in `fn compute_issuance`
 */
export interface ParachainStakingCall_set_staking_expectations {
    __kind: 'set_staking_expectations'
    expectations: [bigint, bigint]
}

/**
 *  Set the annual inflation rate to derive per-round inflation
 */
export interface ParachainStakingCall_set_inflation {
    __kind: 'set_inflation'
    schedule: [number, number]
}

/**
 *  Set the account that will hold funds set aside for parachain bond
 */
export interface ParachainStakingCall_set_parachain_bond_account {
    __kind: 'set_parachain_bond_account'
    new: Uint8Array
}

/**
 *  Set the percent of inflation set aside for parachain bond
 */
export interface ParachainStakingCall_set_parachain_bond_reserve_percent {
    __kind: 'set_parachain_bond_reserve_percent'
    new: number
}

/**
 *  Set the total number of collator candidates selected per round
 *  - changes are not applied until the start of the next round
 */
export interface ParachainStakingCall_set_total_selected {
    __kind: 'set_total_selected'
    new: number
}

/**
 *  Set the commission for all collators
 */
export interface ParachainStakingCall_set_collator_commission {
    __kind: 'set_collator_commission'
    new: number
}

/**
 *  Set blocks per round
 *  - if called with `new` less than length of current round, will transition immediately
 *  in the next block
 *  - also updates per-round inflation config
 */
export interface ParachainStakingCall_set_blocks_per_round {
    __kind: 'set_blocks_per_round'
    new: number
}

/**
 *  Join the set of collator candidates
 */
export interface ParachainStakingCall_join_candidates {
    __kind: 'join_candidates'
    bond: bigint
    candidateCount: number
}

/**
 *  Request to leave the set of candidates. If successful, the account is immediately
 *  removed from the candidate pool to prevent selection as a collator, but unbonding is
 *  executed with a delay of `T::LeaveCandidates` rounds.
 */
export interface ParachainStakingCall_leave_candidates {
    __kind: 'leave_candidates'
    candidateCount: number
}

/**
 *  Temporarily leave the set of collator candidates without unbonding
 */
export interface ParachainStakingCall_go_offline {
    __kind: 'go_offline'
}

/**
 *  Rejoin the set of collator candidates if previously had called `go_offline`
 */
export interface ParachainStakingCall_go_online {
    __kind: 'go_online'
}

/**
 *  Bond more for collator candidates
 */
export interface ParachainStakingCall_candidate_bond_more {
    __kind: 'candidate_bond_more'
    more: bigint
}

/**
 *  Bond less for collator candidates
 */
export interface ParachainStakingCall_candidate_bond_less {
    __kind: 'candidate_bond_less'
    less: bigint
}

/**
 *  If caller is not a nominator, then join the set of nominators
 *  If caller is a nominator, then makes nomination to change their nomination state
 */
export interface ParachainStakingCall_nominate {
    __kind: 'nominate'
    collator: Uint8Array
    amount: bigint
    collatorNominatorCount: number
    nominationCount: number
}

/**
 *  Request to leave the set of nominators. If successful, the nominator is scheduled
 *  to exit
 */
export interface ParachainStakingCall_leave_nominators {
    __kind: 'leave_nominators'
    nominationCount: number
}

/**
 *  Request to revoke an existing nomination. If successful, the nomination is scheduled
 *  to exit
 */
export interface ParachainStakingCall_revoke_nomination {
    __kind: 'revoke_nomination'
    collator: Uint8Array
}

/**
 *  Bond more for nominators with respect to a specific collator candidate
 */
export interface ParachainStakingCall_nominator_bond_more {
    __kind: 'nominator_bond_more'
    candidate: Uint8Array
    more: bigint
}

/**
 *  Bond less for nominators with respect to a specific nominator candidate
 */
export interface ParachainStakingCall_nominator_bond_less {
    __kind: 'nominator_bond_less'
    candidate: Uint8Array
    less: bigint
}

export type AuthorInherentCall = AuthorInherentCall_set_author

/**
 *  Inherent to set the author of a block
 */
export interface AuthorInherentCall_set_author {
    __kind: 'set_author'
    author: Uint8Array
}

export type AuthorMappingCall = AuthorMappingCall_add_association | AuthorMappingCall_update_association | AuthorMappingCall_clear_association

/**
 *  Register your AuthorId onchain so blocks you author are associated with your account.
 * 
 *  Users who have been (or will soon be) elected active collators in staking,
 *  should submit this extrinsic to have their blocks accepted and earn rewards.
 */
export interface AuthorMappingCall_add_association {
    __kind: 'add_association'
    authorId: Uint8Array
}

/**
 *  Change your AuthorId.
 * 
 *  This is useful for normal key rotation or for when switching from one physical collator
 *  machine to another. No new security deposit is required.
 */
export interface AuthorMappingCall_update_association {
    __kind: 'update_association'
    oldAuthorId: Uint8Array
    newAuthorId: Uint8Array
}

/**
 *  Clear your AuthorId.
 * 
 *  This is useful when you are no longer an author and would like to re-claim your security
 *  deposit.
 */
export interface AuthorMappingCall_clear_association {
    __kind: 'clear_association'
    authorId: Uint8Array
}

export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 *  Service a single overweight message.
 * 
 *  - `origin`: Must pass `ExecuteOverweightOrigin`.
 *  - `index`: The index of the overweight message to service.
 *  - `weight_limit`: The amount of weight that message execution may take.
 * 
 *  Errors:
 *  - `Unknown`: Message of `index` is unknown.
 *  - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 *  Events:
 *  - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: bigint
}

export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute

export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 *  Teleport some assets from the local chain to some destination chain.
 * 
 *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *    an `AccountId32` value.
 *  - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *    `dest` side. May not be empty.
 *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    destWeight: bigint
}

/**
 *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 *  a notification XCM.
 * 
 *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *    an `AccountId32` value.
 *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *    `dest` side.
 *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *    `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    destWeight: bigint
}

/**
 *  Execute an XCM message from a local, signed, origin.
 * 
 *  An event is deposited indicating whether `msg` could be executed completely or only
 *  partially.
 * 
 *  No more than `max_weight` will be used in its attempted execution. If this is less than the
 *  maximum amount of weight that the message could take to be executed, then no execution
 *  attempt will be made.
 * 
 *  NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 *  to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: VersionedXcm
    maxWeight: bigint
}

export type XcmpQueueCall = never

export type CrowdloanCall = CrowdloanCall_associate_native_identity | CrowdloanCall_change_association_with_relay_keys | CrowdloanCall_claim | CrowdloanCall_update_reward_address | CrowdloanCall_complete_initialization | CrowdloanCall_initialize_reward_vec

/**
 *  Associate a native rewards_destination identity with a crowdloan contribution.
 * 
 *  The caller needs to provide the unassociated relay account and a proof to succeed
 *  with the association
 *  The proof is nothing but a signature over the reward_address using the relay keys
 */
export interface CrowdloanCall_associate_native_identity {
    __kind: 'associate_native_identity'
    rewardAccount: Uint8Array
    relayAccount: Uint8Array
    proof: MultiSignature
}

/**
 *  Change reward account by submitting proofs from relay accounts
 * 
 *  The number of valid proofs needs to be bigger than 'RewardAddressRelayVoteThreshold'
 *  The account to be changed needs to be submitted as 'previous_account'
 */
export interface CrowdloanCall_change_association_with_relay_keys {
    __kind: 'change_association_with_relay_keys'
    rewardAccount: Uint8Array
    previousAccount: Uint8Array
    proofs: [Uint8Array, MultiSignature][]
}

/**
 *  Collect whatever portion of your reward are currently vested.
 */
export interface CrowdloanCall_claim {
    __kind: 'claim'
}

/**
 *  Update reward address, proving that the caller owns the current native key
 */
export interface CrowdloanCall_update_reward_address {
    __kind: 'update_reward_address'
    newRewardAccount: Uint8Array
}

/**
 *  This extrinsic completes the initialization if some checks are fullfiled. These checks are:
 *   -The reward contribution money matches the crowdloan pot
 *   -The end vesting block is higher than the init vesting block
 *   -The initialization has not complete yet
 */
export interface CrowdloanCall_complete_initialization {
    __kind: 'complete_initialization'
    leaseEndingBlock: number
}

/**
 *  Initialize the reward distribution storage. It shortcuts whenever an error is found
 *  This does not enforce any checks other than making sure we dont go over funds
 *  complete_initialization should perform any additional
 */
export interface CrowdloanCall_initialize_reward_vec {
    __kind: 'initialize_reward_vec'
    rewards: [Uint8Array, (Uint8Array | undefined), bigint][]
}

export type XcmErrorV0 = XcmErrorV0_Undefined | XcmErrorV0_Overflow | XcmErrorV0_Unimplemented | XcmErrorV0_UnhandledXcmVersion | XcmErrorV0_UnhandledXcmMessage | XcmErrorV0_UnhandledEffect | XcmErrorV0_EscalationOfPrivilege | XcmErrorV0_UntrustedReserveLocation | XcmErrorV0_UntrustedTeleportLocation | XcmErrorV0_DestinationBufferOverflow | XcmErrorV0_SendFailed | XcmErrorV0_CannotReachDestination | XcmErrorV0_MultiLocationFull | XcmErrorV0_FailedToDecode | XcmErrorV0_BadOrigin | XcmErrorV0_ExceedsMaxMessageSize | XcmErrorV0_FailedToTransactAsset | XcmErrorV0_WeightLimitReached | XcmErrorV0_Wildcard | XcmErrorV0_TooMuchWeightRequired | XcmErrorV0_NotHoldingFees | XcmErrorV0_WeightNotComputable | XcmErrorV0_Barrier | XcmErrorV0_NotWithdrawable | XcmErrorV0_LocationCannotHold | XcmErrorV0_TooExpensive | XcmErrorV0_AssetNotFound | XcmErrorV0_RecursionLimitReached

export interface XcmErrorV0_Undefined {
    __kind: 'Undefined'
}

export interface XcmErrorV0_Overflow {
    __kind: 'Overflow'
}

export interface XcmErrorV0_Unimplemented {
    __kind: 'Unimplemented'
}

export interface XcmErrorV0_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface XcmErrorV0_UnhandledXcmMessage {
    __kind: 'UnhandledXcmMessage'
}

export interface XcmErrorV0_UnhandledEffect {
    __kind: 'UnhandledEffect'
}

export interface XcmErrorV0_EscalationOfPrivilege {
    __kind: 'EscalationOfPrivilege'
}

export interface XcmErrorV0_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface XcmErrorV0_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface XcmErrorV0_DestinationBufferOverflow {
    __kind: 'DestinationBufferOverflow'
}

export interface XcmErrorV0_SendFailed {
    __kind: 'SendFailed'
}

export interface XcmErrorV0_CannotReachDestination {
    __kind: 'CannotReachDestination'
    value: [MultiLocation, InstructionV2[]]
}

export interface XcmErrorV0_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface XcmErrorV0_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface XcmErrorV0_BadOrigin {
    __kind: 'BadOrigin'
}

export interface XcmErrorV0_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface XcmErrorV0_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface XcmErrorV0_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface XcmErrorV0_Wildcard {
    __kind: 'Wildcard'
}

export interface XcmErrorV0_TooMuchWeightRequired {
    __kind: 'TooMuchWeightRequired'
}

export interface XcmErrorV0_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface XcmErrorV0_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export interface XcmErrorV0_Barrier {
    __kind: 'Barrier'
}

export interface XcmErrorV0_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface XcmErrorV0_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface XcmErrorV0_TooExpensive {
    __kind: 'TooExpensive'
}

export interface XcmErrorV0_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface XcmErrorV0_RecursionLimitReached {
    __kind: 'RecursionLimitReached'
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

export type IdentityJudgement = IdentityJudgement_Unknown | IdentityJudgement_FeePaid | IdentityJudgement_Reasonable | IdentityJudgement_KnownGood | IdentityJudgement_OutOfDate | IdentityJudgement_LowQuality | IdentityJudgement_Erroneous

export interface IdentityJudgement_Unknown {
    __kind: 'Unknown'
}

export interface IdentityJudgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface IdentityJudgement_Reasonable {
    __kind: 'Reasonable'
}

export interface IdentityJudgement_KnownGood {
    __kind: 'KnownGood'
}

export interface IdentityJudgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface IdentityJudgement_LowQuality {
    __kind: 'LowQuality'
}

export interface IdentityJudgement_Erroneous {
    __kind: 'Erroneous'
}

export type CurrencyIdOf = CurrencyIdOf_CategoricalOutcome | CurrencyIdOf_ScalarOutcome | CurrencyIdOf_CombinatorialOutcome | CurrencyIdOf_PoolShare | CurrencyIdOf_Ztg

export interface CurrencyIdOf_CategoricalOutcome {
    __kind: 'CategoricalOutcome'
    value: [bigint, number]
}

export interface CurrencyIdOf_ScalarOutcome {
    __kind: 'ScalarOutcome'
    value: [bigint, ScalarPosition]
}

export interface CurrencyIdOf_CombinatorialOutcome {
    __kind: 'CombinatorialOutcome'
}

export interface CurrencyIdOf_PoolShare {
    __kind: 'PoolShare'
    value: bigint
}

export interface CurrencyIdOf_Ztg {
    __kind: 'Ztg'
}

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

export interface ParachainInherentData {
    validationData: PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1 | VersionedMultiLocation_V2

export interface VersionedMultiLocation_V0 {
    __kind: 'V0'
    value: MultiLocationV0
}

export interface VersionedMultiLocation_V1 {
    __kind: 'V1'
    value: MultiLocationV1
}

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: MultiLocationV2
}

export type VersionedXcm = VersionedXcm_V0 | VersionedXcm_V1 | VersionedXcm_V2

export interface VersionedXcm_V0 {
    __kind: 'V0'
    value: XcmV0
}

export interface VersionedXcm_V1 {
    __kind: 'V1'
    value: XcmV1
}

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: InstructionV2[]
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1 | VersionedMultiAssets_V2

export interface VersionedMultiAssets_V0 {
    __kind: 'V0'
    value: MultiAssetV0[]
}

export interface VersionedMultiAssets_V1 {
    __kind: 'V1'
    value: MultiAssetV1[]
}

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: MultiAssetV1[]
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

export interface MultiLocation {
    parents: number
    interior: JunctionsV1
}

export type InstructionV2 = InstructionV2_WithdrawAsset | InstructionV2_ReserveAssetDeposited | InstructionV2_ReceiveTeleportedAsset | InstructionV2_QueryResponse | InstructionV2_TransferAsset | InstructionV2_TransferReserveAsset | InstructionV2_Transact | InstructionV2_HrmpNewChannelOpenRequest | InstructionV2_HrmpChannelAccepted | InstructionV2_HrmpChannelClosing | InstructionV2_ClearOrigin | InstructionV2_DescendOrigin | InstructionV2_ReportError | InstructionV2_DepositAsset | InstructionV2_DepositReserveAsset | InstructionV2_ExchangeAsset | InstructionV2_InitiateReserveWithdraw | InstructionV2_InitiateTeleport | InstructionV2_QueryHolding | InstructionV2_BuyExecution | InstructionV2_RefundSurplus | InstructionV2_SetErrorHandler | InstructionV2_SetAppendix | InstructionV2_ClearError | InstructionV2_ClaimAsset | InstructionV2_Trap

export interface InstructionV2_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: MultiAssetV1[]
}

export interface InstructionV2_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: MultiAssetV1[]
}

export interface InstructionV2_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: MultiAssetV1[]
}

export interface InstructionV2_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: ResponseV2
    maxWeight: bigint
}

export interface InstructionV2_TransferAsset {
    __kind: 'TransferAsset'
    assets: MultiAssetV1[]
    beneficiary: MultiLocationV2
}

export interface InstructionV2_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_Transact {
    __kind: 'Transact'
    originType: OriginKindV2
    requireWeightAtMost: bigint
    call: DoubleEncodedCall
}

export interface InstructionV2_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface InstructionV2_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface InstructionV2_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface InstructionV2_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface InstructionV2_DescendOrigin {
    __kind: 'DescendOrigin'
    value: InteriorMultiLocation
}

export interface InstructionV2_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: MultiLocationV2
    maxResponseWeight: bigint
}

export interface InstructionV2_DepositAsset {
    __kind: 'DepositAsset'
    assets: MultiAssetFilterV2
    maxAssets: number
    beneficiary: MultiLocationV2
}

export interface InstructionV2_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: MultiAssetFilterV2
    maxAssets: number
    dest: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: MultiAssetFilterV2
    receive: MultiAssetV1[]
}

export interface InstructionV2_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: MultiAssetFilterV2
    reserve: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: MultiAssetFilterV2
    dest: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: MultiLocationV2
    assets: MultiAssetFilterV2
    maxResponseWeight: bigint
}

export interface InstructionV2_BuyExecution {
    __kind: 'BuyExecution'
    fees: MultiAssetV2
    weightLimit: WeightLimitV2
}

export interface InstructionV2_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface InstructionV2_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: InstructionV2[]
}

export interface InstructionV2_SetAppendix {
    __kind: 'SetAppendix'
    value: InstructionV2[]
}

export interface InstructionV2_ClearError {
    __kind: 'ClearError'
}

export interface InstructionV2_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: MultiAssetV1[]
    ticket: MultiLocationV2
}

export interface InstructionV2_Trap {
    __kind: 'Trap'
    value: bigint
}

export type ScalarPosition = ScalarPosition_Long | ScalarPosition_Short

export interface ScalarPosition_Long {
    __kind: 'Long'
}

export interface ScalarPosition_Short {
    __kind: 'Short'
}

export interface PersistedValidationData {
    parentHead: Uint8Array
    relayParentNumber: number
    relayParentStorageRoot: Uint8Array
    maxPovSize: number
}

export interface StorageProof {
    trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
    pubSentAt: bigint
    pubMsg: Uint8Array
}

export interface InboundHrmpMessage {
    sentAt: bigint
    data: Uint8Array
}

export type MultiLocationV0 = MultiLocationV0_Here | MultiLocationV0_X1 | MultiLocationV0_X2 | MultiLocationV0_X3 | MultiLocationV0_X4 | MultiLocationV0_X5 | MultiLocationV0_X6 | MultiLocationV0_X7 | MultiLocationV0_X8

export interface MultiLocationV0_Here {
    __kind: 'Here'
}

export interface MultiLocationV0_X1 {
    __kind: 'X1'
    value: JunctionV0
}

export interface MultiLocationV0_X2 {
    __kind: 'X2'
    value: [JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X3 {
    __kind: 'X3'
    value: [JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X4 {
    __kind: 'X4'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X5 {
    __kind: 'X5'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X6 {
    __kind: 'X6'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X7 {
    __kind: 'X7'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X8 {
    __kind: 'X8'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV1 {
    parents: number
    interior: JunctionsV1
}

export interface MultiLocationV2 {
    parents: number
    interior: JunctionsV1
}

export type XcmV0 = XcmV0_WithdrawAsset | XcmV0_ReserveAssetDeposit | XcmV0_ReceiveTeleportedAsset | XcmV0_QueryResponse | XcmV0_TransferAsset | XcmV0_TransferReserveAsset | XcmV0_Transact | XcmV0_HrmpNewChannelOpenRequest | XcmV0_HrmpChannelAccepted | XcmV0_HrmpChannelClosing | XcmV0_RelayedFrom

export interface XcmV0_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: MultiAssetV0[]
    effects: XcmOrderV0[]
}

export interface XcmV0_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: MultiAssetV0[]
    effects: XcmOrderV0[]
}

export interface XcmV0_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: MultiAssetV0[]
    effects: XcmOrderV0[]
}

export interface XcmV0_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: ResponseV0
}

export interface XcmV0_TransferAsset {
    __kind: 'TransferAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
}

export interface XcmV0_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmV0_Transact {
    __kind: 'Transact'
    originType: XcmOriginKind
    requireWeightAtMost: bigint
    call: DoubleEncodedCall
}

export interface XcmV0_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface XcmV0_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface XcmV0_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface XcmV0_RelayedFrom {
    __kind: 'RelayedFrom'
    who: MultiLocationV0
    message: XcmV0
}

export type XcmV1 = XcmV1_WithdrawAsset | XcmV1_ReserveAssetDeposit | XcmV1_ReceiveTeleportedAsset | XcmV1_QueryResponse | XcmV1_TransferAsset | XcmV1_TransferReserveAsset | XcmV1_Transact | XcmV1_HrmpNewChannelOpenRequest | XcmV1_HrmpChannelAccepted | XcmV1_HrmpChannelClosing | XcmV1_RelayedFrom

export interface XcmV1_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface XcmV1_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface XcmV1_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface XcmV1_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: ResponseV1
}

export interface XcmV1_TransferAsset {
    __kind: 'TransferAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV1
}

export interface XcmV1_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmV1_Transact {
    __kind: 'Transact'
    originType: XcmOriginKind
    requireWeightAtMost: bigint
    call: DoubleEncodedCall
}

export interface XcmV1_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface XcmV1_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface XcmV1_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface XcmV1_RelayedFrom {
    __kind: 'RelayedFrom'
    who: MultiLocationV1
    message: XcmV1
}

export type MultiAssetV0 = MultiAssetV0_None | MultiAssetV0_All | MultiAssetV0_AllFungible | MultiAssetV0_AllNonFungible | MultiAssetV0_AllAbstractFungible | MultiAssetV0_AllAbstractNonFungible | MultiAssetV0_AllConcreteFungible | MultiAssetV0_AllConcreteNonFungible | MultiAssetV0_AbstractFungible | MultiAssetV0_AbstractNonFungible | MultiAssetV0_ConcreteFungible | MultiAssetV0_ConcreteNonFungible

export interface MultiAssetV0_None {
    __kind: 'None'
}

export interface MultiAssetV0_All {
    __kind: 'All'
}

export interface MultiAssetV0_AllFungible {
    __kind: 'AllFungible'
}

export interface MultiAssetV0_AllNonFungible {
    __kind: 'AllNonFungible'
}

export interface MultiAssetV0_AllAbstractFungible {
    __kind: 'AllAbstractFungible'
    value: Uint8Array
}

export interface MultiAssetV0_AllAbstractNonFungible {
    __kind: 'AllAbstractNonFungible'
    value: Uint8Array
}

export interface MultiAssetV0_AllConcreteFungible {
    __kind: 'AllConcreteFungible'
    value: MultiLocationV0
}

export interface MultiAssetV0_AllConcreteNonFungible {
    __kind: 'AllConcreteNonFungible'
    value: MultiLocationV0
}

export interface MultiAssetV0_AbstractFungible {
    __kind: 'AbstractFungible'
    id: Uint8Array
    instance: bigint
}

export interface MultiAssetV0_AbstractNonFungible {
    __kind: 'AbstractNonFungible'
    class: Uint8Array
    instance: AssetInstanceV0
}

export interface MultiAssetV0_ConcreteFungible {
    __kind: 'ConcreteFungible'
    id: MultiLocationV0
    amount: bigint
}

export interface MultiAssetV0_ConcreteNonFungible {
    __kind: 'ConcreteNonFungible'
    class: MultiLocationV0
    instance: AssetInstanceV0
}

export interface MultiAssetV1 {
    id: XcmAssetId
    fungibility: FungibilityV1
}

export type JunctionsV1 = JunctionsV1_Here | JunctionsV1_X1 | JunctionsV1_X2 | JunctionsV1_X3 | JunctionsV1_X4 | JunctionsV1_X5 | JunctionsV1_X6 | JunctionsV1_X7 | JunctionsV1_X8

export interface JunctionsV1_Here {
    __kind: 'Here'
}

export interface JunctionsV1_X1 {
    __kind: 'X1'
    value: JunctionV1
}

export interface JunctionsV1_X2 {
    __kind: 'X2'
    value: [JunctionV1, JunctionV1]
}

export interface JunctionsV1_X3 {
    __kind: 'X3'
    value: [JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X4 {
    __kind: 'X4'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X5 {
    __kind: 'X5'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X6 {
    __kind: 'X6'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X7 {
    __kind: 'X7'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X8 {
    __kind: 'X8'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export type ResponseV2 = ResponseV2_Null | ResponseV2_Assets | ResponseV2_ExecutionResult

export interface ResponseV2_Null {
    __kind: 'Null'
}

export interface ResponseV2_Assets {
    __kind: 'Assets'
    value: MultiAssetV1[]
}

export interface ResponseV2_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ResponseV2Result
}

export type OriginKindV2 = OriginKindV2_Native | OriginKindV2_SovereignAccount | OriginKindV2_Superuser | OriginKindV2_Xcm

export interface OriginKindV2_Native {
    __kind: 'Native'
}

export interface OriginKindV2_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface OriginKindV2_Superuser {
    __kind: 'Superuser'
}

export interface OriginKindV2_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncodedCall {
    encoded: Uint8Array
}

export type InteriorMultiLocation = InteriorMultiLocation_Here | InteriorMultiLocation_X1 | InteriorMultiLocation_X2 | InteriorMultiLocation_X3 | InteriorMultiLocation_X4 | InteriorMultiLocation_X5 | InteriorMultiLocation_X6 | InteriorMultiLocation_X7 | InteriorMultiLocation_X8

export interface InteriorMultiLocation_Here {
    __kind: 'Here'
}

export interface InteriorMultiLocation_X1 {
    __kind: 'X1'
    value: JunctionV1
}

export interface InteriorMultiLocation_X2 {
    __kind: 'X2'
    value: [JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X3 {
    __kind: 'X3'
    value: [JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X4 {
    __kind: 'X4'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X5 {
    __kind: 'X5'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X6 {
    __kind: 'X6'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X7 {
    __kind: 'X7'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X8 {
    __kind: 'X8'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export type MultiAssetFilterV2 = MultiAssetFilterV2_Definite | MultiAssetFilterV2_Wild

export interface MultiAssetFilterV2_Definite {
    __kind: 'Definite'
    value: MultiAssetV1[]
}

export interface MultiAssetFilterV2_Wild {
    __kind: 'Wild'
    value: WildMultiAssetV1
}

export interface MultiAssetV2 {
    id: XcmAssetId
    fungibility: FungibilityV1
}

export type WeightLimitV2 = WeightLimitV2_Unlimited | WeightLimitV2_Limited

export interface WeightLimitV2_Unlimited {
    __kind: 'Unlimited'
}

export interface WeightLimitV2_Limited {
    __kind: 'Limited'
    value: bigint
}

export type JunctionV0 = JunctionV0_Parent | JunctionV0_Parachain | JunctionV0_AccountId32 | JunctionV0_AccountIndex64 | JunctionV0_AccountKey20 | JunctionV0_PalletInstance | JunctionV0_GeneralIndex | JunctionV0_GeneralKey | JunctionV0_OnlyChild | JunctionV0_Plurality

export interface JunctionV0_Parent {
    __kind: 'Parent'
}

export interface JunctionV0_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface JunctionV0_AccountId32 {
    __kind: 'AccountId32'
    network: NetworkId
    id: Uint8Array
}

export interface JunctionV0_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: NetworkId
    index: bigint
}

export interface JunctionV0_AccountKey20 {
    __kind: 'AccountKey20'
    network: NetworkId
    key: Uint8Array
}

export interface JunctionV0_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface JunctionV0_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface JunctionV0_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface JunctionV0_OnlyChild {
    __kind: 'OnlyChild'
}

export interface JunctionV0_Plurality {
    __kind: 'Plurality'
    id: BodyId
    part: BodyPart
}

export type XcmOrderV0 = XcmOrderV0_Null | XcmOrderV0_DepositAsset | XcmOrderV0_DepositReserveAsset | XcmOrderV0_ExchangeAsset | XcmOrderV0_InitiateReserveWithdraw | XcmOrderV0_InitiateTeleport | XcmOrderV0_QueryHolding | XcmOrderV0_BuyExecution

export interface XcmOrderV0_Null {
    __kind: 'Null'
}

export interface XcmOrderV0_DepositAsset {
    __kind: 'DepositAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
}

export interface XcmOrderV0_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmOrderV0_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: MultiAssetV0[]
    receive: MultiAssetV0[]
}

export interface XcmOrderV0_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: MultiAssetV0[]
    reserve: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmOrderV0_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: MultiAsset[]
    dest: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmOrderV0_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: MultiLocationV0
    assets: MultiAssetV0[]
}

export interface XcmOrderV0_BuyExecution {
    __kind: 'BuyExecution'
    fees: MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: XcmV0[]
}

export type ResponseV0 = ResponseV0_Assets

export interface ResponseV0_Assets {
    __kind: 'Assets'
    value: MultiAssetV0[]
}

export type XcmOriginKind = XcmOriginKind_Native | XcmOriginKind_SovereignAccount | XcmOriginKind_Superuser | XcmOriginKind_Xcm

export interface XcmOriginKind_Native {
    __kind: 'Native'
}

export interface XcmOriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface XcmOriginKind_Superuser {
    __kind: 'Superuser'
}

export interface XcmOriginKind_Xcm {
    __kind: 'Xcm'
}

export type XcmOrderV1 = XcmOrderV1_Noop | XcmOrderV1_DepositAsset | XcmOrderV1_DepositReserveAsset | XcmOrderV1_ExchangeAsset | XcmOrderV1_InitiateReserveWithdraw | XcmOrderV1_InitiateTeleport | XcmOrderV1_QueryHolding | XcmOrderV1_BuyExecution

export interface XcmOrderV1_Noop {
    __kind: 'Noop'
}

export interface XcmOrderV1_DepositAsset {
    __kind: 'DepositAsset'
    assets: MultiAssetFilterV1
    maxAssets: number
    beneficiary: MultiLocationV1
}

export interface XcmOrderV1_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: MultiAssetFilterV1
    maxAssets: number
    dest: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmOrderV1_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: MultiAssetFilterV1
    receive: MultiAssetV1[]
}

export interface XcmOrderV1_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: MultiAssetFilterV1
    reserve: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmOrderV1_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: MultiAssetFilterV1
    dest: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmOrderV1_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: MultiLocationV1
    assets: MultiAssetFilterV1
}

export interface XcmOrderV1_BuyExecution {
    __kind: 'BuyExecution'
    fees: MultiAssetV1
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: XcmV1[]
}

export type ResponseV1 = ResponseV1_Assets

export interface ResponseV1_Assets {
    __kind: 'Assets'
    value: MultiAssetV1[]
}

export type AssetInstanceV0 = AssetInstanceV0_Undefined | AssetInstanceV0_Index8 | AssetInstanceV0_Index16 | AssetInstanceV0_Index32 | AssetInstanceV0_Index64 | AssetInstanceV0_Index128 | AssetInstanceV0_Array4 | AssetInstanceV0_Array8 | AssetInstanceV0_Array16 | AssetInstanceV0_Array32 | AssetInstanceV0_Blob

export interface AssetInstanceV0_Undefined {
    __kind: 'Undefined'
}

export interface AssetInstanceV0_Index8 {
    __kind: 'Index8'
    value: number
}

export interface AssetInstanceV0_Index16 {
    __kind: 'Index16'
    value: number
}

export interface AssetInstanceV0_Index32 {
    __kind: 'Index32'
    value: number
}

export interface AssetInstanceV0_Index64 {
    __kind: 'Index64'
    value: bigint
}

export interface AssetInstanceV0_Index128 {
    __kind: 'Index128'
    value: bigint
}

export interface AssetInstanceV0_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface AssetInstanceV0_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface AssetInstanceV0_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface AssetInstanceV0_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface AssetInstanceV0_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type XcmAssetId = XcmAssetId_Concrete | XcmAssetId_Abstract

export interface XcmAssetId_Concrete {
    __kind: 'Concrete'
    value: MultiLocation
}

export interface XcmAssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type FungibilityV1 = FungibilityV1_Fungible | FungibilityV1_NonFungible

export interface FungibilityV1_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface FungibilityV1_NonFungible {
    __kind: 'NonFungible'
    value: AssetInstanceV1
}

export type JunctionV1 = JunctionV1_Parachain | JunctionV1_AccountId32 | JunctionV1_AccountIndex64 | JunctionV1_AccountKey20 | JunctionV1_PalletInstance | JunctionV1_GeneralIndex | JunctionV1_GeneralKey | JunctionV1_OnlyChild | JunctionV1_Plurality

export interface JunctionV1_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface JunctionV1_AccountId32 {
    __kind: 'AccountId32'
    network: NetworkId
    id: Uint8Array
}

export interface JunctionV1_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: NetworkId
    index: bigint
}

export interface JunctionV1_AccountKey20 {
    __kind: 'AccountKey20'
    network: NetworkId
    key: Uint8Array
}

export interface JunctionV1_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface JunctionV1_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface JunctionV1_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface JunctionV1_OnlyChild {
    __kind: 'OnlyChild'
}

export interface JunctionV1_Plurality {
    __kind: 'Plurality'
    id: BodyId
    part: BodyPart
}

export type ResponseV2Result = ResponseV2Result_Ok | ResponseV2Result_Err

export interface ResponseV2Result_Ok {
    __kind: 'Ok'
}

export interface ResponseV2Result_Err {
    __kind: 'Err'
    value: [number, XcmErrorV2]
}

export type WildMultiAssetV1 = WildMultiAssetV1_All | WildMultiAssetV1_AllOf

export interface WildMultiAssetV1_All {
    __kind: 'All'
}

export interface WildMultiAssetV1_AllOf {
    __kind: 'AllOf'
    id: XcmAssetId
    fungibility: WildFungibilityV1
}

export type NetworkId = NetworkId_Any | NetworkId_Named | NetworkId_Polkadot | NetworkId_Kusama

export interface NetworkId_Any {
    __kind: 'Any'
}

export interface NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface NetworkId_Kusama {
    __kind: 'Kusama'
}

export type BodyId = BodyId_Unit | BodyId_Named | BodyId_Index | BodyId_Executive | BodyId_Technical | BodyId_Legislative | BodyId_Judicial

export interface BodyId_Unit {
    __kind: 'Unit'
}

export interface BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface BodyId_Executive {
    __kind: 'Executive'
}

export interface BodyId_Technical {
    __kind: 'Technical'
}

export interface BodyId_Legislative {
    __kind: 'Legislative'
}

export interface BodyId_Judicial {
    __kind: 'Judicial'
}

export type BodyPart = BodyPart_Voice | BodyPart_Members | BodyPart_Fraction | BodyPart_AtLeastProportion | BodyPart_MoreThanProportion

export interface BodyPart_Voice {
    __kind: 'Voice'
}

export interface BodyPart_Members {
    __kind: 'Members'
    value: number
}

export interface BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface MultiAsset {
    id: XcmAssetId
    fungibility: FungibilityV1
}

export type MultiAssetFilterV1 = MultiAssetFilterV1_Definite | MultiAssetFilterV1_Wild

export interface MultiAssetFilterV1_Definite {
    __kind: 'Definite'
    value: MultiAssetV1[]
}

export interface MultiAssetFilterV1_Wild {
    __kind: 'Wild'
    value: WildMultiAssetV1
}

export type AssetInstanceV1 = AssetInstanceV1_Undefined | AssetInstanceV1_Index | AssetInstanceV1_Array4 | AssetInstanceV1_Array8 | AssetInstanceV1_Array16 | AssetInstanceV1_Array32 | AssetInstanceV1_Blob

export interface AssetInstanceV1_Undefined {
    __kind: 'Undefined'
}

export interface AssetInstanceV1_Index {
    __kind: 'Index'
    value: bigint
}

export interface AssetInstanceV1_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface AssetInstanceV1_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface AssetInstanceV1_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface AssetInstanceV1_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface AssetInstanceV1_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type XcmErrorV2 = XcmErrorV2_Undefined | XcmErrorV2_Overflow | XcmErrorV2_Unimplemented | XcmErrorV2_UnhandledXcmVersion | XcmErrorV2_UnhandledXcmMessage | XcmErrorV2_UnhandledEffect | XcmErrorV2_EscalationOfPrivilege | XcmErrorV2_UntrustedReserveLocation | XcmErrorV2_UntrustedTeleportLocation | XcmErrorV2_DestinationBufferOverflow | XcmErrorV2_MultiLocationFull | XcmErrorV2_MultiLocationNotInvertible | XcmErrorV2_FailedToDecode | XcmErrorV2_BadOrigin | XcmErrorV2_ExceedsMaxMessageSize | XcmErrorV2_FailedToTransactAsset | XcmErrorV2_WeightLimitReached | XcmErrorV2_Wildcard | XcmErrorV2_TooMuchWeightRequired | XcmErrorV2_NotHoldingFees | XcmErrorV2_WeightNotComputable | XcmErrorV2_Barrier | XcmErrorV2_NotWithdrawable | XcmErrorV2_LocationCannotHold | XcmErrorV2_TooExpensive | XcmErrorV2_AssetNotFound | XcmErrorV2_DestinationUnsupported | XcmErrorV2_RecursionLimitReached | XcmErrorV2_Transport | XcmErrorV2_Unroutable | XcmErrorV2_UnknownWeightRequired | XcmErrorV2_Trap | XcmErrorV2_UnknownClaim | XcmErrorV2_InvalidLocation

export interface XcmErrorV2_Undefined {
    __kind: 'Undefined'
}

export interface XcmErrorV2_Overflow {
    __kind: 'Overflow'
}

export interface XcmErrorV2_Unimplemented {
    __kind: 'Unimplemented'
}

export interface XcmErrorV2_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface XcmErrorV2_UnhandledXcmMessage {
    __kind: 'UnhandledXcmMessage'
}

export interface XcmErrorV2_UnhandledEffect {
    __kind: 'UnhandledEffect'
}

export interface XcmErrorV2_EscalationOfPrivilege {
    __kind: 'EscalationOfPrivilege'
}

export interface XcmErrorV2_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface XcmErrorV2_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface XcmErrorV2_DestinationBufferOverflow {
    __kind: 'DestinationBufferOverflow'
}

export interface XcmErrorV2_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface XcmErrorV2_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface XcmErrorV2_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface XcmErrorV2_BadOrigin {
    __kind: 'BadOrigin'
}

export interface XcmErrorV2_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface XcmErrorV2_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface XcmErrorV2_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface XcmErrorV2_Wildcard {
    __kind: 'Wildcard'
}

export interface XcmErrorV2_TooMuchWeightRequired {
    __kind: 'TooMuchWeightRequired'
}

export interface XcmErrorV2_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface XcmErrorV2_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export interface XcmErrorV2_Barrier {
    __kind: 'Barrier'
}

export interface XcmErrorV2_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface XcmErrorV2_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface XcmErrorV2_TooExpensive {
    __kind: 'TooExpensive'
}

export interface XcmErrorV2_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface XcmErrorV2_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface XcmErrorV2_RecursionLimitReached {
    __kind: 'RecursionLimitReached'
}

export interface XcmErrorV2_Transport {
    __kind: 'Transport'
}

export interface XcmErrorV2_Unroutable {
    __kind: 'Unroutable'
}

export interface XcmErrorV2_UnknownWeightRequired {
    __kind: 'UnknownWeightRequired'
}

export interface XcmErrorV2_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface XcmErrorV2_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface XcmErrorV2_InvalidLocation {
    __kind: 'InvalidLocation'
}

export type WildFungibilityV1 = WildFungibilityV1_Fungible | WildFungibilityV1_NonFungible

export interface WildFungibilityV1_Fungible {
    __kind: 'Fungible'
}

export interface WildFungibilityV1_NonFungible {
    __kind: 'NonFungible'
}
