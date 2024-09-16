import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v956 from '../v956'
import * as v964 from '../v964'
import * as v972 from '../v972'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const created =  {
    name: 'Salp.Created',
    /**
     * Create a new crowdloaning campaign. [fund_index]
     */
    v956: new EventType(
        'Salp.Created',
        sts.number()
    ),
}

export const contributing =  {
    name: 'Salp.Contributing',
    /**
     * Contributing to a crowd sale. [who, fund_index, amount]
     */
    v956: new EventType(
        'Salp.Contributing',
        sts.tuple([v956.AccountId32, sts.number(), sts.bigint(), sts.bytes()])
    ),
}

export const contributed =  {
    name: 'Salp.Contributed',
    /**
     * Contributed to a crowd sale. [who, fund_index, amount]
     */
    v956: new EventType(
        'Salp.Contributed',
        sts.tuple([v956.AccountId32, sts.number(), sts.bigint(), sts.bytes()])
    ),
    /**
     * Contributed to a crowd sale. [who, fund_index, amount]
     */
    v972: new EventType(
        'Salp.Contributed',
        sts.tuple([v972.AccountId32, sts.number(), sts.bigint()])
    ),
}

export const contributeFailed =  {
    name: 'Salp.ContributeFailed',
    /**
     * Fail on contribute to crowd sale. [who, fund_index, amount]
     */
    v956: new EventType(
        'Salp.ContributeFailed',
        sts.tuple([v956.AccountId32, sts.number(), sts.bigint(), sts.bytes()])
    ),
    /**
     * Fail on contribute to crowd sale. [who, fund_index, amount]
     */
    v972: new EventType(
        'Salp.ContributeFailed',
        sts.tuple([v972.AccountId32, sts.number(), sts.bigint()])
    ),
}

export const withdrew =  {
    name: 'Salp.Withdrew',
    /**
     * Withdrew full balance of a contributor. [who, fund_index, amount]
     */
    v956: new EventType(
        'Salp.Withdrew',
        sts.tuple([sts.number(), sts.bigint()])
    ),
}

export const refunded =  {
    name: 'Salp.Refunded',
    /**
     * refund to account. [who, fund_index,value]
     */
    v956: new EventType(
        'Salp.Refunded',
        sts.tuple([v956.AccountId32, sts.number(), sts.number(), sts.number(), sts.bigint()])
    ),
}

export const allRefunded =  {
    name: 'Salp.AllRefunded',
    /**
     * all refund
     */
    v956: new EventType(
        'Salp.AllRefunded',
        sts.number()
    ),
}

export const redeemed =  {
    name: 'Salp.Redeemed',
    /**
     * redeem to account. [who, fund_index, first_slot, last_slot, value]
     */
    v956: new EventType(
        'Salp.Redeemed',
        sts.tuple([v956.AccountId32, sts.number(), sts.number(), sts.number(), sts.bigint()])
    ),
}

export const edited =  {
    name: 'Salp.Edited',
    /**
     * Fund is edited. [fund_index]
     */
    v956: new EventType(
        'Salp.Edited',
        sts.number()
    ),
}

export const dissolved =  {
    name: 'Salp.Dissolved',
    /**
     * Fund is dissolved. [fund_index]
     */
    v956: new EventType(
        'Salp.Dissolved',
        sts.number()
    ),
}

export const unlocked =  {
    name: 'Salp.Unlocked',
    /**
     * The vsToken/vsBond was be unlocked. [who, fund_index, value]
     */
    v956: new EventType(
        'Salp.Unlocked',
        sts.tuple([v956.AccountId32, sts.number(), sts.bigint()])
    ),
}

export const allUnlocked =  {
    name: 'Salp.AllUnlocked',
    v956: new EventType(
        'Salp.AllUnlocked',
        sts.number()
    ),
}

export const failed =  {
    name: 'Salp.Failed',
    /**
     * Fund status change
     */
    v956: new EventType(
        'Salp.Failed',
        sts.number()
    ),
}

export const success =  {
    name: 'Salp.Success',
    v956: new EventType(
        'Salp.Success',
        sts.number()
    ),
}

export const retired =  {
    name: 'Salp.Retired',
    v956: new EventType(
        'Salp.Retired',
        sts.number()
    ),
}

export const end =  {
    name: 'Salp.End',
    v956: new EventType(
        'Salp.End',
        sts.number()
    ),
}

export const continued =  {
    name: 'Salp.Continued',
    v956: new EventType(
        'Salp.Continued',
        sts.tuple([sts.number(), sts.number(), sts.number()])
    ),
}

export const refundedDissolved =  {
    name: 'Salp.RefundedDissolved',
    v956: new EventType(
        'Salp.RefundedDissolved',
        sts.tuple([sts.number(), sts.number(), sts.number()])
    ),
}

export const buyback =  {
    name: 'Salp.Buyback',
    v956: new EventType(
        'Salp.Buyback',
        sts.bigint()
    ),
}

export const vstokenUnlocked =  {
    name: 'Salp.VstokenUnlocked',
    v964: new EventType(
        'Salp.VstokenUnlocked',
        v964.AccountId32
    ),
}

export const buybackByStablePool =  {
    name: 'Salp.BuybackByStablePool',
    v980: new EventType(
        'Salp.BuybackByStablePool',
        sts.struct({
            poolId: sts.number(),
            currencyIdIn: v980.CurrencyId,
            value: sts.bigint(),
        })
    ),
    v990: new EventType(
        'Salp.BuybackByStablePool',
        sts.struct({
            poolId: sts.number(),
            currencyIdIn: v990.CurrencyId,
            value: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'Salp.Reserved',
    v990: new EventType(
        'Salp.Reserved',
        sts.struct({
            who: v990.AccountId32,
            paraId: sts.number(),
            value: sts.bigint(),
            ifMint: sts.boolean(),
        })
    ),
}

export const reservationCancelled =  {
    name: 'Salp.ReservationCancelled',
    v990: new EventType(
        'Salp.ReservationCancelled',
        sts.struct({
            who: v990.AccountId32,
            paraId: sts.number(),
        })
    ),
}

export const reservationFullyHandled =  {
    name: 'Salp.ReservationFullyHandled',
    v990: new EventType(
        'Salp.ReservationFullyHandled',
        sts.struct({
            paraId: sts.number(),
        })
    ),
}

export const reservationHandled =  {
    name: 'Salp.ReservationHandled',
    v990: new EventType(
        'Salp.ReservationHandled',
        sts.struct({
            paraId: sts.number(),
        })
    ),
}
