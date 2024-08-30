import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'

export const indexAssigned =  {
    name: 'Indices.IndexAssigned',
    /**
     * A account index was assigned.
     */
    v932: new EventType(
        'Indices.IndexAssigned',
        sts.struct({
            who: v932.AccountId32,
            index: sts.number(),
        })
    ),
}

export const indexFreed =  {
    name: 'Indices.IndexFreed',
    /**
     * A account index has been freed up (unassigned).
     */
    v932: new EventType(
        'Indices.IndexFreed',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const indexFrozen =  {
    name: 'Indices.IndexFrozen',
    /**
     * A account index has been frozen to its current account ID.
     */
    v932: new EventType(
        'Indices.IndexFrozen',
        sts.struct({
            index: sts.number(),
            who: v932.AccountId32,
        })
    ),
}
