import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v115 from '../v115'
import * as v244 from '../v244'

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
    v100: new CallType(
        'Treasury.propose_spend',
        sts.struct({
            value: sts.bigint(),
            beneficiary: v100.AccountId32,
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
    v100: new CallType(
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
    v100: new CallType(
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
    v115: new CallType(
        'Treasury.spend',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: v115.AccountId32,
        })
    ),
    /**
     * See [`Pallet::spend`].
     */
    v244: new CallType(
        'Treasury.spend',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: v244.AccountId32,
            validFrom: sts.option(() => sts.number()),
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
    v115: new CallType(
        'Treasury.remove_approval',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}

export const spendLocal =  {
    name: 'Treasury.spend_local',
    /**
     * See [`Pallet::spend_local`].
     */
    v244: new CallType(
        'Treasury.spend_local',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: v244.AccountId32,
        })
    ),
}

export const payout =  {
    name: 'Treasury.payout',
    /**
     * See [`Pallet::payout`].
     */
    v244: new CallType(
        'Treasury.payout',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const checkStatus =  {
    name: 'Treasury.check_status',
    /**
     * See [`Pallet::check_status`].
     */
    v244: new CallType(
        'Treasury.check_status',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const voidSpend =  {
    name: 'Treasury.void_spend',
    /**
     * See [`Pallet::void_spend`].
     */
    v244: new CallType(
        'Treasury.void_spend',
        sts.struct({
            index: sts.number(),
        })
    ),
}
