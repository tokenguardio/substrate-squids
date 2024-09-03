import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v115 from '../v115'
import * as v205 from '../v205'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     * A motion has been proposed by a public account.
     */
    v108: new EventType(
        'Democracy.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const tabled =  {
    name: 'Democracy.Tabled',
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v108: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v108.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v160: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const externalTabled =  {
    name: 'Democracy.ExternalTabled',
    /**
     * An external proposal has been tabled.
     */
    v108: new EventType(
        'Democracy.ExternalTabled',
        sts.unit()
    ),
}

export const started =  {
    name: 'Democracy.Started',
    /**
     * A referendum has begun.
     */
    v108: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v108.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     * A proposal has been approved by referendum.
     */
    v108: new EventType(
        'Democracy.Passed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const notPassed =  {
    name: 'Democracy.NotPassed',
    /**
     * A proposal has been rejected by referendum.
     */
    v108: new EventType(
        'Democracy.NotPassed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelled =  {
    name: 'Democracy.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    v108: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const executed =  {
    name: 'Democracy.Executed',
    /**
     * A proposal has been enacted.
     */
    v108: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v108.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v115: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v115.DispatchError),
        })
    ),
}

export const delegated =  {
    name: 'Democracy.Delegated',
    /**
     * An account has delegated their vote to another account.
     */
    v108: new EventType(
        'Democracy.Delegated',
        sts.struct({
            who: v108.AccountId32,
            target: v108.AccountId32,
        })
    ),
}

export const undelegated =  {
    name: 'Democracy.Undelegated',
    /**
     * An account has cancelled a previous delegation operation.
     */
    v108: new EventType(
        'Democracy.Undelegated',
        sts.struct({
            account: v108.AccountId32,
        })
    ),
}

export const vetoed =  {
    name: 'Democracy.Vetoed',
    /**
     * An external proposal has been vetoed.
     */
    v108: new EventType(
        'Democracy.Vetoed',
        sts.struct({
            who: v108.AccountId32,
            proposalHash: v108.H256,
            until: sts.number(),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v108: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v108.H256,
            who: v108.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageUsed =  {
    name: 'Democracy.PreimageUsed',
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v108: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v108.H256,
            provider: v108.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageInvalid =  {
    name: 'Democracy.PreimageInvalid',
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v108: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v108.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageMissing =  {
    name: 'Democracy.PreimageMissing',
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v108: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v108.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageReaped =  {
    name: 'Democracy.PreimageReaped',
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v108: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v108.H256,
            provider: v108.AccountId32,
            deposit: sts.bigint(),
            reaper: v108.AccountId32,
        })
    ),
}

export const blacklisted =  {
    name: 'Democracy.Blacklisted',
    /**
     * A proposal_hash has been blacklisted permanently.
     */
    v108: new EventType(
        'Democracy.Blacklisted',
        sts.struct({
            proposalHash: v108.H256,
        })
    ),
}

export const voted =  {
    name: 'Democracy.Voted',
    /**
     * An account has voted in a referendum
     */
    v108: new EventType(
        'Democracy.Voted',
        sts.struct({
            voter: v108.AccountId32,
            refIndex: sts.number(),
            vote: v108.AccountVote,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v108: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v108.AccountId32,
            propIndex: sts.number(),
        })
    ),
}

export const proposalCanceled =  {
    name: 'Democracy.ProposalCanceled',
    /**
     * A proposal got canceled.
     */
    v115: new EventType(
        'Democracy.ProposalCanceled',
        sts.struct({
            propIndex: sts.number(),
        })
    ),
}

export const metadataSet =  {
    name: 'Democracy.MetadataSet',
    /**
     * Metadata for a proposal or a referendum has been set.
     */
    v205: new EventType(
        'Democracy.MetadataSet',
        sts.struct({
            /**
             * Metadata owner.
             */
            owner: v205.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: v205.H256,
        })
    ),
}

export const metadataCleared =  {
    name: 'Democracy.MetadataCleared',
    /**
     * Metadata for a proposal or a referendum has been cleared.
     */
    v205: new EventType(
        'Democracy.MetadataCleared',
        sts.struct({
            /**
             * Metadata owner.
             */
            owner: v205.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: v205.H256,
        })
    ),
}

export const metadataTransferred =  {
    name: 'Democracy.MetadataTransferred',
    /**
     * Metadata has been transferred to new owner.
     */
    v205: new EventType(
        'Democracy.MetadataTransferred',
        sts.struct({
            /**
             * Previous metadata owner.
             */
            prevOwner: v205.MetadataOwner,
            /**
             * New metadata owner.
             */
            owner: v205.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: v205.H256,
        })
    ),
}
