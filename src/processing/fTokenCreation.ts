import { Store } from "@subsquid/typeorm-store";
import { In } from "typeorm";
import { ProcessorContext } from "../processor";
import { FToken } from "../model";
import { Multicall } from "../abi/multicall";
import * as erc20Abi from "../abi/erc20";
import { getDecoratedCallResult } from "../utils/utils";

const MULTICALL_CONTRACT = "0x5e1ee626420a354bbc9a95fea1bad4492e3bcb86";
const MULTICALL_BATCH_SIZE = 100;

export async function createNewFTokens(
  tokenIds: Set<string>,
  ctx: ProcessorContext<Store>
): Promise<FToken[]> {
  const tokenIdsFromDb = await fetchTokensFromDb(ctx, tokenIds);
  const newTokenIds = [...tokenIds].filter((id) => !tokenIdsFromDb.has(id));

  if (newTokenIds.length === 0) {
    return [];
  }

  const nameResults = await performMulticall(
    ctx,
    erc20Abi.functions.name,
    newTokenIds
  );
  const symbolResults = await performMulticall(
    ctx,
    erc20Abi.functions.symbol,
    newTokenIds
  );
  const decimalsResults = await performMulticall(
    ctx,
    erc20Abi.functions.decimals,
    newTokenIds
  );

  return createFTokens(
    newTokenIds,
    nameResults,
    symbolResults,
    decimalsResults
  );
}

async function fetchTokensFromDb(
  ctx: ProcessorContext<Store>,
  tokenIds: Set<string>
): Promise<Set<string>> {
  const tokensInDb: FToken[] = await ctx.store.findBy(FToken, {
    id: In([...tokenIds]),
  });
  return new Set(tokensInDb.map((token) => token.id));
}

async function performMulticall(
  ctx: ProcessorContext<Store>,
  contractFunction: any,
  addresses: string[]
): Promise<any[]> {
  const lastBlock = ctx.blocks[ctx.blocks.length - 1];
  const multicall = new Multicall(
    ctx,
    lastBlock.header,
    process.env.MULTICALL_CONTRACT ??
      "0x5e1ee626420a354bbc9a95fea1bad4492e3bcb86"
  );
  return await multicall.tryAggregate(
    contractFunction,
    addresses.map((address) => [address, [] as any[]] as [string, any[]]),
    parseInt(process.env.MULTICALL_BATCH_SIZE ?? "100")
  );
}

function createFTokens(
  tokenIds: string[],
  nameResults: any[],
  symbolResults: any[],
  decimalsResults: any[]
): FToken[] {
  return tokenIds.map((id, index) => {
    const name = nameResults[index].success ? nameResults[index].value : null;
    const symbol = symbolResults[index].success
      ? symbolResults[index].value
      : null;
    const decimals = decimalsResults[index].success
      ? decimalsResults[index].value
      : null;

    return new FToken({
      id,
      name: getDecoratedCallResult(name),
      symbol: getDecoratedCallResult(symbol),
      decimals,
    });
  });
}
