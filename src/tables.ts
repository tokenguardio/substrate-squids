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
    timestamp: Column(Types.Timestamp(), {
      nullable: true,
    }),
  },
  { compression: compression }
);

export const EventNorm = new Table(
  "event_norm.parquet",
  {
    id: Column(Types.String()),
    blockHash: Column(Types.String()),
    timestamp: Column(Types.Timestamp(), {
      nullable: true,
    }),
    name: Column(Types.String()),
    args: Column(Types.JSON<{ [k: string]: any }>(), {
      nullable: true,
    }),
    extrinsicSuccess: Column(Types.Boolean(), {
      nullable: true,
    }),
  },
  { compression: compression }
);

export const CallNorm = new Table(
  "call_norm.parquet",
  {
    id: Column(Types.String()),
    blockHash: Column(Types.String()),
    timestamp: Column(Types.Timestamp(), {
      nullable: true,
    }),
    name: Column(Types.String()),
    args: Column(Types.JSON<{ [k: string]: any }>(), {
      nullable: true,
    }),
    success: Column(Types.Boolean(), {
      nullable: true,
    }),
    origin: Column(Types.JSON<{ [k: string]: any }>(), {
      nullable: true,
    }),
  },
  { compression: compression }
);

export const SubstrateTransaction = new Table(
  "substrate_transaction.parquet",
  {
    id: Column(Types.String()),
    blockHash: Column(Types.String()),
    extrinsicHash: Column(Types.String()),
    timestamp: Column(Types.Timestamp(), {
      nullable: true,
    }),
    name: Column(Types.String()),
    args: Column(Types.JSON<{ [k: string]: any }>(), {
      nullable: true,
    }),
    label: Column(Types.String(), {
      nullable: true,
    }),
    fee: Column(Types.String(), {
      nullable: true,
    }),
    tip: Column(Types.String(), {
      nullable: true,
    }),
    from: Column(Types.String(), {
      nullable: true,
    }),
    to: Column(Types.String(), {
      nullable: true,
    }),
    success: Column(Types.Boolean()),
  },
  { compression: compression }
);

export const FtTransfer = new Table(
  "ft_transfer.parquet",
  {
    id: Column(Types.String()),
    substrateTransaction: Column(Types.String(), {
      nullable: true,
    }),
    blockHash: Column(Types.String()),
    timestamp: Column(Types.Timestamp(), {
      nullable: true,
    }),
    eventIndex: Column(Types.Uint32(), {
      nullable: true,
    }),
    from: Column(Types.String(), {
      nullable: true,
    }),
    to: Column(Types.String(), {
      nullable: true,
    }),
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
