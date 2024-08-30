import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v10000 from '../v10000'

export const reapPage =  {
    name: 'MessageQueue.reap_page',
    /**
     * See [`Pallet::reap_page`].
     */
    v10000: new CallType(
        'MessageQueue.reap_page',
        sts.struct({
            messageOrigin: v10000.AggregateMessageOrigin,
            pageIndex: sts.number(),
        })
    ),
}

export const executeOverweight =  {
    name: 'MessageQueue.execute_overweight',
    /**
     * See [`Pallet::execute_overweight`].
     */
    v10000: new CallType(
        'MessageQueue.execute_overweight',
        sts.struct({
            messageOrigin: v10000.AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: v10000.Weight,
        })
    ),
}
