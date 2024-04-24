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

export const Transaction = new Table(
  "transaction.parquet",
  {
    id: Column(Types.String()),
    blockHash: Column(Types.String()),
    timestamp: Column(Types.Timestamp()),
    hash: Column(Types.String()),
    type: Column(Types.String(), {
      nullable: true,
    }),
    from: Column(Types.String()),
    to: Column(Types.String(), {
      nullable: true,
    }),
    fee: Column(Types.String(), {
      nullable: true,
    }),
    value: Column(Types.String()),
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

export const FtTransfer = new Table(
  "ft_transfer.parquet",
  {
    id: Column(Types.String()),
    transaction: Column(Types.String(), {
      nullable: true,
    }),
    blockHash: Column(Types.String()),
    timestamp: Column(Types.Timestamp()),
    eventIndex: Column(Types.Uint32(), {
      nullable: true,
    }),
    from: Column(Types.String()),
    to: Column(Types.String()),
    value: Column(Types.String()),
    transferType: Column(Types.String(), {
      nullable: true,
    }),
    token: Column(Types.String(), {
      nullable: true,
    }),
  },
  { compression: compression }
);
