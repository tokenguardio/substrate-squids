import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v79 from '../v79'

export const unbondAndUnstake =  {
    name: 'DappStaking.unbond_and_unstake',
    /**
     * Wrapper around _legacy-like_ `unbond_and_unstake`.
     * 
     * Used to support legacy Ledger users so they can start the unlocking process for their funds.
     */
    v79: new CallType(
        'DappStaking.unbond_and_unstake',
        sts.struct({
            contractId: v79.SmartContract,
            value: sts.bigint(),
        })
    ),
}

export const withdrawUnbonded =  {
    name: 'DappStaking.withdraw_unbonded',
    /**
     * Wrapper around _legacy-like_ `withdraw_unbonded`.
     * 
     * Used to support legacy Ledger users so they can reclaim unlocked chunks back into
     * their _transferable_ free balance.
     */
    v79: new CallType(
        'DappStaking.withdraw_unbonded',
        sts.unit()
    ),
}

export const maintenanceMode =  {
    name: 'DappStaking.maintenance_mode',
    /**
     * Used to enable or disable maintenance mode.
     * Can only be called by manager origin.
     */
    v79: new CallType(
        'DappStaking.maintenance_mode',
        sts.struct({
            enabled: sts.boolean(),
        })
    ),
}

export const register =  {
    name: 'DappStaking.register',
    /**
     * Used to register a new contract for dApp staking.
     * 
     * If successful, smart contract will be assigned a simple, unique numerical identifier.
     * Owner is set to be initial beneficiary & manager of the dApp.
     */
    v79: new CallType(
        'DappStaking.register',
        sts.struct({
            owner: v79.AccountId32,
            smartContract: v79.SmartContract,
        })
    ),
}

export const setDappRewardBeneficiary =  {
    name: 'DappStaking.set_dapp_reward_beneficiary',
    /**
     * Used to modify the reward beneficiary account for a dApp.
     * 
     * Caller has to be dApp owner.
     * If set to `None`, rewards will be deposited to the dApp owner.
     * After this call, all existing & future rewards will be paid out to the beneficiary.
     */
    v79: new CallType(
        'DappStaking.set_dapp_reward_beneficiary',
        sts.struct({
            smartContract: v79.SmartContract,
            beneficiary: sts.option(() => v79.AccountId32),
        })
    ),
}

export const setDappOwner =  {
    name: 'DappStaking.set_dapp_owner',
    /**
     * Used to change dApp owner.
     * 
     * Can be called by dApp owner or dApp staking manager origin.
     * This is useful in two cases:
     * 1. when the dApp owner account is compromised, manager can change the owner to a new account
     * 2. if project wants to transfer ownership to a new account (DAO, multisig, etc.).
     */
    v79: new CallType(
        'DappStaking.set_dapp_owner',
        sts.struct({
            smartContract: v79.SmartContract,
            newOwner: v79.AccountId32,
        })
    ),
}

export const unregister =  {
    name: 'DappStaking.unregister',
    /**
     * Unregister dApp from dApp staking protocol, making it ineligible for future rewards.
     * This doesn't remove the dApp completely from the system just yet, but it can no longer be used for staking.
     * 
     * Can be called by dApp staking manager origin.
     */
    v79: new CallType(
        'DappStaking.unregister',
        sts.struct({
            smartContract: v79.SmartContract,
        })
    ),
}

export const lock =  {
    name: 'DappStaking.lock',
    /**
     * Locks additional funds into dApp staking.
     * 
     * In case caller account doesn't have sufficient balance to cover the specified amount, everything is locked.
     * After adjustment, lock amount must be greater than zero and in total must be equal or greater than the minimum locked amount.
     * 
     * Locked amount can immediately be used for staking.
     */
    v79: new CallType(
        'DappStaking.lock',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const unlock =  {
    name: 'DappStaking.unlock',
    /**
     * Attempts to start the unlocking process for the specified amount.
     * 
     * Only the amount that isn't actively used for staking can be unlocked.
     * If the amount is greater than the available amount for unlocking, everything is unlocked.
     * If the remaining locked amount would take the account below the minimum locked amount, everything is unlocked.
     */
    v79: new CallType(
        'DappStaking.unlock',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const claimUnlocked =  {
    name: 'DappStaking.claim_unlocked',
    /**
     * Claims all of fully unlocked chunks, removing the lock from them.
     */
    v79: new CallType(
        'DappStaking.claim_unlocked',
        sts.unit()
    ),
}

export const relockUnlocking =  {
    name: 'DappStaking.relock_unlocking',
    v79: new CallType(
        'DappStaking.relock_unlocking',
        sts.unit()
    ),
}

export const stake =  {
    name: 'DappStaking.stake',
    /**
     * Stake the specified amount on a smart contract.
     * The precise `amount` specified **must** be available for staking.
     * The total amount staked on a dApp must be greater than the minimum required value.
     * 
     * Depending on the period type, appropriate stake amount will be updated. During `Voting` subperiod, `voting` stake amount is updated,
     * and same for `Build&Earn` subperiod.
     * 
     * Staked amount is only eligible for rewards from the next era onwards.
     */
    v79: new CallType(
        'DappStaking.stake',
        sts.struct({
            smartContract: v79.SmartContract,
            amount: sts.bigint(),
        })
    ),
}

export const unstake =  {
    name: 'DappStaking.unstake',
    /**
     * Unstake the specified amount from a smart contract.
     * The `amount` specified **must** not exceed what's staked, otherwise the call will fail.
     * 
     * If unstaking the specified `amount` would take staker below the minimum stake threshold, everything is unstaked.
     * 
     * Depending on the period type, appropriate stake amount will be updated.
     * In case amount is unstaked during `Voting` subperiod, the `voting` amount is reduced.
     * In case amount is unstaked during `Build&Earn` subperiod, first the `build_and_earn` is reduced,
     * and any spillover is subtracted from the `voting` amount.
     */
    v79: new CallType(
        'DappStaking.unstake',
        sts.struct({
            smartContract: v79.SmartContract,
            amount: sts.bigint(),
        })
    ),
}

export const claimStakerRewards =  {
    name: 'DappStaking.claim_staker_rewards',
    /**
     * Claims some staker rewards, if user has any.
     * In the case of a successful call, at least one era will be claimed, with the possibility of multiple claims happening.
     */
    v79: new CallType(
        'DappStaking.claim_staker_rewards',
        sts.unit()
    ),
}

export const claimBonusReward =  {
    name: 'DappStaking.claim_bonus_reward',
    /**
     * Used to claim bonus reward for a smart contract, if eligible.
     */
    v79: new CallType(
        'DappStaking.claim_bonus_reward',
        sts.struct({
            smartContract: v79.SmartContract,
        })
    ),
}

export const claimDappReward =  {
    name: 'DappStaking.claim_dapp_reward',
    /**
     * Used to claim dApp reward for the specified era.
     */
    v79: new CallType(
        'DappStaking.claim_dapp_reward',
        sts.struct({
            smartContract: v79.SmartContract,
            era: sts.number(),
        })
    ),
}

export const unstakeFromUnregistered =  {
    name: 'DappStaking.unstake_from_unregistered',
    /**
     * Used to unstake funds from a contract that was unregistered after an account staked on it.
     * This is required if staker wants to re-stake these funds on another active contract during the ongoing period.
     */
    v79: new CallType(
        'DappStaking.unstake_from_unregistered',
        sts.struct({
            smartContract: v79.SmartContract,
        })
    ),
}

export const cleanupExpiredEntries =  {
    name: 'DappStaking.cleanup_expired_entries',
    /**
     * Cleanup expired stake entries for the contract.
     * 
     * Entry is considered to be expired if:
     * 1. It's from a past period & the account wasn't a loyal staker, meaning there's no claimable bonus reward.
     * 2. It's from a period older than the oldest claimable period, regardless whether the account was loyal or not.
     */
    v79: new CallType(
        'DappStaking.cleanup_expired_entries',
        sts.unit()
    ),
}

export const force =  {
    name: 'DappStaking.force',
    /**
     * Used to force a change of era or subperiod.
     * The effect isn't immediate but will happen on the next block.
     * 
     * Used for testing purposes, when we want to force an era change, or a subperiod change.
     * Not intended to be used in production, except in case of unforeseen circumstances.
     * 
     * Can only be called by manager origin.
     */
    v79: new CallType(
        'DappStaking.force',
        sts.struct({
            forcingType: v79.ForcingType,
        })
    ),
}
