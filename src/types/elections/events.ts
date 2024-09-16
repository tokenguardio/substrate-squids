import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'

export const newTerm =  {
    name: 'Elections.NewTerm',
    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    v108: new EventType(
        'Elections.NewTerm',
        sts.struct({
            newMembers: sts.array(() => sts.tuple(() => [v108.AccountId32, sts.bigint()])),
        })
    ),
}

export const emptyTerm =  {
    name: 'Elections.EmptyTerm',
    /**
     * No (or not enough) candidates existed for this round. This is different from
     * `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    v108: new EventType(
        'Elections.EmptyTerm',
        sts.unit()
    ),
}

export const electionError =  {
    name: 'Elections.ElectionError',
    /**
     * Internal error happened while trying to perform election.
     */
    v108: new EventType(
        'Elections.ElectionError',
        sts.unit()
    ),
}

export const memberKicked =  {
    name: 'Elections.MemberKicked',
    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    v108: new EventType(
        'Elections.MemberKicked',
        sts.struct({
            member: v108.AccountId32,
        })
    ),
}

export const renounced =  {
    name: 'Elections.Renounced',
    /**
     * Someone has renounced their candidacy.
     */
    v108: new EventType(
        'Elections.Renounced',
        sts.struct({
            candidate: v108.AccountId32,
        })
    ),
}

export const candidateSlashed =  {
    name: 'Elections.CandidateSlashed',
    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    v108: new EventType(
        'Elections.CandidateSlashed',
        sts.struct({
            candidate: v108.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const seatHolderSlashed =  {
    name: 'Elections.SeatHolderSlashed',
    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    v108: new EventType(
        'Elections.SeatHolderSlashed',
        sts.struct({
            seatHolder: v108.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
