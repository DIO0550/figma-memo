---
sidebar_position: 1
---

# Card コンポーネント

カードコンポーネントは、情報を整理して表示するための再利用可能な UI コンポーネントです。

## 基本的な使用方法

```tsx
import { Card } from '@site/src/components/Card';

<Card title="カードタイトル" description="カードの説明文がここに入ります。" />;
```

## Props

### Card

| プロパティ    | 型                               | デフォルト値 | 説明                     |
| ------------- | -------------------------------- | ------------ | ------------------------ |
| `title`       | `string`                         | -            | カードのタイトル（必須） |
| `description` | `ReactNode`                      | -            | カードの説明文           |
| `image`       | `string`                         | -            | 画像の URL               |
| `imageAlt`    | `string`                         | -            | 画像の alt 属性          |
| `link`        | `string`                         | -            | リンク先 URL             |
| `icon`        | `ReactNode`                      | -            | アイコンコンポーネント   |
| `className`   | `string`                         | -            | 追加の CSS クラス        |
| `size`        | `'small' \| 'medium' \| 'large'` | `'medium'`   | カードサイズ             |
| `orientation` | `'vertical' \| 'horizontal'`     | `'vertical'` | カードの向き             |
| `clickable`   | `boolean`                        | `!!link`     | クリック可能かどうか     |
| `external`    | `boolean`                        | `false`      | 外部リンクかどうか       |

### CardGrid

| プロパティ  | 型                               | デフォルト値 | 説明                          |
| ----------- | -------------------------------- | ------------ | ----------------------------- |
| `children`  | `ReactNode`                      | -            | 子要素（Card コンポーネント） |
| `columns`   | `1 \| 2 \| 3 \| 4`               | `3`          | グリッドのカラム数            |
| `className` | `string`                         | -            | 追加の CSS クラス             |
| `gap`       | `'small' \| 'medium' \| 'large'` | `'medium'`   | カード間のギャップサイズ      |

## 使用例

### 基本的なカード

import { Card } from '@site/src/components/Card';

<Card 
  title="基本的なカード"
  description="これは基本的なカードの例です。タイトルと説明文を表示します。"
/>

### 画像付きカード

<Card 
  title="画像付きカード"
  description="このカードには画像が含まれています。"
  image="/img/docusaurus.png"
  imageAlt="Docusaurus Logo"
/>

### リンク付きカード

<Card 
  title="リンク付きカード"
  description="このカードはクリック可能で、他のページにリンクします。"
  link="/docs/intro"
/>

### 外部リンクカード

<Card 
  title="外部リンクカード"
  description="このカードは外部サイトにリンクします。"
  link="https://docusaurus.io"
  external={true}
/>

### アイコン付きカード

<Card
title="アイコン付きカード"
description="このカードにはアイコンが表示されます。"
icon={<span style={{fontSize: '2rem'}}>🚀</span>}
/>

### 横向きカード

<Card 
  title="横向きカード"
  description="このカードは横向きのレイアウトで表示されます。"
  orientation="horizontal"
  image="/img/docusaurus.png"
/>

### 異なるサイズのカード

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
  <Card 
    title="Small Card"
    description="小さいサイズのカードです。"
    size="small"
  />
  <Card 
    title="Medium Card"
    description="中サイズのカードです。"
    size="medium"
  />
  <Card 
    title="Large Card"
    description="大きいサイズのカードです。"
    size="large"
  />
</div>

## CardGrid の使用例

### 3 カラムグリッド

import { CardGrid } from '@site/src/components/Card';

<CardGrid columns={3}>
  <Card 
    title="カード 1"
    description="1つ目のカードです。"
    image="/img/docusaurus.png"
  />
  <Card 
    title="カード 2"
    description="2つ目のカードです。"
    image="/img/docusaurus.png"
  />
  <Card 
    title="カード 3"
    description="3つ目のカードです。"
    image="/img/docusaurus.png"
  />
</CardGrid>

### 2 カラムグリッド（大きなギャップ）

<CardGrid columns={2} gap="large">
  <Card 
    title="機能 1"
    description="この機能について詳しく説明します。"
    icon={<span style={{fontSize: '2.5rem'}}>⚡</span>}
  />
  <Card 
    title="機能 2"
    description="この機能について詳しく説明します。"
    icon={<span style={{fontSize: '2.5rem'}}>🎯</span>}
  />
</CardGrid>

## レスポンシブ対応

CardGrid コンポーネントは自動的にレスポンシブ対応されます：

- **デスクトップ**: 指定されたカラム数で表示
- **タブレット**: 4 カラム →2 カラム、3 カラム →2 カラム
- **モバイル**: すべて 1 カラムで表示

## アクセシビリティ

- カードがリンクの場合、適切な`href`属性が設定されます
- 外部リンクには`rel="noopener noreferrer"`が自動的に追加されます
- 画像には適切な`alt`属性が設定されます
- キーボードナビゲーションに対応しています

## カスタマイズ

### カスタムスタイル

```css
.customCard {
  border: 2px solid var(--ifm-color-primary);
  border-radius: 12px;
}
```

```tsx
<Card
  title="カスタムカード"
  description="カスタムスタイルが適用されたカードです。"
  className="customCard"
/>
```

### CSS 変数を使用したテーマ調整

```css
:root {
  --ifm-card-background-color: #f8f9fa;
}

[data-theme='dark'] {
  --ifm-card-background-color: #2d3748;
}
```
