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

export const schedule =  {
    name: 'Scheduler.schedule',
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v0: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v0.BlockNumber,
            maybePeriodic: sts.option(() => v0.Period),
            priority: v0.Priority,
            call: v0.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v5: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v5.BlockNumber,
            maybePeriodic: sts.option(() => v5.Period),
            priority: v5.Priority,
            call: v5.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v6: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v6.BlockNumber,
            maybePeriodic: sts.option(() => v6.Period),
            priority: v6.Priority,
            call: v6.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v7: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v7.BlockNumber,
            maybePeriodic: sts.option(() => v7.Period),
            priority: v7.Priority,
            call: v7.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9.BlockNumber,
            maybePeriodic: sts.option(() => v9.Period),
            priority: v9.Priority,
            call: v9.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v10: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v10.BlockNumber,
            maybePeriodic: sts.option(() => v10.Period),
            priority: v10.Priority,
            call: v10.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v11: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v11.BlockNumber,
            maybePeriodic: sts.option(() => v11.Period),
            priority: v11.Priority,
            call: v11.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v13: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v13.BlockNumber,
            maybePeriodic: sts.option(() => v13.Period),
            priority: v13.Priority,
            call: v13.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v14: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v14.BlockNumber,
            maybePeriodic: sts.option(() => v14.Period),
            priority: v14.Priority,
            call: v14.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v15: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v15.BlockNumber,
            maybePeriodic: sts.option(() => v15.Period),
            priority: v15.Priority,
            call: v15.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v17: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v17.BlockNumber,
            maybePeriodic: sts.option(() => v17.Period),
            priority: v17.Priority,
            call: v17.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v18: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v18.BlockNumber,
            maybePeriodic: sts.option(() => v18.Period),
            priority: v18.Priority,
            call: v18.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v23: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v23.BlockNumber,
            maybePeriodic: sts.option(() => v23.Period),
            priority: v23.Priority,
            call: v23.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v24: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v24.BlockNumber,
            maybePeriodic: sts.option(() => v24.Period),
            priority: v24.Priority,
            call: v24.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v25: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v25.BlockNumber,
            maybePeriodic: sts.option(() => v25.Period),
            priority: v25.Priority,
            call: v25.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v26: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v26.BlockNumber,
            maybePeriodic: sts.option(() => v26.Period),
            priority: v26.Priority,
            call: v26.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v28: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v28.BlockNumber,
            maybePeriodic: sts.option(() => v28.Period),
            priority: v28.Priority,
            call: v28.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v29: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v29.BlockNumber,
            maybePeriodic: sts.option(() => v29.Period),
            priority: v29.Priority,
            call: v29.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v30: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v30.BlockNumber,
            maybePeriodic: sts.option(() => v30.Period),
            priority: v30.Priority,
            call: v30.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9050: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9050.BlockNumber,
            maybePeriodic: sts.option(() => v9050.Period),
            priority: v9050.Priority,
            call: v9050.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9080: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9080.BlockNumber,
            maybePeriodic: sts.option(() => v9080.Period),
            priority: v9080.Priority,
            call: v9080.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9090: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9090.BlockNumber,
            maybePeriodic: sts.option(() => v9090.Period),
            priority: v9090.Priority,
            call: v9090.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9100: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9100.BlockNumber,
            maybePeriodic: sts.option(() => v9100.Period),
            priority: v9100.Priority,
            call: v9100.Type_52,
        })
    ),
    /**
     * Anonymously schedule a task.
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 22.29 + .126 * S µs
     * - DB Weight:
     *     - Read: Agenda
     *     - Write: Agenda
     * - Will use base weight of 25 which should be good for up to 30 scheduled calls
     * # </weight>
     */
    v9110: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9110.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9140: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9140.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9170: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9170.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9180: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9180.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9190: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9190.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9220: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9220.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9230: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9230.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9250: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9250.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9270: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9270.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9280: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9280.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9291: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9291.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9300: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9300.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9340: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9340.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9370: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9370.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9420: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9420.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9430: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v1000001: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1000001.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v1001002: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1001002.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v1002000: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v1002004: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v1002005: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002005.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v1002006: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002006.Call,
        })
    ),
}

export const cancel =  {
    name: 'Scheduler.cancel',
    /**
     *  Cancel an anonymously scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.15 + 2.869 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v0: new CallType(
        'Scheduler.cancel',
        sts.struct({
            when: v0.BlockNumber,
            index: sts.number(),
        })
    ),
}

export const scheduleNamed =  {
    name: 'Scheduler.schedule_named',
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v0: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v0.BlockNumber,
            maybePeriodic: sts.option(() => v0.Period),
            priority: v0.Priority,
            call: v0.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v5: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v5.BlockNumber,
            maybePeriodic: sts.option(() => v5.Period),
            priority: v5.Priority,
            call: v5.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v6: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v6.BlockNumber,
            maybePeriodic: sts.option(() => v6.Period),
            priority: v6.Priority,
            call: v6.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v7: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v7.BlockNumber,
            maybePeriodic: sts.option(() => v7.Period),
            priority: v7.Priority,
            call: v7.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9.BlockNumber,
            maybePeriodic: sts.option(() => v9.Period),
            priority: v9.Priority,
            call: v9.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v10: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v10.BlockNumber,
            maybePeriodic: sts.option(() => v10.Period),
            priority: v10.Priority,
            call: v10.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v11: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v11.BlockNumber,
            maybePeriodic: sts.option(() => v11.Period),
            priority: v11.Priority,
            call: v11.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v13: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v13.BlockNumber,
            maybePeriodic: sts.option(() => v13.Period),
            priority: v13.Priority,
            call: v13.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v14: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v14.BlockNumber,
            maybePeriodic: sts.option(() => v14.Period),
            priority: v14.Priority,
            call: v14.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v15: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v15.BlockNumber,
            maybePeriodic: sts.option(() => v15.Period),
            priority: v15.Priority,
            call: v15.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v17: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v17.BlockNumber,
            maybePeriodic: sts.option(() => v17.Period),
            priority: v17.Priority,
            call: v17.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v18: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v18.BlockNumber,
            maybePeriodic: sts.option(() => v18.Period),
            priority: v18.Priority,
            call: v18.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v23: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v23.BlockNumber,
            maybePeriodic: sts.option(() => v23.Period),
            priority: v23.Priority,
            call: v23.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v24: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v24.BlockNumber,
            maybePeriodic: sts.option(() => v24.Period),
            priority: v24.Priority,
            call: v24.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v25: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v25.BlockNumber,
            maybePeriodic: sts.option(() => v25.Period),
            priority: v25.Priority,
            call: v25.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v26: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v26.BlockNumber,
            maybePeriodic: sts.option(() => v26.Period),
            priority: v26.Priority,
            call: v26.Type_44,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v28: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v28.BlockNumber,
            maybePeriodic: sts.option(() => v28.Period),
            priority: v28.Priority,
            call: v28.Type_52,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v29: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v29.BlockNumber,
            maybePeriodic: sts.option(() => v29.Period),
            priority: v29.Priority,
            call: v29.Type_52,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v30: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v30.BlockNumber,
            maybePeriodic: sts.option(() => v30.Period),
            priority: v30.Priority,
            call: v30.Type_52,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9050: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9050.BlockNumber,
            maybePeriodic: sts.option(() => v9050.Period),
            priority: v9050.Priority,
            call: v9050.Type_52,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9080: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9080.BlockNumber,
            maybePeriodic: sts.option(() => v9080.Period),
            priority: v9080.Priority,
            call: v9080.Type_52,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9090: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9090.BlockNumber,
            maybePeriodic: sts.option(() => v9090.Period),
            priority: v9090.Priority,
            call: v9090.Type_52,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9100: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9100.BlockNumber,
            maybePeriodic: sts.option(() => v9100.Period),
            priority: v9100.Priority,
            call: v9100.Type_52,
        })
    ),
    /**
     * Schedule a named task.
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 29.6 + .159 * S µs
     * - DB Weight:
     *     - Read: Agenda, Lookup
     *     - Write: Agenda, Lookup
     * - Will use base weight of 35 which should be good for more than 30 scheduled calls
     * # </weight>
     */
    v9110: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9110.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9140: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9140.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9170: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9170.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9180: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9180.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9190: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9190.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9220: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9220.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9230: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9230.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9250: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9250.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9270: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9270.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9280: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9280.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9291: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9291.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9300: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9300.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9340: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9340.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9370: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9370.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9420: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9420.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9430: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v1000001: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1000001.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v1001002: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1001002.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v1002000: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v1002004: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v1002005: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002005.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v1002006: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002006.Call,
        })
    ),
}

export const cancelNamed =  {
    name: 'Scheduler.cancel_named',
    /**
     *  Cancel a named scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 24.91 + 2.907 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v0: new CallType(
        'Scheduler.cancel_named',
        sts.struct({
            id: sts.bytes(),
        })
    ),
}

export const scheduleAfter =  {
    name: 'Scheduler.schedule_after',
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v15: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v15.BlockNumber,
            maybePeriodic: sts.option(() => v15.Period),
            priority: v15.Priority,
            call: v15.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v17: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v17.BlockNumber,
            maybePeriodic: sts.option(() => v17.Period),
            priority: v17.Priority,
            call: v17.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v18: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v18.BlockNumber,
            maybePeriodic: sts.option(() => v18.Period),
            priority: v18.Priority,
            call: v18.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v23: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v23.BlockNumber,
            maybePeriodic: sts.option(() => v23.Period),
            priority: v23.Priority,
            call: v23.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v24: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v24.BlockNumber,
            maybePeriodic: sts.option(() => v24.Period),
            priority: v24.Priority,
            call: v24.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v25: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v25.BlockNumber,
            maybePeriodic: sts.option(() => v25.Period),
            priority: v25.Priority,
            call: v25.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v26: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v26.BlockNumber,
            maybePeriodic: sts.option(() => v26.Period),
            priority: v26.Priority,
            call: v26.Type_44,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v28: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v28.BlockNumber,
            maybePeriodic: sts.option(() => v28.Period),
            priority: v28.Priority,
            call: v28.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v29: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v29.BlockNumber,
            maybePeriodic: sts.option(() => v29.Period),
            priority: v29.Priority,
            call: v29.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v30: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v30.BlockNumber,
            maybePeriodic: sts.option(() => v30.Period),
            priority: v30.Priority,
            call: v30.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9050: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9050.BlockNumber,
            maybePeriodic: sts.option(() => v9050.Period),
            priority: v9050.Priority,
            call: v9050.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9080: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9080.BlockNumber,
            maybePeriodic: sts.option(() => v9080.Period),
            priority: v9080.Priority,
            call: v9080.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9090: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9090.BlockNumber,
            maybePeriodic: sts.option(() => v9090.Period),
            priority: v9090.Priority,
            call: v9090.Type_52,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9100: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9100.BlockNumber,
            maybePeriodic: sts.option(() => v9100.Period),
            priority: v9100.Priority,
            call: v9100.Type_52,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9110: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9110.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9140: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9140.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9170: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9170.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9180: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9180.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9190: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9190.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9220: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9220.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9230: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9230.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9250: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9250.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9270: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9270.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9280: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9280.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9291: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9291.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9300: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9300.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9340: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9340.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9370: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9370.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v9420: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9420.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v9430: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v1000001: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1000001.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v1001002: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1001002.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v1002000: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v1002004: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v1002005: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002005.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v1002006: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002006.Call,
        })
    ),
}

export const scheduleNamedAfter =  {
    name: 'Scheduler.schedule_named_after',
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v15: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v15.BlockNumber,
            maybePeriodic: sts.option(() => v15.Period),
            priority: v15.Priority,
            call: v15.Type_44,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v17: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v17.BlockNumber,
            maybePeriodic: sts.option(() => v17.Period),
            priority: v17.Priority,
            call: v17.Type_44,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v18: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v18.BlockNumber,
            maybePeriodic: sts.option(() => v18.Period),
            priority: v18.Priority,
            call: v18.Type_44,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v23: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v23.BlockNumber,
            maybePeriodic: sts.option(() => v23.Period),
            priority: v23.Priority,
            call: v23.Type_44,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v24: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v24.BlockNumber,
            maybePeriodic: sts.option(() => v24.Period),
            priority: v24.Priority,
            call: v24.Type_44,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v25: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v25.BlockNumber,
            maybePeriodic: sts.option(() => v25.Period),
            priority: v25.Priority,
            call: v25.Type_44,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v26: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v26.BlockNumber,
            maybePeriodic: sts.option(() => v26.Period),
            priority: v26.Priority,
            call: v26.Type_44,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v28: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v28.BlockNumber,
            maybePeriodic: sts.option(() => v28.Period),
            priority: v28.Priority,
            call: v28.Type_52,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v29: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v29.BlockNumber,
            maybePeriodic: sts.option(() => v29.Period),
            priority: v29.Priority,
            call: v29.Type_52,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v30: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v30.BlockNumber,
            maybePeriodic: sts.option(() => v30.Period),
            priority: v30.Priority,
            call: v30.Type_52,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v9050: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9050.BlockNumber,
            maybePeriodic: sts.option(() => v9050.Period),
            priority: v9050.Priority,
            call: v9050.Type_52,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v9080: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9080.BlockNumber,
            maybePeriodic: sts.option(() => v9080.Period),
            priority: v9080.Priority,
            call: v9080.Type_52,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`](Self::schedule_named).
     *  # </weight>
     */
    v9090: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9090.BlockNumber,
            maybePeriodic: sts.option(() => v9090.Period),
            priority: v9090.Priority,
            call: v9090.Type_52,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`](Self::schedule_named).
     *  # </weight>
     */
    v9100: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9100.BlockNumber,
            maybePeriodic: sts.option(() => v9100.Period),
            priority: v9100.Priority,
            call: v9100.Type_52,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9110: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9110.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9140: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9140.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9170: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9170.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9180: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9180.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9190: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9190.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9220: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9220.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9230: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9230.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9250: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9250.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9270: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9270.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9280: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9280.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9291: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9291.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9300: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9300.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9340: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9340.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9370: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9370.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v9420: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9420.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v9430: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v1000001: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1000001.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v1001002: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1001002.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v1002000: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v1002004: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v1002005: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002005.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v1002006: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1002006.Call,
        })
    ),
}
