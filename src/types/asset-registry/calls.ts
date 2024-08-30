import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v968 from '../v968'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'

export const registerForeignAsset =  {
    name: 'AssetRegistry.register_foreign_asset',
    v952: new CallType(
        'AssetRegistry.register_foreign_asset',
        sts.struct({
            location: v952.VersionedMultiLocation,
            metadata: v952.AssetMetadata,
        })
    ),
}

export const updateForeignAsset =  {
    name: 'AssetRegistry.update_foreign_asset',
    v952: new CallType(
        'AssetRegistry.update_foreign_asset',
        sts.struct({
            foreignAssetId: sts.number(),
            location: v952.VersionedMultiLocation,
            metadata: v952.AssetMetadata,
        })
    ),
}

export const registerNativeAsset =  {
    name: 'AssetRegistry.register_native_asset',
    v952: new CallType(
        'AssetRegistry.register_native_asset',
        sts.struct({
            currencyId: v952.CurrencyId,
            location: v952.VersionedMultiLocation,
            metadata: v952.AssetMetadata,
        })
    ),
    v956: new CallType(
        'AssetRegistry.register_native_asset',
        sts.struct({
            currencyId: v956.CurrencyId,
            location: v956.VersionedMultiLocation,
            metadata: v956.AssetMetadata,
        })
    ),
    v962: new CallType(
        'AssetRegistry.register_native_asset',
        sts.struct({
            currencyId: v962.CurrencyId,
            location: v962.VersionedMultiLocation,
            metadata: v962.AssetMetadata,
        })
    ),
    v970: new CallType(
        'AssetRegistry.register_native_asset',
        sts.struct({
            currencyId: v970.CurrencyId,
            location: v970.VersionedMultiLocation,
            metadata: v970.AssetMetadata,
        })
    ),
    v972: new CallType(
        'AssetRegistry.register_native_asset',
        sts.struct({
            currencyId: v972.CurrencyId,
            location: v972.VersionedMultiLocation,
            metadata: v972.AssetMetadata,
        })
    ),
    v980: new CallType(
        'AssetRegistry.register_native_asset',
        sts.struct({
            currencyId: v980.CurrencyId,
            location: v980.VersionedMultiLocation,
            metadata: v980.AssetMetadata,
        })
    ),
    /**
     * See [`Pallet::register_native_asset`].
     */
    v990: new CallType(
        'AssetRegistry.register_native_asset',
        sts.struct({
            currencyId: v990.CurrencyId,
            location: v990.VersionedMultiLocation,
            metadata: v990.AssetMetadata,
        })
    ),
    /**
     * See [`Pallet::register_native_asset`].
     */
    v10000: new CallType(
        'AssetRegistry.register_native_asset',
        sts.struct({
            currencyId: v10000.CurrencyId,
            location: v10000.VersionedMultiLocation,
            metadata: v10000.AssetMetadata,
        })
    ),
    /**
     * See [`Pallet::register_native_asset`].
     */
    v11000: new CallType(
        'AssetRegistry.register_native_asset',
        sts.struct({
            currencyId: v11000.CurrencyId,
            location: v11000.VersionedLocation,
            metadata: v11000.AssetMetadata,
        })
    ),
}

export const updateNativeAsset =  {
    name: 'AssetRegistry.update_native_asset',
    v952: new CallType(
        'AssetRegistry.update_native_asset',
        sts.struct({
            currencyId: v952.CurrencyId,
            location: v952.VersionedMultiLocation,
            metadata: v952.AssetMetadata,
        })
    ),
    v956: new CallType(
        'AssetRegistry.update_native_asset',
        sts.struct({
            currencyId: v956.CurrencyId,
            location: v956.VersionedMultiLocation,
            metadata: v956.AssetMetadata,
        })
    ),
    v962: new CallType(
        'AssetRegistry.update_native_asset',
        sts.struct({
            currencyId: v962.CurrencyId,
            location: v962.VersionedMultiLocation,
            metadata: v962.AssetMetadata,
        })
    ),
    v970: new CallType(
        'AssetRegistry.update_native_asset',
        sts.struct({
            currencyId: v970.CurrencyId,
            location: v970.VersionedMultiLocation,
            metadata: v970.AssetMetadata,
        })
    ),
    v972: new CallType(
        'AssetRegistry.update_native_asset',
        sts.struct({
            currencyId: v972.CurrencyId,
            location: v972.VersionedMultiLocation,
            metadata: v972.AssetMetadata,
        })
    ),
    v980: new CallType(
        'AssetRegistry.update_native_asset',
        sts.struct({
            currencyId: v980.CurrencyId,
            location: v980.VersionedMultiLocation,
            metadata: v980.AssetMetadata,
        })
    ),
    /**
     * See [`Pallet::update_native_asset`].
     */
    v990: new CallType(
        'AssetRegistry.update_native_asset',
        sts.struct({
            currencyId: v990.CurrencyId,
            location: v990.VersionedMultiLocation,
            metadata: v990.AssetMetadata,
        })
    ),
    /**
     * See [`Pallet::update_native_asset`].
     */
    v10000: new CallType(
        'AssetRegistry.update_native_asset',
        sts.struct({
            currencyId: v10000.CurrencyId,
            location: v10000.VersionedMultiLocation,
            metadata: v10000.AssetMetadata,
        })
    ),
    /**
     * See [`Pallet::update_native_asset`].
     */
    v11000: new CallType(
        'AssetRegistry.update_native_asset',
        sts.struct({
            currencyId: v11000.CurrencyId,
            location: v11000.VersionedLocation,
            metadata: v11000.AssetMetadata,
        })
    ),
}

export const registerTokenMetadata =  {
    name: 'AssetRegistry.register_token_metadata',
    v956: new CallType(
        'AssetRegistry.register_token_metadata',
        sts.struct({
            metadata: v956.AssetMetadata,
        })
    ),
}

export const registerVtokenMetadata =  {
    name: 'AssetRegistry.register_vtoken_metadata',
    v956: new CallType(
        'AssetRegistry.register_vtoken_metadata',
        sts.struct({
            tokenId: sts.number(),
        })
    ),
}

export const registerVstokenMetadata =  {
    name: 'AssetRegistry.register_vstoken_metadata',
    v956: new CallType(
        'AssetRegistry.register_vstoken_metadata',
        sts.struct({
            tokenId: sts.number(),
        })
    ),
}

export const registerVsbondMetadata =  {
    name: 'AssetRegistry.register_vsbond_metadata',
    v956: new CallType(
        'AssetRegistry.register_vsbond_metadata',
        sts.struct({
            tokenId: sts.number(),
            paraId: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        })
    ),
}

export const registerMultilocation =  {
    name: 'AssetRegistry.register_multilocation',
    v956: new CallType(
        'AssetRegistry.register_multilocation',
        sts.struct({
            currencyId: v956.CurrencyId,
            location: v956.VersionedMultiLocation,
            weight: sts.bigint(),
        })
    ),
    v962: new CallType(
        'AssetRegistry.register_multilocation',
        sts.struct({
            currencyId: v962.CurrencyId,
            location: v962.VersionedMultiLocation,
            weight: sts.bigint(),
        })
    ),
    v970: new CallType(
        'AssetRegistry.register_multilocation',
        sts.struct({
            currencyId: v970.CurrencyId,
            location: v970.VersionedMultiLocation,
            weight: sts.bigint(),
        })
    ),
    v972: new CallType(
        'AssetRegistry.register_multilocation',
        sts.struct({
            currencyId: v972.CurrencyId,
            location: v972.VersionedMultiLocation,
            weight: v972.Weight,
        })
    ),
    v980: new CallType(
        'AssetRegistry.register_multilocation',
        sts.struct({
            currencyId: v980.CurrencyId,
            location: v980.VersionedMultiLocation,
            weight: v980.Weight,
        })
    ),
    /**
     * See [`Pallet::register_multilocation`].
     */
    v990: new CallType(
        'AssetRegistry.register_multilocation',
        sts.struct({
            currencyId: v990.CurrencyId,
            location: v990.VersionedMultiLocation,
            weight: v990.Weight,
        })
    ),
    /**
     * See [`Pallet::register_multilocation`].
     */
    v10000: new CallType(
        'AssetRegistry.register_multilocation',
        sts.struct({
            currencyId: v10000.CurrencyId,
            location: v10000.VersionedMultiLocation,
            weight: v10000.Weight,
        })
    ),
}

export const forceSetMultilocation =  {
    name: 'AssetRegistry.force_set_multilocation',
    v968: new CallType(
        'AssetRegistry.force_set_multilocation',
        sts.struct({
            currencyId: v968.CurrencyId,
            location: v968.VersionedMultiLocation,
            weight: sts.bigint(),
        })
    ),
    v970: new CallType(
        'AssetRegistry.force_set_multilocation',
        sts.struct({
            currencyId: v970.CurrencyId,
            location: v970.VersionedMultiLocation,
            weight: sts.bigint(),
        })
    ),
    v972: new CallType(
        'AssetRegistry.force_set_multilocation',
        sts.struct({
            currencyId: v972.CurrencyId,
            location: v972.VersionedMultiLocation,
            weight: v972.Weight,
        })
    ),
    v980: new CallType(
        'AssetRegistry.force_set_multilocation',
        sts.struct({
            currencyId: v980.CurrencyId,
            location: v980.VersionedMultiLocation,
            weight: v980.Weight,
        })
    ),
    /**
     * See [`Pallet::force_set_multilocation`].
     */
    v990: new CallType(
        'AssetRegistry.force_set_multilocation',
        sts.struct({
            currencyId: v990.CurrencyId,
            location: v990.VersionedMultiLocation,
            weight: v990.Weight,
        })
    ),
    /**
     * See [`Pallet::force_set_multilocation`].
     */
    v10000: new CallType(
        'AssetRegistry.force_set_multilocation',
        sts.struct({
            currencyId: v10000.CurrencyId,
            location: v10000.VersionedMultiLocation,
            weight: v10000.Weight,
        })
    ),
}

export const registerLocation =  {
    name: 'AssetRegistry.register_location',
    /**
     * See [`Pallet::register_location`].
     */
    v11000: new CallType(
        'AssetRegistry.register_location',
        sts.struct({
            currencyId: v11000.CurrencyId,
            location: v11000.VersionedLocation,
            weight: v11000.Weight,
        })
    ),
}

export const forceSetLocation =  {
    name: 'AssetRegistry.force_set_location',
    /**
     * See [`Pallet::force_set_location`].
     */
    v11000: new CallType(
        'AssetRegistry.force_set_location',
        sts.struct({
            currencyId: v11000.CurrencyId,
            location: v11000.VersionedLocation,
            weight: v11000.Weight,
        })
    ),
}

export const updateCurrencyMetadata =  {
    name: 'AssetRegistry.update_currency_metadata',
    /**
     * See [`Pallet::update_currency_metadata`].
     */
    v11000: new CallType(
        'AssetRegistry.update_currency_metadata',
        sts.struct({
            currencyId: v11000.CurrencyId,
            assetName: sts.option(() => sts.bytes()),
            assetSymbol: sts.option(() => sts.bytes()),
            assetDecimals: sts.option(() => sts.number()),
            assetMinimalBalance: sts.option(() => sts.bigint()),
        })
    ),
}
