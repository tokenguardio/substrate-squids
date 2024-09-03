import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v5 from '../v5'
import * as v6 from '../v6'
import * as v7 from '../v7'
import * as v9 from '../v9'
import * as v10 from '../v10'
import * as v11 from '../v11'
import * as v13 from '../v13'
import * as v14 from '../v14'
import * as v15 from '../v15'
import * as v17 from '../v17'
import * as v18 from '../v18'
import * as v23 from '../v23'
import * as v24 from '../v24'
import * as v25 from '../v25'
import * as v26 from '../v26'
import * as v28 from '../v28'
import * as v29 from '../v29'
import * as v30 from '../v30'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9110 from '../v9110'
import * as v9140 from '../v9140'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9190 from '../v9190'
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9250 from '../v9250'
import * as v9270 from '../v9270'
import * as v9280 from '../v9280'
import * as v9291 from '../v9291'
import * as v9300 from '../v9300'
import * as v9340 from '../v9340'
import * as v9370 from '../v9370'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1000001 from '../v1000001'
import * as v1001002 from '../v1001002'
import * as v1002000 from '../v1002000'
import * as v1002004 from '../v1002004'
import * as v1002005 from '../v1002005'
import * as v1002006 from '../v1002006'

export const batch =  {
    name: 'Utility.batch',
    /**
     *  Send a batch of dispatch calls.
     * 
     *  This will execute until the first one fails and then stop. Calls must fulfil the
     *  `IsCallable` filter unless the origin is `Root`.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v0: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v0.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  This will execute until the first one fails and then stop. Calls must fulfil the
     *  `IsCallable` filter unless the origin is `Root`.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v5: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v5.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  This will execute until the first one fails and then stop. Calls must fulfil the
     *  `IsCallable` filter unless the origin is `Root`.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v6: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v6.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  This will execute until the first one fails and then stop. Calls must fulfil the
     *  `IsCallable` filter unless the origin is `Root`.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v7: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v7.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v9: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v10: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v10.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v11: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v11.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v13: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v13.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v14: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v14.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v15: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v15.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v17: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v17.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v18: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v18.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v23: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v23.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v24: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v24.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Base weight: 14.39 + .987 * c µs
     *  - Plus the sum of the weights of the `calls`.
     *  - Plus one additional event. (repeat read/write)
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v25: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v25.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v26: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v26.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v28: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v28.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v29: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v29.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v30: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v30.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v9050: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9050.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v9080: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9080.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v9090: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9090.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     * 
     *  This will return `Ok` in all circumstances. To determine the success of the batch, an
     *  event is deposited. If a call failed and the batch was interrupted, then the
     *  `BatchInterrupted` event is deposited, along with the number of successful calls made
     *  and the error of the failed call. If all were successful, then the `BatchCompleted`
     *  event is deposited.
     */
    v9100: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9100.Type_52),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9110: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9110.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9140: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9140.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9170: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9170.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9180: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9180.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9190: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9190.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9220: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9220.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9230: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9230.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9250: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9250.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9270: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9270.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9280: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9280.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9291: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9291.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9300: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9300.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9340: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9340.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9370: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9370.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9420: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9420.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v9430: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v9430.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v1000001: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1000001.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v1001002: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1001002.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v1002000: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1002000.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v1002004: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1002004.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v1002005: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1002005.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v1002006: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1002006.Call),
        })
    ),
}

export const asSub =  {
    name: 'Utility.as_sub',
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Calls must each fulfil the `IsCallable` filter.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v0: new CallType(
        'Utility.as_sub',
        sts.struct({
            index: sts.number(),
            call: v0.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  The call must fulfil only the pre-cleared `IsCallable` filter (i.e. only the level of
     *  filtering that remains after calling `take()`).
     * 
     *  NOTE: If you need to ensure that any account-based filtering is honored (i.e. because
     *  you expect `proxy` to have been used prior in the call stack and you want it to apply to
     *  any sub-accounts), then use `as_limited_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v5: new CallType(
        'Utility.as_sub',
        sts.struct({
            index: sts.number(),
            call: v5.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  The call must fulfil only the pre-cleared `IsCallable` filter (i.e. only the level of
     *  filtering that remains after calling `take()`).
     * 
     *  NOTE: If you need to ensure that any account-based filtering is honored (i.e. because
     *  you expect `proxy` to have been used prior in the call stack and you want it to apply to
     *  any sub-accounts), then use `as_limited_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v6: new CallType(
        'Utility.as_sub',
        sts.struct({
            index: sts.number(),
            call: v6.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  The call must fulfil only the pre-cleared `IsCallable` filter (i.e. only the level of
     *  filtering that remains after calling `take()`).
     * 
     *  NOTE: If you need to ensure that any account-based filtering is honored (i.e. because
     *  you expect `proxy` to have been used prior in the call stack and you want it to apply to
     *  any sub-accounts), then use `as_limited_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v7: new CallType(
        'Utility.as_sub',
        sts.struct({
            index: sts.number(),
            call: v7.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is honored (i.e. because
     *  you expect `proxy` to have been used prior in the call stack and you want it to apply to
     *  any sub-accounts), then use `as_limited_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v9: new CallType(
        'Utility.as_sub',
        sts.struct({
            index: sts.number(),
            call: v9.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is honored (i.e. because
     *  you expect `proxy` to have been used prior in the call stack and you want it to apply to
     *  any sub-accounts), then use `as_limited_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v10: new CallType(
        'Utility.as_sub',
        sts.struct({
            index: sts.number(),
            call: v10.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is honored (i.e. because
     *  you expect `proxy` to have been used prior in the call stack and you want it to apply to
     *  any sub-accounts), then use `as_limited_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v11: new CallType(
        'Utility.as_sub',
        sts.struct({
            index: sts.number(),
            call: v11.Type_44,
        })
    ),
}

export const asMulti =  {
    name: 'Utility.as_multi',
    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  If there are enough, then dispatch the call. Calls must each fulfil the `IsCallable`
     *  filter.
     * 
     *  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call`: The call to be executed.
     * 
     *  NOTE: Unless this is the final approval, you will generally want to use
     *  `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *  on success, result is `Ok` and the result from the interior call, if it was executed,
     *  may be found in the deposited `MultisigExecuted` event.
     * 
     *  # <weight>
     *  - `O(S + Z + Call)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - The weight of the `call`.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `MultisigDepositBase + threshold * MultisigDepositFactor`.
     *  -------------------------------
     *  - Base Weight:
     *      - Create: 46.55 + 0.089 * S µs
     *      - Approve: 34.03 + .112 * S µs
     *      - Complete: 40.36 + .225 * S µs
     *  - DB Weight:
     *      - Reads: Multisig Storage, [Caller Account]
     *      - Writes: Multisig Storage, [Caller Account]
     *  - Plus Call Weight
     *  # </weight>
     */
    v0: new CallType(
        'Utility.as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => v0.AccountId),
            maybeTimepoint: sts.option(() => v0.Timepoint),
            call: v0.Type_44,
        })
    ),
}

export const approveAsMulti =  {
    name: 'Utility.approve_as_multi',
    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  Payment: `MultisigDepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `MultisigDepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `MultisigDepositBase + threshold * MultisigDepositFactor`.
     *  ----------------------------------
     *  - Base Weight:
     *      - Create: 44.71 + 0.088 * S
     *      - Approve: 31.48 + 0.116 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    v0: new CallType(
        'Utility.approve_as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => v0.AccountId),
            maybeTimepoint: sts.option(() => v0.Timepoint),
            callHash: sts.bytes(),
        })
    ),
}

export const cancelAsMulti =  {
    name: 'Utility.cancel_as_multi',
    /**
     *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *  for this operation will be unreserved on success.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
     *  transaction for this dispatch.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - One event.
     *  - I/O: 1 read `O(S)`, one remove.
     *  - Storage: removes one item.
     *  ----------------------------------
     *  - Base Weight: 37.6 + 0.084 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    v0: new CallType(
        'Utility.cancel_as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => v0.AccountId),
            timepoint: v0.Timepoint,
            callHash: sts.bytes(),
        })
    ),
}

export const asLimitedSub =  {
    name: 'Utility.as_limited_sub',
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Calls must each fulfil the `IsCallable` filter; it is not cleared before.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v5: new CallType(
        'Utility.as_limited_sub',
        sts.struct({
            index: sts.number(),
            call: v5.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Calls must each fulfil the `IsCallable` filter; it is not cleared before.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v6: new CallType(
        'Utility.as_limited_sub',
        sts.struct({
            index: sts.number(),
            call: v6.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Calls must each fulfil the `IsCallable` filter; it is not cleared before.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v7: new CallType(
        'Utility.as_limited_sub',
        sts.struct({
            index: sts.number(),
            call: v7.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v9: new CallType(
        'Utility.as_limited_sub',
        sts.struct({
            index: sts.number(),
            call: v9.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v10: new CallType(
        'Utility.as_limited_sub',
        sts.struct({
            index: sts.number(),
            call: v10.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_sub` instead.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v11: new CallType(
        'Utility.as_limited_sub',
        sts.struct({
            index: sts.number(),
            call: v11.Type_44,
        })
    ),
}

export const asDerivative =  {
    name: 'Utility.as_derivative',
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v13: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v13.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v14: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v14.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v15: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v15.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v17: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v17.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - Base weight: 2.861 µs
     *  - Plus the weight of the `call`
     *  # </weight>
     */
    v18: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v18.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v23: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v23.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v24: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v24.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v25: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v25.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v26: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v26.Type_44,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v28: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v28.Type_52,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v29: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v29.Type_52,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v30: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v30.Type_52,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v9050: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9050.Type_52,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v9080: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9080.Type_52,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v9090: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9090.Type_52,
        })
    ),
    /**
     *  Send a call through an indexed pseudonym of the sender.
     * 
     *  Filter from origin are passed along. The call will be dispatched with an origin which
     *  use the same filter as the origin of this call.
     * 
     *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *  because you expect `proxy` to have been used prior in the call stack and you do not want
     *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *  in the Multisig pallet instead.
     * 
     *  NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     *  The dispatch origin for this call must be _Signed_.
     */
    v9100: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9100.Type_52,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9110: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9110.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9140: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9140.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9170: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9170.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9180: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9180.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9190: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9190.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9220: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9220.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9230: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9230.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9250: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9250.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9270: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9270.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9280: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9280.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9291: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9291.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9300: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9300.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9340: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9340.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9370: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9370.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9420: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9420.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v9430: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v1000001: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1000001.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v1001002: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1001002.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v1002000: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v1002004: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v1002005: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1002005.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v1002006: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1002006.Call,
        })
    ),
}

export const batchAll =  {
    name: 'Utility.batch_all',
    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Trait::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    v26: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v26.Type_44),
        })
    ),
    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    v28: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v28.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    v29: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v29.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    v30: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v30.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    v9050: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9050.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin.
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    v9080: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9080.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    v9090: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9090.Type_52),
        })
    ),
    /**
     *  Send a batch of dispatch calls and atomically execute them.
     *  The whole transaction will rollback and fail if any of the calls failed.
     * 
     *  May be called from any origin.
     * 
     *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *    exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     *  If origin is root then call are dispatch without checking origin filter. (This includes
     *  bypassing `frame_system::Config::BaseCallFilter`).
     * 
     *  # <weight>
     *  - Complexity: O(C) where C is the number of calls to be batched.
     *  # </weight>
     */
    v9100: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9100.Type_52),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9110: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9110.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9140: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9140.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9170: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9170.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9180: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9180.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9190: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9190.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9220: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9220.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9230: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9230.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9250: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9250.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9270: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9270.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9280: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9280.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9291: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9291.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9300: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9300.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9340: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9340.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9370: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9370.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v9420: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9420.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v9430: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v9430.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v1000001: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1000001.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v1001002: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1001002.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v1002000: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1002000.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v1002004: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1002004.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v1002005: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1002005.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v1002006: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1002006.Call),
        })
    ),
}

export const dispatchAs =  {
    name: 'Utility.dispatch_as',
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9140: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9140.OriginCaller,
            call: v9140.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9170: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9170.OriginCaller,
            call: v9170.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9180: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9180.OriginCaller,
            call: v9180.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9190: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9190.OriginCaller,
            call: v9190.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9220: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9220.OriginCaller,
            call: v9220.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9230: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9230.OriginCaller,
            call: v9230.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9250: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9250.OriginCaller,
            call: v9250.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9270: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9270.OriginCaller,
            call: v9270.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9280: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9280.OriginCaller,
            call: v9280.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9291: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9291.OriginCaller,
            call: v9291.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9300: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9300.OriginCaller,
            call: v9300.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9340: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9340.OriginCaller,
            call: v9340.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    v9370: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9370.OriginCaller,
            call: v9370.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    v9420: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9420.OriginCaller,
            call: v9420.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    v9430: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v9430.OriginCaller,
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v1000001: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1000001.OriginCaller,
            call: v1000001.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v1001002: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1001002.OriginCaller,
            call: v1001002.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v1002000: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1002000.OriginCaller,
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v1002004: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1002004.OriginCaller,
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v1002005: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1002005.OriginCaller,
            call: v1002005.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v1002006: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1002006.OriginCaller,
            call: v1002006.Call,
        })
    ),
}

export const forceBatch =  {
    name: 'Utility.force_batch',
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9220: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9220.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9230: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9230.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9250: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9250.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9270: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9270.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9280: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9280.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9291: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9291.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9300: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9300.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9340: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9340.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    v9370: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9370.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v9420: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9420.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v9430: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v9430.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v1000001: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1000001.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v1001002: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1001002.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v1002000: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1002000.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v1002004: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1002004.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v1002005: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1002005.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v1002006: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1002006.Call),
        })
    ),
}

export const withWeight =  {
    name: 'Utility.with_weight',
    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    v9340: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v9340.Call,
            weight: v9340.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    v9370: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v9370.Call,
            weight: v9370.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    v9420: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v9420.Call,
            weight: v9420.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    v9430: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v9430.Call,
            weight: v9430.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v1000001: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1000001.Call,
            weight: v1000001.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v1001002: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1001002.Call,
            weight: v1001002.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v1002000: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1002000.Call,
            weight: v1002000.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v1002004: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1002004.Call,
            weight: v1002004.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v1002005: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1002005.Call,
            weight: v1002005.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v1002006: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1002006.Call,
            weight: v1002006.Weight,
        })
    ),
}
