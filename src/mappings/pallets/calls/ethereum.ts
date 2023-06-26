import { EthereumTransactCall } from "../../../types/calls";
import { ChainContext, Call } from "../../../types/support";
import {
  UnknownCallVersionError,
  UnknownCallError,
} from "../../../utils/errors";

export function normalizeEthereumCallsArgs(ctx: ChainContext, call: Call) {
  let e;
  switch (call.name) {
    case "Ethereum.transact":
      e = new EthereumTransactCall(ctx, call);
      if (e.isV1) {
        return { transaction: { __kind: "Legacy", value: call.args.transaction } }
      } else if (e.isV9) {
        return call.args;
      } else {
        throw new UnknownCallVersionError(call.name);
      }

    default:
      throw new UnknownCallError(call.name);
  }
}
