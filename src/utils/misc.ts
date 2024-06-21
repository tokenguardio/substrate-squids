import { NamedObject } from "./../interfaces/misc";
import { assertNotNull } from "@subsquid/util-internal";
import * as ss58 from "@subsquid/ss58";
import { TransferType } from "../interfaces/models";

const network = assertNotNull(process.env.SS58_NETWORK);
const codec = ss58.codec(network);

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

export function fromHexToSs58(hex: string): string {
  return codec.encode(hex);
}

export function fromSs58ToHex(hex: string): string {
  return codec.decode(hex);
}

export function getEnvBoolean(value: undefined | string, defaultValue = false) {
  return value ? value.toLowerCase() === "true" : defaultValue;
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
  return from == null && to != null;
}

function isBurn(from: string, to: string): boolean {
  return to == null && from != null;
}

export function isDecodedDataFtTransfer(decodedData?: any): boolean {
  if (typeof decodedData !== "object" || decodedData === null) {
    return false;
  }

  const keys = Object.keys(decodedData);

  const requiredKeys = ["from", "to", "value"];
  if (keys.length !== requiredKeys.length) {
    return false;
  }

  for (const key of requiredKeys) {
    if (!keys.includes(key)) {
      return false;
    }
  }

  if (!(decodedData.to || decodedData.from)) {
    return false;
  }

  if (
    (decodedData.from !== undefined &&
      decodedData.from !== null &&
      typeof decodedData.from !== "string") ||
    (decodedData.to !== undefined &&
      decodedData.to !== null &&
      typeof decodedData.to !== "string") ||
    (decodedData.value !== undefined &&
      decodedData.value !== null &&
      typeof decodedData.value !== "bigint")
  ) {
    return false;
  }

  return true;
}
