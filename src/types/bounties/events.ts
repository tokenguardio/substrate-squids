import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v28 from '../v28'
import * as v9140 from '../v9140'
import * as v1001002 from '../v1001002'

export const bountyProposed =  {
    name: 'Bounties.BountyProposed',
    /**
     *  New bounty proposal. \[index\]
     */
    v28: new EventType(
        'Bounties.BountyProposed',
        v28.BountyIndex
    ),
    /**
     * New bounty proposal.
     */
    v9140: new EventType(
        'Bounties.BountyProposed',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyRejected =  {
    name: 'Bounties.BountyRejected',
    /**
     *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
     */
    v28: new EventType(
        'Bounties.BountyRejected',
        sts.tuple([v28.BountyIndex, v28.Balance])
    ),
    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    v9140: new EventType(
        'Bounties.BountyRejected',
        sts.struct({
            index: sts.number(),
            bond: sts.bigint(),
        })
    ),
}

export const bountyBecameActive =  {
    name: 'Bounties.BountyBecameActive',
    /**
     *  A bounty proposal is funded and became active. \[index\]
     */
    v28: new EventType(
        'Bounties.BountyBecameActive',
        v28.BountyIndex
    ),
    /**
     * A bounty proposal is funded and became active.
     */
    v9140: new EventType(
        'Bounties.BountyBecameActive',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyAwarded =  {
    name: 'Bounties.BountyAwarded',
    /**
     *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
     */
    v28: new EventType(
        'Bounties.BountyAwarded',
        sts.tuple([v28.BountyIndex, v28.AccountId])
    ),
    /**
     * A bounty is awarded to a beneficiary.
     */
    v9140: new EventType(
        'Bounties.BountyAwarded',
        sts.struct({
            index: sts.number(),
            beneficiary: v9140.AccountId32,
        })
    ),
}

export const bountyClaimed =  {
    name: 'Bounties.BountyClaimed',
    /**
     *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
     */
    v28: new EventType(
        'Bounties.BountyClaimed',
        sts.tuple([v28.BountyIndex, v28.Balance, v28.AccountId])
    ),
    /**
     * A bounty is claimed by beneficiary.
     */
    v9140: new EventType(
        'Bounties.BountyClaimed',
        sts.struct({
            index: sts.number(),
            payout: sts.bigint(),
            beneficiary: v9140.AccountId32,
        })
    ),
}

export const bountyCanceled =  {
    name: 'Bounties.BountyCanceled',
    /**
     *  A bounty is cancelled. \[index\]
     */
    v28: new EventType(
        'Bounties.BountyCanceled',
        v28.BountyIndex
    ),
    /**
     * A bounty is cancelled.
     */
    v9140: new EventType(
        'Bounties.BountyCanceled',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyExtended =  {
    name: 'Bounties.BountyExtended',
    /**
     *  A bounty expiry is extended. \[index\]
     */
    v28: new EventType(
        'Bounties.BountyExtended',
        v28.BountyIndex
    ),
    /**
     * A bounty expiry is extended.
     */
    v9140: new EventType(
        'Bounties.BountyExtended',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyApproved =  {
    name: 'Bounties.BountyApproved',
    /**
     * A bounty is approved.
     */
    v1001002: new EventType(
        'Bounties.BountyApproved',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const curatorProposed =  {
    name: 'Bounties.CuratorProposed',
    /**
     * A bounty curator is proposed.
     */
    v1001002: new EventType(
        'Bounties.CuratorProposed',
        sts.struct({
            bountyId: sts.number(),
            curator: v1001002.AccountId32,
        })
    ),
}

export const curatorUnassigned =  {
    name: 'Bounties.CuratorUnassigned',
    /**
     * A bounty curator is unassigned.
     */
    v1001002: new EventType(
        'Bounties.CuratorUnassigned',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const curatorAccepted =  {
    name: 'Bounties.CuratorAccepted',
    /**
     * A bounty curator is accepted.
     */
    v1001002: new EventType(
        'Bounties.CuratorAccepted',
        sts.struct({
            bountyId: sts.number(),
            curator: v1001002.AccountId32,
        })
    ),
}
