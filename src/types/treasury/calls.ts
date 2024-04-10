import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v12 from '../v12'
import * as v39 from '../v39'

export const proposeSpend =  {
    name: 'Treasury.propose_spend',
    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `ProposalCount`, `origin account`
     * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     * # </weight>
     */
    v12: new CallType(
        'Treasury.propose_spend',
        sts.struct({
            value: sts.bigint(),
            beneficiary: v12.MultiAddress,
        })
    ),
}

export const rejectProposal =  {
    name: 'Treasury.reject_proposal',
    /**
     * Reject a proposed spend. The original deposit will be slashed.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `Proposals`, `rejected proposer account`
     * - DbWrites: `Proposals`, `rejected proposer account`
     * # </weight>
     */
    v12: new CallType(
        'Treasury.reject_proposal',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}

export const approveProposal =  {
    name: 'Treasury.approve_proposal',
    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1).
     * - DbReads: `Proposals`, `Approvals`
     * - DbWrite: `Approvals`
     * # </weight>
     */
    v12: new CallType(
        'Treasury.approve_proposal',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}

export const spend =  {
    name: 'Treasury.spend',
    /**
     * Propose and approve a spend of treasury funds.
     * 
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     * 
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    v39: new CallType(
        'Treasury.spend',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: v39.MultiAddress,
        })
    ),
}

export const removeApproval =  {
    name: 'Treasury.remove_approval',
    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * The original deposit will no longer be returned.
     * 
     * May only be called from `T::RejectOrigin`.
     * - `proposal_id`: The index of a proposal
     * 
     * # <weight>
     * - Complexity: O(A) where `A` is the number of approvals
     * - Db reads and writes: `Approvals`
     * # </weight>
     * 
     * Errors:
     * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
     * i.e., the proposal has not been approved. This could also mean the proposal does not
     * exist altogether, thus there is no way it would have been approved in the first place.
     */
    v39: new CallType(
        'Treasury.remove_approval',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}
