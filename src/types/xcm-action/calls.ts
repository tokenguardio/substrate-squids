import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v976 from '../v976'

export const mint =  {
    name: 'XcmAction.mint',
    /**
     * vtoken mint and transfer to target chain
     */
    v976: new CallType(
        'XcmAction.mint',
        sts.struct({
            evmCaller: v976.H160,
            currencyId: v976.CurrencyId,
            supportChain: v976.SupportChain,
        })
    ),
}

export const swap =  {
    name: 'XcmAction.swap',
    /**
     * Swap and transfer to target chain
     */
    v976: new CallType(
        'XcmAction.swap',
        sts.struct({
            evmCaller: v976.H160,
            currencyIdIn: v976.CurrencyId,
            currencyIdOut: v976.CurrencyId,
            currencyIdOutMin: sts.bigint(),
            supportChain: v976.SupportChain,
        })
    ),
}

export const redeem =  {
    name: 'XcmAction.redeem',
    /**
     * Redeem
     */
    v976: new CallType(
        'XcmAction.redeem',
        sts.struct({
            evmCaller: v976.H160,
            vtokenId: v976.CurrencyId,
            supportChain: v976.SupportChain,
        })
    ),
}

export const addWhitelist =  {
    name: 'XcmAction.add_whitelist',
    v976: new CallType(
        'XcmAction.add_whitelist',
        sts.struct({
            supportChain: v976.SupportChain,
            evmContractAccountId: v976.AccountId32,
        })
    ),
}

export const removeWhitelist =  {
    name: 'XcmAction.remove_whitelist',
    v976: new CallType(
        'XcmAction.remove_whitelist',
        sts.struct({
            supportChain: v976.SupportChain,
            evmContractAccountId: v976.AccountId32,
        })
    ),
}

export const setExecutionFee =  {
    name: 'XcmAction.set_execution_fee',
    v976: new CallType(
        'XcmAction.set_execution_fee',
        sts.struct({
            currencyId: v976.CurrencyId,
            executionFee: sts.bigint(),
        })
    ),
}

export const setTransferToFee =  {
    name: 'XcmAction.set_transfer_to_fee',
    v976: new CallType(
        'XcmAction.set_transfer_to_fee',
        sts.struct({
            supportChain: v976.SupportChain,
            transferToFee: sts.bigint(),
        })
    ),
}
