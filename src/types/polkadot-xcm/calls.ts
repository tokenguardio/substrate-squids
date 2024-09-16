import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v970 from '../v970'
import * as v972 from '../v972'
import * as v990 from '../v990'
import * as v10000 from '../v10000'
import * as v11000 from '../v11000'
import * as v12001 from '../v12001'

export const send =  {
    name: 'PolkadotXcm.send',
    v932: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: v932.VersionedMultiLocation,
            message: v932.VersionedXcm,
        })
    ),
    v970: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: v970.VersionedMultiLocation,
            message: v970.VersionedXcm,
        })
    ),
    v972: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: v972.VersionedMultiLocation,
            message: v972.VersionedXcm,
        })
    ),
    /**
     * See [`Pallet::send`].
     */
    v10000: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: v10000.VersionedMultiLocation,
            message: v10000.VersionedXcm,
        })
    ),
    /**
     * See [`Pallet::send`].
     */
    v11000: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: v11000.VersionedLocation,
            message: v11000.VersionedXcm,
        })
    ),
}

export const teleportAssets =  {
    name: 'PolkadotXcm.teleport_assets',
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
    v932: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: v932.VersionedMultiLocation,
            beneficiary: v932.VersionedMultiLocation,
            assets: v932.VersionedMultiAssets,
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
    v970: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: v970.VersionedMultiLocation,
            beneficiary: v970.VersionedMultiLocation,
            assets: v970.VersionedMultiAssets,
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
    v972: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: v972.VersionedMultiLocation,
            beneficiary: v972.VersionedMultiLocation,
            assets: v972.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * See [`Pallet::teleport_assets`].
     */
    v10000: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: v10000.VersionedMultiLocation,
            beneficiary: v10000.VersionedMultiLocation,
            assets: v10000.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * See [`Pallet::teleport_assets`].
     */
    v11000: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: v11000.VersionedLocation,
            beneficiary: v11000.VersionedLocation,
            assets: v11000.VersionedAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const reserveTransferAssets =  {
    name: 'PolkadotXcm.reserve_transfer_assets',
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
    v932: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: v932.VersionedMultiLocation,
            beneficiary: v932.VersionedMultiLocation,
            assets: v932.VersionedMultiAssets,
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
    v970: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: v970.VersionedMultiLocation,
            beneficiary: v970.VersionedMultiLocation,
            assets: v970.VersionedMultiAssets,
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
    v972: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: v972.VersionedMultiLocation,
            beneficiary: v972.VersionedMultiLocation,
            assets: v972.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * See [`Pallet::reserve_transfer_assets`].
     */
    v10000: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: v10000.VersionedMultiLocation,
            beneficiary: v10000.VersionedMultiLocation,
            assets: v10000.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * See [`Pallet::reserve_transfer_assets`].
     */
    v11000: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: v11000.VersionedLocation,
            beneficiary: v11000.VersionedLocation,
            assets: v11000.VersionedAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const execute =  {
    name: 'PolkadotXcm.execute',
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
    v932: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: v932.Type_163,
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
    v970: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: v970.Type_328,
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
    v972: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: v972.Type_335,
            maxWeight: v972.Weight,
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    v10000: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: v10000.Type_182,
            maxWeight: v10000.Weight,
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    v11000: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: v11000.Type_215,
            maxWeight: v11000.Weight,
        })
    ),
}

export const forceXcmVersion =  {
    name: 'PolkadotXcm.force_xcm_version',
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    v932: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v932.V1MultiLocation,
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
    v970: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v970.V1MultiLocation,
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
    v972: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v972.V3MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    v990: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v990.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    v10000: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v10000.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    v11000: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v11000.V4Location,
            version: sts.number(),
        })
    ),
}

export const forceDefaultXcmVersion =  {
    name: 'PolkadotXcm.force_default_xcm_version',
    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    v932: new CallType(
        'PolkadotXcm.force_default_xcm_version',
        sts.struct({
            maybeXcmVersion: sts.option(() => sts.number()),
        })
    ),
}

export const forceSubscribeVersionNotify =  {
    name: 'PolkadotXcm.force_subscribe_version_notify',
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v932: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: v932.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v970: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: v970.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v972: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: v972.VersionedMultiLocation,
        })
    ),
    /**
     * See [`Pallet::force_subscribe_version_notify`].
     */
    v10000: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: v10000.VersionedMultiLocation,
        })
    ),
    /**
     * See [`Pallet::force_subscribe_version_notify`].
     */
    v11000: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: v11000.VersionedLocation,
        })
    ),
}

export const forceUnsubscribeVersionNotify =  {
    name: 'PolkadotXcm.force_unsubscribe_version_notify',
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    v932: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: v932.VersionedMultiLocation,
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
    v970: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: v970.VersionedMultiLocation,
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
    v972: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: v972.VersionedMultiLocation,
        })
    ),
    /**
     * See [`Pallet::force_unsubscribe_version_notify`].
     */
    v10000: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: v10000.VersionedMultiLocation,
        })
    ),
    /**
     * See [`Pallet::force_unsubscribe_version_notify`].
     */
    v11000: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: v11000.VersionedLocation,
        })
    ),
}

export const limitedReserveTransferAssets =  {
    name: 'PolkadotXcm.limited_reserve_transfer_assets',
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
    v932: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: v932.VersionedMultiLocation,
            beneficiary: v932.VersionedMultiLocation,
            assets: v932.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v932.V2WeightLimit,
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
    v970: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: v970.VersionedMultiLocation,
            beneficiary: v970.VersionedMultiLocation,
            assets: v970.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v970.V2WeightLimit,
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
    v972: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: v972.VersionedMultiLocation,
            beneficiary: v972.VersionedMultiLocation,
            assets: v972.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v972.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::limited_reserve_transfer_assets`].
     */
    v10000: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: v10000.VersionedMultiLocation,
            beneficiary: v10000.VersionedMultiLocation,
            assets: v10000.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v10000.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::limited_reserve_transfer_assets`].
     */
    v11000: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: v11000.VersionedLocation,
            beneficiary: v11000.VersionedLocation,
            assets: v11000.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: v11000.V3WeightLimit,
        })
    ),
}

export const limitedTeleportAssets =  {
    name: 'PolkadotXcm.limited_teleport_assets',
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
    v932: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: v932.VersionedMultiLocation,
            beneficiary: v932.VersionedMultiLocation,
            assets: v932.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v932.V2WeightLimit,
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
    v970: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: v970.VersionedMultiLocation,
            beneficiary: v970.VersionedMultiLocation,
            assets: v970.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v970.V2WeightLimit,
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
    v972: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: v972.VersionedMultiLocation,
            beneficiary: v972.VersionedMultiLocation,
            assets: v972.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v972.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::limited_teleport_assets`].
     */
    v10000: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: v10000.VersionedMultiLocation,
            beneficiary: v10000.VersionedMultiLocation,
            assets: v10000.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v10000.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::limited_teleport_assets`].
     */
    v11000: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: v11000.VersionedLocation,
            beneficiary: v11000.VersionedLocation,
            assets: v11000.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: v11000.V3WeightLimit,
        })
    ),
}

export const forceSuspension =  {
    name: 'PolkadotXcm.force_suspension',
    /**
     * Set or unset the global suspension state of the XCM executor.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    v978: new CallType(
        'PolkadotXcm.force_suspension',
        sts.struct({
            suspended: sts.boolean(),
        })
    ),
}

export const transferAssets =  {
    name: 'PolkadotXcm.transfer_assets',
    /**
     * See [`Pallet::transfer_assets`].
     */
    v10000: new CallType(
        'PolkadotXcm.transfer_assets',
        sts.struct({
            dest: v10000.VersionedMultiLocation,
            beneficiary: v10000.VersionedMultiLocation,
            assets: v10000.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v10000.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::transfer_assets`].
     */
    v11000: new CallType(
        'PolkadotXcm.transfer_assets',
        sts.struct({
            dest: v11000.VersionedLocation,
            beneficiary: v11000.VersionedLocation,
            assets: v11000.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: v11000.V3WeightLimit,
        })
    ),
}

export const claimAssets =  {
    name: 'PolkadotXcm.claim_assets',
    /**
     * See [`Pallet::claim_assets`].
     */
    v11000: new CallType(
        'PolkadotXcm.claim_assets',
        sts.struct({
            assets: v11000.VersionedAssets,
            beneficiary: v11000.VersionedLocation,
        })
    ),
}

export const transferAssetsUsingTypeAndThen =  {
    name: 'PolkadotXcm.transfer_assets_using_type_and_then',
    /**
     * Transfer assets from the local chain to the destination chain using explicit transfer
     * types for assets and fees.
     * 
     * `assets` must have same reserve location or may be teleportable to `dest`. Caller must
     * provide the `assets_transfer_type` to be used for `assets`:
     *  - `TransferType::LocalReserve`: transfer assets to sovereign account of destination
     *    chain and forward a notification XCM to `dest` to mint and deposit reserve-based
     *    assets to `beneficiary`.
     *  - `TransferType::DestinationReserve`: burn local assets and forward a notification to
     *    `dest` chain to withdraw the reserve assets from this chain's sovereign account and
     *    deposit them to `beneficiary`.
     *  - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve`
     *    chain to move reserves from this chain's SA to `dest` chain's SA, and forward another
     *    XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically
     *    the remote `reserve` is Asset Hub.
     *  - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to
     *    mint/teleport assets and deposit them to `beneficiary`.
     * 
     * On the destination chain, as well as any intermediary hops, `BuyExecution` is used to
     * buy execution using transferred `assets` identified by `remote_fees_id`.
     * Make sure enough of the specified `remote_fees_id` asset is included in the given list
     * of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight
     * is needed than `weight_limit`, then the operation will fail and the sent assets may be
     * at risk.
     * 
     * `remote_fees_id` may use different transfer type than rest of `assets` and can be
     * specified through `fees_transfer_type`.
     * 
     * The caller needs to specify what should happen to the transferred assets once they reach
     * the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which
     * contains the instructions to execute on `dest` as a final step.
     *   This is usually as simple as:
     *   `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,
     *   but could be something more exotic like sending the `assets` even further.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `[Parent,
     *   Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *   relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from
     *   parachain across a bridge to another ecosystem destination.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *   fee on the `dest` (and possibly reserve) chains.
     * - `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.
     * - `remote_fees_id`: One of the included `assets` to be be used to pay fees.
     * - `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.
     * - `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the
     *   transfer, which also determines what happens to the assets on the destination chain.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    v12001: new CallType(
        'PolkadotXcm.transfer_assets_using_type_and_then',
        sts.struct({
            dest: v12001.VersionedLocation,
            assets: v12001.VersionedAssets,
            assetsTransferType: v12001.TransferType,
            remoteFeesId: v12001.VersionedAssetId,
            feesTransferType: v12001.TransferType,
            customXcmOnDest: v12001.VersionedXcm,
            weightLimit: v12001.V3WeightLimit,
        })
    ),
}
