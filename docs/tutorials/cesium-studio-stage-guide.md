---
sidebar_position: 2
title: Cesium Studio ステージ設定ガイド
description: initial_environment.cesium で緯度・経度・現地時刻・ステージ高さを反映する手順
keywords: [Cesium Studio, initial_environment, cesium, LevelInfo, StageRootActor, 地形高さ, 太陽・大気, ジオレファランス]
---

# Cesium Studio ステージ設定ガイド

このドキュメントでは、セッション開始時に `initial_environment.cesium` を使って Cesium Studio の初期環境を適用し、レベル上のステージを任意の位置に配置する手順を説明します。

:::info Cesium 初期環境適用とは
`initial_environment.cesium` が指定されたセッションを開始すると、`LevelInfo` の CesiumGeoreference / TerrainHeightTileset / CesiumSunSky / StageRootActor に、緯度・経度・現地時刻・ステージ高さが反映されます。`cesium` ブロックが未指定のセッションでは、Cesium 関連の検証・適用は一切行われず、通常の `StudioLevel` として扱われます。
:::

## 前提条件

- Unreal Engine エディターでプロジェクトが開いている状態
- Cesium for Unreal プラグインが有効
- レベルに `ALevelInfo` が配置され、Cesium Studio 用参照が設定済み
- [Location と Scene の概念](./location-scene-concept) を理解していること

## 反映内容

`initial_environment.cesium` の各フィールドは、実行時に次のとおり反映されます。

| JSON パス                        | 型        | 範囲 / 制約    | 反映先                                                   |
| -------------------------------- | --------- | -------------- | -------------------------------------------------------- |
| `cesium.coordinates.latitude`    | number    | -90.0 .. 90.0  | `CesiumGeoreference` 原点 / 地形サンプリングの緯度       |
| `cesium.coordinates.longitude`   | number    | -180.0 .. 180.0| `CesiumGeoreference` 原点 / 地形サンプリングの経度       |
| `cesium.localTime.hour`          | integer   | 0 .. 23        | `CesiumSunSky.SolarTime` の時                            |
| `cesium.localTime.minute`        | integer   | 0 .. 59        | `CesiumSunSky.SolarTime` の分（SolarTime は `hour + minute/60`） |
| `cesium.stage.heightMeters`      | number    | `>= 0`         | `TerrainHeightTileset` の地形高に加算するメートル数       |

:::note timezone について
timezone は JSON では指定しません。XroidVerse が `coordinates.longitude` から経度ベースの近似 timezone offset を自動算出し、CesiumSunSky に反映します。夏時間は適用せず、行政上の厳密な timezone 境界は判定しません。
:::

`stage.heightMeters` は「`TerrainHeightTileset` から取得した地形高を基準に、その何メートル上へステージ基準のアクターを配置するか」を指定します。

## LevelInfo の参照設定

`A_LevelInfo` の **Cesium Studio** カテゴリに 4 つの参照スロットがあります。

| プロパティ             | 設定するアクター / コンポーネント | 用途                                                 |
| ---------------------- | ---------------------------------- | ---------------------------------------------------- |
| `CesiumGeoreference`   | `ACesiumGeoreference`              | 座標原点（latitude / longitude）の反映先             |
| `TerrainHeightTileset` | `ACesium3DTileset`                 | 地形高さのサンプリング元                             |
| `CesiumSunSky`         | `ACesiumSunSky`                    | 太陽・大気の反映先                                   |
| `StageRootActor`       | レベルで任意に選んだ `AActor`      | ステージ全体の基準（後述）                           |

1. レベルに `ACesiumGeoreference` / `ACesium3DTileset` / `ACesiumSunSky` を配置
2. 地形高サンプリング用に 1 つの Tileset を `TerrainHeightTileset` に割り当て
3. `A_LevelInfo` を選択し、Details パネルの **Cesium Studio** カテゴリで 4 つを割り当てる

`cesium` ブロックを含むセッションを開始する前に、4 つの参照スロットが埋まっていることを確認してください。

## StageRootActor

`LevelInfo.StageRootActor` は **Cesium Studio 専用の特別なアクターではなく、`ALevelInfo` の参照プロパティ名**です。空のグループ化用 Blueprint Actor（例: `BP_CesiumStage`）でも、レベル内に既に存在する Actor でも、`LevelInfo.StageRootActor` 参照に割り当てたものがそのままステージ全体の基準として使われます。

Cesium 適用時には `StageRootActor` の X / Y / 回転は保持され、Z だけが「`TerrainHeightTileset` の地形高 + `stage.heightMeters`」に更新されます。

### 配下に取り付ける要素

PersonSlot / Camera / Monitor / SpawnPoint など、セッション単位で動かしたい要素は **`StageRootActor` の子（または任意の構成要素）として配置**してください。`StageRootActor` の Z 更新に追随して、同じ高さに移動します。

`Location` / `Scene` の階層と識別子解決は通常の `StudioLevel` と同じです。詳細は [Location と Scene の概念](./location-scene-concept) を参照してください。

## 動作確認

リポジトリの `Samples/session/sample-cesium.json` をテンプレートとして Firebase Realtime Database に書き込み、PIE を開始します。`status` が `ready` になると、クライアントが `initial_environment.cesium` を検出し、Cesium Studio の初期環境適用が走ります。

- サンプル: `Samples/session/sample-cesium.json`（このドキュメントと同じ構造）
- 関連: [Location と Scene の概念](./location-scene-concept) / [キャラクター動的指定(PersonSlot)ガイド](./character-setup/person-slot-guide) / [カメラ設定ガイド](./camera-setup/camera-setup-guide) / [メディアディスプレイ設定ガイド](./media-display-setup/media-display-setup-guide) / [動的オブジェクト配置ガイド](./object-setup/object-spawn-guide)
