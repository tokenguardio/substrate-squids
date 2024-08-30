import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'

export const deposited =  {
    name: 'UnknownTokens.Deposited',
    /**
     * Deposit success.
     */
    v952: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: v952.V1MultiAsset,
            who: v952.V1MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    v970: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: v970.V1MultiAsset,
            who: v970.V1MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    v972: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: v972.V3MultiAsset,
            who: v972.V3MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    v10000: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: v10000.V3MultiAsset,
            who: v10000.V3MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    v11000: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: v11000.V4Asset,
            who: v11000.V4Location,
        })
    ),
}

export const withdrawn =  {
    name: 'UnknownTokens.Withdrawn',
    /**
     * Withdraw success.
     */
    v952: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: v952.V1MultiAsset,
            who: v952.V1MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    v970: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: v970.V1MultiAsset,
            who: v970.V1MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    v972: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: v972.V3MultiAsset,
            who: v972.V3MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    v10000: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: v10000.V3MultiAsset,
            who: v10000.V3MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    v11000: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: v11000.V4Asset,
            who: v11000.V4Location,
        })
    ),
}
