import {sts, Result, Option, Bytes, BitSequence} from './support'

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export const AccountId32 = sts.bytes()
