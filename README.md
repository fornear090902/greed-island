# Greed Island（仮）プロジェクト

[システム構成](./docs/system.md)

## Prerequired
- Docker および docker compose 環境

## Getting Started

### 1. Create secret key connetting mongodb replication
```sh
$ openssl rand -base64 756 > mongo/mongod-keyfile
$ sudo chmod 600 mongo/mongod-keyfile
$ sudo chown 999 mongo/mongod-keyfile
```

### 2. Get .env from owner and place to `src/greed-island/.env`

### 3. Create Docker Container
```sh
$ docker compose build && docker compose up -d
```

### 4. Activate mongodb replication
```sh
$ docker compose exec mongo-primary mongosh admin -u root -p root /docker-entrypoint-initdb.d/init.js
```

### 5. Start Greed Island App!
```sh
$ docker compose exec node bash

(in the node container shell)
$ cd /app/src/greed-island
$ yarn install
$ yarn migrate
$ yarn dev
```

## Reference

- [ツール構成参考](https://coinsbench.com/building-a-full-stack-nft-minting-dapp-using-hardhat-ethers-js-next-js-and-tailwindcss-4d1051a8140d)