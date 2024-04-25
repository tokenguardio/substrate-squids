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
