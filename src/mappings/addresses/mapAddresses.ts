import * as ss58 from "@subsquid/ss58";
import { MappedAddress, AddressArgs } from "../../interfaces/mappings/specific";
import { decodeHex } from "@subsquid/util-internal-hex";

export function mapAddresses(
  itemName: string,
  args: any,
  addressArgs: AddressArgs
): MappedAddress[] {
  const addressArgNames = addressArgs[itemName] || [];
  const addresses: string[] = addressArgNames
    .map((name) => args[name])
    .filter(Boolean);

  return addresses.map((address) => {
    return {
      hex: address,
      ss58: ss58.codec("kusama").encode(decodeHex(address)),
    };
  });
}
