import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v990 from '../v990'

export const addMember =  {
    name: 'OracleMembership.add_member',
    /**
     * See [`Pallet::add_member`].
     */
    v990: new CallType(
        'OracleMembership.add_member',
        sts.struct({
            who: v990.MultiAddress,
        })
    ),
}

export const removeMember =  {
    name: 'OracleMembership.remove_member',
    /**
     * See [`Pallet::remove_member`].
     */
    v990: new CallType(
        'OracleMembership.remove_member',
        sts.struct({
            who: v990.MultiAddress,
        })
    ),
}

export const swapMember =  {
    name: 'OracleMembership.swap_member',
    /**
     * See [`Pallet::swap_member`].
     */
    v990: new CallType(
        'OracleMembership.swap_member',
        sts.struct({
            remove: v990.MultiAddress,
            add: v990.MultiAddress,
        })
    ),
}

export const resetMembers =  {
    name: 'OracleMembership.reset_members',
    /**
     * See [`Pallet::reset_members`].
     */
    v990: new CallType(
        'OracleMembership.reset_members',
        sts.struct({
            members: sts.array(() => v990.AccountId32),
        })
    ),
}

export const changeKey =  {
    name: 'OracleMembership.change_key',
    /**
     * See [`Pallet::change_key`].
     */
    v990: new CallType(
        'OracleMembership.change_key',
        sts.struct({
            new: v990.MultiAddress,
        })
    ),
}

export const setPrime =  {
    name: 'OracleMembership.set_prime',
    /**
     * See [`Pallet::set_prime`].
     */
    v990: new CallType(
        'OracleMembership.set_prime',
        sts.struct({
            who: v990.MultiAddress,
        })
    ),
}

export const clearPrime =  {
    name: 'OracleMembership.clear_prime',
    /**
     * See [`Pallet::clear_prime`].
     */
    v990: new CallType(
        'OracleMembership.clear_prime',
        sts.unit()
    ),
}
