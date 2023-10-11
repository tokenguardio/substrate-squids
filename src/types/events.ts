import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v900 from './v900'
import * as v1001 from './v1001'
import * as v1201 from './v1201'
import * as v1300 from './v1300'
import * as v1401 from './v1401'
import * as v1502 from './v1502'
import * as v1606 from './v1606'
import * as v1701 from './v1701'
import * as v1802 from './v1802'
import * as v1901 from './v1901'
import * as v2000 from './v2000'
import * as v2100 from './v2100'
import * as v2201 from './v2201'
import * as v2302 from './v2302'
import * as v2403 from './v2403'
import * as v2501 from './v2501'

export class AssetManagerAssetRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetManager.AssetRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1201(): boolean {
        return this._chain.getEventHash('AssetManager.AssetRegistered') === 'd9c2746cd1b0cd3f906013c501fa482e910ad01604d6fd0477080a1d0d730a83'
    }

    get asV1201(): [bigint, v1201.AssetType, v1201.AssetRegistrarMetadata] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New asset with the asset manager is registered
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('AssetManager.AssetRegistered') === 'a4b390a2d9b2399074c4245f34c55a6ea994535e458df5ddffa42dbabcdfbd5f'
    }

    /**
     * New asset with the asset manager is registered
     */
    get asV1300(): {assetId: bigint, asset: v1300.AssetType, metadata: v1300.AssetRegistrarMetadata} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetManagerAssetTypeChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetManager.AssetTypeChanged')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1201(): boolean {
        return this._chain.getEventHash('AssetManager.AssetTypeChanged') === '04091c2f074cda6b26ebe4ef5763e525ef9deeb3d8f6ba2da7c2c35610d4789d'
    }

    get asV1201(): [bigint, v1201.AssetType] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the xcm type mapping for a given asset id
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('AssetManager.AssetTypeChanged') === '374e400d2b4ea9f5d3b638e3602dfe3ed9b4c85b9c86c117b2fe9d45b6bb2fa8'
    }

    /**
     * Changed the xcm type mapping for a given asset id
     */
    get asV1300(): {assetId: bigint, newAssetType: v1300.AssetType} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetManagerForeignAssetDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetManager.ForeignAssetDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Removed all information related to an assetId and destroyed asset
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetDestroyed') === '4a7c12e48a707265b8d79d0a3e8fba78d987f8320d04132f34046bd2a8e2ac1e'
    }

    /**
     * Removed all information related to an assetId and destroyed asset
     */
    get asV1401(): {assetId: bigint, assetType: v1401.AssetType} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Removed all information related to an assetId and destroyed asset
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetDestroyed') === 'fbca6c5e5d8d2d8b41001985f96ba054f4fadb09feb624cf281ef27aadc27c26'
    }

    /**
     * Removed all information related to an assetId and destroyed asset
     */
    get asV2201(): {assetId: bigint, assetType: v2201.AssetType} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Removed all information related to an assetId and destroyed asset
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetDestroyed') === 'f2205c3a4f6b488fd2e716b52d38c4e5753882c65024acdfde008070f42cff13'
    }

    /**
     * Removed all information related to an assetId and destroyed asset
     */
    get asV2302(): {assetId: bigint, assetType: v2302.AssetType} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetManagerForeignAssetRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetManager.ForeignAssetRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New asset with the asset manager is registered
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetRegistered') === 'a4b390a2d9b2399074c4245f34c55a6ea994535e458df5ddffa42dbabcdfbd5f'
    }

    /**
     * New asset with the asset manager is registered
     */
    get asV1401(): {assetId: bigint, asset: v1401.AssetType, metadata: v1401.AssetRegistrarMetadata} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New asset with the asset manager is registered
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetRegistered') === 'c349b87d12f0eb533914d88e1909cc5c4049fa73bd23fb6a4dbcad9500e153e2'
    }

    /**
     * New asset with the asset manager is registered
     */
    get asV2201(): {assetId: bigint, asset: v2201.AssetType, metadata: v2201.AssetRegistrarMetadata} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New asset with the asset manager is registered
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetRegistered') === '970b9569b49ee32a02e8a9da34c2f5f9e6e09b2321e86c7fae5d8d3ffb6bb879'
    }

    /**
     * New asset with the asset manager is registered
     */
    get asV2302(): {assetId: bigint, asset: v2302.AssetType, metadata: v2302.AssetRegistrarMetadata} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetManagerForeignAssetRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetManager.ForeignAssetRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Removed all information related to an assetId
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetRemoved') === '4a7c12e48a707265b8d79d0a3e8fba78d987f8320d04132f34046bd2a8e2ac1e'
    }

    /**
     * Removed all information related to an assetId
     */
    get asV1401(): {assetId: bigint, assetType: v1401.AssetType} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Removed all information related to an assetId
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetRemoved') === 'fbca6c5e5d8d2d8b41001985f96ba054f4fadb09feb624cf281ef27aadc27c26'
    }

    /**
     * Removed all information related to an assetId
     */
    get asV2201(): {assetId: bigint, assetType: v2201.AssetType} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Removed all information related to an assetId
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetRemoved') === 'f2205c3a4f6b488fd2e716b52d38c4e5753882c65024acdfde008070f42cff13'
    }

    /**
     * Removed all information related to an assetId
     */
    get asV2302(): {assetId: bigint, assetType: v2302.AssetType} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetManagerForeignAssetTypeChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetManager.ForeignAssetTypeChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Changed the xcm type mapping for a given asset id
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetTypeChanged') === '374e400d2b4ea9f5d3b638e3602dfe3ed9b4c85b9c86c117b2fe9d45b6bb2fa8'
    }

    /**
     * Changed the xcm type mapping for a given asset id
     */
    get asV1401(): {assetId: bigint, newAssetType: v1401.AssetType} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the xcm type mapping for a given asset id
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetTypeChanged') === 'e7ee62b819268555921dc627b4ef31c596d83dc27d46ebabd0ca75d9343f8b8c'
    }

    /**
     * Changed the xcm type mapping for a given asset id
     */
    get asV2201(): {assetId: bigint, newAssetType: v2201.AssetType} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the xcm type mapping for a given asset id
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('AssetManager.ForeignAssetTypeChanged') === 'a94831e96b1a4436aaada03c17adcb82d4b29b7c5f046e66723e5572be36a627'
    }

    /**
     * Changed the xcm type mapping for a given asset id
     */
    get asV2302(): {assetId: bigint, newAssetType: v2302.AssetType} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetManagerLocalAssetDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetManager.LocalAssetDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Removed all information related to an assetId and destroyed asset
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('AssetManager.LocalAssetDestroyed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * Removed all information related to an assetId and destroyed asset
     */
    get asV1401(): {assetId: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetManagerLocalAssetRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetManager.LocalAssetRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Local asset was created
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('AssetManager.LocalAssetRegistered') === 'fd62e88c9ea5dc8842e0823fab1341577dbecd6032441c5b3e25acb8e12bc858'
    }

    /**
     * Local asset was created
     */
    get asV1401(): {assetId: bigint, creator: Uint8Array, owner: Uint8Array} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetManagerSupportedAssetRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetManager.SupportedAssetRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Supported asset type for fee payment removed
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('AssetManager.SupportedAssetRemoved') === '31b9db30f4219890a48d186903519db1e182733776ef58fc0d96359cae9a1674'
    }

    /**
     * Supported asset type for fee payment removed
     */
    get asV1300(): {assetType: v1300.AssetType} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Supported asset type for fee payment removed
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('AssetManager.SupportedAssetRemoved') === '6112ab134edfb839cb9938f53a87e7851848e0dcbbde94acb835efe8a725a111'
    }

    /**
     * Supported asset type for fee payment removed
     */
    get asV2201(): {assetType: v2201.AssetType} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Supported asset type for fee payment removed
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('AssetManager.SupportedAssetRemoved') === '9df9f743141332d28d19e86204f3c81b974db65ce087d4f0febee34d6223a67d'
    }

    /**
     * Supported asset type for fee payment removed
     */
    get asV2302(): {assetType: v2302.AssetType} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetManagerUnitsPerSecondChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetManager.UnitsPerSecondChanged')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1201(): boolean {
        return this._chain.getEventHash('AssetManager.UnitsPerSecondChanged') === '05ac03bce48e981173bbbf88224a3d909ee5f3b59beedd9cee6ec88e072e80c0'
    }

    get asV1201(): [v1201.AssetType, bigint] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the amount of units we are charging per execution second for a given asset
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('AssetManager.UnitsPerSecondChanged') === '6f945a016fa1354dda472a1d8283c850f742893500097ea765948e3c95150daa'
    }

    /**
     * Changed the amount of units we are charging per execution second for a given asset
     */
    get asV1300(): {assetType: v1300.AssetType, unitsPerSecond: bigint} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the amount of units we are charging per execution second for a given asset
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('AssetManager.UnitsPerSecondChanged') === 'fd44de1fa95ab4bffd6f13c1906110c947c739a64f2881f84056a58226d35dbe'
    }

    /**
     * Changed the amount of units we are charging per execution second for a given asset
     */
    get asV2201(): {assetType: v2201.AssetType, unitsPerSecond: bigint} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the amount of units we are charging per execution second for a given asset
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('AssetManager.UnitsPerSecondChanged') === 'f0eea56fc01ac48cd5e453f12840ac116d3c6a32ee51dd9d67dd2b0c1ed87bb0'
    }

    /**
     * Changed the amount of units we are charging per execution second for a given asset
     */
    get asV2302(): {assetType: v2302.AssetType, unitsPerSecond: bigint} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

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
    get isV2201(): boolean {
        return this._chain.getEventHash('Assets.AccountsDestroyed') === 'a5d06575533459915a8ffae0d8d9eceaed7fe1e8a4c5fe068d1de39f4760ac67'
    }

    /**
     * Accounts were destroyed for given asset.
     */
    get asV2201(): {assetId: bigint, accountsDestroyed: number, accountsRemaining: number} {
        assert(this.isV2201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.ApprovalCancelled') === '1c909afc9b78187ab7dd247b4eb309bd383560ed4eb9a05fba24117453936d6f'
    }

    /**
     * An approval for account `delegate` was cancelled by `owner`.
     */
    get asV1201(): {assetId: bigint, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV1201)
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
    get isV2201(): boolean {
        return this._chain.getEventHash('Assets.ApprovalsDestroyed') === '4163dff444138f5bde96db2221ab99bf76a9c641472c3ed900fd00a16a468571'
    }

    /**
     * Approvals were destroyed for given asset.
     */
    get asV2201(): {assetId: bigint, approvalsDestroyed: number, approvalsRemaining: number} {
        assert(this.isV2201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.ApprovedTransfer') === '6596d037926575491f74014c174637b2396303408b01a12cd3fed65a43155001'
    }

    /**
     * (Additional) funds have been approved for transfer to a destination account.
     */
    get asV1201(): {assetId: bigint, source: Uint8Array, delegate: Uint8Array, amount: bigint} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.AssetFrozen') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * Some asset `asset_id` was frozen.
     */
    get asV1201(): {assetId: bigint} {
        assert(this.isV1201)
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
    get isV2403(): boolean {
        return this._chain.getEventHash('Assets.AssetMinBalanceChanged') === '62dc5a2aad35ea9b274647a895c2fa0e7f91dedb718b62def83df9965dbfe2e1'
    }

    /**
     * The min_balance of an asset has been updated by the asset owner.
     */
    get asV2403(): {assetId: bigint, newMinBalance: bigint} {
        assert(this.isV2403)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.AssetStatusChanged') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * An asset has had its attributes changed by the `Force` origin.
     */
    get asV1201(): {assetId: bigint} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.AssetThawed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * Some asset `asset_id` was thawed.
     */
    get asV1201(): {assetId: bigint} {
        assert(this.isV1201)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Assets.Blocked') === 'a07f176e176af32b351739ea886636ebf9f519994bc0b2ed23bd132216585dae'
    }

    /**
     * Some account `who` was blocked.
     */
    get asV2501(): {assetId: bigint, who: Uint8Array} {
        assert(this.isV2501)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.Burned') === '7b313023dcadc0790714779ac69e85195d0b94fbfc5c5b1c65234ca592e0d3f7'
    }

    /**
     * Some assets were destroyed.
     */
    get asV1201(): {assetId: bigint, owner: Uint8Array, balance: bigint} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.Created') === 'fd62e88c9ea5dc8842e0823fab1341577dbecd6032441c5b3e25acb8e12bc858'
    }

    /**
     * Some asset class was created.
     */
    get asV1201(): {assetId: bigint, creator: Uint8Array, owner: Uint8Array} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.Destroyed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * An asset class was destroyed.
     */
    get asV1201(): {assetId: bigint} {
        assert(this.isV1201)
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
    get isV2201(): boolean {
        return this._chain.getEventHash('Assets.DestructionStarted') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * An asset class is in the process of being destroyed.
     */
    get asV2201(): {assetId: bigint} {
        assert(this.isV2201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.ForceCreated') === 'adc91c9d5229ea6a8721efe274c9a75894b73b14d20a2b4add201bee4d07c152'
    }

    /**
     * Some asset class was force-created.
     */
    get asV1201(): {assetId: bigint, owner: Uint8Array} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.Frozen') === 'a07f176e176af32b351739ea886636ebf9f519994bc0b2ed23bd132216585dae'
    }

    /**
     * Some account `who` was frozen.
     */
    get asV1201(): {assetId: bigint, who: Uint8Array} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.Issued') === '00b4e83fd8a2b78206f9e4f83e5841b01b15461279b6952b593fddd97bfa57f8'
    }

    /**
     * Some assets were issued.
     */
    get asV1201(): {assetId: bigint, owner: Uint8Array, totalSupply: bigint} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were issued.
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('Assets.Issued') === 'f5215492a3461802d8c3f823a3df5eb1a9f55a5200e569d6f979d3f5495ea385'
    }

    /**
     * Some assets were issued.
     */
    get asV2302(): {assetId: bigint, owner: Uint8Array, amount: bigint} {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.MetadataCleared') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * Metadata has been cleared for an asset.
     */
    get asV1201(): {assetId: bigint} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.MetadataSet') === '01ab9e31f40d9a1871985e1d4fa0e5b8324a517e9a5d954999b54e728d81b541'
    }

    /**
     * New metadata has been set for an asset.
     */
    get asV1201(): {assetId: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.OwnerChanged') === 'adc91c9d5229ea6a8721efe274c9a75894b73b14d20a2b4add201bee4d07c152'
    }

    /**
     * The owner changed.
     */
    get asV1201(): {assetId: bigint, owner: Uint8Array} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.TeamChanged') === '6ab760c2b15b579ca9d6cd9a76b6905b2346743442fc92366cd8cecd684c80d4'
    }

    /**
     * The management team changed.
     */
    get asV1201(): {assetId: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.Thawed') === 'a07f176e176af32b351739ea886636ebf9f519994bc0b2ed23bd132216585dae'
    }

    /**
     * Some account `who` was thawed.
     */
    get asV1201(): {assetId: bigint, who: Uint8Array} {
        assert(this.isV1201)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Assets.Touched') === '289ff42e5eb91e326060f0e3e60135b00728501f723e5b9fbe1298f1cf70e074'
    }

    /**
     * Some account `who` was created with a deposit from `depositor`.
     */
    get asV2501(): {assetId: bigint, who: Uint8Array, depositor: Uint8Array} {
        assert(this.isV2501)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.Transferred') === 'f65815f0a2516ce398b9e72fe858b92dc308f7815d5ec2c9ca9344c57874f4c2'
    }

    /**
     * Some assets were transferred.
     */
    get asV1201(): {assetId: bigint, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Assets.TransferredApproved') === '1ef0deb189e1171c90e1ec5a6711de071f3a8d825f25baa3e436ea033402f916'
    }

    /**
     * An `amount` was transferred in its entirety from `owner` to `destination` by
     * the approved `delegate`.
     */
    get asV1201(): {assetId: bigint, owner: Uint8Array, delegate: Uint8Array, destination: Uint8Array, amount: bigint} {
        assert(this.isV1201)
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
     * The amount of eligible authors for the filter to select has been changed.
     */
    get isV900(): boolean {
        return this._chain.getEventHash('AuthorFilter.EligibleUpdated') === '3db3753dcff7ca8b313d91fce9f0cd33b8f6c491f0697e71d850b62d343b9faf'
    }

    /**
     * The amount of eligible authors for the filter to select has been changed.
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The amount of eligible authors for the filter to select has been changed.
     */
    get isV1502(): boolean {
        return this._chain.getEventHash('AuthorFilter.EligibleUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * The amount of eligible authors for the filter to select has been changed.
     */
    get asV1502(): number {
        assert(this.isV1502)
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
     * An AuthorId has been de-registered, and its AccountId mapping removed.
     */
    get isV900(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorDeRegistered') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An AuthorId has been de-registered, and its AccountId mapping removed.
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An NimbusId has been de-registered, and its AccountId mapping removed.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorDeRegistered') === 'c21728b5156f66dcb3edd0992c9a6c22c0541f5d479f1c54a53d7bfd2ff316b6'
    }

    /**
     * An NimbusId has been de-registered, and its AccountId mapping removed.
     */
    get asV1300(): {authorId: Uint8Array} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An NimbusId has been de-registered, and its AccountId mapping removed.
     */
    get isV1502(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorDeRegistered') === '01600cd28f032b3e1af9b5a8b3c909c5e5750a79e8ea61ed75b5ecc086a58532'
    }

    /**
     * An NimbusId has been de-registered, and its AccountId mapping removed.
     */
    get asV1502(): {authorId: Uint8Array, accountId: Uint8Array, keys: Uint8Array} {
        assert(this.isV1502)
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
     * An AuthorId has been registered and mapped to an AccountId.
     */
    get isV900(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorRegistered') === '1bbfbed2a18ed1015b346a5cabe70b9114a6caa07967174382e901a12e1ea17f'
    }

    /**
     * An AuthorId has been registered and mapped to an AccountId.
     */
    get asV900(): [Uint8Array, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A NimbusId has been registered and mapped to an AccountId.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorRegistered') === '6ea502bdcab39103d72469a554a376cbee19381eba6efd4360b7ed2277a5d813'
    }

    /**
     * A NimbusId has been registered and mapped to an AccountId.
     */
    get asV1300(): {authorId: Uint8Array, accountId: Uint8Array} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A NimbusId has been registered and mapped to an AccountId.
     */
    get isV1502(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorRegistered') === '01600cd28f032b3e1af9b5a8b3c909c5e5750a79e8ea61ed75b5ecc086a58532'
    }

    /**
     * A NimbusId has been registered and mapped to an AccountId.
     */
    get asV1502(): {authorId: Uint8Array, accountId: Uint8Array, keys: Uint8Array} {
        assert(this.isV1502)
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
     * An AuthorId has been registered, replacing a previous registration and its mapping.
     */
    get isV900(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorRotated') === '1bbfbed2a18ed1015b346a5cabe70b9114a6caa07967174382e901a12e1ea17f'
    }

    /**
     * An AuthorId has been registered, replacing a previous registration and its mapping.
     */
    get asV900(): [Uint8Array, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An NimbusId has been registered, replacing a previous registration and its mapping.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorRotated') === '6545792cf3bdba7fb6f036144d44f54245c1a9f3e73e31f263fcbedf4209c191'
    }

    /**
     * An NimbusId has been registered, replacing a previous registration and its mapping.
     */
    get asV1300(): {newAuthorId: Uint8Array, accountId: Uint8Array} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An NimbusId has been registered, replacing a previous registration and its mapping.
     */
    get isV1502(): boolean {
        return this._chain.getEventHash('AuthorMapping.AuthorRotated') === '64a8e828eea0863b4313acb9505a72918eca4533d5e170339fe5dd59decd4dda'
    }

    /**
     * An NimbusId has been registered, replacing a previous registration and its mapping.
     */
    get asV1502(): {newAuthorId: Uint8Array, accountId: Uint8Array, newKeys: Uint8Array} {
        assert(this.isV1502)
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
     * An AuthorId has been forcibly deregistered after not being rotated or cleaned up.
     * The reporteing account has been rewarded accordingly.
     */
    get isV900(): boolean {
        return this._chain.getEventHash('AuthorMapping.DefunctAuthorBusted') === '1bbfbed2a18ed1015b346a5cabe70b9114a6caa07967174382e901a12e1ea17f'
    }

    /**
     * An AuthorId has been forcibly deregistered after not being rotated or cleaned up.
     * The reporteing account has been rewarded accordingly.
     */
    get asV900(): [Uint8Array, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An NimbusId has been forcibly deregistered after not being rotated or cleaned up.
     * The reporteing account has been rewarded accordingly.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('AuthorMapping.DefunctAuthorBusted') === '6ea502bdcab39103d72469a554a376cbee19381eba6efd4360b7ed2277a5d813'
    }

    /**
     * An NimbusId has been forcibly deregistered after not being rotated or cleaned up.
     * The reporteing account has been rewarded accordingly.
     */
    get asV1300(): {authorId: Uint8Array, accountId: Uint8Array} {
        assert(this.isV1300)
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
    get isV1606(): boolean {
        return this._chain.getEventHash('AuthorMapping.KeysRegistered') === '1f5c9e2d430e68e8435c42235f4765a6e5ebe7c0adbcd8ee6adc3cb3ae430a5e'
    }

    /**
     * A NimbusId has been registered and mapped to an AccountId.
     */
    get asV1606(): {nimbusId: Uint8Array, accountId: Uint8Array, keys: Uint8Array} {
        assert(this.isV1606)
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
    get isV1606(): boolean {
        return this._chain.getEventHash('AuthorMapping.KeysRemoved') === '1f5c9e2d430e68e8435c42235f4765a6e5ebe7c0adbcd8ee6adc3cb3ae430a5e'
    }

    /**
     * An NimbusId has been de-registered, and its AccountId mapping removed.
     */
    get asV1606(): {nimbusId: Uint8Array, accountId: Uint8Array, keys: Uint8Array} {
        assert(this.isV1606)
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
    get isV1606(): boolean {
        return this._chain.getEventHash('AuthorMapping.KeysRotated') === 'f84365b6f133425576424d220ad7a7e94e2e3aaddd943ca2ef0eec04621fe2ee'
    }

    /**
     * An NimbusId has been registered, replacing a previous registration and its mapping.
     */
    get asV1606(): {newNimbusId: Uint8Array, accountId: Uint8Array, newKeys: Uint8Array} {
        assert(this.isV1606)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
    }

    /**
     * A balance was set by root. \[who, free, reserved\]
     */
    get asV900(): [Uint8Array, bigint, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '3a56bc33dc87c1d425edfb16edf3f26eafed9ed9c0e8e6831221be938919d2bd'
    }

    /**
     * A balance was set by root.
     */
    get asV1201(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '75ce258a2eedf74b36490a9550887771d7c0a07c5c6c0e8c9c9957eb17ff3bd9'
    }

    /**
     * A balance was set by root.
     */
    get asV2501(): {who: Uint8Array, free: bigint} {
        assert(this.isV2501)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Burned') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some amount was burned from an account.
     */
    get asV2501(): {who: Uint8Array, amount: bigint} {
        assert(this.isV2501)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV1201(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss. \[account, balance\]
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '73756cb75a05416db04c153fd4a78048e7662d48c0830e51e080bcd1ca6f540a'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV1201(): {account: Uint8Array, amount: bigint} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * An account was created with some free balance. \[account, free_balance\]
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === 'a773a5c0921f3b97243d311c28ce9bb596c8cc3eacae83e0b616a49c6784a35a'
    }

    /**
     * An account was created with some free balance.
     */
    get asV1201(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV1201)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Frozen') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some balance was frozen.
     */
    get asV2501(): {who: Uint8Array, amount: bigint} {
        assert(this.isV2501)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Issued') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    get asV2501(): {amount: bigint} {
        assert(this.isV2501)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Locked') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some balance was locked.
     */
    get asV2501(): {who: Uint8Array, amount: bigint} {
        assert(this.isV2501)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Minted') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some amount was minted into an account.
     */
    get asV2501(): {who: Uint8Array, amount: bigint} {
        assert(this.isV2501)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Rescinded') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    get asV2501(): {amount: bigint} {
        assert(this.isV2501)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === 'aed9aad67fe073fb38bb01741f1200b1f5f3aa52006f4669a1004d648cdb6e5d'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     * \[from, to, balance, destination_status\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint, v900.BalanceStatus] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === 'daa0192df4c75cafc52e847a38b276d53a6330bf4083906b38c0d1eb5166d98a'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV1201(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v1201.BalanceStatus} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV1201(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1201)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Restored') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some amount was restored into an account.
     */
    get asV2501(): {who: Uint8Array, amount: bigint} {
        assert(this.isV2501)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior). \[who,
     * amount_slashed\]
     */
    get asV1001(): [Uint8Array, bigint] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV1201(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1201)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Suspended') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    get asV2501(): {who: Uint8Array, amount: bigint} {
        assert(this.isV2501)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Thawed') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some balance was thawed.
     */
    get asV2501(): {who: Uint8Array, amount: bigint} {
        assert(this.isV2501)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
    }

    /**
     * Transfer succeeded. \[from, to, value\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '23222c59f2992c12387568241620899d2d399ab9027595daca8255637f62ece3'
    }

    /**
     * Transfer succeeded.
     */
    get asV1201(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV1201)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Unlocked') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some balance was unlocked.
     */
    get asV2501(): {who: Uint8Array, amount: bigint} {
        assert(this.isV2501)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV1201(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1201)
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
    get isV2501(): boolean {
        return this._chain.getEventHash('Balances.Upgraded') === 'e92c9f723dde51134e2f444b9c6f3d649ad16574a792290c80e904dda6240391'
    }

    /**
     * An account was upgraded.
     */
    get asV2501(): {who: Uint8Array} {
        assert(this.isV2501)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
     */
    get asV1001(): [Uint8Array, bigint] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV1201(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1201)
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

    get isV1201(): boolean {
        return this._chain.getEventHash('BaseFee.BaseFeeOverflow') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV1201(): null {
        assert(this.isV1201)
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

    get isV1201(): boolean {
        return this._chain.getEventHash('BaseFee.IsActive') === 'ab01a9c748aa3cbaea79085d7fc05c23416224e2cbe4d301feea3f8143c67da0'
    }

    get asV1201(): boolean {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    get isV1802(): boolean {
        return this._chain.getEventHash('BaseFee.IsActive') === '3add098d9e97883d6727546805c06a15ec2e3d4dd29382f81a6061d644cf503d'
    }

    get asV1802(): {isActive: boolean} {
        assert(this.isV1802)
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

    get isV1201(): boolean {
        return this._chain.getEventHash('BaseFee.NewBaseFeePerGas') === '6d9ead7bacbcc31865a36167f18b025b998f3de12411a9e26649a9a646df87fb'
    }

    get asV1201(): bigint {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    get isV1802(): boolean {
        return this._chain.getEventHash('BaseFee.NewBaseFeePerGas') === 'df74b0f066943b24c635a19ba2763478ab00f9c0373d74c9a771b1a1047ff6d6'
    }

    get asV1802(): {fee: bigint} {
        assert(this.isV1802)
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

    get isV1201(): boolean {
        return this._chain.getEventHash('BaseFee.NewElasticity') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    get asV1201(): number {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    get isV1802(): boolean {
        return this._chain.getEventHash('BaseFee.NewElasticity') === 'efcd4cd6d4fde4342db62d270df85a88b1c153af50159f9bc1ba1ce1133f2524'
    }

    get asV1802(): {elasticity: number} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}

export class ConvictionVotingDelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ConvictionVoting.Delegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('ConvictionVoting.Delegated') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
    }

    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    get asV2403(): [Uint8Array, Uint8Array] {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ConvictionVotingUndelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ConvictionVoting.Undelegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('ConvictionVoting.Undelegated') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    get asV2403(): Uint8Array {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilCollectiveApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilCollective.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     * \[proposal_hash\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CouncilCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A motion was approved by the required threshold.
     * \[proposal_hash\]
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('CouncilCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV1201(): {proposalHash: Uint8Array} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilCollectiveClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilCollective.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     * \[proposal_hash, yes, no\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CouncilCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     * \[proposal_hash, yes, no\]
     */
    get asV900(): [Uint8Array, number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('CouncilCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV1201(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilCollectiveDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilCollective.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     * \[proposal_hash\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CouncilCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A motion was not approved by the required threshold.
     * \[proposal_hash\]
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('CouncilCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV1201(): {proposalHash: Uint8Array} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilCollectiveExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilCollective.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CouncilCollective.Executed') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV900(): [Uint8Array, v900.Type_43] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('CouncilCollective.Executed') === '985881284cd2d985dd366d839f2f998c085d1947cd3d3888f28b2b95e28572f1'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV1201(): {proposalHash: Uint8Array, result: v1201.Type_41} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('CouncilCollective.Executed') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV1300(): {proposalHash: Uint8Array, result: v1300.Type_41} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('CouncilCollective.Executed') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV1401(): {proposalHash: Uint8Array, result: v1401.Type_42} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('CouncilCollective.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV1606(): {proposalHash: Uint8Array, result: v1606.Type_47} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('CouncilCollective.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV2000(): {proposalHash: Uint8Array, result: v2000.Type_50} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('CouncilCollective.Executed') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV2501(): {proposalHash: Uint8Array, result: v2501.Type_52} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilCollectiveMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilCollective.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CouncilCollective.MemberExecuted') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV900(): [Uint8Array, v900.Type_43] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('CouncilCollective.MemberExecuted') === '985881284cd2d985dd366d839f2f998c085d1947cd3d3888f28b2b95e28572f1'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV1201(): {proposalHash: Uint8Array, result: v1201.Type_41} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('CouncilCollective.MemberExecuted') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV1300(): {proposalHash: Uint8Array, result: v1300.Type_41} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('CouncilCollective.MemberExecuted') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV1401(): {proposalHash: Uint8Array, result: v1401.Type_42} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('CouncilCollective.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV1606(): {proposalHash: Uint8Array, result: v1606.Type_47} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('CouncilCollective.MemberExecuted') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV2000(): {proposalHash: Uint8Array, result: v2000.Type_50} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('CouncilCollective.MemberExecuted') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV2501(): {proposalHash: Uint8Array, result: v2501.Type_52} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilCollectiveProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilCollective.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     * \[account, proposal_index, proposal_hash, threshold\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CouncilCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     * \[account, proposal_index, proposal_hash, threshold\]
     */
    get asV900(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('CouncilCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV1201(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilCollectiveVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CouncilCollective.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     * \[account, proposal_hash, voted, yes, no\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CouncilCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     * \[account, proposal_hash, voted, yes, no\]
     */
    get asV900(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('CouncilCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV1201(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanRewardsInitialPaymentMadeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CrowdloanRewards.InitialPaymentMade')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The initial payment of InitializationPayment % was paid
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CrowdloanRewards.InitialPaymentMade') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * The initial payment of InitializationPayment % was paid
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanRewardsInitializedAccountWithNotEnoughContributionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CrowdloanRewards.InitializedAccountWithNotEnoughContribution')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * When initializing the reward vec an already initialized account was found
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CrowdloanRewards.InitializedAccountWithNotEnoughContribution') === '94c7acb99405cf689458dd9417563881691fd8afaaf1f33a2e47791cb24680fb'
    }

    /**
     * When initializing the reward vec an already initialized account was found
     */
    get asV900(): [Uint8Array, (Uint8Array | undefined), bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanRewardsInitializedAlreadyInitializedAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CrowdloanRewards.InitializedAlreadyInitializedAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * When initializing the reward vec an already initialized account was found
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CrowdloanRewards.InitializedAlreadyInitializedAccount') === '94c7acb99405cf689458dd9417563881691fd8afaaf1f33a2e47791cb24680fb'
    }

    /**
     * When initializing the reward vec an already initialized account was found
     */
    get asV900(): [Uint8Array, (Uint8Array | undefined), bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanRewardsNativeIdentityAssociatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CrowdloanRewards.NativeIdentityAssociated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone has proven they made a contribution and associated a native identity with it.
     * Data is the relay account,  native account and the total amount of _rewards_ that will be paid
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CrowdloanRewards.NativeIdentityAssociated') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
    }

    /**
     * Someone has proven they made a contribution and associated a native identity with it.
     * Data is the relay account,  native account and the total amount of _rewards_ that will be paid
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanRewardsRewardAddressUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CrowdloanRewards.RewardAddressUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A contributor has updated the reward address.
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CrowdloanRewards.RewardAddressUpdated') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
    }

    /**
     * A contributor has updated the reward address.
     */
    get asV900(): [Uint8Array, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanRewardsRewardsPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CrowdloanRewards.RewardsPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A contributor has claimed some rewards.
     * Data is the account getting paid and the amount of rewards paid.
     */
    get isV900(): boolean {
        return this._chain.getEventHash('CrowdloanRewards.RewardsPaid') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * A contributor has claimed some rewards.
     * Data is the account getting paid and the amount of rewards paid.
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === 'ce1ecc6cb7bde7a0e967ed0e6caff9002b8e335404bc1e51403dc21d44028613'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV1201(): [Uint8Array, v1201.V2Outcome] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '155c7cce0948b8cb240d1401bb772a72b24567aa52618e9a4aaa84271c380044'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV1300(): [Uint8Array, v1300.V2Outcome] {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '0a5524dcf48d575bf19533e72499c1b6f08167113160e1bb190028315c81787f'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV2302(): [Uint8Array, v2302.V3Outcome] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get asV1201(): Uint8Array {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get asV2302(): Uint8Array {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV1201(): Uint8Array {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV2302(): Uint8Array {
        assert(this.isV2302)
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
     * A proposal \[hash\] has been blacklisted permanently.
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A proposal \[hash\] has been blacklisted permanently.
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get asV1201(): {proposalHash: Uint8Array} {
        assert(this.isV1201)
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
     * A referendum has been cancelled. \[ref_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A referendum has been cancelled. \[ref_index\]
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has been cancelled.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV1201(): {refIndex: number} {
        assert(this.isV1201)
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
     * An account has delegated their vote to another account. \[who, target\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
    }

    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    get asV900(): [Uint8Array, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has delegated their vote to another account.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'a5f0a4ae2379f580959d081ec916ca7592c4b768e59e32d64284c9f31a88a622'
    }

    /**
     * An account has delegated their vote to another account.
     */
    get asV1201(): {who: Uint8Array, target: Uint8Array} {
        assert(this.isV1201)
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
     * A proposal has been enacted. \[ref_index, result\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === 'c83a84e76e348dd28ec0b3d255b3b6614da57c66bcdca25e179abc516b1d0b15'
    }

    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    get asV900(): [number, v900.Type_43] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '0077901b6de880646efe44eef6ddcdc431a84c0fe153cc9f8e6e66c9354cbb13'
    }

    /**
     * A proposal has been enacted.
     */
    get asV1201(): {refIndex: number, result: v1201.Type_41} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '1f8afbb40842c0eb231c4c0456dea31d665cbfc12f23138aebe104164e4f18dc'
    }

    /**
     * A proposal has been enacted.
     */
    get asV1300(): {refIndex: number, result: v1300.Type_41} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '270512fa9651c9fa2eb584a439cab409bb758634bd42c08ad5fc0e9bbed943b0'
    }

    /**
     * A proposal has been enacted.
     */
    get asV1401(): {refIndex: number, result: v1401.Type_42} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '957b797337eaa1f370b65a94f7685042cc04730ba165349e248cfdde80b53c25'
    }

    /**
     * A proposal has been enacted.
     */
    get asV1606(): {refIndex: number, result: v1606.Type_47} {
        assert(this.isV1606)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An external proposal has been tabled.
     */
    get asV900(): null {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a proposal or a referendum has been cleared.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Democracy.MetadataCleared') === '5973f98e3dfb93077820ad77490dd9fe605110b75a8f006f1565898a599055ab'
    }

    /**
     * Metadata for a proposal or a referendum has been cleared.
     */
    get asV2403(): {owner: v2403.MetadataOwner, hash: Uint8Array} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a proposal or a referendum has been set.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Democracy.MetadataSet') === '5973f98e3dfb93077820ad77490dd9fe605110b75a8f006f1565898a599055ab'
    }

    /**
     * Metadata for a proposal or a referendum has been set.
     */
    get asV2403(): {owner: v2403.MetadataOwner, hash: Uint8Array} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyMetadataTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.MetadataTransferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been transferred to new owner.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Democracy.MetadataTransferred') === '6a30d674b0ce2457e6cff0b5493fa843349fa6b51c1641c1ac02b3f35ebbb927'
    }

    /**
     * Metadata has been transferred to new owner.
     */
    get asV2403(): {prevOwner: v2403.MetadataOwner, owner: v2403.MetadataOwner, hash: Uint8Array} {
        assert(this.isV2403)
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
     * A proposal has been rejected by referendum. \[ref_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A proposal has been rejected by referendum. \[ref_index\]
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV1201(): {refIndex: number} {
        assert(this.isV1201)
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
     * A proposal has been approved by referendum. \[ref_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A proposal has been approved by referendum. \[ref_index\]
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been approved by referendum.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asV1201(): {refIndex: number} {
        assert(this.isV1201)
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
     * \[proposal_hash, ref_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     * \[proposal_hash, ref_index\]
     */
    get asV900(): [Uint8Array, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get asV1201(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV1201)
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
     * \[proposal_hash, ref_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     * \[proposal_hash, ref_index\]
     */
    get asV900(): [Uint8Array, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get asV1201(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV1201)
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
     * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
    }

    /**
     * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'd47be2e4a05481fd42e21a0e80292e7b68789de4198c4087194b44ca5b857093'
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get asV1201(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
        assert(this.isV1201)
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
     * \[proposal_hash, provider, deposit, reaper\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === 'c1f551cd38e3880870dfafd43056cf3e144a85c870b0b513c2a042c7e4634bf7'
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     * \[proposal_hash, provider, deposit, reaper\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === '79380123f072831563a9a29ef7dd7d312f309e2ba7fb0a62b701bc6410ad30b7'
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get asV1201(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
        assert(this.isV1201)
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
     * \[proposal_hash, provider, deposit\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     * \[proposal_hash, provider, deposit\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === '84e66e8024f25586e9c223173463c55e83f2ff96130417e7f93374803337e024'
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get asV1201(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
        assert(this.isV1201)
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
    get isV1802(): boolean {
        return this._chain.getEventHash('Democracy.ProposalCanceled') === '4229a060ed682a59f5b96a0a1d18ae4a471b42fbbe5beff110f3dbb41e7d7224'
    }

    /**
     * A proposal got canceled.
     */
    get asV1802(): {propIndex: number} {
        assert(this.isV1802)
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
     * A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     * A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    get asV900(): [number, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion has been proposed by a public account.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asV1201(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV1201)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
    }

    /**
     * An account has secconded a proposal
     */
    get asV1001(): [Uint8Array, number] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has secconded a proposal
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '64da6ce35c02cb0c27b0e16f55fa6a5bafc454011188894a92a86fae6c04c2aa'
    }

    /**
     * An account has secconded a proposal
     */
    get asV1201(): {who: Uint8Array, proposalIndex: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has secconded a proposal
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === 'd5bfb0eab019443031d55a3928d16d36f1028c536942730854c88b38b6f54e9e'
    }

    /**
     * An account has secconded a proposal
     */
    get asV1300(): {seconder: Uint8Array, propIndex: number} {
        assert(this.isV1300)
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
     * A referendum has begun. \[ref_index, threshold\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
    }

    /**
     * A referendum has begun. \[ref_index, threshold\]
     */
    get asV900(): [number, v900.VoteThreshold] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has begun.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asV1201(): {refIndex: number, threshold: v1201.VoteThreshold} {
        assert(this.isV1201)
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
     * A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
     * depositors\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === 'a02fb718124f3ad2168551f865aebb4f81eb1cfe14c9fb743a86ef04f294e29b'
    }

    /**
     * A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
     * depositors\]
     */
    get asV900(): [number, bigint, Uint8Array[]] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '2b043f58d8d5c231c7840a8ddeda0d0c9db1b6f9985329aaaac42d4661be939e'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV1201(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV2000(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV2000)
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
     * An \[account\] has cancelled a previous delegation operation.
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '041e3c99c7373645533b0a38437f03393c46e1c811b17689bc2c51c0b6784c09'
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get asV1201(): {account: Uint8Array} {
        assert(this.isV1201)
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
     * An external proposal has been vetoed. \[who, proposal_hash, until\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '95cf9b87b15132da37c09ac81915a5ac479053ca6b2dd58b232e1f0275d86691'
    }

    /**
     * An external proposal has been vetoed. \[who, proposal_hash, until\]
     */
    get asV900(): [Uint8Array, Uint8Array, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An external proposal has been vetoed.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '004227946b48c50c2c99871feca5b057cf68e183b57a668645b68e13f7977cf6'
    }

    /**
     * An external proposal has been vetoed.
     */
    get asV1201(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
        assert(this.isV1201)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '604da654023263e7aea05372e1eb33e38c4a6f4e84e160804c7879f6e1564022'
    }

    /**
     * An account has voted in a referendum
     */
    get asV1001(): [Uint8Array, number, v1001.AccountVote] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has voted in a referendum
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === 'f368480dd5ebfa5a0e2f0613bc234e6c02a38fc86dfc2ece938dee4f5a0483d1'
    }

    /**
     * An account has voted in a referendum
     */
    get asV1201(): {who: Uint8Array, refIndex: number, vote: v1201.AccountVote} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has voted in a referendum
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '0eaf760dcfa41dbcca324addedbf718eb01fd2ef951a16ed7fe4bb420e2ebf8a'
    }

    /**
     * An account has voted in a referendum
     */
    get asV1300(): {voter: Uint8Array, refIndex: number, vote: v1300.AccountVote} {
        assert(this.isV1300)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === 'f660a1eb74571095e7cab99beb471c0ab4687ebb9afcd9f8734fc316dd9f477d'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV1201(): [Uint8Array, v1201.V2Outcome] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '286143d78cae88e1dcd7f8fca6da4dcb49ebc3ba61ad473eec7ff13812f3fd56'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV1300(): [Uint8Array, v1300.V2Outcome] {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '9b6c90aca74067a591eda76a227e61ce66cd6597483f828a039aba267c0d21a9'
    }

    /**
     * Downward message executed with the given outcome.
     */
    get asV1701(): {messageId: Uint8Array, outcome: v1701.V2Outcome} {
        assert(this.isV1701)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === 'bbdc5e15442f2bee7199707f9da66674b3ad89835c84687a406e183c7d31121e'
    }

    /**
     * Downward message executed with the given outcome.
     */
    get asV2302(): {messageId: Uint8Array, outcome: v2302.V3Outcome} {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('DmpQueue.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get asV1201(): Uint8Array {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is invalid XCM.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('DmpQueue.InvalidFormat') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * Downward message is invalid XCM.
     */
    get asV1701(): {messageId: Uint8Array} {
        assert(this.isV1701)
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
    get isV2302(): boolean {
        return this._chain.getEventHash('DmpQueue.MaxMessagesExhausted') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * The maximum number of downward messages was.
     */
    get asV2302(): {messageId: Uint8Array} {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     * \[ id, index, required \]
     */
    get asV1201(): [Uint8Array, bigint, bigint] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ffa192c80e10233d155345fc4cc34bc357a97a6465c78ccf6a14b02ee5b8c21f'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get asV1701(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: bigint} {
        assert(this.isV1701)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ad9cb107597768cf938dffc06f4759d95e30b4d686ee33c209c5a44145df0c73'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get asV1901(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: v1901.Weight} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '48bcfc366f324064903ddb05910b4d640e5483bb8166484d427fea6ec6716e87'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get asV2000(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: v2000.Weight} {
        assert(this.isV2000)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
    }

    /**
     * Downward message from the overweight queue was executed.
     * \[ index, used \]
     */
    get asV1201(): [bigint, bigint] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === '7deec7d9ba4a81157571b321671d50b393890bd802f27d9b3ba2609ffa497713'
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get asV1701(): {overweightIndex: bigint, weightUsed: bigint} {
        assert(this.isV1701)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'f16ac3f6b10f93f6d4efd4dde1eba6cc73e06d27c2e2ec66eec4923e16cbfc6f'
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get asV1901(): {overweightIndex: bigint, weightUsed: v1901.Weight} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'cbdd24f98e134531ca4f33efcf4821b24f3245563e8787df9ab5a61e3def65fe'
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get asV2000(): {overweightIndex: bigint, weightUsed: v2000.Weight} {
        assert(this.isV2000)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV1201(): Uint8Array {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is unsupported version of XCM.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * Downward message is unsupported version of XCM.
     */
    get asV1701(): {messageId: Uint8Array} {
        assert(this.isV1701)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
    }

    /**
     * The weight limit for handling downward messages was reached.
     * \[ id, remaining, required \]
     */
    get asV1201(): [Uint8Array, bigint, bigint] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'dcf12831e69a1760af0584247b404096aa4ce1c77c7b3caae95d831bf4afa0b2'
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get asV1701(): {messageId: Uint8Array, remainingWeight: bigint, requiredWeight: bigint} {
        assert(this.isV1701)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'b9a55b745575cc47de66be392bf446a9558a5b3e9201c5b37598517251cff44f'
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get asV1901(): {messageId: Uint8Array, remainingWeight: v1901.Weight, requiredWeight: v1901.Weight} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'e2c32a245af45a14cf9180adc1d112198df722bb27ee76b5ea163138bb102466'
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get asV2000(): {messageId: Uint8Array, remainingWeight: v2000.Weight, requiredWeight: v2000.Weight} {
        assert(this.isV2000)
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
    get isV900(): boolean {
        return this._chain.getEventHash('EVM.BalanceDeposit') === '2db6d782782fa5d2d4b27234086860d584d4aa644389252d23c0c08ca9567b0f'
    }

    /**
     * A deposit has been made at a given address. \[sender, address, value\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
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
    get isV900(): boolean {
        return this._chain.getEventHash('EVM.BalanceWithdraw') === '2db6d782782fa5d2d4b27234086860d584d4aa644389252d23c0c08ca9567b0f'
    }

    /**
     * A withdrawal has been made from a given address. \[sender, address, value\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
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
    get isV900(): boolean {
        return this._chain.getEventHash('EVM.Created') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * A contract has been created at given \[address\].
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A contract has been created at given address.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('EVM.Created') === 'c5bed4ffae488fefd76eb807a683ba2d9cb6726ded1d162edcacf2126be4665f'
    }

    /**
     * A contract has been created at given address.
     */
    get asV1802(): {address: Uint8Array} {
        assert(this.isV1802)
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
    get isV900(): boolean {
        return this._chain.getEventHash('EVM.CreatedFailed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * A \[contract\] was attempted to be created, but the execution failed.
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A contract was attempted to be created, but the execution failed.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('EVM.CreatedFailed') === 'c5bed4ffae488fefd76eb807a683ba2d9cb6726ded1d162edcacf2126be4665f'
    }

    /**
     * A contract was attempted to be created, but the execution failed.
     */
    get asV1802(): {address: Uint8Array} {
        assert(this.isV1802)
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
    get isV900(): boolean {
        return this._chain.getEventHash('EVM.Executed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * A \[contract\] has been executed successfully with states applied.
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A contract has been executed successfully with states applied.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('EVM.Executed') === 'c5bed4ffae488fefd76eb807a683ba2d9cb6726ded1d162edcacf2126be4665f'
    }

    /**
     * A contract has been executed successfully with states applied.
     */
    get asV1802(): {address: Uint8Array} {
        assert(this.isV1802)
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
    get isV900(): boolean {
        return this._chain.getEventHash('EVM.ExecutedFailed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A contract has been executed with errors. States are reverted with only gas fees applied.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('EVM.ExecutedFailed') === 'c5bed4ffae488fefd76eb807a683ba2d9cb6726ded1d162edcacf2126be4665f'
    }

    /**
     * A contract has been executed with errors. States are reverted with only gas fees applied.
     */
    get asV1802(): {address: Uint8Array} {
        assert(this.isV1802)
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
    get isV900(): boolean {
        return this._chain.getEventHash('EVM.Log') === '9d15dce6e6d818eeb73a868dd136a22667fbfdd27463a338b39cabae62aa4a12'
    }

    /**
     * Ethereum events from contracts.
     */
    get asV900(): v900.Log {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Ethereum events from contracts.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('EVM.Log') === '4edddb5632dcffc943bfbdb42201f95b9c2ffa1df042e526a7c54a39f099056a'
    }

    /**
     * Ethereum events from contracts.
     */
    get asV1802(): {log: v1802.Log} {
        assert(this.isV1802)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '0c7eb5ef81fb6e87c05b96ed25f52c62fffc067198343642f01289fbb0011fce'
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV900(): [Uint8Array, Uint8Array, Uint8Array, v900.ExitReason] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '4548a1e2cc89d3c4c1d89f3020a6fb505032fdfd5236d5749c897815fb7db5de'
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV1201(): [Uint8Array, Uint8Array, Uint8Array, v1201.ExitReason] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '19a41316cbc97760af789cb1da772172d6a9f09521ee0e5e8f18125c1db318df'
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV1401(): [Uint8Array, Uint8Array, Uint8Array, v1401.ExitReason] {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '42c632fb85f0ab54f0811a41be276501476d6d3e1e0169c6a6db6afdd63e7893'
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV1701(): [Uint8Array, Uint8Array, Uint8Array, v1701.ExitReason] {
        assert(this.isV1701)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '85a0045758a84a2cd09a563b9e9fc2194e6054385c70290178792fb71cd20021'
    }

    /**
     * An ethereum transaction was successfully executed.
     */
    get asV1802(): {from: Uint8Array, to: Uint8Array, transactionHash: Uint8Array, exitReason: v1802.ExitReason} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '4da35f3b1cb63c6084839486f6cc44465f31d4dbf24abce9ef5d05b899d9309e'
    }

    /**
     * An ethereum transaction was successfully executed.
     */
    get asV2403(): {from: Uint8Array, to: Uint8Array, transactionHash: Uint8Array, exitReason: v2403.ExitReason, extraData: Uint8Array} {
        assert(this.isV2403)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * A name was cleared, and the given balance returned. \[who, deposit\]
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '5920a63f526b6f30a0a0fe27aabc69ce85f483879a675014dc1525735f2dd71d'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asV1201(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * A name was removed and the given balance slashed. \[who, deposit\]
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '5920a63f526b6f30a0a0fe27aabc69ce85f483879a675014dc1525735f2dd71d'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asV1201(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * A name was set or reset (which will remove all judgements). \[who\]
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === 'e92c9f723dde51134e2f444b9c6f3d649ad16574a792290c80e904dda6240391'
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get asV1201(): {who: Uint8Array} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
    }

    /**
     * A judgement was given by a registrar. \[target, registrar_index\]
     */
    get asV900(): [Uint8Array, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was given by a registrar.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '6a000c960469f8cb2927d0911ab50570831bdef144ff0a8fc0e6ca5e5002bcbd'
    }

    /**
     * A judgement was given by a registrar.
     */
    get asV1201(): {target: Uint8Array, registrarIndex: number} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
    }

    /**
     * A judgement was asked from a registrar. \[who, registrar_index\]
     */
    get asV900(): [Uint8Array, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was asked from a registrar.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'f1c377566b6650dc61a08ef81515602cdaf9268fa9cca46424c6c54e45824777'
    }

    /**
     * A judgement was asked from a registrar.
     */
    get asV1201(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
    }

    /**
     * A judgement request was retracted. \[who, registrar_index\]
     */
    get asV900(): [Uint8Array, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement request was retracted.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'f1c377566b6650dc61a08ef81515602cdaf9268fa9cca46424c6c54e45824777'
    }

    /**
     * A judgement request was retracted.
     */
    get asV1201(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A registrar was added. \[registrar_index\]
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registrar was added.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
    }

    /**
     * A registrar was added.
     */
    get asV1201(): {registrarIndex: number} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === 'da7dc1cffb3950148c7a62503aabcc9be874bdb4d3f249e696af6a9de646ad91'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get asV1201(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     * \[sub, main, deposit\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'da7dc1cffb3950148c7a62503aabcc9be874bdb4d3f249e696af6a9de646ad91'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asV1201(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV1201)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account. \[sub, main, deposit\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'da7dc1cffb3950148c7a62503aabcc9be874bdb4d3f249e696af6a9de646ad91'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asV1201(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsAccountsDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.AccountsDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Accounts were destroyed for given asset.
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('LocalAssets.AccountsDestroyed') === 'a5d06575533459915a8ffae0d8d9eceaed7fe1e8a4c5fe068d1de39f4760ac67'
    }

    /**
     * Accounts were destroyed for given asset.
     */
    get asV2201(): {assetId: bigint, accountsDestroyed: number, accountsRemaining: number} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsApprovalCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.ApprovalCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An approval for account `delegate` was cancelled by `owner`.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.ApprovalCancelled') === '1c909afc9b78187ab7dd247b4eb309bd383560ed4eb9a05fba24117453936d6f'
    }

    /**
     * An approval for account `delegate` was cancelled by `owner`.
     */
    get asV1401(): {assetId: bigint, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsApprovalsDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.ApprovalsDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Approvals were destroyed for given asset.
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('LocalAssets.ApprovalsDestroyed') === '4163dff444138f5bde96db2221ab99bf76a9c641472c3ed900fd00a16a468571'
    }

    /**
     * Approvals were destroyed for given asset.
     */
    get asV2201(): {assetId: bigint, approvalsDestroyed: number, approvalsRemaining: number} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsApprovedTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.ApprovedTransfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * (Additional) funds have been approved for transfer to a destination account.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.ApprovedTransfer') === '6596d037926575491f74014c174637b2396303408b01a12cd3fed65a43155001'
    }

    /**
     * (Additional) funds have been approved for transfer to a destination account.
     */
    get asV1401(): {assetId: bigint, source: Uint8Array, delegate: Uint8Array, amount: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsAssetFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.AssetFrozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset `asset_id` was frozen.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.AssetFrozen') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * Some asset `asset_id` was frozen.
     */
    get asV1401(): {assetId: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsAssetMinBalanceChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.AssetMinBalanceChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The min_balance of an asset has been updated by the asset owner.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('LocalAssets.AssetMinBalanceChanged') === '62dc5a2aad35ea9b274647a895c2fa0e7f91dedb718b62def83df9965dbfe2e1'
    }

    /**
     * The min_balance of an asset has been updated by the asset owner.
     */
    get asV2403(): {assetId: bigint, newMinBalance: bigint} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsAssetStatusChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.AssetStatusChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset has had its attributes changed by the `Force` origin.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.AssetStatusChanged') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * An asset has had its attributes changed by the `Force` origin.
     */
    get asV1401(): {assetId: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsAssetThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.AssetThawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset `asset_id` was thawed.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.AssetThawed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * Some asset `asset_id` was thawed.
     */
    get asV1401(): {assetId: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsBlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.Blocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some account `who` was blocked.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('LocalAssets.Blocked') === 'a07f176e176af32b351739ea886636ebf9f519994bc0b2ed23bd132216585dae'
    }

    /**
     * Some account `who` was blocked.
     */
    get asV2501(): {assetId: bigint, who: Uint8Array} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets were destroyed.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.Burned') === '7b313023dcadc0790714779ac69e85195d0b94fbfc5c5b1c65234ca592e0d3f7'
    }

    /**
     * Some assets were destroyed.
     */
    get asV1401(): {assetId: bigint, owner: Uint8Array, balance: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset class was created.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.Created') === 'fd62e88c9ea5dc8842e0823fab1341577dbecd6032441c5b3e25acb8e12bc858'
    }

    /**
     * Some asset class was created.
     */
    get asV1401(): {assetId: bigint, creator: Uint8Array, owner: Uint8Array} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.Destroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset class was destroyed.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.Destroyed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * An asset class was destroyed.
     */
    get asV1401(): {assetId: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsDestructionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.DestructionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset class is in the process of being destroyed.
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('LocalAssets.DestructionStarted') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * An asset class is in the process of being destroyed.
     */
    get asV2201(): {assetId: bigint} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsForceCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.ForceCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset class was force-created.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.ForceCreated') === 'adc91c9d5229ea6a8721efe274c9a75894b73b14d20a2b4add201bee4d07c152'
    }

    /**
     * Some asset class was force-created.
     */
    get asV1401(): {assetId: bigint, owner: Uint8Array} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.Frozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some account `who` was frozen.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.Frozen') === 'a07f176e176af32b351739ea886636ebf9f519994bc0b2ed23bd132216585dae'
    }

    /**
     * Some account `who` was frozen.
     */
    get asV1401(): {assetId: bigint, who: Uint8Array} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsIssuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.Issued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets were issued.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.Issued') === '00b4e83fd8a2b78206f9e4f83e5841b01b15461279b6952b593fddd97bfa57f8'
    }

    /**
     * Some assets were issued.
     */
    get asV1401(): {assetId: bigint, owner: Uint8Array, totalSupply: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were issued.
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('LocalAssets.Issued') === 'f5215492a3461802d8c3f823a3df5eb1a9f55a5200e569d6f979d3f5495ea385'
    }

    /**
     * Some assets were issued.
     */
    get asV2302(): {assetId: bigint, owner: Uint8Array, amount: bigint} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been cleared for an asset.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.MetadataCleared') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
    }

    /**
     * Metadata has been cleared for an asset.
     */
    get asV1401(): {assetId: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New metadata has been set for an asset.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.MetadataSet') === '01ab9e31f40d9a1871985e1d4fa0e5b8324a517e9a5d954999b54e728d81b541'
    }

    /**
     * New metadata has been set for an asset.
     */
    get asV1401(): {assetId: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsOwnerChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.OwnerChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The owner changed.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.OwnerChanged') === 'adc91c9d5229ea6a8721efe274c9a75894b73b14d20a2b4add201bee4d07c152'
    }

    /**
     * The owner changed.
     */
    get asV1401(): {assetId: bigint, owner: Uint8Array} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsTeamChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.TeamChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The management team changed.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.TeamChanged') === '6ab760c2b15b579ca9d6cd9a76b6905b2346743442fc92366cd8cecd684c80d4'
    }

    /**
     * The management team changed.
     */
    get asV1401(): {assetId: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.Thawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some account `who` was thawed.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.Thawed') === 'a07f176e176af32b351739ea886636ebf9f519994bc0b2ed23bd132216585dae'
    }

    /**
     * Some account `who` was thawed.
     */
    get asV1401(): {assetId: bigint, who: Uint8Array} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsTouchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.Touched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some account `who` was created with a deposit from `depositor`.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('LocalAssets.Touched') === '289ff42e5eb91e326060f0e3e60135b00728501f723e5b9fbe1298f1cf70e074'
    }

    /**
     * Some account `who` was created with a deposit from `depositor`.
     */
    get asV2501(): {assetId: bigint, who: Uint8Array, depositor: Uint8Array} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets were transferred.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.Transferred') === 'f65815f0a2516ce398b9e72fe858b92dc308f7815d5ec2c9ca9344c57874f4c2'
    }

    /**
     * Some assets were transferred.
     */
    get asV1401(): {assetId: bigint, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class LocalAssetsTransferredApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'LocalAssets.TransferredApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An `amount` was transferred in its entirety from `owner` to `destination` by
     * the approved `delegate`.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('LocalAssets.TransferredApproved') === '1ef0deb189e1171c90e1ec5a6711de071f3a8d825f25baa3e436ea033402f916'
    }

    /**
     * An `amount` was transferred in its entirety from `owner` to `destination` by
     * the approved `delegate`.
     */
    get asV1401(): {assetId: bigint, owner: Uint8Array, delegate: Uint8Array, destination: Uint8Array, amount: bigint} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class MaintenanceModeEnteredMaintenanceModeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MaintenanceMode.EnteredMaintenanceMode')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The chain was put into Maintenance Mode
     */
    get isV900(): boolean {
        return this._chain.getEventHash('MaintenanceMode.EnteredMaintenanceMode') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The chain was put into Maintenance Mode
     */
    get asV900(): null {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }
}

export class MaintenanceModeFailedToResumeIdleXcmExecutionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MaintenanceMode.FailedToResumeIdleXcmExecution')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The call to resume on_idle XCM execution failed with inner error
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('MaintenanceMode.FailedToResumeIdleXcmExecution') === 'f0795f0edc834fef1d1d136e23a9bc25ad726ccd4fb74b76f24e2a19c5ba7195'
    }

    /**
     * The call to resume on_idle XCM execution failed with inner error
     */
    get asV1401(): {error: v1401.DispatchError} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The call to resume on_idle XCM execution failed with inner error
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('MaintenanceMode.FailedToResumeIdleXcmExecution') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
    }

    /**
     * The call to resume on_idle XCM execution failed with inner error
     */
    get asV1606(): {error: v1606.DispatchError} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The call to resume on_idle XCM execution failed with inner error
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('MaintenanceMode.FailedToResumeIdleXcmExecution') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * The call to resume on_idle XCM execution failed with inner error
     */
    get asV2000(): {error: v2000.DispatchError} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The call to resume on_idle XCM execution failed with inner error
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('MaintenanceMode.FailedToResumeIdleXcmExecution') === '4564a5412ce55535234d019dbd1d2999c5a9d6f452a565385d0c43e85d0dbf0b'
    }

    /**
     * The call to resume on_idle XCM execution failed with inner error
     */
    get asV2501(): {error: v2501.DispatchError} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class MaintenanceModeFailedToSuspendIdleXcmExecutionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MaintenanceMode.FailedToSuspendIdleXcmExecution')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The call to suspend on_idle XCM execution failed with inner error
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('MaintenanceMode.FailedToSuspendIdleXcmExecution') === 'f0795f0edc834fef1d1d136e23a9bc25ad726ccd4fb74b76f24e2a19c5ba7195'
    }

    /**
     * The call to suspend on_idle XCM execution failed with inner error
     */
    get asV1401(): {error: v1401.DispatchError} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The call to suspend on_idle XCM execution failed with inner error
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('MaintenanceMode.FailedToSuspendIdleXcmExecution') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
    }

    /**
     * The call to suspend on_idle XCM execution failed with inner error
     */
    get asV1606(): {error: v1606.DispatchError} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The call to suspend on_idle XCM execution failed with inner error
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('MaintenanceMode.FailedToSuspendIdleXcmExecution') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * The call to suspend on_idle XCM execution failed with inner error
     */
    get asV2000(): {error: v2000.DispatchError} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The call to suspend on_idle XCM execution failed with inner error
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('MaintenanceMode.FailedToSuspendIdleXcmExecution') === '4564a5412ce55535234d019dbd1d2999c5a9d6f452a565385d0c43e85d0dbf0b'
    }

    /**
     * The call to suspend on_idle XCM execution failed with inner error
     */
    get asV2501(): {error: v2501.DispatchError} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class MaintenanceModeNormalOperationResumedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MaintenanceMode.NormalOperationResumed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The chain returned to its normal operating state
     */
    get isV900(): boolean {
        return this._chain.getEventHash('MaintenanceMode.NormalOperationResumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The chain returned to its normal operating state
     */
    get asV900(): null {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }
}

export class MigrationsFailedToResumeIdleXcmExecutionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Migrations.FailedToResumeIdleXcmExecution')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * XCM execution resume failed with inner error
     */
    get isV2100(): boolean {
        return this._chain.getEventHash('Migrations.FailedToResumeIdleXcmExecution') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * XCM execution resume failed with inner error
     */
    get asV2100(): {error: v2100.DispatchError} {
        assert(this.isV2100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * XCM execution resume failed with inner error
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('Migrations.FailedToResumeIdleXcmExecution') === '4564a5412ce55535234d019dbd1d2999c5a9d6f452a565385d0c43e85d0dbf0b'
    }

    /**
     * XCM execution resume failed with inner error
     */
    get asV2501(): {error: v2501.DispatchError} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class MigrationsFailedToSuspendIdleXcmExecutionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Migrations.FailedToSuspendIdleXcmExecution')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * XCM execution suspension failed with inner error
     */
    get isV2100(): boolean {
        return this._chain.getEventHash('Migrations.FailedToSuspendIdleXcmExecution') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * XCM execution suspension failed with inner error
     */
    get asV2100(): {error: v2100.DispatchError} {
        assert(this.isV2100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * XCM execution suspension failed with inner error
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('Migrations.FailedToSuspendIdleXcmExecution') === '4564a5412ce55535234d019dbd1d2999c5a9d6f452a565385d0c43e85d0dbf0b'
    }

    /**
     * XCM execution suspension failed with inner error
     */
    get asV2501(): {error: v2501.DispatchError} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class MigrationsMigrationCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Migrations.MigrationCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV900(): boolean {
        return this._chain.getEventHash('Migrations.MigrationCompleted') === '4039bd26ff27fd7dffafcf296bc10d47d815c50428350d19bfd152c9a19aa3c6'
    }

    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Migration completed
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Migrations.MigrationCompleted') === 'ef45715d261b0bfd4a1e8d7a80328030c5b84f12fd2bffb141338b4ff07bc082'
    }

    /**
     * Migration completed
     */
    get asV1300(): {migrationName: Uint8Array, consumedWeight: bigint} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Migration completed
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('Migrations.MigrationCompleted') === '5bddc782be704f5fd72710caa096c18ab8fe96344d8c572d19a80a02e80461a0'
    }

    /**
     * Migration completed
     */
    get asV1901(): {migrationName: Uint8Array, consumedWeight: v1901.Weight} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Migration completed
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Migrations.MigrationCompleted') === '63491788a451a65ed1d0857f54cbdb8849f65c5492a582d46b78fee35e9e9a87'
    }

    /**
     * Migration completed
     */
    get asV2000(): {migrationName: Uint8Array, consumedWeight: v2000.Weight} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }
}

export class MigrationsMigrationStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Migrations.MigrationStarted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV900(): boolean {
        return this._chain.getEventHash('Migrations.MigrationStarted') === '2f3c83e89fe8252155817328a8c403c0bd3d9afea4de66b5b6e2ad04b3011a7a'
    }

    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Migration started
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Migrations.MigrationStarted') === 'a45c5d0a5bb09b2f0b82d4a8505763dd91f2c1b63d2be62ce1040948e6df4f64'
    }

    /**
     * Migration started
     */
    get asV1300(): {migrationName: Uint8Array} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class MigrationsRuntimeUpgradeCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Migrations.RuntimeUpgradeCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV900(): boolean {
        return this._chain.getEventHash('Migrations.RuntimeUpgradeCompleted') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    get asV900(): bigint {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Runtime upgrade completed
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Migrations.RuntimeUpgradeCompleted') === '16fb16c3908da583d22fe511e4d8363e8bb3515a5198e5ceff8750a50e22f5d7'
    }

    /**
     * Runtime upgrade completed
     */
    get asV1300(): {weight: bigint} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Runtime upgrade completed
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('Migrations.RuntimeUpgradeCompleted') === '6c4351adb52799db006db050a2010387b3376061e505cbc1f6c988f029926dab'
    }

    /**
     * Runtime upgrade completed
     */
    get asV1901(): {weight: v1901.Weight} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Runtime upgrade completed
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Migrations.RuntimeUpgradeCompleted') === '3e549eb5af4a3d5da33e9387d4917dfed2ee36447c15f07b2c351ee3f89bddc1'
    }

    /**
     * Runtime upgrade completed
     */
    get asV2000(): {weight: v2000.Weight} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }
}

export class MigrationsRuntimeUpgradeStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Migrations.RuntimeUpgradeStarted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV900(): boolean {
        return this._chain.getEventHash('Migrations.RuntimeUpgradeStarted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV900(): null {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }
}

export class MoonbeamOrbitersOrbiterJoinCollatorPoolEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MoonbeamOrbiters.OrbiterJoinCollatorPool')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An orbiter join a collator pool
     */
    get isV1502(): boolean {
        return this._chain.getEventHash('MoonbeamOrbiters.OrbiterJoinCollatorPool') === '1e1f96292f928d45686ddff0ee6209e712660e7447c71a14f41faf3bb1ac4442'
    }

    /**
     * An orbiter join a collator pool
     */
    get asV1502(): {collator: Uint8Array, orbiter: Uint8Array} {
        assert(this.isV1502)
        return this._chain.decodeEvent(this.event)
    }
}

export class MoonbeamOrbitersOrbiterLeaveCollatorPoolEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MoonbeamOrbiters.OrbiterLeaveCollatorPool')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An orbiter leave a collator pool
     */
    get isV1502(): boolean {
        return this._chain.getEventHash('MoonbeamOrbiters.OrbiterLeaveCollatorPool') === '1e1f96292f928d45686ddff0ee6209e712660e7447c71a14f41faf3bb1ac4442'
    }

    /**
     * An orbiter leave a collator pool
     */
    get asV1502(): {collator: Uint8Array, orbiter: Uint8Array} {
        assert(this.isV1502)
        return this._chain.decodeEvent(this.event)
    }
}

export class MoonbeamOrbitersOrbiterRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MoonbeamOrbiters.OrbiterRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An orbiter has registered
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('MoonbeamOrbiters.OrbiterRegistered') === 'dc9aa434c49e387a6a1722f8eb8e62ce69a5a8f0e3bd29f9a04952a2cfa0eb7b'
    }

    /**
     * An orbiter has registered
     */
    get asV1606(): {account: Uint8Array, deposit: bigint} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }
}

export class MoonbeamOrbitersOrbiterRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MoonbeamOrbiters.OrbiterRewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Paid the orbiter account the balance as liquid rewards.
     */
    get isV1502(): boolean {
        return this._chain.getEventHash('MoonbeamOrbiters.OrbiterRewarded') === '44a7364018ebad92746e4ca7c7c23d24d5da43cda2e63a90c665b522994ef1e2'
    }

    /**
     * Paid the orbiter account the balance as liquid rewards.
     */
    get asV1502(): {account: Uint8Array, rewards: bigint} {
        assert(this.isV1502)
        return this._chain.decodeEvent(this.event)
    }
}

export class MoonbeamOrbitersOrbiterRotationEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MoonbeamOrbiters.OrbiterRotation')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1502(): boolean {
        return this._chain.getEventHash('MoonbeamOrbiters.OrbiterRotation') === '119fe327a2ad1d2d83cb84504b77e7669cfa7d4299e61e5d9254bfba953e5287'
    }

    get asV1502(): {collator: Uint8Array, oldOrbiter: (Uint8Array | undefined), newOrbiter: (Uint8Array | undefined)} {
        assert(this.isV1502)
        return this._chain.decodeEvent(this.event)
    }
}

export class MoonbeamOrbitersOrbiterUnregisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MoonbeamOrbiters.OrbiterUnregistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An orbiter has unregistered
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('MoonbeamOrbiters.OrbiterUnregistered') === '041e3c99c7373645533b0a38437f03393c46e1c811b17689bc2c51c0b6784c09'
    }

    /**
     * An orbiter has unregistered
     */
    get asV1606(): {account: Uint8Array} {
        assert(this.isV1606)
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
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === 'c3a6a03bd006d748864182a77a7fb023dccfc09b9a4c9e3f78af7b64bdb8239c'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asV2403(): {approving: Uint8Array, timepoint: v2403.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV2403)
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
     * A multisig operation has been cancelled.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === 'ebb1c345e0282422dc6d826e807127c81116ee2e5b4a4e0cda747aac9f10658c'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asV2403(): {cancelling: Uint8Array, timepoint: v2403.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV2403)
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
     * A multisig operation has been executed.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '5e0805b2226d60a1a0573af58aaeecd31f54400dbf487fea359ff382aee0ae2d'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV2403(): {approving: Uint8Array, timepoint: v2403.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v2403.Type_51} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '2e5392a68ee1d87d94d7d46a0cbb17e0339227126dfd0824bba9606f90169b99'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV2501(): {approving: Uint8Array, timepoint: v2501.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v2501.Type_52} {
        assert(this.isV2501)
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
     * A new multisig operation has begun.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === '9d0064659661d79bb7e7c20a099b5c4a60b8773d73945e7a7638c3805f14dd07'
    }

    /**
     * A new multisig operation has begun.
     */
    get asV2403(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class OpenTechCommitteeCollectiveApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OpenTechCommitteeCollective.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('OpenTechCommitteeCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV2403(): {proposalHash: Uint8Array} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class OpenTechCommitteeCollectiveClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OpenTechCommitteeCollective.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('OpenTechCommitteeCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV2403(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class OpenTechCommitteeCollectiveDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OpenTechCommitteeCollective.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('OpenTechCommitteeCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV2403(): {proposalHash: Uint8Array} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class OpenTechCommitteeCollectiveExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OpenTechCommitteeCollective.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('OpenTechCommitteeCollective.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV2403(): {proposalHash: Uint8Array, result: v2403.Type_51} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('OpenTechCommitteeCollective.Executed') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV2501(): {proposalHash: Uint8Array, result: v2501.Type_52} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class OpenTechCommitteeCollectiveMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OpenTechCommitteeCollective.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('OpenTechCommitteeCollective.MemberExecuted') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV2403(): {proposalHash: Uint8Array, result: v2403.Type_51} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('OpenTechCommitteeCollective.MemberExecuted') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV2501(): {proposalHash: Uint8Array, result: v2501.Type_52} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class OpenTechCommitteeCollectiveProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OpenTechCommitteeCollective.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('OpenTechCommitteeCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV2403(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class OpenTechCommitteeCollectiveVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OpenTechCommitteeCollective.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('OpenTechCommitteeCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV2403(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV2403)
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
    get isV1901(): boolean {
        return this._chain.getEventHash('ParachainStaking.AutoCompoundSet') === '242ca78b3edcf0d7f258a89ed70894e5e1a365c82ac5ec16967ed7fc7c207e04'
    }

    /**
     * Auto-compounding reward percent was set for a delegation.
     */
    get asV1901(): {candidate: Uint8Array, delegator: Uint8Array, value: number} {
        assert(this.isV1901)
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
     * Set blocks per round [current_round, first_block, old, new, new_per_round_inflation]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.BlocksPerRoundSet') === 'e4152021d1ee1ef256174dc42d66e062f74a1c9931e09d42043918794fe8e45e'
    }

    /**
     * Set blocks per round [current_round, first_block, old, new, new_per_round_inflation]
     */
    get asV900(): [number, number, number, number, number, number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Set blocks per round
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.BlocksPerRoundSet') === '74d8f3bfd5f29c3879a0a39bcc98bbbf2126b8bd8f84484d4798554409c999b3'
    }

    /**
     * Set blocks per round
     */
    get asV1300(): {currentRound: number, firstBlock: number, old: number, new: number, newPerRoundInflationMin: number, newPerRoundInflationIdeal: number, newPerRoundInflationMax: number} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledCandidateBondLess') === 'ac4a2cb6202f38a91408c4962e9d89e2aeee44f41b48ff7d3814f6b6b50364f2'
    }

    /**
     * Candidate, Amount, Round at which could be executed
     */
    get asV1001(): [Uint8Array, bigint, number] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Cancelled request to decrease candidate's bond.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledCandidateBondLess') === 'f826fb60e5cc9d34125ed0b42fb06baac1550bbedddd7d4fe1aafed0d01a816c'
    }

    /**
     * Cancelled request to decrease candidate's bond.
     */
    get asV1300(): {candidate: Uint8Array, amount: bigint, executeRound: number} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledCandidateExit') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * Candidate
     */
    get asV1001(): Uint8Array {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Cancelled request to leave the set of candidates.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledCandidateExit') === '961106341022f16157715692b34ae57a6aa577d1f0cd80aa5e255bb45911c3ab'
    }

    /**
     * Cancelled request to leave the set of candidates.
     */
    get asV1300(): {candidate: Uint8Array} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === '10ce9d3adb4a51c8b0f63cdbfba9117b990ab80118d4d67f6744b8fb925619ba'
    }

    /**
     * Delegator, Cancelled Request
     */
    get asV1001(): [Uint8Array, v1001.DelegationRequest] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Cancelled request to change an existing delegation.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === 'c4fd492a56054a2ca2fe05b2147d56d8973374ab7f6854934b00562294c7003e'
    }

    /**
     * Cancelled request to change an existing delegation.
     */
    get asV1300(): {delegator: Uint8Array, cancelledRequest: v1300.DelegationRequest} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Cancelled request to change an existing delegation.
     */
    get isV1502(): boolean {
        return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === 'b7062032765ec2fe3af0b75de7733b9e8f539ab6ae9345a55f2c3d42c556b5e9'
    }

    /**
     * Cancelled request to change an existing delegation.
     */
    get asV1502(): {delegator: Uint8Array, cancelledRequest: v1502.CancelledScheduledRequest, collator: Uint8Array} {
        assert(this.isV1502)
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
     * Round Online, Candidate
     */
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBackOnline') === '2c4b427c85c14124b733c4b45f6cbb10b5c350a45cd3602a0c8d079a17a2aa0c'
    }

    /**
     * Round Online, Candidate
     */
    get asV1001(): [number, Uint8Array] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Candidate
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBackOnline') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * Candidate
     */
    get asV1201(): Uint8Array {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Candidate rejoins the set of collator candidates.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBackOnline') === '961106341022f16157715692b34ae57a6aa577d1f0cd80aa5e255bb45911c3ab'
    }

    /**
     * Candidate rejoins the set of collator candidates.
     */
    get asV1300(): {candidate: Uint8Array} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondLessRequested') === 'ac4a2cb6202f38a91408c4962e9d89e2aeee44f41b48ff7d3814f6b6b50364f2'
    }

    /**
     * Candidate, Amount To Decrease, Round at which request can be executed by caller
     */
    get asV1001(): [Uint8Array, bigint, number] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Сandidate requested to decrease a self bond.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondLessRequested') === '4361ab9ea706e9a2538ccae733bf65539092a17967e92e26af1aba7282c8d94b'
    }

    /**
     * Сandidate requested to decrease a self bond.
     */
    get asV1300(): {candidate: Uint8Array, amountToDecrease: bigint, executeRound: number} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedLess') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
    }

    /**
     * Candidate, Amount, New Bond
     */
    get asV1001(): [Uint8Array, bigint, bigint] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Сandidate has decreased a self bond.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedLess') === '03199d60c293c383f981694ba4310b187ed4a6b79fcc52e6fbccc691153b8f28'
    }

    /**
     * Сandidate has decreased a self bond.
     */
    get asV1300(): {candidate: Uint8Array, amount: bigint, newBond: bigint} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedMore') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
    }

    /**
     * Candidate, Amount, New Bond Total
     */
    get asV1001(): [Uint8Array, bigint, bigint] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Сandidate has increased a self bond.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateBondedMore') === 'd6e6bcd7c6de9403e85285e3685e6774d7d1d129d84c7cfe9a4806c5ff5a4e54'
    }

    /**
     * Сandidate has increased a self bond.
     */
    get asV1300(): {candidate: Uint8Array, amount: bigint, newTotalBond: bigint} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateLeft') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
    }

    /**
     * Ex-Candidate, Amount Unlocked, New Total Amt Locked
     */
    get asV1001(): [Uint8Array, bigint, bigint] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Candidate has left the set of candidates.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateLeft') === '39a5d795682d6a8426e0ee9f0ed61cb5d0d803a9c4303d42f2db829df56877b2'
    }

    /**
     * Candidate has left the set of candidates.
     */
    get asV1300(): {exCandidate: Uint8Array, unlockedAmount: bigint, newTotalAmtLocked: bigint} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateScheduledExit') === '663b8932716ea7b8bc0b8c9546ce1b3b1745381159b677646ac8c8bac33b2668'
    }

    /**
     * Round At Which Exit Is Allowed, Candidate, Scheduled Exit
     */
    get asV1001(): [number, Uint8Array, number] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Сandidate has requested to leave the set of candidates.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateScheduledExit') === 'f98c7404cb56a879fe28697e0f638920835a442bbb5c3d557d8c1267174c17e6'
    }

    /**
     * Сandidate has requested to leave the set of candidates.
     */
    get asV1300(): {exitAllowedRound: number, candidate: Uint8Array, scheduledExit: number} {
        assert(this.isV1300)
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
     * Round Offline, Candidate
     */
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateWentOffline') === '2c4b427c85c14124b733c4b45f6cbb10b5c350a45cd3602a0c8d079a17a2aa0c'
    }

    /**
     * Round Offline, Candidate
     */
    get asV1001(): [number, Uint8Array] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Candidate
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateWentOffline') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * Candidate
     */
    get asV1201(): Uint8Array {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Candidate temporarily leave the set of collator candidates without unbonding.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CandidateWentOffline') === '961106341022f16157715692b34ae57a6aa577d1f0cd80aa5e255bb45911c3ab'
    }

    /**
     * Candidate temporarily leave the set of collator candidates without unbonding.
     */
    get asV1300(): {candidate: Uint8Array} {
        assert(this.isV1300)
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

    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorBackOnline') === '2c4b427c85c14124b733c4b45f6cbb10b5c350a45cd3602a0c8d079a17a2aa0c'
    }

    get asV900(): [number, Uint8Array] {
        assert(this.isV900)
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
     * Collator Account, Old Bond, New Bond
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorBondedLess') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
    }

    /**
     * Collator Account, Old Bond, New Bond
     */
    get asV900(): [Uint8Array, bigint, bigint] {
        assert(this.isV900)
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
     * Collator Account, Old Bond, New Bond
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorBondedMore') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
    }

    /**
     * Collator Account, Old Bond, New Bond
     */
    get asV900(): [Uint8Array, bigint, bigint] {
        assert(this.isV900)
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
     * Round, Collator Account, Total Exposed Amount (includes all nominations)
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorChosen') === '1a09639c5ef974a46276b0a553389f518b01ef6c4056a298ff48c6d5bea36cd0'
    }

    /**
     * Round, Collator Account, Total Exposed Amount (includes all nominations)
     */
    get asV900(): [number, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Candidate selected for collators. Total Exposed Amount includes all delegations.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorChosen') === '2d748454279886b47219db9a8d2221a2144a27e25f21632b9439d8042ebf381d'
    }

    /**
     * Candidate selected for collators. Total Exposed Amount includes all delegations.
     */
    get asV1300(): {round: number, collatorAccount: Uint8Array, totalExposedAmount: bigint} {
        assert(this.isV1300)
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
     * Set collator commission to this value [old, new]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorCommissionSet') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * Set collator commission to this value [old, new]
     */
    get asV900(): [number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Set collator commission to this value.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorCommissionSet') === '2a46248fcf922d799638b5954d60e33df4d7dd9113650c71660a937cd4b5613d'
    }

    /**
     * Set collator commission to this value.
     */
    get asV1300(): {old: number, new: number} {
        assert(this.isV1300)
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
     * Account, Amount Unlocked, New Total Amt Locked
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorLeft') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
    }

    /**
     * Account, Amount Unlocked, New Total Amt Locked
     */
    get asV900(): [Uint8Array, bigint, bigint] {
        assert(this.isV900)
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
     * Round, Collator Account, Scheduled Exit
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorScheduledExit') === '663b8932716ea7b8bc0b8c9546ce1b3b1745381159b677646ac8c8bac33b2668'
    }

    /**
     * Round, Collator Account, Scheduled Exit
     */
    get asV900(): [number, Uint8Array, number] {
        assert(this.isV900)
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

    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.CollatorWentOffline') === '2c4b427c85c14124b733c4b45f6cbb10b5c350a45cd3602a0c8d079a17a2aa0c'
    }

    get asV900(): [number, Uint8Array] {
        assert(this.isV900)
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
    get isV1901(): boolean {
        return this._chain.getEventHash('ParachainStaking.Compounded') === '8266cbb073e59a0e3396d5560489030a068acf3b9e5df48c17dfbe42dc02e748'
    }

    /**
     * Compounded a portion of rewards towards the delegation.
     */
    get asV1901(): {candidate: Uint8Array, delegator: Uint8Array, amount: bigint} {
        assert(this.isV1901)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.Delegation') === '9e88e3dd4dec21ca4744b0264c96a88bfef8fa4f3a42c495ba697dcf51165507'
    }

    /**
     * Delegator, Amount Locked, Candidate, Delegator Position with New Total Counted if in Top
     */
    get asV1001(): [Uint8Array, bigint, Uint8Array, v1001.DelegatorAdded] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New delegation (increase of the existing one).
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.Delegation') === 'a85b3e0f4dad63b1b710d554a6b0a8aa64b90a755bcae7ea3f4b677b36e5df82'
    }

    /**
     * New delegation (increase of the existing one).
     */
    get asV1300(): {delegator: Uint8Array, lockedAmount: bigint, candidate: Uint8Array, delegatorPosition: v1300.DelegatorAdded} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New delegation (increase of the existing one).
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('ParachainStaking.Delegation') === 'b79250d65573f20264ea546d6964696800161f34e3e18c9e5f5cc68ab741883d'
    }

    /**
     * New delegation (increase of the existing one).
     */
    get asV1901(): {delegator: Uint8Array, lockedAmount: bigint, candidate: Uint8Array, delegatorPosition: v1901.DelegatorAdded, autoCompound: number} {
        assert(this.isV1901)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationDecreaseScheduled') === 'a918429239c3ed37475e76d0b5f5fe6547a17eadd96b52edd66569cd38ac85d2'
    }

    /**
     * Delegator, Candidate, Amount to be decreased, Round at which can be executed
     */
    get asV1001(): [Uint8Array, Uint8Array, bigint, number] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegator requested to decrease a bond for the collator candidate.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationDecreaseScheduled') === '4a512adac6eb25ce552eb3d9c5ec842a7eb36c65e9b6f6be5248c3c779bbd6a1'
    }

    /**
     * Delegator requested to decrease a bond for the collator candidate.
     */
    get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, amountToDecrease: bigint, executeRound: number} {
        assert(this.isV1300)
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

    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationDecreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3'
    }

    get asV1001(): [Uint8Array, Uint8Array, bigint, boolean] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationDecreased') === '8ae2ca952b0b00ca6619c82b53d155a37de0be62eb9e8c32f4dad72b695e010b'
    }

    get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, amount: bigint, inTop: boolean} {
        assert(this.isV1300)
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

    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationIncreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3'
    }

    get asV1001(): [Uint8Array, Uint8Array, bigint, boolean] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationIncreased') === '8ae2ca952b0b00ca6619c82b53d155a37de0be62eb9e8c32f4dad72b695e010b'
    }

    get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, amount: bigint, inTop: boolean} {
        assert(this.isV1300)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationKicked') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
    }

    /**
     * Delegator, Candidate, Amount Unstaked
     */
    get asV1201(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegation kicked.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationKicked') === '013eacc8d6813b22ecdad778ecfffcc25ea1f31117d857d64978c177696e8697'
    }

    /**
     * Delegation kicked.
     */
    get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationRevocationScheduled') === 'bbea00779607bea9b95ebd7a287ed32c7d72f1f2bb8708886348847d588e9f37'
    }

    /**
     * Round, Delegator, Candidate, Scheduled Exit
     */
    get asV1001(): [number, Uint8Array, Uint8Array, number] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegator requested to revoke delegation.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationRevocationScheduled') === '504dce1a7e6548c2fe88285273d66693871c06cdc63a027b95932059e6db449a'
    }

    /**
     * Delegator requested to revoke delegation.
     */
    get asV1300(): {round: number, delegator: Uint8Array, candidate: Uint8Array, scheduledExit: number} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationRevoked') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
    }

    /**
     * Delegator, Candidate, Amount Unstaked
     */
    get asV1001(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegation revoked.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegationRevoked') === '013eacc8d6813b22ecdad778ecfffcc25ea1f31117d857d64978c177696e8697'
    }

    /**
     * Delegation revoked.
     */
    get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainStakingDelegatorDueRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainStaking.DelegatorDueReward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Delegator, Collator, Due reward (as per counted delegation for collator)
     */
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorDueReward') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
    }

    /**
     * Delegator, Collator, Due reward (as per counted delegation for collator)
     */
    get asV1001(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1001)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorExitCancelled') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * Delegator
     */
    get asV1001(): Uint8Array {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Cancelled a pending request to exit the set of delegators.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorExitCancelled') === '6086e3ac2db66bcfb387faf1ca70ba1e85d2ef2facd21fe4ce5eeec4ea090cc6'
    }

    /**
     * Cancelled a pending request to exit the set of delegators.
     */
    get asV1300(): {delegator: Uint8Array} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorExitScheduled') === '663b8932716ea7b8bc0b8c9546ce1b3b1745381159b677646ac8c8bac33b2668'
    }

    /**
     * Round, Delegator, Scheduled Exit
     */
    get asV1001(): [number, Uint8Array, number] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegator requested to leave the set of delegators.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorExitScheduled') === '2e87cf1aa10c55d653ba3bde63d7d074ca36798d161d30b514c1e57fd090338c'
    }

    /**
     * Delegator requested to leave the set of delegators.
     */
    get asV1300(): {round: number, delegator: Uint8Array, scheduledExit: number} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeft') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * Delegator, Amount Unstaked
     */
    get asV1001(): [Uint8Array, bigint] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegator has left the set of delegators.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeft') === '77f204dee4c5a51e392aac1d070198e23c536d0b97569fee0484578613cd8777'
    }

    /**
     * Delegator has left the set of delegators.
     */
    get asV1300(): {delegator: Uint8Array, unstakedAmount: bigint} {
        assert(this.isV1300)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeftCandidate') === 'c5569fad693da6ab49df69c2cc3a1767b0c18bfc1f206847e0946659f6cd24ef'
    }

    /**
     * Delegator, Candidate, Amount Unstaked, New Total Amt Staked for Candidate
     */
    get asV1001(): [Uint8Array, Uint8Array, bigint, bigint] {
        assert(this.isV1001)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Delegation from candidate state has been remove.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.DelegatorLeftCandidate') === 'f72ae455b6ae66e6fabad54fadb0ae26f7136099a377372b74890536d4007422'
    }

    /**
     * Delegation from candidate state has been remove.
     */
    get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint, totalCandidateStaked: bigint} {
        assert(this.isV1300)
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
     * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.InflationSet') === '1ce78cca34ae2c08e45f267ebfc3e35706c619bb5f5726881e139f64ff94402e'
    }

    /**
     * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
     */
    get asV900(): [number, number, number, number, number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.InflationSet') === '6eae1c9cc0a52424f3a2724c2e3727bd3861cd6d631a605d47134df51d2a275a'
    }

    /**
     * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
     */
    get asV1300(): {annualMin: number, annualIdeal: number, annualMax: number, roundMin: number, roundIdeal: number, roundMax: number} {
        assert(this.isV1300)
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
     * Account, Amount Locked, New Total Amt Locked
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.JoinedCollatorCandidates') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
    }

    /**
     * Account, Amount Locked, New Total Amt Locked
     */
    get asV900(): [Uint8Array, bigint, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Account joined the set of collator candidates.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.JoinedCollatorCandidates') === '227a8d2310a3cd3b98057acb86b906dcde376e61a13f5a50db8589a31b218c17'
    }

    /**
     * Account joined the set of collator candidates.
     */
    get asV1300(): {account: Uint8Array, amountLocked: bigint, newTotalAmtLocked: bigint} {
        assert(this.isV1300)
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
     * Starting Block, Round, Number of Collators Selected, Total Balance
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.NewRound') === '40ffda4d99fbb38b23cc20386a7f622d64120f24ccc70b9f85ce7612cd87c3b7'
    }

    /**
     * Starting Block, Round, Number of Collators Selected, Total Balance
     */
    get asV900(): [number, number, number, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Started new round.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.NewRound') === '36b479d535ff0b4066a6ca7641a4dba5e090be428fc6b6e9fe8fec13d953fcfb'
    }

    /**
     * Started new round.
     */
    get asV1300(): {startingBlock: number, round: number, selectedCollatorsNumber: number, totalBalance: bigint} {
        assert(this.isV1300)
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
     * Nominator, Amount Locked, Collator, Nominator Position with New Total Counted if in Top
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.Nomination') === '9e88e3dd4dec21ca4744b0264c96a88bfef8fa4f3a42c495ba697dcf51165507'
    }

    /**
     * Nominator, Amount Locked, Collator, Nominator Position with New Total Counted if in Top
     */
    get asV900(): [Uint8Array, bigint, Uint8Array, v900.NominatorAdded] {
        assert(this.isV900)
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

    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominationDecreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3'
    }

    get asV900(): [Uint8Array, Uint8Array, bigint, boolean] {
        assert(this.isV900)
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

    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominationIncreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3'
    }

    get asV900(): [Uint8Array, Uint8Array, bigint, boolean] {
        assert(this.isV900)
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
     * Round, Nominator, Collator, Scheduled Exit
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominationRevocationScheduled') === 'bbea00779607bea9b95ebd7a287ed32c7d72f1f2bb8708886348847d588e9f37'
    }

    /**
     * Round, Nominator, Collator, Scheduled Exit
     */
    get asV900(): [number, Uint8Array, Uint8Array, number] {
        assert(this.isV900)
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
     * Round, Nominator, Scheduled Exit
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominatorExitScheduled') === '663b8932716ea7b8bc0b8c9546ce1b3b1745381159b677646ac8c8bac33b2668'
    }

    /**
     * Round, Nominator, Scheduled Exit
     */
    get asV900(): [number, Uint8Array, number] {
        assert(this.isV900)
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
     * Nominator, Amount Unstaked
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominatorLeft') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * Nominator, Amount Unstaked
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
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
     * Nominator, Collator, Amount Unstaked, New Total Amt Staked for Collator
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.NominatorLeftCollator') === 'c5569fad693da6ab49df69c2cc3a1767b0c18bfc1f206847e0946659f6cd24ef'
    }

    /**
     * Nominator, Collator, Amount Unstaked, New Total Amt Staked for Collator
     */
    get asV900(): [Uint8Array, Uint8Array, bigint, bigint] {
        assert(this.isV900)
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
     * Account (re)set for parachain bond treasury [old, new]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.ParachainBondAccountSet') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
    }

    /**
     * Account (re)set for parachain bond treasury [old, new]
     */
    get asV900(): [Uint8Array, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Account (re)set for parachain bond treasury.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.ParachainBondAccountSet') === '391b7a792248e7221ffbf77c01942251d2928a4e2b37c8103704237e0d5f69b6'
    }

    /**
     * Account (re)set for parachain bond treasury.
     */
    get asV1300(): {old: Uint8Array, new: Uint8Array} {
        assert(this.isV1300)
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
     * Percent of inflation reserved for parachain bond (re)set [old, new]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.ParachainBondReservePercentSet') === 'd2cc88fb598c6a1f724a0f2f04633626baef451eecc351a9d5092f82e6c46465'
    }

    /**
     * Percent of inflation reserved for parachain bond (re)set [old, new]
     */
    get asV900(): [number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Percent of inflation reserved for parachain bond (re)set.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.ParachainBondReservePercentSet') === '4416290d0d279f778bdd022e996767b16d74caaec023f9380514b1862c75b357'
    }

    /**
     * Percent of inflation reserved for parachain bond (re)set.
     */
    get asV1300(): {old: number, new: number} {
        assert(this.isV1300)
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
     * Transferred to account which holds funds reserved for parachain bond
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.ReservedForParachainBond') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * Transferred to account which holds funds reserved for parachain bond
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred to account which holds funds reserved for parachain bond.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.ReservedForParachainBond') === 'f78c82b8762f1309d2fbca1935e04e3419179c059d2e42e6f63bc6e99387beae'
    }

    /**
     * Transferred to account which holds funds reserved for parachain bond.
     */
    get asV1300(): {account: Uint8Array, value: bigint} {
        assert(this.isV1300)
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
     * Paid the account (nominator or collator) the balance as liquid rewards
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.Rewarded') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
    }

    /**
     * Paid the account (nominator or collator) the balance as liquid rewards
     */
    get asV900(): [Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Paid the account (delegator or collator) the balance as liquid rewards.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.Rewarded') === '44a7364018ebad92746e4ca7c7c23d24d5da43cda2e63a90c665b522994ef1e2'
    }

    /**
     * Paid the account (delegator or collator) the balance as liquid rewards.
     */
    get asV1300(): {account: Uint8Array, rewards: bigint} {
        assert(this.isV1300)
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
     * Staking expectations set
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.StakeExpectationsSet') === 'bf419ba71120d15f9bdbc07cda0fa31db10c75992583ec976d4c343db396181c'
    }

    /**
     * Staking expectations set
     */
    get asV900(): [bigint, bigint, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Staking expectations set.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.StakeExpectationsSet') === 'd8561f533aee1b8ba1c36d259010dca00cbc71ab7eb327cf0fa605d647371c6f'
    }

    /**
     * Staking expectations set.
     */
    get asV1300(): {expectMin: bigint, expectIdeal: bigint, expectMax: bigint} {
        assert(this.isV1300)
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
     * Set total selected candidates to this value [old, new]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainStaking.TotalSelectedSet') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * Set total selected candidates to this value [old, new]
     */
    get asV900(): [number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Set total selected candidates to this value.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('ParachainStaking.TotalSelectedSet') === '2a46248fcf922d799638b5954d60e33df4d7dd9113650c71660a937cd4b5613d'
    }

    /**
     * Set total selected candidates to this value.
     */
    get asV1300(): {old: number, new: number} {
        assert(this.isV1300)
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
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '62ab179c459e900954ede92a01f149d553e9317efc7d0129525f40d631e8b38f'
    }

    /**
     * Downward messages were processed using the given weight.
     * \[ weight_used, result_mqc_head \]
     */
    get asV900(): [bigint, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '83022e6226975081ba018c2b45a90d494bc922ece44e69af0322583651264f8e'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asV1701(): {weightUsed: bigint, dmqHead: Uint8Array} {
        assert(this.isV1701)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '5ae72cc32ab9a15192bb84c788530d1d739717b8f9f85bd654953f12515e41f1'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asV1901(): {weightUsed: v1901.Weight, dmqHead: Uint8Array} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === 'cf9eeacdba66ba832f6a2f98e5183e00967eed37902f126a525a42e65ffec630'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asV2000(): {weightUsed: v2000.Weight, dmqHead: Uint8Array} {
        assert(this.isV2000)
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
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Some downward messages have been received and will be processed.
     * \[ count \]
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '1cdbdc8ac203922f95ae6ab3e8b98004e956389f7ec11480ec5633d29b48cf71'
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get asV1701(): {count: number} {
        assert(this.isV1701)
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
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An upgrade has been authorized.
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An upgrade has been authorized.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * An upgrade has been authorized.
     */
    get asV1701(): {codeHash: Uint8Array} {
        assert(this.isV1701)
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
    get isV2302(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpwardMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get asV2302(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV2302)
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
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === 'f35adbaa82c93636884997faedd16369ac498b9208d7c11f2233b9ef2aa4f092'
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get asV1701(): {relayChainBlockNum: number} {
        assert(this.isV1701)
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
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The relay-chain aborted the upgrade process.
     */
    get asV1001(): null {
        assert(this.isV1001)
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
    get isV900(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * The validation function has been scheduled to apply as of the contained relay chain
     * block number.
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The validation function has been scheduled to apply.
     */
    get isV1001(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The validation function has been scheduled to apply.
     */
    get asV1001(): null {
        assert(this.isV1001)
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
    get isV2000(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsClaimed') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get asV2000(): [Uint8Array, v2000.V1MultiLocation, v2000.VersionedMultiAssets] {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsClaimed') === '357607142e5298824c427a1fe0bfb4dd63f3878ebfea84e52fa98b82b1a4f4c6'
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get asV2201(): [Uint8Array, v2201.V1MultiLocation, v2201.VersionedMultiAssets] {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsClaimed') === '31f92e7520747dddaef3e11b450bf3ace3a2df72f612e4237ea77faaffe7a16c'
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get asV2302(): [Uint8Array, v2302.V3MultiLocation, v2302.VersionedMultiAssets] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV1201(): [Uint8Array, v1201.V1MultiLocation, v1201.VersionedMultiAssets] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '357607142e5298824c427a1fe0bfb4dd63f3878ebfea84e52fa98b82b1a4f4c6'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV2201(): [Uint8Array, v2201.V1MultiLocation, v2201.VersionedMultiAssets] {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '31f92e7520747dddaef3e11b450bf3ace3a2df72f612e4237ea77faaffe7a16c'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV2302(): [Uint8Array, v2302.V3MultiLocation, v2302.VersionedMultiAssets] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Attempted') === '193515c3b0e5bbe78313ce7bb5d80d3c789be70e0085c1d43ce0347187c43a50'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV1201(): v1201.V2Outcome {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Attempted') === '4154651e242bd6b6bc077aa66e91ede994df17d6d31ec8746fb77b61829f6cc1'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV1300(): v1300.V2Outcome {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Attempted') === '9f44833a3470bf6416377180f3875a05cfa0cf60651f18f6456d9e12cbab7095'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV2302(): v2302.V3Outcome {
        assert(this.isV2302)
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
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.FeesPaid') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    get asV2302(): [v2302.V3MultiLocation, v2302.V3MultiAsset[]] {
        assert(this.isV2302)
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
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidQuerier') === '7c1090f283eee877a7601bfed0fd6fc3ca831930ac944924347ca8a2c6bd92e3'
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    get asV2302(): [v2302.V3MultiLocation, bigint, v2302.V3MultiLocation, (v2302.V3MultiLocation | undefined)] {
        assert(this.isV2302)
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
    get isV2302(): boolean {
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
    get asV2302(): [v2302.V3MultiLocation, bigint] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === 'aca6b87c79cd283d77249dae5d6ff6b7249a24e95958b723f47cd2333f0e9bc1'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV1201(): [v1201.V1MultiLocation, bigint, (v1201.V1MultiLocation | undefined)] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === '990cc00e432c7557e78d8fc369a5ff1c27aceeaff4ef11984d218478dc53d382'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV2201(): [v2201.V1MultiLocation, bigint, (v2201.V1MultiLocation | undefined)] {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === '3bf64d16d6fb5992c738643efff778414cc181e36377c106ab8130ca32b906de'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV2302(): [v2302.V3MultiLocation, bigint, (v2302.V3MultiLocation | undefined)] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
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
    get asV1201(): [v1201.V1MultiLocation, bigint] {
        assert(this.isV1201)
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
    get isV2201(): boolean {
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
    get asV2201(): [v2201.V1MultiLocation, bigint] {
        assert(this.isV2201)
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
    get isV2302(): boolean {
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
    get asV2302(): [v2302.V3MultiLocation, bigint] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV1201(): [bigint, number, number] {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV1201(): [bigint, number, number] {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV1201(): [bigint, number, number] {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '0104ccc866506c43592e56f342852c22c060b58c586141b7900f6ad97353e8b2'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV1201(): [bigint, number, number, bigint, bigint] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '017f3a2e2d06e91d1be294456b9555e805a1e72a1ad2a469f493c21bf4da0feb'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV1901(): [bigint, number, number, v1901.Weight, v1901.Weight] {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '98a4f2faff58b2444156c088dd1e1b3efb6f82323dcf1a7c67d4d2e01b621c0d'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV2000(): [bigint, number, number, v2000.Weight, v2000.Weight] {
        assert(this.isV2000)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'b02879418cace85908884f92e4b915e3b448f9e06d9bcc0edcce01ed9bc5b644'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV1201(): [v1201.VersionedMultiLocation, bigint] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'df85778aaaf8dd844e177ac92fcb3256708dd8f3a8c5f94e1fa79f126116dc1c'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV2201(): [v2201.VersionedMultiLocation, bigint] {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === '8266fa3a9f901885a47ef275cb4d4053fa3a36033a40564944a565ca686bb27d'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV2302(): [v2302.VersionedMultiLocation, bigint] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '691ecac12054acab4727e4ac3bcc4cc884bcf98e86e777b9c154133f1ff85778'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV1201(): [v1201.V1MultiLocation, bigint, v1201.V2Error] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '0d47fb7e1a9ccdfd8879b0e483179d5b2c7b29bd5db653557e266536bc40f9a0'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV1300(): [v1300.V1MultiLocation, bigint, v1300.V2Error] {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '70b4128bc206c159059329487777fcca974cd67403fafe82ed254a875947534d'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV2201(): [v2201.V1MultiLocation, bigint, v2201.V2Error] {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '26c26186934c8414941ac6565c3465399a31fd237e9f48bcc04601c00427c6fc'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV2302(): [v2302.V3MultiLocation, bigint, v2302.V3Error] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === 'e6cd72b673b499abf36b946b4ab2a4531e2ca4af4aa3d41e14bafae7b2502409'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV1201(): [bigint, v1201.V2Response] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '122689cbd0466e99035c5eeda9c178ed25d8a8fee01f9de0d818f7e86cd5e333'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV1300(): [bigint, v1300.V2Response] {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === 'b377afa93f6a1fa3fbbbe2957f60a56bc7c8e08a09d110a511fc3ed24c3c67a4'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV2201(): [bigint, v2201.V2Response] {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '47e2336328ac2f8cffe468836a85755d501dbd3f9fe77c829ae5b5c5c33f5e9c'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV2302(): [bigint, v2302.V3Response] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get asV1201(): bigint {
        assert(this.isV1201)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === '1a2c2f0f587aa6cafef526c4c8aabbb80179c1dda79383508e93899dd8a8604c'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV1201(): [v1201.V1MultiLocation, v1201.V1MultiLocation, v1201.V2Instruction[]] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === 'ae5e308764e970ce405a89338cec74552db382f20b13af73b16c9b7b172754e4'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV1300(): [v1300.V1MultiLocation, v1300.V1MultiLocation, v1300.V2Instruction[]] {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === '2d7b5f95d8bfc74ce68a179c7a746363dc0d3d0eca2fe88f6606a522fbe34a83'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV2201(): [v2201.V1MultiLocation, v2201.V1MultiLocation, v2201.V2Instruction[]] {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === '8b71eb54444ef55962e90645805fd80535dfb12f572b41fdb1e093b7627b132d'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV2302(): [v2302.V3MultiLocation, v2302.V3MultiLocation, v2302.V3Instruction[]] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV1201(): [v1201.V1MultiLocation, number] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === 'a03fd5bf20a50aaaf59ab7760b98733a03d897f929733dd0cc98b0a5d9bb0924'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV2201(): [v2201.V1MultiLocation, number] {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '9fb88093240cec5964187b6999557d2d8c4331f97b6c42c5664d30afbf50d7d4'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV2302(): [v2302.V3MultiLocation, number] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV1201(): [v1201.V1MultiLocation, bigint] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'a42731758e356b8640e3321dafe151b8ac297a2be71bc4ceff985033060f2569'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV2201(): [v2201.V1MultiLocation, bigint] {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV2302(): [v2302.V3MultiLocation, bigint] {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get asV1201(): [v1201.V1MultiLocation, number] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === 'a03fd5bf20a50aaaf59ab7760b98733a03d897f929733dd0cc98b0a5d9bb0924'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get asV2201(): [v2201.V1MultiLocation, number] {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '3e656c216d68595d03592e62a70ad5d9d6a20b8a41bc0686433d36902cc47f08'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    get asV2302(): [v2302.V3MultiLocation, number, v2302.V3MultiAsset[]] {
        assert(this.isV2302)
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
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionNotifyRequested') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get asV2302(): [v2302.V3MultiLocation, v2302.V3MultiAsset[]] {
        assert(this.isV2302)
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
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionNotifyStarted') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    get asV2302(): [v2302.V3MultiLocation, v2302.V3MultiAsset[]] {
        assert(this.isV2302)
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
    get isV2302(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionNotifyUnrequested') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get asV2302(): [v2302.V3MultiLocation, v2302.V3MultiAsset[]] {
        assert(this.isV2302)
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
    get isV2000(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV2000(): {hash: Uint8Array} {
        assert(this.isV2000)
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
    get isV2000(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV2000(): {hash: Uint8Array} {
        assert(this.isV2000)
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
    get isV2000(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV2000(): {hash: Uint8Array} {
        assert(this.isV2000)
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
     * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Proxy.Announced') === '6ce9683d07765a8355791f785aa1c03acadcc9bf60e78ec09973049a25f86240'
    }

    /**
     * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
     */
    get asV900(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Proxy.Announced') === 'bfd4ccd75ff1f3d21a9649d28c9cbe68c35111a02ce358fb351b0ace2e5ddead'
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get asV1201(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
        assert(this.isV1201)
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
     * disambiguation index and proxy type. \[anonymous, who, proxy_type,
     * disambiguation_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === 'fc5e9c86e5f6e3a91a9803270b8231a2773188f001c77cf2c9770986eef11981'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type. \[anonymous, who, proxy_type,
     * disambiguation_index\]
     */
    get asV900(): [Uint8Array, Uint8Array, v900.ProxyType, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === 'db2a3c65a169af33cff66103f1f0f425c4021082ae537afef69d7d1c59677906'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV1201(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v1201.ProxyType, disambiguationIndex: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === '6be83142c424012785bb4b755c779eccc9749e88fbccf01c050f9d04e352df59'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV1701(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v1701.ProxyType, disambiguationIndex: number} {
        assert(this.isV1701)
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
     * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '6ed088d1f634d87310d521ca3c8d2bcfcaa890914a07e98731596a98d09f02f3'
    }

    /**
     * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
     */
    get asV900(): [Uint8Array, Uint8Array, v900.ProxyType, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was added.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '29490982f5f5e430093f31c39e47df095176a8e2fcc9bd783dd7dbc9353211f3'
    }

    /**
     * A proxy was added.
     */
    get asV1201(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1201.ProxyType, delay: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was added.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === 'ec182b84d8142fab410a8bcf26875a9d45c21205f402aebdaa6a77c2dc59606c'
    }

    /**
     * A proxy was added.
     */
    get asV1701(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1701.ProxyType, delay: number} {
        assert(this.isV1701)
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
     * A proxy was executed correctly, with the given \[result\].
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A proxy was executed correctly, with the given \[result\].
     */
    get asV900(): v900.Type_43 {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '13035ed52f885e1562eecb18e6036551aca97b17fe36e70f73b4132c90e5b776'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV1201(): {result: v1201.Type_41} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === 'af161e703a60c2ed390f4fc5df450268eda69dfe8656e401e29072d2b13258f5'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV1300(): {result: v1300.Type_41} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '123f6c35bbf8bd8d1cc0ada05ce8ad9758b8462076e62ae91382a7270c95ff10'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV1401(): {result: v1401.Type_42} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV1606(): {result: v1606.Type_47} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === 'd15218d9451baa25e4e3c2b30a15d679f7c3c9aa3d43b64b531831430663eb58'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV2000(): {result: v2000.Type_50} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === 'ee56f7174dc1a4631da3e5b48f323193771be6a702fb2ff1ff40459869d34a0e'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV2501(): {result: v2501.Type_52} {
        assert(this.isV2501)
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
    get isV1606(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === '29490982f5f5e430093f31c39e47df095176a8e2fcc9bd783dd7dbc9353211f3'
    }

    /**
     * A proxy was removed.
     */
    get asV1606(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1606.ProxyType, delay: number} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was removed.
     */
    get isV1701(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === 'ec182b84d8142fab410a8bcf26875a9d45c21205f402aebdaa6a77c2dc59606c'
    }

    /**
     * A proxy was removed.
     */
    get asV1701(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1701.ProxyType, delay: number} {
        assert(this.isV1701)
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
    get isV2000(): boolean {
        return this._chain.getEventHash('Proxy.PureCreated') === '187334fc72387a017579d6206420c64fd5156ac9f66b6f263564cc4bd74aa83a'
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV2000(): {pure: Uint8Array, who: Uint8Array, proxyType: v2000.ProxyType, disambiguationIndex: number} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }
}

export class RandomnessRandomnessRequestedBabeEpochEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Randomness.RandomnessRequestedBabeEpoch')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1802(): boolean {
        return this._chain.getEventHash('Randomness.RandomnessRequestedBabeEpoch') === 'a2d188ce05f280b6edc6f84e44e168132bafdcfa6ece7fb17537d235ec04e4d3'
    }

    get asV1802(): {id: bigint, refundAddress: Uint8Array, contractAddress: Uint8Array, fee: bigint, gasLimit: bigint, numWords: number, salt: Uint8Array, earliestEpoch: bigint} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}

export class RandomnessRandomnessRequestedLocalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Randomness.RandomnessRequestedLocal')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1802(): boolean {
        return this._chain.getEventHash('Randomness.RandomnessRequestedLocal') === 'd23146f61ce6df37a1caf04d3034bc61f1a8ec34d9e707c3fb3aa2c84bb88c45'
    }

    get asV1802(): {id: bigint, refundAddress: Uint8Array, contractAddress: Uint8Array, fee: bigint, gasLimit: bigint, numWords: number, salt: Uint8Array, earliestBlock: number} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}

export class RandomnessRequestExpirationExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Randomness.RequestExpirationExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1802(): boolean {
        return this._chain.getEventHash('Randomness.RequestExpirationExecuted') === 'c66c1c760c6b44eb4cb57fc52e8d79ffff6e94182e3b5b441236f82bb7457c5f'
    }

    get asV1802(): {id: bigint} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}

export class RandomnessRequestFeeIncreasedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Randomness.RequestFeeIncreased')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1802(): boolean {
        return this._chain.getEventHash('Randomness.RequestFeeIncreased') === '038cf1c15ff9fd55ef3516215287662f83d86ffb85853fbf495c221fb23f1431'
    }

    get asV1802(): {id: bigint, newFee: bigint} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}

export class RandomnessRequestFulfilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Randomness.RequestFulfilled')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1802(): boolean {
        return this._chain.getEventHash('Randomness.RequestFulfilled') === 'c66c1c760c6b44eb4cb57fc52e8d79ffff6e94182e3b5b441236f82bb7457c5f'
    }

    get asV1802(): {id: bigint} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.Approved') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get asV2403(): {index: number} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.Cancelled') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV2403(): {index: number, tally: v2403.Tally} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmAbortedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.ConfirmAborted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.ConfirmAborted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV2403(): {index: number} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.ConfirmStarted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.ConfirmStarted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV2403(): {index: number} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Confirmed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.Confirmed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get asV2403(): {index: number, tally: v2403.Tally} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionDepositPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionDepositPlaced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been placed.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.DecisionDepositPlaced') === '5f4efdfb06509d37b98e33824ae6590ba8b3edb296ad4f18a1153ccb231b91e1'
    }

    /**
     * The decision deposit has been placed.
     */
    get asV2403(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionDepositRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionDepositRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been refunded.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.DecisionDepositRefunded') === '5f4efdfb06509d37b98e33824ae6590ba8b3edb296ad4f18a1153ccb231b91e1'
    }

    /**
     * The decision deposit has been refunded.
     */
    get asV2403(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.DecisionStarted') === '93e86498f68feebf124dad7a87010c14ba0e2cc07333331054e866079ff834a5'
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get asV2403(): {index: number, track: number, proposal: v2403.Bounded, tally: v2403.Tally} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDepositSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DepositSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A deposit has been slashaed.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.DepositSlashed') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * A deposit has been slashaed.
     */
    get asV2403(): {who: Uint8Array, amount: bigint} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Killed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been killed.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.Killed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been killed.
     */
    get asV2403(): {index: number, tally: v2403.Tally} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.MetadataCleared') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get asV2403(): {index: number, hash: Uint8Array} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been set.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.MetadataSet') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been set.
     */
    get asV2403(): {index: number, hash: Uint8Array} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.Rejected') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV2403(): {index: number, tally: v2403.Tally} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaSubmissionDepositRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.SubmissionDepositRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The submission deposit has been refunded.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.SubmissionDepositRefunded') === '5f4efdfb06509d37b98e33824ae6590ba8b3edb296ad4f18a1153ccb231b91e1'
    }

    /**
     * The submission deposit has been refunded.
     */
    get asV2403(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaSubmittedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Submitted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been submitted.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.Submitted') === 'dd1db40cab9e2e0c54e203f9c60347029a08160d5930b550604e5378d4c502df'
    }

    /**
     * A referendum has been submitted.
     */
    get asV2403(): {index: number, track: number, proposal: v2403.Bounded} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.TimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get isV2403(): boolean {
        return this._chain.getEventHash('Referenda.TimedOut') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get asV2403(): {index: number, tally: v2403.Tally} {
        assert(this.isV2403)
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
    get isV1300(): boolean {
        return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV1300(): {task: [number, number], id: (Uint8Array | undefined), error: v1300.LookupError} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCallUnavailableEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.CallUnavailable')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Scheduler.CallUnavailable') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV2000(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV2000)
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
     * Canceled some task. \[when, index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * Canceled some task. \[when, index\]
     */
    get asV900(): [number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Canceled some task.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Canceled some task.
     */
    get asV1300(): {when: number, index: number} {
        assert(this.isV1300)
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
     * Dispatched some task. \[task, id, result\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '0924b109bceeccc61da80b5dece80623d828a98c86b9a531565d13d396698ea8'
    }

    /**
     * Dispatched some task. \[task, id, result\]
     */
    get asV900(): [[number, number], (Uint8Array | undefined), v900.Type_43] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '4c3d15154e107129fea741c8e400a84699ee67095fc83c1c726f8b56c7826660'
    }

    /**
     * Dispatched some task.
     */
    get asV1300(): {task: [number, number], id: (Uint8Array | undefined), result: v1300.Type_41} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '4439d3bf37ab8e1b7b14c411aa9c4d9622aa96b4dd169cb67da04ec196da4c09'
    }

    /**
     * Dispatched some task.
     */
    get asV1401(): {task: [number, number], id: (Uint8Array | undefined), result: v1401.Type_42} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'ba59527b3bb4801aee2fda92f8229d8d572cc38c565e139a667a87dd8171194b'
    }

    /**
     * Dispatched some task.
     */
    get asV1606(): {task: [number, number], id: (Uint8Array | undefined), result: v1606.Type_47} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'b67102cc706599639b8e52e776b81c51142dad43652e91e7e72197b7df9a63f4'
    }

    /**
     * Dispatched some task.
     */
    get asV2000(): {task: [number, number], id: (Uint8Array | undefined), result: v2000.Type_50} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '6eb5580f3023aa9d8b919b2e4d4c348b6d18e7b61b4d3362b70f19480d1767fc'
    }

    /**
     * Dispatched some task.
     */
    get asV2501(): {task: [number, number], id: (Uint8Array | undefined), result: v2501.Type_52} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerPeriodicFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.PeriodicFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Scheduler.PeriodicFailed') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get asV2000(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerPermanentlyOverweightEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.PermanentlyOverweight')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Scheduler.PermanentlyOverweight') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get asV2000(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV2000)
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
     * Scheduled some task. \[when, index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * Scheduled some task. \[when, index\]
     */
    get asV900(): [number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Scheduled some task.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Scheduled some task.
     */
    get asV1300(): {when: number, index: number} {
        assert(this.isV1300)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied.
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV900(): v900.Type_43 {
        assert(this.isV900)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV900(): v900.Type_43 {
        assert(this.isV900)
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
    get isV900(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * `:code` was updated.
     */
    get asV900(): null {
        assert(this.isV900)
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
    get isV900(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '0995776ff5e8d5f8662a6841d8556c830acc58fbb01f76a13b6aa4222b987150'
    }

    /**
     * An extrinsic failed. \[error, info\]
     */
    get asV900(): [v900.DispatchError, v900.DispatchInfo] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '2dcccc93ed3f24e5499fe9480fe0a61a806d25bb5fc0d10a1074e360693768e7'
    }

    /**
     * An extrinsic failed.
     */
    get asV1300(): {dispatchError: v1300.DispatchError, dispatchInfo: v1300.DispatchInfo} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
    }

    /**
     * An extrinsic failed.
     */
    get asV1401(): {dispatchError: v1401.DispatchError, dispatchInfo: v1401.DispatchInfo} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
    }

    /**
     * An extrinsic failed.
     */
    get asV1606(): {dispatchError: v1606.DispatchError, dispatchInfo: v1606.DispatchInfo} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '7a219a9eae41ad22651fdcb4f6a7453254b0ecc7be4b30821be2ab5b44e5f1b4'
    }

    /**
     * An extrinsic failed.
     */
    get asV1901(): {dispatchError: v1901.DispatchError, dispatchInfo: v1901.DispatchInfo} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '36c29895cd15b6f845bb064a671635ce07ef9de9648695c2803020e8510d0fb3'
    }

    /**
     * An extrinsic failed.
     */
    get asV2000(): {dispatchError: v2000.DispatchError, dispatchInfo: v2000.DispatchInfo} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '89ca818f689e3f6e085d8137a961f36cc94819777211c5c11cca985a448944b8'
    }

    /**
     * An extrinsic failed.
     */
    get asV2501(): {dispatchError: v2501.DispatchError, dispatchInfo: v2501.DispatchInfo} {
        assert(this.isV2501)
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
    get isV900(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
    }

    /**
     * An extrinsic completed successfully. \[info\]
     */
    get asV900(): v900.DispatchInfo {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV1300(): {dispatchInfo: v1300.DispatchInfo} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6fc1e5ad9f5b3851c6e301764b8507ebb0861fd57381e6bc020a47f2b710167d'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV1901(): {dispatchInfo: v1901.DispatchInfo} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6b78214e1591ecc2de1662ebf5ca93838612414a62415cde1cdd2962f8235a92'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV2000(): {dispatchInfo: v2000.DispatchInfo} {
        assert(this.isV2000)
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
    get isV900(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * An \[account\] was reaped.
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was reaped.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '041e3c99c7373645533b0a38437f03393c46e1c811b17689bc2c51c0b6784c09'
    }

    /**
     * An account was reaped.
     */
    get asV1300(): {account: Uint8Array} {
        assert(this.isV1300)
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
    get isV900(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     * A new \[account\] was created.
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new account was created.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '041e3c99c7373645533b0a38437f03393c46e1c811b17689bc2c51c0b6784c09'
    }

    /**
     * A new account was created.
     */
    get asV1300(): {account: Uint8Array} {
        assert(this.isV1300)
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
    get isV900(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'a941d1ba1ef0ab46f674f7ed2a79f38731ff31d1bff081d4a00ce14eba1e6808'
    }

    /**
     * On on-chain remark happened. \[origin, remark_hash\]
     */
    get asV900(): [Uint8Array, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * On on-chain remark happened.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'aeed1c1d467ca7ef8cb28e828b4c151ed9cf2a6a928b055559fe3cd7c73e790c'
    }

    /**
     * On on-chain remark happened.
     */
    get asV1300(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCommitteeCollectiveApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCommitteeCollective.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     * \[proposal_hash\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A motion was approved by the required threshold.
     * \[proposal_hash\]
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV1201(): {proposalHash: Uint8Array} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCommitteeCollectiveClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCommitteeCollective.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     * \[proposal_hash, yes, no\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     * \[proposal_hash, yes, no\]
     */
    get asV900(): [Uint8Array, number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV1201(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCommitteeCollectiveDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCommitteeCollective.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     * \[proposal_hash\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A motion was not approved by the required threshold.
     * \[proposal_hash\]
     */
    get asV900(): Uint8Array {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV1201(): {proposalHash: Uint8Array} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCommitteeCollectiveExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCommitteeCollective.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Executed') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV900(): [Uint8Array, v900.Type_43] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Executed') === '985881284cd2d985dd366d839f2f998c085d1947cd3d3888f28b2b95e28572f1'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV1201(): {proposalHash: Uint8Array, result: v1201.Type_41} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Executed') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV1300(): {proposalHash: Uint8Array, result: v1300.Type_41} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Executed') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV1401(): {proposalHash: Uint8Array, result: v1401.Type_42} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV1606(): {proposalHash: Uint8Array, result: v1606.Type_47} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV2000(): {proposalHash: Uint8Array, result: v2000.Type_50} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Executed') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV2501(): {proposalHash: Uint8Array, result: v2501.Type_52} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCommitteeCollectiveMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCommitteeCollective.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV900(): [Uint8Array, v900.Type_43] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === '985881284cd2d985dd366d839f2f998c085d1947cd3d3888f28b2b95e28572f1'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV1201(): {proposalHash: Uint8Array, result: v1201.Type_41} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV1300(): {proposalHash: Uint8Array, result: v1300.Type_41} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV1401(): {proposalHash: Uint8Array, result: v1401.Type_42} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV1606(): {proposalHash: Uint8Array, result: v1606.Type_47} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV2000(): {proposalHash: Uint8Array, result: v2000.Type_50} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV2501(): {proposalHash: Uint8Array, result: v2501.Type_52} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCommitteeCollectiveProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCommitteeCollective.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     * \[account, proposal_index, proposal_hash, threshold\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     * \[account, proposal_index, proposal_hash, threshold\]
     */
    get asV900(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV1201(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCommitteeCollectiveVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCommitteeCollective.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     * \[account, proposal_hash, voted, yes, no\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     * \[account, proposal_hash, voted, yes, no\]
     */
    get asV900(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('TechCommitteeCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV1201(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV1201)
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
    get isV1802(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === '0e2aa7b73399d934ce51badc2f3fc832e2196aab6d6e820e3f58d4cf2c178b47'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asV1802(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isV1802)
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
     * Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '1ca1bbccad98d48e2621a47ca30161714034e352019415514ef1338743ce0fd8'
    }

    /**
     * Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    get asV900(): [number, bigint, Uint8Array] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been allocated.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '6f95fbb8a91e310ee6d32f9a9933578e41f325c1506fac22a1f57925002cd904'
    }

    /**
     * Some funds have been allocated.
     */
    get asV1300(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV1300)
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
     * Some of our funds have been burnt. \[burn\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Some of our funds have been burnt. \[burn\]
     */
    get asV900(): bigint {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some of our funds have been burnt.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
    }

    /**
     * Some of our funds have been burnt.
     */
    get asV1300(): {burntFunds: bigint} {
        assert(this.isV1300)
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
     * Some funds have been deposited. \[deposit\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Some funds have been deposited. \[deposit\]
     */
    get asV900(): bigint {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been deposited.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
    }

    /**
     * Some funds have been deposited.
     */
    get asV1300(): {value: bigint} {
        assert(this.isV1300)
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
     * New proposal. \[proposal_index\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * New proposal. \[proposal_index\]
     */
    get asV900(): number {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New proposal.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV1300(): {proposalIndex: number} {
        assert(this.isV1300)
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
     * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    get asV900(): [number, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV1300(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV1300)
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
     * Spending has finished; this is the amount that rolls over until next spend.
     * \[budget_remaining\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     * \[budget_remaining\]
     */
    get asV900(): bigint {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get asV1300(): {rolloverBalance: bigint} {
        assert(this.isV1300)
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
    get isV1802(): boolean {
        return this._chain.getEventHash('Treasury.SpendApproved') === 'b4eb6b90eeb0d3e68cf78482f1b230bc81892df3e145784d4494e6832f0715c5'
    }

    /**
     * A new spend proposal has been approved.
     */
    get asV1802(): {proposalIndex: number, amount: bigint, beneficiary: Uint8Array} {
        assert(this.isV1802)
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
     * We have ended a spend period and will now allocate funds. \[budget_remaining\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * We have ended a spend period and will now allocate funds. \[budget_remaining\]
     */
    get asV900(): bigint {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get asV1300(): {budgetRemaining: bigint} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryUpdatedInactiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.UpdatedInactive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The inactive funds of the pallet have been updated.
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('Treasury.UpdatedInactive') === 'd25083f089d99f72f11dfcdd8481dbdc5c0c6d9c3369646530e2e08cd9f6bbba'
    }

    /**
     * The inactive funds of the pallet have been updated.
     */
    get asV2201(): {reactivated: bigint, deactivated: bigint} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryCouncilCollectiveApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TreasuryCouncilCollective.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV1802(): {proposalHash: Uint8Array} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryCouncilCollectiveClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TreasuryCouncilCollective.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV1802(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryCouncilCollectiveDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TreasuryCouncilCollective.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV1802(): {proposalHash: Uint8Array} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryCouncilCollectiveExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TreasuryCouncilCollective.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV1802(): {proposalHash: Uint8Array, result: v1802.Type_48} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV2000(): {proposalHash: Uint8Array, result: v2000.Type_50} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.Executed') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV2501(): {proposalHash: Uint8Array, result: v2501.Type_52} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryCouncilCollectiveMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TreasuryCouncilCollective.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV1802(): {proposalHash: Uint8Array, result: v1802.Type_48} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.MemberExecuted') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV2000(): {proposalHash: Uint8Array, result: v2000.Type_50} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.MemberExecuted') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV2501(): {proposalHash: Uint8Array, result: v2501.Type_52} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryCouncilCollectiveProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TreasuryCouncilCollective.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV1802(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryCouncilCollectiveVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TreasuryCouncilCollective.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('TreasuryCouncilCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV1802(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV1802)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get asV900(): null {
        assert(this.isV900)
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
    get isV1701(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asV1701(): null {
        assert(this.isV1701)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === 'b9192854e3b1d8b7a3bd93b66a170a2afd8616d353d0fc1bdbfbfe6efa5b4f5a'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error. \[index, error\]
     */
    get asV900(): [number, v900.DispatchError] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '98bdd6e841214fcd4b95ff7b4750fcf3643d9e94f0203582cf6dd5c7dd772c39'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV1201(): {index: number, error: v1201.DispatchError} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '0ebef0e669872b029afc6cbf6c35a90ca099164a7899375e3d8178345c0f3f73'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV1300(): {index: number, error: v1300.DispatchError} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '8676c6dc6a22410c7ddbc9f34f71e25e9bc1f7237c98ea59385020ce26129067'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV1401(): {index: number, error: v1401.DispatchError} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV1606(): {index: number, error: v1606.DispatchError} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '14dbb9456065a44deeed159d4dbd21796ec92754c0494d698c9bcc529d0f7279'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV2000(): {index: number, error: v2000.DispatchError} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '031f8c01ddd9491965bf6e6671d70381e70d55e6028aab52a937d1c3afeecb9f'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV2501(): {index: number, error: v2501.DispatchError} {
        assert(this.isV2501)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A call was dispatched. \[result\]
     */
    get asV1201(): v1201.Type_41 {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'af161e703a60c2ed390f4fc5df450268eda69dfe8656e401e29072d2b13258f5'
    }

    /**
     * A call was dispatched.
     */
    get asV1300(): {result: v1300.Type_41} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '123f6c35bbf8bd8d1cc0ada05ce8ad9758b8462076e62ae91382a7270c95ff10'
    }

    /**
     * A call was dispatched.
     */
    get asV1401(): {result: v1401.Type_42} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A call was dispatched.
     */
    get asV1606(): {result: v1606.Type_47} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'd15218d9451baa25e4e3c2b30a15d679f7c3c9aa3d43b64b531831430663eb58'
    }

    /**
     * A call was dispatched.
     */
    get asV2000(): {result: v2000.Type_50} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'ee56f7174dc1a4631da3e5b48f323193771be6a702fb2ff1ff40459869d34a0e'
    }

    /**
     * A call was dispatched.
     */
    get asV2501(): {result: v2501.Type_52} {
        assert(this.isV2501)
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
    get isV900(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get asV900(): null {
        assert(this.isV900)
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
    get isV1701(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV1701(): {error: v1701.DispatchError} {
        assert(this.isV1701)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV2000(): {error: v2000.DispatchError} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV2501(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '4564a5412ce55535234d019dbd1d2999c5a9d6f452a565385d0c43e85d0dbf0b'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV2501(): {error: v2501.DispatchError} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistCallWhitelistedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.CallWhitelisted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV2403(): boolean {
        return this._chain.getEventHash('Whitelist.CallWhitelisted') === 'b44e90452a13e65d907b0cefbea166547546a12683e4c0df57032f38a10e78b3'
    }

    get asV2403(): {callHash: Uint8Array} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistWhitelistedCallDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.WhitelistedCallDispatched')
        this._chain = ctx._chain
        this.event = event
    }

    get isV2403(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallDispatched') === 'f3cf1e680982a29643501f0efe5ea31d9996c644bf575968d233190a4d28c85f'
    }

    get asV2403(): {callHash: Uint8Array, result: Result<v2403.PostDispatchInfo, v2403.DispatchErrorWithPostInfo>} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }

    get isV2501(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallDispatched') === '872efdfca137d9329d409f26057af1369b9a71eb023c2bc2c0a793d4d9dfca2e'
    }

    get asV2501(): {callHash: Uint8Array, result: Result<v2501.PostDispatchInfo, v2501.DispatchErrorWithPostInfo>} {
        assert(this.isV2501)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistWhitelistedCallRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.WhitelistedCallRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV2403(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallRemoved') === 'b44e90452a13e65d907b0cefbea166547546a12683e4c0df57032f38a10e78b3'
    }

    get asV2403(): {callHash: Uint8Array} {
        assert(this.isV2403)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred. \[sender, currency_id, amount, dest\]
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('XTokens.Transferred') === '0b1f64fdbe98f4991b0526cf2880340c383744c30f7427682cf2ac13ca10c132'
    }

    /**
     * Transferred. \[sender, currency_id, amount, dest\]
     */
    get asV1201(): [Uint8Array, v1201.CurrencyId, bigint, v1201.V1MultiLocation] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.Transferred') === '6974067fb4607c172dd660bbcb7bd9c27f5a0b651c8c72bf067fbcc1717d5796'
    }

    /**
     * Transferred.
     */
    get asV1300(): {sender: Uint8Array, currencyId: v1300.CurrencyId, amount: bigint, dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredMultiAssetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredMultiAsset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred `MultiAsset`. \[sender, asset, dest\]
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAsset') === 'e054281198c197ead860808419b2fed078a4b0770f98e35ff1e0a19b435d1390'
    }

    /**
     * Transferred `MultiAsset`. \[sender, asset, dest\]
     */
    get asV1201(): [Uint8Array, v1201.V1MultiAsset, v1201.V1MultiLocation] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred `MultiAsset`.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAsset') === '194d429a2acf3e96db2dcd633b6e8ffb0207693a9d537bf69358f93d4401802b'
    }

    /**
     * Transferred `MultiAsset`.
     */
    get asV1300(): {sender: Uint8Array, asset: v1300.V1MultiAsset, dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredMultiAssetWithFeeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredMultiAssetWithFee')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred `MultiAsset` with fee. \[sender, asset, fee, dest\]
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssetWithFee') === '44e1ae66614077a4b66c332b909505952455e13fd4d47b51ccf328013382f988'
    }

    /**
     * Transferred `MultiAsset` with fee. \[sender, asset, fee, dest\]
     */
    get asV1201(): [Uint8Array, v1201.V1MultiAsset, v1201.V1MultiAsset, v1201.V1MultiLocation] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssetWithFee') === '771a67e03a292739a0431803b4326faddec67ed77f8416495a0b58a2317963f4'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV1300(): {sender: Uint8Array, asset: v1300.V1MultiAsset, fee: v1300.V1MultiAsset, dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
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
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '627fd7f5468f3c25280e18c4c1f32304bcdfba6900ac9f1c2b6ad0a43392f878'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV1300(): {sender: Uint8Array, assets: v1300.V1MultiAsset[], dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '854ee56dafc84c13da32ba254e83581770f5bd45dfc01d7be320dcb44f605ca6'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV1401(): {sender: Uint8Array, assets: v1401.V1MultiAsset[], fee: v1401.V1MultiAsset, dest: v1401.V1MultiLocation} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === 'c0fb796a5a83a88827254aa0fa64a63da8cddc59b18a464fbf74269b472f1402'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV2201(): {sender: Uint8Array, assets: v2201.V1MultiAsset[], fee: v2201.V1MultiAsset, dest: v2201.V1MultiLocation} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '3a5a5725aa285145316ab55857fde5e3e6f8155ef47257a4f65f4cd981b1328f'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV2302(): {sender: Uint8Array, assets: v2302.V3MultiAsset[], fee: v2302.V3MultiAsset, dest: v2302.V3MultiLocation} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredMultiCurrenciesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredMultiCurrencies')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiCurrencies') === 'fa9e419250bd07efbf28e10e149cdf0f1f4b45a37392e10a721c2005b1ed63fa'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV1300(): {sender: Uint8Array, currencies: [v1300.CurrencyId, bigint][], dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredWithFeeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredWithFee')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred with fee. \[sender, currency_id, amount, fee, dest\]
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('XTokens.TransferredWithFee') === '4c990ce581c424736afda696e525804e46e14e9730596238a3ca263138cb412e'
    }

    /**
     * Transferred with fee. \[sender, currency_id, amount, fee, dest\]
     */
    get asV1201(): [Uint8Array, v1201.CurrencyId, bigint, bigint, v1201.V1MultiLocation] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred with fee.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XTokens.TransferredWithFee') === '4d29d86c54290e6aebc50b8c765526f71f9f7abbe7586fe42dc170a0585d268c'
    }

    /**
     * Transferred with fee.
     */
    get asV1300(): {sender: Uint8Array, currencyId: v1300.CurrencyId, amount: bigint, fee: bigint, dest: v1300.V1MultiLocation} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorDeRegisteredDerivativeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.DeRegisteredDerivative')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1401(): boolean {
        return this._chain.getEventHash('XcmTransactor.DeRegisteredDerivative') === '053daa6536b598f0aa27368ea681761daeadb01c00bc0f60a6fe5f7255582db4'
    }

    get asV1401(): {index: number} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorDestFeePerSecondChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.DestFeePerSecondChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Set dest fee per second
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('XcmTransactor.DestFeePerSecondChanged') === '4e6de2202a4da27339f490b023b53d4f95d0f3edc01398b330235c9f41b9b1f9'
    }

    /**
     * Set dest fee per second
     */
    get asV1606(): {location: v1606.V1MultiLocation, feePerSecond: bigint} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Set dest fee per second
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('XcmTransactor.DestFeePerSecondChanged') === '52c4b99291593f00a5e014a8df6781c959724b5ec87c794c5999311a8ec2e497'
    }

    /**
     * Set dest fee per second
     */
    get asV2201(): {location: v2201.V1MultiLocation, feePerSecond: bigint} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Set dest fee per second
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XcmTransactor.DestFeePerSecondChanged') === '0ccbaadc75d87854ea95282bc05537c0fa2efe79a353cd5763137a466644b66f'
    }

    /**
     * Set dest fee per second
     */
    get asV2302(): {location: v2302.V3MultiLocation, feePerSecond: bigint} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorDestFeePerSecondRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.DestFeePerSecondRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Remove dest fee per second
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('XcmTransactor.DestFeePerSecondRemoved') === 'c5717b66288d312f2406466ab5ee8d79ba1aceedc50e60e0ce2a16ba6828727f'
    }

    /**
     * Remove dest fee per second
     */
    get asV1606(): {location: v1606.V1MultiLocation} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Remove dest fee per second
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('XcmTransactor.DestFeePerSecondRemoved') === 'fc57a8180025e3a2ecbeff255dd91364f67cf128b33b0c11f9276a1c77bbf581'
    }

    /**
     * Remove dest fee per second
     */
    get asV2201(): {location: v2201.V1MultiLocation} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Remove dest fee per second
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XcmTransactor.DestFeePerSecondRemoved') === '03db8e67ce4f6d5cf2a1b5a2811fa2334588cf4bf4318064c565b6ef4a0afe88'
    }

    /**
     * Remove dest fee per second
     */
    get asV2302(): {location: v2302.V3MultiLocation} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorHrmpManagementSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.HrmpManagementSent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * HRMP manage action succesfully sent
     */
    get isV2100(): boolean {
        return this._chain.getEventHash('XcmTransactor.HrmpManagementSent') === 'b8ab3fc1c8b25e04125bd4f9bafb5f13ebf4f9ca24a83cbef9aa625b9b804c3a'
    }

    /**
     * HRMP manage action succesfully sent
     */
    get asV2100(): {action: v2100.HrmpOperation} {
        assert(this.isV2100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * HRMP manage action succesfully sent
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XcmTransactor.HrmpManagementSent') === '613f0a2379006ad038b30aa498f6d6647f14da681b919395e88ebca7b30e4585'
    }

    /**
     * HRMP manage action succesfully sent
     */
    get asV2302(): {action: v2302.HrmpOperation} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorRegisterdDerivativeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.RegisterdDerivative')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1201(): boolean {
        return this._chain.getEventHash('XcmTransactor.RegisterdDerivative') === '541a75cc9fdc5d2fddc4420ef4485ca01a19c26bc7009e44a569447549bf349d'
    }

    get asV1201(): [Uint8Array, number] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Registered a derivative index for an account id.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XcmTransactor.RegisterdDerivative') === 'b66bdf1e6069c87252697604487d8d9c9a1711e9fb6e49113afe161e804061ec'
    }

    /**
     * Registered a derivative index for an account id.
     */
    get asV1300(): {accountId: Uint8Array, index: number} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorRegisteredDerivativeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.RegisteredDerivative')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Registered a derivative index for an account id.
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('XcmTransactor.RegisteredDerivative') === 'b66bdf1e6069c87252697604487d8d9c9a1711e9fb6e49113afe161e804061ec'
    }

    /**
     * Registered a derivative index for an account id.
     */
    get asV1401(): {accountId: Uint8Array, index: number} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorTransactFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.TransactFailed')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1201(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactFailed') === '656bcaacb6094ee3ae2abd0f2c7b21d22b1008ef1eb17f5f8eb6af1b5da8cf44'
    }

    get asV1201(): v1201.V2Error {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transact failed
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactFailed') === '19945a716124e39e70dfc8a8cc294abd226c412ae64551124e7c330f953f5d9c'
    }

    /**
     * Transact failed
     */
    get asV1300(): {error: v1300.V2Error} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transact failed
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactFailed') === '966240bd73a0dbdd98fb77e2340f17585312e165a21f7e5fcf87894fd328ba3c'
    }

    /**
     * Transact failed
     */
    get asV2302(): {error: v2302.V3Error} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorTransactInfoChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.TransactInfoChanged')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1201(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactInfoChanged') === 'af805af2618e0357ee31b1d7c6e042efad73802da67d2901aab5b29e03367ec7'
    }

    get asV1201(): [v1201.V1MultiLocation, v1201.RemoteTransactInfoWithMaxWeight] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the transact info of a location
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactInfoChanged') === '2f7189da060ee0b12ae76a1c6c88139705fff819f1e0835e8ed04010ac0519e8'
    }

    /**
     * Changed the transact info of a location
     */
    get asV1300(): {location: v1300.V1MultiLocation, remoteInfo: v1300.RemoteTransactInfoWithMaxWeight} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the transact info of a location
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactInfoChanged') === '1022857027b7884880f9cf454dad26d73ac3ea9d5b432574d2581599324d3316'
    }

    /**
     * Changed the transact info of a location
     */
    get asV1606(): {location: v1606.V1MultiLocation, remoteInfo: v1606.RemoteTransactInfoWithMaxWeight} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the transact info of a location
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactInfoChanged') === 'bca11f06e603923005bb53626e04dd70ff6bacec163fe19edb0305dc8ad8e26d'
    }

    /**
     * Changed the transact info of a location
     */
    get asV2201(): {location: v2201.V1MultiLocation, remoteInfo: v2201.RemoteTransactInfoWithMaxWeight} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Changed the transact info of a location
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactInfoChanged') === '0ad7f4c672adf771435c0efe1b42c856aa1c1a048e593cf654b26e966bf8efea'
    }

    /**
     * Changed the transact info of a location
     */
    get asV2302(): {location: v2302.V3MultiLocation, remoteInfo: v2302.RemoteTransactInfoWithMaxWeight} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorTransactInfoRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.TransactInfoRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Removed the transact info of a location
     */
    get isV1401(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactInfoRemoved') === 'c5717b66288d312f2406466ab5ee8d79ba1aceedc50e60e0ce2a16ba6828727f'
    }

    /**
     * Removed the transact info of a location
     */
    get asV1401(): {location: v1401.V1MultiLocation} {
        assert(this.isV1401)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Removed the transact info of a location
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactInfoRemoved') === 'fc57a8180025e3a2ecbeff255dd91364f67cf128b33b0c11f9276a1c77bbf581'
    }

    /**
     * Removed the transact info of a location
     */
    get asV2201(): {location: v2201.V1MultiLocation} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Removed the transact info of a location
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactInfoRemoved') === '03db8e67ce4f6d5cf2a1b5a2811fa2334588cf4bf4318064c565b6ef4a0afe88'
    }

    /**
     * Removed the transact info of a location
     */
    get asV2302(): {location: v2302.V3MultiLocation} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorTransactedDerivativeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.TransactedDerivative')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1201(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedDerivative') === 'e6980f2c19c3830a2bf3e4ceb131649249e894fb0a74994970099aeb4403877b'
    }

    get asV1201(): [Uint8Array, v1201.V1MultiLocation, Uint8Array, number] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transacted the inner call through a derivative account in a destination chain.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedDerivative') === 'ae03965a1dbf8c002720f57d0d7d125bce4f8c95d4a8b034541191b137fd72a3'
    }

    /**
     * Transacted the inner call through a derivative account in a destination chain.
     */
    get asV1300(): {accountId: Uint8Array, dest: v1300.V1MultiLocation, call: Uint8Array, index: number} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transacted the inner call through a derivative account in a destination chain.
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedDerivative') === 'a8d5f094d8c0b44ef00551313df286374f436845a87543583d7b56f5f2b50a65'
    }

    /**
     * Transacted the inner call through a derivative account in a destination chain.
     */
    get asV2201(): {accountId: Uint8Array, dest: v2201.V1MultiLocation, call: Uint8Array, index: number} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transacted the inner call through a derivative account in a destination chain.
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedDerivative') === 'e61d3f9a021f4820f2bb27d7f5d5c347f0cbabf424567b70f8b7cf76e8364cb7'
    }

    /**
     * Transacted the inner call through a derivative account in a destination chain.
     */
    get asV2302(): {accountId: Uint8Array, dest: v2302.V3MultiLocation, call: Uint8Array, index: number} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorTransactedSignedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.TransactedSigned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transacted the call through a signed account in a destination chain.
     */
    get isV1606(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedSigned') === '59f08878d703ebd4afe407c7d6ab34b828c48a48b2f2feee93be5dfbf37e7ce9'
    }

    /**
     * Transacted the call through a signed account in a destination chain.
     */
    get asV1606(): {feePayer: Uint8Array, dest: v1606.V1MultiLocation, call: Uint8Array} {
        assert(this.isV1606)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transacted the call through a signed account in a destination chain.
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedSigned') === 'd3653069a88f4e89fd1d893605b0a17763a1260e166cbdb71557b043ace4a274'
    }

    /**
     * Transacted the call through a signed account in a destination chain.
     */
    get asV2201(): {feePayer: Uint8Array, dest: v2201.V1MultiLocation, call: Uint8Array} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transacted the call through a signed account in a destination chain.
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedSigned') === '1c15c3c04f205293d9a432aa605f613c5f84b24e2ec14538c8ecf0923bd5b4f9'
    }

    /**
     * Transacted the call through a signed account in a destination chain.
     */
    get asV2302(): {feePayer: Uint8Array, dest: v2302.V3MultiLocation, call: Uint8Array} {
        assert(this.isV2302)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmTransactorTransactedSovereignEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmTransactor.TransactedSovereign')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1201(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedSovereign') === 'c65f6c9647831c6243b29bf733793a37ed19265c734353ea336ea344804ae2d0'
    }

    get asV1201(): [Uint8Array, v1201.V1MultiLocation, Uint8Array] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transacted the call through the sovereign account in a destination chain.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedSovereign') === '59f08878d703ebd4afe407c7d6ab34b828c48a48b2f2feee93be5dfbf37e7ce9'
    }

    /**
     * Transacted the call through the sovereign account in a destination chain.
     */
    get asV1300(): {feePayer: Uint8Array, dest: v1300.V1MultiLocation, call: Uint8Array} {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transacted the call through the sovereign account in a destination chain.
     */
    get isV2201(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedSovereign') === 'd3653069a88f4e89fd1d893605b0a17763a1260e166cbdb71557b043ace4a274'
    }

    /**
     * Transacted the call through the sovereign account in a destination chain.
     */
    get asV2201(): {feePayer: Uint8Array, dest: v2201.V1MultiLocation, call: Uint8Array} {
        assert(this.isV2201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transacted the call through the sovereign account in a destination chain.
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XcmTransactor.TransactedSovereign') === '1c15c3c04f205293d9a432aa605f613c5f84b24e2ec14538c8ecf0923bd5b4f9'
    }

    /**
     * Transacted the call through the sovereign account in a destination chain.
     */
    get asV2302(): {feePayer: Uint8Array, dest: v2302.V3MultiLocation, call: Uint8Array} {
        assert(this.isV2302)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadFormat') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * Bad XCM format used.
     */
    get asV1201(): (Uint8Array | undefined) {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Bad XCM format used.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadFormat') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * Bad XCM format used.
     */
    get asV1802(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV1802)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadVersion') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * Bad XCM version used.
     */
    get asV1201(): (Uint8Array | undefined) {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Bad XCM version used.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadVersion') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * Bad XCM version used.
     */
    get asV1802(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV1802)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'c719d9ccc723cdf668f55966f450e4217391513459d13dcdea1b99c7e22b2890'
    }

    /**
     * Some XCM failed.
     */
    get asV1201(): [(Uint8Array | undefined), v1201.V2Error] {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV1300(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === '639070abee49a6419e897939fc5b761d561a52efc062a7f1a1183b543e786999'
    }

    /**
     * Some XCM failed.
     */
    get asV1300(): [(Uint8Array | undefined), v1300.V2Error] {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === '8ca5252e46336e4c6a7bffc1927807bb885a90bad49951c5e832eda183f4d365'
    }

    /**
     * Some XCM failed.
     */
    get asV1802(): {messageHash: (Uint8Array | undefined), error: v1802.V2Error, weight: bigint} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'd72a6fdcbedea7017572a7b9b1b30fb50d753160a20111c371f00be9c05691c2'
    }

    /**
     * Some XCM failed.
     */
    get asV1901(): {messageHash: (Uint8Array | undefined), error: v1901.V2Error, weight: v1901.Weight} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'decc5a8e77a358e7b33575a65892e5dedbe76a99a126bf560347fcea7818d5b0'
    }

    /**
     * Some XCM failed.
     */
    get asV2000(): {messageHash: (Uint8Array | undefined), error: v2000.V2Error, weight: v2000.Weight} {
        assert(this.isV2000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV2302(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'add7b9cc246aa92449c7315a345573f307df55cd0b7e472982a726f0e1757cf0'
    }

    /**
     * Some XCM failed.
     */
    get asV2302(): {messageHash: (Uint8Array | undefined), error: v2302.V3Error, weight: v2302.Weight} {
        assert(this.isV2302)
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
    get isV1300(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === 'ebfdd28144c52e3beb9a90e53e214e90e6114fc4d52e2c572b7e0a2e8c303bd5'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV1300(): [number, number, bigint, bigint] {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '66fcd6ac0f8478601d6008edf04a5f6e1988dad34d2e67484bc112967caeddbb'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV1802(): {sender: number, sentAt: number, index: bigint, required: bigint} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '067a3a3aa8ee6726ecb8bf35ab307ac7566fec3acc2a84c25854711f6279d584'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV1901(): {sender: number, sentAt: number, index: bigint, required: v1901.Weight} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '2ab73de7ff203da5932102451076b4fa8c2ccd8d1073f98653bf4d6f0c768abb'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV2000(): {sender: number, sentAt: number, index: bigint, required: v2000.Weight} {
        assert(this.isV2000)
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
    get isV1300(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV1300(): [bigint, bigint] {
        assert(this.isV1300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '6de49eae2a9c6e3c2fecdcc4baff436b4272b874de79a1f9f8955ca81e9f47bb'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV1802(): {index: bigint, used: bigint} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '05c4258fc96a5477a2e7d79afbaae99e134fdf08770b5619a826272ad1e82c22'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV1901(): {index: bigint, used: v1901.Weight} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '329a8814d84fbfabe17575c913cc1d0e29db3f8ce21b25c6e90d9e54913d763b'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV2000(): {index: bigint, used: v2000.Weight} {
        assert(this.isV2000)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV1201(): (Uint8Array | undefined) {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM was executed ok.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === '70e4953d4755440ebd53ef8a5482ada34f27cd1aac56b0493142d711aebc0e85'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV1802(): {messageHash: (Uint8Array | undefined), weight: bigint} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM was executed ok.
     */
    get isV1901(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === '305c23f5c5645b4330237519e6b8fa038af5dfc624c8dd8e1de3b97b6e51faf4'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV1901(): {messageHash: (Uint8Array | undefined), weight: v1901.Weight} {
        assert(this.isV1901)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM was executed ok.
     */
    get isV2000(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === 'b84e46a58fb78d04c8748c4d236302e83484bfad9ec3579aa4e8f336f0efaca8'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV2000(): {messageHash: (Uint8Array | undefined), weight: v2000.Weight} {
        assert(this.isV2000)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get asV1201(): (Uint8Array | undefined) {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get asV1802(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV1802)
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
    get isV1201(): boolean {
        return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get asV1201(): (Uint8Array | undefined) {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get isV1802(): boolean {
        return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get asV1802(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV1802)
        return this._chain.decodeEvent(this.event)
    }
}
