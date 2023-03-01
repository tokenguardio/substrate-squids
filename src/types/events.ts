import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
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

export class AdvisoryCommitteeApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommittee.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommittee.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV34(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommittee.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommittee.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.Executed') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV34(): {proposalHash: Uint8Array, result: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.Executed') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV35(): {proposalHash: Uint8Array, result: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV36(): {proposalHash: Uint8Array, result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommittee.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.MemberExecuted') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV34(): {proposalHash: Uint8Array, result: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.MemberExecuted') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV35(): {proposalHash: Uint8Array, result: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV36(): {proposalHash: Uint8Array, result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommittee.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV34(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommittee.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('AdvisoryCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV34(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeCollectiveApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeCollective.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeCollectiveClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeCollective.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get asV23(): [Uint8Array, number, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeCollectiveDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeCollective.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeCollectiveExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeCollective.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeCollective.Executed') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get asV23(): [Uint8Array, v23.DispatchResult] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeCollective.Executed') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV32(): [Uint8Array, v32.Type_34] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeCollectiveMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeCollective.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A single member did some action; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeCollective.MemberExecuted') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A single member did some action; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get asV23(): [Uint8Array, v23.DispatchResult] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeCollective.MemberExecuted') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV32(): [Uint8Array, v32.Type_34] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeCollectiveProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeCollective.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeCollective.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get asV23(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeCollectiveVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeCollective.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeCollective.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get asV23(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeMembershipDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeMembership.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Phantom member, never used.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Phantom member, never used.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeMembershipKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeMembership.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  One of the members' keys changed.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  One of the members' keys changed.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeMembershipMemberAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeMembership.MemberAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The given member was added; see the transaction for who.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The given member was added; see the transaction for who.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeMembershipMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeMembership.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The given member was removed; see the transaction for who.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The given member was removed; see the transaction for who.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeMembershipMembersResetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeMembership.MembersReset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The membership was reset; see the transaction for who the new set is.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The membership was reset; see the transaction for who the new set is.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AdvisoryCommitteeMembershipMembersSwappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AdvisoryCommitteeMembership.MembersSwapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Two members were swapped; see the transaction for who.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AdvisoryCommitteeMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Two members were swapped; see the transaction for who.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetRegistryRegisteredAssetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetRegistry.RegisteredAsset')
        this._chain = ctx._chain
        this.event = event
    }

    get isV41(): boolean {
        return this._chain.getEventHash('AssetRegistry.RegisteredAsset') === '47a0224cc3993ef1702aa6bee9466f7c11dccd3e0a25afeef346fc4cbe1b9754'
    }

    get asV41(): {assetId: v41.Asset, metadata: v41.AssetMetadata} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    get isV42(): boolean {
        return this._chain.getEventHash('AssetRegistry.RegisteredAsset') === 'e110655febffd22d913716e6e789491555a6796de2506ca0b2e2701d35188040'
    }

    get asV42(): {assetId: v42.Asset, metadata: v42.AssetMetadata} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetRegistryUpdatedAssetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetRegistry.UpdatedAsset')
        this._chain = ctx._chain
        this.event = event
    }

    get isV41(): boolean {
        return this._chain.getEventHash('AssetRegistry.UpdatedAsset') === '47a0224cc3993ef1702aa6bee9466f7c11dccd3e0a25afeef346fc4cbe1b9754'
    }

    get asV41(): {assetId: v41.Asset, metadata: v41.AssetMetadata} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    get isV42(): boolean {
        return this._chain.getEventHash('AssetRegistry.UpdatedAsset') === 'e110655febffd22d913716e6e789491555a6796de2506ca0b2e2701d35188040'
    }

    get asV42(): {assetId: v42.Asset, metadata: v42.AssetMetadata} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorFilterEligibleUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AuthorFilter.EligibleUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The amount of eligible authors for the filter to select has been changed.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AuthorFilter.EligibleUpdated') === '3db3753dcff7ca8b313d91fce9f0cd33b8f6c491f0697e71d850b62d343b9faf'
    }

    /**
     *  The amount of eligible authors for the filter to select has been changed.
     */
    get asV23(): number {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The amount of eligible authors for the filter to select has been changed.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('AuthorFilter.EligibleUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * The amount of eligible authors for the filter to select has been changed.
     */
    get asV36(): number {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorMappingAuthorDeRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AuthorMapping.AuthorDeRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An AuthorId has been de-registered, and its AccountId mapping removed.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorDeRegistered') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An AuthorId has been de-registered, and its AccountId mapping removed.
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An NimbusId has been de-registered, and its AccountId mapping removed.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorDeRegistered') === 'c21728b5156f66dcb3edd0992c9a6c22c0541f5d479f1c54a53d7bfd2ff316b6'
    }

    /**
     * An NimbusId has been de-registered, and its AccountId mapping removed.
     */
    get asV35(): {authorId: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorMappingAuthorRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AuthorMapping.AuthorRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An AuthorId has been registered and mapped to an AccountId.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorRegistered') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  An AuthorId has been registered and mapped to an AccountId.
     */
    get asV23(): [Uint8Array, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A NimbusId has been registered and mapped to an AccountId.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorRegistered') === 'b096b1f987e6ae87d9414ea39591b875d0225755a6a6b5e52dfd38fa3057274f'
    }

    /**
     * A NimbusId has been registered and mapped to an AccountId.
     */
    get asV35(): {authorId: Uint8Array, accountId: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorMappingAuthorRotatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AuthorMapping.AuthorRotated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An AuthorId has been registered, replacing a previous registration and its mapping.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorRotated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  An AuthorId has been registered, replacing a previous registration and its mapping.
     */
    get asV23(): [Uint8Array, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An NimbusId has been registered, replacing a previous registration and its mapping.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorRotated') === 'aa286aecf9e5c540791d482c684cae0750677c1990a5d24ddf7a3e426573bfa6'
    }

    /**
     * An NimbusId has been registered, replacing a previous registration and its mapping.
     */
    get asV35(): {newAuthorId: Uint8Array, accountId: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorMappingDefunctAuthorBustedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AuthorMapping.DefunctAuthorBusted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An AuthorId has been forcibly deregistered after not being rotated or cleaned up.
     *  The reporteing account has been rewarded accordingly.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('AuthorMapping.DefunctAuthorBusted') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  An AuthorId has been forcibly deregistered after not being rotated or cleaned up.
     *  The reporteing account has been rewarded accordingly.
     */
    get asV23(): [Uint8Array, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An NimbusId has been forcibly deregistered after not being rotated or cleaned up.
     * The reporteing account has been rewarded accordingly.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('AuthorMapping.DefunctAuthorBusted') === 'b096b1f987e6ae87d9414ea39591b875d0225755a6a6b5e52dfd38fa3057274f'
    }

    /**
     * An NimbusId has been forcibly deregistered after not being rotated or cleaned up.
     * The reporteing account has been rewarded accordingly.
     */
    get asV35(): {authorId: Uint8Array, accountId: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorMappingKeysRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AuthorMapping.KeysRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A NimbusId has been registered and mapped to an AccountId.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('AuthorMapping.KeysRegistered') === '27c52ba32d23690c219de8b4b5f7dae50d47f9abc526e5dcb687bb0320e14535'
    }

    /**
     * A NimbusId has been registered and mapped to an AccountId.
     */
    get asV40(): {nimbusId: Uint8Array, accountId: Uint8Array, keys: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorMappingKeysRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AuthorMapping.KeysRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An NimbusId has been de-registered, and its AccountId mapping removed.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('AuthorMapping.KeysRemoved') === '27c52ba32d23690c219de8b4b5f7dae50d47f9abc526e5dcb687bb0320e14535'
    }

    /**
     * An NimbusId has been de-registered, and its AccountId mapping removed.
     */
    get asV40(): {nimbusId: Uint8Array, accountId: Uint8Array, keys: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorMappingKeysRotatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AuthorMapping.KeysRotated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An NimbusId has been registered, replacing a previous registration and its mapping.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('AuthorMapping.KeysRotated') === '681b7b1fef2045661686974ebd1c0aa3ac7190e6dbdb45dcbce54130f10635f5'
    }

    /**
     * An NimbusId has been registered, replacing a previous registration and its mapping.
     */
    get asV40(): {newNimbusId: Uint8Array, accountId: Uint8Array, newKeys: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesBalanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.BalanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    get asV23(): [Uint8Array, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
    }

    /**
     * A balance was set by root.
     */
    get asV34(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV34(): {who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesDustLostEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.DustLost')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss. \[account, balance\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss. \[account, balance\]
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV34(): {account: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesEndowedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Endowed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account was created with some free balance. \[account, free_balance\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was created with some free balance. \[account, free_balance\]
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asV34(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReserveRepatriatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.ReserveRepatriated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     *  \[from, to, balance, destination_status\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '68e9ec5664c8ffe977da0c890bac43122a5cf13565c1c936e2120ba4980bcf31'
    }

    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     *  \[from, to, balance, destination_status\]
     */
    get asV23(): [Uint8Array, Uint8Array, bigint, v23.BalanceStatus] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV34(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v34.BalanceStatus} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV34(): {who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior). \[who,
     * amount_slashed\]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior). \[who,
     * amount_slashed\]
     */
    get asV33(): [Uint8Array, bigint] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV34(): {who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    get asV23(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV34(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV34(): {who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesWithdrawEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Withdraw')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
     */
    get asV33(): [Uint8Array, bigint] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV34(): {who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyAwarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('Bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get asV40(): {index: number, beneficiary: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyBecameActiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyBecameActive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('Bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get asV40(): {index: number} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is cancelled.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('Bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty is cancelled.
     */
    get asV40(): {index: number} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('Bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get asV40(): {index: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyExtendedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyExtended')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty expiry is extended.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('Bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty expiry is extended.
     */
    get asV40(): {index: number} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyProposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New bounty proposal.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('Bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * New bounty proposal.
     */
    get asV40(): {index: number} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('Bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get asV40(): {index: number, bond: bigint} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV34(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Council.Executed') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV34(): {proposalHash: Uint8Array, result: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Council.Executed') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV35(): {proposalHash: Uint8Array, result: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV36(): {proposalHash: Uint8Array, result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV34(): {proposalHash: Uint8Array, result: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV35(): {proposalHash: Uint8Array, result: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV36(): {proposalHash: Uint8Array, result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV34(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV34(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilMembershipDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilMembership.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Phantom member, never used.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('CouncilMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Phantom member, never used.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilMembershipKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilMembership.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * One of the members' keys changed.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('CouncilMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * One of the members' keys changed.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilMembershipMemberAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilMembership.MemberAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('CouncilMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilMembershipMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilMembership.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('CouncilMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilMembershipMembersResetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilMembership.MembersReset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('CouncilMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilMembershipMembersSwappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilMembership.MembersSwapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('CouncilMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CourtExitedJurorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Court.ExitedJuror')
        this._chain = ctx._chain
        this.event = event
    }

    get isV23(): boolean {
        return this._chain.getEventHash('Court.ExitedJuror') === '75f83e3ad9ab67c8897c281a0bab3a6ee7900023929bde58b878a248cc6d3ab0'
    }

    get asV23(): [Uint8Array, v23.Juror] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class CourtJoinedJurorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Court.JoinedJuror')
        this._chain = ctx._chain
        this.event = event
    }

    get isV23(): boolean {
        return this._chain.getEventHash('Court.JoinedJuror') === '75f83e3ad9ab67c8897c281a0bab3a6ee7900023929bde58b878a248cc6d3ab0'
    }

    get asV23(): [Uint8Array, v23.Juror] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanInitialPaymentMadeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.InitialPaymentMade')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The initial payment of InitializationPayment % was paid
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Crowdloan.InitialPaymentMade') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The initial payment of InitializationPayment % was paid
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanInitializedAccountWithNotEnoughContributionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.InitializedAccountWithNotEnoughContribution')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  When initializing the reward vec an already initialized account was found
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Crowdloan.InitializedAccountWithNotEnoughContribution') === '2d65ee2d572a655670c2802c5e86c911ff9a45b16aa4510bab60ddc99f0ee212'
    }

    /**
     *  When initializing the reward vec an already initialized account was found
     */
    get asV23(): [Uint8Array, (Uint8Array | undefined), bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanInitializedAlreadyInitializedAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.InitializedAlreadyInitializedAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  When initializing the reward vec an already initialized account was found
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Crowdloan.InitializedAlreadyInitializedAccount') === '2d65ee2d572a655670c2802c5e86c911ff9a45b16aa4510bab60ddc99f0ee212'
    }

    /**
     *  When initializing the reward vec an already initialized account was found
     */
    get asV23(): [Uint8Array, (Uint8Array | undefined), bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanNativeIdentityAssociatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.NativeIdentityAssociated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Someone has proven they made a contribution and associated a native identity with it.
     *  Data is the relay account,  native account and the total amount of _rewards_ that will be paid
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Crowdloan.NativeIdentityAssociated') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Someone has proven they made a contribution and associated a native identity with it.
     *  Data is the relay account,  native account and the total amount of _rewards_ that will be paid
     */
    get asV23(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanRewardAddressUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.RewardAddressUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A contributor has updated the reward address.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Crowdloan.RewardAddressUpdated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  A contributor has updated the reward address.
     */
    get asV23(): [Uint8Array, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanRewardsPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.RewardsPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A contributor has claimed some rewards.
     *  Data is the account getting paid and the amount of rewards paid.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Crowdloan.RewardsPaid') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A contributor has claimed some rewards.
     *  Data is the account getting paid and the amount of rewards paid.
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class CumulusXcmExecutedDownwardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CumulusXcm.ExecutedDownward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Downward message executed with the given outcome.
     *  \[ id, outcome \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === 'c55363c53326bf03dc1b5da8e71b9c43e13daa03719254eb92de58432f5dad5c'
    }

    /**
     *  Downward message executed with the given outcome.
     *  \[ id, outcome \]
     */
    get asV23(): [Uint8Array, v23.Outcome] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === 'ce1ecc6cb7bde7a0e967ed0e6caff9002b8e335404bc1e51403dc21d44028613'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV32(): [Uint8Array, v32.V2Outcome] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV34(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '155c7cce0948b8cb240d1401bb772a72b24567aa52618e9a4aaa84271c380044'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV34(): [Uint8Array, v34.V2Outcome] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CumulusXcmInvalidFormatEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CumulusXcm.InvalidFormat')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Downward message is invalid XCM.
     *  \[ id \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
    }

    /**
     *  Downward message is invalid XCM.
     *  \[ id \]
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class CumulusXcmUnsupportedVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CumulusXcm.UnsupportedVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Downward message is unsupported version of XCM.
     *  \[ id \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
    }

    /**
     *  Downward message is unsupported version of XCM.
     *  \[ id \]
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrencyBalanceUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currency.BalanceUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Update balance success. \[currency_id, who, amount\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Currency.BalanceUpdated') === 'e3453f8e35758b70a82dd05a90cba65051ddc128f27806fb27ab590f7defa792'
    }

    /**
     *  Update balance success. \[currency_id, who, amount\]
     */
    get asV23(): [v23.Currency, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Update balance success. \[currency_id, who, amount\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Currency.BalanceUpdated') === 'f6044cc71709be46b6c7740fa97dc779b9cbc9bd028d3a3769d4d9b3205d8d1f'
    }

    /**
     * Update balance success. \[currency_id, who, amount\]
     */
    get asV32(): [v32.Asset, Uint8Array, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Update balance success.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Currency.BalanceUpdated') === '75666d19ba11aaaf9a92ed64350b6b143c95199ecaa5f15cd04cbf3c650c68fa'
    }

    /**
     * Update balance success.
     */
    get asV34(): {currencyId: v34.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrencyDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currency.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Deposit success. \[currency_id, who, amount\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Currency.Deposited') === '6a3d7e7accde03ae3a0153b6dc5d6cc04eea87393610da84950bbe601ce449cc'
    }

    /**
     *  Deposit success. \[currency_id, who, amount\]
     */
    get asV23(): [v23.Currency, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Deposit success. \[currency_id, who, amount\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Currency.Deposited') === 'df0511d0e921e296dbd5c8b43cb7d8933820cb906e355c768e8407ca9193138f'
    }

    /**
     * Deposit success. \[currency_id, who, amount\]
     */
    get asV32(): [v32.Asset, Uint8Array, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Deposit success.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Currency.Deposited') === 'a4f1c201945cdbe991182662e3e9964553c56bb38739bf247036896397e7d07d'
    }

    /**
     * Deposit success.
     */
    get asV34(): {currencyId: v34.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrencySlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currency.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Slash success.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Currency.Slashed') === '8f2cbb3f03c7eab965686f8bb008e153e836248f452d0a230e6877c52367d172'
    }

    /**
     * Slash success.
     */
    get asV35(): {currencyId: v35.Asset, who: Uint8Array, amount: bigint, gap: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrencyTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currency.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Currency transfer success. \[currency_id, from, to, amount\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Currency.Transferred') === 'd4ffed7d43664acfa5fe9f6825f538d93e8447c873d770deb40246b11895e2ab'
    }

    /**
     *  Currency transfer success. \[currency_id, from, to, amount\]
     */
    get asV23(): [v23.Currency, Uint8Array, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Currency transfer success. \[currency_id, from, to, amount\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Currency.Transferred') === '3eb8c7c7a28e521728d456307ad372e814aeb4fb200f4be58a00098f9f61c8de'
    }

    /**
     * Currency transfer success. \[currency_id, from, to, amount\]
     */
    get asV32(): [v32.Asset, Uint8Array, Uint8Array, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Currency transfer success.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Currency.Transferred') === 'ad3d65a0944e3402fd00687198797c37e7b3335997a6f2143cf8893f4d007b35'
    }

    /**
     * Currency transfer success.
     */
    get asV34(): {currencyId: v34.Asset, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrencyWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currency.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Withdraw success. \[currency_id, who, amount\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Currency.Withdrawn') === '6a3d7e7accde03ae3a0153b6dc5d6cc04eea87393610da84950bbe601ce449cc'
    }

    /**
     *  Withdraw success. \[currency_id, who, amount\]
     */
    get asV23(): [v23.Currency, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Withdraw success. \[currency_id, who, amount\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Currency.Withdrawn') === 'df0511d0e921e296dbd5c8b43cb7d8933820cb906e355c768e8407ca9193138f'
    }

    /**
     * Withdraw success. \[currency_id, who, amount\]
     */
    get asV32(): [v32.Asset, Uint8Array, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Withdraw success.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Currency.Withdrawn') === 'a4f1c201945cdbe991182662e3e9964553c56bb38739bf247036896397e7d07d'
    }

    /**
     * Withdraw success.
     */
    get asV34(): {currencyId: v34.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyBlacklistedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Blacklisted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV34(): {refIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyDelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Delegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has delegated their vote to another account.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
    }

    /**
     * An account has delegated their vote to another account.
     */
    get asV34(): {who: Uint8Array, target: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been enacted.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '1f8afbb40842c0eb231c4c0456dea31d665cbfc12f23138aebe104164e4f18dc'
    }

    /**
     * A proposal has been enacted.
     */
    get asV34(): {refIndex: number, result: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '270512fa9651c9fa2eb584a439cab409bb758634bd42c08ad5fc0e9bbed943b0'
    }

    /**
     * A proposal has been enacted.
     */
    get asV35(): {refIndex: number, result: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '957b797337eaa1f370b65a94f7685042cc04730ba165349e248cfdde80b53c25'
    }

    /**
     * A proposal has been enacted.
     */
    get asV36(): {refIndex: number, result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyExternalTabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.ExternalTabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An external proposal has been tabled.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An external proposal has been tabled.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyNotPassedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.NotPassed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV34(): {refIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPassedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Passed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been approved by referendum.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asV34(): {refIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageInvalidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageInvalid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get asV34(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageMissingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageMissing')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get asV34(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageNoted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get asV34(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageReapedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageReaped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get asV34(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPreimageUsedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.PreimageUsed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get asV34(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyProposalCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.ProposalCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal got canceled.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Democracy.ProposalCanceled') === '4229a060ed682a59f5b96a0a1d18ae4a471b42fbbe5beff110f3dbb41e7d7224'
    }

    /**
     * A proposal got canceled.
     */
    get asV41(): {propIndex: number} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion has been proposed by a public account.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asV34(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracySecondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Seconded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has secconded a proposal
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
    }

    /**
     * An account has secconded a proposal
     */
    get asV34(): {seconder: Uint8Array, propIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Started')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has begun.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asV34(): {refIndex: number, threshold: v34.VoteThreshold} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyTabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Tabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV34(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyUndelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Undelegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get asV34(): {account: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyVetoedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Vetoed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An external proposal has been vetoed.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '476fac158e19d317a76ca4160496b9e1a5589b2399bfcd76da035c24ae6b4375'
    }

    /**
     * An external proposal has been vetoed.
     */
    get asV34(): {who: Uint8Array, proposalHash: Uint8Array, until: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has voted in a referendum
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
    }

    /**
     * An account has voted in a referendum
     */
    get asV34(): {voter: Uint8Array, refIndex: number, vote: v34.AccountVote} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueExecutedDownwardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.ExecutedDownward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Downward message executed with the given outcome.
     *  \[ id, outcome \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === 'bded11eb13ef577fbd5253d83b6ca737286d75b9e4dbf3dcef3c9d21c2a277d2'
    }

    /**
     *  Downward message executed with the given outcome.
     *  \[ id, outcome \]
     */
    get asV23(): [Uint8Array, v23.Outcome] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === 'f660a1eb74571095e7cab99beb471c0ab4687ebb9afcd9f8734fc316dd9f477d'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV32(): [Uint8Array, v32.V2Outcome] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV34(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '286143d78cae88e1dcd7f8fca6da4dcb49ebc3ba61ad473eec7ff13812f3fd56'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV34(): [Uint8Array, v34.V2Outcome] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '9b6c90aca74067a591eda76a227e61ce66cd6597483f828a039aba267c0d21a9'
    }

    /**
     * Downward message executed with the given outcome.
     */
    get asV40(): {messageId: Uint8Array, outcome: v40.V2Outcome} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueInvalidFormatEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.InvalidFormat')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Downward message is invalid XCM.
     *  \[ id \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Downward message is invalid XCM.
     *  \[ id \]
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is invalid XCM.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('DmpQueue.InvalidFormat') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * Downward message is invalid XCM.
     */
    get asV40(): {messageId: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueOverweightEnqueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.OverweightEnqueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Downward message is overweight and was placed in the overweight queue.
     *  \[ id, index, required \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
    }

    /**
     *  Downward message is overweight and was placed in the overweight queue.
     *  \[ id, index, required \]
     */
    get asV23(): [Uint8Array, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ffa192c80e10233d155345fc4cc34bc357a97a6465c78ccf6a14b02ee5b8c21f'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get asV40(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: bigint} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ad9cb107597768cf938dffc06f4759d95e30b4d686ee33c209c5a44145df0c73'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get asV42(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueOverweightServicedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.OverweightServiced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Downward message from the overweight queue was executed.
     *  \[ index, used \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
    }

    /**
     *  Downward message from the overweight queue was executed.
     *  \[ index, used \]
     */
    get asV23(): [bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === '7deec7d9ba4a81157571b321671d50b393890bd802f27d9b3ba2609ffa497713'
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get asV40(): {overweightIndex: bigint, weightUsed: bigint} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'f16ac3f6b10f93f6d4efd4dde1eba6cc73e06d27c2e2ec66eec4923e16cbfc6f'
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get asV42(): {overweightIndex: bigint, weightUsed: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueUnsupportedVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.UnsupportedVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Downward message is unsupported version of XCM.
     *  \[ id \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Downward message is unsupported version of XCM.
     *  \[ id \]
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is unsupported version of XCM.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * Downward message is unsupported version of XCM.
     */
    get asV40(): {messageId: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueWeightExhaustedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.WeightExhausted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The weight limit for handling downward messages was reached.
     *  \[ id, remaining, required \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
    }

    /**
     *  The weight limit for handling downward messages was reached.
     *  \[ id, remaining, required \]
     */
    get asV23(): [Uint8Array, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'dcf12831e69a1760af0584247b404096aa4ce1c77c7b3caae95d831bf4afa0b2'
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get asV40(): {messageId: Uint8Array, remainingWeight: bigint, requiredWeight: bigint} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'b9a55b745575cc47de66be392bf446a9558a5b3e9201c5b37598517251cff44f'
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get asV42(): {messageId: Uint8Array, remainingWeight: v42.Weight, requiredWeight: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class GlobalDisputesAddedVotingOutcomeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'GlobalDisputes.AddedVotingOutcome')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new voting outcome has been added.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('GlobalDisputes.AddedVotingOutcome') === '31f679c6482778074646f1a70e3450347f7b988073b6ef7c00b0f65744a1c0ba'
    }

    /**
     * A new voting outcome has been added.
     */
    get asV41(): {marketId: bigint, owner: Uint8Array, outcome: v41.OutcomeReport} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class GlobalDisputesGlobalDisputeWinnerDeterminedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'GlobalDisputes.GlobalDisputeWinnerDetermined')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The winner of the global dispute system is determined.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('GlobalDisputes.GlobalDisputeWinnerDetermined') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     * The winner of the global dispute system is determined.
     */
    get asV41(): {marketId: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class GlobalDisputesOutcomeOwnersRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'GlobalDisputes.OutcomeOwnersRewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The outcome owner has been rewarded.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('GlobalDisputes.OutcomeOwnersRewarded') === 'f76d553aa27dcffed843c2e3ea49584bb7550b7f6d7f367752bcacf0f10c9145'
    }

    /**
     * The outcome owner has been rewarded.
     */
    get asV41(): {marketId: bigint, owners: Uint8Array[]} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class GlobalDisputesOutcomeOwnersRewardedWithNoFundsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'GlobalDisputes.OutcomeOwnersRewardedWithNoFunds')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * No funds could be spent as reward to the outcome owner(s).
     */
    get isV41(): boolean {
        return this._chain.getEventHash('GlobalDisputes.OutcomeOwnersRewardedWithNoFunds') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     * No funds could be spent as reward to the outcome owner(s).
     */
    get asV41(): {marketId: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class GlobalDisputesOutcomesFullyCleanedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'GlobalDisputes.OutcomesFullyCleaned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The outcomes storage item is fully cleaned.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('GlobalDisputes.OutcomesFullyCleaned') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     * The outcomes storage item is fully cleaned.
     */
    get asV41(): {marketId: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class GlobalDisputesOutcomesPartiallyCleanedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'GlobalDisputes.OutcomesPartiallyCleaned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The outcomes storage item is partially cleaned.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('GlobalDisputes.OutcomesPartiallyCleaned') === '2d8fec72d3e36c29cd347083d3311cbd62a17f1318b1377488dc738d486872af'
    }

    /**
     * The outcomes storage item is partially cleaned.
     */
    get asV41(): {marketId: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class GlobalDisputesVotedOnOutcomeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'GlobalDisputes.VotedOnOutcome')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A vote happened on an outcome.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('GlobalDisputes.VotedOnOutcome') === 'cc1e7213b73c7cbe8c3b87cac64648d0e347a2fb0b2c2fe6f75321bb5bc2da1e'
    }

    /**
     * A vote happened on an outcome.
     */
    get asV41(): {voter: Uint8Array, marketId: bigint, outcome: v41.OutcomeReport, voteAmount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentityClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentityCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A name was cleared, and the given balance returned. \[who, deposit\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was cleared, and the given balance returned. \[who, deposit\]
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asV34(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentityKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentityKilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A name was removed and the given balance slashed. \[who, deposit\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was removed and the given balance slashed. \[who, deposit\]
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asV34(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentitySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentitySet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A name was set or reset (which will remove all judgements). \[who\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A name was set or reset (which will remove all judgements). \[who\]
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get asV34(): {who: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementGivenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementGiven')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A judgement was given by a registrar. \[target, registrar_index\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement was given by a registrar. \[target, registrar_index\]
     */
    get asV23(): [Uint8Array, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was given by a registrar.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
    }

    /**
     * A judgement was given by a registrar.
     */
    get asV34(): {target: Uint8Array, registrarIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A judgement was asked from a registrar. \[who, registrar_index\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement was asked from a registrar. \[who, registrar_index\]
     */
    get asV23(): [Uint8Array, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was asked from a registrar.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement was asked from a registrar.
     */
    get asV34(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementUnrequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementUnrequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A judgement request was retracted. \[who, registrar_index\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement request was retracted. \[who, registrar_index\]
     */
    get asV23(): [Uint8Array, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement request was retracted.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement request was retracted.
     */
    get asV34(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityRegistrarAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.RegistrarAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A registrar was added. \[registrar_index\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A registrar was added. \[registrar_index\]
     */
    get asV23(): number {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registrar was added.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
    }

    /**
     * A registrar was added.
     */
    get asV34(): {registrarIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
     */
    get asV23(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get asV34(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A sub-identity was removed from an identity and the deposit freed.
     *  \[sub, main, deposit\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was removed from an identity and the deposit freed.
     *  \[sub, main, deposit\]
     */
    get asV23(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asV34(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityRevokedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityRevoked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A sub-identity was cleared, and the given deposit repatriated from the
     *  main identity account to the sub-identity account. \[sub, main, deposit\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was cleared, and the given deposit repatriated from the
     *  main identity account to the sub-identity account. \[sub, main, deposit\]
     */
    get asV23(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asV34(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class LiquidityMiningAddedIncentivesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LiquidityMining.AddedIncentives')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The number of markets that received incentives in a block
     */
    get isV23(): boolean {
        return this._chain.getEventHash('LiquidityMining.AddedIncentives') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  The number of markets that received incentives in a block
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class LiquidityMiningDistributedIncentivesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LiquidityMining.DistributedIncentives')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The total amount of incentives distributed to accounts along side the number
     *  of accounts that received these incentives.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('LiquidityMining.DistributedIncentives') === '2bd477437892e2d50fa06bf72436226e2c75b8369c9a637d70237478ef09abe2'
    }

    /**
     *  The total amount of incentives distributed to accounts along side the number
     *  of accounts that received these incentives.
     */
    get asV23(): [bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class LiquidityMiningSubtractedIncentivesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LiquidityMining.SubtractedIncentives')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The number of markets that subtracted incentives in a block
     */
    get isV23(): boolean {
        return this._chain.getEventHash('LiquidityMining.SubtractedIncentives') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  The number of markets that subtracted incentives in a block
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiSigMultisigApprovalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiSig.MultisigApproval')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('MultiSig.MultisigApproval') === '231432568347f94c5c20170daf3250b32a85d201a7956ece417357d6bf54a9ff'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asV35(): {approving: Uint8Array, timepoint: v35.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiSigMultisigCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiSig.MultisigCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been cancelled.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('MultiSig.MultisigCancelled') === '14cff9316755ff0c1389516feda0e41f2b8b9ce4bc2a991712165db069b8ed3c'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asV35(): {cancelling: Uint8Array, timepoint: v35.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiSigMultisigExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiSig.MultisigExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been executed.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('MultiSig.MultisigExecuted') === 'eb1da6f12e865b9fac12432d38548a84866705685a6c3c57cc1f79772c34b4f3'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV35(): {approving: Uint8Array, timepoint: v35.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('MultiSig.MultisigExecuted') === 'b6da053471dd9c799d24d66ef50768ba3d217fe237153a83440cc7272a9780bc'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV36(): {approving: Uint8Array, timepoint: v36.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiSigNewMultisigEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiSig.NewMultisig')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new multisig operation has begun.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('MultiSig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    }

    /**
     * A new multisig operation has begun.
     */
    get asV35(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingAutoCompoundSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.AutoCompoundSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Auto-compounding reward percent was set for a delegation.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ParachainStaking.AutoCompoundSet') === '6e2a947a204b204d58491c1edeaa8b08ab3a8d8ab4111f564b9ed2b2d10b4a38'
    }

    /**
     * Auto-compounding reward percent was set for a delegation.
     */
    get asV42(): {candidate: Uint8Array, delegator: Uint8Array, value: number} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingBlocksPerRoundSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.BlocksPerRoundSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Set blocks per round [current_round, first_block, old, new, new_per_round_inflation]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.BlocksPerRoundSet') === 'ad07b9e68a7272feca410bd765805aa9c2e0c22af112065340cb8d3a9c74b7a1'
    }

    /**
     *  Set blocks per round [current_round, first_block, old, new, new_per_round_inflation]
     */
    get asV23(): [number, bigint, number, number, number, number, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Set blocks per round
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.BlocksPerRoundSet') === 'cda3e1c0aa136940fe952d04adad3023dcd2b0063fcb75726466e726f829959a'
    }

    /**
     * Set blocks per round
     */
    get asV35(): {currentRound: number, firstBlock: bigint, old: number, new: number, newPerRoundInflationMin: number, newPerRoundInflationIdeal: number, newPerRoundInflationMax: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCancelledCandidateBondLessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CancelledCandidateBondLess')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Candidate, Amount, Round at which could be executed
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledCandidateBondLess') === '08cc21c0d68ca514760f97888105328fe1685d191a70eb2254c1c645212a936f'
    }

    /**
     * Candidate, Amount, Round at which could be executed
     */
    get asV34(): [Uint8Array, bigint, number] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Cancelled request to decrease candidate's bond.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledCandidateBondLess') === 'bad2bb017b2205b3b15c75ff6fdd7f0bb8d59d5fd14df4cb8874b21292f699a8'
    }

    /**
     * Cancelled request to decrease candidate's bond.
     */
    get asV35(): {candidate: Uint8Array, amount: bigint, executeRound: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCancelledCandidateExitEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CancelledCandidateExit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Candidate
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledCandidateExit') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Candidate
     */
    get asV34(): Uint8Array {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Cancelled request to leave the set of candidates.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledCandidateExit') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    /**
     * Cancelled request to leave the set of candidates.
     */
    get asV35(): {candidate: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCancelledDelegationRequestEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CancelledDelegationRequest')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Delegator, Cancelled Request
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === '466e5f876e9dd2ac6188af742c14889b1df158f0b823ff213cd20ebb9b8dba45'
    }

    /**
     * Delegator, Cancelled Request
     */
    get asV34(): [Uint8Array, v34.DelegationRequest] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Cancelled request to change an existing delegation.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === '46af4b1d2cfb4cc4634323376fe291f2ff356e7cd57e903535a945d3e3393d7b'
    }

    /**
     * Cancelled request to change an existing delegation.
     */
    get asV35(): {delegator: Uint8Array, cancelledRequest: v35.DelegationRequest} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Cancelled request to change an existing delegation.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === '8aedfed09d22a5851676a3041c7dfb0161f0b4423f7156ac758a2ca32812a2a5'
    }

    /**
     * Cancelled request to change an existing delegation.
     */
    get asV40(): {delegator: Uint8Array, cancelledRequest: v40.CancelledScheduledRequest, collator: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCandidateBackOnlineEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CandidateBackOnline')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Candidate
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBackOnline') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Candidate
     */
    get asV34(): Uint8Array {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Candidate rejoins the set of collator candidates.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBackOnline') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    /**
     * Candidate rejoins the set of collator candidates.
     */
    get asV35(): {candidate: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCandidateBondLessRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CandidateBondLessRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Candidate, Amount To Decrease, Round at which request can be executed by caller
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondLessRequested') === '08cc21c0d68ca514760f97888105328fe1685d191a70eb2254c1c645212a936f'
    }

    /**
     * Candidate, Amount To Decrease, Round at which request can be executed by caller
     */
    get asV34(): [Uint8Array, bigint, number] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Сandidate requested to decrease a self bond.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondLessRequested') === '1d9dd427739469ad726bf81a0c0b38805035667c30e6a9fe377548316553a7a3'
    }

    /**
     * Сandidate requested to decrease a self bond.
     */
    get asV35(): {candidate: Uint8Array, amountToDecrease: bigint, executeRound: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCandidateBondedLessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CandidateBondedLess')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Candidate, Amount, New Bond
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedLess') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     * Candidate, Amount, New Bond
     */
    get asV34(): [Uint8Array, bigint, bigint] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Сandidate has decreased a self bond.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedLess') === '29dfa3e28f81d3d1053aa8a109068e837e27bd18c2fd1255bf4a84b3f4ad3646'
    }

    /**
     * Сandidate has decreased a self bond.
     */
    get asV35(): {candidate: Uint8Array, amount: bigint, newBond: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCandidateBondedMoreEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CandidateBondedMore')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Candidate, Amount, New Bond Total
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedMore') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     * Candidate, Amount, New Bond Total
     */
    get asV34(): [Uint8Array, bigint, bigint] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Сandidate has increased a self bond.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedMore') === '3555667014ed491dbe7285cd00ca93d412ddafe3f0519d33df883a1f5f0b60ee'
    }

    /**
     * Сandidate has increased a self bond.
     */
    get asV35(): {candidate: Uint8Array, amount: bigint, newTotalBond: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCandidateLeftEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CandidateLeft')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Ex-Candidate, Amount Unlocked, New Total Amt Locked
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateLeft') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     * Ex-Candidate, Amount Unlocked, New Total Amt Locked
     */
    get asV34(): [Uint8Array, bigint, bigint] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Candidate has left the set of candidates.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateLeft') === '9455507cee1dbacfcddf86bf2afec2f8fa01f688a383fc7d913c342da2331154'
    }

    /**
     * Candidate has left the set of candidates.
     */
    get asV35(): {exCandidate: Uint8Array, unlockedAmount: bigint, newTotalAmtLocked: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCandidateScheduledExitEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CandidateScheduledExit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Round At Which Exit Is Allowed, Candidate, Scheduled Exit
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateScheduledExit') === '03efc8bbb0a3cf1382d9982723f765464486c6d05330bb65cf1515d86f1e2d7e'
    }

    /**
     * Round At Which Exit Is Allowed, Candidate, Scheduled Exit
     */
    get asV34(): [number, Uint8Array, number] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Сandidate has requested to leave the set of candidates.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateScheduledExit') === 'd448041a4a1bdbe3492a1dc2516bebab567198a414d72b2eaa4254ed7248297c'
    }

    /**
     * Сandidate has requested to leave the set of candidates.
     */
    get asV35(): {exitAllowedRound: number, candidate: Uint8Array, scheduledExit: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCandidateWentOfflineEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CandidateWentOffline')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Candidate
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateWentOffline') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Candidate
     */
    get asV34(): Uint8Array {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Candidate temporarily leave the set of collator candidates without unbonding.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateWentOffline') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    /**
     * Candidate temporarily leave the set of collator candidates without unbonding.
     */
    get asV35(): {candidate: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCollatorBackOnlineEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CollatorBackOnline')
        this._chain = ctx._chain
        this.event = event
    }

    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorBackOnline') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    get asV23(): [number, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCollatorBondedLessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CollatorBondedLess')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Collator Account, Old Bond, New Bond
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorBondedLess') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  Collator Account, Old Bond, New Bond
     */
    get asV23(): [Uint8Array, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCollatorBondedMoreEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CollatorBondedMore')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Collator Account, Old Bond, New Bond
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorBondedMore') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  Collator Account, Old Bond, New Bond
     */
    get asV23(): [Uint8Array, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCollatorChosenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CollatorChosen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Round, Collator Account, Total Exposed Amount (includes all nominations)
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorChosen') === '491d5eb10503fbf716b3399d749f1a02c0a60c5f903a500a8ed4f9f98fd07f34'
    }

    /**
     *  Round, Collator Account, Total Exposed Amount (includes all nominations)
     */
    get asV23(): [number, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Candidate selected for collators. Total Exposed Amount includes all delegations.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorChosen') === 'e39a7c1cbb003367ccb2e8ac99ff67fe973f19c8f4d0ba8fdd754a846bc02fa0'
    }

    /**
     * Candidate selected for collators. Total Exposed Amount includes all delegations.
     */
    get asV35(): {round: number, collatorAccount: Uint8Array, totalExposedAmount: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCollatorCommissionSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CollatorCommissionSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Set collator commission to this value [old, new]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorCommissionSet') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     *  Set collator commission to this value [old, new]
     */
    get asV23(): [number, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Set collator commission to this value.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorCommissionSet') === '2a46248fcf922d799638b5954d60e33df4d7dd9113650c71660a937cd4b5613d'
    }

    /**
     * Set collator commission to this value.
     */
    get asV35(): {old: number, new: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCollatorLeftEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CollatorLeft')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Account, Amount Unlocked, New Total Amt Locked
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorLeft') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  Account, Amount Unlocked, New Total Amt Locked
     */
    get asV23(): [Uint8Array, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCollatorScheduledExitEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CollatorScheduledExit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Round, Collator Account, Scheduled Exit
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorScheduledExit') === '03efc8bbb0a3cf1382d9982723f765464486c6d05330bb65cf1515d86f1e2d7e'
    }

    /**
     *  Round, Collator Account, Scheduled Exit
     */
    get asV23(): [number, Uint8Array, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCollatorWentOfflineEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.CollatorWentOffline')
        this._chain = ctx._chain
        this.event = event
    }

    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorWentOffline') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    get asV23(): [number, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingCompoundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.Compounded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Compounded a portion of rewards towards the delegation.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ParachainStaking.Compounded') === '194567a362aba25fc8bb34166baf5e491ce5dd6d7fd5e4788bbf8df6a8d002f7'
    }

    /**
     * Compounded a portion of rewards towards the delegation.
     */
    get asV42(): {candidate: Uint8Array, delegator: Uint8Array, amount: bigint} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegationEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.Delegation')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Delegator, Amount Locked, Candidate, Delegator Position with New Total Counted if in Top
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.Delegation') === '828fa43b5455df59dcd78745bf0e32ea1edd679041acc6dca118cc8d1747c7c3'
    }

    /**
     * Delegator, Amount Locked, Candidate, Delegator Position with New Total Counted if in Top
     */
    get asV34(): [Uint8Array, bigint, Uint8Array, v34.DelegatorAdded] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New delegation (increase of the existing one).
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.Delegation') === 'dbeb00002e0e711f8d6ab1758ba836f98f14598de2f5e4c546d3c3ac2bb88f85'
    }

    /**
     * New delegation (increase of the existing one).
     */
    get asV35(): {delegator: Uint8Array, lockedAmount: bigint, candidate: Uint8Array, delegatorPosition: v35.DelegatorAdded} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New delegation (increase of the existing one).
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ParachainStaking.Delegation') === '7f07fa712e2856667432c68b8b7f4685cec18d1e4b6087472ecef135723aa493'
    }

    /**
     * New delegation (increase of the existing one).
     */
    get asV42(): {delegator: Uint8Array, lockedAmount: bigint, candidate: Uint8Array, delegatorPosition: v42.DelegatorAdded, autoCompound: number} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegationDecreaseScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegationDecreaseScheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Delegator, Candidate, Amount to be decreased, Round at which can be executed
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationDecreaseScheduled') === 'f01f5047857177b470d76eb0df8bba8f0b37ef7fb53669d049a7096f344e4c58'
    }

    /**
     * Delegator, Candidate, Amount to be decreased, Round at which can be executed
     */
    get asV34(): [Uint8Array, Uint8Array, bigint, number] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegator requested to decrease a bond for the collator candidate.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationDecreaseScheduled') === 'dad0c96a1d19cefcdee6c3f1d15faf2e2984df101d71591df8e4f8db32ebc673'
    }

    /**
     * Delegator requested to decrease a bond for the collator candidate.
     */
    get asV35(): {delegator: Uint8Array, candidate: Uint8Array, amountToDecrease: bigint, executeRound: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegationDecreasedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegationDecreased')
        this._chain = ctx._chain
        this.event = event
    }

    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationDecreased') === '536df226e05c3ffd97a90de99befa016201cd98d6e193a89c3357b738338ca54'
    }

    get asV34(): [Uint8Array, Uint8Array, bigint, boolean] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationDecreased') === '578d871808b851f365c061fed4bb2e04ce24d572792f345fb055d2c4dff71471'
    }

    get asV35(): {delegator: Uint8Array, candidate: Uint8Array, amount: bigint, inTop: boolean} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegationIncreasedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegationIncreased')
        this._chain = ctx._chain
        this.event = event
    }

    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationIncreased') === '536df226e05c3ffd97a90de99befa016201cd98d6e193a89c3357b738338ca54'
    }

    get asV34(): [Uint8Array, Uint8Array, bigint, boolean] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationIncreased') === '578d871808b851f365c061fed4bb2e04ce24d572792f345fb055d2c4dff71471'
    }

    get asV35(): {delegator: Uint8Array, candidate: Uint8Array, amount: bigint, inTop: boolean} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegationKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegationKicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Delegator, Candidate, Amount Unstaked
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationKicked') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     * Delegator, Candidate, Amount Unstaked
     */
    get asV34(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegation kicked.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationKicked') === 'ee999c83b6b0952280ddb043c0b936ad93e99efd43b619a9cb433e75452693e7'
    }

    /**
     * Delegation kicked.
     */
    get asV35(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegationRevocationScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegationRevocationScheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Round, Delegator, Candidate, Scheduled Exit
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationRevocationScheduled') === '68b146d6847d41ffa84a3b24c2677540e6534d0a92c8247482564c0d37665bd2'
    }

    /**
     * Round, Delegator, Candidate, Scheduled Exit
     */
    get asV34(): [number, Uint8Array, Uint8Array, number] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegator requested to revoke delegation.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationRevocationScheduled') === '6ee92edd1ee620fc58d5573f822c739bef3db08530370007a65e0e324c7fd1ac'
    }

    /**
     * Delegator requested to revoke delegation.
     */
    get asV35(): {round: number, delegator: Uint8Array, candidate: Uint8Array, scheduledExit: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegationRevokedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegationRevoked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Delegator, Candidate, Amount Unstaked
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationRevoked') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     * Delegator, Candidate, Amount Unstaked
     */
    get asV34(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegation revoked.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationRevoked') === 'ee999c83b6b0952280ddb043c0b936ad93e99efd43b619a9cb433e75452693e7'
    }

    /**
     * Delegation revoked.
     */
    get asV35(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegatorExitCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegatorExitCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Delegator
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorExitCancelled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Delegator
     */
    get asV34(): Uint8Array {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Cancelled a pending request to exit the set of delegators.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorExitCancelled') === '3d3838bcdd21a8f0595cc9cd424acf3d984b169d1503483ecf5a480bda8b126e'
    }

    /**
     * Cancelled a pending request to exit the set of delegators.
     */
    get asV35(): {delegator: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegatorExitScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegatorExitScheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Round, Delegator, Scheduled Exit
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorExitScheduled') === '03efc8bbb0a3cf1382d9982723f765464486c6d05330bb65cf1515d86f1e2d7e'
    }

    /**
     * Round, Delegator, Scheduled Exit
     */
    get asV34(): [number, Uint8Array, number] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegator requested to leave the set of delegators.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorExitScheduled') === 'b0ecb7b0e9d90e91d46ad2884adf3275ce434f0de306b44b7dd8e6c0ac096270'
    }

    /**
     * Delegator requested to leave the set of delegators.
     */
    get asV35(): {round: number, delegator: Uint8Array, scheduledExit: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegatorLeftEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegatorLeft')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Delegator, Amount Unstaked
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeft') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Delegator, Amount Unstaked
     */
    get asV34(): [Uint8Array, bigint] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegator has left the set of delegators.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeft') === 'f36a8c40c8ea325606e0c9f58919ca14407f237efae652798cd82614cbb5639d'
    }

    /**
     * Delegator has left the set of delegators.
     */
    get asV35(): {delegator: Uint8Array, unstakedAmount: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegatorLeftCandidateEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegatorLeftCandidate')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Delegator, Candidate, Amount Unstaked, New Total Amt Staked for Candidate
     */
    get isV34(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeftCandidate') === '72e6f0d399a72f77551d560f52df25d757e0643d0192b3bc837cbd91b6f36b27'
    }

    /**
     * Delegator, Candidate, Amount Unstaked, New Total Amt Staked for Candidate
     */
    get asV34(): [Uint8Array, Uint8Array, bigint, bigint] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegation from candidate state has been remove.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeftCandidate') === 'b5d039328045457ec2ccd3b61a64e0187b8398b0e1a9f8f670d96680ad9e297a'
    }

    /**
     * Delegation from candidate state has been remove.
     */
    get asV35(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint, totalCandidateStaked: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingInflationSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.InflationSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.InflationSet') === '1ce78cca34ae2c08e45f267ebfc3e35706c619bb5f5726881e139f64ff94402e'
    }

    /**
     *  Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
     */
    get asV23(): [number, number, number, number, number, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.InflationSet') === '6eae1c9cc0a52424f3a2724c2e3727bd3861cd6d631a605d47134df51d2a275a'
    }

    /**
     * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
     */
    get asV35(): {annualMin: number, annualIdeal: number, annualMax: number, roundMin: number, roundIdeal: number, roundMax: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingJoinedCollatorCandidatesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.JoinedCollatorCandidates')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Account, Amount Locked, New Total Amt Locked
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.JoinedCollatorCandidates') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  Account, Amount Locked, New Total Amt Locked
     */
    get asV23(): [Uint8Array, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Account joined the set of collator candidates.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.JoinedCollatorCandidates') === '893e64af1fd9bde84d8749ef70be7dc46cb8974c5ccb1f7dcdb8f0b5c2ad4db7'
    }

    /**
     * Account joined the set of collator candidates.
     */
    get asV35(): {account: Uint8Array, amountLocked: bigint, newTotalAmtLocked: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingNewRoundEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.NewRound')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Starting Block, Round, Number of Collators Selected, Total Balance
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.NewRound') === '4dd4fa5df7b91356d41d12f44011c4dab6ec2f2fb1260ddd79dcfcb322a79aff'
    }

    /**
     *  Starting Block, Round, Number of Collators Selected, Total Balance
     */
    get asV23(): [bigint, number, number, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Started new round.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.NewRound') === '6e8de474961e3b5120d16017426e55bc82bcbaae6db86888a79c999ba175d241'
    }

    /**
     * Started new round.
     */
    get asV35(): {startingBlock: bigint, round: number, selectedCollatorsNumber: number, totalBalance: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingNominationEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.Nomination')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Nominator, Amount Locked, Collator, Nominator Position with New Total Counted if in Top
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.Nomination') === 'a562c09e9fb72d6e419e279b6c33dea2f0d79e866813ace896325f60e2f35f23'
    }

    /**
     *  Nominator, Amount Locked, Collator, Nominator Position with New Total Counted if in Top
     */
    get asV23(): [Uint8Array, bigint, Uint8Array, v23.NominatorAdded] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Nominator, Amount Locked, Collator, Nominator Position with New Total Counted if in Top
     */
    get isV32(): boolean {
        return this._chain.getEventHash('ParachainStaking.Nomination') === '828fa43b5455df59dcd78745bf0e32ea1edd679041acc6dca118cc8d1747c7c3'
    }

    /**
     * Nominator, Amount Locked, Collator, Nominator Position with New Total Counted if in Top
     */
    get asV32(): [Uint8Array, bigint, Uint8Array, v32.NominatorAdded] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingNominationDecreasedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.NominationDecreased')
        this._chain = ctx._chain
        this.event = event
    }

    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominationDecreased') === '536df226e05c3ffd97a90de99befa016201cd98d6e193a89c3357b738338ca54'
    }

    get asV23(): [Uint8Array, Uint8Array, bigint, boolean] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingNominationIncreasedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.NominationIncreased')
        this._chain = ctx._chain
        this.event = event
    }

    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominationIncreased') === '536df226e05c3ffd97a90de99befa016201cd98d6e193a89c3357b738338ca54'
    }

    get asV23(): [Uint8Array, Uint8Array, bigint, boolean] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingNominationRevocationScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.NominationRevocationScheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Round, Nominator, Collator, Scheduled Exit
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominationRevocationScheduled') === '68b146d6847d41ffa84a3b24c2677540e6534d0a92c8247482564c0d37665bd2'
    }

    /**
     *  Round, Nominator, Collator, Scheduled Exit
     */
    get asV23(): [number, Uint8Array, Uint8Array, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingNominatorDueRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.NominatorDueReward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Nominator, Collator, Due reward (as per counted nomination for collator)
     */
    get isV33(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominatorDueReward') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     * Nominator, Collator, Due reward (as per counted nomination for collator)
     */
    get asV33(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingNominatorExitScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.NominatorExitScheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Round, Nominator, Scheduled Exit
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominatorExitScheduled') === '03efc8bbb0a3cf1382d9982723f765464486c6d05330bb65cf1515d86f1e2d7e'
    }

    /**
     *  Round, Nominator, Scheduled Exit
     */
    get asV23(): [number, Uint8Array, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingNominatorLeftEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.NominatorLeft')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Nominator, Amount Unstaked
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominatorLeft') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Nominator, Amount Unstaked
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingNominatorLeftCollatorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.NominatorLeftCollator')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Nominator, Collator, Amount Unstaked, New Total Amt Staked for Collator
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominatorLeftCollator') === '72e6f0d399a72f77551d560f52df25d757e0643d0192b3bc837cbd91b6f36b27'
    }

    /**
     *  Nominator, Collator, Amount Unstaked, New Total Amt Staked for Collator
     */
    get asV23(): [Uint8Array, Uint8Array, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingParachainBondAccountSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.ParachainBondAccountSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Account (re)set for parachain bond treasury [old, new]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.ParachainBondAccountSet') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  Account (re)set for parachain bond treasury [old, new]
     */
    get asV23(): [Uint8Array, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Account (re)set for parachain bond treasury.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.ParachainBondAccountSet') === 'adbc830aa5ccdce297416513461c20af4d4cfc0a3e68cea7f721b0e6691db7b4'
    }

    /**
     * Account (re)set for parachain bond treasury.
     */
    get asV35(): {old: Uint8Array, new: Uint8Array} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingParachainBondReservePercentSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.ParachainBondReservePercentSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Percent of inflation reserved for parachain bond (re)set [old, new]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.ParachainBondReservePercentSet') === 'd2cc88fb598c6a1f724a0f2f04633626baef451eecc351a9d5092f82e6c46465'
    }

    /**
     *  Percent of inflation reserved for parachain bond (re)set [old, new]
     */
    get asV23(): [number, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Percent of inflation reserved for parachain bond (re)set.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.ParachainBondReservePercentSet') === '4416290d0d279f778bdd022e996767b16d74caaec023f9380514b1862c75b357'
    }

    /**
     * Percent of inflation reserved for parachain bond (re)set.
     */
    get asV35(): {old: number, new: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingReservedForParachainBondEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.ReservedForParachainBond')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Transferred to account which holds funds reserved for parachain bond
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.ReservedForParachainBond') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Transferred to account which holds funds reserved for parachain bond
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred to account which holds funds reserved for parachain bond.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.ReservedForParachainBond') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * Transferred to account which holds funds reserved for parachain bond.
     */
    get asV35(): {account: Uint8Array, value: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Paid the account (nominator or collator) the balance as liquid rewards
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.Rewarded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Paid the account (nominator or collator) the balance as liquid rewards
     */
    get asV23(): [Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Paid the account (delegator or collator) the balance as liquid rewards.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.Rewarded') === '1a005a96fdd51900b5609e011c697b2588490316080f642724ed18b187dfc5e5'
    }

    /**
     * Paid the account (delegator or collator) the balance as liquid rewards.
     */
    get asV35(): {account: Uint8Array, rewards: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingStakeExpectationsSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.StakeExpectationsSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Staking expectations set
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.StakeExpectationsSet') === 'bf419ba71120d15f9bdbc07cda0fa31db10c75992583ec976d4c343db396181c'
    }

    /**
     *  Staking expectations set
     */
    get asV23(): [bigint, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Staking expectations set.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.StakeExpectationsSet') === 'd8561f533aee1b8ba1c36d259010dca00cbc71ab7eb327cf0fa605d647371c6f'
    }

    /**
     * Staking expectations set.
     */
    get asV35(): {expectMin: bigint, expectIdeal: bigint, expectMax: bigint} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingTotalSelectedSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.TotalSelectedSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Set total selected candidates to this value [old, new]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainStaking.TotalSelectedSet') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     *  Set total selected candidates to this value [old, new]
     */
    get asV23(): [number, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Set total selected candidates to this value.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('ParachainStaking.TotalSelectedSet') === '2a46248fcf922d799638b5954d60e33df4d7dd9113650c71660a937cd4b5613d'
    }

    /**
     * Set total selected candidates to this value.
     */
    get asV35(): {old: number, new: number} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemDownwardMessagesProcessedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.DownwardMessagesProcessed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Downward messages were processed using the given weight.
     *  \[ weight_used, result_mqc_head \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '62ab179c459e900954ede92a01f149d553e9317efc7d0129525f40d631e8b38f'
    }

    /**
     *  Downward messages were processed using the given weight.
     *  \[ weight_used, result_mqc_head \]
     */
    get asV23(): [bigint, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '83022e6226975081ba018c2b45a90d494bc922ece44e69af0322583651264f8e'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asV40(): {weightUsed: bigint, dmqHead: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '5ae72cc32ab9a15192bb84c788530d1d739717b8f9f85bd654953f12515e41f1'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asV42(): {weightUsed: v42.Weight, dmqHead: Uint8Array} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemDownwardMessagesReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.DownwardMessagesReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some downward messages have been received and will be processed.
     *  \[ count \]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  Some downward messages have been received and will be processed.
     *  \[ count \]
     */
    get asV23(): number {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '1cdbdc8ac203922f95ae6ab3e8b98004e956389f7ec11480ec5633d29b48cf71'
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get asV40(): {count: number} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemUpgradeAuthorizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.UpgradeAuthorized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An upgrade has been authorized.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An upgrade has been authorized.
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An upgrade has been authorized.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * An upgrade has been authorized.
     */
    get asV40(): {codeHash: Uint8Array} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemValidationFunctionAppliedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.ValidationFunctionApplied')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The validation function was applied as of the contained relay chain block number.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  The validation function was applied as of the contained relay chain block number.
     */
    get asV23(): number {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === 'f35adbaa82c93636884997faedd16369ac498b9208d7c11f2233b9ef2aa4f092'
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get asV40(): {relayChainBlockNum: number} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemValidationFunctionDiscardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.ValidationFunctionDiscarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The relay-chain aborted the upgrade process.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The relay-chain aborted the upgrade process.
     */
    get asV33(): null {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemValidationFunctionStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.ValidationFunctionStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The validation function has been scheduled to apply as of the contained relay chain
     *  block number.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  The validation function has been scheduled to apply as of the contained relay chain
     *  block number.
     */
    get asV23(): number {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The validation function has been scheduled to apply.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The validation function has been scheduled to apply.
     */
    get asV33(): null {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmAssetsTrappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.AssetsTrapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV32(): [Uint8Array, v32.V1MultiLocation, v32.VersionedMultiAssets] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmAttemptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.Attempted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV23(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Attempted') === 'cd1d2fe11e660e07975fa37fa6a86ec16d0ff5c9376047e9464b8cc819c788f5'
    }

    get asV23(): v23.Outcome {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Attempted') === '193515c3b0e5bbe78313ce7bb5d80d3c789be70e0085c1d43ce0347187c43a50'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV32(): v32.V2Outcome {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isV34(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Attempted') === '4154651e242bd6b6bc077aa66e91ede994df17d6d31ec8746fb77b61829f6cc1'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV34(): v34.V2Outcome {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmInvalidResponderEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.InvalidResponder')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === 'aca6b87c79cd283d77249dae5d6ff6b7249a24e95958b723f47cd2333f0e9bc1'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV32(): [v32.V1MultiLocation, bigint, (v32.V1MultiLocation | undefined)] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmInvalidResponderVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.InvalidResponderVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storate by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponderVersion') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storate by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV32(): [v32.V1MultiLocation, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifiedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.Notified')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV32(): [bigint, number, number] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifyDecodeFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.NotifyDecodeFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV32(): [bigint, number, number] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifyDispatchErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.NotifyDispatchError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV32(): [bigint, number, number] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifyOverweightEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.NotifyOverweight')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '0104ccc866506c43592e56f342852c22c060b58c586141b7900f6ad97353e8b2'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV32(): [bigint, number, number, bigint, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '017f3a2e2d06e91d1be294456b9555e805a1e72a1ad2a469f493c21bf4da0feb'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV42(): [bigint, number, number, v42.Weight, v42.Weight] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifyTargetMigrationFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.NotifyTargetMigrationFail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'b02879418cace85908884f92e4b915e3b448f9e06d9bcc0edcce01ed9bc5b644'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV32(): [v32.VersionedMultiLocation, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifyTargetSendFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.NotifyTargetSendFail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '691ecac12054acab4727e4ac3bcc4cc884bcf98e86e777b9c154133f1ff85778'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV32(): [v32.V1MultiLocation, bigint, v32.V2Error] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV34(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '0d47fb7e1a9ccdfd8879b0e483179d5b2c7b29bd5db653557e266536bc40f9a0'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV34(): [v34.V1MultiLocation, bigint, v34.V2Error] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmResponseReadyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.ResponseReady')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === 'e6cd72b673b499abf36b946b4ab2a4531e2ca4af4aa3d41e14bafae7b2502409'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV32(): [bigint, v32.V2Response] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV34(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '122689cbd0466e99035c5eeda9c178ed25d8a8fee01f9de0d818f7e86cd5e333'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV34(): [bigint, v34.V2Response] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmResponseTakenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.ResponseTaken')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get asV32(): bigint {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.Sent')
        this._chain = ctx._chain
        this.event = event
    }

    get isV23(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === '8bc90e4e679422b2585d8e35090311e60831954870b7b6cc258bafcd1639e04b'
    }

    get asV23(): [v23.MultiLocation, v23.MultiLocation, v23.InstructionV2[]] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === '1a2c2f0f587aa6cafef526c4c8aabbb80179c1dda79383508e93899dd8a8604c'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV32(): [v32.V1MultiLocation, v32.V1MultiLocation, v32.V2Instruction[]] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV34(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === 'ae5e308764e970ce405a89338cec74552db382f20b13af73b16c9b7b172754e4'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV34(): [v34.V1MultiLocation, v34.V1MultiLocation, v34.V2Instruction[]] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmSupportedVersionChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.SupportedVersionChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV32(): [v32.V1MultiLocation, number] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmUnexpectedResponseEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.UnexpectedResponse')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV32(): [v32.V1MultiLocation, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmVersionChangeNotifiedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.VersionChangeNotified')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get asV32(): [v32.V1MultiLocation, number] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsBadOnInitializeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.BadOnInitialize')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Custom addition block initialization logic wasn't successful
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.BadOnInitialize') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Custom addition block initialization logic wasn't successful
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsBoughtCompleteSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.BoughtCompleteSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A complete set of shares has been bought \[market_id, buyer\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.BoughtCompleteSet') === '06f429abb9e0113523a2523f8db0c3bd34b068fa2de515a51d3e616b00bcdf96'
    }

    /**
     *  A complete set of shares has been bought \[market_id, buyer\]
     */
    get asV23(): [bigint, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A complete set of assets has been bought \[market_id, amount_per_asset, buyer\]
     */
    get isV34(): boolean {
        return this._chain.getEventHash('PredictionMarkets.BoughtCompleteSet') === '2e6ae450e029f130403b99833c1e86f99f3c7ee392e24aee194962aae282097b'
    }

    /**
     * A complete set of assets has been bought \[market_id, amount_per_asset, buyer\]
     */
    get asV34(): [bigint, bigint, Uint8Array] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsGlobalDisputeStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.GlobalDisputeStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The global dispute was started. \[market_id\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('PredictionMarkets.GlobalDisputeStarted') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * The global dispute was started. \[market_id\]
     */
    get asV41(): bigint {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A market has been approved \[market_id\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketApproved') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  A market has been approved \[market_id\]
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A market has been approved \[market_id, new_market_status\]
     */
    get isV29(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketApproved') === 'fb75141ba1d5569f28a5c37f474643ded3eff690fd78829c343a0a124058d613'
    }

    /**
     *  A market has been approved \[market_id, new_market_status\]
     */
    get asV29(): [bigint, v29.MarketStatus] {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A pending market has been cancelled. \[market_id, creator\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketCancelled') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  A pending market has been cancelled. \[market_id, creator\]
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A market has been closed \[market_id\]
     */
    get isV37(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketClosed') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * A market has been closed \[market_id\]
     */
    get asV37(): bigint {
        assert(this.isV37)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A market has been created \[market_id, creator\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketCreated') === '88271363b145676ec02b2c5ce3cf79a5d7e342a6d782a496617650c97bbe8a67'
    }

    /**
     *  A market has been created \[market_id, creator\]
     */
    get asV23(): [bigint, v23.Market, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A market has been created \[market_id, creator\]
     */
    get isV29(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketCreated') === '80506d7abdce279071c5134d39defe8ae71995c9943939b86966636d20b759ab'
    }

    /**
     *  A market has been created \[market_id, creator\]
     */
    get asV29(): [bigint, v29.Market] {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A market has been created \[market_id, creator\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketCreated') === '6ca81d4e3886a4c3588554446139248d28ee3bde379a943e1e37ed34f600fb06'
    }

    /**
     * A market has been created \[market_id, creator\]
     */
    get asV32(): [bigint, v32.Market] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A market has been created \[market_id, market_account, creator\]
     */
    get isV36(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketCreated') === 'b04e51d4c45b55e4412e9baf77f21cf64f9ec4053537e9e2f6905deef91f547c'
    }

    /**
     * A market has been created \[market_id, market_account, creator\]
     */
    get asV36(): [bigint, Uint8Array, v36.Market] {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A market has been created \[market_id, market_account, creator\]
     */
    get isV38(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketCreated') === '90ab12cfdc72a6c4a4a4a06f3b17cde83716fef857428b4fe7bf7ddbfa4b9902'
    }

    /**
     * A market has been created \[market_id, market_account, creator\]
     */
    get asV38(): [bigint, Uint8Array, v38.Market] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A market has been created \[market_id, market_account, creator\]
     */
    get isV40(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketCreated') === 'bbc3d53da3fdeb96244f9f79d60e51b2acbbd0f2d00a905d452d4ecc9fa50557'
    }

    /**
     * A market has been created \[market_id, market_account, creator\]
     */
    get asV40(): [bigint, Uint8Array, v40.Market] {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A market has been created \[market_id, market_account, market\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketCreated') === '3f739f9a1be87014ec152db72c820f2d134f385d21abd7b693357fa5ddae01ff'
    }

    /**
     * A market has been created \[market_id, market_account, market\]
     */
    get asV41(): [bigint, Uint8Array, v41.Market] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A market has been created \[market_id, market_account, market\]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketCreated') === '4a31b4ee002e93b8d83a62664998cd9f04fb49555260e932c1ffabc3d73e7126'
    }

    /**
     * A market has been created \[market_id, market_account, market\]
     */
    get asV42(): [bigint, Uint8Array, v42.Market] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A market has been created \[market_id, creator\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketDestroyed') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * A market has been created \[market_id, creator\]
     */
    get asV32(): bigint {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketDisputedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketDisputed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A market has been disputed \[market_id, new_outcome\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketDisputed') === '007a7aeacfb1970acc618b491215deef769e6d3d9449f9eb59a07c1dee60c764'
    }

    /**
     *  A market has been disputed \[market_id, new_outcome\]
     */
    get asV23(): [bigint, v23.OutcomeReport] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A market has been disputed \[market_id, new_market_status, new_outcome\]
     */
    get isV29(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketDisputed') === 'fd0dc28edb313bddf194e91060b1a24754d595e9b65696cbacef1fff728b33a8'
    }

    /**
     *  A market has been disputed \[market_id, new_market_status, new_outcome\]
     */
    get asV29(): [bigint, v29.MarketStatus, v29.MarketDispute] {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketEditedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketEdited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposed market has been edited by the market creator \[market_id\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketEdited') === '8cca30f004462e073660aded6515170cc42bae0feda12b2d28a09eb21e47add3'
    }

    /**
     * A proposed market has been edited by the market creator \[market_id\]
     */
    get asV41(): [bigint, v41.Market] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposed market has been edited by the market creator \[market_id\]
     */
    get isV42(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketEdited') === '0c91a8b1c38aa8ac6046584b0905da2823f97c7c88205ae7659ae4b22413500d'
    }

    /**
     * A proposed market has been edited by the market creator \[market_id\]
     */
    get asV42(): [bigint, v42.Market] {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketExpiredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketExpired')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An advised market has ended before it was approved or rejected. \[market_id\]
     */
    get isV37(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketExpired') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * An advised market has ended before it was approved or rejected. \[market_id\]
     */
    get asV37(): bigint {
        assert(this.isV37)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketInsufficientSubsidyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketInsufficientSubsidy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A market was discarded after failing to gather enough subsidy. \[market_id\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketInsufficientSubsidy') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * A market was discarded after failing to gather enough subsidy. \[market_id\]
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A market was discarded after failing to gather enough subsidy. \[market_id, new_market_status\]
     */
    get isV29(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketInsufficientSubsidy') === 'fb75141ba1d5569f28a5c37f474643ded3eff690fd78829c343a0a124058d613'
    }

    /**
     *  A market was discarded after failing to gather enough subsidy. \[market_id, new_market_status\]
     */
    get asV29(): [bigint, v29.MarketStatus] {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  NOTE: Maybe we should only allow rejections.
     *  A pending market has been rejected as invalid. \[market_id\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketRejected') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  NOTE: Maybe we should only allow rejections.
     *  A pending market has been rejected as invalid. \[market_id\]
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A pending market has been rejected as invalid with a reason. \[market_id, reject_reason\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketRejected') === '483b873436b94231dd53ca1504bb0c4112d5f977d85f24213bc8df5a3c7e693b'
    }

    /**
     * A pending market has been rejected as invalid with a reason. \[market_id, reject_reason\]
     */
    get asV41(): [bigint, Uint8Array] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketReportedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketReported')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A market has been reported on \[market_id, reported_outcome\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketReported') === '007a7aeacfb1970acc618b491215deef769e6d3d9449f9eb59a07c1dee60c764'
    }

    /**
     *  A market has been reported on \[market_id, reported_outcome\]
     */
    get asV23(): [bigint, v23.OutcomeReport] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A market has been reported on \[market_id, new_market_status, reported_outcome\]
     */
    get isV29(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketReported') === 'fd0dc28edb313bddf194e91060b1a24754d595e9b65696cbacef1fff728b33a8'
    }

    /**
     *  A market has been reported on \[market_id, new_market_status, reported_outcome\]
     */
    get asV29(): [bigint, v29.MarketStatus, v29.Report] {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketRequestedEditEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketRequestedEdit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposed market has been requested edit by advisor. \[market_id, edit_reason\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketRequestedEdit') === '483b873436b94231dd53ca1504bb0c4112d5f977d85f24213bc8df5a3c7e693b'
    }

    /**
     * A proposed market has been requested edit by advisor. \[market_id, edit_reason\]
     */
    get asV41(): [bigint, Uint8Array] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketResolvedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketResolved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A market has been resolved \[market_id, real_outcome\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketResolved') === 'a09565b86d3bb325629fe7a6753d0f511a81a98727e87e6650d956e944c56e2e'
    }

    /**
     *  A market has been resolved \[market_id, real_outcome\]
     */
    get asV23(): [bigint, number] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A market has been resolved \[market_id, new_market_status, real_outcome\]
     */
    get isV29(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketResolved') === '4d49ef955924f296709f49e497691ae82c53c1fbb6d0e139806da798e3ad857d'
    }

    /**
     *  A market has been resolved \[market_id, new_market_status, real_outcome\]
     */
    get asV29(): [bigint, v29.MarketStatus, v29.OutcomeReport] {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsMarketStartedWithSubsidyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.MarketStartedWithSubsidy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A market was started after gathering enough subsidy. \[market_id\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketStartedWithSubsidy') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  A market was started after gathering enough subsidy. \[market_id\]
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A market was started after gathering enough subsidy. \[market_id, new_market_status\]
     */
    get isV29(): boolean {
        return this._chain.getEventHash('PredictionMarkets.MarketStartedWithSubsidy') === 'fb75141ba1d5569f28a5c37f474643ded3eff690fd78829c343a0a124058d613'
    }

    /**
     *  A market was started after gathering enough subsidy. \[market_id, new_market_status\]
     */
    get asV29(): [bigint, v29.MarketStatus] {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsSoldCompleteSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.SoldCompleteSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A complete set of shares has been sold \[market_id, seller\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('PredictionMarkets.SoldCompleteSet') === '06f429abb9e0113523a2523f8db0c3bd34b068fa2de515a51d3e616b00bcdf96'
    }

    /**
     *  A complete set of shares has been sold \[market_id, seller\]
     */
    get asV23(): [bigint, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A complete set of assets has been sold \[market_id, amount_per_asset, seller\]
     */
    get isV34(): boolean {
        return this._chain.getEventHash('PredictionMarkets.SoldCompleteSet') === '2e6ae450e029f130403b99833c1e86f99f3c7ee392e24aee194962aae282097b'
    }

    /**
     * A complete set of assets has been sold \[market_id, amount_per_asset, seller\]
     */
    get asV34(): [bigint, bigint, Uint8Array] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class PredictionMarketsTokensRedeemedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PredictionMarkets.TokensRedeemed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An amount of winning outcomes have been redeemed \[market_id, currency_id, amount_redeemed, payout, who\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('PredictionMarkets.TokensRedeemed') === '2b9c381eb8a00d519422605423f387c0b8e976dda3c557fcc65137951d9bcb1d'
    }

    /**
     * An amount of winning outcomes have been redeemed \[market_id, currency_id, amount_redeemed, payout, who\]
     */
    get asV35(): [bigint, v35.Asset, bigint, bigint, Uint8Array] {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An amount of winning outcomes have been redeemed
     * \[market_id, currency_id, amount_redeemed, payout, who\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('PredictionMarkets.TokensRedeemed') === '5a0edb30c393942ac7a5dd0f398f56fa1dc8c88457cf2f1d998448e885d4c7e9'
    }

    /**
     * An amount of winning outcomes have been redeemed
     * \[market_id, currency_id, amount_redeemed, payout, who\]
     */
    get asV41(): [bigint, v41.Asset, bigint, bigint, Uint8Array] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Cleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has ben cleared.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV34(): {hash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Noted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has been noted.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV34(): {hash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Requested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has been requested.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV34(): {hash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyAnnouncedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.Announced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Proxy.Announced') === '5c2546e4632bb75e839f990a33f7feb63fb5598747a25d3d09f23108c106abc4'
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get asV36(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyAnonymousCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.AnonymousCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === '9df2247d5f254e1f7f98e425540ab29a59d72c509601556a3ced8614454a0201'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV36(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v36.ProxyType, disambiguationIndex: number} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyProxyAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.ProxyAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proxy was added.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '69128dd7a2d52fd3e4f2cbe352ec3af72ca9d9171965ab652c59499f110f983f'
    }

    /**
     * A proxy was added.
     */
    get asV36(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v36.ProxyType, delay: bigint} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyProxyExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.ProxyExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV36(): {result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyProxyRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.ProxyRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proxy was removed.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === '69128dd7a2d52fd3e4f2cbe352ec3af72ca9d9171965ab652c59499f110f983f'
    }

    /**
     * A proxy was removed.
     */
    get asV36(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v36.ProxyType, delay: bigint} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCallLookupFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.CallLookupFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'c38cce4279bb37b3a58cb3f19798200153a35d160bc14e139bf743d34a436f9e'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV34(): {task: [bigint, number], id: (Uint8Array | undefined), error: v34.LookupError} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Canceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Canceled some task.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === '40bbc456627fc1823fdcea1556c4f397c4687c11b249d5e20e09639d92023fc9'
    }

    /**
     * Canceled some task.
     */
    get asV34(): {when: bigint, index: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Dispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Dispatched some task.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'd68433943addb84dfb954a2b57d20f2d52409de78166fdd2cb049c7d339b79c9'
    }

    /**
     * Dispatched some task.
     */
    get asV34(): {task: [bigint, number], id: (Uint8Array | undefined), result: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'efcce383d727195c4bd1e6fb4f3033b9de7722168978551be2fe8a25f2dc3bbd'
    }

    /**
     * Dispatched some task.
     */
    get asV35(): {task: [bigint, number], id: (Uint8Array | undefined), result: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'd2ed00206fca51b969f1166195f1d6538d6e54ece88460ee2527484983dcfd1b'
    }

    /**
     * Dispatched some task.
     */
    get asV36(): {task: [bigint, number], id: (Uint8Array | undefined), result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Scheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Scheduled some task.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '40bbc456627fc1823fdcea1556c4f397c4687c11b249d5e20e09639d92023fc9'
    }

    /**
     * Scheduled some task.
     */
    get asV34(): {when: bigint, index: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class StyxAccountCrossedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Styx.AccountCrossed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A account crossed and claimed their right to create their avatar.
     */
    get isV39(): boolean {
        return this._chain.getEventHash('Styx.AccountCrossed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * A account crossed and claimed their right to create their avatar.
     */
    get asV39(): [Uint8Array, bigint] {
        assert(this.isV39)
        return this._chain.decodeEvent(this.event)
    }
}

export class StyxCrossingFeeChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Styx.CrossingFeeChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The crossing fee was changed.
     */
    get isV39(): boolean {
        return this._chain.getEventHash('Styx.CrossingFeeChanged') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * The crossing fee was changed.
     */
    get asV39(): bigint {
        assert(this.isV39)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The \[sudoer\] just switched identity; the old key is supplied.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The \[sudoer\] just switched identity; the old key is supplied.
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get asV34(): {oldSudoer: (Uint8Array | undefined)} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoSudidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.Sudid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get asV23(): v23.DispatchResult {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV32(): v32.Type_34 {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '7fffe0bb149a125d45315cdd4087524b9c4f4223010e0fff18d84854fc48aa3f'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV34(): {sudoResult: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '7cde07a00087fe00204a886eb195e51ab4ed328b48e00f89cab63a3354eedb31'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV35(): {sudoResult: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === 'bfff987b04269a820686fcc24b9885fd64cbc87c576cf203a79a3a99a7c596e1'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV36(): {sudoResult: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoSudoAsDoneEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.SudoAsDone')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get asV23(): v23.DispatchResult {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV32(): v32.Type_34 {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '7fffe0bb149a125d45315cdd4087524b9c4f4223010e0fff18d84854fc48aa3f'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV34(): {sudoResult: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '7cde07a00087fe00204a886eb195e51ab4ed328b48e00f89cab63a3354eedb31'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV35(): {sudoResult: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === 'bfff987b04269a820686fcc24b9885fd64cbc87c576cf203a79a3a99a7c596e1'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV36(): {sudoResult: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsArbitrageBuyBurnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.ArbitrageBuyBurn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Buy-burn arbitrage was executed on a CPMM pool. \[pool_id, amount\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.ArbitrageBuyBurn') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
    }

    /**
     * Buy-burn arbitrage was executed on a CPMM pool. \[pool_id, amount\]
     */
    get asV41(): [bigint, bigint] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsArbitrageMintSellEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.ArbitrageMintSell')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Mint-sell arbitrage was executed on a CPMM pool. \[pool_id, amount\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.ArbitrageMintSell') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
    }

    /**
     * Mint-sell arbitrage was executed on a CPMM pool. \[pool_id, amount\]
     */
    get asV41(): [bigint, bigint] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsArbitrageSkippedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.ArbitrageSkipped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Arbitrage was skipped on a CPMM pool. \[pool_id\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.ArbitrageSkipped') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Arbitrage was skipped on a CPMM pool. \[pool_id\]
     */
    get asV41(): bigint {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsDistributeShareHolderRewardsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.DistributeShareHolderRewards')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Share holder rewards were distributed. \[pool_id, num_accounts_rewarded, amount\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.DistributeShareHolderRewards') === '904807fbbddc17537fa2cf7e9257b7b75b76efe7c32ca3b9da8c5f92b7cf4190'
    }

    /**
     *  Share holder rewards were distributed. \[pool_id, num_accounts_rewarded, amount\]
     */
    get asV23(): [bigint, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolActiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolActive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool was opened. \[pool_id\]
     */
    get isV39(): boolean {
        return this._chain.getEventHash('Swaps.PoolActive') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * A pool was opened. \[pool_id\]
     */
    get asV39(): bigint {
        assert(this.isV39)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolCleanedUpEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolCleanedUp')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool was cleaned up. \[pool_id\]
     */
    get isV37(): boolean {
        return this._chain.getEventHash('Swaps.PoolCleanedUp') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * A pool was cleaned up. \[pool_id\]
     */
    get asV37(): bigint {
        assert(this.isV37)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool was closed. \[pool_id\]
     */
    get isV37(): boolean {
        return this._chain.getEventHash('Swaps.PoolClosed') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * A pool was closed. \[pool_id\]
     */
    get asV37(): bigint {
        assert(this.isV37)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolCreateEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolCreate')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new pool has been created. \[CommonPoolEventParams, pool\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.PoolCreate') === '639f38bdf67fe503f5b3383a8f7f82052830b8b21210fa56fb6ac93afbb1d455'
    }

    /**
     *  A new pool has been created. \[CommonPoolEventParams, pool\]
     */
    get asV23(): [v23.CommonPoolEventParams, v23.Pool] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.PoolCreate') === '6588e8c5065c2d9dec523e1da61f53572a975e3a30964e7187048972fb7ad11f'
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool\]
     */
    get asV32(): [v32.CommonPoolEventParams, v32.Pool] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.PoolCreate') === '23302b09e5e7dac54ebbe8f35f527876cd9c205144943b678954c0b45ddd7287'
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount\]
     */
    get asV35(): [v35.CommonPoolEventParams, v35.Pool, bigint] {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount, pool_account\]
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Swaps.PoolCreate') === '5e8abe682013e886690b6d2682906d85de56ea805ba61acd0454659f27833bb4'
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount, pool_account\]
     */
    get asV36(): [v36.CommonPoolEventParams, v36.Pool, bigint, Uint8Array] {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount, pool_account\]
     */
    get isV37(): boolean {
        return this._chain.getEventHash('Swaps.PoolCreate') === '1d7e591f8b1c80fefa10f4c36c3af6a9adbdfb74f72ef5e302dcffada8c0890d'
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount, pool_account\]
     */
    get asV37(): [v37.CommonPoolEventParams, v37.Pool, bigint, Uint8Array] {
        assert(this.isV37)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount, pool_account\]
     */
    get isV39(): boolean {
        return this._chain.getEventHash('Swaps.PoolCreate') === '2bb33e103ee138cb6c76a958ffe3367ebe1e30bffd2e07956e215ccb4dde6cb1'
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount, pool_account\]
     */
    get asV39(): [v39.CommonPoolEventParams, v39.Pool, bigint, Uint8Array] {
        assert(this.isV39)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount, pool_account\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.PoolCreate') === '0b4b856dbc585b4dde1fd65b86af838d80e1325bd4b9fdcc25337afc46b8057d'
    }

    /**
     * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount, pool_account\]
     */
    get asV41(): [v41.CommonPoolEventParams, v41.Pool, bigint, Uint8Array] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool was manually destroyed. \[pool_id\]
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Swaps.PoolDestroyed') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Pool was manually destroyed. \[pool_id\]
     */
    get asV36(): bigint {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolDestroyedInSubsidyPhaseEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolDestroyedInSubsidyPhase')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool destroyed due to insufficient subsidy. \[pool_id, \[(provider, subsidy), ...\]\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.PoolDestroyedInSubsidyPhase') === '4dc6571741390495552603a5578e3164f0c242565b1ba4a227f7e0ca3f250aba'
    }

    /**
     * Pool destroyed due to insufficient subsidy. \[pool_id, \[(provider, subsidy), ...\]\]
     */
    get asV35(): [bigint, [Uint8Array, bigint][]] {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolExitEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolExit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Someone has exited a pool. \[PoolAssetsEvent\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.PoolExit') === 'a11030c3c6675fd4762b00dbf07071dd2be36329d8293d6c4d83e95c52a284b0'
    }

    /**
     *  Someone has exited a pool. \[PoolAssetsEvent\]
     */
    get asV23(): v23.PoolAssetsEvent {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Someone has exited a pool. \[PoolAssetsEvent\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Swaps.PoolExit') === '99ab0bd285f6f944198c5f42dd98b41f7b9fcf0c44ef6977cf76c3f99c4c184b'
    }

    /**
     *  Someone has exited a pool. \[PoolAssetsEvent\]
     */
    get asV26(): v26.PoolAssetsEvent {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has exited a pool. \[PoolAssetsEvent\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.PoolExit') === 'a016214c18f38035d8a3ccaa23dbbbf3a1b50d26215e35d1bda4568251120ab6'
    }

    /**
     * Someone has exited a pool. \[PoolAssetsEvent\]
     */
    get asV32(): v32.PoolAssetsEvent {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has exited a pool. \[PoolAssetsEvent\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.PoolExit') === '5112309cbe063044a218a06b2ed774da16f6e33b08c28eaa718d99597f89f5ae'
    }

    /**
     * Someone has exited a pool. \[PoolAssetsEvent\]
     */
    get asV35(): v35.PoolAssetsEvent {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has exited a pool. \[PoolAssetsEvent\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.PoolExit') === '4a55a8750031dc611b1138db8d9cc56d88276b8ea5cf8df2f945eccb16bdea9b'
    }

    /**
     * Someone has exited a pool. \[PoolAssetsEvent\]
     */
    get asV41(): v41.PoolAssetsEvent {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolExitSubsidyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolExitSubsidy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Someone has (partially) exited a pool by removing subsidy. \[PoolAssetEvent, amount\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitSubsidy') === '2c64913e1fb29a6eeb9571a8d090105f9122ed42d8800fa6f40d1e645168b10e'
    }

    /**
     *  Someone has (partially) exited a pool by removing subsidy. \[PoolAssetEvent, amount\]
     */
    get asV23(): v23.PoolAssetEvent {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Someone has (partially) exited a pool by removing subsidy. \[PoolAssetEvent, amount\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitSubsidy') === '7e9bf306fcce1d32b2d54ed690a76f7480447ebe5b618db3b1f16fcb0937a3e3'
    }

    /**
     *  Someone has (partially) exited a pool by removing subsidy. \[PoolAssetEvent, amount\]
     */
    get asV26(): v26.PoolAssetEvent {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has (partially) exited a pool by removing subsidy. \[PoolAssetEvent, amount\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitSubsidy') === 'afcfc5fbe99da7e5bc294edf0988025a07d65f57facac5ce92d338ab5e593097'
    }

    /**
     * Someone has (partially) exited a pool by removing subsidy. \[PoolAssetEvent, amount\]
     */
    get asV32(): v32.PoolAssetEvent {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has (partially) exited a pool by removing subsidy. \[asset, bound, pool_id, who, amount\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitSubsidy') === '2d16e9f127d7b859b16d10deadb19247691df94d51b3ea58fde83c72516a1b21'
    }

    /**
     * Someone has (partially) exited a pool by removing subsidy. \[asset, bound, pool_id, who, amount\]
     */
    get asV35(): [v35.Asset, bigint, v35.CommonPoolEventParams, bigint] {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has (partially) exited a pool by removing subsidy. \[asset, bound, pool_id, who, amount\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitSubsidy') === 'b8318dfaa796931ddc50bd8d6cd94c15a2a1ace9e555c897eeace5f71d2b5221'
    }

    /**
     * Someone has (partially) exited a pool by removing subsidy. \[asset, bound, pool_id, who, amount\]
     */
    get asV41(): [v41.Asset, bigint, v41.CommonPoolEventParams, bigint] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolExitWithExactAssetAmountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolExitWithExactAssetAmount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitWithExactAssetAmount') === '2c64913e1fb29a6eeb9571a8d090105f9122ed42d8800fa6f40d1e645168b10e'
    }

    /**
     *  Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get asV23(): v23.PoolAssetEvent {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitWithExactAssetAmount') === '7e9bf306fcce1d32b2d54ed690a76f7480447ebe5b618db3b1f16fcb0937a3e3'
    }

    /**
     *  Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get asV26(): v26.PoolAssetEvent {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitWithExactAssetAmount') === 'afcfc5fbe99da7e5bc294edf0988025a07d65f57facac5ce92d338ab5e593097'
    }

    /**
     * Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get asV32(): v32.PoolAssetEvent {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitWithExactAssetAmount') === '168a235ed1acfe6e093bdb5d0d35bdda9ec503d5e8deeedcafa09200b28b8c56'
    }

    /**
     * Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get asV35(): v35.PoolAssetEvent {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitWithExactAssetAmount') === '06175dac7f1fc4166ac099e051beea1350d973e1ee5c891df6521482ec3dbfca'
    }

    /**
     * Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get asV41(): v41.PoolAssetEvent {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolExitWithExactPoolAmountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolExitWithExactPoolAmount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitWithExactPoolAmount') === '2c64913e1fb29a6eeb9571a8d090105f9122ed42d8800fa6f40d1e645168b10e'
    }

    /**
     *  Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get asV23(): v23.PoolAssetEvent {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitWithExactPoolAmount') === '7e9bf306fcce1d32b2d54ed690a76f7480447ebe5b618db3b1f16fcb0937a3e3'
    }

    /**
     *  Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get asV26(): v26.PoolAssetEvent {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitWithExactPoolAmount') === 'afcfc5fbe99da7e5bc294edf0988025a07d65f57facac5ce92d338ab5e593097'
    }

    /**
     * Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get asV32(): v32.PoolAssetEvent {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitWithExactPoolAmount') === '168a235ed1acfe6e093bdb5d0d35bdda9ec503d5e8deeedcafa09200b28b8c56'
    }

    /**
     * Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get asV35(): v35.PoolAssetEvent {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.PoolExitWithExactPoolAmount') === '06175dac7f1fc4166ac099e051beea1350d973e1ee5c891df6521482ec3dbfca'
    }

    /**
     * Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get asV41(): v41.PoolAssetEvent {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolJoinEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolJoin')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Someone has joined a pool. \[PoolAssetsEvent\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoin') === 'a11030c3c6675fd4762b00dbf07071dd2be36329d8293d6c4d83e95c52a284b0'
    }

    /**
     *  Someone has joined a pool. \[PoolAssetsEvent\]
     */
    get asV23(): v23.PoolAssetsEvent {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Someone has joined a pool. \[PoolAssetsEvent\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoin') === '99ab0bd285f6f944198c5f42dd98b41f7b9fcf0c44ef6977cf76c3f99c4c184b'
    }

    /**
     *  Someone has joined a pool. \[PoolAssetsEvent\]
     */
    get asV26(): v26.PoolAssetsEvent {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has joined a pool. \[PoolAssetsEvent\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoin') === 'a016214c18f38035d8a3ccaa23dbbbf3a1b50d26215e35d1bda4568251120ab6'
    }

    /**
     * Someone has joined a pool. \[PoolAssetsEvent\]
     */
    get asV32(): v32.PoolAssetsEvent {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has joined a pool. \[PoolAssetsEvent\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoin') === '5112309cbe063044a218a06b2ed774da16f6e33b08c28eaa718d99597f89f5ae'
    }

    /**
     * Someone has joined a pool. \[PoolAssetsEvent\]
     */
    get asV35(): v35.PoolAssetsEvent {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has joined a pool. \[PoolAssetsEvent\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoin') === '4a55a8750031dc611b1138db8d9cc56d88276b8ea5cf8df2f945eccb16bdea9b'
    }

    /**
     * Someone has joined a pool. \[PoolAssetsEvent\]
     */
    get asV41(): v41.PoolAssetsEvent {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolJoinSubsidyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolJoinSubsidy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Someone has joined a pool by providing subsidy. \[PoolAssetEvent, amount\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinSubsidy') === '2c64913e1fb29a6eeb9571a8d090105f9122ed42d8800fa6f40d1e645168b10e'
    }

    /**
     *  Someone has joined a pool by providing subsidy. \[PoolAssetEvent, amount\]
     */
    get asV23(): v23.PoolAssetEvent {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Someone has joined a pool by providing subsidy. \[PoolAssetEvent, amount\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinSubsidy') === '7e9bf306fcce1d32b2d54ed690a76f7480447ebe5b618db3b1f16fcb0937a3e3'
    }

    /**
     *  Someone has joined a pool by providing subsidy. \[PoolAssetEvent, amount\]
     */
    get asV26(): v26.PoolAssetEvent {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has joined a pool by providing subsidy. \[PoolAssetEvent, amount\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinSubsidy') === 'afcfc5fbe99da7e5bc294edf0988025a07d65f57facac5ce92d338ab5e593097'
    }

    /**
     * Someone has joined a pool by providing subsidy. \[PoolAssetEvent, amount\]
     */
    get asV32(): v32.PoolAssetEvent {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has joined a pool by providing subsidy. \[asset, amount, pool_id, who\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinSubsidy') === 'f29285712f8d39f68ef2e2a9d0a13abbbfecc9f98d21927217bc78b0d5c87279'
    }

    /**
     * Someone has joined a pool by providing subsidy. \[asset, amount, pool_id, who\]
     */
    get asV35(): [v35.Asset, bigint, v35.CommonPoolEventParams] {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has joined a pool by providing subsidy. \[asset, amount, pool_id, who\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinSubsidy') === 'e80109a4fa8e874b8e013f02207f6848e5d9cb47a9aab20126737bc76204d6b5'
    }

    /**
     * Someone has joined a pool by providing subsidy. \[asset, amount, pool_id, who\]
     */
    get asV41(): [v41.Asset, bigint, v41.CommonPoolEventParams] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolJoinWithExactAssetAmountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolJoinWithExactAssetAmount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinWithExactAssetAmount') === '2c64913e1fb29a6eeb9571a8d090105f9122ed42d8800fa6f40d1e645168b10e'
    }

    /**
     *  Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get asV23(): v23.PoolAssetEvent {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinWithExactAssetAmount') === '7e9bf306fcce1d32b2d54ed690a76f7480447ebe5b618db3b1f16fcb0937a3e3'
    }

    /**
     *  Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get asV26(): v26.PoolAssetEvent {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinWithExactAssetAmount') === 'afcfc5fbe99da7e5bc294edf0988025a07d65f57facac5ce92d338ab5e593097'
    }

    /**
     * Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get asV32(): v32.PoolAssetEvent {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinWithExactAssetAmount') === '168a235ed1acfe6e093bdb5d0d35bdda9ec503d5e8deeedcafa09200b28b8c56'
    }

    /**
     * Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get asV35(): v35.PoolAssetEvent {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinWithExactAssetAmount') === '06175dac7f1fc4166ac099e051beea1350d973e1ee5c891df6521482ec3dbfca'
    }

    /**
     * Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
     */
    get asV41(): v41.PoolAssetEvent {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsPoolJoinWithExactPoolAmountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.PoolJoinWithExactPoolAmount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinWithExactPoolAmount') === '2c64913e1fb29a6eeb9571a8d090105f9122ed42d8800fa6f40d1e645168b10e'
    }

    /**
     *  Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get asV23(): v23.PoolAssetEvent {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinWithExactPoolAmount') === '7e9bf306fcce1d32b2d54ed690a76f7480447ebe5b618db3b1f16fcb0937a3e3'
    }

    /**
     *  Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get asV26(): v26.PoolAssetEvent {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinWithExactPoolAmount') === 'afcfc5fbe99da7e5bc294edf0988025a07d65f57facac5ce92d338ab5e593097'
    }

    /**
     * Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get asV32(): v32.PoolAssetEvent {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinWithExactPoolAmount') === '168a235ed1acfe6e093bdb5d0d35bdda9ec503d5e8deeedcafa09200b28b8c56'
    }

    /**
     * Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get asV35(): v35.PoolAssetEvent {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.PoolJoinWithExactPoolAmount') === '06175dac7f1fc4166ac099e051beea1350d973e1ee5c891df6521482ec3dbfca'
    }

    /**
     * Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
     */
    get asV41(): v41.PoolAssetEvent {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsSubsidyCollectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.SubsidyCollected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Total subsidy collected for a pool. \[pool_id, subsidy\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.SubsidyCollected') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
    }

    /**
     *  Total subsidy collected for a pool. \[pool_id, subsidy\]
     */
    get asV23(): [bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Total subsidy collected for a pool. \[pool_id, \[(provider, subsidy), ...\], total_subsidy\]
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Swaps.SubsidyCollected') === '71bd775b861492f5f2eb9446993bea04e1569a00fe2efa31a6e2c3244973240c'
    }

    /**
     * Total subsidy collected for a pool. \[pool_id, \[(provider, subsidy), ...\], total_subsidy\]
     */
    get asV35(): [bigint, [Uint8Array, bigint][], bigint] {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsSwapExactAmountInEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.SwapExactAmountIn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An exact amount of an asset is entering the pool. \[SwapEvent\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.SwapExactAmountIn') === '69d6a45c326b79e217d8cc5e5b3e79884d92a90749656b63c90a6fcc42de850c'
    }

    /**
     *  An exact amount of an asset is entering the pool. \[SwapEvent\]
     */
    get asV23(): v23.SwapEvent {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  An exact amount of an asset is entering the pool. \[SwapEvent\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Swaps.SwapExactAmountIn') === '3890c2f04c258eefbc9739d3d4bde06dfdbb1b5ce6ce3a1f2a3c45220d3db6d9'
    }

    /**
     *  An exact amount of an asset is entering the pool. \[SwapEvent\]
     */
    get asV26(): v26.SwapEvent {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An exact amount of an asset is entering the pool. \[SwapEvent\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.SwapExactAmountIn') === '3363369ef48464de22ea935f8044add18f273252e24b894ae18a4b17500d7f31'
    }

    /**
     * An exact amount of an asset is entering the pool. \[SwapEvent\]
     */
    get asV32(): v32.SwapEvent {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An exact amount of an asset is entering the pool. \[SwapEvent\]
     */
    get isV37(): boolean {
        return this._chain.getEventHash('Swaps.SwapExactAmountIn') === '9c7395ff3ab7ff78dce5ed10883a78ccecdf215cffb94e54d4d0e4e808b52767'
    }

    /**
     * An exact amount of an asset is entering the pool. \[SwapEvent\]
     */
    get asV37(): v37.SwapEvent {
        assert(this.isV37)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An exact amount of an asset is entering the pool. \[SwapEvent\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.SwapExactAmountIn') === 'f54431823e89e164644ef40856702487560c02c59c5e71e3198a725c00307c42'
    }

    /**
     * An exact amount of an asset is entering the pool. \[SwapEvent\]
     */
    get asV41(): v41.SwapEvent {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SwapsSwapExactAmountOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Swaps.SwapExactAmountOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An exact amount of an asset is leaving the pool. \[SwapEvent\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Swaps.SwapExactAmountOut') === '69d6a45c326b79e217d8cc5e5b3e79884d92a90749656b63c90a6fcc42de850c'
    }

    /**
     *  An exact amount of an asset is leaving the pool. \[SwapEvent\]
     */
    get asV23(): v23.SwapEvent {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  An exact amount of an asset is leaving the pool. \[SwapEvent\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Swaps.SwapExactAmountOut') === '3890c2f04c258eefbc9739d3d4bde06dfdbb1b5ce6ce3a1f2a3c45220d3db6d9'
    }

    /**
     *  An exact amount of an asset is leaving the pool. \[SwapEvent\]
     */
    get asV26(): v26.SwapEvent {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An exact amount of an asset is leaving the pool. \[SwapEvent\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Swaps.SwapExactAmountOut') === '3363369ef48464de22ea935f8044add18f273252e24b894ae18a4b17500d7f31'
    }

    /**
     * An exact amount of an asset is leaving the pool. \[SwapEvent\]
     */
    get asV32(): v32.SwapEvent {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An exact amount of an asset is leaving the pool. \[SwapEvent\]
     */
    get isV37(): boolean {
        return this._chain.getEventHash('Swaps.SwapExactAmountOut') === '9c7395ff3ab7ff78dce5ed10883a78ccecdf215cffb94e54d4d0e4e808b52767'
    }

    /**
     * An exact amount of an asset is leaving the pool. \[SwapEvent\]
     */
    get asV37(): v37.SwapEvent {
        assert(this.isV37)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An exact amount of an asset is leaving the pool. \[SwapEvent\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Swaps.SwapExactAmountOut') === 'f54431823e89e164644ef40856702487560c02c59c5e71e3198a725c00307c42'
    }

    /**
     * An exact amount of an asset is leaving the pool. \[SwapEvent\]
     */
    get asV41(): v41.SwapEvent {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemCodeUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.CodeUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  `:code` was updated.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  `:code` was updated.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemExtrinsicFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.ExtrinsicFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An extrinsic failed. \[error, info\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '09be5714d55bec634be0e5bf6ca98e24886f3a530b5649b618b20e4514550b91'
    }

    /**
     *  An extrinsic failed. \[error, info\]
     */
    get asV23(): [v23.DispatchError, v23.DispatchInfo] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed. \[error, info\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '0995776ff5e8d5f8662a6841d8556c830acc58fbb01f76a13b6aa4222b987150'
    }

    /**
     * An extrinsic failed. \[error, info\]
     */
    get asV32(): [v32.DispatchError, v32.DispatchInfo] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '2dcccc93ed3f24e5499fe9480fe0a61a806d25bb5fc0d10a1074e360693768e7'
    }

    /**
     * An extrinsic failed.
     */
    get asV34(): {dispatchError: v34.DispatchError, dispatchInfo: v34.DispatchInfo} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
    }

    /**
     * An extrinsic failed.
     */
    get asV35(): {dispatchError: v35.DispatchError, dispatchInfo: v35.DispatchInfo} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
    }

    /**
     * An extrinsic failed.
     */
    get asV36(): {dispatchError: v36.DispatchError, dispatchInfo: v36.DispatchInfo} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '7a219a9eae41ad22651fdcb4f6a7453254b0ecc7be4b30821be2ab5b44e5f1b4'
    }

    /**
     * An extrinsic failed.
     */
    get asV42(): {dispatchError: v42.DispatchError, dispatchInfo: v42.DispatchInfo} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemExtrinsicSuccessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.ExtrinsicSuccess')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An extrinsic completed successfully. \[info\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
    }

    /**
     *  An extrinsic completed successfully. \[info\]
     */
    get asV23(): v23.DispatchInfo {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV34(): {dispatchInfo: v34.DispatchInfo} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6fc1e5ad9f5b3851c6e301764b8507ebb0861fd57381e6bc020a47f2b710167d'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV42(): {dispatchInfo: v42.DispatchInfo} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemKilledAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.KilledAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An \[account\] was reaped.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An \[account\] was reaped.
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was reaped.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV34(): {account: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemNewAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.NewAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new \[account\] was created.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new \[account\] was created.
     */
    get asV23(): Uint8Array {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new account was created.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV34(): {account: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemRemarkedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.Remarked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  On on-chain remark happened. \[origin, remark_hash\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  On on-chain remark happened. \[origin, remark_hash\]
     */
    get asV23(): [Uint8Array, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * On on-chain remark happened.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV34(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV34(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV34(): {proposalHash: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV34(): {proposalHash: Uint8Array, result: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV35(): {proposalHash: Uint8Array, result: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV36(): {proposalHash: Uint8Array, result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV34(): {proposalHash: Uint8Array, result: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV35(): {proposalHash: Uint8Array, result: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV36(): {proposalHash: Uint8Array, result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV34(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV34(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeMembershipDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommitteeMembership.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Phantom member, never used.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommitteeMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Phantom member, never used.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeMembershipKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommitteeMembership.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * One of the members' keys changed.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommitteeMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * One of the members' keys changed.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeMembershipMemberAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommitteeMembership.MemberAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommitteeMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeMembershipMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommitteeMembership.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommitteeMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeMembershipMembersResetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommitteeMembership.MembersReset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommitteeMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeMembershipMembersSwappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommitteeMembership.MembersSwapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('TechnicalCommitteeMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get asV34(): null {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensBalanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.BalanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === '915b035d7c3a4b3752a013e8ce3e7e5752d22401decf9a4d33c09421e6df11c1'
    }

    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    get asV23(): [v23.CurrencyId, Uint8Array, bigint, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root. \[who, free, reserved\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === 'c0b74996cf5ceff3e57f7cc655d9d42a6f57b91af649c151fa4e4fccd365004f'
    }

    /**
     * A balance was set by root. \[who, free, reserved\]
     */
    get asV32(): [v32.Asset, Uint8Array, bigint, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === '86661c1810efe875aebe598d2f2d37a22c8f3b2efd18f9c5c5f081247697bd4b'
    }

    /**
     * A balance was set by root.
     */
    get asV34(): {currencyId: v34.Asset, who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === '3fd136418049f8f76770e0d0b091953f04e61b4e5faf99fad0af02b62ace7e8e'
    }

    /**
     * A balance was set by root.
     */
    get asV41(): {currencyId: v41.Asset, who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Deposited some balance into an account
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Tokens.Deposited') === 'a4f1c201945cdbe991182662e3e9964553c56bb38739bf247036896397e7d07d'
    }

    /**
     * Deposited some balance into an account
     */
    get asV36(): {currencyId: v36.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Deposited some balance into an account
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.Deposited') === '27a10440ff180980c89f27bf3e4fdbe6561b18dc14dabab1bcce3be2753df5e7'
    }

    /**
     * Deposited some balance into an account
     */
    get asV41(): {currencyId: v41.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensDustLostEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.DustLost')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account was removed whose balance was non-zero but below
     *  ExistentialDeposit, resulting in an outright loss. \[currency_id,
     *  account, balance\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Tokens.DustLost') === '6a3d7e7accde03ae3a0153b6dc5d6cc04eea87393610da84950bbe601ce449cc'
    }

    /**
     *  An account was removed whose balance was non-zero but below
     *  ExistentialDeposit, resulting in an outright loss. \[currency_id,
     *  account, balance\]
     */
    get asV23(): [v23.CurrencyId, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss. \[currency_id,
     * account, balance\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Tokens.DustLost') === 'df0511d0e921e296dbd5c8b43cb7d8933820cb906e355c768e8407ca9193138f'
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss. \[currency_id,
     * account, balance\]
     */
    get asV32(): [v32.Asset, Uint8Array, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Tokens.DustLost') === 'a4f1c201945cdbe991182662e3e9964553c56bb38739bf247036896397e7d07d'
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    get asV34(): {currencyId: v34.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.DustLost') === '27a10440ff180980c89f27bf3e4fdbe6561b18dc14dabab1bcce3be2753df5e7'
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    get asV41(): {currencyId: v41.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensEndowedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Endowed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account was created with some free balance. \[currency_id,
     *  account, free_balance\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Tokens.Endowed') === '6a3d7e7accde03ae3a0153b6dc5d6cc04eea87393610da84950bbe601ce449cc'
    }

    /**
     *  An account was created with some free balance. \[currency_id,
     *  account, free_balance\]
     */
    get asV23(): [v23.CurrencyId, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance. \[currency_id,
     * account, free_balance\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Tokens.Endowed') === 'df0511d0e921e296dbd5c8b43cb7d8933820cb906e355c768e8407ca9193138f'
    }

    /**
     * An account was created with some free balance. \[currency_id,
     * account, free_balance\]
     */
    get asV32(): [v32.Asset, Uint8Array, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Tokens.Endowed') === 'a4f1c201945cdbe991182662e3e9964553c56bb38739bf247036896397e7d07d'
    }

    /**
     * An account was created with some free balance.
     */
    get asV34(): {currencyId: v34.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.Endowed') === '27a10440ff180980c89f27bf3e4fdbe6561b18dc14dabab1bcce3be2753df5e7'
    }

    /**
     * An account was created with some free balance.
     */
    get asV41(): {currencyId: v41.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensLockRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.LockRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some locked funds were unlocked
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Tokens.LockRemoved') === '712a57974120b3270a48b45e6a30c67c5c6aed09a07c4fa66d1f4499132cbd99'
    }

    /**
     * Some locked funds were unlocked
     */
    get asV36(): {lockId: Uint8Array, currencyId: v36.Asset, who: Uint8Array} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some locked funds were unlocked
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.LockRemoved') === '80f9c8256d98ea5c8235e868421a923371ddad19c8cdd01df2338c4865895146'
    }

    /**
     * Some locked funds were unlocked
     */
    get asV41(): {lockId: Uint8Array, currencyId: v41.Asset, who: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensLockSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.LockSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds are locked
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Tokens.LockSet') === '77f2ef3e35209b2e2375e3f2407d4cc7ec7ceac6b12b797f4d92e0ba99bc4c38'
    }

    /**
     * Some funds are locked
     */
    get asV36(): {lockId: Uint8Array, currencyId: v36.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds are locked
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.LockSet') === '0ddf60fe06b87eb2535c1ddb9ba38e950c5ce0cd4228bc4bf3067df6d8154772'
    }

    /**
     * Some funds are locked
     */
    get asV41(): {lockId: Uint8Array, currencyId: v41.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensRepatriatedReserveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.RepatriatedReserve')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     * \[currency_id, from, to, amount_actually_moved, status\]
     */
    get isV33(): boolean {
        return this._chain.getEventHash('Tokens.RepatriatedReserve') === 'f81da0bca676beab7941de11b55ce65a7714ccecb8b16efe04284131c5cc982f'
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     * \[currency_id, from, to, amount_actually_moved, status\]
     */
    get asV33(): [v33.Asset, Uint8Array, Uint8Array, bigint, v33.BalanceStatus] {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Tokens.RepatriatedReserve') === 'f065a0b82eebb1c6e6330e6a67e04cb0f6432ea76da88d847b08221120bb2274'
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get asV34(): {currencyId: v34.Asset, from: Uint8Array, to: Uint8Array, amount: bigint, status: v34.BalanceStatus} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensReserveRepatriatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.ReserveRepatriated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Tokens.ReserveRepatriated') === 'f065a0b82eebb1c6e6330e6a67e04cb0f6432ea76da88d847b08221120bb2274'
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get asV36(): {currencyId: v36.Asset, from: Uint8Array, to: Uint8Array, amount: bigint, status: v36.BalanceStatus} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.ReserveRepatriated') === '0746d404808f0ca9123121b50a9e3d7efda5d80edff83c1d8a7286ed6115df5a'
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get asV41(): {currencyId: v41.Asset, from: Uint8Array, to: Uint8Array, amount: bigint, status: v41.BalanceStatus} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some balance was reserved (moved from free to reserved).
     *  \[currency_id, who, value\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Tokens.Reserved') === '6a3d7e7accde03ae3a0153b6dc5d6cc04eea87393610da84950bbe601ce449cc'
    }

    /**
     *  Some balance was reserved (moved from free to reserved).
     *  \[currency_id, who, value\]
     */
    get asV23(): [v23.CurrencyId, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     * \[currency_id, who, value\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Tokens.Reserved') === 'df0511d0e921e296dbd5c8b43cb7d8933820cb906e355c768e8407ca9193138f'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     * \[currency_id, who, value\]
     */
    get asV32(): [v32.Asset, Uint8Array, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Tokens.Reserved') === 'a4f1c201945cdbe991182662e3e9964553c56bb38739bf247036896397e7d07d'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV34(): {currencyId: v34.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.Reserved') === '27a10440ff180980c89f27bf3e4fdbe6561b18dc14dabab1bcce3be2753df5e7'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV41(): {currencyId: v41.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Tokens.Slashed') === 'f13f7f92c9f7fb5dd04d8d5e28573baabd082e964b61865d5edc205e6eacb667'
    }

    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    get asV36(): {currencyId: v36.Asset, who: Uint8Array, freeAmount: bigint, reservedAmount: bigint} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.Slashed') === '6715a13045ef2a5f8c793fa085b815d13aaa26f1efe25570eac6034ea97236d0'
    }

    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    get asV41(): {currencyId: v41.Asset, who: Uint8Array, freeAmount: bigint, reservedAmount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensTotalIssuanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.TotalIssuanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The total issuance of an currency has been set
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Tokens.TotalIssuanceSet') === '1e18e8576b0be750e6a61f95045f485a61771ed7a3cac8f30916d2a4e77f16b0'
    }

    /**
     * The total issuance of an currency has been set
     */
    get asV36(): {currencyId: v36.Asset, amount: bigint} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The total issuance of an currency has been set
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.TotalIssuanceSet') === '2f1b8d2e062fb444200e173da27acbcd4a3e6d88bc618df173ede7d3b7f109ad'
    }

    /**
     * The total issuance of an currency has been set
     */
    get asV41(): {currencyId: v41.Asset, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Transfer succeeded. \[currency_id, from, to, value\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === 'd4ffed7d43664acfa5fe9f6825f538d93e8447c873d770deb40246b11895e2ab'
    }

    /**
     *  Transfer succeeded. \[currency_id, from, to, value\]
     */
    get asV23(): [v23.CurrencyId, Uint8Array, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded. \[currency_id, from, to, value\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === '3eb8c7c7a28e521728d456307ad372e814aeb4fb200f4be58a00098f9f61c8de'
    }

    /**
     * Transfer succeeded. \[currency_id, from, to, value\]
     */
    get asV32(): [v32.Asset, Uint8Array, Uint8Array, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === 'ad3d65a0944e3402fd00687198797c37e7b3335997a6f2143cf8893f4d007b35'
    }

    /**
     * Transfer succeeded.
     */
    get asV34(): {currencyId: v34.Asset, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === '2e0fdfb9ed7d365d410d3f4bcc85de5d7dc1ba3584a62c91ca0604ab7ca42de6'
    }

    /**
     * Transfer succeeded.
     */
    get asV41(): {currencyId: v41.Asset, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some balance was unreserved (moved from reserved to free).
     *  \[currency_id, who, value\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Tokens.Unreserved') === '6a3d7e7accde03ae3a0153b6dc5d6cc04eea87393610da84950bbe601ce449cc'
    }

    /**
     *  Some balance was unreserved (moved from reserved to free).
     *  \[currency_id, who, value\]
     */
    get asV23(): [v23.CurrencyId, Uint8Array, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     * \[currency_id, who, value\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Tokens.Unreserved') === 'df0511d0e921e296dbd5c8b43cb7d8933820cb906e355c768e8407ca9193138f'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     * \[currency_id, who, value\]
     */
    get asV32(): [v32.Asset, Uint8Array, bigint] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Tokens.Unreserved') === 'a4f1c201945cdbe991182662e3e9964553c56bb38739bf247036896397e7d07d'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV34(): {currencyId: v34.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.Unreserved') === '27a10440ff180980c89f27bf3e4fdbe6561b18dc14dabab1bcce3be2753df5e7'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV41(): {currencyId: v41.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Tokens.Withdrawn') === 'a4f1c201945cdbe991182662e3e9964553c56bb38739bf247036896397e7d07d'
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get asV36(): {currencyId: v36.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Tokens.Withdrawn') === '27a10440ff180980c89f27bf3e4fdbe6561b18dc14dabab1bcce3be2753df5e7'
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get asV41(): {currencyId: v41.Asset, who: Uint8Array, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TransactionPaymentTransactionFeePaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TransactionPayment.TransactionFeePaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asV41(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Awarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
    }

    /**
     *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    get asV23(): [number, bigint, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been allocated.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
    }

    /**
     * Some funds have been allocated.
     */
    get asV34(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBurntEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Burnt')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some of our funds have been burnt. \[burn\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Some of our funds have been burnt. \[burn\]
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some of our funds have been burnt.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
    }

    /**
     * Some of our funds have been burnt.
     */
    get asV34(): {burntFunds: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some funds have been deposited. \[deposit\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Some funds have been deposited. \[deposit\]
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been deposited.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
    }

    /**
     * Some funds have been deposited.
     */
    get asV34(): {value: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  New proposal. \[proposal_index\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New proposal. \[proposal_index\]
     */
    get asV23(): number {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New proposal.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV34(): {proposalIndex: number} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    get asV23(): [number, bigint] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV34(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryRolloverEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Rollover')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Spending has finished; this is the amount that rolls over until next spend.
     *  \[budget_remaining\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Spending has finished; this is the amount that rolls over until next spend.
     *  \[budget_remaining\]
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get asV34(): {rolloverBalance: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasurySpendApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.SpendApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new spend proposal has been approved.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Treasury.SpendApproved') === 'fce90c02bffde89fb0e8723868aa8e94bfe9c1c48c5af8c34efd8ff5173184f9'
    }

    /**
     * A new spend proposal has been approved.
     */
    get asV41(): {proposalIndex: number, amount: bigint, beneficiary: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasurySpendingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Spending')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  We have ended a spend period and will now allocate funds. \[budget_remaining\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  We have ended a spend period and will now allocate funds. \[budget_remaining\]
     */
    get asV23(): bigint {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get asV34(): {budgetRemaining: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class UnknownTokensDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'UnknownTokens.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Deposit success.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('UnknownTokens.Deposited') === '5618a3d9662352222101d08b90934710ebf739425cdbaf5ff63a3c258c219c8a'
    }

    /**
     * Deposit success.
     */
    get asV41(): {asset: v41.V1MultiAsset, who: v41.V1MultiLocation} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class UnknownTokensWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'UnknownTokens.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Withdraw success.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('UnknownTokens.Withdrawn') === '5618a3d9662352222101d08b90934710ebf739425cdbaf5ff63a3c258c219c8a'
    }

    /**
     * Withdraw success.
     */
    get asV41(): {asset: v41.V1MultiAsset, who: v41.V1MultiLocation} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Batch of dispatches completed fully with no error.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Batch of dispatches completed fully with no error.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchCompletedWithErrorsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchCompletedWithErrors')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asV40(): null {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchInterruptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchInterrupted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     *  well as the error. \[index, error\]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === 'acf646b5aabc17d1d9bbcec046f84450721211384188c038f062a8174d381ca2'
    }

    /**
     *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     *  well as the error. \[index, error\]
     */
    get asV23(): [number, v23.DispatchError] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error. \[index, error\]
     */
    get isV32(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === 'b9192854e3b1d8b7a3bd93b66a170a2afd8616d353d0fc1bdbfbfe6efa5b4f5a'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error. \[index, error\]
     */
    get asV32(): [number, v32.DispatchError] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '0ebef0e669872b029afc6cbf6c35a90ca099164a7899375e3d8178345c0f3f73'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV34(): {index: number, error: v34.DispatchError} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '8676c6dc6a22410c7ddbc9f34f71e25e9bc1f7237c98ea59385020ce26129067'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV35(): {index: number, error: v35.DispatchError} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV36(): {index: number, error: v36.DispatchError} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityDispatchedAsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.DispatchedAs')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A call was dispatched.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'af161e703a60c2ed390f4fc5df450268eda69dfe8656e401e29072d2b13258f5'
    }

    /**
     * A call was dispatched.
     */
    get asV34(): {result: v34.Type_28} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV35(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '123f6c35bbf8bd8d1cc0ada05ce8ad9758b8462076e62ae91382a7270c95ff10'
    }

    /**
     * A call was dispatched.
     */
    get asV35(): {result: v35.Type_29} {
        assert(this.isV35)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV36(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A call was dispatched.
     */
    get asV36(): {result: v36.Type_30} {
        assert(this.isV36)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityItemCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.ItemCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A single item within a Batch of dispatches has completed with no error.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  A single item within a Batch of dispatches has completed with no error.
     */
    get asV23(): null {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityItemFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.ItemFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV40(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV40(): {error: v40.DispatchError} {
        assert(this.isV40)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestingVestingCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Vesting.VestingCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An \[account\] has become fully vested. No further vesting can happen.
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Vesting.VestingCompleted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An \[account\] has become fully vested. No further vesting can happen.
     */
    get asV26(): Uint8Array {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An \[account\] has become fully vested.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Vesting.VestingCompleted') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An \[account\] has become fully vested.
     */
    get asV34(): {account: Uint8Array} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestingVestingUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Vesting.VestingUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The amount vested has been updated. This could indicate more funds are available. The
     *  balance given is the amount which is left unvested (and thus locked).
     *  \[account, unvested\]
     */
    get isV26(): boolean {
        return this._chain.getEventHash('Vesting.VestingUpdated') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The amount vested has been updated. This could indicate more funds are available. The
     *  balance given is the amount which is left unvested (and thus locked).
     *  \[account, unvested\]
     */
    get asV26(): [Uint8Array, bigint] {
        assert(this.isV26)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    get isV34(): boolean {
        return this._chain.getEventHash('Vesting.VestingUpdated') === '827ca6c1a4e85ce850afac4c8d4d055acd3be5c19141889b40808e42b2c769e3'
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    get asV34(): {account: Uint8Array, unvested: bigint} {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredMultiAssetsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredMultiAssets')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '19a61ff727b39e06bdac9248dc278a5be6292a6af670958a6338915a3e003249'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV41(): {sender: Uint8Array, assets: v41.V1MultiAsset[], fee: v41.V1MultiAsset, dest: v41.V1MultiLocation} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueBadFormatEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.BadFormat')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Bad XCM format used.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadFormat') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     *  Bad XCM format used.
     */
    get asV23(): (Uint8Array | undefined) {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Bad XCM format used.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadFormat') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * Bad XCM format used.
     */
    get asV41(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueBadVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.BadVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Bad XCM version used.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadVersion') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     *  Bad XCM version used.
     */
    get asV23(): (Uint8Array | undefined) {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Bad XCM version used.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadVersion') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * Bad XCM version used.
     */
    get asV41(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.Fail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some XCM failed.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'd2f483a73be85edb1baab4cba1e008fe2184802c320d11b498ccec40cc0d4487'
    }

    /**
     *  Some XCM failed.
     */
    get asV23(): [(Uint8Array | undefined), v23.XcmError] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV32(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'c719d9ccc723cdf668f55966f450e4217391513459d13dcdea1b99c7e22b2890'
    }

    /**
     * Some XCM failed.
     */
    get asV32(): [(Uint8Array | undefined), v32.V2Error] {
        assert(this.isV32)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === '639070abee49a6419e897939fc5b761d561a52efc062a7f1a1183b543e786999'
    }

    /**
     * Some XCM failed.
     */
    get asV34(): [(Uint8Array | undefined), v34.V2Error] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === '8ca5252e46336e4c6a7bffc1927807bb885a90bad49951c5e832eda183f4d365'
    }

    /**
     * Some XCM failed.
     */
    get asV41(): {messageHash: (Uint8Array | undefined), error: v41.V2Error, weight: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'd72a6fdcbedea7017572a7b9b1b30fb50d753160a20111c371f00be9c05691c2'
    }

    /**
     * Some XCM failed.
     */
    get asV42(): {messageHash: (Uint8Array | undefined), error: v42.V2Error, weight: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueOverweightEnqueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.OverweightEnqueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === 'ebfdd28144c52e3beb9a90e53e214e90e6114fc4d52e2c572b7e0a2e8c303bd5'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV34(): [number, number, bigint, bigint] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '66fcd6ac0f8478601d6008edf04a5f6e1988dad34d2e67484bc112967caeddbb'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV41(): {sender: number, sentAt: number, index: bigint, required: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '067a3a3aa8ee6726ecb8bf35ab307ac7566fec3acc2a84c25854711f6279d584'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV42(): {sender: number, sentAt: number, index: bigint, required: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueOverweightServicedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.OverweightServiced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isV34(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV34(): [bigint, bigint] {
        assert(this.isV34)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '6de49eae2a9c6e3c2fecdcc4baff436b4272b874de79a1f9f8955ca81e9f47bb'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV41(): {index: bigint, used: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '05c4258fc96a5477a2e7d79afbaae99e134fdf08770b5619a826272ad1e82c22'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV42(): {index: bigint, used: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueSuccessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.Success')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some XCM was executed ok.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     *  Some XCM was executed ok.
     */
    get asV23(): (Uint8Array | undefined) {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM was executed ok.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === '70e4953d4755440ebd53ef8a5482ada34f27cd1aac56b0493142d711aebc0e85'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV41(): {messageHash: (Uint8Array | undefined), weight: bigint} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM was executed ok.
     */
    get isV42(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === '305c23f5c5645b4330237519e6b8fa038af5dfc624c8dd8e1de3b97b6e51faf4'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV42(): {messageHash: (Uint8Array | undefined), weight: v42.Weight} {
        assert(this.isV42)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueUpwardMessageSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.UpwardMessageSent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An upward message was sent to the relay chain.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     *  An upward message was sent to the relay chain.
     */
    get asV23(): (Uint8Array | undefined) {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get asV41(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueXcmpMessageSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.XcmpMessageSent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An HRMP message was sent to a sibling parachain.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     *  An HRMP message was sent to a sibling parachain.
     */
    get asV23(): (Uint8Array | undefined) {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get isV41(): boolean {
        return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get asV41(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}
