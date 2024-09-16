import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v193 from '../v193'

export const transact =  {
    name: 'Ethereum.transact',
    /**
     * Transact an Ethereum transaction.
     */
    v193: new CallType(
        'Ethereum.transact',
        sts.struct({
            transaction: v193.TransactionV2,
        })
    ),
}
