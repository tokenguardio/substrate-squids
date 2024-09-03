import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'
import * as v9230 from '../v9230'

export const newLeasePeriod =  {
    name: 'Slots.NewLeasePeriod',
    /**
     *  A new lease period is beginning.
     */
    v0: new EventType(
        'Slots.NewLeasePeriod',
        v0.LeasePeriod
    ),
    /**
     * A new `[lease_period]` is beginning.
     */
    v9230: new EventType(
        'Slots.NewLeasePeriod',
        sts.struct({
            leasePeriod: sts.number(),
        })
    ),
}

export const auctionStarted =  {
    name: 'Slots.AuctionStarted',
    /**
     *  An auction started. Provides its index and the block number where it will begin to
     *  close and the first lease period of the quadruplet that is auctioned.
     */
    v0: new EventType(
        'Slots.AuctionStarted',
        sts.tuple([v0.AuctionIndex, v0.LeasePeriod, v0.BlockNumber])
    ),
}

export const auctionClosed =  {
    name: 'Slots.AuctionClosed',
    /**
     *  An auction ended. All funds become unreserved.
     */
    v0: new EventType(
        'Slots.AuctionClosed',
        v0.AuctionIndex
    ),
}

export const wonDeploy =  {
    name: 'Slots.WonDeploy',
    /**
     *  Someone won the right to deploy a parachain. Balance amount is deducted for deposit.
     */
    v0: new EventType(
        'Slots.WonDeploy',
        sts.tuple([v0.NewBidder, v0.SlotRange, v0.ParaId, v0.Balance])
    ),
}

export const wonRenewal =  {
    name: 'Slots.WonRenewal',
    /**
     *  An existing parachain won the right to continue.
     *  First balance is the extra amount reseved. Second is the total amount reserved.
     */
    v0: new EventType(
        'Slots.WonRenewal',
        sts.tuple([v0.ParaId, v0.SlotRange, v0.Balance, v0.Balance])
    ),
}

export const reserved =  {
    name: 'Slots.Reserved',
    /**
     *  Funds were reserved for a winning bid. First balance is the extra amount reserved.
     *  Second is the total.
     */
    v0: new EventType(
        'Slots.Reserved',
        sts.tuple([v0.AccountId, v0.Balance, v0.Balance])
    ),
}

export const unreserved =  {
    name: 'Slots.Unreserved',
    /**
     *  Funds were unreserved since bidder is no longer active.
     */
    v0: new EventType(
        'Slots.Unreserved',
        sts.tuple([v0.AccountId, v0.Balance])
    ),
}

export const leased =  {
    name: 'Slots.Leased',
    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     * `[parachain_id, leaser, period_begin, period_count, extra_reserved, total_amount]`
     */
    v9110: new EventType(
        'Slots.Leased',
        sts.tuple([v9110.Id, v9110.AccountId32, sts.number(), sts.number(), sts.bigint(), sts.bigint()])
    ),
    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     */
    v9230: new EventType(
        'Slots.Leased',
        sts.struct({
            paraId: v9230.Id,
            leaser: v9230.AccountId32,
            periodBegin: sts.number(),
            periodCount: sts.number(),
            extraReserved: sts.bigint(),
            totalAmount: sts.bigint(),
        })
    ),
}
