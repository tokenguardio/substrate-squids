import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v954 from '../v954'

export const transferred =  {
    name: 'ZenlinkProtocol.Transferred',
    /**
     * Foreign Asset
     * Some assets were transferred. \[asset_id, owner, target, amount\]
     */
    v954: new EventType(
        'ZenlinkProtocol.Transferred',
        sts.tuple([v954.AssetId, v954.AccountId32, v954.AccountId32, sts.bigint()])
    ),
}

export const burned =  {
    name: 'ZenlinkProtocol.Burned',
    /**
     * Some assets were burned. \[asset_id, owner, amount\]
     */
    v954: new EventType(
        'ZenlinkProtocol.Burned',
        sts.tuple([v954.AssetId, v954.AccountId32, sts.bigint()])
    ),
}

export const minted =  {
    name: 'ZenlinkProtocol.Minted',
    /**
     * Some assets were minted. \[asset_id, owner, amount\]
     */
    v954: new EventType(
        'ZenlinkProtocol.Minted',
        sts.tuple([v954.AssetId, v954.AccountId32, sts.bigint()])
    ),
}

export const pairCreated =  {
    name: 'ZenlinkProtocol.PairCreated',
    /**
     * Swap
     * Create a trading pair. \[asset_0, asset_1\]
     */
    v954: new EventType(
        'ZenlinkProtocol.PairCreated',
        sts.tuple([v954.AssetId, v954.AssetId])
    ),
}

export const liquidityAdded =  {
    name: 'ZenlinkProtocol.LiquidityAdded',
    /**
     * Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
     * mint_balance_lp\]
     */
    v954: new EventType(
        'ZenlinkProtocol.LiquidityAdded',
        sts.tuple([v954.AccountId32, v954.AssetId, v954.AssetId, sts.bigint(), sts.bigint(), sts.bigint()])
    ),
}

export const liquidityRemoved =  {
    name: 'ZenlinkProtocol.LiquidityRemoved',
    /**
     * Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
     * burn_balance_lp\]
     */
    v954: new EventType(
        'ZenlinkProtocol.LiquidityRemoved',
        sts.tuple([v954.AccountId32, v954.AccountId32, v954.AssetId, v954.AssetId, sts.bigint(), sts.bigint(), sts.bigint()])
    ),
}

export const assetSwap =  {
    name: 'ZenlinkProtocol.AssetSwap',
    /**
     * Transact in trading \[owner, recipient, swap_path, balances\]
     */
    v954: new EventType(
        'ZenlinkProtocol.AssetSwap',
        sts.tuple([v954.AccountId32, v954.AccountId32, sts.array(() => v954.AssetId), sts.array(() => sts.bigint())])
    ),
}

export const transferredToParachain =  {
    name: 'ZenlinkProtocol.TransferredToParachain',
    /**
     * Transfer by xcm
     * Transferred to parachain. \[asset_id, src, para_id, dest, amount, used_weight\]
     */
    v954: new EventType(
        'ZenlinkProtocol.TransferredToParachain',
        sts.tuple([v954.AssetId, v954.AccountId32, v954.Id, v954.AccountId32, sts.bigint(), sts.bigint()])
    ),
}

export const bootstrapContribute =  {
    name: 'ZenlinkProtocol.BootstrapContribute',
    /**
     * Contribute to bootstrap pair. \[who, asset_0, asset_0_contribute, asset_1_contribute\]
     */
    v954: new EventType(
        'ZenlinkProtocol.BootstrapContribute',
        sts.tuple([v954.AccountId32, v954.AssetId, sts.bigint(), v954.AssetId, sts.bigint()])
    ),
}

export const bootstrapEnd =  {
    name: 'ZenlinkProtocol.BootstrapEnd',
    /**
     * A bootstrap pair end. \[asset_0, asset_1, asset_0_amount, asset_1_amount,
     * total_lp_supply]
     */
    v954: new EventType(
        'ZenlinkProtocol.BootstrapEnd',
        sts.tuple([v954.AssetId, v954.AssetId, sts.bigint(), sts.bigint(), sts.bigint()])
    ),
}

export const bootstrapCreated =  {
    name: 'ZenlinkProtocol.BootstrapCreated',
    /**
     * Create a bootstrap pair. \[bootstrap_pair_account, asset_0, asset_1,
     * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1, end\]
     */
    v954: new EventType(
        'ZenlinkProtocol.BootstrapCreated',
        sts.tuple([v954.AccountId32, v954.AssetId, v954.AssetId, sts.bigint(), sts.bigint(), sts.bigint(), sts.bigint(), sts.number()])
    ),
}

export const bootstrapClaim =  {
    name: 'ZenlinkProtocol.BootstrapClaim',
    /**
     * Claim a bootstrap pair. \[bootstrap_pair_account, claimer, receiver, asset_0, asset_1,
     * asset_0_refund, asset_1_refund, lp_amount\]
     */
    v954: new EventType(
        'ZenlinkProtocol.BootstrapClaim',
        sts.tuple([v954.AccountId32, v954.AccountId32, v954.AccountId32, v954.AssetId, v954.AssetId, sts.bigint(), sts.bigint(), sts.bigint()])
    ),
}

export const bootstrapUpdate =  {
    name: 'ZenlinkProtocol.BootstrapUpdate',
    /**
     * Update a bootstrap pair. \[caller, asset_0, asset_1,
     * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1\]
     */
    v954: new EventType(
        'ZenlinkProtocol.BootstrapUpdate',
        sts.tuple([v954.AccountId32, v954.AssetId, v954.AssetId, sts.bigint(), sts.bigint(), sts.bigint(), sts.bigint(), sts.number()])
    ),
}

export const bootstrapRefund =  {
    name: 'ZenlinkProtocol.BootstrapRefund',
    /**
     * Refund from disable bootstrap pair. \[bootstrap_pair_account, caller, asset_0, asset_1,
     * asset_0_refund, asset_1_refund\]
     */
    v954: new EventType(
        'ZenlinkProtocol.BootstrapRefund',
        sts.tuple([v954.AccountId32, v954.AccountId32, v954.AssetId, v954.AssetId, sts.bigint(), sts.bigint()])
    ),
}

export const distributeReward =  {
    name: 'ZenlinkProtocol.DistributeReward',
    /**
     * Bootstrap distribute some rewards to contributors.
     */
    v954: new EventType(
        'ZenlinkProtocol.DistributeReward',
        sts.tuple([v954.AssetId, v954.AssetId, v954.AccountId32, sts.array(() => sts.tuple(() => [v954.AssetId, sts.bigint()]))])
    ),
}

export const chargeReward =  {
    name: 'ZenlinkProtocol.ChargeReward',
    /**
     * Charge reward into a bootstrap.
     */
    v954: new EventType(
        'ZenlinkProtocol.ChargeReward',
        sts.tuple([v954.AssetId, v954.AssetId, v954.AccountId32, sts.array(() => sts.tuple(() => [v954.AssetId, sts.bigint()]))])
    ),
}

export const withdrawReward =  {
    name: 'ZenlinkProtocol.WithdrawReward',
    /**
     * Withdraw all reward from a bootstrap.
     */
    v954: new EventType(
        'ZenlinkProtocol.WithdrawReward',
        sts.tuple([v954.AssetId, v954.AssetId, v954.AccountId32])
    ),
}
