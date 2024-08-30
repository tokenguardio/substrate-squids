import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v958 from '../v958'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const charged =  {
    name: 'SystemMaker.Charged',
    v958: new EventType(
        'SystemMaker.Charged',
        sts.struct({
            who: v958.AccountId32,
            currencyId: v958.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v962: new EventType(
        'SystemMaker.Charged',
        sts.struct({
            who: v962.AccountId32,
            currencyId: v962.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemMaker.Charged',
        sts.struct({
            who: v980.AccountId32,
            currencyId: v980.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemMaker.Charged',
        sts.struct({
            who: v990.AccountId32,
            currencyId: v990.CurrencyId,
            value: sts.bigint(),
        })
    ),
}

export const configSet =  {
    name: 'SystemMaker.ConfigSet',
    v958: new EventType(
        'SystemMaker.ConfigSet',
        sts.struct({
            currencyId: v958.CurrencyId,
            info: v958.Info,
        })
    ),
    v962: new EventType(
        'SystemMaker.ConfigSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            info: v962.Info,
        })
    ),
    v980: new EventType(
        'SystemMaker.ConfigSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            info: v980.Info,
        })
    ),
    v990: new EventType(
        'SystemMaker.ConfigSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            info: v990.Info,
        })
    ),
}

export const closed =  {
    name: 'SystemMaker.Closed',
    v958: new EventType(
        'SystemMaker.Closed',
        sts.struct({
            currencyId: v958.CurrencyId,
        })
    ),
    v962: new EventType(
        'SystemMaker.Closed',
        sts.struct({
            currencyId: v962.CurrencyId,
        })
    ),
    v980: new EventType(
        'SystemMaker.Closed',
        sts.struct({
            currencyId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'SystemMaker.Closed',
        sts.struct({
            currencyId: v990.CurrencyId,
        })
    ),
}

export const paid =  {
    name: 'SystemMaker.Paid',
    v958: new EventType(
        'SystemMaker.Paid',
        sts.struct({
            currencyId: v958.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v962: new EventType(
        'SystemMaker.Paid',
        sts.struct({
            currencyId: v962.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemMaker.Paid',
        sts.struct({
            currencyId: v980.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemMaker.Paid',
        sts.struct({
            currencyId: v990.CurrencyId,
            value: sts.bigint(),
        })
    ),
}

export const redeemFailed =  {
    name: 'SystemMaker.RedeemFailed',
    v958: new EventType(
        'SystemMaker.RedeemFailed',
        sts.struct({
            vcurrencyId: v958.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'SystemMaker.RedeemFailed',
        sts.struct({
            vcurrencyId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemMaker.RedeemFailed',
        sts.struct({
            vcurrencyId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemMaker.RedeemFailed',
        sts.struct({
            vcurrencyId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}
