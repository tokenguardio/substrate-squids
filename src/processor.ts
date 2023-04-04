import { SubstrateBatchProcessor } from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm, AddressMapping } from "./model";
import {
  normalizeSystemEventsArgs,
  normalizeBalancesEventsArgs,
  mapAccount,
} from "./mappings";
import { removeDuplicates } from "./utils/utils";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: `https://efinity.archive.subsquid.io/graphql`,
  })
  .addEvent("*", {
    data: {
      event: true,
    },
  });

processor.run(new TypeormDatabase(), async (ctx) => {
  const events: EventNorm[] = [];
  const addressMappings: AddressMapping[] = [];
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

        if ((item.event.name as string) === "System.NewAccount") {
          const mappedAccount = mapAccount(ctx, item.event);
          const addressMapping = new AddressMapping({
            id: mappedAccount.account_hex,
            ss58: mappedAccount.account_ss58,
          });
          addressMappings.push(addressMapping);
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
  await ctx.store.save(removeDuplicates(addressMappings, "id"));
});
