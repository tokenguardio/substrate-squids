import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v13 from '../v13'

export const setHeads =  {
    name: 'Parachains.set_heads',
    /**
     *  Provide candidate receipts for parachains, in ascending order by id.
     */
    v0: new CallType(
        'Parachains.set_heads',
        sts.struct({
            heads: sts.array(() => v0.AttestedCandidate),
        })
    ),
}

export const reportDoubleVote =  {
    name: 'Parachains.report_double_vote',
    /**
     *  Provide a proof that some validator has commited a double-vote.
     * 
     *  The weight is 0; in order to avoid DoS a `SignedExtension` validation
     *  is implemented.
     */
    v0: new CallType(
        'Parachains.report_double_vote',
        sts.struct({
            report: v0.DoubleVoteReport,
        })
    ),
}

export const transferToParachain =  {
    name: 'Parachains.transfer_to_parachain',
    /**
     *  Transfer some tokens into a parachain and leave a message in the downward queue for it.
     */
    v13: new CallType(
        'Parachains.transfer_to_parachain',
        sts.struct({
            to: v13.ParaId,
            amount: v13.Balance,
            remark: v13.Remark,
        })
    ),
}

export const sendXcmpMessage =  {
    name: 'Parachains.send_xcmp_message',
    /**
     *  Send a XCMP message to the given parachain.
     * 
     *  The origin must be another parachain.
     */
    v13: new CallType(
        'Parachains.send_xcmp_message',
        sts.struct({
            to: v13.ParaId,
            msg: sts.bytes(),
        })
    ),
}
