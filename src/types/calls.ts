import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v100 from './v100'
import * as v104 from './v104'
import * as v108 from './v108'
import * as v115 from './v115'
import * as v125 from './v125'
import * as v138 from './v138'

export class AssetRegistryRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetRegistry.register')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a new asset.
     * 
     * Asset is identified by `name` and the name must not be used to register another asset.
     * 
     * New asset is given `NextAssetId` - sequential asset id
     * 
     * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
     * 
     * Emits 'Registered` event when successful.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('AssetRegistry.register') === '85c3f4e654b95e1a277959af5d46afbe3c65de3c598975e57ac53752a9ed3e05'
    }

    /**
     * Register a new asset.
     * 
     * Asset is identified by `name` and the name must not be used to register another asset.
     * 
     * New asset is given `NextAssetId` - sequential asset id
     * 
     * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
     * 
     * Emits 'Registered` event when successful.
     */
    get asV108(): {name: Uint8Array, assetType: v108.AssetType, existentialDeposit: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register a new asset.
     * 
     * Asset is identified by `name` and the name must not be used to register another asset.
     * 
     * New asset is given `NextAssetId` - sequential asset id
     * 
     * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
     * 
     * Emits 'Registered` event when successful.
     */
    get isV138(): boolean {
        return this._chain.getCallHash('AssetRegistry.register') === '22bbdfd997e8a48008aca95efa5da73ee2ab3dac78961d15cd6e401dc909bca1'
    }

    /**
     * Register a new asset.
     * 
     * Asset is identified by `name` and the name must not be used to register another asset.
     * 
     * New asset is given `NextAssetId` - sequential asset id
     * 
     * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
     * 
     * Emits 'Registered` event when successful.
     */
    get asV138(): {name: Uint8Array, assetType: v138.AssetType, existentialDeposit: bigint, assetId: (number | undefined), metadata: (v138.Metadata | undefined), location: (v138.AssetLocation | undefined)} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetRegistrySetLocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetRegistry.set_location')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set asset native location.
     * 
     * Adds mapping between native location and local asset id and vice versa.
     * 
     * Mainly used in XCM.
     * 
     * Emits `LocationSet` event when successful.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('AssetRegistry.set_location') === 'cb64e0569ed096dd70dc89ce4c0cffe3c6213a0117589ee8a65dbbd51f57caaa'
    }

    /**
     * Set asset native location.
     * 
     * Adds mapping between native location and local asset id and vice versa.
     * 
     * Mainly used in XCM.
     * 
     * Emits `LocationSet` event when successful.
     */
    get asV108(): {assetId: number, location: v108.AssetLocation} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetRegistrySetMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetRegistry.set_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set metadata for an asset.
     * 
     * - `asset_id`: Asset identifier.
     * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     * - `decimals`: The number of decimals this asset uses to represent one unit.
     * 
     * Emits `MetadataSet` event when successful.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('AssetRegistry.set_metadata') === '5733a2ab6f544e91ef9651644e4a8f3fc7257fa3a961ba51dd1f0c862b7a7a0a'
    }

    /**
     * Set metadata for an asset.
     * 
     * - `asset_id`: Asset identifier.
     * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     * - `decimals`: The number of decimals this asset uses to represent one unit.
     * 
     * Emits `MetadataSet` event when successful.
     */
    get asV108(): {assetId: number, symbol: Uint8Array, decimals: number} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class AssetRegistryUpdateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssetRegistry.update')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update registered asset.
     * 
     * Updates also mapping between name and asset id if provided name is different than currently registered.
     * 
     * Emits `Updated` event when successful.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('AssetRegistry.update') === 'be93bc22aab747596aaafa42bfd6623605951ab0303c4ef01b675f2fa5ca9e44'
    }

    /**
     * Update registered asset.
     * 
     * Updates also mapping between name and asset id if provided name is different than currently registered.
     * 
     * Emits `Updated` event when successful.
     */
    get asV108(): {assetId: number, name: Uint8Array, assetType: v108.AssetType, existentialDeposit: (bigint | undefined)} {
        assert(this.isV108)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === '491502deec691ea043fa56fc39b50b58deab8a6411c511016c06289ee5867611'
    }

    /**
     * Provide a set of uncles.
     */
    get asV100(): {newUncles: v100.Header[]} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Provide a set of uncles.
     */
    get isV104(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
    }

    /**
     * Provide a set of uncles.
     */
    get asV104(): {newUncles: v104.Header[]} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === '2fe8348cf811b833de74f02f6eeab668dbfad8a5d53274dd89837666ed3eb6fe'
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get asV100(): {source: Uint8Array, dest: Uint8Array, value: bigint} {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asV100(): {who: Uint8Array, amount: bigint} {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === 'a65ed3500227691ff89565c1bf5a0244c2a05366e34d1ab50167d0c006774edc'
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
    get asV100(): {who: Uint8Array, newFree: bigint, newReserved: bigint} {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.transfer') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
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
    get asV100(): {dest: Uint8Array, value: bigint} {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '55f3f63b765a5b0a714fcbe6c824b0f6fc21773aab999a719c36e7dc7db49575'
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
    get asV100(): {dest: Uint8Array, keepAlive: boolean} {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
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
    get asV100(): {dest: Uint8Array, value: bigint} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class CircuitBreakerSetAddLiquidityLimitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CircuitBreaker.set_add_liquidity_limit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set add liquidity limit for an asset.
     * 
     * Parameters:
     * - `origin`: The dispatch origin for this call. Must be `TechnicalOrigin`
     * - `asset_id`: The identifier of an asset
     * - `liquidity_limit`: Optional add liquidity limit represented as a percentage
     * 
     * Emits `AddLiquidityLimitChanged` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('CircuitBreaker.set_add_liquidity_limit') === '19d67bfb12558400c4e1ddc464e62f13be42caf6e4f53fb6dd8f59c03b34e7ad'
    }

    /**
     * Set add liquidity limit for an asset.
     * 
     * Parameters:
     * - `origin`: The dispatch origin for this call. Must be `TechnicalOrigin`
     * - `asset_id`: The identifier of an asset
     * - `liquidity_limit`: Optional add liquidity limit represented as a percentage
     * 
     * Emits `AddLiquidityLimitChanged` event when successful.
     * 
     */
    get asV138(): {assetId: number, liquidityLimit: ([number, number] | undefined)} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class CircuitBreakerSetRemoveLiquidityLimitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CircuitBreaker.set_remove_liquidity_limit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set remove liquidity limit for an asset.
     * 
     * Parameters:
     * - `origin`: The dispatch origin for this call. Must be `TechnicalOrigin`
     * - `asset_id`: The identifier of an asset
     * - `liquidity_limit`: Optional remove liquidity limit represented as a percentage
     * 
     * Emits `RemoveLiquidityLimitChanged` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('CircuitBreaker.set_remove_liquidity_limit') === '19d67bfb12558400c4e1ddc464e62f13be42caf6e4f53fb6dd8f59c03b34e7ad'
    }

    /**
     * Set remove liquidity limit for an asset.
     * 
     * Parameters:
     * - `origin`: The dispatch origin for this call. Must be `TechnicalOrigin`
     * - `asset_id`: The identifier of an asset
     * - `liquidity_limit`: Optional remove liquidity limit represented as a percentage
     * 
     * Emits `RemoveLiquidityLimitChanged` event when successful.
     * 
     */
    get asV138(): {assetId: number, liquidityLimit: ([number, number] | undefined)} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class CircuitBreakerSetTradeVolumeLimitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CircuitBreaker.set_trade_volume_limit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set trade volume limit for an asset.
     * 
     * Parameters:
     * - `origin`: The dispatch origin for this call. Must be `TechnicalOrigin`
     * - `asset_id`: The identifier of an asset
     * - `trade_volume_limit`: New trade volume limit represented as a percentage
     * 
     * Emits `TradeVolumeLimitChanged` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('CircuitBreaker.set_trade_volume_limit') === '6ea4f39aced23b5458a26fb63dd1593ddc121037c999f3d56c8f548e60a7e409'
    }

    /**
     * Set trade volume limit for an asset.
     * 
     * Parameters:
     * - `origin`: The dispatch origin for this call. Must be `TechnicalOrigin`
     * - `asset_id`: The identifier of an asset
     * - `trade_volume_limit`: New trade volume limit represented as a percentage
     * 
     * Emits `TradeVolumeLimitChanged` event when successful.
     * 
     */
    get asV138(): {assetId: number, tradeVolumeLimit: [number, number]} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim xHDX by providing signed message with Ethereum address.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Claims.claim') === '4b72bce1fc9e5b371bc7f8304bf2cc321d89c3491cc727b57ffef147f121aca7'
    }

    /**
     * Claim xHDX by providing signed message with Ethereum address.
     */
    get asV108(): {ethereumSignature: Uint8Array} {
        assert(this.isV108)
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

    get isV100(): boolean {
        return this._chain.getCallHash('CollatorSelection.leave_intent') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV100(): null {
        assert(this.isV100)
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

    get isV100(): boolean {
        return this._chain.getCallHash('CollatorSelection.register_as_candidate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV100(): null {
        assert(this.isV100)
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

    get isV100(): boolean {
        return this._chain.getCallHash('CollatorSelection.set_candidacy_bond') === 'a862ec70ffc8f3bd1c3d634825c052f8531eba68afa42769689fc18a6d718eda'
    }

    get asV100(): {bond: bigint} {
        assert(this.isV100)
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

    get isV100(): boolean {
        return this._chain.getCallHash('CollatorSelection.set_desired_candidates') === '405f1447d8db6ecc920213976cf7f98b6e74c5ceb4e2ecf66c742895e40e5d78'
    }

    get asV100(): {max: number} {
        assert(this.isV100)
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

    get isV100(): boolean {
        return this._chain.getCallHash('CollatorSelection.set_invulnerables') === '4f4db85b7e763f702804fa793ac5cba68cfd546b497830a9c3c21dced2b91524'
    }

    get asV100(): {new: Uint8Array[]} {
        assert(this.isV100)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV108)
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
    get isV115(): boolean {
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
    get asV115(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV115)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Council.execute') === 'f8b8efcadc65f3f9385828e06793c46c35e2c59970d2c396dba17b4df05b9aa5'
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
    get asV108(): {proposal: v108.Call, lengthBound: number} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Council.execute') === '08c9b75648b410be418bd9aefa5a65ec58a00ad485f7c9028de49a2fa10d8f97'
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
    get asV115(): {proposal: v115.Call, lengthBound: number} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('Council.execute') === '70b38f85887dd5e650f9b8aaf523440394b70abedab0d2eb38c2f5c61bb1031c'
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
    get asV125(): {proposal: v125.Call, lengthBound: number} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('Council.execute') === '118f47ebf5c3588c4c36b450aeeeb913599d57923c218c04957babe19e14af9a'
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
    get asV138(): {proposal: v138.Call, lengthBound: number} {
        assert(this.isV138)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Council.propose') === 'f5aa25d1085e94ed780247e20de66f697930fc826c7dc7d42cce87751a5bbc2e'
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
    get asV108(): {threshold: number, proposal: v108.Call, lengthBound: number} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Council.propose') === 'a65b7aa02853f926bd60b8660c6609556815fb62f8838a6cb930ad2a18e94a4d'
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
    get asV115(): {threshold: number, proposal: v115.Call, lengthBound: number} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('Council.propose') === '284260f12bf173d220a168c819d71ffb511f51416cabaa9d622c7de52c3bef65'
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
    get asV125(): {threshold: number, proposal: v125.Call, lengthBound: number} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('Council.propose') === '976486045b1a00393a67e7f653e2f153f07e3207622640bc86811b5ea8585632'
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
    get asV138(): {threshold: number, proposal: v138.Call, lengthBound: number} {
        assert(this.isV138)
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
    get isV108(): boolean {
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
    get asV108(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class CurrenciesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Currencies.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Currencies.transfer') === 'f9417776835359c4df2af31d48b33bac20ebcc850ed3738fcbccd673124fb252'
    }

    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get asV108(): {dest: Uint8Array, currencyId: number, amount: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class CurrenciesTransferNativeCurrencyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Currencies.transfer_native_currency')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some native currency to another account.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Currencies.transfer_native_currency') === '94a3f31b6c27b88829aa15b00a4c891eb6d26aea983baf4152003a578ce990f7'
    }

    /**
     * Transfer some native currency to another account.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    get asV108(): {dest: Uint8Array, amount: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class CurrenciesUpdateBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Currencies.update_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Currencies.update_balance') === '0658a1a329a71de06a309dcf439763a0012143af692c1162a6d0f9923368e33f'
    }

    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    get asV108(): {who: Uint8Array, currencyId: number, amount: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array, maybeRefIndex: (number | undefined)} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {propIndex: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {which: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {refIndex: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get asV108(): null {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {to: Uint8Array, conviction: v108.Conviction, balance: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {refIndex: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Democracy.enact_proposal') === 'de192ab0f058d1fb7eacc523bf0e05128d16509ec21bf445f0eefa47c89e60bf'
    }

    /**
     * Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get asV108(): {proposalHash: Uint8Array, index: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Democracy.fast_track') === '27cb200e922e485b41e3150b3d7bf5e8624346f6ff1d78601373ba3d80689c89'
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
    get asV108(): {proposalHash: Uint8Array, votingPeriod: number, delay: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {encodedProposal: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asV108(): {encodedProposal: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {encodedProposal: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asV108(): {encodedProposal: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array, value: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array, proposalLenUpperBound: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {target: Uint8Array, index: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {index: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {proposal: number, secondsUpperBound: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): null {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {target: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {refIndex: number, vote: v108.AccountVote} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {index: bigint, weightLimit: bigint} {
        assert(this.isV108)
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
    get isV115(): boolean {
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
    get asV115(): {index: bigint, weightLimit: v115.Weight} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class DusterAddNondustableAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Duster.add_nondustable_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add account to list of non-dustable account. Account whihc are excluded from udsting.
     * If such account should be dusted - `AccountBlacklisted` error is returned.
     * Only root can perform this action.
     */
    get isV138(): boolean {
        return this._chain.getCallHash('Duster.add_nondustable_account') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * Add account to list of non-dustable account. Account whihc are excluded from udsting.
     * If such account should be dusted - `AccountBlacklisted` error is returned.
     * Only root can perform this action.
     */
    get asV138(): {account: Uint8Array} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class DusterDustAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Duster.dust_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dust specified account.
     * IF account balance is < min. existential deposit of given currency, and account is allowed to
     * be dusted, the remaining balance is transferred to selected account (usually treasury).
     * 
     * Caller is rewarded with chosen reward in native currency.
     */
    get isV138(): boolean {
        return this._chain.getCallHash('Duster.dust_account') === 'd3feddb5891b6dffbacca67c361c7faded12f59c061734980a1a27e78b3c54fa'
    }

    /**
     * Dust specified account.
     * IF account balance is < min. existential deposit of given currency, and account is allowed to
     * be dusted, the remaining balance is transferred to selected account (usually treasury).
     * 
     * Caller is rewarded with chosen reward in native currency.
     */
    get asV138(): {account: Uint8Array, currencyId: number} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class DusterRemoveNondustableAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Duster.remove_nondustable_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove account from list of non-dustable accounts. That means account can be dusted again.
     */
    get isV138(): boolean {
        return this._chain.getCallHash('Duster.remove_nondustable_account') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * Remove account from list of non-dustable accounts. That means account can be dusted again.
     */
    get asV138(): {account: Uint8Array} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsCleanDefunctVotersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.clean_defunct_voters')
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
    get isV108(): boolean {
        return this._chain.getCallHash('Elections.clean_defunct_voters') === '8279e35309d0c9a5d36cd12cce19e58fef95829d4096e23fe93a055a47afd8a0'
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
    get asV108(): {numVoters: number, numDefunct: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Elections.remove_member') === 'cc43d536f862eb65fab1d583cca3ea302b95423702ae1dac84b75df432320893'
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
    get asV108(): {who: Uint8Array, hasReplacement: boolean} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove a particular member from the set. This is effective immediately and the bond of
     * the outgoing member is slashed.
     * 
     * If a runner-up is available, then the best runner-up will be removed and replaces the
     * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
     * started, else, nothing happens.
     * 
     * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
     * it is returned.
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
    get isV115(): boolean {
        return this._chain.getCallHash('Elections.remove_member') === '728eaf602e4f248add116893c9cdeb4eadb6e2daeac4ca34571a01fd60db514e'
    }

    /**
     * Remove a particular member from the set. This is effective immediately and the bond of
     * the outgoing member is slashed.
     * 
     * If a runner-up is available, then the best runner-up will be removed and replaces the
     * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
     * started, else, nothing happens.
     * 
     * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
     * it is returned.
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
    get asV115(): {who: Uint8Array, slashBond: boolean, rerunElection: boolean} {
        assert(this.isV115)
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
     * Remove `origin` as a voter.
     * 
     * This removes the lock and returns the deposit.
     * 
     * The dispatch origin of this call must be signed and be a voter.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Elections.remove_voter') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove `origin` as a voter.
     * 
     * This removes the lock and returns the deposit.
     * 
     * The dispatch origin of this call must be signed and be a voter.
     */
    get asV108(): null {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Elections.renounce_candidacy') === '891a3ff219ab8817cfffbcd0ed48578a0fd96440dc2292a0cde84a40439f7fbe'
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
    get asV108(): {renouncing: v108.Renouncing} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Elections.submit_candidacy') === 'f9d2bc9f755e33c27d34db4c3b063daa9e2490111d35f89ea1995d74e59b1819'
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
    get asV108(): {candidateCount: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Elections.vote') === '75939c25de1c96145b5d2d4bc8627a3fc22299f0e1f1f6f0709e54e884796bda'
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
    get asV108(): {votes: Uint8Array[], value: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {account: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Identity.add_sub') === '3a44789cb2db1c330353e6200ca05fb21d197f103560aec42b25fed99b8ede6d'
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
    get asV108(): {sub: Uint8Array, data: v108.Data} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {regIndex: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): null {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Identity.kill_identity') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
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
    get asV108(): {target: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Identity.provide_judgement') === '791c0e6b8f05476998f8aaac88c6d48f65d1a8c2670bcbd045a3ca694c679bd7'
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
    get asV108(): {regIndex: number, target: Uint8Array, judgement: v108.Judgement} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): null {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Identity.remove_sub') === '38b23c3d326211a5d1355a68469ac48b2d3b137ed03e1feb95bb1da67e04c022'
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
    get asV108(): {sub: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === '3a44789cb2db1c330353e6200ca05fb21d197f103560aec42b25fed99b8ede6d'
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV108(): {sub: Uint8Array, data: v108.Data} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {regIndex: number, maxFee: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {index: number, new: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {index: number, fee: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {index: number, fields: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {info: v108.IdentityInfo} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {subs: [Uint8Array, v108.Data][]} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTransactionPaymentAddCurrencyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTransactionPayment.add_currency')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a currency to the list of accepted currencies.
     * 
     * Only member can perform this action.
     * 
     * Currency must not be already accepted. Core asset id cannot be explicitly added.
     * 
     * Emits `CurrencyAdded` event when successful.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('MultiTransactionPayment.add_currency') === '13125ec4790da3a904a34273acd08b2e8e32d1bf678dd213a2f092ab76db8c15'
    }

    /**
     * Add a currency to the list of accepted currencies.
     * 
     * Only member can perform this action.
     * 
     * Currency must not be already accepted. Core asset id cannot be explicitly added.
     * 
     * Emits `CurrencyAdded` event when successful.
     */
    get asV108(): {currency: number, price: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTransactionPaymentRemoveCurrencyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTransactionPayment.remove_currency')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove currency from the list of supported currencies
     * Only selected members can perform this action
     * 
     * Core asset cannot be removed.
     * 
     * Emits `CurrencyRemoved` when successful.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('MultiTransactionPayment.remove_currency') === '6f30827fd1d3f25813ac86311eb2a11bef512c91dba46a2d0279d52ddf3b5cc9'
    }

    /**
     * Remove currency from the list of supported currencies
     * Only selected members can perform this action
     * 
     * Core asset cannot be removed.
     * 
     * Emits `CurrencyRemoved` when successful.
     */
    get asV108(): {currency: number} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTransactionPaymentSetCurrencyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTransactionPayment.set_currency')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set selected currency for given account.
     * 
     * This allows to set a currency for an account in which all transaction fees will be paid.
     * Account balance cannot be zero.
     * 
     * Chosen currency must be in the list of accepted currencies.
     * 
     * When currency is set, fixed fee is withdrawn from the account to pay for the currency change
     * 
     * Emits `CurrencySet` event when successful.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('MultiTransactionPayment.set_currency') === '6f30827fd1d3f25813ac86311eb2a11bef512c91dba46a2d0279d52ddf3b5cc9'
    }

    /**
     * Set selected currency for given account.
     * 
     * This allows to set a currency for an account in which all transaction fees will be paid.
     * Account balance cannot be zero.
     * 
     * Chosen currency must be in the list of accepted currencies.
     * 
     * When currency is set, fixed fee is withdrawn from the account to pay for the currency change
     * 
     * Emits `CurrencySet` event when successful.
     */
    get asV108(): {currency: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v108.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
        assert(this.isV108)
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
    get isV115(): boolean {
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
    get asV115(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v115.Timepoint | undefined), callHash: Uint8Array, maxWeight: v115.Weight} {
        assert(this.isV115)
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
    get isV108(): boolean {
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
    get asV108(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v108.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
        assert(this.isV108)
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
    get isV115(): boolean {
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
    get asV115(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v115.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: v115.Weight} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'fc628b8375ba404706cc26b2725529263c919a06e4b1d3966f0cff35549677a0'
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
    get asV108(): {otherSignatories: Uint8Array[], call: v108.Call} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '0768e2ed55f534f0bc0ab714cb4d1fdab354cd817d1787148b0ce45806707471'
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
    get asV115(): {otherSignatories: Uint8Array[], call: v115.Call} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'ebd7e064d63a871cf3c72ad02447eba972588e7a916f087fc5e49537d3a44d5c'
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
    get asV125(): {otherSignatories: Uint8Array[], call: v125.Call} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'd3041b2960cf8275ca4a468356a22535e014c0e82291e30111a806ff5fa83ce1'
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
    get asV138(): {otherSignatories: Uint8Array[], call: v138.Call} {
        assert(this.isV138)
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
    get isV108(): boolean {
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
    get asV108(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v108.Timepoint, callHash: Uint8Array} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class OtcCancelOrderCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OTC.cancel_order')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel an open OTC order
     *  
     * Parameters:
     * - `order_id`: ID of the order
     * - `asset`: Asset which is being filled
     * - `amount`: Amount which is being filled
     * 
     * Validations:
     * - caller is order owner
     * 
     * Emits `Cancelled` event when successful.
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OTC.cancel_order') === 'd305f3f513b841b17bc670267c676b2ffeb8ad4fb9ccd61f521db44016c53394'
    }

    /**
     * Cancel an open OTC order
     *  
     * Parameters:
     * - `order_id`: ID of the order
     * - `asset`: Asset which is being filled
     * - `amount`: Amount which is being filled
     * 
     * Validations:
     * - caller is order owner
     * 
     * Emits `Cancelled` event when successful.
     */
    get asV138(): {orderId: number} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OtcFillOrderCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OTC.fill_order')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Fill an OTC order (completely)
     *  
     * Parameters:
     * - `order_id`: ID of the order
     * 
     * Events:
     * `Filled` event when successful.
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OTC.fill_order') === 'd305f3f513b841b17bc670267c676b2ffeb8ad4fb9ccd61f521db44016c53394'
    }

    /**
     * Fill an OTC order (completely)
     *  
     * Parameters:
     * - `order_id`: ID of the order
     * 
     * Events:
     * `Filled` event when successful.
     */
    get asV138(): {orderId: number} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OtcPartialFillOrderCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OTC.partial_fill_order')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Fill an OTC order (partially)
     *  
     * Parameters:
     * - `order_id`: ID of the order
     * - `amount_in`: Amount with which the order is being filled
     * 
     * Validations:
     * - order must be partially_fillable
     * - after the partial_fill, the remaining order.amount_in must be higher than the existential deposit
     *   of asset_in multiplied by ExistentialDepositMultiplier
     * - after the partial_fill, the remaining order.amount_out must be higher than the existential deposit
     *   of asset_out multiplied by ExistentialDepositMultiplier
     * 
     * Events:
     * `PartiallyFilled` event when successful.
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OTC.partial_fill_order') === '37dfd4e0044f8cb0734da6763899542eb2d08e75daf09c5d84a4508563c70afb'
    }

    /**
     * Fill an OTC order (partially)
     *  
     * Parameters:
     * - `order_id`: ID of the order
     * - `amount_in`: Amount with which the order is being filled
     * 
     * Validations:
     * - order must be partially_fillable
     * - after the partial_fill, the remaining order.amount_in must be higher than the existential deposit
     *   of asset_in multiplied by ExistentialDepositMultiplier
     * - after the partial_fill, the remaining order.amount_out must be higher than the existential deposit
     *   of asset_out multiplied by ExistentialDepositMultiplier
     * 
     * Events:
     * `PartiallyFilled` event when successful.
     */
    get asV138(): {orderId: number, amountIn: bigint} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OtcPlaceOrderCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OTC.place_order')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a new OTC order
     *  
     * Parameters:
     * - `asset_in`: Asset which is being bought
     * - `asset_out`: Asset which is being sold
     * - `amount_in`: Amount that the order is seeking to buy
     * - `amount_out`: Amount that the order is selling
     * - `partially_fillable`: Flag indicating whether users can fill the order partially
     * 
     * Validations:
     * - asset_in must be registered
     * - amount_in must be higher than the existential deposit of asset_in multiplied by
     *   ExistentialDepositMultiplier
     * - amount_out must be higher than the existential deposit of asset_out multiplied by
     *   ExistentialDepositMultiplier
     * 
     * Events:
     * - `Placed` event when successful.
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OTC.place_order') === 'b4180f8bb4337bdfc94cd8c854ba0e65d42656b7b88aba86cd15936ef9ba9f18'
    }

    /**
     * Create a new OTC order
     *  
     * Parameters:
     * - `asset_in`: Asset which is being bought
     * - `asset_out`: Asset which is being sold
     * - `amount_in`: Amount that the order is seeking to buy
     * - `amount_out`: Amount that the order is selling
     * - `partially_fillable`: Flag indicating whether users can fill the order partially
     * 
     * Validations:
     * - asset_in must be registered
     * - amount_in must be higher than the existential deposit of asset_in multiplied by
     *   ExistentialDepositMultiplier
     * - amount_out must be higher than the existential deposit of asset_out multiplied by
     *   ExistentialDepositMultiplier
     * 
     * Events:
     * - `Placed` event when successful.
     */
    get asV138(): {assetIn: number, assetOut: number, amountIn: bigint, amountOut: bigint, partiallyFillable: boolean} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolAddLiquidityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.add_liquidity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add liquidity of asset `asset` in quantity `amount` to Omnipool
     * 
     * `add_liquidity` adds specified asset amount to pool and in exchange gives the origin
     * corresponding shares amount in form of NFT at current price.
     * 
     * Asset's tradable state must contain ADD_LIQUIDITY flag, otherwise `NotAllowed` error is returned.
     * 
     * NFT is minted using NTFHandler which implements non-fungibles traits from frame_support.
     * 
     * Asset weight cap must be respected, otherwise `AssetWeightExceeded` error is returned.
     * Asset weight is ratio between new HubAsset reserve and total reserve of Hub asset in Omnipool.
     * 
     * Parameters:
     * - `asset`: The identifier of the new asset added to the pool. Must be already in the pool
     * - `amount`: Amount of asset added to omnipool
     * 
     * Emits `LiquidityAdded` event when successful.
     * 
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Omnipool.add_liquidity') === '82231f63169b7325531a4ab8a16b1201065695c19c7cf516195f5d6b90e6bdc1'
    }

    /**
     * Add liquidity of asset `asset` in quantity `amount` to Omnipool
     * 
     * `add_liquidity` adds specified asset amount to pool and in exchange gives the origin
     * corresponding shares amount in form of NFT at current price.
     * 
     * Asset's tradable state must contain ADD_LIQUIDITY flag, otherwise `NotAllowed` error is returned.
     * 
     * NFT is minted using NTFHandler which implements non-fungibles traits from frame_support.
     * 
     * Asset weight cap must be respected, otherwise `AssetWeightExceeded` error is returned.
     * Asset weight is ratio between new HubAsset reserve and total reserve of Hub asset in Omnipool.
     * 
     * Parameters:
     * - `asset`: The identifier of the new asset added to the pool. Must be already in the pool
     * - `amount`: Amount of asset added to omnipool
     * 
     * Emits `LiquidityAdded` event when successful.
     * 
     */
    get asV115(): {asset: number, amount: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolAddTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.add_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add new token to omnipool in quantity `amount` at price `initial_price`
     * 
     * Can be called only after pool is initialized, otherwise it returns `NoStableAssetInPool`
     * 
     * Initial liquidity must be transferred to pool's account for this new token manually prior to calling `add_token`.
     * 
     * Initial liquidity is pool's account balance of the token.
     * 
     * Position NFT token is minted for `position_owner`.
     * 
     * Parameters:
     * - `asset`: The identifier of the new asset added to the pool. Must be registered in Asset registry
     * - `initial_price`: Initial price
     * - `position_owner`: account id for which share are distributed in form on NFT
     * 
     * Emits `TokenAdded` event when successful.
     * 
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Omnipool.add_token') === '1e1d967a54278d756438792da7c45e24509a489fe5d1b95557a5f1e12828d786'
    }

    /**
     * Add new token to omnipool in quantity `amount` at price `initial_price`
     * 
     * Can be called only after pool is initialized, otherwise it returns `NoStableAssetInPool`
     * 
     * Initial liquidity must be transferred to pool's account for this new token manually prior to calling `add_token`.
     * 
     * Initial liquidity is pool's account balance of the token.
     * 
     * Position NFT token is minted for `position_owner`.
     * 
     * Parameters:
     * - `asset`: The identifier of the new asset added to the pool. Must be registered in Asset registry
     * - `initial_price`: Initial price
     * - `position_owner`: account id for which share are distributed in form on NFT
     * 
     * Emits `TokenAdded` event when successful.
     * 
     */
    get asV115(): {asset: number, initialPrice: bigint, weightCap: number, positionOwner: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolBuyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.buy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Execute a swap of `asset_out` for `asset_in`.
     * 
     * Price is determined by the Omnipool.
     * 
     * Hub asset is traded separately.
     * 
     * Asset's tradable states must contain SELL flag for asset_in and BUY flag for asset_out, otherwise `NotAllowed` error is returned.
     * 
     * Parameters:
     * - `asset_in`: ID of asset sold to the pool
     * - `asset_out`: ID of asset bought from the pool
     * - `amount`: Amount of asset sold
     * - `max_sell_amount`: Maximum amount to be sold.
     * 
     * Emits `BuyExecuted` event when successful.
     * 
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Omnipool.buy') === '1999ed7fc28971d9eac92619644e5136a8f29cb3aa56ff668fe392464ea27f3a'
    }

    /**
     * Execute a swap of `asset_out` for `asset_in`.
     * 
     * Price is determined by the Omnipool.
     * 
     * Hub asset is traded separately.
     * 
     * Asset's tradable states must contain SELL flag for asset_in and BUY flag for asset_out, otherwise `NotAllowed` error is returned.
     * 
     * Parameters:
     * - `asset_in`: ID of asset sold to the pool
     * - `asset_out`: ID of asset bought from the pool
     * - `amount`: Amount of asset sold
     * - `max_sell_amount`: Maximum amount to be sold.
     * 
     * Emits `BuyExecuted` event when successful.
     * 
     */
    get asV115(): {assetOut: number, assetIn: number, amount: bigint, maxSellAmount: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolInitializePoolCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.initialize_pool')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Initialize Omnipool with stable asset and native asset.
     * 
     * First added assets must be:
     * - preferred stable coin asset set as `StableCoinAssetId` pallet parameter
     * - native asset
     * 
     * Omnipool account must already have correct balances of stable and native asset.
     * 
     * Parameters:
     * - `stable_asset_price`: Initial price of stable asset
     * - `native_asset_price`: Initial price of stable asset
     * 
     * Emits two `TokenAdded` events when successful.
     * 
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Omnipool.initialize_pool') === 'f26b8ccdcb02cec7193e4b7f06ba392694e0f278c270c53c556efdd5e2561e21'
    }

    /**
     * Initialize Omnipool with stable asset and native asset.
     * 
     * First added assets must be:
     * - preferred stable coin asset set as `StableCoinAssetId` pallet parameter
     * - native asset
     * 
     * Omnipool account must already have correct balances of stable and native asset.
     * 
     * Parameters:
     * - `stable_asset_price`: Initial price of stable asset
     * - `native_asset_price`: Initial price of stable asset
     * 
     * Emits two `TokenAdded` events when successful.
     * 
     */
    get asV115(): {stableAssetPrice: bigint, nativeAssetPrice: bigint, stableWeightCap: number, nativeWeightCap: number} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolRefundRefusedAssetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.refund_refused_asset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Refund given amount of asset to a recipient.
     * 
     * A refund is needed when a token is refused to be added to Omnipool, and initial liquidity of the asset has been already transferred to pool's account.
     * 
     * Transfer is performed only when asset is not in Omnipool and pool's balance has sufficient amount.
     * 
     * Only `AddTokenOrigin` can perform this operition -same as `add_token`o
     * 
     * Emits `AssetRefunded`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Omnipool.refund_refused_asset') === '0e500f1c8fe6de5e6d64ceb9520ef7e15954d5a96cedbd5a4909f083aa857279'
    }

    /**
     * Refund given amount of asset to a recipient.
     * 
     * A refund is needed when a token is refused to be added to Omnipool, and initial liquidity of the asset has been already transferred to pool's account.
     * 
     * Transfer is performed only when asset is not in Omnipool and pool's balance has sufficient amount.
     * 
     * Only `AddTokenOrigin` can perform this operition -same as `add_token`o
     * 
     * Emits `AssetRefunded`
     */
    get asV115(): {assetId: number, amount: bigint, recipient: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolRemoveLiquidityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.remove_liquidity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove liquidity of asset `asset` in quantity `amount` from Omnipool
     * 
     * `remove_liquidity` removes specified shares amount from given PositionId (NFT instance).
     * 
     * Asset's tradable state must contain REMOVE_LIQUIDITY flag, otherwise `NotAllowed` error is returned.
     * 
     * if all shares from given position are removed, NFT is burned.
     * 
     * Parameters:
     * - `position_id`: The identifier of position which liquidity is removed from.
     * - `amount`: Amount of shares removed from omnipool
     * 
     * Emits `LiquidityRemoved` event when successful.
     * 
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Omnipool.remove_liquidity') === '9b62bc61f3b135250dbe07edc824ed6e892ce57d5e350302f3f80b5a1d202768'
    }

    /**
     * Remove liquidity of asset `asset` in quantity `amount` from Omnipool
     * 
     * `remove_liquidity` removes specified shares amount from given PositionId (NFT instance).
     * 
     * Asset's tradable state must contain REMOVE_LIQUIDITY flag, otherwise `NotAllowed` error is returned.
     * 
     * if all shares from given position are removed, NFT is burned.
     * 
     * Parameters:
     * - `position_id`: The identifier of position which liquidity is removed from.
     * - `amount`: Amount of shares removed from omnipool
     * 
     * Emits `LiquidityRemoved` event when successful.
     * 
     */
    get asV115(): {positionId: bigint, amount: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolSacrificePositionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.sacrifice_position')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sacrifice LP position in favor of pool.
     * 
     * A position is destroyed and liquidity owned by LP becomes pool owned liquidity.
     * 
     * Only owner of position can perform this action.
     * 
     * Emits `PositionDestroyed`.
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Omnipool.sacrifice_position') === 'ce458d35304c0fee6622e7c9471cc2324d64f5f8bb352604968b5aaa0acaee8e'
    }

    /**
     * Sacrifice LP position in favor of pool.
     * 
     * A position is destroyed and liquidity owned by LP becomes pool owned liquidity.
     * 
     * Only owner of position can perform this action.
     * 
     * Emits `PositionDestroyed`.
     */
    get asV115(): {positionId: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolSellCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.sell')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Execute a swap of `asset_in` for `asset_out`.
     * 
     * Price is determined by the Omnipool.
     * 
     * Hub asset is traded separately.
     * 
     * Asset's tradable states must contain SELL flag for asset_in and BUY flag for asset_out, otherwise `NotAllowed` error is returned.
     * 
     * Parameters:
     * - `asset_in`: ID of asset sold to the pool
     * - `asset_out`: ID of asset bought from the pool
     * - `amount`: Amount of asset sold
     * - `min_buy_amount`: Minimum amount required to receive
     * 
     * Emits `SellExecuted` event when successful.
     * 
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Omnipool.sell') === 'bc085cef0c43e19de7ae563726728c9178e268d2f03c85384b0ba80cb054e758'
    }

    /**
     * Execute a swap of `asset_in` for `asset_out`.
     * 
     * Price is determined by the Omnipool.
     * 
     * Hub asset is traded separately.
     * 
     * Asset's tradable states must contain SELL flag for asset_in and BUY flag for asset_out, otherwise `NotAllowed` error is returned.
     * 
     * Parameters:
     * - `asset_in`: ID of asset sold to the pool
     * - `asset_out`: ID of asset bought from the pool
     * - `amount`: Amount of asset sold
     * - `min_buy_amount`: Minimum amount required to receive
     * 
     * Emits `SellExecuted` event when successful.
     * 
     */
    get asV115(): {assetIn: number, assetOut: number, amount: bigint, minBuyAmount: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolSetAssetTradableStateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.set_asset_tradable_state')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update asset's tradable state.
     * 
     * Parameters:
     * - `asset_id`: asset id
     * - `state`: new state
     * 
     * Emits `TradableStateUpdated` event when successful.
     * 
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Omnipool.set_asset_tradable_state') === '8476ecb29d56a05c0cadb62452149f8392b5f67e24c205aba4a95d0fde5d961d'
    }

    /**
     * Update asset's tradable state.
     * 
     * Parameters:
     * - `asset_id`: asset id
     * - `state`: new state
     * 
     * Emits `TradableStateUpdated` event when successful.
     * 
     */
    get asV115(): {assetId: number, state: v115.Tradability} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolSetAssetWeightCapCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.set_asset_weight_cap')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update asset's weight cap
     * 
     * Parameters:
     * - `asset_id`: asset id
     * - `cap`: new weight cap
     * 
     * Emits `AssetWeightCapUpdated` event when successful.
     * 
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Omnipool.set_asset_weight_cap') === '71b42f0cf24c8ad0d74fda1d872058bb97d04f78cd0a30312f2e204a7880f618'
    }

    /**
     * Update asset's weight cap
     * 
     * Parameters:
     * - `asset_id`: asset id
     * - `cap`: new weight cap
     * 
     * Emits `AssetWeightCapUpdated` event when successful.
     * 
     */
    get asV115(): {assetId: number, cap: number} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolSetTvlCapCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Omnipool.set_tvl_cap')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update TVL cap
     * 
     * Parameters:
     * - `cap`: new tvl cap
     * 
     * Emits `TVLCapUpdated` event when successful.
     * 
     */
    get isV125(): boolean {
        return this._chain.getCallHash('Omnipool.set_tvl_cap') === 'f1b858d015b893499ed68e763a6fb47c6c960ec75408df2fb3734a3e9a1e6de5'
    }

    /**
     * Update TVL cap
     * 
     * Parameters:
     * - `cap`: new tvl cap
     * 
     * Emits `TVLCapUpdated` event when successful.
     * 
     */
    get asV125(): {cap: bigint} {
        assert(this.isV125)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningClaimRewardsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.claim_rewards')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim rewards from liquidity mining program for deposit represented by the `deposit_id`.
     * 
     * This function calculate user rewards from liquidity mining and transfer rewards to `origin`
     * account. Claiming multiple time the same period is not allowed.
     * 
     * Parameters:
     * - `origin`: owner of deposit.
     * - `deposit_id`: id of the deposit to claim rewards for.
     * - `yield_farm_id`: id of the yield farm to claim rewards from.
     * 
     * Emits `RewardClaimed` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.claim_rewards') === '5277dbfabb0aaf11ff64e071320b401ab304d1054c363f2e24cf48c054f58a95'
    }

    /**
     * Claim rewards from liquidity mining program for deposit represented by the `deposit_id`.
     * 
     * This function calculate user rewards from liquidity mining and transfer rewards to `origin`
     * account. Claiming multiple time the same period is not allowed.
     * 
     * Parameters:
     * - `origin`: owner of deposit.
     * - `deposit_id`: id of the deposit to claim rewards for.
     * - `yield_farm_id`: id of the yield farm to claim rewards from.
     * 
     * Emits `RewardClaimed` event when successful.
     * 
     */
    get asV138(): {depositId: bigint, yieldFarmId: number} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningCreateGlobalFarmCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.create_global_farm')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a new liquidity mining program with provided parameters.
     * 
     * `owner` account has to have at least `total_rewards` balance. These funds will be
     * transferred from `owner` to farm account.
     * 
     * The dispatch origin for this call must be `T::CreateOrigin`.
     * !!!WARN: `T::CreateOrigin` has power over funds of `owner`'s account and it should be
     * configured to trusted origin e.g Sudo or Governance.
     * 
     * Parameters:
     * - `origin`: account allowed to create new liquidity mining program(root, governance).
     * - `total_rewards`: total rewards planned to distribute. These rewards will be
     * distributed between all yield farms in the global farm.
     * - `planned_yielding_periods`: planned number of periods to distribute `total_rewards`.
     * WARN: THIS IS NOT HARD DEADLINE. Not all rewards have to be distributed in
     * `planned_yielding_periods`. Rewards are distributed based on the situation in the yield
     * farms and can be distributed in a longer, though never in a shorter, time frame.
     * - `blocks_per_period`:  number of blocks in a single period. Min. number of blocks per
     * period is 1.
     * - `reward_currency`: payoff currency of rewards.
     * - `owner`: liq. mining farm owner. This account will be able to manage created
     * liquidity mining program.
     * - `yield_per_period`: percentage return on `reward_currency` of all farms.
     * - `min_deposit`: minimum amount of LP shares to be deposited into the liquidity mining by each user.
     * - `lrna_price_adjustment`: price adjustment between `[LRNA]` and `reward_currency`.
     * 
     * Emits `GlobalFarmCreated` when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.create_global_farm') === '8b10a833432f2e95d4b8b13bb3fae5fe0c027a13ec49d956cd39fa362bad6805'
    }

    /**
     * Create a new liquidity mining program with provided parameters.
     * 
     * `owner` account has to have at least `total_rewards` balance. These funds will be
     * transferred from `owner` to farm account.
     * 
     * The dispatch origin for this call must be `T::CreateOrigin`.
     * !!!WARN: `T::CreateOrigin` has power over funds of `owner`'s account and it should be
     * configured to trusted origin e.g Sudo or Governance.
     * 
     * Parameters:
     * - `origin`: account allowed to create new liquidity mining program(root, governance).
     * - `total_rewards`: total rewards planned to distribute. These rewards will be
     * distributed between all yield farms in the global farm.
     * - `planned_yielding_periods`: planned number of periods to distribute `total_rewards`.
     * WARN: THIS IS NOT HARD DEADLINE. Not all rewards have to be distributed in
     * `planned_yielding_periods`. Rewards are distributed based on the situation in the yield
     * farms and can be distributed in a longer, though never in a shorter, time frame.
     * - `blocks_per_period`:  number of blocks in a single period. Min. number of blocks per
     * period is 1.
     * - `reward_currency`: payoff currency of rewards.
     * - `owner`: liq. mining farm owner. This account will be able to manage created
     * liquidity mining program.
     * - `yield_per_period`: percentage return on `reward_currency` of all farms.
     * - `min_deposit`: minimum amount of LP shares to be deposited into the liquidity mining by each user.
     * - `lrna_price_adjustment`: price adjustment between `[LRNA]` and `reward_currency`.
     * 
     * Emits `GlobalFarmCreated` when successful.
     * 
     */
    get asV138(): {totalRewards: bigint, plannedYieldingPeriods: number, blocksPerPeriod: number, rewardCurrency: number, owner: Uint8Array, yieldPerPeriod: bigint, minDeposit: bigint, lrnaPriceAdjustment: bigint} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningCreateYieldFarmCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.create_yield_farm')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create yield farm for given `asset_id` in the omnipool.
     *  
     * Only farm owner can perform this action.
     * 
     * Asset with `asset_id` has to be registered in the omnipool.
     * Yield farm for same `asset_id` can exist only once in the global farm.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id to which a yield farm will be added.
     * - `asset_id`: id of a asset in the omnipool. Yield farm will be created
     * for this asset and user will be able to lock LP shares into this yield farm immediately.
     * - `multiplier`: yield farm's multiplier.
     * - `loyalty_curve`: curve to calculate loyalty multiplier to distribute rewards to users
     * with time incentive. `None` means no loyalty multiplier.
     * 
     * Emits `YieldFarmCreated` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.create_yield_farm') === '9334b3a893ca387a0434b9273efc7fe224018bf46dd0b5a28992d4f959280eb8'
    }

    /**
     * Create yield farm for given `asset_id` in the omnipool.
     *  
     * Only farm owner can perform this action.
     * 
     * Asset with `asset_id` has to be registered in the omnipool.
     * Yield farm for same `asset_id` can exist only once in the global farm.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id to which a yield farm will be added.
     * - `asset_id`: id of a asset in the omnipool. Yield farm will be created
     * for this asset and user will be able to lock LP shares into this yield farm immediately.
     * - `multiplier`: yield farm's multiplier.
     * - `loyalty_curve`: curve to calculate loyalty multiplier to distribute rewards to users
     * with time incentive. `None` means no loyalty multiplier.
     * 
     * Emits `YieldFarmCreated` event when successful.
     * 
     */
    get asV138(): {globalFarmId: number, assetId: number, multiplier: bigint, loyaltyCurve: (v138.LoyaltyCurve | undefined)} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningDepositSharesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.deposit_shares')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deposit omnipool position(LP shares) to a liquidity mining.
     * 
     * This function transfers omnipool position from `origin` to pallet's account and mint NFT for
     * `origin` account. Minted NFT represents deposit in the liquidity mining. User can
     * deposit omnipool position as a whole(all the LP shares in the position).
     * 
     * Parameters:
     * - `origin`: owner of the omnipool position to deposit into the liquidity mining.
     * - `global_farm_id`: id of global farm to which user wants to deposit LP shares.
     * - `yield_farm_id`: id of yield farm to deposit to.
     * - `position_id`: id of the omnipool position to be deposited into the liquidity mining.
     * 
     * Emits `SharesDeposited` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.deposit_shares') === 'db46442c00be926760d2ccc530d08837c4ecf4e6d56d420642e36b93125d5c6d'
    }

    /**
     * Deposit omnipool position(LP shares) to a liquidity mining.
     * 
     * This function transfers omnipool position from `origin` to pallet's account and mint NFT for
     * `origin` account. Minted NFT represents deposit in the liquidity mining. User can
     * deposit omnipool position as a whole(all the LP shares in the position).
     * 
     * Parameters:
     * - `origin`: owner of the omnipool position to deposit into the liquidity mining.
     * - `global_farm_id`: id of global farm to which user wants to deposit LP shares.
     * - `yield_farm_id`: id of yield farm to deposit to.
     * - `position_id`: id of the omnipool position to be deposited into the liquidity mining.
     * 
     * Emits `SharesDeposited` event when successful.
     * 
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, positionId: bigint} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningRedepositSharesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.redeposit_shares')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Redeposit LP shares in the already locked omnipool position.
     * 
     * This function create yield farm entry for existing deposit. Amount of redeposited LP
     * shares is same as amount shares which are already deposited in the deposit.
     * 
     * This function DOESN'T create new deposit(NFT).
     * 
     * Parameters:
     * - `origin`: owner of the deposit to redeposit.
     * - `global_farm_id`: id of the global farm to which user wants to redeposit LP shares.
     * - `yield_farm_id`: id of the yield farm to redeposit to.
     * - `deposit_id`: identifier of the deposit to redeposit.
     * 
     * Emits `SharesRedeposited` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.redeposit_shares') === '0e4cc5c9e42e10033cec27d048a6af0f0007300c0d24199a89715fe04cc43c94'
    }

    /**
     * Redeposit LP shares in the already locked omnipool position.
     * 
     * This function create yield farm entry for existing deposit. Amount of redeposited LP
     * shares is same as amount shares which are already deposited in the deposit.
     * 
     * This function DOESN'T create new deposit(NFT).
     * 
     * Parameters:
     * - `origin`: owner of the deposit to redeposit.
     * - `global_farm_id`: id of the global farm to which user wants to redeposit LP shares.
     * - `yield_farm_id`: id of the yield farm to redeposit to.
     * - `deposit_id`: identifier of the deposit to redeposit.
     * 
     * Emits `SharesRedeposited` event when successful.
     * 
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, depositId: bigint} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningResumeYieldFarmCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.resume_yield_farm')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Resume incentivization of the asset represented by yield farm.
     * 
     * This function resume incentivization of the asset from the `GlobalFarm` and
     * restore full functionality or the yield farm. Users will be able to deposit,
     * claim and withdraw again.
     * 
     * WARN: Yield farm(and users) is NOT rewarded for time it was stopped.
     * 
     * Only farm owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id in which yield farm will be resumed.
     * - `yield_farm_id`: id of the yield farm to be resumed.
     * - `asset_id`: id of the asset identifying yield farm in the global farm.
     * - `multiplier`: yield farm multiplier.
     * 
     * Emits `YieldFarmResumed` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.resume_yield_farm') === '087d2d9e1651c20735e7c455019029d7f883d0f50964b0af8f34a3c38d153be0'
    }

    /**
     * Resume incentivization of the asset represented by yield farm.
     * 
     * This function resume incentivization of the asset from the `GlobalFarm` and
     * restore full functionality or the yield farm. Users will be able to deposit,
     * claim and withdraw again.
     * 
     * WARN: Yield farm(and users) is NOT rewarded for time it was stopped.
     * 
     * Only farm owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id in which yield farm will be resumed.
     * - `yield_farm_id`: id of the yield farm to be resumed.
     * - `asset_id`: id of the asset identifying yield farm in the global farm.
     * - `multiplier`: yield farm multiplier.
     * 
     * Emits `YieldFarmResumed` event when successful.
     * 
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, assetId: number, multiplier: bigint} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningStopYieldFarmCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.stop_yield_farm')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Stop liquidity miming for specific yield farm.
     * 
     * This function claims rewards from `GlobalFarm` last time and stop yield farm
     * incentivization from a `GlobalFarm`. Users will be able to only withdraw
     * shares(with claiming) after calling this function.
     * `deposit_shares()` and `claim_rewards()` are not allowed on stopped yield farm.
     *  
     * Only farm owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: farm id in which yield farm will be canceled.
     * - `asset_id`: id of the asset identifying yield farm in the global farm.
     * 
     * Emits `YieldFarmStopped` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.stop_yield_farm') === 'c3aca1a5885229f89d391e6ca12d1efd3840a5e353daf78d4540e5fe230a624c'
    }

    /**
     * Stop liquidity miming for specific yield farm.
     * 
     * This function claims rewards from `GlobalFarm` last time and stop yield farm
     * incentivization from a `GlobalFarm`. Users will be able to only withdraw
     * shares(with claiming) after calling this function.
     * `deposit_shares()` and `claim_rewards()` are not allowed on stopped yield farm.
     *  
     * Only farm owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: farm id in which yield farm will be canceled.
     * - `asset_id`: id of the asset identifying yield farm in the global farm.
     * 
     * Emits `YieldFarmStopped` event when successful.
     * 
     */
    get asV138(): {globalFarmId: number, assetId: number} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningTerminateGlobalFarmCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.terminate_global_farm')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Terminate existing liq. mining program.
     * 
     * Only farm owner can perform this action.
     * 
     * WARN: To successfully terminate a global farm, farm have to be empty
     * (all yield farms in the global farm must be terminated).
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: id of global farm to be terminated.
     * 
     * Emits `GlobalFarmTerminated` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.terminate_global_farm') === '6c81d62dc35d0454853f5260a9937f1dea716b76a958a096c5baa5a1f4a88cce'
    }

    /**
     * Terminate existing liq. mining program.
     * 
     * Only farm owner can perform this action.
     * 
     * WARN: To successfully terminate a global farm, farm have to be empty
     * (all yield farms in the global farm must be terminated).
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: id of global farm to be terminated.
     * 
     * Emits `GlobalFarmTerminated` event when successful.
     * 
     */
    get asV138(): {globalFarmId: number} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningTerminateYieldFarmCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.terminate_yield_farm')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Terminate yield farm.
     * 
     * This function marks a yield farm as ready to be removed from storage when it's empty. Users will
     * be able to only withdraw shares(without claiming rewards from yield farm). Unpaid rewards
     * will be transferred back to global farm and it will be used to distribute to other yield farms.
     * 
     * Yield farm must be stopped before it can be terminated.
     * 
     * Only global farm's owner can perform this action. Yield farm stays in the storage until it's
     * empty(all farm entries are withdrawn). Last withdrawn from yield farm trigger removing from
     * the storage.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id in which yield farm should be terminated.
     * - `yield_farm_id`: id of yield farm to be terminated.
     * - `asset_id`: id of the asset identifying yield farm.
     * 
     * Emits `YieldFarmTerminated` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.terminate_yield_farm') === 'ae661f98849a96a2292a2bcb8a05edbc8be7c70fc4e1ff7a328abf71775a3c65'
    }

    /**
     * Terminate yield farm.
     * 
     * This function marks a yield farm as ready to be removed from storage when it's empty. Users will
     * be able to only withdraw shares(without claiming rewards from yield farm). Unpaid rewards
     * will be transferred back to global farm and it will be used to distribute to other yield farms.
     * 
     * Yield farm must be stopped before it can be terminated.
     * 
     * Only global farm's owner can perform this action. Yield farm stays in the storage until it's
     * empty(all farm entries are withdrawn). Last withdrawn from yield farm trigger removing from
     * the storage.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id in which yield farm should be terminated.
     * - `yield_farm_id`: id of yield farm to be terminated.
     * - `asset_id`: id of the asset identifying yield farm.
     * 
     * Emits `YieldFarmTerminated` event when successful.
     * 
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, assetId: number} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningUpdateGlobalFarmCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.update_global_farm')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update global farm's exchange rate between [LRNA] and `incentivized_asset`.
     * 
     * Only farm's owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: id of the global farm to update.
     * - `lrna_price_adjustment`: new value for LRNA price adjustment.
     * 
     * Emits `GlobalFarmUpdated` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.update_global_farm') === '7dfe976c6ac651e96716b7f1334736f2bd805953de0fd97597f6e55047e276c2'
    }

    /**
     * Update global farm's exchange rate between [LRNA] and `incentivized_asset`.
     * 
     * Only farm's owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: id of the global farm to update.
     * - `lrna_price_adjustment`: new value for LRNA price adjustment.
     * 
     * Emits `GlobalFarmUpdated` event when successful.
     * 
     */
    get asV138(): {globalFarmId: number, lrnaPriceAdjustment: bigint} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningUpdateYieldFarmCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.update_yield_farm')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update yield farm's multiplier.
     *  
     * Only farm owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id in which yield farm will be updated.
     * - `asset_id`: id of the asset identifying yield farm in the global farm.
     * - `multiplier`: new yield farm's multiplier.
     * 
     * Emits `YieldFarmUpdated` event when successful.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.update_yield_farm') === '6a9c0e42b3ea25459c89a48aec00e3dffa3a04124d20b8b5c63f5a265c7e8586'
    }

    /**
     * Update yield farm's multiplier.
     *  
     * Only farm owner can perform this action.
     * 
     * Parameters:
     * - `origin`: global farm's owner.
     * - `global_farm_id`: global farm id in which yield farm will be updated.
     * - `asset_id`: id of the asset identifying yield farm in the global farm.
     * - `multiplier`: new yield farm's multiplier.
     * 
     * Emits `YieldFarmUpdated` event when successful.
     * 
     */
    get asV138(): {globalFarmId: number, assetId: number, multiplier: bigint} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OmnipoolLiquidityMiningWithdrawSharesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OmnipoolLiquidityMining.withdraw_shares')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * This function claim rewards and withdraw LP shares from yield farm. Omnipool position
     * is transferred to origin only if this is last withdraw in the deposit and deposit is
     * destroyed. This function claim rewards only if yield farm is not terminated and user
     * didn't already claim rewards in current period.
     * 
     * Unclaimable rewards represents rewards which user won't be able to claim because of
     * exiting early and these rewards will be transferred back to global farm for future
     * redistribution.
     * 
     * Parameters:
     * - `origin`: owner of deposit.
     * - `deposit_id`: id of the deposit to claim rewards for.
     * - `yield_farm_id`: id of the yield farm to claim rewards from.
     * 
     * Emits:
     * * `RewardClaimed` event if claimed rewards is > 0
     * * `SharesWithdrawn` event when successful
     * * `DepositDestroyed` event when this was last withdraw from the deposit and deposit was
     * destroyed.
     * 
     */
    get isV138(): boolean {
        return this._chain.getCallHash('OmnipoolLiquidityMining.withdraw_shares') === '5277dbfabb0aaf11ff64e071320b401ab304d1054c363f2e24cf48c054f58a95'
    }

    /**
     * This function claim rewards and withdraw LP shares from yield farm. Omnipool position
     * is transferred to origin only if this is last withdraw in the deposit and deposit is
     * destroyed. This function claim rewards only if yield farm is not terminated and user
     * didn't already claim rewards in current period.
     * 
     * Unclaimable rewards represents rewards which user won't be able to claim because of
     * exiting early and these rewards will be transferred back to global farm for future
     * redistribution.
     * 
     * Parameters:
     * - `origin`: owner of deposit.
     * - `deposit_id`: id of the deposit to claim rewards for.
     * - `yield_farm_id`: id of the yield farm to claim rewards from.
     * 
     * Emits:
     * * `RewardClaimed` event if claimed rewards is > 0
     * * `SharesWithdrawn` event when successful
     * * `DepositDestroyed` event when this was last withdraw from the deposit and deposit was
     * destroyed.
     * 
     */
    get asV138(): {depositId: bigint, yieldFarmId: number} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class OrmlXcmSendAsSovereignCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrmlXcm.send_as_sovereign')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send an XCM message as parachain sovereign.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('OrmlXcm.send_as_sovereign') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
    }

    /**
     * Send an XCM message as parachain sovereign.
     */
    get asV108(): {dest: v108.VersionedMultiLocation, message: v108.VersionedXcm} {
        assert(this.isV108)
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

    get isV100(): boolean {
        return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    get asV100(): {codeHash: Uint8Array} {
        assert(this.isV100)
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

    get isV100(): boolean {
        return this._chain.getCallHash('ParachainSystem.enact_authorized_upgrade') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    get asV100(): {code: Uint8Array} {
        assert(this.isV100)
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
    get isV100(): boolean {
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
    get asV100(): {data: v100.ParachainInherentData} {
        assert(this.isV100)
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

    get isV100(): boolean {
        return this._chain.getCallHash('ParachainSystem.sudo_send_upward_message') === '34457b6daded32ddc4ec3a5a21e34b9af8dcd7d190a5a7833fa8a7ed53b31206'
    }

    get asV100(): {message: Uint8Array} {
        assert(this.isV100)
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
    get isV108(): boolean {
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
    get asV108(): {message: v108.Type_251, maxWeight: bigint} {
        assert(this.isV108)
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
    get isV115(): boolean {
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
    get asV115(): {message: v115.Type_271, maxWeight: v115.Weight} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
    }

    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    get asV108(): {maybeXcmVersion: (number | undefined)} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get asV108(): {location: v108.VersionedMultiLocation} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {location: v108.VersionedMultiLocation} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {location: v108.V1MultiLocation, xcmVersion: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {dest: v108.VersionedMultiLocation, beneficiary: v108.VersionedMultiLocation, assets: v108.VersionedMultiAssets, feeAssetItem: number, weightLimit: v108.V2WeightLimit} {
        assert(this.isV108)
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
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV108(): boolean {
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
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV108(): {dest: v108.VersionedMultiLocation, beneficiary: v108.VersionedMultiLocation, assets: v108.VersionedMultiAssets, feeAssetItem: number, weightLimit: v108.V2WeightLimit} {
        assert(this.isV108)
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
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
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
    get isV108(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
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
    get asV108(): {dest: v108.VersionedMultiLocation, beneficiary: v108.VersionedMultiLocation, assets: v108.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV108)
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

    get isV108(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
    }

    get asV108(): {dest: v108.VersionedMultiLocation, message: v108.VersionedXcm} {
        assert(this.isV108)
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
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
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
    get isV108(): boolean {
        return this._chain.getCallHash('PolkadotXcm.teleport_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
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
    get asV108(): {dest: v108.VersionedMultiLocation, beneficiary: v108.VersionedMultiLocation, assets: v108.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get asV108(): {bytes: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get asV108(): {hash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     */
    get asV108(): {hash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get asV108(): {hash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Proxy.add_proxy') === '083a313d28b20bec2a4c7486c80822c07724e89ef63db2b0023e475e1fd83443'
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
    get asV108(): {delegate: Uint8Array, proxyType: v108.ProxyType, delay: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {real: Uint8Array, callHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Proxy.anonymous') === 'acf3c960afc500138b68c869a15a9e0f3ec82bf0ed1d541f4cc0f3dd99bf3d6a'
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
    get asV108(): {proxyType: v108.ProxyType, delay: number, index: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Proxy.kill_anonymous') === 'f36760851edf5b1cbe86a52854c55a327eee3c183a8884f254f3a7fd9123a449'
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
    get asV108(): {spawner: Uint8Array, proxyType: v108.ProxyType, index: number, height: number, extIndex: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'eb9b17dc924a242e81acd4f5107a64eec4d3788ffe4c07947b715df57453f2e2'
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
    get asV108(): {real: Uint8Array, forceProxyType: (v108.ProxyType | undefined), call: v108.Call} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '5e788ab27a48da15c35fed90c1172d8332b24814ef1be06e5ee13678ef42c1c0'
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
    get asV115(): {real: Uint8Array, forceProxyType: (v115.ProxyType | undefined), call: v115.Call} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '4908d15eaf4c9f17eceb69860750a58a200967013cc7eaba261b4bcb528da8d0'
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
    get asV125(): {real: Uint8Array, forceProxyType: (v125.ProxyType | undefined), call: v125.Call} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '594de65fba87b6a50ec4c3d6b027148c6bd48a9dcd5f6926a7d8c9bac2c1ccb3'
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
    get asV138(): {real: Uint8Array, forceProxyType: (v138.ProxyType | undefined), call: v138.Call} {
        assert(this.isV138)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'da07f7a2fb03a80ce7a8266bdbf97acd379c74003a39deca797894cc92b60204'
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
    get asV108(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v108.ProxyType | undefined), call: v108.Call} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '15a6f1736920071f6e86a1d6117e56186b42483548fcd758a358aa9981cae9b7'
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
    get asV115(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v115.ProxyType | undefined), call: v115.Call} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '24eb109e1230b12ffc85c4a634b37f16b3b834890bb574235860568c53cedebd'
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
    get asV125(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v125.ProxyType | undefined), call: v125.Call} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'bb4c7376857950f930bda2af2a8bb0e904ff47ee62e13963edc4ee6188631302'
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
    get asV138(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v138.ProxyType | undefined), call: v138.Call} {
        assert(this.isV138)
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
    get isV108(): boolean {
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
    get asV108(): {delegate: Uint8Array, callHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {real: Uint8Array, callHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): null {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxy') === '083a313d28b20bec2a4c7486c80822c07724e89ef63db2b0023e475e1fd83443'
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
    get asV108(): {delegate: Uint8Array, proxyType: v108.ProxyType, delay: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get asV108(): {when: number, index: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
    }

    /**
     * Cancel a named scheduled task.
     */
    get asV108(): {id: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '51398a85c66da0223a7ce9c9f25224fabae958a7d954b6aa34960068999e0d07'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV108(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v108.MaybeHashed} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '940437d3407055bc2c81e7c97e2a477f8782edc669c0efa13466d63597db53a1'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV115(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v115.MaybeHashed} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV125(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'd9191acac1f55409bcf34c0d840b39c02ce33d0326e880bcd72f4dbf83e858ac'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV125(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v125.MaybeHashed} {
        assert(this.isV125)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV138(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'df6e195835fa003c05d474af6ffa044594d645f46a43e133c95a7a854d4630c5'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV138(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v138.MaybeHashed} {
        assert(this.isV138)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '245174d33b9e63eff2b501dc1b54e182422de38aeb8f390c644c576338980617'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV108(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v108.MaybeHashed} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '5f4fd66e4a4c4eb2d87d67378630f4bb84de770541afff38d5f8441f4faab688'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV115(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v115.MaybeHashed} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV125(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'a75ed38bb8988ef6ffac119ebf86535729496de057639400489f3215ec2c83bb'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV125(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v125.MaybeHashed} {
        assert(this.isV125)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV138(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'a99a1c0afc28b9614e192802c6455b895830c39e60029b99985340d9ae4ba79f'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV138(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v138.MaybeHashed} {
        assert(this.isV138)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'abd7520fa0d1187bbb37b914ccf970b7375fbb5973dfff72d9cbbb2afa8471b2'
    }

    /**
     * Schedule a named task.
     */
    get asV108(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v108.MaybeHashed} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'c84b4c17f143053993f6fee99fe236e5e14e3078222f59813471b6040f546eb9'
    }

    /**
     * Schedule a named task.
     */
    get asV115(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v115.MaybeHashed} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV125(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'e56b6dfbb54b38acb968f7cec16fb743f5e16024bb725a014d74f0cc11f948d3'
    }

    /**
     * Schedule a named task.
     */
    get asV125(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v125.MaybeHashed} {
        assert(this.isV125)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV138(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '7ce093affab0bfc3a765254fb8c87b03c5b8ab5abed012f6c9ce385c05b5f39b'
    }

    /**
     * Schedule a named task.
     */
    get asV138(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v138.MaybeHashed} {
        assert(this.isV138)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'ad235da082a506c117f0d8ed5d426949dd633ed80c5b007a2bf3bea831f4c8b9'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV108(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v108.MaybeHashed} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '94d7113d8bd107b181ad9bd696d9cf6bb6d68791c180471df1c9a3eae57102a9'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV115(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v115.MaybeHashed} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV125(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'd566184ab30e12b47a3410348314195f028e69f0985e3de487c55bf82941fd57'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV125(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v125.MaybeHashed} {
        assert(this.isV125)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV138(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'de3495971fb7b7f6e663538ca70220d4bdc71bcce671c1e717cc54e6d2ec9e44'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV138(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v138.MaybeHashed} {
        assert(this.isV138)
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
     * 
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     * 
     * # <weight>
     * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
     *   of `T::Keys::key_ids()` which is fixed.
     * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     * - DbWrites: `NextKeys`, `origin account`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isV100(): boolean {
        return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Removes any session key(s) of the function caller.
     * 
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     * 
     * # <weight>
     * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
     *   of `T::Keys::key_ids()` which is fixed.
     * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     * - DbWrites: `NextKeys`, `origin account`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asV100(): null {
        assert(this.isV100)
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
    get isV100(): boolean {
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
    get asV100(): {keys: v100.SessionKeys, proof: Uint8Array} {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
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
    get asV100(): {new: Uint8Array} {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '4729f0b8cb384d42b57886a994796ea34bec0e28867df708b64808c8febb2609'
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
    get asV100(): {call: v100.Call} {
        assert(this.isV100)
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
    get isV104(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '4326aba09cd85345d3b17c738cb08f3f0e8a5900a2253d7d122f19d036aa3581'
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
    get asV104(): {call: v104.Call} {
        assert(this.isV104)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '215bc15ce7334783b98277dffe3ef906a9bea5bdc83daee480d23b9b19379b2b'
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
    get asV108(): {call: v108.Call} {
        assert(this.isV108)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '84e83be93ea90267c16fe577a89b3b6d0edcad18b390d917d332ecfb5275b86d'
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
    get asV100(): {who: Uint8Array, call: v100.Call} {
        assert(this.isV100)
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
    get isV104(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '185ccb258376d38000c874d937d69d4c095f19c0356c184887267b014c4479a7'
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
    get asV104(): {who: Uint8Array, call: v104.Call} {
        assert(this.isV104)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '7a2685f2c5ac93118098b04b77bf563055e4620d13c033bbc3fd36a27f3d3739'
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
    get asV108(): {who: Uint8Array, call: v108.Call} {
        assert(this.isV108)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '449009f57ded81be36c6f77b2e60323057df7b9a43de1cb39ea71866219857a8'
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
    get asV100(): {call: v100.Call, weight: bigint} {
        assert(this.isV100)
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
    get isV104(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '76dfaf856a6dad0cedb6ed90e3ed8829d9e3e5805a82679b0ff85484ad98800e'
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
    get asV104(): {call: v104.Call, weight: bigint} {
        assert(this.isV104)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '1e4a356109a47eef72ba090c58113ca1f83d8b3f94c4b79fe092b0285c9d383e'
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
    get asV108(): {call: v108.Call, weight: bigint} {
        assert(this.isV108)
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
    get isV100(): boolean {
        return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
    }

    /**
     * A dispatch that will fill the block weight up to the given ratio.
     */
    get asV100(): {ratio: number} {
        assert(this.isV100)
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
    get isV100(): boolean {
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
    get asV100(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV100)
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
    get isV100(): boolean {
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
    get asV100(): {keys: Uint8Array[]} {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    get asV100(): {remark: Uint8Array} {
        assert(this.isV100)
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
    get isV100(): boolean {
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
    get asV100(): {remark: Uint8Array} {
        assert(this.isV100)
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
    get isV100(): boolean {
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
    get asV100(): {changesTrieConfig: (v100.ChangesTrieConfiguration | undefined)} {
        assert(this.isV100)
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
    get isV100(): boolean {
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
    get asV100(): {code: Uint8Array} {
        assert(this.isV100)
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
    get isV100(): boolean {
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
    get asV100(): {code: Uint8Array} {
        assert(this.isV100)
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
    get isV100(): boolean {
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
    get asV100(): {pages: bigint} {
        assert(this.isV100)
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
    get isV100(): boolean {
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
    get asV100(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV100)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV108)
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
    get isV115(): boolean {
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
    get asV115(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV115)
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
    get isV108(): boolean {
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
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'f8b8efcadc65f3f9385828e06793c46c35e2c59970d2c396dba17b4df05b9aa5'
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
    get asV108(): {proposal: v108.Call, lengthBound: number} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '08c9b75648b410be418bd9aefa5a65ec58a00ad485f7c9028de49a2fa10d8f97'
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
    get asV115(): {proposal: v115.Call, lengthBound: number} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '70b38f85887dd5e650f9b8aaf523440394b70abedab0d2eb38c2f5c61bb1031c'
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
    get asV125(): {proposal: v125.Call, lengthBound: number} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '118f47ebf5c3588c4c36b450aeeeb913599d57923c218c04957babe19e14af9a'
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
    get asV138(): {proposal: v138.Call, lengthBound: number} {
        assert(this.isV138)
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
    get isV108(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'f5aa25d1085e94ed780247e20de66f697930fc826c7dc7d42cce87751a5bbc2e'
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
    get asV108(): {threshold: number, proposal: v108.Call, lengthBound: number} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'a65b7aa02853f926bd60b8660c6609556815fb62f8838a6cb930ad2a18e94a4d'
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
    get asV115(): {threshold: number, proposal: v115.Call, lengthBound: number} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '284260f12bf173d220a168c819d71ffb511f51416cabaa9d622c7de52c3bef65'
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
    get asV125(): {threshold: number, proposal: v125.Call, lengthBound: number} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '976486045b1a00393a67e7f653e2f153f07e3207622640bc86811b5ea8585632'
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
    get asV138(): {threshold: number, proposal: v138.Call, lengthBound: number} {
        assert(this.isV138)
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
    get isV108(): boolean {
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
    get asV108(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV108)
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
    get isV100(): boolean {
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
    get asV100(): {now: bigint} {
        assert(this.isV100)
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
     * Close and payout a tip.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * The tip identified by `hash` must have finished its countdown period.
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     * # <weight>
     * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
     *   `T`. `T` is charged as upper bound given by `ContainsLengthBound`. The actual cost
     *   depends on the implementation of `T::Tippers`.
     * - DbReads: `Tips`, `Tippers`, `tip finder`
     * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
     * # </weight>
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tips.close_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Close and payout a tip.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * The tip identified by `hash` must have finished its countdown period.
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     * # <weight>
     * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
     *   `T`. `T` is charged as upper bound given by `ContainsLengthBound`. The actual cost
     *   depends on the implementation of `T::Tippers`.
     * - DbReads: `Tips`, `Tippers`, `tip finder`
     * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
     * # </weight>
     */
    get asV108(): {hash: Uint8Array} {
        assert(this.isV108)
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
     * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`.
     * 
     * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *   a UTF-8-encoded URL.
     * - `who`: The account which should be credited for the tip.
     * 
     * Emits `NewTip` if successful.
     * 
     * # <weight>
     * - Complexity: `O(R)` where `R` length of `reason`.
     *   - encoding and hashing of 'reason'
     * - DbReads: `Reasons`, `Tips`
     * - DbWrites: `Reasons`, `Tips`
     * # </weight>
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tips.report_awesome') === '5f39cdb6a1bab5505c2717a3d34b1ad66c35bb6aca421780ce60b4e9017fe886'
    }

    /**
     * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`.
     * 
     * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *   a UTF-8-encoded URL.
     * - `who`: The account which should be credited for the tip.
     * 
     * Emits `NewTip` if successful.
     * 
     * # <weight>
     * - Complexity: `O(R)` where `R` length of `reason`.
     *   - encoding and hashing of 'reason'
     * - DbReads: `Reasons`, `Tips`
     * - DbWrites: `Reasons`, `Tips`
     * # </weight>
     */
    get asV108(): {reason: Uint8Array, who: Uint8Array} {
        assert(this.isV108)
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
     * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
     * 
     * If successful, the original deposit will be unreserved.
     * 
     * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
     * must have been reported by the signing account through `report_awesome` (and not
     * through `tip_new`).
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     * Emits `TipRetracted` if successful.
     * 
     * # <weight>
     * - Complexity: `O(1)`
     *   - Depends on the length of `T::Hash` which is fixed.
     * - DbReads: `Tips`, `origin account`
     * - DbWrites: `Reasons`, `Tips`, `origin account`
     * # </weight>
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tips.retract_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
     * 
     * If successful, the original deposit will be unreserved.
     * 
     * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
     * must have been reported by the signing account through `report_awesome` (and not
     * through `tip_new`).
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     * Emits `TipRetracted` if successful.
     * 
     * # <weight>
     * - Complexity: `O(1)`
     *   - Depends on the length of `T::Hash` which is fixed.
     * - DbReads: `Tips`, `origin account`
     * - DbWrites: `Reasons`, `Tips`, `origin account`
     * # </weight>
     */
    get asV108(): {hash: Uint8Array} {
        assert(this.isV108)
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
     * Remove and slash an already-open tip.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * As a result, the finder is slashed and the deposits are lost.
     * 
     * Emits `TipSlashed` if successful.
     * 
     * # <weight>
     *   `T` is charged as upper bound given by `ContainsLengthBound`.
     *   The actual cost depends on the implementation of `T::Tippers`.
     * # </weight>
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tips.slash_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Remove and slash an already-open tip.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * As a result, the finder is slashed and the deposits are lost.
     * 
     * Emits `TipSlashed` if successful.
     * 
     * # <weight>
     *   `T` is charged as upper bound given by `ContainsLengthBound`.
     *   The actual cost depends on the implementation of `T::Tippers`.
     * # </weight>
     */
    get asV108(): {hash: Uint8Array} {
        assert(this.isV108)
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
     * Declare a tip value for an already-open tip.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must be a
     * member of the `Tippers` set.
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *   account ID.
     * - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *   value of active tippers will be given to the `who`.
     * 
     * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     * has started.
     * 
     * # <weight>
     * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
     *   `T`, insert tip and check closing, `T` is charged as upper bound given by
     *   `ContainsLengthBound`. The actual cost depends on the implementation of `T::Tippers`.
     * 
     *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *   is weighted as if almost full i.e of length `T-1`.
     * - DbReads: `Tippers`, `Tips`
     * - DbWrites: `Tips`
     * # </weight>
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tips.tip') === 'f3795cdab18c292963e0e30ece37a15a2900030efc315a8e3f28ba886b2b9f58'
    }

    /**
     * Declare a tip value for an already-open tip.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must be a
     * member of the `Tippers` set.
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *   account ID.
     * - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *   value of active tippers will be given to the `who`.
     * 
     * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     * has started.
     * 
     * # <weight>
     * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
     *   `T`, insert tip and check closing, `T` is charged as upper bound given by
     *   `ContainsLengthBound`. The actual cost depends on the implementation of `T::Tippers`.
     * 
     *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *   is weighted as if almost full i.e of length `T-1`.
     * - DbReads: `Tippers`, `Tips`
     * - DbWrites: `Tips`
     * # </weight>
     */
    get asV108(): {hash: Uint8Array, tipValue: bigint} {
        assert(this.isV108)
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
     * Give a tip for something new; no finder's fee will be taken.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must be a
     * member of the `Tippers` set.
     * 
     * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *   a UTF-8-encoded URL.
     * - `who`: The account which should be credited for the tip.
     * - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *   value of active tippers will be given to the `who`.
     * 
     * Emits `NewTip` if successful.
     * 
     * # <weight>
     * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
     *     `ContainsLengthBound`. The actual cost depends on the implementation of
     *     `T::Tippers`.
     *   - `O(R)`: hashing and encoding of reason of length `R`
     * - DbReads: `Tippers`, `Reasons`
     * - DbWrites: `Reasons`, `Tips`
     * # </weight>
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tips.tip_new') === '367b1dcdffb32d8c4b26e342e9b515c65f2589dec81f4a3f6f336faaa7e127ac'
    }

    /**
     * Give a tip for something new; no finder's fee will be taken.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must be a
     * member of the `Tippers` set.
     * 
     * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *   a UTF-8-encoded URL.
     * - `who`: The account which should be credited for the tip.
     * - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *   value of active tippers will be given to the `who`.
     * 
     * Emits `NewTip` if successful.
     * 
     * # <weight>
     * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
     *     `ContainsLengthBound`. The actual cost depends on the implementation of
     *     `T::Tippers`.
     *   - `O(R)`: hashing and encoding of reason of length `R`
     * - DbReads: `Tippers`, `Reasons`
     * - DbWrites: `Reasons`, `Tips`
     * # </weight>
     */
    get asV108(): {reason: Uint8Array, who: Uint8Array, tipValue: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class TokensForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tokens.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source
     * account may be specified.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The sender of the transfer.
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tokens.force_transfer') === '03ae65ffcb050d1a5f07226901a4dd126b516b5cbb0c2ec5486bf9cc4eb92a25'
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source
     * account may be specified.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The sender of the transfer.
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    get asV108(): {source: Uint8Array, dest: Uint8Array, currencyId: number, amount: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class TokensSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tokens.set_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it
     * will also decrease the total issuance of the system
     * (`TotalIssuance`). If the new free or reserved balance is below the
     * existential deposit, it will reap the `AccountInfo`.
     * 
     * The dispatch origin for this call is `root`.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tokens.set_balance') === 'bb217c2e772e23f283f74504acd25cc61bec482f7cf2843bfc8a333fcca93e41'
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it
     * will also decrease the total issuance of the system
     * (`TotalIssuance`). If the new free or reserved balance is below the
     * existential deposit, it will reap the `AccountInfo`.
     * 
     * The dispatch origin for this call is `root`.
     */
    get asV108(): {who: Uint8Array, currencyId: number, newFree: bigint, newReserved: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class TokensTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tokens.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * It will decrease the total issuance of the system by the
     * `TransferFee`. If the sender's account is below the existential
     * deposit as a result of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tokens.transfer') === 'f9417776835359c4df2af31d48b33bac20ebcc850ed3738fcbccd673124fb252'
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * It will decrease the total issuance of the system by the
     * `TransferFee`. If the sender's account is below the existential
     * deposit as a result of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    get asV108(): {dest: Uint8Array, currencyId: number, amount: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class TokensTransferAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tokens.transfer_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer all remaining balance to the given account.
     * 
     * NOTE: This function only attempts to transfer _transferable_
     * balances. This means that any locked, reserved, or existential
     * deposits (when `keep_alive` is `true`), will not be transferred by
     * this function. To ensure that this function results in a killed
     * account, you might need to prepare the account by removing any
     * reference counters, storage deposits, etc...
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `keep_alive`: A boolean to determine if the `transfer_all`
     *   operation should send all of the funds the account has, causing
     *   the sender account to be killed (false), or transfer everything
     *   except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true).
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tokens.transfer_all') === '0cab462a3623f31f93271da96b823635d8988375ef69ec29a253fe44165a2324'
    }

    /**
     * Transfer all remaining balance to the given account.
     * 
     * NOTE: This function only attempts to transfer _transferable_
     * balances. This means that any locked, reserved, or existential
     * deposits (when `keep_alive` is `true`), will not be transferred by
     * this function. To ensure that this function results in a killed
     * account, you might need to prepare the account by removing any
     * reference counters, storage deposits, etc...
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `keep_alive`: A boolean to determine if the `transfer_all`
     *   operation should send all of the funds the account has, causing
     *   the sender account to be killed (false), or transfer everything
     *   except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true).
     */
    get asV108(): {dest: Uint8Array, currencyId: number, keepAlive: boolean} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class TokensTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tokens.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer
     * will not kill the origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    get isV108(): boolean {
        return this._chain.getCallHash('Tokens.transfer_keep_alive') === 'f9417776835359c4df2af31d48b33bac20ebcc850ed3738fcbccd673124fb252'
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer
     * will not kill the origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     * 
     * - `dest`: The recipient of the transfer.
     * - `currency_id`: currency type.
     * - `amount`: free balance amount to tranfer.
     */
    get asV108(): {dest: Uint8Array, currencyId: number, amount: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class TransactionPausePauseTransactionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TransactionPause.pause_transaction')
        this._chain = ctx._chain
        this.call = call
    }

    get isV115(): boolean {
        return this._chain.getCallHash('TransactionPause.pause_transaction') === '9f7ea81680daeafc9598d45a2a8cebeeecb2ddd4c023d1961eb29f8509623297'
    }

    get asV115(): {palletName: Uint8Array, functionName: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class TransactionPauseUnpauseTransactionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TransactionPause.unpause_transaction')
        this._chain = ctx._chain
        this.call = call
    }

    get isV115(): boolean {
        return this._chain.getCallHash('TransactionPause.unpause_transaction') === '9f7ea81680daeafc9598d45a2a8cebeeecb2ddd4c023d1961eb29f8509623297'
    }

    get asV115(): {palletName: Uint8Array, functionName: Uint8Array} {
        assert(this.isV115)
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
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1).
     * - DbReads: `Proposals`, `Approvals`
     * - DbWrite: `Approvals`
     * # </weight>
     */
    get isV100(): boolean {
        return this._chain.getCallHash('Treasury.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1).
     * - DbReads: `Proposals`, `Approvals`
     * - DbWrite: `Approvals`
     * # </weight>
     */
    get asV100(): {proposalId: number} {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Treasury.propose_spend') === '98e9af32f46010396e58ac70ce7c017f7e95d81b05c03d5e5aeb94ce27732909'
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
    get asV100(): {value: bigint, beneficiary: Uint8Array} {
        assert(this.isV100)
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
     * Reject a proposed spend. The original deposit will be slashed.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `Proposals`, `rejected proposer account`
     * - DbWrites: `Proposals`, `rejected proposer account`
     * # </weight>
     */
    get isV100(): boolean {
        return this._chain.getCallHash('Treasury.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Reject a proposed spend. The original deposit will be slashed.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `Proposals`, `rejected proposer account`
     * - DbWrites: `Proposals`, `rejected proposer account`
     * # </weight>
     */
    get asV100(): {proposalId: number} {
        assert(this.isV100)
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
    get isV115(): boolean {
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
    get asV115(): {proposalId: number} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Treasury.spend') === '3ad24d6bf861df7e8dbba2afad9bcb65d82159613df5db181e98b7561939c1bb'
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
    get asV115(): {amount: bigint, beneficiary: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesApproveTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.approve_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve an item to be transferred by a delegated third-party account.
     * 
     * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be
     * either the owner of the `item` or the admin of the collection.
     * 
     * - `collection`: The collection of the item to be approved for delegated transfer.
     * - `item`: The item of the item to be approved for delegated transfer.
     * - `delegate`: The account to delegate permission to transfer the item.
     * 
     * Important NOTE: The `approved` account gets reset after each transfer.
     * 
     * Emits `ApprovedTransfer` on success.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.approve_transfer') === '7fe2447529ee65a215cddf2ba8e70db8a88e912515c8ee810485f436427d64f1'
    }

    /**
     * Approve an item to be transferred by a delegated third-party account.
     * 
     * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be
     * either the owner of the `item` or the admin of the collection.
     * 
     * - `collection`: The collection of the item to be approved for delegated transfer.
     * - `item`: The item of the item to be approved for delegated transfer.
     * - `delegate`: The account to delegate permission to transfer the item.
     * 
     * Important NOTE: The `approved` account gets reset after each transfer.
     * 
     * Emits `ApprovedTransfer` on success.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, item: bigint, delegate: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.burn')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Destroy a single item.
     * 
     * Origin must be Signed and the sender should be the Admin of the `collection`.
     * 
     * - `collection`: The collection of the item to be burned.
     * - `item`: The item of the item to be burned.
     * - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
     *   item is owned by this value.
     * 
     * Emits `Burned` with the actual amount burned.
     * 
     * Weight: `O(1)`
     * Modes: `check_owner.is_some()`.
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.burn') === 'f8263555f6232be6dccfd41abae3e0f5b144f7608b6aeaaf21df07f28f1cbe44'
    }

    /**
     * Destroy a single item.
     * 
     * Origin must be Signed and the sender should be the Admin of the `collection`.
     * 
     * - `collection`: The collection of the item to be burned.
     * - `item`: The item of the item to be burned.
     * - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
     *   item is owned by this value.
     * 
     * Emits `Burned` with the actual amount burned.
     * 
     * Weight: `O(1)`
     * Modes: `check_owner.is_some()`.
     */
    get asV115(): {collection: bigint, item: bigint, checkOwner: (Uint8Array | undefined)} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesBuyItemCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.buy_item')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Allows to buy an item if it's up for sale.
     * 
     * Origin must be Signed and must not be the owner of the `item`.
     * 
     * - `collection`: The collection of the item.
     * - `item`: The item the sender wants to buy.
     * - `bid_price`: The price the sender is willing to pay.
     * 
     * Emits `ItemBought` on success.
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.buy_item') === '33f31255c9a941573ba26fff4be1426daea2968a6177f36cf52187f6acfbe03d'
    }

    /**
     * Allows to buy an item if it's up for sale.
     * 
     * Origin must be Signed and must not be the owner of the `item`.
     * 
     * - `collection`: The collection of the item.
     * - `item`: The item the sender wants to buy.
     * - `bid_price`: The price the sender is willing to pay.
     * 
     * Emits `ItemBought` on success.
     */
    get asV115(): {collection: bigint, item: bigint, bidPrice: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesCancelApprovalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.cancel_approval')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel the prior approval for the transfer of an item by a delegate.
     * 
     * Origin must be either:
     * - the `Force` origin;
     * - `Signed` with the signer being the Admin of the `collection`;
     * - `Signed` with the signer being the Owner of the `item`;
     * 
     * Arguments:
     * - `collection`: The collection of the item of whose approval will be cancelled.
     * - `item`: The item of the item of whose approval will be cancelled.
     * - `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
     *   which permission of transfer is delegated.
     * 
     * Emits `ApprovalCancelled` on success.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.cancel_approval') === 'ba2e5dd509be11d422a3212746dfa683b529ae03c88e3f271f3c62bea6ff88e1'
    }

    /**
     * Cancel the prior approval for the transfer of an item by a delegate.
     * 
     * Origin must be either:
     * - the `Force` origin;
     * - `Signed` with the signer being the Admin of the `collection`;
     * - `Signed` with the signer being the Owner of the `item`;
     * 
     * Arguments:
     * - `collection`: The collection of the item of whose approval will be cancelled.
     * - `item`: The item of the item of whose approval will be cancelled.
     * - `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
     *   which permission of transfer is delegated.
     * 
     * Emits `ApprovalCancelled` on success.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, item: bigint, maybeCheckDelegate: (Uint8Array | undefined)} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesClearAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.clear_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear an attribute for a collection or item.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * `collection`.
     * 
     * Any deposit is freed for the collection's owner.
     * 
     * - `collection`: The identifier of the collection whose item's metadata to clear.
     * - `maybe_item`: The identifier of the item whose metadata to clear.
     * - `key`: The key of the attribute.
     * 
     * Emits `AttributeCleared`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.clear_attribute') === 'a04de1ba5f46601cc6aa1056a8f7154ca8cc9a7fa1ef4610fa61fc991d298045'
    }

    /**
     * Clear an attribute for a collection or item.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * `collection`.
     * 
     * Any deposit is freed for the collection's owner.
     * 
     * - `collection`: The identifier of the collection whose item's metadata to clear.
     * - `maybe_item`: The identifier of the item whose metadata to clear.
     * - `key`: The key of the attribute.
     * 
     * Emits `AttributeCleared`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, maybeItem: (bigint | undefined), key: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesClearCollectionMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.clear_collection_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear the metadata for a collection.
     * 
     * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     * the `collection`.
     * 
     * Any deposit is freed for the collection's owner.
     * 
     * - `collection`: The identifier of the collection whose metadata to clear.
     * 
     * Emits `CollectionMetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.clear_collection_metadata') === '42d161ea24cc4e1fc2a84c38dfcedefd1fbcb60ca0bfa1ee7a6d2d8dca782faa'
    }

    /**
     * Clear the metadata for a collection.
     * 
     * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     * the `collection`.
     * 
     * Any deposit is freed for the collection's owner.
     * 
     * - `collection`: The identifier of the collection whose metadata to clear.
     * 
     * Emits `CollectionMetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesClearMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.clear_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear the metadata for an item.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * `item`.
     * 
     * Any deposit is freed for the collection's owner.
     * 
     * - `collection`: The identifier of the collection whose item's metadata to clear.
     * - `item`: The identifier of the item whose metadata to clear.
     * 
     * Emits `MetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.clear_metadata') === 'c821cd7d11475c687a8c2699e93803f3af5ff5ca69f1729084558320c80b4931'
    }

    /**
     * Clear the metadata for an item.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * `item`.
     * 
     * Any deposit is freed for the collection's owner.
     * 
     * - `collection`: The identifier of the collection whose item's metadata to clear.
     * - `item`: The identifier of the item whose metadata to clear.
     * 
     * Emits `MetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, item: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesCreateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.create')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Issue a new collection of non-fungible items from a public origin.
     * 
     * This new collection has no items initially and its owner is the origin.
     * 
     * The origin must be Signed and the sender must have sufficient funds free.
     * 
     * `ItemDeposit` funds of sender are reserved.
     * 
     * Parameters:
     * - `collection`: The identifier of the new collection. This must not be currently in use.
     * - `admin`: The admin of this collection. The admin is the initial address of each
     * member of the collection's admin team.
     * 
     * Emits `Created` event when successful.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.create') === 'e2e491ed7445f21707ba41dce2db50e469fa4be1ce40e8a60680e23d7f3cb754'
    }

    /**
     * Issue a new collection of non-fungible items from a public origin.
     * 
     * This new collection has no items initially and its owner is the origin.
     * 
     * The origin must be Signed and the sender must have sufficient funds free.
     * 
     * `ItemDeposit` funds of sender are reserved.
     * 
     * Parameters:
     * - `collection`: The identifier of the new collection. This must not be currently in use.
     * - `admin`: The admin of this collection. The admin is the initial address of each
     * member of the collection's admin team.
     * 
     * Emits `Created` event when successful.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, admin: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesDestroyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.destroy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Destroy a collection of fungible items.
     * 
     * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
     * owner of the `collection`.
     * 
     * - `collection`: The identifier of the collection to be destroyed.
     * - `witness`: Information on the items minted in the collection. This must be
     * correct.
     * 
     * Emits `Destroyed` event when successful.
     * 
     * Weight: `O(n + m)` where:
     * - `n = witness.items`
     * - `m = witness.item_metadatas`
     * - `a = witness.attributes`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.destroy') === 'ad8351490681606c2b5ce07cbc8ffe26d1bb7925593127637b02e736850d2d5e'
    }

    /**
     * Destroy a collection of fungible items.
     * 
     * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
     * owner of the `collection`.
     * 
     * - `collection`: The identifier of the collection to be destroyed.
     * - `witness`: Information on the items minted in the collection. This must be
     * correct.
     * 
     * Emits `Destroyed` event when successful.
     * 
     * Weight: `O(n + m)` where:
     * - `n = witness.items`
     * - `m = witness.item_metadatas`
     * - `a = witness.attributes`
     */
    get asV115(): {collection: bigint, witness: v115.DestroyWitness} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesForceCreateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.force_create')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Issue a new collection of non-fungible items from a privileged origin.
     * 
     * This new collection has no items initially.
     * 
     * The origin must conform to `ForceOrigin`.
     * 
     * Unlike `create`, no funds are reserved.
     * 
     * - `collection`: The identifier of the new item. This must not be currently in use.
     * - `owner`: The owner of this collection of items. The owner has full superuser
     *   permissions
     * over this item, but may later change and configure the permissions using
     * `transfer_ownership` and `set_team`.
     * 
     * Emits `ForceCreated` event when successful.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.force_create') === '9c80addd72ef213e9b481651096c82b4a5222a3aba93c9213599384c043120ba'
    }

    /**
     * Issue a new collection of non-fungible items from a privileged origin.
     * 
     * This new collection has no items initially.
     * 
     * The origin must conform to `ForceOrigin`.
     * 
     * Unlike `create`, no funds are reserved.
     * 
     * - `collection`: The identifier of the new item. This must not be currently in use.
     * - `owner`: The owner of this collection of items. The owner has full superuser
     *   permissions
     * over this item, but may later change and configure the permissions using
     * `transfer_ownership` and `set_team`.
     * 
     * Emits `ForceCreated` event when successful.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, owner: Uint8Array, freeHolding: boolean} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesForceItemStatusCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.force_item_status')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Alter the attributes of a given item.
     * 
     * Origin must be `ForceOrigin`.
     * 
     * - `collection`: The identifier of the item.
     * - `owner`: The new Owner of this item.
     * - `issuer`: The new Issuer of this item.
     * - `admin`: The new Admin of this item.
     * - `freezer`: The new Freezer of this item.
     * - `free_holding`: Whether a deposit is taken for holding an item of this collection.
     * - `is_frozen`: Whether this collection is frozen except for permissioned/admin
     * instructions.
     * 
     * Emits `ItemStatusChanged` with the identity of the item.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.force_item_status') === 'c502e7d714679676cbf59113bc6890c55dd6a262c6c6b2fd549a38cde60d24d7'
    }

    /**
     * Alter the attributes of a given item.
     * 
     * Origin must be `ForceOrigin`.
     * 
     * - `collection`: The identifier of the item.
     * - `owner`: The new Owner of this item.
     * - `issuer`: The new Issuer of this item.
     * - `admin`: The new Admin of this item.
     * - `freezer`: The new Freezer of this item.
     * - `free_holding`: Whether a deposit is taken for holding an item of this collection.
     * - `is_frozen`: Whether this collection is frozen except for permissioned/admin
     * instructions.
     * 
     * Emits `ItemStatusChanged` with the identity of the item.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, owner: Uint8Array, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array, freeHolding: boolean, isFrozen: boolean} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesFreezeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.freeze')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disallow further unprivileged transfer of an item.
     * 
     * Origin must be Signed and the sender should be the Freezer of the `collection`.
     * 
     * - `collection`: The collection of the item to be frozen.
     * - `item`: The item of the item to be frozen.
     * 
     * Emits `Frozen`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.freeze') === 'c821cd7d11475c687a8c2699e93803f3af5ff5ca69f1729084558320c80b4931'
    }

    /**
     * Disallow further unprivileged transfer of an item.
     * 
     * Origin must be Signed and the sender should be the Freezer of the `collection`.
     * 
     * - `collection`: The collection of the item to be frozen.
     * - `item`: The item of the item to be frozen.
     * 
     * Emits `Frozen`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, item: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesFreezeCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.freeze_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disallow further unprivileged transfers for a whole collection.
     * 
     * Origin must be Signed and the sender should be the Freezer of the `collection`.
     * 
     * - `collection`: The collection to be frozen.
     * 
     * Emits `CollectionFrozen`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.freeze_collection') === '42d161ea24cc4e1fc2a84c38dfcedefd1fbcb60ca0bfa1ee7a6d2d8dca782faa'
    }

    /**
     * Disallow further unprivileged transfers for a whole collection.
     * 
     * Origin must be Signed and the sender should be the Freezer of the `collection`.
     * 
     * - `collection`: The collection to be frozen.
     * 
     * Emits `CollectionFrozen`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Mint an item of a particular collection.
     * 
     * The origin must be Signed and the sender must be the Issuer of the `collection`.
     * 
     * - `collection`: The collection of the item to be minted.
     * - `item`: The item value of the item to be minted.
     * - `beneficiary`: The initial owner of the minted item.
     * 
     * Emits `Issued` event when successful.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.mint') === '82ff14a27dcf02d249d334e09f021a33c506d398cecf87a499c4a749964fb7bf'
    }

    /**
     * Mint an item of a particular collection.
     * 
     * The origin must be Signed and the sender must be the Issuer of the `collection`.
     * 
     * - `collection`: The collection of the item to be minted.
     * - `item`: The item value of the item to be minted.
     * - `beneficiary`: The initial owner of the minted item.
     * 
     * Emits `Issued` event when successful.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, item: bigint, owner: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesRedepositCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.redeposit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Reevaluate the deposits on some items.
     * 
     * Origin must be Signed and the sender should be the Owner of the `collection`.
     * 
     * - `collection`: The collection to be frozen.
     * - `items`: The items of the collection whose deposits will be reevaluated.
     * 
     * NOTE: This exists as a best-effort function. Any items which are unknown or
     * in the case that the owner account does not have reservable funds to pay for a
     * deposit increase are ignored. Generally the owner isn't going to call this on items
     * whose existing deposit is less than the refreshed deposit as it would only cost them,
     * so it's of little consequence.
     * 
     * It will still return an error in the case that the collection is unknown of the signer
     * is not permitted to call it.
     * 
     * Weight: `O(items.len())`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.redeposit') === 'c06d5693195aac3456f2cbd5406714575a0dde889c1232243e2a68db94c180d3'
    }

    /**
     * Reevaluate the deposits on some items.
     * 
     * Origin must be Signed and the sender should be the Owner of the `collection`.
     * 
     * - `collection`: The collection to be frozen.
     * - `items`: The items of the collection whose deposits will be reevaluated.
     * 
     * NOTE: This exists as a best-effort function. Any items which are unknown or
     * in the case that the owner account does not have reservable funds to pay for a
     * deposit increase are ignored. Generally the owner isn't going to call this on items
     * whose existing deposit is less than the refreshed deposit as it would only cost them,
     * so it's of little consequence.
     * 
     * It will still return an error in the case that the collection is unknown of the signer
     * is not permitted to call it.
     * 
     * Weight: `O(items.len())`
     */
    get asV115(): {collection: bigint, items: bigint[]} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesSetAcceptOwnershipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.set_accept_ownership')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set (or reset) the acceptance of ownership for a particular account.
     * 
     * Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
     * provider reference.
     * 
     * - `maybe_collection`: The identifier of the collection whose ownership the signer is
     *   willing to accept, or if `None`, an indication that the signer is willing to accept no
     *   ownership transferal.
     * 
     * Emits `OwnershipAcceptanceChanged`.
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.set_accept_ownership') === 'a4df8c54a4dbfa6c02f5dca4dbd99539d668d2f11a7c83cbcedf85ad8c952975'
    }

    /**
     * Set (or reset) the acceptance of ownership for a particular account.
     * 
     * Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
     * provider reference.
     * 
     * - `maybe_collection`: The identifier of the collection whose ownership the signer is
     *   willing to accept, or if `None`, an indication that the signer is willing to accept no
     *   ownership transferal.
     * 
     * Emits `OwnershipAcceptanceChanged`.
     */
    get asV115(): {maybeCollection: (bigint | undefined)} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesSetAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.set_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set an attribute for a collection or item.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * `collection`.
     * 
     * If the origin is Signed, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
     * account any already reserved funds.
     * 
     * - `collection`: The identifier of the collection whose item's metadata to set.
     * - `maybe_item`: The identifier of the item whose metadata to set.
     * - `key`: The key of the attribute.
     * - `value`: The value to which to set the attribute.
     * 
     * Emits `AttributeSet`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.set_attribute') === '48d8e27637aa98981bf7ef92bf37abee3438d63b225e91ba54341c2cf45b7253'
    }

    /**
     * Set an attribute for a collection or item.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * `collection`.
     * 
     * If the origin is Signed, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
     * account any already reserved funds.
     * 
     * - `collection`: The identifier of the collection whose item's metadata to set.
     * - `maybe_item`: The identifier of the item whose metadata to set.
     * - `key`: The key of the attribute.
     * - `value`: The value to which to set the attribute.
     * 
     * Emits `AttributeSet`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, maybeItem: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesSetCollectionMaxSupplyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.set_collection_max_supply')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the maximum amount of items a collection could have.
     * 
     * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     * the `collection`.
     * 
     * Note: This function can only succeed once per collection.
     * 
     * - `collection`: The identifier of the collection to change.
     * - `max_supply`: The maximum amount of items a collection could have.
     * 
     * Emits `CollectionMaxSupplySet` event when successful.
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.set_collection_max_supply') === '2e2592121f294d135353601dbc3ade10802eef0ed788d890539ffe41ae0d6bbe'
    }

    /**
     * Set the maximum amount of items a collection could have.
     * 
     * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     * the `collection`.
     * 
     * Note: This function can only succeed once per collection.
     * 
     * - `collection`: The identifier of the collection to change.
     * - `max_supply`: The maximum amount of items a collection could have.
     * 
     * Emits `CollectionMaxSupplySet` event when successful.
     */
    get asV115(): {collection: bigint, maxSupply: number} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesSetCollectionMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.set_collection_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the metadata for a collection.
     * 
     * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     * the `collection`.
     * 
     * If the origin is `Signed`, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * data.len` taking into
     * account any already reserved funds.
     * 
     * - `collection`: The identifier of the item whose metadata to update.
     * - `data`: The general information of this item. Limited in length by `StringLimit`.
     * - `is_frozen`: Whether the metadata should be frozen against further changes.
     * 
     * Emits `CollectionMetadataSet`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.set_collection_metadata') === '1e2c3d4778cb9e9c9369bc4af465e3aab77779c7e7a7337fd0d69b1f3bcef832'
    }

    /**
     * Set the metadata for a collection.
     * 
     * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     * the `collection`.
     * 
     * If the origin is `Signed`, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * data.len` taking into
     * account any already reserved funds.
     * 
     * - `collection`: The identifier of the item whose metadata to update.
     * - `data`: The general information of this item. Limited in length by `StringLimit`.
     * - `is_frozen`: Whether the metadata should be frozen against further changes.
     * 
     * Emits `CollectionMetadataSet`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesSetMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.set_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the metadata for an item.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * `collection`.
     * 
     * If the origin is Signed, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * data.len` taking into
     * account any already reserved funds.
     * 
     * - `collection`: The identifier of the collection whose item's metadata to set.
     * - `item`: The identifier of the item whose metadata to set.
     * - `data`: The general information of this item. Limited in length by `StringLimit`.
     * - `is_frozen`: Whether the metadata should be frozen against further changes.
     * 
     * Emits `MetadataSet`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.set_metadata') === 'f02e0128b15ad80326f6a7e62343df78d0b3498535a3c03e1f49980cef80964f'
    }

    /**
     * Set the metadata for an item.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * `collection`.
     * 
     * If the origin is Signed, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * data.len` taking into
     * account any already reserved funds.
     * 
     * - `collection`: The identifier of the collection whose item's metadata to set.
     * - `item`: The identifier of the item whose metadata to set.
     * - `data`: The general information of this item. Limited in length by `StringLimit`.
     * - `is_frozen`: Whether the metadata should be frozen against further changes.
     * 
     * Emits `MetadataSet`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, item: bigint, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesSetPriceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.set_price')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set (or reset) the price for an item.
     * 
     * Origin must be Signed and must be the owner of the asset `item`.
     * 
     * - `collection`: The collection of the item.
     * - `item`: The item to set the price for.
     * - `price`: The price for the item. Pass `None`, to reset the price.
     * - `buyer`: Restricts the buy operation to a specific account.
     * 
     * Emits `ItemPriceSet` on success if the price is not `None`.
     * Emits `ItemPriceRemoved` on success if the price is `None`.
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.set_price') === 'aabe6bf409db6019c7c23d3cfefba0889a8edbe01535f2454cb8dcd9925ec0c0'
    }

    /**
     * Set (or reset) the price for an item.
     * 
     * Origin must be Signed and must be the owner of the asset `item`.
     * 
     * - `collection`: The collection of the item.
     * - `item`: The item to set the price for.
     * - `price`: The price for the item. Pass `None`, to reset the price.
     * - `buyer`: Restricts the buy operation to a specific account.
     * 
     * Emits `ItemPriceSet` on success if the price is not `None`.
     * Emits `ItemPriceRemoved` on success if the price is `None`.
     */
    get asV115(): {collection: bigint, item: bigint, price: (bigint | undefined), whitelistedBuyer: (Uint8Array | undefined)} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesSetTeamCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.set_team')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the Issuer, Admin and Freezer of a collection.
     * 
     * Origin must be Signed and the sender should be the Owner of the `collection`.
     * 
     * - `collection`: The collection whose team should be changed.
     * - `issuer`: The new Issuer of this collection.
     * - `admin`: The new Admin of this collection.
     * - `freezer`: The new Freezer of this collection.
     * 
     * Emits `TeamChanged`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.set_team') === 'a94159b2805fac868c01f4231c6b37bf1831ad6694feba092f344f47f03429e4'
    }

    /**
     * Change the Issuer, Admin and Freezer of a collection.
     * 
     * Origin must be Signed and the sender should be the Owner of the `collection`.
     * 
     * - `collection`: The collection whose team should be changed.
     * - `issuer`: The new Issuer of this collection.
     * - `admin`: The new Admin of this collection.
     * - `freezer`: The new Freezer of this collection.
     * 
     * Emits `TeamChanged`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesThawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.thaw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Re-allow unprivileged transfer of an item.
     * 
     * Origin must be Signed and the sender should be the Freezer of the `collection`.
     * 
     * - `collection`: The collection of the item to be thawed.
     * - `item`: The item of the item to be thawed.
     * 
     * Emits `Thawed`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.thaw') === 'c821cd7d11475c687a8c2699e93803f3af5ff5ca69f1729084558320c80b4931'
    }

    /**
     * Re-allow unprivileged transfer of an item.
     * 
     * Origin must be Signed and the sender should be the Freezer of the `collection`.
     * 
     * - `collection`: The collection of the item to be thawed.
     * - `item`: The item of the item to be thawed.
     * 
     * Emits `Thawed`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, item: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesThawCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.thaw_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Re-allow unprivileged transfers for a whole collection.
     * 
     * Origin must be Signed and the sender should be the Admin of the `collection`.
     * 
     * - `collection`: The collection to be thawed.
     * 
     * Emits `CollectionThawed`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.thaw_collection') === '42d161ea24cc4e1fc2a84c38dfcedefd1fbcb60ca0bfa1ee7a6d2d8dca782faa'
    }

    /**
     * Re-allow unprivileged transfers for a whole collection.
     * 
     * Origin must be Signed and the sender should be the Admin of the `collection`.
     * 
     * - `collection`: The collection to be thawed.
     * 
     * Emits `CollectionThawed`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Move an item from the sender account to another.
     * 
     * This resets the approved account of the item.
     * 
     * Origin must be Signed and the signing account must be either:
     * - the Admin of the `collection`;
     * - the Owner of the `item`;
     * - the approved delegate for the `item` (in this case, the approval is reset).
     * 
     * Arguments:
     * - `collection`: The collection of the item to be transferred.
     * - `item`: The item of the item to be transferred.
     * - `dest`: The account to receive ownership of the item.
     * 
     * Emits `Transferred`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.transfer') === '6a430d799d86c9becc0bbae3aff528e1c59a78b7c97cfe197f3b05b517c02b8f'
    }

    /**
     * Move an item from the sender account to another.
     * 
     * This resets the approved account of the item.
     * 
     * Origin must be Signed and the signing account must be either:
     * - the Admin of the `collection`;
     * - the Owner of the `item`;
     * - the approved delegate for the `item` (in this case, the approval is reset).
     * 
     * Arguments:
     * - `collection`: The collection of the item to be transferred.
     * - `item`: The item of the item to be transferred.
     * - `dest`: The account to receive ownership of the item.
     * 
     * Emits `Transferred`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, item: bigint, dest: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesTransferOwnershipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.transfer_ownership')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the Owner of a collection.
     * 
     * Origin must be Signed and the sender should be the Owner of the `collection`.
     * 
     * - `collection`: The collection whose owner should be changed.
     * - `owner`: The new Owner of this collection. They must have called
     *   `set_accept_ownership` with `collection` in order for this operation to succeed.
     * 
     * Emits `OwnerChanged`.
     * 
     * Weight: `O(1)`
     */
    get isV115(): boolean {
        return this._chain.getCallHash('Uniques.transfer_ownership') === '09f70f87fa8cf6802c0d0b47a8050ce5558cfcaf1560fee8e381ce0476c03b1e'
    }

    /**
     * Change the Owner of a collection.
     * 
     * Origin must be Signed and the sender should be the Owner of the `collection`.
     * 
     * - `collection`: The collection whose owner should be changed.
     * - `owner`: The new Owner of this collection. They must have called
     *   `set_accept_ownership` with `collection` in order for this operation to succeed.
     * 
     * Emits `OwnerChanged`.
     * 
     * Weight: `O(1)`
     */
    get asV115(): {collection: bigint, owner: Uint8Array} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'cbd693fc7507393e8a264ee7dce74ab41692bbab10c3177ea8b3dbd058bfcc08'
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
    get asV100(): {index: number, call: v100.Call} {
        assert(this.isV100)
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
    get isV104(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'e8ba84c25c52f13905638f1081e1a78952134ea141bab48edd7810c84abbcbe2'
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
    get asV104(): {index: number, call: v104.Call} {
        assert(this.isV104)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'b42c2e44826712677cbcc3e02b324d316bfefce561d568f4bd133be992f7f3aa'
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
    get asV108(): {index: number, call: v108.Call} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'dc0be0688c424daacd0544fff89eb267adb2022e75c89a44f9b3cf8fbe4b931e'
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
    get asV115(): {index: number, call: v115.Call} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '5c6b5d8ce791e37a68458668e93202194e65c7fc47e6f76e42938626c8070d0e'
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
    get asV125(): {index: number, call: v125.Call} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'e264506d6c40e49f99cb77ade702be30c439e647a7bcfcfc9fc577814d6abdbf'
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
    get asV138(): {index: number, call: v138.Call} {
        assert(this.isV138)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'f824e44b23b85088abf44f617401cbe9dace781378807ff803eac5d62a7851fd'
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
    get asV100(): {calls: v100.Call[]} {
        assert(this.isV100)
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
    get isV104(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'db157b7a9858e983bac4a9b25beaffe81d8f9b5cafede98a48146670e8494488'
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
    get asV104(): {calls: v104.Call[]} {
        assert(this.isV104)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'e6a99a3675b103885b7a45627a56d63cf1197b04fe4b348b6c47408ce3bfad10'
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
    get asV108(): {calls: v108.Call[]} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'b64e63f584d0f6537d9287e08bb96a8569a7120c464259f19cd70ebda45bbbf9'
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
    get asV115(): {calls: v115.Call[]} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('Utility.batch') === '9f8875469233aae900f5ed4f9c00453062a41a0ada3ad2a6ede495d0ad95ca43'
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
    get asV125(): {calls: v125.Call[]} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('Utility.batch') === '7b93bdf64a8268267e90418c1c445343a99b6fe5025d7b00ba2b92e2db4897f0'
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
    get asV138(): {calls: v138.Call[]} {
        assert(this.isV138)
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
    get isV100(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'f824e44b23b85088abf44f617401cbe9dace781378807ff803eac5d62a7851fd'
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
    get asV100(): {calls: v100.Call[]} {
        assert(this.isV100)
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
    get isV104(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'db157b7a9858e983bac4a9b25beaffe81d8f9b5cafede98a48146670e8494488'
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
    get asV104(): {calls: v104.Call[]} {
        assert(this.isV104)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'e6a99a3675b103885b7a45627a56d63cf1197b04fe4b348b6c47408ce3bfad10'
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
    get asV108(): {calls: v108.Call[]} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'b64e63f584d0f6537d9287e08bb96a8569a7120c464259f19cd70ebda45bbbf9'
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
    get asV115(): {calls: v115.Call[]} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '9f8875469233aae900f5ed4f9c00453062a41a0ada3ad2a6ede495d0ad95ca43'
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
    get asV125(): {calls: v125.Call[]} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '7b93bdf64a8268267e90418c1c445343a99b6fe5025d7b00ba2b92e2db4897f0'
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
    get asV138(): {calls: v138.Call[]} {
        assert(this.isV138)
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
    get isV104(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'c3d8b4bb26698f8dd5638407b82a0021cc7cd8702e86b53cf81d394d497e7798'
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
    get asV104(): {asOrigin: v104.OriginCaller, call: v104.Call} {
        assert(this.isV104)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '09c0a92008e972bc4995e7332f83b6d58b217c3878a4a42767a01886c40f6160'
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
    get asV108(): {asOrigin: v108.OriginCaller, call: v108.Call} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '93820ffef385ca8890c9472ca1c6e6b2c6fea26bf7e875759a06cfedb0100882'
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
    get asV115(): {asOrigin: v115.OriginCaller, call: v115.Call} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'c2b1ff6ba4c0e2dc439eab17158b3f2a3421dbb1fa25036a0f036f5890ec5bf0'
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
    get asV125(): {asOrigin: v125.OriginCaller, call: v125.Call} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'c97902dbf346e74a5915d46c43d03e481c0fca5585cab86436a660f2e10884e8'
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
    get asV138(): {asOrigin: v138.OriginCaller, call: v138.Call} {
        assert(this.isV138)
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
    get isV115(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'b64e63f584d0f6537d9287e08bb96a8569a7120c464259f19cd70ebda45bbbf9'
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
    get asV115(): {calls: v115.Call[]} {
        assert(this.isV115)
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
    get isV125(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '9f8875469233aae900f5ed4f9c00453062a41a0ada3ad2a6ede495d0ad95ca43'
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
    get asV125(): {calls: v125.Call[]} {
        assert(this.isV125)
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
    get isV138(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '7b93bdf64a8268267e90418c1c445343a99b6fe5025d7b00ba2b92e2db4897f0'
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
    get asV138(): {calls: v138.Call[]} {
        assert(this.isV138)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.claim')
        this._chain = ctx._chain
        this.call = call
    }

    get isV108(): boolean {
        return this._chain.getCallHash('Vesting.claim') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV108(): null {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingClaimForCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.claim_for')
        this._chain = ctx._chain
        this.call = call
    }

    get isV108(): boolean {
        return this._chain.getCallHash('Vesting.claim_for') === 'b460c0e5be86faa4e205be32c38d7cbf4012485c8ea8f2b0d2831cc6157b2ed8'
    }

    get asV108(): {dest: Uint8Array} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingUpdateVestingSchedulesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.update_vesting_schedules')
        this._chain = ctx._chain
        this.call = call
    }

    get isV108(): boolean {
        return this._chain.getCallHash('Vesting.update_vesting_schedules') === '77c565e7989e7bc919881bb1ee1a6ea3717748d0dc34dfa233007fbe6386e5d8'
    }

    get asV108(): {who: Uint8Array, vestingSchedules: v108.VestingSchedule[]} {
        assert(this.isV108)
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

    get isV108(): boolean {
        return this._chain.getCallHash('Vesting.vested_transfer') === '0a3591798ce10f78f229a34448a83d06dfe547006c9e21a950869d29b5510d14'
    }

    get asV108(): {dest: Uint8Array, schedule: v108.VestingSchedule} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('XTokens.transfer') === '779953428ade1393c57223ef31a3e0b8a8aa80c03bc446a03beff0f03c84534f'
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
    get asV108(): {currencyId: number, amount: bigint, dest: v108.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {asset: v108.VersionedMultiAsset, dest: v108.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {asset: v108.VersionedMultiAsset, fee: v108.VersionedMultiAsset, dest: v108.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): {assets: v108.VersionedMultiAssets, feeItem: number, dest: v108.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multicurrencies') === 'ae8e439e76fe4660ff35fbf13277a9d4bdd8c18e4ee54c9d06622dd2336bd1e2'
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
    get asV108(): {currencies: [number, bigint][], feeItem: number, dest: v108.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getCallHash('XTokens.transfer_with_fee') === '95051b752e41101340eab37ed9777dfdaab1be321d83671aa84c021755c17e48'
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
    get asV108(): {currencyId: number, amount: bigint, fee: bigint, dest: v108.VersionedMultiLocation, destWeight: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}
