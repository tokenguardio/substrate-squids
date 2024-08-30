import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const vsbondConvertToVstoken =  {
    name: 'TokenConversion.vsbond_convert_to_vstoken',
    v956: new CallType(
        'TokenConversion.vsbond_convert_to_vstoken',
        sts.struct({
            vsBondCurrencyId: v956.CurrencyId,
            vsbondAmount: sts.bigint(),
            minimumVstoken: sts.bigint(),
        })
    ),
    v962: new CallType(
        'TokenConversion.vsbond_convert_to_vstoken',
        sts.struct({
            vsBondCurrencyId: v962.CurrencyId,
            vsbondAmount: sts.bigint(),
            minimumVstoken: sts.bigint(),
        })
    ),
    v980: new CallType(
        'TokenConversion.vsbond_convert_to_vstoken',
        sts.struct({
            vsBondCurrencyId: v980.CurrencyId,
            vsbondAmount: sts.bigint(),
            minimumVstoken: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::vsbond_convert_to_vstoken`].
     */
    v990: new CallType(
        'TokenConversion.vsbond_convert_to_vstoken',
        sts.struct({
            vsBondCurrencyId: v990.CurrencyId,
            vsbondAmount: sts.bigint(),
            minimumVstoken: sts.bigint(),
        })
    ),
}

export const vstokenConvertToVsbond =  {
    name: 'TokenConversion.vstoken_convert_to_vsbond',
    v956: new CallType(
        'TokenConversion.vstoken_convert_to_vsbond',
        sts.struct({
            currencyId: v956.CurrencyId,
            vstokenAmount: sts.bigint(),
            minimumVsbond: sts.bigint(),
        })
    ),
    v962: new CallType(
        'TokenConversion.vstoken_convert_to_vsbond',
        sts.struct({
            currencyId: v962.CurrencyId,
            vstokenAmount: sts.bigint(),
            minimumVsbond: sts.bigint(),
        })
    ),
    v980: new CallType(
        'TokenConversion.vstoken_convert_to_vsbond',
        sts.struct({
            currencyId: v980.CurrencyId,
            vstokenAmount: sts.bigint(),
            minimumVsbond: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::vstoken_convert_to_vsbond`].
     */
    v990: new CallType(
        'TokenConversion.vstoken_convert_to_vsbond',
        sts.struct({
            currencyId: v990.CurrencyId,
            vstokenAmount: sts.bigint(),
            minimumVsbond: sts.bigint(),
        })
    ),
}

export const setExchangeFee =  {
    name: 'TokenConversion.set_exchange_fee',
    v956: new CallType(
        'TokenConversion.set_exchange_fee',
        sts.struct({
            exchangeFee: v956.VstokenConversionExchangeFee,
        })
    ),
}

export const setExchangeRate =  {
    name: 'TokenConversion.set_exchange_rate',
    v956: new CallType(
        'TokenConversion.set_exchange_rate',
        sts.struct({
            lease: sts.number(),
            exchangeRate: v956.VstokenConversionExchangeRate,
        })
    ),
}

export const setRelaychainLease =  {
    name: 'TokenConversion.set_relaychain_lease',
    v956: new CallType(
        'TokenConversion.set_relaychain_lease',
        sts.struct({
            lease: sts.number(),
        })
    ),
}
