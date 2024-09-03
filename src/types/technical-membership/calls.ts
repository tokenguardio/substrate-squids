import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9291 from '../v9291'

export const addMember =  {
    name: 'TechnicalMembership.add_member',
    /**
     *  Add a member `who` to the set.
     * 
     *  May only be called from `AddOrigin` or root.
     */
    v0: new CallType(
        'TechnicalMembership.add_member',
        sts.struct({
            who: v0.AccountId,
        })
    ),
    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    v9291: new CallType(
        'TechnicalMembership.add_member',
        sts.struct({
            who: v9291.MultiAddress,
        })
    ),
}

export const removeMember =  {
    name: 'TechnicalMembership.remove_member',
    /**
     *  Remove a member `who` from the set.
     * 
     *  May only be called from `RemoveOrigin` or root.
     */
    v0: new CallType(
        'TechnicalMembership.remove_member',
        sts.struct({
            who: v0.AccountId,
        })
    ),
    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    v9291: new CallType(
        'TechnicalMembership.remove_member',
        sts.struct({
            who: v9291.MultiAddress,
        })
    ),
}

export const swapMember =  {
    name: 'TechnicalMembership.swap_member',
    /**
     *  Swap out one member `remove` for another `add`.
     * 
     *  May only be called from `SwapOrigin` or root.
     * 
     *  Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    v0: new CallType(
        'TechnicalMembership.swap_member',
        sts.struct({
            remove: v0.AccountId,
            add: v0.AccountId,
        })
    ),
    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    v9291: new CallType(
        'TechnicalMembership.swap_member',
        sts.struct({
            remove: v9291.MultiAddress,
            add: v9291.MultiAddress,
        })
    ),
}

export const resetMembers =  {
    name: 'TechnicalMembership.reset_members',
    /**
     *  Change the membership to a new set, disregarding the existing membership. Be nice and
     *  pass `members` pre-sorted.
     * 
     *  May only be called from `ResetOrigin` or root.
     */
    v0: new CallType(
        'TechnicalMembership.reset_members',
        sts.struct({
            members: sts.array(() => v0.AccountId),
        })
    ),
}

export const changeKey =  {
    name: 'TechnicalMembership.change_key',
    /**
     *  Swap out the sending member for some other key `new`.
     * 
     *  May only be called from `Signed` origin of a current member.
     * 
     *  Prime membership is passed from the origin account to `new`, if extant.
     */
    v0: new CallType(
        'TechnicalMembership.change_key',
        sts.struct({
            new: v0.AccountId,
        })
    ),
    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    v9291: new CallType(
        'TechnicalMembership.change_key',
        sts.struct({
            new: v9291.MultiAddress,
        })
    ),
}

export const setPrime =  {
    name: 'TechnicalMembership.set_prime',
    /**
     *  Set the prime member. Must be a current member.
     */
    v0: new CallType(
        'TechnicalMembership.set_prime',
        sts.struct({
            who: v0.AccountId,
        })
    ),
    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    v9291: new CallType(
        'TechnicalMembership.set_prime',
        sts.struct({
            who: v9291.MultiAddress,
        })
    ),
}

export const clearPrime =  {
    name: 'TechnicalMembership.clear_prime',
    /**
     *  Remove the prime member if it exists.
     */
    v0: new CallType(
        'TechnicalMembership.clear_prime',
        sts.unit()
    ),
}
