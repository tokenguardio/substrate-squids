import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9300 from '../v9300'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const unstaked =  {
    name: 'FastUnstake.Unstaked',
    /**
     * A staker was unstaked.
     */
    v9300: new EventType(
        'FastUnstake.Unstaked',
        sts.struct({
            stash: v9300.AccountId32,
            result: sts.result(() => sts.unit(), () => v9300.DispatchError),
        })
    ),
    /**
     * A staker was unstaked.
     */
    v9340: new EventType(
        'FastUnstake.Unstaked',
        sts.struct({
            stash: v9340.AccountId32,
            result: sts.result(() => sts.unit(), () => v9340.DispatchError),
        })
    ),
    /**
     * A staker was unstaked.
     */
    v9420: new EventType(
        'FastUnstake.Unstaked',
        sts.struct({
            stash: v9420.AccountId32,
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * A staker was unstaked.
     */
    v9430: new EventType(
        'FastUnstake.Unstaked',
        sts.struct({
            stash: v9430.AccountId32,
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
}

export const slashed =  {
    name: 'FastUnstake.Slashed',
    /**
     * A staker was slashed for requesting fast-unstake whilst being exposed.
     */
    v9300: new EventType(
        'FastUnstake.Slashed',
        sts.struct({
            stash: v9300.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const checking =  {
    name: 'FastUnstake.Checking',
    /**
     * A staker was partially checked for the given eras, but the process did not finish.
     */
    v9300: new EventType(
        'FastUnstake.Checking',
        sts.struct({
            stash: v9300.AccountId32,
            eras: sts.array(() => sts.number()),
        })
    ),
}

export const errored =  {
    name: 'FastUnstake.Errored',
    /**
     * Some internal error happened while migrating stash. They are removed as head as a
     * consequence.
     */
    v9300: new EventType(
        'FastUnstake.Errored',
        sts.struct({
            stash: v9300.AccountId32,
        })
    ),
}

export const internalError =  {
    name: 'FastUnstake.InternalError',
    /**
     * An internal error happened. Operations will be paused now.
     */
    v9300: new EventType(
        'FastUnstake.InternalError',
        sts.unit()
    ),
}

export const batchChecked =  {
    name: 'FastUnstake.BatchChecked',
    /**
     * A batch was partially checked for the given eras, but the process did not finish.
     */
    v9340: new EventType(
        'FastUnstake.BatchChecked',
        sts.struct({
            eras: sts.array(() => sts.number()),
        })
    ),
}

export const batchFinished =  {
    name: 'FastUnstake.BatchFinished',
    /**
     * A batch was terminated.
     * 
     * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
     * of the batch. A new batch will be created upon next block.
     */
    v9340: new EventType(
        'FastUnstake.BatchFinished',
        sts.unit()
    ),
    /**
     * A batch of a given size was terminated.
     * 
     * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
     * of the batch. A new batch will be created upon next block.
     */
    v9420: new EventType(
        'FastUnstake.BatchFinished',
        sts.struct({
            size: sts.number(),
        })
    ),
}
