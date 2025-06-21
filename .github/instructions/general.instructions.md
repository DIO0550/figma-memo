# GitHub Copilot Instructions

## Workspace Purpose

- **このワークスペースは基本的に Figma のメモ用です**
- コンポーネントの作成について指示がない場合は、基本的に Figma 関連の話題として扱ってください
- UI コンポーネントやデザインシステムに関する内容は Figma の観点から説明することを推奨します

## Package Manager

- **このプロジェクトでは yarn を使用してください**
- npm コマンドは使用せず、代わりに yarn コマンドを使用してください
- 依存関係のインストール: `yarn install`
- 開発サーバーの起動: `yarn start`
- ビルド: `yarn build`
- パッケージの追加: `yarn add [パッケージ名]`
- 開発用パッケージの追加: `yarn add -D [パッケージ名]`

## Project Structure

- これは Docusaurus プロジェクトです
- メインのプロジェクトは `/workspace/website` フォルダにあります
- 全てのコマンドは `/workspace/website` ディレクトリで実行してください

## Development Commands

- 開発サーバー起動: `cd /workspace/website && yarn start`
- プロダクションビルド: `cd /workspace/website && yarn build`
- ビルド結果のサーブ: `cd /workspace/website && yarn serve`
- キャッシュクリア: `cd /workspace/website && yarn clear`

## TypeScript and Components

- TypeScript を使用しています
- React コンポーネントは `/workspace/website/src/components` にあります
- CSS Modules を使用しています
- Docusaurus 固有のコンポーネント（Link、useDocusaurusContext など）を使用しています

## Figma-Focused Development

- **新しいコンポーネントを作成する際は、Figma のデザインシステムやコンポーネントライブラリとの関連性を考慮してください**
- **Figma のプロパティ、バリアント、Auto Layout などの概念を参考にしたコンポーネント設計を推奨します**
- **色、タイポグラフィ、スペーシングなどのデザイントークンは Figma のトークンシステムを意識した命名を使用してください**
- **コンポーネントのドキュメント作成時は、Figma での使用例や設定方法も含めることを推奨します**
