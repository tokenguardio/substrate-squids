import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v9340 from '../v9340'
import * as v1001002 from '../v1001002'
import * as v1002005 from '../v1002005'

export const hrmpInitOpenChannel =  {
    name: 'Hrmp.hrmp_init_open_channel',
    /**
     * Initiate opening a channel from a parachain to a given recipient with given channel
     * parameters.
     * 
     * - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
     * - `proposed_max_message_size` - specifies the maximum size of the messages.
     * 
     * These numbers are a subject to the relay-chain configuration limits.
     * 
     * The channel can be opened only after the recipient confirms it and only on a session
     * change.
     */
    v9110: new CallType(
        'Hrmp.hrmp_init_open_channel',
        sts.struct({
            recipient: v9110.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const hrmpAcceptOpenChannel =  {
    name: 'Hrmp.hrmp_accept_open_channel',
    /**
     * Accept a pending open channel request from the given sender.
     * 
     * The channel will be opened only on the next session boundary.
     */
    v9110: new CallType(
        'Hrmp.hrmp_accept_open_channel',
        sts.struct({
            sender: v9110.Id,
        })
    ),
}

export const hrmpCloseChannel =  {
    name: 'Hrmp.hrmp_close_channel',
    /**
     * Initiate unilateral closing of a channel. The origin must be either the sender or the
     * recipient in the channel being closed.
     * 
     * The closure can only happen on a session change.
     */
    v9110: new CallType(
        'Hrmp.hrmp_close_channel',
        sts.struct({
            channelId: v9110.HrmpChannelId,
        })
    ),
}

export const forceCleanHrmp =  {
    name: 'Hrmp.force_clean_hrmp',
    /**
     * This extrinsic triggers the cleanup of all the HRMP storage items that
     * a para may have. Normally this happens once per session, but this allows
     * you to trigger the cleanup immediately for a specific parachain.
     * 
     * Origin must be Root.
     */
    v9110: new CallType(
        'Hrmp.force_clean_hrmp',
        sts.struct({
            para: v9110.Id,
        })
    ),
    /**
     * This extrinsic triggers the cleanup of all the HRMP storage items that
     * a para may have. Normally this happens once per session, but this allows
     * you to trigger the cleanup immediately for a specific parachain.
     * 
     * Origin must be Root.
     * 
     * Number of inbound and outbound channels for `para` must be provided as witness data of weighing.
     */
    v9170: new CallType(
        'Hrmp.force_clean_hrmp',
        sts.struct({
            para: v9170.Id,
            inbound: sts.number(),
            outbound: sts.number(),
        })
    ),
    /**
     * See [`Pallet::force_clean_hrmp`].
     */
    v1001002: new CallType(
        'Hrmp.force_clean_hrmp',
        sts.struct({
            para: v1001002.Id,
            numInbound: sts.number(),
            numOutbound: sts.number(),
        })
    ),
}

export const forceProcessHrmpOpen =  {
    name: 'Hrmp.force_process_hrmp_open',
    /**
     * Force process HRMP open channel requests.
     * 
     * If there are pending HRMP open channel requests, you can use this
     * function process all of those requests immediately.
     */
    v9110: new CallType(
        'Hrmp.force_process_hrmp_open',
        sts.unit()
    ),
    /**
     * Force process HRMP open channel requests.
     * 
     * If there are pending HRMP open channel requests, you can use this
     * function process all of those requests immediately.
     * 
     * Total number of opening channels must be provided as witness data of weighing.
     */
    v9170: new CallType(
        'Hrmp.force_process_hrmp_open',
        sts.struct({
            channels: sts.number(),
        })
    ),
}

export const forceProcessHrmpClose =  {
    name: 'Hrmp.force_process_hrmp_close',
    /**
     * Force process HRMP close channel requests.
     * 
     * If there are pending HRMP close channel requests, you can use this
     * function process all of those requests immediately.
     */
    v9110: new CallType(
        'Hrmp.force_process_hrmp_close',
        sts.unit()
    ),
    /**
     * Force process HRMP close channel requests.
     * 
     * If there are pending HRMP close channel requests, you can use this
     * function process all of those requests immediately.
     * 
     * Total number of closing channels must be provided as witness data of weighing.
     */
    v9170: new CallType(
        'Hrmp.force_process_hrmp_close',
        sts.struct({
            channels: sts.number(),
        })
    ),
}

export const hrmpCancelOpenRequest =  {
    name: 'Hrmp.hrmp_cancel_open_request',
    /**
     * This cancels a pending open channel request. It can be canceled be either of the sender
     * or the recipient for that request. The origin must be either of those.
     * 
     * The cancelling happens immediately. It is not possible to cancel the request if it is
     * already accepted.
     */
    v9110: new CallType(
        'Hrmp.hrmp_cancel_open_request',
        sts.struct({
            channelId: v9110.HrmpChannelId,
        })
    ),
    /**
     * This cancels a pending open channel request. It can be canceled by either of the sender
     * or the recipient for that request. The origin must be either of those.
     * 
     * The cancellation happens immediately. It is not possible to cancel the request if it is
     * already accepted.
     * 
     * Total number of open requests (i.e. `HrmpOpenChannelRequestsList`) must be provided as
     * witness data.
     */
    v9170: new CallType(
        'Hrmp.hrmp_cancel_open_request',
        sts.struct({
            channelId: v9170.HrmpChannelId,
            openRequests: sts.number(),
        })
    ),
}

export const forceOpenHrmpChannel =  {
    name: 'Hrmp.force_open_hrmp_channel',
    /**
     * Open a channel from a `sender` to a `recipient` `ParaId` using the Root origin. Although
     * opened by Root, the `max_capacity` and `max_message_size` are still subject to the Relay
     * Chain's configured limits.
     * 
     * Expected use is when one of the `ParaId`s involved in the channel is governed by the
     * Relay Chain, e.g. a common good parachain.
     */
    v9340: new CallType(
        'Hrmp.force_open_hrmp_channel',
        sts.struct({
            sender: v9340.Id,
            recipient: v9340.Id,
            maxCapacity: sts.number(),
            maxMessageSize: sts.number(),
        })
    ),
}

export const establishSystemChannel =  {
    name: 'Hrmp.establish_system_channel',
    /**
     * See [`Pallet::establish_system_channel`].
     */
    v1001002: new CallType(
        'Hrmp.establish_system_channel',
        sts.struct({
            sender: v1001002.Id,
            recipient: v1001002.Id,
        })
    ),
}

export const pokeChannelDeposits =  {
    name: 'Hrmp.poke_channel_deposits',
    /**
     * See [`Pallet::poke_channel_deposits`].
     */
    v1001002: new CallType(
        'Hrmp.poke_channel_deposits',
        sts.struct({
            sender: v1001002.Id,
            recipient: v1001002.Id,
        })
    ),
}

export const establishChannelWithSystem =  {
    name: 'Hrmp.establish_channel_with_system',
    /**
     * See [`Pallet::establish_channel_with_system`].
     */
    v1002005: new CallType(
        'Hrmp.establish_channel_with_system',
        sts.struct({
            targetSystemChain: v1002005.Id,
        })
    ),
}
