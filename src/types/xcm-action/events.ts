import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v976 from '../v976'

export const addWhitelistAccountId =  {
    name: 'XcmAction.AddWhitelistAccountId',
    v976: new EventType(
        'XcmAction.AddWhitelistAccountId',
        sts.struct({
            supportChain: v976.SupportChain,
            evmContractAccountId: v976.AccountId32,
        })
    ),
}

export const removeWhitelistAccountId =  {
    name: 'XcmAction.RemoveWhitelistAccountId',
    v976: new EventType(
        'XcmAction.RemoveWhitelistAccountId',
        sts.struct({
            supportChain: v976.SupportChain,
            evmContractAccountId: v976.AccountId32,
        })
    ),
}

export const xcmMint =  {
    name: 'XcmAction.XcmMint',
    v976: new EventType(
        'XcmAction.XcmMint',
        sts.struct({
            evmCaller: v976.H160,
            currencyId: v976.CurrencyId,
            tokenAmount: sts.bigint(),
            supportChain: v976.SupportChain,
        })
    ),
}

export const xcmMintFailed =  {
    name: 'XcmAction.XcmMintFailed',
    v976: new EventType(
        'XcmAction.XcmMintFailed',
        sts.struct({
            evmCaller: v976.H160,
            currencyId: v976.CurrencyId,
            tokenAmount: sts.bigint(),
            supportChain: v976.SupportChain,
        })
    ),
}

export const xcmSwap =  {
    name: 'XcmAction.XcmSwap',
    v976: new EventType(
        'XcmAction.XcmSwap',
        sts.struct({
            evmCaller: v976.H160,
            currencyIdIn: v976.CurrencyId,
            currencyIdOut: v976.CurrencyId,
            supportChain: v976.SupportChain,
        })
    ),
}

export const xcmSwapFailed =  {
    name: 'XcmAction.XcmSwapFailed',
    v976: new EventType(
        'XcmAction.XcmSwapFailed',
        sts.struct({
            evmCaller: v976.H160,
            currencyIdIn: v976.CurrencyId,
            currencyIdOut: v976.CurrencyId,
            supportChain: v976.SupportChain,
        })
    ),
}

export const xcmRedeem =  {
    name: 'XcmAction.XcmRedeem',
    v976: new EventType(
        'XcmAction.XcmRedeem',
        sts.struct({
            evmCaller: v976.H160,
            vtokenId: v976.CurrencyId,
            vtokenAmount: sts.bigint(),
            supportChain: v976.SupportChain,
        })
    ),
}

export const xcmRedeemFailed =  {
    name: 'XcmAction.XcmRedeemFailed',
    v976: new EventType(
        'XcmAction.XcmRedeemFailed',
        sts.struct({
            evmCaller: v976.H160,
            vtokenId: v976.CurrencyId,
            vtokenAmount: sts.bigint(),
            supportChain: v976.SupportChain,
        })
    ),
}

export const setTransferToFee =  {
    name: 'XcmAction.SetTransferToFee',
    v976: new EventType(
        'XcmAction.SetTransferToFee',
        sts.struct({
            supportChain: v976.SupportChain,
            transferToFee: sts.bigint(),
        })
    ),
}

export const setExecutionFee =  {
    name: 'XcmAction.SetExecutionFee',
    v976: new EventType(
        'XcmAction.SetExecutionFee',
        sts.struct({
            currencyId: v976.CurrencyId,
            executionFee: sts.bigint(),
        })
    ),
}
