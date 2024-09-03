import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v104 from '../v104'
import * as v115 from '../v115'
import * as v244 from '../v244'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     * New proposal. \[proposal_index\]
     */
    v100: new EventType(
        'Treasury.Proposed',
        sts.number()
    ),
    /**
     * New proposal.
     */
    v104: new EventType(
        'Treasury.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const spending =  {
    name: 'Treasury.Spending',
    /**
     * We have ended a spend period and will now allocate funds. \[budget_remaining\]
     */
    v100: new EventType(
        'Treasury.Spending',
        sts.bigint()
    ),
    /**
     * We have ended a spend period and will now allocate funds.
     */
    v104: new EventType(
        'Treasury.Spending',
        sts.struct({
            budgetRemaining: sts.bigint(),
        })
    ),
}

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     * Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    v100: new EventType(
        'Treasury.Awarded',
        sts.tuple([sts.number(), sts.bigint(), v100.AccountId32])
    ),
    /**
     * Some funds have been allocated.
     */
    v104: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v104.AccountId32,
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    v100: new EventType(
        'Treasury.Rejected',
        sts.tuple([sts.number(), sts.bigint()])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v104: new EventType(
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
     * Some of our funds have been burnt. \[burn\]
     */
    v100: new EventType(
        'Treasury.Burnt',
        sts.bigint()
    ),
    /**
     * Some of our funds have been burnt.
     */
    v104: new EventType(
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
     * \[budget_remaining\]
     */
    v100: new EventType(
        'Treasury.Rollover',
        sts.bigint()
    ),
    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    v104: new EventType(
        'Treasury.Rollover',
        sts.struct({
            rolloverBalance: sts.bigint(),
        })
    ),
}

export const deposit =  {
    name: 'Treasury.Deposit',
    /**
     * Some funds have been deposited. \[deposit\]
     */
    v100: new EventType(
        'Treasury.Deposit',
        sts.bigint()
    ),
    /**
     * Some funds have been deposited.
     */
    v104: new EventType(
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
    v115: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v115.AccountId32,
        })
    ),
}

export const updatedInactive =  {
    name: 'Treasury.UpdatedInactive',
    /**
     * The inactive funds of the pallet have been updated.
     */
    v160: new EventType(
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
    v244: new EventType(
        'Treasury.AssetSpendApproved',
        sts.struct({
            index: sts.number(),
            amount: sts.bigint(),
            beneficiary: v244.AccountId32,
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
    v244: new EventType(
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
    v244: new EventType(
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
    v244: new EventType(
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
    v244: new EventType(
        'Treasury.SpendProcessed',
        sts.struct({
            index: sts.number(),
        })
    ),
}
