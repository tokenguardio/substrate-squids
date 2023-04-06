import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v31 from './v31'
import * as v38 from './v38'
import * as v41 from './v41'
import * as v45 from './v45'
import * as v53 from './v53'

export class AssetsApproveTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.approve_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve an amount of asset for transfer by a delegated third-party account.
     * 
     * Origin must be Signed.
     * 
     * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
     * for the purpose of holding the approval. If some non-zero amount of assets is already
     * approved from signing account to `delegate`, then it is topped up or unreserved to
     * meet the right value.
     * 
     * NOTE: The signing account does not need to own `amount` of assets at the point of
     * making this call.
     * 
     * - `id`: The identifier of the asset.
     * - `delegate`: The account to delegate permission to transfer asset.
     * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
     * already an approval in place, then this acts additively.
     * 
     * Emits `ApprovedTransfer` on success.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.approve_transfer') === 'd70c245f1b84ef3a40efa116b6d92fabdb32d160fb41a85f2c66351ef57a9822'
    }

    /**
     * Approve an amount of asset for transfer by a delegated third-party account.
     * 
     * Origin must be Signed.
     * 
     * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
     * for the purpose of holding the approval. If some non-zero amount of assets is already
     * approved from signing account to `delegate`, then it is topped up or unreserved to
     * meet the right value.
     * 
     * NOTE: The signing account does not need to own `amount` of assets at the point of
     * making this call.
     * 
     * - `id`: The identifier of the asset.
     * - `delegate`: The account to delegate permission to transfer asset.
     * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
     * already an approval in place, then this acts additively.
     * 
     * Emits `ApprovedTransfer` on success.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number, delegate: v53.MultiAddress, amount: bigint} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.burn')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
     * 
     *  Origin must be Signed and the sender should be the Manager of the asset `id`.
     * 
     *  Bails with `BalanceZero` if the `who` is already dead.
     * 
     *  - `id`: The identifier of the asset to have some amount burned.
     *  - `who`: The account to be debited from.
     *  - `amount`: The maximum amount by which `who`'s balance should be reduced.
     * 
     *  Emits `Burned` with the actual amount burned. If this takes the balance to below the
     *  minimum for the asset, then the amount burned is increased to take it to zero.
     * 
     *  Weight: `O(1)`
     *  Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.burn') === 'c02cd512b8d267d4254dae8a32112112539f12bf8d8e4f3768b7ae619e5ef6d0'
    }

    /**
     *  Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
     * 
     *  Origin must be Signed and the sender should be the Manager of the asset `id`.
     * 
     *  Bails with `BalanceZero` if the `who` is already dead.
     * 
     *  - `id`: The identifier of the asset to have some amount burned.
     *  - `who`: The account to be debited from.
     *  - `amount`: The maximum amount by which `who`'s balance should be reduced.
     * 
     *  Emits `Burned` with the actual amount burned. If this takes the balance to below the
     *  minimum for the asset, then the amount burned is increased to take it to zero.
     * 
     *  Weight: `O(1)`
     *  Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
     */
    get asV45(): {id: number, who: v45.LookupSource, amount: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsCancelApprovalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.cancel_approval')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel all of some asset approved for delegated transfer by a third-party account.
     * 
     * Origin must be Signed and there must be an approval in place between signer and
     * `delegate`.
     * 
     * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
     * 
     * - `id`: The identifier of the asset.
     * - `delegate`: The account delegated permission to transfer asset.
     * 
     * Emits `ApprovalCancelled` on success.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.cancel_approval') === '670ca182acb99ffb9bf64f310a10233b0d36376a3b17a40c0b3faa1bf864a4f5'
    }

    /**
     * Cancel all of some asset approved for delegated transfer by a third-party account.
     * 
     * Origin must be Signed and there must be an approval in place between signer and
     * `delegate`.
     * 
     * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
     * 
     * - `id`: The identifier of the asset.
     * - `delegate`: The account delegated permission to transfer asset.
     * 
     * Emits `ApprovalCancelled` on success.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number, delegate: v53.MultiAddress} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsClearMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.clear_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear the metadata for an asset.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     * Any deposit is freed for the asset owner.
     * 
     * - `id`: The identifier of the asset to clear.
     * 
     * Emits `MetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.clear_metadata') === '49bd869aaca66b3b67b16fd6a8ea65fd03e8898dcc62afb378e07fcfd945201c'
    }

    /**
     * Clear the metadata for an asset.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     * Any deposit is freed for the asset owner.
     * 
     * - `id`: The identifier of the asset to clear.
     * 
     * Emits `MetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsCreateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.create')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Issue a new class of fungible assets from a public origin.
     * 
     *  This new asset class has no assets initially.
     * 
     *  The origin must be Signed and the sender must have sufficient funds free.
     * 
     *  Funds of sender are reserved according to the formula:
     *  `AssetDepositBase + AssetDepositPerZombie * max_zombies`.
     * 
     *  Parameters:
     *  - `id`: The identifier of the new asset. This must not be currently in use to identify
     *  an existing asset.
     *  - `owner`: The owner of this class of assets. The owner has full superuser permissions
     *  over this asset, but may later change and configure the permissions using `transfer_ownership`
     *  and `set_team`.
     *  - `max_zombies`: The total number of accounts which may hold assets in this class yet
     *  have no existential deposit.
     *  - `min_balance`: The minimum balance of this new asset that any single account must
     *  have. If an account's balance is reduced below this, then it collapses to zero.
     * 
     *  Emits `Created` event when successful.
     * 
     *  Weight: `O(1)`
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.create') === 'cc04db9ae6bb416d6f20f8fc2512b580be3734063321d945d184797ed36b9259'
    }

    /**
     *  Issue a new class of fungible assets from a public origin.
     * 
     *  This new asset class has no assets initially.
     * 
     *  The origin must be Signed and the sender must have sufficient funds free.
     * 
     *  Funds of sender are reserved according to the formula:
     *  `AssetDepositBase + AssetDepositPerZombie * max_zombies`.
     * 
     *  Parameters:
     *  - `id`: The identifier of the new asset. This must not be currently in use to identify
     *  an existing asset.
     *  - `owner`: The owner of this class of assets. The owner has full superuser permissions
     *  over this asset, but may later change and configure the permissions using `transfer_ownership`
     *  and `set_team`.
     *  - `max_zombies`: The total number of accounts which may hold assets in this class yet
     *  have no existential deposit.
     *  - `min_balance`: The minimum balance of this new asset that any single account must
     *  have. If an account's balance is reduced below this, then it collapses to zero.
     * 
     *  Emits `Created` event when successful.
     * 
     *  Weight: `O(1)`
     */
    get asV45(): {id: number, admin: v45.LookupSource, maxZombies: number, minBalance: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Issue a new class of fungible assets from a public origin.
     * 
     * This new asset class has no assets initially and its owner is the origin.
     * 
     * The origin must be Signed and the sender must have sufficient funds free.
     * 
     * Funds of sender are reserved by `AssetDeposit`.
     * 
     * Parameters:
     * - `id`: The identifier of the new asset. This must not be currently in use to identify
     * an existing asset.
     * - `admin`: The admin of this class of assets. The admin is the initial address of each
     * member of the asset class's admin team.
     * - `min_balance`: The minimum balance of this new asset that any single account must
     * have. If an account's balance is reduced below this, then it collapses to zero.
     * 
     * Emits `Created` event when successful.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.create') === '7daaf3729af6312cc91a5c7e7d4b90079bab21ec7656a63555b5ef0f4b6da745'
    }

    /**
     * Issue a new class of fungible assets from a public origin.
     * 
     * This new asset class has no assets initially and its owner is the origin.
     * 
     * The origin must be Signed and the sender must have sufficient funds free.
     * 
     * Funds of sender are reserved by `AssetDeposit`.
     * 
     * Parameters:
     * - `id`: The identifier of the new asset. This must not be currently in use to identify
     * an existing asset.
     * - `admin`: The admin of this class of assets. The admin is the initial address of each
     * member of the asset class's admin team.
     * - `min_balance`: The minimum balance of this new asset that any single account must
     * have. If an account's balance is reduced below this, then it collapses to zero.
     * 
     * Emits `Created` event when successful.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number, admin: v53.MultiAddress, minBalance: bigint} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsDestroyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.destroy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Destroy any assets of `id` owned by `origin`.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage mutation (codec `O(1)`).
     *  - 1 storage deletion (codec `O(1)`).
     *  - 1 event.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Assets.destroy') === '49bd869aaca66b3b67b16fd6a8ea65fd03e8898dcc62afb378e07fcfd945201c'
    }

    /**
     *  Destroy any assets of `id` owned by `origin`.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage mutation (codec `O(1)`).
     *  - 1 storage deletion (codec `O(1)`).
     *  - 1 event.
     *  # </weight>
     */
    get asV41(): {id: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Destroy a class of fungible assets owned by the sender.
     * 
     *  The origin must be Signed and the sender must be the owner of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     * 
     *  Emits `Destroyed` event when successful.
     * 
     *  Weight: `O(z)` where `z` is the number of zombie accounts.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.destroy') === 'b771f858c9b3ca400680657b54d80f2ff20238441430b378c3dd512a4ead1a66'
    }

    /**
     *  Destroy a class of fungible assets owned by the sender.
     * 
     *  The origin must be Signed and the sender must be the owner of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     * 
     *  Emits `Destroyed` event when successful.
     * 
     *  Weight: `O(z)` where `z` is the number of zombie accounts.
     */
    get asV45(): {id: number, zombiesWitness: number} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Destroy a class of fungible assets.
     * 
     * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
     * owner of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be destroyed. This must identify an existing
     * asset.
     * 
     * Emits `Destroyed` event when successful.
     * 
     * NOTE: It can be helpful to first freeze an asset before destroying it so that you
     * can provide accurate witness information and prevent users from manipulating state
     * in a way that can make it harder to destroy.
     * 
     * Weight: `O(c + p + a)` where:
     * - `c = (witness.accounts - witness.sufficients)`
     * - `s = witness.sufficients`
     * - `a = witness.approvals`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.destroy') === '621ad5b9ca7b3964362418df3bdf04e9e53b80c66e8b26c74d219b01c8f6f384'
    }

    /**
     * Destroy a class of fungible assets.
     * 
     * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
     * owner of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be destroyed. This must identify an existing
     * asset.
     * 
     * Emits `Destroyed` event when successful.
     * 
     * NOTE: It can be helpful to first freeze an asset before destroying it so that you
     * can provide accurate witness information and prevent users from manipulating state
     * in a way that can make it harder to destroy.
     * 
     * Weight: `O(c + p + a)` where:
     * - `c = (witness.accounts - witness.sufficients)`
     * - `s = witness.sufficients`
     * - `a = witness.approvals`
     */
    get asV53(): {id: number, witness: v53.DestroyWitness} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsForceAssetStatusCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.force_asset_status')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Alter the attributes of a given asset.
     * 
     * Origin must be `ForceOrigin`.
     * 
     * - `id`: The identifier of the asset.
     * - `owner`: The new Owner of this asset.
     * - `issuer`: The new Issuer of this asset.
     * - `admin`: The new Admin of this asset.
     * - `freezer`: The new Freezer of this asset.
     * - `min_balance`: The minimum balance of this new asset that any single account must
     * have. If an account's balance is reduced below this, then it collapses to zero.
     * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
     * value to account for the state bloat associated with its balance storage. If set to
     * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
     * an ED in the Balances pallet or whatever else is used to control user-account state
     * growth).
     * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
     * instructions.
     * 
     * Emits `AssetStatusChanged` with the identity of the asset.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.force_asset_status') === '25fb3b1f70c35a31a0ee67986acbc0cb8f1e527d12522ec51da8ce51d42a5d70'
    }

    /**
     * Alter the attributes of a given asset.
     * 
     * Origin must be `ForceOrigin`.
     * 
     * - `id`: The identifier of the asset.
     * - `owner`: The new Owner of this asset.
     * - `issuer`: The new Issuer of this asset.
     * - `admin`: The new Admin of this asset.
     * - `freezer`: The new Freezer of this asset.
     * - `min_balance`: The minimum balance of this new asset that any single account must
     * have. If an account's balance is reduced below this, then it collapses to zero.
     * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
     * value to account for the state bloat associated with its balance storage. If set to
     * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
     * an ED in the Balances pallet or whatever else is used to control user-account state
     * growth).
     * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
     * instructions.
     * 
     * Emits `AssetStatusChanged` with the identity of the asset.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number, owner: v53.MultiAddress, issuer: v53.MultiAddress, admin: v53.MultiAddress, freezer: v53.MultiAddress, minBalance: bigint, isSufficient: boolean, isFrozen: boolean} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsForceCancelApprovalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.force_cancel_approval')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel all of some asset approved for delegated transfer by a third-party account.
     * 
     * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
     * account of the asset `id`.
     * 
     * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
     * 
     * - `id`: The identifier of the asset.
     * - `delegate`: The account delegated permission to transfer asset.
     * 
     * Emits `ApprovalCancelled` on success.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.force_cancel_approval') === '388fe71d0432fed8964684ba8f89e0ae23453d8e50bee3aac8efa92c9fea0d4d'
    }

    /**
     * Cancel all of some asset approved for delegated transfer by a third-party account.
     * 
     * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
     * account of the asset `id`.
     * 
     * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
     * 
     * - `id`: The identifier of the asset.
     * - `delegate`: The account delegated permission to transfer asset.
     * 
     * Emits `ApprovalCancelled` on success.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number, owner: v53.MultiAddress, delegate: v53.MultiAddress} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsForceClearMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.force_clear_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear the metadata for an asset.
     * 
     * Origin must be ForceOrigin.
     * 
     * Any deposit is returned.
     * 
     * - `id`: The identifier of the asset to clear.
     * 
     * Emits `MetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.force_clear_metadata') === '49bd869aaca66b3b67b16fd6a8ea65fd03e8898dcc62afb378e07fcfd945201c'
    }

    /**
     * Clear the metadata for an asset.
     * 
     * Origin must be ForceOrigin.
     * 
     * Any deposit is returned.
     * 
     * - `id`: The identifier of the asset to clear.
     * 
     * Emits `MetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsForceCreateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.force_create')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Issue a new class of fungible assets from a privileged origin.
     * 
     *  This new asset class has no assets initially.
     * 
     *  The origin must conform to `ForceOrigin`.
     * 
     *  Unlike `create`, no funds are reserved.
     * 
     *  - `id`: The identifier of the new asset. This must not be currently in use to identify
     *  an existing asset.
     *  - `owner`: The owner of this class of assets. The owner has full superuser permissions
     *  over this asset, but may later change and configure the permissions using `transfer_ownership`
     *  and `set_team`.
     *  - `max_zombies`: The total number of accounts which may hold assets in this class yet
     *  have no existential deposit.
     *  - `min_balance`: The minimum balance of this new asset that any single account must
     *  have. If an account's balance is reduced below this, then it collapses to zero.
     * 
     *  Emits `ForceCreated` event when successful.
     * 
     *  Weight: `O(1)`
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.force_create') === 'd16bb4834b439becc6ad0a8b92e27053d3f7389b79060c7aae2a45a1b89c1d2d'
    }

    /**
     *  Issue a new class of fungible assets from a privileged origin.
     * 
     *  This new asset class has no assets initially.
     * 
     *  The origin must conform to `ForceOrigin`.
     * 
     *  Unlike `create`, no funds are reserved.
     * 
     *  - `id`: The identifier of the new asset. This must not be currently in use to identify
     *  an existing asset.
     *  - `owner`: The owner of this class of assets. The owner has full superuser permissions
     *  over this asset, but may later change and configure the permissions using `transfer_ownership`
     *  and `set_team`.
     *  - `max_zombies`: The total number of accounts which may hold assets in this class yet
     *  have no existential deposit.
     *  - `min_balance`: The minimum balance of this new asset that any single account must
     *  have. If an account's balance is reduced below this, then it collapses to zero.
     * 
     *  Emits `ForceCreated` event when successful.
     * 
     *  Weight: `O(1)`
     */
    get asV45(): {id: number, owner: v45.LookupSource, maxZombies: number, minBalance: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Issue a new class of fungible assets from a privileged origin.
     * 
     * This new asset class has no assets initially.
     * 
     * The origin must conform to `ForceOrigin`.
     * 
     * Unlike `create`, no funds are reserved.
     * 
     * - `id`: The identifier of the new asset. This must not be currently in use to identify
     * an existing asset.
     * - `owner`: The owner of this class of assets. The owner has full superuser permissions
     * over this asset, but may later change and configure the permissions using
     * `transfer_ownership` and `set_team`.
     * - `min_balance`: The minimum balance of this new asset that any single account must
     * have. If an account's balance is reduced below this, then it collapses to zero.
     * 
     * Emits `ForceCreated` event when successful.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.force_create') === '6612d5aa743fd1a4cfea8ecdc7729ca68d44000c4ae2d22d7727fcf7d054a545'
    }

    /**
     * Issue a new class of fungible assets from a privileged origin.
     * 
     * This new asset class has no assets initially.
     * 
     * The origin must conform to `ForceOrigin`.
     * 
     * Unlike `create`, no funds are reserved.
     * 
     * - `id`: The identifier of the new asset. This must not be currently in use to identify
     * an existing asset.
     * - `owner`: The owner of this class of assets. The owner has full superuser permissions
     * over this asset, but may later change and configure the permissions using
     * `transfer_ownership` and `set_team`.
     * - `min_balance`: The minimum balance of this new asset that any single account must
     * have. If an account's balance is reduced below this, then it collapses to zero.
     * 
     * Emits `ForceCreated` event when successful.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number, owner: v53.MultiAddress, isSufficient: boolean, minBalance: bigint} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsForceDestroyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.force_destroy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Destroy a class of fungible assets.
     * 
     *  The origin must conform to `ForceOrigin`.
     * 
     *  - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     * 
     *  Emits `Destroyed` event when successful.
     * 
     *  Weight: `O(1)`
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.force_destroy') === 'b771f858c9b3ca400680657b54d80f2ff20238441430b378c3dd512a4ead1a66'
    }

    /**
     *  Destroy a class of fungible assets.
     * 
     *  The origin must conform to `ForceOrigin`.
     * 
     *  - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     * 
     *  Emits `Destroyed` event when successful.
     * 
     *  Weight: `O(1)`
     */
    get asV45(): {id: number, zombiesWitness: number} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsForceSetMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.force_set_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force the metadata for an asset to some value.
     * 
     * Origin must be ForceOrigin.
     * 
     * Any deposit is left alone.
     * 
     * - `id`: The identifier of the asset to update.
     * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
     * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     * - `decimals`: The number of decimals this asset uses to represent one unit.
     * 
     * Emits `MetadataSet`.
     * 
     * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.force_set_metadata') === '8c198f507f43f7648c7b5a4e5cf1e5bdcc9cb13227ee10227839147bddd77221'
    }

    /**
     * Force the metadata for an asset to some value.
     * 
     * Origin must be ForceOrigin.
     * 
     * Any deposit is left alone.
     * 
     * - `id`: The identifier of the asset to update.
     * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
     * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     * - `decimals`: The number of decimals this asset uses to represent one unit.
     * 
     * Emits `MetadataSet`.
     * 
     * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
     */
    get asV53(): {id: number, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Move some assets from one account to another.
     * 
     *  Origin must be Signed and the sender should be the Admin of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to have some amount transferred.
     *  - `source`: The account to be debited.
     *  - `dest`: The account to be credited.
     *  - `amount`: The amount by which the `source`'s balance of assets should be reduced and
     *  `dest`'s balance increased. The amount actually transferred may be slightly greater in
     *  the case that the transfer would otherwise take the `source` balance above zero but
     *  below the minimum balance. Must be greater than zero.
     * 
     *  Emits `Transferred` with the actual amount transferred. If this takes the source balance
     *  to below the minimum for the asset, then the amount transferred is increased to take it
     *  to zero.
     * 
     *  Weight: `O(1)`
     *  Modes: Pre-existence of `dest`; Post-existence of `source`; Prior & post zombie-status
     *  of `source`; Account pre-existence of `dest`.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.force_transfer') === '536139f5ca398087044778f913adcc2c1505a77f8a0dbf452087b2d0059f229e'
    }

    /**
     *  Move some assets from one account to another.
     * 
     *  Origin must be Signed and the sender should be the Admin of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to have some amount transferred.
     *  - `source`: The account to be debited.
     *  - `dest`: The account to be credited.
     *  - `amount`: The amount by which the `source`'s balance of assets should be reduced and
     *  `dest`'s balance increased. The amount actually transferred may be slightly greater in
     *  the case that the transfer would otherwise take the `source` balance above zero but
     *  below the minimum balance. Must be greater than zero.
     * 
     *  Emits `Transferred` with the actual amount transferred. If this takes the source balance
     *  to below the minimum for the asset, then the amount transferred is increased to take it
     *  to zero.
     * 
     *  Weight: `O(1)`
     *  Modes: Pre-existence of `dest`; Post-existence of `source`; Prior & post zombie-status
     *  of `source`; Account pre-existence of `dest`.
     */
    get asV45(): {id: number, source: v45.LookupSource, dest: v45.LookupSource, amount: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsFreezeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.freeze')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Disallow further unprivileged transfers from an account.
     * 
     *  Origin must be Signed and the sender should be the Freezer of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to be frozen.
     *  - `who`: The account to be frozen.
     * 
     *  Emits `Frozen`.
     * 
     *  Weight: `O(1)`
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.freeze') === 'bffd6cb6214a4516bf926cc94ca0947e80e71031ba5f65fdf9b89de230319fd1'
    }

    /**
     *  Disallow further unprivileged transfers from an account.
     * 
     *  Origin must be Signed and the sender should be the Freezer of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to be frozen.
     *  - `who`: The account to be frozen.
     * 
     *  Emits `Frozen`.
     * 
     *  Weight: `O(1)`
     */
    get asV45(): {id: number, who: v45.LookupSource} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsFreezeAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.freeze_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disallow further unprivileged transfers for the asset class.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be frozen.
     * 
     * Emits `Frozen`.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.freeze_asset') === '49bd869aaca66b3b67b16fd6a8ea65fd03e8898dcc62afb378e07fcfd945201c'
    }

    /**
     * Disallow further unprivileged transfers for the asset class.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be frozen.
     * 
     * Emits `Frozen`.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsIssueCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.issue')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Issue a new class of fungible assets. There are, and will only ever be, `total`
     *  such assets and they'll all belong to the `origin` initially. It will have an
     *  identifier `AssetId` instance: this will be specified in the `Issued` event.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage mutation (codec `O(1)`).
     *  - 2 storage writes (condec `O(1)`).
     *  - 1 event.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Assets.issue') === '7b429299d6166f1313dac62c53c6d69e7611b500ded6f529a9faadc7dd1bc6b7'
    }

    /**
     *  Issue a new class of fungible assets. There are, and will only ever be, `total`
     *  such assets and they'll all belong to the `origin` initially. It will have an
     *  identifier `AssetId` instance: this will be specified in the `Issued` event.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage mutation (codec `O(1)`).
     *  - 2 storage writes (condec `O(1)`).
     *  - 1 event.
     *  # </weight>
     */
    get asV41(): {total: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Mint assets of a particular class.
     * 
     *  The origin must be Signed and the sender must be the Issuer of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to have some amount minted.
     *  - `beneficiary`: The account to be credited with the minted assets.
     *  - `amount`: The amount of the asset to be minted.
     * 
     *  Emits `Destroyed` event when successful.
     * 
     *  Weight: `O(1)`
     *  Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.mint') === '0e2e6668a3e8d83eba51f638f1e411fa21486554f6a6672acf9fec230adbdca8'
    }

    /**
     *  Mint assets of a particular class.
     * 
     *  The origin must be Signed and the sender must be the Issuer of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to have some amount minted.
     *  - `beneficiary`: The account to be credited with the minted assets.
     *  - `amount`: The amount of the asset to be minted.
     * 
     *  Emits `Destroyed` event when successful.
     * 
     *  Weight: `O(1)`
     *  Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
     */
    get asV45(): {id: number, beneficiary: v45.LookupSource, amount: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsRefundCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.refund')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Return the deposit (if any) of an asset account.
     * 
     * The origin must be Signed.
     * 
     * - `id`: The identifier of the asset for the account to be created.
     * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
     * 
     * Emits `Refunded` event when successful.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.refund') === '2895419ea0d0571e34255d0a19bf7d417eef8ddc9b8cd41c5f624ec6b10a51a7'
    }

    /**
     * Return the deposit (if any) of an asset account.
     * 
     * The origin must be Signed.
     * 
     * - `id`: The identifier of the asset for the account to be created.
     * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
     * 
     * Emits `Refunded` event when successful.
     */
    get asV53(): {id: number, allowBurn: boolean} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsSetMaxZombiesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.set_max_zombies')
        this._chain = ctx._chain
        this.call = call
    }

    get isV45(): boolean {
        return this._chain.getCallHash('Assets.set_max_zombies') === '12b54469dba64d9dbfe1b6a6b3ac599801164a15a5ddece75172d9cdebf0a9fb'
    }

    get asV45(): {id: number, maxZombies: number} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsSetMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.set_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the metadata for an asset.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     * Funds of sender are reserved according to the formula:
     * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
     * account any already reserved funds.
     * 
     * - `id`: The identifier of the asset to update.
     * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
     * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     * - `decimals`: The number of decimals this asset uses to represent one unit.
     * 
     * Emits `MetadataSet`.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.set_metadata') === '4fc9dbe2cfe457514a930e061af4c13c0c086b0ba525fdb40c38b47fbe9b3edf'
    }

    /**
     * Set the metadata for an asset.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     * Funds of sender are reserved according to the formula:
     * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
     * account any already reserved funds.
     * 
     * - `id`: The identifier of the asset to update.
     * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
     * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     * - `decimals`: The number of decimals this asset uses to represent one unit.
     * 
     * Emits `MetadataSet`.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number, name: Uint8Array, symbol: Uint8Array, decimals: number} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsSetTeamCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.set_team')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change the Issuer, Admin and Freezer of an asset.
     * 
     *  Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to be frozen.
     *  - `issuer`: The new Issuer of this asset.
     *  - `admin`: The new Admin of this asset.
     *  - `freezer`: The new Freezer of this asset.
     * 
     *  Emits `TeamChanged`.
     * 
     *  Weight: `O(1)`
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.set_team') === '4946d648a31871a6e90d4ac712098af4e01cd3619f12cb3ef4394aa03263e417'
    }

    /**
     *  Change the Issuer, Admin and Freezer of an asset.
     * 
     *  Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to be frozen.
     *  - `issuer`: The new Issuer of this asset.
     *  - `admin`: The new Admin of this asset.
     *  - `freezer`: The new Freezer of this asset.
     * 
     *  Emits `TeamChanged`.
     * 
     *  Weight: `O(1)`
     */
    get asV45(): {id: number, issuer: v45.LookupSource, admin: v45.LookupSource, freezer: v45.LookupSource} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsThawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.thaw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Allow unprivileged transfers from an account again.
     * 
     *  Origin must be Signed and the sender should be the Admin of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to be frozen.
     *  - `who`: The account to be unfrozen.
     * 
     *  Emits `Thawed`.
     * 
     *  Weight: `O(1)`
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.thaw') === 'bffd6cb6214a4516bf926cc94ca0947e80e71031ba5f65fdf9b89de230319fd1'
    }

    /**
     *  Allow unprivileged transfers from an account again.
     * 
     *  Origin must be Signed and the sender should be the Admin of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to be frozen.
     *  - `who`: The account to be unfrozen.
     * 
     *  Emits `Thawed`.
     * 
     *  Weight: `O(1)`
     */
    get asV45(): {id: number, who: v45.LookupSource} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsThawAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.thaw_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Allow unprivileged transfers for the asset again.
     * 
     * Origin must be Signed and the sender should be the Admin of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be thawed.
     * 
     * Emits `Thawed`.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.thaw_asset') === '49bd869aaca66b3b67b16fd6a8ea65fd03e8898dcc62afb378e07fcfd945201c'
    }

    /**
     * Allow unprivileged transfers for the asset again.
     * 
     * Origin must be Signed and the sender should be the Admin of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be thawed.
     * 
     * Emits `Thawed`.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsTouchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.touch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create an asset account for non-provider assets.
     * 
     * A deposit will be taken from the signer account.
     * 
     * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
     *   to be taken.
     * - `id`: The identifier of the asset for the account to be created.
     * 
     * Emits `Touched` event when successful.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.touch') === '49bd869aaca66b3b67b16fd6a8ea65fd03e8898dcc62afb378e07fcfd945201c'
    }

    /**
     * Create an asset account for non-provider assets.
     * 
     * A deposit will be taken from the signer account.
     * 
     * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
     *   to be taken.
     * - `id`: The identifier of the asset for the account to be created.
     * 
     * Emits `Touched` event when successful.
     */
    get asV53(): {id: number} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Move some assets from one holder to another.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 static lookup
     *  - 2 storage mutations (codec `O(1)`).
     *  - 1 event.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Assets.transfer') === '897b8eeec32f43ebc71b0e52d44a482e353086790257b419b0adbf924478a3e8'
    }

    /**
     *  Move some assets from one holder to another.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 static lookup
     *  - 2 storage mutations (codec `O(1)`).
     *  - 1 event.
     *  # </weight>
     */
    get asV41(): {id: number, target: v41.LookupSource, amount: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Move some assets from the sender account to another.
     * 
     *  Origin must be Signed.
     * 
     *  - `id`: The identifier of the asset to have some amount transferred.
     *  - `target`: The account to be credited.
     *  - `amount`: The amount by which the sender's balance of assets should be reduced and
     *  `target`'s balance increased. The amount actually transferred may be slightly greater in
     *  the case that the transfer would otherwise take the sender balance above zero but below
     *  the minimum balance. Must be greater than zero.
     * 
     *  Emits `Transferred` with the actual amount transferred. If this takes the source balance
     *  to below the minimum for the asset, then the amount transferred is increased to take it
     *  to zero.
     * 
     *  Weight: `O(1)`
     *  Modes: Pre-existence of `target`; Post-existence of sender; Prior & post zombie-status
     *  of sender; Account pre-existence of `target`.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.transfer') === 'e8ae27cf0bf0054601ee01b31c1939db84fb6ec8fd1ff357cfaed884a5b1e75e'
    }

    /**
     *  Move some assets from the sender account to another.
     * 
     *  Origin must be Signed.
     * 
     *  - `id`: The identifier of the asset to have some amount transferred.
     *  - `target`: The account to be credited.
     *  - `amount`: The amount by which the sender's balance of assets should be reduced and
     *  `target`'s balance increased. The amount actually transferred may be slightly greater in
     *  the case that the transfer would otherwise take the sender balance above zero but below
     *  the minimum balance. Must be greater than zero.
     * 
     *  Emits `Transferred` with the actual amount transferred. If this takes the source balance
     *  to below the minimum for the asset, then the amount transferred is increased to take it
     *  to zero.
     * 
     *  Weight: `O(1)`
     *  Modes: Pre-existence of `target`; Post-existence of sender; Prior & post zombie-status
     *  of sender; Account pre-existence of `target`.
     */
    get asV45(): {id: number, target: v45.LookupSource, amount: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsTransferApprovedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.transfer_approved')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some asset balance from a previously delegated account to some third-party
     * account.
     * 
     * Origin must be Signed and there must be an approval in place by the `owner` to the
     * signer.
     * 
     * If the entire amount approved for transfer is transferred, then any deposit previously
     * reserved by `approve_transfer` is unreserved.
     * 
     * - `id`: The identifier of the asset.
     * - `owner`: The account which previously approved for a transfer of at least `amount` and
     * from which the asset balance will be withdrawn.
     * - `destination`: The account to which the asset balance of `amount` will be transferred.
     * - `amount`: The amount of assets to transfer.
     * 
     * Emits `TransferredApproved` on success.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.transfer_approved') === 'ee6032b5d9554ced96256c4ce16a1c391a80a00e856e983d0551b5ebc24c745f'
    }

    /**
     * Transfer some asset balance from a previously delegated account to some third-party
     * account.
     * 
     * Origin must be Signed and there must be an approval in place by the `owner` to the
     * signer.
     * 
     * If the entire amount approved for transfer is transferred, then any deposit previously
     * reserved by `approve_transfer` is unreserved.
     * 
     * - `id`: The identifier of the asset.
     * - `owner`: The account which previously approved for a transfer of at least `amount` and
     * from which the asset balance will be withdrawn.
     * - `destination`: The account to which the asset balance of `amount` will be transferred.
     * - `amount`: The amount of assets to transfer.
     * 
     * Emits `TransferredApproved` on success.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number, owner: v53.MultiAddress, destination: v53.MultiAddress, amount: bigint} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Move some assets from the sender account to another, keeping the sender account alive.
     * 
     * Origin must be Signed.
     * 
     * - `id`: The identifier of the asset to have some amount transferred.
     * - `target`: The account to be credited.
     * - `amount`: The amount by which the sender's balance of assets should be reduced and
     * `target`'s balance increased. The amount actually transferred may be slightly greater in
     * the case that the transfer would otherwise take the sender balance above zero but below
     * the minimum balance. Must be greater than zero.
     * 
     * Emits `Transferred` with the actual amount transferred. If this takes the source balance
     * to below the minimum for the asset, then the amount transferred is increased to take it
     * to zero.
     * 
     * Weight: `O(1)`
     * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
     * `target`.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.transfer_keep_alive') === 'e8ae27cf0bf0054601ee01b31c1939db84fb6ec8fd1ff357cfaed884a5b1e75e'
    }

    /**
     * Move some assets from the sender account to another, keeping the sender account alive.
     * 
     * Origin must be Signed.
     * 
     * - `id`: The identifier of the asset to have some amount transferred.
     * - `target`: The account to be credited.
     * - `amount`: The amount by which the sender's balance of assets should be reduced and
     * `target`'s balance increased. The amount actually transferred may be slightly greater in
     * the case that the transfer would otherwise take the sender balance above zero but below
     * the minimum balance. Must be greater than zero.
     * 
     * Emits `Transferred` with the actual amount transferred. If this takes the source balance
     * to below the minimum for the asset, then the amount transferred is increased to take it
     * to zero.
     * 
     * Weight: `O(1)`
     * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
     * `target`.
     */
    get asV53(): {id: number, target: v53.MultiAddress, amount: bigint} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsTransferOwnershipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.transfer_ownership')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Change the Owner of an asset.
     * 
     *  Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to be frozen.
     *  - `owner`: The new Owner of this asset.
     * 
     *  Emits `OwnerChanged`.
     * 
     *  Weight: `O(1)`
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Assets.transfer_ownership') === '4ff43b4355cf3391202e9cb51f66e2e5770b103c1f9bfe4aef3e704e5ba3d924'
    }

    /**
     *  Change the Owner of an asset.
     * 
     *  Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     *  - `id`: The identifier of the asset to be frozen.
     *  - `owner`: The new Owner of this asset.
     * 
     *  Emits `OwnerChanged`.
     * 
     *  Weight: `O(1)`
     */
    get asV45(): {id: number, newOwner: v45.LookupSource} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change the Owner of an asset.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     * - `id`: The identifier of the asset.
     * - `owner`: The new Owner of this asset.
     * 
     * Emits `OwnerChanged`.
     * 
     * Weight: `O(1)`
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Assets.transfer_ownership') === 'ec67d4dc9e5dc95e4a820e103e85863bab2fd71dae8ae9a0a31654477b9a8aa7'
    }

    /**
     * Change the Owner of an asset.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     * - `id`: The identifier of the asset.
     * - `owner`: The new Owner of this asset.
     * 
     * Emits `OwnerChanged`.
     * 
     * Weight: `O(1)`
     */
    get asV53(): {id: number, owner: v53.MultiAddress} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorshipSetUnclesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authorship.set_uncles')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Provide a set of uncles.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'efd6e78708f873b5d0804d67dee4f6351287add79134d8ee5b59dcfa2a5e21af'
    }

    /**
     *  Provide a set of uncles.
     */
    get asV31(): {newUncles: v31.Header[]} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Provide a set of uncles.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
    }

    /**
     * Provide a set of uncles.
     */
    get asV53(): {newUncles: v53.Header[]} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class BagsListPutInFrontOfCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BagsList.put_in_front_of')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `Score` than `lighter`.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('BagsList.put_in_front_of') === '1c9b6f4fe2c3f09518b5cf691b90a9cfbbb049860f2d665fdf2f18450ebe9b2f'
    }

    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `Score` than `lighter`.
     */
    get asV53(): {lighter: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class BagsListRebagCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BagsList.rebag')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its score that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will never return an error; if `dislocated` does not exist or doesn't need a rebag, then
     * it is a noop and fees are still collected from `origin`.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('BagsList.rebag') === '6f1b791f1be804afc4e38eb1e926ba86935e013132cb323a061f4b76a89cbd3e'
    }

    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its score that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will never return an error; if `dislocated` does not exist or doesn't need a rebag, then
     * it is a noop and fees are still collected from `origin`.
     */
    get asV53(): {dislocated: Uint8Array} {
        assert(this.isV53)
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
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === 'df4a214d4dde3e82d3b36a6bb537e569f58b42cd75a9ad78b1b909171e93b042'
    }

    /**
     *  Exactly as `transfer`, except the origin must be root and the source account may be
     *  specified.
     */
    get asV31(): {source: v31.LookupSource, dest: v31.LookupSource, value: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Exactly as `transfer`, except the origin must be root and the source account may be
     *  specified.
     *  # <weight>
     *  - Same as transfer, but additional read and write because the source account is
     *    not assumed to be in the overlay.
     *  # </weight>
     */
    get isV45(): boolean {
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
    get asV45(): {source: v45.LookupSource, dest: v45.LookupSource, value: bigint} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === 'ed3d74aa1f96dbb29cc25c5f10c3b3af4a67b188eed8095131d1726f67820911'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asV53(): {who: v53.MultiAddress, amount: bigint} {
        assert(this.isV53)
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
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === 'df3bdd91fbe08cf76871e50adc316a9af2680e58a405b5e82923c08840985843'
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
     *  # </weight>
     */
    get asV31(): {who: v31.LookupSource, newFree: bigint, newReserved: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
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
    get isV45(): boolean {
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
    get asV45(): {who: v45.LookupSource, newFree: bigint, newReserved: bigint} {
        assert(this.isV45)
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
     * 
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Balances.transfer') === '5a96e49eaf0745110a2342c53e5619233745028a575c67865c4ad4921e77634b'
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
     * 
     *  # </weight>
     */
    get asV31(): {dest: v31.LookupSource, value: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
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
    get isV45(): boolean {
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
    get asV45(): {dest: v45.LookupSource, value: bigint} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '56952003e07947f758a9928d8462037abffea6a7fa991c0d3451f5c47d45f254'
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
    get asV53(): {dest: v53.MultiAddress, keepAlive: boolean} {
        assert(this.isV53)
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
     *  [`transfer`]: struct.Module.html#method.transfer
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === '5a96e49eaf0745110a2342c53e5619233745028a575c67865c4ad4921e77634b'
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Module.html#method.transfer
     */
    get asV31(): {dest: v31.LookupSource, value: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Module.html#method.transfer
     *  # <weight>
     *  - Cheaper than transfer because account cannot be killed.
     *  - Base Weight: 51.4 µs
     *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     *  #</weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'c3f0f475940fc4bef49b298f76ba345680f20fc48d5899b4678314a07e2ce090'
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Module.html#method.transfer
     *  # <weight>
     *  - Cheaper than transfer because account cannot be killed.
     *  - Base Weight: 51.4 µs
     *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     *  #</weight>
     */
    get asV45(): {dest: v45.LookupSource, value: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class BaseFeeSetBaseFeePerGasCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BaseFee.set_base_fee_per_gas')
        this._chain = ctx._chain
        this.call = call
    }

    get isV53(): boolean {
        return this._chain.getCallHash('BaseFee.set_base_fee_per_gas') === 'df74b0f066943b24c635a19ba2763478ab00f9c0373d74c9a771b1a1047ff6d6'
    }

    get asV53(): {fee: bigint} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class BaseFeeSetElasticityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BaseFee.set_elasticity')
        this._chain = ctx._chain
        this.call = call
    }

    get isV53(): boolean {
        return this._chain.getCallHash('BaseFee.set_elasticity') === 'efcd4cd6d4fde4342db62d270df85a88b1c153af50159f9bc1ba1ce1133f2524'
    }

    get asV53(): {elasticity: number} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class BaseFeeSetIsActiveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BaseFee.set_is_active')
        this._chain = ctx._chain
        this.call = call
    }

    get isV53(): boolean {
        return this._chain.getCallHash('BaseFee.set_is_active') === '3add098d9e97883d6727546805c06a15ec2e3d4dd29382f81a6061d644cf503d'
    }

    get asV53(): {isActive: boolean} {
        assert(this.isV53)
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
     *  Accept the curator role for a bounty.
     *  A deposit will be reserved from curator and refund upon successful payout.
     * 
     *  May only be called from the curator.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Accept the curator role for a bounty.
     *  A deposit will be reserved from curator and refund upon successful payout.
     * 
     *  May only be called from the curator.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV45(): {bountyId: number} {
        assert(this.isV45)
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
     *  Approve a bounty proposal. At a later time, the bounty will be funded and become active
     *  and the original deposit will be returned.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Bounties.approve_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Approve a bounty proposal. At a later time, the bounty will be funded and become active
     *  and the original deposit will be returned.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV45(): {bountyId: number} {
        assert(this.isV45)
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
     *  Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
     * 
     *  The dispatch origin for this call must be the curator of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to award.
     *  - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Bounties.award_bounty') === 'd740fadb3b6bd5fcbc882e8a8741448f60283d3c52cc1fc64c08d97c4b7467ae'
    }

    /**
     *  Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
     * 
     *  The dispatch origin for this call must be the curator of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to award.
     *  - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV45(): {bountyId: number, beneficiary: v45.LookupSource} {
        assert(this.isV45)
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
     *  Claim the payout from an awarded bounty after payout delay.
     * 
     *  The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to claim.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Bounties.claim_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Claim the payout from an awarded bounty after payout delay.
     * 
     *  The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to claim.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV45(): {bountyId: number} {
        assert(this.isV45)
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
     *  Cancel a proposed or active bounty. All the funds will be sent to treasury and
     *  the curator deposit will be unreserved if possible.
     * 
     *  Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     *  - `bounty_id`: Bounty ID to cancel.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Bounties.close_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Cancel a proposed or active bounty. All the funds will be sent to treasury and
     *  the curator deposit will be unreserved if possible.
     * 
     *  Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     *  - `bounty_id`: Bounty ID to cancel.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV45(): {bountyId: number} {
        assert(this.isV45)
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
     *  Extend the expiry time of an active bounty.
     * 
     *  The dispatch origin for this call must be the curator of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to extend.
     *  - `remark`: additional information.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Bounties.extend_bounty_expiry') === '710d6b76ffcee45bd9bffc1f299fa0b621450769559963379fa259c0f427f1bb'
    }

    /**
     *  Extend the expiry time of an active bounty.
     * 
     *  The dispatch origin for this call must be the curator of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to extend.
     *  - `remark`: additional information.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV45(): {bountyId: number, remark: Uint8Array} {
        assert(this.isV45)
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
     *  Propose a new bounty.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     *  or slashed when rejected.
     * 
     *  - `curator`: The curator account whom will manage this bounty.
     *  - `fee`: The curator fee.
     *  - `value`: The total payment amount of this bounty, curator fee included.
     *  - `description`: The description of this bounty.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Bounties.propose_bounty') === '6a012b4069a991972d0d3268cb20dfba3163919c325c7ebbe980b2dc15f1b1f5'
    }

    /**
     *  Propose a new bounty.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     *  or slashed when rejected.
     * 
     *  - `curator`: The curator account whom will manage this bounty.
     *  - `fee`: The curator fee.
     *  - `value`: The total payment amount of this bounty, curator fee included.
     *  - `description`: The description of this bounty.
     */
    get asV45(): {value: bigint, description: Uint8Array} {
        assert(this.isV45)
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
     *  Assign a curator to a funded bounty.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Bounties.propose_curator') === '2496ed9b22c4f45280f8b1f616ce6e1fff5629ded2a6ed9237e80ab77e4bff2f'
    }

    /**
     *  Assign a curator to a funded bounty.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV45(): {bountyId: number, curator: v45.LookupSource, fee: bigint} {
        assert(this.isV45)
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
     *  Unassign curator from a bounty.
     * 
     *  This function can only be called by the `RejectOrigin` a signed origin.
     * 
     *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
     *  or inactive. As a result, we will slash the curator when possible.
     * 
     *  If the origin is the curator, we take this as a sign they are unable to do their job and
     *  they willingly give up. We could slash them, but for now we allow them to recover their
     *  deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     *  anyone in the community to call out that a curator is not doing their due diligence, and
     *  we should pick a new curator. In this case the curator should also be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Bounties.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Unassign curator from a bounty.
     * 
     *  This function can only be called by the `RejectOrigin` a signed origin.
     * 
     *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
     *  or inactive. As a result, we will slash the curator when possible.
     * 
     *  If the origin is the curator, we take this as a sign they are unable to do their job and
     *  they willingly give up. We could slash them, but for now we allow them to recover their
     *  deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     *  anyone in the community to call out that a curator is not doing their due diligence, and
     *  we should pick a new curator. In this case the curator should also be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV45(): {bountyId: number} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ChainBridgeAcknowledgeProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChainBridge.acknowledge_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Commits a vote in favour of the provided proposal.
     * 
     *  If a proposal with the given nonce and source chain ID does not already exist, it will
     *  be created with an initial vote in favour from the caller.
     * 
     *  # <weight>
     *  - weight of proposed call, regardless of whether execution is performed
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('ChainBridge.acknowledge_proposal') === '7628853c119c84ea24c5fdbb898f72cd54ccfe161e7d0eb8d6f449b758c2ad6c'
    }

    /**
     *  Commits a vote in favour of the provided proposal.
     * 
     *  If a proposal with the given nonce and source chain ID does not already exist, it will
     *  be created with an initial vote in favour from the caller.
     * 
     *  # <weight>
     *  - weight of proposed call, regardless of whether execution is performed
     *  # </weight>
     */
    get asV45(): {nonce: bigint, srcId: number, rId: Uint8Array, call: v45.Proposal} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ChainBridgeAddRelayerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChainBridge.add_relayer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Adds a new relayer to the relayer set.
     * 
     *  # <weight>
     *  - O(1) lookup and insert
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('ChainBridge.add_relayer') === 'a8169e70fd2c6e1d785de8bec2f00bd8b23cbed7b8531af04a009422ee9f0952'
    }

    /**
     *  Adds a new relayer to the relayer set.
     * 
     *  # <weight>
     *  - O(1) lookup and insert
     *  # </weight>
     */
    get asV45(): {v: Uint8Array} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ChainBridgeEvalVoteStateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChainBridge.eval_vote_state')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Evaluate the state of a proposal given the current vote threshold.
     * 
     *  A proposal with enough votes will be either executed or cancelled, and the status
     *  will be updated accordingly.
     * 
     *  # <weight>
     *  - weight of proposed call, regardless of whether execution is performed
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('ChainBridge.eval_vote_state') === 'a4cb2e645604fe48a8fa0f0d7dfb2aaa1ecee5402a11e459ae46ededfd9fe473'
    }

    /**
     *  Evaluate the state of a proposal given the current vote threshold.
     * 
     *  A proposal with enough votes will be either executed or cancelled, and the status
     *  will be updated accordingly.
     * 
     *  # <weight>
     *  - weight of proposed call, regardless of whether execution is performed
     *  # </weight>
     */
    get asV45(): {nonce: bigint, srcId: number, prop: v45.Proposal} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ChainBridgeRejectProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChainBridge.reject_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Commits a vote against a provided proposal.
     * 
     *  # <weight>
     *  - Fixed, since execution of proposal should not be included
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('ChainBridge.reject_proposal') === '7628853c119c84ea24c5fdbb898f72cd54ccfe161e7d0eb8d6f449b758c2ad6c'
    }

    /**
     *  Commits a vote against a provided proposal.
     * 
     *  # <weight>
     *  - Fixed, since execution of proposal should not be included
     *  # </weight>
     */
    get asV45(): {nonce: bigint, srcId: number, rId: Uint8Array, call: v45.Proposal} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ChainBridgeRemoveRelayerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChainBridge.remove_relayer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Removes an existing relayer from the set.
     * 
     *  # <weight>
     *  - O(1) lookup and removal
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('ChainBridge.remove_relayer') === 'a8169e70fd2c6e1d785de8bec2f00bd8b23cbed7b8531af04a009422ee9f0952'
    }

    /**
     *  Removes an existing relayer from the set.
     * 
     *  # <weight>
     *  - O(1) lookup and removal
     *  # </weight>
     */
    get asV45(): {v: Uint8Array} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ChainBridgeRemoveResourceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChainBridge.remove_resource')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Removes a resource ID from the resource mapping.
     * 
     *  After this call, bridge transfers with the associated resource ID will
     *  be rejected.
     * 
     *  # <weight>
     *  - O(1) removal
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('ChainBridge.remove_resource') === '2a01c4c05d6bf45e0dc267bd7f6e27df3b3e4b23af7982734357c4de87ef690c'
    }

    /**
     *  Removes a resource ID from the resource mapping.
     * 
     *  After this call, bridge transfers with the associated resource ID will
     *  be rejected.
     * 
     *  # <weight>
     *  - O(1) removal
     *  # </weight>
     */
    get asV45(): {id: Uint8Array} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ChainBridgeSetResourceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChainBridge.set_resource')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Stores a method name on chain under an associated resource ID.
     * 
     *  # <weight>
     *  - O(1) write
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('ChainBridge.set_resource') === '89826ec80e539bf44d0f1bc839a3cfb544854cc6012dd46dfdeeb2f0e8cc198a'
    }

    /**
     *  Stores a method name on chain under an associated resource ID.
     * 
     *  # <weight>
     *  - O(1) write
     *  # </weight>
     */
    get asV45(): {id: Uint8Array, method: Uint8Array} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ChainBridgeSetThresholdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChainBridge.set_threshold')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Sets the vote threshold for proposals.
     * 
     *  This threshold is used to determine how many votes are required
     *  before a proposal is executed.
     * 
     *  # <weight>
     *  - O(1) lookup and insert
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('ChainBridge.set_threshold') === '830625439b0d34bda66ab0cbe8f29272f03f9b722f2e02d92330115c2aaed35c'
    }

    /**
     *  Sets the vote threshold for proposals.
     * 
     *  This threshold is used to determine how many votes are required
     *  before a proposal is executed.
     * 
     *  # <weight>
     *  - O(1) lookup and insert
     *  # </weight>
     */
    get asV45(): {threshold: number} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ChainBridgeWhitelistChainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChainBridge.whitelist_chain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Enables a chain ID as a source or destination for a bridge transfer.
     * 
     *  # <weight>
     *  - O(1) lookup and insert
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('ChainBridge.whitelist_chain') === 'bb0150c3bd9f54fc5caf008c06e878e9a29f9e08fdd31937256852da8db9bd35'
    }

    /**
     *  Enables a chain ID as a source or destination for a bridge transfer.
     * 
     *  # <weight>
     *  - O(1) lookup and insert
     *  # </weight>
     */
    get asV45(): {id: number} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsCallCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.call')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Makes a call to an account, optionally transferring some balance.
     * 
     *  * If the account is a smart-contract account, the associated code will be
     *  executed and any value will be transferred.
     *  * If the account is a regular account, any value will be transferred.
     *  * If no account exists and the call value is not less than `existential_deposit`,
     *  a regular account will be created and any value will be transferred.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Contracts.call') === 'af45f705198ff82e3e09862f6f50900a5141146883571290aa31dd62f1200860'
    }

    /**
     *  Makes a call to an account, optionally transferring some balance.
     * 
     *  * If the account is a smart-contract account, the associated code will be
     *  executed and any value will be transferred.
     *  * If the account is a regular account, any value will be transferred.
     *  * If no account exists and the call value is not less than `existential_deposit`,
     *  a regular account will be created and any value will be transferred.
     */
    get asV31(): {dest: v31.LookupSource, value: bigint, gasLimit: bigint, data: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Makes a call to an account, optionally transferring some balance.
     * 
     *  * If the account is a smart-contract account, the associated code will be
     *  executed and any value will be transferred.
     *  * If the account is a regular account, any value will be transferred.
     *  * If no account exists and the call value is not less than `existential_deposit`,
     *  a regular account will be created and any value will be transferred.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Contracts.call') === '34b416e9bf55e07f9fe3c984903d31f6ca7a5d4217946970ee70a0808ef819d8'
    }

    /**
     *  Makes a call to an account, optionally transferring some balance.
     * 
     *  * If the account is a smart-contract account, the associated code will be
     *  executed and any value will be transferred.
     *  * If the account is a regular account, any value will be transferred.
     *  * If no account exists and the call value is not less than `existential_deposit`,
     *  a regular account will be created and any value will be transferred.
     */
    get asV45(): {dest: v45.LookupSource, value: bigint, gasLimit: bigint, data: Uint8Array} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Makes a call to an account, optionally transferring some balance.
     * 
     * # Parameters
     * 
     * * `dest`: Address of the contract to call.
     * * `value`: The balance to transfer from the `origin` to `dest`.
     * * `gas_limit`: The gas limit enforced when executing the constructor.
     * * `storage_deposit_limit`: The maximum amount of balance that can be charged from the
     *   caller to pay for the storage consumed.
     * * `data`: The input data to pass to the contract.
     * 
     * * If the account is a smart-contract account, the associated code will be
     * executed and any value will be transferred.
     * * If the account is a regular account, any value will be transferred.
     * * If no account exists and the call value is not less than `existential_deposit`,
     * a regular account will be created and any value will be transferred.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Contracts.call') === 'b1999c3164727b906cc424a2e07d27f8143eaba50777afd24a205fad27e05ea1'
    }

    /**
     * Makes a call to an account, optionally transferring some balance.
     * 
     * # Parameters
     * 
     * * `dest`: Address of the contract to call.
     * * `value`: The balance to transfer from the `origin` to `dest`.
     * * `gas_limit`: The gas limit enforced when executing the constructor.
     * * `storage_deposit_limit`: The maximum amount of balance that can be charged from the
     *   caller to pay for the storage consumed.
     * * `data`: The input data to pass to the contract.
     * 
     * * If the account is a smart-contract account, the associated code will be
     * executed and any value will be transferred.
     * * If the account is a regular account, any value will be transferred.
     * * If no account exists and the call value is not less than `existential_deposit`,
     * a regular account will be created and any value will be transferred.
     */
    get asV53(): {dest: v53.MultiAddress, value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), data: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsClaimSurchargeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.claim_surcharge')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Allows block producers to claim a small reward for evicting a contract. If a block producer
     *  fails to do so, a regular users will be allowed to claim the reward.
     * 
     *  If contract is not evicted as a result of this call, no actions are taken and
     *  the sender is not eligible for the reward.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Contracts.claim_surcharge') === 'd4167ca7ff5da85ce584404b5a6c24af44f482d6c33ccee7c4fccdc4f029c53c'
    }

    /**
     *  Allows block producers to claim a small reward for evicting a contract. If a block producer
     *  fails to do so, a regular users will be allowed to claim the reward.
     * 
     *  If contract is not evicted as a result of this call, no actions are taken and
     *  the sender is not eligible for the reward.
     */
    get asV31(): {dest: Uint8Array, auxSender: (Uint8Array | undefined)} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsInstantiateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.instantiate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance.
     * 
     *  Instantiation is executed as follows:
     * 
     *  - The destination address is computed based on the sender and hash of the code.
     *  - The smart-contract account is created at the computed address.
     *  - The `ctor_code` is executed in the context of the newly-created account. Buffer returned
     *    after the execution is saved as the `code` of the account. That code will be invoked
     *    upon any call received by this account.
     *  - The contract is initialized.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Contracts.instantiate') === '5f3480d6aee6cef7120937cf48a6c4abf333c28081e8a5fbb4692474b4093b8c'
    }

    /**
     *  Instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance.
     * 
     *  Instantiation is executed as follows:
     * 
     *  - The destination address is computed based on the sender and hash of the code.
     *  - The smart-contract account is created at the computed address.
     *  - The `ctor_code` is executed in the context of the newly-created account. Buffer returned
     *    after the execution is saved as the `code` of the account. That code will be invoked
     *    upon any call received by this account.
     *  - The contract is initialized.
     */
    get asV31(): {endowment: bigint, gasLimit: bigint, codeHash: Uint8Array, data: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Instantiates a new contract from the `code_hash` generated by `put_code`,
     *  optionally transferring some balance.
     * 
     *  The supplied `salt` is used for contract address deriviation. See `fn contract_address`.
     * 
     *  Instantiation is executed as follows:
     * 
     *  - The destination address is computed based on the sender, code_hash and the salt.
     *  - The smart-contract account is created at the computed address.
     *  - The `ctor_code` is executed in the context of the newly-created account. Buffer returned
     *    after the execution is saved as the `code` of the account. That code will be invoked
     *    upon any call received by this account.
     *  - The contract is initialized.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Contracts.instantiate') === '9362c9254d4581f765c33c217763f10064180560608ecd857f35f135b2577963'
    }

    /**
     *  Instantiates a new contract from the `code_hash` generated by `put_code`,
     *  optionally transferring some balance.
     * 
     *  The supplied `salt` is used for contract address deriviation. See `fn contract_address`.
     * 
     *  Instantiation is executed as follows:
     * 
     *  - The destination address is computed based on the sender, code_hash and the salt.
     *  - The smart-contract account is created at the computed address.
     *  - The `ctor_code` is executed in the context of the newly-created account. Buffer returned
     *    after the execution is saved as the `code` of the account. That code will be invoked
     *    upon any call received by this account.
     *  - The contract is initialized.
     */
    get asV45(): {endowment: bigint, gasLimit: bigint, codeHash: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Instantiates a contract from a previously deployed wasm binary.
     * 
     * This function is identical to [`Self::instantiate_with_code`] but without the
     * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
     * must be supplied.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Contracts.instantiate') === '065e28d4aca8ef55389ab2cdeb357c40056320f063a3db0a6c9157a597c14b5b'
    }

    /**
     * Instantiates a contract from a previously deployed wasm binary.
     * 
     * This function is identical to [`Self::instantiate_with_code`] but without the
     * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
     * must be supplied.
     */
    get asV53(): {value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), codeHash: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsInstantiateWithCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.instantiate_with_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Instantiates a new contract from the supplied `code` optionally transferring
     * some balance.
     * 
     * This dispatchable has the same effect as calling [`Self::upload_code`] +
     * [`Self::instantiate`]. Bundling them together provides efficiency gains. Please
     * also check the documentation of [`Self::upload_code`].
     * 
     * # Parameters
     * 
     * * `value`: The balance to transfer from the `origin` to the newly created contract.
     * * `gas_limit`: The gas limit enforced when executing the constructor.
     * * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
     *   from the caller to pay for the storage consumed.
     * * `code`: The contract code to deploy in raw bytes.
     * * `data`: The input data to pass to the contract constructor.
     * * `salt`: Used for the address derivation. See [`Pallet::contract_address`].
     * 
     * Instantiation is executed as follows:
     * 
     * - The supplied `code` is instrumented, deployed, and a `code_hash` is created for that
     *   code.
     * - If the `code_hash` already exists on the chain the underlying `code` will be shared.
     * - The destination address is computed based on the sender, code_hash and the salt.
     * - The smart-contract account is created at the computed address.
     * - The `value` is transferred to the new account.
     * - The `deploy` function is executed in the context of the newly-created account.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Contracts.instantiate_with_code') === '2204435764a14a39d7c13f6cffbf98550fcaad4cba9d91306fe99d88a718a62c'
    }

    /**
     * Instantiates a new contract from the supplied `code` optionally transferring
     * some balance.
     * 
     * This dispatchable has the same effect as calling [`Self::upload_code`] +
     * [`Self::instantiate`]. Bundling them together provides efficiency gains. Please
     * also check the documentation of [`Self::upload_code`].
     * 
     * # Parameters
     * 
     * * `value`: The balance to transfer from the `origin` to the newly created contract.
     * * `gas_limit`: The gas limit enforced when executing the constructor.
     * * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
     *   from the caller to pay for the storage consumed.
     * * `code`: The contract code to deploy in raw bytes.
     * * `data`: The input data to pass to the contract constructor.
     * * `salt`: Used for the address derivation. See [`Pallet::contract_address`].
     * 
     * Instantiation is executed as follows:
     * 
     * - The supplied `code` is instrumented, deployed, and a `code_hash` is created for that
     *   code.
     * - If the `code_hash` already exists on the chain the underlying `code` will be shared.
     * - The destination address is computed based on the sender, code_hash and the salt.
     * - The smart-contract account is created at the computed address.
     * - The `value` is transferred to the new account.
     * - The `deploy` function is executed in the context of the newly-created account.
     */
    get asV53(): {value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), code: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsPutCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.put_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Stores the given binary Wasm code into the chain's storage and returns its `codehash`.
     *  You can instantiate contracts only with stored code.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Contracts.put_code') === 'f7adda23bc087341a2df39473bd82548d177da751359bd1655991717909be357'
    }

    /**
     *  Stores the given binary Wasm code into the chain's storage and returns its `codehash`.
     *  You can instantiate contracts only with stored code.
     */
    get asV31(): {gasLimit: bigint, code: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Stores the given binary Wasm code into the chain's storage and returns its `codehash`.
     *  You can instantiate contracts only with stored code.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Contracts.put_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     *  Stores the given binary Wasm code into the chain's storage and returns its `codehash`.
     *  You can instantiate contracts only with stored code.
     */
    get asV38(): {code: Uint8Array} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsRemoveCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.remove_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the code stored under `code_hash` and refund the deposit to its owner.
     * 
     * A code can only be removed by its original uploader (its owner) and only if it is
     * not used by any contract.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Contracts.remove_code') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * Remove the code stored under `code_hash` and refund the deposit to its owner.
     * 
     * A code can only be removed by its original uploader (its owner) and only if it is
     * not used by any contract.
     */
    get asV53(): {codeHash: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsUpdateScheduleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.update_schedule')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Updates the schedule for metering contracts.
     * 
     *  The schedule must have a greater version than the stored schedule.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Contracts.update_schedule') === '843d191ee15fd8eeba5ef0378990503e36801d2576d9e50b13d569ba485778b1'
    }

    /**
     *  Updates the schedule for metering contracts.
     * 
     *  The schedule must have a greater version than the stored schedule.
     */
    get asV31(): {schedule: v31.Schedule} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Updates the schedule for metering contracts.
     * 
     *  The schedule must have a greater version than the stored schedule.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Contracts.update_schedule') === 'ca87bb2a8684344c78ea6fcc93fc92ab9c7bfed0cdfc302bb941c2ee4a16659f'
    }

    /**
     *  Updates the schedule for metering contracts.
     * 
     *  The schedule must have a greater version than the stored schedule.
     */
    get asV38(): {schedule: v38.Schedule} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsUploadCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.upload_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Upload new `code` without instantiating a contract from it.
     * 
     * If the code does not already exist a deposit is reserved from the caller
     * and unreserved only when [`Self::remove_code`] is called. The size of the reserve
     * depends on the instrumented size of the the supplied `code`.
     * 
     * If the code already exists in storage it will still return `Ok` and upgrades
     * the in storage version to the current
     * [`InstructionWeights::version`](InstructionWeights).
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Contracts.upload_code') === 'e5d80c6158333f4c26b9bf07184fcf08a6cc009b6fca8d942ba16f848c6a6417'
    }

    /**
     * Upload new `code` without instantiating a contract from it.
     * 
     * If the code does not already exist a deposit is reserved from the caller
     * and unreserved only when [`Self::remove_code`] is called. The size of the reserve
     * depends on the instrumented size of the the supplied `code`.
     * 
     * If the code already exists in storage it will still return `Ok` and upgrades
     * the in storage version to the current
     * [`InstructionWeights::version`](InstructionWeights).
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    get asV53(): {code: Uint8Array, storageDepositLimit: (bigint | undefined)} {
        assert(this.isV53)
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
    get isV38(): boolean {
        return this._chain.getCallHash('Council.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
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
    get asV38(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV38)
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
     *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
     * 
     *  Must be called by the Root origin.
     * 
     *  Parameters:
     *  * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     *  # <weight>
     *  Complexity: O(P) where P is the number of max proposals
     *  Base Weight: .49 * P
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Council.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
     *  Base Weight: .49 * P
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    get asV38(): {proposalHash: Uint8Array} {
        assert(this.isV38)
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
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Council.execute') === '6cd011a1761a5e105b86798d205580d6045214938d50c846ca0fb40b08fc191e'
    }

    /**
     *  Dispatch a proposal from a member using the `Member` origin.
     * 
     *  Origin must be a member of the collective.
     */
    get asV31(): {proposal: v31.Proposal} {
        assert(this.isV31)
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
    get isV38(): boolean {
        return this._chain.getCallHash('Council.execute') === '512df791070a78799f6470bb771332df253dd5a84413e4de6a1adb8fea2fbb55'
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
    get asV38(): {proposal: v38.Proposal, lengthBound: number} {
        assert(this.isV38)
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
    get isV41(): boolean {
        return this._chain.getCallHash('Council.execute') === 'eefc0b7e74237285272ac463afb9ff581c660117fbf0469fc890e0a0ac557aa4'
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
    get asV41(): {proposal: v41.Proposal, lengthBound: number} {
        assert(this.isV41)
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
    get isV45(): boolean {
        return this._chain.getCallHash('Council.execute') === 'e90e7dbaf266255ac49ac3173ee53f7ccde887b35b5728c92e2878899d8e65d2'
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
    get asV45(): {proposal: v45.Proposal, lengthBound: number} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Council.execute') === '8051f26d4557eefc6625fc2abb9502058c9578a45a3991e3a4feffe312b9c4a3'
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
    get asV53(): {proposal: v53.Call, lengthBound: number} {
        assert(this.isV53)
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
     *  # <weight>
     *  - Bounded storage reads and writes.
     *  - Argument `threshold` has bearing on weight.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Council.propose') === '5db53c1415ebd7396b17b3fe9fa2e6ee71abfb2d1499724a6a0711fc8eea0db0'
    }

    /**
     *  # <weight>
     *  - Bounded storage reads and writes.
     *  - Argument `threshold` has bearing on weight.
     *  # </weight>
     */
    get asV31(): {threshold: number, proposal: v31.Proposal} {
        assert(this.isV31)
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
    get isV38(): boolean {
        return this._chain.getCallHash('Council.propose') === 'f15703df8e286b1a6069eed1d16b9c5ec758a283b6345aa41cb4f0323a21fcd4'
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
    get asV38(): {threshold: number, proposal: v38.Proposal, lengthBound: number} {
        assert(this.isV38)
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
    get isV41(): boolean {
        return this._chain.getCallHash('Council.propose') === 'e289d5b79f7efc0160ef6fa21340b16ec49a5ed9c6f8869e413c23b626eb3a0e'
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
    get asV41(): {threshold: number, proposal: v41.Proposal, lengthBound: number} {
        assert(this.isV41)
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
    get isV45(): boolean {
        return this._chain.getCallHash('Council.propose') === 'a2a81691f13f76140ee84dbaf6083dd679e441968907c2a018eaef06b92dd6eb'
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
    get asV45(): {threshold: number, proposal: v45.Proposal, lengthBound: number} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Council.propose') === '06d859a984cfe7e43d7d6e4ad2a60b87249685e0f9647e106dca00b4b990f5c7'
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
    get asV53(): {threshold: number, proposal: v53.Call, lengthBound: number} {
        assert(this.isV53)
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
     *  Set the collective's membership manually to `new_members`. Be nice to the chain and
     *  provide it pre-sorted.
     * 
     *  Requires root origin.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Council.set_members') === '03fec7f5be686ca7cc3fd5b0b1c734db606d398a0df652a8f6616373ca22b16d'
    }

    /**
     *  Set the collective's membership manually to `new_members`. Be nice to the chain and
     *  provide it pre-sorted.
     * 
     *  Requires root origin.
     */
    get asV31(): {newMembers: Uint8Array[]} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
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
     *  NOTE: Does not enforce the expected `MAX_MEMBERS` limit on the amount of members, but
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
    get isV38(): boolean {
        return this._chain.getCallHash('Council.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
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
     *  NOTE: Does not enforce the expected `MAX_MEMBERS` limit on the amount of members, but
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
    get asV38(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV38)
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
     *  # <weight>
     *  - Bounded storage read and writes.
     *  - Will be slightly heavier if the proposal is approved / disapproved after the vote.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Council.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     *  # <weight>
     *  - Bounded storage read and writes.
     *  - Will be slightly heavier if the proposal is approved / disapproved after the vote.
     *  # </weight>
     */
    get asV31(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV31)
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
    get isV45(): boolean {
        return this._chain.getCallHash('Democracy.blacklist') === '8d8922c0775adfb1df719211ab4fc6fb40b6cc8864038bcb1b544d9cf039b30a'
    }

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
    get asV45(): {proposalHash: Uint8Array, maybeRefIndex: (number | undefined)} {
        assert(this.isV45)
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
     *  Remove a proposal.
     * 
     *  The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     *  - `prop_index`: The index of the proposal to cancel.
     * 
     *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Democracy.cancel_proposal') === '0e50c7564a4a7f4e6a09a0abcc8022f4445c064144d2318ed086e6080bee800d'
    }

    /**
     *  Remove a proposal.
     * 
     *  The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     *  - `prop_index`: The index of the proposal to cancel.
     * 
     *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get asV45(): {propIndex: number} {
        assert(this.isV45)
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
     *  Cancel a proposal queued for enactment.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.cancel_queued') === '60780274011857b5305b5413b2b4742e5d41eb58a0948049d0672e81af198cb7'
    }

    /**
     *  Cancel a proposal queued for enactment.
     */
    get asV31(): {which: number} {
        assert(this.isV31)
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
     *  Remove a referendum.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.cancel_referendum') === 'efe4ecff834678ca8b73ea6e2f38e514997eb402e82da2ce4cf036008844a857'
    }

    /**
     *  Remove a referendum.
     */
    get asV31(): {refIndex: number} {
        assert(this.isV31)
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
     *  Veto and blacklist the proposal hash. Must be from Root origin.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Veto and blacklist the proposal hash. Must be from Root origin.
     */
    get asV31(): null {
        assert(this.isV31)
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
     *  Delegate vote.
     * 
     *  # <weight>
     *  - One extra DB entry.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === 'd9417a632105aca765ccf10b89de97fe97492311af7c953010fed5edc4ea50ec'
    }

    /**
     *  Delegate vote.
     * 
     *  # <weight>
     *  - One extra DB entry.
     *  # </weight>
     */
    get asV31(): {to: Uint8Array, conviction: v31.Conviction} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

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
    get isV38(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '719d303e364256b757876a8d1b18c8d62a96223d68ffc6f6c1bf18240e8d9793'
    }

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
    get asV38(): {to: Uint8Array, conviction: v38.Conviction, balance: bigint} {
        assert(this.isV38)
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
     *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     *  referendum.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.emergency_cancel') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     *  referendum.
     */
    get asV31(): {refIndex: number} {
        assert(this.isV31)
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
     *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Democracy.enact_proposal') === 'de192ab0f058d1fb7eacc523bf0e05128d16509ec21bf445f0eefa47c89e60bf'
    }

    /**
     *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get asV38(): {proposalHash: Uint8Array, index: number} {
        assert(this.isV38)
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
     *  Schedule a referendum to be tabled once it is legal to schedule an external
     *  referendum.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.external_propose') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Schedule a referendum to be tabled once it is legal to schedule an external
     *  referendum.
     */
    get asV31(): {proposalHash: Uint8Array} {
        assert(this.isV31)
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
     *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     *  schedule an external referendum.
     * 
     *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     *  pre-scheduled `external_propose` call.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_default') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     *  schedule an external referendum.
     * 
     *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     *  pre-scheduled `external_propose` call.
     */
    get asV31(): {proposalHash: Uint8Array} {
        assert(this.isV31)
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
     *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     *  an external referendum.
     * 
     *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     *  pre-scheduled `external_propose` call.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_majority') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     *  an external referendum.
     * 
     *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     *  pre-scheduled `external_propose` call.
     */
    get asV31(): {proposalHash: Uint8Array} {
        assert(this.isV31)
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
     *  Schedule the currently externally-proposed majority-carries referendum to be tabled
     *  immediately. If there is no externally-proposed referendum currently, or if there is one
     *  but it is not a majority-carries referendum then it fails.
     * 
     *  - `proposal_hash`: The hash of the current external proposal.
     *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     *    `EmergencyVotingPeriod` if too low.
     *  - `delay`: The number of block after voting has ended in approval and this should be
     *    enacted. This doesn't have a minimum amount.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.fast_track') === '27cb200e922e485b41e3150b3d7bf5e8624346f6ff1d78601373ba3d80689c89'
    }

    /**
     *  Schedule the currently externally-proposed majority-carries referendum to be tabled
     *  immediately. If there is no externally-proposed referendum currently, or if there is one
     *  but it is not a majority-carries referendum then it fails.
     * 
     *  - `proposal_hash`: The hash of the current external proposal.
     *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     *    `EmergencyVotingPeriod` if too low.
     *  - `delay`: The number of block after voting has ended in approval and this should be
     *    enacted. This doesn't have a minimum amount.
     */
    get asV31(): {proposalHash: Uint8Array, votingPeriod: number, delay: number} {
        assert(this.isV31)
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
     *  Register the preimage for an upcoming proposal. This requires the proposal to be
     *  in the dispatch queue. No deposit is needed.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     *  Register the preimage for an upcoming proposal. This requires the proposal to be
     *  in the dispatch queue. No deposit is needed.
     */
    get asV31(): {encodedProposal: Uint8Array} {
        assert(this.isV31)
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
     *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asV38(): {encodedProposal: Uint8Array} {
        assert(this.isV38)
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
     *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     *  in the dispatch queue but does require a deposit, returned once enacted.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     *  in the dispatch queue but does require a deposit, returned once enacted.
     */
    get asV31(): {encodedProposal: Uint8Array} {
        assert(this.isV31)
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
     *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asV38(): {encodedProposal: Uint8Array} {
        assert(this.isV38)
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
     *  Propose a sensitive action to be taken.
     * 
     *  # <weight>
     *  - O(1).
     *  - Two DB changes, one DB entry.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.propose') === '99f964e94c86db2029fab3e54a9230e36fe7533d252b5ecbc36f16c06e11f18b'
    }

    /**
     *  Propose a sensitive action to be taken.
     * 
     *  # <weight>
     *  - O(1).
     *  - Two DB changes, one DB entry.
     *  # </weight>
     */
    get asV31(): {proposalHash: Uint8Array, value: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyProxyVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.proxy_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Vote in a referendum on behalf of a stash. If `vote.is_aye()`, the vote is to enact
     *  the proposal; otherwise it is a vote to keep the status quo.
     * 
     *  # <weight>
     *  - O(1).
     *  - One DB change, one DB entry.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.proxy_vote') === '3a01fd8d5e95145a311b99cf21decce5be8578650f311f3a6091395407f5efe9'
    }

    /**
     *  Vote in a referendum on behalf of a stash. If `vote.is_aye()`, the vote is to enact
     *  the proposal; otherwise it is a vote to keep the status quo.
     * 
     *  # <weight>
     *  - O(1).
     *  - One DB change, one DB entry.
     *  # </weight>
     */
    get asV31(): {refIndex: number, vote: number} {
        assert(this.isV31)
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
     *  Remove an expired proposal preimage and collect the deposit.
     * 
     *  This will only work after `VotingPeriod` blocks from the time that the preimage was
     *  noted, if it's the same account doing it. If it's a different account, then it'll only
     *  work an additional `EnactmentPeriod` later.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.reap_preimage') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Remove an expired proposal preimage and collect the deposit.
     * 
     *  This will only work after `VotingPeriod` blocks from the time that the preimage was
     *  noted, if it's the same account doing it. If it's a different account, then it'll only
     *  work an additional `EnactmentPeriod` later.
     */
    get asV31(): {proposalHash: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

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
    get isV38(): boolean {
        return this._chain.getCallHash('Democracy.reap_preimage') === '23573ffc912e8a31889875352d3543e4538e2f3beb6a89ef86d10cf1cb8b7aca'
    }

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
    get asV38(): {proposalHash: Uint8Array, proposalLenUpperBound: number} {
        assert(this.isV38)
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
    get isV38(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '57db819150acc73e380a9908a05d4f777cd3af825527d7ad88560426e1d0f652'
    }

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
    get asV38(): {target: Uint8Array, index: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveProxyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_proxy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Clear the proxy. Called by the stash.
     * 
     *  # <weight>
     *  - One DB clear.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.remove_proxy') === 'fe013346080a3f49a16b6b1cbf1131446bdf3e43e05d0df93b3e1998ab56e194'
    }

    /**
     *  Clear the proxy. Called by the stash.
     * 
     *  # <weight>
     *  - One DB clear.
     *  # </weight>
     */
    get asV31(): {proxy: Uint8Array} {
        assert(this.isV31)
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
    get isV38(): boolean {
        return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

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
    get asV38(): {index: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyResignProxyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.resign_proxy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Clear the proxy. Called by the proxy.
     * 
     *  # <weight>
     *  - One DB clear.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.resign_proxy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Clear the proxy. Called by the proxy.
     * 
     *  # <weight>
     *  - One DB clear.
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
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
     *  Propose a sensitive action to be taken.
     * 
     *  # <weight>
     *  - O(1).
     *  - One DB entry.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.second') === '7ac80a800d6686f21181e7b5b45c8949dc5b807bc6ec111188c7c6850a21b898'
    }

    /**
     *  Propose a sensitive action to be taken.
     * 
     *  # <weight>
     *  - O(1).
     *  - One DB entry.
     *  # </weight>
     */
    get asV31(): {proposal: number} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

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
    get isV38(): boolean {
        return this._chain.getCallHash('Democracy.second') === 'abe1357aae784eefd21f6999076deb6cfbc92fcb9e80c21e93a944ceb739423c'
    }

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
    get asV38(): {proposal: number, secondsUpperBound: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracySetProxyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.set_proxy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Specify a proxy. Called by the stash.
     * 
     *  # <weight>
     *  - One extra DB entry.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.set_proxy') === 'fe013346080a3f49a16b6b1cbf1131446bdf3e43e05d0df93b3e1998ab56e194'
    }

    /**
     *  Specify a proxy. Called by the stash.
     * 
     *  # <weight>
     *  - One extra DB entry.
     *  # </weight>
     */
    get asV31(): {proxy: Uint8Array} {
        assert(this.isV31)
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
     *  Undelegate vote.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Undelegate vote.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
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

    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.unlock') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
    }

    get asV31(): {target: Uint8Array} {
        assert(this.isV31)
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
     *  Veto and blacklist the external proposal hash.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.veto_external') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Veto and blacklist the external proposal hash.
     */
    get asV31(): {proposalHash: Uint8Array} {
        assert(this.isV31)
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
     *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     *  otherwise it is a vote to keep the status quo.
     * 
     *  # <weight>
     *  - O(1).
     *  - One DB change, one DB entry.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '3a01fd8d5e95145a311b99cf21decce5be8578650f311f3a6091395407f5efe9'
    }

    /**
     *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     *  otherwise it is a vote to keep the status quo.
     * 
     *  # <weight>
     *  - O(1).
     *  - One DB change, one DB entry.
     *  # </weight>
     */
    get asV31(): {refIndex: number, vote: number} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

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
    get isV38(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '6cdb35b5ffcb74405cdf222b0cc0bf7ad7025d59f676bea6712d77bcc9aff1db'
    }

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
    get asV38(): {refIndex: number, vote: v38.AccountVote} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
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
    get isV53(): boolean {
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
    get asV53(): {refIndex: number, vote: v53.AccountVote} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class DynamicFeeNoteMinGasPriceTargetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DynamicFee.note_min_gas_price_target')
        this._chain = ctx._chain
        this.call = call
    }

    get isV53(): boolean {
        return this._chain.getCallHash('DynamicFee.note_min_gas_price_target') === 'f1569d9a22c0297faef9d47ebb584803f9d663acbee5ee3598cae7c04744ff63'
    }

    get asV53(): {target: bigint} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmCallCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.call')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('EVM.call') === '679e381693b0be9118f48226d7e7dec368938c2fa9f239a58d7ae4bdbff6c49d'
    }

    /**
     *  Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    get asV45(): {source: Uint8Array, target: Uint8Array, input: Uint8Array, value: bigint, gasLimit: number, gasPrice: bigint, nonce: (bigint | undefined)} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('EVM.call') === 'eeb77745ff27b8506fb1b57e6ef488c35d1ac95be3176673b1921b8ab0f9e942'
    }

    /**
     * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    get asV53(): {source: Uint8Array, target: Uint8Array, input: Uint8Array, value: bigint, gasLimit: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: (bigint | undefined), nonce: (bigint | undefined), accessList: [Uint8Array, Uint8Array[]][]} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmCreateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.create')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Issue an EVM create operation. This is similar to a contract creation transaction in
     *  Ethereum.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('EVM.create') === '8c9a104f5c2975bc5244ec5bd6e401d51518de6990b92e9bb33c9c3b2f29293c'
    }

    /**
     *  Issue an EVM create operation. This is similar to a contract creation transaction in
     *  Ethereum.
     */
    get asV45(): {source: Uint8Array, init: Uint8Array, value: bigint, gasLimit: number, gasPrice: bigint, nonce: (bigint | undefined)} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Issue an EVM create operation. This is similar to a contract creation transaction in
     * Ethereum.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('EVM.create') === 'b2d4cf6513231e7f717fc6fe95cbd4f5ca7b8b0c1d2979ba0aff39e8cc9397dd'
    }

    /**
     * Issue an EVM create operation. This is similar to a contract creation transaction in
     * Ethereum.
     */
    get asV53(): {source: Uint8Array, init: Uint8Array, value: bigint, gasLimit: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: (bigint | undefined), nonce: (bigint | undefined), accessList: [Uint8Array, Uint8Array[]][]} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmCreate2Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.create2')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Issue an EVM create2 operation.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('EVM.create2') === 'e67602a2e46bed34a238977687a47ce597798a5852eac6ddef81fec997e98f29'
    }

    /**
     *  Issue an EVM create2 operation.
     */
    get asV45(): {source: Uint8Array, init: Uint8Array, salt: Uint8Array, value: bigint, gasLimit: number, gasPrice: bigint, nonce: (bigint | undefined)} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Issue an EVM create2 operation.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('EVM.create2') === '18602ee4331e8cb35f58191422a9e3d8c7f8ad7a7203e110799b90c33ad59ad9'
    }

    /**
     * Issue an EVM create2 operation.
     */
    get asV53(): {source: Uint8Array, init: Uint8Array, salt: Uint8Array, value: bigint, gasLimit: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: (bigint | undefined), nonce: (bigint | undefined), accessList: [Uint8Array, Uint8Array[]][]} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Withdraw balance from EVM into currency/balances module.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('EVM.withdraw') === '6213607a84a4a3aa47d755efc366f94b81dbbfa3fe175ebac796707949240fdb'
    }

    /**
     *  Withdraw balance from EVM into currency/balances module.
     */
    get asV45(): {address: Uint8Array, value: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class EdgeBridgeTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EdgeBridge.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Executes a simple currency transfer using the bridge account as the source
     */
    get isV45(): boolean {
        return this._chain.getCallHash('EdgeBridge.transfer') === 'ff235a8cc8e39172d7506c342732c7a5dbd72259d5c5b9cdfa576e00efcf67f8'
    }

    /**
     *  Executes a simple currency transfer using the bridge account as the source
     */
    get asV45(): {to: Uint8Array, amount: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class EdgeBridgeTransferNativeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EdgeBridge.transfer_native')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('EdgeBridge.transfer_native') === 'bf07c8d0ffa9f334ba9d82cd811f2e64020396c832674437eae31f10de941cb6'
    }

    /**
     *  Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
     */
    get asV45(): {amount: bigint, recipient: Uint8Array, destId: number} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseGovernanceFallbackCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.governance_fallback')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Trigger the governance fallback.
     * 
     * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
     * calling [`Call::set_emergency_election_result`].
     */
    get isV53(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.governance_fallback') === 'f3179fd0f0529838d5758e1e919a1900aa58425b96768e9648bf806ee9c9b1ae'
    }

    /**
     * Trigger the governance fallback.
     * 
     * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
     * calling [`Call::set_emergency_election_result`].
     */
    get asV53(): {maybeMaxVoters: (number | undefined), maybeMaxTargets: (number | undefined)} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSetEmergencyElectionResultCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.set_emergency_election_result')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a solution in the queue, to be handed out to the client of this pallet in the next
     * call to `ElectionProvider::elect`.
     * 
     * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
     * 
     * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
     * feasibility check itself can in principle cause the election process to fail (due to
     * memory/weight constrains).
     */
    get isV53(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.set_emergency_election_result') === '976eeea3dee9ad3c2d95e30c6751a49c4ae6a755a0448d0d6f282625dd92e539'
    }

    /**
     * Set a solution in the queue, to be handed out to the client of this pallet in the next
     * call to `ElectionProvider::elect`.
     * 
     * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
     * 
     * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
     * feasibility check itself can in principle cause the election process to fail (due to
     * memory/weight constrains).
     */
    get asV53(): {supports: [Uint8Array, v53.Support][]} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSetMinimumUntrustedScoreCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.set_minimum_untrusted_score')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a new value for `MinimumUntrustedScore`.
     * 
     * Dispatch origin must be aligned with `T::ForceOrigin`.
     * 
     * This check can be turned off by setting the value to `None`.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.set_minimum_untrusted_score') === '4b6d16ae537aca5ce887c10c25d838413bb18639efa0829f62aa6b722837c206'
    }

    /**
     * Set a new value for `MinimumUntrustedScore`.
     * 
     * Dispatch origin must be aligned with `T::ForceOrigin`.
     * 
     * This check can be turned off by setting the value to `None`.
     */
    get asV53(): {maybeNextScore: (v53.ElectionScore | undefined)} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSubmitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.submit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Submit a solution for the signed phase.
     * 
     * The dispatch origin fo this call must be __signed__.
     * 
     * The solution is potentially queued, based on the claimed score and processed at the end
     * of the signed phase.
     * 
     * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     * might be rewarded, slashed, or get all or a part of the deposit back.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.submit') === '557615f0c49c60f0230763f545f02d629e721649044d5414869be2def11828ca'
    }

    /**
     * Submit a solution for the signed phase.
     * 
     * The dispatch origin fo this call must be __signed__.
     * 
     * The solution is potentially queued, based on the claimed score and processed at the end
     * of the signed phase.
     * 
     * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
     * might be rewarded, slashed, or get all or a part of the deposit back.
     */
    get asV53(): {rawSolution: v53.RawSolution} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionProviderMultiPhaseSubmitUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ElectionProviderMultiPhase.submit_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Submit a solution for the unsigned phase.
     * 
     * The dispatch origin fo this call must be __none__.
     * 
     * This submission is checked on the fly. Moreover, this unsigned solution is only
     * validated when submitted to the pool from the **local** node. Effectively, this means
     * that only active validators can submit this transaction when authoring a block (similar
     * to an inherent).
     * 
     * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     * panic if the solution submitted by the validator is invalid in any way, effectively
     * putting their authoring reward at risk.
     * 
     * No deposit or reward is associated with this submission.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('ElectionProviderMultiPhase.submit_unsigned') === '957b20578c01a686cdcc45e9f29b8e199841a1cc05413837f9bfd713633890d6'
    }

    /**
     * Submit a solution for the unsigned phase.
     * 
     * The dispatch origin fo this call must be __none__.
     * 
     * This submission is checked on the fly. Moreover, this unsigned solution is only
     * validated when submitted to the pool from the **local** node. Effectively, this means
     * that only active validators can submit this transaction when authoring a block (similar
     * to an inherent).
     * 
     * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
     * panic if the solution submitted by the validator is invalid in any way, effectively
     * putting their authoring reward at risk.
     * 
     * No deposit or reward is associated with this submission.
     */
    get asV53(): {rawSolution: v53.RawSolution, witness: v53.SolutionOrSnapshotSize} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen round is started.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  #### State
     *  Reads: O(do_phragmen)
     *  Writes: O(do_phragmen)
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Elections.remove_member') === '117b5f5492df8dba6b0ef0e5c8afcea59acec18fe646792886f4a218cab299b1'
    }

    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen round is started.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  #### State
     *  Reads: O(do_phragmen)
     *  Writes: O(do_phragmen)
     *  # </weight>
     */
    get asV31(): {who: v31.LookupSource} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen election is started.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  If we have a replacement:
     *  	- Base weight: 50.93 µs
     *  	- State reads:
     *  		- RunnersUp.len()
     *  		- Members, RunnersUp (remove_and_replace_member)
     *  	- State writes:
     *  		- Members, RunnersUp (remove_and_replace_member)
     *  Else, since this is a root call and will go into phragmen, we assume full block for now.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Elections.remove_member') === 'c4e89870d72f70c63ddbc31a0ca5f91ee2ecc24a9951e7a69e427981c09183af'
    }

    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen election is started.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  If we have a replacement:
     *  	- Base weight: 50.93 µs
     *  	- State reads:
     *  		- RunnersUp.len()
     *  		- Members, RunnersUp (remove_and_replace_member)
     *  	- State writes:
     *  		- Members, RunnersUp (remove_and_replace_member)
     *  Else, since this is a root call and will go into phragmen, we assume full block for now.
     *  # </weight>
     */
    get asV38(): {who: v38.LookupSource, hasReplacement: boolean} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen election is started.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  If we have a replacement:
     *  	- Base weight: 50.93 µs
     *  	- State reads:
     *  		- RunnersUp.len()
     *  		- Members, RunnersUp (remove_and_replace_member)
     *  	- State writes:
     *  		- Members, RunnersUp (remove_and_replace_member)
     *  Else, since this is a root call and will go into phragmen, we assume full block for now.
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Elections.remove_member') === '8f953115e82b1180527569f88641e39ddd7c750a04a3e0ab23cb9466f32e4a9b'
    }

    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen election is started.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  If we have a replacement:
     *  	- Base weight: 50.93 µs
     *  	- State reads:
     *  		- RunnersUp.len()
     *  		- Members, RunnersUp (remove_and_replace_member)
     *  	- State writes:
     *  		- Members, RunnersUp (remove_and_replace_member)
     *  Else, since this is a root call and will go into phragmen, we assume full block for now.
     *  # </weight>
     */
    get asV45(): {who: v45.LookupSource, hasReplacement: boolean} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsRemoveVoterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.remove_voter')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove `origin` as a voter. This removes the lock and returns the bond.
     * 
     *  # <weight>
     *  #### State
     *  Reads: O(1)
     *  Writes: O(1)
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Elections.remove_voter') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Remove `origin` as a voter. This removes the lock and returns the bond.
     * 
     *  # <weight>
     *  #### State
     *  Reads: O(1)
     *  Writes: O(1)
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsRenounceCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.renounce_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Renounce one's intention to be a candidate for the next election round. 3 potential
     *  outcomes exist:
     *  - `origin` is a candidate and not elected in any set. In this case, the bond is
     *    unreserved, returned and origin is removed as a candidate.
     *  - `origin` is a current runner up. In this case, the bond is unreserved, returned and
     *    origin is removed as a runner.
     *  - `origin` is a current member. In this case, the bond is unreserved and origin is
     *    removed as a member, consequently not being a candidate for the next round anymore.
     *    Similar to [`remove_voter`], if replacement runners exists, they are immediately used.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Elections.renounce_candidacy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Renounce one's intention to be a candidate for the next election round. 3 potential
     *  outcomes exist:
     *  - `origin` is a candidate and not elected in any set. In this case, the bond is
     *    unreserved, returned and origin is removed as a candidate.
     *  - `origin` is a current runner up. In this case, the bond is unreserved, returned and
     *    origin is removed as a runner.
     *  - `origin` is a current member. In this case, the bond is unreserved and origin is
     *    removed as a member, consequently not being a candidate for the next round anymore.
     *    Similar to [`remove_voter`], if replacement runners exists, they are immediately used.
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Renounce one's intention to be a candidate for the next election round. 3 potential
     *  outcomes exist:
     *  - `origin` is a candidate and not elected in any set. In this case, the bond is
     *    unreserved, returned and origin is removed as a candidate.
     *  - `origin` is a current runner-up. In this case, the bond is unreserved, returned and
     *    origin is removed as a runner-up.
     *  - `origin` is a current member. In this case, the bond is unreserved and origin is
     *    removed as a member, consequently not being a candidate for the next round anymore.
     *    Similar to [`remove_voter`], if replacement runners exists, they are immediately used.
     *  <weight>
     *  If a candidate is renouncing:
     *  	Base weight: 17.28 µs
     *  	Complexity of candidate_count: 0.235 µs
     *  	State reads:
     *  		- Candidates
     *  		- [AccountBalance(who) (unreserve)]
     *  	State writes:
     *  		- Candidates
     *  		- [AccountBalance(who) (unreserve)]
     *  If member is renouncing:
     *  	Base weight: 46.25 µs
     *  	State reads:
     *  		- Members, RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     *  	State writes:
     *  		- Members, RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     *  If runner is renouncing:
     *  	Base weight: 46.25 µs
     *  	State reads:
     *  		- RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     *  	State writes:
     *  		- RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     * 
     *  Weight note: The call into changeMembers need to be accounted for.
     *  </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Elections.renounce_candidacy') === '891a3ff219ab8817cfffbcd0ed48578a0fd96440dc2292a0cde84a40439f7fbe'
    }

    /**
     *  Renounce one's intention to be a candidate for the next election round. 3 potential
     *  outcomes exist:
     *  - `origin` is a candidate and not elected in any set. In this case, the bond is
     *    unreserved, returned and origin is removed as a candidate.
     *  - `origin` is a current runner-up. In this case, the bond is unreserved, returned and
     *    origin is removed as a runner-up.
     *  - `origin` is a current member. In this case, the bond is unreserved and origin is
     *    removed as a member, consequently not being a candidate for the next round anymore.
     *    Similar to [`remove_voter`], if replacement runners exists, they are immediately used.
     *  <weight>
     *  If a candidate is renouncing:
     *  	Base weight: 17.28 µs
     *  	Complexity of candidate_count: 0.235 µs
     *  	State reads:
     *  		- Candidates
     *  		- [AccountBalance(who) (unreserve)]
     *  	State writes:
     *  		- Candidates
     *  		- [AccountBalance(who) (unreserve)]
     *  If member is renouncing:
     *  	Base weight: 46.25 µs
     *  	State reads:
     *  		- Members, RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     *  	State writes:
     *  		- Members, RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     *  If runner is renouncing:
     *  	Base weight: 46.25 µs
     *  	State reads:
     *  		- RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     *  	State writes:
     *  		- RunnersUp (remove_and_replace_member),
     *  		- [AccountData(who) (unreserve)]
     * 
     *  Weight note: The call into changeMembers need to be accounted for.
     *  </weight>
     */
    get asV38(): {renouncing: v38.Renouncing} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsReportDefunctVoterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.report_defunct_voter')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report `target` for being an defunct voter. In case of a valid report, the reporter is
     *  rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and
     *  their bond is slashed.
     * 
     *  A defunct voter is defined to be:
     *    - a voter whose current submitted votes are all invalid. i.e. all of them are no
     *      longer a candidate nor an active member.
     * 
     *  # <weight>
     *  #### State
     *  Reads: O(NLogM) given M current candidates and N votes for `target`.
     *  Writes: O(1)
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Elections.report_defunct_voter') === 'cd19c54875d335772c471b877903ed3a260a7316fd1d201b12e013ae0a7dfe2d'
    }

    /**
     *  Report `target` for being an defunct voter. In case of a valid report, the reporter is
     *  rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and
     *  their bond is slashed.
     * 
     *  A defunct voter is defined to be:
     *    - a voter whose current submitted votes are all invalid. i.e. all of them are no
     *      longer a candidate nor an active member.
     * 
     *  # <weight>
     *  #### State
     *  Reads: O(NLogM) given M current candidates and N votes for `target`.
     *  Writes: O(1)
     *  # </weight>
     */
    get asV31(): {target: v31.LookupSource} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Report `target` for being an defunct voter. In case of a valid report, the reporter is
     *  rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and
     *  their bond is slashed.
     * 
     *  A defunct voter is defined to be:
     *    - a voter whose current submitted votes are all invalid. i.e. all of them are no
     *      longer a candidate nor an active member or a runner-up.
     * 
     * 
     *  The origin must provide the number of current candidates and votes of the reported target
     *  for the purpose of accurate weight calculation.
     * 
     *  # <weight>
     *  No Base weight based on min square analysis.
     *  Complexity of candidate_count: 1.755 µs
     *  Complexity of vote_count: 18.51 µs
     *  State reads:
     *   	- Voting(reporter)
     *   	- Candidate.len()
     *   	- Voting(Target)
     *   	- Candidates, Members, RunnersUp (is_defunct_voter)
     *  State writes:
     *  	- Lock(reporter || target)
     *  	- [AccountBalance(reporter)] + AccountBalance(target)
     *  	- Voting(reporter || target)
     *  Note: the db access is worse with respect to db, which is when the report is correct.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Elections.report_defunct_voter') === '06b6bca7c2f25b5dc00e07d653b298043f1152bc6501f837c134bde3c14f1fab'
    }

    /**
     *  Report `target` for being an defunct voter. In case of a valid report, the reporter is
     *  rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and
     *  their bond is slashed.
     * 
     *  A defunct voter is defined to be:
     *    - a voter whose current submitted votes are all invalid. i.e. all of them are no
     *      longer a candidate nor an active member or a runner-up.
     * 
     * 
     *  The origin must provide the number of current candidates and votes of the reported target
     *  for the purpose of accurate weight calculation.
     * 
     *  # <weight>
     *  No Base weight based on min square analysis.
     *  Complexity of candidate_count: 1.755 µs
     *  Complexity of vote_count: 18.51 µs
     *  State reads:
     *   	- Voting(reporter)
     *   	- Candidate.len()
     *   	- Voting(Target)
     *   	- Candidates, Members, RunnersUp (is_defunct_voter)
     *  State writes:
     *  	- Lock(reporter || target)
     *  	- [AccountBalance(reporter)] + AccountBalance(target)
     *  	- Voting(reporter || target)
     *  Note: the db access is worse with respect to db, which is when the report is correct.
     *  # </weight>
     */
    get asV38(): {defunct: v38.DefunctVoter} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsSubmitCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.submit_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Submit oneself for candidacy.
     * 
     *  A candidate will either:
     *    - Lose at the end of the term and forfeit their deposit.
     *    - Win and become a member. Members will eventually get their stash back.
     *    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully
     *      removed.
     * 
     *  # <weight>
     *  #### State
     *  Reads: O(LogN) Given N candidates.
     *  Writes: O(1)
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Elections.submit_candidacy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Submit oneself for candidacy.
     * 
     *  A candidate will either:
     *    - Lose at the end of the term and forfeit their deposit.
     *    - Win and become a member. Members will eventually get their stash back.
     *    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully
     *      removed.
     * 
     *  # <weight>
     *  #### State
     *  Reads: O(LogN) Given N candidates.
     *  Writes: O(1)
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Submit oneself for candidacy.
     * 
     *  A candidate will either:
     *    - Lose at the end of the term and forfeit their deposit.
     *    - Win and become a member. Members will eventually get their stash back.
     *    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully
     *      removed.
     * 
     *  # <weight>
     *  Base weight = 33.33 µs
     *  Complexity of candidate_count: 0.375 µs
     *  State reads:
     *  	- Candidates.len()
     *  	- Candidates
     *  	- Members
     *  	- RunnersUp
     *  	- [AccountBalance(who)]
     *  State writes:
     *  	- [AccountBalance(who)]
     *  	- Candidates
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Elections.submit_candidacy') === 'f9d2bc9f755e33c27d34db4c3b063daa9e2490111d35f89ea1995d74e59b1819'
    }

    /**
     *  Submit oneself for candidacy.
     * 
     *  A candidate will either:
     *    - Lose at the end of the term and forfeit their deposit.
     *    - Win and become a member. Members will eventually get their stash back.
     *    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully
     *      removed.
     * 
     *  # <weight>
     *  Base weight = 33.33 µs
     *  Complexity of candidate_count: 0.375 µs
     *  State reads:
     *  	- Candidates.len()
     *  	- Candidates
     *  	- Members
     *  	- RunnersUp
     *  	- [AccountBalance(who)]
     *  State writes:
     *  	- [AccountBalance(who)]
     *  	- Candidates
     *  # </weight>
     */
    get asV38(): {candidateCount: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Vote for a set of candidates for the upcoming round of election.
     * 
     *  The `votes` should:
     *    - not be empty.
     *    - be less than the number of candidates.
     * 
     *  Upon voting, `value` units of `who`'s balance is locked and a bond amount is reserved.
     *  It is the responsibility of the caller to not place all of their balance into the lock
     *  and keep some for further transactions.
     * 
     *  # <weight>
     *  #### State
     *  Reads: O(1)
     *  Writes: O(V) given `V` votes. V is bounded by 16.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Elections.vote') === '75939c25de1c96145b5d2d4bc8627a3fc22299f0e1f1f6f0709e54e884796bda'
    }

    /**
     *  Vote for a set of candidates for the upcoming round of election.
     * 
     *  The `votes` should:
     *    - not be empty.
     *    - be less than the number of candidates.
     * 
     *  Upon voting, `value` units of `who`'s balance is locked and a bond amount is reserved.
     *  It is the responsibility of the caller to not place all of their balance into the lock
     *  and keep some for further transactions.
     * 
     *  # <weight>
     *  #### State
     *  Reads: O(1)
     *  Writes: O(V) given `V` votes. V is bounded by 16.
     *  # </weight>
     */
    get asV31(): {votes: Uint8Array[], value: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class EthereumTransactCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Ethereum.transact')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transact an Ethereum transaction.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Ethereum.transact') === '5428ddd9e500c37fab03733ba478898e4067902f2f5f71871a41c7242422fe10'
    }

    /**
     *  Transact an Ethereum transaction.
     */
    get asV45(): {transaction: v45.EthTransaction} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transact an Ethereum transaction.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Ethereum.transact') === '1415fd2e9fbe639b903297515a3d773224e43cd3e03aa9e6c3f0ae82fe4e93f4'
    }

    /**
     * Transact an Ethereum transaction.
     */
    get asV53(): {transaction: v53.TransactionV2} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class FinalityTrackerFinalHintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FinalityTracker.final_hint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Hint that the author of this block thinks the best finalized
     *  block is the given number.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('FinalityTracker.final_hint') === '541316e9dd221458a29c70b9141157a89712cd3c223b2d3041ad734dd708dfe8'
    }

    /**
     *  Hint that the author of this block thinks the best finalized
     *  block is the given number.
     */
    get asV31(): {hint: number} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaNoteStalledCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.note_stalled')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Note that the current authority set of the GRANDPA finality gadget has
     *  stalled. This will trigger a forced authority set change at the beginning
     *  of the next session, to be enacted `delay` blocks after that. The delay
     *  should be high enough to safely assume that the block signalling the
     *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
     *  will start the new authority set using the given finalized block as base.
     *  Only callable by root.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Grandpa.note_stalled') === '6bb454c2ae9db6ee64dc7f433f0fd3b839727f70c6c835943383346896272c40'
    }

    /**
     *  Note that the current authority set of the GRANDPA finality gadget has
     *  stalled. This will trigger a forced authority set change at the beginning
     *  of the next session, to be enacted `delay` blocks after that. The delay
     *  should be high enough to safely assume that the block signalling the
     *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
     *  will start the new authority set using the given finalized block as base.
     *  Only callable by root.
     */
    get asV41(): {delay: number, bestFinalizedBlockNumber: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportEquivocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_equivocation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     * 
     *  Since the weight of the extrinsic is 0, in order to avoid DoS by
     *  submission of invalid equivocation reports, a mandatory pre-validation of
     *  the extrinsic is implemented in a `SignedExtension`.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     * 
     *  Since the weight of the extrinsic is 0, in order to avoid DoS by
     *  submission of invalid equivocation reports, a mandatory pre-validation of
     *  the extrinsic is implemented in a `SignedExtension`.
     */
    get asV38(): {equivocationProof: v38.GrandpaEquivocationProof, keyOwnerProof: v38.KeyOwnerProof} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportEquivocationUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_equivocation_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     * 
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation_unsigned') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     * 
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    get asV41(): {equivocationProof: v41.GrandpaEquivocationProof, keyOwnerProof: v41.KeyOwnerProof} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportMisbehaviorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_misbehavior')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report some misbehavior.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Grandpa.report_misbehavior') === '4d309aa0bc23cb024a30b51638974c01a0e9527e63bd54e9f2a250ba41489f2f'
    }

    /**
     *  Report some misbehavior.
     */
    get asV31(): {report: Uint8Array} {
        assert(this.isV31)
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
     *  The dispatch origin for this call must be `RegistrarOrigin` or `Root`.
     * 
     *  - `account`: the account of the registrar.
     * 
     *  Emits `RegistrarAdded` if successful.
     * 
     *  # <weight>
     *  - `O(R)` where `R` registrar-count (governance-bounded).
     *  - One storage mutation (codec `O(R)`).
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Identity.add_registrar') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     *  Add a registrar to the system.
     * 
     *  The dispatch origin for this call must be `RegistrarOrigin` or `Root`.
     * 
     *  - `account`: the account of the registrar.
     * 
     *  Emits `RegistrarAdded` if successful.
     * 
     *  # <weight>
     *  - `O(R)` where `R` registrar-count (governance-bounded).
     *  - One storage mutation (codec `O(R)`).
     *  - One event.
     *  # </weight>
     */
    get asV31(): {account: Uint8Array} {
        assert(this.isV31)
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
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.add_sub') === '8f830355fb946ba9c08ff9b442ff25ad5261525ecc94235a0b197767311338c0'
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
    get asV41(): {sub: v41.LookupSource, data: v41.Data} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
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
    get isV45(): boolean {
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
    get asV45(): {sub: v45.LookupSource, data: v45.Data} {
        assert(this.isV45)
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
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
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
     *  - One event.
     *  # </weight>
     */
    get asV31(): {regIndex: number} {
        assert(this.isV31)
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
     *  Clear an account's identity info and all sub-account and return all deposits.
     * 
     *  Payment: All reserved balances on the account are returned.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  Emits `IdentityCleared` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`.
     *  - One balance-reserve operation.
     *  - `S + 2` storage deletions.
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Clear an account's identity info and all sub-account and return all deposits.
     * 
     *  Payment: All reserved balances on the account are returned.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  Emits `IdentityCleared` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`.
     *  - One balance-reserve operation.
     *  - `S + 2` storage deletions.
     *  - One event.
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
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
     *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
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
    get isV31(): boolean {
        return this._chain.getCallHash('Identity.kill_identity') === 'cd19c54875d335772c471b877903ed3a260a7316fd1d201b12e013ae0a7dfe2d'
    }

    /**
     *  Remove an account's identity and sub-account information and slash the deposits.
     * 
     *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     *  `Slash`. Verification request deposits are not returned; they should be cancelled
     *  manually using `cancel_request`.
     * 
     *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
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
    get asV31(): {target: v31.LookupSource} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
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
    get isV45(): boolean {
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
    get asV45(): {target: v45.LookupSource} {
        assert(this.isV45)
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
    get isV31(): boolean {
        return this._chain.getCallHash('Identity.provide_judgement') === '8921aacefaea850d12d833946f2249c69867ed2c34eaedbfc09510053a096876'
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
    get asV31(): {regIndex: number, target: v31.LookupSource, judgement: v31.IdentityJudgement} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
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
    get isV45(): boolean {
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
    get asV45(): {regIndex: number, target: v45.LookupSource, judgement: v45.IdentityJudgement} {
        assert(this.isV45)
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
    get isV41(): boolean {
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
    get asV41(): null {
        assert(this.isV41)
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
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.remove_sub') === 'b0d7a580ce84b480fc114ed75e3bb80879e6547e7b346b00666ef96990b81f61'
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
    get asV41(): {sub: v41.LookupSource} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
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
    get isV45(): boolean {
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
    get asV45(): {sub: v45.LookupSource} {
        assert(this.isV45)
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
    get isV41(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === '8f830355fb946ba9c08ff9b442ff25ad5261525ecc94235a0b197767311338c0'
    }

    /**
     *  Alter the associated name of the given sub-account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get asV41(): {sub: v41.LookupSource, data: v41.Data} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Alter the associated name of the given sub-account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === 'ef8fb13f5dc864a3db268a8f01b166d2deee87052a98309538fe8961be9020a9'
    }

    /**
     *  Alter the associated name of the given sub-account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get asV45(): {sub: v45.LookupSource, data: v45.Data} {
        assert(this.isV45)
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
     *  Self::registrars(reg_index).uwnrap().fee
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
    get isV31(): boolean {
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
     *  Self::registrars(reg_index).uwnrap().fee
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
    get asV31(): {regIndex: number, maxFee: bigint} {
        assert(this.isV31)
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
     *  # </weight>
     */
    get isV31(): boolean {
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
     *  # </weight>
     */
    get asV31(): {index: number, new: Uint8Array} {
        assert(this.isV31)
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
     *  # </weight>
     */
    get isV31(): boolean {
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
     *  # </weight>
     */
    get asV31(): {index: number, fee: bigint} {
        assert(this.isV31)
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
     *  # </weight>
     */
    get isV31(): boolean {
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
     *  # </weight>
     */
    get asV31(): {index: number, fields: bigint} {
        assert(this.isV31)
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
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  - `info`: The identity information.
     * 
     *  Emits `IdentitySet` if successful.
     * 
     *  # <weight>
     *  - `O(X + X' + R)` where `X` additional-field-count (deposit-bounded and code-bounded).
     *  - At most two balance operations.
     *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
    }

    /**
     *  Set an account's identity information and reserve the appropriate deposit.
     * 
     *  If the account already has identity information, the deposit is taken as part payment
     *  for the new deposit.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  - `info`: The identity information.
     * 
     *  Emits `IdentitySet` if successful.
     * 
     *  # <weight>
     *  - `O(X + X' + R)` where `X` additional-field-count (deposit-bounded and code-bounded).
     *  - At most two balance operations.
     *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     *  - One event.
     *  # </weight>
     */
    get asV31(): {info: v31.IdentityInfo} {
        assert(this.isV31)
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
     *  - `subs`: The identity's sub-accounts.
     * 
     *  # <weight>
     *  - `O(S)` where `S` subs-count (hard- and deposit-bounded).
     *  - At most two balance operations.
     *  - At most O(2 * S + 1) storage mutations; codec complexity `O(1 * S + S * 1)`);
     *    one storage-exists.
     *  # </weight>
     */
    get isV31(): boolean {
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
     *  - `subs`: The identity's sub-accounts.
     * 
     *  # <weight>
     *  - `O(S)` where `S` subs-count (hard- and deposit-bounded).
     *  - At most two balance operations.
     *  - At most O(2 * S + 1) storage mutations; codec complexity `O(1 * S + S * 1)`);
     *    one storage-exists.
     *  # </weight>
     */
    get asV31(): {subs: [Uint8Array, v31.Data][]} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class ImOnlineHeartbeatCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ImOnline.heartbeat')
        this._chain = ctx._chain
        this.call = call
    }

    get isV31(): boolean {
        return this._chain.getCallHash('ImOnline.heartbeat') === 'ceb066f24cc1efdb862584018e591b1046da22acdc1c7daf8270a6f6f31baffe'
    }

    get asV31(): {heartbeat: v31.Heartbeat, signature: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class IndicesClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Indices.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Assign an previously unassigned index.
     * 
     *  Payment: `Deposit` is reserved from the sender account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `index`: the index to be claimed. This must not be in use.
     * 
     *  Emits `IndexAssigned` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - One reserve operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 28.69 µs
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Indices.claim') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     *  Assign an previously unassigned index.
     * 
     *  Payment: `Deposit` is reserved from the sender account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `index`: the index to be claimed. This must not be in use.
     * 
     *  Emits `IndexAssigned` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - One reserve operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 28.69 µs
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get asV38(): {index: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class IndicesForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Indices.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force an index to an account. This doesn't require a deposit. If the index is already
     *  held, then any deposit is reimbursed to its current owner.
     * 
     *  The dispatch origin for this call must be _Root_.
     * 
     *  - `index`: the index to be (re-)assigned.
     *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     *  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
     * 
     *  Emits `IndexAssigned` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - Up to one reserve operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 26.83 µs
     *  - DB Weight:
     *     - Reads: Indices Accounts, System Account (original owner)
     *     - Writes: Indices Accounts, System Account (original owner)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Indices.force_transfer') === 'c512e4f612c8bf235b4e49fd86b93323981d8379e84e47bd23e3718caf3df8b7'
    }

    /**
     *  Force an index to an account. This doesn't require a deposit. If the index is already
     *  held, then any deposit is reimbursed to its current owner.
     * 
     *  The dispatch origin for this call must be _Root_.
     * 
     *  - `index`: the index to be (re-)assigned.
     *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     *  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
     * 
     *  Emits `IndexAssigned` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - Up to one reserve operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 26.83 µs
     *  - DB Weight:
     *     - Reads: Indices Accounts, System Account (original owner)
     *     - Writes: Indices Accounts, System Account (original owner)
     *  # </weight>
     */
    get asV38(): {new: Uint8Array, index: number, freeze: boolean} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class IndicesFreeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Indices.free')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Free up an index owned by the sender.
     * 
     *  Payment: Any previous deposit placed for the index is unreserved in the sender account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must own the index.
     * 
     *  - `index`: the index to be freed. This must be owned by the sender.
     * 
     *  Emits `IndexFreed` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - One reserve operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 25.53 µs
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Indices.free') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     *  Free up an index owned by the sender.
     * 
     *  Payment: Any previous deposit placed for the index is unreserved in the sender account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must own the index.
     * 
     *  - `index`: the index to be freed. This must be owned by the sender.
     * 
     *  Emits `IndexFreed` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - One reserve operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 25.53 µs
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get asV38(): {index: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class IndicesFreezeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Indices.freeze')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Freeze an index so it will always point to the sender account. This consumes the deposit.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must have a
     *  non-frozen account `index`.
     * 
     *  - `index`: the index to be frozen in place.
     * 
     *  Emits `IndexFrozen` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - Up to one slash operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 30.86 µs
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Indices.freeze') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     *  Freeze an index so it will always point to the sender account. This consumes the deposit.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must have a
     *  non-frozen account `index`.
     * 
     *  - `index`: the index to be frozen in place.
     * 
     *  Emits `IndexFrozen` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - Up to one slash operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 30.86 µs
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get asV38(): {index: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class IndicesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Indices.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Assign an index already owned by the sender to another account. The balance reservation
     *  is effectively transferred to the new account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `index`: the index to be re-assigned. This must be owned by the sender.
     *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * 
     *  Emits `IndexAssigned` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - One transfer operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 33.74 µs
     *  - DB Weight:
     *     - Reads: Indices Accounts, System Account (recipient)
     *     - Writes: Indices Accounts, System Account (recipient)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Indices.transfer') === 'fb7b2e881b4e1febd039cce6ff2d158ae42a8e4ab080ad01ff5d71477b8a690a'
    }

    /**
     *  Assign an index already owned by the sender to another account. The balance reservation
     *  is effectively transferred to the new account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `index`: the index to be re-assigned. This must be owned by the sender.
     *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * 
     *  Emits `IndexAssigned` if successful.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One storage mutation (codec `O(1)`).
     *  - One transfer operation.
     *  - One event.
     *  -------------------
     *  - Base Weight: 33.74 µs
     *  - DB Weight:
     *     - Reads: Indices Accounts, System Account (recipient)
     *     - Writes: Indices Accounts, System Account (recipient)
     *  # </weight>
     */
    get asV38(): {new: Uint8Array, index: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigApproveAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.approve_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  ----------------------------------
     *  - Base Weight:
     *      - Create: 44.71 + 0.088 * S
     *      - Approve: 31.48 + 0.116 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === '615a5baaaa889f9e30839c70485b8c752e5eb050a85a23102b2f9f4c301be63a'
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  ----------------------------------
     *  - Base Weight:
     *      - Create: 44.71 + 0.088 * S
     *      - Approve: 31.48 + 0.116 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    get asV38(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v38.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  If there are enough, then dispatch the call.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call`: The call to be executed.
     * 
     *  NOTE: Unless this is the final approval, you will generally want to use
     *  `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *  on success, result is `Ok` and the result from the interior call, if it was executed,
     *  may be found in the deposited `MultisigExecuted` event.
     * 
     *  # <weight>
     *  - `O(S + Z + Call)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - The weight of the `call`.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  -------------------------------
     *  - Base Weight:
     *      - Create:          41.89 + 0.118 * S + .002 * Z µs
     *      - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
     *      - Approve:         31.39 + 0.136 * S + .002 * Z µs
     *      - Complete:        39.94 + 0.26  * S + .002 * Z µs
     *  - DB Weight:
     *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *  - Plus Call Weight
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '548dea53ff79fe99438cf591950a533c93f9772d03a3995ec72a80376fcae222'
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  If there are enough, then dispatch the call.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call`: The call to be executed.
     * 
     *  NOTE: Unless this is the final approval, you will generally want to use
     *  `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *  on success, result is `Ok` and the result from the interior call, if it was executed,
     *  may be found in the deposited `MultisigExecuted` event.
     * 
     *  # <weight>
     *  - `O(S + Z + Call)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - The weight of the `call`.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  -------------------------------
     *  - Base Weight:
     *      - Create:          41.89 + 0.118 * S + .002 * Z µs
     *      - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
     *      - Approve:         31.39 + 0.136 * S + .002 * Z µs
     *      - Complete:        39.94 + 0.26  * S + .002 * Z µs
     *  - DB Weight:
     *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *  - Plus Call Weight
     *  # </weight>
     */
    get asV38(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v38.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiThreshold1Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi_threshold_1')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '6d00ab5a6be515e3d7c6f03ade1eecef37ad8f12e87a8cb43c8d522c30837cc9'
    }

    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get asV38(): {otherSignatories: Uint8Array[], call: v38.Type_43} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '6ee40f82913c8cef768fe0a048a5d56ef3bc16adbfa64f04703766b0686aebd7'
    }

    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get asV41(): {otherSignatories: Uint8Array[], call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '0629a5bdd84c12edf8ca3c44e506a4e77a20b0889b1f709eb98280122a9266fc'
    }

    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get asV45(): {otherSignatories: Uint8Array[], call: v45.Type_47} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'c25b227a5fa29521ffb19fc19654210bed81e7a365f176fd120fe5a95f6728e7'
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
    get asV53(): {otherSignatories: Uint8Array[], call: v53.Call} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigCancelAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.cancel_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *  for this operation will be unreserved on success.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
     *  transaction for this dispatch.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - One event.
     *  - I/O: 1 read `O(S)`, one remove.
     *  - Storage: removes one item.
     *  ----------------------------------
     *  - Base Weight: 36.07 + 0.124 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Multisig.cancel_as_multi') === '4ccc75a4f739c659f177e3df98fba2ea59ddade74c4ebccd51b2fc4c52e923af'
    }

    /**
     *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *  for this operation will be unreserved on success.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
     *  transaction for this dispatch.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - One event.
     *  - I/O: 1 read `O(S)`, one remove.
     *  - Storage: removes one item.
     *  ----------------------------------
     *  - Base Weight: 36.07 + 0.124 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     *  # </weight>
     */
    get asV38(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v38.Timepoint, callHash: Uint8Array} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class NicksClearNameCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Nicks.clear_name')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Clear an account's name and return the deposit. Fails if the account was not named.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - One balance operation.
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Nicks.clear_name') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Clear an account's name and return the deposit. Fails if the account was not named.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - One balance operation.
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class NicksForceNameCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Nicks.force_name')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set a third-party account's name with no deposit.
     * 
     *  No length checking is done on the name.
     * 
     *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - At most one balance operation.
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Nicks.force_name') === 'fc75d79d94da141e6c844c00de03fdf00dfc4fe67e3d98a55524d75c8712a128'
    }

    /**
     *  Set a third-party account's name with no deposit.
     * 
     *  No length checking is done on the name.
     * 
     *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - At most one balance operation.
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    get asV31(): {target: v31.LookupSource, name: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class NicksKillNameCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Nicks.kill_name')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove an account's name and take charge of the deposit.
     * 
     *  Fails if `who` has not been named. The deposit is dealt with through `T::Slashed`
     *  imbalance handler.
     * 
     *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - One unbalanced handler (probably a balance transfer)
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Nicks.kill_name') === 'cd19c54875d335772c471b877903ed3a260a7316fd1d201b12e013ae0a7dfe2d'
    }

    /**
     *  Remove an account's name and take charge of the deposit.
     * 
     *  Fails if `who` has not been named. The deposit is dealt with through `T::Slashed`
     *  imbalance handler.
     * 
     *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - One unbalanced handler (probably a balance transfer)
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    get asV31(): {target: v31.LookupSource} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class NicksSetNameCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Nicks.set_name')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set an account's name. The name should be a UTF-8-encoded string by convention, though
     *  we don't check it.
     * 
     *  The name may not be more than `T::MaxLength` bytes, nor less than `T::MinLength` bytes.
     * 
     *  If the account doesn't already have a name, then a fee of `ReservationFee` is reserved
     *  in the account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - At most one balance operation.
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Nicks.set_name') === '208de23d9c973b8e20989bcd5c665f8f0228ecf503bffa200d5950e00a5c2f16'
    }

    /**
     *  Set an account's name. The name should be a UTF-8-encoded string by convention, though
     *  we don't check it.
     * 
     *  The name may not be more than `T::MaxLength` bytes, nor less than `T::MinLength` bytes.
     * 
     *  If the account doesn't already have a name, then a fee of `ReservationFee` is reserved
     *  in the account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - At most one balance operation.
     *  - One storage read/write.
     *  - One event.
     *  # </weight>
     */
    get asV31(): {name: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionCleanDefunctVotersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.clean_defunct_voters')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
     * deposit of the removed voters are returned.
     * 
     * This is an root function to be used only for cleaning the state.
     * 
     * The dispatch origin of this call must be root.
     * 
     * # <weight>
     * The total number of voters and those that are defunct must be provided as witness data.
     * # </weight>
     */
    get isV53(): boolean {
        return this._chain.getCallHash('PhragmenElection.clean_defunct_voters') === '8279e35309d0c9a5d36cd12cce19e58fef95829d4096e23fe93a055a47afd8a0'
    }

    /**
     * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
     * deposit of the removed voters are returned.
     * 
     * This is an root function to be used only for cleaning the state.
     * 
     * The dispatch origin of this call must be root.
     * 
     * # <weight>
     * The total number of voters and those that are defunct must be provided as witness data.
     * # </weight>
     */
    get asV53(): {numVoters: number, numDefunct: number} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a particular member from the set. This is effective immediately and the bond of
     * the outgoing member is slashed.
     * 
     * If a runner-up is available, then the best runner-up will be removed and replaces the
     * outgoing member. Otherwise, a new phragmen election is started.
     * 
     * The dispatch origin of this call must be root.
     * 
     * Note that this does not affect the designated block number of the next election.
     * 
     * # <weight>
     * If we have a replacement, we use a small weight. Else, since this is a root call and
     * will go into phragmen, we assume full block for now.
     * # </weight>
     */
    get isV53(): boolean {
        return this._chain.getCallHash('PhragmenElection.remove_member') === '8f953115e82b1180527569f88641e39ddd7c750a04a3e0ab23cb9466f32e4a9b'
    }

    /**
     * Remove a particular member from the set. This is effective immediately and the bond of
     * the outgoing member is slashed.
     * 
     * If a runner-up is available, then the best runner-up will be removed and replaces the
     * outgoing member. Otherwise, a new phragmen election is started.
     * 
     * The dispatch origin of this call must be root.
     * 
     * Note that this does not affect the designated block number of the next election.
     * 
     * # <weight>
     * If we have a replacement, we use a small weight. Else, since this is a root call and
     * will go into phragmen, we assume full block for now.
     * # </weight>
     */
    get asV53(): {who: v53.MultiAddress, hasReplacement: boolean} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionRemoveVoterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.remove_voter')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove `origin` as a voter.
     * 
     * This removes the lock and returns the deposit.
     * 
     * The dispatch origin of this call must be signed and be a voter.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('PhragmenElection.remove_voter') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove `origin` as a voter.
     * 
     * This removes the lock and returns the deposit.
     * 
     * The dispatch origin of this call must be signed and be a voter.
     */
    get asV53(): null {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionRenounceCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.renounce_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Renounce one's intention to be a candidate for the next election round. 3 potential
     * outcomes exist:
     * 
     * - `origin` is a candidate and not elected in any set. In this case, the deposit is
     *   unreserved, returned and origin is removed as a candidate.
     * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
     *   origin is removed as a runner-up.
     * - `origin` is a current member. In this case, the deposit is unreserved and origin is
     *   removed as a member, consequently not being a candidate for the next round anymore.
     *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
     *   are immediately used. If the prime is renouncing, then no prime will exist until the
     *   next round.
     * 
     * The dispatch origin of this call must be signed, and have one of the above roles.
     * 
     * # <weight>
     * The type of renouncing must be provided as witness data.
     * # </weight>
     */
    get isV53(): boolean {
        return this._chain.getCallHash('PhragmenElection.renounce_candidacy') === '891a3ff219ab8817cfffbcd0ed48578a0fd96440dc2292a0cde84a40439f7fbe'
    }

    /**
     * Renounce one's intention to be a candidate for the next election round. 3 potential
     * outcomes exist:
     * 
     * - `origin` is a candidate and not elected in any set. In this case, the deposit is
     *   unreserved, returned and origin is removed as a candidate.
     * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
     *   origin is removed as a runner-up.
     * - `origin` is a current member. In this case, the deposit is unreserved and origin is
     *   removed as a member, consequently not being a candidate for the next round anymore.
     *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
     *   are immediately used. If the prime is renouncing, then no prime will exist until the
     *   next round.
     * 
     * The dispatch origin of this call must be signed, and have one of the above roles.
     * 
     * # <weight>
     * The type of renouncing must be provided as witness data.
     * # </weight>
     */
    get asV53(): {renouncing: v53.Renouncing} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionSubmitCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.submit_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Submit oneself for candidacy. A fixed amount of deposit is recorded.
     * 
     * All candidates are wiped at the end of the term. They either become a member/runner-up,
     * or leave the system while their deposit is slashed.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
     * to get their deposit back. Losing the spot in an election will always lead to a slash.
     * 
     * # <weight>
     * The number of current candidates must be provided as witness data.
     * # </weight>
     */
    get isV53(): boolean {
        return this._chain.getCallHash('PhragmenElection.submit_candidacy') === 'f9d2bc9f755e33c27d34db4c3b063daa9e2490111d35f89ea1995d74e59b1819'
    }

    /**
     * Submit oneself for candidacy. A fixed amount of deposit is recorded.
     * 
     * All candidates are wiped at the end of the term. They either become a member/runner-up,
     * or leave the system while their deposit is slashed.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
     * to get their deposit back. Losing the spot in an election will always lead to a slash.
     * 
     * # <weight>
     * The number of current candidates must be provided as witness data.
     * # </weight>
     */
    get asV53(): {candidateCount: number} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote for a set of candidates for the upcoming round of election. This can be called to
     * set the initial votes, or update already existing votes.
     * 
     * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
     * reserved. The deposit is based on the number of votes and can be updated over time.
     * 
     * The `votes` should:
     *   - not be empty.
     *   - be less than the number of possible candidates. Note that all current members and
     *     runners-up are also automatically candidates for the next round.
     * 
     * If `value` is more than `who`'s free balance, then the maximum of the two is used.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * It is the responsibility of the caller to **NOT** place all of their balance into the
     * lock and keep some for further operations.
     * 
     * # <weight>
     * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
     * # </weight>
     */
    get isV53(): boolean {
        return this._chain.getCallHash('PhragmenElection.vote') === '75939c25de1c96145b5d2d4bc8627a3fc22299f0e1f1f6f0709e54e884796bda'
    }

    /**
     * Vote for a set of candidates for the upcoming round of election. This can be called to
     * set the initial votes, or update already existing votes.
     * 
     * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
     * reserved. The deposit is based on the number of votes and can be updated over time.
     * 
     * The `votes` should:
     *   - not be empty.
     *   - be less than the number of possible candidates. Note that all current members and
     *     runners-up are also automatically candidates for the next round.
     * 
     * If `value` is more than `who`'s free balance, then the maximum of the two is used.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * It is the responsibility of the caller to **NOT** place all of their balance into the
     * lock and keep some for further operations.
     * 
     * # <weight>
     * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
     * # </weight>
     */
    get asV53(): {votes: Uint8Array[], value: bigint} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get asV53(): {bytes: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get asV53(): {hash: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     */
    get asV53(): {hash: Uint8Array} {
        assert(this.isV53)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get asV53(): {hash: Uint8Array} {
        assert(this.isV53)
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
     *  Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to make a proxy.
     *  - `proxy_type`: The permissions allowed for this proxy account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 17.48 + .176 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Proxy.add_proxy') === '0c3f7e6289f08a7c5c87e5e86b8359913de21ff48d769f8e04b139f8e7602e27'
    }

    /**
     *  Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to make a proxy.
     *  - `proxy_type`: The permissions allowed for this proxy account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 17.48 + .176 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    get asV38(): {proxy: Uint8Array, proxyType: v38.ProxyType} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to make a proxy.
     *  - `proxy_type`: The permissions allowed for this proxy account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Proxy.add_proxy') === '09e1335440417e619423521bf7794c134251b462ea29c659fd98e06ad8e4c3f2'
    }

    /**
     *  Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to make a proxy.
     *  - `proxy_type`: The permissions allowed for this proxy account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    get asV41(): {delegate: Uint8Array, proxyType: v41.ProxyType, delay: number} {
        assert(this.isV41)
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
     *  Publish the hash of a proxy-call that will be made in the future.
     * 
     *  This must be called some number of blocks before the corresponding `proxy` is attempted
     *  if the delay associated with the proxy relationship is greater than zero.
     * 
     *  No more than `MaxPending` announcements may be made at any one time.
     * 
     *  This will take a deposit of `AnnouncementDepositFactor` as well as
     *  `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     *  The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Proxy.announce') === '886fe5248256b2372151aa5c936f9027a64929a3501efe231a22f1ee868cff3e'
    }

    /**
     *  Publish the hash of a proxy-call that will be made in the future.
     * 
     *  This must be called some number of blocks before the corresponding `proxy` is attempted
     *  if the delay associated with the proxy relationship is greater than zero.
     * 
     *  No more than `MaxPending` announcements may be made at any one time.
     * 
     *  This will take a deposit of `AnnouncementDepositFactor` as well as
     *  `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     *  The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    get asV41(): {real: Uint8Array, callHash: Uint8Array} {
        assert(this.isV41)
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
     *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     *  initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     *  Requires a `Signed` origin.
     * 
     *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
     *  new account. This will almost always be the most permissive `ProxyType` possible to
     *  allow for maximum flexibility.
     *  - `index`: A disambiguation index, in case this is called multiple times in the same
     *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     *  want to use `0`.
     * 
     *  Fails with `Duplicate` if this has already been called in this transaction, from the
     *  same sender, with the same parameters.
     * 
     *  Fails if there are insufficient funds to pay for deposit.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 36.48 + .039 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Proxy.anonymous') === '64cbb9b0db40d6b8ac8bdb2351dfbade9f581794355466be2242dfb6bca7fa66'
    }

    /**
     *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     *  initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     *  Requires a `Signed` origin.
     * 
     *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
     *  new account. This will almost always be the most permissive `ProxyType` possible to
     *  allow for maximum flexibility.
     *  - `index`: A disambiguation index, in case this is called multiple times in the same
     *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     *  want to use `0`.
     * 
     *  Fails with `Duplicate` if this has already been called in this transaction, from the
     *  same sender, with the same parameters.
     * 
     *  Fails if there are insufficient funds to pay for deposit.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 36.48 + .039 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    get asV38(): {proxyType: v38.ProxyType, index: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     *  initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     *  Requires a `Signed` origin.
     * 
     *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
     *  new account. This will almost always be the most permissive `ProxyType` possible to
     *  allow for maximum flexibility.
     *  - `index`: A disambiguation index, in case this is called multiple times in the same
     *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     *  want to use `0`.
     *  - `delay`: The announcement period required of the initial proxy. Will generally be
     *  zero.
     * 
     *  Fails with `Duplicate` if this has already been called in this transaction, from the
     *  same sender, with the same parameters.
     * 
     *  Fails if there are insufficient funds to pay for deposit.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     *  TODO: Might be over counting 1 read
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Proxy.anonymous') === 'f11a70849467c77df019967163dfc847733281805c91d567114deaaff34b1860'
    }

    /**
     *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     *  initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     *  Requires a `Signed` origin.
     * 
     *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
     *  new account. This will almost always be the most permissive `ProxyType` possible to
     *  allow for maximum flexibility.
     *  - `index`: A disambiguation index, in case this is called multiple times in the same
     *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     *  want to use `0`.
     *  - `delay`: The announcement period required of the initial proxy. Will generally be
     *  zero.
     * 
     *  Fails with `Duplicate` if this has already been called in this transaction, from the
     *  same sender, with the same parameters.
     * 
     *  Fails if there are insufficient funds to pay for deposit.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     *  TODO: Might be over counting 1 read
     */
    get asV41(): {proxyType: v41.ProxyType, delay: number, index: number} {
        assert(this.isV41)
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
     *  Removes a previously spawned anonymous proxy.
     * 
     *  WARNING: **All access to this account will be lost.** Any funds held in it will be
     *  inaccessible.
     * 
     *  Requires a `Signed` origin, and the sender account must have been created by a call to
     *  `anonymous` with corresponding parameters.
     * 
     *  - `spawner`: The account that originally called `anonymous` to create this account.
     *  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     *  - `proxy_type`: The proxy type originally passed to `anonymous`.
     *  - `height`: The height of the chain when the call to `anonymous` was processed.
     *  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     *  Fails with `NoPermission` in case the caller is not a previously created anonymous
     *  account whose `anonymous` call has corresponding parameters.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 15.65 + .137 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Proxy.kill_anonymous') === 'b32f81f8fe29a904e925feb630c0bb8a6d71339d6ede87fd4b8304d6a798e2fc'
    }

    /**
     *  Removes a previously spawned anonymous proxy.
     * 
     *  WARNING: **All access to this account will be lost.** Any funds held in it will be
     *  inaccessible.
     * 
     *  Requires a `Signed` origin, and the sender account must have been created by a call to
     *  `anonymous` with corresponding parameters.
     * 
     *  - `spawner`: The account that originally called `anonymous` to create this account.
     *  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     *  - `proxy_type`: The proxy type originally passed to `anonymous`.
     *  - `height`: The height of the chain when the call to `anonymous` was processed.
     *  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     *  Fails with `NoPermission` in case the caller is not a previously created anonymous
     *  account whose `anonymous` call has corresponding parameters.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 15.65 + .137 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    get asV38(): {spawner: Uint8Array, proxyType: v38.ProxyType, index: number, height: number, extIndex: number} {
        assert(this.isV38)
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
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '7d0caf443a5732d0d15b983d1defeb820e9f1db56db04b3a45faeb5ba5f5a3e1'
    }

    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 19.87 + .141 * P µs
     *  - DB weight: 1 storage read.
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    get asV38(): {real: Uint8Array, forceProxyType: (v38.ProxyType | undefined), call: v38.Type_43} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '39010464b5467e4b93daf5eac5b856c8ccf20aec37d1e11b0fceb2a552dc35be'
    }

    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    get asV41(): {real: Uint8Array, forceProxyType: (v41.ProxyType | undefined), call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '5ff178657baaf5dc27b8fb7d3b96f3c95629f5b937e5ad7bb3d00e643b75a741'
    }

    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    get asV45(): {real: Uint8Array, forceProxyType: (v45.ProxyType | undefined), call: v45.Type_47} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '7f9b25850763e621a3c077fb6dce8aca24de71c2b5b6113220b07c12d2f63dec'
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
    get asV53(): {real: Uint8Array, forceProxyType: (v53.ProxyType | undefined), call: v53.Call} {
        assert(this.isV53)
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
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '764852f03e59c4c1cc93e1b70d323dc57f3bb7bff9912e31b159c930a5594d93'
    }

    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    get asV41(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v41.ProxyType | undefined), call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '8f3f7266cc9454445b627f6bef8b24b1666dd63e93d46638e8c0d0e5c43350f7'
    }

    /**
     *  Dispatch the given `call` from an account that the sender is authorised for through
     *  `add_proxy`.
     * 
     *  Removes any corresponding announcement(s).
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *  - `call`: The call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    get asV45(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v45.ProxyType | undefined), call: v45.Type_47} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'c9c5cc7c5dc4fa4d4b07c82b25afbac5a9721d7c5f76e5a51fc2bb02c76fffab'
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
    get asV53(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v53.ProxyType | undefined), call: v53.Call} {
        assert(this.isV53)
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
     *  Remove the given announcement of a delegate.
     * 
     *  May be called by a target (proxied) account to remove a call that one of their delegates
     *  (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `delegate`: The account that previously announced the call.
     *  - `call_hash`: The hash of the call to be made.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Proxy.reject_announcement') === '717e6dbb2911f49e34a3b48c48c86b40495423ab31d5b45f0062629c73057f2b'
    }

    /**
     *  Remove the given announcement of a delegate.
     * 
     *  May be called by a target (proxied) account to remove a call that one of their delegates
     *  (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `delegate`: The account that previously announced the call.
     *  - `call_hash`: The hash of the call to be made.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    get asV41(): {delegate: Uint8Array, callHash: Uint8Array} {
        assert(this.isV41)
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
     *  Remove a given announcement.
     * 
     *  May be called by a proxy account to remove a call they previously announced and return
     *  the deposit.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Proxy.remove_announcement') === '886fe5248256b2372151aa5c936f9027a64929a3501efe231a22f1ee868cff3e'
    }

    /**
     *  Remove a given announcement.
     * 
     *  May be called by a proxy account to remove a call they previously announced and return
     *  the deposit.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `real`: The account that the proxy will make a call on behalf of.
     *  - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     *  # <weight>
     *  Weight is a function of:
     *  - A: the number of announcements made.
     *  - P: the number of proxies the user has.
     *  # </weight>
     */
    get asV41(): {real: Uint8Array, callHash: Uint8Array} {
        assert(this.isV41)
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
     *  Unregister all proxy accounts for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  WARNING: This may be called on accounts created by `anonymous`, however if done, then
     *  the unreserved fees will be inaccessible. **All access to this account will be lost.**
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 13.73 + .129 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxies') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Unregister all proxy accounts for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  WARNING: This may be called on accounts created by `anonymous`, however if done, then
     *  the unreserved fees will be inaccessible. **All access to this account will be lost.**
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 13.73 + .129 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    get asV38(): null {
        assert(this.isV38)
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
     *  Unregister a proxy account for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to remove as a proxy.
     *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 14.37 + .164 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxy') === '0c3f7e6289f08a7c5c87e5e86b8359913de21ff48d769f8e04b139f8e7602e27'
    }

    /**
     *  Unregister a proxy account for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to remove as a proxy.
     *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     *  # <weight>
     *  P is the number of proxies the user has
     *  - Base weight: 14.37 + .164 * P µs
     *  - DB weight: 1 storage read and write.
     *  # </weight>
     */
    get asV38(): {proxy: Uint8Array, proxyType: v38.ProxyType} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Unregister a proxy account for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to remove as a proxy.
     *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxy') === '09e1335440417e619423521bf7794c134251b462ea29c659fd98e06ad8e4c3f2'
    }

    /**
     *  Unregister a proxy account for the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `proxy`: The account that the `caller` would like to remove as a proxy.
     *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     *  # <weight>
     *  Weight is a function of the number of proxies the user has (P).
     *  # </weight>
     */
    get asV41(): {delegate: Uint8Array, proxyType: v41.ProxyType, delay: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryAsRecoveredCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.as_recovered')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Recovery.as_recovered') === '654f95ccfb41304f4ef0b8a31adeb8b86f39b967dc7d22202c81be2c8ed08b6a'
    }

    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    get asV38(): {account: Uint8Array, call: v38.Type_43} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Recovery.as_recovered') === '37e1e7b91ea78e938eeccea180afbf7e0ac0479c11d35d6bfa1d9ad6bb8a882d'
    }

    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    get asV41(): {account: Uint8Array, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Recovery.as_recovered') === 'ec71d628d1c89dbbb0d4e3beba8404ff717fb5a6c3c23294f9bb45ce3157d2ad'
    }

    /**
     *  Send a call through a recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you want to make a call on-behalf-of.
     *  - `call`: The call you want to make with the recovered account.
     * 
     *  # <weight>
     *  - The weight of the `call` + 10,000.
     *  - One storage lookup to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    get asV45(): {account: Uint8Array, call: v45.Type_47} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     * 
     * # <weight>
     * - The weight of the `call` + 10,000.
     * - One storage lookup to check account is recovered by `who`. O(1)
     * # </weight>
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Recovery.as_recovered') === '0c470992e1d0da7094b95c0d36ad889cf9d8003a2a5828a0c20e03a764aa40fc'
    }

    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     * 
     * # <weight>
     * - The weight of the `call` + 10,000.
     * - One storage lookup to check account is recovered by `who`. O(1)
     * # </weight>
     */
    get asV53(): {account: Uint8Array, call: v53.Call} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryCancelRecoveredCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.cancel_recovered')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel the ability to use `as_recovered` for `account`.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you are able to call on-behalf-of.
     * 
     *  # <weight>
     *  - One storage mutation to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Recovery.cancel_recovered') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     *  Cancel the ability to use `as_recovered` for `account`.
     * 
     *  The dispatch origin for this call must be _Signed_ and registered to
     *  be able to make calls on behalf of the recovered account.
     * 
     *  Parameters:
     *  - `account`: The recovered account you are able to call on-behalf-of.
     * 
     *  # <weight>
     *  - One storage mutation to check account is recovered by `who`. O(1)
     *  # </weight>
     */
    get asV38(): {account: Uint8Array} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryClaimRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.claim_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Allow a successful rescuer to claim their recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a "rescuer"
     *  who has successfully completed the account recovery process: collected
     *  `threshold` or more vouches, waited `delay_period` blocks since initiation.
     * 
     *  Parameters:
     *  - `account`: The lost account that you want to claim has been successfully
     *    recovered by you.
     * 
     *  # <weight>
     *  Key: F (len of friends in config), V (len of vouching friends)
     *  - One storage read to get the recovery configuration. O(1), Codec O(F)
     *  - One storage read to get the active recovery process. O(1), Codec O(V)
     *  - One storage read to get the current block number. O(1)
     *  - One storage write. O(1), Codec O(V).
     *  - One event.
     * 
     *  Total Complexity: O(F + V)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Recovery.claim_recovery') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     *  Allow a successful rescuer to claim their recovered account.
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a "rescuer"
     *  who has successfully completed the account recovery process: collected
     *  `threshold` or more vouches, waited `delay_period` blocks since initiation.
     * 
     *  Parameters:
     *  - `account`: The lost account that you want to claim has been successfully
     *    recovered by you.
     * 
     *  # <weight>
     *  Key: F (len of friends in config), V (len of vouching friends)
     *  - One storage read to get the recovery configuration. O(1), Codec O(F)
     *  - One storage read to get the active recovery process. O(1), Codec O(V)
     *  - One storage read to get the current block number. O(1)
     *  - One storage write. O(1), Codec O(V).
     *  - One event.
     * 
     *  Total Complexity: O(F + V)
     *  # </weight>
     */
    get asV38(): {account: Uint8Array} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryCloseRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.close_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  As the controller of a recoverable account, close an active recovery
     *  process for your account.
     * 
     *  Payment: By calling this function, the recoverable account will receive
     *  the recovery deposit `RecoveryDeposit` placed by the rescuer.
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a
     *  recoverable account with an active recovery process for it.
     * 
     *  Parameters:
     *  - `rescuer`: The account trying to rescue this recoverable account.
     * 
     *  # <weight>
     *  Key: V (len of vouching friends)
     *  - One storage read/remove to get the active recovery process. O(1), Codec O(V)
     *  - One balance call to repatriate reserved. O(X)
     *  - One event.
     * 
     *  Total Complexity: O(V + X)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Recovery.close_recovery') === 'bf7ea1f5e086afbf45868ed1645503b48dc0ad2a62b98d87eb2a83cdbb2a6ef5'
    }

    /**
     *  As the controller of a recoverable account, close an active recovery
     *  process for your account.
     * 
     *  Payment: By calling this function, the recoverable account will receive
     *  the recovery deposit `RecoveryDeposit` placed by the rescuer.
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a
     *  recoverable account with an active recovery process for it.
     * 
     *  Parameters:
     *  - `rescuer`: The account trying to rescue this recoverable account.
     * 
     *  # <weight>
     *  Key: V (len of vouching friends)
     *  - One storage read/remove to get the active recovery process. O(1), Codec O(V)
     *  - One balance call to repatriate reserved. O(X)
     *  - One event.
     * 
     *  Total Complexity: O(V + X)
     *  # </weight>
     */
    get asV38(): {rescuer: Uint8Array} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryCreateRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.create_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Create a recovery configuration for your account. This makes your account recoverable.
     * 
     *  Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
     *  will be reserved for storing the recovery configuration. This deposit is returned
     *  in full when the user calls `remove_recovery`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `friends`: A list of friends you trust to vouch for recovery attempts.
     *    Should be ordered and contain no duplicate values.
     *  - `threshold`: The number of friends that must vouch for a recovery attempt
     *    before the account can be recovered. Should be less than or equal to
     *    the length of the list of friends.
     *  - `delay_period`: The number of blocks after a recovery attempt is initialized
     *    that needs to pass before the account can be recovered.
     * 
     *  # <weight>
     *  - Key: F (len of friends)
     *  - One storage read to check that account is not already recoverable. O(1).
     *  - A check that the friends list is sorted and unique. O(F)
     *  - One currency reserve operation. O(X)
     *  - One storage write. O(1). Codec O(F).
     *  - One event.
     * 
     *  Total Complexity: O(F + X)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Recovery.create_recovery') === 'f15707f38a1f989e268042b9a0fb39bc5c323ba5ea517caa023a5dec5966feb6'
    }

    /**
     *  Create a recovery configuration for your account. This makes your account recoverable.
     * 
     *  Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
     *  will be reserved for storing the recovery configuration. This deposit is returned
     *  in full when the user calls `remove_recovery`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `friends`: A list of friends you trust to vouch for recovery attempts.
     *    Should be ordered and contain no duplicate values.
     *  - `threshold`: The number of friends that must vouch for a recovery attempt
     *    before the account can be recovered. Should be less than or equal to
     *    the length of the list of friends.
     *  - `delay_period`: The number of blocks after a recovery attempt is initialized
     *    that needs to pass before the account can be recovered.
     * 
     *  # <weight>
     *  - Key: F (len of friends)
     *  - One storage read to check that account is not already recoverable. O(1).
     *  - A check that the friends list is sorted and unique. O(F)
     *  - One currency reserve operation. O(X)
     *  - One storage write. O(1). Codec O(F).
     *  - One event.
     * 
     *  Total Complexity: O(F + X)
     *  # </weight>
     */
    get asV38(): {friends: Uint8Array[], threshold: number, delayPeriod: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryInitiateRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.initiate_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Initiate the process for recovering a recoverable account.
     * 
     *  Payment: `RecoveryDeposit` balance will be reserved for initiating the
     *  recovery process. This deposit will always be repatriated to the account
     *  trying to be recovered. See `close_recovery`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `account`: The lost account that you want to recover. This account
     *    needs to be recoverable (i.e. have a recovery configuration).
     * 
     *  # <weight>
     *  - One storage read to check that account is recoverable. O(F)
     *  - One storage read to check that this recovery process hasn't already started. O(1)
     *  - One currency reserve operation. O(X)
     *  - One storage read to get the current block number. O(1)
     *  - One storage write. O(1).
     *  - One event.
     * 
     *  Total Complexity: O(F + X)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Recovery.initiate_recovery') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     *  Initiate the process for recovering a recoverable account.
     * 
     *  Payment: `RecoveryDeposit` balance will be reserved for initiating the
     *  recovery process. This deposit will always be repatriated to the account
     *  trying to be recovered. See `close_recovery`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Parameters:
     *  - `account`: The lost account that you want to recover. This account
     *    needs to be recoverable (i.e. have a recovery configuration).
     * 
     *  # <weight>
     *  - One storage read to check that account is recoverable. O(F)
     *  - One storage read to check that this recovery process hasn't already started. O(1)
     *  - One currency reserve operation. O(X)
     *  - One storage read to get the current block number. O(1)
     *  - One storage write. O(1).
     *  - One event.
     * 
     *  Total Complexity: O(F + X)
     *  # </weight>
     */
    get asV38(): {account: Uint8Array} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryRemoveRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.remove_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove the recovery process for your account. Recovered accounts are still accessible.
     * 
     *  NOTE: The user must make sure to call `close_recovery` on all active
     *  recovery attempts before calling this function else it will fail.
     * 
     *  Payment: By calling this function the recoverable account will unreserve
     *  their recovery configuration deposit.
     *  (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a
     *  recoverable account (i.e. has a recovery configuration).
     * 
     *  # <weight>
     *  Key: F (len of friends)
     *  - One storage read to get the prefix iterator for active recoveries. O(1)
     *  - One storage read/remove to get the recovery configuration. O(1), Codec O(F)
     *  - One balance call to unreserved. O(X)
     *  - One event.
     * 
     *  Total Complexity: O(F + X)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Recovery.remove_recovery') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Remove the recovery process for your account. Recovered accounts are still accessible.
     * 
     *  NOTE: The user must make sure to call `close_recovery` on all active
     *  recovery attempts before calling this function else it will fail.
     * 
     *  Payment: By calling this function the recoverable account will unreserve
     *  their recovery configuration deposit.
     *  (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a
     *  recoverable account (i.e. has a recovery configuration).
     * 
     *  # <weight>
     *  Key: F (len of friends)
     *  - One storage read to get the prefix iterator for active recoveries. O(1)
     *  - One storage read/remove to get the recovery configuration. O(1), Codec O(F)
     *  - One balance call to unreserved. O(X)
     *  - One event.
     * 
     *  Total Complexity: O(F + X)
     *  # </weight>
     */
    get asV38(): null {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoverySetRecoveredCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.set_recovered')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Allow ROOT to bypass the recovery process and set an a rescuer account
     *  for a lost account directly.
     * 
     *  The dispatch origin for this call must be _ROOT_.
     * 
     *  Parameters:
     *  - `lost`: The "lost account" to be recovered.
     *  - `rescuer`: The "rescuer account" which can call as the lost account.
     * 
     *  # <weight>
     *  - One storage write O(1)
     *  - One event
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Recovery.set_recovered') === 'e31e64948b0477d6c231238f14482bc8fb02052d698dcb08eac8e46cb8abdf6c'
    }

    /**
     *  Allow ROOT to bypass the recovery process and set an a rescuer account
     *  for a lost account directly.
     * 
     *  The dispatch origin for this call must be _ROOT_.
     * 
     *  Parameters:
     *  - `lost`: The "lost account" to be recovered.
     *  - `rescuer`: The "rescuer account" which can call as the lost account.
     * 
     *  # <weight>
     *  - One storage write O(1)
     *  - One event
     *  # </weight>
     */
    get asV38(): {lost: Uint8Array, rescuer: Uint8Array} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryVouchRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.vouch_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Allow a "friend" of a recoverable account to vouch for an active recovery
     *  process for that account.
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a "friend"
     *  for the recoverable account.
     * 
     *  Parameters:
     *  - `lost`: The lost account that you want to recover.
     *  - `rescuer`: The account trying to rescue the lost account that you
     *    want to vouch for.
     * 
     *  The combination of these two parameters must point to an active recovery
     *  process.
     * 
     *  # <weight>
     *  Key: F (len of friends in config), V (len of vouching friends)
     *  - One storage read to get the recovery configuration. O(1), Codec O(F)
     *  - One storage read to get the active recovery process. O(1), Codec O(V)
     *  - One binary search to confirm caller is a friend. O(logF)
     *  - One binary search to confirm caller has not already vouched. O(logV)
     *  - One storage write. O(1), Codec O(V).
     *  - One event.
     * 
     *  Total Complexity: O(F + logF + V + logV)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Recovery.vouch_recovery') === 'e31e64948b0477d6c231238f14482bc8fb02052d698dcb08eac8e46cb8abdf6c'
    }

    /**
     *  Allow a "friend" of a recoverable account to vouch for an active recovery
     *  process for that account.
     * 
     *  The dispatch origin for this call must be _Signed_ and must be a "friend"
     *  for the recoverable account.
     * 
     *  Parameters:
     *  - `lost`: The lost account that you want to recover.
     *  - `rescuer`: The account trying to rescue the lost account that you
     *    want to vouch for.
     * 
     *  The combination of these two parameters must point to an active recovery
     *  process.
     * 
     *  # <weight>
     *  Key: F (len of friends in config), V (len of vouching friends)
     *  - One storage read to get the recovery configuration. O(1), Codec O(F)
     *  - One storage read to get the active recovery process. O(1), Codec O(V)
     *  - One binary search to confirm caller is a friend. O(logF)
     *  - One binary search to confirm caller has not already vouched. O(logV)
     *  - One storage write. O(1), Codec O(V).
     *  - One event.
     * 
     *  Total Complexity: O(F + logF + V + logV)
     *  # </weight>
     */
    get asV38(): {lost: Uint8Array, rescuer: Uint8Array} {
        assert(this.isV38)
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
     *  Cancel an anonymously scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.15 + 2.869 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     *  Cancel an anonymously scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.15 + 2.869 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get asV38(): {when: number, index: number} {
        assert(this.isV38)
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
     *  Cancel a named scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 24.91 + 2.907 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
    }

    /**
     *  Cancel a named scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 24.91 + 2.907 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get asV38(): {id: Uint8Array} {
        assert(this.isV38)
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
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'acb9968d45c40c473e415e415a9416c079ce45fcde9c5bbb73b5fe37ad5994f9'
    }

    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get asV38(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v38.Type_43} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'd2fcfbc355607c7d7834d5e2cdae15ac437eebd2789ab142466290479748c508'
    }

    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get asV41(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '9de6c5d1ce3b23fd2690fbc59b1d59bb808c03910a010075ae8abd031e77bfe2'
    }

    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    get asV45(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v45.Type_47} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '8ddedb5181efb09710880a5a15abd516475720e218ac14000a2a0c0d3573450c'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV53(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v53.MaybeHashed} {
        assert(this.isV53)
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
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'c76a8ee2d66cabeb1f2750769a04d2a14b745cfc45c7ab455c3e743a3e9c82b0'
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get asV41(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '3446ec9d06dd218c58040064a64fddc6d5e398d562cd643c59eb487d96be8bd4'
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get asV45(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v45.Type_47} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '9d0c3886e77e9dbe9cae20146509a7024b84332f85e91d26e3a57b1f4927ca68'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV53(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v53.MaybeHashed} {
        assert(this.isV53)
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
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'f329a42c1c4f9bb44e1f14149d3243623e6345298f50db4cb1eb55347ff2034e'
    }

    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    get asV38(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v38.Type_43} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '5be7a4ac513e98bc2c3a9b44ae7b613e164a652a283388770f55dc4cefa61bab'
    }

    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    get asV41(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '68eb2a3296a5baa6dbec94fbe1dcb7f4e8b8b2bf98fcce75fe40cf3b62712a53'
    }

    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    get asV45(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v45.Type_47} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '1034d5fc0c5e3fc91de8dbb640e62905b8d0797ac6f36925a91a4c7112c0034c'
    }

    /**
     * Schedule a named task.
     */
    get asV53(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v53.MaybeHashed} {
        assert(this.isV53)
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
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'd91139a7f2b0f0faa1156d22e2806f8141c7001b5704e3cdf0586fb2b196b02a'
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    get asV41(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v41.Type_43} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '1d395cf5edebf8ed2bf51de283df2e5687b595c244d53e0be3c0572bc405fcc5'
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    get asV45(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v45.Type_47} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '223cfd9f3a070b8300a02eb27e4a46a223ccd29289d7d3704453e6a0fcea4af2'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV53(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v53.MaybeHashed} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionPurgeKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.purge_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Removes any session key(s) of the function caller.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - Complexity: `O(1)` in number of key types.
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     *  - DbWrites: `NextKeys`, `origin account`
     *  - DbWrites per key id: `KeyOwnder`
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Removes any session key(s) of the function caller.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - Complexity: `O(1)` in number of key types.
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     *  - DbWrites: `NextKeys`, `origin account`
     *  - DbWrites per key id: `KeyOwnder`
     *  # </weight>
     */
    get asV38(): null {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionSetKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.set_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Sets the session key(s) of the function caller to `keys`.
     *  Allows an account to set its session key prior to becoming a validator.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - O(log n) in number of accounts.
     *  - One extra DB entry.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Session.set_keys') === 'c7b330a679f9bd903c6c1f11c1663dda10320887744436efcf21d3d2bbf3b85f'
    }

    /**
     *  Sets the session key(s) of the function caller to `keys`.
     *  Allows an account to set its session key prior to becoming a validator.
     *  This doesn't take effect until the next session.
     * 
     *  The dispatch origin of this function must be signed.
     * 
     *  # <weight>
     *  - O(log n) in number of accounts.
     *  - One extra DB entry.
     *  # </weight>
     */
    get asV31(): {keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array], proof: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Session.set_keys') === '04e85d90c7933a9aebe79eaf9ddc0763e1d6fe80f314f4e1eb5d763bcbd30e36'
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asV53(): {keys: v53.SessionKeys, proof: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class SignalingAdvanceProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Signaling.advance_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Advance a signaling proposal into the "voting" or "commit" stage.
     *  Can only be performed by the original author of the proposal.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Signaling.advance_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     *  Advance a signaling proposal into the "voting" or "commit" stage.
     *  Can only be performed by the original author of the proposal.
     */
    get asV31(): {proposalHash: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class SignalingCreateProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Signaling.create_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Creates a new signaling proposal.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Signaling.create_proposal') === '2c328118dabf20f1843e6c975b3c81cf4d9c380af32310db66b2cf1ed3bdd5ae'
    }

    /**
     *  Creates a new signaling proposal.
     */
    get asV31(): {title: Uint8Array, contents: Uint8Array, outcomes: Uint8Array[], voteType: v31.VoteType, tallyType: v31.TallyType} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingBondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.bond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
     *  be the account that controls it.
     * 
     *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     *  # <weight>
     *  - Independent of the arguments. Moderate complexity.
     *  - O(1).
     *  - Three extra DB entries.
     * 
     *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless
     *  the `origin` falls below _existential deposit_ and gets removed as dust.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.bond') === '77a89e4c12792f968efd83b6a9d740690602a445b35884d8ae655bdc1f3480f7'
    }

    /**
     *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
     *  be the account that controls it.
     * 
     *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     *  # <weight>
     *  - Independent of the arguments. Moderate complexity.
     *  - O(1).
     *  - Three extra DB entries.
     * 
     *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless
     *  the `origin` falls below _existential deposit_ and gets removed as dust.
     *  # </weight>
     */
    get asV31(): {controller: v31.LookupSource, value: bigint, payee: v31.RewardDestination} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
     *  be the account that controls it.
     * 
     *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     *  Emits `Bonded`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Moderate complexity.
     *  - O(1).
     *  - Three extra DB entries.
     * 
     *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
     *  ------------------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
     *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Staking.bond') === '336aace4bca839311d4cecb842a12241ffdc1cb7c84e81b2b6ab6a2b818777f0'
    }

    /**
     *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
     *  be the account that controls it.
     * 
     *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     *  Emits `Bonded`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Moderate complexity.
     *  - O(1).
     *  - Three extra DB entries.
     * 
     *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
     *  ------------------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
     *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get asV45(): {controller: v45.LookupSource, value: bigint, payee: v45.RewardDestination} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingBondExtraCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.bond_extra')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
     *  for staking.
     * 
     *  Use this if there are additional funds in your stash account that you wish to bond.
     *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
     *  that can be added.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - O(1).
     *  - One DB entry.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.bond_extra') === 'f92c56c980d6a55c468653fc3149548edcf2481e5da53835a201cafa7dc02fd8'
    }

    /**
     *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
     *  for staking.
     * 
     *  Use this if there are additional funds in your stash account that you wish to bond.
     *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
     *  that can be added.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - O(1).
     *  - One DB entry.
     *  # </weight>
     */
    get asV31(): {maxAdditional: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingCancelDeferredSlashCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.cancel_deferred_slash')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel enactment of a deferred slash. Can be called by either the root origin or
     *  the `T::SlashCancelOrigin`.
     *  passing the era and indices of the slashes for that era to kill.
     * 
     *  # <weight>
     *  - One storage write.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.cancel_deferred_slash') === 'fab176436ff709189f441a9c591b1e715361b4db2636055c0154e452e116feb0'
    }

    /**
     *  Cancel enactment of a deferred slash. Can be called by either the root origin or
     *  the `T::SlashCancelOrigin`.
     *  passing the era and indices of the slashes for that era to kill.
     * 
     *  # <weight>
     *  - One storage write.
     *  # </weight>
     */
    get asV31(): {era: number, slashIndices: number[]} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingChillCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.chill')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Declare no desire to either validate or nominate.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains one read.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.chill') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Declare no desire to either validate or nominate.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains one read.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingChillOtherCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.chill_other')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     * 
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     * 
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     * 
     * * `controller` must belong to a nominator who has become non-decodable,
     * 
     * Or:
     * 
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     * 
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Staking.chill_other') === 'bbdd03dc244a9d87deceeb91d015d7ef52746b99580b1474586c8699a77574e1'
    }

    /**
     * Declare a `controller` to stop participating as either a validator or nominator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_, but can be called by anyone.
     * 
     * If the caller is the same as the controller being targeted, then no further checks are
     * enforced, and this function behaves just like `chill`.
     * 
     * If the caller is different than the controller being targeted, the following conditions
     * must be met:
     * 
     * * `controller` must belong to a nominator who has become non-decodable,
     * 
     * Or:
     * 
     * * A `ChillThreshold` must be set and checked which defines how close to the max
     *   nominators or validators we must reach before users can start chilling one-another.
     * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *   how close we are to the threshold.
     * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *   if this is a person that should be chilled because they have not met the threshold
     *   bond required.
     * 
     * This can be helpful if bond requirements are updated, and we need to remove old users
     * who do not satisfy these requirements.
     */
    get asV53(): {controller: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceApplyMinCommissionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_apply_min_commission')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force a validator to have at least the minimum commission. This will not affect a
     * validator who already has a commission greater than or equal to the minimum. Any account
     * can call this.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Staking.force_apply_min_commission') === 'ee412bb909d2500627205d4c5b741967883fb1ed7f64bdc95edae3852f63750e'
    }

    /**
     * Force a validator to have at least the minimum commission. This will not affect a
     * validator who already has a commission greater than or equal to the minimum. Any account
     * can call this.
     */
    get asV53(): {validatorStash: Uint8Array} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceNewEraCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_new_era')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force there to be a new era at the end of the next session. After this, it will be
     *  reset to normal (non-forced) behaviour.
     * 
     *  # <weight>
     *  - No arguments.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.force_new_era') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Force there to be a new era at the end of the next session. After this, it will be
     *  reset to normal (non-forced) behaviour.
     * 
     *  # <weight>
     *  - No arguments.
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceNewEraAlwaysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_new_era_always')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force there to be a new era at the end of sessions indefinitely.
     * 
     *  # <weight>
     *  - One storage write
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.force_new_era_always') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Force there to be a new era at the end of sessions indefinitely.
     * 
     *  # <weight>
     *  - One storage write
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceNoErasCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_no_eras')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force there to be no new eras indefinitely.
     * 
     *  # <weight>
     *  - No arguments.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.force_no_eras') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Force there to be no new eras indefinitely.
     * 
     *  # <weight>
     *  - No arguments.
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingForceUnstakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.force_unstake')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Force a current staker to become completely unstaked, immediately.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.force_unstake') === '7f6c53511d7cf7d5d6d53c9bd68762f88e130eef3cdaff66e227fd21c493b12c'
    }

    /**
     *  Force a current staker to become completely unstaked, immediately.
     */
    get asV31(): {stash: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Force a current staker to become completely unstaked, immediately.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  O(S) where S is the number of slashing spans to be removed
     *  Base Weight: 53.07 + 2.365 * S µs
     *  Reads: Bonded, Slashing Spans, Account, Locks
     *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
     *  Writes Each: SpanSlash * S
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Staking.force_unstake') === '9d6e1257b3e6113f6cc99a4193f2fef8c6513a3d2a99ee686af751b5931f583b'
    }

    /**
     *  Force a current staker to become completely unstaked, immediately.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  O(S) where S is the number of slashing spans to be removed
     *  Base Weight: 53.07 + 2.365 * S µs
     *  Reads: Bonded, Slashing Spans, Account, Locks
     *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
     *  Writes Each: SpanSlash * S
     *  # </weight>
     */
    get asV38(): {stash: Uint8Array, numSlashingSpans: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingIncreaseValidatorCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.increase_validator_count')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Increments the ideal number of validators.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Base Weight: 1.717 µs
     *  Read/Write: Validator Count
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Staking.increase_validator_count') === '1b5e15eec25101f7a4e4a63e4c35b1120c3147dac0ca34ddcab4e7e3bb6ef150'
    }

    /**
     *  Increments the ideal number of validators.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Base Weight: 1.717 µs
     *  Read/Write: Validator Count
     *  # </weight>
     */
    get asV38(): {additional: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingKickCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.kick')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the given nominations from the calling validator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * - `who`: A list of nominator stash accounts who are nominating this validator which
     *   should no longer be nominating this validator.
     * 
     * Note: Making this call only makes sense if you first set the validator preferences to
     * block any further nominations.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Staking.kick') === '760f2d470d3cb5efbef130b8d79a202238d983a6680d5e2d4eee31ad48834e9f'
    }

    /**
     * Remove the given nominations from the calling validator.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * - `who`: A list of nominator stash accounts who are nominating this validator which
     *   should no longer be nominating this validator.
     * 
     * Note: Making this call only makes sense if you first set the validator preferences to
     * block any further nominations.
     */
    get asV53(): {who: v53.MultiAddress[]} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingNominateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.nominate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Declare the desire to nominate `targets` for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - The transaction's complexity is proportional to the size of `targets`,
     *  which is capped at `MAX_NOMINATIONS`.
     *  - Both the reads and writes follow a similar pattern.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.nominate') === 'ef0d9859df5914c3ac406eb6255e894f22bdc249ab0f7f82c6f01029112924b1'
    }

    /**
     *  Declare the desire to nominate `targets` for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - The transaction's complexity is proportional to the size of `targets`,
     *  which is capped at `MAX_NOMINATIONS`.
     *  - Both the reads and writes follow a similar pattern.
     *  # </weight>
     */
    get asV31(): {targets: v31.LookupSource[]} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Declare the desire to nominate `targets` for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era. This can only be called when
     *  [`EraElectionStatus`] is `Closed`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - The transaction's complexity is proportional to the size of `targets` (N)
     *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
     *  - Both the reads and writes follow a similar pattern.
     *  ---------
     *  Weight: O(N)
     *  where N is the number of targets
     *  DB Weight:
     *  - Reads: Era Election Status, Ledger, Current Era
     *  - Writes: Validators, Nominators
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Staking.nominate') === 'a653cde167810e73479047a5ef0738fdd0dc4e9afa5b310a19c8335e4378f706'
    }

    /**
     *  Declare the desire to nominate `targets` for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era. This can only be called when
     *  [`EraElectionStatus`] is `Closed`.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - The transaction's complexity is proportional to the size of `targets` (N)
     *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
     *  - Both the reads and writes follow a similar pattern.
     *  ---------
     *  Weight: O(N)
     *  where N is the number of targets
     *  DB Weight:
     *  - Reads: Era Election Status, Ledger, Current Era
     *  - Writes: Validators, Nominators
     *  # </weight>
     */
    get asV45(): {targets: v45.LookupSource[]} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingPayoutStakersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.payout_stakers')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pay out all the stakers behind a single validator for a single era.
     * 
     *  - `validator_stash` is the stash account of the validator. Their nominators, up to
     *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     *  - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     *  The origin of this call must be _Signed_. Any account can call this function, even if
     *  it is not one of the stakers.
     * 
     *  This can only be called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     *  - Contains a limited number of reads and writes.
     *  -----------
     *  N is the Number of payouts for the validator (including the validator)
     *  Base Weight: 110 + 54.2 * N µs (Median Slopes)
     *  DB Weight:
     *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
     *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
     *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
     *  - Write Each: System Account, Locks, Ledger (3 items)
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Staking.payout_stakers') === '1a09dc413ed4b8ce5cbcdc282b798636ca24268cca001e43fc92d892de3b6a5f'
    }

    /**
     *  Pay out all the stakers behind a single validator for a single era.
     * 
     *  - `validator_stash` is the stash account of the validator. Their nominators, up to
     *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     *  - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     *  The origin of this call must be _Signed_. Any account can call this function, even if
     *  it is not one of the stakers.
     * 
     *  This can only be called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     *  - Contains a limited number of reads and writes.
     *  -----------
     *  N is the Number of payouts for the validator (including the validator)
     *  Base Weight: 110 + 54.2 * N µs (Median Slopes)
     *  DB Weight:
     *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
     *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
     *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
     *  - Write Each: System Account, Locks, Ledger (3 items)
     *  # </weight>
     */
    get asV38(): {validatorStash: Uint8Array, era: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingReapStashCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.reap_stash')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove all data structure concerning a staker/stash once its balance is zero.
     *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
     *  and the target `stash` must have no funds left.
     * 
     *  This can be called from any origin.
     * 
     *  - `stash`: The stash account to reap. Its balance must be zero.
     * 
     *  # <weight>
     *  Complexity: O(S) where S is the number of slashing spans on the account.
     *  Base Weight: 75.94 + 2.396 * S µs
     *  DB Weight:
     *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
     *  - Writes Each: SpanSlash * S
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Staking.reap_stash') === '9d6e1257b3e6113f6cc99a4193f2fef8c6513a3d2a99ee686af751b5931f583b'
    }

    /**
     *  Remove all data structure concerning a staker/stash once its balance is zero.
     *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
     *  and the target `stash` must have no funds left.
     * 
     *  This can be called from any origin.
     * 
     *  - `stash`: The stash account to reap. Its balance must be zero.
     * 
     *  # <weight>
     *  Complexity: O(S) where S is the number of slashing spans on the account.
     *  Base Weight: 75.94 + 2.396 * S µs
     *  DB Weight:
     *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
     *  - Writes Each: SpanSlash * S
     *  # </weight>
     */
    get asV38(): {stash: Uint8Array, numSlashingSpans: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingRebondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.rebond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Rebond a portion of the stash scheduled to be unlocked.
     * 
     *  # <weight>
     *  - Time complexity: O(1). Bounded by `MAX_UNLOCKING_CHUNKS`.
     *  - Storage changes: Can't increase storage, only decrease it.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.rebond') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
    }

    /**
     *  Rebond a portion of the stash scheduled to be unlocked.
     * 
     *  # <weight>
     *  - Time complexity: O(1). Bounded by `MAX_UNLOCKING_CHUNKS`.
     *  - Storage changes: Can't increase storage, only decrease it.
     *  # </weight>
     */
    get asV31(): {value: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingScaleValidatorCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.scale_validator_count')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Scale up the ideal number of validators by a factor.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Base Weight: 1.717 µs
     *  Read/Write: Validator Count
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Staking.scale_validator_count') === 'd5f5b0d2128c7dec0e2681f604f51d1657af9bf5eb7c704432075cb4655e0065'
    }

    /**
     *  Scale up the ideal number of validators by a factor.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Base Weight: 1.717 µs
     *  Read/Write: Validator Count
     *  # </weight>
     */
    get asV38(): {factor: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetControllerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_controller')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  (Re-)set the controller of a stash.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.set_controller') === 'ea495be34eb0363f94ad384fd20004dfec26ca760dc2776b92541482a1719f1b'
    }

    /**
     *  (Re-)set the controller of a stash.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    get asV31(): {controller: v31.LookupSource} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  (Re-)set the controller of a stash.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  ----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
     *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Staking.set_controller') === '61b4041aa7366e679d366d2062deb643451b64015c330746395765e6865e5af2'
    }

    /**
     *  (Re-)set the controller of a stash.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  ----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
     *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
     *  # </weight>
     */
    get asV45(): {controller: v45.LookupSource} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetHistoryDepthCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_history_depth')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set `HistoryDepth` value. This function will delete any history information
     *  when `HistoryDepth` is reduced.
     * 
     *  Parameters:
     *  - `new_history_depth`: The new history depth you would like to set.
     *  - `era_items_deleted`: The number of items that will be deleted by this dispatch.
     *     This should report all the storage items that will be deleted by clearing old
     *     era history. Needed to report an accurate weight for the dispatch. Trusted by
     *     `Root` to report an accurate number.
     * 
     *  Origin must be root.
     * 
     *  # <weight>
     *  - E: Number of history depths removed, i.e. 10 -> 7 = 3
     *  - Base Weight: 29.13 * E µs
     *  - DB Weight:
     *      - Reads: Current Era, History Depth
     *      - Writes: History Depth
     *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
     *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Staking.set_history_depth') === 'aff387362bca2e77192ffecea0e2882e4c2722db15c54e48ddded4e0dafe3446'
    }

    /**
     *  Set `HistoryDepth` value. This function will delete any history information
     *  when `HistoryDepth` is reduced.
     * 
     *  Parameters:
     *  - `new_history_depth`: The new history depth you would like to set.
     *  - `era_items_deleted`: The number of items that will be deleted by this dispatch.
     *     This should report all the storage items that will be deleted by clearing old
     *     era history. Needed to report an accurate weight for the dispatch. Trusted by
     *     `Root` to report an accurate number.
     * 
     *  Origin must be root.
     * 
     *  # <weight>
     *  - E: Number of history depths removed, i.e. 10 -> 7 = 3
     *  - Base Weight: 29.13 * E µs
     *  - DB Weight:
     *      - Reads: Current Era, History Depth
     *      - Writes: History Depth
     *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
     *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
     *  # </weight>
     */
    get asV38(): {newHistoryDepth: number, eraItemsDeleted: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetInvulnerablesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_invulnerables')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set the validators who cannot be slashed (if any).
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.set_invulnerables') === '29f7c09ae365d68c20c11ff1fed7e18b97efdc9301be013378b2df5277f1557d'
    }

    /**
     *  Set the validators who cannot be slashed (if any).
     */
    get asV31(): {validators: Uint8Array[]} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Set the validators who cannot be slashed (if any).
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - O(V)
     *  - Write: Invulnerables
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.set_invulnerables') === '994c18897efc6a5b0e11aeb337b6c718ad03cb0eb182a442fc74b9c80dd56313'
    }

    /**
     *  Set the validators who cannot be slashed (if any).
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - O(V)
     *  - Write: Invulnerables
     *  # </weight>
     */
    get asV41(): {invulnerables: Uint8Array[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetPayeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_payee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  (Re-)set the payment target for a controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.set_payee') === 'e882138b8d0371da862d058ac00f1def3ca0f71ab72eda3fbfb7d75b5fa16515'
    }

    /**
     *  (Re-)set the payment target for a controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    get asV31(): {payee: v31.RewardDestination} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetStakingConfigsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_staking_configs')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update the various staking configurations .
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     * 
     * Origin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('Staking.set_staking_configs') === '67189d3ca60a3305c1159ea1c7b2cfcbc749ef2c16f16b4c876daab793efdf86'
    }

    /**
     * Update the various staking configurations .
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
     *   should be filled in order for the `chill_other` transaction to work.
     * * `min_commission`: The minimum amount of commission that each validators must maintain.
     *   This is checked only upon calling `validate`. Existing validators are not affected.
     * 
     * Origin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    get asV53(): {minNominatorBond: v53.ConfigOp, minValidatorBond: v53.ConfigOp, maxNominatorCount: v53.Type_144, maxValidatorCount: v53.Type_144, chillThreshold: v53.Type_145, minCommission: v53.Type_146} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetValidatorCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_validator_count')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  The ideal number of validators.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.set_validator_count') === 'e648274eb741b1a8ab74c4583589c621e8391cd9122c0f7063e1e18c4af71912'
    }

    /**
     *  The ideal number of validators.
     */
    get asV31(): {new: number} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSubmitElectionSolutionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.submit_election_solution')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Submit an election result to the chain. If the solution:
     * 
     *  1. is valid.
     *  2. has a better score than a potentially existing solution on chain.
     * 
     *  then, it will be _put_ on chain.
     * 
     *  A solution consists of two pieces of data:
     * 
     *  1. `winners`: a flat vector of all the winners of the round.
     *  2. `assignments`: the compact version of an assignment vector that encodes the edge
     *     weights.
     * 
     *  Both of which may be computed using _phragmen_, or any other algorithm.
     * 
     *  Additionally, the submitter must provide:
     * 
     *  - The `score` that they claim their solution has.
     * 
     *  Both validators and nominators will be represented by indices in the solution. The
     *  indices should respect the corresponding types ([`ValidatorIndex`] and
     *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
     *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
     *  solution to be rejected. These two storage items are set during the election window and
     *  may be used to determine the indices.
     * 
     *  A solution is valid if:
     * 
     *  0. It is submitted when [`EraElectionStatus`] is `Open`.
     *  1. Its claimed score is equal to the score computed on-chain.
     *  2. Presents the correct number of winners.
     *  3. All indexes must be value according to the snapshot vectors. All edge values must
     *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
     *     or billion).
     *  4. For each edge, all targets are actually nominated by the voter.
     *  5. Has correct self-votes.
     * 
     *  A solutions score is consisted of 3 parameters:
     * 
     *  1. `min { support.total }` for each support of a winner. This value should be maximized.
     *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
     *  3. `sum { support.total^2 }` for each support of a winner. This value should be
     *     minimized (to ensure less variance)
     * 
     *  # <weight>
     *  See `crate::weight` module.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Staking.submit_election_solution') === '8b1c317477ee5c931c588d2c57c8b26b50b96be73c3cc3ce8617e2e61e33f6e3'
    }

    /**
     *  Submit an election result to the chain. If the solution:
     * 
     *  1. is valid.
     *  2. has a better score than a potentially existing solution on chain.
     * 
     *  then, it will be _put_ on chain.
     * 
     *  A solution consists of two pieces of data:
     * 
     *  1. `winners`: a flat vector of all the winners of the round.
     *  2. `assignments`: the compact version of an assignment vector that encodes the edge
     *     weights.
     * 
     *  Both of which may be computed using _phragmen_, or any other algorithm.
     * 
     *  Additionally, the submitter must provide:
     * 
     *  - The `score` that they claim their solution has.
     * 
     *  Both validators and nominators will be represented by indices in the solution. The
     *  indices should respect the corresponding types ([`ValidatorIndex`] and
     *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
     *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
     *  solution to be rejected. These two storage items are set during the election window and
     *  may be used to determine the indices.
     * 
     *  A solution is valid if:
     * 
     *  0. It is submitted when [`EraElectionStatus`] is `Open`.
     *  1. Its claimed score is equal to the score computed on-chain.
     *  2. Presents the correct number of winners.
     *  3. All indexes must be value according to the snapshot vectors. All edge values must
     *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
     *     or billion).
     *  4. For each edge, all targets are actually nominated by the voter.
     *  5. Has correct self-votes.
     * 
     *  A solutions score is consisted of 3 parameters:
     * 
     *  1. `min { support.total }` for each support of a winner. This value should be maximized.
     *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
     *  3. `sum { support.total^2 }` for each support of a winner. This value should be
     *     minimized (to ensure less variance)
     * 
     *  # <weight>
     *  See `crate::weight` module.
     *  # </weight>
     */
    get asV38(): {winners: number[], compact: v38.CompactAssignments, score: bigint[], era: number, size: v38.ElectionSize} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Submit an election result to the chain. If the solution:
     * 
     *  1. is valid.
     *  2. has a better score than a potentially existing solution on chain.
     * 
     *  then, it will be _put_ on chain.
     * 
     *  A solution consists of two pieces of data:
     * 
     *  1. `winners`: a flat vector of all the winners of the round.
     *  2. `assignments`: the compact version of an assignment vector that encodes the edge
     *     weights.
     * 
     *  Both of which may be computed using _phragmen_, or any other algorithm.
     * 
     *  Additionally, the submitter must provide:
     * 
     *  - The `score` that they claim their solution has.
     * 
     *  Both validators and nominators will be represented by indices in the solution. The
     *  indices should respect the corresponding types ([`ValidatorIndex`] and
     *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
     *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
     *  solution to be rejected. These two storage items are set during the election window and
     *  may be used to determine the indices.
     * 
     *  A solution is valid if:
     * 
     *  0. It is submitted when [`EraElectionStatus`] is `Open`.
     *  1. Its claimed score is equal to the score computed on-chain.
     *  2. Presents the correct number of winners.
     *  3. All indexes must be value according to the snapshot vectors. All edge values must
     *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
     *     or billion).
     *  4. For each edge, all targets are actually nominated by the voter.
     *  5. Has correct self-votes.
     * 
     *  A solutions score is consisted of 3 parameters:
     * 
     *  1. `min { support.total }` for each support of a winner. This value should be maximized.
     *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
     *  3. `sum { support.total^2 }` for each support of a winner. This value should be
     *     minimized (to ensure less variance)
     * 
     *  # <weight>
     *  The transaction is assumed to be the longest path, a better solution.
     *    - Initial solution is almost the same.
     *    - Worse solution is retraced in pre-dispatch-checks which sets its own weight.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.submit_election_solution') === '7bb9cd5dd08bc49e4a101b60cee9cd8847a9d04c218e0e179244a55b2485fd62'
    }

    /**
     *  Submit an election result to the chain. If the solution:
     * 
     *  1. is valid.
     *  2. has a better score than a potentially existing solution on chain.
     * 
     *  then, it will be _put_ on chain.
     * 
     *  A solution consists of two pieces of data:
     * 
     *  1. `winners`: a flat vector of all the winners of the round.
     *  2. `assignments`: the compact version of an assignment vector that encodes the edge
     *     weights.
     * 
     *  Both of which may be computed using _phragmen_, or any other algorithm.
     * 
     *  Additionally, the submitter must provide:
     * 
     *  - The `score` that they claim their solution has.
     * 
     *  Both validators and nominators will be represented by indices in the solution. The
     *  indices should respect the corresponding types ([`ValidatorIndex`] and
     *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
     *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
     *  solution to be rejected. These two storage items are set during the election window and
     *  may be used to determine the indices.
     * 
     *  A solution is valid if:
     * 
     *  0. It is submitted when [`EraElectionStatus`] is `Open`.
     *  1. Its claimed score is equal to the score computed on-chain.
     *  2. Presents the correct number of winners.
     *  3. All indexes must be value according to the snapshot vectors. All edge values must
     *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
     *     or billion).
     *  4. For each edge, all targets are actually nominated by the voter.
     *  5. Has correct self-votes.
     * 
     *  A solutions score is consisted of 3 parameters:
     * 
     *  1. `min { support.total }` for each support of a winner. This value should be maximized.
     *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
     *  3. `sum { support.total^2 }` for each support of a winner. This value should be
     *     minimized (to ensure less variance)
     * 
     *  # <weight>
     *  The transaction is assumed to be the longest path, a better solution.
     *    - Initial solution is almost the same.
     *    - Worse solution is retraced in pre-dispatch-checks which sets its own weight.
     *  # </weight>
     */
    get asV41(): {winners: number[], compact: v41.CompactAssignments, score: bigint[], era: number, size: v41.ElectionSize} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSubmitElectionSolutionUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.submit_election_solution_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Unsigned version of `submit_election_solution`.
     * 
     *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
     *  from the local node to be included. In other words, only the block author can include a
     *  transaction in the block.
     * 
     *  # <weight>
     *  See `crate::weight` module.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Staking.submit_election_solution_unsigned') === '8b1c317477ee5c931c588d2c57c8b26b50b96be73c3cc3ce8617e2e61e33f6e3'
    }

    /**
     *  Unsigned version of `submit_election_solution`.
     * 
     *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
     *  from the local node to be included. In other words, only the block author can include a
     *  transaction in the block.
     * 
     *  # <weight>
     *  See `crate::weight` module.
     *  # </weight>
     */
    get asV38(): {winners: number[], compact: v38.CompactAssignments, score: bigint[], era: number, size: v38.ElectionSize} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Unsigned version of `submit_election_solution`.
     * 
     *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
     *  from the local node to be included. In other words, only the block author can include a
     *  transaction in the block.
     * 
     *  # <weight>
     *  See `crate::weight` module.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Staking.submit_election_solution_unsigned') === '7bb9cd5dd08bc49e4a101b60cee9cd8847a9d04c218e0e179244a55b2485fd62'
    }

    /**
     *  Unsigned version of `submit_election_solution`.
     * 
     *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
     *  from the local node to be included. In other words, only the block author can include a
     *  transaction in the block.
     * 
     *  # <weight>
     *  See `crate::weight` module.
     *  # </weight>
     */
    get asV41(): {winners: number[], compact: v41.CompactAssignments, score: bigint[], era: number, size: v41.ElectionSize} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingUnbondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.unbond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     *  period ends. If this leaves an amount actively bonded less than
     *  T::Currency::minimum_balance(), then it is increased to the full amount.
     * 
     *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     *  the funds out of management ready for transfer.
     * 
     *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
     *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
     *  to be called first to remove some of the chunks (if possible).
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  See also [`Call::withdraw_unbonded`].
     * 
     *  # <weight>
     *  - Independent of the arguments. Limited but potentially exploitable complexity.
     *  - Contains a limited number of reads.
     *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
     *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
     *    The only way to clean the aforementioned storage item is also user-controlled via `withdraw_unbonded`.
     *  - One DB entry.
     *  </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.unbond') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
    }

    /**
     *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     *  period ends. If this leaves an amount actively bonded less than
     *  T::Currency::minimum_balance(), then it is increased to the full amount.
     * 
     *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     *  the funds out of management ready for transfer.
     * 
     *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
     *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
     *  to be called first to remove some of the chunks (if possible).
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  See also [`Call::withdraw_unbonded`].
     * 
     *  # <weight>
     *  - Independent of the arguments. Limited but potentially exploitable complexity.
     *  - Contains a limited number of reads.
     *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
     *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
     *    The only way to clean the aforementioned storage item is also user-controlled via `withdraw_unbonded`.
     *  - One DB entry.
     *  </weight>
     */
    get asV31(): {value: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingValidateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.validate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Declare the desire to validate for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.validate') === '2a662df491d449985438edd4d2e6899fd06beebbaa59e759713811ade38308bf'
    }

    /**
     *  Declare the desire to validate for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    get asV31(): {prefs: v31.ValidatorPrefs} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingWithdrawUnbondedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.withdraw_unbonded')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     *  This essentially frees up that balance to be used by the stash account to do
     *  whatever it wants.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  See also [`Call::unbond`].
     * 
     *  # <weight>
     *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
     *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
     *   indirectly user-controlled. See [`unbond`] for more detail.
     *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Staking.withdraw_unbonded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     *  This essentially frees up that balance to be used by the stash account to do
     *  whatever it wants.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     *  See also [`Call::unbond`].
     * 
     *  # <weight>
     *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
     *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
     *   indirectly user-controlled. See [`unbond`] for more detail.
     *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
     *  - Writes are limited to the `origin` account key.
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     *  This essentially frees up that balance to be used by the stash account to do
     *  whatever it wants.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Withdrawn`.
     * 
     *  See also [`Call::unbond`].
     * 
     *  # <weight>
     *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
     *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
     *   indirectly user-controlled. See [`unbond`] for more detail.
     *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
     *  - Writes are limited to the `origin` account key.
     *  ---------------
     *  Complexity O(S) where S is the number of slashing spans to remove
     *  Base Weight:
     *  Update: 50.52 + .028 * S µs
     *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
     *  - Writes: [Origin Account], Locks, Ledger
     *  Kill: 79.41 + 2.366 * S µs
     *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin Account], Locks
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, [Origin Account], Locks
     *  - Writes Each: SpanSlash * S
     *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Staking.withdraw_unbonded') === '6a7f80eeb74b237a907212a84c7fbc3bbfc8155b3decc30afb4c65c3bcb3f317'
    }

    /**
     *  Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     *  This essentially frees up that balance to be used by the stash account to do
     *  whatever it wants.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Withdrawn`.
     * 
     *  See also [`Call::unbond`].
     * 
     *  # <weight>
     *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
     *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
     *   indirectly user-controlled. See [`unbond`] for more detail.
     *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
     *  - Writes are limited to the `origin` account key.
     *  ---------------
     *  Complexity O(S) where S is the number of slashing spans to remove
     *  Base Weight:
     *  Update: 50.52 + .028 * S µs
     *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
     *  - Writes: [Origin Account], Locks, Ledger
     *  Kill: 79.41 + 2.366 * S µs
     *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin Account], Locks
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, [Origin Account], Locks
     *  - Writes Each: SpanSlash * S
     *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
     *  # </weight>
     */
    get asV38(): {numSlashingSpans: number} {
        assert(this.isV38)
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
    get isV31(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === '99fb23ead3148119615841917828d5eba57f475f320525e9e8d9e277d2d8d585'
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
    get asV31(): {new: v31.LookupSource} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
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
    get isV45(): boolean {
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
    get asV45(): {new: v45.LookupSource} {
        assert(this.isV45)
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
     *  - Unknown weight of derivative `proposal` execution.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '6cd011a1761a5e105b86798d205580d6045214938d50c846ca0fb40b08fc191e'
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
     *  - Unknown weight of derivative `proposal` execution.
     *  # </weight>
     */
    get asV31(): {proposal: v31.Proposal} {
        assert(this.isV31)
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
    get isV38(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'b389c15f063c439324aab4ffe2469e49097f176578b3ffd3f06c21f53a98a044'
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
    get asV38(): {call: v38.Type_43} {
        assert(this.isV38)
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
    get isV41(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '4d8ab64f53a68f6d6850fdda27684e3ed3910a201e729991f6a24d8331cd0d2c'
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
    get asV41(): {call: v41.Type_43} {
        assert(this.isV41)
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
    get isV45(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '290b2d5f1d95a9af51d743132f8a95c4e347ac958ad549237eb17f5796c101fc'
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
    get asV45(): {call: v45.Type_47} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '9aed88b8b87c023f0a8dbb2930f23bc5b4943ba132682d555ee0c07af64813a0'
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
    get asV53(): {call: v53.Call} {
        assert(this.isV53)
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
     *  - Unknown weight of derivative `proposal` execution.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'bf2891c9e5d7f34e26e385ffbce37a2427bce96fd70a91e99147f794f338a572'
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
     *  - Unknown weight of derivative `proposal` execution.
     *  # </weight>
     */
    get asV31(): {who: v31.LookupSource, proposal: v31.Proposal} {
        assert(this.isV31)
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
    get isV38(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '4bf51f33da8acad88e6979e0f92449995340fae44659886d76a98f909fb3cf79'
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
    get asV38(): {who: v38.LookupSource, call: v38.Type_43} {
        assert(this.isV38)
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
    get isV41(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '5cdc39308eb670a8db10ca0be9d3892ce430c2cfdb6fa8bb851cb8b7be01f561'
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
    get asV41(): {who: v41.LookupSource, call: v41.Type_43} {
        assert(this.isV41)
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
    get isV45(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'c60bb21e5d682054659c511dc0dad3bf69847d6e72a72083943531737858d482'
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
    get asV45(): {who: v45.LookupSource, call: v45.Type_47} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'fd001bc5d3d8f0e34ef3d4b8c91d4e37566e6c39947f928212c396f51888cdac'
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
    get asV53(): {who: v53.MultiAddress, call: v53.Call} {
        assert(this.isV53)
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
    get isV38(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '494df1ee81105b6a16be8594ec7dac689f5df38c0abd566a4fafedb5f1f7026d'
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
    get asV38(): {call: v38.Type_43, weight: bigint} {
        assert(this.isV38)
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
    get isV41(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'cc0d54fc3447bb22531da780e26aabfb7a62e4cee68f85402b9c6dc7963dea4f'
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
    get asV41(): {call: v41.Type_43, weight: bigint} {
        assert(this.isV41)
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
    get isV45(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'b0b161b94838ad9d555eb17716b544be46bcfc64d006d6305b703c9ce7c9167c'
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
    get asV45(): {call: v45.Type_47, weight: bigint} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'e7be9f5063a93413f4212860de44524dcdaf88f82491a80e55871bcc95e5edfd'
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
    get asV53(): {call: v53.Call, weight: bigint} {
        assert(this.isV53)
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
     *  A big dispatch that will disallow any other transaction to be included.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('System.fill_block') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  A big dispatch that will disallow any other transaction to be included.
     */
    get asV31(): null {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
    }

    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    get asV38(): {ratio: number} {
        assert(this.isV38)
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
     */
    get isV31(): boolean {
        return this._chain.getCallHash('System.kill_prefix') === 'f848fd0e0542703f896e3ab1f91d388f8f7b19f44db5b001bb6bd5c3034ce972'
    }

    /**
     *  Kill all storage items with a key that starts with the given prefix.
     */
    get asV31(): {prefix: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
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
    get isV38(): boolean {
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
    get asV38(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV38)
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
     */
    get isV31(): boolean {
        return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
    }

    /**
     *  Kill some items from storage.
     */
    get asV31(): {keys: Uint8Array[]} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemMigrateAccountsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.migrate_accounts')
        this._chain = ctx._chain
        this.call = call
    }

    get isV38(): boolean {
        return this._chain.getCallHash('System.migrate_accounts') === 'f991968966792a125cac7c888dc7194239a215e624de7c15edbe7afe0e683c8a'
    }

    get asV38(): {accounts: Uint8Array[]} {
        assert(this.isV38)
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
     */
    get isV31(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     *  Make some on-chain remark.
     */
    get asV31(): {remark: Uint8Array} {
        assert(this.isV31)
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
     * Make some on-chain remark and emit event.
     */
    get isV53(): boolean {
        return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark and emit event.
     */
    get asV53(): {remark: Uint8Array} {
        assert(this.isV53)
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
     */
    get isV31(): boolean {
        return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
    }

    /**
     *  Set the new changes trie configuration.
     */
    get asV31(): {changesTrieConfig: (v31.ChangesTrieConfiguration | undefined)} {
        assert(this.isV31)
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
     */
    get isV31(): boolean {
        return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     *  Set the new runtime code.
     */
    get asV31(): {code: Uint8Array} {
        assert(this.isV31)
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
     */
    get isV31(): boolean {
        return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     *  Set the new runtime code without doing any checks of the given `code`.
     */
    get asV31(): {code: Uint8Array} {
        assert(this.isV31)
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
     */
    get isV31(): boolean {
        return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
    }

    /**
     *  Set the number of pages in the WebAssembly environment's heap.
     */
    get asV31(): {pages: bigint} {
        assert(this.isV31)
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
     */
    get isV31(): boolean {
        return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
    }

    /**
     *  Set some items of storage.
     */
    get asV31(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSuicideCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.suicide')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Kill the sending account, assuming there are no references outstanding and the composite
     *  data is equal to its default value.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage read and deletion.
     *  --------------------
     *  Base Weight: 8.626 µs
     *  No DB Read or Write operations because caller is already in overlay
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('System.suicide') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Kill the sending account, assuming there are no references outstanding and the composite
     *  data is equal to its default value.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - 1 storage read and deletion.
     *  --------------------
     *  Base Weight: 8.626 µs
     *  No DB Read or Write operations because caller is already in overlay
     *  # </weight>
     */
    get asV38(): null {
        assert(this.isV38)
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
     */
    get isV31(): boolean {
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
     */
    get asV31(): {now: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsCloseTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.close_tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Close and payout a tip.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  The tip identified by `hash` must have finished its countdown period.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`.
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     *  - DbReads: `Tips`, `Tippers`, `tip finder`
     *  - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Tips.close_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     *  Close and payout a tip.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  The tip identified by `hash` must have finished its countdown period.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`.
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     *  - DbReads: `Tips`, `Tippers`, `tip finder`
     *  - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
     *  # </weight>
     */
    get asV45(): {hash: Uint8Array} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsReportAwesomeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.report_awesome')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `DataDepositPerByte` for each byte in `reason`.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(R)` where `R` length of `reason`.
     *    - encoding and hashing of 'reason'
     *  - DbReads: `Reasons`, `Tips`
     *  - DbWrites: `Reasons`, `Tips`
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Tips.report_awesome') === '5f39cdb6a1bab5505c2717a3d34b1ad66c35bb6aca421780ce60b4e9017fe886'
    }

    /**
     *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `DataDepositPerByte` for each byte in `reason`.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(R)` where `R` length of `reason`.
     *    - encoding and hashing of 'reason'
     *  - DbReads: `Reasons`, `Tips`
     *  - DbWrites: `Reasons`, `Tips`
     *  # </weight>
     */
    get asV45(): {reason: Uint8Array, who: Uint8Array} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsRetractTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.retract_tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
     * 
     *  If successful, the original deposit will be unreserved.
     * 
     *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
     *  must have been reported by the signing account through `report_awesome` (and not
     *  through `tip_new`).
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  Emits `TipRetracted` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *    - Depends on the length of `T::Hash` which is fixed.
     *  - DbReads: `Tips`, `origin account`
     *  - DbWrites: `Reasons`, `Tips`, `origin account`
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Tips.retract_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
     * 
     *  If successful, the original deposit will be unreserved.
     * 
     *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
     *  must have been reported by the signing account through `report_awesome` (and not
     *  through `tip_new`).
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  Emits `TipRetracted` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(1)`
     *    - Depends on the length of `T::Hash` which is fixed.
     *  - DbReads: `Tips`, `origin account`
     *  - DbWrites: `Reasons`, `Tips`, `origin account`
     *  # </weight>
     */
    get asV45(): {hash: Uint8Array} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsSlashTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.slash_tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove and slash an already-open tip.
     * 
     *  May only be called from `T::RejectOrigin`.
     * 
     *  As a result, the finder is slashed and the deposits are lost.
     * 
     *  Emits `TipSlashed` if successful.
     * 
     *  # <weight>
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Tips.slash_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     *  Remove and slash an already-open tip.
     * 
     *  May only be called from `T::RejectOrigin`.
     * 
     *  As a result, the finder is slashed and the deposits are lost.
     * 
     *  Emits `TipSlashed` if successful.
     * 
     *  # <weight>
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     *  # </weight>
     */
    get asV45(): {hash: Uint8Array} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Tips.tip') === 'f3795cdab18c292963e0e30ece37a15a2900030efc315a8e3f28ba886b2b9f58'
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    get asV45(): {hash: Uint8Array, tipValue: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsTipNewCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.tip_new')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Give a tip for something new; no finder's fee will be taken.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *    - `O(T)`: decoding `Tipper` vec of length `T`
     *      `T` is charged as upper bound given by `ContainsLengthBound`.
     *      The actual cost depends on the implementation of `T::Tippers`.
     *    - `O(R)`: hashing and encoding of reason of length `R`
     *  - DbReads: `Tippers`, `Reasons`
     *  - DbWrites: `Reasons`, `Tips`
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Tips.tip_new') === '367b1dcdffb32d8c4b26e342e9b515c65f2589dec81f4a3f6f336faaa7e127ac'
    }

    /**
     *  Give a tip for something new; no finder's fee will be taken.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *    - `O(T)`: decoding `Tipper` vec of length `T`
     *      `T` is charged as upper bound given by `ContainsLengthBound`.
     *      The actual cost depends on the implementation of `T::Tippers`.
     *    - `O(R)`: hashing and encoding of reason of length `R`
     *  - DbReads: `Tippers`, `Reasons`
     *  - DbWrites: `Reasons`, `Tips`
     *  # </weight>
     */
    get asV45(): {reason: Uint8Array, who: Uint8Array, tipValue: bigint} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryAcceptCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.accept_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Accept the curator role for a bounty.
     *  A deposit will be reserved from curator and refund upon successful payout.
     * 
     *  May only be called from the curator.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Accept the curator role for a bounty.
     *  A deposit will be reserved from curator and refund upon successful payout.
     * 
     *  May only be called from the curator.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get asV41(): {bountyId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryApproveBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.approve_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Approve a bounty proposal. At a later time, the bounty will be funded and become active
     *  and the original deposit will be returned.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.approve_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Approve a bounty proposal. At a later time, the bounty will be funded and become active
     *  and the original deposit will be returned.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get asV41(): {bountyId: number} {
        assert(this.isV41)
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
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Treasury.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     *  and the original deposit will be returned.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get asV31(): {proposalId: number} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryAwardBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.award_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
     * 
     *  The dispatch origin for this call must be the curator of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to award.
     *  - `beneficiary`: The beneficiary account whom will receive the payout.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.award_bounty') === 'e281ff0a613047b83ec5d47cf913f2b3b9ae2a533bf5d8bb1083bd147e480b55'
    }

    /**
     *  Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
     * 
     *  The dispatch origin for this call must be the curator of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to award.
     *  - `beneficiary`: The beneficiary account whom will receive the payout.
     */
    get asV41(): {bountyId: number, beneficiary: v41.LookupSource} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryClaimBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.claim_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Claim the payout from an awarded bounty after payout delay.
     * 
     *  The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to claim.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.claim_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Claim the payout from an awarded bounty after payout delay.
     * 
     *  The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to claim.
     */
    get asV41(): {bountyId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryCloseBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.close_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel a proposed or active bounty. All the funds will be sent to treasury and
     *  the curator deposit will be unreserved if possible.
     * 
     *  Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     *  - `bounty_id`: Bounty ID to cancel.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.close_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Cancel a proposed or active bounty. All the funds will be sent to treasury and
     *  the curator deposit will be unreserved if possible.
     * 
     *  Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     *  - `bounty_id`: Bounty ID to cancel.
     */
    get asV41(): {bountyId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryCloseTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.close_tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Close and payout a tip.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  The tip identified by `hash` must have finished its countdown period.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  # <weight>
     *  - `O(T)`
     *  - One storage retrieval (codec `O(T)`) and two removals.
     *  - Up to three balance operations.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Treasury.close_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     *  Close and payout a tip.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  The tip identified by `hash` must have finished its countdown period.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  # <weight>
     *  - `O(T)`
     *  - One storage retrieval (codec `O(T)`) and two removals.
     *  - Up to three balance operations.
     *  # </weight>
     */
    get asV31(): {hash: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryExtendBountyExpiryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.extend_bounty_expiry')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Extend the expiry time of an active bounty.
     * 
     *  The dispatch origin for this call must be the curator of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to extend.
     *  - `remark`: additional information.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.extend_bounty_expiry') === '710d6b76ffcee45bd9bffc1f299fa0b621450769559963379fa259c0f427f1bb'
    }

    /**
     *  Extend the expiry time of an active bounty.
     * 
     *  The dispatch origin for this call must be the curator of this bounty.
     * 
     *  - `bounty_id`: Bounty ID to extend.
     *  - `remark`: additional information.
     */
    get asV41(): {bountyId: number, remark: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryProposeBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.propose_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Propose a new bounty.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     *  or slashed when rejected.
     * 
     *  - `curator`: The curator account whom will manage this bounty.
     *  - `fee`: The curator fee.
     *  - `value`: The total payment amount of this bounty, curator fee included.
     *  - `description`: The description of this bounty.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.propose_bounty') === '6a012b4069a991972d0d3268cb20dfba3163919c325c7ebbe980b2dc15f1b1f5'
    }

    /**
     *  Propose a new bounty.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     *  or slashed when rejected.
     * 
     *  - `curator`: The curator account whom will manage this bounty.
     *  - `fee`: The curator fee.
     *  - `value`: The total payment amount of this bounty, curator fee included.
     *  - `description`: The description of this bounty.
     */
    get asV41(): {value: bigint, description: Uint8Array} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryProposeCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.propose_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Assign a curator to a funded bounty.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.propose_curator') === '9b44376df14c5a9a24820a394a222ae068b71418d8f4b0e17de007d24a5223ba'
    }

    /**
     *  Assign a curator to a funded bounty.
     * 
     *  May only be called from `T::ApproveOrigin`.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get asV41(): {bountyId: number, curator: v41.LookupSource, fee: bigint} {
        assert(this.isV41)
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
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change, one extra DB entry.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Treasury.propose_spend') === '716689a9bf600e2a2fed633501a80e9ae7082f3d19352663230c0a56fa8652c3'
    }

    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change, one extra DB entry.
     *  # </weight>
     */
    get asV31(): {value: bigint, beneficiary: v31.LookupSource} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
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
    get isV45(): boolean {
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
    get asV45(): {value: bigint, beneficiary: v45.LookupSource} {
        assert(this.isV45)
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
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB clear.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Treasury.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     *  Reject a proposed spend. The original deposit will be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB clear.
     *  # </weight>
     */
    get asV31(): {proposalId: number} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryReportAwesomeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.report_awesome')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `TipReportDepositPerByte` for each byte in `reason`.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - `O(R)` where `R` length of `reason`.
     *  - One balance operation.
     *  - One storage mutation (codec `O(R)`).
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Treasury.report_awesome') === '5f39cdb6a1bab5505c2717a3d34b1ad66c35bb6aca421780ce60b4e9017fe886'
    }

    /**
     *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     *  `TipReportDepositPerByte` for each byte in `reason`.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - `O(R)` where `R` length of `reason`.
     *  - One balance operation.
     *  - One storage mutation (codec `O(R)`).
     *  - One event.
     *  # </weight>
     */
    get asV31(): {reason: Uint8Array, who: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryRetractTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.retract_tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
     * 
     *  If successful, the original deposit will be unreserved.
     * 
     *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
     *  must have been reported by the signing account through `report_awesome` (and not
     *  through `tip_new`).
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  Emits `TipRetracted` if successful.
     * 
     *  # <weight>
     *  - `O(T)`
     *  - One balance operation.
     *  - Two storage removals (one read, codec `O(T)`).
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Treasury.retract_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
     * 
     *  If successful, the original deposit will be unreserved.
     * 
     *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
     *  must have been reported by the signing account through `report_awesome` (and not
     *  through `tip_new`).
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     *  Emits `TipRetracted` if successful.
     * 
     *  # <weight>
     *  - `O(T)`
     *  - One balance operation.
     *  - Two storage removals (one read, codec `O(T)`).
     *  - One event.
     *  # </weight>
     */
    get asV31(): {hash: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - `O(T)`
     *  - One storage mutation (codec `O(T)`), one storage read `O(1)`.
     *  - Up to one event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Treasury.tip') === '2111563b3ac5541651b53f665a96e00e00bd7257eee2b159ec7f437d63c69299'
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - `O(T)`
     *  - One storage mutation (codec `O(T)`), one storage read `O(1)`.
     *  - Up to one event.
     *  # </weight>
     */
    get asV31(): {hash: Uint8Array, tipValue: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.tip') === 'f3795cdab18c292963e0e30ece37a15a2900030efc315a8e3f28ba886b2b9f58'
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    get asV41(): {hash: Uint8Array, tipValue: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryTipNewCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.tip_new')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Give a tip for something new; no finder's fee will be taken.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - `O(R + T)` where `R` length of `reason`, `T` is the number of tippers. `T` is
     *    naturally capped as a membership set, `R` is limited through transaction-size.
     *  - Two storage insertions (codecs `O(R)`, `O(T)`), one read `O(1)`.
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Treasury.tip_new') === 'e800a1887710a34a2c35db4f1ff41ff8bb8b71f5bb060338930197784c9a17b3'
    }

    /**
     *  Give a tip for something new; no finder's fee will be taken.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - `O(R + T)` where `R` length of `reason`, `T` is the number of tippers. `T` is
     *    naturally capped as a membership set, `R` is limited through transaction-size.
     *  - Two storage insertions (codecs `O(R)`, `O(T)`), one read `O(1)`.
     *  - One event.
     *  # </weight>
     */
    get asV31(): {reason: Uint8Array, who: Uint8Array, tipValue: bigint} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Give a tip for something new; no finder's fee will be taken.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *    - `O(T)`: decoding `Tipper` vec of length `T`
     *      `T` is charged as upper bound given by `ContainsLengthBound`.
     *      The actual cost depends on the implementation of `T::Tippers`.
     *    - `O(R)`: hashing and encoding of reason of length `R`
     *  - DbReads: `Tippers`, `Reasons`
     *  - DbWrites: `Reasons`, `Tips`
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.tip_new') === '367b1dcdffb32d8c4b26e342e9b515c65f2589dec81f4a3f6f336faaa7e127ac'
    }

    /**
     *  Give a tip for something new; no finder's fee will be taken.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *    a UTF-8-encoded URL.
     *  - `who`: The account which should be credited for the tip.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `NewTip` if successful.
     * 
     *  # <weight>
     *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *    - `O(T)`: decoding `Tipper` vec of length `T`
     *      `T` is charged as upper bound given by `ContainsLengthBound`.
     *      The actual cost depends on the implementation of `T::Tippers`.
     *    - `O(R)`: hashing and encoding of reason of length `R`
     *  - DbReads: `Tippers`, `Reasons`
     *  - DbWrites: `Reasons`, `Tips`
     *  # </weight>
     */
    get asV41(): {reason: Uint8Array, who: Uint8Array, tipValue: bigint} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryUnassignCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.unassign_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Unassign curator from a bounty.
     * 
     *  This function can only be called by the `RejectOrigin` a signed origin.
     * 
     *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
     *  or inactive. As a result, we will slash the curator when possible.
     * 
     *  If the origin is the curator, we take this as a sign they are unable to do their job and
     *  they willingly give up. We could slash them, but for now we allow them to recover their
     *  deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     *  anyone in the community to call out that a curator is not doing their due diligence, and
     *  we should pick a new curator. In this case the curator should also be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Treasury.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Unassign curator from a bounty.
     * 
     *  This function can only be called by the `RejectOrigin` a signed origin.
     * 
     *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
     *  or inactive. As a result, we will slash the curator when possible.
     * 
     *  If the origin is the curator, we take this as a sign they are unable to do their job and
     *  they willingly give up. We could slash them, but for now we allow them to recover their
     *  deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     *  anyone in the community to call out that a curator is not doing their due diligence, and
     *  we should pick a new curator. In this case the curator should also be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get asV41(): {bountyId: number} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryRewardSetCurrentPayoutCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TreasuryReward.set_current_payout')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Sets the fixed treasury payout per minting interval.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('TreasuryReward.set_current_payout') === '3c23dfe87f45bd16cf4167c49c872848697f241972f3a95eeecea50f5a158660'
    }

    /**
     *  Sets the fixed treasury payout per minting interval.
     */
    get asV38(): {payout: bigint} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryRewardSetMintingIntervalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TreasuryReward.set_minting_interval')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Sets the treasury minting interval.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('TreasuryReward.set_minting_interval') === '65c61745efbd26ec5b66333f640c02b5e71d0a165dd2d7ae5df1f1b441d5acd2'
    }

    /**
     *  Sets the treasury minting interval.
     */
    get asV38(): {interval: number} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityApproveAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.approve_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `MultisigDepositBase + threshold * MultisigDepositFactor`.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Utility.approve_as_multi') === '3c68db997397f75e3ae5e9c2d20a1518a8d503aa31785d4ef6db71bf1ecb0136'
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `MultisigDepositBase + threshold * MultisigDepositFactor`.
     *  # </weight>
     */
    get asV31(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v31.Timepoint | undefined), callHash: Uint8Array} {
        assert(this.isV31)
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
    get isV41(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'ae9d26c1f3f335ea9296d5eadc7d4e4cda1f34e54571ccdc01890fd1118879d2'
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
    get asV41(): {index: number, call: v41.Type_43} {
        assert(this.isV41)
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
    get isV45(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'c9ec8bd559059388fe15520f98f7497700eb874dd9ebb7d0443a3a9aff20abda'
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
    get asV45(): {index: number, call: v45.Type_47} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '66f63494cf07aa51f67ae240e7a9d9d610fcb4fca02cb2b38a22d2553d2a7318'
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
    get asV53(): {index: number, call: v53.Call} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityAsLimitedSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.as_limited_sub')
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
     *  the call restrictions to apply to any sub-accounts), then use `as_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Utility.as_limited_sub') === '9ac0502d0b71a09407c7a60a76dc5e493532569cc708e6bc47c586c5168bae49'
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    get asV38(): {index: number, call: v38.Type_43} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  If there are enough, then dispatch the call.
     * 
     *  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call`: The call to be executed.
     * 
     *  NOTE: Unless this is the final approval, you will generally want to use
     *  `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *  on success, result is `Ok` and the result from the interior call, if it was executed,
     *  may be found in the deposited `MultisigExecuted` event.
     * 
     *  # <weight>
     *  - `O(S + Z + Call)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - The weight of the `call`.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `MultisigDepositBase + threshold * MultisigDepositFactor`.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Utility.as_multi') === 'f58307d7f925e7f5b0acebee20a35d66d49e1304ed130e13fbb2b37a3317b1e8'
    }

    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  If there are enough, then dispatch the call.
     * 
     *  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call`: The call to be executed.
     * 
     *  NOTE: Unless this is the final approval, you will generally want to use
     *  `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *  on success, result is `Ok` and the result from the interior call, if it was executed,
     *  may be found in the deposited `MultisigExecuted` event.
     * 
     *  # <weight>
     *  - `O(S + Z + Call)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - The weight of the `call`.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `MultisigDepositBase + threshold * MultisigDepositFactor`.
     *  # </weight>
     */
    get asV31(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v31.Timepoint | undefined), call: v31.Type_41} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityAsSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.as_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - The weight of the `call`.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Utility.as_sub') === 'a452251cabb79055917e3bd309b48f291c152bf7b898a0596707a76ce0c06740'
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - The weight of the `call`.
     *  # </weight>
     */
    get asV31(): {index: number, call: v31.Type_41} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is honored (i.e. because
     *  you expect `proxy` to have been used prior in the call stack and you want it to apply to
     *  any sub-accounts), then use `as_limited_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Utility.as_sub') === '9ac0502d0b71a09407c7a60a76dc5e493532569cc708e6bc47c586c5168bae49'
    }

    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is honored (i.e. because
     *  you expect `proxy` to have been used prior in the call stack and you want it to apply to
     *  any sub-accounts), then use `as_limited_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    get asV38(): {index: number, call: v38.Type_43} {
        assert(this.isV38)
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
     *  This will execute until the first one fails and then stop.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  # <weight>
     *  - The sum of the weights of the `calls`.
     *  - One event.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Utility.batch') === '08c57906215c1b69ef06f7f7c3e33e32880bb46f82d368493479a05be984ee86'
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  This will execute until the first one fails and then stop.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  # <weight>
     *  - The sum of the weights of the `calls`.
     *  - One event.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get asV31(): {calls: v31.Type_41[]} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Utility.batch') === '43450b12fad7932eb0fc441c07f2d1726d2763faf6ab15132812a8d14a99cb83'
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get asV38(): {calls: v38.Type_43[]} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get isV41(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'e038d2b7149bf3114bc61a2d63aaa88fc9acebb2600e03180402182394124393'
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    get asV41(): {calls: v41.Type_43[]} {
        assert(this.isV41)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
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
    get isV45(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'ceaf220ef2bbf8c168e3a0cea3b65646c390b956fd32bde899bda8d789cff636'
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
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
    get asV45(): {calls: v45.Type_47[]} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Utility.batch') === '23d1bde4e13904e2e8d79b7c1b58bde11762721a83bd0c7e30cdc47953b2bea6'
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
    get asV53(): {calls: v53.Call[]} {
        assert(this.isV53)
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
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get isV45(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'ceaf220ef2bbf8c168e3a0cea3b65646c390b956fd32bde899bda8d789cff636'
    }

    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get asV45(): {calls: v45.Type_47[]} {
        assert(this.isV45)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '23d1bde4e13904e2e8d79b7c1b58bde11762721a83bd0c7e30cdc47953b2bea6'
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
    get asV53(): {calls: v53.Call[]} {
        assert(this.isV53)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityCancelAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.cancel_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *  for this operation will be unreserved on success.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
     *  transaction for this dispatch.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - One event.
     *  - I/O: 1 read `O(S)`, one remove.
     *  - Storage: removes one item.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Utility.cancel_as_multi') === '4ccc75a4f739c659f177e3df98fba2ea59ddade74c4ebccd51b2fc4c52e923af'
    }

    /**
     *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *  for this operation will be unreserved on success.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
     *  transaction for this dispatch.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - One event.
     *  - I/O: 1 read `O(S)`, one remove.
     *  - Storage: removes one item.
     *  # </weight>
     */
    get asV31(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v31.Timepoint, callHash: Uint8Array} {
        assert(this.isV31)
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
    get isV53(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'c875604a6f8492bca09dacc5600c811928bb1f6c2553c95e03f62a0343aa2ee2'
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
    get asV53(): {asOrigin: v53.OriginCaller, call: v53.Call} {
        assert(this.isV53)
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
     *  - Benchmark: 100.3 + .365 * l µs (min square analysis)
     *  - Using 100 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Vesting.force_vested_transfer') === '9c020f7718f867005d37b35e59b548ca36a75cf50c60384e372080d8022b9031'
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
     *  - Benchmark: 100.3 + .365 * l µs (min square analysis)
     *  - Using 100 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.
     *  # </weight>
     */
    get asV38(): {source: v38.LookupSource, target: v38.LookupSource, schedule: v38.VestingInfo} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
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
    get isV45(): boolean {
        return this._chain.getCallHash('Vesting.force_vested_transfer') === '554d1f39e9f4e4663daedd61474fa370dcb45b83a4deb1389e96844935fd266e'
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
    get asV45(): {source: v45.LookupSource, target: v45.LookupSource, schedule: v45.VestingInfo} {
        assert(this.isV45)
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
    get isV53(): boolean {
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
    get asV53(): {schedule1Index: number, schedule2Index: number} {
        assert(this.isV53)
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
     *  locked under this module.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One balance-lock operation.
     *  - One storage read (codec `O(1)`) and up to one removal.
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Vesting.vest') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Unlock any vested funds of the sender account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have funds still
     *  locked under this module.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One balance-lock operation.
     *  - One storage read (codec `O(1)`) and up to one removal.
     *  - One event.
     *  # </weight>
     */
    get asV31(): null {
        assert(this.isV31)
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
     *  locked under this module.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - Up to one account lookup.
     *  - One balance-lock operation.
     *  - One storage read (codec `O(1)`) and up to one removal.
     *  - One event.
     *  # </weight>
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Vesting.vest_other') === 'cd19c54875d335772c471b877903ed3a260a7316fd1d201b12e013ae0a7dfe2d'
    }

    /**
     *  Unlock any vested funds of a `target` account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account whose vested funds should be unlocked. Must have funds still
     *  locked under this module.
     * 
     *  Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - Up to one account lookup.
     *  - One balance-lock operation.
     *  - One storage read (codec `O(1)`) and up to one removal.
     *  - One event.
     *  # </weight>
     */
    get asV31(): {target: v31.LookupSource} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Unlock any vested funds of a `target` account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account whose vested funds should be unlocked. Must have funds still
     *  locked under this module.
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
    get isV45(): boolean {
        return this._chain.getCallHash('Vesting.vest_other') === 'b473bcbba83335e310f2f681307dcf6b16b8d79ec99a4fb2202c34bed7de3b65'
    }

    /**
     *  Unlock any vested funds of a `target` account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `target`: The account whose vested funds should be unlocked. Must have funds still
     *  locked under this module.
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
    get asV45(): {target: v45.LookupSource} {
        assert(this.isV45)
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
     *  - Benchmark: 100.3 + .365 * l µs (min square analysis)
     *  - Using 100 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.
     *  # </weight>
     */
    get isV38(): boolean {
        return this._chain.getCallHash('Vesting.vested_transfer') === '55a0b3ea2745f373a9a86f2893ebc2b96b15637aefeb0e224317d00a111556f3'
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
     *  - Benchmark: 100.3 + .365 * l µs (min square analysis)
     *  - Using 100 µs fixed. Assuming less than 50 locks on any user, else we may want factor in number of locks.
     *  # </weight>
     */
    get asV38(): {target: v38.LookupSource, schedule: v38.VestingInfo} {
        assert(this.isV38)
        return this._chain.decodeCall(this.call)
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
    get isV45(): boolean {
        return this._chain.getCallHash('Vesting.vested_transfer') === '0f6872962312eb70cc69daaab6af7934f93006a324730cd95bfebe233c99e338'
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
    get asV45(): {target: v45.LookupSource, schedule: v45.VestingInfo} {
        assert(this.isV45)
        return this._chain.decodeCall(this.call)
    }
}

export class VotingCommitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Voting.commit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  A function for commit-reveal voting schemes that adds a vote commitment.
     * 
     *  A vote commitment is formatted using the native hash function. There
     *  are currently no cryptoeconomic punishments against not revealing the
     *  commitment.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Voting.commit') === '534015ca96d1cc35a321ceea5563ffb6a139e797dc498df7e0cdb5c98526acfe'
    }

    /**
     *  A function for commit-reveal voting schemes that adds a vote commitment.
     * 
     *  A vote commitment is formatted using the native hash function. There
     *  are currently no cryptoeconomic punishments against not revealing the
     *  commitment.
     */
    get asV31(): {voteId: bigint, commit: Uint8Array} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}

export class VotingRevealCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Voting.reveal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  A function that reveals a vote commitment or serves as the general vote function.
     * 
     *  There are currently no cryptoeconomic incentives for revealing commited votes.
     */
    get isV31(): boolean {
        return this._chain.getCallHash('Voting.reveal') === 'cce271c3764cc12f540e48deec03b3e2849496801952871cb11f41bae783f4da'
    }

    /**
     *  A function that reveals a vote commitment or serves as the general vote function.
     * 
     *  There are currently no cryptoeconomic incentives for revealing commited votes.
     */
    get asV31(): {voteId: bigint, vote: Uint8Array[], secret: (Uint8Array | undefined)} {
        assert(this.isV31)
        return this._chain.decodeCall(this.call)
    }
}
