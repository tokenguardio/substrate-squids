import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'

export const collatorRewarded =  {
    name: 'CollatorRewards.CollatorRewarded',
    /**
     * Collator was rewarded.
     */
    v108: new EventType(
        'CollatorRewards.CollatorRewarded',
        sts.struct({
            who: v108.AccountId32,
            amount: sts.bigint(),
            currency: sts.number(),
        })
    ),
}
