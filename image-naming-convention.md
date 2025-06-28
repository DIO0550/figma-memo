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

#### state

- `select` - 選択状態
- `empty` - 空の状態
- `filled` - 設定済み状態
- `set` - 設定完了状態

## 命名例

### UI メニュー・パネル系

```
/img/ui/menu-frame-select.png
/img/ui/menu-fill.png
/img/ui/menu-text.png
/img/ui/panel-appearance.png
```

### ボタン作成段階系

```
/img/button/step01-frame-empty.png
/img/button/step02-frame-filled.png
/img/button/step03-text-input.png
/img/button/step04-text-autowidth.png
/img/button/step05-autolayout-set.png
/img/button/step06-padding-set.png
/img/button/step07-radius-set.png
```

### 他のコンポーネント例

```
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
