import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v970 from '../v970'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v10000 from '../v10000'

export const setConfig =  {
    name: 'VeMinting.set_config',
    v970: new CallType(
        'VeMinting.set_config',
        sts.struct({
            minMint: sts.option(() => sts.bigint()),
            minBlock: sts.option(() => sts.number()),
        })
    ),
}

export const createLock =  {
    name: 'VeMinting.create_lock',
    v970: new CallType(
        'VeMinting.create_lock',
        sts.struct({
            value: sts.bigint(),
            unlockTime: sts.number(),
        })
    ),
}

export const increaseAmount =  {
    name: 'VeMinting.increase_amount',
    v970: new CallType(
        'VeMinting.increase_amount',
        sts.struct({
            value: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::increase_amount`].
     */
    v10000: new CallType(
        'VeMinting.increase_amount',
        sts.struct({
            position: sts.bigint(),
            value: sts.bigint(),
        })
    ),
}

export const increaseUnlockTime =  {
    name: 'VeMinting.increase_unlock_time',
    v970: new CallType(
        'VeMinting.increase_unlock_time',
        sts.struct({
            time: sts.number(),
        })
    ),
    /**
     * See [`Pallet::increase_unlock_time`].
     */
    v10000: new CallType(
        'VeMinting.increase_unlock_time',
        sts.struct({
            position: sts.bigint(),
            time: sts.number(),
        })
    ),
}

export const withdraw =  {
    name: 'VeMinting.withdraw',
    v970: new CallType(
        'VeMinting.withdraw',
        sts.unit()
    ),
    /**
     * See [`Pallet::withdraw`].
     */
    v10000: new CallType(
        'VeMinting.withdraw',
        sts.struct({
            position: sts.bigint(),
        })
    ),
}

export const notifyRewards =  {
    name: 'VeMinting.notify_rewards',
    v970: new CallType(
        'VeMinting.notify_rewards',
        sts.struct({
            incentiveFrom: v970.AccountId32,
            rewardsDuration: sts.option(() => sts.number()),
            rewards: sts.array(() => sts.tuple(() => [v970.CurrencyId, sts.bigint()])),
        })
    ),
    v980: new CallType(
        'VeMinting.notify_rewards',
        sts.struct({
            incentiveFrom: v980.AccountId32,
            rewardsDuration: sts.option(() => sts.number()),
            rewards: sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::notify_rewards`].
     */
    v990: new CallType(
        'VeMinting.notify_rewards',
        sts.struct({
            incentiveFrom: v990.AccountId32,
            rewardsDuration: sts.option(() => sts.number()),
            rewards: sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()])),
        })
    ),
}

export const getRewards =  {
    name: 'VeMinting.get_rewards',
    v970: new CallType(
        'VeMinting.get_rewards',
        sts.unit()
    ),
}

export const redeemUnlock =  {
    name: 'VeMinting.redeem_unlock',
    /**
     * See [`Pallet::redeem_unlock`].
     */
    v10000: new CallType(
        'VeMinting.redeem_unlock',
        sts.struct({
            position: sts.bigint(),
        })
    ),
}

export const setMarkupCoefficient =  {
    name: 'VeMinting.set_markup_coefficient',
    /**
     * See [`Pallet::set_markup_coefficient`].
     */
    v10000: new CallType(
        'VeMinting.set_markup_coefficient',
        sts.struct({
            assetId: v10000.CurrencyId,
            markup: v10000.FixedU128,
            hardcap: v10000.FixedU128,
        })
    ),
}

export const depositMarkup =  {
    name: 'VeMinting.deposit_markup',
    /**
     * See [`Pallet::deposit_markup`].
     */
    v10000: new CallType(
        'VeMinting.deposit_markup',
        sts.struct({
            assetId: v10000.CurrencyId,
            value: sts.bigint(),
        })
    ),
}

export const withdrawMarkup =  {
    name: 'VeMinting.withdraw_markup',
    /**
     * See [`Pallet::withdraw_markup`].
     */
    v10000: new CallType(
        'VeMinting.withdraw_markup',
        sts.struct({
            assetId: v10000.CurrencyId,
        })
    ),
}

export const refresh =  {
    name: 'VeMinting.refresh',
    /**
     * See [`Pallet::refresh`].
     */
    v10000: new CallType(
        'VeMinting.refresh',
        sts.struct({
            assetId: v10000.CurrencyId,
        })
    ),
}
