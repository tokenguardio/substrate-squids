import { assertNotNull } from "@subsquid/util-internal";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Interface as EvmAbi } from "ethers";
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
const abiMap = new Map<string, EvmAbi>();

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
        const evmAbi = new EvmAbi(abiEntry.abi as string);

        abiMap.set(abiEntry.address.toLowerCase(), evmAbi);
      }

      abiInit = true;
    }

    const dappActivities: DappActivity[] = [];

    for (const block of ctx.blocks) {
      for (const log of block.logs) {
        if (abiMap.has(log.address)) {
          try {
            const contractAbi = abiMap.get(log.address)!;
            let contractEvent = contractAbi.parseLog({
              data: log.data,
              topics: log.topics,
            });
            if (contractEvent) {
              const dappActivityEvent = createDappActivityEvent(
                block.header,
                log,
                contractEvent,
                dappId
              );
              dappActivities.push(dappActivityEvent);
            }
          } catch (err) {
            console.error(err);
          }
        }
      }
      for (const txn of block.transactions) {
        if (txn.to !== undefined && abiMap.has(txn.to)) {
          try {
            const contractAbi = abiMap.get(txn.to)!;
            let contractTx = contractAbi.parseTransaction({
              data: txn.input,
              value: txn.value,
            });
            if (contractTx) {
              const dappActivityCall = createDappActivityCall(
                block.header,
                txn,
                contractTx,
                dappId
              );
              dappActivities.push(dappActivityCall);
            }
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    await ctx.store.save(dappActivities);
  }
);
