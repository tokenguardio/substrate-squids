# Instructions on how to develop squid for a new chain

Instructions on how to develop squid that will index choosen events and calls and normalize their arguments.

## Summary

- [Instructions on how to develop squid for a new chain](#instructions-on-how-to-develop-squid-for-a-new-chain)
  - [Summary](#summary)
  - [Flow](#flow)
    - [1. Create new branch from template on main](#1-create-new-branch-from-template-on-main)
    - [2. Generate typings](#2-generate-typings)
    - [3. Generate mapping templates (optional)](#3-generate-mapping-templates-optional)
    - [4. Add mappings](#4-add-mappings)
    - [5. Change processor logic](#5-change-processor-logic)
    - [6. Update Github workflow](#6-update-github-workflow)

## Flow

### 1. Create new branch from template on main

You can use code from main branch as a template. It contains mappings and processor logic for `reef-mainnet` as an example. Create new branch from main and name it using the following format: `{chainName}-{mainnet|testnet}`.

### 2. Generate typings

[Squid Substrate typegen docs](https://docs.subsquid.io/substrate-indexing/squid-substrate-typegen/)

TypeScript interface classes for Substrate events and calls need to be generated in order to create mappings.

If archive is hosted in [Subsquid public archives](https://app.subsquid.io/archives) the easiest way is just to take the archive url and set it in the `typegen.json`.

```json
{
  "outDir": "src/types",
  "specVersions": "https://reef.archive.subsquid.io/graphql",
  "events": true,
  "calls": true,
  "storage": []
}
```

However, when public archive is not available or for some reason you don't want to use it and download the file with versions locally you can download spec versions via `squid-substrate-metadata-explorer` tool. You will need chain RPC websocket URL.

```bash
# Explore the chain (may take some time)
npx squid-substrate-metadata-explorer \
  --chain wss://rpc.reefscan.com/ws \
  --out reefSpecVersions.jsonl

# Download spec versions from archive
npx squid-substrate-metadata-explorer \
  --archive https://reef.archive.subsquid.io/graphql \
  --out reefSpecVersions.jsonl
```

When download is successfull you set file in `typegen.json` like this:

```json
{
  "outDir": "src/types",
  "specVersions": "reefSpecVersions.jsonl",
  "events": true,
  "calls": true,
  "storage": []
}
```

Note that if the chain ever used pre-V14 metadata versions it requires type bundle to be compatible with Squid.

Generally if type bundle is needed for given chain it should be available _somewhere_ - for example provided by chain creators or community.

[Where do I get a type bundle for my chain?](https://docs.subsquid.io/troubleshooting/#where-do-i-get-a-type-bundle-for-my-chain)

Example: `azero-mainnet` needs types bundle. After getting it you need to provide it in `typegen.json` like this:

```json
{
  "outDir": "src/types",
  "specVersions": "azeroSpecVersions.jsonl",
  "typesBundle": "typesBundle.json",
  "events": true,
  "calls": true,
  "storage": []
}
```

Sometimes in the absence of public archive getting `chainSpecVersions.jsonl` may not be easy (e.g. `substrate-metadata-explorer` can error before it downloads the whole file). In some cases you can find existing squid repositories with needed files. For example Zeitgeist has it own squid in public repository where you can find [the versions file](https://github.com/zeitgeistpm/zeitgeist-subsquid/blob/main/zeitgeistVersions.jsonl).

After configuring `typegen.json` file you can finally run:

```bash
make typegen
```

It will generate types in `src/types/` folder.

### 3. Generate mapping templates (optional)

We are currently interested in events from pallets: `Balances`, `Staking`, `System`, `Contracts` and in calls from pallet `Contracts`. Arguments from these events and calls need to be normalized across their versions.

There is a bit of repetitive writing when doing that but you can automate this to some extent using `mapping-generator`.

`src/tools/mapping-generator.ts` is a simple helper script that can be used to create templates for mappings. It reads from previously generated `types/events.ts` and `types/calls.ts` and creates template files with mappings for pallets that are specified.

To use it provide pallet names in the constructor in `mapping-generator.ts` file:

```typescript
const eventMappingGenerator = new MappingGenerator(
  "../types/events.ts",
  ["Balances.", "Staking.", "System.", "Contracts."],
  TransactionType.Event
);
eventMappingGenerator.generateMappings();

const callMappingGenerator = new MappingGenerator(
  "../types/calls.ts",
  ["Contracts."],
  TransactionType.Call
);
callMappingGenerator.generateMappings();
```

And run script with:

```bash
npx ts-node src/tools/mapping-generator.ts
```

It will create templates in `events/` and `calls/` directories in `tools/` directory. Format these files and put them into `mappings/` folder (after deleting mappings from reef example).

### 4. Add mappings

Arguments should be returned in a normalized dictionary format. Keyword names should be ones from the latest event/call version.

Some data (e.g. addresses, or contract code) in archives is stored in hex format but when getting it with wrapper getters (`asVXXX`) they are converted to `Uint8Array` (buffer array). They need to be converted back from buffer arrays to hex strings before they are stored in the database.

Example: changing array format to dictionary format:

```typescript
case "Balances.Deposit":
      e = new BalancesDepositEvent(ctx, event);
      if (e.isV5) {
        let [who, deposit] = e.asV5;
        return {
          who: bufferToHex(who),
          deposit,
        };
      } else {
        throw new UnknownEventVersionError(event.name);
      }
```

Sometimes when given version is the newest and already returns args in dictionary format using `asVXXX` is not needed and "raw" `event.args` can be returned - they are already in the correct format and you don't have to copy args and map buffer arrays to hex strings unnecessarily.

```typescript
case "Staking.Bonded":
      e = new StakingBondedEvent(ctx, event);
      if (e.isV12) {
        // array format - map this to dictionary
        let [stash, amount] = e.asV12;
        return {
          stash: bufferToHex(stash),
          amount,
        };
      } else if (e.isV45) {
        // it's already in correct format: {stash, amount}
        return event.args;
      } else {
        throw new UnknownVersionError(event.name);
      }
```

### 5. Change processor logic

You can check out `azero-testnet` for an example of processor that also handles calls.

### 6. Update Github workflow

In `.github/workflows/ecr-deploy.yaml` change `"branch"` string to correct branch name.

```yaml
name: Test build on PR and deploy to ECR on merge/push

on:
  push:
    branches: ["branch"]
  pull_request:
    branches: ["branch"]
  workflow_dispatch:

jobs:
  deploy:
    uses: tokenguardio/substrate-squids/.github/workflows/reusable-ecr-deploy.yaml@reusable-workflows
    secrets: inherit
```
