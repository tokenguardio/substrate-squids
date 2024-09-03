import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9140 from '../v9140'

export const vestingUpdated =  {
    name: 'Vesting.VestingUpdated',
    /**
     *  The amount vested has been updated. This could indicate more funds are available. The
     *  balance given is the amount which is left unvested (and thus locked).
     */
    v0: new EventType(
        'Vesting.VestingUpdated',
        sts.tuple([v0.AccountId, v0.Balance])
    ),
    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    v9140: new EventType(
        'Vesting.VestingUpdated',
        sts.struct({
            account: v9140.AccountId32,
            unvested: sts.bigint(),
        })
    ),
}

export const vestingCompleted =  {
    name: 'Vesting.VestingCompleted',
    /**
     *  An account (given) has become fully vested. No further vesting can happen.
     */
    v0: new EventType(
        'Vesting.VestingCompleted',
        v0.AccountId
    ),
    /**
     * An \[account\] has become fully vested.
     */
    v9140: new EventType(
        'Vesting.VestingCompleted',
        sts.struct({
            account: v9140.AccountId32,
        })
    ),
}
