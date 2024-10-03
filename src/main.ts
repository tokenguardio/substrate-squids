import { assertNotNull } from "@subsquid/util-internal";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Interface as EvmAbi } from "ethers";
import { processor } from "./processor";
import { DappActivity, Dapps } from "./model";
import {
  createDappActivityCallFromTrace,
  createDappActivityCallFromTx,
  createDappActivityEvent,
} from "./utils/factories";
import { getEnvBoolean } from "./utils/misc";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const tracesEnabled = getEnvBoolean(process.env.TRACES, false);
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
            let parsedEvent = contractAbi.parseLog({
              data: log.data,
              topics: log.topics,
            });
            const dappActivityEvent = createDappActivityEvent(
              block.header,
              log,
              parsedEvent,
              dappId
            );
            dappActivities.push(dappActivityEvent);
          } catch (err) {
            console.error(err);
          }
        }
      }
      if (tracesEnabled) {
        for (const trc of block.traces) {
          if (trc.type === "call") {
            if (trc.action.to !== undefined && abiMap.has(trc.action.to)) {
              try {
                const contractAbi = abiMap.get(trc.action.to)!;
                let parsedTx = contractAbi.parseTransaction({
                  data: trc.action.input,
                  value: trc.action.value,
                });

                const dappActivityCall = createDappActivityCallFromTrace(
                  block.header,
                  trc,
                  parsedTx,
                  dappId
                );
                dappActivities.push(dappActivityCall);
              } catch (err) {
                console.error(err);
              }
            }
          }
        }
      } else {
        for (const txn of block.transactions) {
          if (txn.to !== undefined && abiMap.has(txn.to)) {
            try {
              const contractAbi = abiMap.get(txn.to)!;
              let parsedTx = contractAbi.parseTransaction({
                data: txn.input,
                value: txn.value,
              });

              const dappActivityCall = createDappActivityCallFromTx(
                block.header,
                txn,
                parsedTx,
                dappId
              );
              dappActivities.push(dappActivityCall);
            } catch (err) {
              console.error(err);
            }
          }
        }
      }
    }
    await ctx.store.save(dappActivities);
  }
);
