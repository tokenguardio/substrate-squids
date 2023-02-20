export class UnknownBufferFormatError extends Error {
  constructor(buffer: Uint8Array) {
    super(`Unknown buffer format: ${buffer}`);
  }
}

export class UnknownVersionError extends Error {
  constructor(eventName: string) {
    super(`Uknown version for ${eventName}`);
  }
}
