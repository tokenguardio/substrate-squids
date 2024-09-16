import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const vsbondConvertToVsksm =  {
    name: 'TokenConversion.VsbondConvertToVsksm',
    v956: new EventType(
        'TokenConversion.VsbondConvertToVsksm',
        sts.struct({
            address: v956.AccountId32,
            currencyId: v956.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsksmAmount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'TokenConversion.VsbondConvertToVsksm',
        sts.struct({
            address: v962.AccountId32,
            currencyId: v962.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsksmAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'TokenConversion.VsbondConvertToVsksm',
        sts.struct({
            address: v980.AccountId32,
            currencyId: v980.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsksmAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'TokenConversion.VsbondConvertToVsksm',
        sts.struct({
            address: v990.AccountId32,
            currencyId: v990.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsksmAmount: sts.bigint(),
        })
    ),
}

export const vsksmConvertToVsbond =  {
    name: 'TokenConversion.VsksmConvertToVsbond',
    v956: new EventType(
        'TokenConversion.VsksmConvertToVsbond',
        sts.struct({
            address: v956.AccountId32,
            currencyId: v956.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsksmAmount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'TokenConversion.VsksmConvertToVsbond',
        sts.struct({
            address: v962.AccountId32,
            currencyId: v962.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsksmAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'TokenConversion.VsksmConvertToVsbond',
        sts.struct({
            address: v980.AccountId32,
            currencyId: v980.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsksmAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'TokenConversion.VsksmConvertToVsbond',
        sts.struct({
            address: v990.AccountId32,
            currencyId: v990.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsksmAmount: sts.bigint(),
        })
    ),
}

export const vsbondConvertToVsdot =  {
    name: 'TokenConversion.VsbondConvertToVsdot',
    v956: new EventType(
        'TokenConversion.VsbondConvertToVsdot',
        sts.struct({
            address: v956.AccountId32,
            currencyId: v956.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsdotAmount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'TokenConversion.VsbondConvertToVsdot',
        sts.struct({
            address: v962.AccountId32,
            currencyId: v962.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsdotAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'TokenConversion.VsbondConvertToVsdot',
        sts.struct({
            address: v980.AccountId32,
            currencyId: v980.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsdotAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'TokenConversion.VsbondConvertToVsdot',
        sts.struct({
            address: v990.AccountId32,
            currencyId: v990.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsdotAmount: sts.bigint(),
        })
    ),
}

export const vsdotConvertToVsbond =  {
    name: 'TokenConversion.VsdotConvertToVsbond',
    v956: new EventType(
        'TokenConversion.VsdotConvertToVsbond',
        sts.struct({
            address: v956.AccountId32,
            currencyId: v956.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsdotAmount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'TokenConversion.VsdotConvertToVsbond',
        sts.struct({
            address: v962.AccountId32,
            currencyId: v962.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsdotAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'TokenConversion.VsdotConvertToVsbond',
        sts.struct({
            address: v980.AccountId32,
            currencyId: v980.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsdotAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'TokenConversion.VsdotConvertToVsbond',
        sts.struct({
            address: v990.AccountId32,
            currencyId: v990.CurrencyId,
            vsbondAmount: sts.bigint(),
            vsdotAmount: sts.bigint(),
        })
    ),
}

export const vsbondConvertToVstoken =  {
    name: 'TokenConversion.VsbondConvertToVstoken',
    v956: new EventType(
        'TokenConversion.VsbondConvertToVstoken',
        sts.struct({
            address: v956.AccountId32,
            currencyId: v956.CurrencyId,
            vsbondAmount: sts.bigint(),
            vstokenAmount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'TokenConversion.VsbondConvertToVstoken',
        sts.struct({
            address: v962.AccountId32,
            currencyId: v962.CurrencyId,
            vsbondAmount: sts.bigint(),
            vstokenAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'TokenConversion.VsbondConvertToVstoken',
        sts.struct({
            address: v980.AccountId32,
            currencyId: v980.CurrencyId,
            vsbondAmount: sts.bigint(),
            vstokenAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'TokenConversion.VsbondConvertToVstoken',
        sts.struct({
            address: v990.AccountId32,
            currencyId: v990.CurrencyId,
            vsbondAmount: sts.bigint(),
            vstokenAmount: sts.bigint(),
        })
    ),
}

export const vstokenConvertToVsbond =  {
    name: 'TokenConversion.VstokenConvertToVsbond',
    v956: new EventType(
        'TokenConversion.VstokenConvertToVsbond',
        sts.struct({
            address: v956.AccountId32,
            currencyId: v956.CurrencyId,
            vsbondAmount: sts.bigint(),
            vstokenAmount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'TokenConversion.VstokenConvertToVsbond',
        sts.struct({
            address: v962.AccountId32,
            currencyId: v962.CurrencyId,
            vsbondAmount: sts.bigint(),
            vstokenAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'TokenConversion.VstokenConvertToVsbond',
        sts.struct({
            address: v980.AccountId32,
            currencyId: v980.CurrencyId,
            vsbondAmount: sts.bigint(),
            vstokenAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'TokenConversion.VstokenConvertToVsbond',
        sts.struct({
            address: v990.AccountId32,
            currencyId: v990.CurrencyId,
            vsbondAmount: sts.bigint(),
            vstokenAmount: sts.bigint(),
        })
    ),
}

export const exchangeFeeSet =  {
    name: 'TokenConversion.ExchangeFeeSet',
    v956: new EventType(
        'TokenConversion.ExchangeFeeSet',
        sts.struct({
            exchangeFee: v956.VstokenConversionExchangeFee,
        })
    ),
}

export const exchangeRateSet =  {
    name: 'TokenConversion.ExchangeRateSet',
    v956: new EventType(
        'TokenConversion.ExchangeRateSet',
        sts.struct({
            lease: sts.number(),
            exchangeRate: v956.VstokenConversionExchangeRate,
        })
    ),
}

export const relaychainLeaseSet =  {
    name: 'TokenConversion.RelaychainLeaseSet',
    v956: new EventType(
        'TokenConversion.RelaychainLeaseSet',
        sts.struct({
            lease: sts.number(),
        })
    ),
}
