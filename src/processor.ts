import { lookupArchive } from "@subsquid/archive-registry";
import * as ss58 from "@subsquid/ss58";
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from "@subsquid/substrate-processor";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import {
  Account,
  Transfer,
  Event,
  Block,
  Call,
  Extrinsic,
  Metadata,
} from "./model";
import { MetadataResponse } from "./interfaces/gql-interfaces";
import {
  GraphqlRequest,
  graphqlRequest,
} from "@subsquid/util-internal-gql-request";

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    chain: "wss://ws.test.azero.dev",
    archive: lookupArchive("aleph-zero-testnet", { release: "FireSquid" }),
  })
  .addEvent("*", {
    data: {
      event: true,
    },
  })
  .addCall("*", {
    data: {
      call: true,
      extrinsic: true,
    },
  } as const);

type Item = BatchProcessorItem<typeof processor>;
type Ctx = BatchContext<Store, Item>;

let events: Event[] = [];
let extrinsics: Extrinsic[] = [];
let calls: Call[] = [];
let metadata: Metadata[] = [];
let blocks: Block[] = [];

const metadataRequest: GraphqlRequest = {
  url: "https://aleph-zero-testnet.archive.subsquid.io/graphql",
  query:
    "query MyQuery { metadata { blockHash blockHeight id specName specVersion hex}}",
  retry: true,
};
let metadataInitialized = false;

processor.run(new TypeormDatabase(), async (ctx) => {
  if (!metadataInitialized) {
    ctx.log.info("Initizalizing metadata");
    const metadataResponse: MetadataResponse = await graphqlRequest(
      metadataRequest
    );
    metadata = metadataResponse["metadata"].map(
      (m) =>
        new Metadata({
          id: m.id,
          specName: m.specName,
          specVersion: m.specVersion,
          blockHeight: m.blockHeight,
          blockHash: m.blockHash,
          hex: m.hex,
        })
    );
    await ctx.store.insert(metadata);
    metadataInitialized = true;
  }

  for (let block of ctx.blocks) {
    let metadataInstance = metadata.find((m) => m.id === block.header.specId);
    let blockOrm = new Block({
      id: block.header.id,
      height: block.header.height,
      hash: block.header.hash,
      parentHash: block.header.parentHash,
      timestamp: new Date(block.header.timestamp),
      validator: block.header.validator,
      stateRoot: block.header.stateRoot,
      extrinsicsRoot: block.header.extrinsicsRoot,
      spec: metadataInstance,
    });
    blocks.push(blockOrm);
    for (let item of block.items) {
      if (item.kind === "event") {
        ctx.log.info(item);
        let extrinsic = undefined;
        if (item.event.extrinsic) {
          extrinsic = new Extrinsic({
            id: item.event.extrinsic?.id,
            block: blockOrm,
            indexInBlock: item.event.extrinsic?.indexInBlock,
            version: item.event.extrinsic?.version,
            signature: item.event.extrinsic?.signature,
            success: item.event.extrinsic?.success,
            error: item.event.extrinsic?.error,
            fee: item.event.extrinsic?.fee,
            tip: item.event.extrinsic?.tip,
            hash: item.event.extrinsic?.hash,
            pos: item.event.extrinsic?.pos,
          });
          extrinsics.push(extrinsic);
        }
        let call = undefined;
        if (item.event.call) {
          call = new Call({
            id: item.event.call?.id,
            block: blockOrm,
            extrinsic: extrinsic,
            success: item.event.call?.success,
            error: item.event.call?.error,
            origin: item.event.call?.origin,
            name: item.event.call?.name,
            args: item.event.call?.args,
            pos: item.event.call?.pos,
          });
          calls.push(call);
        }
        events.push(
          new Event({
            id: item.event.id,
            block: blockOrm,
            indexInBlock: item.event.indexInBlock,
            phase: item.event.phase,
            extrinsic: extrinsic,
            call: call,
            name: item.event.name,
            args: item.event.args,
            pos: item.event.pos,
          })
        );
      } else if (item.kind === "call") {
        ctx.log.info(item);
        let extrinsic = new Extrinsic({
          id: item.extrinsic?.id,
          block: blockOrm,
          indexInBlock: item.extrinsic?.indexInBlock,
          version: item.extrinsic?.version,
          signature: item.extrinsic?.signature,
          success: item.extrinsic?.success,
          error: item.extrinsic?.error,
          fee: item.extrinsic?.fee,
          tip: item.extrinsic?.tip,
          hash: item.extrinsic?.hash,
          pos: item.extrinsic?.pos,
        });
        extrinsics.push(extrinsic);
        let call = new Call({
          id: item.call.id,
          block: blockOrm,
          extrinsic: extrinsic,
          success: item.call.success,
          error: item.call.error,
          origin: item.call.origin,
          name: item.call.name,
          args: item.call.args,
          pos: item.call.pos,
        });
        calls.push(call);
      }
    }
  }

  await ctx.store.save(removeDuplicates(blocks, "id"));
  await ctx.store.save(removeDuplicates(extrinsics, "id"));
  await ctx.store.save(removeDuplicates(calls, "id"));
  await ctx.store.save(removeDuplicates(events, "id"));
});

function removeDuplicates<T>(items: T[], key: keyof T): T[] {
  const seen = new Set();
  const filtered = items.filter((i) => {
    const duplicate = seen.has(i[key]);
    seen.add(i[key]);
    return !duplicate;
  });
  return filtered;
}
