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

export interface Weight {
    refTime: bigint
    proofSize: bigint
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

export interface Timepoint {
    height: number
    index: number
}

export type Call = Call_System | Call_Utility | Call_Identity | Call_Timestamp | Call_Multisig | Call_Proxy | Call_ParachainSystem | Call_ParachainInfo | Call_Balances | Call_Vesting | Call_Inflation | Call_DappStaking | Call_Assets | Call_CollatorSelection | Call_Session | Call_XcmpQueue | Call_PolkadotXcm | Call_CumulusXcm | Call_DmpQueue | Call_XcAssetConfig | Call_XTokens | Call_EVM | Call_Ethereum | Call_DynamicEvmBaseFee | Call_Contracts | Call_Sudo | Call_StaticPriceProvider | Call_DappStakingMigration | Call_DappsStaking

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

export interface Call_Inflation {
    __kind: 'Inflation'
    value: InflationCall
}

export interface Call_DappStaking {
    __kind: 'DappStaking'
    value: DappStakingCall
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

export interface Call_XTokens {
    __kind: 'XTokens'
    value: XTokensCall
}

export interface Call_EVM {
    __kind: 'EVM'
    value: EVMCall
}

export interface Call_Ethereum {
    __kind: 'Ethereum'
    value: EthereumCall
}

export interface Call_DynamicEvmBaseFee {
    __kind: 'DynamicEvmBaseFee'
    value: DynamicEvmBaseFeeCall
}

export interface Call_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_StaticPriceProvider {
    __kind: 'StaticPriceProvider'
    value: StaticPriceProviderCall
}

export interface Call_DappStakingMigration {
    __kind: 'DappStakingMigration'
    value: DappStakingMigrationCall
}

export interface Call_DappsStaking {
    __kind: 'DappsStaking'
    value: DappsStakingCall
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

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Balances | ProxyType_Assets | ProxyType_IdentityJudgement | ProxyType_CancelProxy | ProxyType_DappStaking | ProxyType_StakerRewardClaim

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

export interface ProxyType_DappStaking {
    __kind: 'DappStaking'
}

export interface ProxyType_StakerRewardClaim {
    __kind: 'StakerRewardClaim'
}

export type OriginCaller = OriginCaller_system | OriginCaller_PolkadotXcm | OriginCaller_CumulusXcm | OriginCaller_Ethereum | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_297
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_298
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_299
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface IdAmount {
    id: RuntimeHoldReason
    amount: bigint
}

export interface CodeInfo {
    owner: Uint8Array
    deposit: bigint
    refcount: bigint
    determinism: Determinism
    codeLen: number
}

export interface ContractInfo {
    trieId: Uint8Array
    codeHash: Uint8Array
    storageBytes: number
    storageItems: number
    storageByteDeposit: bigint
    storageItemDeposit: bigint
    storageBaseDeposit: bigint
    delegateDependencies: [Uint8Array, bigint][]
}

export interface SegmentTracker {
    usedBandwidth: UsedBandwidth
    hrmpWatermark: (number | undefined)
    consumedGoAheadSignal: (V5UpgradeGoAhead | undefined)
}

export interface V5AbridgedHostConfiguration {
    maxCodeSize: number
    maxHeadDataSize: number
    maxUpwardQueueCount: number
    maxUpwardQueueSize: number
    maxUpwardMessageSize: number
    maxUpwardMessageNumPerCandidate: number
    hrmpMaxMessageNumPerCandidate: number
    validationUpgradeCooldown: number
    validationUpgradeDelay: number
    asyncBackingParams: AsyncBackingParams
}

export interface MessagingStateSnapshot {
    dmqMqcHead: Uint8Array
    relayDispatchQueueRemainingCapacity: RelayDispatchQueueRemainingCapacity
    ingressChannels: [number, V5AbridgedHrmpChannel][]
    egressChannels: [number, V5AbridgedHrmpChannel][]
}

export interface Ancestor {
    usedBandwidth: UsedBandwidth
    paraHeadHash: (Uint8Array | undefined)
    consumedGoAheadSignal: (V5UpgradeGoAhead | undefined)
}

export type V5UpgradeGoAhead = V5UpgradeGoAhead_Abort | V5UpgradeGoAhead_GoAhead

export interface V5UpgradeGoAhead_Abort {
    __kind: 'Abort'
}

export interface V5UpgradeGoAhead_GoAhead {
    __kind: 'GoAhead'
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

export type V3WeightLimit = V3WeightLimit_Unlimited | V3WeightLimit_Limited

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
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
export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 * See [`Pallet::proxy`].
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
    forceProxyType: (ProxyType | undefined)
    call: Call
}

/**
 * See [`Pallet::add_proxy`].
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * See [`Pallet::remove_proxy`].
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * See [`Pallet::remove_proxies`].
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 * See [`Pallet::create_pure`].
 */
export interface ProxyCall_create_pure {
    __kind: 'create_pure'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 * See [`Pallet::kill_pure`].
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
 * See [`Pallet::announce`].
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
    callHash: Uint8Array
}

/**
 * See [`Pallet::remove_announcement`].
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: Uint8Array
}

/**
 * See [`Pallet::reject_announcement`].
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
    callHash: Uint8Array
}

/**
 * See [`Pallet::proxy_announced`].
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType: (ProxyType | undefined)
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 * See [`Pallet::set_validation_data`].
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

/**
 * See [`Pallet::sudo_send_upward_message`].
 */
export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Uint8Array
}

/**
 * See [`Pallet::authorize_upgrade`].
 */
export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: Uint8Array
    checkVersion: boolean
}

/**
 * See [`Pallet::enact_authorized_upgrade`].
 */
export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainInfoCall = never

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
export type InflationCall = InflationCall_force_set_inflation_params | InflationCall_force_inflation_recalculation

/**
 * See [`Pallet::force_set_inflation_params`].
 */
export interface InflationCall_force_set_inflation_params {
    __kind: 'force_set_inflation_params'
    params: InflationParameters
}

/**
 * See [`Pallet::force_inflation_recalculation`].
 */
export interface InflationCall_force_inflation_recalculation {
    __kind: 'force_inflation_recalculation'
    nextEra: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DappStakingCall = DappStakingCall_unbond_and_unstake | DappStakingCall_withdraw_unbonded | DappStakingCall_maintenance_mode | DappStakingCall_register | DappStakingCall_set_dapp_reward_beneficiary | DappStakingCall_set_dapp_owner | DappStakingCall_unregister | DappStakingCall_lock | DappStakingCall_unlock | DappStakingCall_claim_unlocked | DappStakingCall_relock_unlocking | DappStakingCall_stake | DappStakingCall_unstake | DappStakingCall_claim_staker_rewards | DappStakingCall_claim_bonus_reward | DappStakingCall_claim_dapp_reward | DappStakingCall_unstake_from_unregistered | DappStakingCall_cleanup_expired_entries | DappStakingCall_force

/**
 * See [`Pallet::unbond_and_unstake`].
 */
export interface DappStakingCall_unbond_and_unstake {
    __kind: 'unbond_and_unstake'
    contractId: SmartContract
    value: bigint
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface DappStakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
}

/**
 * See [`Pallet::maintenance_mode`].
 */
export interface DappStakingCall_maintenance_mode {
    __kind: 'maintenance_mode'
    enabled: boolean
}

/**
 * See [`Pallet::register`].
 */
export interface DappStakingCall_register {
    __kind: 'register'
    owner: Uint8Array
    smartContract: SmartContract
}

/**
 * See [`Pallet::set_dapp_reward_beneficiary`].
 */
export interface DappStakingCall_set_dapp_reward_beneficiary {
    __kind: 'set_dapp_reward_beneficiary'
    smartContract: SmartContract
    beneficiary: (Uint8Array | undefined)
}

/**
 * See [`Pallet::set_dapp_owner`].
 */
export interface DappStakingCall_set_dapp_owner {
    __kind: 'set_dapp_owner'
    smartContract: SmartContract
    newOwner: Uint8Array
}

/**
 * See [`Pallet::unregister`].
 */
export interface DappStakingCall_unregister {
    __kind: 'unregister'
    smartContract: SmartContract
}

/**
 * See [`Pallet::lock`].
 */
export interface DappStakingCall_lock {
    __kind: 'lock'
    amount: bigint
}

/**
 * See [`Pallet::unlock`].
 */
export interface DappStakingCall_unlock {
    __kind: 'unlock'
    amount: bigint
}

/**
 * See [`Pallet::claim_unlocked`].
 */
export interface DappStakingCall_claim_unlocked {
    __kind: 'claim_unlocked'
}

/**
 * See [`Pallet::relock_unlocking`].
 */
export interface DappStakingCall_relock_unlocking {
    __kind: 'relock_unlocking'
}

/**
 * See [`Pallet::stake`].
 */
export interface DappStakingCall_stake {
    __kind: 'stake'
    smartContract: SmartContract
    amount: bigint
}

/**
 * See [`Pallet::unstake`].
 */
export interface DappStakingCall_unstake {
    __kind: 'unstake'
    smartContract: SmartContract
    amount: bigint
}

/**
 * See [`Pallet::claim_staker_rewards`].
 */
export interface DappStakingCall_claim_staker_rewards {
    __kind: 'claim_staker_rewards'
}

/**
 * See [`Pallet::claim_bonus_reward`].
 */
export interface DappStakingCall_claim_bonus_reward {
    __kind: 'claim_bonus_reward'
    smartContract: SmartContract
}

/**
 * See [`Pallet::claim_dapp_reward`].
 */
export interface DappStakingCall_claim_dapp_reward {
    __kind: 'claim_dapp_reward'
    smartContract: SmartContract
    era: number
}

/**
 * See [`Pallet::unstake_from_unregistered`].
 */
export interface DappStakingCall_unstake_from_unregistered {
    __kind: 'unstake_from_unregistered'
    smartContract: SmartContract
}

/**
 * See [`Pallet::cleanup_expired_entries`].
 */
export interface DappStakingCall_cleanup_expired_entries {
    __kind: 'cleanup_expired_entries'
}

/**
 * See [`Pallet::force`].
 */
export interface DappStakingCall_force {
    __kind: 'force'
    forcingType: ForcingType
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AssetsCall = AssetsCall_create | AssetsCall_force_create | AssetsCall_start_destroy | AssetsCall_destroy_accounts | AssetsCall_destroy_approvals | AssetsCall_finish_destroy | AssetsCall_mint | AssetsCall_burn | AssetsCall_transfer | AssetsCall_transfer_keep_alive | AssetsCall_force_transfer | AssetsCall_freeze | AssetsCall_thaw | AssetsCall_freeze_asset | AssetsCall_thaw_asset | AssetsCall_transfer_ownership | AssetsCall_set_team | AssetsCall_set_metadata | AssetsCall_clear_metadata | AssetsCall_force_set_metadata | AssetsCall_force_clear_metadata | AssetsCall_force_asset_status | AssetsCall_approve_transfer | AssetsCall_cancel_approval | AssetsCall_force_cancel_approval | AssetsCall_transfer_approved | AssetsCall_touch | AssetsCall_refund | AssetsCall_set_min_balance | AssetsCall_touch_other | AssetsCall_refund_other | AssetsCall_block

/**
 * See [`Pallet::create`].
 */
export interface AssetsCall_create {
    __kind: 'create'
    id: bigint
    admin: MultiAddress
    minBalance: bigint
}

/**
 * See [`Pallet::force_create`].
 */
export interface AssetsCall_force_create {
    __kind: 'force_create'
    id: bigint
    owner: MultiAddress
    isSufficient: boolean
    minBalance: bigint
}

/**
 * See [`Pallet::start_destroy`].
 */
export interface AssetsCall_start_destroy {
    __kind: 'start_destroy'
    id: bigint
}

/**
 * See [`Pallet::destroy_accounts`].
 */
export interface AssetsCall_destroy_accounts {
    __kind: 'destroy_accounts'
    id: bigint
}

/**
 * See [`Pallet::destroy_approvals`].
 */
export interface AssetsCall_destroy_approvals {
    __kind: 'destroy_approvals'
    id: bigint
}

/**
 * See [`Pallet::finish_destroy`].
 */
export interface AssetsCall_finish_destroy {
    __kind: 'finish_destroy'
    id: bigint
}

/**
 * See [`Pallet::mint`].
 */
export interface AssetsCall_mint {
    __kind: 'mint'
    id: bigint
    beneficiary: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::burn`].
 */
export interface AssetsCall_burn {
    __kind: 'burn'
    id: bigint
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::transfer`].
 */
export interface AssetsCall_transfer {
    __kind: 'transfer'
    id: bigint
    target: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface AssetsCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    id: bigint
    target: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface AssetsCall_force_transfer {
    __kind: 'force_transfer'
    id: bigint
    source: MultiAddress
    dest: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::freeze`].
 */
export interface AssetsCall_freeze {
    __kind: 'freeze'
    id: bigint
    who: MultiAddress
}

/**
 * See [`Pallet::thaw`].
 */
export interface AssetsCall_thaw {
    __kind: 'thaw'
    id: bigint
    who: MultiAddress
}

/**
 * See [`Pallet::freeze_asset`].
 */
export interface AssetsCall_freeze_asset {
    __kind: 'freeze_asset'
    id: bigint
}

/**
 * See [`Pallet::thaw_asset`].
 */
export interface AssetsCall_thaw_asset {
    __kind: 'thaw_asset'
    id: bigint
}

/**
 * See [`Pallet::transfer_ownership`].
 */
export interface AssetsCall_transfer_ownership {
    __kind: 'transfer_ownership'
    id: bigint
    owner: MultiAddress
}

/**
 * See [`Pallet::set_team`].
 */
export interface AssetsCall_set_team {
    __kind: 'set_team'
    id: bigint
    issuer: MultiAddress
    admin: MultiAddress
    freezer: MultiAddress
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface AssetsCall_set_metadata {
    __kind: 'set_metadata'
    id: bigint
    name: Uint8Array
    symbol: Uint8Array
    decimals: number
}

/**
 * See [`Pallet::clear_metadata`].
 */
export interface AssetsCall_clear_metadata {
    __kind: 'clear_metadata'
    id: bigint
}

/**
 * See [`Pallet::force_set_metadata`].
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
 * See [`Pallet::force_clear_metadata`].
 */
export interface AssetsCall_force_clear_metadata {
    __kind: 'force_clear_metadata'
    id: bigint
}

/**
 * See [`Pallet::force_asset_status`].
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
 * See [`Pallet::approve_transfer`].
 */
export interface AssetsCall_approve_transfer {
    __kind: 'approve_transfer'
    id: bigint
    delegate: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::cancel_approval`].
 */
export interface AssetsCall_cancel_approval {
    __kind: 'cancel_approval'
    id: bigint
    delegate: MultiAddress
}

/**
 * See [`Pallet::force_cancel_approval`].
 */
export interface AssetsCall_force_cancel_approval {
    __kind: 'force_cancel_approval'
    id: bigint
    owner: MultiAddress
    delegate: MultiAddress
}

/**
 * See [`Pallet::transfer_approved`].
 */
export interface AssetsCall_transfer_approved {
    __kind: 'transfer_approved'
    id: bigint
    owner: MultiAddress
    destination: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::touch`].
 */
export interface AssetsCall_touch {
    __kind: 'touch'
    id: bigint
}

/**
 * See [`Pallet::refund`].
 */
export interface AssetsCall_refund {
    __kind: 'refund'
    id: bigint
    allowBurn: boolean
}

/**
 * See [`Pallet::set_min_balance`].
 */
export interface AssetsCall_set_min_balance {
    __kind: 'set_min_balance'
    id: bigint
    minBalance: bigint
}

/**
 * See [`Pallet::touch_other`].
 */
export interface AssetsCall_touch_other {
    __kind: 'touch_other'
    id: bigint
    who: MultiAddress
}

/**
 * See [`Pallet::refund_other`].
 */
export interface AssetsCall_refund_other {
    __kind: 'refund_other'
    id: bigint
    who: MultiAddress
}

/**
 * See [`Pallet::block`].
 */
export interface AssetsCall_block {
    __kind: 'block'
    id: bigint
    who: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CollatorSelectionCall = CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_leave_intent

/**
 * See [`Pallet::set_invulnerables`].
 */
export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: Uint8Array[]
}

/**
 * See [`Pallet::set_desired_candidates`].
 */
export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

/**
 * See [`Pallet::set_candidacy_bond`].
 */
export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

/**
 * See [`Pallet::register_as_candidate`].
 */
export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

/**
 * See [`Pallet::leave_intent`].
 */
export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
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
export type XcmpQueueCall = XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * See [`Pallet::service_overweight`].
 */
export interface XcmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * See [`Pallet::suspend_xcm_execution`].
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * See [`Pallet::resume_xcm_execution`].
 */
export interface XcmpQueueCall_resume_xcm_execution {
    __kind: 'resume_xcm_execution'
}

/**
 * See [`Pallet::update_suspend_threshold`].
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * See [`Pallet::update_drop_threshold`].
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * See [`Pallet::update_resume_threshold`].
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * See [`Pallet::update_threshold_weight`].
 */
export interface XcmpQueueCall_update_threshold_weight {
    __kind: 'update_threshold_weight'
    new: Weight
}

/**
 * See [`Pallet::update_weight_restrict_decay`].
 */
export interface XcmpQueueCall_update_weight_restrict_decay {
    __kind: 'update_weight_restrict_decay'
    new: Weight
}

/**
 * See [`Pallet::update_xcmp_max_individual_weight`].
 */
export interface XcmpQueueCall_update_xcmp_max_individual_weight {
    __kind: 'update_xcmp_max_individual_weight'
    new: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_force_suspension

/**
 * See [`Pallet::send`].
 */
export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * See [`Pallet::teleport_assets`].
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::reserve_transfer_assets`].
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::execute`].
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_256
    maxWeight: Weight
}

/**
 * See [`Pallet::force_xcm_version`].
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    version: number
}

/**
 * See [`Pallet::force_default_xcm_version`].
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion: (number | undefined)
}

/**
 * See [`Pallet::force_subscribe_version_notify`].
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_unsubscribe_version_notify`].
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::limited_reserve_transfer_assets`].
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
 * See [`Pallet::limited_teleport_assets`].
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
 * See [`Pallet::force_suspension`].
 */
export interface PolkadotXcmCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CumulusXcmCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * See [`Pallet::service_overweight`].
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcAssetConfigCall = XcAssetConfigCall_register_asset_location | XcAssetConfigCall_set_asset_units_per_second | XcAssetConfigCall_change_existing_asset_location | XcAssetConfigCall_remove_payment_asset | XcAssetConfigCall_remove_asset

/**
 * See [`Pallet::register_asset_location`].
 */
export interface XcAssetConfigCall_register_asset_location {
    __kind: 'register_asset_location'
    assetLocation: VersionedMultiLocation
    assetId: bigint
}

/**
 * See [`Pallet::set_asset_units_per_second`].
 */
export interface XcAssetConfigCall_set_asset_units_per_second {
    __kind: 'set_asset_units_per_second'
    assetLocation: VersionedMultiLocation
    unitsPerSecond: bigint
}

/**
 * See [`Pallet::change_existing_asset_location`].
 */
export interface XcAssetConfigCall_change_existing_asset_location {
    __kind: 'change_existing_asset_location'
    newAssetLocation: VersionedMultiLocation
    assetId: bigint
}

/**
 * See [`Pallet::remove_payment_asset`].
 */
export interface XcAssetConfigCall_remove_payment_asset {
    __kind: 'remove_payment_asset'
    assetLocation: VersionedMultiLocation
}

/**
 * See [`Pallet::remove_asset`].
 */
export interface XcAssetConfigCall_remove_asset {
    __kind: 'remove_asset'
    assetId: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_with_fee | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_multiassets

/**
 * See [`Pallet::transfer`].
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: bigint
    amount: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiasset`].
 */
export interface XTokensCall_transfer_multiasset {
    __kind: 'transfer_multiasset'
    asset: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_with_fee`].
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: bigint
    amount: bigint
    fee: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiasset_with_fee`].
 */
export interface XTokensCall_transfer_multiasset_with_fee {
    __kind: 'transfer_multiasset_with_fee'
    asset: VersionedMultiAsset
    fee: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multicurrencies`].
 */
export interface XTokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [bigint, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiassets`].
 */
export interface XTokensCall_transfer_multiassets {
    __kind: 'transfer_multiassets'
    assets: VersionedMultiAssets
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type EVMCall = EVMCall_withdraw | EVMCall_call | EVMCall_create | EVMCall_create2

/**
 * See [`Pallet::withdraw`].
 */
export interface EVMCall_withdraw {
    __kind: 'withdraw'
    address: Uint8Array
    value: bigint
}

/**
 * See [`Pallet::call`].
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
 * See [`Pallet::create`].
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
 * See [`Pallet::create2`].
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type EthereumCall = EthereumCall_transact

/**
 * See [`Pallet::transact`].
 */
export interface EthereumCall_transact {
    __kind: 'transact'
    transaction: TransactionV2
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DynamicEvmBaseFeeCall = DynamicEvmBaseFeeCall_set_base_fee_per_gas

/**
 * See [`Pallet::set_base_fee_per_gas`].
 */
export interface DynamicEvmBaseFeeCall_set_base_fee_per_gas {
    __kind: 'set_base_fee_per_gas'
    fee: bigint
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
export type StaticPriceProviderCall = StaticPriceProviderCall_force_set_price

/**
 * See [`Pallet::force_set_price`].
 */
export interface StaticPriceProviderCall_force_set_price {
    __kind: 'force_set_price'
    price: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DappStakingMigrationCall = DappStakingMigrationCall_migrate

/**
 * See [`Pallet::migrate`].
 */
export interface DappStakingMigrationCall_migrate {
    __kind: 'migrate'
    weightLimit: (Weight | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DappsStakingCall = DappsStakingCall_register | DappsStakingCall_unregister | DappsStakingCall_withdraw_from_unregistered | DappsStakingCall_bond_and_stake | DappsStakingCall_unbond_and_unstake | DappsStakingCall_withdraw_unbonded | DappsStakingCall_nomination_transfer | DappsStakingCall_claim_staker | DappsStakingCall_claim_dapp | DappsStakingCall_force_new_era | DappsStakingCall_maintenance_mode | DappsStakingCall_set_reward_destination | DappsStakingCall_set_contract_stake_info | DappsStakingCall_burn_stale_reward | DappsStakingCall_claim_staker_for | DappsStakingCall_set_reward_destination_for | DappsStakingCall_decommission

/**
 * See [`Pallet::register`].
 */
export interface DappsStakingCall_register {
    __kind: 'register'
    developer: Uint8Array
    contractId: SmartContract
}

/**
 * See [`Pallet::unregister`].
 */
export interface DappsStakingCall_unregister {
    __kind: 'unregister'
    contractId: SmartContract
}

/**
 * See [`Pallet::withdraw_from_unregistered`].
 */
export interface DappsStakingCall_withdraw_from_unregistered {
    __kind: 'withdraw_from_unregistered'
    contractId: SmartContract
}

/**
 * See [`Pallet::bond_and_stake`].
 */
export interface DappsStakingCall_bond_and_stake {
    __kind: 'bond_and_stake'
    contractId: SmartContract
    value: bigint
}

/**
 * See [`Pallet::unbond_and_unstake`].
 */
export interface DappsStakingCall_unbond_and_unstake {
    __kind: 'unbond_and_unstake'
    contractId: SmartContract
    value: bigint
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface DappsStakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
}

/**
 * See [`Pallet::nomination_transfer`].
 */
export interface DappsStakingCall_nomination_transfer {
    __kind: 'nomination_transfer'
    originContractId: SmartContract
    value: bigint
    targetContractId: SmartContract
}

/**
 * See [`Pallet::claim_staker`].
 */
export interface DappsStakingCall_claim_staker {
    __kind: 'claim_staker'
    contractId: SmartContract
}

/**
 * See [`Pallet::claim_dapp`].
 */
export interface DappsStakingCall_claim_dapp {
    __kind: 'claim_dapp'
    contractId: SmartContract
    era: number
}

/**
 * See [`Pallet::force_new_era`].
 */
export interface DappsStakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * See [`Pallet::maintenance_mode`].
 */
export interface DappsStakingCall_maintenance_mode {
    __kind: 'maintenance_mode'
    enableMaintenance: boolean
}

/**
 * See [`Pallet::set_reward_destination`].
 */
export interface DappsStakingCall_set_reward_destination {
    __kind: 'set_reward_destination'
    rewardDestination: RewardDestination
}

/**
 * See [`Pallet::set_contract_stake_info`].
 */
export interface DappsStakingCall_set_contract_stake_info {
    __kind: 'set_contract_stake_info'
    contract: SmartContract
    era: number
    contractStakeInfo: ContractStakeInfo
}

/**
 * See [`Pallet::burn_stale_reward`].
 */
export interface DappsStakingCall_burn_stale_reward {
    __kind: 'burn_stale_reward'
    contractId: SmartContract
    era: number
}

/**
 * See [`Pallet::claim_staker_for`].
 */
export interface DappsStakingCall_claim_staker_for {
    __kind: 'claim_staker_for'
    staker: Uint8Array
    contractId: SmartContract
}

/**
 * See [`Pallet::set_reward_destination_for`].
 */
export interface DappsStakingCall_set_reward_destination_for {
    __kind: 'set_reward_destination_for'
    staker: Uint8Array
    rewardDestination: RewardDestination
}

/**
 * See [`Pallet::decommission`].
 */
export interface DappsStakingCall_decommission {
    __kind: 'decommission'
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

export type Type_297 = Type_297_Xcm | Type_297_Response

export interface Type_297_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export interface Type_297_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export type Type_298 = Type_298_Relay | Type_298_SiblingParachain

export interface Type_298_Relay {
    __kind: 'Relay'
}

export interface Type_298_SiblingParachain {
    __kind: 'SiblingParachain'
    value: number
}

export type Type_299 = Type_299_EthereumTransaction

export interface Type_299_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: Uint8Array
}

export type Void = never

export type RuntimeHoldReason = RuntimeHoldReason_Contracts

export interface RuntimeHoldReason_Contracts {
    __kind: 'Contracts'
    value: HoldReason
}

export type Determinism = Determinism_Enforced | Determinism_Relaxed

export interface Determinism_Enforced {
    __kind: 'Enforced'
}

export interface Determinism_Relaxed {
    __kind: 'Relaxed'
}

export interface UsedBandwidth {
    umpMsgCount: number
    umpTotalBytes: number
    hrmpOutgoing: [number, HrmpChannelUpdate][]
}

export interface AsyncBackingParams {
    maxCandidateDepth: number
    allowedAncestryLen: number
}

export interface RelayDispatchQueueRemainingCapacity {
    remainingCount: number
    remainingSize: number
}

export interface V5AbridgedHrmpChannel {
    maxCapacity: number
    maxTotalSize: number
    maxMessageSize: number
    msgCount: number
    totalSize: number
    mqcHead: (Uint8Array | undefined)
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

export type Event = Event_System | Event_Utility | Event_Identity | Event_Multisig | Event_Proxy | Event_ParachainSystem | Event_TransactionPayment | Event_Balances | Event_Vesting | Event_Inflation | Event_DappStaking | Event_Assets | Event_CollatorSelection | Event_Session | Event_XcmpQueue | Event_PolkadotXcm | Event_CumulusXcm | Event_DmpQueue | Event_XcAssetConfig | Event_XTokens | Event_EVM | Event_Ethereum | Event_DynamicEvmBaseFee | Event_Contracts | Event_Sudo | Event_StaticPriceProvider | Event_DappStakingMigration | Event_DappsStaking

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

export interface Event_Inflation {
    __kind: 'Inflation'
    value: InflationEvent
}

export interface Event_DappStaking {
    __kind: 'DappStaking'
    value: DappStakingEvent
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

export interface Event_XTokens {
    __kind: 'XTokens'
    value: XTokensEvent
}

export interface Event_EVM {
    __kind: 'EVM'
    value: EVMEvent
}

export interface Event_Ethereum {
    __kind: 'Ethereum'
    value: EthereumEvent
}

export interface Event_DynamicEvmBaseFee {
    __kind: 'DynamicEvmBaseFee'
    value: DynamicEvmBaseFeeEvent
}

export interface Event_Contracts {
    __kind: 'Contracts'
    value: ContractsEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_StaticPriceProvider {
    __kind: 'StaticPriceProvider'
    value: StaticPriceProviderEvent
}

export interface Event_DappStakingMigration {
    __kind: 'DappStakingMigration'
    value: DappStakingMigrationEvent
}

export interface Event_DappsStaking {
    __kind: 'DappsStaking'
    value: DappsStakingEvent
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
    validationData: V5PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

export interface InflationParameters {
    maxInflationRate: bigint
    treasuryPart: bigint
    collatorsPart: bigint
    dappsPart: bigint
    baseStakersPart: bigint
    adjustableStakersPart: bigint
    bonusPart: bigint
    idealStakingRate: bigint
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

export type ForcingType = ForcingType_Era | ForcingType_Subperiod

export interface ForcingType_Era {
    __kind: 'Era'
}

export interface ForcingType_Subperiod {
    __kind: 'Subperiod'
}

export interface SessionKeys {
    aura: Uint8Array
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

export type Type_256 = Type_256_V2 | Type_256_V3

export interface Type_256_V2 {
    __kind: 'V2'
    value: Type_259[]
}

export interface Type_256_V3 {
    __kind: 'V3'
    value: Type_263[]
}

export type VersionedMultiAsset = VersionedMultiAsset_V2 | VersionedMultiAsset_V3

export interface VersionedMultiAsset_V2 {
    __kind: 'V2'
    value: V2MultiAsset
}

export interface VersionedMultiAsset_V3 {
    __kind: 'V3'
    value: V3MultiAsset
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

export type HoldReason = HoldReason_CodeUploadDepositReserve | HoldReason_StorageDepositReserve

export interface HoldReason_CodeUploadDepositReserve {
    __kind: 'CodeUploadDepositReserve'
}

export interface HoldReason_StorageDepositReserve {
    __kind: 'StorageDepositReserve'
}

export interface HrmpChannelUpdate {
    msgCount: number
    totalBytes: number
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
 * The `Event` enum of this pallet
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
    result: Type_31
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
    result: Type_31
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
 * The `Event` enum of this pallet
 */
export type ProxyEvent = ProxyEvent_ProxyExecuted | ProxyEvent_PureCreated | ProxyEvent_Announced | ProxyEvent_ProxyAdded | ProxyEvent_ProxyRemoved

/**
 * A proxy was executed correctly, with the given.
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    result: Type_31
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed | BalancesEvent_Minted | BalancesEvent_Burned | BalancesEvent_Suspended | BalancesEvent_Restored | BalancesEvent_Upgraded | BalancesEvent_Issued | BalancesEvent_Rescinded | BalancesEvent_Locked | BalancesEvent_Unlocked | BalancesEvent_Frozen | BalancesEvent_Thawed

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
 * Some amount was minted into an account.
 */
export interface BalancesEvent_Minted {
    __kind: 'Minted'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was burned from an account.
 */
export interface BalancesEvent_Burned {
    __kind: 'Burned'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was suspended from an account (it can be restored later).
 */
export interface BalancesEvent_Suspended {
    __kind: 'Suspended'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was restored into an account.
 */
export interface BalancesEvent_Restored {
    __kind: 'Restored'
    who: Uint8Array
    amount: bigint
}

/**
 * An account was upgraded.
 */
export interface BalancesEvent_Upgraded {
    __kind: 'Upgraded'
    who: Uint8Array
}

/**
 * Total issuance was increased by `amount`, creating a credit to be balanced.
 */
export interface BalancesEvent_Issued {
    __kind: 'Issued'
    amount: bigint
}

/**
 * Total issuance was decreased by `amount`, creating a debt to be balanced.
 */
export interface BalancesEvent_Rescinded {
    __kind: 'Rescinded'
    amount: bigint
}

/**
 * Some balance was locked.
 */
export interface BalancesEvent_Locked {
    __kind: 'Locked'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unlocked.
 */
export interface BalancesEvent_Unlocked {
    __kind: 'Unlocked'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was frozen.
 */
export interface BalancesEvent_Frozen {
    __kind: 'Frozen'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was thawed.
 */
export interface BalancesEvent_Thawed {
    __kind: 'Thawed'
    who: Uint8Array
    amount: bigint
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type InflationEvent = InflationEvent_InflationParametersForceChanged | InflationEvent_InflationConfigurationForceChanged | InflationEvent_ForcedInflationRecalculation | InflationEvent_NewInflationConfiguration

/**
 * Inflation parameters have been force changed. This will have effect on the next inflation recalculation.
 */
export interface InflationEvent_InflationParametersForceChanged {
    __kind: 'InflationParametersForceChanged'
}

/**
 * Inflation configuration has been force changed. This will have an immediate effect from this block.
 */
export interface InflationEvent_InflationConfigurationForceChanged {
    __kind: 'InflationConfigurationForceChanged'
    config: InflationConfiguration
}

/**
 * Inflation recalculation has been forced.
 */
export interface InflationEvent_ForcedInflationRecalculation {
    __kind: 'ForcedInflationRecalculation'
    config: InflationConfiguration
}

/**
 * New inflation configuration has been set.
 */
export interface InflationEvent_NewInflationConfiguration {
    __kind: 'NewInflationConfiguration'
    config: InflationConfiguration
}

/**
 * The `Event` enum of this pallet
 */
export type DappStakingEvent = DappStakingEvent_MaintenanceMode | DappStakingEvent_NewEra | DappStakingEvent_NewSubperiod | DappStakingEvent_DAppRegistered | DappStakingEvent_DAppRewardDestinationUpdated | DappStakingEvent_DAppOwnerChanged | DappStakingEvent_DAppUnregistered | DappStakingEvent_Locked | DappStakingEvent_Unlocking | DappStakingEvent_ClaimedUnlocked | DappStakingEvent_Relock | DappStakingEvent_Stake | DappStakingEvent_Unstake | DappStakingEvent_Reward | DappStakingEvent_BonusReward | DappStakingEvent_DAppReward | DappStakingEvent_UnstakeFromUnregistered | DappStakingEvent_ExpiredEntriesRemoved | DappStakingEvent_Force

/**
 * Maintenance mode has been either enabled or disabled.
 */
export interface DappStakingEvent_MaintenanceMode {
    __kind: 'MaintenanceMode'
    enabled: boolean
}

/**
 * New era has started.
 */
export interface DappStakingEvent_NewEra {
    __kind: 'NewEra'
    era: number
}

/**
 * New subperiod has started.
 */
export interface DappStakingEvent_NewSubperiod {
    __kind: 'NewSubperiod'
    subperiod: Subperiod
    number: number
}

/**
 * A smart contract has been registered for dApp staking
 */
export interface DappStakingEvent_DAppRegistered {
    __kind: 'DAppRegistered'
    owner: Uint8Array
    smartContract: SmartContract
    dappId: number
}

/**
 * dApp reward destination has been updated.
 */
export interface DappStakingEvent_DAppRewardDestinationUpdated {
    __kind: 'DAppRewardDestinationUpdated'
    smartContract: SmartContract
    beneficiary: (Uint8Array | undefined)
}

/**
 * dApp owner has been changed.
 */
export interface DappStakingEvent_DAppOwnerChanged {
    __kind: 'DAppOwnerChanged'
    smartContract: SmartContract
    newOwner: Uint8Array
}

/**
 * dApp has been unregistered
 */
export interface DappStakingEvent_DAppUnregistered {
    __kind: 'DAppUnregistered'
    smartContract: SmartContract
    era: number
}

/**
 * Account has locked some amount into dApp staking.
 */
export interface DappStakingEvent_Locked {
    __kind: 'Locked'
    account: Uint8Array
    amount: bigint
}

/**
 * Account has started the unlocking process for some amount.
 */
export interface DappStakingEvent_Unlocking {
    __kind: 'Unlocking'
    account: Uint8Array
    amount: bigint
}

/**
 * Account has claimed unlocked amount, removing the lock from it.
 */
export interface DappStakingEvent_ClaimedUnlocked {
    __kind: 'ClaimedUnlocked'
    account: Uint8Array
    amount: bigint
}

/**
 * Account has relocked all of the unlocking chunks.
 */
export interface DappStakingEvent_Relock {
    __kind: 'Relock'
    account: Uint8Array
    amount: bigint
}

/**
 * Account has staked some amount on a smart contract.
 */
export interface DappStakingEvent_Stake {
    __kind: 'Stake'
    account: Uint8Array
    smartContract: SmartContract
    amount: bigint
}

/**
 * Account has unstaked some amount from a smart contract.
 */
export interface DappStakingEvent_Unstake {
    __kind: 'Unstake'
    account: Uint8Array
    smartContract: SmartContract
    amount: bigint
}

/**
 * Account has claimed some stake rewards.
 */
export interface DappStakingEvent_Reward {
    __kind: 'Reward'
    account: Uint8Array
    era: number
    amount: bigint
}

/**
 * Bonus reward has been paid out to a loyal staker.
 */
export interface DappStakingEvent_BonusReward {
    __kind: 'BonusReward'
    account: Uint8Array
    smartContract: SmartContract
    period: number
    amount: bigint
}

/**
 * dApp reward has been paid out to a beneficiary.
 */
export interface DappStakingEvent_DAppReward {
    __kind: 'DAppReward'
    beneficiary: Uint8Array
    smartContract: SmartContract
    tierId: number
    era: number
    amount: bigint
}

/**
 * Account has unstaked funds from an unregistered smart contract
 */
export interface DappStakingEvent_UnstakeFromUnregistered {
    __kind: 'UnstakeFromUnregistered'
    account: Uint8Array
    smartContract: SmartContract
    amount: bigint
}

/**
 * Some expired stake entries have been removed from storage.
 */
export interface DappStakingEvent_ExpiredEntriesRemoved {
    __kind: 'ExpiredEntriesRemoved'
    account: Uint8Array
    count: number
}

/**
 * Privileged origin has forced a new era and possibly a subperiod to start from next block.
 */
export interface DappStakingEvent_Force {
    __kind: 'Force'
    forcingType: ForcingType
}

/**
 * The `Event` enum of this pallet
 */
export type AssetsEvent = AssetsEvent_Created | AssetsEvent_Issued | AssetsEvent_Transferred | AssetsEvent_Burned | AssetsEvent_TeamChanged | AssetsEvent_OwnerChanged | AssetsEvent_Frozen | AssetsEvent_Thawed | AssetsEvent_AssetFrozen | AssetsEvent_AssetThawed | AssetsEvent_AccountsDestroyed | AssetsEvent_ApprovalsDestroyed | AssetsEvent_DestructionStarted | AssetsEvent_Destroyed | AssetsEvent_ForceCreated | AssetsEvent_MetadataSet | AssetsEvent_MetadataCleared | AssetsEvent_ApprovedTransfer | AssetsEvent_ApprovalCancelled | AssetsEvent_TransferredApproved | AssetsEvent_AssetStatusChanged | AssetsEvent_AssetMinBalanceChanged | AssetsEvent_Touched | AssetsEvent_Blocked

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
 * The min_balance of an asset has been updated by the asset owner.
 */
export interface AssetsEvent_AssetMinBalanceChanged {
    __kind: 'AssetMinBalanceChanged'
    assetId: bigint
    newMinBalance: bigint
}

/**
 * Some account `who` was created with a deposit from `depositor`.
 */
export interface AssetsEvent_Touched {
    __kind: 'Touched'
    assetId: bigint
    who: Uint8Array
    depositor: Uint8Array
}

/**
 * Some account `who` was blocked.
 */
export interface AssetsEvent_Blocked {
    __kind: 'Blocked'
    assetId: bigint
    who: Uint8Array
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type XcmpQueueEvent = XcmpQueueEvent_Success | XcmpQueueEvent_Fail | XcmpQueueEvent_BadVersion | XcmpQueueEvent_BadFormat | XcmpQueueEvent_XcmpMessageSent | XcmpQueueEvent_OverweightEnqueued | XcmpQueueEvent_OverweightServiced

/**
 * Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
    __kind: 'Success'
    messageHash: Uint8Array
    messageId: Uint8Array
    weight: Weight
}

/**
 * Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
    __kind: 'Fail'
    messageHash: Uint8Array
    messageId: Uint8Array
    error: V3Error
    weight: Weight
}

/**
 * Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
    __kind: 'BadVersion'
    messageHash: Uint8Array
}

/**
 * Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
    __kind: 'BadFormat'
    messageHash: Uint8Array
}

/**
 * An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
    __kind: 'XcmpMessageSent'
    messageHash: Uint8Array
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
 * The `Event` enum of this pallet
 */
export type PolkadotXcmEvent = PolkadotXcmEvent_Attempted | PolkadotXcmEvent_Sent | PolkadotXcmEvent_UnexpectedResponse | PolkadotXcmEvent_ResponseReady | PolkadotXcmEvent_Notified | PolkadotXcmEvent_NotifyOverweight | PolkadotXcmEvent_NotifyDispatchError | PolkadotXcmEvent_NotifyDecodeFailed | PolkadotXcmEvent_InvalidResponder | PolkadotXcmEvent_InvalidResponderVersion | PolkadotXcmEvent_ResponseTaken | PolkadotXcmEvent_AssetsTrapped | PolkadotXcmEvent_VersionChangeNotified | PolkadotXcmEvent_SupportedVersionChanged | PolkadotXcmEvent_NotifyTargetSendFail | PolkadotXcmEvent_NotifyTargetMigrationFail | PolkadotXcmEvent_InvalidQuerierVersion | PolkadotXcmEvent_InvalidQuerier | PolkadotXcmEvent_VersionNotifyStarted | PolkadotXcmEvent_VersionNotifyRequested | PolkadotXcmEvent_VersionNotifyUnrequested | PolkadotXcmEvent_FeesPaid | PolkadotXcmEvent_AssetsClaimed

/**
 * Execution of an XCM message was attempted.
 */
export interface PolkadotXcmEvent_Attempted {
    __kind: 'Attempted'
    outcome: V3Outcome
}

/**
 * A XCM message was sent.
 */
export interface PolkadotXcmEvent_Sent {
    __kind: 'Sent'
    origin: V3MultiLocation
    destination: V3MultiLocation
    message: V3Instruction[]
    messageId: Uint8Array
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 */
export interface PolkadotXcmEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 */
export interface PolkadotXcmEvent_ResponseReady {
    __kind: 'ResponseReady'
    queryId: bigint
    response: V3Response
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 */
export interface PolkadotXcmEvent_Notified {
    __kind: 'Notified'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. The registered notification
 * could not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 */
export interface PolkadotXcmEvent_NotifyOverweight {
    __kind: 'NotifyOverweight'
    queryId: bigint
    palletIndex: number
    callIndex: number
    actualWeight: Weight
    maxBudgetedWeight: Weight
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 */
export interface PolkadotXcmEvent_NotifyDispatchError {
    __kind: 'NotifyDispatchError'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 */
export interface PolkadotXcmEvent_NotifyDecodeFailed {
    __kind: 'NotifyDecodeFailed'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface PolkadotXcmEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    origin: V3MultiLocation
    queryId: bigint
    expectedLocation: (V3MultiLocation | undefined)
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 */
export interface PolkadotXcmEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Received query response has been read and removed.
 */
export interface PolkadotXcmEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    queryId: bigint
}

/**
 * Some assets have been placed in an asset trap.
 */
export interface PolkadotXcmEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    hash: Uint8Array
    origin: V3MultiLocation
    assets: VersionedMultiAssets
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * The cost of sending it (borne by the chain) is included.
 */
export interface PolkadotXcmEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    destination: V3MultiLocation
    result: number
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 */
export interface PolkadotXcmEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    location: V3MultiLocation
    version: number
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 */
export interface PolkadotXcmEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    location: V3MultiLocation
    queryId: bigint
    error: V3Error
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 */
export interface PolkadotXcmEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    location: VersionedMultiLocation
    queryId: bigint
}

/**
 * Expected query response has been received but the expected querier location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 */
export interface PolkadotXcmEvent_InvalidQuerierVersion {
    __kind: 'InvalidQuerierVersion'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Expected query response has been received but the querier location of the response does
 * not match the expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface PolkadotXcmEvent_InvalidQuerier {
    __kind: 'InvalidQuerier'
    origin: V3MultiLocation
    queryId: bigint
    expectedQuerier: V3MultiLocation
    maybeActualQuerier: (V3MultiLocation | undefined)
}

/**
 * A remote has requested XCM version change notification from us and we have honored it.
 * A version information message is sent to them and its cost is included.
 */
export interface PolkadotXcmEvent_VersionNotifyStarted {
    __kind: 'VersionNotifyStarted'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * We have requested that a remote chain send us XCM version change notifications.
 */
export interface PolkadotXcmEvent_VersionNotifyRequested {
    __kind: 'VersionNotifyRequested'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * We have requested that a remote chain stops sending us XCM version change
 * notifications.
 */
export interface PolkadotXcmEvent_VersionNotifyUnrequested {
    __kind: 'VersionNotifyUnrequested'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * Fees were paid from a location for an operation (often for using `SendXcm`).
 */
export interface PolkadotXcmEvent_FeesPaid {
    __kind: 'FeesPaid'
    paying: V3MultiLocation
    fees: V3MultiAsset[]
}

/**
 * Some assets have been claimed from an asset trap
 */
export interface PolkadotXcmEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    hash: Uint8Array
    origin: V3MultiLocation
    assets: VersionedMultiAssets
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type DmpQueueEvent = DmpQueueEvent_InvalidFormat | DmpQueueEvent_UnsupportedVersion | DmpQueueEvent_ExecutedDownward | DmpQueueEvent_WeightExhausted | DmpQueueEvent_OverweightEnqueued | DmpQueueEvent_OverweightServiced | DmpQueueEvent_MaxMessagesExhausted

/**
 * Downward message is invalid XCM.
 */
export interface DmpQueueEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    messageHash: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 */
export interface DmpQueueEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    messageHash: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 */
export interface DmpQueueEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    messageHash: Uint8Array
    messageId: Uint8Array
    outcome: V3Outcome
}

/**
 * The weight limit for handling downward messages was reached.
 */
export interface DmpQueueEvent_WeightExhausted {
    __kind: 'WeightExhausted'
    messageHash: Uint8Array
    messageId: Uint8Array
    remainingWeight: Weight
    requiredWeight: Weight
}

/**
 * Downward message is overweight and was placed in the overweight queue.
 */
export interface DmpQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    messageHash: Uint8Array
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
 * The maximum number of downward messages was reached.
 */
export interface DmpQueueEvent_MaxMessagesExhausted {
    __kind: 'MaxMessagesExhausted'
    messageHash: Uint8Array
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type XTokensEvent = XTokensEvent_TransferredMultiAssets

/**
 * Transferred `MultiAsset` with fee.
 */
export interface XTokensEvent_TransferredMultiAssets {
    __kind: 'TransferredMultiAssets'
    sender: Uint8Array
    assets: V3MultiAsset[]
    fee: V3MultiAsset
    dest: V3MultiLocation
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
    extraData: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type DynamicEvmBaseFeeEvent = DynamicEvmBaseFeeEvent_NewBaseFeePerGas

/**
 * New `base fee per gas` value has been force-set.
 */
export interface DynamicEvmBaseFeeEvent_NewBaseFeePerGas {
    __kind: 'NewBaseFeePerGas'
    fee: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type ContractsEvent = ContractsEvent_Instantiated | ContractsEvent_Terminated | ContractsEvent_CodeStored | ContractsEvent_ContractEmitted | ContractsEvent_CodeRemoved | ContractsEvent_ContractCodeUpdated | ContractsEvent_Called | ContractsEvent_DelegateCalled | ContractsEvent_StorageDepositTransferredAndHeld | ContractsEvent_StorageDepositTransferredAndReleased

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
    depositHeld: bigint
    uploader: Uint8Array
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
    depositReleased: bigint
    remover: Uint8Array
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
     * The caller of the `contract`.
     */
    caller: Origin
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
 * Some funds have been transferred and held as storage deposit.
 */
export interface ContractsEvent_StorageDepositTransferredAndHeld {
    __kind: 'StorageDepositTransferredAndHeld'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * Some storage deposit funds have been transferred and released.
 */
export interface ContractsEvent_StorageDepositTransferredAndReleased {
    __kind: 'StorageDepositTransferredAndReleased'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Type_31
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
    sudoResult: Type_31
}

/**
 * The `Event` enum of this pallet
 */
export type StaticPriceProviderEvent = StaticPriceProviderEvent_PriceSet

/**
 * New static native currency price has been set.
 */
export interface StaticPriceProviderEvent_PriceSet {
    __kind: 'PriceSet'
    price: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type DappStakingMigrationEvent = DappStakingMigrationEvent_EntriesMigrated | DappStakingMigrationEvent_EntriesDeleted

/**
 * Number of entries migrated from v2 over to v3
 */
export interface DappStakingMigrationEvent_EntriesMigrated {
    __kind: 'EntriesMigrated'
    value: number
}

/**
 * Number of entries deleted from v2
 */
export interface DappStakingMigrationEvent_EntriesDeleted {
    __kind: 'EntriesDeleted'
    value: number
}

/**
 * The `Event` enum of this pallet
 */
export type DappsStakingEvent = DappsStakingEvent_BondAndStake | DappsStakingEvent_UnbondAndUnstake | DappsStakingEvent_WithdrawFromUnregistered | DappsStakingEvent_Withdrawn | DappsStakingEvent_NewContract | DappsStakingEvent_ContractRemoved | DappsStakingEvent_NewDappStakingEra | DappsStakingEvent_Reward | DappsStakingEvent_MaintenanceMode | DappsStakingEvent_RewardDestination | DappsStakingEvent_NominationTransfer | DappsStakingEvent_StaleRewardBurned | DappsStakingEvent_Decommission

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
 * Pallet is being decommissioned.
 */
export interface DappsStakingEvent_Decommission {
    __kind: 'Decommission'
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

export interface V5PersistedValidationData {
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

export type Type_259 = Type_259_WithdrawAsset | Type_259_ReserveAssetDeposited | Type_259_ReceiveTeleportedAsset | Type_259_QueryResponse | Type_259_TransferAsset | Type_259_TransferReserveAsset | Type_259_Transact | Type_259_HrmpNewChannelOpenRequest | Type_259_HrmpChannelAccepted | Type_259_HrmpChannelClosing | Type_259_ClearOrigin | Type_259_DescendOrigin | Type_259_ReportError | Type_259_DepositAsset | Type_259_DepositReserveAsset | Type_259_ExchangeAsset | Type_259_InitiateReserveWithdraw | Type_259_InitiateTeleport | Type_259_QueryHolding | Type_259_BuyExecution | Type_259_RefundSurplus | Type_259_SetErrorHandler | Type_259_SetAppendix | Type_259_ClearError | Type_259_ClaimAsset | Type_259_Trap | Type_259_SubscribeVersion | Type_259_UnsubscribeVersion

export interface Type_259_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface Type_259_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_259_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_259_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_259_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_259_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_259_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_259_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_259_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_259_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_259_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_259_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_259_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_259_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_259_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_259_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_259_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_259_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_259_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_259_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_259_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_259_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_259[]
}

export interface Type_259_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_259[]
}

export interface Type_259_ClearError {
    __kind: 'ClearError'
}

export interface Type_259_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_259_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_259_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_259_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_263 = Type_263_WithdrawAsset | Type_263_ReserveAssetDeposited | Type_263_ReceiveTeleportedAsset | Type_263_QueryResponse | Type_263_TransferAsset | Type_263_TransferReserveAsset | Type_263_Transact | Type_263_HrmpNewChannelOpenRequest | Type_263_HrmpChannelAccepted | Type_263_HrmpChannelClosing | Type_263_ClearOrigin | Type_263_DescendOrigin | Type_263_ReportError | Type_263_DepositAsset | Type_263_DepositReserveAsset | Type_263_ExchangeAsset | Type_263_InitiateReserveWithdraw | Type_263_InitiateTeleport | Type_263_ReportHolding | Type_263_BuyExecution | Type_263_RefundSurplus | Type_263_SetErrorHandler | Type_263_SetAppendix | Type_263_ClearError | Type_263_ClaimAsset | Type_263_Trap | Type_263_SubscribeVersion | Type_263_UnsubscribeVersion | Type_263_BurnAsset | Type_263_ExpectAsset | Type_263_ExpectOrigin | Type_263_ExpectError | Type_263_ExpectTransactStatus | Type_263_QueryPallet | Type_263_ExpectPallet | Type_263_ReportTransactStatus | Type_263_ClearTransactStatus | Type_263_UniversalOrigin | Type_263_ExportMessage | Type_263_LockAsset | Type_263_UnlockAsset | Type_263_NoteUnlockable | Type_263_RequestUnlock | Type_263_SetFeesMode | Type_263_SetTopic | Type_263_ClearTopic | Type_263_AliasOrigin | Type_263_UnpaidExecution

export interface Type_263_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_263_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_263_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_263_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface Type_263_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_263_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_263_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface Type_263_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_263_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_263_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_263_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_263_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_263_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_263_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_263_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_263_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_263_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_263_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_263_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_263_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_263_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_263_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_263[]
}

export interface Type_263_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_263[]
}

export interface Type_263_ClearError {
    __kind: 'ClearError'
}

export interface Type_263_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_263_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_263_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_263_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_263_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_263_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_263_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface Type_263_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface Type_263_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_263_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface Type_263_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface Type_263_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_263_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_263_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_263_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_263_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_263_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_263_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_263_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_263_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_263_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface Type_263_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_263_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_263_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
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

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
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

export type Type_31 = Type_31_Ok | Type_31_Err

export interface Type_31_Ok {
    __kind: 'Ok'
}

export interface Type_31_Err {
    __kind: 'Err'
    value: DispatchError
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export interface InflationConfiguration {
    recalculationEra: number
    issuanceSafetyCap: bigint
    collatorRewardPerBlock: bigint
    treasuryRewardPerBlock: bigint
    dappRewardPoolPerEra: bigint
    baseStakerRewardPoolPerEra: bigint
    adjustableStakerRewardPoolPerEra: bigint
    bonusRewardPoolPerPeriod: bigint
    idealStakingRate: bigint
}

export type Subperiod = Subperiod_Voting | Subperiod_BuildAndEarn

export interface Subperiod_Voting {
    __kind: 'Voting'
}

export interface Subperiod_BuildAndEarn {
    __kind: 'BuildAndEarn'
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

export type Origin = Origin_Root | Origin_Signed

export interface Origin_Root {
    __kind: 'Root'
}

export interface Origin_Signed {
    __kind: 'Signed'
    value: Uint8Array
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

export type ExitError = ExitError_StackUnderflow | ExitError_StackOverflow | ExitError_InvalidJump | ExitError_InvalidRange | ExitError_DesignatedInvalid | ExitError_CallTooDeep | ExitError_CreateCollision | ExitError_CreateContractLimit | ExitError_InvalidCode | ExitError_OutOfOffset | ExitError_OutOfGas | ExitError_OutOfFund | ExitError_PCUnderflow | ExitError_CreateEmpty | ExitError_Other | ExitError_MaxNonce

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

export interface ExitError_MaxNonce {
    __kind: 'MaxNonce'
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

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}
