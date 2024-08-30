import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const switchoffTransaction =  {
    name: 'CallSwitchgear.switchoff_transaction',
    v952: new CallType(
        'CallSwitchgear.switchoff_transaction',
        sts.struct({
            palletName: sts.bytes(),
            functionName: sts.bytes(),
        })
    ),
}

export const switchonTransaction =  {
    name: 'CallSwitchgear.switchon_transaction',
    v952: new CallType(
        'CallSwitchgear.switchon_transaction',
        sts.struct({
            palletName: sts.bytes(),
            functionName: sts.bytes(),
        })
    ),
}

export const disableTransfers =  {
    name: 'CallSwitchgear.disable_transfers',
    v952: new CallType(
        'CallSwitchgear.disable_transfers',
        sts.struct({
            currencyId: v952.CurrencyId,
        })
    ),
    v956: new CallType(
        'CallSwitchgear.disable_transfers',
        sts.struct({
            currencyId: v956.CurrencyId,
        })
    ),
    v962: new CallType(
        'CallSwitchgear.disable_transfers',
        sts.struct({
            currencyId: v962.CurrencyId,
        })
    ),
    v980: new CallType(
        'CallSwitchgear.disable_transfers',
        sts.struct({
            currencyId: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::disable_transfers`].
     */
    v990: new CallType(
        'CallSwitchgear.disable_transfers',
        sts.struct({
            currencyId: v990.CurrencyId,
        })
    ),
}

export const enableTransfers =  {
    name: 'CallSwitchgear.enable_transfers',
    v952: new CallType(
        'CallSwitchgear.enable_transfers',
        sts.struct({
            currencyId: v952.CurrencyId,
        })
    ),
    v956: new CallType(
        'CallSwitchgear.enable_transfers',
        sts.struct({
            currencyId: v956.CurrencyId,
        })
    ),
    v962: new CallType(
        'CallSwitchgear.enable_transfers',
        sts.struct({
            currencyId: v962.CurrencyId,
        })
    ),
    v980: new CallType(
        'CallSwitchgear.enable_transfers',
        sts.struct({
            currencyId: v980.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::enable_transfers`].
     */
    v990: new CallType(
        'CallSwitchgear.enable_transfers',
        sts.struct({
            currencyId: v990.CurrencyId,
        })
    ),
}
