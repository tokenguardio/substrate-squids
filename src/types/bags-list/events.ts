import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9140 from '../v9140'

export const rebagged =  {
    name: 'BagsList.Rebagged',
    /**
     * Moved an account from one bag to another.
     */
    v9140: new EventType(
        'BagsList.Rebagged',
        sts.struct({
            who: v9140.AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        })
    ),
}
