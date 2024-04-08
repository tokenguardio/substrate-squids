import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v30 from '../v30'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9291 from '../v9291'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     *  An extrinsic completed successfully.
     */
    v0: new EventType(
        'System.ExtrinsicSuccess',
        v0.DispatchInfo
    ),
    /**
     * An extrinsic completed successfully.
     */
    v9170: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v9170.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v9291: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v9291.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v9340: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v9340.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     *  An extrinsic failed.
     */
    v0: new EventType(
        'System.ExtrinsicFailed',
        sts.tuple([v0.DispatchError, v0.DispatchInfo])
    ),
    /**
     * An extrinsic failed. \[error, info\]
     */
    v9110: new EventType(
        'System.ExtrinsicFailed',
        sts.tuple([v9110.DispatchError, v9110.DispatchInfo])
    ),
    /**
     * An extrinsic failed.
     */
    v9170: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v9170.DispatchError,
            dispatchInfo: v9170.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v9190: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v9190.DispatchError,
            dispatchInfo: v9190.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v9291: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v9291.DispatchError,
            dispatchInfo: v9291.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v9340: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v9340.DispatchError,
            dispatchInfo: v9340.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v9420: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v9420.DispatchError,
            dispatchInfo: v9420.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v9430: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v9430.DispatchError,
            dispatchInfo: v9430.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     *  `:code` was updated.
     */
    v0: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     *  A new account was created.
     */
    v0: new EventType(
        'System.NewAccount',
        v0.AccountId
    ),
    /**
     * A new account was created.
     */
    v9170: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v9170.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     *  An account was reaped.
     */
    v0: new EventType(
        'System.KilledAccount',
        v0.AccountId
    ),
    /**
     * An account was reaped.
     */
    v9170: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v9170.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     *  On on-chain remark happened. \[origin, remark_hash\]
     */
    v30: new EventType(
        'System.Remarked',
        sts.tuple([v30.AccountId, v30.Hash])
    ),
    /**
     * On on-chain remark happened.
     */
    v9170: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v9170.AccountId32,
            hash: v9170.H256,
        })
    ),
}
