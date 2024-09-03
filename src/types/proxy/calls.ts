import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v5 from '../v5'
import * as v6 from '../v6'
import * as v7 from '../v7'
import * as v9 from '../v9'
import * as v10 from '../v10'
import * as v11 from '../v11'
import * as v13 from '../v13'
import * as v14 from '../v14'
import * as v15 from '../v15'
import * as v17 from '../v17'
import * as v18 from '../v18'
import * as v23 from '../v23'
import * as v24 from '../v24'
import * as v25 from '../v25'
import * as v26 from '../v26'
import * as v28 from '../v28'
import * as v29 from '../v29'
import * as v30 from '../v30'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9190 from '../v9190'
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9250 from '../v9250'
import * as v9270 from '../v9270'
import * as v9280 from '../v9280'
import * as v9291 from '../v9291'
import * as v9300 from '../v9300'
import * as v9340 from '../v9340'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1000001 from '../v1000001'
import * as v1001002 from '../v1001002'
import * as v1002000 from '../v1002000'
import * as v1002004 from '../v1002004'
import * as v1002005 from '../v1002005'
import * as v1002006 from '../v1002006'

export const proxy =  {
    name: 'Proxy.proxy',
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v5: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v5.AccountId,
            forceProxyType: sts.option(() => v5.ProxyType),
            call: v5.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v6: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v6.AccountId,
            forceProxyType: sts.option(() => v6.ProxyType),
            call: v6.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v7: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v7.AccountId,
            forceProxyType: sts.option(() => v7.ProxyType),
            call: v7.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v9: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9.AccountId,
            forceProxyType: sts.option(() => v9.ProxyType),
            call: v9.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v10: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v10.AccountId,
            forceProxyType: sts.option(() => v10.ProxyType),
            call: v10.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v11: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v11.AccountId,
            forceProxyType: sts.option(() => v11.ProxyType),
            call: v11.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v13: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v13.AccountId,
            forceProxyType: sts.option(() => v13.ProxyType),
            call: v13.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v14: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v14.AccountId,
            forceProxyType: sts.option(() => v14.ProxyType),
            call: v14.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v15: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v15.AccountId,
            forceProxyType: sts.option(() => v15.ProxyType),
            call: v15.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v17: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v17.AccountId,
            forceProxyType: sts.option(() => v17.ProxyType),
            call: v17.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v18: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v18.AccountId,
            forceProxyType: sts.option(() => v18.ProxyType),
            call: v18.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v23: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v23.AccountId,
            forceProxyType: sts.option(() => v23.ProxyType),
            call: v23.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v24: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v24.AccountId,
            forceProxyType: sts.option(() => v24.ProxyType),
            call: v24.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v25: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v25.AccountId,
            forceProxyType: sts.option(() => v25.ProxyType),
            call: v25.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v26: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v26.AccountId,
            forceProxyType: sts.option(() => v26.ProxyType),
            call: v26.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v28: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v28.AccountId,
            forceProxyType: sts.option(() => v28.ProxyType),
            call: v28.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v29: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v29.AccountId,
            forceProxyType: sts.option(() => v29.ProxyType),
            call: v29.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v30: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v30.AccountId,
            forceProxyType: sts.option(() => v30.ProxyType),
            call: v30.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9050: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9050.AccountId,
            forceProxyType: sts.option(() => v9050.ProxyType),
            call: v9050.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9080: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9080.AccountId,
            forceProxyType: sts.option(() => v9080.ProxyType),
            call: v9080.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9090: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9090.AccountId,
            forceProxyType: sts.option(() => v9090.ProxyType),
            call: v9090.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v9100: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9100.AccountId,
            forceProxyType: sts.option(() => v9100.ProxyType),
            call: v9100.Type_52,
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
    v9110: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9110.AccountId32,
            forceProxyType: sts.option(() => v9110.ProxyType),
            call: v9110.Call,
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
    v9140: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9140.AccountId32,
            forceProxyType: sts.option(() => v9140.ProxyType),
            call: v9140.Call,
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
    v9170: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9170.AccountId32,
            forceProxyType: sts.option(() => v9170.ProxyType),
            call: v9170.Call,
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
    v9180: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9180.AccountId32,
            forceProxyType: sts.option(() => v9180.ProxyType),
            call: v9180.Call,
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
    v9190: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9190.AccountId32,
            forceProxyType: sts.option(() => v9190.ProxyType),
            call: v9190.Call,
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
    v9220: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9220.AccountId32,
            forceProxyType: sts.option(() => v9220.ProxyType),
            call: v9220.Call,
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
    v9230: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9230.AccountId32,
            forceProxyType: sts.option(() => v9230.ProxyType),
            call: v9230.Call,
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
    v9250: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9250.AccountId32,
            forceProxyType: sts.option(() => v9250.ProxyType),
            call: v9250.Call,
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
    v9270: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9270.AccountId32,
            forceProxyType: sts.option(() => v9270.ProxyType),
            call: v9270.Call,
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
    v9280: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9280.AccountId32,
            forceProxyType: sts.option(() => v9280.ProxyType),
            call: v9280.Call,
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
    v9291: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9291.MultiAddress,
            forceProxyType: sts.option(() => v9291.ProxyType),
            call: v9291.Call,
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
    v9300: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9300.MultiAddress,
            forceProxyType: sts.option(() => v9300.ProxyType),
            call: v9300.Call,
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
    v9340: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9340.MultiAddress,
            forceProxyType: sts.option(() => v9340.ProxyType),
            call: v9340.Call,
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
    v9370: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9370.MultiAddress,
            forceProxyType: sts.option(() => v9370.ProxyType),
            call: v9370.Call,
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
    v9420: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9420.MultiAddress,
            forceProxyType: sts.option(() => v9420.ProxyType),
            call: v9420.Call,
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
    v9430: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v9430.MultiAddress,
            forceProxyType: sts.option(() => v9430.ProxyType),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1000001: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1000001.MultiAddress,
            forceProxyType: sts.option(() => v1000001.ProxyType),
            call: v1000001.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1001002: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1001002.MultiAddress,
            forceProxyType: sts.option(() => v1001002.ProxyType),
            call: v1001002.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1002000: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1002000.MultiAddress,
            forceProxyType: sts.option(() => v1002000.ProxyType),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1002004: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1002004.MultiAddress,
            forceProxyType: sts.option(() => v1002004.ProxyType),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1002005: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1002005.MultiAddress,
            forceProxyType: sts.option(() => v1002005.ProxyType),
            call: v1002005.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1002006: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1002006.MultiAddress,
            forceProxyType: sts.option(() => v1002006.ProxyType),
            call: v1002006.Call,
        })
    ),
}

export const addProxy =  {
    name: 'Proxy.add_proxy',
    /**
     *  Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to make a proxy.
     *  - `proxy_type`: The permissions allowed for this proxy account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 17.48 + .176 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    v5: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            proxy: v5.AccountId,
            proxyType: v5.ProxyType,
        })
    ),
    /**
     *  Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to make a proxy.
     *  - `proxy_type`: The permissions allowed for this proxy account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v23: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v23.AccountId,
            proxyType: v23.ProxyType,
            delay: v23.BlockNumber,
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
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9110: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v9110.AccountId32,
            proxyType: v9110.ProxyType,
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
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v9291.MultiAddress,
            proxyType: v9291.ProxyType,
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
    v9420: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: v9420.MultiAddress,
            proxyType: v9420.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxy =  {
    name: 'Proxy.remove_proxy',
    /**
     *  Unregister a proxy account for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to remove as a proxy.
     *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 14.37 + .164 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    v5: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            proxy: v5.AccountId,
            proxyType: v5.ProxyType,
        })
    ),
    /**
     *  Unregister a proxy account for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to remove as a proxy.
     *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    v23: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v23.AccountId,
            proxyType: v23.ProxyType,
            delay: v23.BlockNumber,
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
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9110: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v9110.AccountId32,
            proxyType: v9110.ProxyType,
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
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v9291.MultiAddress,
            proxyType: v9291.ProxyType,
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
    v9420: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: v9420.MultiAddress,
            proxyType: v9420.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxies =  {
    name: 'Proxy.remove_proxies',
    /**
     *  Unregister all proxy accounts for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  WARNING: This may be called on accounts created by `anonymous`, however if done, then
     *  the unreserved fees will be inaccessible. **All access to this account will be lost.**
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 13.73 + .129 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    v5: new CallType(
        'Proxy.remove_proxies',
        sts.unit()
    ),
}

export const anonymous =  {
    name: 'Proxy.anonymous',
    /**
     *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     *  initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     *  Requires a `Signed` origin.
     * 
     *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
     *  new account. This will almost always be the most permissive `ProxyType` possible to
     *  allow for maximum flexibility.
     *  - `index`: A disambiguation index, in case this is called multiple times in the same
     *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     *  want to use `0`.
     * 
     *  Fails with `Duplicate` if this has already been called in this transaction, from the
     *  same sender, with the same parameters.
     * 
     *  Fails if there are insufficient funds to pay for deposit.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 36.48 + .039 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    v5: new CallType(
        'Proxy.anonymous',
        sts.struct({
            proxyType: v5.ProxyType,
            index: sts.number(),
        })
    ),
    /**
     *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     *  initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     *  Requires a `Signed` origin.
     * 
     *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
     *  new account. This will almost always be the most permissive `ProxyType` possible to
     *  allow for maximum flexibility.
     *  - `index`: A disambiguation index, in case this is called multiple times in the same
     *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     *  want to use `0`.
     *  - `delay`: The announcement period required of the initial proxy. Will generally be
     *  zero.
     * 
     *  Fails with `Duplicate` if this has already been called in this transaction, from the
     *  same sender, with the same parameters.
     * 
     *  Fails if there are insufficient funds to pay for deposit.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     *  TODO: Might be over counting 1 read
     */
    v23: new CallType(
        'Proxy.anonymous',
        sts.struct({
            proxyType: v23.ProxyType,
            delay: v23.BlockNumber,
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
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     * TODO: Might be over counting 1 read
     */
    v9110: new CallType(
        'Proxy.anonymous',
        sts.struct({
            proxyType: v9110.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
}

export const killAnonymous =  {
    name: 'Proxy.kill_anonymous',
    /**
     *  Removes a previously spawned anonymous proxy.
     * 
     *  WARNING: **All access to this account will be lost.** Any funds held in it will be
     *  inaccessible.
     * 
     *  Requires a `Signed` origin, and the sender account must have been created by a call to
     *  `anonymous` with corresponding parameters.
     * 
     *  - `spawner`: The account that originally called `anonymous` to create this account.
     *  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     *  - `proxy_type`: The proxy type originally passed to `anonymous`.
     *  - `height`: The height of the chain when the call to `anonymous` was processed.
     *  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     *  Fails with `NoPermission` in case the caller is not a previously created anonymous
     *  account whose `anonymous` call has corresponding parameters.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 15.65 + .137 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    v5: new CallType(
        'Proxy.kill_anonymous',
        sts.struct({
            spawner: v5.AccountId,
            proxyType: v5.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
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
    v9110: new CallType(
        'Proxy.kill_anonymous',
        sts.struct({
            spawner: v9110.AccountId32,
            proxyType: v9110.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
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
    v9291: new CallType(
        'Proxy.kill_anonymous',
        sts.struct({
            spawner: v9291.MultiAddress,
            proxyType: v9291.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
}

export const announce =  {
    name: 'Proxy.announce',
    /**
     *  Publish the hash of a proxy-call that will be made in the future.
     * 
     *  This must be called some number of blocks before the corresponding `proxy` is attempted
     *  if the delay associated with the proxy relationship is greater than zero.
     * 
     *  No more than `MaxPending` announcements may be made at any one time.
     * 
     *  This will take a deposit of `AnnouncementDepositFactor` as well as
     *  `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     *  The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v23: new CallType(
        'Proxy.announce',
        sts.struct({
            real: v23.AccountId,
            callHash: v23.CallHashOf,
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
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.announce',
        sts.struct({
            real: v9291.MultiAddress,
            callHash: v9291.H256,
        })
    ),
}

export const removeAnnouncement =  {
    name: 'Proxy.remove_announcement',
    /**
     *  Remove a given announcement.
     * 
     *  May be called by a proxy account to remove a call they previously announced and return
     *  the deposit.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v23: new CallType(
        'Proxy.remove_announcement',
        sts.struct({
            real: v23.AccountId,
            callHash: v23.CallHashOf,
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
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.remove_announcement',
        sts.struct({
            real: v9291.MultiAddress,
            callHash: v9291.H256,
        })
    ),
}

export const rejectAnnouncement =  {
    name: 'Proxy.reject_announcement',
    /**
     *  Remove the given announcement of a delegate.
     * 
     *  May be called by a target (proxied) account to remove a call that one of their delegates
     *  (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `delegate`: The account that previously announced the call.
     *  - `call_hash`: The hash of the call to be made.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v23: new CallType(
        'Proxy.reject_announcement',
        sts.struct({
            delegate: v23.AccountId,
            callHash: v23.CallHashOf,
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
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    v9291: new CallType(
        'Proxy.reject_announcement',
        sts.struct({
            delegate: v9291.MultiAddress,
            callHash: v9291.H256,
        })
    ),
}

export const proxyAnnounced =  {
    name: 'Proxy.proxy_announced',
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v23: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v23.AccountId,
            real: v23.AccountId,
            forceProxyType: sts.option(() => v23.ProxyType),
            call: v23.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v24: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v24.AccountId,
            real: v24.AccountId,
            forceProxyType: sts.option(() => v24.ProxyType),
            call: v24.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v25: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v25.AccountId,
            real: v25.AccountId,
            forceProxyType: sts.option(() => v25.ProxyType),
            call: v25.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v26: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v26.AccountId,
            real: v26.AccountId,
            forceProxyType: sts.option(() => v26.ProxyType),
            call: v26.Type_44,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v28: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v28.AccountId,
            real: v28.AccountId,
            forceProxyType: sts.option(() => v28.ProxyType),
            call: v28.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v29: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v29.AccountId,
            real: v29.AccountId,
            forceProxyType: sts.option(() => v29.ProxyType),
            call: v29.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v30: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v30.AccountId,
            real: v30.AccountId,
            forceProxyType: sts.option(() => v30.ProxyType),
            call: v30.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9050: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9050.AccountId,
            real: v9050.AccountId,
            forceProxyType: sts.option(() => v9050.ProxyType),
            call: v9050.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9080: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9080.AccountId,
            real: v9080.AccountId,
            forceProxyType: sts.option(() => v9080.ProxyType),
            call: v9080.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9090: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9090.AccountId,
            real: v9090.AccountId,
            forceProxyType: sts.option(() => v9090.ProxyType),
            call: v9090.Type_52,
        })
    ),
    /**
     *  Dispatch the given `call` from an account that the sender is authorized for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    v9100: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9100.AccountId,
            real: v9100.AccountId,
            forceProxyType: sts.option(() => v9100.ProxyType),
            call: v9100.Type_52,
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
    v9110: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9110.AccountId32,
            real: v9110.AccountId32,
            forceProxyType: sts.option(() => v9110.ProxyType),
            call: v9110.Call,
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
    v9140: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9140.AccountId32,
            real: v9140.AccountId32,
            forceProxyType: sts.option(() => v9140.ProxyType),
            call: v9140.Call,
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
    v9170: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9170.AccountId32,
            real: v9170.AccountId32,
            forceProxyType: sts.option(() => v9170.ProxyType),
            call: v9170.Call,
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
    v9180: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9180.AccountId32,
            real: v9180.AccountId32,
            forceProxyType: sts.option(() => v9180.ProxyType),
            call: v9180.Call,
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
    v9190: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9190.AccountId32,
            real: v9190.AccountId32,
            forceProxyType: sts.option(() => v9190.ProxyType),
            call: v9190.Call,
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
    v9220: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9220.AccountId32,
            real: v9220.AccountId32,
            forceProxyType: sts.option(() => v9220.ProxyType),
            call: v9220.Call,
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
    v9230: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9230.AccountId32,
            real: v9230.AccountId32,
            forceProxyType: sts.option(() => v9230.ProxyType),
            call: v9230.Call,
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
    v9250: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9250.AccountId32,
            real: v9250.AccountId32,
            forceProxyType: sts.option(() => v9250.ProxyType),
            call: v9250.Call,
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
    v9270: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9270.AccountId32,
            real: v9270.AccountId32,
            forceProxyType: sts.option(() => v9270.ProxyType),
            call: v9270.Call,
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
    v9280: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9280.AccountId32,
            real: v9280.AccountId32,
            forceProxyType: sts.option(() => v9280.ProxyType),
            call: v9280.Call,
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
    v9291: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9291.MultiAddress,
            real: v9291.MultiAddress,
            forceProxyType: sts.option(() => v9291.ProxyType),
            call: v9291.Call,
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
    v9300: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9300.MultiAddress,
            real: v9300.MultiAddress,
            forceProxyType: sts.option(() => v9300.ProxyType),
            call: v9300.Call,
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
    v9340: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9340.MultiAddress,
            real: v9340.MultiAddress,
            forceProxyType: sts.option(() => v9340.ProxyType),
            call: v9340.Call,
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
    v9370: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9370.MultiAddress,
            real: v9370.MultiAddress,
            forceProxyType: sts.option(() => v9370.ProxyType),
            call: v9370.Call,
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
    v9420: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9420.MultiAddress,
            real: v9420.MultiAddress,
            forceProxyType: sts.option(() => v9420.ProxyType),
            call: v9420.Call,
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
    v9430: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v9430.MultiAddress,
            real: v9430.MultiAddress,
            forceProxyType: sts.option(() => v9430.ProxyType),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1000001: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1000001.MultiAddress,
            real: v1000001.MultiAddress,
            forceProxyType: sts.option(() => v1000001.ProxyType),
            call: v1000001.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1001002: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1001002.MultiAddress,
            real: v1001002.MultiAddress,
            forceProxyType: sts.option(() => v1001002.ProxyType),
            call: v1001002.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1002000: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1002000.MultiAddress,
            real: v1002000.MultiAddress,
            forceProxyType: sts.option(() => v1002000.ProxyType),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1002004: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1002004.MultiAddress,
            real: v1002004.MultiAddress,
            forceProxyType: sts.option(() => v1002004.ProxyType),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1002005: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1002005.MultiAddress,
            real: v1002005.MultiAddress,
            forceProxyType: sts.option(() => v1002005.ProxyType),
            call: v1002005.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1002006: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1002006.MultiAddress,
            real: v1002006.MultiAddress,
            forceProxyType: sts.option(() => v1002006.ProxyType),
            call: v1002006.Call,
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
    v9300: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: v9300.ProxyType,
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
    v9420: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: v9420.ProxyType,
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
    v9300: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: v9300.MultiAddress,
            proxyType: v9300.ProxyType,
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
    v9420: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: v9420.MultiAddress,
            proxyType: v9420.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
}
