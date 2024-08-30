import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v982 from '../v982'
import * as v11000 from '../v11000'

export const memberAdded =  {
    name: 'FellowshipCollective.MemberAdded',
    /**
     * A member `who` has been added.
     */
    v982: new EventType(
        'FellowshipCollective.MemberAdded',
        sts.struct({
            who: v982.AccountId32,
        })
    ),
}

export const rankChanged =  {
    name: 'FellowshipCollective.RankChanged',
    /**
     * The member `who`se rank has been changed to the given `rank`.
     */
    v982: new EventType(
        'FellowshipCollective.RankChanged',
        sts.struct({
            who: v982.AccountId32,
            rank: sts.number(),
        })
    ),
}

export const memberRemoved =  {
    name: 'FellowshipCollective.MemberRemoved',
    /**
     * The member `who` of given `rank` has been removed from the collective.
     */
    v982: new EventType(
        'FellowshipCollective.MemberRemoved',
        sts.struct({
            who: v982.AccountId32,
            rank: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'FellowshipCollective.Voted',
    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    v982: new EventType(
        'FellowshipCollective.Voted',
        sts.struct({
            who: v982.AccountId32,
            poll: sts.number(),
            vote: v982.VoteRecord,
            tally: v982.Type_429,
        })
    ),
}

export const memberExchanged =  {
    name: 'FellowshipCollective.MemberExchanged',
    /**
     * The member `who` had their `AccountId` changed to `new_who`.
     */
    v11000: new EventType(
        'FellowshipCollective.MemberExchanged',
        sts.struct({
            who: v11000.AccountId32,
            newWho: v11000.AccountId32,
        })
    ),
}
