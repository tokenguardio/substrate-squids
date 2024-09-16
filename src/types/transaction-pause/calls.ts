import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const pauseTransaction =  {
    name: 'TransactionPause.pause_transaction',
    v115: new CallType(
        'TransactionPause.pause_transaction',
        sts.struct({
            palletName: sts.bytes(),
            functionName: sts.bytes(),
        })
    ),
}

export const unpauseTransaction =  {
    name: 'TransactionPause.unpause_transaction',
    v115: new CallType(
        'TransactionPause.unpause_transaction',
        sts.struct({
            palletName: sts.bytes(),
            functionName: sts.bytes(),
        })
    ),
}
