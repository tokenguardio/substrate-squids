import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'

export const newSession =  {
    name: 'Session.NewSession',
    /**
     *  New session has happened. Note that the argument is the session index, not the block
     *  number as the type might suggest.
     */
    v0: new EventType(
        'Session.NewSession',
        v0.SessionIndex
    ),
    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    v9140: new EventType(
        'Session.NewSession',
        sts.struct({
            sessionIndex: sts.number(),
        })
    ),
}
