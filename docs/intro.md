---
sidebar_position: 1
title: はじめに
description: XroidVerseドキュメントの概要とクイックスタートガイド
keywords: [XroidVerse, Unreal Engine 5, MetaHuman, AI録画システム, 操作マニュアル, 開発ガイド]
---

# XroidVerse ドキュメント

**XroidVerse**プロジェクトのドキュメントサイトへようこそ！

このサイトでは、Unreal Engine 5で構築されたAI録画システム「XroidVerse」の使用方法と開発に関する情報を提供しています。

:::info プロジェクト概要
XroidVerseは、**Unreal Engine 5**、**MetaHuman**、**AI対話システム**を組み合わせた革新的なAI録画システムです。
Xroid Studioで作成したシナリオを再生し、その様子を高品質で録画することができます。
:::

## 🎯 このドキュメントについて

### 📚 主要コンテンツ

import DocCardList from '@theme/DocCardList';

<DocCardList />

### 🎯 対象読者

このドキュメントは、以下の方々を対象としています：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="users" label="ユーザー" default>
    #### 👤 ソフトウェア利用者
    - **クリエイター**: XroidVerseを使って映像コンテンツを制作したい方
    - **動画制作者**: AIシナリオの録画・配信を行いたい方
    - **一般ユーザー**: XroidVerseの基本的な操作方法を学びたい方
    
    👉 [操作マニュアルから始める](./user-manual)
  </TabItem>
  <TabItem value="developers" label="開発者">
    #### 👨‍💻 システム開発者
    - **プロジェクト開発者**: コードベースの理解が必要な方
    - **新規参加者**: プロジェクト構造を学びたい方
    - **アーキテクト**: システム設計を理解したい方
    
    👉 [アーキテクチャガイドから始める](./architecture)
  </TabItem>
</Tabs>

## 🚀 XroidVerse とは

XroidVerseは以下の特徴を持つシステムです：

| 項目 | 詳細 |
|------|------|
| **エンジン** | Unreal Engine 5 |
| **主要機能** | AI対話シナリオの再生・録画 |
| **キャラクター** | MetaHuman統合 |
| **出力形式** | 高品質映像ファイル（MP4） |
| **対応録画** | 内部録画機能・外部録画（OBS等） |

## 🗺️ ドキュメント構成

### 👤 ユーザー向けコンテンツ

**すぐにXroidVerseを使い始めたい方**は、以下から始めてください：

- 📖 [**操作マニュアル**](./user-manual): ソフトウェアの基本的な使用方法
- 🎬 録画方法の選択（内部録画・OBS録画）
- 🔐 Firebase認証とシナリオダウンロード
- 🎮 シナリオ再生と操作方法
- 🔧 トラブルシューティング

### 👨‍💻 開発者向けコンテンツ

**システムの技術的詳細や開発に参加したい方**は、以下をご覧ください：

#### 1. システム理解
- 🏗️ [**アーキテクチャガイド**](./architecture): プロジェクト全体構造の把握

#### 2. 実装ガイド
具体的な機能実装については、各チュートリアルを参照してください：

<Tabs>
  <TabItem value="character" label="キャラクター設定" default>
    MetaHumanの統合と設定方法を学習します。
    
    👉 [キャラクター設定ガイド](./tutorials/character-setup/character-addition-guide)
  </TabItem>
  <TabItem value="expression" label="表情設定">
    顔の表情制御システムの実装方法を学習します。
    
    👉 [表情設定ガイド](./tutorials/expression-setup/facial-expression-guide)
  </TabItem>
  <TabItem value="motion" label="モーション設定">
    Mixamoアニメーションシステムの統合方法を学習します。
    
    👉 [モーション設定ガイド](./tutorials/motion-setup/animation-guide)
  </TabItem>
</Tabs>

## 📝 開発原則

このプロジェクトでは以下の原則に従って開発を行います：

:::tip コーディング規約
- [Unreal Engine 公式コーディング規約](https://dev.epicgames.com/documentation/ja-jp/unreal-engine/epic-cplusplus-coding-standard-for-unreal-engine)
- [Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html)
:::

### 設計原則
- **DRY原則**: Don't Repeat Yourself
- **SOLID原則**: オブジェクト指向設計の5原則
- **モジュラー設計**: 機能別の独立したモジュール構成

### 実装方針

| 技術 | 用途 | 備考 |
|------|------|------|
| **C++** | ロジック実装 | すべてのゲームロジック |
| **ブループリント** | 見た目・エディター設定 | UIとビジュアル要素のみ |

## 🔗 関連リンク

- **GitHub リポジトリ**: [XroidVerse](https://github.com/Verseday/XroidVerse)
- **Issue トラッキング**: [GitHub Issues](https://github.com/Verseday/XroidVerse/issues)
- **ディスカッション**: [GitHub Discussions](https://github.com/Verseday/XroidVerse/discussions)

---

:::note 更新情報
このドキュメントは開発の進行に合わせて継続的に更新されます。最新の情報については、GitHubリポジトリをご確認ください。
:::
