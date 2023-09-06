# Cross-Consensus Messaging (XCM)

## XCM

Polkadot's architecture allows parachains to natively interoperate with each other, enabling cross-blockchain transfers of any type of data or asset.

To do so, a Cross-Consensus Message (XCM) format defines a language around how the message transfer between two interoperating blockchains should be performed. XCM is not specific to Polkadot, as it aims to be a generic and extensible language between different consensus systems. There's a difference between XCM and XCMP. XCMP stands for cross-consensus message passing, one of the transport methods for XCMs. It allows parachains to exchange messages with other parachains on the same relay chain.

## XCM Instructions

XCM messages contain a series of actions/instructions that are executed by the Cross-Consensus Virtual Machine (XCVM). An action (for example, transferring a token from one blockchain to another) consists of instructions that the XCVM partly executes in the origin and destination chains.

For example, an XCM message that transfers DOT from Polkadot to Moonbeam will include the following XCM instructions (in that order), which are partly executed on Polkadot and partly executed on Moonbeam:

1. TransferReserveAsset — executed in Polkadot
2. ReserveAssetDepossited — executed in Moonbeam
3. ClearOrigin — executed in Moonbeam
4. BuyExecution — executed in Moonbeam
5. DepositAsset — executed in Moonbeam

Instruction set with descriptions can be found [on parity github page](https://github.com/paritytech/xcm-format#5-the-xcvm-instruction-set).

## XCM Transport Protocols

Polkadot implements two cross-consensus or transport protocols for acting on XCM messages between its constituent parachains, Moonbeam being one of them:

- **Vertical Message Passing (VMP)** — is divided into two kinds of message-passing transport protocols:
  - **Upward Message Passing (UMP)** — allows parachains to send messages to their relay chain, for example, from Moonbeam to Polkadot
  - **Downward Message Passing (DMP)** — allows the relay chain to pass messages down to one of their parachains, for example, from Polkadot to Moonbeam
- **Cross-Chain Message Passing (XCMP)** — allows two parachains to exchange messages as long as they are connected to the same relay chain. Cross-chain transactions are resolved using a simple queuing mechanism based on a Merkle tree to ensure fidelity. Collators exchange messages between parachains, while the relay chain validators will verify that the message transmission happened

Currently, while XCMP is being developed, a temorary solution is implemented called **Horizontal Relay-routed Message Passing (HRMP)** protocol, in which the messages are stored in and read from the relay chain. This will be deprecated in the future for the full XCMP implementation.

<p align="center">
  <img src="https://docs.moonbeam.network/images/builders/interoperability/xcm/overview/overview-1.png" />
</p>

## Most common use-cases for XCM messages as of now

### Asset Teleporting

Consists of moving an asset from one blockchain to another by destroying the amount being transferred in the origin chain and creating a clone (same amount as destroyed) on the target chain. In such cases, each chain holds the native asset as reserve, similar to a burn-mint bridging mechanism. The model requires a certain degree of trust, as any of the two chains could maliciously mint more assets.

### Remote Transfers

Consists of moving an asset from one blockchain to another via an intermediate account in the origin chain that is trustlessly owned by the target chain. This intermediate account is known as the "sovereign" account. In such cases, the origin chain asset is not destroyed but held by the sovereign account. The XCM execution in the target chain mints a wrapped (also referred to as "virtual" or "cross-chain" asset) representation to a target address. The wrapped representation is always interchangeable on a 1:1 basis with the native asset. This is similar to a lock-mint / burn-unlock bridging mechanism.

Sovereign account is an account each chain in the ecosystem has, one for the relay chain and the other for other parachains. It is calculated as the `blake2` hash of a specific word and parachain ID concatenated `(blake2(para+ParachainID)` for the Sovereign account in the relay chain, and `blake2(sibl+ParachainID)` for the Sovereign account in other parachains), truncating the hash to the correct length. The account is owned by root and can only be used through SUDO (if available) or governance (referenda). The Sovereign account typically signs XCM messages in other chains in the ecosystem.

<p align="center">
  <img src="https://docs.moonbeam.network/images/builders/interoperability/xcm/overview/overview-2.png" />
</p>

Currently, Moonbeam only supports remote transfers. All cross-chain assets on Moonbeam are known as xc + TokenName. For example, Polkadot's DOT representation on Moonbeam is known as xcDOT and Kusama's KSM representation on Moonriver is xcKSM.

## Channels

Before two chains can start communicating, a messaging channel must be opened. Channels are unidirectional, meaning that a channel from chain A to chain B will only pass messages from A to B. Consequently, asset transfers will be possible only from chains A to B. Therefore, two channels must be opened to send messages (or transfer assets) back and forth.

A channel for XCMs between the relay chain and parachain is automatically opened when a connection is established. However, when parachain A wants to open a communication channel with parachain B, parachain A must send an open channel extrinsic in its network.

Even though parachain A has expressed its intentions of opening an XCM channel with parachain B, the latter has not signaled to the relay chain its intentions to receive messages from parachain A. Therefore, to have an established channel, parachain B must send an extrinsic (an XCM) to the relay chain. The accepting channel extrinsic is similar to the previous one.

<p align="center">
  <img src="https://docs.moonbeam.network/images/builders/interoperability/xcm/overview/overview-3.png" />
</p>

All the actions mentioned above can be executed via SUDO (if available), or through democracy (technical committee or referenda).

[See currently open channels on moonbeam](https://moonbeam.subscan.io/xcm_channel)

## XCM Asset Registration

Once a channel is established between parachains (or relay chain-parachain), asset registration can occur. For asset registration on Moonriver or Moonbeam MainNet, a post must be made on the Moonbeam Community Forum to outline the XCM proposal. This manual step ensures community members can provide feedback before the asset is integrated. In general, asset registration can happen at a runtime level, which means that a runtime upgrade is required, after which the asset is now registered and supported by XCM. However, Moonbeam included a Substrate pallet to handle asset registration without the need for runtime upgrades, making the process a lot simpler. All the actions can be executed via SUDO (if available), or through Democracy (technical committee or referenda).

## XC-20s

Foreign assets are represented via a standard ERC-20 interface through a precompiled contract. XCM assets on Moonbeam are called XC-20s, to differentiate native XCM assets from ERC-20 generated via the EVM. The precompile contract will access the necessary Substrate functions to perform the required actions. Nevertheless, from a developer's perspective, XC-20s are ERC-20 tokens with the added benefit of being an XCM cross-chain asset, and dApps can easily support them through a familiar ERC-20 interface.

<p align="center">
  <img src="https://docs.moonbeam.network/images/builders/interoperability/xcm/overview/overview-4.png" />
</p>

The precompile does not support cross-chain transfers to stay as close as possible to the original ERC-20 interface. Consequently, developers will have to rely on the Substrate API and XCMs to move the assets back to their original chain, or on a different precompile contract to access XCM based features from the Ethereum API.

## Example - VMP

### Overview

As Moonbeam is a parachain within the Polkadot ecosystem, XCM + VMP allows DOT transfers from/to Polkadot/Moonbeam.

Once a project is onboarded as a parachain it automatically has a bi-directional communication channel with the relay chain. Therefore, there is no need for chain registration. However, the relay chain native token needs to be registered on the parachain.

Alice (Polkadot) wants to transfer a certain amount of DOT from Polkadot to her account on Moonbeam, named Alith. Therefore, she initiates an XCM that expresses her intentions. For such transfers, Moonbeam owns a sovereign account on Polkadot.

Consequently, the XCM message execution on Polkadot will transfer the amount of DOT to Moonbeam's sovereign account on Polkadot. Once the assets are deposited, the second part of the message is sent to Moonbeam.

Moonbeam will locally execute the action the XCM message is programmed to do. In this case, it is to mint and transfer the same amount of xcDOT (cross-chain DOT) to the account defined by Alice, which in this case is Alith. The fee to execute the XCM in the target parachain is paid in the asset being transferred (xcDOT for this example).

 <p align="center">
  <img src="https://docs.moonbeam.network/images/builders/interoperability/xcm/overview/overview-5.png" />
</p>

Alice and Alith accounts can be different. For example, Polkadot's accounts are SR25519 (or ED25519), while Moonbeam's are ECDSA (Ethereum styled) accounts. They can also have different owners. Also, For this example, cross-chain DOT (xcDOT) are a wrapped representation of the original DOT being held in Moonbeam's sovereign account on Polkadot. xcDOT can be transferred within Moonbeam at any time, and they can be redeemed for DOT on a 1:1 basis as well.

Alith deposited her xcDOT in a liquidity pool. Next, Charleth acquires some xcDOT by swapping against that liquidity pool, and he wants to transfer some xcDOT to Charley's Polkadot account. Therefore, he initiates an XCM that expresses his intentions.

Consequently, the XCM message execution on Moonbeam will burn the number of xcDOT. Once the assets are burned, the second part of the message is sent to Polkadot.

Polkadot will execute the action the XCM message is programmed to do locally. In this case, it is to transfer the same amount of xcDOT burned from the Moonbeam sovereign account to the account defined by Charleth, which in this case is Charley.

 <p align="center">
  <img src="https://docs.moonbeam.network/images/builders/interoperability/xcm/overview/overview-6.png" />
</p>

### Data perspective

[See VMP XCM transfers on moonbeam](https://moonbeam.subscan.io/xcm_transfer?address=&fromChain=all&toChain=all&startDate=&endDate=&startBlock=&endBlock=&timeType=date&result=all&protocol=VMP&filterParaId=)

#### DMP

For [this example of DMP](https://polkadot.subscan.io/xcm_message/polkadot-eccf1cbcbebc9d926571fe459ea8b6527d340657) we see that [Xcmpallet.Limited_reserve_transfer_assets extrinsic](https://polkadot.subscan.io/extrinsic/17168837-2?event=17168837-40) was called. In call args we can find:

Destination parachain - `2004` is Moonbeam parachain ID:

```
{
        "name": "dest",
        "type": "xcm:VersionedMultiLocation",
        "type_name": "Box<VersionedMultiLocation>",
        "value": {
            "V2": {
                "interior": {
                    "X1": {
                        "Parachain": 2004
                    }
                },
                "parents": 0
            }
        }
    }
```

Beneficiary account - funds are sent to account `0x0f82f8f91dd749334d4741cbbaabce79ffad6e48` on Moonbeam:

```
{
        "name": "beneficiary",
        "type": "xcm:VersionedMultiLocation",
        "type_name": "Box<VersionedMultiLocation>",
        "value": {
            "V2": {
                "interior": {
                    "X1": {
                        "AccountKey20": {
                            "key": "0x0f82f8f91dd749334d4741cbbaabce79ffad6e48",
                            "network": {
                                "Any": "NULL"
                            }
                        }
                    }
                },
                "parents": 0
            }
        }
    }
```

Information on asset - 467.63 DOT is sent:

```
{
        "name": "assets",
        "type": "xcm:VersionedMultiAssets",
        "type_name": "Box<VersionedMultiAssets>",
        "value": {
            "V2": [
                {
                    "fun": {
                        "Fungible": "4676300000000"
                    },
                    "id": {
                        "Concrete": {
                            "interior": {
                                "Here": "NULL"
                            },
                            "parents": 0
                        }
                    }
                }
            ]
        }
    }
```

On Moonbeam side [Parachainsystem.Set_validation_data extrinsic](https://moonbeam.subscan.io/extrinsic/4374412-0?event=4374412-4) is executed in each block which emits events related to XCM messages processing.

#### UMP

For [this example of UMP](https://moonbeam.subscan.io/xcm_message/polkadot-3149aefa81b3659beea433dea5077f7ef9bd9dc9) we see that [Ethrereum.Transact](https://moonbeam.subscan.io/extrinsic/4374215-6) was called which means that user called special XTokens precompiled contract on addrress `0x0000000000000000000000000000000000000804`. His assets were burned and sent to Polkadot. All information about this XCM transfer can be found in [xtokens.TransferMultiAssets](https://moonbeam.subscan.io/extrinsic/4374215-6?event=4374215-46) event args and [parachainsystem.UpwardMessageSent](https://moonbeam.subscan.io/extrinsic/4374215-6?event=4374215-47) event args. On polkadot side we can find information in [this event](https://polkadot.subscan.io/extrinsic/17168443-0?event=17168443-3) that XCM message was succesfully processed.

## Example - XCMP (HRMP)

As Moonbeam is a parachain within the Polkadot ecosystem, XCM + XCMP allows asset transfers from/to Moonbeam and other parachains.

The first requirement is that a channel between the parachains must exist, and the asset being transferred must be registered in the target parachain. Only when both conditions are met can XCMs be sent between parachains.

Then, when Alith (Moonbeam) transfers a certain amount of GLMR from Moonbeam to another account (Alice) in a target parachain, tokens are sent to a sovereign Account owned by that target parachain on Moonbeam.

As the XCM message is executed in the target parachain, it is expected that this will mint and transfer the same amount of xcGLMR (cross-chain GLMR) to the account defined by Alith, which in this case is Alice. The fee to execute the XCM in the target parachain is paid in the transferred asset (xcGLMR for this example).

 <p align="center">
  <img src="https://docs.moonbeam.network/images/builders/interoperability/xcm/overview/overview-7.png" />
</p>

As explained in the previous section, the process is similar for xcGLMR to move back to Moonbeam. First, the XCM message execution burns the number of xcGLMR returned to Moonbeam. Once burned, the remnant part of the message is sent to Moonbeam via the relay chain. Moonbeam will locally execute the XCM message's, and transfer GLMR (the same amount of burned xcGLMR) from the target parachain sovereign account to the specified address.

### Data perspective

[Example of HRMP](https://moonbeam.subscan.io/xcm_message/polkadot-c5899ed9a87c0040003a60536f7bf69e48d89266)
