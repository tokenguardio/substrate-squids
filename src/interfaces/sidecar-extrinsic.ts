interface Method {
  pallet: string;
  method: string;
}

interface Signer {
  id: string;
}

interface Signature {
  signature: string;
  signer: Signer;
}

interface Info {
  weight: string;
  class: string;
  partialFee: string;
  kind: string;
}

export interface Extrinsic {
  method: Method;
  signature: Signature | null;
  tip: string | null;
  hash: string;
  info: Info;
  success: boolean;
  paysFee: boolean;
}

export interface ExtrinsicResponse {
  extrinsics: Extrinsic[];
}
