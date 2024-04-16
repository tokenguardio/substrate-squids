import { processor } from "./processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm, CallNorm } from "./model";
import {
  eventNormalizationHandlers,
  callNormalizationHandlers,
} from "./mappings";
import { createCallNorm, createEventNorm } from "./utils/factories";

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
    await ctx.store.save(events);
    await ctx.store.save(calls);
  }
);
