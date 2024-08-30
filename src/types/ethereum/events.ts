import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v12001 from '../v12001'

export const executed =  {
    name: 'Ethereum.Executed',
    /**
     * An ethereum transaction was successfully executed.
     */
    v12001: new EventType(
        'Ethereum.Executed',
        sts.struct({
            from: v12001.H160,
            to: v12001.H160,
            transactionHash: v12001.H256,
            exitReason: v12001.ExitReason,
            extraData: sts.bytes(),
        })
    ),
}
