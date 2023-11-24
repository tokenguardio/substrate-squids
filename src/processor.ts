import { SubstrateBatchProcessor } from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { lookupArchive } from "@subsquid/archive-registry";
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
} from "./utils/dbEntityCreators";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive:
      process.env.GATEWAY_URL ??
      lookupArchive("moonbeam", { type: "Substrate" }),
  })
  .addEvent("*", {
    data: {
      event: true,
    },
  })
  .addCall("*", {
    data: {
      call: true,
      extrinsic: {
        success: true,
      },
    },
  });

processor.run(
  new TypeormDatabase({ stateSchema: "substrate_processor" }),
  async (ctx) => {
    const events: EventNorm[] = [];
    const calls: CallNorm[] = [];
    const addressMappings: Map<string, AddressMapping> = new Map();

    for (const block of ctx.blocks) {
      for (const item of block.items) {
        const pallet = item.name.split(".")[0];
        if (item.kind === "event") {
          if (
            eventNormalizationHandlers[pallet] &&
            !["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
              item.event.name
            )
          ) {
            const args = eventNormalizationHandlers[pallet](ctx, item.event);
            const event = createEventNorm(block.header, item.event, args);
            events.push(event);
            addAddressesToMap(
              item.event.name,
              args,
              eventsAddressArgs,
              addressMappings
            );
          }
        } else if (item.kind === "call") {
          if (callNormalizationHandlers[pallet]) {
            const args = callNormalizationHandlers[pallet](ctx, item.call);
            const call = createCallNorm(block.header, item.call, args);
            calls.push(call);
            addAddressesToMap(
              item.call.name,
              args,
              callsAddressArgs,
              addressMappings
            );
          }
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
