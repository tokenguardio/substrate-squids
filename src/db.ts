import { S3Dest } from "@subsquid/file-store-s3";
import { Database, LocalDest, Store } from "@subsquid/file-store";
import { assertNotNull } from "@subsquid/util-internal";
import { Transaction, Block, FtTransfer } from "./tables";

export const db = new Database({
  tables: {
    Transaction,
    Block,
    FtTransfer,
  },
  dest:
    process.env.DEST === "S3"
      ? new S3Dest(assertNotNull(process.env.S3_URL), {
          region: process.env.S3_REGION,
          endpoint: process.env.S3_ENDPOINT,
          credentials: {
            accessKeyId: assertNotNull(process.env.S3_ACCESS_KEY_ID),
            secretAccessKey: assertNotNull(process.env.S3_SECRET_ACCESS_KEY),
          },
        })
      : new LocalDest("./data"),
  chunkSizeMb: process.env.CHUNK_SIZE_MB
    ? Number(process.env.CHUNK_SIZE_MB)
    : undefined,
});

export type Store_ = typeof db extends Database<infer R, any>
  ? Store<R>
  : never;
