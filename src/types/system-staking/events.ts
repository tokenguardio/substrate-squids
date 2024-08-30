import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v970 from '../v970'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const newRound =  {
    name: 'SystemStaking.NewRound',
    v970: new EventType(
        'SystemStaking.NewRound',
        sts.struct({
            current: sts.number(),
            first: sts.number(),
            length: sts.number(),
        })
    ),
}

export const tokenConfigChanged =  {
    name: 'SystemStaking.TokenConfigChanged',
    v970: new EventType(
        'SystemStaking.TokenConfigChanged',
        sts.struct({
            token: v970.CurrencyId,
            execDelay: sts.number(),
            systemStakableFarmingRate: v970.Permill,
            addOrSub: sts.boolean(),
            systemStakableBase: sts.bigint(),
            farmingPoolids: sts.array(() => sts.number()),
            lptokenRates: sts.array(() => v970.Perbill),
        })
    ),
    v980: new EventType(
        'SystemStaking.TokenConfigChanged',
        sts.struct({
            token: v980.CurrencyId,
            execDelay: sts.number(),
            systemStakableFarmingRate: v980.Permill,
            addOrSub: sts.boolean(),
            systemStakableBase: sts.bigint(),
            farmingPoolids: sts.array(() => sts.number()),
            lptokenRates: sts.array(() => v980.Perbill),
        })
    ),
    v990: new EventType(
        'SystemStaking.TokenConfigChanged',
        sts.struct({
            token: v990.CurrencyId,
            execDelay: sts.number(),
            systemStakableFarmingRate: v990.Permill,
            addOrSub: sts.boolean(),
            systemStakableBase: sts.bigint(),
            farmingPoolids: sts.array(() => sts.number()),
            lptokenRates: sts.array(() => v990.Perbill),
        })
    ),
}

export const depositFailed =  {
    name: 'SystemStaking.DepositFailed',
    v970: new EventType(
        'SystemStaking.DepositFailed',
        sts.struct({
            token: v970.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemStaking.DepositFailed',
        sts.struct({
            token: v980.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemStaking.DepositFailed',
        sts.struct({
            token: v990.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
}

export const mintSuccess =  {
    name: 'SystemStaking.MintSuccess',
    v970: new EventType(
        'SystemStaking.MintSuccess',
        sts.struct({
            token: v970.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemStaking.MintSuccess',
        sts.struct({
            token: v980.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemStaking.MintSuccess',
        sts.struct({
            token: v990.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
}

export const mintFailed =  {
    name: 'SystemStaking.MintFailed',
    v970: new EventType(
        'SystemStaking.MintFailed',
        sts.struct({
            token: v970.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemStaking.MintFailed',
        sts.struct({
            token: v980.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemStaking.MintFailed',
        sts.struct({
            token: v990.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
}

export const withdrawSuccess =  {
    name: 'SystemStaking.WithdrawSuccess',
    v970: new EventType(
        'SystemStaking.WithdrawSuccess',
        sts.struct({
            token: v970.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemStaking.WithdrawSuccess',
        sts.struct({
            token: v980.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemStaking.WithdrawSuccess',
        sts.struct({
            token: v990.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
}

export const withdrawFailed =  {
    name: 'SystemStaking.WithdrawFailed',
    v970: new EventType(
        'SystemStaking.WithdrawFailed',
        sts.struct({
            token: v970.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemStaking.WithdrawFailed',
        sts.struct({
            token: v980.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemStaking.WithdrawFailed',
        sts.struct({
            token: v990.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
}

export const redeemed =  {
    name: 'SystemStaking.Redeemed',
    v970: new EventType(
        'SystemStaking.Redeemed',
        sts.struct({
            token: v970.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemStaking.Redeemed',
        sts.struct({
            token: v980.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemStaking.Redeemed',
        sts.struct({
            token: v990.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
}

export const redeemFailed =  {
    name: 'SystemStaking.RedeemFailed',
    v970: new EventType(
        'SystemStaking.RedeemFailed',
        sts.struct({
            token: v970.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemStaking.RedeemFailed',
        sts.struct({
            token: v980.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemStaking.RedeemFailed',
        sts.struct({
            token: v990.CurrencyId,
            amount: sts.bigint(),
            farmingStakingAmount: sts.bigint(),
            systemStakableAmount: sts.bigint(),
            systemShadowAmount: sts.bigint(),
            pendingRedeemAmount: sts.bigint(),
        })
    ),
}

export const vtokenNotFound =  {
    name: 'SystemStaking.VtokenNotFound',
    v970: new EventType(
        'SystemStaking.VtokenNotFound',
        sts.struct({
            token: v970.CurrencyId,
        })
    ),
    v980: new EventType(
        'SystemStaking.VtokenNotFound',
        sts.struct({
            token: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'SystemStaking.VtokenNotFound',
        sts.struct({
            token: v990.CurrencyId,
        })
    ),
}

export const tokenInfoRefreshed =  {
    name: 'SystemStaking.TokenInfoRefreshed',
    v970: new EventType(
        'SystemStaking.TokenInfoRefreshed',
        sts.struct({
            token: v970.CurrencyId,
        })
    ),
    v980: new EventType(
        'SystemStaking.TokenInfoRefreshed',
        sts.struct({
            token: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'SystemStaking.TokenInfoRefreshed',
        sts.struct({
            token: v990.CurrencyId,
        })
    ),
}

export const payout =  {
    name: 'SystemStaking.Payout',
    v970: new EventType(
        'SystemStaking.Payout',
        sts.struct({
            token: v970.CurrencyId,
            vtoken: v970.CurrencyId,
            from: v970.AccountId32,
            to: v970.AccountId32,
            amount: sts.bigint(),
            free: sts.bigint(),
            vfree: sts.bigint(),
            shadow: sts.bigint(),
        })
    ),
    v980: new EventType(
        'SystemStaking.Payout',
        sts.struct({
            token: v980.CurrencyId,
            vtoken: v980.CurrencyId,
            from: v980.AccountId32,
            to: v980.AccountId32,
            amount: sts.bigint(),
            free: sts.bigint(),
            vfree: sts.bigint(),
            shadow: sts.bigint(),
        })
    ),
    v990: new EventType(
        'SystemStaking.Payout',
        sts.struct({
            token: v990.CurrencyId,
            vtoken: v990.CurrencyId,
            from: v990.AccountId32,
            to: v990.AccountId32,
            amount: sts.bigint(),
            free: sts.bigint(),
            vfree: sts.bigint(),
            shadow: sts.bigint(),
        })
    ),
}
