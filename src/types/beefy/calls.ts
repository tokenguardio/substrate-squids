import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1001002 from '../v1001002'

export const reportEquivocation =  {
    name: 'Beefy.report_equivocation',
    /**
     * See [`Pallet::report_equivocation`].
     */
    v1001002: new CallType(
        'Beefy.report_equivocation',
        sts.struct({
            equivocationProof: v1001002.Type_421,
            keyOwnerProof: v1001002.MembershipProof,
        })
    ),
}

export const reportEquivocationUnsigned =  {
    name: 'Beefy.report_equivocation_unsigned',
    /**
     * See [`Pallet::report_equivocation_unsigned`].
     */
    v1001002: new CallType(
        'Beefy.report_equivocation_unsigned',
        sts.struct({
            equivocationProof: v1001002.Type_421,
            keyOwnerProof: v1001002.MembershipProof,
        })
    ),
}

export const setNewGenesis =  {
    name: 'Beefy.set_new_genesis',
    /**
     * See [`Pallet::set_new_genesis`].
     */
    v1001002: new CallType(
        'Beefy.set_new_genesis',
        sts.struct({
            delayInBlocks: sts.number(),
        })
    ),
}
