import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9430 from '../v9430'

export const reportDisputeLostUnsigned =  {
    name: 'ParasSlashing.report_dispute_lost_unsigned',
    v9430: new CallType(
        'ParasSlashing.report_dispute_lost_unsigned',
        sts.struct({
            disputeProof: v9430.DisputeProof,
            keyOwnerProof: v9430.MembershipProof,
        })
    ),
}
