import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v982 from '../v982'
import * as v990 from '../v990'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'

export const voted =  {
    name: 'VtokenVoting.Voted',
    v982: new EventType(
        'VtokenVoting.Voted',
        sts.struct({
            who: v982.AccountId32,
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
            newVote: v982.Type_365,
            delegatorVote: v982.Type_365,
        })
    ),
    v990: new EventType(
        'VtokenVoting.Voted',
        sts.struct({
            who: v990.AccountId32,
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
            tokenVote: v990.Type_369,
            delegatorVote: v990.Type_369,
        })
    ),
}

export const unlocked =  {
    name: 'VtokenVoting.Unlocked',
    v982: new EventType(
        'VtokenVoting.Unlocked',
        sts.struct({
            who: v982.AccountId32,
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
        })
    ),
    v990: new EventType(
        'VtokenVoting.Unlocked',
        sts.struct({
            who: v990.AccountId32,
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
        })
    ),
}

export const delegatorVoteRemoved =  {
    name: 'VtokenVoting.DelegatorVoteRemoved',
    v982: new EventType(
        'VtokenVoting.DelegatorVoteRemoved',
        sts.struct({
            who: v982.AccountId32,
            vtoken: v982.CurrencyId,
            derivativeIndex: sts.number(),
        })
    ),
    v990: new EventType(
        'VtokenVoting.DelegatorVoteRemoved',
        sts.struct({
            who: v990.AccountId32,
            vtoken: v990.CurrencyId,
            derivativeIndex: sts.number(),
        })
    ),
}

export const delegatorRoleSet =  {
    name: 'VtokenVoting.DelegatorRoleSet',
    v982: new EventType(
        'VtokenVoting.DelegatorRoleSet',
        sts.struct({
            vtoken: v982.CurrencyId,
            role: v982.VoteRole,
            derivativeIndex: sts.number(),
        })
    ),
}

export const referendumInfoCreated =  {
    name: 'VtokenVoting.ReferendumInfoCreated',
    v982: new EventType(
        'VtokenVoting.ReferendumInfoCreated',
        sts.struct({
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
            info: v982.ReferendumInfo,
        })
    ),
    v990: new EventType(
        'VtokenVoting.ReferendumInfoCreated',
        sts.struct({
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
            info: v990.ReferendumInfo,
        })
    ),
}

export const referendumInfoSet =  {
    name: 'VtokenVoting.ReferendumInfoSet',
    v982: new EventType(
        'VtokenVoting.ReferendumInfoSet',
        sts.struct({
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
            info: v982.ReferendumInfo,
        })
    ),
    v990: new EventType(
        'VtokenVoting.ReferendumInfoSet',
        sts.struct({
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
            info: v990.ReferendumInfo,
        })
    ),
}

export const voteLockingPeriodSet =  {
    name: 'VtokenVoting.VoteLockingPeriodSet',
    v982: new EventType(
        'VtokenVoting.VoteLockingPeriodSet',
        sts.struct({
            vtoken: v982.CurrencyId,
            lockingPeriod: sts.number(),
        })
    ),
    v990: new EventType(
        'VtokenVoting.VoteLockingPeriodSet',
        sts.struct({
            vtoken: v990.CurrencyId,
            lockingPeriod: sts.number(),
        })
    ),
}

export const undecidingTimeoutSet =  {
    name: 'VtokenVoting.UndecidingTimeoutSet',
    v982: new EventType(
        'VtokenVoting.UndecidingTimeoutSet',
        sts.struct({
            vtoken: v982.CurrencyId,
            undecidingTimeout: sts.number(),
        })
    ),
    v990: new EventType(
        'VtokenVoting.UndecidingTimeoutSet',
        sts.struct({
            vtoken: v990.CurrencyId,
            undecidingTimeout: sts.number(),
        })
    ),
}

export const referendumKilled =  {
    name: 'VtokenVoting.ReferendumKilled',
    v982: new EventType(
        'VtokenVoting.ReferendumKilled',
        sts.struct({
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
        })
    ),
    v990: new EventType(
        'VtokenVoting.ReferendumKilled',
        sts.struct({
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
        })
    ),
}

export const voteNotified =  {
    name: 'VtokenVoting.VoteNotified',
    v982: new EventType(
        'VtokenVoting.VoteNotified',
        sts.struct({
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
            success: sts.boolean(),
        })
    ),
    v990: new EventType(
        'VtokenVoting.VoteNotified',
        sts.struct({
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
            success: sts.boolean(),
        })
    ),
}

export const delegatorVoteRemovedNotified =  {
    name: 'VtokenVoting.DelegatorVoteRemovedNotified',
    v982: new EventType(
        'VtokenVoting.DelegatorVoteRemovedNotified',
        sts.struct({
            vtoken: v982.CurrencyId,
            pollIndex: sts.number(),
            success: sts.boolean(),
        })
    ),
    v990: new EventType(
        'VtokenVoting.DelegatorVoteRemovedNotified',
        sts.struct({
            vtoken: v990.CurrencyId,
            pollIndex: sts.number(),
            success: sts.boolean(),
        })
    ),
}

export const responseReceived =  {
    name: 'VtokenVoting.ResponseReceived',
    v982: new EventType(
        'VtokenVoting.ResponseReceived',
        sts.struct({
            responder: v982.V3MultiLocation,
            queryId: sts.bigint(),
            response: v982.V3Response,
        })
    ),
    v10000: new EventType(
        'VtokenVoting.ResponseReceived',
        sts.struct({
            responder: v10000.V3MultiLocation,
            queryId: sts.bigint(),
            response: v10000.V3Response,
        })
    ),
    v11000: new EventType(
        'VtokenVoting.ResponseReceived',
        sts.struct({
            responder: v11000.V4Location,
            queryId: sts.bigint(),
            response: v11000.V4Response,
        })
    ),
}

export const delegatorAdded =  {
    name: 'VtokenVoting.DelegatorAdded',
    v990: new EventType(
        'VtokenVoting.DelegatorAdded',
        sts.struct({
            vtoken: v990.CurrencyId,
            derivativeIndex: sts.number(),
        })
    ),
}

export const voteCapRatioSet =  {
    name: 'VtokenVoting.VoteCapRatioSet',
    v990: new EventType(
        'VtokenVoting.VoteCapRatioSet',
        sts.struct({
            vtoken: v990.CurrencyId,
            voteCapRatio: v990.Perbill,
        })
    ),
}
