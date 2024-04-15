import { baseFee } from "../../../types/events";
import { Event } from "../../../processor";
import {
  UnknownEventVersionError,
  UnknownEventError,
} from "../../../utils/errors";

export function normalizeBaseFeeEventsArgs(event: Event): any {
  switch (event.name) {
    case baseFee.baseFeeOverflow.name:
      if (baseFee.baseFeeOverflow.v9.is(event)) {
        return baseFee.baseFeeOverflow.v9.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case baseFee.isActive.name:
      if (baseFee.isActive.v9.is(event)) {
        return { isActive: baseFee.isActive.v9.decode(event) };
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case baseFee.newBaseFeePerGas.name:
      if (baseFee.newBaseFeePerGas.v9.is(event)) {
        return { fee: baseFee.newBaseFeePerGas.v9.decode(event) };
      } else if (baseFee.newBaseFeePerGas.v33.is(event)) {
        return baseFee.newBaseFeePerGas.v33.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    case baseFee.newElasticity.name:
      if (baseFee.newElasticity.v9.is(event)) {
        return { elasticity: baseFee.newElasticity.v9.decode(event) };
      } else if (baseFee.newElasticity.v33.is(event)) {
        return baseFee.newElasticity.v33.decode(event);
      } else {
        throw new UnknownEventVersionError(event.name);
      }

    default:
      throw new UnknownEventError(event.name);
  }
}
