import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const created =  {
    name: 'FeeShare.Created',
    v962: new EventType(
        'FeeShare.Created',
        sts.struct({
            info: v962.Type_196,
        })
    ),
    v980: new EventType(
        'FeeShare.Created',
        sts.struct({
            info: v980.Type_222,
        })
    ),
    v990: new EventType(
        'FeeShare.Created',
        sts.struct({
            info: v990.Type_439,
        })
    ),
}

export const edited =  {
    name: 'FeeShare.Edited',
    v962: new EventType(
        'FeeShare.Edited',
        sts.struct({
            info: v962.Type_196,
        })
    ),
    v980: new EventType(
        'FeeShare.Edited',
        sts.struct({
            info: v980.Type_222,
        })
    ),
    v990: new EventType(
        'FeeShare.Edited',
        sts.struct({
            info: v990.Type_439,
        })
    ),
}

export const eraLengthSet =  {
    name: 'FeeShare.EraLengthSet',
    v962: new EventType(
        'FeeShare.EraLengthSet',
        sts.struct({
            eraLength: sts.number(),
            nextEra: sts.number(),
        })
    ),
}

export const executed =  {
    name: 'FeeShare.Executed',
    v962: new EventType(
        'FeeShare.Executed',
        sts.struct({
            distributionId: sts.number(),
        })
    ),
}

export const deleted =  {
    name: 'FeeShare.Deleted',
    v962: new EventType(
        'FeeShare.Deleted',
        sts.struct({
            distributionId: sts.number(),
        })
    ),
}

export const executeFailed =  {
    name: 'FeeShare.ExecuteFailed',
    v962: new EventType(
        'FeeShare.ExecuteFailed',
        sts.struct({
            distributionId: sts.number(),
            info: v962.Type_196,
            nextEra: sts.number(),
        })
    ),
    v980: new EventType(
        'FeeShare.ExecuteFailed',
        sts.struct({
            distributionId: sts.number(),
            info: v980.Type_222,
            nextEra: sts.number(),
        })
    ),
    v990: new EventType(
        'FeeShare.ExecuteFailed',
        sts.struct({
            distributionId: sts.number(),
            info: v990.Type_439,
            nextEra: sts.number(),
        })
    ),
}
