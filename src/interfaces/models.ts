export interface Block {
  id: string;
  hash: string;
  height: number;
  timestamp?: Date;
}

export interface EventNorm {
  id: string;
  blockHash: string;
  timestamp?: Date;
  name: string;
  args?: { [key: string]: any };
  extrinsicSuccess?: boolean;
}

export interface CallNorm {
  id: string;
  blockHash: string;
  timestamp?: Date;
  name: string;
  args?: { [key: string]: any };
  success?: boolean;
  origin?: { [key: string]: any };
}

export interface SubstrateTransaction {
  id: string;
  blockHash: string;
  extrinsicHash: string;
  timestamp?: Date;
  name: string;
  args?: { [key: string]: any };
  label?: string;
  fee?: bigint;
  tip?: bigint;
  from: string | null;
  to: string | null;
  success: boolean;
}

export enum SubstrateLabel {
  contract_deploy = "contract_deploy",
  contract_call = "contract_call",
  other = "other",
}
