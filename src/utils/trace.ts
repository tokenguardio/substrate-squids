import { Trace } from "../processor";

export function traceParentHasError(trace: Trace): boolean {
  let currentTrace = trace.parent;

  while (currentTrace) {
    if (currentTrace.error !== null) {
      return true;
    }
    currentTrace = currentTrace.parent;
  }

  return false;
}
