import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v183 from '../v183'

export const poolCreated =  {
    name: 'Stableswap.PoolCreated',
    /**
     * A pool was created.
     */
    v183: new EventType(
        'Stableswap.PoolCreated',
        sts.struct({
            poolId: sts.number(),
            assets: sts.array(() => sts.number()),
            amplification: v183.NonZeroU16,
            fee: v183.Permill,
        })
    ),
}

export const feeUpdated =  {
    name: 'Stableswap.FeeUpdated',
    /**
     * Pool parameters has been updated.
     */
    v183: new EventType(
        'Stableswap.FeeUpdated',
        sts.struct({
            poolId: sts.number(),
            fee: v183.Permill,
        })
    ),
}

export const liquidityAdded =  {
    name: 'Stableswap.LiquidityAdded',
    /**
     * Liquidity of an asset was added to a pool.
     */
    v183: new EventType(
        'Stableswap.LiquidityAdded',
        sts.struct({
            poolId: sts.number(),
            who: v183.AccountId32,
            shares: sts.bigint(),
            assets: sts.array(() => v183.AssetAmount),
        })
    ),
}

export const liquidityRemoved =  {
    name: 'Stableswap.LiquidityRemoved',
    /**
     * Liquidity removed.
     */
    v183: new EventType(
        'Stableswap.LiquidityRemoved',
        sts.struct({
            poolId: sts.number(),
            who: v183.AccountId32,
            shares: sts.bigint(),
            amounts: sts.array(() => v183.AssetAmount),
            fee: sts.bigint(),
        })
    ),
}

export const sellExecuted =  {
    name: 'Stableswap.SellExecuted',
    /**
     * Sell trade executed. Trade fee paid in asset leaving the pool (already subtracted from amount_out).
     */
    v183: new EventType(
        'Stableswap.SellExecuted',
        sts.struct({
            who: v183.AccountId32,
            poolId: sts.number(),
            assetIn: sts.number(),
            assetOut: sts.number(),
            amountIn: sts.bigint(),
            amountOut: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
}

export const buyExecuted =  {
    name: 'Stableswap.BuyExecuted',
    /**
     * Buy trade executed. Trade fee paid in asset entering the pool (already included in amount_in).
     */
    v183: new EventType(
        'Stableswap.BuyExecuted',
        sts.struct({
            who: v183.AccountId32,
            poolId: sts.number(),
            assetIn: sts.number(),
            assetOut: sts.number(),
            amountIn: sts.bigint(),
            amountOut: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
}

export const tradableStateUpdated =  {
    name: 'Stableswap.TradableStateUpdated',
    /**
     * Aseet's tradable state has been updated.
     */
    v183: new EventType(
        'Stableswap.TradableStateUpdated',
        sts.struct({
            poolId: sts.number(),
            assetId: sts.number(),
            state: v183.Type_101,
        })
    ),
}

export const amplificationChanging =  {
    name: 'Stableswap.AmplificationChanging',
    /**
     * AAmplification of a pool has been scheduled to change.
     */
    v183: new EventType(
        'Stableswap.AmplificationChanging',
        sts.struct({
            poolId: sts.number(),
            currentAmplification: v183.NonZeroU16,
            finalAmplification: v183.NonZeroU16,
            startBlock: sts.number(),
            endBlock: sts.number(),
        })
    ),
}
