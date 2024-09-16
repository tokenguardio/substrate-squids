import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'

export const vestingScheduleAdded =  {
    name: 'Vesting.VestingScheduleAdded',
    /**
     * Added new vesting schedule.
     */
    v108: new EventType(
        'Vesting.VestingScheduleAdded',
        sts.struct({
            from: v108.AccountId32,
            to: v108.AccountId32,
            vestingSchedule: v108.VestingSchedule,
        })
    ),
}

export const claimed =  {
    name: 'Vesting.Claimed',
    /**
     * Claimed vesting.
     */
    v108: new EventType(
        'Vesting.Claimed',
        sts.struct({
            who: v108.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const vestingSchedulesUpdated =  {
    name: 'Vesting.VestingSchedulesUpdated',
    /**
     * Updated vesting schedules.
     */
    v108: new EventType(
        'Vesting.VestingSchedulesUpdated',
        sts.struct({
            who: v108.AccountId32,
        })
    ),
}
