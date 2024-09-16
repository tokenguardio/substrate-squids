import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v13000 from '../v13000'

export const setConfig =  {
    name: 'BbBNC.set_config',
    v13000: new CallType(
        'BbBNC.set_config',
        sts.struct({
            minMint: sts.option(() => sts.bigint()),
            minBlock: sts.option(() => sts.number()),
        })
    ),
}

export const createLock =  {
    name: 'BbBNC.create_lock',
    v13000: new CallType(
        'BbBNC.create_lock',
        sts.struct({
            value: sts.bigint(),
            unlockTime: sts.number(),
        })
    ),
}

export const increaseAmount =  {
    name: 'BbBNC.increase_amount',
    v13000: new CallType(
        'BbBNC.increase_amount',
        sts.struct({
            position: sts.bigint(),
            value: sts.bigint(),
        })
    ),
}

export const increaseUnlockTime =  {
    name: 'BbBNC.increase_unlock_time',
    v13000: new CallType(
        'BbBNC.increase_unlock_time',
        sts.struct({
            position: sts.bigint(),
            time: sts.number(),
        })
    ),
}

export const withdraw =  {
    name: 'BbBNC.withdraw',
    v13000: new CallType(
        'BbBNC.withdraw',
        sts.struct({
            position: sts.bigint(),
        })
    ),
}

export const notifyRewards =  {
    name: 'BbBNC.notify_rewards',
    v13000: new CallType(
        'BbBNC.notify_rewards',
        sts.struct({
            incentiveFrom: v13000.AccountId32,
            rewardsDuration: sts.option(() => sts.number()),
            rewards: sts.array(() => sts.tuple(() => [v13000.CurrencyId, sts.bigint()])),
        })
    ),
}

export const getRewards =  {
    name: 'BbBNC.get_rewards',
    v13000: new CallType(
        'BbBNC.get_rewards',
        sts.unit()
    ),
}

export const redeemUnlock =  {
    name: 'BbBNC.redeem_unlock',
    v13000: new CallType(
        'BbBNC.redeem_unlock',
        sts.struct({
            position: sts.bigint(),
        })
    ),
}

export const setMarkupCoefficient =  {
    name: 'BbBNC.set_markup_coefficient',
    v13000: new CallType(
        'BbBNC.set_markup_coefficient',
        sts.struct({
            assetId: v13000.CurrencyId,
            markup: v13000.FixedU128,
            hardcap: v13000.FixedU128,
        })
    ),
}

export const depositMarkup =  {
    name: 'BbBNC.deposit_markup',
    v13000: new CallType(
        'BbBNC.deposit_markup',
        sts.struct({
            assetId: v13000.CurrencyId,
            value: sts.bigint(),
        })
    ),
}

export const withdrawMarkup =  {
    name: 'BbBNC.withdraw_markup',
    v13000: new CallType(
        'BbBNC.withdraw_markup',
        sts.struct({
            assetId: v13000.CurrencyId,
        })
    ),
}

export const refresh =  {
    name: 'BbBNC.refresh',
    v13000: new CallType(
        'BbBNC.refresh',
        sts.struct({
            assetId: v13000.CurrencyId,
        })
    ),
}
