import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v3 from './v3'
import * as v12 from './v12'
import * as v39 from './v39'
import * as v58 from './v58'
import * as v59 from './v59'

export class AlephChangeValidatorsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Aleph.change_validators')
        this._chain = ctx._chain
        this.call = call
    }

    get isV3(): boolean {
        return this._chain.getCallHash('Aleph.change_validators') === 'dbab1eb577d74ca7ff93111e732adf5ffd5842ff68de2fe57263037e76775386'
    }

    get asV3(): {validators: Uint8Array[], sessionForValidatorsChange: number} {
        assert(this.isV3)
        return this._chain.decodeCall(this.call)
    }
}

export class AlephScheduleFinalityVersionChangeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Aleph.schedule_finality_version_change')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedules a finality version change for a future session. If such a scheduled future
     * version is already set, it is replaced with the provided one.
     * Any rescheduling of a future version change needs to occur at least 2 sessions in
     * advance of the provided session of the version change.
     * In order to cancel a scheduled version change, a new version change should be scheduled
     * with the same version as the current one.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Aleph.schedule_finality_version_change') === '296aecf00fb1c22da5f3f612cd2e939a9888b4d91ee0bc0bffb415ddaecb6748'
    }

    /**
     * Schedules a finality version change for a future session. If such a scheduled future
     * version is already set, it is replaced with the provided one.
     * Any rescheduling of a future version change needs to occur at least 2 sessions in
     * advance of the provided session of the version change.
     * In order to cancel a scheduled version change, a new version change should be scheduled
     * with the same version as the current one.
     */
    get asV39(): {versionIncoming: number, session: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class AlephSetEmergencyFinalizerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Aleph.set_emergency_finalizer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the emergency finalization key. If called in session `N` the key can be used to
     * finalize blocks from session `N+2` onwards, until it gets overridden.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Aleph.set_emergency_finalizer') === '29797df7f20fb4b21ac425fa43fc89b8948ed87fccb6462deb968388468d3722'
    }

    /**
     * Sets the emergency finalization key. If called in session `N` the key can be used to
     * finalize blocks from session `N+2` onwards, until it gets overridden.
     */
    get asV39(): {emergencyFinalizer: Uint8Array} {
        assert(this.isV39)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
    }

    /**
     * Provide a set of uncles.
     */
    get asV12(): {newUncles: v12.Header[]} {
        assert(this.isV12)
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
    get isV3(): boolean {
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
    get asV3(): {source: v3.LookupSource, dest: v3.LookupSource, value: bigint} {
        assert(this.isV3)
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
    get isV12(): boolean {
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
    get asV12(): {source: v12.MultiAddress, dest: v12.MultiAddress, value: bigint} {
        assert(this.isV12)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asV12(): {who: v12.MultiAddress, amount: bigint} {
        assert(this.isV12)
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
    get isV3(): boolean {
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
    get asV3(): {who: v3.LookupSource, newFree: bigint, newReserved: bigint} {
        assert(this.isV3)
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
     */
    get isV12(): boolean {
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
     */
    get asV12(): {who: v12.MultiAddress, newFree: bigint, newReserved: bigint} {
        assert(this.isV12)
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
    get isV3(): boolean {
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
    get asV3(): {dest: v3.LookupSource, value: bigint} {
        assert(this.isV3)
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
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    get isV12(): boolean {
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
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    get asV12(): {dest: v12.MultiAddress, value: bigint} {
        assert(this.isV12)
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
    get isV3(): boolean {
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
    get asV3(): {dest: v3.LookupSource, keepAlive: boolean} {
        assert(this.isV3)
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
    get isV12(): boolean {
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
    get asV12(): {dest: v12.MultiAddress, keepAlive: boolean} {
        assert(this.isV12)
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
    get isV3(): boolean {
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
    get asV3(): {dest: v3.LookupSource, value: bigint} {
        assert(this.isV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    get asV12(): {dest: v12.MultiAddress, value: bigint} {
        assert(this.isV12)
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
    get isV59(): boolean {
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
    get asV59(): {dest: v59.MultiAddress, value: bigint, gasLimit: v59.Weight, storageDepositLimit: (bigint | undefined), data: Uint8Array} {
        assert(this.isV59)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Contracts.call_old_weight') === 'd96c8a6656d7a4d6af6d5d0d51dd36e041c9ea8a92a7ead343d711addd74780f'
    }

    /**
     * Deprecated version if [`Self::call`] for use in an in-storage `Call`.
     */
    get asV59(): {dest: v59.MultiAddress, value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), data: Uint8Array} {
        assert(this.isV59)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Contracts.instantiate') === '144f181b3afbf1b5f0fd6ab12277b9e2a4600a80dfdf6fa1aab631acc55d1bd1'
    }

    /**
     * Instantiates a contract from a previously deployed wasm binary.
     * 
     * This function is identical to [`Self::instantiate_with_code`] but without the
     * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
     * must be supplied.
     */
    get asV59(): {value: bigint, gasLimit: v59.Weight, storageDepositLimit: (bigint | undefined), codeHash: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV59)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Contracts.instantiate_old_weight') === '065e28d4aca8ef55389ab2cdeb357c40056320f063a3db0a6c9157a597c14b5b'
    }

    /**
     * Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
     */
    get asV59(): {value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), codeHash: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV59)
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
    get isV59(): boolean {
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
    get asV59(): {value: bigint, gasLimit: v59.Weight, storageDepositLimit: (bigint | undefined), code: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV59)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Contracts.instantiate_with_code_old_weight') === '2204435764a14a39d7c13f6cffbf98550fcaad4cba9d91306fe99d88a718a62c'
    }

    /**
     * Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
     */
    get asV59(): {value: bigint, gasLimit: bigint, storageDepositLimit: (bigint | undefined), code: Uint8Array, data: Uint8Array, salt: Uint8Array} {
        assert(this.isV59)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Contracts.remove_code') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * Remove the code stored under `code_hash` and refund the deposit to its owner.
     * 
     * A code can only be removed by its original uploader (its owner) and only if it is
     * not used by any contract.
     */
    get asV59(): {codeHash: Uint8Array} {
        assert(this.isV59)
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
    get isV59(): boolean {
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
    get asV59(): {dest: v59.MultiAddress, codeHash: Uint8Array} {
        assert(this.isV59)
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
    get isV59(): boolean {
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
    get asV59(): {code: Uint8Array, storageDepositLimit: (bigint | undefined), determinism: v59.Determinism} {
        assert(this.isV59)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsBanFromCommitteeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.ban_from_committee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a non-reserved node to be banned out from the committee at the end of the era
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Elections.ban_from_committee') === 'e311a8c795658834d7bd9f8f3ebf2a1b73d3f457db6a5821cedd1ec1eaa5c4ff'
    }

    /**
     * Schedule a non-reserved node to be banned out from the committee at the end of the era
     */
    get asV39(): {banned: Uint8Array, banReason: Uint8Array} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsCancelBanCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.cancel_ban')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a non-reserved node to be banned out from the committee at the end of the era
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Elections.cancel_ban') === 'a07f1bd9429046e6f5e00b5f91bd5ca84998f7d44a72b68df9afe5d78dd1839a'
    }

    /**
     * Schedule a non-reserved node to be banned out from the committee at the end of the era
     */
    get asV39(): {banned: Uint8Array} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsChangeMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.change_members')
        this._chain = ctx._chain
        this.call = call
    }

    get isV12(): boolean {
        return this._chain.getCallHash('Elections.change_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    get asV12(): {members: Uint8Array[]} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsChangeValidatorsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.change_validators')
        this._chain = ctx._chain
        this.call = call
    }

    get isV39(): boolean {
        return this._chain.getCallHash('Elections.change_validators') === 'ff71a4bd47d10be6a5b5f671da89fc654503d7dae8f75e5ff885ed8236b19c9f'
    }

    get asV39(): {reservedValidators: (Uint8Array[] | undefined), nonReservedValidators: (Uint8Array[] | undefined), committeeSize: (v39.CommitteeSeats | undefined)} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsSetBanConfigCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.set_ban_config')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets ban config, it has an immediate effect
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Elections.set_ban_config') === '006bc628e632a073938fb49ccffa24a53b4d84fc89313256ce9da288afee8351'
    }

    /**
     * Sets ban config, it has an immediate effect
     */
    get asV39(): {minimalExpectedPerformance: (number | undefined), underperformedSessionCountThreshold: (number | undefined), cleanSessionCounterDelay: (number | undefined), banPeriod: (number | undefined)} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class ElectionsSetElectionsOpennessCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Elections.set_elections_openness')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set openness of the elections
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Elections.set_elections_openness') === '9f321e9e8f304f526c22b32e42ee3e6c3d3eef5d9776e04060ae9fec22ca07a8'
    }

    /**
     * Set openness of the elections
     */
    get asV39(): {openness: v39.ElectionOpenness} {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {account: Uint8Array} {
        assert(this.isV39)
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
    get isV58(): boolean {
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
    get asV58(): {account: v58.MultiAddress} {
        assert(this.isV58)
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
    get isV39(): boolean {
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
    get asV39(): {sub: v39.MultiAddress, data: v39.Data} {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {regIndex: number} {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): null {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {target: v39.MultiAddress} {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {regIndex: number, target: v39.MultiAddress, judgement: v39.Judgement} {
        assert(this.isV39)
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
    get isV58(): boolean {
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
    get asV58(): {regIndex: number, target: v58.MultiAddress, judgement: v58.Judgement, identity: Uint8Array} {
        assert(this.isV58)
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
    get isV39(): boolean {
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
    get asV39(): null {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {sub: v39.MultiAddress} {
        assert(this.isV39)
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
    get isV39(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === 'b7d02496580d984a1a588630bfbf580f423f08a761006f8706b057ac73069a38'
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV39(): {sub: v39.MultiAddress, data: v39.Data} {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {regIndex: number, maxFee: bigint} {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {index: number, new: Uint8Array} {
        assert(this.isV39)
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
    get isV58(): boolean {
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
    get asV58(): {index: number, new: v58.MultiAddress} {
        assert(this.isV58)
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
    get isV39(): boolean {
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
    get asV39(): {index: number, fee: bigint} {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {index: number, fields: bigint} {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {info: v39.IdentityInfo} {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {subs: [Uint8Array, v39.Data][]} {
        assert(this.isV39)
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
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    get isV3(): boolean {
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
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    get asV3(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v3.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
        assert(this.isV3)
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
    get isV58(): boolean {
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
    get asV58(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v58.Timepoint | undefined), callHash: Uint8Array, maxWeight: v58.Weight} {
        assert(this.isV58)
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
     *  - DB Weight:
     *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *  - Plus Call Weight
     *  # </weight>
     */
    get isV3(): boolean {
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
     *  - DB Weight:
     *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *  - Plus Call Weight
     *  # </weight>
     */
    get asV3(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v3.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
        assert(this.isV3)
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
    get isV58(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'b2c8f77d023f5ef303280cf9cc29fb36b6182a3846ca21594feca90f81c19a5e'
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
    get asV58(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v58.Timepoint | undefined), call: v58.Call, maxWeight: v58.Weight} {
        assert(this.isV58)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '57f7d212bf786a8def6979c24473a9a2d9022ec5d56767d11b1d1d99c4628c1f'
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
    get asV59(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v59.Timepoint | undefined), call: v59.Call, maxWeight: v59.Weight} {
        assert(this.isV59)
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
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    get isV3(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '4444313610e92e9aaeb08eaa8da8798e56f964a8d84e0abd060783bfafa6ea21'
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
    get asV3(): {otherSignatories: Uint8Array[], call: v3.Type_52} {
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
    get isV12(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'd4798d35eee53127001c86660014f7534088e918440d78e79db3eb1c4f5e3eff'
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
    get isV39(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '959e5e671b4794952d0108a3bb631aa62882c491df4bf36ae17948af7a380439'
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
    get isV58(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'ec1f6426256c5889aa3709fe518ea6b28cd22cda218f3a62458c961e0b859ac1'
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
    get asV58(): {otherSignatories: Uint8Array[], call: v58.Call} {
        assert(this.isV58)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'c33bf46c33d0da76345b7bcbc6116c7b35849d7d7627ef59edbe45a718d9ec8f'
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
    get asV59(): {otherSignatories: Uint8Array[], call: v59.Call} {
        assert(this.isV59)
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
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     *  # </weight>
     */
    get isV3(): boolean {
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
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     *  # </weight>
     */
    get asV3(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v3.Timepoint, callHash: Uint8Array} {
        assert(this.isV3)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsBondExtraCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.bond_extra')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Bond `extra` more funds from `origin` into the pool to which they already belong.
     * 
     * Additional funds can come from either the free balance of the account, of from the
     * accumulated rewards, see [`BondExtra`].
     * 
     * Bonding extra funds implies an automatic payout of all pending rewards as well.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.bond_extra') === '05132b5a0d57223501d01aba18d473f18b91a6655ee2b5af3d97be42f39138d9'
    }

    /**
     * Bond `extra` more funds from `origin` into the pool to which they already belong.
     * 
     * Additional funds can come from either the free balance of the account, of from the
     * accumulated rewards, see [`BondExtra`].
     * 
     * Bonding extra funds implies an automatic payout of all pending rewards as well.
     */
    get asV39(): {extra: v39.BondExtra} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsChillCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.chill')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Chill on behalf of the pool.
     * 
     * The dispatch origin of this call must be signed by the pool nominator or the pool
     * root role, same as [`Pallet::nominate`].
     * 
     * This directly forward the call to the staking pallet, on behalf of the pool bonded
     * account.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.chill') === 'a662258b1bdb045a915972ea29e9ec0b46cdd5598b0da37b0e70ac766e3735a0'
    }

    /**
     * Chill on behalf of the pool.
     * 
     * The dispatch origin of this call must be signed by the pool nominator or the pool
     * root role, same as [`Pallet::nominate`].
     * 
     * This directly forward the call to the staking pallet, on behalf of the pool bonded
     * account.
     */
    get asV39(): {poolId: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsClaimPayoutCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.claim_payout')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * A bonded member can use this to claim their payout based on the rewards that the pool
     * has accumulated since their last claimed payout (OR since joining if this is there first
     * time claiming rewards). The payout will be transferred to the member's account.
     * 
     * The member will earn rewards pro rata based on the members stake vs the sum of the
     * members in the pools stake. Rewards do not "expire".
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.claim_payout') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A bonded member can use this to claim their payout based on the rewards that the pool
     * has accumulated since their last claimed payout (OR since joining if this is there first
     * time claiming rewards). The payout will be transferred to the member's account.
     * 
     * The member will earn rewards pro rata based on the members stake vs the sum of the
     * members in the pools stake. Rewards do not "expire".
     */
    get asV39(): null {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsCreateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.create')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a new delegation pool.
     * 
     * # Arguments
     * 
     * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
     *   deposit since the pools creator cannot fully unbond funds until the pool is being
     *   destroyed.
     * * `index` - A disambiguation index for creating the account. Likely only useful when
     *   creating multiple pools in the same extrinsic.
     * * `root` - The account to set as [`PoolRoles::root`].
     * * `nominator` - The account to set as the [`PoolRoles::nominator`].
     * * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].
     * 
     * # Note
     * 
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.create') === 'b2cf1e8f2d8c87739c0ffdf344d596812a5fa6c4b612c595e7ec59806b10e813'
    }

    /**
     * Create a new delegation pool.
     * 
     * # Arguments
     * 
     * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
     *   deposit since the pools creator cannot fully unbond funds until the pool is being
     *   destroyed.
     * * `index` - A disambiguation index for creating the account. Likely only useful when
     *   creating multiple pools in the same extrinsic.
     * * `root` - The account to set as [`PoolRoles::root`].
     * * `nominator` - The account to set as the [`PoolRoles::nominator`].
     * * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].
     * 
     * # Note
     * 
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    get asV39(): {amount: bigint, root: Uint8Array, nominator: Uint8Array, stateToggler: Uint8Array} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Create a new delegation pool.
     * 
     * # Arguments
     * 
     * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
     *   deposit since the pools creator cannot fully unbond funds until the pool is being
     *   destroyed.
     * * `index` - A disambiguation index for creating the account. Likely only useful when
     *   creating multiple pools in the same extrinsic.
     * * `root` - The account to set as [`PoolRoles::root`].
     * * `nominator` - The account to set as the [`PoolRoles::nominator`].
     * * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].
     * 
     * # Note
     * 
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    get isV58(): boolean {
        return this._chain.getCallHash('NominationPools.create') === '7ae05fded37735d5e310868c744bd330fdc58661eabd48fb4518ad22fc21bba3'
    }

    /**
     * Create a new delegation pool.
     * 
     * # Arguments
     * 
     * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
     *   deposit since the pools creator cannot fully unbond funds until the pool is being
     *   destroyed.
     * * `index` - A disambiguation index for creating the account. Likely only useful when
     *   creating multiple pools in the same extrinsic.
     * * `root` - The account to set as [`PoolRoles::root`].
     * * `nominator` - The account to set as the [`PoolRoles::nominator`].
     * * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].
     * 
     * # Note
     * 
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    get asV58(): {amount: bigint, root: v58.MultiAddress, nominator: v58.MultiAddress, stateToggler: v58.MultiAddress} {
        assert(this.isV58)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsCreateWithPoolIdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.create_with_pool_id')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a new delegation pool with a previously used pool id
     * 
     * # Arguments
     * 
     * same as `create` with the inclusion of
     * * `pool_id` - `A valid PoolId.
     */
    get isV59(): boolean {
        return this._chain.getCallHash('NominationPools.create_with_pool_id') === '1dc4a8a914cb8357e61fea3d2ca10f0d301609dd10fd210a6dd6b82c3f3531bd'
    }

    /**
     * Create a new delegation pool with a previously used pool id
     * 
     * # Arguments
     * 
     * same as `create` with the inclusion of
     * * `pool_id` - `A valid PoolId.
     */
    get asV59(): {amount: bigint, root: v59.MultiAddress, nominator: v59.MultiAddress, stateToggler: v59.MultiAddress, poolId: number} {
        assert(this.isV59)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsJoinCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.join')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Stake funds with a pool. The amount to bond is transferred from the member to the
     * pools account and immediately increases the pools bond.
     * 
     * # Note
     * 
     * * An account can only be a member of a single pool.
     * * An account cannot join the same pool multiple times.
     * * This call will *not* dust the member account, so the member must have at least
     *   `existential deposit + amount` in their account.
     * * Only a pool with [`PoolState::Open`] can be joined
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.join') === 'de2a709c303863c1ce837173c79d51dd30d0f7a823ebd564150b65d17fc7d962'
    }

    /**
     * Stake funds with a pool. The amount to bond is transferred from the member to the
     * pools account and immediately increases the pools bond.
     * 
     * # Note
     * 
     * * An account can only be a member of a single pool.
     * * An account cannot join the same pool multiple times.
     * * This call will *not* dust the member account, so the member must have at least
     *   `existential deposit + amount` in their account.
     * * Only a pool with [`PoolState::Open`] can be joined
     */
    get asV39(): {amount: bigint, poolId: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsNominateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.nominate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Nominate on behalf of the pool.
     * 
     * The dispatch origin of this call must be signed by the pool nominator or the pool
     * root role.
     * 
     * This directly forward the call to the staking pallet, on behalf of the pool bonded
     * account.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.nominate') === 'ea4465a57461881e03894b11ac5f7192136bacd8d01d54206bdb61e16cc8abfc'
    }

    /**
     * Nominate on behalf of the pool.
     * 
     * The dispatch origin of this call must be signed by the pool nominator or the pool
     * root role.
     * 
     * This directly forward the call to the staking pallet, on behalf of the pool bonded
     * account.
     */
    get asV39(): {poolId: number, validators: Uint8Array[]} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsPoolWithdrawUnbondedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.pool_withdraw_unbonded')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
     * 
     * This is useful if their are too many unlocking chunks to call `unbond`, and some
     * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
     * would probably see an error like `NoMoreChunks` emitted from the staking system when
     * they attempt to unbond.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.pool_withdraw_unbonded') === 'b6653f1dc9abfe17deb7a0622d88108ba58931838aa5b5b27bcf79870b10c0bc'
    }

    /**
     * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
     * 
     * This is useful if their are too many unlocking chunks to call `unbond`, and some
     * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
     * would probably see an error like `NoMoreChunks` emitted from the staking system when
     * they attempt to unbond.
     */
    get asV39(): {poolId: number, numSlashingSpans: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsSetConfigsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.set_configs')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update configurations for the nomination pools. The origin for this call must be
     * Root.
     * 
     * # Arguments
     * 
     * * `min_join_bond` - Set [`MinJoinBond`].
     * * `min_create_bond` - Set [`MinCreateBond`].
     * * `max_pools` - Set [`MaxPools`].
     * * `max_members` - Set [`MaxPoolMembers`].
     * * `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.set_configs') === '112c5b3d3b728aab0beb95840134437ed6bd58bec0759961a13710389f4237e2'
    }

    /**
     * Update configurations for the nomination pools. The origin for this call must be
     * Root.
     * 
     * # Arguments
     * 
     * * `min_join_bond` - Set [`MinJoinBond`].
     * * `min_create_bond` - Set [`MinCreateBond`].
     * * `max_pools` - Set [`MaxPools`].
     * * `max_members` - Set [`MaxPoolMembers`].
     * * `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].
     */
    get asV39(): {minJoinBond: v39.ConfigOp, minCreateBond: v39.ConfigOp, maxPools: v39.Type_143, maxMembers: v39.Type_143, maxMembersPerPool: v39.Type_143} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsSetMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.set_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a new metadata for the pool.
     * 
     * The dispatch origin of this call must be signed by the state toggler, or the root role
     * of the pool.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.set_metadata') === '027a45601396dd984f964705eb7eabc42207aedba700c7316c5f0201a21bc953'
    }

    /**
     * Set a new metadata for the pool.
     * 
     * The dispatch origin of this call must be signed by the state toggler, or the root role
     * of the pool.
     */
    get asV39(): {poolId: number, metadata: Uint8Array} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsSetStateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.set_state')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a new state for the pool.
     * 
     * If a pool is already in the `Destroying` state, then under no condition can its state
     * change again.
     * 
     * The dispatch origin of this call must be either:
     * 
     * 1. signed by the state toggler, or the root role of the pool,
     * 2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and
     *    then the state of the pool can be permissionlessly changed to `Destroying`.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.set_state') === '8edc6fb856b29d0578d262182420b2d913110185338eb0d25886711b95487d17'
    }

    /**
     * Set a new state for the pool.
     * 
     * If a pool is already in the `Destroying` state, then under no condition can its state
     * change again.
     * 
     * The dispatch origin of this call must be either:
     * 
     * 1. signed by the state toggler, or the root role of the pool,
     * 2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and
     *    then the state of the pool can be permissionlessly changed to `Destroying`.
     */
    get asV39(): {poolId: number, state: v39.PoolState} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsUnbondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.unbond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
     * implicitly collects the rewards one last time, since not doing so would mean some
     * rewards would be forfeited.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch.
     * 
     * * The pool is blocked and the caller is either the root or state-toggler. This is
     *   refereed to as a kick.
     * * The pool is destroying and the member is not the depositor.
     * * The pool is destroying, the member is the depositor and no other members are in the
     *   pool.
     * 
     * ## Conditions for permissioned dispatch (i.e. the caller is also the
     * `member_account`):
     * 
     * * The caller is not the depositor.
     * * The caller is the depositor, the pool is destroying and no other members are in the
     *   pool.
     * 
     * # Note
     * 
     * If there are too many unlocking chunks to unbond with the pool account,
     * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks. If
     * there are too many unlocking chunks, the result of this call will likely be the
     * `NoMoreChunks` error from the staking system.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.unbond') === '8fa56122c6759633d706b595abf98742254c8eda11ef9a812eb401a7c008496b'
    }

    /**
     * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
     * implicitly collects the rewards one last time, since not doing so would mean some
     * rewards would be forfeited.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch.
     * 
     * * The pool is blocked and the caller is either the root or state-toggler. This is
     *   refereed to as a kick.
     * * The pool is destroying and the member is not the depositor.
     * * The pool is destroying, the member is the depositor and no other members are in the
     *   pool.
     * 
     * ## Conditions for permissioned dispatch (i.e. the caller is also the
     * `member_account`):
     * 
     * * The caller is not the depositor.
     * * The caller is the depositor, the pool is destroying and no other members are in the
     *   pool.
     * 
     * # Note
     * 
     * If there are too many unlocking chunks to unbond with the pool account,
     * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks. If
     * there are too many unlocking chunks, the result of this call will likely be the
     * `NoMoreChunks` error from the staking system.
     */
    get asV39(): {memberAccount: Uint8Array, unbondingPoints: bigint} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
     * implicitly collects the rewards one last time, since not doing so would mean some
     * rewards would be forfeited.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch.
     * 
     * * The pool is blocked and the caller is either the root or state-toggler. This is
     *   refereed to as a kick.
     * * The pool is destroying and the member is not the depositor.
     * * The pool is destroying, the member is the depositor and no other members are in the
     *   pool.
     * 
     * ## Conditions for permissioned dispatch (i.e. the caller is also the
     * `member_account`):
     * 
     * * The caller is not the depositor.
     * * The caller is the depositor, the pool is destroying and no other members are in the
     *   pool.
     * 
     * # Note
     * 
     * If there are too many unlocking chunks to unbond with the pool account,
     * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks. If
     * there are too many unlocking chunks, the result of this call will likely be the
     * `NoMoreChunks` error from the staking system.
     */
    get isV58(): boolean {
        return this._chain.getCallHash('NominationPools.unbond') === '64450cc91b317addf9e9ebaf23d031c6cc889c6e14ecf696013d737cfe185ec8'
    }

    /**
     * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
     * implicitly collects the rewards one last time, since not doing so would mean some
     * rewards would be forfeited.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch.
     * 
     * * The pool is blocked and the caller is either the root or state-toggler. This is
     *   refereed to as a kick.
     * * The pool is destroying and the member is not the depositor.
     * * The pool is destroying, the member is the depositor and no other members are in the
     *   pool.
     * 
     * ## Conditions for permissioned dispatch (i.e. the caller is also the
     * `member_account`):
     * 
     * * The caller is not the depositor.
     * * The caller is the depositor, the pool is destroying and no other members are in the
     *   pool.
     * 
     * # Note
     * 
     * If there are too many unlocking chunks to unbond with the pool account,
     * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks. If
     * there are too many unlocking chunks, the result of this call will likely be the
     * `NoMoreChunks` error from the staking system.
     */
    get asV58(): {memberAccount: v58.MultiAddress, unbondingPoints: bigint} {
        assert(this.isV58)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsUpdateRolesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.update_roles')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update the roles of the pool.
     * 
     * The root is the only entity that can change any of the roles, including itself,
     * excluding the depositor, who can never change.
     * 
     * It emits an event, notifying UIs of the role change. This event is quite relevant to
     * most pool members and they should be informed of changes to pool roles.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.update_roles') === '7bbd1de5541f610233088bb41a579f1de19accd1cb15d9568cebd3587531b70c'
    }

    /**
     * Update the roles of the pool.
     * 
     * The root is the only entity that can change any of the roles, including itself,
     * excluding the depositor, who can never change.
     * 
     * It emits an event, notifying UIs of the role change. This event is quite relevant to
     * most pool members and they should be informed of changes to pool roles.
     */
    get asV39(): {poolId: number, newRoot: v39.Type_144, newNominator: v39.Type_144, newStateToggler: v39.Type_144} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class NominationPoolsWithdrawUnbondedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NominationPools.withdraw_unbonded')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
     * error is returned.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch
     * 
     * * The pool is in destroy mode and the target is not the depositor.
     * * The target is the depositor and they are the only member in the sub pools.
     * * The pool is blocked and the caller is either the root or state-toggler.
     * 
     * # Conditions for permissioned dispatch
     * 
     * * The caller is the target and they are not the depositor.
     * 
     * # Note
     * 
     * If the target is the depositor, the pool will be destroyed.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('NominationPools.withdraw_unbonded') === '3a63834e0b3824107874a2ad5a0bed745e2fd1f9ca57e2b3bafe1bd907205558'
    }

    /**
     * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
     * error is returned.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch
     * 
     * * The pool is in destroy mode and the target is not the depositor.
     * * The target is the depositor and they are the only member in the sub pools.
     * * The pool is blocked and the caller is either the root or state-toggler.
     * 
     * # Conditions for permissioned dispatch
     * 
     * * The caller is the target and they are not the depositor.
     * 
     * # Note
     * 
     * If the target is the depositor, the pool will be destroyed.
     */
    get asV39(): {memberAccount: Uint8Array, numSlashingSpans: number} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
     * error is returned.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch
     * 
     * * The pool is in destroy mode and the target is not the depositor.
     * * The target is the depositor and they are the only member in the sub pools.
     * * The pool is blocked and the caller is either the root or state-toggler.
     * 
     * # Conditions for permissioned dispatch
     * 
     * * The caller is the target and they are not the depositor.
     * 
     * # Note
     * 
     * If the target is the depositor, the pool will be destroyed.
     */
    get isV58(): boolean {
        return this._chain.getCallHash('NominationPools.withdraw_unbonded') === '52fb3ae57a795478589c557de25b0d870d311ba397654773c80592329c8a086e'
    }

    /**
     * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
     * error is returned.
     * 
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     * 
     * # Conditions for a permissionless dispatch
     * 
     * * The pool is in destroy mode and the target is not the depositor.
     * * The target is the depositor and they are the only member in the sub pools.
     * * The pool is blocked and the caller is either the root or state-toggler.
     * 
     * # Conditions for permissioned dispatch
     * 
     * * The caller is the target and they are not the depositor.
     * 
     * # Note
     * 
     * If the target is the depositor, the pool will be destroyed.
     */
    get asV58(): {memberAccount: v58.MultiAddress, numSlashingSpans: number} {
        assert(this.isV58)
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
    get isV3(): boolean {
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
    get asV3(): {when: number, index: number} {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {id: Uint8Array} {
        assert(this.isV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Cancel a named scheduled task.
     */
    get isV58(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === '2a01c4c05d6bf45e0dc267bd7f6e27df3b3e4b23af7982734357c4de87ef690c'
    }

    /**
     * Cancel a named scheduled task.
     */
    get asV58(): {id: Uint8Array} {
        assert(this.isV58)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '73e45f2d94075e989682f8c82c7312e1664d9dffb8028364a4a63f1f7559b39c'
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
    get asV3(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3.Type_52} {
        assert(this.isV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '1e42b86684766210d83cb21092205b62baedbeed406c05ee73eacc9b423a2819'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV12(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v12.Call} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'f749cf6dfcef54894d7bfabff89535830faaf4710bf08311bf57906c280e0d67'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV39(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v39.MaybeHashed} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV58(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '670bf883b2ee3e917086942595239600e26cc5fb55a5e1019b074356f4b8f3f0'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV58(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v58.Call} {
        assert(this.isV58)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV59(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '5f47d163acb34a4103495013cb2ab21f40be0bbde76489ab957939cad1322ccd'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV59(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v59.Call} {
        assert(this.isV59)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '3ebc0071bd99fdadaf5a89b35e252d0c62a06eb080cf8f57d5d1aa4d0374f1b2'
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get asV3(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3.Type_52} {
        assert(this.isV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '279cd78acc033c9a34ee1a73be98afc1bd21463ff0ba0fd6718335cf59bbb44a'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV12(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v12.Call} {
        assert(this.isV12)
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
        return this._chain.getCallHash('Scheduler.schedule_after') === '40bd7399142eb7c2198cdd4a9bee29580dc24658d2db0dfb527ca7fa0a99313b'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV39(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v39.MaybeHashed} {
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
    get isV58(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'ddf551d83d8017d796ab8f98a96d25d21d0c6c9431a8a4bae0a858c8786e3820'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV58(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v58.Call} {
        assert(this.isV58)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV59(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '6ab6e1d7dabb803801b98ea2bf5d92bb7feab6130bd135b5c0a19325a14ddeb3'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV59(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v59.Call} {
        assert(this.isV59)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '75b5f37353710ebb2b9e733e615871f753b33b83d5487773ef0157ac4e645b5c'
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
    get asV3(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3.Type_52} {
        assert(this.isV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '6216ff10a41d7e940bee489cd875bc5261d49a69ea391b6afcb1b1811d1f7f10'
    }

    /**
     * Schedule a named task.
     */
    get asV12(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v12.Call} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV39(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '39d5072916ad0334c6e0fbaf5cd138fc3c041c6358475f94e77cd29216b91727'
    }

    /**
     * Schedule a named task.
     */
    get asV39(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v39.MaybeHashed} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV58(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '6f6ff46a67a93c1eb428282cdc01b5ef17a97988dd1e60e98d77300e03450146'
    }

    /**
     * Schedule a named task.
     */
    get asV58(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v58.Call} {
        assert(this.isV58)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV59(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '32c595087d9397a0681f261bdccdac8a203b87e920aa7eb559dbb837f6922d9f'
    }

    /**
     * Schedule a named task.
     */
    get asV59(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v59.Call} {
        assert(this.isV59)
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
     *  Same as [`schedule_named`](Self::schedule_named).
     *  # </weight>
     */
    get isV3(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '2f59497eec9bddb2e95383e4aafa7ded5ae3b944790d247e002642d75c72fd16'
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`](Self::schedule_named).
     *  # </weight>
     */
    get asV3(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3.Type_52} {
        assert(this.isV3)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'cc491d280b4bcb28d19bddefec8359cb07f196103fe687bc47cd224d398bdabd'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV12(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v12.Call} {
        assert(this.isV12)
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
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'b60a744e8357b263e60abd164b666be52e2e037235d4d70b07a2f2df3608b194'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV39(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v39.MaybeHashed} {
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
    get isV58(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '32d1bb8954943ad9862eee301214e9b48bfb7afe1bc5813456fbab833da020b0'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV58(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v58.Call} {
        assert(this.isV58)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV59(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'a8fdd7de8988f8235c167f56fa1d32ea4771ef2aecbabb577608d01f8ce7d5dd'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV59(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v59.Call} {
        assert(this.isV59)
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
     *  - DbWrites per key id: `KeyOwner`
     *  # </weight>
     */
    get isV3(): boolean {
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
     *  - DbWrites per key id: `KeyOwner`
     *  # </weight>
     */
    get asV3(): null {
        assert(this.isV3)
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
     *  - Complexity: `O(1)`
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     *  - DbWrites: `origin account`, `NextKeys`
     *  - DbReads per key id: `KeyOwner`
     *  - DbWrites per key id: `KeyOwner`
     *  # </weight>
     */
    get isV3(): boolean {
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
     *  - Complexity: `O(1)`
     *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
     *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     *  - DbWrites: `origin account`, `NextKeys`
     *  - DbReads per key id: `KeyOwner`
     *  - DbWrites per key id: `KeyOwner`
     *  # </weight>
     */
    get asV3(): {keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array], proof: Uint8Array} {
        assert(this.isV3)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Session.set_keys') === '3f24174145f62fa84eb36f86516aee673bd0764501d578804f153a916ee27a3e'
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
    get asV12(): {keys: v12.SessionKeys, proof: Uint8Array} {
        assert(this.isV12)
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
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     * 
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     * Emits `Bonded`.
     * # <weight>
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     * 
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     * ------------------
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.bond') === 'c0b607a5cbdc40ee9aed26b3c86cfe3159aeccd5ac4e9005210dd39d0317ba48'
    }

    /**
     * Take the origin account as a stash and lock up `value` of its balance. `controller` will
     * be the account that controls it.
     * 
     * `value` must be more than the `minimum_balance` specified by `T::Currency`.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash account.
     * 
     * Emits `Bonded`.
     * # <weight>
     * - Independent of the arguments. Moderate complexity.
     * - O(1).
     * - Three extra DB entries.
     * 
     * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
     * unless the `origin` falls below _existential deposit_ and gets removed as dust.
     * ------------------
     * # </weight>
     */
    get asV12(): {controller: v12.MultiAddress, value: bigint, payee: v12.RewardDestination} {
        assert(this.isV12)
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
     * Add some extra amount that have appeared in the stash `free_balance` into the balance up
     * for staking.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * Use this if there are additional funds in your stash account that you wish to bond.
     * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
     * any limitation on the amount that can be added.
     * 
     * Emits `Bonded`.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - O(1).
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.bond_extra') === 'f92c56c980d6a55c468653fc3149548edcf2481e5da53835a201cafa7dc02fd8'
    }

    /**
     * Add some extra amount that have appeared in the stash `free_balance` into the balance up
     * for staking.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * Use this if there are additional funds in your stash account that you wish to bond.
     * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
     * any limitation on the amount that can be added.
     * 
     * Emits `Bonded`.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - O(1).
     * # </weight>
     */
    get asV12(): {maxAdditional: bigint} {
        assert(this.isV12)
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
     * Cancel enactment of a deferred slash.
     * 
     * Can be called by the `T::SlashCancelOrigin`.
     * 
     * Parameters: era and indices of the slashes for that era to kill.
     * 
     * # <weight>
     * Complexity: O(U + S)
     * with U unapplied slashes weighted with U=1000
     * and S is the number of slash indices to be canceled.
     * - Read: Unapplied Slashes
     * - Write: Unapplied Slashes
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.cancel_deferred_slash') === 'fab176436ff709189f441a9c591b1e715361b4db2636055c0154e452e116feb0'
    }

    /**
     * Cancel enactment of a deferred slash.
     * 
     * Can be called by the `T::SlashCancelOrigin`.
     * 
     * Parameters: era and indices of the slashes for that era to kill.
     * 
     * # <weight>
     * Complexity: O(U + S)
     * with U unapplied slashes weighted with U=1000
     * and S is the number of slash indices to be canceled.
     * - Read: Unapplied Slashes
     * - Write: Unapplied Slashes
     * # </weight>
     */
    get asV12(): {era: number, slashIndices: number[]} {
        assert(this.isV12)
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
     * Declare no desire to either validate or nominate.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains one read.
     * - Writes are limited to the `origin` account key.
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.chill') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Declare no desire to either validate or nominate.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains one read.
     * - Writes are limited to the `origin` account key.
     * # </weight>
     */
    get asV12(): null {
        assert(this.isV12)
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
    get isV12(): boolean {
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
    get asV12(): {controller: Uint8Array} {
        assert(this.isV12)
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
    get isV39(): boolean {
        return this._chain.getCallHash('Staking.force_apply_min_commission') === 'ee412bb909d2500627205d4c5b741967883fb1ed7f64bdc95edae3852f63750e'
    }

    /**
     * Force a validator to have at least the minimum commission. This will not affect a
     * validator who already has a commission greater than or equal to the minimum. Any account
     * can call this.
     */
    get asV39(): {validatorStash: Uint8Array} {
        assert(this.isV39)
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
     * Force there to be a new era at the end of the next session. After this, it will be
     * reset to normal (non-forced) behaviour.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write ForceEra
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.force_new_era') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Force there to be a new era at the end of the next session. After this, it will be
     * reset to normal (non-forced) behaviour.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write ForceEra
     * # </weight>
     */
    get asV12(): null {
        assert(this.isV12)
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
     * Force there to be a new era at the end of sessions indefinitely.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     * 
     * # <weight>
     * - Weight: O(1)
     * - Write: ForceEra
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.force_new_era_always') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Force there to be a new era at the end of sessions indefinitely.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * If this is called just before a new era is triggered, the election process may not
     * have enough blocks to get a result.
     * 
     * # <weight>
     * - Weight: O(1)
     * - Write: ForceEra
     * # </weight>
     */
    get asV12(): null {
        assert(this.isV12)
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
     * Force there to be no new eras indefinitely.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * Thus the election process may be ongoing when this is called. In this case the
     * election will continue until the next era is triggered.
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write: ForceEra
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.force_no_eras') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Force there to be no new eras indefinitely.
     * 
     * The dispatch origin must be Root.
     * 
     * # Warning
     * 
     * The election process starts multiple blocks before the end of the era.
     * Thus the election process may be ongoing when this is called. In this case the
     * election will continue until the next era is triggered.
     * 
     * # <weight>
     * - No arguments.
     * - Weight: O(1)
     * - Write: ForceEra
     * # </weight>
     */
    get asV12(): null {
        assert(this.isV12)
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
     * Force a current staker to become completely unstaked, immediately.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * O(S) where S is the number of slashing spans to be removed
     * Reads: Bonded, Slashing Spans, Account, Locks
     * Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
     * Account, Locks Writes Each: SpanSlash * S
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.force_unstake') === '9d6e1257b3e6113f6cc99a4193f2fef8c6513a3d2a99ee686af751b5931f583b'
    }

    /**
     * Force a current staker to become completely unstaked, immediately.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * O(S) where S is the number of slashing spans to be removed
     * Reads: Bonded, Slashing Spans, Account, Locks
     * Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
     * Account, Locks Writes Each: SpanSlash * S
     * # </weight>
     */
    get asV12(): {stash: Uint8Array, numSlashingSpans: number} {
        assert(this.isV12)
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
     * Increments the ideal number of validators.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Same as [`Self::set_validator_count`].
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.increase_validator_count') === '1b5e15eec25101f7a4e4a63e4c35b1120c3147dac0ca34ddcab4e7e3bb6ef150'
    }

    /**
     * Increments the ideal number of validators.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Same as [`Self::set_validator_count`].
     * # </weight>
     */
    get asV12(): {additional: number} {
        assert(this.isV12)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.kick') === 'e538d9391f8376022db5c010fa7390c92954267b2d5ebc13e621f87adebe57b9'
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
    get asV12(): {who: v12.MultiAddress[]} {
        assert(this.isV12)
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
     * Declare the desire to nominate `targets` for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - The transaction's complexity is proportional to the size of `targets` (N)
     * which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
     * - Both the reads and writes follow a similar pattern.
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.nominate') === '4b7eca27044655bd9da5cc614a4bf774babc00decbed9ca59d95298b300d72de'
    }

    /**
     * Declare the desire to nominate `targets` for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - The transaction's complexity is proportional to the size of `targets` (N)
     * which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
     * - Both the reads and writes follow a similar pattern.
     * # </weight>
     */
    get asV12(): {targets: v12.MultiAddress[]} {
        assert(this.isV12)
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
     * Pay out all the stakers behind a single validator for a single era.
     * 
     * - `validator_stash` is the stash account of the validator. Their nominators, up to
     *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     * - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     * The origin of this call must be _Signed_. Any account can call this function, even if
     * it is not one of the stakers.
     * 
     * # <weight>
     * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     * - Contains a limited number of reads and writes.
     * -----------
     * N is the Number of payouts for the validator (including the validator)
     * Weight:
     * - Reward Destination Staked: O(N)
     * - Reward Destination Controller (Creating): O(N)
     * 
     *   NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *   Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.payout_stakers') === '1a09dc413ed4b8ce5cbcdc282b798636ca24268cca001e43fc92d892de3b6a5f'
    }

    /**
     * Pay out all the stakers behind a single validator for a single era.
     * 
     * - `validator_stash` is the stash account of the validator. Their nominators, up to
     *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     * - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     * The origin of this call must be _Signed_. Any account can call this function, even if
     * it is not one of the stakers.
     * 
     * # <weight>
     * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     * - Contains a limited number of reads and writes.
     * -----------
     * N is the Number of payouts for the validator (including the validator)
     * Weight:
     * - Reward Destination Staked: O(N)
     * - Reward Destination Controller (Creating): O(N)
     * 
     *   NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *   Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     * # </weight>
     */
    get asV12(): {validatorStash: Uint8Array, era: number} {
        assert(this.isV12)
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
     * Remove all data structures concerning a staker/stash once it is at a state where it can
     * be considered `dust` in the staking system. The requirements are:
     * 
     * 1. the `total_balance` of the stash is below existential deposit.
     * 2. or, the `ledger.total` of the stash is below existential deposit.
     * 
     * The former can happen in cases like a slash; the latter when a fully unbonded account
     * is still receiving staking rewards in `RewardDestination::Staked`.
     * 
     * It can be called by anyone, as long as `stash` meets the above requirements.
     * 
     * Refunds the transaction fees upon successful execution.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.reap_stash') === '9d6e1257b3e6113f6cc99a4193f2fef8c6513a3d2a99ee686af751b5931f583b'
    }

    /**
     * Remove all data structures concerning a staker/stash once it is at a state where it can
     * be considered `dust` in the staking system. The requirements are:
     * 
     * 1. the `total_balance` of the stash is below existential deposit.
     * 2. or, the `ledger.total` of the stash is below existential deposit.
     * 
     * The former can happen in cases like a slash; the latter when a fully unbonded account
     * is still receiving staking rewards in `RewardDestination::Staked`.
     * 
     * It can be called by anyone, as long as `stash` meets the above requirements.
     * 
     * Refunds the transaction fees upon successful execution.
     */
    get asV12(): {stash: Uint8Array, numSlashingSpans: number} {
        assert(this.isV12)
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
     * Rebond a portion of the stash scheduled to be unlocked.
     * 
     * The dispatch origin must be signed by the controller.
     * 
     * # <weight>
     * - Time complexity: O(L), where L is unlocking chunks
     * - Bounded by `MAX_UNLOCKING_CHUNKS`.
     * - Storage changes: Can't increase storage, only decrease it.
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.rebond') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
    }

    /**
     * Rebond a portion of the stash scheduled to be unlocked.
     * 
     * The dispatch origin must be signed by the controller.
     * 
     * # <weight>
     * - Time complexity: O(L), where L is unlocking chunks
     * - Bounded by `MAX_UNLOCKING_CHUNKS`.
     * - Storage changes: Can't increase storage, only decrease it.
     * # </weight>
     */
    get asV12(): {value: bigint} {
        assert(this.isV12)
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
     * Scale up the ideal number of validators by a factor.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Same as [`Self::set_validator_count`].
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.scale_validator_count') === 'd5f5b0d2128c7dec0e2681f604f51d1657af9bf5eb7c704432075cb4655e0065'
    }

    /**
     * Scale up the ideal number of validators by a factor.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Same as [`Self::set_validator_count`].
     * # </weight>
     */
    get asV12(): {factor: number} {
        assert(this.isV12)
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
     * (Re-)set the controller of a stash.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ----------
     * Weight: O(1)
     * DB Weight:
     * - Read: Bonded, Ledger New Controller, Ledger Old Controller
     * - Write: Bonded, Ledger New Controller, Ledger Old Controller
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.set_controller') === '81dc3a18eb19c7f258654686fb92e5bf48185191f2c59179a5b4626965fc66cd'
    }

    /**
     * (Re-)set the controller of a stash.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ----------
     * Weight: O(1)
     * DB Weight:
     * - Read: Bonded, Ledger New Controller, Ledger Old Controller
     * - Write: Bonded, Ledger New Controller, Ledger Old Controller
     * # </weight>
     */
    get asV12(): {controller: v12.MultiAddress} {
        assert(this.isV12)
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
     * Set `HistoryDepth` value. This function will delete any history information
     * when `HistoryDepth` is reduced.
     * 
     * Parameters:
     * - `new_history_depth`: The new history depth you would like to set.
     * - `era_items_deleted`: The number of items that will be deleted by this dispatch. This
     *   should report all the storage items that will be deleted by clearing old era history.
     *   Needed to report an accurate weight for the dispatch. Trusted by `Root` to report an
     *   accurate number.
     * 
     * Origin must be root.
     * 
     * # <weight>
     * - E: Number of history depths removed, i.e. 10 -> 7 = 3
     * - Weight: O(E)
     * - DB Weight:
     *     - Reads: Current Era, History Depth
     *     - Writes: History Depth
     *     - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
     *     - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake,
     *       ErasStartSessionIndex
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.set_history_depth') === 'aff387362bca2e77192ffecea0e2882e4c2722db15c54e48ddded4e0dafe3446'
    }

    /**
     * Set `HistoryDepth` value. This function will delete any history information
     * when `HistoryDepth` is reduced.
     * 
     * Parameters:
     * - `new_history_depth`: The new history depth you would like to set.
     * - `era_items_deleted`: The number of items that will be deleted by this dispatch. This
     *   should report all the storage items that will be deleted by clearing old era history.
     *   Needed to report an accurate weight for the dispatch. Trusted by `Root` to report an
     *   accurate number.
     * 
     * Origin must be root.
     * 
     * # <weight>
     * - E: Number of history depths removed, i.e. 10 -> 7 = 3
     * - Weight: O(E)
     * - DB Weight:
     *     - Reads: Current Era, History Depth
     *     - Writes: History Depth
     *     - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
     *     - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake,
     *       ErasStartSessionIndex
     * # </weight>
     */
    get asV12(): {newHistoryDepth: number, eraItemsDeleted: number} {
        assert(this.isV12)
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
     * Set the validators who cannot be slashed (if any).
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * - O(V)
     * - Write: Invulnerables
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.set_invulnerables') === '994c18897efc6a5b0e11aeb337b6c718ad03cb0eb182a442fc74b9c80dd56313'
    }

    /**
     * Set the validators who cannot be slashed (if any).
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * - O(V)
     * - Write: Invulnerables
     * # </weight>
     */
    get asV12(): {invulnerables: Uint8Array[]} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetMinCommissionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_min_commission')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the minimum amount of commission that each validators must maintain.
     * 
     * This call has lower privilege requirements than `set_staking_config` and can be called
     * by the `T::AdminOrigin`. Root can always call this.
     */
    get isV59(): boolean {
        return this._chain.getCallHash('Staking.set_min_commission') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the minimum amount of commission that each validators must maintain.
     * 
     * This call has lower privilege requirements than `set_staking_config` and can be called
     * by the `T::AdminOrigin`. Root can always call this.
     */
    get asV59(): {new: number} {
        assert(this.isV59)
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
     * (Re-)set the payment target for a controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ---------
     * - Weight: O(1)
     * - DB Weight:
     *     - Read: Ledger
     *     - Write: Payee
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.set_payee') === 'e882138b8d0371da862d058ac00f1def3ca0f71ab72eda3fbfb7d75b5fa16515'
    }

    /**
     * (Re-)set the payment target for a controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * # <weight>
     * - Independent of the arguments. Insignificant complexity.
     * - Contains a limited number of reads.
     * - Writes are limited to the `origin` account key.
     * ---------
     * - Weight: O(1)
     * - DB Weight:
     *     - Read: Ledger
     *     - Write: Payee
     * # </weight>
     */
    get asV12(): {payee: v12.RewardDestination} {
        assert(this.isV12)
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
    get isV39(): boolean {
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
    get asV39(): {minNominatorBond: v39.ConfigOp, minValidatorBond: v39.ConfigOp, maxNominatorCount: v39.Type_114, maxValidatorCount: v39.Type_114, chillThreshold: v39.Type_115, minCommission: v39.Type_116} {
        assert(this.isV39)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingSetStakingLimitsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.set_staking_limits')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update the various staking limits this pallet.
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * 
     * Origin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.set_staking_limits') === 'a02f000e828a17cbd3d1b2a16e57d8f64445b5bc9f029b636cd5bfef98e0ebdd'
    }

    /**
     * Update the various staking limits this pallet.
     * 
     * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     * * `min_validator_bond`: The minimum active bond needed to be a validator.
     * * `max_nominator_count`: The max number of users who can be a nominator at once. When
     *   set to `None`, no limit is enforced.
     * * `max_validator_count`: The max number of users who can be a validator at once. When
     *   set to `None`, no limit is enforced.
     * 
     * Origin must be Root to call this function.
     * 
     * NOTE: Existing nominators and validators will not be affected by this update.
     * to kick people under the new limits, `chill_other` should be called.
     */
    get asV12(): {minNominatorBond: bigint, minValidatorBond: bigint, maxNominatorCount: (number | undefined), maxValidatorCount: (number | undefined), threshold: (number | undefined)} {
        assert(this.isV12)
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
     * Sets the ideal number of validators.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Weight: O(1)
     * Write: Validator Count
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.set_validator_count') === 'e648274eb741b1a8ab74c4583589c621e8391cd9122c0f7063e1e18c4af71912'
    }

    /**
     * Sets the ideal number of validators.
     * 
     * The dispatch origin must be Root.
     * 
     * # <weight>
     * Weight: O(1)
     * Write: Validator Count
     * # </weight>
     */
    get asV12(): {new: number} {
        assert(this.isV12)
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
     * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     * period ends. If this leaves an amount actively bonded less than
     * T::Currency::minimum_balance(), then it is increased to the full amount.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     * the funds out of management ready for transfer.
     * 
     * No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
     * can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
     * to be called first to remove some of the chunks (if possible).
     * 
     * If a user encounters the `InsufficientBond` error when calling this extrinsic,
     * they should call `chill` first in order to free up their bonded funds.
     * 
     * Emits `Unbonded`.
     * 
     * See also [`Call::withdraw_unbonded`].
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.unbond') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
    }

    /**
     * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
     * period ends. If this leaves an amount actively bonded less than
     * T::Currency::minimum_balance(), then it is increased to the full amount.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     * 
     * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
     * the funds out of management ready for transfer.
     * 
     * No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
     * can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
     * to be called first to remove some of the chunks (if possible).
     * 
     * If a user encounters the `InsufficientBond` error when calling this extrinsic,
     * they should call `chill` first in order to free up their bonded funds.
     * 
     * Emits `Unbonded`.
     * 
     * See also [`Call::withdraw_unbonded`].
     */
    get asV12(): {value: bigint} {
        assert(this.isV12)
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
     * Declare the desire to validate for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.validate') === '2a662df491d449985438edd4d2e6899fd06beebbaa59e759713811ade38308bf'
    }

    /**
     * Declare the desire to validate for the origin controller.
     * 
     * Effects will be felt at the beginning of the next era.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     */
    get asV12(): {prefs: v12.ValidatorPrefs} {
        assert(this.isV12)
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
     * Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     * This essentially frees up that balance to be used by the stash account to do
     * whatever it wants.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller.
     * 
     * Emits `Withdrawn`.
     * 
     * See also [`Call::unbond`].
     * 
     * # <weight>
     * Complexity O(S) where S is the number of slashing spans to remove
     * NOTE: Weight annotation is the kill scenario, we refund otherwise.
     * # </weight>
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Staking.withdraw_unbonded') === '6a7f80eeb74b237a907212a84c7fbc3bbfc8155b3decc30afb4c65c3bcb3f317'
    }

    /**
     * Remove any unlocked chunks from the `unlocking` queue from our management.
     * 
     * This essentially frees up that balance to be used by the stash account to do
     * whatever it wants.
     * 
     * The dispatch origin for this call must be _Signed_ by the controller.
     * 
     * Emits `Withdrawn`.
     * 
     * See also [`Call::unbond`].
     * 
     * # <weight>
     * Complexity O(S) where S is the number of slashing spans to remove
     * NOTE: Weight annotation is the kill scenario, we refund otherwise.
     * # </weight>
     */
    get asV12(): {numSlashingSpans: number} {
        assert(this.isV12)
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
    get isV3(): boolean {
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
    get asV3(): {new: v3.LookupSource} {
        assert(this.isV3)
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
    get isV12(): boolean {
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
    get asV12(): {new: v12.MultiAddress} {
        assert(this.isV12)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'd136ba6e544b28508bc30bae141b250aacfb26ea25227c0c1462a001a3b6b382'
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
    get asV3(): {call: v3.Type_52} {
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
    get isV12(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '8053da6b064d2538612a9e9c0260f37fd4f2fbe69b48976549c14bb9a5f88801'
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
    get isV39(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'dd333994af3d45c86f5ffafedaf9fe195fbacd23e105852a12b375df41f96c07'
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
    get isV58(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '1fb595724b3c92ed9b025254904ce29b37cb6111391afec36bf58ca3dbb5af54'
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
    get asV58(): {call: v58.Call} {
        assert(this.isV58)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '71fe6e977ed6fa68bae13edacc371bd0844fb434b1ae8c73fad6844ce4d43c16'
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
    get asV59(): {call: v59.Call} {
        assert(this.isV59)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'f74cbb8a69f6693e7be9feaa049092c3f763cb2de246b17eaec4ae7102373a31'
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
    get asV3(): {who: v3.LookupSource, call: v3.Type_52} {
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
    get isV12(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '49a607da08b7fccc5a89b2a6c2f6a7e851dc4c2b24f4cdb68ed328b92b964afb'
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
    get isV39(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '015f016619c3221f1170ea7d32c04fd57541e92ab1074455679a394958dcf223'
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
    get isV58(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'e1cad343a1b9f9d77f0eb4e2ff3fdceea6e5a61449d0f276d88a695b8e9483d9'
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
    get asV58(): {who: v58.MultiAddress, call: v58.Call} {
        assert(this.isV58)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '721aede4eac5f5df80e3f696ecf9d4c771c88a6fca7dfc7f45c9b858cb568d2c'
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
    get asV59(): {who: v59.MultiAddress, call: v59.Call} {
        assert(this.isV59)
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
    get isV3(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '845f92631ef6824a4542d791329120c7f846008647fe7af15c439efcce1d7b52'
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
    get asV3(): {call: v3.Type_52, weight: bigint} {
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
    get isV12(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '479c471bf6b9d35290be56fb399dbf66c00a08b8722260bee18ce6f7ede33386'
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
    get isV39(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '9405c73b387a3435634acd6eeb095b9677b2cc929fa9e8ceb52da7a53f406f49'
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
    get isV58(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '438b102a115ea4a3ec8d29abf53d69c438896ca1e99e0a591633defb772a6299'
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
    get asV58(): {call: v58.Call, weight: v58.Weight} {
        assert(this.isV58)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'da6ee7d5f4fac0d6eac4602cfd98635840ce2b0aad283d6bdbaab16557e671e3'
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
    get asV59(): {call: v59.Call, weight: v59.Weight} {
        assert(this.isV59)
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
    get isV3(): boolean {
        return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
    }

    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    get asV3(): {ratio: number} {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {keys: Uint8Array[]} {
        assert(this.isV3)
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
    get isV3(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  # </weight>
     */
    get asV3(): {remark: Uint8Array} {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {remark: Uint8Array} {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {changesTrieConfig: (v3.ChangesTrieConfiguration | undefined)} {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {code: Uint8Array} {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {code: Uint8Array} {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {pages: bigint} {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {now: bigint} {
        assert(this.isV3)
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
    get isV12(): boolean {
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
    get asV12(): {proposalId: number} {
        assert(this.isV12)
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
    get isV12(): boolean {
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
    get asV12(): {value: bigint, beneficiary: v12.MultiAddress} {
        assert(this.isV12)
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
    get isV12(): boolean {
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
    get asV12(): {proposalId: number} {
        assert(this.isV12)
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
    get isV39(): boolean {
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
    get asV39(): {proposalId: number} {
        assert(this.isV39)
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
    get isV39(): boolean {
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
    get asV39(): {amount: bigint, beneficiary: v39.MultiAddress} {
        assert(this.isV39)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'dc1531cd06fbfae439d42605957db8dd76772e4a81e473b43239401b2f43170d'
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
    get isV39(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'd0b2e830e229d9c29355d396c7e58724986a4e5060ff94217347cfce7d973f81'
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
    get isV58(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'f433dc65d51952f1608acefd7380e050ef58103a21fc650e10efb1be72b10ba2'
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
    get asV58(): {index: number, call: v58.Call} {
        assert(this.isV58)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '3ecdb18c76357531e1837211d69fce2ea201685d295d670b7c0a832a2e71d437'
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
    get asV59(): {index: number, call: v59.Call} {
        assert(this.isV59)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Utility.batch') === '9013e455ca025cb1eb0dad032139c99487789d874dd739ca6cb9be2069edf1e8'
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
    get isV39(): boolean {
        return this._chain.getCallHash('Utility.batch') === '44980e6fcfb62f32536784dc44ca6250c6b5bb7e365563b0d03025d8746c3911'
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
    get isV58(): boolean {
        return this._chain.getCallHash('Utility.batch') === '864be4fff39ae05565001d371639fb27728d265bd34eb7add1c41303c2fd4fa6'
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
    get asV58(): {calls: v58.Call[]} {
        assert(this.isV58)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'f4ab7f31c87e258786dc09cdbada43c667fb5b56d2c5b1e19704015de64311f0'
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
    get asV59(): {calls: v59.Call[]} {
        assert(this.isV59)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '9013e455ca025cb1eb0dad032139c99487789d874dd739ca6cb9be2069edf1e8'
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
    get isV39(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '44980e6fcfb62f32536784dc44ca6250c6b5bb7e365563b0d03025d8746c3911'
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
    get isV58(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '864be4fff39ae05565001d371639fb27728d265bd34eb7add1c41303c2fd4fa6'
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
    get asV58(): {calls: v58.Call[]} {
        assert(this.isV58)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'f4ab7f31c87e258786dc09cdbada43c667fb5b56d2c5b1e19704015de64311f0'
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
    get asV59(): {calls: v59.Call[]} {
        assert(this.isV59)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'a85a55b79d0c30b470165d15e35ce893c46971f392f58b3f780cf190250db339'
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
    get isV39(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '41b6ff8cc791da76b9123bddab5969205cdd4c6dba7948128166c0af29176b21'
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
    get isV58(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '66390e1d10a80c94ebf22cdd03ff139cbdda002bca5ae87d85a12e5f08d2b319'
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
    get asV58(): {asOrigin: v58.OriginCaller, call: v58.Call} {
        assert(this.isV58)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '123fb5e8df2b77966cf3b0b70eaa1d74937d03a06d759fd7fb35d32fdc05aca4'
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
    get asV59(): {asOrigin: v59.OriginCaller, call: v59.Call} {
        assert(this.isV59)
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
    get isV39(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '44980e6fcfb62f32536784dc44ca6250c6b5bb7e365563b0d03025d8746c3911'
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
    get asV39(): {calls: v39.Call[]} {
        assert(this.isV39)
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
    get isV58(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '864be4fff39ae05565001d371639fb27728d265bd34eb7add1c41303c2fd4fa6'
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
    get asV58(): {calls: v58.Call[]} {
        assert(this.isV58)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'f4ab7f31c87e258786dc09cdbada43c667fb5b56d2c5b1e19704015de64311f0'
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
    get asV59(): {calls: v59.Call[]} {
        assert(this.isV59)
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
    get isV59(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'da6ee7d5f4fac0d6eac4602cfd98635840ce2b0aad283d6bdbaab16557e671e3'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV59(): {call: v59.Call, weight: v59.Weight} {
        assert(this.isV59)
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
    get isV3(): boolean {
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
    get asV3(): {source: v3.LookupSource, target: v3.LookupSource, schedule: v3.VestingInfo} {
        assert(this.isV3)
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
    get isV12(): boolean {
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
    get asV12(): {source: v12.MultiAddress, target: v12.MultiAddress, schedule: v12.VestingInfo} {
        assert(this.isV12)
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
    get isV12(): boolean {
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
    get asV12(): {schedule1Index: number, schedule2Index: number} {
        assert(this.isV12)
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
    get isV3(): boolean {
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
    get asV3(): null {
        assert(this.isV3)
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
    get isV3(): boolean {
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
    get asV3(): {target: v3.LookupSource} {
        assert(this.isV3)
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
    get isV12(): boolean {
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
    get asV12(): {target: v12.MultiAddress} {
        assert(this.isV12)
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
    get isV3(): boolean {
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
    get asV3(): {target: v3.LookupSource, schedule: v3.VestingInfo} {
        assert(this.isV3)
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
    get isV12(): boolean {
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
    get asV12(): {target: v12.MultiAddress, schedule: v12.VestingInfo} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}
