import { fromHexToSs58 } from "../../utils/misc";
import { eventsAddressArgs } from "./eventsAddressArgs";
import { callsAddressArgs } from "./callsAddressArgs";
import { Event, Call } from "./../../processor";

function formatAddresses(normalizedArgs: any, addressFields: string[]) {
  if (!normalizedArgs) {
    throw new Error("Normalized args are null - unable to reformat address");
  }
  addressFields.forEach((field) => {
    if (field in normalizedArgs) {
      normalizedArgs[field] = fromHexToSs58(normalizedArgs[field]);
    } else {
      throw new Error(
        `Field ${field} does not exist on normalized args - unable to reformat address`
      );
    }
  });
  return normalizedArgs;
}

export function wrapEventNormalizationWithFormatting<T>(
  normalizer: (event: Event) => T
) {
  return (event: Event): T => {
    const normalizedData: T = normalizer(event);
    const addressFields = eventsAddressArgs[event.name];
    if (addressFields) {
      return formatAddresses(normalizedData, addressFields);
    }
    return normalizedData;
  };
}

export function wrapCallNormalizationWithFormatting<T>(
  normalizer: (call: Call) => T
) {
  return (call: Call): T => {
    const normalizedData: T = normalizer(call);
    const addressFields = callsAddressArgs[call.name];
    if (addressFields) {
      return formatAddresses(normalizedData, addressFields);
    }
    return normalizedData;
  };
}
