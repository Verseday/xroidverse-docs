---
sidebar_position: 1
title: はじめに
description: XroidVerseユーザーマニュアルの概要とクイックスタートガイド
keywords: [XroidVerse, Unreal Engine 5, MetaHuman, AI録画システム, 操作マニュアル, チュートリアル]
---

# XroidVerse ユーザーマニュアル

**XroidVerse**の操作マニュアルへようこそ！

このサイトでは、Unreal Engine 5で構築されたAI録画システム「XroidVerse」の使用方法と設定について説明します。

:::info プロジェクト概要
XroidVerseは、**Unreal Engine 5**、**MetaHuman**、**AI対話システム**を組み合わせた革新的なAI録画システムです。
Xroid Studioで作成したシナリオを再生し、その様子を高品質で録画することができます。
:::

## 🎯 このマニュアルについて

### 📚 主要コンテンツ

import DocCardList from '@theme/DocCardList';

<DocCardList />

### 🎯 対象読者

このマニュアルは、以下の方々を対象としています：

- **クリエイター**: XroidVerseを使って映像コンテンツを制作したい方
- **動画制作者**: AIシナリオの録画・配信を行いたい方
- **一般ユーザー**: XroidVerseの基本的な操作方法を学びたい方

## 🚀 XroidVerse とは

XroidVerseは以下の特徴を持つシステムです：

| 項目 | 詳細 |
|------|------|
| **エンジン** | Unreal Engine 5 |
| **主要機能** | AI対話シナリオの再生・録画 |
| **キャラクター** | MetaHuman |
| **ワールド** | Clinic（クリニック）、Future（未来都市）等 |
| **出力形式** | MP4 |
| **対応録画** | 内部録画機能・外部録画（OBS等） |

## 🗺️ マニュアル構成

### 👤 基本操作

**すぐにXroidVerseを使い始めたい方**は、以下から始めてください：

- 📖 [**操作マニュアル**](./user-manual): ソフトウェアの基本的な使用方法
- 🎬 録画方法の選択（内部録画・OBS録画）
- 🔐 Firebase認証とシナリオダウンロード
- 🎮 シナリオ再生と操作方法
- 🔧 トラブルシューティング

### ⚙️ システム設定

**XroidVerseシステムの詳細設定を行いたい方**は、以下をご覧ください：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="character" label="キャラクター追加" default>
    MetaHumanの作成と追加方法を学習します。
    
    👉 [キャラクター追加ガイド](./tutorials/character-setup/character-addition-guide)
  </TabItem>
  <TabItem value="personslot" label="キャラクター動的指定設定">
    PersonSlotを使用したキャラクターの動的指定方法を学習します。
    
    👉 [キャラクター動的指定(PersonSlot)ガイド](./tutorials/character-setup/person-slot-guide)
  </TabItem>
  <TabItem value="expression" label="表情設定">
    顔の表情制御システムの設定方法を学習します。
    
    👉 [表情設定ガイド](./tutorials/expression-setup/facial-expression-guide)
  </TabItem>
  <TabItem value="motion" label="モーション設定">
    Mixamoアニメーションシステムの設定方法を学習します。
    
    👉 [モーション設定ガイド](./tutorials/motion-setup/animation-guide)
  </TabItem>
</Tabs>

その他の設定項目：
- 🖼️ [画像ディスプレイ設定](./tutorials/image-display-setup/image-display-setup-guide)
- 📺 [動画ディスプレイ設定](./tutorials/video-display-setup/video-display-setup-guide)
- 📷 [カメラ設定](./tutorials/camera-setup/camera-setup-guide)