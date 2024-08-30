import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v990 from '../v990'

export const feedValues =  {
    name: 'Oracle.feed_values',
    /**
     * See [`Pallet::feed_values`].
     */
    v990: new CallType(
        'Oracle.feed_values',
        sts.struct({
            values: sts.array(() => sts.tuple(() => [v990.CurrencyId, v990.FixedU128])),
        })
    ),
}
