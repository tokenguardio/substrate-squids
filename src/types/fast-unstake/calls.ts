import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const registerFastUnstake =  {
    name: 'FastUnstake.register_fast_unstake',
    /**
     * Register oneself for fast-unstake.
     * 
     * The dispatch origin of this call must be signed by the controller account, similar to
     * `staking::unbond`.
     * 
     * The stash associated with the origin must have no ongoing unlocking chunks. If
     * successful, this will fully unbond and chill the stash. Then, it will enqueue the stash
     * to be checked in further blocks.
     * 
     * If by the time this is called, the stash is actually eligible for fast-unstake, then
     * they are guaranteed to remain eligible, because the call will chill them as well.
     * 
     * If the check works, the entire staking data is removed, i.e. the stash is fully
     * unstaked.
     * 
     * If the check fails, the stash remains chilled and waiting for being unbonded as in with
     * the normal staking system, but they lose part of their unbonding chunks due to consuming
     * the chain's resources.
     */
    v9300: new CallType(
        'FastUnstake.register_fast_unstake',
        sts.unit()
    ),
}

export const deregister =  {
    name: 'FastUnstake.deregister',
    /**
     * Deregister oneself from the fast-unstake.
     * 
     * This is useful if one is registered, they are still waiting, and they change their mind.
     * 
     * Note that the associated stash is still fully unbonded and chilled as a consequence of
     * calling `register_fast_unstake`. This should probably be followed by a call to
     * `Staking::rebond`.
     */
    v9300: new CallType(
        'FastUnstake.deregister',
        sts.unit()
    ),
}

export const control =  {
    name: 'FastUnstake.control',
    /**
     * Control the operation of this pallet.
     * 
     * Dispatch origin must be signed by the [`Config::ControlOrigin`].
     */
    v9300: new CallType(
        'FastUnstake.control',
        sts.struct({
            uncheckedErasToCheck: sts.number(),
        })
    ),
    /**
     * Control the operation of this pallet.
     * 
     * Dispatch origin must be signed by the [`Config::ControlOrigin`].
     */
    v9420: new CallType(
        'FastUnstake.control',
        sts.struct({
            erasToCheck: sts.number(),
        })
    ),
}
