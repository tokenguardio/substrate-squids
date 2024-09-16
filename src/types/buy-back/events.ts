import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v11000 from '../v11000'
import * as v13000 from '../v13000'

export const charged =  {
    name: 'BuyBack.Charged',
    v11000: new EventType(
        'BuyBack.Charged',
        sts.struct({
            who: v11000.AccountId32,
            assetId: v11000.CurrencyId,
            value: sts.bigint(),
        })
    ),
    /**
     * A successful call of the `Charge` extrinsic will create this event.
     */
    v13000: new EventType(
        'BuyBack.Charged',
        sts.struct({
            who: v13000.AccountId32,
            currencyId: v13000.CurrencyId,
            value: sts.bigint(),
        })
    ),
}

export const configSet =  {
    name: 'BuyBack.ConfigSet',
    v11000: new EventType(
        'BuyBack.ConfigSet',
        sts.struct({
            assetId: v11000.CurrencyId,
            info: v11000.Type_508,
        })
    ),
    /**
     * A successful call of the `SetVtoken` extrinsic will create this event.
     */
    v13000: new EventType(
        'BuyBack.ConfigSet',
        sts.struct({
            currencyId: v13000.CurrencyId,
            info: v13000.Type_557,
        })
    ),
}

export const removed =  {
    name: 'BuyBack.Removed',
    v11000: new EventType(
        'BuyBack.Removed',
        sts.struct({
            assetId: v11000.CurrencyId,
        })
    ),
    /**
     * A successful call of the `RemoveVtoken` extrinsic will create this event.
     */
    v13000: new EventType(
        'BuyBack.Removed',
        sts.struct({
            currencyId: v13000.CurrencyId,
        })
    ),
}

export const buyBackFailed =  {
    name: 'BuyBack.BuyBackFailed',
    v11000: new EventType(
        'BuyBack.BuyBackFailed',
        sts.struct({
            assetId: v11000.CurrencyId,
            blockNumber: sts.number(),
        })
    ),
    /**
     * A failed call of the `BuyBack` extrinsic will create this event.
     */
    v13000: new EventType(
        'BuyBack.BuyBackFailed',
        sts.struct({
            currencyId: v13000.CurrencyId,
            blockNumber: sts.number(),
        })
    ),
}

export const buyBackSuccess =  {
    name: 'BuyBack.BuyBackSuccess',
    v11000: new EventType(
        'BuyBack.BuyBackSuccess',
        sts.struct({
            assetId: v11000.CurrencyId,
            blockNumber: sts.number(),
        })
    ),
    /**
     * A successful call of the `BuyBack` extrinsic will create this event.
     */
    v13000: new EventType(
        'BuyBack.BuyBackSuccess',
        sts.struct({
            currencyId: v13000.CurrencyId,
            blockNumber: sts.number(),
        })
    ),
}

export const addLiquidityFailed =  {
    name: 'BuyBack.AddLiquidityFailed',
    v11000: new EventType(
        'BuyBack.AddLiquidityFailed',
        sts.struct({
            assetId: v11000.CurrencyId,
            blockNumber: sts.number(),
        })
    ),
    /**
     * A failed call of the `AddLiquidity` extrinsic will create this event.
     */
    v13000: new EventType(
        'BuyBack.AddLiquidityFailed',
        sts.struct({
            currencyId: v13000.CurrencyId,
            blockNumber: sts.number(),
        })
    ),
}

export const addLiquiditySuccess =  {
    name: 'BuyBack.AddLiquiditySuccess',
    v11000: new EventType(
        'BuyBack.AddLiquiditySuccess',
        sts.struct({
            assetId: v11000.CurrencyId,
            blockNumber: sts.number(),
        })
    ),
    /**
     * A successful call of the `AddLiquidity` extrinsic will create this event.
     */
    v13000: new EventType(
        'BuyBack.AddLiquiditySuccess',
        sts.struct({
            currencyId: v13000.CurrencyId,
            blockNumber: sts.number(),
        })
    ),
}

export const setSwapOutMinFailed =  {
    name: 'BuyBack.SetSwapOutMinFailed',
    /**
     * A failed call of the `SetSwapOutMin` extrinsic will create this event.
     */
    v13000: new EventType(
        'BuyBack.SetSwapOutMinFailed',
        sts.struct({
            currencyId: v13000.CurrencyId,
            blockNumber: sts.number(),
        })
    ),
}

export const setSwapOutMinSuccess =  {
    name: 'BuyBack.SetSwapOutMinSuccess',
    /**
     * A successful call of the `SetSwapOutMin` extrinsic will create this event.
     */
    v13000: new EventType(
        'BuyBack.SetSwapOutMinSuccess',
        sts.struct({
            currencyId: v13000.CurrencyId,
            blockNumber: sts.number(),
        })
    ),
}
