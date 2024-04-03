import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v900 from '../v900'
import * as v1300 from '../v1300'
import * as v1401 from '../v1401'
import * as v1606 from '../v1606'
import * as v1901 from '../v1901'
import * as v2000 from '../v2000'
import * as v2501 from '../v2501'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully. \[info\]
     */
    v900: new EventType(
        'System.ExtrinsicSuccess',
        v900.DispatchInfo
    ),
    /**
     * An extrinsic completed successfully.
     */
    v1300: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v1300.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v1901: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v1901.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v2000: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v2000.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed. \[error, info\]
     */
    v900: new EventType(
        'System.ExtrinsicFailed',
        sts.tuple([v900.DispatchError, v900.DispatchInfo])
    ),
    /**
     * An extrinsic failed.
     */
    v1300: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v1300.DispatchError,
            dispatchInfo: v1300.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v1401: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v1401.DispatchError,
            dispatchInfo: v1401.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v1606: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v1606.DispatchError,
            dispatchInfo: v1606.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v1901: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v1901.DispatchError,
            dispatchInfo: v1901.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v2000: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v2000.DispatchError,
            dispatchInfo: v2000.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v2501: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v2501.DispatchError,
            dispatchInfo: v2501.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    v900: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     * A new \[account\] was created.
     */
    v900: new EventType(
        'System.NewAccount',
        v900.H160
    ),
    /**
     * A new account was created.
     */
    v1300: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v1300.AccountId20,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     * An \[account\] was reaped.
     */
    v900: new EventType(
        'System.KilledAccount',
        v900.H160
    ),
    /**
     * An account was reaped.
     */
    v1300: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v1300.AccountId20,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened. \[origin, remark_hash\]
     */
    v900: new EventType(
        'System.Remarked',
        sts.tuple([v900.H160, v900.H256])
    ),
    /**
     * On on-chain remark happened.
     */
    v1300: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v1300.AccountId20,
            hash: v1300.H256,
        })
    ),
}
