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

export const schedule =  {
    name: 'Scheduler.schedule',
    /**
     * Anonymously schedule a task.
     */
    v932: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v932.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v950: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v950.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v952: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v952.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v954: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v954.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v956: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v956.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v958: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v958.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v959: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v959.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v962: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v962.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v964: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v964.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v968: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v968.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v970: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v970.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v972: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v972.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v974: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v974.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v976: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v976.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v978: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v978.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v980: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v980.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v982: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v982.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v990: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v990.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v992: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v992.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v994: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v994.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v996: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v996.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v998: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v998.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v10000: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v10000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v11000: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v11000.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v12001: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v12001.Call,
        })
    ),
}

export const cancel =  {
    name: 'Scheduler.cancel',
    /**
     * Cancel an anonymously scheduled task.
     */
    v932: new CallType(
        'Scheduler.cancel',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const scheduleNamed =  {
    name: 'Scheduler.schedule_named',
    /**
     * Schedule a named task.
     */
    v932: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v932.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v950: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v950.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v952: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v952.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v954: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v954.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v956: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v956.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v958: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v958.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v959: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v959.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v962: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v962.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v964: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v964.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v968: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v968.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v970: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v970.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v972: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v972.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v974: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v974.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v976: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v976.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v978: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v978.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v980: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v980.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v982: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v982.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v990: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v990.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v992: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v992.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v994: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v994.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v996: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v996.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v998: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v998.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v10000: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v10000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v11000: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v11000.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v12001: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v12001.Call,
        })
    ),
}

export const cancelNamed =  {
    name: 'Scheduler.cancel_named',
    /**
     * Cancel a named scheduled task.
     */
    v932: new CallType(
        'Scheduler.cancel_named',
        sts.struct({
            id: sts.bytes(),
        })
    ),
}

export const scheduleAfter =  {
    name: 'Scheduler.schedule_after',
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v932: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v932.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v950: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v950.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v952: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v952.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v954: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v954.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v956: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v956.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v958: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v958.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v959: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v959.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v962: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v962.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v964: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v964.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v968: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v968.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v970: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v970.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v972: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v972.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v974: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v974.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v976: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v976.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v978: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v978.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v980: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v980.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v982: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v982.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v990: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v990.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v992: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v992.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v994: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v994.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v996: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v996.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v998: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v998.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v10000: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v10000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v11000: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v11000.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v12001: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v12001.Call,
        })
    ),
}

export const scheduleNamedAfter =  {
    name: 'Scheduler.schedule_named_after',
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v932: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v932.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v950: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v950.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v952: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v952.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v954: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v954.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v956: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v956.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v958: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v958.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v959: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v959.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v962: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v962.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v964: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v964.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v968: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v968.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v970: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v970.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v972: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v972.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v974: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v974.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v976: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v976.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v978: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v978.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v980: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v980.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v982: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v982.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v990: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v990.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v992: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v992.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v994: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v994.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v996: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v996.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v998: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v998.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v10000: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v10000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v11000: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v11000.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v12001: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v12001.Call,
        })
    ),
}

export const setRetry =  {
    name: 'Scheduler.set_retry',
    /**
     * Set a retry configuration for a task so that, in case its scheduled run fails, it will
     * be retried after `period` blocks, for a total amount of `retries` retries or until it
     * succeeds.
     * 
     * Tasks which need to be scheduled for a retry are still subject to weight metering and
     * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
     * normally while the task is retrying.
     * 
     * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
     * clones of the original task. Their retry configuration will be derived from the
     * original task's configuration, but will have a lower value for `remaining` than the
     * original `total_retries`.
     */
    v12001: new CallType(
        'Scheduler.set_retry',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            retries: sts.number(),
            period: sts.number(),
        })
    ),
}

export const setRetryNamed =  {
    name: 'Scheduler.set_retry_named',
    /**
     * Set a retry configuration for a named task so that, in case its scheduled run fails, it
     * will be retried after `period` blocks, for a total amount of `retries` retries or until
     * it succeeds.
     * 
     * Tasks which need to be scheduled for a retry are still subject to weight metering and
     * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
     * normally while the task is retrying.
     * 
     * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
     * clones of the original task. Their retry configuration will be derived from the
     * original task's configuration, but will have a lower value for `remaining` than the
     * original `total_retries`.
     */
    v12001: new CallType(
        'Scheduler.set_retry_named',
        sts.struct({
            id: sts.bytes(),
            retries: sts.number(),
            period: sts.number(),
        })
    ),
}

export const cancelRetry =  {
    name: 'Scheduler.cancel_retry',
    /**
     * Removes the retry configuration of a task.
     */
    v12001: new CallType(
        'Scheduler.cancel_retry',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
        })
    ),
}

export const cancelRetryNamed =  {
    name: 'Scheduler.cancel_retry_named',
    /**
     * Cancel the retry configuration of a named task.
     */
    v12001: new CallType(
        'Scheduler.cancel_retry_named',
        sts.struct({
            id: sts.bytes(),
        })
    ),
}
