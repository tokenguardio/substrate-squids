import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v982 from '../v982'
import * as v990 from '../v990'
import * as v994 from '../v994'

export const createPool =  {
    name: 'StableAsset.CreatePool',
    v982: new EventType(
        'StableAsset.CreatePool',
        sts.struct({
            poolId: sts.number(),
            a: sts.bigint(),
            swapId: v982.AccountId32,
            palletId: v982.AccountId32,
        })
    ),
}

export const liquidityAdded =  {
    name: 'StableAsset.LiquidityAdded',
    v982: new EventType(
        'StableAsset.LiquidityAdded',
        sts.struct({
            minter: v982.AccountId32,
            poolId: sts.number(),
            a: sts.bigint(),
            inputAmounts: sts.array(() => sts.bigint()),
            minOutputAmount: sts.bigint(),
            balances: sts.array(() => sts.bigint()),
            totalSupply: sts.bigint(),
            feeAmount: sts.bigint(),
            outputAmount: sts.bigint(),
        })
    ),
}

export const tokenSwapped =  {
    name: 'StableAsset.TokenSwapped',
    v982: new EventType(
        'StableAsset.TokenSwapped',
        sts.struct({
            swapper: v982.AccountId32,
            poolId: sts.number(),
            a: sts.bigint(),
            inputAsset: v982.CurrencyId,
            outputAsset: v982.CurrencyId,
            inputAmount: sts.bigint(),
            minOutputAmount: sts.bigint(),
            balances: sts.array(() => sts.bigint()),
            totalSupply: sts.bigint(),
            outputAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'StableAsset.TokenSwapped',
        sts.struct({
            swapper: v990.AccountId32,
            poolId: sts.number(),
            a: sts.bigint(),
            inputAsset: v990.CurrencyId,
            outputAsset: v990.CurrencyId,
            inputAmount: sts.bigint(),
            minOutputAmount: sts.bigint(),
            balances: sts.array(() => sts.bigint()),
            totalSupply: sts.bigint(),
            outputAmount: sts.bigint(),
        })
    ),
}

export const redeemedProportion =  {
    name: 'StableAsset.RedeemedProportion',
    v982: new EventType(
        'StableAsset.RedeemedProportion',
        sts.struct({
            redeemer: v982.AccountId32,
            poolId: sts.number(),
            a: sts.bigint(),
            inputAmount: sts.bigint(),
            minOutputAmounts: sts.array(() => sts.bigint()),
            balances: sts.array(() => sts.bigint()),
            totalSupply: sts.bigint(),
            feeAmount: sts.bigint(),
            outputAmounts: sts.array(() => sts.bigint()),
        })
    ),
}

export const redeemedSingle =  {
    name: 'StableAsset.RedeemedSingle',
    v982: new EventType(
        'StableAsset.RedeemedSingle',
        sts.struct({
            redeemer: v982.AccountId32,
            poolId: sts.number(),
            a: sts.bigint(),
            inputAmount: sts.bigint(),
            outputAsset: v982.CurrencyId,
            minOutputAmount: sts.bigint(),
            balances: sts.array(() => sts.bigint()),
            totalSupply: sts.bigint(),
            feeAmount: sts.bigint(),
            outputAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'StableAsset.RedeemedSingle',
        sts.struct({
            redeemer: v990.AccountId32,
            poolId: sts.number(),
            a: sts.bigint(),
            inputAmount: sts.bigint(),
            outputAsset: v990.CurrencyId,
            minOutputAmount: sts.bigint(),
            balances: sts.array(() => sts.bigint()),
            totalSupply: sts.bigint(),
            feeAmount: sts.bigint(),
            outputAmount: sts.bigint(),
        })
    ),
}

export const redeemedMulti =  {
    name: 'StableAsset.RedeemedMulti',
    v982: new EventType(
        'StableAsset.RedeemedMulti',
        sts.struct({
            redeemer: v982.AccountId32,
            poolId: sts.number(),
            a: sts.bigint(),
            outputAmounts: sts.array(() => sts.bigint()),
            maxInputAmount: sts.bigint(),
            balances: sts.array(() => sts.bigint()),
            totalSupply: sts.bigint(),
            feeAmount: sts.bigint(),
            inputAmount: sts.bigint(),
        })
    ),
}

export const balanceUpdated =  {
    name: 'StableAsset.BalanceUpdated',
    v982: new EventType(
        'StableAsset.BalanceUpdated',
        sts.struct({
            poolId: sts.number(),
            oldBalances: sts.array(() => sts.bigint()),
            newBalances: sts.array(() => sts.bigint()),
        })
    ),
}

export const yieldCollected =  {
    name: 'StableAsset.YieldCollected',
    v982: new EventType(
        'StableAsset.YieldCollected',
        sts.struct({
            poolId: sts.number(),
            a: sts.bigint(),
            oldTotalSupply: sts.bigint(),
            newTotalSupply: sts.bigint(),
            who: v982.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const feeCollected =  {
    name: 'StableAsset.FeeCollected',
    v982: new EventType(
        'StableAsset.FeeCollected',
        sts.struct({
            poolId: sts.number(),
            a: sts.bigint(),
            oldBalances: sts.array(() => sts.bigint()),
            newBalances: sts.array(() => sts.bigint()),
            oldTotalSupply: sts.bigint(),
            newTotalSupply: sts.bigint(),
            who: v982.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const aModified =  {
    name: 'StableAsset.AModified',
    v982: new EventType(
        'StableAsset.AModified',
        sts.struct({
            poolId: sts.number(),
            value: sts.bigint(),
            time: sts.number(),
        })
    ),
}

export const feeModified =  {
    name: 'StableAsset.FeeModified',
    v982: new EventType(
        'StableAsset.FeeModified',
        sts.struct({
            poolId: sts.number(),
            mintFee: sts.bigint(),
            swapFee: sts.bigint(),
            redeemFee: sts.bigint(),
        })
    ),
}

export const recipientModified =  {
    name: 'StableAsset.RecipientModified',
    v982: new EventType(
        'StableAsset.RecipientModified',
        sts.struct({
            poolId: sts.number(),
            feeRecipient: v982.AccountId32,
            yieldRecipient: v982.AccountId32,
        })
    ),
}

export const tokenRateSet =  {
    name: 'StableAsset.TokenRateSet',
    v982: new EventType(
        'StableAsset.TokenRateSet',
        sts.struct({
            poolId: sts.number(),
            tokenRate: sts.array(() => sts.tuple(() => [v982.CurrencyId, sts.tuple(() => [sts.bigint(), sts.bigint()])])),
        })
    ),
    v990: new EventType(
        'StableAsset.TokenRateSet',
        sts.struct({
            poolId: sts.number(),
            tokenRate: sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.tuple(() => [sts.bigint(), sts.bigint()])])),
        })
    ),
}

export const tokenRateHardcapConfigured =  {
    name: 'StableAsset.TokenRateHardcapConfigured',
    v994: new EventType(
        'StableAsset.TokenRateHardcapConfigured',
        sts.struct({
            vtoken: v994.CurrencyId,
            hardcap: v994.Permill,
        })
    ),
}

export const tokenRateHardcapRemoved =  {
    name: 'StableAsset.TokenRateHardcapRemoved',
    v994: new EventType(
        'StableAsset.TokenRateHardcapRemoved',
        sts.struct({
            vtoken: v994.CurrencyId,
        })
    ),
}

export const tokenRateRefreshFailed =  {
    name: 'StableAsset.TokenRateRefreshFailed',
    v994: new EventType(
        'StableAsset.TokenRateRefreshFailed',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}
