import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v27 from '../v27'
import * as v28 from '../v28'

export const newTerm =  {
    name: 'ElectionsPhragmen.NewTerm',
    /**
     *  A new term with new members. This indicates that enough candidates existed to run the
     *  election, not that enough have has been elected. The inner value must be examined for
     *  this purpose. A `NewTerm([])` indicates that some candidates got their bond slashed and
     *  none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
     */
    v0: new EventType(
        'ElectionsPhragmen.NewTerm',
        sts.array(() => sts.tuple(() => [v0.AccountId, v0.Balance]))
    ),
}

export const emptyTerm =  {
    name: 'ElectionsPhragmen.EmptyTerm',
    /**
     *  No (or not enough) candidates existed for this round. This is different from
     *  `NewTerm([])`. See the description of `NewTerm`.
     */
    v0: new EventType(
        'ElectionsPhragmen.EmptyTerm',
        sts.unit()
    ),
}

export const memberKicked =  {
    name: 'ElectionsPhragmen.MemberKicked',
    /**
     *  A member has been removed. This should always be followed by either `NewTerm` ot
     *  `EmptyTerm`.
     */
    v0: new EventType(
        'ElectionsPhragmen.MemberKicked',
        v0.AccountId
    ),
}

export const memberRenounced =  {
    name: 'ElectionsPhragmen.MemberRenounced',
    /**
     *  A member has renounced their candidacy.
     */
    v0: new EventType(
        'ElectionsPhragmen.MemberRenounced',
        v0.AccountId
    ),
}

export const voterReported =  {
    name: 'ElectionsPhragmen.VoterReported',
    /**
     *  A voter (first element) was reported (byt the second element) with the the report being
     *  successful or not (third element).
     */
    v0: new EventType(
        'ElectionsPhragmen.VoterReported',
        sts.tuple([v0.AccountId, v0.AccountId, sts.boolean()])
    ),
}

export const electionError =  {
    name: 'ElectionsPhragmen.ElectionError',
    /**
     *  Internal error happened while trying to perform election.
     */
    v25: new EventType(
        'ElectionsPhragmen.ElectionError',
        sts.unit()
    ),
}

export const candidateSlashed =  {
    name: 'ElectionsPhragmen.CandidateSlashed',
    /**
     *  A candidate was slashed due to failing to obtain a seat as member or runner-up
     */
    v27: new EventType(
        'ElectionsPhragmen.CandidateSlashed',
        sts.tuple([v27.AccountId, v27.Balance])
    ),
}

export const seatHolderSlashed =  {
    name: 'ElectionsPhragmen.SeatHolderSlashed',
    /**
     *  A seat holder (member or runner-up) was slashed due to failing to retaining their position.
     */
    v27: new EventType(
        'ElectionsPhragmen.SeatHolderSlashed',
        sts.tuple([v27.AccountId, v27.Balance])
    ),
}

export const renounced =  {
    name: 'ElectionsPhragmen.Renounced',
    /**
     *  Someone has renounced their candidacy.
     */
    v28: new EventType(
        'ElectionsPhragmen.Renounced',
        v28.AccountId
    ),
}
