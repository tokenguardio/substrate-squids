import assert from "assert";
import { assertNotNull } from "@subsquid/util-internal";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Abi as SubsquidAbi } from "@subsquid/ink-abi";
import { convertUint8ArrayPropsToHex, fromSs58ToHex } from "./utils/misc";
import { processor } from "./processor";
import { DappActivity, Dapps } from "./model";
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

let abiInit = false;
const abiMap = new Map<string, SubsquidAbi>();

processor.run(
  new TypeormDatabase({ stateSchema: stateSchema }),
  async (ctx) => {
    if (!abiInit) {
      const dapp = await ctx.store.get(Dapps, dappId);

      if (!dapp || !dapp.abis) {
        throw new Error(`Could not fetch abis for ${dappId} dapp`);
      }

      ctx.log.info(`Fetched ${dapp.abis.length} abis for ${dappId} dapp`);

      for (const abiEntry of dapp.abis) {
        const subsquidAbi = new SubsquidAbi(abiEntry.abi);

        abiMap.set(fromSs58ToHex(abiEntry.address), subsquidAbi);
      }

      abiInit = true;
    }

    const dappActivities: DappActivity[] = [];

    for (const block of ctx.blocks) {
      for (const event of block.events) {
        if (
          event.name === "Contracts.ContractEmitted" &&
          abiMap.has(event.args.contract)
        ) {
          assert(
            event.extrinsic,
            `Event ${event} arrived without a parent extrinsic`
          );
          try {
            const contractAbi = abiMap.get(event.args.contract)!;
            let contractEvent = contractAbi.decodeEvent(event.args.data);
            contractEvent = convertUint8ArrayPropsToHex(contractEvent);
            const dappActivityEvent = createDappActivityEvent(
              block.header,
              event,
              contractEvent,
              dappId
            );
            dappActivities.push(dappActivityEvent);
          } catch (err) {
            console.error(err);
          }
        }
      }
      for (const call of block.calls) {
        if (
          call.name === "Contracts.call" &&
          abiMap.has(call.args.dest.value)
        ) {
          assert(
            call.extrinsic,
            `Call ${call} arrived without a parent extrinsic`
          );
          try {
            const contractAbi = abiMap.get(call.args.dest.value)!;
            let contractMessage = contractAbi.decodeMessage(call.args.data);
            contractMessage = convertUint8ArrayPropsToHex(contractMessage);
            const dappActivityCall = createDappActivityCall(
              block.header,
              call,
              contractMessage,
              dappId
            );
            dappActivities.push(dappActivityCall);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    await ctx.store.save(dappActivities);
  }
);
