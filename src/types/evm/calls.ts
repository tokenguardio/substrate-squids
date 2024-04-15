import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v9 from '../v9'
import * as v15 from '../v15'

export const withdraw =  {
    name: 'EVM.withdraw',
    /**
     * Withdraw balance from EVM into currency/balances pallet.
     */
    v1: new CallType(
        'EVM.withdraw',
        sts.struct({
            address: v1.H160,
            value: sts.bigint(),
        })
    ),
}

export const call =  {
    name: 'EVM.call',
    /**
     * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    v1: new CallType(
        'EVM.call',
        sts.struct({
            source: v1.H160,
            target: v1.H160,
            input: sts.bytes(),
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            gasPrice: sts.bigint(),
            nonce: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    v9: new CallType(
        'EVM.call',
        sts.struct({
            source: v9.H160,
            target: v9.H160,
            input: sts.bytes(),
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [v9.H160, sts.array(() => v9.H256)])),
        })
    ),
}

export const create =  {
    name: 'EVM.create',
    /**
     * Issue an EVM create operation. This is similar to a contract creation transaction in
     * Ethereum.
     */
    v1: new CallType(
        'EVM.create',
        sts.struct({
            source: v1.H160,
            init: sts.bytes(),
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            gasPrice: sts.bigint(),
            nonce: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Issue an EVM create operation. This is similar to a contract creation transaction in
     * Ethereum.
     */
    v9: new CallType(
        'EVM.create',
        sts.struct({
            source: v9.H160,
            init: sts.bytes(),
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [v9.H160, sts.array(() => v9.H256)])),
        })
    ),
}

export const create2 =  {
    name: 'EVM.create2',
    /**
     * Issue an EVM create2 operation.
     */
    v1: new CallType(
        'EVM.create2',
        sts.struct({
            source: v1.H160,
            init: sts.bytes(),
            salt: v1.H256,
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            gasPrice: sts.bigint(),
            nonce: sts.option(() => sts.bigint()),
        })
    ),
    /**
     * Issue an EVM create2 operation.
     */
    v9: new CallType(
        'EVM.create2',
        sts.struct({
            source: v9.H160,
            init: sts.bytes(),
            salt: v9.H256,
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [v9.H160, sts.array(() => v9.H256)])),
        })
    ),
}

export const hotfixIncAccountSufficients =  {
    name: 'EVM.hotfix_inc_account_sufficients',
    /**
     * Increment `sufficients` for existing accounts having a nonzero `nonce` but zero `sufficients` value.
     */
    v15: new CallType(
        'EVM.hotfix_inc_account_sufficients',
        sts.struct({
            addresses: sts.array(() => v15.H160),
        })
    ),
}
