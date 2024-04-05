import {sts, Result, Option, Bytes, BitSequence} from './support'

export const AccountId32 = sts.bytes()

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export type Origin = Origin_Root | Origin_Signed

export interface Origin_Root {
    __kind: 'Root'
}

export interface Origin_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export type AccountId32 = Bytes
