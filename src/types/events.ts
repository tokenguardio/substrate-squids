import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v100 from './v100'
import * as v104 from './v104'
import * as v108 from './v108'
import * as v115 from './v115'
import * as v138 from './v138'

export class AssetRegistryLocationSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetRegistry.LocationSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Native location set for an asset. \[asset_id, location\]
     */
    get isV108(): boolean {
        return this._chain.getEventHash('AssetRegistry.LocationSet') === '1797fb5d617accd6837fea7d8db938bccd6e290df300ad1756fe5fd2ad57794b'
    }

    /**
     * Native location set for an asset. \[asset_id, location\]
     */
    get asV108(): [number, v108.AssetLocation] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Native location set for an asset.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('AssetRegistry.LocationSet') === 'cb64e0569ed096dd70dc89ce4c0cffe3c6213a0117589ee8a65dbbd51f57caaa'
    }

    /**
     * Native location set for an asset.
     */
    get asV115(): {assetId: number, location: v115.AssetLocation} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetRegistryMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetRegistry.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata set for an asset. \[asset_id, symbol, decimals\]
     */
    get isV108(): boolean {
        return this._chain.getEventHash('AssetRegistry.MetadataSet') === 'cad7da1bfdc997e45555af3932618a9edaf0bdcedd143aba212bd33a734a2ff9'
    }

    /**
     * Metadata set for an asset. \[asset_id, symbol, decimals\]
     */
    get asV108(): [number, Uint8Array, number] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Metadata set for an asset.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('AssetRegistry.MetadataSet') === '5733a2ab6f544e91ef9651644e4a8f3fc7257fa3a961ba51dd1f0c862b7a7a0a'
    }

    /**
     * Metadata set for an asset.
     */
    get asV115(): {assetId: number, symbol: Uint8Array, decimals: number} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetRegistryRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetRegistry.Registered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Asset was registered. \[asset_id, name, type\]
     */
    get isV108(): boolean {
        return this._chain.getEventHash('AssetRegistry.Registered') === '510495ed7e324b369098067e61ab7fafe595b625beb491dd78b4bef707e70be0'
    }

    /**
     * Asset was registered. \[asset_id, name, type\]
     */
    get asV108(): [number, Uint8Array, v108.AssetType] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Asset was registered.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('AssetRegistry.Registered') === '630ef237faec740bf89f2ba6fec4038447ad86f6dfd1d9b5df4dcfdd30d82d78'
    }

    /**
     * Asset was registered.
     */
    get asV115(): {assetId: number, assetName: Uint8Array, assetType: v115.AssetType} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetRegistryUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetRegistry.Updated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Asset was updated. \[asset_id, name, type\]
     */
    get isV108(): boolean {
        return this._chain.getEventHash('AssetRegistry.Updated') === '510495ed7e324b369098067e61ab7fafe595b625beb491dd78b4bef707e70be0'
    }

    /**
     * Asset was updated. \[asset_id, name, type\]
     */
    get asV108(): [number, Uint8Array, v108.AssetType] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Asset was updated.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('AssetRegistry.Updated') === '630ef237faec740bf89f2ba6fec4038447ad86f6dfd1d9b5df4dcfdd30d82d78'
    }

    /**
     * Asset was updated.
     */
    get asV115(): {assetId: number, assetName: Uint8Array, assetType: v115.AssetType} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     * A balance was set by root. \[who, free, reserved\]
     */
    get asV100(): [Uint8Array, bigint, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
    }

    /**
     * A balance was set by root.
     */
    get asV104(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was deposited into the account (e.g. for transaction fees). \[who,
     * deposit\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV104(): {who: Uint8Array, amount: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss. \[account, balance\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV104(): {account: Uint8Array, amount: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * An account was created with some free balance. \[account, free_balance\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asV104(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '68e9ec5664c8ffe977da0c890bac43122a5cf13565c1c936e2120ba4980bcf31'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     * \[from, to, balance, destination_status\]
     */
    get asV100(): [Uint8Array, Uint8Array, bigint, v100.BalanceStatus] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV104(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v104.BalanceStatus} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV104(): {who: Uint8Array, amount: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior). \[who,
     * amount_slashed\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV104(): {who: Uint8Array, amount: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     * Transfer succeeded. \[from, to, value\]
     */
    get asV100(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV104(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV104(): {who: Uint8Array, amount: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV104(): {who: Uint8Array, amount: bigint} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class CircuitBreakerAddLiquidityLimitChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CircuitBreaker.AddLiquidityLimitChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Add liquidity limit of an asset was changed.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('CircuitBreaker.AddLiquidityLimitChanged') === '19d67bfb12558400c4e1ddc464e62f13be42caf6e4f53fb6dd8f59c03b34e7ad'
    }

    /**
     * Add liquidity limit of an asset was changed.
     */
    get asV138(): {assetId: number, liquidityLimit: ([number, number] | undefined)} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class CircuitBreakerRemoveLiquidityLimitChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CircuitBreaker.RemoveLiquidityLimitChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Remove liquidity limit of an asset was changed.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('CircuitBreaker.RemoveLiquidityLimitChanged') === '19d67bfb12558400c4e1ddc464e62f13be42caf6e4f53fb6dd8f59c03b34e7ad'
    }

    /**
     * Remove liquidity limit of an asset was changed.
     */
    get asV138(): {assetId: number, liquidityLimit: ([number, number] | undefined)} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class CircuitBreakerTradeVolumeLimitChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CircuitBreaker.TradeVolumeLimitChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Trade volume limit of an asset was changed.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('CircuitBreaker.TradeVolumeLimitChanged') === '6ea4f39aced23b5458a26fb63dd1593ddc121037c999f3d56c8f548e60a7e409'
    }

    /**
     * Trade volume limit of an asset was changed.
     */
    get asV138(): {assetId: number, tradeVolumeLimit: [number, number]} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsClaimEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.Claim')
        this._chain = ctx._chain
        this.event = event
    }

    get isV108(): boolean {
        return this._chain.getEventHash('Claims.Claim') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
    }

    get asV108(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorRewardsCollatorRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorRewards.CollatorRewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Collator was rewarded.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('CollatorRewards.CollatorRewarded') === 'a701c50fe07542a16f01609df72e3916756757a6306576ea2f08de2fe295dd90'
    }

    /**
     * Collator was rewarded.
     */
    get asV108(): {who: Uint8Array, amount: bigint, currency: number} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionCandidateAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.CandidateAdded')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('CollatorSelection.CandidateAdded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    get isV115(): boolean {
        return this._chain.getEventHash('CollatorSelection.CandidateAdded') === 'ba2022a97694b35bf4119d93cf1f9f270614aff290c97ed529225ca32df45f8a'
    }

    get asV115(): {accountId: Uint8Array, deposit: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionCandidateRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.CandidateRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('CollatorSelection.CandidateRemoved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    get isV115(): boolean {
        return this._chain.getEventHash('CollatorSelection.CandidateRemoved') === '4c99ef39b683041b136506afc1f762bdcd37f0231162345da388897a103d3710'
    }

    get asV115(): {accountId: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionNewCandidacyBondEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.NewCandidacyBond')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('CollatorSelection.NewCandidacyBond') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    get isV115(): boolean {
        return this._chain.getEventHash('CollatorSelection.NewCandidacyBond') === 'c1e41dad3e2e938a30a6e043071efd6f20574fa878a8043a120b11c1f28ed0fe'
    }

    get asV115(): {bondAmount: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionNewDesiredCandidatesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.NewDesiredCandidates')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('CollatorSelection.NewDesiredCandidates') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    get isV115(): boolean {
        return this._chain.getEventHash('CollatorSelection.NewDesiredCandidates') === 'f0a2b1451ce79defe5cc2f882fbd32834fc174fbd0c05020004cbd720a4aa77e'
    }

    get asV115(): {desiredCandidates: number} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorSelectionNewInvulnerablesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorSelection.NewInvulnerables')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('CollatorSelection.NewInvulnerables') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
    }

    get asV100(): Uint8Array[] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    get isV115(): boolean {
        return this._chain.getEventHash('CollatorSelection.NewInvulnerables') === '994c18897efc6a5b0e11aeb337b6c718ad03cb0eb182a442fc74b9c80dd56313'
    }

    get asV115(): {invulnerables: Uint8Array[]} {
        assert(this.isV115)
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
     * A motion was approved by the required threshold.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV108(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV108)
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
     * A motion was not approved by the required threshold.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Council.Executed') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV108(): {proposalHash: Uint8Array, result: v108.Type_28} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV115(): {proposalHash: Uint8Array, result: v115.Type_31} {
        assert(this.isV115)
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
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV108(): {proposalHash: Uint8Array, result: v108.Type_28} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV115(): {proposalHash: Uint8Array, result: v115.Type_31} {
        assert(this.isV115)
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
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV108(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV108)
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
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV108(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '155c7cce0948b8cb240d1401bb772a72b24567aa52618e9a4aaa84271c380044'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV108(): [Uint8Array, v108.V2Outcome] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get asV108(): Uint8Array {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV108(): Uint8Array {
        assert(this.isV108)
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
     * Update balance success.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Currencies.BalanceUpdated') === 'e92fa8fb5becc55b6f0dba72d56fdf98916f0ed6d78140338d060861948ef797'
    }

    /**
     * Update balance success.
     */
    get asV108(): {currencyId: number, who: Uint8Array, amount: bigint} {
        assert(this.isV108)
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
     * Deposit success.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Currencies.Deposited') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
    }

    /**
     * Deposit success.
     */
    get asV108(): {currencyId: number, who: Uint8Array, amount: bigint} {
        assert(this.isV108)
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
     * Currency transfer success.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Currencies.Transferred') === 'd02b411d552a8c2e6d90c70aa7f3ff856688d4b5e4a933253a8560ce04da6f04'
    }

    /**
     * Currency transfer success.
     */
    get asV108(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV108)
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
     * Withdraw success.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Currencies.Withdrawn') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
    }

    /**
     * Withdraw success.
     */
    get asV108(): {currencyId: number, who: Uint8Array, amount: bigint} {
        assert(this.isV108)
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
     * A proposal_hash has been blacklisted permanently.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
     * A referendum has been cancelled.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV108(): {refIndex: number} {
        assert(this.isV108)
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
     * An account has delegated their vote to another account.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
    }

    /**
     * An account has delegated their vote to another account.
     */
    get asV108(): {who: Uint8Array, target: Uint8Array} {
        assert(this.isV108)
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
     * A proposal has been enacted.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '1f8afbb40842c0eb231c4c0456dea31d665cbfc12f23138aebe104164e4f18dc'
    }

    /**
     * A proposal has been enacted.
     */
    get asV108(): {refIndex: number, result: v108.Type_28} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '957b797337eaa1f370b65a94f7685042cc04730ba165349e248cfdde80b53c25'
    }

    /**
     * A proposal has been enacted.
     */
    get asV115(): {refIndex: number, result: v115.Type_31} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An external proposal has been tabled.
     */
    get asV108(): null {
        assert(this.isV108)
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
     * A proposal has been rejected by referendum.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV108(): {refIndex: number} {
        assert(this.isV108)
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
     * A proposal has been approved by referendum.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asV108(): {refIndex: number} {
        assert(this.isV108)
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
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get asV108(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV108)
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
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get asV108(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV108)
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
     * A proposal's preimage was noted, and the deposit taken.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get asV108(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
        assert(this.isV108)
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
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get asV108(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
        assert(this.isV108)
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
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get asV108(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
        assert(this.isV108)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Democracy.ProposalCanceled') === '4229a060ed682a59f5b96a0a1d18ae4a471b42fbbe5beff110f3dbb41e7d7224'
    }

    /**
     * A proposal got canceled.
     */
    get asV115(): {propIndex: number} {
        assert(this.isV115)
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
     * A motion has been proposed by a public account.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asV108(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
    }

    /**
     * An account has secconded a proposal
     */
    get asV108(): {seconder: Uint8Array, propIndex: number} {
        assert(this.isV108)
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
     * A referendum has begun.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asV108(): {refIndex: number, threshold: v108.VoteThreshold} {
        assert(this.isV108)
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
     * A public proposal has been tabled for referendum vote.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV108(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
        assert(this.isV108)
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
     * An account has cancelled a previous delegation operation.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get asV108(): {account: Uint8Array} {
        assert(this.isV108)
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
     * An external proposal has been vetoed.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '8c436495ac4c75fd20d25b6b1c1b2bbebbea576444eac1b5b7b15ecb833e5c4f'
    }

    /**
     * An external proposal has been vetoed.
     */
    get asV108(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
    }

    /**
     * An account has voted in a referendum
     */
    get asV108(): {voter: Uint8Array, refIndex: number, vote: v108.AccountVote} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '286143d78cae88e1dcd7f8fca6da4dcb49ebc3ba61ad473eec7ff13812f3fd56'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV108(): [Uint8Array, v108.V2Outcome] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message executed with the given outcome.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '9b6c90aca74067a591eda76a227e61ce66cd6597483f828a039aba267c0d21a9'
    }

    /**
     * Downward message executed with the given outcome.
     */
    get asV115(): {messageId: Uint8Array, outcome: v115.V2Outcome} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('DmpQueue.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get asV108(): Uint8Array {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is invalid XCM.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('DmpQueue.InvalidFormat') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * Downward message is invalid XCM.
     */
    get asV115(): {messageId: Uint8Array} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     * \[ id, index, required \]
     */
    get asV108(): [Uint8Array, bigint, bigint] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ad9cb107597768cf938dffc06f4759d95e30b4d686ee33c209c5a44145df0c73'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get asV115(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: v115.Weight} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
    }

    /**
     * Downward message from the overweight queue was executed.
     * \[ index, used \]
     */
    get asV108(): [bigint, bigint] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'f16ac3f6b10f93f6d4efd4dde1eba6cc73e06d27c2e2ec66eec4923e16cbfc6f'
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get asV115(): {overweightIndex: bigint, weightUsed: v115.Weight} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV108(): Uint8Array {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward message is unsupported version of XCM.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * Downward message is unsupported version of XCM.
     */
    get asV115(): {messageId: Uint8Array} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
    }

    /**
     * The weight limit for handling downward messages was reached.
     * \[ id, remaining, required \]
     */
    get asV108(): [Uint8Array, bigint, bigint] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'b9a55b745575cc47de66be392bf446a9558a5b3e9201c5b37598517251cff44f'
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get asV115(): {messageId: Uint8Array, remainingWeight: v115.Weight, requiredWeight: v115.Weight} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class DusterAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Duster.Added')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account added to non-dustable list.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('Duster.Added') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Account added to non-dustable list.
     */
    get asV138(): {who: Uint8Array} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class DusterDustedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Duster.Dusted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account dusted.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('Duster.Dusted') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Account dusted.
     */
    get asV138(): {who: Uint8Array, amount: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class DusterRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Duster.Removed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account removed from non-dustable list.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('Duster.Removed') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Account removed from non-dustable list.
     */
    get asV138(): {who: Uint8Array} {
        assert(this.isV138)
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
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Elections.CandidateSlashed') === 'a64270141b7a7c84c0950e5dcd31bc284b27b39505d278ff519f44f855ee33d8'
    }

    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    get asV108(): {candidate: Uint8Array, amount: bigint} {
        assert(this.isV108)
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
     * Internal error happened while trying to perform election.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Elections.ElectionError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Internal error happened while trying to perform election.
     */
    get asV108(): null {
        assert(this.isV108)
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
     * No (or not enough) candidates existed for this round. This is different from
     * `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Elections.EmptyTerm') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * No (or not enough) candidates existed for this round. This is different from
     * `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    get asV108(): null {
        assert(this.isV108)
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
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Elections.MemberKicked') === '13de6e9f12582c043401d65d7388be083b4b273c04f13f132e51e1f673bee999'
    }

    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    get asV108(): {member: Uint8Array} {
        assert(this.isV108)
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
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Elections.NewTerm') === 'c26c6ac673ee46db2001722c75880df159f382274469750dc468b868c6f738c8'
    }

    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    get asV108(): {newMembers: [Uint8Array, bigint][]} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsRenouncedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Elections.Renounced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone has renounced their candidacy.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Elections.Renounced') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    /**
     * Someone has renounced their candidacy.
     */
    get asV108(): {candidate: Uint8Array} {
        assert(this.isV108)
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
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Elections.SeatHolderSlashed') === '7a1552e3cb4a3dc87408db4d42391f3a98998bb0e6bf70aa82661919c4d12eaa'
    }

    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    get asV108(): {seatHolder: Uint8Array, amount: bigint} {
        assert(this.isV108)
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
     * A name was cleared, and the given balance returned.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asV108(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV108)
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
     * A name was removed and the given balance slashed.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asV108(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV108)
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
     * A name was set or reset (which will remove all judgements).
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get asV108(): {who: Uint8Array} {
        assert(this.isV108)
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
     * A judgement was given by a registrar.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
    }

    /**
     * A judgement was given by a registrar.
     */
    get asV108(): {target: Uint8Array, registrarIndex: number} {
        assert(this.isV108)
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
     * A judgement was asked from a registrar.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement was asked from a registrar.
     */
    get asV108(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV108)
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
     * A judgement request was retracted.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement request was retracted.
     */
    get asV108(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV108)
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
     * A registrar was added.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
    }

    /**
     * A registrar was added.
     */
    get asV108(): {registrarIndex: number} {
        assert(this.isV108)
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
     * A sub-identity was added to an identity and the deposit paid.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get asV108(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV108)
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
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asV108(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV108)
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
     * main identity account to the sub-identity account.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asV108(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTransactionPaymentCurrencyAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTransactionPayment.CurrencyAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New accepted currency added
     * [currency]
     */
    get isV108(): boolean {
        return this._chain.getEventHash('MultiTransactionPayment.CurrencyAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * New accepted currency added
     * [currency]
     */
    get asV108(): number {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New accepted currency added
     * [currency]
     */
    get isV115(): boolean {
        return this._chain.getEventHash('MultiTransactionPayment.CurrencyAdded') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
    }

    /**
     * New accepted currency added
     * [currency]
     */
    get asV115(): {assetId: number} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTransactionPaymentCurrencyRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTransactionPayment.CurrencyRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Accepted currency removed
     * [currency]
     */
    get isV108(): boolean {
        return this._chain.getEventHash('MultiTransactionPayment.CurrencyRemoved') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Accepted currency removed
     * [currency]
     */
    get asV108(): number {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Accepted currency removed
     * [currency]
     */
    get isV115(): boolean {
        return this._chain.getEventHash('MultiTransactionPayment.CurrencyRemoved') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
    }

    /**
     * Accepted currency removed
     * [currency]
     */
    get asV115(): {assetId: number} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTransactionPaymentCurrencySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTransactionPayment.CurrencySet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * CurrencySet
     * [who, currency]
     */
    get isV108(): boolean {
        return this._chain.getEventHash('MultiTransactionPayment.CurrencySet') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * CurrencySet
     * [who, currency]
     */
    get asV108(): [Uint8Array, number] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * CurrencySet
     * [who, currency]
     */
    get isV115(): boolean {
        return this._chain.getEventHash('MultiTransactionPayment.CurrencySet') === 'e363878847f08e41654b7e9693d2ed1b2d68f1a11a4080a488f23f03d4568eb3'
    }

    /**
     * CurrencySet
     * [who, currency]
     */
    get asV115(): {accountId: Uint8Array, assetId: number} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTransactionPaymentFeeWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTransactionPayment.FeeWithdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transaction fee paid in non-native currency
     * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
     */
    get isV108(): boolean {
        return this._chain.getEventHash('MultiTransactionPayment.FeeWithdrawn') === 'ce62befa7ac4d353de7b837cf46a284bc15b4fbe619114d3daf0c8525938bded'
    }

    /**
     * Transaction fee paid in non-native currency
     * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
     */
    get asV108(): [Uint8Array, number, bigint, bigint, Uint8Array] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transaction fee paid in non-native currency
     * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
     */
    get isV115(): boolean {
        return this._chain.getEventHash('MultiTransactionPayment.FeeWithdrawn') === '688b18e799fc3f57dcaba8bf913ca803ddcdc43ec8acdc0b6fc309f9e486aa1a'
    }

    /**
     * Transaction fee paid in non-native currency
     * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
     */
    get asV115(): {accountId: Uint8Array, assetId: number, nativeFeeAmount: bigint, nonNativeFeeAmount: bigint, destinationAccountId: Uint8Array} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asV108(): {approving: Uint8Array, timepoint: v108.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asV108(): {cancelling: Uint8Array, timepoint: v108.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === 'f523dd666a6c52ee7fb79fc0fc61f206b289e14e191c70c8df1d1e6e07e9a458'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV108(): {approving: Uint8Array, timepoint: v108.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v108.Type_28} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '893c7ea80ff9b8edc0f0e804a754035301e2cf91cbfe60a5a7d0565bfa1c133e'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV115(): {approving: Uint8Array, timepoint: v115.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v115.Type_31} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    }

    /**
     * A new multisig operation has begun.
     */
    get asV108(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class OtcCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OTC.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An Order has been cancelled
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OTC.Cancelled') === 'd305f3f513b841b17bc670267c676b2ffeb8ad4fb9ccd61f521db44016c53394'
    }

    /**
     * An Order has been cancelled
     */
    get asV138(): {orderId: number} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OtcFilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OTC.Filled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An Order has been completely filled
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OTC.Filled') === 'e0b5a761f0ab7627eb8d2f51b40444f02a1074b21e5c52bca0e35cb2a2bb58d7'
    }

    /**
     * An Order has been completely filled
     */
    get asV138(): {orderId: number, who: Uint8Array, amountIn: bigint, amountOut: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OtcPartiallyFilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OTC.PartiallyFilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An Order has been partially filled
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OTC.PartiallyFilled') === 'e0b5a761f0ab7627eb8d2f51b40444f02a1074b21e5c52bca0e35cb2a2bb58d7'
    }

    /**
     * An Order has been partially filled
     */
    get asV138(): {orderId: number, who: Uint8Array, amountIn: bigint, amountOut: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OtcPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OTC.Placed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An Order has been placed
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OTC.Placed') === 'e85e96bbf56334f991fea5c3ed1effa8e256fc18be6ba076170955f75a414e4e'
    }

    /**
     * An Order has been placed
     */
    get asV138(): {orderId: number, assetIn: number, assetOut: number, amountIn: bigint, amountOut: bigint, partiallyFillable: boolean} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolAssetRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.AssetRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Amount has been refunded for asset which has not been accepted to add to omnipool.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.AssetRefunded') === '0e500f1c8fe6de5e6d64ceb9520ef7e15954d5a96cedbd5a4909f083aa857279'
    }

    /**
     * Amount has been refunded for asset which has not been accepted to add to omnipool.
     */
    get asV115(): {assetId: number, amount: bigint, recipient: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolAssetWeightCapUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.AssetWeightCapUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Asset's weight cap has been updated.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.AssetWeightCapUpdated') === '71b42f0cf24c8ad0d74fda1d872058bb97d04f78cd0a30312f2e204a7880f618'
    }

    /**
     * Asset's weight cap has been updated.
     */
    get asV115(): {assetId: number, cap: number} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolBuyExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.BuyExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Buy trade executed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.BuyExecuted') === 'c181c760a266437a6ab398279c8ee564308c6b6e9e4dc820ebabaac62a7b2e65'
    }

    /**
     * Buy trade executed.
     */
    get asV115(): {who: Uint8Array, assetIn: number, assetOut: number, amountIn: bigint, amountOut: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.LiquidityAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Liquidity of an asset was added to Omnipool.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.LiquidityAdded') === '76cd7cb60dc440d087ac6b0c2d2ea3215727f8982185f509c0a9ac124ae90181'
    }

    /**
     * Liquidity of an asset was added to Omnipool.
     */
    get asV115(): {who: Uint8Array, assetId: number, amount: bigint, positionId: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.LiquidityRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Liquidity of an asset was removed to Omnipool.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.LiquidityRemoved') === '18692f2df32036abea00c7e1f1daf535bb9cb2695fb73daf66742a8dcba19531'
    }

    /**
     * Liquidity of an asset was removed to Omnipool.
     */
    get asV115(): {who: Uint8Array, positionId: bigint, assetId: number, sharesRemoved: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolPositionCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.PositionCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * LP Position was created and NFT instance minted.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.PositionCreated') === 'f5b3b59c23d3750b4374fa050c021baf787268b39183cb0487f4351273ca8208'
    }

    /**
     * LP Position was created and NFT instance minted.
     */
    get asV115(): {positionId: bigint, owner: Uint8Array, asset: number, amount: bigint, shares: bigint, price: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolPositionDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.PositionDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * LP Position was destroyed and NFT instance burned.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.PositionDestroyed') === '9c4f1cdfeda24aace0dbe70fb203ff64bf6b7889b0adba040dab64d76138fc9e'
    }

    /**
     * LP Position was destroyed and NFT instance burned.
     */
    get asV115(): {positionId: bigint, owner: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolPositionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.PositionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * LP Position was created and NFT instance minted.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.PositionUpdated') === 'f5b3b59c23d3750b4374fa050c021baf787268b39183cb0487f4351273ca8208'
    }

    /**
     * LP Position was created and NFT instance minted.
     */
    get asV115(): {positionId: bigint, owner: Uint8Array, asset: number, amount: bigint, shares: bigint, price: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolSellExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.SellExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Sell trade executed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.SellExecuted') === 'c181c760a266437a6ab398279c8ee564308c6b6e9e4dc820ebabaac62a7b2e65'
    }

    /**
     * Sell trade executed.
     */
    get asV115(): {who: Uint8Array, assetIn: number, assetOut: number, amountIn: bigint, amountOut: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolTvlCapUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.TVLCapUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * TVL cap has been updated.
     */
    get isV125(): boolean {
        return this._chain.getEventHash('Omnipool.TVLCapUpdated') === 'f1b858d015b893499ed68e763a6fb47c6c960ec75408df2fb3734a3e9a1e6de5'
    }

    /**
     * TVL cap has been updated.
     */
    get asV125(): {cap: bigint} {
        assert(this.isV125)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolTokenAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.TokenAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An asset was added to Omnipool
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.TokenAdded') === '90cf837618e00388d93a64856214bf463c660de4797eb313a8fb4d4af67c841c'
    }

    /**
     * An asset was added to Omnipool
     */
    get asV115(): {assetId: number, initialAmount: bigint, initialPrice: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolTradableStateUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Omnipool.TradableStateUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Aseet's tradable state has been updated.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Omnipool.TradableStateUpdated') === '8476ecb29d56a05c0cadb62452149f8392b5f67e24c205aba4a95d0fde5d961d'
    }

    /**
     * Aseet's tradable state has been updated.
     */
    get asV115(): {assetId: number, state: v115.Tradability} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningDepositDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.DepositDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * All LP shares were unlocked and NFT representing deposit was destroyed.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.DepositDestroyed') === '492d61a52f52cde1ba9984d1f7a73b0aa5f68b0e6c88718b0043b70035dd3ddb'
    }

    /**
     * All LP shares were unlocked and NFT representing deposit was destroyed.
     */
    get asV138(): {who: Uint8Array, depositId: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningGlobalFarmCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.GlobalFarmCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New global farm was created.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.GlobalFarmCreated') === '548f42e985b1ebc62a7ff28e34f9528f19a2d3b5fa9b836f390162dd4c57863c'
    }

    /**
     * New global farm was created.
     */
    get asV138(): {id: number, owner: Uint8Array, totalRewards: bigint, rewardCurrency: number, yieldPerPeriod: bigint, plannedYieldingPeriods: number, blocksPerPeriod: number, maxRewardPerPeriod: bigint, minDeposit: bigint, lrnaPriceAdjustment: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningGlobalFarmTerminatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.GlobalFarmTerminated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Global farm was terminated.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.GlobalFarmTerminated') === '57232c821de61efc771f55d15a7327bd1404a9c025471193d7cdb83a99047d67'
    }

    /**
     * Global farm was terminated.
     */
    get asV138(): {globalFarmId: number, who: Uint8Array, rewardCurrency: number, undistributedRewards: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningGlobalFarmUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.GlobalFarmUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Global farm's `lrna_price_adjustment` was updated.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.GlobalFarmUpdated') === '0ae6a0aa15134008c91e513fa0c703bdc40adb7e51380fee6b2dfff69c146f8f'
    }

    /**
     * Global farm's `lrna_price_adjustment` was updated.
     */
    get asV138(): {id: number, lrnaPriceAdjustment: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningRewardClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.RewardClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Rewards were claimed.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.RewardClaimed') === 'b31a83e2439d0971ac3c100c0bbd9b652fdba17822820b534928cd8838b251ff'
    }

    /**
     * Rewards were claimed.
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, who: Uint8Array, claimed: bigint, rewardCurrency: number, depositId: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningSharesDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.SharesDeposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New LP shares(LP position) were deposited.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.SharesDeposited') === '58aa432c48aa46f745d3f34ae91f6e04c48de12b2dd0eed5a1d449ed964c51dd'
    }

    /**
     * New LP shares(LP position) were deposited.
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, depositId: bigint, assetId: number, who: Uint8Array, sharesAmount: bigint, positionId: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningSharesRedepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.SharesRedeposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Already locked LP shares were redeposited to another yield farm.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.SharesRedeposited') === '58aa432c48aa46f745d3f34ae91f6e04c48de12b2dd0eed5a1d449ed964c51dd'
    }

    /**
     * Already locked LP shares were redeposited to another yield farm.
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, depositId: bigint, assetId: number, who: Uint8Array, sharesAmount: bigint, positionId: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningSharesWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.SharesWithdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * LP shares were withdrawn.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.SharesWithdrawn') === '4dd331d27beb5b3e06cb0408cc03749f7808adebc9420638f29c848ea6de8959'
    }

    /**
     * LP shares were withdrawn.
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, who: Uint8Array, amount: bigint, depositId: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningYieldFarmCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.YieldFarmCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New yield farm was added to the farm.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.YieldFarmCreated') === '36c1e834a4d765df125ae766be2092abfe14213c4b48ba699f44ab000c50b1c8'
    }

    /**
     * New yield farm was added to the farm.
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, assetId: number, multiplier: bigint, loyaltyCurve: (v138.LoyaltyCurve | undefined)} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningYieldFarmResumedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.YieldFarmResumed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Yield farm for `asset_id` was resumed.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.YieldFarmResumed') === '86cab31d17816f5c6f8d90e19fbc58528b31591643cecae9d10aea9d7b44aece'
    }

    /**
     * Yield farm for `asset_id` was resumed.
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, assetId: number, who: Uint8Array, multiplier: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningYieldFarmStoppedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.YieldFarmStopped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Yield farm for `asset_id` was stopped.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.YieldFarmStopped') === 'a519a466dce66ecb722005ec057c9b324b7c847bf9070983a260c62b44182776'
    }

    /**
     * Yield farm for `asset_id` was stopped.
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, assetId: number, who: Uint8Array} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningYieldFarmTerminatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.YieldFarmTerminated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Yield farm was terminated from the global farm.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.YieldFarmTerminated') === 'a519a466dce66ecb722005ec057c9b324b7c847bf9070983a260c62b44182776'
    }

    /**
     * Yield farm was terminated from the global farm.
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, assetId: number, who: Uint8Array} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolLiquidityMiningYieldFarmUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolLiquidityMining.YieldFarmUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Yield farm multiplier was updated.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolLiquidityMining.YieldFarmUpdated') === '86cab31d17816f5c6f8d90e19fbc58528b31591643cecae9d10aea9d7b44aece'
    }

    /**
     * Yield farm multiplier was updated.
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, assetId: number, who: Uint8Array, multiplier: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolWarehouseLmAllRewardsDistributedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolWarehouseLM.AllRewardsDistributed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Global farm has no more rewards to distribute in the moment.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolWarehouseLM.AllRewardsDistributed') === '6c81d62dc35d0454853f5260a9937f1dea716b76a958a096c5baa5a1f4a88cce'
    }

    /**
     * Global farm has no more rewards to distribute in the moment.
     */
    get asV138(): {globalFarmId: number} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolWarehouseLmGlobalFarmAccRpzUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolWarehouseLM.GlobalFarmAccRPZUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Global farm accumulated reward per share was updated.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolWarehouseLM.GlobalFarmAccRPZUpdated') === '48014a619754e7f934a4e8b8d6327eb2c2708808ffaae7d36b64c90d4435cabd'
    }

    /**
     * Global farm accumulated reward per share was updated.
     */
    get asV138(): {globalFarmId: number, accumulatedRpz: bigint, totalSharesZ: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OmnipoolWarehouseLmYieldFarmAccRpvsUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OmnipoolWarehouseLM.YieldFarmAccRPVSUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Yield farm accumulated reward per valued share was updated.
     */
    get isV138(): boolean {
        return this._chain.getEventHash('OmnipoolWarehouseLM.YieldFarmAccRPVSUpdated') === 'f81daed38a6c58ee257b84fce7d8b83ea08e6144e10187722cab39c09aa179d6'
    }

    /**
     * Yield farm accumulated reward per valued share was updated.
     */
    get asV138(): {globalFarmId: number, yieldFarmId: number, accumulatedRpvs: bigint, totalValuedShares: bigint} {
        assert(this.isV138)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrmlXcmSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrmlXcm.Sent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * XCM message sent. \[to, message\]
     */
    get isV108(): boolean {
        return this._chain.getEventHash('OrmlXcm.Sent') === 'a58e2ab3184c3e4e335af85f0463bed0f68d37969e80066264857c6d71dbf4c7'
    }

    /**
     * XCM message sent. \[to, message\]
     */
    get asV108(): {to: v108.V1MultiLocation, message: v108.V2Instruction[]} {
        assert(this.isV108)
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
    get isV100(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '62ab179c459e900954ede92a01f149d553e9317efc7d0129525f40d631e8b38f'
    }

    /**
     * Downward messages were processed using the given weight.
     * \[ weight_used, result_mqc_head \]
     */
    get asV100(): [bigint, Uint8Array] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '5ae72cc32ab9a15192bb84c788530d1d739717b8f9f85bd654953f12515e41f1'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asV115(): {weightUsed: v115.Weight, dmqHead: Uint8Array} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Some downward messages have been received and will be processed.
     * \[ count \]
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '1cdbdc8ac203922f95ae6ab3e8b98004e956389f7ec11480ec5633d29b48cf71'
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get asV115(): {count: number} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An upgrade has been authorized.
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An upgrade has been authorized.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * An upgrade has been authorized.
     */
    get asV115(): {codeHash: Uint8Array} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === 'f35adbaa82c93636884997faedd16369ac498b9208d7c11f2233b9ef2aa4f092'
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get asV115(): {relayChainBlockNum: number} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The relay-chain aborted the upgrade process.
     */
    get asV100(): null {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The validation function has been scheduled to apply.
     */
    get asV100(): null {
        assert(this.isV100)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV108(): [Uint8Array, v108.V1MultiLocation, v108.VersionedMultiAssets] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Attempted') === '4154651e242bd6b6bc077aa66e91ede994df17d6d31ec8746fb77b61829f6cc1'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV108(): v108.V2Outcome {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === 'aca6b87c79cd283d77249dae5d6ff6b7249a24e95958b723f47cd2333f0e9bc1'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV108(): [v108.V1MultiLocation, bigint, (v108.V1MultiLocation | undefined)] {
        assert(this.isV108)
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
    get isV108(): boolean {
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
    get asV108(): [v108.V1MultiLocation, bigint] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV108(): [bigint, number, number] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV108(): [bigint, number, number] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV108(): [bigint, number, number] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '0104ccc866506c43592e56f342852c22c060b58c586141b7900f6ad97353e8b2'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV108(): [bigint, number, number, bigint, bigint] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isV115(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '017f3a2e2d06e91d1be294456b9555e805a1e72a1ad2a469f493c21bf4da0feb'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV115(): [bigint, number, number, v115.Weight, v115.Weight] {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'b02879418cace85908884f92e4b915e3b448f9e06d9bcc0edcce01ed9bc5b644'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV108(): [v108.VersionedMultiLocation, bigint] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '0d47fb7e1a9ccdfd8879b0e483179d5b2c7b29bd5db653557e266536bc40f9a0'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV108(): [v108.V1MultiLocation, bigint, v108.V2Error] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '122689cbd0466e99035c5eeda9c178ed25d8a8fee01f9de0d818f7e86cd5e333'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV108(): [bigint, v108.V2Response] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get asV108(): bigint {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === 'ae5e308764e970ce405a89338cec74552db382f20b13af73b16c9b7b172754e4'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV108(): [v108.V1MultiLocation, v108.V1MultiLocation, v108.V2Instruction[]] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV108(): [v108.V1MultiLocation, number] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV108(): [v108.V1MultiLocation, bigint] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get asV108(): [v108.V1MultiLocation, number] {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV108(): {hash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV108(): {hash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV108(): {hash: Uint8Array} {
        assert(this.isV108)
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
     * An announcement was placed to make a call in the future.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Proxy.Announced') === '5c2546e4632bb75e839f990a33f7feb63fb5598747a25d3d09f23108c106abc4'
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get asV108(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
        assert(this.isV108)
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
     * disambiguation index and proxy type.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === 'd68bb77c596bd04d1fa82878fa4822b7a9d5d809d308d61952e6c422a9f9e7c3'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV108(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v108.ProxyType, disambiguationIndex: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === 'b47c5460f020be619fa9bc67577ddc07959868db9dde26f356f6a7b963999193'
    }

    /**
     * A proxy was added.
     */
    get asV108(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v108.ProxyType, delay: number} {
        assert(this.isV108)
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
     * A proxy was executed correctly, with the given.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === 'af161e703a60c2ed390f4fc5df450268eda69dfe8656e401e29072d2b13258f5'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV108(): {result: v108.Type_28} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV115(): {result: v115.Type_31} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === 'b47c5460f020be619fa9bc67577ddc07959868db9dde26f356f6a7b963999193'
    }

    /**
     * A proxy was removed.
     */
    get asV115(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v115.ProxyType, delay: number} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class RelayChainInfoCurrentBlockNumbersEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'RelayChainInfo.CurrentBlockNumbers')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current block numbers
     * [ Parachain block number, Relaychain Block number ]
     */
    get isV104(): boolean {
        return this._chain.getEventHash('RelayChainInfo.CurrentBlockNumbers') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * Current block numbers
     * [ Parachain block number, Relaychain Block number ]
     */
    get asV104(): [number, number] {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Current block numbers
     * [ Parachain block number, Relaychain Block number ]
     */
    get isV115(): boolean {
        return this._chain.getEventHash('RelayChainInfo.CurrentBlockNumbers') === '2a497d74883525ffecab20188eabdfe61bbd91a6d017f713ae89338fa42ab3ba'
    }

    /**
     * Current block numbers
     * [ Parachain block number, Relaychain Block number ]
     */
    get asV115(): {parachainBlockNumber: number, relaychainBlockNumber: number} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV108(): {task: [number, number], id: (Uint8Array | undefined), error: v108.LookupError} {
        assert(this.isV108)
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
     * Canceled some task.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Canceled some task.
     */
    get asV108(): {when: number, index: number} {
        assert(this.isV108)
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
     * Dispatched some task.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '4c3d15154e107129fea741c8e400a84699ee67095fc83c1c726f8b56c7826660'
    }

    /**
     * Dispatched some task.
     */
    get asV108(): {task: [number, number], id: (Uint8Array | undefined), result: v108.Type_28} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'ba59527b3bb4801aee2fda92f8229d8d572cc38c565e139a667a87dd8171194b'
    }

    /**
     * Dispatched some task.
     */
    get asV115(): {task: [number, number], id: (Uint8Array | undefined), result: v115.Type_31} {
        assert(this.isV115)
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
     * Scheduled some task.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Scheduled some task.
     */
    get asV108(): {when: number, index: number} {
        assert(this.isV108)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * New session has happened. Note that the argument is the \[session_index\], not the
     * block number as the type might suggest.
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get asV104(): {sessionIndex: number} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied.
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get asV104(): {oldSudoer: (Uint8Array | undefined)} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV100(): v100.Type_37 {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '7fffe0bb149a125d45315cdd4087524b9c4f4223010e0fff18d84854fc48aa3f'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV104(): {sudoResult: v104.Type_29} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV100(): v100.Type_37 {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '7fffe0bb149a125d45315cdd4087524b9c4f4223010e0fff18d84854fc48aa3f'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV104(): {sudoResult: v104.Type_29} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * `:code` was updated.
     */
    get asV100(): null {
        assert(this.isV100)
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
    get isV100(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '0995776ff5e8d5f8662a6841d8556c830acc58fbb01f76a13b6aa4222b987150'
    }

    /**
     * An extrinsic failed. \[error, info\]
     */
    get asV100(): [v100.DispatchError, v100.DispatchInfo] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '2dcccc93ed3f24e5499fe9480fe0a61a806d25bb5fc0d10a1074e360693768e7'
    }

    /**
     * An extrinsic failed.
     */
    get asV104(): {dispatchError: v104.DispatchError, dispatchInfo: v104.DispatchInfo} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '7a219a9eae41ad22651fdcb4f6a7453254b0ecc7be4b30821be2ab5b44e5f1b4'
    }

    /**
     * An extrinsic failed.
     */
    get asV115(): {dispatchError: v115.DispatchError, dispatchInfo: v115.DispatchInfo} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
    }

    /**
     * An extrinsic completed successfully. \[info\]
     */
    get asV100(): v100.DispatchInfo {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV104(): {dispatchInfo: v104.DispatchInfo} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6fc1e5ad9f5b3851c6e301764b8507ebb0861fd57381e6bc020a47f2b710167d'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV115(): {dispatchInfo: v115.DispatchInfo} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An \[account\] was reaped.
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was reaped.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV104(): {account: Uint8Array} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A new \[account\] was created.
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new account was created.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV104(): {account: Uint8Array} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     * On on-chain remark happened. \[origin, remark_hash\]
     */
    get asV100(): [Uint8Array, Uint8Array] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * On on-chain remark happened.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV104(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV104)
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
    get isV108(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV108(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV108(): {proposalHash: Uint8Array} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV108(): {proposalHash: Uint8Array, result: v108.Type_28} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV115(): {proposalHash: Uint8Array, result: v115.Type_31} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '66d95d205ed46ac5925431190b235d9609aa48d16739fe72413be37096aa7cd0'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV108(): {proposalHash: Uint8Array, result: v108.Type_28} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV115(): {proposalHash: Uint8Array, result: v115.Type_31} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV108(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV108(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV108)
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
     * A new tip suggestion has been opened.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tips.NewTip') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A new tip suggestion has been opened.
     */
    get asV108(): {tipHash: Uint8Array} {
        assert(this.isV108)
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
     * A tip suggestion has been closed.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tips.TipClosed') === '788934ef84a9cf41376f9a41333ed4129722ae02b069eb169dcd9a50e4eb300f'
    }

    /**
     * A tip suggestion has been closed.
     */
    get asV108(): {tipHash: Uint8Array, who: Uint8Array, payout: bigint} {
        assert(this.isV108)
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
     * A tip suggestion has reached threshold and is closing.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tips.TipClosing') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A tip suggestion has reached threshold and is closing.
     */
    get asV108(): {tipHash: Uint8Array} {
        assert(this.isV108)
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
     * A tip suggestion has been retracted.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tips.TipRetracted') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A tip suggestion has been retracted.
     */
    get asV108(): {tipHash: Uint8Array} {
        assert(this.isV108)
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
     * A tip suggestion has been slashed.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tips.TipSlashed') === 'bbbf33d69edf4cf82e85596453190f61c96067be0ca329ff7dcf6cd4ea9313a3'
    }

    /**
     * A tip suggestion has been slashed.
     */
    get asV108(): {tipHash: Uint8Array, finder: Uint8Array, deposit: bigint} {
        assert(this.isV108)
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
     * A balance was set by root.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === 'a833bc82c917c67a079a265a7ecb101a0f1cef9d40a10b73e3d675773b059822'
    }

    /**
     * A balance was set by root.
     */
    get asV108(): {currencyId: number, who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Deposited some balance into an account
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Tokens.Deposited') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
    }

    /**
     * Deposited some balance into an account
     */
    get asV115(): {currencyId: number, who: Uint8Array, amount: bigint} {
        assert(this.isV115)
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
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tokens.DustLost') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
    }

    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    get asV108(): {currencyId: number, who: Uint8Array, amount: bigint} {
        assert(this.isV108)
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
     * An account was created with some free balance.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tokens.Endowed') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
    }

    /**
     * An account was created with some free balance.
     */
    get asV108(): {currencyId: number, who: Uint8Array, amount: bigint} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensLockRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.LockRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some locked funds were unlocked
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Tokens.LockRemoved') === '3c17d97680e31e7022e8f09ff90d99397cd5f7772dfbd6ea46bd5b62ac06265c'
    }

    /**
     * Some locked funds were unlocked
     */
    get asV115(): {lockId: Uint8Array, currencyId: number, who: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensLockSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.LockSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds are locked
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Tokens.LockSet') === '547fa41907947e526a59a9fd56925c5191f9b85d86805c032f6e3bb96fcfe5ba'
    }

    /**
     * Some funds are locked
     */
    get asV115(): {lockId: Uint8Array, currencyId: number, who: Uint8Array, amount: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensRepatriatedReserveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.RepatriatedReserve')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tokens.RepatriatedReserve') === '31e192b310f4e2068344c790f1d009c88b06da722feba84db56fe8a1b8e21039'
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get asV108(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint, status: v108.BalanceStatus} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensReserveRepatriatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.ReserveRepatriated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Tokens.ReserveRepatriated') === '31e192b310f4e2068344c790f1d009c88b06da722feba84db56fe8a1b8e21039'
    }

    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    get asV115(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint, status: v115.BalanceStatus} {
        assert(this.isV115)
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
     * Some balance was reserved (moved from free to reserved).
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tokens.Reserved') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV108(): {currencyId: number, who: Uint8Array, amount: bigint} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Tokens.Slashed') === '1f489a3e32eb3bc4c2f7326cb4e4924cac6073a0cbf479d656266701957ab281'
    }

    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    get asV115(): {currencyId: number, who: Uint8Array, freeAmount: bigint, reservedAmount: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensTotalIssuanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.TotalIssuanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The total issuance of an currency has been set
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Tokens.TotalIssuanceSet') === 'e151a2a718c3e5c3a134e2dafc90847e9c03dce6d7c053348044bc7c1ff1f455'
    }

    /**
     * The total issuance of an currency has been set
     */
    get asV115(): {currencyId: number, amount: bigint} {
        assert(this.isV115)
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
     * Transfer succeeded.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === 'd02b411d552a8c2e6d90c70aa7f3ff856688d4b5e4a933253a8560ce04da6f04'
    }

    /**
     * Transfer succeeded.
     */
    get asV108(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV108)
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
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Tokens.Unreserved') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV108(): {currencyId: number, who: Uint8Array, amount: bigint} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Tokens.Withdrawn') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get asV115(): {currencyId: number, who: Uint8Array, amount: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class TransactionPauseTransactionPausedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TransactionPause.TransactionPaused')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Paused transaction
     */
    get isV115(): boolean {
        return this._chain.getEventHash('TransactionPause.TransactionPaused') === '22dc8b864509275cfbe86bb0ee61c6f9316611de96e80393d00b0b715677c03e'
    }

    /**
     * Paused transaction
     */
    get asV115(): {palletNameBytes: Uint8Array, functionNameBytes: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class TransactionPauseTransactionUnpausedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TransactionPause.TransactionUnpaused')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Unpaused transaction
     */
    get isV115(): boolean {
        return this._chain.getEventHash('TransactionPause.TransactionUnpaused') === '22dc8b864509275cfbe86bb0ee61c6f9316611de96e80393d00b0b715677c03e'
    }

    /**
     * Unpaused transaction
     */
    get asV115(): {palletNameBytes: Uint8Array, functionNameBytes: Uint8Array} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asV115(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
    }

    /**
     * Some funds have been allocated. \[proposal_index, award, beneficiary\]
     */
    get asV100(): [number, bigint, Uint8Array] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been allocated.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
    }

    /**
     * Some funds have been allocated.
     */
    get asV104(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Some of our funds have been burnt. \[burn\]
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some of our funds have been burnt.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
    }

    /**
     * Some of our funds have been burnt.
     */
    get asV104(): {burntFunds: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Some funds have been deposited. \[deposit\]
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been deposited.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
    }

    /**
     * Some funds have been deposited.
     */
    get asV104(): {value: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * New proposal. \[proposal_index\]
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New proposal.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV104(): {proposalIndex: number} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
     */
    get asV100(): [number, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV104(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV104)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     * \[budget_remaining\]
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get asV104(): {rolloverBalance: bigint} {
        assert(this.isV104)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Treasury.SpendApproved') === 'fce90c02bffde89fb0e8723868aa8e94bfe9c1c48c5af8c34efd8ff5173184f9'
    }

    /**
     * A new spend proposal has been approved.
     */
    get asV115(): {proposalIndex: number, amount: bigint, beneficiary: Uint8Array} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     * We have ended a spend period and will now allocate funds. \[budget_remaining\]
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get asV104(): {budgetRemaining: bigint} {
        assert(this.isV104)
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
     * An approval for a `delegate` account to transfer the `item` of an item
     * `collection` was cancelled by its `owner`.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.ApprovalCancelled') === '668fd91cd536189cd735e4db634f100afc389afdd7f508761a3a321f44fd4060'
    }

    /**
     * An approval for a `delegate` account to transfer the `item` of an item
     * `collection` was cancelled by its `owner`.
     */
    get asV115(): {collection: bigint, item: bigint, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV115)
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
     * An `item` of a `collection` has been approved by the `owner` for transfer by
     * a `delegate`.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.ApprovedTransfer') === '668fd91cd536189cd735e4db634f100afc389afdd7f508761a3a321f44fd4060'
    }

    /**
     * An `item` of a `collection` has been approved by the `owner` for transfer by
     * a `delegate`.
     */
    get asV115(): {collection: bigint, item: bigint, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV115)
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
     * Attribute metadata has been cleared for a `collection` or `item`.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.AttributeCleared') === 'a04de1ba5f46601cc6aa1056a8f7154ca8cc9a7fa1ef4610fa61fc991d298045'
    }

    /**
     * Attribute metadata has been cleared for a `collection` or `item`.
     */
    get asV115(): {collection: bigint, maybeItem: (bigint | undefined), key: Uint8Array} {
        assert(this.isV115)
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
     * New attribute metadata has been set for a `collection` or `item`.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.AttributeSet') === '48d8e27637aa98981bf7ef92bf37abee3438d63b225e91ba54341c2cf45b7253'
    }

    /**
     * New attribute metadata has been set for a `collection` or `item`.
     */
    get asV115(): {collection: bigint, maybeItem: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
        assert(this.isV115)
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
     * An `item` was destroyed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.Burned') === '82ff14a27dcf02d249d334e09f021a33c506d398cecf87a499c4a749964fb7bf'
    }

    /**
     * An `item` was destroyed.
     */
    get asV115(): {collection: bigint, item: bigint, owner: Uint8Array} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.CollectionFrozen') === '42d161ea24cc4e1fc2a84c38dfcedefd1fbcb60ca0bfa1ee7a6d2d8dca782faa'
    }

    /**
     * Some `collection` was frozen.
     */
    get asV115(): {collection: bigint} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.CollectionMaxSupplySet') === '2e2592121f294d135353601dbc3ade10802eef0ed788d890539ffe41ae0d6bbe'
    }

    /**
     * Max supply has been set for a collection.
     */
    get asV115(): {collection: bigint, maxSupply: number} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.CollectionMetadataCleared') === '42d161ea24cc4e1fc2a84c38dfcedefd1fbcb60ca0bfa1ee7a6d2d8dca782faa'
    }

    /**
     * Metadata has been cleared for a `collection`.
     */
    get asV115(): {collection: bigint} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.CollectionMetadataSet') === '1e2c3d4778cb9e9c9369bc4af465e3aab77779c7e7a7337fd0d69b1f3bcef832'
    }

    /**
     * New metadata has been set for a `collection`.
     */
    get asV115(): {collection: bigint, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.CollectionThawed') === '42d161ea24cc4e1fc2a84c38dfcedefd1fbcb60ca0bfa1ee7a6d2d8dca782faa'
    }

    /**
     * Some `collection` was thawed.
     */
    get asV115(): {collection: bigint} {
        assert(this.isV115)
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
     * A `collection` was created.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.Created') === 'fd94b9021be4279001aafc3551c1484d5763ef5950d45dd318a2c450e6c45735'
    }

    /**
     * A `collection` was created.
     */
    get asV115(): {collection: bigint, creator: Uint8Array, owner: Uint8Array} {
        assert(this.isV115)
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
     * A `collection` was destroyed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.Destroyed') === '42d161ea24cc4e1fc2a84c38dfcedefd1fbcb60ca0bfa1ee7a6d2d8dca782faa'
    }

    /**
     * A `collection` was destroyed.
     */
    get asV115(): {collection: bigint} {
        assert(this.isV115)
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
     * A `collection` was force-created.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.ForceCreated') === '09f70f87fa8cf6802c0d0b47a8050ce5558cfcaf1560fee8e381ce0476c03b1e'
    }

    /**
     * A `collection` was force-created.
     */
    get asV115(): {collection: bigint, owner: Uint8Array} {
        assert(this.isV115)
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
     * Some `item` was frozen.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.Frozen') === 'c821cd7d11475c687a8c2699e93803f3af5ff5ca69f1729084558320c80b4931'
    }

    /**
     * Some `item` was frozen.
     */
    get asV115(): {collection: bigint, item: bigint} {
        assert(this.isV115)
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
     * An `item` was issued.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.Issued') === '82ff14a27dcf02d249d334e09f021a33c506d398cecf87a499c4a749964fb7bf'
    }

    /**
     * An `item` was issued.
     */
    get asV115(): {collection: bigint, item: bigint, owner: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesItemBoughtEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ItemBought')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An item was bought.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.ItemBought') === '91d0c4fcd44395002e08eebdd45398fb97477eba7118ac063bb75ba5e60d6e7c'
    }

    /**
     * An item was bought.
     */
    get asV115(): {collection: bigint, item: bigint, price: bigint, seller: Uint8Array, buyer: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesItemPriceRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ItemPriceRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The price for the instance was removed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.ItemPriceRemoved') === 'c821cd7d11475c687a8c2699e93803f3af5ff5ca69f1729084558320c80b4931'
    }

    /**
     * The price for the instance was removed.
     */
    get asV115(): {collection: bigint, item: bigint} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class UniquesItemPriceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Uniques.ItemPriceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The price was set for the instance.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.ItemPriceSet') === 'cc10bd40b81fa8678cd4620c2661749086ff9031fdce9a5b7eabeb559cbf6620'
    }

    /**
     * The price was set for the instance.
     */
    get asV115(): {collection: bigint, item: bigint, price: bigint, whitelistedBuyer: (Uint8Array | undefined)} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.ItemStatusChanged') === '42d161ea24cc4e1fc2a84c38dfcedefd1fbcb60ca0bfa1ee7a6d2d8dca782faa'
    }

    /**
     * A `collection` has had its attributes changed by the `Force` origin.
     */
    get asV115(): {collection: bigint} {
        assert(this.isV115)
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
     * Metadata has been cleared for an item.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.MetadataCleared') === 'c821cd7d11475c687a8c2699e93803f3af5ff5ca69f1729084558320c80b4931'
    }

    /**
     * Metadata has been cleared for an item.
     */
    get asV115(): {collection: bigint, item: bigint} {
        assert(this.isV115)
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
     * New metadata has been set for an item.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.MetadataSet') === 'f02e0128b15ad80326f6a7e62343df78d0b3498535a3c03e1f49980cef80964f'
    }

    /**
     * New metadata has been set for an item.
     */
    get asV115(): {collection: bigint, item: bigint, data: Uint8Array, isFrozen: boolean} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.OwnerChanged') === '736a46d61065ea5e3d3f2af9afef376602287966e232915e79396a01add5f6b3'
    }

    /**
     * The owner changed.
     */
    get asV115(): {collection: bigint, newOwner: Uint8Array} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.OwnershipAcceptanceChanged') === '862f9fdcd156ed7837dc5d75afeee92854b9c67757cbfb0ccbeb42ed1088503c'
    }

    /**
     * Ownership acceptance has changed for an account.
     */
    get asV115(): {who: Uint8Array, maybeCollection: (bigint | undefined)} {
        assert(this.isV115)
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
     * Metadata has been cleared for an item.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.Redeposited') === '962c7af0cf90d9d91232746cecb57ebd35955dab4f3e6461835416595d3e2c93'
    }

    /**
     * Metadata has been cleared for an item.
     */
    get asV115(): {collection: bigint, successfulItems: bigint[]} {
        assert(this.isV115)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.TeamChanged') === 'a94159b2805fac868c01f4231c6b37bf1831ad6694feba092f344f47f03429e4'
    }

    /**
     * The management team changed.
     */
    get asV115(): {collection: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
        assert(this.isV115)
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
     * Some `item` was thawed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.Thawed') === 'c821cd7d11475c687a8c2699e93803f3af5ff5ca69f1729084558320c80b4931'
    }

    /**
     * Some `item` was thawed.
     */
    get asV115(): {collection: bigint, item: bigint} {
        assert(this.isV115)
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
     * An `item` was transferred.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Uniques.Transferred') === '0d399a47b426ea302477d252882ddb771a1a74ab919d501df8db852ec2a39098'
    }

    /**
     * An `item` was transferred.
     */
    get asV115(): {collection: bigint, item: bigint, from: Uint8Array, to: Uint8Array} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}

export class UnknownTokensDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'UnknownTokens.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Deposit success.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('UnknownTokens.Deposited') === '5618a3d9662352222101d08b90934710ebf739425cdbaf5ff63a3c258c219c8a'
    }

    /**
     * Deposit success.
     */
    get asV108(): {asset: v108.V1MultiAsset, who: v108.V1MultiLocation} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class UnknownTokensWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'UnknownTokens.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Withdraw success.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('UnknownTokens.Withdrawn') === '5618a3d9662352222101d08b90934710ebf739425cdbaf5ff63a3c258c219c8a'
    }

    /**
     * Withdraw success.
     */
    get asV108(): {asset: v108.V1MultiAsset, who: v108.V1MultiLocation} {
        assert(this.isV108)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get asV100(): null {
        assert(this.isV100)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asV115(): null {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === 'b9192854e3b1d8b7a3bd93b66a170a2afd8616d353d0fc1bdbfbfe6efa5b4f5a'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error. \[index, error\]
     */
    get asV100(): [number, v100.DispatchError] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '0ebef0e669872b029afc6cbf6c35a90ca099164a7899375e3d8178345c0f3f73'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV104(): {index: number, error: v104.DispatchError} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV115(): {index: number, error: v115.DispatchError} {
        assert(this.isV115)
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
    get isV104(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'af161e703a60c2ed390f4fc5df450268eda69dfe8656e401e29072d2b13258f5'
    }

    /**
     * A call was dispatched.
     */
    get asV104(): {result: v104.Type_29} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A call was dispatched.
     */
    get asV115(): {result: v115.Type_31} {
        assert(this.isV115)
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
    get isV100(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get asV100(): null {
        assert(this.isV100)
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
    get isV115(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV115(): {error: v115.DispatchError} {
        assert(this.isV115)
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
     * Claimed vesting.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Vesting.Claimed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Claimed vesting.
     */
    get asV108(): {who: Uint8Array, amount: bigint} {
        assert(this.isV108)
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
     * Added new vesting schedule.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Vesting.VestingScheduleAdded') === '18422c66dedd030e21a5567fde05a68ab5ad4ffff5f9fdcd73f3d18dcb91873c'
    }

    /**
     * Added new vesting schedule.
     */
    get asV108(): {from: Uint8Array, to: Uint8Array, vestingSchedule: v108.VestingSchedule} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestingVestingSchedulesUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Vesting.VestingSchedulesUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Updated vesting schedules.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Vesting.VestingSchedulesUpdated') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Updated vesting schedules.
     */
    get asV108(): {who: Uint8Array} {
        assert(this.isV108)
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
     * Transferred.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('XTokens.Transferred') === 'fe6945e281a0ba45d3cffb46dc3e9932073f26646f7879b20f7592daf1f8249f'
    }

    /**
     * Transferred.
     */
    get asV108(): {sender: Uint8Array, currencyId: number, amount: bigint, dest: v108.V1MultiLocation} {
        assert(this.isV108)
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
     * Transferred `MultiAsset`.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAsset') === '7fec273aa0ae147760c7dd1940b67deb436b25b9e2d4c7c75150b174e815408b'
    }

    /**
     * Transferred `MultiAsset`.
     */
    get asV108(): {sender: Uint8Array, asset: v108.V1MultiAsset, dest: v108.V1MultiLocation} {
        assert(this.isV108)
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
     * Transferred `MultiAsset` with fee.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssetWithFee') === 'cba4a5ec13032868bc74df82888767ea7fd34969b190ec1e6086219a80e5ee72'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV108(): {sender: Uint8Array, asset: v108.V1MultiAsset, fee: v108.V1MultiAsset, dest: v108.V1MultiLocation} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === 'f7bab399e6ba944b4e125eae381fe361968f8e894d499e45a921bf53ae4632d8'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV108(): {sender: Uint8Array, assets: v108.V1MultiAsset[], dest: v108.V1MultiLocation} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '19a61ff727b39e06bdac9248dc278a5be6292a6af670958a6338915a3e003249'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV115(): {sender: Uint8Array, assets: v115.V1MultiAsset[], fee: v115.V1MultiAsset, dest: v115.V1MultiLocation} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiCurrencies') === '6e7affe9a6c303677000a88e93dcfb6678ab50af37dbda12f4a248502f9771f2'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asV108(): {sender: Uint8Array, currencies: [number, bigint][], dest: v108.V1MultiLocation} {
        assert(this.isV108)
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
     * Transferred with fee.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('XTokens.TransferredWithFee') === 'a03711d891a2269f206a9e623dc58dcaff97b7bf96cf9cb86ccb4bc6849318bc'
    }

    /**
     * Transferred with fee.
     */
    get asV108(): {sender: Uint8Array, currencyId: number, amount: bigint, fee: bigint, dest: v108.V1MultiLocation} {
        assert(this.isV108)
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
    get isV108(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadFormat') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * Bad XCM format used.
     */
    get asV108(): (Uint8Array | undefined) {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Bad XCM format used.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadFormat') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * Bad XCM format used.
     */
    get asV115(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadVersion') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * Bad XCM version used.
     */
    get asV108(): (Uint8Array | undefined) {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Bad XCM version used.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadVersion') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * Bad XCM version used.
     */
    get asV115(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === '639070abee49a6419e897939fc5b761d561a52efc062a7f1a1183b543e786999'
    }

    /**
     * Some XCM failed.
     */
    get asV108(): [(Uint8Array | undefined), v108.V2Error] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM failed.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'd72a6fdcbedea7017572a7b9b1b30fb50d753160a20111c371f00be9c05691c2'
    }

    /**
     * Some XCM failed.
     */
    get asV115(): {messageHash: (Uint8Array | undefined), error: v115.V2Error, weight: v115.Weight} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === 'ebfdd28144c52e3beb9a90e53e214e90e6114fc4d52e2c572b7e0a2e8c303bd5'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV108(): [number, number, bigint, bigint] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '067a3a3aa8ee6726ecb8bf35ab307ac7566fec3acc2a84c25854711f6279d584'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asV115(): {sender: number, sentAt: number, index: bigint, required: v115.Weight} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV108(): [bigint, bigint] {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '05c4258fc96a5477a2e7d79afbaae99e134fdf08770b5619a826272ad1e82c22'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asV115(): {index: bigint, used: v115.Weight} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV108(): (Uint8Array | undefined) {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some XCM was executed ok.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === '305c23f5c5645b4330237519e6b8fa038af5dfc624c8dd8e1de3b97b6e51faf4'
    }

    /**
     * Some XCM was executed ok.
     */
    get asV115(): {messageHash: (Uint8Array | undefined), weight: v115.Weight} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get asV108(): (Uint8Array | undefined) {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get asV115(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV115)
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
    get isV108(): boolean {
        return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get asV108(): (Uint8Array | undefined) {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get isV115(): boolean {
        return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get asV115(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isV115)
        return this._chain.decodeEvent(this.event)
    }
}
