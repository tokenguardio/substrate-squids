import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v5 from '../v5'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9340 from '../v9340'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const newMultisig =  {
    name: 'Multisig.NewMultisig',
    /**
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account, third is hash of the call.
     */
    v5: new EventType(
        'Multisig.NewMultisig',
        sts.tuple([v5.AccountId, v5.AccountId, v5.CallHash])
    ),
    /**
     * A new multisig operation has begun.
     */
    v9140: new EventType(
        'Multisig.NewMultisig',
        sts.struct({
            approving: v9140.AccountId32,
            multisig: v9140.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigApproval =  {
    name: 'Multisig.MultisigApproval',
    /**
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call.
     */
    v5: new EventType(
        'Multisig.MultisigApproval',
        sts.tuple([v5.AccountId, v5.Timepoint, v5.AccountId, v5.CallHash])
    ),
    /**
     * A multisig operation has been approved by someone.
     */
    v9140: new EventType(
        'Multisig.MultisigApproval',
        sts.struct({
            approving: v9140.AccountId32,
            timepoint: v9140.Timepoint,
            multisig: v9140.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigExecuted =  {
    name: 'Multisig.MultisigExecuted',
    /**
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call to be executed.
     */
    v5: new EventType(
        'Multisig.MultisigExecuted',
        sts.tuple([v5.AccountId, v5.Timepoint, v5.AccountId, v5.CallHash, v5.DispatchResult])
    ),
    /**
     * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
     */
    v9110: new EventType(
        'Multisig.MultisigExecuted',
        sts.tuple([v9110.AccountId32, v9110.Timepoint, v9110.AccountId32, sts.bytes(), sts.result(() => sts.unit(), () => v9110.DispatchError)])
    ),
    /**
     * A multisig operation has been executed.
     */
    v9140: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v9140.AccountId32,
            timepoint: v9140.Timepoint,
            multisig: v9140.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v9140.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v9170: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v9170.AccountId32,
            timepoint: v9170.Timepoint,
            multisig: v9170.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v9190: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v9190.AccountId32,
            timepoint: v9190.Timepoint,
            multisig: v9190.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v9340: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v9340.AccountId32,
            timepoint: v9340.Timepoint,
            multisig: v9340.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v9340.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v9420: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v9420.AccountId32,
            timepoint: v9420.Timepoint,
            multisig: v9420.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v9430: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v9430.AccountId32,
            timepoint: v9430.Timepoint,
            multisig: v9430.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
}

export const multisigCancelled =  {
    name: 'Multisig.MultisigCancelled',
    /**
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account, fourth is hash of the call.
     */
    v5: new EventType(
        'Multisig.MultisigCancelled',
        sts.tuple([v5.AccountId, v5.Timepoint, v5.AccountId, v5.CallHash])
    ),
    /**
     * A multisig operation has been cancelled.
     */
    v9140: new EventType(
        'Multisig.MultisigCancelled',
        sts.struct({
            cancelling: v9140.AccountId32,
            timepoint: v9140.Timepoint,
            multisig: v9140.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const uncallable =  {
    name: 'Multisig.Uncallable',
    /**
     *  A call with a `false` IsCallable filter was attempted.
     */
    v5: new EventType(
        'Multisig.Uncallable',
        sts.number()
    ),
}
