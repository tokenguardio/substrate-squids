import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v990 from '../v990'

export const setPrice =  {
    name: 'Prices.SetPrice',
    /**
     * Set emergency price. \[asset_id, price_detail\]
     */
    v990: new EventType(
        'Prices.SetPrice',
        sts.tuple([v990.CurrencyId, v990.FixedU128])
    ),
}

export const resetPrice =  {
    name: 'Prices.ResetPrice',
    /**
     * Reset emergency price. \[asset_id\]
     */
    v990: new EventType(
        'Prices.ResetPrice',
        v990.CurrencyId
    ),
}
