import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'

export const claim =  {
    name: 'Claims.Claim',
    v108: new EventType(
        'Claims.Claim',
        sts.tuple([v108.AccountId32, v108.EthereumAddress, sts.bigint()])
    ),
}
