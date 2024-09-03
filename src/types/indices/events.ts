import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v7 from '../v7'
import * as v9140 from '../v9140'

export const indexAssigned =  {
    name: 'Indices.IndexAssigned',
    /**
     *  A account index was assigned.
     */
    v0: new EventType(
        'Indices.IndexAssigned',
        sts.tuple([v0.AccountId, v0.AccountIndex])
    ),
    /**
     * A account index was assigned.
     */
    v9140: new EventType(
        'Indices.IndexAssigned',
        sts.struct({
            who: v9140.AccountId32,
            index: sts.number(),
        })
    ),
}

export const indexFreed =  {
    name: 'Indices.IndexFreed',
    /**
     *  A account index has been freed up (unassigned).
     */
    v0: new EventType(
        'Indices.IndexFreed',
        v0.AccountIndex
    ),
    /**
     * A account index has been freed up (unassigned).
     */
    v9140: new EventType(
        'Indices.IndexFreed',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const indexFrozen =  {
    name: 'Indices.IndexFrozen',
    /**
     *  A account index has been frozen to its current account ID.
     */
    v7: new EventType(
        'Indices.IndexFrozen',
        sts.tuple([v7.AccountIndex, v7.AccountId])
    ),
    /**
     * A account index has been frozen to its current account ID.
     */
    v9140: new EventType(
        'Indices.IndexFrozen',
        sts.struct({
            index: sts.number(),
            who: v9140.AccountId32,
        })
    ),
}
