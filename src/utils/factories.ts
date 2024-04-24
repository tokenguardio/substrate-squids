import * as ethers from "ethers";
import {
  Block as _BlockHeader,
  Transaction as _Transaction,
  Trace as _Trace,
  Log as _Log,
} from "./../processor";
import { Transaction, FtTransfer, Block } from "./../interfaces/models";
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
