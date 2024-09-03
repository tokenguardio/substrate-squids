import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v15 from '../v15'

export const createAccount =  {
    name: 'Purchase.create_account',
    /**
     *  Create a new account. Proof of existence through a valid signed message.
     * 
     *  We check that the account does not exist at this stage.
     * 
     *  Origin must match the `ValidityOrigin`.
     */
    v15: new CallType(
        'Purchase.create_account',
        sts.struct({
            who: v15.AccountId,
            signature: sts.bytes(),
        })
    ),
}

export const updateValidityStatus =  {
    name: 'Purchase.update_validity_status',
    /**
     *  Update the validity status of an existing account. If set to completed, the account
     *  will no longer be able to continue through the crowdfund process.
     * 
     *  We check tht the account exists at this stage, but has not completed the process.
     * 
     *  Origin must match the `ValidityOrigin`.
     */
    v15: new CallType(
        'Purchase.update_validity_status',
        sts.struct({
            who: v15.AccountId,
            validity: v15.AccountValidity,
        })
    ),
}

export const updateBalance =  {
    name: 'Purchase.update_balance',
    /**
     *  Update the balance of a valid account.
     * 
     *  We check tht the account is valid for a balance transfer at this point.
     * 
     *  Origin must match the `ValidityOrigin`.
     */
    v15: new CallType(
        'Purchase.update_balance',
        sts.struct({
            who: v15.AccountId,
            freeBalance: v15.BalanceOf,
            lockedBalance: v15.BalanceOf,
            vat: v15.Permill,
        })
    ),
}

export const payout =  {
    name: 'Purchase.payout',
    /**
     *  Pay the user and complete the purchase process.
     * 
     *  We reverify all assumptions about the state of an account, and complete the process.
     * 
     *  Origin must match the configured `PaymentAccount`.
     */
    v15: new CallType(
        'Purchase.payout',
        sts.struct({
            who: v15.AccountId,
        })
    ),
}

export const setPaymentAccount =  {
    name: 'Purchase.set_payment_account',
    /**
     *  Set the account that will be used to payout users in the DOT purchase process.
     * 
     *  Origin must match the `ConfigurationOrigin`
     */
    v15: new CallType(
        'Purchase.set_payment_account',
        sts.struct({
            who: v15.AccountId,
        })
    ),
}

export const setStatement =  {
    name: 'Purchase.set_statement',
    /**
     *  Set the statement that must be signed for a user to participate on the DOT sale.
     * 
     *  Origin must match the `ConfigurationOrigin`
     */
    v15: new CallType(
        'Purchase.set_statement',
        sts.struct({
            statement: sts.bytes(),
        })
    ),
}

export const setUnlockBlock =  {
    name: 'Purchase.set_unlock_block',
    /**
     *  Set the block where locked DOTs will become unlocked.
     * 
     *  Origin must match the `ConfigurationOrigin`
     */
    v15: new CallType(
        'Purchase.set_unlock_block',
        sts.struct({
            unlockBlock: v15.BlockNumber,
        })
    ),
}
