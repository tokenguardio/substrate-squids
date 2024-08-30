import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v982 from '../v982'
import * as v990 from '../v990'
import * as v994 from '../v994'

export const createPool =  {
    name: 'StablePool.create_pool',
    v982: new CallType(
        'StablePool.create_pool',
        sts.struct({
            assets: sts.array(() => v982.CurrencyId),
            precisions: sts.array(() => sts.bigint()),
            mintFee: sts.bigint(),
            swapFee: sts.bigint(),
            redeemFee: sts.bigint(),
            initialA: sts.bigint(),
            feeRecipient: v982.AccountId32,
            yieldRecipient: v982.AccountId32,
            precision: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::create_pool`].
     */
    v990: new CallType(
        'StablePool.create_pool',
        sts.struct({
            assets: sts.array(() => v990.CurrencyId),
            precisions: sts.array(() => sts.bigint()),
            mintFee: sts.bigint(),
            swapFee: sts.bigint(),
            redeemFee: sts.bigint(),
            initialA: sts.bigint(),
            feeRecipient: v990.AccountId32,
            yieldRecipient: v990.AccountId32,
            precision: sts.bigint(),
        })
    ),
}

export const addLiquidity =  {
    name: 'StablePool.add_liquidity',
    v982: new CallType(
        'StablePool.add_liquidity',
        sts.struct({
            poolId: sts.number(),
            amounts: sts.array(() => sts.bigint()),
            minMintAmount: sts.bigint(),
        })
    ),
}

export const swap =  {
    name: 'StablePool.swap',
    v982: new CallType(
        'StablePool.swap',
        sts.struct({
            poolId: sts.number(),
            i: sts.number(),
            j: sts.number(),
            dx: sts.bigint(),
            minDy: sts.bigint(),
        })
    ),
}

export const redeemProportion =  {
    name: 'StablePool.redeem_proportion',
    v982: new CallType(
        'StablePool.redeem_proportion',
        sts.struct({
            poolId: sts.number(),
            amount: sts.bigint(),
            minRedeemAmounts: sts.array(() => sts.bigint()),
        })
    ),
}

export const redeemSingle =  {
    name: 'StablePool.redeem_single',
    v982: new CallType(
        'StablePool.redeem_single',
        sts.struct({
            poolId: sts.number(),
            amount: sts.bigint(),
            i: sts.number(),
            minRedeemAmount: sts.bigint(),
            assetLength: sts.number(),
        })
    ),
}

export const redeemMulti =  {
    name: 'StablePool.redeem_multi',
    v982: new CallType(
        'StablePool.redeem_multi',
        sts.struct({
            poolId: sts.number(),
            amounts: sts.array(() => sts.bigint()),
            maxRedeemAmount: sts.bigint(),
        })
    ),
}

export const modifyA =  {
    name: 'StablePool.modify_a',
    v982: new CallType(
        'StablePool.modify_a',
        sts.struct({
            poolId: sts.number(),
            a: sts.bigint(),
            futureABlock: sts.number(),
        })
    ),
}

export const modifyFees =  {
    name: 'StablePool.modify_fees',
    v982: new CallType(
        'StablePool.modify_fees',
        sts.struct({
            poolId: sts.number(),
            mintFee: sts.option(() => sts.bigint()),
            swapFee: sts.option(() => sts.bigint()),
            redeemFee: sts.option(() => sts.bigint()),
        })
    ),
}

export const modifyRecipients =  {
    name: 'StablePool.modify_recipients',
    v982: new CallType(
        'StablePool.modify_recipients',
        sts.struct({
            poolId: sts.number(),
            feeRecipient: sts.option(() => v982.AccountId32),
            yieldRecipient: sts.option(() => v982.AccountId32),
        })
    ),
}

export const editTokenRate =  {
    name: 'StablePool.edit_token_rate',
    v982: new CallType(
        'StablePool.edit_token_rate',
        sts.struct({
            poolId: sts.number(),
            tokenRateInfo: sts.array(() => sts.tuple(() => [v982.CurrencyId, sts.tuple(() => [sts.bigint(), sts.bigint()])])),
        })
    ),
    /**
     * See [`Pallet::edit_token_rate`].
     */
    v990: new CallType(
        'StablePool.edit_token_rate',
        sts.struct({
            poolId: sts.number(),
            tokenRateInfo: sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.tuple(() => [sts.bigint(), sts.bigint()])])),
        })
    ),
}

export const configVtokenAutoRefresh =  {
    name: 'StablePool.config_vtoken_auto_refresh',
    /**
     * See [`Pallet::config_vtoken_auto_refresh`].
     */
    v994: new CallType(
        'StablePool.config_vtoken_auto_refresh',
        sts.struct({
            vtoken: v994.CurrencyId,
            hardcap: v994.Permill,
        })
    ),
}

export const removeVtokenAutoRefresh =  {
    name: 'StablePool.remove_vtoken_auto_refresh',
    /**
     * See [`Pallet::remove_vtoken_auto_refresh`].
     */
    v994: new CallType(
        'StablePool.remove_vtoken_auto_refresh',
        sts.struct({
            vtoken: v994.CurrencyId,
        })
    ),
}
