import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v950 from '../v950'
import * as v968 from '../v968'
import * as v978 from '../v978'
import * as v990 from '../v990'

export const newMultisig =  {
    name: 'Multisig.NewMultisig',
    /**
     * A new multisig operation has begun.
     */
    v932: new EventType(
        'Multisig.NewMultisig',
        sts.struct({
            approving: v932.AccountId32,
            multisig: v932.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigApproval =  {
    name: 'Multisig.MultisigApproval',
    /**
     * A multisig operation has been approved by someone.
     */
    v932: new EventType(
        'Multisig.MultisigApproval',
        sts.struct({
            approving: v932.AccountId32,
            timepoint: v932.Timepoint,
            multisig: v932.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigExecuted =  {
    name: 'Multisig.MultisigExecuted',
    /**
     * A multisig operation has been executed.
     */
    v932: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v932.AccountId32,
            timepoint: v932.Timepoint,
            multisig: v932.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v932.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v950: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v950.AccountId32,
            timepoint: v950.Timepoint,
            multisig: v950.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v950.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v968: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v968.AccountId32,
            timepoint: v968.Timepoint,
            multisig: v968.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v968.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v978: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v978.AccountId32,
            timepoint: v978.Timepoint,
            multisig: v978.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v978.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v990: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v990.AccountId32,
            timepoint: v990.Timepoint,
            multisig: v990.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v990.DispatchError),
        })
    ),
}

export const multisigCancelled =  {
    name: 'Multisig.MultisigCancelled',
    /**
     * A multisig operation has been cancelled.
     */
    v932: new EventType(
        'Multisig.MultisigCancelled',
        sts.struct({
            cancelling: v932.AccountId32,
            timepoint: v932.Timepoint,
            multisig: v932.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}
