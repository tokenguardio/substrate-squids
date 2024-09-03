import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v227 from '../v227'

export const createGlobalFarm =  {
    name: 'XYKLiquidityMining.create_global_farm',
    /**
     * See [`Pallet::create_global_farm`].
     */
    v227: new CallType(
        'XYKLiquidityMining.create_global_farm',
        sts.struct({
            totalRewards: sts.bigint(),
            plannedYieldingPeriods: sts.number(),
            blocksPerPeriod: sts.number(),
            incentivizedAsset: sts.number(),
            rewardCurrency: sts.number(),
            owner: v227.AccountId32,
            yieldPerPeriod: v227.Perquintill,
            minDeposit: sts.bigint(),
            priceAdjustment: v227.FixedU128,
        })
    ),
}

export const updateGlobalFarm =  {
    name: 'XYKLiquidityMining.update_global_farm',
    /**
     * See [`Pallet::update_global_farm`].
     */
    v227: new CallType(
        'XYKLiquidityMining.update_global_farm',
        sts.struct({
            globalFarmId: sts.number(),
            priceAdjustment: v227.FixedU128,
        })
    ),
}

export const terminateGlobalFarm =  {
    name: 'XYKLiquidityMining.terminate_global_farm',
    /**
     * See [`Pallet::terminate_global_farm`].
     */
    v227: new CallType(
        'XYKLiquidityMining.terminate_global_farm',
        sts.struct({
            globalFarmId: sts.number(),
        })
    ),
}

export const createYieldFarm =  {
    name: 'XYKLiquidityMining.create_yield_farm',
    /**
     * See [`Pallet::create_yield_farm`].
     */
    v227: new CallType(
        'XYKLiquidityMining.create_yield_farm',
        sts.struct({
            globalFarmId: sts.number(),
            assetPair: v227.AssetPair,
            multiplier: v227.FixedU128,
            loyaltyCurve: sts.option(() => v227.LoyaltyCurve),
        })
    ),
}

export const updateYieldFarm =  {
    name: 'XYKLiquidityMining.update_yield_farm',
    /**
     * See [`Pallet::update_yield_farm`].
     */
    v227: new CallType(
        'XYKLiquidityMining.update_yield_farm',
        sts.struct({
            globalFarmId: sts.number(),
            assetPair: v227.AssetPair,
            multiplier: v227.FixedU128,
        })
    ),
}

export const stopYieldFarm =  {
    name: 'XYKLiquidityMining.stop_yield_farm',
    /**
     * See [`Pallet::stop_yield_farm`].
     */
    v227: new CallType(
        'XYKLiquidityMining.stop_yield_farm',
        sts.struct({
            globalFarmId: sts.number(),
            assetPair: v227.AssetPair,
        })
    ),
}

export const resumeYieldFarm =  {
    name: 'XYKLiquidityMining.resume_yield_farm',
    /**
     * See [`Pallet::resume_yield_farm`].
     */
    v227: new CallType(
        'XYKLiquidityMining.resume_yield_farm',
        sts.struct({
            globalFarmId: sts.number(),
            yieldFarmId: sts.number(),
            assetPair: v227.AssetPair,
            multiplier: v227.FixedU128,
        })
    ),
}

export const terminateYieldFarm =  {
    name: 'XYKLiquidityMining.terminate_yield_farm',
    /**
     * See [`Pallet::terminate_yield_farm`].
     */
    v227: new CallType(
        'XYKLiquidityMining.terminate_yield_farm',
        sts.struct({
            globalFarmId: sts.number(),
            yieldFarmId: sts.number(),
            assetPair: v227.AssetPair,
        })
    ),
}

export const depositShares =  {
    name: 'XYKLiquidityMining.deposit_shares',
    /**
     * See [`Pallet::deposit_shares`].
     */
    v227: new CallType(
        'XYKLiquidityMining.deposit_shares',
        sts.struct({
            globalFarmId: sts.number(),
            yieldFarmId: sts.number(),
            assetPair: v227.AssetPair,
            sharesAmount: sts.bigint(),
        })
    ),
}

export const redepositShares =  {
    name: 'XYKLiquidityMining.redeposit_shares',
    /**
     * See [`Pallet::redeposit_shares`].
     */
    v227: new CallType(
        'XYKLiquidityMining.redeposit_shares',
        sts.struct({
            globalFarmId: sts.number(),
            yieldFarmId: sts.number(),
            assetPair: v227.AssetPair,
            depositId: sts.bigint(),
        })
    ),
}

export const claimRewards =  {
    name: 'XYKLiquidityMining.claim_rewards',
    /**
     * See [`Pallet::claim_rewards`].
     */
    v227: new CallType(
        'XYKLiquidityMining.claim_rewards',
        sts.struct({
            depositId: sts.bigint(),
            yieldFarmId: sts.number(),
        })
    ),
}

export const withdrawShares =  {
    name: 'XYKLiquidityMining.withdraw_shares',
    /**
     * See [`Pallet::withdraw_shares`].
     */
    v227: new CallType(
        'XYKLiquidityMining.withdraw_shares',
        sts.struct({
            depositId: sts.bigint(),
            yieldFarmId: sts.number(),
            assetPair: v227.AssetPair,
        })
    ),
}
