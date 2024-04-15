import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9 from '../v9'
import * as v33 from '../v33'

export const newBaseFeePerGas =  {
    name: 'BaseFee.NewBaseFeePerGas',
    v9: new EventType(
        'BaseFee.NewBaseFeePerGas',
        sts.bigint()
    ),
    v33: new EventType(
        'BaseFee.NewBaseFeePerGas',
        sts.struct({
            fee: sts.bigint(),
        })
    ),
}

export const baseFeeOverflow =  {
    name: 'BaseFee.BaseFeeOverflow',
    v9: new EventType(
        'BaseFee.BaseFeeOverflow',
        sts.unit()
    ),
}

export const isActive =  {
    name: 'BaseFee.IsActive',
    v9: new EventType(
        'BaseFee.IsActive',
        sts.boolean()
    ),
}

export const newElasticity =  {
    name: 'BaseFee.NewElasticity',
    v9: new EventType(
        'BaseFee.NewElasticity',
        v9.Permill
    ),
    v33: new EventType(
        'BaseFee.NewElasticity',
        sts.struct({
            elasticity: v33.Permill,
        })
    ),
}
