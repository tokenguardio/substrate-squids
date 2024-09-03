import { hrmp } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeHrmpEventsArgs(event: Event): any {
  switch (event.name) {
    case hrmp.openChannelRequested.name:
      if (hrmp.openChannelRequested.v9110.is(event)) {
        const [sender, recipient, proposedMaxCapacity, proposedMaxMessageSize] =
          hrmp.openChannelRequested.v9110.decode(event);
        return {
          sender,
          recipient,
          proposedMaxCapacity,
          proposedMaxMessageSize,
        };
      } else if (hrmp.openChannelRequested.v1001002.is(event)) {
        return hrmp.openChannelRequested.v1001002.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case hrmp.openChannelCanceled.name:
      if (hrmp.openChannelCanceled.v9110.is(event)) {
        const [byParachain, channelId] =
          hrmp.openChannelCanceled.v9110.decode(event);
        return { byParachain, channelId };
      } else if (hrmp.openChannelCanceled.v1001002.is(event)) {
        return hrmp.openChannelCanceled.v1001002.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case hrmp.openChannelAccepted.name:
      if (hrmp.openChannelAccepted.v9110.is(event)) {
        const [sender, recipient] =
          hrmp.openChannelAccepted.v9110.decode(event);
        return { sender, recipient };
      } else if (hrmp.openChannelAccepted.v1001002.is(event)) {
        return hrmp.openChannelAccepted.v1001002.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case hrmp.channelClosed.name:
      if (hrmp.channelClosed.v9110.is(event)) {
        const [byParachain, channelId] = hrmp.channelClosed.v9110.decode(event);
        return { byParachain, channelId };
      } else if (hrmp.channelClosed.v1001002.is(event)) {
        return hrmp.channelClosed.v1001002.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case hrmp.hrmpChannelForceOpened.name:
      if (hrmp.hrmpChannelForceOpened.v9340.is(event)) {
        const [sender, recipient, proposedMaxCapacity, proposedMaxMessageSize] =
          hrmp.hrmpChannelForceOpened.v9340.decode(event);
        return {
          sender,
          recipient,
          proposedMaxCapacity,
          proposedMaxMessageSize,
        };
      } else if (hrmp.hrmpChannelForceOpened.v1001002.is(event)) {
        return hrmp.hrmpChannelForceOpened.v1001002.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case hrmp.hrmpSystemChannelOpened.name:
      if (hrmp.hrmpSystemChannelOpened.v1001002.is(event)) {
        return hrmp.hrmpSystemChannelOpened.v1001002.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case hrmp.openChannelDepositsUpdated.name:
      if (hrmp.openChannelDepositsUpdated.v1001002.is(event)) {
        return hrmp.openChannelDepositsUpdated.v1001002.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
