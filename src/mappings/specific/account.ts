import { SystemNewAccountEvent } from "../../types/events";
import { ChainContext, Event } from "../../types/support";
import { bufferToHex } from "../../utils/utils";
import { UnknownEventVersionError } from "../../utils/errors";
import { MappedAddress } from "../../interfaces/mappings/specific";
import * as ss58 from "@subsquid/ss58";

export function mapAddress(ctx: ChainContext, event: Event): MappedAddress {
  const e = new SystemNewAccountEvent(ctx, event);
  if (e.isV0) {
    let account = e.asV0;
    return {
      hex: bufferToHex(account),
      ss58: ss58.codec("astar").encode(account),
    };
  } else if (e.isV9170) {
    let { account } = e.asV9170;
    return {
      hex: bufferToHex(account),
      ss58: ss58.codec("astar").encode(account),
    };
  } else {
    throw new UnknownEventVersionError(event.name);
  }
}
