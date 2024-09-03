import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const forceUnfreeze =  {
    name: 'ParasDisputes.force_unfreeze',
    v9180: new CallType(
        'ParasDisputes.force_unfreeze',
        sts.unit()
    ),
}
