import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v104 from '../v104'
import * as v115 from '../v115'
import * as v160 from '../v160'
import * as v205 from '../v205'
import * as v244 from '../v244'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully. \[info\]
     */
    v100: new EventType(
        'System.ExtrinsicSuccess',
        v100.DispatchInfo
    ),
    /**
     * An extrinsic completed successfully.
     */
    v104: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v104.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v115: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v115.DispatchInfo,
        })
    ),
    /**
     * An extrinsic completed successfully.
     */
    v160: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: v160.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed. \[error, info\]
     */
    v100: new EventType(
        'System.ExtrinsicFailed',
        sts.tuple([v100.DispatchError, v100.DispatchInfo])
    ),
    /**
     * An extrinsic failed.
     */
    v104: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v104.DispatchError,
            dispatchInfo: v104.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v115: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v115.DispatchError,
            dispatchInfo: v115.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v160: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v160.DispatchError,
            dispatchInfo: v160.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v205: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v205.DispatchError,
            dispatchInfo: v205.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    v100: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     * A new \[account\] was created.
     */
    v100: new EventType(
        'System.NewAccount',
        v100.AccountId32
    ),
    /**
     * A new account was created.
     */
    v104: new EventType(
        'System.NewAccount',
        sts.struct({
            account: v104.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     * An \[account\] was reaped.
     */
    v100: new EventType(
        'System.KilledAccount',
        v100.AccountId32
    ),
    /**
     * An account was reaped.
     */
    v104: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: v104.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened. \[origin, remark_hash\]
     */
    v100: new EventType(
        'System.Remarked',
        sts.tuple([v100.AccountId32, v100.H256])
    ),
    /**
     * On on-chain remark happened.
     */
    v104: new EventType(
        'System.Remarked',
        sts.struct({
            sender: v104.AccountId32,
            hash: v104.H256,
        })
    ),
}

export const upgradeAuthorized =  {
    name: 'System.UpgradeAuthorized',
    /**
     * An upgrade was authorized.
     */
    v244: new EventType(
        'System.UpgradeAuthorized',
        sts.struct({
            codeHash: v244.H256,
            checkVersion: sts.boolean(),
        })
    ),
}
