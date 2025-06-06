---
sidebar_position: 1
title: 動画ディスプレイ設定ガイド
description: レベル内での動画表示用ディスプレイ（SM_VideoDisplay）の配置方法
keywords: [動画ディスプレイ, SM_VideoDisplay, レベル設定]
---

# 動画ディスプレイ設定ガイド

このドキュメントでは、XroidVerseプロジェクトで動画を表示するためのディスプレイ（SM_VideoDisplay）をレベル内に配置する手順について説明します。

:::info 所要時間
このチュートリアルの完了には約5分かかります。
:::

## 前提条件

:::warning 必要な準備
- Unreal Engine エディターでプロジェクトが開いている状態
- レベルが開かれている状態
:::

## 📋 手順概要

1. **既存ディスプレイの確認** - レベル内の SM_VideoDisplay の有無をチェック
2. **ディスプレイの配置** - 新規または既存の移動

---

## 🔍 Step 1: 既存ディスプレイの確認

### 1.1 レベル内のSM_VideoDisplayをチェック

レベルの **Outliner** パネルで `SM_VideoDisplay` を検索して、既にレベル内に配置されているかを確認します。

![レベル内のSM_VideoDisplay確認](/img/docs/video-display-setup/01-level-outliner-sm-video-display.png)

:::tip 確認方法
- Outlinerパネル上部の検索ボックスに `SM_VideoDisplay` と入力
- 検索結果にアイテムが表示されれば既に配置済み
- 何も表示されなければ新規配置が必要
:::

---

## 📦 Step 2: ディスプレイの配置

### 2.1 既存のSM_VideoDisplayがある場合

既にレベル内に `SM_VideoDisplay` がある場合は、そのオブジェクトを選択して適切な位置に移動させるだけで完了です。

:::note 移動方法
1. Outliner で `SM_VideoDisplay` を選択
2. 適切な位置にドラッグして配置
:::

### 2.2 SM_VideoDisplayがない場合の新規配置

レベル内に `SM_VideoDisplay` がない場合は、以下の手順で新規に配置します。

#### 2.2.1 Content Browser でアセットを探す

Content Browser で以下のパスに移動します：

```
/All/Game/Xroid/VideoDisplay/SM_VideoDisplay
```

#### 2.2.2 レベルへの配置

![SM_VideoDisplayのドラッグ&ドロップ配置](/img/docs/video-display-setup/02-drag-drop-sm-video-display.png)

1. `SM_VideoDisplay` をContent Browser から選択
2. レベルのビューポートにドラッグ&ドロップ
3. 好きな位置に配置

:::tip 配置のコツ
- プレイヤーが見やすい高さと角度に配置
- 壁や適切な背景の前に設置
- 他のオブジェクトと干渉しない場所を選択
:::

---

## ✅ 完了確認

設定が正しく完了すると、以下の状態になります：

- レベル内に `SM_VideoDisplay` が配置されている
- 動画表示機能が正常に動作する

:::success 設定完了
これで動画ディスプレイの設定は完了です！ゲーム実行時に動画が適切に表示されるようになります。
::: 