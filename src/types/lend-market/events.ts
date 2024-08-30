import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v990 from '../v990'
import * as v12001 from '../v12001'

export const collateralAssetAdded =  {
    name: 'LendMarket.CollateralAssetAdded',
    /**
     * Enable collateral for certain asset
     * [sender, asset_id]
     */
    v990: new EventType(
        'LendMarket.CollateralAssetAdded',
        sts.tuple([v990.AccountId32, v990.CurrencyId])
    ),
}

export const collateralAssetRemoved =  {
    name: 'LendMarket.CollateralAssetRemoved',
    /**
     * Disable collateral for certain asset
     * [sender, asset_id]
     */
    v990: new EventType(
        'LendMarket.CollateralAssetRemoved',
        sts.tuple([v990.AccountId32, v990.CurrencyId])
    ),
}

export const deposited =  {
    name: 'LendMarket.Deposited',
    /**
     * Event emitted when assets are deposited
     * [sender, asset_id, amount]
     */
    v990: new EventType(
        'LendMarket.Deposited',
        sts.tuple([v990.AccountId32, v990.CurrencyId, sts.bigint()])
    ),
}

export const redeemed =  {
    name: 'LendMarket.Redeemed',
    /**
     * Event emitted when assets are redeemed
     * [sender, asset_id, amount]
     */
    v990: new EventType(
        'LendMarket.Redeemed',
        sts.tuple([v990.AccountId32, v990.CurrencyId, sts.bigint()])
    ),
}

export const borrowed =  {
    name: 'LendMarket.Borrowed',
    /**
     * Event emitted when cash is borrowed
     * [sender, asset_id, amount]
     */
    v990: new EventType(
        'LendMarket.Borrowed',
        sts.tuple([v990.AccountId32, v990.CurrencyId, sts.bigint()])
    ),
}

export const repaidBorrow =  {
    name: 'LendMarket.RepaidBorrow',
    /**
     * Event emitted when a borrow is repaid
     * [sender, asset_id, amount]
     */
    v990: new EventType(
        'LendMarket.RepaidBorrow',
        sts.tuple([v990.AccountId32, v990.CurrencyId, sts.bigint()])
    ),
}

export const liquidatedBorrow =  {
    name: 'LendMarket.LiquidatedBorrow',
    /**
     * Event emitted when a borrow is liquidated
     * [liquidator, borrower, liquidation_asset_id, collateral_asset_id, repay_amount,
     * collateral_amount]
     */
    v990: new EventType(
        'LendMarket.LiquidatedBorrow',
        sts.tuple([v990.AccountId32, v990.AccountId32, v990.CurrencyId, v990.CurrencyId, sts.bigint(), sts.bigint()])
    ),
}

export const reservesReduced =  {
    name: 'LendMarket.ReservesReduced',
    /**
     * Event emitted when the reserves are reduced
     * [admin, asset_id, reduced_amount, total_reserves]
     */
    v990: new EventType(
        'LendMarket.ReservesReduced',
        sts.tuple([v990.AccountId32, v990.CurrencyId, sts.bigint(), sts.bigint()])
    ),
}

export const reservesAdded =  {
    name: 'LendMarket.ReservesAdded',
    /**
     * Event emitted when the reserves are added
     * [admin, asset_id, added_amount, total_reserves]
     */
    v990: new EventType(
        'LendMarket.ReservesAdded',
        sts.tuple([v990.AccountId32, v990.CurrencyId, sts.bigint(), sts.bigint()])
    ),
}

export const newMarket =  {
    name: 'LendMarket.NewMarket',
    /**
     * New market is set
     * [new_interest_rate_model]
     */
    v990: new EventType(
        'LendMarket.NewMarket',
        sts.tuple([v990.CurrencyId, v990.Market])
    ),
}

export const activatedMarket =  {
    name: 'LendMarket.ActivatedMarket',
    /**
     * Event emitted when a market is activated
     * [admin, asset_id]
     */
    v990: new EventType(
        'LendMarket.ActivatedMarket',
        v990.CurrencyId
    ),
}

export const updatedMarket =  {
    name: 'LendMarket.UpdatedMarket',
    /**
     * New market parameters is updated
     * [admin, asset_id]
     */
    v990: new EventType(
        'LendMarket.UpdatedMarket',
        sts.tuple([v990.CurrencyId, v990.Market])
    ),
}

export const rewardAdded =  {
    name: 'LendMarket.RewardAdded',
    /**
     * Reward added
     */
    v990: new EventType(
        'LendMarket.RewardAdded',
        sts.tuple([v990.AccountId32, sts.bigint()])
    ),
}

export const rewardWithdrawn =  {
    name: 'LendMarket.RewardWithdrawn',
    /**
     * Reward withdrawed
     */
    v990: new EventType(
        'LendMarket.RewardWithdrawn',
        sts.tuple([v990.AccountId32, sts.bigint()])
    ),
}

export const marketRewardSpeedUpdated =  {
    name: 'LendMarket.MarketRewardSpeedUpdated',
    /**
     * Event emitted when market reward speed updated.
     */
    v990: new EventType(
        'LendMarket.MarketRewardSpeedUpdated',
        sts.tuple([v990.CurrencyId, sts.bigint(), sts.bigint()])
    ),
}

export const distributedSupplierReward =  {
    name: 'LendMarket.DistributedSupplierReward',
    /**
     * Deposited when Reward is distributed to a supplier
     */
    v990: new EventType(
        'LendMarket.DistributedSupplierReward',
        sts.tuple([v990.CurrencyId, v990.AccountId32, sts.bigint(), sts.bigint()])
    ),
}

export const distributedBorrowerReward =  {
    name: 'LendMarket.DistributedBorrowerReward',
    /**
     * Deposited when Reward is distributed to a borrower
     */
    v990: new EventType(
        'LendMarket.DistributedBorrowerReward',
        sts.tuple([v990.CurrencyId, v990.AccountId32, sts.bigint(), sts.bigint()])
    ),
}

export const rewardPaid =  {
    name: 'LendMarket.RewardPaid',
    /**
     * Reward Paid for user
     */
    v990: new EventType(
        'LendMarket.RewardPaid',
        sts.tuple([v990.AccountId32, sts.bigint()])
    ),
}

export const incentiveReservesReduced =  {
    name: 'LendMarket.IncentiveReservesReduced',
    /**
     * Event emitted when the incentive reserves are redeemed and transfer to receiver's
     * account [receive_account_id, asset_id, reduced_amount]
     */
    v990: new EventType(
        'LendMarket.IncentiveReservesReduced',
        sts.tuple([v990.AccountId32, v990.CurrencyId, sts.bigint()])
    ),
}

export const liquidationFreeCollateralsUpdated =  {
    name: 'LendMarket.LiquidationFreeCollateralsUpdated',
    /**
     * Liquidation free collaterals has been updated
     */
    v990: new EventType(
        'LendMarket.LiquidationFreeCollateralsUpdated',
        sts.array(() => v990.CurrencyId)
    ),
}

export const marketBonded =  {
    name: 'LendMarket.MarketBonded',
    v12001: new EventType(
        'LendMarket.MarketBonded',
        sts.struct({
            assetId: v12001.CurrencyId,
            marketBond: sts.array(() => v12001.CurrencyId),
        })
    ),
}
