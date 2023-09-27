Mantle, Arbitrum, Optimism, Polygon, Fantom - EVM-compatible, can be indexed with squid

SUI - There is a sui indexer in `crates`, might want to start there

Kadena - https://github.com/kadena-io/chainweb-data

Chiliz - it's EVM-compatible but not officially supported by subsquid (directly from RPC?)

Arwaeve - you could look into using goldsky. i believe they have paid plans also, if you want to run your own indexer, take a look at the ARio gateway nodes, you need to switch on indexing bundles, it doesn't do that out of the box: https://github.com/ar-io/ar-io-node/, https://www.dataos.so/, https://www.indexed.xyz/#arweave/transactions

Kaspa - https://docker.kaspa.org/

Radix - I haven't set it up myself, but I know a few community members setup a gateway node that listens to the network and then you can either pull or listen do database changes. Read more about nodes here: https://docs-babylon.radixdlt.com/main/node-and-gateway/software-introduction.html

Aptos - https://aptos.dev/indexer/indexer-landing

Casper - https://github.com/a3mc/Casper-Metrics block explorer, frontend: https://github.com/casper-network/casper-blockexplorer-frontend, middleware: https://github.com/casper-network/casper-blockexplorer-middleware

### Kaspa

[Docker compose](https://docker.kaspa.org/)

### SUI

[Sui indexer in crates](https://github.com/MystenLabs/sui/tree/main/crates/sui-indexer)

[Sui indexer dockerized](https://github.com/MystenLabs/sui/tree/main/docker/sui-indexer)

After building image run docker compose:

```yaml
version: "3.8"

services:
  sui-indexer:
    image: sui-indexer:latest
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgres://postgres:postgres@db:5432/sui_indexer
      - RPC_CLIENT_URL=https://fullnode.devnet.sui.io:443
    command:
      - "/usr/local/bin/sui-indexer"
      - "--db-url"
      - "postgres://postgres:postgres@db:5432/sui_indexer"
      - "--rpc-client-url"
      - "https://fullnode.devnet.sui.io:443"
      - "--reset-db"
      - "--fullnode-sync-worker"

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=sui_indexer
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    volumes:
      - db_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  db_data:
```
