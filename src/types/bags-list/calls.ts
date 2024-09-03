import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'

export const rebag =  {
    name: 'BagsList.rebag',
    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its weight that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will never return an error; if `dislocated` does not exist or doesn't need a rebag, then
     * it is a noop and fees are still collected from `origin`.
     */
    v9140: new CallType(
        'BagsList.rebag',
        sts.struct({
            dislocated: v9140.AccountId32,
        })
    ),
}

export const putInFrontOf =  {
    name: 'BagsList.put_in_front_of',
    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `VoteWeight` than `lighter`.
     */
    v9170: new CallType(
        'BagsList.put_in_front_of',
        sts.struct({
            lighter: v9170.AccountId32,
        })
    ),
}
