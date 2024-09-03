import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9291 from '../v9291'
import * as v9340 from '../v9340'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v1000001 from '../v1000001'
import * as v1002000 from '../v1002000'
import * as v1002004 from '../v1002004'

export const send =  {
    name: 'XcmPallet.send',
    v9140: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v9140.VersionedMultiLocation,
            message: v9140.VersionedXcm,
        })
    ),
    v9170: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v9170.VersionedMultiLocation,
            message: v9170.VersionedXcm,
        })
    ),
    v9370: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v9370.VersionedMultiLocation,
            message: v9370.VersionedXcm,
        })
    ),
    v9420: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v9420.VersionedMultiLocation,
            message: v9420.VersionedXcm,
        })
    ),
    /**
     * See [`Pallet::send`].
     */
    v1002000: new CallType(
        'XcmPallet.send',
        sts.struct({
            dest: v1002000.VersionedLocation,
            message: v1002000.VersionedXcm,
        })
    ),
}

export const teleportAssets =  {
    name: 'XcmPallet.teleport_assets',
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
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     */
    v9140: new CallType(
        'XcmPallet.teleport_assets',
        sts.struct({
            dest: v9140.VersionedMultiLocation,
            beneficiary: v9140.VersionedMultiLocation,
            assets: v9140.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
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
    v9370: new CallType(
        'XcmPallet.teleport_assets',
        sts.struct({
            dest: v9370.VersionedMultiLocation,
            beneficiary: v9370.VersionedMultiLocation,
            assets: v9370.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
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
    v9420: new CallType(
        'XcmPallet.teleport_assets',
        sts.struct({
            dest: v9420.VersionedMultiLocation,
            beneficiary: v9420.VersionedMultiLocation,
            assets: v9420.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * See [`Pallet::teleport_assets`].
     */
    v1002000: new CallType(
        'XcmPallet.teleport_assets',
        sts.struct({
            dest: v1002000.VersionedLocation,
            beneficiary: v1002000.VersionedLocation,
            assets: v1002000.VersionedAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const reserveTransferAssets =  {
    name: 'XcmPallet.reserve_transfer_assets',
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
    v9140: new CallType(
        'XcmPallet.reserve_transfer_assets',
        sts.struct({
            dest: v9140.VersionedMultiLocation,
            beneficiary: v9140.VersionedMultiLocation,
            assets: v9140.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
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
    v9370: new CallType(
        'XcmPallet.reserve_transfer_assets',
        sts.struct({
            dest: v9370.VersionedMultiLocation,
            beneficiary: v9370.VersionedMultiLocation,
            assets: v9370.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
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
    v9420: new CallType(
        'XcmPallet.reserve_transfer_assets',
        sts.struct({
            dest: v9420.VersionedMultiLocation,
            beneficiary: v9420.VersionedMultiLocation,
            assets: v9420.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * See [`Pallet::reserve_transfer_assets`].
     */
    v1002000: new CallType(
        'XcmPallet.reserve_transfer_assets',
        sts.struct({
            dest: v1002000.VersionedLocation,
            beneficiary: v1002000.VersionedLocation,
            assets: v1002000.VersionedAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const execute =  {
    name: 'XcmPallet.execute',
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
    v9140: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9140.Type_408,
            maxWeight: sts.bigint(),
        })
    ),
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
    v9170: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9170.Type_414,
            maxWeight: sts.bigint(),
        })
    ),
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
    v9291: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9291.Type_434,
            maxWeight: v9291.Weight,
        })
    ),
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
    v9340: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9340.Type_435,
            maxWeight: sts.bigint(),
        })
    ),
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
    v9370: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9370.Type_438,
            maxWeight: sts.bigint(),
        })
    ),
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
    v9420: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v9420.Type_425,
            maxWeight: v9420.Weight,
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    v1002000: new CallType(
        'XcmPallet.execute',
        sts.struct({
            message: v1002000.Type_452,
            maxWeight: v1002000.Weight,
        })
    ),
}

export const forceXcmVersion =  {
    name: 'XcmPallet.force_xcm_version',
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    v9140: new CallType(
        'XcmPallet.force_xcm_version',
        sts.struct({
            location: v9140.V1MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    v9370: new CallType(
        'XcmPallet.force_xcm_version',
        sts.struct({
            location: v9370.V1MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    v9420: new CallType(
        'XcmPallet.force_xcm_version',
        sts.struct({
            location: v9420.V3MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    v1000001: new CallType(
        'XcmPallet.force_xcm_version',
        sts.struct({
            location: v1000001.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    v1002000: new CallType(
        'XcmPallet.force_xcm_version',
        sts.struct({
            location: v1002000.V4Location,
            version: sts.number(),
        })
    ),
}

export const forceDefaultXcmVersion =  {
    name: 'XcmPallet.force_default_xcm_version',
    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    v9140: new CallType(
        'XcmPallet.force_default_xcm_version',
        sts.struct({
            maybeXcmVersion: sts.option(() => sts.number()),
        })
    ),
}

export const forceSubscribeVersionNotify =  {
    name: 'XcmPallet.force_subscribe_version_notify',
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v9140: new CallType(
        'XcmPallet.force_subscribe_version_notify',
        sts.struct({
            location: v9140.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v9370: new CallType(
        'XcmPallet.force_subscribe_version_notify',
        sts.struct({
            location: v9370.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v9420: new CallType(
        'XcmPallet.force_subscribe_version_notify',
        sts.struct({
            location: v9420.VersionedMultiLocation,
        })
    ),
    /**
     * See [`Pallet::force_subscribe_version_notify`].
     */
    v1002000: new CallType(
        'XcmPallet.force_subscribe_version_notify',
        sts.struct({
            location: v1002000.VersionedLocation,
        })
    ),
}

export const forceUnsubscribeVersionNotify =  {
    name: 'XcmPallet.force_unsubscribe_version_notify',
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    v9140: new CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        sts.struct({
            location: v9140.VersionedMultiLocation,
        })
    ),
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    v9370: new CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        sts.struct({
            location: v9370.VersionedMultiLocation,
        })
    ),
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    v9420: new CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        sts.struct({
            location: v9420.VersionedMultiLocation,
        })
    ),
    /**
     * See [`Pallet::force_unsubscribe_version_notify`].
     */
    v1002000: new CallType(
        'XcmPallet.force_unsubscribe_version_notify',
        sts.struct({
            location: v1002000.VersionedLocation,
        })
    ),
}

export const limitedReserveTransferAssets =  {
    name: 'XcmPallet.limited_reserve_transfer_assets',
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
    v9140: new CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        sts.struct({
            dest: v9140.VersionedMultiLocation,
            beneficiary: v9140.VersionedMultiLocation,
            assets: v9140.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9140.V2WeightLimit,
        })
    ),
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
    v9370: new CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        sts.struct({
            dest: v9370.VersionedMultiLocation,
            beneficiary: v9370.VersionedMultiLocation,
            assets: v9370.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9370.V2WeightLimit,
        })
    ),
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
    v9420: new CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        sts.struct({
            dest: v9420.VersionedMultiLocation,
            beneficiary: v9420.VersionedMultiLocation,
            assets: v9420.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9420.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::limited_reserve_transfer_assets`].
     */
    v1002000: new CallType(
        'XcmPallet.limited_reserve_transfer_assets',
        sts.struct({
            dest: v1002000.VersionedLocation,
            beneficiary: v1002000.VersionedLocation,
            assets: v1002000.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: v1002000.V3WeightLimit,
        })
    ),
}

export const limitedTeleportAssets =  {
    name: 'XcmPallet.limited_teleport_assets',
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
     * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
     *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    v9140: new CallType(
        'XcmPallet.limited_teleport_assets',
        sts.struct({
            dest: v9140.VersionedMultiLocation,
            beneficiary: v9140.VersionedMultiLocation,
            assets: v9140.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9140.V2WeightLimit,
        })
    ),
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
    v9370: new CallType(
        'XcmPallet.limited_teleport_assets',
        sts.struct({
            dest: v9370.VersionedMultiLocation,
            beneficiary: v9370.VersionedMultiLocation,
            assets: v9370.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9370.V2WeightLimit,
        })
    ),
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
    v9420: new CallType(
        'XcmPallet.limited_teleport_assets',
        sts.struct({
            dest: v9420.VersionedMultiLocation,
            beneficiary: v9420.VersionedMultiLocation,
            assets: v9420.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v9420.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::limited_teleport_assets`].
     */
    v1002000: new CallType(
        'XcmPallet.limited_teleport_assets',
        sts.struct({
            dest: v1002000.VersionedLocation,
            beneficiary: v1002000.VersionedLocation,
            assets: v1002000.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: v1002000.V3WeightLimit,
        })
    ),
}

export const forceSuspension =  {
    name: 'XcmPallet.force_suspension',
    /**
     * Set or unset the global suspension state of the XCM executor.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    v9420: new CallType(
        'XcmPallet.force_suspension',
        sts.struct({
            suspended: sts.boolean(),
        })
    ),
}

export const transferAssets =  {
    name: 'XcmPallet.transfer_assets',
    /**
     * See [`Pallet::transfer_assets`].
     */
    v1002000: new CallType(
        'XcmPallet.transfer_assets',
        sts.struct({
            dest: v1002000.VersionedLocation,
            beneficiary: v1002000.VersionedLocation,
            assets: v1002000.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: v1002000.V3WeightLimit,
        })
    ),
}

export const claimAssets =  {
    name: 'XcmPallet.claim_assets',
    /**
     * See [`Pallet::claim_assets`].
     */
    v1002000: new CallType(
        'XcmPallet.claim_assets',
        sts.struct({
            assets: v1002000.VersionedAssets,
            beneficiary: v1002000.VersionedLocation,
        })
    ),
}

export const transferAssetsUsingTypeAndThen =  {
    name: 'XcmPallet.transfer_assets_using_type_and_then',
    /**
     * See [`Pallet::transfer_assets_using_type_and_then`].
     */
    v1002004: new CallType(
        'XcmPallet.transfer_assets_using_type_and_then',
        sts.struct({
            dest: v1002004.VersionedLocation,
            assets: v1002004.VersionedAssets,
            assetsTransferType: v1002004.TransferType,
            remoteFeesId: v1002004.VersionedAssetId,
            feesTransferType: v1002004.TransferType,
            customXcmOnDest: v1002004.VersionedXcm,
            weightLimit: v1002004.V3WeightLimit,
        })
    ),
}
