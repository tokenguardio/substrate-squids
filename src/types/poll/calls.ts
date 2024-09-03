import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v14 from '../v14'

export const vote =  {
    name: 'Poll.vote',
    /**
     *  Cast a vote on the poll.
     */
    v14: new CallType(
        'Poll.vote',
        sts.struct({
            approvals: v14.Approvals,
        })
    ),
}
