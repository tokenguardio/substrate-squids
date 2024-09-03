import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1000001 from '../v1000001'
import * as v1001002 from '../v1001002'
import * as v1002000 from '../v1002000'
import * as v1002004 from '../v1002004'
import * as v1002005 from '../v1002005'
import * as v1002006 from '../v1002006'

export const whitelistCall =  {
    name: 'Whitelist.whitelist_call',
    v9420: new CallType(
        'Whitelist.whitelist_call',
        sts.struct({
            callHash: v9420.H256,
        })
    ),
}

export const removeWhitelistedCall =  {
    name: 'Whitelist.remove_whitelisted_call',
    v9420: new CallType(
        'Whitelist.remove_whitelisted_call',
        sts.struct({
            callHash: v9420.H256,
        })
    ),
}

export const dispatchWhitelistedCall =  {
    name: 'Whitelist.dispatch_whitelisted_call',
    v9420: new CallType(
        'Whitelist.dispatch_whitelisted_call',
        sts.struct({
            callHash: v9420.H256,
            callEncodedLen: sts.number(),
            callWeightWitness: v9420.Weight,
        })
    ),
}

export const dispatchWhitelistedCallWithPreimage =  {
    name: 'Whitelist.dispatch_whitelisted_call_with_preimage',
    v9420: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v9420.Call,
        })
    ),
    v9430: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v1000001: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1000001.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v1001002: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1001002.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v1002000: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v1002004: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v1002005: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1002005.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
     */
    v1002006: new CallType(
        'Whitelist.dispatch_whitelisted_call_with_preimage',
        sts.struct({
            call: v1002006.Call,
        })
    ),
}
