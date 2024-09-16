import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const cloudsConverted =  {
    name: 'CloudsConvert.CloudsConverted',
    v10000: new EventType(
        'CloudsConvert.CloudsConverted',
        sts.struct({
            clouds: sts.bigint(),
            vebnc: sts.bigint(),
        })
    ),
}

export const vbncCharged =  {
    name: 'CloudsConvert.VbncCharged',
    v10000: new EventType(
        'CloudsConvert.VbncCharged',
        sts.struct({
            vbnc: sts.bigint(),
        })
    ),
}
