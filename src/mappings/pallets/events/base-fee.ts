import {
  BaseFeeBaseFeeOverflowEvent,
  BaseFeeIsActiveEvent,
  BaseFeeNewBaseFeePerGasEvent,
  BaseFeeNewElasticityEvent,
} from "../../../types/events";
import { ChainContext, Event } from "../../../types/support";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeBaseFeeEventsArgs(ctx: ChainContext, event: Event) {
  let e;
  switch (event.name) {
    case "BaseFee.BaseFeeOverflow":
      e = new BaseFeeBaseFeeOverflowEvent(ctx, event);
      if (e.isV9) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "BaseFee.IsActive":
      e = new BaseFeeIsActiveEvent(ctx, event);
      if (e.isV9) {
        return {
          isActive: event.args,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "BaseFee.NewBaseFeePerGas":
      e = new BaseFeeNewBaseFeePerGasEvent(ctx, event);
      if (e.isV9) {
        return {
          fee: event.args,
        };
      } else if (e.isV33) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }
    case "BaseFee.NewElasticity":
      e = new BaseFeeNewElasticityEvent(ctx, event);
      if (e.isV9) {
        return {
          elasticity: event.args,
        };
      } else if (e.isV33) {
        return event.args;
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
