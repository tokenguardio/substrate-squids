import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const transactionPaused =  {
    name: 'TransactionPause.TransactionPaused',
    /**
     * Paused transaction
     */
    v115: new EventType(
        'TransactionPause.TransactionPaused',
        sts.struct({
            palletNameBytes: sts.bytes(),
            functionNameBytes: sts.bytes(),
        })
    ),
}

export const transactionUnpaused =  {
    name: 'TransactionPause.TransactionUnpaused',
    /**
     * Unpaused transaction
     */
    v115: new EventType(
        'TransactionPause.TransactionUnpaused',
        sts.struct({
            palletNameBytes: sts.bytes(),
            functionNameBytes: sts.bytes(),
        })
    ),
}
