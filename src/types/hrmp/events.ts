import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9340 from '../v9340'
import * as v1001002 from '../v1001002'

export const openChannelRequested =  {
    name: 'Hrmp.OpenChannelRequested',
    /**
     * Open HRMP channel requested.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    v9110: new EventType(
        'Hrmp.OpenChannelRequested',
        sts.tuple([v9110.Id, v9110.Id, sts.number(), sts.number()])
    ),
    /**
     * Open HRMP channel requested.
     */
    v1001002: new EventType(
        'Hrmp.OpenChannelRequested',
        sts.struct({
            sender: v1001002.Id,
            recipient: v1001002.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const openChannelCanceled =  {
    name: 'Hrmp.OpenChannelCanceled',
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     * `[by_parachain, channel_id]`
     */
    v9110: new EventType(
        'Hrmp.OpenChannelCanceled',
        sts.tuple([v9110.Id, v9110.HrmpChannelId])
    ),
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     */
    v1001002: new EventType(
        'Hrmp.OpenChannelCanceled',
        sts.struct({
            byParachain: v1001002.Id,
            channelId: v1001002.HrmpChannelId,
        })
    ),
}

export const openChannelAccepted =  {
    name: 'Hrmp.OpenChannelAccepted',
    /**
     * Open HRMP channel accepted. `[sender, recipient]`
     */
    v9110: new EventType(
        'Hrmp.OpenChannelAccepted',
        sts.tuple([v9110.Id, v9110.Id])
    ),
    /**
     * Open HRMP channel accepted.
     */
    v1001002: new EventType(
        'Hrmp.OpenChannelAccepted',
        sts.struct({
            sender: v1001002.Id,
            recipient: v1001002.Id,
        })
    ),
}

export const channelClosed =  {
    name: 'Hrmp.ChannelClosed',
    /**
     * HRMP channel closed. `[by_parachain, channel_id]`
     */
    v9110: new EventType(
        'Hrmp.ChannelClosed',
        sts.tuple([v9110.Id, v9110.HrmpChannelId])
    ),
    /**
     * HRMP channel closed.
     */
    v1001002: new EventType(
        'Hrmp.ChannelClosed',
        sts.struct({
            byParachain: v1001002.Id,
            channelId: v1001002.HrmpChannelId,
        })
    ),
}

export const hrmpChannelForceOpened =  {
    name: 'Hrmp.HrmpChannelForceOpened',
    /**
     * An HRMP channel was opened via Root origin.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    v9340: new EventType(
        'Hrmp.HrmpChannelForceOpened',
        sts.tuple([v9340.Id, v9340.Id, sts.number(), sts.number()])
    ),
    /**
     * An HRMP channel was opened via Root origin.
     */
    v1001002: new EventType(
        'Hrmp.HrmpChannelForceOpened',
        sts.struct({
            sender: v1001002.Id,
            recipient: v1001002.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const hrmpSystemChannelOpened =  {
    name: 'Hrmp.HrmpSystemChannelOpened',
    /**
     * An HRMP channel was opened between two system chains.
     */
    v1001002: new EventType(
        'Hrmp.HrmpSystemChannelOpened',
        sts.struct({
            sender: v1001002.Id,
            recipient: v1001002.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const openChannelDepositsUpdated =  {
    name: 'Hrmp.OpenChannelDepositsUpdated',
    /**
     * An HRMP channel's deposits were updated.
     */
    v1001002: new EventType(
        'Hrmp.OpenChannelDepositsUpdated',
        sts.struct({
            sender: v1001002.Id,
            recipient: v1001002.Id,
        })
    ),
}
