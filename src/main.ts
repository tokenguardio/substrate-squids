import { processor } from "./processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm, CallNorm, AddressMapping } from "./model";
import {
  eventNormalizationHandlers,
  callNormalizationHandlers,
  eventsAddressArgs,
  callsAddressArgs,
  mapAddresses,
} from "./mappings";
import { AddressArgs } from "./interfaces/mappings/specific";
import {
  createAddressMapping,
  createCallNorm,
  createEventNorm,
} from "./utils/factories";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

processor.run(
  new TypeormDatabase({
    stateSchema: process.env.STATE_SCHEMA,
  }),
  async (ctx) => {
    const events: EventNorm[] = [];
    const calls: CallNorm[] = [];
    const addressMappings: Map<string, AddressMapping> = new Map();

    for (const block of ctx.blocks) {
      for (const event of block.events) {
        const pallet = event.name.split(".")[0];
        if (
          eventNormalizationHandlers[pallet] &&
          !["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
            event.name
          )
        ) {
          const args = eventNormalizationHandlers[pallet](event);
          const eventNorm = createEventNorm(block.header, event, args);
          events.push(eventNorm);
          addAddressesToMap(
            event.name,
            args,
            eventsAddressArgs,
            addressMappings
          );
        }
      }
      for (const call of block.calls) {
        const pallet = call.name.split(".")[0];
        if (callNormalizationHandlers[pallet]) {
          const args = callNormalizationHandlers[pallet](call);
          const callNorm = createCallNorm(block.header, call, args);
          calls.push(callNorm);
          addAddressesToMap(call.name, args, callsAddressArgs, addressMappings);
        }
      }
    }
    await ctx.store.save(events);
    await ctx.store.save(calls);
    await ctx.store.save(Array.from(addressMappings.values()));
  }
);

export function addAddressesToMap(
  itemName: string,
  args: any,
  addressArgs: AddressArgs,
  addressMappings: Map<string, AddressMapping>
): void {
  const mappedAddresses = mapAddresses(itemName, args, addressArgs);
  mappedAddresses.forEach((mappedAddress) => {
    const addressMapping = createAddressMapping(mappedAddress);
    addressMappings.set(mappedAddress.hex, addressMapping);
  });
}
