export class UnknownBufferFormatError extends Error {
  constructor(buffer: Uint8Array) {
    super(`Unknown buffer format: ${buffer}`);
  }
}

export class UnknownVersionError extends Error {
  constructor(eventName: string) {
    super(`Uknown version of ${eventName}`);
  }
}

export class UnknownEventError extends Error {
  constructor(eventName: string) {
    super(`Uknown event: ${eventName}`);
  }
}

export class UnknownCallError extends Error {
  constructor(callName: string) {
    super(`Uknown call: ${callName}`);
  }
}
