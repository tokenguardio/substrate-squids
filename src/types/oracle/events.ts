import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v990 from '../v990'
import * as v12001 from '../v12001'

export const newFeedData =  {
    name: 'Oracle.NewFeedData',
    /**
     * New feed data is submitted.
     */
    v990: new EventType(
        'Oracle.NewFeedData',
        sts.struct({
            sender: v990.AccountId32,
            values: sts.array(() => sts.tuple(() => [v990.CurrencyId, v990.FixedU128])),
        })
    ),
}

export const feedTimestampReachingLimit =  {
    name: 'Oracle.FeedTimestampReachingLimit',
    v12001: new EventType(
        'Oracle.FeedTimestampReachingLimit',
        sts.struct({
            values: sts.array(() => v12001.TimestampedValue),
            prev: v12001.TimestampedValue,
        })
    ),
}

export const feedValueReachingLimit =  {
    name: 'Oracle.FeedValueReachingLimit',
    v12001: new EventType(
        'Oracle.FeedValueReachingLimit',
        sts.struct({
            value: v12001.TimestampedValue,
            prev: v12001.TimestampedValue,
        })
    ),
}
