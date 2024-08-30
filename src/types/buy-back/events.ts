import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v11000 from '../v11000'

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
}

export const removed =  {
    name: 'BuyBack.Removed',
    v11000: new EventType(
        'BuyBack.Removed',
        sts.struct({
            assetId: v11000.CurrencyId,
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
}
