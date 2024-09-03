import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v9110 from '../v9110'

export const newAuction =  {
    name: 'Slots.new_auction',
    /**
     *  Create a new auction.
     * 
     *  This can only happen when there isn't already an auction in progress and may only be
     *  called by the root origin. Accepts the `duration` of this auction and the
     *  `lease_period_index` of the initial lease period of the four that are to be auctioned.
     */
    v0: new CallType(
        'Slots.new_auction',
        sts.struct({
            duration: sts.number(),
            leasePeriodIndex: sts.number(),
        })
    ),
}

export const bid =  {
    name: 'Slots.bid',
    /**
     *  Make a new bid from an account (including a parachain account) for deploying a new
     *  parachain.
     * 
     *  Multiple simultaneous bids from the same bidder are allowed only as long as all active
     *  bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
     * 
     *  - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
     *  funded by) the same account.
     *  - `auction_index` is the index of the auction to bid on. Should just be the present
     *  value of `AuctionCounter`.
     *  - `first_slot` is the first lease period index of the range to bid on. This is the
     *  absolute lease period index value, not an auction-specific offset.
     *  - `last_slot` is the last lease period index of the range to bid on. This is the
     *  absolute lease period index value, not an auction-specific offset.
     *  - `amount` is the amount to bid to be held as deposit for the parachain should the
     *  bid win. This amount is held throughout the range.
     */
    v0: new CallType(
        'Slots.bid',
        sts.struct({
            sub: sts.number(),
            auctionIndex: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const bidRenew =  {
    name: 'Slots.bid_renew',
    /**
     *  Make a new bid from a parachain account for renewing that (pre-existing) parachain.
     * 
     *  The origin *must* be a parachain account.
     * 
     *  Multiple simultaneous bids from the same bidder are allowed only as long as all active
     *  bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
     * 
     *  - `auction_index` is the index of the auction to bid on. Should just be the present
     *  value of `AuctionCounter`.
     *  - `first_slot` is the first lease period index of the range to bid on. This is the
     *  absolute lease period index value, not an auction-specific offset.
     *  - `last_slot` is the last lease period index of the range to bid on. This is the
     *  absolute lease period index value, not an auction-specific offset.
     *  - `amount` is the amount to bid to be held as deposit for the parachain should the
     *  bid win. This amount is held throughout the range.
     */
    v0: new CallType(
        'Slots.bid_renew',
        sts.struct({
            auctionIndex: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const setOffboarding =  {
    name: 'Slots.set_offboarding',
    /**
     *  Set the off-boarding information for a parachain.
     * 
     *  The origin *must* be a parachain account.
     * 
     *  - `dest` is the destination account to receive the parachain's deposit.
     */
    v0: new CallType(
        'Slots.set_offboarding',
        sts.struct({
            dest: v0.LookupSource,
        })
    ),
}

export const fixDeployData =  {
    name: 'Slots.fix_deploy_data',
    /**
     *  Set the deploy information for a successful bid to deploy a new parachain.
     * 
     *  - `origin` must be the successful bidder account.
     *  - `sub` is the sub-bidder ID of the bidder.
     *  - `para_id` is the parachain ID allotted to the winning bidder.
     *  - `code_hash` is the hash of the parachain's Wasm validation function.
     *  - `initial_head_data` is the parachain's initial head data.
     */
    v0: new CallType(
        'Slots.fix_deploy_data',
        sts.struct({
            sub: sts.number(),
            paraId: sts.number(),
            codeHash: v0.Hash,
            codeSize: sts.number(),
            initialHeadData: v0.HeadData,
        })
    ),
}

export const elaborateDeployData =  {
    name: 'Slots.elaborate_deploy_data',
    /**
     *  Note a new parachain's code.
     * 
     *  This must be called after `fix_deploy_data` and `code` must be the preimage of the
     *  `code_hash` passed there for the same `para_id`.
     * 
     *  This may be called before or after the beginning of the parachain's first lease period.
     *  If called before then the parachain will become active at the first block of its
     *  starting lease period. If after, then it will become active immediately after this call.
     * 
     *  - `_origin` is irrelevant.
     *  - `para_id` is the parachain ID whose code will be elaborated.
     *  - `code` is the preimage of the registered `code_hash` of `para_id`.
     */
    v0: new CallType(
        'Slots.elaborate_deploy_data',
        sts.struct({
            paraId: sts.number(),
            code: v0.ValidationCode,
        })
    ),
}

export const forceLease =  {
    name: 'Slots.force_lease',
    /**
     * Just a connect into the `lease_out` call, in case Root wants to force some lease to happen
     * independently of any other on-chain mechanism to use it.
     * 
     * Can only be called by the Root origin.
     */
    v9110: new CallType(
        'Slots.force_lease',
        sts.struct({
            para: v9110.Id,
            leaser: v9110.AccountId32,
            amount: sts.bigint(),
            periodBegin: sts.number(),
            periodCount: sts.number(),
        })
    ),
}

export const clearAllLeases =  {
    name: 'Slots.clear_all_leases',
    /**
     * Clear all leases for a Para Id, refunding any deposits back to the original owners.
     * 
     * Can only be called by the Root origin.
     */
    v9110: new CallType(
        'Slots.clear_all_leases',
        sts.struct({
            para: v9110.Id,
        })
    ),
}

export const triggerOnboard =  {
    name: 'Slots.trigger_onboard',
    /**
     * Try to onboard a parachain that has a lease for the current lease period.
     * 
     * This function can be useful if there was some state issue with a para that should
     * have onboarded, but was unable to. As long as they have a lease period, we can
     * let them onboard from here.
     * 
     * Origin must be signed, but can be called by anyone.
     */
    v9110: new CallType(
        'Slots.trigger_onboard',
        sts.struct({
            para: v9110.Id,
        })
    ),
}
