import {sts, Result, Option, Bytes, BitSequence} from './support'

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

export const AccountId32 = sts.bytes()

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

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_109,
        CumulusXcm: Type_120,
        Origins: Origin,
        PolkadotXcm: Type_112,
        TechnicalCommittee: Type_110,
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

export const Type_110: sts.Type<Type_110> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export type Type_110 = Type_110_Member | Type_110_Members | Type_110__Phantom

export interface Type_110_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_110_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_110__Phantom {
    __kind: '_Phantom'
}

export const Type_112: sts.Type<Type_112> = sts.closedEnum(() => {
    return  {
        Response: V3MultiLocation,
        Xcm: V3MultiLocation,
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
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export type V3NetworkId = V3NetworkId_BitcoinCash | V3NetworkId_BitcoinCore | V3NetworkId_ByFork | V3NetworkId_ByGenesis | V3NetworkId_Ethereum | V3NetworkId_Kusama | V3NetworkId_Polkadot | V3NetworkId_Rococo | V3NetworkId_Westend | V3NetworkId_Wococo

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

export type Type_112 = Type_112_Response | Type_112_Xcm

export interface Type_112_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export interface Type_112_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
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

export const Type_120: sts.Type<Type_120> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export type Type_120 = Type_120_Relay | Type_120_SiblingParachain

export interface Type_120_Relay {
    __kind: 'Relay'
}

export interface Type_120_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export const Type_109: sts.Type<Type_109> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export type Type_109 = Type_109_Member | Type_109_Members | Type_109__Phantom

export interface Type_109_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_109_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_109__Phantom {
    __kind: '_Phantom'
}

export type OriginCaller = OriginCaller_Council | OriginCaller_CumulusXcm | OriginCaller_Origins | OriginCaller_PolkadotXcm | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_109
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_120
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Origin
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_112
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_110
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
        Bounties: BountiesCall,
        CallSwitchgear: CallSwitchgearCall,
        ChannelCommission: ChannelCommissionCall,
        CollatorSelection: CollatorSelectionCall,
        ConvictionVoting: ConvictionVotingCall,
        Council: CouncilCall,
        CouncilMembership: CouncilMembershipCall,
        CrossInOut: CrossInOutCall,
        CumulusXcm: CumulusXcmCall,
        Currencies: CurrenciesCall,
        Democracy: DemocracyCall,
        DmpQueue: DmpQueueCall,
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
        Tips: TipsCall,
        TokenConversion: TokenConversionCall,
        Tokens: TokensCall,
        Treasury: TreasuryCall,
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
export type ZenlinkProtocolCall = ZenlinkProtocolCall_add_liquidity | ZenlinkProtocolCall_bootstrap_charge_reward | ZenlinkProtocolCall_bootstrap_claim | ZenlinkProtocolCall_bootstrap_contribute | ZenlinkProtocolCall_bootstrap_create | ZenlinkProtocolCall_bootstrap_end | ZenlinkProtocolCall_bootstrap_refund | ZenlinkProtocolCall_bootstrap_update | ZenlinkProtocolCall_bootstrap_withdraw_reward | ZenlinkProtocolCall_create_pair | ZenlinkProtocolCall_remove_liquidity | ZenlinkProtocolCall_set_fee_point | ZenlinkProtocolCall_set_fee_receiver | ZenlinkProtocolCall_swap_assets_for_exact_assets | ZenlinkProtocolCall_swap_exact_assets_for_assets | ZenlinkProtocolCall_transfer

/**
 * See [`Pallet::add_liquidity`].
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

/**
 * See [`Pallet::bootstrap_charge_reward`].
 */
export interface ZenlinkProtocolCall_bootstrap_charge_reward {
    __kind: 'bootstrap_charge_reward'
    asset0: AssetId
    asset1: AssetId
    chargeRewards: [AssetId, bigint][]
}

/**
 * See [`Pallet::bootstrap_claim`].
 */
export interface ZenlinkProtocolCall_bootstrap_claim {
    __kind: 'bootstrap_claim'
    recipient: MultiAddress
    asset0: AssetId
    asset1: AssetId
    deadline: number
}

/**
 * See [`Pallet::bootstrap_contribute`].
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
 * See [`Pallet::bootstrap_create`].
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
 * See [`Pallet::bootstrap_end`].
 */
export interface ZenlinkProtocolCall_bootstrap_end {
    __kind: 'bootstrap_end'
    asset0: AssetId
    asset1: AssetId
}

/**
 * See [`Pallet::bootstrap_refund`].
 */
export interface ZenlinkProtocolCall_bootstrap_refund {
    __kind: 'bootstrap_refund'
    asset0: AssetId
    asset1: AssetId
}

/**
 * See [`Pallet::bootstrap_update`].
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

/**
 * See [`Pallet::bootstrap_withdraw_reward`].
 */
export interface ZenlinkProtocolCall_bootstrap_withdraw_reward {
    __kind: 'bootstrap_withdraw_reward'
    asset0: AssetId
    asset1: AssetId
    recipient: MultiAddress
}

/**
 * See [`Pallet::create_pair`].
 */
export interface ZenlinkProtocolCall_create_pair {
    __kind: 'create_pair'
    asset0: AssetId
    asset1: AssetId
}

/**
 * See [`Pallet::remove_liquidity`].
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
 * See [`Pallet::set_fee_point`].
 */
export interface ZenlinkProtocolCall_set_fee_point {
    __kind: 'set_fee_point'
    feePoint: number
}

/**
 * See [`Pallet::set_fee_receiver`].
 */
export interface ZenlinkProtocolCall_set_fee_receiver {
    __kind: 'set_fee_receiver'
    sendTo?: (MultiAddress | undefined)
}

/**
 * See [`Pallet::swap_assets_for_exact_assets`].
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
 * See [`Pallet::swap_exact_assets_for_assets`].
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
 * See [`Pallet::transfer`].
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
        service_overweight: sts.enumStruct({
            index: sts.bigint(),
            weightLimit: Weight,
        }),
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
        update_threshold_weight: sts.enumStruct({
            new: Weight,
        }),
        update_weight_restrict_decay: sts.enumStruct({
            new: Weight,
        }),
        update_xcmp_max_individual_weight: sts.enumStruct({
            new: Weight,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmpQueueCall = XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * See [`Pallet::resume_xcm_execution`].
 */
export interface XcmpQueueCall_resume_xcm_execution {
    __kind: 'resume_xcm_execution'
}

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
 * See [`Pallet::update_suspend_threshold`].
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
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
export const XcmInterfaceCall: sts.Type<XcmInterfaceCall> = sts.closedEnum(() => {
    return  {
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

export const XcmOperationType: sts.Type<XcmOperationType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Bond: sts.unit(),
        BondExtra: sts.unit(),
        CancelLeave: sts.unit(),
        Chill: sts.unit(),
        ConvertAsset: sts.unit(),
        Delegate: sts.unit(),
        ExecuteLeave: sts.unit(),
        Liquidize: sts.unit(),
        Payout: sts.unit(),
        Rebond: sts.unit(),
        RemoveVote: sts.unit(),
        StatemineTransfer: sts.unit(),
        SupplementaryFee: sts.unit(),
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

export type XcmOperationType = XcmOperationType_Any | XcmOperationType_Bond | XcmOperationType_BondExtra | XcmOperationType_CancelLeave | XcmOperationType_Chill | XcmOperationType_ConvertAsset | XcmOperationType_Delegate | XcmOperationType_ExecuteLeave | XcmOperationType_Liquidize | XcmOperationType_Payout | XcmOperationType_Rebond | XcmOperationType_RemoveVote | XcmOperationType_StatemineTransfer | XcmOperationType_SupplementaryFee | XcmOperationType_TransferBack | XcmOperationType_TransferTo | XcmOperationType_UmpContributeTransact | XcmOperationType_Unbond | XcmOperationType_Undelegate | XcmOperationType_Vote | XcmOperationType_WithdrawUnbonded | XcmOperationType_XtokensTransferBack

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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmInterfaceCall = XcmInterfaceCall_transfer_statemine_assets | XcmInterfaceCall_update_xcm_dest_weight_and_fee

/**
 * See [`Pallet::transfer_statemine_assets`].
 */
export interface XcmInterfaceCall_transfer_statemine_assets {
    __kind: 'transfer_statemine_assets'
    amount: bigint
    assetId: number
    dest?: (AccountId32 | undefined)
}

/**
 * See [`Pallet::update_xcm_dest_weight_and_fee`].
 */
export interface XcmInterfaceCall_update_xcm_dest_weight_and_fee {
    __kind: 'update_xcm_dest_weight_and_fee'
    updates: [CurrencyId, XcmOperationType, Weight, bigint][]
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
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset: sts.enumStruct({
            asset: VersionedMultiAsset,
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiasset_with_fee: sts.enumStruct({
            asset: VersionedMultiAsset,
            fee: VersionedMultiAsset,
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multiassets: sts.enumStruct({
            assets: VersionedMultiAssets,
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_multicurrencies: sts.enumStruct({
            currencies: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_with_fee: sts.enumStruct({
            currencyId: CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
    }
})

export const VersionedMultiAssets: sts.Type<VersionedMultiAssets> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
    }
})

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

export type VersionedMultiAssets = VersionedMultiAssets_V2 | VersionedMultiAssets_V3

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedMultiAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export const VersionedMultiAsset: sts.Type<VersionedMultiAsset> = sts.closedEnum(() => {
    return  {
        V2: V2MultiAsset,
        V3: V3MultiAsset,
    }
})

export type VersionedMultiAsset = VersionedMultiAsset_V2 | VersionedMultiAsset_V3

export interface VersionedMultiAsset_V2 {
    __kind: 'V2'
    value: V2MultiAsset
}

export interface VersionedMultiAsset_V3 {
    __kind: 'V3'
    value: V3MultiAsset
}

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return  {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
    }
})

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multiassets | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_with_fee

/**
 * See [`Pallet::transfer`].
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: CurrencyId
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
 * See [`Pallet::transfer_multicurrencies`].
 */
export interface XTokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [CurrencyId, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_with_fee`].
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: CurrencyId
    amount: bigint
    fee: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
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

export const H256 = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type WhitelistCall = WhitelistCall_dispatch_whitelisted_call | WhitelistCall_dispatch_whitelisted_call_with_preimage | WhitelistCall_remove_whitelisted_call | WhitelistCall_whitelist_call

/**
 * See [`Pallet::dispatch_whitelisted_call`].
 */
export interface WhitelistCall_dispatch_whitelisted_call {
    __kind: 'dispatch_whitelisted_call'
    callHash: H256
    callEncodedLen: number
    callWeightWitness: Weight
}

/**
 * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
 */
export interface WhitelistCall_dispatch_whitelisted_call_with_preimage {
    __kind: 'dispatch_whitelisted_call_with_preimage'
    call: Call
}

/**
 * See [`Pallet::remove_whitelisted_call`].
 */
export interface WhitelistCall_remove_whitelisted_call {
    __kind: 'remove_whitelisted_call'
    callHash: H256
}

/**
 * See [`Pallet::whitelist_call`].
 */
export interface WhitelistCall_whitelist_call {
    __kind: 'whitelist_call'
    callHash: H256
}

export type H256 = Bytes

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
            response: V3Response,
        }),
        notify_vote: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
        }),
        remove_delegator_vote: sts.enumStruct({
            vtoken: CurrencyId,
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
            vtokenVote: Type_370,
        }),
    }
})

export const Type_370: sts.Type<Type_370> = sts.closedEnum(() => {
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

export type Type_370 = Type_370_Split | Type_370_SplitAbstain | Type_370_Standard

export interface Type_370_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface Type_370_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export interface Type_370_Standard {
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
        name: BoundedVec,
        moduleName: BoundedVec,
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export const BoundedVec = sts.bytes()

export interface V3PalletInfo {
    index: number
    name: BoundedVec
    moduleName: BoundedVec
    major: number
    minor: number
    patch: number
}

export type BoundedVec = Bytes

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
export type VtokenVotingCall = VtokenVotingCall_add_delegator | VtokenVotingCall_kill_referendum | VtokenVotingCall_notify_remove_delegator_vote | VtokenVotingCall_notify_vote | VtokenVotingCall_remove_delegator_vote | VtokenVotingCall_set_referendum_status | VtokenVotingCall_set_undeciding_timeout | VtokenVotingCall_set_vote_cap_ratio | VtokenVotingCall_set_vote_locking_period | VtokenVotingCall_unlock | VtokenVotingCall_vote

/**
 * See [`Pallet::add_delegator`].
 */
export interface VtokenVotingCall_add_delegator {
    __kind: 'add_delegator'
    vtoken: CurrencyId
    derivativeIndex: number
}

/**
 * See [`Pallet::kill_referendum`].
 */
export interface VtokenVotingCall_kill_referendum {
    __kind: 'kill_referendum'
    vtoken: CurrencyId
    pollIndex: number
}

/**
 * See [`Pallet::notify_remove_delegator_vote`].
 */
export interface VtokenVotingCall_notify_remove_delegator_vote {
    __kind: 'notify_remove_delegator_vote'
    queryId: bigint
    response: V3Response
}

/**
 * See [`Pallet::notify_vote`].
 */
export interface VtokenVotingCall_notify_vote {
    __kind: 'notify_vote'
    queryId: bigint
    response: V3Response
}

/**
 * See [`Pallet::remove_delegator_vote`].
 */
export interface VtokenVotingCall_remove_delegator_vote {
    __kind: 'remove_delegator_vote'
    vtoken: CurrencyId
    pollIndex: number
    derivativeIndex: number
}

/**
 * See [`Pallet::set_referendum_status`].
 */
export interface VtokenVotingCall_set_referendum_status {
    __kind: 'set_referendum_status'
    vtoken: CurrencyId
    pollIndex: number
    info: ReferendumInfo
}

/**
 * See [`Pallet::set_undeciding_timeout`].
 */
export interface VtokenVotingCall_set_undeciding_timeout {
    __kind: 'set_undeciding_timeout'
    vtoken: CurrencyId
    undecidingTimeout: number
}

/**
 * See [`Pallet::set_vote_cap_ratio`].
 */
export interface VtokenVotingCall_set_vote_cap_ratio {
    __kind: 'set_vote_cap_ratio'
    vtoken: CurrencyId
    voteCapRatio: Perbill
}

/**
 * See [`Pallet::set_vote_locking_period`].
 */
export interface VtokenVotingCall_set_vote_locking_period {
    __kind: 'set_vote_locking_period'
    vtoken: CurrencyId
    lockingPeriod: number
}

/**
 * See [`Pallet::unlock`].
 */
export interface VtokenVotingCall_unlock {
    __kind: 'unlock'
    vtoken: CurrencyId
    pollIndex: number
}

/**
 * See [`Pallet::vote`].
 */
export interface VtokenVotingCall_vote {
    __kind: 'vote'
    vtoken: CurrencyId
    pollIndex: number
    vtokenVote: Type_370
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
export type VtokenMintingCall = VtokenMintingCall_add_support_rebond_token | VtokenMintingCall_mint | VtokenMintingCall_rebond | VtokenMintingCall_rebond_by_unlock_id | VtokenMintingCall_recreate_currency_ongoing_time_unit | VtokenMintingCall_redeem | VtokenMintingCall_remove_support_rebond_token | VtokenMintingCall_set_fees | VtokenMintingCall_set_hook_iteration_limit | VtokenMintingCall_set_min_time_unit | VtokenMintingCall_set_minimum_mint | VtokenMintingCall_set_minimum_redeem | VtokenMintingCall_set_unlock_duration | VtokenMintingCall_set_unlocking_total

/**
 * See [`Pallet::add_support_rebond_token`].
 */
export interface VtokenMintingCall_add_support_rebond_token {
    __kind: 'add_support_rebond_token'
    tokenId: CurrencyId
}

/**
 * See [`Pallet::mint`].
 */
export interface VtokenMintingCall_mint {
    __kind: 'mint'
    tokenId: CurrencyId
    tokenAmount: bigint
    remark: Bytes
    channelId?: (number | undefined)
}

/**
 * See [`Pallet::rebond`].
 */
export interface VtokenMintingCall_rebond {
    __kind: 'rebond'
    tokenId: CurrencyId
    tokenAmount: bigint
}

/**
 * See [`Pallet::rebond_by_unlock_id`].
 */
export interface VtokenMintingCall_rebond_by_unlock_id {
    __kind: 'rebond_by_unlock_id'
    tokenId: CurrencyId
    unlockId: number
}

/**
 * See [`Pallet::recreate_currency_ongoing_time_unit`].
 */
export interface VtokenMintingCall_recreate_currency_ongoing_time_unit {
    __kind: 'recreate_currency_ongoing_time_unit'
    tokenId: CurrencyId
    timeUnit: TimeUnit
}

/**
 * See [`Pallet::redeem`].
 */
export interface VtokenMintingCall_redeem {
    __kind: 'redeem'
    vtokenId: CurrencyId
    vtokenAmount: bigint
}

/**
 * See [`Pallet::remove_support_rebond_token`].
 */
export interface VtokenMintingCall_remove_support_rebond_token {
    __kind: 'remove_support_rebond_token'
    tokenId: CurrencyId
}

/**
 * See [`Pallet::set_fees`].
 */
export interface VtokenMintingCall_set_fees {
    __kind: 'set_fees'
    mintFee: Permill
    redeemFee: Permill
}

/**
 * See [`Pallet::set_hook_iteration_limit`].
 */
export interface VtokenMintingCall_set_hook_iteration_limit {
    __kind: 'set_hook_iteration_limit'
    limit: number
}

/**
 * See [`Pallet::set_min_time_unit`].
 */
export interface VtokenMintingCall_set_min_time_unit {
    __kind: 'set_min_time_unit'
    tokenId: CurrencyId
    timeUnit: TimeUnit
}

/**
 * See [`Pallet::set_minimum_mint`].
 */
export interface VtokenMintingCall_set_minimum_mint {
    __kind: 'set_minimum_mint'
    tokenId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::set_minimum_redeem`].
 */
export interface VtokenMintingCall_set_minimum_redeem {
    __kind: 'set_minimum_redeem'
    tokenId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::set_unlock_duration`].
 */
export interface VtokenMintingCall_set_unlock_duration {
    __kind: 'set_unlock_duration'
    tokenId: CurrencyId
    unlockDuration: TimeUnit
}

/**
 * See [`Pallet::set_unlocking_total`].
 */
export interface VtokenMintingCall_set_unlocking_total {
    __kind: 'set_unlocking_total'
    tokenId: CurrencyId
    amount: bigint
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

/**
 * See [`Pallet::force_set_cliff`].
 */
export interface VestingCall_force_set_cliff {
    __kind: 'force_set_cliff'
    target: MultiAddress
    cliffBlock: number
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
 * See [`Pallet::init_vesting_start_at`].
 */
export interface VestingCall_init_vesting_start_at {
    __kind: 'init_vesting_start_at'
    vestingStartAt: number
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
 * See [`Pallet::set_vesting_per_block`].
 */
export interface VestingCall_set_vesting_per_block {
    __kind: 'set_vesting_per_block'
    target: MultiAddress
    index: number
    perBlock: bigint
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VeMintingCall: sts.Type<VeMintingCall> = sts.closedEnum(() => {
    return  {
        create_lock: sts.enumStruct({
            value: sts.bigint(),
            unlockTime: sts.number(),
        }),
        get_rewards: sts.unit(),
        increase_amount: sts.enumStruct({
            value: sts.bigint(),
        }),
        increase_unlock_time: sts.enumStruct({
            time: sts.number(),
        }),
        notify_rewards: sts.enumStruct({
            incentiveFrom: AccountId32,
            rewardsDuration: sts.option(() => sts.number()),
            rewards: sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()])),
        }),
        set_config: sts.enumStruct({
            minMint: sts.option(() => sts.bigint()),
            minBlock: sts.option(() => sts.number()),
        }),
        withdraw: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VeMintingCall = VeMintingCall_create_lock | VeMintingCall_get_rewards | VeMintingCall_increase_amount | VeMintingCall_increase_unlock_time | VeMintingCall_notify_rewards | VeMintingCall_set_config | VeMintingCall_withdraw

/**
 * See [`Pallet::create_lock`].
 */
export interface VeMintingCall_create_lock {
    __kind: 'create_lock'
    value: bigint
    unlockTime: number
}

/**
 * See [`Pallet::get_rewards`].
 */
export interface VeMintingCall_get_rewards {
    __kind: 'get_rewards'
}

/**
 * See [`Pallet::increase_amount`].
 */
export interface VeMintingCall_increase_amount {
    __kind: 'increase_amount'
    value: bigint
}

/**
 * See [`Pallet::increase_unlock_time`].
 */
export interface VeMintingCall_increase_unlock_time {
    __kind: 'increase_unlock_time'
    time: number
}

/**
 * See [`Pallet::notify_rewards`].
 */
export interface VeMintingCall_notify_rewards {
    __kind: 'notify_rewards'
    incentiveFrom: AccountId32
    rewardsDuration?: (number | undefined)
    rewards: [CurrencyId, bigint][]
}

/**
 * See [`Pallet::set_config`].
 */
export interface VeMintingCall_set_config {
    __kind: 'set_config'
    minMint?: (bigint | undefined)
    minBlock?: (number | undefined)
}

/**
 * See [`Pallet::withdraw`].
 */
export interface VeMintingCall_withdraw {
    __kind: 'withdraw'
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
 * See [`Pallet::approve_proposal`].
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * See [`Pallet::check_status`].
 */
export interface TreasuryCall_check_status {
    __kind: 'check_status'
    index: number
}

/**
 * See [`Pallet::payout`].
 */
export interface TreasuryCall_payout {
    __kind: 'payout'
    index: number
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
    beneficiary: AccountId32
    validFrom?: (number | undefined)
}

/**
 * See [`Pallet::spend_local`].
 */
export interface TreasuryCall_spend_local {
    __kind: 'spend_local'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::void_spend`].
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
 * See [`Pallet::force_transfer`].
 */
export interface TokensCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::set_balance`].
 */
export interface TokensCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    currencyId: CurrencyId
    newFree: bigint
    newReserved: bigint
}

/**
 * See [`Pallet::transfer`].
 */
export interface TokensCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface TokensCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    currencyId: CurrencyId
    keepAlive: boolean
}

/**
 * See [`Pallet::transfer_keep_alive`].
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

/**
 * See [`Pallet::set_exchange_fee`].
 */
export interface TokenConversionCall_set_exchange_fee {
    __kind: 'set_exchange_fee'
    exchangeFee: VstokenConversionExchangeFee
}

/**
 * See [`Pallet::set_exchange_rate`].
 */
export interface TokenConversionCall_set_exchange_rate {
    __kind: 'set_exchange_rate'
    lease: number
    exchangeRate: VstokenConversionExchangeRate
}

/**
 * See [`Pallet::set_relaychain_lease`].
 */
export interface TokenConversionCall_set_relaychain_lease {
    __kind: 'set_relaychain_lease'
    lease: number
}

/**
 * See [`Pallet::vsbond_convert_to_vstoken`].
 */
export interface TokenConversionCall_vsbond_convert_to_vstoken {
    __kind: 'vsbond_convert_to_vstoken'
    vsBondCurrencyId: CurrencyId
    vsbondAmount: bigint
    minimumVstoken: bigint
}

/**
 * See [`Pallet::vstoken_convert_to_vsbond`].
 */
export interface TokenConversionCall_vstoken_convert_to_vsbond {
    __kind: 'vstoken_convert_to_vsbond'
    currencyId: CurrencyId
    vstokenAmount: bigint
    minimumVsbond: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TipsCall: sts.Type<TipsCall> = sts.closedEnum(() => {
    return  {
        close_tip: sts.enumStruct({
            hash: H256,
        }),
        report_awesome: sts.enumStruct({
            reason: sts.bytes(),
            who: MultiAddress,
        }),
        retract_tip: sts.enumStruct({
            hash: H256,
        }),
        slash_tip: sts.enumStruct({
            hash: H256,
        }),
        tip: sts.enumStruct({
            hash: H256,
            tipValue: sts.bigint(),
        }),
        tip_new: sts.enumStruct({
            reason: sts.bytes(),
            who: MultiAddress,
            tipValue: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TipsCall = TipsCall_close_tip | TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_slash_tip | TipsCall_tip | TipsCall_tip_new

/**
 * See [`Pallet::close_tip`].
 */
export interface TipsCall_close_tip {
    __kind: 'close_tip'
    hash: H256
}

/**
 * See [`Pallet::report_awesome`].
 */
export interface TipsCall_report_awesome {
    __kind: 'report_awesome'
    reason: Bytes
    who: MultiAddress
}

/**
 * See [`Pallet::retract_tip`].
 */
export interface TipsCall_retract_tip {
    __kind: 'retract_tip'
    hash: H256
}

/**
 * See [`Pallet::slash_tip`].
 */
export interface TipsCall_slash_tip {
    __kind: 'slash_tip'
    hash: H256
}

/**
 * See [`Pallet::tip`].
 */
export interface TipsCall_tip {
    __kind: 'tip'
    hash: H256
    tipValue: bigint
}

/**
 * See [`Pallet::tip_new`].
 */
export interface TipsCall_tip_new {
    __kind: 'tip_new'
    reason: Bytes
    who: MultiAddress
    tipValue: bigint
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
 * See [`Pallet::add_member`].
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * See [`Pallet::change_key`].
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * See [`Pallet::clear_prime`].
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * See [`Pallet::remove_member`].
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * See [`Pallet::reset_members`].
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * See [`Pallet::set_prime`].
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * See [`Pallet::swap_member`].
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
 * See [`Pallet::close`].
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * See [`Pallet::disapprove_proposal`].
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * See [`Pallet::execute`].
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::propose`].
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::set_members`].
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * See [`Pallet::vote`].
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
 * See [`Pallet::delete_token`].
 */
export interface SystemStakingCall_delete_token {
    __kind: 'delete_token'
    token: CurrencyId
}

/**
 * See [`Pallet::payout`].
 */
export interface SystemStakingCall_payout {
    __kind: 'payout'
    token: CurrencyId
}

/**
 * See [`Pallet::refresh_token_info`].
 */
export interface SystemStakingCall_refresh_token_info {
    __kind: 'refresh_token_info'
    token: CurrencyId
}

/**
 * See [`Pallet::token_config`].
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

/**
 * See [`Pallet::charge`].
 */
export interface SystemMakerCall_charge {
    __kind: 'charge'
    currencyId: CurrencyId
    value: bigint
}

/**
 * See [`Pallet::close`].
 */
export interface SystemMakerCall_close {
    __kind: 'close'
    currencyId: CurrencyId
}

/**
 * See [`Pallet::payout`].
 */
export interface SystemMakerCall_payout {
    __kind: 'payout'
    currencyId: CurrencyId
    value: bigint
}

/**
 * See [`Pallet::set_config`].
 */
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

/**
 * See [`Pallet::add_liquidity`].
 */
export interface StablePoolCall_add_liquidity {
    __kind: 'add_liquidity'
    poolId: number
    amounts: bigint[]
    minMintAmount: bigint
}

/**
 * See [`Pallet::config_vtoken_auto_refresh`].
 */
export interface StablePoolCall_config_vtoken_auto_refresh {
    __kind: 'config_vtoken_auto_refresh'
    vtoken: CurrencyId
    hardcap: Permill
}

/**
 * See [`Pallet::create_pool`].
 */
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

/**
 * See [`Pallet::edit_token_rate`].
 */
export interface StablePoolCall_edit_token_rate {
    __kind: 'edit_token_rate'
    poolId: number
    tokenRateInfo: [CurrencyId, [bigint, bigint]][]
}

/**
 * See [`Pallet::modify_a`].
 */
export interface StablePoolCall_modify_a {
    __kind: 'modify_a'
    poolId: number
    a: bigint
    futureABlock: number
}

/**
 * See [`Pallet::modify_fees`].
 */
export interface StablePoolCall_modify_fees {
    __kind: 'modify_fees'
    poolId: number
    mintFee?: (bigint | undefined)
    swapFee?: (bigint | undefined)
    redeemFee?: (bigint | undefined)
}

/**
 * See [`Pallet::modify_recipients`].
 */
export interface StablePoolCall_modify_recipients {
    __kind: 'modify_recipients'
    poolId: number
    feeRecipient?: (AccountId32 | undefined)
    yieldRecipient?: (AccountId32 | undefined)
}

/**
 * See [`Pallet::redeem_multi`].
 */
export interface StablePoolCall_redeem_multi {
    __kind: 'redeem_multi'
    poolId: number
    amounts: bigint[]
    maxRedeemAmount: bigint
}

/**
 * See [`Pallet::redeem_proportion`].
 */
export interface StablePoolCall_redeem_proportion {
    __kind: 'redeem_proportion'
    poolId: number
    amount: bigint
    minRedeemAmounts: bigint[]
}

/**
 * See [`Pallet::redeem_single`].
 */
export interface StablePoolCall_redeem_single {
    __kind: 'redeem_single'
    poolId: number
    amount: bigint
    i: number
    minRedeemAmount: bigint
    assetLength: number
}

/**
 * See [`Pallet::remove_vtoken_auto_refresh`].
 */
export interface StablePoolCall_remove_vtoken_auto_refresh {
    __kind: 'remove_vtoken_auto_refresh'
    vtoken: CurrencyId
}

/**
 * See [`Pallet::swap`].
 */
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

export type H160 = Bytes

export const H160 = sts.bytes()

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
export type SlpxCall = SlpxCall_add_whitelist | SlpxCall_force_add_order | SlpxCall_mint | SlpxCall_redeem | SlpxCall_remove_whitelist | SlpxCall_set_currency_ethereum_call_switch | SlpxCall_set_currency_support_xcm_fee | SlpxCall_set_delay_block | SlpxCall_set_ethereum_call_configration | SlpxCall_set_execution_fee | SlpxCall_set_transfer_to_fee | SlpxCall_stable_pool_swap | SlpxCall_zenlink_swap

/**
 * See [`Pallet::add_whitelist`].
 */
export interface SlpxCall_add_whitelist {
    __kind: 'add_whitelist'
    supportChain: SupportChain
    evmContractAccountId: AccountId32
}

/**
 * See [`Pallet::force_add_order`].
 */
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
 * See [`Pallet::mint`].
 */
export interface SlpxCall_mint {
    __kind: 'mint'
    evmCaller: H160
    currencyId: CurrencyId
    targetChain: TargetChain
    remark: Bytes
}

/**
 * See [`Pallet::redeem`].
 */
export interface SlpxCall_redeem {
    __kind: 'redeem'
    evmCaller: H160
    vtokenId: CurrencyId
    targetChain: TargetChain
}

/**
 * See [`Pallet::remove_whitelist`].
 */
export interface SlpxCall_remove_whitelist {
    __kind: 'remove_whitelist'
    supportChain: SupportChain
    evmContractAccountId: AccountId32
}

/**
 * See [`Pallet::set_currency_ethereum_call_switch`].
 */
export interface SlpxCall_set_currency_ethereum_call_switch {
    __kind: 'set_currency_ethereum_call_switch'
    currencyId: CurrencyId
    isSupport: boolean
}

/**
 * See [`Pallet::set_currency_support_xcm_fee`].
 */
export interface SlpxCall_set_currency_support_xcm_fee {
    __kind: 'set_currency_support_xcm_fee'
    currencyId: CurrencyId
    isSupport: boolean
}

/**
 * See [`Pallet::set_delay_block`].
 */
export interface SlpxCall_set_delay_block {
    __kind: 'set_delay_block'
    delayBlock: number
}

/**
 * See [`Pallet::set_ethereum_call_configration`].
 */
export interface SlpxCall_set_ethereum_call_configration {
    __kind: 'set_ethereum_call_configration'
    xcmFee: bigint
    xcmWeight: Weight
    period: number
    contract: H160
}

/**
 * See [`Pallet::set_execution_fee`].
 */
export interface SlpxCall_set_execution_fee {
    __kind: 'set_execution_fee'
    currencyId: CurrencyId
    executionFee: bigint
}

/**
 * See [`Pallet::set_transfer_to_fee`].
 */
export interface SlpxCall_set_transfer_to_fee {
    __kind: 'set_transfer_to_fee'
    supportChain: SupportChain
    transferToFee: bigint
}

/**
 * See [`Pallet::stable_pool_swap`].
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
 * See [`Pallet::zenlink_swap`].
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SlpCall = SlpCall_add_delegator | SlpCall_add_supplement_fee_account_to_whitelist | SlpCall_add_to_validator_boost_list | SlpCall_add_validator | SlpCall_bond | SlpCall_bond_extra | SlpCall_charge_host_fee_and_tune_vtoken_exchange_rate | SlpCall_chill | SlpCall_clean_outdated_validator_boost_list | SlpCall_confirm_delegator_ledger | SlpCall_confirm_delegator_ledger_query_response | SlpCall_confirm_validators_by_delegator | SlpCall_confirm_validators_by_delegator_query_response | SlpCall_convert_asset | SlpCall_convert_treasury_vtoken | SlpCall_decrease_token_pool | SlpCall_delegate | SlpCall_fail_delegator_ledger_query_response | SlpCall_fail_validators_by_delegator_query_response | SlpCall_increase_token_pool | SlpCall_initialize_delegator | SlpCall_liquidize | SlpCall_payout | SlpCall_rebond | SlpCall_redelegate | SlpCall_refund_currency_due_unbond | SlpCall_remove_delegator | SlpCall_remove_from_validator_boot_list | SlpCall_remove_supplement_fee_account_from_whitelist | SlpCall_remove_validator | SlpCall_reset_validators | SlpCall_set_currency_delays | SlpCall_set_currency_tune_exchange_rate_limit | SlpCall_set_delegator_ledger | SlpCall_set_fee_source | SlpCall_set_hosting_fees | SlpCall_set_minimums_and_maximums | SlpCall_set_ongoing_time_unit_update_interval | SlpCall_set_operate_origin | SlpCall_set_validator_boost_list | SlpCall_set_validators_by_delegator | SlpCall_supplement_fee_reserve | SlpCall_transfer_back | SlpCall_transfer_to | SlpCall_unbond | SlpCall_unbond_all | SlpCall_undelegate | SlpCall_update_ongoing_time_unit

/**
 * See [`Pallet::add_delegator`].
 */
export interface SlpCall_add_delegator {
    __kind: 'add_delegator'
    currencyId: CurrencyId
    index: number
    who: V3MultiLocation
}

/**
 * See [`Pallet::add_supplement_fee_account_to_whitelist`].
 */
export interface SlpCall_add_supplement_fee_account_to_whitelist {
    __kind: 'add_supplement_fee_account_to_whitelist'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * See [`Pallet::add_to_validator_boost_list`].
 */
export interface SlpCall_add_to_validator_boost_list {
    __kind: 'add_to_validator_boost_list'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * See [`Pallet::add_validator`].
 */
export interface SlpCall_add_validator {
    __kind: 'add_validator'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * See [`Pallet::bond`].
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
 * See [`Pallet::bond_extra`].
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
 * See [`Pallet::charge_host_fee_and_tune_vtoken_exchange_rate`].
 */
export interface SlpCall_charge_host_fee_and_tune_vtoken_exchange_rate {
    __kind: 'charge_host_fee_and_tune_vtoken_exchange_rate'
    currencyId: CurrencyId
    value: bigint
    who?: (V3MultiLocation | undefined)
}

/**
 * See [`Pallet::chill`].
 */
export interface SlpCall_chill {
    __kind: 'chill'
    currencyId: CurrencyId
    who: V3MultiLocation
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * See [`Pallet::clean_outdated_validator_boost_list`].
 */
export interface SlpCall_clean_outdated_validator_boost_list {
    __kind: 'clean_outdated_validator_boost_list'
    token: CurrencyId
    page: number
}

/**
 * See [`Pallet::confirm_delegator_ledger`].
 */
export interface SlpCall_confirm_delegator_ledger {
    __kind: 'confirm_delegator_ledger'
    queryId: bigint
    response: V3Response
}

/**
 * See [`Pallet::confirm_delegator_ledger_query_response`].
 */
export interface SlpCall_confirm_delegator_ledger_query_response {
    __kind: 'confirm_delegator_ledger_query_response'
    currencyId: CurrencyId
    queryId: bigint
}

/**
 * See [`Pallet::confirm_validators_by_delegator`].
 */
export interface SlpCall_confirm_validators_by_delegator {
    __kind: 'confirm_validators_by_delegator'
    queryId: bigint
    response: V3Response
}

/**
 * See [`Pallet::confirm_validators_by_delegator_query_response`].
 */
export interface SlpCall_confirm_validators_by_delegator_query_response {
    __kind: 'confirm_validators_by_delegator_query_response'
    currencyId: CurrencyId
    queryId: bigint
}

/**
 * See [`Pallet::convert_asset`].
 */
export interface SlpCall_convert_asset {
    __kind: 'convert_asset'
    currencyId: CurrencyId
    who: V3MultiLocation
    amount: bigint
    ifFromCurrency: boolean
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * See [`Pallet::convert_treasury_vtoken`].
 */
export interface SlpCall_convert_treasury_vtoken {
    __kind: 'convert_treasury_vtoken'
    vtoken: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::decrease_token_pool`].
 */
export interface SlpCall_decrease_token_pool {
    __kind: 'decrease_token_pool'
    currencyId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::delegate`].
 */
export interface SlpCall_delegate {
    __kind: 'delegate'
    currencyId: CurrencyId
    who: V3MultiLocation
    targets: V3MultiLocation[]
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * See [`Pallet::fail_delegator_ledger_query_response`].
 */
export interface SlpCall_fail_delegator_ledger_query_response {
    __kind: 'fail_delegator_ledger_query_response'
    currencyId: CurrencyId
    queryId: bigint
}

/**
 * See [`Pallet::fail_validators_by_delegator_query_response`].
 */
export interface SlpCall_fail_validators_by_delegator_query_response {
    __kind: 'fail_validators_by_delegator_query_response'
    currencyId: CurrencyId
    queryId: bigint
}

/**
 * See [`Pallet::increase_token_pool`].
 */
export interface SlpCall_increase_token_pool {
    __kind: 'increase_token_pool'
    currencyId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::initialize_delegator`].
 */
export interface SlpCall_initialize_delegator {
    __kind: 'initialize_delegator'
    currencyId: CurrencyId
    delegatorLocation?: (V3MultiLocation | undefined)
}

/**
 * See [`Pallet::liquidize`].
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
 * See [`Pallet::payout`].
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
 * See [`Pallet::rebond`].
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
 * See [`Pallet::redelegate`].
 */
export interface SlpCall_redelegate {
    __kind: 'redelegate'
    currencyId: CurrencyId
    who: V3MultiLocation
    targets?: (V3MultiLocation[] | undefined)
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * See [`Pallet::refund_currency_due_unbond`].
 */
export interface SlpCall_refund_currency_due_unbond {
    __kind: 'refund_currency_due_unbond'
    currencyId: CurrencyId
}

/**
 * See [`Pallet::remove_delegator`].
 */
export interface SlpCall_remove_delegator {
    __kind: 'remove_delegator'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * See [`Pallet::remove_from_validator_boot_list`].
 */
export interface SlpCall_remove_from_validator_boot_list {
    __kind: 'remove_from_validator_boot_list'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * See [`Pallet::remove_supplement_fee_account_from_whitelist`].
 */
export interface SlpCall_remove_supplement_fee_account_from_whitelist {
    __kind: 'remove_supplement_fee_account_from_whitelist'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * See [`Pallet::remove_validator`].
 */
export interface SlpCall_remove_validator {
    __kind: 'remove_validator'
    currencyId: CurrencyId
    who: V3MultiLocation
}

/**
 * See [`Pallet::reset_validators`].
 */
export interface SlpCall_reset_validators {
    __kind: 'reset_validators'
    currencyId: CurrencyId
    validatorList: V3MultiLocation[]
}

/**
 * See [`Pallet::set_currency_delays`].
 */
export interface SlpCall_set_currency_delays {
    __kind: 'set_currency_delays'
    currencyId: CurrencyId
    maybeDelays?: (Delays | undefined)
}

/**
 * See [`Pallet::set_currency_tune_exchange_rate_limit`].
 */
export interface SlpCall_set_currency_tune_exchange_rate_limit {
    __kind: 'set_currency_tune_exchange_rate_limit'
    currencyId: CurrencyId
    maybeTuneExchangeRateLimit?: ([number, Permill] | undefined)
}

/**
 * See [`Pallet::set_delegator_ledger`].
 */
export interface SlpCall_set_delegator_ledger {
    __kind: 'set_delegator_ledger'
    currencyId: CurrencyId
    who: V3MultiLocation
    ledger?: (Ledger | undefined)
}

/**
 * See [`Pallet::set_fee_source`].
 */
export interface SlpCall_set_fee_source {
    __kind: 'set_fee_source'
    currencyId: CurrencyId
    whoAndFee?: ([V3MultiLocation, bigint] | undefined)
}

/**
 * See [`Pallet::set_hosting_fees`].
 */
export interface SlpCall_set_hosting_fees {
    __kind: 'set_hosting_fees'
    currencyId: CurrencyId
    maybeFeeSet?: ([Permill, V3MultiLocation] | undefined)
}

/**
 * See [`Pallet::set_minimums_and_maximums`].
 */
export interface SlpCall_set_minimums_and_maximums {
    __kind: 'set_minimums_and_maximums'
    currencyId: CurrencyId
    constraints?: (MinimumsMaximums | undefined)
}

/**
 * See [`Pallet::set_ongoing_time_unit_update_interval`].
 */
export interface SlpCall_set_ongoing_time_unit_update_interval {
    __kind: 'set_ongoing_time_unit_update_interval'
    currencyId: CurrencyId
    maybeInterval?: (number | undefined)
}

/**
 * See [`Pallet::set_operate_origin`].
 */
export interface SlpCall_set_operate_origin {
    __kind: 'set_operate_origin'
    currencyId: CurrencyId
    who?: (AccountId32 | undefined)
}

/**
 * See [`Pallet::set_validator_boost_list`].
 */
export interface SlpCall_set_validator_boost_list {
    __kind: 'set_validator_boost_list'
    currencyId: CurrencyId
    validatorList: V3MultiLocation[]
}

/**
 * See [`Pallet::set_validators_by_delegator`].
 */
export interface SlpCall_set_validators_by_delegator {
    __kind: 'set_validators_by_delegator'
    currencyId: CurrencyId
    who: V3MultiLocation
    validators: V3MultiLocation[]
}

/**
 * See [`Pallet::supplement_fee_reserve`].
 */
export interface SlpCall_supplement_fee_reserve {
    __kind: 'supplement_fee_reserve'
    currencyId: CurrencyId
    dest: V3MultiLocation
}

/**
 * See [`Pallet::transfer_back`].
 */
export interface SlpCall_transfer_back {
    __kind: 'transfer_back'
    currencyId: CurrencyId
    from: V3MultiLocation
    to: V3MultiLocation
    amount: bigint
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * See [`Pallet::transfer_to`].
 */
export interface SlpCall_transfer_to {
    __kind: 'transfer_to'
    currencyId: CurrencyId
    from: V3MultiLocation
    to: V3MultiLocation
    amount: bigint
}

/**
 * See [`Pallet::unbond`].
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
 * See [`Pallet::unbond_all`].
 */
export interface SlpCall_unbond_all {
    __kind: 'unbond_all'
    currencyId: CurrencyId
    who: V3MultiLocation
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * See [`Pallet::undelegate`].
 */
export interface SlpCall_undelegate {
    __kind: 'undelegate'
    currencyId: CurrencyId
    who: V3MultiLocation
    targets: V3MultiLocation[]
    weightAndFee?: ([Weight, bigint] | undefined)
}

/**
 * See [`Pallet::update_ongoing_time_unit`].
 */
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
            response: V3Response,
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

/**
 * See [`Pallet::batch_handle_reserve`].
 */
export interface SalpCall_batch_handle_reserve {
    __kind: 'batch_handle_reserve'
    index: number
}

/**
 * See [`Pallet::batch_unlock`].
 */
export interface SalpCall_batch_unlock {
    __kind: 'batch_unlock'
    index: number
}

/**
 * See [`Pallet::buyback`].
 */
export interface SalpCall_buyback {
    __kind: 'buyback'
    value: bigint
}

/**
 * See [`Pallet::buyback_vstoken_by_stable_pool`].
 */
export interface SalpCall_buyback_vstoken_by_stable_pool {
    __kind: 'buyback_vstoken_by_stable_pool'
    poolId: number
    currencyIdIn: CurrencyId
    value: bigint
}

/**
 * See [`Pallet::cancel_reservation`].
 */
export interface SalpCall_cancel_reservation {
    __kind: 'cancel_reservation'
    index: number
}

/**
 * See [`Pallet::confirm_contribute`].
 */
export interface SalpCall_confirm_contribute {
    __kind: 'confirm_contribute'
    queryId: bigint
    isSuccess: boolean
}

/**
 * See [`Pallet::confirm_contribution`].
 */
export interface SalpCall_confirm_contribution {
    __kind: 'confirm_contribution'
    queryId: bigint
    response: V3Response
}

/**
 * See [`Pallet::continue_fund`].
 */
export interface SalpCall_continue_fund {
    __kind: 'continue_fund'
    index: number
    firstSlot: number
    lastSlot: number
}

/**
 * See [`Pallet::contribute`].
 */
export interface SalpCall_contribute {
    __kind: 'contribute'
    index: number
    value: bigint
}

/**
 * See [`Pallet::create`].
 */
export interface SalpCall_create {
    __kind: 'create'
    index: number
    cap: bigint
    firstSlot: number
    lastSlot: number
}

/**
 * See [`Pallet::dissolve`].
 */
export interface SalpCall_dissolve {
    __kind: 'dissolve'
    index: number
}

/**
 * See [`Pallet::dissolve_refunded`].
 */
export interface SalpCall_dissolve_refunded {
    __kind: 'dissolve_refunded'
    index: number
    firstSlot: number
    lastSlot: number
}

/**
 * See [`Pallet::edit`].
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

/**
 * See [`Pallet::fund_end`].
 */
export interface SalpCall_fund_end {
    __kind: 'fund_end'
    index: number
}

/**
 * See [`Pallet::fund_fail`].
 */
export interface SalpCall_fund_fail {
    __kind: 'fund_fail'
    index: number
}

/**
 * See [`Pallet::fund_retire`].
 */
export interface SalpCall_fund_retire {
    __kind: 'fund_retire'
    index: number
}

/**
 * See [`Pallet::fund_success`].
 */
export interface SalpCall_fund_success {
    __kind: 'fund_success'
    index: number
}

/**
 * See [`Pallet::redeem`].
 */
export interface SalpCall_redeem {
    __kind: 'redeem'
    index: number
    value: bigint
}

/**
 * See [`Pallet::refund`].
 */
export interface SalpCall_refund {
    __kind: 'refund'
    index: number
    firstSlot: number
    lastSlot: number
    value: bigint
}

/**
 * See [`Pallet::reserve`].
 */
export interface SalpCall_reserve {
    __kind: 'reserve'
    index: number
    value: bigint
    ifMint: boolean
}

/**
 * See [`Pallet::set_multisig_confirm_account`].
 */
export interface SalpCall_set_multisig_confirm_account {
    __kind: 'set_multisig_confirm_account'
    account: AccountId32
}

/**
 * See [`Pallet::unlock`].
 */
export interface SalpCall_unlock {
    __kind: 'unlock'
    who: AccountId32
    index: number
}

/**
 * See [`Pallet::unlock_by_vsbond`].
 */
export interface SalpCall_unlock_by_vsbond {
    __kind: 'unlock_by_vsbond'
    who: AccountId32
    vsbond: CurrencyId
}

/**
 * See [`Pallet::unlock_vstoken`].
 */
export interface SalpCall_unlock_vstoken {
    __kind: 'unlock_vstoken'
    who: AccountId32
}

/**
 * See [`Pallet::withdraw`].
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ReferendaCall = ReferendaCall_cancel | ReferendaCall_kill | ReferendaCall_nudge_referendum | ReferendaCall_one_fewer_deciding | ReferendaCall_place_decision_deposit | ReferendaCall_refund_decision_deposit | ReferendaCall_refund_submission_deposit | ReferendaCall_set_metadata | ReferendaCall_submit

/**
 * See [`Pallet::cancel`].
 */
export interface ReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * See [`Pallet::kill`].
 */
export interface ReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * See [`Pallet::nudge_referendum`].
 */
export interface ReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * See [`Pallet::one_fewer_deciding`].
 */
export interface ReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * See [`Pallet::place_decision_deposit`].
 */
export interface ReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_decision_deposit`].
 */
export interface ReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_submission_deposit`].
 */
export interface ReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface ReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: (H256 | undefined)
}

/**
 * See [`Pallet::submit`].
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
 * See [`Pallet::add_proxy`].
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * See [`Pallet::announce`].
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
    callHash: H256
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
 * See [`Pallet::proxy`].
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * See [`Pallet::proxy_announced`].
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * See [`Pallet::reject_announcement`].
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
    callHash: H256
}

/**
 * See [`Pallet::remove_announcement`].
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: H256
}

/**
 * See [`Pallet::remove_proxies`].
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
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

export const FixedU128 = sts.bigint()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PricesCall = PricesCall_reset_price | PricesCall_set_foreign_asset | PricesCall_set_price

/**
 * See [`Pallet::reset_price`].
 */
export interface PricesCall_reset_price {
    __kind: 'reset_price'
    assetId: CurrencyId
}

/**
 * See [`Pallet::set_foreign_asset`].
 */
export interface PricesCall_set_foreign_asset {
    __kind: 'set_foreign_asset'
    foreignAssetId: CurrencyId
    assetId: CurrencyId
}

/**
 * See [`Pallet::set_price`].
 */
export interface PricesCall_set_price {
    __kind: 'set_price'
    assetId: CurrencyId
    price: FixedU128
}

export type FixedU128 = bigint

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
 * See [`Pallet::ensure_updated`].
 */
export interface PreimageCall_ensure_updated {
    __kind: 'ensure_updated'
    hashes: H256[]
}

/**
 * See [`Pallet::note_preimage`].
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

/**
 * See [`Pallet::request_preimage`].
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
}

/**
 * See [`Pallet::unnote_preimage`].
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: H256
}

/**
 * See [`Pallet::unrequest_preimage`].
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
        execute: sts.enumStruct({
            message: Type_182,
            maxWeight: Weight,
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_suspension: sts.enumStruct({
            suspended: sts.boolean(),
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V3MultiLocation,
            version: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
        send: sts.enumStruct({
            dest: VersionedMultiLocation,
            message: VersionedXcm,
        }),
        teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
    }
})

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2Instruction),
        V3: sts.array(() => V3Instruction),
    }
})

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
            originKind: V2OriginKind,
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

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export interface DoubleEncoded {
    encoded: Bytes
}

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

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
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

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

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
    originKind: V2OriginKind
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

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
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

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
}

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
    }
})

export type V2WeightLimit = V2WeightLimit_Limited | V2WeightLimit_Unlimited

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

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

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export const Type_182: sts.Type<Type_182> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_185),
        V3: sts.array(() => Type_189),
    }
})

export const Type_189: sts.Type<Type_189> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_189),
        SetErrorHandler: sts.array(() => Type_189),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: Type_186,
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

export const Type_186: sts.Type<Type_186> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export interface Type_186 {
    encoded: Bytes
}

export type Type_189 = Type_189_AliasOrigin | Type_189_BurnAsset | Type_189_BuyExecution | Type_189_ClaimAsset | Type_189_ClearError | Type_189_ClearOrigin | Type_189_ClearTopic | Type_189_ClearTransactStatus | Type_189_DepositAsset | Type_189_DepositReserveAsset | Type_189_DescendOrigin | Type_189_ExchangeAsset | Type_189_ExpectAsset | Type_189_ExpectError | Type_189_ExpectOrigin | Type_189_ExpectPallet | Type_189_ExpectTransactStatus | Type_189_ExportMessage | Type_189_HrmpChannelAccepted | Type_189_HrmpChannelClosing | Type_189_HrmpNewChannelOpenRequest | Type_189_InitiateReserveWithdraw | Type_189_InitiateTeleport | Type_189_LockAsset | Type_189_NoteUnlockable | Type_189_QueryPallet | Type_189_QueryResponse | Type_189_ReceiveTeleportedAsset | Type_189_RefundSurplus | Type_189_ReportError | Type_189_ReportHolding | Type_189_ReportTransactStatus | Type_189_RequestUnlock | Type_189_ReserveAssetDeposited | Type_189_SetAppendix | Type_189_SetErrorHandler | Type_189_SetFeesMode | Type_189_SetTopic | Type_189_SubscribeVersion | Type_189_Transact | Type_189_TransferAsset | Type_189_TransferReserveAsset | Type_189_Trap | Type_189_UniversalOrigin | Type_189_UnlockAsset | Type_189_UnpaidExecution | Type_189_UnsubscribeVersion | Type_189_WithdrawAsset

export interface Type_189_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_189_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_189_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_189_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_189_ClearError {
    __kind: 'ClearError'
}

export interface Type_189_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_189_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_189_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_189_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_189_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_189_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_189_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_189_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_189_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_189_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_189_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_189_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_189_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_189_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_189_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_189_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_189_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_189_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_189_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_189_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_189_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_189_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_189_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_189_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_189_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_189_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_189_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_189_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_189_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_189_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_189[]
}

export interface Type_189_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_189[]
}

export interface Type_189_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_189_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_189_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_189_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_186
}

export interface Type_189_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_189_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_189_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_189_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_189_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_189_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_189_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_189_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export const Type_185: sts.Type<Type_185> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_185),
        SetErrorHandler: sts.array(() => Type_185),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_186,
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

export type Type_185 = Type_185_BuyExecution | Type_185_ClaimAsset | Type_185_ClearError | Type_185_ClearOrigin | Type_185_DepositAsset | Type_185_DepositReserveAsset | Type_185_DescendOrigin | Type_185_ExchangeAsset | Type_185_HrmpChannelAccepted | Type_185_HrmpChannelClosing | Type_185_HrmpNewChannelOpenRequest | Type_185_InitiateReserveWithdraw | Type_185_InitiateTeleport | Type_185_QueryHolding | Type_185_QueryResponse | Type_185_ReceiveTeleportedAsset | Type_185_RefundSurplus | Type_185_ReportError | Type_185_ReserveAssetDeposited | Type_185_SetAppendix | Type_185_SetErrorHandler | Type_185_SubscribeVersion | Type_185_Transact | Type_185_TransferAsset | Type_185_TransferReserveAsset | Type_185_Trap | Type_185_UnsubscribeVersion | Type_185_WithdrawAsset

export interface Type_185_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_185_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_185_ClearError {
    __kind: 'ClearError'
}

export interface Type_185_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_185_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_185_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_185_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_185_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_185_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_185_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_185_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_185_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_185_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_185_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_185_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_185_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_185_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_185_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_185_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_185_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_185[]
}

export interface Type_185_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_185[]
}

export interface Type_185_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_185_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_186
}

export interface Type_185_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_185_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_185_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_185_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_185_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type Type_182 = Type_182_V2 | Type_182_V3

export interface Type_182_V2 {
    __kind: 'V2'
    value: Type_185[]
}

export interface Type_182_V3 {
    __kind: 'V3'
    value: Type_189[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PolkadotXcmCall = PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_suspension | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets

/**
 * See [`Pallet::execute`].
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_182
    maxWeight: Weight
}

/**
 * See [`Pallet::force_default_xcm_version`].
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: (number | undefined)
}

/**
 * See [`Pallet::force_subscribe_version_notify`].
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_suspension`].
 */
export interface PolkadotXcmCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * See [`Pallet::force_unsubscribe_version_notify`].
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
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
 * See [`Pallet::clean_defunct_voters`].
 */
export interface PhragmenElectionCall_clean_defunct_voters {
    __kind: 'clean_defunct_voters'
    numVoters: number
    numDefunct: number
}

/**
 * See [`Pallet::remove_member`].
 */
export interface PhragmenElectionCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    slashBond: boolean
    rerunElection: boolean
}

/**
 * See [`Pallet::remove_voter`].
 */
export interface PhragmenElectionCall_remove_voter {
    __kind: 'remove_voter'
}

/**
 * See [`Pallet::renounce_candidacy`].
 */
export interface PhragmenElectionCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
}

/**
 * See [`Pallet::submit_candidacy`].
 */
export interface PhragmenElectionCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
}

/**
 * See [`Pallet::vote`].
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
        validationData: V6PersistedValidationData,
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

export const V6PersistedValidationData: sts.Type<V6PersistedValidationData> = sts.struct(() => {
    return  {
        parentHead: HeadData,
        relayParentNumber: sts.number(),
        relayParentStorageRoot: H256,
        maxPovSize: sts.number(),
    }
})

export const HeadData = sts.bytes()

export interface V6PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

export interface ParachainInherentData {
    validationData: V6PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [Id, InboundHrmpMessage[]][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainSystemCall = ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

/**
 * See [`Pallet::authorize_upgrade`].
 */
export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
    checkVersion: boolean
}

/**
 * See [`Pallet::enact_authorized_upgrade`].
 */
export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Bytes
}

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
            dest: VersionedMultiLocation,
            message: VersionedXcm,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 * See [`Pallet::send_as_sovereign`].
 */
export interface OrmlXcmCall_send_as_sovereign {
    __kind: 'send_as_sovereign'
    dest: VersionedMultiLocation
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
 * See [`Pallet::add_member`].
 */
export interface OracleMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * See [`Pallet::change_key`].
 */
export interface OracleMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * See [`Pallet::clear_prime`].
 */
export interface OracleMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * See [`Pallet::remove_member`].
 */
export interface OracleMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * See [`Pallet::reset_members`].
 */
export interface OracleMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * See [`Pallet::set_prime`].
 */
export interface OracleMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * See [`Pallet::swap_member`].
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
 * See [`Pallet::feed_values`].
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

/**
 * See [`Pallet::add_to_create_whitelist`].
 */
export interface MerkleDistributorCall_add_to_create_whitelist {
    __kind: 'add_to_create_whitelist'
    account: AccountId32
}

/**
 * See [`Pallet::charge`].
 */
export interface MerkleDistributorCall_charge {
    __kind: 'charge'
    merkleDistributorId: number
}

/**
 * See [`Pallet::claim`].
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
 * See [`Pallet::create_merkle_distributor`].
 */
export interface MerkleDistributorCall_create_merkle_distributor {
    __kind: 'create_merkle_distributor'
    merkleRoot: H256
    description: Bytes
    distributeCurrency: CurrencyId
    distributeAmount: bigint
}

/**
 * See [`Pallet::emergency_withdraw`].
 */
export interface MerkleDistributorCall_emergency_withdraw {
    __kind: 'emergency_withdraw'
    merkleDistributorId: number
    recipient: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::remove_from_create_whitelist`].
 */
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

/**
 * See [`Pallet::flash_loan_deposit`].
 */
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
export type LendMarketCall = LendMarketCall_activate_market | LendMarketCall_add_market | LendMarketCall_add_reserves | LendMarketCall_add_reward | LendMarketCall_borrow | LendMarketCall_claim_reward | LendMarketCall_claim_reward_for_market | LendMarketCall_collateral_asset | LendMarketCall_force_update_market | LendMarketCall_liquidate_borrow | LendMarketCall_mint | LendMarketCall_redeem | LendMarketCall_redeem_all | LendMarketCall_reduce_incentive_reserves | LendMarketCall_reduce_reserves | LendMarketCall_repay_borrow | LendMarketCall_repay_borrow_all | LendMarketCall_update_liquidation_free_collateral | LendMarketCall_update_market | LendMarketCall_update_market_reward_speed | LendMarketCall_update_rate_model | LendMarketCall_withdraw_missing_reward

/**
 * See [`Pallet::activate_market`].
 */
export interface LendMarketCall_activate_market {
    __kind: 'activate_market'
    assetId: CurrencyId
}

/**
 * See [`Pallet::add_market`].
 */
export interface LendMarketCall_add_market {
    __kind: 'add_market'
    assetId: CurrencyId
    market: Market
}

/**
 * See [`Pallet::add_reserves`].
 */
export interface LendMarketCall_add_reserves {
    __kind: 'add_reserves'
    payer: MultiAddress
    assetId: CurrencyId
    addAmount: bigint
}

/**
 * See [`Pallet::add_reward`].
 */
export interface LendMarketCall_add_reward {
    __kind: 'add_reward'
    amount: bigint
}

/**
 * See [`Pallet::borrow`].
 */
export interface LendMarketCall_borrow {
    __kind: 'borrow'
    assetId: CurrencyId
    borrowAmount: bigint
}

/**
 * See [`Pallet::claim_reward`].
 */
export interface LendMarketCall_claim_reward {
    __kind: 'claim_reward'
}

/**
 * See [`Pallet::claim_reward_for_market`].
 */
export interface LendMarketCall_claim_reward_for_market {
    __kind: 'claim_reward_for_market'
    assetId: CurrencyId
}

/**
 * See [`Pallet::collateral_asset`].
 */
export interface LendMarketCall_collateral_asset {
    __kind: 'collateral_asset'
    assetId: CurrencyId
    enable: boolean
}

/**
 * See [`Pallet::force_update_market`].
 */
export interface LendMarketCall_force_update_market {
    __kind: 'force_update_market'
    assetId: CurrencyId
    market: Market
}

/**
 * See [`Pallet::liquidate_borrow`].
 */
export interface LendMarketCall_liquidate_borrow {
    __kind: 'liquidate_borrow'
    borrower: AccountId32
    liquidationAssetId: CurrencyId
    repayAmount: bigint
    collateralAssetId: CurrencyId
}

/**
 * See [`Pallet::mint`].
 */
export interface LendMarketCall_mint {
    __kind: 'mint'
    assetId: CurrencyId
    mintAmount: bigint
}

/**
 * See [`Pallet::redeem`].
 */
export interface LendMarketCall_redeem {
    __kind: 'redeem'
    assetId: CurrencyId
    redeemAmount: bigint
}

/**
 * See [`Pallet::redeem_all`].
 */
export interface LendMarketCall_redeem_all {
    __kind: 'redeem_all'
    assetId: CurrencyId
}

/**
 * See [`Pallet::reduce_incentive_reserves`].
 */
export interface LendMarketCall_reduce_incentive_reserves {
    __kind: 'reduce_incentive_reserves'
    receiver: MultiAddress
    assetId: CurrencyId
    redeemAmount: bigint
}

/**
 * See [`Pallet::reduce_reserves`].
 */
export interface LendMarketCall_reduce_reserves {
    __kind: 'reduce_reserves'
    receiver: MultiAddress
    assetId: CurrencyId
    reduceAmount: bigint
}

/**
 * See [`Pallet::repay_borrow`].
 */
export interface LendMarketCall_repay_borrow {
    __kind: 'repay_borrow'
    assetId: CurrencyId
    repayAmount: bigint
}

/**
 * See [`Pallet::repay_borrow_all`].
 */
export interface LendMarketCall_repay_borrow_all {
    __kind: 'repay_borrow_all'
    assetId: CurrencyId
}

/**
 * See [`Pallet::update_liquidation_free_collateral`].
 */
export interface LendMarketCall_update_liquidation_free_collateral {
    __kind: 'update_liquidation_free_collateral'
    collaterals: CurrencyId[]
}

/**
 * See [`Pallet::update_market`].
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
 * See [`Pallet::update_market_reward_speed`].
 */
export interface LendMarketCall_update_market_reward_speed {
    __kind: 'update_market_reward_speed'
    assetId: CurrencyId
    supplyRewardPerBlock?: (bigint | undefined)
    borrowRewardPerBlock?: (bigint | undefined)
}

/**
 * See [`Pallet::update_rate_model`].
 */
export interface LendMarketCall_update_rate_model {
    __kind: 'update_rate_model'
    assetId: CurrencyId
    rateModel: InterestRateModel
}

/**
 * See [`Pallet::withdraw_missing_reward`].
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
 * See [`Pallet::claim`].
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: number
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: MultiAddress
    index: number
    freeze: boolean
}

/**
 * See [`Pallet::free`].
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: number
}

/**
 * See [`Pallet::freeze`].
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: number
}

/**
 * See [`Pallet::transfer`].
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
 * See [`Pallet::set_universal_fee_currency_order_list`].
 */
export interface FlexibleFeeCall_set_universal_fee_currency_order_list {
    __kind: 'set_universal_fee_currency_order_list'
    defaultList: CurrencyId[]
}

/**
 * See [`Pallet::set_user_default_fee_currency`].
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
 * See [`Pallet::cancel`].
 */
export interface FellowshipReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * See [`Pallet::kill`].
 */
export interface FellowshipReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * See [`Pallet::nudge_referendum`].
 */
export interface FellowshipReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * See [`Pallet::one_fewer_deciding`].
 */
export interface FellowshipReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * See [`Pallet::place_decision_deposit`].
 */
export interface FellowshipReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_decision_deposit`].
 */
export interface FellowshipReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_submission_deposit`].
 */
export interface FellowshipReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface FellowshipReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: (H256 | undefined)
}

/**
 * See [`Pallet::submit`].
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
export type FellowshipCollectiveCall = FellowshipCollectiveCall_add_member | FellowshipCollectiveCall_cleanup_poll | FellowshipCollectiveCall_demote_member | FellowshipCollectiveCall_promote_member | FellowshipCollectiveCall_remove_member | FellowshipCollectiveCall_vote

/**
 * See [`Pallet::add_member`].
 */
export interface FellowshipCollectiveCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * See [`Pallet::cleanup_poll`].
 */
export interface FellowshipCollectiveCall_cleanup_poll {
    __kind: 'cleanup_poll'
    pollIndex: number
    max: number
}

/**
 * See [`Pallet::demote_member`].
 */
export interface FellowshipCollectiveCall_demote_member {
    __kind: 'demote_member'
    who: MultiAddress
}

/**
 * See [`Pallet::promote_member`].
 */
export interface FellowshipCollectiveCall_promote_member {
    __kind: 'promote_member'
    who: MultiAddress
}

/**
 * See [`Pallet::remove_member`].
 */
export interface FellowshipCollectiveCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    minRank: number
}

/**
 * See [`Pallet::vote`].
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

/**
 * See [`Pallet::create_distribution`].
 */
export interface FeeShareCall_create_distribution {
    __kind: 'create_distribution'
    tokenType: CurrencyId[]
    tokensProportion: [AccountId32, Perbill][]
    ifAuto: boolean
}

/**
 * See [`Pallet::delete_distribution`].
 */
export interface FeeShareCall_delete_distribution {
    __kind: 'delete_distribution'
    distributionId: number
}

/**
 * See [`Pallet::edit_distribution`].
 */
export interface FeeShareCall_edit_distribution {
    __kind: 'edit_distribution'
    distributionId: number
    tokenType?: (CurrencyId[] | undefined)
    tokensProportion?: ([AccountId32, Perbill][] | undefined)
    ifAuto?: (boolean | undefined)
}

/**
 * See [`Pallet::execute_distribute`].
 */
export interface FeeShareCall_execute_distribute {
    __kind: 'execute_distribute'
    distributionId: number
}

/**
 * See [`Pallet::set_era_length`].
 */
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
            gaugeInit: sts.option(() => sts.tuple(() => [CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))])),
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
            gaugeInit: sts.option(() => sts.tuple(() => [CurrencyId, sts.number(), sts.array(() => sts.tuple(() => [CurrencyId, sts.bigint()]))])),
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

/**
 * See [`Pallet::add_boost_pool_whitelist`].
 */
export interface FarmingCall_add_boost_pool_whitelist {
    __kind: 'add_boost_pool_whitelist'
    whitelist: number[]
}

/**
 * See [`Pallet::charge`].
 */
export interface FarmingCall_charge {
    __kind: 'charge'
    pid: number
    rewards: [CurrencyId, bigint][]
}

/**
 * See [`Pallet::charge_boost`].
 */
export interface FarmingCall_charge_boost {
    __kind: 'charge_boost'
    rewards: [CurrencyId, bigint][]
}

/**
 * See [`Pallet::claim`].
 */
export interface FarmingCall_claim {
    __kind: 'claim'
    pid: number
}

/**
 * See [`Pallet::close_pool`].
 */
export interface FarmingCall_close_pool {
    __kind: 'close_pool'
    pid: number
}

/**
 * See [`Pallet::create_farming_pool`].
 */
export interface FarmingCall_create_farming_pool {
    __kind: 'create_farming_pool'
    tokensProportion: [CurrencyId, Perbill][]
    basicRewards: [CurrencyId, bigint][]
    gaugeInit?: ([CurrencyId, number, [CurrencyId, bigint][]] | undefined)
    minDepositToStart: bigint
    afterBlockToStart: number
    withdrawLimitTime: number
    claimLimitTime: number
    withdrawLimitCount: number
}

/**
 * See [`Pallet::deposit`].
 */
export interface FarmingCall_deposit {
    __kind: 'deposit'
    pid: number
    addValue: bigint
    gaugeInfo?: ([bigint, number] | undefined)
}

/**
 * See [`Pallet::edit_pool`].
 */
export interface FarmingCall_edit_pool {
    __kind: 'edit_pool'
    pid: number
    basicRewards?: ([CurrencyId, bigint][] | undefined)
    withdrawLimitTime?: (number | undefined)
    claimLimitTime?: (number | undefined)
    gaugeBasicRewards?: ([CurrencyId, bigint][] | undefined)
    withdrawLimitCount?: (number | undefined)
}

/**
 * See [`Pallet::end_boost_round`].
 */
export interface FarmingCall_end_boost_round {
    __kind: 'end_boost_round'
}

/**
 * See [`Pallet::force_gauge_claim`].
 */
export interface FarmingCall_force_gauge_claim {
    __kind: 'force_gauge_claim'
    gid: number
}

/**
 * See [`Pallet::force_retire_pool`].
 */
export interface FarmingCall_force_retire_pool {
    __kind: 'force_retire_pool'
    pid: number
}

/**
 * See [`Pallet::gauge_withdraw`].
 */
export interface FarmingCall_gauge_withdraw {
    __kind: 'gauge_withdraw'
    gid: number
}

/**
 * See [`Pallet::kill_pool`].
 */
export interface FarmingCall_kill_pool {
    __kind: 'kill_pool'
    pid: number
}

/**
 * See [`Pallet::reset_pool`].
 */
export interface FarmingCall_reset_pool {
    __kind: 'reset_pool'
    pid: number
    basicRewards?: ([CurrencyId, bigint][] | undefined)
    minDepositToStart?: (bigint | undefined)
    afterBlockToStart?: (number | undefined)
    withdrawLimitTime?: (number | undefined)
    claimLimitTime?: (number | undefined)
    withdrawLimitCount?: (number | undefined)
    gaugeInit?: ([CurrencyId, number, [CurrencyId, bigint][]] | undefined)
}

/**
 * See [`Pallet::set_next_round_whitelist`].
 */
export interface FarmingCall_set_next_round_whitelist {
    __kind: 'set_next_round_whitelist'
    whitelist: number[]
}

/**
 * See [`Pallet::set_retire_limit`].
 */
export interface FarmingCall_set_retire_limit {
    __kind: 'set_retire_limit'
    limit: number
}

/**
 * See [`Pallet::start_boost_round`].
 */
export interface FarmingCall_start_boost_round {
    __kind: 'start_boost_round'
    roundLength: number
}

/**
 * See [`Pallet::vote`].
 */
export interface FarmingCall_vote {
    __kind: 'vote'
    voteList: [number, Percent][]
}

/**
 * See [`Pallet::withdraw`].
 */
export interface FarmingCall_withdraw {
    __kind: 'withdraw'
    pid: number
    removeValue?: (bigint | undefined)
}

/**
 * See [`Pallet::withdraw_claim`].
 */
export interface FarmingCall_withdraw_claim {
    __kind: 'withdraw_claim'
    pid: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const DmpQueueCall: sts.Type<DmpQueueCall> = sts.closedEnum(() => {
    return  {
        service_overweight: sts.enumStruct({
            index: sts.bigint(),
            weightLimit: Weight,
        }),
    }
})

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
 * See [`Pallet::blacklist`].
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: H256
    maybeRefIndex?: (number | undefined)
}

/**
 * See [`Pallet::cancel_proposal`].
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * See [`Pallet::cancel_referendum`].
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * See [`Pallet::clear_public_proposals`].
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * See [`Pallet::delegate`].
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * See [`Pallet::emergency_cancel`].
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * See [`Pallet::external_propose`].
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

/**
 * See [`Pallet::external_propose_default`].
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

/**
 * See [`Pallet::external_propose_majority`].
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

/**
 * See [`Pallet::fast_track`].
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: H256
    votingPeriod: number
    delay: number
}

/**
 * See [`Pallet::propose`].
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

/**
 * See [`Pallet::remove_other_vote`].
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

/**
 * See [`Pallet::remove_vote`].
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * See [`Pallet::second`].
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface DemocracyCall_set_metadata {
    __kind: 'set_metadata'
    owner: MetadataOwner
    maybeHash?: (H256 | undefined)
}

/**
 * See [`Pallet::undelegate`].
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * See [`Pallet::unlock`].
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

/**
 * See [`Pallet::veto_external`].
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: H256
}

/**
 * See [`Pallet::vote`].
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
 * See [`Pallet::transfer`].
 */
export interface CurrenciesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    currencyId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::transfer_native_currency`].
 */
export interface CurrenciesCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::update_balance`].
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

/**
 * See [`Pallet::add_to_issue_whitelist`].
 */
export interface CrossInOutCall_add_to_issue_whitelist {
    __kind: 'add_to_issue_whitelist'
    currencyId: CurrencyId
    account: AccountId32
}

/**
 * See [`Pallet::add_to_register_whitelist`].
 */
export interface CrossInOutCall_add_to_register_whitelist {
    __kind: 'add_to_register_whitelist'
    currencyId: CurrencyId
    account: AccountId32
}

/**
 * See [`Pallet::change_outer_linked_account`].
 */
export interface CrossInOutCall_change_outer_linked_account {
    __kind: 'change_outer_linked_account'
    currencyId: CurrencyId
    foreignLocation: V2MultiLocation
    account: AccountId32
}

/**
 * See [`Pallet::cross_in`].
 */
export interface CrossInOutCall_cross_in {
    __kind: 'cross_in'
    location: V2MultiLocation
    currencyId: CurrencyId
    amount: bigint
    remark?: (Bytes | undefined)
}

/**
 * See [`Pallet::cross_out`].
 */
export interface CrossInOutCall_cross_out {
    __kind: 'cross_out'
    currencyId: CurrencyId
    amount: bigint
}

/**
 * See [`Pallet::deregister_currency_for_cross_in_out`].
 */
export interface CrossInOutCall_deregister_currency_for_cross_in_out {
    __kind: 'deregister_currency_for_cross_in_out'
    currencyId: CurrencyId
}

/**
 * See [`Pallet::register_currency_for_cross_in_out`].
 */
export interface CrossInOutCall_register_currency_for_cross_in_out {
    __kind: 'register_currency_for_cross_in_out'
    currencyId: CurrencyId
}

/**
 * See [`Pallet::register_linked_account`].
 */
export interface CrossInOutCall_register_linked_account {
    __kind: 'register_linked_account'
    currencyId: CurrencyId
    who: AccountId32
    foreignLocation: V2MultiLocation
}

/**
 * See [`Pallet::remove_from_issue_whitelist`].
 */
export interface CrossInOutCall_remove_from_issue_whitelist {
    __kind: 'remove_from_issue_whitelist'
    currencyId: CurrencyId
    account: AccountId32
}

/**
 * See [`Pallet::remove_from_register_whitelist`].
 */
export interface CrossInOutCall_remove_from_register_whitelist {
    __kind: 'remove_from_register_whitelist'
    currencyId: CurrencyId
    account: AccountId32
}

/**
 * See [`Pallet::set_crossing_minimum_amount`].
 */
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
 * See [`Pallet::add_member`].
 */
export interface CouncilMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * See [`Pallet::change_key`].
 */
export interface CouncilMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * See [`Pallet::clear_prime`].
 */
export interface CouncilMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * See [`Pallet::remove_member`].
 */
export interface CouncilMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * See [`Pallet::reset_members`].
 */
export interface CouncilMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * See [`Pallet::set_prime`].
 */
export interface CouncilMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * See [`Pallet::swap_member`].
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
 * See [`Pallet::close`].
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * See [`Pallet::disapprove_proposal`].
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * See [`Pallet::execute`].
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::propose`].
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::set_members`].
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * See [`Pallet::vote`].
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
            conviction: Type_104,
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
            vote: Type_102,
        }),
    }
})

export const Type_102: sts.Type<Type_102> = sts.closedEnum(() => {
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

export type Type_102 = Type_102_Split | Type_102_SplitAbstain | Type_102_Standard

export interface Type_102_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface Type_102_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export interface Type_102_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export const Type_104: sts.Type<Type_104> = sts.closedEnum(() => {
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

export type Type_104 = Type_104_Locked1x | Type_104_Locked2x | Type_104_Locked3x | Type_104_Locked4x | Type_104_Locked5x | Type_104_Locked6x | Type_104_None

export interface Type_104_Locked1x {
    __kind: 'Locked1x'
}

export interface Type_104_Locked2x {
    __kind: 'Locked2x'
}

export interface Type_104_Locked3x {
    __kind: 'Locked3x'
}

export interface Type_104_Locked4x {
    __kind: 'Locked4x'
}

export interface Type_104_Locked5x {
    __kind: 'Locked5x'
}

export interface Type_104_Locked6x {
    __kind: 'Locked6x'
}

export interface Type_104_None {
    __kind: 'None'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ConvictionVotingCall = ConvictionVotingCall_delegate | ConvictionVotingCall_remove_other_vote | ConvictionVotingCall_remove_vote | ConvictionVotingCall_undelegate | ConvictionVotingCall_unlock | ConvictionVotingCall_vote

/**
 * See [`Pallet::delegate`].
 */
export interface ConvictionVotingCall_delegate {
    __kind: 'delegate'
    class: number
    to: MultiAddress
    conviction: Type_104
    balance: bigint
}

/**
 * See [`Pallet::remove_other_vote`].
 */
export interface ConvictionVotingCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * See [`Pallet::remove_vote`].
 */
export interface ConvictionVotingCall_remove_vote {
    __kind: 'remove_vote'
    class?: (number | undefined)
    index: number
}

/**
 * See [`Pallet::undelegate`].
 */
export interface ConvictionVotingCall_undelegate {
    __kind: 'undelegate'
    class: number
}

/**
 * See [`Pallet::unlock`].
 */
export interface ConvictionVotingCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
}

/**
 * See [`Pallet::vote`].
 */
export interface ConvictionVotingCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: Type_102
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
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CollatorSelectionCall = CollatorSelectionCall_add_invulnerable | CollatorSelectionCall_leave_intent | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_remove_invulnerable | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_invulnerables

/**
 * See [`Pallet::add_invulnerable`].
 */
export interface CollatorSelectionCall_add_invulnerable {
    __kind: 'add_invulnerable'
    who: AccountId32
}

/**
 * See [`Pallet::leave_intent`].
 */
export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
}

/**
 * See [`Pallet::register_as_candidate`].
 */
export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

/**
 * See [`Pallet::remove_invulnerable`].
 */
export interface CollatorSelectionCall_remove_invulnerable {
    __kind: 'remove_invulnerable'
    who: AccountId32
}

/**
 * See [`Pallet::set_candidacy_bond`].
 */
export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

/**
 * See [`Pallet::set_desired_candidates`].
 */
export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

/**
 * See [`Pallet::set_invulnerables`].
 */
export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: AccountId32[]
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

/**
 * See [`Pallet::claim_commissions`].
 */
export interface ChannelCommissionCall_claim_commissions {
    __kind: 'claim_commissions'
    channelId: number
}

/**
 * See [`Pallet::register_channel`].
 */
export interface ChannelCommissionCall_register_channel {
    __kind: 'register_channel'
    channelName: Bytes
    receiveAccount: AccountId32
}

/**
 * See [`Pallet::remove_channel`].
 */
export interface ChannelCommissionCall_remove_channel {
    __kind: 'remove_channel'
    channelId: number
}

/**
 * See [`Pallet::set_channel_commission_token`].
 */
export interface ChannelCommissionCall_set_channel_commission_token {
    __kind: 'set_channel_commission_token'
    channelId: number
    vtoken: CurrencyId
    rate: Percent
}

/**
 * See [`Pallet::set_channel_vtoken_shares`].
 */
export interface ChannelCommissionCall_set_channel_vtoken_shares {
    __kind: 'set_channel_vtoken_shares'
    channelId: number
    vtoken: CurrencyId
    shares: Permill
}

/**
 * See [`Pallet::set_commission_tokens`].
 */
export interface ChannelCommissionCall_set_commission_tokens {
    __kind: 'set_commission_tokens'
    vtoken: CurrencyId
    commissionTokenOp?: (CurrencyId | undefined)
}

/**
 * See [`Pallet::update_channel_receive_account`].
 */
export interface ChannelCommissionCall_update_channel_receive_account {
    __kind: 'update_channel_receive_account'
    channelId: number
    receiveAccount: AccountId32
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CallSwitchgearCall: sts.Type<CallSwitchgearCall> = sts.closedEnum(() => {
    return  {
        disable_transfers: sts.enumStruct({
            currencyId: CurrencyId,
        }),
        enable_transfers: sts.enumStruct({
            currencyId: CurrencyId,
        }),
        switchoff_transaction: sts.enumStruct({
            palletName: sts.bytes(),
            functionName: sts.bytes(),
        }),
        switchon_transaction: sts.enumStruct({
            palletName: sts.bytes(),
            functionName: sts.bytes(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CallSwitchgearCall = CallSwitchgearCall_disable_transfers | CallSwitchgearCall_enable_transfers | CallSwitchgearCall_switchoff_transaction | CallSwitchgearCall_switchon_transaction

/**
 * See [`Pallet::disable_transfers`].
 */
export interface CallSwitchgearCall_disable_transfers {
    __kind: 'disable_transfers'
    currencyId: CurrencyId
}

/**
 * See [`Pallet::enable_transfers`].
 */
export interface CallSwitchgearCall_enable_transfers {
    __kind: 'enable_transfers'
    currencyId: CurrencyId
}

/**
 * See [`Pallet::switchoff_transaction`].
 */
export interface CallSwitchgearCall_switchoff_transaction {
    __kind: 'switchoff_transaction'
    palletName: Bytes
    functionName: Bytes
}

/**
 * See [`Pallet::switchon_transaction`].
 */
export interface CallSwitchgearCall_switchon_transaction {
    __kind: 'switchon_transaction'
    palletName: Bytes
    functionName: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BountiesCall: sts.Type<BountiesCall> = sts.closedEnum(() => {
    return  {
        accept_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
        approve_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        award_bounty: sts.enumStruct({
            bountyId: sts.number(),
            beneficiary: MultiAddress,
        }),
        claim_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        close_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        extend_bounty_expiry: sts.enumStruct({
            bountyId: sts.number(),
            remark: sts.bytes(),
        }),
        propose_bounty: sts.enumStruct({
            value: sts.bigint(),
            description: sts.bytes(),
        }),
        propose_curator: sts.enumStruct({
            bountyId: sts.number(),
            curator: MultiAddress,
            fee: sts.bigint(),
        }),
        unassign_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BountiesCall = BountiesCall_accept_curator | BountiesCall_approve_bounty | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry | BountiesCall_propose_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator

/**
 * See [`Pallet::accept_curator`].
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * See [`Pallet::approve_bounty`].
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * See [`Pallet::award_bounty`].
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_bounty`].
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * See [`Pallet::close_bounty`].
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * See [`Pallet::extend_bounty_expiry`].
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Bytes
}

/**
 * See [`Pallet::propose_bounty`].
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Bytes
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
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
export type BalancesCall = BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

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
export const AssetRegistryCall: sts.Type<AssetRegistryCall> = sts.closedEnum(() => {
    return  {
        force_set_multilocation: sts.enumStruct({
            currencyId: CurrencyId,
            location: VersionedMultiLocation,
            weight: Weight,
        }),
        register_multilocation: sts.enumStruct({
            currencyId: CurrencyId,
            location: VersionedMultiLocation,
            weight: Weight,
        }),
        register_native_asset: sts.enumStruct({
            currencyId: CurrencyId,
            location: VersionedMultiLocation,
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
        update_native_asset: sts.enumStruct({
            currencyId: CurrencyId,
            location: VersionedMultiLocation,
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
export type AssetRegistryCall = AssetRegistryCall_force_set_multilocation | AssetRegistryCall_register_multilocation | AssetRegistryCall_register_native_asset | AssetRegistryCall_register_token_metadata | AssetRegistryCall_register_vsbond_metadata | AssetRegistryCall_register_vstoken_metadata | AssetRegistryCall_register_vtoken_metadata | AssetRegistryCall_update_native_asset

/**
 * See [`Pallet::force_set_multilocation`].
 */
export interface AssetRegistryCall_force_set_multilocation {
    __kind: 'force_set_multilocation'
    currencyId: CurrencyId
    location: VersionedMultiLocation
    weight: Weight
}

/**
 * See [`Pallet::register_multilocation`].
 */
export interface AssetRegistryCall_register_multilocation {
    __kind: 'register_multilocation'
    currencyId: CurrencyId
    location: VersionedMultiLocation
    weight: Weight
}

/**
 * See [`Pallet::register_native_asset`].
 */
export interface AssetRegistryCall_register_native_asset {
    __kind: 'register_native_asset'
    currencyId: CurrencyId
    location: VersionedMultiLocation
    metadata: AssetMetadata
}

/**
 * See [`Pallet::register_token_metadata`].
 */
export interface AssetRegistryCall_register_token_metadata {
    __kind: 'register_token_metadata'
    metadata: AssetMetadata
}

/**
 * See [`Pallet::register_vsbond_metadata`].
 */
export interface AssetRegistryCall_register_vsbond_metadata {
    __kind: 'register_vsbond_metadata'
    tokenId: number
    paraId: number
    firstSlot: number
    lastSlot: number
}

/**
 * See [`Pallet::register_vstoken_metadata`].
 */
export interface AssetRegistryCall_register_vstoken_metadata {
    __kind: 'register_vstoken_metadata'
    tokenId: number
}

/**
 * See [`Pallet::register_vtoken_metadata`].
 */
export interface AssetRegistryCall_register_vtoken_metadata {
    __kind: 'register_vtoken_metadata'
    tokenId: number
}

/**
 * See [`Pallet::update_native_asset`].
 */
export interface AssetRegistryCall_update_native_asset {
    __kind: 'update_native_asset'
    currencyId: CurrencyId
    location: VersionedMultiLocation
    metadata: AssetMetadata
}

export type Call = Call_AssetRegistry | Call_Balances | Call_Bounties | Call_CallSwitchgear | Call_ChannelCommission | Call_CollatorSelection | Call_ConvictionVoting | Call_Council | Call_CouncilMembership | Call_CrossInOut | Call_CumulusXcm | Call_Currencies | Call_Democracy | Call_DmpQueue | Call_Farming | Call_FeeShare | Call_FellowshipCollective | Call_FellowshipReferenda | Call_FlexibleFee | Call_Identity | Call_Indices | Call_LendMarket | Call_LeverageStaking | Call_MerkleDistributor | Call_Multisig | Call_Oracle | Call_OracleMembership | Call_OrmlXcm | Call_ParachainInfo | Call_ParachainSystem | Call_PhragmenElection | Call_PolkadotXcm | Call_Preimage | Call_Prices | Call_Proxy | Call_Referenda | Call_Salp | Call_Scheduler | Call_Session | Call_Slp | Call_Slpx | Call_StablePool | Call_System | Call_SystemMaker | Call_SystemStaking | Call_TechnicalCommittee | Call_TechnicalMembership | Call_Timestamp | Call_Tips | Call_TokenConversion | Call_Tokens | Call_Treasury | Call_Utility | Call_VeMinting | Call_Vesting | Call_VtokenMinting | Call_VtokenVoting | Call_Whitelist | Call_XTokens | Call_XcmInterface | Call_XcmpQueue | Call_ZenlinkProtocol

export interface Call_AssetRegistry {
    __kind: 'AssetRegistry'
    value: AssetRegistryCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_CallSwitchgear {
    __kind: 'CallSwitchgear'
    value: CallSwitchgearCall
}

export interface Call_ChannelCommission {
    __kind: 'ChannelCommission'
    value: ChannelCommissionCall
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

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
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

export interface Call_Tips {
    __kind: 'Tips'
    value: TipsCall
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
