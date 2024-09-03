import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v1000001 from '../v1000001'

export const forceSetCurrentCode =  {
    name: 'Paras.force_set_current_code',
    /**
     * Set the storage for the parachain validation code immediately.
     */
    v9110: new CallType(
        'Paras.force_set_current_code',
        sts.struct({
            para: v9110.Id,
            newCode: v9110.ValidationCode,
        })
    ),
}

export const forceSetCurrentHead =  {
    name: 'Paras.force_set_current_head',
    /**
     * Set the storage for the current parachain head data immediately.
     */
    v9110: new CallType(
        'Paras.force_set_current_head',
        sts.struct({
            para: v9110.Id,
            newHead: v9110.HeadData,
        })
    ),
}

export const forceScheduleCodeUpgrade =  {
    name: 'Paras.force_schedule_code_upgrade',
    /**
     * Schedule an upgrade as if it was scheduled in the given relay parent block.
     */
    v9110: new CallType(
        'Paras.force_schedule_code_upgrade',
        sts.struct({
            para: v9110.Id,
            newCode: v9110.ValidationCode,
            relayParentNumber: sts.number(),
        })
    ),
}

export const forceNoteNewHead =  {
    name: 'Paras.force_note_new_head',
    /**
     * Note a new block head for para within the context of the current block.
     */
    v9110: new CallType(
        'Paras.force_note_new_head',
        sts.struct({
            para: v9110.Id,
            newHead: v9110.HeadData,
        })
    ),
}

export const forceQueueAction =  {
    name: 'Paras.force_queue_action',
    /**
     * Put a parachain directly into the next session's action queue.
     * We can't queue it any sooner than this without going into the
     * initializer...
     */
    v9110: new CallType(
        'Paras.force_queue_action',
        sts.struct({
            para: v9110.Id,
        })
    ),
}

export const addTrustedValidationCode =  {
    name: 'Paras.add_trusted_validation_code',
    /**
     * Adds the validation code to the storage.
     * 
     * The code will not be added if it is already present. Additionally, if PVF pre-checking
     * is running for that code, it will be instantly accepted.
     * 
     * Otherwise, the code will be added into the storage. Note that the code will be added
     * into storage with reference count 0. This is to account the fact that there are no users
     * for this code yet. The caller will have to make sure that this code eventually gets
     * used by some parachain or removed from the storage to avoid storage leaks. For the latter
     * prefer to use the `poke_unused_validation_code` dispatchable to raw storage manipulation.
     * 
     * This function is mainly meant to be used for upgrading parachains that do not follow
     * the go-ahead signal while the PVF pre-checking feature is enabled.
     */
    v9170: new CallType(
        'Paras.add_trusted_validation_code',
        sts.struct({
            validationCode: v9170.ValidationCode,
        })
    ),
}

export const pokeUnusedValidationCode =  {
    name: 'Paras.poke_unused_validation_code',
    /**
     * Remove the validation code from the storage iff the reference count is 0.
     * 
     * This is better than removing the storage directly, because it will not remove the code
     * that was suddenly got used by some parachain while this dispatchable was pending
     * dispatching.
     */
    v9170: new CallType(
        'Paras.poke_unused_validation_code',
        sts.struct({
            validationCodeHash: v9170.ValidationCodeHash,
        })
    ),
}

export const includePvfCheckStatement =  {
    name: 'Paras.include_pvf_check_statement',
    /**
     * Includes a statement for a PVF pre-checking vote. Potentially, finalizes the vote and
     * enacts the results if that was the last vote before achieving the supermajority.
     */
    v9170: new CallType(
        'Paras.include_pvf_check_statement',
        sts.struct({
            stmt: v9170.V2PvfCheckStatement,
            signature: sts.bytes(),
        })
    ),
}

export const forceSetMostRecentContext =  {
    name: 'Paras.force_set_most_recent_context',
    /**
     * See [`Pallet::force_set_most_recent_context`].
     */
    v1000001: new CallType(
        'Paras.force_set_most_recent_context',
        sts.struct({
            para: v1000001.Id,
            context: sts.number(),
        })
    ),
}
