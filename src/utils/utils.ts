import { toHex } from "@subsquid/substrate-processor";

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
