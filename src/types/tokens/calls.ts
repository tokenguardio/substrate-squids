import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const transfer =  {
    name: 'Tokens.transfer',
    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * It will decrease the total issuance of the system by the
     * `TransferFee`. If the sender's account is below the existential
     * deposit as a result of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v952: new CallType(
        'Tokens.transfer',
        sts.struct({
            dest: v952.MultiAddress,
            currencyId: v952.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * It will decrease the total issuance of the system by the
     * `TransferFee`. If the sender's account is below the existential
     * deposit as a result of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v956: new CallType(
        'Tokens.transfer',
        sts.struct({
            dest: v956.MultiAddress,
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * It will decrease the total issuance of the system by the
     * `TransferFee`. If the sender's account is below the existential
     * deposit as a result of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v962: new CallType(
        'Tokens.transfer',
        sts.struct({
            dest: v962.MultiAddress,
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * It will decrease the total issuance of the system by the
     * `TransferFee`. If the sender's account is below the existential
     * deposit as a result of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v980: new CallType(
        'Tokens.transfer',
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
        'Tokens.transfer',
        sts.struct({
            dest: v990.MultiAddress,
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const transferAll =  {
    name: 'Tokens.transfer_all',
    /**
     * Transfer all remaining balance to the given account.
     * 
     * NOTE: This function only attempts to transfer _transferable_
     * balances. This means that any locked, reserved, or existential
     * deposits (when `keep_alive` is `true`), will not be transferred by
     * this function. To ensure that this function results in a killed
     * account, you might need to prepare the account by removing any
     * reference counters, storage deposits, etc...
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `keep_alive`: A boolean to determine if the `transfer_all`
     *   operation should send all of the funds the account has, causing
     *   the sender account to be killed (false), or transfer everything
     *   except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true).
     */
    v952: new CallType(
        'Tokens.transfer_all',
        sts.struct({
            dest: v952.MultiAddress,
            currencyId: v952.CurrencyId,
            keepAlive: sts.boolean(),
        })
    ),
    /**
     * Transfer all remaining balance to the given account.
     * 
     * NOTE: This function only attempts to transfer _transferable_
     * balances. This means that any locked, reserved, or existential
     * deposits (when `keep_alive` is `true`), will not be transferred by
     * this function. To ensure that this function results in a killed
     * account, you might need to prepare the account by removing any
     * reference counters, storage deposits, etc...
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `keep_alive`: A boolean to determine if the `transfer_all`
     *   operation should send all of the funds the account has, causing
     *   the sender account to be killed (false), or transfer everything
     *   except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true).
     */
    v956: new CallType(
        'Tokens.transfer_all',
        sts.struct({
            dest: v956.MultiAddress,
            currencyId: v956.CurrencyId,
            keepAlive: sts.boolean(),
        })
    ),
    /**
     * Transfer all remaining balance to the given account.
     * 
     * NOTE: This function only attempts to transfer _transferable_
     * balances. This means that any locked, reserved, or existential
     * deposits (when `keep_alive` is `true`), will not be transferred by
     * this function. To ensure that this function results in a killed
     * account, you might need to prepare the account by removing any
     * reference counters, storage deposits, etc...
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `keep_alive`: A boolean to determine if the `transfer_all`
     *   operation should send all of the funds the account has, causing
     *   the sender account to be killed (false), or transfer everything
     *   except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true).
     */
    v962: new CallType(
        'Tokens.transfer_all',
        sts.struct({
            dest: v962.MultiAddress,
            currencyId: v962.CurrencyId,
            keepAlive: sts.boolean(),
        })
    ),
    /**
     * Transfer all remaining balance to the given account.
     * 
     * NOTE: This function only attempts to transfer _transferable_
     * balances. This means that any locked, reserved, or existential
     * deposits (when `keep_alive` is `true`), will not be transferred by
     * this function. To ensure that this function results in a killed
     * account, you might need to prepare the account by removing any
     * reference counters, storage deposits, etc...
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `keep_alive`: A boolean to determine if the `transfer_all`
     *   operation should send all of the funds the account has, causing
     *   the sender account to be killed (false), or transfer everything
     *   except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true).
     */
    v980: new CallType(
        'Tokens.transfer_all',
        sts.struct({
            dest: v980.MultiAddress,
            currencyId: v980.CurrencyId,
            keepAlive: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::transfer_all`].
     */
    v990: new CallType(
        'Tokens.transfer_all',
        sts.struct({
            dest: v990.MultiAddress,
            currencyId: v990.CurrencyId,
            keepAlive: sts.boolean(),
        })
    ),
}

export const transferKeepAlive =  {
    name: 'Tokens.transfer_keep_alive',
    /**
     * Same as the [`transfer`] call, but with a check that the transfer
     * will not kill the origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v952: new CallType(
        'Tokens.transfer_keep_alive',
        sts.struct({
            dest: v952.MultiAddress,
            currencyId: v952.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Same as the [`transfer`] call, but with a check that the transfer
     * will not kill the origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v956: new CallType(
        'Tokens.transfer_keep_alive',
        sts.struct({
            dest: v956.MultiAddress,
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Same as the [`transfer`] call, but with a check that the transfer
     * will not kill the origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v962: new CallType(
        'Tokens.transfer_keep_alive',
        sts.struct({
            dest: v962.MultiAddress,
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Same as the [`transfer`] call, but with a check that the transfer
     * will not kill the origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v980: new CallType(
        'Tokens.transfer_keep_alive',
        sts.struct({
            dest: v980.MultiAddress,
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::transfer_keep_alive`].
     */
    v990: new CallType(
        'Tokens.transfer_keep_alive',
        sts.struct({
            dest: v990.MultiAddress,
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const forceTransfer =  {
    name: 'Tokens.force_transfer',
    /**
     * Exactly as `transfer`, except the origin must be root and the source
     * account may be specified.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The sender of the transfer.
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v952: new CallType(
        'Tokens.force_transfer',
        sts.struct({
            source: v952.MultiAddress,
            dest: v952.MultiAddress,
            currencyId: v952.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Exactly as `transfer`, except the origin must be root and the source
     * account may be specified.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The sender of the transfer.
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v956: new CallType(
        'Tokens.force_transfer',
        sts.struct({
            source: v956.MultiAddress,
            dest: v956.MultiAddress,
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Exactly as `transfer`, except the origin must be root and the source
     * account may be specified.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The sender of the transfer.
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v962: new CallType(
        'Tokens.force_transfer',
        sts.struct({
            source: v962.MultiAddress,
            dest: v962.MultiAddress,
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * Exactly as `transfer`, except the origin must be root and the source
     * account may be specified.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The sender of the transfer.
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    v980: new CallType(
        'Tokens.force_transfer',
        sts.struct({
            source: v980.MultiAddress,
            dest: v980.MultiAddress,
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::force_transfer`].
     */
    v990: new CallType(
        'Tokens.force_transfer',
        sts.struct({
            source: v990.MultiAddress,
            dest: v990.MultiAddress,
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const setBalance =  {
    name: 'Tokens.set_balance',
    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it
     * will also decrease the total issuance of the system
     * (`TotalIssuance`). If the new free or reserved balance is below the
     * existential deposit, it will reap the `AccountInfo`.
     * 
     * The dispatch origin for this call is `root`.
     */
    v952: new CallType(
        'Tokens.set_balance',
        sts.struct({
            who: v952.MultiAddress,
            currencyId: v952.CurrencyId,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        })
    ),
    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it
     * will also decrease the total issuance of the system
     * (`TotalIssuance`). If the new free or reserved balance is below the
     * existential deposit, it will reap the `AccountInfo`.
     * 
     * The dispatch origin for this call is `root`.
     */
    v956: new CallType(
        'Tokens.set_balance',
        sts.struct({
            who: v956.MultiAddress,
            currencyId: v956.CurrencyId,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        })
    ),
    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it
     * will also decrease the total issuance of the system
     * (`TotalIssuance`). If the new free or reserved balance is below the
     * existential deposit, it will reap the `AccountInfo`.
     * 
     * The dispatch origin for this call is `root`.
     */
    v962: new CallType(
        'Tokens.set_balance',
        sts.struct({
            who: v962.MultiAddress,
            currencyId: v962.CurrencyId,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        })
    ),
    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it
     * will also decrease the total issuance of the system
     * (`TotalIssuance`). If the new free or reserved balance is below the
     * existential deposit, it will reap the `AccountInfo`.
     * 
     * The dispatch origin for this call is `root`.
     */
    v980: new CallType(
        'Tokens.set_balance',
        sts.struct({
            who: v980.MultiAddress,
            currencyId: v980.CurrencyId,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::set_balance`].
     */
    v990: new CallType(
        'Tokens.set_balance',
        sts.struct({
            who: v990.MultiAddress,
            currencyId: v990.CurrencyId,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        })
    ),
}
