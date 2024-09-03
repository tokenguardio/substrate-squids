import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9430 from '../v9430'

export const candidateBacked =  {
    name: 'ParaInclusion.CandidateBacked',
    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    v9110: new EventType(
        'ParaInclusion.CandidateBacked',
        sts.tuple([v9110.V1CandidateReceipt, v9110.HeadData, v9110.V1CoreIndex, v9110.V1GroupIndex])
    ),
}

export const candidateIncluded =  {
    name: 'ParaInclusion.CandidateIncluded',
    /**
     * A candidate was included. `[candidate, head_data]`
     */
    v9110: new EventType(
        'ParaInclusion.CandidateIncluded',
        sts.tuple([v9110.V1CandidateReceipt, v9110.HeadData, v9110.V1CoreIndex, v9110.V1GroupIndex])
    ),
}

export const candidateTimedOut =  {
    name: 'ParaInclusion.CandidateTimedOut',
    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    v9110: new EventType(
        'ParaInclusion.CandidateTimedOut',
        sts.tuple([v9110.V1CandidateReceipt, v9110.HeadData, v9110.V1CoreIndex])
    ),
}

export const upwardMessagesReceived =  {
    name: 'ParaInclusion.UpwardMessagesReceived',
    /**
     * Some upward messages have been received and will be processed.
     */
    v9430: new EventType(
        'ParaInclusion.UpwardMessagesReceived',
        sts.struct({
            from: v9430.Id,
            count: sts.number(),
        })
    ),
}
