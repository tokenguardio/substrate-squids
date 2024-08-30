import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v970 from '../v970'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v10000 from '../v10000'

export const configSet =  {
    name: 'VeMinting.ConfigSet',
    v970: new EventType(
        'VeMinting.ConfigSet',
        sts.struct({
            config: v970.VeConfig,
        })
    ),
}

export const minted =  {
    name: 'VeMinting.Minted',
    v970: new EventType(
        'VeMinting.Minted',
        sts.struct({
            addr: v970.AccountId32,
            value: sts.bigint(),
            end: sts.number(),
            now: sts.number(),
        })
    ),
    v10000: new EventType(
        'VeMinting.Minted',
        sts.struct({
            addr: sts.bigint(),
            value: sts.bigint(),
            end: sts.number(),
            now: sts.number(),
        })
    ),
}

export const supply =  {
    name: 'VeMinting.Supply',
    v970: new EventType(
        'VeMinting.Supply',
        sts.struct({
            supplyBefore: sts.bigint(),
            supply: sts.bigint(),
        })
    ),
}

export const lockCreated =  {
    name: 'VeMinting.LockCreated',
    v970: new EventType(
        'VeMinting.LockCreated',
        sts.struct({
            addr: v970.AccountId32,
            value: sts.bigint(),
            unlockTime: sts.number(),
        })
    ),
}

export const unlockTimeIncreased =  {
    name: 'VeMinting.UnlockTimeIncreased',
    v970: new EventType(
        'VeMinting.UnlockTimeIncreased',
        sts.struct({
            addr: v970.AccountId32,
            unlockTime: sts.number(),
        })
    ),
    v10000: new EventType(
        'VeMinting.UnlockTimeIncreased',
        sts.struct({
            addr: sts.bigint(),
            unlockTime: sts.number(),
        })
    ),
}

export const amountIncreased =  {
    name: 'VeMinting.AmountIncreased',
    v970: new EventType(
        'VeMinting.AmountIncreased',
        sts.struct({
            addr: v970.AccountId32,
            value: sts.bigint(),
        })
    ),
    v10000: new EventType(
        'VeMinting.AmountIncreased',
        sts.struct({
            who: v10000.AccountId32,
            position: sts.bigint(),
            value: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'VeMinting.Withdrawn',
    v970: new EventType(
        'VeMinting.Withdrawn',
        sts.struct({
            addr: v970.AccountId32,
            value: sts.bigint(),
        })
    ),
    v10000: new EventType(
        'VeMinting.Withdrawn',
        sts.struct({
            addr: sts.bigint(),
            value: sts.bigint(),
        })
    ),
}

export const incentiveSet =  {
    name: 'VeMinting.IncentiveSet',
    v970: new EventType(
        'VeMinting.IncentiveSet',
        sts.struct({
            rewardsDuration: sts.number(),
        })
    ),
    v10000: new EventType(
        'VeMinting.IncentiveSet',
        sts.struct({
            incentiveConfig: v10000.IncentiveConfig,
        })
    ),
}

export const rewardAdded =  {
    name: 'VeMinting.RewardAdded',
    v970: new EventType(
        'VeMinting.RewardAdded',
        sts.struct({
            rewards: sts.array(() => sts.tuple(() => [v970.CurrencyId, sts.bigint()])),
        })
    ),
    v980: new EventType(
        'VeMinting.RewardAdded',
        sts.struct({
            rewards: sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()])),
        })
    ),
    v990: new EventType(
        'VeMinting.RewardAdded',
        sts.struct({
            rewards: sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()])),
        })
    ),
}

export const rewarded =  {
    name: 'VeMinting.Rewarded',
    v970: new EventType(
        'VeMinting.Rewarded',
        sts.struct({
            addr: v970.AccountId32,
            rewards: sts.array(() => sts.tuple(() => [v970.CurrencyId, sts.bigint()])),
        })
    ),
    v980: new EventType(
        'VeMinting.Rewarded',
        sts.struct({
            addr: v980.AccountId32,
            rewards: sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()])),
        })
    ),
    v990: new EventType(
        'VeMinting.Rewarded',
        sts.struct({
            addr: v990.AccountId32,
            rewards: sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()])),
        })
    ),
}

export const allRefreshed =  {
    name: 'VeMinting.AllRefreshed',
    v10000: new EventType(
        'VeMinting.AllRefreshed',
        sts.struct({
            assetId: v10000.CurrencyId,
        })
    ),
}

export const partiallyRefreshed =  {
    name: 'VeMinting.PartiallyRefreshed',
    v10000: new EventType(
        'VeMinting.PartiallyRefreshed',
        sts.struct({
            assetId: v10000.CurrencyId,
        })
    ),
}
