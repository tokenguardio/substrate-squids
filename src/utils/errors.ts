export class UnknownBufferFormatError extends Error {
  constructor(buffer: Uint8Array) {
    super(`Unknown buffer format: ${buffer}`);
  }
}

export class UnknownEventVersionError extends Error {
  constructor(eventName: string) {
    super(`Uknown version of ${eventName} event`);
  }
}

export class UnknownCallVersionError extends Error {
  constructor(callName: string) {
    super(`Uknown version of ${callName} call`);
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
