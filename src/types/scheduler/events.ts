import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const scheduled =  {
    name: 'Scheduler.Scheduled',
    v0: new EventType(
        'Scheduler.Scheduled',
        sts.tuple([v0.BlockNumber, sts.number()])
    ),
    /**
     * Scheduled some task.
     */
    v9170: new EventType(
        'Scheduler.Scheduled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const canceled =  {
    name: 'Scheduler.Canceled',
    v0: new EventType(
        'Scheduler.Canceled',
        sts.tuple([v0.BlockNumber, sts.number()])
    ),
    /**
     * Canceled some task.
     */
    v9170: new EventType(
        'Scheduler.Canceled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    v0: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([v0.TaskAddress, sts.option(() => sts.bytes()), v0.DispatchResult])
    ),
    /**
     * Dispatched some task. \[task, id, result\]
     */
    v9110: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([sts.tuple(() => [sts.number(), sts.number()]), sts.option(() => sts.bytes()), sts.result(() => sts.unit(), () => v9110.DispatchError)])
    ),
    /**
     * Dispatched some task.
     */
    v9170: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v9190: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v9340: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9340.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v9420: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v9430: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
}

export const callLookupFailed =  {
    name: 'Scheduler.CallLookupFailed',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    v9170: new EventType(
        'Scheduler.CallLookupFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            error: v9170.LookupError,
        })
    ),
}

export const callUnavailable =  {
    name: 'Scheduler.CallUnavailable',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    v9340: new EventType(
        'Scheduler.CallUnavailable',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const periodicFailed =  {
    name: 'Scheduler.PeriodicFailed',
    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    v9340: new EventType(
        'Scheduler.PeriodicFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const permanentlyOverweight =  {
    name: 'Scheduler.PermanentlyOverweight',
    /**
     * The given task can never be executed since it is overweight.
     */
    v9340: new EventType(
        'Scheduler.PermanentlyOverweight',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}
