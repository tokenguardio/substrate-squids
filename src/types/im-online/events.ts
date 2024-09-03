import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9140 from '../v9140'

export const heartbeatReceived =  {
    name: 'ImOnline.HeartbeatReceived',
    /**
     *  A new heartbeat was received from `AuthorityId`
     */
    v0: new EventType(
        'ImOnline.HeartbeatReceived',
        v0.AuthorityId
    ),
    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    v9140: new EventType(
        'ImOnline.HeartbeatReceived',
        sts.struct({
            authorityId: sts.bytes(),
        })
    ),
}

export const allGood =  {
    name: 'ImOnline.AllGood',
    /**
     *  At the end of the session, no offence was committed.
     */
    v0: new EventType(
        'ImOnline.AllGood',
        sts.unit()
    ),
}

export const someOffline =  {
    name: 'ImOnline.SomeOffline',
    /**
     *  At the end of the session, at least one validator was found to be offline.
     */
    v0: new EventType(
        'ImOnline.SomeOffline',
        sts.array(() => v0.IdentificationTuple)
    ),
    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    v9140: new EventType(
        'ImOnline.SomeOffline',
        sts.struct({
            offline: sts.array(() => sts.tuple(() => [v9140.AccountId32, v9140.Exposure])),
        })
    ),
}
