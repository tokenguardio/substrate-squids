import { SubstrateBatchProcessor } from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm } from "./model";
import {
  normalizeBalancesEventsArgs,
  normalizeSystemEventsArgs,
} from "./mappings";

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
  .setTypesBundle(`${process.env.TYPES_BUNDLE_FILE}`);

processor.run(new TypeormDatabase(), async (ctx) => {
  let events: EventNorm[] = [];
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      // Check if the item is an event and if its name starts with one of the prefixes
      if (
        item.kind === "event" &&
        (item.event.name.startsWith("Balances.") ||
          item.event.name.startsWith("System.")) &&
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
          case item.event.name.startsWith("System."):
            args = normalizeSystemEventsArgs(ctx, item.event);
            break;
        }

        // Create a new event object and push it to the events array
        const event = new EventNorm({
          id: item.event.id,
          blockHash: block.header.hash,
          timestamp: new Date(block.header.timestamp),
          name: item.event.name,
          args,
          extrinsicSuccess: item.event.extrinsic?.success,
        });
        events.push(event);
      }
    }
  }
  await ctx.store.save(events);
});
