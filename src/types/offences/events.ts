import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9050 from '../v9050'

export const offence =  {
    name: 'Offences.Offence',
    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false).
     */
    v0: new EventType(
        'Offences.Offence',
        sts.tuple([v0.Kind, v0.OpaqueTimeSlot, sts.boolean()])
    ),
    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
     *  \[kind, timeslot\].
     */
    v9050: new EventType(
        'Offences.Offence',
        sts.tuple([v9050.Kind, v9050.OpaqueTimeSlot])
    ),
    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    v9140: new EventType(
        'Offences.Offence',
        sts.struct({
            kind: sts.bytes(),
            timeslot: sts.bytes(),
        })
    ),
}
