import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v13000 from '../v13000'

export const configSet =  {
    name: 'BbBNC.ConfigSet',
    v13000: new EventType(
        'BbBNC.ConfigSet',
        sts.struct({
            config: v13000.VeConfig,
        })
    ),
}

export const minted =  {
    name: 'BbBNC.Minted',
    v13000: new EventType(
        'BbBNC.Minted',
        sts.struct({
            addr: sts.bigint(),
            value: sts.bigint(),
            end: sts.number(),
            now: sts.number(),
        })
    ),
}

export const supply =  {
    name: 'BbBNC.Supply',
    v13000: new EventType(
        'BbBNC.Supply',
        sts.struct({
            supplyBefore: sts.bigint(),
            supply: sts.bigint(),
        })
    ),
}

export const lockCreated =  {
    name: 'BbBNC.LockCreated',
    v13000: new EventType(
        'BbBNC.LockCreated',
        sts.struct({
            addr: v13000.AccountId32,
            value: sts.bigint(),
            unlockTime: sts.number(),
        })
    ),
}

export const unlockTimeIncreased =  {
    name: 'BbBNC.UnlockTimeIncreased',
    v13000: new EventType(
        'BbBNC.UnlockTimeIncreased',
        sts.struct({
            addr: sts.bigint(),
            unlockTime: sts.number(),
        })
    ),
}

export const amountIncreased =  {
    name: 'BbBNC.AmountIncreased',
    v13000: new EventType(
        'BbBNC.AmountIncreased',
        sts.struct({
            who: v13000.AccountId32,
            position: sts.bigint(),
            value: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'BbBNC.Withdrawn',
    v13000: new EventType(
        'BbBNC.Withdrawn',
        sts.struct({
            addr: sts.bigint(),
            value: sts.bigint(),
        })
    ),
}

export const incentiveSet =  {
    name: 'BbBNC.IncentiveSet',
    v13000: new EventType(
        'BbBNC.IncentiveSet',
        sts.struct({
            incentiveConfig: v13000.IncentiveConfig,
        })
    ),
}

export const rewardAdded =  {
    name: 'BbBNC.RewardAdded',
    v13000: new EventType(
        'BbBNC.RewardAdded',
        sts.struct({
            rewards: sts.array(() => sts.tuple(() => [v13000.CurrencyId, sts.bigint()])),
        })
    ),
}

export const rewarded =  {
    name: 'BbBNC.Rewarded',
    v13000: new EventType(
        'BbBNC.Rewarded',
        sts.struct({
            addr: v13000.AccountId32,
            rewards: sts.array(() => sts.tuple(() => [v13000.CurrencyId, sts.bigint()])),
        })
    ),
}

export const allRefreshed =  {
    name: 'BbBNC.AllRefreshed',
    v13000: new EventType(
        'BbBNC.AllRefreshed',
        sts.struct({
            assetId: v13000.CurrencyId,
        })
    ),
}

export const partiallyRefreshed =  {
    name: 'BbBNC.PartiallyRefreshed',
    v13000: new EventType(
        'BbBNC.PartiallyRefreshed',
        sts.struct({
            assetId: v13000.CurrencyId,
        })
    ),
}

export const notifyRewardFailed =  {
    name: 'BbBNC.NotifyRewardFailed',
    v13000: new EventType(
        'BbBNC.NotifyRewardFailed',
        sts.struct({
            rewards: sts.array(() => sts.tuple(() => [v13000.CurrencyId, sts.bigint()])),
        })
    ),
}
