import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EventNorm, CallNorm, SubstrateTransaction } from "./model";
import {
  eventNormalizationHandlers,
  callNormalizationHandlers,
} from "./mappings";
import { createEventNorm, createCallNorm } from "./utils/factories";
import { nullifyNonexistentCalls } from "./utils/misc";
import { processor } from "./processor";
import { handleSubstrateTransaction } from "./processing/substrate-transaction";

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
    const substrateTransactions: SubstrateTransaction[] = [];

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

    await ctx.store.save(substrateTransactions);

    nullifyNonexistentCalls(events, calls);

    await ctx.store.save(calls);
    await ctx.store.save(events);
  }
);
