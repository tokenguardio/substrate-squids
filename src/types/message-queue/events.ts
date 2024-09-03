import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9430 from '../v9430'

export const processingFailed =  {
    name: 'MessageQueue.ProcessingFailed',
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    v9430: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
            id: sts.bytes(),
            origin: v9430.AggregateMessageOrigin,
            error: v9430.ProcessMessageError,
        })
    ),
}

export const processed =  {
    name: 'MessageQueue.Processed',
    /**
     * Message is processed.
     */
    v9430: new EventType(
        'MessageQueue.Processed',
        sts.struct({
            id: sts.bytes(),
            origin: v9430.AggregateMessageOrigin,
            weightUsed: v9430.Weight,
            success: sts.boolean(),
        })
    ),
}

export const overweightEnqueued =  {
    name: 'MessageQueue.OverweightEnqueued',
    /**
     * Message placed in overweight queue.
     */
    v9430: new EventType(
        'MessageQueue.OverweightEnqueued',
        sts.struct({
            id: sts.bytes(),
            origin: v9430.AggregateMessageOrigin,
            pageIndex: sts.number(),
            messageIndex: sts.number(),
        })
    ),
}

export const pageReaped =  {
    name: 'MessageQueue.PageReaped',
    /**
     * This page was reaped.
     */
    v9430: new EventType(
        'MessageQueue.PageReaped',
        sts.struct({
            origin: v9430.AggregateMessageOrigin,
            index: sts.number(),
        })
    ),
}
