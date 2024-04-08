import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v8 from '../v8'
import * as v9122 from '../v9122'
import * as v9140 from '../v9140'
import * as v9420 from '../v9420'

export const endowed =  {
    name: 'Balances.Endowed',
    /**
     *  An account was created with some free balance.
     */
    v0: new EventType(
        'Balances.Endowed',
        sts.tuple([v0.AccountId, v0.Balance])
    ),
    /**
     * An account was created with some free balance.
     */
    v9140: new EventType(
        'Balances.Endowed',
        sts.struct({
            account: v9140.AccountId32,
            freeBalance: sts.bigint(),
        })
    ),
}

export const dustLost =  {
    name: 'Balances.DustLost',
    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss.
     */
    v0: new EventType(
        'Balances.DustLost',
        sts.tuple([v0.AccountId, v0.Balance])
    ),
    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    v9140: new EventType(
        'Balances.DustLost',
        sts.struct({
            account: v9140.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'Balances.Transfer',
    /**
     *  Transfer succeeded (from, to, value).
     */
    v0: new EventType(
        'Balances.Transfer',
        sts.tuple([v0.AccountId, v0.AccountId, v0.Balance])
    ),
    /**
     * Transfer succeeded.
     */
    v9140: new EventType(
        'Balances.Transfer',
        sts.struct({
            from: v9140.AccountId32,
            to: v9140.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const balanceSet =  {
    name: 'Balances.BalanceSet',
    /**
     *  A balance was set by root (who, free, reserved).
     */
    v0: new EventType(
        'Balances.BalanceSet',
        sts.tuple([v0.AccountId, v0.Balance, v0.Balance])
    ),
    /**
     * A balance was set by root.
     */
    v9140: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: v9140.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v9420: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: v9420.AccountId32,
            free: sts.bigint(),
        })
    ),
}

export const deposit =  {
    name: 'Balances.Deposit',
    /**
     *  Some amount was deposited (e.g. for transaction fees).
     */
    v0: new EventType(
        'Balances.Deposit',
        sts.tuple([v0.AccountId, v0.Balance])
    ),
    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    v9140: new EventType(
        'Balances.Deposit',
        sts.struct({
            who: v9140.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'Balances.Reserved',
    /**
     *  Some balance was reserved (moved from free to reserved).
     */
    v8: new EventType(
        'Balances.Reserved',
        sts.tuple([v8.AccountId, v8.Balance])
    ),
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v9140: new EventType(
        'Balances.Reserved',
        sts.struct({
            who: v9140.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Balances.Unreserved',
    /**
     *  Some balance was unreserved (moved from reserved to free).
     */
    v8: new EventType(
        'Balances.Unreserved',
        sts.tuple([v8.AccountId, v8.Balance])
    ),
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v9140: new EventType(
        'Balances.Unreserved',
        sts.struct({
            who: v9140.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'Balances.ReserveRepatriated',
    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     */
    v8: new EventType(
        'Balances.ReserveRepatriated',
        sts.tuple([v8.AccountId, v8.AccountId, v8.Balance, v8.BalanceStatus])
    ),
    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    v9140: new EventType(
        'Balances.ReserveRepatriated',
        sts.struct({
            from: v9140.AccountId32,
            to: v9140.AccountId32,
            amount: sts.bigint(),
            destinationStatus: v9140.BalanceStatus,
        })
    ),
}

export const withdraw =  {
    name: 'Balances.Withdraw',
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
     */
    v9122: new EventType(
        'Balances.Withdraw',
        sts.tuple([v9122.AccountId32, sts.bigint()])
    ),
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    v9140: new EventType(
        'Balances.Withdraw',
        sts.struct({
            who: v9140.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Balances.Slashed',
    /**
     * Some amount was removed from the account (e.g. for misbehavior). \[who,
     * amount_slashed\]
     */
    v9122: new EventType(
        'Balances.Slashed',
        sts.tuple([v9122.AccountId32, sts.bigint()])
    ),
    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    v9140: new EventType(
        'Balances.Slashed',
        sts.struct({
            who: v9140.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const minted =  {
    name: 'Balances.Minted',
    /**
     * Some amount was minted into an account.
     */
    v9420: new EventType(
        'Balances.Minted',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const burned =  {
    name: 'Balances.Burned',
    /**
     * Some amount was burned from an account.
     */
    v9420: new EventType(
        'Balances.Burned',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const suspended =  {
    name: 'Balances.Suspended',
    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    v9420: new EventType(
        'Balances.Suspended',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const restored =  {
    name: 'Balances.Restored',
    /**
     * Some amount was restored into an account.
     */
    v9420: new EventType(
        'Balances.Restored',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const upgraded =  {
    name: 'Balances.Upgraded',
    /**
     * An account was upgraded.
     */
    v9420: new EventType(
        'Balances.Upgraded',
        sts.struct({
            who: v9420.AccountId32,
        })
    ),
}

export const issued =  {
    name: 'Balances.Issued',
    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    v9420: new EventType(
        'Balances.Issued',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const rescinded =  {
    name: 'Balances.Rescinded',
    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    v9420: new EventType(
        'Balances.Rescinded',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const locked =  {
    name: 'Balances.Locked',
    /**
     * Some balance was locked.
     */
    v9420: new EventType(
        'Balances.Locked',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unlocked =  {
    name: 'Balances.Unlocked',
    /**
     * Some balance was unlocked.
     */
    v9420: new EventType(
        'Balances.Unlocked',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const frozen =  {
    name: 'Balances.Frozen',
    /**
     * Some balance was frozen.
     */
    v9420: new EventType(
        'Balances.Frozen',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const thawed =  {
    name: 'Balances.Thawed',
    /**
     * Some balance was thawed.
     */
    v9420: new EventType(
        'Balances.Thawed',
        sts.struct({
            who: v9420.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
