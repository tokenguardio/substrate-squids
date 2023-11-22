import { EvmTransactionType, TransferType } from "../model";

const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";

export function convertToTransactionType(type: number): EvmTransactionType {
  switch (type) {
    case 0:
      return EvmTransactionType.LEGACY;
    case 1:
      return EvmTransactionType.EIP2930;
    case 2:
      return EvmTransactionType.EIP1559;
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
    default:
      throw new Error(`Unknown transaction type: ${type}`);
  }
}

export function calculateFee(gasPrice: bigint, gasUsed: bigint): bigint {
  const fee = gasPrice * gasUsed;
  return fee;
}

export function getTransferType(from: string, to: string): TransferType {
  if (isMint(from, to)) {
    return TransferType.MINT;
  }
  if (isBurn(from, to)) {
    return TransferType.BURN;
  }

  return TransferType.TRANSFER;
}

function isMint(from: string, to: string): boolean {
  return from === EMPTY_ADDRESS && to !== EMPTY_ADDRESS;
}

function isBurn(from: string, to: string): boolean {
  return to === EMPTY_ADDRESS && from !== EMPTY_ADDRESS;
}
