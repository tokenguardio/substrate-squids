import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const delegated =  {
    name: 'ConvictionVoting.Delegated',
    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    v9420: new EventType(
        'ConvictionVoting.Delegated',
        sts.tuple([v9420.AccountId32, v9420.AccountId32])
    ),
}

export const undelegated =  {
    name: 'ConvictionVoting.Undelegated',
    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    v9420: new EventType(
        'ConvictionVoting.Undelegated',
        v9420.AccountId32
    ),
}
