import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v12 from '../v12'
import * as v39 from '../v39'
import * as v58 from '../v58'
import * as v59 from '../v59'
import * as v64 from '../v64'
import * as v68 from '../v68'

export const batch =  {
    name: 'Utility.batch',
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
    v12: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v12.Call),
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
    v39: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v39.Call),
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
    v58: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v58.Call),
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
    v59: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v59.Call),
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
    v64: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v64.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v68: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v68.Call),
        })
    ),
}

export const asDerivative =  {
    name: 'Utility.as_derivative',
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
    v12: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v12.Call,
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
    v39: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v39.Call,
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
    v58: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v58.Call,
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
    v59: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v59.Call,
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
    v64: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v64.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v68: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v68.Call,
        })
    ),
}

export const batchAll =  {
    name: 'Utility.batch_all',
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
    v12: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v12.Call),
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
    v39: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v39.Call),
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
    v58: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v58.Call),
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
    v59: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v59.Call),
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
    v64: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v64.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v68: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v68.Call),
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
    v12: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v12.OriginCaller,
            call: v12.Call,
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
    v39: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v39.OriginCaller,
            call: v39.Call,
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
    v58: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v58.OriginCaller,
            call: v58.Call,
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
    v59: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v59.OriginCaller,
            call: v59.Call,
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
    v64: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v64.OriginCaller,
            call: v64.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v68: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v68.OriginCaller,
            call: v68.Call,
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
    v39: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v39.Call),
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
    v58: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v58.Call),
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
    v59: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v59.Call),
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
    v64: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v64.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v68: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v68.Call),
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
    v59: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v59.Call,
            weight: v59.Weight,
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
    v64: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v64.Call,
            weight: v64.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v68: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v68.Call,
            weight: v68.Weight,
        })
    ),
}
