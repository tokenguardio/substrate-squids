import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v176 from '../v176'

export const createPool =  {
    name: 'LBP.create_pool',
    /**
     * Create a new liquidity bootstrapping pool for given asset pair.
     * 
     * For any asset pair, only one pool can exist at a time.
     * 
     * The dispatch origin for this call must be `T::CreatePoolOrigin`.
     * The pool is created with initial liquidity provided by the `pool_owner` who must have
     * sufficient funds free.
     * 
     * The pool starts uninitialized and update_pool call should be called once created to set the start block.
     * 
     * This function should be dispatched from governing entity `T::CreatePoolOrigin`
     * 
     * Parameters:
     * - `pool_owner`: the future owner of the new pool.
     * - `asset_a`: { asset_id, amount } Asset ID and initial liquidity amount.
     * - `asset_b`: { asset_id, amount } Asset ID and initial liquidity amount.
     * - `initial_weight`: Initial weight of the asset_a. 1_000_000 corresponding to 1% and 100_000_000 to 100%
     * this should be higher than final weight
     * - `final_weight`: Final weight of the asset_a. 1_000_000 corresponding to 1% and 100_000_000 to 100%
     * this should be lower than initial weight
     * - `weight_curve`: The weight function used to update the LBP weights. Currently,
     * there is only one weight function implemented, the linear function.
     * - `fee`: The trading fee charged on every trade distributed to `fee_collector`.
     * - `fee_collector`: The account to which trading fees will be transferred.
     * - `repay_target`: The amount of tokens to repay to separate fee_collector account. Until this amount is
     * reached, fee will be increased to 20% and taken from the pool
     * 
     * Emits `PoolCreated` event when successful.
     * 
     * BEWARE: We are taking the fee from the accumulated asset. If the accumulated asset is sold to the pool,
     * the fee cost is transferred to the pool. If its bought from the pool the buyer bears the cost.
     * This increases the price of the sold asset on every trade. Make sure to only run this with
     * previously illiquid assets.
     */
    v176: new CallType(
        'LBP.create_pool',
        sts.struct({
            poolOwner: v176.AccountId32,
            assetA: sts.number(),
            assetAAmount: sts.bigint(),
            assetB: sts.number(),
            assetBAmount: sts.bigint(),
            initialWeight: sts.number(),
            finalWeight: sts.number(),
            weightCurve: v176.WeightCurveType,
            fee: sts.tuple(() => [sts.number(), sts.number()]),
            feeCollector: v176.AccountId32,
            repayTarget: sts.bigint(),
        })
    ),
}

export const updatePoolData =  {
    name: 'LBP.update_pool_data',
    /**
     * Update pool data of a pool.
     * 
     * The dispatch origin for this call must be signed by the pool owner.
     * 
     * The pool can be updated only if the sale has not already started.
     * 
     * At least one of the following optional parameters has to be specified.
     * 
     * Parameters:
     * - `pool_id`: The identifier of the pool to be updated.
     * - `start`: The new starting time of the sale. This parameter is optional.
     * - `end`: The new ending time of the sale. This parameter is optional.
     * - `initial_weight`: The new initial weight. This parameter is optional.
     * - `final_weight`: The new final weight. This parameter is optional.
     * - `fee`: The new trading fee charged on every trade. This parameter is optional.
     * - `fee_collector`: The new receiver of trading fees. This parameter is optional.
     * 
     * Emits `PoolUpdated` event when successful.
     */
    v176: new CallType(
        'LBP.update_pool_data',
        sts.struct({
            poolId: v176.AccountId32,
            poolOwner: sts.option(() => v176.AccountId32),
            start: sts.option(() => sts.number()),
            end: sts.option(() => sts.number()),
            initialWeight: sts.option(() => sts.number()),
            finalWeight: sts.option(() => sts.number()),
            fee: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            feeCollector: sts.option(() => v176.AccountId32),
            repayTarget: sts.option(() => sts.bigint()),
        })
    ),
}

export const addLiquidity =  {
    name: 'LBP.add_liquidity',
    /**
     * Add liquidity to a pool.
     * 
     * Assets to add has to match the pool assets. At least one amount has to be non-zero.
     * 
     * The dispatch origin for this call must be signed by the pool owner.
     * 
     * Parameters:
     * - `pool_id`: The identifier of the pool
     * - `amount_a`: The identifier of the asset and the amount to add.
     * - `amount_b`: The identifier of the second asset and the amount to add.
     * 
     * Emits `LiquidityAdded` event when successful.
     */
    v176: new CallType(
        'LBP.add_liquidity',
        sts.struct({
            amountA: sts.tuple(() => [sts.number(), sts.bigint()]),
            amountB: sts.tuple(() => [sts.number(), sts.bigint()]),
        })
    ),
}

export const removeLiquidity =  {
    name: 'LBP.remove_liquidity',
    /**
     * Transfer all the liquidity from a pool back to the pool owner and destroy the pool.
     * The pool data are also removed from the storage.
     * 
     * The pool can't be destroyed during the sale.
     * 
     * The dispatch origin for this call must be signed by the pool owner.
     * 
     * Parameters:
     * - `amount_a`: The identifier of the asset and the amount to add.
     * 
     * Emits 'LiquidityRemoved' when successful.
     */
    v176: new CallType(
        'LBP.remove_liquidity',
        sts.struct({
            poolId: v176.AccountId32,
        })
    ),
}

export const sell =  {
    name: 'LBP.sell',
    /**
     * Trade `asset_in` for `asset_out`.
     * 
     * Executes a swap of `asset_in` for `asset_out`. Price is determined by the pool and is
     * affected by the amount and proportion of the pool assets and the weights.
     * 
     * Trading `fee` is distributed to the `fee_collector`.
     * 
     * Parameters:
     * - `asset_in`: The identifier of the asset being transferred from the account to the pool.
     * - `asset_out`: The identifier of the asset being transferred from the pool to the account.
     * - `amount`: The amount of `asset_in`
     * - `max_limit`: minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
     * 
     * Emits `SellExecuted` when successful.
     */
    v176: new CallType(
        'LBP.sell',
        sts.struct({
            assetIn: sts.number(),
            assetOut: sts.number(),
            amount: sts.bigint(),
            maxLimit: sts.bigint(),
        })
    ),
}

export const buy =  {
    name: 'LBP.buy',
    /**
     * Trade `asset_in` for `asset_out`.
     * 
     * Executes a swap of `asset_in` for `asset_out`. Price is determined by the pool and is
     * affected by the amount and the proportion of the pool assets and the weights.
     * 
     * Trading `fee` is distributed to the `fee_collector`.
     * 
     * Parameters:
     * - `asset_in`: The identifier of the asset being transferred from the account to the pool.
     * - `asset_out`: The identifier of the asset being transferred from the pool to the account.
     * - `amount`: The amount of `asset_out`.
     * - `max_limit`: maximum amount of `asset_in` to be sold in exchange for `asset_out`.
     * 
     * Emits `BuyExecuted` when successful.
     */
    v176: new CallType(
        'LBP.buy',
        sts.struct({
            assetOut: sts.number(),
            assetIn: sts.number(),
            amount: sts.bigint(),
            maxLimit: sts.bigint(),
        })
    ),
}
