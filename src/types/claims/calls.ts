import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v108 from '../v108'

export const claim =  {
    name: 'Claims.claim',
    /**
     * Claim xHDX by providing signed message with Ethereum address.
     */
    v108: new CallType(
        'Claims.claim',
        sts.struct({
            ethereumSignature: v108.EcdsaSignature,
        })
    ),
}
