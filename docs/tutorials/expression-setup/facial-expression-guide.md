---
sidebar_position: 1
title: 表情設定ガイド
description: MetaHumanキャラクターに新しい表情（笑顔、悲しい顔など）を追加する詳細手順
keywords: [MetaHuman, 表情設定, Level Sequence, Control Rig, Animation Sequence]
---

# 表情設定ガイド

このドキュメントでは、MetaHumanキャラクターに新しい表情（笑顔、悲しい顔など）を追加する手順について説明します。

:::info 所要時間
このチュートリアルの完了には約20-30分かかります。
:::

## 前提条件

:::warning 必要な準備
- MetaHumanキャラクターがプロジェクトに既に追加されている
- Unreal Engine エディターでプロジェクトが開いている状態
:::

## 📋 手順概要

1. **Level Sequenceの作成** - 表情作成用の一時的なシーケンス
2. **キャラクターの追加** - Sequencerにキャラクターを配置
3. **表情の適用** - Control Rig Poseを使用した表情設定
4. **Animation Sequenceの生成** - 表情データの保存
5. **プロジェクトへの統合** - PersonExpressionProcessorでの設定

---

## 🎬 Step 1: Level Sequenceの作成

### 1.1 Level Sequenceの追加

レベルエディターに移動し、上部のカチンコボタンを押して、**Add Level Sequence** を選択します。

![Level Sequence追加](/img/docs/expression-setup/01-add-level-sequence.png)

### 1.2 Sequenceファイルの保存

適当な場所を選択して **Save** を押します。このファイルは作業後に削除するので、場所は覚えていればどこでも構いません。

![Sequence保存](/img/docs/expression-setup/02-save-sequence.png)

:::note 一時ファイルについて
このLevel Sequenceは表情作成のための一時的なファイルです。作業完了後に削除します。
:::

### 1.3 Sequencerウィンドウの確認

保存すると、画面下部に **Sequencer** のウィンドウが表示されます。

![Sequencerウィンドウ](/img/docs/expression-setup/03-sequencer-window.png)

---

## 👤 Step 2: キャラクターの設定

### 2.1 MetaHumanキャラクターの追加

任意のMetaHuman BP_RTG_Manequinn_名前 をドラッグ&ドロップで Sequencer に追加します。

![キャラクターをSequencerに追加](/img/docs/expression-setup/04-add-character-to-sequencer.png)

### 2.2 タイムライン位置の調整

Sequencer の右側の赤い縦線をつかんで移動させます。

![タイムライン位置調整](/img/docs/expression-setup/05-timeline-position.png)

赤い縦線を 0000 の位置まで移動させます。

![タイムライン0位置](/img/docs/expression-setup/06-timeline-zero-position.png)



---

## 😊 Step 3: 表情の適用

### 3.1 Posesボタンの選択

画像の場所にある **Poses** ボタンを押します。

![Posesボタン](/img/docs/expression-setup/07-poses-button.png)

### 3.2 Control Rig Poseウィンドウの操作

**Control Rig Pose** ウィンドウが表示されます。以下の手順で操作します：

![Control Rig Poseウィンドウ](/img/docs/expression-setup/08-control-rig-pose-window.png)

1. まず左側で **Content** フォルダを選択
2. その後、右側で **Metahumans/Common/Common/PoseLibrary/Face/Expressions** を開く

### 3.3 表情の選択

表情アセット（Control Rig Pose アセット）の一覧から、追加したい表情を選択します。

:::info 利用可能な表情
MetaHumanには以下のような表情が用意されています：
- 笑顔（Smile）
- 悲しい顔（Sad）
- 怒り（Angry）
- 驚き（Surprised）
- その他多数の表情バリエーション
:::

### 3.4 表情の適用

以下の手順で表情をキャラクターに適用します：

![表情の適用](/img/docs/expression-setup/09-paste-pose.png)

1. Sequencer 内の **Face** 内のすべての項目を選択（一番上の項目を選択してから、一番下の項目を Shift 押しながら選択）
2. Control Rig Pose ウィンドウ内の **Key** にチェックを入れた状態で、**Paste Pose** ボタンを押す

:::warning 重要な操作
- Faceの**すべての項目**を選択することが重要です
- **Key**にチェックが入っていることを確認してください
:::

### 3.5 Control Rig Poseウィンドウを閉じる

Control Rig Pose ウィンドウを閉じます。

---

## 💾 Step 4: Animation Sequenceの生成

### 4.1 Animation Sequenceのベイク

Sequencer 内の **Face** を右クリックして、**Bake Animation Sequence** を選択します。

![Animation Sequenceベイク](/img/docs/expression-setup/10-bake-animation-sequence.png)

### 4.2 Animation Sequenceの保存

`/All/Content/MetaHumans/Common/Common/PoseLibrary/Face/Expressions` の場所に **AS_表情名** という名前で **OK** を押します。

![Animation Sequence保存](/img/docs/expression-setup/11-animation-sequence-save.png)

:::tip 命名規則
表情名は分かりやすい名前を付けましょう。例：
- AS_Happy（笑顔）
- AS_Sad（悲しい顔）
- AS_Angry（怒り）
:::

### 4.3 Animation Sequenceのエクスポート

以下の画面では初期設定のまま **Export To Animation Sequence** を押します。

![Animation Sequenceエクスポート](/img/docs/expression-setup/12-export-to-animation-sequence.png)

---

## ⚙️ Step 5: プロジェクトへの統合

### 5.1 PersonExpressionProcessorでの設定

最後に、新しい表情をプロジェクトで使用できるように設定します：

1. `/All/Content/Xroid/Processors/Processors/A_PersonExpressionProcessor` をダブルクリックで開く

![PersonExpressionProcessor開く](/img/docs/expression-setup/14-person-expression-processor.png)

2. 画面左下の **My Blueprint** パネルで、**VARIABLES** → **Private Constant** → **Expression Table** を選択
3. 画面右の **Details** パネル内の **Default Value** セクション内の **Expression Table** 右の **+** ボタンを押し、先ほど作成した **AS_表情名** という新しい表情を追加

![Expression Table追加](/img/docs/expression-setup/13-expression-table-add.png)

:::warning 重要な番号対応
Index [6] のように [ ] の中に書かれている数字が、JSONのperson-expressionタイプのexpressionキーの番号に対応します。この番号を覚えておいてください。
:::

---

## 🧹 Step 6: 作業完了後の処理

表情設定が完了したら、手順1で作成したLevel Sequenceファイルを削除してください。

:::success 完了！
これで人物の表情設定は完了です。新しい表情がJSONで指定できるようになりました。
:::



## 📚 関連ドキュメント

- [キャラクター追加ガイド](../character-setup/character-addition-guide)
- [モーション設定ガイド](../motion-setup/animation-guide) 