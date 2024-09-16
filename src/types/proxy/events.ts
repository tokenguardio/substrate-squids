import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v950 from '../v950'
import * as v968 from '../v968'
import * as v978 from '../v978'
import * as v990 from '../v990'

export const proxyExecuted =  {
    name: 'Proxy.ProxyExecuted',
    /**
     * A proxy was executed correctly, with the given.
     */
    v932: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v932.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v950: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v950.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v968: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v968.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v978: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v978.DispatchError),
        })
    ),
    /**
     * A proxy was executed correctly, with the given.
     */
    v990: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v990.DispatchError),
        })
    ),
}

export const anonymousCreated =  {
    name: 'Proxy.AnonymousCreated',
    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    v932: new EventType(
        'Proxy.AnonymousCreated',
        sts.struct({
            anonymous: v932.AccountId32,
            who: v932.AccountId32,
            proxyType: v932.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
}

export const announced =  {
    name: 'Proxy.Announced',
    /**
     * An announcement was placed to make a call in the future.
     */
    v932: new EventType(
        'Proxy.Announced',
        sts.struct({
            real: v932.AccountId32,
            proxy: v932.AccountId32,
            callHash: v932.H256,
        })
    ),
}

export const proxyAdded =  {
    name: 'Proxy.ProxyAdded',
    /**
     * A proxy was added.
     */
    v932: new EventType(
        'Proxy.ProxyAdded',
        sts.struct({
            delegator: v932.AccountId32,
            delegatee: v932.AccountId32,
            proxyType: v932.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const proxyRemoved =  {
    name: 'Proxy.ProxyRemoved',
    /**
     * A proxy was removed.
     */
    v950: new EventType(
        'Proxy.ProxyRemoved',
        sts.struct({
            delegator: v950.AccountId32,
            delegatee: v950.AccountId32,
            proxyType: v950.ProxyType,
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
    v968: new EventType(
        'Proxy.PureCreated',
        sts.struct({
            pure: v968.AccountId32,
            who: v968.AccountId32,
            proxyType: v968.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
}
