import {sts, Result, Option, Bytes, BitSequence} from './support'

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return  {
        FreeBalance: sts.unit(),
        StakeBalance: sts.unit(),
    }
})

export type RewardDestination = RewardDestination_FreeBalance | RewardDestination_StakeBalance

export interface RewardDestination_FreeBalance {
    __kind: 'FreeBalance'
}

export interface RewardDestination_StakeBalance {
    __kind: 'StakeBalance'
}

export const SmartContract: sts.Type<SmartContract> = sts.closedEnum(() => {
    return  {
        Evm: H160,
        Wasm: AccountId32,
    }
})

export const H160 = sts.bytes()

export type SmartContract = SmartContract_Evm | SmartContract_Wasm

export interface SmartContract_Evm {
    __kind: 'Evm'
    value: H160
}

export interface SmartContract_Wasm {
    __kind: 'Wasm'
    value: AccountId32
}

export type AccountId32 = Bytes

export type H160 = Bytes

export const AccountId32 = sts.bytes()
