import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v994 from '../v994'
import * as v998 from '../v998'

export const registerChannel =  {
    name: 'ChannelCommission.register_channel',
    /**
     * See [`Pallet::register_channel`].
     */
    v994: new CallType(
        'ChannelCommission.register_channel',
        sts.struct({
            channelName: sts.bytes(),
            receiveAccount: v994.AccountId32,
        })
    ),
}

export const removeChannel =  {
    name: 'ChannelCommission.remove_channel',
    /**
     * See [`Pallet::remove_channel`].
     */
    v994: new CallType(
        'ChannelCommission.remove_channel',
        sts.struct({
            channelId: sts.number(),
        })
    ),
}

export const updateChannelReceiveAccount =  {
    name: 'ChannelCommission.update_channel_receive_account',
    /**
     * See [`Pallet::update_channel_receive_account`].
     */
    v994: new CallType(
        'ChannelCommission.update_channel_receive_account',
        sts.struct({
            channelId: sts.number(),
            receiveAccount: v994.AccountId32,
        })
    ),
}

export const setChannelCommissionToken =  {
    name: 'ChannelCommission.set_channel_commission_token',
    /**
     * See [`Pallet::set_channel_commission_token`].
     */
    v994: new CallType(
        'ChannelCommission.set_channel_commission_token',
        sts.struct({
            channelId: sts.number(),
            vtoken: v994.CurrencyId,
            rate: v994.Percent,
        })
    ),
}

export const setCommissionTokens =  {
    name: 'ChannelCommission.set_commission_tokens',
    /**
     * See [`Pallet::set_commission_tokens`].
     */
    v994: new CallType(
        'ChannelCommission.set_commission_tokens',
        sts.struct({
            vtoken: v994.CurrencyId,
            commissionToken: v994.CurrencyId,
        })
    ),
    /**
     * See [`Pallet::set_commission_tokens`].
     */
    v998: new CallType(
        'ChannelCommission.set_commission_tokens',
        sts.struct({
            vtoken: v998.CurrencyId,
            commissionTokenOp: sts.option(() => v998.CurrencyId),
        })
    ),
}

export const claimCommissions =  {
    name: 'ChannelCommission.claim_commissions',
    /**
     * See [`Pallet::claim_commissions`].
     */
    v994: new CallType(
        'ChannelCommission.claim_commissions',
        sts.struct({
            channelId: sts.number(),
        })
    ),
}

export const setChannelVtokenShares =  {
    name: 'ChannelCommission.set_channel_vtoken_shares',
    /**
     * See [`Pallet::set_channel_vtoken_shares`].
     */
    v994: new CallType(
        'ChannelCommission.set_channel_vtoken_shares',
        sts.struct({
            channelId: sts.number(),
            vtoken: v994.CurrencyId,
            shares: v994.Permill,
        })
    ),
}
