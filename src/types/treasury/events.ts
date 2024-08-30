import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v952 from '../v952'
import * as v994 from '../v994'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     * New proposal.
     */
    v932: new EventType(
        'Treasury.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const spending =  {
    name: 'Treasury.Spending',
    /**
     * We have ended a spend period and will now allocate funds.
     */
    v932: new EventType(
        'Treasury.Spending',
        sts.struct({
            budgetRemaining: sts.bigint(),
        })
    ),
}

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     * Some funds have been allocated.
     */
    v932: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v932.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     * A proposal was rejected; funds were slashed.
     */
    v932: new EventType(
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
     * Some of our funds have been burnt.
     */
    v932: new EventType(
        'Treasury.Burnt',
        sts.struct({
            burntFunds: sts.bigint(),
        })
    ),
}

export const rollover =  {
    name: 'Treasury.Rollover',
    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    v932: new EventType(
        'Treasury.Rollover',
        sts.struct({
            rolloverBalance: sts.bigint(),
        })
    ),
}

export const deposit =  {
    name: 'Treasury.Deposit',
    /**
     * Some funds have been deposited.
     */
    v932: new EventType(
        'Treasury.Deposit',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const spendApproved =  {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v952: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v952.AccountId32,
        })
    ),
}

export const updatedInactive =  {
    name: 'Treasury.UpdatedInactive',
    /**
     * The inactive funds of the pallet have been updated.
     */
    v970: new EventType(
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
    v994: new EventType(
        'Treasury.AssetSpendApproved',
        sts.struct({
            index: sts.number(),
            amount: sts.bigint(),
            beneficiary: v994.AccountId32,
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
    v994: new EventType(
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
    v994: new EventType(
        'Treasury.Paid',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const paymentFailed =  {
    name: 'Treasury.PaymentFailed',
    /**
     * A payment failed and can be retried.
     */
    v994: new EventType(
        'Treasury.PaymentFailed',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const spendProcessed =  {
    name: 'Treasury.SpendProcessed',
    /**
     * A spend was processed and removed from the storage. It might have been successfully
     * paid or it may have expired.
     */
    v994: new EventType(
        'Treasury.SpendProcessed',
        sts.struct({
            index: sts.number(),
        })
    ),
}
