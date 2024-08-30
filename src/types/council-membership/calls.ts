import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v950 from '../v950'
import * as v968 from '../v968'

export const addMember =  {
    name: 'CouncilMembership.add_member',
    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    v950: new CallType(
        'CouncilMembership.add_member',
        sts.struct({
            who: v950.AccountId32,
        })
    ),
    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    v968: new CallType(
        'CouncilMembership.add_member',
        sts.struct({
            who: v968.MultiAddress,
        })
    ),
}

export const removeMember =  {
    name: 'CouncilMembership.remove_member',
    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    v950: new CallType(
        'CouncilMembership.remove_member',
        sts.struct({
            who: v950.AccountId32,
        })
    ),
    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    v968: new CallType(
        'CouncilMembership.remove_member',
        sts.struct({
            who: v968.MultiAddress,
        })
    ),
}

export const swapMember =  {
    name: 'CouncilMembership.swap_member',
    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    v950: new CallType(
        'CouncilMembership.swap_member',
        sts.struct({
            remove: v950.AccountId32,
            add: v950.AccountId32,
        })
    ),
    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    v968: new CallType(
        'CouncilMembership.swap_member',
        sts.struct({
            remove: v968.MultiAddress,
            add: v968.MultiAddress,
        })
    ),
}

export const resetMembers =  {
    name: 'CouncilMembership.reset_members',
    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    v950: new CallType(
        'CouncilMembership.reset_members',
        sts.struct({
            members: sts.array(() => v950.AccountId32),
        })
    ),
}

export const changeKey =  {
    name: 'CouncilMembership.change_key',
    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    v950: new CallType(
        'CouncilMembership.change_key',
        sts.struct({
            new: v950.AccountId32,
        })
    ),
    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    v968: new CallType(
        'CouncilMembership.change_key',
        sts.struct({
            new: v968.MultiAddress,
        })
    ),
}

export const setPrime =  {
    name: 'CouncilMembership.set_prime',
    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    v950: new CallType(
        'CouncilMembership.set_prime',
        sts.struct({
            who: v950.AccountId32,
        })
    ),
    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    v968: new CallType(
        'CouncilMembership.set_prime',
        sts.struct({
            who: v968.MultiAddress,
        })
    ),
}

export const clearPrime =  {
    name: 'CouncilMembership.clear_prime',
    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    v950: new CallType(
        'CouncilMembership.clear_prime',
        sts.unit()
    ),
}
