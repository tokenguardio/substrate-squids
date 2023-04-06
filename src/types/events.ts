import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v31 from './v31'
import * as v38 from './v38'
import * as v45 from './v45'
import * as v53 from './v53'

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
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.ApprovalCancelled') === '03e56e43c10528fbfc2d67a1fdd2c4539504a6ea3132d8279f092b726632754c'
    }

    /**
     * An approval for account `delegate` was cancelled by `owner`.
     */
    get asV53(): {assetId: number, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.ApprovedTransfer') === '9c17451827f527febed49d3a9b898b16b42cfd44f6c5132492cf96160c55112d'
    }

    /**
     * (Additional) funds have been approved for transfer to a destination account.
     */
    get asV53(): {assetId: number, source: Uint8Array, delegate: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.AssetFrozen') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
    }

    /**
     * Some asset `asset_id` was frozen.
     */
    get asV53(): {assetId: number} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.AssetStatusChanged') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
    }

    /**
     * An asset has had its attributes changed by the `Force` origin.
     */
    get asV53(): {assetId: number} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.AssetThawed') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
    }

    /**
     * Some asset `asset_id` was thawed.
     */
    get asV53(): {assetId: number} {
        assert(this.isV53)
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
     *  Some assets were destroyed. \[asset_id, owner, balance\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Assets.Burned') === '5a42f36466a84f545ee1a3330dbd7108a20dc2c22012110bbe8ff0aff5bc6309'
    }

    /**
     *  Some assets were destroyed. \[asset_id, owner, balance\]
     */
    get asV45(): [number, Uint8Array, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were destroyed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.Burned') === '78773d01ac5de6d32c710af4ccf42fde9d501974d7d449538a51eeb1cd7b0824'
    }

    /**
     * Some assets were destroyed.
     */
    get asV53(): {assetId: number, owner: Uint8Array, balance: bigint} {
        assert(this.isV53)
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
     *  Some asset class was created. \[asset_id, creator, owner\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Assets.Created') === 'f968eb148e0dc7739feb64d5c72eea0de823dbf44259d08f9a6218f8117bf19a'
    }

    /**
     *  Some asset class was created. \[asset_id, creator, owner\]
     */
    get asV45(): [number, Uint8Array, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some asset class was created.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.Created') === '01c5b4c489f75602f5b4533c646777ff8677cd64a0cd24ad19aaa7193c001974'
    }

    /**
     * Some asset class was created.
     */
    get asV53(): {assetId: number, creator: Uint8Array, owner: Uint8Array} {
        assert(this.isV53)
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
     *  Some assets were destroyed. \[asset_id, owner, balance\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Assets.Destroyed') === '5a42f36466a84f545ee1a3330dbd7108a20dc2c22012110bbe8ff0aff5bc6309'
    }

    /**
     *  Some assets were destroyed. \[asset_id, owner, balance\]
     */
    get asV41(): [number, Uint8Array, bigint] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  An asset class was destroyed.
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Assets.Destroyed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  An asset class was destroyed.
     */
    get asV45(): number {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An asset class was destroyed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.Destroyed') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
    }

    /**
     * An asset class was destroyed.
     */
    get asV53(): {assetId: number} {
        assert(this.isV53)
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
     *  Some asset class was force-created. \[asset_id, owner\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Assets.ForceCreated') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Some asset class was force-created. \[asset_id, owner\]
     */
    get asV45(): [number, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some asset class was force-created.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.ForceCreated') === '282af926068c862d990c6860efc77d13688c62323eee89a0ff55df22fc3daffb'
    }

    /**
     * Some asset class was force-created.
     */
    get asV53(): {assetId: number, owner: Uint8Array} {
        assert(this.isV53)
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
     *  Some account `who` was frozen. \[asset_id, who\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Assets.Frozen') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Some account `who` was frozen. \[asset_id, who\]
     */
    get asV45(): [number, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some account `who` was frozen.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.Frozen') === '29f48097267d9c17a862db4feed96968aaccbc735ba9e4e1ed85812507045cbb'
    }

    /**
     * Some account `who` was frozen.
     */
    get asV53(): {assetId: number, who: Uint8Array} {
        assert(this.isV53)
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
     *  Some assets were issued. \[asset_id, owner, total_supply\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Assets.Issued') === '5a42f36466a84f545ee1a3330dbd7108a20dc2c22012110bbe8ff0aff5bc6309'
    }

    /**
     *  Some assets were issued. \[asset_id, owner, total_supply\]
     */
    get asV41(): [number, Uint8Array, bigint] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were issued.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.Issued') === '17a4ca370b9f5e201a3d0e8b7a0e39ea07cba579eb487a2e251512f421a785ca'
    }

    /**
     * Some assets were issued.
     */
    get asV53(): {assetId: number, owner: Uint8Array, totalSupply: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetsMaxZombiesChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Assets.MaxZombiesChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The maximum amount of zombies allowed has changed. \[asset_id, max_zombies\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Assets.MaxZombiesChanged') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     *  The maximum amount of zombies allowed has changed. \[asset_id, max_zombies\]
     */
    get asV45(): [number, number] {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.MetadataCleared') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
    }

    /**
     * Metadata has been cleared for an asset.
     */
    get asV53(): {assetId: number} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.MetadataSet') === '70e50f56e329151cd6ac15f45bb6a69c66f668bf4a5fd0b33a5e87b09e296498'
    }

    /**
     * New metadata has been set for an asset.
     */
    get asV53(): {assetId: number, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
        assert(this.isV53)
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
     *  The owner changed \[asset_id, owner\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Assets.OwnerChanged') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  The owner changed \[asset_id, owner\]
     */
    get asV45(): [number, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The owner changed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.OwnerChanged') === '282af926068c862d990c6860efc77d13688c62323eee89a0ff55df22fc3daffb'
    }

    /**
     * The owner changed.
     */
    get asV53(): {assetId: number, owner: Uint8Array} {
        assert(this.isV53)
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
     *  The management team changed \[asset_id, issuer, admin, freezer\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Assets.TeamChanged') === '608cf8b84887966db26c958a6b826fd41d8e098263ce7eaae9a421f1f8b1bd56'
    }

    /**
     *  The management team changed \[asset_id, issuer, admin, freezer\]
     */
    get asV45(): [number, Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The management team changed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.TeamChanged') === 'a4b3b1ea6aeb9cd592ffdda2f65983c16c73356bc6d83cc839a7f7a15f9a5a7b'
    }

    /**
     * The management team changed.
     */
    get asV53(): {assetId: number, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
        assert(this.isV53)
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
     *  Some account `who` was thawed. \[asset_id, who\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Assets.Thawed') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  Some account `who` was thawed. \[asset_id, who\]
     */
    get asV45(): [number, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some account `who` was thawed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.Thawed') === '29f48097267d9c17a862db4feed96968aaccbc735ba9e4e1ed85812507045cbb'
    }

    /**
     * Some account `who` was thawed.
     */
    get asV53(): {assetId: number, who: Uint8Array} {
        assert(this.isV53)
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
     *  Some assets were transferred. \[asset_id, from, to, amount\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Assets.Transferred') === '5940cf5f83945a6024e99655f1979c05762583b5af1201dba66c10c18b56cff1'
    }

    /**
     *  Some assets were transferred. \[asset_id, from, to, amount\]
     */
    get asV41(): [number, Uint8Array, Uint8Array, bigint] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets were transferred.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.Transferred') === '453cd6e775e78f378a5d66f79fecc2d72573823f29af590ee0d881b3680963a7'
    }

    /**
     * Some assets were transferred.
     */
    get asV53(): {assetId: number, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Assets.TransferredApproved') === '53d986e1d6ea25a7a7c4b99d89d06df8d3086fdeba885e5042a1acfa77947476'
    }

    /**
     * An `amount` was transferred in its entirety from `owner` to `destination` by
     * the approved `delegate`.
     */
    get asV53(): {assetId: number, owner: Uint8Array, delegate: Uint8Array, destination: Uint8Array, amount: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class BagsListRebaggedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BagsList.Rebagged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Moved an account from one bag to another.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('BagsList.Rebagged') === '7c6f9f7c01916b66130aa25ffe6ba9b00599c0af74b1238a9876c164819dde4e'
    }

    /**
     * Moved an account from one bag to another.
     */
    get asV53(): {who: Uint8Array, from: bigint, to: bigint} {
        assert(this.isV53)
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
     *  A balance was set by root (who, free, reserved).
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  A balance was set by root (who, free, reserved).
     */
    get asV31(): [Uint8Array, bigint, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
    }

    /**
     * A balance was set by root.
     */
    get asV53(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV53)
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
     *  Some amount was deposited (e.g. for transaction fees).
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some amount was deposited (e.g. for transaction fees).
     */
    get asV31(): [Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV53(): {who: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
     *  resulting in an outright loss.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss.
     */
    get asV38(): [Uint8Array, bigint] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV53(): {account: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
     *  An account was created with some free balance.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was created with some free balance.
     */
    get asV38(): [Uint8Array, bigint] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asV53(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesNewAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.NewAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new account was created.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Balances.NewAccount') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A new account was created.
     */
    get asV31(): [Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReapedAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.ReapedAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account was reaped.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Balances.ReapedAccount') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was reaped.
     */
    get asV31(): [Uint8Array, bigint] {
        assert(this.isV31)
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
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '68e9ec5664c8ffe977da0c890bac43122a5cf13565c1c936e2120ba4980bcf31'
    }

    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     */
    get asV38(): [Uint8Array, Uint8Array, bigint, v38.BalanceStatus] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV53(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v53.BalanceStatus} {
        assert(this.isV53)
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
     *  Some balance was reserved (moved from free to reserved).
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was reserved (moved from free to reserved).
     */
    get asV38(): [Uint8Array, bigint] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV53(): {who: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV53(): {who: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
     *  Transfer succeeded (from, to, value, fees).
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '72e6f0d399a72f77551d560f52df25d757e0643d0192b3bc837cbd91b6f36b27'
    }

    /**
     *  Transfer succeeded (from, to, value, fees).
     */
    get asV31(): [Uint8Array, Uint8Array, bigint, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Transfer succeeded (from, to, value).
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Transfer succeeded (from, to, value).
     */
    get asV38(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV53(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
     *  Some balance was unreserved (moved from reserved to free).
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was unreserved (moved from reserved to free).
     */
    get asV38(): [Uint8Array, bigint] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV53(): {who: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV53(): {who: Uint8Array, amount: bigint} {
        assert(this.isV53)
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

    get isV53(): boolean {
        return this._chain.getEventHash('BaseFee.BaseFeeOverflow') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV53(): null {
        assert(this.isV53)
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

    get isV53(): boolean {
        return this._chain.getEventHash('BaseFee.IsActive') === 'ab01a9c748aa3cbaea79085d7fc05c23416224e2cbe4d301feea3f8143c67da0'
    }

    get asV53(): boolean {
        assert(this.isV53)
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

    get isV53(): boolean {
        return this._chain.getEventHash('BaseFee.NewBaseFeePerGas') === '6d9ead7bacbcc31865a36167f18b025b998f3de12411a9e26649a9a646df87fb'
    }

    get asV53(): bigint {
        assert(this.isV53)
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

    get isV53(): boolean {
        return this._chain.getEventHash('BaseFee.NewElasticity') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    get asV53(): number {
        assert(this.isV53)
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
     *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Bounties.BountyAwarded') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
     */
    get asV45(): [number, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get asV53(): {index: number, beneficiary: Uint8Array} {
        assert(this.isV53)
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
     *  A bounty proposal is funded and became active. \[index\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Bounties.BountyBecameActive') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty proposal is funded and became active. \[index\]
     */
    get asV45(): number {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get asV53(): {index: number} {
        assert(this.isV53)
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
     *  A bounty is cancelled. \[index\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Bounties.BountyCanceled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty is cancelled. \[index\]
     */
    get asV45(): number {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty is cancelled.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty is cancelled.
     */
    get asV53(): {index: number} {
        assert(this.isV53)
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
     *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Bounties.BountyClaimed') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
    }

    /**
     *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
     */
    get asV45(): [number, bigint, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get asV53(): {index: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isV53)
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
     *  A bounty expiry is extended. \[index\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Bounties.BountyExtended') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty expiry is extended. \[index\]
     */
    get asV45(): number {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty expiry is extended.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty expiry is extended.
     */
    get asV53(): {index: number} {
        assert(this.isV53)
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
     *  New bounty proposal. \[index\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Bounties.BountyProposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New bounty proposal. \[index\]
     */
    get asV45(): number {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New bounty proposal.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * New bounty proposal.
     */
    get asV53(): {index: number} {
        assert(this.isV53)
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
     *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Bounties.BountyRejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
     */
    get asV45(): [number, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get asV53(): {index: number, bond: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeChainWhitelistedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.ChainWhitelisted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Chain now available for transfers (chain_id)
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.ChainWhitelisted') === '3db3753dcff7ca8b313d91fce9f0cd33b8f6c491f0697e71d850b62d343b9faf'
    }

    /**
     *  Chain now available for transfers (chain_id)
     */
    get asV45(): number {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeFungibleTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.FungibleTransfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  FunglibleTransfer is for relaying fungibles (dest_id, nonce, resource_id, amount, recipient, metadata)
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.FungibleTransfer') === '82176b9430ed66c4f9119bdf783faf311a63d2daa6dc300075ceb8dce1401f20'
    }

    /**
     *  FunglibleTransfer is for relaying fungibles (dest_id, nonce, resource_id, amount, recipient, metadata)
     */
    get asV45(): [number, bigint, Uint8Array, bigint, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeGenericTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.GenericTransfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  GenericTransfer is for a generic data payload (dest_id, nonce, resource_id, metadata)
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.GenericTransfer') === 'f8558bbb49e05548f45415edf0e606b97ab31bfe33de061b73661cbe94b418e8'
    }

    /**
     *  GenericTransfer is for a generic data payload (dest_id, nonce, resource_id, metadata)
     */
    get asV45(): [number, bigint, Uint8Array, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeNonFungibleTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.NonFungibleTransfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  NonFungibleTransfer is for relaying NFTS (dest_id, nonce, resource_id, token_id, recipient, metadata)
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.NonFungibleTransfer') === '9e6ab715c87de9483db3bb3a5b45610fd3adec13b95e44128170fdb4633eb761'
    }

    /**
     *  NonFungibleTransfer is for relaying NFTS (dest_id, nonce, resource_id, token_id, recipient, metadata)
     */
    get asV45(): [number, bigint, Uint8Array, Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeProposalApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.ProposalApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Voting successful for a proposal
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.ProposalApproved') === 'a085cf5535765cca63a6b10365d7841e635dda830d9ff182ee31acf4ea7fd3a7'
    }

    /**
     *  Voting successful for a proposal
     */
    get asV45(): [number, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeProposalFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.ProposalFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Execution of call failed
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.ProposalFailed') === 'a085cf5535765cca63a6b10365d7841e635dda830d9ff182ee31acf4ea7fd3a7'
    }

    /**
     *  Execution of call failed
     */
    get asV45(): [number, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeProposalRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.ProposalRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Voting rejected a proposal
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.ProposalRejected') === 'a085cf5535765cca63a6b10365d7841e635dda830d9ff182ee31acf4ea7fd3a7'
    }

    /**
     *  Voting rejected a proposal
     */
    get asV45(): [number, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeProposalSucceededEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.ProposalSucceeded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Execution of call succeeded
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.ProposalSucceeded') === 'a085cf5535765cca63a6b10365d7841e635dda830d9ff182ee31acf4ea7fd3a7'
    }

    /**
     *  Execution of call succeeded
     */
    get asV45(): [number, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeRelayerAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.RelayerAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Relayer added to set
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.RelayerAdded') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Relayer added to set
     */
    get asV45(): Uint8Array {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeRelayerRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.RelayerRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Relayer removed from set
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.RelayerRemoved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Relayer removed from set
     */
    get asV45(): Uint8Array {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeRelayerThresholdChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.RelayerThresholdChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Vote threshold has changed (new_threshold)
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.RelayerThresholdChanged') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  Vote threshold has changed (new_threshold)
     */
    get asV45(): number {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeVoteAgainstEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.VoteAgainst')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Vot submitted against proposal
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.VoteAgainst') === '7fa5d29f854993f457932e452b98db68612686844fe7cf2431e583f724e165b5'
    }

    /**
     *  Vot submitted against proposal
     */
    get asV45(): [number, bigint, Uint8Array] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChainBridgeVoteForEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChainBridge.VoteFor')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Vote submitted in favour of proposal
     */
    get isV45(): boolean {
        return this._chain.getEventHash('ChainBridge.VoteFor') === '7fa5d29f854993f457932e452b98db68612686844fe7cf2431e583f724e165b5'
    }

    /**
     *  Vote submitted in favour of proposal
     */
    get asV45(): [number, bigint, Uint8Array] {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Contracts.CodeRemoved') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * A code with the specified hash was removed.
     */
    get asV53(): {codeHash: Uint8Array} {
        assert(this.isV53)
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
     *  Code with the specified hash has been stored.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Contracts.CodeStored') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Code with the specified hash has been stored.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Code with the specified hash has been stored.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Contracts.CodeStored') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * Code with the specified hash has been stored.
     */
    get asV53(): {codeHash: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Contracts.ContractCodeUpdated') === 'f9de6decda4961d31d7cf59e3f8acd4849a220323ebabbb036464d999de54c18'
    }

    /**
     * A contract's code was updated.
     */
    get asV53(): {contract: Uint8Array, newCodeHash: Uint8Array, oldCodeHash: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Contracts.ContractEmitted') === '7f28393268795b9a97f05e82911cdcc4200d99e9968c1ab6a564f949f753b929'
    }

    /**
     * A custom event emitted by the contract.
     */
    get asV53(): {contract: Uint8Array, data: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsContractExecutionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.ContractExecution')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An event deposited upon execution of a contract from the account.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Contracts.ContractExecution') === '15a3ff7f9477a0e9afa431990d912c8024d507c02d31c44934807bcebbbd3adf'
    }

    /**
     *  An event deposited upon execution of a contract from the account.
     */
    get asV31(): [Uint8Array, Uint8Array] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.Dispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A call was dispatched from the given account. The bool signals whether it was
     *  successful execution or not.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Contracts.Dispatched') === '3e84284a56e2d90e928c790a4788cf7ee237d5a6d76716a3e8584e3dcc0319a0'
    }

    /**
     *  A call was dispatched from the given account. The bool signals whether it was
     *  successful execution or not.
     */
    get asV31(): [Uint8Array, boolean] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsEvictedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.Evicted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Contract has been evicted and is now in tombstone state.
     * 
     *  # Params
     * 
     *  - `contract`: `AccountId`: The account ID of the evicted contract.
     *  - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Contracts.Evicted') === '3e84284a56e2d90e928c790a4788cf7ee237d5a6d76716a3e8584e3dcc0319a0'
    }

    /**
     *  Contract has been evicted and is now in tombstone state.
     * 
     *  # Params
     * 
     *  - `contract`: `AccountId`: The account ID of the evicted contract.
     *  - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
     */
    get asV31(): [Uint8Array, boolean] {
        assert(this.isV31)
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
     *  Contract deployed by address at the specified address.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Contracts.Instantiated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  Contract deployed by address at the specified address.
     */
    get asV31(): [Uint8Array, Uint8Array] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Contract deployed by address at the specified address.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Contracts.Instantiated') === '20f9f9057a4149f58eb48c00359f9800a42b51d4d2168437dfcce668c27a8d37'
    }

    /**
     * Contract deployed by address at the specified address.
     */
    get asV53(): {deployer: Uint8Array, contract: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsRestoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.Restored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Restoration for a contract has been initiated.
     * 
     *  # Params
     * 
     *  - `donor`: `AccountId`: Account ID of the restoring contract
     *  - `dest`: `AccountId`: Account ID of the restored contract
     *  - `code_hash`: `Hash`: Code hash of the restored contract
     *  - `rent_allowance: `Balance`: Rent allowance of the restored contract
     *  - `success`: `bool`: True if the restoration was successful
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Contracts.Restored') === '6b01e48d9853b2746550076e2886b92a65767029c6ece21478c2007dba978053'
    }

    /**
     *  Restoration for a contract has been initiated.
     * 
     *  # Params
     * 
     *  - `donor`: `AccountId`: Account ID of the restoring contract
     *  - `dest`: `AccountId`: Account ID of the restored contract
     *  - `code_hash`: `Hash`: Code hash of the restored contract
     *  - `rent_allowance: `Balance`: Rent allowance of the restored contract
     *  - `success`: `bool`: True if the restoration was successful
     */
    get asV31(): [Uint8Array, Uint8Array, Uint8Array, bigint, boolean] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Restoration for a contract has been successful.
     * 
     *  # Params
     * 
     *  - `donor`: `AccountId`: Account ID of the restoring contract
     *  - `dest`: `AccountId`: Account ID of the restored contract
     *  - `code_hash`: `Hash`: Code hash of the restored contract
     *  - `rent_allowance: `Balance`: Rent allowance of the restored contract
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Contracts.Restored') === 'a4260d0f93501b9acbb0b39a480f185d20afb97b362a5ae9f20dcbe9b4fabf45'
    }

    /**
     *  Restoration for a contract has been successful.
     * 
     *  # Params
     * 
     *  - `donor`: `AccountId`: Account ID of the restoring contract
     *  - `dest`: `AccountId`: Account ID of the restored contract
     *  - `code_hash`: `Hash`: Code hash of the restored contract
     *  - `rent_allowance: `Balance`: Rent allowance of the restored contract
     */
    get asV38(): [Uint8Array, Uint8Array, Uint8Array, bigint] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsScheduleUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.ScheduleUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Triggered when the current schedule is updated.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Contracts.ScheduleUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  Triggered when the current schedule is updated.
     */
    get asV31(): number {
        assert(this.isV31)
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
    get isV53(): boolean {
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
    get asV53(): {contract: Uint8Array, beneficiary: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ContractsTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Contracts.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Transfer happened `from` to `to` with given `value` as part of a `call` or `instantiate`.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Contracts.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Transfer happened `from` to `to` with given `value` as part of a `call` or `instantiate`.
     */
    get asV31(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV31)
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
     *  A motion was approved by the required threshold.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Council.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was approved by the required threshold.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV53(): {proposalHash: Uint8Array} {
        assert(this.isV53)
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
     *  A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Council.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV38(): [Uint8Array, number, number] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV53(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV53)
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
     *  A motion was not approved by the required threshold.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was not approved by the required threshold.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV53(): {proposalHash: Uint8Array} {
        assert(this.isV53)
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
     *  A motion was executed; `bool` is true if returned without error.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Council.Executed') === '3e84284a56e2d90e928c790a4788cf7ee237d5a6d76716a3e8584e3dcc0319a0'
    }

    /**
     *  A motion was executed; `bool` is true if returned without error.
     */
    get asV31(): [Uint8Array, boolean] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV38(): [Uint8Array, v38.DispatchResult] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV53(): {proposalHash: Uint8Array, result: v53.Type_28} {
        assert(this.isV53)
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
     *  A single member did some action; `bool` is true if returned without error.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === '3e84284a56e2d90e928c790a4788cf7ee237d5a6d76716a3e8584e3dcc0319a0'
    }

    /**
     *  A single member did some action; `bool` is true if returned without error.
     */
    get asV31(): [Uint8Array, boolean] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV38(): [Uint8Array, v38.DispatchResult] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV53(): {proposalHash: Uint8Array, result: v53.Type_28} {
        assert(this.isV53)
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
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     */
    get asV31(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV53(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV53)
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
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Council.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV31(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV53(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV53)
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
     *  A proposal \[hash\] has been blacklisted permanently.
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A proposal \[hash\] has been blacklisted permanently.
     */
    get asV45(): Uint8Array {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get asV53(): {proposalHash: Uint8Array} {
        assert(this.isV53)
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
     *  A referendum has been cancelled.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A referendum has been cancelled.
     */
    get asV31(): number {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has been cancelled.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV53(): {refIndex: number} {
        assert(this.isV53)
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
     *  An account has delegated their vote to another account.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  An account has delegated their vote to another account.
     */
    get asV31(): [Uint8Array, Uint8Array] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has delegated their vote to another account.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
    }

    /**
     * An account has delegated their vote to another account.
     */
    get asV53(): {who: Uint8Array, target: Uint8Array} {
        assert(this.isV53)
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
     *  A proposal has been enacted.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
    }

    /**
     *  A proposal has been enacted.
     */
    get asV31(): [number, boolean] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '957b797337eaa1f370b65a94f7685042cc04730ba165349e248cfdde80b53c25'
    }

    /**
     * A proposal has been enacted.
     */
    get asV53(): {refIndex: number, result: v53.Type_28} {
        assert(this.isV53)
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
     *  An external proposal has been tabled.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  An external proposal has been tabled.
     */
    get asV31(): null {
        assert(this.isV31)
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
     *  A proposal has been rejected by referendum.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A proposal has been rejected by referendum.
     */
    get asV31(): number {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV53(): {refIndex: number} {
        assert(this.isV53)
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
     *  A proposal has been approved by referendum.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A proposal has been approved by referendum.
     */
    get asV31(): number {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been approved by referendum.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asV53(): {refIndex: number} {
        assert(this.isV53)
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
     *  A proposal could not be executed because its preimage was invalid.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A proposal could not be executed because its preimage was invalid.
     */
    get asV31(): [Uint8Array, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get asV53(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV53)
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
     *  A proposal could not be executed because its preimage was missing.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A proposal could not be executed because its preimage was missing.
     */
    get asV31(): [Uint8Array, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get asV53(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV53)
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
     *  A proposal's preimage was noted, and the deposit taken.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A proposal's preimage was noted, and the deposit taken.
     */
    get asV31(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get asV53(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
        assert(this.isV53)
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
     *  A registered preimage was removed and the deposit collected by the reaper (last item).
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === 'b60e8c24758d2dae6f1d75c508a3141a304f756181262747ee8d704bd555ac86'
    }

    /**
     *  A registered preimage was removed and the deposit collected by the reaper (last item).
     */
    get asV31(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get asV53(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
        assert(this.isV53)
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
     *  A proposal preimage was removed and used (the deposit was returned).
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A proposal preimage was removed and used (the deposit was returned).
     */
    get asV31(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get asV53(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
        assert(this.isV53)
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
     *  A motion has been proposed by a public account.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A motion has been proposed by a public account.
     */
    get asV31(): [number, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion has been proposed by a public account.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asV53(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
    }

    /**
     * An account has secconded a proposal
     */
    get asV53(): {seconder: Uint8Array, propIndex: number} {
        assert(this.isV53)
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
     *  A referendum has begun.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
    }

    /**
     *  A referendum has begun.
     */
    get asV31(): [number, v31.VoteThreshold] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has begun.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asV53(): {refIndex: number, threshold: v53.VoteThreshold} {
        assert(this.isV53)
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
     *  A public proposal has been tabled for referendum vote.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '21f3d10122d183ae1df61d3456ae07c362a2e0cdffab1829f4febb4f7b53f6bd'
    }

    /**
     *  A public proposal has been tabled for referendum vote.
     */
    get asV31(): [number, bigint, Uint8Array[]] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV53(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
        assert(this.isV53)
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
     *  An account has cancelled a previous delegation operation.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account has cancelled a previous delegation operation.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get asV53(): {account: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyUnlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Unlocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account has been unlocked successfully.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.Unlocked') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account has been unlocked successfully.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
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
     *  An external proposal has been vetoed.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '64ac8a943d1fe7bd7a24f0e53a57114f1d7eb2c98c411ff4d06daf824de450a7'
    }

    /**
     *  An external proposal has been vetoed.
     */
    get asV31(): [Uint8Array, Uint8Array, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An external proposal has been vetoed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '8c436495ac4c75fd20d25b6b1c1b2bbebbea576444eac1b5b7b15ecb833e5c4f'
    }

    /**
     * An external proposal has been vetoed.
     */
    get asV53(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
    }

    /**
     * An account has voted in a referendum
     */
    get asV53(): {voter: Uint8Array, refIndex: number, vote: v53.AccountVote} {
        assert(this.isV53)
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
     *  A deposit has been made at a given address. \[sender, address, value\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('EVM.BalanceDeposit') === 'd9b1f7a4397a223baaf288e10404ee5442e38bc06f4d40d247036102327f164e'
    }

    /**
     *  A deposit has been made at a given address. \[sender, address, value\]
     */
    get asV45(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV45)
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
     *  A withdrawal has been made from a given address. \[sender, address, value\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('EVM.BalanceWithdraw') === 'd9b1f7a4397a223baaf288e10404ee5442e38bc06f4d40d247036102327f164e'
    }

    /**
     *  A withdrawal has been made from a given address. \[sender, address, value\]
     */
    get asV45(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV45)
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
     *  A contract has been created at given \[address\].
     */
    get isV45(): boolean {
        return this._chain.getEventHash('EVM.Created') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     *  A contract has been created at given \[address\].
     */
    get asV45(): Uint8Array {
        assert(this.isV45)
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
     *  A \[contract\] was attempted to be created, but the execution failed.
     */
    get isV45(): boolean {
        return this._chain.getEventHash('EVM.CreatedFailed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     *  A \[contract\] was attempted to be created, but the execution failed.
     */
    get asV45(): Uint8Array {
        assert(this.isV45)
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
     *  A \[contract\] has been executed successfully with states applied.
     */
    get isV45(): boolean {
        return this._chain.getEventHash('EVM.Executed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     *  A \[contract\] has been executed successfully with states applied.
     */
    get asV45(): Uint8Array {
        assert(this.isV45)
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
     *  A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
     */
    get isV45(): boolean {
        return this._chain.getEventHash('EVM.ExecutedFailed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     *  A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
     */
    get asV45(): Uint8Array {
        assert(this.isV45)
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
     *  Ethereum events from contracts.
     */
    get isV45(): boolean {
        return this._chain.getEventHash('EVM.Log') === '9d15dce6e6d818eeb73a868dd136a22667fbfdd27463a338b39cabae62aa4a12'
    }

    /**
     *  Ethereum events from contracts.
     */
    get asV45(): v45.EvmLog {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class EdgeBridgeTransferOverBridgeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EdgeBridge.TransferOverBridge')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bridge transfer event from an Edgeware account to a destination account
     */
    get isV45(): boolean {
        return this._chain.getEventHash('EdgeBridge.TransferOverBridge') === '131f40710d8867f6e1b266befcbf10029f3e2cb1c0bce3a30608173ca8c683d8'
    }

    /**
     *  A bridge transfer event from an Edgeware account to a destination account
     */
    get asV45(): [Uint8Array, Uint8Array, number, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseElectionFinalizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.ElectionFinalized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFinalized') === 'd5e51cdb9bc2ebeb883517f810340524dcf71a9a43a1f33048bda8bd8170c4dc'
    }

    /**
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    get asV53(): {electionCompute: (v53.ElectionCompute | undefined)} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Rewarded') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get asV53(): {account: Uint8Array, value: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSignedPhaseStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.SignedPhaseStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The signed phase of the given round has started.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SignedPhaseStarted') === 'd89ab9d594e1e03a0c162ea44af35fd5f31a6e7f82a4941cac8b4bdc1e2cdeb3'
    }

    /**
     * The signed phase of the given round has started.
     */
    get asV53(): {round: number} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Slashed') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get asV53(): {account: Uint8Array, value: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSolutionStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.SolutionStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === '4023ddb4e5fc71e0a0d9479091f55fc4d7cdcefdd7ed5f2ba18b799eba527399'
    }

    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get asV53(): {electionCompute: v53.ElectionCompute, prevEjected: boolean} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseUnsignedPhaseStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.UnsignedPhaseStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The unsigned phase of the given round has started.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.UnsignedPhaseStarted') === 'd89ab9d594e1e03a0c162ea44af35fd5f31a6e7f82a4941cac8b4bdc1e2cdeb3'
    }

    /**
     * The unsigned phase of the given round has started.
     */
    get asV53(): {round: number} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsCandidateSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Elections.CandidateSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A candidate was slashed due to failing to obtain a seat as member or runner-up
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Elections.CandidateSlashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A candidate was slashed due to failing to obtain a seat as member or runner-up
     */
    get asV45(): [Uint8Array, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsElectionErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Elections.ElectionError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Internal error happened while trying to perform election.
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Elections.ElectionError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Internal error happened while trying to perform election.
     */
    get asV45(): null {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsEmptyTermEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Elections.EmptyTerm')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  No (or not enough) candidates existed for this round.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Elections.EmptyTerm') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  No (or not enough) candidates existed for this round.
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsMemberKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Elections.MemberKicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A member has been removed. This should always be followed by either `NewTerm` ot
     *  `EmptyTerm`.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Elections.MemberKicked') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A member has been removed. This should always be followed by either `NewTerm` ot
     *  `EmptyTerm`.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsMemberRenouncedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Elections.MemberRenounced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A member has renounced their candidacy.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Elections.MemberRenounced') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A member has renounced their candidacy.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsNewTermEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Elections.NewTerm')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new term with new members. This indicates that enough candidates existed, not that
     *  enough have has been elected. The inner value must be examined for this purpose.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Elections.NewTerm') === 'd7a45cf0fb3b6c39f6db66d04bddff68afaa850200debf915801414eda809fe1'
    }

    /**
     *  A new term with new members. This indicates that enough candidates existed, not that
     *  enough have has been elected. The inner value must be examined for this purpose.
     */
    get asV31(): [Uint8Array, bigint][] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsSeatHolderSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Elections.SeatHolderSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A seat holder (member or runner-up) was slashed due to failing to retaining their position.
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Elections.SeatHolderSlashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A seat holder (member or runner-up) was slashed due to failing to retaining their position.
     */
    get asV45(): [Uint8Array, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsVoterReportedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Elections.VoterReported')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A voter (first element) was reported (byt the second element) with the the report being
     *  successful or not (third element).
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Elections.VoterReported') === '297b1f9e3b7548d06cf345489141d90d9466aaad07e61033eb31d21c1babe5af'
    }

    /**
     *  A voter (first element) was reported (byt the second element) with the the report being
     *  successful or not (third element).
     */
    get asV31(): [Uint8Array, Uint8Array, boolean] {
        assert(this.isV31)
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
     *  An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '0c7eb5ef81fb6e87c05b96ed25f52c62fffc067198343642f01289fbb0011fce'
    }

    /**
     *  An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV45(): [Uint8Array, Uint8Array, Uint8Array, v45.ExitReason] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Ethereum.Executed') === '19a41316cbc97760af789cb1da772172d6a9f09521ee0e5e8f18125c1db318df'
    }

    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    get asV53(): [Uint8Array, Uint8Array, Uint8Array, v53.ExitReason] {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaNewAuthoritiesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.NewAuthorities')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  New authority set has been applied.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'a1a8c88e19b8fedde4aab1bef41aa9e1bdfc3748b1e39f7ad5bb09d0347d9505'
    }

    /**
     *  New authority set has been applied.
     */
    get asV31(): [Uint8Array, bigint][] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New authority set has been applied.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
    }

    /**
     * New authority set has been applied.
     */
    get asV53(): {authoritySet: [Uint8Array, bigint][]} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaPausedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Paused')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Current authority set has been paused.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Current authority set has been paused.
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaResumedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Resumed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Current authority set has been resumed.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Current authority set has been resumed.
     */
    get asV31(): null {
        assert(this.isV31)
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
     *  A name was cleared, and the given balance returned.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was cleared, and the given balance returned.
     */
    get asV31(): [Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asV53(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV53)
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
     *  A name was removed and the given balance slashed.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was removed and the given balance slashed.
     */
    get asV31(): [Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asV53(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV53)
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
     *  A name was set or reset (which will remove all judgements).
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A name was set or reset (which will remove all judgements).
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get asV53(): {who: Uint8Array} {
        assert(this.isV53)
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
     *  A judgement was given by a registrar.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement was given by a registrar.
     */
    get asV31(): [Uint8Array, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was given by a registrar.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
    }

    /**
     * A judgement was given by a registrar.
     */
    get asV53(): {target: Uint8Array, registrarIndex: number} {
        assert(this.isV53)
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
     *  A judgement was asked from a registrar.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement was asked from a registrar.
     */
    get asV31(): [Uint8Array, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was asked from a registrar.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement was asked from a registrar.
     */
    get asV53(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV53)
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
     *  A judgement request was retracted.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement request was retracted.
     */
    get asV31(): [Uint8Array, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement request was retracted.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement request was retracted.
     */
    get asV53(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV53)
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
     *  A registrar was added.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A registrar was added.
     */
    get asV31(): number {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registrar was added.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
    }

    /**
     * A registrar was added.
     */
    get asV53(): {registrarIndex: number} {
        assert(this.isV53)
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
    get isV41(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
     */
    get asV41(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get asV53(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV53)
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
    get isV41(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was removed from an identity and the deposit freed.
     *  \[sub, main, deposit\]
     */
    get asV41(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asV53(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV53)
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
    get isV41(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was cleared, and the given deposit repatriated from the
     *  main identity account to the sub-identity account. \[sub, main, deposit\]
     */
    get asV41(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asV53(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineAllGoodEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.AllGood')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  At the end of the session, no offence was committed.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('ImOnline.AllGood') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  At the end of the session, no offence was committed.
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineHeartbeatReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.HeartbeatReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new heartbeat was received from `AuthorityId`
     */
    get isV31(): boolean {
        return this._chain.getEventHash('ImOnline.HeartbeatReceived') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new heartbeat was received from `AuthorityId`
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('ImOnline.HeartbeatReceived') === 'f4f7db0d4947a3f194721945718633fbe38c2b20120d6b5be31252e30b822645'
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get asV53(): {authorityId: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineSomeOfflineEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.SomeOffline')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  At the end of the session, at least once validator was found to be offline.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('ImOnline.SomeOffline') === '15e6fe82a6ae2efb2b8a5fb32d03f1140dda1d88a982e280ae917cb281bd63e1'
    }

    /**
     *  At the end of the session, at least once validator was found to be offline.
     */
    get asV31(): [Uint8Array, v31.FullIdentification][] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('ImOnline.SomeOffline') === '380731177debd1bc7de2f37d39c5ffd9fc74a19f43f20c4319233aa9b5d971aa'
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get asV53(): {offline: [Uint8Array, v53.Exposure][]} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class IndicesIndexAssignedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Indices.IndexAssigned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A account index was assigned.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Indices.IndexAssigned') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A account index was assigned.
     */
    get asV38(): [Uint8Array, number] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A account index was assigned.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Indices.IndexAssigned') === '9b3d917cee3d7e2adf0a9df20e0bca9e5f81d6fb7f3c50084c4851608cd1a8f2'
    }

    /**
     * A account index was assigned.
     */
    get asV53(): {who: Uint8Array, index: number} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class IndicesIndexFreedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Indices.IndexFreed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A account index has been freed up (unassigned).
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Indices.IndexFreed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A account index has been freed up (unassigned).
     */
    get asV38(): number {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A account index has been freed up (unassigned).
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Indices.IndexFreed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A account index has been freed up (unassigned).
     */
    get asV53(): {index: number} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class IndicesIndexFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Indices.IndexFrozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A account index has been frozen to its current account ID.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Indices.IndexFrozen') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  A account index has been frozen to its current account ID.
     */
    get asV38(): [number, Uint8Array] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A account index has been frozen to its current account ID.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Indices.IndexFrozen') === 'a4b2a09a4b129b731502d8f49526603d4f98cc90af6286baad9f0cab57c26843'
    }

    /**
     * A account index has been frozen to its current account ID.
     */
    get asV53(): {index: number, who: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class IndicesNewAccountIndexEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Indices.NewAccountIndex')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new account index was assigned.
     * 
     *  This event is not triggered when an existing index is reassigned
     *  to another `AccountId`.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Indices.NewAccountIndex') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A new account index was assigned.
     * 
     *  This event is not triggered when an existing index is reassigned
     *  to another `AccountId`.
     */
    get asV31(): [Uint8Array, number] {
        assert(this.isV31)
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
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call.
     */
    get asV38(): [Uint8Array, v38.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asV53(): {approving: Uint8Array, timepoint: v53.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV53)
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
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account, fourth is hash of the call.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account, fourth is hash of the call.
     */
    get asV38(): [Uint8Array, v38.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been cancelled.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asV53(): {cancelling: Uint8Array, timepoint: v53.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV53)
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
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call to be executed.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === 'e368973d939e86d8e4639ec21b8ed877b5a6772f4da0bad0d4fe5df98c063ad2'
    }

    /**
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call to be executed.
     */
    get asV38(): [Uint8Array, v38.Timepoint, Uint8Array, Uint8Array, v38.DispatchResult] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '893c7ea80ff9b8edc0f0e804a754035301e2cf91cbfe60a5a7d0565bfa1c133e'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV53(): {approving: Uint8Array, timepoint: v53.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v53.Type_28} {
        assert(this.isV53)
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
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account, third is hash of the call.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account, third is hash of the call.
     */
    get asV38(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new multisig operation has begun.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    }

    /**
     * A new multisig operation has begun.
     */
    get asV53(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class NicksNameChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nicks.NameChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A name was changed.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Nicks.NameChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A name was changed.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class NicksNameClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nicks.NameCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A name was cleared, and the given balance returned.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Nicks.NameCleared') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was cleared, and the given balance returned.
     */
    get asV31(): [Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class NicksNameForcedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nicks.NameForced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A name was forcibly set.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Nicks.NameForced') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A name was forcibly set.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class NicksNameKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nicks.NameKilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A name was removed and the given balance slashed.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Nicks.NameKilled') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was removed and the given balance slashed.
     */
    get asV31(): [Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class NicksNameSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nicks.NameSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A name was set.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Nicks.NameSet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A name was set.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class OffencesOffenceEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Offences.Offence')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Offences.Offence') === 'fca31d079a02b9c3ee63d19bf39a4c783da99a317cdf2920b6c29e7d7d3d0518'
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
     */
    get asV31(): [Uint8Array, Uint8Array] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false).
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Offences.Offence') === '18f4beafc9fe74427abdec4798ff1f921e7eef3c6cdea8f8dc175b766343d5be'
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false).
     */
    get asV38(): [Uint8Array, Uint8Array, boolean] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Offences.Offence') === '5c9081474f836b1480d3d7cc7a09403e5d7f913d809fe792509e057c77a1ff4f'
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get asV53(): {kind: Uint8Array, timeslot: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class PhragmenElectionCandidateSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PhragmenElection.CandidateSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('PhragmenElection.CandidateSlashed') === 'a64270141b7a7c84c0950e5dcd31bc284b27b39505d278ff519f44f855ee33d8'
    }

    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    get asV53(): {candidate: Uint8Array, amount: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class PhragmenElectionElectionErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PhragmenElection.ElectionError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Internal error happened while trying to perform election.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('PhragmenElection.ElectionError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Internal error happened while trying to perform election.
     */
    get asV53(): null {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class PhragmenElectionEmptyTermEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PhragmenElection.EmptyTerm')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * No (or not enough) candidates existed for this round. This is different from
     * `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('PhragmenElection.EmptyTerm') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * No (or not enough) candidates existed for this round. This is different from
     * `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    get asV53(): null {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class PhragmenElectionMemberKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PhragmenElection.MemberKicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('PhragmenElection.MemberKicked') === '13de6e9f12582c043401d65d7388be083b4b273c04f13f132e51e1f673bee999'
    }

    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    get asV53(): {member: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class PhragmenElectionNewTermEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PhragmenElection.NewTerm')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('PhragmenElection.NewTerm') === 'c26c6ac673ee46db2001722c75880df159f382274469750dc468b868c6f738c8'
    }

    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    get asV53(): {newMembers: [Uint8Array, bigint][]} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class PhragmenElectionRenouncedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PhragmenElection.Renounced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone has renounced their candidacy.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('PhragmenElection.Renounced') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    /**
     * Someone has renounced their candidacy.
     */
    get asV53(): {candidate: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class PhragmenElectionSeatHolderSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PhragmenElection.SeatHolderSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('PhragmenElection.SeatHolderSlashed') === '7a1552e3cb4a3dc87408db4d42391f3a98998bb0e6bf70aa82661919c4d12eaa'
    }

    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    get asV53(): {seatHolder: Uint8Array, amount: bigint} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV53(): {hash: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV53(): {hash: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV53(): {hash: Uint8Array} {
        assert(this.isV53)
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
     *  An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Proxy.Announced') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     *  An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
     */
    get asV41(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Proxy.Announced') === '5c2546e4632bb75e839f990a33f7feb63fb5598747a25d3d09f23108c106abc4'
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get asV53(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
        assert(this.isV53)
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
     *  Anonymous account (first parameter) has been created by new proxy (second) with given
     *  disambiguation index and proxy type.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === '7f735d48b95d8cb7f9bce018df67015d38af20dd539dc63226822f3b676d682e'
    }

    /**
     *  Anonymous account (first parameter) has been created by new proxy (second) with given
     *  disambiguation index and proxy type.
     */
    get asV38(): [Uint8Array, Uint8Array, v38.ProxyType, number] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === '8e083695eefec93552fc51dee5a2ab21a296d0a776eba5648824c2761e7ede45'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV53(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v53.ProxyType, disambiguationIndex: number} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '217eaba122ed4199fef48feee5664bf7a7d8a2c2ec7f01ef25f35f01c0164b27'
    }

    /**
     * A proxy was added.
     */
    get asV53(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v53.ProxyType, delay: number} {
        assert(this.isV53)
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
     *  A proxy was executed correctly, with the given result.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A proxy was executed correctly, with the given result.
     */
    get asV38(): v38.DispatchResult {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV53(): {result: v53.Type_28} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === '217eaba122ed4199fef48feee5664bf7a7d8a2c2ec7f01ef25f35f01c0164b27'
    }

    /**
     * A proxy was removed.
     */
    get asV53(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v53.ProxyType, delay: number} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class RecoveryAccountRecoveredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Recovery.AccountRecovered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Account_1 has been successfully recovered by account_2
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Recovery.AccountRecovered') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  Account_1 has been successfully recovered by account_2
     */
    get asV38(): [Uint8Array, Uint8Array] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Lost account has been successfully recovered by rescuer account.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Recovery.AccountRecovered') === '06a3b2a21f92e845225770ca06d8f490fb551991e28231f226a74d2a805e6adb'
    }

    /**
     * Lost account has been successfully recovered by rescuer account.
     */
    get asV53(): {lostAccount: Uint8Array, rescuerAccount: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class RecoveryRecoveryClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Recovery.RecoveryClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A recovery process for account_1 by account_2 has been closed
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Recovery.RecoveryClosed') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  A recovery process for account_1 by account_2 has been closed
     */
    get asV38(): [Uint8Array, Uint8Array] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A recovery process for lost account by rescuer account has been closed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Recovery.RecoveryClosed') === '06a3b2a21f92e845225770ca06d8f490fb551991e28231f226a74d2a805e6adb'
    }

    /**
     * A recovery process for lost account by rescuer account has been closed.
     */
    get asV53(): {lostAccount: Uint8Array, rescuerAccount: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class RecoveryRecoveryCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Recovery.RecoveryCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A recovery process has been set up for an account
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Recovery.RecoveryCreated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A recovery process has been set up for an account
     */
    get asV38(): Uint8Array {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A recovery process has been set up for an account.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Recovery.RecoveryCreated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A recovery process has been set up for an account.
     */
    get asV53(): {account: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class RecoveryRecoveryInitiatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Recovery.RecoveryInitiated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A recovery process has been initiated for account_1 by account_2
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Recovery.RecoveryInitiated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  A recovery process has been initiated for account_1 by account_2
     */
    get asV38(): [Uint8Array, Uint8Array] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A recovery process has been initiated for lost account by rescuer account.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Recovery.RecoveryInitiated') === '06a3b2a21f92e845225770ca06d8f490fb551991e28231f226a74d2a805e6adb'
    }

    /**
     * A recovery process has been initiated for lost account by rescuer account.
     */
    get asV53(): {lostAccount: Uint8Array, rescuerAccount: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class RecoveryRecoveryRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Recovery.RecoveryRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A recovery process has been removed for an account
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Recovery.RecoveryRemoved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A recovery process has been removed for an account
     */
    get asV38(): Uint8Array {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A recovery process has been removed for an account.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Recovery.RecoveryRemoved') === '405b1d1901ab1111e55145481276fa331c52cec4681f96fabfe7b43b7da7683f'
    }

    /**
     * A recovery process has been removed for an account.
     */
    get asV53(): {lostAccount: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class RecoveryRecoveryVouchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Recovery.RecoveryVouched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A recovery process for account_1 by account_2 has been vouched for by account_3
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Recovery.RecoveryVouched') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     *  A recovery process for account_1 by account_2 has been vouched for by account_3
     */
    get asV38(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A recovery process for lost account by rescuer account has been vouched for by sender.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Recovery.RecoveryVouched') === 'a128e64ee8a5ffaef15db03ee445f8d8c8b7ab2e8123eeb50f18a0d5d4e3fdc9'
    }

    /**
     * A recovery process for lost account by rescuer account has been vouched for by sender.
     */
    get asV53(): {lostAccount: Uint8Array, rescuerAccount: Uint8Array, sender: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV53(): {task: [number, number], id: (Uint8Array | undefined), error: v53.LookupError} {
        assert(this.isV53)
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

    get isV38(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    get asV38(): [number, number] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Canceled some task.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Canceled some task.
     */
    get asV53(): {when: number, index: number} {
        assert(this.isV53)
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

    get isV38(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '8932a074b1c2cd5ce9792be58d56c1325be1d704098dac81f23ff6804e2d5fee'
    }

    get asV38(): [[number, number], (Uint8Array | undefined), v38.DispatchResult] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'ba59527b3bb4801aee2fda92f8229d8d572cc38c565e139a667a87dd8171194b'
    }

    /**
     * Dispatched some task.
     */
    get asV53(): {task: [number, number], id: (Uint8Array | undefined), result: v53.Type_28} {
        assert(this.isV53)
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

    get isV38(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    get asV38(): [number, number] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Scheduled some task.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Scheduled some task.
     */
    get asV53(): {when: number, index: number} {
        assert(this.isV53)
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
     *  New session has happened. Note that the argument is the session index, not the block
     *  number as the type might suggest.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New session has happened. Note that the argument is the session index, not the block
     *  number as the type might suggest.
     */
    get asV31(): number {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get asV53(): {sessionIndex: number} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class SignalingCommitStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Signaling.CommitStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Emitted when commit stage begins: (ProposalHash, VoteId, CommitEndTime)
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Signaling.CommitStarted') === '20118ffe70b3fa188bfc0716cf97c1b22aa245ef46e61480c3f4d1f63b18bd8a'
    }

    /**
     *  Emitted when commit stage begins: (ProposalHash, VoteId, CommitEndTime)
     */
    get asV31(): [Uint8Array, bigint, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class SignalingNewProposalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Signaling.NewProposal')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Emitted at proposal creation: (Creator, ProposalHash)
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Signaling.NewProposal') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  Emitted at proposal creation: (Creator, ProposalHash)
     */
    get asV31(): [Uint8Array, Uint8Array] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class SignalingVotingCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Signaling.VotingCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Emitted when voting is completed: (ProposalHash, VoteId, VoteResults)
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Signaling.VotingCompleted') === 'fb1b6c83a547837ce9f07d7b623e71a4fec6cea1d51d01009d24c5a20e53d816'
    }

    /**
     *  Emitted when voting is completed: (ProposalHash, VoteId, VoteResults)
     */
    get asV31(): [Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class SignalingVotingStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Signaling.VotingStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Emitted when voting begins: (ProposalHash, VoteId, VotingEndTime)
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Signaling.VotingStarted') === '20118ffe70b3fa188bfc0716cf97c1b22aa245ef46e61480c3f4d1f63b18bd8a'
    }

    /**
     *  Emitted when voting begins: (ProposalHash, VoteId, VotingEndTime)
     */
    get asV31(): [Uint8Array, bigint, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingBondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Bonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account has bonded this amount.
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has bonded this amount.
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    get asV38(): [Uint8Array, bigint] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingChilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Chilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     * \[stash\]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     * \[stash\]
     */
    get asV53(): Uint8Array {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingEraPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.EraPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     * \[era_index, validator_payout, remainder\]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === '1b75f96f7f74feed246668e0244abf707060018d56d88b1a638f75594d2a8005'
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     * \[era_index, validator_payout, remainder\]
     */
    get asV53(): [number, bigint, bigint] {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingEraPayoutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.EraPayout')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Staking.EraPayout') === '1b75f96f7f74feed246668e0244abf707060018d56d88b1a638f75594d2a8005'
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     */
    get asV38(): [number, bigint, bigint] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Kicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A nominator has been kicked from a validator. \[nominator, stash\]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     * A nominator has been kicked from a validator. \[nominator, stash\]
     */
    get asV53(): [Uint8Array, Uint8Array] {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingOldSlashingReportDiscardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.OldSlashingReportDiscarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An old slashing report from a prior era was discarded because it could
     *  not be processed.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Staking.OldSlashingReportDiscarded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  An old slashing report from a prior era was discarded because it could
     *  not be processed.
     */
    get asV31(): number {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingPayoutStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.PayoutStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     * The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get asV53(): [number, Uint8Array] {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Reward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  All validators have been rewarded by the first balance; the second is the remainder
     *  from the maximum amount of reward.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Staking.Reward') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
    }

    /**
     *  All validators have been rewarded by the first balance; the second is the remainder
     *  from the maximum amount of reward.
     */
    get asV31(): [bigint, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  The staker has been rewarded by this amount. `AccountId` is the stash account.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Staking.Reward') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The staker has been rewarded by this amount. `AccountId` is the stash account.
     */
    get asV38(): [Uint8Array, bigint] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get asV53(): [Uint8Array, bigint] {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Slash')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Staking.Slash') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     */
    get asV31(): [Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * One validator (and its nominators) has been slashed by the given amount.
     * \[validator, amount\]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * One validator (and its nominators) has been slashed by the given amount.
     * \[validator, amount\]
     */
    get asV53(): [Uint8Array, bigint] {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSolutionStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.SolutionStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new solution for the upcoming election has been stored.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Staking.SolutionStored') === '0bf020e543ea88729b1b61dbeb14181ab6acba99a0e1795514718dacf33fb459'
    }

    /**
     *  A new solution for the upcoming election has been stored.
     */
    get asV38(): v38.ElectionCompute {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakersElectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakersElected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new set of stakers was elected.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.StakersElected') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A new set of stakers was elected.
     */
    get asV53(): null {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakingElectionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakingElection')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new set of stakers was elected with the given computation method.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Staking.StakingElection') === '0bf020e543ea88729b1b61dbeb14181ab6acba99a0e1795514718dacf33fb459'
    }

    /**
     *  A new set of stakers was elected with the given computation method.
     */
    get asV38(): v38.ElectionCompute {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakingElectionFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakingElectionFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The election failed. No new era is planned.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Staking.StakingElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The election failed. No new era is planned.
     */
    get asV53(): null {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingUnbondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Unbonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account has unbonded this amount.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has unbonded this amount.
     */
    get asV38(): [Uint8Array, bigint] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue.
     */
    get asV38(): [Uint8Array, bigint] {
        assert(this.isV38)
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
     *  The sudoer just switched identity; the old key is supplied.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The sudoer just switched identity; the old key is supplied.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get asV53(): {oldSudoer: (Uint8Array | undefined)} {
        assert(this.isV53)
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
     *  A sudo just took place.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === 'ab01a9c748aa3cbaea79085d7fc05c23416224e2cbe4d301feea3f8143c67da0'
    }

    /**
     *  A sudo just took place.
     */
    get asV31(): boolean {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A sudo just took place.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place.
     */
    get asV38(): v38.DispatchResult {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === 'bfff987b04269a820686fcc24b9885fd64cbc87c576cf203a79a3a99a7c596e1'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV53(): {sudoResult: v53.Type_28} {
        assert(this.isV53)
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
     *  A sudo just took place.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === 'ab01a9c748aa3cbaea79085d7fc05c23416224e2cbe4d301feea3f8143c67da0'
    }

    /**
     *  A sudo just took place.
     */
    get asV31(): boolean {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get asV45(): v45.DispatchResult {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === 'bfff987b04269a820686fcc24b9885fd64cbc87c576cf203a79a3a99a7c596e1'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV53(): {sudoResult: v53.Type_28} {
        assert(this.isV53)
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
    get isV31(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  `:code` was updated.
     */
    get asV31(): null {
        assert(this.isV31)
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
     *  An extrinsic failed.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '5fe7c744d32416ba539b2c5670a5d26463640a03f379ebdbfde7842fb703a6d7'
    }

    /**
     *  An extrinsic failed.
     */
    get asV31(): [v31.DispatchError, v31.DispatchInfo] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  An extrinsic failed.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '09be5714d55bec634be0e5bf6ca98e24886f3a530b5649b618b20e4514550b91'
    }

    /**
     *  An extrinsic failed.
     */
    get asV38(): [v38.DispatchError, v38.DispatchInfo] {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
    }

    /**
     * An extrinsic failed.
     */
    get asV53(): {dispatchError: v53.DispatchError, dispatchInfo: v53.DispatchInfo} {
        assert(this.isV53)
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
     *  An extrinsic completed successfully.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '1c9545ed09b044224f14c2cd1f87820faca31e85dd0e79a933f02ab39b04b5b4'
    }

    /**
     *  An extrinsic completed successfully.
     */
    get asV31(): v31.DispatchInfo {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  An extrinsic completed successfully.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
    }

    /**
     *  An extrinsic completed successfully.
     */
    get asV38(): v38.DispatchInfo {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV53(): {dispatchInfo: v53.DispatchInfo} {
        assert(this.isV53)
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
     *  An account was reaped.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account was reaped.
     */
    get asV38(): Uint8Array {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was reaped.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV53(): {account: Uint8Array} {
        assert(this.isV53)
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
     *  A new account was created.
     */
    get isV38(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new account was created.
     */
    get asV38(): Uint8Array {
        assert(this.isV38)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new account was created.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV53(): {account: Uint8Array} {
        assert(this.isV53)
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
     * On on-chain remark happened.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV53(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class TipsNewTipEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tips.NewTip')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new tip suggestion has been opened. \[tip_hash\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Tips.NewTip') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new tip suggestion has been opened. \[tip_hash\]
     */
    get asV45(): Uint8Array {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new tip suggestion has been opened.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Tips.NewTip') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A new tip suggestion has been opened.
     */
    get asV53(): {tipHash: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class TipsTipClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tips.TipClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A tip suggestion has been closed. \[tip_hash, who, payout\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Tips.TipClosed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A tip suggestion has been closed. \[tip_hash, who, payout\]
     */
    get asV45(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A tip suggestion has been closed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Tips.TipClosed') === '788934ef84a9cf41376f9a41333ed4129722ae02b069eb169dcd9a50e4eb300f'
    }

    /**
     * A tip suggestion has been closed.
     */
    get asV53(): {tipHash: Uint8Array, who: Uint8Array, payout: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class TipsTipClosingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tips.TipClosing')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A tip suggestion has reached threshold and is closing. \[tip_hash\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Tips.TipClosing') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A tip suggestion has reached threshold and is closing. \[tip_hash\]
     */
    get asV45(): Uint8Array {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A tip suggestion has reached threshold and is closing.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Tips.TipClosing') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A tip suggestion has reached threshold and is closing.
     */
    get asV53(): {tipHash: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class TipsTipRetractedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tips.TipRetracted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A tip suggestion has been retracted. \[tip_hash\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Tips.TipRetracted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A tip suggestion has been retracted. \[tip_hash\]
     */
    get asV45(): Uint8Array {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A tip suggestion has been retracted.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Tips.TipRetracted') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A tip suggestion has been retracted.
     */
    get asV53(): {tipHash: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class TipsTipSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tips.TipSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
     */
    get isV45(): boolean {
        return this._chain.getEventHash('Tips.TipSlashed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
     */
    get asV45(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV45)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A tip suggestion has been slashed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Tips.TipSlashed') === 'bbbf33d69edf4cf82e85596453190f61c96067be0ca329ff7dcf6cd4ea9313a3'
    }

    /**
     * A tip suggestion has been slashed.
     */
    get asV53(): {tipHash: Uint8Array, finder: Uint8Array, deposit: bigint} {
        assert(this.isV53)
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
     *  Some funds have been allocated.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
    }

    /**
     *  Some funds have been allocated.
     */
    get asV31(): [number, bigint, Uint8Array] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been allocated.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
    }

    /**
     * Some funds have been allocated.
     */
    get asV53(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyAwarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty is awarded to a beneficiary. [index, beneficiary]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Treasury.BountyAwarded') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  A bounty is awarded to a beneficiary. [index, beneficiary]
     */
    get asV41(): [number, Uint8Array] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyBecameActiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyBecameActive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty proposal is funded and became active. [index]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Treasury.BountyBecameActive') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty proposal is funded and became active. [index]
     */
    get asV41(): number {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty is cancelled. [index]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Treasury.BountyCanceled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty is cancelled. [index]
     */
    get asV41(): number {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Treasury.BountyClaimed') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
    }

    /**
     *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
     */
    get asV41(): [number, bigint, Uint8Array] {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyExtendedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyExtended')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty expiry is extended. [index]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Treasury.BountyExtended') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty expiry is extended. [index]
     */
    get asV41(): number {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyProposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  New bounty proposal. [index]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Treasury.BountyProposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New bounty proposal. [index]
     */
    get asV41(): number {
        assert(this.isV41)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty proposal was rejected; funds were slashed. [index, bond]
     */
    get isV41(): boolean {
        return this._chain.getEventHash('Treasury.BountyRejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A bounty proposal was rejected; funds were slashed. [index, bond]
     */
    get asV41(): [number, bigint] {
        assert(this.isV41)
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
     *  Some of our funds have been burnt.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Some of our funds have been burnt.
     */
    get asV31(): bigint {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some of our funds have been burnt.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
    }

    /**
     * Some of our funds have been burnt.
     */
    get asV53(): {burntFunds: bigint} {
        assert(this.isV53)
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
     *  Some funds have been deposited.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Some funds have been deposited.
     */
    get asV31(): bigint {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been deposited.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
    }

    /**
     * Some funds have been deposited.
     */
    get asV53(): {value: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryNewTipEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.NewTip')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new tip suggestion has been opened.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.NewTip') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new tip suggestion has been opened.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
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
     *  New proposal.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New proposal.
     */
    get asV31(): number {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New proposal.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV53(): {proposalIndex: number} {
        assert(this.isV53)
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
     *  A proposal was rejected; funds were slashed.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A proposal was rejected; funds were slashed.
     */
    get asV31(): [number, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV53(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV53)
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
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Spending has finished; this is the amount that rolls over until next spend.
     */
    get asV31(): bigint {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get asV53(): {rolloverBalance: bigint} {
        assert(this.isV53)
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
     *  We have ended a spend period and will now allocate funds.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  We have ended a spend period and will now allocate funds.
     */
    get asV31(): bigint {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get asV53(): {budgetRemaining: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryTipClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.TipClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A tip suggestion has been closed.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.TipClosed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A tip suggestion has been closed.
     */
    get asV31(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryTipClosingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.TipClosing')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A tip suggestion has reached threshold and is closing.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.TipClosing') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A tip suggestion has reached threshold and is closing.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryTipRetractedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.TipRetracted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A tip suggestion has been retracted.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Treasury.TipRetracted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A tip suggestion has been retracted.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryRewardTreasuryMintingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TreasuryReward.TreasuryMinting')
        this._chain = ctx._chain
        this.event = event
    }

    get isV31(): boolean {
        return this._chain.getEventHash('TreasuryReward.TreasuryMinting') === 'd9f5275f033dd23d115bdcb4dd59b0edcdd2af64e50f714940d33bf3929fbacc'
    }

    get asV31(): [bigint, bigint, number] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    get isV38(): boolean {
        return this._chain.getEventHash('TreasuryReward.TreasuryMinting') === '5345de7df83a54dde0465b03b1125af8701ecbac8ebdfd3116622266f7c3c98d'
    }

    get asV38(): [bigint, number, Uint8Array] {
        assert(this.isV38)
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
    get isV31(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Batch of dispatches completed fully with no error.
     */
    get asV31(): null {
        assert(this.isV31)
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
     *  well as the error.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === 'acf646b5aabc17d1d9bbcec046f84450721211384188c038f062a8174d381ca2'
    }

    /**
     *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     *  well as the error.
     */
    get asV31(): [number, v31.DispatchError] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV53(): {index: number, error: v53.DispatchError} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A call was dispatched.
     */
    get asV53(): {result: v53.Type_28} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get asV53(): null {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityMultisigApprovalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.MultisigApproval')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Utility.MultisigApproval') === '34d1dc57c09863f79f0d437ab4b18316cbed4ad7d2d69112d431aaf8009c3019'
    }

    /**
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account.
     */
    get asV31(): [Uint8Array, v31.Timepoint, Uint8Array] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityMultisigCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.MultisigCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Utility.MultisigCancelled') === '34d1dc57c09863f79f0d437ab4b18316cbed4ad7d2d69112d431aaf8009c3019'
    }

    /**
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account.
     */
    get asV31(): [Uint8Array, v31.Timepoint, Uint8Array] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityMultisigExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.MultisigExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Utility.MultisigExecuted') === '071b0186ef44dfbf1b75aa2d9280b118e037f15a2d8225a046145d0d5654fa64'
    }

    /**
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account.
     */
    get asV31(): [Uint8Array, v31.Timepoint, Uint8Array, v31.DispatchResult] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityNewMultisigEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.NewMultisig')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Utility.NewMultisig') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account.
     */
    get asV31(): [Uint8Array, Uint8Array] {
        assert(this.isV31)
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
     *  An account (given) has become fully vested. No further vesting can happen.
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Vesting.VestingCompleted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account (given) has become fully vested. No further vesting can happen.
     */
    get asV31(): Uint8Array {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An \[account\] has become fully vested.
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Vesting.VestingCompleted') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An \[account\] has become fully vested.
     */
    get asV53(): {account: Uint8Array} {
        assert(this.isV53)
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
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Vesting.VestingUpdated') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The amount vested has been updated. This could indicate more funds are available. The
     *  balance given is the amount which is left unvested (and thus locked).
     */
    get asV31(): [Uint8Array, bigint] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    get isV53(): boolean {
        return this._chain.getEventHash('Vesting.VestingUpdated') === '827ca6c1a4e85ce850afac4c8d4d055acd3be5c19141889b40808e42b2c769e3'
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    get asV53(): {account: Uint8Array, unvested: bigint} {
        assert(this.isV53)
        return this._chain.decodeEvent(this.event)
    }
}

export class VotingVoteAdvancedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Voting.VoteAdvanced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  vote stage transition (id, old stage, new stage)
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Voting.VoteAdvanced') === '3c6f3f8cd6904a974828d0711ec04f0192fab6615c3fda0a0508632feaf0e940'
    }

    /**
     *  vote stage transition (id, old stage, new stage)
     */
    get asV31(): [bigint, v31.VoteStage, v31.VoteStage] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class VotingVoteCommittedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Voting.VoteCommitted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  user commits
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Voting.VoteCommitted') === '62ab179c459e900954ede92a01f149d553e9317efc7d0129525f40d631e8b38f'
    }

    /**
     *  user commits
     */
    get asV31(): [bigint, Uint8Array] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class VotingVoteCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Voting.VoteCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  new vote (id, creator, type of vote)
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Voting.VoteCreated') === '6d67e8e9c27bbe12e0d709fc3d1d9c7e1164f5f26e2f2250c7ebe48cb08649cd'
    }

    /**
     *  new vote (id, creator, type of vote)
     */
    get asV31(): [bigint, Uint8Array, v31.VoteType] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}

export class VotingVoteRevealedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Voting.VoteRevealed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  user reveals a vote
     */
    get isV31(): boolean {
        return this._chain.getEventHash('Voting.VoteRevealed') === '229e22acafa9d2533638e206430bdd01c71629faf03264ba601d32fe160d4979'
    }

    /**
     *  user reveals a vote
     */
    get asV31(): [bigint, Uint8Array, Uint8Array[]] {
        assert(this.isV31)
        return this._chain.decodeEvent(this.event)
    }
}
