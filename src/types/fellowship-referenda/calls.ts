import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v982 from '../v982'
import * as v992 from '../v992'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'
import * as v12001 from '../v12001'

export const submit =  {
    name: 'FellowshipReferenda.submit',
    /**
     * Propose a referendum on a privileged action.
     * 
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     * 
     * Emits `Submitted`.
     */
    v982: new CallType(
        'FellowshipReferenda.submit',
        sts.struct({
            proposalOrigin: v982.OriginCaller,
            proposal: v982.Bounded,
            enactmentMoment: v982.DispatchTime,
        })
    ),
    /**
     * See [`Pallet::submit`].
     */
    v992: new CallType(
        'FellowshipReferenda.submit',
        sts.struct({
            proposalOrigin: v992.OriginCaller,
            proposal: v992.Bounded,
            enactmentMoment: v992.DispatchTime,
        })
    ),
    /**
     * See [`Pallet::submit`].
     */
    v10000: new CallType(
        'FellowshipReferenda.submit',
        sts.struct({
            proposalOrigin: v10000.OriginCaller,
            proposal: v10000.Bounded,
            enactmentMoment: v10000.DispatchTime,
        })
    ),
    /**
     * See [`Pallet::submit`].
     */
    v11000: new CallType(
        'FellowshipReferenda.submit',
        sts.struct({
            proposalOrigin: v11000.OriginCaller,
            proposal: v11000.Bounded,
            enactmentMoment: v11000.DispatchTime,
        })
    ),
    /**
     * Propose a referendum on a privileged action.
     * 
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     * 
     * Emits `Submitted`.
     */
    v12001: new CallType(
        'FellowshipReferenda.submit',
        sts.struct({
            proposalOrigin: v12001.OriginCaller,
            proposal: v12001.Bounded,
            enactmentMoment: v12001.DispatchTime,
        })
    ),
}

export const placeDecisionDeposit =  {
    name: 'FellowshipReferenda.place_decision_deposit',
    /**
     * Post the Decision Deposit for a referendum.
     * 
     * - `origin`: must be `Signed` and the account must have funds available for the
     *   referendum's track's Decision Deposit.
     * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
     *   posted.
     * 
     * Emits `DecisionDepositPlaced`.
     */
    v982: new CallType(
        'FellowshipReferenda.place_decision_deposit',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const refundDecisionDeposit =  {
    name: 'FellowshipReferenda.refund_decision_deposit',
    /**
     * Refund the Decision Deposit for a closed referendum back to the depositor.
     * 
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
     *   refunded.
     * 
     * Emits `DecisionDepositRefunded`.
     */
    v982: new CallType(
        'FellowshipReferenda.refund_decision_deposit',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const cancel =  {
    name: 'FellowshipReferenda.cancel',
    /**
     * Cancel an ongoing referendum.
     * 
     * - `origin`: must be the `CancelOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     * 
     * Emits `Cancelled`.
     */
    v982: new CallType(
        'FellowshipReferenda.cancel',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const kill =  {
    name: 'FellowshipReferenda.kill',
    /**
     * Cancel an ongoing referendum and slash the deposits.
     * 
     * - `origin`: must be the `KillOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     * 
     * Emits `Killed` and `DepositSlashed`.
     */
    v982: new CallType(
        'FellowshipReferenda.kill',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const nudgeReferendum =  {
    name: 'FellowshipReferenda.nudge_referendum',
    /**
     * Advance a referendum onto its next logical state. Only used internally.
     * 
     * - `origin`: must be `Root`.
     * - `index`: the referendum to be advanced.
     */
    v982: new CallType(
        'FellowshipReferenda.nudge_referendum',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const oneFewerDeciding =  {
    name: 'FellowshipReferenda.one_fewer_deciding',
    /**
     * Advance a track onto its next logical state. Only used internally.
     * 
     * - `origin`: must be `Root`.
     * - `track`: the track to be advanced.
     * 
     * Action item for when there is now one fewer referendum in the deciding phase and the
     * `DecidingCount` is not yet updated. This means that we should either:
     * - begin deciding another referendum (and leave `DecidingCount` alone); or
     * - decrement `DecidingCount`.
     */
    v982: new CallType(
        'FellowshipReferenda.one_fewer_deciding',
        sts.struct({
            track: sts.number(),
        })
    ),
}

export const refundSubmissionDeposit =  {
    name: 'FellowshipReferenda.refund_submission_deposit',
    /**
     * Refund the Submission Deposit for a closed referendum back to the depositor.
     * 
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
     *   refunded.
     * 
     * Emits `SubmissionDepositRefunded`.
     */
    v982: new CallType(
        'FellowshipReferenda.refund_submission_deposit',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const setMetadata =  {
    name: 'FellowshipReferenda.set_metadata',
    /**
     * Set or clear metadata of a referendum.
     * 
     * Parameters:
     * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
     *   metadata of a finished referendum.
     * - `index`:  The index of a referendum to set or clear metadata for.
     * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
     */
    v982: new CallType(
        'FellowshipReferenda.set_metadata',
        sts.struct({
            index: sts.number(),
            maybeHash: sts.option(() => v982.H256),
        })
    ),
}
