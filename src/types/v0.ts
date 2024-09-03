import {sts, Result, Option, Bytes, BitSequence} from './support'

export const Weight = sts.bigint()

export const VestingInfo: sts.Type<VestingInfo> = sts.struct(() => {
    return  {
        locked: Balance,
        perBlock: Balance,
        startingBlock: BlockNumber,
    }
})

export interface VestingInfo {
    locked: Balance
    perBlock: Balance
    startingBlock: BlockNumber
}

export type BlockNumber = number

export type Balance = bigint

export const StatementKind: sts.Type<StatementKind> = sts.closedEnum(() => {
    return  {
        Regular: sts.unit(),
        Saft: sts.unit(),
    }
})

export type StatementKind = StatementKind_Regular | StatementKind_Saft

export interface StatementKind_Regular {
    __kind: 'Regular'
}

export interface StatementKind_Saft {
    __kind: 'Saft'
}

export const EcdsaSignature = sts.bytes()

export const CollatorId = sts.bytes()

export const ParaInfo: sts.Type<ParaInfo> = sts.struct(() => {
    return  {
        manager: AccountId,
        deposit: Balance,
        locked: sts.boolean(),
    }
})

export interface ParaInfo {
    manager: AccountId
    deposit: Balance
    locked: boolean
}

export type AccountId = Bytes

export const ValidationCode = sts.bytes()

export const HeadData = sts.bytes()

export const DoubleVoteReport: sts.Type<DoubleVoteReport> = sts.struct(() => {
    return  {
        identity: ValidatorId,
        first: sts.tuple(() => [Statement, ValidatorSignature]),
        second: sts.tuple(() => [Statement, ValidatorSignature]),
        proof: MembershipProof,
        signingContext: SigningContext,
    }
})

export const SigningContext: sts.Type<SigningContext> = sts.struct(() => {
    return  {
        sessionIndex: SessionIndex,
        parentHash: Hash,
    }
})

export interface SigningContext {
    sessionIndex: SessionIndex
    parentHash: Hash
}

export type Hash = Bytes

export type SessionIndex = number

export const MembershipProof: sts.Type<MembershipProof> = sts.struct(() => {
    return  {
        session: SessionIndex,
        trieNodes: sts.array(() => sts.bytes()),
        validatorCount: ValidatorCount,
    }
})

export const ValidatorCount = sts.number()

export interface MembershipProof {
    session: SessionIndex
    trieNodes: Bytes[]
    validatorCount: ValidatorCount
}

export type ValidatorCount = number

export const ValidatorSignature = sts.bytes()

export const Statement: sts.Type<Statement> = sts.closedEnum(() => {
    return  {
        Candidate: Hash,
        Invalid: Hash,
        Never: sts.unit(),
        Valid: Hash,
    }
})

export type Statement = Statement_Candidate | Statement_Invalid | Statement_Never | Statement_Valid

export interface Statement_Candidate {
    __kind: 'Candidate'
    value: Hash
}

export interface Statement_Invalid {
    __kind: 'Invalid'
    value: Hash
}

export interface Statement_Never {
    __kind: 'Never'
}

export interface Statement_Valid {
    __kind: 'Valid'
    value: Hash
}

export interface DoubleVoteReport {
    identity: ValidatorId
    first: [Statement, ValidatorSignature]
    second: [Statement, ValidatorSignature]
    proof: MembershipProof
    signingContext: SigningContext
}

export type ValidatorSignature = Bytes

export type ValidatorId = Bytes

export const AttestedCandidate: sts.Type<AttestedCandidate> = sts.struct(() => {
    return  {
        candidate: AbridgedCandidateReceipt,
        validityVotes: sts.array(() => ValidityAttestation),
        validatorIndices: sts.bitseq(),
    }
})

export const ValidityAttestation: sts.Type<ValidityAttestation> = sts.closedEnum(() => {
    return  {
        Explicit: ValidatorSignature,
        Implicit: ValidatorSignature,
        Never: sts.unit(),
    }
})

export type ValidityAttestation = ValidityAttestation_Explicit | ValidityAttestation_Implicit | ValidityAttestation_Never

export interface ValidityAttestation_Explicit {
    __kind: 'Explicit'
    value: ValidatorSignature
}

export interface ValidityAttestation_Implicit {
    __kind: 'Implicit'
    value: ValidatorSignature
}

export interface ValidityAttestation_Never {
    __kind: 'Never'
}

export const AbridgedCandidateReceipt: sts.Type<AbridgedCandidateReceipt> = sts.struct(() => {
    return  {
        parachainIndex: ParaId,
        relayParent: Hash,
        headData: HeadData,
        collator: CollatorId,
        signature: CollatorSignature,
        povBlockHash: Hash,
        commitments: CandidateCommitments,
    }
})

export const CandidateCommitments: sts.Type<CandidateCommitments> = sts.struct(() => {
    return  {
        upwardMessages: sts.array(() => UpwardMessage),
        horizontalMessages: sts.array(() => OutboundHrmpMessage),
        newValidationCode: sts.option(() => ValidationCode),
        headData: HeadData,
        processedDownwardMessages: sts.number(),
        hrmpWatermark: BlockNumber,
    }
})

export const OutboundHrmpMessage: sts.Type<OutboundHrmpMessage> = sts.struct(() => {
    return  {
        recipient: sts.number(),
        data: sts.bytes(),
    }
})

export interface OutboundHrmpMessage {
    recipient: number
    data: Bytes
}

export const UpwardMessage = sts.bytes()

export interface CandidateCommitments {
    upwardMessages: UpwardMessage[]
    horizontalMessages: OutboundHrmpMessage[]
    newValidationCode?: (ValidationCode | undefined)
    headData: HeadData
    processedDownwardMessages: number
    hrmpWatermark: BlockNumber
}

export type HeadData = Bytes

export type ValidationCode = Bytes

export type UpwardMessage = Bytes

export const CollatorSignature = sts.bytes()

export interface AbridgedCandidateReceipt {
    parachainIndex: ParaId
    relayParent: Hash
    headData: HeadData
    collator: CollatorId
    signature: CollatorSignature
    povBlockHash: Hash
    commitments: CandidateCommitments
}

export type CollatorSignature = Bytes

export type CollatorId = Bytes

export type ParaId = number

export interface AttestedCandidate {
    candidate: AbridgedCandidateReceipt
    validityVotes: ValidityAttestation[]
    validatorIndices: BitSequence
}

export const Renouncing: sts.Type<Renouncing> = sts.closedEnum(() => {
    return  {
        Candidate: sts.number(),
        Member: sts.unit(),
        RunnerUp: sts.unit(),
    }
})

export type Renouncing = Renouncing_Candidate | Renouncing_Member | Renouncing_RunnerUp

export interface Renouncing_Candidate {
    __kind: 'Candidate'
    value: number
}

export interface Renouncing_Member {
    __kind: 'Member'
}

export interface Renouncing_RunnerUp {
    __kind: 'RunnerUp'
}

export const DefunctVoter: sts.Type<DefunctVoter> = sts.struct(() => {
    return  {
        who: AccountId,
        voteCount: sts.number(),
        candidateCount: sts.number(),
    }
})

export interface DefunctVoter {
    who: AccountId
    voteCount: number
    candidateCount: number
}

export const Proposal: sts.Type<Proposal> = sts.closedEnum(() => {
    return  {
        Attestations: AttestationsCall,
        AuthorityDiscovery: AuthorityDiscoveryCall,
        Authorship: AuthorshipCall,
        Babe: BabeCall,
        Balances: BalancesCall,
        Claims: ClaimsCall,
        Council: CouncilCall,
        Democracy: DemocracyCall,
        ElectionsPhragmen: ElectionsPhragmenCall,
        FinalityTracker: FinalityTrackerCall,
        Grandpa: GrandpaCall,
        ImOnline: ImOnlineCall,
        Indices: IndicesCall,
        Offences: OffencesCall,
        Parachains: ParachainsCall,
        Registrar: RegistrarCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Slots: SlotsCall,
        Staking: StakingCall,
        Sudo: SudoCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
    }
})

export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        vest: sts.unit(),
        vest_other: sts.enumStruct({
            target: LookupSource,
        }),
        vested_transfer: sts.enumStruct({
            target: LookupSource,
            schedule: VestingInfo,
        }),
    }
})

export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

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
 *  - Benchmark:
 *      - Unlocked: 48.76 + .048 * l µs (min square analysis)
 *      - Locked: 44.43 + .284 * l µs (min square analysis)
 *  - Using 50 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.
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
 *  - Benchmark:
 *      - Unlocked: 44.3 + .294 * l µs (min square analysis)
 *      - Locked: 48.16 + .103 * l µs (min square analysis)
 *  - Using 50 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.
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
 *  - Benchmark: 100.3 + .365 * l µs (min square analysis)
 *  - Using 100 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.
 *  # </weight>
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: LookupSource
    schedule: VestingInfo
}

export type LookupSource = Bytes

export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return  {
        approve_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId),
            maybeTimepoint: sts.option(() => Timepoint),
            call: Type_44,
        }),
        as_sub: sts.enumStruct({
            index: sts.number(),
            call: Type_44,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Type_44),
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId),
            timepoint: Timepoint,
            callHash: sts.bytes(),
        }),
    }
})

export type UtilityCall = UtilityCall_approve_as_multi | UtilityCall_as_multi | UtilityCall_as_sub | UtilityCall_batch | UtilityCall_cancel_as_multi

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
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
 *    `MultisigDepositBase + threshold * MultisigDepositFactor`.
 *  ----------------------------------
 *  - Base Weight:
 *      - Create: 44.71 + 0.088 * S
 *      - Approve: 31.48 + 0.116 * S
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account]
 *      - Write: Multisig Storage, [Caller Account]
 *  # </weight>
 */
export interface UtilityCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  If there are enough, then dispatch the call. Calls must each fulfil the `IsCallable`
 *  filter.
 * 
 *  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
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
 *    `MultisigDepositBase + threshold * MultisigDepositFactor`.
 *  -------------------------------
 *  - Base Weight:
 *      - Create: 46.55 + 0.089 * S µs
 *      - Approve: 34.03 + .112 * S µs
 *      - Complete: 40.36 + .225 * S µs
 *  - DB Weight:
 *      - Reads: Multisig Storage, [Caller Account]
 *      - Writes: Multisig Storage, [Caller Account]
 *  - Plus Call Weight
 *  # </weight>
 */
export interface UtilityCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Type_44
}

/**
 *  Send a call through an indexed pseudonym of the sender.
 * 
 *  Calls must each fulfil the `IsCallable` filter.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - Base weight: 2.861 µs
 *  - Plus the weight of the `call`
 *  # </weight>
 */
export interface UtilityCall_as_sub {
    __kind: 'as_sub'
    index: number
    call: Type_44
}

/**
 *  Send a batch of dispatch calls.
 * 
 *  This will execute until the first one fails and then stop. Calls must fulfil the
 *  `IsCallable` filter unless the origin is `Root`.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin.
 * 
 *  # <weight>
 *  - Base weight: 14.39 + .987 * c µs
 *  - Plus the sum of the weights of the `calls`.
 *  - Plus one additional event. (repeat read/write)
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
    calls: Type_44[]
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
 *  - Base Weight: 37.6 + 0.084 * S
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account]
 *      - Write: Multisig Storage, [Caller Account]
 *  # </weight>
 */
export interface UtilityCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId[]
    timepoint: Timepoint
    callHash: Bytes
}

export type Type_44 = Type_44_Attestations | Type_44_AuthorityDiscovery | Type_44_Authorship | Type_44_Babe | Type_44_Balances | Type_44_Claims | Type_44_Council | Type_44_Democracy | Type_44_ElectionsPhragmen | Type_44_FinalityTracker | Type_44_Grandpa | Type_44_ImOnline | Type_44_Indices | Type_44_Offences | Type_44_Parachains | Type_44_Registrar | Type_44_Scheduler | Type_44_Session | Type_44_Slots | Type_44_Staking | Type_44_Sudo | Type_44_System | Type_44_TechnicalCommittee | Type_44_TechnicalMembership | Type_44_Timestamp | Type_44_Treasury | Type_44_Utility | Type_44_Vesting

export interface Type_44_Attestations {
    __kind: 'Attestations'
    value: AttestationsCall
}

export interface Type_44_AuthorityDiscovery {
    __kind: 'AuthorityDiscovery'
    value: AuthorityDiscoveryCall
}

export interface Type_44_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Type_44_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Type_44_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Type_44_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Type_44_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Type_44_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Type_44_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenCall
}

export interface Type_44_FinalityTracker {
    __kind: 'FinalityTracker'
    value: FinalityTrackerCall
}

export interface Type_44_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Type_44_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Type_44_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Type_44_Offences {
    __kind: 'Offences'
    value: OffencesCall
}

export interface Type_44_Parachains {
    __kind: 'Parachains'
    value: ParachainsCall
}

export interface Type_44_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
}

export interface Type_44_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Type_44_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Type_44_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Type_44_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Type_44_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Type_44_System {
    __kind: 'System'
    value: SystemCall
}

export interface Type_44_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Type_44_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Type_44_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Type_44_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Type_44_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Type_44_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_close_tip | TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_report_awesome | TreasuryCall_retract_tip | TreasuryCall_tip | TreasuryCall_tip_new

/**
 *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 *  and the original deposit will be returned.
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
export interface TreasuryCall_close_tip {
    __kind: 'close_tip'
    hash: Hash
}

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
 *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *  `TipReportDepositPerByte` for each byte in `reason`.
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
 *  - DbReads: `Reasons`, `Tips`, `who account data`
 *  - DbWrites: `Tips`, `who account data`
 *  # </weight>
 */
export interface TreasuryCall_report_awesome {
    __kind: 'report_awesome'
    reason: Bytes
    who: AccountId
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
export interface TreasuryCall_retract_tip {
    __kind: 'retract_tip'
    hash: Hash
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
export interface TreasuryCall_tip {
    __kind: 'tip'
    hash: Hash
    tipValue: BalanceOf
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
export interface TreasuryCall_tip_new {
    __kind: 'tip_new'
    reason: Bytes
    who: AccountId
    tipValue: BalanceOf
}

export type BalanceOf = bigint

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
 *  - `O(T)` where `T` complexity of `on_timestamp_set`
 *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
 *  - 1 event handler `on_timestamp_set` `O(T)`.
 *  - Benchmark: 7.678 (min squares analysis)
 *    - NOTE: This benchmark was done for a runtime with insignificant `on_timestamp_set` handlers.
 *      New benchmarking is needed when adding new handlers.
 *  # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_change_key | TechnicalMembershipCall_clear_prime | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_swap_member

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `AddOrigin` or root.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: AccountId
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: AccountId
}

/**
 *  Remove the prime member if it exists.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `RemoveOrigin` or root.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: AccountId
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `ResetOrigin` or root.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId[]
}

/**
 *  Set the prime member. Must be a current member.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: AccountId
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `SwapOrigin` or root.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: AccountId
    add: AccountId
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

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
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposal: Hash
    index: number
    proposalWeightBound: bigint
    lengthBound: number
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
export interface TechnicalCommitteeCall_execute {
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
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Proposal
    lengthBound: number
}

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
 *  NOTE: Does not enforce the expected `MAX_MEMBERS` limit on the amount of members, but
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
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId[]
    prime?: (AccountId | undefined)
    oldCount: MemberCount
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Hash
    index: number
    approve: boolean
}

export type MemberCount = number

export type SystemCall = SystemCall_fill_block | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_set_changes_trie_config | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage | SystemCall_suicide

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: Perbill
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
    prefix: Key
    subkeys: number
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
    keys: Key[]
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
    remark: Bytes
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
    changesTrieConfig?: (ChangesTrieConfiguration | undefined)
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
    code: Bytes
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
    code: Bytes
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
    items: KeyValue[]
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

export type KeyValue = [StorageKey, StorageData]

export type StorageData = Bytes

export type StorageKey = Bytes

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export type Key = Bytes

export type Perbill = number

export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

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
    call: Type_44
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
    call: Type_44
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
    call: Type_44
    weight: Weight
}

export type Weight = bigint

export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_cancel_deferred_slash | StakingCall_chill | StakingCall_force_new_era | StakingCall_force_new_era_always | StakingCall_force_no_eras | StakingCall_force_unstake | StakingCall_nominate | StakingCall_payout_nominator | StakingCall_payout_stakers | StakingCall_payout_validator | StakingCall_reap_stash | StakingCall_rebond | StakingCall_set_controller | StakingCall_set_history_depth | StakingCall_set_invulnerables | StakingCall_set_payee | StakingCall_set_validator_count | StakingCall_submit_election_solution | StakingCall_submit_election_solution_unsigned | StakingCall_unbond | StakingCall_validate | StakingCall_withdraw_unbonded

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
 *  Base Weight: 67.87 µs
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
 *  Base Weight: 54.88 µs
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
 *  Cancel enactment of a deferred slash.
 * 
 *  Can be called by either the root origin or the `T::SlashCancelOrigin`.
 * 
 *  Parameters: era and indices of the slashes for that era to kill.
 * 
 *  # <weight>
 *  Complexity: O(U + S)
 *  with U unapplied slashes weighted with U=1000
 *  and S is the number of slash indices to be canceled.
 *  - Base: 5870 + 34.61 * S µs
 *  - Read: Unapplied Slashes
 *  - Write: Unapplied Slashes
 *  # </weight>
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: EraIndex
    slashIndices: number[]
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
 *  Base Weight: 16.53 µs
 *  DB Weight:
 *  - Read: EraElectionStatus, Ledger
 *  - Write: Validators, Nominators
 *  # </weight>
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 *  Force there to be a new era at the end of the next session. After this, it will be
 *  reset to normal (non-forced) behaviour.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Base Weight: 1.959 µs
 *  - Write ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 *  Force there to be a new era at the end of sessions indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - Base Weight: 2.05 µs
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 *  Force there to be no new eras indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Base Weight: 1.857 µs
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 *  Force a current staker to become completely unstaked, immediately.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  O(S) where S is the number of slashing spans to be removed
 *  Base Weight: 53.07 + 2.365 * S µs
 *  Reads: Bonded, Slashing Spans, Account, Locks
 *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
 *  Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: AccountId
    numSlashingSpans: number
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
 *  Base Weight: 22.34 + .36 * N µs
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
 *  **This extrinsic will be removed after `MigrationEra + HistoryDepth` has passed, giving
 *  opportunity for users to claim all rewards before moving to Simple Payouts. After this
 *  time, you should use `payout_stakers` instead.**
 * 
 *  Make one nominator's payout for one era.
 * 
 *  - `who` is the controller account of the nominator to pay out.
 *  - `era` may not be lower than one following the most recently paid era. If it is higher,
 *    then it indicates an instruction to skip the payout of all previous eras.
 *  - `validators` is the list of all validators that `who` had exposure to during `era`,
 *    alongside the index of `who` in the clipped exposure of the validator.
 *    I.e. each element is a tuple of
 *    `(validator, index of `who` in clipped exposure of validator)`.
 *    If it is incomplete, then less than the full reward will be paid out.
 *    It must not exceed `MAX_NOMINATIONS`.
 * 
 *  WARNING: once an era is payed for a validator such validator can't claim the payout of
 *  previous era.
 * 
 *  WARNING: Incorrect arguments here can result in loss of payout. Be very careful.
 * 
 *  # <weight>
 *  - Number of storage read of `O(validators)`; `validators` is the argument of the call,
 *    and is bounded by `MAX_NOMINATIONS`.
 *  - Each storage read is `O(N)` size and decode complexity; `N` is the  maximum
 *    nominations that can be given to a single validator.
 *  - Computation complexity: `O(MAX_NOMINATIONS * logN)`; `MAX_NOMINATIONS` is the
 *    maximum number of validators that may be nominated by a single nominator, it is
 *    bounded only economically (all nominators are required to place a minimum stake).
 *  # </weight>
 */
export interface StakingCall_payout_nominator {
    __kind: 'payout_nominator'
    era: EraIndex
    validators: [AccountId, number][]
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
 *  Base Weight: 110 + 54.2 * N µs (Median Slopes)
 *  DB Weight:
 *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, MigrateEra, ErasValidatorReward,
 *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
 *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
 *  - Write Each: System Account, Locks, Ledger (3 items)
 *  # </weight>
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: AccountId
    era: EraIndex
}

/**
 *  **This extrinsic will be removed after `MigrationEra + HistoryDepth` has passed, giving
 *  opportunity for users to claim all rewards before moving to Simple Payouts. After this
 *  time, you should use `payout_stakers` instead.**
 * 
 *  Make one validator's payout for one era.
 * 
 *  - `who` is the controller account of the validator to pay out.
 *  - `era` may not be lower than one following the most recently paid era. If it is higher,
 *    then it indicates an instruction to skip the payout of all previous eras.
 * 
 *  WARNING: once an era is payed for a validator such validator can't claim the payout of
 *  previous era.
 * 
 *  WARNING: Incorrect arguments here can result in loss of payout. Be very careful.
 * 
 *  # <weight>
 *  - Time complexity: O(1).
 *  - Contains a limited number of reads and writes.
 *  # </weight>
 */
export interface StakingCall_payout_validator {
    __kind: 'payout_validator'
    era: EraIndex
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
 *  Base Weight: 75.94 + 2.396 * S µs
 *  DB Weight:
 *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
 *  - Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: AccountId
    numSlashingSpans: number
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
 *  - Base Weight: 34.51 µs * .048 L µs
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
 *  Base Weight: 25.22 µs
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
 *  - Base Weight: 29.13 * E µs
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
 *  Set the validators who cannot be slashed (if any).
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - O(V)
 *  - Base Weight: 2.208 + .006 * V µs
 *  - Write: Invulnerables
 *  # </weight>
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    validators: AccountId[]
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
 *  - Base Weight: 11.33 µs
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
 *  Sets the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Base Weight: 1.717 µs
 *  Write: Validator Count
 *  # </weight>
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 *  Submit a phragmen result to the chain. If the solution:
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
 *  Both of which may be computed using [`phragmen`], or any other algorithm.
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
 *  See `crate::weight` module.
 *  # </weight>
 */
export interface StakingCall_submit_election_solution {
    __kind: 'submit_election_solution'
    winners: ValidatorIndex[]
    compact: CompactAssignments
    score: PhragmenScore
    era: EraIndex
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
 *  See `crate::weight` module.
 *  # </weight>
 */
export interface StakingCall_submit_election_solution_unsigned {
    __kind: 'submit_election_solution_unsigned'
    winners: ValidatorIndex[]
    compact: CompactAssignments
    score: PhragmenScore
    era: EraIndex
    size: ElectionSize
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
 *  Base Weight: 50.34 µs
 *  DB Weight:
 *  - Read: Era Election Status, Ledger, Current Era, Locks, [Origin Account]
 *  - Write: [Origin Account], Locks, Ledger
 *  </weight>
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
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
 *  Base Weight: 17.13 µs
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
 *  Base Weight:
 *  Update: 50.52 + .028 * S µs
 *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
 *  - Writes: [Origin Account], Locks, Ledger
 *  Kill: 79.41 + 2.366 * S µs
 *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin Account], Locks
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, [Origin Account], Locks
 *  - Writes Each: SpanSlash * S
 *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
 *  # </weight>
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

export interface ValidatorPrefs {
    commission: number
}

export interface ElectionSize {
    validators: number
    nominators: number
}

export type PhragmenScore = bigint[]

export interface CompactAssignments {
    votes1: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes2: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes3: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes4: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes5: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes6: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes7: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes8: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes9: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes10: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes11: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes12: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes13: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes14: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes15: [NominatorIndex, CompactScore[], ValidatorIndex][]
    votes16: [NominatorIndex, CompactScore[], ValidatorIndex][]
}

export type CompactScore = [ValidatorIndex, OffchainAccuracy]

export type OffchainAccuracy = number

export type NominatorIndex = number

export type ValidatorIndex = number

export type EraIndex = number

export type RewardDestination = RewardDestination_Account | RewardDestination_Controller | RewardDestination_None | RewardDestination_Staked | RewardDestination_Stash

export interface RewardDestination_Account {
    __kind: 'Account'
    value: AccountId
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

export type SlotsCall = SlotsCall_bid | SlotsCall_bid_renew | SlotsCall_elaborate_deploy_data | SlotsCall_fix_deploy_data | SlotsCall_new_auction | SlotsCall_set_offboarding

/**
 *  Make a new bid from an account (including a parachain account) for deploying a new
 *  parachain.
 * 
 *  Multiple simultaneous bids from the same bidder are allowed only as long as all active
 *  bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 * 
 *  - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
 *  funded by) the same account.
 *  - `auction_index` is the index of the auction to bid on. Should just be the present
 *  value of `AuctionCounter`.
 *  - `first_slot` is the first lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `last_slot` is the last lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `amount` is the amount to bid to be held as deposit for the parachain should the
 *  bid win. This amount is held throughout the range.
 */
export interface SlotsCall_bid {
    __kind: 'bid'
    sub: number
    auctionIndex: number
    firstSlot: number
    lastSlot: number
    amount: bigint
}

/**
 *  Make a new bid from a parachain account for renewing that (pre-existing) parachain.
 * 
 *  The origin *must* be a parachain account.
 * 
 *  Multiple simultaneous bids from the same bidder are allowed only as long as all active
 *  bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 * 
 *  - `auction_index` is the index of the auction to bid on. Should just be the present
 *  value of `AuctionCounter`.
 *  - `first_slot` is the first lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `last_slot` is the last lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `amount` is the amount to bid to be held as deposit for the parachain should the
 *  bid win. This amount is held throughout the range.
 */
export interface SlotsCall_bid_renew {
    __kind: 'bid_renew'
    auctionIndex: number
    firstSlot: number
    lastSlot: number
    amount: bigint
}

/**
 *  Note a new parachain's code.
 * 
 *  This must be called after `fix_deploy_data` and `code` must be the preimage of the
 *  `code_hash` passed there for the same `para_id`.
 * 
 *  This may be called before or after the beginning of the parachain's first lease period.
 *  If called before then the parachain will become active at the first block of its
 *  starting lease period. If after, then it will become active immediately after this call.
 * 
 *  - `_origin` is irrelevant.
 *  - `para_id` is the parachain ID whose code will be elaborated.
 *  - `code` is the preimage of the registered `code_hash` of `para_id`.
 */
export interface SlotsCall_elaborate_deploy_data {
    __kind: 'elaborate_deploy_data'
    paraId: number
    code: ValidationCode
}

/**
 *  Set the deploy information for a successful bid to deploy a new parachain.
 * 
 *  - `origin` must be the successful bidder account.
 *  - `sub` is the sub-bidder ID of the bidder.
 *  - `para_id` is the parachain ID allotted to the winning bidder.
 *  - `code_hash` is the hash of the parachain's Wasm validation function.
 *  - `initial_head_data` is the parachain's initial head data.
 */
export interface SlotsCall_fix_deploy_data {
    __kind: 'fix_deploy_data'
    sub: number
    paraId: number
    codeHash: Hash
    codeSize: number
    initialHeadData: HeadData
}

/**
 *  Create a new auction.
 * 
 *  This can only happen when there isn't already an auction in progress and may only be
 *  called by the root origin. Accepts the `duration` of this auction and the
 *  `lease_period_index` of the initial lease period of the four that are to be auctioned.
 */
export interface SlotsCall_new_auction {
    __kind: 'new_auction'
    duration: number
    leasePeriodIndex: number
}

/**
 *  Set the off-boarding information for a parachain.
 * 
 *  The origin *must* be a parachain account.
 * 
 *  - `dest` is the destination account to receive the parachain's deposit.
 */
export interface SlotsCall_set_offboarding {
    __kind: 'set_offboarding'
    dest: LookupSource
}

export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

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
    keys: Keys
    proof: Bytes
}

export type Keys = [AccountId, AccountId, AccountId, AccountId, AccountId]

export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_named

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
    when: BlockNumber
    index: number
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
    id: Bytes
}

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
    when: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_44
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
    id: Bytes
    when: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_44
}

export type Priority = number

export type Period = [BlockNumber, number]

export type RegistrarCall = RegistrarCall_deregister_para | RegistrarCall_deregister_parathread | RegistrarCall_register_para | RegistrarCall_register_parathread | RegistrarCall_select_parathread | RegistrarCall_set_thread_count | RegistrarCall_swap

/**
 *  Deregister a parachain with given id
 */
export interface RegistrarCall_deregister_para {
    __kind: 'deregister_para'
    id: number
}

/**
 *  Deregister a parathread and retrieve the deposit.
 * 
 *  Must be sent from a `Parachain` origin which is currently a parathread.
 * 
 *  Ensure that before calling this that any funds you want emptied from the parathread's
 *  account is moved out; after this it will be impossible to retrieve them (without
 *  governance intervention).
 */
export interface RegistrarCall_deregister_parathread {
    __kind: 'deregister_parathread'
}

/**
 *  Register a parachain with given code. Must be called by root.
 *  Fails if given ID is already used.
 * 
 *  Unlike the `Registrar` trait function of the same name, this
 *  checks the code and head data against size limits.
 */
export interface RegistrarCall_register_para {
    __kind: 'register_para'
    id: number
    info: ParaInfo
    code: ValidationCode
    initialHeadData: HeadData
}

/**
 *  Register a parathread for immediate use.
 * 
 *  Must be sent from a Signed origin that is able to have ParathreadDeposit reserved.
 *  `code` and `initial_head_data` are used to initialize the parathread's state.
 * 
 *  Unlike `register_para`, this function does check that the maximum code size
 *  and head data size are respected, as parathread registration is an atomic
 *  action.
 */
export interface RegistrarCall_register_parathread {
    __kind: 'register_parathread'
    code: ValidationCode
    initialHeadData: HeadData
}

/**
 *  Place a bid for a parathread to be progressed in the next block.
 * 
 *  This is a kind of special transaction that should be heavily prioritized in the
 *  transaction pool according to the `value`; only `ThreadCount` of them may be presented
 *  in any single block.
 */
export interface RegistrarCall_select_parathread {
    __kind: 'select_parathread'
    id: number
    collator: CollatorId
    headHash: Hash
}

/**
 *  Reset the number of parathreads that can pay to be scheduled in a single block.
 * 
 *  - `count`: The number of parathreads.
 * 
 *  Must be called from Root origin.
 */
export interface RegistrarCall_set_thread_count {
    __kind: 'set_thread_count'
    count: number
}

/**
 *  Swap a parachain with another parachain or parathread. The origin must be a `Parachain`.
 *  The swap will happen only if there is already an opposite swap pending. If there is not,
 *  the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
 * 
 *  The `ParaId`s remain mapped to the same head data and code so external code can rely on
 *  `ParaId` to be a long-term identifier of a notional "parachain". However, their
 *  scheduling info (i.e. whether they're a parathread or parachain), auction information
 *  and the auction deposit are switched.
 */
export interface RegistrarCall_swap {
    __kind: 'swap'
    other: number
}

export type ParachainsCall = ParachainsCall_report_double_vote | ParachainsCall_set_heads

/**
 *  Provide a proof that some validator has commited a double-vote.
 * 
 *  The weight is 0; in order to avoid DoS a `SignedExtension` validation
 *  is implemented.
 */
export interface ParachainsCall_report_double_vote {
    __kind: 'report_double_vote'
    report: DoubleVoteReport
}

/**
 *  Provide candidate receipts for parachains, in ascending order by id.
 */
export interface ParachainsCall_set_heads {
    __kind: 'set_heads'
    heads: AttestedCandidate[]
}

export type OffencesCall = never

export type IndicesCall = IndicesCall_claim | IndicesCall_force_transfer | IndicesCall_free | IndicesCall_transfer

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
 *  # </weight>
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: AccountIndex
}

/**
 *  Force an index to an account. This doesn't require a deposit. If the index is already
 *  held, then any deposit is reimbursed to its current owner.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `index`: the index to be (re-)assigned.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one reserve operation.
 *  - One event.
 *  # </weight>
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: AccountId
    index: AccountIndex
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
 *  # </weight>
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: AccountIndex
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
 *  # </weight>
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: AccountId
    index: AccountIndex
}

export type AccountIndex = number

export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 *  # <weight>
 *  - Complexity: `O(K + E)` where K is length of `Keys` and E is length of
 *    `Heartbeat.network_state.external_address`
 * 
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
    signature: Signature
}

export type Signature = Bytes

export interface Heartbeat {
    blockNumber: BlockNumber
    networkState: OpaqueNetworkState
    sessionIndex: SessionIndex
    authorityIndex: AuthIndex
    validatorsLen: number
}

export type AuthIndex = number

export interface OpaqueNetworkState {
    peerId: OpaquePeerId
    externalAddresses: OpaqueMultiaddr[]
}

export type OpaqueMultiaddr = Bytes

export type OpaquePeerId = Bytes

export type GrandpaCall = GrandpaCall_report_equivocation

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 * 
 *  Since the weight of the extrinsic is 0, in order to avoid DoS by
 *  submission of invalid equivocation reports, a mandatory pre-validation of
 *  the extrinsic is implemented in a `SignedExtension`.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

export interface KeyOwnerProof {
    session: SessionIndex
    trieNodes: Bytes[]
    validatorCount: ValidatorCount
}

export interface GrandpaEquivocationProof {
    setId: SetId
    equivocation: GrandpaEquivocation
}

export type GrandpaEquivocation = GrandpaEquivocation_Precommit | GrandpaEquivocation_Prevote

export interface GrandpaEquivocation_Precommit {
    __kind: 'Precommit'
    value: GrandpaEquivocationValue
}

export interface GrandpaEquivocation_Prevote {
    __kind: 'Prevote'
    value: GrandpaEquivocationValue
}

export interface GrandpaEquivocationValue {
    roundNumber: bigint
    identity: AuthorityId
    first: [GrandpaPrevote, AuthoritySignature]
    second: [GrandpaPrevote, AuthoritySignature]
}

export type AuthoritySignature = Bytes

export interface GrandpaPrevote {
    targetHash: Hash
    targetNumber: BlockNumber
}

export type AuthorityId = Bytes

export type SetId = bigint

export type FinalityTrackerCall = FinalityTrackerCall_final_hint

/**
 *  Hint that the author of this block thinks the best finalized
 *  block is the given number.
 */
export interface FinalityTrackerCall_final_hint {
    __kind: 'final_hint'
    hint: number
}

export type ElectionsPhragmenCall = ElectionsPhragmenCall_remove_member | ElectionsPhragmenCall_remove_voter | ElectionsPhragmenCall_renounce_candidacy | ElectionsPhragmenCall_report_defunct_voter | ElectionsPhragmenCall_submit_candidacy | ElectionsPhragmenCall_vote

/**
 *  Remove a particular member from the set. This is effective immediately and the bond of
 *  the outgoing member is slashed.
 * 
 *  If a runner-up is available, then the best runner-up will be removed and replaces the
 *  outgoing member. Otherwise, a new phragmen round is started.
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
export interface ElectionsPhragmenCall_remove_member {
    __kind: 'remove_member'
    who: LookupSource
    hasReplacement: boolean
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
export interface ElectionsPhragmenCall_remove_voter {
    __kind: 'remove_voter'
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
 * 
 *  Weight note: The call into changeMembers need to be accounted for.
 *  </weight>
 */
export interface ElectionsPhragmenCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
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
export interface ElectionsPhragmenCall_report_defunct_voter {
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
 *  	- Candidates.len()
 *  	- Candidates
 *  	- Members
 *  	- RunnersUp
 *  	- [AccountBalance(who)]
 *  State writes:
 *  	- [AccountBalance(who)]
 *  	- Candidates
 *  # </weight>
 */
export interface ElectionsPhragmenCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
}

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
 *  	- [AccountBalance(who) (unreserve + total_balance)]
 *  State writes:
 *  	- Voting
 *  	- Lock
 *  	- [AccountBalance(who) (unreserve -- only when creating a new voter)]
 *  # </weight>
 */
export interface ElectionsPhragmenCall_vote {
    __kind: 'vote'
    votes: AccountId[]
    value: bigint
}

export type DemocracyCall = DemocracyCall_activate_proxy | DemocracyCall_cancel_queued | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_close_proxy | DemocracyCall_deactivate_proxy | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_enact_proposal | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_open_proxy | DemocracyCall_propose | DemocracyCall_proxy_delegate | DemocracyCall_proxy_remove_vote | DemocracyCall_proxy_undelegate | DemocracyCall_proxy_vote | DemocracyCall_reap_preimage | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

/**
 *  Specify a proxy that is already open to us. Called by the stash.
 * 
 *  NOTE: Used to be called `set_proxy`.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `proxy`: The account that will be activated as proxy.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db reads: `Proxy`
 *  - Db writes: `Proxy`
 *  - Base Weight: 7.972 µs
 *  # </weight>
 */
export interface DemocracyCall_activate_proxy {
    __kind: 'activate_proxy'
    proxy: AccountId
}

/**
 *  Cancel a proposal queued for enactment.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `which`: The index of the referendum to cancel.
 * 
 *  # <weight>
 *  - `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 *  - Db reads: `scheduler lookup`, scheduler agenda`
 *  - Db writes: `scheduler lookup`, scheduler agenda`
 *  - Base Weight: 36.78 + 3.277 * D µs
 *  # </weight>
 */
export interface DemocracyCall_cancel_queued {
    __kind: 'cancel_queued'
    which: ReferendumIndex
}

/**
 *  Remove a referendum.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `ref_index`: The index of the referendum to cancel.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`.
 *  - Db writes: `ReferendumInfoOf`
 *  - Base Weight: 21.57 µs
 *  # </weight>
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 *  Clears all public proposals.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - Db writes: `PublicProps`
 *  - Base Weight: 2.505 µs
 *  # </weight>
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 *  Clear the proxy. Called by the proxy.
 * 
 *  NOTE: Used to be called `resign_proxy`.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db reads: `Proxy`, `sender account`
 *  - Db writes: `Proxy`, `sender account`
 *  - Base Weight: 15.41 µs
 *  # </weight>
 */
export interface DemocracyCall_close_proxy {
    __kind: 'close_proxy'
}

/**
 *  Deactivate the proxy, but leave open to this account. Called by the stash.
 * 
 *  The proxy must already be active.
 * 
 *  NOTE: Used to be called `remove_proxy`.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `proxy`: The account that will be deactivated as proxy.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db reads: `Proxy`
 *  - Db writes: `Proxy`
 *  - Base Weight: 8.03 µs
 *  # </weight>
 */
export interface DemocracyCall_deactivate_proxy {
    __kind: 'deactivate_proxy'
    proxy: AccountId
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
 *  # <weight>
 *  - Complexity: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 *  - Db reads: 2*`VotingOf`, `balances locks`
 *  - Db writes: 2*`VotingOf`, `balances locks`
 *  - Db reads per votes: `ReferendumInfoOf`
 *  - Db writes per votes: `ReferendumInfoOf`
 *  - Base Weight: 65.78 + 8.229 * R µs
 *  # </weight>
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: AccountId
    conviction: Conviction
    balance: BalanceOf
}

/**
 *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *  referendum.
 * 
 *  The dispatch origin of this call must be `CancellationOrigin`.
 * 
 *  -`ref_index`: The index of the referendum to cancel.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`.
 *  - Db reads: `ReferendumInfoOf`, `Cancellations`
 *  - Db writes: `ReferendumInfoOf`, `Cancellations`
 *  -------------
 *  - Base Weight: 34.25 µs
 *  # </weight>
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: ReferendumIndex
}

/**
 *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
    __kind: 'enact_proposal'
    proposalHash: Hash
    index: ReferendumIndex
}

/**
 *  Schedule a referendum to be tabled once it is legal to schedule an external
 *  referendum.
 * 
 *  The dispatch origin of this call must be `ExternalOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  # <weight>
 *  - Complexity `O(V)` with V number of vetoers in the blacklist of proposal.
 *    Decoding vec of length V. Charged as maximum
 *  - Db reads: `NextExternal`, `Blacklist`
 *  - Db writes: `NextExternal`
 *  - Base Weight: 13.8 + .106 * V µs
 *  # </weight>
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposalHash: Hash
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
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db write: `NextExternal`
 *  - Base Weight: 3.087 µs
 *  # </weight>
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposalHash: Hash
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
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db write: `NextExternal`
 *  - Base Weight: 3.065 µs
 *  # </weight>
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposalHash: Hash
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
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db reads: `NextExternal`, `ReferendumCount`
 *  - Db writes: `NextExternal`, `ReferendumCount`, `ReferendumInfoOf`
 *  - Base Weight: 30.1 µs
 *  # </weight>
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Hash
    votingPeriod: BlockNumber
    delay: BlockNumber
}

/**
 *  Register the preimage for an upcoming proposal. This requires the proposal to be
 *  in the dispatch queue. No deposit is needed.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  # <weight>
 *  see `weight_for::note_preimage`
 *  # </weight>
 */
export interface DemocracyCall_note_imminent_preimage {
    __kind: 'note_imminent_preimage'
    encodedProposal: Bytes
}

/**
 *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
    __kind: 'note_imminent_preimage_operational'
    encodedProposal: Bytes
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
 *  # <weight>
 *  see `weight_for::note_preimage`
 *  # </weight>
 */
export interface DemocracyCall_note_preimage {
    __kind: 'note_preimage'
    encodedProposal: Bytes
}

/**
 *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
    __kind: 'note_preimage_operational'
    encodedProposal: Bytes
}

/**
 *  Become a proxy.
 * 
 *  This must be called prior to a later `activate_proxy`.
 * 
 *  Origin must be a Signed.
 * 
 *  - `target`: The account whose votes will later be proxied.
 * 
 *  `close_proxy` must be called before the account can be destroyed.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - Db reads: `Proxy`, `proxy account`
 *  - Db writes: `Proxy`, `proxy account`
 *  - Base Weight: 14.86 µs
 *  # </weight>
 */
export interface DemocracyCall_open_proxy {
    __kind: 'open_proxy'
    target: AccountId
}

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
 *  # <weight>
 *  - Complexity: `O(1)`
 *  - Db reads: `PublicPropCount`, `PublicProps`
 *  - Db writes: `PublicPropCount`, `PublicProps`, `DepositOf`
 *  -------------------
 *  Base Weight: 42.58 + .127 * P µs with `P` the number of proposals `PublicProps`
 *  # </weight>
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposalHash: Hash
    value: bigint
}

/**
 *  Delegate the voting power (with some given conviction) of a proxied account.
 * 
 *  The balance delegated is locked for as long as it's delegated, and thereafter for the
 *  time appropriate for the conviction's lock period.
 * 
 *  The dispatch origin of this call must be _Signed_, and the signing account must have
 *  been set as the proxy account for `target`.
 * 
 *  - `target`: The account whole voting power shall be delegated and whose balance locked.
 *    This account must either:
 *    - be delegating already; or
 *    - have no voting activity (if there is, then it will need to be removed/consolidated
 *      through `reap_vote` or `unvote`).
 *  - `to`: The account whose voting the `target` account's voting power will follow.
 *  - `conviction`: The conviction that will be attached to the delegated votes. When the
 *    account is undelegated, the funds will be locked for the corresponding period.
 *  - `balance`: The amount of the account's balance to be used in delegating. This must
 *    not be more than the account's current balance.
 * 
 *  Emits `Delegated`.
 * 
 *  # <weight>
 *  same as `delegate with additional:
 *  - Db reads: `Proxy`, `proxy account`
 *  - Db writes: `proxy account`
 *  - Base Weight: 68.61 + 8.039 * R µs
 *  # </weight>
 */
export interface DemocracyCall_proxy_delegate {
    __kind: 'proxy_delegate'
    to: AccountId
    conviction: Conviction
    balance: BalanceOf
}

/**
 *  Remove a proxied vote for a referendum.
 * 
 *  Exactly equivalent to `remove_vote` except that it operates on the account that the
 *  sender is a proxy for.
 * 
 *  The dispatch origin of this call must be _Signed_ and the signing account must be a
 *  proxy for some other account which has a registered vote for the referendum of `index`.
 * 
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  # <weight>
 *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 *  - Db reads: `ReferendumInfoOf`, `VotingOf`, `Proxy`
 *  - Db writes: `ReferendumInfoOf`, `VotingOf`
 *  - Base Weight: 26.35 + .36 * R µs
 *  # </weight>
 */
export interface DemocracyCall_proxy_remove_vote {
    __kind: 'proxy_remove_vote'
    index: ReferendumIndex
}

/**
 *  Undelegate the voting power of a proxied account.
 * 
 *  Tokens may be unlocked following once an amount of time consistent with the lock period
 *  of the conviction with which the delegation was issued.
 * 
 *  The dispatch origin of this call must be _Signed_ and the signing account must be a
 *  proxy for some other account which is currently delegating.
 * 
 *  Emits `Undelegated`.
 * 
 *  # <weight>
 *  same as `undelegate with additional:
 *  Db reads: `Proxy`
 *  Base Weight: 39 + 7.958 * R µs
 *  # </weight>
 */
export interface DemocracyCall_proxy_undelegate {
    __kind: 'proxy_undelegate'
}

/**
 *  Vote in a referendum on behalf of a stash. If `vote.is_aye()`, the vote is to enact
 *  the proposal; otherwise it is a vote to keep the status quo.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `ref_index`: The index of the referendum to proxy vote for.
 *  - `vote`: The vote configuration.
 * 
 *  # <weight>
 *  - Complexity: `O(R)` where R is the number of referendums the proxy has voted on.
 *    weight is charged as if maximum votes.
 *  - Db reads: `ReferendumInfoOf`, `VotingOf`, `balances locks`, `Proxy`, `proxy account`
 *  - Db writes: `ReferendumInfoOf`, `VotingOf`, `balances locks`
 *  ------------
 *  - Base Weight:
 *      - Proxy Vote New: 54.35 + .344 * R µs
 *      - Proxy Vote Existing: 54.35 + .35 * R µs
 *  # </weight>
 */
export interface DemocracyCall_proxy_vote {
    __kind: 'proxy_vote'
    refIndex: number
    vote: AccountVote
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
 *  # <weight>
 *  - Complexity: `O(D)` where D is length of proposal.
 *  - Db reads: `Preimages`
 *  - Db writes: `Preimages`
 *  - Base Weight: 39.31 + .003 * b µs
 *  # </weight>
 */
export interface DemocracyCall_reap_preimage {
    __kind: 'reap_preimage'
    proposalHash: Hash
    proposalLenUpperBound: number
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
 *  # <weight>
 *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 *  - Db reads: `ReferendumInfoOf`, `VotingOf`
 *  - Db writes: `ReferendumInfoOf`, `VotingOf`
 *  - Base Weight: 19.15 + .372 * R
 *  # </weight>
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: AccountId
    index: ReferendumIndex
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
 *  # <weight>
 *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 *  - Db reads: `ReferendumInfoOf`, `VotingOf`
 *  - Db writes: `ReferendumInfoOf`, `VotingOf`
 *  - Base Weight: 21.03 + .359 * R
 *  # </weight>
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: ReferendumIndex
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
 *  # <weight>
 *  - Complexity: `O(S)` where S is the number of seconds a proposal already has.
 *  - Db reads: `DepositOf`
 *  - Db writes: `DepositOf`
 *  ---------
 *  - Base Weight: 22.28 + .229 * S µs
 *  # </weight>
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
    secondsUpperBound: number
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
 *  # <weight>
 *  - Complexity: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 *  - Db reads: 2*`VotingOf`
 *  - Db writes: 2*`VotingOf`
 *  - Db reads per votes: `ReferendumInfoOf`
 *  - Db writes per votes: `ReferendumInfoOf`
 *  - Base Weight: 33.29 + 8.104 * R µs
 *  # </weight>
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 *  Unlock tokens that have an expired lock.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account to remove the lock on.
 * 
 *  # <weight>
 *  - Complexity `O(R)` with R number of vote of target.
 *  - Db reads: `VotingOf`, `balances locks`, `target account`
 *  - Db writes: `VotingOf`, `balances locks`, `target account`
 *  - Base Weight:
 *      - Unlock Remove: 42.96 + .048 * R
 *      - Unlock Set: 37.63 + .327 * R
 *  # </weight>
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: AccountId
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
 *  # <weight>
 *  - Complexity: `O(V + log(V))` where V is number of `existing vetoers`
 *    Performs a binary search on `existing_vetoers` which should not be very large.
 *  - Db reads: `NextExternal`, `Blacklist`
 *  - Db writes: `NextExternal`, `Blacklist`
 *  - Base Weight: 29.87 + .188 * V µs
 *  # </weight>
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Hash
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
 *  # <weight>
 *  - Complexity: `O(R)` where R is the number of referendums the voter has voted on.
 *    weight is charged as if maximum votes.
 *  - Db reads: `ReferendumInfoOf`, `VotingOf`, `balances locks`
 *  - Db writes: `ReferendumInfoOf`, `VotingOf`, `balances locks`
 *  --------------------
 *  - Base Weight:
 *      - Vote New: 49.24 + .333 * R µs
 *      - Vote Existing: 49.94 + .343 * R µs
 *  # </weight>
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    value: AccountVoteSplit
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    value: AccountVoteStandard
}

export interface AccountVoteStandard {
    vote: Vote
    balance: Balance
}

export type Vote = number

export interface AccountVoteSplit {
    aye: Balance
    nay: Balance
}

export type Conviction = Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x | Conviction_None

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

export interface Conviction_None {
    __kind: 'None'
}

export type ReferendumIndex = number

export type CouncilCall = CouncilCall_close | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

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
    proposal: Hash
    index: number
    proposalWeightBound: bigint
    lengthBound: number
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
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MAX_MEMBERS` limit on the amount of members, but
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
    newMembers: AccountId[]
    prime?: (AccountId | undefined)
    oldCount: MemberCount
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
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
    proposal: Hash
    index: number
    approve: boolean
}

export type ClaimsCall = ClaimsCall_attest | ClaimsCall_claim | ClaimsCall_claim_attest | ClaimsCall_mint_claim

/**
 *  Attest to a statement, needed to finalize the claims process.
 * 
 *  WARNING: Insecure unless your chain includes `PrevalidateAttests` as a `SignedExtension`.
 * 
 *  Unsigned Validation:
 *  A call to attest is deemed valid if the sender has a `Preclaim` registered
 *  and provides a `statement` which is expected for the account.
 * 
 *  Parameters:
 *  - `statement`: The identity of the statement which is being attested to in the signature.
 * 
 *  <weight>
 *  Total Complexity: O(1)
 *  ----------------------------
 *  Base Weight: 93.3 µs
 *  DB Weight:
 *  - Read: Preclaims, Signing, Claims, Total, Claims Vesting, Vesting Vesting, Balance Lock, Account
 *  - Write: Vesting Vesting, Account, Balance Lock, Total, Claim, Claims Vesting, Signing, Preclaims
 *  Validate PreValidateAttests: +8.631 µs
 *  </weight>
 */
export interface ClaimsCall_attest {
    __kind: 'attest'
    statement: Bytes
}

/**
 *  Make a claim to collect your DOTs.
 * 
 *  The dispatch origin for this call must be _None_.
 * 
 *  Unsigned Validation:
 *  A call to claim is deemed valid if the signature provided matches
 *  the expected signed message of:
 * 
 *  > Ethereum Signed Message:
 *  > (configured prefix string)(address)
 * 
 *  and `address` matches the `dest` account.
 * 
 *  Parameters:
 *  - `dest`: The destination account to payout the claim.
 *  - `ethereum_signature`: The signature of an ethereum signed message
 *     matching the format described above.
 * 
 *  <weight>
 *  The weight of this call is invariant over the input parameters.
 *  - One `eth_recover` operation which involves a keccak hash and a
 *    ecdsa recover.
 *  - Three storage reads to check if a claim exists for the user, to
 *    get the current pot size, to see if there exists a vesting schedule.
 *  - Up to one storage write for adding a new vesting schedule.
 *  - One `deposit_creating` Currency call.
 *  - One storage write to update the total.
 *  - Two storage removals for vesting and claims information.
 *  - One deposit event.
 * 
 *  Total Complexity: O(1)
 *  ----------------------------
 *  Base Weight: 269.7 µs
 *  DB Weight:
 *  - Read: Signing, Claims, Total, Claims Vesting, Vesting Vesting, Balance Lock, Account
 *  - Write: Vesting Vesting, Account, Balance Lock, Total, Claim, Claims Vesting, Signing
 *  Validate Unsigned: +188.7 µs
 *  </weight>
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: AccountId
    ethereumSignature: EcdsaSignature
}

/**
 *  Make a claim to collect your DOTs by signing a statement.
 * 
 *  The dispatch origin for this call must be _None_.
 * 
 *  Unsigned Validation:
 *  A call to `claim_attest` is deemed valid if the signature provided matches
 *  the expected signed message of:
 * 
 *  > Ethereum Signed Message:
 *  > (configured prefix string)(address)(statement)
 * 
 *  and `address` matches the `dest` account; the `statement` must match that which is
 *  expected according to your purchase arrangement.
 * 
 *  Parameters:
 *  - `dest`: The destination account to payout the claim.
 *  - `ethereum_signature`: The signature of an ethereum signed message
 *     matching the format described above.
 *  - `statement`: The identity of the statement which is being attested to in the signature.
 * 
 *  <weight>
 *  The weight of this call is invariant over the input parameters.
 *  - One `eth_recover` operation which involves a keccak hash and a
 *    ecdsa recover.
 *  - Four storage reads to check if a claim exists for the user, to
 *    get the current pot size, to see if there exists a vesting schedule, to get the
 *    required statement.
 *  - Up to one storage write for adding a new vesting schedule.
 *  - One `deposit_creating` Currency call.
 *  - One storage write to update the total.
 *  - Two storage removals for vesting and claims information.
 *  - One deposit event.
 * 
 *  Total Complexity: O(1)
 *  ----------------------------
 *  Base Weight: 270.2 µs
 *  DB Weight:
 *  - Read: Signing, Claims, Total, Claims Vesting, Vesting Vesting, Balance Lock, Account
 *  - Write: Vesting Vesting, Account, Balance Lock, Total, Claim, Claims Vesting, Signing
 *  Validate Unsigned: +190.1 µs
 *  </weight>
 */
export interface ClaimsCall_claim_attest {
    __kind: 'claim_attest'
    dest: AccountId
    ethereumSignature: EcdsaSignature
    statement: Bytes
}

/**
 *  Mint a new claim to collect DOTs.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  Parameters:
 *  - `who`: The Ethereum address allowed to collect this claim.
 *  - `value`: The number of DOTs that will be claimed.
 *  - `vesting_schedule`: An optional vesting schedule for these DOTs.
 * 
 *  <weight>
 *  The weight of this call is invariant over the input parameters.
 *  - One storage mutate to increase the total claims available.
 *  - One storage write to add a new claim.
 *  - Up to one storage write to add a new vesting schedule.
 * 
 *  Total Complexity: O(1)
 *  ---------------------
 *  Base Weight: 10.46 µs
 *  DB Weight:
 *  - Reads: Total
 *  - Writes: Total, Claims
 *  - Maybe Write: Vesting, Statement
 *  </weight>
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: EthereumAddress
    value: BalanceOf
    vestingSchedule?: ([BalanceOf, BalanceOf, BlockNumber] | undefined)
    statement?: (StatementKind | undefined)
}

export type EthereumAddress = Bytes

export type EcdsaSignature = Bytes

export type BalancesCall = BalancesCall_force_transfer | BalancesCall_set_balance | BalancesCall_transfer | BalancesCall_transfer_keep_alive

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

export type BabeCall = never

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export interface Header {
    parentHash: Hash
    number: number
    stateRoot: Hash
    extrinsicsRoot: Hash
    digest: Digest
}

export interface Digest {
    logs: DigestItem[]
}

export type DigestItem = DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_ChangesTrieSignal | DigestItem_Consensus | DigestItem_Other | DigestItem_PreRuntime | DigestItem_RuntimeEnvironmentUpdated | DigestItem_Seal | DigestItem_SealV0

export interface DigestItem_AuthoritiesChange {
    __kind: 'AuthoritiesChange'
    value: AuthorityId[]
}

export interface DigestItem_ChangesTrieRoot {
    __kind: 'ChangesTrieRoot'
    value: Hash
}

export interface DigestItem_ChangesTrieSignal {
    __kind: 'ChangesTrieSignal'
    value: ChangesTrieSignal
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: Consensus
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: PreRuntime
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: Seal
}

export interface DigestItem_SealV0 {
    __kind: 'SealV0'
    value: SealV0
}

export type SealV0 = [bigint, Signature]

export type Seal = [ConsensusEngineId, Bytes]

export type PreRuntime = [ConsensusEngineId, Bytes]

export type Consensus = [ConsensusEngineId, Bytes]

export type ConsensusEngineId = Bytes

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
    __kind: 'NewConfiguration'
    value?: (ChangesTrieConfiguration | undefined)
}

export type AuthorityDiscoveryCall = never

export type AttestationsCall = AttestationsCall_more_attestations

/**
 *  Provide candidate receipts for parachains, in ascending order by id.
 */
export interface AttestationsCall_more_attestations {
    __kind: 'more_attestations'
}

export interface Timepoint {
    height: BlockNumber
    index: number
}

export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return  {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        close_tip: sts.enumStruct({
            hash: Hash,
        }),
        propose_spend: sts.enumStruct({
            value: sts.bigint(),
            beneficiary: LookupSource,
        }),
        reject_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        report_awesome: sts.enumStruct({
            reason: sts.bytes(),
            who: AccountId,
        }),
        retract_tip: sts.enumStruct({
            hash: Hash,
        }),
        tip: sts.enumStruct({
            hash: Hash,
            tipValue: BalanceOf,
        }),
        tip_new: sts.enumStruct({
            reason: sts.bytes(),
            who: AccountId,
            tipValue: BalanceOf,
        }),
    }
})

export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

export const TechnicalMembershipCall: sts.Type<TechnicalMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: AccountId,
        }),
        change_key: sts.enumStruct({
            new: AccountId,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: AccountId,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId),
        }),
        set_prime: sts.enumStruct({
            who: AccountId,
        }),
        swap_member: sts.enumStruct({
            remove: AccountId,
            add: AccountId,
        }),
    }
})

export const TechnicalCommitteeCall: sts.Type<TechnicalCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposal: Hash,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        execute: sts.enumStruct({
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId),
            prime: sts.option(() => AccountId),
            oldCount: MemberCount,
        }),
        vote: sts.enumStruct({
            proposal: Hash,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        fill_block: sts.enumStruct({
            ratio: Perbill,
        }),
        kill_prefix: sts.enumStruct({
            prefix: Key,
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => Key),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_changes_trie_config: sts.enumStruct({
            changesTrieConfig: sts.option(() => ChangesTrieConfiguration),
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
            items: sts.array(() => KeyValue),
        }),
        suicide: sts.unit(),
    }
})

export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return  {
        set_key: sts.enumStruct({
            new: LookupSource,
        }),
        sudo: sts.enumStruct({
            call: Type_44,
        }),
        sudo_as: sts.enumStruct({
            who: LookupSource,
            call: Type_44,
        }),
        sudo_unchecked_weight: sts.enumStruct({
            call: Type_44,
            weight: Weight,
        }),
    }
})

export const StakingCall: sts.Type<StakingCall> = sts.closedEnum(() => {
    return  {
        bond: sts.enumStruct({
            controller: LookupSource,
            value: sts.bigint(),
            payee: RewardDestination,
        }),
        bond_extra: sts.enumStruct({
            maxAdditional: sts.bigint(),
        }),
        cancel_deferred_slash: sts.enumStruct({
            era: EraIndex,
            slashIndices: sts.array(() => sts.number()),
        }),
        chill: sts.unit(),
        force_new_era: sts.unit(),
        force_new_era_always: sts.unit(),
        force_no_eras: sts.unit(),
        force_unstake: sts.enumStruct({
            stash: AccountId,
            numSlashingSpans: sts.number(),
        }),
        nominate: sts.enumStruct({
            targets: sts.array(() => LookupSource),
        }),
        payout_nominator: sts.enumStruct({
            era: EraIndex,
            validators: sts.array(() => sts.tuple(() => [AccountId, sts.number()])),
        }),
        payout_stakers: sts.enumStruct({
            validatorStash: AccountId,
            era: EraIndex,
        }),
        payout_validator: sts.enumStruct({
            era: EraIndex,
        }),
        reap_stash: sts.enumStruct({
            stash: AccountId,
            numSlashingSpans: sts.number(),
        }),
        rebond: sts.enumStruct({
            value: sts.bigint(),
        }),
        set_controller: sts.enumStruct({
            controller: LookupSource,
        }),
        set_history_depth: sts.enumStruct({
            newHistoryDepth: sts.number(),
            eraItemsDeleted: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            validators: sts.array(() => AccountId),
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_validator_count: sts.enumStruct({
            new: sts.number(),
        }),
        submit_election_solution: sts.enumStruct({
            winners: sts.array(() => ValidatorIndex),
            compact: CompactAssignments,
            score: PhragmenScore,
            era: EraIndex,
            size: ElectionSize,
        }),
        submit_election_solution_unsigned: sts.enumStruct({
            winners: sts.array(() => ValidatorIndex),
            compact: CompactAssignments,
            score: PhragmenScore,
            era: EraIndex,
            size: ElectionSize,
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

export const SlotsCall: sts.Type<SlotsCall> = sts.closedEnum(() => {
    return  {
        bid: sts.enumStruct({
            sub: sts.number(),
            auctionIndex: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            amount: sts.bigint(),
        }),
        bid_renew: sts.enumStruct({
            auctionIndex: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            amount: sts.bigint(),
        }),
        elaborate_deploy_data: sts.enumStruct({
            paraId: sts.number(),
            code: ValidationCode,
        }),
        fix_deploy_data: sts.enumStruct({
            sub: sts.number(),
            paraId: sts.number(),
            codeHash: Hash,
            codeSize: sts.number(),
            initialHeadData: HeadData,
        }),
        new_auction: sts.enumStruct({
            duration: sts.number(),
            leasePeriodIndex: sts.number(),
        }),
        set_offboarding: sts.enumStruct({
            dest: LookupSource,
        }),
    }
})

export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: Keys,
            proof: sts.bytes(),
        }),
    }
})

export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: BlockNumber,
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_44,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_44,
        }),
    }
})

export const RegistrarCall: sts.Type<RegistrarCall> = sts.closedEnum(() => {
    return  {
        deregister_para: sts.enumStruct({
            id: sts.number(),
        }),
        deregister_parathread: sts.unit(),
        register_para: sts.enumStruct({
            id: sts.number(),
            info: ParaInfo,
            code: ValidationCode,
            initialHeadData: HeadData,
        }),
        register_parathread: sts.enumStruct({
            code: ValidationCode,
            initialHeadData: HeadData,
        }),
        select_parathread: sts.enumStruct({
            id: sts.number(),
            collator: CollatorId,
            headHash: Hash,
        }),
        set_thread_count: sts.enumStruct({
            count: sts.number(),
        }),
        swap: sts.enumStruct({
            other: sts.number(),
        }),
    }
})

export const ParachainsCall: sts.Type<ParachainsCall> = sts.closedEnum(() => {
    return  {
        report_double_vote: sts.enumStruct({
            report: DoubleVoteReport,
        }),
        set_heads: sts.enumStruct({
            heads: sts.array(() => AttestedCandidate),
        }),
    }
})

export const OffencesCall: sts.Type<OffencesCall> = sts.closedEnum(() => {
    return  {
    }
})

export const IndicesCall: sts.Type<IndicesCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            index: AccountIndex,
        }),
        force_transfer: sts.enumStruct({
            new: AccountId,
            index: AccountIndex,
        }),
        free: sts.enumStruct({
            index: AccountIndex,
        }),
        transfer: sts.enumStruct({
            new: AccountId,
            index: AccountIndex,
        }),
    }
})

export const ImOnlineCall: sts.Type<ImOnlineCall> = sts.closedEnum(() => {
    return  {
        heartbeat: sts.enumStruct({
            heartbeat: Heartbeat,
            signature: Signature,
        }),
    }
})

export const GrandpaCall: sts.Type<GrandpaCall> = sts.closedEnum(() => {
    return  {
        report_equivocation: sts.enumStruct({
            equivocationProof: GrandpaEquivocationProof,
            keyOwnerProof: KeyOwnerProof,
        }),
    }
})

export const FinalityTrackerCall: sts.Type<FinalityTrackerCall> = sts.closedEnum(() => {
    return  {
        final_hint: sts.enumStruct({
            hint: sts.number(),
        }),
    }
})

export const ElectionsPhragmenCall: sts.Type<ElectionsPhragmenCall> = sts.closedEnum(() => {
    return  {
        remove_member: sts.enumStruct({
            who: LookupSource,
            hasReplacement: sts.boolean(),
        }),
        remove_voter: sts.unit(),
        renounce_candidacy: sts.enumStruct({
            renouncing: Renouncing,
        }),
        report_defunct_voter: sts.enumStruct({
            defunct: DefunctVoter,
        }),
        submit_candidacy: sts.enumStruct({
            candidateCount: sts.number(),
        }),
        vote: sts.enumStruct({
            votes: sts.array(() => AccountId),
            value: sts.bigint(),
        }),
    }
})

export const DemocracyCall: sts.Type<DemocracyCall> = sts.closedEnum(() => {
    return  {
        activate_proxy: sts.enumStruct({
            proxy: AccountId,
        }),
        cancel_queued: sts.enumStruct({
            which: ReferendumIndex,
        }),
        cancel_referendum: sts.enumStruct({
            refIndex: sts.number(),
        }),
        clear_public_proposals: sts.unit(),
        close_proxy: sts.unit(),
        deactivate_proxy: sts.enumStruct({
            proxy: AccountId,
        }),
        delegate: sts.enumStruct({
            to: AccountId,
            conviction: Conviction,
            balance: BalanceOf,
        }),
        emergency_cancel: sts.enumStruct({
            refIndex: ReferendumIndex,
        }),
        enact_proposal: sts.enumStruct({
            proposalHash: Hash,
            index: ReferendumIndex,
        }),
        external_propose: sts.enumStruct({
            proposalHash: Hash,
        }),
        external_propose_default: sts.enumStruct({
            proposalHash: Hash,
        }),
        external_propose_majority: sts.enumStruct({
            proposalHash: Hash,
        }),
        fast_track: sts.enumStruct({
            proposalHash: Hash,
            votingPeriod: BlockNumber,
            delay: BlockNumber,
        }),
        note_imminent_preimage: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_imminent_preimage_operational: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_preimage: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_preimage_operational: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        open_proxy: sts.enumStruct({
            target: AccountId,
        }),
        propose: sts.enumStruct({
            proposalHash: Hash,
            value: sts.bigint(),
        }),
        proxy_delegate: sts.enumStruct({
            to: AccountId,
            conviction: Conviction,
            balance: BalanceOf,
        }),
        proxy_remove_vote: sts.enumStruct({
            index: ReferendumIndex,
        }),
        proxy_undelegate: sts.unit(),
        proxy_vote: sts.enumStruct({
            refIndex: sts.number(),
            vote: AccountVote,
        }),
        reap_preimage: sts.enumStruct({
            proposalHash: Hash,
            proposalLenUpperBound: sts.number(),
        }),
        remove_other_vote: sts.enumStruct({
            target: AccountId,
            index: ReferendumIndex,
        }),
        remove_vote: sts.enumStruct({
            index: ReferendumIndex,
        }),
        second: sts.enumStruct({
            proposal: sts.number(),
            secondsUpperBound: sts.number(),
        }),
        undelegate: sts.unit(),
        unlock: sts.enumStruct({
            target: AccountId,
        }),
        veto_external: sts.enumStruct({
            proposalHash: Hash,
        }),
        vote: sts.enumStruct({
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposal: Hash,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        execute: sts.enumStruct({
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId),
            prime: sts.option(() => AccountId),
            oldCount: MemberCount,
        }),
        vote: sts.enumStruct({
            proposal: Hash,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

export const ClaimsCall: sts.Type<ClaimsCall> = sts.closedEnum(() => {
    return  {
        attest: sts.enumStruct({
            statement: sts.bytes(),
        }),
        claim: sts.enumStruct({
            dest: AccountId,
            ethereumSignature: EcdsaSignature,
        }),
        claim_attest: sts.enumStruct({
            dest: AccountId,
            ethereumSignature: EcdsaSignature,
            statement: sts.bytes(),
        }),
        mint_claim: sts.enumStruct({
            who: EthereumAddress,
            value: BalanceOf,
            vestingSchedule: sts.option(() => sts.tuple(() => [BalanceOf, BalanceOf, BlockNumber])),
            statement: sts.option(() => StatementKind),
        }),
    }
})

export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: LookupSource,
            dest: LookupSource,
            value: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: LookupSource,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: LookupSource,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: LookupSource,
            value: sts.bigint(),
        }),
    }
})

export const BabeCall: sts.Type<BabeCall> = sts.closedEnum(() => {
    return  {
    }
})

export const AuthorshipCall: sts.Type<AuthorshipCall> = sts.closedEnum(() => {
    return  {
        set_uncles: sts.enumStruct({
            newUncles: sts.array(() => Header),
        }),
    }
})

export const AuthorityDiscoveryCall: sts.Type<AuthorityDiscoveryCall> = sts.closedEnum(() => {
    return  {
    }
})

export const AttestationsCall: sts.Type<AttestationsCall> = sts.closedEnum(() => {
    return  {
        more_attestations: sts.unit(),
    }
})

export type Proposal = Proposal_Attestations | Proposal_AuthorityDiscovery | Proposal_Authorship | Proposal_Babe | Proposal_Balances | Proposal_Claims | Proposal_Council | Proposal_Democracy | Proposal_ElectionsPhragmen | Proposal_FinalityTracker | Proposal_Grandpa | Proposal_ImOnline | Proposal_Indices | Proposal_Offences | Proposal_Parachains | Proposal_Registrar | Proposal_Scheduler | Proposal_Session | Proposal_Slots | Proposal_Staking | Proposal_Sudo | Proposal_System | Proposal_TechnicalCommittee | Proposal_TechnicalMembership | Proposal_Timestamp | Proposal_Treasury | Proposal_Utility | Proposal_Vesting

export interface Proposal_Attestations {
    __kind: 'Attestations'
    value: AttestationsCall
}

export interface Proposal_AuthorityDiscovery {
    __kind: 'AuthorityDiscovery'
    value: AuthorityDiscoveryCall
}

export interface Proposal_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Proposal_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Proposal_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Proposal_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Proposal_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Proposal_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Proposal_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenCall
}

export interface Proposal_FinalityTracker {
    __kind: 'FinalityTracker'
    value: FinalityTrackerCall
}

export interface Proposal_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Proposal_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Proposal_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Proposal_Offences {
    __kind: 'Offences'
    value: OffencesCall
}

export interface Proposal_Parachains {
    __kind: 'Parachains'
    value: ParachainsCall
}

export interface Proposal_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
}

export interface Proposal_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Proposal_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Proposal_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Proposal_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Proposal_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Proposal_System {
    __kind: 'System'
    value: SystemCall
}

export interface Proposal_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Proposal_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Proposal_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Proposal_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Proposal_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Proposal_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export const BalanceOf = sts.bigint()

export const Conviction: sts.Type<Conviction> = sts.closedEnum(() => {
    return  {
        Locked1x: sts.unit(),
        Locked2x: sts.unit(),
        Locked3x: sts.unit(),
        Locked4x: sts.unit(),
        Locked5x: sts.unit(),
        Locked6x: sts.unit(),
        None: sts.unit(),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: AccountVoteSplit,
        Standard: AccountVoteStandard,
    }
})

export const AccountVoteStandard: sts.Type<AccountVoteStandard> = sts.struct(() => {
    return  {
        vote: Vote,
        balance: Balance,
    }
})

export const Vote = sts.number()

export const AccountVoteSplit: sts.Type<AccountVoteSplit> = sts.struct(() => {
    return  {
        aye: Balance,
        nay: Balance,
    }
})

export const Signature = sts.bytes()

export const Heartbeat: sts.Type<Heartbeat> = sts.struct(() => {
    return  {
        blockNumber: BlockNumber,
        networkState: OpaqueNetworkState,
        sessionIndex: SessionIndex,
        authorityIndex: AuthIndex,
        validatorsLen: sts.number(),
    }
})

export const AuthIndex = sts.number()

export const OpaqueNetworkState: sts.Type<OpaqueNetworkState> = sts.struct(() => {
    return  {
        peerId: OpaquePeerId,
        externalAddresses: sts.array(() => OpaqueMultiaddr),
    }
})

export const OpaqueMultiaddr = sts.bytes()

export const OpaquePeerId = sts.bytes()

export const KeyOwnerProof: sts.Type<KeyOwnerProof> = sts.struct(() => {
    return  {
        session: SessionIndex,
        trieNodes: sts.array(() => sts.bytes()),
        validatorCount: ValidatorCount,
    }
})

export const GrandpaEquivocationProof: sts.Type<GrandpaEquivocationProof> = sts.struct(() => {
    return  {
        setId: SetId,
        equivocation: GrandpaEquivocation,
    }
})

export const GrandpaEquivocation: sts.Type<GrandpaEquivocation> = sts.closedEnum(() => {
    return  {
        Precommit: GrandpaEquivocationValue,
        Prevote: GrandpaEquivocationValue,
    }
})

export const GrandpaEquivocationValue: sts.Type<GrandpaEquivocationValue> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: AuthorityId,
        first: sts.tuple(() => [GrandpaPrevote, AuthoritySignature]),
        second: sts.tuple(() => [GrandpaPrevote, AuthoritySignature]),
    }
})

export const AuthoritySignature = sts.bytes()

export const GrandpaPrevote: sts.Type<GrandpaPrevote> = sts.struct(() => {
    return  {
        targetHash: Hash,
        targetNumber: BlockNumber,
    }
})

export const SetId = sts.bigint()

export const Keys = sts.tuple(() => [AccountId, AccountId, AccountId, AccountId, AccountId])

export const ElectionSize: sts.Type<ElectionSize> = sts.struct(() => {
    return  {
        validators: sts.number(),
        nominators: sts.number(),
    }
})

export const PhragmenScore = sts.array(() => sts.bigint())

export const CompactAssignments: sts.Type<CompactAssignments> = sts.struct(() => {
    return  {
        votes1: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes2: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes3: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes4: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes5: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes6: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes7: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes8: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes9: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes10: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes11: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes12: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes13: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes14: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes15: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
        votes16: sts.array(() => sts.tuple(() => [NominatorIndex, sts.array(() => CompactScore), ValidatorIndex])),
    }
})

export const CompactScore = sts.tuple(() => [ValidatorIndex, OffchainAccuracy])

export const OffchainAccuracy = sts.number()

export const NominatorIndex = sts.number()

export const ValidatorIndex = sts.number()

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
    }
})

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return  {
        Account: AccountId,
        Controller: sts.unit(),
        None: sts.unit(),
        Staked: sts.unit(),
        Stash: sts.unit(),
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return  {
        parentHash: Hash,
        number: sts.number(),
        stateRoot: Hash,
        extrinsicsRoot: Hash,
        digest: Digest,
    }
})

export const Digest: sts.Type<Digest> = sts.struct(() => {
    return  {
        logs: sts.array(() => DigestItem),
    }
})

export const DigestItem: sts.Type<DigestItem> = sts.closedEnum(() => {
    return  {
        AuthoritiesChange: sts.array(() => AuthorityId),
        ChangesTrieRoot: Hash,
        ChangesTrieSignal: ChangesTrieSignal,
        Consensus: Consensus,
        Other: sts.bytes(),
        PreRuntime: PreRuntime,
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: Seal,
        SealV0: SealV0,
    }
})

export const SealV0 = sts.tuple(() => [sts.bigint(), Signature])

export const Seal = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const PreRuntime = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const Consensus = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const ConsensusEngineId = sts.bytes()

export const ChangesTrieSignal: sts.Type<ChangesTrieSignal> = sts.closedEnum(() => {
    return  {
        NewConfiguration: sts.option(() => ChangesTrieConfiguration),
    }
})

export const LookupSource = sts.bytes()

export const Type_44: sts.Type<Type_44> = sts.closedEnum(() => {
    return  {
        Attestations: AttestationsCall,
        AuthorityDiscovery: AuthorityDiscoveryCall,
        Authorship: AuthorshipCall,
        Babe: BabeCall,
        Balances: BalancesCall,
        Claims: ClaimsCall,
        Council: CouncilCall,
        Democracy: DemocracyCall,
        ElectionsPhragmen: ElectionsPhragmenCall,
        FinalityTracker: FinalityTrackerCall,
        Grandpa: GrandpaCall,
        ImOnline: ImOnlineCall,
        Indices: IndicesCall,
        Offences: OffencesCall,
        Parachains: ParachainsCall,
        Registrar: RegistrarCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Slots: SlotsCall,
        Staking: StakingCall,
        Sudo: SudoCall,
        System: SystemCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
    }
})

export const Priority = sts.number()

export const Period = sts.tuple(() => [BlockNumber, sts.number()])

export const Key = sts.bytes()

export const KeyValue = sts.tuple(() => [StorageKey, StorageData])

export const StorageData = sts.bytes()

export const StorageKey = sts.bytes()

export const ChangesTrieConfiguration: sts.Type<ChangesTrieConfiguration> = sts.struct(() => {
    return  {
        digestInterval: sts.number(),
        digestLevels: sts.number(),
    }
})

export const Perbill = sts.number()

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: BlockNumber,
        index: sts.number(),
    }
})

export const CallHash = sts.bytes()

export const EthereumAddress = sts.bytes()

export const ParaId = sts.number()

export const SlotRange: sts.Type<SlotRange> = sts.closedEnum(() => {
    return  {
        OneOne: sts.unit(),
        OneThree: sts.unit(),
        OneTwo: sts.unit(),
        ThreeThree: sts.unit(),
        TwoThree: sts.unit(),
        TwoTwo: sts.unit(),
        ZeroOne: sts.unit(),
        ZeroThree: sts.unit(),
        ZeroTwo: sts.unit(),
        ZeroZero: sts.unit(),
    }
})

export type SlotRange = SlotRange_OneOne | SlotRange_OneThree | SlotRange_OneTwo | SlotRange_ThreeThree | SlotRange_TwoThree | SlotRange_TwoTwo | SlotRange_ZeroOne | SlotRange_ZeroThree | SlotRange_ZeroTwo | SlotRange_ZeroZero

export interface SlotRange_OneOne {
    __kind: 'OneOne'
}

export interface SlotRange_OneThree {
    __kind: 'OneThree'
}

export interface SlotRange_OneTwo {
    __kind: 'OneTwo'
}

export interface SlotRange_ThreeThree {
    __kind: 'ThreeThree'
}

export interface SlotRange_TwoThree {
    __kind: 'TwoThree'
}

export interface SlotRange_TwoTwo {
    __kind: 'TwoTwo'
}

export interface SlotRange_ZeroOne {
    __kind: 'ZeroOne'
}

export interface SlotRange_ZeroThree {
    __kind: 'ZeroThree'
}

export interface SlotRange_ZeroTwo {
    __kind: 'ZeroTwo'
}

export interface SlotRange_ZeroZero {
    __kind: 'ZeroZero'
}

export const NewBidder: sts.Type<NewBidder> = sts.struct(() => {
    return  {
        who: AccountId,
        sub: SubId,
    }
})

export const SubId = sts.number()

export interface NewBidder {
    who: AccountId
    sub: SubId
}

export type SubId = number

export const AuctionIndex = sts.number()

export const LeasePeriod = sts.number()

export const MemberCount = sts.number()

export const ProposalIndex = sts.number()

export const Hash = sts.bytes()

export const VoteThreshold: sts.Type<VoteThreshold> = sts.closedEnum(() => {
    return  {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

export type VoteThreshold = VoteThreshold_SimpleMajority | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SuperMajorityApprove

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

export const ReferendumIndex = sts.number()

export const PropIndex = sts.number()

export const IdentificationTuple = sts.tuple(() => [ValidatorId, FullIdentification])

export const FullIdentification: sts.Type<FullIdentification> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        own: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

export const IndividualExposure: sts.Type<IndividualExposure> = sts.struct(() => {
    return  {
        who: AccountId,
        value: sts.bigint(),
    }
})

export interface IndividualExposure {
    who: AccountId
    value: bigint
}

export interface FullIdentification {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export const ValidatorId = sts.bytes()

export const NextAuthority = sts.tuple(() => [AuthorityId, AuthorityWeight])

export const AuthorityWeight = sts.bigint()

export const AuthorityId = sts.bytes()

export const OpaqueTimeSlot = sts.bytes()

export const Kind = sts.bytes()

export const ElectionCompute: sts.Type<ElectionCompute> = sts.closedEnum(() => {
    return  {
        OnChain: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.unit(),
    }
})

export type ElectionCompute = ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

export const SessionIndex = sts.number()

export const EraIndex = sts.number()

export const Balance = sts.bigint()

export const AccountIndex = sts.number()

export const DispatchResult = sts.result(() => sts.unit(), () => DispatchError)

export const TaskAddress = sts.tuple(() => [BlockNumber, sts.number()])

export const BlockNumber = sts.number()

export const AccountId = sts.bytes()

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: DispatchErrorModule,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        Token: TokenError,
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        CannotCreate: sts.unit(),
        Frozen: sts.unit(),
        NoFunds: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
        UnknownAsset: sts.unit(),
        WouldDie: sts.unit(),
    }
})

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_Frozen | TokenError_NoFunds | TokenError_Overflow | TokenError_Underflow | TokenError_UnknownAsset | TokenError_WouldDie

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export const DispatchErrorModule: sts.Type<DispatchErrorModule> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.number(),
    }
})

export interface DispatchErrorModule {
    index: number
    error: number
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

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token

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

export interface DispatchError_Module {
    __kind: 'Module'
    value: DispatchErrorModule
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

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
