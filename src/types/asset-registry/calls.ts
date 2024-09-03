import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v138 from '../v138'
import * as v160 from '../v160'
import * as v176 from '../v176'
import * as v222 from '../v222'
import * as v244 from '../v244'

export const register =  {
    name: 'AssetRegistry.register',
    /**
     * Register a new asset.
     * 
     * Asset is identified by `name` and the name must not be used to register another asset.
     * 
     * New asset is given `NextAssetId` - sequential asset id
     * 
     * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
     * 
     * Emits 'Registered` event when successful.
     */
    v108: new CallType(
        'AssetRegistry.register',
        sts.struct({
            name: sts.bytes(),
            assetType: v108.AssetType,
            existentialDeposit: sts.bigint(),
        })
    ),
    /**
     * Register a new asset.
     * 
     * Asset is identified by `name` and the name must not be used to register another asset.
     * 
     * New asset is given `NextAssetId` - sequential asset id
     * 
     * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
     * 
     * Emits 'Registered` event when successful.
     */
    v138: new CallType(
        'AssetRegistry.register',
        sts.struct({
            name: sts.bytes(),
            assetType: v138.AssetType,
            existentialDeposit: sts.bigint(),
            assetId: sts.option(() => sts.number()),
            metadata: sts.option(() => v138.Metadata),
            location: sts.option(() => v138.AssetLocation),
        })
    ),
    /**
     * Register a new asset.
     * 
     * Asset is identified by `name` and the name must not be used to register another asset.
     * 
     * New asset is given `NextAssetId` - sequential asset id
     * 
     * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
     * 
     * Emits 'Registered` event when successful.
     */
    v160: new CallType(
        'AssetRegistry.register',
        sts.struct({
            name: sts.bytes(),
            assetType: v160.AssetType,
            existentialDeposit: sts.bigint(),
            assetId: sts.option(() => sts.number()),
            metadata: sts.option(() => v160.Metadata),
            location: sts.option(() => v160.AssetLocation),
            xcmRateLimit: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Register a new asset.
     * 
     * Asset is identified by `name` and the name must not be used to register another asset.
     * 
     * New asset is given `NextAssetId` - sequential asset id
     * 
     * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
     * 
     * Emits 'Registered` event when successful.
     */
    v176: new CallType(
        'AssetRegistry.register',
        sts.struct({
            name: sts.bytes(),
            assetType: v176.AssetType,
            existentialDeposit: sts.bigint(),
            assetId: sts.option(() => sts.number()),
            metadata: sts.option(() => v176.Metadata),
            location: sts.option(() => v176.AssetLocation),
            xcmRateLimit: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * See [`Pallet::register`].
     */
    v222: new CallType(
        'AssetRegistry.register',
        sts.struct({
            assetId: sts.option(() => sts.number()),
            name: sts.option(() => sts.bytes()),
            assetType: v222.AssetType,
            existentialDeposit: sts.option(() => sts.bigint()),
            symbol: sts.option(() => sts.bytes()),
            decimals: sts.option(() => sts.number()),
            location: sts.option(() => v222.AssetLocation),
            xcmRateLimit: sts.option(() => sts.bigint()),
            isSufficient: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::register`].
     */
    v244: new CallType(
        'AssetRegistry.register',
        sts.struct({
            assetId: sts.option(() => sts.number()),
            name: sts.option(() => sts.bytes()),
            assetType: v244.AssetType,
            existentialDeposit: sts.option(() => sts.bigint()),
            symbol: sts.option(() => sts.bytes()),
            decimals: sts.option(() => sts.number()),
            location: sts.option(() => v244.AssetLocation),
            xcmRateLimit: sts.option(() => sts.bigint()),
            isSufficient: sts.boolean(),
        })
    ),
}

export const update =  {
    name: 'AssetRegistry.update',
    /**
     * Update registered asset.
     * 
     * Updates also mapping between name and asset id if provided name is different than currently registered.
     * 
     * Emits `Updated` event when successful.
     */
    v108: new CallType(
        'AssetRegistry.update',
        sts.struct({
            assetId: sts.number(),
            name: sts.bytes(),
            assetType: v108.AssetType,
            existentialDeposit: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Update registered asset.
     * 
     * Updates also mapping between name and asset id if provided name is different than currently registered.
     * 
     * Emits `Updated` event when successful.
     */
    v160: new CallType(
        'AssetRegistry.update',
        sts.struct({
            assetId: sts.number(),
            name: sts.bytes(),
            assetType: v160.AssetType,
            existentialDeposit: sts.option(() => sts.bigint()),
            xcmRateLimit: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Update registered asset.
     * 
     * Updates also mapping between name and asset id if provided name is different than currently registered.
     * 
     * Emits `Updated` event when successful.
     */
    v176: new CallType(
        'AssetRegistry.update',
        sts.struct({
            assetId: sts.number(),
            name: sts.bytes(),
            assetType: v176.AssetType,
            existentialDeposit: sts.option(() => sts.bigint()),
            xcmRateLimit: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * See [`Pallet::update`].
     */
    v222: new CallType(
        'AssetRegistry.update',
        sts.struct({
            assetId: sts.number(),
            name: sts.option(() => sts.bytes()),
            assetType: sts.option(() => v222.AssetType),
            existentialDeposit: sts.option(() => sts.bigint()),
            xcmRateLimit: sts.option(() => sts.bigint()),
            isSufficient: sts.option(() => sts.boolean()),
            symbol: sts.option(() => sts.bytes()),
            decimals: sts.option(() => sts.number()),
            location: sts.option(() => v222.AssetLocation),
        })
    ),
    /**
     * See [`Pallet::update`].
     */
    v244: new CallType(
        'AssetRegistry.update',
        sts.struct({
            assetId: sts.number(),
            name: sts.option(() => sts.bytes()),
            assetType: sts.option(() => v244.AssetType),
            existentialDeposit: sts.option(() => sts.bigint()),
            xcmRateLimit: sts.option(() => sts.bigint()),
            isSufficient: sts.option(() => sts.boolean()),
            symbol: sts.option(() => sts.bytes()),
            decimals: sts.option(() => sts.number()),
            location: sts.option(() => v244.AssetLocation),
        })
    ),
}

export const setMetadata =  {
    name: 'AssetRegistry.set_metadata',
    /**
     * Set metadata for an asset.
     * 
     * - `asset_id`: Asset identifier.
     * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     * - `decimals`: The number of decimals this asset uses to represent one unit.
     * 
     * Emits `MetadataSet` event when successful.
     */
    v108: new CallType(
        'AssetRegistry.set_metadata',
        sts.struct({
            assetId: sts.number(),
            symbol: sts.bytes(),
            decimals: sts.number(),
        })
    ),
}

export const setLocation =  {
    name: 'AssetRegistry.set_location',
    /**
     * Set asset native location.
     * 
     * Adds mapping between native location and local asset id and vice versa.
     * 
     * Mainly used in XCM.
     * 
     * Emits `LocationSet` event when successful.
     */
    v108: new CallType(
        'AssetRegistry.set_location',
        sts.struct({
            assetId: sts.number(),
            location: v108.AssetLocation,
        })
    ),
    /**
     * Set asset native location.
     * 
     * Adds mapping between native location and local asset id and vice versa.
     * 
     * Mainly used in XCM.
     * 
     * Emits `LocationSet` event when successful.
     */
    v160: new CallType(
        'AssetRegistry.set_location',
        sts.struct({
            assetId: sts.number(),
            location: v160.AssetLocation,
        })
    ),
}

export const registerExternal =  {
    name: 'AssetRegistry.register_external',
    /**
     * See [`Pallet::register_external`].
     */
    v222: new CallType(
        'AssetRegistry.register_external',
        sts.struct({
            location: v222.AssetLocation,
        })
    ),
    /**
     * See [`Pallet::register_external`].
     */
    v244: new CallType(
        'AssetRegistry.register_external',
        sts.struct({
            location: v244.AssetLocation,
        })
    ),
}

export const banAsset =  {
    name: 'AssetRegistry.ban_asset',
    /**
     * See [`Pallet::ban_asset`].
     */
    v222: new CallType(
        'AssetRegistry.ban_asset',
        sts.struct({
            assetId: sts.number(),
        })
    ),
}

export const unbanAsset =  {
    name: 'AssetRegistry.unban_asset',
    /**
     * See [`Pallet::unban_asset`].
     */
    v222: new CallType(
        'AssetRegistry.unban_asset',
        sts.struct({
            assetId: sts.number(),
        })
    ),
}
