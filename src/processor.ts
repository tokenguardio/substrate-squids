import {
  SubstrateBatchProcessor,
  SubstrateBlock,
} from "@subsquid/substrate-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
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
import * as ss58 from "@subsquid/ss58";
import { decodeHex } from "@subsquid/util-internal-hex";
import { nullifyNonexistentCalls } from "./utils/utils";

// Avoid type errors when serializing BigInts
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

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

processor.run(new TypeormDatabase(), async (ctx) => {
  const events: EventNorm[] = [];
  const calls: CallNorm[] = [];
  const substrateTransactions: SubstrateTransaction[] = [];
  const addressMappings: Map<string, AddressMapping> = new Map();

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      const pallet = item.name.split(".")[0];
      if (item.kind === "event") {
        if (
          eventNormalizationHandlers[pallet] &&
          !["System.ExtrinsicSuccess", "System.ExtrinsicFailed"].includes(
            item.event.name
          )
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
        if (item.extrinsic.fee && !item.call.parent) {
          handleSubstrateTransaction(
            item.extrinsic,
            substrateTransactions,
            ctx,
            block.header,
            addressMappings
          );
        }
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
    ss58: ss58.codec("astar").encode(decodeHex(address)),
  };
  const addressMapping = createAddressMapping(mappedAddress);
  addressMappings.set(mappedAddress.hex, addressMapping);
}

function handleSubstrateTransaction(
  extrinsic: any,
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
