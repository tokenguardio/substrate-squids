import { SubstrateBatchProcessor } from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm, CallNorm, AddressMapping } from "./model";
import {
  normalizeBalancesEventsArgs,
  normalizeStakingEventsArgs,
  normalizeSystemEventsArgs,
  normalizeNominationPoolsEventsArgs,
  normalizeNominationPoolsCallsArgs,
  mapAccount,
} from "./mappings";
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
  });

processor.run(new TypeormDatabase(), async (ctx) => {
  const events: EventNorm[] = [];
  const calls: CallNorm[] = [];
  const addressMappings: AddressMapping[] = [];
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      // Check if the item is an event and if its name starts with one of the prefixes
      if (
        item.kind === "event" &&
        (item.event.name.startsWith("Balances.") ||
          item.event.name.startsWith("Staking.") ||
          item.event.name.startsWith("System.") ||
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
          case item.event.name.startsWith("NominationPools."):
            args = normalizeNominationPoolsEventsArgs(ctx, item.event);
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
      } else if (
        item.kind === "call" &&
        item.call.name.startsWith("NominationPools.")
      ) {
        // Normalize the call arguments based on the prefix
        let args;
        switch (true) {
          case item.call.name.startsWith("NominationPools."):
            args = normalizeNominationPoolsCallsArgs(ctx, item.call);
            break;
        }

        // Create a new call object and push it to the calls array
        const call = new CallNorm({
          id: item.call.id,
          blockHash: block.header.hash,
          timestamp: new Date(block.header.timestamp),
          name: item.call.name,
          args,
          success: item.call.success,
          origin: item.call.origin,
        });
        calls.push(call);
      }
    }
  }

  await ctx.store.save(calls);
  await ctx.store.save(events);
  await ctx.store.save(removeDuplicates(addressMappings, "id"));
});
