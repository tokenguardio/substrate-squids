import { EvmTransactionType } from "../model";

export function convertToTransactionType(type: number): EvmTransactionType {
  switch (type) {
    case 0:
      return EvmTransactionType.LEGACY;
    case 1:
      return EvmTransactionType.EIP2930;
    case 2:
      return EvmTransactionType.EIP1559;
    case 100:
      return EvmTransactionType.DEPOSIT;
    case 101:
      return EvmTransactionType.UNSIGNED;
    case 102:
      return EvmTransactionType.CONTRACT;
    case 104:
      return EvmTransactionType.RETRY;
    case 105:
      return EvmTransactionType.SUBMIT_RETRYABLE;
    case 106:
      return EvmTransactionType.INTERNAL;
    default:
      throw new Error(`Unknown transaction type: ${type}`);
  }
}

export function calculateFee(gasPrice: bigint, gasUsed: bigint): bigint {
  const fee = gasPrice * gasUsed;
  return fee;
}
