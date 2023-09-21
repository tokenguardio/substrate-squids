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
