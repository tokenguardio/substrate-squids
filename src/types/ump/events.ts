import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v9291 from '../v9291'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'

export const invalidFormat =  {
    name: 'Ump.InvalidFormat',
    /**
     * Upward message is invalid XCM.
     * \[ id \]
     */
    v9110: new EventType(
        'Ump.InvalidFormat',
        sts.bytes()
    ),
}

export const unsupportedVersion =  {
    name: 'Ump.UnsupportedVersion',
    /**
     * Upward message is unsupported version of XCM.
     * \[ id \]
     */
    v9110: new EventType(
        'Ump.UnsupportedVersion',
        sts.bytes()
    ),
}

export const executedUpward =  {
    name: 'Ump.ExecutedUpward',
    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v9110: new EventType(
        'Ump.ExecutedUpward',
        sts.tuple([sts.bytes(), v9110.V2Outcome])
    ),
    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v9170: new EventType(
        'Ump.ExecutedUpward',
        sts.tuple([sts.bytes(), v9170.V2Outcome])
    ),
    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v9420: new EventType(
        'Ump.ExecutedUpward',
        sts.tuple([sts.bytes(), v9420.V3Outcome])
    ),
}

export const weightExhausted =  {
    name: 'Ump.WeightExhausted',
    /**
     * The weight limit for handling downward messages was reached.
     * \[ id, remaining, required \]
     */
    v9110: new EventType(
        'Ump.WeightExhausted',
        sts.tuple([sts.bytes(), sts.bigint(), sts.bigint()])
    ),
    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    v9291: new EventType(
        'Ump.WeightExhausted',
        sts.tuple([sts.bytes(), v9291.Weight, v9291.Weight])
    ),
    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    v9340: new EventType(
        'Ump.WeightExhausted',
        sts.tuple([sts.bytes(), v9340.Weight, v9340.Weight])
    ),
}

export const upwardMessagesReceived =  {
    name: 'Ump.UpwardMessagesReceived',
    /**
     * Some downward messages have been received and will be processed.
     * \[ para, count, size \]
     */
    v9110: new EventType(
        'Ump.UpwardMessagesReceived',
        sts.tuple([v9110.Id, sts.number(), sts.number()])
    ),
}

export const overweightEnqueued =  {
    name: 'Ump.OverweightEnqueued',
    /**
     * The weight budget was exceeded for an individual downward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    v9110: new EventType(
        'Ump.OverweightEnqueued',
        sts.tuple([v9110.Id, sts.bytes(), sts.bigint(), sts.bigint()])
    ),
    /**
     * The weight budget was exceeded for an individual upward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    v9291: new EventType(
        'Ump.OverweightEnqueued',
        sts.tuple([v9291.Id, sts.bytes(), sts.bigint(), v9291.Weight])
    ),
    /**
     * The weight budget was exceeded for an individual upward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    v9340: new EventType(
        'Ump.OverweightEnqueued',
        sts.tuple([v9340.Id, sts.bytes(), sts.bigint(), v9340.Weight])
    ),
}

export const overweightServiced =  {
    name: 'Ump.OverweightServiced',
    /**
     * Downward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    v9110: new EventType(
        'Ump.OverweightServiced',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    v9291: new EventType(
        'Ump.OverweightServiced',
        sts.tuple([sts.bigint(), v9291.Weight])
    ),
    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    v9340: new EventType(
        'Ump.OverweightServiced',
        sts.tuple([sts.bigint(), v9340.Weight])
    ),
}
