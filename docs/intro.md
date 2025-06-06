---
sidebar_position: 1
title: はじめに
description: XroidVerse開発者ドキュメントの概要とクイックスタートガイド
keywords: [XroidVerse, Unreal Engine 5, MetaHuman, 開発ガイド]
---

# XroidVerse 開発者ドキュメント

**XroidVerse**プロジェクトの開発者向けドキュメントへようこそ！

このサイトでは、Unreal Engine 5で構築されたゲーム「XroidVerse」の開発に必要な情報を提供しています。

:::info プロジェクト概要
XroidVerseは、**Unreal Engine 5**、**MetaHuman**、**AI対話システム**を組み合わせた革新的なゲームプロジェクトです。
:::

## 🎯 このドキュメントについて

### 📚 主要コンテンツ

import DocCardList from '@theme/DocCardList';

<DocCardList />

### 🎯 対象読者

- **プロジェクト開発者**: コードベースの理解が必要な方
- **新規参加者**: プロジェクト構造を学びたい方
- **アーキテクト**: システム設計を理解したい方

## 🏗️ プロジェクト概要

XroidVerseは以下の特徴を持つプロジェクトです：

| 項目 | 詳細 |
|------|------|
| **エンジン** | Unreal Engine 5 |
| **アーキテクチャ** | モジュラー設計 |
| **開発言語** | C++（ブループリントは見た目のみ） |
| **AI機能** | 対話システム、コンテンツ生成 |
| **キャラクター** | MetaHuman統合 |

## 🚀 クイックスタート

### 1. アーキテクチャを理解する
まずは[アーキテクチャガイド](./architecture)でプロジェクトの全体構造を把握しましょう。

### 2. 実践的なチュートリアル
具体的な実装については、各チュートリアルを参照してください：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
