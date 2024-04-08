import {sts, Result, Option, Bytes, BitSequence} from './support'

export const Type_372: sts.Type<Type_372> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: AccountId32,
    }
})

export type Type_372 = Type_372_Noop | Type_372_Remove | Type_372_Set

export interface Type_372_Noop {
    __kind: 'Noop'
}

export interface Type_372_Remove {
    __kind: 'Remove'
}

export interface Type_372_Set {
    __kind: 'Set'
    value: AccountId32
}

export type AccountId32 = Bytes

export const Type_371: sts.Type<Type_371> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.number(),
    }
})

export type Type_371 = Type_371_Noop | Type_371_Remove | Type_371_Set

export interface Type_371_Noop {
    __kind: 'Noop'
}

export interface Type_371_Remove {
    __kind: 'Remove'
}

export interface Type_371_Set {
    __kind: 'Set'
    value: number
}

export const Type_370: sts.Type<Type_370> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export type Type_370 = Type_370_Noop | Type_370_Remove | Type_370_Set

export interface Type_370_Noop {
    __kind: 'Noop'
}

export interface Type_370_Remove {
    __kind: 'Remove'
}

export interface Type_370_Set {
    __kind: 'Set'
    value: bigint
}

export const BondExtra: sts.Type<BondExtra> = sts.closedEnum(() => {
    return  {
        FreeBalance: sts.bigint(),
        Rewards: sts.unit(),
    }
})

export type BondExtra = BondExtra_FreeBalance | BondExtra_Rewards

export interface BondExtra_FreeBalance {
    __kind: 'FreeBalance'
    value: bigint
}

export interface BondExtra_Rewards {
    __kind: 'Rewards'
}

export const PoolState: sts.Type<PoolState> = sts.closedEnum(() => {
    return  {
        Blocked: sts.unit(),
        Destroying: sts.unit(),
        Open: sts.unit(),
    }
})

export type PoolState = PoolState_Blocked | PoolState_Destroying | PoolState_Open

export interface PoolState_Blocked {
    __kind: 'Blocked'
}

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export interface PoolState_Open {
    __kind: 'Open'
}

export const AccountId32 = sts.bytes()
