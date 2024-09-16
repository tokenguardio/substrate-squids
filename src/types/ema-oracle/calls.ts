import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const addOracle =  {
    name: 'EmaOracle.add_oracle',
    /**
     * See [`Pallet::add_oracle`].
     */
    v227: new CallType(
        'EmaOracle.add_oracle',
        sts.struct({
            source: sts.bytes(),
            assets: sts.tuple(() => [sts.number(), sts.number()]),
        })
    ),
}

export const removeOracle =  {
    name: 'EmaOracle.remove_oracle',
    /**
     * See [`Pallet::remove_oracle`].
     */
    v227: new CallType(
        'EmaOracle.remove_oracle',
        sts.struct({
            source: sts.bytes(),
            assets: sts.tuple(() => [sts.number(), sts.number()]),
        })
    ),
}
