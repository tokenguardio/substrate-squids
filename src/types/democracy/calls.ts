import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v25 from '../v25'
import * as v9110 from '../v9110'
import * as v9291 from '../v9291'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'

export const propose =  {
    name: 'Democracy.propose',
    /**
     *  Propose a sensitive action to be taken.
     * 
     *  The dispatch origin of this call must be _Signed_ and the sender must
     *  have funds to cover the deposit.
     * 
     *  - `proposal_hash`: The hash of the proposal preimage.
     *  - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     *  Emits `Proposed`.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *  - Db reads: `PublicPropCount`, `PublicProps`
     *  - Db writes: `PublicPropCount`, `PublicProps`, `DepositOf`
     *  -------------------
     *  Base Weight: 42.58 + .127 * P µs with `P` the number of proposals `PublicProps`
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.propose',
        sts.struct({
            proposalHash: v0.Hash,
            value: sts.bigint(),
        })
    ),
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
     */
    v9340: new CallType(
        'Democracy.propose',
        sts.struct({
            proposal: v9340.Bounded,
            value: sts.bigint(),
        })
    ),
}

export const second =  {
    name: 'Democracy.second',
    /**
     *  Signals agreement with a particular proposal.
     * 
     *  The dispatch origin of this call must be _Signed_ and the sender
     *  must have funds to cover the deposit, equal to the original deposit.
     * 
     *  - `proposal`: The index of the proposal to second.
     *  - `seconds_upper_bound`: an upper bound on the current number of seconds on this
     *    proposal. Extrinsic is weighted according to this value with no refund.
     * 
     *  # <weight>
     *  - Complexity: `O(S)` where S is the number of seconds a proposal already has.
     *  - Db reads: `DepositOf`
     *  - Db writes: `DepositOf`
     *  ---------
     *  - Base Weight: 22.28 + .229 * S µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.second',
        sts.struct({
            proposal: sts.number(),
            secondsUpperBound: sts.number(),
        })
    ),
    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     */
    v9340: new CallType(
        'Democracy.second',
        sts.struct({
            proposal: sts.number(),
        })
    ),
}

export const vote =  {
    name: 'Democracy.vote',
    /**
     *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     *  otherwise it is a vote to keep the status quo.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `ref_index`: The index of the referendum to vote for.
     *  - `vote`: The vote configuration.
     * 
     *  # <weight>
     *  - Complexity: `O(R)` where R is the number of referendums the voter has voted on.
     *    weight is charged as if maximum votes.
     *  - Db reads: `ReferendumInfoOf`, `VotingOf`, `balances locks`
     *  - Db writes: `ReferendumInfoOf`, `VotingOf`, `balances locks`
     *  --------------------
     *  - Base Weight:
     *      - Vote New: 49.24 + .333 * R µs
     *      - Vote Existing: 49.94 + .343 * R µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.vote',
        sts.struct({
            refIndex: sts.number(),
            vote: v0.AccountVote,
        })
    ),
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
    v9110: new CallType(
        'Democracy.vote',
        sts.struct({
            refIndex: sts.number(),
            vote: v9110.AccountVote,
        })
    ),
}

export const proxyVote =  {
    name: 'Democracy.proxy_vote',
    /**
     *  Vote in a referendum on behalf of a stash. If `vote.is_aye()`, the vote is to enact
     *  the proposal; otherwise it is a vote to keep the status quo.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `ref_index`: The index of the referendum to proxy vote for.
     *  - `vote`: The vote configuration.
     * 
     *  # <weight>
     *  - Complexity: `O(R)` where R is the number of referendums the proxy has voted on.
     *    weight is charged as if maximum votes.
     *  - Db reads: `ReferendumInfoOf`, `VotingOf`, `balances locks`, `Proxy`, `proxy account`
     *  - Db writes: `ReferendumInfoOf`, `VotingOf`, `balances locks`
     *  ------------
     *  - Base Weight:
     *      - Proxy Vote New: 54.35 + .344 * R µs
     *      - Proxy Vote Existing: 54.35 + .35 * R µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.proxy_vote',
        sts.struct({
            refIndex: sts.number(),
            vote: v0.AccountVote,
        })
    ),
}

export const emergencyCancel =  {
    name: 'Democracy.emergency_cancel',
    /**
     *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     *  referendum.
     * 
     *  The dispatch origin of this call must be `CancellationOrigin`.
     * 
     *  -`ref_index`: The index of the referendum to cancel.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`.
     *  - Db reads: `ReferendumInfoOf`, `Cancellations`
     *  - Db writes: `ReferendumInfoOf`, `Cancellations`
     *  -------------
     *  - Base Weight: 34.25 µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.emergency_cancel',
        sts.struct({
            refIndex: v0.ReferendumIndex,
        })
    ),
}

export const externalPropose =  {
    name: 'Democracy.external_propose',
    /**
     *  Schedule a referendum to be tabled once it is legal to schedule an external
     *  referendum.
     * 
     *  The dispatch origin of this call must be `ExternalOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal.
     * 
     *  # <weight>
     *  - Complexity `O(V)` with V number of vetoers in the blacklist of proposal.
     *    Decoding vec of length V. Charged as maximum
     *  - Db reads: `NextExternal`, `Blacklist`
     *  - Db writes: `NextExternal`
     *  - Base Weight: 13.8 + .106 * V µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.external_propose',
        sts.struct({
            proposalHash: v0.Hash,
        })
    ),
    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     */
    v9340: new CallType(
        'Democracy.external_propose',
        sts.struct({
            proposal: v9340.Bounded,
        })
    ),
}

export const externalProposeMajority =  {
    name: 'Democracy.external_propose_majority',
    /**
     *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     *  an external referendum.
     * 
     *  The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal.
     * 
     *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     *  pre-scheduled `external_propose` call.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *  - Db write: `NextExternal`
     *  - Base Weight: 3.065 µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.external_propose_majority',
        sts.struct({
            proposalHash: v0.Hash,
        })
    ),
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
    v9340: new CallType(
        'Democracy.external_propose_majority',
        sts.struct({
            proposal: v9340.Bounded,
        })
    ),
}

export const externalProposeDefault =  {
    name: 'Democracy.external_propose_default',
    /**
     *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     *  schedule an external referendum.
     * 
     *  The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal.
     * 
     *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     *  pre-scheduled `external_propose` call.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *  - Db write: `NextExternal`
     *  - Base Weight: 3.087 µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.external_propose_default',
        sts.struct({
            proposalHash: v0.Hash,
        })
    ),
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
    v9340: new CallType(
        'Democracy.external_propose_default',
        sts.struct({
            proposal: v9340.Bounded,
        })
    ),
}

export const fastTrack =  {
    name: 'Democracy.fast_track',
    /**
     *  Schedule the currently externally-proposed majority-carries referendum to be tabled
     *  immediately. If there is no externally-proposed referendum currently, or if there is one
     *  but it is not a majority-carries referendum then it fails.
     * 
     *  The dispatch of this call must be `FastTrackOrigin`.
     * 
     *  - `proposal_hash`: The hash of the current external proposal.
     *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     *    `FastTrackVotingPeriod` if too low.
     *  - `delay`: The number of block after voting has ended in approval and this should be
     *    enacted. This doesn't have a minimum amount.
     * 
     *  Emits `Started`.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *  - Db reads: `NextExternal`, `ReferendumCount`
     *  - Db writes: `NextExternal`, `ReferendumCount`, `ReferendumInfoOf`
     *  - Base Weight: 30.1 µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.fast_track',
        sts.struct({
            proposalHash: v0.Hash,
            votingPeriod: v0.BlockNumber,
            delay: v0.BlockNumber,
        })
    ),
}

export const vetoExternal =  {
    name: 'Democracy.veto_external',
    /**
     *  Veto and blacklist the external proposal hash.
     * 
     *  The dispatch origin of this call must be `VetoOrigin`.
     * 
     *  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     *  Emits `Vetoed`.
     * 
     *  # <weight>
     *  - Complexity: `O(V + log(V))` where V is number of `existing vetoers`
     *    Performs a binary search on `existing_vetoers` which should not be very large.
     *  - Db reads: `NextExternal`, `Blacklist`
     *  - Db writes: `NextExternal`, `Blacklist`
     *  - Base Weight: 29.87 + .188 * V µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.veto_external',
        sts.struct({
            proposalHash: v0.Hash,
        })
    ),
}

export const cancelReferendum =  {
    name: 'Democracy.cancel_referendum',
    /**
     *  Remove a referendum.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  - `ref_index`: The index of the referendum to cancel.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`.
     *  - Db writes: `ReferendumInfoOf`
     *  - Base Weight: 21.57 µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.cancel_referendum',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelQueued =  {
    name: 'Democracy.cancel_queued',
    /**
     *  Cancel a proposal queued for enactment.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  - `which`: The index of the referendum to cancel.
     * 
     *  # <weight>
     *  - `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
     *  - Db reads: `scheduler lookup`, scheduler agenda`
     *  - Db writes: `scheduler lookup`, scheduler agenda`
     *  - Base Weight: 36.78 + 3.277 * D µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.cancel_queued',
        sts.struct({
            which: v0.ReferendumIndex,
        })
    ),
}

export const activateProxy =  {
    name: 'Democracy.activate_proxy',
    /**
     *  Specify a proxy that is already open to us. Called by the stash.
     * 
     *  NOTE: Used to be called `set_proxy`.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `proxy`: The account that will be activated as proxy.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *  - Db reads: `Proxy`
     *  - Db writes: `Proxy`
     *  - Base Weight: 7.972 µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.activate_proxy',
        sts.struct({
            proxy: v0.AccountId,
        })
    ),
}

export const closeProxy =  {
    name: 'Democracy.close_proxy',
    /**
     *  Clear the proxy. Called by the proxy.
     * 
     *  NOTE: Used to be called `resign_proxy`.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *  - Db reads: `Proxy`, `sender account`
     *  - Db writes: `Proxy`, `sender account`
     *  - Base Weight: 15.41 µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.close_proxy',
        sts.unit()
    ),
}

export const deactivateProxy =  {
    name: 'Democracy.deactivate_proxy',
    /**
     *  Deactivate the proxy, but leave open to this account. Called by the stash.
     * 
     *  The proxy must already be active.
     * 
     *  NOTE: Used to be called `remove_proxy`.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `proxy`: The account that will be deactivated as proxy.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *  - Db reads: `Proxy`
     *  - Db writes: `Proxy`
     *  - Base Weight: 8.03 µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.deactivate_proxy',
        sts.struct({
            proxy: v0.AccountId,
        })
    ),
}

export const delegate =  {
    name: 'Democracy.delegate',
    /**
     *  Delegate the voting power (with some given conviction) of the sending account.
     * 
     *  The balance delegated is locked for as long as it's delegated, and thereafter for the
     *  time appropriate for the conviction's lock period.
     * 
     *  The dispatch origin of this call must be _Signed_, and the signing account must either:
     *    - be delegating already; or
     *    - have no voting activity (if there is, then it will need to be removed/consolidated
     *      through `reap_vote` or `unvote`).
     * 
     *  - `to`: The account whose voting the `target` account's voting power will follow.
     *  - `conviction`: The conviction that will be attached to the delegated votes. When the
     *    account is undelegated, the funds will be locked for the corresponding period.
     *  - `balance`: The amount of the account's balance to be used in delegating. This must
     *    not be more than the account's current balance.
     * 
     *  Emits `Delegated`.
     * 
     *  # <weight>
     *  - Complexity: `O(R)` where R is the number of referendums the voter delegating to has
     *    voted on. Weight is charged as if maximum votes.
     *  - Db reads: 2*`VotingOf`, `balances locks`
     *  - Db writes: 2*`VotingOf`, `balances locks`
     *  - Db reads per votes: `ReferendumInfoOf`
     *  - Db writes per votes: `ReferendumInfoOf`
     *  - Base Weight: 65.78 + 8.229 * R µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.delegate',
        sts.struct({
            to: v0.AccountId,
            conviction: v0.Conviction,
            balance: v0.BalanceOf,
        })
    ),
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
    v9291: new CallType(
        'Democracy.delegate',
        sts.struct({
            to: v9291.MultiAddress,
            conviction: v9291.Conviction,
            balance: sts.bigint(),
        })
    ),
}

export const undelegate =  {
    name: 'Democracy.undelegate',
    /**
     *  Undelegate the voting power of the sending account.
     * 
     *  Tokens may be unlocked following once an amount of time consistent with the lock period
     *  of the conviction with which the delegation was issued.
     * 
     *  The dispatch origin of this call must be _Signed_ and the signing account must be
     *  currently delegating.
     * 
     *  Emits `Undelegated`.
     * 
     *  # <weight>
     *  - Complexity: `O(R)` where R is the number of referendums the voter delegating to has
     *    voted on. Weight is charged as if maximum votes.
     *  - Db reads: 2*`VotingOf`
     *  - Db writes: 2*`VotingOf`
     *  - Db reads per votes: `ReferendumInfoOf`
     *  - Db writes per votes: `ReferendumInfoOf`
     *  - Base Weight: 33.29 + 8.104 * R µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.undelegate',
        sts.unit()
    ),
}

export const clearPublicProposals =  {
    name: 'Democracy.clear_public_proposals',
    /**
     *  Clears all public proposals.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - Db writes: `PublicProps`
     *  - Base Weight: 2.505 µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.clear_public_proposals',
        sts.unit()
    ),
}

export const notePreimage =  {
    name: 'Democracy.note_preimage',
    /**
     *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     *  in the dispatch queue but does require a deposit, returned once enacted.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `encoded_proposal`: The preimage of a proposal.
     * 
     *  Emits `PreimageNoted`.
     * 
     *  # <weight>
     *  see `weight_for::note_preimage`
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.note_preimage',
        sts.struct({
            encodedProposal: sts.bytes(),
        })
    ),
}

export const notePreimageOperational =  {
    name: 'Democracy.note_preimage_operational',
    /**
     *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    v0: new CallType(
        'Democracy.note_preimage_operational',
        sts.struct({
            encodedProposal: sts.bytes(),
        })
    ),
}

export const noteImminentPreimage =  {
    name: 'Democracy.note_imminent_preimage',
    /**
     *  Register the preimage for an upcoming proposal. This requires the proposal to be
     *  in the dispatch queue. No deposit is needed.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `encoded_proposal`: The preimage of a proposal.
     * 
     *  Emits `PreimageNoted`.
     * 
     *  # <weight>
     *  see `weight_for::note_preimage`
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.note_imminent_preimage',
        sts.struct({
            encodedProposal: sts.bytes(),
        })
    ),
}

export const noteImminentPreimageOperational =  {
    name: 'Democracy.note_imminent_preimage_operational',
    /**
     *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    v0: new CallType(
        'Democracy.note_imminent_preimage_operational',
        sts.struct({
            encodedProposal: sts.bytes(),
        })
    ),
}

export const reapPreimage =  {
    name: 'Democracy.reap_preimage',
    /**
     *  Remove an expired proposal preimage and collect the deposit.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `proposal_hash`: The preimage hash of a proposal.
     *  - `proposal_length_upper_bound`: an upper bound on length of the proposal.
     *    Extrinsic is weighted according to this value with no refund.
     * 
     *  This will only work after `VotingPeriod` blocks from the time that the preimage was
     *  noted, if it's the same account doing it. If it's a different account, then it'll only
     *  work an additional `EnactmentPeriod` later.
     * 
     *  Emits `PreimageReaped`.
     * 
     *  # <weight>
     *  - Complexity: `O(D)` where D is length of proposal.
     *  - Db reads: `Preimages`
     *  - Db writes: `Preimages`
     *  - Base Weight: 39.31 + .003 * b µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.reap_preimage',
        sts.struct({
            proposalHash: v0.Hash,
            proposalLenUpperBound: sts.number(),
        })
    ),
}

export const unlock =  {
    name: 'Democracy.unlock',
    /**
     *  Unlock tokens that have an expired lock.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `target`: The account to remove the lock on.
     * 
     *  # <weight>
     *  - Complexity `O(R)` with R number of vote of target.
     *  - Db reads: `VotingOf`, `balances locks`, `target account`
     *  - Db writes: `VotingOf`, `balances locks`, `target account`
     *  - Base Weight:
     *      - Unlock Remove: 42.96 + .048 * R
     *      - Unlock Set: 37.63 + .327 * R
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.unlock',
        sts.struct({
            target: v0.AccountId,
        })
    ),
    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    v9291: new CallType(
        'Democracy.unlock',
        sts.struct({
            target: v9291.MultiAddress,
        })
    ),
}

export const openProxy =  {
    name: 'Democracy.open_proxy',
    /**
     *  Become a proxy.
     * 
     *  This must be called prior to a later `activate_proxy`.
     * 
     *  Origin must be a Signed.
     * 
     *  - `target`: The account whose votes will later be proxied.
     * 
     *  `close_proxy` must be called before the account can be destroyed.
     * 
     *  # <weight>
     *  - Complexity: O(1)
     *  - Db reads: `Proxy`, `proxy account`
     *  - Db writes: `Proxy`, `proxy account`
     *  - Base Weight: 14.86 µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.open_proxy',
        sts.struct({
            target: v0.AccountId,
        })
    ),
}

export const removeVote =  {
    name: 'Democracy.remove_vote',
    /**
     *  Remove a vote for a referendum.
     * 
     *  If:
     *  - the referendum was cancelled, or
     *  - the referendum is ongoing, or
     *  - the referendum has ended such that
     *    - the vote of the account was in opposition to the result; or
     *    - there was no conviction to the account's vote; or
     *    - the account made a split vote
     *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
     *  funds being available.
     * 
     *  If, however, the referendum has ended and:
     *  - it finished corresponding to the vote of the account, and
     *  - the account made a standard vote with conviction, and
     *  - the lock period of the conviction is not over
     *  ...then the lock will be aggregated into the overall account's lock, which may involve
     *  *overlocking* (where the two locks are combined into a single lock that is the maximum
     *  of both the amount locked and the time is it locked for).
     * 
     *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
     *  registered for referendum `index`.
     * 
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  # <weight>
     *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *    Weight is calculated for the maximum number of vote.
     *  - Db reads: `ReferendumInfoOf`, `VotingOf`
     *  - Db writes: `ReferendumInfoOf`, `VotingOf`
     *  - Base Weight: 21.03 + .359 * R
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.remove_vote',
        sts.struct({
            index: v0.ReferendumIndex,
        })
    ),
}

export const removeOtherVote =  {
    name: 'Democracy.remove_other_vote',
    /**
     *  Remove a vote for a referendum.
     * 
     *  If the `target` is equal to the signer, then this function is exactly equivalent to
     *  `remove_vote`. If not equal to the signer, then the vote must have expired,
     *  either because the referendum was cancelled, because the voter lost the referendum or
     *  because the conviction period is over.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `target`: The account of the vote to be removed; this account must have voted for
     *    referendum `index`.
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  # <weight>
     *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *    Weight is calculated for the maximum number of vote.
     *  - Db reads: `ReferendumInfoOf`, `VotingOf`
     *  - Db writes: `ReferendumInfoOf`, `VotingOf`
     *  - Base Weight: 19.15 + .372 * R
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.remove_other_vote',
        sts.struct({
            target: v0.AccountId,
            index: v0.ReferendumIndex,
        })
    ),
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
    v9291: new CallType(
        'Democracy.remove_other_vote',
        sts.struct({
            target: v9291.MultiAddress,
            index: sts.number(),
        })
    ),
}

export const proxyDelegate =  {
    name: 'Democracy.proxy_delegate',
    /**
     *  Delegate the voting power (with some given conviction) of a proxied account.
     * 
     *  The balance delegated is locked for as long as it's delegated, and thereafter for the
     *  time appropriate for the conviction's lock period.
     * 
     *  The dispatch origin of this call must be _Signed_, and the signing account must have
     *  been set as the proxy account for `target`.
     * 
     *  - `target`: The account whole voting power shall be delegated and whose balance locked.
     *    This account must either:
     *    - be delegating already; or
     *    - have no voting activity (if there is, then it will need to be removed/consolidated
     *      through `reap_vote` or `unvote`).
     *  - `to`: The account whose voting the `target` account's voting power will follow.
     *  - `conviction`: The conviction that will be attached to the delegated votes. When the
     *    account is undelegated, the funds will be locked for the corresponding period.
     *  - `balance`: The amount of the account's balance to be used in delegating. This must
     *    not be more than the account's current balance.
     * 
     *  Emits `Delegated`.
     * 
     *  # <weight>
     *  same as `delegate with additional:
     *  - Db reads: `Proxy`, `proxy account`
     *  - Db writes: `proxy account`
     *  - Base Weight: 68.61 + 8.039 * R µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.proxy_delegate',
        sts.struct({
            to: v0.AccountId,
            conviction: v0.Conviction,
            balance: v0.BalanceOf,
        })
    ),
}

export const proxyUndelegate =  {
    name: 'Democracy.proxy_undelegate',
    /**
     *  Undelegate the voting power of a proxied account.
     * 
     *  Tokens may be unlocked following once an amount of time consistent with the lock period
     *  of the conviction with which the delegation was issued.
     * 
     *  The dispatch origin of this call must be _Signed_ and the signing account must be a
     *  proxy for some other account which is currently delegating.
     * 
     *  Emits `Undelegated`.
     * 
     *  # <weight>
     *  same as `undelegate with additional:
     *  Db reads: `Proxy`
     *  Base Weight: 39 + 7.958 * R µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.proxy_undelegate',
        sts.unit()
    ),
}

export const proxyRemoveVote =  {
    name: 'Democracy.proxy_remove_vote',
    /**
     *  Remove a proxied vote for a referendum.
     * 
     *  Exactly equivalent to `remove_vote` except that it operates on the account that the
     *  sender is a proxy for.
     * 
     *  The dispatch origin of this call must be _Signed_ and the signing account must be a
     *  proxy for some other account which has a registered vote for the referendum of `index`.
     * 
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  # <weight>
     *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *    Weight is calculated for the maximum number of vote.
     *  - Db reads: `ReferendumInfoOf`, `VotingOf`, `Proxy`
     *  - Db writes: `ReferendumInfoOf`, `VotingOf`
     *  - Base Weight: 26.35 + .36 * R µs
     *  # </weight>
     */
    v0: new CallType(
        'Democracy.proxy_remove_vote',
        sts.struct({
            index: v0.ReferendumIndex,
        })
    ),
}

export const enactProposal =  {
    name: 'Democracy.enact_proposal',
    /**
     *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    v0: new CallType(
        'Democracy.enact_proposal',
        sts.struct({
            proposalHash: v0.Hash,
            index: v0.ReferendumIndex,
        })
    ),
}

export const blacklist =  {
    name: 'Democracy.blacklist',
    /**
     *  Permanently place a proposal into the blacklist. This prevents it from ever being
     *  proposed again.
     * 
     *  If called on a queued public or external proposal, then this will result in it being
     *  removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     *  then it will be cancelled.
     * 
     *  The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     *  - `proposal_hash`: The proposal hash to blacklist permanently.
     *  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     *  cancelled.
     * 
     *  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *    reasonable value).
     */
    v25: new CallType(
        'Democracy.blacklist',
        sts.struct({
            proposalHash: v25.Hash,
            maybeRefIndex: sts.option(() => v25.ReferendumIndex),
        })
    ),
}

export const cancelProposal =  {
    name: 'Democracy.cancel_proposal',
    /**
     *  Remove a proposal.
     * 
     *  The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     *  - `prop_index`: The index of the proposal to cancel.
     * 
     *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    v25: new CallType(
        'Democracy.cancel_proposal',
        sts.struct({
            propIndex: sts.number(),
        })
    ),
}

export const setMetadata =  {
    name: 'Democracy.set_metadata',
    /**
     * Set or clear a metadata of a proposal or a referendum.
     * 
     * Parameters:
     * - `origin`: Must correspond to the `MetadataOwner`.
     *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
     *       threshold.
     *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
     *       threshold.
     *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
     *       threshold.
     *     - `Signed` by a creator for a public proposal.
     *     - `Signed` to clear a metadata for a finished referendum.
     *     - `Root` to set a metadata for an ongoing referendum.
     * - `owner`: an identifier of a metadata owner.
     * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
     */
    v9420: new CallType(
        'Democracy.set_metadata',
        sts.struct({
            owner: v9420.MetadataOwner,
            maybeHash: sts.option(() => v9420.H256),
        })
    ),
}
