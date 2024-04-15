import { ethereum } from "../../../types/calls";
import { Call } from "../../../processor";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeEthereumCallsArgs(call: Call): any {
  switch (call.name) {
    case ethereum.transact.name:
      if (ethereum.transact.v1.is(call)) {
        const transact = ethereum.transact.v1.decode(call);
        return {
          transaction: { __kind: "Legacy", value: transact.transaction },
        };
      } else if (ethereum.transact.v9.is(call)) {
        return ethereum.transact.v9.decode(call);
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
