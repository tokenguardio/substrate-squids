import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v950 from '../v950'
import * as v968 from '../v968'
import * as v978 from '../v978'
import * as v990 from '../v990'

export const proposed =  {
    name: 'Council.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v950: new EventType(
        'Council.Proposed',
        sts.struct({
            account: v950.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v950.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'Council.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v950: new EventType(
        'Council.Voted',
        sts.struct({
            account: v950.AccountId32,
            proposalHash: v950.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'Council.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    v950: new EventType(
        'Council.Approved',
        sts.struct({
            proposalHash: v950.H256,
        })
    ),
}

export const disapproved =  {
    name: 'Council.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    v950: new EventType(
        'Council.Disapproved',
        sts.struct({
            proposalHash: v950.H256,
        })
    ),
}

export const executed =  {
    name: 'Council.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v950: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v950.H256,
            result: sts.result(() => sts.unit(), () => v950.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v968: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v968.H256,
            result: sts.result(() => sts.unit(), () => v968.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v978: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v978.H256,
            result: sts.result(() => sts.unit(), () => v978.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v990: new EventType(
        'Council.Executed',
        sts.struct({
            proposalHash: v990.H256,
            result: sts.result(() => sts.unit(), () => v990.DispatchError),
        })
    ),
}

export const memberExecuted =  {
    name: 'Council.MemberExecuted',
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    v950: new EventType(
        'Council.MemberExecuted',
        sts.struct({
            proposalHash: v950.H256,
            result: sts.result(() => sts.unit(), () => v950.DispatchError),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    v968: new EventType(
        'Council.MemberExecuted',
        sts.struct({
            proposalHash: v968.H256,
            result: sts.result(() => sts.unit(), () => v968.DispatchError),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    v978: new EventType(
        'Council.MemberExecuted',
        sts.struct({
            proposalHash: v978.H256,
            result: sts.result(() => sts.unit(), () => v978.DispatchError),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    v990: new EventType(
        'Council.MemberExecuted',
        sts.struct({
            proposalHash: v990.H256,
            result: sts.result(() => sts.unit(), () => v990.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'Council.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v950: new EventType(
        'Council.Closed',
        sts.struct({
            proposalHash: v950.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
