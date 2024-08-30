import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v964 from '../v964'
import * as v972 from '../v972'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'

export const setMultisigConfirmAccount =  {
    name: 'Salp.set_multisig_confirm_account',
    v956: new CallType(
        'Salp.set_multisig_confirm_account',
        sts.struct({
            account: v956.AccountId32,
        })
    ),
}

export const fundSuccess =  {
    name: 'Salp.fund_success',
    v956: new CallType(
        'Salp.fund_success',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const fundFail =  {
    name: 'Salp.fund_fail',
    v956: new CallType(
        'Salp.fund_fail',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const continueFund =  {
    name: 'Salp.continue_fund',
    v956: new CallType(
        'Salp.continue_fund',
        sts.struct({
            index: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        })
    ),
}

export const fundRetire =  {
    name: 'Salp.fund_retire',
    v956: new CallType(
        'Salp.fund_retire',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const fundEnd =  {
    name: 'Salp.fund_end',
    v956: new CallType(
        'Salp.fund_end',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const create =  {
    name: 'Salp.create',
    /**
     * Create a new crowdloaning campaign for a parachain slot deposit for the current auction.
     */
    v956: new CallType(
        'Salp.create',
        sts.struct({
            index: sts.number(),
            cap: sts.bigint(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        })
    ),
}

export const edit =  {
    name: 'Salp.edit',
    /**
     * Edit the configuration for an in-progress crowdloan.
     * 
     * Can only be called by Root origin.
     */
    v956: new CallType(
        'Salp.edit',
        sts.struct({
            index: sts.number(),
            cap: sts.bigint(),
            raised: sts.bigint(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            fundStatus: sts.option(() => v956.FundStatus),
        })
    ),
}

export const contribute =  {
    name: 'Salp.contribute',
    /**
     * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
     * slot. It will be withdrawable in two instances: the parachain becomes retired; or the
     * slot is unable to be purchased and the timeout expires.
     */
    v956: new CallType(
        'Salp.contribute',
        sts.struct({
            index: sts.number(),
            value: sts.bigint(),
        })
    ),
}

export const confirmContribute =  {
    name: 'Salp.confirm_contribute',
    /**
     * Confirm contribute
     */
    v956: new CallType(
        'Salp.confirm_contribute',
        sts.struct({
            who: v956.AccountId32,
            index: sts.number(),
            isSuccess: sts.boolean(),
            messageId: sts.bytes(),
        })
    ),
    /**
     * Confirm contribute
     */
    v980: new CallType(
        'Salp.confirm_contribute',
        sts.struct({
            queryId: sts.bigint(),
            isSuccess: sts.boolean(),
        })
    ),
}

export const unlock =  {
    name: 'Salp.unlock',
    /**
     * Unlock the reserved vsToken/vsBond after fund success
     */
    v956: new CallType(
        'Salp.unlock',
        sts.struct({
            who: v956.AccountId32,
            index: sts.number(),
        })
    ),
}

export const batchUnlock =  {
    name: 'Salp.batch_unlock',
    /**
     * Unlock the reserved vsToken/vsBond after fund success
     */
    v956: new CallType(
        'Salp.batch_unlock',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const withdraw =  {
    name: 'Salp.withdraw',
    /**
     * Withdraw full balance of the parachain.
     * - `index`: The parachain to whose crowdloan the contribution was made.
     */
    v956: new CallType(
        'Salp.withdraw',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const refund =  {
    name: 'Salp.refund',
    v956: new CallType(
        'Salp.refund',
        sts.struct({
            index: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            value: sts.bigint(),
        })
    ),
}

export const redeem =  {
    name: 'Salp.redeem',
    v956: new CallType(
        'Salp.redeem',
        sts.struct({
            index: sts.number(),
            value: sts.bigint(),
        })
    ),
}

export const dissolveRefunded =  {
    name: 'Salp.dissolve_refunded',
    /**
     * Remove a fund after the retirement period has ended and all funds have been returned.
     */
    v956: new CallType(
        'Salp.dissolve_refunded',
        sts.struct({
            index: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        })
    ),
}

export const dissolve =  {
    name: 'Salp.dissolve',
    /**
     * Remove a fund after the retirement period has ended and all funds have been returned.
     */
    v956: new CallType(
        'Salp.dissolve',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const buyback =  {
    name: 'Salp.buyback',
    v956: new CallType(
        'Salp.buyback',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const unlockByVsbond =  {
    name: 'Salp.unlock_by_vsbond',
    v962: new CallType(
        'Salp.unlock_by_vsbond',
        sts.struct({
            who: v962.AccountId32,
            vsbond: v962.CurrencyId,
        })
    ),
    v980: new CallType(
        'Salp.unlock_by_vsbond',
        sts.struct({
            who: v980.AccountId32,
            vsbond: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::unlock_by_vsbond`].
     */
    v990: new CallType(
        'Salp.unlock_by_vsbond',
        sts.struct({
            who: v990.AccountId32,
            vsbond: v990.CurrencyId,
        })
    ),
}

export const unlockVstoken =  {
    name: 'Salp.unlock_vstoken',
    v964: new CallType(
        'Salp.unlock_vstoken',
        sts.struct({
            who: v964.AccountId32,
        })
    ),
}

export const confirmContribution =  {
    name: 'Salp.confirm_contribution',
    v972: new CallType(
        'Salp.confirm_contribution',
        sts.struct({
            queryId: sts.bigint(),
            response: v972.V3Response,
        })
    ),
    /**
     * See [`Pallet::confirm_contribution`].
     */
    v10000: new CallType(
        'Salp.confirm_contribution',
        sts.struct({
            queryId: sts.bigint(),
            response: v10000.V3Response,
        })
    ),
    /**
     * See [`Pallet::confirm_contribution`].
     */
    v11000: new CallType(
        'Salp.confirm_contribution',
        sts.struct({
            queryId: sts.bigint(),
            response: v11000.V4Response,
        })
    ),
}

export const buybackVstokenByStablePool =  {
    name: 'Salp.buyback_vstoken_by_stable_pool',
    v980: new CallType(
        'Salp.buyback_vstoken_by_stable_pool',
        sts.struct({
            poolId: sts.number(),
            currencyIdIn: v980.CurrencyId,
            value: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::buyback_vstoken_by_stable_pool`].
     */
    v990: new CallType(
        'Salp.buyback_vstoken_by_stable_pool',
        sts.struct({
            poolId: sts.number(),
            currencyIdIn: v990.CurrencyId,
            value: sts.bigint(),
        })
    ),
}

export const reserve =  {
    name: 'Salp.reserve',
    /**
     * See [`Pallet::reserve`].
     */
    v990: new CallType(
        'Salp.reserve',
        sts.struct({
            index: sts.number(),
            value: sts.bigint(),
            ifMint: sts.boolean(),
        })
    ),
}

export const batchHandleReserve =  {
    name: 'Salp.batch_handle_reserve',
    /**
     * See [`Pallet::batch_handle_reserve`].
     */
    v990: new CallType(
        'Salp.batch_handle_reserve',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const cancelReservation =  {
    name: 'Salp.cancel_reservation',
    /**
     * See [`Pallet::cancel_reservation`].
     */
    v990: new CallType(
        'Salp.cancel_reservation',
        sts.struct({
            index: sts.number(),
        })
    ),
}
