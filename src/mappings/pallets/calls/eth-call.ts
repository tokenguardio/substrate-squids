import { ethCall } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeEthCallCallsArgs(call: Call): any {
  switch (call.name) {
    case ethCall.call.name:
      if (ethCall.call.v1.is(call)) {
        return ethCall.call.v1.decode(call);
      } else if (ethCall.call.v3.is(call)) {
        return ethCall.call.v3.decode(call);
      } else if (ethCall.call.v4.is(call)) {
        return ethCall.call.v4.decode(call);
      } else if (ethCall.call.v9.is(call)) {
        return ethCall.call.v9.decode(call);
      } else if (ethCall.call.v12.is(call)) {
        return ethCall.call.v12.decode(call);
      } else if (ethCall.call.v13.is(call)) {
        return ethCall.call.v13.decode(call);
      } else if (ethCall.call.v15.is(call)) {
        return ethCall.call.v15.decode(call);
      } else if (ethCall.call.v16.is(call)) {
        return ethCall.call.v16.decode(call);
      } else if (ethCall.call.v17.is(call)) {
        return ethCall.call.v17.decode(call);
      } else if (ethCall.call.v23.is(call)) {
        return ethCall.call.v23.decode(call);
      } else if (ethCall.call.v30.is(call)) {
        return ethCall.call.v30.decode(call);
      } else if (ethCall.call.v33.is(call)) {
        return ethCall.call.v33.decode(call);
      } else if (ethCall.call.v43.is(call)) {
        return ethCall.call.v43.decode(call);
      } else if (ethCall.call.v49.is(call)) {
        return ethCall.call.v49.decode(call);
      } else if (ethCall.call.v52.is(call)) {
        return ethCall.call.v52.decode(call);
      } else if (ethCall.call.v55.is(call)) {
        return ethCall.call.v55.decode(call);
      } else if (ethCall.call.v61.is(call)) {
        return ethCall.call.v61.decode(call);
      } else if (ethCall.call.v64.is(call)) {
        return ethCall.call.v64.decode(call);
      } else if (ethCall.call.v66.is(call)) {
        return ethCall.call.v66.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
