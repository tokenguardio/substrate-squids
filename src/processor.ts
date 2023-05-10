import { SubstrateBatchProcessor } from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm, CallNorm, AddressMapping } from "./model";
import {
  normalizeBalancesEventsArgs,
  normalizeSystemEventsArgs,
  normalizeContractsEventsArgs,
  normalizeEVMEventsArgs,
  normalizeEthereumEventsArgs,
  normalizeEVMCallsArgs,
  normalizeEthereumCallsArgs,
  normalizeContractsCallsArgs,
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

const eventHandlers: { [key: string]: any } = {
  "Balances.": normalizeBalancesEventsArgs,
  "System.": normalizeSystemEventsArgs,
  "Contracts.": normalizeContractsEventsArgs,
  "EVM.": normalizeEVMEventsArgs,
  "Ethereum.": normalizeEthereumEventsArgs,
};

const callHandlers: { [key: string]: any } = {
  "Contracts.": normalizeContractsCallsArgs,
  "EVM.": normalizeEVMCallsArgs,
  "Ethereum.": normalizeEthereumCallsArgs,
};

processor.run(new TypeormDatabase(), async (ctx) => {
  const events: EventNorm[] = [];
  const addressMappings: AddressMapping[] = [];
  const calls: CallNorm[] = [];

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.kind === "event") {
        if ((item.event.name as string) === "System.NewAccount") {
          const mappedAccount = mapAccount(ctx, item.event);
          const addressMapping = new AddressMapping({
            id: mappedAccount.account_hex,
            ss58: mappedAccount.account_ss58,
          });
          addressMappings.push(addressMapping);
        }

        const prefix = item.event.name.split(".")[0] + ".";
        if (
          eventHandlers[prefix] &&
          !["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
            item.event.name
          )
        ) {
          let args = eventHandlers[prefix](ctx, item.event);

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
      } else if (item.kind === "call") {
        const prefix = item.call.name.split(".")[0] + ".";
        if (callHandlers[prefix]) {
          let args = callHandlers[prefix](ctx, item.call);

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
  }

  await ctx.store.save(events);
  await ctx.store.save(calls);
  await ctx.store.save(removeDuplicates(addressMappings, "id"));
});
