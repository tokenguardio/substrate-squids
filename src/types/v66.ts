import {sts, Result, Option, Bytes, BitSequence} from './support'

export const AccountId32 = sts.bytes()

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Assets: AssetsCall,
        Balances: BalancesCall,
        BaseFee: BaseFeeCall,
        BlockReward: BlockRewardCall,
        CollatorSelection: CollatorSelectionCall,
        Contracts: ContractsCall,
        CumulusXcm: CumulusXcmCall,
        DappsStaking: DappsStakingCall,
        DmpQueue: DmpQueueCall,
        EVM: EVMCall,
        EthCall: EthCallCall,
        Ethereum: EthereumCall,
        Identity: IdentityCall,
        Multisig: MultisigCall,
        ParachainInfo: ParachainInfoCall,
        ParachainSystem: ParachainSystemCall,
        PolkadotXcm: PolkadotXcmCall,
        Proxy: ProxyCall,
        Session: SessionCall,
        Sudo: SudoCall,
        System: SystemCall,
        Timestamp: TimestampCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
        XcAssetConfig: XcAssetConfigCall,
        XcmpQueue: XcmpQueueCall,
        Xtokens: XtokensCall,
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const XtokensCall: sts.Type<XtokensCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            currencyId: sts.bigint(),
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
            currencies: sts.array(() => sts.tuple(() => [sts.bigint(), sts.bigint()])),
            feeItem: sts.number(),
            dest: VersionedMultiLocation,
            destWeightLimit: V3WeightLimit,
        }),
        transfer_with_fee: sts.enumStruct({
            currencyId: sts.bigint(),
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XtokensCall = XtokensCall_transfer | XtokensCall_transfer_multiasset | XtokensCall_transfer_multiasset_with_fee | XtokensCall_transfer_multiassets | XtokensCall_transfer_multicurrencies | XtokensCall_transfer_with_fee

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
export interface XtokensCall_transfer {
    __kind: 'transfer'
    currencyId: bigint
    amount: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
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
export interface XtokensCall_transfer_multiasset {
    __kind: 'transfer_multiasset'
    asset: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
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
export interface XtokensCall_transfer_multiasset_with_fee {
    __kind: 'transfer_multiasset_with_fee'
    asset: VersionedMultiAsset
    fee: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
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
export interface XtokensCall_transfer_multiassets {
    __kind: 'transfer_multiassets'
    assets: VersionedMultiAssets
    feeItem: number
    dest: VersionedMultiLocation
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
export interface XtokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [bigint, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
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
export interface XtokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: bigint
    amount: bigint
    fee: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

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
export const XcAssetConfigCall: sts.Type<XcAssetConfigCall> = sts.closedEnum(() => {
    return  {
        change_existing_asset_location: sts.enumStruct({
            newAssetLocation: VersionedMultiLocation,
            assetId: sts.bigint(),
        }),
        register_asset_location: sts.enumStruct({
            assetLocation: VersionedMultiLocation,
            assetId: sts.bigint(),
        }),
        remove_asset: sts.enumStruct({
            assetId: sts.bigint(),
        }),
        remove_payment_asset: sts.enumStruct({
            assetLocation: VersionedMultiLocation,
        }),
        set_asset_units_per_second: sts.enumStruct({
            assetLocation: VersionedMultiLocation,
            unitsPerSecond: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcAssetConfigCall = XcAssetConfigCall_change_existing_asset_location | XcAssetConfigCall_register_asset_location | XcAssetConfigCall_remove_asset | XcAssetConfigCall_remove_payment_asset | XcAssetConfigCall_set_asset_units_per_second

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
 * Removes all information related to asset, removing it from XCM support.
 */
export interface XcAssetConfigCall_remove_asset {
    __kind: 'remove_asset'
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
 * Change the amount of units we are charging per execution second
 * for a given AssetLocation.
 */
export interface XcAssetConfigCall_set_asset_units_per_second {
    __kind: 'set_asset_units_per_second'
    assetLocation: VersionedMultiLocation
    unitsPerSecond: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
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
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

export type AccountId32 = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_force_vested_transfer | VestingCall_merge_schedules | VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        CumulusXcm: Type_291,
        Ethereum: Type_292,
        PolkadotXcm: Type_290,
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

export const Type_290: sts.Type<Type_290> = sts.closedEnum(() => {
    return  {
        Response: V3MultiLocation,
        Xcm: V3MultiLocation,
    }
})

export type Type_290 = Type_290_Response | Type_290_Xcm

export interface Type_290_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export interface Type_290_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export const Type_292: sts.Type<Type_292> = sts.closedEnum(() => {
    return  {
        EthereumTransaction: H160,
    }
})

export const H160 = sts.bytes()

export type Type_292 = Type_292_EthereumTransaction

export interface Type_292_EthereumTransaction {
    __kind: 'EthereumTransaction'
    value: H160
}

export type H160 = Bytes

export const Type_291: sts.Type<Type_291> = sts.closedEnum(() => {
    return  {
        Relay: sts.unit(),
        SiblingParachain: Id,
    }
})

export const Id = sts.number()

export type Type_291 = Type_291_Relay | Type_291_SiblingParachain

export interface Type_291_Relay {
    __kind: 'Relay'
}

export interface Type_291_SiblingParachain {
    __kind: 'SiblingParachain'
    value: Id
}

export type Id = number

export type OriginCaller = OriginCaller_CumulusXcm | OriginCaller_Ethereum | OriginCaller_PolkadotXcm | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_291
}

export interface OriginCaller_Ethereum {
    __kind: 'Ethereum'
    value: Type_292
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Type_290
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

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
 * - `O(1)`
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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

export const H256 = sts.bytes()

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Assets: sts.unit(),
        Balances: sts.unit(),
        CancelProxy: sts.unit(),
        DappsStaking: sts.unit(),
        IdentityJudgement: sts.unit(),
        NonTransfer: sts.unit(),
        StakerRewardClaim: sts.unit(),
    }
})

export type ProxyType = ProxyType_Any | ProxyType_Assets | ProxyType_Balances | ProxyType_CancelProxy | ProxyType_DappsStaking | ProxyType_IdentityJudgement | ProxyType_NonTransfer | ProxyType_StakerRewardClaim

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Assets {
    __kind: 'Assets'
}

export interface ProxyType_Balances {
    __kind: 'Balances'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_DappsStaking {
    __kind: 'DappsStaking'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_StakerRewardClaim {
    __kind: 'StakerRewardClaim'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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

export type H256 = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const PolkadotXcmCall: sts.Type<PolkadotXcmCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            message: Type_252,
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
            xcmVersion: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        limited_reserve_withdraw_assets: sts.enumStruct({
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
        reserve_withdraw_assets: sts.enumStruct({
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

export const V3MaybeErrorCode: sts.Type<V3MaybeErrorCode> = sts.closedEnum(() => {
    return  {
        Error: sts.bytes(),
        Success: sts.unit(),
        TruncatedError: sts.bytes(),
    }
})

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

export const Type_252: sts.Type<Type_252> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_255),
        V3: sts.array(() => Type_259),
    }
})

export const Type_259: sts.Type<Type_259> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_259),
        SetErrorHandler: sts.array(() => Type_259),
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
            call: Type_256,
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

export const Type_256: sts.Type<Type_256> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export interface Type_256 {
    encoded: Bytes
}

export type Type_259 = Type_259_AliasOrigin | Type_259_BurnAsset | Type_259_BuyExecution | Type_259_ClaimAsset | Type_259_ClearError | Type_259_ClearOrigin | Type_259_ClearTopic | Type_259_ClearTransactStatus | Type_259_DepositAsset | Type_259_DepositReserveAsset | Type_259_DescendOrigin | Type_259_ExchangeAsset | Type_259_ExpectAsset | Type_259_ExpectError | Type_259_ExpectOrigin | Type_259_ExpectPallet | Type_259_ExpectTransactStatus | Type_259_ExportMessage | Type_259_HrmpChannelAccepted | Type_259_HrmpChannelClosing | Type_259_HrmpNewChannelOpenRequest | Type_259_InitiateReserveWithdraw | Type_259_InitiateTeleport | Type_259_LockAsset | Type_259_NoteUnlockable | Type_259_QueryPallet | Type_259_QueryResponse | Type_259_ReceiveTeleportedAsset | Type_259_RefundSurplus | Type_259_ReportError | Type_259_ReportHolding | Type_259_ReportTransactStatus | Type_259_RequestUnlock | Type_259_ReserveAssetDeposited | Type_259_SetAppendix | Type_259_SetErrorHandler | Type_259_SetFeesMode | Type_259_SetTopic | Type_259_SubscribeVersion | Type_259_Transact | Type_259_TransferAsset | Type_259_TransferReserveAsset | Type_259_Trap | Type_259_UniversalOrigin | Type_259_UnlockAsset | Type_259_UnpaidExecution | Type_259_UnsubscribeVersion | Type_259_WithdrawAsset

export interface Type_259_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_259_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_259_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_259_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_259_ClearError {
    __kind: 'ClearError'
}

export interface Type_259_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_259_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_259_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_259_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_259_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_259_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_259_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_259_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_259_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_259_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_259_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_259_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_259_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
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

export interface Type_259_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_259_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_259_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_259_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_259_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_259_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_259_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_259_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_259_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_259_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_259_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_259_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_259_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_259_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_259_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_259[]
}

export interface Type_259_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_259[]
}

export interface Type_259_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_259_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_259_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_259_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_256
}

export interface Type_259_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_259_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_259_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_259_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_259_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_259_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_259_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_259_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export const Type_255: sts.Type<Type_255> = sts.closedEnum(() => {
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
        SetAppendix: sts.array(() => Type_255),
        SetErrorHandler: sts.array(() => Type_255),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_256,
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

export type Type_255 = Type_255_BuyExecution | Type_255_ClaimAsset | Type_255_ClearError | Type_255_ClearOrigin | Type_255_DepositAsset | Type_255_DepositReserveAsset | Type_255_DescendOrigin | Type_255_ExchangeAsset | Type_255_HrmpChannelAccepted | Type_255_HrmpChannelClosing | Type_255_HrmpNewChannelOpenRequest | Type_255_InitiateReserveWithdraw | Type_255_InitiateTeleport | Type_255_QueryHolding | Type_255_QueryResponse | Type_255_ReceiveTeleportedAsset | Type_255_RefundSurplus | Type_255_ReportError | Type_255_ReserveAssetDeposited | Type_255_SetAppendix | Type_255_SetErrorHandler | Type_255_SubscribeVersion | Type_255_Transact | Type_255_TransferAsset | Type_255_TransferReserveAsset | Type_255_Trap | Type_255_UnsubscribeVersion | Type_255_WithdrawAsset

export interface Type_255_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_255_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_255_ClearError {
    __kind: 'ClearError'
}

export interface Type_255_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_255_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_255_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_255_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_255_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_255_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_255_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_255_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_255_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_255_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_255_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_255_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_255_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_255_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_255_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_255_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_255_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_255[]
}

export interface Type_255_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_255[]
}

export interface Type_255_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_255_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_256
}

export interface Type_255_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_255_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_255_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_255_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_255_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type Type_252 = Type_252_V2 | Type_252_V3

export interface Type_252_V2 {
    __kind: 'V2'
    value: Type_255[]
}

export interface Type_252_V3 {
    __kind: 'V3'
    value: Type_259[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_suspension | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_reserve_withdraw_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_reserve_withdraw_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets

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
    message: Type_252
    maxWeight: Weight
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
    maybeXcmVersion?: (number | undefined)
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
 * - `origin`: Must be Root.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
        validationData: V4PersistedValidationData,
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

export const V4PersistedValidationData: sts.Type<V4PersistedValidationData> = sts.struct(() => {
    return  {
        parentHead: HeadData,
        relayParentNumber: sts.number(),
        relayParentStorageRoot: H256,
        maxPovSize: sts.number(),
    }
})

export const HeadData = sts.bytes()

export interface V4PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

export interface ParachainInherentData {
    validationData: V4PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [Id, InboundHrmpMessage[]][]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParachainInfoCall: sts.Type<ParachainInfoCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainInfoCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
    fields: BitFlags
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
    subs: [AccountId32, Data][]
}

export type BitFlags = bigint

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const EthereumCall: sts.Type<EthereumCall> = sts.closedEnum(() => {
    return  {
        transact: sts.enumStruct({
            transaction: TransactionV2,
        }),
    }
})

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
export const EthCallCall: sts.Type<EthCallCall> = sts.closedEnum(() => {
    return  {
        call: sts.enumStruct({
            call: Call,
            signer: AccountId32,
            signature: sts.bytes(),
            nonce: sts.number(),
        }),
    }
})

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
    signer: AccountId32
    signature: Bytes
    nonce: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
export const DappsStakingCall: sts.Type<DappsStakingCall> = sts.closedEnum(() => {
    return  {
        bond_and_stake: sts.enumStruct({
            contractId: SmartContract,
            value: sts.bigint(),
        }),
        burn_stale_reward: sts.enumStruct({
            contractId: SmartContract,
            era: sts.number(),
        }),
        claim_dapp: sts.enumStruct({
            contractId: SmartContract,
            era: sts.number(),
        }),
        claim_staker: sts.enumStruct({
            contractId: SmartContract,
        }),
        force_new_era: sts.unit(),
        maintenance_mode: sts.enumStruct({
            enableMaintenance: sts.boolean(),
        }),
        nomination_transfer: sts.enumStruct({
            originContractId: SmartContract,
            value: sts.bigint(),
            targetContractId: SmartContract,
        }),
        register: sts.enumStruct({
            developer: AccountId32,
            contractId: SmartContract,
        }),
        set_contract_stake_info: sts.enumStruct({
            contract: SmartContract,
            era: sts.number(),
            contractStakeInfo: ContractStakeInfo,
        }),
        set_reward_destination: sts.enumStruct({
            rewardDestination: RewardDestination,
        }),
        unbond_and_unstake: sts.enumStruct({
            contractId: SmartContract,
            value: sts.bigint(),
        }),
        unregister: sts.enumStruct({
            contractId: SmartContract,
        }),
        withdraw_from_unregistered: sts.enumStruct({
            contractId: SmartContract,
        }),
        withdraw_unbonded: sts.unit(),
    }
})

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return  {
        FreeBalance: sts.unit(),
        StakeBalance: sts.unit(),
    }
})

export type RewardDestination = RewardDestination_FreeBalance | RewardDestination_StakeBalance

export interface RewardDestination_FreeBalance {
    __kind: 'FreeBalance'
}

export interface RewardDestination_StakeBalance {
    __kind: 'StakeBalance'
}

export const ContractStakeInfo: sts.Type<ContractStakeInfo> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        numberOfStakers: sts.number(),
        contractRewardClaimed: sts.boolean(),
    }
})

export interface ContractStakeInfo {
    total: bigint
    numberOfStakers: number
    contractRewardClaimed: boolean
}

export const SmartContract: sts.Type<SmartContract> = sts.closedEnum(() => {
    return  {
        Evm: H160,
        Wasm: AccountId32,
    }
})

export type SmartContract = SmartContract_Evm | SmartContract_Wasm

export interface SmartContract_Evm {
    __kind: 'Evm'
    value: H160
}

export interface SmartContract_Wasm {
    __kind: 'Wasm'
    value: AccountId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DappsStakingCall = DappsStakingCall_bond_and_stake | DappsStakingCall_burn_stale_reward | DappsStakingCall_claim_dapp | DappsStakingCall_claim_staker | DappsStakingCall_force_new_era | DappsStakingCall_maintenance_mode | DappsStakingCall_nomination_transfer | DappsStakingCall_register | DappsStakingCall_set_contract_stake_info | DappsStakingCall_set_reward_destination | DappsStakingCall_unbond_and_unstake | DappsStakingCall_unregister | DappsStakingCall_withdraw_from_unregistered | DappsStakingCall_withdraw_unbonded

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
 * Used to burn unclaimed & stale rewards from an unregistered contract.
 */
export interface DappsStakingCall_burn_stale_reward {
    __kind: 'burn_stale_reward'
    contractId: SmartContract
    era: number
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
 * Used to register contract for dapps staking.
 * The origin account used is treated as the `developer` account.
 * 
 * Depending on the pallet configuration/state it is possible that developer needs to be whitelisted prior to registration.
 * 
 * As part of this call, `RegisterDeposit` will be reserved from devs account.
 */
export interface DappsStakingCall_register {
    __kind: 'register'
    developer: AccountId32
    contractId: SmartContract
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
 * Withdraw all funds that have completed the unbonding process.
 * 
 * If there are unbonding chunks which will be fully unbonded in future eras,
 * they will remain and can be withdrawn later.
 */
export interface DappsStakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CumulusXcmCall: sts.Type<CumulusXcmCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CumulusXcmCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ContractsCall = ContractsCall_call | ContractsCall_call_old_weight | ContractsCall_instantiate | ContractsCall_instantiate_old_weight | ContractsCall_instantiate_with_code | ContractsCall_instantiate_with_code_old_weight | ContractsCall_migrate | ContractsCall_remove_code | ContractsCall_set_code | ContractsCall_upload_code

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
    storageDepositLimit?: (bigint | undefined)
    data: Bytes
}

/**
 * Deprecated version if [`Self::call`] for use in an in-storage `Call`.
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
    storageDepositLimit?: (bigint | undefined)
    codeHash: H256
    data: Bytes
    salt: Bytes
}

/**
 * Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
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
    storageDepositLimit?: (bigint | undefined)
    code: Bytes
    data: Bytes
    salt: Bytes
}

/**
 * Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
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
 * When a migration is in progress, this dispatchable can be used to run migration steps.
 * Calls that contribute to advancing the migration have their fees waived, as it's helpful
 * for the chain. Note that while the migration is in progress, the pallet will also
 * leverage the `on_idle` hooks to run migration steps.
 */
export interface ContractsCall_migrate {
    __kind: 'migrate'
    weightLimit: Weight
}

/**
 * Remove the code stored under `code_hash` and refund the deposit to its owner.
 * 
 * A code can only be removed by its original uploader (its owner) and only if it is
 * not used by any contract.
 */
export interface ContractsCall_remove_code {
    __kind: 'remove_code'
    codeHash: H256
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
    codeHash: H256
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
 * - `determinism`: If this is set to any other value but [`Determinism::Enforced`] then
 *   the only way to use this code is to delegate call into it from an offchain execution.
 *   Set to [`Determinism::Enforced`] if in doubt.
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
    code: Bytes
    storageDepositLimit?: (bigint | undefined)
    determinism: Determinism
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CollatorSelectionCall: sts.Type<CollatorSelectionCall> = sts.closedEnum(() => {
    return  {
        leave_intent: sts.unit(),
        register_as_candidate: sts.unit(),
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CollatorSelectionCall = CollatorSelectionCall_leave_intent | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_invulnerables

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
 * Register this account as a collator candidate. The account must (a) already have
 * registered session keys and (b) be able to reserve the `CandidacyBond`.
 * 
 * This call is not available to `Invulnerable` collators.
 */
export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

/**
 * Set the candidacy bond amount.
 */
export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
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
 * Set the list of invulnerable (fixed) collators.
 */
export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: AccountId32[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BlockRewardCall: sts.Type<BlockRewardCall> = sts.closedEnum(() => {
    return  {
        set_configuration: sts.enumStruct({
            rewardDistroParams: RewardDistributionConfig,
        }),
    }
})

export const RewardDistributionConfig: sts.Type<RewardDistributionConfig> = sts.struct(() => {
    return  {
        baseTreasuryPercent: sts.number(),
        baseStakerPercent: sts.number(),
        dappsPercent: sts.number(),
        collatorsPercent: sts.number(),
        adjustablePercent: sts.number(),
        idealDappsStakingTvl: sts.number(),
    }
})

export interface RewardDistributionConfig {
    baseTreasuryPercent: number
    baseStakerPercent: number
    dappsPercent: number
    collatorsPercent: number
    adjustablePercent: number
    idealDappsStakingTvl: number
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
export const BaseFeeCall: sts.Type<BaseFeeCall> = sts.closedEnum(() => {
    return  {
        set_base_fee_per_gas: sts.enumStruct({
            fee: sts.bigint(),
        }),
        set_elasticity: sts.enumStruct({
            elasticity: Permill,
        }),
    }
})

export const Permill = sts.number()

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
    elasticity: Permill
}

export type Permill = number

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_set_balance_deprecated | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

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
 * Set the regular balance of a given account; it also takes a reserved balance but this
 * must be the same as the account's current reserved balance.
 * 
 * The dispatch origin for this call is `root`.
 * 
 * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
 * 
 * WARNING: DEPRECATED! Will be released in approximately 3 months.
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
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
 * possibililty of churn).
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AssetsCall: sts.Type<AssetsCall> = sts.closedEnum(() => {
    return  {
        approve_transfer: sts.enumStruct({
            id: sts.bigint(),
            delegate: MultiAddress,
            amount: sts.bigint(),
        }),
        block: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
        }),
        burn: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        cancel_approval: sts.enumStruct({
            id: sts.bigint(),
            delegate: MultiAddress,
        }),
        clear_metadata: sts.enumStruct({
            id: sts.bigint(),
        }),
        create: sts.enumStruct({
            id: sts.bigint(),
            admin: MultiAddress,
            minBalance: sts.bigint(),
        }),
        destroy_accounts: sts.enumStruct({
            id: sts.bigint(),
        }),
        destroy_approvals: sts.enumStruct({
            id: sts.bigint(),
        }),
        finish_destroy: sts.enumStruct({
            id: sts.bigint(),
        }),
        force_asset_status: sts.enumStruct({
            id: sts.bigint(),
            owner: MultiAddress,
            issuer: MultiAddress,
            admin: MultiAddress,
            freezer: MultiAddress,
            minBalance: sts.bigint(),
            isSufficient: sts.boolean(),
            isFrozen: sts.boolean(),
        }),
        force_cancel_approval: sts.enumStruct({
            id: sts.bigint(),
            owner: MultiAddress,
            delegate: MultiAddress,
        }),
        force_clear_metadata: sts.enumStruct({
            id: sts.bigint(),
        }),
        force_create: sts.enumStruct({
            id: sts.bigint(),
            owner: MultiAddress,
            isSufficient: sts.boolean(),
            minBalance: sts.bigint(),
        }),
        force_set_metadata: sts.enumStruct({
            id: sts.bigint(),
            name: sts.bytes(),
            symbol: sts.bytes(),
            decimals: sts.number(),
            isFrozen: sts.boolean(),
        }),
        force_transfer: sts.enumStruct({
            id: sts.bigint(),
            source: MultiAddress,
            dest: MultiAddress,
            amount: sts.bigint(),
        }),
        freeze: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
        }),
        freeze_asset: sts.enumStruct({
            id: sts.bigint(),
        }),
        mint: sts.enumStruct({
            id: sts.bigint(),
            beneficiary: MultiAddress,
            amount: sts.bigint(),
        }),
        refund: sts.enumStruct({
            id: sts.bigint(),
            allowBurn: sts.boolean(),
        }),
        refund_other: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
        }),
        set_metadata: sts.enumStruct({
            id: sts.bigint(),
            name: sts.bytes(),
            symbol: sts.bytes(),
            decimals: sts.number(),
        }),
        set_min_balance: sts.enumStruct({
            id: sts.bigint(),
            minBalance: sts.bigint(),
        }),
        set_team: sts.enumStruct({
            id: sts.bigint(),
            issuer: MultiAddress,
            admin: MultiAddress,
            freezer: MultiAddress,
        }),
        start_destroy: sts.enumStruct({
            id: sts.bigint(),
        }),
        thaw: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
        }),
        thaw_asset: sts.enumStruct({
            id: sts.bigint(),
        }),
        touch: sts.enumStruct({
            id: sts.bigint(),
        }),
        touch_other: sts.enumStruct({
            id: sts.bigint(),
            who: MultiAddress,
        }),
        transfer: sts.enumStruct({
            id: sts.bigint(),
            target: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_approved: sts.enumStruct({
            id: sts.bigint(),
            owner: MultiAddress,
            destination: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            id: sts.bigint(),
            target: MultiAddress,
            amount: sts.bigint(),
        }),
        transfer_ownership: sts.enumStruct({
            id: sts.bigint(),
            owner: MultiAddress,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetsCall = AssetsCall_approve_transfer | AssetsCall_block | AssetsCall_burn | AssetsCall_cancel_approval | AssetsCall_clear_metadata | AssetsCall_create | AssetsCall_destroy_accounts | AssetsCall_destroy_approvals | AssetsCall_finish_destroy | AssetsCall_force_asset_status | AssetsCall_force_cancel_approval | AssetsCall_force_clear_metadata | AssetsCall_force_create | AssetsCall_force_set_metadata | AssetsCall_force_transfer | AssetsCall_freeze | AssetsCall_freeze_asset | AssetsCall_mint | AssetsCall_refund | AssetsCall_refund_other | AssetsCall_set_metadata | AssetsCall_set_min_balance | AssetsCall_set_team | AssetsCall_start_destroy | AssetsCall_thaw | AssetsCall_thaw_asset | AssetsCall_touch | AssetsCall_touch_other | AssetsCall_transfer | AssetsCall_transfer_approved | AssetsCall_transfer_keep_alive | AssetsCall_transfer_ownership

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
 * Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 * - `id`: The identifier of the account's asset.
 * - `who`: The account to be unblocked.
 * 
 * Emits `Blocked`.
 * 
 * Weight: `O(1)`
 */
export interface AssetsCall_block {
    __kind: 'block'
    id: bigint
    who: MultiAddress
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
    name: Bytes
    symbol: Bytes
    decimals: number
    isFrozen: boolean
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
 * Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
 * must already exist as an entry in `Account`s of the asset. If you want to freeze an
 * account that does not have an entry, use `touch_other` first.
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
 * Return the deposit (if any) of an asset account or a consumer reference (if any) of an
 * account.
 * 
 * The origin must be Signed.
 * 
 * - `id`: The identifier of the asset for which the caller would like the deposit
 *   refunded.
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
 * Return the deposit (if any) of a target asset account. Useful if you are the depositor.
 * 
 * The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
 * order to burn a non-zero balance of the asset, the caller must be the account and should
 * use `refund`.
 * 
 * - `id`: The identifier of the asset for the account holding a deposit.
 * - `who`: The account to refund.
 * 
 * Emits `Refunded` event when successful.
 */
export interface AssetsCall_refund_other {
    __kind: 'refund_other'
    id: bigint
    who: MultiAddress
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
    name: Bytes
    symbol: Bytes
    decimals: number
}

/**
 * Sets the minimum balance of an asset.
 * 
 * Only works if there aren't any accounts that are holding the asset or if
 * the new value of `min_balance` is less than the old one.
 * 
 * Origin must be Signed and the sender has to be the Owner of the
 * asset `id`.
 * 
 * - `id`: The identifier of the asset.
 * - `min_balance`: The new value of `min_balance`.
 * 
 * Emits `AssetMinBalanceChanged` event when successful.
 */
export interface AssetsCall_set_min_balance {
    __kind: 'set_min_balance'
    id: bigint
    minBalance: bigint
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
 * Allow unprivileged transfers to and from an account again.
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
 * Create an asset account for `who`.
 * 
 * A deposit will be taken from the signer account.
 * 
 * - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
 *   must have sufficient funds for a deposit to be taken.
 * - `id`: The identifier of the asset for the account to be created.
 * - `who`: The account to be created.
 * 
 * Emits `Touched` event when successful.
 */
export interface AssetsCall_touch_other {
    __kind: 'touch_other'
    id: bigint
    who: MultiAddress
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

export type Call = Call_Assets | Call_Balances | Call_BaseFee | Call_BlockReward | Call_CollatorSelection | Call_Contracts | Call_CumulusXcm | Call_DappsStaking | Call_DmpQueue | Call_EVM | Call_EthCall | Call_Ethereum | Call_Identity | Call_Multisig | Call_ParachainInfo | Call_ParachainSystem | Call_PolkadotXcm | Call_Proxy | Call_Session | Call_Sudo | Call_System | Call_Timestamp | Call_Utility | Call_Vesting | Call_XcAssetConfig | Call_XcmpQueue | Call_Xtokens

export interface Call_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_BaseFee {
    __kind: 'BaseFee'
    value: BaseFeeCall
}

export interface Call_BlockReward {
    __kind: 'BlockReward'
    value: BlockRewardCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
}

export interface Call_Contracts {
    __kind: 'Contracts'
    value: ContractsCall
}

export interface Call_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmCall
}

export interface Call_DappsStaking {
    __kind: 'DappsStaking'
    value: DappsStakingCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_EVM {
    __kind: 'EVM'
    value: EVMCall
}

export interface Call_EthCall {
    __kind: 'EthCall'
    value: EthCallCall
}

export interface Call_Ethereum {
    __kind: 'Ethereum'
    value: EthereumCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_ParachainInfo {
    __kind: 'ParachainInfo'
    value: ParachainInfoCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
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

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_XcAssetConfig {
    __kind: 'XcAssetConfig'
    value: XcAssetConfigCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Call_Xtokens {
    __kind: 'Xtokens'
    value: XtokensCall
}
