import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v978 from '../v978'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v994 from '../v994'
import * as v996 from '../v996'
import * as v11000 from '../v11000'

export const mint =  {
    name: 'Slpx.mint',
    /**
     * vtoken mint and transfer to target chain
     */
    v978: new CallType(
        'Slpx.mint',
        sts.struct({
            evmCaller: v978.H160,
            currencyId: v978.CurrencyId,
            supportChain: v978.SupportChain,
        })
    ),
    /**
     * vtoken mint and transfer to target chain
     */
    v980: new CallType(
        'Slpx.mint',
        sts.struct({
            evmCaller: v980.H160,
            currencyId: v980.CurrencyId,
            targetChain: v980.TargetChain,
            remark: sts.bytes(),
        })
    ),
    /**
     * See [`Pallet::mint`].
     */
    v990: new CallType(
        'Slpx.mint',
        sts.struct({
            evmCaller: v990.H160,
            currencyId: v990.CurrencyId,
            targetChain: v990.TargetChain,
            remark: sts.bytes(),
        })
    ),
    /**
     * See [`Pallet::mint`].
     */
    v994: new CallType(
        'Slpx.mint',
        sts.struct({
            evmCaller: v994.H160,
            currencyId: v994.CurrencyId,
            targetChain: v994.TargetChain,
            remark: sts.bytes(),
        })
    ),
}

export const swap =  {
    name: 'Slpx.swap',
    /**
     * Swap and transfer to target chain
     */
    v978: new CallType(
        'Slpx.swap',
        sts.struct({
            evmCaller: v978.H160,
            currencyIdIn: v978.CurrencyId,
            currencyIdOut: v978.CurrencyId,
            currencyIdOutMin: sts.bigint(),
            supportChain: v978.SupportChain,
        })
    ),
}

export const redeem =  {
    name: 'Slpx.redeem',
    /**
     * Redeem
     */
    v978: new CallType(
        'Slpx.redeem',
        sts.struct({
            evmCaller: v978.H160,
            vtokenId: v978.CurrencyId,
            supportChain: v978.SupportChain,
        })
    ),
    /**
     * Redeem
     */
    v980: new CallType(
        'Slpx.redeem',
        sts.struct({
            evmCaller: v980.H160,
            vtokenId: v980.CurrencyId,
            targetChain: v980.TargetChain,
        })
    ),
    /**
     * See [`Pallet::redeem`].
     */
    v990: new CallType(
        'Slpx.redeem',
        sts.struct({
            evmCaller: v990.H160,
            vtokenId: v990.CurrencyId,
            targetChain: v990.TargetChain,
        })
    ),
    /**
     * See [`Pallet::redeem`].
     */
    v994: new CallType(
        'Slpx.redeem',
        sts.struct({
            evmCaller: v994.H160,
            vtokenId: v994.CurrencyId,
            targetChain: v994.TargetChain,
        })
    ),
}

export const addWhitelist =  {
    name: 'Slpx.add_whitelist',
    v978: new CallType(
        'Slpx.add_whitelist',
        sts.struct({
            supportChain: v978.SupportChain,
            evmContractAccountId: v978.AccountId32,
        })
    ),
    /**
     * See [`Pallet::add_whitelist`].
     */
    v990: new CallType(
        'Slpx.add_whitelist',
        sts.struct({
            supportChain: v990.SupportChain,
            evmContractAccountId: v990.AccountId32,
        })
    ),
    /**
     * See [`Pallet::add_whitelist`].
     */
    v994: new CallType(
        'Slpx.add_whitelist',
        sts.struct({
            supportChain: v994.SupportChain,
            evmContractAccountId: v994.AccountId32,
        })
    ),
}

export const removeWhitelist =  {
    name: 'Slpx.remove_whitelist',
    v978: new CallType(
        'Slpx.remove_whitelist',
        sts.struct({
            supportChain: v978.SupportChain,
            evmContractAccountId: v978.AccountId32,
        })
    ),
    /**
     * See [`Pallet::remove_whitelist`].
     */
    v990: new CallType(
        'Slpx.remove_whitelist',
        sts.struct({
            supportChain: v990.SupportChain,
            evmContractAccountId: v990.AccountId32,
        })
    ),
    /**
     * See [`Pallet::remove_whitelist`].
     */
    v994: new CallType(
        'Slpx.remove_whitelist',
        sts.struct({
            supportChain: v994.SupportChain,
            evmContractAccountId: v994.AccountId32,
        })
    ),
}

export const setExecutionFee =  {
    name: 'Slpx.set_execution_fee',
    v978: new CallType(
        'Slpx.set_execution_fee',
        sts.struct({
            currencyId: v978.CurrencyId,
            executionFee: sts.bigint(),
        })
    ),
    v980: new CallType(
        'Slpx.set_execution_fee',
        sts.struct({
            currencyId: v980.CurrencyId,
            executionFee: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::set_execution_fee`].
     */
    v990: new CallType(
        'Slpx.set_execution_fee',
        sts.struct({
            currencyId: v990.CurrencyId,
            executionFee: sts.bigint(),
        })
    ),
}

export const setTransferToFee =  {
    name: 'Slpx.set_transfer_to_fee',
    v978: new CallType(
        'Slpx.set_transfer_to_fee',
        sts.struct({
            supportChain: v978.SupportChain,
            transferToFee: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::set_transfer_to_fee`].
     */
    v990: new CallType(
        'Slpx.set_transfer_to_fee',
        sts.struct({
            supportChain: v990.SupportChain,
            transferToFee: sts.bigint(),
        })
    ),
    /**
     * See [`Pallet::set_transfer_to_fee`].
     */
    v994: new CallType(
        'Slpx.set_transfer_to_fee',
        sts.struct({
            supportChain: v994.SupportChain,
            transferToFee: sts.bigint(),
        })
    ),
}

export const zenlinkSwap =  {
    name: 'Slpx.zenlink_swap',
    /**
     * Swap and transfer to target chain
     */
    v980: new CallType(
        'Slpx.zenlink_swap',
        sts.struct({
            evmCaller: v980.H160,
            currencyIdIn: v980.CurrencyId,
            currencyIdOut: v980.CurrencyId,
            currencyIdOutMin: sts.bigint(),
            targetChain: v980.TargetChain,
        })
    ),
    /**
     * See [`Pallet::zenlink_swap`].
     */
    v990: new CallType(
        'Slpx.zenlink_swap',
        sts.struct({
            evmCaller: v990.H160,
            currencyIdIn: v990.CurrencyId,
            currencyIdOut: v990.CurrencyId,
            currencyIdOutMin: sts.bigint(),
            targetChain: v990.TargetChain,
        })
    ),
    /**
     * See [`Pallet::zenlink_swap`].
     */
    v994: new CallType(
        'Slpx.zenlink_swap',
        sts.struct({
            evmCaller: v994.H160,
            currencyIdIn: v994.CurrencyId,
            currencyIdOut: v994.CurrencyId,
            currencyIdOutMin: sts.bigint(),
            targetChain: v994.TargetChain,
        })
    ),
}

export const stablePoolSwap =  {
    name: 'Slpx.stable_pool_swap',
    /**
     * Stable pool swap
     */
    v980: new CallType(
        'Slpx.stable_pool_swap',
        sts.struct({
            evmCaller: v980.H160,
            poolId: sts.number(),
            currencyIdIn: v980.CurrencyId,
            currencyIdOut: v980.CurrencyId,
            minDy: sts.bigint(),
            targetChain: v980.TargetChain,
        })
    ),
    /**
     * See [`Pallet::stable_pool_swap`].
     */
    v990: new CallType(
        'Slpx.stable_pool_swap',
        sts.struct({
            evmCaller: v990.H160,
            poolId: sts.number(),
            currencyIdIn: v990.CurrencyId,
            currencyIdOut: v990.CurrencyId,
            minDy: sts.bigint(),
            targetChain: v990.TargetChain,
        })
    ),
    /**
     * See [`Pallet::stable_pool_swap`].
     */
    v994: new CallType(
        'Slpx.stable_pool_swap',
        sts.struct({
            evmCaller: v994.H160,
            poolId: sts.number(),
            currencyIdIn: v994.CurrencyId,
            currencyIdOut: v994.CurrencyId,
            minDy: sts.bigint(),
            targetChain: v994.TargetChain,
        })
    ),
}

export const setCurrencyEthereumCallSwitch =  {
    name: 'Slpx.set_currency_ethereum_call_switch',
    /**
     * See [`Pallet::set_currency_ethereum_call_switch`].
     */
    v990: new CallType(
        'Slpx.set_currency_ethereum_call_switch',
        sts.struct({
            currencyId: v990.CurrencyId,
            isSupport: sts.boolean(),
        })
    ),
}

export const setEthereumCallConfigration =  {
    name: 'Slpx.set_ethereum_call_configration',
    /**
     * See [`Pallet::set_ethereum_call_configration`].
     */
    v990: new CallType(
        'Slpx.set_ethereum_call_configration',
        sts.struct({
            xcmFee: sts.bigint(),
            xcmWeight: v990.Weight,
            period: sts.number(),
            contract: v990.H160,
        })
    ),
}

export const setCurrencySupportXcmFee =  {
    name: 'Slpx.set_currency_support_xcm_fee',
    /**
     * See [`Pallet::set_currency_support_xcm_fee`].
     */
    v994: new CallType(
        'Slpx.set_currency_support_xcm_fee',
        sts.struct({
            currencyId: v994.CurrencyId,
            isSupport: sts.boolean(),
        })
    ),
}

export const setDelayBlock =  {
    name: 'Slpx.set_delay_block',
    /**
     * See [`Pallet::set_delay_block`].
     */
    v996: new CallType(
        'Slpx.set_delay_block',
        sts.struct({
            delayBlock: sts.number(),
        })
    ),
}

export const forceAddOrder =  {
    name: 'Slpx.force_add_order',
    /**
     * See [`Pallet::force_add_order`].
     */
    v996: new CallType(
        'Slpx.force_add_order',
        sts.struct({
            slpxContractDerivativeAccount: v996.AccountId32,
            evmCaller: v996.H160,
            currencyId: v996.CurrencyId,
            targetChain: v996.TargetChain,
            remark: sts.bytes(),
            orderType: v996.OrderType,
        })
    ),
}

export const mintWithChannelId =  {
    name: 'Slpx.mint_with_channel_id',
    /**
     * See [`Pallet::mint_with_channel_id`].
     */
    v11000: new CallType(
        'Slpx.mint_with_channel_id',
        sts.struct({
            evmCaller: v11000.H160,
            currencyId: v11000.CurrencyId,
            targetChain: v11000.TargetChain,
            remark: sts.bytes(),
            channelId: sts.number(),
        })
    ),
}
