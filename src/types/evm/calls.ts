import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v12001 from '../v12001'

export const withdraw =  {
    name: 'EVM.withdraw',
    /**
     * Withdraw balance from EVM into currency/balances pallet.
     */
    v12001: new CallType(
        'EVM.withdraw',
        sts.struct({
            address: v12001.H160,
            value: sts.bigint(),
        })
    ),
}

export const call =  {
    name: 'EVM.call',
    /**
     * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
     */
    v12001: new CallType(
        'EVM.call',
        sts.struct({
            source: v12001.H160,
            target: v12001.H160,
            input: sts.bytes(),
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [v12001.H160, sts.array(() => v12001.H256)])),
        })
    ),
}

export const create =  {
    name: 'EVM.create',
    /**
     * Issue an EVM create operation. This is similar to a contract creation transaction in
     * Ethereum.
     */
    v12001: new CallType(
        'EVM.create',
        sts.struct({
            source: v12001.H160,
            init: sts.bytes(),
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [v12001.H160, sts.array(() => v12001.H256)])),
        })
    ),
}

export const create2 =  {
    name: 'EVM.create2',
    /**
     * Issue an EVM create2 operation.
     */
    v12001: new CallType(
        'EVM.create2',
        sts.struct({
            source: v12001.H160,
            init: sts.bytes(),
            salt: v12001.H256,
            value: sts.bigint(),
            gasLimit: sts.bigint(),
            maxFeePerGas: sts.bigint(),
            maxPriorityFeePerGas: sts.option(() => sts.bigint()),
            nonce: sts.option(() => sts.bigint()),
            accessList: sts.array(() => sts.tuple(() => [v12001.H160, sts.array(() => v12001.H256)])),
        })
    ),
}
