import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v954 from '../v954'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v974 from '../v974'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const setUserFeeChargeOrder =  {
    name: 'FlexibleFee.set_user_fee_charge_order',
    /**
     * Set user fee charge assets order.
     */
    v954: new CallType(
        'FlexibleFee.set_user_fee_charge_order',
        sts.struct({
            assetOrderListVec: sts.option(() => sts.array(() => v954.CurrencyId)),
        })
    ),
    /**
     * Set user fee charge assets order.
     */
    v956: new CallType(
        'FlexibleFee.set_user_fee_charge_order',
        sts.struct({
            assetOrderListVec: sts.option(() => sts.array(() => v956.CurrencyId)),
        })
    ),
    /**
     * Set user fee charge assets order.
     */
    v962: new CallType(
        'FlexibleFee.set_user_fee_charge_order',
        sts.struct({
            assetOrderListVec: sts.option(() => sts.array(() => v962.CurrencyId)),
        })
    ),
}

export const setUserDefaultFeeCurrency =  {
    name: 'FlexibleFee.set_user_default_fee_currency',
    /**
     * Set user default fee currency
     */
    v974: new CallType(
        'FlexibleFee.set_user_default_fee_currency',
        sts.struct({
            maybeFeeCurrency: sts.option(() => v974.CurrencyId),
        })
    ),
    /**
     * Set user default fee currency
     */
    v980: new CallType(
        'FlexibleFee.set_user_default_fee_currency',
        sts.struct({
            maybeFeeCurrency: sts.option(() => v980.CurrencyId),
        })
    ),
    /**
     * See [`Pallet::set_user_default_fee_currency`].
     */
    v990: new CallType(
        'FlexibleFee.set_user_default_fee_currency',
        sts.struct({
            maybeFeeCurrency: sts.option(() => v990.CurrencyId),
        })
    ),
}

export const setUniversalFeeCurrencyOrderList =  {
    name: 'FlexibleFee.set_universal_fee_currency_order_list',
    /**
     * Set universal fee currency order list
     */
    v974: new CallType(
        'FlexibleFee.set_universal_fee_currency_order_list',
        sts.struct({
            defaultList: sts.array(() => v974.CurrencyId),
        })
    ),
    /**
     * Set universal fee currency order list
     */
    v980: new CallType(
        'FlexibleFee.set_universal_fee_currency_order_list',
        sts.struct({
            defaultList: sts.array(() => v980.CurrencyId),
        })
    ),
    /**
     * See [`Pallet::set_universal_fee_currency_order_list`].
     */
    v990: new CallType(
        'FlexibleFee.set_universal_fee_currency_order_list',
        sts.struct({
            defaultList: sts.array(() => v990.CurrencyId),
        })
    ),
}

export const removeFromUserFeeChargeOrderList =  {
    name: 'FlexibleFee.remove_from_user_fee_charge_order_list',
    v974: new CallType(
        'FlexibleFee.remove_from_user_fee_charge_order_list',
        sts.unit()
    ),
}
