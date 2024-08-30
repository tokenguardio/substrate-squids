import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v994 from '../v994'

export const channelRegistered =  {
    name: 'ChannelCommission.ChannelRegistered',
    v994: new EventType(
        'ChannelCommission.ChannelRegistered',
        sts.struct({
            channelId: sts.number(),
            receiveAccount: v994.AccountId32,
            name: sts.bytes(),
        })
    ),
}

export const channelRemoved =  {
    name: 'ChannelCommission.ChannelRemoved',
    v994: new EventType(
        'ChannelCommission.ChannelRemoved',
        sts.struct({
            channelId: sts.number(),
        })
    ),
}

export const channelReceiveAccountUpdated =  {
    name: 'ChannelCommission.ChannelReceiveAccountUpdated',
    v994: new EventType(
        'ChannelCommission.ChannelReceiveAccountUpdated',
        sts.struct({
            channelId: sts.number(),
            receiver: v994.AccountId32,
        })
    ),
}

export const commissionTokenSet =  {
    name: 'ChannelCommission.CommissionTokenSet',
    v994: new EventType(
        'ChannelCommission.CommissionTokenSet',
        sts.struct({
            vtoken: v994.CurrencyId,
            commissionToken: sts.option(() => v994.CurrencyId),
        })
    ),
}

export const channelCommissionSet =  {
    name: 'ChannelCommission.ChannelCommissionSet',
    v994: new EventType(
        'ChannelCommission.ChannelCommissionSet',
        sts.struct({
            channelId: sts.number(),
            vtoken: v994.CurrencyId,
            rate: v994.Percent,
        })
    ),
}

export const commissionClaimed =  {
    name: 'ChannelCommission.CommissionClaimed',
    v994: new EventType(
        'ChannelCommission.CommissionClaimed',
        sts.struct({
            channelId: sts.number(),
            commissionToken: v994.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const channelVtokenSharesUpdated =  {
    name: 'ChannelCommission.ChannelVtokenSharesUpdated',
    v994: new EventType(
        'ChannelCommission.ChannelVtokenSharesUpdated',
        sts.struct({
            channelId: sts.number(),
            vtoken: v994.CurrencyId,
            share: v994.Permill,
        })
    ),
}

export const vtokenIssuanceSnapshotUpdated =  {
    name: 'ChannelCommission.VtokenIssuanceSnapshotUpdated',
    v994: new EventType(
        'ChannelCommission.VtokenIssuanceSnapshotUpdated',
        sts.struct({
            vtoken: v994.CurrencyId,
            oldIssuance: sts.bigint(),
            newIssuance: sts.bigint(),
        })
    ),
}

export const periodVtokenTotalMintUpdated =  {
    name: 'ChannelCommission.PeriodVtokenTotalMintUpdated',
    v994: new EventType(
        'ChannelCommission.PeriodVtokenTotalMintUpdated',
        sts.struct({
            vtoken: v994.CurrencyId,
            oldTotalMint: sts.bigint(),
            newTotalMint: sts.bigint(),
        })
    ),
}

export const periodVtokenTotalRedeemUpdated =  {
    name: 'ChannelCommission.PeriodVtokenTotalRedeemUpdated',
    v994: new EventType(
        'ChannelCommission.PeriodVtokenTotalRedeemUpdated',
        sts.struct({
            vtoken: v994.CurrencyId,
            oldTotalRedeem: sts.bigint(),
            newTotalRedeem: sts.bigint(),
        })
    ),
}

export const periodChannelVtokenMintUpdated =  {
    name: 'ChannelCommission.PeriodChannelVtokenMintUpdated',
    v994: new EventType(
        'ChannelCommission.PeriodChannelVtokenMintUpdated',
        sts.struct({
            channelId: sts.number(),
            vtoken: v994.CurrencyId,
            oldMintAmount: sts.bigint(),
            newMintAmount: sts.bigint(),
        })
    ),
}

export const periodTotalCommissionsUpdated =  {
    name: 'ChannelCommission.PeriodTotalCommissionsUpdated',
    v994: new EventType(
        'ChannelCommission.PeriodTotalCommissionsUpdated',
        sts.struct({
            commissionToken: v994.CurrencyId,
            oldAmount: sts.bigint(),
            newAmount: sts.bigint(),
        })
    ),
}

export const channelClaimableCommissionUpdated =  {
    name: 'ChannelCommission.ChannelClaimableCommissionUpdated',
    v994: new EventType(
        'ChannelCommission.ChannelClaimableCommissionUpdated',
        sts.struct({
            channelId: sts.number(),
            commissionToken: v994.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}
