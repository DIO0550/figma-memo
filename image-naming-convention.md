# 画像ファイル命名規則

## 概要

Figma ドキュメントサイトで使用する画像ファイルの統一命名規則です。

## 命名規則

### 基本構造

```
/img/{category}/{action-type}-{element}-{state}.png
```

### カテゴリ分類

- `ui/` - Figma のメニューやパネルのスクリーンショット
- `{component}/` - 各コンポーネント作成の段階的結果
  - `button/` - ボタン
  - `checkbox/` - チェックボックス
  - `input/` - インプットフィールド

### 命名パターン

#### action-type

- `menu` - メニューの選択画面
- `panel` - 設定パネル
- `step{XX}` - 作業段階の結果（連番付き）

#### element

- `frame` - フレーム関連
- `text` - テキスト関連
- `fill` - 塗り関連
- `layout` - レイアウト関連
- `appearance` - 外見関連
- `autolayout` - オートレイアウト関連
- `component` - コンポーネント関連
- `variant` - バリアント関連
- `property` - プロパティ関連
- `name` - 名前・リネーム関連

#### state

- `select` - 選択状態
- `empty` - 空の状態
- `filled` - 設定済み状態
- `set` - 設定完了状態
- `before` - 変更前の状態
- `after` - 変更後の状態
- `create` - 作成状態
- `input` - 入力状態

## 命名例

### UI メニュー・パネル系

```text
/img/ui/menu-frame-select.png
/img/ui/menu-fill.png
/img/ui/menu-text.png
/img/ui/menu-component-create.png
/img/ui/menu-variant-create.png
/img/ui/menu-variant-property.png
/img/ui/panel-appearance.png
```

### ボタン作成段階系

```text
/img/button/step01-frame-empty.png
/img/button/step02-frame-filled.png
/img/button/step03-text-input.png
/img/button/step04-text-autowidth.png
/img/button/step05-autolayout-set.png
/img/button/step06-padding-set.png
/img/button/step07-radius-set.png
```

### ボタン状態作成段階系

```text
/img/button/02/step01-frame-name-before.png
/img/button/02/step02-frame-name-after.png
/img/button/02/step03-frame-component-create.png
/img/button/02/step04-frame-variant-create.png
/img/button/02/step05-frame-variant-input.png
```

### 他のコンポーネント例

```text
/img/checkbox/step01-frame-empty.png
/img/checkbox/step02-shape-added.png
/img/input/step01-frame-empty.png
/img/input/step02-border-set.png
```

## 運用ルール

1. **一貫性**: 全てのファイルがこの規則に従う
2. **連番**: 手順の画像は必ず連番を使用
3. **英語**: ファイル名は英語で統一
4. **小文字**: 全て小文字とハイフン区切りを使用

---

_この命名規則により、ファイルの整理と管理が容易になり、新しいコンポーネントの追加時も一貫性を保てます。_
