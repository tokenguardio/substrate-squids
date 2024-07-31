import * as ethers from "ethers";
import { NamedObject } from "./../interfaces/misc";

export function bufferToHex(buffer: Uint8Array): string {
  const hexString =
    "0x" +
    Array.from(buffer, (byte) => {
      return ("0" + byte.toString(16)).slice(-2);
    }).join("");
  return hexString;
}

export function bufferArrToHexArr(buffers: Uint8Array[]): string[] {
  return buffers.map((b) => bufferToHex(b));
}

export function removeDuplicates<T>(items: T[], key: keyof T): T[] {
  const seen = new Set();
  const filtered = items.filter((i) => {
    const duplicate = seen.has(i[key]);
    seen.add(i[key]);
    return !duplicate;
  });
  return filtered;
}

export function extractNamesFromObjects(objectsArray: NamedObject[]): string[] {
  return objectsArray.flatMap((obj) =>
    Object.values(obj).map((subObj) => subObj.name)
  );
}

export function evmAddressToMixedCase(address: string): string {
  return ethers.getAddress(address);
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
