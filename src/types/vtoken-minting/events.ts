import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v970 from '../v970'
import * as v971 from '../v971'
import * as v978 from '../v978'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v992 from '../v992'
import * as v996 from '../v996'
import * as v10000 from '../v10000'
import * as v12001 from '../v12001'

export const minted =  {
    name: 'VtokenMinting.Minted',
    v956: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            address: v956.AccountId32,
            tokenId: v956.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            address: v962.AccountId32,
            tokenId: v962.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            address: v980.AccountId32,
            tokenId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
            remark: sts.bytes(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            address: v990.AccountId32,
            tokenId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
            remark: sts.bytes(),
        })
    ),
    v12001: new EventType(
        'VtokenMinting.Minted',
        sts.struct({
            address: v12001.AccountId32,
            tokenId: v12001.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
            remark: sts.bytes(),
            channelId: sts.option(() => sts.number()),
        })
    ),
}

export const redeemed =  {
    name: 'VtokenMinting.Redeemed',
    v956: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            address: v956.AccountId32,
            tokenId: v956.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            address: v962.AccountId32,
            tokenId: v962.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            address: v980.AccountId32,
            tokenId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            address: v990.AccountId32,
            tokenId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v996: new EventType(
        'VtokenMinting.Redeemed',
        sts.struct({
            address: v996.AccountId32,
            tokenId: v996.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
            unlockId: sts.number(),
        })
    ),
}

export const redeemSuccess =  {
    name: 'VtokenMinting.RedeemSuccess',
    v956: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            unlockId: sts.number(),
            tokenId: v956.CurrencyId,
            to: v956.AccountId32,
            tokenAmount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            unlockId: sts.number(),
            tokenId: v962.CurrencyId,
            to: v962.AccountId32,
            tokenAmount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            unlockId: sts.number(),
            tokenId: v980.CurrencyId,
            to: v980.AccountId32,
            tokenAmount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            unlockId: sts.number(),
            tokenId: v990.CurrencyId,
            to: v990.AccountId32,
            tokenAmount: sts.bigint(),
        })
    ),
    v10000: new EventType(
        'VtokenMinting.RedeemSuccess',
        sts.struct({
            unlockId: sts.number(),
            tokenId: v10000.CurrencyId,
            to: v10000.RedeemTo,
            tokenAmount: sts.bigint(),
        })
    ),
}

export const rebonded =  {
    name: 'VtokenMinting.Rebonded',
    v956: new EventType(
        'VtokenMinting.Rebonded',
        sts.struct({
            address: v956.AccountId32,
            tokenId: v956.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.Rebonded',
        sts.struct({
            address: v962.AccountId32,
            tokenId: v962.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.Rebonded',
        sts.struct({
            address: v980.AccountId32,
            tokenId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.Rebonded',
        sts.struct({
            address: v990.AccountId32,
            tokenId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
}

export const rebondedByUnlockId =  {
    name: 'VtokenMinting.RebondedByUnlockId',
    v956: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            address: v956.AccountId32,
            tokenId: v956.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            address: v962.AccountId32,
            tokenId: v962.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            address: v980.AccountId32,
            tokenId: v980.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            address: v990.AccountId32,
            tokenId: v990.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
    v996: new EventType(
        'VtokenMinting.RebondedByUnlockId',
        sts.struct({
            address: v996.AccountId32,
            tokenId: v996.CurrencyId,
            tokenAmount: sts.bigint(),
            vtokenAmount: sts.bigint(),
            fee: sts.bigint(),
            unlockId: sts.number(),
        })
    ),
}

export const unlockDurationSet =  {
    name: 'VtokenMinting.UnlockDurationSet',
    v956: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            tokenId: v956.CurrencyId,
            unlockDuration: v956.TimeUnit,
        })
    ),
    v962: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            tokenId: v962.CurrencyId,
            unlockDuration: v962.TimeUnit,
        })
    ),
    v970: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            tokenId: v970.CurrencyId,
            unlockDuration: v970.TimeUnit,
        })
    ),
    v980: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            tokenId: v980.CurrencyId,
            unlockDuration: v980.TimeUnit,
        })
    ),
    v990: new EventType(
        'VtokenMinting.UnlockDurationSet',
        sts.struct({
            tokenId: v990.CurrencyId,
            unlockDuration: v990.TimeUnit,
        })
    ),
}

export const minimumMintSet =  {
    name: 'VtokenMinting.MinimumMintSet',
    v956: new EventType(
        'VtokenMinting.MinimumMintSet',
        sts.struct({
            tokenId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.MinimumMintSet',
        sts.struct({
            tokenId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.MinimumMintSet',
        sts.struct({
            tokenId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.MinimumMintSet',
        sts.struct({
            tokenId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const minimumRedeemSet =  {
    name: 'VtokenMinting.MinimumRedeemSet',
    v956: new EventType(
        'VtokenMinting.MinimumRedeemSet',
        sts.struct({
            tokenId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.MinimumRedeemSet',
        sts.struct({
            tokenId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.MinimumRedeemSet',
        sts.struct({
            tokenId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.MinimumRedeemSet',
        sts.struct({
            tokenId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const supportRebondTokenAdded =  {
    name: 'VtokenMinting.SupportRebondTokenAdded',
    v956: new EventType(
        'VtokenMinting.SupportRebondTokenAdded',
        sts.struct({
            tokenId: v956.CurrencyId,
        })
    ),
    v962: new EventType(
        'VtokenMinting.SupportRebondTokenAdded',
        sts.struct({
            tokenId: v962.CurrencyId,
        })
    ),
    v980: new EventType(
        'VtokenMinting.SupportRebondTokenAdded',
        sts.struct({
            tokenId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'VtokenMinting.SupportRebondTokenAdded',
        sts.struct({
            tokenId: v990.CurrencyId,
        })
    ),
}

export const supportRebondTokenRemoved =  {
    name: 'VtokenMinting.SupportRebondTokenRemoved',
    v956: new EventType(
        'VtokenMinting.SupportRebondTokenRemoved',
        sts.struct({
            tokenId: v956.CurrencyId,
        })
    ),
    v962: new EventType(
        'VtokenMinting.SupportRebondTokenRemoved',
        sts.struct({
            tokenId: v962.CurrencyId,
        })
    ),
    v980: new EventType(
        'VtokenMinting.SupportRebondTokenRemoved',
        sts.struct({
            tokenId: v980.CurrencyId,
        })
    ),
    v990: new EventType(
        'VtokenMinting.SupportRebondTokenRemoved',
        sts.struct({
            tokenId: v990.CurrencyId,
        })
    ),
}

export const feeSet =  {
    name: 'VtokenMinting.FeeSet',
    /**
     * Several fees has been set.
     */
    v956: new EventType(
        'VtokenMinting.FeeSet',
        sts.struct({
            mintFee: v956.Permill,
            redeemFee: v956.Permill,
        })
    ),
}

export const hookIterationLimitSet =  {
    name: 'VtokenMinting.HookIterationLimitSet',
    v956: new EventType(
        'VtokenMinting.HookIterationLimitSet',
        sts.struct({
            limit: sts.number(),
        })
    ),
}

export const unlockingTotalSet =  {
    name: 'VtokenMinting.UnlockingTotalSet',
    v956: new EventType(
        'VtokenMinting.UnlockingTotalSet',
        sts.struct({
            tokenId: v956.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v962: new EventType(
        'VtokenMinting.UnlockingTotalSet',
        sts.struct({
            tokenId: v962.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v980: new EventType(
        'VtokenMinting.UnlockingTotalSet',
        sts.struct({
            tokenId: v980.CurrencyId,
            amount: sts.bigint(),
        })
    ),
    v990: new EventType(
        'VtokenMinting.UnlockingTotalSet',
        sts.struct({
            tokenId: v990.CurrencyId,
            amount: sts.bigint(),
        })
    ),
}

export const minTimeUnitSet =  {
    name: 'VtokenMinting.MinTimeUnitSet',
    v956: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            tokenId: v956.CurrencyId,
            timeUnit: v956.TimeUnit,
        })
    ),
    v962: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            tokenId: v962.CurrencyId,
            timeUnit: v962.TimeUnit,
        })
    ),
    v970: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            tokenId: v970.CurrencyId,
            timeUnit: v970.TimeUnit,
        })
    ),
    v980: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            tokenId: v980.CurrencyId,
            timeUnit: v980.TimeUnit,
        })
    ),
    v990: new EventType(
        'VtokenMinting.MinTimeUnitSet',
        sts.struct({
            tokenId: v990.CurrencyId,
            timeUnit: v990.TimeUnit,
        })
    ),
}

export const fastRedeemFailed =  {
    name: 'VtokenMinting.FastRedeemFailed',
    v971: new EventType(
        'VtokenMinting.FastRedeemFailed',
        sts.struct({
            err: v971.DispatchError,
        })
    ),
    v978: new EventType(
        'VtokenMinting.FastRedeemFailed',
        sts.struct({
            err: v978.DispatchError,
        })
    ),
    v990: new EventType(
        'VtokenMinting.FastRedeemFailed',
        sts.struct({
            err: v990.DispatchError,
        })
    ),
}

export const currencyTimeUnitRecreated =  {
    name: 'VtokenMinting.CurrencyTimeUnitRecreated',
    v992: new EventType(
        'VtokenMinting.CurrencyTimeUnitRecreated',
        sts.struct({
            tokenId: v992.CurrencyId,
            timeUnit: v992.TimeUnit,
        })
    ),
}

export const incentivizedMinting =  {
    name: 'VtokenMinting.IncentivizedMinting',
    v10000: new EventType(
        'VtokenMinting.IncentivizedMinting',
        sts.struct({
            address: v10000.AccountId32,
            tokenId: v10000.CurrencyId,
            tokenAmount: sts.bigint(),
            lockedVtokenAmount: sts.bigint(),
            incentiveVtokenAmount: sts.bigint(),
        })
    ),
}

export const vtokenIncentiveCoefSet =  {
    name: 'VtokenMinting.VtokenIncentiveCoefSet',
    v10000: new EventType(
        'VtokenMinting.VtokenIncentiveCoefSet',
        sts.struct({
            vtokenId: v10000.CurrencyId,
            coefficient: sts.option(() => sts.bigint()),
        })
    ),
}

export const vtokenIncentiveLockBlocksSet =  {
    name: 'VtokenMinting.VtokenIncentiveLockBlocksSet',
    v10000: new EventType(
        'VtokenMinting.VtokenIncentiveLockBlocksSet',
        sts.struct({
            vtokenId: v10000.CurrencyId,
            blocks: sts.option(() => sts.number()),
        })
    ),
}
