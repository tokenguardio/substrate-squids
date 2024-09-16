import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v958 from '../v958'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const setConfig =  {
    name: 'SystemMaker.set_config',
    v958: new CallType(
        'SystemMaker.set_config',
        sts.struct({
            currencyId: v958.CurrencyId,
            info: v958.Info,
        })
    ),
    v962: new CallType(
        'SystemMaker.set_config',
        sts.struct({
            currencyId: v962.CurrencyId,
            info: v962.Info,
        })
    ),
    v980: new CallType(
        'SystemMaker.set_config',
        sts.struct({
            currencyId: v980.CurrencyId,
            info: v980.Info,
        })
    ),
    /**
     * See [`Pallet::set_config`].
     */
    v990: new CallType(
        'SystemMaker.set_config',
        sts.struct({
            currencyId: v990.CurrencyId,
            info: v990.Info,
        })
    ),
}

export const charge =  {
    name: 'SystemMaker.charge',
    v958: new CallType(
        'SystemMaker.charge',
        sts.struct({
            currencyId: v958.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v962: new CallType(
        'SystemMaker.charge',
        sts.struct({
            currencyId: v962.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v980: new CallType(
        'SystemMaker.charge',
        sts.struct({
            currencyId: v980.CurrencyId,
            value: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::charge`].
     */
    v990: new CallType(
        'SystemMaker.charge',
        sts.struct({
            currencyId: v990.CurrencyId,
            value: sts.bigint(),
        })
    ),
}

export const close =  {
    name: 'SystemMaker.close',
    v958: new CallType(
        'SystemMaker.close',
        sts.struct({
            currencyId: v958.CurrencyId,
        })
    ),
    v962: new CallType(
        'SystemMaker.close',
        sts.struct({
            currencyId: v962.CurrencyId,
        })
    ),
    v980: new CallType(
        'SystemMaker.close',
        sts.struct({
            currencyId: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::close`].
     */
    v990: new CallType(
        'SystemMaker.close',
        sts.struct({
            currencyId: v990.CurrencyId,
        })
    ),
}

export const payout =  {
    name: 'SystemMaker.payout',
    v958: new CallType(
        'SystemMaker.payout',
        sts.struct({
            currencyId: v958.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v962: new CallType(
        'SystemMaker.payout',
        sts.struct({
            currencyId: v962.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v980: new CallType(
        'SystemMaker.payout',
        sts.struct({
            currencyId: v980.CurrencyId,
            value: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::payout`].
     */
    v990: new CallType(
        'SystemMaker.payout',
        sts.struct({
            currencyId: v990.CurrencyId,
            value: sts.bigint(),
        })
    ),
}
