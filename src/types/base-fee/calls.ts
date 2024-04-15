import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9 from '../v9'

export const setBaseFeePerGas =  {
    name: 'BaseFee.set_base_fee_per_gas',
    v9: new CallType(
        'BaseFee.set_base_fee_per_gas',
        sts.struct({
            fee: sts.bigint(),
        })
    ),
}

export const setIsActive =  {
    name: 'BaseFee.set_is_active',
    v9: new CallType(
        'BaseFee.set_is_active',
        sts.struct({
            isActive: sts.boolean(),
        })
    ),
}

export const setElasticity =  {
    name: 'BaseFee.set_elasticity',
    v9: new CallType(
        'BaseFee.set_elasticity',
        sts.struct({
            elasticity: v9.Permill,
        })
    ),
}
