export interface MetadataResponse {
  metadata: Metadata[];
}

export interface Metadata {
  id?: string;
  blockHash?: string;
  blockHeight?: number;
  specName?: string;
  specVersion?: number;
  hex?: string;
}
