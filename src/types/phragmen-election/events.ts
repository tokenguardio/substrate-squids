import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9050 from '../v9050'
import * as v9140 from '../v9140'

export const newTerm =  {
    name: 'PhragmenElection.NewTerm',
    /**
     *  A new term with \[new_members\]. This indicates that enough candidates existed to run
     *  the election, not that enough have has been elected. The inner value must be examined
     *  for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     *  slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     *  begin with.
     */
    v9050: new EventType(
        'PhragmenElection.NewTerm',
        sts.array(() => sts.tuple(() => [v9050.AccountId, v9050.Balance]))
    ),
    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    v9140: new EventType(
        'PhragmenElection.NewTerm',
        sts.struct({
            newMembers: sts.array(() => sts.tuple(() => [v9140.AccountId32, sts.bigint()])),
        })
    ),
}

export const emptyTerm =  {
    name: 'PhragmenElection.EmptyTerm',
    /**
     *  No (or not enough) candidates existed for this round. This is different from
     *  `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    v9050: new EventType(
        'PhragmenElection.EmptyTerm',
        sts.unit()
    ),
}

export const electionError =  {
    name: 'PhragmenElection.ElectionError',
    /**
     *  Internal error happened while trying to perform election.
     */
    v9050: new EventType(
        'PhragmenElection.ElectionError',
        sts.unit()
    ),
}

export const memberKicked =  {
    name: 'PhragmenElection.MemberKicked',
    /**
     *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
     *  `EmptyTerm`.
     */
    v9050: new EventType(
        'PhragmenElection.MemberKicked',
        v9050.AccountId
    ),
    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    v9140: new EventType(
        'PhragmenElection.MemberKicked',
        sts.struct({
            member: v9140.AccountId32,
        })
    ),
}

export const renounced =  {
    name: 'PhragmenElection.Renounced',
    /**
     *  Someone has renounced their candidacy.
     */
    v9050: new EventType(
        'PhragmenElection.Renounced',
        v9050.AccountId
    ),
    /**
     * Someone has renounced their candidacy.
     */
    v9140: new EventType(
        'PhragmenElection.Renounced',
        sts.struct({
            candidate: v9140.AccountId32,
        })
    ),
}

export const candidateSlashed =  {
    name: 'PhragmenElection.CandidateSlashed',
    /**
     *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
     *  runner-up.
     * 
     *  Note that old members and runners-up are also candidates.
     */
    v9050: new EventType(
        'PhragmenElection.CandidateSlashed',
        sts.tuple([v9050.AccountId, v9050.Balance])
    ),
    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    v9140: new EventType(
        'PhragmenElection.CandidateSlashed',
        sts.struct({
            candidate: v9140.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const seatHolderSlashed =  {
    name: 'PhragmenElection.SeatHolderSlashed',
    /**
     *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
     */
    v9050: new EventType(
        'PhragmenElection.SeatHolderSlashed',
        sts.tuple([v9050.AccountId, v9050.Balance])
    ),
    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    v9140: new EventType(
        'PhragmenElection.SeatHolderSlashed',
        sts.struct({
            seatHolder: v9140.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
