import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v5 from '../v5'
import * as v6 from '../v6'
import * as v7 from '../v7'
import * as v9 from '../v9'
import * as v10 from '../v10'
import * as v11 from '../v11'
import * as v13 from '../v13'
import * as v14 from '../v14'
import * as v15 from '../v15'

export const sudo =  {
    name: 'Sudo.sudo',
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v0: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v0.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v5: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v5.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v6: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v6.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v7: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v7.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v9: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v9.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v10: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v10.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v11: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v11.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v13: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v13.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v14: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v14.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v15: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v15.Type_44,
        })
    ),
}

export const sudoUncheckedWeight =  {
    name: 'Sudo.sudo_unchecked_weight',
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v0: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v0.Type_44,
            weight: v0.Weight,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v5: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v5.Type_44,
            weight: v5.Weight,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v6: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v6.Type_44,
            weight: v6.Weight,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v7: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v7.Type_44,
            weight: v7.Weight,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v9: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v9.Type_44,
            weight: v9.Weight,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v10: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v10.Type_44,
            weight: v10.Weight,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v11: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v11.Type_44,
            weight: v11.Weight,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v13: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v13.Type_44,
            weight: v13.Weight,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v14: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v14.Type_44,
            weight: v14.Weight,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v15: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v15.Type_44,
            weight: v15.Weight,
        })
    ),
}

export const setKey =  {
    name: 'Sudo.set_key',
    /**
     *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    v0: new CallType(
        'Sudo.set_key',
        sts.struct({
            new: v0.LookupSource,
        })
    ),
}

export const sudoAs =  {
    name: 'Sudo.sudo_as',
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v0: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v0.LookupSource,
            call: v0.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v5: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v5.LookupSource,
            call: v5.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v6: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v6.LookupSource,
            call: v6.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v7: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v7.LookupSource,
            call: v7.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v9: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v9.LookupSource,
            call: v9.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v10: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v10.LookupSource,
            call: v10.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v11: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v11.LookupSource,
            call: v11.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v13: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v13.LookupSource,
            call: v13.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v14: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v14.LookupSource,
            call: v14.Type_44,
        })
    ),
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v15: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v15.LookupSource,
            call: v15.Type_44,
        })
    ),
}
