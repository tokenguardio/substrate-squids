import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v12001 from '../v12001'

export const callPaused =  {
    name: 'TxPause.CallPaused',
    /**
     * This pallet, or a specific call is now paused.
     */
    v12001: new EventType(
        'TxPause.CallPaused',
        sts.struct({
            fullName: sts.tuple(() => [v12001.BoundedVec, v12001.BoundedVec]),
        })
    ),
}

export const callUnpaused =  {
    name: 'TxPause.CallUnpaused',
    /**
     * This pallet, or a specific call is now unpaused.
     */
    v12001: new EventType(
        'TxPause.CallUnpaused',
        sts.struct({
            fullName: sts.tuple(() => [v12001.BoundedVec, v12001.BoundedVec]),
        })
    ),
}
