# XroidVerse 開発者ドキュメント

このディレクトリ（`dev-docs`）には、XroidVerseプロジェクトの開発者向けドキュメントサイト（Docusaurus）が含まれています。

## 📋 前提条件

### Node.js のインストール
Docusaurusを実行するには、Node.js（バージョン18.0以上）が必要です。

1. **Node.js の公式サイトからダウンロード**
   - [Node.js 公式サイト](https://nodejs.org/) にアクセス
   - LTS版（推奨）をダウンロードしてインストール

2. **インストールの確認**
   ```bash
   node --version
   npm --version
   ```

### 依存関係のインストール
`dev-docs`ディレクトリ内で、初回セットアップ時は必要なパッケージをインストールします：

```bash
# XroidVerseプロジェクトのルートから
cd dev-docs
npm install
```

## 🚀 サイトの起動

**注意**: 以下のコマンドはすべて `dev-docs` ディレクトリ内で実行してください。

### 開発サーバーの起動
```bash
# dev-docs ディレクトリ内で実行
npm start
```

開発サーバーが起動すると、ブラウザで `http://localhost:3000` にアクセスして、ドキュメントサイトを確認できます。

### 本番用ビルド
```bash
# dev-docs ディレクトリ内で実行
npm run build
```

静的ファイルが `build/` ディレクトリに生成されます。

### ビルドの確認
```bash
# dev-docs ディレクトリ内で実行
npm run serve
```

本番用ビルドをローカルでプレビューできます。

## 📁 ディレクトリ構造

`dev-docs` ディレクトリ内の構造：

```
dev-docs/                     # このディレクトリ
├── docs/                     # ドキュメントファイル
│   ├── intro.md             # トップページ
│   ├── architecture.md      # アーキテクチャガイド
│   └── tutorials/           # チュートリアル
│       ├── character-setup/ # キャラクター設定
│       ├── expression-setup/ # 表情設定
│       └── motion-setup/    # モーション設定
├── static/                  # 静的ファイル
│   └── img/                # ドキュメント用画像
├── src/                    # React コンポーネント
├── docusaurus.config.ts    # サイト設定
├── sidebars.ts            # サイドバー設定
├── package.json           # 依存関係
└── README.md              # このファイル
```

## 🚀 クイックスタート

初めて `dev-docs` のドキュメントサイトを使用する場合の手順：

1. **Node.js のインストール**（上記参照）
2. **dev-docs ディレクトリに移動**
   ```bash
   # XroidVerseプロジェクトのルートから
   cd dev-docs
   ```
3. **依存関係のインストール**
   ```bash
   # dev-docs ディレクトリ内で実行
   npm install
   ```
4. **開発サーバーの起動**
   ```bash
   # dev-docs ディレクトリ内で実行
   npm start
   ```
5. **ブラウザでアクセス**
   - `http://localhost:3000` を開く

## 📝 ドキュメントの編集

### 新しいページの追加
1. `docs/` 内に新しい `.md` ファイルを作成
2. ファイルの先頭にFrontmatterを追加：
   ```markdown
   ---
   sidebar_position: 1
   title: "ページタイトル"
   description: "ページの説明"
   ---
   ```
3. `sidebars.ts` でサイドバーの設定を更新

### 画像の追加
1. 画像を `static/img/` に配置
2. Markdownで参照：`![画像説明](/img/画像ファイル名.png)`

### 設定の変更
- **サイト情報**: `docusaurus.config.ts`
- **サイドバー**: `sidebars.ts`
- **スタイル**: `src/css/custom.css`

## 🎯 コンテンツ

### 既存のドキュメント
- **イントロダクション**: プロジェクト概要とクイックスタート
- **アーキテクチャガイド**: Sourceフォルダの構造とモジュール設計
- **チュートリアル**: 
  - キャラクター設定ガイド
  - 表情設定ガイド
  - モーション設定ガイド

### 技術仕様
- **フレームワーク**: Docusaurus 3.8.0
- **言語**: TypeScript
- **ローカライゼーション**: 日本語 (ja)
- **テーマ**: Classic

## 🔗 関連リンク

- [Docusaurus 公式ドキュメント](https://docusaurus.io/)
- [XroidVerse GitHub リポジトリ](https://github.com/Verseday/XroidVerse)
- [Unreal Engine ドキュメント](https://docs.unrealengine.com/)

## 💡 貢献ガイド

### ドキュメントの改善
1. 新しいブランチを作成
2. `docs/` 内のファイルを編集
3. 開発サーバーで確認
4. プルリクエストを作成

### ベストプラクティス
- **明確なタイトル**: 内容が分かりやすいタイトルを使用
- **構造化**: 見出しとリストで情報を整理
- **画像の活用**: 理解を助ける図や画像を追加
- **リンク**: 関連するドキュメント間のリンクを設定

## 🔧 トラブルシューティング

### よくある問題

**注意**: 以下のコマンドはすべて `dev-docs` ディレクトリ内で実行してください。

1. **Node.js がインストールされていない**
   ```bash
   # エラー例: 'node' は、内部コマンドまたは外部コマンド...
   # 解決方法: Node.js をインストール（上記参照）
   ```

2. **依存関係がインストールされていない**
   ```bash
   # エラー例: Cannot find module...
   # dev-docs ディレクトリ内で実行
   npm install
   ```

3. **開発サーバーが起動しない**
   ```bash
   # dev-docs ディレクトリ内で実行
   npm install
   npm start
   ```

4. **ビルドエラー**
   - ブロークンリンクを確認
   - 画像パスの確認
   - Frontmatterの構文確認

5. **画像が表示されない**
   - パスが `/img/` から始まっているか確認
   - ファイルが `static/img/` にあるか確認

6. **キャッシュの問題**
   ```bash
   # dev-docs ディレクトリ内で実行
   npm run clear
   npm start
   ```

7. **ポートが使用中**
   ```bash
   # dev-docs ディレクトリ内で実行
   npm start -- --port 3001
   ```

問題が解決しない場合は、GitHub Issues で報告してください。
