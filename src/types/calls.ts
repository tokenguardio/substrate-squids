import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v5 from './v5'
import * as v8 from './v8'
import * as v10 from './v10'

export class AuthorityAuthorizeCallCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authority.authorize_call')
        this._chain = ctx._chain
        this.call = call
    }

    get isV8(): boolean {
        return this._chain.getCallHash('Authority.authorize_call') === '185b17b2ae7001047bd6c5effc02340d24e6f4faa6cbf8438a97277a7dfa3cfe'
    }

    get asV8(): {call: v8.CallOf, caller: (Uint8Array | undefined)} {
        assert(this.isV8)
        return this._chain.decodeCall(this.call)
    }

    get isV10(): boolean {
        return this._chain.getCallHash('Authority.authorize_call') === 'c06aff1eec2bb8d250feb0380556287dc713e26c595f6fd29faf7b9d69b08efd'
    }

    get asV10(): {call: v10.CallOf, caller: (Uint8Array | undefined)} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorityCancelScheduledDispatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authority.cancel_scheduled_dispatch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Cancel a scheduled dispatchable.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Authority.cancel_scheduled_dispatch') === '3df0f1ec93bc2c3ab28f1d219ed04af70dd154aeca26e1e70b98db7223180011'
    }

    /**
     *  Cancel a scheduled dispatchable.
     */
    get asV5(): {initialOrigin: v5.PalletsOrigin, taskId: number} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorityDelayScheduledDispatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authority.delay_scheduled_dispatch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Delay a scheduled dispatchable.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Authority.delay_scheduled_dispatch') === '8c0a3ab08183be1819fd53554db42006002e2db9a333b42aede7779aeded0093'
    }

    /**
     *  Delay a scheduled dispatchable.
     */
    get asV5(): {initialOrigin: v5.PalletsOrigin, taskId: number, additionalDelay: number} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorityDispatchAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authority.dispatch_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Dispatch a dispatchable on behalf of other origin
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Authority.dispatch_as') === '4a0aff3c081765124ad318844d6d08e6a0efc1fb83f2d9a38f3fb5bc80eb25fb'
    }

    /**
     *  Dispatch a dispatchable on behalf of other origin
     */
    get asV5(): {asOrigin: v5.AsOriginId, call: v5.CallOf} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Dispatch a dispatchable on behalf of other origin
     */
    get isV8(): boolean {
        return this._chain.getCallHash('Authority.dispatch_as') === '47d51609c417b3dddaa6beefc9395436bd23f2e3b2b6551a2bed80751f81428a'
    }

    /**
     *  Dispatch a dispatchable on behalf of other origin
     */
    get asV8(): {asOrigin: v8.AsOriginId, call: v8.CallOf} {
        assert(this.isV8)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Dispatch a dispatchable on behalf of other origin
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Authority.dispatch_as') === 'd97ec14bf977e0d88b1238d827b4711369e274d93cd8c19cfe07d59eaec22ae5'
    }

    /**
     *  Dispatch a dispatchable on behalf of other origin
     */
    get asV10(): {asOrigin: v10.AsOriginId, call: v10.CallOf} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorityFastTrackScheduledDispatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authority.fast_track_scheduled_dispatch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Fast track a scheduled dispatchable.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Authority.fast_track_scheduled_dispatch') === '0eca1092c678bead1f2420be8886c2145d0923f02dc5f694e677cd57ecc66fa4'
    }

    /**
     *  Fast track a scheduled dispatchable.
     */
    get asV5(): {initialOrigin: v5.PalletsOrigin, taskId: number, when: v5.DispatchTime} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorityRemoveAuthorizedCallCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authority.remove_authorized_call')
        this._chain = ctx._chain
        this.call = call
    }

    get isV8(): boolean {
        return this._chain.getCallHash('Authority.remove_authorized_call') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    get asV8(): {hash: Uint8Array} {
        assert(this.isV8)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorityScheduleDispatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authority.schedule_dispatch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Schedule a dispatchable to be dispatched at later block.
     *  This is the only way to dispatch a call with `DelayedOrigin`.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Authority.schedule_dispatch') === '837cc7495552fd419e914481078656c250bd908aefd08c4b7572c28647c4b0ce'
    }

    /**
     *  Schedule a dispatchable to be dispatched at later block.
     *  This is the only way to dispatch a call with `DelayedOrigin`.
     */
    get asV5(): {when: v5.DispatchTime, priority: number, withDelayedOrigin: boolean, call: v5.CallOf} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Schedule a dispatchable to be dispatched at later block.
     *  This is the only way to dispatch a call with `DelayedOrigin`.
     */
    get isV8(): boolean {
        return this._chain.getCallHash('Authority.schedule_dispatch') === '1ce0f8b0b5d6032c279509f45bd2c8cf5c2d54a5dd78ba111f67c630ee6303e9'
    }

    /**
     *  Schedule a dispatchable to be dispatched at later block.
     *  This is the only way to dispatch a call with `DelayedOrigin`.
     */
    get asV8(): {when: v8.DispatchTime, priority: number, withDelayedOrigin: boolean, call: v8.CallOf} {
        assert(this.isV8)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Schedule a dispatchable to be dispatched at later block.
     *  This is the only way to dispatch a call with `DelayedOrigin`.
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Authority.schedule_dispatch') === 'ea7d8c29f959124f2dde66e9a32bbc6064927b99fea6f0107e009bdcc382e832'
    }

    /**
     *  Schedule a dispatchable to be dispatched at later block.
     *  This is the only way to dispatch a call with `DelayedOrigin`.
     */
    get asV10(): {when: v10.DispatchTime, priority: number, withDelayedOrigin: boolean, call: v10.CallOf} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorityTriggerCallCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authority.trigger_call')
        this._chain = ctx._chain
        this.call = call
    }

    get isV8(): boolean {
        return this._chain.getCallHash('Authority.trigger_call') === 'fb4fcc58a3fe75ec19ef1d66270883a4e67f6a449abc80e3ea98b0fe044eeb73'
    }

    get asV8(): {hash: Uint8Array, callWeightBound: bigint} {
        assert(this.isV8)
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
    get isV5(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'efd6e78708f873b5d0804d67dee4f6351287add79134d8ee5b59dcfa2a5e21af'
    }

    /**
     *  Provide a set of uncles.
     */
    get asV5(): {newUncles: v5.Header[]} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class BabePlanConfigChangeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.plan_config_change')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Plan an epoch config change. The epoch config change is recorded and will be enacted on
     *  the next call to `enact_epoch_change`. The config will be activated one epoch after.
     *  Multiple calls to this method will replace any existing planned config change that had
     *  not been enacted yet.
     */
    get isV8(): boolean {
        return this._chain.getCallHash('Babe.plan_config_change') === '946c3b7711f3b1f220d667d61c273d578be27f354f9dba32bbaa932d9f688173'
    }

    /**
     *  Plan an epoch config change. The epoch config change is recorded and will be enacted on
     *  the next call to `enact_epoch_change`. The config will be activated one epoch after.
     *  Multiple calls to this method will replace any existing planned config change that had
     *  not been enacted yet.
     */
    get asV8(): {config: v8.NextConfigDescriptor} {
        assert(this.isV8)
        return this._chain.decodeCall(this.call)
    }
}

export class BabeReportEquivocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.report_equivocation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report authority equivocation/misbehavior. This method will verify
     *  the equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence will
     *  be reported.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Babe.report_equivocation') === 'fcf96782e661e8bdc1e552a10118353083fddfff1d09bd4252866b71177bb5da'
    }

    /**
     *  Report authority equivocation/misbehavior. This method will verify
     *  the equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence will
     *  be reported.
     */
    get asV5(): {equivocationProof: v5.BabeEquivocationProof, keyOwnerProof: v5.KeyOwnerProof} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class BabeReportEquivocationUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.report_equivocation_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report authority equivocation/misbehavior. This method will verify
     *  the equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence will
     *  be reported.
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Babe.report_equivocation_unsigned') === 'fcf96782e661e8bdc1e552a10118353083fddfff1d09bd4252866b71177bb5da'
    }

    /**
     *  Report authority equivocation/misbehavior. This method will verify
     *  the equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence will
     *  be reported.
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    get asV5(): {equivocationProof: v5.BabeEquivocationProof, keyOwnerProof: v5.KeyOwnerProof} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {source: v5.LookupSource, dest: v5.LookupSource, value: bigint} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {who: v5.LookupSource, newFree: bigint, newReserved: bigint} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {dest: v5.LookupSource, value: bigint} {
        assert(this.isV5)
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
    get isV8(): boolean {
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
    get asV8(): {dest: v8.LookupSource, keepAlive: boolean} {
        assert(this.isV8)
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
    get isV5(): boolean {
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
    get asV5(): {dest: v5.LookupSource, value: bigint} {
        assert(this.isV5)
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
     *  Transfer some balance to another account under `currency_id`.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Currencies.transfer') === 'ebf0782f427386441c7dfbb3ce5ef46de972cded173aca8b4b1fdd38ba59cd5a'
    }

    /**
     *  Transfer some balance to another account under `currency_id`.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get asV5(): {dest: v5.LookupSource, currencyId: v5.CurrencyIdOf, amount: bigint} {
        assert(this.isV5)
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
     *  Transfer some native currency to another account.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Currencies.transfer_native_currency') === '99123a58f21a27e3615c09aa5e891295609109fa77378a29bc61ee98ab991b92'
    }

    /**
     *  Transfer some native currency to another account.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    get asV5(): {dest: v5.LookupSource, amount: bigint} {
        assert(this.isV5)
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
     *  update amount of account `who` under `currency_id`.
     * 
     *  The dispatch origin of this call must be _Root_.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Currencies.update_balance') === '08ebc5bb7f47587c70c1135aa5d2538edcde38bf92c9183a7c3b4f546266e01d'
    }

    /**
     *  update amount of account `who` under `currency_id`.
     * 
     *  The dispatch origin of this call must be _Root_.
     */
    get asV5(): {who: v5.LookupSource, currencyId: v5.CurrencyIdOf, amount: bigint} {
        assert(this.isV5)
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
     *  Issue an EVM call operation. This is similar to a message call
     *  transaction in Ethereum.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('EVM.call') === '6584664eef68f6fd09cf4efe9c61fd9e50d821881de71bdd8062d1342f52423d'
    }

    /**
     *  Issue an EVM call operation. This is similar to a message call
     *  transaction in Ethereum.
     */
    get asV5(): {target: Uint8Array, input: Uint8Array, value: bigint, gasLimit: bigint, storageLimit: number} {
        assert(this.isV5)
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
     *  Issue an EVM create operation. This is similar to a contract
     *  creation transaction in Ethereum.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('EVM.create') === '5b89297e6b37551240192596104c32e9335fc9d0755e6aff323525f563b4ebd9'
    }

    /**
     *  Issue an EVM create operation. This is similar to a contract
     *  creation transaction in Ethereum.
     */
    get asV5(): {init: Uint8Array, value: bigint, gasLimit: bigint, storageLimit: number} {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getCallHash('EVM.create2') === '3c549873475c64e2006cd1e3b49ff09225c02ae7588e29511e9e4df54dcfa8da'
    }

    /**
     *  Issue an EVM create2 operation.
     */
    get asV5(): {init: Uint8Array, salt: Uint8Array, value: bigint, gasLimit: bigint, storageLimit: number} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmCreateNetworkContractCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.create_network_contract')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Issue an EVM create operation. The next available system contract
     *  address will be used as created contract address.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('EVM.create_network_contract') === '5b89297e6b37551240192596104c32e9335fc9d0755e6aff323525f563b4ebd9'
    }

    /**
     *  Issue an EVM create operation. The next available system contract
     *  address will be used as created contract address.
     */
    get asV5(): {init: Uint8Array, value: bigint, gasLimit: bigint, storageLimit: number} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmDeployCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.deploy')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('EVM.deploy') === 'aa92c395b5b60088d8bc4d5a065d2ba907c616eb089d21d051e1c0c9c6ca3ee8'
    }

    get asV5(): {contract: Uint8Array} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmDeployFreeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.deploy_free')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('EVM.deploy_free') === 'aa92c395b5b60088d8bc4d5a065d2ba907c616eb089d21d051e1c0c9c6ca3ee8'
    }

    get asV5(): {contract: Uint8Array} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmDisableContractDevelopmentCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.disable_contract_development')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('EVM.disable_contract_development') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV5(): null {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmEnableContractDevelopmentCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.enable_contract_development')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('EVM.enable_contract_development') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV5(): null {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmScheduledCallCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.scheduled_call')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('EVM.scheduled_call') === '576d08b81b702e5ee1e7a580eedb1e1be1f1f791cdb2bd97aa18640de8f5fde8'
    }

    get asV5(): {from: Uint8Array, target: Uint8Array, input: Uint8Array, value: bigint, gasLimit: bigint, storageLimit: number} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmSelfdestructCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.selfdestruct')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('EVM.selfdestruct') === 'aa92c395b5b60088d8bc4d5a065d2ba907c616eb089d21d051e1c0c9c6ca3ee8'
    }

    get asV5(): {contract: Uint8Array} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmSetCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.set_code')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('EVM.set_code') === 'b785b91e072f4030ebaffd8bbf05a81538efe20649e5b0c1c5fbb9e964373abf'
    }

    get asV5(): {contract: Uint8Array, code: Uint8Array} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmTransferMaintainerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EVM.transfer_maintainer')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('EVM.transfer_maintainer') === '7bae9f7200b2fa3536d4c19d4c688df2a59be80ed615257c9d5ef5bf75d8a550'
    }

    get asV5(): {contract: Uint8Array, newMaintainer: Uint8Array} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmAccountsClaimAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EvmAccounts.claim_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Claim account mapping between Substrate accounts and EVM accounts.
     *  Ensure eth_address has not been mapped.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('EvmAccounts.claim_account') === '6b4b8c10495f26dbfdf518b55244487380af51675be587eb64599f5ccb3862a0'
    }

    /**
     *  Claim account mapping between Substrate accounts and EVM accounts.
     *  Ensure eth_address has not been mapped.
     */
    get asV5(): {ethAddress: Uint8Array, ethSignature: Uint8Array} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class EvmAccountsClaimDefaultAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EvmAccounts.claim_default_account')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('EvmAccounts.claim_default_account') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV5(): null {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {delay: number, bestFinalizedBlockNumber: number} {
        assert(this.isV5)
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
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     */
    get asV5(): {equivocationProof: v5.GrandpaEquivocationProof, keyOwnerProof: v5.KeyOwnerProof} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {equivocationProof: v5.GrandpaEquivocationProof, keyOwnerProof: v5.KeyOwnerProof} {
        assert(this.isV5)
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
     *  The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     *  - `account`: the account of the registrar.
     * 
     *  Emits `RegistrarAdded` if successful.
     * 
     *  # <weight>
     *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     *  - One storage mutation (codec `O(R)`).
     *  - One event.
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Identity.add_registrar') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     *  Add a registrar to the system.
     * 
     *  The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     *  - `account`: the account of the registrar.
     * 
     *  Emits `RegistrarAdded` if successful.
     * 
     *  # <weight>
     *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     *  - One storage mutation (codec `O(R)`).
     *  - One event.
     *  # </weight>
     */
    get asV5(): {account: Uint8Array} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {sub: v5.LookupSource, data: v5.Data} {
        assert(this.isV5)
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
     *  - One event
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - One event
     *  # </weight>
     */
    get asV5(): {regIndex: number} {
        assert(this.isV5)
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
     *  Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     *  Payment: All reserved balances on the account are returned.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  Emits `IdentityCleared` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`
     *    - where `R` registrar-count (governance-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *    - where `X` additional-field-count (deposit-bounded and code-bounded).
     *  - One balance-unreserve operation.
     *  - `2` storage reads and `S + 2` storage deletions.
     *  - One event.
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     *  Payment: All reserved balances on the account are returned.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  Emits `IdentityCleared` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`
     *    - where `R` registrar-count (governance-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *    - where `X` additional-field-count (deposit-bounded and code-bounded).
     *  - One balance-unreserve operation.
     *  - `2` storage reads and `S + 2` storage deletions.
     *  - One event.
     *  # </weight>
     */
    get asV5(): null {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {target: v5.LookupSource} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {regIndex: number, target: v5.LookupSource, judgement: v5.IdentityJudgement} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): null {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {sub: v5.LookupSource} {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === 'ef8fb13f5dc864a3db268a8f01b166d2deee87052a98309538fe8961be9020a9'
    }

    /**
     *  Alter the associated name of the given sub-account.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  sub identity of `sub`.
     */
    get asV5(): {sub: v5.LookupSource, data: v5.Data} {
        assert(this.isV5)
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
     *  Self::registrars().get(reg_index).unwrap().fee
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
    get isV5(): boolean {
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
     *  Self::registrars().get(reg_index).unwrap().fee
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
    get asV5(): {regIndex: number, maxFee: bigint} {
        assert(this.isV5)
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
     *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     *  # </weight>
     */
    get asV5(): {index: number, new: Uint8Array} {
        assert(this.isV5)
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
     *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     *  # </weight>
     */
    get asV5(): {index: number, fee: bigint} {
        assert(this.isV5)
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
     *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     *  # </weight>
     */
    get asV5(): {index: number, fields: bigint} {
        assert(this.isV5)
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
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `info`: The identity information.
     * 
     *  Emits `IdentitySet` if successful.
     * 
     *  # <weight>
     *  - `O(X + X' + R)`
     *    - where `X` additional-field-count (deposit-bounded and code-bounded)
     *    - where `R` judgements-count (registrar-count-bounded)
     *  - One balance reserve operation.
     *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     *  - One event.
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
    }

    /**
     *  Set an account's identity information and reserve the appropriate deposit.
     * 
     *  If the account already has identity information, the deposit is taken as part payment
     *  for the new deposit.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `info`: The identity information.
     * 
     *  Emits `IdentitySet` if successful.
     * 
     *  # <weight>
     *  - `O(X + X' + R)`
     *    - where `X` additional-field-count (deposit-bounded and code-bounded)
     *    - where `R` judgements-count (registrar-count-bounded)
     *  - One balance reserve operation.
     *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     *  - One event.
     *  # </weight>
     */
    get asV5(): {info: v5.IdentityInfo} {
        assert(this.isV5)
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
     *  - `subs`: The identity's (new) sub-accounts.
     * 
     *  # <weight>
     *  - `O(P + S)`
     *    - where `P` old-subs-count (hard- and deposit-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *  - At most one balance operations.
     *  - DB:
     *    - `P + S` storage mutations (codec complexity `O(1)`)
     *    - One storage read (codec complexity `O(P)`).
     *    - One storage write (codec complexity `O(S)`).
     *    - One storage-exists (`IdentityOf::contains_key`).
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - `subs`: The identity's (new) sub-accounts.
     * 
     *  # <weight>
     *  - `O(P + S)`
     *    - where `P` old-subs-count (hard- and deposit-bounded).
     *    - where `S` subs-count (hard- and deposit-bounded).
     *  - At most one balance operations.
     *  - DB:
     *    - `P + S` storage mutations (codec complexity `O(1)`)
     *    - One storage read (codec complexity `O(P)`).
     *    - One storage write (codec complexity `O(S)`).
     *    - One storage-exists (`IdentityOf::contains_key`).
     *  # </weight>
     */
    get asV5(): {subs: [Uint8Array, v5.Data][]} {
        assert(this.isV5)
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

    /**
     *  # <weight>
     *  - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
     *    and E is length of `heartbeat.network_state.external_address`
     *    - `O(K)`: decoding of length `K`
     *    - `O(E)`: decoding/encoding of length `E`
     *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *    `ReceivedHeartbeats`
     *  - DbWrites: `ReceivedHeartbeats`
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('ImOnline.heartbeat') === 'ceb066f24cc1efdb862584018e591b1046da22acdc1c7daf8270a6f6f31baffe'
    }

    /**
     *  # <weight>
     *  - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
     *    and E is length of `heartbeat.network_state.external_address`
     *    - `O(K)`: decoding of length `K`
     *    - `O(E)`: decoding/encoding of length `E`
     *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *    `ReceivedHeartbeats`
     *  - DbWrites: `ReceivedHeartbeats`
     *  # </weight>
     */
    get asV5(): {heartbeat: v5.Heartbeat, signature: Uint8Array} {
        assert(this.isV5)
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
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get asV5(): {index: number} {
        assert(this.isV5)
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
     *  - DB Weight:
     *     - Reads: Indices Accounts, System Account (original owner)
     *     - Writes: Indices Accounts, System Account (original owner)
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - DB Weight:
     *     - Reads: Indices Accounts, System Account (original owner)
     *     - Writes: Indices Accounts, System Account (original owner)
     *  # </weight>
     */
    get asV5(): {new: Uint8Array, index: number, freeze: boolean} {
        assert(this.isV5)
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
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get asV5(): {index: number} {
        assert(this.isV5)
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
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - DB Weight: 1 Read/Write (Accounts)
     *  # </weight>
     */
    get asV5(): {index: number} {
        assert(this.isV5)
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
     *  - DB Weight:
     *     - Reads: Indices Accounts, System Account (recipient)
     *     - Writes: Indices Accounts, System Account (recipient)
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - DB Weight:
     *     - Reads: Indices Accounts, System Account (recipient)
     *     - Writes: Indices Accounts, System Account (recipient)
     *  # </weight>
     */
    get asV5(): {new: Uint8Array, index: number} {
        assert(this.isV5)
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
    get isV10(): boolean {
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
    get asV10(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v10.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
        assert(this.isV10)
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
    get isV10(): boolean {
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
    get asV10(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v10.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
        assert(this.isV10)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'e9d2dd3b29c2d98cdb589e37bac04d91a5d5c3e63ce1803ca220c619a0b55054'
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
    get asV10(): {otherSignatories: Uint8Array[], call: v10.Type_50} {
        assert(this.isV10)
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
    get isV10(): boolean {
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
    get asV10(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v10.Timepoint, callHash: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }
}

export class PocAddFundsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Poc.add_funds')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('Poc.add_funds') === 'cb35b858b85c01f9ef5d7452beae3c3ca00714b5a37136bf969c6aa966f6b740'
    }

    get asV5(): {amount: bigint} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class PocCommitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Poc.commit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('Poc.commit') === '139eda0cf5b25bfde1df87337a8ac9aced6b9bf952b8215d601ad7b756cd1866'
    }

    get asV5(): {amount: bigint, duration: v5.LockDuration, candidate: Uint8Array} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class PocStartCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Poc.start_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('Poc.start_candidacy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV5(): null {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class PocStopCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Poc.stop_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('Poc.stop_candidacy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV5(): null {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class PocUnbondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Poc.unbond')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('Poc.unbond') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV5(): null {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class PocVoteCandidateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Poc.vote_candidate')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('Poc.vote_candidate') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    get asV5(): {candidate: Uint8Array} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class PocWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Poc.withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    get isV5(): boolean {
        return this._chain.getCallHash('Poc.withdraw') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV5(): null {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {when: number, index: number} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {id: Uint8Array} {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '19b7b8877654c21404c78276f201e938671c03b8acf1d0febf38edf66e53e440'
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
    get asV5(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v5.Type_51} {
        assert(this.isV5)
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
    get isV8(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'df83c65146ffd04d9731454549e7cf58a8577ef484a8a44788cbec1d971a3349'
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
    get asV8(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v8.Type_50} {
        assert(this.isV8)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '0bf8d95b547d4048e5eee6abe0f38f933d2248121b09769edb24588cd1bc5f53'
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
    get asV10(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v10.Type_50} {
        assert(this.isV10)
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
    get isV5(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '1ba6d1246e1269d2a73f61e22ad080e0c6af296d51779c1f37a052ef40c05e8e'
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get asV5(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v5.Type_51} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get isV8(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '45aafeddf88e4d99f4d7067ea8f7d1c0e20ed8d0b33c57767b96e13db7b1c4cd'
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get asV8(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v8.Type_50} {
        assert(this.isV8)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '22afb31a3cc6aa413be19072bc50d1f170fd12c81fae011b4032521c6497edae'
    }

    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    get asV10(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v10.Type_50} {
        assert(this.isV10)
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
    get isV5(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'a7746c02cb027fa0c88337afe2528838aefa72ca7c559535c3d12a944befe66c'
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
    get asV5(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v5.Type_51} {
        assert(this.isV5)
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
    get isV8(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'dd312367de81e3e40b9adf95ad0fafc4b7222c6546470facf82296ea1c469ed5'
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
    get asV8(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v8.Type_50} {
        assert(this.isV8)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '4a483fa7293fd5d5034afbeeac6c0f678189a95df6a4a224465d74037f668121'
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
    get asV10(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v10.Type_50} {
        assert(this.isV10)
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
    get isV5(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '5c042c563724719cd1509e371323756a15db201c5daa5ca69561af147d8c6a85'
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    get asV5(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v5.Type_51} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`](Self::schedule_named).
     *  # </weight>
     */
    get isV8(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '3ee6cd11f0d8f88efe4a249b0feec832d08ecd74b43fa55d589ecccd0372fe89'
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`](Self::schedule_named).
     *  # </weight>
     */
    get asV8(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v8.Type_50} {
        assert(this.isV8)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`](Self::schedule_named).
     *  # </weight>
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '746eebb03db69c92330bf964aa68561897339085326e805d2562fba640d95d20'
    }

    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`](Self::schedule_named).
     *  # </weight>
     */
    get asV10(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v10.Type_50} {
        assert(this.isV10)
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
    get isV5(): boolean {
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
    get asV5(): null {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array], proof: Uint8Array} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {controller: v5.LookupSource, value: bigint, payee: v5.RewardDestination} {
        assert(this.isV5)
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
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller and
     *  it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Bonded`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - O(1).
     *  - One DB entry.
     *  ------------
     *  DB Weight:
     *  - Read: Era Election Status, Bonded, Ledger, [Origin Account], Locks
     *  - Write: [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  The dispatch origin for this call must be _Signed_ by the stash, not the controller and
     *  it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Bonded`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - O(1).
     *  - One DB entry.
     *  ------------
     *  DB Weight:
     *  - Read: Era Election Status, Bonded, Ledger, [Origin Account], Locks
     *  - Write: [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get asV5(): {maxAdditional: bigint} {
        assert(this.isV5)
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
     *  Cancel enactment of a deferred slash.
     * 
     *  Can be called by the `T::SlashCancelOrigin`.
     * 
     *  Parameters: era and indices of the slashes for that era to kill.
     * 
     *  # <weight>
     *  Complexity: O(U + S)
     *  with U unapplied slashes weighted with U=1000
     *  and S is the number of slash indices to be canceled.
     *  - Read: Unapplied Slashes
     *  - Write: Unapplied Slashes
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.cancel_deferred_slash') === 'fab176436ff709189f441a9c591b1e715361b4db2636055c0154e452e116feb0'
    }

    /**
     *  Cancel enactment of a deferred slash.
     * 
     *  Can be called by the `T::SlashCancelOrigin`.
     * 
     *  Parameters: era and indices of the slashes for that era to kill.
     * 
     *  # <weight>
     *  Complexity: O(U + S)
     *  with U unapplied slashes weighted with U=1000
     *  and S is the number of slash indices to be canceled.
     *  - Read: Unapplied Slashes
     *  - Write: Unapplied Slashes
     *  # </weight>
     */
    get asV5(): {era: number, slashIndices: number[]} {
        assert(this.isV5)
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
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains one read.
     *  - Writes are limited to the `origin` account key.
     *  --------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: EraElectionStatus, Ledger
     *  - Write: Validators, Nominators
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.chill') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Declare no desire to either validate or nominate.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains one read.
     *  - Writes are limited to the `origin` account key.
     *  --------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: EraElectionStatus, Ledger
     *  - Write: Validators, Nominators
     *  # </weight>
     */
    get asV5(): null {
        assert(this.isV5)
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
     *  Declare a `controller` to stop participating as either a validator or nominator.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_, but can be called by anyone.
     * 
     *  If the caller is the same as the controller being targeted, then no further checks are
     *  enforced, and this function behaves just like `chill`.
     * 
     *  If the caller is different than the controller being targeted, the following conditions
     *  must be met:
     *  * A `ChillThreshold` must be set and checked which defines how close to the max
     *    nominators or validators we must reach before users can start chilling one-another.
     *  * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *    how close we are to the threshold.
     *  * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *    if this is a person that should be chilled because they have not met the threshold
     *    bond required.
     * 
     *  This can be helpful if bond requirements are updated, and we need to remove old users
     *  who do not satisfy these requirements.
     */
    get isV8(): boolean {
        return this._chain.getCallHash('Staking.chill_other') === 'bbdd03dc244a9d87deceeb91d015d7ef52746b99580b1474586c8699a77574e1'
    }

    /**
     *  Declare a `controller` to stop participating as either a validator or nominator.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_, but can be called by anyone.
     * 
     *  If the caller is the same as the controller being targeted, then no further checks are
     *  enforced, and this function behaves just like `chill`.
     * 
     *  If the caller is different than the controller being targeted, the following conditions
     *  must be met:
     *  * A `ChillThreshold` must be set and checked which defines how close to the max
     *    nominators or validators we must reach before users can start chilling one-another.
     *  * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
     *    how close we are to the threshold.
     *  * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
     *    if this is a person that should be chilled because they have not met the threshold
     *    bond required.
     * 
     *  This can be helpful if bond requirements are updated, and we need to remove old users
     *  who do not satisfy these requirements.
     */
    get asV8(): {controller: Uint8Array} {
        assert(this.isV8)
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
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - No arguments.
     *  - Weight: O(1)
     *  - Write ForceEra
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.force_new_era') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Force there to be a new era at the end of the next session. After this, it will be
     *  reset to normal (non-forced) behaviour.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - No arguments.
     *  - Weight: O(1)
     *  - Write ForceEra
     *  # </weight>
     */
    get asV5(): null {
        assert(this.isV5)
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
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - Weight: O(1)
     *  - Write: ForceEra
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.force_new_era_always') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Force there to be a new era at the end of sessions indefinitely.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - Weight: O(1)
     *  - Write: ForceEra
     *  # </weight>
     */
    get asV5(): null {
        assert(this.isV5)
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
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - No arguments.
     *  - Weight: O(1)
     *  - Write: ForceEra
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.force_no_eras') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Force there to be no new eras indefinitely.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - No arguments.
     *  - Weight: O(1)
     *  - Write: ForceEra
     *  # </weight>
     */
    get asV5(): null {
        assert(this.isV5)
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
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  O(S) where S is the number of slashing spans to be removed
     *  Reads: Bonded, Slashing Spans, Account, Locks
     *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
     *  Writes Each: SpanSlash * S
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.force_unstake') === '9d6e1257b3e6113f6cc99a4193f2fef8c6513a3d2a99ee686af751b5931f583b'
    }

    /**
     *  Force a current staker to become completely unstaked, immediately.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  O(S) where S is the number of slashing spans to be removed
     *  Reads: Bonded, Slashing Spans, Account, Locks
     *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
     *  Writes Each: SpanSlash * S
     *  # </weight>
     */
    get asV5(): {stash: Uint8Array, numSlashingSpans: number} {
        assert(this.isV5)
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
     *  Same as [`set_validator_count`].
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.increase_validator_count') === '1b5e15eec25101f7a4e4a63e4c35b1120c3147dac0ca34ddcab4e7e3bb6ef150'
    }

    /**
     *  Increments the ideal number of validators.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Same as [`set_validator_count`].
     *  # </weight>
     */
    get asV5(): {additional: number} {
        assert(this.isV5)
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
     *  Remove the given nominations from the calling validator.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`. The controller
     *  account should represent a validator.
     * 
     *  - `who`: A list of nominator stash accounts who are nominating this validator which
     *    should no longer be nominating this validator.
     * 
     *  Note: Making this call only makes sense if you first set the validator preferences to
     *  block any further nominations.
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.kick') === '760f2d470d3cb5efbef130b8d79a202238d983a6680d5e2d4eee31ad48834e9f'
    }

    /**
     *  Remove the given nominations from the calling validator.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`. The controller
     *  account should represent a validator.
     * 
     *  - `who`: A list of nominator stash accounts who are nominating this validator which
     *    should no longer be nominating this validator.
     * 
     *  Note: Making this call only makes sense if you first set the validator preferences to
     *  block any further nominations.
     */
    get asV5(): {who: v5.LookupSource[]} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {targets: v5.LookupSource[]} {
        assert(this.isV5)
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
     *  Weight:
     *  - Reward Destination Staked: O(N)
     *  - Reward Destination Controller (Creating): O(N)
     *  DB Weight:
     *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
     *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
     *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
     *  - Write Each: System Account, Locks, Ledger (3 items)
     * 
     *    NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *    Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  Weight:
     *  - Reward Destination Staked: O(N)
     *  - Reward Destination Controller (Creating): O(N)
     *  DB Weight:
     *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
     *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
     *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
     *  - Write Each: System Account, Locks, Ledger (3 items)
     * 
     *    NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *    Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     *  # </weight>
     */
    get asV5(): {validatorStash: Uint8Array, era: number} {
        assert(this.isV5)
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
     *  Remove all data structure concerning a staker/stash once its balance is at the minimum.
     *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
     *  and the target `stash` must have no funds left beyond the ED.
     * 
     *  This can be called from any origin.
     * 
     *  - `stash`: The stash account to reap. Its balance must be zero.
     * 
     *  # <weight>
     *  Complexity: O(S) where S is the number of slashing spans on the account.
     *  DB Weight:
     *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
     *  - Writes Each: SpanSlash * S
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.reap_stash') === '9d6e1257b3e6113f6cc99a4193f2fef8c6513a3d2a99ee686af751b5931f583b'
    }

    /**
     *  Remove all data structure concerning a staker/stash once its balance is at the minimum.
     *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
     *  and the target `stash` must have no funds left beyond the ED.
     * 
     *  This can be called from any origin.
     * 
     *  - `stash`: The stash account to reap. Its balance must be zero.
     * 
     *  # <weight>
     *  Complexity: O(S) where S is the number of slashing spans on the account.
     *  DB Weight:
     *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
     *  - Writes Each: SpanSlash * S
     *  # </weight>
     */
    get asV5(): {stash: Uint8Array, numSlashingSpans: number} {
        assert(this.isV5)
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
     *  The dispatch origin must be signed by the controller, and it can be only called when
     *  [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Time complexity: O(L), where L is unlocking chunks
     *  - Bounded by `MAX_UNLOCKING_CHUNKS`.
     *  - Storage changes: Can't increase storage, only decrease it.
     *  ---------------
     *  - DB Weight:
     *      - Reads: EraElectionStatus, Ledger, Locks, [Origin Account]
     *      - Writes: [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.rebond') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
    }

    /**
     *  Rebond a portion of the stash scheduled to be unlocked.
     * 
     *  The dispatch origin must be signed by the controller, and it can be only called when
     *  [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Time complexity: O(L), where L is unlocking chunks
     *  - Bounded by `MAX_UNLOCKING_CHUNKS`.
     *  - Storage changes: Can't increase storage, only decrease it.
     *  ---------------
     *  - DB Weight:
     *      - Reads: EraElectionStatus, Ledger, Locks, [Origin Account]
     *      - Writes: [Origin Account], Locks, Ledger
     *  # </weight>
     */
    get asV5(): {value: bigint} {
        assert(this.isV5)
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
     *  Same as [`set_validator_count`].
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.scale_validator_count') === 'd5f5b0d2128c7dec0e2681f604f51d1657af9bf5eb7c704432075cb4655e0065'
    }

    /**
     *  Scale up the ideal number of validators by a factor.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Same as [`set_validator_count`].
     *  # </weight>
     */
    get asV5(): {factor: number} {
        assert(this.isV5)
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
     *  ----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
     *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
     *  # </weight>
     */
    get isV5(): boolean {
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
    get asV5(): {controller: v5.LookupSource} {
        assert(this.isV5)
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
     *  - Weight: O(E)
     *  - DB Weight:
     *      - Reads: Current Era, History Depth
     *      - Writes: History Depth
     *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
     *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  - Weight: O(E)
     *  - DB Weight:
     *      - Reads: Current Era, History Depth
     *      - Writes: History Depth
     *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
     *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
     *  # </weight>
     */
    get asV5(): {newHistoryDepth: number, eraItemsDeleted: number} {
        assert(this.isV5)
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
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  - O(V)
     *  - Write: Invulnerables
     *  # </weight>
     */
    get isV5(): boolean {
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
    get asV5(): {invulnerables: Uint8Array[]} {
        assert(this.isV5)
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
     *  ---------
     *  - Weight: O(1)
     *  - DB Weight:
     *      - Read: Ledger
     *      - Write: Payee
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  ---------
     *  - Weight: O(1)
     *  - DB Weight:
     *      - Read: Ledger
     *      - Write: Payee
     *  # </weight>
     */
    get asV5(): {payee: v5.RewardDestination} {
        assert(this.isV5)
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
     *  Update the various staking limits this pallet.
     * 
     *  * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     *  * `min_validator_bond`: The minimum active bond needed to be a validator.
     *  * `max_nominator_count`: The max number of users who can be a nominator at once.
     *    When set to `None`, no limit is enforced.
     *  * `max_validator_count`: The max number of users who can be a validator at once.
     *    When set to `None`, no limit is enforced.
     * 
     *  Origin must be Root to call this function.
     * 
     *  NOTE: Existing nominators and validators will not be affected by this update.
     *  to kick people under the new limits, `chill_other` should be called.
     */
    get isV8(): boolean {
        return this._chain.getCallHash('Staking.set_staking_limits') === 'a02f000e828a17cbd3d1b2a16e57d8f64445b5bc9f029b636cd5bfef98e0ebdd'
    }

    /**
     *  Update the various staking limits this pallet.
     * 
     *  * `min_nominator_bond`: The minimum active bond needed to be a nominator.
     *  * `min_validator_bond`: The minimum active bond needed to be a validator.
     *  * `max_nominator_count`: The max number of users who can be a nominator at once.
     *    When set to `None`, no limit is enforced.
     *  * `max_validator_count`: The max number of users who can be a validator at once.
     *    When set to `None`, no limit is enforced.
     * 
     *  Origin must be Root to call this function.
     * 
     *  NOTE: Existing nominators and validators will not be affected by this update.
     *  to kick people under the new limits, `chill_other` should be called.
     */
    get asV8(): {minNominatorBond: bigint, minValidatorBond: bigint, maxNominatorCount: (number | undefined), maxValidatorCount: (number | undefined), threshold: (number | undefined)} {
        assert(this.isV8)
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
     *  Sets the ideal number of validators.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Weight: O(1)
     *  Write: Validator Count
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.set_validator_count') === 'e648274eb741b1a8ab74c4583589c621e8391cd9122c0f7063e1e18c4af71912'
    }

    /**
     *  Sets the ideal number of validators.
     * 
     *  The dispatch origin must be Root.
     * 
     *  # <weight>
     *  Weight: O(1)
     *  Write: Validator Count
     *  # </weight>
     */
    get asV5(): {new: number} {
        assert(this.isV5)
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
     *  The transaction is assumed to be the longest path, a better solution.
     *    - Initial solution is almost the same.
     *    - Worse solution is retraced in pre-dispatch-checks which sets its own weight.
     *  # </weight>
     */
    get isV5(): boolean {
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
    get asV5(): {winners: number[], compact: v5.CompactAssignments, score: bigint[], era: number, size: v5.ElectionSize} {
        assert(this.isV5)
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
     *  See [`submit_election_solution`].
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  See [`submit_election_solution`].
     *  # </weight>
     */
    get asV5(): {winners: number[], compact: v5.CompactAssignments, score: bigint[], era: number, size: v5.ElectionSize} {
        assert(this.isV5)
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
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Unbonded`.
     * 
     *  See also [`Call::withdraw_unbonded`].
     * 
     *  # <weight>
     *  - Independent of the arguments. Limited but potentially exploitable complexity.
     *  - Contains a limited number of reads.
     *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
     *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
     *    The only way to clean the aforementioned storage item is also user-controlled via
     *    `withdraw_unbonded`.
     *  - One DB entry.
     *  ----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: EraElectionStatus, Ledger, CurrentEra, Locks, BalanceOf Stash,
     *  - Write: Locks, Ledger, BalanceOf Stash,
     *  </weight>
     */
    get isV5(): boolean {
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
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  Emits `Unbonded`.
     * 
     *  See also [`Call::withdraw_unbonded`].
     * 
     *  # <weight>
     *  - Independent of the arguments. Limited but potentially exploitable complexity.
     *  - Contains a limited number of reads.
     *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
     *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
     *    The only way to clean the aforementioned storage item is also user-controlled via
     *    `withdraw_unbonded`.
     *  - One DB entry.
     *  ----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: EraElectionStatus, Ledger, CurrentEra, Locks, BalanceOf Stash,
     *  - Write: Locks, Ledger, BalanceOf Stash,
     *  </weight>
     */
    get asV5(): {value: bigint} {
        assert(this.isV5)
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
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  -----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Era Election Status, Ledger
     *  - Write: Nominators, Validators
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('Staking.validate') === '2a662df491d449985438edd4d2e6899fd06beebbaa59e759713811ade38308bf'
    }

    /**
     *  Declare the desire to validate for the origin controller.
     * 
     *  Effects will be felt at the beginning of the next era.
     * 
     *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
     *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
     * 
     *  # <weight>
     *  - Independent of the arguments. Insignificant complexity.
     *  - Contains a limited number of reads.
     *  - Writes are limited to the `origin` account key.
     *  -----------
     *  Weight: O(1)
     *  DB Weight:
     *  - Read: Era Election Status, Ledger
     *  - Write: Nominators, Validators
     *  # </weight>
     */
    get asV5(): {prefs: v5.ValidatorPrefs} {
        assert(this.isV5)
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
     *  Update:
     *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
     *  - Writes: [Origin Account], Locks, Ledger
     *  Kill:
     *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin
     *    Account], Locks, BalanceOf stash
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
     *    [Origin Account], Locks, BalanceOf stash.
     *  - Writes Each: SpanSlash * S
     *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
     *  # </weight>
     */
    get isV5(): boolean {
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
     *  Update:
     *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
     *  - Writes: [Origin Account], Locks, Ledger
     *  Kill:
     *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin
     *    Account], Locks, BalanceOf stash
     *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
     *    [Origin Account], Locks, BalanceOf stash.
     *  - Writes Each: SpanSlash * S
     *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
     *  # </weight>
     */
    get asV5(): {numSlashingSpans: number} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {new: v5.LookupSource} {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '43724a3f6f9b452ad260d8719f337c1d62311b709cdc08960ab203ed9adca30a'
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
    get asV5(): {call: v5.Type_51} {
        assert(this.isV5)
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
    get isV8(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '75ceb79fb5f0f2da682b2e2d7f233abd3b1abf721bd3cfb16dc052f2ff6e8a69'
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
    get asV8(): {call: v8.Type_50} {
        assert(this.isV8)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '338d41ecbdc6d6793c98362a571d1b5158e1af9274c228100a6352d2ecb5bd97'
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
    get asV10(): {call: v10.Type_50} {
        assert(this.isV10)
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
    get isV5(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'ef889c5259a47ac3f567141d08dd9225006e95c20e514fee0d5f172021cfe613'
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
    get asV5(): {who: v5.LookupSource, call: v5.Type_51} {
        assert(this.isV5)
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
    get isV8(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'b089d0d1cdaa2ca903a72f3d35b22b165805761dfbdd879ec020433a63e160d7'
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
    get asV8(): {who: v8.LookupSource, call: v8.Type_50} {
        assert(this.isV8)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '451f21a08f5b879cbd733b87e1be3c2b83f224ea166ce5a0dad4150d1e0e6027'
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
    get asV10(): {who: v10.LookupSource, call: v10.Type_50} {
        assert(this.isV10)
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
    get isV5(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'c73ea9999954b16067a667b6e5f358db5f9c9d29abaa467e0bcf426e0d2c6b9f'
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
    get asV5(): {call: v5.Type_51, weight: bigint} {
        assert(this.isV5)
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
    get isV8(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '9ad03234d841b79dec2bf8bcc39dec9264c24a3a0c9a6a9a74a1e3d1a97b91c7'
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
    get asV8(): {call: v8.Type_50, weight: bigint} {
        assert(this.isV8)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'a6acef2f4744c2de2eb0b15ea0447007759c3554f8683b4484b2a5ebef78ab40'
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
    get asV10(): {call: v10.Type_50, weight: bigint} {
        assert(this.isV10)
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
    get isV5(): boolean {
        return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
    }

    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    get asV5(): {ratio: number} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {keys: Uint8Array[]} {
        assert(this.isV5)
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
     *  - Base Weight: 0.665 µs, independent of remark length.
     *  - No DB operations.
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - Base Weight: 0.665 µs, independent of remark length.
     *  - No DB operations.
     *  # </weight>
     */
    get asV5(): {remark: Uint8Array} {
        assert(this.isV5)
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
    get isV8(): boolean {
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
    get asV8(): {remark: Uint8Array} {
        assert(this.isV8)
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
    get isV5(): boolean {
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
    get asV5(): {changesTrieConfig: (v5.ChangesTrieConfiguration | undefined)} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {code: Uint8Array} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {code: Uint8Array} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {pages: bigint} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class TechCouncilCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechCouncil.close')
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
     *  If the close operation completes successfully with disapproval, the transaction fee will
     *  be waived. Otherwise execution of the approved operation will be charged to the caller.
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
    get isV5(): boolean {
        return this._chain.getCallHash('TechCouncil.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
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
     *  If the close operation completes successfully with disapproval, the transaction fee will
     *  be waived. Otherwise execution of the approved operation will be charged to the caller.
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
    get asV5(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class TechCouncilDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechCouncil.disapprove_proposal')
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
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('TechCouncil.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
     *  DB Weight:
     *  * Reads: Proposals
     *  * Writes: Voting, Proposals, ProposalOf
     *  # </weight>
     */
    get asV5(): {proposalHash: Uint8Array} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class TechCouncilExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechCouncil.execute')
        this._chain = ctx._chain
        this.call = call
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
    get isV5(): boolean {
        return this._chain.getCallHash('TechCouncil.execute') === '50f02c44b28e890628cd5a7ed939c8ca4f3c9a15627e54dd2af02254b05bd898'
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
    get asV5(): {proposal: v5.Proposal, lengthBound: number} {
        assert(this.isV5)
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
    get isV8(): boolean {
        return this._chain.getCallHash('TechCouncil.execute') === '85c14b78e2541f22f6380efcc2ef32bce0217ba0728ba2961261c2ebf501ae3e'
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
    get asV8(): {proposal: v8.Proposal, lengthBound: number} {
        assert(this.isV8)
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
    get isV10(): boolean {
        return this._chain.getCallHash('TechCouncil.execute') === '2114c241df69505422ae53e220638cd6f690b236caeb58c68994fd54d531cb7d'
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
    get asV10(): {proposal: v10.Proposal, lengthBound: number} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }
}

export class TechCouncilProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechCouncil.propose')
        this._chain = ctx._chain
        this.call = call
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
    get isV5(): boolean {
        return this._chain.getCallHash('TechCouncil.propose') === 'b170f3f00829cf41e146fabdf1f36c5d6734b90e076bcaa463d714d11290c995'
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
    get asV5(): {threshold: number, proposal: v5.Proposal, lengthBound: number} {
        assert(this.isV5)
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
    get isV8(): boolean {
        return this._chain.getCallHash('TechCouncil.propose') === 'e4e70d77688c03d17b69277e7f3cfc7923850d1aec4ac1187931dea0d44db5ca'
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
    get asV8(): {threshold: number, proposal: v8.Proposal, lengthBound: number} {
        assert(this.isV8)
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
    get isV10(): boolean {
        return this._chain.getCallHash('TechCouncil.propose') === '1c665dec211cefb13308d7c23f24c395383ce01f6bd0a003b1dfe5835bf86eff'
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
    get asV10(): {threshold: number, proposal: v10.Proposal, lengthBound: number} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }
}

export class TechCouncilSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechCouncil.set_members')
        this._chain = ctx._chain
        this.call = call
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
     *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
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
    get isV5(): boolean {
        return this._chain.getCallHash('TechCouncil.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
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
     *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
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
    get asV5(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class TechCouncilVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechCouncil.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Add an aye or nay vote for the sender to the given proposal.
     * 
     *  Requires the sender to be a member.
     * 
     *  Transaction fees will be waived if the member is voting on any particular proposal
     *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
     *  # <weight>
     *  ## Weight
     *  - `O(M)` where `M` is members-count (code- and governance-bounded)
     *  - DB:
     *    - 1 storage read `Members` (codec `O(M)`)
     *    - 1 storage mutation `Voting` (codec `O(M)`)
     *  - 1 event
     *  # </weight>
     */
    get isV5(): boolean {
        return this._chain.getCallHash('TechCouncil.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     *  Add an aye or nay vote for the sender to the given proposal.
     * 
     *  Requires the sender to be a member.
     * 
     *  Transaction fees will be waived if the member is voting on any particular proposal
     *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
     *  # <weight>
     *  ## Weight
     *  - `O(M)` where `M` is members-count (code- and governance-bounded)
     *  - DB:
     *    - 1 storage read `Members` (codec `O(M)`)
     *    - 1 storage mutation `Voting` (codec `O(M)`)
     *  - 1 event
     *  # </weight>
     */
    get asV5(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV5)
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
    get isV5(): boolean {
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
    get asV5(): {now: bigint} {
        assert(this.isV5)
        return this._chain.decodeCall(this.call)
    }
}

export class TransactionPaymentSetDefaultFeeTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TransactionPayment.set_default_fee_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Set default fee token
     */
    get isV5(): boolean {
        return this._chain.getCallHash('TransactionPayment.set_default_fee_token') === 'fa4eafa26b402c9c1313e60292dfbcf8429229b20dfa6d165fb4b4992ce486c1'
    }

    /**
     *  Set default fee token
     */
    get asV5(): {feeToken: (v5.CurrencyId | undefined)} {
        assert(this.isV5)
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
    get isV10(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '7996e05ae739153facd66e7795ade63895f8556e58819d903e0b270a2d885721'
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
    get asV10(): {index: number, call: v10.Type_50} {
        assert(this.isV10)
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
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
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
    get isV10(): boolean {
        return this._chain.getCallHash('Utility.batch') === '214b19149cfa2a5ce83021c007ae07eb47ac36438ea2c325ece00458fa5c6645'
    }

    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
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
    get asV10(): {calls: v10.Type_50[]} {
        assert(this.isV10)
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
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get isV10(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '214b19149cfa2a5ce83021c007ae07eb47ac36438ea2c325ece00458fa5c6645'
    }

    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    get asV10(): {calls: v10.Type_50[]} {
        assert(this.isV10)
        return this._chain.decodeCall(this.call)
    }
}
