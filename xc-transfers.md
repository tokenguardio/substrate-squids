# Cross-Chain Transfers Tracking

## Wormhole

### Verified Action Approvals

[Docs on VAAs](https://wormhole.com/docs/learn/infrastructure/vaas/)

Verified Action Approvals (VAAs) are packets of cross-chain data emitted whenever a cross-chain application contract interacts with the Core Contract. They are uniquely indexed by the (`emitter_chain`, `emitter_address`, `sequence`) tuple, which can be seen on both sides of the cross-chain transfer. VAAs are ultimately what a smart contract on the receiving chain must process to receive a Wormhole message.

[Example transfer](https://wormholescan.io/#/tx/0x4c3fea76d13156d053bde6435b70fbc8f55aea32dee2e055e7b65aad758cd7e0?network=Mainnet), where a user sends 33,186.89 WELL tokens from Base to Moonbeam.

### Sending Side

[View send transaction](https://basescan.org/tx/0x4c3fea76d13156d053bde6435b70fbc8f55aea32dee2e055e7b65aad758cd7e0#eventlog)

On the sending side, the transaction emits a `LogMessagePublished` event, containing the information necessary to extract the transfer tuple: (`emitter_chain`, `emitter_address`, `sequence`) and the VAA data.

### Receiving Side

[View receive transaction](https://moonscan.io/tx/0x3f253c3a56a63aa514c692f0f94dbb42c9e2ab6b88c7dfbc626afb8f10fc30fa)

On the receiving side, we need to decode the transaction input using the contract ABI to locate the `encodedVm` field. This field contains the encoded VAA data. By decoding the `encodedVm` value with a VAA parser, we can extract the transfer information.

Here is the [parsed VAA](https://wormholescan.io/#/developers/vaa-parser/AQAAAAQNAdvl5rbv7nTWH2lEqmbw7NOrTReXTXuktAKodzLSTAQIUi0izDdaGedJEo2t5ozJbi8tJagbbP6H7Zx9afnxgHcBApPYHToHw/qRDLxbw+cstKspEvPd71runcND2u8Ri/0BaAOW0M0w/1WSEAgZVP0iqG1RUqzBBOkIXCZCL/1/6kkABN8iPfax/5KLr8N4xE6z2CYxGi8934fKvsxwdcXi5htVM8KC4FBVMLpmvmuXkYiOdvv1/liu9u+yhd7uE6Vrt/QABtCQlxjcHZ3DdU3bp5Jw2iOVdt7Ki6HrkPyhzyJFFZLzcaAIRzdebsg2YOsbdI8Wd4kBmS15Y6DaCm4ElAsaIp4BBwfQtQCv5JrqdfxTDhsKL4ssk1/JlobHHTu0/vQwV2f1G4dG4vkaE3J4MTPJwbgQc/6iBn6x1i0Au04j4jSeVAkACM8PjGCJ/sA/Lhas5yalztPzkDHBsbUqz1XFU609EV+iCeauLSkNim+1XIKkgN4oKjGt1ZOscnMdepwf2we4sRMBCRUNY8wQggYwD8COqalJf66RbPrQaJWO6HTB9foDbtqCVbpgEt+x5QzUL2EMthWAIPxsSpdP1mZBodcMGRTys8UBCg7FX54NN5A1hcQHN0Ki8meiR0C5aU+3SZqMbMkwcFXTWYXVCuopPkj3QYDcoAvRnNNOwPma1x3qJ9xa7Jq660kAC/A4BCXcMge87xPQoMteu+Xur0sIUExeLpv5G1alFZDFMTOPsSnuGuMfUEsplaUQ0BzOmEYldtZiHFlCy7kha1YADOwPoYBVQCgx6MdDL9KQ1+TIVob9IZ7Mkq5hl084nT4oOcTAQ9COC0p3dXOOj4YMuYM8bIpgVt4j9mhhfXyslPEADWtdDxbyRyi2nyaXTKK/4/4+XvrQKDRoW3GWo1atcPf1W4EQIf6c5IKc8CmjECY1kL1nYetO8BVqzYjL6ELlb8MBDwQNct8T7IoNwjwSzRKIHoPQF6fQlAbsCdNp6CzeBSTEfprY26Yc+1J3lLXJ/+e3ee+y5bgbxLyjX74INNlIOA4BEEBEsK7f7u7ztbLsAccj1NKgNPD8c2N2J4iKXcDYWhMKeLhp2DHjaQjLzkjPqwamAMSzAi9SIGdvE8/pE0U8pR8AZvMZZwAAAAAAHgAAAAAAAAAAAAAAAI0t6NL3Px9Mq0cqyaiBybEjx5YnAAAAAAABWL4BAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwSxTjgcAAAAAAAAAAAAAAAAURq1P3k2g3Y+Wogpc4MBNookEeMAEAAAAAAAAAAAAAAAALlB/efdLB4Snj5K4jAxAsBAfiC5ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==?network=Mainnet):

```json
{
  "amount": "3318689445916",
  "fee": "0",
  "payloadType": 1,
  "toAddress": "0x000000000000000000000000b941fde7dd2c1e129e3e4ae2303102c0407e20b9",
  "toChain": 16,
  "tokenAddress": "0x000000000000000000000000511ab53f793683763e5a8829738301368a2411e3",
  "tokenChain": 16
}
```

All relevant information for the transfer is included here.

## XCM on Substrate Networks

Some chains maintain a list of registered assets, which can be accessed via:

- [Moonbeam assets](https://polkadot.js.org/apps/?rpc=wss://wss.api.moonbeam.network#/assets)
- [Astar assets](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fastar.public.blastapi.io#/assets)

### Tracking Asset Registration

When an asset is registered, the following events are emitted: `assets.ForceCreated`, `assetManager.ForeignAssetRegistered`, and `assets.MetadataSet`. For example, in [this Moonbeam event](https://moonbeam.subscan.io/block/1001175?tab=event&event=1001175-8), the `assetManager.ForeignAssetRegistered` event shows the ID of the newly created asset, the source chain (using [multilocation](https://docs.moonbeam.network/builders/interoperability/xcm/core-concepts/multilocations/)), and metadata such as the asset's decimals, name, and symbol.

In this specific example, the asset is Acala's xcACA token, originating from parachain ID 2000 (Acala parachain). The asset ID for xcACA is `224821240862170613278369189818311486111`.

### Tracking Transfers

To track asset transfers, the `Assets.Issued` event is useful. It shows the amount of an asset (identified by its ID) issued to a specific account. For instance, in [this example of xcACA issuance](https://moonbeam.subscan.io/block/1003292?tab=event&event=1003292-0), 75,036,571,423 xcACA tokens were transferred to the account `0xf9C692768B3D5CAACE8EAbBfE112916DcB560f2c`.
