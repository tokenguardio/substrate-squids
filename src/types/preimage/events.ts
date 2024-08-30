import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    v932: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: v932.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    v932: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: v932.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    v932: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: v932.H256,
        })
    ),
}
