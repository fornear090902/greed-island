# Greed Island（仮）プロジェクト

[システム構成](./docs/system.md)

## Prerequired
- Docker および docker compose 環境

## Getting Started
1. run `docker compose build && docker compose up -d` at project root
2. run `docker compose exec node bash` at project root
3. in container bash, run `cd /app/greed-island`
4. run `yarn dev` and access to `http://localhost:3000`

## Reference

- [ツール構成参考](https://coinsbench.com/building-a-full-stack-nft-minting-dapp-using-hardhat-ethers-js-next-js-and-tailwindcss-4d1051a8140d)