---
sidebar_position: 1
title: 動的オブジェクト配置ガイド
description: レベル内でFBXなどの3Dモデルを動的に出現させるための SpawnPointActor の配置と Placement 設定方法
keywords: [オブジェクト, object-spawn, SpawnPointActor, 配置, Placement, FBX]
---

# 動的オブジェクト配置ガイド

このドキュメントでは、XroidVerse でFBXなどの3Dモデルを動的に出現させるための `SpawnPointActor` の配置・設定手順を説明します。

:::info 動的オブジェクト生成（object-spawn）
`SpawnPointActor` を配置しておくことで、Xroid Studio 等から指定された 3Dモデル（FBX等）を任意のタイミングでその場所に出現させることができます。
:::

:::info 所要時間
このチュートリアルの完了には約5分かかります。
:::

## 前提条件

:::warning 必要な準備
- Unreal Engine エディターでプロジェクトが開いている状態
- 対象レベルが開いている状態
:::

## 📋 手順概要

1. **SpawnPointActor の配置と調整** - レベル内への SpawnPointActor の追加、Placement 設定、トランスフォームの調整

---

## 📍 Step 1: SpawnPointActor の配置と調整

### 1.1 SpawnPointActor の検索

Content Browser で以下のパスを開きます：

```text
/All/C++ Classes/XroidVerseContentGeneration/Actors/SpawnPointActor
```

または、Content Browser の検索欄で `SpawnPointActor` と入力します。

### 1.2 レベルへの配置

1. `SpawnPointActor` を、レベルのビューポートにドラッグ&ドロップ
2. オブジェクトを出現させたい位置に移動

:::tip 配置のコツ
- 出現させたいオブジェクトの原点（ピボット）が `SpawnPointActor` の位置になります。
- 宙に浮かせたい場合や、地面にぴったりつけたい場合は、それに合わせてZ軸（高さ）を調整してください。
:::

### 1.3 Placement の設定

配置した SpawnPointActor に `Placement` を設定します。この `Identifier` がスケジュールJSONでの指定先になります。

1. レベル内で配置した SpawnPointActor を選択
2. **Details** パネルで `Placement` カテゴリを開く
3. 以下を設定
   - `Location`: この SpawnPointActor が所属する `location` を設定
   - `Scene`: この SpawnPointActor が所属する `location` 内の `scene` を設定
   - `Identifier`: この SpawnPointActor の識別子を設定（任意の文字列。例: `desktop_r`, `desktop_l`）

`Location`/`Scene` の階層の概念は [Location と Scene の概念](../location-scene-concept) を参照してください。  
動的オブジェクト（`object-spawn`）は `location + scene + Identifier` の組み合わせで出現位置が解決されるため、同一 `location + scene` 内で `Identifier` が一意になるように配置してください。

### 1.4 トランスフォームの調整

配置した `SpawnPointActor` 自体のトランスフォーム（位置・回転・スケール）は、出現するオブジェクトにそのまま反映されます。

1. **Details** パネルで `Transform` カテゴリを開きます。
2. オブジェクトを出現させたい向きに合わせて `Rotation` を変更します。
3. デフォルトより大きく/小さく表示したい場合は、`Scale` の値を調整します。

---

## ✅ 完了確認

以下を満たしていれば設定完了です。

- レベル内に `SpawnPointActor` が配置されている
- `SpawnPointActor` の `Placement`（Location/Scene/Identifier）が正しく設定されている

:::success
これで動的オブジェクトの配置先（SpawnPoint）の設定は完了です。Xroid Studio 等のスケジュールから、この Identifier を指定してオブジェクトを出現させることができます。
:::
