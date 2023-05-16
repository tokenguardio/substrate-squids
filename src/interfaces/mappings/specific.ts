export interface MappedAddress {
  hex: string;
  ss58: string;
}

export type AddressArgs = {
  [key: string]: string[];
};
