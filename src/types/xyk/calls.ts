import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const createPool =  {
    name: 'XYK.create_pool',
    /**
     * Create new pool for given asset pair.
     * 
     * Registers new pool for given asset pair (`asset a` and `asset b`) in asset registry.
     * Asset registry creates new id or returns previously created one if such pool existed before.
     * 
     * Pool is created with initial liquidity provided by `origin`.
     * Shares are issued with specified initial price and represents proportion of asset in the pool.
     * 
     * Emits `PoolCreated` event when successful.
     */
    v183: new CallType(
        'XYK.create_pool',
        sts.struct({
            assetA: sts.number(),
            amountA: sts.bigint(),
            assetB: sts.number(),
            amountB: sts.bigint(),
        })
    ),
}

export const addLiquidity =  {
    name: 'XYK.add_liquidity',
    /**
     * Add liquidity to previously created asset pair pool.
     * 
     * Shares are issued with current price.
     * 
     * Emits `LiquidityAdded` event when successful.
     */
    v183: new CallType(
        'XYK.add_liquidity',
        sts.struct({
            assetA: sts.number(),
            assetB: sts.number(),
            amountA: sts.bigint(),
            amountBMaxLimit: sts.bigint(),
        })
    ),
}

export const removeLiquidity =  {
    name: 'XYK.remove_liquidity',
    /**
     * Remove liquidity from specific liquidity pool in the form of burning shares.
     * 
     * If liquidity in the pool reaches 0, it is destroyed.
     * 
     * Emits 'LiquidityRemoved' when successful.
     * Emits 'PoolDestroyed' when pool is destroyed.
     */
    v183: new CallType(
        'XYK.remove_liquidity',
        sts.struct({
            assetA: sts.number(),
            assetB: sts.number(),
            liquidityAmount: sts.bigint(),
        })
    ),
}

export const sell =  {
    name: 'XYK.sell',
    /**
     * Trade asset in for asset out.
     * 
     * Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
     * 
     * `max_limit` - minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
     * 
     * Emits `SellExecuted` when successful.
     */
    v183: new CallType(
        'XYK.sell',
        sts.struct({
            assetIn: sts.number(),
            assetOut: sts.number(),
            amount: sts.bigint(),
            maxLimit: sts.bigint(),
            discount: sts.boolean(),
        })
    ),
}

export const buy =  {
    name: 'XYK.buy',
    /**
     * Trade asset in for asset out.
     * 
     * Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
     * 
     * `max_limit` - maximum amount of `asset_in` to be sold in exchange for `asset_out`.
     * 
     * Emits `BuyExecuted` when successful.
     */
    v183: new CallType(
        'XYK.buy',
        sts.struct({
            assetOut: sts.number(),
            assetIn: sts.number(),
            amount: sts.bigint(),
            maxLimit: sts.bigint(),
            discount: sts.boolean(),
        })
    ),
}
