import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v978 from '../v978'

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
    v932: new CallType(
        'ParachainSystem.set_validation_data',
        sts.struct({
            data: v932.ParachainInherentData,
        })
    ),
}

export const sudoSendUpwardMessage =  {
    name: 'ParachainSystem.sudo_send_upward_message',
    v932: new CallType(
        'ParachainSystem.sudo_send_upward_message',
        sts.struct({
            message: sts.bytes(),
        })
    ),
}

export const authorizeUpgrade =  {
    name: 'ParachainSystem.authorize_upgrade',
    v932: new CallType(
        'ParachainSystem.authorize_upgrade',
        sts.struct({
            codeHash: v932.H256,
        })
    ),
    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    v978: new CallType(
        'ParachainSystem.authorize_upgrade',
        sts.struct({
            codeHash: v978.H256,
            checkVersion: sts.boolean(),
        })
    ),
}

export const enactAuthorizedUpgrade =  {
    name: 'ParachainSystem.enact_authorized_upgrade',
    v932: new CallType(
        'ParachainSystem.enact_authorized_upgrade',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}
