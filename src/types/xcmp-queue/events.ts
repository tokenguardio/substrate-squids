import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v952 from '../v952'
import * as v968 from '../v968'
import * as v972 from '../v972'
import * as v990 from '../v990'

export const success =  {
    name: 'XcmpQueue.Success',
    /**
     * Some XCM was executed ok.
     */
    v932: new EventType(
        'XcmpQueue.Success',
        sts.option(() => v932.H256)
    ),
    /**
     * Some XCM was executed ok.
     */
    v952: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.option(() => v952.H256),
            weight: sts.bigint(),
        })
    ),
    /**
     * Some XCM was executed ok.
     */
    v968: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.option(() => v968.H256),
            weight: v968.Weight,
        })
    ),
    /**
     * Some XCM was executed ok.
     */
    v990: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            weight: v990.Weight,
        })
    ),
}

export const fail =  {
    name: 'XcmpQueue.Fail',
    /**
     * Some XCM failed.
     */
    v932: new EventType(
        'XcmpQueue.Fail',
        sts.tuple([sts.option(() => v932.H256), v932.V2Error])
    ),
    /**
     * Some XCM failed.
     */
    v952: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.option(() => v952.H256),
            error: v952.V2Error,
            weight: sts.bigint(),
        })
    ),
    /**
     * Some XCM failed.
     */
    v968: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.option(() => v968.H256),
            error: v968.V2Error,
            weight: v968.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    v972: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
            error: v972.V3Error,
            weight: v972.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    v990: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            error: v990.V3Error,
            weight: v990.Weight,
        })
    ),
}

export const badVersion =  {
    name: 'XcmpQueue.BadVersion',
    /**
     * Bad XCM version used.
     */
    v932: new EventType(
        'XcmpQueue.BadVersion',
        sts.option(() => v932.H256)
    ),
    /**
     * Bad XCM version used.
     */
    v952: new EventType(
        'XcmpQueue.BadVersion',
        sts.struct({
            messageHash: sts.option(() => v952.H256),
        })
    ),
    /**
     * Bad XCM version used.
     */
    v990: new EventType(
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
    v932: new EventType(
        'XcmpQueue.BadFormat',
        sts.option(() => v932.H256)
    ),
    /**
     * Bad XCM format used.
     */
    v952: new EventType(
        'XcmpQueue.BadFormat',
        sts.struct({
            messageHash: sts.option(() => v952.H256),
        })
    ),
    /**
     * Bad XCM format used.
     */
    v990: new EventType(
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
    v932: new EventType(
        'XcmpQueue.UpwardMessageSent',
        sts.option(() => v932.H256)
    ),
    /**
     * An upward message was sent to the relay chain.
     */
    v952: new EventType(
        'XcmpQueue.UpwardMessageSent',
        sts.struct({
            messageHash: sts.option(() => v952.H256),
        })
    ),
}

export const xcmpMessageSent =  {
    name: 'XcmpQueue.XcmpMessageSent',
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    v932: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.option(() => v932.H256)
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    v952: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.struct({
            messageHash: sts.option(() => v952.H256),
        })
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    v990: new EventType(
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
    v932: new EventType(
        'XcmpQueue.OverweightEnqueued',
        sts.tuple([v932.Id, sts.number(), sts.bigint(), sts.bigint()])
    ),
    /**
     * An XCM exceeded the individual message weight budget.
     */
    v952: new EventType(
        'XcmpQueue.OverweightEnqueued',
        sts.struct({
            sender: v952.Id,
            sentAt: sts.number(),
            index: sts.bigint(),
            required: sts.bigint(),
        })
    ),
    /**
     * An XCM exceeded the individual message weight budget.
     */
    v968: new EventType(
        'XcmpQueue.OverweightEnqueued',
        sts.struct({
            sender: v968.Id,
            sentAt: sts.number(),
            index: sts.bigint(),
            required: v968.Weight,
        })
    ),
}

export const overweightServiced =  {
    name: 'XcmpQueue.OverweightServiced',
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    v932: new EventType(
        'XcmpQueue.OverweightServiced',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    v952: new EventType(
        'XcmpQueue.OverweightServiced',
        sts.struct({
            index: sts.bigint(),
            used: sts.bigint(),
        })
    ),
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    v968: new EventType(
        'XcmpQueue.OverweightServiced',
        sts.struct({
            index: sts.bigint(),
            used: v968.Weight,
        })
    ),
}
