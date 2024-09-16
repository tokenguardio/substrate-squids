import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v972 from '../v972'
import * as v982 from '../v982'
import * as v990 from '../v990'
import * as v996 from '../v996'
import * as v12001 from '../v12001'

export const updateXcmDestWeightAndFee =  {
    name: 'XcmInterface.update_xcm_dest_weight_and_fee',
    /**
     * Sets the xcm_dest_weight and fee for XCM operation of XcmInterface.
     * 
     * Parameters:
     * - `updates`: vec of tuple: (XcmInterfaceOperation, WeightChange, FeeChange).
     */
    v952: new CallType(
        'XcmInterface.update_xcm_dest_weight_and_fee',
        sts.struct({
            updates: sts.array(() => sts.tuple(() => [v952.XcmInterfaceOperation, sts.option(() => sts.bigint()), sts.option(() => sts.bigint())])),
        })
    ),
    /**
     * Sets the xcm_dest_weight and fee for XCM operation of XcmInterface.
     * 
     * Parameters:
     * - `updates`: vec of tuple: (XcmInterfaceOperation, WeightChange, FeeChange).
     */
    v972: new CallType(
        'XcmInterface.update_xcm_dest_weight_and_fee',
        sts.struct({
            updates: sts.array(() => sts.tuple(() => [v972.XcmInterfaceOperation, sts.option(() => v972.Weight), sts.option(() => sts.bigint())])),
        })
    ),
    /**
     * Sets the xcm_dest_weight and fee for XCM operation of XcmInterface.
     * 
     * Parameters:
     * - `updates`: vec of tuple: (XcmOperationType, WeightChange, FeeChange).
     */
    v982: new CallType(
        'XcmInterface.update_xcm_dest_weight_and_fee',
        sts.struct({
            updates: sts.array(() => sts.tuple(() => [v982.CurrencyId, v982.XcmOperationType, v982.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::update_xcm_dest_weight_and_fee`].
     */
    v990: new CallType(
        'XcmInterface.update_xcm_dest_weight_and_fee',
        sts.struct({
            updates: sts.array(() => sts.tuple(() => [v990.CurrencyId, v990.XcmOperationType, v990.Weight, sts.bigint()])),
        })
    ),
    /**
     * See [`Pallet::update_xcm_dest_weight_and_fee`].
     */
    v996: new CallType(
        'XcmInterface.update_xcm_dest_weight_and_fee',
        sts.struct({
            updates: sts.array(() => sts.tuple(() => [v996.CurrencyId, v996.XcmOperationType, v996.Weight, sts.bigint()])),
        })
    ),
    /**
     * Sets the xcm_dest_weight and fee for XCM operation of XcmInterface.
     * 
     * Parameters:
     * - `updates`: vec of tuple: (XcmOperationType, WeightChange, FeeChange).
     */
    v12001: new CallType(
        'XcmInterface.update_xcm_dest_weight_and_fee',
        sts.struct({
            updates: sts.array(() => sts.tuple(() => [v12001.CurrencyId, v12001.XcmOperationType, v12001.Weight, sts.bigint()])),
        })
    ),
}

export const transferStatemineAssets =  {
    name: 'XcmInterface.transfer_statemine_assets',
    v952: new CallType(
        'XcmInterface.transfer_statemine_assets',
        sts.struct({
            amount: sts.bigint(),
            assetId: sts.number(),
            dest: sts.option(() => v952.AccountId32),
        })
    ),
}

export const transferEthereumAssets =  {
    name: 'XcmInterface.transfer_ethereum_assets',
    v12001: new CallType(
        'XcmInterface.transfer_ethereum_assets',
        sts.struct({
            currencyId: v12001.CurrencyId,
            amount: sts.bigint(),
            to: v12001.H160,
        })
    ),
}
