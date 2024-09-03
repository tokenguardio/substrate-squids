import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v1002000 from '../v1002000'

export const enter =  {
    name: 'ParaInherent.enter',
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    v9110: new CallType(
        'ParaInherent.enter',
        sts.struct({
            data: v9110.V1InherentData,
        })
    ),
    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    v9140: new CallType(
        'ParaInherent.enter',
        sts.struct({
            data: v9140.V1InherentData,
        })
    ),
    /**
     * See [`Pallet::enter`].
     */
    v1002000: new CallType(
        'ParaInherent.enter',
        sts.struct({
            data: v1002000.V6InherentData,
        })
    ),
}
