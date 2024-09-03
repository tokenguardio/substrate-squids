import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v160 from '../v160'
import * as v244 from '../v244'

export const deposited =  {
    name: 'UnknownTokens.Deposited',
    /**
     * Deposit success.
     */
    v108: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: v108.V1MultiAsset,
            who: v108.V1MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    v160: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: v160.V3MultiAsset,
            who: v160.V3MultiLocation,
        })
    ),
    /**
     * Deposit success.
     */
    v244: new EventType(
        'UnknownTokens.Deposited',
        sts.struct({
            asset: v244.V4Asset,
            who: v244.V4Location,
        })
    ),
}

export const withdrawn =  {
    name: 'UnknownTokens.Withdrawn',
    /**
     * Withdraw success.
     */
    v108: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: v108.V1MultiAsset,
            who: v108.V1MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    v160: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: v160.V3MultiAsset,
            who: v160.V3MultiLocation,
        })
    ),
    /**
     * Withdraw success.
     */
    v244: new EventType(
        'UnknownTokens.Withdrawn',
        sts.struct({
            asset: v244.V4Asset,
            who: v244.V4Location,
        })
    ),
}
