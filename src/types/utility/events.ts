import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v104 from '../v104'
import * as v115 from '../v115'
import * as v160 from '../v160'
import * as v205 from '../v205'

export const batchInterrupted =  {
    name: 'Utility.BatchInterrupted',
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error. \[index, error\]
     */
    v100: new EventType(
        'Utility.BatchInterrupted',
        sts.tuple([sts.number(), v100.DispatchError])
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v104: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v104.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v115: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v115.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v160: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v160.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v205: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v205.DispatchError,
        })
    ),
}

export const batchCompleted =  {
    name: 'Utility.BatchCompleted',
    /**
     * Batch of dispatches completed fully with no error.
     */
    v100: new EventType(
        'Utility.BatchCompleted',
        sts.unit()
    ),
}

export const itemCompleted =  {
    name: 'Utility.ItemCompleted',
    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    v100: new EventType(
        'Utility.ItemCompleted',
        sts.unit()
    ),
}

export const dispatchedAs =  {
    name: 'Utility.DispatchedAs',
    /**
     * A call was dispatched.
     */
    v104: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v104.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v115: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v115.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v160: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v160.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v205: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v205.DispatchError),
        })
    ),
}

export const batchCompletedWithErrors =  {
    name: 'Utility.BatchCompletedWithErrors',
    /**
     * Batch of dispatches completed but has errors.
     */
    v115: new EventType(
        'Utility.BatchCompletedWithErrors',
        sts.unit()
    ),
}

export const itemFailed =  {
    name: 'Utility.ItemFailed',
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v115: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v115.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v160: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v160.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v205: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v205.DispatchError,
        })
    ),
}
