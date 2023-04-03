import { SystemNewAccountEvent } from "../../types/events";
import { ChainContext, Event } from "../../types/support";
import { bufferToHex } from "../../utils/utils";
import { UnknownVersionError } from "../../utils/errors";
import * as ss58 from "@subsquid/ss58";

export function mapAccount(ctx: ChainContext, event: Event) {
  const e = new SystemNewAccountEvent(ctx, event);
  if (e.isV3) {
    let account = e.asV3;
    return {
      account_hex: bufferToHex(account),
      account_ss58: ss58.codec("substrate").encode(account),
    };
  } else if (e.isV39) {
    let { account } = e.asV39;
    return {
      account_hex: bufferToHex(account),
      account_ss58: ss58.codec("substrate").encode(account),
    };
  } else {
    throw new UnknownVersionError(event.name);
  }
}
