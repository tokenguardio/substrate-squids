import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v108 from '../v108'
import * as v115 from '../v115'
import * as v160 from '../v160'
import * as v205 from '../v205'

export const newMultisig =  {
    name: 'Multisig.NewMultisig',
    /**
     * A new multisig operation has begun.
     */
    v108: new EventType(
        'Multisig.NewMultisig',
        sts.struct({
            approving: v108.AccountId32,
            multisig: v108.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigApproval =  {
    name: 'Multisig.MultisigApproval',
    /**
     * A multisig operation has been approved by someone.
     */
    v108: new EventType(
        'Multisig.MultisigApproval',
        sts.struct({
            approving: v108.AccountId32,
            timepoint: v108.Timepoint,
            multisig: v108.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigExecuted =  {
    name: 'Multisig.MultisigExecuted',
    /**
     * A multisig operation has been executed.
     */
    v108: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v108.AccountId32,
            timepoint: v108.Timepoint,
            multisig: v108.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v108.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v115: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v115.AccountId32,
            timepoint: v115.Timepoint,
            multisig: v115.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v115.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v160: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v160.AccountId32,
            timepoint: v160.Timepoint,
            multisig: v160.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v160.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v205: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v205.AccountId32,
            timepoint: v205.Timepoint,
            multisig: v205.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v205.DispatchError),
        })
    ),
}

export const multisigCancelled =  {
    name: 'Multisig.MultisigCancelled',
    /**
     * A multisig operation has been cancelled.
     */
    v108: new EventType(
        'Multisig.MultisigCancelled',
        sts.struct({
            cancelling: v108.AccountId32,
            timepoint: v108.Timepoint,
            multisig: v108.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}
