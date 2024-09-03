import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const moreAttestations =  {
    name: 'Attestations.more_attestations',
    /**
     *  Provide candidate receipts for parachains, in ascending order by id.
     */
    v0: new CallType(
        'Attestations.more_attestations',
        sts.unit()
    ),
}
