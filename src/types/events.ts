import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v5 from './v5'
import * as v8 from './v8'
import * as v10 from './v10'

export class AuthorityAuthorizedCallEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Authority.AuthorizedCall')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A call is authorized. \[hash, caller\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Authority.AuthorizedCall') === 'f5c1b1c7cf398440dc62ec744a8041a558e574204ed3d6651dddffa28114feda'
    }

    /**
     *  A call is authorized. \[hash, caller\]
     */
    get asV8(): [Uint8Array, (Uint8Array | undefined)] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorityCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Authority.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A scheduled call is cancelled. [origin, index]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Authority.Cancelled') === 'bc894d0ced6b09cc7f73056bae8b17c72cc6e7c4290d8a9c02033452f0fbfc91'
    }

    /**
     *  A scheduled call is cancelled. [origin, index]
     */
    get asV5(): [v5.PalletsOrigin, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorityDelayedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Authority.Delayed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A scheduled call is delayed. [origin, index, when]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Authority.Delayed') === 'd29ebfc7032e6fe29e60f69d3236d28eefded6fda7820314610be38a6e6476aa'
    }

    /**
     *  A scheduled call is delayed. [origin, index, when]
     */
    get asV5(): [v5.PalletsOrigin, number, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorityDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Authority.Dispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A call is dispatched. [result]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Authority.Dispatched') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A call is dispatched. [result]
     */
    get asV5(): v5.DispatchResult {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorityFastTrackedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Authority.FastTracked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A scheduled call is fast tracked. [origin, index, when]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Authority.FastTracked') === 'd29ebfc7032e6fe29e60f69d3236d28eefded6fda7820314610be38a6e6476aa'
    }

    /**
     *  A scheduled call is fast tracked. [origin, index, when]
     */
    get asV5(): [v5.PalletsOrigin, number, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorityRemovedAuthorizedCallEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Authority.RemovedAuthorizedCall')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An authorized call was removed. \[hash\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Authority.RemovedAuthorizedCall') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An authorized call was removed. \[hash\]
     */
    get asV8(): Uint8Array {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorityScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Authority.Scheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A call is scheduled. [origin, index]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Authority.Scheduled') === 'bc894d0ced6b09cc7f73056bae8b17c72cc6e7c4290d8a9c02033452f0fbfc91'
    }

    /**
     *  A call is scheduled. [origin, index]
     */
    get asV5(): [v5.PalletsOrigin, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuthorityTriggeredCallByEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Authority.TriggeredCallBy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An authorized call was triggered. \[hash, caller\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Authority.TriggeredCallBy') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  An authorized call was triggered. \[hash, caller\]
     */
    get asV8(): [Uint8Array, Uint8Array] {
        assert(this.isV8)
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
     *  A balance was set by root. \[who, free, reserved\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    get asV5(): [Uint8Array, bigint, bigint] {
        assert(this.isV5)
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
     *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  resulting in an outright loss. \[account, balance\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss. \[account, balance\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  An account was created with some free balance. \[account, free_balance\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was created with some free balance. \[account, free_balance\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  \[from, to, balance, destination_status\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '68e9ec5664c8ffe977da0c890bac43122a5cf13565c1c936e2120ba4980bcf31'
    }

    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     *  \[from, to, balance, destination_status\]
     */
    get asV5(): [Uint8Array, Uint8Array, bigint, v5.BalanceStatus] {
        assert(this.isV5)
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
     *  Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  Transfer succeeded. \[from, to, value\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    get asV5(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV5)
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
     *  Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrenciesBalanceUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currencies.BalanceUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Update balance success. [currency_id, who, amount]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Currencies.BalanceUpdated') === '255affc24ec82c9d452be222eea90ab2524da9472e9e6771a288062c6f60e9c3'
    }

    /**
     *  Update balance success. [currency_id, who, amount]
     */
    get asV5(): [v5.CurrencyIdOf, Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrenciesDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currencies.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Deposit success. [currency_id, who, amount]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Currencies.Deposited') === '22ae993b7195394790f9bc999b9c363bf7670a6857fa73788e04aaad4a1763d9'
    }

    /**
     *  Deposit success. [currency_id, who, amount]
     */
    get asV5(): [v5.CurrencyIdOf, Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrenciesTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currencies.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Currency transfer success. [currency_id, from, to, amount]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Currencies.Transferred') === 'd4c4ab46b6c9788f079a4f0c3d5f463c1c5cea1fcb29e8000373c6d0a171510f'
    }

    /**
     *  Currency transfer success. [currency_id, from, to, amount]
     */
    get asV5(): [v5.CurrencyIdOf, Uint8Array, Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class CurrenciesWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Currencies.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Withdraw success. [currency_id, who, amount]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Currencies.Withdrawn') === '22ae993b7195394790f9bc999b9c363bf7670a6857fa73788e04aaad4a1763d9'
    }

    /**
     *  Withdraw success. [currency_id, who, amount]
     */
    get asV5(): [v5.CurrencyIdOf, Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmAddStorageQuotaEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.AddStorageQuota')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A quota has been added at a given address. \[address, bytes\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.AddStorageQuota') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
    }

    /**
     *  A quota has been added at a given address. \[address, bytes\]
     */
    get asV5(): [Uint8Array, number] {
        assert(this.isV5)
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
     *  A deposit has been made at a given address. \[sender, address,
     *  value\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.BalanceDeposit') === 'd9b1f7a4397a223baaf288e10404ee5442e38bc06f4d40d247036102327f164e'
    }

    /**
     *  A deposit has been made at a given address. \[sender, address,
     *  value\]
     */
    get asV5(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV5)
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
     *  A withdrawal has been made from a given address. \[sender, address,
     *  value\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.BalanceWithdraw') === 'd9b1f7a4397a223baaf288e10404ee5442e38bc06f4d40d247036102327f164e'
    }

    /**
     *  A withdrawal has been made from a given address. \[sender, address,
     *  value\]
     */
    get asV5(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmCanceledTransferMaintainerEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.CanceledTransferMaintainer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Canceled the transfer maintainer. \[contract, address\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.CanceledTransferMaintainer') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
    }

    /**
     *  Canceled the transfer maintainer. \[contract, address\]
     */
    get asV5(): [Uint8Array, Uint8Array] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmConfirmedTransferMaintainerEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.ConfirmedTransferMaintainer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Confirmed the transfer maintainer. \[contract, address\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.ConfirmedTransferMaintainer') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
    }

    /**
     *  Confirmed the transfer maintainer. \[contract, address\]
     */
    get asV5(): [Uint8Array, Uint8Array] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmContractDeployedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.ContractDeployed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Deployed contract. \[contract\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.ContractDeployed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     *  Deployed contract. \[contract\]
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmContractDevelopmentDisabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.ContractDevelopmentDisabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Disabled contract development. \[who\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.ContractDevelopmentDisabled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Disabled contract development. \[who\]
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmContractDevelopmentEnabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.ContractDevelopmentEnabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Enabled contract development. \[who\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.ContractDevelopmentEnabled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Enabled contract development. \[who\]
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmContractSelfdestructedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.ContractSelfdestructed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Selfdestructed contract code. \[contract\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.ContractSelfdestructed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     *  Selfdestructed contract code. \[contract\]
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  Selfdestructed contract code. \[caller, contract\]
     */
    get isV10(): boolean {
        return this._chain.getEventHash('EVM.ContractSelfdestructed') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
    }

    /**
     *  Selfdestructed contract code. \[caller, contract\]
     */
    get asV10(): [Uint8Array, Uint8Array] {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmContractSetCodeEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.ContractSetCode')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Set contract code. \[contract\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.ContractSetCode') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     *  Set contract code. \[contract\]
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.Created') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     *  A contract has been created at given \[address\].
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A new contract has been created. \[maintainer, contract, (gas_used, storage_used)\].
     */
    get isV10(): boolean {
        return this._chain.getEventHash('EVM.Created') === 'e7b0c2839ff095fe041ab683e763a166c4aa170aa7996073dd0aff5561c7f23e'
    }

    /**
     *  A new contract has been created. \[maintainer, contract, (gas_used, storage_used)\].
     */
    get asV10(): [Uint8Array, Uint8Array, [bigint, number]] {
        assert(this.isV10)
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
     *  A contract was attempted to be created, but the execution failed.
     *  \[contract, exit_reason, output\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.CreatedFailed') === '7c6daf3cdfd2d50d065af803c31ae842479c433e613a902d67b8de3f4aa9302e'
    }

    /**
     *  A contract was attempted to be created, but the execution failed.
     *  \[contract, exit_reason, output\]
     */
    get asV5(): [Uint8Array, v5.ExitReason, Uint8Array] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A contract was attempted to be created, but the execution failed.
     *  \[maintainer, contract, exit_reason, output, (gas_used, storage_used)\]
     */
    get isV10(): boolean {
        return this._chain.getEventHash('EVM.CreatedFailed') === 'fb5c28a811d5fb0151c680a2f0d0ad43e62fb79cb9a63618bf9be8551bcaf4ca'
    }

    /**
     *  A contract was attempted to be created, but the execution failed.
     *  \[maintainer, contract, exit_reason, output, (gas_used, storage_used)\]
     */
    get asV10(): [Uint8Array, Uint8Array, v10.ExitReason, Uint8Array, [bigint, number]] {
        assert(this.isV10)
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
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.Executed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
    }

    /**
     *  A \[contract\] has been executed successfully with states applied.
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A \[caller, contract, (gas_used, storage_used)\] has been executed successfully with states applied.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('EVM.Executed') === 'e7b0c2839ff095fe041ab683e763a166c4aa170aa7996073dd0aff5561c7f23e'
    }

    /**
     *  A \[caller, contract, (gas_used, storage_used)\] has been executed successfully with states applied.
     */
    get asV10(): [Uint8Array, Uint8Array, [bigint, number]] {
        assert(this.isV10)
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
     *  A contract has been executed with errors. States are reverted with
     *  only gas fees applied. \[contract, exit_reason, output\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.ExecutedFailed') === '7c6daf3cdfd2d50d065af803c31ae842479c433e613a902d67b8de3f4aa9302e'
    }

    /**
     *  A contract has been executed with errors. States are reverted with
     *  only gas fees applied. \[contract, exit_reason, output\]
     */
    get asV5(): [Uint8Array, v5.ExitReason, Uint8Array] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A contract has been executed with errors. States are reverted with
     *  only gas fees applied. \[caller, contract, exit_reason, output, (gas_used, storage_used)\]
     */
    get isV10(): boolean {
        return this._chain.getEventHash('EVM.ExecutedFailed') === 'fb5c28a811d5fb0151c680a2f0d0ad43e62fb79cb9a63618bf9be8551bcaf4ca'
    }

    /**
     *  A contract has been executed with errors. States are reverted with
     *  only gas fees applied. \[caller, contract, exit_reason, output, (gas_used, storage_used)\]
     */
    get asV10(): [Uint8Array, Uint8Array, v10.ExitReason, Uint8Array, [bigint, number]] {
        assert(this.isV10)
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
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.Log') === '9d15dce6e6d818eeb73a868dd136a22667fbfdd27463a338b39cabae62aa4a12'
    }

    /**
     *  Ethereum events from contracts.
     */
    get asV5(): v5.EvmLog {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmRejectedTransferMaintainerEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.RejectedTransferMaintainer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Rejected the transfer maintainer. \[contract, address\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.RejectedTransferMaintainer') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
    }

    /**
     *  Rejected the transfer maintainer. \[contract, address\]
     */
    get asV5(): [Uint8Array, Uint8Array] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmRemoveStorageQuotaEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.RemoveStorageQuota')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A quota has been removed at a given address. \[address, bytes\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.RemoveStorageQuota') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
    }

    /**
     *  A quota has been removed at a given address. \[address, bytes\]
     */
    get asV5(): [Uint8Array, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmTransferredMaintainerEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EVM.TransferredMaintainer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Transferred maintainer. \[contract, address\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EVM.TransferredMaintainer') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
    }

    /**
     *  Transferred maintainer. \[contract, address\]
     */
    get asV5(): [Uint8Array, Uint8Array] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class EvmAccountsClaimAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'EvmAccounts.ClaimAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Mapping between Substrate accounts and EVM accounts
     *  claim account. \[account_id, evm_address\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('EvmAccounts.ClaimAccount') === '1bbfbed2a18ed1015b346a5cabe70b9114a6caa07967174382e901a12e1ea17f'
    }

    /**
     *  Mapping between Substrate accounts and EVM accounts
     *  claim account. \[account_id, evm_address\]
     */
    get asV5(): [Uint8Array, Uint8Array] {
        assert(this.isV5)
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
     *  New authority set has been applied. \[authority_set\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'a1a8c88e19b8fedde4aab1bef41aa9e1bdfc3748b1e39f7ad5bb09d0347d9505'
    }

    /**
     *  New authority set has been applied. \[authority_set\]
     */
    get asV5(): [Uint8Array, bigint][] {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Current authority set has been paused.
     */
    get asV5(): null {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Current authority set has been resumed.
     */
    get asV5(): null {
        assert(this.isV5)
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
     *  A name was cleared, and the given balance returned. \[who, deposit\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was cleared, and the given balance returned. \[who, deposit\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  A name was removed and the given balance slashed. \[who, deposit\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was removed and the given balance slashed. \[who, deposit\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  A name was set or reset (which will remove all judgements). \[who\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A name was set or reset (which will remove all judgements). \[who\]
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
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
     *  A judgement was given by a registrar. \[target, registrar_index\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement was given by a registrar. \[target, registrar_index\]
     */
    get asV5(): [Uint8Array, number] {
        assert(this.isV5)
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
     *  A judgement was asked from a registrar. \[who, registrar_index\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement was asked from a registrar. \[who, registrar_index\]
     */
    get asV5(): [Uint8Array, number] {
        assert(this.isV5)
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
     *  A judgement request was retracted. \[who, registrar_index\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement request was retracted. \[who, registrar_index\]
     */
    get asV5(): [Uint8Array, number] {
        assert(this.isV5)
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
     *  A registrar was added. \[registrar_index\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A registrar was added. \[registrar_index\]
     */
    get asV5(): number {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
     */
    get asV5(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was removed from an identity and the deposit freed.
     *  \[sub, main, deposit\]
     */
    get asV5(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity was cleared, and the given deposit repatriated from the
     *  main identity account to the sub-identity account. \[sub, main, deposit\]
     */
    get asV5(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getEventHash('ImOnline.AllGood') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  At the end of the session, no offence was committed.
     */
    get asV5(): null {
        assert(this.isV5)
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
     *  A new heartbeat was received from `AuthorityId` \[authority_id\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('ImOnline.HeartbeatReceived') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new heartbeat was received from `AuthorityId` \[authority_id\]
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
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
     *  At the end of the session, at least one validator was found to be \[offline\].
     */
    get isV5(): boolean {
        return this._chain.getEventHash('ImOnline.SomeOffline') === '15e6fe82a6ae2efb2b8a5fb32d03f1140dda1d88a982e280ae917cb281bd63e1'
    }

    /**
     *  At the end of the session, at least one validator was found to be \[offline\].
     */
    get asV5(): [Uint8Array, v5.FullIdentification][] {
        assert(this.isV5)
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
     *  A account index was assigned. \[index, who\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Indices.IndexAssigned') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A account index was assigned. \[index, who\]
     */
    get asV5(): [Uint8Array, number] {
        assert(this.isV5)
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
     *  A account index has been freed up (unassigned). \[index\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Indices.IndexFreed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A account index has been freed up (unassigned). \[index\]
     */
    get asV5(): number {
        assert(this.isV5)
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
     *  A account index has been frozen to its current account ID. \[index, who\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Indices.IndexFrozen') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  A account index has been frozen to its current account ID. \[index, who\]
     */
    get asV5(): [number, Uint8Array] {
        assert(this.isV5)
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
     *  A multisig operation has been approved by someone.
     *  \[approving, timepoint, multisig, call_hash\]
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     *  A multisig operation has been approved by someone.
     *  \[approving, timepoint, multisig, call_hash\]
     */
    get asV10(): [Uint8Array, v10.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV10)
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
     *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
     */
    get asV10(): [Uint8Array, v10.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV10)
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
     *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === 'e368973d939e86d8e4639ec21b8ed877b5a6772f4da0bad0d4fe5df98c063ad2'
    }

    /**
     *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
     */
    get asV10(): [Uint8Array, v10.Timepoint, Uint8Array, Uint8Array, v10.DispatchResult] {
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
     *  A new multisig operation has begun. \[approving, multisig, call_hash\]
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     *  A new multisig operation has begun. \[approving, multisig, call_hash\]
     */
    get asV10(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV10)
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
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false)
     *  \[kind, timeslot, applied\].
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Offences.Offence') === '18f4beafc9fe74427abdec4798ff1f921e7eef3c6cdea8f8dc175b766343d5be'
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false)
     *  \[kind, timeslot, applied\].
     */
    get asV5(): [Uint8Array, Uint8Array, boolean] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
     *  \[kind, timeslot\].
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Offences.Offence') === 'fca31d079a02b9c3ee63d19bf39a4c783da99a317cdf2920b6c29e7d7d3d0518'
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
     *  \[kind, timeslot\].
     */
    get asV8(): [Uint8Array, Uint8Array] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }
}

export class PocBondWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Poc.BondWithdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Bond has been withdrawn
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Poc.BondWithdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Bond has been withdrawn
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class PocCandidateAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Poc.CandidateAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Start candidacy
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Poc.CandidateAdded') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Start candidacy
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class PocCandidateRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Poc.CandidateRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Stop candidacy
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Poc.CandidateRemoved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Stop candidacy
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class PocCommittedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Poc.Committed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Created a new committment
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Poc.Committed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Created a new committment
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class PocElectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Poc.Elected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Era, Winner,Weight
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Poc.Elected') === '491d5eb10503fbf716b3399d749f1a02c0a60c5f903a500a8ed4f9f98fd07f34'
    }

    /**
     *  Era, Winner,Weight
     */
    get asV5(): [number, Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class PocFundsAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Poc.FundsAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Add more funds to existing commitment
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Poc.FundsAdded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Add more funds to existing commitment
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class PocUnbondingStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Poc.UnbondingStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The user has started the unbonding process
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Poc.UnbondingStarted') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The user has started the unbonding process
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class PocVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Poc.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Voter,Candidate,VotingPower
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Poc.Voted') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Voter,Candidate,VotingPower
     */
    get asV5(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class PocVoterRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Poc.VoterRewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Voter,Reward
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Poc.VoterRewarded') === '491d5eb10503fbf716b3399d749f1a02c0a60c5f903a500a8ed4f9f98fd07f34'
    }

    /**
     *  Voter,Reward
     */
    get asV5(): [number, Uint8Array, bigint] {
        assert(this.isV5)
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
     *  Canceled some task. \[when, index\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     *  Canceled some task. \[when, index\]
     */
    get asV5(): [number, number] {
        assert(this.isV5)
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
     *  Dispatched some task. \[task, id, result\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '8932a074b1c2cd5ce9792be58d56c1325be1d704098dac81f23ff6804e2d5fee'
    }

    /**
     *  Dispatched some task. \[task, id, result\]
     */
    get asV5(): [[number, number], (Uint8Array | undefined), v5.DispatchResult] {
        assert(this.isV5)
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
     *  Scheduled some task. \[when, index\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     *  Scheduled some task. \[when, index\]
     */
    get asV5(): [number, number] {
        assert(this.isV5)
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
     *  New session has happened. Note that the argument is the \[session_index\], not the block
     *  number as the type might suggest.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New session has happened. Note that the argument is the \[session_index\], not the block
     *  number as the type might suggest.
     */
    get asV5(): number {
        assert(this.isV5)
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
     *  An account has bonded this amount. \[stash, amount\]
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has bonded this amount. \[stash, amount\]
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  An account has stopped participating as either a validator or nominator.
     *  \[stash\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account has stopped participating as either a validator or nominator.
     *  \[stash\]
     */
    get asV8(): Uint8Array {
        assert(this.isV8)
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
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === '1b75f96f7f74feed246668e0244abf707060018d56d88b1a638f75594d2a8005'
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    get asV8(): [number, bigint, bigint] {
        assert(this.isV8)
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
     *  \[era_index, validator_payout, remainder\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Staking.EraPayout') === '1b75f96f7f74feed246668e0244abf707060018d56d88b1a638f75594d2a8005'
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    get asV5(): [number, bigint, bigint] {
        assert(this.isV5)
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
     *  A nominator has been kicked from a validator. \[nominator, stash\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  A nominator has been kicked from a validator. \[nominator, stash\]
     */
    get asV5(): [Uint8Array, Uint8Array] {
        assert(this.isV5)
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
     *  not be processed. \[session_index\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Staking.OldSlashingReportDiscarded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  An old slashing report from a prior era was discarded because it could
     *  not be processed. \[session_index\]
     */
    get asV5(): number {
        assert(this.isV5)
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
     *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get asV8(): [number, Uint8Array] {
        assert(this.isV8)
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
     *  The staker has been rewarded by this amount. \[stash, amount\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Staking.Reward') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The staker has been rewarded by this amount. \[stash, amount\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get asV8(): [Uint8Array, bigint] {
        assert(this.isV8)
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
     *  \[validator, amount\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Staking.Slash') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    get asV8(): [Uint8Array, bigint] {
        assert(this.isV8)
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
     *  A new solution for the upcoming election has been stored. \[compute\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Staking.SolutionStored') === '0bf020e543ea88729b1b61dbeb14181ab6acba99a0e1795514718dacf33fb459'
    }

    /**
     *  A new solution for the upcoming election has been stored. \[compute\]
     */
    get asV5(): v5.ElectionCompute {
        assert(this.isV5)
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
     *  A new set of stakers was elected.
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Staking.StakersElected') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  A new set of stakers was elected.
     */
    get asV8(): null {
        assert(this.isV8)
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
     *  A new set of stakers was elected with the given \[compute\].
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Staking.StakingElection') === '0bf020e543ea88729b1b61dbeb14181ab6acba99a0e1795514718dacf33fb459'
    }

    /**
     *  A new set of stakers was elected with the given \[compute\].
     */
    get asV5(): v5.ElectionCompute {
        assert(this.isV5)
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
     *  The election failed. No new era is planned.
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Staking.StakingElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The election failed. No new era is planned.
     */
    get asV8(): null {
        assert(this.isV8)
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
     *  An account has unbonded this amount. \[stash, amount\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has unbonded this amount. \[stash, amount\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  from the unlocking queue. \[stash, amount\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue. \[stash, amount\]
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
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
     *  The \[sudoer\] just switched identity; the old key is supplied.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The \[sudoer\] just switched identity; the old key is supplied.
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
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
     *  A sudo just took place. \[result\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get asV5(): v5.DispatchResult {
        assert(this.isV5)
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
     *  A sudo just took place. \[result\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get asV5(): v5.DispatchResult {
        assert(this.isV5)
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
    get isV5(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  `:code` was updated.
     */
    get asV5(): null {
        assert(this.isV5)
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
     *  An extrinsic failed. \[error, info\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '09be5714d55bec634be0e5bf6ca98e24886f3a530b5649b618b20e4514550b91'
    }

    /**
     *  An extrinsic failed. \[error, info\]
     */
    get asV5(): [v5.DispatchError, v5.DispatchInfo] {
        assert(this.isV5)
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
     *  An extrinsic completed successfully. \[info\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
    }

    /**
     *  An extrinsic completed successfully. \[info\]
     */
    get asV5(): v5.DispatchInfo {
        assert(this.isV5)
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
     *  An \[account\] was reaped.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An \[account\] was reaped.
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
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
     *  A new \[account\] was created.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new \[account\] was created.
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
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
     *  On on-chain remark happened. \[origin, remark_hash\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  On on-chain remark happened. \[origin, remark_hash\]
     */
    get asV8(): [Uint8Array, Uint8Array] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCouncilApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCouncil.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('TechCouncil.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCouncilClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCouncil.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('TechCouncil.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    get asV5(): [Uint8Array, number, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCouncilDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCouncil.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('TechCouncil.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCouncilExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCouncil.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('TechCouncil.Executed') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get asV5(): [Uint8Array, v5.DispatchResult] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCouncilMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCouncil.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A single member did some action; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('TechCouncil.MemberExecuted') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A single member did some action; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    get asV5(): [Uint8Array, v5.DispatchResult] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCouncilProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCouncil.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('TechCouncil.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    get asV5(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechCouncilVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechCouncil.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('TechCouncil.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    get asV5(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensBalanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.BalanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === 'cbeeb2c2ffc52fdc45d5500bf96d68a3d2a0226dc21b2391d09a65af95cedfaa'
    }

    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    get asV8(): [v8.CurrencyId, Uint8Array, bigint, bigint] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensDustLostEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.DustLost')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account was removed whose balance was non-zero but below
     *  ExistentialDeposit, resulting in an outright loss. \[account,
     *  currency_id, amount\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Tokens.DustLost') === '5d920173fd0a04008feb118f6336d7996b0143a77b0da028d4bdf491af4a3791'
    }

    /**
     *  An account was removed whose balance was non-zero but below
     *  ExistentialDeposit, resulting in an outright loss. \[account,
     *  currency_id, amount\]
     */
    get asV5(): [Uint8Array, v5.CurrencyId, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  An account was removed whose balance was non-zero but below
     *  ExistentialDeposit, resulting in an outright loss. \[currency_id,
     *  account, balance\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Tokens.DustLost') === '22ae993b7195394790f9bc999b9c363bf7670a6857fa73788e04aaad4a1763d9'
    }

    /**
     *  An account was removed whose balance was non-zero but below
     *  ExistentialDeposit, resulting in an outright loss. \[currency_id,
     *  account, balance\]
     */
    get asV8(): [v8.CurrencyId, Uint8Array, bigint] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensEndowedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Endowed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account was created with some free balance. \[currency_id,
     *  account, free_balance\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Tokens.Endowed') === '22ae993b7195394790f9bc999b9c363bf7670a6857fa73788e04aaad4a1763d9'
    }

    /**
     *  An account was created with some free balance. \[currency_id,
     *  account, free_balance\]
     */
    get asV8(): [v8.CurrencyId, Uint8Array, bigint] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some balance was reserved (moved from free to reserved).
     *  \[currency_id, who, value\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Tokens.Reserved') === '22ae993b7195394790f9bc999b9c363bf7670a6857fa73788e04aaad4a1763d9'
    }

    /**
     *  Some balance was reserved (moved from free to reserved).
     *  \[currency_id, who, value\]
     */
    get asV8(): [v8.CurrencyId, Uint8Array, bigint] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Transfer succeeded. \[currency_id, from, to, value\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === 'd4c4ab46b6c9788f079a4f0c3d5f463c1c5cea1fcb29e8000373c6d0a171510f'
    }

    /**
     *  Transfer succeeded. \[currency_id, from, to, value\]
     */
    get asV8(): [v8.CurrencyId, Uint8Array, Uint8Array, bigint] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Token transfer success. \[currency_id, from, to, amount\]
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Tokens.Transferred') === 'd4c4ab46b6c9788f079a4f0c3d5f463c1c5cea1fcb29e8000373c6d0a171510f'
    }

    /**
     *  Token transfer success. \[currency_id, from, to, amount\]
     */
    get asV5(): [v5.CurrencyId, Uint8Array, Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some balance was unreserved (moved from reserved to free).
     *  \[currency_id, who, value\]
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Tokens.Unreserved') === '22ae993b7195394790f9bc999b9c363bf7670a6857fa73788e04aaad4a1763d9'
    }

    /**
     *  Some balance was unreserved (moved from reserved to free).
     *  \[currency_id, who, value\]
     */
    get asV8(): [v8.CurrencyId, Uint8Array, bigint] {
        assert(this.isV8)
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
    get isV10(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Batch of dispatches completed fully with no error.
     */
    get asV10(): null {
        assert(this.isV10)
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
     *  well as the error. \[index, error\]
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === 'acf646b5aabc17d1d9bbcec046f84450721211384188c038f062a8174d381ca2'
    }

    /**
     *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     *  well as the error. \[index, error\]
     */
    get asV10(): [number, v10.DispatchError] {
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
     *  A single item within a Batch of dispatches has completed with no error.
     */
    get isV10(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  A single item within a Batch of dispatches has completed with no error.
     */
    get asV10(): null {
        assert(this.isV10)
        return this._chain.decodeEvent(this.event)
    }
}
