import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9230 from '../v9230'

export const auctionStarted =  {
    name: 'Auctions.AuctionStarted',
    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     * `[auction_index, lease_period, ending]`
     */
    v9110: new EventType(
        'Auctions.AuctionStarted',
        sts.tuple([sts.number(), sts.number(), sts.number()])
    ),
    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     */
    v9230: new EventType(
        'Auctions.AuctionStarted',
        sts.struct({
            auctionIndex: sts.number(),
            leasePeriod: sts.number(),
            ending: sts.number(),
        })
    ),
}

export const auctionClosed =  {
    name: 'Auctions.AuctionClosed',
    /**
     * An auction ended. All funds become unreserved. `[auction_index]`
     */
    v9110: new EventType(
        'Auctions.AuctionClosed',
        sts.number()
    ),
    /**
     * An auction ended. All funds become unreserved.
     */
    v9230: new EventType(
        'Auctions.AuctionClosed',
        sts.struct({
            auctionIndex: sts.number(),
        })
    ),
}

export const reserved =  {
    name: 'Auctions.Reserved',
    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total. `[bidder, extra_reserved, total_amount]`
     */
    v9110: new EventType(
        'Auctions.Reserved',
        sts.tuple([v9110.AccountId32, sts.bigint(), sts.bigint()])
    ),
    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total.
     */
    v9230: new EventType(
        'Auctions.Reserved',
        sts.struct({
            bidder: v9230.AccountId32,
            extraReserved: sts.bigint(),
            totalAmount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Auctions.Unreserved',
    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    v9110: new EventType(
        'Auctions.Unreserved',
        sts.tuple([v9110.AccountId32, sts.bigint()])
    ),
    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    v9230: new EventType(
        'Auctions.Unreserved',
        sts.struct({
            bidder: v9230.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveConfiscated =  {
    name: 'Auctions.ReserveConfiscated',
    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     * `[parachain_id, leaser, amount]`
     */
    v9110: new EventType(
        'Auctions.ReserveConfiscated',
        sts.tuple([v9110.Id, v9110.AccountId32, sts.bigint()])
    ),
    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     */
    v9230: new EventType(
        'Auctions.ReserveConfiscated',
        sts.struct({
            paraId: v9230.Id,
            leaser: v9230.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const bidAccepted =  {
    name: 'Auctions.BidAccepted',
    /**
     * A new bid has been accepted as the current winner.
     * `[who, para_id, amount, first_slot, last_slot]`
     */
    v9110: new EventType(
        'Auctions.BidAccepted',
        sts.tuple([v9110.AccountId32, v9110.Id, sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * A new bid has been accepted as the current winner.
     */
    v9230: new EventType(
        'Auctions.BidAccepted',
        sts.struct({
            bidder: v9230.AccountId32,
            paraId: v9230.Id,
            amount: sts.bigint(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        })
    ),
}

export const winningOffset =  {
    name: 'Auctions.WinningOffset',
    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     * `[auction_index, block_number]`
     */
    v9110: new EventType(
        'Auctions.WinningOffset',
        sts.tuple([sts.number(), sts.number()])
    ),
    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     */
    v9230: new EventType(
        'Auctions.WinningOffset',
        sts.struct({
            auctionIndex: sts.number(),
            blockNumber: sts.number(),
        })
    ),
}
