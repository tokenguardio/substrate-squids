import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v160 from '../v160'
import * as v193 from '../v193'
import * as v224 from '../v224'

export const sell =  {
    name: 'Router.sell',
    /**
     * Executes a sell with a series of trades specified in the route.
     * The price for each trade is determined by the corresponding AMM.
     * 
     * - `origin`: The executor of the trade
     * - `asset_in`: The identifier of the asset to sell
     * - `asset_out`: The identifier of the asset to receive
     * - `amount_in`: The amount of `asset_in` to sell
     * - `min_amount_out`: The minimum amount of `asset_out` to receive.
     * - `route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
     * 
     * Emits `RouteExecuted` when successful.
     */
    v160: new CallType(
        'Router.sell',
        sts.struct({
            assetIn: sts.number(),
            assetOut: sts.number(),
            amountIn: sts.bigint(),
            minAmountOut: sts.bigint(),
            route: sts.array(() => v160.Trade),
        })
    ),
}

export const buy =  {
    name: 'Router.buy',
    /**
     * Executes a buy with a series of trades specified in the route.
     * The price for each trade is determined by the corresponding AMM.
     * 
     * - `origin`: The executor of the trade
     * - `asset_in`: The identifier of the asset to be swapped to buy `asset_out`
     * - `asset_out`: The identifier of the asset to buy
     * - `amount_out`: The amount of `asset_out` to buy
     * - `max_amount_in`: The max amount of `asset_in` to spend on the buy.
     * - `route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
     * 
     * Emits `RouteExecuted` when successful.
     */
    v160: new CallType(
        'Router.buy',
        sts.struct({
            assetIn: sts.number(),
            assetOut: sts.number(),
            amountOut: sts.bigint(),
            maxAmountIn: sts.bigint(),
            route: sts.array(() => v160.Trade),
        })
    ),
}

export const setRoute =  {
    name: 'Router.set_route',
    /**
     * Sets the on-chain route for a given asset pair.
     * 
     * The new route is validated by being executed in a dry-run mode
     * 
     * If there is no route explicitly set for an asset pair, then we use the omnipool route as default.
     * 
     * When a new route is set, we compare it to the existing (or default) route.
     * The comparison happens by calculating sell amount_outs for the routes, but also for the inversed routes.
     * 
     * The route is stored in an ordered manner, based on the oder of the ids in the asset pair.
     * 
     * If the route is set successfully, then the fee is payed back.
     * 
     * - `origin`: The origin of the route setter
     * - `asset_pair`: The identifier of the asset-pair for which the route is set
     * - `new_route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
     * 
     * Emits `RouteUpdated` when successful.
     * 
     * Fails with `RouteUpdateIsNotSuccessful` error when failed to set the route
     * 
     */
    v193: new CallType(
        'Router.set_route',
        sts.struct({
            assetPair: v193.AssetPair,
            newRoute: sts.array(() => v193.Trade),
        })
    ),
}

export const forceInsertRoute =  {
    name: 'Router.force_insert_route',
    /**
     * See [`Pallet::force_insert_route`].
     */
    v224: new CallType(
        'Router.force_insert_route',
        sts.struct({
            assetPair: v224.AssetPair,
            newRoute: sts.array(() => v224.Trade),
        })
    ),
}
