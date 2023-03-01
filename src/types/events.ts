import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v1 from './v1'
import * as v6 from './v6'
import * as v10 from './v10'
import * as v12 from './v12'

export class AllocationsNewAllocationEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Allocations.NewAllocation')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An allocation was triggered \[who, value, fee, proof\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Allocations.NewAllocation') === 'e0b9fcf793da27353e5523ce373f654606fe26aa6ec36e17f4e892f0b4d2cf7c'
    }

    /**
     * An allocation was triggered \[who, value, fee, proof\]
     */
    get asV1(): [Uint8Array, bigint, bigint, Uint8Array] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllocationsOraclesDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllocationsOracles.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Phantom member, never used.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('AllocationsOracles.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Phantom member, never used.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllocationsOraclesKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllocationsOracles.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * One of the members' keys changed.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('AllocationsOracles.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * One of the members' keys changed.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllocationsOraclesMemberAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllocationsOracles.MemberAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('AllocationsOracles.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllocationsOraclesMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllocationsOracles.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('AllocationsOracles.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllocationsOraclesMembersResetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllocationsOracles.MembersReset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('AllocationsOracles.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class AllocationsOraclesMembersSwappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AllocationsOracles.MembersSwapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('AllocationsOracles.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get asV1(): null {
        assert(this.isV1)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
    }

    /**
     * A balance was set by root.
     */
    get asV6(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV6)
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
     * Some amount was deposited into the account (e.g. for transaction fees). \[who,
     * deposit\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was deposited into the account (e.g. for transaction fees). \[who,
     * deposit\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV6(): {who: Uint8Array, amount: bigint} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV6(): {account: Uint8Array, amount: bigint} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asV6(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV6(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v6.BalanceStatus} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV6(): {who: Uint8Array, amount: bigint} {
        assert(this.isV6)
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
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior). \[who,
     * amount_slashed\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV6(): {who: Uint8Array, amount: bigint} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV6(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV6(): {who: Uint8Array, amount: bigint} {
        assert(this.isV6)
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
    get isV1(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV6(): {who: Uint8Array, amount: bigint} {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }
}

export class CompanyReserveDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CompanyReserve.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV1(): boolean {
        return this._chain.getEventHash('CompanyReserve.Deposit') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV1(): bigint {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class CompanyReserveReserveOpEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CompanyReserve.ReserveOp')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get isV1(): boolean {
        return this._chain.getEventHash('CompanyReserve.ReserveOp') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get asV1(): v1.Type_33 {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get isV6(): boolean {
        return this._chain.getEventHash('CompanyReserve.ReserveOp') === 'c3fae614e01b83e1491e1f4dd26a9fc0a64f042782ad0f4180f8fce328c20bea'
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get asV6(): v6.Type_31 {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get isV10(): boolean {
        return this._chain.getEventHash('CompanyReserve.ReserveOp') === '51f568e2b2910e39c170c98a461f30e984bb6a9c853df3e7a86b3caedf94d002'
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get asV10(): v10.Type_32 {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }
}

export class CompanyReserveSpentFundsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CompanyReserve.SpentFunds')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds were spent from the reserve.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('CompanyReserve.SpentFunds') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some funds were spent from the reserve.
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class CompanyReserveTipReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CompanyReserve.TipReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone tipped the company reserve
     */
    get isV1(): boolean {
        return this._chain.getEventHash('CompanyReserve.TipReceived') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Someone tipped the company reserve
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
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
    get isV1(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === 'ce1ecc6cb7bde7a0e967ed0e6caff9002b8e335404bc1e51403dc21d44028613'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV1(): [Uint8Array, v1.V2Outcome] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '155c7cce0948b8cb240d1401bb772a72b24567aa52618e9a4aaa84271c380044'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV6(): [Uint8Array, v6.V2Outcome] {
        assert(this.isV6)
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
    get isV1(): boolean {
        return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
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
    get isV1(): boolean {
        return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class EmergencyShutdownShutdownToggledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EmergencyShutdown.ShutdownToggled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Shutdown state was toggled, to either on or off.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('EmergencyShutdown.ShutdownToggled') === 'ab01a9c748aa3cbaea79085d7fc05c23416224e2cbe4d301feea3f8143c67da0'
    }

    /**
     * Shutdown state was toggled, to either on or off.
     */
    get asV1(): boolean {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class InternationalReserveDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'InternationalReserve.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV1(): boolean {
        return this._chain.getEventHash('InternationalReserve.Deposit') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV1(): bigint {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class InternationalReserveReserveOpEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'InternationalReserve.ReserveOp')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get isV1(): boolean {
        return this._chain.getEventHash('InternationalReserve.ReserveOp') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get asV1(): v1.Type_33 {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get isV6(): boolean {
        return this._chain.getEventHash('InternationalReserve.ReserveOp') === 'c3fae614e01b83e1491e1f4dd26a9fc0a64f042782ad0f4180f8fce328c20bea'
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get asV6(): v6.Type_31 {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get isV10(): boolean {
        return this._chain.getEventHash('InternationalReserve.ReserveOp') === '51f568e2b2910e39c170c98a461f30e984bb6a9c853df3e7a86b3caedf94d002'
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get asV10(): v10.Type_32 {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }
}

export class InternationalReserveSpentFundsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'InternationalReserve.SpentFunds')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds were spent from the reserve.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('InternationalReserve.SpentFunds') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some funds were spent from the reserve.
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class InternationalReserveTipReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'InternationalReserve.TipReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone tipped the company reserve
     */
    get isV1(): boolean {
        return this._chain.getEventHash('InternationalReserve.TipReceived') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Someone tipped the company reserve
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class MandateRootOpEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Mandate.RootOp')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A root operation was executed, show result
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Mandate.RootOp') === 'c3fae614e01b83e1491e1f4dd26a9fc0a64f042782ad0f4180f8fce328c20bea'
    }

    /**
     * A root operation was executed, show result
     */
    get asV6(): v6.Type_31 {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A root operation was executed, show result
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Mandate.RootOp') === '51f568e2b2910e39c170c98a461f30e984bb6a9c853df3e7a86b3caedf94d002'
    }

    /**
     * A root operation was executed, show result
     */
    get asV10(): v10.Type_32 {
        assert(this.isV10)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asV6(): {approving: Uint8Array, timepoint: v6.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asV6(): {cancelling: Uint8Array, timepoint: v6.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV6)
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
    get asV1(): [Uint8Array, v1.Timepoint, Uint8Array, Uint8Array, v1.Type_33] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === 'a4f4f4f2422a1c4cb5359e5ca7ce069035018dd917feceb324240a45edc121d6'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV6(): {approving: Uint8Array, timepoint: v6.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v6.Type_31} {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '893c7ea80ff9b8edc0f0e804a754035301e2cf91cbfe60a5a7d0565bfa1c133e'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV10(): {approving: Uint8Array, timepoint: v10.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v10.Type_32} {
        assert(this.isV10)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    }

    /**
     * A new multisig operation has begun.
     */
    get asV6(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV6)
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
    get isV12(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '83022e6226975081ba018c2b45a90d494bc922ece44e69af0322583651264f8e'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asV12(): {weightUsed: bigint, dmqHead: Uint8Array} {
        assert(this.isV12)
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
    get isV12(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '1cdbdc8ac203922f95ae6ab3e8b98004e956389f7ec11480ec5633d29b48cf71'
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get asV12(): {count: number} {
        assert(this.isV12)
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
    get isV12(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * An upgrade has been authorized.
     */
    get asV12(): {codeHash: Uint8Array} {
        assert(this.isV12)
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
    get isV12(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === 'f35adbaa82c93636884997faedd16369ac498b9208d7c11f2233b9ef2aa4f092'
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get asV12(): {relayChainBlockNum: number} {
        assert(this.isV12)
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
    get isV1(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The relay-chain aborted the upgrade process.
     */
    get asV1(): null {
        assert(this.isV1)
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
     * The validation function has been scheduled to apply.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The validation function has been scheduled to apply.
     */
    get asV1(): null {
        assert(this.isV1)
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
    get isV10(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV10(): {hash: Uint8Array} {
        assert(this.isV10)
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
    get isV10(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV10(): {hash: Uint8Array} {
        assert(this.isV10)
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
    get isV10(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV10(): {hash: Uint8Array} {
        assert(this.isV10)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV6(): {task: [number, number], id: (Uint8Array | undefined), error: v6.LookupError} {
        assert(this.isV6)
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
    get isV1(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * Canceled some task. \[when, index\]
     */
    get asV1(): [number, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Canceled some task.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Canceled some task.
     */
    get asV6(): {when: number, index: number} {
        assert(this.isV6)
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
    get isV1(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '0924b109bceeccc61da80b5dece80623d828a98c86b9a531565d13d396698ea8'
    }

    /**
     * Dispatched some task. \[task, id, result\]
     */
    get asV1(): [[number, number], (Uint8Array | undefined), v1.Type_33] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '4439d3bf37ab8e1b7b14c411aa9c4d9622aa96b4dd169cb67da04ec196da4c09'
    }

    /**
     * Dispatched some task.
     */
    get asV6(): {task: [number, number], id: (Uint8Array | undefined), result: v6.Type_31} {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'ba59527b3bb4801aee2fda92f8229d8d572cc38c565e139a667a87dd8171194b'
    }

    /**
     * Dispatched some task.
     */
    get asV10(): {task: [number, number], id: (Uint8Array | undefined), result: v10.Type_32} {
        assert(this.isV10)
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
    get isV1(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * Scheduled some task. \[when, index\]
     */
    get asV1(): [number, number] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Scheduled some task.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Scheduled some task.
     */
    get asV6(): {when: number, index: number} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get asV6(): {sessionIndex: number} {
        assert(this.isV6)
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
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get asV6(): {oldSudoer: (Uint8Array | undefined)} {
        assert(this.isV6)
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
    get asV1(): v1.Type_33 {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '7cde07a00087fe00204a886eb195e51ab4ed328b48e00f89cab63a3354eedb31'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV6(): {sudoResult: v6.Type_31} {
        assert(this.isV6)
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
    get asV1(): v1.Type_33 {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV6(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '7cde07a00087fe00204a886eb195e51ab4ed328b48e00f89cab63a3354eedb31'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV6(): {sudoResult: v6.Type_31} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
    }

    /**
     * An extrinsic failed.
     */
    get asV6(): {dispatchError: v6.DispatchError, dispatchInfo: v6.DispatchInfo} {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
    }

    /**
     * An extrinsic failed.
     */
    get asV10(): {dispatchError: v10.DispatchError, dispatchInfo: v10.DispatchInfo} {
        assert(this.isV10)
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
    get isV6(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV6(): {dispatchInfo: v6.DispatchInfo} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV6(): {account: Uint8Array} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV6(): {account: Uint8Array} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV6(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV6(): {proposalHash: Uint8Array} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV6(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV6(): {proposalHash: Uint8Array} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV6(): {proposalHash: Uint8Array, result: v6.Type_31} {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV10(): {proposalHash: Uint8Array, result: v10.Type_32} {
        assert(this.isV10)
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
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV6(): {proposalHash: Uint8Array, result: v6.Type_31} {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV10(): {proposalHash: Uint8Array, result: v10.Type_32} {
        assert(this.isV10)
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
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV6(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV6)
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
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV6(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Phantom member, never used.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Phantom member, never used.
     */
    get asV6(): null {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * One of the members' keys changed.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * One of the members' keys changed.
     */
    get asV6(): null {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMemberAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MemberAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get asV6(): null {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get asV6(): null {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMembersResetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MembersReset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get asV6(): null {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMembersSwappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MembersSwapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get isV6(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get asV6(): null {
        assert(this.isV6)
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
    get isV12(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asV12(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesApprovalCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ApprovalCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An approval for a `delegate` account to transfer the `instance` of an asset `class` was
     * cancelled by its `owner`.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.ApprovalCancelled') === '05bbfd96bf49b015b2ae5d1b60706c00eaf43db8954fca9c4cc44826abe0f893'
    }

    /**
     * An approval for a `delegate` account to transfer the `instance` of an asset `class` was
     * cancelled by its `owner`.
     */
    get asV10(): {class: number, instance: number, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An approval for a `delegate` account to transfer the `item` of an item
     * `collection` was cancelled by its `owner`.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.ApprovalCancelled') === '28e2099402db057489fed1d463d382a488f95bb3d119379aef54f500296b1d83'
    }

    /**
     * An approval for a `delegate` account to transfer the `item` of an item
     * `collection` was cancelled by its `owner`.
     */
    get asV12(): {collection: number, item: number, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesApprovedTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ApprovedTransfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An `instance` of an asset `class` has been approved by the `owner` for transfer by a
     * `delegate`.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.ApprovedTransfer') === '05bbfd96bf49b015b2ae5d1b60706c00eaf43db8954fca9c4cc44826abe0f893'
    }

    /**
     * An `instance` of an asset `class` has been approved by the `owner` for transfer by a
     * `delegate`.
     */
    get asV10(): {class: number, instance: number, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An `item` of a `collection` has been approved by the `owner` for transfer by
     * a `delegate`.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.ApprovedTransfer') === '28e2099402db057489fed1d463d382a488f95bb3d119379aef54f500296b1d83'
    }

    /**
     * An `item` of a `collection` has been approved by the `owner` for transfer by
     * a `delegate`.
     */
    get asV12(): {collection: number, item: number, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesAssetStatusChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.AssetStatusChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset `class` has had its attributes changed by the `Force` origin.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.AssetStatusChanged') === '4f045c4df2d4b9045175427f6f6aa548cd3ad56207f700b68254d3b77d944310'
    }

    /**
     * An asset `class` has had its attributes changed by the `Force` origin.
     */
    get asV10(): {class: number} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesAttributeClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.AttributeCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Attribute metadata has been cleared for an asset class or instance.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.AttributeCleared') === '91aa106b700026eb59ef1d86cbd22766539a996d1d1d5cb5dbbdc18439ff1283'
    }

    /**
     * Attribute metadata has been cleared for an asset class or instance.
     */
    get asV10(): {class: number, maybeInstance: (number | undefined), key: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Attribute metadata has been cleared for a `collection` or `item`.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.AttributeCleared') === 'c330ddd00fb87b92c796bc29cff6edf2ce546dd8eb98420ac23c5cbe7b0e11d1'
    }

    /**
     * Attribute metadata has been cleared for a `collection` or `item`.
     */
    get asV12(): {collection: number, maybeItem: (number | undefined), key: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesAttributeSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.AttributeSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New attribute metadata has been set for an asset class or instance.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.AttributeSet') === '6ae49a979267c094bc35bda051f5467e62472724b598a2f5ee5720a5111b8623'
    }

    /**
     * New attribute metadata has been set for an asset class or instance.
     */
    get asV10(): {class: number, maybeInstance: (number | undefined), key: Uint8Array, value: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New attribute metadata has been set for a `collection` or `item`.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.AttributeSet') === 'b7e65dbf62f10e9415ffa560bff4954ffeb28994c9cf350ecd59fe98850d8783'
    }

    /**
     * New attribute metadata has been set for a `collection` or `item`.
     */
    get asV12(): {collection: number, maybeItem: (number | undefined), key: Uint8Array, value: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset `instance` was destroyed.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.Burned') === '448723f6c40490fe04ab8e6d9e382432b7ce5c075d05af60c076b9f6a8a9e510'
    }

    /**
     * An asset `instance` was destroyed.
     */
    get asV10(): {class: number, instance: number, owner: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An `item` was destroyed.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.Burned') === '281c96f4233cbe042ed549cfca1fafa833d625f8d832ed29682ac34cdceb017d'
    }

    /**
     * An `item` was destroyed.
     */
    get asV12(): {collection: number, item: number, owner: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesClassFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ClassFrozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset `class` was frozen.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.ClassFrozen') === '4f045c4df2d4b9045175427f6f6aa548cd3ad56207f700b68254d3b77d944310'
    }

    /**
     * Some asset `class` was frozen.
     */
    get asV10(): {class: number} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesClassMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ClassMetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been cleared for an asset class.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.ClassMetadataCleared') === '4f045c4df2d4b9045175427f6f6aa548cd3ad56207f700b68254d3b77d944310'
    }

    /**
     * Metadata has been cleared for an asset class.
     */
    get asV10(): {class: number} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesClassMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ClassMetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New metadata has been set for an asset class.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.ClassMetadataSet') === '151c432def6b2dc27880b815773b729a1ceb58295a326de4c16e57901c2a9476'
    }

    /**
     * New metadata has been set for an asset class.
     */
    get asV10(): {class: number, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesClassThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ClassThawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset `class` was thawed.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.ClassThawed') === '4f045c4df2d4b9045175427f6f6aa548cd3ad56207f700b68254d3b77d944310'
    }

    /**
     * Some asset `class` was thawed.
     */
    get asV10(): {class: number} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesCollectionFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.CollectionFrozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some `collection` was frozen.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.CollectionFrozen') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
    }

    /**
     * Some `collection` was frozen.
     */
    get asV12(): {collection: number} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesCollectionMaxSupplySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.CollectionMaxSupplySet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Max supply has been set for a collection.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.CollectionMaxSupplySet') === '165991456bc3c6a81994ce513fdf36c2303f5220829f5e8caafbf821233135b4'
    }

    /**
     * Max supply has been set for a collection.
     */
    get asV12(): {collection: number, maxSupply: number} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesCollectionMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.CollectionMetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been cleared for a `collection`.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.CollectionMetadataCleared') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
    }

    /**
     * Metadata has been cleared for a `collection`.
     */
    get asV12(): {collection: number} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesCollectionMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.CollectionMetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New metadata has been set for a `collection`.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.CollectionMetadataSet') === '63ef75086da73b45ed287cac6640abbebd40222433fb8fae9e4fa1bfa173afc2'
    }

    /**
     * New metadata has been set for a `collection`.
     */
    get asV12(): {collection: number, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesCollectionThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.CollectionThawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some `collection` was thawed.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.CollectionThawed') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
    }

    /**
     * Some `collection` was thawed.
     */
    get asV12(): {collection: number} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset class was created.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.Created') === '7f77877d6861fb103cb861e568c28c6112b4f0daecbb1931ca2b5d4e733fdacd'
    }

    /**
     * An asset class was created.
     */
    get asV10(): {class: number, creator: Uint8Array, owner: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A `collection` was created.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.Created') === 'a5c293082b1f3ffb16eaecc5b8d430ca1bb8c7bd090079ebcefcbf303cbfec61'
    }

    /**
     * A `collection` was created.
     */
    get asV12(): {collection: number, creator: Uint8Array, owner: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.Destroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset `class` was destroyed.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.Destroyed') === '4f045c4df2d4b9045175427f6f6aa548cd3ad56207f700b68254d3b77d944310'
    }

    /**
     * An asset `class` was destroyed.
     */
    get asV10(): {class: number} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A `collection` was destroyed.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.Destroyed') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
    }

    /**
     * A `collection` was destroyed.
     */
    get asV12(): {collection: number} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesForceCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ForceCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset class was force-created.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.ForceCreated') === 'd51b7ff0e8d25eeb64fd1351f5eafbd20c22e12baddedd443f9831da21e235ea'
    }

    /**
     * An asset class was force-created.
     */
    get asV10(): {class: number, owner: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A `collection` was force-created.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.ForceCreated') === '6059bcf1dd7c48dc760f017d00a2c7c6719e745b3de9bde2046cbe26347c562f'
    }

    /**
     * A `collection` was force-created.
     */
    get asV12(): {collection: number, owner: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.Frozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset `instance` was frozen.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.Frozen') === '4aec04ec96e3cd667bd16926634d063c18da9922e4d645f33692574e196c20dc'
    }

    /**
     * Some asset `instance` was frozen.
     */
    get asV10(): {class: number, instance: number} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some `item` was frozen.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.Frozen') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
    }

    /**
     * Some `item` was frozen.
     */
    get asV12(): {collection: number, item: number} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesIssuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.Issued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset `instance` was issued.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.Issued') === '448723f6c40490fe04ab8e6d9e382432b7ce5c075d05af60c076b9f6a8a9e510'
    }

    /**
     * An asset `instance` was issued.
     */
    get asV10(): {class: number, instance: number, owner: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An `item` was issued.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.Issued') === '281c96f4233cbe042ed549cfca1fafa833d625f8d832ed29682ac34cdceb017d'
    }

    /**
     * An `item` was issued.
     */
    get asV12(): {collection: number, item: number, owner: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesItemStatusChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ItemStatusChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A `collection` has had its attributes changed by the `Force` origin.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.ItemStatusChanged') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
    }

    /**
     * A `collection` has had its attributes changed by the `Force` origin.
     */
    get asV12(): {collection: number} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been cleared for an asset instance.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.MetadataCleared') === '4aec04ec96e3cd667bd16926634d063c18da9922e4d645f33692574e196c20dc'
    }

    /**
     * Metadata has been cleared for an asset instance.
     */
    get asV10(): {class: number, instance: number} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Metadata has been cleared for an item.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.MetadataCleared') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
    }

    /**
     * Metadata has been cleared for an item.
     */
    get asV12(): {collection: number, item: number} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New metadata has been set for an asset instance.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.MetadataSet') === '8d2f67e787668073bdb66a4b7bbba97ea22da0860f46bce7884b446fd055419a'
    }

    /**
     * New metadata has been set for an asset instance.
     */
    get asV10(): {class: number, instance: number, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New metadata has been set for an item.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.MetadataSet') === 'dc2370253c17fe69445af313af0113a31f244cc51324e5a3b4b0b98804f91a6f'
    }

    /**
     * New metadata has been set for an item.
     */
    get asV12(): {collection: number, item: number, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesOwnerChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.OwnerChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The owner changed.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.OwnerChanged') === '7f21331ba73970553e198c5598e55e9857317b38adaa7f293e914882bdd7385c'
    }

    /**
     * The owner changed.
     */
    get asV10(): {class: number, newOwner: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The owner changed.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.OwnerChanged') === '0331b0b161c2f2db690f574540ade7765af19f5306dc65443561fbaa5825f323'
    }

    /**
     * The owner changed.
     */
    get asV12(): {collection: number, newOwner: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesOwnershipAcceptanceChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.OwnershipAcceptanceChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Ownership acceptance has changed for an account.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.OwnershipAcceptanceChanged') === '78fde0ff8f56c4ebcc47231a34e394471cbf03f4b56f9fa6854cecafab37242d'
    }

    /**
     * Ownership acceptance has changed for an account.
     */
    get asV10(): {who: Uint8Array, maybeClass: (number | undefined)} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Ownership acceptance has changed for an account.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.OwnershipAcceptanceChanged') === '62f0a146ea419b03ef3bb5c912782af0253639ca8fc47ff318396bedef2230cc'
    }

    /**
     * Ownership acceptance has changed for an account.
     */
    get asV12(): {who: Uint8Array, maybeCollection: (number | undefined)} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesRedepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.Redeposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been cleared for an asset instance.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.Redeposited') === 'ab7630b42f0e99373b62e873830bf27119e144491d7e3911bce5f8dfb9a192a7'
    }

    /**
     * Metadata has been cleared for an asset instance.
     */
    get asV10(): {class: number, successfulInstances: number[]} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Metadata has been cleared for an item.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.Redeposited') === '70f14fe636bd1b76d1a88293efdde92045851e8b866eeae6e7f8fb48665cdb41'
    }

    /**
     * Metadata has been cleared for an item.
     */
    get asV12(): {collection: number, successfulItems: number[]} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesTeamChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.TeamChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The management team changed.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.TeamChanged') === 'ed55b7c512c680f9a9b8f35a0e603e101cd439e8b1c07373e1b6b2ca40d032f7'
    }

    /**
     * The management team changed.
     */
    get asV10(): {class: number, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The management team changed.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.TeamChanged') === '152cd89e42995f09fd841e2eeec18a6a0ca02740e481dc98e45b182742b5172e'
    }

    /**
     * The management team changed.
     */
    get asV12(): {collection: number, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.Thawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some asset `instance` was thawed.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.Thawed') === '4aec04ec96e3cd667bd16926634d063c18da9922e4d645f33692574e196c20dc'
    }

    /**
     * Some asset `instance` was thawed.
     */
    get asV10(): {class: number, instance: number} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some `item` was thawed.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.Thawed') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
    }

    /**
     * Some `item` was thawed.
     */
    get asV12(): {collection: number, item: number} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset `instance` was transferred.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Uniques.Transferred') === '62805427bf03dcd5763c135e667e4d08319c26623a7eecd16e8463cac99132b0'
    }

    /**
     * An asset `instance` was transferred.
     */
    get asV10(): {class: number, instance: number, from: Uint8Array, to: Uint8Array} {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An `item` was transferred.
     */
    get isV12(): boolean {
        return this._chain.getEventHash('Uniques.Transferred') === 'ac8c1c5a1df2a464e3447d13d6c43a813112a33c144f93775b934b08c086bf7a'
    }

    /**
     * An `item` was transferred.
     */
    get asV12(): {collection: number, item: number, from: Uint8Array, to: Uint8Array} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class UsaReserveDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'UsaReserve.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV1(): boolean {
        return this._chain.getEventHash('UsaReserve.Deposit') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV1(): bigint {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class UsaReserveReserveOpEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'UsaReserve.ReserveOp')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get isV1(): boolean {
        return this._chain.getEventHash('UsaReserve.ReserveOp') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get asV1(): v1.Type_33 {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get isV6(): boolean {
        return this._chain.getEventHash('UsaReserve.ReserveOp') === 'c3fae614e01b83e1491e1f4dd26a9fc0a64f042782ad0f4180f8fce328c20bea'
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get asV6(): v6.Type_31 {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get isV10(): boolean {
        return this._chain.getEventHash('UsaReserve.ReserveOp') === '51f568e2b2910e39c170c98a461f30e984bb6a9c853df3e7a86b3caedf94d002'
    }

    /**
     * We executed a call coming from the company reserve account
     */
    get asV10(): v10.Type_32 {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }
}

export class UsaReserveSpentFundsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'UsaReserve.SpentFunds')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds were spent from the reserve.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('UsaReserve.SpentFunds') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some funds were spent from the reserve.
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class UsaReserveTipReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'UsaReserve.TipReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone tipped the company reserve
     */
    get isV1(): boolean {
        return this._chain.getEventHash('UsaReserve.TipReceived') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Someone tipped the company reserve
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
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
    get isV12(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asV12(): null {
        assert(this.isV12)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '8676c6dc6a22410c7ddbc9f34f71e25e9bc1f7237c98ea59385020ce26129067'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV6(): {index: number, error: v6.DispatchError} {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV10(): {index: number, error: v10.DispatchError} {
        assert(this.isV10)
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
    get isV6(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '123f6c35bbf8bd8d1cc0ada05ce8ad9758b8462076e62ae91382a7270c95ff10'
    }

    /**
     * A call was dispatched.
     */
    get asV6(): {result: v6.Type_31} {
        assert(this.isV6)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A call was dispatched.
     */
    get asV10(): {result: v10.Type_32} {
        assert(this.isV10)
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
    get isV12(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV12(): {error: v12.DispatchError} {
        assert(this.isV12)
        return this._chain.decodeEvent(this.event)
    }
}

export class ValidatorsSetDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ValidatorsSet.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Phantom member, never used.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ValidatorsSet.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Phantom member, never used.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class ValidatorsSetKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ValidatorsSet.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * One of the members' keys changed.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ValidatorsSet.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * One of the members' keys changed.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class ValidatorsSetMemberAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ValidatorsSet.MemberAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ValidatorsSet.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class ValidatorsSetMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ValidatorsSet.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ValidatorsSet.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class ValidatorsSetMembersResetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ValidatorsSet.MembersReset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ValidatorsSet.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class ValidatorsSetMembersSwappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ValidatorsSet.MembersSwapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get isV1(): boolean {
        return this._chain.getEventHash('ValidatorsSet.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get asV1(): null {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestingClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Vesting.Claimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Claimed vesting \[who, locked_amount\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Vesting.Claimed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Claimed vesting \[who, locked_amount\]
     */
    get asV1(): [Uint8Array, bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestingVestingOverwrittenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Vesting.VestingOverwritten')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Overwritting vesting schedules \[who, vesting_schedules, locked_amount\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Vesting.VestingOverwritten') === '9b025f3e3c3492c4ec1ffd79892c017a920ab4ff7b88b3d979b4d941b0d2cb20'
    }

    /**
     * Overwritting vesting schedules \[who, vesting_schedules, locked_amount\]
     */
    get asV1(): [Uint8Array, v1.VestingSchedule[], bigint] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestingVestingScheduleAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Vesting.VestingScheduleAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Added new vesting schedule \[from, to, vesting_schedule\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Vesting.VestingScheduleAdded') === 'eedf11caf3aeb2a205374720934d127f951ff731579535c4783794a0a51a3498'
    }

    /**
     * Added new vesting schedule \[from, to, vesting_schedule\]
     */
    get asV1(): [Uint8Array, Uint8Array, v1.VestingSchedule] {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestingVestingSchedulesCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Vesting.VestingSchedulesCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Canceled all vesting schedules \[who\]
     */
    get isV1(): boolean {
        return this._chain.getEventHash('Vesting.VestingSchedulesCanceled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Canceled all vesting schedules \[who\]
     */
    get asV1(): Uint8Array {
        assert(this.isV1)
        return this._chain.decodeEvent(this.event)
    }
}
