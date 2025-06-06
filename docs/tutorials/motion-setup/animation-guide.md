---
sidebar_position: 1
title: モーション設定ガイド
description: Mixamoを使用してXroidVerseプロジェクトにアニメーション（モーション）を追加する詳細手順
keywords: [Mixamo, アニメーション, モーション設定, Terribilis Studio, AnimMontage]
---

# モーション設定ガイド

このドキュメントでは、Mixamoを使用してXroidVerseプロジェクトにアニメーション（モーション）を追加する手順について説明します。

:::info 所要時間
このチュートリアルの完了には約30-40分かかります。
:::

## 前提条件

:::warning 必要な準備
- Adobe アカウント（Mixamo用）
- インターネット接続
- Unreal Engine エディターでプロジェクトが開いている状態
:::

## 📋 手順概要

1. **Mixamo Converterの準備** - 必要なツールのダウンロードとインストール
2. **Mixamoでのアニメーション取得** - キャラクターアップロードとアニメーション選択
3. **アニメーションの変換** - UE5対応形式への変換
4. **Unreal Engineへのインポート** - プロジェクトへの統合
5. **AnimMontageの作成** - ゲーム内で使用可能な形式に変換
6. **プロジェクトへの統合** - PersonMotionProcessorでの設定

---

## 🛠️ Step 1: Mixamo Converterの準備

### 1.1 Mixamo Converterページへのアクセス

[Mixamo Converter](https://terribilisstudio.fr/?section=MC)にアクセスします。

### 1.2 Terribilis Studio Launcherのダウンロード

ページ右上の黄色い **DOWNLOAD GAME PLATFORM** ボタンをクリックして、Terribilis Studio Launcher をダウンロードして起動します。

![Terribilis Studio Launcherダウンロード](/img/docs/motion-setup/01-download-launcher.png)

### 1.3 Mixamo Converterのインストールと起動

Terribilis Studio Launcher 内で **Mixamo Converter** を見つけてクリックし、インストールして起動します。

![Mixamo Converterクリック](/img/docs/motion-setup/02-mixamo-converter-click.png)

### 1.4 変換プロセスの開始

Mixamo Converter が起動したら、**Enter the Conversion Process** をクリックします。

![変換プロセス開始](/img/docs/motion-setup/03-enter-conversion-process.png)

### 1.5 キャラクターの選択

**CHOOSE A CHARACTER** セクションで、**Quinn Unreal Engine 5**（一番右のマネキン）をクリックします。

![Quinn Unreal Engine 5選択](/img/docs/motion-setup/04-choose-quinn-character.png)

すると、画像のようにエクスプローラーが立ち上がります。

![エクスプローラー起動](/img/docs/motion-setup/05-explorer-opens.png)

:::note Mixamo Converterについて
Mixamo Converterは必須ツールです。直接MixamoからダウンロードしたFBXファイルはUnreal Engineで正常に動作しません。
:::

---

## 🎭 Step 2: Mixamoでのアニメーション取得

### 2.1 Mixamoへのサインイン

[Mixamo](https://www.mixamo.com/)にアクセスして、Adobe アカウントでサインインします。

### 2.2 キャラクターのアップロード

Mixamo で **UPLOAD CHARACTER** ボタンを押し、先ほどのエクスプローラーから `_SKM_Quinn.FBX` をドラッグ&ドロップで Mixamo にアップロードします。

![キャラクターアップロード](/img/docs/motion-setup/06-upload-character.png)

![FBXファイルドラッグ&ドロップ](/img/docs/motion-setup/07-drag-drop-fbx.png)

### 2.3 Auto-Rigger処理

アップロードが完了すると、Auto-Rigger画面が表示されます。

![Auto-Rigger画面](/img/docs/motion-setup/08-auto-rigger-screen.png)

この画面が出たら **NEXT** ボタンを押して次へ進みます。

### 2.4 アニメーションの選択とダウンロード

追加したいアニメーションを選び、必要に応じてパラメーターを調節し、良ければ **DOWNLOAD** ボタンを押します。

![アニメーション選択](/img/docs/motion-setup/09-animation-selection.png)

:::tip アニメーション選択のコツ
- プロジェクトの用途に合ったアニメーションを選択しましょう
- パラメーターを調整して、キャラクターの動きを微調整できます
- プレビューで動きを確認してからダウンロードしましょう
:::

### 2.5 ダウンロード設定

ダウンロード設定画面で以下のように設定し、**DOWNLOAD** ボタンを押します：

![ダウンロード設定](/img/docs/motion-setup/10-download-settings.png)

| 設定項目 | 推奨値 | 理由 |
|----------|--------|------|
| **Format** | FBX Binary (.fbx) | UE5との互換性 |
| **Skin** | Without Skin | キャラクターメッシュは不要 |
| **Frames per Second** | 30 | UE5での安定性 |
| **Keyframe Reduction** | none | データの完全性保持 |

:::warning フレームレートについて
60FPSだとインポート時にエラーが起こる場合があるため、30FPSを推奨します。
:::

---

## 🔄 Step 3: アニメーションの変換

### 3.1 Mixamo Converterでの変換

Mixamo Converter に戻り、中央辺りまでスクロールして変換セクションまで移動します。

![変換セクション](/img/docs/motion-setup/11-conversion-section.png)

以下の手順で変換を行います：

1. **①** のボタンを押すとエクスプローラーが出るので、先ほどダウンロードした FBX ファイルを、開いたエクスプローラーの場所にコピーします
2. **②** の欄（ファイル名設定）は空欄で構いません
3. **③** のボタンを押すと、使えるように変換が開始されます

### 3.2 変換完了の確認

変換が完了すると、以下のような画面が表示されます。

![変換完了画面](/img/docs/motion-setup/12-conversion-completed.png)

右側の **Open the folder with converted animations** ボタンを押すと、変換後の FBX があるフォルダが開きます。

:::success 変換完了
これでUnreal Engine 5で使用可能なアニメーションファイルが準備できました。
:::

---

## 📥 Step 4: Unreal Engineへのインポート

### 4.1 Unreal Engineへのインポート

変換後の FBX ファイルを Unreal Engine の `/All/Content/Characters/Mannequins/Animations/Quinn/Motions` にドラッグ&ドロップします。

### 4.2 インポート設定

FBX Import Options ダイアログが表示されたら、以下のように設定して **Import All** ボタンを押します：

![インポート設定](/img/docs/motion-setup/13-import-settings.png)

:::info 重要な設定項目
| 設定項目 | 設定値 | 説明 |
|----------|--------|------|
| **Skeleton** | SK_Mannequin | 使用するスケルトン |
| **Use Default Sample Rate** | ✅ チェック | デフォルトサンプルレート使用 |
| **Import Bone Tracks** | ✅ チェック | ボーントラックをインポート |
| **Delete Existing Morph Target Curves** | ❌ チェック外す | 既存のモーフターゲットカーブを保持 |
| **Do not import curves with only default values** | ❌ チェック外す | デフォルト値のみのカーブもインポート |
:::

---

## 🎬 Step 5: AnimMontageの作成

### 5.1 AnimMontageの作成

インポートしたアニメーションは、Animation Sequence ファイルになります。これを右クリックして、**Create** → **Create AnimMontage** を押します。

![AnimMontage作成](/img/docs/motion-setup/14-create-anim-montage.png)

:::note AnimMontageについて
AnimMontageは、ゲーム内でアニメーションを制御するために必要な形式です。Animation Sequenceから作成します。
:::

---

## ⚙️ Step 6: プロジェクトへの統合

### 6.1 PersonMotionProcessorの編集

`/All/Content/Xroid/Processors/Processors/A_PersonMotionProcessor` をダブルクリックで開きます。

### 6.2 Montage Table変数の選択

画面左下の **My Blueprint** パネルから、**VARIABLES** → **Private Constant** → **Montage Table** を選択します。

![Montage Table選択](/img/docs/motion-setup/15-montage-table-selection.png)

### 6.3 新しいアニメーションの追加

右の **Details** パネルの **Default Value** セクションの **Montage Table** 右の **+** ボタンを押し、新しく追加したアニメーションを追加します。

![アニメーション追加](/img/docs/motion-setup/16-add-animation-to-table.png)

:::warning 重要な番号対応
ここで Index [5] のように [ ] の中に書かれている数字が、JSON内の person-motion タイプの motion キーの番号に対応します。この番号を覚えておいてください。
:::

---

## ✅ 設定完了

:::success 完了！
これでMixamoモーションの追加と設定が完了しました。追加されたアニメーションは、JSON内でモーション番号を指定することで使用できるようになります。
:::



## 📚 関連ドキュメント

- [キャラクター追加ガイド](../character-setup/character-addition-guide)
- [表情設定ガイド](../expression-setup/facial-expression-guide)

## 🔗 外部リンク

- [Mixamo公式サイト](https://www.mixamo.com/)
- [Terribilis Studio - Mixamo Converter](https://terribilisstudio.fr/?section=MC)
- [Adobe Creative Cloud](https://www.adobe.com/creativecloud.html) 