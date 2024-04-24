import {
  Table,
  Column,
  Types,
  Compression,
} from "@subsquid/file-store-parquet";

const compression: Compression | undefined = process.env.COMPRESSION as
  | Compression
  | undefined;

export const Block = new Table(
  "block.parquet",
  {
    id: Column(Types.String()),
    hash: Column(Types.String()),
    height: Column(Types.Uint64()),
    timestamp: Column(Types.Timestamp()),
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
    value: Column(Types.String(), {
      nullable: true,
    }),
    gas: Column(Types.String(), {
      nullable: true,
    }),
    init: Column(Types.String(), {
      nullable: true,
    }),
    gasUsed: Column(Types.String(), {
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
    to: Column(Types.String()),
    value: Column(Types.String(), {
      nullable: true,
    }),
    gas: Column(Types.String(), {
      nullable: true,
    }),
    sighash: Column(Types.String(), {
      nullable: true,
    }),
    input: Column(Types.String(), {
      nullable: true,
    }),
    gasUsed: Column(Types.String(), {
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
    subtraces: Column(Types.Uint32(), {
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
    balance: Column(Types.String(), {
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
    subtraces: Column(Types.Uint32(), {
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
    value: Column(Types.String(), {
      nullable: true,
    }),
    rewardType: Column(Types.String(), {
      nullable: true,
    }),
  },
  { compression: compression }
);
