export enum AddressType {
  EOA = "EOA",
  CONTRACT = "CONTRACT",
}

export enum EvmLabel {
  CONTRACT_DEPLOY = "CONTRACT_DEPLOY",
  CONTRACT_CALL = "CONTRACT_CALL",
  NATIVE_TRANSFER = "NATIVE_TRANSFER",
}

export enum EvmTransactionType {
  LEGACY = "LEGACY",
  EIP2930 = "EIP2930",
  EIP1559 = "EIP1559",
  EIP4844 = "EIP4844",
}

export enum TransferType {
  TRANSFER = "TRANSFER",
  MINT = "MINT",
  BURN = "BURN",
}

export interface Transaction {
  id: string;
  blockHash: string;
  timestamp: Date;
  hash: string;
  type?: EvmTransactionType;
  label?: EvmLabel;
  from: string;
  to?: string;
  fee?: string;
  value: string;
  input: string;
  deployedAddress?: string;
  success?: boolean;
  sighash?: string;
  transactionIndex: number;
}

export interface Contract {
  id: string;
  createdBy?: string;
  createTransaction?: string;
  createTimestamp?: Date;
  destroyTransaction?: string | null;
  destroyTimestamp?: Date | null;
}

export interface FToken {
  id: string;
  name: string | null;
  symbol: string | null;
  decimals: number | null;
}

export interface FtTransfer {
  id: string;
  transaction?: string;
  blockHash: string;
  timestamp: Date;
  eventIndex: number;
  from: string;
  to: string;
  value: string;
  transferType: TransferType;
  token: string;
}

export interface CommonTraceFields {
  id: string;
  transaction: string;
  timestamp: Date;
  transactionIndex: number;
  subtraces: number;
  error: string | null;
  parentHasError: boolean | null;
}

export interface TraceCreate extends CommonTraceFields {
  from: string;
  fromType?: AddressType;
  value?: string;
  gas?: string;
  init?: string;
  gasUsed?: string;
  code?: string;
  address?: string;
}

export interface TraceCall extends CommonTraceFields {
  from: string;
  fromType?: AddressType;
  to: string;
  toType?: AddressType;
  value?: string;
  gas?: string;
  sighash?: string;
  input?: string;
  gasUsed?: string;
  output?: string;
}

export interface TraceSuicide extends CommonTraceFields {
  address: string;
  refundAddress: string;
  balance?: string;
}

export interface TraceReward extends CommonTraceFields {
  author: string;
  value?: string;
  rewardType: string;
}

export interface Precompiles {
  [key: string]: string;
}
