import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v14 from '../v14'

export const voted =  {
    name: 'Poll.Voted',
    v14: new EventType(
        'Poll.Voted',
        sts.tuple([v14.AccountId, v14.Balance, v14.Approvals])
    ),
}
