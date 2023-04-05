import { SystemNewAccountEvent } from "../../types/events";
import { ChainContext, Event } from "../../types/support";
import { bufferToHex } from "../../utils/utils";
import { UnknownEventVersionError } from "../../utils/errors";
import * as ss58 from "@subsquid/ss58";

export function mapAccount(ctx: ChainContext, event: Event) {
  const e = new SystemNewAccountEvent(ctx, event);
  if (e.isV0) {
    let account = e.asV0;
    return {
      account_hex: bufferToHex(account),
      account_ss58: ss58.codec("polkadot").encode(account),
    };
  } else if (e.isV9170) {
    let { account } = e.asV9170;
    return {
      account_hex: bufferToHex(account),
      account_ss58: ss58.codec("polkadot").encode(account),
    };
  } else {
    throw new UnknownEventVersionError(event.name);
  }
}
