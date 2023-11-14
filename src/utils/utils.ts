import { EvmTransactionType } from "../model";

export function convertToTransactionType(type: number): EvmTransactionType {
  switch (type) {
    case 100:
      return EvmTransactionType.ARBITRUM_DEPOSIT;
    case 101:
      return EvmTransactionType.ARBITRUM_UNSIGNED;
    case 102:
      return EvmTransactionType.ARBITRUM_CONTRACT;
    case 104:
      return EvmTransactionType.ARBITRUM_RETRY;
    case 105:
      return EvmTransactionType.ARBITRUM_SUBMIT_RETRYABLE;
    case 106:
      return EvmTransactionType.ARBITRUM_INTERNAL;
    case 120:
      return EvmTransactionType.ARBITRUM_LEGACY;
    default:
      throw new Error(`Unknown transaction type: ${type}`);
  }
}

export function calculateFee(gasPrice: bigint, gasUsed: bigint): bigint {
  const fee = gasPrice * gasUsed;
  return fee;
}
