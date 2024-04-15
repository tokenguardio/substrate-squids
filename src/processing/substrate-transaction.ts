import * as ss58 from "@subsquid/ss58";
import { decodeHex } from "@subsquid/util-internal-hex";
import {
  AddressMapping,
  SubstrateTransaction,
  SubstrateLabel,
} from "./../model";
import { callNormalizationHandlers } from "./../mappings";
import {
  createSubstrateTransaction,
  createAddressMapping,
} from "./../utils/factories";
import { Block, Extrinsic } from "./../processor";

export function handleSubstrateTransaction(
  extrinsic: Extrinsic,
  substrateTransactions: SubstrateTransaction[],
  block: Block,
  addressMappings: Map<string, AddressMapping>
) {
  const call = extrinsic.call;
  if (!call) {
    console.error(`Extrinsic without call: ${extrinsic.hash}`);
    throw new Error("Extrinsic without call");
  }
  let label;
  let to;
  let normalizedCallArgs;
  switch (call.name) {
    case "Contracts.call":
    case "Contracts.call_old_weight":
      normalizedCallArgs = callNormalizationHandlers["Contracts"](call);
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
      normalizedCallArgs = callNormalizationHandlers["Balances"](call);
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
  if ((extrinsic.signature as any)?.address?.__kind === "Id") {
    from = (extrinsic.signature as any).address.value;
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
