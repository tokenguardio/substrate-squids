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

[Calculating Transaction Fees on Moonbeam](https://docs.moonbeam.network/builders/get-started/eth-compare/tx-fees/)
