import {sts, Result, Option, Bytes, BitSequence} from './support'

export const Determinism: sts.Type<Determinism> = sts.closedEnum(() => {
    return  {
        Enforced: sts.unit(),
        Relaxed: sts.unit(),
    }
})

export type Determinism = Determinism_Enforced | Determinism_Relaxed

export interface Determinism_Enforced {
    __kind: 'Enforced'
}

export interface Determinism_Relaxed {
    __kind: 'Relaxed'
}

export const ClaimPermission: sts.Type<ClaimPermission> = sts.closedEnum(() => {
    return  {
        Permissioned: sts.unit(),
        PermissionlessAll: sts.unit(),
        PermissionlessCompound: sts.unit(),
        PermissionlessWithdraw: sts.unit(),
    }
})

export type ClaimPermission = ClaimPermission_Permissioned | ClaimPermission_PermissionlessAll | ClaimPermission_PermissionlessCompound | ClaimPermission_PermissionlessWithdraw

export interface ClaimPermission_Permissioned {
    __kind: 'Permissioned'
}

export interface ClaimPermission_PermissionlessAll {
    __kind: 'PermissionlessAll'
}

export interface ClaimPermission_PermissionlessCompound {
    __kind: 'PermissionlessCompound'
}

export interface ClaimPermission_PermissionlessWithdraw {
    __kind: 'PermissionlessWithdraw'
}

export const BondExtra: sts.Type<BondExtra> = sts.closedEnum(() => {
    return  {
        FreeBalance: sts.bigint(),
        Rewards: sts.unit(),
    }
})

export type BondExtra = BondExtra_FreeBalance | BondExtra_Rewards

export interface BondExtra_FreeBalance {
    __kind: 'FreeBalance'
    value: bigint
}

export interface BondExtra_Rewards {
    __kind: 'Rewards'
}

export const Type_150: sts.Type<Type_150> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: AccountId32,
    }
})

export type Type_150 = Type_150_Noop | Type_150_Remove | Type_150_Set

export interface Type_150_Noop {
    __kind: 'Noop'
}

export interface Type_150_Remove {
    __kind: 'Remove'
}

export interface Type_150_Set {
    __kind: 'Set'
    value: AccountId32
}

export type AccountId32 = Bytes

export const Type_149: sts.Type<Type_149> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export type Type_149 = Type_149_Noop | Type_149_Remove | Type_149_Set

export interface Type_149_Noop {
    __kind: 'Noop'
}

export interface Type_149_Remove {
    __kind: 'Remove'
}

export interface Type_149_Set {
    __kind: 'Set'
    value: Perbill
}

export type Perbill = number

export const Type_148: sts.Type<Type_148> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.number(),
    }
})

export type Type_148 = Type_148_Noop | Type_148_Remove | Type_148_Set

export interface Type_148_Noop {
    __kind: 'Noop'
}

export interface Type_148_Remove {
    __kind: 'Remove'
}

export interface Type_148_Set {
    __kind: 'Set'
    value: number
}

export const Type_147: sts.Type<Type_147> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export type Type_147 = Type_147_Noop | Type_147_Remove | Type_147_Set

export interface Type_147_Noop {
    __kind: 'Noop'
}

export interface Type_147_Remove {
    __kind: 'Remove'
}

export interface Type_147_Set {
    __kind: 'Set'
    value: bigint
}

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Void: Void,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return  {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export type RawOrigin = RawOrigin_None | RawOrigin_Root | RawOrigin_Signed

export interface RawOrigin_None {
    __kind: 'None'
}

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
    }
})

export type Void = never

export type OriginCaller = OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return  {
        Account: AccountId32,
        Controller: sts.unit(),
        None: sts.unit(),
        Staked: sts.unit(),
        Stash: sts.unit(),
    }
})

export type RewardDestination = RewardDestination_Account | RewardDestination_Controller | RewardDestination_None | RewardDestination_Staked | RewardDestination_Stash

export interface RewardDestination_Account {
    __kind: 'Account'
    value: AccountId32
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: sts.number(),
        index: sts.number(),
    }
})

export interface Timepoint {
    height: number
    index: number
}

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Aleph: AlephCall,
        Balances: BalancesCall,
        CommitteeManagement: CommitteeManagementCall,
        Contracts: ContractsCall,
        Elections: ElectionsCall,
        Identity: IdentityCall,
        Multisig: MultisigCall,
        NominationPools: NominationPoolsCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Staking: StakingCall,
        Sudo: SudoCall,
        System: SystemCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        force_vested_transfer: sts.enumStruct({
            source: MultiAddress,
            target: MultiAddress,
            schedule: VestingInfo,
        }),
        merge_schedules: sts.enumStruct({
            schedule1Index: sts.number(),
            schedule2Index: sts.number(),
        }),
        vest: sts.unit(),
        vest_other: sts.enumStruct({
            target: MultiAddress,
        }),
        vested_transfer: sts.enumStruct({
            target: MultiAddress,
            schedule: VestingInfo,
        }),
    }
})

export const VestingInfo: sts.Type<VestingInfo> = sts.struct(() => {
    return  {
        locked: sts.bigint(),
        perBlock: sts.bigint(),
        startingBlock: sts.number(),
    }
})

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VestingCall = VestingCall_force_vested_transfer | VestingCall_merge_schedules | VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

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

export type MultiAddress = MultiAddress_Address20 | MultiAddress_Address32 | MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Bytes
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Bytes
}

export interface MultiAddress_Id {
    __kind: 'Id'
    value: AccountId32
}

export interface MultiAddress_Index {
    __kind: 'Index'
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return  {
        as_derivative: sts.enumStruct({
            index: sts.number(),
            call: Call,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        batch_all: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        dispatch_as: sts.enumStruct({
            asOrigin: OriginCaller,
            call: Call,
        }),
        force_batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        with_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * See [`Pallet::as_derivative`].
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * See [`Pallet::batch`].
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
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
export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return  {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        propose_spend: sts.enumStruct({
            value: sts.bigint(),
            beneficiary: MultiAddress,
        }),
        reject_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        remove_approval: sts.enumStruct({
            proposalId: sts.number(),
        }),
        spend: sts.enumStruct({
            amount: sts.bigint(),
            beneficiary: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_remove_approval | TreasuryCall_spend

/**
 * See [`Pallet::approve_proposal`].
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

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
 * See [`Pallet::remove_approval`].
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

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
export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        kill_prefix: sts.enumStruct({
            prefix: sts.bytes(),
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => sts.bytes()),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        remark_with_event: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_code: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_code_without_checks: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_heap_pages: sts.enumStruct({
            pages: sts.bigint(),
        }),
        set_storage: sts.enumStruct({
            items: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemCall = SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 * See [`Pallet::kill_prefix`].
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * See [`Pallet::kill_storage`].
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * See [`Pallet::remark`].
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * See [`Pallet::remark_with_event`].
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * See [`Pallet::set_code`].
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * See [`Pallet::set_code_without_checks`].
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * See [`Pallet::set_heap_pages`].
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * See [`Pallet::set_storage`].
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return  {
        set_key: sts.enumStruct({
            new: MultiAddress,
        }),
        sudo: sts.enumStruct({
            call: Call,
        }),
        sudo_as: sts.enumStruct({
            who: MultiAddress,
            call: Call,
        }),
        sudo_unchecked_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 * See [`Pallet::set_key`].
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * See [`Pallet::sudo`].
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
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
 * See [`Pallet::sudo_unchecked_weight`].
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const StakingCall: sts.Type<StakingCall> = sts.closedEnum(() => {
    return  {
        bond: sts.enumStruct({
            value: sts.bigint(),
            payee: RewardDestination,
        }),
        bond_extra: sts.enumStruct({
            maxAdditional: sts.bigint(),
        }),
        cancel_deferred_slash: sts.enumStruct({
            era: sts.number(),
            slashIndices: sts.array(() => sts.number()),
        }),
        chill: sts.unit(),
        chill_other: sts.enumStruct({
            controller: AccountId32,
        }),
        force_apply_min_commission: sts.enumStruct({
            validatorStash: AccountId32,
        }),
        force_new_era: sts.unit(),
        force_new_era_always: sts.unit(),
        force_no_eras: sts.unit(),
        force_unstake: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        increase_validator_count: sts.enumStruct({
            additional: sts.number(),
        }),
        kick: sts.enumStruct({
            who: sts.array(() => MultiAddress),
        }),
        nominate: sts.enumStruct({
            targets: sts.array(() => MultiAddress),
        }),
        payout_stakers: sts.enumStruct({
            validatorStash: AccountId32,
            era: sts.number(),
        }),
        reap_stash: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        rebond: sts.enumStruct({
            value: sts.bigint(),
        }),
        scale_validator_count: sts.enumStruct({
            factor: Percent,
        }),
        set_controller: sts.unit(),
        set_invulnerables: sts.enumStruct({
            invulnerables: sts.array(() => AccountId32),
        }),
        set_min_commission: sts.enumStruct({
            new: Perbill,
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_staking_configs: sts.enumStruct({
            minNominatorBond: ConfigOp,
            minValidatorBond: ConfigOp,
            maxNominatorCount: Type_119,
            maxValidatorCount: Type_119,
            chillThreshold: Type_120,
            minCommission: Type_121,
        }),
        set_validator_count: sts.enumStruct({
            new: sts.number(),
        }),
        unbond: sts.enumStruct({
            value: sts.bigint(),
        }),
        validate: sts.enumStruct({
            prefs: ValidatorPrefs,
        }),
        withdraw_unbonded: sts.enumStruct({
            numSlashingSpans: sts.number(),
        }),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export const Type_121: sts.Type<Type_121> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export type Type_121 = Type_121_Noop | Type_121_Remove | Type_121_Set

export interface Type_121_Noop {
    __kind: 'Noop'
}

export interface Type_121_Remove {
    __kind: 'Remove'
}

export interface Type_121_Set {
    __kind: 'Set'
    value: Perbill
}

export const Type_120: sts.Type<Type_120> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Percent,
    }
})

export type Type_120 = Type_120_Noop | Type_120_Remove | Type_120_Set

export interface Type_120_Noop {
    __kind: 'Noop'
}

export interface Type_120_Remove {
    __kind: 'Remove'
}

export interface Type_120_Set {
    __kind: 'Set'
    value: Percent
}

export type Percent = number

export const Type_119: sts.Type<Type_119> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.number(),
    }
})

export type Type_119 = Type_119_Noop | Type_119_Remove | Type_119_Set

export interface Type_119_Noop {
    __kind: 'Noop'
}

export interface Type_119_Remove {
    __kind: 'Remove'
}

export interface Type_119_Set {
    __kind: 'Set'
    value: number
}

export const ConfigOp: sts.Type<ConfigOp> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export type ConfigOp = ConfigOp_Noop | ConfigOp_Remove | ConfigOp_Set

export interface ConfigOp_Noop {
    __kind: 'Noop'
}

export interface ConfigOp_Remove {
    __kind: 'Remove'
}

export interface ConfigOp_Set {
    __kind: 'Set'
    value: bigint
}

export const Percent = sts.number()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_cancel_deferred_slash | StakingCall_chill | StakingCall_chill_other | StakingCall_force_apply_min_commission | StakingCall_force_new_era | StakingCall_force_new_era_always | StakingCall_force_no_eras | StakingCall_force_unstake | StakingCall_increase_validator_count | StakingCall_kick | StakingCall_nominate | StakingCall_payout_stakers | StakingCall_reap_stash | StakingCall_rebond | StakingCall_scale_validator_count | StakingCall_set_controller | StakingCall_set_invulnerables | StakingCall_set_min_commission | StakingCall_set_payee | StakingCall_set_staking_configs | StakingCall_set_validator_count | StakingCall_unbond | StakingCall_validate | StakingCall_withdraw_unbonded

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
 * See [`Pallet::cancel_deferred_slash`].
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 * See [`Pallet::chill`].
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 * See [`Pallet::chill_other`].
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: AccountId32
}

/**
 * See [`Pallet::force_apply_min_commission`].
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: AccountId32
}

/**
 * See [`Pallet::force_new_era`].
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * See [`Pallet::force_new_era_always`].
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * See [`Pallet::force_no_eras`].
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 * See [`Pallet::force_unstake`].
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * See [`Pallet::increase_validator_count`].
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * See [`Pallet::kick`].
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: MultiAddress[]
}

/**
 * See [`Pallet::nominate`].
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: MultiAddress[]
}

/**
 * See [`Pallet::payout_stakers`].
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: AccountId32
    era: number
}

/**
 * See [`Pallet::reap_stash`].
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * See [`Pallet::rebond`].
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * See [`Pallet::scale_validator_count`].
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: Percent
}

/**
 * See [`Pallet::set_controller`].
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
}

/**
 * See [`Pallet::set_invulnerables`].
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: AccountId32[]
}

/**
 * See [`Pallet::set_min_commission`].
 */
export interface StakingCall_set_min_commission {
    __kind: 'set_min_commission'
    new: Perbill
}

/**
 * See [`Pallet::set_payee`].
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
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
 * See [`Pallet::set_validator_count`].
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * See [`Pallet::unbond`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 * See [`Pallet::validate`].
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: SessionKeys,
            proof: sts.bytes(),
        }),
    }
})

export const SessionKeys: sts.Type<SessionKeys> = sts.struct(() => {
    return  {
        aura: sts.bytes(),
        aleph: Public,
    }
})

export const Public = sts.bytes()

export interface SessionKeys {
    aura: Bytes
    aleph: Public
}

export type Public = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 * See [`Pallet::purge_keys`].
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * See [`Pallet::set_keys`].
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_after: sts.enumStruct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after

/**
 * See [`Pallet::cancel`].
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * See [`Pallet::cancel_named`].
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 * See [`Pallet::schedule`].
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_after`].
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named`].
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named_after`].
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const NominationPoolsCall: sts.Type<NominationPoolsCall> = sts.closedEnum(() => {
    return  {
        bond_extra: sts.enumStruct({
            extra: BondExtra,
        }),
        bond_extra_other: sts.enumStruct({
            member: MultiAddress,
            extra: BondExtra,
        }),
        chill: sts.enumStruct({
            poolId: sts.number(),
        }),
        claim_commission: sts.enumStruct({
            poolId: sts.number(),
        }),
        claim_payout: sts.unit(),
        claim_payout_other: sts.enumStruct({
            other: AccountId32,
        }),
        create: sts.enumStruct({
            amount: sts.bigint(),
            root: MultiAddress,
            nominator: MultiAddress,
            bouncer: MultiAddress,
        }),
        create_with_pool_id: sts.enumStruct({
            amount: sts.bigint(),
            root: MultiAddress,
            nominator: MultiAddress,
            bouncer: MultiAddress,
            poolId: sts.number(),
        }),
        join: sts.enumStruct({
            amount: sts.bigint(),
            poolId: sts.number(),
        }),
        nominate: sts.enumStruct({
            poolId: sts.number(),
            validators: sts.array(() => AccountId32),
        }),
        pool_withdraw_unbonded: sts.enumStruct({
            poolId: sts.number(),
            numSlashingSpans: sts.number(),
        }),
        set_claim_permission: sts.enumStruct({
            permission: ClaimPermission,
        }),
        set_commission: sts.enumStruct({
            poolId: sts.number(),
            newCommission: sts.option(() => sts.tuple(() => [Perbill, AccountId32])),
        }),
        set_commission_change_rate: sts.enumStruct({
            poolId: sts.number(),
            changeRate: CommissionChangeRate,
        }),
        set_commission_max: sts.enumStruct({
            poolId: sts.number(),
            maxCommission: Perbill,
        }),
        set_configs: sts.enumStruct({
            minJoinBond: Type_147,
            minCreateBond: Type_147,
            maxPools: Type_148,
            maxMembers: Type_148,
            maxMembersPerPool: Type_148,
            globalMaxCommission: Type_149,
        }),
        set_metadata: sts.enumStruct({
            poolId: sts.number(),
            metadata: sts.bytes(),
        }),
        set_state: sts.enumStruct({
            poolId: sts.number(),
            state: PoolState,
        }),
        unbond: sts.enumStruct({
            memberAccount: MultiAddress,
            unbondingPoints: sts.bigint(),
        }),
        update_roles: sts.enumStruct({
            poolId: sts.number(),
            newRoot: Type_150,
            newNominator: Type_150,
            newBouncer: Type_150,
        }),
        withdraw_unbonded: sts.enumStruct({
            memberAccount: MultiAddress,
            numSlashingSpans: sts.number(),
        }),
    }
})

export const PoolState: sts.Type<PoolState> = sts.closedEnum(() => {
    return  {
        Blocked: sts.unit(),
        Destroying: sts.unit(),
        Open: sts.unit(),
    }
})

export type PoolState = PoolState_Blocked | PoolState_Destroying | PoolState_Open

export interface PoolState_Blocked {
    __kind: 'Blocked'
}

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export interface PoolState_Open {
    __kind: 'Open'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NominationPoolsCall = NominationPoolsCall_bond_extra | NominationPoolsCall_bond_extra_other | NominationPoolsCall_chill | NominationPoolsCall_claim_commission | NominationPoolsCall_claim_payout | NominationPoolsCall_claim_payout_other | NominationPoolsCall_create | NominationPoolsCall_create_with_pool_id | NominationPoolsCall_join | NominationPoolsCall_nominate | NominationPoolsCall_pool_withdraw_unbonded | NominationPoolsCall_set_claim_permission | NominationPoolsCall_set_commission | NominationPoolsCall_set_commission_change_rate | NominationPoolsCall_set_commission_max | NominationPoolsCall_set_configs | NominationPoolsCall_set_metadata | NominationPoolsCall_set_state | NominationPoolsCall_unbond | NominationPoolsCall_update_roles | NominationPoolsCall_withdraw_unbonded

/**
 * See [`Pallet::bond_extra`].
 */
export interface NominationPoolsCall_bond_extra {
    __kind: 'bond_extra'
    extra: BondExtra
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
 * See [`Pallet::chill`].
 */
export interface NominationPoolsCall_chill {
    __kind: 'chill'
    poolId: number
}

/**
 * See [`Pallet::claim_commission`].
 */
export interface NominationPoolsCall_claim_commission {
    __kind: 'claim_commission'
    poolId: number
}

/**
 * See [`Pallet::claim_payout`].
 */
export interface NominationPoolsCall_claim_payout {
    __kind: 'claim_payout'
}

/**
 * See [`Pallet::claim_payout_other`].
 */
export interface NominationPoolsCall_claim_payout_other {
    __kind: 'claim_payout_other'
    other: AccountId32
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
 * See [`Pallet::join`].
 */
export interface NominationPoolsCall_join {
    __kind: 'join'
    amount: bigint
    poolId: number
}

/**
 * See [`Pallet::nominate`].
 */
export interface NominationPoolsCall_nominate {
    __kind: 'nominate'
    poolId: number
    validators: AccountId32[]
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
 * See [`Pallet::set_claim_permission`].
 */
export interface NominationPoolsCall_set_claim_permission {
    __kind: 'set_claim_permission'
    permission: ClaimPermission
}

/**
 * See [`Pallet::set_commission`].
 */
export interface NominationPoolsCall_set_commission {
    __kind: 'set_commission'
    poolId: number
    newCommission?: ([Perbill, AccountId32] | undefined)
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
 * See [`Pallet::set_commission_max`].
 */
export interface NominationPoolsCall_set_commission_max {
    __kind: 'set_commission_max'
    poolId: number
    maxCommission: Perbill
}

/**
 * See [`Pallet::set_configs`].
 */
export interface NominationPoolsCall_set_configs {
    __kind: 'set_configs'
    minJoinBond: Type_147
    minCreateBond: Type_147
    maxPools: Type_148
    maxMembers: Type_148
    maxMembersPerPool: Type_148
    globalMaxCommission: Type_149
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface NominationPoolsCall_set_metadata {
    __kind: 'set_metadata'
    poolId: number
    metadata: Bytes
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
 * See [`Pallet::unbond`].
 */
export interface NominationPoolsCall_unbond {
    __kind: 'unbond'
    memberAccount: MultiAddress
    unbondingPoints: bigint
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
 * See [`Pallet::withdraw_unbonded`].
 */
export interface NominationPoolsCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    memberAccount: MultiAddress
    numSlashingSpans: number
}

export interface CommissionChangeRate {
    maxIncrease: Perbill
    minDelay: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MultisigCall: sts.Type<MultisigCall> = sts.closedEnum(() => {
    return  {
        approve_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            call: Call,
            maxWeight: Weight,
        }),
        as_multi_threshold_1: sts.enumStruct({
            otherSignatories: sts.array(() => AccountId32),
            call: Call,
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            timepoint: Timepoint,
            callHash: sts.bytes(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultisigCall = MultisigCall_approve_as_multi | MultisigCall_as_multi | MultisigCall_as_multi_threshold_1 | MultisigCall_cancel_as_multi

/**
 * See [`Pallet::approve_as_multi`].
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
    maxWeight: Weight
}

/**
 * See [`Pallet::as_multi`].
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

/**
 * See [`Pallet::as_multi_threshold_1`].
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId32[]
    call: Call
}

/**
 * See [`Pallet::cancel_as_multi`].
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    timepoint: Timepoint
    callHash: Bytes
}

/**
 * Identity pallet declaration.
 */
export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return  {
        add_registrar: sts.enumStruct({
            account: MultiAddress,
        }),
        add_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        cancel_request: sts.enumStruct({
            regIndex: sts.number(),
        }),
        clear_identity: sts.unit(),
        kill_identity: sts.enumStruct({
            target: MultiAddress,
        }),
        provide_judgement: sts.enumStruct({
            regIndex: sts.number(),
            target: MultiAddress,
            judgement: Judgement,
            identity: H256,
        }),
        quit_sub: sts.unit(),
        remove_sub: sts.enumStruct({
            sub: MultiAddress,
        }),
        rename_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        request_judgement: sts.enumStruct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        }),
        set_account_id: sts.enumStruct({
            index: sts.number(),
            new: MultiAddress,
        }),
        set_fee: sts.enumStruct({
            index: sts.number(),
            fee: sts.bigint(),
        }),
        set_fields: sts.enumStruct({
            index: sts.number(),
            fields: BitFlags,
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId32, Data])),
        }),
    }
})

export const IdentityInfo: sts.Type<IdentityInfo> = sts.struct(() => {
    return  {
        additional: sts.array(() => sts.tuple(() => [Data, Data])),
        display: Data,
        legal: Data,
        web: Data,
        riot: Data,
        email: Data,
        pgpFingerprint: sts.option(() => sts.bytes()),
        image: Data,
        twitter: Data,
    }
})

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint?: (Bytes | undefined)
    image: Data
    twitter: Data
}

export type Data = Data_BlakeTwo256 | Data_Keccak256 | Data_None | Data_Raw0 | Data_Raw1 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw2 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw3 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Sha256 | Data_ShaThree256

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Bytes
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Bytes
}

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Bytes
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Bytes
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Bytes
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Bytes
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Bytes
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Bytes
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Bytes
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Bytes
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Bytes
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Bytes
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Bytes
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Bytes
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Bytes
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Bytes
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Bytes
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Bytes
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Bytes
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Bytes
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Bytes
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Bytes
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Bytes
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Bytes
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Bytes
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Bytes
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Bytes
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Bytes
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Bytes
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Bytes
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Bytes
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Bytes
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Bytes
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Bytes
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Bytes
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Bytes
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Bytes
}

export const BitFlags = sts.bigint()

export const H256 = sts.bytes()

export const Judgement: sts.Type<Judgement> = sts.closedEnum(() => {
    return  {
        Erroneous: sts.unit(),
        FeePaid: sts.bigint(),
        KnownGood: sts.unit(),
        LowQuality: sts.unit(),
        OutOfDate: sts.unit(),
        Reasonable: sts.unit(),
        Unknown: sts.unit(),
    }
})

export type Judgement = Judgement_Erroneous | Judgement_FeePaid | Judgement_KnownGood | Judgement_LowQuality | Judgement_OutOfDate | Judgement_Reasonable | Judgement_Unknown

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export const Data: sts.Type<Data> = sts.closedEnum(() => {
    return  {
        BlakeTwo256: sts.bytes(),
        Keccak256: sts.bytes(),
        None: sts.unit(),
        Raw0: sts.bytes(),
        Raw1: sts.bytes(),
        Raw10: sts.bytes(),
        Raw11: sts.bytes(),
        Raw12: sts.bytes(),
        Raw13: sts.bytes(),
        Raw14: sts.bytes(),
        Raw15: sts.bytes(),
        Raw16: sts.bytes(),
        Raw17: sts.bytes(),
        Raw18: sts.bytes(),
        Raw19: sts.bytes(),
        Raw2: sts.bytes(),
        Raw20: sts.bytes(),
        Raw21: sts.bytes(),
        Raw22: sts.bytes(),
        Raw23: sts.bytes(),
        Raw24: sts.bytes(),
        Raw25: sts.bytes(),
        Raw26: sts.bytes(),
        Raw27: sts.bytes(),
        Raw28: sts.bytes(),
        Raw29: sts.bytes(),
        Raw3: sts.bytes(),
        Raw30: sts.bytes(),
        Raw31: sts.bytes(),
        Raw32: sts.bytes(),
        Raw4: sts.bytes(),
        Raw5: sts.bytes(),
        Raw6: sts.bytes(),
        Raw7: sts.bytes(),
        Raw8: sts.bytes(),
        Raw9: sts.bytes(),
        Sha256: sts.bytes(),
        ShaThree256: sts.bytes(),
    }
})

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_add_sub | IdentityCall_cancel_request | IdentityCall_clear_identity | IdentityCall_kill_identity | IdentityCall_provide_judgement | IdentityCall_quit_sub | IdentityCall_remove_sub | IdentityCall_rename_sub | IdentityCall_request_judgement | IdentityCall_set_account_id | IdentityCall_set_fee | IdentityCall_set_fields | IdentityCall_set_identity | IdentityCall_set_subs

/**
 * See [`Pallet::add_registrar`].
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
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
 * See [`Pallet::cancel_request`].
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * See [`Pallet::clear_identity`].
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * See [`Pallet::kill_identity`].
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * See [`Pallet::provide_judgement`].
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: H256
}

/**
 * See [`Pallet::quit_sub`].
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * See [`Pallet::remove_sub`].
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
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
 * See [`Pallet::request_judgement`].
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
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
 * See [`Pallet::set_fee`].
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * See [`Pallet::set_fields`].
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: BitFlags
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
    subs: [AccountId32, Data][]
}

export type BitFlags = bigint

export type H256 = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ElectionsCall: sts.Type<ElectionsCall> = sts.closedEnum(() => {
    return  {
        change_validators: sts.enumStruct({
            reservedValidators: sts.option(() => sts.array(() => AccountId32)),
            nonReservedValidators: sts.option(() => sts.array(() => AccountId32)),
            committeeSize: sts.option(() => CommitteeSeats),
        }),
        set_elections_openness: sts.enumStruct({
            openness: ElectionOpenness,
        }),
    }
})

export const ElectionOpenness: sts.Type<ElectionOpenness> = sts.closedEnum(() => {
    return  {
        Permissioned: sts.unit(),
        Permissionless: sts.unit(),
    }
})

export type ElectionOpenness = ElectionOpenness_Permissioned | ElectionOpenness_Permissionless

export interface ElectionOpenness_Permissioned {
    __kind: 'Permissioned'
}

export interface ElectionOpenness_Permissionless {
    __kind: 'Permissionless'
}

export const CommitteeSeats: sts.Type<CommitteeSeats> = sts.struct(() => {
    return  {
        reservedSeats: sts.number(),
        nonReservedSeats: sts.number(),
        nonReservedFinalitySeats: sts.number(),
    }
})

export interface CommitteeSeats {
    reservedSeats: number
    nonReservedSeats: number
    nonReservedFinalitySeats: number
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
    reservedValidators?: (AccountId32[] | undefined)
    nonReservedValidators?: (AccountId32[] | undefined)
    committeeSize?: (CommitteeSeats | undefined)
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
export const ContractsCall: sts.Type<ContractsCall> = sts.closedEnum(() => {
    return  {
        call: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
            gasLimit: Weight,
            storageDepositLimit: sts.option(() => sts.bigint()),
            data: sts.bytes(),
        }),
        call_old_weight: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            data: sts.bytes(),
        }),
        instantiate: sts.enumStruct({
            value: sts.bigint(),
            gasLimit: Weight,
            storageDepositLimit: sts.option(() => sts.bigint()),
            codeHash: H256,
            data: sts.bytes(),
            salt: sts.bytes(),
        }),
        instantiate_old_weight: sts.enumStruct({
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            codeHash: H256,
            data: sts.bytes(),
            salt: sts.bytes(),
        }),
        instantiate_with_code: sts.enumStruct({
            value: sts.bigint(),
            gasLimit: Weight,
            storageDepositLimit: sts.option(() => sts.bigint()),
            code: sts.bytes(),
            data: sts.bytes(),
            salt: sts.bytes(),
        }),
        instantiate_with_code_old_weight: sts.enumStruct({
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            code: sts.bytes(),
            data: sts.bytes(),
            salt: sts.bytes(),
        }),
        migrate: sts.enumStruct({
            weightLimit: Weight,
        }),
        remove_code: sts.enumStruct({
            codeHash: H256,
        }),
        set_code: sts.enumStruct({
            dest: MultiAddress,
            codeHash: H256,
        }),
        upload_code: sts.enumStruct({
            code: sts.bytes(),
            storageDepositLimit: sts.option(() => sts.bigint()),
            determinism: Determinism,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ContractsCall = ContractsCall_call | ContractsCall_call_old_weight | ContractsCall_instantiate | ContractsCall_instantiate_old_weight | ContractsCall_instantiate_with_code | ContractsCall_instantiate_with_code_old_weight | ContractsCall_migrate | ContractsCall_remove_code | ContractsCall_set_code | ContractsCall_upload_code

/**
 * See [`Pallet::call`].
 */
export interface ContractsCall_call {
    __kind: 'call'
    dest: MultiAddress
    value: bigint
    gasLimit: Weight
    storageDepositLimit?: (bigint | undefined)
    data: Bytes
}

/**
 * See [`Pallet::call_old_weight`].
 */
export interface ContractsCall_call_old_weight {
    __kind: 'call_old_weight'
    dest: MultiAddress
    value: bigint
    gasLimit: bigint
    storageDepositLimit?: (bigint | undefined)
    data: Bytes
}

/**
 * See [`Pallet::instantiate`].
 */
export interface ContractsCall_instantiate {
    __kind: 'instantiate'
    value: bigint
    gasLimit: Weight
    storageDepositLimit?: (bigint | undefined)
    codeHash: H256
    data: Bytes
    salt: Bytes
}

/**
 * See [`Pallet::instantiate_old_weight`].
 */
export interface ContractsCall_instantiate_old_weight {
    __kind: 'instantiate_old_weight'
    value: bigint
    gasLimit: bigint
    storageDepositLimit?: (bigint | undefined)
    codeHash: H256
    data: Bytes
    salt: Bytes
}

/**
 * See [`Pallet::instantiate_with_code`].
 */
export interface ContractsCall_instantiate_with_code {
    __kind: 'instantiate_with_code'
    value: bigint
    gasLimit: Weight
    storageDepositLimit?: (bigint | undefined)
    code: Bytes
    data: Bytes
    salt: Bytes
}

/**
 * See [`Pallet::instantiate_with_code_old_weight`].
 */
export interface ContractsCall_instantiate_with_code_old_weight {
    __kind: 'instantiate_with_code_old_weight'
    value: bigint
    gasLimit: bigint
    storageDepositLimit?: (bigint | undefined)
    code: Bytes
    data: Bytes
    salt: Bytes
}

/**
 * See [`Pallet::migrate`].
 */
export interface ContractsCall_migrate {
    __kind: 'migrate'
    weightLimit: Weight
}

/**
 * See [`Pallet::remove_code`].
 */
export interface ContractsCall_remove_code {
    __kind: 'remove_code'
    codeHash: H256
}

/**
 * See [`Pallet::set_code`].
 */
export interface ContractsCall_set_code {
    __kind: 'set_code'
    dest: MultiAddress
    codeHash: H256
}

/**
 * See [`Pallet::upload_code`].
 */
export interface ContractsCall_upload_code {
    __kind: 'upload_code'
    code: Bytes
    storageDepositLimit?: (bigint | undefined)
    determinism: Determinism
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CommitteeManagementCall: sts.Type<CommitteeManagementCall> = sts.closedEnum(() => {
    return  {
        ban_from_committee: sts.enumStruct({
            banned: AccountId32,
            banReason: sts.bytes(),
        }),
        cancel_ban: sts.enumStruct({
            banned: AccountId32,
        }),
        set_ban_config: sts.enumStruct({
            minimalExpectedPerformance: sts.option(() => sts.number()),
            underperformedSessionCountThreshold: sts.option(() => sts.number()),
            cleanSessionCounterDelay: sts.option(() => sts.number()),
            banPeriod: sts.option(() => sts.number()),
        }),
        set_lenient_threshold: sts.enumStruct({
            thresholdPercent: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CommitteeManagementCall = CommitteeManagementCall_ban_from_committee | CommitteeManagementCall_cancel_ban | CommitteeManagementCall_set_ban_config | CommitteeManagementCall_set_lenient_threshold

/**
 * See [`Pallet::ban_from_committee`].
 */
export interface CommitteeManagementCall_ban_from_committee {
    __kind: 'ban_from_committee'
    banned: AccountId32
    banReason: Bytes
}

/**
 * See [`Pallet::cancel_ban`].
 */
export interface CommitteeManagementCall_cancel_ban {
    __kind: 'cancel_ban'
    banned: AccountId32
}

/**
 * See [`Pallet::set_ban_config`].
 */
export interface CommitteeManagementCall_set_ban_config {
    __kind: 'set_ban_config'
    minimalExpectedPerformance?: (number | undefined)
    underperformedSessionCountThreshold?: (number | undefined)
    cleanSessionCounterDelay?: (number | undefined)
    banPeriod?: (number | undefined)
}

/**
 * See [`Pallet::set_lenient_threshold`].
 */
export interface CommitteeManagementCall_set_lenient_threshold {
    __kind: 'set_lenient_threshold'
    thresholdPercent: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        set_balance_deprecated: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            oldReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_allow_death: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        upgrade_accounts: sts.enumStruct({
            who: sts.array(() => AccountId32),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall = BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_set_balance_deprecated | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

/**
 * See [`Pallet::force_set_balance`].
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
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
 * See [`Pallet::force_unreserve`].
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
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
 * See [`Pallet::transfer`].
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
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
 * See [`Pallet::transfer_allow_death`].
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
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
 * See [`Pallet::upgrade_accounts`].
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const AlephCall: sts.Type<AlephCall> = sts.closedEnum(() => {
    return  {
        schedule_finality_version_change: sts.enumStruct({
            versionIncoming: sts.number(),
            session: sts.number(),
        }),
        set_emergency_finalizer: sts.enumStruct({
            emergencyFinalizer: Public,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AlephCall = AlephCall_schedule_finality_version_change | AlephCall_set_emergency_finalizer

/**
 * See [`Pallet::schedule_finality_version_change`].
 */
export interface AlephCall_schedule_finality_version_change {
    __kind: 'schedule_finality_version_change'
    versionIncoming: number
    session: number
}

/**
 * See [`Pallet::set_emergency_finalizer`].
 */
export interface AlephCall_set_emergency_finalizer {
    __kind: 'set_emergency_finalizer'
    emergencyFinalizer: Public
}

export type Call = Call_Aleph | Call_Balances | Call_CommitteeManagement | Call_Contracts | Call_Elections | Call_Identity | Call_Multisig | Call_NominationPools | Call_Scheduler | Call_Session | Call_Staking | Call_Sudo | Call_System | Call_Timestamp | Call_Treasury | Call_Utility | Call_Vesting

export interface Call_Aleph {
    __kind: 'Aleph'
    value: AlephCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_CommitteeManagement {
    __kind: 'CommitteeManagement'
    value: CommitteeManagementCall
}

export interface Call_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Call_Elections {
    __kind: 'Elections'
    value: ElectionsCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export type Origin = Origin_Root | Origin_Signed

export interface Origin_Root {
    __kind: 'Root'
}

export interface Origin_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export const CommissionChangeRate: sts.Type<CommissionChangeRate> = sts.struct(() => {
    return  {
        maxIncrease: Perbill,
        minDelay: sts.number(),
    }
})

export const Perbill = sts.number()

export const AccountId32 = sts.bytes()

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return  {
        weight: Weight,
        class: DispatchClass,
        paysFee: Pays,
    }
})

export const Pays: sts.Type<Pays> = sts.closedEnum(() => {
    return  {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

export type Pays = Pays_No | Pays_Yes

export interface Pays_No {
    __kind: 'No'
}

export interface Pays_Yes {
    __kind: 'Yes'
}

export const DispatchClass: sts.Type<DispatchClass> = sts.closedEnum(() => {
    return  {
        Mandatory: sts.unit(),
        Normal: sts.unit(),
        Operational: sts.unit(),
    }
})

export type DispatchClass = DispatchClass_Mandatory | DispatchClass_Normal | DispatchClass_Operational

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Corruption: sts.unit(),
        Exhausted: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        RootNotAllowed: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
        Transactional: TransactionalError,
        Unavailable: sts.unit(),
    }
})

export const TransactionalError: sts.Type<TransactionalError> = sts.closedEnum(() => {
    return  {
        LimitReached: sts.unit(),
        NoLayer: sts.unit(),
    }
})

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        Blocked: sts.unit(),
        CannotCreate: sts.unit(),
        CannotCreateHold: sts.unit(),
        Frozen: sts.unit(),
        FundsUnavailable: sts.unit(),
        NotExpendable: sts.unit(),
        OnlyProvider: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
    }
})

export type TokenError = TokenError_BelowMinimum | TokenError_Blocked | TokenError_CannotCreate | TokenError_CannotCreateHold | TokenError_Frozen | TokenError_FundsUnavailable | TokenError_NotExpendable | TokenError_OnlyProvider | TokenError_UnknownAsset | TokenError_Unsupported

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_Blocked {
    __kind: 'Blocked'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_CannotCreateHold {
    __kind: 'CannotCreateHold'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_FundsUnavailable {
    __kind: 'FundsUnavailable'
}

export interface TokenError_NotExpendable {
    __kind: 'NotExpendable'
}

export interface TokenError_OnlyProvider {
    __kind: 'OnlyProvider'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export const ModuleError: sts.Type<ModuleError> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.bytes(),
    }
})

export interface ModuleError {
    index: number
    error: Bytes
}

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

export type ArithmeticError = ArithmeticError_DivisionByZero | ArithmeticError_Overflow | ArithmeticError_Underflow

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Corruption | DispatchError_Exhausted | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_RootNotAllowed | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional | DispatchError_Unavailable

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_RootNotAllowed {
    __kind: 'RootNotAllowed'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}
