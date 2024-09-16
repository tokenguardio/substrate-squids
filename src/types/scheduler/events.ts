import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v950 from '../v950'
import * as v968 from '../v968'
import * as v978 from '../v978'
import * as v990 from '../v990'

export const scheduled =  {
    name: 'Scheduler.Scheduled',
    /**
     * Scheduled some task.
     */
    v932: new EventType(
        'Scheduler.Scheduled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const canceled =  {
    name: 'Scheduler.Canceled',
    /**
     * Canceled some task.
     */
    v932: new EventType(
        'Scheduler.Canceled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v932: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v932.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v950: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v950.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v968: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v968.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v978: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v978.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v990: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v990.DispatchError),
        })
    ),
}

export const callLookupFailed =  {
    name: 'Scheduler.CallLookupFailed',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    v932: new EventType(
        'Scheduler.CallLookupFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            error: v932.LookupError,
        })
    ),
}

export const callUnavailable =  {
    name: 'Scheduler.CallUnavailable',
    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    v968: new EventType(
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
    v968: new EventType(
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
    v968: new EventType(
        'Scheduler.PermanentlyOverweight',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const retrySet =  {
    name: 'Scheduler.RetrySet',
    /**
     * Set a retry configuration for some task.
     */
    v12001: new EventType(
        'Scheduler.RetrySet',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            period: sts.number(),
            retries: sts.number(),
        })
    ),
}

export const retryCancelled =  {
    name: 'Scheduler.RetryCancelled',
    /**
     * Cancel a retry configuration for some task.
     */
    v12001: new EventType(
        'Scheduler.RetryCancelled',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}

export const retryFailed =  {
    name: 'Scheduler.RetryFailed',
    /**
     * The given task was unable to be retried since the agenda is full at that block or there
     * was not enough weight to reschedule it.
     */
    v12001: new EventType(
        'Scheduler.RetryFailed',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        })
    ),
}
