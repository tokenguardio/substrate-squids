import { toHex } from "@subsquid/substrate-processor";
import { assertNotNull } from "@subsquid/util-internal";
import * as ss58 from "@subsquid/ss58";

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

export function convertUint8ArrayPropsToHex(obj: any): any {
  if (obj instanceof Uint8Array) {
    return toHex(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(convertUint8ArrayPropsToHex);
  } else if (typeof obj === "object" && obj !== null) {
    let newObj: { [key: string]: any } = {};
    for (let prop in obj) {
      newObj[prop] = convertUint8ArrayPropsToHex(obj[prop]);
    }
    return newObj;
  }
  return obj;
}

export function fromHexToSs58(hex: string): string {
  return codec.encode(hex);
}

export function fromSs58ToHex(hex: string): string {
  return codec.decode(hex);
}
