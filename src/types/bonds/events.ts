import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v176 from '../v176'

export const tokenCreated =  {
    name: 'Bonds.TokenCreated',
    /**
     * A bond asset was registered
     */
    v176: new EventType(
        'Bonds.TokenCreated',
        sts.struct({
            issuer: v176.AccountId32,
            assetId: sts.number(),
            bondId: sts.number(),
            maturity: sts.bigint(),
        })
    ),
}

export const issued =  {
    name: 'Bonds.Issued',
    /**
     * New bond were issued
     */
    v176: new EventType(
        'Bonds.Issued',
        sts.struct({
            issuer: v176.AccountId32,
            bondId: sts.number(),
            amount: sts.bigint(),
            fee: sts.bigint(),
        })
    ),
}

export const redeemed =  {
    name: 'Bonds.Redeemed',
    /**
     * Bonds were redeemed
     */
    v176: new EventType(
        'Bonds.Redeemed',
        sts.struct({
            who: v176.AccountId32,
            bondId: sts.number(),
            amount: sts.bigint(),
        })
    ),
}
