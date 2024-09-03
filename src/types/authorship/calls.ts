import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'

export const setUncles =  {
    name: 'Authorship.set_uncles',
    /**
     *  Provide a set of uncles.
     */
    v0: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v0.Header),
        })
    ),
    /**
     * Provide a set of uncles.
     */
    v9110: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v9110.Header),
        })
    ),
    /**
     * Provide a set of uncles.
     */
    v9140: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v9140.Header),
        })
    ),
}
