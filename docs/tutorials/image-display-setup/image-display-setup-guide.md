---
sidebar_position: 1
title: 画像ディスプレイ設定ガイド
description: レベル内での画像表示用ディスプレイ（SM_ImageDisplay）の配置と設定方法
keywords: [画像ディスプレイ, SM_ImageDisplay, レベル設定, A_LevelInfo]
---

# 画像ディスプレイ設定ガイド

このドキュメントでは、XroidVerseプロジェクトで画像を表示するためのディスプレイ（SM_ImageDisplay）をレベル内に配置・設定する手順について説明します。

:::info 所要時間
このチュートリアルの完了には約5-10分かかります。
:::

## 前提条件

:::warning 必要な準備
- Unreal Engine エディターでプロジェクトが開いている状態
- レベルが開かれている状態
:::

## 📋 手順概要

1. **既存ディスプレイの確認** - レベル内の SM_ImageDisplay の有無をチェック
2. **ディスプレイの配置** - 新規または既存の移動
3. **レベル情報の設定** - A_LevelInfo との連携設定

---

## 🔍 Step 1: 既存ディスプレイの確認

### 1.1 レベル内のSM_ImageDisplayをチェック

レベルの **Outliner** パネルで `SM_ImageDisplay` を検索して、既にレベル内に配置されているかを確認します。

![レベル内のSM_ImageDisplay確認](/img/docs/image-display-setup/01-level-outliner-sm-image-display.png)

:::tip 確認方法
- Outlinerパネル上部の検索ボックスに `SM_ImageDisplay` と入力
- 検索結果にアイテムが表示されれば既に配置済み
- 何も表示されなければ新規配置が必要
:::

---

## 📦 Step 2: ディスプレイの配置

### 2.1 既存のSM_ImageDisplayがある場合

既にレベル内に `SM_ImageDisplay` がある場合は、そのオブジェクトを選択して適切な位置に移動させるだけで完了です。

:::note 移動方法
1. Outliner で `SM_ImageDisplay` を選択
2. 適切な位置にドラッグして配置
:::

### 2.2 SM_ImageDisplayがない場合の新規配置

レベル内に `SM_ImageDisplay` がない場合は、以下の手順で新規に配置します。

#### 2.2.1 Content Browser でアセットを探す

Content Browser で以下のパスに移動します：

```
/All/Content/Xroid/ImageDisplay/SM_ImageDisplay
```

#### 2.2.2 レベルへの配置

![SM_ImageDisplayのドラッグ&ドロップ配置](/img/docs/image-display-setup/02-drag-drop-sm-image-display.png)

1. `SM_ImageDisplay` をContent Browser から選択
2. レベルのビューポートにドラッグ&ドロップ
3. 好きな位置に配置

:::tip 配置のコツ
- プレイヤーが見やすい高さと角度に配置
- 壁や適切な背景の前に設置
- 他のオブジェクトと干渉しない場所を選択
:::

---

## ⚙️ Step 3: レベル情報との連携設定

### 3.1 A_LevelInfoの選択

レベルの **Outliner** パネルで `A_LevelInfo` を探して選択します。



### 3.2 Details パネルでの設定

![A_LevelInfoのDetails設定](/img/docs/image-display-setup/03-a-levelinfo-details-setting.png)

`A_LevelInfo` を選択した状態で、**Details** パネル内の以下の設定を行います：

1. **Default** セクションを探す
2. **SM Image Display** プロパティを見つける
3. ドロップダウンメニューから、先ほど配置した `SM_ImageDisplay` を選択

:::tip 設定のポイント
- SM Image Display フィールドが空の場合は、レベル内の SM_ImageDisplay との連携ができていません
- 必ず配置済みの SM_ImageDisplay オブジェクトを指定してください
:::

---

## ✅ 完了確認

設定が正しく完了すると、以下の状態になります：

- レベル内に `SM_ImageDisplay` が配置されている
- `A_LevelInfo` の SM Image Display プロパティに該当オブジェクトが設定されている
- 画像表示機能が正常に動作する

:::success 設定完了
これで画像ディスプレイの設定は完了です！ゲーム実行時に画像が適切に表示されるようになります。
:::

 