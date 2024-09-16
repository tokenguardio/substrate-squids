import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v972 from '../v972'

export const serviceOverweight =  {
    name: 'XcmpQueue.service_overweight',
    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    v932: new CallType(
        'XcmpQueue.service_overweight',
        sts.struct({
            index: sts.bigint(),
            weightLimit: sts.bigint(),
        })
    ),
    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    v972: new CallType(
        'XcmpQueue.service_overweight',
        sts.struct({
            index: sts.bigint(),
            weightLimit: v972.Weight,
        })
    ),
}

export const suspendXcmExecution =  {
    name: 'XcmpQueue.suspend_xcm_execution',
    /**
     * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    v932: new CallType(
        'XcmpQueue.suspend_xcm_execution',
        sts.unit()
    ),
}

export const resumeXcmExecution =  {
    name: 'XcmpQueue.resume_xcm_execution',
    /**
     * Resumes all XCM executions for the XCMP queue.
     * 
     * Note that this function doesn't change the status of the in/out bound channels.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    v932: new CallType(
        'XcmpQueue.resume_xcm_execution',
        sts.unit()
    ),
}

export const updateSuspendThreshold =  {
    name: 'XcmpQueue.update_suspend_threshold',
    /**
     * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
     * suspend their sending.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.suspend_value`
     */
    v932: new CallType(
        'XcmpQueue.update_suspend_threshold',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const updateDropThreshold =  {
    name: 'XcmpQueue.update_drop_threshold',
    /**
     * Overwrites the number of pages of messages which must be in the queue after which we drop any further
     * messages from the channel.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.drop_threshold`
     */
    v932: new CallType(
        'XcmpQueue.update_drop_threshold',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const updateResumeThreshold =  {
    name: 'XcmpQueue.update_resume_threshold',
    /**
     * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
     * message sending may recommence after it has been suspended.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.resume_threshold`
     */
    v932: new CallType(
        'XcmpQueue.update_resume_threshold',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const updateThresholdWeight =  {
    name: 'XcmpQueue.update_threshold_weight',
    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    v932: new CallType(
        'XcmpQueue.update_threshold_weight',
        sts.struct({
            new: sts.bigint(),
        })
    ),
    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    v972: new CallType(
        'XcmpQueue.update_threshold_weight',
        sts.struct({
            new: v972.Weight,
        })
    ),
}

export const updateWeightRestrictDecay =  {
    name: 'XcmpQueue.update_weight_restrict_decay',
    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    v932: new CallType(
        'XcmpQueue.update_weight_restrict_decay',
        sts.struct({
            new: sts.bigint(),
        })
    ),
    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    v972: new CallType(
        'XcmpQueue.update_weight_restrict_decay',
        sts.struct({
            new: v972.Weight,
        })
    ),
}

export const updateXcmpMaxIndividualWeight =  {
    name: 'XcmpQueue.update_xcmp_max_individual_weight',
    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    v932: new CallType(
        'XcmpQueue.update_xcmp_max_individual_weight',
        sts.struct({
            new: sts.bigint(),
        })
    ),
    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    v972: new CallType(
        'XcmpQueue.update_xcmp_max_individual_weight',
        sts.struct({
            new: v972.Weight,
        })
    ),
}
