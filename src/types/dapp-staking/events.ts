import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v79 from '../v79'
import * as v90 from '../v90'

export const maintenanceMode =  {
    name: 'DappStaking.MaintenanceMode',
    /**
     * Maintenance mode has been either enabled or disabled.
     */
    v79: new EventType(
        'DappStaking.MaintenanceMode',
        sts.struct({
            enabled: sts.boolean(),
        })
    ),
}

export const newEra =  {
    name: 'DappStaking.NewEra',
    /**
     * New era has started.
     */
    v79: new EventType(
        'DappStaking.NewEra',
        sts.struct({
            era: sts.number(),
        })
    ),
}

export const newSubperiod =  {
    name: 'DappStaking.NewSubperiod',
    /**
     * New subperiod has started.
     */
    v79: new EventType(
        'DappStaking.NewSubperiod',
        sts.struct({
            subperiod: v79.Subperiod,
            number: sts.number(),
        })
    ),
}

export const dAppRegistered =  {
    name: 'DappStaking.DAppRegistered',
    /**
     * A smart contract has been registered for dApp staking
     */
    v79: new EventType(
        'DappStaking.DAppRegistered',
        sts.struct({
            owner: v79.AccountId32,
            smartContract: v79.SmartContract,
            dappId: sts.number(),
        })
    ),
}

export const dAppRewardDestinationUpdated =  {
    name: 'DappStaking.DAppRewardDestinationUpdated',
    /**
     * dApp reward destination has been updated.
     */
    v79: new EventType(
        'DappStaking.DAppRewardDestinationUpdated',
        sts.struct({
            smartContract: v79.SmartContract,
            beneficiary: sts.option(() => v79.AccountId32),
        })
    ),
}

export const dAppOwnerChanged =  {
    name: 'DappStaking.DAppOwnerChanged',
    /**
     * dApp owner has been changed.
     */
    v79: new EventType(
        'DappStaking.DAppOwnerChanged',
        sts.struct({
            smartContract: v79.SmartContract,
            newOwner: v79.AccountId32,
        })
    ),
}

export const dAppUnregistered =  {
    name: 'DappStaking.DAppUnregistered',
    /**
     * dApp has been unregistered
     */
    v79: new EventType(
        'DappStaking.DAppUnregistered',
        sts.struct({
            smartContract: v79.SmartContract,
            era: sts.number(),
        })
    ),
}

export const locked =  {
    name: 'DappStaking.Locked',
    /**
     * Account has locked some amount into dApp staking.
     */
    v79: new EventType(
        'DappStaking.Locked',
        sts.struct({
            account: v79.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unlocking =  {
    name: 'DappStaking.Unlocking',
    /**
     * Account has started the unlocking process for some amount.
     */
    v79: new EventType(
        'DappStaking.Unlocking',
        sts.struct({
            account: v79.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const claimedUnlocked =  {
    name: 'DappStaking.ClaimedUnlocked',
    /**
     * Account has claimed unlocked amount, removing the lock from it.
     */
    v79: new EventType(
        'DappStaking.ClaimedUnlocked',
        sts.struct({
            account: v79.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const relock =  {
    name: 'DappStaking.Relock',
    /**
     * Account has relocked all of the unlocking chunks.
     */
    v79: new EventType(
        'DappStaking.Relock',
        sts.struct({
            account: v79.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const stake =  {
    name: 'DappStaking.Stake',
    /**
     * Account has staked some amount on a smart contract.
     */
    v79: new EventType(
        'DappStaking.Stake',
        sts.struct({
            account: v79.AccountId32,
            smartContract: v79.SmartContract,
            amount: sts.bigint(),
        })
    ),
}

export const unstake =  {
    name: 'DappStaking.Unstake',
    /**
     * Account has unstaked some amount from a smart contract.
     */
    v79: new EventType(
        'DappStaking.Unstake',
        sts.struct({
            account: v79.AccountId32,
            smartContract: v79.SmartContract,
            amount: sts.bigint(),
        })
    ),
}

export const reward =  {
    name: 'DappStaking.Reward',
    /**
     * Account has claimed some stake rewards.
     */
    v79: new EventType(
        'DappStaking.Reward',
        sts.struct({
            account: v79.AccountId32,
            era: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const bonusReward =  {
    name: 'DappStaking.BonusReward',
    /**
     * Bonus reward has been paid out to a loyal staker.
     */
    v79: new EventType(
        'DappStaking.BonusReward',
        sts.struct({
            account: v79.AccountId32,
            smartContract: v79.SmartContract,
            period: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const dAppReward =  {
    name: 'DappStaking.DAppReward',
    /**
     * dApp reward has been paid out to a beneficiary.
     */
    v79: new EventType(
        'DappStaking.DAppReward',
        sts.struct({
            beneficiary: v79.AccountId32,
            smartContract: v79.SmartContract,
            tierId: sts.number(),
            era: sts.number(),
            amount: sts.bigint(),
        })
    ),
    /**
     * dApp reward has been paid out to a beneficiary.
     */
    v90: new EventType(
        'DappStaking.DAppReward',
        sts.struct({
            beneficiary: v90.AccountId32,
            smartContract: v90.SmartContract,
            tierId: sts.number(),
            rank: sts.number(),
            era: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const unstakeFromUnregistered =  {
    name: 'DappStaking.UnstakeFromUnregistered',
    /**
     * Account has unstaked funds from an unregistered smart contract
     */
    v79: new EventType(
        'DappStaking.UnstakeFromUnregistered',
        sts.struct({
            account: v79.AccountId32,
            smartContract: v79.SmartContract,
            amount: sts.bigint(),
        })
    ),
}

export const expiredEntriesRemoved =  {
    name: 'DappStaking.ExpiredEntriesRemoved',
    /**
     * Some expired stake entries have been removed from storage.
     */
    v79: new EventType(
        'DappStaking.ExpiredEntriesRemoved',
        sts.struct({
            account: v79.AccountId32,
            count: sts.number(),
        })
    ),
}

export const force =  {
    name: 'DappStaking.Force',
    /**
     * Privileged origin has forced a new era and possibly a subperiod to start from next block.
     */
    v79: new EventType(
        'DappStaking.Force',
        sts.struct({
            forcingType: v79.ForcingType,
        })
    ),
}
