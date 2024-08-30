import {sts, Result, Option, Bytes, BitSequence} from './support'

export const TransactionV2: sts.Type<TransactionV2> = sts.closedEnum(() => {
    return  {
        EIP1559: EIP1559Transaction,
        EIP2930: EIP2930Transaction,
        Legacy: LegacyTransaction,
    }
})

export const LegacyTransaction: sts.Type<LegacyTransaction> = sts.struct(() => {
    return  {
        nonce: sts.bigint(),
        gasPrice: sts.bigint(),
        gasLimit: sts.bigint(),
        action: TransactionAction,
        value: sts.bigint(),
        input: sts.bytes(),
        signature: TransactionSignature,
    }
})

export const TransactionSignature: sts.Type<TransactionSignature> = sts.struct(() => {
    return  {
        v: TransactionRecoveryId,
        r: H256,
        s: H256,
    }
})

export const TransactionRecoveryId = sts.bigint()

export interface TransactionSignature {
    v: TransactionRecoveryId
    r: H256
    s: H256
}

export type H256 = Bytes

export type TransactionRecoveryId = bigint

export const TransactionAction: sts.Type<TransactionAction> = sts.closedEnum(() => {
    return  {
        Call: H160,
        Create: sts.unit(),
    }
})

export type TransactionAction = TransactionAction_Call | TransactionAction_Create

export interface TransactionAction_Call {
    __kind: 'Call'
    value: H160
}

export interface TransactionAction_Create {
    __kind: 'Create'
}

export type H160 = Bytes

export interface LegacyTransaction {
    nonce: bigint
    gasPrice: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Bytes
    signature: TransactionSignature
}

export const EIP2930Transaction: sts.Type<EIP2930Transaction> = sts.struct(() => {
    return  {
        chainId: sts.bigint(),
        nonce: sts.bigint(),
        gasPrice: sts.bigint(),
        gasLimit: sts.bigint(),
        action: TransactionAction,
        value: sts.bigint(),
        input: sts.bytes(),
        accessList: sts.array(() => AccessListItem),
        oddYParity: sts.boolean(),
        r: H256,
        s: H256,
    }
})

export const AccessListItem: sts.Type<AccessListItem> = sts.struct(() => {
    return  {
        address: H160,
        storageKeys: sts.array(() => H256),
    }
})

export interface AccessListItem {
    address: H160
    storageKeys: H256[]
}

export interface EIP2930Transaction {
    chainId: bigint
    nonce: bigint
    gasPrice: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Bytes
    accessList: AccessListItem[]
    oddYParity: boolean
    r: H256
    s: H256
}

export const EIP1559Transaction: sts.Type<EIP1559Transaction> = sts.struct(() => {
    return  {
        chainId: sts.bigint(),
        nonce: sts.bigint(),
        maxPriorityFeePerGas: sts.bigint(),
        maxFeePerGas: sts.bigint(),
        gasLimit: sts.bigint(),
        action: TransactionAction,
        value: sts.bigint(),
        input: sts.bytes(),
        accessList: sts.array(() => AccessListItem),
        oddYParity: sts.boolean(),
        r: H256,
        s: H256,
    }
})

export interface EIP1559Transaction {
    chainId: bigint
    nonce: bigint
    maxPriorityFeePerGas: bigint
    maxFeePerGas: bigint
    gasLimit: bigint
    action: TransactionAction
    value: bigint
    input: Bytes
    accessList: AccessListItem[]
    oddYParity: boolean
    r: H256
    s: H256
}

export type TransactionV2 = TransactionV2_EIP1559 | TransactionV2_EIP2930 | TransactionV2_Legacy

export interface TransactionV2_EIP1559 {
    __kind: 'EIP1559'
    value: EIP1559Transaction
}

export interface TransactionV2_EIP2930 {
    __kind: 'EIP2930'
    value: EIP2930Transaction
}

export interface TransactionV2_Legacy {
    __kind: 'Legacy'
    value: LegacyTransaction
}

export const DispatchTime: sts.Type<DispatchTime> = sts.closedEnum(() => {
    return  {
        After: sts.number(),
        At: sts.number(),
    }
})

export type DispatchTime = DispatchTime_After | DispatchTime_At

export interface DispatchTime_After {
    __kind: 'After'
    value: number
}

export interface DispatchTime_At {
    __kind: 'At'
    value: number
}

export const Bounded: sts.Type<Bounded> = sts.closedEnum(() => {
    return  {
        Inline: sts.bytes(),
        Legacy: sts.enumStruct({
            hash: H256,
        }),
        Lookup: sts.enumStruct({
            hash: H256,
            len: sts.number(),
        }),
    }
})

export type Bounded = Bounded_Inline | Bounded_Legacy | Bounded_Lookup

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Bytes
}

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: H256
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: H256
    len: number
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

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        CancelProxy: sts.unit(),
        Governance: sts.unit(),
        IdentityJudgement: sts.unit(),
        NonTransfer: sts.unit(),
    }
})

export type ProxyType = ProxyType_Any | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_IdentityJudgement | ProxyType_NonTransfer

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.number(),
        Raw: sts.bytes(),
    }
})

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
    value: number
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

export type AccountId32 = Bytes

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_113,
        CumulusXcm: Type_132,
        Ethereum: Type_133,
        Origins: Origin,
        PolkadotXcm: Type_116,
        TechnicalCommittee: Type_114,
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

export const Type_114: sts.Type<Type_114> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export type Type_114 = Type_114_Member | Type_114_Members | Type_114__Phantom

export interface Type_114_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_114_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_114__Phantom {
    __kind: '_Phantom'
}

export const Type_116: sts.Type<Type_116> = sts.closedEnum(() => {
    return  {
        Response: V4Location,
        Xcm: V4Location,
    }
})

export const V4Location: sts.Type<V4Location> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V4Junctions,
    }
})

export const V4Junctions: sts.Type<V4Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: sts.array(() => V4Junction),
        X2: sts.array(() => V4Junction),
        X3: sts.array(() => V4Junction),
        X4: sts.array(() => V4Junction),
        X5: sts.array(() => V4Junction),
        X6: sts.array(() => V4Junction),
        X7: sts.array(() => V4Junction),
        X8: sts.array(() => V4Junction),
    }
})

export const V4Junction: sts.Type<V4Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V4NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V4NetworkId,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V3BodyId,
            part: V3BodyPart,
        }),
    }
})

export const V3BodyPart: sts.Type<V3BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export type V3BodyPart = V3BodyPart_AtLeastProportion | V3BodyPart_Fraction | V3BodyPart_Members | V3BodyPart_MoreThanProportion | V3BodyPart_Voice

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export const V3BodyId: sts.Type<V3BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Moniker: sts.bytes(),
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export type V3BodyId = V3BodyId_Administration | V3BodyId_Defense | V3BodyId_Executive | V3BodyId_Index | V3BodyId_Judicial | V3BodyId_Legislative | V3BodyId_Moniker | V3BodyId_Technical | V3BodyId_Treasury | V3BodyId_Unit

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Bytes
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export const V4NetworkId: sts.Type<V4NetworkId> = sts.closedEnum(() => {
    return  {
        BitcoinCash: sts.unit(),
        BitcoinCore: sts.unit(),
        ByFork: sts.enumStruct({
            blockNumber: sts.bigint(),
            blockHash: sts.bytes(),
        }),
        ByGenesis: sts.bytes(),
        Ethereum: sts.enumStruct({
            chainId: sts.bigint(),
        }),
        Kusama: sts.unit(),
        Polkadot: sts.unit(),
        PolkadotBulletin: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export type V4NetworkId = V4NetworkId_BitcoinCash | V4NetworkId_BitcoinCore | V4NetworkId_ByFork | V4NetworkId_ByGenesis | V4NetworkId_Ethereum | V4NetworkId_Kusama | V4NetworkId_Polkadot | V4NetworkId_PolkadotBulletin | V4NetworkId_Rococo | V4NetworkId_Westend | V4NetworkId_Wococo

export interface V4NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V4NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V4NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V4NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V4NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V4NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V4NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V4NetworkId_PolkadotBulletin {
    __kind: 'PolkadotBulletin'
}

export interface V4NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V4NetworkId_Westend {
    __kind: 'Westend'
}

export interface V4NetworkId_Wococo {
    __kind: 'Wococo'
}

export type V4Junction = V4Junction_AccountId32 | V4Junction_AccountIndex64 | V4Junction_AccountKey20 | V4Junction_GeneralIndex | V4Junction_GeneralKey | V4Junction_GlobalConsensus | V4Junction_OnlyChild | V4Junction_PalletInstance | V4Junction_Parachain | V4Junction_Plurality

export interface V4Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: (V4NetworkId | undefined)
    id: Bytes
}

export interface V4Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: (V4NetworkId | undefined)
    index: bigint
}

export interface V4Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: (V4NetworkId | undefined)
    key: Bytes
}

export interface V4Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V4Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V4Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V4NetworkId
}

export interface V4Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V4Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V4Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V4Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export type V4Junctions = V4Junctions_Here | V4Junctions_X1 | V4Junctions_X2 | V4Junctions_X3 | V4Junctions_X4 | V4Junctions_X5 | V4Junctions_X6 | V4Junctions_X7 | V4Junctions_X8

export interface V4Junctions_Here {
    __kind: 'Here'
}

export interface V4Junctions_X1 {
    __kind: 'X1'
    value: V4Junction[]
}

export interface V4Junctions_X2 {
    __kind: 'X2'
    value: V4Junction[]
}

export interface V4Junctions_X3 {
    __kind: 'X3'
    value: V4Junction[]
}

export interface V4Junctions_X4 {
    __kind: 'X4'
    value: V4Junction[]
}

export interface V4Junctions_X5 {
    __kind: 'X5'
    value: V4Junction[]
}

export interface V4Junctions_X6 {
    __kind: 'X6'
    value: V4Junction[]
}

export interface V4Junctions_X7 {
    __kind: 'X7'
    value: V4Junction[]
}

export interface V4Junctions_X8 {
    __kind: 'X8'
    value: V4Junction[]
}

export interface V4Location {
    parents: number
    interior: V4Junctions
}

export type Type_116 = Type_116_Response | Type_116_Xcm

export interface Type_116_Response {
    __kind: 'Response'
    value: V4Location
}

export interface Type_116_Xcm {
    __kind: 'Xcm'
    value: V4Location
}

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        CoreAdmin: sts.unit(),
        Fellows: sts.unit(),
        Fellowship1Dan: sts.unit(),
        Fellowship2Dan: sts.unit(),
        Fellowship3Dan: sts.unit(),
        Fellowship4Dan: sts.unit(),
        Fellowship5Dan: sts.unit(),
        Fellowship6Dan: sts.unit(),
        Fellowship7Dan: sts.unit(),
        Fellowship8Dan: sts.unit(),
        Fellowship9Dan: sts.unit(),
        FellowshipAdmin: sts.unit(),
        FellowshipExperts: sts.unit(),
        FellowshipInitiates: sts.unit(),
        FellowshipMasters: sts.unit(),
        LiquidStaking: sts.unit(),
        ReferendumCanceller: sts.unit(),
        ReferendumKiller: sts.unit(),
        SALPAdmin: sts.unit(),
        TechAdmin: sts.unit(),
        TreasurySpend: sts.unit(),
        WhitelistedCaller: sts.unit(),
    }
})

export type Origin = Origin_CoreAdmin | Origin_Fellows | Origin_Fellowship1Dan | Origin_Fellowship2Dan | Origin_Fellowship3Dan | Origin_Fellowship4Dan | Origin_Fellowship5Dan | Origin_Fellowship6Dan | Origin_Fellowship7Dan | Origin_Fellowship8Dan | Origin_Fellowship9Dan | Origin_FellowshipAdmin | Origin_FellowshipExperts | Origin_FellowshipInitiates | Origin_FellowshipMasters | Origin_LiquidStaking | Origin_ReferendumCanceller | Origin_ReferendumKiller | Origin_SALPAdmin | Origin_TechAdmin | Origin_TreasurySpend | Origin_WhitelistedCaller

export interface Origin_CoreAdmin {
    __kind: 'CoreAdmin'
}

export interface Origin_Fellows {
    __kind: 'Fellows'
}

export interface Origin_Fellowship1Dan {
    __kind: 'Fellowship1Dan'
}

export interface Origin_Fellowship2Dan {
    __kind: 'Fellowship2Dan'
}

export interface Origin_Fellowship3Dan {
    __kind: 'Fellowship3Dan'
}

export interface Origin_Fellowship4Dan {
    __kind: 'Fellowship4Dan'
}

export interface Origin_Fellowship5Dan {
    __kind: 'Fellowship5Dan'
}

export interface Origin_Fellowship6Dan {
    __kind: 'Fellowship6Dan'
}

export interface Origin_Fellowship7Dan {
    __kind: 'Fellowship7Dan'
}

export interface Origin_Fellowship8Dan {
    __kind: 'Fellowship8Dan'
}

export interface Origin_Fellowship9Dan {
    __kind: 'Fellowship9Dan'
}

export interface Origin_FellowshipAdmin {
    __kind: 'FellowshipAdmin'
}

export interface Origin_FellowshipExperts {
    __kind: 'FellowshipExperts'
}

export interface Origin_FellowshipInitiates {
    __kind: 'FellowshipInitiates'
}

export interface Origin_FellowshipMasters {
    __kind: 'FellowshipMasters'
}

export interface Origin_LiquidStaking {
    __kind: 'LiquidStaking'
}

export interface Origin_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Origin_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Origin_SALPAdmin {
    __kind: 'SALPAdmin'
}

export interface Origin_TechAdmin {
    __kind: 'TechAdmin'
}

export interface Origin_TreasurySpend {
    __kind: 'TreasurySpend'
}

export interface Origin_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export const Type_133: sts.Type<Type_133> = sts.closedEnum(() => {
    return  {
        EthereumTransaction: H160,
    }
})

export type Type_133 = Type_133_EthereumTransaction

export interface Type_133_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: H160
}

export const Type_132: sts.Type<Type_132> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export type Type_132 = Type_132_Relay | Type_132_SiblingParachain

export interface Type_132_Relay {
    __kind: 'Relay'
}

export interface Type_132_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export const Type_113: sts.Type<Type_113> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export type Type_113 = Type_113_Member | Type_113_Members | Type_113__Phantom

export interface Type_113_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_113_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_113__Phantom {
    __kind: '_Phantom'
}

export type OriginCaller = OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_Ethereum | OriginCaller_Origins | OriginCaller_PolkadotXcm | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_113
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_132
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_133
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Origin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_116
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_114
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        AssetRegistry: AssetRegistryCall,
        Balances: BalancesCall,
        BuyBack: BuyBackCall,
        ChannelCommission: ChannelCommissionCall,
        CloudsConvert: CloudsConvertCall,
        CollatorSelection: CollatorSelectionCall,
        ConvictionVoting: ConvictionVotingCall,
        Council: CouncilCall,
        CouncilMembership: CouncilMembershipCall,
        CrossInOut: CrossInOutCall,
        CumulusXcm: CumulusXcmCall,
        Currencies: CurrenciesCall,
        Democracy: DemocracyCall,
        DynamicFee: DynamicFeeCall,
        EVM: EVMCall,
        EVMAccounts: EVMAccountsCall,
        Ethereum: EthereumCall,
        Farming: FarmingCall,
        FeeShare: FeeShareCall,
        FellowshipCollective: FellowshipCollectiveCall,
        FellowshipReferenda: FellowshipReferendaCall,
        FlexibleFee: FlexibleFeeCall,
        Identity: IdentityCall,
        Indices: IndicesCall,
        LendMarket: LendMarketCall,
        LeverageStaking: LeverageStakingCall,
        MerkleDistributor: MerkleDistributorCall,
        MessageQueue: MessageQueueCall,
        Multisig: MultisigCall,
        Oracle: OracleCall,
        OracleMembership: OracleMembershipCall,
        OrmlXcm: OrmlXcmCall,
        ParachainInfo: ParachainInfoCall,
        ParachainSystem: ParachainSystemCall,
        PhragmenElection: PhragmenElectionCall,
        PolkadotXcm: PolkadotXcmCall,
        Preimage: PreimageCall,
        Prices: PricesCall,
        Proxy: ProxyCall,
        Referenda: ReferendaCall,
        Salp: SalpCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Slp: SlpCall,
        Slpx: SlpxCall,
        StablePool: StablePoolCall,
        System: SystemCall,
        SystemMaker: SystemMakerCall,
        SystemStaking: SystemStakingCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        TokenConversion: TokenConversionCall,
        Tokens: TokensCall,
        Treasury: TreasuryCall,
        TxPause: TxPauseCall,
        Utility: UtilityCall,
        VeMinting: VeMintingCall,
        Vesting: VestingCall,
        VtokenMinting: VtokenMintingCall,
        VtokenVoting: VtokenVotingCall,
        Whitelist: WhitelistCall,
        XTokens: XTokensCall,
        XcmInterface: XcmInterfaceCall,
        XcmpQueue: XcmpQueueCall,
        ZenlinkProtocol: ZenlinkProtocolCall,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ZenlinkProtocolCall: sts.Type<ZenlinkProtocolCall> = sts.closedEnum(() => {
    return  {
        add_liquidity: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            amount0Desired: sts.bigint(),
            amount1Desired: sts.bigint(),
            amount0Min: sts.bigint(),
            amount1Min: sts.bigint(),
            deadline: sts.number(),
        }),
        bootstrap_charge_reward: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            chargeRewards: sts.array(() => sts.tuple(() => [AssetId, sts.bigint()])),
        }),
        bootstrap_claim: sts.enumStruct({
            recipient: MultiAddress,
            asset0: AssetId,
            asset1: AssetId,
            deadline: sts.number(),
        }),
        bootstrap_contribute: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            amount0Contribute: sts.bigint(),
            amount1Contribute: sts.bigint(),
            deadline: sts.number(),
        }),
        bootstrap_create: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            targetSupply0: sts.bigint(),
            targetSupply1: sts.bigint(),
            capacitySupply0: sts.bigint(),
            capacitySupply1: sts.bigint(),
            end: sts.number(),
            rewards: sts.array(() => AssetId),
            limits: sts.array(() => sts.tuple(() => [AssetId, sts.bigint()])),
        }),
        bootstrap_end: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
        }),
        bootstrap_refund: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
        }),
        bootstrap_update: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            targetSupply0: sts.bigint(),
            targetSupply1: sts.bigint(),
            capacitySupply0: sts.bigint(),
            capacitySupply1: sts.bigint(),
            end: sts.number(),
            rewards: sts.array(() => AssetId),
            limits: sts.array(() => sts.tuple(() => [AssetId, sts.bigint()])),
        }),
        bootstrap_withdraw_reward: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            recipient: MultiAddress,
        }),
        create_pair: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            feeRecipient: MultiAddress,
        }),
        remove_liquidity: sts.enumStruct({
            asset0: AssetId,
            asset1: AssetId,
            liquidity: sts.bigint(),
            amount0Min: sts.bigint(),
            amount1Min: sts.bigint(),
            recipient: MultiAddress,
            deadline: sts.number(),
        }),
        set_fee_point: sts.enumStruct({
            feePoint: sts.number(),
        }),
        set_fee_receiver: sts.enumStruct({
            sendTo: sts.option(() => MultiAddress),
        }),
        set_new_fee_receiver: sts.enumStruct({
            asset: AssetId,
            sendTo: MultiAddress,
        }),
        swap_assets_for_exact_assets: sts.enumStruct({
            amountOut: sts.bigint(),
            amountInMax: sts.bigint(),
            path: sts.array(() => AssetId),
            recipient: MultiAddress,
            deadline: sts.number(),
        }),
        swap_exact_assets_for_assets: sts.enumStruct({
            amountIn: sts.bigint(),
            amountOutMin: sts.bigint(),
            path: sts.array(() => AssetId),
            recipient: MultiAddress,
            deadline: sts.number(),
        }),
        transfer: sts.enumStruct({
            assetId: AssetId,
            recipient: MultiAddress,
            amount: sts.bigint(),
        }),
    }
})

export const AssetId: sts.Type<AssetId> = sts.struct(() => {
    return  {
        chainId: sts.number(),
        assetType: sts.number(),
        assetIndex: sts.bigint(),
    }
})

export interface AssetId {
    chainId: number
    assetType: number
    assetIndex: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ZenlinkProtocolCall = ZenlinkProtocolCall_add_liquidity | ZenlinkProtocolCall_bootstrap_charge_reward | ZenlinkProtocolCall_bootstrap_claim | ZenlinkProtocolCall_bootstrap_contribute | ZenlinkProtocolCall_bootstrap_create | ZenlinkProtocolCall_bootstrap_end | ZenlinkProtocolCall_bootstrap_refund | ZenlinkProtocolCall_bootstrap_update | ZenlinkProtocolCall_bootstrap_withdraw_reward | ZenlinkProtocolCall_create_pair | ZenlinkProtocolCall_remove_liquidity | ZenlinkProtocolCall_set_fee_point | ZenlinkProtocolCall_set_fee_receiver | ZenlinkProtocolCall_set_new_fee_receiver | ZenlinkProtocolCall_swap_assets_for_exact_assets | ZenlinkProtocolCall_swap_exact_assets_for_assets | ZenlinkProtocolCall_transfer

/**
 * Provide liquidity to a pair.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up pair
 * - `asset_1`: Asset which make up pair
 * - `amount_0_desired`: Maximum amount of asset_0 added to the pair
 * - `amount_1_desired`: Maximum amount of asset_1 added to the pair
 * - `amount_0_min`: Minimum amount of asset_0 added to the pair
 * - `amount_1_min`: Minimum amount of asset_1 added to the pair
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_add_liquidity {
    __kind: 'add_liquidity'
    asset0: AssetId
    asset1: AssetId
    amount0Desired: bigint
    amount1Desired: bigint
    amount0Min: bigint
    amount1Min: bigint
    deadline: number
}

export interface ZenlinkProtocolCall_bootstrap_charge_reward {
    __kind: 'bootstrap_charge_reward'
    asset0: AssetId
    asset1: AssetId
    chargeRewards: [AssetId, bigint][]
}

/**
 * Claim lp asset from a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_bootstrap_claim {
    __kind: 'bootstrap_claim'
    recipient: MultiAddress
    asset0: AssetId
    asset1: AssetId
    deadline: number
}

/**
 * Contribute some asset to a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `amount_0_contribute`: The amount of asset_0 contribute to this bootstrap pair
 * - `amount_1_contribute`: The amount of asset_1 contribute to this bootstrap pair
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_bootstrap_contribute {
    __kind: 'bootstrap_contribute'
    asset0: AssetId
    asset1: AssetId
    amount0Contribute: bigint
    amount1Contribute: bigint
    deadline: number
}

/**
 * Create bootstrap pair
 * 
 * The order of asset don't affect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `target_supply_0`: Target amount of asset_0 total contribute
 * - `target_supply_0`: Target amount of asset_1 total contribute
 * - `capacity_supply_0`: The max amount of asset_0 total contribute
 * - `capacity_supply_1`: The max amount of asset_1 total contribute
 * - `end`: The earliest ending block.
 */
export interface ZenlinkProtocolCall_bootstrap_create {
    __kind: 'bootstrap_create'
    asset0: AssetId
    asset1: AssetId
    targetSupply0: bigint
    targetSupply1: bigint
    capacitySupply0: bigint
    capacitySupply1: bigint
    end: number
    rewards: AssetId[]
    limits: [AssetId, bigint][]
}

/**
 * End a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 */
export interface ZenlinkProtocolCall_bootstrap_end {
    __kind: 'bootstrap_end'
    asset0: AssetId
    asset1: AssetId
}

/**
 * Contributor refund from disable bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 */
export interface ZenlinkProtocolCall_bootstrap_refund {
    __kind: 'bootstrap_refund'
    asset0: AssetId
    asset1: AssetId
}

/**
 * update a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `min_contribution_0`: The new min amount of asset_0 contribute
 * - `min_contribution_0`: The new min amount of asset_1 contribute
 * - `target_supply_0`: The new target amount of asset_0 total contribute
 * - `target_supply_0`: The new target amount of asset_1 total contribute
 * - `capacity_supply_0`: The new max amount of asset_0 total contribute
 * - `capacity_supply_1`: The new max amount of asset_1 total contribute
 * - `end`: The earliest ending block.
 */
export interface ZenlinkProtocolCall_bootstrap_update {
    __kind: 'bootstrap_update'
    asset0: AssetId
    asset1: AssetId
    targetSupply0: bigint
    targetSupply1: bigint
    capacitySupply0: bigint
    capacitySupply1: bigint
    end: number
    rewards: AssetId[]
    limits: [AssetId, bigint][]
}

export interface ZenlinkProtocolCall_bootstrap_withdraw_reward {
    __kind: 'bootstrap_withdraw_reward'
    asset0: AssetId
    asset1: AssetId
    recipient: MultiAddress
}

/**
 * Create pair by two assets.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up Pair
 * - `asset_1`: Asset which make up Pair
 */
export interface ZenlinkProtocolCall_create_pair {
    __kind: 'create_pair'
    asset0: AssetId
    asset1: AssetId
    feeRecipient: MultiAddress
}

/**
 * Extract liquidity.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up pair
 * - `asset_1`: Asset which make up pair
 * - `amount_asset_0_min`: Minimum amount of asset_0 to exact
 * - `amount_asset_1_min`: Minimum amount of asset_1 to exact
 * - `recipient`: Account that accepts withdrawal of assets
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_remove_liquidity {
    __kind: 'remove_liquidity'
    asset0: AssetId
    asset1: AssetId
    liquidity: bigint
    amount0Min: bigint
    amount1Min: bigint
    recipient: MultiAddress
    deadline: number
}

/**
 * Set the protocol fee point.
 * 
 * # Arguments
 * 
 * - `fee_point`:
 * 0 means that all exchange fees belong to the liquidity provider.
 * 30 means that all exchange fees belong to the fee receiver.
 */
export interface ZenlinkProtocolCall_set_fee_point {
    __kind: 'set_fee_point'
    feePoint: number
}

/**
 * Set the new receiver of the protocol fee.
 * 
 * # Arguments
 * 
 * - `send_to`:
 * (1) Some(receiver): it turn on the protocol fee and the new receiver account.
 * (2) None: it turn off the protocol fee.
 */
export interface ZenlinkProtocolCall_set_fee_receiver {
    __kind: 'set_fee_receiver'
    sendTo?: (MultiAddress | undefined)
}

export interface ZenlinkProtocolCall_set_new_fee_receiver {
    __kind: 'set_new_fee_receiver'
    asset: AssetId
    sendTo: MultiAddress
}

/**
 * Buy amount of foreign by path.
 * 
 * # Arguments
 * 
 * - `amount_out`: Amount of the foreign will be bought
 * - `amount_in_max`: Maximum amount of sold foreign
 * - `path`: path can convert to pairs.
 * - `recipient`: Account that receive the target foreign
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_swap_assets_for_exact_assets {
    __kind: 'swap_assets_for_exact_assets'
    amountOut: bigint
    amountInMax: bigint
    path: AssetId[]
    recipient: MultiAddress
    deadline: number
}

/**
 * Sell amount of foreign by path.
 * 
 * # Arguments
 * 
 * - `amount_in`: Amount of the foreign will be sold
 * - `amount_out_min`: Minimum amount of target foreign
 * - `path`: path can convert to pairs.
 * - `recipient`: Account that receive the target foreign
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_swap_exact_assets_for_assets {
    __kind: 'swap_exact_assets_for_assets'
    amountIn: bigint
    amountOutMin: bigint
    path: AssetId[]
    recipient: MultiAddress
    deadline: number
}

/**
 * Move some assets from one holder to another.
 * 
 * # Arguments
 * 
 * - `asset_id`: The foreign id.
 * - `target`: The receiver of the foreign.
 * - `amount`: The amount of the foreign to transfer.
 */
export interface ZenlinkProtocolCall_transfer {
    __kind: 'transfer'
    assetId: AssetId
    recipient: MultiAddress
    amount: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XcmpQueueCall: sts.Type<XcmpQueueCall> = sts.closedEnum(() => {
    return  {
        resume_xcm_execution: sts.unit(),
        suspend_xcm_execution: sts.unit(),
        update_drop_threshold: sts.enumStruct({
            new: sts.number(),
        }),
        update_resume_threshold: sts.enumStruct({
            new: sts.number(),
        }),
        update_suspend_threshold: sts.enumStruct({
            new: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmpQueueCall = XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_suspend_threshold

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
 * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * Overwrites the number of pages which must be in the queue after which we drop any
 * further messages from the channel.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.drop_threshold`
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * Overwrites the number of pages which the queue must be reduced to before it signals
 * that message sending may recommence after it has been suspended.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.resume_threshold`
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * Overwrites the number of pages which must be in the queue for the other side to be
 * told to suspend their sending.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.suspend_value`
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XcmInterfaceCall: sts.Type<XcmInterfaceCall> = sts.closedEnum(() => {
    return  {
        transfer_ethereum_assets: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
            to: H160,
        }),
        transfer_statemine_assets: sts.enumStruct({
            amount: sts.bigint(),
            assetId: sts.number(),
            dest: sts.option(() => AccountId32),
        }),
        update_xcm_dest_weight_and_fee: sts.enumStruct({
            updates: sts.array(() => sts.tuple(() => [CurrencyId, XcmOperationType, Weight, sts.bigint()])),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmInterfaceCall = XcmInterfaceCall_transfer_ethereum_assets | XcmInterfaceCall_transfer_statemine_assets | XcmInterfaceCall_update_xcm_dest_weight_and_fee

export interface XcmInterfaceCall_transfer_ethereum_assets {
    __kind: 'transfer_ethereum_assets'
    currencyId: CurrencyId
    amount: bigint
    to: H160
}

export interface XcmInterfaceCall_transfer_statemine_assets {
    __kind: 'transfer_statemine_assets'
    amount: bigint
    assetId: number
    dest?: (AccountId32 | undefined)
}

/**
 * Sets the xcm_dest_weight and fee for XCM operation of XcmInterface.
 * 
 * Parameters:
 * - `updates`: vec of tuple: (XcmOperationType, WeightChange, FeeChange).
 */
export interface XcmInterfaceCall_update_xcm_dest_weight_and_fee {
    __kind: 'update_xcm_dest_weight_and_fee'
    updates: [CurrencyId, XcmOperationType, Weight, bigint][]
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type XcmOperationType = XcmOperationType_Any | XcmOperationType_Bond | XcmOperationType_BondExtra | XcmOperationType_CancelLeave | XcmOperationType_Chill | XcmOperationType_ConvertAsset | XcmOperationType_Delegate | XcmOperationType_EthereumTransfer | XcmOperationType_ExecuteLeave | XcmOperationType_Liquidize | XcmOperationType_Payout | XcmOperationType_Rebond | XcmOperationType_RemoveVote | XcmOperationType_StatemineTransfer | XcmOperationType_SupplementaryFee | XcmOperationType_TeleportAssets | XcmOperationType_TransferBack | XcmOperationType_TransferTo | XcmOperationType_UmpContributeTransact | XcmOperationType_Unbond | XcmOperationType_Undelegate | XcmOperationType_Vote | XcmOperationType_WithdrawUnbonded | XcmOperationType_XtokensTransferBack

export interface XcmOperationType_Any {
    __kind: 'Any'
}

export interface XcmOperationType_Bond {
    __kind: 'Bond'
}

export interface XcmOperationType_BondExtra {
    __kind: 'BondExtra'
}

export interface XcmOperationType_CancelLeave {
    __kind: 'CancelLeave'
}

export interface XcmOperationType_Chill {
    __kind: 'Chill'
}

export interface XcmOperationType_ConvertAsset {
    __kind: 'ConvertAsset'
}

export interface XcmOperationType_Delegate {
    __kind: 'Delegate'
}

export interface XcmOperationType_EthereumTransfer {
    __kind: 'EthereumTransfer'
}

export interface XcmOperationType_ExecuteLeave {
    __kind: 'ExecuteLeave'
}

export interface XcmOperationType_Liquidize {
    __kind: 'Liquidize'
}

export interface XcmOperationType_Payout {
    __kind: 'Payout'
}

export interface XcmOperationType_Rebond {
    __kind: 'Rebond'
}

export interface XcmOperationType_RemoveVote {
    __kind: 'RemoveVote'
}

export interface XcmOperationType_StatemineTransfer {
    __kind: 'StatemineTransfer'
}

export interface XcmOperationType_SupplementaryFee {
    __kind: 'SupplementaryFee'
}

export interface XcmOperationType_TeleportAssets {
    __kind: 'TeleportAssets'
}

export interface XcmOperationType_TransferBack {
    __kind: 'TransferBack'
}

export interface XcmOperationType_TransferTo {
    __kind: 'TransferTo'
}

export interface XcmOperationType_UmpContributeTransact {
    __kind: 'UmpContributeTransact'
}

export interface XcmOperationType_Unbond {
    __kind: 'Unbond'
}

export interface XcmOperationType_Undelegate {
    __kind: 'Undelegate'
}

export interface XcmOperationType_Vote {
    __kind: 'Vote'
}

export interface XcmOperationType_WithdrawUnbonded {
    __kind: 'WithdrawUnbonded'
}

export interface XcmOperationType_XtokensTransferBack {
    __kind: 'XtokensTransferBack'
}

export type CurrencyId = CurrencyId_BLP | CurrencyId_ForeignAsset | CurrencyId_LPToken | CurrencyId_Lend | CurrencyId_Native | CurrencyId_Stable | CurrencyId_StableLpToken | CurrencyId_Token | CurrencyId_Token2 | CurrencyId_VSBond | CurrencyId_VSBond2 | CurrencyId_VSToken | CurrencyId_VSToken2 | CurrencyId_VToken | CurrencyId_VToken2

export interface CurrencyId_BLP {
    __kind: 'BLP'
    value: number
}

export interface CurrencyId_ForeignAsset {
    __kind: 'ForeignAsset'
    value: number
}

export interface CurrencyId_LPToken {
    __kind: 'LPToken'
    value: [TokenSymbol, number, TokenSymbol, number]
}

export interface CurrencyId_Lend {
    __kind: 'Lend'
    value: number
}

export interface CurrencyId_Native {
    __kind: 'Native'
    value: TokenSymbol
}

export interface CurrencyId_Stable {
    __kind: 'Stable'
    value: TokenSymbol
}

export interface CurrencyId_StableLpToken {
    __kind: 'StableLpToken'
    value: number
}

export interface CurrencyId_Token {
    __kind: 'Token'
    value: TokenSymbol
}

export interface CurrencyId_Token2 {
    __kind: 'Token2'
    value: number
}

export interface CurrencyId_VSBond {
    __kind: 'VSBond'
    value: [TokenSymbol, number, number, number]
}

export interface CurrencyId_VSBond2 {
    __kind: 'VSBond2'
    value: [number, number, number, number]
}

export interface CurrencyId_VSToken {
    __kind: 'VSToken'
    value: TokenSymbol
}

export interface CurrencyId_VSToken2 {
    __kind: 'VSToken2'
    value: number
}

export interface CurrencyId_VToken {
    __kind: 'VToken'
    value: TokenSymbol
}

export interface CurrencyId_VToken2 {
    __kind: 'VToken2'
    value: number
}

export type TokenSymbol = TokenSymbol_ASG | TokenSymbol_BNC | TokenSymbol_DOT | TokenSymbol_ETH | TokenSymbol_KAR | TokenSymbol_KSM | TokenSymbol_KUSD | TokenSymbol_MOVR | TokenSymbol_PHA | TokenSymbol_RMRK | TokenSymbol_ZLK

export interface TokenSymbol_ASG {
    __kind: 'ASG'
}

export interface TokenSymbol_BNC {
    __kind: 'BNC'
}

export interface TokenSymbol_DOT {
    __kind: 'DOT'
}

export interface TokenSymbol_ETH {
    __kind: 'ETH'
}

export interface TokenSymbol_KAR {
    __kind: 'KAR'
}

export interface TokenSymbol_KSM {
    __kind: 'KSM'
}

export interface TokenSymbol_KUSD {
    __kind: 'KUSD'
}

export interface TokenSymbol_MOVR {
    __kind: 'MOVR'
}

export interface TokenSymbol_PHA {
    __kind: 'PHA'
}

export interface TokenSymbol_RMRK {
    __kind: 'RMRK'
}

export interface TokenSymbol_ZLK {
    __kind: 'ZLK'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XTokensCall: sts.Type<XTokensCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset: sts.enumStruct({
            asset: VersionedAsset,
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset_with_fee: sts.enumStruct({
            asset: VersionedAsset,
            fee: VersionedAsset,
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiassets: sts.enumStruct({
            assets: VersionedAssets,
            feeItem: sts.number(),
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multicurrencies: sts.enumStruct({
            currencies: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_with_fee: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: VersionedLocation,
            destWeightLimit: V3WeightLimit,
        }),
    }
})

export const VersionedAsset: sts.Type<VersionedAsset> = sts.closedEnum(() => {
    return  {
        V2: V2MultiAsset,
        V3: V3MultiAsset,
        V4: V4Asset,
    }
})

export const V4Asset: sts.Type<V4Asset> = sts.struct(() => {
    return  {
        id: V4AssetId,
        fun: V4Fungibility,
    }
})

export const V4Fungibility: sts.Type<V4Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V4AssetInstance,
    }
})

export const V4AssetInstance: sts.Type<V4AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export type V4AssetInstance = V4AssetInstance_Array16 | V4AssetInstance_Array32 | V4AssetInstance_Array4 | V4AssetInstance_Array8 | V4AssetInstance_Index | V4AssetInstance_Undefined

export interface V4AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V4AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V4AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V4AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V4AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V4AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V4Fungibility = V4Fungibility_Fungible | V4Fungibility_NonFungible

export interface V4Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V4Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V4AssetInstance
}

export const V4AssetId: sts.Type<V4AssetId> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V4Junctions,
    }
})

export interface V4AssetId {
    parents: number
    interior: V4Junctions
}

export interface V4Asset {
    id: V4AssetId
    fun: V4Fungibility
}

export const V3MultiAsset: sts.Type<V3MultiAsset> = sts.struct(() => {
    return  {
        id: V3AssetId,
        fun: V3Fungibility,
    }
})

export const V3Fungibility: sts.Type<V3Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V3AssetInstance,
    }
})

export const V3AssetInstance: sts.Type<V3AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export type V3AssetInstance = V3AssetInstance_Array16 | V3AssetInstance_Array32 | V3AssetInstance_Array4 | V3AssetInstance_Array8 | V3AssetInstance_Index | V3AssetInstance_Undefined

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
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

export const V3AssetId: sts.Type<V3AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V3MultiLocation,
    }
})

export const V3MultiLocation: sts.Type<V3MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V3Junctions,
    }
})

export const V3Junctions: sts.Type<V3Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V3Junction,
        X2: sts.tuple(() => [V3Junction, V3Junction]),
        X3: sts.tuple(() => [V3Junction, V3Junction, V3Junction]),
        X4: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction]),
        X5: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X6: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X7: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X8: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
    }
})

export const V3Junction: sts.Type<V3Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V3NetworkId,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V3BodyId,
            part: V3BodyPart,
        }),
    }
})

export const V3NetworkId: sts.Type<V3NetworkId> = sts.closedEnum(() => {
    return  {
        BitcoinCash: sts.unit(),
        BitcoinCore: sts.unit(),
        ByFork: sts.enumStruct({
            blockNumber: sts.bigint(),
            blockHash: sts.bytes(),
        }),
        ByGenesis: sts.bytes(),
        Ethereum: sts.enumStruct({
            chainId: sts.bigint(),
        }),
        Kusama: sts.unit(),
        Polkadot: sts.unit(),
        PolkadotBulletin: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export type V3NetworkId = V3NetworkId_BitcoinCash | V3NetworkId_BitcoinCore | V3NetworkId_ByFork | V3NetworkId_ByGenesis | V3NetworkId_Ethereum | V3NetworkId_Kusama | V3NetworkId_Polkadot | V3NetworkId_PolkadotBulletin | V3NetworkId_Rococo | V3NetworkId_Westend | V3NetworkId_Wococo

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_PolkadotBulletin {
    __kind: 'PolkadotBulletin'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export type V3Junction = V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_GlobalConsensus | V3Junction_OnlyChild | V3Junction_PalletInstance | V3Junction_Parachain | V3Junction_Plurality

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: (V3NetworkId | undefined)
    id: Bytes
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: (V3NetworkId | undefined)
    key: Bytes
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
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

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

export type V3AssetId = V3AssetId_Abstract | V3AssetId_Concrete

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
}

export const V2MultiAsset: sts.Type<V2MultiAsset> = sts.struct(() => {
    return  {
        id: V2AssetId,
        fun: V2Fungibility,
    }
})

export const V2Fungibility: sts.Type<V2Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V2AssetInstance,
    }
})

export const V2AssetInstance: sts.Type<V2AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Blob: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export type V2AssetInstance = V2AssetInstance_Array16 | V2AssetInstance_Array32 | V2AssetInstance_Array4 | V2AssetInstance_Array8 | V2AssetInstance_Blob | V2AssetInstance_Index | V2AssetInstance_Undefined

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Bytes
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
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

export const V2AssetId: sts.Type<V2AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V2MultiLocation,
    }
})

export const V2MultiLocation: sts.Type<V2MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V2Junctions,
    }
})

export const V2Junctions: sts.Type<V2Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V2Junction,
        X2: sts.tuple(() => [V2Junction, V2Junction]),
        X3: sts.tuple(() => [V2Junction, V2Junction, V2Junction]),
        X4: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction]),
        X5: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X6: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X7: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X8: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
    }
})

export const V2Junction: sts.Type<V2Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: V2NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V2NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V2NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: WeakBoundedVec,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V2BodyId,
            part: V2BodyPart,
        }),
    }
})

export const V2BodyPart: sts.Type<V2BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export type V2BodyPart = V2BodyPart_AtLeastProportion | V2BodyPart_Fraction | V2BodyPart_Members | V2BodyPart_MoreThanProportion | V2BodyPart_Voice

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export const V2BodyId: sts.Type<V2BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Named: WeakBoundedVec,
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export type V2BodyId = V2BodyId_Administration | V2BodyId_Defense | V2BodyId_Executive | V2BodyId_Index | V2BodyId_Judicial | V2BodyId_Legislative | V2BodyId_Named | V2BodyId_Technical | V2BodyId_Treasury | V2BodyId_Unit

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export type WeakBoundedVec = Bytes

export const WeakBoundedVec = sts.bytes()

export const V2NetworkId: sts.Type<V2NetworkId> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Kusama: sts.unit(),
        Named: WeakBoundedVec,
        Polkadot: sts.unit(),
    }
})

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Kusama | V2NetworkId_Named | V2NetworkId_Polkadot

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export type V2Junction = V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_PalletInstance | V2Junction_Parachain | V2Junction_Plurality

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Bytes
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Bytes
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: WeakBoundedVec
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
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

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export type V2AssetId = V2AssetId_Abstract | V2AssetId_Concrete

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
}

export type VersionedAsset = VersionedAsset_V2 | VersionedAsset_V3 | VersionedAsset_V4

export interface VersionedAsset_V2 {
    __kind: 'V2'
    value: V2MultiAsset
}

export interface VersionedAsset_V3 {
    __kind: 'V3'
    value: V3MultiAsset
}

export interface VersionedAsset_V4 {
    __kind: 'V4'
    value: V4Asset
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multiassets | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_with_fee

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
    currencyId: CurrencyId
    amount: bigint
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer `Asset`.
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
    asset: VersionedAsset
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer `Asset` specifying the fee and amount as separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the Asset to be spent to pay for execution in
 * destination chain. Both fee and amount will be subtracted form the
 * callers balance For now we only accept fee and asset having the same
 * `Location` id.
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
    asset: VersionedAsset
    fee: VersionedAsset
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Transfer several `Asset` specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the Assets that we want to use for
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
    assets: VersionedAssets
    feeItem: number
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
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
    currencies: [CurrencyId, bigint][]
    feeItem: number
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
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
    currencyId: CurrencyId
    amount: bigint
    fee: bigint
    dest: VersionedLocation
    destWeightLimit: V3WeightLimit
}

export type VersionedAssets = VersionedAssets_V2 | VersionedAssets_V3 | VersionedAssets_V4

export interface VersionedAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export interface VersionedAssets_V4 {
    __kind: 'V4'
    value: V4Asset[]
}

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export type VersionedLocation = VersionedLocation_V2 | VersionedLocation_V3 | VersionedLocation_V4

export interface VersionedLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export interface VersionedLocation_V4 {
    __kind: 'V4'
    value: V4Location
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const WhitelistCall: sts.Type<WhitelistCall> = sts.closedEnum(() => {
    return  {
        dispatch_whitelisted_call: sts.enumStruct({
            callHash: H256,
            callEncodedLen: sts.number(),
            callWeightWitness: Weight,
        }),
        dispatch_whitelisted_call_with_preimage: sts.enumStruct({
            call: Call,
        }),
        remove_whitelisted_call: sts.enumStruct({
            callHash: H256,
        }),
        whitelist_call: sts.enumStruct({
            callHash: H256,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type WhitelistCall = WhitelistCall_dispatch_whitelisted_call | WhitelistCall_dispatch_whitelisted_call_with_preimage | WhitelistCall_remove_whitelisted_call | WhitelistCall_whitelist_call

export interface WhitelistCall_dispatch_whitelisted_call {
    __kind: 'dispatch_whitelisted_call'
    callHash: H256
    callEncodedLen: number
    callWeightWitness: Weight
}

export interface WhitelistCall_dispatch_whitelisted_call_with_preimage {
    __kind: 'dispatch_whitelisted_call_with_preimage'
    call: Call
}

export interface WhitelistCall_remove_whitelisted_call {
    __kind: 'remove_whitelisted_call'
    callHash: H256
}

export interface WhitelistCall_whitelist_call {
    __kind: 'whitelist_call'
    callHash: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VtokenVotingCall: sts.Type<VtokenVotingCall> = sts.closedEnum(() => {
    return  {
        add_delegator: sts.enumStruct({
            vtoken: CurrencyId,
            derivativeIndex: sts.number(),
        }),
        kill_referendum: sts.enumStruct({
            vtoken: CurrencyId,
            pollIndex: sts.number(),
        }),
        notify_remove_delegator_vote: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
        }),
        notify_vote: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
        }),
        remove_delegator_vote: sts.enumStruct({
            vtoken: CurrencyId,
            class: sts.number(),
            pollIndex: sts.number(),
            derivativeIndex: sts.number(),
        }),
        set_referendum_status: sts.enumStruct({
            vtoken: CurrencyId,
            pollIndex: sts.number(),
            info: ReferendumInfo,
        }),
        set_undeciding_timeout: sts.enumStruct({
            vtoken: CurrencyId,
            undecidingTimeout: sts.number(),
        }),
        set_vote_cap_ratio: sts.enumStruct({
            vtoken: CurrencyId,
            voteCapRatio: Perbill,
        }),
        set_vote_locking_period: sts.enumStruct({
            vtoken: CurrencyId,
            lockingPeriod: sts.number(),
        }),
        unlock: sts.enumStruct({
            vtoken: CurrencyId,
            pollIndex: sts.number(),
        }),
        vote: sts.enumStruct({
            vtoken: CurrencyId,
            pollIndex: sts.number(),
            vtokenVote: Type_432,
        }),
    }
})

export const Type_432: sts.Type<Type_432> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        SplitAbstain: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
            abstain: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: sts.number(),
            balance: sts.bigint(),
        }),
    }
})

export type Type_432 = Type_432_Split | Type_432_SplitAbstain | Type_432_Standard

export interface Type_432_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface Type_432_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export interface Type_432_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export const Perbill = sts.number()

export const ReferendumInfo: sts.Type<ReferendumInfo> = sts.closedEnum(() => {
    return  {
        Completed: sts.number(),
        Killed: sts.number(),
        Ongoing: ReferendumStatus,
    }
})

export const ReferendumStatus: sts.Type<ReferendumStatus> = sts.struct(() => {
    return  {
        submitted: sts.option(() => sts.number()),
        tally: Tally,
    }
})

export const Tally: sts.Type<Tally> = sts.struct(() => {
    return  {
        ayes: sts.bigint(),
        nays: sts.bigint(),
        support: sts.bigint(),
    }
})

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
}

export interface ReferendumStatus {
    submitted?: (number | undefined)
    tally: Tally
}

export type ReferendumInfo = ReferendumInfo_Completed | ReferendumInfo_Killed | ReferendumInfo_Ongoing

export interface ReferendumInfo_Completed {
    __kind: 'Completed'
    value: number
}

export interface ReferendumInfo_Killed {
    __kind: 'Killed'
    value: number
}

export interface ReferendumInfo_Ongoing {
    __kind: 'Ongoing'
    value: ReferendumStatus
}

export const V4Response: sts.Type<V4Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V4Asset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V4PalletInfo),
        Version: sts.number(),
    }
})

export const V4PalletInfo: sts.Type<V4PalletInfo> = sts.struct(() => {
    return  {
        index: sts.number(),
        name: sts.bytes(),
        moduleName: sts.bytes(),
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export interface V4PalletInfo {
    index: number
    name: Bytes
    moduleName: Bytes
    major: number
    minor: number
    patch: number
}

export const V3Error: sts.Type<V3Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        ExceedsStackLimit: sts.unit(),
        ExpectationFalse: sts.unit(),
        ExportError: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        FeesNotMet: sts.unit(),
        HoldingWouldOverflow: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        LocationFull: sts.unit(),
        LocationNotInvertible: sts.unit(),
        LockError: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        NameMismatch: sts.unit(),
        NoDeal: sts.unit(),
        NoPermission: sts.unit(),
        NotDepositable: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        PalletNotFound: sts.unit(),
        ReanchorFailed: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        Unanchored: sts.unit(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        VersionIncompatible: sts.unit(),
        WeightLimitReached: Weight,
        WeightNotComputable: sts.unit(),
    }
})

export type V3Error = V3Error_AssetNotFound | V3Error_BadOrigin | V3Error_Barrier | V3Error_DestinationUnsupported | V3Error_ExceedsMaxMessageSize | V3Error_ExceedsStackLimit | V3Error_ExpectationFalse | V3Error_ExportError | V3Error_FailedToDecode | V3Error_FailedToTransactAsset | V3Error_FeesNotMet | V3Error_HoldingWouldOverflow | V3Error_InvalidLocation | V3Error_LocationCannotHold | V3Error_LocationFull | V3Error_LocationNotInvertible | V3Error_LockError | V3Error_MaxWeightInvalid | V3Error_NameMismatch | V3Error_NoDeal | V3Error_NoPermission | V3Error_NotDepositable | V3Error_NotHoldingFees | V3Error_NotWithdrawable | V3Error_Overflow | V3Error_PalletNotFound | V3Error_ReanchorFailed | V3Error_TooExpensive | V3Error_Transport | V3Error_Trap | V3Error_Unanchored | V3Error_UnhandledXcmVersion | V3Error_Unimplemented | V3Error_UnknownClaim | V3Error_Unroutable | V3Error_UntrustedReserveLocation | V3Error_UntrustedTeleportLocation | V3Error_VersionIncompatible | V3Error_WeightLimitReached | V3Error_WeightNotComputable

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export const V3MaybeErrorCode: sts.Type<V3MaybeErrorCode> = sts.closedEnum(() => {
    return  {
        Error: sts.bytes(),
        Success: sts.unit(),
        TruncatedError: sts.bytes(),
    }
})

export type V3MaybeErrorCode = V3MaybeErrorCode_Error | V3MaybeErrorCode_Success | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Bytes
}

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Bytes
}

export type V4Response = V4Response_Assets | V4Response_DispatchResult | V4Response_ExecutionResult | V4Response_Null | V4Response_PalletsInfo | V4Response_Version

export interface V4Response_Assets {
    __kind: 'Assets'
    value: V4Asset[]
}

export interface V4Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V4Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V3Error] | undefined)
}

export interface V4Response_Null {
    __kind: 'Null'
}

export interface V4Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V4PalletInfo[]
}

export interface V4Response_Version {
    __kind: 'Version'
    value: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VtokenVotingCall = VtokenVotingCall_add_delegator | VtokenVotingCall_kill_referendum | VtokenVotingCall_notify_remove_delegator_vote | VtokenVotingCall_notify_vote | VtokenVotingCall_remove_delegator_vote | VtokenVotingCall_set_referendum_status | VtokenVotingCall_set_undeciding_timeout | VtokenVotingCall_set_vote_cap_ratio | VtokenVotingCall_set_vote_locking_period | VtokenVotingCall_unlock | VtokenVotingCall_vote

export interface VtokenVotingCall_add_delegator {
    __kind: 'add_delegator'
    vtoken: CurrencyId
    derivativeIndex: number
}

export interface VtokenVotingCall_kill_referendum {
    __kind: 'kill_referendum'
    vtoken: CurrencyId
    pollIndex: number
}

export interface VtokenVotingCall_notify_remove_delegator_vote {
    __kind: 'notify_remove_delegator_vote'
    queryId: bigint
    response: V4Response
}

export interface VtokenVotingCall_notify_vote {
    __kind: 'notify_vote'
    queryId: bigint
    response: V4Response
}

export interface VtokenVotingCall_remove_delegator_vote {
    __kind: 'remove_delegator_vote'
    vtoken: CurrencyId
    class: number
    pollIndex: number
    derivativeIndex: number
}

export interface VtokenVotingCall_set_referendum_status {
    __kind: 'set_referendum_status'
    vtoken: CurrencyId
    pollIndex: number
    info: ReferendumInfo
}

export interface VtokenVotingCall_set_undeciding_timeout {
    __kind: 'set_undeciding_timeout'
    vtoken: CurrencyId
    undecidingTimeout: number
}

export interface VtokenVotingCall_set_vote_cap_ratio {
    __kind: 'set_vote_cap_ratio'
    vtoken: CurrencyId
    voteCapRatio: Perbill
}

export interface VtokenVotingCall_set_vote_locking_period {
    __kind: 'set_vote_locking_period'
    vtoken: CurrencyId
    lockingPeriod: number
}

export interface VtokenVotingCall_unlock {
    __kind: 'unlock'
    vtoken: CurrencyId
    pollIndex: number
}

export interface VtokenVotingCall_vote {
    __kind: 'vote'
    vtoken: CurrencyId
    pollIndex: number
    vtokenVote: Type_432
}

export type Perbill = number

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VtokenMintingCall: sts.Type<VtokenMintingCall> = sts.closedEnum(() => {
    return  {
        add_support_rebond_token: sts.enumStruct({
            tokenId: CurrencyId,
        }),
        mint: sts.enumStruct({
            tokenId: CurrencyId,
            tokenAmount: sts.bigint(),
            remark: sts.bytes(),
            channelId: sts.option(() => sts.number()),
        }),
        mint_with_lock: sts.enumStruct({
            tokenId: CurrencyId,
            tokenAmount: sts.bigint(),
            remark: sts.bytes(),
            channelId: sts.option(() => sts.number()),
        }),
        rebond: sts.enumStruct({
            tokenId: CurrencyId,
            tokenAmount: sts.bigint(),
        }),
        rebond_by_unlock_id: sts.enumStruct({
            tokenId: CurrencyId,
            unlockId: sts.number(),
        }),
        recreate_currency_ongoing_time_unit: sts.enumStruct({
            tokenId: CurrencyId,
            timeUnit: TimeUnit,
        }),
        redeem: sts.enumStruct({
            vtokenId: CurrencyId,
            vtokenAmount: sts.bigint(),
        }),
        remove_support_rebond_token: sts.enumStruct({
            tokenId: CurrencyId,
        }),
        set_fees: sts.enumStruct({
            mintFee: Permill,
            redeemFee: Permill,
        }),
        set_hook_iteration_limit: sts.enumStruct({
            limit: sts.number(),
        }),
        set_incentive_coef: sts.enumStruct({
            vtokenId: CurrencyId,
            newCoefOp: sts.option(() => sts.bigint()),
        }),
        set_min_time_unit: sts.enumStruct({
            tokenId: CurrencyId,
            timeUnit: TimeUnit,
        }),
        set_minimum_mint: sts.enumStruct({
            tokenId: CurrencyId,
            amount: sts.bigint(),
        }),
        set_minimum_redeem: sts.enumStruct({
            tokenId: CurrencyId,
            amount: sts.bigint(),
        }),
        set_unlock_duration: sts.enumStruct({
            tokenId: CurrencyId,
            unlockDuration: TimeUnit,
        }),
        set_unlocking_total: sts.enumStruct({
            tokenId: CurrencyId,
            amount: sts.bigint(),
        }),
        set_vtoken_incentive_lock_blocks: sts.enumStruct({
            vtokenId: CurrencyId,
            newBlockesOp: sts.option(() => sts.number()),
        }),
        unlock_incentive_minted_vtoken: sts.enumStruct({
            vtokenId: CurrencyId,
        }),
    }
})

export const Permill = sts.number()

export const TimeUnit: sts.Type<TimeUnit> = sts.closedEnum(() => {
    return  {
        Era: sts.number(),
        Hour: sts.number(),
        Kblock: sts.number(),
        Round: sts.number(),
        SlashingSpan: sts.number(),
    }
})

export type TimeUnit = TimeUnit_Era | TimeUnit_Hour | TimeUnit_Kblock | TimeUnit_Round | TimeUnit_SlashingSpan

export interface TimeUnit_Era {
    __kind: 'Era'
    value: number
}

export interface TimeUnit_Hour {
    __kind: 'Hour'
    value: number
}

export interface TimeUnit_Kblock {
    __kind: 'Kblock'
    value: number
}

export interface TimeUnit_Round {
    __kind: 'Round'
    value: number
}

export interface TimeUnit_SlashingSpan {
    __kind: 'SlashingSpan'
    value: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VtokenMintingCall = VtokenMintingCall_add_support_rebond_token | VtokenMintingCall_mint | VtokenMintingCall_mint_with_lock | VtokenMintingCall_rebond | VtokenMintingCall_rebond_by_unlock_id | VtokenMintingCall_recreate_currency_ongoing_time_unit | VtokenMintingCall_redeem | VtokenMintingCall_remove_support_rebond_token | VtokenMintingCall_set_fees | VtokenMintingCall_set_hook_iteration_limit | VtokenMintingCall_set_incentive_coef | VtokenMintingCall_set_min_time_unit | VtokenMintingCall_set_minimum_mint | VtokenMintingCall_set_minimum_redeem | VtokenMintingCall_set_unlock_duration | VtokenMintingCall_set_unlocking_total | VtokenMintingCall_set_vtoken_incentive_lock_blocks | VtokenMintingCall_unlock_incentive_minted_vtoken

export interface VtokenMintingCall_add_support_rebond_token {
    __kind: 'add_support_rebond_token'
    tokenId: CurrencyId
}

export interface VtokenMintingCall_mint {
    __kind: 'mint'
    tokenId: CurrencyId
    tokenAmount: bigint
    remark: Bytes
    channelId?: (number | undefined)
}

export interface VtokenMintingCall_mint_with_lock {
    __kind: 'mint_with_lock'
    tokenId: CurrencyId
    tokenAmount: bigint
    remark: Bytes
    channelId?: (number | undefined)
}

export interface VtokenMintingCall_rebond {
    __kind: 'rebond'
    tokenId: CurrencyId
    tokenAmount: bigint
}

export interface VtokenMintingCall_rebond_by_unlock_id {
    __kind: 'rebond_by_unlock_id'
    tokenId: CurrencyId
    unlockId: number
}

export interface VtokenMintingCall_recreate_currency_ongoing_time_unit {
    __kind: 'recreate_currency_ongoing_time_unit'
    tokenId: CurrencyId
    timeUnit: TimeUnit
}

export interface VtokenMintingCall_redeem {
    __kind: 'redeem'
    vtokenId: CurrencyId
    vtokenAmount: bigint
}

export interface VtokenMintingCall_remove_support_rebond_token {
    __kind: 'remove_support_rebond_token'
    tokenId: CurrencyId
}

export interface VtokenMintingCall_set_fees {
    __kind: 'set_fees'
    mintFee: Permill
    redeemFee: Permill
}

export interface VtokenMintingCall_set_hook_iteration_limit {
    __kind: 'set_hook_iteration_limit'
    limit: number
}

export interface VtokenMintingCall_set_incentive_coef {
    __kind: 'set_incentive_coef'
    vtokenId: CurrencyId
    newCoefOp?: (bigint | undefined)
}

export interface VtokenMintingCall_set_min_time_unit {
    __kind: 'set_min_time_unit'
    tokenId: CurrencyId
    timeUnit: TimeUnit
}

export interface VtokenMintingCall_set_minimum_mint {
    __kind: 'set_minimum_mint'
    tokenId: CurrencyId
    amount: bigint
}

export interface VtokenMintingCall_set_minimum_redeem {
    __kind: 'set_minimum_redeem'
    tokenId: CurrencyId
    amount: bigint
}

export interface VtokenMintingCall_set_unlock_duration {
    __kind: 'set_unlock_duration'
    tokenId: CurrencyId
    unlockDuration: TimeUnit
}

export interface VtokenMintingCall_set_unlocking_total {
    __kind: 'set_unlocking_total'
    tokenId: CurrencyId
    amount: bigint
}

export interface VtokenMintingCall_set_vtoken_incentive_lock_blocks {
    __kind: 'set_vtoken_incentive_lock_blocks'
    vtokenId: CurrencyId
    newBlockesOp?: (number | undefined)
}

export interface VtokenMintingCall_unlock_incentive_minted_vtoken {
    __kind: 'unlock_incentive_minted_vtoken'
    vtokenId: CurrencyId
}

export type Permill = number

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        force_set_cliff: sts.enumStruct({
            target: MultiAddress,
            cliffBlock: sts.number(),
        }),
        force_vested_transfer: sts.enumStruct({
            source: MultiAddress,
            target: MultiAddress,
            schedule: VestingInfo,
        }),
        init_vesting_start_at: sts.enumStruct({
            vestingStartAt: sts.number(),
        }),
        merge_schedules: sts.enumStruct({
            schedule1Index: sts.number(),
            schedule2Index: sts.number(),
        }),
        set_vesting_per_block: sts.enumStruct({
            target: MultiAddress,
            index: sts.number(),
            perBlock: sts.bigint(),
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
export type VestingCall = VestingCall_force_set_cliff | VestingCall_force_vested_transfer | VestingCall_init_vesting_start_at | VestingCall_merge_schedules | VestingCall_set_vesting_per_block | VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

export interface VestingCall_force_set_cliff {
    __kind: 'force_set_cliff'
    target: MultiAddress
    cliffBlock: number
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

export interface VestingCall_init_vesting_start_at {
    __kind: 'init_vesting_start_at'
    vestingStartAt: number
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

export interface VestingCall_set_vesting_per_block {
    __kind: 'set_vesting_per_block'
    target: MultiAddress
    index: number
    perBlock: bigint
}

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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VeMintingCall: sts.Type<VeMintingCall> = sts.closedEnum(() => {
    return  {
        create_lock: sts.enumStruct({
            value: sts.bigint(),
            unlockTime: sts.number(),
        }),
        deposit_markup: sts.enumStruct({
            assetId: CurrencyId,
            value: sts.bigint(),
        }),
        get_rewards: sts.unit(),
        increase_amount: sts.enumStruct({
            position: sts.bigint(),
            value: sts.bigint(),
        }),
        increase_unlock_time: sts.enumStruct({
            position: sts.bigint(),
            time: sts.number(),
        }),
        notify_rewards: sts.enumStruct({
            incentiveFrom: AccountId32,
            rewardsDuration: sts.option(() => sts.number()),
            rewards: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
        }),
        redeem_unlock: sts.enumStruct({
            position: sts.bigint(),
        }),
        refresh: sts.enumStruct({
            assetId: CurrencyId,
        }),
        set_config: sts.enumStruct({
            minMint: sts.option(() => sts.bigint()),
            minBlock: sts.option(() => sts.number()),
        }),
        set_markup_coefficient: sts.enumStruct({
            assetId: CurrencyId,
            markup: FixedU128,
            hardcap: FixedU128,
        }),
        withdraw: sts.enumStruct({
            position: sts.bigint(),
        }),
        withdraw_markup: sts.enumStruct({
            assetId: CurrencyId,
        }),
    }
})

export const FixedU128 = sts.bigint()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VeMintingCall = VeMintingCall_create_lock | VeMintingCall_deposit_markup | VeMintingCall_get_rewards | VeMintingCall_increase_amount | VeMintingCall_increase_unlock_time | VeMintingCall_notify_rewards | VeMintingCall_redeem_unlock | VeMintingCall_refresh | VeMintingCall_set_config | VeMintingCall_set_markup_coefficient | VeMintingCall_withdraw | VeMintingCall_withdraw_markup

export interface VeMintingCall_create_lock {
    __kind: 'create_lock'
    value: bigint
    unlockTime: number
}

export interface VeMintingCall_deposit_markup {
    __kind: 'deposit_markup'
    assetId: CurrencyId
    value: bigint
}

export interface VeMintingCall_get_rewards {
    __kind: 'get_rewards'
}

export interface VeMintingCall_increase_amount {
    __kind: 'increase_amount'
    position: bigint
    value: bigint
}

export interface VeMintingCall_increase_unlock_time {
    __kind: 'increase_unlock_time'
    position: bigint
    time: number
}

export interface VeMintingCall_notify_rewards {
    __kind: 'notify_rewards'
    incentiveFrom: AccountId32
    rewardsDuration?: (number | undefined)
    rewards: [CurrencyId, bigint][]
}

export interface VeMintingCall_redeem_unlock {
    __kind: 'redeem_unlock'
    position: bigint
}

export interface VeMintingCall_refresh {
    __kind: 'refresh'
    assetId: CurrencyId
}

export interface VeMintingCall_set_config {
    __kind: 'set_config'
    minMint?: (bigint | undefined)
    minBlock?: (number | undefined)
}

export interface VeMintingCall_set_markup_coefficient {
    __kind: 'set_markup_coefficient'
    assetId: CurrencyId
    markup: FixedU128
    hardcap: FixedU128
}

export interface VeMintingCall_withdraw {
    __kind: 'withdraw'
    position: bigint
}

export interface VeMintingCall_withdraw_markup {
    __kind: 'withdraw_markup'
    assetId: CurrencyId
}

export type FixedU128 = bigint

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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TxPauseCall: sts.Type<TxPauseCall> = sts.closedEnum(() => {
    return  {
        pause: sts.enumStruct({
            fullName: sts.tuple(() => [BoundedVec, BoundedVec]),
        }),
        unpause: sts.enumStruct({
            ident: sts.tuple(() => [BoundedVec, BoundedVec]),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TxPauseCall = TxPauseCall_pause | TxPauseCall_unpause

/**
 * Pause a call.
 * 
 * Can only be called by [`Config::PauseOrigin`].
 * Emits an [`Event::CallPaused`] event on success.
 */
export interface TxPauseCall_pause {
    __kind: 'pause'
    fullName: [BoundedVec, BoundedVec]
}

/**
 * Un-pause a call.
 * 
 * Can only be called by [`Config::UnpauseOrigin`].
 * Emits an [`Event::CallUnpaused`] event on success.
 */
export interface TxPauseCall_unpause {
    __kind: 'unpause'
    ident: [BoundedVec, BoundedVec]
}

export type BoundedVec = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return  {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        check_status: sts.enumStruct({
            index: sts.number(),
        }),
        payout: sts.enumStruct({
            index: sts.number(),
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
            beneficiary: AccountId32,
            validFrom: sts.option(() => sts.number()),
        }),
        spend_local: sts.enumStruct({
            amount: sts.bigint(),
            beneficiary: MultiAddress,
        }),
        void_spend: sts.enumStruct({
            index: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_check_status | TreasuryCall_payout | TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_remove_approval | TreasuryCall_spend | TreasuryCall_spend_local | TreasuryCall_void_spend

/**
 * Approve a proposal.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::ApproveOrigin`].
 * 
 * ## Details
 * 
 * At a later time, the proposal will be allocated to the beneficiary and the original
 * deposit will be returned.
 * 
 * ### Complexity
 *  - O(1).
 * 
 * ## Events
 * 
 * No events are emitted from this dispatch.
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * Check the status of the spend and remove it from the storage if processed.
 * 
 * ## Dispatch Origin
 * 
 * Must be signed.
 * 
 * ## Details
 * 
 * The status check is a prerequisite for retrying a failed payout.
 * If a spend has either succeeded or expired, it is removed from the storage by this
 * function. In such instances, transaction fees are refunded.
 * 
 * ### Parameters
 * - `index`: The spend index.
 * 
 * ## Events
 * 
 * Emits [`Event::PaymentFailed`] if the spend payout has failed.
 * Emits [`Event::SpendProcessed`] if the spend payout has succeed.
 */
export interface TreasuryCall_check_status {
    __kind: 'check_status'
    index: number
}

/**
 * Claim a spend.
 * 
 * ## Dispatch Origin
 * 
 * Must be signed.
 * 
 * ## Details
 * 
 * Spends must be claimed within some temporal bounds. A spend may be claimed within one
 * [`Config::PayoutPeriod`] from the `valid_from` block.
 * In case of a payout failure, the spend status must be updated with the `check_status`
 * dispatchable before retrying with the current function.
 * 
 * ### Parameters
 * - `index`: The spend index.
 * 
 * ## Events
 * 
 * Emits [`Event::Paid`] if successful.
 */
export interface TreasuryCall_payout {
    __kind: 'payout'
    index: number
}

/**
 * Put forward a suggestion for spending.
 * 
 * ## Dispatch Origin
 * 
 * Must be signed.
 * 
 * ## Details
 * A deposit proportional to the value is reserved and slashed if the proposal is rejected.
 * It is returned once the proposal is awarded.
 * 
 * ### Complexity
 * - O(1)
 * 
 * ## Events
 * 
 * Emits [`Event::Proposed`] if successful.
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * Reject a proposed spend.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::RejectOrigin`].
 * 
 * ## Details
 * The original deposit will be slashed.
 * 
 * ### Complexity
 * - O(1)
 * 
 * ## Events
 * 
 * Emits [`Event::Rejected`] if successful.
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * Force a previously approved proposal to be removed from the approval queue.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::RejectOrigin`].
 * 
 * ## Details
 * 
 * The original deposit will no longer be returned.
 * 
 * ### Parameters
 * - `proposal_id`: The index of a proposal
 * 
 * ### Complexity
 * - O(A) where `A` is the number of approvals
 * 
 * ### Errors
 * - [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
 *   approval queue, i.e., the proposal has not been approved. This could also mean the
 *   proposal does not exist altogether, thus there is no way it would have been approved
 *   in the first place.
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Propose and approve a spend of treasury funds.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::SpendOrigin`] with the `Success` value being at least
 * `amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted
 * for assertion using the [`Config::BalanceConverter`].
 * 
 * ## Details
 * 
 * Create an approved spend for transferring a specific `amount` of `asset_kind` to a
 * designated beneficiary. The spend must be claimed using the `payout` dispatchable within
 * the [`Config::PayoutPeriod`].
 * 
 * ### Parameters
 * - `asset_kind`: An indicator of the specific asset class to be spent.
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The beneficiary of the spend.
 * - `valid_from`: The block number from which the spend can be claimed. It can refer to
 *   the past if the resulting spend has not yet expired according to the
 *   [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
 *   approval.
 * 
 * ## Events
 * 
 * Emits [`Event::AssetSpendApproved`] if successful.
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: AccountId32
    validFrom?: (number | undefined)
}

/**
 * Propose and approve a spend of treasury funds.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`.
 * 
 * ### Details
 * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
 * beneficiary.
 * 
 * ### Parameters
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The destination account for the transfer.
 * 
 * ## Events
 * 
 * Emits [`Event::SpendApproved`] if successful.
 */
export interface TreasuryCall_spend_local {
    __kind: 'spend_local'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Void previously approved spend.
 * 
 * ## Dispatch Origin
 * 
 * Must be [`Config::RejectOrigin`].
 * 
 * ## Details
 * 
 * A spend void is only possible if the payout has not been attempted yet.
 * 
 * ### Parameters
 * - `index`: The spend index.
 * 
 * ## Events
 * 
 * Emits [`Event::AssetSpendVoided`] if successful.
 */
export interface TreasuryCall_void_spend {
    __kind: 'void_spend'
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TokensCall: sts.Type<TokensCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: MultiAddress,
            currencyId: CurrencyId,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            keepAlive: sts.boolean(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TokensCall = TokensCall_force_transfer | TokensCall_set_balance | TokensCall_transfer | TokensCall_transfer_all | TokensCall_transfer_keep_alive

/**
 * Exactly as `transfer`, except the origin must be root and the source
 * account may be specified.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The sender of the transfer.
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it
 * will also decrease the total issuance of the system
 * (`TotalIssuance`). If the new free or reserved balance is below the
 * existential deposit, it will reap the `AccountInfo`.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface TokensCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    currencyId: CurrencyId
    newFree: bigint
    newReserved: bigint
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * It will decrease the total issuance of the system by the
 * `TransferFee`. If the sender's account is below the existential
 * deposit as a result of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Transfer all remaining balance to the given account.
 * 
 * NOTE: This function only attempts to transfer _transferable_
 * balances. This means that any locked, reserved, or existential
 * deposits (when `keep_alive` is `true`), will not be transferred by
 * this function. To ensure that this function results in a killed
 * account, you might need to prepare the account by removing any
 * reference counters, storage deposits, etc...
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `keep_alive`: A boolean to determine if the `transfer_all`
 *   operation should send all of the funds the account has, causing
 *   the sender account to be killed (false), or transfer everything
 *   except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true).
 */
export interface TokensCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    currencyId: CurrencyId
    keepAlive: boolean
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer
 * will not kill the origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TokenConversionCall: sts.Type<TokenConversionCall> = sts.closedEnum(() => {
    return  {
        set_exchange_fee: sts.enumStruct({
            exchangeFee: VstokenConversionExchangeFee,
        }),
        set_exchange_rate: sts.enumStruct({
            lease: sts.number(),
            exchangeRate: VstokenConversionExchangeRate,
        }),
        set_relaychain_lease: sts.enumStruct({
            lease: sts.number(),
        }),
        vsbond_convert_to_vstoken: sts.enumStruct({
            vsBondCurrencyId: CurrencyId,
            vsbondAmount: sts.bigint(),
            minimumVstoken: sts.bigint(),
        }),
        vstoken_convert_to_vsbond: sts.enumStruct({
            currencyId: CurrencyId,
            vstokenAmount: sts.bigint(),
            minimumVsbond: sts.bigint(),
        }),
    }
})

export const VstokenConversionExchangeRate: sts.Type<VstokenConversionExchangeRate> = sts.struct(() => {
    return  {
        vsbondConvertToVstoken: Percent,
        vstokenConvertToVsbond: Percent,
    }
})

export const Percent = sts.number()

export interface VstokenConversionExchangeRate {
    vsbondConvertToVstoken: Percent
    vstokenConvertToVsbond: Percent
}

export type Percent = number

export const VstokenConversionExchangeFee: sts.Type<VstokenConversionExchangeFee> = sts.struct(() => {
    return  {
        vstokenExchangeFee: sts.bigint(),
        vsbondExchangeFeeOfVstoken: sts.bigint(),
    }
})

export interface VstokenConversionExchangeFee {
    vstokenExchangeFee: bigint
    vsbondExchangeFeeOfVstoken: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TokenConversionCall = TokenConversionCall_set_exchange_fee | TokenConversionCall_set_exchange_rate | TokenConversionCall_set_relaychain_lease | TokenConversionCall_vsbond_convert_to_vstoken | TokenConversionCall_vstoken_convert_to_vsbond

export interface TokenConversionCall_set_exchange_fee {
    __kind: 'set_exchange_fee'
    exchangeFee: VstokenConversionExchangeFee
}

export interface TokenConversionCall_set_exchange_rate {
    __kind: 'set_exchange_rate'
    lease: number
    exchangeRate: VstokenConversionExchangeRate
}

export interface TokenConversionCall_set_relaychain_lease {
    __kind: 'set_relaychain_lease'
    lease: number
}

export interface TokenConversionCall_vsbond_convert_to_vstoken {
    __kind: 'vsbond_convert_to_vstoken'
    vsBondCurrencyId: CurrencyId
    vsbondAmount: bigint
    minimumVstoken: bigint
}

export interface TokenConversionCall_vstoken_convert_to_vsbond {
    __kind: 'vstoken_convert_to_vsbond'
    currencyId: CurrencyId
    vstokenAmount: bigint
    minimumVsbond: bigint
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
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * [`Config::MinimumPeriod`].
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
 * that changing the complexity of this call could result exhausting the resources in a
 * block to execute any other calls.
 * 
 * ## Complexity
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TechnicalMembershipCall: sts.Type<TechnicalMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        change_key: sts.enumStruct({
            new: MultiAddress,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: MultiAddress,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId32),
        }),
        set_prime: sts.enumStruct({
            who: MultiAddress,
        }),
        swap_member: sts.enumStruct({
            remove: MultiAddress,
            add: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_change_key | TechnicalMembershipCall_clear_prime | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_swap_member

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
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
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
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TechnicalCommitteeCall: sts.Type<TechnicalCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: H256,
        }),
        execute: sts.enumStruct({
            proposal: Call,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId32),
            prime: sts.option(() => AccountId32),
            oldCount: sts.number(),
        }),
        vote: sts.enumStruct({
            proposal: H256,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

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
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
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
 * ## Complexity
 * O(P) where P is the number of max proposals
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * ## Complexity:
 * - `O(B + M + P)` where:
 * - `B` is `proposal` size in bytes (length-fee-bounded)
 * - `M` members-count (code-bounded)
 * - `P` complexity of dispatching `proposal`
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
 * ## Complexity
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * The dispatch of this call must be `SetMembersOrigin`.
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
 * ## Complexity:
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SystemStakingCall: sts.Type<SystemStakingCall> = sts.closedEnum(() => {
    return  {
        delete_token: sts.enumStruct({
            token: CurrencyId,
        }),
        payout: sts.enumStruct({
            token: CurrencyId,
        }),
        refresh_token_info: sts.enumStruct({
            token: CurrencyId,
        }),
        token_config: sts.enumStruct({
            token: CurrencyId,
            execDelay: sts.option(() => sts.number()),
            systemStakableFarmingRate: sts.option(() => Permill),
            addOrSub: sts.option(() => sts.boolean()),
            systemStakableBase: sts.option(() => sts.bigint()),
            farmingPoolids: sts.option(() => sts.array(() => sts.number())),
            lptokenRates: sts.option(() => sts.array(() => Perbill)),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemStakingCall = SystemStakingCall_delete_token | SystemStakingCall_payout | SystemStakingCall_refresh_token_info | SystemStakingCall_token_config

/**
 * Update token config，take effect when next round begins
 */
export interface SystemStakingCall_delete_token {
    __kind: 'delete_token'
    token: CurrencyId
}

/**
 * payout to treasury
 */
export interface SystemStakingCall_payout {
    __kind: 'payout'
    token: CurrencyId
}

/**
 * refresh token info，query farming pallet, and update TokenInfo, change to new
 * config，ignore exec_delay, execute immediately
 */
export interface SystemStakingCall_refresh_token_info {
    __kind: 'refresh_token_info'
    token: CurrencyId
}

/**
 * Update token config，take effect when next round begins
 */
export interface SystemStakingCall_token_config {
    __kind: 'token_config'
    token: CurrencyId
    execDelay?: (number | undefined)
    systemStakableFarmingRate?: (Permill | undefined)
    addOrSub?: (boolean | undefined)
    systemStakableBase?: (bigint | undefined)
    farmingPoolids?: (number[] | undefined)
    lptokenRates?: (Perbill[] | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SystemMakerCall: sts.Type<SystemMakerCall> = sts.closedEnum(() => {
    return  {
        charge: sts.enumStruct({
            currencyId: CurrencyId,
            value: sts.bigint(),
        }),
        close: sts.enumStruct({
            currencyId: CurrencyId,
        }),
        payout: sts.enumStruct({
            currencyId: CurrencyId,
            value: sts.bigint(),
        }),
        set_config: sts.enumStruct({
            currencyId: CurrencyId,
            info: Info,
        }),
    }
})

export const Info: sts.Type<Info> = sts.struct(() => {
    return  {
        vcurrencyId: CurrencyId,
        annualization: sts.number(),
        granularity: sts.bigint(),
        minimumRedeem: sts.bigint(),
    }
})

export interface Info {
    vcurrencyId: CurrencyId
    annualization: number
    granularity: bigint
    minimumRedeem: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemMakerCall = SystemMakerCall_charge | SystemMakerCall_close | SystemMakerCall_payout | SystemMakerCall_set_config

export interface SystemMakerCall_charge {
    __kind: 'charge'
    currencyId: CurrencyId
    value: bigint
}

export interface SystemMakerCall_close {
    __kind: 'close'
    currencyId: CurrencyId
}

export interface SystemMakerCall_payout {
    __kind: 'payout'
    currencyId: CurrencyId
    value: bigint
}

export interface SystemMakerCall_set_config {
    __kind: 'set_config'
    currencyId: CurrencyId
    info: Info
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        apply_authorized_upgrade: sts.enumStruct({
            code: sts.bytes(),
        }),
        authorize_upgrade: sts.enumStruct({
            codeHash: H256,
        }),
        authorize_upgrade_without_checks: sts.enumStruct({
            codeHash: H256,
        }),
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
export type SystemCall = SystemCall_apply_authorized_upgrade | SystemCall_authorize_upgrade | SystemCall_authorize_upgrade_without_checks | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
 * 
 * If the authorization required a version check, this call will ensure the spec name
 * remains unchanged and that the spec version has increased.
 * 
 * Depending on the runtime's `OnSetCode` configuration, this function may directly apply
 * the new `code` in the same block or attempt to schedule the upgrade.
 * 
 * All origins are allowed.
 */
export interface SystemCall_apply_authorized_upgrade {
    __kind: 'apply_authorized_upgrade'
    code: Bytes
}

/**
 * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 * later.
 * 
 * This call requires Root origin.
 */
export interface SystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
}

/**
 * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 * later.
 * 
 * WARNING: This authorizes an upgrade that will take place without any safety checks, for
 * example that the spec name remains the same and that the version number increases. Not
 * recommended for normal use. Use `authorize_upgrade` instead.
 * 
 * This call requires Root origin.
 */
export interface SystemCall_authorize_upgrade_without_checks {
    __kind: 'authorize_upgrade_without_checks'
    codeHash: H256
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * Make some on-chain remark.
 * 
 * Can be executed by every `origin`.
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * Set the new runtime code.
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * Note that runtime upgrades will not run if this is called with a not-increasing spec
 * version!
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const StablePoolCall: sts.Type<StablePoolCall> = sts.closedEnum(() => {
    return  {
        add_liquidity: sts.enumStruct({
            poolId: sts.number(),
            amounts: sts.array(() => sts.bigint()),
            minMintAmount: sts.bigint(),
        }),
        config_vtoken_auto_refresh: sts.enumStruct({
            vtoken: CurrencyId,
            hardcap: Permill,
        }),
        create_pool: sts.enumStruct({
            assets: sts.array(() => CurrencyId),
            precisions: sts.array(() => sts.bigint()),
            mintFee: sts.bigint(),
            swapFee: sts.bigint(),
            redeemFee: sts.bigint(),
            initialA: sts.bigint(),
            feeRecipient: AccountId32,
            yieldRecipient: AccountId32,
            precision: sts.bigint(),
        }),
        edit_token_rate: sts.enumStruct({
            poolId: sts.number(),
            tokenRateInfo: sts.array(() => sts.tuple(() => [CurrencyId, sts.tuple(() => [sts.bigint(), sts.bigint()])])),
        }),
        modify_a: sts.enumStruct({
            poolId: sts.number(),
            a: sts.bigint(),
            futureABlock: sts.number(),
        }),
        modify_fees: sts.enumStruct({
            poolId: sts.number(),
            mintFee: sts.option(() => sts.bigint()),
            swapFee: sts.option(() => sts.bigint()),
            redeemFee: sts.option(() => sts.bigint()),
        }),
        modify_recipients: sts.enumStruct({
            poolId: sts.number(),
            feeRecipient: sts.option(() => AccountId32),
            yieldRecipient: sts.option(() => AccountId32),
        }),
        redeem_multi: sts.enumStruct({
            poolId: sts.number(),
            amounts: sts.array(() => sts.bigint()),
            maxRedeemAmount: sts.bigint(),
        }),
        redeem_proportion: sts.enumStruct({
            poolId: sts.number(),
            amount: sts.bigint(),
            minRedeemAmounts: sts.array(() => sts.bigint()),
        }),
        redeem_single: sts.enumStruct({
            poolId: sts.number(),
            amount: sts.bigint(),
            i: sts.number(),
            minRedeemAmount: sts.bigint(),
            assetLength: sts.number(),
        }),
        remove_vtoken_auto_refresh: sts.enumStruct({
            vtoken: CurrencyId,
        }),
        swap: sts.enumStruct({
            poolId: sts.number(),
            i: sts.number(),
            j: sts.number(),
            dx: sts.bigint(),
            minDy: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StablePoolCall = StablePoolCall_add_liquidity | StablePoolCall_config_vtoken_auto_refresh | StablePoolCall_create_pool | StablePoolCall_edit_token_rate | StablePoolCall_modify_a | StablePoolCall_modify_fees | StablePoolCall_modify_recipients | StablePoolCall_redeem_multi | StablePoolCall_redeem_proportion | StablePoolCall_redeem_single | StablePoolCall_remove_vtoken_auto_refresh | StablePoolCall_swap

export interface StablePoolCall_add_liquidity {
    __kind: 'add_liquidity'
    poolId: number
    amounts: bigint[]
    minMintAmount: bigint
}

export interface StablePoolCall_config_vtoken_auto_refresh {
    __kind: 'config_vtoken_auto_refresh'
    vtoken: CurrencyId
    hardcap: Permill
}

export interface StablePoolCall_create_pool {
    __kind: 'create_pool'
    assets: CurrencyId[]
    precisions: bigint[]
    mintFee: bigint
    swapFee: bigint
    redeemFee: bigint
    initialA: bigint
    feeRecipient: AccountId32
    yieldRecipient: AccountId32
    precision: bigint
}

export interface StablePoolCall_edit_token_rate {
    __kind: 'edit_token_rate'
    poolId: number
    tokenRateInfo: [CurrencyId, [bigint, bigint]][]
}

export interface StablePoolCall_modify_a {
    __kind: 'modify_a'
    poolId: number
    a: bigint
    futureABlock: number
}

export interface StablePoolCall_modify_fees {
    __kind: 'modify_fees'
    poolId: number
    mintFee?: (bigint | undefined)
    swapFee?: (bigint | undefined)
    redeemFee?: (bigint | undefined)
}

export interface StablePoolCall_modify_recipients {
    __kind: 'modify_recipients'
    poolId: number
    feeRecipient?: (AccountId32 | undefined)
    yieldRecipient?: (AccountId32 | undefined)
}

export interface StablePoolCall_redeem_multi {
    __kind: 'redeem_multi'
    poolId: number
    amounts: bigint[]
    maxRedeemAmount: bigint
}

export interface StablePoolCall_redeem_proportion {
    __kind: 'redeem_proportion'
    poolId: number
    amount: bigint
    minRedeemAmounts: bigint[]
}

export interface StablePoolCall_redeem_single {
    __kind: 'redeem_single'
    poolId: number
    amount: bigint
    i: number
    minRedeemAmount: bigint
    assetLength: number
}

export interface StablePoolCall_remove_vtoken_auto_refresh {
    __kind: 'remove_vtoken_auto_refresh'
    vtoken: CurrencyId
}

export interface StablePoolCall_swap {
    __kind: 'swap'
    poolId: number
    i: number
    j: number
    dx: bigint
    minDy: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SlpxCall: sts.Type<SlpxCall> = sts.closedEnum(() => {
    return  {
        add_whitelist: sts.enumStruct({
            supportChain: SupportChain,
            evmContractAccountId: AccountId32,
        }),
        force_add_order: sts.enumStruct({
            slpxContractDerivativeAccount: AccountId32,
            evmCaller: H160,
            currencyId: CurrencyId,
            targetChain: TargetChain,
            remark: sts.bytes(),
            orderType: OrderType,
        }),
        mint: sts.enumStruct({
            evmCaller: H160,
            currencyId: CurrencyId,
            targetChain: TargetChain,
            remark: sts.bytes(),
        }),
        mint_with_channel_id: sts.enumStruct({
            evmCaller: H160,
            currencyId: CurrencyId,
            targetChain: TargetChain,
            remark: sts.bytes(),
            channelId: sts.number(),
        }),
        redeem: sts.enumStruct({
            evmCaller: H160,
            vtokenId: CurrencyId,
            targetChain: TargetChain,
        }),
        remove_whitelist: sts.enumStruct({
            supportChain: SupportChain,
            evmContractAccountId: AccountId32,
        }),
        set_currency_ethereum_call_switch: sts.enumStruct({
            currencyId: CurrencyId,
            isSupport: sts.boolean(),
        }),
        set_currency_support_xcm_fee: sts.enumStruct({
            currencyId: CurrencyId,
            isSupport: sts.boolean(),
        }),
        set_delay_block: sts.enumStruct({
            delayBlock: sts.number(),
        }),
        set_ethereum_call_configration: sts.enumStruct({
            xcmFee: sts.bigint(),
            xcmWeight: Weight,
            period: sts.number(),
            contract: H160,
        }),
        set_execution_fee: sts.enumStruct({
            currencyId: CurrencyId,
            executionFee: sts.bigint(),
        }),
        set_transfer_to_fee: sts.enumStruct({
            supportChain: SupportChain,
            transferToFee: sts.bigint(),
        }),
        stable_pool_swap: sts.enumStruct({
            evmCaller: H160,
            poolId: sts.number(),
            currencyIdIn: CurrencyId,
            currencyIdOut: CurrencyId,
            minDy: sts.bigint(),
            targetChain: TargetChain,
        }),
        zenlink_swap: sts.enumStruct({
            evmCaller: H160,
            currencyIdIn: CurrencyId,
            currencyIdOut: CurrencyId,
            currencyIdOutMin: sts.bigint(),
            targetChain: TargetChain,
        }),
    }
})

export const OrderType: sts.Type<OrderType> = sts.closedEnum(() => {
    return  {
        Mint: sts.unit(),
        Redeem: sts.unit(),
    }
})

export type OrderType = OrderType_Mint | OrderType_Redeem

export interface OrderType_Mint {
    __kind: 'Mint'
}

export interface OrderType_Redeem {
    __kind: 'Redeem'
}

export const TargetChain: sts.Type<TargetChain> = sts.closedEnum(() => {
    return  {
        Astar: H160,
        Hydradx: AccountId32,
        Interlay: AccountId32,
        Manta: AccountId32,
        Moonbeam: H160,
    }
})

export type TargetChain = TargetChain_Astar | TargetChain_Hydradx | TargetChain_Interlay | TargetChain_Manta | TargetChain_Moonbeam

export interface TargetChain_Astar {
    __kind: 'Astar'
    value: H160
}

export interface TargetChain_Hydradx {
    __kind: 'Hydradx'
    value: AccountId32
}

export interface TargetChain_Interlay {
    __kind: 'Interlay'
    value: AccountId32
}

export interface TargetChain_Manta {
    __kind: 'Manta'
    value: AccountId32
}

export interface TargetChain_Moonbeam {
    __kind: 'Moonbeam'
    value: H160
}

export const SupportChain: sts.Type<SupportChain> = sts.closedEnum(() => {
    return  {
        Astar: sts.unit(),
        Hydradx: sts.unit(),
        Interlay: sts.unit(),
        Manta: sts.unit(),
        Moonbeam: sts.unit(),
    }
})

export type SupportChain = SupportChain_Astar | SupportChain_Hydradx | SupportChain_Interlay | SupportChain_Manta | SupportChain_Moonbeam

export interface SupportChain_Astar {
    __kind: 'Astar'
}

export interface SupportChain_Hydradx {
    __kind: 'Hydradx'
}

export interface SupportChain_Interlay {
    __kind: 'Interlay'
}

export interface SupportChain_Manta {
    __kind: 'Manta'
}

export interface SupportChain_Moonbeam {
    __kind: 'Moonbeam'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SlpxCall = SlpxCall_add_whitelist | SlpxCall_force_add_order | SlpxCall_mint | SlpxCall_mint_with_channel_id | SlpxCall_redeem | SlpxCall_remove_whitelist | SlpxCall_set_currency_ethereum_call_switch | SlpxCall_set_currency_support_xcm_fee | SlpxCall_set_delay_block | SlpxCall_set_ethereum_call_configration | SlpxCall_set_execution_fee | SlpxCall_set_transfer_to_fee | SlpxCall_stable_pool_swap | SlpxCall_zenlink_swap

export interface SlpxCall_add_whitelist {
    __kind: 'add_whitelist'
    supportChain: SupportChain
    evmContractAccountId: AccountId32
}

export interface SlpxCall_force_add_order {
    __kind: 'force_add_order'
    slpxContractDerivativeAccount: AccountId32
    evmCaller: H160
    currencyId: CurrencyId
    targetChain: TargetChain
    remark: Bytes
    orderType: OrderType
}

/**
 * vtoken mint and transfer to target chain
 */
export interface SlpxCall_mint {
    __kind: 'mint'
    evmCaller: H160
    currencyId: CurrencyId
    targetChain: TargetChain
    remark: Bytes
}

export interface SlpxCall_mint_with_channel_id {
    __kind: 'mint_with_channel_id'
    evmCaller: H160
    currencyId: CurrencyId
    targetChain: TargetChain
    remark: Bytes
    channelId: number
}

/**
 * Redeem
 */
export interface SlpxCall_redeem {
    __kind: 'redeem'
    evmCaller: H160
    vtokenId: CurrencyId
    targetChain: TargetChain
}

export interface SlpxCall_remove_whitelist {
    __kind: 'remove_whitelist'
    supportChain: SupportChain
    evmContractAccountId: AccountId32
}

export interface SlpxCall_set_currency_ethereum_call_switch {
    __kind: 'set_currency_ethereum_call_switch'
    currencyId: CurrencyId
    isSupport: boolean
}

export interface SlpxCall_set_currency_support_xcm_fee {
    __kind: 'set_currency_support_xcm_fee'
    currencyId: CurrencyId
    isSupport: boolean
}

export interface SlpxCall_set_delay_block {
    __kind: 'set_delay_block'
    delayBlock: number
}

export interface SlpxCall_set_ethereum_call_configration {
    __kind: 'set_ethereum_call_configration'
    xcmFee: bigint
    xcmWeight: Weight
    period: number
    contract: H160
}

export interface SlpxCall_set_execution_fee {
    __kind: 'set_execution_fee'
    currencyId: CurrencyId
    executionFee: bigint
}

export interface SlpxCall_set_transfer_to_fee {
    __kind: 'set_transfer_to_fee'
    supportChain: SupportChain
    transferToFee: bigint
}

/**
 * Stable pool swap
 */
export interface SlpxCall_stable_pool_swap {
    __kind: 'stable_pool_swap'
    evmCaller: H160
    poolId: number
    currencyIdIn: CurrencyId
    currencyIdOut: CurrencyId
    minDy: bigint
    targetChain: TargetChain
}

/**
 * Swap and transfer to target chain
 */
export interface SlpxCall_zenlink_swap {
    __kind: 'zenlink_swap'
    evmCaller: H160
    currencyIdIn: CurrencyId
    currencyIdOut: CurrencyId
    currencyIdOutMin: bigint
    targetChain: TargetChain
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SlpCall: sts.Type<SlpCall> = sts.closedEnum(() => {
    return  {
        add_delegator: sts.enumStruct({
            currencyId: CurrencyId,
            index: sts.number(),
            who: V3MultiLocation,
        }),
        add_supplement_fee_account_to_whitelist: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
        }),
        add_to_validator_boost_list: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
        }),
        add_validator: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
        }),
        bond: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            amount: sts.bigint(),
            validator: sts.option(() => V3MultiLocation),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        bond_extra: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            validator: sts.option(() => V3MultiLocation),
            amount: sts.bigint(),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        charge_host_fee_and_tune_vtoken_exchange_rate: sts.enumStruct({
            currencyId: CurrencyId,
            value: sts.bigint(),
            who: sts.option(() => V3MultiLocation),
        }),
        chill: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        clean_outdated_validator_boost_list: sts.enumStruct({
            token: CurrencyId,
            page: sts.number(),
        }),
        confirm_delegator_ledger: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
        }),
        confirm_delegator_ledger_query_response: sts.enumStruct({
            currencyId: CurrencyId,
            queryId: sts.bigint(),
        }),
        confirm_validators_by_delegator: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
        }),
        confirm_validators_by_delegator_query_response: sts.enumStruct({
            currencyId: CurrencyId,
            queryId: sts.bigint(),
        }),
        convert_asset: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            amount: sts.bigint(),
            ifFromCurrency: sts.boolean(),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        convert_treasury_vtoken: sts.enumStruct({
            vtoken: CurrencyId,
            amount: sts.bigint(),
        }),
        decrease_token_pool: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        delegate: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            targets: sts.array(() => V3MultiLocation),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        fail_delegator_ledger_query_response: sts.enumStruct({
            currencyId: CurrencyId,
            queryId: sts.bigint(),
        }),
        fail_validators_by_delegator_query_response: sts.enumStruct({
            currencyId: CurrencyId,
            queryId: sts.bigint(),
        }),
        increase_token_pool: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        initialize_delegator: sts.enumStruct({
            currencyId: CurrencyId,
            delegatorLocation: sts.option(() => V3MultiLocation),
        }),
        liquidize: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            when: sts.option(() => TimeUnit),
            validator: sts.option(() => V3MultiLocation),
            amount: sts.option(() => sts.bigint()),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        payout: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            validator: V3MultiLocation,
            when: sts.option(() => TimeUnit),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        rebond: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            validator: sts.option(() => V3MultiLocation),
            amount: sts.option(() => sts.bigint()),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        redelegate: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            targets: sts.option(() => sts.array(() => V3MultiLocation)),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        refund_currency_due_unbond: sts.enumStruct({
            currencyId: CurrencyId,
        }),
        remove_delegator: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
        }),
        remove_from_validator_boot_list: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
        }),
        remove_supplement_fee_account_from_whitelist: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
        }),
        remove_validator: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
        }),
        reset_validators: sts.enumStruct({
            currencyId: CurrencyId,
            validatorList: sts.array(() => V3MultiLocation),
        }),
        set_currency_delays: sts.enumStruct({
            currencyId: CurrencyId,
            maybeDelays: sts.option(() => Delays),
        }),
        set_currency_tune_exchange_rate_limit: sts.enumStruct({
            currencyId: CurrencyId,
            maybeTuneExchangeRateLimit: sts.option(() => sts.tuple(() => [sts.number(), Permill])),
        }),
        set_delegator_ledger: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            ledger: sts.option(() => Ledger),
        }),
        set_fee_source: sts.enumStruct({
            currencyId: CurrencyId,
            whoAndFee: sts.option(() => sts.tuple(() => [V3MultiLocation, sts.bigint()])),
        }),
        set_hosting_fees: sts.enumStruct({
            currencyId: CurrencyId,
            maybeFeeSet: sts.option(() => sts.tuple(() => [Permill, V3MultiLocation])),
        }),
        set_minimums_and_maximums: sts.enumStruct({
            currencyId: CurrencyId,
            constraints: sts.option(() => MinimumsMaximums),
        }),
        set_ongoing_time_unit_update_interval: sts.enumStruct({
            currencyId: CurrencyId,
            maybeInterval: sts.option(() => sts.number()),
        }),
        set_operate_origin: sts.enumStruct({
            currencyId: CurrencyId,
            who: sts.option(() => AccountId32),
        }),
        set_validator_boost_list: sts.enumStruct({
            currencyId: CurrencyId,
            validatorList: sts.array(() => V3MultiLocation),
        }),
        set_validators_by_delegator: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            validators: sts.array(() => V3MultiLocation),
        }),
        supplement_fee_reserve: sts.enumStruct({
            currencyId: CurrencyId,
            dest: V3MultiLocation,
        }),
        transfer_back: sts.enumStruct({
            currencyId: CurrencyId,
            from: V3MultiLocation,
            to: V3MultiLocation,
            amount: sts.bigint(),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        transfer_to: sts.enumStruct({
            currencyId: CurrencyId,
            from: V3MultiLocation,
            to: V3MultiLocation,
            amount: sts.bigint(),
        }),
        unbond: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            validator: sts.option(() => V3MultiLocation),
            amount: sts.bigint(),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        unbond_all: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        undelegate: sts.enumStruct({
            currencyId: CurrencyId,
            who: V3MultiLocation,
            targets: sts.array(() => V3MultiLocation),
            weightAndFee: sts.option(() => sts.tuple(() => [Weight, sts.bigint()])),
        }),
        update_ongoing_time_unit: sts.enumStruct({
            currencyId: CurrencyId,
            timeUnit: TimeUnit,
        }),
    }
})

export const MinimumsMaximums: sts.Type<MinimumsMaximums> = sts.struct(() => {
    return  {
        delegatorBondedMinimum: sts.bigint(),
        bondExtraMinimum: sts.bigint(),
        unbondMinimum: sts.bigint(),
        rebondMinimum: sts.bigint(),
        unbondRecordMaximum: sts.number(),
        validatorsBackMaximum: sts.number(),
        delegatorActiveStakingMaximum: sts.bigint(),
        validatorsRewardMaximum: sts.number(),
        delegationAmountMinimum: sts.bigint(),
        delegatorsMaximum: sts.number(),
        validatorsMaximum: sts.number(),
    }
})

export interface MinimumsMaximums {
    delegatorBondedMinimum: bigint
    bondExtraMinimum: bigint
    unbondMinimum: bigint
    rebondMinimum: bigint
    unbondRecordMaximum: number
    validatorsBackMaximum: number
    delegatorActiveStakingMaximum: bigint
    validatorsRewardMaximum: number
    delegationAmountMinimum: bigint
    delegatorsMaximum: number
    validatorsMaximum: number
}

export const Ledger: sts.Type<Ledger> = sts.closedEnum(() => {
    return  {
        Filecoin: FilecoinLedger,
        Moonbeam: OneToManyLedger,
        ParachainStaking: OneToManyLedger,
        Phala: PhalaLedger,
        Substrate: SubstrateLedger,
    }
})

export const SubstrateLedger: sts.Type<SubstrateLedger> = sts.struct(() => {
    return  {
        account: V3MultiLocation,
        total: sts.bigint(),
        active: sts.bigint(),
        unlocking: sts.array(() => UnlockChunk),
    }
})

export const UnlockChunk: sts.Type<UnlockChunk> = sts.struct(() => {
    return  {
        value: sts.bigint(),
        unlockTime: TimeUnit,
    }
})

export interface UnlockChunk {
    value: bigint
    unlockTime: TimeUnit
}

export interface SubstrateLedger {
    account: V3MultiLocation
    total: bigint
    active: bigint
    unlocking: UnlockChunk[]
}

export const PhalaLedger: sts.Type<PhalaLedger> = sts.struct(() => {
    return  {
        account: V3MultiLocation,
        activeShares: sts.bigint(),
        unlockingShares: sts.bigint(),
        unlockingTimeUnit: sts.option(() => TimeUnit),
        bondedPoolId: sts.option(() => sts.bigint()),
        bondedPoolCollectionId: sts.option(() => sts.number()),
        bondedIsVault: sts.option(() => sts.boolean()),
    }
})

export interface PhalaLedger {
    account: V3MultiLocation
    activeShares: bigint
    unlockingShares: bigint
    unlockingTimeUnit?: (TimeUnit | undefined)
    bondedPoolId?: (bigint | undefined)
    bondedPoolCollectionId?: (number | undefined)
    bondedIsVault?: (boolean | undefined)
}

export const OneToManyLedger: sts.Type<OneToManyLedger> = sts.struct(() => {
    return  {
        account: V3MultiLocation,
        delegations: sts.array(() => sts.tuple(() => [V3MultiLocation, sts.bigint()])),
        total: sts.bigint(),
        lessTotal: sts.bigint(),
        requests: sts.array(() => OneToManyScheduledRequest),
        requestBriefs: sts.array(() => sts.tuple(() => [V3MultiLocation, sts.tuple(() => [TimeUnit, sts.bigint()])])),
        status: OneToManyDelegatorStatus,
    }
})

export const OneToManyDelegatorStatus: sts.Type<OneToManyDelegatorStatus> = sts.closedEnum(() => {
    return  {
        Active: sts.unit(),
        Leaving: TimeUnit,
    }
})

export type OneToManyDelegatorStatus = OneToManyDelegatorStatus_Active | OneToManyDelegatorStatus_Leaving

export interface OneToManyDelegatorStatus_Active {
    __kind: 'Active'
}

export interface OneToManyDelegatorStatus_Leaving {
    __kind: 'Leaving'
    value: TimeUnit
}

export const OneToManyScheduledRequest: sts.Type<OneToManyScheduledRequest> = sts.struct(() => {
    return  {
        validator: V3MultiLocation,
        whenExecutable: TimeUnit,
        action: OneToManyDelegationAction,
    }
})

export const OneToManyDelegationAction: sts.Type<OneToManyDelegationAction> = sts.closedEnum(() => {
    return  {
        Decrease: sts.bigint(),
        Revoke: sts.bigint(),
    }
})

export type OneToManyDelegationAction = OneToManyDelegationAction_Decrease | OneToManyDelegationAction_Revoke

export interface OneToManyDelegationAction_Decrease {
    __kind: 'Decrease'
    value: bigint
}

export interface OneToManyDelegationAction_Revoke {
    __kind: 'Revoke'
    value: bigint
}

export interface OneToManyScheduledRequest {
    validator: V3MultiLocation
    whenExecutable: TimeUnit
    action: OneToManyDelegationAction
}

export interface OneToManyLedger {
    account: V3MultiLocation
    delegations: [V3MultiLocation, bigint][]
    total: bigint
    lessTotal: bigint
    requests: OneToManyScheduledRequest[]
    requestBriefs: [V3MultiLocation, [TimeUnit, bigint]][]
    status: OneToManyDelegatorStatus
}

export const FilecoinLedger: sts.Type<FilecoinLedger> = sts.struct(() => {
    return  {
        account: V3MultiLocation,
        initialPledge: sts.bigint(),
    }
})

export interface FilecoinLedger {
    account: V3MultiLocation
    initialPledge: bigint
}

export type Ledger = Ledger_Filecoin | Ledger_Moonbeam | Ledger_ParachainStaking | Ledger_Phala | Ledger_Substrate

export interface Ledger_Filecoin {
    __kind: 'Filecoin'
    value: FilecoinLedger
}

export interface Ledger_Moonbeam {
    __kind: 'Moonbeam'
    value: OneToManyLedger
}

export interface Ledger_ParachainStaking {
    __kind: 'ParachainStaking'
    value: OneToManyLedger
}

export interface Ledger_Phala {
    __kind: 'Phala'
    value: PhalaLedger
}

export interface Ledger_Substrate {
    __kind: 'Substrate'
    value: SubstrateLedger
}

export const Delays: sts.Type<Delays> = sts.struct(() => {
    return  {
        unlockDelay: TimeUnit,
        leaveDelegatorsDelay: TimeUnit,
    }
})

export interface Delays {
    unlockDelay: TimeUnit
    leaveDelegatorsDelay: TimeUnit
}

export const V3Response: sts.Type<V3Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V3MultiAsset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V3PalletInfo),
        Version: sts.number(),
    }
})

export const V3PalletInfo: sts.Type<V3PalletInfo> = sts.struct(() => {
    return  {
        index: sts.number(),
        name: sts.bytes(),
        moduleName: sts.bytes(),
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export interface V3PalletInfo {
    index: number
    name: Bytes
    moduleName: Bytes
    major: number
    minor: number
    patch: number
}

export type V3Response = V3Response_Assets | V3Response_DispatchResult | V3Response_ExecutionResult | V3Response_Null | V3Response_PalletsInfo | V3Response_Version

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V3Error] | undefined)
}

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SlpCall = SlpCall_add_delegator | SlpCall_add_supplement_fee_account_to_whitelist | SlpCall_add_to_validator_boost_list | SlpCall_add_validator | SlpCall_bond | SlpCall_bond_extra | SlpCall_charge_host_fee_and_tune_vtoken_exchange_rate | SlpCall_chill | SlpCall_clean_outdated_validator_boost_list | SlpCall_confirm_delegator_ledger | SlpCall_confirm_delegator_ledger_query_response | SlpCall_confirm_validators_by_delegator | SlpCall_confirm_validators_by_delegator_query_response | SlpCall_convert_asset | SlpCall_convert_treasury_vtoken | SlpCall_decrease_token_pool | SlpCall_delegate | SlpCall_fail_delegator_ledger_query_response | SlpCall_fail_validators_by_delegator_query_response | SlpCall_increase_token_pool | SlpCall_initialize_delegator | SlpCall_liquidize | SlpCall_payout | SlpCall_rebond | SlpCall_redelegate | SlpCall_refund_currency_due_unbond | SlpCall_remove_delegator | SlpCall_remove_from_validator_boot_list | SlpCall_remove_supplement_fee_account_from_whitelist | SlpCall_remove_validator | SlpCall_reset_validators | SlpCall_set_currency_delays | SlpCall_set_currency_tune_exchange_rate_limit | SlpCall_set_delegator_ledger | SlpCall_set_fee_source | SlpCall_set_hosting_fees | SlpCall_set_minimums_and_maximums | SlpCall_set_ongoing_time_unit_update_interval | SlpCall_set_operate_origin | SlpCall_set_validator_boost_list | SlpCall_set_validators_by_delegator | SlpCall_supplement_fee_reserve | SlpCall_transfer_back | SlpCall_transfer_to | SlpCall_unbond | SlpCall_unbond_all | SlpCall_undelegate | SlpCall_update_ongoing_time_unit

/**
 * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
 */
export interface SlpCall_add_delegator {
    __kind: 'add_delegator'
    currencyId: CurrencyId
    index: number
    who: V3MultiLocation
}

export interface SlpCall_add_supplement_fee_account_to_whitelist {
    __kind: 'add_supplement_fee_account_to_whitelist'
    currencyId: CurrencyId
    who: V3MultiLocation
}

export interface SlpCall_add_to_validator_boost_list {
    __kind: 'add_to_validator_boost_list'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * Update storage Validators<T>.
 */
export interface SlpCall_add_validator {
    __kind: 'add_validator'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * First time bonding some amount to a delegator.
 */
export interface SlpCall_bond {
    __kind: 'bond'
    currencyId: CurrencyId
    who: V3MultiLocation
    amount: bigint
    validator?: (V3MultiLocation | undefined)
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * Bond extra amount to a delegator.
 */
export interface SlpCall_bond_extra {
    __kind: 'bond_extra'
    currencyId: CurrencyId
    who: V3MultiLocation
    validator?: (V3MultiLocation | undefined)
    amount: bigint
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * Charge staking host fee, tune vtoken/token exchange rate, and update delegator ledger
 * for single delegator.
 */
export interface SlpCall_charge_host_fee_and_tune_vtoken_exchange_rate {
    __kind: 'charge_host_fee_and_tune_vtoken_exchange_rate'
    currencyId: CurrencyId
    value: bigint
    who?: (V3MultiLocation | undefined)
}

/**
 * Initiate payout for a certain delegator.
 */
export interface SlpCall_chill {
    __kind: 'chill'
    currencyId: CurrencyId
    who: V3MultiLocation
    weightAndFee?: ([Weight, bigint] | undefined)
}

export interface SlpCall_clean_outdated_validator_boost_list {
    __kind: 'clean_outdated_validator_boost_list'
    token: CurrencyId
    page: number
}

export interface SlpCall_confirm_delegator_ledger {
    __kind: 'confirm_delegator_ledger'
    queryId: bigint
    response: V3Response
}

/**
 * ********************************************************************
 * *************Outer Confirming Xcm queries functions ****************
 * ********************************************************************
 */
export interface SlpCall_confirm_delegator_ledger_query_response {
    __kind: 'confirm_delegator_ledger_query_response'
    currencyId: CurrencyId
    queryId: bigint
}

export interface SlpCall_confirm_validators_by_delegator {
    __kind: 'confirm_validators_by_delegator'
    queryId: bigint
    response: V3Response
}

export interface SlpCall_confirm_validators_by_delegator_query_response {
    __kind: 'confirm_validators_by_delegator_query_response'
    currencyId: CurrencyId
    queryId: bigint
}

export interface SlpCall_convert_asset {
    __kind: 'convert_asset'
    currencyId: CurrencyId
    who: V3MultiLocation
    amount: bigint
    ifFromCurrency: boolean
    weightAndFee?: ([Weight, bigint] | undefined)
}

export interface SlpCall_convert_treasury_vtoken {
    __kind: 'convert_treasury_vtoken'
    vtoken: CurrencyId
    amount: bigint
}

export interface SlpCall_decrease_token_pool {
    __kind: 'decrease_token_pool'
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Delegate to some validator set.
 */
export interface SlpCall_delegate {
    __kind: 'delegate'
    currencyId: CurrencyId
    who: V3MultiLocation
    targets: V3MultiLocation[]
    weightAndFee?: ([Weight, bigint] | undefined)
}

export interface SlpCall_fail_delegator_ledger_query_response {
    __kind: 'fail_delegator_ledger_query_response'
    currencyId: CurrencyId
    queryId: bigint
}

export interface SlpCall_fail_validators_by_delegator_query_response {
    __kind: 'fail_validators_by_delegator_query_response'
    currencyId: CurrencyId
    queryId: bigint
}

export interface SlpCall_increase_token_pool {
    __kind: 'increase_token_pool'
    currencyId: CurrencyId
    amount: bigint
}

/**
 * *****************************
 * ****** Outer Calls ******
 * *****************************
 * 
 * Delegator initialization work. Generate a new delegator and return its ID.
 */
export interface SlpCall_initialize_delegator {
    __kind: 'initialize_delegator'
    currencyId: CurrencyId
    delegatorLocation?: (V3MultiLocation | undefined)
}

/**
 * Withdraw the due payout into free balance.
 */
export interface SlpCall_liquidize {
    __kind: 'liquidize'
    currencyId: CurrencyId
    who: V3MultiLocation
    when?: (TimeUnit | undefined)
    validator?: (V3MultiLocation | undefined)
    amount?: (bigint | undefined)
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * Initiate payout for a certain delegator.
 */
export interface SlpCall_payout {
    __kind: 'payout'
    currencyId: CurrencyId
    who: V3MultiLocation
    validator: V3MultiLocation
    when?: (TimeUnit | undefined)
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * Rebond some unlocking amount to a delegator.
 */
export interface SlpCall_rebond {
    __kind: 'rebond'
    currencyId: CurrencyId
    who: V3MultiLocation
    validator?: (V3MultiLocation | undefined)
    amount?: (bigint | undefined)
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * Re-delegate existing delegation to a new validator set.
 */
export interface SlpCall_redelegate {
    __kind: 'redelegate'
    currencyId: CurrencyId
    who: V3MultiLocation
    targets?: (V3MultiLocation[] | undefined)
    weightAndFee?: ([Weight, bigint] | undefined)
}

export interface SlpCall_refund_currency_due_unbond {
    __kind: 'refund_currency_due_unbond'
    currencyId: CurrencyId
}

/**
 * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
 */
export interface SlpCall_remove_delegator {
    __kind: 'remove_delegator'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * Update storage Validator_boost_list<T>.
 */
export interface SlpCall_remove_from_validator_boot_list {
    __kind: 'remove_from_validator_boot_list'
    currencyId: CurrencyId
    who: V3MultiLocation
}

export interface SlpCall_remove_supplement_fee_account_from_whitelist {
    __kind: 'remove_supplement_fee_account_from_whitelist'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * Update storage Validators<T>.
 */
export interface SlpCall_remove_validator {
    __kind: 'remove_validator'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * Reset the whole storage Validators<T>.
 */
export interface SlpCall_reset_validators {
    __kind: 'reset_validators'
    currencyId: CurrencyId
    validatorList: V3MultiLocation[]
}

/**
 * Update storage Delays<T>.
 */
export interface SlpCall_set_currency_delays {
    __kind: 'set_currency_delays'
    currencyId: CurrencyId
    maybeDelays?: (Delays | undefined)
}

/**
 * Set  CurrencyTuneExchangeRateLimit<T> storage.
 */
export interface SlpCall_set_currency_tune_exchange_rate_limit {
    __kind: 'set_currency_tune_exchange_rate_limit'
    currencyId: CurrencyId
    maybeTuneExchangeRateLimit?: ([number, Permill] | undefined)
}

/**
 * Update storage DelegatorLedgers<T>.
 */
export interface SlpCall_set_delegator_ledger {
    __kind: 'set_delegator_ledger'
    currencyId: CurrencyId
    who: V3MultiLocation
    ledger?: (Ledger | undefined)
}

/**
 * Update storage FeeSources<T>.
 */
export interface SlpCall_set_fee_source {
    __kind: 'set_fee_source'
    currencyId: CurrencyId
    whoAndFee?: ([V3MultiLocation, bigint] | undefined)
}

/**
 * Set HostingFees storage.
 */
export interface SlpCall_set_hosting_fees {
    __kind: 'set_hosting_fees'
    currencyId: CurrencyId
    maybeFeeSet?: ([Permill, V3MultiLocation] | undefined)
}

/**
 * Update storage MinimumsAndMaximums<T>.
 */
export interface SlpCall_set_minimums_and_maximums {
    __kind: 'set_minimums_and_maximums'
    currencyId: CurrencyId
    constraints?: (MinimumsMaximums | undefined)
}

/**
 * Set  OngoingTimeUnitUpdateInterval<T> storage.
 */
export interface SlpCall_set_ongoing_time_unit_update_interval {
    __kind: 'set_ongoing_time_unit_update_interval'
    currencyId: CurrencyId
    maybeInterval?: (number | undefined)
}

/**
 * *****************************
 * ****** Storage Setters ******
 * *****************************
 * Update storage OperateOrigins<T>.
 */
export interface SlpCall_set_operate_origin {
    __kind: 'set_operate_origin'
    currencyId: CurrencyId
    who?: (AccountId32 | undefined)
}

/**
 * Reset the whole storage Validator_boost_list<T>.
 */
export interface SlpCall_set_validator_boost_list {
    __kind: 'set_validator_boost_list'
    currencyId: CurrencyId
    validatorList: V3MultiLocation[]
}

/**
 * Update storage ValidatorsByDelegator<T>.
 */
export interface SlpCall_set_validators_by_delegator {
    __kind: 'set_validators_by_delegator'
    currencyId: CurrencyId
    who: V3MultiLocation
    validators: V3MultiLocation[]
}

export interface SlpCall_supplement_fee_reserve {
    __kind: 'supplement_fee_reserve'
    currencyId: CurrencyId
    dest: V3MultiLocation
}

export interface SlpCall_transfer_back {
    __kind: 'transfer_back'
    currencyId: CurrencyId
    from: V3MultiLocation
    to: V3MultiLocation
    amount: bigint
    weightAndFee?: ([Weight, bigint] | undefined)
}

export interface SlpCall_transfer_to {
    __kind: 'transfer_to'
    currencyId: CurrencyId
    from: V3MultiLocation
    to: V3MultiLocation
    amount: bigint
}

/**
 * Decrease some amount to a delegator. Leave no less than the minimum delegator
 * requirement.
 */
export interface SlpCall_unbond {
    __kind: 'unbond'
    currencyId: CurrencyId
    who: V3MultiLocation
    validator?: (V3MultiLocation | undefined)
    amount: bigint
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * Unbond all the active amount of a delegator.
 */
export interface SlpCall_unbond_all {
    __kind: 'unbond_all'
    currencyId: CurrencyId
    who: V3MultiLocation
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * Re-delegate existing delegation to a new validator set.
 */
export interface SlpCall_undelegate {
    __kind: 'undelegate'
    currencyId: CurrencyId
    who: V3MultiLocation
    targets: V3MultiLocation[]
    weightAndFee?: ([Weight, bigint] | undefined)
}

export interface SlpCall_update_ongoing_time_unit {
    __kind: 'update_ongoing_time_unit'
    currencyId: CurrencyId
    timeUnit: TimeUnit
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
        aura: Public,
    }
})

export const Public = sts.bytes()

export interface SessionKeys {
    aura: Public
}

export type Public = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

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
        cancel_retry: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
        }),
        cancel_retry_named: sts.enumStruct({
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
        set_retry: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            retries: sts.number(),
            period: sts.number(),
        }),
        set_retry_named: sts.enumStruct({
            id: sts.bytes(),
            retries: sts.number(),
            period: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_cancel_retry | SchedulerCall_cancel_retry_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after | SchedulerCall_set_retry | SchedulerCall_set_retry_named

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 * Removes the retry configuration of a task.
 */
export interface SchedulerCall_cancel_retry {
    __kind: 'cancel_retry'
    task: [number, number]
}

/**
 * Cancel the retry configuration of a named task.
 */
export interface SchedulerCall_cancel_retry_named {
    __kind: 'cancel_retry_named'
    id: Bytes
}

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Anonymously schedule a task after a delay.
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Schedule a named task.
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
 * Schedule a named task after a delay.
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
 * Set a retry configuration for a task so that, in case its scheduled run fails, it will
 * be retried after `period` blocks, for a total amount of `retries` retries or until it
 * succeeds.
 * 
 * Tasks which need to be scheduled for a retry are still subject to weight metering and
 * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
 * normally while the task is retrying.
 * 
 * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
 * clones of the original task. Their retry configuration will be derived from the
 * original task's configuration, but will have a lower value for `remaining` than the
 * original `total_retries`.
 */
export interface SchedulerCall_set_retry {
    __kind: 'set_retry'
    task: [number, number]
    retries: number
    period: number
}

/**
 * Set a retry configuration for a named task so that, in case its scheduled run fails, it
 * will be retried after `period` blocks, for a total amount of `retries` retries or until
 * it succeeds.
 * 
 * Tasks which need to be scheduled for a retry are still subject to weight metering and
 * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
 * normally while the task is retrying.
 * 
 * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
 * clones of the original task. Their retry configuration will be derived from the
 * original task's configuration, but will have a lower value for `remaining` than the
 * original `total_retries`.
 */
export interface SchedulerCall_set_retry_named {
    __kind: 'set_retry_named'
    id: Bytes
    retries: number
    period: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SalpCall: sts.Type<SalpCall> = sts.closedEnum(() => {
    return  {
        batch_handle_reserve: sts.enumStruct({
            index: sts.number(),
        }),
        batch_unlock: sts.enumStruct({
            index: sts.number(),
        }),
        buyback: sts.enumStruct({
            value: sts.bigint(),
        }),
        buyback_vstoken_by_stable_pool: sts.enumStruct({
            poolId: sts.number(),
            currencyIdIn: CurrencyId,
            value: sts.bigint(),
        }),
        cancel_reservation: sts.enumStruct({
            index: sts.number(),
        }),
        confirm_contribute: sts.enumStruct({
            queryId: sts.bigint(),
            isSuccess: sts.boolean(),
        }),
        confirm_contribution: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
        }),
        continue_fund: sts.enumStruct({
            index: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        }),
        contribute: sts.enumStruct({
            index: sts.number(),
            value: sts.bigint(),
        }),
        create: sts.enumStruct({
            index: sts.number(),
            cap: sts.bigint(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        }),
        dissolve: sts.enumStruct({
            index: sts.number(),
        }),
        dissolve_refunded: sts.enumStruct({
            index: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        }),
        edit: sts.enumStruct({
            index: sts.number(),
            cap: sts.bigint(),
            raised: sts.bigint(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            fundStatus: sts.option(() => FundStatus),
        }),
        fund_end: sts.enumStruct({
            index: sts.number(),
        }),
        fund_fail: sts.enumStruct({
            index: sts.number(),
        }),
        fund_retire: sts.enumStruct({
            index: sts.number(),
        }),
        fund_success: sts.enumStruct({
            index: sts.number(),
        }),
        redeem: sts.enumStruct({
            index: sts.number(),
            value: sts.bigint(),
        }),
        refund: sts.enumStruct({
            index: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            value: sts.bigint(),
        }),
        reserve: sts.enumStruct({
            index: sts.number(),
            value: sts.bigint(),
            ifMint: sts.boolean(),
        }),
        set_multisig_confirm_account: sts.enumStruct({
            account: AccountId32,
        }),
        unlock: sts.enumStruct({
            who: AccountId32,
            index: sts.number(),
        }),
        unlock_by_vsbond: sts.enumStruct({
            who: AccountId32,
            vsbond: CurrencyId,
        }),
        unlock_vstoken: sts.enumStruct({
            who: AccountId32,
        }),
        withdraw: sts.enumStruct({
            index: sts.number(),
        }),
    }
})

export const FundStatus: sts.Type<FundStatus> = sts.closedEnum(() => {
    return  {
        End: sts.unit(),
        Failed: sts.unit(),
        FailedToContinue: sts.unit(),
        Ongoing: sts.unit(),
        RedeemWithdrew: sts.unit(),
        RefundWithdrew: sts.unit(),
        Retired: sts.unit(),
        Success: sts.unit(),
    }
})

export type FundStatus = FundStatus_End | FundStatus_Failed | FundStatus_FailedToContinue | FundStatus_Ongoing | FundStatus_RedeemWithdrew | FundStatus_RefundWithdrew | FundStatus_Retired | FundStatus_Success

export interface FundStatus_End {
    __kind: 'End'
}

export interface FundStatus_Failed {
    __kind: 'Failed'
}

export interface FundStatus_FailedToContinue {
    __kind: 'FailedToContinue'
}

export interface FundStatus_Ongoing {
    __kind: 'Ongoing'
}

export interface FundStatus_RedeemWithdrew {
    __kind: 'RedeemWithdrew'
}

export interface FundStatus_RefundWithdrew {
    __kind: 'RefundWithdrew'
}

export interface FundStatus_Retired {
    __kind: 'Retired'
}

export interface FundStatus_Success {
    __kind: 'Success'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SalpCall = SalpCall_batch_handle_reserve | SalpCall_batch_unlock | SalpCall_buyback | SalpCall_buyback_vstoken_by_stable_pool | SalpCall_cancel_reservation | SalpCall_confirm_contribute | SalpCall_confirm_contribution | SalpCall_continue_fund | SalpCall_contribute | SalpCall_create | SalpCall_dissolve | SalpCall_dissolve_refunded | SalpCall_edit | SalpCall_fund_end | SalpCall_fund_fail | SalpCall_fund_retire | SalpCall_fund_success | SalpCall_redeem | SalpCall_refund | SalpCall_reserve | SalpCall_set_multisig_confirm_account | SalpCall_unlock | SalpCall_unlock_by_vsbond | SalpCall_unlock_vstoken | SalpCall_withdraw

export interface SalpCall_batch_handle_reserve {
    __kind: 'batch_handle_reserve'
    index: number
}

/**
 * Unlock the reserved vsToken/vsBond after fund success
 */
export interface SalpCall_batch_unlock {
    __kind: 'batch_unlock'
    index: number
}

export interface SalpCall_buyback {
    __kind: 'buyback'
    value: bigint
}

export interface SalpCall_buyback_vstoken_by_stable_pool {
    __kind: 'buyback_vstoken_by_stable_pool'
    poolId: number
    currencyIdIn: CurrencyId
    value: bigint
}

export interface SalpCall_cancel_reservation {
    __kind: 'cancel_reservation'
    index: number
}

/**
 * Confirm contribute
 */
export interface SalpCall_confirm_contribute {
    __kind: 'confirm_contribute'
    queryId: bigint
    isSuccess: boolean
}

export interface SalpCall_confirm_contribution {
    __kind: 'confirm_contribution'
    queryId: bigint
    response: V4Response
}

export interface SalpCall_continue_fund {
    __kind: 'continue_fund'
    index: number
    firstSlot: number
    lastSlot: number
}

/**
 * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
 * slot. It will be withdrawable in two instances: the parachain becomes retired; or the
 * slot is unable to be purchased and the timeout expires.
 */
export interface SalpCall_contribute {
    __kind: 'contribute'
    index: number
    value: bigint
}

/**
 * Create a new crowdloaning campaign for a parachain slot deposit for the current auction.
 */
export interface SalpCall_create {
    __kind: 'create'
    index: number
    cap: bigint
    firstSlot: number
    lastSlot: number
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface SalpCall_dissolve {
    __kind: 'dissolve'
    index: number
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface SalpCall_dissolve_refunded {
    __kind: 'dissolve_refunded'
    index: number
    firstSlot: number
    lastSlot: number
}

/**
 * Edit the configuration for an in-progress crowdloan.
 * 
 * Can only be called by Root origin.
 */
export interface SalpCall_edit {
    __kind: 'edit'
    index: number
    cap: bigint
    raised: bigint
    firstSlot: number
    lastSlot: number
    fundStatus?: (FundStatus | undefined)
}

export interface SalpCall_fund_end {
    __kind: 'fund_end'
    index: number
}

export interface SalpCall_fund_fail {
    __kind: 'fund_fail'
    index: number
}

export interface SalpCall_fund_retire {
    __kind: 'fund_retire'
    index: number
}

export interface SalpCall_fund_success {
    __kind: 'fund_success'
    index: number
}

export interface SalpCall_redeem {
    __kind: 'redeem'
    index: number
    value: bigint
}

export interface SalpCall_refund {
    __kind: 'refund'
    index: number
    firstSlot: number
    lastSlot: number
    value: bigint
}

export interface SalpCall_reserve {
    __kind: 'reserve'
    index: number
    value: bigint
    ifMint: boolean
}

export interface SalpCall_set_multisig_confirm_account {
    __kind: 'set_multisig_confirm_account'
    account: AccountId32
}

/**
 * Unlock the reserved vsToken/vsBond after fund success
 */
export interface SalpCall_unlock {
    __kind: 'unlock'
    who: AccountId32
    index: number
}

export interface SalpCall_unlock_by_vsbond {
    __kind: 'unlock_by_vsbond'
    who: AccountId32
    vsbond: CurrencyId
}

export interface SalpCall_unlock_vstoken {
    __kind: 'unlock_vstoken'
    who: AccountId32
}

/**
 * Withdraw full balance of the parachain.
 * - `index`: The parachain to whose crowdloan the contribution was made.
 */
export interface SalpCall_withdraw {
    __kind: 'withdraw'
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ReferendaCall: sts.Type<ReferendaCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            index: sts.number(),
        }),
        kill: sts.enumStruct({
            index: sts.number(),
        }),
        nudge_referendum: sts.enumStruct({
            index: sts.number(),
        }),
        one_fewer_deciding: sts.enumStruct({
            track: sts.number(),
        }),
        place_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_submission_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            index: sts.number(),
            maybeHash: sts.option(() => H256),
        }),
        submit: sts.enumStruct({
            proposalOrigin: OriginCaller,
            proposal: Bounded,
            enactmentMoment: DispatchTime,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ReferendaCall = ReferendaCall_cancel | ReferendaCall_kill | ReferendaCall_nudge_referendum | ReferendaCall_one_fewer_deciding | ReferendaCall_place_decision_deposit | ReferendaCall_refund_decision_deposit | ReferendaCall_refund_submission_deposit | ReferendaCall_set_metadata | ReferendaCall_submit

/**
 * Cancel an ongoing referendum.
 * 
 * - `origin`: must be the `CancelOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Cancelled`.
 */
export interface ReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * Cancel an ongoing referendum and slash the deposits.
 * 
 * - `origin`: must be the `KillOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Killed` and `DepositSlashed`.
 */
export interface ReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * Advance a referendum onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `index`: the referendum to be advanced.
 */
export interface ReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * Advance a track onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `track`: the track to be advanced.
 * 
 * Action item for when there is now one fewer referendum in the deciding phase and the
 * `DecidingCount` is not yet updated. This means that we should either:
 * - begin deciding another referendum (and leave `DecidingCount` alone); or
 * - decrement `DecidingCount`.
 */
export interface ReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * Post the Decision Deposit for a referendum.
 * 
 * - `origin`: must be `Signed` and the account must have funds available for the
 *   referendum's track's Decision Deposit.
 * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
 *   posted.
 * 
 * Emits `DecisionDepositPlaced`.
 */
export interface ReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * Refund the Decision Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
 *   refunded.
 * 
 * Emits `DecisionDepositRefunded`.
 */
export interface ReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * Refund the Submission Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
 *   refunded.
 * 
 * Emits `SubmissionDepositRefunded`.
 */
export interface ReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * Set or clear metadata of a referendum.
 * 
 * Parameters:
 * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
 *   metadata of a finished referendum.
 * - `index`:  The index of a referendum to set or clear metadata for.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface ReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: (H256 | undefined)
}

/**
 * Propose a referendum on a privileged action.
 * 
 * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
 *   available.
 * - `proposal_origin`: The origin from which the proposal should be executed.
 * - `proposal`: The proposal.
 * - `enactment_moment`: The moment that the proposal should be enacted.
 * 
 * Emits `Submitted`.
 */
export interface ReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ProxyCall: sts.Type<ProxyCall> = sts.closedEnum(() => {
    return  {
        add_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        announce: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        create_pure: sts.enumStruct({
            proxyType: ProxyType,
            delay: sts.number(),
            index: sts.number(),
        }),
        kill_pure: sts.enumStruct({
            spawner: MultiAddress,
            proxyType: ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        }),
        proxy: sts.enumStruct({
            real: MultiAddress,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        proxy_announced: sts.enumStruct({
            delegate: MultiAddress,
            real: MultiAddress,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        reject_announcement: sts.enumStruct({
            delegate: MultiAddress,
            callHash: H256,
        }),
        remove_announcement: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        remove_proxies: sts.unit(),
        remove_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ProxyCall = ProxyCall_add_proxy | ProxyCall_announce | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_proxy | ProxyCall_proxy_announced | ProxyCall_reject_announcement | ProxyCall_remove_announcement | ProxyCall_remove_proxies | ProxyCall_remove_proxy

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
    callHash: H256
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
    forceProxyType?: (ProxyType | undefined)
    call: Call
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
    forceProxyType?: (ProxyType | undefined)
    call: Call
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
    callHash: H256
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
    callHash: H256
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PricesCall: sts.Type<PricesCall> = sts.closedEnum(() => {
    return  {
        reset_price: sts.enumStruct({
            assetId: CurrencyId,
        }),
        set_foreign_asset: sts.enumStruct({
            foreignAssetId: CurrencyId,
            assetId: CurrencyId,
        }),
        set_price: sts.enumStruct({
            assetId: CurrencyId,
            price: FixedU128,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PricesCall = PricesCall_reset_price | PricesCall_set_foreign_asset | PricesCall_set_price

/**
 * Reset emergency price
 */
export interface PricesCall_reset_price {
    __kind: 'reset_price'
    assetId: CurrencyId
}

/**
 * Set foreign vault token mapping
 */
export interface PricesCall_set_foreign_asset {
    __kind: 'set_foreign_asset'
    foreignAssetId: CurrencyId
    assetId: CurrencyId
}

/**
 * Set emergency price
 */
export interface PricesCall_set_price {
    __kind: 'set_price'
    assetId: CurrencyId
    price: FixedU128
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PreimageCall: sts.Type<PreimageCall> = sts.closedEnum(() => {
    return  {
        ensure_updated: sts.enumStruct({
            hashes: sts.array(() => H256),
        }),
        note_preimage: sts.enumStruct({
            bytes: sts.bytes(),
        }),
        request_preimage: sts.enumStruct({
            hash: H256,
        }),
        unnote_preimage: sts.enumStruct({
            hash: H256,
        }),
        unrequest_preimage: sts.enumStruct({
            hash: H256,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall = PreimageCall_ensure_updated | PreimageCall_note_preimage | PreimageCall_request_preimage | PreimageCall_unnote_preimage | PreimageCall_unrequest_preimage

/**
 * Ensure that the a bulk of pre-images is upgraded.
 * 
 * The caller pays no fee if at least 90% of pre-images were successfully updated.
 */
export interface PreimageCall_ensure_updated {
    __kind: 'ensure_updated'
    hashes: H256[]
}

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
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
    hash: H256
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PolkadotXcmCall: sts.Type<PolkadotXcmCall> = sts.closedEnum(() => {
    return  {
        claim_assets: sts.enumStruct({
            assets: VersionedAssets,
            beneficiary: VersionedLocation,
        }),
        execute: sts.enumStruct({
            message: Type_221,
            maxWeight: Weight,
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedLocation,
        }),
        force_suspension: sts.enumStruct({
            suspended: sts.boolean(),
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V4Location,
            version: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        reserve_transfer_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
        }),
        send: sts.enumStruct({
            dest: VersionedLocation,
            message: VersionedXcm,
        }),
        teleport_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
        }),
        transfer_assets: sts.enumStruct({
            dest: VersionedLocation,
            beneficiary: VersionedLocation,
            assets: VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        transfer_assets_using_type_and_then: sts.enumStruct({
            dest: VersionedLocation,
            assets: VersionedAssets,
            assetsTransferType: TransferType,
            remoteFeesId: VersionedAssetId,
            feesTransferType: TransferType,
            customXcmOnDest: VersionedXcm,
            weightLimit: V3WeightLimit,
        }),
    }
})

export const Type_221: sts.Type<Type_221> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_224),
        V3: sts.array(() => Type_228),
        V4: sts.array(() => Type_231),
    }
})

export const Type_231: sts.Type<Type_231> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V4Location,
        BurnAsset: sts.array(() => V4Asset),
        BuyExecution: sts.enumStruct({
            fees: V4Asset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            ticket: V4Location,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V4AssetFilter,
            beneficiary: V4Location,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        DescendOrigin: V4Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V4AssetFilter,
            want: sts.array(() => V4Asset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V4Asset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V4Location),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V4NetworkId,
            destination: V4Junctions,
            xcm: sts.array(() => V4Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V4AssetFilter,
            reserve: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V4Asset,
            unlocker: V4Location,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V4Asset,
            owner: V4Location,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V4QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
            maxWeight: Weight,
            querier: sts.option(() => V4Location),
        }),
        ReceiveTeleportedAsset: sts.array(() => V4Asset),
        RefundSurplus: sts.unit(),
        ReportError: V4QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V4QueryResponseInfo,
            assets: V4AssetFilter,
        }),
        ReportTransactStatus: V4QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V4Asset,
            locker: V4Location,
        }),
        ReserveAssetDeposited: sts.array(() => V4Asset),
        SetAppendix: sts.array(() => Type_231),
        SetErrorHandler: sts.array(() => Type_231),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V3OriginKind,
            requireWeightAtMost: Weight,
            call: Type_225,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            beneficiary: V4Location,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V4Junction,
        UnlockAsset: sts.enumStruct({
            asset: V4Asset,
            target: V4Location,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V4Location),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V4Asset),
    }
})

export const Type_225: sts.Type<Type_225> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export interface Type_225 {
    encoded: Bytes
}

export const V3OriginKind: sts.Type<V3OriginKind> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export type V3OriginKind = V3OriginKind_Native | V3OriginKind_SovereignAccount | V3OriginKind_Superuser | V3OriginKind_Xcm

export interface V3OriginKind_Native {
    __kind: 'Native'
}

export interface V3OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V3OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V3OriginKind_Xcm {
    __kind: 'Xcm'
}

export const V4QueryResponseInfo: sts.Type<V4QueryResponseInfo> = sts.struct(() => {
    return  {
        destination: V4Location,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export interface V4QueryResponseInfo {
    destination: V4Location
    queryId: bigint
    maxWeight: Weight
}

export const V4Instruction: sts.Type<V4Instruction> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V4Location,
        BurnAsset: sts.array(() => V4Asset),
        BuyExecution: sts.enumStruct({
            fees: V4Asset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            ticket: V4Location,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V4AssetFilter,
            beneficiary: V4Location,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        DescendOrigin: V4Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V4AssetFilter,
            want: sts.array(() => V4Asset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V4Asset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V4Location),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V4NetworkId,
            destination: V4Junctions,
            xcm: sts.array(() => V4Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V4AssetFilter,
            reserve: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V4AssetFilter,
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V4Asset,
            unlocker: V4Location,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V4Asset,
            owner: V4Location,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V4QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V4Response,
            maxWeight: Weight,
            querier: sts.option(() => V4Location),
        }),
        ReceiveTeleportedAsset: sts.array(() => V4Asset),
        RefundSurplus: sts.unit(),
        ReportError: V4QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V4QueryResponseInfo,
            assets: V4AssetFilter,
        }),
        ReportTransactStatus: V4QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V4Asset,
            locker: V4Location,
        }),
        ReserveAssetDeposited: sts.array(() => V4Asset),
        SetAppendix: sts.array(() => V4Instruction),
        SetErrorHandler: sts.array(() => V4Instruction),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V3OriginKind,
            requireWeightAtMost: Weight,
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            beneficiary: V4Location,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V4Asset),
            dest: V4Location,
            xcm: sts.array(() => V4Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V4Junction,
        UnlockAsset: sts.enumStruct({
            asset: V4Asset,
            target: V4Location,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V4Location),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V4Asset),
    }
})

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export interface DoubleEncoded {
    encoded: Bytes
}

export type V4Instruction = V4Instruction_AliasOrigin | V4Instruction_BurnAsset | V4Instruction_BuyExecution | V4Instruction_ClaimAsset | V4Instruction_ClearError | V4Instruction_ClearOrigin | V4Instruction_ClearTopic | V4Instruction_ClearTransactStatus | V4Instruction_DepositAsset | V4Instruction_DepositReserveAsset | V4Instruction_DescendOrigin | V4Instruction_ExchangeAsset | V4Instruction_ExpectAsset | V4Instruction_ExpectError | V4Instruction_ExpectOrigin | V4Instruction_ExpectPallet | V4Instruction_ExpectTransactStatus | V4Instruction_ExportMessage | V4Instruction_HrmpChannelAccepted | V4Instruction_HrmpChannelClosing | V4Instruction_HrmpNewChannelOpenRequest | V4Instruction_InitiateReserveWithdraw | V4Instruction_InitiateTeleport | V4Instruction_LockAsset | V4Instruction_NoteUnlockable | V4Instruction_QueryPallet | V4Instruction_QueryResponse | V4Instruction_ReceiveTeleportedAsset | V4Instruction_RefundSurplus | V4Instruction_ReportError | V4Instruction_ReportHolding | V4Instruction_ReportTransactStatus | V4Instruction_RequestUnlock | V4Instruction_ReserveAssetDeposited | V4Instruction_SetAppendix | V4Instruction_SetErrorHandler | V4Instruction_SetFeesMode | V4Instruction_SetTopic | V4Instruction_SubscribeVersion | V4Instruction_Transact | V4Instruction_TransferAsset | V4Instruction_TransferReserveAsset | V4Instruction_Trap | V4Instruction_UniversalOrigin | V4Instruction_UnlockAsset | V4Instruction_UnpaidExecution | V4Instruction_UnsubscribeVersion | V4Instruction_WithdrawAsset

export interface V4Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V4Location
}

export interface V4Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V4Asset[]
}

export interface V4Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V4Asset
    weightLimit: V3WeightLimit
}

export interface V4Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V4Asset[]
    ticket: V4Location
}

export interface V4Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V4Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V4Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V4Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V4Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V4AssetFilter
    beneficiary: V4Location
}

export interface V4Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V4Junctions
}

export interface V4Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V4AssetFilter
    want: V4Asset[]
    maximal: boolean
}

export interface V4Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V4Asset[]
}

export interface V4Instruction_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface V4Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V4Location | undefined)
}

export interface V4Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface V4Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V4Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V4NetworkId
    destination: V4Junctions
    xcm: V4Instruction[]
}

export interface V4Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V4Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V4Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V4Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V4AssetFilter
    reserve: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V4Asset
    unlocker: V4Location
}

export interface V4Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V4Asset
    owner: V4Location
}

export interface V4Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V4QueryResponseInfo
}

export interface V4Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V4Response
    maxWeight: Weight
    querier?: (V4Location | undefined)
}

export interface V4Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V4Asset[]
}

export interface V4Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V4Instruction_ReportError {
    __kind: 'ReportError'
    value: V4QueryResponseInfo
}

export interface V4Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V4QueryResponseInfo
    assets: V4AssetFilter
}

export interface V4Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V4QueryResponseInfo
}

export interface V4Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V4Asset
    locker: V4Location
}

export interface V4Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V4Asset[]
}

export interface V4Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V4Instruction[]
}

export interface V4Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V4Instruction[]
}

export interface V4Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V4Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface V4Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V4Instruction_Transact {
    __kind: 'Transact'
    originKind: V3OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V4Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V4Asset[]
    beneficiary: V4Location
}

export interface V4Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V4Asset[]
    dest: V4Location
    xcm: V4Instruction[]
}

export interface V4Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V4Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V4Junction
}

export interface V4Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V4Asset
    target: V4Location
}

export interface V4Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V4Location | undefined)
}

export interface V4Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V4Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V4Asset[]
}

export type V4AssetFilter = V4AssetFilter_Definite | V4AssetFilter_Wild

export interface V4AssetFilter_Definite {
    __kind: 'Definite'
    value: V4Asset[]
}

export interface V4AssetFilter_Wild {
    __kind: 'Wild'
    value: V4WildAsset
}

export type V4WildAsset = V4WildAsset_All | V4WildAsset_AllCounted | V4WildAsset_AllOf | V4WildAsset_AllOfCounted

export interface V4WildAsset_All {
    __kind: 'All'
}

export interface V4WildAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V4WildAsset_AllOf {
    __kind: 'AllOf'
    id: V4AssetId
    fun: V4WildFungibility
}

export interface V4WildAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V4AssetId
    fun: V4WildFungibility
    count: number
}

export type V4WildFungibility = V4WildFungibility_Fungible | V4WildFungibility_NonFungible

export interface V4WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V4WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export const V4AssetFilter: sts.Type<V4AssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V4Asset),
        Wild: V4WildAsset,
    }
})

export const V4WildAsset: sts.Type<V4WildAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllCounted: sts.number(),
        AllOf: sts.enumStruct({
            id: V4AssetId,
            fun: V4WildFungibility,
        }),
        AllOfCounted: sts.enumStruct({
            id: V4AssetId,
            fun: V4WildFungibility,
            count: sts.number(),
        }),
    }
})

export const V4WildFungibility: sts.Type<V4WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export type Type_231 = Type_231_AliasOrigin | Type_231_BurnAsset | Type_231_BuyExecution | Type_231_ClaimAsset | Type_231_ClearError | Type_231_ClearOrigin | Type_231_ClearTopic | Type_231_ClearTransactStatus | Type_231_DepositAsset | Type_231_DepositReserveAsset | Type_231_DescendOrigin | Type_231_ExchangeAsset | Type_231_ExpectAsset | Type_231_ExpectError | Type_231_ExpectOrigin | Type_231_ExpectPallet | Type_231_ExpectTransactStatus | Type_231_ExportMessage | Type_231_HrmpChannelAccepted | Type_231_HrmpChannelClosing | Type_231_HrmpNewChannelOpenRequest | Type_231_InitiateReserveWithdraw | Type_231_InitiateTeleport | Type_231_LockAsset | Type_231_NoteUnlockable | Type_231_QueryPallet | Type_231_QueryResponse | Type_231_ReceiveTeleportedAsset | Type_231_RefundSurplus | Type_231_ReportError | Type_231_ReportHolding | Type_231_ReportTransactStatus | Type_231_RequestUnlock | Type_231_ReserveAssetDeposited | Type_231_SetAppendix | Type_231_SetErrorHandler | Type_231_SetFeesMode | Type_231_SetTopic | Type_231_SubscribeVersion | Type_231_Transact | Type_231_TransferAsset | Type_231_TransferReserveAsset | Type_231_Trap | Type_231_UniversalOrigin | Type_231_UnlockAsset | Type_231_UnpaidExecution | Type_231_UnsubscribeVersion | Type_231_WithdrawAsset

export interface Type_231_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V4Location
}

export interface Type_231_BurnAsset {
    __kind: 'BurnAsset'
    value: V4Asset[]
}

export interface Type_231_BuyExecution {
    __kind: 'BuyExecution'
    fees: V4Asset
    weightLimit: V3WeightLimit
}

export interface Type_231_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V4Asset[]
    ticket: V4Location
}

export interface Type_231_ClearError {
    __kind: 'ClearError'
}

export interface Type_231_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_231_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_231_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_231_DepositAsset {
    __kind: 'DepositAsset'
    assets: V4AssetFilter
    beneficiary: V4Location
}

export interface Type_231_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_231_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V4Junctions
}

export interface Type_231_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V4AssetFilter
    want: V4Asset[]
    maximal: boolean
}

export interface Type_231_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V4Asset[]
}

export interface Type_231_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_231_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V4Location | undefined)
}

export interface Type_231_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_231_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_231_ExportMessage {
    __kind: 'ExportMessage'
    network: V4NetworkId
    destination: V4Junctions
    xcm: V4Instruction[]
}

export interface Type_231_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_231_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_231_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_231_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V4AssetFilter
    reserve: V4Location
    xcm: V4Instruction[]
}

export interface Type_231_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V4AssetFilter
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_231_LockAsset {
    __kind: 'LockAsset'
    asset: V4Asset
    unlocker: V4Location
}

export interface Type_231_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V4Asset
    owner: V4Location
}

export interface Type_231_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V4QueryResponseInfo
}

export interface Type_231_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V4Response
    maxWeight: Weight
    querier?: (V4Location | undefined)
}

export interface Type_231_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V4Asset[]
}

export interface Type_231_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_231_ReportError {
    __kind: 'ReportError'
    value: V4QueryResponseInfo
}

export interface Type_231_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V4QueryResponseInfo
    assets: V4AssetFilter
}

export interface Type_231_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V4QueryResponseInfo
}

export interface Type_231_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V4Asset
    locker: V4Location
}

export interface Type_231_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V4Asset[]
}

export interface Type_231_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_231[]
}

export interface Type_231_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_231[]
}

export interface Type_231_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_231_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_231_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_231_Transact {
    __kind: 'Transact'
    originKind: V3OriginKind
    requireWeightAtMost: Weight
    call: Type_225
}

export interface Type_231_TransferAsset {
    __kind: 'TransferAsset'
    assets: V4Asset[]
    beneficiary: V4Location
}

export interface Type_231_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V4Asset[]
    dest: V4Location
    xcm: V4Instruction[]
}

export interface Type_231_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_231_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V4Junction
}

export interface Type_231_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V4Asset
    target: V4Location
}

export interface Type_231_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V4Location | undefined)
}

export interface Type_231_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_231_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V4Asset[]
}

export const Type_228: sts.Type<Type_228> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => Type_228),
        SetErrorHandler: sts.array(() => Type_228),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V3OriginKind,
            requireWeightAtMost: Weight,
            call: Type_225,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const V3QueryResponseInfo: sts.Type<V3QueryResponseInfo> = sts.struct(() => {
    return  {
        destination: V3MultiLocation,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export const V3Instruction: sts.Type<V3Instruction> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => V3Instruction),
        SetErrorHandler: sts.array(() => V3Instruction),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V3OriginKind,
            requireWeightAtMost: Weight,
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export type V3Instruction = V3Instruction_AliasOrigin | V3Instruction_BurnAsset | V3Instruction_BuyExecution | V3Instruction_ClaimAsset | V3Instruction_ClearError | V3Instruction_ClearOrigin | V3Instruction_ClearTopic | V3Instruction_ClearTransactStatus | V3Instruction_DepositAsset | V3Instruction_DepositReserveAsset | V3Instruction_DescendOrigin | V3Instruction_ExchangeAsset | V3Instruction_ExpectAsset | V3Instruction_ExpectError | V3Instruction_ExpectOrigin | V3Instruction_ExpectPallet | V3Instruction_ExpectTransactStatus | V3Instruction_ExportMessage | V3Instruction_HrmpChannelAccepted | V3Instruction_HrmpChannelClosing | V3Instruction_HrmpNewChannelOpenRequest | V3Instruction_InitiateReserveWithdraw | V3Instruction_InitiateTeleport | V3Instruction_LockAsset | V3Instruction_NoteUnlockable | V3Instruction_QueryPallet | V3Instruction_QueryResponse | V3Instruction_ReceiveTeleportedAsset | V3Instruction_RefundSurplus | V3Instruction_ReportError | V3Instruction_ReportHolding | V3Instruction_ReportTransactStatus | V3Instruction_RequestUnlock | V3Instruction_ReserveAssetDeposited | V3Instruction_SetAppendix | V3Instruction_SetErrorHandler | V3Instruction_SetFeesMode | V3Instruction_SetTopic | V3Instruction_SubscribeVersion | V3Instruction_Transact | V3Instruction_TransferAsset | V3Instruction_TransferReserveAsset | V3Instruction_Trap | V3Instruction_UniversalOrigin | V3Instruction_UnlockAsset | V3Instruction_UnpaidExecution | V3Instruction_UnsubscribeVersion | V3Instruction_WithdrawAsset

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
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

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
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

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
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

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V3OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
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

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
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

export type V3WildMultiAsset = V3WildMultiAsset_All | V3WildMultiAsset_AllCounted | V3WildMultiAsset_AllOf | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export const V3MultiAssetFilter: sts.Type<V3MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V3MultiAsset),
        Wild: V3WildMultiAsset,
    }
})

export const V3WildMultiAsset: sts.Type<V3WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllCounted: sts.number(),
        AllOf: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
        }),
        AllOfCounted: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
            count: sts.number(),
        }),
    }
})

export const V3WildFungibility: sts.Type<V3WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export type Type_228 = Type_228_AliasOrigin | Type_228_BurnAsset | Type_228_BuyExecution | Type_228_ClaimAsset | Type_228_ClearError | Type_228_ClearOrigin | Type_228_ClearTopic | Type_228_ClearTransactStatus | Type_228_DepositAsset | Type_228_DepositReserveAsset | Type_228_DescendOrigin | Type_228_ExchangeAsset | Type_228_ExpectAsset | Type_228_ExpectError | Type_228_ExpectOrigin | Type_228_ExpectPallet | Type_228_ExpectTransactStatus | Type_228_ExportMessage | Type_228_HrmpChannelAccepted | Type_228_HrmpChannelClosing | Type_228_HrmpNewChannelOpenRequest | Type_228_InitiateReserveWithdraw | Type_228_InitiateTeleport | Type_228_LockAsset | Type_228_NoteUnlockable | Type_228_QueryPallet | Type_228_QueryResponse | Type_228_ReceiveTeleportedAsset | Type_228_RefundSurplus | Type_228_ReportError | Type_228_ReportHolding | Type_228_ReportTransactStatus | Type_228_RequestUnlock | Type_228_ReserveAssetDeposited | Type_228_SetAppendix | Type_228_SetErrorHandler | Type_228_SetFeesMode | Type_228_SetTopic | Type_228_SubscribeVersion | Type_228_Transact | Type_228_TransferAsset | Type_228_TransferReserveAsset | Type_228_Trap | Type_228_UniversalOrigin | Type_228_UnlockAsset | Type_228_UnpaidExecution | Type_228_UnsubscribeVersion | Type_228_WithdrawAsset

export interface Type_228_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_228_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_228_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_228_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_228_ClearError {
    __kind: 'ClearError'
}

export interface Type_228_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_228_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_228_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_228_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_228_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_228_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_228_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_228_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_228_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_228_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_228_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_228_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_228_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_228_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_228_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_228_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_228_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_228_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_228_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_228_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_228_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_228_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_228_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_228_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_228_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_228_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_228_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_228_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_228_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_228_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_228[]
}

export interface Type_228_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_228[]
}

export interface Type_228_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_228_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_228_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_228_Transact {
    __kind: 'Transact'
    originKind: V3OriginKind
    requireWeightAtMost: Weight
    call: Type_225
}

export interface Type_228_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_228_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_228_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_228_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_228_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_228_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_228_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_228_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export const Type_224: sts.Type<Type_224> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => Type_224),
        SetErrorHandler: sts.array(() => Type_224),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_225,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

export const V2OriginKind: sts.Type<V2OriginKind> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

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

export const V2Response: sts.Type<V2Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V2MultiAsset),
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V2Error])),
        Null: sts.unit(),
        Version: sts.number(),
    }
})

export const V2Error: sts.Type<V2Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        MultiLocationFull: sts.unit(),
        MultiLocationNotInvertible: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        WeightLimitReached: sts.bigint(),
        WeightNotComputable: sts.unit(),
    }
})

export type V2Error = V2Error_AssetNotFound | V2Error_BadOrigin | V2Error_Barrier | V2Error_DestinationUnsupported | V2Error_ExceedsMaxMessageSize | V2Error_FailedToDecode | V2Error_FailedToTransactAsset | V2Error_InvalidLocation | V2Error_LocationCannotHold | V2Error_MaxWeightInvalid | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_NotHoldingFees | V2Error_NotWithdrawable | V2Error_Overflow | V2Error_TooExpensive | V2Error_Transport | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_Unimplemented | V2Error_UnknownClaim | V2Error_Unroutable | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_WeightLimitReached | V2Error_WeightNotComputable

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V2Response = V2Response_Assets | V2Response_ExecutionResult | V2Response_Null | V2Response_Version

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V2Error] | undefined)
}

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export const V2Instruction: sts.Type<V2Instruction> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => V2Instruction),
        SetErrorHandler: sts.array(() => V2Instruction),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

export type V2Instruction = V2Instruction_BuyExecution | V2Instruction_ClaimAsset | V2Instruction_ClearError | V2Instruction_ClearOrigin | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_DescendOrigin | V2Instruction_ExchangeAsset | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_QueryResponse | V2Instruction_ReceiveTeleportedAsset | V2Instruction_RefundSurplus | V2Instruction_ReportError | V2Instruction_ReserveAssetDeposited | V2Instruction_SetAppendix | V2Instruction_SetErrorHandler | V2Instruction_SubscribeVersion | V2Instruction_Transact | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Trap | V2Instruction_UnsubscribeVersion | V2Instruction_WithdrawAsset

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
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

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
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

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
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

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
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

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
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

export type V2WeightLimit = V2WeightLimit_Limited | V2WeightLimit_Unlimited

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export const V2MultiAssetFilter: sts.Type<V2MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V2MultiAsset),
        Wild: V2WildMultiAsset,
    }
})

export const V2WildMultiAsset: sts.Type<V2WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllOf: sts.enumStruct({
            id: V2AssetId,
            fun: V2WildFungibility,
        }),
    }
})

export const V2WildFungibility: sts.Type<V2WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
    }
})

export type Type_224 = Type_224_BuyExecution | Type_224_ClaimAsset | Type_224_ClearError | Type_224_ClearOrigin | Type_224_DepositAsset | Type_224_DepositReserveAsset | Type_224_DescendOrigin | Type_224_ExchangeAsset | Type_224_HrmpChannelAccepted | Type_224_HrmpChannelClosing | Type_224_HrmpNewChannelOpenRequest | Type_224_InitiateReserveWithdraw | Type_224_InitiateTeleport | Type_224_QueryHolding | Type_224_QueryResponse | Type_224_ReceiveTeleportedAsset | Type_224_RefundSurplus | Type_224_ReportError | Type_224_ReserveAssetDeposited | Type_224_SetAppendix | Type_224_SetErrorHandler | Type_224_SubscribeVersion | Type_224_Transact | Type_224_TransferAsset | Type_224_TransferReserveAsset | Type_224_Trap | Type_224_UnsubscribeVersion | Type_224_WithdrawAsset

export interface Type_224_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_224_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_224_ClearError {
    __kind: 'ClearError'
}

export interface Type_224_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_224_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_224_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_224_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_224_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_224_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_224_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_224_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_224_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_224_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_224_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_224_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_224_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_224_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_224_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_224_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_224_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_224[]
}

export interface Type_224_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_224[]
}

export interface Type_224_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_224_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_225
}

export interface Type_224_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_224_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_224_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_224_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_224_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type Type_221 = Type_221_V2 | Type_221_V3 | Type_221_V4

export interface Type_221_V2 {
    __kind: 'V2'
    value: Type_224[]
}

export interface Type_221_V3 {
    __kind: 'V3'
    value: Type_228[]
}

export interface Type_221_V4 {
    __kind: 'V4'
    value: Type_231[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PolkadotXcmCall = PolkadotXcmCall_claim_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_suspension | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_transfer_assets | PolkadotXcmCall_transfer_assets_using_type_and_then

/**
 * Claims assets trapped on this pallet because of leftover assets during XCM execution.
 * 
 * - `origin`: Anyone can call this extrinsic.
 * - `assets`: The exact assets that were trapped. Use the version to specify what version
 * was the latest when they were trapped.
 * - `beneficiary`: The location/account where the claimed assets will be deposited.
 */
export interface PolkadotXcmCall_claim_assets {
    __kind: 'claim_assets'
    assets: VersionedAssets
    beneficiary: VersionedLocation
}

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than
 * the maximum amount of weight that the message could take to be executed, then no
 * execution attempt will be made.
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_221
    maxWeight: Weight
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedLocation
}

/**
 * Set or unset the global suspension state of the XCM executor.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `suspended`: `true` to suspend, `false` to resume.
 */
export interface PolkadotXcmCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedLocation
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V4Location
    version: number
}

/**
 * Transfer some assets from the local chain to the destination chain through their local,
 * destination or remote reserve.
 * 
 * `assets` must have same reserve location and may not be teleportable to `dest`.
 *  - `assets` have local reserve: transfer assets to sovereign account of destination
 *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *    assets to `beneficiary`.
 *  - `assets` have destination reserve: burn local assets and forward a notification to
 *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *    deposit them to `beneficiary`.
 *  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
 *    reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
 *    to mint and deposit reserve-based assets to `beneficiary`.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the sent assets may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the sent assets may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` chain.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Transfer some assets from the local chain to the destination chain through their local,
 * destination or remote reserve.
 * 
 * `assets` must have same reserve location and may not be teleportable to `dest`.
 *  - `assets` have local reserve: transfer assets to sovereign account of destination
 *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *    assets to `beneficiary`.
 *  - `assets` have destination reserve: burn local assets and forward a notification to
 *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *    deposit them to `beneficiary`.
 *  - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
 *    reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
 *    to mint and deposit reserve-based assets to `beneficiary`.
 * 
 * **This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
}

export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedLocation
    message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * **This function is deprecated: Use `limited_teleport_assets` instead.**
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` chain.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the destination chain through their local,
 * destination or remote reserve, or through teleports.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
 * `weight_limit` of weight. If more weight is needed than `weight_limit`, then the
 * operation will fail and the sent assets may be at risk.
 * 
 * `assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
 * to `dest`, no limitations imposed on `fees`.
 *  - for local reserve: transfer assets to sovereign account of destination chain and
 *    forward a notification XCM to `dest` to mint and deposit reserve-based assets to
 *    `beneficiary`.
 *  - for destination reserve: burn local assets and forward a notification to `dest` chain
 *    to withdraw the reserve assets from this chain's sovereign account and deposit them
 *    to `beneficiary`.
 *  - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
 *    from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
 *    and deposit reserve-based assets to `beneficiary`.
 *  - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
 *    assets and deposit them to `beneficiary`.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent,
 *   Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
 *   from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *   generally be an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_transfer_assets {
    __kind: 'transfer_assets'
    dest: VersionedLocation
    beneficiary: VersionedLocation
    assets: VersionedAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Transfer assets from the local chain to the destination chain using explicit transfer
 * types for assets and fees.
 * 
 * `assets` must have same reserve location or may be teleportable to `dest`. Caller must
 * provide the `assets_transfer_type` to be used for `assets`:
 *  - `TransferType::LocalReserve`: transfer assets to sovereign account of destination
 *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *    assets to `beneficiary`.
 *  - `TransferType::DestinationReserve`: burn local assets and forward a notification to
 *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *    deposit them to `beneficiary`.
 *  - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve`
 *    chain to move reserves from this chain's SA to `dest` chain's SA, and forward another
 *    XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically
 *    the remote `reserve` is Asset Hub.
 *  - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to
 *    mint/teleport assets and deposit them to `beneficiary`.
 * 
 * On the destination chain, as well as any intermediary hops, `BuyExecution` is used to
 * buy execution using transferred `assets` identified by `remote_fees_id`.
 * Make sure enough of the specified `remote_fees_id` asset is included in the given list
 * of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight
 * is needed than `weight_limit`, then the operation will fail and the sent assets may be
 * at risk.
 * 
 * `remote_fees_id` may use different transfer type than rest of `assets` and can be
 * specified through `fees_transfer_type`.
 * 
 * The caller needs to specify what should happen to the transferred assets once they reach
 * the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which
 * contains the instructions to execute on `dest` as a final step.
 *   This is usually as simple as:
 *   `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,
 *   but could be something more exotic like sending the `assets` even further.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `[Parent,
 *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *   relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from
 *   parachain across a bridge to another ecosystem destination.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *   fee on the `dest` (and possibly reserve) chains.
 * - `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.
 * - `remote_fees_id`: One of the included `assets` to be be used to pay fees.
 * - `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.
 * - `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the
 *   transfer, which also determines what happens to the assets on the destination chain.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_transfer_assets_using_type_and_then {
    __kind: 'transfer_assets_using_type_and_then'
    dest: VersionedLocation
    assets: VersionedAssets
    assetsTransferType: TransferType
    remoteFeesId: VersionedAssetId
    feesTransferType: TransferType
    customXcmOnDest: VersionedXcm
    weightLimit: V3WeightLimit
}

export type VersionedAssetId = VersionedAssetId_V3 | VersionedAssetId_V4

export interface VersionedAssetId_V3 {
    __kind: 'V3'
    value: V3AssetId
}

export interface VersionedAssetId_V4 {
    __kind: 'V4'
    value: V4AssetId
}

export type TransferType = TransferType_DestinationReserve | TransferType_LocalReserve | TransferType_RemoteReserve | TransferType_Teleport

export interface TransferType_DestinationReserve {
    __kind: 'DestinationReserve'
}

export interface TransferType_LocalReserve {
    __kind: 'LocalReserve'
}

export interface TransferType_RemoteReserve {
    __kind: 'RemoteReserve'
    value: VersionedLocation
}

export interface TransferType_Teleport {
    __kind: 'Teleport'
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3 | VersionedXcm_V4

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export interface VersionedXcm_V4 {
    __kind: 'V4'
    value: V4Instruction[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PhragmenElectionCall: sts.Type<PhragmenElectionCall> = sts.closedEnum(() => {
    return  {
        clean_defunct_voters: sts.enumStruct({
            numVoters: sts.number(),
            numDefunct: sts.number(),
        }),
        remove_member: sts.enumStruct({
            who: MultiAddress,
            slashBond: sts.boolean(),
            rerunElection: sts.boolean(),
        }),
        remove_voter: sts.unit(),
        renounce_candidacy: sts.enumStruct({
            renouncing: Renouncing,
        }),
        submit_candidacy: sts.enumStruct({
            candidateCount: sts.number(),
        }),
        vote: sts.enumStruct({
            votes: sts.array(() => AccountId32),
            value: sts.bigint(),
        }),
    }
})

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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PhragmenElectionCall = PhragmenElectionCall_clean_defunct_voters | PhragmenElectionCall_remove_member | PhragmenElectionCall_remove_voter | PhragmenElectionCall_renounce_candidacy | PhragmenElectionCall_submit_candidacy | PhragmenElectionCall_vote

/**
 * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 * deposit of the removed voters are returned.
 * 
 * This is an root function to be used only for cleaning the state.
 * 
 * The dispatch origin of this call must be root.
 * 
 * ## Complexity
 * - Check is_defunct_voter() details.
 */
export interface PhragmenElectionCall_clean_defunct_voters {
    __kind: 'clean_defunct_voters'
    numVoters: number
    numDefunct: number
}

/**
 * Remove a particular member from the set. This is effective immediately and the bond of
 * the outgoing member is slashed.
 * 
 * If a runner-up is available, then the best runner-up will be removed and replaces the
 * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
 * started, else, nothing happens.
 * 
 * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
 * it is returned.
 * 
 * The dispatch origin of this call must be root.
 * 
 * Note that this does not affect the designated block number of the next election.
 * 
 * ## Complexity
 * - Check details of remove_and_replace_member() and do_phragmen().
 */
export interface PhragmenElectionCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    slashBond: boolean
    rerunElection: boolean
}

/**
 * Remove `origin` as a voter.
 * 
 * This removes the lock and returns the deposit.
 * 
 * The dispatch origin of this call must be signed and be a voter.
 */
export interface PhragmenElectionCall_remove_voter {
    __kind: 'remove_voter'
}

/**
 * Renounce one's intention to be a candidate for the next election round. 3 potential
 * outcomes exist:
 * 
 * - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *   unreserved, returned and origin is removed as a candidate.
 * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *   origin is removed as a runner-up.
 * - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *   removed as a member, consequently not being a candidate for the next round anymore.
 *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
 *   are immediately used. If the prime is renouncing, then no prime will exist until the
 *   next round.
 * 
 * The dispatch origin of this call must be signed, and have one of the above roles.
 * The type of renouncing must be provided as witness data.
 * 
 * ## Complexity
 *   - Renouncing::Candidate(count): O(count + log(count))
 *   - Renouncing::Member: O(1)
 *   - Renouncing::RunnerUp: O(1)
 */
export interface PhragmenElectionCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
}

/**
 * Submit oneself for candidacy. A fixed amount of deposit is recorded.
 * 
 * All candidates are wiped at the end of the term. They either become a member/runner-up,
 * or leave the system while their deposit is slashed.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 * to get their deposit back. Losing the spot in an election will always lead to a slash.
 * 
 * The number of current candidates must be provided as witness data.
 * ## Complexity
 * O(C + log(C)) where C is candidate_count.
 */
export interface PhragmenElectionCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
}

/**
 * Vote for a set of candidates for the upcoming round of election. This can be called to
 * set the initial votes, or update already existing votes.
 * 
 * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 * reserved. The deposit is based on the number of votes and can be updated over time.
 * 
 * The `votes` should:
 *   - not be empty.
 *   - be less than the number of possible candidates. Note that all current members and
 *     runners-up are also automatically candidates for the next round.
 * 
 * If `value` is more than `who`'s free balance, then the maximum of the two is used.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * It is the responsibility of the caller to **NOT** place all of their balance into the
 * lock and keep some for further operations.
 */
export interface PhragmenElectionCall_vote {
    __kind: 'vote'
    votes: AccountId32[]
    value: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParachainSystemCall: sts.Type<ParachainSystemCall> = sts.closedEnum(() => {
    return  {
        authorize_upgrade: sts.enumStruct({
            codeHash: H256,
            checkVersion: sts.boolean(),
        }),
        enact_authorized_upgrade: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_validation_data: sts.enumStruct({
            data: ParachainInherentData,
        }),
        sudo_send_upward_message: sts.enumStruct({
            message: sts.bytes(),
        }),
    }
})

export const ParachainInherentData: sts.Type<ParachainInherentData> = sts.struct(() => {
    return  {
        validationData: V7PersistedValidationData,
        relayChainState: StorageProof,
        downwardMessages: sts.array(() => InboundDownwardMessage),
        horizontalMessages: sts.array(() => sts.tuple(() => [Id, sts.array(() => InboundHrmpMessage)])),
    }
})

export const InboundHrmpMessage: sts.Type<InboundHrmpMessage> = sts.struct(() => {
    return  {
        sentAt: sts.number(),
        data: sts.bytes(),
    }
})

export interface InboundHrmpMessage {
    sentAt: number
    data: Bytes
}

export const InboundDownwardMessage: sts.Type<InboundDownwardMessage> = sts.struct(() => {
    return  {
        sentAt: sts.number(),
        msg: sts.bytes(),
    }
})

export interface InboundDownwardMessage {
    sentAt: number
    msg: Bytes
}

export const StorageProof: sts.Type<StorageProof> = sts.struct(() => {
    return  {
        trieNodes: sts.array(() => sts.bytes()),
    }
})

export interface StorageProof {
    trieNodes: Bytes[]
}

export const V7PersistedValidationData: sts.Type<V7PersistedValidationData> = sts.struct(() => {
    return  {
        parentHead: HeadData,
        relayParentNumber: sts.number(),
        relayParentStorageRoot: H256,
        maxPovSize: sts.number(),
    }
})

export const HeadData = sts.bytes()

export interface V7PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

export interface ParachainInherentData {
    validationData: V7PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [Id, InboundHrmpMessage[]][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainSystemCall = ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

/**
 * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 * later.
 * 
 * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
 * version and name should be verified on upgrade. Since the authorization only has a hash,
 * it cannot actually perform the verification.
 * 
 * This call requires Root origin.
 */
export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
    checkVersion: boolean
}

/**
 * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
 * 
 * If the authorization required a version check, this call will ensure the spec name
 * remains unchanged and that the spec version has increased.
 * 
 * Note that this function will not apply the new `code`, but only attempt to schedule the
 * upgrade with the Relay Chain.
 * 
 * All origins are allowed.
 */
export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Bytes
}

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
    message: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParachainInfoCall: sts.Type<ParachainInfoCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainInfoCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const OrmlXcmCall: sts.Type<OrmlXcmCall> = sts.closedEnum(() => {
    return  {
        send_as_sovereign: sts.enumStruct({
            dest: VersionedLocation,
            message: VersionedXcm,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 * Send an XCM message as parachain sovereign.
 */
export interface OrmlXcmCall_send_as_sovereign {
    __kind: 'send_as_sovereign'
    dest: VersionedLocation
    message: VersionedXcm
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const OracleMembershipCall: sts.Type<OracleMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        change_key: sts.enumStruct({
            new: MultiAddress,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: MultiAddress,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId32),
        }),
        set_prime: sts.enumStruct({
            who: MultiAddress,
        }),
        swap_member: sts.enumStruct({
            remove: MultiAddress,
            add: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type OracleMembershipCall = OracleMembershipCall_add_member | OracleMembershipCall_change_key | OracleMembershipCall_clear_prime | OracleMembershipCall_remove_member | OracleMembershipCall_reset_members | OracleMembershipCall_set_prime | OracleMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface OracleMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface OracleMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface OracleMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface OracleMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface OracleMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface OracleMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface OracleMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const OracleCall: sts.Type<OracleCall> = sts.closedEnum(() => {
    return  {
        feed_values: sts.enumStruct({
            values: sts.array(() => sts.tuple(() => [CurrencyId, FixedU128])),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type OracleCall = OracleCall_feed_values

/**
 * Feed the external value.
 * 
 * Require authorized operator.
 */
export interface OracleCall_feed_values {
    __kind: 'feed_values'
    values: [CurrencyId, FixedU128][]
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
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
    maxWeight: Weight
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
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

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
    otherSignatories: AccountId32[]
    call: Call
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
    otherSignatories: AccountId32[]
    timepoint: Timepoint
    callHash: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MessageQueueCall: sts.Type<MessageQueueCall> = sts.closedEnum(() => {
    return  {
        execute_overweight: sts.enumStruct({
            messageOrigin: AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: Weight,
        }),
        reap_page: sts.enumStruct({
            messageOrigin: AggregateMessageOrigin,
            pageIndex: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MessageQueueCall = MessageQueueCall_execute_overweight | MessageQueueCall_reap_page

/**
 * Execute an overweight message.
 * 
 * Temporary processing errors will be propagated whereas permanent errors are treated
 * as success condition.
 * 
 * - `origin`: Must be `Signed`.
 * - `message_origin`: The origin from which the message to be executed arrived.
 * - `page`: The page in the queue in which the message to be executed is sitting.
 * - `index`: The index into the queue of the message to be executed.
 * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
 *   of the message.
 * 
 * Benchmark complexity considerations: O(index + weight_limit).
 */
export interface MessageQueueCall_execute_overweight {
    __kind: 'execute_overweight'
    messageOrigin: AggregateMessageOrigin
    page: number
    index: number
    weightLimit: Weight
}

/**
 * Remove a page which has no more messages remaining to be processed or is stale.
 */
export interface MessageQueueCall_reap_page {
    __kind: 'reap_page'
    messageOrigin: AggregateMessageOrigin
    pageIndex: number
}

export type AggregateMessageOrigin = AggregateMessageOrigin_Here | AggregateMessageOrigin_Parent | AggregateMessageOrigin_Sibling

export interface AggregateMessageOrigin_Here {
    __kind: 'Here'
}

export interface AggregateMessageOrigin_Parent {
    __kind: 'Parent'
}

export interface AggregateMessageOrigin_Sibling {
    __kind: 'Sibling'
    value: Id
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MerkleDistributorCall: sts.Type<MerkleDistributorCall> = sts.closedEnum(() => {
    return  {
        add_to_create_whitelist: sts.enumStruct({
            account: AccountId32,
        }),
        charge: sts.enumStruct({
            merkleDistributorId: sts.number(),
        }),
        claim: sts.enumStruct({
            merkleDistributorId: sts.number(),
            index: sts.number(),
            account: MultiAddress,
            amount: sts.bigint(),
            merkleProof: sts.array(() => H256),
        }),
        create_merkle_distributor: sts.enumStruct({
            merkleRoot: H256,
            description: sts.bytes(),
            distributeCurrency: CurrencyId,
            distributeAmount: sts.bigint(),
        }),
        emergency_withdraw: sts.enumStruct({
            merkleDistributorId: sts.number(),
            recipient: MultiAddress,
            amount: sts.bigint(),
        }),
        remove_from_create_whitelist: sts.enumStruct({
            account: AccountId32,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MerkleDistributorCall = MerkleDistributorCall_add_to_create_whitelist | MerkleDistributorCall_charge | MerkleDistributorCall_claim | MerkleDistributorCall_create_merkle_distributor | MerkleDistributorCall_emergency_withdraw | MerkleDistributorCall_remove_from_create_whitelist

export interface MerkleDistributorCall_add_to_create_whitelist {
    __kind: 'add_to_create_whitelist'
    account: AccountId32
}

/**
 * Charge currency to the account of merkle distributor
 * 
 * `merkle_distributor_id`: ID of a merkle distributor.
 */
export interface MerkleDistributorCall_charge {
    __kind: 'charge'
    merkleDistributorId: number
}

/**
 * `claim` Claim rewards through user information and merkle proof.
 * 
 * - `merkle_distributor_id`: ID of a merkle distributor.
 * - `index`: The index of the merkle tree leaf.
 * - `account`: The owner's account of merkle proof.
 * - `merkle_proof`: The hashes with merkle tree leaf can get merkle tree root.
 */
export interface MerkleDistributorCall_claim {
    __kind: 'claim'
    merkleDistributorId: number
    index: number
    account: MultiAddress
    amount: bigint
    merkleProof: H256[]
}

/**
 * `create_merkle_distributor` will create a merkle distributor,
 *  which allow specified users claim asset.
 * 
 * The dispatch origin for this call must be `Signed` by root.
 * 
 * - `merkle_root`: The root of a merkle tree.
 * - `description`: About the purpose of this distribution.
 * - `distribute_currency`: The id of currency about this distribution.
 * - `distribute_amount`: The total currency amount of this distribution.
 */
export interface MerkleDistributorCall_create_merkle_distributor {
    __kind: 'create_merkle_distributor'
    merkleRoot: H256
    description: Bytes
    distributeCurrency: CurrencyId
    distributeAmount: bigint
}

export interface MerkleDistributorCall_emergency_withdraw {
    __kind: 'emergency_withdraw'
    merkleDistributorId: number
    recipient: MultiAddress
    amount: bigint
}

export interface MerkleDistributorCall_remove_from_create_whitelist {
    __kind: 'remove_from_create_whitelist'
    account: AccountId32
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const LeverageStakingCall: sts.Type<LeverageStakingCall> = sts.closedEnum(() => {
    return  {
        flash_loan_deposit: sts.enumStruct({
            assetId: CurrencyId,
            rate: FixedU128,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type LeverageStakingCall = LeverageStakingCall_flash_loan_deposit

export interface LeverageStakingCall_flash_loan_deposit {
    __kind: 'flash_loan_deposit'
    assetId: CurrencyId
    rate: FixedU128
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const LendMarketCall: sts.Type<LendMarketCall> = sts.closedEnum(() => {
    return  {
        activate_market: sts.enumStruct({
            assetId: CurrencyId,
        }),
        add_market: sts.enumStruct({
            assetId: CurrencyId,
            market: Market,
        }),
        add_market_bond: sts.enumStruct({
            assetId: CurrencyId,
            marketBond: sts.array(() => CurrencyId),
        }),
        add_reserves: sts.enumStruct({
            payer: MultiAddress,
            assetId: CurrencyId,
            addAmount: sts.bigint(),
        }),
        add_reward: sts.enumStruct({
            amount: sts.bigint(),
        }),
        borrow: sts.enumStruct({
            assetId: CurrencyId,
            borrowAmount: sts.bigint(),
        }),
        claim_reward: sts.unit(),
        claim_reward_for_market: sts.enumStruct({
            assetId: CurrencyId,
        }),
        collateral_asset: sts.enumStruct({
            assetId: CurrencyId,
            enable: sts.boolean(),
        }),
        force_update_market: sts.enumStruct({
            assetId: CurrencyId,
            market: Market,
        }),
        liquidate_borrow: sts.enumStruct({
            borrower: AccountId32,
            liquidationAssetId: CurrencyId,
            repayAmount: sts.bigint(),
            collateralAssetId: CurrencyId,
        }),
        mint: sts.enumStruct({
            assetId: CurrencyId,
            mintAmount: sts.bigint(),
        }),
        redeem: sts.enumStruct({
            assetId: CurrencyId,
            redeemAmount: sts.bigint(),
        }),
        redeem_all: sts.enumStruct({
            assetId: CurrencyId,
        }),
        reduce_incentive_reserves: sts.enumStruct({
            receiver: MultiAddress,
            assetId: CurrencyId,
            redeemAmount: sts.bigint(),
        }),
        reduce_reserves: sts.enumStruct({
            receiver: MultiAddress,
            assetId: CurrencyId,
            reduceAmount: sts.bigint(),
        }),
        repay_borrow: sts.enumStruct({
            assetId: CurrencyId,
            repayAmount: sts.bigint(),
        }),
        repay_borrow_all: sts.enumStruct({
            assetId: CurrencyId,
        }),
        update_liquidation_free_collateral: sts.enumStruct({
            collaterals: sts.array(() => CurrencyId),
        }),
        update_market: sts.enumStruct({
            assetId: CurrencyId,
            collateralFactor: sts.option(() => Permill),
            liquidationThreshold: sts.option(() => Permill),
            reserveFactor: sts.option(() => Permill),
            closeFactor: sts.option(() => Permill),
            liquidateIncentiveReservedFactor: sts.option(() => Permill),
            liquidateIncentive: sts.option(() => FixedU128),
            supplyCap: sts.option(() => sts.bigint()),
            borrowCap: sts.option(() => sts.bigint()),
        }),
        update_market_reward_speed: sts.enumStruct({
            assetId: CurrencyId,
            supplyRewardPerBlock: sts.option(() => sts.bigint()),
            borrowRewardPerBlock: sts.option(() => sts.bigint()),
        }),
        update_rate_model: sts.enumStruct({
            assetId: CurrencyId,
            rateModel: InterestRateModel,
        }),
        withdraw_missing_reward: sts.enumStruct({
            targetAccount: MultiAddress,
            amount: sts.bigint(),
        }),
    }
})

export const InterestRateModel: sts.Type<InterestRateModel> = sts.closedEnum(() => {
    return  {
        Curve: CurveModel,
        Jump: JumpModel,
    }
})

export const JumpModel: sts.Type<JumpModel> = sts.struct(() => {
    return  {
        baseRate: FixedU128,
        jumpRate: FixedU128,
        fullRate: FixedU128,
        jumpUtilization: Permill,
    }
})

export interface JumpModel {
    baseRate: FixedU128
    jumpRate: FixedU128
    fullRate: FixedU128
    jumpUtilization: Permill
}

export const CurveModel: sts.Type<CurveModel> = sts.struct(() => {
    return  {
        baseRate: FixedU128,
    }
})

export interface CurveModel {
    baseRate: FixedU128
}

export type InterestRateModel = InterestRateModel_Curve | InterestRateModel_Jump

export interface InterestRateModel_Curve {
    __kind: 'Curve'
    value: CurveModel
}

export interface InterestRateModel_Jump {
    __kind: 'Jump'
    value: JumpModel
}

export const Market: sts.Type<Market> = sts.struct(() => {
    return  {
        collateralFactor: Permill,
        liquidationThreshold: Permill,
        reserveFactor: Permill,
        closeFactor: Permill,
        liquidateIncentive: FixedU128,
        liquidateIncentiveReservedFactor: Permill,
        rateModel: InterestRateModel,
        state: MarketState,
        supplyCap: sts.bigint(),
        borrowCap: sts.bigint(),
        lendTokenId: CurrencyId,
    }
})

export const MarketState: sts.Type<MarketState> = sts.closedEnum(() => {
    return  {
        Active: sts.unit(),
        Pending: sts.unit(),
        Supervision: sts.unit(),
    }
})

export type MarketState = MarketState_Active | MarketState_Pending | MarketState_Supervision

export interface MarketState_Active {
    __kind: 'Active'
}

export interface MarketState_Pending {
    __kind: 'Pending'
}

export interface MarketState_Supervision {
    __kind: 'Supervision'
}

export interface Market {
    collateralFactor: Permill
    liquidationThreshold: Permill
    reserveFactor: Permill
    closeFactor: Permill
    liquidateIncentive: FixedU128
    liquidateIncentiveReservedFactor: Permill
    rateModel: InterestRateModel
    state: MarketState
    supplyCap: bigint
    borrowCap: bigint
    lendTokenId: CurrencyId
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type LendMarketCall = LendMarketCall_activate_market | LendMarketCall_add_market | LendMarketCall_add_market_bond | LendMarketCall_add_reserves | LendMarketCall_add_reward | LendMarketCall_borrow | LendMarketCall_claim_reward | LendMarketCall_claim_reward_for_market | LendMarketCall_collateral_asset | LendMarketCall_force_update_market | LendMarketCall_liquidate_borrow | LendMarketCall_mint | LendMarketCall_redeem | LendMarketCall_redeem_all | LendMarketCall_reduce_incentive_reserves | LendMarketCall_reduce_reserves | LendMarketCall_repay_borrow | LendMarketCall_repay_borrow_all | LendMarketCall_update_liquidation_free_collateral | LendMarketCall_update_market | LendMarketCall_update_market_reward_speed | LendMarketCall_update_rate_model | LendMarketCall_withdraw_missing_reward

/**
 * Activates a market. Returns `Err` if the market currency does not exist.
 * 
 * If the market is already activated, does nothing.
 * 
 * - `asset_id`: Market related currency
 */
export interface LendMarketCall_activate_market {
    __kind: 'activate_market'
    assetId: CurrencyId
}

/**
 * Stores a new market and its related currency. Returns `Err` if a currency
 * is not attached to an existent market.
 * 
 * All provided market states must be `Pending`, otherwise an error will be returned.
 * 
 * If a currency is already attached to a market, then the market will be replaced
 * by the new provided value.
 * 
 * The lend token id and asset id are bound, the lend token id of new provided market
 * cannot be duplicated with the existing one, otherwise it will return
 * `InvalidLendTokenId`.
 * 
 * - `asset_id`: Market related currency
 * - `market`: The market that is going to be stored
 */
export interface LendMarketCall_add_market {
    __kind: 'add_market'
    assetId: CurrencyId
    market: Market
}

export interface LendMarketCall_add_market_bond {
    __kind: 'add_market_bond'
    assetId: CurrencyId
    marketBond: CurrencyId[]
}

/**
 * Add reserves by transferring from payer.
 * 
 * May only be called from `T::ReserveOrigin`.
 * 
 * - `payer`: the payer account.
 * - `asset_id`: the assets to be added.
 * - `add_amount`: the amount to be added.
 */
export interface LendMarketCall_add_reserves {
    __kind: 'add_reserves'
    payer: MultiAddress
    assetId: CurrencyId
    addAmount: bigint
}

/**
 * Add reward for the pallet account.
 * 
 * - `amount`: Reward amount added
 */
export interface LendMarketCall_add_reward {
    __kind: 'add_reward'
    amount: bigint
}

/**
 * Sender borrows assets from the protocol to their own address.
 * 
 * - `asset_id`: the asset to be borrowed.
 * - `borrow_amount`: the amount to be borrowed.
 */
export interface LendMarketCall_borrow {
    __kind: 'borrow'
    assetId: CurrencyId
    borrowAmount: bigint
}

/**
 * Claim reward from all market.
 */
export interface LendMarketCall_claim_reward {
    __kind: 'claim_reward'
}

/**
 * Claim reward from the specified market.
 * 
 * - `asset_id`: Market related currency
 */
export interface LendMarketCall_claim_reward_for_market {
    __kind: 'claim_reward_for_market'
    assetId: CurrencyId
}

/**
 * Set the collateral asset.
 * 
 * - `asset_id`: the asset to be set.
 * - `enable`: turn on/off the collateral option.
 */
export interface LendMarketCall_collateral_asset {
    __kind: 'collateral_asset'
    assetId: CurrencyId
    enable: boolean
}

/**
 * Force updates a stored market. Returns `Err` if the market currency
 * does not exist.
 * 
 * - `asset_id`: market related currency
 * - `market`: the new market parameters
 */
export interface LendMarketCall_force_update_market {
    __kind: 'force_update_market'
    assetId: CurrencyId
    market: Market
}

/**
 * The sender liquidates the borrower's collateral.
 * 
 * - `borrower`: the borrower to be liquidated.
 * - `liquidation_asset_id`: the assert to be liquidated.
 * - `repay_amount`: the amount to be repaid borrow.
 * - `collateral_asset_id`: The collateral to seize from the borrower.
 */
export interface LendMarketCall_liquidate_borrow {
    __kind: 'liquidate_borrow'
    borrower: AccountId32
    liquidationAssetId: CurrencyId
    repayAmount: bigint
    collateralAssetId: CurrencyId
}

/**
 * Sender supplies assets into the market and receives internal supplies in exchange.
 * 
 * - `asset_id`: the asset to be deposited.
 * - `mint_amount`: the amount to be deposited.
 */
export interface LendMarketCall_mint {
    __kind: 'mint'
    assetId: CurrencyId
    mintAmount: bigint
}

/**
 * Sender redeems some of internal supplies in exchange for the underlying asset.
 * 
 * - `asset_id`: the asset to be redeemed.
 * - `redeem_amount`: the amount to be redeemed.
 */
export interface LendMarketCall_redeem {
    __kind: 'redeem'
    assetId: CurrencyId
    redeemAmount: bigint
}

/**
 * Sender redeems all of internal supplies in exchange for the underlying asset.
 * 
 * - `asset_id`: the asset to be redeemed.
 */
export interface LendMarketCall_redeem_all {
    __kind: 'redeem_all'
    assetId: CurrencyId
}

/**
 * Sender redeems some of internal supplies in exchange for the underlying asset.
 * 
 * - `asset_id`: the asset to be redeemed.
 * - `redeem_amount`: the amount to be redeemed.
 */
export interface LendMarketCall_reduce_incentive_reserves {
    __kind: 'reduce_incentive_reserves'
    receiver: MultiAddress
    assetId: CurrencyId
    redeemAmount: bigint
}

/**
 * Reduces reserves by transferring to receiver.
 * 
 * May only be called from `T::ReserveOrigin`.
 * 
 * - `receiver`: the receiver account.
 * - `asset_id`: the assets to be reduced.
 * - `reduce_amount`: the amount to be reduced.
 */
export interface LendMarketCall_reduce_reserves {
    __kind: 'reduce_reserves'
    receiver: MultiAddress
    assetId: CurrencyId
    reduceAmount: bigint
}

/**
 * Sender repays some of their debts.
 * 
 * - `asset_id`: the asset to be repaid.
 * - `repay_amount`: the amount to be repaid.
 */
export interface LendMarketCall_repay_borrow {
    __kind: 'repay_borrow'
    assetId: CurrencyId
    repayAmount: bigint
}

/**
 * Sender repays all of their debts.
 * 
 * - `asset_id`: the asset to be repaid.
 */
export interface LendMarketCall_repay_borrow_all {
    __kind: 'repay_borrow_all'
    assetId: CurrencyId
}

/**
 * Update liquidation free collateral.
 * 
 * The `assets` won't be counted when do general
 */
export interface LendMarketCall_update_liquidation_free_collateral {
    __kind: 'update_liquidation_free_collateral'
    collaterals: CurrencyId[]
}

/**
 * Updates a stored market. Returns `Err` if the market currency does not exist.
 * 
 * - `asset_id`: market related currency
 * - `collateral_factor`: the collateral utilization ratio
 * - `reserve_factor`: fraction of interest currently set aside for reserves
 * - `close_factor`: maximum liquidation ratio at one time
 * - `liquidate_incentive`: liquidation incentive ratio
 * - `cap`: market capacity
 */
export interface LendMarketCall_update_market {
    __kind: 'update_market'
    assetId: CurrencyId
    collateralFactor?: (Permill | undefined)
    liquidationThreshold?: (Permill | undefined)
    reserveFactor?: (Permill | undefined)
    closeFactor?: (Permill | undefined)
    liquidateIncentiveReservedFactor?: (Permill | undefined)
    liquidateIncentive?: (FixedU128 | undefined)
    supplyCap?: (bigint | undefined)
    borrowCap?: (bigint | undefined)
}

/**
 * Updates reward speed for the specified market
 * 
 * The origin must conform to `UpdateOrigin`.
 * 
 * - `asset_id`: Market related currency
 * - `reward_per_block`: reward amount per block.
 */
export interface LendMarketCall_update_market_reward_speed {
    __kind: 'update_market_reward_speed'
    assetId: CurrencyId
    supplyRewardPerBlock?: (bigint | undefined)
    borrowRewardPerBlock?: (bigint | undefined)
}

/**
 * Updates the rate model of a stored market. Returns `Err` if the market
 * currency does not exist or the rate model is invalid.
 * 
 * - `asset_id`: Market related currency
 * - `rate_model`: The new rate model to be updated
 */
export interface LendMarketCall_update_rate_model {
    __kind: 'update_rate_model'
    assetId: CurrencyId
    rateModel: InterestRateModel
}

/**
 * Withdraw reward token from pallet account.
 * 
 * The origin must conform to `UpdateOrigin`.
 * 
 * - `target_account`: account receive reward token.
 * - `amount`: Withdraw amount
 */
export interface LendMarketCall_withdraw_missing_reward {
    __kind: 'withdraw_missing_reward'
    targetAccount: MultiAddress
    amount: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const IndicesCall: sts.Type<IndicesCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            index: sts.number(),
        }),
        force_transfer: sts.enumStruct({
            new: MultiAddress,
            index: sts.number(),
            freeze: sts.boolean(),
        }),
        free: sts.enumStruct({
            index: sts.number(),
        }),
        freeze: sts.enumStruct({
            index: sts.number(),
        }),
        transfer: sts.enumStruct({
            new: MultiAddress,
            index: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type IndicesCall = IndicesCall_claim | IndicesCall_force_transfer | IndicesCall_free | IndicesCall_freeze | IndicesCall_transfer

/**
 * Assign an previously unassigned index.
 * 
 * Payment: `Deposit` is reserved from the sender account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `index`: the index to be claimed. This must not be in use.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: number
}

/**
 * Force an index to an account. This doesn't require a deposit. If the index is already
 * held, then any deposit is reimbursed to its current owner.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `index`: the index to be (re-)assigned.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: MultiAddress
    index: number
    freeze: boolean
}

/**
 * Free up an index owned by the sender.
 * 
 * Payment: Any previous deposit placed for the index is unreserved in the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must own the index.
 * 
 * - `index`: the index to be freed. This must be owned by the sender.
 * 
 * Emits `IndexFreed` if successful.
 * 
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: number
}

/**
 * Freeze an index so it will always point to the sender account. This consumes the
 * deposit.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must have a
 * non-frozen account `index`.
 * 
 * - `index`: the index to be frozen in place.
 * 
 * Emits `IndexFrozen` if successful.
 * 
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: number
}

/**
 * Assign an index already owned by the sender to another account. The balance reservation
 * is effectively transferred to the new account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `index`: the index to be re-assigned. This must be owned by the sender.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: MultiAddress
    index: number
}

/**
 * Identity pallet declaration.
 */
export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return  {
        accept_username: sts.enumStruct({
            username: sts.bytes(),
        }),
        add_registrar: sts.enumStruct({
            account: MultiAddress,
        }),
        add_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        add_username_authority: sts.enumStruct({
            authority: MultiAddress,
            suffix: sts.bytes(),
            allocation: sts.number(),
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
        remove_dangling_username: sts.enumStruct({
            username: sts.bytes(),
        }),
        remove_expired_approval: sts.enumStruct({
            username: sts.bytes(),
        }),
        remove_sub: sts.enumStruct({
            sub: MultiAddress,
        }),
        remove_username_authority: sts.enumStruct({
            authority: MultiAddress,
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
            fields: sts.bigint(),
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_primary_username: sts.enumStruct({
            username: sts.bytes(),
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId32, Data])),
        }),
        set_username_for: sts.enumStruct({
            who: MultiAddress,
            username: sts.bytes(),
            signature: sts.option(() => MultiSignature),
        }),
    }
})

export const MultiSignature: sts.Type<MultiSignature> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export type MultiSignature = MultiSignature_Ecdsa | MultiSignature_Ed25519 | MultiSignature_Sr25519

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

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
export type IdentityCall = IdentityCall_accept_username | IdentityCall_add_registrar | IdentityCall_add_sub | IdentityCall_add_username_authority | IdentityCall_cancel_request | IdentityCall_clear_identity | IdentityCall_kill_identity | IdentityCall_provide_judgement | IdentityCall_quit_sub | IdentityCall_remove_dangling_username | IdentityCall_remove_expired_approval | IdentityCall_remove_sub | IdentityCall_remove_username_authority | IdentityCall_rename_sub | IdentityCall_request_judgement | IdentityCall_set_account_id | IdentityCall_set_fee | IdentityCall_set_fields | IdentityCall_set_identity | IdentityCall_set_primary_username | IdentityCall_set_subs | IdentityCall_set_username_for

/**
 * Accept a given username that an `authority` granted. The call must include the full
 * username, as in `username.suffix`.
 */
export interface IdentityCall_accept_username {
    __kind: 'accept_username'
    username: Bytes
}

/**
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
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
 * Add an `AccountId` with permission to grant usernames with a given `suffix` appended.
 * 
 * The authority can grant up to `allocation` usernames. To top up their allocation, they
 * should just issue (or request via governance) a new `add_username_authority` call.
 */
export interface IdentityCall_add_username_authority {
    __kind: 'add_username_authority'
    authority: MultiAddress
    suffix: Bytes
    allocation: number
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
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
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
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
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
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
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
 * - `identity`: The hash of the [`IdentityInformationProvider`] for that the judgement is
 *   provided.
 * 
 * Note: Judgements do not apply to a username.
 * 
 * Emits `JudgementGiven` if successful.
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: H256
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
 * Remove a username that corresponds to an account with no identity. Exists when a user
 * gets a username but then calls `clear_identity`.
 */
export interface IdentityCall_remove_dangling_username {
    __kind: 'remove_dangling_username'
    username: Bytes
}

/**
 * Remove an expired username approval. The username was approved by an authority but never
 * accepted by the user and must now be beyond its expiration. The call must include the
 * full username, as in `username.suffix`.
 */
export interface IdentityCall_remove_expired_approval {
    __kind: 'remove_expired_approval'
    username: Bytes
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
 * Remove `authority` from the username authorities.
 */
export interface IdentityCall_remove_username_authority {
    __kind: 'remove_username_authority'
    authority: MultiAddress
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
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * Change the account associated with a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * Set the field information for a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
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
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * Set a given username as the primary. The username should include the suffix.
 */
export interface IdentityCall_set_primary_username {
    __kind: 'set_primary_username'
    username: Bytes
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
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [AccountId32, Data][]
}

/**
 * Set the username for `who`. Must be called by a username authority.
 * 
 * The authority must have an `allocation`. Users can either pre-sign their usernames or
 * accept them later.
 * 
 * Usernames must:
 *   - Only contain lowercase ASCII characters or digits.
 *   - When combined with the suffix of the issuing authority be _less than_ the
 *     `MaxUsernameLength`.
 */
export interface IdentityCall_set_username_for {
    __kind: 'set_username_for'
    who: MultiAddress
    username: Bytes
    signature?: (MultiSignature | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FlexibleFeeCall: sts.Type<FlexibleFeeCall> = sts.closedEnum(() => {
    return  {
        set_universal_fee_currency_order_list: sts.enumStruct({
            defaultList: sts.array(() => CurrencyId),
        }),
        set_user_default_fee_currency: sts.enumStruct({
            maybeFeeCurrency: sts.option(() => CurrencyId),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FlexibleFeeCall = FlexibleFeeCall_set_universal_fee_currency_order_list | FlexibleFeeCall_set_user_default_fee_currency

/**
 * Set universal fee currency order list
 */
export interface FlexibleFeeCall_set_universal_fee_currency_order_list {
    __kind: 'set_universal_fee_currency_order_list'
    defaultList: CurrencyId[]
}

/**
 * Set user default fee currency
 */
export interface FlexibleFeeCall_set_user_default_fee_currency {
    __kind: 'set_user_default_fee_currency'
    maybeFeeCurrency?: (CurrencyId | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FellowshipReferendaCall: sts.Type<FellowshipReferendaCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            index: sts.number(),
        }),
        kill: sts.enumStruct({
            index: sts.number(),
        }),
        nudge_referendum: sts.enumStruct({
            index: sts.number(),
        }),
        one_fewer_deciding: sts.enumStruct({
            track: sts.number(),
        }),
        place_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_submission_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            index: sts.number(),
            maybeHash: sts.option(() => H256),
        }),
        submit: sts.enumStruct({
            proposalOrigin: OriginCaller,
            proposal: Bounded,
            enactmentMoment: DispatchTime,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FellowshipReferendaCall = FellowshipReferendaCall_cancel | FellowshipReferendaCall_kill | FellowshipReferendaCall_nudge_referendum | FellowshipReferendaCall_one_fewer_deciding | FellowshipReferendaCall_place_decision_deposit | FellowshipReferendaCall_refund_decision_deposit | FellowshipReferendaCall_refund_submission_deposit | FellowshipReferendaCall_set_metadata | FellowshipReferendaCall_submit

/**
 * Cancel an ongoing referendum.
 * 
 * - `origin`: must be the `CancelOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Cancelled`.
 */
export interface FellowshipReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * Cancel an ongoing referendum and slash the deposits.
 * 
 * - `origin`: must be the `KillOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Killed` and `DepositSlashed`.
 */
export interface FellowshipReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * Advance a referendum onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `index`: the referendum to be advanced.
 */
export interface FellowshipReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * Advance a track onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `track`: the track to be advanced.
 * 
 * Action item for when there is now one fewer referendum in the deciding phase and the
 * `DecidingCount` is not yet updated. This means that we should either:
 * - begin deciding another referendum (and leave `DecidingCount` alone); or
 * - decrement `DecidingCount`.
 */
export interface FellowshipReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * Post the Decision Deposit for a referendum.
 * 
 * - `origin`: must be `Signed` and the account must have funds available for the
 *   referendum's track's Decision Deposit.
 * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
 *   posted.
 * 
 * Emits `DecisionDepositPlaced`.
 */
export interface FellowshipReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * Refund the Decision Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
 *   refunded.
 * 
 * Emits `DecisionDepositRefunded`.
 */
export interface FellowshipReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * Refund the Submission Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
 *   refunded.
 * 
 * Emits `SubmissionDepositRefunded`.
 */
export interface FellowshipReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * Set or clear metadata of a referendum.
 * 
 * Parameters:
 * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
 *   metadata of a finished referendum.
 * - `index`:  The index of a referendum to set or clear metadata for.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface FellowshipReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: (H256 | undefined)
}

/**
 * Propose a referendum on a privileged action.
 * 
 * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
 *   available.
 * - `proposal_origin`: The origin from which the proposal should be executed.
 * - `proposal`: The proposal.
 * - `enactment_moment`: The moment that the proposal should be enacted.
 * 
 * Emits `Submitted`.
 */
export interface FellowshipReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FellowshipCollectiveCall: sts.Type<FellowshipCollectiveCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        cleanup_poll: sts.enumStruct({
            pollIndex: sts.number(),
            max: sts.number(),
        }),
        demote_member: sts.enumStruct({
            who: MultiAddress,
        }),
        exchange_member: sts.enumStruct({
            who: MultiAddress,
            newWho: MultiAddress,
        }),
        promote_member: sts.enumStruct({
            who: MultiAddress,
        }),
        remove_member: sts.enumStruct({
            who: MultiAddress,
            minRank: sts.number(),
        }),
        vote: sts.enumStruct({
            poll: sts.number(),
            aye: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FellowshipCollectiveCall = FellowshipCollectiveCall_add_member | FellowshipCollectiveCall_cleanup_poll | FellowshipCollectiveCall_demote_member | FellowshipCollectiveCall_exchange_member | FellowshipCollectiveCall_promote_member | FellowshipCollectiveCall_remove_member | FellowshipCollectiveCall_vote

/**
 * Introduce a new member.
 * 
 * - `origin`: Must be the `AddOrigin`.
 * - `who`: Account of non-member which will become a member.
 * 
 * Weight: `O(1)`
 */
export interface FellowshipCollectiveCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Remove votes from the given poll. It must have ended.
 * 
 * - `origin`: Must be `Signed` by any account.
 * - `poll_index`: Index of a poll which is completed and for which votes continue to
 *   exist.
 * - `max`: Maximum number of vote items from remove in this call.
 * 
 * Transaction fees are waived if the operation is successful.
 * 
 * Weight `O(max)` (less if there are fewer items to remove than `max`).
 */
export interface FellowshipCollectiveCall_cleanup_poll {
    __kind: 'cleanup_poll'
    pollIndex: number
    max: number
}

/**
 * Decrement the rank of an existing member by one. If the member is already at rank zero,
 * then they are removed entirely.
 * 
 * - `origin`: Must be the `DemoteOrigin`.
 * - `who`: Account of existing member of rank greater than zero.
 * 
 * Weight: `O(1)`, less if the member's index is highest in its rank.
 */
export interface FellowshipCollectiveCall_demote_member {
    __kind: 'demote_member'
    who: MultiAddress
}

/**
 * Exchanges a member with a new account and the same existing rank.
 * 
 * - `origin`: Must be the `ExchangeOrigin`.
 * - `who`: Account of existing member of rank greater than zero to be exchanged.
 * - `new_who`: New Account of existing member of rank greater than zero to exchanged to.
 */
export interface FellowshipCollectiveCall_exchange_member {
    __kind: 'exchange_member'
    who: MultiAddress
    newWho: MultiAddress
}

/**
 * Increment the rank of an existing member by one.
 * 
 * - `origin`: Must be the `PromoteOrigin`.
 * - `who`: Account of existing member.
 * 
 * Weight: `O(1)`
 */
export interface FellowshipCollectiveCall_promote_member {
    __kind: 'promote_member'
    who: MultiAddress
}

/**
 * Remove the member entirely.
 * 
 * - `origin`: Must be the `RemoveOrigin`.
 * - `who`: Account of existing member of rank greater than zero.
 * - `min_rank`: The rank of the member or greater.
 * 
 * Weight: `O(min_rank)`.
 */
export interface FellowshipCollectiveCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    minRank: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * - `origin`: Must be `Signed` by a member account.
 * - `poll`: Index of a poll which is ongoing.
 * - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
 * 
 * Transaction fees are be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * 
 * Weight: `O(1)`, less if there was no previous vote on the poll by the member.
 */
export interface FellowshipCollectiveCall_vote {
    __kind: 'vote'
    poll: number
    aye: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FeeShareCall: sts.Type<FeeShareCall> = sts.closedEnum(() => {
    return  {
        create_distribution: sts.enumStruct({
            tokenType: sts.array(() => CurrencyId),
            tokensProportion: sts.array(() => sts.tuple(() => [AccountId32, Perbill])),
            ifAuto: sts.boolean(),
        }),
        delete_distribution: sts.enumStruct({
            distributionId: sts.number(),
        }),
        edit_distribution: sts.enumStruct({
            distributionId: sts.number(),
            tokenType: sts.option(() => sts.array(() => CurrencyId)),
            tokensProportion: sts.option(() => sts.array(() => sts.tuple(() => [AccountId32, Perbill]))),
            ifAuto: sts.option(() => sts.boolean()),
        }),
        execute_distribute: sts.enumStruct({
            distributionId: sts.number(),
        }),
        set_era_length: sts.enumStruct({
            eraLength: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FeeShareCall = FeeShareCall_create_distribution | FeeShareCall_delete_distribution | FeeShareCall_edit_distribution | FeeShareCall_execute_distribute | FeeShareCall_set_era_length

export interface FeeShareCall_create_distribution {
    __kind: 'create_distribution'
    tokenType: CurrencyId[]
    tokensProportion: [AccountId32, Perbill][]
    ifAuto: boolean
}

export interface FeeShareCall_delete_distribution {
    __kind: 'delete_distribution'
    distributionId: number
}

export interface FeeShareCall_edit_distribution {
    __kind: 'edit_distribution'
    distributionId: number
    tokenType?: (CurrencyId[] | undefined)
    tokensProportion?: ([AccountId32, Perbill][] | undefined)
    ifAuto?: (boolean | undefined)
}

export interface FeeShareCall_execute_distribute {
    __kind: 'execute_distribute'
    distributionId: number
}

export interface FeeShareCall_set_era_length {
    __kind: 'set_era_length'
    eraLength: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FarmingCall: sts.Type<FarmingCall> = sts.closedEnum(() => {
    return  {
        add_boost_pool_whitelist: sts.enumStruct({
            whitelist: sts.array(() => sts.number()),
        }),
        charge: sts.enumStruct({
            pid: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
            ifGauge: sts.boolean(),
        }),
        charge_boost: sts.enumStruct({
            rewards: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
        }),
        claim: sts.enumStruct({
            pid: sts.number(),
        }),
        close_pool: sts.enumStruct({
            pid: sts.number(),
        }),
        create_farming_pool: sts.enumStruct({
            tokensProportion: sts.array(() => sts.tuple(() => [CurrencyId, Perbill])),
            basicRewards: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
            gaugeInit: sts.option(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))])),
            minDepositToStart: sts.bigint(),
            afterBlockToStart: sts.number(),
            withdrawLimitTime: sts.number(),
            claimLimitTime: sts.number(),
            withdrawLimitCount: sts.number(),
        }),
        deposit: sts.enumStruct({
            pid: sts.number(),
            addValue: sts.bigint(),
            gaugeInfo: sts.option(() => sts.tuple(() => [sts.bigint(), sts.number()])),
        }),
        edit_pool: sts.enumStruct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            gaugeBasicRewards: sts.option(() => sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))),
            withdrawLimitCount: sts.option(() => sts.number()),
        }),
        end_boost_round: sts.unit(),
        force_gauge_claim: sts.enumStruct({
            gid: sts.number(),
        }),
        force_retire_pool: sts.enumStruct({
            pid: sts.number(),
        }),
        gauge_withdraw: sts.enumStruct({
            gid: sts.number(),
        }),
        kill_pool: sts.enumStruct({
            pid: sts.number(),
        }),
        reset_pool: sts.enumStruct({
            pid: sts.number(),
            basicRewards: sts.option(() => sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))),
            minDepositToStart: sts.option(() => sts.bigint()),
            afterBlockToStart: sts.option(() => sts.number()),
            withdrawLimitTime: sts.option(() => sts.number()),
            claimLimitTime: sts.option(() => sts.number()),
            withdrawLimitCount: sts.option(() => sts.number()),
            gaugeInit: sts.option(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))])),
        }),
        set_next_round_whitelist: sts.enumStruct({
            whitelist: sts.array(() => sts.number()),
        }),
        set_retire_limit: sts.enumStruct({
            limit: sts.number(),
        }),
        start_boost_round: sts.enumStruct({
            roundLength: sts.number(),
        }),
        vote: sts.enumStruct({
            voteList: sts.array(() => sts.tuple(() => [sts.number(), Percent])),
        }),
        withdraw: sts.enumStruct({
            pid: sts.number(),
            removeValue: sts.option(() => sts.bigint()),
        }),
        withdraw_claim: sts.enumStruct({
            pid: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FarmingCall = FarmingCall_add_boost_pool_whitelist | FarmingCall_charge | FarmingCall_charge_boost | FarmingCall_claim | FarmingCall_close_pool | FarmingCall_create_farming_pool | FarmingCall_deposit | FarmingCall_edit_pool | FarmingCall_end_boost_round | FarmingCall_force_gauge_claim | FarmingCall_force_retire_pool | FarmingCall_gauge_withdraw | FarmingCall_kill_pool | FarmingCall_reset_pool | FarmingCall_set_next_round_whitelist | FarmingCall_set_retire_limit | FarmingCall_start_boost_round | FarmingCall_vote | FarmingCall_withdraw | FarmingCall_withdraw_claim

export interface FarmingCall_add_boost_pool_whitelist {
    __kind: 'add_boost_pool_whitelist'
    whitelist: number[]
}

export interface FarmingCall_charge {
    __kind: 'charge'
    pid: number
    rewards: [CurrencyId, bigint][]
    ifGauge: boolean
}

export interface FarmingCall_charge_boost {
    __kind: 'charge_boost'
    rewards: [CurrencyId, bigint][]
}

export interface FarmingCall_claim {
    __kind: 'claim'
    pid: number
}

export interface FarmingCall_close_pool {
    __kind: 'close_pool'
    pid: number
}

export interface FarmingCall_create_farming_pool {
    __kind: 'create_farming_pool'
    tokensProportion: [CurrencyId, Perbill][]
    basicRewards: [CurrencyId, bigint][]
    gaugeInit?: ([number, [CurrencyId, bigint][]] | undefined)
    minDepositToStart: bigint
    afterBlockToStart: number
    withdrawLimitTime: number
    claimLimitTime: number
    withdrawLimitCount: number
}

export interface FarmingCall_deposit {
    __kind: 'deposit'
    pid: number
    addValue: bigint
    gaugeInfo?: ([bigint, number] | undefined)
}

export interface FarmingCall_edit_pool {
    __kind: 'edit_pool'
    pid: number
    basicRewards?: ([CurrencyId, bigint][] | undefined)
    withdrawLimitTime?: (number | undefined)
    claimLimitTime?: (number | undefined)
    gaugeBasicRewards?: ([CurrencyId, bigint][] | undefined)
    withdrawLimitCount?: (number | undefined)
}

export interface FarmingCall_end_boost_round {
    __kind: 'end_boost_round'
}

export interface FarmingCall_force_gauge_claim {
    __kind: 'force_gauge_claim'
    gid: number
}

export interface FarmingCall_force_retire_pool {
    __kind: 'force_retire_pool'
    pid: number
}

export interface FarmingCall_gauge_withdraw {
    __kind: 'gauge_withdraw'
    gid: number
}

export interface FarmingCall_kill_pool {
    __kind: 'kill_pool'
    pid: number
}

export interface FarmingCall_reset_pool {
    __kind: 'reset_pool'
    pid: number
    basicRewards?: ([CurrencyId, bigint][] | undefined)
    minDepositToStart?: (bigint | undefined)
    afterBlockToStart?: (number | undefined)
    withdrawLimitTime?: (number | undefined)
    claimLimitTime?: (number | undefined)
    withdrawLimitCount?: (number | undefined)
    gaugeInit?: ([number, [CurrencyId, bigint][]] | undefined)
}

export interface FarmingCall_set_next_round_whitelist {
    __kind: 'set_next_round_whitelist'
    whitelist: number[]
}

export interface FarmingCall_set_retire_limit {
    __kind: 'set_retire_limit'
    limit: number
}

export interface FarmingCall_start_boost_round {
    __kind: 'start_boost_round'
    roundLength: number
}

export interface FarmingCall_vote {
    __kind: 'vote'
    voteList: [number, Percent][]
}

export interface FarmingCall_withdraw {
    __kind: 'withdraw'
    pid: number
    removeValue?: (bigint | undefined)
}

export interface FarmingCall_withdraw_claim {
    __kind: 'withdraw_claim'
    pid: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const EthereumCall: sts.Type<EthereumCall> = sts.closedEnum(() => {
    return  {
        transact: sts.enumStruct({
            transaction: TransactionV2,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const EVMAccountsCall: sts.Type<EVMAccountsCall> = sts.closedEnum(() => {
    return  {
        add_contract_deployer: sts.enumStruct({
            address: H160,
        }),
        bind_evm_address: sts.unit(),
        remove_contract_deployer: sts.enumStruct({
            address: H160,
        }),
        renounce_contract_deployer: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type EVMAccountsCall = EVMAccountsCall_add_contract_deployer | EVMAccountsCall_bind_evm_address | EVMAccountsCall_remove_contract_deployer | EVMAccountsCall_renounce_contract_deployer

/**
 * Adds an EVM address to the list of addresses that are allowed to deploy smart contracts.
 * 
 * Parameters:
 * - `origin`: Substrate account whitelisting an address. Must be `ControllerOrigin`.
 * - `address`: EVM address that is whitelisted
 * 
 * Emits `DeployerAdded` event when successful.
 */
export interface EVMAccountsCall_add_contract_deployer {
    __kind: 'add_contract_deployer'
    address: H160
}

/**
 * Binds a Substrate address to EVM address.
 * After binding, the EVM is able to convert an EVM address to the original Substrate
 * address. Without binding, the EVM converts an EVM address to a truncated Substrate
 * address, which doesn't correspond to the origin address.
 * 
 * Binding an address is not necessary for interacting with the EVM.
 * 
 * Parameters:
 * - `origin`: Substrate account binding an address
 * 
 * Emits `EvmAccountBound` event when successful.
 */
export interface EVMAccountsCall_bind_evm_address {
    __kind: 'bind_evm_address'
}

/**
 * Removes an EVM address from the list of addresses that are allowed to deploy smart
 * contracts.
 * 
 * Parameters:
 * - `origin`: Substrate account removing the EVM address from the whitelist. Must be
 *   `ControllerOrigin`.
 * - `address`: EVM address that is removed from the whitelist
 * 
 * Emits `DeployerRemoved` event when successful.
 */
export interface EVMAccountsCall_remove_contract_deployer {
    __kind: 'remove_contract_deployer'
    address: H160
}

/**
 * Removes the account's EVM address from the list of addresses that are allowed to deploy
 * smart contracts. Based on the best practices, this extrinsic can be called by any
 * whitelisted account to renounce their own permission.
 * 
 * Parameters:
 * - `origin`: Substrate account removing their EVM address from the whitelist.
 * 
 * Emits `DeployerRemoved` event when successful.
 */
export interface EVMAccountsCall_renounce_contract_deployer {
    __kind: 'renounce_contract_deployer'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const EVMCall: sts.Type<EVMCall> = sts.closedEnum(() => {
    return  {
        call: sts.enumStruct({
            source: H160,
            target: H160,
            input: sts.bytes(),
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [H160, sts.array(() => H256)])),
        }),
        create: sts.enumStruct({
            source: H160,
            init: sts.bytes(),
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [H160, sts.array(() => H256)])),
        }),
        create2: sts.enumStruct({
            source: H160,
            init: sts.bytes(),
            salt: H256,
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [H160, sts.array(() => H256)])),
        }),
        withdraw: sts.enumStruct({
            address: H160,
            value: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type EVMCall = EVMCall_call | EVMCall_create | EVMCall_create2 | EVMCall_withdraw

/**
 * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
 */
export interface EVMCall_call {
    __kind: 'call'
    source: H160
    target: H160
    input: Bytes
    value: bigint
    gasLimit: bigint
    maxFeePerGas: bigint
    maxPriorityFeePerGas?: (bigint | undefined)
    nonce?: (bigint | undefined)
    accessList: [H160, H256[]][]
}

/**
 * Issue an EVM create operation. This is similar to a contract creation transaction in
 * Ethereum.
 */
export interface EVMCall_create {
    __kind: 'create'
    source: H160
    init: Bytes
    value: bigint
    gasLimit: bigint
    maxFeePerGas: bigint
    maxPriorityFeePerGas?: (bigint | undefined)
    nonce?: (bigint | undefined)
    accessList: [H160, H256[]][]
}

/**
 * Issue an EVM create2 operation.
 */
export interface EVMCall_create2 {
    __kind: 'create2'
    source: H160
    init: Bytes
    salt: H256
    value: bigint
    gasLimit: bigint
    maxFeePerGas: bigint
    maxPriorityFeePerGas?: (bigint | undefined)
    nonce?: (bigint | undefined)
    accessList: [H160, H256[]][]
}

/**
 * Withdraw balance from EVM into currency/balances pallet.
 */
export interface EVMCall_withdraw {
    __kind: 'withdraw'
    address: H160
    value: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DynamicFeeCall: sts.Type<DynamicFeeCall> = sts.closedEnum(() => {
    return  {
        note_min_gas_price_target: sts.enumStruct({
            target: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DynamicFeeCall = DynamicFeeCall_note_min_gas_price_target

export interface DynamicFeeCall_note_min_gas_price_target {
    __kind: 'note_min_gas_price_target'
    target: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DemocracyCall: sts.Type<DemocracyCall> = sts.closedEnum(() => {
    return  {
        blacklist: sts.enumStruct({
            proposalHash: H256,
            maybeRefIndex: sts.option(() => sts.number()),
        }),
        cancel_proposal: sts.enumStruct({
            propIndex: sts.number(),
        }),
        cancel_referendum: sts.enumStruct({
            refIndex: sts.number(),
        }),
        clear_public_proposals: sts.unit(),
        delegate: sts.enumStruct({
            to: MultiAddress,
            conviction: Conviction,
            balance: sts.bigint(),
        }),
        emergency_cancel: sts.enumStruct({
            refIndex: sts.number(),
        }),
        external_propose: sts.enumStruct({
            proposal: Bounded,
        }),
        external_propose_default: sts.enumStruct({
            proposal: Bounded,
        }),
        external_propose_majority: sts.enumStruct({
            proposal: Bounded,
        }),
        fast_track: sts.enumStruct({
            proposalHash: H256,
            votingPeriod: sts.number(),
            delay: sts.number(),
        }),
        propose: sts.enumStruct({
            proposal: Bounded,
            value: sts.bigint(),
        }),
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            index: sts.number(),
        }),
        second: sts.enumStruct({
            proposal: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            owner: MetadataOwner,
            maybeHash: sts.option(() => H256),
        }),
        undelegate: sts.unit(),
        unlock: sts.enumStruct({
            target: MultiAddress,
        }),
        veto_external: sts.enumStruct({
            proposalHash: H256,
        }),
        vote: sts.enumStruct({
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: Vote,
            balance: sts.bigint(),
        }),
    }
})

export const Vote = sts.number()

export type AccountVote = AccountVote_Split | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: Vote
    balance: bigint
}

export type Vote = number

export const MetadataOwner: sts.Type<MetadataOwner> = sts.closedEnum(() => {
    return  {
        External: sts.unit(),
        Proposal: sts.number(),
        Referendum: sts.number(),
    }
})

export type MetadataOwner = MetadataOwner_External | MetadataOwner_Proposal | MetadataOwner_Referendum

export interface MetadataOwner_External {
    __kind: 'External'
}

export interface MetadataOwner_Proposal {
    __kind: 'Proposal'
    value: number
}

export interface MetadataOwner_Referendum {
    __kind: 'Referendum'
    value: number
}

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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_propose | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_set_metadata | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

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
    proposalHash: H256
    maybeRefIndex?: (number | undefined)
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
    proposalHash: H256
    votingPeriod: number
    delay: number
}

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
 * Set or clear a metadata of a proposal or a referendum.
 * 
 * Parameters:
 * - `origin`: Must correspond to the `MetadataOwner`.
 *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
 *       threshold.
 *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
 *       threshold.
 *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
 *       threshold.
 *     - `Signed` by a creator for a public proposal.
 *     - `Signed` to clear a metadata for a finished referendum.
 *     - `Root` to set a metadata for an ongoing referendum.
 * - `owner`: an identifier of a metadata owner.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface DemocracyCall_set_metadata {
    __kind: 'set_metadata'
    owner: MetadataOwner
    maybeHash?: (H256 | undefined)
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
    proposalHash: H256
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CurrenciesCall: sts.Type<CurrenciesCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            dest: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        transfer_native_currency: sts.enumStruct({
            dest: MultiAddress,
            amount: sts.bigint(),
        }),
        update_balance: sts.enumStruct({
            who: MultiAddress,
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

/**
 * Transfer some balance to another account under `currency_id`.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Transfer some native currency to another account.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: MultiAddress
    amount: bigint
}

/**
 * update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
    __kind: 'update_balance'
    who: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CumulusXcmCall: sts.Type<CumulusXcmCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CumulusXcmCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CrossInOutCall: sts.Type<CrossInOutCall> = sts.closedEnum(() => {
    return  {
        add_to_issue_whitelist: sts.enumStruct({
            currencyId: CurrencyId,
            account: AccountId32,
        }),
        add_to_register_whitelist: sts.enumStruct({
            currencyId: CurrencyId,
            account: AccountId32,
        }),
        change_outer_linked_account: sts.enumStruct({
            currencyId: CurrencyId,
            foreignLocation: V2MultiLocation,
            account: AccountId32,
        }),
        cross_in: sts.enumStruct({
            location: V2MultiLocation,
            currencyId: CurrencyId,
            amount: sts.bigint(),
            remark: sts.option(() => sts.bytes()),
        }),
        cross_out: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
        }),
        deregister_currency_for_cross_in_out: sts.enumStruct({
            currencyId: CurrencyId,
        }),
        register_currency_for_cross_in_out: sts.enumStruct({
            currencyId: CurrencyId,
        }),
        register_linked_account: sts.enumStruct({
            currencyId: CurrencyId,
            who: AccountId32,
            foreignLocation: V2MultiLocation,
        }),
        remove_from_issue_whitelist: sts.enumStruct({
            currencyId: CurrencyId,
            account: AccountId32,
        }),
        remove_from_register_whitelist: sts.enumStruct({
            currencyId: CurrencyId,
            account: AccountId32,
        }),
        set_crossing_minimum_amount: sts.enumStruct({
            currencyId: CurrencyId,
            crossInMinimum: sts.bigint(),
            crossOutMinimum: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CrossInOutCall = CrossInOutCall_add_to_issue_whitelist | CrossInOutCall_add_to_register_whitelist | CrossInOutCall_change_outer_linked_account | CrossInOutCall_cross_in | CrossInOutCall_cross_out | CrossInOutCall_deregister_currency_for_cross_in_out | CrossInOutCall_register_currency_for_cross_in_out | CrossInOutCall_register_linked_account | CrossInOutCall_remove_from_issue_whitelist | CrossInOutCall_remove_from_register_whitelist | CrossInOutCall_set_crossing_minimum_amount

export interface CrossInOutCall_add_to_issue_whitelist {
    __kind: 'add_to_issue_whitelist'
    currencyId: CurrencyId
    account: AccountId32
}

export interface CrossInOutCall_add_to_register_whitelist {
    __kind: 'add_to_register_whitelist'
    currencyId: CurrencyId
    account: AccountId32
}

export interface CrossInOutCall_change_outer_linked_account {
    __kind: 'change_outer_linked_account'
    currencyId: CurrencyId
    foreignLocation: V2MultiLocation
    account: AccountId32
}

export interface CrossInOutCall_cross_in {
    __kind: 'cross_in'
    location: V2MultiLocation
    currencyId: CurrencyId
    amount: bigint
    remark?: (Bytes | undefined)
}

/**
 * Destroy some balance from an account and issue cross-out event.
 */
export interface CrossInOutCall_cross_out {
    __kind: 'cross_out'
    currencyId: CurrencyId
    amount: bigint
}

export interface CrossInOutCall_deregister_currency_for_cross_in_out {
    __kind: 'deregister_currency_for_cross_in_out'
    currencyId: CurrencyId
}

export interface CrossInOutCall_register_currency_for_cross_in_out {
    __kind: 'register_currency_for_cross_in_out'
    currencyId: CurrencyId
}

export interface CrossInOutCall_register_linked_account {
    __kind: 'register_linked_account'
    currencyId: CurrencyId
    who: AccountId32
    foreignLocation: V2MultiLocation
}

export interface CrossInOutCall_remove_from_issue_whitelist {
    __kind: 'remove_from_issue_whitelist'
    currencyId: CurrencyId
    account: AccountId32
}

export interface CrossInOutCall_remove_from_register_whitelist {
    __kind: 'remove_from_register_whitelist'
    currencyId: CurrencyId
    account: AccountId32
}

export interface CrossInOutCall_set_crossing_minimum_amount {
    __kind: 'set_crossing_minimum_amount'
    currencyId: CurrencyId
    crossInMinimum: bigint
    crossOutMinimum: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CouncilMembershipCall: sts.Type<CouncilMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        change_key: sts.enumStruct({
            new: MultiAddress,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: MultiAddress,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId32),
        }),
        set_prime: sts.enumStruct({
            who: MultiAddress,
        }),
        swap_member: sts.enumStruct({
            remove: MultiAddress,
            add: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CouncilMembershipCall = CouncilMembershipCall_add_member | CouncilMembershipCall_change_key | CouncilMembershipCall_clear_prime | CouncilMembershipCall_remove_member | CouncilMembershipCall_reset_members | CouncilMembershipCall_set_prime | CouncilMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface CouncilMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface CouncilMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface CouncilMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface CouncilMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface CouncilMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: H256,
        }),
        execute: sts.enumStruct({
            proposal: Call,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId32),
            prime: sts.option(() => AccountId32),
            oldCount: sts.number(),
        }),
        vote: sts.enumStruct({
            proposal: H256,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CouncilCall = CouncilCall_close | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

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
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
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
 * ## Complexity
 * O(P) where P is the number of max proposals
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * ## Complexity:
 * - `O(B + M + P)` where:
 * - `B` is `proposal` size in bytes (length-fee-bounded)
 * - `M` members-count (code-bounded)
 * - `P` complexity of dispatching `proposal`
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
 * ## Complexity
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * The dispatch of this call must be `SetMembersOrigin`.
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
 * ## Complexity:
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ConvictionVotingCall: sts.Type<ConvictionVotingCall> = sts.closedEnum(() => {
    return  {
        delegate: sts.enumStruct({
            class: sts.number(),
            to: MultiAddress,
            conviction: Type_108,
            balance: sts.bigint(),
        }),
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            class: sts.number(),
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            class: sts.option(() => sts.number()),
            index: sts.number(),
        }),
        undelegate: sts.enumStruct({
            class: sts.number(),
        }),
        unlock: sts.enumStruct({
            class: sts.number(),
            target: MultiAddress,
        }),
        vote: sts.enumStruct({
            pollIndex: sts.number(),
            vote: Type_106,
        }),
    }
})

export const Type_106: sts.Type<Type_106> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        SplitAbstain: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
            abstain: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: sts.number(),
            balance: sts.bigint(),
        }),
    }
})

export type Type_106 = Type_106_Split | Type_106_SplitAbstain | Type_106_Standard

export interface Type_106_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface Type_106_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export interface Type_106_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export const Type_108: sts.Type<Type_108> = sts.closedEnum(() => {
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

export type Type_108 = Type_108_Locked1x | Type_108_Locked2x | Type_108_Locked3x | Type_108_Locked4x | Type_108_Locked5x | Type_108_Locked6x | Type_108_None

export interface Type_108_Locked1x {
    __kind: 'Locked1x'
}

export interface Type_108_Locked2x {
    __kind: 'Locked2x'
}

export interface Type_108_Locked3x {
    __kind: 'Locked3x'
}

export interface Type_108_Locked4x {
    __kind: 'Locked4x'
}

export interface Type_108_Locked5x {
    __kind: 'Locked5x'
}

export interface Type_108_Locked6x {
    __kind: 'Locked6x'
}

export interface Type_108_None {
    __kind: 'None'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ConvictionVotingCall = ConvictionVotingCall_delegate | ConvictionVotingCall_remove_other_vote | ConvictionVotingCall_remove_vote | ConvictionVotingCall_undelegate | ConvictionVotingCall_unlock | ConvictionVotingCall_vote

/**
 * Delegate the voting power (with some given conviction) of the sending account for a
 * particular class of polls.
 * 
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 * 
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed through
 *     `remove_vote`).
 * 
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
 *   to this function are required.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of polls the voter delegating to has
 *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
 */
export interface ConvictionVotingCall_delegate {
    __kind: 'delegate'
    class: number
    to: MultiAddress
    conviction: Type_108
    balance: bigint
}

/**
 * Remove a vote for a poll.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the poll was cancelled, because the voter lost the poll or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for poll
 *   `index`.
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: The class of the poll.
 * 
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface ConvictionVotingCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * Remove a vote for a poll.
 * 
 * If:
 * - the poll was cancelled, or
 * - the poll is ongoing, or
 * - the poll has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the poll has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for poll `index`.
 * 
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
 *   which have finished or are cancelled, this must be `Some`.
 * 
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface ConvictionVotingCall_remove_vote {
    __kind: 'remove_vote'
    class?: (number | undefined)
    index: number
}

/**
 * Undelegate the voting power of the sending account for a particular class of polls.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued has passed.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * - `class`: The class of polls to remove the delegation from.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of polls the voter delegating to has
 *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
 */
export interface ConvictionVotingCall_undelegate {
    __kind: 'undelegate'
    class: number
}

/**
 * Remove the lock caused by prior voting/delegating which has expired within a particular
 * class.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `class`: The class of polls to unlock.
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface ConvictionVotingCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
}

/**
 * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `poll_index`: The index of the poll to vote for.
 * - `vote`: The vote configuration.
 * 
 * Weight: `O(R)` where R is the number of polls the voter has voted on.
 */
export interface ConvictionVotingCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: Type_106
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CollatorSelectionCall: sts.Type<CollatorSelectionCall> = sts.closedEnum(() => {
    return  {
        add_invulnerable: sts.enumStruct({
            who: AccountId32,
        }),
        leave_intent: sts.unit(),
        register_as_candidate: sts.unit(),
        remove_invulnerable: sts.enumStruct({
            who: AccountId32,
        }),
        set_candidacy_bond: sts.enumStruct({
            bond: sts.bigint(),
        }),
        set_desired_candidates: sts.enumStruct({
            max: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            new: sts.array(() => AccountId32),
        }),
        take_candidate_slot: sts.enumStruct({
            deposit: sts.bigint(),
            target: AccountId32,
        }),
        update_bond: sts.enumStruct({
            newDeposit: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CollatorSelectionCall = CollatorSelectionCall_add_invulnerable | CollatorSelectionCall_leave_intent | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_remove_invulnerable | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_take_candidate_slot | CollatorSelectionCall_update_bond

/**
 * Add a new account `who` to the list of `Invulnerables` collators. `who` must have
 * registered session keys. If `who` is a candidate, they will be removed.
 * 
 * The origin for this call must be the `UpdateOrigin`.
 */
export interface CollatorSelectionCall_add_invulnerable {
    __kind: 'add_invulnerable'
    who: AccountId32
}

/**
 * Deregister `origin` as a collator candidate. Note that the collator can only leave on
 * session change. The `CandidacyBond` will be unreserved immediately.
 * 
 * This call will fail if the total number of candidates would drop below
 * `MinEligibleCollators`.
 */
export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
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
 * Remove an account `who` from the list of `Invulnerables` collators. `Invulnerables` must
 * be sorted.
 * 
 * The origin for this call must be the `UpdateOrigin`.
 */
export interface CollatorSelectionCall_remove_invulnerable {
    __kind: 'remove_invulnerable'
    who: AccountId32
}

/**
 * Set the candidacy bond amount.
 * 
 * If the candidacy bond is increased by this call, all current candidates which have a
 * deposit lower than the new bond will be kicked from the list and get their deposits
 * back.
 * 
 * The origin for this call must be the `UpdateOrigin`.
 */
export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

/**
 * Set the ideal number of non-invulnerable collators. If lowering this number, then the
 * number of running collators could be higher than this figure. Aside from that edge case,
 * there should be no other way to have more candidates than the desired number.
 * 
 * The origin for this call must be the `UpdateOrigin`.
 */
export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

/**
 * Set the list of invulnerable (fixed) collators. These collators must do some
 * preparation, namely to have registered session keys.
 * 
 * The call will remove any accounts that have not registered keys from the set. That is,
 * it is non-atomic; the caller accepts all `AccountId`s passed in `new` _individually_ as
 * acceptable Invulnerables, and is not proposing a _set_ of new Invulnerables.
 * 
 * This call does not maintain mutual exclusivity of `Invulnerables` and `Candidates`. It
 * is recommended to use a batch of `add_invulnerable` and `remove_invulnerable` instead. A
 * `batch_all` can also be used to enforce atomicity. If any candidates are included in
 * `new`, they should be removed with `remove_invulnerable_candidate` after execution.
 * 
 * Must be called by the `UpdateOrigin`.
 */
export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: AccountId32[]
}

/**
 * The caller `origin` replaces a candidate `target` in the collator candidate list by
 * reserving `deposit`. The amount `deposit` reserved by the caller must be greater than
 * the existing bond of the target it is trying to replace.
 * 
 * This call will fail if the caller is already a collator candidate or invulnerable, the
 * caller does not have registered session keys, the target is not a collator candidate,
 * and/or the `deposit` amount cannot be reserved.
 */
export interface CollatorSelectionCall_take_candidate_slot {
    __kind: 'take_candidate_slot'
    deposit: bigint
    target: AccountId32
}

/**
 * Update the candidacy bond of collator candidate `origin` to a new amount `new_deposit`.
 * 
 * Setting a `new_deposit` that is lower than the current deposit while `origin` is
 * occupying a top-`DesiredCandidates` slot is not allowed.
 * 
 * This call will fail if `origin` is not a collator candidate, the updated bond is lower
 * than the minimum candidacy bond, and/or the amount cannot be reserved.
 */
export interface CollatorSelectionCall_update_bond {
    __kind: 'update_bond'
    newDeposit: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CloudsConvertCall: sts.Type<CloudsConvertCall> = sts.closedEnum(() => {
    return  {
        charge_vbnc: sts.enumStruct({
            amount: sts.bigint(),
        }),
        clouds_to_vebnc: sts.enumStruct({
            value: sts.bigint(),
            expectedMinVebnc: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CloudsConvertCall = CloudsConvertCall_charge_vbnc | CloudsConvertCall_clouds_to_vebnc

export interface CloudsConvertCall_charge_vbnc {
    __kind: 'charge_vbnc'
    amount: bigint
}

export interface CloudsConvertCall_clouds_to_vebnc {
    __kind: 'clouds_to_vebnc'
    value: bigint
    expectedMinVebnc: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ChannelCommissionCall: sts.Type<ChannelCommissionCall> = sts.closedEnum(() => {
    return  {
        claim_commissions: sts.enumStruct({
            channelId: sts.number(),
        }),
        register_channel: sts.enumStruct({
            channelName: sts.bytes(),
            receiveAccount: AccountId32,
        }),
        remove_channel: sts.enumStruct({
            channelId: sts.number(),
        }),
        set_channel_commission_token: sts.enumStruct({
            channelId: sts.number(),
            vtoken: CurrencyId,
            rate: Percent,
        }),
        set_channel_vtoken_shares: sts.enumStruct({
            channelId: sts.number(),
            vtoken: CurrencyId,
            shares: Permill,
        }),
        set_commission_tokens: sts.enumStruct({
            vtoken: CurrencyId,
            commissionTokenOp: sts.option(() => CurrencyId),
        }),
        update_channel_receive_account: sts.enumStruct({
            channelId: sts.number(),
            receiveAccount: AccountId32,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ChannelCommissionCall = ChannelCommissionCall_claim_commissions | ChannelCommissionCall_register_channel | ChannelCommissionCall_remove_channel | ChannelCommissionCall_set_channel_commission_token | ChannelCommissionCall_set_channel_vtoken_shares | ChannelCommissionCall_set_commission_tokens | ChannelCommissionCall_update_channel_receive_account

export interface ChannelCommissionCall_claim_commissions {
    __kind: 'claim_commissions'
    channelId: number
}

export interface ChannelCommissionCall_register_channel {
    __kind: 'register_channel'
    channelName: Bytes
    receiveAccount: AccountId32
}

export interface ChannelCommissionCall_remove_channel {
    __kind: 'remove_channel'
    channelId: number
}

export interface ChannelCommissionCall_set_channel_commission_token {
    __kind: 'set_channel_commission_token'
    channelId: number
    vtoken: CurrencyId
    rate: Percent
}

export interface ChannelCommissionCall_set_channel_vtoken_shares {
    __kind: 'set_channel_vtoken_shares'
    channelId: number
    vtoken: CurrencyId
    shares: Permill
}

export interface ChannelCommissionCall_set_commission_tokens {
    __kind: 'set_commission_tokens'
    vtoken: CurrencyId
    commissionTokenOp?: (CurrencyId | undefined)
}

export interface ChannelCommissionCall_update_channel_receive_account {
    __kind: 'update_channel_receive_account'
    channelId: number
    receiveAccount: AccountId32
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BuyBackCall: sts.Type<BuyBackCall> = sts.closedEnum(() => {
    return  {
        charge: sts.enumStruct({
            assetId: CurrencyId,
            value: sts.bigint(),
        }),
        remove_vtoken: sts.enumStruct({
            assetId: CurrencyId,
        }),
        set_vtoken: sts.enumStruct({
            assetId: CurrencyId,
            value: sts.bigint(),
            proportion: Permill,
            buybackDuration: sts.number(),
            addLiquidityDuration: sts.number(),
            ifAuto: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BuyBackCall = BuyBackCall_charge | BuyBackCall_remove_vtoken | BuyBackCall_set_vtoken

export interface BuyBackCall_charge {
    __kind: 'charge'
    assetId: CurrencyId
    value: bigint
}

export interface BuyBackCall_remove_vtoken {
    __kind: 'remove_vtoken'
    assetId: CurrencyId
}

export interface BuyBackCall_set_vtoken {
    __kind: 'set_vtoken'
    assetId: CurrencyId
    value: bigint
    proportion: Permill
    buybackDuration: number
    addLiquidityDuration: number
    ifAuto: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        burn: sts.enumStruct({
            value: sts.bigint(),
            keepAlive: sts.boolean(),
        }),
        force_adjust_total_issuance: sts.enumStruct({
            direction: AdjustmentDirection,
            delta: sts.bigint(),
        }),
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

export const AdjustmentDirection: sts.Type<AdjustmentDirection> = sts.closedEnum(() => {
    return  {
        Decrease: sts.unit(),
        Increase: sts.unit(),
    }
})

export type AdjustmentDirection = AdjustmentDirection_Decrease | AdjustmentDirection_Increase

export interface AdjustmentDirection_Decrease {
    __kind: 'Decrease'
}

export interface AdjustmentDirection_Increase {
    __kind: 'Increase'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall = BalancesCall_burn | BalancesCall_force_adjust_total_issuance | BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

/**
 * Burn the specified liquid free balance from the origin account.
 * 
 * If the origin's account ends up below the existential deposit as a result
 * of the burn and `keep_alive` is false, the account will be reaped.
 * 
 * Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
 * this `burn` operation will reduce total issuance by the amount _burned_.
 */
export interface BalancesCall_burn {
    __kind: 'burn'
    value: bigint
    keepAlive: boolean
}

/**
 * Adjust the total issuance in a saturating way.
 * 
 * Can only be called by root and always needs a positive `delta`.
 * 
 * # Example
 */
export interface BalancesCall_force_adjust_total_issuance {
    __kind: 'force_adjust_total_issuance'
    direction: AdjustmentDirection
    delta: bigint
}

/**
 * Set the regular balance of a given account.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Exactly as `transfer_allow_death`, except the origin must be root and the source account
 * may be specified.
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
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
 *   keep the sender account alive (true).
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 * kill the origin account.
 * 
 * 99% of the time you want [`transfer_allow_death`] instead.
 * 
 * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Upgrade a specified account.
 * 
 * - `origin`: Must be `Signed`.
 * - `who`: The account to be upgraded.
 * 
 * This will waive the transaction fee if at least all but 10% of the accounts needed to
 * be upgraded. (We let some not have to be upgraded just in order to allow for the
 * possibility of churn).
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const AssetRegistryCall: sts.Type<AssetRegistryCall> = sts.closedEnum(() => {
    return  {
        force_set_location: sts.enumStruct({
            currencyId: CurrencyId,
            location: VersionedLocation,
            weight: Weight,
        }),
        register_location: sts.enumStruct({
            currencyId: CurrencyId,
            location: VersionedLocation,
            weight: Weight,
        }),
        register_native_asset: sts.enumStruct({
            currencyId: CurrencyId,
            location: VersionedLocation,
            metadata: AssetMetadata,
        }),
        register_token_metadata: sts.enumStruct({
            metadata: AssetMetadata,
        }),
        register_vsbond_metadata: sts.enumStruct({
            tokenId: sts.number(),
            paraId: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        }),
        register_vstoken_metadata: sts.enumStruct({
            tokenId: sts.number(),
        }),
        register_vtoken_metadata: sts.enumStruct({
            tokenId: sts.number(),
        }),
        update_currency_metadata: sts.enumStruct({
            currencyId: CurrencyId,
            assetName: sts.option(() => sts.bytes()),
            assetSymbol: sts.option(() => sts.bytes()),
            assetDecimals: sts.option(() => sts.number()),
            assetMinimalBalance: sts.option(() => sts.bigint()),
        }),
        update_native_asset: sts.enumStruct({
            currencyId: CurrencyId,
            location: VersionedLocation,
            metadata: AssetMetadata,
        }),
    }
})

export const AssetMetadata: sts.Type<AssetMetadata> = sts.struct(() => {
    return  {
        name: sts.bytes(),
        symbol: sts.bytes(),
        decimals: sts.number(),
        minimalBalance: sts.bigint(),
    }
})

export interface AssetMetadata {
    name: Bytes
    symbol: Bytes
    decimals: number
    minimalBalance: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AssetRegistryCall = AssetRegistryCall_force_set_location | AssetRegistryCall_register_location | AssetRegistryCall_register_native_asset | AssetRegistryCall_register_token_metadata | AssetRegistryCall_register_vsbond_metadata | AssetRegistryCall_register_vstoken_metadata | AssetRegistryCall_register_vtoken_metadata | AssetRegistryCall_update_currency_metadata | AssetRegistryCall_update_native_asset

export interface AssetRegistryCall_force_set_location {
    __kind: 'force_set_location'
    currencyId: CurrencyId
    location: VersionedLocation
    weight: Weight
}

export interface AssetRegistryCall_register_location {
    __kind: 'register_location'
    currencyId: CurrencyId
    location: VersionedLocation
    weight: Weight
}

export interface AssetRegistryCall_register_native_asset {
    __kind: 'register_native_asset'
    currencyId: CurrencyId
    location: VersionedLocation
    metadata: AssetMetadata
}

export interface AssetRegistryCall_register_token_metadata {
    __kind: 'register_token_metadata'
    metadata: AssetMetadata
}

export interface AssetRegistryCall_register_vsbond_metadata {
    __kind: 'register_vsbond_metadata'
    tokenId: number
    paraId: number
    firstSlot: number
    lastSlot: number
}

export interface AssetRegistryCall_register_vstoken_metadata {
    __kind: 'register_vstoken_metadata'
    tokenId: number
}

export interface AssetRegistryCall_register_vtoken_metadata {
    __kind: 'register_vtoken_metadata'
    tokenId: number
}

export interface AssetRegistryCall_update_currency_metadata {
    __kind: 'update_currency_metadata'
    currencyId: CurrencyId
    assetName?: (Bytes | undefined)
    assetSymbol?: (Bytes | undefined)
    assetDecimals?: (number | undefined)
    assetMinimalBalance?: (bigint | undefined)
}

export interface AssetRegistryCall_update_native_asset {
    __kind: 'update_native_asset'
    currencyId: CurrencyId
    location: VersionedLocation
    metadata: AssetMetadata
}

export type Call = Call_AssetRegistry | Call_Balances | Call_BuyBack | Call_ChannelCommission | Call_CloudsConvert | Call_CollatorSelection | Call_ConvictionVoting | Call_Council | Call_CouncilMembership | Call_CrossInOut | Call_CumulusXcm | Call_Currencies | Call_Democracy | Call_DynamicFee | Call_EVM | Call_EVMAccounts | Call_Ethereum | Call_Farming | Call_FeeShare | Call_FellowshipCollective | Call_FellowshipReferenda | Call_FlexibleFee | Call_Identity | Call_Indices | Call_LendMarket | Call_LeverageStaking | Call_MerkleDistributor | Call_MessageQueue | Call_Multisig | Call_Oracle | Call_OracleMembership | Call_OrmlXcm | Call_ParachainInfo | Call_ParachainSystem | Call_PhragmenElection | Call_PolkadotXcm | Call_Preimage | Call_Prices | Call_Proxy | Call_Referenda | Call_Salp | Call_Scheduler | Call_Session | Call_Slp | Call_Slpx | Call_StablePool | Call_System | Call_SystemMaker | Call_SystemStaking | Call_TechnicalCommittee | Call_TechnicalMembership | Call_Timestamp | Call_TokenConversion | Call_Tokens | Call_Treasury | Call_TxPause | Call_Utility | Call_VeMinting | Call_Vesting | Call_VtokenMinting | Call_VtokenVoting | Call_Whitelist | Call_XTokens | Call_XcmInterface | Call_XcmpQueue | Call_ZenlinkProtocol

export interface Call_AssetRegistry {
    __kind: 'AssetRegistry'
    value: AssetRegistryCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_BuyBack {
    __kind: 'BuyBack'
    value: BuyBackCall
}

export interface Call_ChannelCommission {
    __kind: 'ChannelCommission'
    value: ChannelCommissionCall
}

export interface Call_CloudsConvert {
    __kind: 'CloudsConvert'
    value: CloudsConvertCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
}

export interface Call_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_CouncilMembership {
    __kind: 'CouncilMembership'
    value: CouncilMembershipCall
}

export interface Call_CrossInOut {
    __kind: 'CrossInOut'
    value: CrossInOutCall
}

export interface Call_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmCall
}

export interface Call_Currencies {
    __kind: 'Currencies'
    value: CurrenciesCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_DynamicFee {
    __kind: 'DynamicFee'
    value: DynamicFeeCall
}

export interface Call_EVM {
    __kind: 'EVM'
    value: EVMCall
}

export interface Call_EVMAccounts {
    __kind: 'EVMAccounts'
    value: EVMAccountsCall
}

export interface Call_Ethereum {
    __kind: 'Ethereum'
    value: EthereumCall
}

export interface Call_Farming {
    __kind: 'Farming'
    value: FarmingCall
}

export interface Call_FeeShare {
    __kind: 'FeeShare'
    value: FeeShareCall
}

export interface Call_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveCall
}

export interface Call_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaCall
}

export interface Call_FlexibleFee {
    __kind: 'FlexibleFee'
    value: FlexibleFeeCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Call_LendMarket {
    __kind: 'LendMarket'
    value: LendMarketCall
}

export interface Call_LeverageStaking {
    __kind: 'LeverageStaking'
    value: LeverageStakingCall
}

export interface Call_MerkleDistributor {
    __kind: 'MerkleDistributor'
    value: MerkleDistributorCall
}

export interface Call_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Oracle {
    __kind: 'Oracle'
    value: OracleCall
}

export interface Call_OracleMembership {
    __kind: 'OracleMembership'
    value: OracleMembershipCall
}

export interface Call_OrmlXcm {
    __kind: 'OrmlXcm'
    value: OrmlXcmCall
}

export interface Call_ParachainInfo {
    __kind: 'ParachainInfo'
    value: ParachainInfoCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_PhragmenElection {
    __kind: 'PhragmenElection'
    value: PhragmenElectionCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Prices {
    __kind: 'Prices'
    value: PricesCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Referenda {
    __kind: 'Referenda'
    value: ReferendaCall
}

export interface Call_Salp {
    __kind: 'Salp'
    value: SalpCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Slp {
    __kind: 'Slp'
    value: SlpCall
}

export interface Call_Slpx {
    __kind: 'Slpx'
    value: SlpxCall
}

export interface Call_StablePool {
    __kind: 'StablePool'
    value: StablePoolCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_SystemMaker {
    __kind: 'SystemMaker'
    value: SystemMakerCall
}

export interface Call_SystemStaking {
    __kind: 'SystemStaking'
    value: SystemStakingCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_TokenConversion {
    __kind: 'TokenConversion'
    value: TokenConversionCall
}

export interface Call_Tokens {
    __kind: 'Tokens'
    value: TokensCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_TxPause {
    __kind: 'TxPause'
    value: TxPauseCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_VeMinting {
    __kind: 'VeMinting'
    value: VeMintingCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_VtokenMinting {
    __kind: 'VtokenMinting'
    value: VtokenMintingCall
}

export interface Call_VtokenVoting {
    __kind: 'VtokenVoting'
    value: VtokenVotingCall
}

export interface Call_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistCall
}

export interface Call_XTokens {
    __kind: 'XTokens'
    value: XTokensCall
}

export interface Call_XcmInterface {
    __kind: 'XcmInterface'
    value: XcmInterfaceCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Call_ZenlinkProtocol {
    __kind: 'ZenlinkProtocol'
    value: ZenlinkProtocolCall
}

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2Instruction),
        V3: sts.array(() => V3Instruction),
        V4: sts.array(() => V4Instruction),
    }
})

export const VersionedAssetId: sts.Type<VersionedAssetId> = sts.closedEnum(() => {
    return  {
        V3: V3AssetId,
        V4: V4AssetId,
    }
})

export const TransferType: sts.Type<TransferType> = sts.closedEnum(() => {
    return  {
        DestinationReserve: sts.unit(),
        LocalReserve: sts.unit(),
        RemoteReserve: VersionedLocation,
        Teleport: sts.unit(),
    }
})

export const VersionedAssets: sts.Type<VersionedAssets> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
        V4: sts.array(() => V4Asset),
    }
})

export const VersionedLocation: sts.Type<VersionedLocation> = sts.closedEnum(() => {
    return  {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
        V4: V4Location,
    }
})

export const Log: sts.Type<Log> = sts.struct(() => {
    return  {
        address: H160,
        topics: sts.array(() => H256),
        data: sts.bytes(),
    }
})

export interface Log {
    address: H160
    topics: H256[]
    data: Bytes
}

export const ExitReason: sts.Type<ExitReason> = sts.closedEnum(() => {
    return  {
        Error: ExitError,
        Fatal: ExitFatal,
        Revert: ExitRevert,
        Succeed: ExitSucceed,
    }
})

export const ExitSucceed: sts.Type<ExitSucceed> = sts.closedEnum(() => {
    return  {
        Returned: sts.unit(),
        Stopped: sts.unit(),
        Suicided: sts.unit(),
    }
})

export type ExitSucceed = ExitSucceed_Returned | ExitSucceed_Stopped | ExitSucceed_Suicided

export interface ExitSucceed_Returned {
    __kind: 'Returned'
}

export interface ExitSucceed_Stopped {
    __kind: 'Stopped'
}

export interface ExitSucceed_Suicided {
    __kind: 'Suicided'
}

export const ExitRevert: sts.Type<ExitRevert> = sts.closedEnum(() => {
    return  {
        Reverted: sts.unit(),
    }
})

export type ExitRevert = ExitRevert_Reverted

export interface ExitRevert_Reverted {
    __kind: 'Reverted'
}

export const ExitFatal: sts.Type<ExitFatal> = sts.closedEnum(() => {
    return  {
        CallErrorAsFatal: ExitError,
        NotSupported: sts.unit(),
        Other: Cow,
        UnhandledInterrupt: sts.unit(),
    }
})

export const Cow = sts.string()

export type ExitFatal = ExitFatal_CallErrorAsFatal | ExitFatal_NotSupported | ExitFatal_Other | ExitFatal_UnhandledInterrupt

export interface ExitFatal_CallErrorAsFatal {
    __kind: 'CallErrorAsFatal'
    value: ExitError
}

export interface ExitFatal_NotSupported {
    __kind: 'NotSupported'
}

export interface ExitFatal_Other {
    __kind: 'Other'
    value: Cow
}

export interface ExitFatal_UnhandledInterrupt {
    __kind: 'UnhandledInterrupt'
}

export type Cow = string

export type ExitError = ExitError_CallTooDeep | ExitError_CreateCollision | ExitError_CreateContractLimit | ExitError_CreateEmpty | ExitError_DesignatedInvalid | ExitError_InvalidCode | ExitError_InvalidJump | ExitError_InvalidRange | ExitError_MaxNonce | ExitError_Other | ExitError_OutOfFund | ExitError_OutOfGas | ExitError_OutOfOffset | ExitError_PCUnderflow | ExitError_StackOverflow | ExitError_StackUnderflow

export interface ExitError_CallTooDeep {
    __kind: 'CallTooDeep'
}

export interface ExitError_CreateCollision {
    __kind: 'CreateCollision'
}

export interface ExitError_CreateContractLimit {
    __kind: 'CreateContractLimit'
}

export interface ExitError_CreateEmpty {
    __kind: 'CreateEmpty'
}

export interface ExitError_DesignatedInvalid {
    __kind: 'DesignatedInvalid'
}

export interface ExitError_InvalidCode {
    __kind: 'InvalidCode'
    value: Opcode
}

export interface ExitError_InvalidJump {
    __kind: 'InvalidJump'
}

export interface ExitError_InvalidRange {
    __kind: 'InvalidRange'
}

export interface ExitError_MaxNonce {
    __kind: 'MaxNonce'
}

export interface ExitError_Other {
    __kind: 'Other'
    value: Cow
}

export interface ExitError_OutOfFund {
    __kind: 'OutOfFund'
}

export interface ExitError_OutOfGas {
    __kind: 'OutOfGas'
}

export interface ExitError_OutOfOffset {
    __kind: 'OutOfOffset'
}

export interface ExitError_PCUnderflow {
    __kind: 'PCUnderflow'
}

export interface ExitError_StackOverflow {
    __kind: 'StackOverflow'
}

export interface ExitError_StackUnderflow {
    __kind: 'StackUnderflow'
}

export type Opcode = number

export const ExitError: sts.Type<ExitError> = sts.closedEnum(() => {
    return  {
        CallTooDeep: sts.unit(),
        CreateCollision: sts.unit(),
        CreateContractLimit: sts.unit(),
        CreateEmpty: sts.unit(),
        DesignatedInvalid: sts.unit(),
        InvalidCode: Opcode,
        InvalidJump: sts.unit(),
        InvalidRange: sts.unit(),
        MaxNonce: sts.unit(),
        Other: Cow,
        OutOfFund: sts.unit(),
        OutOfGas: sts.unit(),
        OutOfOffset: sts.unit(),
        PCUnderflow: sts.unit(),
        StackOverflow: sts.unit(),
        StackUnderflow: sts.unit(),
    }
})

export const Opcode = sts.number()

export type ExitReason = ExitReason_Error | ExitReason_Fatal | ExitReason_Revert | ExitReason_Succeed

export interface ExitReason_Error {
    __kind: 'Error'
    value: ExitError
}

export interface ExitReason_Fatal {
    __kind: 'Fatal'
    value: ExitFatal
}

export interface ExitReason_Revert {
    __kind: 'Revert'
    value: ExitRevert
}

export interface ExitReason_Succeed {
    __kind: 'Succeed'
    value: ExitSucceed
}

export const BoundedVec = sts.bytes()

export const ProcessMessageError: sts.Type<ProcessMessageError> = sts.closedEnum(() => {
    return  {
        BadFormat: sts.unit(),
        Corrupt: sts.unit(),
        Overweight: Weight,
        StackLimitReached: sts.unit(),
        Unsupported: sts.unit(),
        Yield: sts.unit(),
    }
})

export type ProcessMessageError = ProcessMessageError_BadFormat | ProcessMessageError_Corrupt | ProcessMessageError_Overweight | ProcessMessageError_StackLimitReached | ProcessMessageError_Unsupported | ProcessMessageError_Yield

export interface ProcessMessageError_BadFormat {
    __kind: 'BadFormat'
}

export interface ProcessMessageError_Corrupt {
    __kind: 'Corrupt'
}

export interface ProcessMessageError_Overweight {
    __kind: 'Overweight'
    value: Weight
}

export interface ProcessMessageError_StackLimitReached {
    __kind: 'StackLimitReached'
}

export interface ProcessMessageError_Unsupported {
    __kind: 'Unsupported'
}

export interface ProcessMessageError_Yield {
    __kind: 'Yield'
}

export const AggregateMessageOrigin: sts.Type<AggregateMessageOrigin> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        Parent: sts.unit(),
        Sibling: Id,
    }
})

export const H256 = sts.bytes()

export const TimestampedValue: sts.Type<TimestampedValue> = sts.struct(() => {
    return  {
        value: FixedU128,
        timestamp: sts.bigint(),
    }
})

export interface TimestampedValue {
    value: FixedU128
    timestamp: bigint
}

export const Type_494: sts.Type<Type_494> = sts.closedEnum(() => {
    return  {
        AssetHub: sts.unit(),
        RelayChain: sts.unit(),
    }
})

export type Type_494 = Type_494_AssetHub | Type_494_RelayChain

export interface Type_494_AssetHub {
    __kind: 'AssetHub'
}

export interface Type_494_RelayChain {
    __kind: 'RelayChain'
}

export const ExtraFeeName: sts.Type<ExtraFeeName> = sts.closedEnum(() => {
    return  {
        EthereumTransfer: sts.unit(),
        NoExtraFee: sts.unit(),
        SalpContribute: sts.unit(),
        StatemineTransfer: sts.unit(),
        VoteRemoveDelegatorVote: sts.unit(),
        VoteVtoken: sts.unit(),
    }
})

export type ExtraFeeName = ExtraFeeName_EthereumTransfer | ExtraFeeName_NoExtraFee | ExtraFeeName_SalpContribute | ExtraFeeName_StatemineTransfer | ExtraFeeName_VoteRemoveDelegatorVote | ExtraFeeName_VoteVtoken

export interface ExtraFeeName_EthereumTransfer {
    __kind: 'EthereumTransfer'
}

export interface ExtraFeeName_NoExtraFee {
    __kind: 'NoExtraFee'
}

export interface ExtraFeeName_SalpContribute {
    __kind: 'SalpContribute'
}

export interface ExtraFeeName_StatemineTransfer {
    __kind: 'StatemineTransfer'
}

export interface ExtraFeeName_VoteRemoveDelegatorVote {
    __kind: 'VoteRemoveDelegatorVote'
}

export interface ExtraFeeName_VoteVtoken {
    __kind: 'VoteVtoken'
}

export const H160 = sts.bytes()

export const AccountId32 = sts.bytes()

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export const CurrencyId: sts.Type<CurrencyId> = sts.closedEnum(() => {
    return  {
        BLP: sts.number(),
        ForeignAsset: sts.number(),
        LPToken: sts.tuple(() => [TokenSymbol, sts.number(), TokenSymbol, sts.number()]),
        Lend: sts.number(),
        Native: TokenSymbol,
        Stable: TokenSymbol,
        StableLpToken: sts.number(),
        Token: TokenSymbol,
        Token2: sts.number(),
        VSBond: sts.tuple(() => [TokenSymbol, sts.number(), sts.number(), sts.number()]),
        VSBond2: sts.tuple(() => [sts.number(), sts.number(), sts.number(), sts.number()]),
        VSToken: TokenSymbol,
        VSToken2: sts.number(),
        VToken: TokenSymbol,
        VToken2: sts.number(),
    }
})

export const TokenSymbol: sts.Type<TokenSymbol> = sts.closedEnum(() => {
    return  {
        ASG: sts.unit(),
        BNC: sts.unit(),
        DOT: sts.unit(),
        ETH: sts.unit(),
        KAR: sts.unit(),
        KSM: sts.unit(),
        KUSD: sts.unit(),
        MOVR: sts.unit(),
        PHA: sts.unit(),
        RMRK: sts.unit(),
        ZLK: sts.unit(),
    }
})

export const XcmOperationType: sts.Type<XcmOperationType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Bond: sts.unit(),
        BondExtra: sts.unit(),
        CancelLeave: sts.unit(),
        Chill: sts.unit(),
        ConvertAsset: sts.unit(),
        Delegate: sts.unit(),
        EthereumTransfer: sts.unit(),
        ExecuteLeave: sts.unit(),
        Liquidize: sts.unit(),
        Payout: sts.unit(),
        Rebond: sts.unit(),
        RemoveVote: sts.unit(),
        StatemineTransfer: sts.unit(),
        SupplementaryFee: sts.unit(),
        TeleportAssets: sts.unit(),
        TransferBack: sts.unit(),
        TransferTo: sts.unit(),
        UmpContributeTransact: sts.unit(),
        Unbond: sts.unit(),
        Undelegate: sts.unit(),
        Vote: sts.unit(),
        WithdrawUnbonded: sts.unit(),
        XtokensTransferBack: sts.unit(),
    }
})
