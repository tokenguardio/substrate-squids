import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9230 from '../v9230'

export const rebagged =  {
    name: 'VoterList.Rebagged',
    /**
     * Moved an account from one bag to another.
     */
    v9230: new EventType(
        'VoterList.Rebagged',
        sts.struct({
            who: v9230.AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        })
    ),
}

export const scoreUpdated =  {
    name: 'VoterList.ScoreUpdated',
    /**
     * Updated the score of some account to the given amount.
     */
    v9230: new EventType(
        'VoterList.ScoreUpdated',
        sts.struct({
            who: v9230.AccountId32,
            newScore: sts.bigint(),
        })
    ),
}
