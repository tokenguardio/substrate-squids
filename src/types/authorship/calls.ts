import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v104 from '../v104'

export const setUncles =  {
    name: 'Authorship.set_uncles',
    /**
     * Provide a set of uncles.
     */
    v100: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v100.Header),
        })
    ),
    /**
     * Provide a set of uncles.
     */
    v104: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v104.Header),
        })
    ),
}
