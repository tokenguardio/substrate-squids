import type {Result, Option} from './support'

export interface EvmLog {
    address: Uint8Array
    topics: Uint8Array[]
    data: Uint8Array
}

export type ExitReason = ExitReason_Succeed | ExitReason_Error | ExitReason_Revert | ExitReason_Fatal

export interface ExitReason_Succeed {
    __kind: 'Succeed'
    value: ExitSucceed
}

export interface ExitReason_Error {
    __kind: 'Error'
    value: ExitError
}

export interface ExitReason_Revert {
    __kind: 'Revert'
    value: ExitRevert
}

export interface ExitReason_Fatal {
    __kind: 'Fatal'
    value: ExitFatal
}

export type DispatchResult = DispatchResult_Ok | DispatchResult_Err

export interface DispatchResult_Ok {
    __kind: 'Ok'
}

export interface DispatchResult_Err {
    __kind: 'Err'
    value: DispatchError
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

export type Proposal = Proposal_System | Proposal_Utility | Proposal_Timestamp | Proposal_Authorship | Proposal_Indices | Proposal_Balances | Proposal_Staking | Proposal_Session | Proposal_Democracy | Proposal_Council | Proposal_Elections | Proposal_Grandpa | Proposal_Treasury | Proposal_Contracts | Proposal_Sudo | Proposal_ImOnline | Proposal_AuthorityDiscovery | Proposal_Offences | Proposal_RandomnessCollectiveFlip | Proposal_Identity | Proposal_Recovery | Proposal_Vesting | Proposal_Scheduler | Proposal_Proxy | Proposal_Multisig | Proposal_Assets | Proposal_TreasuryReward | Proposal_Ethereum | Proposal_EVM | Proposal_ChainBridge | Proposal_EdgeBridge | Proposal_Bounties | Proposal_Tips

export interface Proposal_System {
    __kind: 'System'
    value: SystemCall
}

export interface Proposal_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Proposal_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Proposal_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Proposal_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Proposal_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Proposal_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Proposal_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Proposal_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Proposal_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Proposal_Elections {
    __kind: 'Elections'
    value: ElectionsCall
}

export interface Proposal_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Proposal_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Proposal_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Proposal_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Proposal_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Proposal_AuthorityDiscovery {
    __kind: 'AuthorityDiscovery'
    value: AuthorityDiscoveryCall
}

export interface Proposal_Offences {
    __kind: 'Offences'
    value: OffencesCall
}

export interface Proposal_RandomnessCollectiveFlip {
    __kind: 'RandomnessCollectiveFlip'
    value: RandomnessCollectiveFlipCall
}

export interface Proposal_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Proposal_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Proposal_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Proposal_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Proposal_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Proposal_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Proposal_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Proposal_TreasuryReward {
    __kind: 'TreasuryReward'
    value: TreasuryRewardCall
}

export interface Proposal_Ethereum {
    __kind: 'Ethereum'
    value: EthereumCall
}

export interface Proposal_EVM {
    __kind: 'EVM'
    value: EVMCall
}

export interface Proposal_ChainBridge {
    __kind: 'ChainBridge'
    value: ChainBridgeCall
}

export interface Proposal_EdgeBridge {
    __kind: 'EdgeBridge'
    value: EdgeBridgeCall
}

export interface Proposal_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Proposal_Tips {
    __kind: 'Tips'
    value: TipsCall
}

export interface EthTransaction {
    nonce: bigint
    gasPrice: bigint
    gasLimit: bigint
    action: EthTransactionAction
    value: bigint
    input: Uint8Array
    signature: EthTransactionSignature
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

export type Type_47 = Type_47_System | Type_47_Utility | Type_47_Timestamp | Type_47_Authorship | Type_47_Indices | Type_47_Balances | Type_47_Staking | Type_47_Session | Type_47_Democracy | Type_47_Council | Type_47_Elections | Type_47_Grandpa | Type_47_Treasury | Type_47_Contracts | Type_47_Sudo | Type_47_ImOnline | Type_47_AuthorityDiscovery | Type_47_Offences | Type_47_RandomnessCollectiveFlip | Type_47_Identity | Type_47_Recovery | Type_47_Vesting | Type_47_Scheduler | Type_47_Proxy | Type_47_Multisig | Type_47_Assets | Type_47_TreasuryReward | Type_47_Ethereum | Type_47_EVM | Type_47_ChainBridge | Type_47_EdgeBridge | Type_47_Bounties | Type_47_Tips

export interface Type_47_System {
    __kind: 'System'
    value: SystemCall
}

export interface Type_47_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Type_47_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Type_47_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Type_47_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Type_47_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Type_47_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Type_47_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Type_47_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Type_47_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Type_47_Elections {
    __kind: 'Elections'
    value: ElectionsCall
}

export interface Type_47_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Type_47_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Type_47_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Type_47_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Type_47_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Type_47_AuthorityDiscovery {
    __kind: 'AuthorityDiscovery'
    value: AuthorityDiscoveryCall
}

export interface Type_47_Offences {
    __kind: 'Offences'
    value: OffencesCall
}

export interface Type_47_RandomnessCollectiveFlip {
    __kind: 'RandomnessCollectiveFlip'
    value: RandomnessCollectiveFlipCall
}

export interface Type_47_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Type_47_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Type_47_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Type_47_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Type_47_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Type_47_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Type_47_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Type_47_TreasuryReward {
    __kind: 'TreasuryReward'
    value: TreasuryRewardCall
}

export interface Type_47_Ethereum {
    __kind: 'Ethereum'
    value: EthereumCall
}

export interface Type_47_EVM {
    __kind: 'EVM'
    value: EVMCall
}

export interface Type_47_ChainBridge {
    __kind: 'ChainBridge'
    value: ChainBridgeCall
}

export interface Type_47_EdgeBridge {
    __kind: 'EdgeBridge'
    value: EdgeBridgeCall
}

export interface Type_47_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Type_47_Tips {
    __kind: 'Tips'
    value: TipsCall
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Governance | ProxyType_Staking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

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

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

export type ExitSucceed = ExitSucceed_Stopped | ExitSucceed_Returned | ExitSucceed_Suicided

export interface ExitSucceed_Stopped {
    __kind: 'Stopped'
}

export interface ExitSucceed_Returned {
    __kind: 'Returned'
}

export interface ExitSucceed_Suicided {
    __kind: 'Suicided'
}

export type ExitError = ExitError_StackUnderflow | ExitError_StackOverflow | ExitError_InvalidJump | ExitError_InvalidRange | ExitError_DesignatedInvalid | ExitError_CallTooDeep | ExitError_CreateCollision | ExitError_CreateContractLimit | ExitError_OutOfOffset | ExitError_OutOfGas | ExitError_OutOfFund | ExitError_PCUnderflow | ExitError_CreateEmpty | ExitError_Other

export interface ExitError_StackUnderflow {
    __kind: 'StackUnderflow'
}

export interface ExitError_StackOverflow {
    __kind: 'StackOverflow'
}

export interface ExitError_InvalidJump {
    __kind: 'InvalidJump'
}

export interface ExitError_InvalidRange {
    __kind: 'InvalidRange'
}

export interface ExitError_DesignatedInvalid {
    __kind: 'DesignatedInvalid'
}

export interface ExitError_CallTooDeep {
    __kind: 'CallTooDeep'
}

export interface ExitError_CreateCollision {
    __kind: 'CreateCollision'
}

export interface ExitError_CreateContractLimit {
    __kind: 'CreateContractLimit'
}

export interface ExitError_OutOfOffset {
    __kind: 'OutOfOffset'
}

export interface ExitError_OutOfGas {
    __kind: 'OutOfGas'
}

export interface ExitError_OutOfFund {
    __kind: 'OutOfFund'
}

export interface ExitError_PCUnderflow {
    __kind: 'PCUnderflow'
}

export interface ExitError_CreateEmpty {
    __kind: 'CreateEmpty'
}

export interface ExitError_Other {
    __kind: 'Other'
    value: string
}

export type ExitRevert = ExitRevert_Reverted

export interface ExitRevert_Reverted {
    __kind: 'Reverted'
}

export type ExitFatal = ExitFatal_NotSupported | ExitFatal_UnhandledInterrupt | ExitFatal_CallErrorAsFatal | ExitFatal_Other

export interface ExitFatal_NotSupported {
    __kind: 'NotSupported'
}

export interface ExitFatal_UnhandledInterrupt {
    __kind: 'UnhandledInterrupt'
}

export interface ExitFatal_CallErrorAsFatal {
    __kind: 'CallErrorAsFatal'
    value: ExitError
}

export interface ExitFatal_Other {
    __kind: 'Other'
    value: string
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: DispatchErrorModule
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_suicide

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
 *  - Base Weight: 0.665 µs, independent of remark length.
 *  - No DB operations.
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
 *  Kill the sending account, assuming there are no references outstanding and the composite
 *  data is equal to its default value.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage read and deletion.
 *  --------------------
 *  Base Weight: 8.626 µs
 *  No DB Read or Write operations because caller is already in overlay
 *  # </weight>
 */
export interface SystemCall_suicide {
    __kind: 'suicide'
}

export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all

/**
 *  Send a batch of dispatch calls.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin.
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
    calls: Type_47[]
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
    call: Type_47
}

/**
 *  Send a batch of dispatch calls and atomically execute them.
 *  The whole transaction will rollback and fail if any of the calls failed.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin.
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
    calls: Type_47[]
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

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export type IndicesCall = IndicesCall_claim | IndicesCall_transfer | IndicesCall_free | IndicesCall_force_transfer | IndicesCall_freeze

/**
 *  Assign an previously unassigned index.
 * 
 *  Payment: `Deposit` is reserved from the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `index`: the index to be claimed. This must not be in use.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: number
}

/**
 *  Assign an index already owned by the sender to another account. The balance reservation
 *  is effectively transferred to the new account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `index`: the index to be re-assigned. This must be owned by the sender.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One transfer operation.
 *  - One event.
 *  -------------------
 *  - DB Weight:
 *     - Reads: Indices Accounts, System Account (recipient)
 *     - Writes: Indices Accounts, System Account (recipient)
 *  # </weight>
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: Uint8Array
    index: number
}

/**
 *  Free up an index owned by the sender.
 * 
 *  Payment: Any previous deposit placed for the index is unreserved in the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must own the index.
 * 
 *  - `index`: the index to be freed. This must be owned by the sender.
 * 
 *  Emits `IndexFreed` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: number
}

/**
 *  Force an index to an account. This doesn't require a deposit. If the index is already
 *  held, then any deposit is reimbursed to its current owner.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `index`: the index to be (re-)assigned.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 *  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight:
 *     - Reads: Indices Accounts, System Account (original owner)
 *     - Writes: Indices Accounts, System Account (original owner)
 *  # </weight>
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: Uint8Array
    index: number
    freeze: boolean
}

/**
 *  Freeze an index so it will always point to the sender account. This consumes the deposit.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must have a
 *  non-frozen account `index`.
 * 
 *  - `index`: the index to be frozen in place.
 * 
 *  Emits `IndexFrozen` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one slash operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: number
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive

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
 *  [`transfer`]: struct.Module.html#method.transfer
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

export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_nominate | StakingCall_chill | StakingCall_set_payee | StakingCall_set_controller | StakingCall_set_validator_count | StakingCall_increase_validator_count | StakingCall_scale_validator_count | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash | StakingCall_payout_stakers | StakingCall_rebond | StakingCall_set_history_depth | StakingCall_reap_stash | StakingCall_submit_election_solution | StakingCall_submit_election_solution_unsigned

/**
 *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
 *  be the account that controls it.
 * 
 *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Moderate complexity.
 *  - O(1).
 *  - Three extra DB entries.
 * 
 *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
 *  ------------------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
 *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_bond {
    __kind: 'bond'
    controller: LookupSource
    value: bigint
    payee: RewardDestination
}

/**
 *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
 *  for staking.
 * 
 *  Use this if there are additional funds in your stash account that you wish to bond.
 *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
 *  that can be added.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller and
 *  it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - O(1).
 *  - One DB entry.
 *  ------------
 *  DB Weight:
 *  - Read: Era Election Status, Bonded, Ledger, [Origin Account], Locks
 *  - Write: [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 *  period ends. If this leaves an amount actively bonded less than
 *  T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 *  the funds out of management ready for transfer.
 * 
 *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
 *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
 *  to be called first to remove some of the chunks (if possible).
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Unbonded`.
 * 
 *  See also [`Call::withdraw_unbonded`].
 * 
 *  # <weight>
 *  - Independent of the arguments. Limited but potentially exploitable complexity.
 *  - Contains a limited number of reads.
 *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
 *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
 *    The only way to clean the aforementioned storage item is also user-controlled via
 *    `withdraw_unbonded`.
 *  - One DB entry.
 *  ----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: EraElectionStatus, Ledger, CurrentEra, Locks, BalanceOf Stash,
 *  - Write: Locks, Ledger, BalanceOf Stash,
 *  </weight>
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 *  Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 *  This essentially frees up that balance to be used by the stash account to do
 *  whatever it wants.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Withdrawn`.
 * 
 *  See also [`Call::unbond`].
 * 
 *  # <weight>
 *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
 *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
 *   indirectly user-controlled. See [`unbond`] for more detail.
 *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
 *  - Writes are limited to the `origin` account key.
 *  ---------------
 *  Complexity O(S) where S is the number of slashing spans to remove
 *  Update:
 *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
 *  - Writes: [Origin Account], Locks, Ledger
 *  Kill:
 *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin
 *    Account], Locks, BalanceOf stash
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
 *    [Origin Account], Locks, BalanceOf stash.
 *  - Writes Each: SpanSlash * S
 *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
 *  # </weight>
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 *  Declare the desire to validate for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  -----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Era Election Status, Ledger
 *  - Write: Nominators, Validators
 *  # </weight>
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 *  Declare the desire to nominate `targets` for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era. This can only be called when
 *  [`EraElectionStatus`] is `Closed`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of `targets` (N)
 *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
 *  - Both the reads and writes follow a similar pattern.
 *  ---------
 *  Weight: O(N)
 *  where N is the number of targets
 *  DB Weight:
 *  - Reads: Era Election Status, Ledger, Current Era
 *  - Writes: Validators, Nominators
 *  # </weight>
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: LookupSource[]
}

/**
 *  Declare no desire to either validate or nominate.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains one read.
 *  - Writes are limited to the `origin` account key.
 *  --------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: EraElectionStatus, Ledger
 *  - Write: Validators, Nominators
 *  # </weight>
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 *  (Re-)set the payment target for a controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ---------
 *  - Weight: O(1)
 *  - DB Weight:
 *      - Read: Ledger
 *      - Write: Payee
 *  # </weight>
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 *  (Re-)set the controller of a stash.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
 *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
 *  # </weight>
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
    controller: LookupSource
}

/**
 *  Sets the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  Write: Validator Count
 *  # </weight>
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 *  Increments the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 *  Scale up the ideal number of validators by a factor.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: number
}

/**
 *  Force there to be no new eras indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Weight: O(1)
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 *  Force there to be a new era at the end of the next session. After this, it will be
 *  reset to normal (non-forced) behaviour.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Weight: O(1)
 *  - Write ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 *  Set the validators who cannot be slashed (if any).
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - O(V)
 *  - Write: Invulnerables
 *  # </weight>
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: Uint8Array[]
}

/**
 *  Force a current staker to become completely unstaked, immediately.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  O(S) where S is the number of slashing spans to be removed
 *  Reads: Bonded, Slashing Spans, Account, Locks
 *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
 *  Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 *  Force there to be a new era at the end of sessions indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - Weight: O(1)
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 *  Cancel enactment of a deferred slash.
 * 
 *  Can be called by the `T::SlashCancelOrigin`.
 * 
 *  Parameters: era and indices of the slashes for that era to kill.
 * 
 *  # <weight>
 *  Complexity: O(U + S)
 *  with U unapplied slashes weighted with U=1000
 *  and S is the number of slash indices to be canceled.
 *  - Read: Unapplied Slashes
 *  - Write: Unapplied Slashes
 *  # </weight>
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 *  Pay out all the stakers behind a single validator for a single era.
 * 
 *  - `validator_stash` is the stash account of the validator. Their nominators, up to
 *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
 *  - `era` may be any era between `[current_era - history_depth; current_era]`.
 * 
 *  The origin of this call must be _Signed_. Any account can call this function, even if
 *  it is not one of the stakers.
 * 
 *  This can only be called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
 *  - Contains a limited number of reads and writes.
 *  -----------
 *  N is the Number of payouts for the validator (including the validator)
 *  Weight:
 *  - Reward Destination Staked: O(N)
 *  - Reward Destination Controller (Creating): O(N)
 *  DB Weight:
 *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
 *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
 *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
 *  - Write Each: System Account, Locks, Ledger (3 items)
 * 
 *    NOTE: weights are assuming that payouts are made to alive stash account (Staked).
 *    Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
 *  # </weight>
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: Uint8Array
    era: number
}

/**
 *  Rebond a portion of the stash scheduled to be unlocked.
 * 
 *  The dispatch origin must be signed by the controller, and it can be only called when
 *  [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Time complexity: O(L), where L is unlocking chunks
 *  - Bounded by `MAX_UNLOCKING_CHUNKS`.
 *  - Storage changes: Can't increase storage, only decrease it.
 *  ---------------
 *  - DB Weight:
 *      - Reads: EraElectionStatus, Ledger, Locks, [Origin Account]
 *      - Writes: [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 *  Set `HistoryDepth` value. This function will delete any history information
 *  when `HistoryDepth` is reduced.
 * 
 *  Parameters:
 *  - `new_history_depth`: The new history depth you would like to set.
 *  - `era_items_deleted`: The number of items that will be deleted by this dispatch.
 *     This should report all the storage items that will be deleted by clearing old
 *     era history. Needed to report an accurate weight for the dispatch. Trusted by
 *     `Root` to report an accurate number.
 * 
 *  Origin must be root.
 * 
 *  # <weight>
 *  - E: Number of history depths removed, i.e. 10 -> 7 = 3
 *  - Weight: O(E)
 *  - DB Weight:
 *      - Reads: Current Era, History Depth
 *      - Writes: History Depth
 *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
 *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
 *  # </weight>
 */
export interface StakingCall_set_history_depth {
    __kind: 'set_history_depth'
    newHistoryDepth: number
    eraItemsDeleted: number
}

/**
 *  Remove all data structure concerning a staker/stash once its balance is zero.
 *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
 *  and the target `stash` must have no funds left.
 * 
 *  This can be called from any origin.
 * 
 *  - `stash`: The stash account to reap. Its balance must be zero.
 * 
 *  # <weight>
 *  Complexity: O(S) where S is the number of slashing spans on the account.
 *  DB Weight:
 *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
 *  - Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 *  Submit an election result to the chain. If the solution:
 * 
 *  1. is valid.
 *  2. has a better score than a potentially existing solution on chain.
 * 
 *  then, it will be _put_ on chain.
 * 
 *  A solution consists of two pieces of data:
 * 
 *  1. `winners`: a flat vector of all the winners of the round.
 *  2. `assignments`: the compact version of an assignment vector that encodes the edge
 *     weights.
 * 
 *  Both of which may be computed using _phragmen_, or any other algorithm.
 * 
 *  Additionally, the submitter must provide:
 * 
 *  - The `score` that they claim their solution has.
 * 
 *  Both validators and nominators will be represented by indices in the solution. The
 *  indices should respect the corresponding types ([`ValidatorIndex`] and
 *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
 *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
 *  solution to be rejected. These two storage items are set during the election window and
 *  may be used to determine the indices.
 * 
 *  A solution is valid if:
 * 
 *  0. It is submitted when [`EraElectionStatus`] is `Open`.
 *  1. Its claimed score is equal to the score computed on-chain.
 *  2. Presents the correct number of winners.
 *  3. All indexes must be value according to the snapshot vectors. All edge values must
 *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
 *     or billion).
 *  4. For each edge, all targets are actually nominated by the voter.
 *  5. Has correct self-votes.
 * 
 *  A solutions score is consisted of 3 parameters:
 * 
 *  1. `min { support.total }` for each support of a winner. This value should be maximized.
 *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
 *  3. `sum { support.total^2 }` for each support of a winner. This value should be
 *     minimized (to ensure less variance)
 * 
 *  # <weight>
 *  The transaction is assumed to be the longest path, a better solution.
 *    - Initial solution is almost the same.
 *    - Worse solution is retraced in pre-dispatch-checks which sets its own weight.
 *  # </weight>
 */
export interface StakingCall_submit_election_solution {
    __kind: 'submit_election_solution'
    winners: number[]
    compact: CompactAssignments
    score: bigint[]
    era: number
    size: ElectionSize
}

/**
 *  Unsigned version of `submit_election_solution`.
 * 
 *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
 *  from the local node to be included. In other words, only the block author can include a
 *  transaction in the block.
 * 
 *  # <weight>
 *  See [`submit_election_solution`].
 *  # </weight>
 */
export interface StakingCall_submit_election_solution_unsigned {
    __kind: 'submit_election_solution_unsigned'
    winners: number[]
    compact: CompactAssignments
    score: bigint[]
    era: number
    size: ElectionSize
}

export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 *  Sets the session key(s) of the function caller to `keys`.
 *  Allows an account to set its session key prior to becoming a validator.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 *  - DbWrites: `origin account`, `NextKeys`
 *  - DbReads per key id: `KeyOwner`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array]
    proof: Uint8Array
}

/**
 *  Removes any session key(s) of the function caller.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)` in number of key types.
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 *  - DbWrites: `NextKeys`, `origin account`
 *  - DbWrites per key id: `KeyOwnder`
 *  # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_reap_preimage | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_enact_proposal | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

/**
 *  Propose a sensitive action to be taken.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender must
 *  have funds to cover the deposit.
 * 
 *  - `proposal_hash`: The hash of the proposal preimage.
 *  - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 *  Emits `Proposed`.
 * 
 *  Weight: `O(p)`
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposalHash: Uint8Array
    value: bigint
}

/**
 *  Signals agreement with a particular proposal.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender
 *  must have funds to cover the deposit, equal to the original deposit.
 * 
 *  - `proposal`: The index of the proposal to second.
 *  - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *    proposal. Extrinsic is weighted according to this value with no refund.
 * 
 *  Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
    secondsUpperBound: number
}

/**
 *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 *  otherwise it is a vote to keep the status quo.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `ref_index`: The index of the referendum to vote for.
 *  - `vote`: The vote configuration.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

/**
 *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *  referendum.
 * 
 *  The dispatch origin of this call must be `CancellationOrigin`.
 * 
 *  -`ref_index`: The index of the referendum to cancel.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 *  Schedule a referendum to be tabled once it is legal to schedule an external
 *  referendum.
 * 
 *  The dispatch origin of this call must be `ExternalOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *    Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposalHash: Uint8Array
}

/**
 *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 *  an external referendum.
 * 
 *  The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposalHash: Uint8Array
}

/**
 *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 *  schedule an external referendum.
 * 
 *  The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposalHash: Uint8Array
}

/**
 *  Schedule the currently externally-proposed majority-carries referendum to be tabled
 *  immediately. If there is no externally-proposed referendum currently, or if there is one
 *  but it is not a majority-carries referendum then it fails.
 * 
 *  The dispatch of this call must be `FastTrackOrigin`.
 * 
 *  - `proposal_hash`: The hash of the current external proposal.
 *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *    `FastTrackVotingPeriod` if too low.
 *  - `delay`: The number of block after voting has ended in approval and this should be
 *    enacted. This doesn't have a minimum amount.
 * 
 *  Emits `Started`.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Uint8Array
    votingPeriod: number
    delay: number
}

/**
 *  Veto and blacklist the external proposal hash.
 * 
 *  The dispatch origin of this call must be `VetoOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 *  Emits `Vetoed`.
 * 
 *  Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Uint8Array
}

/**
 *  Remove a referendum.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `ref_index`: The index of the referendum to cancel.
 * 
 *  # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 *  Cancel a proposal queued for enactment.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `which`: The index of the referendum to cancel.
 * 
 *  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
    __kind: 'cancel_queued'
    which: number
}

/**
 *  Delegate the voting power (with some given conviction) of the sending account.
 * 
 *  The balance delegated is locked for as long as it's delegated, and thereafter for the
 *  time appropriate for the conviction's lock period.
 * 
 *  The dispatch origin of this call must be _Signed_, and the signing account must either:
 *    - be delegating already; or
 *    - have no voting activity (if there is, then it will need to be removed/consolidated
 *      through `reap_vote` or `unvote`).
 * 
 *  - `to`: The account whose voting the `target` account's voting power will follow.
 *  - `conviction`: The conviction that will be attached to the delegated votes. When the
 *    account is undelegated, the funds will be locked for the corresponding period.
 *  - `balance`: The amount of the account's balance to be used in delegating. This must
 *    not be more than the account's current balance.
 * 
 *  Emits `Delegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: Uint8Array
    conviction: Conviction
    balance: bigint
}

/**
 *  Undelegate the voting power of the sending account.
 * 
 *  Tokens may be unlocked following once an amount of time consistent with the lock period
 *  of the conviction with which the delegation was issued.
 * 
 *  The dispatch origin of this call must be _Signed_ and the signing account must be
 *  currently delegating.
 * 
 *  Emits `Undelegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 *  Clears all public proposals.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 *  in the dispatch queue but does require a deposit, returned once enacted.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
    __kind: 'note_preimage'
    encodedProposal: Uint8Array
}

/**
 *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
    __kind: 'note_preimage_operational'
    encodedProposal: Uint8Array
}

/**
 *  Register the preimage for an upcoming proposal. This requires the proposal to be
 *  in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 *  the preimage has not been uploaded before and matches some imminent proposal,
 *  no fee is paid.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
    __kind: 'note_imminent_preimage'
    encodedProposal: Uint8Array
}

/**
 *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
    __kind: 'note_imminent_preimage_operational'
    encodedProposal: Uint8Array
}

/**
 *  Remove an expired proposal preimage and collect the deposit.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `proposal_hash`: The preimage hash of a proposal.
 *  - `proposal_length_upper_bound`: an upper bound on length of the proposal.
 *    Extrinsic is weighted according to this value with no refund.
 * 
 *  This will only work after `VotingPeriod` blocks from the time that the preimage was
 *  noted, if it's the same account doing it. If it's a different account, then it'll only
 *  work an additional `EnactmentPeriod` later.
 * 
 *  Emits `PreimageReaped`.
 * 
 *  Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
    __kind: 'reap_preimage'
    proposalHash: Uint8Array
    proposalLenUpperBound: number
}

/**
 *  Unlock tokens that have an expired lock.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account to remove the lock on.
 * 
 *  Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: Uint8Array
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If:
 *  - the referendum was cancelled, or
 *  - the referendum is ongoing, or
 *  - the referendum has ended such that
 *    - the vote of the account was in opposition to the result; or
 *    - there was no conviction to the account's vote; or
 *    - the account made a split vote
 *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
 *  funds being available.
 * 
 *  If, however, the referendum has ended and:
 *  - it finished corresponding to the vote of the account, and
 *  - the account made a standard vote with conviction, and
 *  - the lock period of the conviction is not over
 *  ...then the lock will be aggregated into the overall account's lock, which may involve
 *  *overlocking* (where the two locks are combined into a single lock that is the maximum
 *  of both the amount locked and the time is it locked for).
 * 
 *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
 *  registered for referendum `index`.
 * 
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If the `target` is equal to the signer, then this function is exactly equivalent to
 *  `remove_vote`. If not equal to the signer, then the vote must have expired,
 *  either because the referendum was cancelled, because the voter lost the referendum or
 *  because the conviction period is over.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account of the vote to be removed; this account must have voted for
 *    referendum `index`.
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: Uint8Array
    index: number
}

/**
 *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
    __kind: 'enact_proposal'
    proposalHash: Uint8Array
    index: number
}

/**
 *  Permanently place a proposal into the blacklist. This prevents it from ever being
 *  proposed again.
 * 
 *  If called on a queued public or external proposal, then this will result in it being
 *  removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 *  then it will be cancelled.
 * 
 *  The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 *  - `proposal_hash`: The proposal hash to blacklist permanently.
 *  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 *  cancelled.
 * 
 *  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *    reasonable value).
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: Uint8Array
    maybeRefIndex: (number | undefined)
}

/**
 *  Remove a proposal.
 * 
 *  The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 *  - `prop_index`: The index of the proposal to cancel.
 * 
 *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close | CouncilCall_disapprove_proposal

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
export interface CouncilCall_set_members {
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
export interface CouncilCall_execute {
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
export interface CouncilCall_propose {
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
export interface CouncilCall_vote {
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
export interface CouncilCall_close {
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
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

export type ElectionsCall = ElectionsCall_vote | ElectionsCall_remove_voter | ElectionsCall_report_defunct_voter | ElectionsCall_submit_candidacy | ElectionsCall_renounce_candidacy | ElectionsCall_remove_member

/**
 *  Vote for a set of candidates for the upcoming round of election. This can be called to
 *  set the initial votes, or update already existing votes.
 * 
 *  Upon initial voting, `value` units of `who`'s balance is locked and a bond amount is
 *  reserved.
 * 
 *  The `votes` should:
 *    - not be empty.
 *    - be less than the number of possible candidates. Note that all current members and
 *      runners-up are also automatically candidates for the next round.
 * 
 *  It is the responsibility of the caller to not place all of their balance into the lock
 *  and keep some for further transactions.
 * 
 *  # <weight>
 *  Base weight: 47.93 µs
 *  State reads:
 *  	- Candidates.len() + Members.len() + RunnersUp.len()
 *  	- Voting (is_voter)
 *  	- Lock
 *  	- [AccountBalance(who) (unreserve + total_balance)]
 *  State writes:
 *  	- Voting
 *  	- Lock
 *  	- [AccountBalance(who) (unreserve -- only when creating a new voter)]
 *  # </weight>
 */
export interface ElectionsCall_vote {
    __kind: 'vote'
    votes: Uint8Array[]
    value: bigint
}

/**
 *  Remove `origin` as a voter. This removes the lock and returns the bond.
 * 
 *  # <weight>
 *  Base weight: 36.8 µs
 *  All state access is from do_remove_voter.
 *  State reads:
 *  	- Voting
 *  	- [AccountData(who)]
 *  State writes:
 *  	- Voting
 *  	- Locks
 *  	- [AccountData(who)]
 *  # </weight>
 */
export interface ElectionsCall_remove_voter {
    __kind: 'remove_voter'
}

/**
 *  Report `target` for being an defunct voter. In case of a valid report, the reporter is
 *  rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and
 *  their bond is slashed.
 * 
 *  A defunct voter is defined to be:
 *    - a voter whose current submitted votes are all invalid. i.e. all of them are no
 *      longer a candidate nor an active member or a runner-up.
 * 
 * 
 *  The origin must provide the number of current candidates and votes of the reported target
 *  for the purpose of accurate weight calculation.
 * 
 *  # <weight>
 *  No Base weight based on min square analysis.
 *  Complexity of candidate_count: 1.755 µs
 *  Complexity of vote_count: 18.51 µs
 *  State reads:
 *   	- Voting(reporter)
 *   	- Candidate.len()
 *   	- Voting(Target)
 *   	- Candidates, Members, RunnersUp (is_defunct_voter)
 *  State writes:
 *  	- Lock(reporter || target)
 *  	- [AccountBalance(reporter)] + AccountBalance(target)
 *  	- Voting(reporter || target)
 *  Note: the db access is worse with respect to db, which is when the report is correct.
 *  # </weight>
 */
export interface ElectionsCall_report_defunct_voter {
    __kind: 'report_defunct_voter'
    defunct: DefunctVoter
}

/**
 *  Submit oneself for candidacy.
 * 
 *  A candidate will either:
 *    - Lose at the end of the term and forfeit their deposit.
 *    - Win and become a member. Members will eventually get their stash back.
 *    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully
 *      removed.
 * 
 *  # <weight>
 *  Base weight = 33.33 µs
 *  Complexity of candidate_count: 0.375 µs
 *  State reads:
 *  	- Candidates
 *  	- Members
 *  	- RunnersUp
 *  	- [AccountBalance(who)]
 *  State writes:
 *  	- [AccountBalance(who)]
 *  	- Candidates
 *  # </weight>
 */
export interface ElectionsCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
}

/**
 *  Renounce one's intention to be a candidate for the next election round. 3 potential
 *  outcomes exist:
 *  - `origin` is a candidate and not elected in any set. In this case, the bond is
 *    unreserved, returned and origin is removed as a candidate.
 *  - `origin` is a current runner-up. In this case, the bond is unreserved, returned and
 *    origin is removed as a runner-up.
 *  - `origin` is a current member. In this case, the bond is unreserved and origin is
 *    removed as a member, consequently not being a candidate for the next round anymore.
 *    Similar to [`remove_voter`], if replacement runners exists, they are immediately used.
 *  <weight>
 *  If a candidate is renouncing:
 *  	Base weight: 17.28 µs
 *  	Complexity of candidate_count: 0.235 µs
 *  	State reads:
 *  		- Candidates
 *  		- [AccountBalance(who) (unreserve)]
 *  	State writes:
 *  		- Candidates
 *  		- [AccountBalance(who) (unreserve)]
 *  If member is renouncing:
 *  	Base weight: 46.25 µs
 *  	State reads:
 *  		- Members, RunnersUp (remove_and_replace_member),
 *  		- [AccountData(who) (unreserve)]
 *  	State writes:
 *  		- Members, RunnersUp (remove_and_replace_member),
 *  		- [AccountData(who) (unreserve)]
 *  If runner is renouncing:
 *  	Base weight: 46.25 µs
 *  	State reads:
 *  		- RunnersUp (remove_and_replace_member),
 *  		- [AccountData(who) (unreserve)]
 *  	State writes:
 *  		- RunnersUp (remove_and_replace_member),
 *  		- [AccountData(who) (unreserve)]
 *  </weight>
 */
export interface ElectionsCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
}

/**
 *  Remove a particular member from the set. This is effective immediately and the bond of
 *  the outgoing member is slashed.
 * 
 *  If a runner-up is available, then the best runner-up will be removed and replaces the
 *  outgoing member. Otherwise, a new phragmen election is started.
 * 
 *  Note that this does not affect the designated block number of the next election.
 * 
 *  # <weight>
 *  If we have a replacement:
 *  	- Base weight: 50.93 µs
 *  	- State reads:
 *  		- RunnersUp.len()
 *  		- Members, RunnersUp (remove_and_replace_member)
 *  	- State writes:
 *  		- Members, RunnersUp (remove_and_replace_member)
 *  Else, since this is a root call and will go into phragmen, we assume full block for now.
 *  # </weight>
 */
export interface ElectionsCall_remove_member {
    __kind: 'remove_member'
    who: LookupSource
    hasReplacement: boolean
}

export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 * 
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Note that the current authority set of the GRANDPA finality gadget has
 *  stalled. This will trigger a forced authority set change at the beginning
 *  of the next session, to be enacted `delay` blocks after that. The delay
 *  should be high enough to safely assume that the block signalling the
 *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
 *  will start the new authority set using the given finalized block as base.
 *  Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
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

export type ContractsCall = ContractsCall_update_schedule | ContractsCall_put_code | ContractsCall_call | ContractsCall_instantiate | ContractsCall_claim_surcharge

/**
 *  Updates the schedule for metering contracts.
 * 
 *  The schedule must have a greater version than the stored schedule.
 */
export interface ContractsCall_update_schedule {
    __kind: 'update_schedule'
    schedule: Schedule
}

/**
 *  Stores the given binary Wasm code into the chain's storage and returns its `codehash`.
 *  You can instantiate contracts only with stored code.
 */
export interface ContractsCall_put_code {
    __kind: 'put_code'
    code: Uint8Array
}

/**
 *  Makes a call to an account, optionally transferring some balance.
 * 
 *  * If the account is a smart-contract account, the associated code will be
 *  executed and any value will be transferred.
 *  * If the account is a regular account, any value will be transferred.
 *  * If no account exists and the call value is not less than `existential_deposit`,
 *  a regular account will be created and any value will be transferred.
 */
export interface ContractsCall_call {
    __kind: 'call'
    dest: LookupSource
    value: bigint
    gasLimit: bigint
    data: Uint8Array
}

/**
 *  Instantiates a new contract from the `code_hash` generated by `put_code`,
 *  optionally transferring some balance.
 * 
 *  The supplied `salt` is used for contract address deriviation. See `fn contract_address`.
 * 
 *  Instantiation is executed as follows:
 * 
 *  - The destination address is computed based on the sender, code_hash and the salt.
 *  - The smart-contract account is created at the computed address.
 *  - The `ctor_code` is executed in the context of the newly-created account. Buffer returned
 *    after the execution is saved as the `code` of the account. That code will be invoked
 *    upon any call received by this account.
 *  - The contract is initialized.
 */
export interface ContractsCall_instantiate {
    __kind: 'instantiate'
    endowment: bigint
    gasLimit: bigint
    codeHash: Uint8Array
    data: Uint8Array
    salt: Uint8Array
}

/**
 *  Allows block producers to claim a small reward for evicting a contract. If a block producer
 *  fails to do so, a regular users will be allowed to claim the reward.
 * 
 *  If contract is not evicted as a result of this call, [`Error::ContractNotEvictable`]
 *  is returned and the sender is not eligible for the reward.
 */
export interface ContractsCall_claim_surcharge {
    __kind: 'claim_surcharge'
    dest: Uint8Array
    auxSender: (Uint8Array | undefined)
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
    call: Type_47
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
    call: Type_47
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
    call: Type_47
}

export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 *  # <weight>
 *  - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
 *    and E is length of `heartbeat.network_state.external_address`
 *    - `O(K)`: decoding of length `K`
 *    - `O(E)`: decoding/encoding of length `E`
 *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
 *    `ReceivedHeartbeats`
 *  - DbWrites: `ReceivedHeartbeats`
 *  # </weight>
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Uint8Array
}

export type AuthorityDiscoveryCall = never

export type OffencesCall = never

export type RandomnessCollectiveFlipCall = never

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

export type RecoveryCall = RecoveryCall_as_recovered | RecoveryCall_set_recovered | RecoveryCall_create_recovery | RecoveryCall_initiate_recovery | RecoveryCall_vouch_recovery | RecoveryCall_claim_recovery | RecoveryCall_close_recovery | RecoveryCall_remove_recovery | RecoveryCall_cancel_recovered

/**
 *  Send a call through a recovered account.
 * 
 *  The dispatch origin for this call must be _Signed_ and registered to
 *  be able to make calls on behalf of the recovered account.
 * 
 *  Parameters:
 *  - `account`: The recovered account you want to make a call on-behalf-of.
 *  - `call`: The call you want to make with the recovered account.
 * 
 *  # <weight>
 *  - The weight of the `call` + 10,000.
 *  - One storage lookup to check account is recovered by `who`. O(1)
 *  # </weight>
 */
export interface RecoveryCall_as_recovered {
    __kind: 'as_recovered'
    account: Uint8Array
    call: Type_47
}

/**
 *  Allow ROOT to bypass the recovery process and set an a rescuer account
 *  for a lost account directly.
 * 
 *  The dispatch origin for this call must be _ROOT_.
 * 
 *  Parameters:
 *  - `lost`: The "lost account" to be recovered.
 *  - `rescuer`: The "rescuer account" which can call as the lost account.
 * 
 *  # <weight>
 *  - One storage write O(1)
 *  - One event
 *  # </weight>
 */
export interface RecoveryCall_set_recovered {
    __kind: 'set_recovered'
    lost: Uint8Array
    rescuer: Uint8Array
}

/**
 *  Create a recovery configuration for your account. This makes your account recoverable.
 * 
 *  Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
 *  will be reserved for storing the recovery configuration. This deposit is returned
 *  in full when the user calls `remove_recovery`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `friends`: A list of friends you trust to vouch for recovery attempts.
 *    Should be ordered and contain no duplicate values.
 *  - `threshold`: The number of friends that must vouch for a recovery attempt
 *    before the account can be recovered. Should be less than or equal to
 *    the length of the list of friends.
 *  - `delay_period`: The number of blocks after a recovery attempt is initialized
 *    that needs to pass before the account can be recovered.
 * 
 *  # <weight>
 *  - Key: F (len of friends)
 *  - One storage read to check that account is not already recoverable. O(1).
 *  - A check that the friends list is sorted and unique. O(F)
 *  - One currency reserve operation. O(X)
 *  - One storage write. O(1). Codec O(F).
 *  - One event.
 * 
 *  Total Complexity: O(F + X)
 *  # </weight>
 */
export interface RecoveryCall_create_recovery {
    __kind: 'create_recovery'
    friends: Uint8Array[]
    threshold: number
    delayPeriod: number
}

/**
 *  Initiate the process for recovering a recoverable account.
 * 
 *  Payment: `RecoveryDeposit` balance will be reserved for initiating the
 *  recovery process. This deposit will always be repatriated to the account
 *  trying to be recovered. See `close_recovery`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `account`: The lost account that you want to recover. This account
 *    needs to be recoverable (i.e. have a recovery configuration).
 * 
 *  # <weight>
 *  - One storage read to check that account is recoverable. O(F)
 *  - One storage read to check that this recovery process hasn't already started. O(1)
 *  - One currency reserve operation. O(X)
 *  - One storage read to get the current block number. O(1)
 *  - One storage write. O(1).
 *  - One event.
 * 
 *  Total Complexity: O(F + X)
 *  # </weight>
 */
export interface RecoveryCall_initiate_recovery {
    __kind: 'initiate_recovery'
    account: Uint8Array
}

/**
 *  Allow a "friend" of a recoverable account to vouch for an active recovery
 *  process for that account.
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a "friend"
 *  for the recoverable account.
 * 
 *  Parameters:
 *  - `lost`: The lost account that you want to recover.
 *  - `rescuer`: The account trying to rescue the lost account that you
 *    want to vouch for.
 * 
 *  The combination of these two parameters must point to an active recovery
 *  process.
 * 
 *  # <weight>
 *  Key: F (len of friends in config), V (len of vouching friends)
 *  - One storage read to get the recovery configuration. O(1), Codec O(F)
 *  - One storage read to get the active recovery process. O(1), Codec O(V)
 *  - One binary search to confirm caller is a friend. O(logF)
 *  - One binary search to confirm caller has not already vouched. O(logV)
 *  - One storage write. O(1), Codec O(V).
 *  - One event.
 * 
 *  Total Complexity: O(F + logF + V + logV)
 *  # </weight>
 */
export interface RecoveryCall_vouch_recovery {
    __kind: 'vouch_recovery'
    lost: Uint8Array
    rescuer: Uint8Array
}

/**
 *  Allow a successful rescuer to claim their recovered account.
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a "rescuer"
 *  who has successfully completed the account recovery process: collected
 *  `threshold` or more vouches, waited `delay_period` blocks since initiation.
 * 
 *  Parameters:
 *  - `account`: The lost account that you want to claim has been successfully
 *    recovered by you.
 * 
 *  # <weight>
 *  Key: F (len of friends in config), V (len of vouching friends)
 *  - One storage read to get the recovery configuration. O(1), Codec O(F)
 *  - One storage read to get the active recovery process. O(1), Codec O(V)
 *  - One storage read to get the current block number. O(1)
 *  - One storage write. O(1), Codec O(V).
 *  - One event.
 * 
 *  Total Complexity: O(F + V)
 *  # </weight>
 */
export interface RecoveryCall_claim_recovery {
    __kind: 'claim_recovery'
    account: Uint8Array
}

/**
 *  As the controller of a recoverable account, close an active recovery
 *  process for your account.
 * 
 *  Payment: By calling this function, the recoverable account will receive
 *  the recovery deposit `RecoveryDeposit` placed by the rescuer.
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a
 *  recoverable account with an active recovery process for it.
 * 
 *  Parameters:
 *  - `rescuer`: The account trying to rescue this recoverable account.
 * 
 *  # <weight>
 *  Key: V (len of vouching friends)
 *  - One storage read/remove to get the active recovery process. O(1), Codec O(V)
 *  - One balance call to repatriate reserved. O(X)
 *  - One event.
 * 
 *  Total Complexity: O(V + X)
 *  # </weight>
 */
export interface RecoveryCall_close_recovery {
    __kind: 'close_recovery'
    rescuer: Uint8Array
}

/**
 *  Remove the recovery process for your account. Recovered accounts are still accessible.
 * 
 *  NOTE: The user must make sure to call `close_recovery` on all active
 *  recovery attempts before calling this function else it will fail.
 * 
 *  Payment: By calling this function the recoverable account will unreserve
 *  their recovery configuration deposit.
 *  (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a
 *  recoverable account (i.e. has a recovery configuration).
 * 
 *  # <weight>
 *  Key: F (len of friends)
 *  - One storage read to get the prefix iterator for active recoveries. O(1)
 *  - One storage read/remove to get the recovery configuration. O(1), Codec O(F)
 *  - One balance call to unreserved. O(X)
 *  - One event.
 * 
 *  Total Complexity: O(F + X)
 *  # </weight>
 */
export interface RecoveryCall_remove_recovery {
    __kind: 'remove_recovery'
}

/**
 *  Cancel the ability to use `as_recovered` for `account`.
 * 
 *  The dispatch origin for this call must be _Signed_ and registered to
 *  be able to make calls on behalf of the recovered account.
 * 
 *  Parameters:
 *  - `account`: The recovered account you are able to call on-behalf-of.
 * 
 *  # <weight>
 *  - One storage mutation to check account is recovered by `who`. O(1)
 *  # </weight>
 */
export interface RecoveryCall_cancel_recovered {
    __kind: 'cancel_recovered'
    account: Uint8Array
}

export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer

/**
 *  Unlock any vested funds of the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have funds still
 *  locked under this module.
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
 *  locked under this module.
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

export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 *  Anonymously schedule a task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.29 + .126 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda
 *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_47
}

/**
 *  Cancel an anonymously scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.15 + 2.869 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 *  Schedule a named task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 29.6 + .159 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Uint8Array
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_47
}

/**
 *  Cancel a named scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 24.91 + 2.907 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

/**
 *  Anonymously schedule a task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_47
}

/**
 *  Schedule a named task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule_named`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Uint8Array
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_47
}

export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 *  Dispatch the given `call` from an account that the sender is authorised for through
 *  `add_proxy`.
 * 
 *  Removes any corresponding announcement(s).
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *  - `call`: The call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: Uint8Array
    forceProxyType: (ProxyType | undefined)
    call: Type_47
}

/**
 *  Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `proxy`: The account that the `caller` would like to make a proxy.
 *  - `proxy_type`: The permissions allowed for this proxy account.
 *  - `delay`: The announcement period required of the initial proxy. Will generally be
 *  zero.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 *  Unregister a proxy account for the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `proxy`: The account that the `caller` would like to remove as a proxy.
 *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 *  Unregister all proxy accounts for the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  WARNING: This may be called on accounts created by `anonymous`, however if done, then
 *  the unreserved fees will be inaccessible. **All access to this account will be lost.**
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 *  initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 *  Requires a `Signed` origin.
 * 
 *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
 *  new account. This will almost always be the most permissive `ProxyType` possible to
 *  allow for maximum flexibility.
 *  - `index`: A disambiguation index, in case this is called multiple times in the same
 *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 *  want to use `0`.
 *  - `delay`: The announcement period required of the initial proxy. Will generally be
 *  zero.
 * 
 *  Fails with `Duplicate` if this has already been called in this transaction, from the
 *  same sender, with the same parameters.
 * 
 *  Fails if there are insufficient funds to pay for deposit.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 *  TODO: Might be over counting 1 read
 */
export interface ProxyCall_anonymous {
    __kind: 'anonymous'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 *  Removes a previously spawned anonymous proxy.
 * 
 *  WARNING: **All access to this account will be lost.** Any funds held in it will be
 *  inaccessible.
 * 
 *  Requires a `Signed` origin, and the sender account must have been created by a call to
 *  `anonymous` with corresponding parameters.
 * 
 *  - `spawner`: The account that originally called `anonymous` to create this account.
 *  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
 *  - `proxy_type`: The proxy type originally passed to `anonymous`.
 *  - `height`: The height of the chain when the call to `anonymous` was processed.
 *  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
 * 
 *  Fails with `NoPermission` in case the caller is not a previously created anonymous
 *  account whose `anonymous` call has corresponding parameters.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_kill_anonymous {
    __kind: 'kill_anonymous'
    spawner: Uint8Array
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

/**
 *  Publish the hash of a proxy-call that will be made in the future.
 * 
 *  This must be called some number of blocks before the corresponding `proxy` is attempted
 *  if the delay associated with the proxy relationship is greater than zero.
 * 
 *  No more than `MaxPending` announcements may be made at any one time.
 * 
 *  This will take a deposit of `AnnouncementDepositFactor` as well as
 *  `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 *  The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: Uint8Array
    callHash: Uint8Array
}

/**
 *  Remove a given announcement.
 * 
 *  May be called by a proxy account to remove a call they previously announced and return
 *  the deposit.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: Uint8Array
    callHash: Uint8Array
}

/**
 *  Remove the given announcement of a delegate.
 * 
 *  May be called by a target (proxied) account to remove a call that one of their delegates
 *  (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `delegate`: The account that previously announced the call.
 *  - `call_hash`: The hash of the call to be made.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: Uint8Array
    callHash: Uint8Array
}

/**
 *  Dispatch the given `call` from an account that the sender is authorised for through
 *  `add_proxy`.
 * 
 *  Removes any corresponding announcement(s).
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *  - `call`: The call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: Uint8Array
    real: Uint8Array
    forceProxyType: (ProxyType | undefined)
    call: Type_47
}

export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 *  Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `other_signatories`: The accounts (other than the sender) who are part of the
 *  multi-signature, but do not participate in the approval process.
 *  - `call`: The call to be executed.
 * 
 *  Result is equivalent to the dispatched result.
 * 
 *  # <weight>
 *  O(Z + C) where Z is the length of the call and C its execution weight.
 *  -------------------------------
 *  - DB Weight: None
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Type_47
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  If there are enough, then dispatch the call.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call`: The call to be executed.
 * 
 *  NOTE: Unless this is the final approval, you will generally want to use
 *  `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 *  on success, result is `Ok` and the result from the interior call, if it was executed,
 *  may be found in the deposited `MultisigExecuted` event.
 * 
 *  # <weight>
 *  - `O(S + Z + Call)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - The weight of the `call`.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  -------------------------------
 *  - DB Weight:
 *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Uint8Array
    storeCall: boolean
    maxWeight: bigint
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account]
 *      - Write: Multisig Storage, [Caller Account]
 *  # </weight>
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: bigint
}

/**
 *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 *  for this operation will be unreserved on success.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
 *  transaction for this dispatch.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - One event.
 *  - I/O: 1 read `O(S)`, one remove.
 *  - Storage: removes one item.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 *  # </weight>
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

export type AssetsCall = AssetsCall_create | AssetsCall_force_create | AssetsCall_destroy | AssetsCall_force_destroy | AssetsCall_mint | AssetsCall_burn | AssetsCall_transfer | AssetsCall_force_transfer | AssetsCall_freeze | AssetsCall_thaw | AssetsCall_transfer_ownership | AssetsCall_set_team | AssetsCall_set_max_zombies

/**
 *  Issue a new class of fungible assets from a public origin.
 * 
 *  This new asset class has no assets initially.
 * 
 *  The origin must be Signed and the sender must have sufficient funds free.
 * 
 *  Funds of sender are reserved according to the formula:
 *  `AssetDepositBase + AssetDepositPerZombie * max_zombies`.
 * 
 *  Parameters:
 *  - `id`: The identifier of the new asset. This must not be currently in use to identify
 *  an existing asset.
 *  - `owner`: The owner of this class of assets. The owner has full superuser permissions
 *  over this asset, but may later change and configure the permissions using `transfer_ownership`
 *  and `set_team`.
 *  - `max_zombies`: The total number of accounts which may hold assets in this class yet
 *  have no existential deposit.
 *  - `min_balance`: The minimum balance of this new asset that any single account must
 *  have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 *  Emits `Created` event when successful.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_create {
    __kind: 'create'
    id: number
    admin: LookupSource
    maxZombies: number
    minBalance: bigint
}

/**
 *  Issue a new class of fungible assets from a privileged origin.
 * 
 *  This new asset class has no assets initially.
 * 
 *  The origin must conform to `ForceOrigin`.
 * 
 *  Unlike `create`, no funds are reserved.
 * 
 *  - `id`: The identifier of the new asset. This must not be currently in use to identify
 *  an existing asset.
 *  - `owner`: The owner of this class of assets. The owner has full superuser permissions
 *  over this asset, but may later change and configure the permissions using `transfer_ownership`
 *  and `set_team`.
 *  - `max_zombies`: The total number of accounts which may hold assets in this class yet
 *  have no existential deposit.
 *  - `min_balance`: The minimum balance of this new asset that any single account must
 *  have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 *  Emits `ForceCreated` event when successful.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_force_create {
    __kind: 'force_create'
    id: number
    owner: LookupSource
    maxZombies: number
    minBalance: bigint
}

/**
 *  Destroy a class of fungible assets owned by the sender.
 * 
 *  The origin must be Signed and the sender must be the owner of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 * 
 *  Emits `Destroyed` event when successful.
 * 
 *  Weight: `O(z)` where `z` is the number of zombie accounts.
 */
export interface AssetsCall_destroy {
    __kind: 'destroy'
    id: number
    zombiesWitness: number
}

/**
 *  Destroy a class of fungible assets.
 * 
 *  The origin must conform to `ForceOrigin`.
 * 
 *  - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 * 
 *  Emits `Destroyed` event when successful.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_force_destroy {
    __kind: 'force_destroy'
    id: number
    zombiesWitness: number
}

/**
 *  Mint assets of a particular class.
 * 
 *  The origin must be Signed and the sender must be the Issuer of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to have some amount minted.
 *  - `beneficiary`: The account to be credited with the minted assets.
 *  - `amount`: The amount of the asset to be minted.
 * 
 *  Emits `Destroyed` event when successful.
 * 
 *  Weight: `O(1)`
 *  Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
 */
export interface AssetsCall_mint {
    __kind: 'mint'
    id: number
    beneficiary: LookupSource
    amount: bigint
}

/**
 *  Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 * 
 *  Origin must be Signed and the sender should be the Manager of the asset `id`.
 * 
 *  Bails with `BalanceZero` if the `who` is already dead.
 * 
 *  - `id`: The identifier of the asset to have some amount burned.
 *  - `who`: The account to be debited from.
 *  - `amount`: The maximum amount by which `who`'s balance should be reduced.
 * 
 *  Emits `Burned` with the actual amount burned. If this takes the balance to below the
 *  minimum for the asset, then the amount burned is increased to take it to zero.
 * 
 *  Weight: `O(1)`
 *  Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
 */
export interface AssetsCall_burn {
    __kind: 'burn'
    id: number
    who: LookupSource
    amount: bigint
}

/**
 *  Move some assets from the sender account to another.
 * 
 *  Origin must be Signed.
 * 
 *  - `id`: The identifier of the asset to have some amount transferred.
 *  - `target`: The account to be credited.
 *  - `amount`: The amount by which the sender's balance of assets should be reduced and
 *  `target`'s balance increased. The amount actually transferred may be slightly greater in
 *  the case that the transfer would otherwise take the sender balance above zero but below
 *  the minimum balance. Must be greater than zero.
 * 
 *  Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *  to below the minimum for the asset, then the amount transferred is increased to take it
 *  to zero.
 * 
 *  Weight: `O(1)`
 *  Modes: Pre-existence of `target`; Post-existence of sender; Prior & post zombie-status
 *  of sender; Account pre-existence of `target`.
 */
export interface AssetsCall_transfer {
    __kind: 'transfer'
    id: number
    target: LookupSource
    amount: bigint
}

/**
 *  Move some assets from one account to another.
 * 
 *  Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to have some amount transferred.
 *  - `source`: The account to be debited.
 *  - `dest`: The account to be credited.
 *  - `amount`: The amount by which the `source`'s balance of assets should be reduced and
 *  `dest`'s balance increased. The amount actually transferred may be slightly greater in
 *  the case that the transfer would otherwise take the `source` balance above zero but
 *  below the minimum balance. Must be greater than zero.
 * 
 *  Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *  to below the minimum for the asset, then the amount transferred is increased to take it
 *  to zero.
 * 
 *  Weight: `O(1)`
 *  Modes: Pre-existence of `dest`; Post-existence of `source`; Prior & post zombie-status
 *  of `source`; Account pre-existence of `dest`.
 */
export interface AssetsCall_force_transfer {
    __kind: 'force_transfer'
    id: number
    source: LookupSource
    dest: LookupSource
    amount: bigint
}

/**
 *  Disallow further unprivileged transfers from an account.
 * 
 *  Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be frozen.
 *  - `who`: The account to be frozen.
 * 
 *  Emits `Frozen`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_freeze {
    __kind: 'freeze'
    id: number
    who: LookupSource
}

/**
 *  Allow unprivileged transfers from an account again.
 * 
 *  Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be frozen.
 *  - `who`: The account to be unfrozen.
 * 
 *  Emits `Thawed`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_thaw {
    __kind: 'thaw'
    id: number
    who: LookupSource
}

/**
 *  Change the Owner of an asset.
 * 
 *  Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be frozen.
 *  - `owner`: The new Owner of this asset.
 * 
 *  Emits `OwnerChanged`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_transfer_ownership {
    __kind: 'transfer_ownership'
    id: number
    newOwner: LookupSource
}

/**
 *  Change the Issuer, Admin and Freezer of an asset.
 * 
 *  Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be frozen.
 *  - `issuer`: The new Issuer of this asset.
 *  - `admin`: The new Admin of this asset.
 *  - `freezer`: The new Freezer of this asset.
 * 
 *  Emits `TeamChanged`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_set_team {
    __kind: 'set_team'
    id: number
    issuer: LookupSource
    admin: LookupSource
    freezer: LookupSource
}

export interface AssetsCall_set_max_zombies {
    __kind: 'set_max_zombies'
    id: number
    maxZombies: number
}

export type TreasuryRewardCall = TreasuryRewardCall_set_current_payout | TreasuryRewardCall_set_minting_interval

/**
 *  Sets the fixed treasury payout per minting interval.
 */
export interface TreasuryRewardCall_set_current_payout {
    __kind: 'set_current_payout'
    payout: bigint
}

/**
 *  Sets the treasury minting interval.
 */
export interface TreasuryRewardCall_set_minting_interval {
    __kind: 'set_minting_interval'
    interval: number
}

export type EthereumCall = EthereumCall_transact

/**
 *  Transact an Ethereum transaction.
 */
export interface EthereumCall_transact {
    __kind: 'transact'
    transaction: EthTransaction
}

export type EVMCall = EVMCall_withdraw | EVMCall_call | EVMCall_create | EVMCall_create2

/**
 *  Withdraw balance from EVM into currency/balances module.
 */
export interface EVMCall_withdraw {
    __kind: 'withdraw'
    address: Uint8Array
    value: bigint
}

/**
 *  Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
 */
export interface EVMCall_call {
    __kind: 'call'
    source: Uint8Array
    target: Uint8Array
    input: Uint8Array
    value: bigint
    gasLimit: number
    gasPrice: bigint
    nonce: (bigint | undefined)
}

/**
 *  Issue an EVM create operation. This is similar to a contract creation transaction in
 *  Ethereum.
 */
export interface EVMCall_create {
    __kind: 'create'
    source: Uint8Array
    init: Uint8Array
    value: bigint
    gasLimit: number
    gasPrice: bigint
    nonce: (bigint | undefined)
}

/**
 *  Issue an EVM create2 operation.
 */
export interface EVMCall_create2 {
    __kind: 'create2'
    source: Uint8Array
    init: Uint8Array
    salt: Uint8Array
    value: bigint
    gasLimit: number
    gasPrice: bigint
    nonce: (bigint | undefined)
}

export type ChainBridgeCall = ChainBridgeCall_set_threshold | ChainBridgeCall_set_resource | ChainBridgeCall_remove_resource | ChainBridgeCall_whitelist_chain | ChainBridgeCall_add_relayer | ChainBridgeCall_remove_relayer | ChainBridgeCall_acknowledge_proposal | ChainBridgeCall_reject_proposal | ChainBridgeCall_eval_vote_state

/**
 *  Sets the vote threshold for proposals.
 * 
 *  This threshold is used to determine how many votes are required
 *  before a proposal is executed.
 * 
 *  # <weight>
 *  - O(1) lookup and insert
 *  # </weight>
 */
export interface ChainBridgeCall_set_threshold {
    __kind: 'set_threshold'
    threshold: number
}

/**
 *  Stores a method name on chain under an associated resource ID.
 * 
 *  # <weight>
 *  - O(1) write
 *  # </weight>
 */
export interface ChainBridgeCall_set_resource {
    __kind: 'set_resource'
    id: Uint8Array
    method: Uint8Array
}

/**
 *  Removes a resource ID from the resource mapping.
 * 
 *  After this call, bridge transfers with the associated resource ID will
 *  be rejected.
 * 
 *  # <weight>
 *  - O(1) removal
 *  # </weight>
 */
export interface ChainBridgeCall_remove_resource {
    __kind: 'remove_resource'
    id: Uint8Array
}

/**
 *  Enables a chain ID as a source or destination for a bridge transfer.
 * 
 *  # <weight>
 *  - O(1) lookup and insert
 *  # </weight>
 */
export interface ChainBridgeCall_whitelist_chain {
    __kind: 'whitelist_chain'
    id: number
}

/**
 *  Adds a new relayer to the relayer set.
 * 
 *  # <weight>
 *  - O(1) lookup and insert
 *  # </weight>
 */
export interface ChainBridgeCall_add_relayer {
    __kind: 'add_relayer'
    v: Uint8Array
}

/**
 *  Removes an existing relayer from the set.
 * 
 *  # <weight>
 *  - O(1) lookup and removal
 *  # </weight>
 */
export interface ChainBridgeCall_remove_relayer {
    __kind: 'remove_relayer'
    v: Uint8Array
}

/**
 *  Commits a vote in favour of the provided proposal.
 * 
 *  If a proposal with the given nonce and source chain ID does not already exist, it will
 *  be created with an initial vote in favour from the caller.
 * 
 *  # <weight>
 *  - weight of proposed call, regardless of whether execution is performed
 *  # </weight>
 */
export interface ChainBridgeCall_acknowledge_proposal {
    __kind: 'acknowledge_proposal'
    nonce: bigint
    srcId: number
    rId: Uint8Array
    call: Proposal
}

/**
 *  Commits a vote against a provided proposal.
 * 
 *  # <weight>
 *  - Fixed, since execution of proposal should not be included
 *  # </weight>
 */
export interface ChainBridgeCall_reject_proposal {
    __kind: 'reject_proposal'
    nonce: bigint
    srcId: number
    rId: Uint8Array
    call: Proposal
}

/**
 *  Evaluate the state of a proposal given the current vote threshold.
 * 
 *  A proposal with enough votes will be either executed or cancelled, and the status
 *  will be updated accordingly.
 * 
 *  # <weight>
 *  - weight of proposed call, regardless of whether execution is performed
 *  # </weight>
 */
export interface ChainBridgeCall_eval_vote_state {
    __kind: 'eval_vote_state'
    nonce: bigint
    srcId: number
    prop: Proposal
}

export type EdgeBridgeCall = EdgeBridgeCall_transfer_native | EdgeBridgeCall_transfer

/**
 *  Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
 */
export interface EdgeBridgeCall_transfer_native {
    __kind: 'transfer_native'
    amount: bigint
    recipient: Uint8Array
    destId: number
}

/**
 *  Executes a simple currency transfer using the bridge account as the source
 */
export interface EdgeBridgeCall_transfer {
    __kind: 'transfer'
    to: Uint8Array
    amount: bigint
}

export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

/**
 *  Propose a new bounty.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *  `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 *  or slashed when rejected.
 * 
 *  - `curator`: The curator account whom will manage this bounty.
 *  - `fee`: The curator fee.
 *  - `value`: The total payment amount of this bounty, curator fee included.
 *  - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Uint8Array
}

/**
 *  Approve a bounty proposal. At a later time, the bounty will be funded and become active
 *  and the original deposit will be returned.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 *  Assign a curator to a funded bounty.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: LookupSource
    fee: bigint
}

/**
 *  Unassign curator from a bounty.
 * 
 *  This function can only be called by the `RejectOrigin` a signed origin.
 * 
 *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
 *  or inactive. As a result, we will slash the curator when possible.
 * 
 *  If the origin is the curator, we take this as a sign they are unable to do their job and
 *  they willingly give up. We could slash them, but for now we allow them to recover their
 *  deposit and exit without issue. (We may want to change this if it is abused.)
 * 
 *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 *  anyone in the community to call out that a curator is not doing their due diligence, and
 *  we should pick a new curator. In this case the curator should also be slashed.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 *  Accept the curator role for a bounty.
 *  A deposit will be reserved from curator and refund upon successful payout.
 * 
 *  May only be called from the curator.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 *  Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
 * 
 *  The dispatch origin for this call must be the curator of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to award.
 *  - `beneficiary`: The beneficiary account whom will receive the payout.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: LookupSource
}

/**
 *  Claim the payout from an awarded bounty after payout delay.
 * 
 *  The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to claim.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 *  Cancel a proposed or active bounty. All the funds will be sent to treasury and
 *  the curator deposit will be unreserved if possible.
 * 
 *  Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 *  - `bounty_id`: Bounty ID to cancel.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 *  Extend the expiry time of an active bounty.
 * 
 *  The dispatch origin for this call must be the curator of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to extend.
 *  - `remark`: additional information.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Uint8Array
}

export type TipsCall = TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_tip_new | TipsCall_tip | TipsCall_close_tip | TipsCall_slash_tip

/**
 *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *  `DataDepositPerByte` for each byte in `reason`.
 * 
 *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *    a UTF-8-encoded URL.
 *  - `who`: The account which should be credited for the tip.
 * 
 *  Emits `NewTip` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(R)` where `R` length of `reason`.
 *    - encoding and hashing of 'reason'
 *  - DbReads: `Reasons`, `Tips`
 *  - DbWrites: `Reasons`, `Tips`
 *  # </weight>
 */
export interface TipsCall_report_awesome {
    __kind: 'report_awesome'
    reason: Uint8Array
    who: Uint8Array
}

/**
 *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 * 
 *  If successful, the original deposit will be unreserved.
 * 
 *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 *  must have been reported by the signing account through `report_awesome` (and not
 *  through `tip_new`).
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 *  Emits `TipRetracted` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    - Depends on the length of `T::Hash` which is fixed.
 *  - DbReads: `Tips`, `origin account`
 *  - DbWrites: `Reasons`, `Tips`, `origin account`
 *  # </weight>
 */
export interface TipsCall_retract_tip {
    __kind: 'retract_tip'
    hash: Uint8Array
}

/**
 *  Give a tip for something new; no finder's fee will be taken.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must be a
 *  member of the `Tippers` set.
 * 
 *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *    a UTF-8-encoded URL.
 *  - `who`: The account which should be credited for the tip.
 *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *    value of active tippers will be given to the `who`.
 * 
 *  Emits `NewTip` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *    - `O(T)`: decoding `Tipper` vec of length `T`
 *      `T` is charged as upper bound given by `ContainsLengthBound`.
 *      The actual cost depends on the implementation of `T::Tippers`.
 *    - `O(R)`: hashing and encoding of reason of length `R`
 *  - DbReads: `Tippers`, `Reasons`
 *  - DbWrites: `Reasons`, `Tips`
 *  # </weight>
 */
export interface TipsCall_tip_new {
    __kind: 'tip_new'
    reason: Uint8Array
    who: Uint8Array
    tipValue: bigint
}

/**
 *  Declare a tip value for an already-open tip.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must be a
 *  member of the `Tippers` set.
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *    account ID.
 *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *    value of active tippers will be given to the `who`.
 * 
 *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 *  has started.
 * 
 *  # <weight>
 *  - Complexity: `O(T)` where `T` is the number of tippers.
 *    decoding `Tipper` vec of length `T`, insert tip and check closing,
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 * 
 *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *    is weighted as if almost full i.e of length `T-1`.
 *  - DbReads: `Tippers`, `Tips`
 *  - DbWrites: `Tips`
 *  # </weight>
 */
export interface TipsCall_tip {
    __kind: 'tip'
    hash: Uint8Array
    tipValue: bigint
}

/**
 *  Close and payout a tip.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  The tip identified by `hash` must have finished its countdown period.
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 *  # <weight>
 *  - Complexity: `O(T)` where `T` is the number of tippers.
 *    decoding `Tipper` vec of length `T`.
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 *  - DbReads: `Tips`, `Tippers`, `tip finder`
 *  - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
 *  # </weight>
 */
export interface TipsCall_close_tip {
    __kind: 'close_tip'
    hash: Uint8Array
}

/**
 *  Remove and slash an already-open tip.
 * 
 *  May only be called from `T::RejectOrigin`.
 * 
 *  As a result, the finder is slashed and the deposits are lost.
 * 
 *  Emits `TipSlashed` if successful.
 * 
 *  # <weight>
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 *  # </weight>
 */
export interface TipsCall_slash_tip {
    __kind: 'slash_tip'
    hash: Uint8Array
}

export type EthTransactionAction = EthTransactionAction_Call | EthTransactionAction_Create

export interface EthTransactionAction_Call {
    __kind: 'Call'
    value: Uint8Array
}

export interface EthTransactionAction_Create {
    __kind: 'Create'
}

export interface EthTransactionSignature {
    v: bigint
    r: Uint8Array
    s: Uint8Array
}

export interface DispatchErrorModule {
    index: number
    error: number
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Underflow | TokenError_Overflow

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export interface CompactAssignments {
    votes1: [number, number][]
    votes2: [number, [number, number], number][]
    votes3: [number, [number, number][], number][]
    votes4: [number, [number, number][], number][]
    votes5: [number, [number, number][], number][]
    votes6: [number, [number, number][], number][]
    votes7: [number, [number, number][], number][]
    votes8: [number, [number, number][], number][]
    votes9: [number, [number, number][], number][]
    votes10: [number, [number, number][], number][]
    votes11: [number, [number, number][], number][]
    votes12: [number, [number, number][], number][]
    votes13: [number, [number, number][], number][]
    votes14: [number, [number, number][], number][]
    votes15: [number, [number, number][], number][]
    votes16: [number, [number, number][], number][]
}

export interface ElectionSize {
    validators: number
    nominators: number
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
    __kind: 'Standard'
    value: AccountVoteStandard
}

export interface AccountVote_Split {
    __kind: 'Split'
    value: AccountVoteSplit
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

export interface DefunctVoter {
    who: Uint8Array
    voteCount: number
    candidateCount: number
}

export type Renouncing = Renouncing_Member | Renouncing_RunnerUp | Renouncing_Candidate

export interface Renouncing_Member {
    __kind: 'Member'
}

export interface Renouncing_RunnerUp {
    __kind: 'RunnerUp'
}

export interface Renouncing_Candidate {
    __kind: 'Candidate'
    value: number
}

export interface GrandpaEquivocationProof {
    setId: bigint
    equivocation: GrandpaEquivocation
}

export interface KeyOwnerProof {
    session: number
    trieNodes: Uint8Array[]
    validatorCount: number
}

export interface Schedule {
    version: number
    enablePrintln: boolean
    limits: Limits
    instructionWeights: InstructionWeights
    hostFnWeights: HostFnWeights
}

export interface Heartbeat {
    blockNumber: number
    networkState: OpaqueNetworkState
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
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

export interface Timepoint {
    height: number
    index: number
}

export interface Digest {
    logs: DigestItem[]
}

export interface AccountVoteStandard {
    vote: number
    balance: bigint
}

export interface AccountVoteSplit {
    aye: bigint
    nay: bigint
}

export type GrandpaEquivocation = GrandpaEquivocation_Prevote | GrandpaEquivocation_Precommit

export interface GrandpaEquivocation_Prevote {
    __kind: 'Prevote'
    value: GrandpaEquivocationValue
}

export interface GrandpaEquivocation_Precommit {
    __kind: 'Precommit'
    value: GrandpaEquivocationValue
}

export interface Limits {
    eventTopics: number
    stackHeight: number
    globals: number
    parameters: number
    memoryPages: number
    tableSize: number
    brTableSize: number
    subjectLen: number
}

export interface InstructionWeights {
    i64Const: number
    i64Load: number
    i64Store: number
    select: number
    rIf: number
    br: number
    brIf: number
    brIable: number
    brIablePerEntry: number
    call: number
    callIndirect: number
    callIndirectPerParam: number
    localGet: number
    localSet: number
    localTee: number
    globalGet: number
    globalSet: number
    memoryCurrent: number
    memoryGrow: number
    i64Clz: number
    i64Ctz: number
    i64Popcnt: number
    i64Eqz: number
    i64Extendsi32: number
    i64Extendui32: number
    i32Wrapi64: number
    i64Eq: number
    i64Ne: number
    i64Lts: number
    i64Ltu: number
    i64Gts: number
    i64Gtu: number
    i64Les: number
    i64Leu: number
    i64Ges: number
    i64Geu: number
    i64Add: number
    i64Sub: number
    i64Mul: number
    i64Divs: number
    i64Divu: number
    i64Rems: number
    i64Remu: number
    i64And: number
    i64Or: number
    i64Xor: number
    i64Shl: number
    i64Shrs: number
    i64Shru: number
    i64Rotl: number
    i64Rotr: number
}

export interface HostFnWeights {
    caller: bigint
    address: bigint
    gasLeft: bigint
    balance: bigint
    valueTransferred: bigint
    minimumBalance: bigint
    tombstoneDeposit: bigint
    rentAllowance: bigint
    blockNumber: bigint
    now: bigint
    weightToFee: bigint
    gas: bigint
    input: bigint
    inputPerByte: bigint
    return: bigint
    returnPerByte: bigint
    terminate: bigint
    terminatePerCodeByte: bigint
    restoreTo: bigint
    restoreToPerCallerCodeByte: bigint
    restoreToPerTombstoneCodeByte: bigint
    restoreToPerDelta: bigint
    random: bigint
    depositEvent: bigint
    depositEventPerTopic: bigint
    depositEventPerByte: bigint
    setRentAllowance: bigint
    setStorage: bigint
    setStoragePerByte: bigint
    clearStorage: bigint
    getStorage: bigint
    getStoragePerByte: bigint
    transfer: bigint
    call: bigint
    callPerCodeByte: bigint
    callTransferSurcharge: bigint
    callPerInputByte: bigint
    callPerOutputByte: bigint
    instantiate: bigint
    instantiatePerCodeByte: bigint
    instantiatePerInputByte: bigint
    instantiatePerOutputByte: bigint
    instantiatePerSaltByte: bigint
    hashSha2256: bigint
    hashSha2256PerByte: bigint
    hashKeccak256: bigint
    hashKeccak256PerByte: bigint
    hashBlake2256: bigint
    hashBlake2256PerByte: bigint
    hashBlake2128: bigint
    hashBlake2128PerByte: bigint
    rentParams: bigint
}

export interface OpaqueNetworkState {
    peerId: Uint8Array
    externalAddresses: Uint8Array[]
}

export type DigestItem = DigestItem_Other | DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_SealV0 | DigestItem_Consensus | DigestItem_Seal | DigestItem_PreRuntime | DigestItem_ChangesTrieSignal | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_AuthoritiesChange {
    __kind: 'AuthoritiesChange'
    value: Uint8Array[]
}

export interface DigestItem_ChangesTrieRoot {
    __kind: 'ChangesTrieRoot'
    value: Uint8Array
}

export interface DigestItem_SealV0 {
    __kind: 'SealV0'
    value: [bigint, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_ChangesTrieSignal {
    __kind: 'ChangesTrieSignal'
    value: ChangesTrieSignal
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface GrandpaEquivocationValue {
    roundNumber: bigint
    identity: Uint8Array
    first: [GrandpaPrevote, Uint8Array]
    second: [GrandpaPrevote, Uint8Array]
}

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
    __kind: 'NewConfiguration'
    value: (ChangesTrieConfiguration | undefined)
}

export interface GrandpaPrevote {
    targetHash: Uint8Array
    targetNumber: number
}
