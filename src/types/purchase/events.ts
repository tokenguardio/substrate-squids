import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v15 from '../v15'

export const accountCreated =  {
    name: 'Purchase.AccountCreated',
    /**
     *  A new account was created
     */
    v15: new EventType(
        'Purchase.AccountCreated',
        v15.AccountId
    ),
}

export const validityUpdated =  {
    name: 'Purchase.ValidityUpdated',
    /**
     *  Someone's account validity was updated
     */
    v15: new EventType(
        'Purchase.ValidityUpdated',
        sts.tuple([v15.AccountId, v15.AccountValidity])
    ),
}

export const balanceUpdated =  {
    name: 'Purchase.BalanceUpdated',
    /**
     *  Someone's purchase balance was updated. (Free, Locked)
     */
    v15: new EventType(
        'Purchase.BalanceUpdated',
        sts.tuple([v15.AccountId, v15.Balance, v15.Balance])
    ),
}

export const paymentComplete =  {
    name: 'Purchase.PaymentComplete',
    /**
     *  A payout was made to a purchaser.
     */
    v15: new EventType(
        'Purchase.PaymentComplete',
        sts.tuple([v15.AccountId, v15.Balance, v15.Balance])
    ),
}

export const paymentAccountSet =  {
    name: 'Purchase.PaymentAccountSet',
    /**
     *  A new payment account was set.
     */
    v15: new EventType(
        'Purchase.PaymentAccountSet',
        v15.AccountId
    ),
}

export const statementUpdated =  {
    name: 'Purchase.StatementUpdated',
    /**
     *  A new statement was set.
     */
    v15: new EventType(
        'Purchase.StatementUpdated',
        sts.unit()
    ),
}

export const unlockBlockUpdated =  {
    name: 'Purchase.UnlockBlockUpdated',
    /**
     *  A new statement was set.
     */
    v15: new EventType(
        'Purchase.UnlockBlockUpdated',
        v15.BlockNumber
    ),
}
