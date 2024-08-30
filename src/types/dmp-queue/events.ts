import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v952 from '../v952'
import * as v968 from '../v968'
import * as v972 from '../v972'
import * as v990 from '../v990'

export const invalidFormat =  {
    name: 'DmpQueue.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    v932: new EventType(
        'DmpQueue.InvalidFormat',
        sts.bytes()
    ),
    /**
     * Downward message is invalid XCM.
     */
    v952: new EventType(
        'DmpQueue.InvalidFormat',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * Downward message is invalid XCM.
     */
    v990: new EventType(
        'DmpQueue.InvalidFormat',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const unsupportedVersion =  {
    name: 'DmpQueue.UnsupportedVersion',
    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    v932: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.bytes()
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    v952: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    v990: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const executedDownward =  {
    name: 'DmpQueue.ExecutedDownward',
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v932: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.tuple([sts.bytes(), v932.V2Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     */
    v952: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageId: sts.bytes(),
            outcome: v952.V2Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    v972: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageId: sts.bytes(),
            outcome: v972.V3Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    v990: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            outcome: v990.V3Outcome,
        })
    ),
}

export const weightExhausted =  {
    name: 'DmpQueue.WeightExhausted',
    /**
     * The weight limit for handling downward messages was reached.
     * \[ id, remaining, required \]
     */
    v932: new EventType(
        'DmpQueue.WeightExhausted',
        sts.tuple([sts.bytes(), sts.bigint(), sts.bigint()])
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    v952: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageId: sts.bytes(),
            remainingWeight: sts.bigint(),
            requiredWeight: sts.bigint(),
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    v968: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageId: sts.bytes(),
            remainingWeight: v968.Weight,
            requiredWeight: v968.Weight,
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    v990: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            remainingWeight: v990.Weight,
            requiredWeight: v990.Weight,
        })
    ),
}

export const overweightEnqueued =  {
    name: 'DmpQueue.OverweightEnqueued',
    /**
     * Downward message is overweight and was placed in the overweight queue.
     * \[ id, index, required \]
     */
    v932: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.tuple([sts.bytes(), sts.bigint(), sts.bigint()])
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    v952: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: sts.bigint(),
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    v968: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: v968.Weight,
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    v990: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: v990.Weight,
        })
    ),
}

export const overweightServiced =  {
    name: 'DmpQueue.OverweightServiced',
    /**
     * Downward message from the overweight queue was executed.
     * \[ index, used \]
     */
    v932: new EventType(
        'DmpQueue.OverweightServiced',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
    /**
     * Downward message from the overweight queue was executed.
     */
    v952: new EventType(
        'DmpQueue.OverweightServiced',
        sts.struct({
            overweightIndex: sts.bigint(),
            weightUsed: sts.bigint(),
        })
    ),
    /**
     * Downward message from the overweight queue was executed.
     */
    v968: new EventType(
        'DmpQueue.OverweightServiced',
        sts.struct({
            overweightIndex: sts.bigint(),
            weightUsed: v968.Weight,
        })
    ),
}

export const maxMessagesExhausted =  {
    name: 'DmpQueue.MaxMessagesExhausted',
    /**
     * The maximum number of downward messages was.
     */
    v972: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * The maximum number of downward messages was reached.
     */
    v990: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const startedExport =  {
    name: 'DmpQueue.StartedExport',
    /**
     * The export of pages started.
     */
    v10000: new EventType(
        'DmpQueue.StartedExport',
        sts.unit()
    ),
}

export const exported =  {
    name: 'DmpQueue.Exported',
    /**
     * The export of a page completed.
     */
    v10000: new EventType(
        'DmpQueue.Exported',
        sts.struct({
            page: sts.number(),
        })
    ),
}

export const exportFailed =  {
    name: 'DmpQueue.ExportFailed',
    /**
     * The export of a page failed.
     * 
     * This should never be emitted.
     */
    v10000: new EventType(
        'DmpQueue.ExportFailed',
        sts.struct({
            page: sts.number(),
        })
    ),
}

export const completedExport =  {
    name: 'DmpQueue.CompletedExport',
    /**
     * The export of pages completed.
     */
    v10000: new EventType(
        'DmpQueue.CompletedExport',
        sts.unit()
    ),
}

export const startedOverweightExport =  {
    name: 'DmpQueue.StartedOverweightExport',
    /**
     * The export of overweight messages started.
     */
    v10000: new EventType(
        'DmpQueue.StartedOverweightExport',
        sts.unit()
    ),
}

export const exportedOverweight =  {
    name: 'DmpQueue.ExportedOverweight',
    /**
     * The export of an overweight message completed.
     */
    v10000: new EventType(
        'DmpQueue.ExportedOverweight',
        sts.struct({
            index: sts.bigint(),
        })
    ),
}

export const exportOverweightFailed =  {
    name: 'DmpQueue.ExportOverweightFailed',
    /**
     * The export of an overweight message failed.
     * 
     * This should never be emitted.
     */
    v10000: new EventType(
        'DmpQueue.ExportOverweightFailed',
        sts.struct({
            index: sts.bigint(),
        })
    ),
}

export const completedOverweightExport =  {
    name: 'DmpQueue.CompletedOverweightExport',
    /**
     * The export of overweight messages completed.
     */
    v10000: new EventType(
        'DmpQueue.CompletedOverweightExport',
        sts.unit()
    ),
}

export const startedCleanup =  {
    name: 'DmpQueue.StartedCleanup',
    /**
     * The cleanup of remaining pallet storage started.
     */
    v10000: new EventType(
        'DmpQueue.StartedCleanup',
        sts.unit()
    ),
}

export const cleanedSome =  {
    name: 'DmpQueue.CleanedSome',
    /**
     * Some debris was cleaned up.
     */
    v10000: new EventType(
        'DmpQueue.CleanedSome',
        sts.struct({
            keysRemoved: sts.number(),
        })
    ),
}

export const completed =  {
    name: 'DmpQueue.Completed',
    /**
     * The cleanup of remaining pallet storage completed.
     */
    v10000: new EventType(
        'DmpQueue.Completed',
        sts.struct({
            error: sts.boolean(),
        })
    ),
}
