---
sidebar_position: 2
title: キャラクター動的指定(PersonSlot)ガイド
description: PersonSlot を使用してキャラクターを動的に指定できるようにする方法
keywords: [PersonSlot, キャラクター配置, 動的指定, 動的配置, スタジオレベル]
---

# キャラクター動的指定(PersonSlot)ガイド

このドキュメントでは、PersonSlot を使用してキャラクターを動的に指定できるようにする方法について説明します。

:::info 所要時間
このチュートリアルの完了には約10-15分かかります。
:::

## PersonSlot とは

**PersonSlot** は、レベル内でキャラクターを配置する位置を定義するアクターです。

### 主な特徴

- **動的なキャラクター配置**: セッション開始時に、Xroid Studio から受け取った人の識別子に基づいてキャラクターを自動配置

---

## 前提条件

:::warning 必要な準備
- Unreal Engine エディターでプロジェクトが開いている状態
- レベルが開かれている状態
:::

---

## 📋 手順概要

1. **PersonSlot の配置と調整** - レベル内への PersonSlot の追加、タグ設定、プレビュー表示、位置調整
2. **動作確認** - セッション実行時の確認

---

## 📍 Step 1: PersonSlot の配置と調整

### 1.1 PersonSlot アクターの検索

Content Browser で以下のパスを開きます：

```
/All/C++ Classes/XroidVerseContentGeneration/Actors/PersonSlot
```

または、Content Browser の検索欄で `PersonSlot` と入力します。

### 1.2 レベルへの配置

1. `PersonSlot` アクターを、レベルのビューポートにドラッグ&ドロップ
2. キャラクターを配置したい位置に移動

:::tip PersonSlot の表示
PersonSlot には矢印コンポーネントが表示され、キャラクターの正面の向きを示します。
:::

### 1.3 PersonSlot のタグ設定

配置した PersonSlot にタグを設定します。このタグが Xroid Studio からの `persons` 配列の順序に対応します。

1. レベル内で配置した PersonSlot を選択
2. **Details** パネルで「**tags**」で検索
3. **Actor** セクション内の **Tags** の右の **+** ボタンを押す
4. **Index [0]** に `PersonSlot_番号` の形式で入力（例：`PersonSlot_0`、`PersonSlot_1` など）

:::warning タグの命名規則
- `PersonSlot_` の後に続く番号が Xroid Studio からの `persons` 配列のインデックスに対応します
  - `PersonSlot_0` → `persons[0]`
  - `PersonSlot_1` → `persons[1]`
  - `PersonSlot_2` → `persons[2]`
- 0 から順番に番号を付けてください
- 番号は連続している必要があります（0, 1, 2, ...）
:::

### 1.4 エディタープレビューの設定

配置した PersonSlot にキャラクターをプレビュー表示して、位置や向きを調整しやすくします。(デフォルトで何らかのキャラクターが設定されているかもしれません。デフォルト設定は、`Project Settings > Project > XroidVerse Content Generation > Person Slot > Default Editor Preview Person Identifer` で変更することができます)

1. レベル内で配置した PersonSlot を選択
2. **Details** パネルで **Editor Preview** カテゴリを探す
3. **Preview Person Identifier (Editor Only)** に、プレビューしたいキャラクターの識別子を選択

:::note 利用可能な値
ドロップダウンには、`Project Settings > Project > XroidVerse Content Generation > Person > Person Identifier to Character Class Map` に登録されているキーの一覧が表示されます。
:::

識別子を選択すると、エディターのビューポートにキャラクターが表示されます。

:::warning この設定が有効な範囲
このエディタープレビューは、エディターの作業画面と、`request` パラメータを持たないエディターでのPIE実行の場合のみ、有効となり、指定したキャラクターが表示されます。  
- エディタープレビューが出る場合の例：**エディターの作業画面**、**スタジオレベルでPIE**した場合
- エディタープレビューが出ない場合の例：**ログイン画面からPIEしてスタジオレベルに移動**した場合、**エディターじゃない**場合
:::

### 1.5 位置と向きの調整

プレビュー表示されたキャラクターを確認しながら、PersonSlot の位置と向きを調整します。

---

## 📚 関連情報

### PersonSlot と StudioCameraActor の連携

StudioCameraActor は、PersonSlot に配置されたキャラクターを自動的に追跡できます。

詳細は [カメラ設定ガイド](../camera-setup/camera-setup-guide#studiocameraactor-の設定) を参照してください。

---

## ✅ 完了確認

設定が正しく完了すると、以下の状態になります：

- [ ] PersonSlot がレベル内に配置されている
- [ ] PersonSlot に適切なタグ（`PersonSlot_0`、`PersonSlot_1` など）が設定されている
- [ ] エディター上でプレビューが表示され、位置と向きが調整されている

---

## 📚 関連ドキュメント

- [キャラクター追加ガイド](./character-addition-guide)
- [カメラ設定ガイド](../camera-setup/camera-setup-guide)
- [表情設定ガイド](../expression-setup/facial-expression-guide)
