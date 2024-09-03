import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9260 from '../v9260'

export const transactionFeePaid =  {
    name: 'TransactionPayment.TransactionFeePaid',
    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    v9260: new EventType(
        'TransactionPayment.TransactionFeePaid',
        sts.struct({
            who: v9260.AccountId32,
            actualFee: sts.bigint(),
            tip: sts.bigint(),
        })
    ),
}
