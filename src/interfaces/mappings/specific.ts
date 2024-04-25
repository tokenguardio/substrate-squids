export interface MappedAddress {
  hex: string;
  ss58: string | null;
}

export type AddressArgs = {
  [key: string]: string[];
};
