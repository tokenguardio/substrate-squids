import { processor } from "./processor";
import {
  EventNorm,
  CallNorm,
  Block,
  SubstrateTransaction,
} from "./interfaces/models";
import {
  createCallNorm,
  createEventNorm,
  createBlock,
} from "./utils/factories";
import {
  eventNormalizationHandlers,
  callNormalizationHandlers,
} from "./mappings";
import { db } from "./db";
import { handleSubstrateTransaction } from "./processing/substrate-transaction";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

processor.run(db, async (ctx) => {
  const events: EventNorm[] = [];
  const calls: CallNorm[] = [];
  const blocks: Block[] = [];
  const substrateTransactions: SubstrateTransaction[] = [];

  for (let block of ctx.blocks) {
    blocks.push(createBlock(block.header));
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
      }
    }
    for (const call of block.calls) {
      const pallet = call.name.split(".")[0];
      if (callNormalizationHandlers[pallet]) {
        const args = callNormalizationHandlers[pallet](call);
        const callNorm = createCallNorm(block.header, call, args);
        calls.push(callNorm);
      }
    }
    for (const extrinsic of block.extrinsics) {
      if (extrinsic?.signature && extrinsic?.fee) {
        handleSubstrateTransaction(
          extrinsic,
          substrateTransactions,
          block.header
        );
      }
    }
  }

  await ctx.store.Block.writeMany(blocks);
  await ctx.store.SubstrateTransaction.writeMany(substrateTransactions);
  await ctx.store.EventNorm.writeMany(events);
  await ctx.store.CallNorm.writeMany(calls);
});
