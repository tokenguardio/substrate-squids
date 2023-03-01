import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v1 from './v1'
import * as v6 from './v6'
import * as v10 from './v10'
import * as v11 from './v11'
import * as v12 from './v12'

export class AllocationsAllocateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Allocations.allocate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Can only be called by an oracle, trigger a coin creation and an event
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Allocations.allocate') === '50b5b5d128d91e8957a174ed7cf24cfd580ee5a260e7857bff38b47cf622839c'
    }

    /**
     * Can only be called by an oracle, trigger a coin creation and an event
     */
    get asV1(): {to: Uint8Array, amount: bigint, proof: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class AllocationsBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Allocations.batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Optimized allocation call, which will batch allocations of various amounts
     * and destinations and together. This allow us to be much more efficient and thus
     * increase our chain's capacity in handling these transactions.
     */
    get isV11(): boolean {
        return this._chain.getCallHash('Allocations.batch') === '51acb25ddffc4b489fa9011bcfb1b450fcf67e683ebd5543748ed3cb0e8d2306'
    }

    /**
     * Optimized allocation call, which will batch allocations of various amounts
     * and destinations and together. This allow us to be much more efficient and thus
     * increase our chain's capacity in handling these transactions.
     */
    get asV11(): {batch: [Uint8Array, bigint][]} {
        assert(this.isV11)
        return this._chain.decodeCall(this.call)
    }
}

export class AllocationsOraclesAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AllocationsOracles.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('AllocationsOracles.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV1(): {who: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class AllocationsOraclesChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AllocationsOracles.change_key')
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
    get isV1(): boolean {
        return this._chain.getCallHash('AllocationsOracles.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV1(): {new: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class AllocationsOraclesClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AllocationsOracles.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('AllocationsOracles.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class AllocationsOraclesRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AllocationsOracles.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('AllocationsOracles.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV1(): {who: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class AllocationsOraclesResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AllocationsOracles.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('AllocationsOracles.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get asV1(): {members: Uint8Array[]} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class AllocationsOraclesSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AllocationsOracles.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('AllocationsOracles.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV1(): {who: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class AllocationsOraclesSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AllocationsOracles.swap_member')
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
    get isV1(): boolean {
        return this._chain.getCallHash('AllocationsOracles.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV1(): {remove: Uint8Array, add: Uint8Array} {
        assert(this.isV1)
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
    get isV6(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
    }

    /**
     * Provide a set of uncles.
     */
    get asV6(): {newUncles: v6.Header[]} {
        assert(this.isV6)
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

export class CompanyReserveApplyAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CompanyReserve.apply_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV1(): boolean {
        return this._chain.getCallHash('CompanyReserve.apply_as') === 'a9f8193d926f29d30c08628627d09ed5cfe97477b731305d75d66cb40bd90928'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV1(): {call: v1.Call} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV6(): boolean {
        return this._chain.getCallHash('CompanyReserve.apply_as') === 'f6e87384622ff2e90452fe1c1797fa93bb42d18d55bfe95a12300d42aa80f59e'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV6(): {call: v6.Call} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV10(): boolean {
        return this._chain.getCallHash('CompanyReserve.apply_as') === '8b575d0ea3a5b73d94dc363acb6c16e597774c84f529f46c0c00f7a99134742d'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV10(): {call: v10.Call} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV11(): boolean {
        return this._chain.getCallHash('CompanyReserve.apply_as') === 'c8eec9af2675f5ca66565f970cea87e963ad6358500975016e9b9975bcb4ce67'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV11(): {call: v11.Call} {
        assert(this.isV11)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV12(): boolean {
        return this._chain.getCallHash('CompanyReserve.apply_as') === '5db6e491de8791381401d22e268e8f349dff9de2e028b82d83a8ad0e14aedf4c'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV12(): {call: v12.Call} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class CompanyReserveSpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CompanyReserve.spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Spend `amount` funds from the reserve account to `to`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('CompanyReserve.spend') === 'ff235a8cc8e39172d7506c342732c7a5dbd72259d5c5b9cdfa576e00efcf67f8'
    }

    /**
     * Spend `amount` funds from the reserve account to `to`.
     */
    get asV1(): {to: Uint8Array, amount: bigint} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class CompanyReserveTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CompanyReserve.tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deposit `amount` tokens in the treasure account
     */
    get isV1(): boolean {
        return this._chain.getCallHash('CompanyReserve.tip') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Deposit `amount` tokens in the treasure account
     */
    get asV1(): {amount: bigint} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class EmergencyShutdownToggleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EmergencyShutdown.toggle')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Toggle the shutdown state if authorized to do so.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('EmergencyShutdown.toggle') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Toggle the shutdown state if authorized to do so.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class InternationalReserveApplyAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'InternationalReserve.apply_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV1(): boolean {
        return this._chain.getCallHash('InternationalReserve.apply_as') === 'a9f8193d926f29d30c08628627d09ed5cfe97477b731305d75d66cb40bd90928'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV1(): {call: v1.Call} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV6(): boolean {
        return this._chain.getCallHash('InternationalReserve.apply_as') === 'f6e87384622ff2e90452fe1c1797fa93bb42d18d55bfe95a12300d42aa80f59e'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV6(): {call: v6.Call} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV10(): boolean {
        return this._chain.getCallHash('InternationalReserve.apply_as') === '8b575d0ea3a5b73d94dc363acb6c16e597774c84f529f46c0c00f7a99134742d'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV10(): {call: v10.Call} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV11(): boolean {
        return this._chain.getCallHash('InternationalReserve.apply_as') === 'c8eec9af2675f5ca66565f970cea87e963ad6358500975016e9b9975bcb4ce67'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV11(): {call: v11.Call} {
        assert(this.isV11)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV12(): boolean {
        return this._chain.getCallHash('InternationalReserve.apply_as') === '5db6e491de8791381401d22e268e8f349dff9de2e028b82d83a8ad0e14aedf4c'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV12(): {call: v12.Call} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class InternationalReserveSpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'InternationalReserve.spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Spend `amount` funds from the reserve account to `to`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('InternationalReserve.spend') === 'ff235a8cc8e39172d7506c342732c7a5dbd72259d5c5b9cdfa576e00efcf67f8'
    }

    /**
     * Spend `amount` funds from the reserve account to `to`.
     */
    get asV1(): {to: Uint8Array, amount: bigint} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class InternationalReserveTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'InternationalReserve.tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deposit `amount` tokens in the treasure account
     */
    get isV1(): boolean {
        return this._chain.getCallHash('InternationalReserve.tip') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Deposit `amount` tokens in the treasure account
     */
    get asV1(): {amount: bigint} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class MandateApplyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Mandate.apply')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Let the configured origin dispatch a call as root
     */
    get isV6(): boolean {
        return this._chain.getCallHash('Mandate.apply') === 'f6e87384622ff2e90452fe1c1797fa93bb42d18d55bfe95a12300d42aa80f59e'
    }

    /**
     * Let the configured origin dispatch a call as root
     */
    get asV6(): {call: v6.Call} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Let the configured origin dispatch a call as root
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Mandate.apply') === '8b575d0ea3a5b73d94dc363acb6c16e597774c84f529f46c0c00f7a99134742d'
    }

    /**
     * Let the configured origin dispatch a call as root
     */
    get asV10(): {call: v10.Call} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Let the configured origin dispatch a call as root
     */
    get isV11(): boolean {
        return this._chain.getCallHash('Mandate.apply') === 'c8eec9af2675f5ca66565f970cea87e963ad6358500975016e9b9975bcb4ce67'
    }

    /**
     * Let the configured origin dispatch a call as root
     */
    get asV11(): {call: v11.Call} {
        assert(this.isV11)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Let the configured origin dispatch a call as root
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Mandate.apply') === '5db6e491de8791381401d22e268e8f349dff9de2e028b82d83a8ad0e14aedf4c'
    }

    /**
     * Let the configured origin dispatch a call as root
     */
    get asV12(): {call: v12.Call} {
        assert(this.isV12)
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
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'bf6e8689486a913a4e16e0ab71b911f5e6f104620546a1b754d0b0a486e685d5'
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
    get isV6(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'd18d248f22ad80ef671f9ef5bf5b1dfa2f69ab48d7d32f689fe9ac824f0d88a2'
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
    get asV6(): {otherSignatories: Uint8Array[], call: v6.Call} {
        assert(this.isV6)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '8aae5bc35c38a8c63d7781cc52d1080ce699302c2531c986125405258d758cf2'
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
    get asV10(): {otherSignatories: Uint8Array[], call: v10.Call} {
        assert(this.isV10)
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
    get isV11(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '56a22488fa4e77960560e7199fb060482c9af4e5d3ef6a1c529e12f22dc16dd6'
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
    get asV11(): {otherSignatories: Uint8Array[], call: v11.Call} {
        assert(this.isV11)
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
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '29abda65642450b6c53c5403f2c796ece37f93a208455bf1501cf016d2e8fac9'
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
    get isV10(): boolean {
        return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get asV10(): {bytes: Uint8Array} {
        assert(this.isV10)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get asV10(): {hash: Uint8Array} {
        assert(this.isV10)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     */
    get asV10(): {hash: Uint8Array} {
        assert(this.isV10)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get asV10(): {hash: Uint8Array} {
        assert(this.isV10)
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
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 22.15 + 2.869 * S µs
     * - DB Weight:
     *     - Read: Agenda
     *     - Write: Agenda, Lookup
     * - Will use base weight of 100 which should be good for up to 30 scheduled calls
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Cancel an anonymously scheduled task.
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 22.15 + 2.869 * S µs
     * - DB Weight:
     *     - Read: Agenda
     *     - Write: Agenda, Lookup
     * - Will use base weight of 100 which should be good for up to 30 scheduled calls
     * # </weight>
     */
    get asV1(): {when: number, index: number} {
        assert(this.isV1)
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
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 24.91 + 2.907 * S µs
     * - DB Weight:
     *     - Read: Agenda, Lookup
     *     - Write: Agenda, Lookup
     * - Will use base weight of 100 which should be good for up to 30 scheduled calls
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
    }

    /**
     * Cancel a named scheduled task.
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 24.91 + 2.907 * S µs
     * - DB Weight:
     *     - Read: Agenda, Lookup
     *     - Write: Agenda, Lookup
     * - Will use base weight of 100 which should be good for up to 30 scheduled calls
     * # </weight>
     */
    get asV1(): {id: Uint8Array} {
        assert(this.isV1)
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
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 22.29 + .126 * S µs
     * - DB Weight:
     *     - Read: Agenda
     *     - Write: Agenda
     * - Will use base weight of 25 which should be good for up to 30 scheduled calls
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '36495e964b24bbd3ff564c7dce2e41c615b043a02ed436280c45a25474de015a'
    }

    /**
     * Anonymously schedule a task.
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 22.29 + .126 * S µs
     * - DB Weight:
     *     - Read: Agenda
     *     - Write: Agenda
     * - Will use base weight of 25 which should be good for up to 30 scheduled calls
     * # </weight>
     */
    get asV1(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1.Call} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV6(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '2f917490ee8e8f6538461c2360787e2227aff6b9b528723d5cde772ce958ac5d'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV6(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v6.MaybeHashed} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '8d4712934a7d6f477bd17d510aced5289296d714c3a07e848961337fd28ab6e4'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV10(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v10.MaybeHashed} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV11(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '97d0896bc718c5072f5e879e466c52c7f9793319fe2c4689e768d2f603b273a9'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV11(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v11.MaybeHashed} {
        assert(this.isV11)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'a66d37f4ced5d1e2c39e71864a7d6c1582202c2c15513f58b787c6b65fd97238'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV12(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v12.MaybeHashed} {
        assert(this.isV12)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '6e068d0d1fa3ba502b5934c700429157f174ee46d767bc8bca5497b99406aa06'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV1(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1.Call} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV6(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '7bdda5865aabcfe02776b5b653fced45afaaad9a7e17281da2941156a147467f'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV6(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v6.MaybeHashed} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '4d21bfd75b7334da6a05287ca7068a7e1ee19c35ea15e228350791c0f3dad827'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV10(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v10.MaybeHashed} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV11(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '333dd105fe169ae64584d30ab651d067b99b4b897075eb45e28e51727a2d750a'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV11(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v11.MaybeHashed} {
        assert(this.isV11)
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
        return this._chain.getCallHash('Scheduler.schedule_after') === '7c2b72bade084ae3783a9a97cc20e747ff0343c9d8731890ba3ba83b0cf126e5'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV12(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v12.MaybeHashed} {
        assert(this.isV12)
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
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 29.6 + .159 * S µs
     * - DB Weight:
     *     - Read: Agenda, Lookup
     *     - Write: Agenda, Lookup
     * - Will use base weight of 35 which should be good for more than 30 scheduled calls
     * # </weight>
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '4d5859ae965660a811be662e5cb40bc50a68cd034a43bb3a1c4339f0600feaec'
    }

    /**
     * Schedule a named task.
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 29.6 + .159 * S µs
     * - DB Weight:
     *     - Read: Agenda, Lookup
     *     - Write: Agenda, Lookup
     * - Will use base weight of 35 which should be good for more than 30 scheduled calls
     * # </weight>
     */
    get asV1(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1.Call} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV6(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '6e7198a3387ae7f800bc2dc311dbb868df4abcce24c0ccbb715f75fb4c4de05a'
    }

    /**
     * Schedule a named task.
     */
    get asV6(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v6.MaybeHashed} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '6c84e119e8ffe1e50dc932fed67524cc857c948ddbbbcba5e35cbd0ef7273eff'
    }

    /**
     * Schedule a named task.
     */
    get asV10(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v10.MaybeHashed} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV11(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '32667417a331ab09397d862dea8010689ffb32b781450d27805a9ab4b94fdf69'
    }

    /**
     * Schedule a named task.
     */
    get asV11(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v11.MaybeHashed} {
        assert(this.isV11)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'dc4c64683d481387fd9586f6e3f1a475b749c10736c366163b105ec4959b270c'
    }

    /**
     * Schedule a named task.
     */
    get asV12(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v12.MaybeHashed} {
        assert(this.isV12)
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
    get isV1(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '16937033236d521128abdd25e66035c164354c9c54a870bcde370b1fada2824b'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV1(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1.Call} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV6(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'c4acb0c5f044a89d3ae4ea28dbb6ebd185d53e7da14657edb3086c4024605f7a'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV6(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v6.MaybeHashed} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'a0689bcae3e17c9d7d04d95d59cc8f9d2c5333c660e6921b05b15a32726e12e2'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV10(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v10.MaybeHashed} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV11(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '433589dd890f6295acb28d1862f62a15ea1eed851490ad41756353646fd637f7'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV11(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v11.MaybeHashed} {
        assert(this.isV11)
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
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'd0e91ba9da33b761433493b0e5f83141a604bdb0c1b82007dbd2406e80deaaa7'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV12(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v12.MaybeHashed} {
        assert(this.isV12)
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
    get isV1(): boolean {
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
        return this._chain.getCallHash('Sudo.sudo') === 'a9f8193d926f29d30c08628627d09ed5cfe97477b731305d75d66cb40bd90928'
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
    get isV6(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'f6e87384622ff2e90452fe1c1797fa93bb42d18d55bfe95a12300d42aa80f59e'
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
    get asV6(): {call: v6.Call} {
        assert(this.isV6)
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
        return this._chain.getCallHash('Sudo.sudo_as') === '1b9e15ca94752e9b734e9a0db38053a947dc4a968e7eab4ab7139a371988a0db'
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
    get isV6(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '6b7cbccbd6e9d56dc7bf3266b0008169f6c609d79b009be50f0a8ca9b9c7e997'
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
    get asV6(): {who: v6.MultiAddress, call: v6.Call} {
        assert(this.isV6)
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
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'fa8b1684373025bf84dbbe96de26b604bd28daea3c1f37c3e75ee21eb7f4fe7b'
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
    get isV6(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '634b6a7bd70860e367987f141a330a4139d870ea3905e4df470781b3dcaf2c4e'
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
    get asV6(): {call: v6.Call, weight: bigint} {
        assert(this.isV6)
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
    get isV6(): boolean {
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
    get asV6(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV6)
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
    get isV6(): boolean {
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
    get asV6(): {proposalHash: Uint8Array} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '3c3133749fdb00907688ef83e5da819faadb2c8872a1446ad2b8f4febb82edfc'
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
    get asV6(): {proposal: v6.Call, lengthBound: number} {
        assert(this.isV6)
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
    get isV10(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'b05730088eb316411c6c975ca4a32b3788ec0dec5b5a1302c0b3d3662906280f'
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
    get asV10(): {proposal: v10.Call, lengthBound: number} {
        assert(this.isV10)
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
    get isV11(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'a6394c4fffaf455c8b8cd92bc5d34c86ac9c9c3caa43f54850ca91203e2cff07'
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
    get asV11(): {proposal: v11.Call, lengthBound: number} {
        assert(this.isV11)
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
    get isV12(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '21f3ee9582e8d611fcd7b19f0cbb661bbaa6b748b1577fc00b51b05700e05462'
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
    get asV12(): {proposal: v12.Call, lengthBound: number} {
        assert(this.isV12)
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
    get isV6(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'fb29c442fd0ba29419ebf4e96fe0896084da0016efe8f282f1b49c736758c4b9'
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
    get asV6(): {threshold: number, proposal: v6.Call, lengthBound: number} {
        assert(this.isV6)
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
    get isV10(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '6470c75b05b25c0af631ef3279ebb9e68c4a1663927669d0b3a5dace9c7db167'
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
    get asV10(): {threshold: number, proposal: v10.Call, lengthBound: number} {
        assert(this.isV10)
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
    get isV11(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '268d6b55cd164854c42209480302ed0c5cc25a4903b27f7c642b1e32fc801169'
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
    get asV11(): {threshold: number, proposal: v11.Call, lengthBound: number} {
        assert(this.isV11)
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
    get isV12(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'f950038a40fb6fd66db03ace291a685b65926e5584ec79d793c22f317c65ee0f'
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
    get asV12(): {threshold: number, proposal: v12.Call, lengthBound: number} {
        assert(this.isV12)
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
    get isV6(): boolean {
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
    get asV6(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV6)
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
    get isV6(): boolean {
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
    get asV6(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV6(): boolean {
        return this._chain.getCallHash('TechnicalMembership.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV6(): {who: Uint8Array} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.change_key')
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
    get isV6(): boolean {
        return this._chain.getCallHash('TechnicalMembership.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV6(): {new: Uint8Array} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV6(): boolean {
        return this._chain.getCallHash('TechnicalMembership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV6(): null {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV6(): boolean {
        return this._chain.getCallHash('TechnicalMembership.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV6(): {who: Uint8Array} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get isV6(): boolean {
        return this._chain.getCallHash('TechnicalMembership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get asV6(): {members: Uint8Array[]} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV6(): boolean {
        return this._chain.getCallHash('TechnicalMembership.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV6(): {who: Uint8Array} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.swap_member')
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
    get isV6(): boolean {
        return this._chain.getCallHash('TechnicalMembership.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV6(): {remove: Uint8Array, add: Uint8Array} {
        assert(this.isV6)
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
     * Approve an instance to be transferred by a delegated third-party account.
     * 
     * Origin must be Signed and must be the owner of the asset `instance`.
     * 
     * - `class`: The class of the asset to be approved for delegated transfer.
     * - `instance`: The instance of the asset to be approved for delegated transfer.
     * - `delegate`: The account to delegate permission to transfer the asset.
     * 
     * Emits `ApprovedTransfer` on success.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.approve_transfer') === '566c3fb303903751a17145e9b381e1c42538f2245dbaa4d7e65b62a7e61f1804'
    }

    /**
     * Approve an instance to be transferred by a delegated third-party account.
     * 
     * Origin must be Signed and must be the owner of the asset `instance`.
     * 
     * - `class`: The class of the asset to be approved for delegated transfer.
     * - `instance`: The instance of the asset to be approved for delegated transfer.
     * - `delegate`: The account to delegate permission to transfer the asset.
     * 
     * Emits `ApprovedTransfer` on success.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, instance: number, delegate: v10.MultiAddress} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Approve an item to be transferred by a delegated third-party account.
     * 
     * Origin must be Signed and must be the owner of the `item`.
     * 
     * - `collection`: The collection of the item to be approved for delegated transfer.
     * - `item`: The item of the item to be approved for delegated transfer.
     * - `delegate`: The account to delegate permission to transfer the item.
     * 
     * Emits `ApprovedTransfer` on success.
     * 
     * Weight: `O(1)`
     */
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.approve_transfer') === 'c9c15bb9795deae48e796908cd20184ae0a966a4908cef7546649878ce0896ef'
    }

    /**
     * Approve an item to be transferred by a delegated third-party account.
     * 
     * Origin must be Signed and must be the owner of the `item`.
     * 
     * - `collection`: The collection of the item to be approved for delegated transfer.
     * - `item`: The item of the item to be approved for delegated transfer.
     * - `delegate`: The account to delegate permission to transfer the item.
     * 
     * Emits `ApprovedTransfer` on success.
     * 
     * Weight: `O(1)`
     */
    get asV12(): {collection: number, item: number, delegate: v12.MultiAddress} {
        assert(this.isV12)
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
     * Destroy a single asset instance.
     * 
     * Origin must be Signed and the sender should be the Admin of the asset `class`.
     * 
     * - `class`: The class of the asset to be burned.
     * - `instance`: The instance of the asset to be burned.
     * - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
     *   asset is owned by this value.
     * 
     * Emits `Burned` with the actual amount burned.
     * 
     * Weight: `O(1)`
     * Modes: `check_owner.is_some()`.
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.burn') === '40a643c4be1b4befcc1310fbc31cc206b69e6d4bc06ea7c25482987b49f01c15'
    }

    /**
     * Destroy a single asset instance.
     * 
     * Origin must be Signed and the sender should be the Admin of the asset `class`.
     * 
     * - `class`: The class of the asset to be burned.
     * - `instance`: The instance of the asset to be burned.
     * - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
     *   asset is owned by this value.
     * 
     * Emits `Burned` with the actual amount burned.
     * 
     * Weight: `O(1)`
     * Modes: `check_owner.is_some()`.
     */
    get asV10(): {class: number, instance: number, checkOwner: (v10.MultiAddress | undefined)} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.burn') === '11e7151e96cf5dad3b6b9103e02c52ffeb365031d443092145450e9185587f9b'
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
    get asV12(): {collection: number, item: number, checkOwner: (v12.MultiAddress | undefined)} {
        assert(this.isV12)
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
     * Cancel the prior approval for the transfer of an asset by a delegate.
     * 
     * Origin must be either:
     * - the `Force` origin;
     * - `Signed` with the signer being the Admin of the asset `class`;
     * - `Signed` with the signer being the Owner of the asset `instance`;
     * 
     * Arguments:
     * - `class`: The class of the asset of whose approval will be cancelled.
     * - `instance`: The instance of the asset of whose approval will be cancelled.
     * - `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
     *   which permission of transfer is delegated.
     * 
     * Emits `ApprovalCancelled` on success.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.cancel_approval') === 'aed4105b20befb0051d26b7fe8523fc94357d7dd3c7d78285cf72f3277144fe4'
    }

    /**
     * Cancel the prior approval for the transfer of an asset by a delegate.
     * 
     * Origin must be either:
     * - the `Force` origin;
     * - `Signed` with the signer being the Admin of the asset `class`;
     * - `Signed` with the signer being the Owner of the asset `instance`;
     * 
     * Arguments:
     * - `class`: The class of the asset of whose approval will be cancelled.
     * - `instance`: The instance of the asset of whose approval will be cancelled.
     * - `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
     *   which permission of transfer is delegated.
     * 
     * Emits `ApprovalCancelled` on success.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, instance: number, maybeCheckDelegate: (v10.MultiAddress | undefined)} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.cancel_approval') === '59043baad44e648229d345b25524d313bc1ebdc9a08933d56586e322f36f08b5'
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
    get asV12(): {collection: number, item: number, maybeCheckDelegate: (v12.MultiAddress | undefined)} {
        assert(this.isV12)
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
     * Clear an attribute for an asset class or instance.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * asset `class`.
     * 
     * Any deposit is freed for the asset class owner.
     * 
     * - `class`: The identifier of the asset class whose instance's metadata to clear.
     * - `maybe_instance`: The identifier of the asset instance whose metadata to clear.
     * - `key`: The key of the attribute.
     * 
     * Emits `AttributeCleared`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.clear_attribute') === '91aa106b700026eb59ef1d86cbd22766539a996d1d1d5cb5dbbdc18439ff1283'
    }

    /**
     * Clear an attribute for an asset class or instance.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * asset `class`.
     * 
     * Any deposit is freed for the asset class owner.
     * 
     * - `class`: The identifier of the asset class whose instance's metadata to clear.
     * - `maybe_instance`: The identifier of the asset instance whose metadata to clear.
     * - `key`: The key of the attribute.
     * 
     * Emits `AttributeCleared`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, maybeInstance: (number | undefined), key: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.clear_attribute') === 'c330ddd00fb87b92c796bc29cff6edf2ce546dd8eb98420ac23c5cbe7b0e11d1'
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
    get asV12(): {collection: number, maybeItem: (number | undefined), key: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesClearClassMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.clear_class_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear the metadata for an asset class.
     * 
     * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     * the asset `class`.
     * 
     * Any deposit is freed for the asset class owner.
     * 
     * - `class`: The identifier of the asset class whose metadata to clear.
     * 
     * Emits `ClassMetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.clear_class_metadata') === '4f045c4df2d4b9045175427f6f6aa548cd3ad56207f700b68254d3b77d944310'
    }

    /**
     * Clear the metadata for an asset class.
     * 
     * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     * the asset `class`.
     * 
     * Any deposit is freed for the asset class owner.
     * 
     * - `class`: The identifier of the asset class whose metadata to clear.
     * 
     * Emits `ClassMetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number} {
        assert(this.isV10)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.clear_collection_metadata') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
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
    get asV12(): {collection: number} {
        assert(this.isV12)
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
     * Clear the metadata for an asset instance.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * asset `instance`.
     * 
     * Any deposit is freed for the asset class owner.
     * 
     * - `class`: The identifier of the asset class whose instance's metadata to clear.
     * - `instance`: The identifier of the asset instance whose metadata to clear.
     * 
     * Emits `MetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.clear_metadata') === '4aec04ec96e3cd667bd16926634d063c18da9922e4d645f33692574e196c20dc'
    }

    /**
     * Clear the metadata for an asset instance.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * asset `instance`.
     * 
     * Any deposit is freed for the asset class owner.
     * 
     * - `class`: The identifier of the asset class whose instance's metadata to clear.
     * - `instance`: The identifier of the asset instance whose metadata to clear.
     * 
     * Emits `MetadataCleared`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, instance: number} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.clear_metadata') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
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
    get asV12(): {collection: number, item: number} {
        assert(this.isV12)
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
     * Issue a new class of non-fungible assets from a public origin.
     * 
     * This new asset class has no assets initially and its owner is the origin.
     * 
     * The origin must be Signed and the sender must have sufficient funds free.
     * 
     * `AssetDeposit` funds of sender are reserved.
     * 
     * Parameters:
     * - `class`: The identifier of the new asset class. This must not be currently in use.
     * - `admin`: The admin of this class of assets. The admin is the initial address of each
     * member of the asset class's admin team.
     * 
     * Emits `Created` event when successful.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.create') === '67741a2e31f7f0a4079d2a56efe7b7f1219225e21dad4370994e9d12eedd9c95'
    }

    /**
     * Issue a new class of non-fungible assets from a public origin.
     * 
     * This new asset class has no assets initially and its owner is the origin.
     * 
     * The origin must be Signed and the sender must have sufficient funds free.
     * 
     * `AssetDeposit` funds of sender are reserved.
     * 
     * Parameters:
     * - `class`: The identifier of the new asset class. This must not be currently in use.
     * - `admin`: The admin of this class of assets. The admin is the initial address of each
     * member of the asset class's admin team.
     * 
     * Emits `Created` event when successful.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, admin: v10.MultiAddress} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.create') === '2d683011a822f0c0643bcbd8540fb1ade68f203c54330e62d2b1e58cb954cb9b'
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
    get asV12(): {collection: number, admin: v12.MultiAddress} {
        assert(this.isV12)
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
     * Destroy a class of fungible assets.
     * 
     * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
     * owner of the asset `class`.
     * 
     * - `class`: The identifier of the asset class to be destroyed.
     * - `witness`: Information on the instances minted in the asset class. This must be
     * correct.
     * 
     * Emits `Destroyed` event when successful.
     * 
     * Weight: `O(n + m)` where:
     * - `n = witness.instances`
     * - `m = witness.instance_metadatas`
     * - `a = witness.attributes`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.destroy') === '3ad3a035b7b78785680f60a4eec3ee97bfc547385c499e09d09c5a59ca7c0f5c'
    }

    /**
     * Destroy a class of fungible assets.
     * 
     * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
     * owner of the asset `class`.
     * 
     * - `class`: The identifier of the asset class to be destroyed.
     * - `witness`: Information on the instances minted in the asset class. This must be
     * correct.
     * 
     * Emits `Destroyed` event when successful.
     * 
     * Weight: `O(n + m)` where:
     * - `n = witness.instances`
     * - `m = witness.instance_metadatas`
     * - `a = witness.attributes`
     */
    get asV10(): {class: number, witness: v10.DestroyWitness} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.destroy') === '637af5918a690295ecab5c7c2838e3833cdf72db988885b3b2ff4ca91fb4c675'
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
    get asV12(): {collection: number, witness: v12.DestroyWitness} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesForceAssetStatusCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.force_asset_status')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Alter the attributes of a given asset.
     * 
     * Origin must be `ForceOrigin`.
     * 
     * - `class`: The identifier of the asset.
     * - `owner`: The new Owner of this asset.
     * - `issuer`: The new Issuer of this asset.
     * - `admin`: The new Admin of this asset.
     * - `freezer`: The new Freezer of this asset.
     * - `free_holding`: Whether a deposit is taken for holding an instance of this asset
     *   class.
     * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
     * instructions.
     * 
     * Emits `AssetStatusChanged` with the identity of the asset.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.force_asset_status') === '65369b0dfdf41fac696e176a2ccad990e7b7cc9a3e222363c381ac4f0633a2bc'
    }

    /**
     * Alter the attributes of a given asset.
     * 
     * Origin must be `ForceOrigin`.
     * 
     * - `class`: The identifier of the asset.
     * - `owner`: The new Owner of this asset.
     * - `issuer`: The new Issuer of this asset.
     * - `admin`: The new Admin of this asset.
     * - `freezer`: The new Freezer of this asset.
     * - `free_holding`: Whether a deposit is taken for holding an instance of this asset
     *   class.
     * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
     * instructions.
     * 
     * Emits `AssetStatusChanged` with the identity of the asset.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, owner: v10.MultiAddress, issuer: v10.MultiAddress, admin: v10.MultiAddress, freezer: v10.MultiAddress, freeHolding: boolean, isFrozen: boolean} {
        assert(this.isV10)
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
     * Issue a new class of non-fungible assets from a privileged origin.
     * 
     * This new asset class has no assets initially.
     * 
     * The origin must conform to `ForceOrigin`.
     * 
     * Unlike `create`, no funds are reserved.
     * 
     * - `class`: The identifier of the new asset. This must not be currently in use.
     * - `owner`: The owner of this class of assets. The owner has full superuser permissions
     * over this asset, but may later change and configure the permissions using
     * `transfer_ownership` and `set_team`.
     * 
     * Emits `ForceCreated` event when successful.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.force_create') === 'bde9fe324168b5622e7301795d32e252c625b51ff7ee05dccf2322afb6c8ab72'
    }

    /**
     * Issue a new class of non-fungible assets from a privileged origin.
     * 
     * This new asset class has no assets initially.
     * 
     * The origin must conform to `ForceOrigin`.
     * 
     * Unlike `create`, no funds are reserved.
     * 
     * - `class`: The identifier of the new asset. This must not be currently in use.
     * - `owner`: The owner of this class of assets. The owner has full superuser permissions
     * over this asset, but may later change and configure the permissions using
     * `transfer_ownership` and `set_team`.
     * 
     * Emits `ForceCreated` event when successful.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, owner: v10.MultiAddress, freeHolding: boolean} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.force_create') === '4dbe2f48e9f422c11306293afabfcd72534d58a5b4c40ef08ad82875323c5581'
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
    get asV12(): {collection: number, owner: v12.MultiAddress, freeHolding: boolean} {
        assert(this.isV12)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.force_item_status') === '44d2eee0021fb462c2f19a7234e27ec38694854727172d96e9f136dba2a46438'
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
    get asV12(): {collection: number, owner: v12.MultiAddress, issuer: v12.MultiAddress, admin: v12.MultiAddress, freezer: v12.MultiAddress, freeHolding: boolean, isFrozen: boolean} {
        assert(this.isV12)
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
     * Disallow further unprivileged transfer of an asset instance.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `class`.
     * 
     * - `class`: The class of the asset to be frozen.
     * - `instance`: The instance of the asset to be frozen.
     * 
     * Emits `Frozen`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.freeze') === '4aec04ec96e3cd667bd16926634d063c18da9922e4d645f33692574e196c20dc'
    }

    /**
     * Disallow further unprivileged transfer of an asset instance.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `class`.
     * 
     * - `class`: The class of the asset to be frozen.
     * - `instance`: The instance of the asset to be frozen.
     * 
     * Emits `Frozen`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, instance: number} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.freeze') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
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
    get asV12(): {collection: number, item: number} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesFreezeClassCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.freeze_class')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disallow further unprivileged transfers for a whole asset class.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `class`.
     * 
     * - `class`: The asset class to be frozen.
     * 
     * Emits `ClassFrozen`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.freeze_class') === '4f045c4df2d4b9045175427f6f6aa548cd3ad56207f700b68254d3b77d944310'
    }

    /**
     * Disallow further unprivileged transfers for a whole asset class.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `class`.
     * 
     * - `class`: The asset class to be frozen.
     * 
     * Emits `ClassFrozen`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number} {
        assert(this.isV10)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.freeze_collection') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
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
    get asV12(): {collection: number} {
        assert(this.isV12)
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
     * Mint an asset instance of a particular class.
     * 
     * The origin must be Signed and the sender must be the Issuer of the asset `class`.
     * 
     * - `class`: The class of the asset to be minted.
     * - `instance`: The instance value of the asset to be minted.
     * - `beneficiary`: The initial owner of the minted asset.
     * 
     * Emits `Issued` event when successful.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.mint') === 'b96f6405657e4e5fbf73bead3369bd9d6906e631c805a2953bdd6d34a6dd1566'
    }

    /**
     * Mint an asset instance of a particular class.
     * 
     * The origin must be Signed and the sender must be the Issuer of the asset `class`.
     * 
     * - `class`: The class of the asset to be minted.
     * - `instance`: The instance value of the asset to be minted.
     * - `beneficiary`: The initial owner of the minted asset.
     * 
     * Emits `Issued` event when successful.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, instance: number, owner: v10.MultiAddress} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.mint') === '3b90c947d430c35d36c44446d6e63fe4965dab30d6df0082f8faf9e9f12b418d'
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
    get asV12(): {collection: number, item: number, owner: v12.MultiAddress} {
        assert(this.isV12)
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
     * Reevaluate the deposits on some assets.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `class`.
     * 
     * - `class`: The class of the asset to be frozen.
     * - `instances`: The instances of the asset class whose deposits will be reevaluated.
     * 
     * NOTE: This exists as a best-effort function. Any asset instances which are unknown or
     * in the case that the owner account does not have reservable funds to pay for a
     * deposit increase are ignored. Generally the owner isn't going to call this on instances
     * whose existing deposit is less than the refreshed deposit as it would only cost them,
     * so it's of little consequence.
     * 
     * It will still return an error in the case that the class is unknown of the signer is
     * not permitted to call it.
     * 
     * Weight: `O(instances.len())`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.redeposit') === '5b16d486c17e476c07662e495a500985bdd9daa75e7784b265924e8bf641fc1b'
    }

    /**
     * Reevaluate the deposits on some assets.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `class`.
     * 
     * - `class`: The class of the asset to be frozen.
     * - `instances`: The instances of the asset class whose deposits will be reevaluated.
     * 
     * NOTE: This exists as a best-effort function. Any asset instances which are unknown or
     * in the case that the owner account does not have reservable funds to pay for a
     * deposit increase are ignored. Generally the owner isn't going to call this on instances
     * whose existing deposit is less than the refreshed deposit as it would only cost them,
     * so it's of little consequence.
     * 
     * It will still return an error in the case that the class is unknown of the signer is
     * not permitted to call it.
     * 
     * Weight: `O(instances.len())`
     */
    get asV10(): {class: number, instances: number[]} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.redeposit') === 'b264456f69ddfea6e6a452c628e0cf023dfd7112ff74570232b8a9cec78aedec'
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
    get asV12(): {collection: number, items: number[]} {
        assert(this.isV12)
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
     * Origin must be `Signed` and if `maybe_class` is `Some`, then the signer must have a
     * provider reference.
     * 
     * - `maybe_class`: The identifier of the asset class whose ownership the signer is willing
     *   to accept, or if `None`, an indication that the signer is willing to accept no
     *   ownership transferal.
     * 
     * Emits `OwnershipAcceptanceChanged`.
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.set_accept_ownership') === '0da8fca288d046764d4b0b725fe14fb47b7bad910017da00c532ec21b684da3e'
    }

    /**
     * Set (or reset) the acceptance of ownership for a particular account.
     * 
     * Origin must be `Signed` and if `maybe_class` is `Some`, then the signer must have a
     * provider reference.
     * 
     * - `maybe_class`: The identifier of the asset class whose ownership the signer is willing
     *   to accept, or if `None`, an indication that the signer is willing to accept no
     *   ownership transferal.
     * 
     * Emits `OwnershipAcceptanceChanged`.
     */
    get asV10(): {maybeClass: (number | undefined)} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.set_accept_ownership') === '9b01ca5e28333457a555e928e6ec0826c82405d96736d1b81047fb598a8a14a6'
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
    get asV12(): {maybeCollection: (number | undefined)} {
        assert(this.isV12)
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
     * Set an attribute for an asset class or instance.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * asset `class`.
     * 
     * If the origin is Signed, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
     * account any already reserved funds.
     * 
     * - `class`: The identifier of the asset class whose instance's metadata to set.
     * - `maybe_instance`: The identifier of the asset instance whose metadata to set.
     * - `key`: The key of the attribute.
     * - `value`: The value to which to set the attribute.
     * 
     * Emits `AttributeSet`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.set_attribute') === '6ae49a979267c094bc35bda051f5467e62472724b598a2f5ee5720a5111b8623'
    }

    /**
     * Set an attribute for an asset class or instance.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * asset `class`.
     * 
     * If the origin is Signed, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
     * account any already reserved funds.
     * 
     * - `class`: The identifier of the asset class whose instance's metadata to set.
     * - `maybe_instance`: The identifier of the asset instance whose metadata to set.
     * - `key`: The key of the attribute.
     * - `value`: The value to which to set the attribute.
     * 
     * Emits `AttributeSet`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, maybeInstance: (number | undefined), key: Uint8Array, value: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.set_attribute') === 'b7e65dbf62f10e9415ffa560bff4954ffeb28994c9cf350ecd59fe98850d8783'
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
    get asV12(): {collection: number, maybeItem: (number | undefined), key: Uint8Array, value: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesSetClassMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.set_class_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the metadata for an asset class.
     * 
     * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     * the asset `class`.
     * 
     * If the origin is `Signed`, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * data.len` taking into
     * account any already reserved funds.
     * 
     * - `class`: The identifier of the asset whose metadata to update.
     * - `data`: The general information of this asset. Limited in length by `StringLimit`.
     * - `is_frozen`: Whether the metadata should be frozen against further changes.
     * 
     * Emits `ClassMetadataSet`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.set_class_metadata') === '151c432def6b2dc27880b815773b729a1ceb58295a326de4c16e57901c2a9476'
    }

    /**
     * Set the metadata for an asset class.
     * 
     * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     * the asset `class`.
     * 
     * If the origin is `Signed`, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * data.len` taking into
     * account any already reserved funds.
     * 
     * - `class`: The identifier of the asset whose metadata to update.
     * - `data`: The general information of this asset. Limited in length by `StringLimit`.
     * - `is_frozen`: Whether the metadata should be frozen against further changes.
     * 
     * Emits `ClassMetadataSet`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV10)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.set_collection_max_supply') === '165991456bc3c6a81994ce513fdf36c2303f5220829f5e8caafbf821233135b4'
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
    get asV12(): {collection: number, maxSupply: number} {
        assert(this.isV12)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.set_collection_metadata') === '63ef75086da73b45ed287cac6640abbebd40222433fb8fae9e4fa1bfa173afc2'
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
    get asV12(): {collection: number, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV12)
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
     * Set the metadata for an asset instance.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * asset `class`.
     * 
     * If the origin is Signed, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * data.len` taking into
     * account any already reserved funds.
     * 
     * - `class`: The identifier of the asset class whose instance's metadata to set.
     * - `instance`: The identifier of the asset instance whose metadata to set.
     * - `data`: The general information of this asset. Limited in length by `StringLimit`.
     * - `is_frozen`: Whether the metadata should be frozen against further changes.
     * 
     * Emits `MetadataSet`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.set_metadata') === '8d2f67e787668073bdb66a4b7bbba97ea22da0860f46bce7884b446fd055419a'
    }

    /**
     * Set the metadata for an asset instance.
     * 
     * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     * asset `class`.
     * 
     * If the origin is Signed, then funds of signer are reserved according to the formula:
     * `MetadataDepositBase + DepositPerByte * data.len` taking into
     * account any already reserved funds.
     * 
     * - `class`: The identifier of the asset class whose instance's metadata to set.
     * - `instance`: The identifier of the asset instance whose metadata to set.
     * - `data`: The general information of this asset. Limited in length by `StringLimit`.
     * - `is_frozen`: Whether the metadata should be frozen against further changes.
     * 
     * Emits `MetadataSet`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, instance: number, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.set_metadata') === 'dc2370253c17fe69445af313af0113a31f244cc51324e5a3b4b0b98804f91a6f'
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
    get asV12(): {collection: number, item: number, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV12)
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
     * Change the Issuer, Admin and Freezer of an asset class.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `class`.
     * 
     * - `class`: The asset class whose team should be changed.
     * - `issuer`: The new Issuer of this asset class.
     * - `admin`: The new Admin of this asset class.
     * - `freezer`: The new Freezer of this asset class.
     * 
     * Emits `TeamChanged`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.set_team') === '7790ee73da2f65c72e96dca74fe0ce9478c84fd598d78a8ef3fb45c7713c1247'
    }

    /**
     * Change the Issuer, Admin and Freezer of an asset class.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `class`.
     * 
     * - `class`: The asset class whose team should be changed.
     * - `issuer`: The new Issuer of this asset class.
     * - `admin`: The new Admin of this asset class.
     * - `freezer`: The new Freezer of this asset class.
     * 
     * Emits `TeamChanged`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, issuer: v10.MultiAddress, admin: v10.MultiAddress, freezer: v10.MultiAddress} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.set_team') === '4189de9684988d93dafc3f65fe19ef1b463b184719321e76bdb0fedda9095901'
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
    get asV12(): {collection: number, issuer: v12.MultiAddress, admin: v12.MultiAddress, freezer: v12.MultiAddress} {
        assert(this.isV12)
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
     * Re-allow unprivileged transfer of an asset instance.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `class`.
     * 
     * - `class`: The class of the asset to be thawed.
     * - `instance`: The instance of the asset to be thawed.
     * 
     * Emits `Thawed`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.thaw') === '4aec04ec96e3cd667bd16926634d063c18da9922e4d645f33692574e196c20dc'
    }

    /**
     * Re-allow unprivileged transfer of an asset instance.
     * 
     * Origin must be Signed and the sender should be the Freezer of the asset `class`.
     * 
     * - `class`: The class of the asset to be thawed.
     * - `instance`: The instance of the asset to be thawed.
     * 
     * Emits `Thawed`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, instance: number} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.thaw') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
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
    get asV12(): {collection: number, item: number} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class UniquesThawClassCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Uniques.thaw_class')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Re-allow unprivileged transfers for a whole asset class.
     * 
     * Origin must be Signed and the sender should be the Admin of the asset `class`.
     * 
     * - `class`: The class to be thawed.
     * 
     * Emits `ClassThawed`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.thaw_class') === '4f045c4df2d4b9045175427f6f6aa548cd3ad56207f700b68254d3b77d944310'
    }

    /**
     * Re-allow unprivileged transfers for a whole asset class.
     * 
     * Origin must be Signed and the sender should be the Admin of the asset `class`.
     * 
     * - `class`: The class to be thawed.
     * 
     * Emits `ClassThawed`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number} {
        assert(this.isV10)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.thaw_collection') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
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
    get asV12(): {collection: number} {
        assert(this.isV12)
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
     * Move an asset from the sender account to another.
     * 
     * Origin must be Signed and the signing account must be either:
     * - the Admin of the asset `class`;
     * - the Owner of the asset `instance`;
     * - the approved delegate for the asset `instance` (in this case, the approval is reset).
     * 
     * Arguments:
     * - `class`: The class of the asset to be transferred.
     * - `instance`: The instance of the asset to be transferred.
     * - `dest`: The account to receive ownership of the asset.
     * 
     * Emits `Transferred`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.transfer') === 'a66c5691fc66dd3ea9d84d0fb89c0e274a537f3a24d17c5fbdb402cc658dbbbd'
    }

    /**
     * Move an asset from the sender account to another.
     * 
     * Origin must be Signed and the signing account must be either:
     * - the Admin of the asset `class`;
     * - the Owner of the asset `instance`;
     * - the approved delegate for the asset `instance` (in this case, the approval is reset).
     * 
     * Arguments:
     * - `class`: The class of the asset to be transferred.
     * - `instance`: The instance of the asset to be transferred.
     * - `dest`: The account to receive ownership of the asset.
     * 
     * Emits `Transferred`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, instance: number, dest: v10.MultiAddress} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Move an item from the sender account to another.
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.transfer') === '1cd093927c16b1ba980b5eb06d082070727771a74d5ea88c182842b0ca45b590'
    }

    /**
     * Move an item from the sender account to another.
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
    get asV12(): {collection: number, item: number, dest: v12.MultiAddress} {
        assert(this.isV12)
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
     * Change the Owner of an asset class.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `class`.
     * 
     * - `class`: The asset class whose owner should be changed.
     * - `owner`: The new Owner of this asset class. They must have called
     *   `set_accept_ownership` with `class` in order for this operation to succeed.
     * 
     * Emits `OwnerChanged`.
     * 
     * Weight: `O(1)`
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Uniques.transfer_ownership') === 'efe5c50fffbe294b06ddbeb5b524bae8076327029f50307f98ac5dbbd8598a4f'
    }

    /**
     * Change the Owner of an asset class.
     * 
     * Origin must be Signed and the sender should be the Owner of the asset `class`.
     * 
     * - `class`: The asset class whose owner should be changed.
     * - `owner`: The new Owner of this asset class. They must have called
     *   `set_accept_ownership` with `class` in order for this operation to succeed.
     * 
     * Emits `OwnerChanged`.
     * 
     * Weight: `O(1)`
     */
    get asV10(): {class: number, owner: v10.MultiAddress} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
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
    get isV12(): boolean {
        return this._chain.getCallHash('Uniques.transfer_ownership') === 'ce5a9af5f98b2be2178c77cf6d9fb5ee95d6d35a8dcec13d0573127fb6093467'
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
    get asV12(): {collection: number, owner: v12.MultiAddress} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class UsaReserveApplyAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'UsaReserve.apply_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV1(): boolean {
        return this._chain.getCallHash('UsaReserve.apply_as') === 'a9f8193d926f29d30c08628627d09ed5cfe97477b731305d75d66cb40bd90928'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV1(): {call: v1.Call} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV6(): boolean {
        return this._chain.getCallHash('UsaReserve.apply_as') === 'f6e87384622ff2e90452fe1c1797fa93bb42d18d55bfe95a12300d42aa80f59e'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV6(): {call: v6.Call} {
        assert(this.isV6)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV10(): boolean {
        return this._chain.getCallHash('UsaReserve.apply_as') === '8b575d0ea3a5b73d94dc363acb6c16e597774c84f529f46c0c00f7a99134742d'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV10(): {call: v10.Call} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV11(): boolean {
        return this._chain.getCallHash('UsaReserve.apply_as') === 'c8eec9af2675f5ca66565f970cea87e963ad6358500975016e9b9975bcb4ce67'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV11(): {call: v11.Call} {
        assert(this.isV11)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get isV12(): boolean {
        return this._chain.getCallHash('UsaReserve.apply_as') === '5db6e491de8791381401d22e268e8f349dff9de2e028b82d83a8ad0e14aedf4c'
    }

    /**
     * Dispatch a call as coming from the reserve account
     */
    get asV12(): {call: v12.Call} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class UsaReserveSpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'UsaReserve.spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Spend `amount` funds from the reserve account to `to`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('UsaReserve.spend') === 'ff235a8cc8e39172d7506c342732c7a5dbd72259d5c5b9cdfa576e00efcf67f8'
    }

    /**
     * Spend `amount` funds from the reserve account to `to`.
     */
    get asV1(): {to: Uint8Array, amount: bigint} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class UsaReserveTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'UsaReserve.tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deposit `amount` tokens in the treasure account
     */
    get isV1(): boolean {
        return this._chain.getCallHash('UsaReserve.tip') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Deposit `amount` tokens in the treasure account
     */
    get asV1(): {amount: bigint} {
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
        return this._chain.getCallHash('Utility.as_derivative') === 'c9cd7d0165b1cda1cd58ad5be04255ff09fe563d891d5556ec07db0facd36baf'
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
    get isV6(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '16d2e2a2b01f1fc29c73883bec0c9e51c1d6c7bf0f1e8f23a552c6d7f0c8e4d9'
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
    get asV6(): {index: number, call: v6.Call} {
        assert(this.isV6)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'bd103e18cedd374ef423c00ff0f0e5ebfe34d2037351028f0c23bf2e03762e6a'
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
    get asV10(): {index: number, call: v10.Call} {
        assert(this.isV10)
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
    get isV11(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'f57d14e8db3ab71716c18eec55ad5b6cf312c9a59d3ece6a89c04c0f7817f040'
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
    get asV11(): {index: number, call: v11.Call} {
        assert(this.isV11)
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
        return this._chain.getCallHash('Utility.as_derivative') === '9f03f5526560b54421ff99ac4dec66f0df3dd7e75bfa03c2b0716d6185695c36'
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
        return this._chain.getCallHash('Utility.batch') === '763f6bd3528e5487f9a27aed75fc999a0a31205c39640db9943addc6e4e0759a'
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
    get isV6(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'a4567d41b553799d577b09898bfadb961d7d4fea2d703af65ac78254e9609e7c'
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
    get asV6(): {calls: v6.Call[]} {
        assert(this.isV6)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Utility.batch') === '47a03d188360f34974b4c182d140f8309ef26c76efec556ec341975999199997'
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
    get asV10(): {calls: v10.Call[]} {
        assert(this.isV10)
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
    get isV11(): boolean {
        return this._chain.getCallHash('Utility.batch') === '9a3da1485bfe6db5901970b5208c10e0da3fedad5bd91449748ea8a45cd59fd0'
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
    get asV11(): {calls: v11.Call[]} {
        assert(this.isV11)
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
        return this._chain.getCallHash('Utility.batch') === '639469b8358f3c3b2ced30b78ca5dd3c8be1eefff88cb2dfacca618738ae9d40'
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
        return this._chain.getCallHash('Utility.batch_all') === '763f6bd3528e5487f9a27aed75fc999a0a31205c39640db9943addc6e4e0759a'
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
    get isV6(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'a4567d41b553799d577b09898bfadb961d7d4fea2d703af65ac78254e9609e7c'
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
    get asV6(): {calls: v6.Call[]} {
        assert(this.isV6)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '47a03d188360f34974b4c182d140f8309ef26c76efec556ec341975999199997'
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
    get asV10(): {calls: v10.Call[]} {
        assert(this.isV10)
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
    get isV11(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '9a3da1485bfe6db5901970b5208c10e0da3fedad5bd91449748ea8a45cd59fd0'
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
    get asV11(): {calls: v11.Call[]} {
        assert(this.isV11)
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
        return this._chain.getCallHash('Utility.batch_all') === '639469b8358f3c3b2ced30b78ca5dd3c8be1eefff88cb2dfacca618738ae9d40'
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
    get isV6(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '6881ce87c87d024a0b375643c21215696c0775d8db827201994dad3e467d9831'
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
    get asV6(): {asOrigin: v6.OriginCaller, call: v6.Call} {
        assert(this.isV6)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '2d27725dc03cec209ebec8f967f810c0e765f81192703fa6a43cf89711563144'
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
    get asV10(): {asOrigin: v10.OriginCaller, call: v10.Call} {
        assert(this.isV10)
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
    get isV11(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'd5f431a763762056ddbe273a855e5b9d6a54e421b8bb1571da72d23d2d5a66f1'
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
    get asV11(): {asOrigin: v11.OriginCaller, call: v11.Call} {
        assert(this.isV11)
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
        return this._chain.getCallHash('Utility.dispatch_as') === '74690aff9872d5a1c3d34d09c5dee5ec4c383248a2a9f26163b6e5a7a82da1a7'
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
    get isV12(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '639469b8358f3c3b2ced30b78ca5dd3c8be1eefff88cb2dfacca618738ae9d40'
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
    get asV12(): {calls: v12.Call[]} {
        assert(this.isV12)
        return this._chain.decodeCall(this.call)
    }
}

export class ValidatorsSetAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ValidatorsSet.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('ValidatorsSet.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV1(): {who: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ValidatorsSetChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ValidatorsSet.change_key')
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
    get isV1(): boolean {
        return this._chain.getCallHash('ValidatorsSet.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV1(): {new: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ValidatorsSetClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ValidatorsSet.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('ValidatorsSet.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ValidatorsSetRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ValidatorsSet.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('ValidatorsSet.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV1(): {who: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ValidatorsSetResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ValidatorsSet.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('ValidatorsSet.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get asV1(): {members: Uint8Array[]} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ValidatorsSetSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ValidatorsSet.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('ValidatorsSet.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV1(): {who: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class ValidatorsSetSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ValidatorsSet.swap_member')
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
    get isV1(): boolean {
        return this._chain.getCallHash('ValidatorsSet.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV1(): {remove: Uint8Array, add: Uint8Array} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingAddVestingScheduleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.add_vesting_schedule')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Wire funds to be vested by the receiver
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Vesting.add_vesting_schedule') === 'a38026110a8febabd6cca0c506679bfe612a9c7590dc9b4fa4fe0b8380e373f6'
    }

    /**
     * Wire funds to be vested by the receiver
     */
    get asV1(): {dest: v1.MultiAddress, schedule: v1.VestingSchedule} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingCancelAllVestingSchedulesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.cancel_all_vesting_schedules')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel all vested schedules for the given user. If there are coins to be
     * claimed they will be auto claimed for the given user. If `limit_to_free_balance`
     * is set to true we will not error if the free balance of `who` has less coins
     * than what was granted and is being revoked (useful if the state was corrupted).
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Vesting.cancel_all_vesting_schedules') === '618335bd3114d4f7a7d1788841ab5cdac12ca6a12822bbb570d27379f94f40d6'
    }

    /**
     * Cancel all vested schedules for the given user. If there are coins to be
     * claimed they will be auto claimed for the given user. If `limit_to_free_balance`
     * is set to true we will not error if the free balance of `who` has less coins
     * than what was granted and is being revoked (useful if the state was corrupted).
     */
    get asV1(): {who: v1.MultiAddress, fundsCollector: v1.MultiAddress, limitToFreeBalance: boolean} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Cancel all vested schedules for the given user. If there are coins to be
     * claimed they will be auto claimed for the given user. If `limit_to_free_balance`
     * is set to true we will not error if the free balance of `who` has less coins
     * than what was granted and is being revoked (useful if the state was corrupted).
     */
    get isV11(): boolean {
        return this._chain.getCallHash('Vesting.cancel_all_vesting_schedules') === '7ea9026d0c06373962fa6a252d2f0b344a8f91a2f25d39289f76437a2129bf31'
    }

    /**
     * Cancel all vested schedules for the given user. If there are coins to be
     * claimed they will be auto claimed for the given user. If `limit_to_free_balance`
     * is set to true we will not error if the free balance of `who` has less coins
     * than what was granted and is being revoked (useful if the state was corrupted).
     */
    get asV11(): {who: v11.MultiAddress, fundsCollector: v11.MultiAddress} {
        assert(this.isV11)
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

    /**
     * Claim funds that have been vested so far
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Vesting.claim') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Claim funds that have been vested so far
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingOverwriteVestingSchedulesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.overwrite_vesting_schedules')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwite all the vesting schedules for the given user. This will adjust
     * the amount of locked coins for the given user.
     */
    get isV1(): boolean {
        return this._chain.getCallHash('Vesting.overwrite_vesting_schedules') === '70a965832aab519c539dbb43b99a0d11c947c33b74f319fac9139a03ded030d3'
    }

    /**
     * Overwite all the vesting schedules for the given user. This will adjust
     * the amount of locked coins for the given user.
     */
    get asV1(): {who: v1.MultiAddress, newSchedules: v1.VestingSchedule[]} {
        assert(this.isV1)
        return this._chain.decodeCall(this.call)
    }
}
