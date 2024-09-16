import { assertNotNull } from "@subsquid/util-internal";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { processor } from "./processor";
import { DappActivity, Dapps } from "./model";
import {
  eventNormalizationHandlers,
  callNormalizationHandlers,
} from "./mappings";
import {
  createDappActivityCall,
  createDappActivityEvent,
} from "./utils/factories";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const dappId = assertNotNull(process.env.DAPP_ID);
const stateSchema = `${dappId}_state`;

processor.run(
  new TypeormDatabase({ stateSchema: stateSchema }),
  async (ctx) => {
    const dappActivities: DappActivity[] = [];

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
          const dappActivityEvent = createDappActivityEvent(
            block.header,
            event,
            args,
            dappId
          );
          dappActivities.push(dappActivityEvent);
        }
      }
      for (const call of block.calls) {
        const pallet = call.name.split(".")[0];
        if (callNormalizationHandlers[pallet]) {
          const args = callNormalizationHandlers[pallet](call);
          const dappActivityCall = createDappActivityCall(
            block.header,
            call,
            args,
            dappId
          );
          dappActivities.push(dappActivityCall);
        }
      }
    }

    await ctx.store.save(dappActivities);
  }
);
