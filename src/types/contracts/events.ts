import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v55 from '../v55'
import * as v64 from '../v64'
import * as v82 from '../v82'

export const instantiated =  {
    name: 'Contracts.Instantiated',
    /**
     * Contract deployed by address at the specified address.
     */
    v55: new EventType(
        'Contracts.Instantiated',
        sts.struct({
            deployer: v55.AccountId32,
            contract: v55.AccountId32,
        })
    ),
}

export const terminated =  {
    name: 'Contracts.Terminated',
    /**
     * Contract has been removed.
     * 
     * # Note
     * 
     * The only way for a contract to be removed and emitting this event is by calling
     * `seal_terminate`.
     */
    v55: new EventType(
        'Contracts.Terminated',
        sts.struct({
            /**
             * The contract that was terminated.
             */
            contract: v55.AccountId32,
            /**
             * The account that received the contracts remaining balance
             */
            beneficiary: v55.AccountId32,
        })
    ),
}

export const codeStored =  {
    name: 'Contracts.CodeStored',
    /**
     * Code with the specified hash has been stored.
     */
    v55: new EventType(
        'Contracts.CodeStored',
        sts.struct({
            codeHash: v55.H256,
        })
    ),
    /**
     * Code with the specified hash has been stored.
     */
    v82: new EventType(
        'Contracts.CodeStored',
        sts.struct({
            codeHash: v82.H256,
            depositHeld: sts.bigint(),
            uploader: v82.AccountId32,
        })
    ),
}

export const contractEmitted =  {
    name: 'Contracts.ContractEmitted',
    /**
     * A custom event emitted by the contract.
     */
    v55: new EventType(
        'Contracts.ContractEmitted',
        sts.struct({
            /**
             * The contract that emitted the event.
             */
            contract: v55.AccountId32,
            /**
             * Data supplied by the contract. Metadata generated during contract compilation
             * is needed to decode it.
             */
            data: sts.bytes(),
        })
    ),
}

export const codeRemoved =  {
    name: 'Contracts.CodeRemoved',
    /**
     * A code with the specified hash was removed.
     */
    v55: new EventType(
        'Contracts.CodeRemoved',
        sts.struct({
            codeHash: v55.H256,
        })
    ),
    /**
     * A code with the specified hash was removed.
     */
    v82: new EventType(
        'Contracts.CodeRemoved',
        sts.struct({
            codeHash: v82.H256,
            depositReleased: sts.bigint(),
            remover: v82.AccountId32,
        })
    ),
}

export const contractCodeUpdated =  {
    name: 'Contracts.ContractCodeUpdated',
    /**
     * A contract's code was updated.
     */
    v55: new EventType(
        'Contracts.ContractCodeUpdated',
        sts.struct({
            /**
             * The contract that has been updated.
             */
            contract: v55.AccountId32,
            /**
             * New code hash that was set for the contract.
             */
            newCodeHash: v55.H256,
            /**
             * Previous code hash of the contract.
             */
            oldCodeHash: v55.H256,
        })
    ),
}

export const called =  {
    name: 'Contracts.Called',
    /**
     * A contract was called either by a plain account or another contract.
     * 
     * # Note
     * 
     * Please keep in mind that like all events this is only emitted for successful
     * calls. This is because on failure all storage changes including events are
     * rolled back.
     */
    v55: new EventType(
        'Contracts.Called',
        sts.struct({
            /**
             * The account that called the `contract`.
             */
            caller: v55.AccountId32,
            /**
             * The contract that was called.
             */
            contract: v55.AccountId32,
        })
    ),
    /**
     * A contract was called either by a plain account or another contract.
     * 
     * # Note
     * 
     * Please keep in mind that like all events this is only emitted for successful
     * calls. This is because on failure all storage changes including events are
     * rolled back.
     */
    v64: new EventType(
        'Contracts.Called',
        sts.struct({
            /**
             * The caller of the `contract`.
             */
            caller: v64.Origin,
            /**
             * The contract that was called.
             */
            contract: v64.AccountId32,
        })
    ),
}

export const delegateCalled =  {
    name: 'Contracts.DelegateCalled',
    /**
     * A contract delegate called a code hash.
     * 
     * # Note
     * 
     * Please keep in mind that like all events this is only emitted for successful
     * calls. This is because on failure all storage changes including events are
     * rolled back.
     */
    v55: new EventType(
        'Contracts.DelegateCalled',
        sts.struct({
            /**
             * The contract that performed the delegate call and hence in whose context
             * the `code_hash` is executed.
             */
            contract: v55.AccountId32,
            /**
             * The code hash that was delegate called.
             */
            codeHash: v55.H256,
        })
    ),
}

export const storageDepositTransferredAndHeld =  {
    name: 'Contracts.StorageDepositTransferredAndHeld',
    /**
     * Some funds have been transferred and held as storage deposit.
     */
    v82: new EventType(
        'Contracts.StorageDepositTransferredAndHeld',
        sts.struct({
            from: v82.AccountId32,
            to: v82.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const storageDepositTransferredAndReleased =  {
    name: 'Contracts.StorageDepositTransferredAndReleased',
    /**
     * Some storage deposit funds have been transferred and released.
     */
    v82: new EventType(
        'Contracts.StorageDepositTransferredAndReleased',
        sts.struct({
            from: v82.AccountId32,
            to: v82.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
