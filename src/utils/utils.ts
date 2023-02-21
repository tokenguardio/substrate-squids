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
