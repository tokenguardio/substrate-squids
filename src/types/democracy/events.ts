import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v25 from '../v25'
import * as v9090 from '../v9090'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9420 from '../v9420'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     *  A motion has been proposed by a public account.
     */
    v0: new EventType(
        'Democracy.Proposed',
        sts.tuple([v0.PropIndex, v0.Balance])
    ),
    /**
     * A motion has been proposed by a public account.
     */
    v9140: new EventType(
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
     *  A public proposal has been tabled for referendum vote.
     */
    v0: new EventType(
        'Democracy.Tabled',
        sts.tuple([v0.PropIndex, v0.Balance, sts.array(() => v0.AccountId)])
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v9140: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v9140.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v9340: new EventType(
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
     *  An external proposal has been tabled.
     */
    v0: new EventType(
        'Democracy.ExternalTabled',
        sts.unit()
    ),
}

export const started =  {
    name: 'Democracy.Started',
    /**
     *  A referendum has begun.
     */
    v0: new EventType(
        'Democracy.Started',
        sts.tuple([v0.ReferendumIndex, v0.VoteThreshold])
    ),
    /**
     * A referendum has begun.
     */
    v9140: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v9140.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     *  A proposal has been approved by referendum.
     */
    v0: new EventType(
        'Democracy.Passed',
        v0.ReferendumIndex
    ),
    /**
     * A proposal has been approved by referendum.
     */
    v9140: new EventType(
        'Democracy.Passed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const notPassed =  {
    name: 'Democracy.NotPassed',
    /**
     *  A proposal has been rejected by referendum.
     */
    v0: new EventType(
        'Democracy.NotPassed',
        v0.ReferendumIndex
    ),
    /**
     * A proposal has been rejected by referendum.
     */
    v9140: new EventType(
        'Democracy.NotPassed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelled =  {
    name: 'Democracy.Cancelled',
    /**
     *  A referendum has been cancelled.
     */
    v0: new EventType(
        'Democracy.Cancelled',
        v0.ReferendumIndex
    ),
    /**
     * A referendum has been cancelled.
     */
    v9140: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const executed =  {
    name: 'Democracy.Executed',
    /**
     *  A proposal has been enacted.
     */
    v0: new EventType(
        'Democracy.Executed',
        sts.tuple([v0.ReferendumIndex, sts.boolean()])
    ),
    /**
     *  A proposal has been enacted. \[ref_index, result\]
     */
    v9090: new EventType(
        'Democracy.Executed',
        sts.tuple([v9090.ReferendumIndex, v9090.DispatchResult])
    ),
    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    v9110: new EventType(
        'Democracy.Executed',
        sts.tuple([sts.number(), sts.result(() => sts.unit(), () => v9110.DispatchError)])
    ),
    /**
     * A proposal has been enacted.
     */
    v9140: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v9140.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v9170: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v9190: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
}

export const delegated =  {
    name: 'Democracy.Delegated',
    /**
     *  An account has delegated their vote to another account.
     */
    v0: new EventType(
        'Democracy.Delegated',
        sts.tuple([v0.AccountId, v0.AccountId])
    ),
    /**
     * An account has delegated their vote to another account.
     */
    v9140: new EventType(
        'Democracy.Delegated',
        sts.struct({
            who: v9140.AccountId32,
            target: v9140.AccountId32,
        })
    ),
}

export const undelegated =  {
    name: 'Democracy.Undelegated',
    /**
     *  An account has cancelled a previous delegation operation.
     */
    v0: new EventType(
        'Democracy.Undelegated',
        v0.AccountId
    ),
    /**
     * An account has cancelled a previous delegation operation.
     */
    v9140: new EventType(
        'Democracy.Undelegated',
        sts.struct({
            account: v9140.AccountId32,
        })
    ),
}

export const vetoed =  {
    name: 'Democracy.Vetoed',
    /**
     *  An external proposal has been vetoed.
     */
    v0: new EventType(
        'Democracy.Vetoed',
        sts.tuple([v0.AccountId, v0.Hash, v0.BlockNumber])
    ),
    /**
     * An external proposal has been vetoed.
     */
    v9140: new EventType(
        'Democracy.Vetoed',
        sts.struct({
            who: v9140.AccountId32,
            proposalHash: v9140.H256,
            until: sts.number(),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     *  A proposal's preimage was noted, and the deposit taken.
     */
    v0: new EventType(
        'Democracy.PreimageNoted',
        sts.tuple([v0.Hash, v0.AccountId, v0.Balance])
    ),
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v9140: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v9140.H256,
            who: v9140.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageUsed =  {
    name: 'Democracy.PreimageUsed',
    /**
     *  A proposal preimage was removed and used (the deposit was returned).
     */
    v0: new EventType(
        'Democracy.PreimageUsed',
        sts.tuple([v0.Hash, v0.AccountId, v0.Balance])
    ),
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v9140: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v9140.H256,
            provider: v9140.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageInvalid =  {
    name: 'Democracy.PreimageInvalid',
    /**
     *  A proposal could not be executed because its preimage was invalid.
     */
    v0: new EventType(
        'Democracy.PreimageInvalid',
        sts.tuple([v0.Hash, v0.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v9140: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v9140.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageMissing =  {
    name: 'Democracy.PreimageMissing',
    /**
     *  A proposal could not be executed because its preimage was missing.
     */
    v0: new EventType(
        'Democracy.PreimageMissing',
        sts.tuple([v0.Hash, v0.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v9140: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v9140.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageReaped =  {
    name: 'Democracy.PreimageReaped',
    /**
     *  A registered preimage was removed and the deposit collected by the reaper (last item).
     */
    v0: new EventType(
        'Democracy.PreimageReaped',
        sts.tuple([v0.Hash, v0.AccountId, v0.Balance, v0.AccountId])
    ),
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v9140: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v9140.H256,
            provider: v9140.AccountId32,
            deposit: sts.bigint(),
            reaper: v9140.AccountId32,
        })
    ),
}

export const unlocked =  {
    name: 'Democracy.Unlocked',
    /**
     *  An account has been unlocked successfully.
     */
    v0: new EventType(
        'Democracy.Unlocked',
        v0.AccountId
    ),
}

export const blacklisted =  {
    name: 'Democracy.Blacklisted',
    /**
     *  A proposal \[hash\] has been blacklisted permanently.
     */
    v25: new EventType(
        'Democracy.Blacklisted',
        v25.Hash
    ),
    /**
     * A proposal_hash has been blacklisted permanently.
     */
    v9140: new EventType(
        'Democracy.Blacklisted',
        sts.struct({
            proposalHash: v9140.H256,
        })
    ),
}

export const voted =  {
    name: 'Democracy.Voted',
    /**
     * An account has voted in a referendum
     */
    v9170: new EventType(
        'Democracy.Voted',
        sts.struct({
            voter: v9170.AccountId32,
            refIndex: sts.number(),
            vote: v9170.AccountVote,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v9170: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v9170.AccountId32,
            propIndex: sts.number(),
        })
    ),
}

export const proposalCanceled =  {
    name: 'Democracy.ProposalCanceled',
    /**
     * A proposal got canceled.
     */
    v9250: new EventType(
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
    v9420: new EventType(
        'Democracy.MetadataSet',
        sts.struct({
            /**
             * Metadata owner.
             */
            owner: v9420.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: v9420.H256,
        })
    ),
}

export const metadataCleared =  {
    name: 'Democracy.MetadataCleared',
    /**
     * Metadata for a proposal or a referendum has been cleared.
     */
    v9420: new EventType(
        'Democracy.MetadataCleared',
        sts.struct({
            /**
             * Metadata owner.
             */
            owner: v9420.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: v9420.H256,
        })
    ),
}

export const metadataTransferred =  {
    name: 'Democracy.MetadataTransferred',
    /**
     * Metadata has been transferred to new owner.
     */
    v9420: new EventType(
        'Democracy.MetadataTransferred',
        sts.struct({
            /**
             * Previous metadata owner.
             */
            prevOwner: v9420.MetadataOwner,
            /**
             * New metadata owner.
             */
            owner: v9420.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: v9420.H256,
        })
    ),
}
