import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v115 from '../v115'

export const transactionFeePaid =  {
    name: 'TransactionPayment.TransactionFeePaid',
    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    v115: new EventType(
        'TransactionPayment.TransactionFeePaid',
        sts.struct({
            who: v115.AccountId32,
            actualFee: sts.bigint(),
            tip: sts.bigint(),
        })
    ),
}
