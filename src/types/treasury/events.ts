import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const deposit =  {
    name: 'Treasury.Deposit',
    /**
     * Some funds have been deposited. \[deposit\]
     */
    v12: new EventType(
        'Treasury.Deposit',
        sts.bigint()
    ),
    /**
     * Some funds have been deposited.
     */
    v39: new EventType(
        'Treasury.Deposit',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}
