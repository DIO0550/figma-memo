# Docusaurus Development Environment

このプロジェクトは Docusaurus を使用したドキュメントサイトです。開発には Dev Container を使用することを推奨します。

## Dev Container を使用した開発

### 前提条件

- Docker Desktop
- Visual Studio Code
- Dev Containers 拡張機能

### セットアップ手順

1. このリポジトリをクローンまたはダウンロード
2. Visual Studio Code でプロジェクトフォルダを開く
3. コマンドパレット（Cmd/Ctrl + Shift + P）を開いて「Dev Containers: Reopen in Container」を実行
4. コンテナのビルドが完了するまで待機

### 開発サーバーの起動

コンテナ内で以下のコマンドを実行：

```bash
cd website
npm start
```

開発サーバーは `http://localhost:3000` で起動します。

## プロジェクト構造

```
.
├── .devcontainer/          # Dev Container設定
│   ├── devcontainer.json  # Dev Container設定ファイル
│   └── Dockerfile         # カスタムDockerfile
├── website/               # Docusaurusプロジェクト
│   ├── docs/             # ドキュメントファイル
│   ├── blog/             # ブログ記事
│   ├── src/              # カスタムReactコンポーネント
│   ├── static/           # 静的アセット
│   └── docusaurus.config.ts # Docusaurus設定
├── .prettierrc.json      # Prettier設定
└── .prettierignore       # Prettierが無視するファイル
```

## 利用可能なコマンド

### Docusaurus コマンド（website ディレクトリ内で実行）

- `npm start` - 開発サーバー起動
- `npm run build` - 本番用ビルド
- `npm run serve` - ビルド後のサイトをローカルで確認
- `npm run clear` - キャッシュクリア

### 開発ツール

- **Prettier**: コードフォーマッター（保存時に自動実行）
- **ESLint**: コード品質チェック
- **TypeScript**: 型安全性
- **Markdown Lint**: Markdown ファイルの品質チェック

## カスタマイズ

### テーマのカスタマイズ

`website/src/css/custom.css` でカスタム CSS を追加できます。

### サイドバーの設定

`website/sidebars.ts` でサイドバーの構成を変更できます。

### サイト設定

`website/docusaurus.config.ts` でサイト全体の設定を変更できます。

## デプロイ

GitHub Pages へのデプロイ：

```bash
cd website
npm run deploy
```

## トラブルシューティング

### ポートが使用中の場合

開発サーバー起動時にポート 3000 が使用中の場合、自動的に別のポート（通常 3001）が使用されます。

### コンテナの再ビルド

設定を変更した場合は、以下の手順でコンテナを再ビルドしてください：

1. コマンドパレットで「Dev Containers: Rebuild Container」を実行
2. または、コンテナを削除してから再度「Reopen in Container」を実行

## 参考リンク

- [Docusaurus 公式ドキュメント](https://docusaurus.io/)
- [Dev Containers 公式ドキュメント](https://containers.dev/)
