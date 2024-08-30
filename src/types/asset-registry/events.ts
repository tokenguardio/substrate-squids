import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v956 from '../v956'
import * as v958 from '../v958'
import * as v962 from '../v962'
import * as v968 from '../v968'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'

export const foreignAssetRegistered =  {
    name: 'AssetRegistry.ForeignAssetRegistered',
    /**
     * The foreign asset registered.
     */
    v952: new EventType(
        'AssetRegistry.ForeignAssetRegistered',
        sts.struct({
            assetId: sts.number(),
            assetAddress: v952.V1MultiLocation,
            metadata: v952.AssetMetadata,
        })
    ),
}

export const foreignAssetUpdated =  {
    name: 'AssetRegistry.ForeignAssetUpdated',
    /**
     * The foreign asset updated.
     */
    v952: new EventType(
        'AssetRegistry.ForeignAssetUpdated',
        sts.struct({
            assetId: sts.number(),
            assetAddress: v952.V1MultiLocation,
            metadata: v952.AssetMetadata,
        })
    ),
}

export const assetRegistered =  {
    name: 'AssetRegistry.AssetRegistered',
    /**
     * The asset registered.
     */
    v952: new EventType(
        'AssetRegistry.AssetRegistered',
        sts.struct({
            assetId: v952.AssetIds,
            metadata: v952.AssetMetadata,
        })
    ),
    /**
     * The asset registered.
     */
    v956: new EventType(
        'AssetRegistry.AssetRegistered',
        sts.struct({
            assetId: v956.AssetIds,
            metadata: v956.AssetMetadata,
        })
    ),
    /**
     * The asset registered.
     */
    v962: new EventType(
        'AssetRegistry.AssetRegistered',
        sts.struct({
            assetId: v962.AssetIds,
            metadata: v962.AssetMetadata,
        })
    ),
    /**
     * The asset registered.
     */
    v980: new EventType(
        'AssetRegistry.AssetRegistered',
        sts.struct({
            assetId: v980.AssetIds,
            metadata: v980.AssetMetadata,
        })
    ),
    /**
     * The asset registered.
     */
    v990: new EventType(
        'AssetRegistry.AssetRegistered',
        sts.struct({
            assetId: v990.AssetIds,
            metadata: v990.AssetMetadata,
        })
    ),
}

export const assetUpdated =  {
    name: 'AssetRegistry.AssetUpdated',
    /**
     * The asset updated.
     */
    v952: new EventType(
        'AssetRegistry.AssetUpdated',
        sts.struct({
            assetId: v952.AssetIds,
            metadata: v952.AssetMetadata,
        })
    ),
    /**
     * The asset updated.
     */
    v956: new EventType(
        'AssetRegistry.AssetUpdated',
        sts.struct({
            assetId: v956.AssetIds,
            metadata: v956.AssetMetadata,
        })
    ),
    /**
     * The asset updated.
     */
    v962: new EventType(
        'AssetRegistry.AssetUpdated',
        sts.struct({
            assetId: v962.AssetIds,
            metadata: v962.AssetMetadata,
        })
    ),
    /**
     * The asset updated.
     */
    v980: new EventType(
        'AssetRegistry.AssetUpdated',
        sts.struct({
            assetId: v980.AssetIds,
            metadata: v980.AssetMetadata,
        })
    ),
    /**
     * The asset updated.
     */
    v990: new EventType(
        'AssetRegistry.AssetUpdated',
        sts.struct({
            assetId: v990.AssetIds,
            metadata: v990.AssetMetadata,
        })
    ),
}

export const currencyIdRegistered =  {
    name: 'AssetRegistry.CurrencyIdRegistered',
    /**
     * The CurrencyId registered.
     */
    v958: new EventType(
        'AssetRegistry.CurrencyIdRegistered',
        sts.struct({
            currencyId: v958.CurrencyId,
            metadata: v958.AssetMetadata,
        })
    ),
    /**
     * The CurrencyId registered.
     */
    v962: new EventType(
        'AssetRegistry.CurrencyIdRegistered',
        sts.struct({
            currencyId: v962.CurrencyId,
            metadata: v962.AssetMetadata,
        })
    ),
    /**
     * The CurrencyId registered.
     */
    v980: new EventType(
        'AssetRegistry.CurrencyIdRegistered',
        sts.struct({
            currencyId: v980.CurrencyId,
            metadata: v980.AssetMetadata,
        })
    ),
    /**
     * The CurrencyId registered.
     */
    v990: new EventType(
        'AssetRegistry.CurrencyIdRegistered',
        sts.struct({
            currencyId: v990.CurrencyId,
            metadata: v990.AssetMetadata,
        })
    ),
}

export const multiLocationSet =  {
    name: 'AssetRegistry.MultiLocationSet',
    /**
     * MultiLocation Force set.
     */
    v968: new EventType(
        'AssetRegistry.MultiLocationSet',
        sts.struct({
            currencyId: v968.CurrencyId,
            location: v968.V1MultiLocation,
            weight: sts.bigint(),
        })
    ),
    /**
     * MultiLocation Force set.
     */
    v970: new EventType(
        'AssetRegistry.MultiLocationSet',
        sts.struct({
            currencyId: v970.CurrencyId,
            location: v970.V1MultiLocation,
            weight: sts.bigint(),
        })
    ),
    /**
     * MultiLocation Force set.
     */
    v972: new EventType(
        'AssetRegistry.MultiLocationSet',
        sts.struct({
            currencyId: v972.CurrencyId,
            location: v972.V3MultiLocation,
            weight: v972.Weight,
        })
    ),
    /**
     * MultiLocation Force set.
     */
    v980: new EventType(
        'AssetRegistry.MultiLocationSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            location: v980.V3MultiLocation,
            weight: v980.Weight,
        })
    ),
    /**
     * MultiLocation Force set.
     */
    v990: new EventType(
        'AssetRegistry.MultiLocationSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            location: v990.V3MultiLocation,
            weight: v990.Weight,
        })
    ),
    /**
     * MultiLocation Force set.
     */
    v10000: new EventType(
        'AssetRegistry.MultiLocationSet',
        sts.struct({
            currencyId: v10000.CurrencyId,
            location: v10000.V3MultiLocation,
            weight: v10000.Weight,
        })
    ),
}

export const locationSet =  {
    name: 'AssetRegistry.LocationSet',
    /**
     * Location Force set.
     */
    v11000: new EventType(
        'AssetRegistry.LocationSet',
        sts.struct({
            currencyId: v11000.CurrencyId,
            location: v11000.V4Location,
            weight: v11000.Weight,
        })
    ),
}

export const currencyIdUpdated =  {
    name: 'AssetRegistry.CurrencyIdUpdated',
    /**
     * The CurrencyId updated.
     */
    v11000: new EventType(
        'AssetRegistry.CurrencyIdUpdated',
        sts.struct({
            currencyId: v11000.CurrencyId,
            metadata: v11000.AssetMetadata,
        })
    ),
}
