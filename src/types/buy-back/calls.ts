import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v11000 from '../v11000'
import * as v13000 from '../v13000'

export const setVtoken =  {
    name: 'BuyBack.set_vtoken',
    /**
     * See [`Pallet::set_vtoken`].
     */
    v11000: new CallType(
        'BuyBack.set_vtoken',
        sts.struct({
            assetId: v11000.CurrencyId,
            value: sts.bigint(),
            proportion: v11000.Permill,
            buybackDuration: sts.number(),
            addLiquidityDuration: sts.number(),
            ifAuto: sts.boolean(),
        })
    ),
    /**
     * Configuration for setting up buybacks and adding liquidity.
     */
    v13000: new CallType(
        'BuyBack.set_vtoken',
        sts.struct({
            currencyId: v13000.CurrencyId,
            minSwapValue: sts.bigint(),
            proportion: v13000.Permill,
            buybackDuration: sts.number(),
            addLiquidityDuration: sts.number(),
            ifAuto: sts.boolean(),
            destructionRatio: sts.option(() => v13000.Permill),
            bias: v13000.Permill,
        })
    ),
}

export const charge =  {
    name: 'BuyBack.charge',
    /**
     * See [`Pallet::charge`].
     */
    v11000: new CallType(
        'BuyBack.charge',
        sts.struct({
            assetId: v11000.CurrencyId,
            value: sts.bigint(),
        })
    ),
    /**
     * Charge the buyback account.
     */
    v13000: new CallType(
        'BuyBack.charge',
        sts.struct({
            currencyId: v13000.CurrencyId,
            value: sts.bigint(),
        })
    ),
}

export const removeVtoken =  {
    name: 'BuyBack.remove_vtoken',
    /**
     * See [`Pallet::remove_vtoken`].
     */
    v11000: new CallType(
        'BuyBack.remove_vtoken',
        sts.struct({
            assetId: v11000.CurrencyId,
        })
    ),
    /**
     * Remove the configuration of the buyback.
     */
    v13000: new CallType(
        'BuyBack.remove_vtoken',
        sts.struct({
            currencyId: v13000.CurrencyId,
        })
    ),
}
