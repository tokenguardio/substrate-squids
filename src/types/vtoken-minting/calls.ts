import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v970 from '../v970'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v992 from '../v992'
import * as v10000 from '../v10000'

export const mint =  {
    name: 'VtokenMinting.mint',
    v956: new CallType(
        'VtokenMinting.mint',
        sts.struct({
            tokenId: v956.CurrencyId,
            tokenAmount: sts.bigint(),
        })
    ),
    v962: new CallType(
        'VtokenMinting.mint',
        sts.struct({
            tokenId: v962.CurrencyId,
            tokenAmount: sts.bigint(),
        })
    ),
    v980: new CallType(
        'VtokenMinting.mint',
        sts.struct({
            tokenId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            remark: sts.bytes(),
        })
    ),
    /**
     * See [`Pallet::mint`].
     */
    v990: new CallType(
        'VtokenMinting.mint',
        sts.struct({
            tokenId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            remark: sts.bytes(),
        })
    ),
    /**
     * See [`Pallet::mint`].
     */
    v992: new CallType(
        'VtokenMinting.mint',
        sts.struct({
            tokenId: v992.CurrencyId,
            tokenAmount: sts.bigint(),
            remark: sts.bytes(),
            channelId: sts.option(() => sts.number()),
        })
    ),
}

export const redeem =  {
    name: 'VtokenMinting.redeem',
    v956: new CallType(
        'VtokenMinting.redeem',
        sts.struct({
            vtokenId: v956.CurrencyId,
            vtokenAmount: sts.bigint(),
        })
    ),
    v962: new CallType(
        'VtokenMinting.redeem',
        sts.struct({
            vtokenId: v962.CurrencyId,
            vtokenAmount: sts.bigint(),
        })
    ),
    v980: new CallType(
        'VtokenMinting.redeem',
        sts.struct({
            vtokenId: v980.CurrencyId,
            vtokenAmount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::redeem`].
     */
    v990: new CallType(
        'VtokenMinting.redeem',
        sts.struct({
            vtokenId: v990.CurrencyId,
            vtokenAmount: sts.bigint(),
        })
    ),
}

export const rebond =  {
    name: 'VtokenMinting.rebond',
    v956: new CallType(
        'VtokenMinting.rebond',
        sts.struct({
            tokenId: v956.CurrencyId,
            tokenAmount: sts.bigint(),
        })
    ),
    v962: new CallType(
        'VtokenMinting.rebond',
        sts.struct({
            tokenId: v962.CurrencyId,
            tokenAmount: sts.bigint(),
        })
    ),
    v980: new CallType(
        'VtokenMinting.rebond',
        sts.struct({
            tokenId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::rebond`].
     */
    v990: new CallType(
        'VtokenMinting.rebond',
        sts.struct({
            tokenId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
        })
    ),
}

export const rebondByUnlockId =  {
    name: 'VtokenMinting.rebond_by_unlock_id',
    v956: new CallType(
        'VtokenMinting.rebond_by_unlock_id',
        sts.struct({
            tokenId: v956.CurrencyId,
            unlockId: sts.number(),
        })
    ),
    v962: new CallType(
        'VtokenMinting.rebond_by_unlock_id',
        sts.struct({
            tokenId: v962.CurrencyId,
            unlockId: sts.number(),
        })
    ),
    v980: new CallType(
        'VtokenMinting.rebond_by_unlock_id',
        sts.struct({
            tokenId: v980.CurrencyId,
            unlockId: sts.number(),
        })
    ),
    /**
     * See [`Pallet::rebond_by_unlock_id`].
     */
    v990: new CallType(
        'VtokenMinting.rebond_by_unlock_id',
        sts.struct({
            tokenId: v990.CurrencyId,
            unlockId: sts.number(),
        })
    ),
}

export const setUnlockDuration =  {
    name: 'VtokenMinting.set_unlock_duration',
    v956: new CallType(
        'VtokenMinting.set_unlock_duration',
        sts.struct({
            tokenId: v956.CurrencyId,
            unlockDuration: v956.TimeUnit,
        })
    ),
    v962: new CallType(
        'VtokenMinting.set_unlock_duration',
        sts.struct({
            tokenId: v962.CurrencyId,
            unlockDuration: v962.TimeUnit,
        })
    ),
    v970: new CallType(
        'VtokenMinting.set_unlock_duration',
        sts.struct({
            tokenId: v970.CurrencyId,
            unlockDuration: v970.TimeUnit,
        })
    ),
    v980: new CallType(
        'VtokenMinting.set_unlock_duration',
        sts.struct({
            tokenId: v980.CurrencyId,
            unlockDuration: v980.TimeUnit,
        })
    ),
    /**
     * See [`Pallet::set_unlock_duration`].
     */
    v990: new CallType(
        'VtokenMinting.set_unlock_duration',
        sts.struct({
            tokenId: v990.CurrencyId,
            unlockDuration: v990.TimeUnit,
        })
    ),
}

export const setMinimumMint =  {
    name: 'VtokenMinting.set_minimum_mint',
    v956: new CallType(
        'VtokenMinting.set_minimum_mint',
        sts.struct({
            tokenId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new CallType(
        'VtokenMinting.set_minimum_mint',
        sts.struct({
            tokenId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new CallType(
        'VtokenMinting.set_minimum_mint',
        sts.struct({
            tokenId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::set_minimum_mint`].
     */
    v990: new CallType(
        'VtokenMinting.set_minimum_mint',
        sts.struct({
            tokenId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const setMinimumRedeem =  {
    name: 'VtokenMinting.set_minimum_redeem',
    v956: new CallType(
        'VtokenMinting.set_minimum_redeem',
        sts.struct({
            tokenId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new CallType(
        'VtokenMinting.set_minimum_redeem',
        sts.struct({
            tokenId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new CallType(
        'VtokenMinting.set_minimum_redeem',
        sts.struct({
            tokenId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::set_minimum_redeem`].
     */
    v990: new CallType(
        'VtokenMinting.set_minimum_redeem',
        sts.struct({
            tokenId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const addSupportRebondToken =  {
    name: 'VtokenMinting.add_support_rebond_token',
    v956: new CallType(
        'VtokenMinting.add_support_rebond_token',
        sts.struct({
            tokenId: v956.CurrencyId,
        })
    ),
    v962: new CallType(
        'VtokenMinting.add_support_rebond_token',
        sts.struct({
            tokenId: v962.CurrencyId,
        })
    ),
    v980: new CallType(
        'VtokenMinting.add_support_rebond_token',
        sts.struct({
            tokenId: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::add_support_rebond_token`].
     */
    v990: new CallType(
        'VtokenMinting.add_support_rebond_token',
        sts.struct({
            tokenId: v990.CurrencyId,
        })
    ),
}

export const removeSupportRebondToken =  {
    name: 'VtokenMinting.remove_support_rebond_token',
    v956: new CallType(
        'VtokenMinting.remove_support_rebond_token',
        sts.struct({
            tokenId: v956.CurrencyId,
        })
    ),
    v962: new CallType(
        'VtokenMinting.remove_support_rebond_token',
        sts.struct({
            tokenId: v962.CurrencyId,
        })
    ),
    v980: new CallType(
        'VtokenMinting.remove_support_rebond_token',
        sts.struct({
            tokenId: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::remove_support_rebond_token`].
     */
    v990: new CallType(
        'VtokenMinting.remove_support_rebond_token',
        sts.struct({
            tokenId: v990.CurrencyId,
        })
    ),
}

export const setFees =  {
    name: 'VtokenMinting.set_fees',
    v956: new CallType(
        'VtokenMinting.set_fees',
        sts.struct({
            mintFee: v956.Permill,
            redeemFee: v956.Permill,
        })
    ),
}

export const setHookIterationLimit =  {
    name: 'VtokenMinting.set_hook_iteration_limit',
    v956: new CallType(
        'VtokenMinting.set_hook_iteration_limit',
        sts.struct({
            limit: sts.number(),
        })
    ),
}

export const setUnlockingTotal =  {
    name: 'VtokenMinting.set_unlocking_total',
    v956: new CallType(
        'VtokenMinting.set_unlocking_total',
        sts.struct({
            tokenId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new CallType(
        'VtokenMinting.set_unlocking_total',
        sts.struct({
            tokenId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new CallType(
        'VtokenMinting.set_unlocking_total',
        sts.struct({
            tokenId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::set_unlocking_total`].
     */
    v990: new CallType(
        'VtokenMinting.set_unlocking_total',
        sts.struct({
            tokenId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const setMinTimeUnit =  {
    name: 'VtokenMinting.set_min_time_unit',
    v956: new CallType(
        'VtokenMinting.set_min_time_unit',
        sts.struct({
            tokenId: v956.CurrencyId,
            timeUnit: v956.TimeUnit,
        })
    ),
    v962: new CallType(
        'VtokenMinting.set_min_time_unit',
        sts.struct({
            tokenId: v962.CurrencyId,
            timeUnit: v962.TimeUnit,
        })
    ),
    v970: new CallType(
        'VtokenMinting.set_min_time_unit',
        sts.struct({
            tokenId: v970.CurrencyId,
            timeUnit: v970.TimeUnit,
        })
    ),
    v980: new CallType(
        'VtokenMinting.set_min_time_unit',
        sts.struct({
            tokenId: v980.CurrencyId,
            timeUnit: v980.TimeUnit,
        })
    ),
    /**
     * See [`Pallet::set_min_time_unit`].
     */
    v990: new CallType(
        'VtokenMinting.set_min_time_unit',
        sts.struct({
            tokenId: v990.CurrencyId,
            timeUnit: v990.TimeUnit,
        })
    ),
}

export const recreateCurrencyOngoingTimeUnit =  {
    name: 'VtokenMinting.recreate_currency_ongoing_time_unit',
    /**
     * See [`Pallet::recreate_currency_ongoing_time_unit`].
     */
    v992: new CallType(
        'VtokenMinting.recreate_currency_ongoing_time_unit',
        sts.struct({
            tokenId: v992.CurrencyId,
            timeUnit: v992.TimeUnit,
        })
    ),
}

export const mintWithLock =  {
    name: 'VtokenMinting.mint_with_lock',
    /**
     * See [`Pallet::mint_with_lock`].
     */
    v10000: new CallType(
        'VtokenMinting.mint_with_lock',
        sts.struct({
            tokenId: v10000.CurrencyId,
            tokenAmount: sts.bigint(),
            remark: sts.bytes(),
            channelId: sts.option(() => sts.number()),
        })
    ),
}

export const unlockIncentiveMintedVtoken =  {
    name: 'VtokenMinting.unlock_incentive_minted_vtoken',
    /**
     * See [`Pallet::unlock_incentive_minted_vtoken`].
     */
    v10000: new CallType(
        'VtokenMinting.unlock_incentive_minted_vtoken',
        sts.struct({
            vtokenId: v10000.CurrencyId,
        })
    ),
}

export const setIncentiveCoef =  {
    name: 'VtokenMinting.set_incentive_coef',
    /**
     * See [`Pallet::set_incentive_coef`].
     */
    v10000: new CallType(
        'VtokenMinting.set_incentive_coef',
        sts.struct({
            vtokenId: v10000.CurrencyId,
            newCoefOp: sts.option(() => sts.bigint()),
        })
    ),
}

export const setVtokenIncentiveLockBlocks =  {
    name: 'VtokenMinting.set_vtoken_incentive_lock_blocks',
    /**
     * See [`Pallet::set_vtoken_incentive_lock_blocks`].
     */
    v10000: new CallType(
        'VtokenMinting.set_vtoken_incentive_lock_blocks',
        sts.struct({
            vtokenId: v10000.CurrencyId,
            newBlockesOp: sts.option(() => sts.number()),
        })
    ),
}
