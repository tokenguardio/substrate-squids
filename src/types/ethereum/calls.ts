import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v12001 from '../v12001'

export const transact =  {
    name: 'Ethereum.transact',
    /**
     * Transact an Ethereum transaction.
     */
    v12001: new CallType(
        'Ethereum.transact',
        sts.struct({
            transaction: v12001.TransactionV2,
        })
    ),
}
