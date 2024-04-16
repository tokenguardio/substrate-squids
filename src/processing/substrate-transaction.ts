import { SubstrateTransaction, SubstrateLabel } from "./../model";
import { callNormalizationHandlers } from "./../mappings";
import { createSubstrateTransaction } from "./../utils/factories";
import { fromHexToSs58 } from "../utils/misc";
import { Block, Extrinsic } from "./../processor";

export function handleSubstrateTransaction(
  extrinsic: Extrinsic,
  substrateTransactions: SubstrateTransaction[],
  block: Block
) {
  const call = extrinsic.call;
  if (!call) {
    console.error(`Extrinsic without call: ${extrinsic.hash}`);
    throw new Error("Extrinsic without call");
  }
  let label;
  let to: string | null = null;
  let normalizedCallArgs;
  switch (call.name) {
    case "Contracts.call":
    case "Contracts.call_old_weight":
      normalizedCallArgs = callNormalizationHandlers["Contracts"](call);
      if (normalizedCallArgs.dest?.__kind === "Id") {
        to = fromHexToSs58(normalizedCallArgs.dest.value);
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
        to = fromHexToSs58(normalizedCallArgs.dest.value);
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
    from = fromHexToSs58(from);
  }

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
