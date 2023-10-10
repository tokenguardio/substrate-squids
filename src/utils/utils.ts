import { TraceType, EvmTransactionType, EvmLabel } from "../model";
import { Transaction } from "../processor";

export function convertToTraceType(type: string): TraceType {
  switch (type.toUpperCase()) {
    case "CREATE":
      return TraceType.CREATE;
    case "CALL":
      return TraceType.CALL;
    case "SUICIDE":
      return TraceType.SUICIDE;
    case "REWARD":
      return TraceType.REWARD;
    default:
      throw new Error(`Unknown trace type: ${type}`);
  }
}

export function convertToTransactionType(type: number): EvmTransactionType {
  switch (type) {
    case 0:
      return EvmTransactionType.LEGACY;
    case 1:
      return EvmTransactionType.EIP2930;
    case 2:
      return EvmTransactionType.EIP1559;
    default:
      throw new Error(`Unknown transaction type: ${type}`);
  }
}

export function getEvmLabel(txn: Transaction): EvmLabel {
  if (txn.sighash && txn.contractAddress) {
    return EvmLabel.CONTRACT_DEPLOY;
  } else if (txn.sighash && !txn.contractAddress) {
    return EvmLabel.CONTRACT_CALL;
  } else {
    return EvmLabel.NATIVE_TRANSFER;
  }
}

export function calculateFee(gasPrice: bigint, gasUsed: bigint): bigint {
  const fee = gasPrice * gasUsed;
  return fee;
}
