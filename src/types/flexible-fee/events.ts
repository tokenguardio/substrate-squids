import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v954 from '../v954'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v982 from '../v982'
import * as v990 from '../v990'
import * as v12001 from '../v12001'

export const flexibleFeeExchanged =  {
    name: 'FlexibleFee.FlexibleFeeExchanged',
    v954: new EventType(
        'FlexibleFee.FlexibleFeeExchanged',
        sts.tuple([v954.CurrencyId, sts.bigint()])
    ),
    v956: new EventType(
        'FlexibleFee.FlexibleFeeExchanged',
        sts.tuple([v956.CurrencyId, sts.bigint()])
    ),
    v962: new EventType(
        'FlexibleFee.FlexibleFeeExchanged',
        sts.tuple([v962.CurrencyId, sts.bigint()])
    ),
    v980: new EventType(
        'FlexibleFee.FlexibleFeeExchanged',
        sts.tuple([v980.CurrencyId, sts.bigint()])
    ),
    v990: new EventType(
        'FlexibleFee.FlexibleFeeExchanged',
        sts.tuple([v990.CurrencyId, sts.bigint()])
    ),
    v12001: new EventType(
        'FlexibleFee.FlexibleFeeExchanged',
        sts.struct({
            transactionFeeCurrency: v12001.CurrencyId,
            transactionFeeAmount: sts.bigint(),
        })
    ),
}

export const fixedRateFeeExchanged =  {
    name: 'FlexibleFee.FixedRateFeeExchanged',
    v954: new EventType(
        'FlexibleFee.FixedRateFeeExchanged',
        sts.tuple([v954.CurrencyId, sts.bigint()])
    ),
    v956: new EventType(
        'FlexibleFee.FixedRateFeeExchanged',
        sts.tuple([v956.CurrencyId, sts.bigint()])
    ),
    v962: new EventType(
        'FlexibleFee.FixedRateFeeExchanged',
        sts.tuple([v962.CurrencyId, sts.bigint()])
    ),
    v980: new EventType(
        'FlexibleFee.FixedRateFeeExchanged',
        sts.tuple([v980.CurrencyId, sts.bigint()])
    ),
    v990: new EventType(
        'FlexibleFee.FixedRateFeeExchanged',
        sts.tuple([v990.CurrencyId, sts.bigint()])
    ),
}

export const extraFeeDeducted =  {
    name: 'FlexibleFee.ExtraFeeDeducted',
    v954: new EventType(
        'FlexibleFee.ExtraFeeDeducted',
        sts.tuple([v954.ExtraFeeName, v954.CurrencyId, sts.bigint()])
    ),
    v956: new EventType(
        'FlexibleFee.ExtraFeeDeducted',
        sts.tuple([v956.ExtraFeeName, v956.CurrencyId, sts.bigint()])
    ),
    v962: new EventType(
        'FlexibleFee.ExtraFeeDeducted',
        sts.tuple([v962.ExtraFeeName, v962.CurrencyId, sts.bigint()])
    ),
    v980: new EventType(
        'FlexibleFee.ExtraFeeDeducted',
        sts.tuple([v980.ExtraFeeName, v980.CurrencyId, sts.bigint()])
    ),
    v982: new EventType(
        'FlexibleFee.ExtraFeeDeducted',
        sts.tuple([v982.ExtraFeeName, v982.CurrencyId, sts.bigint(), sts.bigint()])
    ),
    v990: new EventType(
        'FlexibleFee.ExtraFeeDeducted',
        sts.tuple([v990.ExtraFeeName, v990.CurrencyId, sts.bigint(), sts.bigint()])
    ),
    v12001: new EventType(
        'FlexibleFee.ExtraFeeDeducted',
        sts.struct({
            operation: v12001.ExtraFeeName,
            transactionExtraFeeCurrency: v12001.CurrencyId,
            transactionExtraFeeAmount: sts.bigint(),
            transactionExtraFeeBncAmount: sts.bigint(),
            transactionExtraFeeReceiver: v12001.AccountId32,
        })
    ),
}

export const transferTo =  {
    name: 'FlexibleFee.TransferTo',
    v12001: new EventType(
        'FlexibleFee.TransferTo',
        sts.struct({
            from: v12001.AccountId32,
            targetChain: v12001.Type_494,
            amount: sts.bigint(),
        })
    ),
}
