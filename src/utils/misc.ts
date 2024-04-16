import * as ethers from "ethers";
import { NamedObject } from "@src/interfaces/misc";

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
