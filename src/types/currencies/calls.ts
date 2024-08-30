import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const transfer =  {
    name: 'Currencies.transfer',
    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    v952: new CallType(
        'Currencies.transfer',
        sts.struct({
            dest: v952.MultiAddress,
            currencyId: v952.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    v956: new CallType(
        'Currencies.transfer',
        sts.struct({
            dest: v956.MultiAddress,
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    v962: new CallType(
        'Currencies.transfer',
        sts.struct({
            dest: v962.MultiAddress,
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    v980: new CallType(
        'Currencies.transfer',
        sts.struct({
            dest: v980.MultiAddress,
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::transfer`].
     */
    v990: new CallType(
        'Currencies.transfer',
        sts.struct({
            dest: v990.MultiAddress,
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const transferNativeCurrency =  {
    name: 'Currencies.transfer_native_currency',
    /**
     * Transfer some native currency to another account.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    v952: new CallType(
        'Currencies.transfer_native_currency',
        sts.struct({
            dest: v952.MultiAddress,
            amount: sts.bigint(),
        })
    ),
}

export const updateBalance =  {
    name: 'Currencies.update_balance',
    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    v952: new CallType(
        'Currencies.update_balance',
        sts.struct({
            who: v952.MultiAddress,
            currencyId: v952.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    v956: new CallType(
        'Currencies.update_balance',
        sts.struct({
            who: v956.MultiAddress,
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    v962: new CallType(
        'Currencies.update_balance',
        sts.struct({
            who: v962.MultiAddress,
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    v980: new CallType(
        'Currencies.update_balance',
        sts.struct({
            who: v980.MultiAddress,
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::update_balance`].
     */
    v990: new CallType(
        'Currencies.update_balance',
        sts.struct({
            who: v990.MultiAddress,
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}
