import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v9 from '../v9'

export const transact =  {
    name: 'Ethereum.transact',
    /**
     * Transact an Ethereum transaction.
     */
    v1: new CallType(
        'Ethereum.transact',
        sts.struct({
            transaction: v1.LegacyTransaction,
        })
    ),
    /**
     * Transact an Ethereum transaction.
     */
    v9: new CallType(
        'Ethereum.transact',
        sts.struct({
            transaction: v9.TransactionV2,
        })
    ),
}
