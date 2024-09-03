import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9230 from '../v9230'
import * as v9291 from '../v9291'
import * as v1000001 from '../v1000001'

export const rebag =  {
    name: 'VoterList.rebag',
    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its score that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will always update the stored score of `dislocated` to the correct score, based on
     * `ScoreProvider`.
     * 
     * If `dislocated` does not exists, it returns an error.
     */
    v9230: new CallType(
        'VoterList.rebag',
        sts.struct({
            dislocated: v9230.AccountId32,
        })
    ),
    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its score that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will always update the stored score of `dislocated` to the correct score, based on
     * `ScoreProvider`.
     * 
     * If `dislocated` does not exists, it returns an error.
     */
    v9291: new CallType(
        'VoterList.rebag',
        sts.struct({
            dislocated: v9291.MultiAddress,
        })
    ),
}

export const putInFrontOf =  {
    name: 'VoterList.put_in_front_of',
    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `Score` than `lighter`.
     */
    v9230: new CallType(
        'VoterList.put_in_front_of',
        sts.struct({
            lighter: v9230.AccountId32,
        })
    ),
    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `Score` than `lighter`.
     */
    v9291: new CallType(
        'VoterList.put_in_front_of',
        sts.struct({
            lighter: v9291.MultiAddress,
        })
    ),
}

export const putInFrontOfOther =  {
    name: 'VoterList.put_in_front_of_other',
    /**
     * See [`Pallet::put_in_front_of_other`].
     */
    v1000001: new CallType(
        'VoterList.put_in_front_of_other',
        sts.struct({
            heavier: v1000001.MultiAddress,
            lighter: v1000001.MultiAddress,
        })
    ),
}
