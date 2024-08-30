import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v968 from '../v968'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v980 from '../v980'
import * as v990 from '../v990'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'

export const transfer =  {
    name: 'XTokens.transfer',
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
    v952: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: v952.CurrencyId,
            amount: sts.bigint(),
            dest: v952.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v956: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
            dest: v956.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v962: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
            dest: v962.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v968: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: v968.CurrencyId,
            amount: sts.bigint(),
            dest: v968.VersionedMultiLocation,
            destWeightLimit: v968.V2WeightLimit,
        })
    ),
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
    v970: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: v970.CurrencyId,
            amount: sts.bigint(),
            dest: v970.VersionedMultiLocation,
            destWeightLimit: v970.V2WeightLimit,
        })
    ),
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
    v972: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: v972.CurrencyId,
            amount: sts.bigint(),
            dest: v972.VersionedMultiLocation,
            destWeightLimit: v972.V3WeightLimit,
        })
    ),
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
    v980: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
            dest: v980.VersionedMultiLocation,
            destWeightLimit: v980.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer`].
     */
    v990: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
            dest: v990.VersionedMultiLocation,
            destWeightLimit: v990.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer`].
     */
    v10000: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: v10000.CurrencyId,
            amount: sts.bigint(),
            dest: v10000.VersionedMultiLocation,
            destWeightLimit: v10000.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer`].
     */
    v11000: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: v11000.CurrencyId,
            amount: sts.bigint(),
            dest: v11000.VersionedLocation,
            destWeightLimit: v11000.V3WeightLimit,
        })
    ),
}

export const transferMultiasset =  {
    name: 'XTokens.transfer_multiasset',
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
    v952: new CallType(
        'XTokens.transfer_multiasset',
        sts.struct({
            asset: v952.VersionedMultiAsset,
            dest: v952.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v968: new CallType(
        'XTokens.transfer_multiasset',
        sts.struct({
            asset: v968.VersionedMultiAsset,
            dest: v968.VersionedMultiLocation,
            destWeightLimit: v968.V2WeightLimit,
        })
    ),
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
    v970: new CallType(
        'XTokens.transfer_multiasset',
        sts.struct({
            asset: v970.VersionedMultiAsset,
            dest: v970.VersionedMultiLocation,
            destWeightLimit: v970.V2WeightLimit,
        })
    ),
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
    v972: new CallType(
        'XTokens.transfer_multiasset',
        sts.struct({
            asset: v972.VersionedMultiAsset,
            dest: v972.VersionedMultiLocation,
            destWeightLimit: v972.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_multiasset`].
     */
    v10000: new CallType(
        'XTokens.transfer_multiasset',
        sts.struct({
            asset: v10000.VersionedMultiAsset,
            dest: v10000.VersionedMultiLocation,
            destWeightLimit: v10000.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_multiasset`].
     */
    v11000: new CallType(
        'XTokens.transfer_multiasset',
        sts.struct({
            asset: v11000.VersionedAsset,
            dest: v11000.VersionedLocation,
            destWeightLimit: v11000.V3WeightLimit,
        })
    ),
}

export const transferWithFee =  {
    name: 'XTokens.transfer_with_fee',
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
    v952: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: v952.CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: v952.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v956: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: v956.CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: v956.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v962: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: v962.CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: v962.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v968: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: v968.CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: v968.VersionedMultiLocation,
            destWeightLimit: v968.V2WeightLimit,
        })
    ),
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
    v970: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: v970.CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: v970.VersionedMultiLocation,
            destWeightLimit: v970.V2WeightLimit,
        })
    ),
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
    v972: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: v972.CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: v972.VersionedMultiLocation,
            destWeightLimit: v972.V3WeightLimit,
        })
    ),
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
    v980: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: v980.CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: v980.VersionedMultiLocation,
            destWeightLimit: v980.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_with_fee`].
     */
    v990: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: v990.CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: v990.VersionedMultiLocation,
            destWeightLimit: v990.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_with_fee`].
     */
    v10000: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: v10000.CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: v10000.VersionedMultiLocation,
            destWeightLimit: v10000.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_with_fee`].
     */
    v11000: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: v11000.CurrencyId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: v11000.VersionedLocation,
            destWeightLimit: v11000.V3WeightLimit,
        })
    ),
}

export const transferMultiassetWithFee =  {
    name: 'XTokens.transfer_multiasset_with_fee',
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
    v952: new CallType(
        'XTokens.transfer_multiasset_with_fee',
        sts.struct({
            asset: v952.VersionedMultiAsset,
            fee: v952.VersionedMultiAsset,
            dest: v952.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v968: new CallType(
        'XTokens.transfer_multiasset_with_fee',
        sts.struct({
            asset: v968.VersionedMultiAsset,
            fee: v968.VersionedMultiAsset,
            dest: v968.VersionedMultiLocation,
            destWeightLimit: v968.V2WeightLimit,
        })
    ),
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
    v970: new CallType(
        'XTokens.transfer_multiasset_with_fee',
        sts.struct({
            asset: v970.VersionedMultiAsset,
            fee: v970.VersionedMultiAsset,
            dest: v970.VersionedMultiLocation,
            destWeightLimit: v970.V2WeightLimit,
        })
    ),
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
    v972: new CallType(
        'XTokens.transfer_multiasset_with_fee',
        sts.struct({
            asset: v972.VersionedMultiAsset,
            fee: v972.VersionedMultiAsset,
            dest: v972.VersionedMultiLocation,
            destWeightLimit: v972.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_multiasset_with_fee`].
     */
    v10000: new CallType(
        'XTokens.transfer_multiasset_with_fee',
        sts.struct({
            asset: v10000.VersionedMultiAsset,
            fee: v10000.VersionedMultiAsset,
            dest: v10000.VersionedMultiLocation,
            destWeightLimit: v10000.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_multiasset_with_fee`].
     */
    v11000: new CallType(
        'XTokens.transfer_multiasset_with_fee',
        sts.struct({
            asset: v11000.VersionedAsset,
            fee: v11000.VersionedAsset,
            dest: v11000.VersionedLocation,
            destWeightLimit: v11000.V3WeightLimit,
        })
    ),
}

export const transferMulticurrencies =  {
    name: 'XTokens.transfer_multicurrencies',
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
    v952: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [v952.CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: v952.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v956: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [v956.CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: v956.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v962: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [v962.CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: v962.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v968: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [v968.CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: v968.VersionedMultiLocation,
            destWeightLimit: v968.V2WeightLimit,
        })
    ),
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
    v970: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [v970.CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: v970.VersionedMultiLocation,
            destWeightLimit: v970.V2WeightLimit,
        })
    ),
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
    v972: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [v972.CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: v972.VersionedMultiLocation,
            destWeightLimit: v972.V3WeightLimit,
        })
    ),
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
    v980: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [v980.CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: v980.VersionedMultiLocation,
            destWeightLimit: v980.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_multicurrencies`].
     */
    v990: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [v990.CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: v990.VersionedMultiLocation,
            destWeightLimit: v990.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_multicurrencies`].
     */
    v10000: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [v10000.CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: v10000.VersionedMultiLocation,
            destWeightLimit: v10000.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_multicurrencies`].
     */
    v11000: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [v11000.CurrencyId, sts.bigint()])),
            feeItem: sts.number(),
            dest: v11000.VersionedLocation,
            destWeightLimit: v11000.V3WeightLimit,
        })
    ),
}

export const transferMultiassets =  {
    name: 'XTokens.transfer_multiassets',
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
    v952: new CallType(
        'XTokens.transfer_multiassets',
        sts.struct({
            assets: v952.VersionedMultiAssets,
            feeItem: sts.number(),
            dest: v952.VersionedMultiLocation,
            destWeight: sts.bigint(),
        })
    ),
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
    v968: new CallType(
        'XTokens.transfer_multiassets',
        sts.struct({
            assets: v968.VersionedMultiAssets,
            feeItem: sts.number(),
            dest: v968.VersionedMultiLocation,
            destWeightLimit: v968.V2WeightLimit,
        })
    ),
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
    v970: new CallType(
        'XTokens.transfer_multiassets',
        sts.struct({
            assets: v970.VersionedMultiAssets,
            feeItem: sts.number(),
            dest: v970.VersionedMultiLocation,
            destWeightLimit: v970.V2WeightLimit,
        })
    ),
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
    v972: new CallType(
        'XTokens.transfer_multiassets',
        sts.struct({
            assets: v972.VersionedMultiAssets,
            feeItem: sts.number(),
            dest: v972.VersionedMultiLocation,
            destWeightLimit: v972.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_multiassets`].
     */
    v10000: new CallType(
        'XTokens.transfer_multiassets',
        sts.struct({
            assets: v10000.VersionedMultiAssets,
            feeItem: sts.number(),
            dest: v10000.VersionedMultiLocation,
            destWeightLimit: v10000.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_multiassets`].
     */
    v11000: new CallType(
        'XTokens.transfer_multiassets',
        sts.struct({
            assets: v11000.VersionedAssets,
            feeItem: sts.number(),
            dest: v11000.VersionedLocation,
            destWeightLimit: v11000.V3WeightLimit,
        })
    ),
}
