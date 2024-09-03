import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v25 from '../v25'
import * as v9170 from '../v9170'
import * as v9250 from '../v9250'
import * as v1001002 from '../v1001002'
import * as v1002000 from '../v1002000'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     *  New proposal.
     */
    v0: new EventType(
        'Treasury.Proposed',
        v0.ProposalIndex
    ),
    /**
     * New proposal.
     */
    v9170: new EventType(
        'Treasury.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const spending =  {
    name: 'Treasury.Spending',
    /**
     *  We have ended a spend period and will now allocate funds.
     */
    v0: new EventType(
        'Treasury.Spending',
        v0.Balance
    ),
    /**
     * We have ended a spend period and will now allocate funds.
     */
    v9170: new EventType(
        'Treasury.Spending',
        sts.struct({
            budgetRemaining: sts.bigint(),
        })
    ),
}

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     *  Some funds have been allocated.
     */
    v0: new EventType(
        'Treasury.Awarded',
        sts.tuple([v0.ProposalIndex, v0.Balance, v0.AccountId])
    ),
    /**
     * Some funds have been allocated.
     */
    v9170: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v9170.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     *  A proposal was rejected; funds were slashed.
     */
    v0: new EventType(
        'Treasury.Rejected',
        sts.tuple([v0.ProposalIndex, v0.Balance])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v9170: new EventType(
        'Treasury.Rejected',
        sts.struct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        })
    ),
}

export const burnt =  {
    name: 'Treasury.Burnt',
    /**
     *  Some of our funds have been burnt.
     */
    v0: new EventType(
        'Treasury.Burnt',
        v0.Balance
    ),
    /**
     * Some of our funds have been burnt.
     */
    v9170: new EventType(
        'Treasury.Burnt',
        sts.struct({
            burntFunds: sts.bigint(),
        })
    ),
}

export const rollover =  {
    name: 'Treasury.Rollover',
    /**
     *  Spending has finished; this is the amount that rolls over until next spend.
     */
    v0: new EventType(
        'Treasury.Rollover',
        v0.Balance
    ),
    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    v9170: new EventType(
        'Treasury.Rollover',
        sts.struct({
            rolloverBalance: sts.bigint(),
        })
    ),
}

export const deposit =  {
    name: 'Treasury.Deposit',
    /**
     *  Some funds have been deposited.
     */
    v0: new EventType(
        'Treasury.Deposit',
        v0.Balance
    ),
    /**
     * Some funds have been deposited.
     */
    v9170: new EventType(
        'Treasury.Deposit',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const newTip =  {
    name: 'Treasury.NewTip',
    /**
     *  A new tip suggestion has been opened.
     */
    v0: new EventType(
        'Treasury.NewTip',
        v0.Hash
    ),
}

export const tipClosing =  {
    name: 'Treasury.TipClosing',
    /**
     *  A tip suggestion has reached threshold and is closing.
     */
    v0: new EventType(
        'Treasury.TipClosing',
        v0.Hash
    ),
}

export const tipClosed =  {
    name: 'Treasury.TipClosed',
    /**
     *  A tip suggestion has been closed.
     */
    v0: new EventType(
        'Treasury.TipClosed',
        sts.tuple([v0.Hash, v0.AccountId, v0.Balance])
    ),
}

export const tipRetracted =  {
    name: 'Treasury.TipRetracted',
    /**
     *  A tip suggestion has been retracted.
     */
    v0: new EventType(
        'Treasury.TipRetracted',
        v0.Hash
    ),
}

export const bountyProposed =  {
    name: 'Treasury.BountyProposed',
    /**
     *  New bounty proposal. [index]
     */
    v25: new EventType(
        'Treasury.BountyProposed',
        v25.BountyIndex
    ),
}

export const bountyRejected =  {
    name: 'Treasury.BountyRejected',
    /**
     *  A bounty proposal was rejected; funds were slashed. [index, bond]
     */
    v25: new EventType(
        'Treasury.BountyRejected',
        sts.tuple([v25.BountyIndex, v25.Balance])
    ),
}

export const bountyBecameActive =  {
    name: 'Treasury.BountyBecameActive',
    /**
     *  A bounty proposal is funded and became active. [index]
     */
    v25: new EventType(
        'Treasury.BountyBecameActive',
        v25.BountyIndex
    ),
}

export const bountyAwarded =  {
    name: 'Treasury.BountyAwarded',
    /**
     *  A bounty is awarded to a beneficiary. [index, beneficiary]
     */
    v25: new EventType(
        'Treasury.BountyAwarded',
        sts.tuple([v25.BountyIndex, v25.AccountId])
    ),
}

export const bountyClaimed =  {
    name: 'Treasury.BountyClaimed',
    /**
     *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
     */
    v25: new EventType(
        'Treasury.BountyClaimed',
        sts.tuple([v25.BountyIndex, v25.Balance, v25.AccountId])
    ),
}

export const bountyCanceled =  {
    name: 'Treasury.BountyCanceled',
    /**
     *  A bounty is cancelled. [index]
     */
    v25: new EventType(
        'Treasury.BountyCanceled',
        v25.BountyIndex
    ),
}

export const bountyExtended =  {
    name: 'Treasury.BountyExtended',
    /**
     *  A bounty expiry is extended. [index]
     */
    v25: new EventType(
        'Treasury.BountyExtended',
        v25.BountyIndex
    ),
}

export const spendApproved =  {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v9250: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v9250.AccountId32,
        })
    ),
}

export const updatedInactive =  {
    name: 'Treasury.UpdatedInactive',
    /**
     * The inactive funds of the pallet have been updated.
     */
    v9370: new EventType(
        'Treasury.UpdatedInactive',
        sts.struct({
            reactivated: sts.bigint(),
            deactivated: sts.bigint(),
        })
    ),
}

export const assetSpendApproved =  {
    name: 'Treasury.AssetSpendApproved',
    /**
     * A new asset spend proposal has been approved.
     */
    v1001002: new EventType(
        'Treasury.AssetSpendApproved',
        sts.struct({
            index: sts.number(),
            assetKind: v1001002.VersionedLocatableAsset,
            amount: sts.bigint(),
            beneficiary: v1001002.VersionedMultiLocation,
            validFrom: sts.number(),
            expireAt: sts.number(),
        })
    ),
    /**
     * A new asset spend proposal has been approved.
     */
    v1002000: new EventType(
        'Treasury.AssetSpendApproved',
        sts.struct({
            index: sts.number(),
            assetKind: v1002000.VersionedLocatableAsset,
            amount: sts.bigint(),
            beneficiary: v1002000.VersionedLocation,
            validFrom: sts.number(),
            expireAt: sts.number(),
        })
    ),
}

export const assetSpendVoided =  {
    name: 'Treasury.AssetSpendVoided',
    /**
     * An approved spend was voided.
     */
    v1001002: new EventType(
        'Treasury.AssetSpendVoided',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const paid =  {
    name: 'Treasury.Paid',
    /**
     * A payment happened.
     */
    v1001002: new EventType(
        'Treasury.Paid',
        sts.struct({
            index: sts.number(),
            paymentId: sts.bigint(),
        })
    ),
}

export const paymentFailed =  {
    name: 'Treasury.PaymentFailed',
    /**
     * A payment failed and can be retried.
     */
    v1001002: new EventType(
        'Treasury.PaymentFailed',
        sts.struct({
            index: sts.number(),
            paymentId: sts.bigint(),
        })
    ),
}

export const spendProcessed =  {
    name: 'Treasury.SpendProcessed',
    /**
     * A spend was processed and removed from the storage. It might have been successfully
     * paid or it may have expired.
     */
    v1001002: new EventType(
        'Treasury.SpendProcessed',
        sts.struct({
            index: sts.number(),
        })
    ),
}
