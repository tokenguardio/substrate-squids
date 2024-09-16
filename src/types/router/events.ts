import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const routeExecuted =  {
    name: 'Router.RouteExecuted',
    /**
     * The route with trades has been successfully executed
     */
    v160: new EventType(
        'Router.RouteExecuted',
        sts.struct({
            assetIn: sts.number(),
            assetOut: sts.number(),
            amountIn: sts.bigint(),
            amountOut: sts.bigint(),
        })
    ),
}

export const routeUpdated =  {
    name: 'Router.RouteUpdated',
    /**
     * The route with trades has been successfully executed
     */
    v193: new EventType(
        'Router.RouteUpdated',
        sts.struct({
            assetIds: sts.array(() => sts.number()),
        })
    ),
}

export const executed =  {
    name: 'Router.Executed',
    /**
     * The route with trades has been successfully executed
     */
    v207: new EventType(
        'Router.Executed',
        sts.struct({
            assetIn: sts.number(),
            assetOut: sts.number(),
            amountIn: sts.bigint(),
            amountOut: sts.bigint(),
        })
    ),
}
