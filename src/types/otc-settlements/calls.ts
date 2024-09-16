import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v244 from '../v244'

export const settleOtcOrder =  {
    name: 'OtcSettlements.settle_otc_order',
    /**
     * See [`Pallet::settle_otc_order`].
     */
    v244: new CallType(
        'OtcSettlements.settle_otc_order',
        sts.struct({
            otcId: sts.number(),
            amount: sts.bigint(),
            route: sts.array(() => v244.Trade),
        })
    ),
}
