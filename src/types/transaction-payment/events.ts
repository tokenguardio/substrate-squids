import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v952 from '../v952'

export const transactionFeePaid =  {
    name: 'TransactionPayment.TransactionFeePaid',
    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    v952: new EventType(
        'TransactionPayment.TransactionFeePaid',
        sts.struct({
            who: v952.AccountId32,
            actualFee: sts.bigint(),
            tip: sts.bigint(),
        })
    ),
}
