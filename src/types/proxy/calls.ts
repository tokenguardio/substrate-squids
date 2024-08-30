import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v950 from '../v950'
import * as v952 from '../v952'
import * as v954 from '../v954'
import * as v956 from '../v956'
import * as v958 from '../v958'
import * as v959 from '../v959'
import * as v962 from '../v962'
import * as v964 from '../v964'
import * as v968 from '../v968'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v974 from '../v974'
import * as v976 from '../v976'
import * as v978 from '../v978'
import * as v980 from '../v980'
import * as v982 from '../v982'
import * as v990 from '../v990'
import * as v992 from '../v992'
import * as v994 from '../v994'
import * as v996 from '../v996'
import * as v998 from '../v998'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'
import * as v12001 from '../v12001'

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
    v932: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v932.AccountId32,
            forceProxyType: sts.option(() => v932.ProxyType),
            call: v932.Call,
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
    v950: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v950.AccountId32,
            forceProxyType: sts.option(() => v950.ProxyType),
            call: v950.Call,
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
    v952: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v952.AccountId32,
            forceProxyType: sts.option(() => v952.ProxyType),
            call: v952.Call,
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
    v954: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v954.AccountId32,
            forceProxyType: sts.option(() => v954.ProxyType),
            call: v954.Call,
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
    v956: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v956.AccountId32,
            forceProxyType: sts.option(() => v956.ProxyType),
            call: v956.Call,
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
    v958: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v958.AccountId32,
            forceProxyType: sts.option(() => v958.ProxyType),
            call: v958.Call,
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
    v959: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v959.AccountId32,
            forceProxyType: sts.option(() => v959.ProxyType),
            call: v959.Call,
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
    v962: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v962.AccountId32,
            forceProxyType: sts.option(() => v962.ProxyType),
            call: v962.Call,
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
    v964: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v964.AccountId32,
            forceProxyType: sts.option(() => v964.ProxyType),
            call: v964.Call,
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
     */
    v968: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v968.MultiAddress,
            forceProxyType: sts.option(() => v968.ProxyType),
            call: v968.Call,
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
     */
    v970: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v970.MultiAddress,
            forceProxyType: sts.option(() => v970.ProxyType),
            call: v970.Call,
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
    v972: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v972.MultiAddress,
            forceProxyType: sts.option(() => v972.ProxyType),
            call: v972.Call,
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
    v974: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v974.MultiAddress,
            forceProxyType: sts.option(() => v974.ProxyType),
            call: v974.Call,
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
    v976: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v976.MultiAddress,
            forceProxyType: sts.option(() => v976.ProxyType),
            call: v976.Call,
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
    v978: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v978.MultiAddress,
            forceProxyType: sts.option(() => v978.ProxyType),
            call: v978.Call,
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
    v980: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v980.MultiAddress,
            forceProxyType: sts.option(() => v980.ProxyType),
            call: v980.Call,
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
    v982: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v982.MultiAddress,
            forceProxyType: sts.option(() => v982.ProxyType),
            call: v982.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v990: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v990.MultiAddress,
            forceProxyType: sts.option(() => v990.ProxyType),
            call: v990.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v992: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v992.MultiAddress,
            forceProxyType: sts.option(() => v992.ProxyType),
            call: v992.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v994: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v994.MultiAddress,
            forceProxyType: sts.option(() => v994.ProxyType),
            call: v994.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v996: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v996.MultiAddress,
            forceProxyType: sts.option(() => v996.ProxyType),
            call: v996.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v998: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v998.MultiAddress,
            forceProxyType: sts.option(() => v998.ProxyType),
            call: v998.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v10000: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v10000.MultiAddress,
            forceProxyType: sts.option(() => v10000.ProxyType),
            call: v10000.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v11000: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v11000.MultiAddress,
            forceProxyType: sts.option(() => v11000.ProxyType),
            call: v11000.Call,
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
    v12001: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v12001.MultiAddress,
            forceProxyType: sts.option(() => v12001.ProxyType),
            call: v12001.Call,
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
    v932: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v932.AccountId32,
            proxyType: v932.ProxyType,
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
    v968: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v968.MultiAddress,
            proxyType: v968.ProxyType,
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
    v932: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v932.AccountId32,
            proxyType: v932.ProxyType,
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
    v968: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v968.MultiAddress,
            proxyType: v968.ProxyType,
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
    v932: new CallType(
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
    v932: new CallType(
        'Proxy.anonymous',
        sts.struct({
            proxyType: v932.ProxyType,
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
    v932: new CallType(
        'Proxy.kill_anonymous',
        sts.struct({
            spawner: v932.AccountId32,
            proxyType: v932.ProxyType,
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
    v932: new CallType(
        'Proxy.announce',
        sts.struct({
            real: v932.AccountId32,
            callHash: v932.H256,
        })
    ),
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
     */
    v968: new CallType(
        'Proxy.announce',
        sts.struct({
            real: v968.MultiAddress,
            callHash: v968.H256,
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
    v932: new CallType(
        'Proxy.remove_announcement',
        sts.struct({
            real: v932.AccountId32,
            callHash: v932.H256,
        })
    ),
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
     */
    v968: new CallType(
        'Proxy.remove_announcement',
        sts.struct({
            real: v968.MultiAddress,
            callHash: v968.H256,
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
    v932: new CallType(
        'Proxy.reject_announcement',
        sts.struct({
            delegate: v932.AccountId32,
            callHash: v932.H256,
        })
    ),
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
     */
    v968: new CallType(
        'Proxy.reject_announcement',
        sts.struct({
            delegate: v968.MultiAddress,
            callHash: v968.H256,
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
    v932: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v932.AccountId32,
            real: v932.AccountId32,
            forceProxyType: sts.option(() => v932.ProxyType),
            call: v932.Call,
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
    v950: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v950.AccountId32,
            real: v950.AccountId32,
            forceProxyType: sts.option(() => v950.ProxyType),
            call: v950.Call,
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
    v952: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v952.AccountId32,
            real: v952.AccountId32,
            forceProxyType: sts.option(() => v952.ProxyType),
            call: v952.Call,
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
    v954: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v954.AccountId32,
            real: v954.AccountId32,
            forceProxyType: sts.option(() => v954.ProxyType),
            call: v954.Call,
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
    v956: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v956.AccountId32,
            real: v956.AccountId32,
            forceProxyType: sts.option(() => v956.ProxyType),
            call: v956.Call,
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
    v958: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v958.AccountId32,
            real: v958.AccountId32,
            forceProxyType: sts.option(() => v958.ProxyType),
            call: v958.Call,
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
    v959: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v959.AccountId32,
            real: v959.AccountId32,
            forceProxyType: sts.option(() => v959.ProxyType),
            call: v959.Call,
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
    v962: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v962.AccountId32,
            real: v962.AccountId32,
            forceProxyType: sts.option(() => v962.ProxyType),
            call: v962.Call,
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
    v964: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v964.AccountId32,
            real: v964.AccountId32,
            forceProxyType: sts.option(() => v964.ProxyType),
            call: v964.Call,
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
    v968: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v968.MultiAddress,
            real: v968.MultiAddress,
            forceProxyType: sts.option(() => v968.ProxyType),
            call: v968.Call,
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
    v970: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v970.MultiAddress,
            real: v970.MultiAddress,
            forceProxyType: sts.option(() => v970.ProxyType),
            call: v970.Call,
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
    v972: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v972.MultiAddress,
            real: v972.MultiAddress,
            forceProxyType: sts.option(() => v972.ProxyType),
            call: v972.Call,
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
    v974: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v974.MultiAddress,
            real: v974.MultiAddress,
            forceProxyType: sts.option(() => v974.ProxyType),
            call: v974.Call,
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
    v976: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v976.MultiAddress,
            real: v976.MultiAddress,
            forceProxyType: sts.option(() => v976.ProxyType),
            call: v976.Call,
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
    v978: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v978.MultiAddress,
            real: v978.MultiAddress,
            forceProxyType: sts.option(() => v978.ProxyType),
            call: v978.Call,
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
    v980: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v980.MultiAddress,
            real: v980.MultiAddress,
            forceProxyType: sts.option(() => v980.ProxyType),
            call: v980.Call,
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
    v982: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v982.MultiAddress,
            real: v982.MultiAddress,
            forceProxyType: sts.option(() => v982.ProxyType),
            call: v982.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v990: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v990.MultiAddress,
            real: v990.MultiAddress,
            forceProxyType: sts.option(() => v990.ProxyType),
            call: v990.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v992: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v992.MultiAddress,
            real: v992.MultiAddress,
            forceProxyType: sts.option(() => v992.ProxyType),
            call: v992.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v994: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v994.MultiAddress,
            real: v994.MultiAddress,
            forceProxyType: sts.option(() => v994.ProxyType),
            call: v994.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v996: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v996.MultiAddress,
            real: v996.MultiAddress,
            forceProxyType: sts.option(() => v996.ProxyType),
            call: v996.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v998: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v998.MultiAddress,
            real: v998.MultiAddress,
            forceProxyType: sts.option(() => v998.ProxyType),
            call: v998.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v10000: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v10000.MultiAddress,
            real: v10000.MultiAddress,
            forceProxyType: sts.option(() => v10000.ProxyType),
            call: v10000.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v11000: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v11000.MultiAddress,
            real: v11000.MultiAddress,
            forceProxyType: sts.option(() => v11000.ProxyType),
            call: v11000.Call,
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
    v12001: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v12001.MultiAddress,
            real: v12001.MultiAddress,
            forceProxyType: sts.option(() => v12001.ProxyType),
            call: v12001.Call,
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
    v968: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: v968.ProxyType,
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
    v968: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: v968.MultiAddress,
            proxyType: v968.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
}
