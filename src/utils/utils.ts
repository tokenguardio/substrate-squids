import { UnknownBufferFormatError } from "./errors";

export function bufferToHex(buffer: Uint8Array): string | string[] {
  if (buffer.length === 32) {
    // Single address case
    const hexString =
      "0x" +
      Array.from(buffer, (byte) => {
        return ("0" + byte.toString(16)).slice(-2);
      }).join("");
    return hexString;
  } else if (buffer.length > 32 && buffer.length % 32 === 0) {
    // Multiple addresses case
    const numAddresses = buffer.length / 32;
    const addresses: string[] = []; // change type to string[]
    for (let i = 0; i < numAddresses; i++) {
      const start = i * 32;
      const end = start + 32;
      const addressBytes = buffer.slice(start, end);
      const hexAddress = bufferToHex(addressBytes) as string;
      addresses.push(hexAddress);
    }
    return addresses;
  } else {
    // Unknown buffer format case
    throw new UnknownBufferFormatError(buffer);
  }
}
