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
} from "./../model";
import {
  convertToTransactionType,
  calculateFee,
  getTransferType,
} from "./../utils/utils";
import { TraceTree } from "./../utils/trace";
import { CommonTraceFields } from "./../interfaces/main";

export function createTransaction(
  block: _BlockHeader,
  txn: _Transaction
): Transaction {
  return new Transaction({
    id: txn.id,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    hash: txn.hash,
    type:
      txn.type !== undefined ? convertToTransactionType(txn.type) : undefined,
    from: txn.from,
    to: txn.to,
    fee:
      txn.gasUsed !== undefined && txn.effectiveGasPrice !== undefined
        ? calculateFee(txn.effectiveGasPrice, txn.gasUsed)
        : undefined,
    value: txn.value,
    input: txn.input,
    deployedAddress: txn.contractAddress,
    success: txn.status !== undefined ? Boolean(txn.status) : undefined,
    sighash: txn.sighash,
    transactionIndex: txn.transactionIndex,
  });
}

function createCommonTraceFields(
  block: _BlockHeader,
  trc: _Trace,
  traceTree: TraceTree
): CommonTraceFields {
  return {
    id: trc.transaction
      ? `${trc.transaction.id}_${trc.traceAddress.join("_")}`
      : "",
    transaction: trc.transaction
      ? createTransaction(block, trc.transaction)
      : undefined,
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
    return new TraceCreate({
      ...commonFields,
      from: trc.action.from,
      value: trc.action.value,
      gas: trc.action.gas,
      init: trc.action.init,
      gasUsed: trc.result?.gasUsed,
      code: trc.result?.code,
      address: trc.result?.address,
    });
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
    return new TraceCall({
      ...commonFields,
      from: trc.action.from,
      to: trc.action.to,
      value: trc.action.value,
      gas: trc.action.gas,
      sighash: trc.action.sighash,
      input: trc.action.input,
      gasUsed: trc.result?.gasUsed,
      output: trc.result?.output,
    });
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
    return new TraceSuicide({
      ...commonFields,
      address: trc.action.address,
      refundAddress: trc.action.refundAddress,
      balance: trc.action.balance,
    });
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
    return new TraceReward({
      ...commonFields,
      author: trc.action.author,
      value: trc.action.value,
      rewardType: trc.action.type,
    });
  } else {
    throw new Error(
      `Expected 'reward' trace type, but received '${trc.type}'.`
    );
  }
}

export function createNewContract(block: _BlockHeader, trc: _Trace): Contract {
  if (trc.type === "create") {
    return new Contract({
      id: trc.result?.address,
      createdBy: trc.action.from,
      createTransaction: trc.transaction
        ? new Transaction({ id: trc.transaction.id })
        : undefined,
      createTimestamp: new Date(block.timestamp),
      destroyTimestamp: null,
      destroyTransaction: null,
    });
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
    return new Contract({
      id: trc.action.address,
      destroyTransaction: trc.transaction
        ? new Transaction({ id: trc.transaction.id })
        : undefined,
      destroyTimestamp: new Date(block.timestamp),
    });
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
  return new FtTransfer({
    id: log.id,
    transaction: log.transaction
      ? new Transaction({ id: log.transaction.id })
      : undefined,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp),
    eventIndex: log.logIndex,
    from: from,
    to: to,
    value: value,
    transferType: getTransferType(from, to),
    token: new FToken({ id: log.address }),
  });
}
