import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v59 from '../v59'
import * as v68 from '../v68'

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
