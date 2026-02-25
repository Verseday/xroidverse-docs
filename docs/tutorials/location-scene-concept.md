---
sidebar_position: 1
title: Location と Scene の概念
description: XroidVerse における Location/Scene の役割、階層、識別子解決ルール
keywords: [Location, Scene, Placement, 識別子解決, カメラ, PersonSlot, MediaDisplay]
---

# Location と Scene の概念

このページでは、XroidVerse の `Placement` で使う `Location` と `Scene` の意味、階層、識別子解決ルールをまとめます。

## Location とは

`Location` は、`World` 内の特定の場所（建物、部屋など）を表します。  
ワールド内の1つの `Location` の範囲内を1つのシナリオ内で扱うことができます。
また、シナリオ開始時に `Location` 内の全ての指定した人物がスポーンします。  
`Location` は、シナリオ再生中に切り替えることができません。
子に複数の `Scene` を持つことができます。

## Scene とは

`Scene` は、`Location` 内の特定の場所（部屋、ステージ、客席など）を表します。
シーン切り替え（`scene-switch`）によって、シナリオ再生中に同じ `Location` 内で参照先のコンポーネント集合（PersonSlot、MediaDisplay、StudioCameraActor）を切り替えることができます。
子に複数のコンポーネント（PersonSlot、MediaDisplay、StudioCameraActor）を持つことができます。

## 階層とスコープ

`Placement` の解決は次の順で行われます。

1. `Location` を確定
2. `Scene` を確定
3. 対象コンポーネントの識別子で 1 件に特定

つまり、`Location + Scene` が共通スコープで、その内側で各コンポーネントの識別子を解決します。

## 識別子解決のルール

| コンポーネント    | 解決キー                                |
| ----------------- | --------------------------------------- |
| StudioCameraActor | `location + scene + identifier`         |
| PersonSlot        | `location + scene + slotIndex`          |
| SM_MediaDisplay   | `location + scene + display-identifier` |

共通ルール:

- `Location` と `Scene` は実行時に厳密一致で解決されます
- 解決結果は常に 1 件である必要があります
- 0 件または複数件に一致した場合はエラーです
- 同一 `Location + Scene` スコープ内で識別子が重複しないように配置してください

## 例

`Location=studio-a`、`Scene=main` のとき:

- カメラ `identifier="0"` は `studio-a + main + 0` の StudioCameraActor を参照
- PersonSlot `slotIndex=1` は `studio-a + main + 1` の PersonSlot を参照
- メディア表示 `display-identifier="big"` は `studio-a + main + big` の SM_MediaDisplay を参照

同じ `identifier="0"` のカメラを別シーン `Scene=side` に配置することは可能です。  
これは `studio-a + side + 0` となり、`studio-a + main + 0` とは別キーとして扱われます。

## 設計時のチェックポイント

- 先に `Location` と `Scene` の命名を決める
- 各 `Location + Scene` ごとに識別子の一意性を確認する
