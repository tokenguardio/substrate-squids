import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v1 from './v1'
import * as v3 from './v3'
import * as v4 from './v4'
import * as v9 from './v9'
import * as v12 from './v12'
import * as v13 from './v13'
import * as v15 from './v15'
import * as v16 from './v16'
import * as v17 from './v17'
import * as v23 from './v23'
import * as v30 from './v30'
import * as v33 from './v33'
import * as v43 from './v43'
import * as v49 from './v49'
import * as v52 from './v52'
import * as v55 from './v55'
import * as v61 from './v61'
import * as v64 from './v64'
import * as v66 from './v66'
import * as v68 from './v68'
import * as v70 from './v70'
import * as v72 from './v72'
import * as v74 from './v74'
import * as v77 from './v77'
import * as v79 from './v79'
import * as v82 from './v82'

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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.approve_transfer') === 'cd1332fd5d322aa53ad58f96ca5dd705919edd52a5a930580fb8de3fa3cd13b2'
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
    get asV15(): {id: bigint, delegate: v15.MultiAddress, amount: bigint} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsBlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.block')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `id`.
     * 
     * - `id`: The identifier of the account's asset.
     * - `who`: The account to be unblocked.
     * 
     * Emits `Blocked`.
     * 
     * Weight: `O(1)`
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.block') === 'eaa070e127bbfeb999f9c6ca9bb7235f5cde45898eca8f758cb357c045995814'
    }

    /**
     * Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `id`.
     * 
     * - `id`: The identifier of the account's asset.
     * - `who`: The account to be unblocked.
     * 
     * Emits `Blocked`.
     * 
     * Weight: `O(1)`
     */
    get asV64(): {id: bigint, who: v64.MultiAddress} {
        assert(this.isV64)
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
     * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
     * 
     * Origin must be Signed and the sender should be the Manager of the asset `id`.
     * 
     * Bails with `NoAccount` if the `who` is already dead.
     * 
     * - `id`: The identifier of the asset to have some amount burned.
     * - `who`: The account to be debited from.
     * - `amount`: The maximum amount by which `who`'s balance should be reduced.
     * 
     * Emits `Burned` with the actual amount burned. If this takes the balance to below the
     * minimum for the asset, then the amount burned is increased to take it to zero.
     * 
     * Weight: `O(1)`
     * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
     */
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.burn') === '63e61a3a10a697ab25286cfc93d9d1f906d72fc1b8398260a78d527980753607'
    }

    /**
     * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
     * 
     * Origin must be Signed and the sender should be the Manager of the asset `id`.
     * 
     * Bails with `NoAccount` if the `who` is already dead.
     * 
     * - `id`: The identifier of the asset to have some amount burned.
     * - `who`: The account to be debited from.
     * - `amount`: The maximum amount by which `who`'s balance should be reduced.
     * 
     * Emits `Burned` with the actual amount burned. If this takes the balance to below the
     * minimum for the asset, then the amount burned is increased to take it to zero.
     * 
     * Weight: `O(1)`
     * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
     */
    get asV15(): {id: bigint, who: v15.MultiAddress, amount: bigint} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.cancel_approval') === '8eb2efcdbea2abea04d5ba437f461543e93dc858446b70c484ec174c5bf1fe83'
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
    get asV15(): {id: bigint, delegate: v15.MultiAddress} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.clear_metadata') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
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
    get asV15(): {id: bigint} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.create') === 'fd3d7d7bc6ca159558d8a0216565f73258b3beebc8e4533a1e2ee733d7dabdb4'
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
    get asV15(): {id: bigint, admin: v15.MultiAddress, minBalance: bigint} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.destroy') === '9a8a5a90459d4fa03bad7d8dc11eed0c6acdd779939cd82a16cebc1973a19f8c'
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
    get asV15(): {id: bigint, witness: v15.DestroyWitness} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsDestroyAccountsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.destroy_accounts')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Destroy all accounts associated with a given asset.
     * 
     * `destroy_accounts` should only be called after `start_destroy` has been called, and the
     * asset is in a `Destroying` state.
     * 
     * Due to weight restrictions, this function may need to be called multiple times to fully
     * destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
     * 
     * - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *   asset.
     * 
     * Each call emits the `Event::DestroyedAccounts` event.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('Assets.destroy_accounts') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
    }

    /**
     * Destroy all accounts associated with a given asset.
     * 
     * `destroy_accounts` should only be called after `start_destroy` has been called, and the
     * asset is in a `Destroying` state.
     * 
     * Due to weight restrictions, this function may need to be called multiple times to fully
     * destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
     * 
     * - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *   asset.
     * 
     * Each call emits the `Event::DestroyedAccounts` event.
     */
    get asV52(): {id: bigint} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsDestroyApprovalsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.destroy_approvals')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
     * 
     * `destroy_approvals` should only be called after `start_destroy` has been called, and the
     * asset is in a `Destroying` state.
     * 
     * Due to weight restrictions, this function may need to be called multiple times to fully
     * destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
     * 
     * - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *   asset.
     * 
     * Each call emits the `Event::DestroyedApprovals` event.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('Assets.destroy_approvals') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
    }

    /**
     * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
     * 
     * `destroy_approvals` should only be called after `start_destroy` has been called, and the
     * asset is in a `Destroying` state.
     * 
     * Due to weight restrictions, this function may need to be called multiple times to fully
     * destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
     * 
     * - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *   asset.
     * 
     * Each call emits the `Event::DestroyedApprovals` event.
     */
    get asV52(): {id: bigint} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsFinishDestroyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.finish_destroy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Complete destroying asset and unreserve currency.
     * 
     * `finish_destroy` should only be called after `start_destroy` has been called, and the
     * asset is in a `Destroying` state. All accounts or approvals should be destroyed before
     * hand.
     * 
     * - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *   asset.
     * 
     * Each successful call emits the `Event::Destroyed` event.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('Assets.finish_destroy') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
    }

    /**
     * Complete destroying asset and unreserve currency.
     * 
     * `finish_destroy` should only be called after `start_destroy` has been called, and the
     * asset is in a `Destroying` state. All accounts or approvals should be destroyed before
     * hand.
     * 
     * - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *   asset.
     * 
     * Each successful call emits the `Event::Destroyed` event.
     */
    get asV52(): {id: bigint} {
        assert(this.isV52)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.force_asset_status') === '90a620e3ec2a293a5cd5d7f38de8b0619225567afddbd5beb0cd348a7cb02677'
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
    get asV15(): {id: bigint, owner: v15.MultiAddress, issuer: v15.MultiAddress, admin: v15.MultiAddress, freezer: v15.MultiAddress, minBalance: bigint, isSufficient: boolean, isFrozen: boolean} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.force_cancel_approval') === '1992cc09c994fe3122c964d5a5de53d79ddda838c125c948d96eee4bdd4b1123'
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
    get asV15(): {id: bigint, owner: v15.MultiAddress, delegate: v15.MultiAddress} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.force_clear_metadata') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
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
    get asV15(): {id: bigint} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.force_create') === 'bb56dd1346b44d085570fada86d0c64c13eb48c829162f340c3f483d80f68bc6'
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
    get asV15(): {id: bigint, owner: v15.MultiAddress, isSufficient: boolean, minBalance: bigint} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.force_set_metadata') === '5197c4dc1b19808caa5eb6363c6d281dc29fc658a2124f3030ba4e8886e36135'
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
    get asV15(): {id: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
        assert(this.isV15)
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
     * Move some assets from one account to another.
     * 
     * Origin must be Signed and the sender should be the Admin of the asset `id`.
     * 
     * - `id`: The identifier of the asset to have some amount transferred.
     * - `source`: The account to be debited.
     * - `dest`: The account to be credited.
     * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
     * `dest`'s balance increased. The amount actually transferred may be slightly greater in
     * the case that the transfer would otherwise take the `source` balance above zero but
     * below the minimum balance. Must be greater than zero.
     * 
     * Emits `Transferred` with the actual amount transferred. If this takes the source balance
     * to below the minimum for the asset, then the amount transferred is increased to take it
     * to zero.
     * 
     * Weight: `O(1)`
     * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
     * `dest`.
     */
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.force_transfer') === 'cc18377e00594b5c7f60c687bc3a7c5c9cffb3bbf3680370b405ee53323763cf'
    }

    /**
     * Move some assets from one account to another.
     * 
     * Origin must be Signed and the sender should be the Admin of the asset `id`.
     * 
     * - `id`: The identifier of the asset to have some amount transferred.
     * - `source`: The account to be debited.
     * - `dest`: The account to be credited.
     * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
     * `dest`'s balance increased. The amount actually transferred may be slightly greater in
     * the case that the transfer would otherwise take the `source` balance above zero but
     * below the minimum balance. Must be greater than zero.
     * 
     * Emits `Transferred` with the actual amount transferred. If this takes the source balance
     * to below the minimum for the asset, then the amount transferred is increased to take it
     * to zero.
     * 
     * Weight: `O(1)`
     * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
     * `dest`.
     */
    get asV15(): {id: bigint, source: v15.MultiAddress, dest: v15.MultiAddress, amount: bigint} {
        assert(this.isV15)
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
     * Disallow further unprivileged transfers from an account.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be frozen.
     * - `who`: The account to be frozen.
     * 
     * Emits `Frozen`.
     * 
     * Weight: `O(1)`
     */
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.freeze') === 'eaa070e127bbfeb999f9c6ca9bb7235f5cde45898eca8f758cb357c045995814'
    }

    /**
     * Disallow further unprivileged transfers from an account.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be frozen.
     * - `who`: The account to be frozen.
     * 
     * Emits `Frozen`.
     * 
     * Weight: `O(1)`
     */
    get asV15(): {id: bigint, who: v15.MultiAddress} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.freeze_asset') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
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
    get asV15(): {id: bigint} {
        assert(this.isV15)
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
     * Mint assets of a particular class.
     * 
     * The origin must be Signed and the sender must be the Issuer of the asset `id`.
     * 
     * - `id`: The identifier of the asset to have some amount minted.
     * - `beneficiary`: The account to be credited with the minted assets.
     * - `amount`: The amount of the asset to be minted.
     * 
     * Emits `Issued` event when successful.
     * 
     * Weight: `O(1)`
     * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
     */
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.mint') === 'dcf7b66cecdcf054714bda4963a040d209690ed2329b1dbd649de576809f43b4'
    }

    /**
     * Mint assets of a particular class.
     * 
     * The origin must be Signed and the sender must be the Issuer of the asset `id`.
     * 
     * - `id`: The identifier of the asset to have some amount minted.
     * - `beneficiary`: The account to be credited with the minted assets.
     * - `amount`: The amount of the asset to be minted.
     * 
     * Emits `Issued` event when successful.
     * 
     * Weight: `O(1)`
     * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
     */
    get asV15(): {id: bigint, beneficiary: v15.MultiAddress, amount: bigint} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.refund') === 'cfce64e36c421100db147253f1087292a9478daf8e8c9b54faadb27f9f81fe3d'
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
    get asV15(): {id: bigint, allowBurn: boolean} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsRefundOtherCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.refund_other')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Return the deposit (if any) of a target asset account. Useful if you are the depositor.
     * 
     * The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
     * order to burn a non-zero balance of the asset, the caller must be the account and should
     * use `refund`.
     * 
     * - `id`: The identifier of the asset for the account holding a deposit.
     * - `who`: The account to refund.
     * 
     * Emits `Refunded` event when successful.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.refund_other') === 'eaa070e127bbfeb999f9c6ca9bb7235f5cde45898eca8f758cb357c045995814'
    }

    /**
     * Return the deposit (if any) of a target asset account. Useful if you are the depositor.
     * 
     * The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
     * order to burn a non-zero balance of the asset, the caller must be the account and should
     * use `refund`.
     * 
     * - `id`: The identifier of the asset for the account holding a deposit.
     * - `who`: The account to refund.
     * 
     * Emits `Refunded` event when successful.
     */
    get asV64(): {id: bigint, who: v64.MultiAddress} {
        assert(this.isV64)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.set_metadata') === 'b142260ca2687dcfda31b9abcd465d84b02d11acdebd9fefa543ea7ca86ac3ec'
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
    get asV15(): {id: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsSetMinBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.set_min_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the minimum balance of an asset.
     * 
     * Only works if there aren't any accounts that are holding the asset or if
     * the new value of `min_balance` is less than the old one.
     * 
     * Origin must be Signed and the sender has to be the Owner of the
     * asset `id`.
     * 
     * - `id`: The identifier of the asset.
     * - `min_balance`: The new value of `min_balance`.
     * 
     * Emits `AssetMinBalanceChanged` event when successful.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.set_min_balance') === '1bff594db433ee881770703a3c8bff487f4b122e0eacc8a2c74997f45116b130'
    }

    /**
     * Sets the minimum balance of an asset.
     * 
     * Only works if there aren't any accounts that are holding the asset or if
     * the new value of `min_balance` is less than the old one.
     * 
     * Origin must be Signed and the sender has to be the Owner of the
     * asset `id`.
     * 
     * - `id`: The identifier of the asset.
     * - `min_balance`: The new value of `min_balance`.
     * 
     * Emits `AssetMinBalanceChanged` event when successful.
     */
    get asV64(): {id: bigint, minBalance: bigint} {
        assert(this.isV64)
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
     * Change the Issuer, Admin and Freezer of an asset.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be frozen.
     * - `issuer`: The new Issuer of this asset.
     * - `admin`: The new Admin of this asset.
     * - `freezer`: The new Freezer of this asset.
     * 
     * Emits `TeamChanged`.
     * 
     * Weight: `O(1)`
     */
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.set_team') === '535ec7d17ca9cce7d8c9f63cf0afd6878faa48589b8359118e8a5fca3d3100e7'
    }

    /**
     * Change the Issuer, Admin and Freezer of an asset.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be frozen.
     * - `issuer`: The new Issuer of this asset.
     * - `admin`: The new Admin of this asset.
     * - `freezer`: The new Freezer of this asset.
     * 
     * Emits `TeamChanged`.
     * 
     * Weight: `O(1)`
     */
    get asV15(): {id: bigint, issuer: v15.MultiAddress, admin: v15.MultiAddress, freezer: v15.MultiAddress} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsStartDestroyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.start_destroy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Start the process of destroying a fungible asset class.
     * 
     * `start_destroy` is the first in a series of extrinsics that should be called, to allow
     * destruction of an asset class.
     * 
     * The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
     * 
     * - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *   asset.
     * 
     * The asset class must be frozen before calling `start_destroy`.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('Assets.start_destroy') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
    }

    /**
     * Start the process of destroying a fungible asset class.
     * 
     * `start_destroy` is the first in a series of extrinsics that should be called, to allow
     * destruction of an asset class.
     * 
     * The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
     * 
     * - `id`: The identifier of the asset to be destroyed. This must identify an existing
     *   asset.
     * 
     * The asset class must be frozen before calling `start_destroy`.
     */
    get asV52(): {id: bigint} {
        assert(this.isV52)
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
     * Allow unprivileged transfers from an account again.
     * 
     * Origin must be Signed and the sender should be the Admin of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be frozen.
     * - `who`: The account to be unfrozen.
     * 
     * Emits `Thawed`.
     * 
     * Weight: `O(1)`
     */
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.thaw') === 'eaa070e127bbfeb999f9c6ca9bb7235f5cde45898eca8f758cb357c045995814'
    }

    /**
     * Allow unprivileged transfers from an account again.
     * 
     * Origin must be Signed and the sender should be the Admin of the asset `id`.
     * 
     * - `id`: The identifier of the asset to be frozen.
     * - `who`: The account to be unfrozen.
     * 
     * Emits `Thawed`.
     * 
     * Weight: `O(1)`
     */
    get asV15(): {id: bigint, who: v15.MultiAddress} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.thaw_asset') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
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
    get asV15(): {id: bigint} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.touch') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
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
    get asV15(): {id: bigint} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetsTouchOtherCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Assets.touch_other')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create an asset account for `who`.
     * 
     * A deposit will be taken from the signer account.
     * 
     * - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
     *   must have sufficient funds for a deposit to be taken.
     * - `id`: The identifier of the asset for the account to be created.
     * - `who`: The account to be created.
     * 
     * Emits `Touched` event when successful.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Assets.touch_other') === 'eaa070e127bbfeb999f9c6ca9bb7235f5cde45898eca8f758cb357c045995814'
    }

    /**
     * Create an asset account for `who`.
     * 
     * A deposit will be taken from the signer account.
     * 
     * - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
     *   must have sufficient funds for a deposit to be taken.
     * - `id`: The identifier of the asset for the account to be created.
     * - `who`: The account to be created.
     * 
     * Emits `Touched` event when successful.
     */
    get asV64(): {id: bigint, who: v64.MultiAddress} {
        assert(this.isV64)
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
     * Move some assets from the sender account to another.
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.transfer') === '15d3ff016b8caf2dc391ea7f21e333708b7a2493c1e08905f1592e84c0abd6fd'
    }

    /**
     * Move some assets from the sender account to another.
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
    get asV15(): {id: bigint, target: v15.MultiAddress, amount: bigint} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.transfer_approved') === '6be5bb605804720aad54c7e779258c9b2ff5a162980e3d5568d523cb8c068550'
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
    get asV15(): {id: bigint, owner: v15.MultiAddress, destination: v15.MultiAddress, amount: bigint} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.transfer_keep_alive') === '15d3ff016b8caf2dc391ea7f21e333708b7a2493c1e08905f1592e84c0abd6fd'
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
    get asV15(): {id: bigint, target: v15.MultiAddress, amount: bigint} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Assets.transfer_ownership') === '5d594c1676c6bd42c154b97fe36f514cc6b4b0d2e5a55e1fee83974b645e8fb4'
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
    get asV15(): {id: bigint, owner: v15.MultiAddress} {
        assert(this.isV15)
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
     * Provide a set of uncles.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === '491502deec691ea043fa56fc39b50b58deab8a6411c511016c06289ee5867611'
    }

    /**
     * Provide a set of uncles.
     */
    get asV1(): {newUncles: v1.Header[]} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Provide a set of uncles.
     */
    get isV3(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
    }

    /**
     * Provide a set of uncles.
     */
    get asV3(): {newUncles: v3.Header[]} {
        assert(this.isV3)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_set_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the regular balance of a given account.
     * 
     * The dispatch origin for this call is `root`.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Balances.force_set_balance') === 'd0f1dc28aeba8805f92a7e983d0fba2621912dc1665264dd9c38cd3c0c912737'
    }

    /**
     * Set the regular balance of a given account.
     * 
     * The dispatch origin for this call is `root`.
     */
    get asV64(): {who: v64.MultiAddress, newFree: bigint} {
        assert(this.isV64)
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
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get isV1(): boolean {
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
    get asV1(): {source: v1.MultiAddress, dest: v1.MultiAddress, value: bigint} {
        assert(this.isV1)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asV1(): {who: v1.MultiAddress, amount: bigint} {
        assert(this.isV1)
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
    get isV1(): boolean {
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
    get asV1(): {who: v1.MultiAddress, newFree: bigint, newReserved: bigint} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesSetBalanceDeprecatedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.set_balance_deprecated')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the regular balance of a given account; it also takes a reserved balance but this
     * must be the same as the account's current reserved balance.
     * 
     * The dispatch origin for this call is `root`.
     * 
     * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Balances.set_balance_deprecated') === 'cd8eaf83a985e64a94900c5c58bbc2bbd20e03f5d571cf6065020f1a4281ff19'
    }

    /**
     * Set the regular balance of a given account; it also takes a reserved balance but this
     * must be the same as the account's current reserved balance.
     * 
     * The dispatch origin for this call is `root`.
     * 
     * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
     */
    get asV64(): {who: v64.MultiAddress, newFree: bigint, oldReserved: bigint} {
        assert(this.isV64)
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
    get isV1(): boolean {
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
    get asV1(): {dest: v1.MultiAddress, value: bigint} {
        assert(this.isV1)
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
    get isV1(): boolean {
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
    get asV1(): {dest: v1.MultiAddress, keepAlive: boolean} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferAllowDeathCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_allow_death')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Balances.transfer_allow_death') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     */
    get asV64(): {dest: v64.MultiAddress, value: bigint} {
        assert(this.isV64)
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
    get isV1(): boolean {
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
    get asV1(): {dest: v1.MultiAddress, value: bigint} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesUpgradeAccountsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.upgrade_accounts')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Upgrade a specified account.
     * 
     * - `origin`: Must be `Signed`.
     * - `who`: The account to be upgraded.
     * 
     * This will waive the transaction fee if at least all but 10% of the accounts needed to
     * be upgraded. (We let some not have to be upgraded just in order to allow for the
     * possibililty of churn).
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Balances.upgrade_accounts') === 'e074d5a93414f189b47fbb5d94c57b62cfb9e63808a3c94665eeb2cfe53be8df'
    }

    /**
     * Upgrade a specified account.
     * 
     * - `origin`: Must be `Signed`.
     * - `who`: The account to be upgraded.
     * 
     * This will waive the transaction fee if at least all but 10% of the accounts needed to
     * be upgraded. (We let some not have to be upgraded just in order to allow for the
     * possibililty of churn).
     */
    get asV64(): {who: Uint8Array[]} {
        assert(this.isV64)
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

    get isV9(): boolean {
        return this._chain.getCallHash('BaseFee.set_base_fee_per_gas') === 'df74b0f066943b24c635a19ba2763478ab00f9c0373d74c9a771b1a1047ff6d6'
    }

    get asV9(): {fee: bigint} {
        assert(this.isV9)
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

    get isV9(): boolean {
        return this._chain.getCallHash('BaseFee.set_elasticity') === 'efcd4cd6d4fde4342db62d270df85a88b1c153af50159f9bc1ba1ce1133f2524'
    }

    get asV9(): {elasticity: number} {
        assert(this.isV9)
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

    get isV9(): boolean {
        return this._chain.getCallHash('BaseFee.set_is_active') === '3add098d9e97883d6727546805c06a15ec2e3d4dd29382f81a6061d644cf503d'
    }

    get asV9(): {isActive: boolean} {
        assert(this.isV9)
        return this._chain.decodeCall(this.call)
    }
}

export class BlockRewardSetConfigurationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BlockReward.set_configuration')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the reward distribution configuration parameters which will be used from next block reward distribution.
     * 
     * It is mandatory that all components of configuration sum up to one whole (**100%**),
     * otherwise an error `InvalidDistributionConfiguration` will be raised.
     * 
     * - `reward_distro_params` - reward distribution params
     * 
     * Emits `DistributionConfigurationChanged` with config embeded into event itself.
     * 
     */
    get isV12(): boolean {
        return this._chain.getCallHash('BlockReward.set_configuration') === '988a0fd0ca6a89664dfcc70f40883e80cf8f99f2c5e545cff46ec15e8a33da81'
    }

    /**
     * Sets the reward distribution configuration parameters which will be used from next block reward distribution.
     * 
     * It is mandatory that all components of configuration sum up to one whole (**100%**),
     * otherwise an error `InvalidDistributionConfiguration` will be raised.
     * 
     * - `reward_distro_params` - reward distribution params
     * 
     * Emits `DistributionConfigurationChanged` with config embeded into event itself.
     * 
     */
    get asV12(): {rewardDistroParams: v12.RewardDistributionConfig} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Sets the reward distribution configuration parameters which will be used from next block reward distribution.
     * 
     * It is mandatory that all components of configuration sum up to one whole (**100%**),
     * otherwise an error `InvalidDistributionConfiguration` will be raised.
     * 
     * - `reward_distro_params` - reward distribution params
     * 
     * Emits `DistributionConfigurationChanged` with config embeded into event itself.
     * 
     */
    get isV74(): boolean {
        return this._chain.getCallHash('BlockReward.set_configuration') === 'c51926d098ae9a044e36a2097402a61cf747436ae7854be71b1c360c81757393'
    }

    /**
     * Sets the reward distribution configuration parameters which will be used from next block reward distribution.
     * 
     * It is mandatory that all components of configuration sum up to one whole (**100%**),
     * otherwise an error `InvalidDistributionConfiguration` will be raised.
     * 
     * - `reward_distro_params` - reward distribution params
     * 
     * Emits `DistributionConfigurationChanged` with config embeded into event itself.
     * 
     */
    get asV74(): {rewardDistroParams: v74.RewardDistributionConfig} {
        assert(this.isV74)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorSelectionLeaveIntentCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorSelection.leave_intent')
        this._chain = ctx._chain
        this.call = call
    }

    get isV1(): boolean {
        return this._chain.getCallHash('CollatorSelection.leave_intent') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorSelectionRegisterAsCandidateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorSelection.register_as_candidate')
        this._chain = ctx._chain
        this.call = call
    }

    get isV1(): boolean {
        return this._chain.getCallHash('CollatorSelection.register_as_candidate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorSelectionSetCandidacyBondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorSelection.set_candidacy_bond')
        this._chain = ctx._chain
        this.call = call
    }

    get isV1(): boolean {
        return this._chain.getCallHash('CollatorSelection.set_candidacy_bond') === 'a862ec70ffc8f3bd1c3d634825c052f8531eba68afa42769689fc18a6d718eda'
    }

    get asV1(): {bond: bigint} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorSelectionSetDesiredCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorSelection.set_desired_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    get isV1(): boolean {
        return this._chain.getCallHash('CollatorSelection.set_desired_candidates') === '405f1447d8db6ecc920213976cf7f98b6e74c5ceb4e2ecf66c742895e40e5d78'
    }

    get asV1(): {max: number} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorSelectionSetInvulnerablesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorSelection.set_invulnerables')
        this._chain = ctx._chain
        this.call = call
    }

    get isV1(): boolean {
        return this._chain.getCallHash('CollatorSelection.set_invulnerables') === '4f4db85b7e763f702804fa793ac5cba68cfd546b497830a9c3c21dced2b91524'
    }

    get asV1(): {new: Uint8Array[]} {
        assert(this.isV1)
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
    get isV55(): boolean {
        return this._chain.getCallHash('Contracts.call') === '9b1b707b0f5c537afca26d44d0081d29092614e330ff3810d328d0342d6a1845'
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
    get asV55(): {dest: v55.MultiAddress, value: bigint, gasLimit: v55.Weight, storageDepositLimit: (bigint | undefined), data: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsCallOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.call_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deprecated version if [`Self::call`] for use in an in-storage `Call`.
     */
    get isV55(): boolean {
        return this._chain.getCallHash('Contracts.call_old_weight') === 'd96c8a6656d7a4d6af6d5d0d51dd36e041c9ea8a92a7ead343d711addd74780f'
    }

    /**
     * Deprecated version if [`Self::call`] for use in an in-storage `Call`.
     */
    get asV55(): {dest: v55.MultiAddress, value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), data: Uint8Array} {
        assert(this.isV55)
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
     * Instantiates a contract from a previously deployed wasm binary.
     * 
     * This function is identical to [`Self::instantiate_with_code`] but without the
     * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
     * must be supplied.
     */
    get isV55(): boolean {
        return this._chain.getCallHash('Contracts.instantiate') === '144f181b3afbf1b5f0fd6ab12277b9e2a4600a80dfdf6fa1aab631acc55d1bd1'
    }

    /**
     * Instantiates a contract from a previously deployed wasm binary.
     * 
     * This function is identical to [`Self::instantiate_with_code`] but without the
     * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
     * must be supplied.
     */
    get asV55(): {value: bigint, gasLimit: v55.Weight, storageDepositLimit: (bigint | undefined), codeHash: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsInstantiateOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.instantiate_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
     */
    get isV55(): boolean {
        return this._chain.getCallHash('Contracts.instantiate_old_weight') === '065e28d4aca8ef55389ab2cdeb357c40056320f063a3db0a6c9157a597c14b5b'
    }

    /**
     * Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
     */
    get asV55(): {value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), codeHash: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV55)
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
    get isV55(): boolean {
        return this._chain.getCallHash('Contracts.instantiate_with_code') === 'f764596bd52fce313b3fe7a10bf25a782558f542e67923c0437000f75dc3d1c8'
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
    get asV55(): {value: bigint, gasLimit: v55.Weight, storageDepositLimit: (bigint | undefined), code: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsInstantiateWithCodeOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.instantiate_with_code_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
     */
    get isV55(): boolean {
        return this._chain.getCallHash('Contracts.instantiate_with_code_old_weight') === '2204435764a14a39d7c13f6cffbf98550fcaad4cba9d91306fe99d88a718a62c'
    }

    /**
     * Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
     */
    get asV55(): {value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), code: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsMigrateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.migrate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * When a migration is in progress, this dispatchable can be used to run migration steps.
     * Calls that contribute to advancing the migration have their fees waived, as it's helpful
     * for the chain. Note that while the migration is in progress, the pallet will also
     * leverage the `on_idle` hooks to run migration steps.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Contracts.migrate') === '5c8ebc7220b8a4f4173e1be1f728bbf12e95d6ae2f1cd0f219f8e89eb183b93f'
    }

    /**
     * When a migration is in progress, this dispatchable can be used to run migration steps.
     * Calls that contribute to advancing the migration have their fees waived, as it's helpful
     * for the chain. Note that while the migration is in progress, the pallet will also
     * leverage the `on_idle` hooks to run migration steps.
     */
    get asV64(): {weightLimit: v64.Weight} {
        assert(this.isV64)
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
    get isV55(): boolean {
        return this._chain.getCallHash('Contracts.remove_code') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * Remove the code stored under `code_hash` and refund the deposit to its owner.
     * 
     * A code can only be removed by its original uploader (its owner) and only if it is
     * not used by any contract.
     */
    get asV55(): {codeHash: Uint8Array} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }
}

export class ContractsSetCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Contracts.set_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Privileged function that changes the code of an existing contract.
     * 
     * This takes care of updating refcounts and all other necessary operations. Returns
     * an error if either the `code_hash` or `dest` do not exist.
     * 
     * # Note
     * 
     * This does **not** change the address of the contract in question. This means
     * that the contract address is no longer derived from its code hash after calling
     * this dispatchable.
     */
    get isV55(): boolean {
        return this._chain.getCallHash('Contracts.set_code') === '70cd8e4f03fe2c8334a13735563897eedfa16eb9b8e0c97b3aacce6c108aacc0'
    }

    /**
     * Privileged function that changes the code of an existing contract.
     * 
     * This takes care of updating refcounts and all other necessary operations. Returns
     * an error if either the `code_hash` or `dest` do not exist.
     * 
     * # Note
     * 
     * This does **not** change the address of the contract in question. This means
     * that the contract address is no longer derived from its code hash after calling
     * this dispatchable.
     */
    get asV55(): {dest: v55.MultiAddress, codeHash: Uint8Array} {
        assert(this.isV55)
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
     * - `determinism`: If this is set to any other value but [`Determinism::Deterministic`]
     *   then the only way to use this code is to delegate call into it from an offchain
     *   execution. Set to [`Determinism::Deterministic`] if in doubt.
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    get isV55(): boolean {
        return this._chain.getCallHash('Contracts.upload_code') === '0611b158a1c5ea1399a178957cd7f7e3f18854c4cbba7eb06690c056695e0ff2'
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
     * - `determinism`: If this is set to any other value but [`Determinism::Deterministic`]
     *   then the only way to use this code is to delegate call into it from an offchain
     *   execution. Set to [`Determinism::Deterministic`] if in doubt.
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    get asV55(): {code: Uint8Array, storageDepositLimit: (bigint | undefined), determinism: v55.Determinism} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
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
     * - `determinism`: If this is set to any other value but [`Determinism::Enforced`] then
     *   the only way to use this code is to delegate call into it from an offchain execution.
     *   Set to [`Determinism::Enforced`] if in doubt.
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Contracts.upload_code') === '663f57b6c8020f1dc4aec4d53be131605bcef013028b5e44987c285a13f1c649'
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
     * - `determinism`: If this is set to any other value but [`Determinism::Enforced`] then
     *   the only way to use this code is to delegate call into it from an offchain execution.
     *   Set to [`Determinism::Enforced`] if in doubt.
     * 
     * # Note
     * 
     * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     * To avoid this situation a constructor could employ access control so that it can
     * only be instantiated by permissioned entities. The same is true when uploading
     * through [`Self::instantiate_with_code`].
     */
    get asV64(): {code: Uint8Array, storageDepositLimit: (bigint | undefined), determinism: v64.Determinism} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingClaimBonusRewardCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.claim_bonus_reward')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to claim bonus reward for a smart contract, if eligible.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.claim_bonus_reward') === 'eb6812a49628bb0ea32f555b1ab0a3f9dea2f290b0ade5a0c88842fce92ebcd2'
    }

    /**
     * Used to claim bonus reward for a smart contract, if eligible.
     */
    get asV79(): {smartContract: v79.SmartContract} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingClaimDappRewardCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.claim_dapp_reward')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to claim dApp reward for the specified era.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.claim_dapp_reward') === '8984ea692222cd959197c8f8dda6d3bf378441be84c0acbdbd9e063221af56d8'
    }

    /**
     * Used to claim dApp reward for the specified era.
     */
    get asV79(): {smartContract: v79.SmartContract, era: number} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingClaimStakerRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.claim_staker_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claims some staker rewards, if user has any.
     * In the case of a successful call, at least one era will be claimed, with the possibility of multiple claims happening.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.claim_staker_rewards') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Claims some staker rewards, if user has any.
     * In the case of a successful call, at least one era will be claimed, with the possibility of multiple claims happening.
     */
    get asV79(): null {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingClaimUnlockedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.claim_unlocked')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claims all of fully unlocked chunks, removing the lock from them.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.claim_unlocked') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Claims all of fully unlocked chunks, removing the lock from them.
     */
    get asV79(): null {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingCleanupExpiredEntriesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.cleanup_expired_entries')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cleanup expired stake entries for the contract.
     * 
     * Entry is considered to be expired if:
     * 1. It's from a past period & the account wasn't a loyal staker, meaning there's no claimable bonus reward.
     * 2. It's from a period older than the oldest claimable period, regardless whether the account was loyal or not.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.cleanup_expired_entries') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Cleanup expired stake entries for the contract.
     * 
     * Entry is considered to be expired if:
     * 1. It's from a past period & the account wasn't a loyal staker, meaning there's no claimable bonus reward.
     * 2. It's from a period older than the oldest claimable period, regardless whether the account was loyal or not.
     */
    get asV79(): null {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingForceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.force')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to force a change of era or subperiod.
     * The effect isn't immediate but will happen on the next block.
     * 
     * Used for testing purposes, when we want to force an era change, or a subperiod change.
     * Not intended to be used in production, except in case of unforeseen circumstances.
     * 
     * Can only be called by manager origin.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.force') === 'b4bb985f829be852011cad15454748bd9bfcbf79d4c06711c7dce894c16bfc3f'
    }

    /**
     * Used to force a change of era or subperiod.
     * The effect isn't immediate but will happen on the next block.
     * 
     * Used for testing purposes, when we want to force an era change, or a subperiod change.
     * Not intended to be used in production, except in case of unforeseen circumstances.
     * 
     * Can only be called by manager origin.
     */
    get asV79(): {forcingType: v79.ForcingType} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingLockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.lock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Locks additional funds into dApp staking.
     * 
     * In case caller account doesn't have sufficient balance to cover the specified amount, everything is locked.
     * After adjustment, lock amount must be greater than zero and in total must be equal or greater than the minimum locked amount.
     * 
     * Locked amount can immediately be used for staking.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.lock') === 'cb35b858b85c01f9ef5d7452beae3c3ca00714b5a37136bf969c6aa966f6b740'
    }

    /**
     * Locks additional funds into dApp staking.
     * 
     * In case caller account doesn't have sufficient balance to cover the specified amount, everything is locked.
     * After adjustment, lock amount must be greater than zero and in total must be equal or greater than the minimum locked amount.
     * 
     * Locked amount can immediately be used for staking.
     */
    get asV79(): {amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingMaintenanceModeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.maintenance_mode')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to enable or disable maintenance mode.
     * Can only be called by manager origin.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.maintenance_mode') === '1a4f33b2dfaeb1147a73dad03c7960562e86062414cb8d5283edde6d1400631d'
    }

    /**
     * Used to enable or disable maintenance mode.
     * Can only be called by manager origin.
     */
    get asV79(): {enabled: boolean} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.register')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to register a new contract for dApp staking.
     * 
     * If successful, smart contract will be assigned a simple, unique numerical identifier.
     * Owner is set to be initial beneficiary & manager of the dApp.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.register') === '7e4b2a0d65f10e1f13d0bf4e1ee0ac766c3e1e2225d4178acade00634485b427'
    }

    /**
     * Used to register a new contract for dApp staking.
     * 
     * If successful, smart contract will be assigned a simple, unique numerical identifier.
     * Owner is set to be initial beneficiary & manager of the dApp.
     */
    get asV79(): {owner: Uint8Array, smartContract: v79.SmartContract} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingRelockUnlockingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.relock_unlocking')
        this._chain = ctx._chain
        this.call = call
    }

    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.relock_unlocking') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV79(): null {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingSetDappOwnerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.set_dapp_owner')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to change dApp owner.
     * 
     * Can be called by dApp owner or dApp staking manager origin.
     * This is useful in two cases:
     * 1. when the dApp owner account is compromised, manager can change the owner to a new account
     * 2. if project wants to transfer ownership to a new account (DAO, multisig, etc.).
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.set_dapp_owner') === 'fd002bfe425604c698dc004568d2d239ae92b7d106501da6a5942b0ffa664563'
    }

    /**
     * Used to change dApp owner.
     * 
     * Can be called by dApp owner or dApp staking manager origin.
     * This is useful in two cases:
     * 1. when the dApp owner account is compromised, manager can change the owner to a new account
     * 2. if project wants to transfer ownership to a new account (DAO, multisig, etc.).
     */
    get asV79(): {smartContract: v79.SmartContract, newOwner: Uint8Array} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingSetDappRewardBeneficiaryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.set_dapp_reward_beneficiary')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to modify the reward beneficiary account for a dApp.
     * 
     * Caller has to be dApp owner.
     * If set to `None`, rewards will be deposited to the dApp owner.
     * After this call, all existing & future rewards will be paid out to the beneficiary.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.set_dapp_reward_beneficiary') === 'd3df932aea489a0dea7d43eb966f3e4bf80d0c641b4e3d4bdae9cd31b4c4c7cf'
    }

    /**
     * Used to modify the reward beneficiary account for a dApp.
     * 
     * Caller has to be dApp owner.
     * If set to `None`, rewards will be deposited to the dApp owner.
     * After this call, all existing & future rewards will be paid out to the beneficiary.
     */
    get asV79(): {smartContract: v79.SmartContract, beneficiary: (Uint8Array | undefined)} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingStakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.stake')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Stake the specified amount on a smart contract.
     * The precise `amount` specified **must** be available for staking.
     * The total amount staked on a dApp must be greater than the minimum required value.
     * 
     * Depending on the period type, appropriate stake amount will be updated. During `Voting` subperiod, `voting` stake amount is updated,
     * and same for `Build&Earn` subperiod.
     * 
     * Staked amount is only eligible for rewards from the next era onwards.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.stake') === '9ddd052021e1174de5dabdd90b95bd10c17a2a3b379f8314f3eb15648097c775'
    }

    /**
     * Stake the specified amount on a smart contract.
     * The precise `amount` specified **must** be available for staking.
     * The total amount staked on a dApp must be greater than the minimum required value.
     * 
     * Depending on the period type, appropriate stake amount will be updated. During `Voting` subperiod, `voting` stake amount is updated,
     * and same for `Build&Earn` subperiod.
     * 
     * Staked amount is only eligible for rewards from the next era onwards.
     */
    get asV79(): {smartContract: v79.SmartContract, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingUnbondAndUnstakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.unbond_and_unstake')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Wrapper around _legacy-like_ `unbond_and_unstake`.
     * 
     * Used to support legacy Ledger users so they can start the unlocking process for their funds.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.unbond_and_unstake') === '6672ecd9402312c35802b77f170edc72a7da0d94f1eba35efb11822174eb6435'
    }

    /**
     * Wrapper around _legacy-like_ `unbond_and_unstake`.
     * 
     * Used to support legacy Ledger users so they can start the unlocking process for their funds.
     */
    get asV79(): {contractId: v79.SmartContract, value: bigint} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingUnlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.unlock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Attempts to start the unlocking process for the specified amount.
     * 
     * Only the amount that isn't actively used for staking can be unlocked.
     * If the amount is greater than the available amount for unlocking, everything is unlocked.
     * If the remaining locked amount would take the account below the minimum locked amount, everything is unlocked.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.unlock') === 'cb35b858b85c01f9ef5d7452beae3c3ca00714b5a37136bf969c6aa966f6b740'
    }

    /**
     * Attempts to start the unlocking process for the specified amount.
     * 
     * Only the amount that isn't actively used for staking can be unlocked.
     * If the amount is greater than the available amount for unlocking, everything is unlocked.
     * If the remaining locked amount would take the account below the minimum locked amount, everything is unlocked.
     */
    get asV79(): {amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingUnregisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.unregister')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unregister dApp from dApp staking protocol, making it ineligible for future rewards.
     * This doesn't remove the dApp completely from the system just yet, but it can no longer be used for staking.
     * 
     * Can be called by dApp staking manager origin.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.unregister') === 'eb6812a49628bb0ea32f555b1ab0a3f9dea2f290b0ade5a0c88842fce92ebcd2'
    }

    /**
     * Unregister dApp from dApp staking protocol, making it ineligible for future rewards.
     * This doesn't remove the dApp completely from the system just yet, but it can no longer be used for staking.
     * 
     * Can be called by dApp staking manager origin.
     */
    get asV79(): {smartContract: v79.SmartContract} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingUnstakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.unstake')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unstake the specified amount from a smart contract.
     * The `amount` specified **must** not exceed what's staked, otherwise the call will fail.
     * 
     * If unstaking the specified `amount` would take staker below the minimum stake threshold, everything is unstaked.
     * 
     * Depending on the period type, appropriate stake amount will be updated.
     * In case amount is unstaked during `Voting` subperiod, the `voting` amount is reduced.
     * In case amount is unstaked during `Build&Earn` subperiod, first the `build_and_earn` is reduced,
     * and any spillover is subtracted from the `voting` amount.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.unstake') === '9ddd052021e1174de5dabdd90b95bd10c17a2a3b379f8314f3eb15648097c775'
    }

    /**
     * Unstake the specified amount from a smart contract.
     * The `amount` specified **must** not exceed what's staked, otherwise the call will fail.
     * 
     * If unstaking the specified `amount` would take staker below the minimum stake threshold, everything is unstaked.
     * 
     * Depending on the period type, appropriate stake amount will be updated.
     * In case amount is unstaked during `Voting` subperiod, the `voting` amount is reduced.
     * In case amount is unstaked during `Build&Earn` subperiod, first the `build_and_earn` is reduced,
     * and any spillover is subtracted from the `voting` amount.
     */
    get asV79(): {smartContract: v79.SmartContract, amount: bigint} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingUnstakeFromUnregisteredCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.unstake_from_unregistered')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to unstake funds from a contract that was unregistered after an account staked on it.
     * This is required if staker wants to re-stake these funds on another active contract during the ongoing period.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.unstake_from_unregistered') === 'eb6812a49628bb0ea32f555b1ab0a3f9dea2f290b0ade5a0c88842fce92ebcd2'
    }

    /**
     * Used to unstake funds from a contract that was unregistered after an account staked on it.
     * This is required if staker wants to re-stake these funds on another active contract during the ongoing period.
     */
    get asV79(): {smartContract: v79.SmartContract} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingWithdrawUnbondedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStaking.withdraw_unbonded')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Wrapper around _legacy-like_ `withdraw_unbonded`.
     * 
     * Used to support legacy Ledger users so they can reclaim unlocked chunks back into
     * their _transferable_ free balance.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStaking.withdraw_unbonded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Wrapper around _legacy-like_ `withdraw_unbonded`.
     * 
     * Used to support legacy Ledger users so they can reclaim unlocked chunks back into
     * their _transferable_ free balance.
     */
    get asV79(): null {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappStakingMigrationMigrateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappStakingMigration.migrate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Attempt to execute migration steps, consuming up to the specified amount of weight.
     * If no weight is specified, max allowed weight is used.
     * 
     * Regardless of the specified weight limit, it will be clamped between the minimum & maximum allowed values.
     * This means that even if user specifies `Weight::zero()` as the limit,
     * the call will be charged & executed using the minimum allowed weight.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('DappStakingMigration.migrate') === '665f82c825a1e8499ef71d503ff860d9e4f8a4b6a79c017c1233c483892d2cfa'
    }

    /**
     * Attempt to execute migration steps, consuming up to the specified amount of weight.
     * If no weight is specified, max allowed weight is used.
     * 
     * Regardless of the specified weight limit, it will be clamped between the minimum & maximum allowed values.
     * This means that even if user specifies `Weight::zero()` as the limit,
     * the call will be charged & executed using the minimum allowed weight.
     */
    get asV79(): {weightLimit: (v79.Weight | undefined)} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingBondAndStakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.bond_and_stake')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Lock up and stake balance of the origin account.
     * 
     * `value` must be more than the `minimum_balance` specified by `T::Currency`
     * unless account already has bonded value equal or more than 'minimum_balance'.
     * 
     * The dispatch origin for this call must be _Signed_ by the staker's account.
     * 
     * Effects of staking will be felt at the beginning of the next era.
     * 
     */
    get isV4(): boolean {
        return this._chain.getCallHash('DappsStaking.bond_and_stake') === '6672ecd9402312c35802b77f170edc72a7da0d94f1eba35efb11822174eb6435'
    }

    /**
     * Lock up and stake balance of the origin account.
     * 
     * `value` must be more than the `minimum_balance` specified by `T::Currency`
     * unless account already has bonded value equal or more than 'minimum_balance'.
     * 
     * The dispatch origin for this call must be _Signed_ by the staker's account.
     * 
     * Effects of staking will be felt at the beginning of the next era.
     * 
     */
    get asV4(): {contractId: v4.SmartContract, value: bigint} {
        assert(this.isV4)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingBurnStaleRewardCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.burn_stale_reward')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to burn unclaimed & stale rewards from an unregistered contract.
     */
    get isV49(): boolean {
        return this._chain.getCallHash('DappsStaking.burn_stale_reward') === 'ffe77f2431724927402919078af56571e0848ccffe93717fbae6bf4953fdb5c3'
    }

    /**
     * Used to burn unclaimed & stale rewards from an unregistered contract.
     */
    get asV49(): {contractId: v49.SmartContract, era: number} {
        assert(this.isV49)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * claim the rewards earned by contract_id.
     * All stakers and developer for this contract will be paid out with single call.
     * claim is valid for all unclaimed eras but not longer than history_depth().
     * Any reward older than history_depth() will go to Treasury.
     * Any user can call this function.
     */
    get isV4(): boolean {
        return this._chain.getCallHash('DappsStaking.claim') === 'd2b3ddf13f5688c9b539b81bf731bd696bb7130e76dc3a14407857befc9661e6'
    }

    /**
     * claim the rewards earned by contract_id.
     * All stakers and developer for this contract will be paid out with single call.
     * claim is valid for all unclaimed eras but not longer than history_depth().
     * Any reward older than history_depth() will go to Treasury.
     * Any user can call this function.
     */
    get asV4(): {contractId: v4.SmartContract, era: number} {
        assert(this.isV4)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingClaimDappCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.claim_dapp')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim earned dapp rewards for the specified era.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('DappsStaking.claim_dapp') === 'ffe77f2431724927402919078af56571e0848ccffe93717fbae6bf4953fdb5c3'
    }

    /**
     * Claim earned dapp rewards for the specified era.
     */
    get asV12(): {contractId: v12.SmartContract, era: number} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingClaimStakerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.claim_staker')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim earned staker rewards for the oldest era.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('DappsStaking.claim_staker') === '4abf305c22c30ab5f0f1789e1c17ec02338302344c27fd06733201cb3e4bea32'
    }

    /**
     * Claim earned staker rewards for the oldest era.
     */
    get asV12(): {contractId: v12.SmartContract} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingClaimStakerForCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.claim_staker_for')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim earned staker rewards for the given staker, and the oldest unclaimed era.
     * In order to claim multiple eras, this call has to be called multiple times.
     * 
     * This call can only be used during the pallet decommission process.
     */
    get isV77(): boolean {
        return this._chain.getCallHash('DappsStaking.claim_staker_for') === '0b991530445fab8295ea868c3f2cf9434b7da547dab6cb616498f84ddc30d070'
    }

    /**
     * Claim earned staker rewards for the given staker, and the oldest unclaimed era.
     * In order to claim multiple eras, this call has to be called multiple times.
     * 
     * This call can only be used during the pallet decommission process.
     */
    get asV77(): {staker: Uint8Array, contractId: v77.SmartContract} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingDecommissionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.decommission')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Enable the `decommission` flag for the pallet.
     * 
     * The dispatch origin must be Root.
     */
    get isV77(): boolean {
        return this._chain.getCallHash('DappsStaking.decommission') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Enable the `decommission` flag for the pallet.
     * 
     * The dispatch origin must be Root.
     */
    get asV77(): null {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingDeveloperPreApprovalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.developer_pre_approval')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * add contract address to the pre-approved list.
     * contract_id should be ink! or evm contract.
     * 
     * Sudo call is required
     */
    get isV4(): boolean {
        return this._chain.getCallHash('DappsStaking.developer_pre_approval') === '3a43abe7015f846aefc69f85bd63bfc1b2ec24576936a6e63ac06f406c1f0019'
    }

    /**
     * add contract address to the pre-approved list.
     * contract_id should be ink! or evm contract.
     * 
     * Sudo call is required
     */
    get asV4(): {developer: Uint8Array} {
        assert(this.isV4)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingDoUpgradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.do_upgrade')
        this._chain = ctx._chain
        this.call = call
    }

    get isV12(): boolean {
        return this._chain.getCallHash('DappsStaking.do_upgrade') === '4d949e1693e4c69c05bdbabe5c24a295f1b6f510d7e5fa69f391662aaa663f95'
    }

    get asV12(): {weightLimit: (bigint | undefined)} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingEnableDeveloperPreApprovalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.enable_developer_pre_approval')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Enable or disable adding new contracts to the pre-approved list
     * 
     * Sudo call is required
     */
    get isV4(): boolean {
        return this._chain.getCallHash('DappsStaking.enable_developer_pre_approval') === '1a4f33b2dfaeb1147a73dad03c7960562e86062414cb8d5283edde6d1400631d'
    }

    /**
     * Enable or disable adding new contracts to the pre-approved list
     * 
     * Sudo call is required
     */
    get asV4(): {enabled: boolean} {
        assert(this.isV4)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingForceNewEraCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.force_new_era')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force there to be a new era at the end of the next block. After this, it will be
     * reset to normal (non-forced) behaviour.
     * 
     * The dispatch origin must be Root.
     * 
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write ForceEra
     * # </weight>
     */
    get isV4(): boolean {
        return this._chain.getCallHash('DappsStaking.force_new_era') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Force there to be a new era at the end of the next block. After this, it will be
     * reset to normal (non-forced) behaviour.
     * 
     * The dispatch origin must be Root.
     * 
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write ForceEra
     * # </weight>
     */
    get asV4(): null {
        assert(this.isV4)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingMaintenanceModeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.maintenance_mode')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `true` will disable pallet, enabling maintenance mode. `false` will do the opposite.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('DappsStaking.maintenance_mode') === '06e22e50961a88f026db10051ac75d9c97ac15a2b9abb2dd1225eb446b084816'
    }

    /**
     * `true` will disable pallet, enabling maintenance mode. `false` will do the opposite.
     */
    get asV12(): {enableMaintenance: boolean} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingNominationTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.nomination_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer nomination from one contract to another.
     * 
     * Same rules as for `bond_and_stake` and `unbond_and_unstake` apply.
     * Minor difference is that there is no unbonding period so this call won't
     * check whether max number of unbonding chunks is exceeded.
     * 
     */
    get isV17(): boolean {
        return this._chain.getCallHash('DappsStaking.nomination_transfer') === '12b9c1f358d0c0ed0dec0024cd1488c3d54ecedecc671af0bfe79b9ce4f5c0e8'
    }

    /**
     * Transfer nomination from one contract to another.
     * 
     * Same rules as for `bond_and_stake` and `unbond_and_unstake` apply.
     * Minor difference is that there is no unbonding period so this call won't
     * check whether max number of unbonding chunks is exceeded.
     * 
     */
    get asV17(): {originContractId: v17.SmartContract, value: bigint, targetContractId: v17.SmartContract} {
        assert(this.isV17)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.register')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * register contract into staking targets.
     * contract_id should be ink! or evm contract.
     * 
     * Any user can call this function.
     * However, caller have to have deposit amount.
     */
    get isV4(): boolean {
        return this._chain.getCallHash('DappsStaking.register') === '4abf305c22c30ab5f0f1789e1c17ec02338302344c27fd06733201cb3e4bea32'
    }

    /**
     * register contract into staking targets.
     * contract_id should be ink! or evm contract.
     * 
     * Any user can call this function.
     * However, caller have to have deposit amount.
     */
    get asV4(): {contractId: v4.SmartContract} {
        assert(this.isV4)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Used to register contract for dapps staking.
     * The origin account used is treated as the `developer` account.
     * 
     * Depending on the pallet configuration/state it is possible that developer needs to be whitelisted prior to registration.
     * 
     * As part of this call, `RegisterDeposit` will be reserved from devs account.
     */
    get isV33(): boolean {
        return this._chain.getCallHash('DappsStaking.register') === '2f03d9defcc401bb0fb0c6510cd53c477b8c49c47ec1788ab3cc313e2b1e4266'
    }

    /**
     * Used to register contract for dapps staking.
     * The origin account used is treated as the `developer` account.
     * 
     * Depending on the pallet configuration/state it is possible that developer needs to be whitelisted prior to registration.
     * 
     * As part of this call, `RegisterDeposit` will be reserved from devs account.
     */
    get asV33(): {developer: Uint8Array, contractId: v33.SmartContract} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingSetContractStakeInfoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.set_contract_stake_info')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to force set `ContractEraStake` storage values.
     * The purpose of this call is only for fixing one of the issues detected with dapps-staking.
     */
    get isV16(): boolean {
        return this._chain.getCallHash('DappsStaking.set_contract_stake_info') === '80a16219b1fee309b77bed498fc9e20f524cb494cf5fb345a9ba3f7b5435bb8d'
    }

    /**
     * Used to force set `ContractEraStake` storage values.
     * The purpose of this call is only for fixing one of the issues detected with dapps-staking.
     */
    get asV16(): {contract: v16.SmartContract, era: number, contractStakeInfo: v16.ContractStakeInfo} {
        assert(this.isV16)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingSetRewardDestinationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.set_reward_destination')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to set reward destination for staker rewards
     */
    get isV16(): boolean {
        return this._chain.getCallHash('DappsStaking.set_reward_destination') === '6e7d19c80f571a303473c9594fead6a895a508211c77d56b6f504732d023ab3c'
    }

    /**
     * Used to set reward destination for staker rewards
     */
    get asV16(): {rewardDestination: v16.RewardDestination} {
        assert(this.isV16)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingSetRewardDestinationForCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.set_reward_destination_for')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to set reward destination for staker rewards, for the given staker
     * 
     */
    get isV77(): boolean {
        return this._chain.getCallHash('DappsStaking.set_reward_destination_for') === 'a62d75a00736c9004dfacafc1f14953b0e712049a96ad69998e1e8e8c8a3c92f'
    }

    /**
     * Used to set reward destination for staker rewards, for the given staker
     * 
     */
    get asV77(): {staker: Uint8Array, rewardDestination: v77.RewardDestination} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingUnbondAndUnstakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.unbond_and_unstake')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Start unbonding process and unstake balance from the contract.
     * 
     * The unstaked amount will no longer be eligible for rewards but still won't be unlocked.
     * User needs to wait for the unbonding period to finish before being able to withdraw
     * the funds via `withdraw_unbonded` call.
     * 
     * In case remaining staked balance on contract is below minimum staking amount,
     * entire stake for that contract will be unstaked.
     * 
     */
    get isV12(): boolean {
        return this._chain.getCallHash('DappsStaking.unbond_and_unstake') === '6672ecd9402312c35802b77f170edc72a7da0d94f1eba35efb11822174eb6435'
    }

    /**
     * Start unbonding process and unstake balance from the contract.
     * 
     * The unstaked amount will no longer be eligible for rewards but still won't be unlocked.
     * User needs to wait for the unbonding period to finish before being able to withdraw
     * the funds via `withdraw_unbonded` call.
     * 
     * In case remaining staked balance on contract is below minimum staking amount,
     * entire stake for that contract will be unstaked.
     * 
     */
    get asV12(): {contractId: v12.SmartContract, value: bigint} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingUnbondUnstakeAndWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.unbond_unstake_and_withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unbond, unstake and withdraw balance from the contract.
     * 
     * Value will be unlocked for the user.
     * 
     * In case remaining staked balance on contract is below minimum staking amount,
     * entire stake for that contract will be unstaked.
     * 
     */
    get isV4(): boolean {
        return this._chain.getCallHash('DappsStaking.unbond_unstake_and_withdraw') === '6672ecd9402312c35802b77f170edc72a7da0d94f1eba35efb11822174eb6435'
    }

    /**
     * Unbond, unstake and withdraw balance from the contract.
     * 
     * Value will be unlocked for the user.
     * 
     * In case remaining staked balance on contract is below minimum staking amount,
     * entire stake for that contract will be unstaked.
     * 
     */
    get asV4(): {contractId: v4.SmartContract, value: bigint} {
        assert(this.isV4)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingUnregisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.unregister')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unregister existing contract from dapps staking
     * 
     * This must be called by the developer who registered the contract.
     * 
     * Warning: After this action contract can not be assigned again.
     */
    get isV4(): boolean {
        return this._chain.getCallHash('DappsStaking.unregister') === '4abf305c22c30ab5f0f1789e1c17ec02338302344c27fd06733201cb3e4bea32'
    }

    /**
     * Unregister existing contract from dapps staking
     * 
     * This must be called by the developer who registered the contract.
     * 
     * Warning: After this action contract can not be assigned again.
     */
    get asV4(): {contractId: v4.SmartContract} {
        assert(this.isV4)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingWithdrawFromUnregisteredCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.withdraw_from_unregistered')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Withdraw locked funds from a contract that was unregistered.
     * Funds don't need to undergo the unbonding period - they are returned immediately.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('DappsStaking.withdraw_from_unregistered') === '4abf305c22c30ab5f0f1789e1c17ec02338302344c27fd06733201cb3e4bea32'
    }

    /**
     * Withdraw locked funds from a contract that was unregistered.
     * Funds don't need to undergo the unbonding period - they are returned immediately.
     */
    get asV12(): {contractId: v12.SmartContract} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class DappsStakingWithdrawUnbondedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DappsStaking.withdraw_unbonded')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Withdraw all funds that have completed the unbonding process.
     * 
     * If there are unbonding chunks which will be fully unbonded in future eras,
     * they will remain and can be withdrawn later.
     * 
     */
    get isV12(): boolean {
        return this._chain.getCallHash('DappsStaking.withdraw_unbonded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Withdraw all funds that have completed the unbonding process.
     * 
     * If there are unbonding chunks which will be fully unbonded in future eras,
     * they will remain and can be withdrawn later.
     * 
     */
    get asV12(): null {
        assert(this.isV12)
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
    get isV15(): boolean {
        return this._chain.getCallHash('DmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
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
    get asV15(): {index: bigint, weightLimit: bigint} {
        assert(this.isV15)
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
    get isV43(): boolean {
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
    get asV43(): {index: bigint, weightLimit: v43.Weight} {
        assert(this.isV43)
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
    get isV49(): boolean {
        return this._chain.getCallHash('DmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
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
    get asV49(): {index: bigint, weightLimit: bigint} {
        assert(this.isV49)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Service a single overweight message.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('DmpQueue.service_overweight') === '80fae8875bf513efc1e06b7dac547fccfc1e5fc45888cc8afd9b43812cf51bf5'
    }

    /**
     * Service a single overweight message.
     */
    get asV61(): {index: bigint, weightLimit: v61.Weight} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class DynamicEvmBaseFeeSetBaseFeePerGasCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DynamicEvmBaseFee.set_base_fee_per_gas')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `root-only` extrinsic to set the `base_fee_per_gas` value manually.
     * The specified value has to respect min & max limits configured in the runtime.
     */
    get isV72(): boolean {
        return this._chain.getCallHash('DynamicEvmBaseFee.set_base_fee_per_gas') === 'df74b0f066943b24c635a19ba2763478ab00f9c0373d74c9a771b1a1047ff6d6'
    }

    /**
     * `root-only` extrinsic to set the `base_fee_per_gas` value manually.
     * The specified value has to respect min & max limits configured in the runtime.
     */
    get asV72(): {fee: bigint} {
        assert(this.isV72)
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
     * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('EVM.call') === '4dd257cd040f4ae9b62039701ef665b8a3f0468966cd57b59d37498ad66f4409'
    }

    /**
     * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    get asV1(): {source: Uint8Array, target: Uint8Array, input: Uint8Array, value: bigint, gasLimit: bigint, gasPrice: bigint, nonce: (bigint | undefined)} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    get isV9(): boolean {
        return this._chain.getCallHash('EVM.call') === 'eeb77745ff27b8506fb1b57e6ef488c35d1ac95be3176673b1921b8ab0f9e942'
    }

    /**
     * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    get asV9(): {source: Uint8Array, target: Uint8Array, input: Uint8Array, value: bigint, gasLimit: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: (bigint | undefined), nonce: (bigint | undefined), accessList: [Uint8Array, Uint8Array[]][]} {
        assert(this.isV9)
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
     * Issue an EVM create operation. This is similar to a contract creation transaction in
     * Ethereum.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('EVM.create') === 'de8177bcf4ab5c4d6722e52bc709fdcce31d5d71999adcf9c4911105b4df6664'
    }

    /**
     * Issue an EVM create operation. This is similar to a contract creation transaction in
     * Ethereum.
     */
    get asV1(): {source: Uint8Array, init: Uint8Array, value: bigint, gasLimit: bigint, gasPrice: bigint, nonce: (bigint | undefined)} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Issue an EVM create operation. This is similar to a contract creation transaction in
     * Ethereum.
     */
    get isV9(): boolean {
        return this._chain.getCallHash('EVM.create') === 'b2d4cf6513231e7f717fc6fe95cbd4f5ca7b8b0c1d2979ba0aff39e8cc9397dd'
    }

    /**
     * Issue an EVM create operation. This is similar to a contract creation transaction in
     * Ethereum.
     */
    get asV9(): {source: Uint8Array, init: Uint8Array, value: bigint, gasLimit: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: (bigint | undefined), nonce: (bigint | undefined), accessList: [Uint8Array, Uint8Array[]][]} {
        assert(this.isV9)
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
     * Issue an EVM create2 operation.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('EVM.create2') === '4201d038d5474ac4b5d522e08fd6db471b94731f3e4abe35e4c9730c89bb37a1'
    }

    /**
     * Issue an EVM create2 operation.
     */
    get asV1(): {source: Uint8Array, init: Uint8Array, salt: Uint8Array, value: bigint, gasLimit: bigint, gasPrice: bigint, nonce: (bigint | undefined)} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Issue an EVM create2 operation.
     */
    get isV9(): boolean {
        return this._chain.getCallHash('EVM.create2') === '18602ee4331e8cb35f58191422a9e3d8c7f8ad7a7203e110799b90c33ad59ad9'
    }

    /**
     * Issue an EVM create2 operation.
     */
    get asV9(): {source: Uint8Array, init: Uint8Array, salt: Uint8Array, value: bigint, gasLimit: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: (bigint | undefined), nonce: (bigint | undefined), accessList: [Uint8Array, Uint8Array[]][]} {
        assert(this.isV9)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmHotfixIncAccountSufficientsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.hotfix_inc_account_sufficients')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Increment `sufficients` for existing accounts having a nonzero `nonce` but zero `sufficients` value.
     */
    get isV15(): boolean {
        return this._chain.getCallHash('EVM.hotfix_inc_account_sufficients') === 'e368b92ea67bc2b182782fa8f2aee8e839404c3635495666aa053956718d32c8'
    }

    /**
     * Increment `sufficients` for existing accounts having a nonzero `nonce` but zero `sufficients` value.
     */
    get asV15(): {addresses: Uint8Array[]} {
        assert(this.isV15)
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
     * Withdraw balance from EVM into currency/balances pallet.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('EVM.withdraw') === '6213607a84a4a3aa47d755efc366f94b81dbbfa3fe175ebac796707949240fdb'
    }

    /**
     * Withdraw balance from EVM into currency/balances pallet.
     */
    get asV1(): {address: Uint8Array, value: bigint} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class EthCallCallCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EthCall.call')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('EthCall.call') === 'af84841e88b462e693b174fb109e3e01734d738e1e8f42fecd9f20eb36a56040'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV1(): {call: v1.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV3(): boolean {
        return this._chain.getCallHash('EthCall.call') === '3e661ea37f91f9331ecbc2d833cc30595d049b91d62b9fff1ceedf1270b27dff'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV3(): {call: v3.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV4(): boolean {
        return this._chain.getCallHash('EthCall.call') === 'cadd6cc92b9186df5c09f577c8029d59182ad7a23c1f9157d8ce320b69bcdc13'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV4(): {call: v4.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV4)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9(): boolean {
        return this._chain.getCallHash('EthCall.call') === '58e3499226acc7bf552dec90a681282bbe0953f8dbce88052200e9d47b1bb29b'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9(): {call: v9.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV9)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('EthCall.call') === '3c6e299046ad0ae57449206135f19fb9810ca67d64e59af92bcf9909467ddddd'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV12(): {call: v12.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV13(): boolean {
        return this._chain.getCallHash('EthCall.call') === '805512360cd26fd09667049a82621173c00fe8bf78df52e70fa55b5b7de01d82'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV13(): {call: v13.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV13)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV15(): boolean {
        return this._chain.getCallHash('EthCall.call') === '939d9f2097651534855bb8b77d9c9bc2e7656967531554208ea92845b4e9d6fb'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV15(): {call: v15.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV16(): boolean {
        return this._chain.getCallHash('EthCall.call') === 'dcf075afdfbd23eab0b9ac9cb259ab372ee626fc13c706c9e7e0b47f816f07f8'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV16(): {call: v16.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV16)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV17(): boolean {
        return this._chain.getCallHash('EthCall.call') === '1678b2f9fc5776fd8f22ea8760d45b269b57b59ff28a156b6f95ef7f68347d54'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV17(): {call: v17.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV17)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV23(): boolean {
        return this._chain.getCallHash('EthCall.call') === 'b23fc9e89bf6855eaf6cef5101bbdee702c141e823302aefcd719f1529eba23d'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV23(): {call: v23.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV30(): boolean {
        return this._chain.getCallHash('EthCall.call') === 'e4203ad0197dc642e6e067489c3ab34ae5b77743d4279d607d3d2a6603f156b7'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV30(): {call: v30.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV30)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV33(): boolean {
        return this._chain.getCallHash('EthCall.call') === '2c19d16d979be9d50f75306db1fe949ff345889d172a8d6db33e2b079a8f2b42'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV33(): {call: v33.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV33)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV43(): boolean {
        return this._chain.getCallHash('EthCall.call') === '43832fa792f4daee2345abcb15ee46485eb4419cf9dfed3511280fc99c02b580'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV43(): {call: v43.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get isV49(): boolean {
        return this._chain.getCallHash('EthCall.call') === '9fc3261946ced218c986cebabe2ea984c81ba24241b4cea4df2e912b0a5c6456'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get asV49(): {call: v49.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV49)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get isV52(): boolean {
        return this._chain.getCallHash('EthCall.call') === '4baa10bd04e66928f7d3446ea628bc20b441c5ad13098916748f59cf3dc120fd'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get asV52(): {call: v52.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get isV55(): boolean {
        return this._chain.getCallHash('EthCall.call') === '490e4ca3f71a4c53148fdd84c4d76dc28321845db8a98c8b4bf289a1555ae56b'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get asV55(): {call: v55.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get isV61(): boolean {
        return this._chain.getCallHash('EthCall.call') === 'cfd23067f4a80e65e1d5d877e7d8b99bc2feb24459d15bf9f42f008d4dd41b77'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get asV61(): {call: v61.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get isV64(): boolean {
        return this._chain.getCallHash('EthCall.call') === '833abb65b1f23f3bc52e4a0af1f518d9ad78440fbfd8d06c3b9ee39dc6dee95b'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get asV64(): {call: v64.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get isV66(): boolean {
        return this._chain.getCallHash('EthCall.call') === '770cf816877129f5cf5708fc02f73d1694febad16b93fb8c4a09cc9fa76cd87e'
    }

    /**
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + read/write + 10_000.
     * # </weight>
     */
    get asV66(): {call: v66.Call, signer: Uint8Array, signature: Uint8Array, nonce: number} {
        assert(this.isV66)
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
     * Transact an Ethereum transaction.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Ethereum.transact') === '5428ddd9e500c37fab03733ba478898e4067902f2f5f71871a41c7242422fe10'
    }

    /**
     * Transact an Ethereum transaction.
     */
    get asV1(): {transaction: v1.LegacyTransaction} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transact an Ethereum transaction.
     */
    get isV9(): boolean {
        return this._chain.getCallHash('Ethereum.transact') === '1415fd2e9fbe639b903297515a3d773224e43cd3e03aa9e6c3f0ae82fe4e93f4'
    }

    /**
     * Transact an Ethereum transaction.
     */
    get asV9(): {transaction: v9.TransactionV2} {
        assert(this.isV9)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.add_registrar') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
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
    get asV1(): {account: Uint8Array} {
        assert(this.isV1)
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
    get isV43(): boolean {
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
    get asV43(): {account: v43.MultiAddress} {
        assert(this.isV43)
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
     * Add the given account to the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV1(): boolean {
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
    get asV1(): {sub: v1.MultiAddress, data: v1.Data} {
        assert(this.isV1)
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
     * Cancel a previous request.
     * 
     * Payment: A previously reserved deposit is returned on success.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     * Emits `JudgementUnrequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - One storage mutation `O(R + X)`.
     * - One event
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.cancel_request') === '89d659d6a17ba36d0dfc7c90a7f043581d7fe980043895169d7dda1416ff7e5b'
    }

    /**
     * Cancel a previous request.
     * 
     * Payment: A previously reserved deposit is returned on success.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     * Emits `JudgementUnrequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - One storage mutation `O(R + X)`.
     * - One event
     * # </weight>
     */
    get asV1(): {regIndex: number} {
        assert(this.isV1)
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
     * Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     * Payment: All reserved balances on the account are returned.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * Emits `IdentityCleared` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`
     *   - where `R` registrar-count (governance-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     * - One balance-unreserve operation.
     * - `2` storage reads and `S + 2` storage deletions.
     * - One event.
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     * Payment: All reserved balances on the account are returned.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * Emits `IdentityCleared` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`
     *   - where `R` registrar-count (governance-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     * - One balance-unreserve operation.
     * - `2` storage reads and `S + 2` storage deletions.
     * - One event.
     * # </weight>
     */
    get asV1(): null {
        assert(this.isV1)
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
    get isV1(): boolean {
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
    get asV1(): {target: v1.MultiAddress} {
        assert(this.isV1)
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
    get isV1(): boolean {
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
    get asV1(): {regIndex: number, target: v1.MultiAddress, judgement: v1.Judgement} {
        assert(this.isV1)
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
    get isV43(): boolean {
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
    get asV43(): {regIndex: number, target: v43.MultiAddress, judgement: v43.Judgement, identity: Uint8Array} {
        assert(this.isV43)
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
     * Remove the sender as a sub-account.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender (*not* the original depositor).
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * super-identity.
     * 
     * NOTE: This should not normally be used, but is provided in the case that the non-
     * controller of an account is maliciously registered as a sub-account.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.quit_sub') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the sender as a sub-account.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender (*not* the original depositor).
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * super-identity.
     * 
     * NOTE: This should not normally be used, but is provided in the case that the non-
     * controller of an account is maliciously registered as a sub-account.
     */
    get asV1(): null {
        assert(this.isV1)
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
     * Remove the given account from the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV1(): boolean {
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
    get asV1(): {sub: v1.MultiAddress} {
        assert(this.isV1)
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
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === 'b7d02496580d984a1a588630bfbf580f423f08a761006f8706b057ac73069a38'
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV1(): {sub: v1.MultiAddress, data: v1.Data} {
        assert(this.isV1)
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
     * Request a judgement from a registrar.
     * 
     * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     * given.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is requested.
     * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     * ```nocompile
     * Self::registrars().get(reg_index).unwrap().fee
     * ```
     * 
     * Emits `JudgementRequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
     * - One event.
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.request_judgement') === 'c6336282cbe5b8ccf3769cc13c92f532be2499335e3d52ebf566a888e92b5b7c'
    }

    /**
     * Request a judgement from a registrar.
     * 
     * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     * given.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is requested.
     * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     * ```nocompile
     * Self::registrars().get(reg_index).unwrap().fee
     * ```
     * 
     * Emits `JudgementRequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
     * - One event.
     * # </weight>
     */
    get asV1(): {regIndex: number, maxFee: bigint} {
        assert(this.isV1)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.set_account_id') === 'a333bb3ce3e314d48fcf93f14155097760db6249022181f1eb923c1343af6813'
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
    get asV1(): {index: number, new: Uint8Array} {
        assert(this.isV1)
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
    get isV43(): boolean {
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
    get asV43(): {index: number, new: v43.MultiAddress} {
        assert(this.isV43)
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
     * Set the fee required for a judgement to be requested from a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fee`: the new fee.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.set_fee') === '6418458414c3cef3d5c80c88232d781e76733c675303b2937b9cd30ae58d0fe4'
    }

    /**
     * Set the fee required for a judgement to be requested from a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fee`: the new fee.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     * # </weight>
     */
    get asV1(): {index: number, fee: bigint} {
        assert(this.isV1)
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
     * Set the field information for a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fields`: the fields that the registrar concerns themselves with.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.set_fields') === 'b2c8998acd304e28e4f4a78e6a07f5bf7caf587532734dbd94b85c01a31c3e13'
    }

    /**
     * Set the field information for a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fields`: the fields that the registrar concerns themselves with.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     * # </weight>
     */
    get asV1(): {index: number, fields: bigint} {
        assert(this.isV1)
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
     * Set an account's identity information and reserve the appropriate deposit.
     * 
     * If the account already has identity information, the deposit is taken as part payment
     * for the new deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `info`: The identity information.
     * 
     * Emits `IdentitySet` if successful.
     * 
     * # <weight>
     * - `O(X + X' + R)`
     *   - where `X` additional-field-count (deposit-bounded and code-bounded)
     *   - where `R` judgements-count (registrar-count-bounded)
     * - One balance reserve operation.
     * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     * - One event.
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
    }

    /**
     * Set an account's identity information and reserve the appropriate deposit.
     * 
     * If the account already has identity information, the deposit is taken as part payment
     * for the new deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `info`: The identity information.
     * 
     * Emits `IdentitySet` if successful.
     * 
     * # <weight>
     * - `O(X + X' + R)`
     *   - where `X` additional-field-count (deposit-bounded and code-bounded)
     *   - where `R` judgements-count (registrar-count-bounded)
     * - One balance reserve operation.
     * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     * - One event.
     * # </weight>
     */
    get asV1(): {info: v1.IdentityInfo} {
        assert(this.isV1)
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
     * Set the sub-accounts of the sender.
     * 
     * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * - `subs`: The identity's (new) sub-accounts.
     * 
     * # <weight>
     * - `O(P + S)`
     *   - where `P` old-subs-count (hard- and deposit-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     * - At most one balance operations.
     * - DB:
     *   - `P + S` storage mutations (codec complexity `O(1)`)
     *   - One storage read (codec complexity `O(P)`).
     *   - One storage write (codec complexity `O(S)`).
     *   - One storage-exists (`IdentityOf::contains_key`).
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Identity.set_subs') === 'f156a100857e71b9e1eab839801795e8569b63b49f6c30333c5bf12811cbbe73'
    }

    /**
     * Set the sub-accounts of the sender.
     * 
     * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * - `subs`: The identity's (new) sub-accounts.
     * 
     * # <weight>
     * - `O(P + S)`
     *   - where `P` old-subs-count (hard- and deposit-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     * - At most one balance operations.
     * - DB:
     *   - `P + S` storage mutations (codec complexity `O(1)`)
     *   - One storage read (codec complexity `O(P)`).
     *   - One storage write (codec complexity `O(S)`).
     *   - One storage-exists (`IdentityOf::contains_key`).
     * # </weight>
     */
    get asV1(): {subs: [Uint8Array, v1.Data][]} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class InflationForceInflationRecalculationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Inflation.force_inflation_recalculation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to force inflation recalculation.
     * This is done in the same way as it would be done in an appropriate block, but this call forces it.
     * 
     * Must be called by `root` origin.
     * 
     * Purpose of the call is testing & handling unforeseen circumstances.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Inflation.force_inflation_recalculation') === '6b6505085fbd8b0ac4b131fe124fd353b707b7b73109cd2947134ff9875f8038'
    }

    /**
     * Used to force inflation recalculation.
     * This is done in the same way as it would be done in an appropriate block, but this call forces it.
     * 
     * Must be called by `root` origin.
     * 
     * Purpose of the call is testing & handling unforeseen circumstances.
     */
    get asV79(): {nextEra: number} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class InflationForceSetInflationParamsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Inflation.force_set_inflation_params')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Used to force-set the inflation parameters.
     * The parameters must be valid, all parts summing up to one whole (100%), otherwise the call will fail.
     * 
     * Must be called by `root` origin.
     * 
     * Purpose of the call is testing & handling unforeseen circumstances.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Inflation.force_set_inflation_params') === 'cd63d8886304564ce8ea7557a863022ea8a8b23e6fb08ff78f5f95316ce7db4e'
    }

    /**
     * Used to force-set the inflation parameters.
     * The parameters must be valid, all parts summing up to one whole (100%), otherwise the call will fail.
     * 
     * Must be called by `root` origin.
     * 
     * Purpose of the call is testing & handling unforeseen circumstances.
     */
    get asV79(): {params: v79.InflationParameters} {
        assert(this.isV79)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === '615a5baaaa889f9e30839c70485b8c752e5eb050a85a23102b2f9f4c301be63a'
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
    get asV1(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v1.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
        assert(this.isV1)
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
    get isV43(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === 'af4617697c04ce56b4748943a851b51ff5b80d64991c7ecf495a4651ff57debb'
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
    get asV43(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v43.Timepoint | undefined), callHash: Uint8Array, maxWeight: v43.Weight} {
        assert(this.isV43)
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
    get isV49(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === '88561668497d8fdee3be21d28e6e68bc1cd9568f418501a4b294fe2b9803acb4'
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
    get asV49(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v49.Timepoint | undefined), callHash: Uint8Array, maxWeight: v49.Weight} {
        assert(this.isV49)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '548dea53ff79fe99438cf591950a533c93f9772d03a3995ec72a80376fcae222'
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
    get asV1(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v1.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
        assert(this.isV1)
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
    get isV43(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'f62d383b8db5d9025f2e3e98181c8439346292d755afd9729e7168a703e7be01'
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
    get asV43(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v43.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: v43.Weight} {
        assert(this.isV43)
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV49(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'b934527c4d0001b747ba03b5e07c7e4c8a9c65b91cf15c1025ed54f5ee128071'
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV49(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v49.Timepoint | undefined), call: v49.Call, maxWeight: v49.Weight} {
        assert(this.isV49)
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV52(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '6e924a718c064307fe87e19f194509db5b56926bc8bf9e65d73a7325c1f5bdf5'
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV52(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v52.Timepoint | undefined), call: v52.Call, maxWeight: v52.Weight} {
        assert(this.isV52)
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV55(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'c486440d5cb837fd309518b6bf2cbf804ec64c24914dc0cfa9f5aeb029307ea1'
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
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV55(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v55.Timepoint | undefined), call: v55.Call, maxWeight: v55.Weight} {
        assert(this.isV55)
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
     * ## Complexity
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
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '8c84600e0942f07ed4143ba1c36a83f229cb028eb2a24a7bc03fafea7d754036'
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
     * ## Complexity
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
     */
    get asV61(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v61.Timepoint | undefined), call: v61.Call, maxWeight: v61.Weight} {
        assert(this.isV61)
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
     * ## Complexity
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
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '1e3a68f0b218c7af2037e0be019d48b8e8b05d3340c165f8aabf36fa1a61903f'
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
     * ## Complexity
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
     */
    get asV64(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v64.Timepoint | undefined), call: v64.Call, maxWeight: v64.Weight} {
        assert(this.isV64)
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
     * ## Complexity
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
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'e47d554eb5c6a04255e7f65c877bf0236f40874df8d5b6676cb8ddca0373876d'
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
     * ## Complexity
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
     */
    get asV66(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v66.Timepoint | undefined), call: v66.Call, maxWeight: v66.Weight} {
        assert(this.isV66)
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
     * ## Complexity
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
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'efb849e39bc9f3abf0162dbd99304830fc2efebd0dfc0e57a650a1595a2a1e72'
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
     * ## Complexity
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
     */
    get asV68(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v68.Timepoint | undefined), call: v68.Call, maxWeight: v68.Weight} {
        assert(this.isV68)
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
     * ## Complexity
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
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '86fec91b76bbc24a133748c931865177cdaf6a99e2dfe861f6f63acb7017f347'
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
     * ## Complexity
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
     */
    get asV70(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v70.Timepoint | undefined), call: v70.Call, maxWeight: v70.Weight} {
        assert(this.isV70)
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
     * ## Complexity
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
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '6cba3b106ca7c8b8045ddf4990bc576b0fb77a96bcf995401522c294cd23394e'
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
     * ## Complexity
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
     */
    get asV72(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v72.Timepoint | undefined), call: v72.Call, maxWeight: v72.Weight} {
        assert(this.isV72)
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
     * ## Complexity
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
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '33c15da9073d7ce65f6c3932ae8ceee44a5687a91d112ee03e1fb93231e5cec7'
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
     * ## Complexity
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
     */
    get asV74(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v74.Timepoint | undefined), call: v74.Call, maxWeight: v74.Weight} {
        assert(this.isV74)
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
     * ## Complexity
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
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '3fad6498cf0a991f3fe798cea54377bec0b7802f4a8e8539649a0f1db96acc09'
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
     * ## Complexity
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
     */
    get asV77(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v77.Timepoint | undefined), call: v77.Call, maxWeight: v77.Weight} {
        assert(this.isV77)
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
     * ## Complexity
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
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '2473c88e766e32b02527f8c6ffd02a11b86a8ac50f59a60ae77dee3732a62aa8'
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
     * ## Complexity
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
     */
    get asV79(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v79.Timepoint | undefined), call: v79.Call, maxWeight: v79.Weight} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::as_multi`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '004ace284d34270ae7f1120b60994538d8d6b71b609de603c1a5d97cbdb8e890'
    }

    /**
     * See [`Pallet::as_multi`].
     */
    get asV82(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v82.Timepoint | undefined), call: v82.Call, maxWeight: v82.Weight} {
        assert(this.isV82)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '8f878abd8c3755c194092c0087cde1851f92aed26b220792869a2addff64f808'
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
    get asV1(): {otherSignatories: Uint8Array[], call: v1.Call} {
        assert(this.isV1)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'c415f9dec5eb9de0b4741deda5c173cc82f25ab44bb2723677beff890754f009'
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
    get asV3(): {otherSignatories: Uint8Array[], call: v3.Call} {
        assert(this.isV3)
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
    get isV4(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '326095d2e457bc9672d5ff4d1d7623201fc9012a275e184921d1fa460472eefb'
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
    get asV4(): {otherSignatories: Uint8Array[], call: v4.Call} {
        assert(this.isV4)
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
    get isV9(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'ace0c6869778bf738ad145e342d2fa83bf815a1f19b36eb2c6ce68ec94ca8e5a'
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
    get asV9(): {otherSignatories: Uint8Array[], call: v9.Call} {
        assert(this.isV9)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '4e8041daef72ab5f51c42554fe929c18c923bd7c889c076a2fcc5eeaa2f5a46c'
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
    get asV12(): {otherSignatories: Uint8Array[], call: v12.Call} {
        assert(this.isV12)
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
    get isV13(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '7e21891bd79ca50c93264e56c1597fc36b14389ac33ede5c3bf2edbf4ef10038'
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
    get asV13(): {otherSignatories: Uint8Array[], call: v13.Call} {
        assert(this.isV13)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '2f35202577a0af0935988e4dfd266be8b79d96ce99407b9a4de80430ad3af0de'
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
    get asV15(): {otherSignatories: Uint8Array[], call: v15.Call} {
        assert(this.isV15)
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
    get isV16(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '1fe97833eb03f932c1160b4d89a1766391dff934b47ece74f96d167edd627bfb'
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
    get asV16(): {otherSignatories: Uint8Array[], call: v16.Call} {
        assert(this.isV16)
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
    get isV17(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '1c173149cc5cbba0a71b5e997a94d0c218589c0c253dd33c8c4a2b5362654db1'
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
    get asV17(): {otherSignatories: Uint8Array[], call: v17.Call} {
        assert(this.isV17)
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
    get isV23(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '8524953ae5a354ac5db2b6806766ff6608779eded20422fba651af192a590310'
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
    get asV23(): {otherSignatories: Uint8Array[], call: v23.Call} {
        assert(this.isV23)
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
    get isV30(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'ec3e4da29d30746c91d01fc4cc2ebf1b13e76c0da1e2b88f7ae98ff8d1e81b1d'
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
    get asV30(): {otherSignatories: Uint8Array[], call: v30.Call} {
        assert(this.isV30)
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
    get isV33(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'f9f70adfd977bb5e2e98bc2bb6e0d16ffb7be8ffb19257558640aefab616daac'
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
    get asV33(): {otherSignatories: Uint8Array[], call: v33.Call} {
        assert(this.isV33)
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
    get isV43(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '838b852ff96b24758946613be0b0fc21c99bded95da48c410e83fe6f642e9222'
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
    get asV43(): {otherSignatories: Uint8Array[], call: v43.Call} {
        assert(this.isV43)
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
    get isV49(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'f85c1436fa53d7d067bf95cd314ec5a8922776628920d33d4bc4f1dff3154982'
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
    get asV49(): {otherSignatories: Uint8Array[], call: v49.Call} {
        assert(this.isV49)
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
    get isV52(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '23eedb7700afd5cc14ee28cdc469f0e841d2a88fdc838a703823d23a9c928b6c'
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
    get asV52(): {otherSignatories: Uint8Array[], call: v52.Call} {
        assert(this.isV52)
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
    get isV55(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '840a43164b1ffd6601b9cbcffa995cb9e1dd66c8a7508237f0486c61c33f659e'
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
    get asV55(): {otherSignatories: Uint8Array[], call: v55.Call} {
        assert(this.isV55)
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'da1086ae18726b0caccf24cffaad4a7221cbf26b44c0d6051eb7564b3f3dadde'
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV61(): {otherSignatories: Uint8Array[], call: v61.Call} {
        assert(this.isV61)
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'c433334d2fd62c2180e37f00074e939cec51fd7da30907174295c24bc6a2e92d'
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV64(): {otherSignatories: Uint8Array[], call: v64.Call} {
        assert(this.isV64)
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'f1db484ba5dca8a229a4a6bdc976beac30b1b3b3d7fcf6db5a33d1a3a3f9e871'
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV66(): {otherSignatories: Uint8Array[], call: v66.Call} {
        assert(this.isV66)
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '14bb270fb9ae48ef1d01f86368bb35ac2e108b14db9178db0cad2c2240b2ad42'
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV68(): {otherSignatories: Uint8Array[], call: v68.Call} {
        assert(this.isV68)
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '3ab7b95750f69a00a72229fd2d3e20a98619619b186fc190e9bc3f477e7d61c7'
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV70(): {otherSignatories: Uint8Array[], call: v70.Call} {
        assert(this.isV70)
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'e9d88fc453f1e4622065263f89c14044c9653a2e8c826d7517f15acac894cb3e'
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV72(): {otherSignatories: Uint8Array[], call: v72.Call} {
        assert(this.isV72)
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '7994f5fabd158d8ff169e895c284e332af57d84937636ac378fd69dbc191455d'
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV74(): {otherSignatories: Uint8Array[], call: v74.Call} {
        assert(this.isV74)
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '6f365fd318b43ad458a7c7e005dde2dc982e24be0953aecb3b5b36b69442c2df'
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV77(): {otherSignatories: Uint8Array[], call: v77.Call} {
        assert(this.isV77)
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '8ecc2945bc5956ff41887087292a3b132ba9632001559674a1a6ee31604efb14'
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
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV79(): {otherSignatories: Uint8Array[], call: v79.Call} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '0655b3f8aace797c6ef3f5e0110de37b7415ab5adb46ee2ce6f69f5c0e0ee67a'
    }

    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    get asV82(): {otherSignatories: Uint8Array[], call: v82.Call} {
        assert(this.isV82)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Multisig.cancel_as_multi') === '4ccc75a4f739c659f177e3df98fba2ea59ddade74c4ebccd51b2fc4c52e923af'
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
    get asV1(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v1.Timepoint, callHash: Uint8Array} {
        assert(this.isV1)
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

    get isV1(): boolean {
        return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    get asV1(): {codeHash: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '5c55d10848d503323d2e442c7afe37bb9673cbd625584442853911cb797f840c'
    }

    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    get asV64(): {codeHash: Uint8Array, checkVersion: boolean} {
        assert(this.isV64)
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

    get isV1(): boolean {
        return this._chain.getCallHash('ParachainSystem.enact_authorized_upgrade') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    get asV1(): {code: Uint8Array} {
        assert(this.isV1)
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
     * Force an already scheduled validation function upgrade to happen on a particular block.
     * 
     * Note that coordinating this block for the upgrade has to happen independently on the
     * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
     * and this bypasses all checks and and normal protocols. Very easy to brick your chain
     * if done wrong.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('ParachainSystem.set_upgrade_block') === '4552b4c9a331e27653dd826226a620c7ef63c4af553ba86f11cdfd63fb1b1028'
    }

    /**
     * Force an already scheduled validation function upgrade to happen on a particular block.
     * 
     * Note that coordinating this block for the upgrade has to happen independently on the
     * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
     * and this bypasses all checks and and normal protocols. Very easy to brick your chain
     * if done wrong.
     */
    get asV1(): {relayChainBlock: number} {
        assert(this.isV1)
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
    get isV1(): boolean {
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
    get asV1(): {data: v1.ParachainInherentData} {
        assert(this.isV1)
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

    get isV1(): boolean {
        return this._chain.getCallHash('ParachainSystem.sudo_send_upward_message') === '34457b6daded32ddc4ec3a5a21e34b9af8dcd7d190a5a7833fa8a7ed53b31206'
    }

    get asV1(): {message: Uint8Array} {
        assert(this.isV1)
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
    get isV15(): boolean {
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
    get asV15(): {message: v15.Type_226, maxWeight: bigint} {
        assert(this.isV15)
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
    get isV43(): boolean {
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
    get asV43(): {message: v43.Type_232, maxWeight: v43.Weight} {
        assert(this.isV43)
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
    get isV49(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === '419f75957e7054a7ca41ccb9ee3164295c759490ff54c08be312f6339829e748'
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
    get asV49(): {message: v49.Type_231, maxWeight: v49.Weight} {
        assert(this.isV49)
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
    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === 'be5e344e53bc9a5c603bc8d8e5818c5a9d385b2163c44bf463eba6c0f569c635'
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
    get asV52(): {message: v52.Type_230, maxWeight: v52.Weight} {
        assert(this.isV52)
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
    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === 'a1da862b5d9db8fd6f3072da00ea4e66052f97b5dcfb87e58d49ca1fd1f1ef90'
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
    get asV61(): {message: v61.Type_251, maxWeight: v61.Weight} {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
    }

    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    get asV15(): {maybeXcmVersion: (number | undefined)} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get asV15(): {location: v15.VersionedMultiLocation} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === '56aed4b742721d521279794a608d71ae9db256750e90b7beb3d50a9d01aff0f9'
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get asV52(): {location: v52.VersionedMultiLocation} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === '0448b7eed1a6d9cd0a489ea792df94cc3ce5a37e203f19b1a5a0c4516a8d696c'
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get asV61(): {location: v61.VersionedMultiLocation} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceSuspensionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_suspension')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set or unset the global suspension state of the XCM executor.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_suspension') === '8ed7e51efeeeccee1e0e2e2dca71da38a9e5bdab470452a56d790711652babc1'
    }

    /**
     * Set or unset the global suspension state of the XCM executor.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    get asV64(): {suspended: boolean} {
        assert(this.isV64)
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
    get isV15(): boolean {
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
    get asV15(): {location: v15.VersionedMultiLocation} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_unsubscribe_version_notify') === '56aed4b742721d521279794a608d71ae9db256750e90b7beb3d50a9d01aff0f9'
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get asV52(): {location: v52.VersionedMultiLocation} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_unsubscribe_version_notify') === '0448b7eed1a6d9cd0a489ea792df94cc3ce5a37e203f19b1a5a0c4516a8d696c'
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get asV61(): {location: v61.VersionedMultiLocation} {
        assert(this.isV61)
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
    get isV15(): boolean {
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
    get asV15(): {location: v15.V1MultiLocation, xcmVersion: number} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '855b9a66c3d6c203c5e887917dc681372ed5d32210a8c6cc86c7d5f227944d9c'
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get asV52(): {location: v52.V1MultiLocation, xcmVersion: number} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '998b5a56e7662d76955b41c2526c2219fe8304fec6501afa115db1bd705e7ff6'
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get asV61(): {location: v61.V3MultiLocation, xcmVersion: number} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_xcm_version`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '33e59692e1de10110f93243ea23af786f87880b56e0ff4d528e142455c6b1bd9'
    }

    /**
     * See [`Pallet::force_xcm_version`].
     */
    get asV82(): {location: v82.V3MultiLocation, version: number} {
        assert(this.isV82)
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
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
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
    get isV15(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
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
    get asV15(): {dest: v15.VersionedMultiLocation, beneficiary: v15.VersionedMultiLocation, assets: v15.VersionedMultiAssets, feeAssetItem: number, weightLimit: v15.V2WeightLimit} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
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
    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === '1818300d2dec2685942619973f1ec81b7ecf2b979534f1965b98b7b6c9d833ea'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
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
    get asV52(): {dest: v52.VersionedMultiLocation, beneficiary: v52.VersionedMultiLocation, assets: v52.VersionedMultiAssets, feeAssetItem: number, weightLimit: v52.V2WeightLimit} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
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
    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === 'c5f45c1775bd92c7b425f46c92a6891334f7df5ae2518cd2c0a106447da3bbd9'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
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
    get asV61(): {dest: v61.VersionedMultiLocation, beneficiary: v61.VersionedMultiLocation, assets: v61.VersionedMultiAssets, feeAssetItem: number, weightLimit: v61.V3WeightLimit} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmLimitedReserveWithdrawAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.limited_reserve_withdraw_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get isV23(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_reserve_withdraw_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get asV23(): {dest: v23.VersionedMultiLocation, beneficiary: v23.VersionedMultiLocation, assets: v23.VersionedMultiAssets, feeAssetItem: number, weightLimit: v23.V2WeightLimit} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_reserve_withdraw_assets') === '1818300d2dec2685942619973f1ec81b7ecf2b979534f1965b98b7b6c9d833ea'
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get asV52(): {dest: v52.VersionedMultiLocation, beneficiary: v52.VersionedMultiLocation, assets: v52.VersionedMultiAssets, feeAssetItem: number, weightLimit: v52.V2WeightLimit} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_reserve_withdraw_assets') === 'c5f45c1775bd92c7b425f46c92a6891334f7df5ae2518cd2c0a106447da3bbd9'
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get asV61(): {dest: v61.VersionedMultiLocation, beneficiary: v61.VersionedMultiLocation, assets: v61.VersionedMultiAssets, feeAssetItem: number, weightLimit: v61.V3WeightLimit} {
        assert(this.isV61)
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
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV15(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV15(): {dest: v15.VersionedMultiLocation, beneficiary: v15.VersionedMultiLocation, assets: v15.VersionedMultiAssets, feeAssetItem: number, weightLimit: v15.V2WeightLimit} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === '1818300d2dec2685942619973f1ec81b7ecf2b979534f1965b98b7b6c9d833ea'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV52(): {dest: v52.VersionedMultiLocation, beneficiary: v52.VersionedMultiLocation, assets: v52.VersionedMultiAssets, feeAssetItem: number, weightLimit: v52.V2WeightLimit} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === 'c5f45c1775bd92c7b425f46c92a6891334f7df5ae2518cd2c0a106447da3bbd9'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV61(): {dest: v61.VersionedMultiLocation, beneficiary: v61.VersionedMultiLocation, assets: v61.VersionedMultiAssets, feeAssetItem: number, weightLimit: v61.V3WeightLimit} {
        assert(this.isV61)
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
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get isV15(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get asV15(): {dest: v15.VersionedMultiLocation, beneficiary: v15.VersionedMultiLocation, assets: v15.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === 'b79cf2a68b1db82f94409ee603047fcd82f4343b83df6736c115e3338c04cecc'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get asV52(): {dest: v52.VersionedMultiLocation, beneficiary: v52.VersionedMultiLocation, assets: v52.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === 'ebd99cece75c1b0fc48830527bc513cf672b8d0c6c0c505498bba5c8c5e1617c'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get asV61(): {dest: v61.VersionedMultiLocation, beneficiary: v61.VersionedMultiLocation, assets: v61.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmReserveWithdrawAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.reserve_withdraw_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get isV23(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_withdraw_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get asV23(): {dest: v23.VersionedMultiLocation, beneficiary: v23.VersionedMultiLocation, assets: v23.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_withdraw_assets') === 'b79cf2a68b1db82f94409ee603047fcd82f4343b83df6736c115e3338c04cecc'
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get asV52(): {dest: v52.VersionedMultiLocation, beneficiary: v52.VersionedMultiLocation, assets: v52.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_withdraw_assets') === 'ebd99cece75c1b0fc48830527bc513cf672b8d0c6c0c505498bba5c8c5e1617c'
    }

    /**
     * Transfer some assets from sovereign account to reserve holder chain and
     * forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
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
    get asV61(): {dest: v61.VersionedMultiLocation, beneficiary: v61.VersionedMultiLocation, assets: v61.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV61)
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

    get isV15(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
    }

    get asV15(): {dest: v15.VersionedMultiLocation, message: v15.VersionedXcm} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === '23ee62671c78b4c334d1aac87969a94e2d7514e9e9acd1949878df4525736480'
    }

    get asV52(): {dest: v52.VersionedMultiLocation, message: v52.VersionedXcm} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === '9c814457e6c06e355f17d8e2e59924a734ef38dfc7852490ba89fd5b845b6f48'
    }

    get asV61(): {dest: v61.VersionedMultiLocation, message: v61.VersionedXcm} {
        assert(this.isV61)
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
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isV15(): boolean {
        return this._chain.getCallHash('PolkadotXcm.teleport_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asV15(): {dest: v15.VersionedMultiLocation, beneficiary: v15.VersionedMultiLocation, assets: v15.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('PolkadotXcm.teleport_assets') === 'b79cf2a68b1db82f94409ee603047fcd82f4343b83df6736c115e3338c04cecc'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asV52(): {dest: v52.VersionedMultiLocation, beneficiary: v52.VersionedMultiLocation, assets: v52.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('PolkadotXcm.teleport_assets') === 'ebd99cece75c1b0fc48830527bc513cf672b8d0c6c0c505498bba5c8c5e1617c'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asV61(): {dest: v61.VersionedMultiLocation, beneficiary: v61.VersionedMultiLocation, assets: v61.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV61)
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
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Proxy.add_proxy') === '80cae686e5fb2cbc74737d0cc0fdb1552d6064d732de9b0bdf195866c6ab7816'
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
     */
    get asV61(): {delegate: v61.MultiAddress, proxyType: v61.ProxyType, delay: number} {
        assert(this.isV61)
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
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Proxy.add_proxy') === 'fd59e8fa9e2eec71dedd0e70bf50eb98006eba8d83ecaf55fc8308fb47427e8a'
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
     */
    get asV79(): {delegate: v79.MultiAddress, proxyType: v79.ProxyType, delay: number} {
        assert(this.isV79)
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
     */
    get isV61(): boolean {
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
     */
    get asV61(): {real: v61.MultiAddress, callHash: Uint8Array} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyCreatePureCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.create_pure')
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
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Proxy.create_pure') === '8792a2f5b1fa315978749429bbf4d348da0e4843fa9ae19da9fc7e867448d50c'
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
     */
    get asV61(): {proxyType: v61.ProxyType, delay: number, index: number} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
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
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Proxy.create_pure') === 'b44e248282c92bdd8d48605bca39e9b3557fa4fcfffc6c6b495532cc4e505fb3'
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
     */
    get asV79(): {proxyType: v79.ProxyType, delay: number, index: number} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyKillPureCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.kill_pure')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Proxy.kill_pure') === 'b82c99b2e4ffae13cd33af94a30d5018a9373ceded79856a0af44f4dd4825e50'
    }

    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    get asV61(): {spawner: v61.MultiAddress, proxyType: v61.ProxyType, index: number, height: number, extIndex: number} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Proxy.kill_pure') === '0cf5d847a17c35565f5a4e96748ee73be8979be0096d93c21600a45b9c7e80b7'
    }

    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    get asV79(): {spawner: v79.MultiAddress, proxyType: v79.ProxyType, index: number, height: number, extIndex: number} {
        assert(this.isV79)
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
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'f25c80fdb2ad6e2f9971fec5d84d5452d5762eba9cbe52a545b97a1f6a4d8223'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV61(): {real: v61.MultiAddress, forceProxyType: (v61.ProxyType | undefined), call: v61.Call} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '7924faa938e588798b6aaa08c4fb302f9c45c311ad8babdcd317fb2c8c30be09'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV64(): {real: v64.MultiAddress, forceProxyType: (v64.ProxyType | undefined), call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'e5e7dd79061b98cead91a344205a3509ac1eaf06e9009622c31e13039a898b45'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV66(): {real: v66.MultiAddress, forceProxyType: (v66.ProxyType | undefined), call: v66.Call} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'cab6973826f62456809454e866957235c2c9c83b291b097077fb57892707499a'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV68(): {real: v68.MultiAddress, forceProxyType: (v68.ProxyType | undefined), call: v68.Call} {
        assert(this.isV68)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '797e7b0253eb00c5ec0a02d8c0d93464adbfd0fc94f6b781806316431636ce44'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV70(): {real: v70.MultiAddress, forceProxyType: (v70.ProxyType | undefined), call: v70.Call} {
        assert(this.isV70)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'b7abc6ed006c315baeeef1dd40035c97972c8a4f5c6b3b66d5e3dedf2d7e7c7d'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV72(): {real: v72.MultiAddress, forceProxyType: (v72.ProxyType | undefined), call: v72.Call} {
        assert(this.isV72)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '4ce59bd3800555836afd108d9000f53e0ee281557d9ef3c8dc3dc6a2ed39296d'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV74(): {real: v74.MultiAddress, forceProxyType: (v74.ProxyType | undefined), call: v74.Call} {
        assert(this.isV74)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'ed40c9d409ddab1526a748630fa1eef8e3eef7da3daecc3ec97fef7f5379688e'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV77(): {real: v77.MultiAddress, forceProxyType: (v77.ProxyType | undefined), call: v77.Call} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '378f8aa694c79793ee2a0a43596433581089620ec264bed464b62381d03be721'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV79(): {real: v79.MultiAddress, forceProxyType: (v79.ProxyType | undefined), call: v79.Call} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::proxy`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '1529a4e7a033424104ea62aeb347301f266f2cbaa4738492cade7a3e20844968'
    }

    /**
     * See [`Pallet::proxy`].
     */
    get asV82(): {real: v82.MultiAddress, forceProxyType: (v82.ProxyType | undefined), call: v82.Call} {
        assert(this.isV82)
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
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'dabf407a7845ebeb4eeb6f205b65954d2f7ad8e889a1e28eb26c08f096ecb012'
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
     */
    get asV61(): {delegate: v61.MultiAddress, real: v61.MultiAddress, forceProxyType: (v61.ProxyType | undefined), call: v61.Call} {
        assert(this.isV61)
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
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '89b078e2db8a0ca0f8f394561c760805e2fe05609fc9ac47f82aec8607470d1a'
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
     */
    get asV64(): {delegate: v64.MultiAddress, real: v64.MultiAddress, forceProxyType: (v64.ProxyType | undefined), call: v64.Call} {
        assert(this.isV64)
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
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '5ac6dd9244f318e7ae12c0c6768a0270f6eae312517adef62dd3b8be5da97c52'
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
     */
    get asV66(): {delegate: v66.MultiAddress, real: v66.MultiAddress, forceProxyType: (v66.ProxyType | undefined), call: v66.Call} {
        assert(this.isV66)
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
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'df1cf3babd3603a0d6fe1a9c6641b8e1312ee9e5b1ad69d48d400516beab1c87'
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
     */
    get asV68(): {delegate: v68.MultiAddress, real: v68.MultiAddress, forceProxyType: (v68.ProxyType | undefined), call: v68.Call} {
        assert(this.isV68)
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
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '58f2e49c064adc75739a1bc4c5464af2891c22b1b52b3fa971120c1e34cc0e1a'
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
     */
    get asV70(): {delegate: v70.MultiAddress, real: v70.MultiAddress, forceProxyType: (v70.ProxyType | undefined), call: v70.Call} {
        assert(this.isV70)
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
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '16afabc757fe87cdd84a049b88a516207391dfb9152f623240021edce8c22194'
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
     */
    get asV72(): {delegate: v72.MultiAddress, real: v72.MultiAddress, forceProxyType: (v72.ProxyType | undefined), call: v72.Call} {
        assert(this.isV72)
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
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '380875e7e72da2ab1ff8b97d45b3f2574e5b9627c37063aa25c29f71b28c5cd2'
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
     */
    get asV74(): {delegate: v74.MultiAddress, real: v74.MultiAddress, forceProxyType: (v74.ProxyType | undefined), call: v74.Call} {
        assert(this.isV74)
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
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '519e7707535ec0141ff21c3abca9f417bce8c715dba7a0b1fcea883b30ba8007'
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
     */
    get asV77(): {delegate: v77.MultiAddress, real: v77.MultiAddress, forceProxyType: (v77.ProxyType | undefined), call: v77.Call} {
        assert(this.isV77)
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
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '553475eba918f489b9dac3b7c0da383fa944eb2ea1d6e0d16ca265aa9046856e'
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
     */
    get asV79(): {delegate: v79.MultiAddress, real: v79.MultiAddress, forceProxyType: (v79.ProxyType | undefined), call: v79.Call} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::proxy_announced`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '453698f0136bb18d9a020490ac98d03e097679cf8a1485260585c83fb544d3fc'
    }

    /**
     * See [`Pallet::proxy_announced`].
     */
    get asV82(): {delegate: v82.MultiAddress, real: v82.MultiAddress, forceProxyType: (v82.ProxyType | undefined), call: v82.Call} {
        assert(this.isV82)
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
     */
    get isV61(): boolean {
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
     */
    get asV61(): {delegate: v61.MultiAddress, callHash: Uint8Array} {
        assert(this.isV61)
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
     */
    get isV61(): boolean {
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
     */
    get asV61(): {real: v61.MultiAddress, callHash: Uint8Array} {
        assert(this.isV61)
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
     * WARNING: This may be called on accounts created by `pure`, however if done, then
     * the unreserved fees will be inaccessible. **All access to this account will be lost.**
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxies') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Unregister all proxy accounts for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * WARNING: This may be called on accounts created by `pure`, however if done, then
     * the unreserved fees will be inaccessible. **All access to this account will be lost.**
     */
    get asV61(): null {
        assert(this.isV61)
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
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxy') === '80cae686e5fb2cbc74737d0cc0fdb1552d6064d732de9b0bdf195866c6ab7816'
    }

    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    get asV61(): {delegate: v61.MultiAddress, proxyType: v61.ProxyType, delay: number} {
        assert(this.isV61)
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
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxy') === 'fd59e8fa9e2eec71dedd0e70bf50eb98006eba8d83ecaf55fc8308fb47427e8a'
    }

    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    get asV79(): {delegate: v79.MultiAddress, proxyType: v79.ProxyType, delay: number} {
        assert(this.isV79)
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
     * Removes any session key(s) of the function caller.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
     *   of `T::Keys::key_ids()` which is fixed.
     * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     * - DbWrites: `NextKeys`, `origin account`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Removes any session key(s) of the function caller.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
     *   of `T::Keys::key_ids()` which is fixed.
     * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     * - DbWrites: `NextKeys`, `origin account`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asV1(): null {
        assert(this.isV1)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Session.set_keys') === 'c0b44bc08ddc0ad90c1bd05300acef09fd979fcb434b3b92b011e7817fd56c2f'
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
    get asV1(): {keys: v1.SessionKeys, proof: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationContinueMigrateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.continue_migrate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Continue the migration for the given `limits`.
     * 
     * The dispatch origin of this call can be any signed account.
     * 
     * This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
     * Upon successful execution, the transaction fee is returned.
     * 
     * The (potentially over-estimated) of the byte length of all the data read must be
     * provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
     * that executing the current `MigrationTask` with the given `limits` will not exceed
     * `real_size_upper` bytes of read data.
     * 
     * The `witness_task` is merely a helper to prevent the caller from being slashed or
     * generally trigger a migration that they do not intend. This parameter is just a message
     * from caller, saying that they believed `witness_task` was the last state of the
     * migration, and they only wish for their transaction to do anything, if this assumption
     * holds. In case `witness_task` does not match, the transaction fails.
     * 
     * Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
     * recommended way of doing this is to pass a `limit` that only bounds `count`, as the
     * `size` limit can always be overwritten.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('StateTrieMigration.continue_migrate') === 'b2f02d34da1cfa1cd27ee6c14c8010fb2327197d372a167b1dff344d7c934130'
    }

    /**
     * Continue the migration for the given `limits`.
     * 
     * The dispatch origin of this call can be any signed account.
     * 
     * This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
     * Upon successful execution, the transaction fee is returned.
     * 
     * The (potentially over-estimated) of the byte length of all the data read must be
     * provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
     * that executing the current `MigrationTask` with the given `limits` will not exceed
     * `real_size_upper` bytes of read data.
     * 
     * The `witness_task` is merely a helper to prevent the caller from being slashed or
     * generally trigger a migration that they do not intend. This parameter is just a message
     * from caller, saying that they believed `witness_task` was the last state of the
     * migration, and they only wish for their transaction to do anything, if this assumption
     * holds. In case `witness_task` does not match, the transaction fails.
     * 
     * Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
     * recommended way of doing this is to pass a `limit` that only bounds `count`, as the
     * `size` limit can always be overwritten.
     */
    get asV61(): {limits: v61.MigrationLimits, realSizeUpper: number, witnessTask: v61.MigrationTask} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationControlAutoMigrationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.control_auto_migration')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Control the automatic migration.
     * 
     * The dispatch origin of this call must be [`Config::ControlOrigin`].
     */
    get isV61(): boolean {
        return this._chain.getCallHash('StateTrieMigration.control_auto_migration') === '934f71f83c3d30d65f34b1d15aea2aaeb23d94da8797b082432d425da6f8bb95'
    }

    /**
     * Control the automatic migration.
     * 
     * The dispatch origin of this call must be [`Config::ControlOrigin`].
     */
    get asV61(): {maybeConfig: (v61.MigrationLimits | undefined)} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationForceSetProgressCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.force_set_progress')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Forcefully set the progress the running migration.
     * 
     * This is only useful in one case: the next key to migrate is too big to be migrated with
     * a signed account, in a parachain context, and we simply want to skip it. A reasonable
     * example of this would be `:code:`, which is both very expensive to migrate, and commonly
     * used, so probably it is already migrated.
     * 
     * In case you mess things up, you can also, in principle, use this to reset the migration
     * process.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('StateTrieMigration.force_set_progress') === '66e944fe95dd27767f5503dcc93c3e72db64c1c21a9b9329d0bfa457a225e8a3'
    }

    /**
     * Forcefully set the progress the running migration.
     * 
     * This is only useful in one case: the next key to migrate is too big to be migrated with
     * a signed account, in a parachain context, and we simply want to skip it. A reasonable
     * example of this would be `:code:`, which is both very expensive to migrate, and commonly
     * used, so probably it is already migrated.
     * 
     * In case you mess things up, you can also, in principle, use this to reset the migration
     * process.
     */
    get asV61(): {progressTop: v61.Progress, progressChild: v61.Progress} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationMigrateCustomChildCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.migrate_custom_child')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrate the list of child keys by iterating each of them one by one.
     * 
     * All of the given child keys must be present under one `child_root`.
     * 
     * This does not affect the global migration process tracker ([`MigrationProcess`]), and
     * should only be used in case any keys are leftover due to a bug.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('StateTrieMigration.migrate_custom_child') === '517d7428953961fc7fea1fe19c15bc0f7e2b3e28a22d0de760a0a82b88ea31ee'
    }

    /**
     * Migrate the list of child keys by iterating each of them one by one.
     * 
     * All of the given child keys must be present under one `child_root`.
     * 
     * This does not affect the global migration process tracker ([`MigrationProcess`]), and
     * should only be used in case any keys are leftover due to a bug.
     */
    get asV61(): {root: Uint8Array, childKeys: Uint8Array[], totalSize: number} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationMigrateCustomTopCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.migrate_custom_top')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrate the list of top keys by iterating each of them one by one.
     * 
     * This does not affect the global migration process tracker ([`MigrationProcess`]), and
     * should only be used in case any keys are leftover due to a bug.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('StateTrieMigration.migrate_custom_top') === 'ed5f519b60946b2923a3b009da16ae71d840d26cb7a9a2b60d9f58514b83d2d2'
    }

    /**
     * Migrate the list of top keys by iterating each of them one by one.
     * 
     * This does not affect the global migration process tracker ([`MigrationProcess`]), and
     * should only be used in case any keys are leftover due to a bug.
     */
    get asV61(): {keys: Uint8Array[], witnessSize: number} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationSetSignedMaxLimitsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.set_signed_max_limits')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the maximum limit of the signed migration.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('StateTrieMigration.set_signed_max_limits') === 'fbb1ea8c834eda6d60b8135a5aabb387db906b08c352e04e25fc4e50ec44ed65'
    }

    /**
     * Set the maximum limit of the signed migration.
     */
    get asV61(): {limits: v61.MigrationLimits} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class StaticPriceProviderForceSetPriceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StaticPriceProvider.force_set_price')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Privileged action used to set the active native currency price.
     * 
     * This is a temporary solution before oracle is implemented & operational.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('StaticPriceProvider.force_set_price') === '301ba8b7305f6fbc386aa2d1a6e3d36df9b7e914e6804384bb965c1ffa2519fb'
    }

    /**
     * Privileged action used to set the active native currency price.
     * 
     * This is a temporary solution before oracle is implemented & operational.
     */
    get asV79(): {price: bigint} {
        assert(this.isV79)
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
    get isV1(): boolean {
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
    get asV1(): {new: v1.MultiAddress} {
        assert(this.isV1)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '9b483344ad9f5b43b52e71b2ce0cf6b9b405830017faf465833ffc3bc4af8ecc'
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
    get asV1(): {call: v1.Call} {
        assert(this.isV1)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '0951ab505499525ce6ee1893712852ca9ae508179a56451377f7b1f769bfb1b6'
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
    get asV3(): {call: v3.Call} {
        assert(this.isV3)
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
    get isV4(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'b3c15b706a46876bb8e6902b1e5b88fa18801317806459d017fce580a9b6e83e'
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
    get asV4(): {call: v4.Call} {
        assert(this.isV4)
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
    get isV9(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'ee018461b7a49e66cf4a79d5142087ee508d1dd33695c03734a1a13b9bff8203'
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
    get asV9(): {call: v9.Call} {
        assert(this.isV9)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'ac20dbfea877aedd5f3ebd2f5fd027aaac524262abec0dc872ee349152ef5625'
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
    get asV12(): {call: v12.Call} {
        assert(this.isV12)
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
    get isV13(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'ed81eacf87443e868aa1c8a3fea6fcb7be77161126322f6291c6e3eaccf5e444'
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
    get asV13(): {call: v13.Call} {
        assert(this.isV13)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '22eee1dcdda49a30cfb35e9008d84996671a570131c2c4380f97ffac704af9fe'
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
    get asV15(): {call: v15.Call} {
        assert(this.isV15)
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
    get isV16(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '7926f0ea397024f66b33ed7a6dca2a3c56c12e2318cbbe3c3a52196b26d4141f'
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
    get asV16(): {call: v16.Call} {
        assert(this.isV16)
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
    get isV17(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '6a8d7cac4927ff50e31f2c48c41edcd1f8ec63982b5e47c991902b92fed009ec'
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
    get asV17(): {call: v17.Call} {
        assert(this.isV17)
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
    get isV23(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '00641d0c8febb07db3872b6337bfdfd296c6a0627208b0f7aeaf02ee5a36a2c2'
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
    get asV23(): {call: v23.Call} {
        assert(this.isV23)
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
    get isV30(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '794a797d7b14ec51c9adc00c8ec4cb90324feb30a83149afc595553c2931959e'
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
    get asV30(): {call: v30.Call} {
        assert(this.isV30)
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
        return this._chain.getCallHash('Sudo.sudo') === 'efaf144d295064ccb0777a83c893f8318a315904165adedfe1e6ef052407e99b'
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
    get isV43(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '887c531110d854b0fa23c2ff07c04259c04220d1193bd552e4e73b7c6fdc8888'
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
    get asV43(): {call: v43.Call} {
        assert(this.isV43)
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
    get isV49(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'b9b56d9c181e4816c67fc5ef1198d3ae3d85940e38b055b8e40f3fd5878ebe6d'
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
    get asV49(): {call: v49.Call} {
        assert(this.isV49)
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
    get isV52(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'e1a943fb77b10238384e0d3605110167ce1d80312e82583b522db4bb769602c2'
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
    get asV52(): {call: v52.Call} {
        assert(this.isV52)
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
    get isV55(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '9c0a641655908029d83c00e36b45cd4f95ee03292546121d1c0981b033f995ad'
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
    get asV55(): {call: v55.Call} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'b41644731dfb2424bf6f61282cf521c6a99eaf832556af9b1fb3f7d97f07559e'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV61(): {call: v61.Call} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '5c8c7b0f2761057aca296b2e833dd91d7303716754d987129eb05908a6763094'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV64(): {call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '1143d7fc258ca5def7c83a86a9dbfb9769da3f9b43e79c4e4b587dde2918d3cf'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV66(): {call: v66.Call} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '741794ba6f2299cebfe46964e6a07356485d8d899531ce861bf692a861f885e1'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV68(): {call: v68.Call} {
        assert(this.isV68)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '9206ef7bc08f15bd9b7ffeeb630a34524a36f648570cb4d56342e137b4359f4d'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV70(): {call: v70.Call} {
        assert(this.isV70)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'ca359d9c2ab98184d47bd772012af113f76cd46f151dfaac167bd70f0a1fe62d'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV72(): {call: v72.Call} {
        assert(this.isV72)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '5a75855b6da15d66bb93765335eeb8c34ad2c4c65419a3b4cbd50b8ed3b1d18c'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV74(): {call: v74.Call} {
        assert(this.isV74)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'ae4185647291995c948b84904e1327f9ee264450f714237a0c3813e5fbdd17c5'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV77(): {call: v77.Call} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '69df362198616be6a61f21ab8647c71e60bb1ac5700ba61838d3993f0c4dc548'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV79(): {call: v79.Call} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::sudo`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '4fbd5299b02a7efc743f1a56ac262d8a07faa3830efe209ff7942703175f2ab9'
    }

    /**
     * See [`Pallet::sudo`].
     */
    get asV82(): {call: v82.Call} {
        assert(this.isV82)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '70dec794385f058c9d2ee32cf6127ae94c47e1fdd11a5cc48c74ad0b8af61f96'
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
    get asV1(): {who: v1.MultiAddress, call: v1.Call} {
        assert(this.isV1)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'c82aa0034dfc2ed23f2b2cd940a6158036b93c0c18708ee59d6ac18fcd337c3c'
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
    get asV3(): {who: v3.MultiAddress, call: v3.Call} {
        assert(this.isV3)
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
    get isV4(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '565a0863c666a163eef00e8b46958576423fac655534521388ee61331bae989a'
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
    get asV4(): {who: v4.MultiAddress, call: v4.Call} {
        assert(this.isV4)
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
    get isV9(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '1d587fcacc808b8e4e84b48f941ea407c48e92e35999f7dc70a3c732905ba182'
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
    get asV9(): {who: v9.MultiAddress, call: v9.Call} {
        assert(this.isV9)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'bb0cb1ec3a8c2e1436429715601d0996a2789137e76f5b9467e4ce677b070a52'
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
    get asV12(): {who: v12.MultiAddress, call: v12.Call} {
        assert(this.isV12)
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
    get isV13(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '9cb8ca34039e23ca07a7ec169124d80ec55c5b1b42e70ae9740fbb186a939869'
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
    get asV13(): {who: v13.MultiAddress, call: v13.Call} {
        assert(this.isV13)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'fe1753f7bd04bf4dada05afc65f70bca3c72327ec3a4bc1e02ef749263a1b981'
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
    get asV15(): {who: v15.MultiAddress, call: v15.Call} {
        assert(this.isV15)
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
    get isV16(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '2427aabb94d5e6a4fe18ba4f1d53dd96447ab4f15cb92c2d53d7eccd71773cdf'
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
    get asV16(): {who: v16.MultiAddress, call: v16.Call} {
        assert(this.isV16)
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
    get isV17(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '4bf1810152ed25b0084166501d2aedb9591ff39396c1b050600952e32e8d71d0'
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
    get asV17(): {who: v17.MultiAddress, call: v17.Call} {
        assert(this.isV17)
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
    get isV23(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '5cc301c3fc92cbb647b79154914662136be76ae7cd2be0f24c5d633c592ad09a'
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
    get asV23(): {who: v23.MultiAddress, call: v23.Call} {
        assert(this.isV23)
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
    get isV30(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'b259b05d6452b8cedb98305e6958a26170cf51eceb0c028f7d66366fe6e134be'
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
    get asV30(): {who: v30.MultiAddress, call: v30.Call} {
        assert(this.isV30)
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
        return this._chain.getCallHash('Sudo.sudo_as') === 'de87dd6cd9913794be25246146f6a3ec66207a10d813e359596c8420e3dcf3c3'
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
    get isV43(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'd418e77978726545891a43a9ae61bde0a1b59b96d00f7ff957f05fc7c10f0d33'
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
    get asV43(): {who: v43.MultiAddress, call: v43.Call} {
        assert(this.isV43)
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
    get isV49(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '3bfb8fea498954280ce8552ec80fa0a2e7c57c4f7bffe9fdc120941b15efc211'
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
    get asV49(): {who: v49.MultiAddress, call: v49.Call} {
        assert(this.isV49)
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
    get isV52(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'b35e5755b6c588522c64f13897fcf58d99117d23cf4a8f305620860440e6292e'
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
    get asV52(): {who: v52.MultiAddress, call: v52.Call} {
        assert(this.isV52)
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
    get isV55(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'abf3dc62c103053d9e981b26c5341689f260d2185092c0aa930ecf31a673698f'
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
    get asV55(): {who: v55.MultiAddress, call: v55.Call} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'a685d39826ef28c16688b8172b7234ec65ab96d54c721c4604df0e09141c3a0f'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV61(): {who: v61.MultiAddress, call: v61.Call} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '95089b2809bf42ed4675089395fc75e7e9efa05504fe867f6d4101e96d93420d'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV64(): {who: v64.MultiAddress, call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '90e17957cbd293cd92b2bf14e354072d6edf61893aad843ef561b5f3ca5d89d9'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV66(): {who: v66.MultiAddress, call: v66.Call} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '9bbdd8b53a49378d8d29e830aa13c9384ed71c855414064c3555cc339c4a5b1e'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV68(): {who: v68.MultiAddress, call: v68.Call} {
        assert(this.isV68)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'c3e69b76b1edd854509f2a53bf9d6304a07553a6c2d43feff5544ad3f011756d'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV70(): {who: v70.MultiAddress, call: v70.Call} {
        assert(this.isV70)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '5f1292665c95603de3768f7685dc5d824328228e3ad2f7045712cbd97a983d60'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV72(): {who: v72.MultiAddress, call: v72.Call} {
        assert(this.isV72)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'da55197f03fff1c6fc774d1a17a9e7bd5247d632e0a143944ab2ee5b337f6e17'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV74(): {who: v74.MultiAddress, call: v74.Call} {
        assert(this.isV74)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'c52b9f6b3a45ccc73d87ecb9a4da79e4bbc5e8f3431ac8f19b450d3389433057'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV77(): {who: v77.MultiAddress, call: v77.Call} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '530a5bab88697f68130e34a293fcd0792707063d809b2d150aec56df2405b139'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV79(): {who: v79.MultiAddress, call: v79.Call} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::sudo_as`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '139b51be1658046e3f57102c6130a7c62ee4ba648dad20c57edcd89d1fabad5a'
    }

    /**
     * See [`Pallet::sudo_as`].
     */
    get asV82(): {who: v82.MultiAddress, call: v82.Call} {
        assert(this.isV82)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'b35da9037404a913125032eb1da81270f2e39916f6ba5bbdf1e4e844c436f1fb'
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
    get asV1(): {call: v1.Call, weight: bigint} {
        assert(this.isV1)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '022e556c3d5bce1813171f91cee282a65dda8e5f767a80b83d795136ea69ef73'
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
    get asV3(): {call: v3.Call, weight: bigint} {
        assert(this.isV3)
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
    get isV4(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '5adf3aca3531890155895ebf3df55914580aa936f1b4dcac6177b89a570c9dd1'
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
    get asV4(): {call: v4.Call, weight: bigint} {
        assert(this.isV4)
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
    get isV9(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'b7c1471d45116ebfd187d77205dd4d2cfbe2e352d3f26eec46491967328a0b70'
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
    get asV9(): {call: v9.Call, weight: bigint} {
        assert(this.isV9)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'b3e38158cada7e0abb315c9ee17164eee957db505ec0ac04a0b5314e0a563304'
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
    get asV12(): {call: v12.Call, weight: bigint} {
        assert(this.isV12)
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
    get isV13(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '53ab4522694414d0763ceeba9813a0215a2df860e8b10d1b23c932c3bf0da6a7'
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
    get asV13(): {call: v13.Call, weight: bigint} {
        assert(this.isV13)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '1747a53161b1cf2d1c59c39ab7ea2d3b601df4ba9ed635cd66d83e8f552eabd8'
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
    get asV15(): {call: v15.Call, weight: bigint} {
        assert(this.isV15)
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
    get isV16(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'ef7838bc9143f5ad8f25b178586992272b9c3d8255a42f943bc9266bdf7f2db9'
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
    get asV16(): {call: v16.Call, weight: bigint} {
        assert(this.isV16)
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
    get isV17(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '249b1962585044ca9892108cc57b19642c1c6cbbeba0d4eeb683948b5c549ea9'
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
    get asV17(): {call: v17.Call, weight: bigint} {
        assert(this.isV17)
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
    get isV23(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '87d88c31a717e7cf2bf53d71b59b5d853a38bf0cc3c65b6636abe94d210879c0'
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
    get asV23(): {call: v23.Call, weight: bigint} {
        assert(this.isV23)
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
    get isV30(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '8ac9e4598c5091d51e012441b547192f22c769b08e330db2dba76459a097442b'
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
    get asV30(): {call: v30.Call, weight: bigint} {
        assert(this.isV30)
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
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'e410ffde8c87f21c00a967ffbc885bea0f38a9277078eace534ed325298dc42b'
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
    get isV43(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '8b7bd7ab5b7f2e2ba74cd7c7e3954d398ba26e4ecaf45534d84efef6c532b02a'
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
    get asV43(): {call: v43.Call, weight: v43.Weight} {
        assert(this.isV43)
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
    get isV49(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '9f91c2d64919f690870e3a6ba5a73897f49ad212ff42bf4520f5253068ee7b6a'
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
    get asV49(): {call: v49.Call, weight: v49.Weight} {
        assert(this.isV49)
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
    get isV52(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'e280ed223f426e6f27843c2d23244c134199a6282f7a10f2edccae37f595cacf'
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
    get asV52(): {call: v52.Call, weight: v52.Weight} {
        assert(this.isV52)
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
    get isV55(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '2cdfab42d7c5be16eb01d2de6df06ebe1fd8409d07b410b9faa2b8ca41afa654'
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
    get asV55(): {call: v55.Call, weight: v55.Weight} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '49dd13782465c7651cbe6344a1d0b14fc64993f3177e1b8d70bae64b3c9767b0'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV61(): {call: v61.Call, weight: v61.Weight} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'f036af93757067e87256342c5593b47f0935fdc66c7d7e21ba50a323ac6043dc'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV64(): {call: v64.Call, weight: v64.Weight} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'f1cb0b65e6c9f41eec93c6786438f508b8c7ff75a99443c1501d61b2e8c1298c'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV66(): {call: v66.Call, weight: v66.Weight} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '6a742e622725b9b9999ce3c892e28cbbae167c26ed8c59df754a1d6bf3818929'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV68(): {call: v68.Call, weight: v68.Weight} {
        assert(this.isV68)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'f7846c44467cbedfa0b01d449b9742e35121b3892542d31239529505c33c66e2'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV70(): {call: v70.Call, weight: v70.Weight} {
        assert(this.isV70)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '8bd03f3bdccd1297f303c0c01f36a76c189ece606fdb6e97ed795af589851c68'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV72(): {call: v72.Call, weight: v72.Weight} {
        assert(this.isV72)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '0656ae61ea154b16384a65bfdbeb855ab253bfac37496d2d7c57e68895614e80'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV74(): {call: v74.Call, weight: v74.Weight} {
        assert(this.isV74)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '8f87bcbe9f1d1e98ee71d8604990a5e6ee39e6f79f16ce8282e27f531452b0d4'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV77(): {call: v77.Call, weight: v77.Weight} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '3348ceacae08703870a5ceda5d4ca6d7f727a8c88cd7ee8ac2e97e150be5e416'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV79(): {call: v79.Call, weight: v79.Weight} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'df811cb05a7a6f890109ac03e9213f7defa915019d715b28a37cff722e2cd66d'
    }

    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    get asV82(): {call: v82.Call, weight: v82.Weight} {
        assert(this.isV82)
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
     * A dispatch that will fill the block weight up to the given ratio.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
    }

    /**
     * A dispatch that will fill the block weight up to the given ratio.
     */
    get asV1(): {ratio: number} {
        assert(this.isV1)
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
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     * 
     * # <weight>
     * - `O(P)` where `P` amount of keys with prefix `prefix`
     * - `P` storage deletions.
     * - Base Weight: 0.834 * P µs
     * - Writes: Number of subkeys + 1
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
    }

    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     * 
     * # <weight>
     * - `O(P)` where `P` amount of keys with prefix `prefix`
     * - `P` storage deletions.
     * - Base Weight: 0.834 * P µs
     * - Writes: Number of subkeys + 1
     * # </weight>
     */
    get asV1(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV1)
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
     * Kill some items from storage.
     * 
     * # <weight>
     * - `O(IK)` where `I` length of `keys` and `K` length of one key
     * - `I` storage deletions.
     * - Base Weight: .378 * i µs
     * - Writes: Number of items
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
    }

    /**
     * Kill some items from storage.
     * 
     * # <weight>
     * - `O(IK)` where `I` length of `keys` and `K` length of one key
     * - `I` storage deletions.
     * - Base Weight: .378 * i µs
     * - Writes: Number of items
     * # </weight>
     */
    get asV1(): {keys: Uint8Array[]} {
        assert(this.isV1)
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
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    get asV1(): {remark: Uint8Array} {
        assert(this.isV1)
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
     * 
     * # <weight>
     * - `O(b)` where b is the length of the remark.
     * - 1 event.
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark and emit event.
     * 
     * # <weight>
     * - `O(b)` where b is the length of the remark.
     * - 1 event.
     * # </weight>
     */
    get asV1(): {remark: Uint8Array} {
        assert(this.isV1)
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
     * Set the new changes trie configuration.
     * 
     * # <weight>
     * - `O(1)`
     * - 1 storage write or delete (codec `O(1)`).
     * - 1 call to `deposit_log`: Uses `append` API, so O(1)
     * - Base Weight: 7.218 µs
     * - DB Weight:
     *     - Writes: Changes Trie, System Digest
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
    }

    /**
     * Set the new changes trie configuration.
     * 
     * # <weight>
     * - `O(1)`
     * - 1 storage write or delete (codec `O(1)`).
     * - 1 call to `deposit_log`: Uses `append` API, so O(1)
     * - Base Weight: 7.218 µs
     * - DB Weight:
     *     - Writes: Changes Trie, System Digest
     * # </weight>
     */
    get asV1(): {changesTrieConfig: (v1.ChangesTrieConfiguration | undefined)} {
        assert(this.isV1)
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
     * Set the new runtime code.
     * 
     * # <weight>
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
     *   expensive).
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime, but generally this is very
     * expensive. We will treat this as a full block.
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code.
     * 
     * # <weight>
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
     *   expensive).
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime, but generally this is very
     * expensive. We will treat this as a full block.
     * # </weight>
     */
    get asV1(): {code: Uint8Array} {
        assert(this.isV1)
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
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * # <weight>
     * - `O(C)` where `C` length of `code`
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime. We will treat this as a full
     * block. # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * # <weight>
     * - `O(C)` where `C` length of `code`
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime. We will treat this as a full
     * block. # </weight>
     */
    get asV1(): {code: Uint8Array} {
        assert(this.isV1)
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
     * Set the number of pages in the WebAssembly environment's heap.
     * 
     * # <weight>
     * - `O(1)`
     * - 1 storage write.
     * - Base Weight: 1.405 µs
     * - 1 write to HEAP_PAGES
     * - 1 digest item
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
    }

    /**
     * Set the number of pages in the WebAssembly environment's heap.
     * 
     * # <weight>
     * - `O(1)`
     * - 1 storage write.
     * - Base Weight: 1.405 µs
     * - 1 write to HEAP_PAGES
     * - 1 digest item
     * # </weight>
     */
    get asV1(): {pages: bigint} {
        assert(this.isV1)
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
     * Set some items of storage.
     * 
     * # <weight>
     * - `O(I)` where `I` length of `items`
     * - `I` storage writes (`O(1)`).
     * - Base Weight: 0.568 * i µs
     * - Writes: Number of items
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
    }

    /**
     * Set some items of storage.
     * 
     * # <weight>
     * - `O(I)` where `I` length of `items`
     * - `I` storage writes (`O(1)`).
     * - Base Weight: 0.568 * i µs
     * - Writes: Number of items
     * # </weight>
     */
    get asV1(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV1)
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
     * Set the current time.
     * 
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     * 
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     * 
     * The dispatch origin for this call must be `Inherent`.
     * 
     * # <weight>
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
    }

    /**
     * Set the current time.
     * 
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     * 
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     * 
     * The dispatch origin for this call must be `Inherent`.
     * 
     * # <weight>
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     * # </weight>
     */
    get asV1(): {now: bigint} {
        assert(this.isV1)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '173039646e0827c3bf7e38ebb130cad28dfa2b2158913c39393d9b2641d63918'
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
    get asV1(): {index: number, call: v1.Call} {
        assert(this.isV1)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '14a6388d7b41f87684b8a0b58f203ca64450f1217ca51985aa81bd056f21d635'
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
    get asV3(): {index: number, call: v3.Call} {
        assert(this.isV3)
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
    get isV4(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '7f9940c026571850dc3b7b52b2d9202a629cbdf2df1ff9d3563b55073dd4cbdc'
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
    get asV4(): {index: number, call: v4.Call} {
        assert(this.isV4)
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
    get isV9(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '8c20b36f6b3d9dcc1bc2abcd91c92c98ccbd3e63f01df027517b5243aae80756'
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
    get asV9(): {index: number, call: v9.Call} {
        assert(this.isV9)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'd814523462da1762168a6270e1775ec7496df6b9c43cce05af1d4b99fd6653b9'
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
    get asV12(): {index: number, call: v12.Call} {
        assert(this.isV12)
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
    get isV13(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '53f72835db1486a9ebd4555b7c3cfe0841bc88e0ffe44e5db7b475630d5eaf36'
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
    get asV13(): {index: number, call: v13.Call} {
        assert(this.isV13)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '557c56545ac773c6956bbc51e895300a308ef1c0721deac92454980023b6fd60'
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
    get asV15(): {index: number, call: v15.Call} {
        assert(this.isV15)
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
    get isV16(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '18bd6418771f3017842c481508b64d42e9bb7e067b381362509629775cd6a4f8'
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
    get asV16(): {index: number, call: v16.Call} {
        assert(this.isV16)
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
    get isV17(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '70a701c190bc95a25e8551f9b7099be62972f51ad56a651851269af75e0825d0'
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
    get asV17(): {index: number, call: v17.Call} {
        assert(this.isV17)
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
    get isV23(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '74dc66067dc21ee494ddb6f9389b3a762c93f2fd66743b675a657f1da3281c5f'
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
    get asV23(): {index: number, call: v23.Call} {
        assert(this.isV23)
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
    get isV30(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '90d543309ea14786d14c6e983e92d7eb0fdf8e5ebb2f7853ac4a9dc973d4141d'
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
    get asV30(): {index: number, call: v30.Call} {
        assert(this.isV30)
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
        return this._chain.getCallHash('Utility.as_derivative') === 'de7865e309a0c8c83c698e3b710bf7795f43c7b868deca2d7e7583f2ba2a2a0e'
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
    get isV43(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'cfedcb5a5ee91cc8138eec5308649947df724c80b6a76fc049b793b0e646234f'
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
    get asV43(): {index: number, call: v43.Call} {
        assert(this.isV43)
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
    get isV49(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '1d54e19a16559417a9153e51a6612d01aaa0c77e1eb92e62b7f45327bec14e83'
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
    get asV49(): {index: number, call: v49.Call} {
        assert(this.isV49)
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
    get isV52(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '213234245219ade32345cdce03aa69a46802d33136e060a95c443f593e5fc3b0'
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
    get asV52(): {index: number, call: v52.Call} {
        assert(this.isV52)
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
    get isV55(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'cfa05a0f06727cedf61230476024efafe72c8c7014d75e0a15cf5a85744a4b58'
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
    get asV55(): {index: number, call: v55.Call} {
        assert(this.isV55)
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
    get isV61(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'd0bc8b66dd00938435c5594626e04d00583165be813906602b60498395405764'
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
    get asV61(): {index: number, call: v61.Call} {
        assert(this.isV61)
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
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '0fb14216ede5abe155b479b7b3ebf897b43f5ea980e5c976bdd2122812e1a5de'
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
    get asV64(): {index: number, call: v64.Call} {
        assert(this.isV64)
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
    get isV66(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'c5ddcf11ce9a74d878b10917ba94c10159e3deee56e96c8119a66aaa4017ce68'
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
    get asV66(): {index: number, call: v66.Call} {
        assert(this.isV66)
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
    get isV68(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'ed2feb65557d48f1cf96bb6fa87b1e5457cef35158ad74bbed5db5c6f6589fea'
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
    get asV68(): {index: number, call: v68.Call} {
        assert(this.isV68)
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
    get isV70(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'de012251e0757af9143e41e4fe1647e1b3f4c0247493200ef73ee4a05210f945'
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
    get asV70(): {index: number, call: v70.Call} {
        assert(this.isV70)
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
    get isV72(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'caed27f477fcd9657ae76cbc03542a7b469d54c94f3dec4ae29787b9aef4dcf1'
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
    get asV72(): {index: number, call: v72.Call} {
        assert(this.isV72)
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
    get isV74(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'd76ae176c6f7c6ebc9d1326fe12e84aae288717dd5e326fa61956ae5be3faaac'
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
    get asV74(): {index: number, call: v74.Call} {
        assert(this.isV74)
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
    get isV77(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'e9a3af0ce3f2e176f1fff3fd78c565a7a20d9a5ea7666421e6f01a733391a45c'
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
    get asV77(): {index: number, call: v77.Call} {
        assert(this.isV77)
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
    get isV79(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'a0da843c3e6ab276cc77185f91d327b04b50cbfa32ff3455234db579799d7bc3'
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
    get asV79(): {index: number, call: v79.Call} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::as_derivative`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'a80898552068f448df7d8fefe9f640222a8ddcb6721e9070eb54ce739277bc65'
    }

    /**
     * See [`Pallet::as_derivative`].
     */
    get asV82(): {index: number, call: v82.Call} {
        assert(this.isV82)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'f7a31aa7fd43395df72e4ef86af146af2195083ebb7c515395d7fa32373c6ce4'
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
    get asV1(): {calls: v1.Call[]} {
        assert(this.isV1)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'f7164570892fae8cb5e91a57889a786d06b0d38bd5fc799b63f33e7ba9aca7c2'
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
    get asV3(): {calls: v3.Call[]} {
        assert(this.isV3)
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
    get isV4(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'ac7080ce49a922cb95aab3049ab7095f4c37a3b7d1af5386fdcbe622482555ce'
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
    get asV4(): {calls: v4.Call[]} {
        assert(this.isV4)
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
    get isV9(): boolean {
        return this._chain.getCallHash('Utility.batch') === '316c0125a3079060396750fe8c9dff5be5d909553bed628e06bee42a2317eaa1'
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
    get asV9(): {calls: v9.Call[]} {
        assert(this.isV9)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'd13b9fe108386bee75027e25ba22eec63001c45e8552189804173027340e0566'
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
    get asV12(): {calls: v12.Call[]} {
        assert(this.isV12)
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
    get isV13(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'cc36084e3697ebea0259644d360d1d95252361605f644c56e8744223fc52dfb0'
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
    get asV13(): {calls: v13.Call[]} {
        assert(this.isV13)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Utility.batch') === '055f0f25a7e38ecb8506328609d8683e7852212e2ed9e4750b0f6cb0704e807f'
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
    get asV15(): {calls: v15.Call[]} {
        assert(this.isV15)
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
    get isV16(): boolean {
        return this._chain.getCallHash('Utility.batch') === '4ed3fed091102f6c5d9bcf25ae362149cf794c79a8f33f0759360951eeaaf172'
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
    get asV16(): {calls: v16.Call[]} {
        assert(this.isV16)
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
    get isV17(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'b2277faa738ad3f36fcd5952001a4bf2dc8a7a2c7431ce3ed2bfe5a6a414e51c'
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
    get asV17(): {calls: v17.Call[]} {
        assert(this.isV17)
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
    get isV23(): boolean {
        return this._chain.getCallHash('Utility.batch') === '6a070d765b6f9021b7df1b08b6a12d26b12593efe464a40c61eed5b6797781c3'
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
    get asV23(): {calls: v23.Call[]} {
        assert(this.isV23)
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
    get isV30(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'dba463d08420a1a25bc49e33eb2750afe0144c2ca912722fa0279084c8a49b26'
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
    get asV30(): {calls: v30.Call[]} {
        assert(this.isV30)
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
        return this._chain.getCallHash('Utility.batch') === 'b4976b2ecff2e4be8dcd7a303627392affbc39429a92d3ca7341452e734b4969'
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
    get isV43(): boolean {
        return this._chain.getCallHash('Utility.batch') === '78d88b17974b058d35156859fde773a21d7ce83b1c8a5fe06b08a8ee70062925'
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
    get asV43(): {calls: v43.Call[]} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get isV49(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'a6a6f8b78ccdad288bcc846ca2132312e5e8522504047abed046d2a7572f2268'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get asV49(): {calls: v49.Call[]} {
        assert(this.isV49)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get isV52(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'aad5ab5d3c9c1a3a7c68d76e8bad474c4828413cc19103a43cc43a5aa1bb598b'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get asV52(): {calls: v52.Call[]} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get isV55(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'c56c338ab496f825e7782dd5143a1fad9422c6c7ab40149c20443030a4f7daee'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
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
    get asV55(): {calls: v55.Call[]} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Utility.batch') === '2be4436ba340ce260d8405857e879b3162d088a182eede66deab6d619497b80c'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV61(): {calls: v61.Call[]} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'c924391e29b535abfb0f086c4679d52fe78625defe7ddc76ceab5190cb140df0'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV64(): {calls: v64.Call[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Utility.batch') === '1bd539bffed9fdf65ec0d9a5427392a31a404dd6c5c0490a4672d864ee05fa63'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV66(): {calls: v66.Call[]} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Utility.batch') === '9baef8a42d509d6b080cc176b561e929cc65fed1ba1a3f5a0cb1fa24a9027ae3'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV68(): {calls: v68.Call[]} {
        assert(this.isV68)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'd80e228f3c61c0f4ee3b4f00518ba9d2d33b6b4414da789d6f6bae0ef6645e65'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV70(): {calls: v70.Call[]} {
        assert(this.isV70)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'f8b13f8d31de4911df1f328d38b64e7cc6ab15c3f3c53dd76569f1b46f00226b'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV72(): {calls: v72.Call[]} {
        assert(this.isV72)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'f8c80a8fe5dfe938e130b467e5555f02a1e527a8f4cd12db14a0327819a3a0f7'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV74(): {calls: v74.Call[]} {
        assert(this.isV74)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Utility.batch') === '407a808d1499ee04194571e0728648ad1ce07de446ed75c75c9a4a4e99235d5a'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV77(): {calls: v77.Call[]} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Utility.batch') === '0853e60a40bc1a65ed74d7eab1af2985bee1b2629a1616b6ef5729920b82a065'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV79(): {calls: v79.Call[]} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::batch`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'c775b69279139461cc2a725ddea8799cbdae61c745ededa7272aeedc7d04b222'
    }

    /**
     * See [`Pallet::batch`].
     */
    get asV82(): {calls: v82.Call[]} {
        assert(this.isV82)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'f7a31aa7fd43395df72e4ef86af146af2195083ebb7c515395d7fa32373c6ce4'
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
    get asV1(): {calls: v1.Call[]} {
        assert(this.isV1)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'f7164570892fae8cb5e91a57889a786d06b0d38bd5fc799b63f33e7ba9aca7c2'
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
    get asV3(): {calls: v3.Call[]} {
        assert(this.isV3)
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
    get isV4(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'ac7080ce49a922cb95aab3049ab7095f4c37a3b7d1af5386fdcbe622482555ce'
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
    get asV4(): {calls: v4.Call[]} {
        assert(this.isV4)
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
    get isV9(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '316c0125a3079060396750fe8c9dff5be5d909553bed628e06bee42a2317eaa1'
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
    get asV9(): {calls: v9.Call[]} {
        assert(this.isV9)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'd13b9fe108386bee75027e25ba22eec63001c45e8552189804173027340e0566'
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
    get asV12(): {calls: v12.Call[]} {
        assert(this.isV12)
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
    get isV13(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'cc36084e3697ebea0259644d360d1d95252361605f644c56e8744223fc52dfb0'
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
    get asV13(): {calls: v13.Call[]} {
        assert(this.isV13)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '055f0f25a7e38ecb8506328609d8683e7852212e2ed9e4750b0f6cb0704e807f'
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
    get asV15(): {calls: v15.Call[]} {
        assert(this.isV15)
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
    get isV16(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '4ed3fed091102f6c5d9bcf25ae362149cf794c79a8f33f0759360951eeaaf172'
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
    get asV16(): {calls: v16.Call[]} {
        assert(this.isV16)
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
    get isV17(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'b2277faa738ad3f36fcd5952001a4bf2dc8a7a2c7431ce3ed2bfe5a6a414e51c'
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
    get asV17(): {calls: v17.Call[]} {
        assert(this.isV17)
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
    get isV23(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '6a070d765b6f9021b7df1b08b6a12d26b12593efe464a40c61eed5b6797781c3'
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
    get asV23(): {calls: v23.Call[]} {
        assert(this.isV23)
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
    get isV30(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'dba463d08420a1a25bc49e33eb2750afe0144c2ca912722fa0279084c8a49b26'
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
    get asV30(): {calls: v30.Call[]} {
        assert(this.isV30)
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
        return this._chain.getCallHash('Utility.batch_all') === 'b4976b2ecff2e4be8dcd7a303627392affbc39429a92d3ca7341452e734b4969'
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
    get isV43(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '78d88b17974b058d35156859fde773a21d7ce83b1c8a5fe06b08a8ee70062925'
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
    get asV43(): {calls: v43.Call[]} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV49(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'a6a6f8b78ccdad288bcc846ca2132312e5e8522504047abed046d2a7572f2268'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV49(): {calls: v49.Call[]} {
        assert(this.isV49)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV52(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'aad5ab5d3c9c1a3a7c68d76e8bad474c4828413cc19103a43cc43a5aa1bb598b'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV52(): {calls: v52.Call[]} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV55(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'c56c338ab496f825e7782dd5143a1fad9422c6c7ab40149c20443030a4f7daee'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV55(): {calls: v55.Call[]} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '2be4436ba340ce260d8405857e879b3162d088a182eede66deab6d619497b80c'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV61(): {calls: v61.Call[]} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'c924391e29b535abfb0f086c4679d52fe78625defe7ddc76ceab5190cb140df0'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV64(): {calls: v64.Call[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '1bd539bffed9fdf65ec0d9a5427392a31a404dd6c5c0490a4672d864ee05fa63'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV66(): {calls: v66.Call[]} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '9baef8a42d509d6b080cc176b561e929cc65fed1ba1a3f5a0cb1fa24a9027ae3'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV68(): {calls: v68.Call[]} {
        assert(this.isV68)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'd80e228f3c61c0f4ee3b4f00518ba9d2d33b6b4414da789d6f6bae0ef6645e65'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV70(): {calls: v70.Call[]} {
        assert(this.isV70)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'f8b13f8d31de4911df1f328d38b64e7cc6ab15c3f3c53dd76569f1b46f00226b'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV72(): {calls: v72.Call[]} {
        assert(this.isV72)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'f8c80a8fe5dfe938e130b467e5555f02a1e527a8f4cd12db14a0327819a3a0f7'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV74(): {calls: v74.Call[]} {
        assert(this.isV74)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '407a808d1499ee04194571e0728648ad1ce07de446ed75c75c9a4a4e99235d5a'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV77(): {calls: v77.Call[]} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '0853e60a40bc1a65ed74d7eab1af2985bee1b2629a1616b6ef5729920b82a065'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV79(): {calls: v79.Call[]} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::batch_all`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'c775b69279139461cc2a725ddea8799cbdae61c745ededa7272aeedc7d04b222'
    }

    /**
     * See [`Pallet::batch_all`].
     */
    get asV82(): {calls: v82.Call[]} {
        assert(this.isV82)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '94413b1bf257ce5bc3ef566206bfebb982c94be9e018b668f13d526c550f6b8b'
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
    get asV3(): {asOrigin: v3.OriginCaller, call: v3.Call} {
        assert(this.isV3)
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
    get isV4(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '7790aeeb62253147cb2e1194933d9dee2f531d1890dcd57b505e381a1eb7c6eb'
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
    get asV4(): {asOrigin: v4.OriginCaller, call: v4.Call} {
        assert(this.isV4)
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
    get isV9(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '4335d3b7c9c0e4811b2c5cac020f9deaa89c58193d9f4b9fc500508bdd2aacf4'
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
    get asV9(): {asOrigin: v9.OriginCaller, call: v9.Call} {
        assert(this.isV9)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '640f9b7104527f3028a0fdc1d5a6481ec78593635370d6c99972f6a89358b129'
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
    get asV12(): {asOrigin: v12.OriginCaller, call: v12.Call} {
        assert(this.isV12)
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
    get isV13(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '2af84f23a84f9368bd15d7116b13e1371d4ac65edfa7b4a462e8860461a8d77a'
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
    get asV13(): {asOrigin: v13.OriginCaller, call: v13.Call} {
        assert(this.isV13)
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
    get isV15(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '7853ba174297fbf6eb93b69a4d73067682e5cbcd3c1619ce279c500fcd58cfe0'
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
    get asV15(): {asOrigin: v15.OriginCaller, call: v15.Call} {
        assert(this.isV15)
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
    get isV16(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '613714c854c7b98f5b78f7e28b07c2e4bf8bc25bbbac05984699b051c147723a'
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
    get asV16(): {asOrigin: v16.OriginCaller, call: v16.Call} {
        assert(this.isV16)
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
    get isV17(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'e35be891a329ddfaf71cb33dd3c47fad2c7e9d71a6822d4029d1eabde1cda93e'
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
    get asV17(): {asOrigin: v17.OriginCaller, call: v17.Call} {
        assert(this.isV17)
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
    get isV23(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '54738621248faaaca82c14154c70472f816b70354710fe0da4d74d4fd1cf22d9'
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
    get asV23(): {asOrigin: v23.OriginCaller, call: v23.Call} {
        assert(this.isV23)
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
    get isV30(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'cc6d0f9e69c4cff9436a46dbb142dbb4e16972ffa930d68aefedb84b0a416a70'
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
    get asV30(): {asOrigin: v30.OriginCaller, call: v30.Call} {
        assert(this.isV30)
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
    get isV33(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'c6054431fcd579a680a37b64cff71573d03b4cd7f70f50083879b4ae00c8059f'
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
    get asV33(): {asOrigin: v33.OriginCaller, call: v33.Call} {
        assert(this.isV33)
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
    get isV43(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '815bd548972262a346cbe052266fe3781e46246cdf5d7d6b875a61215b6cebb7'
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
    get asV43(): {asOrigin: v43.OriginCaller, call: v43.Call} {
        assert(this.isV43)
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
    get isV49(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'bc0f27721f0bfc54762c6ade7d72116b10994231b789797c5d76dac0bed72d1b'
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
    get asV49(): {asOrigin: v49.OriginCaller, call: v49.Call} {
        assert(this.isV49)
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
    get isV52(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '46841da1aa1e267064e8383be2749ae3b5889c4a4bf1bc28a4e7db497b05515f'
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
    get asV52(): {asOrigin: v52.OriginCaller, call: v52.Call} {
        assert(this.isV52)
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
    get isV55(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '310fa8c0defdced97deb7fc4eef43ff45719ae0b5256d70061d7439979b342de'
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
    get asV55(): {asOrigin: v55.OriginCaller, call: v55.Call} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '1dceda002f21bfc23d53ac004518ad74452e8815eb7de76399c17a694e6c896d'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV61(): {asOrigin: v61.OriginCaller, call: v61.Call} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'c3f8ca45c12a6a54be5ac981d3ca709faad9e3442b482ae708cdc3a1cf6b4595'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV64(): {asOrigin: v64.OriginCaller, call: v64.Call} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '6ab5e936acea0123b0a420f1e2805b35dd0e76e0c2e015603824c3c1a407070b'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV66(): {asOrigin: v66.OriginCaller, call: v66.Call} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '74a69281ba03d222984137fccde4e297122ab697351dc04772ea925f2a75f2f6'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV68(): {asOrigin: v68.OriginCaller, call: v68.Call} {
        assert(this.isV68)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '2b971fe91ba4518e824836b9fea4289d815217d10f544786faa78fe7d90645b3'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV70(): {asOrigin: v70.OriginCaller, call: v70.Call} {
        assert(this.isV70)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '9ffc5055fe587136d2ed49564545fea2cd34e98060a727ae1844df50e4f46300'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV72(): {asOrigin: v72.OriginCaller, call: v72.Call} {
        assert(this.isV72)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'ae925d977abd654a03955a36afd54344808b6c2ee465d3faab33c99479a2ece3'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV74(): {asOrigin: v74.OriginCaller, call: v74.Call} {
        assert(this.isV74)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'b0524f0c2e0241d426b7862b89ee9b0912e7fee7ae186ab27a8c1c96e4baa003'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV77(): {asOrigin: v77.OriginCaller, call: v77.Call} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'b85a7c43037befc222da25e57c2387e1e05096d64864ec8a0491b5a1d115c5ec'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV79(): {asOrigin: v79.OriginCaller, call: v79.Call} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::dispatch_as`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '7934dd4f515387d9410544c40df025dfd04678aa1c6470f20e2b640dcf4340af'
    }

    /**
     * See [`Pallet::dispatch_as`].
     */
    get asV82(): {asOrigin: v82.OriginCaller, call: v82.Call} {
        assert(this.isV82)
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
    get isV23(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '6a070d765b6f9021b7df1b08b6a12d26b12593efe464a40c61eed5b6797781c3'
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
    get asV23(): {calls: v23.Call[]} {
        assert(this.isV23)
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
    get isV30(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'dba463d08420a1a25bc49e33eb2750afe0144c2ca912722fa0279084c8a49b26'
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
    get asV30(): {calls: v30.Call[]} {
        assert(this.isV30)
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
    get isV33(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'b4976b2ecff2e4be8dcd7a303627392affbc39429a92d3ca7341452e734b4969'
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
    get asV33(): {calls: v33.Call[]} {
        assert(this.isV33)
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
    get isV43(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '78d88b17974b058d35156859fde773a21d7ce83b1c8a5fe06b08a8ee70062925'
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
    get asV43(): {calls: v43.Call[]} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV49(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'a6a6f8b78ccdad288bcc846ca2132312e5e8522504047abed046d2a7572f2268'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV49(): {calls: v49.Call[]} {
        assert(this.isV49)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV52(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'aad5ab5d3c9c1a3a7c68d76e8bad474c4828413cc19103a43cc43a5aa1bb598b'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV52(): {calls: v52.Call[]} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV55(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'c56c338ab496f825e7782dd5143a1fad9422c6c7ab40149c20443030a4f7daee'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV55(): {calls: v55.Call[]} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '2be4436ba340ce260d8405857e879b3162d088a182eede66deab6d619497b80c'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV61(): {calls: v61.Call[]} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'c924391e29b535abfb0f086c4679d52fe78625defe7ddc76ceab5190cb140df0'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV64(): {calls: v64.Call[]} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '1bd539bffed9fdf65ec0d9a5427392a31a404dd6c5c0490a4672d864ee05fa63'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV66(): {calls: v66.Call[]} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '9baef8a42d509d6b080cc176b561e929cc65fed1ba1a3f5a0cb1fa24a9027ae3'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV68(): {calls: v68.Call[]} {
        assert(this.isV68)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'd80e228f3c61c0f4ee3b4f00518ba9d2d33b6b4414da789d6f6bae0ef6645e65'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV70(): {calls: v70.Call[]} {
        assert(this.isV70)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'f8b13f8d31de4911df1f328d38b64e7cc6ab15c3f3c53dd76569f1b46f00226b'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV72(): {calls: v72.Call[]} {
        assert(this.isV72)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'f8c80a8fe5dfe938e130b467e5555f02a1e527a8f4cd12db14a0327819a3a0f7'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV74(): {calls: v74.Call[]} {
        assert(this.isV74)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '407a808d1499ee04194571e0728648ad1ce07de446ed75c75c9a4a4e99235d5a'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV77(): {calls: v77.Call[]} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '0853e60a40bc1a65ed74d7eab1af2985bee1b2629a1616b6ef5729920b82a065'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV79(): {calls: v79.Call[]} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_batch`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'c775b69279139461cc2a725ddea8799cbdae61c745ededa7272aeedc7d04b222'
    }

    /**
     * See [`Pallet::force_batch`].
     */
    get asV82(): {calls: v82.Call[]} {
        assert(this.isV82)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityWithWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.with_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'e280ed223f426e6f27843c2d23244c134199a6282f7a10f2edccae37f595cacf'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV52(): {call: v52.Call, weight: v52.Weight} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV55(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '2cdfab42d7c5be16eb01d2de6df06ebe1fd8409d07b410b9faa2b8ca41afa654'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV55(): {call: v55.Call, weight: v55.Weight} {
        assert(this.isV55)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '49dd13782465c7651cbe6344a1d0b14fc64993f3177e1b8d70bae64b3c9767b0'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV61(): {call: v61.Call, weight: v61.Weight} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV64(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'f036af93757067e87256342c5593b47f0935fdc66c7d7e21ba50a323ac6043dc'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV64(): {call: v64.Call, weight: v64.Weight} {
        assert(this.isV64)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'f1cb0b65e6c9f41eec93c6786438f508b8c7ff75a99443c1501d61b2e8c1298c'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV66(): {call: v66.Call, weight: v66.Weight} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV68(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '6a742e622725b9b9999ce3c892e28cbbae167c26ed8c59df754a1d6bf3818929'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV68(): {call: v68.Call, weight: v68.Weight} {
        assert(this.isV68)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV70(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'f7846c44467cbedfa0b01d449b9742e35121b3892542d31239529505c33c66e2'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV70(): {call: v70.Call, weight: v70.Weight} {
        assert(this.isV70)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV72(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '8bd03f3bdccd1297f303c0c01f36a76c189ece606fdb6e97ed795af589851c68'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV72(): {call: v72.Call, weight: v72.Weight} {
        assert(this.isV72)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV74(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '0656ae61ea154b16384a65bfdbeb855ab253bfac37496d2d7c57e68895614e80'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV74(): {call: v74.Call, weight: v74.Weight} {
        assert(this.isV74)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV77(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '8f87bcbe9f1d1e98ee71d8604990a5e6ee39e6f79f16ce8282e27f531452b0d4'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV77(): {call: v77.Call, weight: v77.Weight} {
        assert(this.isV77)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV79(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '3348ceacae08703870a5ceda5d4ca6d7f727a8c88cd7ee8ac2e97e150be5e416'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV79(): {call: v79.Call, weight: v79.Weight} {
        assert(this.isV79)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::with_weight`].
     */
    get isV82(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'df811cb05a7a6f890109ac03e9213f7defa915019d715b28a37cff722e2cd66d'
    }

    /**
     * See [`Pallet::with_weight`].
     */
    get asV82(): {call: v82.Call, weight: v82.Weight} {
        assert(this.isV82)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingForceUpdateSchedulesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.force_update_schedules')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force update vesting schedule.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `schedule_index`: index of the schedule to update.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 1 Writes
     *     - Writes: Vesting Storage
     * # </weight>
     */
    get isV4(): boolean {
        return this._chain.getCallHash('Vesting.force_update_schedules') === 'dd9e4f70e62b1c318a1104907cf638d2b1e62db20cb35d46ba038ceb303b2c06'
    }

    /**
     * Force update vesting schedule.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `schedule_index`: index of the schedule to update.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 1 Writes
     *     - Writes: Vesting Storage
     * # </weight>
     */
    get asV4(): {target: v4.MultiAddress, schedules: v4.VestingInfo[]} {
        assert(this.isV4)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Vesting.force_vested_transfer') === 'fcf875d71f02d4cc33d9f1e8fc540430de8155209696fe7c9996d5d479e3d5c3'
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
    get asV1(): {source: v1.MultiAddress, target: v1.MultiAddress, schedule: v1.VestingInfo} {
        assert(this.isV1)
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
    get isV1(): boolean {
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
    get asV1(): {schedule1Index: number, schedule2Index: number} {
        assert(this.isV1)
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
     * Unlock any vested funds of the sender account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 2 Reads, 2 Writes
     *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Vesting.vest') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Unlock any vested funds of the sender account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 2 Reads, 2 Writes
     *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
     * # </weight>
     */
    get asV1(): null {
        assert(this.isV1)
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
    get isV1(): boolean {
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
    get asV1(): {target: v1.MultiAddress} {
        assert(this.isV1)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Vesting.vested_transfer') === 'e10524b55ce1ea33d3b1d4a103e874a701990c6659bea3d0b8c94248699fe975'
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
    get asV1(): {target: v1.MultiAddress, schedule: v1.VestingInfo} {
        assert(this.isV1)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV70(): boolean {
        return this._chain.getCallHash('XTokens.transfer') === '97bc2d9f512a6f81e88bd8cfc479e786e8ecdc310765af7b2065b603a6ccbb65'
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV70(): {currencyId: bigint, amount: bigint, dest: v70.VersionedMultiLocation, destWeightLimit: v70.V3WeightLimit} {
        assert(this.isV70)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV70(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset') === 'a87b2931a2da31f4548173df0d164afbd7f9413f0b0a9373582011906fdc8ac9'
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV70(): {asset: v70.VersionedMultiAsset, dest: v70.VersionedMultiLocation, destWeightLimit: v70.V3WeightLimit} {
        assert(this.isV70)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV70(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset_with_fee') === 'e1673c048436ca84c1278f4f2f8a12456b25e4911f3ec72d0295b843ed7a4c7f'
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV70(): {asset: v70.VersionedMultiAsset, fee: v70.VersionedMultiAsset, dest: v70.VersionedMultiLocation, destWeightLimit: v70.V3WeightLimit} {
        assert(this.isV70)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV70(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiassets') === 'b49a1a3bce05ffe02f0ac5efca4907e6bf7f963113419870a760a3013dc86495'
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV70(): {assets: v70.VersionedMultiAssets, feeItem: number, dest: v70.VersionedMultiLocation, destWeightLimit: v70.V3WeightLimit} {
        assert(this.isV70)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV70(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multicurrencies') === 'c92ac3edc367bf93a5c89e6f5654f80714242668ab72f1bba060d5173445b812'
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV70(): {currencies: [bigint, bigint][], feeItem: number, dest: v70.VersionedMultiLocation, destWeightLimit: v70.V3WeightLimit} {
        assert(this.isV70)
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
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV70(): boolean {
        return this._chain.getCallHash('XTokens.transfer_with_fee') === '1e8b3d77e2ec3172bc865cbb8b63bb0e57d016c4d5d46ff388c5c6c8207d4099'
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV70(): {currencyId: bigint, amount: bigint, fee: bigint, dest: v70.VersionedMultiLocation, destWeightLimit: v70.V3WeightLimit} {
        assert(this.isV70)
        return this._chain.decodeCall(this.call)
    }
}

export class XcAssetConfigChangeExistingAssetLocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcAssetConfig.change_existing_asset_location')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the xcm type mapping for a given asset Id.
     * The new asset type will inherit old `units per second` value.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('XcAssetConfig.change_existing_asset_location') === 'ed0ce0fa858d39a6023bbbbfd59032bf44136d520a0a6f81a4cded4ac11bb80f'
    }

    /**
     * Change the xcm type mapping for a given asset Id.
     * The new asset type will inherit old `units per second` value.
     */
    get asV23(): {newAssetLocation: v23.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change the xcm type mapping for a given asset Id.
     * The new asset type will inherit old `units per second` value.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('XcAssetConfig.change_existing_asset_location') === '43694a94d30a2ed4444632d4a9d9ff820d35b5ae12d8f990fce120b7c1cbb76a'
    }

    /**
     * Change the xcm type mapping for a given asset Id.
     * The new asset type will inherit old `units per second` value.
     */
    get asV52(): {newAssetLocation: v52.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change the xcm type mapping for a given asset Id.
     * The new asset type will inherit old `units per second` value.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('XcAssetConfig.change_existing_asset_location') === 'f8acf89641944c7f6bbb8bb4b250f82d285ad8e28b3922bd62f7bfd91ee79f49'
    }

    /**
     * Change the xcm type mapping for a given asset Id.
     * The new asset type will inherit old `units per second` value.
     */
    get asV61(): {newAssetLocation: v61.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class XcAssetConfigRegisterAssetLocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcAssetConfig.register_asset_location')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register new asset location to asset Id mapping.
     * 
     * This makes the asset eligible for XCM interaction.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('XcAssetConfig.register_asset_location') === 'a7ef28596eb9787bcb8463db3c1bb703b41036feab5e7df7a43e62cd5d164762'
    }

    /**
     * Register new asset location to asset Id mapping.
     * 
     * This makes the asset eligible for XCM interaction.
     */
    get asV23(): {assetLocation: v23.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register new asset location to asset Id mapping.
     * 
     * This makes the asset eligible for XCM interaction.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('XcAssetConfig.register_asset_location') === '6afa226dd6ef51e2491aa89e1af20f764edbcfa6cb5c66a68e1add2ea147948d'
    }

    /**
     * Register new asset location to asset Id mapping.
     * 
     * This makes the asset eligible for XCM interaction.
     */
    get asV52(): {assetLocation: v52.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register new asset location to asset Id mapping.
     * 
     * This makes the asset eligible for XCM interaction.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('XcAssetConfig.register_asset_location') === '73798f87f3ed8f7397710c12cb4db0e884a2cea8bdf732632e05e2e4563ca84b'
    }

    /**
     * Register new asset location to asset Id mapping.
     * 
     * This makes the asset eligible for XCM interaction.
     */
    get asV61(): {assetLocation: v61.VersionedMultiLocation, assetId: bigint} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class XcAssetConfigRemoveAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcAssetConfig.remove_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes all information related to asset, removing it from XCM support.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('XcAssetConfig.remove_asset') === '9fdf9d2d9a262ac1703c42d6937b61b6ff0f6eca6d215f40a7175d553aa66a65'
    }

    /**
     * Removes all information related to asset, removing it from XCM support.
     */
    get asV23(): {assetId: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }
}

export class XcAssetConfigRemovePaymentAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcAssetConfig.remove_payment_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes asset from the set of supported payment assets.
     * 
     * The asset can still be interacted with via XCM but it cannot be used to pay for execution time.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('XcAssetConfig.remove_payment_asset') === 'd26643923cd4bc9660d0022775958cdfc8de6b72e3e211a239383fa3f2e9175f'
    }

    /**
     * Removes asset from the set of supported payment assets.
     * 
     * The asset can still be interacted with via XCM but it cannot be used to pay for execution time.
     */
    get asV23(): {assetLocation: v23.VersionedMultiLocation} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Removes asset from the set of supported payment assets.
     * 
     * The asset can still be interacted with via XCM but it cannot be used to pay for execution time.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('XcAssetConfig.remove_payment_asset') === '0f54ca54e6b9765d1eb9502b7af2d9c7fa1d33ad23e7f72734019d7482201709'
    }

    /**
     * Removes asset from the set of supported payment assets.
     * 
     * The asset can still be interacted with via XCM but it cannot be used to pay for execution time.
     */
    get asV52(): {assetLocation: v52.VersionedMultiLocation} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Removes asset from the set of supported payment assets.
     * 
     * The asset can still be interacted with via XCM but it cannot be used to pay for execution time.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('XcAssetConfig.remove_payment_asset') === 'f972f3d7aa1481632a3438c7b2dca85ac510c32c4af5b355aba61e91601bef96'
    }

    /**
     * Removes asset from the set of supported payment assets.
     * 
     * The asset can still be interacted with via XCM but it cannot be used to pay for execution time.
     */
    get asV61(): {assetLocation: v61.VersionedMultiLocation} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class XcAssetConfigSetAssetUnitsPerSecondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcAssetConfig.set_asset_units_per_second')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the amount of units we are charging per execution second
     * for a given AssetLocation.
     */
    get isV23(): boolean {
        return this._chain.getCallHash('XcAssetConfig.set_asset_units_per_second') === '490ec4b913cca173b3062ffb47abfddf91ec93d62c3982a71511ff7584be5ee1'
    }

    /**
     * Change the amount of units we are charging per execution second
     * for a given AssetLocation.
     */
    get asV23(): {assetLocation: v23.VersionedMultiLocation, unitsPerSecond: bigint} {
        assert(this.isV23)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change the amount of units we are charging per execution second
     * for a given AssetLocation.
     */
    get isV52(): boolean {
        return this._chain.getCallHash('XcAssetConfig.set_asset_units_per_second') === 'a34e60741dd366231341aa564c552b379bca66ac0fcfb2574a504a30a8d31f2d'
    }

    /**
     * Change the amount of units we are charging per execution second
     * for a given AssetLocation.
     */
    get asV52(): {assetLocation: v52.VersionedMultiLocation, unitsPerSecond: bigint} {
        assert(this.isV52)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Change the amount of units we are charging per execution second
     * for a given AssetLocation.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('XcAssetConfig.set_asset_units_per_second') === 'fa7181661795d701f7fcfb27673eb0a4e964390417fb2ad460e78723bf877568'
    }

    /**
     * Change the amount of units we are charging per execution second
     * for a given AssetLocation.
     */
    get asV61(): {assetLocation: v61.VersionedMultiLocation, unitsPerSecond: bigint} {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getCallHash('XcmpQueue.resume_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Resumes all XCM executions for the XCMP queue.
     * 
     * Note that this function doesn't change the status of the in/out bound channels.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get asV15(): null {
        assert(this.isV15)
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
    get isV15(): boolean {
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
    get asV15(): {index: bigint, weightLimit: bigint} {
        assert(this.isV15)
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
    get isV43(): boolean {
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
    get asV43(): {index: bigint, weightLimit: v43.Weight} {
        assert(this.isV43)
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
    get isV49(): boolean {
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
    get asV49(): {index: bigint, weightLimit: bigint} {
        assert(this.isV49)
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
    get isV61(): boolean {
        return this._chain.getCallHash('XcmpQueue.service_overweight') === '80fae8875bf513efc1e06b7dac547fccfc1e5fc45888cc8afd9b43812cf51bf5'
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
    get asV61(): {index: bigint, weightLimit: v61.Weight} {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getCallHash('XcmpQueue.suspend_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get asV15(): null {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_drop_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue after which we drop any further
     * messages from the channel.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.drop_threshold`
     */
    get asV15(): {new: number} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_resume_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
     * message sending may recommence after it has been suspended.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.resume_threshold`
     */
    get asV15(): {new: number} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_suspend_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
     * suspend their sending.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.suspend_value`
     */
    get asV15(): {new: number} {
        assert(this.isV15)
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
    get isV15(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get asV15(): {new: bigint} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get isV43(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get asV43(): {new: v43.Weight} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get isV49(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get asV49(): {new: bigint} {
        assert(this.isV49)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get isV61(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get asV61(): {new: v61.Weight} {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get asV15(): {new: bigint} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get isV43(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get asV43(): {new: v43.Weight} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get isV49(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get asV49(): {new: bigint} {
        assert(this.isV49)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get asV61(): {new: v61.Weight} {
        assert(this.isV61)
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
    get isV15(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get asV15(): {new: bigint} {
        assert(this.isV15)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get isV43(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get asV43(): {new: v43.Weight} {
        assert(this.isV43)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get isV49(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get asV49(): {new: bigint} {
        assert(this.isV49)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get isV61(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get asV61(): {new: v61.Weight} {
        assert(this.isV61)
        return this._chain.decodeCall(this.call)
    }
}

export class XtokensTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Xtokens.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Xtokens.transfer') === '97bc2d9f512a6f81e88bd8cfc479e786e8ecdc310765af7b2065b603a6ccbb65'
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV66(): {currencyId: bigint, amount: bigint, dest: v66.VersionedMultiLocation, destWeightLimit: v66.V3WeightLimit} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }
}

export class XtokensTransferMultiassetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Xtokens.transfer_multiasset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV66(): boolean {
        return this._chain.getCallHash('Xtokens.transfer_multiasset') === 'a87b2931a2da31f4548173df0d164afbd7f9413f0b0a9373582011906fdc8ac9'
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV66(): {asset: v66.VersionedMultiAsset, dest: v66.VersionedMultiLocation, destWeightLimit: v66.V3WeightLimit} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }
}

export class XtokensTransferMultiassetWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Xtokens.transfer_multiasset_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV66(): boolean {
        return this._chain.getCallHash('Xtokens.transfer_multiasset_with_fee') === 'e1673c048436ca84c1278f4f2f8a12456b25e4911f3ec72d0295b843ed7a4c7f'
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV66(): {asset: v66.VersionedMultiAsset, fee: v66.VersionedMultiAsset, dest: v66.VersionedMultiLocation, destWeightLimit: v66.V3WeightLimit} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }
}

export class XtokensTransferMultiassetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Xtokens.transfer_multiassets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV66(): boolean {
        return this._chain.getCallHash('Xtokens.transfer_multiassets') === 'b49a1a3bce05ffe02f0ac5efca4907e6bf7f963113419870a760a3013dc86495'
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV66(): {assets: v66.VersionedMultiAssets, feeItem: number, dest: v66.VersionedMultiLocation, destWeightLimit: v66.V3WeightLimit} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }
}

export class XtokensTransferMulticurrenciesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Xtokens.transfer_multicurrencies')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV66(): boolean {
        return this._chain.getCallHash('Xtokens.transfer_multicurrencies') === 'c92ac3edc367bf93a5c89e6f5654f80714242668ab72f1bba060d5173445b812'
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV66(): {currencies: [bigint, bigint][], feeItem: number, dest: v66.VersionedMultiLocation, destWeightLimit: v66.V3WeightLimit} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }
}

export class XtokensTransferWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Xtokens.transfer_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get isV66(): boolean {
        return this._chain.getCallHash('Xtokens.transfer_with_fee') === '1e8b3d77e2ec3172bc865cbb8b63bb0e57d016c4d5d46ff388c5c6c8207d4099'
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
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
    get asV66(): {currencyId: bigint, amount: bigint, fee: bigint, dest: v66.VersionedMultiLocation, destWeightLimit: v66.V3WeightLimit} {
        assert(this.isV66)
        return this._chain.decodeCall(this.call)
    }
}
