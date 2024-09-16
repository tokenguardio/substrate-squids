import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v183 from '../v183'

export const createPool =  {
    name: 'Stableswap.create_pool',
    /**
     * Create a stableswap pool with given list of asset
     * 
     * All assets must be correctly registered in `T::AssetRegistry`.
     * Note that this does not seed the pool with liquidity. Use `add_liquidity` to provide
     * initial liquidity.
     * 
     * Parameters:
     * - `origin`: Must be T::AuthorityOrigin
     * - `share_asset`: Preregistered share asset identifier
     * - `assets`: List of Asset ids
     * - `amplification`: Pool amplification
     * - `fee`: fee to be applied on trade and liquidity operations
     * 
     * Emits `PoolCreated` event if successful.
     */
    v183: new CallType(
        'Stableswap.create_pool',
        sts.struct({
            shareAsset: sts.number(),
            assets: sts.array(() => sts.number()),
            amplification: sts.number(),
            fee: v183.Permill,
        })
    ),
}

export const updatePoolFee =  {
    name: 'Stableswap.update_pool_fee',
    /**
     * Update pool's fees.
     * 
     * Updates pool's trade fee and/or withdraw fee.
     * 
     * if pool does not exist, `PoolNotFound` is returned.
     * 
     * Parameters:
     * - `origin`: Must be T::AuthorityOrigin
     * - `pool_id`: pool to update
     * - `fee`: new pool fee
     * 
     * Emits `FeeUpdated` event if successful.
     */
    v183: new CallType(
        'Stableswap.update_pool_fee',
        sts.struct({
            poolId: sts.number(),
            fee: v183.Permill,
        })
    ),
}

export const updateAmplification =  {
    name: 'Stableswap.update_amplification',
    /**
     * Update pool's amplification.
     * 
     * Parameters:
     * - `origin`: Must be T::AuthorityOrigin
     * - `pool_id`: pool to update
     * - `future_amplification`: new desired pool amplification
     * - `future_block`: future block number when the amplification is updated
     * 
     * Emits `AmplificationUpdated` event if successful.
     */
    v183: new CallType(
        'Stableswap.update_amplification',
        sts.struct({
            poolId: sts.number(),
            finalAmplification: sts.number(),
            startBlock: sts.number(),
            endBlock: sts.number(),
        })
    ),
}

export const addLiquidity =  {
    name: 'Stableswap.add_liquidity',
    /**
     * Add liquidity to selected pool.
     * 
     * First call of `add_liquidity` adds "initial liquidity" of all assets.
     * 
     * If there is liquidity already in the pool, LP can provide liquidity of any number of pool assets.
     * 
     * LP must have sufficient amount of each assets.
     * 
     * Origin is given corresponding amount of shares.
     * 
     * Parameters:
     * - `origin`: liquidity provider
     * - `pool_id`: Pool Id
     * - `assets`: asset id and liquidity amount provided
     * 
     * Emits `LiquidityAdded` event when successful.
     */
    v183: new CallType(
        'Stableswap.add_liquidity',
        sts.struct({
            poolId: sts.number(),
            assets: sts.array(() => v183.AssetAmount),
        })
    ),
}

export const addLiquidityShares =  {
    name: 'Stableswap.add_liquidity_shares',
    /**
     * Add liquidity to selected pool given exact amount of shares to receive.
     * 
     * Parameters:
     * - `origin`: liquidity provider
     * - `pool_id`: Pool Id
     * - `shares`: amount of shares to receive
     * - `asset_id`: asset id of an asset to provide as liquidity
     * - `max_asset_amount`: slippage limit. Max amount of asset.
     * 
     * Emits `LiquidityAdded` event when successful.
     */
    v183: new CallType(
        'Stableswap.add_liquidity_shares',
        sts.struct({
            poolId: sts.number(),
            shares: sts.bigint(),
            assetId: sts.number(),
            maxAssetAmount: sts.bigint(),
        })
    ),
}

export const removeLiquidityOneAsset =  {
    name: 'Stableswap.remove_liquidity_one_asset',
    /**
     * Remove liquidity from selected pool.
     * 
     * Withdraws liquidity of selected asset from a pool.
     * 
     * Share amount is burn and LP receives corresponding amount of chosen asset.
     * 
     * Withdraw fee is applied to the asset amount.
     * 
     * Parameters:
     * - `origin`: liquidity provider
     * - `pool_id`: Pool Id
     * - `asset_id`: id of asset to receive
     * - 'share_amount': amount of shares to withdraw
     * - 'min_amount_out': minimum amount to receive
     * 
     * Emits `LiquidityRemoved` event when successful.
     */
    v183: new CallType(
        'Stableswap.remove_liquidity_one_asset',
        sts.struct({
            poolId: sts.number(),
            assetId: sts.number(),
            shareAmount: sts.bigint(),
            minAmountOut: sts.bigint(),
        })
    ),
}

export const withdrawAssetAmount =  {
    name: 'Stableswap.withdraw_asset_amount',
    /**
     * Remove liquidity from selected pool by specifying exact amount of asset to receive.
     * 
     * Parameters:
     * - `origin`: liquidity provider
     * - `pool_id`: Pool Id
     * - `asset_id`: id of asset to receive
     * - 'amount': amount of asset to receive
     * - 'max_share_amount': Slippage limit. Max amount of shares to burn.
     * 
     * Emits `LiquidityRemoved` event when successful.
     */
    v183: new CallType(
        'Stableswap.withdraw_asset_amount',
        sts.struct({
            poolId: sts.number(),
            assetId: sts.number(),
            amount: sts.bigint(),
            maxShareAmount: sts.bigint(),
        })
    ),
}

export const sell =  {
    name: 'Stableswap.sell',
    /**
     * Execute a swap of `asset_in` for `asset_out` by specifying how much to put in.
     * 
     * Parameters:
     * - `origin`: origin of the caller
     * - `pool_id`: Id of a pool
     * - `asset_in`: ID of asset sold to the pool
     * - `asset_out`: ID of asset bought from the pool
     * - `amount_in`: Amount of asset to be sold to the pool
     * - `min_buy_amount`: Minimum amount required to receive
     * 
     * Emits `SellExecuted` event when successful.
     * 
     */
    v183: new CallType(
        'Stableswap.sell',
        sts.struct({
            poolId: sts.number(),
            assetIn: sts.number(),
            assetOut: sts.number(),
            amountIn: sts.bigint(),
            minBuyAmount: sts.bigint(),
        })
    ),
}

export const buy =  {
    name: 'Stableswap.buy',
    /**
     * Execute a swap of `asset_in` for `asset_out` by specifying how much to get out.
     * 
     * Parameters:
     * - `origin`:
     * - `pool_id`: Id of a pool
     * - `asset_out`: ID of asset bought from the pool
     * - `asset_in`: ID of asset sold to the pool
     * - `amount_out`: Amount of asset to receive from the pool
     * - `max_sell_amount`: Maximum amount allowed to be sold
     * 
     * Emits `BuyExecuted` event when successful.
     * 
     */
    v183: new CallType(
        'Stableswap.buy',
        sts.struct({
            poolId: sts.number(),
            assetOut: sts.number(),
            assetIn: sts.number(),
            amountOut: sts.bigint(),
            maxSellAmount: sts.bigint(),
        })
    ),
}

export const setAssetTradableState =  {
    name: 'Stableswap.set_asset_tradable_state',
    v183: new CallType(
        'Stableswap.set_asset_tradable_state',
        sts.struct({
            poolId: sts.number(),
            assetId: sts.number(),
            state: v183.Type_101,
        })
    ),
}
