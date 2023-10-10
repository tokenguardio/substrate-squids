import { TraceType } from "../model";

export function convertToTraceType(type: string): TraceType {
  switch (type.toUpperCase()) {
    case "CREATE":
      return TraceType.CREATE;
    case "CALL":
      return TraceType.CALL;
    case "SUICIDE":
      return TraceType.SUICIDE;
    case "REWARD":
      return TraceType.REWARD;
    default:
      throw new Error(`Unknown trace type: ${type}`);
  }
}
