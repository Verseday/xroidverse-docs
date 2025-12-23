---
sidebar_position: 1
title: カメラ設定ガイド
description: StudioCameraActor を使用したカメラの配置と設定方法
keywords: [カメラ設定, StudioCameraActor, カメラ配置, PersonSlot連携, フォーカス設定]
---

# カメラ設定ガイド

このドキュメントでは、XroidVerseプロジェクトで StudioCameraActor を使用したカメラの配置と設定方法について説明します。

:::info 所要時間
このチュートリアルの完了には約15-20分かかります。
:::

## 前提条件

:::warning 必要な準備
- Unreal Engine エディターでプロジェクトが開いている状態
- レベルが開かれている状態
- （オプション）PersonSlot との連携を行う場合：[キャラクター動的指定(PersonSlot)ガイド](../character-setup/person-slot-guide)を参照
:::

## 📋 手順概要

1. **StudioCameraActor の概要** - 機能と特徴の理解
2. **カメラの配置** - レベルへの StudioCameraActor の追加とタグ設定
3. **フォーカス設定** - PersonSlot との連携設定（オプション）
4. **ズーム設定** - ズームイン/ズームアウトの焦点距離設定
5. **動作確認** - エディターと PIE での確認、JSON からの操作テスト

## 🎬 Step 1: StudioCameraActor とは

**StudioCameraActor** は、スタジオ撮影用に設計されたカメラアクターです。PersonSlot と連携して、配置されたキャラクターに自動的にフォーカスを合わせることができます。

### 主な機能

- **PersonSlot との連携**: PersonSlot に配置されたキャラクターを自動追跡
- **Focus Settings**: キャラクターの特定の部位（顔など）にフォーカス
- **Look at Tracking**: カメラがキャラクターを常に向くように設定
- **ズーム設定**: ズームイン/ズームアウト時の焦点距離を設定可能
- **JSON からの制御**: `zoom_in`、`zoom_out` などのコマンドに対応

---

## 📍 Step 2: StudioCameraActor の配置

### 2.1 アクターの検索

Content Browser で以下のいずれかの方法で検索します：

```
/All/C++ Classes/XroidVerseContentGeneration/Actors/StudioCameraActor
```

または、Content Browser の検索欄で `StudioCameraActor` と入力します。

### 2.2 レベルへの配置

1. `StudioCameraActor` を選択
2. レベルのビューポートにドラッグ&ドロップ
3. カメラを配置したい位置に移動
4. 回転ツールでカメラの向きを調整

### 2.3 カメラタグの設定

JSON からカメラを操作するには、カメラにタグを設定する必要があります。

1. レベル内で配置した StudioCameraActor を選択
2. **Details** パネルで「tag」で検索
3. **Actor** セクションの **Tags** の **+** ボタンを押す
4. **Index [0]** に `Camera_番号` の形式で入力（例：`Camera_1`、`Camera_2` など）

:::warning タグの命名規則
- `Camera_` の後に続く番号が JSON でのカメラ操作時の `number` パラメータに対応します
- 既存のカメラと番号が重複しないように注意してください
- 番号は連続している必要はありませんが、管理しやすいように整理することを推奨します
:::

---

## 🎯 Step 3: フォーカス対象の設定（オプション）

StudioCameraActor は、PersonSlot を指定することで、そのスロットに配置されたキャラクターを自動的に追跡します。

:::note このステップについて
このステップはオプションです。PersonSlot を使用してキャラクターを自動追跡する場合にのみ設定が必要です。固定カメラとして使用する場合は、このステップをスキップして Step 4 に進んでください。
:::

### 3.1 Focus Target Person Slot の設定

1. レベル内で StudioCameraActor を選択
2. **Details** パネルで **Tracking** カテゴリを探す
3. **Focus Target Person Slot** にフォーカスを合わせたい PersonSlot を設定

:::info Focus Target の動作
- PersonSlot にキャラクターが配置されると、そのキャラクターの CameraFocusMarker にフォーカスが自動設定されます
- キャラクターの顔などの特定部位を追跡できます
- CameraFocusMarker の詳細は [キャラクター追加ガイド](../character-setup/character-addition-guide#step-2-camerafocusmarker-の位置調整) を参照してください
:::

### 3.2 Look at Target Person Slot の設定

カメラがキャラクターを常に向くように設定できます。

1. レベル内で StudioCameraActor を選択
2. **Details** パネルで **Tracking** カテゴリを探す
3. **Look at Target Person Slot** にカメラを向けたい PersonSlot を設定

:::info Look at Tracking の動作
- PersonSlot にキャラクターが配置されると、そのキャラクターの CameraFocusMarker の位置にカメラが向きます
- キャラクターが移動しても、カメラは常にキャラクターの CameraFocusMarker の位置に向き続けます
- Focus Target と異なる PersonSlot を指定することも可能
- CameraFocusMarker の詳細は [キャラクター追加ガイド](../character-setup/character-addition-guide#step-2-camerafocusmarker-の位置調整) を参照してください
:::

---

## 🔍 Step 4: ズーム設定

StudioCameraActor では、ズームイン/ズームアウト時の焦点距離を事前に設定できます。

### 4.1 ズーム設定の編集

1. レベル内で StudioCameraActor を選択
2. **Details** パネルで **Zoom** カテゴリを探す
3. 以下のパラメータを設定：

| パラメータ                | 説明                     | デフォルト値 |
| ------------------------- | ------------------------ | ------------ |
| **Zoom-in Focal Length**  | ズームイン時の焦点距離   | 100.0        |
| **Zoom-out Focal Length** | ズームアウト時の焦点距離 | 10.0         |

---

## ✅ 完了確認

設定が正しく完了すると、以下の状態になります：

### 基本設定
- [ ] StudioCameraActor がレベル内に配置されている
- [ ] カメラが適切な位置と向きに配置されている
- [ ] カメラに `Camera_番号` タグが設定されている

### フォーカス設定（オプション）
- [ ] Focus Target Person Slot が設定されている（キャラクターの顔にフォーカスする場合）
- [ ] Look at Target Person Slot が設定されている（カメラがキャラクターを向き続ける場合）

### ズーム設定
- [ ] Zoom-in Focal Length が適切に設定されている
- [ ] Zoom-out Focal Length が適切に設定されている

:::success 設定完了
これでカメラの設定は完了です！StudioCameraActor を使用することで、PersonSlot に配置されたキャラクターを自動的に追跡し、JSON からズームを制御できるようになります。
:::

---

## 📚 関連ドキュメント

- [キャラクター動的指定(PersonSlot)ガイド](../character-setup/person-slot-guide) - PersonSlot を使用した動的指定
- [キャラクター追加ガイド](../character-setup/character-addition-guide) - 新しいキャラクターの追加方法