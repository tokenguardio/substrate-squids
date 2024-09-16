import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const noteMinGasPriceTarget =  {
    name: 'DynamicFee.note_min_gas_price_target',
    v12001: new CallType(
        'DynamicFee.note_min_gas_price_target',
        sts.struct({
            target: sts.bigint(),
        })
    ),
}
