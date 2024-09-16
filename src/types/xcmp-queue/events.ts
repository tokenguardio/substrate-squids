import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v115 from '../v115'
import * as v160 from '../v160'
import * as v170 from '../v170'
import * as v205 from '../v205'

export const success =  {
    name: 'XcmpQueue.Success',
    /**
     * Some XCM was executed ok.
     */
    v108: new EventType(
        'XcmpQueue.Success',
        sts.option(() => v108.H256)
    ),
    /**
     * Some XCM was executed ok.
     */
    v115: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.option(() => v115.H256),
            weight: v115.Weight,
        })
    ),
    /**
     * Some XCM was executed ok.
     */
    v160: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
            weight: v160.Weight,
        })
    ),
    /**
     * Some XCM was executed ok.
     */
    v205: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            weight: v205.Weight,
        })
    ),
}

export const fail =  {
    name: 'XcmpQueue.Fail',
    /**
     * Some XCM failed.
     */
    v108: new EventType(
        'XcmpQueue.Fail',
        sts.tuple([sts.option(() => v108.H256), v108.V2Error])
    ),
    /**
     * Some XCM failed.
     */
    v115: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.option(() => v115.H256),
            error: v115.V2Error,
            weight: v115.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    v160: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
            error: v160.V3Error,
            weight: v160.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    v205: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            error: v205.V3Error,
            weight: v205.Weight,
        })
    ),
}

export const badVersion =  {
    name: 'XcmpQueue.BadVersion',
    /**
     * Bad XCM version used.
     */
    v108: new EventType(
        'XcmpQueue.BadVersion',
        sts.option(() => v108.H256)
    ),
    /**
     * Bad XCM version used.
     */
    v115: new EventType(
        'XcmpQueue.BadVersion',
        sts.struct({
            messageHash: sts.option(() => v115.H256),
        })
    ),
    /**
     * Bad XCM version used.
     */
    v205: new EventType(
        'XcmpQueue.BadVersion',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const badFormat =  {
    name: 'XcmpQueue.BadFormat',
    /**
     * Bad XCM format used.
     */
    v108: new EventType(
        'XcmpQueue.BadFormat',
        sts.option(() => v108.H256)
    ),
    /**
     * Bad XCM format used.
     */
    v115: new EventType(
        'XcmpQueue.BadFormat',
        sts.struct({
            messageHash: sts.option(() => v115.H256),
        })
    ),
    /**
     * Bad XCM format used.
     */
    v205: new EventType(
        'XcmpQueue.BadFormat',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const upwardMessageSent =  {
    name: 'XcmpQueue.UpwardMessageSent',
    /**
     * An upward message was sent to the relay chain.
     */
    v108: new EventType(
        'XcmpQueue.UpwardMessageSent',
        sts.option(() => v108.H256)
    ),
    /**
     * An upward message was sent to the relay chain.
     */
    v115: new EventType(
        'XcmpQueue.UpwardMessageSent',
        sts.struct({
            messageHash: sts.option(() => v115.H256),
        })
    ),
}

export const xcmpMessageSent =  {
    name: 'XcmpQueue.XcmpMessageSent',
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    v108: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.option(() => v108.H256)
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    v115: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.struct({
            messageHash: sts.option(() => v115.H256),
        })
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    v205: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const overweightEnqueued =  {
    name: 'XcmpQueue.OverweightEnqueued',
    /**
     * An XCM exceeded the individual message weight budget.
     */
    v108: new EventType(
        'XcmpQueue.OverweightEnqueued',
        sts.tuple([v108.Id, sts.number(), sts.bigint(), sts.bigint()])
    ),
    /**
     * An XCM exceeded the individual message weight budget.
     */
    v115: new EventType(
        'XcmpQueue.OverweightEnqueued',
        sts.struct({
            sender: v115.Id,
            sentAt: sts.number(),
            index: sts.bigint(),
            required: v115.Weight,
        })
    ),
    /**
     * An XCM exceeded the individual message weight budget.
     */
    v160: new EventType(
        'XcmpQueue.OverweightEnqueued',
        sts.struct({
            sender: v160.Id,
            sentAt: sts.number(),
            index: sts.bigint(),
            required: v160.Weight,
        })
    ),
}

export const overweightServiced =  {
    name: 'XcmpQueue.OverweightServiced',
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    v108: new EventType(
        'XcmpQueue.OverweightServiced',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    v115: new EventType(
        'XcmpQueue.OverweightServiced',
        sts.struct({
            index: sts.bigint(),
            used: v115.Weight,
        })
    ),
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    v160: new EventType(
        'XcmpQueue.OverweightServiced',
        sts.struct({
            index: sts.bigint(),
            used: v160.Weight,
        })
    ),
}

export const xcmDeferred =  {
    name: 'XcmpQueue.XcmDeferred',
    /**
     * Some XCM was deferred for later execution
     */
    v170: new EventType(
        'XcmpQueue.XcmDeferred',
        sts.struct({
            sender: v170.Id,
            sentAt: sts.number(),
            deferredTo: sts.number(),
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Some XCM was deferred for later execution
     */
    v205: new EventType(
        'XcmpQueue.XcmDeferred',
        sts.struct({
            sender: v205.Id,
            sentAt: sts.number(),
            deferredTo: sts.number(),
            index: sts.tuple(() => [sts.number(), sts.number()]),
            position: sts.number(),
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
}

export const xcmDeferredQueueFull =  {
    name: 'XcmpQueue.XcmDeferredQueueFull',
    v170: new EventType(
        'XcmpQueue.XcmDeferredQueueFull',
        sts.unit()
    ),
    /**
     * The deferred queue is full with xcm messages
     */
    v205: new EventType(
        'XcmpQueue.XcmDeferredQueueFull',
        sts.struct({
            sender: v205.Id,
            sentAt: sts.number(),
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
}

export const deferredXcmDiscarded =  {
    name: 'XcmpQueue.DeferredXcmDiscarded',
    /**
     * The deferred message was successfully discarded.
     */
    v205: new EventType(
        'XcmpQueue.DeferredXcmDiscarded',
        sts.struct({
            sender: v205.Id,
            sentAt: sts.number(),
            deferredTo: sts.number(),
            index: sts.tuple(() => [sts.number(), sts.number()]),
            position: sts.number(),
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
}

export const deferredBucketDiscarded =  {
    name: 'XcmpQueue.DeferredBucketDiscarded',
    /**
     * The deferred bucket was discarded.
     */
    v205: new EventType(
        'XcmpQueue.DeferredBucketDiscarded',
        sts.struct({
            sender: v205.Id,
            index: sts.tuple(() => [sts.number(), sts.number()]),
        })
    ),
}
