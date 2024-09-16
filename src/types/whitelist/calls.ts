import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v982 from '../v982'
import * as v990 from '../v990'
import * as v992 from '../v992'
import * as v994 from '../v994'
import * as v996 from '../v996'
import * as v998 from '../v998'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'
import * as v12001 from '../v12001'
import * as v13000 from '../v13000'

export const whitelistCall =  {
    name: 'Whitelist.whitelist_call',
    v982: new CallType(
        'Whitelist.whitelist_call',
        sts.struct({
            callHash: v982.H256,
        })
    ),
}

export const removeWhitelistedCall =  {
    name: 'Whitelist.remove_whitelisted_call',
    v982: new CallType(
        'Whitelist.remove_whitelisted_call',
        sts.struct({
            callHash: v982.H256,
        })
    ),
}

export const dispatchWhitelistedCall =  {
    name: 'Whitelist.dispatch_whitelisted_call',
    v982: new CallType(
        'Whitelist.dispatch_whitelisted_call',
        sts.struct({
            callHash: v982.H256,
            callEncodedLen: sts.number(),
            callWeightWitness: v982.Weight,
        })
    ),
}

export const dispatchWhitelistedCallWithPreimage =  {
    name: 'Whitelist.dispatch_whitelisted_call_with_preimage',
    v982: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v982.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v990: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v990.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v992: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v992.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v994: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v994.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v996: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v996.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v998: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v998.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v10000: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v10000.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v11000: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v11000.Call,
        })
    ),
    v12001: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v12001.Call,
        })
    ),
    v13000: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v13000.Call,
        })
    ),
}
