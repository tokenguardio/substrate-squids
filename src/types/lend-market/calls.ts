import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v990 from '../v990'
import * as v12001 from '../v12001'

export const addMarket =  {
    name: 'LendMarket.add_market',
    /**
     * See [`Pallet::add_market`].
     */
    v990: new CallType(
        'LendMarket.add_market',
        sts.struct({
            assetId: v990.CurrencyId,
            market: v990.Market,
        })
    ),
}

export const activateMarket =  {
    name: 'LendMarket.activate_market',
    /**
     * See [`Pallet::activate_market`].
     */
    v990: new CallType(
        'LendMarket.activate_market',
        sts.struct({
            assetId: v990.CurrencyId,
        })
    ),
}

export const updateRateModel =  {
    name: 'LendMarket.update_rate_model',
    /**
     * See [`Pallet::update_rate_model`].
     */
    v990: new CallType(
        'LendMarket.update_rate_model',
        sts.struct({
            assetId: v990.CurrencyId,
            rateModel: v990.InterestRateModel,
        })
    ),
}

export const updateMarket =  {
    name: 'LendMarket.update_market',
    /**
     * See [`Pallet::update_market`].
     */
    v990: new CallType(
        'LendMarket.update_market',
        sts.struct({
            assetId: v990.CurrencyId,
            collateralFactor: sts.option(() => v990.Permill),
            liquidationThreshold: sts.option(() => v990.Permill),
            reserveFactor: sts.option(() => v990.Permill),
            closeFactor: sts.option(() => v990.Permill),
            liquidateIncentiveReservedFactor: sts.option(() => v990.Permill),
            liquidateIncentive: sts.option(() => v990.FixedU128),
            supplyCap: sts.option(() => sts.bigint()),
            borrowCap: sts.option(() => sts.bigint()),
        })
    ),
}

export const forceUpdateMarket =  {
    name: 'LendMarket.force_update_market',
    /**
     * See [`Pallet::force_update_market`].
     */
    v990: new CallType(
        'LendMarket.force_update_market',
        sts.struct({
            assetId: v990.CurrencyId,
            market: v990.Market,
        })
    ),
}

export const addReward =  {
    name: 'LendMarket.add_reward',
    /**
     * See [`Pallet::add_reward`].
     */
    v990: new CallType(
        'LendMarket.add_reward',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const withdrawMissingReward =  {
    name: 'LendMarket.withdraw_missing_reward',
    /**
     * See [`Pallet::withdraw_missing_reward`].
     */
    v990: new CallType(
        'LendMarket.withdraw_missing_reward',
        sts.struct({
            targetAccount: v990.MultiAddress,
            amount: sts.bigint(),
        })
    ),
}

export const updateMarketRewardSpeed =  {
    name: 'LendMarket.update_market_reward_speed',
    /**
     * See [`Pallet::update_market_reward_speed`].
     */
    v990: new CallType(
        'LendMarket.update_market_reward_speed',
        sts.struct({
            assetId: v990.CurrencyId,
            supplyRewardPerBlock: sts.option(() => sts.bigint()),
            borrowRewardPerBlock: sts.option(() => sts.bigint()),
        })
    ),
}

export const claimReward =  {
    name: 'LendMarket.claim_reward',
    /**
     * See [`Pallet::claim_reward`].
     */
    v990: new CallType(
        'LendMarket.claim_reward',
        sts.unit()
    ),
}

export const claimRewardForMarket =  {
    name: 'LendMarket.claim_reward_for_market',
    /**
     * See [`Pallet::claim_reward_for_market`].
     */
    v990: new CallType(
        'LendMarket.claim_reward_for_market',
        sts.struct({
            assetId: v990.CurrencyId,
        })
    ),
}

export const mint =  {
    name: 'LendMarket.mint',
    /**
     * See [`Pallet::mint`].
     */
    v990: new CallType(
        'LendMarket.mint',
        sts.struct({
            assetId: v990.CurrencyId,
            mintAmount: sts.bigint(),
        })
    ),
}

export const redeem =  {
    name: 'LendMarket.redeem',
    /**
     * See [`Pallet::redeem`].
     */
    v990: new CallType(
        'LendMarket.redeem',
        sts.struct({
            assetId: v990.CurrencyId,
            redeemAmount: sts.bigint(),
        })
    ),
}

export const redeemAll =  {
    name: 'LendMarket.redeem_all',
    /**
     * See [`Pallet::redeem_all`].
     */
    v990: new CallType(
        'LendMarket.redeem_all',
        sts.struct({
            assetId: v990.CurrencyId,
        })
    ),
}

export const borrow =  {
    name: 'LendMarket.borrow',
    /**
     * See [`Pallet::borrow`].
     */
    v990: new CallType(
        'LendMarket.borrow',
        sts.struct({
            assetId: v990.CurrencyId,
            borrowAmount: sts.bigint(),
        })
    ),
}

export const repayBorrow =  {
    name: 'LendMarket.repay_borrow',
    /**
     * See [`Pallet::repay_borrow`].
     */
    v990: new CallType(
        'LendMarket.repay_borrow',
        sts.struct({
            assetId: v990.CurrencyId,
            repayAmount: sts.bigint(),
        })
    ),
}

export const repayBorrowAll =  {
    name: 'LendMarket.repay_borrow_all',
    /**
     * See [`Pallet::repay_borrow_all`].
     */
    v990: new CallType(
        'LendMarket.repay_borrow_all',
        sts.struct({
            assetId: v990.CurrencyId,
        })
    ),
}

export const collateralAsset =  {
    name: 'LendMarket.collateral_asset',
    /**
     * See [`Pallet::collateral_asset`].
     */
    v990: new CallType(
        'LendMarket.collateral_asset',
        sts.struct({
            assetId: v990.CurrencyId,
            enable: sts.boolean(),
        })
    ),
}

export const liquidateBorrow =  {
    name: 'LendMarket.liquidate_borrow',
    /**
     * See [`Pallet::liquidate_borrow`].
     */
    v990: new CallType(
        'LendMarket.liquidate_borrow',
        sts.struct({
            borrower: v990.AccountId32,
            liquidationAssetId: v990.CurrencyId,
            repayAmount: sts.bigint(),
            collateralAssetId: v990.CurrencyId,
        })
    ),
}

export const addReserves =  {
    name: 'LendMarket.add_reserves',
    /**
     * See [`Pallet::add_reserves`].
     */
    v990: new CallType(
        'LendMarket.add_reserves',
        sts.struct({
            payer: v990.MultiAddress,
            assetId: v990.CurrencyId,
            addAmount: sts.bigint(),
        })
    ),
}

export const reduceReserves =  {
    name: 'LendMarket.reduce_reserves',
    /**
     * See [`Pallet::reduce_reserves`].
     */
    v990: new CallType(
        'LendMarket.reduce_reserves',
        sts.struct({
            receiver: v990.MultiAddress,
            assetId: v990.CurrencyId,
            reduceAmount: sts.bigint(),
        })
    ),
}

export const reduceIncentiveReserves =  {
    name: 'LendMarket.reduce_incentive_reserves',
    /**
     * See [`Pallet::reduce_incentive_reserves`].
     */
    v990: new CallType(
        'LendMarket.reduce_incentive_reserves',
        sts.struct({
            receiver: v990.MultiAddress,
            assetId: v990.CurrencyId,
            redeemAmount: sts.bigint(),
        })
    ),
}

export const updateLiquidationFreeCollateral =  {
    name: 'LendMarket.update_liquidation_free_collateral',
    /**
     * See [`Pallet::update_liquidation_free_collateral`].
     */
    v990: new CallType(
        'LendMarket.update_liquidation_free_collateral',
        sts.struct({
            collaterals: sts.array(() => v990.CurrencyId),
        })
    ),
}

export const addMarketBond =  {
    name: 'LendMarket.add_market_bond',
    v12001: new CallType(
        'LendMarket.add_market_bond',
        sts.struct({
            assetId: v12001.CurrencyId,
            marketBond: sts.array(() => v12001.CurrencyId),
        })
    ),
}
