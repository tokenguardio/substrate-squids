import { Trace } from "../processor";

type TraceAddress = number[];

export class TraceTree {
  nodes: Map<string, Trace>;
  transactionId: string;

  constructor(transactionId: string) {
    this.transactionId = transactionId;
    this.nodes = new Map();
  }

  private addressToString(address: TraceAddress): string {
    return `${this.transactionId}_${address.join("_")}`;
  }

  addTrace(trace: Trace): void {
    this.nodes.set(this.addressToString(trace.traceAddress), trace);
  }

  getTraceByAddress(address: TraceAddress): Trace | null {
    return this.nodes.get(this.addressToString(address)) || null;
  }

  private getParentAddressOfTrace(trace: Trace): TraceAddress | null {
    if (trace.traceAddress.length === 0) {
      return null; // This is the root node
    }
    return trace.traceAddress.slice(0, -1);
  }

  getParentOfTrace(trace: Trace): Trace | null {
    const parentAddress = this.getParentAddressOfTrace(trace);
    if (parentAddress === null) {
      return null; // This is the root node
    }
    return this.getTraceByAddress(parentAddress);
  }

  parentHasError(trace: Trace): boolean {
    let currentTrace = trace;
    while (true) {
      const parentAddress = this.getParentAddressOfTrace(currentTrace);
      if (parentAddress === null) {
        return false; // Reached the root node without finding an error
      }
      const parent = this.getTraceByAddress(parentAddress);
      if (!parent) {
        throw new Error(
          "Parent trace not found in the tree - unexpected state"
        );
      }
      if (parent.error != null) {
        return true; // An error was found in one of the parents
      }
      currentTrace = parent; // Move up to the next parent
    }
  }
}
