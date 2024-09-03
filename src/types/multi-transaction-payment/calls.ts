import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v224 from '../v224'
import * as v234 from '../v234'

export const setCurrency =  {
    name: 'MultiTransactionPayment.set_currency',
    /**
     * Set selected currency for given account.
     * 
     * This allows to set a currency for an account in which all transaction fees will be paid.
     * Account balance cannot be zero.
     * 
     * Chosen currency must be in the list of accepted currencies.
     * 
     * When currency is set, fixed fee is withdrawn from the account to pay for the currency change
     * 
     * Emits `CurrencySet` event when successful.
     */
    v108: new CallType(
        'MultiTransactionPayment.set_currency',
        sts.struct({
            currency: sts.number(),
        })
    ),
}

export const addCurrency =  {
    name: 'MultiTransactionPayment.add_currency',
    /**
     * Add a currency to the list of accepted currencies.
     * 
     * Only member can perform this action.
     * 
     * Currency must not be already accepted. Core asset id cannot be explicitly added.
     * 
     * Emits `CurrencyAdded` event when successful.
     */
    v108: new CallType(
        'MultiTransactionPayment.add_currency',
        sts.struct({
            currency: sts.number(),
            price: v108.FixedU128,
        })
    ),
}

export const removeCurrency =  {
    name: 'MultiTransactionPayment.remove_currency',
    /**
     * Remove currency from the list of supported currencies
     * Only selected members can perform this action
     * 
     * Core asset cannot be removed.
     * 
     * Emits `CurrencyRemoved` when successful.
     */
    v108: new CallType(
        'MultiTransactionPayment.remove_currency',
        sts.struct({
            currency: sts.number(),
        })
    ),
}

export const resetPaymentCurrency =  {
    name: 'MultiTransactionPayment.reset_payment_currency',
    /**
     * See [`Pallet::reset_payment_currency`].
     */
    v224: new CallType(
        'MultiTransactionPayment.reset_payment_currency',
        sts.struct({
            accountId: v224.AccountId32,
        })
    ),
}

export const dispatchPermit =  {
    name: 'MultiTransactionPayment.dispatch_permit',
    /**
     * See [`Pallet::dispatch_permit`].
     */
    v234: new CallType(
        'MultiTransactionPayment.dispatch_permit',
        sts.struct({
            from: v234.H160,
            to: v234.H160,
            value: sts.bigint(),
            data: sts.bytes(),
            gasLimit: sts.bigint(),
            deadline: sts.bigint(),
            v: sts.number(),
            r: v234.H256,
            s: v234.H256,
        })
    ),
}
