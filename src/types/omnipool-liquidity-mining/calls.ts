import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v138 from '../v138'

export const createGlobalFarm =  {
    name: 'OmnipoolLiquidityMining.create_global_farm',
    /**
     * Create a new liquidity mining program with provided parameters.
     * 
     * `owner` account has to have at least `total_rewards` balance. These funds will be
     * transferred from `owner` to farm account.
     * 
     * The dispatch origin for this call must be `T::CreateOrigin`.
     * !!!WARN: `T::CreateOrigin` has power over funds of `owner`'s account and it should be
     * configured to trusted origin e.g Sudo or Governance.
     * 
     * Parameters:
     * - `origin`: account allowed to create new liquidity mining program(root, governance).
     * - `total_rewards`: total rewards planned to distribute. These rewards will be
     * distributed between all yield farms in the global farm.
     * - `planned_yielding_periods`: planned number of periods to distribute `total_rewards`.
     * WARN: THIS IS NOT HARD DEADLINE. Not all rewards have to be distributed in
     * `planned_yielding_periods`. Rewards are distributed based on the situation in the yield
     * farms and can be distributed in a longer, though never in a shorter, time frame.
     * - `blocks_per_period`:  number of blocks in a single period. Min. number of blocks per
     * period is 1.
     * - `reward_currency`: payoff currency of rewards.
     * - `owner`: liq. mining farm owner. This account will be able to manage created
     * liquidity mining program.
     * - `yield_per_period`: percentage return on `reward_currency` of all farms.
     * - `min_deposit`: minimum amount of LP shares to be deposited into the liquidity mining by each user.
     * - `lrna_price_adjustment`: price adjustment between `[LRNA]` and `reward_currency`.
     * 
     * Emits `GlobalFarmCreated` when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.create_global_farm',
        sts.struct({
            totalRewards: sts.bigint(),
            plannedYieldingPeriods: sts.number(),
            blocksPerPeriod: sts.number(),
            rewardCurrency: sts.number(),
            owner: v138.AccountId32,
            yieldPerPeriod: v138.Perquintill,
            minDeposit: sts.bigint(),
            lrnaPriceAdjustment: v138.FixedU128,
        })
    ),
}

export const updateGlobalFarm =  {
    name: 'OmnipoolLiquidityMining.update_global_farm',
    /**
     * Update global farm's exchange rate between [LRNA] and `incentivized_asset`.
     * 
     * Only farm's owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: id of the global farm to update.
     * - `lrna_price_adjustment`: new value for LRNA price adjustment.
     * 
     * Emits `GlobalFarmUpdated` event when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.update_global_farm',
        sts.struct({
            globalFarmId: sts.number(),
            lrnaPriceAdjustment: v138.FixedU128,
        })
    ),
}

export const terminateGlobalFarm =  {
    name: 'OmnipoolLiquidityMining.terminate_global_farm',
    /**
     * Terminate existing liq. mining program.
     * 
     * Only farm owner can perform this action.
     * 
     * WARN: To successfully terminate a global farm, farm have to be empty
     * (all yield farms in the global farm must be terminated).
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: id of global farm to be terminated.
     * 
     * Emits `GlobalFarmTerminated` event when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.terminate_global_farm',
        sts.struct({
            globalFarmId: sts.number(),
        })
    ),
}

export const createYieldFarm =  {
    name: 'OmnipoolLiquidityMining.create_yield_farm',
    /**
     * Create yield farm for given `asset_id` in the omnipool.
     *  
     * Only farm owner can perform this action.
     * 
     * Asset with `asset_id` has to be registered in the omnipool.
     * Yield farm for same `asset_id` can exist only once in the global farm.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id to which a yield farm will be added.
     * - `asset_id`: id of a asset in the omnipool. Yield farm will be created
     * for this asset and user will be able to lock LP shares into this yield farm immediately.
     * - `multiplier`: yield farm's multiplier.
     * - `loyalty_curve`: curve to calculate loyalty multiplier to distribute rewards to users
     * with time incentive. `None` means no loyalty multiplier.
     * 
     * Emits `YieldFarmCreated` event when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.create_yield_farm',
        sts.struct({
            globalFarmId: sts.number(),
            assetId: sts.number(),
            multiplier: v138.FixedU128,
            loyaltyCurve: sts.option(() => v138.LoyaltyCurve),
        })
    ),
}

export const updateYieldFarm =  {
    name: 'OmnipoolLiquidityMining.update_yield_farm',
    /**
     * Update yield farm's multiplier.
     *  
     * Only farm owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id in which yield farm will be updated.
     * - `asset_id`: id of the asset identifying yield farm in the global farm.
     * - `multiplier`: new yield farm's multiplier.
     * 
     * Emits `YieldFarmUpdated` event when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.update_yield_farm',
        sts.struct({
            globalFarmId: sts.number(),
            assetId: sts.number(),
            multiplier: v138.FixedU128,
        })
    ),
}

export const stopYieldFarm =  {
    name: 'OmnipoolLiquidityMining.stop_yield_farm',
    /**
     * Stop liquidity miming for specific yield farm.
     * 
     * This function claims rewards from `GlobalFarm` last time and stop yield farm
     * incentivization from a `GlobalFarm`. Users will be able to only withdraw
     * shares(with claiming) after calling this function.
     * `deposit_shares()` and `claim_rewards()` are not allowed on stopped yield farm.
     *  
     * Only farm owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: farm id in which yield farm will be canceled.
     * - `asset_id`: id of the asset identifying yield farm in the global farm.
     * 
     * Emits `YieldFarmStopped` event when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.stop_yield_farm',
        sts.struct({
            globalFarmId: sts.number(),
            assetId: sts.number(),
        })
    ),
}

export const resumeYieldFarm =  {
    name: 'OmnipoolLiquidityMining.resume_yield_farm',
    /**
     * Resume incentivization of the asset represented by yield farm.
     * 
     * This function resume incentivization of the asset from the `GlobalFarm` and
     * restore full functionality or the yield farm. Users will be able to deposit,
     * claim and withdraw again.
     * 
     * WARN: Yield farm(and users) is NOT rewarded for time it was stopped.
     * 
     * Only farm owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id in which yield farm will be resumed.
     * - `yield_farm_id`: id of the yield farm to be resumed.
     * - `asset_id`: id of the asset identifying yield farm in the global farm.
     * - `multiplier`: yield farm multiplier.
     * 
     * Emits `YieldFarmResumed` event when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.resume_yield_farm',
        sts.struct({
            globalFarmId: sts.number(),
            yieldFarmId: sts.number(),
            assetId: sts.number(),
            multiplier: v138.FixedU128,
        })
    ),
}

export const terminateYieldFarm =  {
    name: 'OmnipoolLiquidityMining.terminate_yield_farm',
    /**
     * Terminate yield farm.
     * 
     * This function marks a yield farm as ready to be removed from storage when it's empty. Users will
     * be able to only withdraw shares(without claiming rewards from yield farm). Unpaid rewards
     * will be transferred back to global farm and it will be used to distribute to other yield farms.
     * 
     * Yield farm must be stopped before it can be terminated.
     * 
     * Only global farm's owner can perform this action. Yield farm stays in the storage until it's
     * empty(all farm entries are withdrawn). Last withdrawn from yield farm trigger removing from
     * the storage.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id in which yield farm should be terminated.
     * - `yield_farm_id`: id of yield farm to be terminated.
     * - `asset_id`: id of the asset identifying yield farm.
     * 
     * Emits `YieldFarmTerminated` event when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.terminate_yield_farm',
        sts.struct({
            globalFarmId: sts.number(),
            yieldFarmId: sts.number(),
            assetId: sts.number(),
        })
    ),
}

export const depositShares =  {
    name: 'OmnipoolLiquidityMining.deposit_shares',
    /**
     * Deposit omnipool position(LP shares) to a liquidity mining.
     * 
     * This function transfers omnipool position from `origin` to pallet's account and mint NFT for
     * `origin` account. Minted NFT represents deposit in the liquidity mining. User can
     * deposit omnipool position as a whole(all the LP shares in the position).
     * 
     * Parameters:
     * - `origin`: owner of the omnipool position to deposit into the liquidity mining.
     * - `global_farm_id`: id of global farm to which user wants to deposit LP shares.
     * - `yield_farm_id`: id of yield farm to deposit to.
     * - `position_id`: id of the omnipool position to be deposited into the liquidity mining.
     * 
     * Emits `SharesDeposited` event when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.deposit_shares',
        sts.struct({
            globalFarmId: sts.number(),
            yieldFarmId: sts.number(),
            positionId: sts.bigint(),
        })
    ),
}

export const redepositShares =  {
    name: 'OmnipoolLiquidityMining.redeposit_shares',
    /**
     * Redeposit LP shares in the already locked omnipool position.
     * 
     * This function create yield farm entry for existing deposit. Amount of redeposited LP
     * shares is same as amount shares which are already deposited in the deposit.
     * 
     * This function DOESN'T create new deposit(NFT).
     * 
     * Parameters:
     * - `origin`: owner of the deposit to redeposit.
     * - `global_farm_id`: id of the global farm to which user wants to redeposit LP shares.
     * - `yield_farm_id`: id of the yield farm to redeposit to.
     * - `deposit_id`: identifier of the deposit to redeposit.
     * 
     * Emits `SharesRedeposited` event when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.redeposit_shares',
        sts.struct({
            globalFarmId: sts.number(),
            yieldFarmId: sts.number(),
            depositId: sts.bigint(),
        })
    ),
}

export const claimRewards =  {
    name: 'OmnipoolLiquidityMining.claim_rewards',
    /**
     * Claim rewards from liquidity mining program for deposit represented by the `deposit_id`.
     * 
     * This function calculate user rewards from liquidity mining and transfer rewards to `origin`
     * account. Claiming multiple time the same period is not allowed.
     * 
     * Parameters:
     * - `origin`: owner of deposit.
     * - `deposit_id`: id of the deposit to claim rewards for.
     * - `yield_farm_id`: id of the yield farm to claim rewards from.
     * 
     * Emits `RewardClaimed` event when successful.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.claim_rewards',
        sts.struct({
            depositId: sts.bigint(),
            yieldFarmId: sts.number(),
        })
    ),
}

export const withdrawShares =  {
    name: 'OmnipoolLiquidityMining.withdraw_shares',
    /**
     * This function claim rewards and withdraw LP shares from yield farm. Omnipool position
     * is transferred to origin only if this is last withdraw in the deposit and deposit is
     * destroyed. This function claim rewards only if yield farm is not terminated and user
     * didn't already claim rewards in current period.
     * 
     * Unclaimable rewards represents rewards which user won't be able to claim because of
     * exiting early and these rewards will be transferred back to global farm for future
     * redistribution.
     * 
     * Parameters:
     * - `origin`: owner of deposit.
     * - `deposit_id`: id of the deposit to claim rewards for.
     * - `yield_farm_id`: id of the yield farm to claim rewards from.
     * 
     * Emits:
     * * `RewardClaimed` event if claimed rewards is > 0
     * * `SharesWithdrawn` event when successful
     * * `DepositDestroyed` event when this was last withdraw from the deposit and deposit was
     * destroyed.
     * 
     */
    v138: new CallType(
        'OmnipoolLiquidityMining.withdraw_shares',
        sts.struct({
            depositId: sts.bigint(),
            yieldFarmId: sts.number(),
        })
    ),
}
