import {sts, Result, Option, Bytes, BitSequence} from './support'

export const AccountId = sts.bytes()

export const Balance = sts.bigint()

export const EraIndex = sts.number()
