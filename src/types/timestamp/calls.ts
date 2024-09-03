import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const set =  {
    name: 'Timestamp.set',
    /**
     *  Set the current time.
     * 
     *  This call should be invoked exactly once per block. It will panic at the finalization
     *  phase, if this call hasn't been invoked by that time.
     * 
     *  The timestamp should be greater than the previous one by the amount specified by
     *  `MinimumPeriod`.
     * 
     *  The dispatch origin for this call must be `Inherent`.
     * 
     *  # <weight>
     *  - `O(T)` where `T` complexity of `on_timestamp_set`
     *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
     *  - 1 event handler `on_timestamp_set` `O(T)`.
     *  - Benchmark: 7.678 (min squares analysis)
     *    - NOTE: This benchmark was done for a runtime with insignificant `on_timestamp_set` handlers.
     *      New benchmarking is needed when adding new handlers.
     *  # </weight>
     */
    v0: new CallType(
        'Timestamp.set',
        sts.struct({
            now: sts.bigint(),
        })
    ),
}
