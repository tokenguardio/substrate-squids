import { processor } from "./processor";
import { EventNorm, CallNorm, Block } from "./interfaces/models";
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

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

processor.run(db, async (ctx) => {
  const events: EventNorm[] = [];
  const calls: CallNorm[] = [];
  const blocks: Block[] = [];

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
  }

  await ctx.store.Block.writeMany(blocks);
  await ctx.store.EventNorm.writeMany(events);
  await ctx.store.CallNorm.writeMany(calls);
});
