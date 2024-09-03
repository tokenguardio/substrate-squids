import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9180 from '../v9180'

export const disputeInitiated =  {
    name: 'ParasDisputes.DisputeInitiated',
    /**
     * A dispute has been initiated. \[candidate hash, dispute location\]
     */
    v9180: new EventType(
        'ParasDisputes.DisputeInitiated',
        sts.tuple([v9180.CandidateHash, v9180.DisputeLocation])
    ),
}

export const disputeConcluded =  {
    name: 'ParasDisputes.DisputeConcluded',
    /**
     * A dispute has concluded for or against a candidate.
     * `\[para id, candidate hash, dispute result\]`
     */
    v9180: new EventType(
        'ParasDisputes.DisputeConcluded',
        sts.tuple([v9180.CandidateHash, v9180.DisputeResult])
    ),
}

export const disputeTimedOut =  {
    name: 'ParasDisputes.DisputeTimedOut',
    /**
     * A dispute has timed out due to insufficient participation.
     * `\[para id, candidate hash\]`
     */
    v9180: new EventType(
        'ParasDisputes.DisputeTimedOut',
        v9180.CandidateHash
    ),
}

export const revert =  {
    name: 'ParasDisputes.Revert',
    /**
     * A dispute has concluded with supermajority against a candidate.
     * Block authors should no longer build on top of this head and should
     * instead revert the block at the given height. This should be the
     * number of the child of the last known valid block in the chain.
     */
    v9180: new EventType(
        'ParasDisputes.Revert',
        sts.number()
    ),
}
