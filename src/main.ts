import assert from "assert";
import * as ss58 from "@subsquid/ss58";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Abi as SubsquidAbi } from "@subsquid/ink-abi";
import { convertUint8ArrayPropsToHex } from "./utils/utils";
import { processor, DAPP_NAME, SS58_NETWORK } from "./processor";
import { DappActivity, SubstrateExtrinsic, WasmContractAbi } from "./model";
import {
  createDappActivityCall,
  createDappActivityEvent,
  createSubstrateExtrinsic,
} from "./utils/factories";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

let abiInit = false;
const abiMap = new Map<string, SubsquidAbi>();

processor.run(new TypeormDatabase(), async (ctx) => {
  if (!abiInit) {
    const abis = await ctx.store.findBy(WasmContractAbi, {
      dappName: DAPP_NAME,
    });

    if (!abis || abis.length === 0) {
      throw new Error("Could not fetch abis");
    }

    for (const abi of abis) {
      const subsquidAbi = new SubsquidAbi(abi.abi);
      abiMap.set(ss58.codec(SS58_NETWORK).decode(abi.id), subsquidAbi);
    }

    abiInit = true;
  }

  const dappActivities: DappActivity[] = [];
  const substrateExtrinsics = new Map<string, SubstrateExtrinsic>();

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
            DAPP_NAME
          );
          dappActivities.push(dappActivityEvent);
        } catch (err) {
          console.error(err);
        }

        const substrateExtrinsic = createSubstrateExtrinsic(
          event,
          block.header
        );
        substrateExtrinsics.set(event.extrinsic.id, substrateExtrinsic);
      }
    }
    for (const call of block.calls) {
      if (call.name === "Contracts.call" && abiMap.has(call.args.dest.value)) {
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
            DAPP_NAME
          );
          dappActivities.push(dappActivityCall);
        } catch (err) {
          console.error(err);
        }

        const substrateExtrinsic = createSubstrateExtrinsic(call, block.header);
        substrateExtrinsics.set(call.extrinsic.id, substrateExtrinsic);
      }
    }
  }

  await ctx.store.save(Array.from(substrateExtrinsics.values()));
  await ctx.store.save(dappActivities);
});
