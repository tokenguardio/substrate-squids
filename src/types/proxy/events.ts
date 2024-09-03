import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v5 from '../v5'
import * as v23 from '../v23'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9300 from '../v9300'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const proxyExecuted =  {
    name: 'Proxy.ProxyExecuted',
    /**
     *  A proxy was executed correctly, with the given result.
     */
    v5: new EventType(
        'Proxy.ProxyExecuted',
        v5.DispatchResult
    ),
    /**
     * A proxy was executed correctly, with the given \[result\].
     */
    v9110: new EventType(
        'Proxy.ProxyExecuted',
        sts.result(() => sts.unit(), () => v9110.DispatchError)
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9140: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9140.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9170: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9190: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9340: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9340.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9420: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v9430: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
}

export const anonymousCreated =  {
    name: 'Proxy.AnonymousCreated',
    /**
     *  Anonymous account (first parameter) has been created by new proxy (second) with given
     *  disambiguation index and proxy type.
     */
    v5: new EventType(
        'Proxy.AnonymousCreated',
        sts.tuple([v5.AccountId, v5.AccountId, v5.ProxyType, sts.number()])
    ),
    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type. \[anonymous, who, proxy_type,
     * disambiguation_index\]
     */
    v9110: new EventType(
        'Proxy.AnonymousCreated',
        sts.tuple([v9110.AccountId32, v9110.AccountId32, v9110.ProxyType, sts.number()])
    ),
    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v9140: new EventType(
        'Proxy.AnonymousCreated',
        sts.struct({
            anonymous: v9140.AccountId32,
            who: v9140.AccountId32,
            proxyType: v9140.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
}

export const announced =  {
    name: 'Proxy.Announced',
    /**
     *  An announcement was placed to make a call in the future. [real, proxy, call_hash]
     */
    v23: new EventType(
        'Proxy.Announced',
        sts.tuple([v23.AccountId, v23.AccountId, v23.Hash])
    ),
    /**
     * An announcement was placed to make a call in the future.
     */
    v9140: new EventType(
        'Proxy.Announced',
        sts.struct({
            real: v9140.AccountId32,
            proxy: v9140.AccountId32,
            callHash: v9140.H256,
        })
    ),
}

export const proxyAdded =  {
    name: 'Proxy.ProxyAdded',
    /**
     * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
     */
    v9110: new EventType(
        'Proxy.ProxyAdded',
        sts.tuple([v9110.AccountId32, v9110.AccountId32, v9110.ProxyType, sts.number()])
    ),
    /**
     * A proxy was added.
     */
    v9140: new EventType(
        'Proxy.ProxyAdded',
        sts.struct({
            delegator: v9140.AccountId32,
            delegatee: v9140.AccountId32,
            proxyType: v9140.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * A proxy was added.
     */
    v9420: new EventType(
        'Proxy.ProxyAdded',
        sts.struct({
            delegator: v9420.AccountId32,
            delegatee: v9420.AccountId32,
            proxyType: v9420.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const proxyRemoved =  {
    name: 'Proxy.ProxyRemoved',
    /**
     * A proxy was removed.
     */
    v9190: new EventType(
        'Proxy.ProxyRemoved',
        sts.struct({
            delegator: v9190.AccountId32,
            delegatee: v9190.AccountId32,
            proxyType: v9190.ProxyType,
            delay: sts.number(),
        })
    ),
    /**
     * A proxy was removed.
     */
    v9420: new EventType(
        'Proxy.ProxyRemoved',
        sts.struct({
            delegator: v9420.AccountId32,
            delegatee: v9420.AccountId32,
            proxyType: v9420.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const pureCreated =  {
    name: 'Proxy.PureCreated',
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v9300: new EventType(
        'Proxy.PureCreated',
        sts.struct({
            pure: v9300.AccountId32,
            who: v9300.AccountId32,
            proxyType: v9300.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v9420: new EventType(
        'Proxy.PureCreated',
        sts.struct({
            pure: v9420.AccountId32,
            who: v9420.AccountId32,
            proxyType: v9420.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
}
