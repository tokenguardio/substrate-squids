import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v205 from '../v205'
import * as v244 from '../v244'

export const setInvulnerables =  {
    name: 'CollatorSelection.set_invulnerables',
    v100: new CallType(
        'CollatorSelection.set_invulnerables',
        sts.struct({
            new: sts.array(() => v100.AccountId32),
        })
    ),
}

export const setDesiredCandidates =  {
    name: 'CollatorSelection.set_desired_candidates',
    v100: new CallType(
        'CollatorSelection.set_desired_candidates',
        sts.struct({
            max: sts.number(),
        })
    ),
}

export const setCandidacyBond =  {
    name: 'CollatorSelection.set_candidacy_bond',
    v100: new CallType(
        'CollatorSelection.set_candidacy_bond',
        sts.struct({
            bond: sts.bigint(),
        })
    ),
}

export const registerAsCandidate =  {
    name: 'CollatorSelection.register_as_candidate',
    v100: new CallType(
        'CollatorSelection.register_as_candidate',
        sts.unit()
    ),
}

export const leaveIntent =  {
    name: 'CollatorSelection.leave_intent',
    v100: new CallType(
        'CollatorSelection.leave_intent',
        sts.unit()
    ),
}

export const addInvulnerable =  {
    name: 'CollatorSelection.add_invulnerable',
    /**
     * See [`Pallet::add_invulnerable`].
     */
    v205: new CallType(
        'CollatorSelection.add_invulnerable',
        sts.struct({
            who: v205.AccountId32,
        })
    ),
}

export const removeInvulnerable =  {
    name: 'CollatorSelection.remove_invulnerable',
    /**
     * See [`Pallet::remove_invulnerable`].
     */
    v205: new CallType(
        'CollatorSelection.remove_invulnerable',
        sts.struct({
            who: v205.AccountId32,
        })
    ),
}

export const updateBond =  {
    name: 'CollatorSelection.update_bond',
    /**
     * See [`Pallet::update_bond`].
     */
    v244: new CallType(
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
    v244: new CallType(
        'CollatorSelection.take_candidate_slot',
        sts.struct({
            deposit: sts.bigint(),
            target: v244.AccountId32,
        })
    ),
}
