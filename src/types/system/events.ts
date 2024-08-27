import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v9 from '../v9'
import * as v15 from '../v15'
import * as v43 from '../v43'
import * as v49 from '../v49'
import * as v64 from '../v64'
import * as v91 from '../v91'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully. \[info\]
     */
    v1: new EventType(
        'System.ExtrinsicSuccess',
        v1.DispatchInfo
    ),
    /**
     * An extrinsic completed successfully.
     */
    v9: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v9.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v43: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v43.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v49: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v49.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed. \[error, info\]
     */
    v1: new EventType(
        'System.ExtrinsicFailed',
        sts.tuple([v1.DispatchError, v1.DispatchInfo])
    ),
    /**
     * An extrinsic failed.
     */
    v9: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v9.DispatchError,
            dispatchInfo: v9.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v15: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v15.DispatchError,
            dispatchInfo: v15.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v43: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v43.DispatchError,
            dispatchInfo: v43.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v49: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v49.DispatchError,
            dispatchInfo: v49.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v64: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v64.DispatchError,
            dispatchInfo: v64.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    v1: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     * A new \[account\] was created.
     */
    v1: new EventType(
        'System.NewAccount',
        v1.AccountId32
    ),
    /**
     * A new account was created.
     */
    v9: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v9.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     * An \[account\] was reaped.
     */
    v1: new EventType(
        'System.KilledAccount',
        v1.AccountId32
    ),
    /**
     * An account was reaped.
     */
    v9: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v9.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened. \[origin, remark_hash\]
     */
    v1: new EventType(
        'System.Remarked',
        sts.tuple([v1.AccountId32, v1.H256])
    ),
    /**
     * On on-chain remark happened.
     */
    v9: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v9.AccountId32,
            hash: v9.H256,
        })
    ),
}

export const upgradeAuthorized =  {
    name: 'System.UpgradeAuthorized',
    /**
     * An upgrade was authorized.
     */
    v91: new EventType(
        'System.UpgradeAuthorized',
        sts.struct({
            codeHash: v91.H256,
            checkVersion: sts.boolean(),
        })
    ),
}
