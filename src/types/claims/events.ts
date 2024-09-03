import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9230 from '../v9230'

export const claimed =  {
    name: 'Claims.Claimed',
    /**
     *  Someone claimed some DOTs.
     */
    v0: new EventType(
        'Claims.Claimed',
        sts.tuple([v0.AccountId, v0.EthereumAddress, v0.Balance])
    ),
    /**
     * Someone claimed some DOTs.
     */
    v9230: new EventType(
        'Claims.Claimed',
        sts.struct({
            who: v9230.AccountId32,
            ethereumAddress: v9230.EthereumAddress,
            amount: sts.bigint(),
        })
    ),
}
