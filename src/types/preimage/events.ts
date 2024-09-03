import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v108: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v108.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v108: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v108.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v108: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v108.H256,
        })
    ),
}
