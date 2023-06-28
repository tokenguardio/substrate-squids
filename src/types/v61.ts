import type {Result, Option} from './support'

export type V3Outcome = V3Outcome_Complete | V3Outcome_Incomplete | V3Outcome_Error

export interface V3Outcome_Complete {
    __kind: 'Complete'
    value: Weight
}

export interface V3Outcome_Incomplete {
    __kind: 'Incomplete'
    value: [Weight, V3Error]
}

export interface V3Outcome_Error {
    __kind: 'Error'
    value: V3Error
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

export type VersionedMultiAssets = VersionedMultiAssets_V2 | VersionedMultiAssets_V3

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedMultiAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
}

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export type V3Error = V3Error_Overflow | V3Error_Unimplemented | V3Error_UntrustedReserveLocation | V3Error_UntrustedTeleportLocation | V3Error_LocationFull | V3Error_LocationNotInvertible | V3Error_BadOrigin | V3Error_InvalidLocation | V3Error_AssetNotFound | V3Error_FailedToTransactAsset | V3Error_NotWithdrawable | V3Error_LocationCannotHold | V3Error_ExceedsMaxMessageSize | V3Error_DestinationUnsupported | V3Error_Transport | V3Error_Unroutable | V3Error_UnknownClaim | V3Error_FailedToDecode | V3Error_MaxWeightInvalid | V3Error_NotHoldingFees | V3Error_TooExpensive | V3Error_Trap | V3Error_ExpectationFalse | V3Error_PalletNotFound | V3Error_NameMismatch | V3Error_VersionIncompatible | V3Error_HoldingWouldOverflow | V3Error_ExportError | V3Error_ReanchorFailed | V3Error_NoDeal | V3Error_FeesNotMet | V3Error_LockError | V3Error_NoPermission | V3Error_Unanchored | V3Error_NotDepositable | V3Error_UnhandledXcmVersion | V3Error_WeightLimitReached | V3Error_Barrier | V3Error_WeightNotComputable | V3Error_ExceedsStackLimit

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export type V3Response = V3Response_Null | V3Response_Assets | V3Response_ExecutionResult | V3Response_Version | V3Response_PalletsInfo | V3Response_DispatchResult

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V3Error] | undefined)
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export type V3Instruction = V3Instruction_WithdrawAsset | V3Instruction_ReserveAssetDeposited | V3Instruction_ReceiveTeleportedAsset | V3Instruction_QueryResponse | V3Instruction_TransferAsset | V3Instruction_TransferReserveAsset | V3Instruction_Transact | V3Instruction_HrmpNewChannelOpenRequest | V3Instruction_HrmpChannelAccepted | V3Instruction_HrmpChannelClosing | V3Instruction_ClearOrigin | V3Instruction_DescendOrigin | V3Instruction_ReportError | V3Instruction_DepositAsset | V3Instruction_DepositReserveAsset | V3Instruction_ExchangeAsset | V3Instruction_InitiateReserveWithdraw | V3Instruction_InitiateTeleport | V3Instruction_ReportHolding | V3Instruction_BuyExecution | V3Instruction_RefundSurplus | V3Instruction_SetErrorHandler | V3Instruction_SetAppendix | V3Instruction_ClearError | V3Instruction_ClaimAsset | V3Instruction_Trap | V3Instruction_SubscribeVersion | V3Instruction_UnsubscribeVersion | V3Instruction_BurnAsset | V3Instruction_ExpectAsset | V3Instruction_ExpectOrigin | V3Instruction_ExpectError | V3Instruction_ExpectTransactStatus | V3Instruction_QueryPallet | V3Instruction_ExpectPallet | V3Instruction_ReportTransactStatus | V3Instruction_ClearTransactStatus | V3Instruction_UniversalOrigin | V3Instruction_ExportMessage | V3Instruction_LockAsset | V3Instruction_UnlockAsset | V3Instruction_NoteUnlockable | V3Instruction_RequestUnlock | V3Instruction_SetFeesMode | V3Instruction_SetTopic | V3Instruction_ClearTopic | V3Instruction_AliasOrigin | V3Instruction_UnpaidExecution

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface V3Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface V3Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V3Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V3Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface V3Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Balances | ProxyType_Assets | ProxyType_IdentityJudgement | ProxyType_CancelProxy | ProxyType_DappsStaking | ProxyType_StakerRewardClaim

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Balances {
    __kind: 'Balances'
}

export interface ProxyType_Assets {
    __kind: 'Assets'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_DappsStaking {
    __kind: 'DappsStaking'
}

export interface ProxyType_StakerRewardClaim {
    __kind: 'StakerRewardClaim'
}

export type Type_30 = Type_30_Ok | Type_30_Err

export interface Type_30_Ok {
    __kind: 'Ok'
}

export interface Type_30_Err {
    __kind: 'Err'
    value: DispatchError
}

/**
 * 
			Custom [dispatch errors](https://docs.substrate.io/main-docs/build/events-errors/)
			of this pallet.
			
 */
export type Error = Error_MaxSignedLimits | Error_KeyTooLong | Error_NotEnoughFunds | Error_BadWitness | Error_SignedMigrationNotAllowed | Error_BadChildRoot

/**
 * Max signed limits not respected.
 */
export interface Error_MaxSignedLimits {
    __kind: 'MaxSignedLimits'
}

/**
 * A key was longer than the configured maximum.
 * 
 * This means that the migration halted at the current [`Progress`] and
 * can be resumed with a larger [`crate::Config::MaxKeyLen`] value.
 * Retrying with the same [`crate::Config::MaxKeyLen`] value will not work.
 * The value should only be increased to avoid a storage migration for the currently
 * stored [`crate::Progress::LastKey`].
 */
export interface Error_KeyTooLong {
    __kind: 'KeyTooLong'
}

/**
 * submitter does not have enough funds.
 */
export interface Error_NotEnoughFunds {
    __kind: 'NotEnoughFunds'
}

/**
 * Bad witness data provided.
 */
export interface Error_BadWitness {
    __kind: 'BadWitness'
}

/**
 * Signed migration is not allowed because the maximum limit is not set yet.
 */
export interface Error_SignedMigrationNotAllowed {
    __kind: 'SignedMigrationNotAllowed'
}

/**
 * Bad child root provided.
 */
export interface Error_BadChildRoot {
    __kind: 'BadChildRoot'
}

export type MigrationCompute = MigrationCompute_Signed | MigrationCompute_Auto

export interface MigrationCompute_Signed {
    __kind: 'Signed'
}

export interface MigrationCompute_Auto {
    __kind: 'Auto'
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type Call = Call_System | Call_Utility | Call_Identity | Call_Timestamp | Call_Multisig | Call_Proxy | Call_ParachainSystem | Call_ParachainInfo | Call_Balances | Call_Vesting | Call_DappsStaking | Call_BlockReward | Call_Assets | Call_CollatorSelection | Call_Session | Call_XcmpQueue | Call_PolkadotXcm | Call_CumulusXcm | Call_DmpQueue | Call_XcAssetConfig | Call_EVM | Call_Ethereum | Call_EthCall | Call_BaseFee | Call_Contracts | Call_Sudo | Call_StateTrieMigration

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_ParachainInfo {
    __kind: 'ParachainInfo'
    value: ParachainInfoCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_DappsStaking {
    __kind: 'DappsStaking'
    value: DappsStakingCall
}

export interface Call_BlockReward {
    __kind: 'BlockReward'
    value: BlockRewardCall
}

export interface Call_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
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

export interface Call_XcAssetConfig {
    __kind: 'XcAssetConfig'
    value: XcAssetConfigCall
}

export interface Call_EVM {
    __kind: 'EVM'
    value: EVMCall
}

export interface Call_Ethereum {
    __kind: 'Ethereum'
    value: EthereumCall
}

export interface Call_EthCall {
    __kind: 'EthCall'
    value: EthCallCall
}

export interface Call_BaseFee {
    __kind: 'BaseFee'
    value: BaseFeeCall
}

export interface Call_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_StateTrieMigration {
    __kind: 'StateTrieMigration'
    value: StateTrieMigrationCall
}

export interface Timepoint {
    height: number
    index: number
}

export type Type_251 = Type_251_V2 | Type_251_V3

export interface Type_251_V2 {
    __kind: 'V2'
    value: Type_254[]
}

export interface Type_251_V3 {
    __kind: 'V3'
    value: Type_258[]
}

export type V3WeightLimit = V3WeightLimit_Unlimited | V3WeightLimit_Limited

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
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

export interface MigrationLimits {
    size: number
    item: number
}

export interface MigrationTask {
    progressTop: Progress
    progressChild: Progress
    size: number
    topItems: number
    childItems: number
}

export type Progress = Progress_ToStart | Progress_LastKey | Progress_Complete

export interface Progress_ToStart {
    __kind: 'ToStart'
}

export interface Progress_LastKey {
    __kind: 'LastKey'
    value: Uint8Array
}

export interface Progress_Complete {
    __kind: 'Complete'
}

export type OriginCaller = OriginCaller_system | OriginCaller_PolkadotXcm | OriginCaller_CumulusXcm | OriginCaller_Ethereum | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_294
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_295
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export type QueryStatus = QueryStatus_Pending | QueryStatus_VersionNotifier | QueryStatus_Ready

export interface QueryStatus_Pending {
    __kind: 'Pending'
    responder: VersionedMultiLocation
    maybeMatchQuerier: (VersionedMultiLocation | undefined)
    maybeNotify: ([number, number] | undefined)
    timeout: number
}

export interface QueryStatus_VersionNotifier {
    __kind: 'VersionNotifier'
    origin: VersionedMultiLocation
    isActive: boolean
}

export interface QueryStatus_Ready {
    __kind: 'Ready'
    response: VersionedResponse
    at: number
}

export type VersionedAssetId = VersionedAssetId_V3

export interface VersionedAssetId_V3 {
    __kind: 'V3'
    value: V3AssetId
}

export interface RemoteLockedFungibleRecord {
    amount: bigint
    owner: VersionedMultiLocation
    locker: VersionedMultiLocation
    users: number
}

export interface Announcement {
    real: Uint8Array
    callHash: Uint8Array
    height: number
}

export interface ProxyDefinition {
    delegate: Uint8Array
    proxyType: ProxyType
    delay: number
}

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
}

export type V3Junctions = V3Junctions_Here | V3Junctions_X1 | V3Junctions_X2 | V3Junctions_X3 | V3Junctions_X4 | V3Junctions_X5 | V3Junctions_X6 | V3Junctions_X7 | V3Junctions_X8

export interface V3Junctions_Here {
    __kind: 'Here'
}

export interface V3Junctions_X1 {
    __kind: 'X1'
    value: V3Junction
}

export interface V3Junctions_X2 {
    __kind: 'X2'
    value: [V3Junction, V3Junction]
}

export interface V3Junctions_X3 {
    __kind: 'X3'
    value: [V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X4 {
    __kind: 'X4'
    value: [V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X5 {
    __kind: 'X5'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X6 {
    __kind: 'X6'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X7 {
    __kind: 'X7'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X8 {
    __kind: 'X8'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
}

export type V3AssetId = V3AssetId_Concrete | V3AssetId_Abstract

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V3Fungibility = V3Fungibility_Fungible | V3Fungibility_NonFungible

export interface V3Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V3Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V3AssetInstance
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export interface V3PalletInfo {
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    major: number
    minor: number
    patch: number
}

export type V3MaybeErrorCode = V3MaybeErrorCode_Success | V3MaybeErrorCode_Error | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Uint8Array
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Uint8Array
}

export type V2OriginKind = V2OriginKind_Native | V2OriginKind_SovereignAccount | V2OriginKind_Superuser | V2OriginKind_Xcm

export interface V2OriginKind_Native {
    __kind: 'Native'
}

export interface V2OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V2OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V2OriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncoded {
    encoded: Uint8Array
}

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

export type V3Junction = V3Junction_Parachain | V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_PalletInstance | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_OnlyChild | V3Junction_Plurality | V3Junction_GlobalConsensus

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network: (V3NetworkId | undefined)
    id: Uint8Array
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: (V3NetworkId | undefined)
    key: Uint8Array
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Uint8Array
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export type V3NetworkId = V3NetworkId_ByGenesis | V3NetworkId_ByFork | V3NetworkId_Polkadot | V3NetworkId_Kusama | V3NetworkId_Westend | V3NetworkId_Rococo | V3NetworkId_Wococo | V3NetworkId_Ethereum | V3NetworkId_BitcoinCore | V3NetworkId_BitcoinCash

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Uint8Array
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Uint8Array
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional | DispatchError_Exhausted | DispatchError_Corruption | DispatchError_Unavailable

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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * Make some on-chain remark.
 * 
 * ## Complexity
 * - `O(1)`
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
 * ## Complexity
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * ## Complexity
 * - `O(C)` where `C` length of `code`
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
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
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
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
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
 * ## Complexity
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
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
 * ## Complexity
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
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
 * ## Complexity
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
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
 * ## Complexity
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
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
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
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
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
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
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
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
 * ## Complexity
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
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
 * ## Complexity
 * O(Z + C) where Z is the length of the call and C its execution weight.
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
 * ## Complexity
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
 * ## Complexity
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
 * ## Complexity
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
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
export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 * Dispatch the given `call` from an account that the sender is authorised for through
 * `add_proxy`.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
    forceProxyType: (ProxyType | undefined)
    call: Call
}

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to make a proxy.
 * - `proxy_type`: The permissions allowed for this proxy account.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * Unregister a proxy account for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to remove as a proxy.
 * - `proxy_type`: The permissions currently enabled for the removed proxy account.
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * Unregister all proxy accounts for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * WARNING: This may be called on accounts created by `pure`, however if done, then
 * the unreserved fees will be inaccessible. **All access to this account will be lost.**
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 * initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 * Requires a `Signed` origin.
 * 
 * - `proxy_type`: The type of the proxy that the sender will be registered as over the
 * new account. This will almost always be the most permissive `ProxyType` possible to
 * allow for maximum flexibility.
 * - `index`: A disambiguation index, in case this is called multiple times in the same
 * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 * want to use `0`.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * Fails with `Duplicate` if this has already been called in this transaction, from the
 * same sender, with the same parameters.
 * 
 * Fails if there are insufficient funds to pay for deposit.
 */
export interface ProxyCall_create_pure {
    __kind: 'create_pure'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 * Removes a previously spawned pure proxy.
 * 
 * WARNING: **All access to this account will be lost.** Any funds held in it will be
 * inaccessible.
 * 
 * Requires a `Signed` origin, and the sender account must have been created by a call to
 * `pure` with corresponding parameters.
 * 
 * - `spawner`: The account that originally called `pure` to create this account.
 * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
 * - `proxy_type`: The proxy type originally passed to `pure`.
 * - `height`: The height of the chain when the call to `pure` was processed.
 * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
 * 
 * Fails with `NoPermission` in case the caller is not a previously created pure
 * account whose `pure` call has corresponding parameters.
 */
export interface ProxyCall_kill_pure {
    __kind: 'kill_pure'
    spawner: MultiAddress
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

/**
 * Publish the hash of a proxy-call that will be made in the future.
 * 
 * This must be called some number of blocks before the corresponding `proxy` is attempted
 * if the delay associated with the proxy relationship is greater than zero.
 * 
 * No more than `MaxPending` announcements may be made at any one time.
 * 
 * This will take a deposit of `AnnouncementDepositFactor` as well as
 * `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
    callHash: Uint8Array
}

/**
 * Remove a given announcement.
 * 
 * May be called by a proxy account to remove a call they previously announced and return
 * the deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: Uint8Array
}

/**
 * Remove the given announcement of a delegate.
 * 
 * May be called by a target (proxied) account to remove a call that one of their delegates
 * (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `delegate`: The account that previously announced the call.
 * - `call_hash`: The hash of the call to be made.
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
    callHash: Uint8Array
}

/**
 * Dispatch the given `call` from an account that the sender is authorized for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType: (ProxyType | undefined)
    call: Call
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
export type ParachainInfoCall = never

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
 * ## Complexity
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
 * ## Complexity
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
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
 *   keep the sender account alive (true). ## Complexity
 * - O(1). Just like transfer, but reading the user's transferable balance first.
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
export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer | VestingCall_merge_schedules

/**
 * Unlock any vested funds of the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * ## Complexity
 * - `O(1)`.
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
 * ## Complexity
 * - `O(1)`.
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
 * ## Complexity
 * - `O(1)`.
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
 * ## Complexity
 * - `O(1)`.
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
export type DappsStakingCall = DappsStakingCall_register | DappsStakingCall_unregister | DappsStakingCall_withdraw_from_unregistered | DappsStakingCall_bond_and_stake | DappsStakingCall_unbond_and_unstake | DappsStakingCall_withdraw_unbonded | DappsStakingCall_nomination_transfer | DappsStakingCall_claim_staker | DappsStakingCall_claim_dapp | DappsStakingCall_force_new_era | DappsStakingCall_maintenance_mode | DappsStakingCall_set_reward_destination | DappsStakingCall_set_contract_stake_info | DappsStakingCall_burn_stale_reward

/**
 * Used to register contract for dapps staking.
 * The origin account used is treated as the `developer` account.
 * 
 * Depending on the pallet configuration/state it is possible that developer needs to be whitelisted prior to registration.
 * 
 * As part of this call, `RegisterDeposit` will be reserved from devs account.
 */
export interface DappsStakingCall_register {
    __kind: 'register'
    developer: Uint8Array
    contractId: SmartContract
}

/**
 * Unregister existing contract from dapps staking, making it ineligible for rewards from current era onwards.
 * This must be called by the root (at the moment).
 * 
 * Deposit is returned to the developer but existing stakers should manually call `withdraw_from_unregistered` if they wish to to unstake.
 * 
 * **Warning**: After this action ,contract can not be registered for dapps staking again.
 */
export interface DappsStakingCall_unregister {
    __kind: 'unregister'
    contractId: SmartContract
}

/**
 * Withdraw locked funds from a contract that was unregistered.
 * 
 * Funds don't need to undergo the unbonding period - they are returned immediately to the staker's free balance.
 */
export interface DappsStakingCall_withdraw_from_unregistered {
    __kind: 'withdraw_from_unregistered'
    contractId: SmartContract
}

/**
 * Lock up and stake balance of the origin account.
 * 
 * `value` must be more than the `minimum_balance` specified by `MinimumStakingAmount`
 * unless account already has bonded value equal or more than 'minimum_balance'.
 * 
 * The dispatch origin for this call must be _Signed_ by the staker's account.
 */
export interface DappsStakingCall_bond_and_stake {
    __kind: 'bond_and_stake'
    contractId: SmartContract
    value: bigint
}

/**
 * Start unbonding process and unstake balance from the contract.
 * 
 * The unstaked amount will no longer be eligible for rewards but still won't be unlocked.
 * User needs to wait for the unbonding period to finish before being able to withdraw
 * the funds via `withdraw_unbonded` call.
 * 
 * In case remaining staked balance on contract is below minimum staking amount,
 * entire stake for that contract will be unstaked.
 */
export interface DappsStakingCall_unbond_and_unstake {
    __kind: 'unbond_and_unstake'
    contractId: SmartContract
    value: bigint
}

/**
 * Withdraw all funds that have completed the unbonding process.
 * 
 * If there are unbonding chunks which will be fully unbonded in future eras,
 * they will remain and can be withdrawn later.
 */
export interface DappsStakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
}

/**
 * Transfer nomination from one contract to another.
 * 
 * Same rules as for `bond_and_stake` and `unbond_and_unstake` apply.
 * Minor difference is that there is no unbonding period so this call won't
 * check whether max number of unbonding chunks is exceeded.
 * 
 */
export interface DappsStakingCall_nomination_transfer {
    __kind: 'nomination_transfer'
    originContractId: SmartContract
    value: bigint
    targetContractId: SmartContract
}

/**
 * Claim earned staker rewards for the oldest unclaimed era.
 * In order to claim multiple eras, this call has to be called multiple times.
 * 
 * The rewards are always added to the staker's free balance (account) but depending on the reward destination configuration,
 * they might be immediately re-staked.
 */
export interface DappsStakingCall_claim_staker {
    __kind: 'claim_staker'
    contractId: SmartContract
}

/**
 * Claim earned dapp rewards for the specified era.
 * 
 * Call must ensure that the specified era is eligible for reward payout and that it hasn't already been paid out for the dapp.
 */
export interface DappsStakingCall_claim_dapp {
    __kind: 'claim_dapp'
    contractId: SmartContract
    era: number
}

/**
 * Force a new era at the start of the next block.
 * 
 * The dispatch origin must be Root.
 */
export interface DappsStakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * `true` will disable pallet, enabling maintenance mode. `false` will do the opposite.
 * 
 * The dispatch origin must be Root.
 */
export interface DappsStakingCall_maintenance_mode {
    __kind: 'maintenance_mode'
    enableMaintenance: boolean
}

/**
 * Used to set reward destination for staker rewards.
 * 
 * User must be an active staker in order to use this call.
 * This will apply to all existing unclaimed rewards.
 */
export interface DappsStakingCall_set_reward_destination {
    __kind: 'set_reward_destination'
    rewardDestination: RewardDestination
}

/**
 * Used to force set `ContractEraStake` storage values.
 * The purpose of this call is only for fixing one of the issues detected with dapps-staking.
 * 
 * The dispatch origin must be Root.
 */
export interface DappsStakingCall_set_contract_stake_info {
    __kind: 'set_contract_stake_info'
    contract: SmartContract
    era: number
    contractStakeInfo: ContractStakeInfo
}

/**
 * Used to burn unclaimed & stale rewards from an unregistered contract.
 */
export interface DappsStakingCall_burn_stale_reward {
    __kind: 'burn_stale_reward'
    contractId: SmartContract
    era: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BlockRewardCall = BlockRewardCall_set_configuration

/**
 * Sets the reward distribution configuration parameters which will be used from next block reward distribution.
 * 
 * It is mandatory that all components of configuration sum up to one whole (**100%**),
 * otherwise an error `InvalidDistributionConfiguration` will be raised.
 * 
 * - `reward_distro_params` - reward distribution params
 * 
 * Emits `DistributionConfigurationChanged` with config embeded into event itself.
 * 
 */
export interface BlockRewardCall_set_configuration {
    __kind: 'set_configuration'
    rewardDistroParams: RewardDistributionConfig
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetsCall = AssetsCall_create | AssetsCall_force_create | AssetsCall_start_destroy | AssetsCall_destroy_accounts | AssetsCall_destroy_approvals | AssetsCall_finish_destroy | AssetsCall_mint | AssetsCall_burn | AssetsCall_transfer | AssetsCall_transfer_keep_alive | AssetsCall_force_transfer | AssetsCall_freeze | AssetsCall_thaw | AssetsCall_freeze_asset | AssetsCall_thaw_asset | AssetsCall_transfer_ownership | AssetsCall_set_team | AssetsCall_set_metadata | AssetsCall_clear_metadata | AssetsCall_force_set_metadata | AssetsCall_force_clear_metadata | AssetsCall_force_asset_status | AssetsCall_approve_transfer | AssetsCall_cancel_approval | AssetsCall_force_cancel_approval | AssetsCall_transfer_approved | AssetsCall_touch | AssetsCall_refund

/**
 * Issue a new class of fungible assets from a public origin.
 * 
 * This new asset class has no assets initially and its owner is the origin.
 * 
 * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
 * 
 * Funds of sender are reserved by `AssetDeposit`.
 * 
 * Parameters:
 * - `id`: The identifier of the new asset. This must not be currently in use to identify
 * an existing asset.
 * - `admin`: The admin of this class of assets. The admin is the initial address of each
 * member of the asset class's admin team.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `Created` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_create {
    __kind: 'create'
    id: bigint
    admin: MultiAddress
    minBalance: bigint
}

/**
 * Issue a new class of fungible assets from a privileged origin.
 * 
 * This new asset class has no assets initially.
 * 
 * The origin must conform to `ForceOrigin`.
 * 
 * Unlike `create`, no funds are reserved.
 * 
 * - `id`: The identifier of the new asset. This must not be currently in use to identify
 * an existing asset.
 * - `owner`: The owner of this class of assets. The owner has full superuser permissions
 * over this asset, but may later change and configure the permissions using
 * `transfer_ownership` and `set_team`.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 * Emits `ForceCreated` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_force_create {
    __kind: 'force_create'
    id: bigint
    owner: MultiAddress
    isSufficient: boolean
    minBalance: bigint
}

/**
 * Start the process of destroying a fungible asset class.
 * 
 * `start_destroy` is the first in a series of extrinsics that should be called, to allow
 * destruction of an asset class.
 * 
 * The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * The asset class must be frozen before calling `start_destroy`.
 */
export interface AssetsCall_start_destroy {
    __kind: 'start_destroy'
    id: bigint
}

/**
 * Destroy all accounts associated with a given asset.
 * 
 * `destroy_accounts` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state.
 * 
 * Due to weight restrictions, this function may need to be called multiple times to fully
 * destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each call emits the `Event::DestroyedAccounts` event.
 */
export interface AssetsCall_destroy_accounts {
    __kind: 'destroy_accounts'
    id: bigint
}

/**
 * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 * 
 * `destroy_approvals` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state.
 * 
 * Due to weight restrictions, this function may need to be called multiple times to fully
 * destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each call emits the `Event::DestroyedApprovals` event.
 */
export interface AssetsCall_destroy_approvals {
    __kind: 'destroy_approvals'
    id: bigint
}

/**
 * Complete destroying asset and unreserve currency.
 * 
 * `finish_destroy` should only be called after `start_destroy` has been called, and the
 * asset is in a `Destroying` state. All accounts or approvals should be destroyed before
 * hand.
 * 
 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *   asset.
 * 
 * Each successful call emits the `Event::Destroyed` event.
 */
export interface AssetsCall_finish_destroy {
    __kind: 'finish_destroy'
    id: bigint
}

/**
 * Mint assets of a particular class.
 * 
 * The origin must be Signed and the sender must be the Issuer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to have some amount minted.
 * - `beneficiary`: The account to be credited with the minted assets.
 * - `amount`: The amount of the asset to be minted.
 * 
 * Emits `Issued` event when successful.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
 */
export interface AssetsCall_mint {
    __kind: 'mint'
    id: bigint
    beneficiary: MultiAddress
    amount: bigint
}

/**
 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 * 
 * Origin must be Signed and the sender should be the Manager of the asset `id`.
 * 
 * Bails with `NoAccount` if the `who` is already dead.
 * 
 * - `id`: The identifier of the asset to have some amount burned.
 * - `who`: The account to be debited from.
 * - `amount`: The maximum amount by which `who`'s balance should be reduced.
 * 
 * Emits `Burned` with the actual amount burned. If this takes the balance to below the
 * minimum for the asset, then the amount burned is increased to take it to zero.
 * 
 * Weight: `O(1)`
 * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
 */
export interface AssetsCall_burn {
    __kind: 'burn'
    id: bigint
    who: MultiAddress
    amount: bigint
}

/**
 * Move some assets from the sender account to another.
 * 
 * Origin must be Signed.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `target`: The account to be credited.
 * - `amount`: The amount by which the sender's balance of assets should be reduced and
 * `target`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the sender balance above zero but below
 * the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 * `target`.
 */
export interface AssetsCall_transfer {
    __kind: 'transfer'
    id: bigint
    target: MultiAddress
    amount: bigint
}

/**
 * Move some assets from the sender account to another, keeping the sender account alive.
 * 
 * Origin must be Signed.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `target`: The account to be credited.
 * - `amount`: The amount by which the sender's balance of assets should be reduced and
 * `target`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the sender balance above zero but below
 * the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 * `target`.
 */
export interface AssetsCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    id: bigint
    target: MultiAddress
    amount: bigint
}

/**
 * Move some assets from one account to another.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to have some amount transferred.
 * - `source`: The account to be debited.
 * - `dest`: The account to be credited.
 * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
 * `dest`'s balance increased. The amount actually transferred may be slightly greater in
 * the case that the transfer would otherwise take the `source` balance above zero but
 * below the minimum balance. Must be greater than zero.
 * 
 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
 * to below the minimum for the asset, then the amount transferred is increased to take it
 * to zero.
 * 
 * Weight: `O(1)`
 * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
 * `dest`.
 */
export interface AssetsCall_force_transfer {
    __kind: 'force_transfer'
    id: bigint
    source: MultiAddress
    dest: MultiAddress
    amount: bigint
}

/**
 * Disallow further unprivileged transfers from an account.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `who`: The account to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_freeze {
    __kind: 'freeze'
    id: bigint
    who: MultiAddress
}

/**
 * Allow unprivileged transfers from an account again.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `who`: The account to be unfrozen.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_thaw {
    __kind: 'thaw'
    id: bigint
    who: MultiAddress
}

/**
 * Disallow further unprivileged transfers for the asset class.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_freeze_asset {
    __kind: 'freeze_asset'
    id: bigint
}

/**
 * Allow unprivileged transfers for the asset again.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be thawed.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_thaw_asset {
    __kind: 'thaw_asset'
    id: bigint
}

/**
 * Change the Owner of an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * 
 * Emits `OwnerChanged`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_transfer_ownership {
    __kind: 'transfer_ownership'
    id: bigint
    owner: MultiAddress
}

/**
 * Change the Issuer, Admin and Freezer of an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * - `id`: The identifier of the asset to be frozen.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * 
 * Emits `TeamChanged`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_set_team {
    __kind: 'set_team'
    id: bigint
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
}

/**
 * Set the metadata for an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * Funds of sender are reserved according to the formula:
 * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
 * account any already reserved funds.
 * 
 * - `id`: The identifier of the asset to update.
 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_set_metadata {
    __kind: 'set_metadata'
    id: bigint
    name: Uint8Array
    symbol: Uint8Array
    decimals: number
}

/**
 * Clear the metadata for an asset.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 * Any deposit is freed for the asset owner.
 * 
 * - `id`: The identifier of the asset to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_clear_metadata {
    __kind: 'clear_metadata'
    id: bigint
}

/**
 * Force the metadata for an asset to some value.
 * 
 * Origin must be ForceOrigin.
 * 
 * Any deposit is left alone.
 * 
 * - `id`: The identifier of the asset to update.
 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
 */
export interface AssetsCall_force_set_metadata {
    __kind: 'force_set_metadata'
    id: bigint
    name: Uint8Array
    symbol: Uint8Array
    decimals: number
    isFrozen: boolean
}

/**
 * Clear the metadata for an asset.
 * 
 * Origin must be ForceOrigin.
 * 
 * Any deposit is returned.
 * 
 * - `id`: The identifier of the asset to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_force_clear_metadata {
    __kind: 'force_clear_metadata'
    id: bigint
}

/**
 * Alter the attributes of a given asset.
 * 
 * Origin must be `ForceOrigin`.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * - `min_balance`: The minimum balance of this new asset that any single account must
 * have. If an account's balance is reduced below this, then it collapses to zero.
 * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
 * value to account for the state bloat associated with its balance storage. If set to
 * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
 * an ED in the Balances pallet or whatever else is used to control user-account state
 * growth).
 * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 * instructions.
 * 
 * Emits `AssetStatusChanged` with the identity of the asset.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_force_asset_status {
    __kind: 'force_asset_status'
    id: bigint
    owner: MultiAddress
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
    minBalance: bigint
    isSufficient: boolean
    isFrozen: boolean
}

/**
 * Approve an amount of asset for transfer by a delegated third-party account.
 * 
 * Origin must be Signed.
 * 
 * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
 * for the purpose of holding the approval. If some non-zero amount of assets is already
 * approved from signing account to `delegate`, then it is topped up or unreserved to
 * meet the right value.
 * 
 * NOTE: The signing account does not need to own `amount` of assets at the point of
 * making this call.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account to delegate permission to transfer asset.
 * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
 * already an approval in place, then this acts additively.
 * 
 * Emits `ApprovedTransfer` on success.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_approve_transfer {
    __kind: 'approve_transfer'
    id: bigint
    delegate: MultiAddress
    amount: bigint
}

/**
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 * Origin must be Signed and there must be an approval in place between signer and
 * `delegate`.
 * 
 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account delegated permission to transfer asset.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_cancel_approval {
    __kind: 'cancel_approval'
    id: bigint
    delegate: MultiAddress
}

/**
 * Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
 * account of the asset `id`.
 * 
 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 * - `id`: The identifier of the asset.
 * - `delegate`: The account delegated permission to transfer asset.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_force_cancel_approval {
    __kind: 'force_cancel_approval'
    id: bigint
    owner: MultiAddress
    delegate: MultiAddress
}

/**
 * Transfer some asset balance from a previously delegated account to some third-party
 * account.
 * 
 * Origin must be Signed and there must be an approval in place by the `owner` to the
 * signer.
 * 
 * If the entire amount approved for transfer is transferred, then any deposit previously
 * reserved by `approve_transfer` is unreserved.
 * 
 * - `id`: The identifier of the asset.
 * - `owner`: The account which previously approved for a transfer of at least `amount` and
 * from which the asset balance will be withdrawn.
 * - `destination`: The account to which the asset balance of `amount` will be transferred.
 * - `amount`: The amount of assets to transfer.
 * 
 * Emits `TransferredApproved` on success.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_transfer_approved {
    __kind: 'transfer_approved'
    id: bigint
    owner: MultiAddress
    destination: MultiAddress
    amount: bigint
}

/**
 * Create an asset account for non-provider assets.
 * 
 * A deposit will be taken from the signer account.
 * 
 * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
 *   to be taken.
 * - `id`: The identifier of the asset for the account to be created.
 * 
 * Emits `Touched` event when successful.
 */
export interface AssetsCall_touch {
    __kind: 'touch'
    id: bigint
}

/**
 * Return the deposit (if any) of an asset account.
 * 
 * The origin must be Signed.
 * 
 * - `id`: The identifier of the asset for the account to be created.
 * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
 * 
 * Emits `Refunded` event when successful.
 */
export interface AssetsCall_refund {
    __kind: 'refund'
    id: bigint
    allowBurn: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CollatorSelectionCall = CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_leave_intent

/**
 * Set the list of invulnerable (fixed) collators.
 */
export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: Uint8Array[]
}

/**
 * Set the ideal number of collators (not including the invulnerables).
 * If lowering this number, then the number of running collators could be higher than this figure.
 * Aside from that edge case, there should be no other way to have more collators than the desired number.
 */
export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

/**
 * Set the candidacy bond amount.
 */
export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

/**
 * Register this account as a collator candidate. The account must (a) already have
 * registered session keys and (b) be able to reserve the `CandidacyBond`.
 * 
 * This call is not available to `Invulnerable` collators.
 */
export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

/**
 * Deregister `origin` as a collator candidate. Note that the collator can only leave on
 * session change. The `CandidacyBond` will be unreserved immediately.
 * 
 * This call will fail if the total number of candidates would drop below `MinCandidates`.
 * 
 * This call is not available to `Invulnerable` collators.
 */
export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
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
 * ## Complexity
 * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
 *   fixed.
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
 * ## Complexity
 * - `O(1)` in number of key types. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
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
    weightLimit: Weight
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
    new: Weight
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
    new: Weight
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
    new: Weight
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_withdraw_assets | PolkadotXcmCall_limited_reserve_withdraw_assets

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
    message: Type_251
    maxWeight: Weight
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
    location: V3MultiLocation
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
    weightLimit: V3WeightLimit
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
    weightLimit: V3WeightLimit
}

/**
 * Transfer some assets from sovereign account to reserve holder chain and
 * forward a notification XCM.
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
export interface PolkadotXcmCall_reserve_withdraw_assets {
    __kind: 'reserve_withdraw_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * Transfer some assets from sovereign account to reserve holder chain and
 * forward a notification XCM.
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
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_reserve_withdraw_assets {
    __kind: 'limited_reserve_withdraw_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
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
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcAssetConfigCall = XcAssetConfigCall_register_asset_location | XcAssetConfigCall_set_asset_units_per_second | XcAssetConfigCall_change_existing_asset_location | XcAssetConfigCall_remove_payment_asset | XcAssetConfigCall_remove_asset

/**
 * Register new asset location to asset Id mapping.
 * 
 * This makes the asset eligible for XCM interaction.
 */
export interface XcAssetConfigCall_register_asset_location {
    __kind: 'register_asset_location'
    assetLocation: VersionedMultiLocation
    assetId: bigint
}

/**
 * Change the amount of units we are charging per execution second
 * for a given AssetLocation.
 */
export interface XcAssetConfigCall_set_asset_units_per_second {
    __kind: 'set_asset_units_per_second'
    assetLocation: VersionedMultiLocation
    unitsPerSecond: bigint
}

/**
 * Change the xcm type mapping for a given asset Id.
 * The new asset type will inherit old `units per second` value.
 */
export interface XcAssetConfigCall_change_existing_asset_location {
    __kind: 'change_existing_asset_location'
    newAssetLocation: VersionedMultiLocation
    assetId: bigint
}

/**
 * Removes asset from the set of supported payment assets.
 * 
 * The asset can still be interacted with via XCM but it cannot be used to pay for execution time.
 */
export interface XcAssetConfigCall_remove_payment_asset {
    __kind: 'remove_payment_asset'
    assetLocation: VersionedMultiLocation
}

/**
 * Removes all information related to asset, removing it from XCM support.
 */
export interface XcAssetConfigCall_remove_asset {
    __kind: 'remove_asset'
    assetId: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EVMCall = EVMCall_withdraw | EVMCall_call | EVMCall_create | EVMCall_create2

/**
 * Withdraw balance from EVM into currency/balances pallet.
 */
export interface EVMCall_withdraw {
    __kind: 'withdraw'
    address: Uint8Array
    value: bigint
}

/**
 * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
 */
export interface EVMCall_call {
    __kind: 'call'
    source: Uint8Array
    target: Uint8Array
    input: Uint8Array
    value: bigint
    gasLimit: bigint
    maxFeePerGas: bigint
    maxPriorityFeePerGas: (bigint | undefined)
    nonce: (bigint | undefined)
    accessList: [Uint8Array, Uint8Array[]][]
}

/**
 * Issue an EVM create operation. This is similar to a contract creation transaction in
 * Ethereum.
 */
export interface EVMCall_create {
    __kind: 'create'
    source: Uint8Array
    init: Uint8Array
    value: bigint
    gasLimit: bigint
    maxFeePerGas: bigint
    maxPriorityFeePerGas: (bigint | undefined)
    nonce: (bigint | undefined)
    accessList: [Uint8Array, Uint8Array[]][]
}

/**
 * Issue an EVM create2 operation.
 */
export interface EVMCall_create2 {
    __kind: 'create2'
    source: Uint8Array
    init: Uint8Array
    salt: Uint8Array
    value: bigint
    gasLimit: bigint
    maxFeePerGas: bigint
    maxPriorityFeePerGas: (bigint | undefined)
    nonce: (bigint | undefined)
    accessList: [Uint8Array, Uint8Array[]][]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EthereumCall = EthereumCall_transact

/**
 * Transact an Ethereum transaction.
 */
export interface EthereumCall_transact {
    __kind: 'transact'
    transaction: TransactionV2
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EthCallCall = EthCallCall_call

/**
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + read/write + 10_000.
 * # </weight>
 */
export interface EthCallCall_call {
    __kind: 'call'
    call: Call
    signer: Uint8Array
    signature: Uint8Array
    nonce: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BaseFeeCall = BaseFeeCall_set_base_fee_per_gas | BaseFeeCall_set_elasticity

export interface BaseFeeCall_set_base_fee_per_gas {
    __kind: 'set_base_fee_per_gas'
    fee: bigint
}

export interface BaseFeeCall_set_elasticity {
    __kind: 'set_elasticity'
    elasticity: number
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
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
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
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StateTrieMigrationCall = StateTrieMigrationCall_control_auto_migration | StateTrieMigrationCall_continue_migrate | StateTrieMigrationCall_migrate_custom_top | StateTrieMigrationCall_migrate_custom_child | StateTrieMigrationCall_set_signed_max_limits | StateTrieMigrationCall_force_set_progress

/**
 * Control the automatic migration.
 * 
 * The dispatch origin of this call must be [`Config::ControlOrigin`].
 */
export interface StateTrieMigrationCall_control_auto_migration {
    __kind: 'control_auto_migration'
    maybeConfig: (MigrationLimits | undefined)
}

/**
 * Continue the migration for the given `limits`.
 * 
 * The dispatch origin of this call can be any signed account.
 * 
 * This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
 * Upon successful execution, the transaction fee is returned.
 * 
 * The (potentially over-estimated) of the byte length of all the data read must be
 * provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
 * that executing the current `MigrationTask` with the given `limits` will not exceed
 * `real_size_upper` bytes of read data.
 * 
 * The `witness_task` is merely a helper to prevent the caller from being slashed or
 * generally trigger a migration that they do not intend. This parameter is just a message
 * from caller, saying that they believed `witness_task` was the last state of the
 * migration, and they only wish for their transaction to do anything, if this assumption
 * holds. In case `witness_task` does not match, the transaction fails.
 * 
 * Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
 * recommended way of doing this is to pass a `limit` that only bounds `count`, as the
 * `size` limit can always be overwritten.
 */
export interface StateTrieMigrationCall_continue_migrate {
    __kind: 'continue_migrate'
    limits: MigrationLimits
    realSizeUpper: number
    witnessTask: MigrationTask
}

/**
 * Migrate the list of top keys by iterating each of them one by one.
 * 
 * This does not affect the global migration process tracker ([`MigrationProcess`]), and
 * should only be used in case any keys are leftover due to a bug.
 */
export interface StateTrieMigrationCall_migrate_custom_top {
    __kind: 'migrate_custom_top'
    keys: Uint8Array[]
    witnessSize: number
}

/**
 * Migrate the list of child keys by iterating each of them one by one.
 * 
 * All of the given child keys must be present under one `child_root`.
 * 
 * This does not affect the global migration process tracker ([`MigrationProcess`]), and
 * should only be used in case any keys are leftover due to a bug.
 */
export interface StateTrieMigrationCall_migrate_custom_child {
    __kind: 'migrate_custom_child'
    root: Uint8Array
    childKeys: Uint8Array[]
    totalSize: number
}

/**
 * Set the maximum limit of the signed migration.
 */
export interface StateTrieMigrationCall_set_signed_max_limits {
    __kind: 'set_signed_max_limits'
    limits: MigrationLimits
}

/**
 * Forcefully set the progress the running migration.
 * 
 * This is only useful in one case: the next key to migrate is too big to be migrated with
 * a signed account, in a parachain context, and we simply want to skip it. A reasonable
 * example of this would be `:code:`, which is both very expensive to migrate, and commonly
 * used, so probably it is already migrated.
 * 
 * In case you mess things up, you can also, in principle, use this to reset the migration
 * process.
 */
export interface StateTrieMigrationCall_force_set_progress {
    __kind: 'force_set_progress'
    progressTop: Progress
    progressChild: Progress
}

export type Type_254 = Type_254_WithdrawAsset | Type_254_ReserveAssetDeposited | Type_254_ReceiveTeleportedAsset | Type_254_QueryResponse | Type_254_TransferAsset | Type_254_TransferReserveAsset | Type_254_Transact | Type_254_HrmpNewChannelOpenRequest | Type_254_HrmpChannelAccepted | Type_254_HrmpChannelClosing | Type_254_ClearOrigin | Type_254_DescendOrigin | Type_254_ReportError | Type_254_DepositAsset | Type_254_DepositReserveAsset | Type_254_ExchangeAsset | Type_254_InitiateReserveWithdraw | Type_254_InitiateTeleport | Type_254_QueryHolding | Type_254_BuyExecution | Type_254_RefundSurplus | Type_254_SetErrorHandler | Type_254_SetAppendix | Type_254_ClearError | Type_254_ClaimAsset | Type_254_Trap | Type_254_SubscribeVersion | Type_254_UnsubscribeVersion

export interface Type_254_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface Type_254_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_254_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_254_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_254_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_254_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_254_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_254_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_254_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_254_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_254_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_254_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_254_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_254_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_254_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_254_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_254_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_254_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_254_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_254_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_254_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_254_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_254[]
}

export interface Type_254_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_254[]
}

export interface Type_254_ClearError {
    __kind: 'ClearError'
}

export interface Type_254_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_254_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_254_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_254_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_258 = Type_258_WithdrawAsset | Type_258_ReserveAssetDeposited | Type_258_ReceiveTeleportedAsset | Type_258_QueryResponse | Type_258_TransferAsset | Type_258_TransferReserveAsset | Type_258_Transact | Type_258_HrmpNewChannelOpenRequest | Type_258_HrmpChannelAccepted | Type_258_HrmpChannelClosing | Type_258_ClearOrigin | Type_258_DescendOrigin | Type_258_ReportError | Type_258_DepositAsset | Type_258_DepositReserveAsset | Type_258_ExchangeAsset | Type_258_InitiateReserveWithdraw | Type_258_InitiateTeleport | Type_258_ReportHolding | Type_258_BuyExecution | Type_258_RefundSurplus | Type_258_SetErrorHandler | Type_258_SetAppendix | Type_258_ClearError | Type_258_ClaimAsset | Type_258_Trap | Type_258_SubscribeVersion | Type_258_UnsubscribeVersion | Type_258_BurnAsset | Type_258_ExpectAsset | Type_258_ExpectOrigin | Type_258_ExpectError | Type_258_ExpectTransactStatus | Type_258_QueryPallet | Type_258_ExpectPallet | Type_258_ReportTransactStatus | Type_258_ClearTransactStatus | Type_258_UniversalOrigin | Type_258_ExportMessage | Type_258_LockAsset | Type_258_UnlockAsset | Type_258_NoteUnlockable | Type_258_RequestUnlock | Type_258_SetFeesMode | Type_258_SetTopic | Type_258_ClearTopic | Type_258_AliasOrigin | Type_258_UnpaidExecution

export interface Type_258_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_258_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_258_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_258_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface Type_258_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_258_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_258_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface Type_258_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_258_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_258_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_258_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_258_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_258_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_258_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_258_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_258_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_258_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_258_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_258_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_258_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_258_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_258_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_258[]
}

export interface Type_258_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_258[]
}

export interface Type_258_ClearError {
    __kind: 'ClearError'
}

export interface Type_258_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_258_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_258_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_258_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_258_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_258_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_258_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface Type_258_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface Type_258_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_258_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface Type_258_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface Type_258_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_258_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_258_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_258_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_258_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_258_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_258_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_258_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_258_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_258_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface Type_258_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_258_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_258_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
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
    value: V2Junctions
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
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
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
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

export type Origin = Origin_Xcm | Origin_Response

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export interface Origin_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export type Type_294 = Type_294_Relay | Type_294_SiblingParachain

export interface Type_294_Relay {
    __kind: 'Relay'
}

export interface Type_294_SiblingParachain {
    __kind: 'SiblingParachain'
    value: number
}

export type Type_295 = Type_295_EthereumTransaction

export interface Type_295_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: Uint8Array
}

export type Void = never

export type VersionedResponse = VersionedResponse_V2 | VersionedResponse_V3

export interface VersionedResponse_V2 {
    __kind: 'V2'
    value: V2Response
}

export interface VersionedResponse_V3 {
    __kind: 'V3'
    value: V3Response
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export type Event = Event_System | Event_Utility | Event_Identity | Event_Multisig | Event_Proxy | Event_ParachainSystem | Event_TransactionPayment | Event_Balances | Event_Vesting | Event_DappsStaking | Event_BlockReward | Event_Assets | Event_CollatorSelection | Event_Session | Event_XcmpQueue | Event_PolkadotXcm | Event_CumulusXcm | Event_DmpQueue | Event_XcAssetConfig | Event_EVM | Event_Ethereum | Event_EthCall | Event_BaseFee | Event_Contracts | Event_Sudo | Event_StateTrieMigration

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemEvent
}

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Vesting {
    __kind: 'Vesting'
    value: VestingEvent
}

export interface Event_DappsStaking {
    __kind: 'DappsStaking'
    value: DappsStakingEvent
}

export interface Event_BlockReward {
    __kind: 'BlockReward'
    value: BlockRewardEvent
}

export interface Event_Assets {
    __kind: 'Assets'
    value: AssetsEvent
}

export interface Event_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueEvent
}

export interface Event_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmEvent
}

export interface Event_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmEvent
}

export interface Event_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueEvent
}

export interface Event_XcAssetConfig {
    __kind: 'XcAssetConfig'
    value: XcAssetConfigEvent
}

export interface Event_EVM {
    __kind: 'EVM'
    value: EVMEvent
}

export interface Event_Ethereum {
    __kind: 'Ethereum'
    value: EthereumEvent
}

export interface Event_EthCall {
    __kind: 'EthCall'
    value: EthCallEvent
}

export interface Event_BaseFee {
    __kind: 'BaseFee'
    value: BaseFeeEvent
}

export interface Event_Contracts {
    __kind: 'Contracts'
    value: ContractsEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_StateTrieMigration {
    __kind: 'StateTrieMigration'
    value: StateTrieMigrationEvent
}

export type V2AssetId = V2AssetId_Concrete | V2AssetId_Abstract

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V2Fungibility = V2Fungibility_Fungible | V2Fungibility_NonFungible

export interface V2Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V2Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V2AssetInstance
}

export type V3AssetInstance = V3AssetInstance_Undefined | V3AssetInstance_Index | V3AssetInstance_Array4 | V3AssetInstance_Array8 | V3AssetInstance_Array16 | V3AssetInstance_Array32

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export type V2Junctions = V2Junctions_Here | V2Junctions_X1 | V2Junctions_X2 | V2Junctions_X3 | V2Junctions_X4 | V2Junctions_X5 | V2Junctions_X6 | V2Junctions_X7 | V2Junctions_X8

export interface V2Junctions_Here {
    __kind: 'Here'
}

export interface V2Junctions_X1 {
    __kind: 'X1'
    value: V2Junction
}

export interface V2Junctions_X2 {
    __kind: 'X2'
    value: [V2Junction, V2Junction]
}

export interface V2Junctions_X3 {
    __kind: 'X3'
    value: [V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X4 {
    __kind: 'X4'
    value: [V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X5 {
    __kind: 'X5'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X6 {
    __kind: 'X6'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X7 {
    __kind: 'X7'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X8 {
    __kind: 'X8'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export type V3WildMultiAsset = V3WildMultiAsset_All | V3WildMultiAsset_AllOf | V3WildMultiAsset_AllCounted | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V3BodyId = V3BodyId_Unit | V3BodyId_Moniker | V3BodyId_Index | V3BodyId_Executive | V3BodyId_Technical | V3BodyId_Legislative | V3BodyId_Judicial | V3BodyId_Defense | V3BodyId_Administration | V3BodyId_Treasury

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Uint8Array
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export type V3BodyPart = V3BodyPart_Voice | V3BodyPart_Members | V3BodyPart_Fraction | V3BodyPart_AtLeastProportion | V3BodyPart_MoreThanProportion

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface ModuleError {
    index: number
    error: Uint8Array
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported

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

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
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

export interface ParachainInherentData {
    validationData: V2PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

export type SmartContract = SmartContract_Evm | SmartContract_Wasm

export interface SmartContract_Evm {
    __kind: 'Evm'
    value: Uint8Array
}

export interface SmartContract_Wasm {
    __kind: 'Wasm'
    value: Uint8Array
}

export type RewardDestination = RewardDestination_FreeBalance | RewardDestination_StakeBalance

export interface RewardDestination_FreeBalance {
    __kind: 'FreeBalance'
}

export interface RewardDestination_StakeBalance {
    __kind: 'StakeBalance'
}

export interface ContractStakeInfo {
    total: bigint
    numberOfStakers: number
    contractRewardClaimed: boolean
}

export interface RewardDistributionConfig {
    baseTreasuryPercent: number
    baseStakerPercent: number
    dappsPercent: number
    collatorsPercent: number
    adjustablePercent: number
    idealDappsStakingTvl: number
}

export interface SessionKeys {
    aura: Uint8Array
}

export type TransactionV2 = TransactionV2_Legacy | TransactionV2_EIP2930 | TransactionV2_EIP1559

export interface TransactionV2_Legacy {
    __kind: 'Legacy'
    value: LegacyTransaction
}

export interface TransactionV2_EIP2930 {
    __kind: 'EIP2930'
    value: EIP2930Transaction
}

export interface TransactionV2_EIP1559 {
    __kind: 'EIP1559'
    value: EIP1559Transaction
}

export type Determinism = Determinism_Deterministic | Determinism_AllowIndeterminism

export interface Determinism_Deterministic {
    __kind: 'Deterministic'
}

export interface Determinism_AllowIndeterminism {
    __kind: 'AllowIndeterminism'
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: Uint8Array
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: Uint8Array
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: Uint8Array
    hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_BatchCompletedWithErrors | UtilityEvent_ItemCompleted | UtilityEvent_ItemFailed | UtilityEvent_DispatchedAs

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Type_30
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type IdentityEvent = IdentityEvent_IdentitySet | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_JudgementGiven | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    who: Uint8Array
}

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    who: Uint8Array
    deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    who: Uint8Array
    deposit: bigint
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    who: Uint8Array
    registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    who: Uint8Array
    registrarIndex: number
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    target: Uint8Array
    registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type MultisigEvent = MultisigEvent_NewMultisig | MultisigEvent_MultisigApproval | MultisigEvent_MultisigExecuted | MultisigEvent_MultisigCancelled

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    approving: Uint8Array
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    approving: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    approving: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
    result: Type_30
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    cancelling: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ProxyEvent = ProxyEvent_ProxyExecuted | ProxyEvent_PureCreated | ProxyEvent_Announced | ProxyEvent_ProxyAdded | ProxyEvent_ProxyRemoved

/**
 * A proxy was executed correctly, with the given.
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    result: Type_30
}

/**
 * A pure account has been created by new proxy with given
 * disambiguation index and proxy type.
 */
export interface ProxyEvent_PureCreated {
    __kind: 'PureCreated'
    pure: Uint8Array
    who: Uint8Array
    proxyType: ProxyType
    disambiguationIndex: number
}

/**
 * An announcement was placed to make a call in the future.
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    real: Uint8Array
    proxy: Uint8Array
    callHash: Uint8Array
}

/**
 * A proxy was added.
 */
export interface ProxyEvent_ProxyAdded {
    __kind: 'ProxyAdded'
    delegator: Uint8Array
    delegatee: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 * A proxy was removed.
 */
export interface ProxyEvent_ProxyRemoved {
    __kind: 'ProxyRemoved'
    delegator: Uint8Array
    delegatee: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ParachainSystemEvent = ParachainSystemEvent_ValidationFunctionStored | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_ValidationFunctionDiscarded | ParachainSystemEvent_UpgradeAuthorized | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_DownwardMessagesProcessed | ParachainSystemEvent_UpwardMessageSent

/**
 * The validation function has been scheduled to apply.
 */
export interface ParachainSystemEvent_ValidationFunctionStored {
    __kind: 'ValidationFunctionStored'
}

/**
 * The validation function was applied as of the contained relay chain block number.
 */
export interface ParachainSystemEvent_ValidationFunctionApplied {
    __kind: 'ValidationFunctionApplied'
    relayChainBlockNum: number
}

/**
 * The relay-chain aborted the upgrade process.
 */
export interface ParachainSystemEvent_ValidationFunctionDiscarded {
    __kind: 'ValidationFunctionDiscarded'
}

/**
 * An upgrade has been authorized.
 */
export interface ParachainSystemEvent_UpgradeAuthorized {
    __kind: 'UpgradeAuthorized'
    codeHash: Uint8Array
}

/**
 * Some downward messages have been received and will be processed.
 */
export interface ParachainSystemEvent_DownwardMessagesReceived {
    __kind: 'DownwardMessagesReceived'
    count: number
}

/**
 * Downward messages were processed using the given weight.
 */
export interface ParachainSystemEvent_DownwardMessagesProcessed {
    __kind: 'DownwardMessagesProcessed'
    weightUsed: Weight
    dmqHead: Uint8Array
}

/**
 * An upward message was sent to the relay chain.
 */
export interface ParachainSystemEvent_UpwardMessageSent {
    __kind: 'UpwardMessageSent'
    messageHash: (Uint8Array | undefined)
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
    __kind: 'TransactionFeePaid'
    who: Uint8Array
    actualFee: bigint
    tip: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: Uint8Array
    freeBalance: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: Uint8Array
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: Uint8Array
    free: bigint
    reserved: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: Uint8Array
    amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type VestingEvent = VestingEvent_VestingUpdated | VestingEvent_VestingCompleted

/**
 * The amount vested has been updated. This could indicate a change in funds available.
 * The balance given is the amount which is left unvested (and thus locked).
 */
export interface VestingEvent_VestingUpdated {
    __kind: 'VestingUpdated'
    account: Uint8Array
    unvested: bigint
}

/**
 * An \[account\] has become fully vested.
 */
export interface VestingEvent_VestingCompleted {
    __kind: 'VestingCompleted'
    account: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type DappsStakingEvent = DappsStakingEvent_BondAndStake | DappsStakingEvent_UnbondAndUnstake | DappsStakingEvent_WithdrawFromUnregistered | DappsStakingEvent_Withdrawn | DappsStakingEvent_NewContract | DappsStakingEvent_ContractRemoved | DappsStakingEvent_NewDappStakingEra | DappsStakingEvent_Reward | DappsStakingEvent_MaintenanceMode | DappsStakingEvent_RewardDestination | DappsStakingEvent_NominationTransfer | DappsStakingEvent_StaleRewardBurned

/**
 * Account has bonded and staked funds on a smart contract.
 */
export interface DappsStakingEvent_BondAndStake {
    __kind: 'BondAndStake'
    value: [Uint8Array, SmartContract, bigint]
}

/**
 * Account has unbonded & unstaked some funds. Unbonding process begins.
 */
export interface DappsStakingEvent_UnbondAndUnstake {
    __kind: 'UnbondAndUnstake'
    value: [Uint8Array, SmartContract, bigint]
}

/**
 * Account has fully withdrawn all staked amount from an unregistered contract.
 */
export interface DappsStakingEvent_WithdrawFromUnregistered {
    __kind: 'WithdrawFromUnregistered'
    value: [Uint8Array, SmartContract, bigint]
}

/**
 * Account has withdrawn unbonded funds.
 */
export interface DappsStakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, bigint]
}

/**
 * New contract added for staking.
 */
export interface DappsStakingEvent_NewContract {
    __kind: 'NewContract'
    value: [Uint8Array, SmartContract]
}

/**
 * Contract removed from dapps staking.
 */
export interface DappsStakingEvent_ContractRemoved {
    __kind: 'ContractRemoved'
    value: [Uint8Array, SmartContract]
}

/**
 * New dapps staking era. Distribute era rewards to contracts.
 */
export interface DappsStakingEvent_NewDappStakingEra {
    __kind: 'NewDappStakingEra'
    value: number
}

/**
 * Reward paid to staker or developer.
 */
export interface DappsStakingEvent_Reward {
    __kind: 'Reward'
    value: [Uint8Array, SmartContract, number, bigint]
}

/**
 * Maintenance mode has been enabled or disabled
 */
export interface DappsStakingEvent_MaintenanceMode {
    __kind: 'MaintenanceMode'
    value: boolean
}

/**
 * Reward handling modified
 */
export interface DappsStakingEvent_RewardDestination {
    __kind: 'RewardDestination'
    value: [Uint8Array, RewardDestination]
}

/**
 * Nomination part has been transfered from one contract to another.
 * 
 * \(staker account, origin smart contract, amount, target smart contract\)
 */
export interface DappsStakingEvent_NominationTransfer {
    __kind: 'NominationTransfer'
    value: [Uint8Array, SmartContract, bigint, SmartContract]
}

/**
 * Stale, unclaimed reward from an unregistered contract has been burned.
 * 
 * \(developer account, smart contract, era, amount burned\)
 */
export interface DappsStakingEvent_StaleRewardBurned {
    __kind: 'StaleRewardBurned'
    value: [Uint8Array, SmartContract, number, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type BlockRewardEvent = BlockRewardEvent_DistributionConfigurationChanged

/**
 * Distribution configuration has been updated.
 */
export interface BlockRewardEvent_DistributionConfigurationChanged {
    __kind: 'DistributionConfigurationChanged'
    value: RewardDistributionConfig
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type AssetsEvent = AssetsEvent_Created | AssetsEvent_Issued | AssetsEvent_Transferred | AssetsEvent_Burned | AssetsEvent_TeamChanged | AssetsEvent_OwnerChanged | AssetsEvent_Frozen | AssetsEvent_Thawed | AssetsEvent_AssetFrozen | AssetsEvent_AssetThawed | AssetsEvent_AccountsDestroyed | AssetsEvent_ApprovalsDestroyed | AssetsEvent_DestructionStarted | AssetsEvent_Destroyed | AssetsEvent_ForceCreated | AssetsEvent_MetadataSet | AssetsEvent_MetadataCleared | AssetsEvent_ApprovedTransfer | AssetsEvent_ApprovalCancelled | AssetsEvent_TransferredApproved | AssetsEvent_AssetStatusChanged

/**
 * Some asset class was created.
 */
export interface AssetsEvent_Created {
    __kind: 'Created'
    assetId: bigint
    creator: Uint8Array
    owner: Uint8Array
}

/**
 * Some assets were issued.
 */
export interface AssetsEvent_Issued {
    __kind: 'Issued'
    assetId: bigint
    owner: Uint8Array
    amount: bigint
}

/**
 * Some assets were transferred.
 */
export interface AssetsEvent_Transferred {
    __kind: 'Transferred'
    assetId: bigint
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * Some assets were destroyed.
 */
export interface AssetsEvent_Burned {
    __kind: 'Burned'
    assetId: bigint
    owner: Uint8Array
    balance: bigint
}

/**
 * The management team changed.
 */
export interface AssetsEvent_TeamChanged {
    __kind: 'TeamChanged'
    assetId: bigint
    issuer: Uint8Array
    admin: Uint8Array
    freezer: Uint8Array
}

/**
 * The owner changed.
 */
export interface AssetsEvent_OwnerChanged {
    __kind: 'OwnerChanged'
    assetId: bigint
    owner: Uint8Array
}

/**
 * Some account `who` was frozen.
 */
export interface AssetsEvent_Frozen {
    __kind: 'Frozen'
    assetId: bigint
    who: Uint8Array
}

/**
 * Some account `who` was thawed.
 */
export interface AssetsEvent_Thawed {
    __kind: 'Thawed'
    assetId: bigint
    who: Uint8Array
}

/**
 * Some asset `asset_id` was frozen.
 */
export interface AssetsEvent_AssetFrozen {
    __kind: 'AssetFrozen'
    assetId: bigint
}

/**
 * Some asset `asset_id` was thawed.
 */
export interface AssetsEvent_AssetThawed {
    __kind: 'AssetThawed'
    assetId: bigint
}

/**
 * Accounts were destroyed for given asset.
 */
export interface AssetsEvent_AccountsDestroyed {
    __kind: 'AccountsDestroyed'
    assetId: bigint
    accountsDestroyed: number
    accountsRemaining: number
}

/**
 * Approvals were destroyed for given asset.
 */
export interface AssetsEvent_ApprovalsDestroyed {
    __kind: 'ApprovalsDestroyed'
    assetId: bigint
    approvalsDestroyed: number
    approvalsRemaining: number
}

/**
 * An asset class is in the process of being destroyed.
 */
export interface AssetsEvent_DestructionStarted {
    __kind: 'DestructionStarted'
    assetId: bigint
}

/**
 * An asset class was destroyed.
 */
export interface AssetsEvent_Destroyed {
    __kind: 'Destroyed'
    assetId: bigint
}

/**
 * Some asset class was force-created.
 */
export interface AssetsEvent_ForceCreated {
    __kind: 'ForceCreated'
    assetId: bigint
    owner: Uint8Array
}

/**
 * New metadata has been set for an asset.
 */
export interface AssetsEvent_MetadataSet {
    __kind: 'MetadataSet'
    assetId: bigint
    name: Uint8Array
    symbol: Uint8Array
    decimals: number
    isFrozen: boolean
}

/**
 * Metadata has been cleared for an asset.
 */
export interface AssetsEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    assetId: bigint
}

/**
 * (Additional) funds have been approved for transfer to a destination account.
 */
export interface AssetsEvent_ApprovedTransfer {
    __kind: 'ApprovedTransfer'
    assetId: bigint
    source: Uint8Array
    delegate: Uint8Array
    amount: bigint
}

/**
 * An approval for account `delegate` was cancelled by `owner`.
 */
export interface AssetsEvent_ApprovalCancelled {
    __kind: 'ApprovalCancelled'
    assetId: bigint
    owner: Uint8Array
    delegate: Uint8Array
}

/**
 * An `amount` was transferred in its entirety from `owner` to `destination` by
 * the approved `delegate`.
 */
export interface AssetsEvent_TransferredApproved {
    __kind: 'TransferredApproved'
    assetId: bigint
    owner: Uint8Array
    delegate: Uint8Array
    destination: Uint8Array
    amount: bigint
}

/**
 * An asset has had its attributes changed by the `Force` origin.
 */
export interface AssetsEvent_AssetStatusChanged {
    __kind: 'AssetStatusChanged'
    assetId: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type CollatorSelectionEvent = CollatorSelectionEvent_NewInvulnerables | CollatorSelectionEvent_NewDesiredCandidates | CollatorSelectionEvent_NewCandidacyBond | CollatorSelectionEvent_CandidateAdded | CollatorSelectionEvent_CandidateRemoved | CollatorSelectionEvent_CandidateSlashed

export interface CollatorSelectionEvent_NewInvulnerables {
    __kind: 'NewInvulnerables'
    value: Uint8Array[]
}

export interface CollatorSelectionEvent_NewDesiredCandidates {
    __kind: 'NewDesiredCandidates'
    value: number
}

export interface CollatorSelectionEvent_NewCandidacyBond {
    __kind: 'NewCandidacyBond'
    value: bigint
}

export interface CollatorSelectionEvent_CandidateAdded {
    __kind: 'CandidateAdded'
    value: [Uint8Array, bigint]
}

export interface CollatorSelectionEvent_CandidateRemoved {
    __kind: 'CandidateRemoved'
    value: Uint8Array
}

export interface CollatorSelectionEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    value: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    sessionIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type XcmpQueueEvent = XcmpQueueEvent_Success | XcmpQueueEvent_Fail | XcmpQueueEvent_BadVersion | XcmpQueueEvent_BadFormat | XcmpQueueEvent_XcmpMessageSent | XcmpQueueEvent_OverweightEnqueued | XcmpQueueEvent_OverweightServiced

/**
 * Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
    __kind: 'Success'
    messageHash: (Uint8Array | undefined)
    weight: Weight
}

/**
 * Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
    __kind: 'Fail'
    messageHash: (Uint8Array | undefined)
    error: V3Error
    weight: Weight
}

/**
 * Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
    __kind: 'BadVersion'
    messageHash: (Uint8Array | undefined)
}

/**
 * Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
    __kind: 'BadFormat'
    messageHash: (Uint8Array | undefined)
}

/**
 * An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
    __kind: 'XcmpMessageSent'
    messageHash: (Uint8Array | undefined)
}

/**
 * An XCM exceeded the individual message weight budget.
 */
export interface XcmpQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    sender: number
    sentAt: number
    index: bigint
    required: Weight
}

/**
 * An XCM from the overweight queue was executed with the given actual weight used.
 */
export interface XcmpQueueEvent_OverweightServiced {
    __kind: 'OverweightServiced'
    index: bigint
    used: Weight
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type PolkadotXcmEvent = PolkadotXcmEvent_Attempted | PolkadotXcmEvent_Sent | PolkadotXcmEvent_UnexpectedResponse | PolkadotXcmEvent_ResponseReady | PolkadotXcmEvent_Notified | PolkadotXcmEvent_NotifyOverweight | PolkadotXcmEvent_NotifyDispatchError | PolkadotXcmEvent_NotifyDecodeFailed | PolkadotXcmEvent_InvalidResponder | PolkadotXcmEvent_InvalidResponderVersion | PolkadotXcmEvent_ResponseTaken | PolkadotXcmEvent_AssetsTrapped | PolkadotXcmEvent_VersionChangeNotified | PolkadotXcmEvent_SupportedVersionChanged | PolkadotXcmEvent_NotifyTargetSendFail | PolkadotXcmEvent_NotifyTargetMigrationFail | PolkadotXcmEvent_InvalidQuerierVersion | PolkadotXcmEvent_InvalidQuerier | PolkadotXcmEvent_VersionNotifyStarted | PolkadotXcmEvent_VersionNotifyRequested | PolkadotXcmEvent_VersionNotifyUnrequested | PolkadotXcmEvent_FeesPaid | PolkadotXcmEvent_AssetsClaimed

/**
 * Execution of an XCM message was attempted.
 * 
 * \[ outcome \]
 */
export interface PolkadotXcmEvent_Attempted {
    __kind: 'Attempted'
    value: V3Outcome
}

/**
 * A XCM message was sent.
 * 
 * \[ origin, destination, message \]
 */
export interface PolkadotXcmEvent_Sent {
    __kind: 'Sent'
    value: [V3MultiLocation, V3MultiLocation, V3Instruction[]]
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    value: [V3MultiLocation, bigint]
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 * 
 * \[ id, response \]
 */
export interface PolkadotXcmEvent_ResponseReady {
    __kind: 'ResponseReady'
    value: [bigint, V3Response]
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_Notified {
    __kind: 'Notified'
    value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The registered notification could
 * not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 * 
 * \[ id, pallet index, call index, actual weight, max budgeted weight \]
 */
export interface PolkadotXcmEvent_NotifyOverweight {
    __kind: 'NotifyOverweight'
    value: [bigint, number, number, Weight, Weight]
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDispatchError {
    __kind: 'NotifyDispatchError'
    value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDecodeFailed {
    __kind: 'NotifyDecodeFailed'
    value: [bigint, number, number]
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 * 
 * \[ origin location, id, expected location \]
 */
export interface PolkadotXcmEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    value: [V3MultiLocation, bigint, (V3MultiLocation | undefined)]
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    value: [V3MultiLocation, bigint]
}

/**
 * Received query response has been read and removed.
 * 
 * \[ id \]
 */
export interface PolkadotXcmEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    value: bigint
}

/**
 * Some assets have been placed in an asset trap.
 * 
 * \[ hash, origin, assets \]
 */
export interface PolkadotXcmEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    value: [Uint8Array, V3MultiLocation, VersionedMultiAssets]
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * The cost of sending it (borne by the chain) is included.
 * 
 * \[ destination, result, cost \]
 */
export interface PolkadotXcmEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    value: [V3MultiLocation, number, V3MultiAsset[]]
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 * 
 * \[ location, XCM version \]
 */
export interface PolkadotXcmEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    value: [V3MultiLocation, number]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 * 
 * \[ location, query ID, error \]
 */
export interface PolkadotXcmEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    value: [V3MultiLocation, bigint, V3Error]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 * 
 * \[ location, query ID \]
 */
export interface PolkadotXcmEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    value: [VersionedMultiLocation, bigint]
}

/**
 * Expected query response has been received but the expected querier location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_InvalidQuerierVersion {
    __kind: 'InvalidQuerierVersion'
    value: [V3MultiLocation, bigint]
}

/**
 * Expected query response has been received but the querier location of the response does
 * not match the expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 * 
 * \[ origin location, id, expected querier, maybe actual querier \]
 */
export interface PolkadotXcmEvent_InvalidQuerier {
    __kind: 'InvalidQuerier'
    value: [V3MultiLocation, bigint, V3MultiLocation, (V3MultiLocation | undefined)]
}

/**
 * A remote has requested XCM version change notification from us and we have honored it.
 * A version information message is sent to them and its cost is included.
 * 
 * \[ destination location, cost \]
 */
export interface PolkadotXcmEvent_VersionNotifyStarted {
    __kind: 'VersionNotifyStarted'
    value: [V3MultiLocation, V3MultiAsset[]]
}

/**
 * We have requested that a remote chain sends us XCM version change notifications.
 * 
 * \[ destination location, cost \]
 */
export interface PolkadotXcmEvent_VersionNotifyRequested {
    __kind: 'VersionNotifyRequested'
    value: [V3MultiLocation, V3MultiAsset[]]
}

/**
 * We have requested that a remote chain stops sending us XCM version change notifications.
 * 
 * \[ destination location, cost \]
 */
export interface PolkadotXcmEvent_VersionNotifyUnrequested {
    __kind: 'VersionNotifyUnrequested'
    value: [V3MultiLocation, V3MultiAsset[]]
}

/**
 * Fees were paid from a location for an operation (often for using `SendXcm`).
 * 
 * \[ paying location, fees \]
 */
export interface PolkadotXcmEvent_FeesPaid {
    __kind: 'FeesPaid'
    value: [V3MultiLocation, V3MultiAsset[]]
}

/**
 * Some assets have been claimed from an asset trap
 * 
 * \[ hash, origin, assets \]
 */
export interface PolkadotXcmEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    value: [Uint8Array, V3MultiLocation, VersionedMultiAssets]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type CumulusXcmEvent = CumulusXcmEvent_InvalidFormat | CumulusXcmEvent_UnsupportedVersion | CumulusXcmEvent_ExecutedDownward

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    value: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    value: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface CumulusXcmEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    value: [Uint8Array, V3Outcome]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type DmpQueueEvent = DmpQueueEvent_InvalidFormat | DmpQueueEvent_UnsupportedVersion | DmpQueueEvent_ExecutedDownward | DmpQueueEvent_WeightExhausted | DmpQueueEvent_OverweightEnqueued | DmpQueueEvent_OverweightServiced | DmpQueueEvent_MaxMessagesExhausted

/**
 * Downward message is invalid XCM.
 */
export interface DmpQueueEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    messageId: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 */
export interface DmpQueueEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    messageId: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 */
export interface DmpQueueEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    messageId: Uint8Array
    outcome: V3Outcome
}

/**
 * The weight limit for handling downward messages was reached.
 */
export interface DmpQueueEvent_WeightExhausted {
    __kind: 'WeightExhausted'
    messageId: Uint8Array
    remainingWeight: Weight
    requiredWeight: Weight
}

/**
 * Downward message is overweight and was placed in the overweight queue.
 */
export interface DmpQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    messageId: Uint8Array
    overweightIndex: bigint
    requiredWeight: Weight
}

/**
 * Downward message from the overweight queue was executed.
 */
export interface DmpQueueEvent_OverweightServiced {
    __kind: 'OverweightServiced'
    overweightIndex: bigint
    weightUsed: Weight
}

/**
 * The maximum number of downward messages was.
 */
export interface DmpQueueEvent_MaxMessagesExhausted {
    __kind: 'MaxMessagesExhausted'
    messageId: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type XcAssetConfigEvent = XcAssetConfigEvent_AssetRegistered | XcAssetConfigEvent_UnitsPerSecondChanged | XcAssetConfigEvent_AssetLocationChanged | XcAssetConfigEvent_SupportedAssetRemoved | XcAssetConfigEvent_AssetRemoved

/**
 * Registed mapping between asset type and asset Id.
 */
export interface XcAssetConfigEvent_AssetRegistered {
    __kind: 'AssetRegistered'
    assetLocation: VersionedMultiLocation
    assetId: bigint
}

/**
 * Changed the amount of units we are charging per execution second for an asset
 */
export interface XcAssetConfigEvent_UnitsPerSecondChanged {
    __kind: 'UnitsPerSecondChanged'
    assetLocation: VersionedMultiLocation
    unitsPerSecond: bigint
}

/**
 * Changed the asset type mapping for a given asset id
 */
export interface XcAssetConfigEvent_AssetLocationChanged {
    __kind: 'AssetLocationChanged'
    previousAssetLocation: VersionedMultiLocation
    assetId: bigint
    newAssetLocation: VersionedMultiLocation
}

/**
 * Supported asset type for fee payment removed.
 */
export interface XcAssetConfigEvent_SupportedAssetRemoved {
    __kind: 'SupportedAssetRemoved'
    assetLocation: VersionedMultiLocation
}

/**
 * Removed all information related to an asset Id
 */
export interface XcAssetConfigEvent_AssetRemoved {
    __kind: 'AssetRemoved'
    assetLocation: VersionedMultiLocation
    assetId: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type EVMEvent = EVMEvent_Log | EVMEvent_Created | EVMEvent_CreatedFailed | EVMEvent_Executed | EVMEvent_ExecutedFailed

/**
 * Ethereum events from contracts.
 */
export interface EVMEvent_Log {
    __kind: 'Log'
    log: Log
}

/**
 * A contract has been created at given address.
 */
export interface EVMEvent_Created {
    __kind: 'Created'
    address: Uint8Array
}

/**
 * A contract was attempted to be created, but the execution failed.
 */
export interface EVMEvent_CreatedFailed {
    __kind: 'CreatedFailed'
    address: Uint8Array
}

/**
 * A contract has been executed successfully with states applied.
 */
export interface EVMEvent_Executed {
    __kind: 'Executed'
    address: Uint8Array
}

/**
 * A contract has been executed with errors. States are reverted with only gas fees applied.
 */
export interface EVMEvent_ExecutedFailed {
    __kind: 'ExecutedFailed'
    address: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type EthereumEvent = EthereumEvent_Executed

/**
 * An ethereum transaction was successfully executed.
 */
export interface EthereumEvent_Executed {
    __kind: 'Executed'
    from: Uint8Array
    to: Uint8Array
    transactionHash: Uint8Array
    exitReason: ExitReason
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type EthCallEvent = EthCallEvent_Executed

/**
 * A call just executed. \[result\]
 */
export interface EthCallEvent_Executed {
    __kind: 'Executed'
    value: [Uint8Array, Type_30]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type BaseFeeEvent = BaseFeeEvent_NewBaseFeePerGas | BaseFeeEvent_BaseFeeOverflow | BaseFeeEvent_NewElasticity

export interface BaseFeeEvent_NewBaseFeePerGas {
    __kind: 'NewBaseFeePerGas'
    fee: bigint
}

export interface BaseFeeEvent_BaseFeeOverflow {
    __kind: 'BaseFeeOverflow'
}

export interface BaseFeeEvent_NewElasticity {
    __kind: 'NewElasticity'
    elasticity: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ContractsEvent = ContractsEvent_Instantiated | ContractsEvent_Terminated | ContractsEvent_CodeStored | ContractsEvent_ContractEmitted | ContractsEvent_CodeRemoved | ContractsEvent_ContractCodeUpdated | ContractsEvent_Called | ContractsEvent_DelegateCalled

/**
 * Contract deployed by address at the specified address.
 */
export interface ContractsEvent_Instantiated {
    __kind: 'Instantiated'
    deployer: Uint8Array
    contract: Uint8Array
}

/**
 * Contract has been removed.
 * 
 * # Note
 * 
 * The only way for a contract to be removed and emitting this event is by calling
 * `seal_terminate`.
 */
export interface ContractsEvent_Terminated {
    __kind: 'Terminated'
    /**
     * The contract that was terminated.
     */
    contract: Uint8Array
    /**
     * The account that received the contracts remaining balance
     */
    beneficiary: Uint8Array
}

/**
 * Code with the specified hash has been stored.
 */
export interface ContractsEvent_CodeStored {
    __kind: 'CodeStored'
    codeHash: Uint8Array
}

/**
 * A custom event emitted by the contract.
 */
export interface ContractsEvent_ContractEmitted {
    __kind: 'ContractEmitted'
    /**
     * The contract that emitted the event.
     */
    contract: Uint8Array
    /**
     * Data supplied by the contract. Metadata generated during contract compilation
     * is needed to decode it.
     */
    data: Uint8Array
}

/**
 * A code with the specified hash was removed.
 */
export interface ContractsEvent_CodeRemoved {
    __kind: 'CodeRemoved'
    codeHash: Uint8Array
}

/**
 * A contract's code was updated.
 */
export interface ContractsEvent_ContractCodeUpdated {
    __kind: 'ContractCodeUpdated'
    /**
     * The contract that has been updated.
     */
    contract: Uint8Array
    /**
     * New code hash that was set for the contract.
     */
    newCodeHash: Uint8Array
    /**
     * Previous code hash of the contract.
     */
    oldCodeHash: Uint8Array
}

/**
 * A contract was called either by a plain account or another contract.
 * 
 * # Note
 * 
 * Please keep in mind that like all events this is only emitted for successful
 * calls. This is because on failure all storage changes including events are
 * rolled back.
 */
export interface ContractsEvent_Called {
    __kind: 'Called'
    /**
     * The account that called the `contract`.
     */
    caller: Uint8Array
    /**
     * The contract that was called.
     */
    contract: Uint8Array
}

/**
 * A contract delegate called a code hash.
 * 
 * # Note
 * 
 * Please keep in mind that like all events this is only emitted for successful
 * calls. This is because on failure all storage changes including events are
 * rolled back.
 */
export interface ContractsEvent_DelegateCalled {
    __kind: 'DelegateCalled'
    /**
     * The contract that performed the delegate call and hence in whose context
     * the `code_hash` is executed.
     */
    contract: Uint8Array
    /**
     * The code hash that was delegate called.
     */
    codeHash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Type_30
}

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    oldSudoer: (Uint8Array | undefined)
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    sudoResult: Type_30
}

/**
 * Inner events of this pallet.
 */
export type StateTrieMigrationEvent = StateTrieMigrationEvent_Migrated | StateTrieMigrationEvent_Slashed | StateTrieMigrationEvent_AutoMigrationFinished | StateTrieMigrationEvent_Halted

/**
 * Given number of `(top, child)` keys were migrated respectively, with the given
 * `compute`.
 */
export interface StateTrieMigrationEvent_Migrated {
    __kind: 'Migrated'
    top: number
    child: number
    compute: MigrationCompute
}

/**
 * Some account got slashed by the given amount.
 */
export interface StateTrieMigrationEvent_Slashed {
    __kind: 'Slashed'
    who: Uint8Array
    amount: bigint
}

/**
 * The auto migration task finished.
 */
export interface StateTrieMigrationEvent_AutoMigrationFinished {
    __kind: 'AutoMigrationFinished'
}

/**
 * Migration got halted due to an error or miss-configuration.
 */
export interface StateTrieMigrationEvent_Halted {
    __kind: 'Halted'
    error: Error
}

export type V2AssetInstance = V2AssetInstance_Undefined | V2AssetInstance_Index | V2AssetInstance_Array4 | V2AssetInstance_Array8 | V2AssetInstance_Array16 | V2AssetInstance_Array32 | V2AssetInstance_Blob

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type V2Junction = V2Junction_Parachain | V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_PalletInstance | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_Plurality

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Uint8Array
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Uint8Array
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
}

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
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

export interface LegacyTransaction {
    nonce: bigint
    gasPrice: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Uint8Array
    signature: TransactionSignature
}

export interface EIP2930Transaction {
    chainId: bigint
    nonce: bigint
    gasPrice: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Uint8Array
    accessList: AccessListItem[]
    oddYParity: boolean
    r: Uint8Array
    s: Uint8Array
}

export interface EIP1559Transaction {
    chainId: bigint
    nonce: bigint
    maxPriorityFeePerGas: bigint
    maxFeePerGas: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Uint8Array
    accessList: AccessListItem[]
    oddYParity: boolean
    r: Uint8Array
    s: Uint8Array
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

export type V2WildMultiAsset = V2WildMultiAsset_All | V2WildMultiAsset_AllOf

export interface V2WildMultiAsset_All {
    __kind: 'All'
}

export interface V2WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V2AssetId
    fun: V2WildFungibility
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export interface Log {
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

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Named | V2NetworkId_Polkadot | V2NetworkId_Kusama

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export type V2BodyId = V2BodyId_Unit | V2BodyId_Named | V2BodyId_Index | V2BodyId_Executive | V2BodyId_Technical | V2BodyId_Legislative | V2BodyId_Judicial | V2BodyId_Defense | V2BodyId_Administration | V2BodyId_Treasury

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export type V2BodyPart = V2BodyPart_Voice | V2BodyPart_Members | V2BodyPart_Fraction | V2BodyPart_AtLeastProportion | V2BodyPart_MoreThanProportion

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type TransactionAction = TransactionAction_Call | TransactionAction_Create

export interface TransactionAction_Call {
    __kind: 'Call'
    value: Uint8Array
}

export interface TransactionAction_Create {
    __kind: 'Create'
}

export interface TransactionSignature {
    v: bigint
    r: Uint8Array
    s: Uint8Array
}

export interface AccessListItem {
    address: Uint8Array
    storageKeys: Uint8Array[]
}

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
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

export type ExitError = ExitError_StackUnderflow | ExitError_StackOverflow | ExitError_InvalidJump | ExitError_InvalidRange | ExitError_DesignatedInvalid | ExitError_CallTooDeep | ExitError_CreateCollision | ExitError_CreateContractLimit | ExitError_InvalidCode | ExitError_OutOfOffset | ExitError_OutOfGas | ExitError_OutOfFund | ExitError_PCUnderflow | ExitError_CreateEmpty | ExitError_Other

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

export interface ExitError_InvalidCode {
    __kind: 'InvalidCode'
    value: number
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
