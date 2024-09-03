import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v25 from '../v25'
import * as v28 from '../v28'
import * as v9110 from '../v9110'
import * as v9250 from '../v9250'
import * as v1001002 from '../v1001002'
import * as v1002000 from '../v1002000'

export const proposeSpend =  {
    name: 'Treasury.propose_spend',
    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - Complexity: O(1)
     *  - DbReads: `ProposalCount`, `origin account`
     *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     *  # </weight>
     */
    v0: new CallType(
        'Treasury.propose_spend',
        sts.struct({
            value: sts.bigint(),
            beneficiary: v0.LookupSource,
        })
    ),
    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - Complexity: O(1)
     *  - DbReads: `ProposalCount`, `origin account`
     *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     *  # </weight>
     */
    v28: new CallType(
        'Treasury.propose_spend',
        sts.struct({
            value: sts.bigint(),
            beneficiary: v28.LookupSource,
        })
    ),
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
    v9110: new CallType(
        'Treasury.propose_spend',
        sts.struct({
            value: sts.bigint(),
            beneficiary: v9110.MultiAddress,
        })
    ),
}

export const rejectProposal =  {
    name: 'Treasury.reject_proposal',
    /**
     *  Reject a proposed spend. The original deposit will be slashed.
     * 
     *  # <weight>
     *  - Complexity: O(1)
     *  - DbReads: `Proposals`, `rejected proposer account`
     *  - DbWrites: `Proposals`, `rejected proposer account`
     *  # </weight>
     */
    v0: new CallType(
        'Treasury.reject_proposal',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}

export const approveProposal =  {
    name: 'Treasury.approve_proposal',
    /**
     *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     *  and the original deposit will be returned.
     * 
     *  # <weight>
     *  - Complexity: O(1).
     *  - DbReads: `Proposals`, `Approvals`
     *  - DbWrite: `Approvals`
     *  # </weight>
     */
    v0: new CallType(
        'Treasury.approve_proposal',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}

export const reportAwesome =  {
    name: 'Treasury.report_awesome',
    /**
     *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `TipReportDepositPerByte` for each byte in `reason`.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(R)` where `R` length of `reason`.
     *    - encoding and hashing of 'reason'
     *  - DbReads: `Reasons`, `Tips`, `who account data`
     *  - DbWrites: `Tips`, `who account data`
     *  # </weight>
     */
    v0: new CallType(
        'Treasury.report_awesome',
        sts.struct({
            reason: sts.bytes(),
            who: v0.AccountId,
        })
    ),
}

export const retractTip =  {
    name: 'Treasury.retract_tip',
    /**
     *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
     * 
     *  If successful, the original deposit will be unreserved.
     * 
     *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
     *  must have been reported by the signing account through `report_awesome` (and not
     *  through `tip_new`).
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  Emits `TipRetracted` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *    - Depends on the length of `T::Hash` which is fixed.
     *  - DbReads: `Tips`, `origin account`
     *  - DbWrites: `Reasons`, `Tips`, `origin account`
     *  # </weight>
     */
    v0: new CallType(
        'Treasury.retract_tip',
        sts.struct({
            hash: v0.Hash,
        })
    ),
}

export const tipNew =  {
    name: 'Treasury.tip_new',
    /**
     *  Give a tip for something new; no finder's fee will be taken.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *    - `O(T)`: decoding `Tipper` vec of length `T`
     *      `T` is charged as upper bound given by `ContainsLengthBound`.
     *      The actual cost depends on the implementation of `T::Tippers`.
     *    - `O(R)`: hashing and encoding of reason of length `R`
     *  - DbReads: `Tippers`, `Reasons`
     *  - DbWrites: `Reasons`, `Tips`
     *  # </weight>
     */
    v0: new CallType(
        'Treasury.tip_new',
        sts.struct({
            reason: sts.bytes(),
            who: v0.AccountId,
            tipValue: v0.BalanceOf,
        })
    ),
}

export const tip =  {
    name: 'Treasury.tip',
    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    v0: new CallType(
        'Treasury.tip',
        sts.struct({
            hash: v0.Hash,
            tipValue: v0.BalanceOf,
        })
    ),
}

export const closeTip =  {
    name: 'Treasury.close_tip',
    /**
     *  Close and payout a tip.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  The tip identified by `hash` must have finished its countdown period.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`.
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     *  - DbReads: `Tips`, `Tippers`, `tip finder`
     *  - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
     *  # </weight>
     */
    v0: new CallType(
        'Treasury.close_tip',
        sts.struct({
            hash: v0.Hash,
        })
    ),
}

export const proposeBounty =  {
    name: 'Treasury.propose_bounty',
    /**
     *  Propose a new bounty.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     *  or slashed when rejected.
     * 
     *  - `curator`: The curator account whom will manage this bounty.
     *  - `fee`: The curator fee.
     *  - `value`: The total payment amount of this bounty, curator fee included.
     *  - `description`: The description of this bounty.
     */
    v25: new CallType(
        'Treasury.propose_bounty',
        sts.struct({
            value: sts.bigint(),
            description: sts.bytes(),
        })
    ),
}

export const approveBounty =  {
    name: 'Treasury.approve_bounty',
    /**
     *  Approve a bounty proposal. At a later time, the bounty will be funded and become active
     *  and the original deposit will be returned.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    v25: new CallType(
        'Treasury.approve_bounty',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const proposeCurator =  {
    name: 'Treasury.propose_curator',
    /**
     *  Assign a curator to a funded bounty.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    v25: new CallType(
        'Treasury.propose_curator',
        sts.struct({
            bountyId: sts.number(),
            curator: v25.LookupSource,
            fee: sts.bigint(),
        })
    ),
}

export const unassignCurator =  {
    name: 'Treasury.unassign_curator',
    /**
     *  Unassign curator from a bounty.
     * 
     *  This function can only be called by the `RejectOrigin` a signed origin.
     * 
     *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
     *  or inactive. As a result, we will slash the curator when possible.
     * 
     *  If the origin is the curator, we take this as a sign they are unable to do their job and
     *  they willingly give up. We could slash them, but for now we allow them to recover their
     *  deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     *  anyone in the community to call out that a curator is not doing their due diligence, and
     *  we should pick a new curator. In this case the curator should also be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    v25: new CallType(
        'Treasury.unassign_curator',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const acceptCurator =  {
    name: 'Treasury.accept_curator',
    /**
     *  Accept the curator role for a bounty.
     *  A deposit will be reserved from curator and refund upon successful payout.
     * 
     *  May only be called from the curator.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    v25: new CallType(
        'Treasury.accept_curator',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const awardBounty =  {
    name: 'Treasury.award_bounty',
    /**
     *  Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
     * 
     *  The dispatch origin for this call must be the curator of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to award.
     *  - `beneficiary`: The beneficiary account whom will receive the payout.
     */
    v25: new CallType(
        'Treasury.award_bounty',
        sts.struct({
            bountyId: sts.number(),
            beneficiary: v25.LookupSource,
        })
    ),
}

export const claimBounty =  {
    name: 'Treasury.claim_bounty',
    /**
     *  Claim the payout from an awarded bounty after payout delay.
     * 
     *  The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to claim.
     */
    v25: new CallType(
        'Treasury.claim_bounty',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const closeBounty =  {
    name: 'Treasury.close_bounty',
    /**
     *  Cancel a proposed or active bounty. All the funds will be sent to treasury and
     *  the curator deposit will be unreserved if possible.
     * 
     *  Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     *  - `bounty_id`: Bounty ID to cancel.
     */
    v25: new CallType(
        'Treasury.close_bounty',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const extendBountyExpiry =  {
    name: 'Treasury.extend_bounty_expiry',
    /**
     *  Extend the expiry time of an active bounty.
     * 
     *  The dispatch origin for this call must be the curator of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to extend.
     *  - `remark`: additional information.
     */
    v25: new CallType(
        'Treasury.extend_bounty_expiry',
        sts.struct({
            bountyId: sts.number(),
            remark: sts.bytes(),
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
    v9220: new CallType(
        'Treasury.remove_approval',
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
    v9250: new CallType(
        'Treasury.spend',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: v9250.MultiAddress,
        })
    ),
    /**
     * See [`Pallet::spend`].
     */
    v1001002: new CallType(
        'Treasury.spend',
        sts.struct({
            assetKind: v1001002.VersionedLocatableAsset,
            amount: sts.bigint(),
            beneficiary: v1001002.VersionedMultiLocation,
            validFrom: sts.option(() => sts.number()),
        })
    ),
    /**
     * See [`Pallet::spend`].
     */
    v1002000: new CallType(
        'Treasury.spend',
        sts.struct({
            assetKind: v1002000.VersionedLocatableAsset,
            amount: sts.bigint(),
            beneficiary: v1002000.VersionedLocation,
            validFrom: sts.option(() => sts.number()),
        })
    ),
}

export const spendLocal =  {
    name: 'Treasury.spend_local',
    /**
     * See [`Pallet::spend_local`].
     */
    v1001002: new CallType(
        'Treasury.spend_local',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: v1001002.MultiAddress,
        })
    ),
}

export const payout =  {
    name: 'Treasury.payout',
    /**
     * See [`Pallet::payout`].
     */
    v1001002: new CallType(
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
    v1001002: new CallType(
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
    v1001002: new CallType(
        'Treasury.void_spend',
        sts.struct({
            index: sts.number(),
        })
    ),
}
