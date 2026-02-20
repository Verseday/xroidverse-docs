---
sidebar_position: 1
title: メディアディスプレイ設定ガイド
description: レベル内で画像/動画を表示するための統合ディスプレイ（SM_MediaDisplay）の配置と設定方法
keywords: [メディアディスプレイ, SM_MediaDisplay, 画像, 動画, 音声, レベル設定, A_LevelInfo]
---

# メディアディスプレイ設定ガイド

このドキュメントでは、XroidVerse で画像と動画を表示する統合ディスプレイ `SM_MediaDisplay` の配置・設定手順を説明します。

:::info 統合仕様
従来の `SM_ImageDisplay` / `SM_VideoDisplay` は廃止されました。  
現在は `SM_MediaDisplay` 1つで画像・動画（動画音声を含む）を扱います。
:::

:::info 重なり順（画像/動画）
`image` / `video` が同時に表示される場合、後から表示が開始されたものが上（手前）に重なります。  
同じタイミングで開始される場合は、スケジュール（`schedule` 配列）の後に出てくる要素が上になります。
:::

:::info 所要時間
このチュートリアルの完了には約5-10分かかります。
:::

## 前提条件

:::warning 必要な準備
- Unreal Engine エディターでプロジェクトが開いている状態
- 対象レベルが開いている状態
:::

## 手順概要

1. レベル内の `SM_MediaDisplay` の有無を確認
2. 必要なら `SM_MediaDisplay` を配置
3. `A_LevelInfo` の `MediaDisplay` に設定

---

## Step 1: 既存ディスプレイの確認

Outliner で `SM_MediaDisplay` を検索し、すでに配置済みか確認します。

:::tip
- 検索結果があれば既存を流用できます
- なければ Step 2 で新規配置してください
:::

---

## Step 2: ディスプレイの配置

### 2.1 既存を使う場合

既存の `SM_MediaDisplay` を選択し、必要な場所へ移動します。

### 2.2 新規配置する場合

Content Browser で次のアセットを開いて配置します。

```text
/All/Game/Xroid/MediaDisplay/SM_MediaDisplay
```

:::tip 表示用マテリアル
ディスプレイ面のマテリアルは `Image` (Texture) パラメータを持つ必要があります。  
通常は `M_MediaDisplay` をそのまま使用してください。
:::

:::tip 配置のコツ
- プレイヤーから見やすい高さ/角度にする
- 他オブジェクトと干渉しない位置に置く
:::

---

## Step 3: A_LevelInfo との連携

1. Outliner で `A_LevelInfo` を選択
2. Details の `Default` セクションを開く
3. `MediaDisplay` に配置済み `SM_MediaDisplay` を設定

:::tip
`MediaDisplay` が未設定だと、画像/動画は表示されません。
:::

---

## 完了確認

以下を満たしていれば設定完了です。

- レベル内に `SM_MediaDisplay` がある
- `A_LevelInfo.MediaDisplay` がそのオブジェクトを参照している
- 画像/動画の表示と、動画音声の再生が動作する

:::success
これでメディアディスプレイ設定は完了です。
:::
