import { Store } from "@subsquid/typeorm-store";
import { In } from "typeorm";
import { ProcessorContext } from "../processor";
import { FToken } from "../model";
import { Multicall } from "../abi/multicall";
import * as erc20Abi from "../abi/erc20";
import { createFToken } from "../utils/factories";

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
      "0x2c6ca2C92e208E7f7459eC4C911e329Ab90eCED5"
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

    return createFToken(id, name, symbol, decimals);
  });
}
