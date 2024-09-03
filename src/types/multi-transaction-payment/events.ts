import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v115 from '../v115'

export const currencySet =  {
    name: 'MultiTransactionPayment.CurrencySet',
    /**
     * CurrencySet
     * [who, currency]
     */
    v108: new EventType(
        'MultiTransactionPayment.CurrencySet',
        sts.tuple([v108.AccountId32, sts.number()])
    ),
    /**
     * CurrencySet
     * [who, currency]
     */
    v115: new EventType(
        'MultiTransactionPayment.CurrencySet',
        sts.struct({
            accountId: v115.AccountId32,
            assetId: sts.number(),
        })
    ),
}

export const currencyAdded =  {
    name: 'MultiTransactionPayment.CurrencyAdded',
    /**
     * New accepted currency added
     * [currency]
     */
    v108: new EventType(
        'MultiTransactionPayment.CurrencyAdded',
        sts.number()
    ),
    /**
     * New accepted currency added
     * [currency]
     */
    v115: new EventType(
        'MultiTransactionPayment.CurrencyAdded',
        sts.struct({
            assetId: sts.number(),
        })
    ),
}

export const currencyRemoved =  {
    name: 'MultiTransactionPayment.CurrencyRemoved',
    /**
     * Accepted currency removed
     * [currency]
     */
    v108: new EventType(
        'MultiTransactionPayment.CurrencyRemoved',
        sts.number()
    ),
    /**
     * Accepted currency removed
     * [currency]
     */
    v115: new EventType(
        'MultiTransactionPayment.CurrencyRemoved',
        sts.struct({
            assetId: sts.number(),
        })
    ),
}

export const feeWithdrawn =  {
    name: 'MultiTransactionPayment.FeeWithdrawn',
    /**
     * Transaction fee paid in non-native currency
     * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
     */
    v108: new EventType(
        'MultiTransactionPayment.FeeWithdrawn',
        sts.tuple([v108.AccountId32, sts.number(), sts.bigint(), sts.bigint(), v108.AccountId32])
    ),
    /**
     * Transaction fee paid in non-native currency
     * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
     */
    v115: new EventType(
        'MultiTransactionPayment.FeeWithdrawn',
        sts.struct({
            accountId: v115.AccountId32,
            assetId: sts.number(),
            nativeFeeAmount: sts.bigint(),
            nonNativeFeeAmount: sts.bigint(),
            destinationAccountId: v115.AccountId32,
        })
    ),
}
