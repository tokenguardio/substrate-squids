import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const setTradeVolumeLimit =  {
    name: 'CircuitBreaker.set_trade_volume_limit',
    /**
     * Set trade volume limit for an asset.
     * 
     * Parameters:
     * - `origin`: The dispatch origin for this call. Must be `TechnicalOrigin`
     * - `asset_id`: The identifier of an asset
     * - `trade_volume_limit`: New trade volume limit represented as a percentage
     * 
     * Emits `TradeVolumeLimitChanged` event when successful.
     * 
     */
    v138: new CallType(
        'CircuitBreaker.set_trade_volume_limit',
        sts.struct({
            assetId: sts.number(),
            tradeVolumeLimit: sts.tuple(() => [sts.number(), sts.number()]),
        })
    ),
}

export const setAddLiquidityLimit =  {
    name: 'CircuitBreaker.set_add_liquidity_limit',
    /**
     * Set add liquidity limit for an asset.
     * 
     * Parameters:
     * - `origin`: The dispatch origin for this call. Must be `TechnicalOrigin`
     * - `asset_id`: The identifier of an asset
     * - `liquidity_limit`: Optional add liquidity limit represented as a percentage
     * 
     * Emits `AddLiquidityLimitChanged` event when successful.
     * 
     */
    v138: new CallType(
        'CircuitBreaker.set_add_liquidity_limit',
        sts.struct({
            assetId: sts.number(),
            liquidityLimit: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
        })
    ),
}

export const setRemoveLiquidityLimit =  {
    name: 'CircuitBreaker.set_remove_liquidity_limit',
    /**
     * Set remove liquidity limit for an asset.
     * 
     * Parameters:
     * - `origin`: The dispatch origin for this call. Must be `TechnicalOrigin`
     * - `asset_id`: The identifier of an asset
     * - `liquidity_limit`: Optional remove liquidity limit represented as a percentage
     * 
     * Emits `RemoveLiquidityLimitChanged` event when successful.
     * 
     */
    v138: new CallType(
        'CircuitBreaker.set_remove_liquidity_limit',
        sts.struct({
            assetId: sts.number(),
            liquidityLimit: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
        })
    ),
}
