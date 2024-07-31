import { EvmTransactionType, TransferType } from "../interfaces/models";

const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";

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

export function getDecoratedCallResult(rawValue: string | null): string | null {
  const decoratedValue: string | null = rawValue;

  if (!rawValue || typeof rawValue !== "string") return null;

  const regex = new RegExp(/^\d{10}\.[\d|\w]{4}$/);

  /**
   * This test is required for contract call results
   * like this - "0006648936.1ec7" which must be saved as null
   */
  if (regex.test(rawValue)) return null;

  return decoratedValue ? clearNullBytes(decoratedValue) : decoratedValue;
}

function clearNullBytes(rawStr: string): string {
  /**
   * We need replace null byte in string value to prevent error:
   * "QueryFailedError: invalid byte sequence for encoding \"UTF8\": 0x00\n    at PostgresQueryRunner.query ..."
   */
  return rawStr ? rawStr.replace(/\0/g, "") : rawStr;
}

/**
 * Utility function to get an environment variable value as a boolean.
 * If the environment variable value does not exist, it returns the default value.
 *
 * @param {string | undefined} value - The value of the environment variable.
 * @param {boolean} [defaultValue=false] - The default value to return if the environment variable value is not set.
 * @returns {boolean} - The environment variable value as a boolean, or the default value.
 */
export function getEnvBoolean(value: undefined | string, defaultValue = false) {
  return value ? value.toLowerCase() === "true" : defaultValue;
}

/**
 * Utility function to get an environment variable value as a number.
 * If the environment variable value does not exist, it returns the default value or undefined.
 * If the environment variable value is not a valid number, it throws an error.
 *
 * @param {string | undefined} envValue - The value of the environment variable.
 * @param {number} [defaultValue] - The default value to return if the environment variable value is not set.
 * @returns {number | undefined} - The environment variable value as a number, or the default value, or undefined.
 * @throws {Error} - Throws an error if the environment variable value is not a valid number.
 */
export function getEnvNumber(
  envValue: string | undefined | null,
  defaultValue?: number
): number | undefined {
  if (envValue != undefined && envValue.trim() !== "") {
    const numberValue = Number(envValue);
    if (isNaN(numberValue)) {
      throw new Error(
        `Environment variable value "${envValue}" is not a valid number.`
      );
    }
    return numberValue;
  }
  return defaultValue;
}
