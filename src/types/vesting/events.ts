import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v992 from '../v992'

export const vestingUpdated =  {
    name: 'Vesting.VestingUpdated',
    /**
     * The amount vested has been updated. This could indicate more funds are available. The
     * balance given is the amount which is left unvested (and thus locked).
     * \[account, unvested\]
     */
    v932: new EventType(
        'Vesting.VestingUpdated',
        sts.tuple([v932.AccountId32, sts.bigint()])
    ),
    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    v992: new EventType(
        'Vesting.VestingUpdated',
        sts.struct({
            account: v992.AccountId32,
            unvested: sts.bigint(),
        })
    ),
}

export const vestingCompleted =  {
    name: 'Vesting.VestingCompleted',
    /**
     * An \[account\] has become fully vested. No further vesting can happen.
     */
    v932: new EventType(
        'Vesting.VestingCompleted',
        v932.AccountId32
    ),
    /**
     * An \[account\] has become fully vested.
     */
    v992: new EventType(
        'Vesting.VestingCompleted',
        sts.struct({
            account: v992.AccountId32,
        })
    ),
}
