import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v3 from '../v3'
import * as v12 from '../v12'
import * as v39 from '../v39'
import * as v58 from '../v58'
import * as v68 from '../v68'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     *  An extrinsic completed successfully. \[info\]
     */
    v3: new EventType(
        'System.ExtrinsicSuccess',
        v3.DispatchInfo
    ),
    /**
     * An extrinsic completed successfully.
     */
    v39: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v39.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v58: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v58.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     *  An extrinsic failed. \[error, info\]
     */
    v3: new EventType(
        'System.ExtrinsicFailed',
        sts.tuple([v3.DispatchError, v3.DispatchInfo])
    ),
    /**
     * An extrinsic failed. \[error, info\]
     */
    v12: new EventType(
        'System.ExtrinsicFailed',
        sts.tuple([v12.DispatchError, v12.DispatchInfo])
    ),
    /**
     * An extrinsic failed.
     */
    v39: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v39.DispatchError,
            dispatchInfo: v39.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v58: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v58.DispatchError,
            dispatchInfo: v58.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v68: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v68.DispatchError,
            dispatchInfo: v68.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     *  `:code` was updated.
     */
    v3: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     *  A new \[account\] was created.
     */
    v3: new EventType(
        'System.NewAccount',
        v3.AccountId
    ),
    /**
     * A new account was created.
     */
    v39: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v39.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     *  An \[account\] was reaped.
     */
    v3: new EventType(
        'System.KilledAccount',
        v3.AccountId
    ),
    /**
     * An account was reaped.
     */
    v39: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v39.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     *  On on-chain remark happened. \[origin, remark_hash\]
     */
    v3: new EventType(
        'System.Remarked',
        sts.tuple([v3.AccountId, v3.Hash])
    ),
    /**
     * On on-chain remark happened.
     */
    v39: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v39.AccountId32,
            hash: v39.H256,
        })
    ),
}
