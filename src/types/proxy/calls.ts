import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v115 from '../v115'
import * as v125 from '../v125'
import * as v138 from '../v138'
import * as v148 from '../v148'
import * as v160 from '../v160'
import * as v170 from '../v170'
import * as v176 from '../v176'
import * as v183 from '../v183'
import * as v185 from '../v185'
import * as v193 from '../v193'
import * as v201 from '../v201'
import * as v205 from '../v205'
import * as v222 from '../v222'
import * as v224 from '../v224'
import * as v227 from '../v227'
import * as v234 from '../v234'
import * as v244 from '../v244'
import * as v253 from '../v253'

export const proxy =  {
    name: 'Proxy.proxy',
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v108: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v108.AccountId32,
            forceProxyType: sts.option(() => v108.ProxyType),
            call: v108.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v115: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v115.AccountId32,
            forceProxyType: sts.option(() => v115.ProxyType),
            call: v115.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v125: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v125.AccountId32,
            forceProxyType: sts.option(() => v125.ProxyType),
            call: v125.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v138: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v138.AccountId32,
            forceProxyType: sts.option(() => v138.ProxyType),
            call: v138.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v148: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v148.AccountId32,
            forceProxyType: sts.option(() => v148.ProxyType),
            call: v148.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v160: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v160.AccountId32,
            forceProxyType: sts.option(() => v160.ProxyType),
            call: v160.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v170: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v170.AccountId32,
            forceProxyType: sts.option(() => v170.ProxyType),
            call: v170.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v176: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v176.AccountId32,
            forceProxyType: sts.option(() => v176.ProxyType),
            call: v176.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v183: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v183.AccountId32,
            forceProxyType: sts.option(() => v183.ProxyType),
            call: v183.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v185: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v185.AccountId32,
            forceProxyType: sts.option(() => v185.ProxyType),
            call: v185.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v193: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v193.AccountId32,
            forceProxyType: sts.option(() => v193.ProxyType),
            call: v193.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v201: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v201.AccountId32,
            forceProxyType: sts.option(() => v201.ProxyType),
            call: v201.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v205: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v205.AccountId32,
            forceProxyType: sts.option(() => v205.ProxyType),
            call: v205.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v222: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v222.AccountId32,
            forceProxyType: sts.option(() => v222.ProxyType),
            call: v222.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v224: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v224.AccountId32,
            forceProxyType: sts.option(() => v224.ProxyType),
            call: v224.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v227: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v227.AccountId32,
            forceProxyType: sts.option(() => v227.ProxyType),
            call: v227.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v234: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v234.AccountId32,
            forceProxyType: sts.option(() => v234.ProxyType),
            call: v234.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v244: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v244.AccountId32,
            forceProxyType: sts.option(() => v244.ProxyType),
            call: v244.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v253: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v253.AccountId32,
            forceProxyType: sts.option(() => v253.ProxyType),
            call: v253.Call,
        })
    ),
}

export const addProxy =  {
    name: 'Proxy.add_proxy',
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v108: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v108.AccountId32,
            proxyType: v108.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    v170: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v170.AccountId32,
            proxyType: v170.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxy =  {
    name: 'Proxy.remove_proxy',
    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v108: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v108.AccountId32,
            proxyType: v108.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    v170: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v170.AccountId32,
            proxyType: v170.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxies =  {
    name: 'Proxy.remove_proxies',
    /**
     * Unregister all proxy accounts for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * WARNING: This may be called on accounts created by `anonymous`, however if done, then
     * the unreserved fees will be inaccessible. **All access to this account will be lost.**
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v108: new CallType(
        'Proxy.remove_proxies',
        sts.unit()
    ),
}

export const anonymous =  {
    name: 'Proxy.anonymous',
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     * TODO: Might be over counting 1 read
     */
    v108: new CallType(
        'Proxy.anonymous',
        sts.struct({
            proxyType: v108.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
}

export const killAnonymous =  {
    name: 'Proxy.kill_anonymous',
    /**
     * Removes a previously spawned anonymous proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `anonymous` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `anonymous` to create this account.
     * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `anonymous`.
     * - `height`: The height of the chain when the call to `anonymous` was processed.
     * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created anonymous
     * account whose `anonymous` call has corresponding parameters.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v108: new CallType(
        'Proxy.kill_anonymous',
        sts.struct({
            spawner: v108.AccountId32,
            proxyType: v108.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
}

export const announce =  {
    name: 'Proxy.announce',
    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v108: new CallType(
        'Proxy.announce',
        sts.struct({
            real: v108.AccountId32,
            callHash: v108.H256,
        })
    ),
}

export const removeAnnouncement =  {
    name: 'Proxy.remove_announcement',
    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v108: new CallType(
        'Proxy.remove_announcement',
        sts.struct({
            real: v108.AccountId32,
            callHash: v108.H256,
        })
    ),
}

export const rejectAnnouncement =  {
    name: 'Proxy.reject_announcement',
    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v108: new CallType(
        'Proxy.reject_announcement',
        sts.struct({
            delegate: v108.AccountId32,
            callHash: v108.H256,
        })
    ),
}

export const proxyAnnounced =  {
    name: 'Proxy.proxy_announced',
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v108: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v108.AccountId32,
            real: v108.AccountId32,
            forceProxyType: sts.option(() => v108.ProxyType),
            call: v108.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v115: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v115.AccountId32,
            real: v115.AccountId32,
            forceProxyType: sts.option(() => v115.ProxyType),
            call: v115.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v125: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v125.AccountId32,
            real: v125.AccountId32,
            forceProxyType: sts.option(() => v125.ProxyType),
            call: v125.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v138: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v138.AccountId32,
            real: v138.AccountId32,
            forceProxyType: sts.option(() => v138.ProxyType),
            call: v138.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v148: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v148.AccountId32,
            real: v148.AccountId32,
            forceProxyType: sts.option(() => v148.ProxyType),
            call: v148.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v160: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v160.AccountId32,
            real: v160.AccountId32,
            forceProxyType: sts.option(() => v160.ProxyType),
            call: v160.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v170: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v170.AccountId32,
            real: v170.AccountId32,
            forceProxyType: sts.option(() => v170.ProxyType),
            call: v170.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v176: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v176.AccountId32,
            real: v176.AccountId32,
            forceProxyType: sts.option(() => v176.ProxyType),
            call: v176.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v183: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v183.AccountId32,
            real: v183.AccountId32,
            forceProxyType: sts.option(() => v183.ProxyType),
            call: v183.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v185: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v185.AccountId32,
            real: v185.AccountId32,
            forceProxyType: sts.option(() => v185.ProxyType),
            call: v185.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v193: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v193.AccountId32,
            real: v193.AccountId32,
            forceProxyType: sts.option(() => v193.ProxyType),
            call: v193.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v201: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v201.AccountId32,
            real: v201.AccountId32,
            forceProxyType: sts.option(() => v201.ProxyType),
            call: v201.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v205: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v205.AccountId32,
            real: v205.AccountId32,
            forceProxyType: sts.option(() => v205.ProxyType),
            call: v205.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v222: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v222.AccountId32,
            real: v222.AccountId32,
            forceProxyType: sts.option(() => v222.ProxyType),
            call: v222.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v224: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v224.AccountId32,
            real: v224.AccountId32,
            forceProxyType: sts.option(() => v224.ProxyType),
            call: v224.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v227: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v227.AccountId32,
            real: v227.AccountId32,
            forceProxyType: sts.option(() => v227.ProxyType),
            call: v227.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v234: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v234.AccountId32,
            real: v234.AccountId32,
            forceProxyType: sts.option(() => v234.ProxyType),
            call: v234.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v244: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v244.AccountId32,
            real: v244.AccountId32,
            forceProxyType: sts.option(() => v244.ProxyType),
            call: v244.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v253: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v253.AccountId32,
            real: v253.AccountId32,
            forceProxyType: sts.option(() => v253.ProxyType),
            call: v253.Call,
        })
    ),
}

export const createPure =  {
    name: 'Proxy.create_pure',
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     */
    v160: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: v160.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     */
    v170: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: v170.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
}

export const killPure =  {
    name: 'Proxy.kill_pure',
    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    v160: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: v160.AccountId32,
            proxyType: v160.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    v170: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: v170.AccountId32,
            proxyType: v170.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
}
