# Fee calculation

## EVM

### Version differences

All transactions before runtime **v9** are of **Legacy** type

After runtime **v9** transaction can be of one of these types:

- **Legacy**
- **EIP1559**
- **EIP2390**

> **_NOTE:_** Args format of `Ethereum.transact` call changes a bit after runtime **v9**

All successful extrinsics emit `System.ExtrinsicSuccess` event which holds information about extrinsic weight in its args

> **_NOTE:_** Args format of `System.ExtrinsicSuccess` event differs in different runtime versions

### Legacy

```
Transaction Fee = (GasPrice * TransactionWeight) / 25000
```

_GasPrice_ value can be found in `Ethereum.transact` call args

_TransactionWeight_ value can be found in `System.ExtrinsicSuccess` event args

### EIP1559

```
GasPrice = BaseFee + MaxPriorityFeePerGas < MaxFeePerGas ?
            BaseFee + MaxPriorityFeePerGas :
            MaxFeePerGas;
Transaction Fee = (GasPrice * TransactionWeight) / 25000
```

_BaseFee_ for given block can be read from storage of the `BaseFee` pallet

_MaxPriorityFeePerGas_ value can be found in `Ethereum.transact` call args

_MaxFeePerGas_ value can be found in `Ethereum.transact` call args

_TransactionWeight_ value can be found in `System.ExtrinsicSuccess` event args

### EIP2390

```
Transaction Fee = (GasPrice * TransactionWeight) / 25000
```

_GasPrice_ value can be found in `Ethereum.transact` call args

_TransactionWeight_ value can be found in `System.ExtrinsicSuccess` event args

## Substrate

The formula for calculating the final fee looks like this:

```
inclusion_fee = base_fee + length_fee + [targeted_fee_adjustment * weight_fee];
final_fee = inclusion_fee + tip;
```

For more information on specific components of _inclusion_fee_ formula see [Substrate docs on fees](https://docs.substrate.io/build/tx-weights-fees/)

For our use case we can focus only on _final_fee_

In runtime **v30** `TransactionPayment` pallet was introduced. It emits the `TransactionFeePaid` event with following args:

```typescript
/**
 A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee, has been paid by `who`.
**/
get asV30(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
    assert(this.isV30)
    return this._chain.decodeEvent(this.event)
}
```

So like in the formula above:

```
actual_fee = inclusion_fee + tip;
```

### References

[Calculating Transaction Fees on Moonbeam by Moonbeam](https://docs.moonbeam.network/builders/get-started/eth-compare/tx-fees/)

# EVM and Substrate address mapping

## Substrate and SS58

By default, Substrate blockchains use the SS58 address format to send and receive transactions. SS58 is a modification of Base-58-check from Bitcoin with some minor changes. Notably, the format contains an address type prefix that identifies an address as belonging to a specific network

Example SS58 address: `aLoNHLwqd75cniRoF2k2DrXgsbUWacuCxqc6d6BBmvG3NVQ`.

## EVM and H160

Ethereum uses a 160-bit hex string (40+2 hex-characters long) as its public address, which users can send and receive transactions. On Substrate, we call this format H160, for 160-bit hash. For a blockchain to be Ethereum-compatible, they must use H160 accounts, as that is the only account format that EVM and all tools within the Ethereum ecosystem will recognize. This rule applies to Substrate chains with the EVM pallet as well.

Example H160 address: `0x4C40D74739A7C95D8358191D68E6d5C77a867E12`.

## Addresses on both sides of the chain

On the Ethereum side of a chain, you perform transactions using an Ethereum-style address (H160 format), which originates from a private key. On the Substrate side, you need a Substrate-style address (SS58 format) that's tied to a different private key.

On both sides, an address can be converted into a format recognizable on the other side. This means an EVM-native H160 Ethereum address can be changed into an SS58-like address that's identifiable on the Substrate side. Conversely, a Substrate-native SS58 address can be changed into an H160-like address that's identifiable on the Ethereum side. However, converting between addresses, is a lossy operation. This means once an native SS58 address is converted into an H160-like address, it can't be reverted back to the original SS58 address, and vice versa.

While the addresses can be converted, they cannot interact as if they are native to the other chain. For instance, an native H160 Ethereum address can sign transactions on the EVM side but when converted to an SS58-like format it cannot be used to sign transactions on the Substrate side. The reason is that its corresponding private key isn't compatible with the Substrate system. The same applies when converting a native Substrate SS58 address which can be used to sign transactions on the Substrate side to an H160-like format - you can't make transcations on the EVM side with this address.

As a result, to be able to operate on both chains, you essentially need two sets of addresses and their corresponding private keys: one set with an native H160 and its linked SS58-like address for transactions on the Ethereum side, and another set with an native SS58 and its linked H160-like address for transactions on the Substrate side.

In other words, you can only authorize transactions within the chain side where the account was originally set up. As it was mentioned earlier, an account created on the Ethereum side can't sign transactions on the Substrate side, and vice versa.

<p align="center">
  <img src="https://docs.moonbeam.network/images/learn/features/unified-accounts/unified-accounts-1.png" />
</p>

## Address Conversion

As in [Astar article on this subject](https://medium.com/astar-network/using-astar-network-account-between-substrate-and-evm-656643df22a0):

The `@polkadot-js/util-crypto` package exports the function `evmToAddress`. This function will take an H160 address and prefix it with `evm:`, convert the string into a byte array, hash the bytes with Blake2, and encode the public key to SS58. If the provided H160 address is from a valid EVM signer (as in, the account was created from wallets like MetaMask), this will result in a mapped SS58 address. Sending tokens from an native SS58 account to this mapped SS58 address will allow the original H160 account to access the funds within the EVM sandbox.

It is also possible to convert an SS58 address to an H160 address by using the `addressToEvm` function from the same package. Substrate converts the address by first decoding the SS58 string to retrieve the hashed public key (which is a 180-bit hash, or H180), and remove the trailing 20 bits so we result in a 160-bit hash. If the provided SS58 address is from a valid Substrate signer, the resulting string will be a mapped H160 address. If an EVM signer sends a token to this address, the tokens will be held in the EVM deposit of the original SS58 account. The account can reclaim the tokens through the `evm.withdraw` extrinsic call.

The EVM pallet keeps a hash map of the H160 and SS58 accounts, which is how Substrate can associate between the mapped H160 address to a mapped SS58 address.

As it was mentioned before, the address conversion is a lossy operation, meaning that you cannot reverse the conversion process. Once you convert an SS58 address to an H160 address, you cannot convert that back. So when converting an address to a valid mapped address, you must be aware of the original signer. Substrate signer can be converted from an SS58 address to an H160, and an EVM signer can be converted to an SS58 address. The other way around will not create a valid mapped address.

More detailed information on conversion can be found in the aforementioned article. Also, [this converter](https://hoonsubin.github.io/evm-substrate-address-converter/) can be used to convert addresses.

<!-- <p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:486/format:webp/1*9rewWI0WcPnFDWdkJjAQfw.png" />
</p> -->

## Example - sending ASTR from Substrate account to EVM account and back

Let's proceed with an example from [Astar article](https://medium.com/astar-network/using-astar-network-account-between-substrate-and-evm-656643df22a0) for better understanding:

The process of transferring 10 ASTR tokens from a Substrate account to a MetaMask account that only has access to the EVM sandbox can be outlined as follows:

Initially, the MetaMask address must be converted to a corresponding SS58 address. When the conversion of `0xA843c5d2B2dFc45e6799EAE9b8dbEE0189e6CcAa` is done, it results in `ZaZgWyUczTxo8Zi8V4frbdHtnjbPr8RE24b3qCjCaMsKUfM`.

After sending 10 tokens to this SS58 address using polkadot-js, as seen [in this event](https://astar.subscan.io/extrinsic/540604-2?event=540604-10), the balance shows up in the MetaMask account. This balance change can also be tracked on [the EVM explorer](https://blockscout.com/astar/tx/0xee1da0d478cf2987b4a72f2869584d8be95468b42159db437a0772bb4d8cec94).

To send the tokens back to the SS58 account, the SS58 address `ZyakNoVJnDXcKFLYfnsTY9EZLYd6PHifzXG5jFyTbSM9dvd` is converted to its mapped H160 address `0xb2aed18d6495133a43dd6ecd9a5abd1fcae57150`.

Upon sending 9.99 tokens (deducting gas fee) to the [mapped H160 account](https://blockscout.com/astar/tx/0xee1da0d478cf2987b4a72f2869584d8be95468b42159db437a0772bb4d8cec94), these tokens do not directly reflect in the Substrate balance of account `ZyakNoVJnDXcKFLYfnsTY9EZLYd6PHifzXG5jFyTbSM9dvd`. This is because the EVM side cannot modify the Substrate side state. Instead, these tokens are placed in the EVM deposit, which is essentially the balance of the mapped H160 account within the EVM sandbox. In order to withdraw the tokens in the EVM deposit, the `evm.withdraw` function must be called from the original SS58 account.

This function requires the parameter of the mapped H160 address and the number of tokens that are wished to be withdrawn. For this instance, 9.9 tokens are withdrawn using the polkadot-js portal.

After [calling the function](https://astar.subscan.io/extrinsic/540712-2), the balance of `ZyakNoVJnDXcKFLYfnsTY9EZLYd6PHifzXG5jFyTbSM9dvd` increases by 9.9 ASTR tokens. Hence, the transfer back and forth between an EVM account and a Substrate account is achieved.

## References

[Using Astar Network Account Between Substrate and EVM by Astar](https://medium.com/astar-network/using-astar-network-account-between-substrate-and-evm-656643df22a0)

[Unified Accounts by Moonbeam](https://docs.moonbeam.network/learn/features/unified-accounts/)
