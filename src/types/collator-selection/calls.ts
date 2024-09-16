import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v990 from '../v990'
import * as v10000 from '../v10000'

export const setInvulnerables =  {
    name: 'CollatorSelection.set_invulnerables',
    /**
     * Set the list of invulnerable (fixed) collators.
     */
    v932: new CallType(
        'CollatorSelection.set_invulnerables',
        sts.struct({
            new: sts.array(() => v932.AccountId32),
        })
    ),
}

export const setDesiredCandidates =  {
    name: 'CollatorSelection.set_desired_candidates',
    /**
     * Set the ideal number of collators (not including the invulnerables).
     * If lowering this number, then the number of running collators could be higher than this figure.
     * Aside from that edge case, there should be no other way to have more collators than the desired number.
     */
    v932: new CallType(
        'CollatorSelection.set_desired_candidates',
        sts.struct({
            max: sts.number(),
        })
    ),
}

export const setCandidacyBond =  {
    name: 'CollatorSelection.set_candidacy_bond',
    /**
     * Set the candidacy bond amount.
     */
    v932: new CallType(
        'CollatorSelection.set_candidacy_bond',
        sts.struct({
            bond: sts.bigint(),
        })
    ),
}

export const registerAsCandidate =  {
    name: 'CollatorSelection.register_as_candidate',
    /**
     * Register this account as a collator candidate. The account must (a) already have
     * registered session keys and (b) be able to reserve the `CandidacyBond`.
     * 
     * This call is not available to `Invulnerable` collators.
     */
    v932: new CallType(
        'CollatorSelection.register_as_candidate',
        sts.unit()
    ),
}

export const leaveIntent =  {
    name: 'CollatorSelection.leave_intent',
    /**
     * Deregister `origin` as a collator candidate. Note that the collator can only leave on
     * session change. The `CandidacyBond` will be unreserved immediately.
     * 
     * This call will fail if the total number of candidates would drop below `MinCandidates`.
     * 
     * This call is not available to `Invulnerable` collators.
     */
    v932: new CallType(
        'CollatorSelection.leave_intent',
        sts.unit()
    ),
}

export const addInvulnerable =  {
    name: 'CollatorSelection.add_invulnerable',
    /**
     * See [`Pallet::add_invulnerable`].
     */
    v990: new CallType(
        'CollatorSelection.add_invulnerable',
        sts.struct({
            who: v990.AccountId32,
        })
    ),
}

export const removeInvulnerable =  {
    name: 'CollatorSelection.remove_invulnerable',
    /**
     * See [`Pallet::remove_invulnerable`].
     */
    v990: new CallType(
        'CollatorSelection.remove_invulnerable',
        sts.struct({
            who: v990.AccountId32,
        })
    ),
}

export const updateBond =  {
    name: 'CollatorSelection.update_bond',
    /**
     * See [`Pallet::update_bond`].
     */
    v10000: new CallType(
        'CollatorSelection.update_bond',
        sts.struct({
            newDeposit: sts.bigint(),
        })
    ),
}

export const takeCandidateSlot =  {
    name: 'CollatorSelection.take_candidate_slot',
    /**
     * See [`Pallet::take_candidate_slot`].
     */
    v10000: new CallType(
        'CollatorSelection.take_candidate_slot',
        sts.struct({
            deposit: sts.bigint(),
            target: v10000.AccountId32,
        })
    ),
}
