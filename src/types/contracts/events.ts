import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v59 from '../v59'
import * as v68 from '../v68'

export const instantiated =  {
    name: 'Contracts.Instantiated',
    /**
     * Contract deployed by address at the specified address.
     */
    v59: new EventType(
        'Contracts.Instantiated',
        sts.struct({
            deployer: v59.AccountId32,
            contract: v59.AccountId32,
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
    v59: new EventType(
        'Contracts.Terminated',
        sts.struct({
            /**
             * The contract that was terminated.
             */
            contract: v59.AccountId32,
            /**
             * The account that received the contracts remaining balance
             */
            beneficiary: v59.AccountId32,
        })
    ),
}

export const codeStored =  {
    name: 'Contracts.CodeStored',
    /**
     * Code with the specified hash has been stored.
     */
    v59: new EventType(
        'Contracts.CodeStored',
        sts.struct({
            codeHash: v59.H256,
        })
    ),
}

export const contractEmitted =  {
    name: 'Contracts.ContractEmitted',
    /**
     * A custom event emitted by the contract.
     */
    v59: new EventType(
        'Contracts.ContractEmitted',
        sts.struct({
            /**
             * The contract that emitted the event.
             */
            contract: v59.AccountId32,
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
    v59: new EventType(
        'Contracts.CodeRemoved',
        sts.struct({
            codeHash: v59.H256,
        })
    ),
}

export const contractCodeUpdated =  {
    name: 'Contracts.ContractCodeUpdated',
    /**
     * A contract's code was updated.
     */
    v59: new EventType(
        'Contracts.ContractCodeUpdated',
        sts.struct({
            /**
             * The contract that has been updated.
             */
            contract: v59.AccountId32,
            /**
             * New code hash that was set for the contract.
             */
            newCodeHash: v59.H256,
            /**
             * Previous code hash of the contract.
             */
            oldCodeHash: v59.H256,
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
    v59: new EventType(
        'Contracts.Called',
        sts.struct({
            /**
             * The account that called the `contract`.
             */
            caller: v59.AccountId32,
            /**
             * The contract that was called.
             */
            contract: v59.AccountId32,
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
    v68: new EventType(
        'Contracts.Called',
        sts.struct({
            /**
             * The caller of the `contract`.
             */
            caller: v68.Origin,
            /**
             * The contract that was called.
             */
            contract: v68.AccountId32,
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
    v59: new EventType(
        'Contracts.DelegateCalled',
        sts.struct({
            /**
             * The contract that performed the delegate call and hence in whose context
             * the `code_hash` is executed.
             */
            contract: v59.AccountId32,
            /**
             * The code hash that was delegate called.
             */
            codeHash: v59.H256,
        })
    ),
}
