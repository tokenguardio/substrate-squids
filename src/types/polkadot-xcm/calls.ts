import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v115 from '../v115'
import * as v160 from '../v160'
import * as v205 from '../v205'
import * as v244 from '../v244'

export const send =  {
    name: 'PolkadotXcm.send',
    v108: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: v108.VersionedMultiLocation,
            message: v108.VersionedXcm,
        })
    ),
    v160: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: v160.VersionedMultiLocation,
            message: v160.VersionedXcm,
        })
    ),
    /**
     * See [`Pallet::send`].
     */
    v244: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: v244.VersionedLocation,
            message: v244.VersionedXcm,
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
    v108: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: v108.VersionedMultiLocation,
            beneficiary: v108.VersionedMultiLocation,
            assets: v108.VersionedMultiAssets,
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
    v160: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: v160.VersionedMultiLocation,
            beneficiary: v160.VersionedMultiLocation,
            assets: v160.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * See [`Pallet::teleport_assets`].
     */
    v244: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: v244.VersionedLocation,
            beneficiary: v244.VersionedLocation,
            assets: v244.VersionedAssets,
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
    v108: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: v108.VersionedMultiLocation,
            beneficiary: v108.VersionedMultiLocation,
            assets: v108.VersionedMultiAssets,
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
    v160: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: v160.VersionedMultiLocation,
            beneficiary: v160.VersionedMultiLocation,
            assets: v160.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
    /**
     * See [`Pallet::reserve_transfer_assets`].
     */
    v244: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: v244.VersionedLocation,
            beneficiary: v244.VersionedLocation,
            assets: v244.VersionedAssets,
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
    v108: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: v108.Type_251,
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
    v115: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: v115.Type_271,
            maxWeight: v115.Weight,
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
    v160: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: v160.Type_317,
            maxWeight: v160.Weight,
        })
    ),
    /**
     * See [`Pallet::execute`].
     */
    v244: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: v244.Type_449,
            maxWeight: v244.Weight,
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
    v108: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v108.V1MultiLocation,
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
    v160: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v160.V3MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    v205: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v205.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_xcm_version`].
     */
    v244: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: v244.V4Location,
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
    v108: new CallType(
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
    v108: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: v108.VersionedMultiLocation,
        })
    ),
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    v160: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: v160.VersionedMultiLocation,
        })
    ),
    /**
     * See [`Pallet::force_subscribe_version_notify`].
     */
    v244: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: v244.VersionedLocation,
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
    v108: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: v108.VersionedMultiLocation,
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
    v160: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: v160.VersionedMultiLocation,
        })
    ),
    /**
     * See [`Pallet::force_unsubscribe_version_notify`].
     */
    v244: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: v244.VersionedLocation,
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
    v108: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: v108.VersionedMultiLocation,
            beneficiary: v108.VersionedMultiLocation,
            assets: v108.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v108.V2WeightLimit,
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
    v160: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: v160.VersionedMultiLocation,
            beneficiary: v160.VersionedMultiLocation,
            assets: v160.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v160.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::limited_reserve_transfer_assets`].
     */
    v244: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: v244.VersionedLocation,
            beneficiary: v244.VersionedLocation,
            assets: v244.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: v244.V3WeightLimit,
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
    v108: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: v108.VersionedMultiLocation,
            beneficiary: v108.VersionedMultiLocation,
            assets: v108.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v108.V2WeightLimit,
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
    v160: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: v160.VersionedMultiLocation,
            beneficiary: v160.VersionedMultiLocation,
            assets: v160.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: v160.V3WeightLimit,
        })
    ),
    /**
     * See [`Pallet::limited_teleport_assets`].
     */
    v244: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: v244.VersionedLocation,
            beneficiary: v244.VersionedLocation,
            assets: v244.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: v244.V3WeightLimit,
        })
    ),
}

export const forceSuspension =  {
    name: 'PolkadotXcm.force_suspension',
    /**
     * See [`Pallet::force_suspension`].
     */
    v205: new CallType(
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
    v244: new CallType(
        'PolkadotXcm.transfer_assets',
        sts.struct({
            dest: v244.VersionedLocation,
            beneficiary: v244.VersionedLocation,
            assets: v244.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: v244.V3WeightLimit,
        })
    ),
}
