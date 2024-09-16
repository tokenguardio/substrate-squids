import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v115 from '../v115'
import * as v160 from '../v160'
import * as v176 from '../v176'
import * as v222 from '../v222'
import * as v244 from '../v244'

export const registered =  {
    name: 'AssetRegistry.Registered',
    /**
     * Asset was registered. \[asset_id, name, type\]
     */
    v108: new EventType(
        'AssetRegistry.Registered',
        sts.tuple([sts.number(), v108.BoundedVec, v108.AssetType])
    ),
    /**
     * Asset was registered.
     */
    v115: new EventType(
        'AssetRegistry.Registered',
        sts.struct({
            assetId: sts.number(),
            assetName: sts.bytes(),
            assetType: v115.AssetType,
        })
    ),
    /**
     * Asset was registered.
     */
    v176: new EventType(
        'AssetRegistry.Registered',
        sts.struct({
            assetId: sts.number(),
            assetName: sts.bytes(),
            assetType: v176.AssetType,
        })
    ),
    /**
     * Asset was registered.
     */
    v222: new EventType(
        'AssetRegistry.Registered',
        sts.struct({
            assetId: sts.number(),
            assetName: sts.option(() => sts.bytes()),
            assetType: v222.AssetType,
            existentialDeposit: sts.bigint(),
            xcmRateLimit: sts.option(() => sts.bigint()),
            symbol: sts.option(() => sts.bytes()),
            decimals: sts.option(() => sts.number()),
            isSufficient: sts.boolean(),
        })
    ),
}

export const updated =  {
    name: 'AssetRegistry.Updated',
    /**
     * Asset was updated. \[asset_id, name, type\]
     */
    v108: new EventType(
        'AssetRegistry.Updated',
        sts.tuple([sts.number(), v108.BoundedVec, v108.AssetType])
    ),
    /**
     * Asset was updated.
     */
    v115: new EventType(
        'AssetRegistry.Updated',
        sts.struct({
            assetId: sts.number(),
            assetName: sts.bytes(),
            assetType: v115.AssetType,
        })
    ),
    /**
     * Asset was updated.
     */
    v160: new EventType(
        'AssetRegistry.Updated',
        sts.struct({
            assetId: sts.number(),
            assetName: sts.bytes(),
            assetType: v160.AssetType,
            existentialDeposit: sts.bigint(),
            xcmRateLimit: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Asset was updated.
     */
    v176: new EventType(
        'AssetRegistry.Updated',
        sts.struct({
            assetId: sts.number(),
            assetName: sts.bytes(),
            assetType: v176.AssetType,
            existentialDeposit: sts.bigint(),
            xcmRateLimit: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Asset was updated.
     */
    v222: new EventType(
        'AssetRegistry.Updated',
        sts.struct({
            assetId: sts.number(),
            assetName: sts.option(() => sts.bytes()),
            assetType: v222.AssetType,
            existentialDeposit: sts.bigint(),
            xcmRateLimit: sts.option(() => sts.bigint()),
            symbol: sts.option(() => sts.bytes()),
            decimals: sts.option(() => sts.number()),
            isSufficient: sts.boolean(),
        })
    ),
}

export const metadataSet =  {
    name: 'AssetRegistry.MetadataSet',
    /**
     * Metadata set for an asset. \[asset_id, symbol, decimals\]
     */
    v108: new EventType(
        'AssetRegistry.MetadataSet',
        sts.tuple([sts.number(), v108.BoundedVec, sts.number()])
    ),
    /**
     * Metadata set for an asset.
     */
    v115: new EventType(
        'AssetRegistry.MetadataSet',
        sts.struct({
            assetId: sts.number(),
            symbol: sts.bytes(),
            decimals: sts.number(),
        })
    ),
}

export const locationSet =  {
    name: 'AssetRegistry.LocationSet',
    /**
     * Native location set for an asset. \[asset_id, location\]
     */
    v108: new EventType(
        'AssetRegistry.LocationSet',
        sts.tuple([sts.number(), v108.AssetLocation])
    ),
    /**
     * Native location set for an asset.
     */
    v115: new EventType(
        'AssetRegistry.LocationSet',
        sts.struct({
            assetId: sts.number(),
            location: v115.AssetLocation,
        })
    ),
    /**
     * Native location set for an asset.
     */
    v160: new EventType(
        'AssetRegistry.LocationSet',
        sts.struct({
            assetId: sts.number(),
            location: v160.AssetLocation,
        })
    ),
    /**
     * Native location set for an asset.
     */
    v244: new EventType(
        'AssetRegistry.LocationSet',
        sts.struct({
            assetId: sts.number(),
            location: v244.AssetLocation,
        })
    ),
}

export const existentialDepositPaid =  {
    name: 'AssetRegistry.ExistentialDepositPaid',
    /**
     * Existential deposit for insufficinet asset was paid.
     * `SufficiencyCheck` triggers this event.
     */
    v222: new EventType(
        'AssetRegistry.ExistentialDepositPaid',
        sts.struct({
            who: v222.AccountId32,
            feeAsset: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const assetBanned =  {
    name: 'AssetRegistry.AssetBanned',
    /**
     * Asset was banned.
     */
    v222: new EventType(
        'AssetRegistry.AssetBanned',
        sts.struct({
            assetId: sts.number(),
        })
    ),
}

export const assetUnbanned =  {
    name: 'AssetRegistry.AssetUnbanned',
    /**
     * Asset's ban was removed.
     */
    v222: new EventType(
        'AssetRegistry.AssetUnbanned',
        sts.struct({
            assetId: sts.number(),
        })
    ),
}
