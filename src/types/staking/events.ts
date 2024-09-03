import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v176 from '../v176'
import * as v183 from '../v183'

export const positionCreated =  {
    name: 'Staking.PositionCreated',
    /**
     * New staking position was created and NFT was minted.
     */
    v176: new EventType(
        'Staking.PositionCreated',
        sts.struct({
            who: v176.AccountId32,
            positionId: sts.bigint(),
            stake: sts.bigint(),
        })
    ),
}

export const stakeAdded =  {
    name: 'Staking.StakeAdded',
    /**
     * Staked amount for existing position was increased.
     */
    v176: new EventType(
        'Staking.StakeAdded',
        sts.struct({
            who: v176.AccountId32,
            positionId: sts.bigint(),
            stake: sts.bigint(),
            totalStake: sts.bigint(),
            lockedRewards: sts.bigint(),
            slashedPoints: sts.bigint(),
        })
    ),
    /**
     * Staked amount for existing position was increased.
     */
    v183: new EventType(
        'Staking.StakeAdded',
        sts.struct({
            who: v183.AccountId32,
            positionId: sts.bigint(),
            stake: sts.bigint(),
            totalStake: sts.bigint(),
            lockedRewards: sts.bigint(),
            slashedPoints: sts.bigint(),
            payablePercentage: v183.FixedU128,
        })
    ),
}

export const rewardsClaimed =  {
    name: 'Staking.RewardsClaimed',
    /**
     * Rewards were claimed.
     */
    v176: new EventType(
        'Staking.RewardsClaimed',
        sts.struct({
            who: v176.AccountId32,
            positionId: sts.bigint(),
            paidRewards: sts.bigint(),
            unlockedRewards: sts.bigint(),
            slashedPoints: sts.bigint(),
            slashedUnpaidRewards: sts.bigint(),
        })
    ),
    /**
     * Rewards were claimed.
     */
    v183: new EventType(
        'Staking.RewardsClaimed',
        sts.struct({
            who: v183.AccountId32,
            positionId: sts.bigint(),
            paidRewards: sts.bigint(),
            unlockedRewards: sts.bigint(),
            slashedPoints: sts.bigint(),
            slashedUnpaidRewards: sts.bigint(),
            payablePercentage: v183.FixedU128,
        })
    ),
}

export const unstaked =  {
    name: 'Staking.Unstaked',
    /**
     * Staked amount was withdrawn and NFT was burned.
     */
    v176: new EventType(
        'Staking.Unstaked',
        sts.struct({
            who: v176.AccountId32,
            positionId: sts.bigint(),
            unlockedStake: sts.bigint(),
            rewards: sts.bigint(),
            unlockedRewards: sts.bigint(),
        })
    ),
    /**
     * Staked amount was withdrawn and NFT was burned.
     */
    v183: new EventType(
        'Staking.Unstaked',
        sts.struct({
            who: v183.AccountId32,
            positionId: sts.bigint(),
            unlockedStake: sts.bigint(),
        })
    ),
}

export const stakingInitialized =  {
    name: 'Staking.StakingInitialized',
    /**
     * Staking was initialized.
     */
    v176: new EventType(
        'Staking.StakingInitialized',
        sts.struct({
            nonDustableBalance: sts.bigint(),
        })
    ),
}

export const accumulatedRpsUpdated =  {
    name: 'Staking.AccumulatedRpsUpdated',
    /**
     * Staking's `accumulated_reward_per_stake` was updated.
     */
    v176: new EventType(
        'Staking.AccumulatedRpsUpdated',
        sts.struct({
            accumulatedRps: v176.FixedU128,
            totalStake: sts.bigint(),
        })
    ),
}
