import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const createDistribution =  {
    name: 'FeeShare.create_distribution',
    v962: new CallType(
        'FeeShare.create_distribution',
        sts.struct({
            tokenType: sts.array(() => v962.CurrencyId),
            tokensProportion: sts.array(() => sts.tuple(() => [v962.AccountId32, v962.Perbill])),
            ifAuto: sts.boolean(),
        })
    ),
    v980: new CallType(
        'FeeShare.create_distribution',
        sts.struct({
            tokenType: sts.array(() => v980.CurrencyId),
            tokensProportion: sts.array(() => sts.tuple(() => [v980.AccountId32, v980.Perbill])),
            ifAuto: sts.boolean(),
        })
    ),
    /**
     * See [`Pallet::create_distribution`].
     */
    v990: new CallType(
        'FeeShare.create_distribution',
        sts.struct({
            tokenType: sts.array(() => v990.CurrencyId),
            tokensProportion: sts.array(() => sts.tuple(() => [v990.AccountId32, v990.Perbill])),
            ifAuto: sts.boolean(),
        })
    ),
}

export const editDistribution =  {
    name: 'FeeShare.edit_distribution',
    v962: new CallType(
        'FeeShare.edit_distribution',
        sts.struct({
            distributionId: sts.number(),
            tokenType: sts.option(() => sts.array(() => v962.CurrencyId)),
            tokensProportion: sts.option(() => sts.array(() => sts.tuple(() => [v962.AccountId32, v962.Perbill]))),
            ifAuto: sts.option(() => sts.boolean()),
        })
    ),
    v980: new CallType(
        'FeeShare.edit_distribution',
        sts.struct({
            distributionId: sts.number(),
            tokenType: sts.option(() => sts.array(() => v980.CurrencyId)),
            tokensProportion: sts.option(() => sts.array(() => sts.tuple(() => [v980.AccountId32, v980.Perbill]))),
            ifAuto: sts.option(() => sts.boolean()),
        })
    ),
    /**
     * See [`Pallet::edit_distribution`].
     */
    v990: new CallType(
        'FeeShare.edit_distribution',
        sts.struct({
            distributionId: sts.number(),
            tokenType: sts.option(() => sts.array(() => v990.CurrencyId)),
            tokensProportion: sts.option(() => sts.array(() => sts.tuple(() => [v990.AccountId32, v990.Perbill]))),
            ifAuto: sts.option(() => sts.boolean()),
        })
    ),
}

export const setEraLength =  {
    name: 'FeeShare.set_era_length',
    v962: new CallType(
        'FeeShare.set_era_length',
        sts.struct({
            eraLength: sts.number(),
        })
    ),
}

export const executeDistribute =  {
    name: 'FeeShare.execute_distribute',
    v962: new CallType(
        'FeeShare.execute_distribute',
        sts.struct({
            distributionId: sts.number(),
        })
    ),
}

export const deleteDistribution =  {
    name: 'FeeShare.delete_distribution',
    v962: new CallType(
        'FeeShare.delete_distribution',
        sts.struct({
            distributionId: sts.number(),
        })
    ),
}
