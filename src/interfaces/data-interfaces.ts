export interface EventData {
  id: string;
  indexInBlock: number;
  phase: string;
  name: string;
  args: string;
  pos: number;
}

export interface ExtrinsicData {
  id: string;
  indexInBlock: number;
  version: number;
  signature: string;
  success: boolean;
  error: string;
  fee: number;
  tip: number;
  hash: string;
  pos: number;
}

export interface CallData {
  id: string;
  success: boolean;
  error: string;
  origin: string;
  name: string;
  args: string;
  pos: number;
}

export interface MetadataData {
  id: string;
  specName: string;
  specVersion: number;
  blockHeight: number;
  blockHash: string;
  hex: string;
}
