import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'

export const currentCodeUpdated =  {
    name: 'Paras.CurrentCodeUpdated',
    /**
     * Current code has been updated for a Para. `para_id`
     */
    v9110: new EventType(
        'Paras.CurrentCodeUpdated',
        v9110.Id
    ),
}

export const currentHeadUpdated =  {
    name: 'Paras.CurrentHeadUpdated',
    /**
     * Current head has been updated for a Para. `para_id`
     */
    v9110: new EventType(
        'Paras.CurrentHeadUpdated',
        v9110.Id
    ),
}

export const codeUpgradeScheduled =  {
    name: 'Paras.CodeUpgradeScheduled',
    /**
     * A code upgrade has been scheduled for a Para. `para_id`
     */
    v9110: new EventType(
        'Paras.CodeUpgradeScheduled',
        v9110.Id
    ),
}

export const newHeadNoted =  {
    name: 'Paras.NewHeadNoted',
    /**
     * A new head has been noted for a Para. `para_id`
     */
    v9110: new EventType(
        'Paras.NewHeadNoted',
        v9110.Id
    ),
}

export const actionQueued =  {
    name: 'Paras.ActionQueued',
    /**
     * A para has been queued to execute pending actions. `para_id`
     */
    v9110: new EventType(
        'Paras.ActionQueued',
        sts.tuple([v9110.Id, sts.number()])
    ),
}

export const pvfCheckStarted =  {
    name: 'Paras.PvfCheckStarted',
    /**
     * The given para either initiated or subscribed to a PVF check for the given validation
     * code. `code_hash` `para_id`
     */
    v9170: new EventType(
        'Paras.PvfCheckStarted',
        sts.tuple([v9170.ValidationCodeHash, v9170.Id])
    ),
}

export const pvfCheckAccepted =  {
    name: 'Paras.PvfCheckAccepted',
    /**
     * The given validation code was rejected by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    v9170: new EventType(
        'Paras.PvfCheckAccepted',
        sts.tuple([v9170.ValidationCodeHash, v9170.Id])
    ),
}

export const pvfCheckRejected =  {
    name: 'Paras.PvfCheckRejected',
    /**
     * The given validation code was accepted by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    v9170: new EventType(
        'Paras.PvfCheckRejected',
        sts.tuple([v9170.ValidationCodeHash, v9170.Id])
    ),
}
