import { hrmp } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeHrmpCallsArgs(call: Call): any {
  switch (call.name) {
    case hrmp.hrmpInitOpenChannel.name:
      if (hrmp.hrmpInitOpenChannel.v9110.is(call)) {
        return hrmp.hrmpInitOpenChannel.v9110.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case hrmp.hrmpAcceptOpenChannel.name:
      if (hrmp.hrmpAcceptOpenChannel.v9110.is(call)) {
        return hrmp.hrmpAcceptOpenChannel.v9110.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case hrmp.hrmpCloseChannel.name:
      if (hrmp.hrmpCloseChannel.v9110.is(call)) {
        return hrmp.hrmpCloseChannel.v9110.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case hrmp.forceCleanHrmp.name:
      if (hrmp.forceCleanHrmp.v9110.is(call)) {
        return hrmp.forceCleanHrmp.v9110.decode(call);
      } else if (hrmp.forceCleanHrmp.v9170.is(call)) {
        return hrmp.forceCleanHrmp.v9170.decode(call);
      } else if (hrmp.forceCleanHrmp.v1001002.is(call)) {
        return hrmp.forceCleanHrmp.v1001002.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case hrmp.forceProcessHrmpOpen.name:
      if (hrmp.forceProcessHrmpOpen.v9110.is(call)) {
        return hrmp.forceProcessHrmpOpen.v9110.decode(call);
      } else if (hrmp.forceProcessHrmpOpen.v9170.is(call)) {
        return hrmp.forceProcessHrmpOpen.v9170.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case hrmp.forceProcessHrmpClose.name:
      if (hrmp.forceProcessHrmpClose.v9110.is(call)) {
        return hrmp.forceProcessHrmpClose.v9110.decode(call);
      } else if (hrmp.forceProcessHrmpClose.v9170.is(call)) {
        return hrmp.forceProcessHrmpClose.v9170.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case hrmp.hrmpCancelOpenRequest.name:
      if (hrmp.hrmpCancelOpenRequest.v9110.is(call)) {
        return hrmp.hrmpCancelOpenRequest.v9110.decode(call);
      } else if (hrmp.hrmpCancelOpenRequest.v9170.is(call)) {
        return hrmp.hrmpCancelOpenRequest.v9170.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case hrmp.forceOpenHrmpChannel.name:
      if (hrmp.forceOpenHrmpChannel.v9340.is(call)) {
        return hrmp.forceOpenHrmpChannel.v9340.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case hrmp.establishSystemChannel.name:
      if (hrmp.establishSystemChannel.v1001002.is(call)) {
        return hrmp.establishSystemChannel.v1001002.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case hrmp.pokeChannelDeposits.name:
      if (hrmp.pokeChannelDeposits.v1001002.is(call)) {
        return hrmp.pokeChannelDeposits.v1001002.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    case hrmp.establishChannelWithSystem.name:
      if (hrmp.establishChannelWithSystem.v1002005.is(call)) {
        return hrmp.establishChannelWithSystem.v1002005.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
