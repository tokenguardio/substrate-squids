import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v990 from '../v990'

export const vest =  {
    name: 'Vesting.vest',
    /**
     * Unlock any vested funds of the sender account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 2 Reads, 2 Writes
     *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
     * # </weight>
     */
    v932: new CallType(
        'Vesting.vest',
        sts.unit()
    ),
}

export const vestOther =  {
    name: 'Vesting.vest_other',
    /**
     * Unlock any vested funds of a `target` account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account whose vested funds should be unlocked. Must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account
     * # </weight>
     */
    v932: new CallType(
        'Vesting.vest_other',
        sts.struct({
            target: v932.MultiAddress,
        })
    ),
}

export const vestedTransfer =  {
    name: 'Vesting.vested_transfer',
    /**
     * Create a vested transfer.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account that should be transferred the vested funds.
     * - `amount`: The amount of funds to transfer and will be vested.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     * # </weight>
     */
    v932: new CallType(
        'Vesting.vested_transfer',
        sts.struct({
            target: v932.MultiAddress,
            schedule: v932.VestingInfo,
        })
    ),
}

export const forceVestedTransfer =  {
    name: 'Vesting.force_vested_transfer',
    /**
     * Force a vested transfer.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The account whose funds should be transferred.
     * - `target`: The account that should be transferred the vested funds.
     * - `amount`: The amount of funds to transfer and will be vested.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 4 Reads, 4 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
     * # </weight>
     */
    v932: new CallType(
        'Vesting.force_vested_transfer',
        sts.struct({
            source: v932.MultiAddress,
            target: v932.MultiAddress,
            schedule: v932.VestingInfo,
        })
    ),
}

export const forceSetVested =  {
    name: 'Vesting.force_set_vested',
    v932: new CallType(
        'Vesting.force_set_vested',
        sts.struct({
            source: v932.MultiAddress,
            target: v932.MultiAddress,
            schedule: v932.VestingInfo,
        })
    ),
}

export const initVestingStartAt =  {
    name: 'Vesting.init_vesting_start_at',
    v932: new CallType(
        'Vesting.init_vesting_start_at',
        sts.struct({
            vestingStartAt: sts.number(),
        })
    ),
}

export const setVestingPerBlock =  {
    name: 'Vesting.set_vesting_per_block',
    v932: new CallType(
        'Vesting.set_vesting_per_block',
        sts.struct({
            target: v932.MultiAddress,
            perBlock: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::set_vesting_per_block`].
     */
    v990: new CallType(
        'Vesting.set_vesting_per_block',
        sts.struct({
            target: v990.MultiAddress,
            index: sts.number(),
            perBlock: sts.bigint(),
        })
    ),
}

export const forceSetCliff =  {
    name: 'Vesting.force_set_cliff',
    v932: new CallType(
        'Vesting.force_set_cliff',
        sts.struct({
            target: v932.MultiAddress,
            cliffBlock: sts.number(),
        })
    ),
}

export const mergeSchedules =  {
    name: 'Vesting.merge_schedules',
    /**
     * See [`Pallet::merge_schedules`].
     */
    v990: new CallType(
        'Vesting.merge_schedules',
        sts.struct({
            schedule1Index: sts.number(),
            schedule2Index: sts.number(),
        })
    ),
}
