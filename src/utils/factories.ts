import * as ethers from "ethers";
import {
  Block as _BlockHeader,
  Transaction as _Transaction,
  Trace as _Trace,
  Log as _Log,
} from "./../processor";
import {
  TraceCreate,
  TraceReward,
  TraceCall,
  TraceSuicide,
  Transaction,
  Contract,
  FtTransfer,
  FToken,
} from "./../interfaces/models";
import {
  convertToTransactionType,
  calculateFee,
  getTransferType,
  getDecoratedCallResult,
} from "./../utils/utils";
import { TraceTree } from "./../utils/trace";
import { CommonTraceFields } from "./../interfaces/models";

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

function createCommonTraceFields(
  block: _BlockHeader,
  trc: _Trace,
  traceTree: TraceTree
): CommonTraceFields {
  if (!trc.transaction) {
    throw new Error(
      `Transaction is undefined in trace object. trace: ${JSON.stringify(trc)}`
    );
  }

  return {
    id: `${trc.transaction.id}_${trc.traceAddress.join("_")}`,
    transaction: trc.transaction.id,
    timestamp: new Date(block.timestamp),
    transactionIndex: trc.transactionIndex,
    subtraces: trc.subtraces,
    error: trc.error,
    parentHasError:
      trc.traceAddress.length === 0 ? null : traceTree.parentHasError(trc),
  };
}

export function createTraceCreate(
  block: _BlockHeader,
  trc: _Trace,
  traceTree: TraceTree
): TraceCreate {
  if (trc.type === "create") {
    const commonFields = createCommonTraceFields(block, trc, traceTree);
    return {
      ...commonFields,
      from: ethers.getAddress(trc.action.from),
      value: trc.action.value.toString(),
      gas: trc.action.gas.toString(),
      init: trc.action.init,
      gasUsed: trc.result?.gasUsed.toString(),
      code: trc.result?.code,
      address: trc.result?.address
        ? ethers.getAddress(trc.result.address)
        : undefined,
    };
  } else {
    throw new Error(
      `Expected 'create' trace type, but received '${trc.type}'.`
    );
  }
}

export function createTraceCall(
  block: _BlockHeader,
  trc: _Trace,
  traceTree: TraceTree
): TraceCall {
  if (trc.type === "call") {
    const commonFields = createCommonTraceFields(block, trc, traceTree);
    return {
      ...commonFields,
      from: ethers.getAddress(trc.action.from),
      to: ethers.getAddress(trc.action.to),
      value: trc.action.value?.toString(),
      gas: trc.action.gas.toString(),
      sighash: trc.action.sighash,
      input: trc.action.input,
      gasUsed: trc.result?.gasUsed.toString(),
      output: trc.result?.output,
    };
  } else {
    throw new Error(`Expected 'call' trace type, but received '${trc.type}'.`);
  }
}

export function createTraceSuicide(
  block: _BlockHeader,
  trc: _Trace,
  traceTree: TraceTree
): TraceSuicide {
  if (trc.type === "suicide") {
    const commonFields = createCommonTraceFields(block, trc, traceTree);
    return {
      ...commonFields,
      address: ethers.getAddress(trc.action.address),
      refundAddress: ethers.getAddress(trc.action.refundAddress),
      balance: trc.action.balance.toString(),
    };
  } else {
    throw new Error(
      `Expected 'suicide' trace type, but received '${trc.type}'.`
    );
  }
}

export function createTraceReward(
  block: _BlockHeader,
  trc: _Trace,
  traceTree: TraceTree
): TraceReward {
  if (trc.type === "reward") {
    const commonFields = createCommonTraceFields(block, trc, traceTree);
    return {
      ...commonFields,
      author: ethers.getAddress(trc.action.author),
      value: trc.action.value.toString(),
      rewardType: trc.action.type,
    };
  } else {
    throw new Error(
      `Expected 'reward' trace type, but received '${trc.type}'.`
    );
  }
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

export function createFToken(
  id: string,
  name?: string,
  symbol?: string,
  decimals?: number
): FToken {
  return {
    id: ethers.getAddress(id),
    name: name ? getDecoratedCallResult(name) : null,
    symbol: symbol ? getDecoratedCallResult(symbol) : null,
    decimals: decimals ?? null,
  };
}
