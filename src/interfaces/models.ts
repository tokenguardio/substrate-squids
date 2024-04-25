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
