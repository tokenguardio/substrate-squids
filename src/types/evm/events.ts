import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v33 from '../v33'

export const log =  {
    name: 'EVM.Log',
    /**
     * Ethereum events from contracts.
     */
    v1: new EventType(
        'EVM.Log',
        v1.Log
    ),
    /**
     * Ethereum events from contracts.
     */
    v33: new EventType(
        'EVM.Log',
        sts.struct({
            log: v33.Log,
        })
    ),
}

export const created =  {
    name: 'EVM.Created',
    /**
     * A contract has been created at given \[address\].
     */
    v1: new EventType(
        'EVM.Created',
        v1.H160
    ),
    /**
     * A contract has been created at given address.
     */
    v33: new EventType(
        'EVM.Created',
        sts.struct({
            address: v33.H160,
        })
    ),
}

export const createdFailed =  {
    name: 'EVM.CreatedFailed',
    /**
     * A \[contract\] was attempted to be created, but the execution failed.
     */
    v1: new EventType(
        'EVM.CreatedFailed',
        v1.H160
    ),
    /**
     * A contract was attempted to be created, but the execution failed.
     */
    v33: new EventType(
        'EVM.CreatedFailed',
        sts.struct({
            address: v33.H160,
        })
    ),
}

export const executed =  {
    name: 'EVM.Executed',
    /**
     * A \[contract\] has been executed successfully with states applied.
     */
    v1: new EventType(
        'EVM.Executed',
        v1.H160
    ),
    /**
     * A contract has been executed successfully with states applied.
     */
    v33: new EventType(
        'EVM.Executed',
        sts.struct({
            address: v33.H160,
        })
    ),
}

export const executedFailed =  {
    name: 'EVM.ExecutedFailed',
    /**
     * A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
     */
    v1: new EventType(
        'EVM.ExecutedFailed',
        v1.H160
    ),
    /**
     * A contract has been executed with errors. States are reverted with only gas fees applied.
     */
    v33: new EventType(
        'EVM.ExecutedFailed',
        sts.struct({
            address: v33.H160,
        })
    ),
}

export const balanceDeposit =  {
    name: 'EVM.BalanceDeposit',
    /**
     * A deposit has been made at a given address. \[sender, address, value\]
     */
    v1: new EventType(
        'EVM.BalanceDeposit',
        sts.tuple([v1.AccountId32, v1.H160, sts.bigint()])
    ),
}

export const balanceWithdraw =  {
    name: 'EVM.BalanceWithdraw',
    /**
     * A withdrawal has been made from a given address. \[sender, address, value\]
     */
    v1: new EventType(
        'EVM.BalanceWithdraw',
        sts.tuple([v1.AccountId32, v1.H160, sts.bigint()])
    ),
}
