import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v244 from '../v244'

export const reapPage =  {
    name: 'MessageQueue.reap_page',
    /**
     * See [`Pallet::reap_page`].
     */
    v244: new CallType(
        'MessageQueue.reap_page',
        sts.struct({
            messageOrigin: v244.AggregateMessageOrigin,
            pageIndex: sts.number(),
        })
    ),
}

export const executeOverweight =  {
    name: 'MessageQueue.execute_overweight',
    /**
     * See [`Pallet::execute_overweight`].
     */
    v244: new CallType(
        'MessageQueue.execute_overweight',
        sts.struct({
            messageOrigin: v244.AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: v244.Weight,
        })
    ),
}
