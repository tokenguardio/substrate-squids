import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v9 from '../v9'
import * as v23 from '../v23'
import * as v30 from '../v30'
import * as v33 from '../v33'
import * as v43 from '../v43'
import * as v64 from '../v64'

export const executed =  {
    name: 'Ethereum.Executed',
    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    v1: new EventType(
        'Ethereum.Executed',
        sts.tuple([v1.H160, v1.H160, v1.H256, v1.ExitReason])
    ),
    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    v9: new EventType(
        'Ethereum.Executed',
        sts.tuple([v9.H160, v9.H160, v9.H256, v9.ExitReason])
    ),
    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    v23: new EventType(
        'Ethereum.Executed',
        sts.tuple([v23.H160, v23.H160, v23.H256, v23.ExitReason])
    ),
    /**
     * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
     */
    v30: new EventType(
        'Ethereum.Executed',
        sts.tuple([v30.H160, v30.H160, v30.H256, v30.ExitReason])
    ),
    /**
     * An ethereum transaction was successfully executed.
     */
    v33: new EventType(
        'Ethereum.Executed',
        sts.struct({
            from: v33.H160,
            to: v33.H160,
            transactionHash: v33.H256,
            exitReason: v33.ExitReason,
        })
    ),
    /**
     * An ethereum transaction was successfully executed.
     */
    v43: new EventType(
        'Ethereum.Executed',
        sts.struct({
            from: v43.H160,
            to: v43.H160,
            transactionHash: v43.H256,
            exitReason: v43.ExitReason,
        })
    ),
    /**
     * An ethereum transaction was successfully executed.
     */
    v64: new EventType(
        'Ethereum.Executed',
        sts.struct({
            from: v64.H160,
            to: v64.H160,
            transactionHash: v64.H256,
            exitReason: v64.ExitReason,
            extraData: sts.bytes(),
        })
    ),
}
