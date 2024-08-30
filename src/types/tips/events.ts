import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v950 from '../v950'

export const newTip =  {
    name: 'Tips.NewTip',
    /**
     * A new tip suggestion has been opened.
     */
    v950: new EventType(
        'Tips.NewTip',
        sts.struct({
            tipHash: v950.H256,
        })
    ),
}

export const tipClosing =  {
    name: 'Tips.TipClosing',
    /**
     * A tip suggestion has reached threshold and is closing.
     */
    v950: new EventType(
        'Tips.TipClosing',
        sts.struct({
            tipHash: v950.H256,
        })
    ),
}

export const tipClosed =  {
    name: 'Tips.TipClosed',
    /**
     * A tip suggestion has been closed.
     */
    v950: new EventType(
        'Tips.TipClosed',
        sts.struct({
            tipHash: v950.H256,
            who: v950.AccountId32,
            payout: sts.bigint(),
        })
    ),
}

export const tipRetracted =  {
    name: 'Tips.TipRetracted',
    /**
     * A tip suggestion has been retracted.
     */
    v950: new EventType(
        'Tips.TipRetracted',
        sts.struct({
            tipHash: v950.H256,
        })
    ),
}

export const tipSlashed =  {
    name: 'Tips.TipSlashed',
    /**
     * A tip suggestion has been slashed.
     */
    v950: new EventType(
        'Tips.TipSlashed',
        sts.struct({
            tipHash: v950.H256,
            finder: v950.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}
