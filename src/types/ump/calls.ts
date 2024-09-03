import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9291 from '../v9291'
import * as v9340 from '../v9340'

export const serviceOverweight =  {
    name: 'Ump.service_overweight',
    /**
     * Service a single overweight upward message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `UnknownMessageIndex`: Message of `index` is unknown.
     * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    v9110: new CallType(
        'Ump.service_overweight',
        sts.struct({
            index: sts.bigint(),
            weightLimit: sts.bigint(),
        })
    ),
    /**
     * Service a single overweight upward message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `UnknownMessageIndex`: Message of `index` is unknown.
     * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    v9291: new CallType(
        'Ump.service_overweight',
        sts.struct({
            index: sts.bigint(),
            weightLimit: v9291.Weight,
        })
    ),
    /**
     * Service a single overweight upward message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `UnknownMessageIndex`: Message of `index` is unknown.
     * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    v9340: new CallType(
        'Ump.service_overweight',
        sts.struct({
            index: sts.bigint(),
            weightLimit: v9340.Weight,
        })
    ),
}
