import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v972 from '../v972'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const endowed =  {
    name: 'Tokens.Endowed',
    /**
     * An account was created with some free balance.
     */
    v952: new EventType(
        'Tokens.Endowed',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account was created with some free balance.
     */
    v956: new EventType(
        'Tokens.Endowed',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account was created with some free balance.
     */
    v962: new EventType(
        'Tokens.Endowed',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account was created with some free balance.
     */
    v980: new EventType(
        'Tokens.Endowed',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account was created with some free balance.
     */
    v990: new EventType(
        'Tokens.Endowed',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const dustLost =  {
    name: 'Tokens.DustLost',
    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    v952: new EventType(
        'Tokens.DustLost',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    v956: new EventType(
        'Tokens.DustLost',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    v962: new EventType(
        'Tokens.DustLost',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    v980: new EventType(
        'Tokens.DustLost',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    v990: new EventType(
        'Tokens.DustLost',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'Tokens.Transfer',
    /**
     * Transfer succeeded.
     */
    v952: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v952.CurrencyId,
            from: v952.AccountId32,
            to: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer succeeded.
     */
    v956: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v956.CurrencyId,
            from: v956.AccountId32,
            to: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer succeeded.
     */
    v962: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v962.CurrencyId,
            from: v962.AccountId32,
            to: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer succeeded.
     */
    v980: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v980.CurrencyId,
            from: v980.AccountId32,
            to: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer succeeded.
     */
    v990: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v990.CurrencyId,
            from: v990.AccountId32,
            to: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'Tokens.Reserved',
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v952: new EventType(
        'Tokens.Reserved',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v956: new EventType(
        'Tokens.Reserved',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v962: new EventType(
        'Tokens.Reserved',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v980: new EventType(
        'Tokens.Reserved',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v990: new EventType(
        'Tokens.Reserved',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Tokens.Unreserved',
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v952: new EventType(
        'Tokens.Unreserved',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v956: new EventType(
        'Tokens.Unreserved',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v962: new EventType(
        'Tokens.Unreserved',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v980: new EventType(
        'Tokens.Unreserved',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v990: new EventType(
        'Tokens.Unreserved',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'Tokens.ReserveRepatriated',
    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    v952: new EventType(
        'Tokens.ReserveRepatriated',
        sts.struct({
            currencyId: v952.CurrencyId,
            from: v952.AccountId32,
            to: v952.AccountId32,
            amount: sts.bigint(),
            status: v952.BalanceStatus,
        })
    ),
    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    v956: new EventType(
        'Tokens.ReserveRepatriated',
        sts.struct({
            currencyId: v956.CurrencyId,
            from: v956.AccountId32,
            to: v956.AccountId32,
            amount: sts.bigint(),
            status: v956.BalanceStatus,
        })
    ),
    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    v962: new EventType(
        'Tokens.ReserveRepatriated',
        sts.struct({
            currencyId: v962.CurrencyId,
            from: v962.AccountId32,
            to: v962.AccountId32,
            amount: sts.bigint(),
            status: v962.BalanceStatus,
        })
    ),
    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    v980: new EventType(
        'Tokens.ReserveRepatriated',
        sts.struct({
            currencyId: v980.CurrencyId,
            from: v980.AccountId32,
            to: v980.AccountId32,
            amount: sts.bigint(),
            status: v980.BalanceStatus,
        })
    ),
    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    v990: new EventType(
        'Tokens.ReserveRepatriated',
        sts.struct({
            currencyId: v990.CurrencyId,
            from: v990.AccountId32,
            to: v990.AccountId32,
            amount: sts.bigint(),
            status: v990.BalanceStatus,
        })
    ),
}

export const balanceSet =  {
    name: 'Tokens.BalanceSet',
    /**
     * A balance was set by root.
     */
    v952: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v956: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v962: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v980: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v990: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
}

export const totalIssuanceSet =  {
    name: 'Tokens.TotalIssuanceSet',
    /**
     * The total issuance of an currency has been set
     */
    v952: new EventType(
        'Tokens.TotalIssuanceSet',
        sts.struct({
            currencyId: v952.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * The total issuance of an currency has been set
     */
    v956: new EventType(
        'Tokens.TotalIssuanceSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * The total issuance of an currency has been set
     */
    v962: new EventType(
        'Tokens.TotalIssuanceSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * The total issuance of an currency has been set
     */
    v980: new EventType(
        'Tokens.TotalIssuanceSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    /**
     * The total issuance of an currency has been set
     */
    v990: new EventType(
        'Tokens.TotalIssuanceSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'Tokens.Withdrawn',
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v952: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v956: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v962: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v980: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v990: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Tokens.Slashed',
    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    v952: new EventType(
        'Tokens.Slashed',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            freeAmount: sts.bigint(),
            reservedAmount: sts.bigint(),
        })
    ),
    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    v956: new EventType(
        'Tokens.Slashed',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            freeAmount: sts.bigint(),
            reservedAmount: sts.bigint(),
        })
    ),
    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    v962: new EventType(
        'Tokens.Slashed',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            freeAmount: sts.bigint(),
            reservedAmount: sts.bigint(),
        })
    ),
    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    v980: new EventType(
        'Tokens.Slashed',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            freeAmount: sts.bigint(),
            reservedAmount: sts.bigint(),
        })
    ),
    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    v990: new EventType(
        'Tokens.Slashed',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            freeAmount: sts.bigint(),
            reservedAmount: sts.bigint(),
        })
    ),
}

export const deposited =  {
    name: 'Tokens.Deposited',
    /**
     * Deposited some balance into an account
     */
    v952: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Deposited some balance into an account
     */
    v956: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Deposited some balance into an account
     */
    v962: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Deposited some balance into an account
     */
    v980: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Deposited some balance into an account
     */
    v990: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const lockSet =  {
    name: 'Tokens.LockSet',
    /**
     * Some funds are locked
     */
    v952: new EventType(
        'Tokens.LockSet',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some funds are locked
     */
    v956: new EventType(
        'Tokens.LockSet',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some funds are locked
     */
    v962: new EventType(
        'Tokens.LockSet',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some funds are locked
     */
    v980: new EventType(
        'Tokens.LockSet',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some funds are locked
     */
    v990: new EventType(
        'Tokens.LockSet',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const lockRemoved =  {
    name: 'Tokens.LockRemoved',
    /**
     * Some locked funds were unlocked
     */
    v952: new EventType(
        'Tokens.LockRemoved',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
        })
    ),
    /**
     * Some locked funds were unlocked
     */
    v956: new EventType(
        'Tokens.LockRemoved',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
        })
    ),
    /**
     * Some locked funds were unlocked
     */
    v962: new EventType(
        'Tokens.LockRemoved',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
        })
    ),
    /**
     * Some locked funds were unlocked
     */
    v980: new EventType(
        'Tokens.LockRemoved',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
        })
    ),
    /**
     * Some locked funds were unlocked
     */
    v990: new EventType(
        'Tokens.LockRemoved',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
        })
    ),
}

export const locked =  {
    name: 'Tokens.Locked',
    /**
     * Some free balance was locked.
     */
    v972: new EventType(
        'Tokens.Locked',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some free balance was locked.
     */
    v980: new EventType(
        'Tokens.Locked',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some free balance was locked.
     */
    v990: new EventType(
        'Tokens.Locked',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unlocked =  {
    name: 'Tokens.Unlocked',
    /**
     * Some locked balance was freed.
     */
    v972: new EventType(
        'Tokens.Unlocked',
        sts.struct({
            currencyId: v972.CurrencyId,
            who: v972.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some locked balance was freed.
     */
    v980: new EventType(
        'Tokens.Unlocked',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some locked balance was freed.
     */
    v990: new EventType(
        'Tokens.Unlocked',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const issued =  {
    name: 'Tokens.Issued',
    v990: new EventType(
        'Tokens.Issued',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const rescinded =  {
    name: 'Tokens.Rescinded',
    v990: new EventType(
        'Tokens.Rescinded',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}
