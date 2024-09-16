import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v193 from '../v193'
import * as v205 from '../v205'

export const executed =  {
    name: 'Ethereum.Executed',
    /**
     * An ethereum transaction was successfully executed.
     */
    v193: new EventType(
        'Ethereum.Executed',
        sts.struct({
            from: v193.H160,
            to: v193.H160,
            transactionHash: v193.H256,
            exitReason: v193.ExitReason,
        })
    ),
    /**
     * An ethereum transaction was successfully executed.
     */
    v205: new EventType(
        'Ethereum.Executed',
        sts.struct({
            from: v205.H160,
            to: v205.H160,
            transactionHash: v205.H256,
            exitReason: v205.ExitReason,
            extraData: sts.bytes(),
        })
    ),
}
