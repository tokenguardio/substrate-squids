import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const finalHint =  {
    name: 'FinalityTracker.final_hint',
    /**
     *  Hint that the author of this block thinks the best finalized
     *  block is the given number.
     */
    v0: new CallType(
        'FinalityTracker.final_hint',
        sts.struct({
            hint: sts.number(),
        })
    ),
}
