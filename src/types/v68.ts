import type {Result, Option} from './support'

export type Origin = Origin_Root | Origin_Signed

export interface Origin_Root {
    __kind: 'Root'
}

export interface Origin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface Timepoint {
    height: number
    index: number
}

export type Type_33 = Type_33_Ok | Type_33_Err

export interface Type_33_Ok {
    __kind: 'Ok'
}

export interface Type_33_Err {
    __kind: 'Err'
    value: DispatchError
}

export interface CommissionChangeRate {
    maxIncrease: number
    minDelay: number
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional | DispatchError_Exhausted | DispatchError_Corruption | DispatchError_Unavailable | DispatchError_RootNotAllowed

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
    value: ModuleError
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
}

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export interface DispatchError_RootNotAllowed {
    __kind: 'RootNotAllowed'
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
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

export type Determinism = Determinism_Enforced | Determinism_Relaxed

export interface Determinism_Enforced {
    __kind: 'Enforced'
}

export interface Determinism_Relaxed {
    __kind: 'Relaxed'
}

export type Call = Call_System | Call_Scheduler | Call_Timestamp | Call_Balances | Call_Staking | Call_Session | Call_Aleph | Call_Elections | Call_Treasury | Call_Vesting | Call_Utility | Call_Multisig | Call_Sudo | Call_Contracts | Call_NominationPools | Call_Identity | Call_CommitteeManagement

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

export interface Call_CommitteeManagement {
    __kind: 'CommitteeManagement'
    value: CommitteeManagementCall
}

export type BondExtra = BondExtra_FreeBalance | BondExtra_Rewards

export interface BondExtra_FreeBalance {
    __kind: 'FreeBalance'
    value: bigint
}

export interface BondExtra_Rewards {
    __kind: 'Rewards'
}

export type ClaimPermission = ClaimPermission_Permissioned | ClaimPermission_PermissionlessCompound | ClaimPermission_PermissionlessWithdraw | ClaimPermission_PermissionlessAll

export interface ClaimPermission_Permissioned {
    __kind: 'Permissioned'
}

export interface ClaimPermission_PermissionlessCompound {
    __kind: 'PermissionlessCompound'
}

export interface ClaimPermission_PermissionlessWithdraw {
    __kind: 'PermissionlessWithdraw'
}

export interface ClaimPermission_PermissionlessAll {
    __kind: 'PermissionlessAll'
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

export type Type_148 = Type_148_Noop | Type_148_Set | Type_148_Remove

export interface Type_148_Noop {
    __kind: 'Noop'
}

export interface Type_148_Set {
    __kind: 'Set'
    value: number
}

export interface Type_148_Remove {
    __kind: 'Remove'
}

export type Type_149 = Type_149_Noop | Type_149_Set | Type_149_Remove

export interface Type_149_Noop {
    __kind: 'Noop'
}

export interface Type_149_Set {
    __kind: 'Set'
    value: number
}

export interface Type_149_Remove {
    __kind: 'Remove'
}

export type Type_150 = Type_150_Noop | Type_150_Set | Type_150_Remove

export interface Type_150_Noop {
    __kind: 'Noop'
}

export interface Type_150_Set {
    __kind: 'Set'
    value: Uint8Array
}

export interface Type_150_Remove {
    __kind: 'Remove'
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

export type OriginCaller = OriginCaller_system | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface ModuleError {
    index: number
    error: Uint8Array
}

export type TokenError = TokenError_FundsUnavailable | TokenError_OnlyProvider | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported | TokenError_CannotCreateHold | TokenError_NotExpendable | TokenError_Blocked

export interface TokenError_FundsUnavailable {
    __kind: 'FundsUnavailable'
}

export interface TokenError_OnlyProvider {
    __kind: 'OnlyProvider'
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

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export interface TokenError_CannotCreateHold {
    __kind: 'CannotCreateHold'
}

export interface TokenError_NotExpendable {
    __kind: 'NotExpendable'
}

export interface TokenError_Blocked {
    __kind: 'Blocked'
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

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
    __kind: 'Yes'
}

export interface Pays_No {
    __kind: 'No'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemCall = SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * See [`Pallet::remark`].
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 * See [`Pallet::set_heap_pages`].
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * See [`Pallet::set_code`].
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * See [`Pallet::set_code_without_checks`].
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 * See [`Pallet::set_storage`].
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * See [`Pallet::kill_storage`].
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 * See [`Pallet::kill_prefix`].
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * See [`Pallet::remark_with_event`].
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * See [`Pallet::schedule`].
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::cancel`].
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * See [`Pallet::schedule_named`].
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
 * See [`Pallet::cancel_named`].
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

/**
 * See [`Pallet::schedule_after`].
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named_after`].
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TimestampCall = TimestampCall_set

/**
 * See [`Pallet::set`].
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall = BalancesCall_transfer_allow_death | BalancesCall_set_balance_deprecated | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve | BalancesCall_upgrade_accounts | BalancesCall_transfer | BalancesCall_force_set_balance

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::set_balance_deprecated`].
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: Uint8Array[]
}

/**
 * See [`Pallet::transfer`].
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_set_balance`].
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_nominate | StakingCall_chill | StakingCall_set_payee | StakingCall_set_controller | StakingCall_set_validator_count | StakingCall_increase_validator_count | StakingCall_scale_validator_count | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash | StakingCall_payout_stakers | StakingCall_rebond | StakingCall_reap_stash | StakingCall_kick | StakingCall_set_staking_configs | StakingCall_chill_other | StakingCall_force_apply_min_commission | StakingCall_set_min_commission

/**
 * See [`Pallet::bond`].
 */
export interface StakingCall_bond {
    __kind: 'bond'
    value: bigint
    payee: RewardDestination
}

/**
 * See [`Pallet::bond_extra`].
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 * See [`Pallet::unbond`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 * See [`Pallet::validate`].
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 * See [`Pallet::nominate`].
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: MultiAddress[]
}

/**
 * See [`Pallet::chill`].
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 * See [`Pallet::set_payee`].
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 * See [`Pallet::set_controller`].
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
}

/**
 * See [`Pallet::set_validator_count`].
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * See [`Pallet::increase_validator_count`].
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * See [`Pallet::scale_validator_count`].
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: number
}

/**
 * See [`Pallet::force_no_eras`].
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 * See [`Pallet::force_new_era`].
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * See [`Pallet::set_invulnerables`].
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: Uint8Array[]
}

/**
 * See [`Pallet::force_unstake`].
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 * See [`Pallet::force_new_era_always`].
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * See [`Pallet::cancel_deferred_slash`].
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 * See [`Pallet::payout_stakers`].
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: Uint8Array
    era: number
}

/**
 * See [`Pallet::rebond`].
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * See [`Pallet::reap_stash`].
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 * See [`Pallet::kick`].
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: MultiAddress[]
}

/**
 * See [`Pallet::set_staking_configs`].
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_119
    maxValidatorCount: Type_119
    chillThreshold: Type_120
    minCommission: Type_121
}

/**
 * See [`Pallet::chill_other`].
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: Uint8Array
}

/**
 * See [`Pallet::force_apply_min_commission`].
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: Uint8Array
}

/**
 * See [`Pallet::set_min_commission`].
 */
export interface StakingCall_set_min_commission {
    __kind: 'set_min_commission'
    new: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 * See [`Pallet::set_keys`].
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Uint8Array
}

/**
 * See [`Pallet::purge_keys`].
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AlephCall = AlephCall_set_emergency_finalizer | AlephCall_schedule_finality_version_change

/**
 * See [`Pallet::set_emergency_finalizer`].
 */
export interface AlephCall_set_emergency_finalizer {
    __kind: 'set_emergency_finalizer'
    emergencyFinalizer: Uint8Array
}

/**
 * See [`Pallet::schedule_finality_version_change`].
 */
export interface AlephCall_schedule_finality_version_change {
    __kind: 'schedule_finality_version_change'
    versionIncoming: number
    session: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ElectionsCall = ElectionsCall_change_validators | ElectionsCall_set_elections_openness

/**
 * See [`Pallet::change_validators`].
 */
export interface ElectionsCall_change_validators {
    __kind: 'change_validators'
    reservedValidators: (Uint8Array[] | undefined)
    nonReservedValidators: (Uint8Array[] | undefined)
    committeeSize: (CommitteeSeats | undefined)
}

/**
 * See [`Pallet::set_elections_openness`].
 */
export interface ElectionsCall_set_elections_openness {
    __kind: 'set_elections_openness'
    openness: ElectionOpenness
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal | TreasuryCall_spend | TreasuryCall_remove_approval

/**
 * See [`Pallet::propose_spend`].
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::reject_proposal`].
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * See [`Pallet::approve_proposal`].
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * See [`Pallet::spend`].
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::remove_approval`].
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer | VestingCall_merge_schedules

/**
 * See [`Pallet::vest`].
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 * See [`Pallet::vest_other`].
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: MultiAddress
}

/**
 * See [`Pallet::vested_transfer`].
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * See [`Pallet::force_vested_transfer`].
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: MultiAddress
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * See [`Pallet::merge_schedules`].
 */
export interface VestingCall_merge_schedules {
    __kind: 'merge_schedules'
    schedule1Index: number
    schedule2Index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * See [`Pallet::batch`].
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * See [`Pallet::as_derivative`].
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * See [`Pallet::batch_all`].
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * See [`Pallet::dispatch_as`].
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * See [`Pallet::force_batch`].
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * See [`Pallet::with_weight`].
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 * See [`Pallet::as_multi_threshold_1`].
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Call
}

/**
 * See [`Pallet::as_multi`].
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
 * See [`Pallet::approve_as_multi`].
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
 * See [`Pallet::cancel_as_multi`].
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 * See [`Pallet::sudo`].
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * See [`Pallet::sudo_unchecked_weight`].
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
}

/**
 * See [`Pallet::set_key`].
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * See [`Pallet::sudo_as`].
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ContractsCall = ContractsCall_call_old_weight | ContractsCall_instantiate_with_code_old_weight | ContractsCall_instantiate_old_weight | ContractsCall_upload_code | ContractsCall_remove_code | ContractsCall_set_code | ContractsCall_call | ContractsCall_instantiate_with_code | ContractsCall_instantiate | ContractsCall_migrate

/**
 * See [`Pallet::call_old_weight`].
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
 * See [`Pallet::instantiate_with_code_old_weight`].
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
 * See [`Pallet::instantiate_old_weight`].
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
 * See [`Pallet::upload_code`].
 */
export interface ContractsCall_upload_code {
    __kind: 'upload_code'
    code: Uint8Array
    storageDepositLimit: (bigint | undefined)
    determinism: Determinism
}

/**
 * See [`Pallet::remove_code`].
 */
export interface ContractsCall_remove_code {
    __kind: 'remove_code'
    codeHash: Uint8Array
}

/**
 * See [`Pallet::set_code`].
 */
export interface ContractsCall_set_code {
    __kind: 'set_code'
    dest: MultiAddress
    codeHash: Uint8Array
}

/**
 * See [`Pallet::call`].
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
 * See [`Pallet::instantiate_with_code`].
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
 * See [`Pallet::instantiate`].
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
 * See [`Pallet::migrate`].
 */
export interface ContractsCall_migrate {
    __kind: 'migrate'
    weightLimit: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NominationPoolsCall = NominationPoolsCall_join | NominationPoolsCall_bond_extra | NominationPoolsCall_claim_payout | NominationPoolsCall_unbond | NominationPoolsCall_pool_withdraw_unbonded | NominationPoolsCall_withdraw_unbonded | NominationPoolsCall_create | NominationPoolsCall_create_with_pool_id | NominationPoolsCall_nominate | NominationPoolsCall_set_state | NominationPoolsCall_set_metadata | NominationPoolsCall_set_configs | NominationPoolsCall_update_roles | NominationPoolsCall_chill | NominationPoolsCall_bond_extra_other | NominationPoolsCall_set_claim_permission | NominationPoolsCall_claim_payout_other | NominationPoolsCall_set_commission | NominationPoolsCall_set_commission_max | NominationPoolsCall_set_commission_change_rate | NominationPoolsCall_claim_commission

/**
 * See [`Pallet::join`].
 */
export interface NominationPoolsCall_join {
    __kind: 'join'
    amount: bigint
    poolId: number
}

/**
 * See [`Pallet::bond_extra`].
 */
export interface NominationPoolsCall_bond_extra {
    __kind: 'bond_extra'
    extra: BondExtra
}

/**
 * See [`Pallet::claim_payout`].
 */
export interface NominationPoolsCall_claim_payout {
    __kind: 'claim_payout'
}

/**
 * See [`Pallet::unbond`].
 */
export interface NominationPoolsCall_unbond {
    __kind: 'unbond'
    memberAccount: MultiAddress
    unbondingPoints: bigint
}

/**
 * See [`Pallet::pool_withdraw_unbonded`].
 */
export interface NominationPoolsCall_pool_withdraw_unbonded {
    __kind: 'pool_withdraw_unbonded'
    poolId: number
    numSlashingSpans: number
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface NominationPoolsCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    memberAccount: MultiAddress
    numSlashingSpans: number
}

/**
 * See [`Pallet::create`].
 */
export interface NominationPoolsCall_create {
    __kind: 'create'
    amount: bigint
    root: MultiAddress
    nominator: MultiAddress
    bouncer: MultiAddress
}

/**
 * See [`Pallet::create_with_pool_id`].
 */
export interface NominationPoolsCall_create_with_pool_id {
    __kind: 'create_with_pool_id'
    amount: bigint
    root: MultiAddress
    nominator: MultiAddress
    bouncer: MultiAddress
    poolId: number
}

/**
 * See [`Pallet::nominate`].
 */
export interface NominationPoolsCall_nominate {
    __kind: 'nominate'
    poolId: number
    validators: Uint8Array[]
}

/**
 * See [`Pallet::set_state`].
 */
export interface NominationPoolsCall_set_state {
    __kind: 'set_state'
    poolId: number
    state: PoolState
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface NominationPoolsCall_set_metadata {
    __kind: 'set_metadata'
    poolId: number
    metadata: Uint8Array
}

/**
 * See [`Pallet::set_configs`].
 */
export interface NominationPoolsCall_set_configs {
    __kind: 'set_configs'
    minJoinBond: ConfigOp
    minCreateBond: ConfigOp
    maxPools: Type_148
    maxMembers: Type_148
    maxMembersPerPool: Type_148
    globalMaxCommission: Type_149
}

/**
 * See [`Pallet::update_roles`].
 */
export interface NominationPoolsCall_update_roles {
    __kind: 'update_roles'
    poolId: number
    newRoot: Type_150
    newNominator: Type_150
    newBouncer: Type_150
}

/**
 * See [`Pallet::chill`].
 */
export interface NominationPoolsCall_chill {
    __kind: 'chill'
    poolId: number
}

/**
 * See [`Pallet::bond_extra_other`].
 */
export interface NominationPoolsCall_bond_extra_other {
    __kind: 'bond_extra_other'
    member: MultiAddress
    extra: BondExtra
}

/**
 * See [`Pallet::set_claim_permission`].
 */
export interface NominationPoolsCall_set_claim_permission {
    __kind: 'set_claim_permission'
    permission: ClaimPermission
}

/**
 * See [`Pallet::claim_payout_other`].
 */
export interface NominationPoolsCall_claim_payout_other {
    __kind: 'claim_payout_other'
    other: Uint8Array
}

/**
 * See [`Pallet::set_commission`].
 */
export interface NominationPoolsCall_set_commission {
    __kind: 'set_commission'
    poolId: number
    newCommission: ([number, Uint8Array] | undefined)
}

/**
 * See [`Pallet::set_commission_max`].
 */
export interface NominationPoolsCall_set_commission_max {
    __kind: 'set_commission_max'
    poolId: number
    maxCommission: number
}

/**
 * See [`Pallet::set_commission_change_rate`].
 */
export interface NominationPoolsCall_set_commission_change_rate {
    __kind: 'set_commission_change_rate'
    poolId: number
    changeRate: CommissionChangeRate
}

/**
 * See [`Pallet::claim_commission`].
 */
export interface NominationPoolsCall_claim_commission {
    __kind: 'claim_commission'
    poolId: number
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 * See [`Pallet::add_registrar`].
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * See [`Pallet::set_identity`].
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * See [`Pallet::set_subs`].
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [Uint8Array, Data][]
}

/**
 * See [`Pallet::clear_identity`].
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * See [`Pallet::request_judgement`].
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * See [`Pallet::cancel_request`].
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * See [`Pallet::set_fee`].
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * See [`Pallet::set_account_id`].
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * See [`Pallet::set_fields`].
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 * See [`Pallet::provide_judgement`].
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: Uint8Array
}

/**
 * See [`Pallet::kill_identity`].
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * See [`Pallet::add_sub`].
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::rename_sub`].
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::remove_sub`].
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * See [`Pallet::quit_sub`].
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CommitteeManagementCall = CommitteeManagementCall_set_ban_config | CommitteeManagementCall_ban_from_committee | CommitteeManagementCall_cancel_ban | CommitteeManagementCall_set_lenient_threshold

/**
 * See [`Pallet::set_ban_config`].
 */
export interface CommitteeManagementCall_set_ban_config {
    __kind: 'set_ban_config'
    minimalExpectedPerformance: (number | undefined)
    underperformedSessionCountThreshold: (number | undefined)
    cleanSessionCounterDelay: (number | undefined)
    banPeriod: (number | undefined)
}

/**
 * See [`Pallet::ban_from_committee`].
 */
export interface CommitteeManagementCall_ban_from_committee {
    __kind: 'ban_from_committee'
    banned: Uint8Array
    banReason: Uint8Array
}

/**
 * See [`Pallet::cancel_ban`].
 */
export interface CommitteeManagementCall_cancel_ban {
    __kind: 'cancel_ban'
    banned: Uint8Array
}

/**
 * See [`Pallet::set_lenient_threshold`].
 */
export interface CommitteeManagementCall_set_lenient_threshold {
    __kind: 'set_lenient_threshold'
    thresholdPercent: number
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

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export type Type_119 = Type_119_Noop | Type_119_Set | Type_119_Remove

export interface Type_119_Noop {
    __kind: 'Noop'
}

export interface Type_119_Set {
    __kind: 'Set'
    value: number
}

export interface Type_119_Remove {
    __kind: 'Remove'
}

export type Type_120 = Type_120_Noop | Type_120_Set | Type_120_Remove

export interface Type_120_Noop {
    __kind: 'Noop'
}

export interface Type_120_Set {
    __kind: 'Set'
    value: number
}

export interface Type_120_Remove {
    __kind: 'Remove'
}

export type Type_121 = Type_121_Noop | Type_121_Set | Type_121_Remove

export interface Type_121_Noop {
    __kind: 'Noop'
}

export interface Type_121_Set {
    __kind: 'Set'
    value: number
}

export interface Type_121_Remove {
    __kind: 'Remove'
}

export interface SessionKeys {
    aura: Uint8Array
    aleph: Uint8Array
}

export interface CommitteeSeats {
    reservedSeats: number
    nonReservedSeats: number
    nonReservedFinalitySeats: number
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
