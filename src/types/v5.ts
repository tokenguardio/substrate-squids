import type {Result, Option} from './support'

export type PalletsOrigin = PalletsOrigin_System | PalletsOrigin_Timestamp | PalletsOrigin_RandomnessCollectiveFlip | PalletsOrigin_Balances | PalletsOrigin_Accounts | PalletsOrigin_Currencies | PalletsOrigin_Tokens | PalletsOrigin_Vesting | PalletsOrigin_Utility | PalletsOrigin_Multisig | PalletsOrigin_Recovery | PalletsOrigin_Proxy | PalletsOrigin_Scheduler | PalletsOrigin_Indices | PalletsOrigin_GraduallyUpdate | PalletsOrigin_Authorship | PalletsOrigin_Babe | PalletsOrigin_Grandpa | PalletsOrigin_Staking | PalletsOrigin_Session | PalletsOrigin_Historical | PalletsOrigin_Authority | PalletsOrigin_ElectionsPhragmen | PalletsOrigin_Contracts | PalletsOrigin_EVM | PalletsOrigin_Sudo | PalletsOrigin_TransactionPayment

export interface PalletsOrigin_System {
    __kind: 'System'
    value: SystemOrigin
}

export interface PalletsOrigin_Timestamp {
    __kind: 'Timestamp'
}

export interface PalletsOrigin_RandomnessCollectiveFlip {
    __kind: 'RandomnessCollectiveFlip'
}

export interface PalletsOrigin_Balances {
    __kind: 'Balances'
}

export interface PalletsOrigin_Accounts {
    __kind: 'Accounts'
}

export interface PalletsOrigin_Currencies {
    __kind: 'Currencies'
}

export interface PalletsOrigin_Tokens {
    __kind: 'Tokens'
}

export interface PalletsOrigin_Vesting {
    __kind: 'Vesting'
}

export interface PalletsOrigin_Utility {
    __kind: 'Utility'
}

export interface PalletsOrigin_Multisig {
    __kind: 'Multisig'
}

export interface PalletsOrigin_Recovery {
    __kind: 'Recovery'
}

export interface PalletsOrigin_Proxy {
    __kind: 'Proxy'
}

export interface PalletsOrigin_Scheduler {
    __kind: 'Scheduler'
}

export interface PalletsOrigin_Indices {
    __kind: 'Indices'
}

export interface PalletsOrigin_GraduallyUpdate {
    __kind: 'GraduallyUpdate'
}

export interface PalletsOrigin_Authorship {
    __kind: 'Authorship'
}

export interface PalletsOrigin_Babe {
    __kind: 'Babe'
}

export interface PalletsOrigin_Grandpa {
    __kind: 'Grandpa'
}

export interface PalletsOrigin_Staking {
    __kind: 'Staking'
}

export interface PalletsOrigin_Session {
    __kind: 'Session'
}

export interface PalletsOrigin_Historical {
    __kind: 'Historical'
}

export interface PalletsOrigin_Authority {
    __kind: 'Authority'
    value: DelayedOrigin
}

export interface PalletsOrigin_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
}

export interface PalletsOrigin_Contracts {
    __kind: 'Contracts'
}

export interface PalletsOrigin_EVM {
    __kind: 'EVM'
}

export interface PalletsOrigin_Sudo {
    __kind: 'Sudo'
}

export interface PalletsOrigin_TransactionPayment {
    __kind: 'TransactionPayment'
}

export type DispatchResult = DispatchResult_Ok | DispatchResult_Err

export interface DispatchResult_Ok {
    __kind: 'Ok'
}

export interface DispatchResult_Err {
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

export type CurrencyIdOf = CurrencyIdOf_Token | CurrencyIdOf_DEXShare | CurrencyIdOf_ERC20

export interface CurrencyIdOf_Token {
    __kind: 'Token'
    value: TokenSymbol
}

export interface CurrencyIdOf_DEXShare {
    __kind: 'DEXShare'
    value: [TokenSymbol, TokenSymbol]
}

export interface CurrencyIdOf_ERC20 {
    __kind: 'ERC20'
    value: Uint8Array
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

export interface EvmLog {
    address: Uint8Array
    topics: Uint8Array[]
    data: Uint8Array
}

export interface FullIdentification {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

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

export interface DispatchInfo {
    weight: bigint
    class: DispatchClass
    paysFee: Pays
}

export type CurrencyId = CurrencyId_Token | CurrencyId_DEXShare | CurrencyId_ERC20

export interface CurrencyId_Token {
    __kind: 'Token'
    value: TokenSymbol
}

export interface CurrencyId_DEXShare {
    __kind: 'DEXShare'
    value: [TokenSymbol, TokenSymbol]
}

export interface CurrencyId_ERC20 {
    __kind: 'ERC20'
    value: Uint8Array
}

export type SystemOrigin = SystemOrigin_Root | SystemOrigin_Signed | SystemOrigin_None

export interface SystemOrigin_Root {
    __kind: 'Root'
}

export interface SystemOrigin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface SystemOrigin_None {
    __kind: 'None'
}

export interface DelayedOrigin {
    delay: number
    origin: PalletsOrigin
}

export type TokenSymbol = TokenSymbol_REEF | TokenSymbol_RUSD

export interface TokenSymbol_REEF {
    __kind: 'REEF'
}

export interface TokenSymbol_RUSD {
    __kind: 'RUSD'
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

export interface IndividualExposure {
    who: Uint8Array
    value: bigint
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
