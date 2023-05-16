import {
  SubstrateBatchProcessor,
  SubstrateBlock,
} from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm, CallNorm, AddressMapping } from "./model";
import {
  normalizeBalancesEventsArgs,
  normalizeStakingEventsArgs,
  normalizeSystemEventsArgs,
  normalizeContractsEventsArgs,
  normalizeNominationPoolsEventsArgs,
  normalizeNominationPoolsCallsArgs,
  normalizeContractsCallsArgs,
  mapAddress,
} from "./mappings";
import { MappedAddress } from "./interfaces/mappings/specific";
import { removeDuplicates } from "./utils/utils";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: `${process.env.ARCHIVE_GATEWAY_HOST}:${process.env.ARCHIVE_GATEWAY_PORT}/graphql`,
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
  })
  .setTypesBundle(`${process.env.TYPES_BUNDLE_FILE}`);

processor.run(new TypeormDatabase(), async (ctx) => {
  const events: EventNorm[] = [];
  const calls: CallNorm[] = [];
  const addressMappings: AddressMapping[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      // Check if the item is an event and if its name starts with one of the prefixes
      if (
        item.kind === "event" &&
        (item.event.name.startsWith("Balances.") ||
          item.event.name.startsWith("Staking.") ||
          item.event.name.startsWith("System.") ||
          item.event.name.startsWith("Contracts.") ||
          item.event.name.startsWith("NominationPools.")) &&
        !["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
          item.event.name
        )
      ) {
        // Normalize the event arguments based on the prefix
        let args;
        switch (true) {
          case item.event.name.startsWith("Balances."):
            args = normalizeBalancesEventsArgs(ctx, item.event);
            break;
          case item.event.name.startsWith("Staking."):
            args = normalizeStakingEventsArgs(ctx, item.event);
            break;
          case item.event.name.startsWith("System."):
            args = normalizeSystemEventsArgs(ctx, item.event);
            break;
          case item.event.name.startsWith("Contracts."):
            args = normalizeContractsEventsArgs(ctx, item.event);
            break;
          case item.event.name.startsWith("NominationPools."):
            args = normalizeNominationPoolsEventsArgs(ctx, item.event);
            break;
        }

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.kind === "event") {
        const prefix = item.event.name.split(".")[0] + ".";
        if (
          eventHandlers[prefix] &&
          !["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
            item.event.name
          )
        ) {
          let args = eventHandlers[prefix](ctx, item.event);
          const event = createEventNorm(block.header, item.event, args);
          events.push(event);
        }
        if ((item.event.name as string) === "System.NewAccount") {
          const mappedAddress = mapAddress(ctx, item.event);
          const addressMapping = createAddressMapping(mappedAddress);
          addressMappings.push(addressMapping);
        }
      } else if (item.kind === "call") {
        const prefix = item.call.name.split(".")[0] + ".";
        if (callHandlers[prefix]) {
          let args = callHandlers[prefix](ctx, item.call);
          const call = createCallNorm(block.header, item.call, args);
          calls.push(call);
        }
      }
    }
  }
  await ctx.store.save(events);
  await ctx.store.save(calls);
  await ctx.store.save(removeDuplicates(addressMappings, "id"));
});

function createEventNorm(block: SubstrateBlock, event: any, args: any) {
  return new EventNorm({
    id: event.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    name: event.name,
    args,
    extrinsicSuccess: event.extrinsic?.success,
  });
}

function createCallNorm(block: SubstrateBlock, call: any, args: any) {
  return new CallNorm({
    id: call.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    name: call.name,
    args,
    success: call.success,
    origin: call.origin,
  });
}

function createAddressMapping(mappedAddress: MappedAddress) {
  return new AddressMapping({
    id: mappedAddress.hex,
    ss58: mappedAddress.ss58,
  });
}
