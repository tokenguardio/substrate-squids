import axios from "axios";
import https from "https";
import axiosRetry from "axios-retry";
import {
  SubstrateBatchProcessor,
  SubstrateBlock,
  SubstrateExtrinsic,
} from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import * as ss58 from "@subsquid/ss58";
import { decodeHex } from "@subsquid/util-internal-hex";
import {
  EventNorm,
  CallNorm,
  AddressMapping,
  SubstrateTransaction,
  SubstrateLabel,
} from "./model";
import {
  eventNormalizationHandlers,
  callNormalizationHandlers,
  eventsAddressArgs,
  callsAddressArgs,
  mapAddresses,
} from "./mappings";
import {
  createSubstrateTransaction,
  createEventNorm,
  createCallNorm,
  createAddressMapping,
} from "./utils/dbEntityCreators";
import { AddressArgs } from "./interfaces/mappings/specific";
import { ExtrinsicResponse, Extrinsic } from "./interfaces/sidecar-extrinsic";
import { nullifyNonexistentCalls } from "./utils/utils";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const client = axios.create({
  baseURL: process.env.SIDECAR_URL || "http://127.0.0.1:8080",
  headers: { "Content-Type": "application/json" },
  httpsAgent: new https.Agent({ keepAlive: true }),
});

axiosRetry(client, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
});

client.interceptors.response.use((response) => {
  if (response.config.url?.startsWith("/blocks/")) {
    const data = response.data;
    const transformedData: ExtrinsicResponse = {
      extrinsics: data.extrinsics.map((e: any) => ({
        method: e.method,
        signature: e.signature,
        tip: e.tip,
        hash: e.hash,
        info: e.info,
        success: e.success,
        paysFee: e.paysFee,
      })),
    };
    return transformedData;
  }
  return response.data;
});

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive:
      process.env.GATEWAY_URL ??
      "https://aleph-zero.archive.subsquid.io/graphql",
  })
  .addEvent("*", {
    data: {
      event: true,
    },
  })
  .addCall("*", {
    data: {
      call: true,
      extrinsic: true,
    },
  })
  .setTypesBundle(process.env.TYPES_BUNDLE_FILE ?? "typesBundle.json");
// .setBlockRange({ from: 5 });

processor.run(new TypeormDatabase(), async (ctx) => {
  const events: EventNorm[] = [];
  const calls: CallNorm[] = [];
  const substrateTransactions: SubstrateTransaction[] = [];
  const addressMappings: Map<string, AddressMapping> = new Map();
  let fetchedBlockHash: string = "";
  let fetchedExtrinsics: Extrinsic[] = [];

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      const pallet = item.name.split(".")[0];
      if (item.kind === "event") {
        if (block.header.height >= 0 && block.header.height < 14505447) {
          if (
            ["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
              item.event.name
            )
          ) {
            const args = eventNormalizationHandlers[pallet](ctx, item.event);
            if (
              item.event.extrinsic?.signature &&
              args.dispatchInfo.paysFee.__kind === "Yes" &&
              args.dispatchInfo.class.__kind === "Normal"
            ) {
              if (fetchedBlockHash !== block.header.hash) {
                const response: ExtrinsicResponse = await client.get(
                  `/blocks/${block.header.hash}`
                );
                fetchedExtrinsics = response.extrinsics;
                fetchedBlockHash = block.header.hash;
              }
              let currentExtrinsic = fetchedExtrinsics.find(
                (extrinsic) => extrinsic.hash === item.event.extrinsic?.hash
              );

              if (!currentExtrinsic) {
                throw new Error(
                  `Extrinsic ${item.event.extrinsic.indexInBlock} from block ${block.header.height} not found in sidecar response`
                );
              }

              // There are cases when sidecar is unable to fetch information
              if (!currentExtrinsic.info.partialFee) {
                console.log(
                  `Incomplete data on sidecar side for block ${block.header.height}, moving on...`
                );
                continue;
              }

              item.event.extrinsic.fee = BigInt(
                currentExtrinsic.info.partialFee
              );
              item.event.extrinsic.tip = currentExtrinsic.tip
                ? BigInt(currentExtrinsic.tip)
                : undefined;

              handleSubstrateTransaction(
                item.event.extrinsic,
                substrateTransactions,
                ctx,
                block.header,
                addressMappings
              );
            }
          }
        } else if (
          block.header.height >= 14505447 &&
          block.header.height < 33235255
        ) {
          if (
            ["Treasury.Deposit"].includes(item.event.name) &&
            item.event.extrinsic?.signature
          ) {
            item.event.extrinsic.fee = BigInt(item.event.args);

            handleSubstrateTransaction(
              item.event.extrinsic,
              substrateTransactions,
              ctx,
              block.header,
              addressMappings
            );
          }
        } else if (block.header.height >= 33235255) {
          if (
            ["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
              item.event.name
            )
          ) {
            const args = eventNormalizationHandlers[pallet](ctx, item.event);
            if (
              item.event.extrinsic?.signature &&
              args.dispatchInfo.paysFee.__kind === "Yes" &&
              args.dispatchInfo.class.__kind === "Normal"
            ) {
              handleSubstrateTransaction(
                item.event.extrinsic,
                substrateTransactions,
                ctx,
                block.header,
                addressMappings
              );
            }
          }
        }
        if (
          !["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
            item.event.name
          ) &&
          eventNormalizationHandlers[pallet]
        ) {
          const args = eventNormalizationHandlers[pallet](ctx, item.event);
          const event = createEventNorm(block.header, item.event, args);
          events.push(event);
          addAddressesToMap(
            item.event.name,
            args,
            eventsAddressArgs,
            addressMappings
          );
        }
      } else if (item.kind === "call") {
        if (callNormalizationHandlers[pallet]) {
          const args = callNormalizationHandlers[pallet](ctx, item.call);
          const call = createCallNorm(block.header, item.call, args);
          calls.push(call);
          addAddressesToMap(
            item.call.name,
            args,
            callsAddressArgs,
            addressMappings
          );
        }
      }
    }
  }

  await ctx.store.save(substrateTransactions);

  nullifyNonexistentCalls(events, calls);

  await ctx.store.save(calls);
  await ctx.store.save(events);
  await ctx.store.save(Array.from(addressMappings.values()));
});

export function addAddressesToMap(
  itemName: string,
  args: any,
  addressArgs: AddressArgs,
  addressMappings: Map<string, AddressMapping>
): void {
  const mappedAddresses = mapAddresses(itemName, args, addressArgs);
  mappedAddresses.forEach((mappedAddress) => {
    const addressMapping = createAddressMapping(mappedAddress);
    addressMappings.set(mappedAddress.hex, addressMapping);
  });
}

function addSingleToAddressMapping(
  address: string,
  addressMappings: Map<string, AddressMapping>
) {
  const mappedAddress = {
    hex: address,
    ss58: ss58.codec("substrate").encode(decodeHex(address)),
  };
  const addressMapping = createAddressMapping(mappedAddress);
  addressMappings.set(mappedAddress.hex, addressMapping);
}

function handleSubstrateTransaction(
  extrinsic: SubstrateExtrinsic,
  substrateTransactions: SubstrateTransaction[],
  ctx: any,
  block: SubstrateBlock,
  addressMappings: Map<string, AddressMapping>
) {
  const call = extrinsic.call;
  let label;
  let to;
  let normalizedCallArgs;
  switch (call.name) {
    case "Contracts.call":
    case "Contracts.call_old_weight":
      normalizedCallArgs = callNormalizationHandlers["Contracts"](ctx, call);
      if (normalizedCallArgs.dest?.__kind === "Id") {
        to = normalizedCallArgs.dest.value;
        addSingleToAddressMapping(to, addressMappings);
      }
      label = SubstrateLabel.contract_call;
      break;
    case "Contracts.instantiate":
    case "Contracts.instantiate_old_weight":
    case "Contracts.instantiate_with_code":
    case "Contracts.instantiate_with_code_old_weight":
      to = null;
      label = SubstrateLabel.contract_deploy;
      break;
    case "Balances.transfer":
    case "Balances.transfer_all":
    case "Balances.transfer_keep_alive":
      normalizedCallArgs = callNormalizationHandlers["Balances"](ctx, call);
      if (normalizedCallArgs.dest?.__kind === "Id") {
        to = normalizedCallArgs.dest.value;
        addSingleToAddressMapping(to, addressMappings);
      }
      label = SubstrateLabel.other;
      break;
    default:
      to = null;
      label = SubstrateLabel.other;
      break;
  }

  let from = null;
  if (extrinsic.signature?.address?.__kind === "Id") {
    from = extrinsic.signature?.address?.value;
  }
  addSingleToAddressMapping(from, addressMappings);

  const substrateTransaction = createSubstrateTransaction(
    call,
    extrinsic,
    block,
    label,
    from,
    to
  );
  substrateTransactions.push(substrateTransaction);
}
