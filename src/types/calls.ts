import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v23 from './v23'
import * as v26 from './v26'
import * as v29 from './v29'
import * as v32 from './v32'
import * as v33 from './v33'
import * as v34 from './v34'
import * as v35 from './v35'
import * as v36 from './v36'
import * as v37 from './v37'
import * as v38 from './v38'
import * as v39 from './v39'
import * as v40 from './v40'
import * as v41 from './v41'
import * as v42 from './v42'

export class AdvisoryCommitteeCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommittee.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV34(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.close') === '683905378cce329de8c5e9460bd36984188fb48a39207d985ea43cb10bd1eb81'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV42(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommittee.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommittee.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.execute') === '6ff23eab00632766392b4b8262e51a31844669d260d22cda13ee45dafb0566ad'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV34(): {proposal: v34.Call, lengthBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.execute') === 'b2633ad810ff52c8e989963d0fa19ada0a4b0f698c874322f9307b6387a78d42'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV35(): {proposal: v35.Call, lengthBound: number} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.execute') === 'de3ad467b30feef330da37843b5f426b4e2082a2e45f48e5196a2c4955c4bc37'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV36(): {proposal: v36.Call, lengthBound: number} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.execute') === '1e1e8a53cdab9c57c687e1e5df843c739cab83600e5b8f9bbed6aa1afe79059b'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV37(): {proposal: v37.Call, lengthBound: number} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.execute') === 'd5d7d31b729a9484e73f79ebc8a78b8e8067647dd33b187b6334a2066202f472'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV38(): {proposal: v38.Call, lengthBound: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.execute') === '8e198ab52372719645a9696ed62b6d3f0d349b01769bf7da14d7e34fdf405dfc'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV39(): {proposal: v39.Call, lengthBound: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.execute') === '89702fb019ae01e542fb500c33cc25ff61008fb5d41f252e0f92d57c5e312408'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV40(): {proposal: v40.Call, lengthBound: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.execute') === 'bc8525c6c29f024196acd31afc8b8218c7355404d9ea051fd676ff5cfaed9551'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV41(): {proposal: v41.Call, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.execute') === '3fd288b19296d39a9c9eee127d1b1f65faa32fbdff18151e5281307d0a3e1603'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV42(): {proposal: v42.Call, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommittee.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.propose') === '47ea3c86a1cef0a1d4e3a62a42abeff3c3d9d1532b2b93fffe7953cdc00724dd'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV34(): {threshold: number, proposal: v34.Call, lengthBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.propose') === '7d9f1ec6320de27036fd6b507e2be9b6f8c3dd269e4e381b38073d10c6464174'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV35(): {threshold: number, proposal: v35.Call, lengthBound: number} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.propose') === 'a8e0bd38f12545c2bbf575a773e3001649ee981c365ee9ea4272ac6e61f22619'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV36(): {threshold: number, proposal: v36.Call, lengthBound: number} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.propose') === 'db9f7c9f448c6737e39ba1b893dc6c9c4351927598712269af85d2c0176a1882'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV37(): {threshold: number, proposal: v37.Call, lengthBound: number} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.propose') === '574929be7916f482e912476e7de16996d97586bbfab0aee4e13bc27aa6966b66'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV38(): {threshold: number, proposal: v38.Call, lengthBound: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.propose') === '4ee2bb4f89c4f92dfaeede6621e4e39eb55bf1fca0c6c46c794785e7ca2c901b'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV39(): {threshold: number, proposal: v39.Call, lengthBound: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.propose') === '8edb02a79fa911fad5166e99838504bde93beba728e23a5cc1040a49b7503bf0'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV40(): {threshold: number, proposal: v40.Call, lengthBound: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.propose') === '203a28592cdc1c3a07428dad4b9861beb1c803aa8ad41f45e87959dde8ad7fce'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV41(): {threshold: number, proposal: v41.Call, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.propose') === '0126b24801cae5620c45bf5f6acd0597b38b18132530416abf51e3fe03852af8'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV42(): {threshold: number, proposal: v42.Call, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommittee.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get asV34(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommittee.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('AdvisoryCommittee.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get asV34(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeCollectiveCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeCollective.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     *  May be called by any signed account in order to finish voting and close the proposal.
     * 
     *  If called before the end of the voting period it will only close the vote if it is
     *  has enough votes to be approved or disapproved.
     * 
     *  If called after the end of the voting period abstentions are counted as rejections
     *  unless there is a prime member set and the prime member cast an approval.
     * 
     *  If the close operation completes successfully with disapproval, the transaction fee will
     *  be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
     *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1 + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - `P1` is the complexity of `proposal` preimage.
     *    - `P2` is proposal-count (code-bounded)
     *  - DB:
     *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
     *   - any mutations done while executing `proposal` (`P1`)
     *  - up to 3 events
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     *  Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     *  May be called by any signed account in order to finish voting and close the proposal.
     * 
     *  If called before the end of the voting period it will only close the vote if it is
     *  has enough votes to be approved or disapproved.
     * 
     *  If called after the end of the voting period abstentions are counted as rejections
     *  unless there is a prime member set and the prime member cast an approval.
     * 
     *  If the close operation completes successfully with disapproval, the transaction fee will
     *  be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
     *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1 + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - `P1` is the complexity of `proposal` preimage.
     *    - `P2` is proposal-count (code-bounded)
     *  - DB:
     *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
     *   - any mutations done while executing `proposal` (`P1`)
     *  - up to 3 events
     *  # </weight>
     */
    get asV23(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeCollectiveDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeCollective.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
     * 
     *  Must be called by the Root origin.
     * 
     *  Parameters:
     *  * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     *  # <weight>
     *  Complexity: O(P) where P is the number of max proposals
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
     * 
     *  Must be called by the Root origin.
     * 
     *  Parameters:
     *  * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     *  # <weight>
     *  Complexity: O(P) where P is the number of max proposals
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    get asV23(): {proposalHash: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeCollectiveExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeCollective.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.execute') === '77e3667435013010ba416abd1844b7535c6113b86c7a289335258adbb22009a5'
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    get asV23(): {proposal: v23.Proposal, lengthBound: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    get isV26(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.execute') === '7cedcef8b219e326cb50db3ceecba1a62787faf389044ef34f9e5551c276aa4c'
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    get asV26(): {proposal: v26.Proposal, lengthBound: number} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    get isV29(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.execute') === '3491ed5f56a057450ffdc0aa978b3b052fc18b07cc4c77b5d9647fc4fd6d2c88'
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
     *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     *  - 1 event
     *  # </weight>
     */
    get asV29(): {proposal: v29.Proposal, lengthBound: number} {
        assert(this.isV29)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.execute') === '343e54b1e7263bda262578327a915dcb24a1b8678357b7ff1e16c945564b7820'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV32(): {proposal: v32.Call, lengthBound: number} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV33(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.execute') === '721020df3e60e720f96e896ba09e9aec58198e26f2658adfd7a6a5c8d7ff414a'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV33(): {proposal: v33.Call, lengthBound: number} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeCollectiveProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeCollective.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.propose') === 'bd80e63bb0eb027e678b92b2d644c2a58136d931b2b8584b76a2f79d4654eca1'
    }

    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    get asV23(): {threshold: number, proposal: v23.Proposal, lengthBound: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    get isV26(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.propose') === '9ed6955e36f7eab17e20488444baf89a5e20a2c2e7014cce0b2f0635e5a1f0d3'
    }

    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    get asV26(): {threshold: number, proposal: v26.Proposal, lengthBound: number} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    get isV29(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.propose') === '3a37f4b79e093d00b9bbdffe0057fd67146a9efe7a18ddc6e1e4846706ab6389'
    }

    /**
     *  Add a new proposal to either be voted on or executed directly.
     * 
     *  Requires the sender to be member.
     * 
     *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     *  or put up for voting.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(B + M + P1)` or `O(B + M + P2)` where:
     *    - `B` is `proposal` size in bytes (length-fee-bounded)
     *    - `M` is members-count (code- and governance-bounded)
     *    - branching is influenced by `threshold` where:
     *      - `P1` is proposal execution complexity (`threshold < 2`)
     *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     *  - DB:
     *    - 1 storage read `is_member` (codec `O(M)`)
     *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *    - DB accesses influenced by `threshold`:
     *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *      - OR proposal insertion (`threshold <= 2`)
     *        - 1 storage mutation `Proposals` (codec `O(P2)`)
     *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *        - 1 storage write `ProposalOf` (codec `O(B)`)
     *        - 1 storage write `Voting` (codec `O(M)`)
     *    - 1 event
     *  # </weight>
     */
    get asV29(): {threshold: number, proposal: v29.Proposal, lengthBound: number} {
        assert(this.isV29)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.propose') === 'c6bd521004ab88cd1998acf4f4f633c081715bd9ed894c5fb2aee4cd5fa9ba6a'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV32(): {threshold: number, proposal: v32.Call, lengthBound: number} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV33(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.propose') === '9f5c18d82e4176802dcd044b1f504090214f88202d2ad90e930df182715852f9'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV33(): {threshold: number, proposal: v33.Call, lengthBound: number} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeCollectiveSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeCollective.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the collective's membership.
     * 
     *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     *  - `prime`: The prime member whose vote sets the default.
     *  - `old_count`: The upper bound for the previous number of members in storage.
     *                 Used for weight estimation.
     * 
     *  Requires root origin.
     * 
     *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *        the weight estimations rely on it to estimate dispatchable weight.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(MP + N)` where:
     *    - `M` old-members-count (code- and governance-bounded)
     *    - `N` new-members-count (code- and governance-bounded)
     *    - `P` proposals-count (code-bounded)
     *  - DB:
     *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
     *    - 1 storage read (codec `O(P)`) for reading the proposals
     *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     *  Set the collective's membership.
     * 
     *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     *  - `prime`: The prime member whose vote sets the default.
     *  - `old_count`: The upper bound for the previous number of members in storage.
     *                 Used for weight estimation.
     * 
     *  Requires root origin.
     * 
     *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *        the weight estimations rely on it to estimate dispatchable weight.
     * 
     *  # <weight>
     *  ## Weight
     *  - `O(MP + N)` where:
     *    - `M` old-members-count (code- and governance-bounded)
     *    - `N` new-members-count (code- and governance-bounded)
     *    - `P` proposals-count (code-bounded)
     *  - DB:
     *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
     *    - 1 storage read (codec `O(P)`) for reading the proposals
     *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     *  # </weight>
     */
    get asV23(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeCollectiveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeCollective.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add an aye or nay vote for the sender to the given proposal.
     * 
     *  Requires the sender to be a member.
     * 
     *  Transaction fees will be waived if the member is voting on any particular proposal
     *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
     *  # <weight>
     *  ## Weight
     *  - `O(M)` where `M` is members-count (code- and governance-bounded)
     *  - DB:
     *    - 1 storage read `Members` (codec `O(M)`)
     *    - 1 storage mutation `Voting` (codec `O(M)`)
     *  - 1 event
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeCollective.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     *  Add an aye or nay vote for the sender to the given proposal.
     * 
     *  Requires the sender to be a member.
     * 
     *  Transaction fees will be waived if the member is voting on any particular proposal
     *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
     *  # <weight>
     *  ## Weight
     *  - `O(M)` where `M` is members-count (code- and governance-bounded)
     *  - DB:
     *    - 1 storage read `Members` (codec `O(M)`)
     *    - 1 storage mutation `Voting` (codec `O(M)`)
     *  - 1 event
     *  # </weight>
     */
    get asV23(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeMembershipAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeMembership.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a member `who` to the set.
     * 
     *  May only be called from `T::AddOrigin`.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     *  Add a member `who` to the set.
     * 
     *  May only be called from `T::AddOrigin`.
     */
    get asV23(): {who: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.add_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV42(): {who: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeMembershipChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeMembership.change_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Swap out the sending member for some other key `new`.
     * 
     *  May only be called from `Signed` origin of a current member.
     * 
     *  Prime membership is passed from the origin account to `new`, if extant.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     *  Swap out the sending member for some other key `new`.
     * 
     *  May only be called from `Signed` origin of a current member.
     * 
     *  Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV23(): {new: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.change_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV42(): {new: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeMembershipClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeMembership.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove the prime member if it exists.
     * 
     *  May only be called from `T::PrimeOrigin`.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Remove the prime member if it exists.
     * 
     *  May only be called from `T::PrimeOrigin`.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeMembershipRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeMembership.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove a member `who` from the set.
     * 
     *  May only be called from `T::RemoveOrigin`.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     *  Remove a member `who` from the set.
     * 
     *  May only be called from `T::RemoveOrigin`.
     */
    get asV23(): {who: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.remove_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV42(): {who: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeMembershipResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeMembership.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change the membership to a new set, disregarding the existing membership. Be nice and
     *  pass `members` pre-sorted.
     * 
     *  May only be called from `T::ResetOrigin`.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     *  Change the membership to a new set, disregarding the existing membership. Be nice and
     *  pass `members` pre-sorted.
     * 
     *  May only be called from `T::ResetOrigin`.
     */
    get asV23(): {members: Uint8Array[]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeMembershipSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeMembership.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the prime member. Must be a current member.
     * 
     *  May only be called from `T::PrimeOrigin`.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     *  Set the prime member. Must be a current member.
     * 
     *  May only be called from `T::PrimeOrigin`.
     */
    get asV23(): {who: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.set_prime') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV42(): {who: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AdvisoryCommitteeMembershipSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AdvisoryCommitteeMembership.swap_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Swap out one member `remove` for another `add`.
     * 
     *  May only be called from `T::SwapOrigin`.
     * 
     *  Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
    }

    /**
     *  Swap out one member `remove` for another `add`.
     * 
     *  May only be called from `T::SwapOrigin`.
     * 
     *  Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV23(): {remove: Uint8Array, add: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('AdvisoryCommitteeMembership.swap_member') === '5efd724fae29eef6393e039bf2dbfd2d5a3081770cc9cc8a80a1475fd6b40cf4'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV42(): {remove: v42.MultiAddress, add: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetManagerTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetManager.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('AssetManager.transfer') === '1c8eb6557234d48d637fa5829221400cf68d72edd5e66d220651549e014dade2'
    }

    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get asV39(): {dest: v39.MultiAddress, currencyId: v39.Asset, amount: bigint} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('AssetManager.transfer') === '46b7780578579019951127db5344698a659cf65e8a09fcc84147d4f859bb31b7'
    }

    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get asV41(): {dest: v41.MultiAddress, currencyId: v41.Asset, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetManagerTransferNativeCurrencyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetManager.transfer_native_currency')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some native currency to another account.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('AssetManager.transfer_native_currency') === '57dbb8633ab95d6014002e3c4265c792dd20ec62d27329c86e527097de19c750'
    }

    /**
     * Transfer some native currency to another account.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get asV39(): {dest: v39.MultiAddress, amount: bigint} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetManagerUpdateBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetManager.update_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('AssetManager.update_balance') === 'c6c09444d1202951cbd76350e190149b3c6f803034447e4f42dbc75c98232f5a'
    }

    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    get asV39(): {who: v39.MultiAddress, currencyId: v39.Asset, amount: bigint} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('AssetManager.update_balance') === '68ba31a6c522c1240afe22b6cd4295bb91fa726855ff62583ac8f0128d018796'
    }

    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    get asV41(): {who: v41.MultiAddress, currencyId: v41.Asset, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetRegistryRegisterAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetRegistry.register_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('AssetRegistry.register_asset') === '8980119afd3cf1eb8b6b09eb30d0b4d8e774a8acff471b794df6db283905b879'
    }

    get asV41(): {metadata: v41.AssetMetadata, assetId: (v41.Asset | undefined)} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    get isV42(): boolean {
        return this._chain.getCallHash('AssetRegistry.register_asset') === 'a8fc9a877521ecb6328e9a888834d443a3b87dde7c4fb8f94ae8dfdb10084857'
    }

    get asV42(): {metadata: v42.AssetMetadata, assetId: (v42.Asset | undefined)} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetRegistryUpdateAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetRegistry.update_asset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV41(): boolean {
        return this._chain.getCallHash('AssetRegistry.update_asset') === '4112be299698821572b0e98f60b73dab4756209f4db85f3ac5642dc378b43f5f'
    }

    get asV41(): {assetId: v41.Asset, decimals: (number | undefined), name: (Uint8Array | undefined), symbol: (Uint8Array | undefined), existentialDeposit: (bigint | undefined), location: Option<(v41.VersionedMultiLocation | undefined)>, additional: (v41.CustomMetadata | undefined)} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    get isV42(): boolean {
        return this._chain.getCallHash('AssetRegistry.update_asset') === 'e979434f6b5f20aed74ced76ae04eedaf7973bc9099ed814337b649548b6fd48'
    }

    get asV42(): {assetId: v42.Asset, decimals: (number | undefined), name: (Uint8Array | undefined), symbol: (Uint8Array | undefined), existentialDeposit: (bigint | undefined), location: Option<(v42.VersionedMultiLocation | undefined)>, additional: (v42.CustomMetadata | undefined)} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorFilterSetEligibleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AuthorFilter.set_eligible')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update the eligible count. Intended to be called by governance.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('AuthorFilter.set_eligible') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Update the eligible count. Intended to be called by governance.
     */
    get asV38(): {new: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorInherentKickOffAuthorshipValidationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AuthorInherent.kick_off_authorship_validation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * This inherent is a workaround to run code after the "real" inherents have executed,
     * but before transactions are executed.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('AuthorInherent.kick_off_authorship_validation') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * This inherent is a workaround to run code after the "real" inherents have executed,
     * but before transactions are executed.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorInherentSetAuthorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AuthorInherent.set_author')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Inherent to set the author of a block
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AuthorInherent.set_author') === 'dcc5e28c9d1f971621221e426a29058530d0292d866725d5251b75fe6b410660'
    }

    /**
     *  Inherent to set the author of a block
     */
    get asV23(): {author: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorMappingAddAssociationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AuthorMapping.add_association')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register your AuthorId onchain so blocks you author are associated with your account.
     * 
     *  Users who have been (or will soon be) elected active collators in staking,
     *  should submit this extrinsic to have their blocks accepted and earn rewards.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AuthorMapping.add_association') === 'c21728b5156f66dcb3edd0992c9a6c22c0541f5d479f1c54a53d7bfd2ff316b6'
    }

    /**
     *  Register your AuthorId onchain so blocks you author are associated with your account.
     * 
     *  Users who have been (or will soon be) elected active collators in staking,
     *  should submit this extrinsic to have their blocks accepted and earn rewards.
     */
    get asV23(): {authorId: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register your NimbusId onchain so blocks you author are associated with your account.
     * 
     * Users who have been (or will soon be) elected active collators in staking,
     * should submit this extrinsic to have their blocks accepted and earn rewards.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('AuthorMapping.add_association') === '7def8b49ad9a867f4b8f41bad9aeb2fc9dc797e393fa0fd99ea36908c24959af'
    }

    /**
     * Register your NimbusId onchain so blocks you author are associated with your account.
     * 
     * Users who have been (or will soon be) elected active collators in staking,
     * should submit this extrinsic to have their blocks accepted and earn rewards.
     */
    get asV40(): {nimbusId: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorMappingClearAssociationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AuthorMapping.clear_association')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Clear your AuthorId.
     * 
     *  This is useful when you are no longer an author and would like to re-claim your security
     *  deposit.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AuthorMapping.clear_association') === 'c21728b5156f66dcb3edd0992c9a6c22c0541f5d479f1c54a53d7bfd2ff316b6'
    }

    /**
     *  Clear your AuthorId.
     * 
     *  This is useful when you are no longer an author and would like to re-claim your security
     *  deposit.
     */
    get asV23(): {authorId: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Clear your Mapping.
     * 
     * This is useful when you are no longer an author and would like to re-claim your security
     * deposit.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('AuthorMapping.clear_association') === '7def8b49ad9a867f4b8f41bad9aeb2fc9dc797e393fa0fd99ea36908c24959af'
    }

    /**
     * Clear your Mapping.
     * 
     * This is useful when you are no longer an author and would like to re-claim your security
     * deposit.
     */
    get asV40(): {nimbusId: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorMappingRemoveKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AuthorMapping.remove_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove your Mapping.
     * 
     * This is useful when you are no longer an author and would like to re-claim your security
     * deposit.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('AuthorMapping.remove_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove your Mapping.
     * 
     * This is useful when you are no longer an author and would like to re-claim your security
     * deposit.
     */
    get asV40(): null {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorMappingSetKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AuthorMapping.set_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set association and session keys at once.
     * 
     * This is useful for key rotation to update Nimbus and VRF keys in one call.
     * No new security deposit is required. Will replace `update_association` which is kept
     * now for backwards compatibility reasons.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('AuthorMapping.set_keys') === '1e076a42a122e827caa48bc7a1e0b1ec1975ac0fc7ef4acaea90d31ef2211d9f'
    }

    /**
     * Set association and session keys at once.
     * 
     * This is useful for key rotation to update Nimbus and VRF keys in one call.
     * No new security deposit is required. Will replace `update_association` which is kept
     * now for backwards compatibility reasons.
     */
    get asV40(): {keys: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorMappingUpdateAssociationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AuthorMapping.update_association')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change your AuthorId.
     * 
     *  This is useful for normal key rotation or for when switching from one physical collator
     *  machine to another. No new security deposit is required.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('AuthorMapping.update_association') === '2f2f4a00699632c2baabb047f17ff994177d3cad907787c96c1be6dc47f6a12a'
    }

    /**
     *  Change your AuthorId.
     * 
     *  This is useful for normal key rotation or for when switching from one physical collator
     *  machine to another. No new security deposit is required.
     */
    get asV23(): {oldAuthorId: Uint8Array, newAuthorId: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change your Mapping.
     * 
     * This is useful for normal key rotation or for when switching from one physical collator
     * machine to another. No new security deposit is required.
     * This sets keys to new_nimbus_id.into() by default.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('AuthorMapping.update_association') === '4e8d43e3278a800a953b93fd27ad2a578366360e4e092b6464408db2c876ff36'
    }

    /**
     * Change your Mapping.
     * 
     * This is useful for normal key rotation or for when switching from one physical collator
     * machine to another. No new security deposit is required.
     * This sets keys to new_nimbus_id.into() by default.
     */
    get asV40(): {oldNimbusId: Uint8Array, newNimbusId: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorizedAuthorizeMarketOutcomeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authorized.authorize_market_outcome')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Overwrites already provided outcomes for the same market and account.
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Authorized.authorize_market_outcome') === '0f08a8301713293618e6dd77fc58ff938b952bf4353a1a64d0b81684f2401b2c'
    }

    /**
     *  Overwrites already provided outcomes for the same market and account.
     */
    get asV26(): {outcome: v26.OutcomeReport} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites already provided outcomes for the same market and account.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Authorized.authorize_market_outcome') === '76b7a7c25591d79bb3a7a6938a8aa342e474b3ed9f777640d5c70824598c13e8'
    }

    /**
     * Overwrites already provided outcomes for the same market and account.
     */
    get asV36(): {marketId: bigint, outcome: v36.OutcomeReport} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Exactly as `transfer`, except the origin must be root and the source account may be
     *  specified.
     *  # <weight>
     *  - Same as transfer, but additional read and write because the source account is
     *    not assumed to be in the overlay.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === '906df11f4f65ebd03a2b87ba248e1fba11c3a0bca42c892bee828bac3ec80348'
    }

    /**
     *  Exactly as `transfer`, except the origin must be root and the source account may be
     *  specified.
     *  # <weight>
     *  - Same as transfer, but additional read and write because the source account is
     *    not assumed to be in the overlay.
     *  # </weight>
     */
    get asV23(): {source: v23.LookupSource, dest: v23.LookupSource, value: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get asV32(): {source: v32.MultiAddress, dest: v32.MultiAddress, value: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceUnreserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_unreserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asV32(): {who: v32.MultiAddress, amount: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.set_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the balances of a given account.
     * 
     *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     *  also decrease the total issuance of the system (`TotalIssuance`).
     *  If the new free or reserved balance is below the existential deposit,
     *  it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     *  The dispatch origin for this call is `root`.
     * 
     *  # <weight>
     *  - Independent of the arguments.
     *  - Contains a limited number of reads and writes.
     *  ---------------------
     *  - Base Weight:
     *      - Creating: 27.56 µs
     *      - Killing: 35.11 µs
     *  - DB Weight: 1 Read, 1 Write to `who`
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === '94e2a75e6cd4bfc2ec9211ae3a29870014cac2dd2f37c1f9634b6e4bbef0442f'
    }

    /**
     *  Set the balances of a given account.
     * 
     *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     *  also decrease the total issuance of the system (`TotalIssuance`).
     *  If the new free or reserved balance is below the existential deposit,
     *  it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     *  The dispatch origin for this call is `root`.
     * 
     *  # <weight>
     *  - Independent of the arguments.
     *  - Contains a limited number of reads and writes.
     *  ---------------------
     *  - Base Weight:
     *      - Creating: 27.56 µs
     *      - Killing: 35.11 µs
     *  - DB Weight: 1 Read, 1 Write to `who`
     *  # </weight>
     */
    get asV23(): {who: v23.LookupSource, newFree: bigint, newReserved: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also decrease the total issuance of the system (`TotalIssuance`).
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     * 
     * # <weight>
     * - Independent of the arguments.
     * - Contains a limited number of reads and writes.
     * ---------------------
     * - Base Weight:
     *     - Creating: 27.56 µs
     *     - Killing: 35.11 µs
     * - DB Weight: 1 Read, 1 Write to `who`
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === 'beb82909d38c015bc075ff8b107e47a02f8772bf5cf681d6cd84ef685e448a8f'
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also decrease the total issuance of the system (`TotalIssuance`).
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     * 
     * # <weight>
     * - Independent of the arguments.
     * - Contains a limited number of reads and writes.
     * ---------------------
     * - Base Weight:
     *     - Creating: 27.56 µs
     *     - Killing: 35.11 µs
     * - DB Weight: 1 Read, 1 Write to `who`
     * # </weight>
     */
    get asV32(): {who: v32.MultiAddress, newFree: bigint, newReserved: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer some liquid free balance to another account.
     * 
     *  `transfer` will set the `FreeBalance` of the sender and receiver.
     *  It will decrease the total issuance of the system by the `TransferFee`.
     *  If the sender's account is below the existential deposit as a result
     *  of the transfer, the account will be reaped.
     * 
     *  The dispatch origin for this call must be `Signed` by the transactor.
     * 
     *  # <weight>
     *  - Dependent on arguments but not critical, given proper implementations for
     *    input config types. See related functions below.
     *  - It contains a limited number of reads and writes internally and no complex computation.
     * 
     *  Related functions:
     * 
     *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *    - Transferring balances to accounts that did not exist before will cause
     *       `T::OnNewAccount::on_new_account` to be called.
     *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
     *      check that the transfer will not kill the origin account.
     *  ---------------------------------
     *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
     *  - DB Weight: 1 Read and 1 Write to destination account
     *  - Origin account is already in memory, so no DB operations for them.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Balances.transfer') === 'c3f0f475940fc4bef49b298f76ba345680f20fc48d5899b4678314a07e2ce090'
    }

    /**
     *  Transfer some liquid free balance to another account.
     * 
     *  `transfer` will set the `FreeBalance` of the sender and receiver.
     *  It will decrease the total issuance of the system by the `TransferFee`.
     *  If the sender's account is below the existential deposit as a result
     *  of the transfer, the account will be reaped.
     * 
     *  The dispatch origin for this call must be `Signed` by the transactor.
     * 
     *  # <weight>
     *  - Dependent on arguments but not critical, given proper implementations for
     *    input config types. See related functions below.
     *  - It contains a limited number of reads and writes internally and no complex computation.
     * 
     *  Related functions:
     * 
     *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *    - Transferring balances to accounts that did not exist before will cause
     *       `T::OnNewAccount::on_new_account` to be called.
     *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
     *      check that the transfer will not kill the origin account.
     *  ---------------------------------
     *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
     *  - DB Weight: 1 Read and 1 Write to destination account
     *  - Origin account is already in memory, so no DB operations for them.
     *  # </weight>
     */
    get asV23(): {dest: v23.LookupSource, value: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * It will decrease the total issuance of the system by the `TransferFee`.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     * 
     * # <weight>
     * - Dependent on arguments but not critical, given proper implementations for input config
     *   types. See related functions below.
     * - It contains a limited number of reads and writes internally and no complex
     *   computation.
     * 
     * Related functions:
     * 
     *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *   - Transferring balances to accounts that did not exist before will cause
     *     `T::OnNewAccount::on_new_account` to be called.
     *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *     that the transfer will not kill the origin account.
     * ---------------------------------
     * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
     * - DB Weight: 1 Read and 1 Write to destination account
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Balances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * It will decrease the total issuance of the system by the `TransferFee`.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     * 
     * # <weight>
     * - Dependent on arguments but not critical, given proper implementations for input config
     *   types. See related functions below.
     * - It contains a limited number of reads and writes internally and no complex
     *   computation.
     * 
     * Related functions:
     * 
     *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *   - Transferring balances to accounts that did not exist before will cause
     *     `T::OnNewAccount::on_new_account` to be called.
     *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *     that the transfer will not kill the origin account.
     * ---------------------------------
     * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
     * - DB Weight: 1 Read and 1 Write to destination account
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    get asV32(): {dest: v32.MultiAddress, value: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer the entire transferable balance from the caller account.
     * 
     *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
     *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     *  transferred by this function. To ensure that this function results in a killed account,
     *  you might need to prepare the account by removing any reference counters, storage
     *  deposits, etc...
     * 
     *  The dispatch origin of this call must be Signed.
     * 
     *  - `dest`: The recipient of the transfer.
     *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *    of the funds the account has, causing the sender account to be killed (false), or
     *    transfer everything except at least the existential deposit, which will guarantee to
     *    keep the sender account alive (true).
     *    # <weight>
     *  - O(1). Just like transfer, but reading the user's transferable balance first.
     *    #</weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '56952003e07947f758a9928d8462037abffea6a7fa991c0d3451f5c47d45f254'
    }

    /**
     *  Transfer the entire transferable balance from the caller account.
     * 
     *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
     *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     *  transferred by this function. To ensure that this function results in a killed account,
     *  you might need to prepare the account by removing any reference counters, storage
     *  deposits, etc...
     * 
     *  The dispatch origin of this call must be Signed.
     * 
     *  - `dest`: The recipient of the transfer.
     *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *    of the funds the account has, causing the sender account to be killed (false), or
     *    transfer everything except at least the existential deposit, which will guarantee to
     *    keep the sender account alive (true).
     *    # <weight>
     *  - O(1). Just like transfer, but reading the user's transferable balance first.
     *    #</weight>
     */
    get asV23(): {dest: v23.LookupSource, keepAlive: boolean} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '9c94c2ca9979f6551af6e123fb6b6ba14d026f862f9a023706f8f88c556b355f'
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    get asV32(): {dest: v32.MultiAddress, keepAlive: boolean} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Pallet.html#method.transfer
     *  # <weight>
     *  - Cheaper than transfer because account cannot be killed.
     *  - Base Weight: 51.4 µs
     *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     *  #</weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'c3f0f475940fc4bef49b298f76ba345680f20fc48d5899b4678314a07e2ce090'
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Pallet.html#method.transfer
     *  # <weight>
     *  - Cheaper than transfer because account cannot be killed.
     *  - Base Weight: 51.4 µs
     *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     *  #</weight>
     */
    get asV23(): {dest: v23.LookupSource, value: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     * # <weight>
     * - Cheaper than transfer because account cannot be killed.
     * - Base Weight: 51.4 µs
     * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     * #</weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     * # <weight>
     * - Cheaper than transfer because account cannot be killed.
     * - Base Weight: 51.4 µs
     * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     * #</weight>
     */
    get asV32(): {dest: v32.MultiAddress, value: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesAcceptCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.accept_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV40(): {bountyId: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesApproveBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.approve_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve a bounty proposal. At a later time, the bounty will be funded and become active
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Bounties.approve_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Approve a bounty proposal. At a later time, the bounty will be funded and become active
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV40(): {bountyId: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesAwardBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.award_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
     * after a delay.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to award.
     * - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Bounties.award_bounty') === 'cfa73dafdcbe89b3b4e24bfc41cf4f3b1fcd9527b052ecc6549b6ac07b965606'
    }

    /**
     * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
     * after a delay.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to award.
     * - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV40(): {bountyId: number, beneficiary: v40.MultiAddress} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesClaimBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.claim_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim the payout from an awarded bounty after payout delay.
     * 
     * The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     * - `bounty_id`: Bounty ID to claim.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Bounties.claim_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Claim the payout from an awarded bounty after payout delay.
     * 
     * The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     * - `bounty_id`: Bounty ID to claim.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV40(): {bountyId: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesCloseBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.close_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a proposed or active bounty. All the funds will be sent to treasury and
     * the curator deposit will be unreserved if possible.
     * 
     * Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     * - `bounty_id`: Bounty ID to cancel.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Bounties.close_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Cancel a proposed or active bounty. All the funds will be sent to treasury and
     * the curator deposit will be unreserved if possible.
     * 
     * Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     * - `bounty_id`: Bounty ID to cancel.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV40(): {bountyId: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesExtendBountyExpiryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.extend_bounty_expiry')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Extend the expiry time of an active bounty.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to extend.
     * - `remark`: additional information.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Bounties.extend_bounty_expiry') === '710d6b76ffcee45bd9bffc1f299fa0b621450769559963379fa259c0f427f1bb'
    }

    /**
     * Extend the expiry time of an active bounty.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to extend.
     * - `remark`: additional information.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV40(): {bountyId: number, remark: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesProposeBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.propose_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose a new bounty.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     * or slashed when rejected.
     * 
     * - `curator`: The curator account whom will manage this bounty.
     * - `fee`: The curator fee.
     * - `value`: The total payment amount of this bounty, curator fee included.
     * - `description`: The description of this bounty.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Bounties.propose_bounty') === '6a012b4069a991972d0d3268cb20dfba3163919c325c7ebbe980b2dc15f1b1f5'
    }

    /**
     * Propose a new bounty.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     * or slashed when rejected.
     * 
     * - `curator`: The curator account whom will manage this bounty.
     * - `fee`: The curator fee.
     * - `value`: The total payment amount of this bounty, curator fee included.
     * - `description`: The description of this bounty.
     */
    get asV40(): {value: bigint, description: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesProposeCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.propose_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Assign a curator to a funded bounty.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Bounties.propose_curator') === 'db115713847ce9db3eac62037c4aefcca595bcd9aa876776d8fba64491d881d3'
    }

    /**
     * Assign a curator to a funded bounty.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV40(): {bountyId: number, curator: v40.MultiAddress, fee: bigint} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesUnassignCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.unassign_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Bounties.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV40(): {bountyId: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Council.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV34(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Council.close') === '683905378cce329de8c5e9460bd36984188fb48a39207d985ea43cb10bd1eb81'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV42(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Council.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Council.execute') === '6ff23eab00632766392b4b8262e51a31844669d260d22cda13ee45dafb0566ad'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV34(): {proposal: v34.Call, lengthBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Council.execute') === 'b2633ad810ff52c8e989963d0fa19ada0a4b0f698c874322f9307b6387a78d42'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV35(): {proposal: v35.Call, lengthBound: number} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Council.execute') === 'de3ad467b30feef330da37843b5f426b4e2082a2e45f48e5196a2c4955c4bc37'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV36(): {proposal: v36.Call, lengthBound: number} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Council.execute') === '1e1e8a53cdab9c57c687e1e5df843c739cab83600e5b8f9bbed6aa1afe79059b'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV37(): {proposal: v37.Call, lengthBound: number} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Council.execute') === 'd5d7d31b729a9484e73f79ebc8a78b8e8067647dd33b187b6334a2066202f472'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV38(): {proposal: v38.Call, lengthBound: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Council.execute') === '8e198ab52372719645a9696ed62b6d3f0d349b01769bf7da14d7e34fdf405dfc'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV39(): {proposal: v39.Call, lengthBound: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Council.execute') === '89702fb019ae01e542fb500c33cc25ff61008fb5d41f252e0f92d57c5e312408'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV40(): {proposal: v40.Call, lengthBound: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Council.execute') === 'bc8525c6c29f024196acd31afc8b8218c7355404d9ea051fd676ff5cfaed9551'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV41(): {proposal: v41.Call, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Council.execute') === '3fd288b19296d39a9c9eee127d1b1f65faa32fbdff18151e5281307d0a3e1603'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV42(): {proposal: v42.Call, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Council.propose') === '47ea3c86a1cef0a1d4e3a62a42abeff3c3d9d1532b2b93fffe7953cdc00724dd'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV34(): {threshold: number, proposal: v34.Call, lengthBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Council.propose') === '7d9f1ec6320de27036fd6b507e2be9b6f8c3dd269e4e381b38073d10c6464174'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV35(): {threshold: number, proposal: v35.Call, lengthBound: number} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Council.propose') === 'a8e0bd38f12545c2bbf575a773e3001649ee981c365ee9ea4272ac6e61f22619'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV36(): {threshold: number, proposal: v36.Call, lengthBound: number} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Council.propose') === 'db9f7c9f448c6737e39ba1b893dc6c9c4351927598712269af85d2c0176a1882'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV37(): {threshold: number, proposal: v37.Call, lengthBound: number} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Council.propose') === '574929be7916f482e912476e7de16996d97586bbfab0aee4e13bc27aa6966b66'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV38(): {threshold: number, proposal: v38.Call, lengthBound: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Council.propose') === '4ee2bb4f89c4f92dfaeede6621e4e39eb55bf1fca0c6c46c794785e7ca2c901b'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV39(): {threshold: number, proposal: v39.Call, lengthBound: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Council.propose') === '8edb02a79fa911fad5166e99838504bde93beba728e23a5cc1040a49b7503bf0'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV40(): {threshold: number, proposal: v40.Call, lengthBound: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Council.propose') === '203a28592cdc1c3a07428dad4b9861beb1c803aa8ad41f45e87959dde8ad7fce'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV41(): {threshold: number, proposal: v41.Call, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Council.propose') === '0126b24801cae5620c45bf5f6acd0597b38b18132530416abf51e3fe03852af8'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV42(): {threshold: number, proposal: v42.Call, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Council.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get asV34(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Council.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get asV34(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilMembershipAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CouncilMembership.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('CouncilMembership.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV34(): {who: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CouncilMembership.add_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV42(): {who: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilMembershipChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CouncilMembership.change_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('CouncilMembership.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV34(): {new: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CouncilMembership.change_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV42(): {new: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilMembershipClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CouncilMembership.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('CouncilMembership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilMembershipRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CouncilMembership.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('CouncilMembership.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV34(): {who: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CouncilMembership.remove_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV42(): {who: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilMembershipResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CouncilMembership.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('CouncilMembership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get asV34(): {members: Uint8Array[]} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilMembershipSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CouncilMembership.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('CouncilMembership.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV34(): {who: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CouncilMembership.set_prime') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV42(): {who: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilMembershipSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CouncilMembership.swap_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('CouncilMembership.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV34(): {remove: Uint8Array, add: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('CouncilMembership.swap_member') === '5efd724fae29eef6393e039bf2dbfd2d5a3081770cc9cc8a80a1475fd6b40cf4'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV42(): {remove: v42.MultiAddress, add: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class CourtExitCourtCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Court.exit_court')
        this._chain = ctx._chain
        this.call = call
    }

    get isV26(): boolean {
        return this._chain.getCallHash('Court.exit_court') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV26(): null {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }
}

export class CourtJoinCourtCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Court.join_court')
        this._chain = ctx._chain
        this.call = call
    }

    get isV26(): boolean {
        return this._chain.getCallHash('Court.join_court') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV26(): null {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }
}

export class CourtVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Court.vote')
        this._chain = ctx._chain
        this.call = call
    }

    get isV26(): boolean {
        return this._chain.getCallHash('Court.vote') === '76b7a7c25591d79bb3a7a6938a8aa342e474b3ed9f777640d5c70824598c13e8'
    }

    get asV26(): {marketId: bigint, outcome: v26.OutcomeReport} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    get isV36(): boolean {
        return this._chain.getCallHash('Court.vote') === '00ac2f1da1166d983e89ebfff8ab3653b5f41c0d158ec65bc1ee0e4d773b06d6'
    }

    get asV36(): {marketId: bigint, outcome: v36.OutcomeReport} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanAssociateNativeIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.associate_native_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Associate a native rewards_destination identity with a crowdloan contribution.
     * 
     *  The caller needs to provide the unassociated relay account and a proof to succeed
     *  with the association
     *  The proof is nothing but a signature over the reward_address using the relay keys
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Crowdloan.associate_native_identity') === 'c9ee54a4d94a885a7279cebdaae0593b633b163d029291bc1b26213e7fb72f47'
    }

    /**
     *  Associate a native rewards_destination identity with a crowdloan contribution.
     * 
     *  The caller needs to provide the unassociated relay account and a proof to succeed
     *  with the association
     *  The proof is nothing but a signature over the reward_address using the relay keys
     */
    get asV23(): {rewardAccount: Uint8Array, relayAccount: Uint8Array, proof: v23.MultiSignature} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanChangeAssociationWithRelayKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.change_association_with_relay_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change reward account by submitting proofs from relay accounts
     * 
     *  The number of valid proofs needs to be bigger than 'RewardAddressRelayVoteThreshold'
     *  The account to be changed needs to be submitted as 'previous_account'
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Crowdloan.change_association_with_relay_keys') === '5fb997e1c6811136e9d59a3cb8ac81dbd38c87f969b8e7005e4f2c70ec7458b7'
    }

    /**
     *  Change reward account by submitting proofs from relay accounts
     * 
     *  The number of valid proofs needs to be bigger than 'RewardAddressRelayVoteThreshold'
     *  The account to be changed needs to be submitted as 'previous_account'
     */
    get asV23(): {rewardAccount: Uint8Array, previousAccount: Uint8Array, proofs: [Uint8Array, v23.MultiSignature][]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Collect whatever portion of your reward are currently vested.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Crowdloan.claim') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Collect whatever portion of your reward are currently vested.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanCompleteInitializationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.complete_initialization')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  This extrinsic completes the initialization if some checks are fullfiled. These checks are:
     *   -The reward contribution money matches the crowdloan pot
     *   -The end vesting block is higher than the init vesting block
     *   -The initialization has not complete yet
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Crowdloan.complete_initialization') === '1dfdc8dc5e830644f6078dce0820b8688f17880bf6a4d4910db9dddca08e9e12'
    }

    /**
     *  This extrinsic completes the initialization if some checks are fullfiled. These checks are:
     *   -The reward contribution money matches the crowdloan pot
     *   -The end vesting block is higher than the init vesting block
     *   -The initialization has not complete yet
     */
    get asV23(): {leaseEndingBlock: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanInitializeRewardVecCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.initialize_reward_vec')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Initialize the reward distribution storage. It shortcuts whenever an error is found
     *  This does not enforce any checks other than making sure we dont go over funds
     *  complete_initialization should perform any additional
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Crowdloan.initialize_reward_vec') === '87a225b22ab08bd6974600cb6eb65f02f7b28a81ed5cd6a550b52fa6289148df'
    }

    /**
     *  Initialize the reward distribution storage. It shortcuts whenever an error is found
     *  This does not enforce any checks other than making sure we dont go over funds
     *  complete_initialization should perform any additional
     */
    get asV23(): {rewards: [Uint8Array, (Uint8Array | undefined), bigint][]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanUpdateRewardAddressCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.update_reward_address')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Update reward address, proving that the caller owns the current native key
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Crowdloan.update_reward_address') === '274dbef0b17c7b2464019a22c3189fd492525c6d5bee4a7b2b0ad648cb171597'
    }

    /**
     *  Update reward address, proving that the caller owns the current native key
     */
    get asV23(): {newRewardAccount: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class CurrencyTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Currency.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer some balance to another account under `currency_id`.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Currency.transfer') === '7de305ac453c5d662a8a9815ba599b184d74b05e5034720f1a731f7ed0500817'
    }

    /**
     *  Transfer some balance to another account under `currency_id`.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get asV23(): {dest: v23.LookupSource, currencyId: v23.CurrencyIdOf, amount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Currency.transfer') === '1c8eb6557234d48d637fa5829221400cf68d72edd5e66d220651549e014dade2'
    }

    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get asV32(): {dest: v32.MultiAddress, currencyId: v32.Asset, amount: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class CurrencyTransferNativeCurrencyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Currency.transfer_native_currency')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer some native currency to another account.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Currency.transfer_native_currency') === '99123a58f21a27e3615c09aa5e891295609109fa77378a29bc61ee98ab991b92'
    }

    /**
     *  Transfer some native currency to another account.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get asV23(): {dest: v23.LookupSource, amount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some native currency to another account.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Currency.transfer_native_currency') === '57dbb8633ab95d6014002e3c4265c792dd20ec62d27329c86e527097de19c750'
    }

    /**
     * Transfer some native currency to another account.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get asV32(): {dest: v32.MultiAddress, amount: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class CurrencyUpdateBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Currency.update_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  update amount of account `who` under `currency_id`.
     * 
     *  The dispatch origin of this call must be _Root_.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Currency.update_balance') === 'babee5017681774b4821f65f9b9788f74835eb69c9be3a9a6d06818704d89e91'
    }

    /**
     *  update amount of account `who` under `currency_id`.
     * 
     *  The dispatch origin of this call must be _Root_.
     */
    get asV23(): {who: v23.LookupSource, currencyId: v23.CurrencyIdOf, amount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Currency.update_balance') === 'c6c09444d1202951cbd76350e190149b3c6f803034447e4f42dbc75c98232f5a'
    }

    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    get asV32(): {who: v32.MultiAddress, currencyId: v32.Asset, amount: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyBlacklistCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.blacklist')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Permanently place a proposal into the blacklist. This prevents it from ever being
     * proposed again.
     * 
     * If called on a queued public or external proposal, then this will result in it being
     * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     * then it will be cancelled.
     * 
     * The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     * - `proposal_hash`: The proposal hash to blacklist permanently.
     * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     * cancelled.
     * 
     * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *   reasonable value).
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.blacklist') === '8d8922c0775adfb1df719211ab4fc6fb40b6cc8864038bcb1b544d9cf039b30a'
    }

    /**
     * Permanently place a proposal into the blacklist. This prevents it from ever being
     * proposed again.
     * 
     * If called on a queued public or external proposal, then this will result in it being
     * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     * then it will be cancelled.
     * 
     * The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     * - `proposal_hash`: The proposal hash to blacklist permanently.
     * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     * cancelled.
     * 
     * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *   reasonable value).
     */
    get asV34(): {proposalHash: Uint8Array, maybeRefIndex: (number | undefined)} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a proposal.
     * 
     * The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     * - `prop_index`: The index of the proposal to cancel.
     * 
     * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.cancel_proposal') === '0e50c7564a4a7f4e6a09a0abcc8022f4445c064144d2318ed086e6080bee800d'
    }

    /**
     * Remove a proposal.
     * 
     * The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     * - `prop_index`: The index of the proposal to cancel.
     * 
     * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get asV34(): {propIndex: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelQueuedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_queued')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a proposal queued for enactment.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `which`: The index of the referendum to cancel.
     * 
     * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.cancel_queued') === '60780274011857b5305b5413b2b4742e5d41eb58a0948049d0672e81af198cb7'
    }

    /**
     * Cancel a proposal queued for enactment.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `which`: The index of the referendum to cancel.
     * 
     * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
     */
    get asV34(): {which: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelReferendumCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_referendum')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a referendum.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `ref_index`: The index of the referendum to cancel.
     * 
     * # Weight: `O(1)`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.cancel_referendum') === 'efe4ecff834678ca8b73ea6e2f38e514997eb402e82da2ce4cf036008844a857'
    }

    /**
     * Remove a referendum.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `ref_index`: The index of the referendum to cancel.
     * 
     * # Weight: `O(1)`.
     */
    get asV34(): {refIndex: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyClearPublicProposalsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.clear_public_proposals')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.delegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '719d303e364256b757876a8d1b18c8d62a96223d68ffc6f6c1bf18240e8d9793'
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asV34(): {to: Uint8Array, conviction: v34.Conviction, balance: bigint} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '789db36a1c43e1ffdad52288f8573a492f529890632f51821e7bd1d74ba6cffc'
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asV42(): {to: v42.MultiAddress, conviction: v42.Conviction, balance: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyEmergencyCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.emergency_cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     * referendum.
     * 
     * The dispatch origin of this call must be `CancellationOrigin`.
     * 
     * -`ref_index`: The index of the referendum to cancel.
     * 
     * Weight: `O(1)`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.emergency_cancel') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     * referendum.
     * 
     * The dispatch origin of this call must be `CancellationOrigin`.
     * 
     * -`ref_index`: The index of the referendum to cancel.
     * 
     * Weight: `O(1)`.
     */
    get asV34(): {refIndex: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyEnactProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.enact_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.enact_proposal') === 'de192ab0f058d1fb7eacc523bf0e05128d16509ec21bf445f0eefa47c89e60bf'
    }

    /**
     * Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get asV34(): {proposalHash: Uint8Array, index: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
     *   Decoding vec of length V. Charged as maximum
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.external_propose') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
     *   Decoding vec of length V. Charged as maximum
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeDefaultCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_default')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_default') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeMajorityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_majority')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_majority') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyFastTrackCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.fast_track')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule the currently externally-proposed majority-carries referendum to be tabled
     * immediately. If there is no externally-proposed referendum currently, or if there is one
     * but it is not a majority-carries referendum then it fails.
     * 
     * The dispatch of this call must be `FastTrackOrigin`.
     * 
     * - `proposal_hash`: The hash of the current external proposal.
     * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     *   `FastTrackVotingPeriod` if too low.
     * - `delay`: The number of block after voting has ended in approval and this should be
     *   enacted. This doesn't have a minimum amount.
     * 
     * Emits `Started`.
     * 
     * Weight: `O(1)`
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.fast_track') === 'f975da968a544c69d31efef9fcbbe8e3c1542ff596bd9c5958bc17cb3150549d'
    }

    /**
     * Schedule the currently externally-proposed majority-carries referendum to be tabled
     * immediately. If there is no externally-proposed referendum currently, or if there is one
     * but it is not a majority-carries referendum then it fails.
     * 
     * The dispatch of this call must be `FastTrackOrigin`.
     * 
     * - `proposal_hash`: The hash of the current external proposal.
     * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     *   `FastTrackVotingPeriod` if too low.
     * - `delay`: The number of block after voting has ended in approval and this should be
     *   enacted. This doesn't have a minimum amount.
     * 
     * Emits `Started`.
     * 
     * Weight: `O(1)`
     */
    get asV34(): {proposalHash: Uint8Array, votingPeriod: bigint, delay: bigint} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNoteImminentPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_imminent_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register the preimage for an upcoming proposal. This requires the proposal to be
     * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
     * the preimage has not been uploaded before and matches some imminent proposal,
     * no fee is paid.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Register the preimage for an upcoming proposal. This requires the proposal to be
     * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
     * the preimage has not been uploaded before and matches some imminent proposal,
     * no fee is paid.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get asV34(): {encodedProposal: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNoteImminentPreimageOperationalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_imminent_preimage_operational')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asV34(): {encodedProposal: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     * in the dispatch queue but does require a deposit, returned once enacted.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     * in the dispatch queue but does require a deposit, returned once enacted.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get asV34(): {encodedProposal: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNotePreimageOperationalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_preimage_operational')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asV34(): {encodedProposal: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     * 
     * Weight: `O(p)`
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.propose') === '99f964e94c86db2029fab3e54a9230e36fe7533d252b5ecbc36f16c06e11f18b'
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     * 
     * Weight: `O(p)`
     */
    get asV34(): {proposalHash: Uint8Array, value: bigint} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyReapPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.reap_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove an expired proposal preimage and collect the deposit.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `proposal_hash`: The preimage hash of a proposal.
     * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
     *   weighted according to this value with no refund.
     * 
     * This will only work after `VotingPeriod` blocks from the time that the preimage was
     * noted, if it's the same account doing it. If it's a different account, then it'll only
     * work an additional `EnactmentPeriod` later.
     * 
     * Emits `PreimageReaped`.
     * 
     * Weight: `O(D)` where D is length of proposal.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.reap_preimage') === '23573ffc912e8a31889875352d3543e4538e2f3beb6a89ef86d10cf1cb8b7aca'
    }

    /**
     * Remove an expired proposal preimage and collect the deposit.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `proposal_hash`: The preimage hash of a proposal.
     * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
     *   weighted according to this value with no refund.
     * 
     * This will only work after `VotingPeriod` blocks from the time that the preimage was
     * noted, if it's the same account doing it. If it's a different account, then it'll only
     * work an additional `EnactmentPeriod` later.
     * 
     * Emits `PreimageReaped`.
     * 
     * Weight: `O(D)` where D is length of proposal.
     */
    get asV34(): {proposalHash: Uint8Array, proposalLenUpperBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveOtherVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_other_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '57db819150acc73e380a9908a05d4f777cd3af825527d7ad88560426e1d0f652'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV34(): {target: Uint8Array, index: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '43d317508cc3ba04dcadb411eb6499f25532d64ab5a169b27410116c72f40a26'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV42(): {target: v42.MultiAddress, index: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV34(): {index: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracySecondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.second')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
     *   proposal. Extrinsic is weighted according to this value with no refund.
     * 
     * Weight: `O(S)` where S is the number of seconds a proposal already has.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.second') === 'abe1357aae784eefd21f6999076deb6cfbc92fcb9e80c21e93a944ceb739423c'
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
     *   proposal. Extrinsic is weighted according to this value with no refund.
     * 
     * Weight: `O(S)` where S is the number of seconds a proposal already has.
     */
    get asV34(): {proposal: number, secondsUpperBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUndelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.undelegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUnlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.unlock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.unlock') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get asV34(): {target: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Democracy.unlock') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get asV42(): {target: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVetoExternalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.veto_external')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Veto and blacklist the external proposal hash.
     * 
     * The dispatch origin of this call must be `VetoOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     * Emits `Vetoed`.
     * 
     * Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.veto_external') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Veto and blacklist the external proposal hash.
     * 
     * The dispatch origin of this call must be `VetoOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     * Emits `Vetoed`.
     * 
     * Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get asV34(): {refIndex: number, vote: v34.AccountVote} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class DmpQueueServiceOverweightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DmpQueue.service_overweight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Service a single overweight message.
     * 
     *  - `origin`: Must pass `ExecuteOverweightOrigin`.
     *  - `index`: The index of the overweight message to service.
     *  - `weight_limit`: The amount of weight that message execution may take.
     * 
     *  Errors:
     *  - `Unknown`: Message of `index` is unknown.
     *  - `OverLimit`: Message execution may use greater than `weight_limit`.
     * 
     *  Events:
     *  - `OverweightServiced`: On success.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('DmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
    }

    /**
     *  Service a single overweight message.
     * 
     *  - `origin`: Must pass `ExecuteOverweightOrigin`.
     *  - `index`: The index of the overweight message to service.
     *  - `weight_limit`: The amount of weight that message execution may take.
     * 
     *  Errors:
     *  - `Unknown`: Message of `index` is unknown.
     *  - `OverLimit`: Message execution may use greater than `weight_limit`.
     * 
     *  Events:
     *  - `OverweightServiced`: On success.
     */
    get asV23(): {index: bigint, weightLimit: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Service a single overweight message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `Unknown`: Message of `index` is unknown.
     * - `OverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('DmpQueue.service_overweight') === '3e0d440993be1d69328adae3a1b30f3261ca945f8f307c396f4de7f51796a0c6'
    }

    /**
     * Service a single overweight message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `Unknown`: Message of `index` is unknown.
     * - `OverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asV42(): {index: bigint, weightLimit: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class GlobalDisputesAddVoteOutcomeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'GlobalDisputes.add_vote_outcome')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add voting outcome to a global dispute in exchange for a constant fee.
     * Errors if the voting outcome already exists or
     * if the global dispute has not started or has already finished.
     * 
     * # Arguments
     * 
     * - `market_id`: The id of the market.
     * - `outcome`: The outcome report to add.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of owner(s) of the winner outcome
     * in the case that this gets called for an already finished global dispute.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('GlobalDisputes.add_vote_outcome') === '00ac2f1da1166d983e89ebfff8ab3653b5f41c0d158ec65bc1ee0e4d773b06d6'
    }

    /**
     * Add voting outcome to a global dispute in exchange for a constant fee.
     * Errors if the voting outcome already exists or
     * if the global dispute has not started or has already finished.
     * 
     * # Arguments
     * 
     * - `market_id`: The id of the market.
     * - `outcome`: The outcome report to add.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of owner(s) of the winner outcome
     * in the case that this gets called for an already finished global dispute.
     */
    get asV41(): {marketId: bigint, outcome: v41.OutcomeReport} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class GlobalDisputesPurgeOutcomesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'GlobalDisputes.purge_outcomes')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Purge all outcomes to allow the winning outcome owner(s) to get their reward.
     * Fails if the global dispute is not concluded yet.
     * 
     * # Arguments
     * 
     * - `market_id`: The id of the market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`,
     * where `n` is the number of all existing outcomes for a global dispute.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('GlobalDisputes.purge_outcomes') === 'b56842a00d00b24c300d8cd4359235b469945c309694d455d2ba2bd1de5d0d4e'
    }

    /**
     * Purge all outcomes to allow the winning outcome owner(s) to get their reward.
     * Fails if the global dispute is not concluded yet.
     * 
     * # Arguments
     * 
     * - `market_id`: The id of the market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`,
     * where `n` is the number of all existing outcomes for a global dispute.
     */
    get asV41(): {marketId: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class GlobalDisputesRewardOutcomeOwnerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'GlobalDisputes.reward_outcome_owner')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Reward the collected fees to the owner(s) of a voting outcome.
     * Fails if outcomes is not already purged.
     * 
     * # Arguments
     * 
     * - `market_id`: The id of the market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of owners for the winning outcome.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('GlobalDisputes.reward_outcome_owner') === 'b56842a00d00b24c300d8cd4359235b469945c309694d455d2ba2bd1de5d0d4e'
    }

    /**
     * Reward the collected fees to the owner(s) of a voting outcome.
     * Fails if outcomes is not already purged.
     * 
     * # Arguments
     * 
     * - `market_id`: The id of the market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of owners for the winning outcome.
     */
    get asV41(): {marketId: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class GlobalDisputesUnlockVoteBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'GlobalDisputes.unlock_vote_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Return all locked native tokens in a global dispute.
     * Fails if the global dispute is not concluded yet.
     * 
     * # Arguments
     * 
     * - `voter`: The account id lookup to unlock funds for.
     * 
     * # Weight
     * 
     * Complexity: `O(n + m)`, where `n` is the number of all current votes on global disputes,
     * and `m` is the number of owners for the winning outcome.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('GlobalDisputes.unlock_vote_balance') === 'b99d78100fa51796a1ba4b4f51e3638f20d2cf6a377b53f2826f322cde6fbf56'
    }

    /**
     * Return all locked native tokens in a global dispute.
     * Fails if the global dispute is not concluded yet.
     * 
     * # Arguments
     * 
     * - `voter`: The account id lookup to unlock funds for.
     * 
     * # Weight
     * 
     * Complexity: `O(n + m)`, where `n` is the number of all current votes on global disputes,
     * and `m` is the number of owners for the winning outcome.
     */
    get asV41(): {voter: v41.MultiAddress} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class GlobalDisputesVoteOnOutcomeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'GlobalDisputes.vote_on_outcome')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote on existing voting outcomes by locking native tokens.
     * Fails if the global dispute has not started or has already finished.
     * 
     * # Arguments
     * 
     * - `market_id`: The id of the market.
     * - `outcome`: The existing outcome report to vote on.
     * - `amount`: The amount to vote with.
     * 
     * # Weight
     * 
     * Complexity: `O(n + m)`, where `n` is the number of all current votes on global disputes,
     * and `m` is the number of owners for the specified outcome.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('GlobalDisputes.vote_on_outcome') === '125cd4be6b2f0c8e6339dcb59a30ee81e1f6a2579380c0cd53ae13d40c4ea47f'
    }

    /**
     * Vote on existing voting outcomes by locking native tokens.
     * Fails if the global dispute has not started or has already finished.
     * 
     * # Arguments
     * 
     * - `market_id`: The id of the market.
     * - `outcome`: The existing outcome report to vote on.
     * - `amount`: The amount to vote with.
     * 
     * # Weight
     * 
     * Complexity: `O(n + m)`, where `n` is the number of all current votes on global disputes,
     * and `m` is the number of owners for the specified outcome.
     */
    get asV41(): {marketId: bigint, outcome: v41.OutcomeReport, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityAddRegistrarCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.add_registrar')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add a registrar to the system.
     * 
     *  The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     *  - `account`: the account of the registrar.
     * 
     *  Emits `RegistrarAdded` if successful.
     * 
     *  # <weight>
     *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     *  - One storage mutation (codec `O(R)`).
     *  - One event.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.add_registrar') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     *  Add a registrar to the system.
     * 
     *  The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     *  - `account`: the account of the registrar.
     * 
     *  Emits `RegistrarAdded` if successful.
     * 
     *  # <weight>
     *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     *  - One storage mutation (codec `O(R)`).
     *  - One event.
     *  # </weight>
     */
    get asV23(): {account: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a registrar to the system.
     * 
     * The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     * - `account`: the account of the registrar.
     * 
     * Emits `RegistrarAdded` if successful.
     * 
     * # <weight>
     * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     * - One storage mutation (codec `O(R)`).
     * - One event.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Identity.add_registrar') === '2842be90a4599435dbefe83c28be9576bf64e6ff14aa9fa87c5fdb6255ef27b2'
    }

    /**
     * Add a registrar to the system.
     * 
     * The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     * - `account`: the account of the registrar.
     * 
     * Emits `RegistrarAdded` if successful.
     * 
     * # <weight>
     * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     * - One storage mutation (codec `O(R)`).
     * - One event.
     * # </weight>
     */
    get asV42(): {account: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityAddSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.add_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add the given account to the sender's subs.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.add_sub') === 'ef8fb13f5dc864a3db268a8f01b166d2deee87052a98309538fe8961be9020a9'
    }

    /**
     *  Add the given account to the sender's subs.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get asV23(): {sub: v23.LookupSource, data: v23.Data} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add the given account to the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Identity.add_sub') === 'b7d02496580d984a1a588630bfbf580f423f08a761006f8706b057ac73069a38'
    }

    /**
     * Add the given account to the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV32(): {sub: v32.MultiAddress, data: v32.Data} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityCancelRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.cancel_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel a previous request.
     * 
     *  Payment: A previously reserved deposit is returned on success.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a
     *  registered identity.
     * 
     *  - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     *  Emits `JudgementUnrequested` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-reserve operation.
     *  - One storage mutation `O(R + X)`.
     *  - One event
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.cancel_request') === '89d659d6a17ba36d0dfc7c90a7f043581d7fe980043895169d7dda1416ff7e5b'
    }

    /**
     *  Cancel a previous request.
     * 
     *  Payment: A previously reserved deposit is returned on success.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a
     *  registered identity.
     * 
     *  - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     *  Emits `JudgementUnrequested` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-reserve operation.
     *  - One storage mutation `O(R + X)`.
     *  - One event
     *  # </weight>
     */
    get asV23(): {regIndex: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityClearIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.clear_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     *  Payment: All reserved balances on the account are returned.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  Emits `IdentityCleared` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`
     *    - where `R` registrar-count (governance-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *    - where `X` additional-field-count (deposit-bounded and code-bounded).
     *  - One balance-unreserve operation.
     *  - `2` storage reads and `S + 2` storage deletions.
     *  - One event.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     *  Payment: All reserved balances on the account are returned.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  Emits `IdentityCleared` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`
     *    - where `R` registrar-count (governance-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *    - where `X` additional-field-count (deposit-bounded and code-bounded).
     *  - One balance-unreserve operation.
     *  - `2` storage reads and `S + 2` storage deletions.
     *  - One event.
     *  # </weight>
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityKillIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.kill_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove an account's identity and sub-account information and slash the deposits.
     * 
     *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     *  `Slash`. Verification request deposits are not returned; they should be cancelled
     *  manually using `cancel_request`.
     * 
     *  The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     *  - `target`: the account whose identity the judgement is upon. This must be an account
     *    with a registered identity.
     * 
     *  Emits `IdentityKilled` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`.
     *  - One balance-reserve operation.
     *  - `S + 2` storage mutations.
     *  - One event.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.kill_identity') === 'b473bcbba83335e310f2f681307dcf6b16b8d79ec99a4fb2202c34bed7de3b65'
    }

    /**
     *  Remove an account's identity and sub-account information and slash the deposits.
     * 
     *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     *  `Slash`. Verification request deposits are not returned; they should be cancelled
     *  manually using `cancel_request`.
     * 
     *  The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     *  - `target`: the account whose identity the judgement is upon. This must be an account
     *    with a registered identity.
     * 
     *  Emits `IdentityKilled` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`.
     *  - One balance-reserve operation.
     *  - `S + 2` storage mutations.
     *  - One event.
     *  # </weight>
     */
    get asV23(): {target: v23.LookupSource} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove an account's identity and sub-account information and slash the deposits.
     * 
     * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     * `Slash`. Verification request deposits are not returned; they should be cancelled
     * manually using `cancel_request`.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * 
     * Emits `IdentityKilled` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`.
     * - One balance-reserve operation.
     * - `S + 2` storage mutations.
     * - One event.
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Identity.kill_identity') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
    }

    /**
     * Remove an account's identity and sub-account information and slash the deposits.
     * 
     * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     * `Slash`. Verification request deposits are not returned; they should be cancelled
     * manually using `cancel_request`.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * 
     * Emits `IdentityKilled` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`.
     * - One balance-reserve operation.
     * - `S + 2` storage mutations.
     * - One event.
     * # </weight>
     */
    get asV32(): {target: v32.MultiAddress} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityProvideJudgementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.provide_judgement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Provide a judgement for an account's identity.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `reg_index`.
     * 
     *  - `reg_index`: the index of the registrar whose judgement is being made.
     *  - `target`: the account whose identity the judgement is upon. This must be an account
     *    with a registered identity.
     *  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * 
     *  Emits `JudgementGiven` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-transfer operation.
     *  - Up to one account-lookup operation.
     *  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     *  - One event.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.provide_judgement') === 'abdb42b954610658025900cff996632ccf91d9ab5409152108d45ed12cca332b'
    }

    /**
     *  Provide a judgement for an account's identity.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `reg_index`.
     * 
     *  - `reg_index`: the index of the registrar whose judgement is being made.
     *  - `target`: the account whose identity the judgement is upon. This must be an account
     *    with a registered identity.
     *  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * 
     *  Emits `JudgementGiven` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-transfer operation.
     *  - Up to one account-lookup operation.
     *  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     *  - One event.
     *  # </weight>
     */
    get asV23(): {regIndex: number, target: v23.LookupSource, judgement: v23.IdentityJudgement} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Provide a judgement for an account's identity.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `reg_index`.
     * 
     * - `reg_index`: the index of the registrar whose judgement is being made.
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * 
     * Emits `JudgementGiven` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-transfer operation.
     * - Up to one account-lookup operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     * - One event.
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Identity.provide_judgement') === 'abe9fadae40ed65e9f7ddf86c0556a4a577958e2dc507fbb3f459268e87e7b6c'
    }

    /**
     * Provide a judgement for an account's identity.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `reg_index`.
     * 
     * - `reg_index`: the index of the registrar whose judgement is being made.
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * 
     * Emits `JudgementGiven` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-transfer operation.
     * - Up to one account-lookup operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     * - One event.
     * # </weight>
     */
    get asV32(): {regIndex: number, target: v32.MultiAddress, judgement: v32.Judgement} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Provide a judgement for an account's identity.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `reg_index`.
     * 
     * - `reg_index`: the index of the registrar whose judgement is being made.
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
     * 
     * Emits `JudgementGiven` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-transfer operation.
     * - Up to one account-lookup operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     * - One event.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Identity.provide_judgement') === '293a16f5e8f521553f92204e3de7063fafc7905d71ca7812337b8bc6e200bcf9'
    }

    /**
     * Provide a judgement for an account's identity.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `reg_index`.
     * 
     * - `reg_index`: the index of the registrar whose judgement is being made.
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
     * 
     * Emits `JudgementGiven` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-transfer operation.
     * - Up to one account-lookup operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     * - One event.
     * # </weight>
     */
    get asV42(): {regIndex: number, target: v42.MultiAddress, judgement: v42.Judgement, identity: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityQuitSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.quit_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove the sender as a sub-account.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender (*not* the original depositor).
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  super-identity.
     * 
     *  NOTE: This should not normally be used, but is provided in the case that the non-
     *  controller of an account is maliciously registered as a sub-account.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.quit_sub') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Remove the sender as a sub-account.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender (*not* the original depositor).
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  super-identity.
     * 
     *  NOTE: This should not normally be used, but is provided in the case that the non-
     *  controller of an account is maliciously registered as a sub-account.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRemoveSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.remove_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove the given account from the sender's subs.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.remove_sub') === 'da8ee0ac4ebb51ed9fe85fbeb08186e79fab7cd448e7811d7ec80b60406fcee5'
    }

    /**
     *  Remove the given account from the sender's subs.
     * 
     *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     *  to the sender.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get asV23(): {sub: v23.LookupSource} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove the given account from the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Identity.remove_sub') === 'e2fd2e12228143db75d1c9482d7788894e6f224b6c362b650b73ac996f701805'
    }

    /**
     * Remove the given account from the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV32(): {sub: v32.MultiAddress} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRenameSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.rename_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Alter the associated name of the given sub-account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === 'ef8fb13f5dc864a3db268a8f01b166d2deee87052a98309538fe8961be9020a9'
    }

    /**
     *  Alter the associated name of the given sub-account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get asV23(): {sub: v23.LookupSource, data: v23.Data} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === 'b7d02496580d984a1a588630bfbf580f423f08a761006f8706b057ac73069a38'
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV32(): {sub: v32.MultiAddress, data: v32.Data} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRequestJudgementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.request_judgement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Request a judgement from a registrar.
     * 
     *  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     *  given.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a
     *  registered identity.
     * 
     *  - `reg_index`: The index of the registrar whose judgement is requested.
     *  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     *  ```nocompile
     *  Self::registrars().get(reg_index).unwrap().fee
     *  ```
     * 
     *  Emits `JudgementRequested` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-reserve operation.
     *  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
     *  - One event.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.request_judgement') === 'c6336282cbe5b8ccf3769cc13c92f532be2499335e3d52ebf566a888e92b5b7c'
    }

    /**
     *  Request a judgement from a registrar.
     * 
     *  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     *  given.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a
     *  registered identity.
     * 
     *  - `reg_index`: The index of the registrar whose judgement is requested.
     *  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     *  ```nocompile
     *  Self::registrars().get(reg_index).unwrap().fee
     *  ```
     * 
     *  Emits `JudgementRequested` if successful.
     * 
     *  # <weight>
     *  - `O(R + X)`.
     *  - One balance-reserve operation.
     *  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
     *  - One event.
     *  # </weight>
     */
    get asV23(): {regIndex: number, maxFee: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetAccountIdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_account_id')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change the account associated with a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `new`: the new account ID.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.set_account_id') === 'a333bb3ce3e314d48fcf93f14155097760db6249022181f1eb923c1343af6813'
    }

    /**
     *  Change the account associated with a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `new`: the new account ID.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     *  # </weight>
     */
    get asV23(): {index: number, new: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change the account associated with a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `new`: the new account ID.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Identity.set_account_id') === '7c569a09ae3438c742df387f66c9e012ebdf2af1dfe1befa9aba3df316cee1aa'
    }

    /**
     * Change the account associated with a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `new`: the new account ID.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     * # </weight>
     */
    get asV42(): {index: number, new: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the fee required for a judgement to be requested from a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `fee`: the new fee.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.set_fee') === '6418458414c3cef3d5c80c88232d781e76733c675303b2937b9cd30ae58d0fe4'
    }

    /**
     *  Set the fee required for a judgement to be requested from a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `fee`: the new fee.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     *  # </weight>
     */
    get asV23(): {index: number, fee: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetFieldsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_fields')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the field information for a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `fields`: the fields that the registrar concerns themselves with.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.set_fields') === 'b2c8998acd304e28e4f4a78e6a07f5bf7caf587532734dbd94b85c01a31c3e13'
    }

    /**
     *  Set the field information for a registrar.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must be the account
     *  of the registrar whose index is `index`.
     * 
     *  - `index`: the index of the registrar whose fee is to be set.
     *  - `fields`: the fields that the registrar concerns themselves with.
     * 
     *  # <weight>
     *  - `O(R)`.
     *  - One storage mutation `O(R)`.
     *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     *  # </weight>
     */
    get asV23(): {index: number, fields: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set an account's identity information and reserve the appropriate deposit.
     * 
     *  If the account already has identity information, the deposit is taken as part payment
     *  for the new deposit.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `info`: The identity information.
     * 
     *  Emits `IdentitySet` if successful.
     * 
     *  # <weight>
     *  - `O(X + X' + R)`
     *    - where `X` additional-field-count (deposit-bounded and code-bounded)
     *    - where `R` judgements-count (registrar-count-bounded)
     *  - One balance reserve operation.
     *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     *  - One event.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
    }

    /**
     *  Set an account's identity information and reserve the appropriate deposit.
     * 
     *  If the account already has identity information, the deposit is taken as part payment
     *  for the new deposit.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `info`: The identity information.
     * 
     *  Emits `IdentitySet` if successful.
     * 
     *  # <weight>
     *  - `O(X + X' + R)`
     *    - where `X` additional-field-count (deposit-bounded and code-bounded)
     *    - where `R` judgements-count (registrar-count-bounded)
     *  - One balance reserve operation.
     *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     *  - One event.
     *  # </weight>
     */
    get asV23(): {info: v23.IdentityInfo} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetSubsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_subs')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the sub-accounts of the sender.
     * 
     *  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     *  and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  - `subs`: The identity's (new) sub-accounts.
     * 
     *  # <weight>
     *  - `O(P + S)`
     *    - where `P` old-subs-count (hard- and deposit-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *  - At most one balance operations.
     *  - DB:
     *    - `P + S` storage mutations (codec complexity `O(1)`)
     *    - One storage read (codec complexity `O(P)`).
     *    - One storage write (codec complexity `O(S)`).
     *    - One storage-exists (`IdentityOf::contains_key`).
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Identity.set_subs') === 'f156a100857e71b9e1eab839801795e8569b63b49f6c30333c5bf12811cbbe73'
    }

    /**
     *  Set the sub-accounts of the sender.
     * 
     *  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     *  and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  - `subs`: The identity's (new) sub-accounts.
     * 
     *  # <weight>
     *  - `O(P + S)`
     *    - where `P` old-subs-count (hard- and deposit-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *  - At most one balance operations.
     *  - DB:
     *    - `P + S` storage mutations (codec complexity `O(1)`)
     *    - One storage read (codec complexity `O(P)`).
     *    - One storage write (codec complexity `O(S)`).
     *    - One storage-exists (`IdentityOf::contains_key`).
     *  # </weight>
     */
    get asV23(): {subs: [Uint8Array, v23.Data][]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class LiquidityMiningSetPerBlockDistributionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'LiquidityMining.set_per_block_distribution')
        this._chain = ctx._chain
        this.call = call
    }

    get isV23(): boolean {
        return this._chain.getCallHash('LiquidityMining.set_per_block_distribution') === 'b28ece0af685a5d716e2a8019afdb3bf2dddb45117ac3cbaad1e5e1001505fdb'
    }

    get asV23(): {perBlockDistribution: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    get isV36(): boolean {
        return this._chain.getCallHash('LiquidityMining.set_per_block_distribution') === 'd5415d5abaa2dfd812086a10a89394402d02a45b3903aa499ce9b6e7d319e4d0'
    }

    get asV36(): {perBlockDistribution: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiSigApproveAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiSig.approve_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('MultiSig.approve_as_multi') === 'e1b0a543d25f7942047304144731a27769fb0e68ba5c17ad75f0cd4edfaeba3a'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get asV35(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v35.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('MultiSig.approve_as_multi') === 'f03bccab16feb2680fea3e7da6a515ea636d74ec43d97cf222e54ff741c45b5b'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get asV42(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v42.Timepoint | undefined), callHash: Uint8Array, maxWeight: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiSigAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiSig.as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('MultiSig.as_multi') === '399b120f1380b81eb098fd177b8701364ad81f9dfe76a532717f4dd594e12027'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get asV35(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v35.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('MultiSig.as_multi') === 'be273a273767dc5a4a824a5de2648bd8946b128e4e7879057428f17813ea3e45'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get asV42(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v42.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiSigAsMultiThreshold1Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiSig.as_multi_threshold_1')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('MultiSig.as_multi_threshold_1') === '6e326a5a0e61a22ec21eafdc9e16fcca259ec9a0ed7582c6599edb55479120d6'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV35(): {otherSignatories: Uint8Array[], call: v35.Call} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('MultiSig.as_multi_threshold_1') === '7f1d500bbd3a906bd4cfc9d2e018895127ed2fe1ebdc6401fa2271182db4d080'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV36(): {otherSignatories: Uint8Array[], call: v36.Call} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('MultiSig.as_multi_threshold_1') === '4d4e89b819a89b1d011824a3ff018a93a5d657729e0e64c5065789120dcf54c5'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV37(): {otherSignatories: Uint8Array[], call: v37.Call} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('MultiSig.as_multi_threshold_1') === 'e9f0d4fdd75cb90922905ce2ac095b7d97eb2b8b1f79242c0653094bcc5b15eb'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV38(): {otherSignatories: Uint8Array[], call: v38.Call} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('MultiSig.as_multi_threshold_1') === '6fb0fbf34b37bf5fd822ba34863970a8268ccf745fdd626a65306e33aade945f'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV39(): {otherSignatories: Uint8Array[], call: v39.Call} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('MultiSig.as_multi_threshold_1') === '186d81e50b5c6e67038ba24ae1a77de2ccae24a164f98c0f11801e9c64d0be51'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV40(): {otherSignatories: Uint8Array[], call: v40.Call} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('MultiSig.as_multi_threshold_1') === 'f7511b4327a908e2bc05ed5b66d561c8da9c65c20055688a96a17109b3dae186'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV41(): {otherSignatories: Uint8Array[], call: v41.Call} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('MultiSig.as_multi_threshold_1') === 'afbd4bdbc64a2ca2d1462aa5cafffdd8f7f5b21d1913101852e1dcf03e09ecdc'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV42(): {otherSignatories: Uint8Array[], call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiSigCancelAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiSig.cancel_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('MultiSig.cancel_as_multi') === '20b828103bd8707ae82138a7b6026f1e59c9d4dff68bb87c59e47ff49451689b'
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     * # </weight>
     */
    get asV35(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v35.Timepoint, callHash: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingCancelCandidateBondLessCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.cancel_candidate_bond_less')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel pending request to adjust the collator candidate self bond
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.cancel_candidate_bond_less') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Cancel pending request to adjust the collator candidate self bond
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingCancelDelegationRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.cancel_delegation_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel request to change an existing delegation.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.cancel_delegation_request') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    /**
     * Cancel request to change an existing delegation.
     */
    get asV34(): {candidate: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingCancelLeaveCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.cancel_leave_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel open request to leave candidates
     * - only callable by collator account
     * - result upon successful call is the candidate is active in the candidate pool
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.cancel_leave_candidates') === '686eeafa55cefbea4fd57209c34b1a2e10fd7c57584a53285401aa0463a9bbf2'
    }

    /**
     * Cancel open request to leave candidates
     * - only callable by collator account
     * - result upon successful call is the candidate is active in the candidate pool
     */
    get asV34(): {candidateCount: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingCancelLeaveDelegatorsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.cancel_leave_delegators')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a pending request to exit the set of delegators. Success clears the pending exit
     * request (thereby resetting the delay upon another `leave_delegators` call).
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.cancel_leave_delegators') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Cancel a pending request to exit the set of delegators. Success clears the pending exit
     * request (thereby resetting the delay upon another `leave_delegators` call).
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingCandidateBondLessCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.candidate_bond_less')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Bond less for collator candidates
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.candidate_bond_less') === 'cd01c75bba8be1109a7311fe5e14ce439715dc5bae824e0d2efba8754cecb877'
    }

    /**
     *  Bond less for collator candidates
     */
    get asV23(): {less: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingCandidateBondMoreCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.candidate_bond_more')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Bond more for collator candidates
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.candidate_bond_more') === '510e5796be2276dabdf492d2ba358a0c7af13907fdbdd359f76149808ca0700c'
    }

    /**
     *  Bond more for collator candidates
     */
    get asV23(): {more: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.delegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * If caller is not a delegator and not a collator, then join the set of delegators
     * If caller is a delegator, then makes delegation to change their delegation state
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.delegate') === '6bd4be6fdeb0ecc32c3e92513629b3a6d48507fbb35d96c6b064c6cd341986ab'
    }

    /**
     * If caller is not a delegator and not a collator, then join the set of delegators
     * If caller is a delegator, then makes delegation to change their delegation state
     */
    get asV34(): {candidate: Uint8Array, amount: bigint, candidateDelegationCount: number, delegationCount: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingDelegateWithAutoCompoundCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.delegate_with_auto_compound')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * If caller is not a delegator and not a collator, then join the set of delegators
     * If caller is a delegator, then makes delegation to change their delegation state
     * Sets the auto-compound config for the delegation
     */
    get isV42(): boolean {
        return this._chain.getCallHash('ParachainStaking.delegate_with_auto_compound') === '0b13c1d11ad7c25a14c1b74075071fae4826d7c59bdcc19d97346c9b1d898d6f'
    }

    /**
     * If caller is not a delegator and not a collator, then join the set of delegators
     * If caller is a delegator, then makes delegation to change their delegation state
     * Sets the auto-compound config for the delegation
     */
    get asV42(): {candidate: Uint8Array, amount: bigint, autoCompound: number, candidateDelegationCount: number, candidateAutoCompoundingDelegationCount: number, delegationCount: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingDelegatorBondMoreCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.delegator_bond_more')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Bond more for delegators wrt a specific collator candidate.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.delegator_bond_more') === 'debb98f2c325ef3ce6531623262b5f1c403bb6de0995265100236b858551153e'
    }

    /**
     * Bond more for delegators wrt a specific collator candidate.
     */
    get asV34(): {candidate: Uint8Array, more: bigint} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingExecuteCandidateBondLessCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.execute_candidate_bond_less')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Execute pending request to adjust the collator candidate self bond
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.execute_candidate_bond_less') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    /**
     * Execute pending request to adjust the collator candidate self bond
     */
    get asV34(): {candidate: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingExecuteDelegationRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.execute_delegation_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Execute pending request to change an existing delegation
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.execute_delegation_request') === '8ba9c8419f942f7dc005f60d76fef2d5a2b7c155c3fcd80e46a147ece5d6839b'
    }

    /**
     * Execute pending request to change an existing delegation
     */
    get asV34(): {delegator: Uint8Array, candidate: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingExecuteLeaveCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.execute_leave_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Execute leave candidates request
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.execute_leave_candidates') === 'caa7100e0b104a03283f85af95c22efa9e45d339932b3eaa724333c174e5d444'
    }

    /**
     * Execute leave candidates request
     */
    get asV34(): {candidate: Uint8Array, candidateDelegationCount: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingExecuteLeaveDelegatorsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.execute_leave_delegators')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Execute the right to exit the set of delegators and revoke all ongoing delegations.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.execute_leave_delegators') === '87f197b1000bf658ea078162cbf1156981ffbcd5433eec3f2b36bb076bff9048'
    }

    /**
     * Execute the right to exit the set of delegators and revoke all ongoing delegations.
     */
    get asV34(): {delegator: Uint8Array, delegationCount: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingGoOfflineCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.go_offline')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Temporarily leave the set of collator candidates without unbonding
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.go_offline') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Temporarily leave the set of collator candidates without unbonding
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingGoOnlineCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.go_online')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Rejoin the set of collator candidates if previously had called `go_offline`
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.go_online') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Rejoin the set of collator candidates if previously had called `go_offline`
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingHotfixMigrateCollatorsFromReserveToLocksCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.hotfix_migrate_collators_from_reserve_to_locks')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Hotfix to migrate a collator's reserve to a lock. For any given collator in the
     * provided list:
     * * this fn is idempotent
     * * is safe to call if the collator doesn't exist
     * * is safe to call if the collator has been migrated
     * * is safe to call if the collator is a collator (this is a no-op)
     * 
     * weight calculation:
     *   reads:
     *    * CollatorReserveToLockMigrations
     *    * CandidateInfo
     *   writes:
     *    * unreserve()
     *    * set_lock()
     *    * CollatorReserveToLockMigrations
     *   other: 50M flat weight + 100M weight per item
     */
    get isV40(): boolean {
        return this._chain.getCallHash('ParachainStaking.hotfix_migrate_collators_from_reserve_to_locks') === 'a832a7ce12f70e4e43cd819b84df9a249b63c0b473acf0473249c6606083fb4e'
    }

    /**
     * Hotfix to migrate a collator's reserve to a lock. For any given collator in the
     * provided list:
     * * this fn is idempotent
     * * is safe to call if the collator doesn't exist
     * * is safe to call if the collator has been migrated
     * * is safe to call if the collator is a collator (this is a no-op)
     * 
     * weight calculation:
     *   reads:
     *    * CollatorReserveToLockMigrations
     *    * CandidateInfo
     *   writes:
     *    * unreserve()
     *    * set_lock()
     *    * CollatorReserveToLockMigrations
     *   other: 50M flat weight + 100M weight per item
     */
    get asV40(): {collators: Uint8Array[]} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingHotfixMigrateDelegatorsFromReserveToLocksCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.hotfix_migrate_delegators_from_reserve_to_locks')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Hotfix to migrate a delegator's reserve to a lock. For any given delegator in the
     * provided list:
     * * this fn is idempotent
     * * is safe to call if the delegator doesn't exist
     * * is safe to call if the delegator has been migrated
     * * is safe to call if the delegator is a collator (this is a no-op)
     * 
     * weight calculation:
     *   reads:
     *    * DelegatorReserveToLockMigrations
     *    * DelegatorState
     *   writes:
     *    * unreserve()
     *    * set_lock()
     *    * DelegatorReserveToLockMigrations
     *   other: 50M flat weight + 100M weight per item
     */
    get isV40(): boolean {
        return this._chain.getCallHash('ParachainStaking.hotfix_migrate_delegators_from_reserve_to_locks') === 'a7b6e7be42cd9a827a5d97e6f67acbb921166623737132ce5c5f96964233e4cb'
    }

    /**
     * Hotfix to migrate a delegator's reserve to a lock. For any given delegator in the
     * provided list:
     * * this fn is idempotent
     * * is safe to call if the delegator doesn't exist
     * * is safe to call if the delegator has been migrated
     * * is safe to call if the delegator is a collator (this is a no-op)
     * 
     * weight calculation:
     *   reads:
     *    * DelegatorReserveToLockMigrations
     *    * DelegatorState
     *   writes:
     *    * unreserve()
     *    * set_lock()
     *    * DelegatorReserveToLockMigrations
     *   other: 50M flat weight + 100M weight per item
     */
    get asV40(): {delegators: Uint8Array[]} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingHotfixRemoveDelegationRequestsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.hotfix_remove_delegation_requests')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Hotfix patch to remove all delegation requests not removed during a candidate exit
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.hotfix_remove_delegation_requests') === 'a7b6e7be42cd9a827a5d97e6f67acbb921166623737132ce5c5f96964233e4cb'
    }

    /**
     * Hotfix patch to remove all delegation requests not removed during a candidate exit
     */
    get asV34(): {delegators: Uint8Array[]} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingHotfixRemoveDelegationRequestsExitedCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.hotfix_remove_delegation_requests_exited_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Hotfix to remove existing empty entries for candidates that have left.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('ParachainStaking.hotfix_remove_delegation_requests_exited_candidates') === '4735b3424961cde4392c4aa4a49b608c3a968b79ca43d53639eb628d11ef359d'
    }

    /**
     * Hotfix to remove existing empty entries for candidates that have left.
     */
    get asV40(): {candidates: Uint8Array[]} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingHotfixUpdateCandidatePoolValueCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.hotfix_update_candidate_pool_value')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Hotfix patch to correct and update CandidatePool value for candidates that have
     * called candidate_bond_more when it did not update the CandidatePool value
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.hotfix_update_candidate_pool_value') === '4735b3424961cde4392c4aa4a49b608c3a968b79ca43d53639eb628d11ef359d'
    }

    /**
     * Hotfix patch to correct and update CandidatePool value for candidates that have
     * called candidate_bond_more when it did not update the CandidatePool value
     */
    get asV34(): {candidates: Uint8Array[]} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingJoinCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.join_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Join the set of collator candidates
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.join_candidates') === '6832aa96f7b5bf6addd0c8cc4f9ae51f63c4c8a705cc5cc698fa8a24c1fc4476'
    }

    /**
     *  Join the set of collator candidates
     */
    get asV23(): {bond: bigint, candidateCount: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingLeaveCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.leave_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Request to leave the set of candidates. If successful, the account is immediately
     *  removed from the candidate pool to prevent selection as a collator, but unbonding is
     *  executed with a delay of `T::LeaveCandidates` rounds.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.leave_candidates') === '686eeafa55cefbea4fd57209c34b1a2e10fd7c57584a53285401aa0463a9bbf2'
    }

    /**
     *  Request to leave the set of candidates. If successful, the account is immediately
     *  removed from the candidate pool to prevent selection as a collator, but unbonding is
     *  executed with a delay of `T::LeaveCandidates` rounds.
     */
    get asV23(): {candidateCount: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingLeaveNominatorsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.leave_nominators')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Request to leave the set of nominators. If successful, the nominator is scheduled
     *  to exit
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.leave_nominators') === '1c19765f5ee05401b33e7e6623eea13d66150b5cd83894fbbc9bc048c67e256f'
    }

    /**
     *  Request to leave the set of nominators. If successful, the nominator is scheduled
     *  to exit
     */
    get asV23(): {nominationCount: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingNominateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.nominate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  If caller is not a nominator, then join the set of nominators
     *  If caller is a nominator, then makes nomination to change their nomination state
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.nominate') === '477fb6fa5b6a57dbe811ecc91443e9842fc21c9d1054afb6f09dd89fe954b5cd'
    }

    /**
     *  If caller is not a nominator, then join the set of nominators
     *  If caller is a nominator, then makes nomination to change their nomination state
     */
    get asV23(): {collator: Uint8Array, amount: bigint, collatorNominatorCount: number, nominationCount: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingNominatorBondLessCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.nominator_bond_less')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Bond less for nominators with respect to a specific nominator candidate
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.nominator_bond_less') === 'b7d3cc42ff1703f4be55374d43c628a3d3eeb0e241650a9fcded5927d9cfb782'
    }

    /**
     *  Bond less for nominators with respect to a specific nominator candidate
     */
    get asV23(): {candidate: Uint8Array, less: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingNominatorBondMoreCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.nominator_bond_more')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Bond more for nominators with respect to a specific collator candidate
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.nominator_bond_more') === 'debb98f2c325ef3ce6531623262b5f1c403bb6de0995265100236b858551153e'
    }

    /**
     *  Bond more for nominators with respect to a specific collator candidate
     */
    get asV23(): {candidate: Uint8Array, more: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingRevokeNominationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.revoke_nomination')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Request to revoke an existing nomination. If successful, the nomination is scheduled
     *  to exit
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.revoke_nomination') === '1641c8b21dbb44dcf4348fc275e26b0a6c49308dd1214c697fc424f3b29fe39e'
    }

    /**
     *  Request to revoke an existing nomination. If successful, the nomination is scheduled
     *  to exit
     */
    get asV23(): {collator: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingScheduleCandidateBondLessCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.schedule_candidate_bond_less')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request by collator candidate to decrease self bond by `less`
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.schedule_candidate_bond_less') === 'cd01c75bba8be1109a7311fe5e14ce439715dc5bae824e0d2efba8754cecb877'
    }

    /**
     * Request by collator candidate to decrease self bond by `less`
     */
    get asV34(): {less: bigint} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingScheduleDelegatorBondLessCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.schedule_delegator_bond_less')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request bond less for delegators wrt a specific collator candidate.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.schedule_delegator_bond_less') === 'b7d3cc42ff1703f4be55374d43c628a3d3eeb0e241650a9fcded5927d9cfb782'
    }

    /**
     * Request bond less for delegators wrt a specific collator candidate.
     */
    get asV34(): {candidate: Uint8Array, less: bigint} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingScheduleLeaveCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.schedule_leave_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request to leave the set of candidates. If successful, the account is immediately
     * removed from the candidate pool to prevent selection as a collator.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.schedule_leave_candidates') === '686eeafa55cefbea4fd57209c34b1a2e10fd7c57584a53285401aa0463a9bbf2'
    }

    /**
     * Request to leave the set of candidates. If successful, the account is immediately
     * removed from the candidate pool to prevent selection as a collator.
     */
    get asV34(): {candidateCount: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingScheduleLeaveDelegatorsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.schedule_leave_delegators')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request to leave the set of delegators. If successful, the caller is scheduled
     * to be allowed to exit. Success forbids future delegator actions until the request is
     * invoked or cancelled.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.schedule_leave_delegators') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Request to leave the set of delegators. If successful, the caller is scheduled
     * to be allowed to exit. Success forbids future delegator actions until the request is
     * invoked or cancelled.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingScheduleRevokeDelegationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.schedule_revoke_delegation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request to revoke an existing delegation. If successful, the delegation is scheduled
     * to be allowed to be revoked via the `execute_delegation_request` extrinsic.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('ParachainStaking.schedule_revoke_delegation') === '1641c8b21dbb44dcf4348fc275e26b0a6c49308dd1214c697fc424f3b29fe39e'
    }

    /**
     * Request to revoke an existing delegation. If successful, the delegation is scheduled
     * to be allowed to be revoked via the `execute_delegation_request` extrinsic.
     */
    get asV34(): {collator: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingSetAutoCompoundCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.set_auto_compound')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the auto-compounding reward percentage for a delegation.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('ParachainStaking.set_auto_compound') === '07d8f90b2608c610ea071bb43fdfa44e740b1f35d034ab14903f9423e8aa46d4'
    }

    /**
     * Sets the auto-compounding reward percentage for a delegation.
     */
    get asV42(): {candidate: Uint8Array, value: number, candidateAutoCompoundingDelegationCountHint: number, delegationCountHint: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingSetBlocksPerRoundCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.set_blocks_per_round')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set blocks per round
     *  - if called with `new` less than length of current round, will transition immediately
     *  in the next block
     *  - also updates per-round inflation config
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.set_blocks_per_round') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     *  Set blocks per round
     *  - if called with `new` less than length of current round, will transition immediately
     *  in the next block
     *  - also updates per-round inflation config
     */
    get asV23(): {new: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingSetCollatorCommissionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.set_collator_commission')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the commission for all collators
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.set_collator_commission') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     *  Set the commission for all collators
     */
    get asV23(): {new: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingSetInflationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.set_inflation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the annual inflation rate to derive per-round inflation
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.set_inflation') === 'e86699d449d0acec4d05b8546124a465bb57e4057899508d9c5b5b7578137e92'
    }

    /**
     *  Set the annual inflation rate to derive per-round inflation
     */
    get asV23(): {schedule: [number, number]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the annual inflation rate to derive per-round inflation
     */
    get isV32(): boolean {
        return this._chain.getCallHash('ParachainStaking.set_inflation') === 'fafdf61154c0388cdff2eb8d210526e9ba2d925398effdbea9ed8f4cf289a16c'
    }

    /**
     * Set the annual inflation rate to derive per-round inflation
     */
    get asV32(): {schedule: v32.Type_262} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingSetParachainBondAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.set_parachain_bond_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the account that will hold funds set aside for parachain bond
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.set_parachain_bond_account') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     *  Set the account that will hold funds set aside for parachain bond
     */
    get asV23(): {new: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingSetParachainBondReservePercentCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.set_parachain_bond_reserve_percent')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the percent of inflation set aside for parachain bond
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.set_parachain_bond_reserve_percent') === '09500100ee0ef7de7a517c77b545786d373383efeb1a42ac3f0ddaccc0f7486a'
    }

    /**
     *  Set the percent of inflation set aside for parachain bond
     */
    get asV23(): {new: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingSetStakingExpectationsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.set_staking_expectations')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the expectations for total staked. These expectations determine the issuance for
     *  the round according to logic in `fn compute_issuance`
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.set_staking_expectations') === '3343f8f9379b21b8d55b30a42037e8e79a4619e2f5bf5c75fc063c8c3d68c7cf'
    }

    /**
     *  Set the expectations for total staked. These expectations determine the issuance for
     *  the round according to logic in `fn compute_issuance`
     */
    get asV23(): {expectations: [bigint, bigint]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the expectations for total staked. These expectations determine the issuance for
     * the round according to logic in `fn compute_issuance`
     */
    get isV32(): boolean {
        return this._chain.getCallHash('ParachainStaking.set_staking_expectations') === 'd129d2f224f991bf699793fc7629e2ba1f9f2b4e2993d7dd7b3b4f6aee0d9c3a'
    }

    /**
     * Set the expectations for total staked. These expectations determine the issuance for
     * the round according to logic in `fn compute_issuance`
     */
    get asV32(): {expectations: v32.Type_261} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainStakingSetTotalSelectedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainStaking.set_total_selected')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the total number of collator candidates selected per round
     *  - changes are not applied until the start of the next round
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainStaking.set_total_selected') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     *  Set the total number of collator candidates selected per round
     *  - changes are not applied until the start of the next round
     */
    get asV23(): {new: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemAuthorizeUpgradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.authorize_upgrade')
        this._chain = ctx._chain
        this.call = call
    }

    get isV23(): boolean {
        return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    get asV23(): {codeHash: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemEnactAuthorizedUpgradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.enact_authorized_upgrade')
        this._chain = ctx._chain
        this.call = call
    }

    get isV23(): boolean {
        return this._chain.getCallHash('ParachainSystem.enact_authorized_upgrade') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    get asV23(): {code: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemSetUpgradeBlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.set_upgrade_block')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force an already scheduled validation function upgrade to happen on a particular block.
     * 
     *  Note that coordinating this block for the upgrade has to happen independently on the
     *  relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
     *  and this bypasses all checks and and normal protocols. Very easy to brick your chain
     *  if done wrong.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainSystem.set_upgrade_block') === '4552b4c9a331e27653dd826226a620c7ef63c4af553ba86f11cdfd63fb1b1028'
    }

    /**
     *  Force an already scheduled validation function upgrade to happen on a particular block.
     * 
     *  Note that coordinating this block for the upgrade has to happen independently on the
     *  relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
     *  and this bypasses all checks and and normal protocols. Very easy to brick your chain
     *  if done wrong.
     */
    get asV23(): {relayChainBlock: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemSetValidationDataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.set_validation_data')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the current validation data.
     * 
     *  This should be invoked exactly once per block. It will panic at the finalization
     *  phase if the call was not invoked.
     * 
     *  The dispatch origin for this call must be `Inherent`
     * 
     *  As a side effect, this function upgrades the current validation function
     *  if the appropriate time has come.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('ParachainSystem.set_validation_data') === '1c5ccd2e20e489b2af94fa8dd217e01a6e6ba71ce31552e10b97a4dd37774131'
    }

    /**
     *  Set the current validation data.
     * 
     *  This should be invoked exactly once per block. It will panic at the finalization
     *  phase if the call was not invoked.
     * 
     *  The dispatch origin for this call must be `Inherent`
     * 
     *  As a side effect, this function upgrades the current validation function
     *  if the appropriate time has come.
     */
    get asV23(): {data: v23.ParachainInherentData} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the current validation data.
     * 
     * This should be invoked exactly once per block. It will panic at the finalization
     * phase if the call was not invoked.
     * 
     * The dispatch origin for this call must be `Inherent`
     * 
     * As a side effect, this function upgrades the current validation function
     * if the appropriate time has come.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('ParachainSystem.set_validation_data') === 'df843f97e4c625e033541d5f205c5889f3131bdb4549570310e924d96769c1cd'
    }

    /**
     * Set the current validation data.
     * 
     * This should be invoked exactly once per block. It will panic at the finalization
     * phase if the call was not invoked.
     * 
     * The dispatch origin for this call must be `Inherent`
     * 
     * As a side effect, this function upgrades the current validation function
     * if the appropriate time has come.
     */
    get asV32(): {data: v32.ParachainInherentData} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemSudoSendUpwardMessageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.sudo_send_upward_message')
        this._chain = ctx._chain
        this.call = call
    }

    get isV23(): boolean {
        return this._chain.getCallHash('ParachainSystem.sudo_send_upward_message') === '34457b6daded32ddc4ec3a5a21e34b9af8dcd7d190a5a7833fa8a7ed53b31206'
    }

    get asV23(): {message: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Execute an XCM message from a local, signed, origin.
     * 
     *  An event is deposited indicating whether `msg` could be executed completely or only
     *  partially.
     * 
     *  No more than `max_weight` will be used in its attempted execution. If this is less than the
     *  maximum amount of weight that the message could take to be executed, then no execution
     *  attempt will be made.
     * 
     *  NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     *  to completion; only that *some* of it was executed.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === '1ffde01afb18b1a97929d4a10da3c986b82c27846dbac20bc988ae3c255b1cba'
    }

    /**
     *  Execute an XCM message from a local, signed, origin.
     * 
     *  An event is deposited indicating whether `msg` could be executed completely or only
     *  partially.
     * 
     *  No more than `max_weight` will be used in its attempted execution. If this is less than the
     *  maximum amount of weight that the message could take to be executed, then no execution
     *  attempt will be made.
     * 
     *  NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     *  to completion; only that *some* of it was executed.
     */
    get asV23(): {message: v23.VersionedXcm, maxWeight: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === '41f7d0295efed5db73229cbd1e9f1fdc0e7f9e159af3b17a10880e74bcdb3ad4'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asV32(): {message: v32.Type_278, maxWeight: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === 'c6251691ab3319ecee95442d381c308f9ada155e423798c908cbd6b063aa26b4'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asV34(): {message: v34.Type_287, maxWeight: bigint} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === '76149fbd7c3d18753d366687484d7bf651dd9b444cec7c11b944262b7ee4dcf5'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asV42(): {message: v42.Type_324, maxWeight: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceDefaultXcmVersionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_default_xcm_version')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
    }

    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    get asV32(): {maybeXcmVersion: (number | undefined)} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceSubscribeVersionNotifyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_subscribe_version_notify')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get asV32(): {location: v32.VersionedMultiLocation} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceUnsubscribeVersionNotifyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_unsubscribe_version_notify')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_unsubscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get asV32(): {location: v32.VersionedMultiLocation} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceXcmVersionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_xcm_version')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '3bdd3ba3db54facd962462ff1c2c0ede1b428cf9119b36a4e96fa86916145f75'
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get asV32(): {location: v32.V1MultiLocation, xcmVersion: number} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmLimitedReserveTransferAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.limited_reserve_transfer_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV33(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV33(): {dest: v33.VersionedMultiLocation, beneficiary: v33.VersionedMultiLocation, assets: v33.VersionedMultiAssets, feeAssetItem: number, weightLimit: v33.V2WeightLimit} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmLimitedTeleportAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.limited_teleport_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV33(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV33(): {dest: v33.VersionedMultiLocation, beneficiary: v33.VersionedMultiLocation, assets: v33.VersionedMultiAssets, feeAssetItem: number, weightLimit: v33.V2WeightLimit} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmReserveTransferAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.reserve_transfer_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     *  a notification XCM.
     * 
     *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *    an `AccountId32` value.
     *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *    `dest` side.
     *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *    `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === 'c4558a18f0400069c14aaa3575bad0bb84b99ac94f206e8ab02890276f174ff4'
    }

    /**
     *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     *  a notification XCM.
     * 
     *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *    an `AccountId32` value.
     *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *    `dest` side.
     *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *    `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    get asV23(): {dest: v23.VersionedMultiLocation, beneficiary: v23.VersionedMultiLocation, assets: v23.VersionedMultiAssets, feeAssetItem: number, destWeight: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asV32(): {dest: v32.VersionedMultiLocation, beneficiary: v32.VersionedMultiLocation, assets: v32.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmSendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.send')
        this._chain = ctx._chain
        this.call = call
    }

    get isV23(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === 'b9446b649ff7dbe4e0f16a4dbefc5f448b11996984d1113c46c0e449cd846f9f'
    }

    get asV23(): {dest: v23.VersionedMultiLocation, message: v23.VersionedXcm} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    get isV32(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === '9ec4149ae6cee6240a6e2aa06a8ef90285e68be29dd0de109b35af7922311609'
    }

    get asV32(): {dest: v32.VersionedMultiLocation, message: v32.VersionedXcm} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    get isV34(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
    }

    get asV34(): {dest: v34.VersionedMultiLocation, message: v34.VersionedXcm} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmTeleportAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.teleport_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Teleport some assets from the local chain to some destination chain.
     * 
     *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *    an `AccountId32` value.
     *  - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *    `dest` side. May not be empty.
     *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PolkadotXcm.teleport_assets') === 'c4558a18f0400069c14aaa3575bad0bb84b99ac94f206e8ab02890276f174ff4'
    }

    /**
     *  Teleport some assets from the local chain to some destination chain.
     * 
     *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *    an `AccountId32` value.
     *  - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *    `dest` side. May not be empty.
     *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    get asV23(): {dest: v23.VersionedMultiLocation, beneficiary: v23.VersionedMultiLocation, assets: v23.VersionedMultiAssets, feeAssetItem: number, destWeight: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('PolkadotXcm.teleport_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    get asV32(): {dest: v32.VersionedMultiLocation, beneficiary: v32.VersionedMultiLocation, assets: v32.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsAdminDestroyMarketCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.admin_destroy_market')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Allows the `ApprovalOrigin` to immediately destroy a market.
     * 
     *  todo: this should check if there's any outstanding funds reserved if it stays
     *  in for production
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.admin_destroy_market') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     *  Allows the `ApprovalOrigin` to immediately destroy a market.
     * 
     *  todo: this should check if there's any outstanding funds reserved if it stays
     *  in for production
     */
    get asV23(): {marketId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Destroy a market, including its outcome assets, market account and pool account.
     * 
     * Must be called by `DestroyOrigin`. Bonds (unless already returned) are slashed without
     * exception. Can currently only be used for destroying CPMM markets.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.admin_destroy_market') === 'b56842a00d00b24c300d8cd4359235b469945c309694d455d2ba2bd1de5d0d4e'
    }

    /**
     * Destroy a market, including its outcome assets, market account and pool account.
     * 
     * Must be called by `DestroyOrigin`. Bonds (unless already returned) are slashed without
     * exception. Can currently only be used for destroying CPMM markets.
     */
    get asV36(): {marketId: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsAdminMoveMarketToClosedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.admin_move_market_to_closed')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Allows the `ApprovalOrigin` to immediately move an open market to closed.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.admin_move_market_to_closed') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     *  Allows the `ApprovalOrigin` to immediately move an open market to closed.
     */
    get asV23(): {marketId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Allows the `CloseOrigin` to immediately move an open market to closed.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.admin_move_market_to_closed') === 'b56842a00d00b24c300d8cd4359235b469945c309694d455d2ba2bd1de5d0d4e'
    }

    /**
     * Allows the `CloseOrigin` to immediately move an open market to closed.
     */
    get asV36(): {marketId: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsAdminMoveMarketToResolvedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.admin_move_market_to_resolved')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Allows the `ApprovalOrigin` to immediately move a reported or disputed
     *  market to resolved.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.admin_move_market_to_resolved') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     *  Allows the `ApprovalOrigin` to immediately move a reported or disputed
     *  market to resolved.
     */
    get asV23(): {marketId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Allows the `ResolveOrigin` to immediately move a reported or disputed
     * market to resolved.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.admin_move_market_to_resolved') === 'b56842a00d00b24c300d8cd4359235b469945c309694d455d2ba2bd1de5d0d4e'
    }

    /**
     * Allows the `ResolveOrigin` to immediately move a reported or disputed
     * market to resolved.
     */
    get asV36(): {marketId: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsApproveMarketCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.approve_market')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Approves a market that is waiting for approval from the
     *  advisory committee.
     * 
     *  NOTE: Returns the proposer's bond since the market has been
     *  deemed valid by an advisory committee.
     * 
     *  NOTE: Can only be called by the `ApprovalOrigin`.
     * 
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.approve_market') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     *  Approves a market that is waiting for approval from the
     *  advisory committee.
     * 
     *  NOTE: Returns the proposer's bond since the market has been
     *  deemed valid by an advisory committee.
     * 
     *  NOTE: Can only be called by the `ApprovalOrigin`.
     * 
     */
    get asV23(): {marketId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Approves a market that is waiting for approval from the
     * advisory committee.
     * 
     * NOTE: Returns the proposer's bond since the market has been
     * deemed valid by an advisory committee.
     * 
     * NOTE: Can only be called by the `ApprovalOrigin`.
     * 
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.approve_market') === 'b56842a00d00b24c300d8cd4359235b469945c309694d455d2ba2bd1de5d0d4e'
    }

    /**
     * Approves a market that is waiting for approval from the
     * advisory committee.
     * 
     * NOTE: Returns the proposer's bond since the market has been
     * deemed valid by an advisory committee.
     * 
     * NOTE: Can only be called by the `ApprovalOrigin`.
     * 
     */
    get asV36(): {marketId: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsBuyCompleteSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.buy_complete_set')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Buys the complete set of outcome shares of a market. For example, when calling this
     *  function on a categorical market with five different outcomes, five different shares
     *  will be transferred to the callee.
     * 
     *  The amount of each share will equal the provided `amount` parameter.
     * 
     *  NOTE: This is the only way to create new shares.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.buy_complete_set') === '24bee0add4bd4d3fa77c9af08535cc8be97a37570b8fa6d7b7cdfccc89b256bc'
    }

    /**
     *  Buys the complete set of outcome shares of a market. For example, when calling this
     *  function on a categorical market with five different outcomes, five different shares
     *  will be transferred to the callee.
     * 
     *  The amount of each share will equal the provided `amount` parameter.
     * 
     *  NOTE: This is the only way to create new shares.
     */
    get asV23(): {marketId: bigint, amount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Buy a complete set of outcome shares of a market.
     * 
     * The cost of a full set is exactly one unit of the market's base asset. For example,
     * when calling `buy_complete_set(origin, 1, 2)` on a categorical market with five
     * different outcomes, the caller pays `2` of the base asset and receives `2` of each of
     * the five outcome tokens.
     * 
     * NOTE: This is the only way to create new shares of outcome tokens.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.buy_complete_set') === '06ba6cbad072072662d6af5ac6a3b0f69d8e8275bd9b9b80b5ed648de6926981'
    }

    /**
     * Buy a complete set of outcome shares of a market.
     * 
     * The cost of a full set is exactly one unit of the market's base asset. For example,
     * when calling `buy_complete_set(origin, 1, 2)` on a categorical market with five
     * different outcomes, the caller pays `2` of the base asset and receives `2` of each of
     * the five outcome tokens.
     * 
     * NOTE: This is the only way to create new shares of outcome tokens.
     */
    get asV36(): {marketId: bigint, amount: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsCancelPendingMarketCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.cancel_pending_market')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  NOTE: Only for PoC probably - should only allow rejections
     *  in a production environment since this better aligns incentives.
     *  See also: Polkadot Treasury
     * 
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.cancel_pending_market') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     *  NOTE: Only for PoC probably - should only allow rejections
     *  in a production environment since this better aligns incentives.
     *  See also: Polkadot Treasury
     * 
     */
    get asV23(): {marketId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsCreateCategoricalMarketCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.create_categorical_market')
        this._chain = ctx._chain
        this.call = call
    }

    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_categorical_market') === '79b3d278fe2bbe390aeba080ade992fea0ba071e05a1dc34b59754056e4e0029'
    }

    get asV23(): {oracle: Uint8Array, period: v23.MarketPeriod, metadata: v23.MultiHash, creation: v23.MarketCreation, categories: number, mdm: v23.MarketDisputeMechanism, scoringRule: v23.ScoringRule} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    get isV32(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_categorical_market') === 'aa99c8b889b55578b353639dad12c0c5427a3ce5466b8a86a6689a3991650edd'
    }

    get asV32(): {oracle: Uint8Array, period: v32.MarketPeriod, metadata: v32.MultiHash, creation: v32.MarketCreation, categories: number, mdm: v32.MarketDisputeMechanism, scoringRule: v32.ScoringRule} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_categorical_market') === '26996e1b7d0a4953b7b92860ed592daab56354028c7901c864b3fa8b3baa3d1d'
    }

    get asV36(): {oracle: Uint8Array, period: v36.MarketPeriod, metadata: v36.MultiHash, creation: v36.MarketCreation, categories: number, mdm: v36.MarketDisputeMechanism, scoringRule: v36.ScoringRule} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsCreateCpmmMarketAndDeployAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.create_cpmm_market_and_deploy_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  This function combines the creation of a market, the buying of a complete set of
     *  outcome assets, the deployment of the minimum amount of outcome assets and
     *  the optional deployment of additional outcome asset.
     * 
     *  # Arguments
     * 
     *  * `oracle`: The oracle of the market who will report the correct outcome.
     *  * `end`: The ending block of the market.
     *  * `metadata`: A hash pointer to the metadata of the market.
     *  * `creation`: The creation type of the market (permissionless or advised).
     *  * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     *  * `amount`: The amount of a complete set of assets that should be bought.
     *  * `weights`: The relative denormalized weight of each asset price.
     *  * `pool_join_additional_assets`: A list of 3-tuples containing the asset amounts to
     *      additionally deploy into the market. The first element is the asset, the market
     *      id contained within will be replaced by the market id of the market that was just
     *      deployed within this function call, the second element in the 3-tuple contains the
     *      amount of that asset type that should be added as additional liquidity and the
     *      last element within the 3-tuple contains the minimum pool amount (see Swaps pallet)
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === '0375bb0a2409528225708f1261b7ca5c6be02fa26bd3d3ef2574a982de7102d2'
    }

    /**
     *  This function combines the creation of a market, the buying of a complete set of
     *  outcome assets, the deployment of the minimum amount of outcome assets and
     *  the optional deployment of additional outcome asset.
     * 
     *  # Arguments
     * 
     *  * `oracle`: The oracle of the market who will report the correct outcome.
     *  * `end`: The ending block of the market.
     *  * `metadata`: A hash pointer to the metadata of the market.
     *  * `creation`: The creation type of the market (permissionless or advised).
     *  * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     *  * `amount`: The amount of a complete set of assets that should be bought.
     *  * `weights`: The relative denormalized weight of each asset price.
     *  * `pool_join_additional_assets`: A list of 3-tuples containing the asset amounts to
     *      additionally deploy into the market. The first element is the asset, the market
     *      id contained within will be replaced by the market id of the market that was just
     *      deployed within this function call, the second element in the 3-tuple contains the
     *      amount of that asset type that should be added as additional liquidity and the
     *      last element within the 3-tuple contains the minimum pool amount (see Swaps pallet)
     */
    get asV23(): {oracle: Uint8Array, period: v23.MarketPeriod, metadata: v23.MultiHash, creation: v23.MarketCreation, assets: v23.MarketType, amount: bigint, weights: bigint[], poolJoinAdditionalAssets: [v23.Asset, bigint, bigint][], mdm: v23.MarketDisputeMechanism} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  This function combines the creation of a market, the buying of a complete set of
     *  outcome assets, the deployment of the minimum amount of outcome assets and
     *  the optional deployment of additional outcome asset.
     * 
     *  # Arguments
     * 
     *  * `oracle`: The oracle of the market who will report the correct outcome.
     *  * `end`: The ending block of the market.
     *  * `metadata`: A hash pointer to the metadata of the market.
     *  * `creation`: The creation type of the market (permissionless or advised).
     *  * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     *  * `amounts`: A vector containing the amount of each outcome asset that should be
     *      deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *      asset will be bought in quantities specified by the highest value in this vector.
     *      Any value that is lower than the highest value in the vector signals that not
     *      all assets should be deployed. For example, `amounts = [120, 150]` means, that after
     *      deployment 30 of the first outcome asset will be kept.
     *  * `weights`: The relative denormalized weight of each asset price.
     *  * `keep`: Specifies how many assets to keep. Any left-over assets that are specified as
     *      zero in this vector are sold. Must have the same length as amounts.
     */
    get isV26(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === 'c7f3c095bb441c860a59c154da91819afc9a8ade8c42c882ab8fa394b204955a'
    }

    /**
     *  This function combines the creation of a market, the buying of a complete set of
     *  outcome assets, the deployment of the minimum amount of outcome assets and
     *  the optional deployment of additional outcome asset.
     * 
     *  # Arguments
     * 
     *  * `oracle`: The oracle of the market who will report the correct outcome.
     *  * `end`: The ending block of the market.
     *  * `metadata`: A hash pointer to the metadata of the market.
     *  * `creation`: The creation type of the market (permissionless or advised).
     *  * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     *  * `amounts`: A vector containing the amount of each outcome asset that should be
     *      deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *      asset will be bought in quantities specified by the highest value in this vector.
     *      Any value that is lower than the highest value in the vector signals that not
     *      all assets should be deployed. For example, `amounts = [120, 150]` means, that after
     *      deployment 30 of the first outcome asset will be kept.
     *  * `weights`: The relative denormalized weight of each asset price.
     *  * `keep`: Specifies how many assets to keep. Any left-over assets that are specified as
     *      zero in this vector are sold. Must have the same length as amounts.
     */
    get asV26(): {oracle: Uint8Array, period: v26.MarketPeriod, metadata: v26.MultiHash, creation: v26.MarketCreation, assets: v26.MarketType, mdm: v26.MarketDisputeMechanism, amounts: bigint[], weights: bigint[], keep: bigint[]} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  This function combines the creation of a market, the buying of a complete set of
     *  outcome assets, the deployment of the minimum amount of outcome assets and
     *  the optional deployment of additional outcome asset.
     * 
     *  # Arguments
     * 
     *  * `oracle`: The oracle of the market who will report the correct outcome.
     *  * `period`: The active period of the market.
     *  * `metadata`: A hash pointer to the metadata of the market.
     *  * `creation`: The creation type of the market (permissionless or advised).
     *  * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     *  * `mdm`: The market dispute mechanism.
     *  * `amount_base_asset`: The amount of the base asset that should be deployed.
     *  * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *      deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *      asset will be bought in quantities specified by the highest value in this vector.
     *      Any value that is lower than the highest value in the vector signals that not
     *      all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
     *      means, that after deployment 30 of the first outcome asset will be kept.
     *  * `weights`: The relative denormalized weight of each asset price.
     *  * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
     *      assets that are specified as zero in this vector are sold. Must have the same
     *      length as `amount_outcome_assets`.
     */
    get isV29(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === 'd9c6c8b665a4c74bdfaf75a7aaaf293ecf07b6ffc1434d79ab2379903f4b4573'
    }

    /**
     *  This function combines the creation of a market, the buying of a complete set of
     *  outcome assets, the deployment of the minimum amount of outcome assets and
     *  the optional deployment of additional outcome asset.
     * 
     *  # Arguments
     * 
     *  * `oracle`: The oracle of the market who will report the correct outcome.
     *  * `period`: The active period of the market.
     *  * `metadata`: A hash pointer to the metadata of the market.
     *  * `creation`: The creation type of the market (permissionless or advised).
     *  * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     *  * `mdm`: The market dispute mechanism.
     *  * `amount_base_asset`: The amount of the base asset that should be deployed.
     *  * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *      deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *      asset will be bought in quantities specified by the highest value in this vector.
     *      Any value that is lower than the highest value in the vector signals that not
     *      all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
     *      means, that after deployment 30 of the first outcome asset will be kept.
     *  * `weights`: The relative denormalized weight of each asset price.
     *  * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
     *      assets that are specified as zero in this vector are sold. Must have the same
     *      length as `amount_outcome_assets`.
     */
    get asV29(): {oracle: Uint8Array, period: v29.MarketPeriod, metadata: v29.MultiHash, creation: v29.MarketCreation, assets: v29.MarketType, mdm: v29.MarketDisputeMechanism, amountBaseAsset: bigint, amountOutcomeAssets: bigint[], weights: bigint[], keepOutcomeAssets: bigint[]} {
        assert(this.isV29)
        return this._chain.decodeCall(this.call)
    }

    /**
     * This function combines the creation of a market, the buying of a complete set of
     * outcome assets, the deployment of the minimum amount of outcome assets and
     * the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `creation`: The creation type of the market (permissionless or advised).
     * * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     * * `mdm`: The market dispute mechanism.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     * * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
     *     assets that are specified as zero in this vector are sold. Must have the same
     *     length as `amount_outcome_assets`.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === '2c495201c7b66a7d175d54cc0b24048b3d792de25b67c5bda0bec8c652e60bd3'
    }

    /**
     * This function combines the creation of a market, the buying of a complete set of
     * outcome assets, the deployment of the minimum amount of outcome assets and
     * the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `creation`: The creation type of the market (permissionless or advised).
     * * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     * * `mdm`: The market dispute mechanism.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     * * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
     *     assets that are specified as zero in this vector are sold. Must have the same
     *     length as `amount_outcome_assets`.
     */
    get asV32(): {oracle: Uint8Array, period: v32.MarketPeriod, metadata: v32.MultiHash, creation: v32.MarketCreation, assets: v32.MarketType, mdm: v32.MarketDisputeMechanism, amountBaseAsset: bigint, amountOutcomeAssets: bigint[], weights: bigint[], keepOutcomeAssets: bigint[]} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * This function combines the creation of a permissionless market, the buying of a
     * complete set of outcome assets, the deployment of the minimum amount of outcome assets
     * and the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     * * `mdm`: The market dispute mechanism.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     * * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
     *     assets that are specified as zero in this vector are sold. Must have the same
     *     length as `amount_outcome_assets`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === 'fef84dfc8065be94615c7cfa0158a6ec1105d9962587387473cb5bc58caeb153'
    }

    /**
     * This function combines the creation of a permissionless market, the buying of a
     * complete set of outcome assets, the deployment of the minimum amount of outcome assets
     * and the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     * * `mdm`: The market dispute mechanism.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     * * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
     *     assets that are specified as zero in this vector are sold. Must have the same
     *     length as `amount_outcome_assets`.
     */
    get asV34(): {oracle: Uint8Array, period: v34.MarketPeriod, metadata: v34.MultiHash, assets: v34.MarketType, mdm: v34.MarketDisputeMechanism, amountBaseAsset: bigint, amountOutcomeAssets: bigint[], weights: bigint[], keepOutcomeAssets: bigint[]} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * This function combines the creation of a permissionless market, the buying of a
     * complete set of outcome assets, the deployment of the minimum amount of outcome assets
     * and the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     * * `mdm`: The market dispute mechanism.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get isV35(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === 'c303d80ff6bb0c9e95378a256b1d7904e6372d76a5c33af0bccd128d3bbf8e15'
    }

    /**
     * This function combines the creation of a permissionless market, the buying of a
     * complete set of outcome assets, the deployment of the minimum amount of outcome assets
     * and the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     * * `mdm`: The market dispute mechanism.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get asV35(): {oracle: Uint8Array, period: v35.MarketPeriod, metadata: v35.MultiHash, assets: v35.MarketType, mdm: v35.MarketDisputeMechanism, amountBaseAsset: bigint, amountOutcomeAssets: bigint[], weights: bigint[]} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * This function combines the creation of a permissionless market, the buying of a
     * complete set of outcome assets, the deployment of the minimum amount of outcome assets
     * and the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     * * `mdm`: The market dispute mechanism.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === '7ef79cda6fa9ad4a1c9c1074a87c72069c1b3389f3fbec0e5ae8985d05d77cc7'
    }

    /**
     * This function combines the creation of a permissionless market, the buying of a
     * complete set of outcome assets, the deployment of the minimum amount of outcome assets
     * and the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `assets`: The type and the parameters of an asset (for example 5 categorical assets).
     * * `mdm`: The market dispute mechanism.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]`
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get asV36(): {oracle: Uint8Array, period: v36.MarketPeriod, metadata: v36.MultiHash, assets: v36.MarketType, mdm: v36.MarketDisputeMechanism, amountBaseAsset: bigint, amountOutcomeAssets: bigint[], weights: bigint[]} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `mdm`: The market dispute mechanism.
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get isV37(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === '9e58cfc5ef0305b791a61f269257c7a7df7ae18597bf5232b3e0eccfa6acafee'
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `mdm`: The market dispute mechanism.
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get asV37(): {oracle: Uint8Array, period: v37.MarketPeriod, metadata: v37.MultiHash, marketType: v37.MarketType, mdm: v37.MarketDisputeMechanism, amount: bigint, weights: bigint[]} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `dispute_mechanism`: The market dispute mechanism.
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === '9eaf787ca9d1a482b8868eb94955a2eaf13e49ce354c69e31fb4ea3e2d1ed6af'
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `dispute_mechanism`: The market dispute mechanism.
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get asV38(): {oracle: Uint8Array, period: v38.MarketPeriod, metadata: v38.MultiHash, marketType: v38.MarketType, disputeMechanism: v38.MarketDisputeMechanism, amount: bigint, weights: bigint[]} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `dispute_mechanism`: The market dispute mechanism.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === 'abc95628d23df3bc6fec5b1483a90e7597173c4a7e79607c70a02884996eb128'
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `dispute_mechanism`: The market dispute mechanism.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get asV39(): {oracle: Uint8Array, period: v39.MarketPeriod, metadata: v39.MultiHash, marketType: v39.MarketType, disputeMechanism: v39.MarketDisputeMechanism, swapFee: bigint, amount: bigint, weights: bigint[]} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `dispute_mechanism`: The market dispute mechanism.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     * 
     * # Weight
     * 
     * Complexity:
     * - create_market: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     * - buy_complete_set: `O(n)`, where `n` is the number of outcome assets
     * for the categorical market.
     * - deploy_swap_pool_for_market_open_pool: `O(n)`,
     * where n is the number of outcome assets for the categorical market.
     * - deploy_swap_pool_for_market_future_pool: `O(n + m)`,
     * where `n` is the number of outcome assets for the categorical market
     * and `m` is the number of market ids,
     * which open at the same time as the specified market.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === '8de2d15bca0337d9eb79c15855e5b3fde56f4defa3cc3d545e16cf6c0b094d7c'
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `dispute_mechanism`: The market dispute mechanism.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     * 
     * # Weight
     * 
     * Complexity:
     * - create_market: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     * - buy_complete_set: `O(n)`, where `n` is the number of outcome assets
     * for the categorical market.
     * - deploy_swap_pool_for_market_open_pool: `O(n)`,
     * where n is the number of outcome assets for the categorical market.
     * - deploy_swap_pool_for_market_future_pool: `O(n + m)`,
     * where `n` is the number of outcome assets for the categorical market
     * and `m` is the number of market ids,
     * which open at the same time as the specified market.
     */
    get asV40(): {oracle: Uint8Array, period: v40.MarketPeriod, deadlines: v40.Deadlines, metadata: v40.MultiHash, marketType: v40.MarketType, disputeMechanism: v40.MarketDisputeMechanism, swapFee: bigint, amount: bigint, weights: bigint[]} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `dispute_mechanism`: The market dispute mechanism.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     * 
     * # Weight
     * 
     * Complexity:
     * - create_market: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     * - buy_complete_set: `O(n)`, where `n` is the number of outcome assets
     * for the categorical market.
     * - deploy_swap_pool_for_market_open_pool: `O(n)`,
     * where n is the number of outcome assets for the categorical market.
     * - deploy_swap_pool_for_market_future_pool: `O(n + m)`,
     * where `n` is the number of outcome assets for the categorical market
     * and `m` is the number of market ids,
     * which open at the same time as the specified market.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === 'b6d0d6f85c1cab54c2737cfe79fc83e5ec62def78cd647c6607f0ed3ebce21cb'
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `dispute_mechanism`: The market dispute mechanism.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     * 
     * # Weight
     * 
     * Complexity:
     * - create_market: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     * - buy_complete_set: `O(n)`, where `n` is the number of outcome assets
     * for the categorical market.
     * - deploy_swap_pool_for_market_open_pool: `O(n)`,
     * where n is the number of outcome assets for the categorical market.
     * - deploy_swap_pool_for_market_future_pool: `O(n + m)`,
     * where `n` is the number of outcome assets for the categorical market
     * and `m` is the number of market ids,
     * which open at the same time as the specified market.
     */
    get asV41(): {oracle: Uint8Array, period: v41.MarketPeriod, deadlines: v41.Deadlines, metadata: v41.MultiHash, marketType: v41.MarketType, disputeMechanism: v41.MarketDisputeMechanism, swapFee: bigint, amount: bigint, weights: bigint[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `dispute_mechanism`: The market dispute mechanism.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     * 
     * # Weight
     * 
     * Complexity:
     * - create_market: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     * - buy_complete_set: `O(n)`, where `n` is the number of outcome assets
     * for the categorical market.
     * - deploy_swap_pool_for_market_open_pool: `O(n)`,
     * where n is the number of outcome assets for the categorical market.
     * - deploy_swap_pool_for_market_future_pool: `O(n + m)`,
     * where `n` is the number of outcome assets for the categorical market
     * and `m` is the number of market ids,
     * which open at the same time as the specified market.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_cpmm_market_and_deploy_assets') === 'b27aafab1eb1568de26d1bd301b63c72dda9af8ad59c7094216a4cb00a0d9515'
    }

    /**
     * Create a permissionless market, buy complete sets and deploy a pool with specified
     * liquidity.
     * 
     * # Arguments
     * 
     * * `oracle`: The oracle of the market who will report the correct outcome.
     * * `period`: The active period of the market.
     * * `metadata`: A hash pointer to the metadata of the market.
     * * `market_type`: The type of the market.
     * * `dispute_mechanism`: The market dispute mechanism.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     * 
     * # Weight
     * 
     * Complexity:
     * - create_market: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     * - buy_complete_set: `O(n)`, where `n` is the number of outcome assets
     * for the categorical market.
     * - deploy_swap_pool_for_market_open_pool: `O(n)`,
     * where n is the number of outcome assets for the categorical market.
     * - deploy_swap_pool_for_market_future_pool: `O(n + m)`,
     * where `n` is the number of outcome assets for the categorical market
     * and `m` is the number of market ids,
     * which open at the same time as the specified market.
     */
    get asV42(): {baseAsset: v42.Asset, oracle: Uint8Array, period: v42.MarketPeriod, deadlines: v42.Deadlines, metadata: v42.MultiHash, marketType: v42.MarketType, disputeMechanism: v42.MarketDisputeMechanism, swapFee: bigint, amount: bigint, weights: bigint[]} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsCreateMarketCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.create_market')
        this._chain = ctx._chain
        this.call = call
    }

    get isV37(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_market') === 'e60cf69037a0117004ccdc9f0c8f5ab10a4df905f894bae1ce7192205a85ca1c'
    }

    get asV37(): {oracle: Uint8Array, period: v37.MarketPeriod, metadata: v37.MultiHash, creation: v37.MarketCreation, marketType: v37.MarketType, mdm: v37.MarketDisputeMechanism, scoringRule: v37.ScoringRule} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    get isV38(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_market') === 'a15e80c43f846aa331c759ba875e0947cdebe2587f51ae97c4f6d605373da161'
    }

    get asV38(): {oracle: Uint8Array, period: v38.MarketPeriod, metadata: v38.MultiHash, creation: v38.MarketCreation, marketType: v38.MarketType, disputeMechanism: v38.MarketDisputeMechanism, scoringRule: v38.ScoringRule} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_market') === '47baff6c51e317bf5ca53b0cec13d565a9235c070dedc39d27d6bf0f3ecfa469'
    }

    /**
     * Creates a market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     */
    get asV40(): {oracle: Uint8Array, period: v40.MarketPeriod, deadlines: v40.Deadlines, metadata: v40.MultiHash, creation: v40.MarketCreation, marketType: v40.MarketType, disputeMechanism: v40.MarketDisputeMechanism, scoringRule: v40.ScoringRule} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_market') === '392763b0f144e8da43afbc6eecc187995f32db91c89bd0e76f1b6c7480f4a892'
    }

    /**
     * Creates a market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     */
    get asV41(): {oracle: Uint8Array, period: v41.MarketPeriod, deadlines: v41.Deadlines, metadata: v41.MultiHash, creation: v41.MarketCreation, marketType: v41.MarketType, disputeMechanism: v41.MarketDisputeMechanism, scoringRule: v41.ScoringRule} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_market') === '1bd41fa3d7d596b0ecc6481e08646f88bef522adcff244bce93d284236da5d2b'
    }

    /**
     * Creates a market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of market ids,
     * which close at the same time as the specified market.
     */
    get asV42(): {baseAsset: v42.Asset, oracle: Uint8Array, period: v42.MarketPeriod, deadlines: v42.Deadlines, metadata: v42.MultiHash, creation: v42.MarketCreation, marketType: v42.MarketType, disputeMechanism: v42.MarketDisputeMechanism, scoringRule: v42.ScoringRule} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsCreateScalarMarketCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.create_scalar_market')
        this._chain = ctx._chain
        this.call = call
    }

    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_scalar_market') === '9f5773c6564c093fe9ad2b2967ce9edda2403533a2a22d3011d02f6b0d529d74'
    }

    get asV23(): {oracle: Uint8Array, period: v23.MarketPeriod, metadata: v23.MultiHash, creation: v23.MarketCreation, outcomeRange: [bigint, bigint], mdm: v23.MarketDisputeMechanism, scoringRule: v23.ScoringRule} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    get isV32(): boolean {
        return this._chain.getCallHash('PredictionMarkets.create_scalar_market') === '288f9bf9b7ddba74fbfb453ccf305bea1cf251f9c0f2d7f904fd988a64b9aafb'
    }

    get asV32(): {oracle: Uint8Array, period: v32.MarketPeriod, metadata: v32.MultiHash, creation: v32.MarketCreation, outcomeRange: v32.RangeInclusive, mdm: v32.MarketDisputeMechanism, scoringRule: v32.ScoringRule} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsDeploySwapPoolAndAdditionalLiqudityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.deploy_swap_pool_and_additional_liqudity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  This function combines the creation of a market, the buying of a complete set of
     *  outcome assets, the deployment of the minimum amount of outcome assets and
     *  the optional deployment of additional outcome asset.
     * 
     *  # Arguments
     * 
     *  * `oracle`: The oracle of the market who will report the correct outcome.
     *  * `market_id`: Id of the market for that the pool should be created and populated.
     *  * `amounts`: A vector containing the amount of each outcome asset that should be
     *      deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *      asset will be bought in quantities specified by the highest value in this vector.
     *      Any value that is lower than the highest value in the vector signals that not
     *      all assets should be deployed. For example, `amounts = [120, 150]` means, that after
     *      deployment 30 of the first outcome asset will be kept.
     *  * `weights`: The relative denormalized weight of each asset price.
     *  * `keep`: Specifies how many assets to keep. Any left-over assets that are specified as
     *      zero in this vector are sold. Must have the same length as amounts.
     */
    get isV26(): boolean {
        return this._chain.getCallHash('PredictionMarkets.deploy_swap_pool_and_additional_liqudity') === '261bc4e195b85c2a6b88df013b094df5aeb3008b2312b9ba35aa92685cd14687'
    }

    /**
     *  This function combines the creation of a market, the buying of a complete set of
     *  outcome assets, the deployment of the minimum amount of outcome assets and
     *  the optional deployment of additional outcome asset.
     * 
     *  # Arguments
     * 
     *  * `oracle`: The oracle of the market who will report the correct outcome.
     *  * `market_id`: Id of the market for that the pool should be created and populated.
     *  * `amounts`: A vector containing the amount of each outcome asset that should be
     *      deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *      asset will be bought in quantities specified by the highest value in this vector.
     *      Any value that is lower than the highest value in the vector signals that not
     *      all assets should be deployed. For example, `amounts = [120, 150]` means, that after
     *      deployment 30 of the first outcome asset will be kept.
     *  * `weights`: The relative denormalized weight of each asset price.
     *  * `keep`: Specifies how many assets to keep. Any left-over assets that are specified as
     *      zero in this vector are sold. Must have the same length as amounts.
     */
    get asV26(): {marketId: bigint, amounts: bigint[], weights: bigint[], keep: bigint[]} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsDeploySwapPoolAndAdditionalLiquidityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.deploy_swap_pool_and_additional_liquidity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  This function combines the creation of a market, the buying of a complete set of
     *  outcome assets, the deployment of the minimum amount of outcome assets and
     *  the optional deployment of additional outcome asset.
     * 
     *  # Arguments
     * 
     *  * `market_id`: Id of the market for that the pool should be created and populated.
     *  * `amount_base_asset`: The amount of the base asset that should be deployed.
     *  * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *      deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *      asset will be bought in quantities specified by the highest value in this vector.
     *      Any value that is lower than the highest value in the vector signals that not
     *      all assets should be deployed. For example, `amount_outcome_assets = [120, 150]
     *      means, that after deployment 30 of the first outcome asset will be kept.
     *  * `weights`: The relative denormalized weight of each asset price.
     *  * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
     *      assets that are specified as zero in this vector are sold. Must have the same
     *      length as `amount_outcome_assets`.
     */
    get isV29(): boolean {
        return this._chain.getCallHash('PredictionMarkets.deploy_swap_pool_and_additional_liquidity') === '79e2ec99119b0776373b805d4c8d12b06ef7b24d84182945b6fc8a287315f503'
    }

    /**
     *  This function combines the creation of a market, the buying of a complete set of
     *  outcome assets, the deployment of the minimum amount of outcome assets and
     *  the optional deployment of additional outcome asset.
     * 
     *  # Arguments
     * 
     *  * `market_id`: Id of the market for that the pool should be created and populated.
     *  * `amount_base_asset`: The amount of the base asset that should be deployed.
     *  * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *      deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *      asset will be bought in quantities specified by the highest value in this vector.
     *      Any value that is lower than the highest value in the vector signals that not
     *      all assets should be deployed. For example, `amount_outcome_assets = [120, 150]
     *      means, that after deployment 30 of the first outcome asset will be kept.
     *  * `weights`: The relative denormalized weight of each asset price.
     *  * `keep_outcome_assets`: Specifies how many outcome assets to keep. Any left-over
     *      assets that are specified as zero in this vector are sold. Must have the same
     *      length as `amount_outcome_assets`.
     */
    get asV29(): {marketId: bigint, amountBaseAsset: bigint, amountOutcomeAssets: bigint[], weights: bigint[], keepOutcomeAssets: bigint[]} {
        assert(this.isV29)
        return this._chain.decodeCall(this.call)
    }

    /**
     * This function combines the creation of a market, the buying of a complete set of
     * outcome assets, the deployment of the minimum amount of outcome assets and
     * the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `market_id`: Id of the market for that the pool should be created and populated.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get isV35(): boolean {
        return this._chain.getCallHash('PredictionMarkets.deploy_swap_pool_and_additional_liquidity') === 'cbc6c18e53923d32b91b1577e9b67f906d67be47443e2303087035f85728bdcb'
    }

    /**
     * This function combines the creation of a market, the buying of a complete set of
     * outcome assets, the deployment of the minimum amount of outcome assets and
     * the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `market_id`: Id of the market for that the pool should be created and populated.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get asV35(): {marketId: bigint, amountBaseAsset: bigint, amountOutcomeAssets: bigint[], weights: bigint[]} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * This function combines the creation of a market, the buying of a complete set of
     * outcome assets, the deployment of the minimum amount of outcome assets and
     * the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `market_id`: Id of the market for that the pool should be created and populated.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.deploy_swap_pool_and_additional_liquidity') === '1f97f89ea401e4a56a274c924718328aec4d43e04aec45edc9fa09c9f1552455'
    }

    /**
     * This function combines the creation of a market, the buying of a complete set of
     * outcome assets, the deployment of the minimum amount of outcome assets and
     * the optional deployment of additional outcome asset.
     * 
     * # Arguments
     * 
     * * `market_id`: Id of the market for that the pool should be created and populated.
     * * `amount_base_asset`: The amount of the base asset that should be deployed.
     * * `amount_outcome_assets`: A vector containing the amount of each outcome asset that should be
     *     deployed. The highest value will be used to buy a complete set, i.e. every outcome
     *     asset will be bought in quantities specified by the highest value in this vector.
     *     Any value that is lower than the highest value in the vector signals that not
     *     all assets should be deployed. For example, `amount_outcome_assets = [120, 150]
     *     means, that after deployment 30 of the first outcome asset will be kept.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get asV36(): {marketId: bigint, amountBaseAsset: bigint, amountOutcomeAssets: bigint[], weights: bigint[]} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Buy complete sets and deploy a pool with specified liquidity for a market.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market.
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get isV37(): boolean {
        return this._chain.getCallHash('PredictionMarkets.deploy_swap_pool_and_additional_liquidity') === '9cf37a3add903ed705eff9fd9889e95f1c89373e1553be3a93578611cae6ffbd'
    }

    /**
     * Buy complete sets and deploy a pool with specified liquidity for a market.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market.
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get asV37(): {marketId: bigint, amount: bigint, weights: bigint[]} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Buy complete sets and deploy a pool with specified liquidity for a market.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each outcome asset. The sum of the
     *     weights must be less or equal to _half_ of the `MaxTotalWeight` constant of the
     *     swaps pallet.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('PredictionMarkets.deploy_swap_pool_and_additional_liquidity') === 'd6b5d241525ab8f64d0f66f433a98d423efa97c635ac7f6924c46e153dc5155e'
    }

    /**
     * Buy complete sets and deploy a pool with specified liquidity for a market.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each outcome asset. The sum of the
     *     weights must be less or equal to _half_ of the `MaxTotalWeight` constant of the
     *     swaps pallet.
     */
    get asV39(): {marketId: bigint, swapFee: bigint, amount: bigint, weights: bigint[]} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsDeploySwapPoolForMarketCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.deploy_swap_pool_for_market')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Deploys a new pool for the market. This pallet keeps track of a single
     *  canonical swap pool for each market in `market_to_swap_pool`.
     * 
     *  The sender should have enough funds to cover all of the required
     *  shares to seed the pool.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.deploy_swap_pool_for_market') === '2dac8b9e56731f031d8dfe9731b4be7040158c13843af984499675934b68accb'
    }

    /**
     *  Deploys a new pool for the market. This pallet keeps track of a single
     *  canonical swap pool for each market in `market_to_swap_pool`.
     * 
     *  The sender should have enough funds to cover all of the required
     *  shares to seed the pool.
     */
    get asV23(): {marketId: bigint, weights: bigint[]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Deploys a new pool for the market. This pallet keeps track of a single
     * canonical swap pool for each market in `market_to_swap_pool`.
     * 
     * The sender should have enough funds to cover all of the required
     * shares to seed the pool.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.deploy_swap_pool_for_market') === 'c68d2d26de9830b30f2390682212f90e8f44227f262d2cb5c72ab5dfba47fd19'
    }

    /**
     * Deploys a new pool for the market. This pallet keeps track of a single
     * canonical swap pool for each market in `market_to_swap_pool`.
     * 
     * The sender should have enough funds to cover all of the required
     * shares to seed the pool.
     */
    get asV36(): {marketId: bigint, weights: bigint[]} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Deploy a pool with specified liquidity for a market.
     * 
     * The sender must have enough funds to cover all of the required shares to seed the pool.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market.
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get isV37(): boolean {
        return this._chain.getCallHash('PredictionMarkets.deploy_swap_pool_for_market') === '9cf37a3add903ed705eff9fd9889e95f1c89373e1553be3a93578611cae6ffbd'
    }

    /**
     * Deploy a pool with specified liquidity for a market.
     * 
     * The sender must have enough funds to cover all of the required shares to seed the pool.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market.
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each asset price.
     */
    get asV37(): {marketId: bigint, amount: bigint, weights: bigint[]} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Deploy a pool with specified liquidity for a market.
     * 
     * The sender must have enough funds to cover all of the required shares to seed the pool.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each outcome asset. The sum of the
     *     weights must be less or equal to _half_ of the `MaxTotalWeight` constant of the
     *     swaps pallet.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('PredictionMarkets.deploy_swap_pool_for_market') === 'd6b5d241525ab8f64d0f66f433a98d423efa97c635ac7f6924c46e153dc5155e'
    }

    /**
     * Deploy a pool with specified liquidity for a market.
     * 
     * The sender must have enough funds to cover all of the required shares to seed the pool.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market.
     * * `swap_fee`: The swap fee, specified as fixed-point ratio (0.1 equals 10% fee)
     * * `amount`: The amount of each token to add to the pool.
     * * `weights`: The relative denormalized weight of each outcome asset. The sum of the
     *     weights must be less or equal to _half_ of the `MaxTotalWeight` constant of the
     *     swaps pallet.
     */
    get asV39(): {marketId: bigint, swapFee: bigint, amount: bigint, weights: bigint[]} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsDisputeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.dispute')
        this._chain = ctx._chain
        this.call = call
    }

    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.dispute') === '76b7a7c25591d79bb3a7a6938a8aa342e474b3ed9f777640d5c70824598c13e8'
    }

    get asV23(): {marketId: bigint, outcome: v23.OutcomeReport} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.dispute') === '00ac2f1da1166d983e89ebfff8ab3653b5f41c0d158ec65bc1ee0e4d773b06d6'
    }

    get asV36(): {marketId: bigint, outcome: v36.OutcomeReport} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsEditMarketCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.edit_market')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Edit a proposed market for which request is made.
     * 
     * Edit can only be made by the creator of the market.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market to edit.
     * * `oracle`: Oracle to edit market.
     * * `period`: MarketPeriod to edit market.
     * * `deadlines`: Deadlines to edit market.
     * * `metadata`: MultiHash metadata to edit market.
     * * `market_type`: MarketType to edit market.
     * * `dispute_mechanism`: MarketDisputeMechanism to edit market.
     * * `scoring_rule`: ScoringRule to edit market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of markets
     * which end at the same time as the market before the edit.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('PredictionMarkets.edit_market') === 'df703ccb83be8e21bae616d869b3d348eee3ec5d8328a72f7e419c1f8ed0da44'
    }

    /**
     * Edit a proposed market for which request is made.
     * 
     * Edit can only be made by the creator of the market.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market to edit.
     * * `oracle`: Oracle to edit market.
     * * `period`: MarketPeriod to edit market.
     * * `deadlines`: Deadlines to edit market.
     * * `metadata`: MultiHash metadata to edit market.
     * * `market_type`: MarketType to edit market.
     * * `dispute_mechanism`: MarketDisputeMechanism to edit market.
     * * `scoring_rule`: ScoringRule to edit market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of markets
     * which end at the same time as the market before the edit.
     */
    get asV41(): {marketId: bigint, oracle: Uint8Array, period: v41.MarketPeriod, deadlines: v41.Deadlines, metadata: v41.MultiHash, marketType: v41.MarketType, disputeMechanism: v41.MarketDisputeMechanism, scoringRule: v41.ScoringRule} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Edit a proposed market for which request is made.
     * 
     * Edit can only be made by the creator of the market.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market to edit.
     * * `oracle`: Oracle to edit market.
     * * `period`: MarketPeriod to edit market.
     * * `deadlines`: Deadlines to edit market.
     * * `metadata`: MultiHash metadata to edit market.
     * * `market_type`: MarketType to edit market.
     * * `dispute_mechanism`: MarketDisputeMechanism to edit market.
     * * `scoring_rule`: ScoringRule to edit market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of markets
     * which end at the same time as the market before the edit.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('PredictionMarkets.edit_market') === '12d6c6e6d2a5ed6c9ad0c077d4f7cf84428d5f89043e2361e536bcb7ca922ff0'
    }

    /**
     * Edit a proposed market for which request is made.
     * 
     * Edit can only be made by the creator of the market.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market to edit.
     * * `oracle`: Oracle to edit market.
     * * `period`: MarketPeriod to edit market.
     * * `deadlines`: Deadlines to edit market.
     * * `metadata`: MultiHash metadata to edit market.
     * * `market_type`: MarketType to edit market.
     * * `dispute_mechanism`: MarketDisputeMechanism to edit market.
     * * `scoring_rule`: ScoringRule to edit market.
     * 
     * # Weight
     * 
     * Complexity: `O(n)`, where `n` is the number of markets
     * which end at the same time as the market before the edit.
     */
    get asV42(): {baseAsset: v42.Asset, marketId: bigint, oracle: Uint8Array, period: v42.MarketPeriod, deadlines: v42.Deadlines, metadata: v42.MultiHash, marketType: v42.MarketType, disputeMechanism: v42.MarketDisputeMechanism, scoringRule: v42.ScoringRule} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsGlobalDisputeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.global_dispute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Starts a global dispute.
     * 
     *  NOTE: Requires the market to be already disputed `MaxDisputes` amount of times.
     * 
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.global_dispute') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     *  Starts a global dispute.
     * 
     *  NOTE: Requires the market to be already disputed `MaxDisputes` amount of times.
     * 
     */
    get asV23(): {marketId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsRedeemSharesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.redeem_shares')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Redeems the winning shares of a prediction market.
     * 
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.redeem_shares') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     *  Redeems the winning shares of a prediction market.
     * 
     */
    get asV23(): {marketId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Redeems the winning shares of a prediction market.
     * 
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.redeem_shares') === 'b56842a00d00b24c300d8cd4359235b469945c309694d455d2ba2bd1de5d0d4e'
    }

    /**
     * Redeems the winning shares of a prediction market.
     * 
     */
    get asV36(): {marketId: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsRejectMarketCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.reject_market')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Rejects a market that is waiting for approval from the advisory
     *  committee.
     * 
     *  NOTE: Will slash the reserved `AdvisoryBond` from the market creator.
     * 
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.reject_market') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     *  Rejects a market that is waiting for approval from the advisory
     *  committee.
     * 
     *  NOTE: Will slash the reserved `AdvisoryBond` from the market creator.
     * 
     */
    get asV23(): {marketId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Rejects a market that is waiting for approval from the advisory committee.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.reject_market') === 'b56842a00d00b24c300d8cd4359235b469945c309694d455d2ba2bd1de5d0d4e'
    }

    /**
     * Rejects a market that is waiting for approval from the advisory committee.
     */
    get asV36(): {marketId: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Rejects a market that is waiting for approval from the advisory committee.
     * 
     * # Weight
     * 
     * Complexity: `O(n + m)`,
     * where `n` is the number of market ids,
     * which open at the same time as the specified market,
     * and `m` is the number of market ids,
     * which close at the same time as the specified market.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('PredictionMarkets.reject_market') === 'a6a98a07d5e5b185f7318957bbe811b69298d27d3a0764abcfe3aeb23bd1469b'
    }

    /**
     * Rejects a market that is waiting for approval from the advisory committee.
     * 
     * # Weight
     * 
     * Complexity: `O(n + m)`,
     * where `n` is the number of market ids,
     * which open at the same time as the specified market,
     * and `m` is the number of market ids,
     * which close at the same time as the specified market.
     */
    get asV41(): {marketId: bigint, rejectReason: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsReportCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.report')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Reports the outcome of a market.
     * 
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.report') === '76b7a7c25591d79bb3a7a6938a8aa342e474b3ed9f777640d5c70824598c13e8'
    }

    /**
     *  Reports the outcome of a market.
     * 
     */
    get asV23(): {marketId: bigint, outcome: v23.OutcomeReport} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Reports the outcome of a market.
     * 
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.report') === '00ac2f1da1166d983e89ebfff8ab3653b5f41c0d158ec65bc1ee0e4d773b06d6'
    }

    /**
     * Reports the outcome of a market.
     * 
     */
    get asV36(): {marketId: bigint, outcome: v36.OutcomeReport} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsRequestEditCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.request_edit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request an edit to a proposed market.
     * 
     * Can only be called by the `RequestEditOrigin`.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market to edit.
     * * `edit_reason`: An short record of what needs to be changed.
     * 
     * # Weight
     * 
     * Complexity: `O(edit_reason.len())`
     */
    get isV41(): boolean {
        return this._chain.getCallHash('PredictionMarkets.request_edit') === '3ba906f06d23ba891d96dc06114b9afe07fa2b068f3cad95a6f5e58be45a2356'
    }

    /**
     * Request an edit to a proposed market.
     * 
     * Can only be called by the `RequestEditOrigin`.
     * 
     * # Arguments
     * 
     * * `market_id`: The id of the market to edit.
     * * `edit_reason`: An short record of what needs to be changed.
     * 
     * # Weight
     * 
     * Complexity: `O(edit_reason.len())`
     */
    get asV41(): {marketId: bigint, editReason: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsSellCompleteSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.sell_complete_set')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Destroys a complete set of outcomes shares for a market.
     * 
     */
    get isV23(): boolean {
        return this._chain.getCallHash('PredictionMarkets.sell_complete_set') === '24bee0add4bd4d3fa77c9af08535cc8be97a37570b8fa6d7b7cdfccc89b256bc'
    }

    /**
     *  Destroys a complete set of outcomes shares for a market.
     * 
     */
    get asV23(): {marketId: bigint, amount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Sells a complete set of outcomes shares for a market.
     * 
     * Each complete set is sold for one unit of the market's base asset.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('PredictionMarkets.sell_complete_set') === '06ba6cbad072072662d6af5ac6a3b0f69d8e8275bd9b9b80b5ed648de6926981'
    }

    /**
     * Sells a complete set of outcomes shares for a market.
     * 
     * Each complete set is sold for one unit of the market's base asset.
     */
    get asV36(): {marketId: bigint, amount: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class PredictionMarketsStartGlobalDisputeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PredictionMarkets.start_global_dispute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * When the `MaxDisputes` amount of disputes is reached,
     * this allows to start a global dispute.
     * 
     * # Arguments
     * 
     * * `market_id`: The identifier of the market.
     * 
     * NOTE:
     * The outcomes of the disputes and the report outcome
     * are added to the global dispute voting outcomes.
     * The bond of each dispute is the initial vote amount.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('PredictionMarkets.start_global_dispute') === 'b56842a00d00b24c300d8cd4359235b469945c309694d455d2ba2bd1de5d0d4e'
    }

    /**
     * When the `MaxDisputes` amount of disputes is reached,
     * this allows to start a global dispute.
     * 
     * # Arguments
     * 
     * * `market_id`: The identifier of the market.
     * 
     * NOTE:
     * The outcomes of the disputes and the report outcome
     * are added to the global dispute voting outcomes.
     * The bond of each dispute is the initial vote amount.
     */
    get asV41(): {marketId: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageNotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.note_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get asV34(): {bytes: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageRequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.request_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get asV34(): {hash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageUnnotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.unnote_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     */
    get asV34(): {hash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageUnrequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.unrequest_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get asV34(): {hash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyAddProxyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.add_proxy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Proxy.add_proxy') === 'f89b20829e04f596634216a086694d4f3619e3da13fda3b86250003658db2715'
    }

    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV36(): {delegate: Uint8Array, proxyType: v36.ProxyType, delay: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Proxy.add_proxy') === '04f99355277465379e132296c00260a2799bcc465d1b0b9b2edf0cff9b921347'
    }

    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV42(): {delegate: v42.MultiAddress, proxyType: v42.ProxyType, delay: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyAnnounceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.announce')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Proxy.announce') === '886fe5248256b2372151aa5c936f9027a64929a3501efe231a22f1ee868cff3e'
    }

    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV36(): {real: Uint8Array, callHash: Uint8Array} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Proxy.announce') === '1e2ba1b130bab29ab148202fefa1b526f6d362ed3f3d2aaf35cc706821c5cd49'
    }

    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV42(): {real: v42.MultiAddress, callHash: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyAnonymousCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.anonymous')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     * TODO: Might be over counting 1 read
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Proxy.anonymous') === '6abf320b4c4f5c1bb66ea2e5762ea93dd7cef51078225ebb4b39cb23246c8f1d'
    }

    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     * TODO: Might be over counting 1 read
     */
    get asV36(): {proxyType: v36.ProxyType, delay: bigint, index: number} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyKillAnonymousCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.kill_anonymous')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes a previously spawned anonymous proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `anonymous` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `anonymous` to create this account.
     * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `anonymous`.
     * - `height`: The height of the chain when the call to `anonymous` was processed.
     * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created anonymous
     * account whose `anonymous` call has corresponding parameters.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Proxy.kill_anonymous') === 'ea920eac5dc3308e33e4b242b76997aa96090636674644dee9bd35884bc79fa7'
    }

    /**
     * Removes a previously spawned anonymous proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `anonymous` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `anonymous` to create this account.
     * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `anonymous`.
     * - `height`: The height of the chain when the call to `anonymous` was processed.
     * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created anonymous
     * account whose `anonymous` call has corresponding parameters.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV36(): {spawner: Uint8Array, proxyType: v36.ProxyType, index: number, height: bigint, extIndex: number} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Removes a previously spawned anonymous proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `anonymous` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `anonymous` to create this account.
     * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `anonymous`.
     * - `height`: The height of the chain when the call to `anonymous` was processed.
     * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created anonymous
     * account whose `anonymous` call has corresponding parameters.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Proxy.kill_anonymous') === 'f9aa217f3ef9311d067e7f3cb07d47239d40470d3d279183fa11d451e2de9441'
    }

    /**
     * Removes a previously spawned anonymous proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `anonymous` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `anonymous` to create this account.
     * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `anonymous`.
     * - `height`: The height of the chain when the call to `anonymous` was processed.
     * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created anonymous
     * account whose `anonymous` call has corresponding parameters.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV42(): {spawner: v42.MultiAddress, proxyType: v42.ProxyType, index: number, height: bigint, extIndex: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyProxyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.proxy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '4199cc4abe87ffbf81a94fc8804bd53ab87032d165f8a1b4751b4f4da1256103'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV36(): {real: Uint8Array, forceProxyType: (v36.ProxyType | undefined), call: v36.Call} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '4b2d6ad8461995df6599f475e9d87ca94f61e8838d307fea4b1153a6ae824495'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV37(): {real: Uint8Array, forceProxyType: (v37.ProxyType | undefined), call: v37.Call} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'c288e1446533ea681688146359604f302b53e75fd11c7eb21cb820311d4df070'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV38(): {real: Uint8Array, forceProxyType: (v38.ProxyType | undefined), call: v38.Call} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'ad4a20d0b417e5e9718318e1ac4a22fbd4f70b9db4248355b9ec24e6434b6abd'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV39(): {real: Uint8Array, forceProxyType: (v39.ProxyType | undefined), call: v39.Call} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'ba02e280e19cfbe247c17fa4358f10fee37e613f93b8712f50f893e41bd08e66'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV40(): {real: Uint8Array, forceProxyType: (v40.ProxyType | undefined), call: v40.Call} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '68849e2ee40b8e181a56b1c92b75716fd6df0a9c20edfc68fe3d52bd0251d263'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV41(): {real: Uint8Array, forceProxyType: (v41.ProxyType | undefined), call: v41.Call} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '31cd290ae548cd26061020694f684f8c0fabd47ef052b047e36528ae849f73d1'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV42(): {real: v42.MultiAddress, forceProxyType: (v42.ProxyType | undefined), call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyProxyAnnouncedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.proxy_announced')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'e4048692c5c88b5211d9ba88ae5b98e117c2bb463a666865d7f17e3b55e51ea7'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV36(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v36.ProxyType | undefined), call: v36.Call} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '90636e400e84b00bc2e1ec17aab96b7db52c2c59a7558119aac08da7895a0b93'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV37(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v37.ProxyType | undefined), call: v37.Call} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '298fc778562188e9bfbfc7a600d0478e616f3c0ef819ccf4fcd34358cc14b8d0'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV38(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v38.ProxyType | undefined), call: v38.Call} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'b72d982469123b0702a3aa3f008ca2861b3a1254d6999ecaf0fb114253c0d611'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV39(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v39.ProxyType | undefined), call: v39.Call} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'be516dcb0b756d7273f2c6ee7041efc5a7921f2b12a6172d34c06cbab94bace5'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV40(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v40.ProxyType | undefined), call: v40.Call} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '9fdc45e1c00b1207976d2d748c646f7ed61c73e3e61564dd800bcf4280992c60'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV41(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v41.ProxyType | undefined), call: v41.Call} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '92d4463046b1f58197dec7d4a80e763fe1043e79f000ef8d25be026f8e7604c9'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV42(): {delegate: v42.MultiAddress, real: v42.MultiAddress, forceProxyType: (v42.ProxyType | undefined), call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyRejectAnnouncementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.reject_announcement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Proxy.reject_announcement') === '717e6dbb2911f49e34a3b48c48c86b40495423ab31d5b45f0062629c73057f2b'
    }

    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV36(): {delegate: Uint8Array, callHash: Uint8Array} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Proxy.reject_announcement') === 'a1d7c3959dec3e3a68a4ea7b541568e066bd95b7007b052c43ff4736abe9b06b'
    }

    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV42(): {delegate: v42.MultiAddress, callHash: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyRemoveAnnouncementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.remove_announcement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Proxy.remove_announcement') === '886fe5248256b2372151aa5c936f9027a64929a3501efe231a22f1ee868cff3e'
    }

    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV36(): {real: Uint8Array, callHash: Uint8Array} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Proxy.remove_announcement') === '1e2ba1b130bab29ab148202fefa1b526f6d362ed3f3d2aaf35cc706821c5cd49'
    }

    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV42(): {real: v42.MultiAddress, callHash: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyRemoveProxiesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.remove_proxies')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unregister all proxy accounts for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * WARNING: This may be called on accounts created by `anonymous`, however if done, then
     * the unreserved fees will be inaccessible. **All access to this account will be lost.**
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxies') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Unregister all proxy accounts for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * WARNING: This may be called on accounts created by `anonymous`, however if done, then
     * the unreserved fees will be inaccessible. **All access to this account will be lost.**
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV36(): null {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyRemoveProxyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.remove_proxy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxy') === 'f89b20829e04f596634216a086694d4f3619e3da13fda3b86250003658db2715'
    }

    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV36(): {delegate: Uint8Array, proxyType: v36.ProxyType, delay: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxy') === '04f99355277465379e132296c00260a2799bcc465d1b0b9b2edf0cff9b921347'
    }

    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV42(): {delegate: v42.MultiAddress, proxyType: v42.ProxyType, delay: bigint} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Scheduler.cancel') === '40bbc456627fc1823fdcea1556c4f397c4687c11b249d5e20e09639d92023fc9'
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get asV34(): {when: bigint, index: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a named scheduled task.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
    }

    /**
     * Cancel a named scheduled task.
     */
    get asV34(): {id: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Anonymously schedule a task.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '5bddc0d0dfdb6c51a4d518cdb6e986f7274b8eb03af6f1a54f7339f28a15dcdd'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV34(): {when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v34.MaybeHashed} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '9da87ed7705f83abe0c6b4ed2611ce966ee72966bc0c128c0ce97242e63d8410'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV35(): {when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v35.MaybeHashed} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '0d6815750e1a3b446fba343430c53f409d2379e0c22ea99566b657ee13899597'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV36(): {when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v36.MaybeHashed} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '1abab2b51903b0e95999e1f0edfe650ce26f46c80dcb51a5ace9dd1294db6790'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV37(): {when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v37.MaybeHashed} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'db2655862d58759aa3825bae7df8d5ac5a0d308ef562570721c7575fe4f127ef'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV38(): {when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v38.MaybeHashed} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'bc9782a304a21067fffef410bd8500006c3d7a2152dc5318c99d1554ec497ff5'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV39(): {when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v39.MaybeHashed} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'b76cba03d65893c87c1de28b95d1c59ebed60792c2581ab4c8729a51bdc5c686'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV40(): {when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v40.MaybeHashed} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'e67aa8e759b55ca18fb05176ec1deba4d3c48ff392242348218f3af69eb65963'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV41(): {when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v41.MaybeHashed} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '5b6f44aead8cbb8f46e889057f6cd5fa16661ebad7613f3dbd1de181d2b92d75'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV42(): {when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v42.MaybeHashed} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '00dc57cfa63555a2199524cd9a2536d3577b935b738eec028182d33d778ae3d5'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV34(): {after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v34.MaybeHashed} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '16bd7d3e80d3797373de91cab856a8dc4184cff60fc8dffd449dc0e96bf120be'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV35(): {after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v35.MaybeHashed} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '1fd153037894304c366a570b409f447f05aedfb25454c3f94a7879e162a9e28f'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV36(): {after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v36.MaybeHashed} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '09aee6b7f89dec0f09a3be9d6206a7906c9cea82a2e9f787926a1d50b07c7851'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV37(): {after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v37.MaybeHashed} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'dfc56d90d52a97417f6d61ed27cf50f955c9aa63d407946f78ca04cb93f2debb'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV38(): {after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v38.MaybeHashed} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'd85fe7abc518fd134eab63678ebe92d38312caeccc8ef8fc81f44a299bac30a7'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV39(): {after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v39.MaybeHashed} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'cf914c74358477e280ef64986c3771c700ca8a00e4c70ea6b4b4d83349376cab'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV40(): {after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v40.MaybeHashed} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '05566752e3b549039919482d0c9e7fe7eb08721547055799f6dc53bea47e9533'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV41(): {after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v41.MaybeHashed} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'a110478bd7ea1e41676218f245fd6b460d469908bfc69de1cff7d34631d897fd'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV42(): {after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v42.MaybeHashed} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a named task.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '9540c105e635ed5e2f4f666929b1d45c35ef66a8a40ee012801a512ba798c53b'
    }

    /**
     * Schedule a named task.
     */
    get asV34(): {id: Uint8Array, when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v34.MaybeHashed} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'a4886c32937b866278dce8715e8c43791a58d0b0284cf58c91fa67ed6cff57ca'
    }

    /**
     * Schedule a named task.
     */
    get asV35(): {id: Uint8Array, when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v35.MaybeHashed} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '4095674774c3fe1bbb7cd1c3df2191e0ae3e1e012ccd9812ed5f895e0e5883a9'
    }

    /**
     * Schedule a named task.
     */
    get asV36(): {id: Uint8Array, when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v36.MaybeHashed} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '0907f96b22b372e435b3e6f2f4d79e236bbbd13b4b89ca4a2a4f257423b398e5'
    }

    /**
     * Schedule a named task.
     */
    get asV37(): {id: Uint8Array, when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v37.MaybeHashed} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '2e432bbaa7b7e274ebb33c5397be47b69c96c02f7ba8d82489b74187d04f8484'
    }

    /**
     * Schedule a named task.
     */
    get asV38(): {id: Uint8Array, when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v38.MaybeHashed} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'c6d1683d994aa10eb6b161c5159eaa0589b4a35b709bee32a53e004328f582ba'
    }

    /**
     * Schedule a named task.
     */
    get asV39(): {id: Uint8Array, when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v39.MaybeHashed} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'f5ac6e32d8212ce2bf345de6a03679c6bd38d6fb2d40c5a9e407350808d87fa1'
    }

    /**
     * Schedule a named task.
     */
    get asV40(): {id: Uint8Array, when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v40.MaybeHashed} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '0763a12abaf6ee8c6349a7ab794938aed45d8541138df3e454e73877421e0e80'
    }

    /**
     * Schedule a named task.
     */
    get asV41(): {id: Uint8Array, when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v41.MaybeHashed} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '8f7a96c1df71cbc708a79125a63557962df067915cf966fff9f6335a05a47cbb'
    }

    /**
     * Schedule a named task.
     */
    get asV42(): {id: Uint8Array, when: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v42.MaybeHashed} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '8b627b160e72f04174d487c32da22bc494a4c7e957da857f4653eae30a8121cb'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV34(): {id: Uint8Array, after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v34.MaybeHashed} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '9fd89df7b61e42170850b143e0d880962bc73a13b7361d8b2b2e84616194eb51'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV35(): {id: Uint8Array, after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v35.MaybeHashed} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'd713da61c7ae612ef8663fd1b57ee1daac439c3b42d33a4f96dbe13ddd0b80a5'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV36(): {id: Uint8Array, after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v36.MaybeHashed} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '7946b0b2afbd0e31a35e17a898100dcb698cf4b125fea53e085cc8c42d48f977'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV37(): {id: Uint8Array, after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v37.MaybeHashed} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'a6e8513896c60853e65277d7dce9117fda6afbfb36018904b13ac5d4ef5e3a05'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV38(): {id: Uint8Array, after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v38.MaybeHashed} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '8f6deded0b92825d8f7cc3822ce1c6157131dcc77977b6e7e7740b83a2f896d3'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV39(): {id: Uint8Array, after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v39.MaybeHashed} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '290b6c301a2cc9edd98e431527fdf8164568c383765627abe29cb353a1751415'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV40(): {id: Uint8Array, after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v40.MaybeHashed} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'd737ab3ec8c2645096120c79e612dcfba5bfe07aa0288b5bbcab60c571f9ebd0'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV41(): {id: Uint8Array, after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v41.MaybeHashed} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '24c30cde72ac5564f0b7f581337d9c47518a6f4e344e1962a27889db564b4be4'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV42(): {id: Uint8Array, after: bigint, maybePeriodic: ([bigint, number] | undefined), priority: number, call: v42.MaybeHashed} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class StyxCrossCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Styx.cross')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Burns ZTG(styx.burnAmount()) to cross, granting the ability to claim your zeitgeist avatar.
     * The signer can only cross once.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Styx.cross') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Burns ZTG(styx.burnAmount()) to cross, granting the ability to claim your zeitgeist avatar.
     * The signer can only cross once.
     */
    get asV39(): null {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class StyxSetBurnAmountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Styx.set_burn_amount')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the burn amount. Ensures the SetBurnAmountOrigin in the runtime.
     * Intended to be called by a governing body like the council.
     * 
     * # Arguments
     * 
     * * `amount`: The amount of the new burn price
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Styx.set_burn_amount') === 'cb35b858b85c01f9ef5d7452beae3c3ca00714b5a37136bf969c6aa966f6b740'
    }

    /**
     * Set the burn amount. Ensures the SetBurnAmountOrigin in the runtime.
     * Intended to be called by a governing body like the council.
     * 
     * # Arguments
     * 
     * * `amount`: The amount of the new burn price
     */
    get asV39(): {amount: bigint} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSetKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.set_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'd0eb457ece644571cebe79cbdd64ef1453c382048ffec79f9c403f7bc8f90020'
    }

    /**
     *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get asV23(): {new: v23.LookupSource} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
    }

    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    get asV32(): {new: v32.MultiAddress} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '25236f7acfd6d86ff049ddd90b37670574750fd43e5a554d7f09c194cd611420'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get asV23(): {call: v23.Type_61} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '9724cd820b27e44534c186a2597770792d1855450d8aa08ea82eae7e1a9970d7'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get asV26(): {call: v26.Type_64} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get isV29(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'bf7df78906d3b8eedd5513ae4adde227c0ffbfa0b859613afb63d72ca6640151'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get asV29(): {call: v29.Type_64} {
        assert(this.isV29)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '37e10f64258d9e65e4219d0f4a34d4bf3112f32ce0a3240e09be3d223729b5aa'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV32(): {call: v32.Call} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV33(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '096ea2c21570080e68f0a6d6808848151afe8ee7138772691ddecdeb7026f92c'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV33(): {call: v33.Call} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'e3126e6701e42bfec51493935a07c35f7b7dce325c4924643186bf9f4a9784a5'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV34(): {call: v34.Call} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '0ed17a2a72089c0689f2ce43ecef34aba4fab0c303a70e7b4d2fb4d3b05cc2b3'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV35(): {call: v35.Call} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '579fedcb7e58400f4e9960be82287785619344ca1b8559ca7d0112bd425fac98'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV36(): {call: v36.Call} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '8edc2858c6b2b0a1431128136367bd579d364028f7668cbdc006f930ba0f5762'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV37(): {call: v37.Call} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'd2047b55cacc9c9ed5e6dbcc8adbab2b4618e1699366f88da52675c22fa20492'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV38(): {call: v38.Call} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'cf6e6f0b1b6597d8ba8fa8a43ae4a1968b7bdb132763860eaead573c217044c4'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV39(): {call: v39.Call} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'a3ea8b62dd87a4b8dce93d03b6a52e3bc0b14708846a3d696d09d3664c26a0ce'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV40(): {call: v40.Call} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'a337589a357164161815633071b1d86f8e2592b1d6dd22028f5eb6842d7ea689'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV41(): {call: v41.Call} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '7bba7b68de8ee678aea483a6cb940e6920d96bcf05940ecce87e2558d7a4b8c1'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV42(): {call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '354a9c72f7c6a98f8514b0412c45b289a50b066d606e1194b9423ef2a8305f5d'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get asV23(): {who: v23.LookupSource, call: v23.Type_61} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '6dad9e3eaa1c9d73335a655d6be55500851b5e873f3db9533b916dbe028c344a'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get asV26(): {who: v26.LookupSource, call: v26.Type_64} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get isV29(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '157a1529a539f4fc0fe7afb299d8cf7753a28f063ddb3483946039e77d4887dc'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    get asV29(): {who: v29.LookupSource, call: v29.Type_64} {
        assert(this.isV29)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'e0cc462f34b089de7dc2b28b0d16736b613c0f4a75bad6290ae413431ade340e'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV32(): {who: v32.MultiAddress, call: v32.Call} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV33(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '5bc5c3783d28fbc1f12c6aaa941a2ac988a131a8d4435fa6ad27a6ac25216d2c'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV33(): {who: v33.MultiAddress, call: v33.Call} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'f191c37b7ee244106927cbe826e719adf631f6e56f574db9e648ab533f2bbe2e'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV34(): {who: v34.MultiAddress, call: v34.Call} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'da9b839b9d11a6af2ca299e09156a0d028376d0fabf31700d9d4448796d7f54a'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV35(): {who: v35.MultiAddress, call: v35.Call} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '7ab87e33b35bd23dddff0236545c9b38423c50304bb4f405385c15e8a1008f92'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV36(): {who: v36.MultiAddress, call: v36.Call} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '0bfd5ec589b1d35fde0d590b8982f24ee5f983dfa66acbff8d84aeef9a9712be'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV37(): {who: v37.MultiAddress, call: v37.Call} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '019544f36e4f783ac33746da6264b50305f39b6a74a21605f219b78573e78c29'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV38(): {who: v38.MultiAddress, call: v38.Call} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '05c894add3a676061d00f0bf62ee3dbc536915bbc498794204bffb56a7304387'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV39(): {who: v39.MultiAddress, call: v39.Call} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '46b585372fc3b5998d49c5d30a138e38384965d02551562826c5931131dbaadc'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV40(): {who: v40.MultiAddress, call: v40.Call} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '2313c91e5a71b522325093821c2b48c85b91086c7c2f9a58fadac06a3432e66e'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV41(): {who: v41.MultiAddress, call: v41.Call} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '6febaee69ab661389616497d4b9bd6e62e97e3c2d50a44f605f3b10b172a7e52'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV42(): {who: v42.MultiAddress, call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoUncheckedWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_unchecked_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '704db4c7e21f5955d6f37ad824736e3d3295c8af45bc248799c778a7e17dae2b'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    get asV23(): {call: v23.Type_61, weight: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '0aabdb47facd92d0a8e1d5ea10fda71ef2d931286fca10b540f27db3fea5e1df'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    get asV26(): {call: v26.Type_64, weight: bigint} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    get isV29(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'e22026ae48cb170a677ee26bab0121c5a00835799e02db331d6e4c75624b0938'
    }

    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    get asV29(): {call: v29.Type_64, weight: bigint} {
        assert(this.isV29)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '07d9e4b24154f897a4efd4d3722d84f1888a2ced30f8c541a9f4391e30e2913d'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV32(): {call: v32.Call, weight: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV33(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'd786266357aa88b390c20bc74e7f8598f6046fb978ff05c2d5cd2ffa61a421ec'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV33(): {call: v33.Call, weight: bigint} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'a7d93e7aa545934a5ee798bdb6c8cd576bfb406d600236a4096de79582dc2729'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV34(): {call: v34.Call, weight: bigint} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'c5f489565f1cd01979582595e750e0fb9293a10058dd3998b2eb697fcb9b7590'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV35(): {call: v35.Call, weight: bigint} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'a87c43336d9a3e0d97ff00678baf0fe476f59dd748db111806fdd8df06b3092f'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV36(): {call: v36.Call, weight: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '465657032e1f6f662926968eafa0e0aabb3cd17e2112555780c97559af38f534'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV37(): {call: v37.Call, weight: bigint} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '248bfbf1e8804d4af3dbe53d6fb8fd614a5f497f886eb99e8a6c4603956cbf20'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV38(): {call: v38.Call, weight: bigint} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '1870ff8e2c27e1bc4ad9c88c8d1f7932c4b6a3ab5e830616fd458f6b430cc44d'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV39(): {call: v39.Call, weight: bigint} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '02c43130f88fca98284e424ceccd5c0fa757e427ff246c5b0f0038e314691192'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV40(): {call: v40.Call, weight: bigint} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '35afe6082e0d39495ff4fd6d0f9033ff387211b316ded3482747dcb9d139c6e3'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV41(): {call: v41.Call, weight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'b08e279e0a9f6923a232c643a858b3ee529e0fa3985241362f69586660e7fe1f'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV42(): {call: v42.Call, weight: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsAdminCleanUpPoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.admin_clean_up_pool')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clean up the pool of a resolved market.
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Swaps.admin_clean_up_pool') === '3c31e4ca1d20a8321bc3ea87d3cc5b7bff35c0ec6345b4b8084d84a8e02781e4'
    }

    /**
     * Clean up the pool of a resolved market.
     */
    get asV37(): {marketId: bigint, outcomeReport: v37.OutcomeReport} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsAdminSetPoolAsStaleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.admin_set_pool_as_stale')
        this._chain = ctx._chain
        this.call = call
    }

    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.admin_set_pool_as_stale') === '346b34cc6e52a35e79b016d5a03ab50f82678d44a914c0a39ccf8b9a128ccd06'
    }

    get asV23(): {marketType: v23.MarketType, poolId: bigint, outcomeReport: v23.OutcomeReport} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    get isV32(): boolean {
        return this._chain.getCallHash('Swaps.admin_set_pool_as_stale') === 'd35a9976a1a5b3f6eb19a463e82f7f1d7dc86413655b56a6ee7437fcff1dc231'
    }

    get asV32(): {marketType: v32.MarketType, poolId: bigint, outcomeReport: v32.OutcomeReport} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsAdminSetPoolToStaleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.admin_set_pool_to_stale')
        this._chain = ctx._chain
        this.call = call
    }

    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.admin_set_pool_to_stale') === '3c31e4ca1d20a8321bc3ea87d3cc5b7bff35c0ec6345b4b8084d84a8e02781e4'
    }

    get asV36(): {marketId: bigint, outcomeReport: v36.OutcomeReport} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsPoolExitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.pool_exit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pool - Exit
     * 
     *  Retrieves a given set of assets from `pool_id` to `origin`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `pool_amount`: The amount of LP shares of this pool being burned based on the
     *  retrieved assets.
     *  * `min_assets_out`: List of asset lower bounds. No asset should be lower than the
     *  provided values.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit') === '932b79e581da3c25c616e735945c39464d16ef8cde6b653730abab659258bcb0'
    }

    /**
     *  Pool - Exit
     * 
     *  Retrieves a given set of assets from `pool_id` to `origin`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `pool_amount`: The amount of LP shares of this pool being burned based on the
     *  retrieved assets.
     *  * `min_assets_out`: List of asset lower bounds. No asset should be lower than the
     *  provided values.
     */
    get asV23(): {poolId: bigint, poolAmount: bigint, minAssetsOut: bigint[]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Exit
     * 
     * Retrieves a given set of assets from `pool_id` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `pool_amount`: The amount of LP shares of this pool being burned based on the
     * retrieved assets.
     * * `min_assets_out`: List of asset lower bounds. No asset should be lower than the
     * provided values.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit') === '077be92978cb72796fb586f6ddaeab5782d73931f6b89513a7819b24f021e489'
    }

    /**
     * Pool - Exit
     * 
     * Retrieves a given set of assets from `pool_id` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `pool_amount`: The amount of LP shares of this pool being burned based on the
     * retrieved assets.
     * * `min_assets_out`: List of asset lower bounds. No asset should be lower than the
     * provided values.
     */
    get asV36(): {poolId: bigint, poolAmount: bigint, minAssetsOut: bigint[]} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsPoolExitSubsidyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.pool_exit_subsidy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pool - Remove subsidty from a pool that uses the Rikiddo scoring rule.
     * 
     *  Unreserves `pool_amount` of the base currency from being used as subsidy.
     *  If `amount` is greater than the amount reserved for subsidy by `origin`,
     *  then the whole amount reserved for subsidy will be unreserved.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be unreserved.
     *  * `pool_id`: Unique pool identifier.
     *  * `amount`: The amount of base currency that should be removed from subsidy.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit_subsidy') === '11d5dd6f68fafd39b9797cdfd92b072b256ab92b833515e38cde8221b70fdd6c'
    }

    /**
     *  Pool - Remove subsidty from a pool that uses the Rikiddo scoring rule.
     * 
     *  Unreserves `pool_amount` of the base currency from being used as subsidy.
     *  If `amount` is greater than the amount reserved for subsidy by `origin`,
     *  then the whole amount reserved for subsidy will be unreserved.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be unreserved.
     *  * `pool_id`: Unique pool identifier.
     *  * `amount`: The amount of base currency that should be removed from subsidy.
     */
    get asV23(): {poolId: bigint, amount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Remove subsidty from a pool that uses the Rikiddo scoring rule.
     * 
     * Unreserves `pool_amount` of the base currency from being used as subsidy.
     * If `amount` is greater than the amount reserved for subsidy by `origin`,
     * then the whole amount reserved for subsidy will be unreserved.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be unreserved.
     * * `pool_id`: Unique pool identifier.
     * * `amount`: The amount of base currency that should be removed from subsidy.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit_subsidy') === '5428c0236921b2580d0dfc967e32b39ade44bb59577d6d6f70475b98c5a07f99'
    }

    /**
     * Pool - Remove subsidty from a pool that uses the Rikiddo scoring rule.
     * 
     * Unreserves `pool_amount` of the base currency from being used as subsidy.
     * If `amount` is greater than the amount reserved for subsidy by `origin`,
     * then the whole amount reserved for subsidy will be unreserved.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be unreserved.
     * * `pool_id`: Unique pool identifier.
     * * `amount`: The amount of base currency that should be removed from subsidy.
     */
    get asV36(): {poolId: bigint, amount: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsPoolExitWithExactAssetAmountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.pool_exit_with_exact_asset_amount')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pool - Exit with exact pool amount
     * 
     *  Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     *  this method injects the exactly amount of `asset_amount` to `origin`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset`: Asset leaving the pool.
     *  * `asset_amount`: Asset amount that is leaving the pool.
     *  * `max_pool_amount`: The calculated amount of assets for the pool must be equal or
     *  greater than the given value.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit_with_exact_asset_amount') === '873fd70fed28190d17dbf93e8854898d2278634377cb89110e6090150c2477f1'
    }

    /**
     *  Pool - Exit with exact pool amount
     * 
     *  Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     *  this method injects the exactly amount of `asset_amount` to `origin`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset`: Asset leaving the pool.
     *  * `asset_amount`: Asset amount that is leaving the pool.
     *  * `max_pool_amount`: The calculated amount of assets for the pool must be equal or
     *  greater than the given value.
     */
    get asV23(): {poolId: bigint, asset: v23.Asset, assetAmount: bigint, maxPoolAmount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `asset_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `asset_amount`: Asset amount that is leaving the pool.
     * * `max_pool_amount`: The calculated amount of assets for the pool must be equal or
     * greater than the given value.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit_with_exact_asset_amount') === 'c06dfff90ffe0fcfa5f0a680b30d2168b346a5ac45a39f1595ad03d11f8f254c'
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `asset_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `asset_amount`: Asset amount that is leaving the pool.
     * * `max_pool_amount`: The calculated amount of assets for the pool must be equal or
     * greater than the given value.
     */
    get asV32(): {poolId: bigint, asset: v32.Asset, assetAmount: bigint, maxPoolAmount: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `asset_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `asset_amount`: Asset amount that is leaving the pool.
     * * `max_pool_amount`: The calculated amount of assets for the pool must be equal or
     * greater than the given value.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit_with_exact_asset_amount') === '6739a44a8f8ec620a58142259db404de5f72323666718768be1bc6653a831a47'
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `asset_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `asset_amount`: Asset amount that is leaving the pool.
     * * `max_pool_amount`: The calculated amount of assets for the pool must be equal or
     * greater than the given value.
     */
    get asV36(): {poolId: bigint, asset: v36.Asset, assetAmount: bigint, maxPoolAmount: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `asset_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `asset_amount`: Asset amount that is leaving the pool.
     * * `max_pool_amount`: The calculated amount of assets for the pool must be equal or
     * greater than the given value.
     * 
     * # Weight
     * 
     * Complexity: `O(1)`
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit_with_exact_asset_amount') === '98703ab1dce4559492749da9aeadd593042925fc588a7bd8b4363c7c592ea273'
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `asset_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `asset_amount`: Asset amount that is leaving the pool.
     * * `max_pool_amount`: The calculated amount of assets for the pool must be equal or
     * greater than the given value.
     * 
     * # Weight
     * 
     * Complexity: `O(1)`
     */
    get asV41(): {poolId: bigint, asset: v41.Asset, assetAmount: bigint, maxPoolAmount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsPoolExitWithExactPoolAmountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.pool_exit_with_exact_pool_amount')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pool - Exit with exact pool amount
     * 
     *  Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     *  this method injects the exactly amount of `pool_amount` to `pool_id`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset`: Asset leaving the pool.
     *  * `pool_amount`: Pool amount that is entering the pool.
     *  * `min_asset_amount`: The calculated amount for the asset must the equal or less
     *  than the given value.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit_with_exact_pool_amount') === '1419b12f462c95be8071a503b241c31e0dfd83ed195ed567a83d9b1142bcf2b8'
    }

    /**
     *  Pool - Exit with exact pool amount
     * 
     *  Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     *  this method injects the exactly amount of `pool_amount` to `pool_id`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset`: Asset leaving the pool.
     *  * `pool_amount`: Pool amount that is entering the pool.
     *  * `min_asset_amount`: The calculated amount for the asset must the equal or less
     *  than the given value.
     */
    get asV23(): {poolId: bigint, asset: v23.Asset, poolAmount: bigint, minAssetAmount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `pool_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `pool_amount`: Pool amount that is entering the pool.
     * * `min_asset_amount`: The calculated amount for the asset must the equal or less
     * than the given value.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit_with_exact_pool_amount') === 'b67981a72f00ee3b2a3c64ecbcbc2cc29e3ff89ddd4861e9df6eb5218a9e47e3'
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `pool_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `pool_amount`: Pool amount that is entering the pool.
     * * `min_asset_amount`: The calculated amount for the asset must the equal or less
     * than the given value.
     */
    get asV32(): {poolId: bigint, asset: v32.Asset, poolAmount: bigint, minAssetAmount: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `pool_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `pool_amount`: Pool amount that is entering the pool.
     * * `min_asset_amount`: The calculated amount for the asset must the equal or less
     * than the given value.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit_with_exact_pool_amount') === '9f8c0af88c3b23d4b244442e6ae5d223a9e11607467cca8b5f2068b869c0f275'
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `pool_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `pool_amount`: Pool amount that is entering the pool.
     * * `min_asset_amount`: The calculated amount for the asset must the equal or less
     * than the given value.
     */
    get asV36(): {poolId: bigint, asset: v36.Asset, poolAmount: bigint, minAssetAmount: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `pool_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `pool_amount`: Pool amount that is entering the pool.
     * * `min_asset_amount`: The calculated amount for the asset must the equal or less
     * than the given value.
     * 
     * # Weight
     * 
     * Complexity: `O(1)`
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Swaps.pool_exit_with_exact_pool_amount') === 'a5fdf3d58abee75b6ce3e6330664adc779661474a3bdb331db0ec3173c529ec8'
    }

    /**
     * Pool - Exit with exact pool amount
     * 
     * Takes an asset from `pool_id` and transfers to `origin`. Differently from `pool_exit`,
     * this method injects the exactly amount of `pool_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset leaving the pool.
     * * `pool_amount`: Pool amount that is entering the pool.
     * * `min_asset_amount`: The calculated amount for the asset must the equal or less
     * than the given value.
     * 
     * # Weight
     * 
     * Complexity: `O(1)`
     */
    get asV41(): {poolId: bigint, asset: v41.Asset, poolAmount: bigint, minAssetAmount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsPoolJoinCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.pool_join')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pool - Join
     * 
     *  Joins a given set of assets provided from `origin` to `pool_id`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     *  * `pool_id`: Unique pool identifier.
     *  * `pool_amount`: The amount of LP shares for this pool that should be minted to the provider.
     *  * `max_assets_in`: List of asset upper bounds. No asset should be greater than the
     *  provided values.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.pool_join') === '46ad922137873da9b9f515bf2ebb4308576b3e4351d255522a7f3d257b0cb2bd'
    }

    /**
     *  Pool - Join
     * 
     *  Joins a given set of assets provided from `origin` to `pool_id`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     *  * `pool_id`: Unique pool identifier.
     *  * `pool_amount`: The amount of LP shares for this pool that should be minted to the provider.
     *  * `max_assets_in`: List of asset upper bounds. No asset should be greater than the
     *  provided values.
     */
    get asV23(): {poolId: bigint, poolAmount: bigint, maxAssetsIn: bigint[]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Join
     * 
     * Joins a given set of assets provided from `origin` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     * * `pool_id`: Unique pool identifier.
     * * `pool_amount`: The amount of LP shares for this pool that should be minted to the provider.
     * * `max_assets_in`: List of asset upper bounds. No asset should be greater than the
     * provided values.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.pool_join') === '0ddd2135f5adb6e0a44e5e29893db816254e9812877f29f90c1c23153bf77e5b'
    }

    /**
     * Pool - Join
     * 
     * Joins a given set of assets provided from `origin` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     * * `pool_id`: Unique pool identifier.
     * * `pool_amount`: The amount of LP shares for this pool that should be minted to the provider.
     * * `max_assets_in`: List of asset upper bounds. No asset should be greater than the
     * provided values.
     */
    get asV36(): {poolId: bigint, poolAmount: bigint, maxAssetsIn: bigint[]} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsPoolJoinSubsidyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.pool_join_subsidy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pool - Add subsidy to a pool that uses the Rikiddo scoring rule.
     * 
     *  Reserves `pool_amount` of the base currency to be added as subsidy on pool activation.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be reserved.
     *  * `pool_id`: Unique pool identifier.
     *  * `amount`: The amount of base currency that should be added to subsidy.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.pool_join_subsidy') === '11d5dd6f68fafd39b9797cdfd92b072b256ab92b833515e38cde8221b70fdd6c'
    }

    /**
     *  Pool - Add subsidy to a pool that uses the Rikiddo scoring rule.
     * 
     *  Reserves `pool_amount` of the base currency to be added as subsidy on pool activation.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be reserved.
     *  * `pool_id`: Unique pool identifier.
     *  * `amount`: The amount of base currency that should be added to subsidy.
     */
    get asV23(): {poolId: bigint, amount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Add subsidy to a pool that uses the Rikiddo scoring rule.
     * 
     * Reserves `pool_amount` of the base currency to be added as subsidy on pool activation.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be reserved.
     * * `pool_id`: Unique pool identifier.
     * * `amount`: The amount of base currency that should be added to subsidy.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.pool_join_subsidy') === '5428c0236921b2580d0dfc967e32b39ade44bb59577d6d6f70475b98c5a07f99'
    }

    /**
     * Pool - Add subsidy to a pool that uses the Rikiddo scoring rule.
     * 
     * Reserves `pool_amount` of the base currency to be added as subsidy on pool activation.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be reserved.
     * * `pool_id`: Unique pool identifier.
     * * `amount`: The amount of base currency that should be added to subsidy.
     */
    get asV36(): {poolId: bigint, amount: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsPoolJoinWithExactAssetAmountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.pool_join_with_exact_asset_amount')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pool - Join with exact asset amount
     * 
     *  Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     *  this method transfers the exactly amount of `asset_amount` to `pool_id`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset_in`: Asset entering the pool.
     *  * `asset_amount`: Asset amount that is entering the pool.
     *  * `min_pool_amount`: The calculated amount for the pool must be equal or greater
     *  than the given value.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.pool_join_with_exact_asset_amount') === '22fabc0ed9c75363825ebf8254b368406bcb55094416994de21dddc66f7dcb52'
    }

    /**
     *  Pool - Join with exact asset amount
     * 
     *  Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     *  this method transfers the exactly amount of `asset_amount` to `pool_id`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset_in`: Asset entering the pool.
     *  * `asset_amount`: Asset amount that is entering the pool.
     *  * `min_pool_amount`: The calculated amount for the pool must be equal or greater
     *  than the given value.
     */
    get asV23(): {poolId: bigint, assetIn: v23.Asset, assetAmount: bigint, minPoolAmount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Join with exact asset amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method transfers the exactly amount of `asset_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount`: Asset amount that is entering the pool.
     * * `min_pool_amount`: The calculated amount for the pool must be equal or greater
     * than the given value.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Swaps.pool_join_with_exact_asset_amount') === 'eb5d6abb344953572135b5353b2547d5ded59e014a3817c218db463250ab145d'
    }

    /**
     * Pool - Join with exact asset amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method transfers the exactly amount of `asset_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount`: Asset amount that is entering the pool.
     * * `min_pool_amount`: The calculated amount for the pool must be equal or greater
     * than the given value.
     */
    get asV32(): {poolId: bigint, assetIn: v32.Asset, assetAmount: bigint, minPoolAmount: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Join with exact asset amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method transfers the exactly amount of `asset_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount`: Asset amount that is entering the pool.
     * * `min_pool_amount`: The calculated amount for the pool must be equal or greater
     * than the given value.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.pool_join_with_exact_asset_amount') === '30adaa2259d18108ca632efad00a8997029b7abce8a367a6e580c26d9d6f44cf'
    }

    /**
     * Pool - Join with exact asset amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method transfers the exactly amount of `asset_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount`: Asset amount that is entering the pool.
     * * `min_pool_amount`: The calculated amount for the pool must be equal or greater
     * than the given value.
     */
    get asV36(): {poolId: bigint, assetIn: v36.Asset, assetAmount: bigint, minPoolAmount: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Join with exact asset amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method transfers the exactly amount of `asset_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount`: Asset amount that is entering the pool.
     * * `min_pool_amount`: The calculated amount for the pool must be equal or greater
     * than the given value.
     * 
     * # Weight
     * 
     * Complexity: O(1)
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Swaps.pool_join_with_exact_asset_amount') === 'd8927120db07e640feaaa2f8f015d7368e9a116bcba4c35d444b56b2e04d2493'
    }

    /**
     * Pool - Join with exact asset amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method transfers the exactly amount of `asset_amount` to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount`: Asset amount that is entering the pool.
     * * `min_pool_amount`: The calculated amount for the pool must be equal or greater
     * than the given value.
     * 
     * # Weight
     * 
     * Complexity: O(1)
     */
    get asV41(): {poolId: bigint, assetIn: v41.Asset, assetAmount: bigint, minPoolAmount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsPoolJoinWithExactPoolAmountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.pool_join_with_exact_pool_amount')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pool - Join with exact pool amount
     * 
     *  Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     *  this method injects the exactly amount of `pool_amount` to `origin`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset`: Asset entering the pool.
     *  * `pool_amount`: Asset amount that is entering the pool.
     *  * `max_asset_amount`: The calculated amount of assets for the pool must be equal or
     *  less than the given value.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.pool_join_with_exact_pool_amount') === 'c0f2d8cf2af073701ff9f6a81cc5a36f9530f254750fd2f614e6a0e2d853054d'
    }

    /**
     *  Pool - Join with exact pool amount
     * 
     *  Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     *  this method injects the exactly amount of `pool_amount` to `origin`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset`: Asset entering the pool.
     *  * `pool_amount`: Asset amount that is entering the pool.
     *  * `max_asset_amount`: The calculated amount of assets for the pool must be equal or
     *  less than the given value.
     */
    get asV23(): {poolId: bigint, asset: v23.Asset, poolAmount: bigint, maxAssetAmount: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Join with exact pool amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method injects the exactly amount of `pool_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset entering the pool.
     * * `pool_amount`: Asset amount that is entering the pool.
     * * `max_asset_amount`: The calculated amount of assets for the pool must be equal or
     * less than the given value.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Swaps.pool_join_with_exact_pool_amount') === '927131fbee87be6dc2b837453eca5798575aa5c57e4fe67e52e3f997b82aaa45'
    }

    /**
     * Pool - Join with exact pool amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method injects the exactly amount of `pool_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset entering the pool.
     * * `pool_amount`: Asset amount that is entering the pool.
     * * `max_asset_amount`: The calculated amount of assets for the pool must be equal or
     * less than the given value.
     */
    get asV32(): {poolId: bigint, asset: v32.Asset, poolAmount: bigint, maxAssetAmount: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Join with exact pool amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method injects the exactly amount of `pool_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset entering the pool.
     * * `pool_amount`: Asset amount that is entering the pool.
     * * `max_asset_amount`: The calculated amount of assets for the pool must be equal or
     * less than the given value.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.pool_join_with_exact_pool_amount') === '9ab4c4088b05a29df9ae73a0a4f73694baa935a7ffb0bac5bd52dabded6dc79a'
    }

    /**
     * Pool - Join with exact pool amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method injects the exactly amount of `pool_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset entering the pool.
     * * `pool_amount`: Asset amount that is entering the pool.
     * * `max_asset_amount`: The calculated amount of assets for the pool must be equal or
     * less than the given value.
     */
    get asV36(): {poolId: bigint, asset: v36.Asset, poolAmount: bigint, maxAssetAmount: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pool - Join with exact pool amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method injects the exactly amount of `pool_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset entering the pool.
     * * `pool_amount`: Asset amount that is entering the pool.
     * * `max_asset_amount`: The calculated amount of assets for the pool must be equal or
     * less than the given value.
     * 
     * # Weight
     * 
     * Complexity: `O(1)`
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Swaps.pool_join_with_exact_pool_amount') === '40474ed3df9e793c53ed0b5e8c0a48c3ac3a393e01eaf6fbf952245a99c5672a'
    }

    /**
     * Pool - Join with exact pool amount
     * 
     * Joins an asset provided from `origin` to `pool_id`. Differently from `pool_join`,
     * this method injects the exactly amount of `pool_amount` to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset`: Asset entering the pool.
     * * `pool_amount`: Asset amount that is entering the pool.
     * * `max_asset_amount`: The calculated amount of assets for the pool must be equal or
     * less than the given value.
     * 
     * # Weight
     * 
     * Complexity: `O(1)`
     */
    get asV41(): {poolId: bigint, asset: v41.Asset, poolAmount: bigint, maxAssetAmount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsSwapExactAmountInCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.swap_exact_amount_in')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Swap - Exact amount in
     * 
     *  Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset_in`: Asset entering the pool.
     *  * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
     *  * `asset_out`: Asset leaving the pool.
     *  * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
     *  * `max_price`: Market price must be equal or less than the provided value.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.swap_exact_amount_in') === '56444c78d2d485ba388c1ea856ec0136fc84073b74b4898726732b1a50e54716'
    }

    /**
     *  Swap - Exact amount in
     * 
     *  Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset_in`: Asset entering the pool.
     *  * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
     *  * `asset_out`: Asset leaving the pool.
     *  * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
     *  * `max_price`: Market price must be equal or less than the provided value.
     */
    get asV23(): {poolId: bigint, assetIn: v23.Asset, assetAmountIn: bigint, assetOut: v23.Asset, minAssetAmountOut: bigint, maxPrice: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap - Exact amount in
     * 
     * Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Swaps.swap_exact_amount_in') === '6824e82d1239fe0cfd8124949901776fc8ddf369b25db868c461e45fd1185f7d'
    }

    /**
     * Swap - Exact amount in
     * 
     * Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get asV32(): {poolId: bigint, assetIn: v32.Asset, assetAmountIn: bigint, assetOut: v32.Asset, minAssetAmountOut: bigint, maxPrice: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap - Exact amount in
     * 
     * Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.swap_exact_amount_in') === 'aadb7d7c5371e66e101acb81b78b94de6225252d0a724fd445b811b1a8f3cdf6'
    }

    /**
     * Swap - Exact amount in
     * 
     * Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get asV36(): {poolId: bigint, assetIn: v36.Asset, assetAmountIn: bigint, assetOut: v36.Asset, minAssetAmountOut: bigint, maxPrice: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap - Exact amount in
     * 
     * Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Swaps.swap_exact_amount_in') === 'ab4c8186969362e30560b695b29a84f52fa38ea1351158bcea6634fae3b858f7'
    }

    /**
     * Swap - Exact amount in
     * 
     * Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get asV37(): {poolId: bigint, assetIn: v37.Asset, assetAmountIn: bigint, assetOut: v37.Asset, minAssetAmountOut: (bigint | undefined), maxPrice: (bigint | undefined)} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap - Exact amount in
     * 
     * Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
     * * `max_price`: Market price must be equal or less than the provided value.
     * 
     * # Weight
     * 
     * Complexity: `O(1)` if the scoring rule is CPMM, `O(n)` where `n` is the amount of
     * assets if the scoring rule is Rikiddo.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Swaps.swap_exact_amount_in') === '24daea8864302ece07c6a68b80ba32c26e7de2888ddcffe00824c96874b6f155'
    }

    /**
     * Swap - Exact amount in
     * 
     * Swaps a given `asset_amount_in` of the `asset_in/asset_out` pair to `pool_id`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be transferred.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `asset_amount_in`: Amount that will be transferred from the provider to the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `min_asset_amount_out`: Minimum asset amount that can leave the pool.
     * * `max_price`: Market price must be equal or less than the provided value.
     * 
     * # Weight
     * 
     * Complexity: `O(1)` if the scoring rule is CPMM, `O(n)` where `n` is the amount of
     * assets if the scoring rule is Rikiddo.
     */
    get asV41(): {poolId: bigint, assetIn: v41.Asset, assetAmountIn: bigint, assetOut: v41.Asset, minAssetAmountOut: (bigint | undefined), maxPrice: (bigint | undefined)} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SwapsSwapExactAmountOutCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Swaps.swap_exact_amount_out')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Swap - Exact amount out
     * 
     *  Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset_in`: Asset entering the pool.
     *  * `max_amount_asset_in`: Maximum asset amount that can enter the pool.
     *  * `asset_out`: Asset leaving the pool.
     *  * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
     *  * `max_price`: Market price must be equal or less than the provided value.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Swaps.swap_exact_amount_out') === '3dfe3a763c5183f66bcea6ca54ee3fe448e78048ceb1bd35cb123dacf776e2c4'
    }

    /**
     *  Swap - Exact amount out
     * 
     *  Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
     * 
     *  # Arguments
     * 
     *  * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     *  * `pool_id`: Unique pool identifier.
     *  * `asset_in`: Asset entering the pool.
     *  * `max_amount_asset_in`: Maximum asset amount that can enter the pool.
     *  * `asset_out`: Asset leaving the pool.
     *  * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
     *  * `max_price`: Market price must be equal or less than the provided value.
     */
    get asV23(): {poolId: bigint, assetIn: v23.Asset, maxAmountAssetIn: bigint, assetOut: v23.Asset, assetAmountOut: bigint, maxPrice: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap - Exact amount out
     * 
     * Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `max_amount_asset_in`: Maximum asset amount that can enter the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Swaps.swap_exact_amount_out') === 'dcdbf693732e5883e8e876b00cffedd9f10e64a09e036de92744f08c5b248b04'
    }

    /**
     * Swap - Exact amount out
     * 
     * Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `max_amount_asset_in`: Maximum asset amount that can enter the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get asV32(): {poolId: bigint, assetIn: v32.Asset, maxAmountAssetIn: bigint, assetOut: v32.Asset, assetAmountOut: bigint, maxPrice: bigint} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap - Exact amount out
     * 
     * Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `max_amount_asset_in`: Maximum asset amount that can enter the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Swaps.swap_exact_amount_out') === '8d2b6ec4f43620ad4994c1dae16fa98a3e5c8104fbc4585b174b413729653031'
    }

    /**
     * Swap - Exact amount out
     * 
     * Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `max_amount_asset_in`: Maximum asset amount that can enter the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get asV36(): {poolId: bigint, assetIn: v36.Asset, maxAmountAssetIn: bigint, assetOut: v36.Asset, assetAmountOut: bigint, maxPrice: bigint} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap - Exact amount out
     * 
     * Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `max_asset_amount_in`: Maximum asset amount that can enter the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Swaps.swap_exact_amount_out') === 'e0568b1c6fda1ed7b8e0e95311e80671da2a6b39edb59643d6ee04ef850db154'
    }

    /**
     * Swap - Exact amount out
     * 
     * Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `max_asset_amount_in`: Maximum asset amount that can enter the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
     * * `max_price`: Market price must be equal or less than the provided value.
     */
    get asV37(): {poolId: bigint, assetIn: v37.Asset, maxAssetAmountIn: (bigint | undefined), assetOut: v37.Asset, assetAmountOut: bigint, maxPrice: (bigint | undefined)} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap - Exact amount out
     * 
     * Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `max_asset_amount_in`: Maximum asset amount that can enter the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
     * * `max_price`: Market price must be equal or less than the provided value.
     * 
     * # Weight
     * 
     * Complexity: `O(1)` if the scoring rule is CPMM, `O(n)` where `n` is the amount of
     * assets if the scoring rule is Rikiddo.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Swaps.swap_exact_amount_out') === '3a4a173bd475333d4a5a229dfcea6f3dafbd72845dd787a42d15d4f02e51a829'
    }

    /**
     * Swap - Exact amount out
     * 
     * Swaps a given `asset_amount_out` of the `asset_in/asset_out` pair to `origin`.
     * 
     * # Arguments
     * 
     * * `origin`: Liquidity Provider (LP). The account whose assets should be received.
     * * `pool_id`: Unique pool identifier.
     * * `asset_in`: Asset entering the pool.
     * * `max_asset_amount_in`: Maximum asset amount that can enter the pool.
     * * `asset_out`: Asset leaving the pool.
     * * `asset_amount_out`: Amount that will be transferred from the pool to the provider.
     * * `max_price`: Market price must be equal or less than the provided value.
     * 
     * # Weight
     * 
     * Complexity: `O(1)` if the scoring rule is CPMM, `O(n)` where `n` is the amount of
     * assets if the scoring rule is Rikiddo.
     */
    get asV41(): {poolId: bigint, assetIn: v41.Asset, maxAssetAmountIn: (bigint | undefined), assetOut: v41.Asset, assetAmountOut: bigint, maxPrice: (bigint | undefined)} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemFillBlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.fill_block')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
    }

    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    get asV23(): {ratio: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillPrefixCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_prefix')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Kill all storage items with a key that starts with the given prefix.
     * 
     *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     *  the prefix we are removing to accurately calculate the weight of this function.
     * 
     *  # <weight>
     *  - `O(P)` where `P` amount of keys with prefix `prefix`
     *  - `P` storage deletions.
     *  - Base Weight: 0.834 * P µs
     *  - Writes: Number of subkeys + 1
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
    }

    /**
     *  Kill all storage items with a key that starts with the given prefix.
     * 
     *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     *  the prefix we are removing to accurately calculate the weight of this function.
     * 
     *  # <weight>
     *  - `O(P)` where `P` amount of keys with prefix `prefix`
     *  - `P` storage deletions.
     *  - Base Weight: 0.834 * P µs
     *  - Writes: Number of subkeys + 1
     *  # </weight>
     */
    get asV23(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Kill some items from storage.
     * 
     *  # <weight>
     *  - `O(IK)` where `I` length of `keys` and `K` length of one key
     *  - `I` storage deletions.
     *  - Base Weight: .378 * i µs
     *  - Writes: Number of items
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
    }

    /**
     *  Kill some items from storage.
     * 
     *  # <weight>
     *  - `O(IK)` where `I` length of `keys` and `K` length of one key
     *  - `I` storage deletions.
     *  - Base Weight: .378 * i µs
     *  - Writes: Number of items
     *  # </weight>
     */
    get asV23(): {keys: Uint8Array[]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  # </weight>
     */
    get asV23(): {remark: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkWithEventCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark_with_event')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Make some on-chain remark and emit event.
     * 
     *  # <weight>
     *  - `O(b)` where b is the length of the remark.
     *  - 1 event.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     *  Make some on-chain remark and emit event.
     * 
     *  # <weight>
     *  - `O(b)` where b is the length of the remark.
     *  - 1 event.
     *  # </weight>
     */
    get asV23(): {remark: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetChangesTrieConfigCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_changes_trie_config')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the new changes trie configuration.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage write or delete (codec `O(1)`).
     *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
     *  - Base Weight: 7.218 µs
     *  - DB Weight:
     *      - Writes: Changes Trie, System Digest
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
    }

    /**
     *  Set the new changes trie configuration.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage write or delete (codec `O(1)`).
     *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
     *  - Base Weight: 7.218 µs
     *  - DB Weight:
     *      - Writes: Changes Trie, System Digest
     *  # </weight>
     */
    get asV23(): {changesTrieConfig: (v23.ChangesTrieConfiguration | undefined)} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the new runtime code.
     * 
     *  # <weight>
     *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     *  - 1 storage write (codec `O(C)`).
     *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
     *  - 1 event.
     *  The weight of this function is dependent on the runtime, but generally this is very expensive.
     *  We will treat this as a full block.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     *  Set the new runtime code.
     * 
     *  # <weight>
     *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     *  - 1 storage write (codec `O(C)`).
     *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
     *  - 1 event.
     *  The weight of this function is dependent on the runtime, but generally this is very expensive.
     *  We will treat this as a full block.
     *  # </weight>
     */
    get asV23(): {code: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeWithoutChecksCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code_without_checks')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the new runtime code without doing any checks of the given `code`.
     * 
     *  # <weight>
     *  - `O(C)` where `C` length of `code`
     *  - 1 storage write (codec `O(C)`).
     *  - 1 event.
     *  The weight of this function is dependent on the runtime. We will treat this as a full block.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     *  Set the new runtime code without doing any checks of the given `code`.
     * 
     *  # <weight>
     *  - `O(C)` where `C` length of `code`
     *  - 1 storage write (codec `O(C)`).
     *  - 1 event.
     *  The weight of this function is dependent on the runtime. We will treat this as a full block.
     *  # </weight>
     */
    get asV23(): {code: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetHeapPagesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_heap_pages')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the number of pages in the WebAssembly environment's heap.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage write.
     *  - Base Weight: 1.405 µs
     *  - 1 write to HEAP_PAGES
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
    }

    /**
     *  Set the number of pages in the WebAssembly environment's heap.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage write.
     *  - Base Weight: 1.405 µs
     *  - 1 write to HEAP_PAGES
     *  # </weight>
     */
    get asV23(): {pages: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set some items of storage.
     * 
     *  # <weight>
     *  - `O(I)` where `I` length of `items`
     *  - `I` storage writes (`O(1)`).
     *  - Base Weight: 0.568 * i µs
     *  - Writes: Number of items
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
    }

    /**
     *  Set some items of storage.
     * 
     *  # <weight>
     *  - `O(I)` where `I` length of `items`
     *  - `I` storage writes (`O(1)`).
     *  - Base Weight: 0.568 * i µs
     *  - Writes: Number of items
     *  # </weight>
     */
    get asV23(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV34(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close') === '683905378cce329de8c5e9460bd36984188fb48a39207d985ea43cb10bd1eb81'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV42(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '6ff23eab00632766392b4b8262e51a31844669d260d22cda13ee45dafb0566ad'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV34(): {proposal: v34.Call, lengthBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'b2633ad810ff52c8e989963d0fa19ada0a4b0f698c874322f9307b6387a78d42'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV35(): {proposal: v35.Call, lengthBound: number} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'de3ad467b30feef330da37843b5f426b4e2082a2e45f48e5196a2c4955c4bc37'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV36(): {proposal: v36.Call, lengthBound: number} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '1e1e8a53cdab9c57c687e1e5df843c739cab83600e5b8f9bbed6aa1afe79059b'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV37(): {proposal: v37.Call, lengthBound: number} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'd5d7d31b729a9484e73f79ebc8a78b8e8067647dd33b187b6334a2066202f472'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV38(): {proposal: v38.Call, lengthBound: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '8e198ab52372719645a9696ed62b6d3f0d349b01769bf7da14d7e34fdf405dfc'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV39(): {proposal: v39.Call, lengthBound: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '89702fb019ae01e542fb500c33cc25ff61008fb5d41f252e0f92d57c5e312408'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV40(): {proposal: v40.Call, lengthBound: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'bc8525c6c29f024196acd31afc8b8218c7355404d9ea051fd676ff5cfaed9551'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV41(): {proposal: v41.Call, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '3fd288b19296d39a9c9eee127d1b1f65faa32fbdff18151e5281307d0a3e1603'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV42(): {proposal: v42.Call, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '47ea3c86a1cef0a1d4e3a62a42abeff3c3d9d1532b2b93fffe7953cdc00724dd'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV34(): {threshold: number, proposal: v34.Call, lengthBound: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '7d9f1ec6320de27036fd6b507e2be9b6f8c3dd269e4e381b38073d10c6464174'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV35(): {threshold: number, proposal: v35.Call, lengthBound: number} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'a8e0bd38f12545c2bbf575a773e3001649ee981c365ee9ea4272ac6e61f22619'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV36(): {threshold: number, proposal: v36.Call, lengthBound: number} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'db9f7c9f448c6737e39ba1b893dc6c9c4351927598712269af85d2c0176a1882'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV37(): {threshold: number, proposal: v37.Call, lengthBound: number} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '574929be7916f482e912476e7de16996d97586bbfab0aee4e13bc27aa6966b66'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV38(): {threshold: number, proposal: v38.Call, lengthBound: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '4ee2bb4f89c4f92dfaeede6621e4e39eb55bf1fca0c6c46c794785e7ca2c901b'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV39(): {threshold: number, proposal: v39.Call, lengthBound: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '8edb02a79fa911fad5166e99838504bde93beba728e23a5cc1040a49b7503bf0'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV40(): {threshold: number, proposal: v40.Call, lengthBound: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '203a28592cdc1c3a07428dad4b9861beb1c803aa8ad41f45e87959dde8ad7fce'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV41(): {threshold: number, proposal: v41.Call, lengthBound: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '0126b24801cae5620c45bf5f6acd0597b38b18132530416abf51e3fe03852af8'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV42(): {threshold: number, proposal: v42.Call, lengthBound: number} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get asV34(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get asV34(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeMembershipAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommitteeMembership.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV34(): {who: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.add_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV42(): {who: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeMembershipChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommitteeMembership.change_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV34(): {new: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.change_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV42(): {new: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeMembershipClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommitteeMembership.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeMembershipRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommitteeMembership.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV34(): {who: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.remove_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV42(): {who: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeMembershipResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommitteeMembership.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get asV34(): {members: Uint8Array[]} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeMembershipSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommitteeMembership.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV34(): {who: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.set_prime') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV42(): {who: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeMembershipSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommitteeMembership.swap_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV34(): {remove: Uint8Array, add: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('TechnicalCommitteeMembership.swap_member') === '5efd724fae29eef6393e039bf2dbfd2d5a3081770cc9cc8a80a1475fd6b40cf4'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV42(): {remove: v42.MultiAddress, add: v42.MultiAddress} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class TimestampSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Timestamp.set')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the current time.
     * 
     *  This call should be invoked exactly once per block. It will panic at the finalization
     *  phase, if this call hasn't been invoked by that time.
     * 
     *  The timestamp should be greater than the previous one by the amount specified by
     *  `MinimumPeriod`.
     * 
     *  The dispatch origin for this call must be `Inherent`.
     * 
     *  # <weight>
     *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
     *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
    }

    /**
     *  Set the current time.
     * 
     *  This call should be invoked exactly once per block. It will panic at the finalization
     *  phase, if this call hasn't been invoked by that time.
     * 
     *  The timestamp should be greater than the previous one by the amount specified by
     *  `MinimumPeriod`.
     * 
     *  The dispatch origin for this call must be `Inherent`.
     * 
     *  # <weight>
     *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
     *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     *  # </weight>
     */
    get asV23(): {now: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryApproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.approve_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     *  and the original deposit will be returned.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - Complexity: O(1).
     *  - DbReads: `Proposals`, `Approvals`
     *  - DbWrite: `Approvals`
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Treasury.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     *  and the original deposit will be returned.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - Complexity: O(1).
     *  - DbReads: `Proposals`, `Approvals`
     *  - DbWrite: `Approvals`
     *  # </weight>
     */
    get asV23(): {proposalId: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryProposeSpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.propose_spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - Complexity: O(1)
     *  - DbReads: `ProposalCount`, `origin account`
     *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Treasury.propose_spend') === 'c9f0fb5ad91e84a77c5f948f4140d239e238788ae3191c594dc1e6592472d5a7'
    }

    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - Complexity: O(1)
     *  - DbReads: `ProposalCount`, `origin account`
     *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     *  # </weight>
     */
    get asV23(): {value: bigint, beneficiary: v23.LookupSource} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `ProposalCount`, `origin account`
     * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Treasury.propose_spend') === 'ffef9f31e8ae5085e7c0a55a685daef52218f0bf7083015ac904dafceedf09ee'
    }

    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `ProposalCount`, `origin account`
     * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     * # </weight>
     */
    get asV32(): {value: bigint, beneficiary: v32.MultiAddress} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryRejectProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.reject_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Reject a proposed spend. The original deposit will be slashed.
     * 
     *  May only be called from `T::RejectOrigin`.
     * 
     *  # <weight>
     *  - Complexity: O(1)
     *  - DbReads: `Proposals`, `rejected proposer account`
     *  - DbWrites: `Proposals`, `rejected proposer account`
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Treasury.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     *  Reject a proposed spend. The original deposit will be slashed.
     * 
     *  May only be called from `T::RejectOrigin`.
     * 
     *  # <weight>
     *  - Complexity: O(1)
     *  - DbReads: `Proposals`, `rejected proposer account`
     *  - DbWrites: `Proposals`, `rejected proposer account`
     *  # </weight>
     */
    get asV23(): {proposalId: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryRemoveApprovalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.remove_approval')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * The original deposit will no longer be returned.
     * 
     * May only be called from `T::RejectOrigin`.
     * - `proposal_id`: The index of a proposal
     * 
     * # <weight>
     * - Complexity: O(A) where `A` is the number of approvals
     * - Db reads and writes: `Approvals`
     * # </weight>
     * 
     * Errors:
     * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
     * i.e., the proposal has not been approved. This could also mean the proposal does not
     * exist altogether, thus there is no way it would have been approved in the first place.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Treasury.remove_approval') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * The original deposit will no longer be returned.
     * 
     * May only be called from `T::RejectOrigin`.
     * - `proposal_id`: The index of a proposal
     * 
     * # <weight>
     * - Complexity: O(A) where `A` is the number of approvals
     * - Db reads and writes: `Approvals`
     * # </weight>
     * 
     * Errors:
     * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
     * i.e., the proposal has not been approved. This could also mean the proposal does not
     * exist altogether, thus there is no way it would have been approved in the first place.
     */
    get asV40(): {proposalId: number} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasurySpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose and approve a spend of treasury funds.
     * 
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     * 
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.spend') === '18a5bcfd718b2b225ac128952f0fc34fff8371520e0ab5bac3a0ab20286b496d'
    }

    /**
     * Propose and approve a spend of treasury funds.
     * 
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     * 
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    get asV41(): {amount: bigint, beneficiary: v41.MultiAddress} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityAsDerivativeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.as_derivative')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '477fe9e3d04764b17632b7e63950d41fdda7d610c0c565d4acd348170ae1fee1'
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    get asV23(): {index: number, call: v23.Type_61} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '45884b3edaa13da9c7763df229287dc9e786e7a3eb1ec1e6e6b367b4a65efa24'
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    get asV26(): {index: number, call: v26.Type_64} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    get isV29(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '3b59c31acfbde862880d5395079dba27b29bb71d1a25b6fb3783773e49791e67'
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    get asV29(): {index: number, call: v29.Type_64} {
        assert(this.isV29)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '6b39987ffce91ce88b5e078358ccef9ba48f619a2e728e5b314d90454e76676e'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV32(): {index: number, call: v32.Call} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV33(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '6915cce5585a1f79a00bee9cc08f6e6aaf068ad82dedb2055259bcd104ea9c45'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV33(): {index: number, call: v33.Call} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'da83d312eb0c606de4f69d001d9e929a75a454675f48be53daefe924935de0f6'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV34(): {index: number, call: v34.Call} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'c6b9e9f9ec2a9a2a6f1bb6ab45e481b2d552d0defff5f3b31aabcaa040f1221a'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV35(): {index: number, call: v35.Call} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'de477a00290574e1bf00cdf09a953ae2e74c20242158750767936e29ffb4c6ca'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV36(): {index: number, call: v36.Call} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'c5987c6ef5fc1e04c7c81e9c66b55ff5f1e8797cc2049a499ea3596dc59b56e3'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV37(): {index: number, call: v37.Call} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '47d56f50297ddea6e66fa5285101ab58d98d55a50381393636e75b2edfcd10c1'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV38(): {index: number, call: v38.Call} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '0d01771a6df2aa36cc5c8bf698ea85cc0e929d1de79f0182d040ae222ece8f0f'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV39(): {index: number, call: v39.Call} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '022c2b914c596ee64d447b4b8ac269180274292e07793d6bdb43a865cf57a4d9'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV40(): {index: number, call: v40.Call} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'ff5a185e3b35565dbebf86acb108dae4b2134a170eea87fa4df910178684e4d7'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV41(): {index: number, call: v41.Call} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '7e1bf1518e3217107afbf1d89cdfb8ae10a99519c8e11d41178599798adf9563'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV42(): {index: number, call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'ee36be57e935c5b7548cd8aa32201ecc543b5ab8b284986b93b903834adf3a90'
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get asV23(): {calls: v23.Type_61[]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Utility.batch') === '50a3300a766659095b6a0efc2b0cc564a688fcc7e2ec495802c3a14078685832'
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get asV26(): {calls: v26.Type_64[]} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get isV29(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'b471dea56dbaebdf459238924f062a7a46ab2aca5b15d9cd050870db47b6201d'
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get asV29(): {calls: v29.Type_64[]} {
        assert(this.isV29)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Utility.batch') === '30e393224067fa2303657325c358a9f240611106bb19b0e45f5d7b670d32321e'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV32(): {calls: v32.Call[]} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV33(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'a91a8ec652c31343659cc0b86c85481fbcce75bbd5569d70ef42cf6c0c63dd5b'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV33(): {calls: v33.Call[]} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Utility.batch') === '890bfe320728d42f36228e03b46ab3bbd1f744534a59d7dd2580ab2636b597d3'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV34(): {calls: v34.Call[]} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Utility.batch') === '8d5408608449068d0d58df3f75685e45eacc40564dabf813e95ec064a8e7fcf5'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV35(): {calls: v35.Call[]} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'f6355934344ce1b8e75a335f024b079a5d263e2fbeb8461629d2a44861d66eb3'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV36(): {calls: v36.Call[]} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Utility.batch') === '60dd4ff0289a09ef8a764f4cc6a1d5db265f2323a5f909b6eb68e9d8390ecda7'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV37(): {calls: v37.Call[]} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Utility.batch') === '3b6ea4c638b4a7cf268602912337d03f2d44e3748cb00f8a41293e31545bf35a'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV38(): {calls: v38.Call[]} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'acff31ca06585b95b6dcec7d4ebf96965c779aa635f4a140bceb0b1c5c703c33'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV39(): {calls: v39.Call[]} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Utility.batch') === '24118ffda4c587d3a71d5ca7f71b892b60bac466d37a7d44c0ee04b5a7a7f826'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV40(): {calls: v40.Call[]} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Utility.batch') === '5d32a72340a27c7d117c9826ab0b9b7bb0f3d8b6148b781936f82b9124df7585'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV41(): {calls: v41.Call[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Utility.batch') === '5623fac2d01510a1fc1ff2ad4ad9aeff5cb8f37ab6519dc521ae23af79d050ae'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV42(): {calls: v42.Call[]} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'ee36be57e935c5b7548cd8aa32201ecc543b5ab8b284986b93b903834adf3a90'
    }

    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get asV23(): {calls: v23.Type_61[]} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '50a3300a766659095b6a0efc2b0cc564a688fcc7e2ec495802c3a14078685832'
    }

    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get asV26(): {calls: v26.Type_64[]} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get isV29(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'b471dea56dbaebdf459238924f062a7a46ab2aca5b15d9cd050870db47b6201d'
    }

    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get asV29(): {calls: v29.Type_64[]} {
        assert(this.isV29)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '30e393224067fa2303657325c358a9f240611106bb19b0e45f5d7b670d32321e'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV32(): {calls: v32.Call[]} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV33(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'a91a8ec652c31343659cc0b86c85481fbcce75bbd5569d70ef42cf6c0c63dd5b'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV33(): {calls: v33.Call[]} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '890bfe320728d42f36228e03b46ab3bbd1f744534a59d7dd2580ab2636b597d3'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV34(): {calls: v34.Call[]} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '8d5408608449068d0d58df3f75685e45eacc40564dabf813e95ec064a8e7fcf5'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV35(): {calls: v35.Call[]} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'f6355934344ce1b8e75a335f024b079a5d263e2fbeb8461629d2a44861d66eb3'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV36(): {calls: v36.Call[]} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '60dd4ff0289a09ef8a764f4cc6a1d5db265f2323a5f909b6eb68e9d8390ecda7'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV37(): {calls: v37.Call[]} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '3b6ea4c638b4a7cf268602912337d03f2d44e3748cb00f8a41293e31545bf35a'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV38(): {calls: v38.Call[]} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'acff31ca06585b95b6dcec7d4ebf96965c779aa635f4a140bceb0b1c5c703c33'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV39(): {calls: v39.Call[]} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '24118ffda4c587d3a71d5ca7f71b892b60bac466d37a7d44c0ee04b5a7a7f826'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV40(): {calls: v40.Call[]} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '5d32a72340a27c7d117c9826ab0b9b7bb0f3d8b6148b781936f82b9124df7585'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV41(): {calls: v41.Call[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '5623fac2d01510a1fc1ff2ad4ad9aeff5cb8f37ab6519dc521ae23af79d050ae'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV42(): {calls: v42.Call[]} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityDispatchAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.dispatch_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV34(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'd0d6102bd9e97f2710c209b13f9931457c709e32d2e6192ad494e54be3e0c048'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV34(): {asOrigin: v34.OriginCaller, call: v34.Call} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV35(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '06fa98451d2cbc1978872eef00f6383a18a3ce99ca60ff8eb3d018f6fe6a1552'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV35(): {asOrigin: v35.OriginCaller, call: v35.Call} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV36(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'e6f8248a9f223cec26f243122f9e612773ed462842612957c92e3f33d90999a8'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV36(): {asOrigin: v36.OriginCaller, call: v36.Call} {
        assert(this.isV36)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV37(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'b38cfadb0cac61b340b444d6c245513b3cc21ab1353c4b6da6a8483bfc7a11bd'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV37(): {asOrigin: v37.OriginCaller, call: v37.Call} {
        assert(this.isV37)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '927bb21786bf0aa12ff81a169b572920500f33c93966491e04dcedae388a6693'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV38(): {asOrigin: v38.OriginCaller, call: v38.Call} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '5c1a943d813a7d6c9da480f72bb6bfa3b6bd346c888c1fe4c4bef22a666b6fd4'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV39(): {asOrigin: v39.OriginCaller, call: v39.Call} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '493c0f5df69d9fa923480a818262db5ee138071131d1c05c7c2bf1aa096555c7'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV40(): {asOrigin: v40.OriginCaller, call: v40.Call} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'b5e8ff8e76d0180d4401fe4a34a8cafe81cef025bc8bfe5e9003a16a3ad658f2'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV41(): {asOrigin: v41.OriginCaller, call: v41.Call} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '4de980768f4964d27cfa597aecb9dc6e826061093f5e125326c2ef6c597b0853'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV42(): {asOrigin: v42.OriginCaller, call: v42.Call} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityForceBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.force_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV40(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '24118ffda4c587d3a71d5ca7f71b892b60bac466d37a7d44c0ee04b5a7a7f826'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV40(): {calls: v40.Call[]} {
        assert(this.isV40)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '5d32a72340a27c7d117c9826ab0b9b7bb0f3d8b6148b781936f82b9124df7585'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV41(): {calls: v41.Call[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV42(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '5623fac2d01510a1fc1ff2ad4ad9aeff5cb8f37ab6519dc521ae23af79d050ae'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV42(): {calls: v42.Call[]} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingForceVestedTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.force_vested_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force a vested transfer.
     * 
     *  The dispatch origin for this call must be _Root_.
     * 
     *  - `source`: The account whose funds should be transferred.
     *  - `target`: The account that should be transferred the vested funds.
     *  - `amount`: The amount of funds to transfer and will be vested.
     *  - `schedule`: The vesting schedule attached to the transfer.
     * 
     *  Emits `VestingCreated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 4 Reads, 4 Writes
     *      - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
     *      - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
     *  # </weight>
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Vesting.force_vested_transfer') === '97fbe11ef7e3fe4a53ec2b80412c29d90df0b927b1423587623789866de1fd14'
    }

    /**
     *  Force a vested transfer.
     * 
     *  The dispatch origin for this call must be _Root_.
     * 
     *  - `source`: The account whose funds should be transferred.
     *  - `target`: The account that should be transferred the vested funds.
     *  - `amount`: The amount of funds to transfer and will be vested.
     *  - `schedule`: The vesting schedule attached to the transfer.
     * 
     *  Emits `VestingCreated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 4 Reads, 4 Writes
     *      - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
     *      - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
     *  # </weight>
     */
    get asV26(): {source: v26.LookupSource, target: v26.LookupSource, schedule: v26.VestingInfo} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Force a vested transfer.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The account whose funds should be transferred.
     * - `target`: The account that should be transferred the vested funds.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * NOTE: This will unlock all schedules through the current block.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 4 Reads, 4 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Vesting.force_vested_transfer') === '01033fb752249ece9d25e3918f8e34e6b7a2e0f8d69988cca171e48df6db5c64'
    }

    /**
     * Force a vested transfer.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The account whose funds should be transferred.
     * - `target`: The account that should be transferred the vested funds.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * NOTE: This will unlock all schedules through the current block.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 4 Reads, 4 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
     * # </weight>
     */
    get asV32(): {source: v32.MultiAddress, target: v32.MultiAddress, schedule: v32.VestingInfo} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingMergeSchedulesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.merge_schedules')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
     * the highest possible start and end blocks. If both schedules have already started the
     * current block will be used as the schedule start; with the caveat that if one schedule
     * is finished by the current block, the other will be treated as the new merged schedule,
     * unmodified.
     * 
     * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
     * NOTE: This will unlock all schedules through the current block prior to merging.
     * NOTE: If both schedules have ended by the current block, no new schedule will be created
     * and both will be removed.
     * 
     * Merged schedule attributes:
     * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
     *   current_block)`.
     * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
     * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `schedule1_index`: index of the first schedule to merge.
     * - `schedule2_index`: index of the second schedule to merge.
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Vesting.merge_schedules') === 'fc0db27e3f68971976c0913a7fc03f1b8221d054fbbbca956c367c00c0639eea'
    }

    /**
     * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
     * the highest possible start and end blocks. If both schedules have already started the
     * current block will be used as the schedule start; with the caveat that if one schedule
     * is finished by the current block, the other will be treated as the new merged schedule,
     * unmodified.
     * 
     * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
     * NOTE: This will unlock all schedules through the current block prior to merging.
     * NOTE: If both schedules have ended by the current block, no new schedule will be created
     * and both will be removed.
     * 
     * Merged schedule attributes:
     * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
     *   current_block)`.
     * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
     * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `schedule1_index`: index of the first schedule to merge.
     * - `schedule2_index`: index of the second schedule to merge.
     */
    get asV32(): {schedule1Index: number, schedule2Index: number} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingVestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.vest')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Unlock any vested funds of the sender account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have funds still
     *  locked under this pallet.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 2 Reads, 2 Writes
     *      - Reads: Vesting Storage, Balances Locks, [Sender Account]
     *      - Writes: Vesting Storage, Balances Locks, [Sender Account]
     *  # </weight>
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Vesting.vest') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Unlock any vested funds of the sender account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have funds still
     *  locked under this pallet.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 2 Reads, 2 Writes
     *      - Reads: Vesting Storage, Balances Locks, [Sender Account]
     *      - Writes: Vesting Storage, Balances Locks, [Sender Account]
     *  # </weight>
     */
    get asV26(): null {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingVestOtherCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.vest_other')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Unlock any vested funds of a `target` account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account whose vested funds should be unlocked. Must have funds still
     *  locked under this pallet.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 3 Reads, 3 Writes
     *      - Reads: Vesting Storage, Balances Locks, Target Account
     *      - Writes: Vesting Storage, Balances Locks, Target Account
     *  # </weight>
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Vesting.vest_other') === 'b473bcbba83335e310f2f681307dcf6b16b8d79ec99a4fb2202c34bed7de3b65'
    }

    /**
     *  Unlock any vested funds of a `target` account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account whose vested funds should be unlocked. Must have funds still
     *  locked under this pallet.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 3 Reads, 3 Writes
     *      - Reads: Vesting Storage, Balances Locks, Target Account
     *      - Writes: Vesting Storage, Balances Locks, Target Account
     *  # </weight>
     */
    get asV26(): {target: v26.LookupSource} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Unlock any vested funds of a `target` account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account whose vested funds should be unlocked. Must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Vesting.vest_other') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
    }

    /**
     * Unlock any vested funds of a `target` account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account whose vested funds should be unlocked. Must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account
     * # </weight>
     */
    get asV32(): {target: v32.MultiAddress} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingVestedTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.vested_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Create a vested transfer.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account that should be transferred the vested funds.
     *  - `amount`: The amount of funds to transfer and will be vested.
     *  - `schedule`: The vesting schedule attached to the transfer.
     * 
     *  Emits `VestingCreated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 3 Reads, 3 Writes
     *      - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *      - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *  # </weight>
     */
    get isV26(): boolean {
        return this._chain.getCallHash('Vesting.vested_transfer') === '1d9e3e22e22a03742a563043455d323f5b4315a403c4ebb3d20e827f1ce76d45'
    }

    /**
     *  Create a vested transfer.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account that should be transferred the vested funds.
     *  - `amount`: The amount of funds to transfer and will be vested.
     *  - `schedule`: The vesting schedule attached to the transfer.
     * 
     *  Emits `VestingCreated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - DbWeight: 3 Reads, 3 Writes
     *      - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *      - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *  # </weight>
     */
    get asV26(): {target: v26.LookupSource, schedule: v26.VestingInfo} {
        assert(this.isV26)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Create a vested transfer.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account receiving the vested funds.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * NOTE: This will unlock all schedules through the current block.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     * # </weight>
     */
    get isV32(): boolean {
        return this._chain.getCallHash('Vesting.vested_transfer') === '3a482ce2deec61126da38d65f13894f99258215cbf909a603ed3c672ca607dfb'
    }

    /**
     * Create a vested transfer.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account receiving the vested funds.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * NOTE: This will unlock all schedules through the current block.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     * # </weight>
     */
    get asV32(): {target: v32.MultiAddress, schedule: v32.VestingInfo} {
        assert(this.isV32)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('XTokens.transfer') === '3548ed5486a7e62efe287eab90da643fceffde89cc51e9403a66030941285b8a'
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV41(): {currencyId: v41.Asset, amount: bigint, dest: v41.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMultiassetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multiasset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset') === 'f33cd4d2466c1e767a4c2d9b00f7b71b359b07f3e78d76d466e3928a3e2ed9b8'
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV41(): {asset: v41.VersionedMultiAsset, dest: v41.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMultiassetWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multiasset_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the multiasset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `MultiLocation` id.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset_with_fee') === '72aca3119f971190d4dd5493791879ff41295c5e290079c6179cb41be01e6226'
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the multiasset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `MultiLocation` id.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV41(): {asset: v41.VersionedMultiAsset, fee: v41.VersionedMultiAsset, dest: v41.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMultiassetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multiassets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the MultiAssets that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiassets') === '2c9276a8e5652bef69d8e7f6f9bf7caccd48bb5ef0b25b42010d09b4b28b18c5'
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the MultiAssets that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV41(): {assets: v41.VersionedMultiAssets, feeItem: number, dest: v41.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMulticurrenciesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multicurrencies')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multicurrencies') === '605a9ceca47e6762543eba54fedbdd63c9145373cf26aa2e2508263a352b1dfb'
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV41(): {currencies: [v41.Asset, bigint][], feeItem: number, dest: v41.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('XTokens.transfer_with_fee') === '470c15002196fb290c213447d1597f286a34aa674663749e095fb34cc2261769'
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight` is the weight for XCM execution on the dest chain, and
     * it would be charged from the transferred assets. If set below
     * requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV41(): {currencyId: v41.Asset, amount: bigint, fee: bigint, dest: v41.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueResumeXcmExecutionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.resume_xcm_execution')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Resumes all XCM executions for the XCMP queue.
     * 
     * Note that this function doesn't change the status of the in/out bound channels.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get isV35(): boolean {
        return this._chain.getCallHash('XcmpQueue.resume_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Resumes all XCM executions for the XCMP queue.
     * 
     * Note that this function doesn't change the status of the in/out bound channels.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get asV35(): null {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueServiceOverweightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.service_overweight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isV34(): boolean {
        return this._chain.getCallHash('XcmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
    }

    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asV34(): {index: bigint, weightLimit: bigint} {
        assert(this.isV34)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('XcmpQueue.service_overweight') === '3e0d440993be1d69328adae3a1b30f3261ca945f8f307c396f4de7f51796a0c6'
    }

    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asV42(): {index: bigint, weightLimit: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueSuspendXcmExecutionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.suspend_xcm_execution')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get isV35(): boolean {
        return this._chain.getCallHash('XcmpQueue.suspend_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get asV35(): null {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateDropThresholdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_drop_threshold')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue after which we drop any further
     * messages from the channel.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.drop_threshold`
     */
    get isV35(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_drop_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue after which we drop any further
     * messages from the channel.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.drop_threshold`
     */
    get asV35(): {new: number} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateResumeThresholdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_resume_threshold')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
     * message sending may recommence after it has been suspended.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.resume_threshold`                                
     */
    get isV35(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_resume_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
     * message sending may recommence after it has been suspended.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.resume_threshold`                                
     */
    get asV35(): {new: number} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateSuspendThresholdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_suspend_threshold')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
     * suspend their sending.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.suspend_value`
     */
    get isV35(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_suspend_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
     * suspend their sending.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.suspend_value`
     */
    get asV35(): {new: number} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateThresholdWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_threshold_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`                                
     */
    get isV35(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`                                
     */
    get asV35(): {new: bigint} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get isV42(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get asV42(): {new: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateWeightRestrictDecayCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_weight_restrict_decay')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.                                
     */
    get isV35(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.                                
     */
    get asV35(): {new: bigint} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get asV42(): {new: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateXcmpMaxIndividualWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_xcmp_max_individual_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.                                
     */
    get isV35(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.                                
     */
    get asV35(): {new: bigint} {
        assert(this.isV35)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get isV42(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get asV42(): {new: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeCall(this.call)
    }
}
