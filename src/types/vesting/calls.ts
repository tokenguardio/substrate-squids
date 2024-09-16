import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v108 from '../v108'

export const claim =  {
    name: 'Vesting.claim',
    v108: new CallType(
        'Vesting.claim',
        sts.unit()
    ),
}

export const vestedTransfer =  {
    name: 'Vesting.vested_transfer',
    v108: new CallType(
        'Vesting.vested_transfer',
        sts.struct({
            dest: v108.AccountId32,
            schedule: v108.VestingSchedule,
        })
    ),
}

export const updateVestingSchedules =  {
    name: 'Vesting.update_vesting_schedules',
    v108: new CallType(
        'Vesting.update_vesting_schedules',
        sts.struct({
            who: v108.AccountId32,
            vestingSchedules: sts.array(() => v108.VestingSchedule),
        })
    ),
}

export const claimFor =  {
    name: 'Vesting.claim_for',
    v108: new CallType(
        'Vesting.claim_for',
        sts.struct({
            dest: v108.AccountId32,
        })
    ),
}
