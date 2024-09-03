import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const tradeVolumeLimitChanged =  {
    name: 'CircuitBreaker.TradeVolumeLimitChanged',
    /**
     * Trade volume limit of an asset was changed.
     */
    v138: new EventType(
        'CircuitBreaker.TradeVolumeLimitChanged',
        sts.struct({
            assetId: sts.number(),
            tradeVolumeLimit: sts.tuple(() => [sts.number(), sts.number()]),
        })
    ),
}

export const addLiquidityLimitChanged =  {
    name: 'CircuitBreaker.AddLiquidityLimitChanged',
    /**
     * Add liquidity limit of an asset was changed.
     */
    v138: new EventType(
        'CircuitBreaker.AddLiquidityLimitChanged',
        sts.struct({
            assetId: sts.number(),
            liquidityLimit: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
        })
    ),
}

export const removeLiquidityLimitChanged =  {
    name: 'CircuitBreaker.RemoveLiquidityLimitChanged',
    /**
     * Remove liquidity limit of an asset was changed.
     */
    v138: new EventType(
        'CircuitBreaker.RemoveLiquidityLimitChanged',
        sts.struct({
            assetId: sts.number(),
            liquidityLimit: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
        })
    ),
}
