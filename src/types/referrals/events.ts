import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v201 from '../v201'

export const codeRegistered =  {
    name: 'Referrals.CodeRegistered',
    /**
     * Referral code has been registered.
     */
    v201: new EventType(
        'Referrals.CodeRegistered',
        sts.struct({
            code: sts.bytes(),
            account: v201.AccountId32,
        })
    ),
}

export const codeLinked =  {
    name: 'Referrals.CodeLinked',
    /**
     * Referral code has been linked to an account.
     */
    v201: new EventType(
        'Referrals.CodeLinked',
        sts.struct({
            account: v201.AccountId32,
            code: sts.bytes(),
            referralAccount: v201.AccountId32,
        })
    ),
}

export const converted =  {
    name: 'Referrals.Converted',
    /**
     * Asset has been converted to RewardAsset.
     */
    v201: new EventType(
        'Referrals.Converted',
        sts.struct({
            from: v201.Type_110,
            to: v201.Type_110,
        })
    ),
}

export const claimed =  {
    name: 'Referrals.Claimed',
    /**
     * Rewards claimed.
     */
    v201: new EventType(
        'Referrals.Claimed',
        sts.struct({
            who: v201.AccountId32,
            referrerRewards: sts.bigint(),
            tradeRewards: sts.bigint(),
        })
    ),
}

export const assetRewardsUpdated =  {
    name: 'Referrals.AssetRewardsUpdated',
    /**
     * New asset rewards has been set.
     */
    v201: new EventType(
        'Referrals.AssetRewardsUpdated',
        sts.struct({
            assetId: sts.number(),
            level: v201.Level,
            rewards: v201.FeeDistribution,
        })
    ),
}

export const levelUp =  {
    name: 'Referrals.LevelUp',
    /**
     * Referrer reached new level.
     */
    v201: new EventType(
        'Referrals.LevelUp',
        sts.struct({
            who: v201.AccountId32,
            level: v201.Level,
        })
    ),
}
