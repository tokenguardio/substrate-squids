import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v115 from '../v115'
import * as v160 from '../v160'
import * as v205 from '../v205'

export const invalidFormat =  {
    name: 'DmpQueue.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    v108: new EventType(
        'DmpQueue.InvalidFormat',
        sts.bytes()
    ),
    /**
     * Downward message is invalid XCM.
     */
    v115: new EventType(
        'DmpQueue.InvalidFormat',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * Downward message is invalid XCM.
     */
    v205: new EventType(
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
    v108: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.bytes()
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    v115: new EventType(
        'DmpQueue.UnsupportedVersion',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * Downward message is unsupported version of XCM.
     */
    v205: new EventType(
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
    v108: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.tuple([sts.bytes(), v108.V2Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     */
    v115: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageId: sts.bytes(),
            outcome: v115.V2Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    v160: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageId: sts.bytes(),
            outcome: v160.V3Outcome,
        })
    ),
    /**
     * Downward message executed with the given outcome.
     */
    v205: new EventType(
        'DmpQueue.ExecutedDownward',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            outcome: v205.V3Outcome,
        })
    ),
}

export const weightExhausted =  {
    name: 'DmpQueue.WeightExhausted',
    /**
     * The weight limit for handling downward messages was reached.
     * \[ id, remaining, required \]
     */
    v108: new EventType(
        'DmpQueue.WeightExhausted',
        sts.tuple([sts.bytes(), sts.bigint(), sts.bigint()])
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    v115: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageId: sts.bytes(),
            remainingWeight: v115.Weight,
            requiredWeight: v115.Weight,
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    v160: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageId: sts.bytes(),
            remainingWeight: v160.Weight,
            requiredWeight: v160.Weight,
        })
    ),
    /**
     * The weight limit for handling downward messages was reached.
     */
    v205: new EventType(
        'DmpQueue.WeightExhausted',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            remainingWeight: v205.Weight,
            requiredWeight: v205.Weight,
        })
    ),
}

export const overweightEnqueued =  {
    name: 'DmpQueue.OverweightEnqueued',
    /**
     * Downward message is overweight and was placed in the overweight queue.
     * \[ id, index, required \]
     */
    v108: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.tuple([sts.bytes(), sts.bigint(), sts.bigint()])
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    v115: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: v115.Weight,
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    v160: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: v160.Weight,
        })
    ),
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    v205: new EventType(
        'DmpQueue.OverweightEnqueued',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            overweightIndex: sts.bigint(),
            requiredWeight: v205.Weight,
        })
    ),
}

export const overweightServiced =  {
    name: 'DmpQueue.OverweightServiced',
    /**
     * Downward message from the overweight queue was executed.
     * \[ index, used \]
     */
    v108: new EventType(
        'DmpQueue.OverweightServiced',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
    /**
     * Downward message from the overweight queue was executed.
     */
    v115: new EventType(
        'DmpQueue.OverweightServiced',
        sts.struct({
            overweightIndex: sts.bigint(),
            weightUsed: v115.Weight,
        })
    ),
    /**
     * Downward message from the overweight queue was executed.
     */
    v160: new EventType(
        'DmpQueue.OverweightServiced',
        sts.struct({
            overweightIndex: sts.bigint(),
            weightUsed: v160.Weight,
        })
    ),
}

export const maxMessagesExhausted =  {
    name: 'DmpQueue.MaxMessagesExhausted',
    /**
     * The maximum number of downward messages was.
     */
    v160: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageId: sts.bytes(),
        })
    ),
    /**
     * The maximum number of downward messages was reached.
     */
    v205: new EventType(
        'DmpQueue.MaxMessagesExhausted',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}
