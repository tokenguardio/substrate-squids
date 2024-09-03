import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v108 from '../v108'

export const transfer =  {
    name: 'Currencies.transfer',
    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    v108: new CallType(
        'Currencies.transfer',
        sts.struct({
            dest: v108.AccountId32,
            currencyId: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const transferNativeCurrency =  {
    name: 'Currencies.transfer_native_currency',
    /**
     * Transfer some native currency to another account.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    v108: new CallType(
        'Currencies.transfer_native_currency',
        sts.struct({
            dest: v108.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const updateBalance =  {
    name: 'Currencies.update_balance',
    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    v108: new CallType(
        'Currencies.update_balance',
        sts.struct({
            who: v108.AccountId32,
            currencyId: sts.number(),
            amount: sts.bigint(),
        })
    ),
}
