import { SubstrateBatchProcessor } from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm } from "./model";
import {
  normalizeBalancesEventArgs,
  normalizeStakingEventArgs,
  normalizeSystemEventArgs,
} from "./mappings";

//@ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: `http://${process.env.ARCHIVE_GATEWAY_HOST}:${process.env.ARCHIVE_GATEWAY_PORT}/graphql`,
  })
  .addEvent("*", {
    data: {
      event: true,
    },
  } as const);

processor.run(new TypeormDatabase(), async (ctx) => {
  let events: EventNorm[] = [];
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      // Check if the item is an event and if its name starts with one of the prefixes
      if (
        item.kind === "event" &&
        (item.event.name.startsWith("Balances.") ||
          item.event.name.startsWith("Staking.") ||
          item.event.name.startsWith("System."))
      ) {
        // Normalize the event arguments based on the prefix

        let args;
        switch (true) {
          case item.event.name.startsWith("Balances."):
            args = normalizeBalancesEventArgs(ctx, item.event);
            break;
          case item.event.name.startsWith("Staking."):
            args = normalizeStakingEventArgs(ctx, item.event);
            break;
          case item.event.name.startsWith("System."):
            args = normalizeSystemEventArgs(ctx, item.event);
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
