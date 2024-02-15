import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v1 from './v1'
import * as v3 from './v3'
import * as v4 from './v4'
import * as v9 from './v9'
import * as v12 from './v12'
import * as v15 from './v15'
import * as v16 from './v16'
import * as v17 from './v17'
import * as v23 from './v23'
import * as v30 from './v30'
import * as v33 from './v33'
import * as v43 from './v43'
import * as v49 from './v49'
import * as v52 from './v52'
import * as v61 from './v61'
import * as v64 from './v64'
import * as v66 from './v66'
import * as v70 from './v70'
import * as v74 from './v74'
import * as v79 from './v79'

export class AssetsAccountsDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.AccountsDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Accounts were destroyed for given asset.
     */
    get isV52(): boolean {
        return this._chain.getEventHash('Assets.AccountsDestroyed') === 'a5d06575533459915a8ffae0d8d9eceaed7fe1e8a4c5fe068d1de39f4760ac67'
    }

    /**
     * Accounts were destroyed for given asset.
     */
    get asV52(): {assetId: bigint, accountsDestroyed: number, accountsRemaining: number} {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsApprovalCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.ApprovalCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An approval for account `delegate` was cancelled by `owner`.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.ApprovalCancelled') === '1eaaf519168e87c747ec745edf8033d690d3fbc4f69c4aa76dcfd668f7aa527a'
    }

    /**
     * An approval for account `delegate` was cancelled by `owner`.
     */
    get asV15(): {assetId: bigint, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsApprovalsDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.ApprovalsDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Approvals were destroyed for given asset.
     */
    get isV52(): boolean {
        return this._chain.getEventHash('Assets.ApprovalsDestroyed') === '4163dff444138f5bde96db2221ab99bf76a9c641472c3ed900fd00a16a468571'
    }

    /**
     * Approvals were destroyed for given asset.
     */
    get asV52(): {assetId: bigint, approvalsDestroyed: number, approvalsRemaining: number} {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsApprovedTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.ApprovedTransfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * (Additional) funds have been approved for transfer to a destination account.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.ApprovedTransfer') === 'a87f80ebb9ae7934d8104b030313c42c3d74f3d54aef30560fd5ec4e9dd94487'
    }

    /**
     * (Additional) funds have been approved for transfer to a destination account.
     */
    get asV15(): {assetId: bigint, source: Uint8Array, delegate: Uint8Array, amount: bigint} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsAssetFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.AssetFrozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset `asset_id` was frozen.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.AssetFrozen') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * Some asset `asset_id` was frozen.
     */
    get asV15(): {assetId: bigint} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsAssetMinBalanceChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.AssetMinBalanceChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The min_balance of an asset has been updated by the asset owner.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Assets.AssetMinBalanceChanged') === '62dc5a2aad35ea9b274647a895c2fa0e7f91dedb718b62def83df9965dbfe2e1'
    }

    /**
     * The min_balance of an asset has been updated by the asset owner.
     */
    get asV64(): {assetId: bigint, newMinBalance: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsAssetStatusChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.AssetStatusChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset has had its attributes changed by the `Force` origin.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.AssetStatusChanged') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * An asset has had its attributes changed by the `Force` origin.
     */
    get asV15(): {assetId: bigint} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsAssetThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.AssetThawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset `asset_id` was thawed.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.AssetThawed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * Some asset `asset_id` was thawed.
     */
    get asV15(): {assetId: bigint} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsBlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Blocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some account `who` was blocked.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Assets.Blocked') === 'ae2b5e9551d43bdc9a4ea4b9c1aca51a9aaf969b07e41802a3380a8fb3779350'
    }

    /**
     * Some account `who` was blocked.
     */
    get asV64(): {assetId: bigint, who: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets were destroyed.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.Burned') === 'da3db639d32fd55061bbd29c64e3da172dcb9737fad0afab14af907858ad6104'
    }

    /**
     * Some assets were destroyed.
     */
    get asV15(): {assetId: bigint, owner: Uint8Array, balance: bigint} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset class was created.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.Created') === '5baeddb49bd1034bd2a146cab0272bce48ae61e444a5cfd35ee64caf20108cdd'
    }

    /**
     * Some asset class was created.
     */
    get asV15(): {assetId: bigint, creator: Uint8Array, owner: Uint8Array} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Destroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset class was destroyed.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.Destroyed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * An asset class was destroyed.
     */
    get asV15(): {assetId: bigint} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsDestructionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.DestructionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset class is in the process of being destroyed.
     */
    get isV52(): boolean {
        return this._chain.getEventHash('Assets.DestructionStarted') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * An asset class is in the process of being destroyed.
     */
    get asV52(): {assetId: bigint} {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsForceCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.ForceCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset class was force-created.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.ForceCreated') === '2fcae0d72fb73ca029ceaaad902b50530246f7b84f9fa8e61834f9e644fdeb05'
    }

    /**
     * Some asset class was force-created.
     */
    get asV15(): {assetId: bigint, owner: Uint8Array} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Frozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some account `who` was frozen.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.Frozen') === 'ae2b5e9551d43bdc9a4ea4b9c1aca51a9aaf969b07e41802a3380a8fb3779350'
    }

    /**
     * Some account `who` was frozen.
     */
    get asV15(): {assetId: bigint, who: Uint8Array} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsIssuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Issued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets were issued.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.Issued') === 'bbe668e403e65626eea48730a19d2c3fc2aa0021b0c91fb0fad638a3f088fd70'
    }

    /**
     * Some assets were issued.
     */
    get asV15(): {assetId: bigint, owner: Uint8Array, totalSupply: bigint} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were issued.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('Assets.Issued') === 'a9be781c9ccb2985e855fb69a8b5dff97efbfdc9306e1e85133f29abdb927620'
    }

    /**
     * Some assets were issued.
     */
    get asV61(): {assetId: bigint, owner: Uint8Array, amount: bigint} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been cleared for an asset.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.MetadataCleared') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * Metadata has been cleared for an asset.
     */
    get asV15(): {assetId: bigint} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New metadata has been set for an asset.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.MetadataSet') === '01ab9e31f40d9a1871985e1d4fa0e5b8324a517e9a5d954999b54e728d81b541'
    }

    /**
     * New metadata has been set for an asset.
     */
    get asV15(): {assetId: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsOwnerChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.OwnerChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The owner changed.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.OwnerChanged') === '2fcae0d72fb73ca029ceaaad902b50530246f7b84f9fa8e61834f9e644fdeb05'
    }

    /**
     * The owner changed.
     */
    get asV15(): {assetId: bigint, owner: Uint8Array} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsTeamChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.TeamChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The management team changed.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.TeamChanged') === 'bbb63a7c5cea49a39f8dcd918cdfaea6a199b1a28a00a8f0fbbc2b40b570d8a8'
    }

    /**
     * The management team changed.
     */
    get asV15(): {assetId: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Thawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some account `who` was thawed.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.Thawed') === 'ae2b5e9551d43bdc9a4ea4b9c1aca51a9aaf969b07e41802a3380a8fb3779350'
    }

    /**
     * Some account `who` was thawed.
     */
    get asV15(): {assetId: bigint, who: Uint8Array} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsTouchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Touched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some account `who` was created with a deposit from `depositor`.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Assets.Touched') === '9155aa251e38cf471f49c96e08ceec4338e8ef1a80cd391942b7a2fa6b209b99'
    }

    /**
     * Some account `who` was created with a deposit from `depositor`.
     */
    get asV64(): {assetId: bigint, who: Uint8Array, depositor: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets were transferred.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.Transferred') === '1de11d8e4843f792b2761307d7fe8bdee39bd4a7b38fefe28de5d4a5e3346188'
    }

    /**
     * Some assets were transferred.
     */
    get asV15(): {assetId: bigint, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsTransferredApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.TransferredApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An `amount` was transferred in its entirety from `owner` to `destination` by
     * the approved `delegate`.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Assets.TransferredApproved') === '5fbca3ed789682df377b6855d5d30a432b65de430ae4738fb7490efbda91c44e'
    }

    /**
     * An `amount` was transferred in its entirety from `owner` to `destination` by
     * the approved `delegate`.
     */
    get asV15(): {assetId: bigint, owner: Uint8Array, delegate: Uint8Array, destination: Uint8Array, amount: bigint} {
        assert(this.isV15)
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
     * A balance was set by root. \[who, free, reserved\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     * A balance was set by root. \[who, free, reserved\]
     */
    get asV1(): [Uint8Array, bigint, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
    }

    /**
     * A balance was set by root.
     */
    get asV3(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '8c52e43e845654720e1db5c5bd166f80eb777baf474e93ce4d20fd385601a8fb'
    }

    /**
     * A balance was set by root.
     */
    get asV64(): {who: Uint8Array, free: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was burned from an account.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Burned') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was burned from an account.
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
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
     * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV3(): {who: Uint8Array, amount: bigint} {
        assert(this.isV3)
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
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss. \[account, balance\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss. \[account, balance\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV3(): {account: Uint8Array, amount: bigint} {
        assert(this.isV3)
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
     * An account was created with some free balance. \[account, free_balance\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * An account was created with some free balance. \[account, free_balance\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asV3(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Frozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was frozen.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Frozen') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was frozen.
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesIssuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Issued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Issued') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    get asV64(): {amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Locked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was locked.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Locked') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was locked.
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesMintedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Minted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was minted into an account.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Minted') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was minted into an account.
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesRescindedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Rescinded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Rescinded') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    get asV64(): {amount: bigint} {
        assert(this.isV64)
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
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     * \[from, to, balance, destination_status\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '68e9ec5664c8ffe977da0c890bac43122a5cf13565c1c936e2120ba4980bcf31'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     * \[from, to, balance, destination_status\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint, v1.BalanceStatus] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV3(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v3.BalanceStatus} {
        assert(this.isV3)
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
     * Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV3(): {who: Uint8Array, amount: bigint} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesRestoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Restored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was restored into an account.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Restored') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was restored into an account.
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
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
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV3(): {who: Uint8Array, amount: bigint} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesSuspendedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Suspended')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Suspended') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Thawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was thawed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Thawed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was thawed.
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
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
     * Transfer succeeded. \[from, to, value\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     * Transfer succeeded. \[from, to, value\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV3(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUnlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Unlocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was unlocked.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Unlocked') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unlocked.
     */
    get asV64(): {who: Uint8Array, amount: bigint} {
        assert(this.isV64)
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
     * Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV3(): {who: Uint8Array, amount: bigint} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUpgradedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Upgraded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was upgraded.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Balances.Upgraded') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * An account was upgraded.
     */
    get asV64(): {who: Uint8Array} {
        assert(this.isV64)
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
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV3(): {who: Uint8Array, amount: bigint} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class BaseFeeBaseFeeOverflowEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BaseFee.BaseFeeOverflow')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9(): boolean {
        return this._chain.getEventHash('BaseFee.BaseFeeOverflow') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV9(): null {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }
}

export class BaseFeeIsActiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BaseFee.IsActive')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9(): boolean {
        return this._chain.getEventHash('BaseFee.IsActive') === 'ab01a9c748aa3cbaea79085d7fc05c23416224e2cbe4d301feea3f8143c67da0'
    }

    get asV9(): boolean {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }
}

export class BaseFeeNewBaseFeePerGasEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BaseFee.NewBaseFeePerGas')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9(): boolean {
        return this._chain.getEventHash('BaseFee.NewBaseFeePerGas') === '6d9ead7bacbcc31865a36167f18b025b998f3de12411a9e26649a9a646df87fb'
    }

    get asV9(): bigint {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    get isV33(): boolean {
        return this._chain.getEventHash('BaseFee.NewBaseFeePerGas') === 'df74b0f066943b24c635a19ba2763478ab00f9c0373d74c9a771b1a1047ff6d6'
    }

    get asV33(): {fee: bigint} {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }
}

export class BaseFeeNewElasticityEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BaseFee.NewElasticity')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9(): boolean {
        return this._chain.getEventHash('BaseFee.NewElasticity') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    get asV9(): number {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    get isV33(): boolean {
        return this._chain.getEventHash('BaseFee.NewElasticity') === 'efcd4cd6d4fde4342db62d270df85a88b1c153af50159f9bc1ba1ce1133f2524'
    }

    get asV33(): {elasticity: number} {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }
}

export class BlockRewardDistributionConfigurationChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BlockReward.DistributionConfigurationChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Distribution configuration has been updated.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('BlockReward.DistributionConfigurationChanged') === '92b7818963b17f5be6f71ecbb9789d867dbf56cfd036e36a64a0da50faaad69c'
    }

    /**
     * Distribution configuration has been updated.
     */
    get asV12(): v12.RewardDistributionConfig {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Distribution configuration has been updated.
     */
    get isV74(): boolean {
        return this._chain.getEventHash('BlockReward.DistributionConfigurationChanged') === 'e5609ca07fbd5bc2bb9abab6e6fa45e15566c457c0568cb38ed092f6f30da7ce'
    }

    /**
     * Distribution configuration has been updated.
     */
    get asV74(): v74.RewardDistributionConfig {
        assert(this.isV74)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionCandidateAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.CandidateAdded')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1(): boolean {
        return this._chain.getEventHash('CollatorSelection.CandidateAdded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionCandidateRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.CandidateRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1(): boolean {
        return this._chain.getEventHash('CollatorSelection.CandidateRemoved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionCandidateSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.CandidateSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    get isV30(): boolean {
        return this._chain.getEventHash('CollatorSelection.CandidateSlashed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    get asV30(): Uint8Array {
        assert(this.isV30)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionNewCandidacyBondEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.NewCandidacyBond')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1(): boolean {
        return this._chain.getEventHash('CollatorSelection.NewCandidacyBond') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    get asV1(): bigint {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionNewDesiredCandidatesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.NewDesiredCandidates')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1(): boolean {
        return this._chain.getEventHash('CollatorSelection.NewDesiredCandidates') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionNewInvulnerablesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.NewInvulnerables')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1(): boolean {
        return this._chain.getEventHash('CollatorSelection.NewInvulnerables') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
    }

    get asV1(): Uint8Array[] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsCalledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.Called')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A contract was called either by a plain account or another contract.
     * 
     * # Note
     * 
     * Please keep in mind that like all events this is only emitted for successful
     * calls. This is because on failure all storage changes including events are
     * rolled back.
     */
    get isV55(): boolean {
        return this._chain.getEventHash('Contracts.Called') === '21a729a4d368d7f57eb42f0ec77b595e3270a67ec14974cfcbc643abeda2921f'
    }

    /**
     * A contract was called either by a plain account or another contract.
     * 
     * # Note
     * 
     * Please keep in mind that like all events this is only emitted for successful
     * calls. This is because on failure all storage changes including events are
     * rolled back.
     */
    get asV55(): {caller: Uint8Array, contract: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A contract was called either by a plain account or another contract.
     * 
     * # Note
     * 
     * Please keep in mind that like all events this is only emitted for successful
     * calls. This is because on failure all storage changes including events are
     * rolled back.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Contracts.Called') === '12f9b2f86a9c936fb436b156179997932d7b2829f21bdf681ae17c4355f7f970'
    }

    /**
     * A contract was called either by a plain account or another contract.
     * 
     * # Note
     * 
     * Please keep in mind that like all events this is only emitted for successful
     * calls. This is because on failure all storage changes including events are
     * rolled back.
     */
    get asV64(): {caller: v64.Origin, contract: Uint8Array} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsCodeRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.CodeRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A code with the specified hash was removed.
     */
    get isV55(): boolean {
        return this._chain.getEventHash('Contracts.CodeRemoved') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * A code with the specified hash was removed.
     */
    get asV55(): {codeHash: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsCodeStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.CodeStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Code with the specified hash has been stored.
     */
    get isV55(): boolean {
        return this._chain.getEventHash('Contracts.CodeStored') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * Code with the specified hash has been stored.
     */
    get asV55(): {codeHash: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsContractCodeUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.ContractCodeUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A contract's code was updated.
     */
    get isV55(): boolean {
        return this._chain.getEventHash('Contracts.ContractCodeUpdated') === 'f9de6decda4961d31d7cf59e3f8acd4849a220323ebabbb036464d999de54c18'
    }

    /**
     * A contract's code was updated.
     */
    get asV55(): {contract: Uint8Array, newCodeHash: Uint8Array, oldCodeHash: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsContractEmittedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.ContractEmitted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A custom event emitted by the contract.
     */
    get isV55(): boolean {
        return this._chain.getEventHash('Contracts.ContractEmitted') === '7f28393268795b9a97f05e82911cdcc4200d99e9968c1ab6a564f949f753b929'
    }

    /**
     * A custom event emitted by the contract.
     */
    get asV55(): {contract: Uint8Array, data: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsDelegateCalledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.DelegateCalled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A contract delegate called a code hash.
     * 
     * # Note
     * 
     * Please keep in mind that like all events this is only emitted for successful
     * calls. This is because on failure all storage changes including events are
     * rolled back.
     */
    get isV55(): boolean {
        return this._chain.getEventHash('Contracts.DelegateCalled') === '76261d7cbe52d35ce20ad428e69f2cc49c1719d1fbb27a3b951b1e26e8ef5993'
    }

    /**
     * A contract delegate called a code hash.
     * 
     * # Note
     * 
     * Please keep in mind that like all events this is only emitted for successful
     * calls. This is because on failure all storage changes including events are
     * rolled back.
     */
    get asV55(): {contract: Uint8Array, codeHash: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsInstantiatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.Instantiated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Contract deployed by address at the specified address.
     */
    get isV55(): boolean {
        return this._chain.getEventHash('Contracts.Instantiated') === '20f9f9057a4149f58eb48c00359f9800a42b51d4d2168437dfcce668c27a8d37'
    }

    /**
     * Contract deployed by address at the specified address.
     */
    get asV55(): {deployer: Uint8Array, contract: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsTerminatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.Terminated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Contract has been removed.
     * 
     * # Note
     * 
     * The only way for a contract to be removed and emitting this event is by calling
     * `seal_terminate`.
     */
    get isV55(): boolean {
        return this._chain.getEventHash('Contracts.Terminated') === '8e0b376b4821223ecd835a0ae76a615e7aa14158260ff9c7f87220449d98175b'
    }

    /**
     * Contract has been removed.
     * 
     * # Note
     * 
     * The only way for a contract to be removed and emitting this event is by calling
     * `seal_terminate`.
     */
    get asV55(): {contract: Uint8Array, beneficiary: Uint8Array} {
        assert(this.isV55)
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
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '155c7cce0948b8cb240d1401bb772a72b24567aa52618e9a4aaa84271c380044'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV15(): [Uint8Array, v15.V2Outcome] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '0a5524dcf48d575bf19533e72499c1b6f08167113160e1bb190028315c81787f'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV61(): [Uint8Array, v61.V3Outcome] {
        assert(this.isV61)
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
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get asV15(): Uint8Array {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get asV61(): Uint8Array {
        assert(this.isV61)
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
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV15(): Uint8Array {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV61(): Uint8Array {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingBonusRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.BonusReward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Bonus reward has been paid out to a loyal staker.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.BonusReward') === 'e917f922471878d5f6e45f87a2cb2c37f8f01b1a34386333366e9d6f06094ff3'
    }

    /**
     * Bonus reward has been paid out to a loyal staker.
     */
    get asV79(): {account: Uint8Array, smartContract: v79.SmartContract, period: number, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingClaimedUnlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.ClaimedUnlocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has claimed unlocked amount, removing the lock from it.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.ClaimedUnlocked') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * Account has claimed unlocked amount, removing the lock from it.
     */
    get asV79(): {account: Uint8Array, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingDAppOwnerChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.DAppOwnerChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * dApp owner has been changed.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.DAppOwnerChanged') === 'fd002bfe425604c698dc004568d2d239ae92b7d106501da6a5942b0ffa664563'
    }

    /**
     * dApp owner has been changed.
     */
    get asV79(): {smartContract: v79.SmartContract, newOwner: Uint8Array} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingDAppRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.DAppRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A smart contract has been registered for dApp staking
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.DAppRegistered') === 'c058e64676a8649e196e63b69f6261127d9144a954d17a040256e5306055502c'
    }

    /**
     * A smart contract has been registered for dApp staking
     */
    get asV79(): {owner: Uint8Array, smartContract: v79.SmartContract, dappId: number} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingDAppRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.DAppReward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * dApp reward has been paid out to a beneficiary.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.DAppReward') === 'a5b4e1cd91b4f56b728dec38705dd6ed68365e6f4f721b0f301e47a82774356a'
    }

    /**
     * dApp reward has been paid out to a beneficiary.
     */
    get asV79(): {beneficiary: Uint8Array, smartContract: v79.SmartContract, tierId: number, era: number, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingDAppRewardDestinationUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.DAppRewardDestinationUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * dApp reward destination has been updated.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.DAppRewardDestinationUpdated') === 'd3df932aea489a0dea7d43eb966f3e4bf80d0c641b4e3d4bdae9cd31b4c4c7cf'
    }

    /**
     * dApp reward destination has been updated.
     */
    get asV79(): {smartContract: v79.SmartContract, beneficiary: (Uint8Array | undefined)} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingDAppUnregisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.DAppUnregistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * dApp has been unregistered
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.DAppUnregistered') === '40a911ceb3a6829f20faee608a1399c9f867652c081f9e427500b03e16ec5b3f'
    }

    /**
     * dApp has been unregistered
     */
    get asV79(): {smartContract: v79.SmartContract, era: number} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingExpiredEntriesRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.ExpiredEntriesRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some expired stake entries have been removed from storage.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.ExpiredEntriesRemoved') === 'feaec7ce4289e40dfcb23daa62835e54e6d20f5cc680731d5c89fd35134442f2'
    }

    /**
     * Some expired stake entries have been removed from storage.
     */
    get asV79(): {account: Uint8Array, count: number} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingForceEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.Force')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Privileged origin has forced a new era and possibly a subperiod to start from next block.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.Force') === 'b4bb985f829be852011cad15454748bd9bfcbf79d4c06711c7dce894c16bfc3f'
    }

    /**
     * Privileged origin has forced a new era and possibly a subperiod to start from next block.
     */
    get asV79(): {forcingType: v79.ForcingType} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.Locked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has locked some amount into dApp staking.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.Locked') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * Account has locked some amount into dApp staking.
     */
    get asV79(): {account: Uint8Array, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingMaintenanceModeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.MaintenanceMode')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Maintenance mode has been either enabled or disabled.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.MaintenanceMode') === '1a4f33b2dfaeb1147a73dad03c7960562e86062414cb8d5283edde6d1400631d'
    }

    /**
     * Maintenance mode has been either enabled or disabled.
     */
    get asV79(): {enabled: boolean} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingNewEraEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.NewEra')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New era has started.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.NewEra') === '39115a13c53f2b1968fdc266219c33cc8b971dddad3e2b3c0f3848136e2368b7'
    }

    /**
     * New era has started.
     */
    get asV79(): {era: number} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingNewSubperiodEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.NewSubperiod')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New subperiod has started.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.NewSubperiod') === '47cb017f0bcfe63131935bc762422fcf40b7fdd4da31d953d938730a4b11444e'
    }

    /**
     * New subperiod has started.
     */
    get asV79(): {subperiod: v79.Subperiod, number: number} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingRelockEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.Relock')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has relocked all of the unlocking chunks.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.Relock') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * Account has relocked all of the unlocking chunks.
     */
    get asV79(): {account: Uint8Array, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.Reward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has claimed some stake rewards.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.Reward') === '6102d1d9d0a122180f60cbf4f27c6cacb5163b7aff6f0fb169fd015161940538'
    }

    /**
     * Account has claimed some stake rewards.
     */
    get asV79(): {account: Uint8Array, era: number, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingStakeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.Stake')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has staked some amount on a smart contract.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.Stake') === '7471ff47b274ea1a1a175719f57b6c3071f6673f3ea8ad86ac62454b58f5a797'
    }

    /**
     * Account has staked some amount on a smart contract.
     */
    get asV79(): {account: Uint8Array, smartContract: v79.SmartContract, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingUnlockingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.Unlocking')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has started the unlocking process for some amount.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.Unlocking') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * Account has started the unlocking process for some amount.
     */
    get asV79(): {account: Uint8Array, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingUnstakeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.Unstake')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has unstaked some amount from a smart contract.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.Unstake') === '7471ff47b274ea1a1a175719f57b6c3071f6673f3ea8ad86ac62454b58f5a797'
    }

    /**
     * Account has unstaked some amount from a smart contract.
     */
    get asV79(): {account: Uint8Array, smartContract: v79.SmartContract, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingUnstakeFromUnregisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStaking.UnstakeFromUnregistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has unstaked funds from an unregistered smart contract
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStaking.UnstakeFromUnregistered') === '7471ff47b274ea1a1a175719f57b6c3071f6673f3ea8ad86ac62454b58f5a797'
    }

    /**
     * Account has unstaked funds from an unregistered smart contract
     */
    get asV79(): {account: Uint8Array, smartContract: v79.SmartContract, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingMigrationEntriesDeletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStakingMigration.EntriesDeleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Number of entries deleted from v2
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStakingMigration.EntriesDeleted') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Number of entries deleted from v2
     */
    get asV79(): number {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappStakingMigrationEntriesMigratedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappStakingMigration.EntriesMigrated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Number of entries migrated from v2 over to v3
     */
    get isV79(): boolean {
        return this._chain.getEventHash('DappStakingMigration.EntriesMigrated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Number of entries migrated from v2 over to v3
     */
    get asV79(): number {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingBondAndStakeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.BondAndStake')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has bonded and staked funds on a smart contract.
     */
    get isV4(): boolean {
        return this._chain.getEventHash('DappsStaking.BondAndStake') === '042590a56807e3351faf948dab2a22fe138af945cd9e46b379a3f568ede79c4d'
    }

    /**
     * Account has bonded and staked funds on a smart contract.
     */
    get asV4(): [Uint8Array, v4.SmartContract, bigint] {
        assert(this.isV4)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingContractRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.ContractRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Contract removed from dapps staking.
     */
    get isV4(): boolean {
        return this._chain.getEventHash('DappsStaking.ContractRemoved') === 'b4d757bb39450c2497cb2bbaad5596ee7e5cb1b1e04c09bdacd6714f76d1a214'
    }

    /**
     * Contract removed from dapps staking.
     */
    get asV4(): [Uint8Array, v4.SmartContract] {
        assert(this.isV4)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingDecommissionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.Decommission')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pallet is being decommissioned.
     */
    get isV77(): boolean {
        return this._chain.getEventHash('DappsStaking.Decommission') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Pallet is being decommissioned.
     */
    get asV77(): null {
        assert(this.isV77)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingMaintenanceModeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.MaintenanceMode')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Maintenance mode has been enabled or disabled
     */
    get isV12(): boolean {
        return this._chain.getEventHash('DappsStaking.MaintenanceMode') === 'ab01a9c748aa3cbaea79085d7fc05c23416224e2cbe4d301feea3f8143c67da0'
    }

    /**
     * Maintenance mode has been enabled or disabled
     */
    get asV12(): boolean {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingNewContractEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.NewContract')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New contract added for staking.
     */
    get isV4(): boolean {
        return this._chain.getEventHash('DappsStaking.NewContract') === 'b4d757bb39450c2497cb2bbaad5596ee7e5cb1b1e04c09bdacd6714f76d1a214'
    }

    /**
     * New contract added for staking.
     */
    get asV4(): [Uint8Array, v4.SmartContract] {
        assert(this.isV4)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingNewDappStakingEraEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.NewDappStakingEra')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New dapps staking era. Distribute era rewards to contracts.
     */
    get isV4(): boolean {
        return this._chain.getEventHash('DappsStaking.NewDappStakingEra') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * New dapps staking era. Distribute era rewards to contracts.
     */
    get asV4(): number {
        assert(this.isV4)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingNominationTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.NominationTransfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Nomination part has been transfered from one contract to another.
     * 
     * \(staker account, origin smart contract, amount, target smart contract\)
     */
    get isV17(): boolean {
        return this._chain.getEventHash('DappsStaking.NominationTransfer') === '4f17bfdd591d68aa34974d9299444b19ef6280de57f99b635a5179ef61aa5173'
    }

    /**
     * Nomination part has been transfered from one contract to another.
     * 
     * \(staker account, origin smart contract, amount, target smart contract\)
     */
    get asV17(): [Uint8Array, v17.SmartContract, bigint, v17.SmartContract] {
        assert(this.isV17)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.Reward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Reward paid to staker or developer.
     */
    get isV4(): boolean {
        return this._chain.getEventHash('DappsStaking.Reward') === '8893e04840c35675d9756bedd440cb2cf3490c1aaae0bd1f0204c2fbcab411c8'
    }

    /**
     * Reward paid to staker or developer.
     */
    get asV4(): [Uint8Array, v4.SmartContract, number, bigint] {
        assert(this.isV4)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingRewardDestinationEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.RewardDestination')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Reward handling modified
     */
    get isV16(): boolean {
        return this._chain.getEventHash('DappsStaking.RewardDestination') === '0c0c2fe9e4194fff2f7715b847c010679769ab0dca3fd39c738b11dd878615ce'
    }

    /**
     * Reward handling modified
     */
    get asV16(): [Uint8Array, v16.RewardDestination] {
        assert(this.isV16)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingStaleRewardBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.StaleRewardBurned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Stale, unclaimed reward from an unregistered contract has been burned.
     * 
     * \(developer account, smart contract, era, amount burned\)
     */
    get isV49(): boolean {
        return this._chain.getEventHash('DappsStaking.StaleRewardBurned') === '8893e04840c35675d9756bedd440cb2cf3490c1aaae0bd1f0204c2fbcab411c8'
    }

    /**
     * Stale, unclaimed reward from an unregistered contract has been burned.
     * 
     * \(developer account, smart contract, era, amount burned\)
     */
    get asV49(): [Uint8Array, v49.SmartContract, number, bigint] {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingUnbondAndUnstakeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.UnbondAndUnstake')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has unbonded & unstaked some funds. Unbonding process begins.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('DappsStaking.UnbondAndUnstake') === '042590a56807e3351faf948dab2a22fe138af945cd9e46b379a3f568ede79c4d'
    }

    /**
     * Account has unbonded & unstaked some funds. Unbonding process begins.
     */
    get asV12(): [Uint8Array, v12.SmartContract, bigint] {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingUnbondUnstakeAndWithdrawEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.UnbondUnstakeAndWithdraw')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has unbonded, unstaked and withdrawn funds.
     */
    get isV4(): boolean {
        return this._chain.getEventHash('DappsStaking.UnbondUnstakeAndWithdraw') === '042590a56807e3351faf948dab2a22fe138af945cd9e46b379a3f568ede79c4d'
    }

    /**
     * Account has unbonded, unstaked and withdrawn funds.
     */
    get asV4(): [Uint8Array, v4.SmartContract, bigint] {
        assert(this.isV4)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingWithdrawFromUnregisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.WithdrawFromUnregistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has fully withdrawn all staked amount from an unregistered contract.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('DappsStaking.WithdrawFromUnregistered') === '042590a56807e3351faf948dab2a22fe138af945cd9e46b379a3f568ede79c4d'
    }

    /**
     * Account has fully withdrawn all staked amount from an unregistered contract.
     */
    get asV12(): [Uint8Array, v12.SmartContract, bigint] {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class DappsStakingWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DappsStaking.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account has withdrawn unbonded funds.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('DappsStaking.Withdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Account has withdrawn unbonded funds.
     */
    get asV12(): [Uint8Array, bigint] {
        assert(this.isV12)
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
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '286143d78cae88e1dcd7f8fca6da4dcb49ebc3ba61ad473eec7ff13812f3fd56'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV15(): [Uint8Array, v15.V2Outcome] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '9b6c90aca74067a591eda76a227e61ce66cd6597483f828a039aba267c0d21a9'
    }

    /**
     * Downward message executed with the given outcome.
     */
    get asV23(): {messageId: Uint8Array, outcome: v23.V2Outcome} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === 'bbdc5e15442f2bee7199707f9da66674b3ad89835c84687a406e183c7d31121e'
    }

    /**
     * Downward message executed with the given outcome.
     */
    get asV61(): {messageId: Uint8Array, outcome: v61.V3Outcome} {
        assert(this.isV61)
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
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('DmpQueue.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get asV15(): Uint8Array {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is invalid XCM.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.InvalidFormat') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * Downward message is invalid XCM.
     */
    get asV23(): {messageId: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueMaxMessagesExhaustedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.MaxMessagesExhausted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The maximum number of downward messages was.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('DmpQueue.MaxMessagesExhausted') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * The maximum number of downward messages was.
     */
    get asV61(): {messageId: Uint8Array} {
        assert(this.isV61)
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
     * Downward message is overweight and was placed in the overweight queue.
     * \[ id, index, required \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     * \[ id, index, required \]
     */
    get asV15(): [Uint8Array, bigint, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ffa192c80e10233d155345fc4cc34bc357a97a6465c78ccf6a14b02ee5b8c21f'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get asV23(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: bigint} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ad9cb107597768cf938dffc06f4759d95e30b4d686ee33c209c5a44145df0c73'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get asV43(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: v43.Weight} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '48bcfc366f324064903ddb05910b4d640e5483bb8166484d427fea6ec6716e87'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get asV49(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: v49.Weight} {
        assert(this.isV49)
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
     * Downward message from the overweight queue was executed.
     * \[ index, used \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
    }

    /**
     * Downward message from the overweight queue was executed.
     * \[ index, used \]
     */
    get asV15(): [bigint, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === '7deec7d9ba4a81157571b321671d50b393890bd802f27d9b3ba2609ffa497713'
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get asV23(): {overweightIndex: bigint, weightUsed: bigint} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'f16ac3f6b10f93f6d4efd4dde1eba6cc73e06d27c2e2ec66eec4923e16cbfc6f'
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get asV43(): {overweightIndex: bigint, weightUsed: v43.Weight} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'cbdd24f98e134531ca4f33efcf4821b24f3245563e8787df9ab5a61e3def65fe'
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get asV49(): {overweightIndex: bigint, weightUsed: v49.Weight} {
        assert(this.isV49)
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
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV15(): Uint8Array {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is unsupported version of XCM.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * Downward message is unsupported version of XCM.
     */
    get asV23(): {messageId: Uint8Array} {
        assert(this.isV23)
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
     * The weight limit for handling downward messages was reached.
     * \[ id, remaining, required \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
    }

    /**
     * The weight limit for handling downward messages was reached.
     * \[ id, remaining, required \]
     */
    get asV15(): [Uint8Array, bigint, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'dcf12831e69a1760af0584247b404096aa4ce1c77c7b3caae95d831bf4afa0b2'
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get asV23(): {messageId: Uint8Array, remainingWeight: bigint, requiredWeight: bigint} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'b9a55b745575cc47de66be392bf446a9558a5b3e9201c5b37598517251cff44f'
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get asV43(): {messageId: Uint8Array, remainingWeight: v43.Weight, requiredWeight: v43.Weight} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'e2c32a245af45a14cf9180adc1d112198df722bb27ee76b5ea163138bb102466'
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get asV49(): {messageId: Uint8Array, remainingWeight: v49.Weight, requiredWeight: v49.Weight} {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }
}

export class DynamicEvmBaseFeeNewBaseFeePerGasEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DynamicEvmBaseFee.NewBaseFeePerGas')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New `base fee per gas` value has been force-set.
     */
    get isV72(): boolean {
        return this._chain.getEventHash('DynamicEvmBaseFee.NewBaseFeePerGas') === 'df74b0f066943b24c635a19ba2763478ab00f9c0373d74c9a771b1a1047ff6d6'
    }

    /**
     * New `base fee per gas` value has been force-set.
     */
    get asV72(): {fee: bigint} {
        assert(this.isV72)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmBalanceDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.BalanceDeposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A deposit has been made at a given address. \[sender, address, value\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EVM.BalanceDeposit') === 'd9b1f7a4397a223baaf288e10404ee5442e38bc06f4d40d247036102327f164e'
    }

    /**
     * A deposit has been made at a given address. \[sender, address, value\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmBalanceWithdrawEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.BalanceWithdraw')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A withdrawal has been made from a given address. \[sender, address, value\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EVM.BalanceWithdraw') === 'd9b1f7a4397a223baaf288e10404ee5442e38bc06f4d40d247036102327f164e'
    }

    /**
     * A withdrawal has been made from a given address. \[sender, address, value\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A contract has been created at given \[address\].
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EVM.Created') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * A contract has been created at given \[address\].
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A contract has been created at given address.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('EVM.Created') === 'c5bed4ffae488fefd76eb807a683ba2d9cb6726ded1d162edcacf2126be4665f'
    }

    /**
     * A contract has been created at given address.
     */
    get asV33(): {address: Uint8Array} {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmCreatedFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.CreatedFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A \[contract\] was attempted to be created, but the execution failed.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EVM.CreatedFailed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * A \[contract\] was attempted to be created, but the execution failed.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A contract was attempted to be created, but the execution failed.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('EVM.CreatedFailed') === 'c5bed4ffae488fefd76eb807a683ba2d9cb6726ded1d162edcacf2126be4665f'
    }

    /**
     * A contract was attempted to be created, but the execution failed.
     */
    get asV33(): {address: Uint8Array} {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A \[contract\] has been executed successfully with states applied.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EVM.Executed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * A \[contract\] has been executed successfully with states applied.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A contract has been executed successfully with states applied.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('EVM.Executed') === 'c5bed4ffae488fefd76eb807a683ba2d9cb6726ded1d162edcacf2126be4665f'
    }

    /**
     * A contract has been executed successfully with states applied.
     */
    get asV33(): {address: Uint8Array} {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmExecutedFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.ExecutedFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EVM.ExecutedFailed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A contract has been executed with errors. States are reverted with only gas fees applied.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('EVM.ExecutedFailed') === 'c5bed4ffae488fefd76eb807a683ba2d9cb6726ded1d162edcacf2126be4665f'
    }

    /**
     * A contract has been executed with errors. States are reverted with only gas fees applied.
     */
    get asV33(): {address: Uint8Array} {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmLogEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.Log')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Ethereum events from contracts.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EVM.Log') === '9d15dce6e6d818eeb73a868dd136a22667fbfdd27463a338b39cabae62aa4a12'
    }

    /**
     * Ethereum events from contracts.
     */
    get asV1(): v1.Log {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Ethereum events from contracts.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('EVM.Log') === '4edddb5632dcffc943bfbdb42201f95b9c2ffa1df042e526a7c54a39f099056a'
    }

    /**
     * Ethereum events from contracts.
     */
    get asV33(): {log: v33.Log} {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthCallExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EthCall.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A call just executed. \[result\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EthCall.Executed') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A call just executed. \[result\]
     */
    get asV1(): [Uint8Array, v1.Type_32] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call just executed. \[result\]
     */
    get isV9(): boolean {
        return this._chain.getEventHash('EthCall.Executed') === '7e02c29a4c1b936804bbf14da1e8ffb3aca8bd87eec6bdf237732e9003fb30ad'
    }

    /**
     * A call just executed. \[result\]
     */
    get asV9(): [Uint8Array, v9.Type_27] {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call just executed. \[result\]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('EthCall.Executed') === '2f4059c139990f67eb2ce179caa77dd50c6bcc40902de6301ed08e8fea834569'
    }

    /**
     * A call just executed. \[result\]
     */
    get asV15(): [Uint8Array, v15.Type_28] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call just executed. \[result\]
     */
    get isV49(): boolean {
        return this._chain.getEventHash('EthCall.Executed') === '59d2ba7dd2acb2758487beaafc26ae84263bc885c9319194f1f32b044755353b'
    }

    /**
     * A call just executed. \[result\]
     */
    get asV49(): [Uint8Array, v49.Type_30] {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call just executed. \[result\]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('EthCall.Executed') === '38620d359dec705867ce615998ee778e6bd07f6298e0a2d2b8f0d9de48f099ad'
    }

    /**
     * A call just executed. \[result\]
     */
    get asV64(): [Uint8Array, v64.Type_31] {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class EthereumExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ethereum.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '0c7eb5ef81fb6e87c05b96ed25f52c62fffc067198343642f01289fbb0011fce'
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV1(): [Uint8Array, Uint8Array, Uint8Array, v1.ExitReason] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get isV9(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '4548a1e2cc89d3c4c1d89f3020a6fb505032fdfd5236d5749c897815fb7db5de'
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV9(): [Uint8Array, Uint8Array, Uint8Array, v9.ExitReason] {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '19a41316cbc97760af789cb1da772172d6a9f09521ee0e5e8f18125c1db318df'
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV15(): [Uint8Array, Uint8Array, Uint8Array, v15.ExitReason] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '42c632fb85f0ab54f0811a41be276501476d6d3e1e0169c6a6db6afdd63e7893'
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV23(): [Uint8Array, Uint8Array, Uint8Array, v23.ExitReason] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get isV30(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '19a41316cbc97760af789cb1da772172d6a9f09521ee0e5e8f18125c1db318df'
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV30(): [Uint8Array, Uint8Array, Uint8Array, v30.ExitReason] {
        assert(this.isV30)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed.
     */
    get isV33(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === 'ce346fb50a61fef1951414eeed890a5d893f46ed58612b042507511dc1cf16f1'
    }

    /**
     * An ethereum transaction was successfully executed.
     */
    get asV33(): {from: Uint8Array, to: Uint8Array, transactionHash: Uint8Array, exitReason: v33.ExitReason} {
        assert(this.isV33)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '85a0045758a84a2cd09a563b9e9fc2194e6054385c70290178792fb71cd20021'
    }

    /**
     * An ethereum transaction was successfully executed.
     */
    get asV43(): {from: Uint8Array, to: Uint8Array, transactionHash: Uint8Array, exitReason: v43.ExitReason} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '4da35f3b1cb63c6084839486f6cc44465f31d4dbf24abce9ef5d05b899d9309e'
    }

    /**
     * An ethereum transaction was successfully executed.
     */
    get asV64(): {from: Uint8Array, to: Uint8Array, transactionHash: Uint8Array, exitReason: v64.ExitReason, extraData: Uint8Array} {
        assert(this.isV64)
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
     * A name was cleared, and the given balance returned. \[who, deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * A name was cleared, and the given balance returned. \[who, deposit\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asV3(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV3)
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
     * A name was removed and the given balance slashed. \[who, deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * A name was removed and the given balance slashed. \[who, deposit\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asV3(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV3)
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
     * A name was set or reset (which will remove all judgements). \[who\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A name was set or reset (which will remove all judgements). \[who\]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get asV3(): {who: Uint8Array} {
        assert(this.isV3)
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
     * A judgement was given by a registrar. \[target, registrar_index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * A judgement was given by a registrar. \[target, registrar_index\]
     */
    get asV1(): [Uint8Array, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was given by a registrar.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
    }

    /**
     * A judgement was given by a registrar.
     */
    get asV3(): {target: Uint8Array, registrarIndex: number} {
        assert(this.isV3)
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
     * A judgement was asked from a registrar. \[who, registrar_index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * A judgement was asked from a registrar. \[who, registrar_index\]
     */
    get asV1(): [Uint8Array, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was asked from a registrar.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement was asked from a registrar.
     */
    get asV3(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV3)
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
     * A judgement request was retracted. \[who, registrar_index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * A judgement request was retracted. \[who, registrar_index\]
     */
    get asV1(): [Uint8Array, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement request was retracted.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement request was retracted.
     */
    get asV3(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV3)
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
     * A registrar was added. \[registrar_index\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A registrar was added. \[registrar_index\]
     */
    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registrar was added.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
    }

    /**
     * A registrar was added.
     */
    get asV3(): {registrarIndex: number} {
        assert(this.isV3)
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
     * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get asV3(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV3)
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
     * A sub-identity was removed from an identity and the deposit freed.
     * \[sub, main, deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     * \[sub, main, deposit\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asV3(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV3)
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
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account. \[sub, main, deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account. \[sub, main, deposit\]
     */
    get asV1(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asV3(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class InflationForcedInflationRecalculationEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Inflation.ForcedInflationRecalculation')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Inflation recalculation has been forced.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('Inflation.ForcedInflationRecalculation') === '95fef1755538b99f0d42f82b66d5f06a72efa702266fb44dcd8023332bc17d75'
    }

    /**
     * Inflation recalculation has been forced.
     */
    get asV79(): {config: v79.InflationConfiguration} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class InflationInflationConfigurationForceChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Inflation.InflationConfigurationForceChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Inflation configuration has been force changed. This will have an immediate effect from this block.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('Inflation.InflationConfigurationForceChanged') === '95fef1755538b99f0d42f82b66d5f06a72efa702266fb44dcd8023332bc17d75'
    }

    /**
     * Inflation configuration has been force changed. This will have an immediate effect from this block.
     */
    get asV79(): {config: v79.InflationConfiguration} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class InflationInflationParametersForceChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Inflation.InflationParametersForceChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Inflation parameters have been force changed. This will have effect on the next inflation recalculation.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('Inflation.InflationParametersForceChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Inflation parameters have been force changed. This will have effect on the next inflation recalculation.
     */
    get asV79(): null {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class InflationNewInflationConfigurationEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Inflation.NewInflationConfiguration')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New inflation configuration has been set.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('Inflation.NewInflationConfiguration') === '95fef1755538b99f0d42f82b66d5f06a72efa702266fb44dcd8023332bc17d75'
    }

    /**
     * New inflation configuration has been set.
     */
    get asV79(): {config: v79.InflationConfiguration} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigApprovalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigApproval')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been approved by someone.
     * \[approving, timepoint, multisig, call_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     * A multisig operation has been approved by someone.
     * \[approving, timepoint, multisig, call_hash\]
     */
    get asV1(): [Uint8Array, v1.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asV3(): {approving: Uint8Array, timepoint: v3.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
     */
    get asV1(): [Uint8Array, v1.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been cancelled.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asV3(): {cancelling: Uint8Array, timepoint: v3.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '863ce12b1101a132a700dd79901f7260da5e9d930f97af1b0ef6d7385d5df23e'
    }

    /**
     * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
     */
    get asV1(): [Uint8Array, v1.Timepoint, Uint8Array, Uint8Array, v1.Type_32] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '077317dae49bec353c6f4e39c53895e53232992132030d820d2209051d4752df'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV3(): {approving: Uint8Array, timepoint: v3.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v3.Type_26} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV9(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === 'a4f4f4f2422a1c4cb5359e5ca7ce069035018dd917feceb324240a45edc121d6'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV9(): {approving: Uint8Array, timepoint: v9.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v9.Type_27} {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '893c7ea80ff9b8edc0f0e804a754035301e2cf91cbfe60a5a7d0565bfa1c133e'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV15(): {approving: Uint8Array, timepoint: v15.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v15.Type_28} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '303cb15b241c821ed02efcceb1d8f92a11e2a124e8eef73810b68e2592455034'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV49(): {approving: Uint8Array, timepoint: v49.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v49.Type_30} {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '9e0a225fbf5acad3beeb4abfce677050bfccaf660eedf13e97c1c4ecb39cfe13'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV64(): {approving: Uint8Array, timepoint: v64.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v64.Type_31} {
        assert(this.isV64)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigNewMultisigEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.NewMultisig')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new multisig operation has begun. \[approving, multisig, call_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     * A new multisig operation has begun. \[approving, multisig, call_hash\]
     */
    get asV1(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new multisig operation has begun.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    }

    /**
     * A new multisig operation has begun.
     */
    get asV3(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV3)
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
     * Downward messages were processed using the given weight.
     * \[ weight_used, result_mqc_head \]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '62ab179c459e900954ede92a01f149d553e9317efc7d0129525f40d631e8b38f'
    }

    /**
     * Downward messages were processed using the given weight.
     * \[ weight_used, result_mqc_head \]
     */
    get asV1(): [bigint, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '83022e6226975081ba018c2b45a90d494bc922ece44e69af0322583651264f8e'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asV23(): {weightUsed: bigint, dmqHead: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '5ae72cc32ab9a15192bb84c788530d1d739717b8f9f85bd654953f12515e41f1'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asV43(): {weightUsed: v43.Weight, dmqHead: Uint8Array} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === 'cf9eeacdba66ba832f6a2f98e5183e00967eed37902f126a525a42e65ffec630'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asV49(): {weightUsed: v49.Weight, dmqHead: Uint8Array} {
        assert(this.isV49)
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
     * Some downward messages have been received and will be processed.
     * \[ count \]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Some downward messages have been received and will be processed.
     * \[ count \]
     */
    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '1cdbdc8ac203922f95ae6ab3e8b98004e956389f7ec11480ec5633d29b48cf71'
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get asV23(): {count: number} {
        assert(this.isV23)
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
     * An upgrade has been authorized.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An upgrade has been authorized.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An upgrade has been authorized.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * An upgrade has been authorized.
     */
    get asV23(): {codeHash: Uint8Array} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemUpwardMessageSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.UpwardMessageSent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpwardMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get asV61(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV61)
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
     * The validation function was applied as of the contained relay chain block number.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === 'f35adbaa82c93636884997faedd16369ac498b9208d7c11f2233b9ef2aa4f092'
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get asV23(): {relayChainBlockNum: number} {
        assert(this.isV23)
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
    get isV3(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The relay-chain aborted the upgrade process.
     */
    get asV3(): null {
        assert(this.isV3)
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
     * The validation function has been scheduled to apply as of the contained relay chain
     * block number.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * The validation function has been scheduled to apply as of the contained relay chain
     * block number.
     */
    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The validation function has been scheduled to apply.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The validation function has been scheduled to apply.
     */
    get asV3(): null {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmAssetsClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.AssetsClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsClaimed') === '31f92e7520747dddaef3e11b450bf3ace3a2df72f612e4237ea77faaffe7a16c'
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get asV61(): [Uint8Array, v61.V3MultiLocation, v61.VersionedMultiAssets] {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV15(): [Uint8Array, v15.V1MultiLocation, v15.VersionedMultiAssets] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get isV52(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '357607142e5298824c427a1fe0bfb4dd63f3878ebfea84e52fa98b82b1a4f4c6'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV52(): [Uint8Array, v52.V1MultiLocation, v52.VersionedMultiAssets] {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '31f92e7520747dddaef3e11b450bf3ace3a2df72f612e4237ea77faaffe7a16c'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV61(): [Uint8Array, v61.V3MultiLocation, v61.VersionedMultiAssets] {
        assert(this.isV61)
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

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Attempted') === '4154651e242bd6b6bc077aa66e91ede994df17d6d31ec8746fb77b61829f6cc1'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV15(): v15.V2Outcome {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Attempted') === '9f44833a3470bf6416377180f3875a05cfa0cf60651f18f6456d9e12cbab7095'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV61(): v61.V3Outcome {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmFeesPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.FeesPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.FeesPaid') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    get asV61(): [v61.V3MultiLocation, v61.V3MultiAsset[]] {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmInvalidQuerierEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.InvalidQuerier')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidQuerier') === '7c1090f283eee877a7601bfed0fd6fc3ca831930ac944924347ca8a2c6bd92e3'
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    get asV61(): [v61.V3MultiLocation, bigint, v61.V3MultiLocation, (v61.V3MultiLocation | undefined)] {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmInvalidQuerierVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.InvalidQuerierVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidQuerierVersion') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV61(): [v61.V3MultiLocation, bigint] {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === 'aca6b87c79cd283d77249dae5d6ff6b7249a24e95958b723f47cd2333f0e9bc1'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV15(): [v15.V1MultiLocation, bigint, (v15.V1MultiLocation | undefined)] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get isV52(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === '990cc00e432c7557e78d8fc369a5ff1c27aceeaff4ef11984d218478dc53d382'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV52(): [v52.V1MultiLocation, bigint, (v52.V1MultiLocation | undefined)] {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === '3bf64d16d6fb5992c738643efff778414cc181e36377c106ab8130ca32b906de'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV61(): [v61.V3MultiLocation, bigint, (v61.V3MultiLocation | undefined)] {
        assert(this.isV61)
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
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponderVersion') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV15(): [v15.V1MultiLocation, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV52(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponderVersion') === 'a42731758e356b8640e3321dafe151b8ac297a2be71bc4ceff985033060f2569'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV52(): [v52.V1MultiLocation, bigint] {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponderVersion') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV61(): [v61.V3MultiLocation, bigint] {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV15(): [bigint, number, number] {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV15(): [bigint, number, number] {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV15(): [bigint, number, number] {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '0104ccc866506c43592e56f342852c22c060b58c586141b7900f6ad97353e8b2'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV15(): [bigint, number, number, bigint, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isV43(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '017f3a2e2d06e91d1be294456b9555e805a1e72a1ad2a469f493c21bf4da0feb'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV43(): [bigint, number, number, v43.Weight, v43.Weight] {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isV49(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '98a4f2faff58b2444156c088dd1e1b3efb6f82323dcf1a7c67d4d2e01b621c0d'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV49(): [bigint, number, number, v49.Weight, v49.Weight] {
        assert(this.isV49)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'b02879418cace85908884f92e4b915e3b448f9e06d9bcc0edcce01ed9bc5b644'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV15(): [v15.VersionedMultiLocation, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get isV52(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'df85778aaaf8dd844e177ac92fcb3256708dd8f3a8c5f94e1fa79f126116dc1c'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV52(): [v52.VersionedMultiLocation, bigint] {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === '8266fa3a9f901885a47ef275cb4d4053fa3a36033a40564944a565ca686bb27d'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV61(): [v61.VersionedMultiLocation, bigint] {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '0d47fb7e1a9ccdfd8879b0e483179d5b2c7b29bd5db653557e266536bc40f9a0'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV15(): [v15.V1MultiLocation, bigint, v15.V2Error] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV52(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '70b4128bc206c159059329487777fcca974cd67403fafe82ed254a875947534d'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV52(): [v52.V1MultiLocation, bigint, v52.V2Error] {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '26c26186934c8414941ac6565c3465399a31fd237e9f48bcc04601c00427c6fc'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV61(): [v61.V3MultiLocation, bigint, v61.V3Error] {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '122689cbd0466e99035c5eeda9c178ed25d8a8fee01f9de0d818f7e86cd5e333'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV15(): [bigint, v15.V2Response] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV52(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === 'b377afa93f6a1fa3fbbbe2957f60a56bc7c8e08a09d110a511fc3ed24c3c67a4'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV52(): [bigint, v52.V2Response] {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '47e2336328ac2f8cffe468836a85755d501dbd3f9fe77c829ae5b5c5c33f5e9c'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV61(): [bigint, v61.V3Response] {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get asV15(): bigint {
        assert(this.isV15)
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

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === 'ae5e308764e970ce405a89338cec74552db382f20b13af73b16c9b7b172754e4'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV15(): [v15.V1MultiLocation, v15.V1MultiLocation, v15.V2Instruction[]] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV52(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === '2d7b5f95d8bfc74ce68a179c7a746363dc0d3d0eca2fe88f6606a522fbe34a83'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV52(): [v52.V1MultiLocation, v52.V1MultiLocation, v52.V2Instruction[]] {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === '8b71eb54444ef55962e90645805fd80535dfb12f572b41fdb1e093b7627b132d'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV61(): [v61.V3MultiLocation, v61.V3MultiLocation, v61.V3Instruction[]] {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV15(): [v15.V1MultiLocation, number] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get isV52(): boolean {
        return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === 'a03fd5bf20a50aaaf59ab7760b98733a03d897f929733dd0cc98b0a5d9bb0924'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV52(): [v52.V1MultiLocation, number] {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '9fb88093240cec5964187b6999557d2d8c4331f97b6c42c5664d30afbf50d7d4'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV61(): [v61.V3MultiLocation, number] {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV15(): [v15.V1MultiLocation, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get isV52(): boolean {
        return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'a42731758e356b8640e3321dafe151b8ac297a2be71bc4ceff985033060f2569'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV52(): [v52.V1MultiLocation, bigint] {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV61(): [v61.V3MultiLocation, bigint] {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get asV15(): [v15.V1MultiLocation, number] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get isV52(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === 'a03fd5bf20a50aaaf59ab7760b98733a03d897f929733dd0cc98b0a5d9bb0924'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get asV52(): [v52.V1MultiLocation, number] {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '3e656c216d68595d03592e62a70ad5d9d6a20b8a41bc0686433d36902cc47f08'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    get asV61(): [v61.V3MultiLocation, number, v61.V3MultiAsset[]] {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmVersionNotifyRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.VersionNotifyRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionNotifyRequested') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get asV61(): [v61.V3MultiLocation, v61.V3MultiAsset[]] {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmVersionNotifyStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.VersionNotifyStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionNotifyStarted') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    get asV61(): [v61.V3MultiLocation, v61.V3MultiAsset[]] {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmVersionNotifyUnrequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.VersionNotifyUnrequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get isV61(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionNotifyUnrequested') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get asV61(): [v61.V3MultiLocation, v61.V3MultiAsset[]] {
        assert(this.isV61)
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
    get isV61(): boolean {
        return this._chain.getEventHash('Proxy.Announced') === '5c2546e4632bb75e839f990a33f7feb63fb5598747a25d3d09f23108c106abc4'
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get asV61(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
        assert(this.isV61)
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
    get isV61(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === 'fc14abe4f1df68057dfb121c8bc67750494c98333c9a0be088bafcba51256782'
    }

    /**
     * A proxy was added.
     */
    get asV61(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v61.ProxyType, delay: number} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was added.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '1bd4336dd457cea04f97fa79f773ac5f5fc031ee10f1f1e4ac487bcfff4ff4f2'
    }

    /**
     * A proxy was added.
     */
    get asV79(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v79.ProxyType, delay: number} {
        assert(this.isV79)
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
    get isV61(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === 'd15218d9451baa25e4e3c2b30a15d679f7c3c9aa3d43b64b531831430663eb58'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV61(): {result: v61.Type_30} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === 'ee56f7174dc1a4631da3e5b48f323193771be6a702fb2ff1ff40459869d34a0e'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV64(): {result: v64.Type_31} {
        assert(this.isV64)
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
    get isV61(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === 'fc14abe4f1df68057dfb121c8bc67750494c98333c9a0be088bafcba51256782'
    }

    /**
     * A proxy was removed.
     */
    get asV61(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v61.ProxyType, delay: number} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was removed.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === '1bd4336dd457cea04f97fa79f773ac5f5fc031ee10f1f1e4ac487bcfff4ff4f2'
    }

    /**
     * A proxy was removed.
     */
    get asV79(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v79.ProxyType, delay: number} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyPureCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.PureCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('Proxy.PureCreated') === '2cbd00866c56832f5eef38f3dc405f4c557d0dec28eba6ecba584337fef97ac2'
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV61(): {pure: Uint8Array, who: Uint8Array, proxyType: v61.ProxyType, disambiguationIndex: number} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('Proxy.PureCreated') === '48bfc940da125aa29dd44970c922fa2d051d0ece2e69881193277b67b5923ce1'
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV79(): {pure: Uint8Array, who: Uint8Array, proxyType: v79.ProxyType, disambiguationIndex: number} {
        assert(this.isV79)
        return this._chain.decodeEvent(this.event)
    }
}

export class SessionNewSessionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Session.NewSession')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New session has happened. Note that the argument is the \[session_index\], not the
     * block number as the type might suggest.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * New session has happened. Note that the argument is the \[session_index\], not the
     * block number as the type might suggest.
     */
    get asV1(): number {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get asV3(): {sessionIndex: number} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }
}

export class StateTrieMigrationAutoMigrationFinishedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StateTrieMigration.AutoMigrationFinished')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The auto migration task finished.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('StateTrieMigration.AutoMigrationFinished') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The auto migration task finished.
     */
    get asV61(): null {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class StateTrieMigrationHaltedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StateTrieMigration.Halted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Migration got halted due to an error or miss-configuration.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('StateTrieMigration.Halted') === '9db6512bfa608ca7e065f2513e72fb1a79e936473c3e8f94c8b57b11a0e5bfce'
    }

    /**
     * Migration got halted due to an error or miss-configuration.
     */
    get asV61(): {error: v61.Error} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class StateTrieMigrationMigratedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StateTrieMigration.Migrated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Given number of `(top, child)` keys were migrated respectively, with the given
     * `compute`.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('StateTrieMigration.Migrated') === 'e95f6cbf274d326db45ce7cda6cf064a2899b4bf668282f21e3dfb104bbd89fc'
    }

    /**
     * Given number of `(top, child)` keys were migrated respectively, with the given
     * `compute`.
     */
    get asV61(): {top: number, child: number, compute: v61.MigrationCompute} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class StateTrieMigrationSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StateTrieMigration.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some account got slashed by the given amount.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('StateTrieMigration.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some account got slashed by the given amount.
     */
    get asV61(): {who: Uint8Array, amount: bigint} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class StaticPriceProviderPriceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StaticPriceProvider.PriceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New static native currency price has been set.
     */
    get isV79(): boolean {
        return this._chain.getEventHash('StaticPriceProvider.PriceSet') === '301ba8b7305f6fbc386aa2d1a6e3d36df9b7e914e6804384bb965c1ffa2519fb'
    }

    /**
     * New static native currency price has been set.
     */
    get asV79(): {price: bigint} {
        assert(this.isV79)
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
     * The \[sudoer\] just switched identity; the old key is supplied.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'bb1582b708cec95486f6bf4ff15529522e5c08c0d8149e09b71d2e042d0dcc8f'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied.
     */
    get asV3(): {newSudoer: Uint8Array} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get isV9(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get asV9(): {oldSudoer: (Uint8Array | undefined)} {
        assert(this.isV9)
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
     * A sudo just took place. \[result\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV1(): v1.Type_32 {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '0904640b321d9467ec4b305822629c9cf7476e30acdbaf45232c9b0c23100db1'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV3(): {sudoResult: v3.Type_26} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV9(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '7cde07a00087fe00204a886eb195e51ab4ed328b48e00f89cab63a3354eedb31'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV9(): {sudoResult: v9.Type_27} {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === 'bfff987b04269a820686fcc24b9885fd64cbc87c576cf203a79a3a99a7c596e1'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV15(): {sudoResult: v15.Type_28} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV49(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '1b4cd14e3ef27d194a19f72ca99c0748bad5378dacf5240cdcde1536e1d11dad'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV49(): {sudoResult: v49.Type_30} {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '3ecb430e21c76eb720064ac2294a31cf70178245416aa72891f2973dfab55b73'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV64(): {sudoResult: v64.Type_31} {
        assert(this.isV64)
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
     * A sudo just took place. \[result\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV1(): v1.Type_32 {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '0904640b321d9467ec4b305822629c9cf7476e30acdbaf45232c9b0c23100db1'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV3(): {sudoResult: v3.Type_26} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV9(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '7cde07a00087fe00204a886eb195e51ab4ed328b48e00f89cab63a3354eedb31'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV9(): {sudoResult: v9.Type_27} {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === 'bfff987b04269a820686fcc24b9885fd64cbc87c576cf203a79a3a99a7c596e1'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV15(): {sudoResult: v15.Type_28} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV49(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '1b4cd14e3ef27d194a19f72ca99c0748bad5378dacf5240cdcde1536e1d11dad'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV49(): {sudoResult: v49.Type_30} {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '3ecb430e21c76eb720064ac2294a31cf70178245416aa72891f2973dfab55b73'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV64(): {sudoResult: v64.Type_31} {
        assert(this.isV64)
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
     * `:code` was updated.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * `:code` was updated.
     */
    get asV1(): null {
        assert(this.isV1)
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
     * An extrinsic failed. \[error, info\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '0995776ff5e8d5f8662a6841d8556c830acc58fbb01f76a13b6aa4222b987150'
    }

    /**
     * An extrinsic failed. \[error, info\]
     */
    get asV1(): [v1.DispatchError, v1.DispatchInfo] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV9(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
    }

    /**
     * An extrinsic failed.
     */
    get asV9(): {dispatchError: v9.DispatchError, dispatchInfo: v9.DispatchInfo} {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
    }

    /**
     * An extrinsic failed.
     */
    get asV15(): {dispatchError: v15.DispatchError, dispatchInfo: v15.DispatchInfo} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '7a219a9eae41ad22651fdcb4f6a7453254b0ecc7be4b30821be2ab5b44e5f1b4'
    }

    /**
     * An extrinsic failed.
     */
    get asV43(): {dispatchError: v43.DispatchError, dispatchInfo: v43.DispatchInfo} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '36c29895cd15b6f845bb064a671635ce07ef9de9648695c2803020e8510d0fb3'
    }

    /**
     * An extrinsic failed.
     */
    get asV49(): {dispatchError: v49.DispatchError, dispatchInfo: v49.DispatchInfo} {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '89ca818f689e3f6e085d8137a961f36cc94819777211c5c11cca985a448944b8'
    }

    /**
     * An extrinsic failed.
     */
    get asV64(): {dispatchError: v64.DispatchError, dispatchInfo: v64.DispatchInfo} {
        assert(this.isV64)
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
     * An extrinsic completed successfully. \[info\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
    }

    /**
     * An extrinsic completed successfully. \[info\]
     */
    get asV1(): v1.DispatchInfo {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV9(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV9(): {dispatchInfo: v9.DispatchInfo} {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6fc1e5ad9f5b3851c6e301764b8507ebb0861fd57381e6bc020a47f2b710167d'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV43(): {dispatchInfo: v43.DispatchInfo} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6b78214e1591ecc2de1662ebf5ca93838612414a62415cde1cdd2962f8235a92'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV49(): {dispatchInfo: v49.DispatchInfo} {
        assert(this.isV49)
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
     * An \[account\] was reaped.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An \[account\] was reaped.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was reaped.
     */
    get isV9(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV9(): {account: Uint8Array} {
        assert(this.isV9)
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
     * A new \[account\] was created.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A new \[account\] was created.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new account was created.
     */
    get isV9(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV9(): {account: Uint8Array} {
        assert(this.isV9)
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
     * On on-chain remark happened. \[origin, remark_hash\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     * On on-chain remark happened. \[origin, remark_hash\]
     */
    get asV1(): [Uint8Array, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * On on-chain remark happened.
     */
    get isV9(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV9(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV9)
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
    get isV30(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asV30(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isV30)
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
     * Batch of dispatches completed fully with no error.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get asV1(): null {
        assert(this.isV1)
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
    get isV23(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asV23(): null {
        assert(this.isV23)
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
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error. \[index, error\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === 'b9192854e3b1d8b7a3bd93b66a170a2afd8616d353d0fc1bdbfbfe6efa5b4f5a'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error. \[index, error\]
     */
    get asV1(): [number, v1.DispatchError] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '98bdd6e841214fcd4b95ff7b4750fcf3643d9e94f0203582cf6dd5c7dd772c39'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV3(): {index: number, error: v3.DispatchError} {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV9(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '8676c6dc6a22410c7ddbc9f34f71e25e9bc1f7237c98ea59385020ce26129067'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV9(): {index: number, error: v9.DispatchError} {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV15(): {index: number, error: v15.DispatchError} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '14dbb9456065a44deeed159d4dbd21796ec92754c0494d698c9bcc529d0f7279'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV49(): {index: number, error: v49.DispatchError} {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '031f8c01ddd9491965bf6e6671d70381e70d55e6028aab52a937d1c3afeecb9f'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV64(): {index: number, error: v64.DispatchError} {
        assert(this.isV64)
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
     * A call was dispatched. \[result\]
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A call was dispatched. \[result\]
     */
    get asV3(): v3.Type_26 {
        assert(this.isV3)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV9(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '123f6c35bbf8bd8d1cc0ada05ce8ad9758b8462076e62ae91382a7270c95ff10'
    }

    /**
     * A call was dispatched.
     */
    get asV9(): {result: v9.Type_27} {
        assert(this.isV9)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A call was dispatched.
     */
    get asV15(): {result: v15.Type_28} {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'd15218d9451baa25e4e3c2b30a15d679f7c3c9aa3d43b64b531831430663eb58'
    }

    /**
     * A call was dispatched.
     */
    get asV49(): {result: v49.Type_30} {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'ee56f7174dc1a4631da3e5b48f323193771be6a702fb2ff1ff40459869d34a0e'
    }

    /**
     * A call was dispatched.
     */
    get asV64(): {result: v64.Type_31} {
        assert(this.isV64)
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
     * A single item within a Batch of dispatches has completed with no error.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get asV1(): null {
        assert(this.isV1)
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
    get isV23(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV23(): {error: v23.DispatchError} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV49(): {error: v49.DispatchError} {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV64(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '4564a5412ce55535234d019dbd1d2999c5a9d6f452a565385d0c43e85d0dbf0b'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV64(): {error: v64.DispatchError} {
        assert(this.isV64)
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
     * An \[account\] has become fully vested.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Vesting.VestingCompleted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An \[account\] has become fully vested.
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An \[account\] has become fully vested.
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Vesting.VestingCompleted') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An \[account\] has become fully vested.
     */
    get asV3(): {account: Uint8Array} {
        assert(this.isV3)
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
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     * \[account, unvested\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Vesting.VestingUpdated') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     * \[account, unvested\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    get isV3(): boolean {
        return this._chain.getEventHash('Vesting.VestingUpdated') === '827ca6c1a4e85ce850afac4c8d4d055acd3be5c19141889b40808e42b2c769e3'
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    get asV3(): {account: Uint8Array, unvested: bigint} {
        assert(this.isV3)
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
    get isV70(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '15736a72848dcda33acde4ffd89efcf41166a311cefd45a3ccad9cf54e78a91d'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV70(): {sender: Uint8Array, assets: v70.V3MultiAsset[], fee: v70.V3MultiAsset, dest: v70.V3MultiLocation} {
        assert(this.isV70)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcAssetConfigAssetLocationChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcAssetConfig.AssetLocationChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Changed the asset type mapping for a given asset id
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcAssetConfig.AssetLocationChanged') === 'b2c8de312a2f0ec8ceafcbb2b72a4db0997d4c462de21721bd01625f2b0296f5'
    }

    /**
     * Changed the asset type mapping for a given asset id
     */
    get asV23(): {previousAssetLocation: v23.VersionedMultiLocation, assetId: bigint, newAssetLocation: v23.VersionedMultiLocation} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the asset type mapping for a given asset id
     */
    get isV52(): boolean {
        return this._chain.getEventHash('XcAssetConfig.AssetLocationChanged') === '6570f041f5f394a2284987c6c487ddc27124827b58f5ffecd84495ecc29a01b2'
    }

    /**
     * Changed the asset type mapping for a given asset id
     */
    get asV52(): {previousAssetLocation: v52.VersionedMultiLocation, assetId: bigint, newAssetLocation: v52.VersionedMultiLocation} {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the asset type mapping for a given asset id
     */
    get isV61(): boolean {
        return this._chain.getEventHash('XcAssetConfig.AssetLocationChanged') === 'b4a3087a725e8935598b452a389e710ecebd8e6514414126672a8f15064a96ac'
    }

    /**
     * Changed the asset type mapping for a given asset id
     */
    get asV61(): {previousAssetLocation: v61.VersionedMultiLocation, assetId: bigint, newAssetLocation: v61.VersionedMultiLocation} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcAssetConfigAssetRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcAssetConfig.AssetRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Registed mapping between asset type and asset Id.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcAssetConfig.AssetRegistered') === 'ba313af15f831ed3de2c68a33d0c77cef02664962dbce1233c4bac80bdd49082'
    }

    /**
     * Registed mapping between asset type and asset Id.
     */
    get asV23(): {assetLocation: v23.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Registed mapping between asset type and asset Id.
     */
    get isV52(): boolean {
        return this._chain.getEventHash('XcAssetConfig.AssetRegistered') === '4713b154ac1fea6acd79f2ee7853ffc08443db65eb8fcafe9eaae6782f44bc0b'
    }

    /**
     * Registed mapping between asset type and asset Id.
     */
    get asV52(): {assetLocation: v52.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Registed mapping between asset type and asset Id.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('XcAssetConfig.AssetRegistered') === 'a19eeb05e90beefe78bddc92e84104664ee1bb8f4177344027a8badd311b8ba9'
    }

    /**
     * Registed mapping between asset type and asset Id.
     */
    get asV61(): {assetLocation: v61.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcAssetConfigAssetRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcAssetConfig.AssetRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Removed all information related to an asset Id
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcAssetConfig.AssetRemoved') === 'ba313af15f831ed3de2c68a33d0c77cef02664962dbce1233c4bac80bdd49082'
    }

    /**
     * Removed all information related to an asset Id
     */
    get asV23(): {assetLocation: v23.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Removed all information related to an asset Id
     */
    get isV52(): boolean {
        return this._chain.getEventHash('XcAssetConfig.AssetRemoved') === '4713b154ac1fea6acd79f2ee7853ffc08443db65eb8fcafe9eaae6782f44bc0b'
    }

    /**
     * Removed all information related to an asset Id
     */
    get asV52(): {assetLocation: v52.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Removed all information related to an asset Id
     */
    get isV61(): boolean {
        return this._chain.getEventHash('XcAssetConfig.AssetRemoved') === 'a19eeb05e90beefe78bddc92e84104664ee1bb8f4177344027a8badd311b8ba9'
    }

    /**
     * Removed all information related to an asset Id
     */
    get asV61(): {assetLocation: v61.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcAssetConfigSupportedAssetRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcAssetConfig.SupportedAssetRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Supported asset type for fee payment removed.
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcAssetConfig.SupportedAssetRemoved') === 'd26643923cd4bc9660d0022775958cdfc8de6b72e3e211a239383fa3f2e9175f'
    }

    /**
     * Supported asset type for fee payment removed.
     */
    get asV23(): {assetLocation: v23.VersionedMultiLocation} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Supported asset type for fee payment removed.
     */
    get isV52(): boolean {
        return this._chain.getEventHash('XcAssetConfig.SupportedAssetRemoved') === '0f54ca54e6b9765d1eb9502b7af2d9c7fa1d33ad23e7f72734019d7482201709'
    }

    /**
     * Supported asset type for fee payment removed.
     */
    get asV52(): {assetLocation: v52.VersionedMultiLocation} {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Supported asset type for fee payment removed.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('XcAssetConfig.SupportedAssetRemoved') === 'f972f3d7aa1481632a3438c7b2dca85ac510c32c4af5b355aba61e91601bef96'
    }

    /**
     * Supported asset type for fee payment removed.
     */
    get asV61(): {assetLocation: v61.VersionedMultiLocation} {
        assert(this.isV61)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcAssetConfigUnitsPerSecondChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcAssetConfig.UnitsPerSecondChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Changed the amount of units we are charging per execution second for an asset
     */
    get isV23(): boolean {
        return this._chain.getEventHash('XcAssetConfig.UnitsPerSecondChanged') === '3bcc9e80638fa8ed1a0263133babfd93d70b65df90d074954b577f1ebcfcff67'
    }

    /**
     * Changed the amount of units we are charging per execution second for an asset
     */
    get asV23(): {assetLocation: v23.VersionedMultiLocation, unitsPerSecond: bigint} {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the amount of units we are charging per execution second for an asset
     */
    get isV52(): boolean {
        return this._chain.getEventHash('XcAssetConfig.UnitsPerSecondChanged') === '71ded49b017b8cc39a540beb71a1e684154fa6cf9ec0ceb3bed96e63c3252814'
    }

    /**
     * Changed the amount of units we are charging per execution second for an asset
     */
    get asV52(): {assetLocation: v52.VersionedMultiLocation, unitsPerSecond: bigint} {
        assert(this.isV52)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the amount of units we are charging per execution second for an asset
     */
    get isV61(): boolean {
        return this._chain.getEventHash('XcAssetConfig.UnitsPerSecondChanged') === 'ac6712e26b348d319e09718fec9b572d7dd95cbb563a20b30e621cbf6acbc693'
    }

    /**
     * Changed the amount of units we are charging per execution second for an asset
     */
    get asV61(): {assetLocation: v61.VersionedMultiLocation, unitsPerSecond: bigint} {
        assert(this.isV61)
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
     * Bad XCM format used.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadFormat') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * Bad XCM format used.
     */
    get asV15(): (Uint8Array | undefined) {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Bad XCM format used.
     */
    get isV30(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadFormat') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * Bad XCM format used.
     */
    get asV30(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV30)
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
     * Bad XCM version used.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadVersion') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * Bad XCM version used.
     */
    get asV15(): (Uint8Array | undefined) {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Bad XCM version used.
     */
    get isV30(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadVersion') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * Bad XCM version used.
     */
    get asV30(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV30)
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
     * Some XCM failed.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === '639070abee49a6419e897939fc5b761d561a52efc062a7f1a1183b543e786999'
    }

    /**
     * Some XCM failed.
     */
    get asV15(): [(Uint8Array | undefined), v15.V2Error] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV30(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === '8ca5252e46336e4c6a7bffc1927807bb885a90bad49951c5e832eda183f4d365'
    }

    /**
     * Some XCM failed.
     */
    get asV30(): {messageHash: (Uint8Array | undefined), error: v30.V2Error, weight: bigint} {
        assert(this.isV30)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'd72a6fdcbedea7017572a7b9b1b30fb50d753160a20111c371f00be9c05691c2'
    }

    /**
     * Some XCM failed.
     */
    get asV43(): {messageHash: (Uint8Array | undefined), error: v43.V2Error, weight: v43.Weight} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'decc5a8e77a358e7b33575a65892e5dedbe76a99a126bf560347fcea7818d5b0'
    }

    /**
     * Some XCM failed.
     */
    get asV49(): {messageHash: (Uint8Array | undefined), error: v49.V2Error, weight: v49.Weight} {
        assert(this.isV49)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV61(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'add7b9cc246aa92449c7315a345573f307df55cd0b7e472982a726f0e1757cf0'
    }

    /**
     * Some XCM failed.
     */
    get asV61(): {messageHash: (Uint8Array | undefined), error: v61.V3Error, weight: v61.Weight} {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === 'ebfdd28144c52e3beb9a90e53e214e90e6114fc4d52e2c572b7e0a2e8c303bd5'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV15(): [number, number, bigint, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isV30(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '66fcd6ac0f8478601d6008edf04a5f6e1988dad34d2e67484bc112967caeddbb'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV30(): {sender: number, sentAt: number, index: bigint, required: bigint} {
        assert(this.isV30)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '067a3a3aa8ee6726ecb8bf35ab307ac7566fec3acc2a84c25854711f6279d584'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV43(): {sender: number, sentAt: number, index: bigint, required: v43.Weight} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '2ab73de7ff203da5932102451076b4fa8c2ccd8d1073f98653bf4d6f0c768abb'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV49(): {sender: number, sentAt: number, index: bigint, required: v49.Weight} {
        assert(this.isV49)
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
    get isV15(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV15(): [bigint, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isV30(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '6de49eae2a9c6e3c2fecdcc4baff436b4272b874de79a1f9f8955ca81e9f47bb'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV30(): {index: bigint, used: bigint} {
        assert(this.isV30)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '05c4258fc96a5477a2e7d79afbaae99e134fdf08770b5619a826272ad1e82c22'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV43(): {index: bigint, used: v43.Weight} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '329a8814d84fbfabe17575c913cc1d0e29db3f8ce21b25c6e90d9e54913d763b'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV49(): {index: bigint, used: v49.Weight} {
        assert(this.isV49)
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
     * Some XCM was executed ok.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV15(): (Uint8Array | undefined) {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM was executed ok.
     */
    get isV30(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === '70e4953d4755440ebd53ef8a5482ada34f27cd1aac56b0493142d711aebc0e85'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV30(): {messageHash: (Uint8Array | undefined), weight: bigint} {
        assert(this.isV30)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM was executed ok.
     */
    get isV43(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === '305c23f5c5645b4330237519e6b8fa038af5dfc624c8dd8e1de3b97b6e51faf4'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV43(): {messageHash: (Uint8Array | undefined), weight: v43.Weight} {
        assert(this.isV43)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM was executed ok.
     */
    get isV49(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === 'b84e46a58fb78d04c8748c4d236302e83484bfad9ec3579aa4e8f336f0efaca8'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV49(): {messageHash: (Uint8Array | undefined), weight: v49.Weight} {
        assert(this.isV49)
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
     * An upward message was sent to the relay chain.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get asV15(): (Uint8Array | undefined) {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get isV30(): boolean {
        return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get asV30(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV30)
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
     * An HRMP message was sent to a sibling parachain.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get asV15(): (Uint8Array | undefined) {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get isV30(): boolean {
        return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get asV30(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV30)
        return this._chain.decodeEvent(this.event)
    }
}

export class XtokensTransferredMultiAssetsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Xtokens.TransferredMultiAssets')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV66(): boolean {
        return this._chain.getEventHash('Xtokens.TransferredMultiAssets') === '15736a72848dcda33acde4ffd89efcf41166a311cefd45a3ccad9cf54e78a91d'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV66(): {sender: Uint8Array, assets: v66.V3MultiAsset[], fee: v66.V3MultiAsset, dest: v66.V3MultiLocation} {
        assert(this.isV66)
        return this._chain.decodeEvent(this.event)
    }
}
