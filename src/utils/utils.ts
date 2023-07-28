import { EventNorm, CallNorm } from "../model";

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

export function nullifyNonexistentCalls(
  events: EventNorm[],
  calls: CallNorm[]
): void {
  let callIds = new Set(calls.map((call) => call.id));

  events.forEach((event) => {
    let callId = event.call instanceof CallNorm ? event.call.id : event.call;
    if (callId && !callIds.has(callId)) {
      event.call = null;
    }
  });
}
