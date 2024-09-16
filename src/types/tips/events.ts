import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'

export const newTip =  {
    name: 'Tips.NewTip',
    /**
     * A new tip suggestion has been opened.
     */
    v108: new EventType(
        'Tips.NewTip',
        sts.struct({
            tipHash: v108.H256,
        })
    ),
}

export const tipClosing =  {
    name: 'Tips.TipClosing',
    /**
     * A tip suggestion has reached threshold and is closing.
     */
    v108: new EventType(
        'Tips.TipClosing',
        sts.struct({
            tipHash: v108.H256,
        })
    ),
}

export const tipClosed =  {
    name: 'Tips.TipClosed',
    /**
     * A tip suggestion has been closed.
     */
    v108: new EventType(
        'Tips.TipClosed',
        sts.struct({
            tipHash: v108.H256,
            who: v108.AccountId32,
            payout: sts.bigint(),
        })
    ),
}

export const tipRetracted =  {
    name: 'Tips.TipRetracted',
    /**
     * A tip suggestion has been retracted.
     */
    v108: new EventType(
        'Tips.TipRetracted',
        sts.struct({
            tipHash: v108.H256,
        })
    ),
}

export const tipSlashed =  {
    name: 'Tips.TipSlashed',
    /**
     * A tip suggestion has been slashed.
     */
    v108: new EventType(
        'Tips.TipSlashed',
        sts.struct({
            tipHash: v108.H256,
            finder: v108.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
