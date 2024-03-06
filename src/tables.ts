import {
  Table,
  Column,
  Types,
  Compression,
} from "@subsquid/file-store-parquet";

const compression: Compression | undefined = process.env.COMPRESSION as
  | Compression
  | undefined;

export const Transaction = new Table(
  "transaction.parquet",
  {
    id: Column(Types.String()),
    blockHash: Column(Types.String()),
    timestamp: Column(Types.Timestamp()),
    hash: Column(Types.String()),
    type: Column(Types.String()),
    label: Column(Types.String(), {
      nullable: true,
    }),
    from: Column(Types.String()),
    to: Column(Types.String(), {
      nullable: true,
    }),
    fee: Column(Types.Decimal(78, 0)),
    value: Column(Types.Decimal(78, 0)),
    input: Column(Types.String()),
    deployedAddress: Column(Types.String(), {
      nullable: true,
    }),
    success: Column(Types.Boolean(), {
      nullable: true,
    }),
    sighash: Column(Types.String(), {
      nullable: true,
    }),
    transactionIndex: Column(Types.Uint32()),
  },
  { compression: compression }
);

export const Contract = new Table(
  "contract.parquet",
  {
    id: Column(Types.String()),
    createdBy: Column(Types.String(), {
      nullable: true,
    }),
    createTransaction: Column(Types.String(), {
      nullable: true,
    }),
    createTimestamp: Column(Types.Timestamp(), {
      nullable: true,
    }),
    destroyTransaction: Column(Types.String(), {
      nullable: true,
    }),
    destroyTimestamp: Column(Types.Timestamp(), {
      nullable: true,
    }),
  },
  { compression: compression }
);

export const TraceCreate = new Table(
  "trace_create.parquet",
  {
    id: Column(Types.String()),
    transaction: Column(Types.String()),
    timestamp: Column(Types.Timestamp()),
    subtraces: Column(Types.Uint32(), {
      nullable: true,
    }),
    error: Column(Types.String(), {
      nullable: true,
    }),
    parentHasError: Column(Types.Boolean(), {
      nullable: true,
    }),
    from: Column(Types.String()),
    fromType: Column(Types.String(), {
      nullable: true,
    }),
    value: Column(Types.Decimal(78, 0), {
      nullable: true,
    }),
    gas: Column(Types.Decimal(78, 0), {
      nullable: true,
    }),
    init: Column(Types.String(), {
      nullable: true,
    }),
    gasUsed: Column(Types.Decimal(78, 0), {
      nullable: true,
    }),
    code: Column(Types.String(), {
      nullable: true,
    }),
    address: Column(Types.String(), {
      nullable: true,
    }),
  },
  { compression: compression }
);

export const TraceCall = new Table(
  "trace_call.parquet",
  {
    id: Column(Types.String()),
    transaction: Column(Types.String()),
    timestamp: Column(Types.Timestamp()),
    subtraces: Column(Types.Int32(), {
      nullable: true,
    }),
    error: Column(Types.String(), {
      nullable: true,
    }),
    parentHasError: Column(Types.Boolean(), {
      nullable: true,
    }),
    from: Column(Types.String()),
    fromType: Column(Types.String(), {
      nullable: true,
    }),
    to: Column(Types.String()),
    toType: Column(Types.String(), {
      nullable: true,
    }),
    value: Column(Types.Decimal(78, 0), {
      nullable: true,
    }),
    gas: Column(Types.Decimal(78, 0), {
      nullable: true,
    }),
    sighash: Column(Types.String(), {
      nullable: true,
    }),
    input: Column(Types.String(), {
      nullable: true,
    }),
    gasUsed: Column(Types.Decimal(78, 0), {
      nullable: true,
    }),
    output: Column(Types.String(), {
      nullable: true,
    }),
  },
  { compression: compression }
);

export const TraceSuicide = new Table(
  "trace_suicide.parquet",
  {
    id: Column(Types.String()),
    transaction: Column(Types.String()),
    timestamp: Column(Types.Timestamp()),
    subtraces: Column(Types.Int32(), {
      nullable: true,
    }),
    error: Column(Types.String(), {
      nullable: true,
    }),
    parentHasError: Column(Types.Boolean(), {
      nullable: true,
    }),
    address: Column(Types.String(), {
      nullable: true,
    }),
    refundAddress: Column(Types.String(), {
      nullable: true,
    }),
    balance: Column(Types.Decimal(78, 0), {
      nullable: true,
    }),
  },
  { compression: compression }
);

export const TraceReward = new Table(
  "trace_reward.parquet",
  {
    id: Column(Types.String()),
    transaction: Column(Types.String()),
    timestamp: Column(Types.Timestamp()),
    subtraces: Column(Types.Int32(), {
      nullable: true,
    }),
    error: Column(Types.String(), {
      nullable: true,
    }),
    parentHasError: Column(Types.Boolean(), {
      nullable: true,
    }),
    author: Column(Types.String(), {
      nullable: true,
    }),
    value: Column(Types.Decimal(78, 0), {
      nullable: true,
    }),
    rewardType: Column(Types.String(), {
      nullable: true,
    }),
  },
  { compression: compression }
);

export const FToken = new Table(
  "f_token.parquet",
  {
    id: Column(Types.String()),
    name: Column(Types.String(), {
      nullable: true,
    }),
    symbol: Column(Types.String(), {
      nullable: true,
    }),
    decimals: Column(Types.Int32(), {
      nullable: true,
    }),
  },
  { compression: compression }
);

export const FtTransfer = new Table(
  "ft_transfer.parquet",
  {
    id: Column(Types.String()),
    transaction: Column(Types.String()),
    blockHash: Column(Types.String()),
    timestamp: Column(Types.Timestamp()),
    eventIndex: Column(Types.Int32(), {
      nullable: true,
    }),
    from: Column(Types.String()),
    to: Column(Types.String()),
    value: Column(Types.Decimal(78, 0)),
    transferType: Column(Types.String(), {
      nullable: true,
    }),
    token: Column(Types.String(), {
      nullable: true,
    }),
  },
  { compression: compression }
);
