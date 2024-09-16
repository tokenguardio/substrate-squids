import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const cloudsToVebnc =  {
    name: 'CloudsConvert.clouds_to_vebnc',
    /**
     * See [`Pallet::clouds_to_vebnc`].
     */
    v10000: new CallType(
        'CloudsConvert.clouds_to_vebnc',
        sts.struct({
            value: sts.bigint(),
            expectedMinVebnc: sts.bigint(),
        })
    ),
}

export const chargeVbnc =  {
    name: 'CloudsConvert.charge_vbnc',
    /**
     * See [`Pallet::charge_vbnc`].
     */
    v10000: new CallType(
        'CloudsConvert.charge_vbnc',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}
