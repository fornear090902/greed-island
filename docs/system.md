# システムの構成ツールについて

## 概要

「Greed Island（仮）プロジェクト」は、Web ブラウザで動作する NFT を使用したゲームです。

どのようなゲーム性があるかなどは未定で、PM が考案中です。

インフラ構成、ツールなどは
「一般的な Web アプリケーション構成 + NFT を利用するための FW」
を利用する予定です。

（NFT 部分は未定）

| Category             | Tools                           |
| -------------------- | ------------------------------- |
| Language             | TypeScript                      |
| FW                   | Next.js(Web), Tailwind CSS(CSS) |
| UI Component Library | 未定                            |
| Auth                 | Next Auth                       |
| DB                   | MongoDB                         |
| ORM                  | Prisma                          |
| Linter               | ESLint                          |
| Formatter            | Prettier                        |
| Testing              | Jest? Vetest? Playwright        |
| Dev Env              | Docker                          |
| CI/CD                | GitHub Actions                  |
| IaaS                 | Azure                           |
