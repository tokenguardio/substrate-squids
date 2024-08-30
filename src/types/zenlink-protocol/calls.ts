import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v954 from '../v954'
import * as v11000 from '../v11000'

export const setFeeReceiver =  {
    name: 'ZenlinkProtocol.set_fee_receiver',
    /**
     * Set the new receiver of the protocol fee.
     * 
     * # Arguments
     * 
     * - `send_to`:
     * (1) Some(receiver): it turn on the protocol fee and the new receiver account.
     * (2) None: it turn off the protocol fee.
     */
    v954: new CallType(
        'ZenlinkProtocol.set_fee_receiver',
        sts.struct({
            sendTo: sts.option(() => v954.MultiAddress),
        })
    ),
}

export const setFeePoint =  {
    name: 'ZenlinkProtocol.set_fee_point',
    /**
     * Set the protocol fee point.
     * 
     * # Arguments
     * 
     * - `fee_point`:
     * The fee_point which integer between [0,30]
     * 0 means no protocol fee.
     * 30 means 0.3% * 100% = 0.0030.
     * default is 5 and means 0.3% * 1 / 6 = 0.0005.
     */
    v954: new CallType(
        'ZenlinkProtocol.set_fee_point',
        sts.struct({
            feePoint: sts.number(),
        })
    ),
}

export const transfer =  {
    name: 'ZenlinkProtocol.transfer',
    /**
     * Move some assets from one holder to another.
     * 
     * # Arguments
     * 
     * - `asset_id`: The foreign id.
     * - `target`: The receiver of the foreign.
     * - `amount`: The amount of the foreign to transfer.
     */
    v954: new CallType(
        'ZenlinkProtocol.transfer',
        sts.struct({
            assetId: v954.AssetId,
            recipient: v954.MultiAddress,
            amount: sts.bigint(),
        })
    ),
}

export const transferToParachain =  {
    name: 'ZenlinkProtocol.transfer_to_parachain',
    /**
     * Transfer zenlink assets to a sibling parachain.
     * 
     * Zenlink assets can be either native or foreign to the sending parachain.
     * 
     * # Arguments
     * 
     * - `asset_id`: Global identifier for a zenlink foreign
     * - `para_id`: Destination parachain
     * - `account`: Destination account
     * - `amount`: Amount to transfer
     */
    v954: new CallType(
        'ZenlinkProtocol.transfer_to_parachain',
        sts.struct({
            assetId: v954.AssetId,
            paraId: v954.Id,
            recipient: v954.AccountId32,
            amount: sts.bigint(),
            maxWeight: sts.bigint(),
        })
    ),
}

export const createPair =  {
    name: 'ZenlinkProtocol.create_pair',
    /**
     * Create pair by two assets.
     * 
     * The order of foreign dot effect result.
     * 
     * # Arguments
     * 
     * - `asset_0`: Asset which make up Pair
     * - `asset_1`: Asset which make up Pair
     */
    v954: new CallType(
        'ZenlinkProtocol.create_pair',
        sts.struct({
            asset0: v954.AssetId,
            asset1: v954.AssetId,
        })
    ),
    /**
     * See [`Pallet::create_pair`].
     */
    v11000: new CallType(
        'ZenlinkProtocol.create_pair',
        sts.struct({
            asset0: v11000.AssetId,
            asset1: v11000.AssetId,
            feeRecipient: v11000.MultiAddress,
        })
    ),
}

export const addLiquidity =  {
    name: 'ZenlinkProtocol.add_liquidity',
    /**
     * Provide liquidity to a pair.
     * 
     * The order of foreign dot effect result.
     * 
     * # Arguments
     * 
     * - `asset_0`: Asset which make up pair
     * - `asset_1`: Asset which make up pair
     * - `amount_0_desired`: Maximum amount of asset_0 added to the pair
     * - `amount_1_desired`: Maximum amount of asset_1 added to the pair
     * - `amount_0_min`: Minimum amount of asset_0 added to the pair
     * - `amount_1_min`: Minimum amount of asset_1 added to the pair
     * - `deadline`: Height of the cutoff block of this transaction
     */
    v954: new CallType(
        'ZenlinkProtocol.add_liquidity',
        sts.struct({
            asset0: v954.AssetId,
            asset1: v954.AssetId,
            amount0Desired: sts.bigint(),
            amount1Desired: sts.bigint(),
            amount0Min: sts.bigint(),
            amount1Min: sts.bigint(),
            deadline: sts.number(),
        })
    ),
}

export const removeLiquidity =  {
    name: 'ZenlinkProtocol.remove_liquidity',
    /**
     * Extract liquidity.
     * 
     * The order of foreign dot effect result.
     * 
     * # Arguments
     * 
     * - `asset_0`: Asset which make up pair
     * - `asset_1`: Asset which make up pair
     * - `amount_asset_0_min`: Minimum amount of asset_0 to exact
     * - `amount_asset_1_min`: Minimum amount of asset_1 to exact
     * - `recipient`: Account that accepts withdrawal of assets
     * - `deadline`: Height of the cutoff block of this transaction
     */
    v954: new CallType(
        'ZenlinkProtocol.remove_liquidity',
        sts.struct({
            asset0: v954.AssetId,
            asset1: v954.AssetId,
            liquidity: sts.bigint(),
            amount0Min: sts.bigint(),
            amount1Min: sts.bigint(),
            recipient: v954.MultiAddress,
            deadline: sts.number(),
        })
    ),
}

export const swapExactAssetsForAssets =  {
    name: 'ZenlinkProtocol.swap_exact_assets_for_assets',
    /**
     * Sell amount of foreign by path.
     * 
     * # Arguments
     * 
     * - `amount_in`: Amount of the foreign will be sold
     * - `amount_out_min`: Minimum amount of target foreign
     * - `path`: path can convert to pairs.
     * - `recipient`: Account that receive the target foreign
     * - `deadline`: Height of the cutoff block of this transaction
     */
    v954: new CallType(
        'ZenlinkProtocol.swap_exact_assets_for_assets',
        sts.struct({
            amountIn: sts.bigint(),
            amountOutMin: sts.bigint(),
            path: sts.array(() => v954.AssetId),
            recipient: v954.MultiAddress,
            deadline: sts.number(),
        })
    ),
}

export const swapAssetsForExactAssets =  {
    name: 'ZenlinkProtocol.swap_assets_for_exact_assets',
    /**
     * Buy amount of foreign by path.
     * 
     * # Arguments
     * 
     * - `amount_out`: Amount of the foreign will be bought
     * - `amount_in_max`: Maximum amount of sold foreign
     * - `path`: path can convert to pairs.
     * - `recipient`: Account that receive the target foreign
     * - `deadline`: Height of the cutoff block of this transaction
     */
    v954: new CallType(
        'ZenlinkProtocol.swap_assets_for_exact_assets',
        sts.struct({
            amountOut: sts.bigint(),
            amountInMax: sts.bigint(),
            path: sts.array(() => v954.AssetId),
            recipient: v954.MultiAddress,
            deadline: sts.number(),
        })
    ),
}

export const bootstrapCreate =  {
    name: 'ZenlinkProtocol.bootstrap_create',
    /**
     * Create bootstrap pair
     * 
     * The order of asset don't affect result.
     * 
     * # Arguments
     * 
     * - `asset_0`: Asset which make up bootstrap pair
     * - `asset_1`: Asset which make up bootstrap pair
     * - `target_supply_0`: Target amount of asset_0 total contribute
     * - `target_supply_0`: Target amount of asset_1 total contribute
     * - `capacity_supply_0`: The max amount of asset_0 total contribute
     * - `capacity_supply_1`: The max amount of asset_1 total contribute
     * - `end`: The earliest ending block.
     */
    v954: new CallType(
        'ZenlinkProtocol.bootstrap_create',
        sts.struct({
            asset0: v954.AssetId,
            asset1: v954.AssetId,
            targetSupply0: sts.bigint(),
            targetSupply1: sts.bigint(),
            capacitySupply0: sts.bigint(),
            capacitySupply1: sts.bigint(),
            end: sts.number(),
            rewards: sts.array(() => v954.AssetId),
            limits: sts.array(() => sts.tuple(() => [v954.AssetId, sts.bigint()])),
        })
    ),
}

export const bootstrapContribute =  {
    name: 'ZenlinkProtocol.bootstrap_contribute',
    /**
     * Contribute some asset to a bootstrap pair
     * 
     * # Arguments
     * 
     * - `asset_0`: Asset which make up bootstrap pair
     * - `asset_1`: Asset which make up bootstrap pair
     * - `amount_0_contribute`: The amount of asset_0 contribute to this bootstrap pair
     * - `amount_1_contribute`: The amount of asset_1 contribute to this bootstrap pair
     * - `deadline`: Height of the cutoff block of this transaction
     */
    v954: new CallType(
        'ZenlinkProtocol.bootstrap_contribute',
        sts.struct({
            asset0: v954.AssetId,
            asset1: v954.AssetId,
            amount0Contribute: sts.bigint(),
            amount1Contribute: sts.bigint(),
            deadline: sts.number(),
        })
    ),
}

export const bootstrapClaim =  {
    name: 'ZenlinkProtocol.bootstrap_claim',
    /**
     * Claim lp asset from a bootstrap pair
     * 
     * # Arguments
     * 
     * - `asset_0`: Asset which make up bootstrap pair
     * - `asset_1`: Asset which make up bootstrap pair
     * - `deadline`: Height of the cutoff block of this transaction
     */
    v954: new CallType(
        'ZenlinkProtocol.bootstrap_claim',
        sts.struct({
            recipient: v954.MultiAddress,
            asset0: v954.AssetId,
            asset1: v954.AssetId,
            deadline: sts.number(),
        })
    ),
}

export const bootstrapEnd =  {
    name: 'ZenlinkProtocol.bootstrap_end',
    /**
     * End a bootstrap pair
     * 
     * # Arguments
     * 
     * - `asset_0`: Asset which make up bootstrap pair
     * - `asset_1`: Asset which make up bootstrap pair
     */
    v954: new CallType(
        'ZenlinkProtocol.bootstrap_end',
        sts.struct({
            asset0: v954.AssetId,
            asset1: v954.AssetId,
        })
    ),
}

export const bootstrapUpdate =  {
    name: 'ZenlinkProtocol.bootstrap_update',
    /**
     * update a bootstrap pair
     * 
     * # Arguments
     * 
     * - `asset_0`: Asset which make up bootstrap pair
     * - `asset_1`: Asset which make up bootstrap pair
     * - `min_contribution_0`: The new min amount of asset_0 contribute
     * - `min_contribution_0`: The new min amount of asset_1 contribute
     * - `target_supply_0`: The new target amount of asset_0 total contribute
     * - `target_supply_0`: The new target amount of asset_1 total contribute
     * - `capacity_supply_0`: The new max amount of asset_0 total contribute
     * - `capacity_supply_1`: The new max amount of asset_1 total contribute
     * - `end`: The earliest ending block.
     */
    v954: new CallType(
        'ZenlinkProtocol.bootstrap_update',
        sts.struct({
            asset0: v954.AssetId,
            asset1: v954.AssetId,
            targetSupply0: sts.bigint(),
            targetSupply1: sts.bigint(),
            capacitySupply0: sts.bigint(),
            capacitySupply1: sts.bigint(),
            end: sts.number(),
            rewards: sts.array(() => v954.AssetId),
            limits: sts.array(() => sts.tuple(() => [v954.AssetId, sts.bigint()])),
        })
    ),
}

export const bootstrapRefund =  {
    name: 'ZenlinkProtocol.bootstrap_refund',
    /**
     * Contributor refund from disable bootstrap pair
     * 
     * # Arguments
     * 
     * - `asset_0`: Asset which make up bootstrap pair
     * - `asset_1`: Asset which make up bootstrap pair
     */
    v954: new CallType(
        'ZenlinkProtocol.bootstrap_refund',
        sts.struct({
            asset0: v954.AssetId,
            asset1: v954.AssetId,
        })
    ),
}

export const bootstrapChargeReward =  {
    name: 'ZenlinkProtocol.bootstrap_charge_reward',
    v954: new CallType(
        'ZenlinkProtocol.bootstrap_charge_reward',
        sts.struct({
            asset0: v954.AssetId,
            asset1: v954.AssetId,
            chargeRewards: sts.array(() => sts.tuple(() => [v954.AssetId, sts.bigint()])),
        })
    ),
}

export const bootstrapWithdrawReward =  {
    name: 'ZenlinkProtocol.bootstrap_withdraw_reward',
    v954: new CallType(
        'ZenlinkProtocol.bootstrap_withdraw_reward',
        sts.struct({
            asset0: v954.AssetId,
            asset1: v954.AssetId,
            recipient: v954.MultiAddress,
        })
    ),
}

export const setNewFeeReceiver =  {
    name: 'ZenlinkProtocol.set_new_fee_receiver',
    /**
     * See [`Pallet::set_new_fee_receiver`].
     */
    v11000: new CallType(
        'ZenlinkProtocol.set_new_fee_receiver',
        sts.struct({
            asset: v11000.AssetId,
            sendTo: v11000.MultiAddress,
        })
    ),
}
