import { evmAddressToMixedCase } from "../../utils/misc";
import { eventsAddressArgs } from "./eventsAddressArgs";
import { callsAddressArgs } from "./callsAddressArgs";
import { Event as _Event, Call as _Call } from "./../../processor";

function formatAddresses(normalizedArgs: any, addressFields: string[]) {
  if (!normalizedArgs) {
    throw new Error("Normalized args are null - unable to reformat address");
  }
  addressFields.forEach((field) => {
    if (field in normalizedArgs) {
      normalizedArgs[field] = evmAddressToMixedCase(normalizedArgs[field]);
    } else {
      throw new Error(
        `Field ${field} does not exist on normalized args - unable to reformat address`
      );
    }
  });
  return normalizedArgs;
}

export function wrapEventNormalizationWithFormatting<T>(
  normalizer: (event: _Event) => T
) {
  return (event: _Event): T => {
    const normalizedData: T = normalizer(event);
    const addressFields = eventsAddressArgs[event.name];
    if (addressFields) {
      return formatAddresses(normalizedData, addressFields);
    }
    return normalizedData;
  };
}

export function wrapCallNormalizationWithFormatting<T>(
  normalizer: (call: _Call) => T
) {
  return (call: _Call): T => {
    const normalizedData: T = normalizer(call);
    const addressFields = callsAddressArgs[call.name];
    if (addressFields) {
      return formatAddresses(normalizedData, addressFields);
    }
    return normalizedData;
  };
}
