import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v950 from '../v950'
import * as v968 from '../v968'
import * as v978 from '../v978'
import * as v990 from '../v990'
import * as v10000 from '../v10000'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully.
     */
    v932: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v932.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v968: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v968.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed.
     */
    v932: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v932.DispatchError,
            dispatchInfo: v932.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v950: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v950.DispatchError,
            dispatchInfo: v950.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v968: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v968.DispatchError,
            dispatchInfo: v968.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v978: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v978.DispatchError,
            dispatchInfo: v978.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v990: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v990.DispatchError,
            dispatchInfo: v990.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    v932: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     * A new account was created.
     */
    v932: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v932.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     * An account was reaped.
     */
    v932: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v932.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened.
     */
    v932: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v932.AccountId32,
            hash: v932.H256,
        })
    ),
}

export const upgradeAuthorized =  {
    name: 'System.UpgradeAuthorized',
    /**
     * An upgrade was authorized.
     */
    v10000: new EventType(
        'System.UpgradeAuthorized',
        sts.struct({
            codeHash: v10000.H256,
            checkVersion: sts.boolean(),
        })
    ),
}
