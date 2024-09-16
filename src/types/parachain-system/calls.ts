import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v100 from '../v100'
import * as v205 from '../v205'

export const setValidationData =  {
    name: 'ParachainSystem.set_validation_data',
    /**
     * Set the current validation data.
     * 
     * This should be invoked exactly once per block. It will panic at the finalization
     * phase if the call was not invoked.
     * 
     * The dispatch origin for this call must be `Inherent`
     * 
     * As a side effect, this function upgrades the current validation function
     * if the appropriate time has come.
     */
    v100: new CallType(
        'ParachainSystem.set_validation_data',
        sts.struct({
            data: v100.ParachainInherentData,
        })
    ),
}

export const sudoSendUpwardMessage =  {
    name: 'ParachainSystem.sudo_send_upward_message',
    v100: new CallType(
        'ParachainSystem.sudo_send_upward_message',
        sts.struct({
            message: sts.bytes(),
        })
    ),
}

export const authorizeUpgrade =  {
    name: 'ParachainSystem.authorize_upgrade',
    v100: new CallType(
        'ParachainSystem.authorize_upgrade',
        sts.struct({
            codeHash: v100.H256,
        })
    ),
    /**
     * See [`Pallet::authorize_upgrade`].
     */
    v205: new CallType(
        'ParachainSystem.authorize_upgrade',
        sts.struct({
            codeHash: v205.H256,
            checkVersion: sts.boolean(),
        })
    ),
}

export const enactAuthorizedUpgrade =  {
    name: 'ParachainSystem.enact_authorized_upgrade',
    v100: new CallType(
        'ParachainSystem.enact_authorized_upgrade',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}
