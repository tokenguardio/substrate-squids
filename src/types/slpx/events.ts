import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v978 from '../v978'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v994 from '../v994'
import * as v996 from '../v996'
import * as v11000 from '../v11000'

export const addWhitelistAccountId =  {
    name: 'Slpx.AddWhitelistAccountId',
    v978: new EventType(
        'Slpx.AddWhitelistAccountId',
        sts.struct({
            supportChain: v978.SupportChain,
            evmContractAccountId: v978.AccountId32,
        })
    ),
    v990: new EventType(
        'Slpx.AddWhitelistAccountId',
        sts.struct({
            supportChain: v990.SupportChain,
            evmContractAccountId: v990.AccountId32,
        })
    ),
    v994: new EventType(
        'Slpx.AddWhitelistAccountId',
        sts.struct({
            supportChain: v994.SupportChain,
            evmContractAccountId: v994.AccountId32,
        })
    ),
}

export const removeWhitelistAccountId =  {
    name: 'Slpx.RemoveWhitelistAccountId',
    v978: new EventType(
        'Slpx.RemoveWhitelistAccountId',
        sts.struct({
            supportChain: v978.SupportChain,
            evmContractAccountId: v978.AccountId32,
        })
    ),
    v990: new EventType(
        'Slpx.RemoveWhitelistAccountId',
        sts.struct({
            supportChain: v990.SupportChain,
            evmContractAccountId: v990.AccountId32,
        })
    ),
    v994: new EventType(
        'Slpx.RemoveWhitelistAccountId',
        sts.struct({
            supportChain: v994.SupportChain,
            evmContractAccountId: v994.AccountId32,
        })
    ),
}

export const xcmMint =  {
    name: 'Slpx.XcmMint',
    v978: new EventType(
        'Slpx.XcmMint',
        sts.struct({
            evmCaller: v978.H160,
            currencyId: v978.CurrencyId,
            tokenAmount: sts.bigint(),
            supportChain: v978.SupportChain,
        })
    ),
    v980: new EventType(
        'Slpx.XcmMint',
        sts.struct({
            evmCaller: v980.H160,
            currencyId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            targetChain: v980.TargetChain,
        })
    ),
    v990: new EventType(
        'Slpx.XcmMint',
        sts.struct({
            evmCaller: v990.H160,
            currencyId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            targetChain: v990.TargetChain,
        })
    ),
    v994: new EventType(
        'Slpx.XcmMint',
        sts.struct({
            evmCaller: v994.H160,
            currencyId: v994.CurrencyId,
            tokenAmount: sts.bigint(),
            targetChain: v994.TargetChain,
        })
    ),
}

export const xcmMintFailed =  {
    name: 'Slpx.XcmMintFailed',
    v978: new EventType(
        'Slpx.XcmMintFailed',
        sts.struct({
            evmCaller: v978.H160,
            currencyId: v978.CurrencyId,
            tokenAmount: sts.bigint(),
            supportChain: v978.SupportChain,
        })
    ),
    v980: new EventType(
        'Slpx.XcmMintFailed',
        sts.struct({
            evmCaller: v980.H160,
            currencyId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            targetChain: v980.TargetChain,
        })
    ),
    v990: new EventType(
        'Slpx.XcmMintFailed',
        sts.struct({
            evmCaller: v990.H160,
            currencyId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            targetChain: v990.TargetChain,
        })
    ),
    v994: new EventType(
        'Slpx.XcmMintFailed',
        sts.struct({
            evmCaller: v994.H160,
            currencyId: v994.CurrencyId,
            tokenAmount: sts.bigint(),
            targetChain: v994.TargetChain,
        })
    ),
}

export const xcmSwap =  {
    name: 'Slpx.XcmSwap',
    v978: new EventType(
        'Slpx.XcmSwap',
        sts.struct({
            evmCaller: v978.H160,
            currencyIdIn: v978.CurrencyId,
            currencyIdOut: v978.CurrencyId,
            supportChain: v978.SupportChain,
        })
    ),
}

export const xcmSwapFailed =  {
    name: 'Slpx.XcmSwapFailed',
    v978: new EventType(
        'Slpx.XcmSwapFailed',
        sts.struct({
            evmCaller: v978.H160,
            currencyIdIn: v978.CurrencyId,
            currencyIdOut: v978.CurrencyId,
            supportChain: v978.SupportChain,
        })
    ),
}

export const xcmRedeem =  {
    name: 'Slpx.XcmRedeem',
    v978: new EventType(
        'Slpx.XcmRedeem',
        sts.struct({
            evmCaller: v978.H160,
            vtokenId: v978.CurrencyId,
            vtokenAmount: sts.bigint(),
            supportChain: v978.SupportChain,
        })
    ),
    v980: new EventType(
        'Slpx.XcmRedeem',
        sts.struct({
            evmCaller: v980.H160,
            vtokenId: v980.CurrencyId,
            vtokenAmount: sts.bigint(),
            targetChain: v980.TargetChain,
        })
    ),
    v990: new EventType(
        'Slpx.XcmRedeem',
        sts.struct({
            evmCaller: v990.H160,
            vtokenId: v990.CurrencyId,
            vtokenAmount: sts.bigint(),
            targetChain: v990.TargetChain,
        })
    ),
    v994: new EventType(
        'Slpx.XcmRedeem',
        sts.struct({
            evmCaller: v994.H160,
            vtokenId: v994.CurrencyId,
            vtokenAmount: sts.bigint(),
            targetChain: v994.TargetChain,
        })
    ),
}

export const xcmRedeemFailed =  {
    name: 'Slpx.XcmRedeemFailed',
    v978: new EventType(
        'Slpx.XcmRedeemFailed',
        sts.struct({
            evmCaller: v978.H160,
            vtokenId: v978.CurrencyId,
            vtokenAmount: sts.bigint(),
            supportChain: v978.SupportChain,
        })
    ),
    v980: new EventType(
        'Slpx.XcmRedeemFailed',
        sts.struct({
            evmCaller: v980.H160,
            vtokenId: v980.CurrencyId,
            vtokenAmount: sts.bigint(),
            targetChain: v980.TargetChain,
        })
    ),
    v990: new EventType(
        'Slpx.XcmRedeemFailed',
        sts.struct({
            evmCaller: v990.H160,
            vtokenId: v990.CurrencyId,
            vtokenAmount: sts.bigint(),
            targetChain: v990.TargetChain,
        })
    ),
    v994: new EventType(
        'Slpx.XcmRedeemFailed',
        sts.struct({
            evmCaller: v994.H160,
            vtokenId: v994.CurrencyId,
            vtokenAmount: sts.bigint(),
            targetChain: v994.TargetChain,
        })
    ),
}

export const setTransferToFee =  {
    name: 'Slpx.SetTransferToFee',
    v978: new EventType(
        'Slpx.SetTransferToFee',
        sts.struct({
            supportChain: v978.SupportChain,
            transferToFee: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Slpx.SetTransferToFee',
        sts.struct({
            supportChain: v990.SupportChain,
            transferToFee: sts.bigint(),
        })
    ),
    v994: new EventType(
        'Slpx.SetTransferToFee',
        sts.struct({
            supportChain: v994.SupportChain,
            transferToFee: sts.bigint(),
        })
    ),
}

export const setExecutionFee =  {
    name: 'Slpx.SetExecutionFee',
    v978: new EventType(
        'Slpx.SetExecutionFee',
        sts.struct({
            currencyId: v978.CurrencyId,
            executionFee: sts.bigint(),
        })
    ),
    v980: new EventType(
        'Slpx.SetExecutionFee',
        sts.struct({
            currencyId: v980.CurrencyId,
            executionFee: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Slpx.SetExecutionFee',
        sts.struct({
            currencyId: v990.CurrencyId,
            executionFee: sts.bigint(),
        })
    ),
}

export const xcmZenlinkSwap =  {
    name: 'Slpx.XcmZenlinkSwap',
    v980: new EventType(
        'Slpx.XcmZenlinkSwap',
        sts.struct({
            evmCaller: v980.H160,
            currencyIdIn: v980.CurrencyId,
            currencyIdOut: v980.CurrencyId,
            currencyIdOutAmount: sts.bigint(),
            targetChain: v980.TargetChain,
        })
    ),
    v990: new EventType(
        'Slpx.XcmZenlinkSwap',
        sts.struct({
            evmCaller: v990.H160,
            currencyIdIn: v990.CurrencyId,
            currencyIdOut: v990.CurrencyId,
            currencyIdOutAmount: sts.bigint(),
            targetChain: v990.TargetChain,
        })
    ),
    v994: new EventType(
        'Slpx.XcmZenlinkSwap',
        sts.struct({
            evmCaller: v994.H160,
            currencyIdIn: v994.CurrencyId,
            currencyIdOut: v994.CurrencyId,
            currencyIdOutAmount: sts.bigint(),
            targetChain: v994.TargetChain,
        })
    ),
}

export const xcmZenlinkSwapFailed =  {
    name: 'Slpx.XcmZenlinkSwapFailed',
    v980: new EventType(
        'Slpx.XcmZenlinkSwapFailed',
        sts.struct({
            evmCaller: v980.H160,
            currencyIdIn: v980.CurrencyId,
            currencyIdOut: v980.CurrencyId,
            currencyIdInAmount: sts.bigint(),
            targetChain: v980.TargetChain,
        })
    ),
    v990: new EventType(
        'Slpx.XcmZenlinkSwapFailed',
        sts.struct({
            evmCaller: v990.H160,
            currencyIdIn: v990.CurrencyId,
            currencyIdOut: v990.CurrencyId,
            currencyIdInAmount: sts.bigint(),
            targetChain: v990.TargetChain,
        })
    ),
    v994: new EventType(
        'Slpx.XcmZenlinkSwapFailed',
        sts.struct({
            evmCaller: v994.H160,
            currencyIdIn: v994.CurrencyId,
            currencyIdOut: v994.CurrencyId,
            currencyIdInAmount: sts.bigint(),
            targetChain: v994.TargetChain,
        })
    ),
}

export const xcmStablePoolSwap =  {
    name: 'Slpx.XcmStablePoolSwap',
    v980: new EventType(
        'Slpx.XcmStablePoolSwap',
        sts.struct({
            evmCaller: v980.H160,
            poolTokenIndexIn: sts.number(),
            poolTokenIndexOut: sts.number(),
            currencyIdOutAmount: sts.bigint(),
            targetChain: v980.TargetChain,
        })
    ),
    v990: new EventType(
        'Slpx.XcmStablePoolSwap',
        sts.struct({
            evmCaller: v990.H160,
            poolTokenIndexIn: sts.number(),
            poolTokenIndexOut: sts.number(),
            currencyIdOutAmount: sts.bigint(),
            targetChain: v990.TargetChain,
        })
    ),
    v994: new EventType(
        'Slpx.XcmStablePoolSwap',
        sts.struct({
            evmCaller: v994.H160,
            poolTokenIndexIn: sts.number(),
            poolTokenIndexOut: sts.number(),
            currencyIdOutAmount: sts.bigint(),
            targetChain: v994.TargetChain,
        })
    ),
}

export const xcmStablePoolSwapFailed =  {
    name: 'Slpx.XcmStablePoolSwapFailed',
    v980: new EventType(
        'Slpx.XcmStablePoolSwapFailed',
        sts.struct({
            evmCaller: v980.H160,
            poolTokenIndexIn: sts.number(),
            poolTokenIndexOut: sts.number(),
            currencyIdInAmount: sts.bigint(),
            targetChain: v980.TargetChain,
        })
    ),
    v990: new EventType(
        'Slpx.XcmStablePoolSwapFailed',
        sts.struct({
            evmCaller: v990.H160,
            poolTokenIndexIn: sts.number(),
            poolTokenIndexOut: sts.number(),
            currencyIdInAmount: sts.bigint(),
            targetChain: v990.TargetChain,
        })
    ),
    v994: new EventType(
        'Slpx.XcmStablePoolSwapFailed',
        sts.struct({
            evmCaller: v994.H160,
            poolTokenIndexIn: sts.number(),
            poolTokenIndexOut: sts.number(),
            currencyIdInAmount: sts.bigint(),
            targetChain: v994.TargetChain,
        })
    ),
}

export const setCurrencyEthereumCallSwitch =  {
    name: 'Slpx.SetCurrencyEthereumCallSwitch',
    v990: new EventType(
        'Slpx.SetCurrencyEthereumCallSwitch',
        sts.struct({
            currencyId: v990.CurrencyId,
            isSupport: sts.boolean(),
        })
    ),
}

export const setEthereumCallConfiguration =  {
    name: 'Slpx.SetEthereumCallConfiguration',
    v990: new EventType(
        'Slpx.SetEthereumCallConfiguration',
        sts.struct({
            xcmFee: sts.bigint(),
            xcmWeight: v990.Weight,
            period: sts.number(),
            contract: v990.H160,
        })
    ),
}

export const xcmSetTokenAmount =  {
    name: 'Slpx.XcmSetTokenAmount',
    v990: new EventType(
        'Slpx.XcmSetTokenAmount',
        sts.struct({
            currencyId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            vcurrencyId: v990.CurrencyId,
            vtokenAmount: sts.bigint(),
        })
    ),
}

export const setCurrencyToSupportXcmFee =  {
    name: 'Slpx.SetCurrencyToSupportXcmFee',
    v994: new EventType(
        'Slpx.SetCurrencyToSupportXcmFee',
        sts.struct({
            currencyId: v994.CurrencyId,
            isSupport: sts.boolean(),
        })
    ),
}

export const setDelayBlock =  {
    name: 'Slpx.SetDelayBlock',
    v996: new EventType(
        'Slpx.SetDelayBlock',
        sts.struct({
            delayBlock: sts.number(),
        })
    ),
}

export const createOrder =  {
    name: 'Slpx.CreateOrder',
    v996: new EventType(
        'Slpx.CreateOrder',
        sts.struct({
            order: v996.Order,
        })
    ),
    v11000: new EventType(
        'Slpx.CreateOrder',
        sts.struct({
            order: v11000.Order,
        })
    ),
}

export const orderHandled =  {
    name: 'Slpx.OrderHandled',
    v996: new EventType(
        'Slpx.OrderHandled',
        sts.struct({
            order: v996.Order,
        })
    ),
    v11000: new EventType(
        'Slpx.OrderHandled',
        sts.struct({
            order: v11000.Order,
        })
    ),
}

export const orderFailed =  {
    name: 'Slpx.OrderFailed',
    v996: new EventType(
        'Slpx.OrderFailed',
        sts.struct({
            order: v996.Order,
        })
    ),
    v11000: new EventType(
        'Slpx.OrderFailed',
        sts.struct({
            order: v11000.Order,
        })
    ),
}

export const insufficientAssets =  {
    name: 'Slpx.InsufficientAssets',
    v998: new EventType(
        'Slpx.InsufficientAssets',
        sts.unit()
    ),
}
