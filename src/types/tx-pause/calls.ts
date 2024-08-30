import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v12001 from '../v12001'

export const pause =  {
    name: 'TxPause.pause',
    /**
     * Pause a call.
     * 
     * Can only be called by [`Config::PauseOrigin`].
     * Emits an [`Event::CallPaused`] event on success.
     */
    v12001: new CallType(
        'TxPause.pause',
        sts.struct({
            fullName: sts.tuple(() => [v12001.BoundedVec, v12001.BoundedVec]),
        })
    ),
}

export const unpause =  {
    name: 'TxPause.unpause',
    /**
     * Un-pause a call.
     * 
     * Can only be called by [`Config::UnpauseOrigin`].
     * Emits an [`Event::CallUnpaused`] event on success.
     */
    v12001: new CallType(
        'TxPause.unpause',
        sts.struct({
            ident: sts.tuple(() => [v12001.BoundedVec, v12001.BoundedVec]),
        })
    ),
}
