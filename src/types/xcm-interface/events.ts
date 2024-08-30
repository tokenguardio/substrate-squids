import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v972 from '../v972'
import * as v982 from '../v982'
import * as v990 from '../v990'
import * as v996 from '../v996'
import * as v12001 from '../v12001'

export const xcmDestWeightUpdated =  {
    name: 'XcmInterface.XcmDestWeightUpdated',
    /**
     * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
     */
    v952: new EventType(
        'XcmInterface.XcmDestWeightUpdated',
        sts.tuple([v952.XcmInterfaceOperation, sts.bigint()])
    ),
    /**
     * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
     */
    v972: new EventType(
        'XcmInterface.XcmDestWeightUpdated',
        sts.tuple([v972.XcmInterfaceOperation, v972.Weight])
    ),
}

export const xcmFeeUpdated =  {
    name: 'XcmInterface.XcmFeeUpdated',
    /**
     * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
     */
    v952: new EventType(
        'XcmInterface.XcmFeeUpdated',
        sts.tuple([v952.XcmInterfaceOperation, sts.bigint()])
    ),
}

export const transferredStatemineMultiAsset =  {
    name: 'XcmInterface.TransferredStatemineMultiAsset',
    v952: new EventType(
        'XcmInterface.TransferredStatemineMultiAsset',
        sts.tuple([v952.AccountId32, sts.bigint()])
    ),
}

export const xcmDestWeightAndFeeUpdated =  {
    name: 'XcmInterface.XcmDestWeightAndFeeUpdated',
    v982: new EventType(
        'XcmInterface.XcmDestWeightAndFeeUpdated',
        sts.tuple([v982.XcmOperationType, v982.CurrencyId, v982.Weight, sts.bigint()])
    ),
    v990: new EventType(
        'XcmInterface.XcmDestWeightAndFeeUpdated',
        sts.tuple([v990.XcmOperationType, v990.CurrencyId, v990.Weight, sts.bigint()])
    ),
    v996: new EventType(
        'XcmInterface.XcmDestWeightAndFeeUpdated',
        sts.tuple([v996.XcmOperationType, v996.CurrencyId, v996.Weight, sts.bigint()])
    ),
    v12001: new EventType(
        'XcmInterface.XcmDestWeightAndFeeUpdated',
        sts.tuple([v12001.XcmOperationType, v12001.CurrencyId, v12001.Weight, sts.bigint()])
    ),
}

export const transferredEthereumAssets =  {
    name: 'XcmInterface.TransferredEthereumAssets',
    v12001: new EventType(
        'XcmInterface.TransferredEthereumAssets',
        sts.tuple([v12001.AccountId32, v12001.H160, sts.bigint()])
    ),
}
