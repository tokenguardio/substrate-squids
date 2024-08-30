import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v994 from '../v994'

export const bountyProposed =  {
    name: 'Bounties.BountyProposed',
    /**
     * New bounty proposal.
     */
    v932: new EventType(
        'Bounties.BountyProposed',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyRejected =  {
    name: 'Bounties.BountyRejected',
    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    v932: new EventType(
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
     * A bounty proposal is funded and became active.
     */
    v932: new EventType(
        'Bounties.BountyBecameActive',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyAwarded =  {
    name: 'Bounties.BountyAwarded',
    /**
     * A bounty is awarded to a beneficiary.
     */
    v932: new EventType(
        'Bounties.BountyAwarded',
        sts.struct({
            index: sts.number(),
            beneficiary: v932.AccountId32,
        })
    ),
}

export const bountyClaimed =  {
    name: 'Bounties.BountyClaimed',
    /**
     * A bounty is claimed by beneficiary.
     */
    v932: new EventType(
        'Bounties.BountyClaimed',
        sts.struct({
            index: sts.number(),
            payout: sts.bigint(),
            beneficiary: v932.AccountId32,
        })
    ),
}

export const bountyCanceled =  {
    name: 'Bounties.BountyCanceled',
    /**
     * A bounty is cancelled.
     */
    v932: new EventType(
        'Bounties.BountyCanceled',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyExtended =  {
    name: 'Bounties.BountyExtended',
    /**
     * A bounty expiry is extended.
     */
    v932: new EventType(
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
    v994: new EventType(
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
    v994: new EventType(
        'Bounties.CuratorProposed',
        sts.struct({
            bountyId: sts.number(),
            curator: v994.AccountId32,
        })
    ),
}

export const curatorUnassigned =  {
    name: 'Bounties.CuratorUnassigned',
    /**
     * A bounty curator is unassigned.
     */
    v994: new EventType(
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
    v994: new EventType(
        'Bounties.CuratorAccepted',
        sts.struct({
            bountyId: sts.number(),
            curator: v994.AccountId32,
        })
    ),
}
