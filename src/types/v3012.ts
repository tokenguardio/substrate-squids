import type {Result, Option} from './support'

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

export type Call = Call_System | Call_ParachainSystem | Call_Timestamp | Call_Sudo | Call_Preimage | Call_Scheduler | Call_Utility | Call_Contracts | Call_Balances | Call_Vesting | Call_VestingRegistrar | Call_Democracy | Call_Council | Call_TechnicalCommittee | Call_CommunityPool | Call_TechnicalMembership | Call_Multisig | Call_Authorship | Call_CollatorStaking | Call_Session | Call_XcmpQueue | Call_PolkadotXcm | Call_CumulusXcm | Call_DmpQueue | Call_OrmlXcm | Call_EfinityXcm | Call_XTokens | Call_Bounties | Call_MultiTokens | Call_Claims | Call_Pools | Call_FuelTanks | Call_Marketplace | Call_ExtrinsicPause | Call_EfinityUtility

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_VestingRegistrar {
    __kind: 'VestingRegistrar'
    value: VestingRegistrarCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_CommunityPool {
    __kind: 'CommunityPool'
    value: CommunityPoolCall
}

export interface Call_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Call_CollatorStaking {
    __kind: 'CollatorStaking'
    value: CollatorStakingCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_OrmlXcm {
    __kind: 'OrmlXcm'
    value: OrmlXcmCall
}

export interface Call_EfinityXcm {
    __kind: 'EfinityXcm'
    value: EfinityXcmCall
}

export interface Call_XTokens {
    __kind: 'XTokens'
    value: XTokensCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_MultiTokens {
    __kind: 'MultiTokens'
    value: MultiTokensCall
}

export interface Call_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Call_Pools {
    __kind: 'Pools'
    value: PoolsCall
}

export interface Call_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksCall
}

export interface Call_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceCall
}

export interface Call_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseCall
}

export interface Call_EfinityUtility {
    __kind: 'EfinityUtility'
    value: EfinityUtilityCall
}

export interface FuelTankDescriptor {
    name: Uint8Array
    userAccountManagement: (UserAccountManagement | undefined)
    ruleSets: [number, DispatchRuleDescriptor[]][]
    providesDeposit: boolean
    accountRules: AccountRuleDescriptor[]
}

export type DispatchRuleDescriptor = DispatchRuleDescriptor_WhitelistedCallers | DispatchRuleDescriptor_WhitelistedCollections | DispatchRuleDescriptor_MaxFuelBurnPerTransaction | DispatchRuleDescriptor_UserFuelBudget | DispatchRuleDescriptor_TankFuelBudget | DispatchRuleDescriptor_RequireToken | DispatchRuleDescriptor_PermittedCalls | DispatchRuleDescriptor_PermittedExtrinsics

export interface DispatchRuleDescriptor_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: Uint8Array[]
}

export interface DispatchRuleDescriptor_WhitelistedCollections {
    __kind: 'WhitelistedCollections'
    value: bigint[]
}

export interface DispatchRuleDescriptor_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
    value: bigint
}

export interface DispatchRuleDescriptor_UserFuelBudget {
    __kind: 'UserFuelBudget'
    value: UserFuelBudgetRuleDescriptor
}

export interface DispatchRuleDescriptor_TankFuelBudget {
    __kind: 'TankFuelBudget'
    value: TankFuelBudgetRule
}

export interface DispatchRuleDescriptor_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface DispatchRuleDescriptor_PermittedCalls {
    __kind: 'PermittedCalls'
    value: Uint8Array[]
}

export interface DispatchRuleDescriptor_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
    value: Call[]
}

export interface Timepoint {
    height: number
    index: number
}

export type OriginCaller = OriginCaller_system | OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_PolkadotXcm | OriginCaller_CumulusXcm | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_283
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_284
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_286
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

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
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Uint8Array
}

/**
 * Clear an unrequested preimage from the runtime storage.
 * 
 * If `len` is provided, then it will be a much cheaper operation.
 * 
 * - `hash`: The hash of the preimage to be removed from the store.
 * - `len`: The length of the preimage of `hash`.
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: Uint8Array
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: Uint8Array
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: Uint8Array
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
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch

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
export type VestingCall = VestingCall_claim | VestingCall_vested_transfer | VestingCall_update_vesting_schedules | VestingCall_claim_for

export interface VestingCall_claim {
    __kind: 'claim'
}

export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    dest: MultiAddress
    schedule: VestingSchedule
}

export interface VestingCall_update_vesting_schedules {
    __kind: 'update_vesting_schedules'
    who: MultiAddress
    vestingSchedules: VestingSchedule[]
}

export interface VestingCall_claim_for {
    __kind: 'claim_for'
    dest: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingRegistrarCall = VestingRegistrarCall_register_batch | VestingRegistrarCall_claim_batch | VestingRegistrarCall_force_vest_all_schedules

/**
 * Register a batch of accounts and their vesting amounts.
 */
export interface VestingRegistrarCall_register_batch {
    __kind: 'register_batch'
    accounts: VestedAccount[]
    startBlockNumber: number
    period: number
    periodCount: number
}

/**
 * Batch claim for vested accounts
 */
export interface VestingRegistrarCall_claim_batch {
    __kind: 'claim_batch'
    accounts: VestedAccount[]
}

/**
 * For all registered accounts, it sets the vesting schedule expiration to the next block
 * number.
 * 
 * This is a privileged call and can only be called by the root origin.
 * 
 * It simply updates each schedule registered for `account` to expire in the next block.
 */
export interface VestingRegistrarCall_force_vest_all_schedules {
    __kind: 'force_vest_all_schedules'
    accounts: VestedAccount[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

/**
 * Propose a sensitive action to be taken.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 * 
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 * Emits `Proposed`.
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

/**
 * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `ref_index`: The index of the referendum to vote for.
 * - `vote`: The vote configuration.
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

/**
 * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 * referendum.
 * 
 * The dispatch origin of this call must be `CancellationOrigin`.
 * 
 * -`ref_index`: The index of the referendum to cancel.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

/**
 * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 * an external referendum.
 * 
 * The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

/**
 * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 * schedule an external referendum.
 * 
 * The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

/**
 * Schedule the currently externally-proposed majority-carries referendum to be tabled
 * immediately. If there is no externally-proposed referendum currently, or if there is one
 * but it is not a majority-carries referendum then it fails.
 * 
 * The dispatch of this call must be `FastTrackOrigin`.
 * 
 * - `proposal_hash`: The hash of the current external proposal.
 * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 * 	Must be always greater than zero.
 * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 * 
 * Emits `Started`.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Uint8Array
    votingPeriod: number
    delay: number
}

/**
 * Veto and blacklist the external proposal hash.
 * 
 * The dispatch origin of this call must be `VetoOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 * Emits `Vetoed`.
 * 
 * Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Uint8Array
}

/**
 * Remove a referendum.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `ref_index`: The index of the referendum to cancel.
 * 
 * # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * Delegate the voting power (with some given conviction) of the sending account.
 * 
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 * 
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed/consolidated
 *     through `reap_vote` or `unvote`).
 * 
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * Undelegate the voting power of the sending account.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * Clears all public proposals.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * Unlock tokens that have an expired lock.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

/**
 * Remove a vote for a referendum.
 * 
 * If:
 * - the referendum was cancelled, or
 * - the referendum is ongoing, or
 * - the referendum has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the referendum has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for referendum `index`.
 * 
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * Remove a vote for a referendum.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the referendum was cancelled, because the voter lost the referendum or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for
 *   referendum `index`.
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

/**
 * Permanently place a proposal into the blacklist. This prevents it from ever being
 * proposed again.
 * 
 * If called on a queued public or external proposal, then this will result in it being
 * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 * then it will be cancelled.
 * 
 * The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 * - `proposal_hash`: The proposal hash to blacklist permanently.
 * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 * cancelled.
 * 
 * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *   reasonable value).
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: Uint8Array
    maybeRefIndex: (number | undefined)
}

/**
 * Remove a proposal.
 * 
 * The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 * - `prop_index`: The index of the proposal to cancel.
 * 
 * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close_old_weight | CouncilCall_disapprove_proposal | CouncilCall_close

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
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
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
export interface CouncilCall_set_members {
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
export interface CouncilCall_execute {
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
export interface CouncilCall_propose {
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
export interface CouncilCall_vote {
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
export interface CouncilCall_close_old_weight {
    __kind: 'close_old_weight'
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
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
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
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close_old_weight | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_close

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
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
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
export interface TechnicalCommitteeCall_set_members {
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
export interface TechnicalCommitteeCall_execute {
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
export interface TechnicalCommitteeCall_propose {
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
export interface TechnicalCommitteeCall_vote {
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
export interface TechnicalCommitteeCall_close_old_weight {
    __kind: 'close_old_weight'
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
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
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
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CommunityPoolCall = CommunityPoolCall_propose_spend | CommunityPoolCall_reject_proposal | CommunityPoolCall_approve_proposal | CommunityPoolCall_spend | CommunityPoolCall_remove_approval

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
export interface CommunityPoolCall_propose_spend {
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
export interface CommunityPoolCall_reject_proposal {
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
export interface CommunityPoolCall_approve_proposal {
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
export interface CommunityPoolCall_spend {
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
export interface CommunityPoolCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_change_key | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
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
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
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
export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 * Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CollatorStakingCall = CollatorStakingCall_set_invulnerables | CollatorStakingCall_join_candidates | CollatorStakingCall_unbond | CollatorStakingCall_nominate | CollatorStakingCall_remove_nomination | CollatorStakingCall_force_set_current_max_candidates | CollatorStakingCall_force_set_min_collator_stake

/**
 * Join the list of candidates for collation.
 */
export interface CollatorStakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    accounts: Uint8Array[]
}

/**
 * Join the list of candidates for collation.
 */
export interface CollatorStakingCall_join_candidates {
    __kind: 'join_candidates'
    amount: bigint
    rewardsCut: number
}

/**
 * Leave the collator set of this parachain.
 * 
 * In this case, if the calling account is already a collator, an exit
 * is registered so that this account is not selected for the next set of collators.
 * Otherwise, if the account is only a candidate, this candidate will be removed
 * and the nominations would be freed up.
 */
export interface CollatorStakingCall_unbond {
    __kind: 'unbond'
}

/**
 * Nominate a specific candidate to be selected for collation and block production.
 */
export interface CollatorStakingCall_nominate {
    __kind: 'nominate'
    collatorId: Uint8Array
    amount: bigint
}

/**
 * Remove a nomination previously registered for a specific collator candidate.
 */
export interface CollatorStakingCall_remove_nomination {
    __kind: 'remove_nomination'
    collatorId: Uint8Array
}

/**
 * Set the current max candidates, must be within 0 and `T::MaxCandidates`
 * ForceOrigin call only
 */
export interface CollatorStakingCall_force_set_current_max_candidates {
    __kind: 'force_set_current_max_candidates'
    maxCandidates: number
}

/**
 * Set the MinCollatorStake amount
 * ForceOrigin call only
 */
export interface CollatorStakingCall_force_set_min_collator_stake {
    __kind: 'force_set_min_collator_stake'
    minCollatorStake: bigint
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
export type XcmpQueueCall = XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * Services a single overweight XCM.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight XCM to service
 * - `weight_limit`: The amount of weight that XCM execution may take.
 * 
 * Errors:
 * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
 * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
 * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface XcmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: bigint
}

/**
 * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * Resumes all XCM executions for the XCMP queue.
 * 
 * Note that this function doesn't change the status of the in/out bound channels.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_resume_xcm_execution {
    __kind: 'resume_xcm_execution'
}

/**
 * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
 * suspend their sending.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.suspend_value`
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * Overwrites the number of pages of messages which must be in the queue after which we drop any further
 * messages from the channel.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.drop_threshold`
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
 * message sending may recommence after it has been suspended.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.resume_threshold`
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * Overwrites the amount of remaining weight under which we stop processing messages.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.threshold_weight`
 */
export interface XcmpQueueCall_update_threshold_weight {
    __kind: 'update_threshold_weight'
    new: bigint
}

/**
 * Overwrites the speed to which the available weight approaches the maximum weight.
 * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
 */
export interface XcmpQueueCall_update_weight_restrict_decay {
    __kind: 'update_weight_restrict_decay'
    new: bigint
}

/**
 * Overwrite the maximum amount of weight any individual message may consume.
 * Messages above this weight go into the overweight queue and may only be serviced explicitly.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
 */
export interface XcmpQueueCall_update_xcmp_max_individual_weight {
    __kind: 'update_xcmp_max_individual_weight'
    new: bigint
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
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
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
    message: Type_334
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
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
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
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
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
export type CumulusXcmCall = never

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
export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 * Send an XCM message as parachain sovereign.
 */
export interface OrmlXcmCall_send_as_sovereign {
    __kind: 'send_as_sovereign'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EfinityXcmCall = EfinityXcmCall_transfer_to_parachain | EfinityXcmCall_transfer_asset_to_parachain | EfinityXcmCall_force_set_minimum_weight

/**
 * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
 * 
 * Note: EFI needs to be registered as foreign token in destination parachain
 * 
 * - `para_id`: destination parachain
 * - `beneficiary`: account to receive EFI in destination parachain
 * - `amount`: amount of EFI to transfer
 * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
 *   `None`
 * 
 * # Errors
 * 
 * - `InvalidAccountId`: `beneficiary` is invalid, i.e could not be converted to
 *   `MultiLocation`
 */
export interface EfinityXcmCall_transfer_to_parachain {
    __kind: 'transfer_to_parachain'
    paraId: ParachainId
    beneficiary: Account
    amount: bigint
    destWeight: (bigint | undefined)
}

/**
 * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
 * 
 * Note: `asset` needs to be registered as foreign token in destination parachain
 * 
 * - `para_id`: destination parachain
 * - `beneficiary`: account to receive `asset` in destination parachain
 * - `asset`: asset to transfer
 * - `amount`: amount of `asset` to transfer
 * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
 *   `None`
 * 
 * # Errors
 * 
 * - `InvalidAccountId`: `beneficiary` is invalid, i.e could not be converted to
 */
export interface EfinityXcmCall_transfer_asset_to_parachain {
    __kind: 'transfer_asset_to_parachain'
    paraId: ParachainId
    beneficiary: Account
    assetId: AssetId
    amount: bigint
    destWeight: (bigint | undefined)
}

/**
 * Update xcm fees amount to be used in xcm.Withdraw message
 */
export interface EfinityXcmCall_force_set_minimum_weight {
    __kind: 'force_set_minimum_weight'
    xcmCall: XcmOperation
    xcmWeightFeeMisc: MinimumWeightFeePair
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_with_fee | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_multiassets

/**
 * Transfer native currencies.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: AssetId
    amount: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Transfer `MultiAsset`.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset {
    __kind: 'transfer_multiasset'
    asset: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Transfer native currencies specifying the fee and amount as
 * separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the amount to be spent to pay for execution in destination
 * chain. Both fee and amount will be subtracted form the callers
 * balance.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: AssetId
    amount: bigint
    fee: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Transfer `MultiAsset` specifying the fee and amount as separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the multiasset to be spent to pay for execution in
 * destination chain. Both fee and amount will be subtracted form the
 * callers balance For now we only accept fee and asset having the same
 * `MultiLocation` id.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset_with_fee {
    __kind: 'transfer_multiasset_with_fee'
    asset: VersionedMultiAsset
    fee: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Transfer several currencies specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the currencies tuple that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [AssetId, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Transfer several `MultiAsset` specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the MultiAssets that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiassets {
    __kind: 'transfer_multiassets'
    assets: VersionedMultiAssets
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

/**
 * Propose a new bounty.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 * or slashed when rejected.
 * 
 * - `curator`: The curator account whom will manage this bounty.
 * - `fee`: The curator fee.
 * - `value`: The total payment amount of this bounty, curator fee included.
 * - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Uint8Array
}

/**
 * Approve a bounty proposal. At a later time, the bounty will be funded and become active
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * Assign a curator to a funded bounty.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * Unassign curator from a bounty.
 * 
 * This function can only be called by the `RejectOrigin` a signed origin.
 * 
 * If this function is called by the `RejectOrigin`, we assume that the curator is
 * malicious or inactive. As a result, we will slash the curator when possible.
 * 
 * If the origin is the curator, we take this as a sign they are unable to do their job and
 * they willingly give up. We could slash them, but for now we allow them to recover their
 * deposit and exit without issue. (We may want to change this if it is abused.)
 * 
 * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 * anyone in the community to call out that a curator is not doing their due diligence, and
 * we should pick a new curator. In this case the curator should also be slashed.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * Accept the curator role for a bounty.
 * A deposit will be reserved from curator and refund upon successful payout.
 * 
 * May only be called from the curator.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
 * after a delay.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to award.
 * - `beneficiary`: The beneficiary account whom will receive the payout.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * Claim the payout from an awarded bounty after payout delay.
 * 
 * The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 * - `bounty_id`: Bounty ID to claim.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * Cancel a proposed or active bounty. All the funds will be sent to treasury and
 * the curator deposit will be unreserved if possible.
 * 
 * Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 * - `bounty_id`: Bounty ID to cancel.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * Extend the expiry time of an active bounty.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to extend.
 * - `remark`: additional information.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultiTokensCall = MultiTokensCall_create_collection | MultiTokensCall_destroy_collection | MultiTokensCall_mutate_collection | MultiTokensCall_mutate_token | MultiTokensCall_mint | MultiTokensCall_burn | MultiTokensCall_transfer | MultiTokensCall_freeze | MultiTokensCall_thaw | MultiTokensCall_set_attribute | MultiTokensCall_remove_attribute | MultiTokensCall_remove_all_attributes | MultiTokensCall_batch_transfer | MultiTokensCall_batch_mint | MultiTokensCall_batch_set_attribute | MultiTokensCall_approve_collection | MultiTokensCall_unapprove_collection | MultiTokensCall_approve_token | MultiTokensCall_unapprove_token | MultiTokensCall_force_mutate_collection | MultiTokensCall_force_transfer | MultiTokensCall_force_set_collection | MultiTokensCall_force_set_token | MultiTokensCall_force_set_attribute | MultiTokensCall_force_set_collection_account | MultiTokensCall_force_set_token_account | MultiTokensCall_force_create_collection

/**
 * Creates a new collection from `descriptor`
 * 
 * # Errors
 * - `DepositReserveFailed` if the deposit cannot be reserved
 */
export interface MultiTokensCall_create_collection {
    __kind: 'create_collection'
    descriptor: DefaultCollectionDescriptor
}

/**
 * Destroys `Collection` with `id`. `origin` must be the owner of the `Collection`.
 * 
 * 
 * # Errors
 * - `NoPermission` if `origin` is not the owner of the collection.
 * - `NotFound` if `Collection` with `id` does not exist.
 * - `DestroyForbiddenByCollectionEvent` if another pallet is blocking the collection's
 *   destruction
 * - `DestroyForbiddenByRemainingTokens` if collection still has tokens when destroying
 * - `DestroyForbiddenByAttributeCount` if collection still has attributes when destroying
 * current number of collection attributes.
 */
export interface MultiTokensCall_destroy_collection {
    __kind: 'destroy_collection'
    collectionId: bigint
}

/**
 * Modify `Collection` with `id` by applying `mutation`
 * 
 * # Errors
 * - `NotFound`, if `collection_id` does not exist.
 * - `NoPermission`, if `origin` is not the owner of `collection`.
 */
export interface MultiTokensCall_mutate_collection {
    __kind: 'mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * Modify `Token` with `token_id`  from `Collection` with `collection_id` by applying
 * `mutation`
 * 
 * # Errors
 * - `CurrencyIncompatibleWithCollectionRoyalty` if token has already been assigned a
 *   royalty
 * - `NoPermission` if not the collection owner
 * - `TokenNotFound` if Token does not exist
 * - `ConflictingLocation` if the new location is already occupied
 */
export interface MultiTokensCall_mutate_token {
    __kind: 'mutate_token'
    collectionId: bigint
    tokenId: bigint
    mutation: DefaultTokenMutation
}

/**
 * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
 * `MintPolicy`.
 * 
 * # Errors
 * - `AmountZero` if `amount == 0`.
 * - `CollectionNotFound` if `Collection` does not exist.
 * - `TokenNotFound` if `Token` does not exist.
 * - `TokenAlreadyExists` if attempting to create a token that already exists
 * - `NoPermission` if `caller` is not allowed to mint the `collection`.
 * - `Overflow` if `amount + current_total_supply` overflows its type, or if the
 *   token_count
 * overflows.
 * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
 * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
 * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
 * - `ConflictingLocation` if the token is foreign and the location is already mapped to
 *   another asset in `AssetIdsByLocation`
 */
export interface MultiTokensCall_mint {
    __kind: 'mint'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultMintParams
}

/**
 * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
 * It also updates the total supply of `collection_id`.
 * 
 * # Errors
 * - `NotFound` if `collection` does not exist.
 * - `BalanceLow` if `owner` account does not has enough amount of any token in `tokens`
 * of `collection`.
 * - `CollectionDoesNotSupportGivenToken` if `tokens` is not empty.
 * - `BalanceLow` if `owner` account does not has enough amount of the `collection`.
 * - `Overflow` if amount - supply overflows type, or if burn causes collection.token_count
 *   to
 * overflow.
 * - `DepositUnreserveFailed` if caller does not have enough reserved balance to unreserve
 */
export interface MultiTokensCall_burn {
    __kind: 'burn'
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * `operator` transfers to `recipient` for `collection_id` with `params`
 * 
 * # Errors
 * - `AmountZero` if `amount == 0`.
 * - `InvalidTargetAccount` if `source == target`.
 * - `BalanceLow` if `source` does not own enough amount of `collection`.
 * - `Overflow` if `target` balance of `collection` overflows.
 */
export interface MultiTokensCall_transfer {
    __kind: 'transfer'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * Freeze collection, token or account
 */
export interface MultiTokensCall_freeze {
    __kind: 'freeze'
    info: Freeze
}

/**
 * Thaw collection, token or account
 */
export interface MultiTokensCall_thaw {
    __kind: 'thaw'
    info: Freeze
}

/**
 * Sets the attribute `key` to `value` for `collection_id`.
 * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the
 * attribute is added to the token.
 * 
 * # Errors
 * - `InvalidAttributeKey` if `key.len() == 0`
 * - `CollectionNotFound` if `collection_id` does not exist.
 * - `TokenNotFound` if `token_id` is `Some` and does not exist.
 * - `NoPermission` if `source` account is not the owner of the collection.
 * - `Overflow` if an attribute counter overflows
 * - `DepositReserveFailed` if unable to reserve the deposit for the attribute storage.
 */
export interface MultiTokensCall_set_attribute {
    __kind: 'set_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    key: Uint8Array
    value: Uint8Array
}

/**
 * Removes the `key` attribute from the given `collection_id` or `token_id`.
 * 
 * # Errors
 * - `InvalidAttributeKey` if `key.len() == 0`
 * - `CollectionNotFound` if `collection_id` does not exist.
 * - `TokenNotFound` if `token_id` is `Some` and does not exist.
 * - `NoPermission` if `caller` is not the owner of the collection.
 * - `Underflow` if an attribute counter underflows
 */
export interface MultiTokensCall_remove_attribute {
    __kind: 'remove_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    key: Uint8Array
}

/**
 * Removes all attributes from the given `collection_id` or `token_id`.
 * 
 * # Errors
 * - `InvalidAttributeCount` if `attribute_count` doesn't match the number of attributes
 * - `CollectionNotFound` if Collection with `collection_id` does not exist.
 * - `TokenNotFound` if Token with `token_id` does not exist.
 * - `NoPermission` if `origin` account is not the owner of the Collection or Token
 * - other errors from `remove_attribute`
 */
export interface MultiTokensCall_remove_all_attributes {
    __kind: 'remove_all_attributes'
    collectionId: bigint
    tokenId: (bigint | undefined)
    attributeCount: number
}

/**
 * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
 * account. A single failure will fail all transfers.
 * 
 * # Errors
 * - `AmountZero` if `amount == 0`.
 * - `InvalidTargetAccount` if `source == target`.
 * - `BalanceLow` if `source` does not own enough amount of `collection`.
 * - `BalanceOverflow` if `target` balance of `collection` overflows.
 */
export interface MultiTokensCall_batch_transfer {
    __kind: 'batch_transfer'
    collectionId: bigint
    recipients: Recipient[]
}

/**
 * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
 * `AccountId` and `MintParams`. A single mint failure will fail all of them in the batch.
 * 
 * # Errors
 * - `AmountZero` if `amount == 0`.
 * - `NotFound` if `collection` does **not** exist.
 * - `NoPermission` if `caller` is not allowed to mint the `collection`.
 * - `MintForbidden` if the policy disallows the operation
 * - `BalanceOverflow` if `amount + current_total_supply` overflows its type.
 * - `TokenCountOverflow` if the token_count overflows
 * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
 * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
 * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
 */
export interface MultiTokensCall_batch_mint {
    __kind: 'batch_mint'
    collectionId: bigint
    recipients: Type_378[]
}

/**
 * Collection owner sets `attributes` to `collection_id`
 * 
 * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the
 * attribute is added to the token.
 * 
 * # Errors
 * - `InvalidAttributeKey` if `key.len() == 0`
 * - `CollectionNotFound` if `collection_id` does not exist.
 * - `TokenNotFound` if `token_id` is `Some` and does not exist.
 * - `NoPermission` if `source` account is not the owner of the collection.
 * - `Overflow` if an attribute counter overflows
 * - `DepositReserveFailed` if unable to reserve the deposit for the attribute storage.
 */
export interface MultiTokensCall_batch_set_attribute {
    __kind: 'batch_set_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    attributes: AttributeKeyValuePair[]
}

/**
 * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection_id`.
 * If an `expiration` is provided, the approval will end when it expires.
 * 
 * # Errors
 * - `CannotApproveSelf` - if `origin == operator`
 * - `AlreadyExpired` - if `expiration` is earlier than now
 * - `CollectionAccountNotFound` if the collection account does not exist
 * - `MaxApprovalsExceeded` if approval count has exceeded the maximum
 */
export interface MultiTokensCall_approve_collection {
    __kind: 'approve_collection'
    collectionId: bigint
    operator: Uint8Array
    expiration: (number | undefined)
}

/**
 * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
 * 
 * # Errors
 * - `CollectionAccountNotFound` if the collection account cannot be found
 */
export interface MultiTokensCall_unapprove_collection {
    __kind: 'unapprove_collection'
    collectionId: bigint
    operator: Uint8Array
}

/**
 * Approve `operator` to transfer up to `amount` of `caller`'s balance for `token_id` of
 * `collection_id`. An `expiration` can be provided. `current_amount` must match the
 * current approved amount.
 * 
 * # Errors
 * - `CannotApproveSelf` if `origin == operator`
 * - `CollectionAlreadyApproved` if `collection_id` is already approved
 * - `AlreadyExpired` if `expiration` is earlier than now
 * - `TokenAccountNotFound` if the token account does not exist
 * - `MaxApprovalsExceeded` if approval count has exceeded the maximum
 * - `WrongCurrentApprovedAmount` if `current_amount` does not match the current approval
 *   amount
 */
export interface MultiTokensCall_approve_token {
    __kind: 'approve_token'
    collectionId: bigint
    tokenId: bigint
    operator: Uint8Array
    amount: bigint
    expiration: (number | undefined)
    currentAmount: bigint
}

/**
 * Unapprove `operator` to transfer `origin`'s `token_id` of `collection_id`
 * 
 * # Errors
 * - `TokenAccountNotFound` if the token account does not exist
 */
export interface MultiTokensCall_unapprove_token {
    __kind: 'unapprove_token'
    collectionId: bigint
    tokenId: bigint
    operator: Uint8Array
}

/**
 * Exactly as `mutate_collection`, except the origin must be root and the `caller` account
 * should be specified.
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 * - Same as mutate_collection
 */
export interface MultiTokensCall_force_mutate_collection {
    __kind: 'force_mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account should be
 * specified.
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 * - Same as transfer
 */
export interface MultiTokensCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    destination: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * Set the Collections storage to the given `value`, origin must be root
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 */
export interface MultiTokensCall_force_set_collection {
    __kind: 'force_set_collection'
    collectionId: bigint
    value: (Collection | undefined)
}

/**
 * Set the Tokens storage to the given `value`, origin must be root
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 */
export interface MultiTokensCall_force_set_token {
    __kind: 'force_set_token'
    collectionId: bigint
    tokenId: bigint
    value: (Token | undefined)
}

/**
 * Set the Tokens storage to the given `value`, origin must be root
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 */
export interface MultiTokensCall_force_set_attribute {
    __kind: 'force_set_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    key: Uint8Array
    value: (Attribute | undefined)
}

/**
 * Set the CollectionAccounts storage to the given `value`, origin must be root
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 */
export interface MultiTokensCall_force_set_collection_account {
    __kind: 'force_set_collection_account'
    collectionId: bigint
    accountId: MultiAddress
    value: (CollectionAccount | undefined)
}

/**
 * Set the TokenAccounts storage to the given `value`, origin must be root
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 */
export interface MultiTokensCall_force_set_token_account {
    __kind: 'force_set_token_account'
    collectionId: bigint
    tokenId: bigint
    accountId: MultiAddress
    value: (TokenAccount | undefined)
}

/**
 * Creates a new collection from `descriptor` at `collection_id`, origin must be root
 * 
 * # Errors
 * - `DepositReserveFailed` if the deposit cannot be reserved
 */
export interface MultiTokensCall_force_create_collection {
    __kind: 'force_create_collection'
    owner: Uint8Array
    collectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ClaimsCall = ClaimsCall_claim | ClaimsCall_mint_claim | ClaimsCall_move_claim

/**
 * Make a claim to collect your EFI.
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * Unsigned Validation:
 * A call to claim is deemed valid if the signature provided matches
 * the expected signed message of:
 * 
 * > Ethereum Signed Message:
 * > (configured prefix string)(address)
 * 
 * and `address` matches the `dest` account.
 * 
 * Parameters:
 * - `dest`: The destination account to payout the claim.
 * - `ethereum_signature`: The signature of an ethereum signed message matching the format
 *   described above.
 * 
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to validate unsigned `claim` call.
 * 
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: Uint8Array
    ethereumSignature: Uint8Array
}

/**
 * Mint a new claim to collect EFIs.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * Parameters:
 * - `who`: The Ethereum address allowed to collect this claim.
 * - `value`: The number of EFIs that will be claimed.
 * 
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * 
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: Uint8Array
    value: bigint
}

export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: Uint8Array
    new: Uint8Array
    preclaim: (Uint8Array | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PoolsCall = PoolsCall_mutate_pools

/**
 * Mutate the pools. Can only be called by root.
 */
export interface PoolsCall_mutate_pools {
    __kind: 'mutate_pools'
    mutation: PoolsMutation
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FuelTanksCall = FuelTanksCall_create_fuel_tank | FuelTanksCall_mutate_fuel_tank | FuelTanksCall_add_account | FuelTanksCall_remove_account | FuelTanksCall_remove_account_rule_data | FuelTanksCall_dispatch | FuelTanksCall_dispatch_and_touch | FuelTanksCall_schedule_mutate_freeze_state | FuelTanksCall_insert_rule_set | FuelTanksCall_remove_rule_set | FuelTanksCall_batch_add_account | FuelTanksCall_batch_remove_account | FuelTanksCall_force_set_consumption | FuelTanksCall_destroy_fuel_tank

/**
 * Creates a fuel tank, given a descriptor
 * 
 * # Errors
 * - `FuelTankAlreadyExists` if `tank_id` already exists
 * - `DuplicateRuleKinds` if a rule set has multiple rules of the same kind
 */
export interface FuelTanksCall_create_fuel_tank {
    __kind: 'create_fuel_tank'
    descriptor: FuelTankDescriptor
}

/**
 * Apply `mutation` to fuel tank with `tank_id`.
 * 
 * # Errors
 * - `FuelTankNotFound` if `tank_id` does not exist.
 * - `NoPermission` if `origin` is not the fuel tank owner
 */
export interface FuelTanksCall_mutate_fuel_tank {
    __kind: 'mutate_fuel_tank'
    tankId: MultiAddress
    mutation: DefaultTankMutation
}

/**
 * Adds new account for `user_id` to fuel tank at `tank_id`. An account is
 * required to dispatch calls. A deposit is required, and may be paid by
 * the user or the fuel tank, depending on the settings.
 * ### Errors
 * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
 * - `NoPermission` if `origin` does not have permission to add an account
 * - `AccountAlreadyExists` if account at `user_id` already exists
 */
export interface FuelTanksCall_add_account {
    __kind: 'add_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * Removes account for `user_id` from fuel tank at `tank_id`. Any deposits
 * are returned.
 * ### Errors
 * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
 * - `NoPermission` if `origin` does not have permission to add an account
 * - `AccountNotFound` if account at `user_id` does not exist
 */
export interface FuelTanksCall_remove_account {
    __kind: 'remove_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
 * the fuel tank or the rule set to be frozen.
 * ### Errors
 * - `FuelTankNotFound` if fuel tank for `tank_id` doesn't exist
 * - `NoPermission` if called by non-owner
 * - `AccountNotFound` if account does not exist for `user_id`
 * - `RuleSetNotFound` if rule set does not exist for `rule_set_id`
 * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
 * - `RuleNotFound` if rule does not exist for `rule_kind`
 */
export interface FuelTanksCall_remove_account_rule_data {
    __kind: 'remove_account_rule_data'
    tankId: MultiAddress
    userId: MultiAddress
    ruleSetId: number
    ruleKind: DispatchRuleKind
}

/**
 * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
 * 
 * # Errors
 * - `FuelTankNotFound` if `tank_id` does not exist.
 * - `InvalidRuleSetId` if `rule_set_id` does not exist
 * - `UsageRestricted` if caller is not part of ruleset whitelist
 * - `TransactionExceedsFuelBurnLimit` if call exceeds the max fee limit set by ruleset
 * - `TransactionExceedsUserBudget` if call exceeds the max user budget limit set by
 *   ruleset
 * - `TransactionExceedsFuelTankBudget` if call exceeds the max fuel tank budget set by
 *   ruleset
 * - `CallerDoesNotHaveRuleSetTokenBalance` if caller does not own the tokens to use the
 *   ruleset
 * - `TransactionNotPermitted` if the call is not in the list of permitted calls of ruleset
 * - `Overflow` if amount overflows type
 * - `UserBalanceLowForRemainingFee` if caller does not have enough balance to pay for
 *   remaining_fee when `pays_remaining_fee` is true
 * - `FuelTankOutOfFunds` if the fuel tank account cannot pay fees
 */
export interface FuelTanksCall_dispatch {
    __kind: 'dispatch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    paysRemainingFee: boolean
}

/**
 * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
 * exist and is allowed by the fuel tank's `user_account_management` settings.
 * # Errors
 * Returns the same errors as [dispatch](Self::dispatch) and
 * [add_account](Self::add_account)
 */
export interface FuelTanksCall_dispatch_and_touch {
    __kind: 'dispatch_and_touch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    paysRemainingFee: boolean
}

/**
 * Schedule mutating of `is_frozen` state that determines if fuel tank or rule set can be
 * used
 * 
 * Additional 1 read and 1 write are added to account for `on_finalize` storage operations
 * 
 * # Errors
 * - `FuelTankNotFound` if `tank_id` does not exist.
 * - `NoPermission` if caller is not a fuel tank owner
 * - `FreezeQueueFull` if the queue is full
 */
export interface FuelTanksCall_schedule_mutate_freeze_state {
    __kind: 'schedule_mutate_freeze_state'
    tankId: MultiAddress
    ruleSetId: (number | undefined)
    isFrozen: boolean
}

/**
 * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
 * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
 * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
 * the data first. If a rule is being replaced, it will be mutated with the new parameters,
 * and it will maintain any persistent data it already has.
 * 
 * This is only callable by the fuel tank's owner.
 * ### Errors
 * - `FuelTankNotFound` if `tank_id` does not exist.
 * - `NoPermission` if caller is not the fuel tank owner
 * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
 * - `CannotRemoveRuleThatIsStoringAccountData` if removing a rule that is storing account
 *   data
 * - `MaxRuleSetsExceeded` if max number of rule sets was exceeded
 * - `DuplicateRuleKinds` if adding a rule set with multiple rules of the same kind
 */
export interface FuelTanksCall_insert_rule_set {
    __kind: 'insert_rule_set'
    tankId: MultiAddress
    ruleSetId: number
    rules: DispatchRuleDescriptor[]
}

/**
 * Remove rule set for `tank_id` and `rule_set_id`. A rule that is storing data on
 * any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove the
 * data first. This is only callable by the fuel tank's owner.
 * # Errors
 * - `FuelTankNotFound` if `tank_id` does not exist.
 * - `NoPermission` if caller is not the fuel tank owner
 * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
 * - `CannotRemoveRuleThatIsStoringAccountData` if removing a rule that is storing account
 *   data
 */
export interface FuelTanksCall_remove_rule_set {
    __kind: 'remove_rule_set'
    tankId: MultiAddress
    ruleSetId: number
}

/**
 * Similar to add_account but takes a list of `AccountId`s to
 * insert into a fuel tank.
 * ### Errors
 * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
 * - `NoPermission` if `origin` does not have permission to add an account
 * - `AccountAlreadyExists` if account at `user_id` already exists
 */
export interface FuelTanksCall_batch_add_account {
    __kind: 'batch_add_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Similar to remove_account but takes a list of `AccountId`s to
 * remove from a fuel tank.
 * ### Errors
 * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
 * - `NoPermission` if `origin` does not have permission to add an account
 * - `AccountNotFound` if account at `user_id` does not exist
 */
export interface FuelTanksCall_batch_remove_account {
    __kind: 'batch_remove_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Force set the fuel tank consumption
 * If `user_id` is `Some`, it sets the consumption for that account.
 * If it is `None`, it sets the consumption on the fuel tank directly.
 * 
 * # Errors
 * - `AccountNotFound` if `user_id` is `Some` and account does not exist
 * - `FuelTankNotFound` if tank_id does not exist
 * - `NoPermission` if caller is not ForceOrigin or fuel tank owner
 */
export interface FuelTanksCall_force_set_consumption {
    __kind: 'force_set_consumption'
    tankId: MultiAddress
    userId: (MultiAddress | undefined)
    ruleSetId: number
    consumption: Consumption
}

/**
 * Destroy the fuel tank by scheduling the deletion for `on_finalize` to execute
 * Only callable by owner
 * The fuel tank must be frozen
 * Can only be destroyed if all accounts are removed
 */
export interface FuelTanksCall_destroy_fuel_tank {
    __kind: 'destroy_fuel_tank'
    tankId: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MarketplaceCall = MarketplaceCall_create_listing | MarketplaceCall_cancel_listing | MarketplaceCall_fill_listing | MarketplaceCall_place_bid | MarketplaceCall_finalize_auction | MarketplaceCall_set_protocol_fee

/**
 * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a `Currency`.
 * The id for the listing is generated by hashing the encoded bytes of the listing.
 * ### Parameters
 * - `make_asset_id`: The id of the asset being sold
 * - `take_asset_id`: The id of the asset being requested
 * - `amount`: The number of units being sold
 * - `price`: The requested price for each unit. If it's an auction, this is the minimum
 *   bid
 * - `salt`: Can be used to differentiate listings
 * - `auction_data`: Including this makes the listing an auction
 * ### Errors
 * - `InvalidAuctionStart` if the start is less than the current block +
 *   `ListingActiveDelay`
 * - `InvalidAuctionEnded` if auction ends before it starts
 * - `NoCurrency` Neither the make or take side is considered a currency
 * - `ListingForbidden` if make or take side tokens are not allowed to be listed
 * - `CurrencyNotAllowedAsRoyalty` if currency cannot be used as a royalty
 * - `LowBaseCurrencyBalance` if base currency balance is too low
 * - `LowTokenBalance` token balance is too low for reserve
 * - `ListingAlreadyExists` if a listing with the same ID already exists
 */
export interface MarketplaceCall_create_listing {
    __kind: 'create_listing'
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    salt: Uint8Array
    auctionData: (AuctionData | undefined)
}

/**
 * Cancels the listing with `listing_id`. Only callable by the seller.
 * ### Parameters
 * - `listing_id`: The ID of the listing to cancel
 * ### Errors
 * - `ListingNotFound` if the listing under `listing_id` does not exist
 * - `NoPermission` if the listing seller is not the caller, `origin`
 */
export interface MarketplaceCall_cancel_listing {
    __kind: 'cancel_listing'
    listingId: Uint8Array
}

/**
 * Fills a fixed price listing. This will execute immediately.
 * ### Parameters
 * - `listing_id`: The id for the listing to buy from
 * - `amount`: The number of units purchased
 * ### Errors
 * - `ListingNotFound` if the listing under `listing_id` does not exist
 * - `BuyerIsSeller` if the buyer is the seller of the listing
 * - `ListingIsWrongType` if the listing is not under auction
 * - `InvalidAmount` if the amount that still needs to be filled is greater than `amount`
 * - `ListingNotActive` if the listing has not passed the `ListingActiveDelay` yet
 * - `Overflow` if amount * listing_price is too large
 * - `TakeValueUnderMinimum` if the listings `take` value is under the minimum required
 * - `LowTokenBalance` if the buyer does not have enough tokens for reserve
 */
export interface MarketplaceCall_fill_listing {
    __kind: 'fill_listing'
    listingId: Uint8Array
    amount: bigint
}

/**
 * Places a bid on a listing. The listing must be an auction, and it must be currently
 * active.
 * ### Parameters
 * - `listing_id`: The id for the listing to buy from
 * - `price`: The price for a single unit
 * ### Errors
 * - `ListingNotFound` if listing under `listing_id` does not exist
 * - `BuyerIsSeller` if the bidder is the seller of the listing
 * - `ListingWrongType` if listing is not an auction
 * - `InactiveAuction` if listing operates outside of specified start and end block
 * - `Overflow` if added bid is too large to store
 * - `InvalidPrice` if price is less than mininum_price for a bid
 * - `Overflow` if older bid * amount is too large
 * - `Overflow` if new bid price is too large
 */
export interface MarketplaceCall_place_bid {
    __kind: 'place_bid'
    listingId: Uint8Array
    price: bigint
}

/**
 * Finalize the auction with id: `listing_id`. This will end the auction and transfer
 * funds. It fails if the auction is not over.
 * ### Parameters
 * - `listing_id`: The ID for the listing to finalize
 * ### Errors
 * - `ListingNotFound` if listing under `listing_id` does not exist
 * - `ListingIsWrongType` if listing is not an auction
 * - `AuctionNotOver` if the auction has not finished yet
 * - `TakeValueUnderMinimum` if the take value is less than the minimum required
 * - `Overflow` if bid price * listing_amount is too large
 */
export interface MarketplaceCall_finalize_auction {
    __kind: 'finalize_auction'
    listingId: Uint8Array
}

/**
 * Change the protocol fee to `protocol_fee`. Fails if `origin` is invalid.
 * ### Parameters
 * - `protocol_fee`: Percentage of fee to set
 */
export interface MarketplaceCall_set_protocol_fee {
    __kind: 'set_protocol_fee'
    protocolFee: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ExtrinsicPauseCall = ExtrinsicPauseCall_pause_extrinsic | ExtrinsicPauseCall_resume_extrinsic

/**
 * Pause execution of extrinsic(s)
 * 
 * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
 * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
 * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
 * is paused, else the entire pallet is paused.
 */
export interface ExtrinsicPauseCall_pause_extrinsic {
    __kind: 'pause_extrinsic'
    call: Call
    pauseOnlyExtrinsic: boolean
}

/**
 * Resume execution of extrinsic(s)
 * 
 * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
 * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
 * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
 * is resumed, else the entire pallet is resumed.
 */
export interface ExtrinsicPauseCall_resume_extrinsic {
    __kind: 'resume_extrinsic'
    call: Call
    resumeOnlyExtrinsic: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EfinityUtilityCall = EfinityUtilityCall_batch

/**
 * Dispatch a batch of calls.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 */
export interface EfinityUtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
    continueOnFailure: boolean
}

export interface UserAccountManagement {
    tankReservesExistentialDeposit: boolean
    tankReservesAccountCreationDeposit: boolean
}

export type AccountRuleDescriptor = AccountRuleDescriptor_WhitelistedCallers | AccountRuleDescriptor_RequireToken

export interface AccountRuleDescriptor_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: Uint8Array[]
}

export interface AccountRuleDescriptor_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface UserFuelBudgetRuleDescriptor {
    amount: bigint
    resetPeriod: number
}

export interface TankFuelBudgetRule {
    budget: Budget
    consumption: Consumption
}

export interface RequireTokenRule {
    collectionId: bigint
    tokenId: bigint
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

export type Type_283 = Type_283_Members | Type_283_Member | Type_283__Phantom

export interface Type_283_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_283_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_283__Phantom {
    __kind: '_Phantom'
}

export type Type_284 = Type_284_Members | Type_284_Member | Type_284__Phantom

export interface Type_284_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_284_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_284__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Xcm | Origin_Response

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V1MultiLocation
}

export interface Origin_Response {
    __kind: 'Response'
    value: V1MultiLocation
}

export type Type_286 = Type_286_Relay | Type_286_SiblingParachain

export interface Type_286_Relay {
    __kind: 'Relay'
}

export interface Type_286_SiblingParachain {
    __kind: 'SiblingParachain'
    value: number
}

export type Void = never

export interface ParachainInherentData {
    validationData: V2PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
}

export interface VestingSchedule {
    start: number
    period: number
    periodCount: number
    perPeriod: bigint
}

export interface VestedAccount {
    accountId: Uint8Array
    amount: bigint
}

export type Bounded = Bounded_Legacy | Bounded_Inline | Bounded_Lookup

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: Uint8Array
}

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Uint8Array
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: Uint8Array
    len: number
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
    __kind: 'None'
}

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export interface SessionKeys {
    aura: Uint8Array
    pools: Uint8Array
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

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
    __kind: 'V0'
    value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
    __kind: 'V1'
    value: V1MultiAsset[]
}

export type Type_334 = Type_334_V0 | Type_334_V1 | Type_334_V2

export interface Type_334_V0 {
    __kind: 'V0'
    value: Type_335
}

export interface Type_334_V1 {
    __kind: 'V1'
    value: Type_340
}

export interface Type_334_V2 {
    __kind: 'V2'
    value: Type_346[]
}

export interface V1MultiLocation {
    parents: number
    interior: V1Junctions
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export type ParachainId = ParachainId_Acala | ParachainId_Moonbeam | ParachainId_Statemint

export interface ParachainId_Acala {
    __kind: 'Acala'
}

export interface ParachainId_Moonbeam {
    __kind: 'Moonbeam'
}

export interface ParachainId_Statemint {
    __kind: 'Statemint'
}

export type Account = Account_Substrate | Account_EVM

export interface Account_Substrate {
    __kind: 'Substrate'
    value: Uint8Array
}

export interface Account_EVM {
    __kind: 'EVM'
    value: Uint8Array
}

export interface AssetId {
    collectionId: bigint
    tokenId: bigint
}

export type XcmOperation = XcmOperation_XTokensTransfer | XcmOperation_ParachainFee

export interface XcmOperation_XTokensTransfer {
    __kind: 'XTokensTransfer'
}

export interface XcmOperation_ParachainFee {
    __kind: 'ParachainFee'
    value: V1MultiLocation
}

export interface MinimumWeightFeePair {
    minimumWeight: Weight
    fee: bigint
}

export type VersionedMultiAsset = VersionedMultiAsset_V0 | VersionedMultiAsset_V1

export interface VersionedMultiAsset_V0 {
    __kind: 'V0'
    value: V0MultiAsset
}

export interface VersionedMultiAsset_V1 {
    __kind: 'V1'
    value: V1MultiAsset
}

export interface DefaultCollectionDescriptor {
    policy: DefaultCollectionPolicyDescriptor
    explicitRoyaltyCurrencies: AssetId[]
    attributes: AttributeKeyValuePair[]
}

export interface DefaultCollectionMutation {
    owner: (Uint8Array | undefined)
    royalty: ShouldMutate
    explicitRoyaltyCurrencies: (AssetId[] | undefined)
}

export interface DefaultTokenMutation {
    behavior: Type_130
    listingForbidden: Type_133
    metadata: Type_134
}

export type DefaultMintParams = DefaultMintParams_CreateToken | DefaultMintParams_Mint | DefaultMintParams_CreateForeignToken

export interface DefaultMintParams_CreateToken {
    __kind: 'CreateToken'
    tokenId: bigint
    initialSupply: bigint
    unitPrice: bigint
    cap: (TokenCap | undefined)
    behavior: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    attributes: AttributeKeyValuePair[]
}

export interface DefaultMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    unitPrice: (bigint | undefined)
}

export interface DefaultMintParams_CreateForeignToken {
    __kind: 'CreateForeignToken'
    tokenId: bigint
    behavior: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    metadata: DefaultTokenMetadata
    existentialDeposit: bigint
}

export interface DefaultBurnParams {
    tokenId: bigint
    amount: bigint
    keepAlive: boolean
    removeTokenStorage: boolean
}

export type DefaultTransferParams = DefaultTransferParams_Simple | DefaultTransferParams_Operator

export interface DefaultTransferParams_Simple {
    __kind: 'Simple'
    tokenId: bigint
    amount: bigint
    keepAlive: boolean
}

export interface DefaultTransferParams_Operator {
    __kind: 'Operator'
    tokenId: bigint
    source: Uint8Array
    amount: bigint
    keepAlive: boolean
}

export interface Freeze {
    collectionId: bigint
    freezeType: FreezeType
}

export interface Recipient {
    accountId: Uint8Array
    params: DefaultTransferParams
}

export interface Type_378 {
    accountId: Uint8Array
    params: DefaultMintParams
}

export interface AttributeKeyValuePair {
    key: Uint8Array
    value: Uint8Array
}

export interface Collection {
    owner: Uint8Array
    policy: DefaultCollectionPolicy
    tokenCount: bigint
    attributeCount: number
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [AssetId, null][]
}

export interface Token {
    supply: bigint
    cap: (TokenCap | undefined)
    isFrozen: boolean
    minimumBalance: bigint
    unitPrice: bigint
    mintDeposit: bigint
    attributeCount: number
    marketBehavior: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    metadata: DefaultTokenMetadata
}

export interface Attribute {
    value: Uint8Array
    deposit: bigint
}

export interface CollectionAccount {
    isFrozen: boolean
    approvals: [Uint8Array, (number | undefined)][]
    accountCount: number
}

export interface TokenAccount {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves: [Uint8Array, bigint][]
    locks: [Uint8Array, bigint][]
    approvals: [Uint8Array, Approval][]
    isFrozen: boolean
}

export interface PoolsMutation {
    community: Pool
    collator: Pool
    fuelTanks: Pool
    priceDiscovery: Pool
}

export interface DefaultTankMutation {
    userAccountManagement: Type_192
    providesDeposit: (boolean | undefined)
    accountRules: (AccountRuleDescriptor[] | undefined)
}

export type DispatchRuleKind = DispatchRuleKind_WhitelistedCallers | DispatchRuleKind_WhitelistedCollections | DispatchRuleKind_MaxFuelBurnPerTransaction | DispatchRuleKind_UserFuelBudget | DispatchRuleKind_TankFuelBudget | DispatchRuleKind_RequireToken | DispatchRuleKind_PermittedCalls | DispatchRuleKind_PermittedExtrinsics

export interface DispatchRuleKind_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
}

export interface DispatchRuleKind_WhitelistedCollections {
    __kind: 'WhitelistedCollections'
}

export interface DispatchRuleKind_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
}

export interface DispatchRuleKind_UserFuelBudget {
    __kind: 'UserFuelBudget'
}

export interface DispatchRuleKind_TankFuelBudget {
    __kind: 'TankFuelBudget'
}

export interface DispatchRuleKind_RequireToken {
    __kind: 'RequireToken'
}

export interface DispatchRuleKind_PermittedCalls {
    __kind: 'PermittedCalls'
}

export interface DispatchRuleKind_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
}

export interface Consumption {
    totalConsumed: bigint
    lastResetBlock: (number | undefined)
}

export interface AuctionData {
    startBlock: number
    endBlock: number
}

export interface Budget {
    amount: bigint
    resetPeriod: number
}

export interface V2PersistedValidationData {
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

export interface Digest {
    logs: DigestItem[]
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

export type Type_335 = Type_335_WithdrawAsset | Type_335_ReserveAssetDeposit | Type_335_TeleportAsset | Type_335_QueryResponse | Type_335_TransferAsset | Type_335_TransferReserveAsset | Type_335_Transact | Type_335_HrmpNewChannelOpenRequest | Type_335_HrmpChannelAccepted | Type_335_HrmpChannelClosing | Type_335_RelayedFrom

export interface Type_335_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: Type_337[]
}

export interface Type_335_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: Type_337[]
}

export interface Type_335_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: Type_337[]
}

export interface Type_335_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface Type_335_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_335_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_335_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_335_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_335_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_335_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_335_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: Type_335
}

export type Type_340 = Type_340_WithdrawAsset | Type_340_ReserveAssetDeposited | Type_340_ReceiveTeleportedAsset | Type_340_QueryResponse | Type_340_TransferAsset | Type_340_TransferReserveAsset | Type_340_Transact | Type_340_HrmpNewChannelOpenRequest | Type_340_HrmpChannelAccepted | Type_340_HrmpChannelClosing | Type_340_RelayedFrom | Type_340_SubscribeVersion | Type_340_UnsubscribeVersion

export interface Type_340_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: Type_342[]
}

export interface Type_340_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: Type_342[]
}

export interface Type_340_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: Type_342[]
}

export interface Type_340_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface Type_340_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_340_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_340_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_340_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_340_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_340_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_340_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: Type_340
}

export interface Type_340_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_340_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_346 = Type_346_WithdrawAsset | Type_346_ReserveAssetDeposited | Type_346_ReceiveTeleportedAsset | Type_346_QueryResponse | Type_346_TransferAsset | Type_346_TransferReserveAsset | Type_346_Transact | Type_346_HrmpNewChannelOpenRequest | Type_346_HrmpChannelAccepted | Type_346_HrmpChannelClosing | Type_346_ClearOrigin | Type_346_DescendOrigin | Type_346_ReportError | Type_346_DepositAsset | Type_346_DepositReserveAsset | Type_346_ExchangeAsset | Type_346_InitiateReserveWithdraw | Type_346_InitiateTeleport | Type_346_QueryHolding | Type_346_BuyExecution | Type_346_RefundSurplus | Type_346_SetErrorHandler | Type_346_SetAppendix | Type_346_ClearError | Type_346_ClaimAsset | Type_346_Trap | Type_346_SubscribeVersion | Type_346_UnsubscribeVersion

export interface Type_346_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface Type_346_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface Type_346_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface Type_346_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_346_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_346_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_346_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_346_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_346_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_346_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_346_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_346_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface Type_346_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface Type_346_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_346_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_346_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_346_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_346_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_346_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_346_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_346_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_346_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_346[]
}

export interface Type_346_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_346[]
}

export interface Type_346_ClearError {
    __kind: 'ClearError'
}

export interface Type_346_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface Type_346_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_346_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_346_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
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

export interface DefaultCollectionPolicyDescriptor {
    mint: DefaultMintPolicyDescriptor
    market: DefaultMarketPolicyDescriptor
}

export type ShouldMutate = ShouldMutate_NoMutation | ShouldMutate_SomeMutation

export interface ShouldMutate_NoMutation {
    __kind: 'NoMutation'
}

export interface ShouldMutate_SomeMutation {
    __kind: 'SomeMutation'
    value: (DefaultRoyalty | undefined)
}

export type Type_130 = Type_130_NoMutation | Type_130_SomeMutation

export interface Type_130_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_130_SomeMutation {
    __kind: 'SomeMutation'
    value: (TokenMarketBehavior | undefined)
}

export type Type_133 = Type_133_NoMutation | Type_133_SomeMutation

export interface Type_133_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_133_SomeMutation {
    __kind: 'SomeMutation'
    value: boolean
}

export type Type_134 = Type_134_NoMutation | Type_134_SomeMutation

export interface Type_134_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_134_SomeMutation {
    __kind: 'SomeMutation'
    value: DefaultTokenMetadata
}

export type TokenCap = TokenCap_SingleMint | TokenCap_Supply

export interface TokenCap_SingleMint {
    __kind: 'SingleMint'
}

export interface TokenCap_Supply {
    __kind: 'Supply'
    value: bigint
}

export type TokenMarketBehavior = TokenMarketBehavior_HasRoyalty | TokenMarketBehavior_IsCurrency

export interface TokenMarketBehavior_HasRoyalty {
    __kind: 'HasRoyalty'
    value: DefaultRoyalty
}

export interface TokenMarketBehavior_IsCurrency {
    __kind: 'IsCurrency'
}

export type DefaultTokenMetadata = DefaultTokenMetadata_Native | DefaultTokenMetadata_Foreign

export interface DefaultTokenMetadata_Native {
    __kind: 'Native'
}

export interface DefaultTokenMetadata_Foreign {
    __kind: 'Foreign'
    decimalCount: number
    name: Uint8Array
    symbol: Uint8Array
    location: (V1MultiLocation | undefined)
}

export type FreezeType = FreezeType_Collection | FreezeType_Token | FreezeType_CollectionAccount | FreezeType_TokenAccount

export interface FreezeType_Collection {
    __kind: 'Collection'
}

export interface FreezeType_Token {
    __kind: 'Token'
    value: bigint
}

export interface FreezeType_CollectionAccount {
    __kind: 'CollectionAccount'
    value: Uint8Array
}

export interface FreezeType_TokenAccount {
    __kind: 'TokenAccount'
    tokenId: bigint
    accountId: Uint8Array
}

export interface DefaultCollectionPolicy {
    mint: DefaultMintPolicy
    transfer: DefaultTransferPolicy
    market: DefaultMarketPolicy
}

export interface Approval {
    amount: bigint
    expiration: (number | undefined)
}

export interface Pool {
    feeShare: number
}

export type Type_192 = Type_192_NoMutation | Type_192_SomeMutation

export interface Type_192_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_192_SomeMutation {
    __kind: 'SomeMutation'
    value: (UserAccountManagement | undefined)
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
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

export type Type_337 = Type_337_Null | Type_337_DepositAsset | Type_337_DepositReserveAsset | Type_337_ExchangeAsset | Type_337_InitiateReserveWithdraw | Type_337_InitiateTeleport | Type_337_QueryHolding | Type_337_BuyExecution

export interface Type_337_Null {
    __kind: 'Null'
}

export interface Type_337_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_337_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_337_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface Type_337_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface Type_337_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_337_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

export interface Type_337_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: Type_335[]
}

export type Type_342 = Type_342_Noop | Type_342_DepositAsset | Type_342_DepositReserveAsset | Type_342_ExchangeAsset | Type_342_InitiateReserveWithdraw | Type_342_InitiateTeleport | Type_342_QueryHolding | Type_342_BuyExecution

export interface Type_342_Noop {
    __kind: 'Noop'
}

export interface Type_342_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_342_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_342_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_342_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface Type_342_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_342_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export interface Type_342_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: Type_340[]
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

export interface DefaultMintPolicyDescriptor {
    maxTokenCount: (bigint | undefined)
    maxTokenSupply: (bigint | undefined)
    forceSingleMint: boolean
}

export interface DefaultMarketPolicyDescriptor {
    royalty: (DefaultRoyalty | undefined)
}

export interface DefaultRoyalty {
    beneficiary: Uint8Array
    percentage: number
}

export interface DefaultMintPolicy {
    maxTokenCount: (bigint | undefined)
    maxTokenSupply: (bigint | undefined)
    forceSingleMint: boolean
}

export interface DefaultTransferPolicy {
    isFrozen: boolean
}

export interface DefaultMarketPolicy {
    royalty: (DefaultRoyalty | undefined)
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

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_MaxWeightInvalid | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

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

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
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
