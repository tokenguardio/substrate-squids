import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v3 from '../v3'
import * as v12 from '../v12'

export const setKeys =  {
    name: 'Session.set_keys',
    /**
     *  Sets the session key(s) of the function caller to `keys`.
     *  Allows an account to set its session key prior to becoming a validator.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     *  - DbWrites: `origin account`, `NextKeys`
     *  - DbReads per key id: `KeyOwner`
     *  - DbWrites per key id: `KeyOwner`
     *  # </weight>
     */
    v3: new CallType(
        'Session.set_keys',
        sts.struct({
            keys: v3.Keys,
            proof: sts.bytes(),
        })
    ),
    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    v12: new CallType(
        'Session.set_keys',
        sts.struct({
            keys: v12.SessionKeys,
            proof: sts.bytes(),
        })
    ),
}

export const purgeKeys =  {
    name: 'Session.purge_keys',
    /**
     *  Removes any session key(s) of the function caller.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - Complexity: `O(1)` in number of key types.
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     *  - DbWrites: `NextKeys`, `origin account`
     *  - DbWrites per key id: `KeyOwner`
     *  # </weight>
     */
    v3: new CallType(
        'Session.purge_keys',
        sts.unit()
    ),
}
