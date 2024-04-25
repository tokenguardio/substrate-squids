import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v900 from '../v900'
import * as v1001 from '../v1001'
import * as v1201 from '../v1201'
import * as v2501 from '../v2501'

export const endowed =  {
    name: 'Balances.Endowed',
    /**
     * An account was created with some free balance. \[account, free_balance\]
     */
    v900: new EventType(
        'Balances.Endowed',
        sts.tuple([v900.H160, sts.bigint()])
    ),
    /**
     * An account was created with some free balance.
     */
    v1201: new EventType(
        'Balances.Endowed',
        sts.struct({
            account: v1201.AccountId20,
            freeBalance: sts.bigint(),
        })
    ),
}

export const dustLost =  {
    name: 'Balances.DustLost',
    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss. \[account, balance\]
     */
    v900: new EventType(
        'Balances.DustLost',
        sts.tuple([v900.H160, sts.bigint()])
    ),
    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    v1201: new EventType(
        'Balances.DustLost',
        sts.struct({
            account: v1201.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'Balances.Transfer',
    /**
     * Transfer succeeded. \[from, to, value\]
     */
    v900: new EventType(
        'Balances.Transfer',
        sts.tuple([v900.H160, v900.H160, sts.bigint()])
    ),
    /**
     * Transfer succeeded.
     */
    v1201: new EventType(
        'Balances.Transfer',
        sts.struct({
            from: v1201.AccountId20,
            to: v1201.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const balanceSet =  {
    name: 'Balances.BalanceSet',
    /**
     * A balance was set by root. \[who, free, reserved\]
     */
    v900: new EventType(
        'Balances.BalanceSet',
        sts.tuple([v900.H160, sts.bigint(), sts.bigint()])
    ),
    /**
     * A balance was set by root.
     */
    v1201: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: v1201.AccountId20,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v2501: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: v2501.AccountId20,
            free: sts.bigint(),
        })
    ),
}

export const deposit =  {
    name: 'Balances.Deposit',
    /**
     * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    v900: new EventType(
        'Balances.Deposit',
        sts.tuple([v900.H160, sts.bigint()])
    ),
    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    v1201: new EventType(
        'Balances.Deposit',
        sts.struct({
            who: v1201.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'Balances.Reserved',
    /**
     * Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    v900: new EventType(
        'Balances.Reserved',
        sts.tuple([v900.H160, sts.bigint()])
    ),
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v1201: new EventType(
        'Balances.Reserved',
        sts.struct({
            who: v1201.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Balances.Unreserved',
    /**
     * Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    v900: new EventType(
        'Balances.Unreserved',
        sts.tuple([v900.H160, sts.bigint()])
    ),
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v1201: new EventType(
        'Balances.Unreserved',
        sts.struct({
            who: v1201.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'Balances.ReserveRepatriated',
    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     * \[from, to, balance, destination_status\]
     */
    v900: new EventType(
        'Balances.ReserveRepatriated',
        sts.tuple([v900.H160, v900.H160, sts.bigint(), v900.BalanceStatus])
    ),
    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    v1201: new EventType(
        'Balances.ReserveRepatriated',
        sts.struct({
            from: v1201.AccountId20,
            to: v1201.AccountId20,
            amount: sts.bigint(),
            destinationStatus: v1201.BalanceStatus,
        })
    ),
}

export const withdraw =  {
    name: 'Balances.Withdraw',
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
     */
    v1001: new EventType(
        'Balances.Withdraw',
        sts.tuple([v1001.AccountId20, sts.bigint()])
    ),
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    v1201: new EventType(
        'Balances.Withdraw',
        sts.struct({
            who: v1201.AccountId20,
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
    v1001: new EventType(
        'Balances.Slashed',
        sts.tuple([v1001.AccountId20, sts.bigint()])
    ),
    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    v1201: new EventType(
        'Balances.Slashed',
        sts.struct({
            who: v1201.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const minted =  {
    name: 'Balances.Minted',
    /**
     * Some amount was minted into an account.
     */
    v2501: new EventType(
        'Balances.Minted',
        sts.struct({
            who: v2501.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const burned =  {
    name: 'Balances.Burned',
    /**
     * Some amount was burned from an account.
     */
    v2501: new EventType(
        'Balances.Burned',
        sts.struct({
            who: v2501.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const suspended =  {
    name: 'Balances.Suspended',
    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    v2501: new EventType(
        'Balances.Suspended',
        sts.struct({
            who: v2501.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const restored =  {
    name: 'Balances.Restored',
    /**
     * Some amount was restored into an account.
     */
    v2501: new EventType(
        'Balances.Restored',
        sts.struct({
            who: v2501.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const upgraded =  {
    name: 'Balances.Upgraded',
    /**
     * An account was upgraded.
     */
    v2501: new EventType(
        'Balances.Upgraded',
        sts.struct({
            who: v2501.AccountId20,
        })
    ),
}

export const issued =  {
    name: 'Balances.Issued',
    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    v2501: new EventType(
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
    v2501: new EventType(
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
    v2501: new EventType(
        'Balances.Locked',
        sts.struct({
            who: v2501.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const unlocked =  {
    name: 'Balances.Unlocked',
    /**
     * Some balance was unlocked.
     */
    v2501: new EventType(
        'Balances.Unlocked',
        sts.struct({
            who: v2501.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const frozen =  {
    name: 'Balances.Frozen',
    /**
     * Some balance was frozen.
     */
    v2501: new EventType(
        'Balances.Frozen',
        sts.struct({
            who: v2501.AccountId20,
            amount: sts.bigint(),
        })
    ),
}

export const thawed =  {
    name: 'Balances.Thawed',
    /**
     * Some balance was thawed.
     */
    v2501: new EventType(
        'Balances.Thawed',
        sts.struct({
            who: v2501.AccountId20,
            amount: sts.bigint(),
        })
    ),
}
