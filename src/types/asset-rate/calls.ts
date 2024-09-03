import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'
import * as v1002000 from '../v1002000'

export const create =  {
    name: 'AssetRate.create',
    /**
     * See [`Pallet::create`].
     */
    v1001002: new CallType(
        'AssetRate.create',
        sts.struct({
            assetKind: v1001002.VersionedLocatableAsset,
            rate: v1001002.FixedU128,
        })
    ),
    /**
     * See [`Pallet::create`].
     */
    v1002000: new CallType(
        'AssetRate.create',
        sts.struct({
            assetKind: v1002000.VersionedLocatableAsset,
            rate: v1002000.FixedU128,
        })
    ),
}

export const update =  {
    name: 'AssetRate.update',
    /**
     * See [`Pallet::update`].
     */
    v1001002: new CallType(
        'AssetRate.update',
        sts.struct({
            assetKind: v1001002.VersionedLocatableAsset,
            rate: v1001002.FixedU128,
        })
    ),
    /**
     * See [`Pallet::update`].
     */
    v1002000: new CallType(
        'AssetRate.update',
        sts.struct({
            assetKind: v1002000.VersionedLocatableAsset,
            rate: v1002000.FixedU128,
        })
    ),
}

export const remove =  {
    name: 'AssetRate.remove',
    /**
     * See [`Pallet::remove`].
     */
    v1001002: new CallType(
        'AssetRate.remove',
        sts.struct({
            assetKind: v1001002.VersionedLocatableAsset,
        })
    ),
    /**
     * See [`Pallet::remove`].
     */
    v1002000: new CallType(
        'AssetRate.remove',
        sts.struct({
            assetKind: v1002000.VersionedLocatableAsset,
        })
    ),
}
