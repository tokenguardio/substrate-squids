import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v990 from '../v990'

export const setPrice =  {
    name: 'Prices.set_price',
    /**
     * See [`Pallet::set_price`].
     */
    v990: new CallType(
        'Prices.set_price',
        sts.struct({
            assetId: v990.CurrencyId,
            price: v990.FixedU128,
        })
    ),
}

export const resetPrice =  {
    name: 'Prices.reset_price',
    /**
     * See [`Pallet::reset_price`].
     */
    v990: new CallType(
        'Prices.reset_price',
        sts.struct({
            assetId: v990.CurrencyId,
        })
    ),
}

export const setForeignAsset =  {
    name: 'Prices.set_foreign_asset',
    /**
     * See [`Pallet::set_foreign_asset`].
     */
    v990: new CallType(
        'Prices.set_foreign_asset',
        sts.struct({
            foreignAssetId: v990.CurrencyId,
            assetId: v990.CurrencyId,
        })
    ),
}
