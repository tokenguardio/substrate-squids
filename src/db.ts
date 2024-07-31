import { S3Dest } from "@subsquid/file-store-s3";
import { Database, LocalDest, Store } from "@subsquid/file-store";
import { assertNotNull } from "@subsquid/util-internal";
import { Block, EventNorm, CallNorm, SubstrateTransaction } from "./tables";
import { getEnvNumber } from "./utils/misc";

export const db = new Database({
  tables: {
    Block,
    EventNorm,
    CallNorm,
    SubstrateTransaction,
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
  chunkSizeMb: getEnvNumber(process.env.CHUNK_SIZE_MB),
});

export type Store_ = typeof db extends Database<infer R, any>
  ? Store<R>
  : never;
