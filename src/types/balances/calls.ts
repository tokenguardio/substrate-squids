import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v978 from '../v978'
import * as v11000 from '../v11000'

export const transfer =  {
    name: 'Balances.transfer',
    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     * 
     * # <weight>
     * - Dependent on arguments but not critical, given proper implementations for input config
     *   types. See related functions below.
     * - It contains a limited number of reads and writes internally and no complex
     *   computation.
     * 
     * Related functions:
     * 
     *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *   - Transferring balances to accounts that did not exist before will cause
     *     `T::OnNewAccount::on_new_account` to be called.
     *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *     that the transfer will not kill the origin account.
     * ---------------------------------
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    v932: new CallType(
        'Balances.transfer',
        sts.struct({
            dest: v932.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const setBalance =  {
    name: 'Balances.set_balance',
    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also alter the total issuance of the system (`TotalIssuance`) appropriately.
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     */
    v932: new CallType(
        'Balances.set_balance',
        sts.struct({
            who: v932.MultiAddress,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        })
    ),
}

export const forceTransfer =  {
    name: 'Balances.force_transfer',
    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    v932: new CallType(
        'Balances.force_transfer',
        sts.struct({
            source: v932.MultiAddress,
            dest: v932.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const transferKeepAlive =  {
    name: 'Balances.transfer_keep_alive',
    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    v932: new CallType(
        'Balances.transfer_keep_alive',
        sts.struct({
            dest: v932.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const transferAll =  {
    name: 'Balances.transfer_all',
    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    v932: new CallType(
        'Balances.transfer_all',
        sts.struct({
            dest: v932.MultiAddress,
            keepAlive: sts.boolean(),
        })
    ),
}

export const forceUnreserve =  {
    name: 'Balances.force_unreserve',
    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    v932: new CallType(
        'Balances.force_unreserve',
        sts.struct({
            who: v932.MultiAddress,
            amount: sts.bigint(),
        })
    ),
}

export const transferAllowDeath =  {
    name: 'Balances.transfer_allow_death',
    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     */
    v978: new CallType(
        'Balances.transfer_allow_death',
        sts.struct({
            dest: v978.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const setBalanceDeprecated =  {
    name: 'Balances.set_balance_deprecated',
    /**
     * Set the regular balance of a given account; it also takes a reserved balance but this
     * must be the same as the account's current reserved balance.
     * 
     * The dispatch origin for this call is `root`.
     * 
     * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
     */
    v978: new CallType(
        'Balances.set_balance_deprecated',
        sts.struct({
            who: v978.MultiAddress,
            newFree: sts.bigint(),
            oldReserved: sts.bigint(),
        })
    ),
}

export const upgradeAccounts =  {
    name: 'Balances.upgrade_accounts',
    /**
     * Upgrade a specified account.
     * 
     * - `origin`: Must be `Signed`.
     * - `who`: The account to be upgraded.
     * 
     * This will waive the transaction fee if at least all but 10% of the accounts needed to
     * be upgraded. (We let some not have to be upgraded just in order to allow for the
     * possibililty of churn).
     */
    v978: new CallType(
        'Balances.upgrade_accounts',
        sts.struct({
            who: sts.array(() => v978.AccountId32),
        })
    ),
}

export const forceSetBalance =  {
    name: 'Balances.force_set_balance',
    /**
     * Set the regular balance of a given account.
     * 
     * The dispatch origin for this call is `root`.
     */
    v978: new CallType(
        'Balances.force_set_balance',
        sts.struct({
            who: v978.MultiAddress,
            newFree: sts.bigint(),
        })
    ),
}

export const forceAdjustTotalIssuance =  {
    name: 'Balances.force_adjust_total_issuance',
    /**
     * See [`Pallet::force_adjust_total_issuance`].
     */
    v11000: new CallType(
        'Balances.force_adjust_total_issuance',
        sts.struct({
            direction: v11000.AdjustmentDirection,
            delta: sts.bigint(),
        })
    ),
}

export const burn =  {
    name: 'Balances.burn',
    /**
     * Burn the specified liquid free balance from the origin account.
     * 
     * If the origin's account ends up below the existential deposit as a result
     * of the burn and `keep_alive` is false, the account will be reaped.
     * 
     * Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
     * this `burn` operation will reduce total issuance by the amount _burned_.
     */
    v12001: new CallType(
        'Balances.burn',
        sts.struct({
            value: sts.bigint(),
            keepAlive: sts.boolean(),
        })
    ),
}
