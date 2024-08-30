import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v982 from '../v982'
import * as v990 from '../v990'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'
import * as v12001 from '../v12001'

export const vote =  {
    name: 'VtokenVoting.vote',
    v982: new CallType(
        'VtokenVoting.vote',
        sts.struct({
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
            vote: v982.Type_365,
        })
    ),
    /**
     * See [`Pallet::vote`].
     */
    v990: new CallType(
        'VtokenVoting.vote',
        sts.struct({
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
            vtokenVote: v990.Type_369,
        })
    ),
}

export const unlock =  {
    name: 'VtokenVoting.unlock',
    v982: new CallType(
        'VtokenVoting.unlock',
        sts.struct({
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
        })
    ),
    /**
     * See [`Pallet::unlock`].
     */
    v990: new CallType(
        'VtokenVoting.unlock',
        sts.struct({
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
        })
    ),
}

export const removeDelegatorVote =  {
    name: 'VtokenVoting.remove_delegator_vote',
    v982: new CallType(
        'VtokenVoting.remove_delegator_vote',
        sts.struct({
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
            derivativeIndex: sts.number(),
        })
    ),
    /**
     * See [`Pallet::remove_delegator_vote`].
     */
    v990: new CallType(
        'VtokenVoting.remove_delegator_vote',
        sts.struct({
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
            derivativeIndex: sts.number(),
        })
    ),
    v12001: new CallType(
        'VtokenVoting.remove_delegator_vote',
        sts.struct({
            vtoken: v12001.CurrencyId,
            class: sts.number(),
            pollIndex: sts.number(),
            derivativeIndex: sts.number(),
        })
    ),
}

export const killReferendum =  {
    name: 'VtokenVoting.kill_referendum',
    v982: new CallType(
        'VtokenVoting.kill_referendum',
        sts.struct({
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
        })
    ),
    /**
     * See [`Pallet::kill_referendum`].
     */
    v990: new CallType(
        'VtokenVoting.kill_referendum',
        sts.struct({
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
        })
    ),
}

export const setDelegatorRole =  {
    name: 'VtokenVoting.set_delegator_role',
    v982: new CallType(
        'VtokenVoting.set_delegator_role',
        sts.struct({
            vtoken: v982.CurrencyId,
            derivativeIndex: sts.number(),
            voteRole: v982.VoteRole,
        })
    ),
}

export const setReferendumStatus =  {
    name: 'VtokenVoting.set_referendum_status',
    v982: new CallType(
        'VtokenVoting.set_referendum_status',
        sts.struct({
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
            info: v982.ReferendumInfo,
        })
    ),
    /**
     * See [`Pallet::set_referendum_status`].
     */
    v990: new CallType(
        'VtokenVoting.set_referendum_status',
        sts.struct({
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
            info: v990.ReferendumInfo,
        })
    ),
}

export const setVoteLockingPeriod =  {
    name: 'VtokenVoting.set_vote_locking_period',
    v982: new CallType(
        'VtokenVoting.set_vote_locking_period',
        sts.struct({
            vtoken: v982.CurrencyId,
            lockingPeriod: sts.number(),
        })
    ),
    /**
     * See [`Pallet::set_vote_locking_period`].
     */
    v990: new CallType(
        'VtokenVoting.set_vote_locking_period',
        sts.struct({
            vtoken: v990.CurrencyId,
            lockingPeriod: sts.number(),
        })
    ),
}

export const setUndecidingTimeout =  {
    name: 'VtokenVoting.set_undeciding_timeout',
    v982: new CallType(
        'VtokenVoting.set_undeciding_timeout',
        sts.struct({
            vtoken: v982.CurrencyId,
            undecidingTimeout: sts.number(),
        })
    ),
    /**
     * See [`Pallet::set_undeciding_timeout`].
     */
    v990: new CallType(
        'VtokenVoting.set_undeciding_timeout',
        sts.struct({
            vtoken: v990.CurrencyId,
            undecidingTimeout: sts.number(),
        })
    ),
}

export const notifyVote =  {
    name: 'VtokenVoting.notify_vote',
    v982: new CallType(
        'VtokenVoting.notify_vote',
        sts.struct({
            queryId: sts.bigint(),
            response: v982.V3Response,
        })
    ),
    /**
     * See [`Pallet::notify_vote`].
     */
    v10000: new CallType(
        'VtokenVoting.notify_vote',
        sts.struct({
            queryId: sts.bigint(),
            response: v10000.V3Response,
        })
    ),
    /**
     * See [`Pallet::notify_vote`].
     */
    v11000: new CallType(
        'VtokenVoting.notify_vote',
        sts.struct({
            queryId: sts.bigint(),
            response: v11000.V4Response,
        })
    ),
}

export const notifyRemoveDelegatorVote =  {
    name: 'VtokenVoting.notify_remove_delegator_vote',
    v982: new CallType(
        'VtokenVoting.notify_remove_delegator_vote',
        sts.struct({
            queryId: sts.bigint(),
            response: v982.V3Response,
        })
    ),
    /**
     * See [`Pallet::notify_remove_delegator_vote`].
     */
    v10000: new CallType(
        'VtokenVoting.notify_remove_delegator_vote',
        sts.struct({
            queryId: sts.bigint(),
            response: v10000.V3Response,
        })
    ),
    /**
     * See [`Pallet::notify_remove_delegator_vote`].
     */
    v11000: new CallType(
        'VtokenVoting.notify_remove_delegator_vote',
        sts.struct({
            queryId: sts.bigint(),
            response: v11000.V4Response,
        })
    ),
}

export const addDelegator =  {
    name: 'VtokenVoting.add_delegator',
    /**
     * See [`Pallet::add_delegator`].
     */
    v990: new CallType(
        'VtokenVoting.add_delegator',
        sts.struct({
            vtoken: v990.CurrencyId,
            derivativeIndex: sts.number(),
        })
    ),
}

export const setVoteCapRatio =  {
    name: 'VtokenVoting.set_vote_cap_ratio',
    /**
     * See [`Pallet::set_vote_cap_ratio`].
     */
    v990: new CallType(
        'VtokenVoting.set_vote_cap_ratio',
        sts.struct({
            vtoken: v990.CurrencyId,
            voteCapRatio: v990.Perbill,
        })
    ),
}
