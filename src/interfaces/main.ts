import { Transaction } from "../model";

export interface CommonTraceFields {
  id: string;
  transaction: Transaction | undefined;
  timestamp: Date;
  transactionIndex: number | undefined;
  subtraces: number | undefined;
  error: string | null;
  parentHasError: boolean | null;
}
