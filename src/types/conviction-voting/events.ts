import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v982 from '../v982'

export const delegated =  {
    name: 'ConvictionVoting.Delegated',
    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    v982: new EventType(
        'ConvictionVoting.Delegated',
        sts.tuple([v982.AccountId32, v982.AccountId32])
    ),
}

export const undelegated =  {
    name: 'ConvictionVoting.Undelegated',
    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    v982: new EventType(
        'ConvictionVoting.Undelegated',
        v982.AccountId32
    ),
}
