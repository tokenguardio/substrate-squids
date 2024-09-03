import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'
import * as v1002000 from '../v1002000'

export const assetRateCreated =  {
    name: 'AssetRate.AssetRateCreated',
    v1001002: new EventType(
        'AssetRate.AssetRateCreated',
        sts.struct({
            assetKind: v1001002.VersionedLocatableAsset,
            rate: v1001002.FixedU128,
        })
    ),
    v1002000: new EventType(
        'AssetRate.AssetRateCreated',
        sts.struct({
            assetKind: v1002000.VersionedLocatableAsset,
            rate: v1002000.FixedU128,
        })
    ),
}

export const assetRateRemoved =  {
    name: 'AssetRate.AssetRateRemoved',
    v1001002: new EventType(
        'AssetRate.AssetRateRemoved',
        sts.struct({
            assetKind: v1001002.VersionedLocatableAsset,
        })
    ),
    v1002000: new EventType(
        'AssetRate.AssetRateRemoved',
        sts.struct({
            assetKind: v1002000.VersionedLocatableAsset,
        })
    ),
}

export const assetRateUpdated =  {
    name: 'AssetRate.AssetRateUpdated',
    v1001002: new EventType(
        'AssetRate.AssetRateUpdated',
        sts.struct({
            assetKind: v1001002.VersionedLocatableAsset,
            old: v1001002.FixedU128,
            new: v1001002.FixedU128,
        })
    ),
    v1002000: new EventType(
        'AssetRate.AssetRateUpdated',
        sts.struct({
            assetKind: v1002000.VersionedLocatableAsset,
            old: v1002000.FixedU128,
            new: v1002000.FixedU128,
        })
    ),
}
