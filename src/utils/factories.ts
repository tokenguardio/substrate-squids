import * as ethers from "ethers";
import {
  Block as _BlockHeader,
  Transaction as _Transaction,
  Trace as _Trace,
  Log as _Log,
} from "./../processor";
import {
  Transaction,
  Contract,
  FtTransfer,
  Block,
} from "./../interfaces/models";
import {
  convertToTransactionType,
  calculateFee,
  getTransferType,
} from "./../utils/utils";

export function createTransaction(
  block: _BlockHeader,
  txn: _Transaction
): Transaction {
  return {
    id: txn.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    hash: txn.hash,
    type:
      txn.type !== undefined ? convertToTransactionType(txn.type) : undefined,
    from: ethers.getAddress(txn.from),
    to: txn.to ? ethers.getAddress(txn.to) : undefined,
    fee:
      txn.gasUsed !== undefined && txn.effectiveGasPrice !== undefined
        ? calculateFee(txn.effectiveGasPrice, txn.gasUsed).toString()
        : undefined,
    value: txn.value.toString(),
    input: txn.input,
    deployedAddress: txn.contractAddress
      ? ethers.getAddress(txn.contractAddress)
      : undefined,
    success: txn.status !== undefined ? Boolean(txn.status) : undefined,
    sighash: txn.sighash,
    transactionIndex: txn.transactionIndex,
  };
}

export function createNewContract(block: _BlockHeader, trc: _Trace): Contract {
  if (trc.type === "create") {
    if (!trc.result?.address) {
      throw new Error(
        `Contract address (id) in create trace is undefined. Unable to create Contract. Trace object: ${JSON.stringify(
          trc
        )}`
      );
    }
    return {
      id: ethers.getAddress(trc.result.address),
      createdBy: ethers.getAddress(trc.action.from),
      createTransaction: trc.transaction?.id,
      createTimestamp: new Date(block.timestamp),
      destroyTimestamp: null,
      destroyTransaction: null,
    };
  } else {
    throw new Error(
      `Expected 'create' trace type, but received '${trc.type}'.`
    );
  }
}

export function createDestroyedContract(
  block: _BlockHeader,
  trc: _Trace
): Contract {
  if (trc.type === "suicide") {
    return {
      id: ethers.getAddress(trc.action.address),
      destroyTransaction: trc.transaction?.id,
      destroyTimestamp: new Date(block.timestamp),
    };
  } else {
    throw new Error(
      `Expected 'suicide' trace type, but received '${trc.type}'.`
    );
  }
}

export function createFtTransfer(
  block: _BlockHeader,
  log: _Log,
  from: string,
  to: string,
  value: bigint
): FtTransfer {
  return {
    id: log.id,
    transaction: log.transaction?.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    eventIndex: log.logIndex,
    from: ethers.getAddress(from),
    to: ethers.getAddress(to),
    value: value.toString(),
    transferType: getTransferType(from, to),
    token: log.address,
  };
}

export function createBlock(block: _BlockHeader): Block {
  return {
    id: block.id,
    hash: block.hash,
    height: block.height,
    timestamp: new Date(block.timestamp),
  };
}
